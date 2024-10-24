const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const yourListingSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const YourListing = mongoose.model("yourListing", yourListingSchema);
module.exports = YourListing;