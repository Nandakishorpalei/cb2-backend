const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const Cart = require("../models/cartModel");

const jwt = require('jsonwebtoken');

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



let user;

router.get("", async(req,res)=>{
    try{
       res.render("signin")
    }catch(e){
        res.status(500).send(e.message);
    }
});

router.post("",async(req,res)=>{
    try{
        user = await User.findOne({email: req.body.email});

        if(!user){
            return res.status(401).send("Either Email or Password is incorrect!");
        }

        const match = user.checkPassword(req.body.password);

        if(!match){
            return res.status(401).send("Either Email or Password is incorrect!");
        }

        newToken(user);

        token = `${token} ${user._id}`;
        console.log('token:', token);

        localStorage.setItem("signinToken", token);

        localStorage.setItem("userName",user.username);
        
        const cartLength = await Cart.find({userId: user._id}).countDocuments().lean().exec();

        localStorage.setItem("cartCount",cartLength);

    res.redirect("/")


    }catch(e){
        res.status(500).send(e.message)
    }
}
);

module.exports = router;
