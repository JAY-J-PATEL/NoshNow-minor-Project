const Listing = require("../models/listing.js");
// const Listing = require("../models/listing");
const Review = require("../models/review");
const User = require("../models/user");
const Reserve = require("../models/reserve");
const { Types } = require("mongoose");

module.exports.index = async(req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
},

module.exports.renderNewForm = async(req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url, "..", filename);
    // let {title, description, image, price, country, location} = req.body;
    if(!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }
    let listing = req.body.listing;
    const newListing = new Listing(listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("sucess", "New Listing Created");
    res.redirect("/listings");
},

module.exports.showListing = async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path : "reviews",populate:{path:"author"}}).populate("owner");
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", {listing});
},

module.exports.editListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", {listing, originalImageUrl});
},

module.exports.updateListing = async(req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if(typeof req.file != "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("sucess", "Listing Updated");
    res.redirect(`/listings/${id}`);
},

module.exports.deleteListing = async(req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("sucess", "Listing Deleted");
    res.redirect("/listings");
}

module.exports.Trending = async(req, res) => {
    // console.log(req.params);
    const catFilter = req.params;
    // console.log(catFilter.Trending);
    const allListings = await Listing.find({catagory: catFilter.Trending});
    res.render("listings/index.ejs", {allListings});
}

module.exports.search = async(req, res) => {
    let {searchinp} = req.query
    const allListings = await Listing.find({country:searchinp});
    res.render("listings/index.ejs", {allListings});
};

