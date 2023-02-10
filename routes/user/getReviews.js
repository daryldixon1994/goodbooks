const Review = require("../../models/Review");
module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    const reviews = await Review.find({ book: id }).populate("user");
    //   .exec((err, result) => (err ? console.log(err) : console.log(result)));
    res.status(200).json({
      status: true,
      data: reviews,
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};
