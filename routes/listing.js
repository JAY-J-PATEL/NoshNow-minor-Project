const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const {validateReview} = require("../models/review.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

const ListingController = require("../controllers/listings.js");

// -------- index route --------

router.get("/",  wrapAsync(ListingController.index));




// -------- new & create Route --------

router.get("/new", isLoggedIn,  (req, res) => {
    res.render("listings/new.ejs");
});

router.post("/", 
                isLoggedIn,  
                upload.single("listing[image]"),
                validateListing,
                wrapAsync(ListingController.renderNewForm));

router.get("/search", wrapAsync(ListingController.search));


    // res.render("listings/reserve.ejs");


router.get("/filter/:Trending", wrapAsync(ListingController.Trending));

// -------- show route --------

router.get("/:id",  wrapAsync(ListingController.showListing));

// -------- Edit Route --------

router.get("/:id/edit", 
                isLoggedIn, 
                isOwner, 
                ListingController.editListing);



// -- Update Route --

router.put("/:id",
            isLoggedIn, 
            isOwner, 
            upload.single("listing[image]"),
            validateListing, 
            wrapAsync(ListingController.updateListing));


// -------- Delete Route --------

router.delete("/:id", 
                    isLoggedIn, 
                    isOwner, 
                    (ListingController.deleteListing));




module.exports = router;