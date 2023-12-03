const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "school",
    },
    adProduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "shop",
    },

    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
