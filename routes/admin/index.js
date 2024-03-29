const express = require("express");
const router = express.Router();
const verify = require("../../middlewares/adminVerify");
router.post("/login", require("./login"));
router.put("/banUser/:id", verify, require("./banUser"));
router.put("/unBanUser/:id", verify, require("./unBanUser"));
router.put("/banAuthor/:id", verify, require("./banAuthor"));
router.get("/users", verify, require("./getUsers"));
router.get("/authors", verify, require("./getAuthors"));
router.delete("/deletBook/:bookId", verify, require("./deleteBook"));
router.delete("/deletReview/:reviewId", verify, require("./deleteReview"));
module.exports = router;
