const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.post("/register", userController.registerUser);
router.get("/verify", userController.verifyUser);
router.post("/login", userController.loginUser);

module.exports = router;
