const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    utensilname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    price: { type: mongoose.Schema.Types.ObjectId, ref: "price" },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("product", productSchema);
module.exports = product;
