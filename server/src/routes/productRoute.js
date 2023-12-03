const express = require("express");
const router = express.Router();

const productController = require("../Controller/productController");

router.post("/create-product", productController.createProduct);
router.put("/update-product", productController.updateProduct);
router.get("/get-product", productController.getProduct);
router.delete("/delete-product", productController.deleteProduct);

module.exports = router;
