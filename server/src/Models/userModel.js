const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    dateofbirth: String,
    gender: {
      type: String,
      default: "male",
    },
    avatar: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    coverphoto: {
      type: String,
      default: null,
    },

    bio: {
      type: String,
    },
    location: {
      type: String,
    },
    phone: {
      type: String,
      default: "+84",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    emailToken: {
      type: String,
      default: null,
    },
    admin: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userName = mongoose.model("user", userSchema);
module.exports = userName;
