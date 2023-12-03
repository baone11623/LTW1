const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    shopname: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
  },
  {
    timestamps: true,
  }
);

const shopModels = mongoose.model("shop", shopSchema);
module.exports = shopModels;
