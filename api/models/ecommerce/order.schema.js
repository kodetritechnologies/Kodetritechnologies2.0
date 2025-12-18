import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const orderSchema = new mongoose.Schema(
  {
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
