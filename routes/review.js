const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const {reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewrviewController = require("../controllers/reviews.js");
// -------- reviews --------

router.post("/", validateReview, isLoggedIn, wrapAsync(reviewrviewController.createReview));


// delete review route

router.delete("/:reviewId", isReviewAuthor, isLoggedIn, wrapAsync(reviewrviewController.deleteReview));

module.exports = router;