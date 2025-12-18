import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const addressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    pincode: {
      type: Number,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Regions",
    },
    landmark: {
      type: String,
    },
    alt_mobile: {
      type: Number,
    },
    type: {
      type: String,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

addressSchema.pre("find", function (next) {
  this.populate("customer");
  this.populate("");
  this.populate("state");
  next();
});

addressSchema.pre("findOne", function (next) {
  this.populate("customer");
  this.populate("");
  this.populate("state");
  next();
});

addressSchema.plugin(mongoosePaginate);
const Address = mongoose.model("Address", addressSchema);
export default Address;
