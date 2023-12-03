const mongoose = require("mongoose");

const schoolSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    schoolSupplies: [
      {
        type: String,
        require: true,
      },
    ],
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const School = mongoose.model("school", schoolSchema);

module.exports = School;
