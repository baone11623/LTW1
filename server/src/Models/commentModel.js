const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "blog" },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
