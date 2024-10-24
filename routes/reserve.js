const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing, isLoggedInReserve} = require("../middleware.js");
const {validateReview} = require("../models/review.js");
const upload = multer({ storage });

const ListingController = require("../controllers/reserves.js");

router.get("/reservation/book", wrapAsync(ListingController.showReserveListing));

router.post("/:id/reserve", wrapAsync(ListingController.reserveListing));

router.delete("/:id/reserve", wrapAsync(ListingController.deleteReservation));

module.exports = router;