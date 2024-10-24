const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
        catagory: Joi.string().required()
    }).required(),
});


// we use joi insed of this

// if(!newListing.description) {
//     throw new ExpressError(400, "Description is Missing!!");
// }

// if(!newListing.title) {
//     throw new ExpressError(400, "title Missing!");
// }

// if(!newListing.location) {
//     throw new ExpressError(400, "Location is Missing!!");
// }

// if(!newListing.price) {
//     throw new ExpressError(400, "Price is Missing!");
// }

// if(!newListing.country) {
//     throw new ExpressError(400, "Country is Missing!");
// }

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});