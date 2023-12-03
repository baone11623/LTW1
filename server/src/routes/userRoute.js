const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");
const middleware = require("../Middleware/middleware");

router.post("/register", userController.registerUser);
router.get("/verify", userController.verifyUser);
router.post("/login", userController.loginUser);

router.post("/forgot", userController.forgotPasswordUser);
router.get("/forgot-verify", userController.forgotVerifyUser);

router.get("/auth", middleware.verifyToken, userController.getUser);
router.get("/search", middleware.verifyToken, userController.getSearchtUser);
router.get("/current-user", middleware.verifyToken, userController.currentUser);
router.put(
  "/updatecurrent-user",
  middleware.verifyToken,
  userController.updateCurrentUser
);

module.exports = router;
