const Price = require("../Models/priceModels");

const priceController = {
  createPrice: async (req, res) => {
    try {
      const price = parseInt(req.body.price);
      console.log(price);
      const result = await Price.create({ price: price });
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check your data connection" });
    }
  },
  getPrice: async (req, res) => {
    try {
      const result = await Price.find({});
      return res.status(200).json({ success: true, message: result });
    } catch (error) {}
  },
  updatePrice: async (req, res) => {
    try {
      const priceId = req.body.priceId;
      const price = parseInt(req.body.price);
      await Price.updateOne({ _id: priceId }, { price: price });
      return res
        .status(200)
        .json({ success: true, message: "Price updated successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check your data connection" });
    }
  },
  deletePrice: async (req, res) => {
    try {
      const priceId = req.body.priceId;
      await Price.deleteOne({ _id: priceId });
      return res
        .status(200)
        .json({ success: true, message: "Delete unit price successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check your data connection" });
    }
  },
};

module.exports = priceController;
