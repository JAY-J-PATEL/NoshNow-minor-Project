const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOption = {
                        secret: "mysupersecretstring", 
                        resave:false, 
                        saveUninitialized:true
                      }

app.use(session(sessionOption));
app.use(flash());

app.get("/register", (req, res) => {
  let {name = "anonymous"} = req.query;
  req.session.name = name;
  req.flash("success", "user registered successfully!");
  res.redirect("/");
});

app.get("/", (req, res) => {
  console.log(req.flash("success"));
  res.render("page.ejs", {name: req.session.name, message: req.flash("sucess")});
});

// app.use(cookieParser("secretcode"));

// app.get("/greet", (req, res) => {
//     let {name="anonymous"} = req.cookies;
//     res.send(`Hi, ${name}`);
// })

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("made-in", "India", {signed:true});
//     res.send("signed cookie sent");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// });

// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "namaste");
//     res.cookie("madeIn", "India");
//     res.send("sent you some cookies");
// })
// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("Hi, I am root!");
// });

// app.use("/users", users);
// app.use("/posts", posts);

// ============== Express Session ==============

// app.get("/reqcount", (req, res) => {
//   if(req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
  
//   res.send(`You sent a request ${req.session.count} time`);
// });

// app.get("/test", (req,res) => {
//     res.send("test successful!!");
// });

app.listen(3000, () => {
    console.log("server is listening to 3000");
});