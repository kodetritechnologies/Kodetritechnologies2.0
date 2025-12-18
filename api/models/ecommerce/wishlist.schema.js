import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const wishlistsSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

wishlistsSchema.pre("find", function (next) {
  this.populate("customer");
  this.populate("");
  this.populate("item");
  next();
});
wishlistsSchema.pre("findOne", function (next) {
  this.populate("customer");
  this.populate("");
  this.populate("item");
  next();
});

wishlistsSchema.plugin(mongoosePaginate);
const Wishlist = mongoose.model("Wishlist", wishlistsSchema);
export default Wishlist;
