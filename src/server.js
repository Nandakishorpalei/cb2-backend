
const express = require('express');
const ejs = require('ejs');
const passport = require("./config/passport");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const productController = require("./controller/productController");
app.use("/products", productController);

const wishlistController = require("./controller/favouriteController");
app.use("/favourites", wishlistController);

const cartController = require("./controller/cartController");
app.use("/cart", cartController);

const productDescriptionController = require("./controller/productDescriptionController");
app.use("/productDescription", productDescriptionController);


const signupController = require('./controller/signupController');
app.use("/signup", signupController);

const signinController = require('./controller/signinController');
app.use("/signin", signinController);

//google authentication

app.use(passport.initialize());
var details ;
passport.serializeUser(function(user, done){
    done(null, user);
    details = user;
  });
  
  passport.deserializeUser(function(user, done){
      done(null, user);
  });


app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/',
        failureRedirect: '/signup'
}));





app.get("/", async(req,res)=>{
    try{
       res.render("home")
    }catch(e){
        res.status(500).send(e.message)
    }
})

app.get("/store", async(req,res)=>{
    try{
       res.render("storelocation")
    }catch(e){
        res.status(500).send(e.message)
    }
})
const checkoutshippingController = require("./controller/checkoutshippingController");
app.use("/checkoutshipping", checkoutshippingController);

app.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/store", async (req, res) => {
  try {
    res.render("storelocation");
  } catch (e) {
    res.status(500).send(e.message);
  }
});



app.get("/products", async(req,res)=>{
    try{
       const products = await Product.find().lean().exec();
       res.render("products",{products:products})
    }catch(e){
        res.status(500).send(e.message)
    }
})

app.get("/payment", async(req,res)=>{
    try{
       res.render("payment")
    }catch(e){
        res.status(500).send(e.message)
    }
});


app.get("/paymentsuccess", async(req,res)=>{
    try{
       res.render("paymentsuccess");
    }catch(e){
        res.status(500).send(e.message)
    }
});





app.get("/newpage", async (req, res) => {
  try {
    res.render("newPage");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
