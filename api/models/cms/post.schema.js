import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
    },
    publish_date: {
      type: Date,
      default: null,
      set: (v) => (v === "null" ? null : v),
    },
    type: {
      type: String,
      default: "post",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    featured_image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
      set: (v) => (v === "null" ? null : v),
    },
  },
  { timestamps: true }
);

postsSchema.pre("find", function (next) {
  this.populate("featured_image");
  next();
});
postsSchema.pre("findOne", function (next) {
  this.populate("featured_image");
  next();
});

postsSchema.plugin(mongoosePaginate);
const Post = mongoose.model("Post", postsSchema);
export default Post;
