const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.post("/register", userController.registerUser);

module.exports = router;
