const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const priceName = mongoose.model("price", priceSchema);
module.exports = priceName;
