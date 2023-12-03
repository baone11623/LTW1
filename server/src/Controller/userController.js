const User = require("../Models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();
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

  verifyUser: async (req, res) => {
    const token = req.query.token;
    // console.log(token);
    try {
      const user = await User.findOne({ emailToken: token });
      if (user) {
        user.emailToken = null;
        user.verified = true;
        await user.save();
        return res.status(200).json({
          message: "Email verified successfully",
          success: true,
        });
      } else {
        return res.status(404).json({
          message: "Email not verified",
          success: false,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "Email not found" });
      }
      const validerPassword = await bcrypt.compare(password, user.password);

      if (!user.verified) {
        return res
          .status(404)
          .json({ success: false, message: "Please verified email" });
      }

      if (!validerPassword) {
        return res
          .status(404)
          .json({ success: false, message: "Incorrect password" });
      }

      let accessToken = jwt.sign(
        {
          id: user._id,
          // admin: user.admin
        },
        process.env.ACCESS_KEY,
        {
          expiresIn: "12h",
        }
      );

      return res.status(200).json({
        success: true,
        username: user.username,
        userId: user._id,
        image: user.image,
        accessToken,
        email,
        message: "Logged in successfully",
      });
    } catch (error) {
      console.log("error :", error);
      return res
        .status(500)
        .json({ success: false, message: "Server internal error" });
    }
  },
};

module.exports = userController;
