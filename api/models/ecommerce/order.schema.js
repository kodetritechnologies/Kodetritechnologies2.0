import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const orderSchema = new mongoose.Schema(
  {
    order_no: {
      type: String,
    },
    currency: {
      type: String,
    },
    currency_symbol: {
      type: String,
    },
    subtotal: {
      type: Number,
    },
    total: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    coupan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupan",
    },
    paymentGatway: {
      type: String,
    },
    transiction_id: {
      type: String,
    },
    status: {
      type: String,
    },
    status_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status",
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required: true,
      },
    ],
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { strict: false },
  { timestamps: true }
);

orderSchema.pre("find", function (next) {
  this.populate("customer");
  this.populate("");
  this.populate("items");
  next();
});
orderSchema.pre("findOne", function (next) {
  this.populate("customer");
  this.populate("");
  this.populate("items");
  next();
});

orderSchema.plugin(mongoosePaginate);
const Order = mongoose.model("Order", orderSchema);
export default Order;
