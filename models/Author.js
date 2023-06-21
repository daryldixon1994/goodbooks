const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    authImg: {
      type: String,
      default:
        "https://res.cloudinary.com/dc8u6ydtu/image/upload/v1676288068/uploads/loz4wm4yjy00ozlosit9.png",
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    isAuthor: {
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

module.exports = Author = mongoose.model("Author", authorSchema);
