const jwt = require("jsonwebtoken");
const User = require("../Models/userModels");
const dotenv = require("dotenv");
dotenv.config();
const middleWareUser = {
  verifyToken: async (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Access token not found" });
    }
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_KEY);
      req.user = await User.findById(decoded.id).select("-password");
      console.log(req.user);
      next();
      // if (req.user.admin) {
      //   console.log(req.user.admin);
      // }
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "You are not authenticated" });
    }
  },
};

module.exports = middleWareUser;
