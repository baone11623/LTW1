const express = require("express");
const router = express.Router();
const shopController = require("../Controller/shopController");

router.post("/create-shop", shopController.createShopController);
router.get("/get-shop", shopController.getShopController);
router.put("/update-shop", shopController.updateShopController);
router.delete("/delete-shop", shopController.deleteShopController);

module.exports = router;
