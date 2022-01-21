require('dotenv').config({ path: require('find-config')('.env') });
const passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const Cart = require("../models/cartModel");

if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
let token;


const newToken = (user) =>{
  localStorage.removeItem("myToken");
  token =  jwt.sign({ user: user }, 'thisissecret', { expiresIn: 60 * 60 }); 
  // console.log('token create: ', token)
  localStorage.setItem("myToken",`${token} ${user._id}`);
  return;
}

passport.use(new GoogleStrategy({
    clientID:    process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3456/auth/google/callback",
    userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
   const userEmail = profile?._json?.email;
   const fullName = profile?._json?.name;
   const username = profile?._json?.given_name;
   console.log('userEmail:', userEmail);

   let user = await User.findOne({email:userEmail});

   if(!user){
           user = await User.create({
           fullName:fullName, 
           email:userEmail,
           password:uuidv4(),
           username:username
       })
   }
   



     newToken(user);

     localStorage.setItem("userName",user.username);

     const cartLength = await Cart.find({userId: user._id}).countDocuments().lean().exec();

     localStorage.setItem("cartCount",cartLength);

      return done(null, {user,token});
    
  }
));

module.exports = passport;