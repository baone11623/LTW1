const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
  {
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    utensilname: [{ type: mongoose.Schema.Types.ObjectId, ref: "belonging" }],
    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const purchaseName = mongoose.model("purchase", purchaseSchema);
module.exports = purchaseName;
