const express = require("express");
const router = express.Router();
const shopController = require("../Controller/shopController");
const middleWareUser = require("../Middleware/middleware");

router.post(
  "/create-shop",
  middleWareUser.verifyToken,
  shopController.createShopController
);
router.get("/get-shop", shopController.getShopController);
router.put(
  "/update-shop",
  middleWareUser.verifyToken,
  shopController.updateShopController
);
router.delete(
  "/delete-shop",
  middleWareUser.verifyToken,
  shopController.deleteShopController
);

module.exports = router;
