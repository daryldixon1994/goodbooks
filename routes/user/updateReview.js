const Review = require("../../models/Review");
module.exports = async (req, res) => {
  try {
    let { review } = req.body;
    let { reviewId } = req.params;
    // let { id } = req.auth;
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      {
        $set: {
          review,
        },
      },
      { new: true }
    );
    res.status(200).json({ status: true, data: updatedReview });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: true, error });
  }
};
