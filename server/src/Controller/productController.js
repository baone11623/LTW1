// const pruchaseMode = require("../");
const productModels = require("../Models/productModels");

const productController = {
  createProduct: async (req, res) => {
    try {
      const { utensilname, image, note, price } = req.body;
      const result = await productModels.create({
        utensilname: utensilname,
        image: image,
        note: note,
        price: price,
      });

      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "error creating product" });
    }
  },

  getProduct: async (req, res) => {
    try {
      const result = await productModels.find({});
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "error getting product" });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { productiD, utensilname, image, note, price } = req.body;
      await productModels.updateOne(
        { _id: productiD },
        { utensilname, image, note, price }
      );
      return res
        .status(200)
        .json({ success: true, message: "updated product successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "error updating product" });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { productiD } = req.body;
      await productModels.deleteOne({ _id: productiD });
      return res
        .status(200)
        .json({ success: true, message: "deleted product successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "error deleting product" });
    }
  },
};

module.exports = productController;
