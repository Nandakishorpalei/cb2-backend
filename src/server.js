require('dotenv').config({ path: require('find-config')('.env') });
const express = require('express');
const ejs = require('ejs');
const passport = require("./config/passport");
const Razorpay = require('razorpay');

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

const checkoutshippingController = require("./controller/checkoutshippingController");
app.use("/checkoutshipping", checkoutshippingController);

const paymentController = require("./controller/paymentController");
app.use("/payment", paymentController);

const paymentSuccessController = require("./controller/paymentSuccessController");
app.use("/paymentsuccess",paymentSuccessController);

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




// app.get("/products", async(req,res)=>{
//     try{
//        const products = await Product.find().lean().exec();
//        res.render("products",{products:products})
//     }catch(e){
//         res.status(500).send(e.message)
//     }
// })



app.get("/newpage", async (req, res) => {
  try {
    res.render("newPage");
  } catch (e) {
    res.status(500).send(e.message);
  }
});



const razorpay=new Razorpay({
  key_id:process.env.RAZORPAY_ID,
  key_secret:process.env.RAZORPAY_SECRET
  })
  
  app.post("/order",(req,res)=>{
  const options = {
      amount:50000 ,  // amount in the smallest currency unit
      currency: "INR",
  
    };
    razorpay.orders.create(options, function(err, order) {
        order_id_var=order.id;
      res.json(order)
    });
  })
 
 
module.exports = app;
