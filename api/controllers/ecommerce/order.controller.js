import mongoose from "mongoose";
import Store from "../../models/configuration/setting/store.schema.js";
import Cart from "../../models/ecommerce/cart.schema.js";
import Order from "../../models/ecommerce/order.schema.js";
import Payment from "../../models/configuration/setting/payment.schema.js";

export const createPayment = async (req, res) => {
  try {
    const customerId = req.query.customerId || req.customer?._id || "6945fa14ba3f1cfc95b588fa";

    let customerObjectId;
    if (mongoose.Types.ObjectId.isValid(customerId)) {
      customerObjectId = new mongoose.Types.ObjectId(customerId);
    } else {
      customerObjectId = new mongoose.Types.ObjectId("6945fa14ba3f1cfc95b588fa");
    }

    const shippingData = Store.findOne({ type: "shipping" });
    const taxData = Store.findOne({ type: "tax" });
    const cartData = Cart.aggregate([
      {
        $match: {
          customer: customerObjectId,
          deletedAt: null,
        },
      },

      {
        $addFields: {
          itemTotal: { $multiply: ["$price", "$quantity"] },
        },
      },

      {
        $lookup: {
          from: "items",
          localField: "itemId",
          foreignField: "_id",
          as: "item",
        },
      },
      { $unwind: "$item" },

      {
        $lookup: {
          from: "brands",
          localField: "item.brand",
          foreignField: "_id",
          as: "item.brand",
        },
      },
      { $unwind: { path: "$item.brand", preserveNullAndEmptyArrays: true } },

      {
        $lookup: {
          from: "categories",
          localField: "item.categories",
          foreignField: "_id",
          as: "item.categories",
        },
      },

      {
        $lookup: {
          from: "files",
          localField: "item.featured_image",
          foreignField: "_id",
          as: "item.featured_image",
        },
      },
      {
        $unwind: {
          path: "$item.featured_image",
          preserveNullAndEmptyArrays: true,
        },
      },

      {
        $lookup: {
          from: "files",
          localField: "item.gallery",
          foreignField: "_id",
          as: "item.gallery",
        },
      },

      {
        $lookup: {
          from: "varients",
          localField: "variantId",
          foreignField: "_id",
          as: "variant",
        },
      },
      {
        $unwind: {
          path: "$variant",
          preserveNullAndEmptyArrays: true,
        },
      },

      {
        $lookup: {
          from: "files",
          localField: "variant.gallery",
          foreignField: "_id",
          as: "variant.gallery",
        },
      },

      {
        $group: {
          _id: null,
          items: {
            $push: {
              _id: "$_id",
              itemId: "$itemId",
              variantId: "$variantId",
              item: "$item",
              variant: "$variant",
              quantity: "$quantity",
              price: "$price",
              itemTotal: "$itemTotal",
            },
          },
          totalAmount: { $sum: "$itemTotal" },
        },
      },

      {
        $project: {
          _id: 0,
          items: 1,
          totalAmount: 1,
        },
      },
    ]);

    const [shipping, tax, cart] = await Promise.all([
      shippingData,
      taxData,
      cartData,
    ]);

    // Fetch active payment gateway configuration
    const paymentConfig = await Payment.findOne({ status: "active" });

    const currency_Symbol = process.env.CURRENCY_SYMBOL || "₹";
    const currency_code = process.env.CURRENCY_CODE || "INR";
    const taxRate = tax?.value?.tax ? Number(tax.value.tax) : 0;
    const shippingCost = shipping?.value?.shipping ? Number(shipping.value.shipping) : 0;

    if (!cart || cart.length === 0 || !cart[0]) {
      const data = {
        currency_Symbol,
        currency_code,
        items: { items: [], totalAmount: 0 },
        discount: 0,
        tax: taxRate,
        shipping: shippingCost,
        totalAmount: shippingCost,
        paymentConfig: paymentConfig ? {
          key_id: paymentConfig.key_id,
          gatway: paymentConfig.gatway
        } : null
      };
      return res.render("payment", data);
    }

    let Total =
      Number(cart[0].totalAmount) -
      0 +
      ((Number(cart[0].totalAmount) - 0) * taxRate) / 100 +
      shippingCost;

    const data = {
      currency_Symbol,
      currency_code,
      items: cart[0],
      discount: 0,
      tax: taxRate,
      shipping: shippingCost,
      totalAmount: Total,
      paymentConfig: paymentConfig ? {
        key_id: paymentConfig.key_id,
        gatway: paymentConfig.gatway
      } : null
    };
    res.render("payment", data);
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const placeOrder = async (req, res) => {
  try {
    const customerId = req.query.customerId || req.body.customerId || "6945fa14ba3f1cfc95b588fa";

    let customerObjectId;
    if (mongoose.Types.ObjectId.isValid(customerId)) {
      customerObjectId = new mongoose.Types.ObjectId(customerId);
    } else {
      customerObjectId = new mongoose.Types.ObjectId("6945fa14ba3f1cfc95b588fa");
    }

    const shippingData = Store.findOne({ type: "shipping" });
    const taxData = Store.findOne({ type: "tax" });
    const cartData = Cart.find({ customer: customerObjectId, deletedAt: null });

    const [shipping, tax, cartItems] = await Promise.all([
      shippingData,
      taxData,
      cartData,
    ]);

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({
        status: "error",
        message: "Your cart is empty. Please add items to your cart first.",
      });
    }

    const { transactionId, paymentGateway } = req.body;

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxRate = tax?.value?.tax ? Number(tax.value.tax) : 0;
    const shippingCost = shipping?.value?.shipping ? Number(shipping.value.shipping) : 0;
    const taxAmount = (subtotal * taxRate) / 100;
    const total = subtotal + taxAmount + shippingCost;

    const currency_Symbol = process.env.CURRENCY_SYMBOL || "₹";
    const currency_code = process.env.CURRENCY_CODE || "INR";

    // Generate a unique order number
    const order_no = "ORD-" + Math.floor(100000 + Math.random() * 900000);

    const orderPayload = {
      order_no,
      currency: currency_code,
      currency_symbol: currency_Symbol,
      subtotal,
      tax: taxRate,
      shipping: shippingCost,
      total,
      status: transactionId ? "Paid" : "Pending",
      paymentGatway: paymentGateway || "direct",
      transiction_id: transactionId || "",
      customer: customerObjectId,
      items: cartItems.map(item => item.itemId),
    };

    // Create the order in the database
    const newOrder = await Order.create(orderPayload);

    // Clear the cart for this customer (hard delete)
    await Cart.deleteMany({ customer: customerObjectId });

    return res.status(200).json({
      status: "success",
      message: "Order placed successfully!",
      data: newOrder,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to place order",
      error: error.message,
    });
  }
};
