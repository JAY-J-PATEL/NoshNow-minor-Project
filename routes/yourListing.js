const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const ListingController = require("../controllers/yourListings.js");

router.get("/your/Listing", wrapAsync(ListingController.yourListing));


module.exports = router;