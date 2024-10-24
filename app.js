if(process.env.NODE_ENV != "production") {
    require("dotenv").config();
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const reserveRouter = require("./routes/reserve.js");
const yourListingRouter = require("./routes/yourListing.js");

app.set("view engine", "ejs");
app.set("Views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
const dbUrl = process.env.ATLASDB_URL

const store = MongoStore.create({
    mongoUrl : dbUrl,
    crypto: {
        secret:"mysupersecretcode"
      },
      touchAfter: 24 * 3600,
});


main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

store.on("error", () => {
    console.log("ERROR IN MONGO SESSION STORE", err);
})



const sessionOptions = {
    store,
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() * 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 


async function main() {
    await mongoose.connect(dbUrl);
}


app.use((req, res, next) => {
    res.locals.sucess = req.flash("sucess");
    res.locals.error = req.flash("error");
    // console.log(res.locals.sucess);
    res.locals.currUser = req.user;
    next();
});



// app.get("/demouser", async(req, res) => {
//     let fakeUser = new User({
//         email : "student@gmail.com",
//         username: "delta-student"
//     });

//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });


app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);
app.use("/listings", reserveRouter);
app.use("/listings", yourListingRouter);


app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let {statusCode=500, message="Something Went Wrong!!!"} = err;
    res.status(statusCode).render("listings/error.ejs", {err});
    // res.status(statusCode).send(message);
});



app.listen(8080, () => {
    console.log("server is listening to port 8080");
});

