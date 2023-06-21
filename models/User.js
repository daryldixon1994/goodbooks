const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userImg: {
      type: String,
      default:
        "https://res.cloudinary.com/dc8u6ydtu/image/upload/v1676288068/uploads/loz4wm4yjy00ozlosit9.png",
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isUser: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("User", userSchema);
