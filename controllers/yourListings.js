const Listing = require("../models/listing");
const Reserve = require("../models/reserve");
const User = require("../models/user");

module.exports.yourListing = async(req, res) => {
    const allListings = await Listing.find({username: req.user.username});
    // console.log(req.user.username);
    res.render("listings/yourListing.ejs", {allListings});
};

