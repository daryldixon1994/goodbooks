const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/upload");
router.post("/register", require("./register"));
router.post("/login", require("./login"));
router.put("/verifyEmail", require("./verifyEmail"));
router.post("/addBook", auth, upload.single("photo"), require("./addBook"));
router.put(
  "/editBook/:bookId",
  auth,
  upload.single("photo"),
  require("./editBook")
);
router.delete("/deleteBook/:bookId", auth, require("./deleteBook"));
router.get("/books", auth, require("./getBooks"));
router.get("/myBooks", auth, require("./getOwnBooks"));
router.get("/book/:id", auth, require("./getBook"));
router.get("/reviews/:id", auth, require("./getReviews"));

module.exports = router;
