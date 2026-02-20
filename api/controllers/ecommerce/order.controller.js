import mongoose from "mongoose";
import Store from "../../models/configuration/setting/store.schema.js";
import Cart from "../../models/ecommerce/cart.schema.js";

export const createPayment = async (req, res) => {
  try {
    // const { _id } = req.customer;
    const shippingData = Store.findOne({ type: "shipping" });
    const taxData = Store.findOne({ type: "tax" });
    const cartData = Cart.aggregate([
      {
        $match: {
          // customer: new mongoose.Types.ObjectId(_id),
          customer: new mongoose.Types.ObjectId("6945fa14ba3f1cfc95b588fa"),
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

    const currency_Symbol = process.env.CURRENCY_SYMBOL || "₹";
    const currency_code = process.env.CURRENCY_CODE || "INR";

    let Total =
      Number(cart[0].totalAmount) -
      0 +
      ((Number(cart[0].totalAmount) - 0) * Number(tax.value.tax)) / 100 +
      Number(shipping.value.shipping);

    const data = {
      currency_Symbol,
      currency_code,
      items: cart[0],
      discount: 0,
      tax: tax.value.tax,
      shipping: shipping.value.shipping,
      totalAmount: Total,
    };
    res.render("payment", data);
  } catch (error) {
    return res.status(500).json({
      status: "success",
      message: "Internal server error",
      error: error.message,
    });
  }
};
