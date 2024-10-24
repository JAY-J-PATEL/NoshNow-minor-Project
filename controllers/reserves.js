const Listing = require("../models/listing");
const Review = require("../models/review");
const User = require("../models/user");
const Reserve = require("../models/reserve");

module.exports.showReserveListing = async(req, res) => {
    const allReservation = await Reserve.find({username: req.user.username});
    res.render("listings/reserve.ejs", {allReservation});
};

module.exports.reserveListing = async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let {checkin , checkout, guest} = req.body.reserve;
    let reserveListing = new Reserve({
        checkin: new Date(checkin),
        checkout: new Date(checkout),
        guest: guest,
        image: listing.image.url,
        username: req.user.username,
        title: listing.title,
        price: listing.price,
        listid: listing._id});
    await reserveListing.save();

    res.redirect("/listings/reservation/book");
};

module.exports.deleteReservation = async(req, res) => {
    let {id} = req.params;
    let delListing = await Reserve.findByIdAndDelete(id);
    req.flash("Successfully cancle reservation!!");
    res.redirect("/listings");
}
