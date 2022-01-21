require('dotenv').config({ path: require('find-config')('.env') });
const express = require('express');
const ejs = require('ejs');
const passport = require("./config/passport");
const Razorpay = require('razorpay');
const User = require("./models/userModel");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// authentication start

const signupController = require('./controller/signupController');
app.use("/signup", signupController);

var router = require('./controller/signinController');
app.use("/signin", router);

app.use(passport.initialize());
var currentUser ;
var googleToken;

passport.serializeUser(async function(user, done){
    done(null, user);
    currentUser = user.user;
    googleToken = `${user.token} ${currentUser._id}`;
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

// authentication end

async function authenticate(req,res, next){
  try{


  let findToken = localStorage.getItem("myToken");
  if(findToken === null){
    res.redirect("/signin")
  }else{
  let userId = findToken.split(" ")[1];

  if(!googleToken){
    googleToken = localStorage.getItem("signinToken");
  }
 
  if(googleToken === findToken){
    console.log("it is matched unbelievable");
    let currentUser = await User.findById(userId);
    req.user = currentUser; 
    next();
  }else{
    res.redirect("/signin")
  }
}
}catch(e){
  res.status(500).send(e.message);
}
}



const productController = require("./controller/productController");
app.use("/products", authenticate, productController);

const wishlistController = require("./controller/favouriteController");
app.use("/favourites",authenticate, wishlistController);

const cartController = require("./controller/cartController");
app.use("/cart",authenticate, cartController);

const productDescriptionController = require("./controller/productDescriptionController");
app.use("/productDescription",authenticate, productDescriptionController);

const checkoutshippingController = require("./controller/checkoutshippingController");
app.use("/checkoutshipping",authenticate, checkoutshippingController);

const paymentController = require("./controller/paymentController");
app.use("/payment",authenticate, paymentController);

const paymentSuccessController = require("./controller/paymentSuccessController");
app.use("/paymentsuccess",authenticate, paymentSuccessController);

//google authentication






app.get("/", async(req,res)=>{
    try{
       res.render("home");
    }catch(e){
        res.status(500).send(e.message)
    }
})

app.get("/store",authenticate, async(req,res)=>{
    try{
       res.render("storelocation")
    }catch(e){
        res.status(500).send(e.message)
    }
})

app.get("/newpage",authenticate, async (req, res) => {
  try {
    console.log("console from new page",req.user);
    res.render("newPage");
  } catch (e) { 
    res.status(500).send(e.message);
  }
});

app.post("/signout",async(req,res)=>{
  localStorage.removeItem("myToken");
  res.redirect("/");
})
 
 
module.exports = app;
