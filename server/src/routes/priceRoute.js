const express = require("express");
const router = express.Router();
const priceController = require("../Controller/priceController");

router.post("/create-price", priceController.createPrice);
router.put("/update-price", priceController.updatePrice);
router.get("/get-price", priceController.getPrice);
router.delete("/delete-price", priceController.deletePrice);

module.exports = router;
