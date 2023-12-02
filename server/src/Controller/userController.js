const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const dotenv = require("dotenv");
const SendEmail = require("../Config/emailConfig");

const userController = {
  registerUser: async (req, res) => {
    try {
      const { username, dateofbirth, gender } = req.body;
      const user = await User.findOne({ email: req.body.email });
      console.log("user :", user);
      const userName = await User.findOne({ username });
      if (userName) {
        return res
          .status(401)
          .json({ success: false, message: "Username already existed" });
      }

      if (user) {
        return res
          .status(401)
          .json({ success: false, message: "Email already existed" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      const response = await User.create({
        username,
        email: req.body.email,
        password: hashed,
        dateofbirth,
        gender,
        emailToken: crypto.randomBytes(32).toString("hex"),
      });
      const { password, ...data } = response._doc;
      const url = `<h4>Confirm here: <a href=${process.env.FRONTEND_URL}users/${data.emailToken}>Verify</a></h4>`;
      await SendEmail(data.email, "Verify Email", url);
      return res.status(200).json(data);
    } catch (error) {
      console.log("error: ", error);
      return res
        .status(500)
        .json({ success: false, message: "Server internal error" });
    }
  },
};

module.exports = userController;
