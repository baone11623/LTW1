const shopModels = require("../Models/shopModels");

const shopController = {
  createShopController: async (req, res) => {
    try {
      const { shopname, address, phonenumber } = req.body;
      if (!shopname || !address || !phonenumber) {
        return res
          .status(401)
          .json({ success: false, message: "Please complete all information" });
      }
      const result = await shopModels.create({
        shopname: shopname,
        address: address,
        phonenumber: phonenumber,
      });
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check your data connection" });
    }
  },

  getShopController: async (req, res) => {
    try {
      const result = await shopModels.find({});
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check your data connection" });
    }
  },

  updateShopController: async (req, res) => {
    try {
      const { shopId, shopname, address, phonenumber } = req.body;
      await shopModels.updateOne(
        { _id: shopId },
        { shopname, address, phonenumber }
      );
      return res
        .status(200)
        .json({ success: true, message: "Store editing successful" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check your data connection" });
    }
  },

  deleteShopController: async (req, res) => {
    try {
      const { shopId } = req.body;
      await shopModels.deleteOne({ _id: shopId });
      return res
        .status(200)
        .json({ success: true, message: "Successfully deleted store" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Please check your data connection" });
    }
  },
};

module.exports = shopController;
