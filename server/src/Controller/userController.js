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

  forgotPasswordUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }

      if (!user.verified) {
        return res
          .status(401)
          .json({ success: false, message: "Unverified account" });
      }

      (user.emailToken = crypto.randomBytes(32).toString("hex")), user.save();
      const url = `<h1>Account Verification</h1>
    <p>Please click the link below to verify your account:</p>
    <p>
    <a href=${process.env.FRONTEND_URL}users/${user.emailToken}/${password}>${process.env.FRONTEND_URL}users/${user.emailToken}/${password}</a>
    </p>
    <p>Regards,</p>
    <p>MeetMax.</p>
    `;
      await SendEmail(user.email, "Verify Email", url);
      return res.status(200).json({
        message: "Confirm your email",
        success: true,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },

  forgotVerifyUser: async (req, res) => {
    const { token, password } = req.query;
    console.log(token, password);
    try {
      const user = await User.findOne({ emailToken: token });

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      if (user) {
        user.emailToken = null;
        user.password = hashed;
        await user.save();
      } else {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      return res
        .status(200)
        .json({ success: true, message: "Email verify successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },

  getUser: async (req, res) => {
    try {
      let result = await User.find({});
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },

  getSearchtUser: async (req, res) => {
    // console.log("ahihi");
    try {
      const keyword = req.query.keyword;
      //  console.log(keyword);
      if (keyword != "") {
        const result = await User.find(
          {
            username: { $regex: keyword, $options: "i" },
          },
          ["username", "gender", "avatar", "dateofbirth"]
        ).find({ _id: { $ne: req.user._id } });
        // const { password, ...data } = result.doc_;
        // console.log(data);

        return res.status(200).json({ success: true, message: result });
      }
      // else {
      //   const result = await User.find({});
      //   const { password, ...data } = result.doc_;
      //   return res.status(200).json({ success: true, message: data });
      // }
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Server not found" });
    }
  },

  currentUser: async (req, res) => {
    try {
      const result = await User.findById({ _id: req.user._id }, [
        "username",
        "avatar",
        "gender",
        "dateofbirth",
        "coverphoto",
      ]);
      return res.status(200).json({ success: true, message: result });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Server not found" });
    }
  },

  updateCurrentUser: async (req, res) => {
    try {
      const { dateofbirth, bio, avatar, coverphoto, location, phone } =
        req.body;
      photoPathAvatar = await uploadImage(avatar);
      photoPathCoverphoto = await uploadImage(coverphoto);

      const LastUpdatedtime = await User.findById({ _id: req.user._id }, [
        "updatedAt",
      ]);

      const currentTime = new Date();
      // console.log("Thời gian hiện tại", currentTime);
      // console.log("Thời gian cuối", LastUpdatedtime);
      const timeDiff = Math.abs(
        currentTime.getTime() - LastUpdatedtime.updatedAt.getTime()
      );
      // console.log("Time :", timeDiff);
      const diffDayss = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      // console.log("DiffDays :", diffDayss);
      if (diffDayss >= 3) {
        await User.updateOne(
          { _id: req.user._id },
          {
            dateofbirth,
            avatar: photoPathAvatar,
            coverphoto: photoPathCoverphoto,
            bio,
            location,
            phone,
          }
        );
        return res
          .status(200)
          .json({ success: true, message: "Updated data successfully" });
      } else {
        const imereaining = 90 - diffDayss;
        return res.status(401).json({
          success: false,
          message: "Please wait for the remaining " + imereaining + "days",
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Server not found" });
    }
  },
};

module.exports = userController;
