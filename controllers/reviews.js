const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async(req, res) => {
    console.log(req.params.id);
    let listing =  await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    // console.log(newReview);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save(); // because if we change something in existing document then we have to await that document.
    req.flash("sucess", "New Review Created");
    // console.log("new review saved");
    // res.send("new review saved");
    res.redirect(`/listings/${listing._id}`);
},

module.exports.deleteReview = async(req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete  (reviewId);
    req.flash("sucess", "Review Deleted");
    res.redirect(`/listings/${id}`);
}
