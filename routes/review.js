const express = require("express");
const router = express.Router({ mergeParams: true });
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const {
  isLoggedIn,
  isReviewAuthor,
  validateReview,
} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Review Route
//post route to handle review submission
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

//delete route to handle review deletion
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deleteReview),
);

module.exports = router;
