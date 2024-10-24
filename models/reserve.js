const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Listing = require("./listing.js");

const reserveSchema = new Schema({

    checkin : {
        type: Date,
    },

    checkout : {
        type: Date,
    },

    guest : {
        type: Number,
        min: 1,
    },

    username : {
        type: String,
    },

    image: {
        type: String,
    },


    title: {
        type: String,
    },

    price : {
        type: Number,
    },

    listid : {
        type: String
    }
});

const Reserve = mongoose.model("Reserve", reserveSchema);

module.exports = Reserve;