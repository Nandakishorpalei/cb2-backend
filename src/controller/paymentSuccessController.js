const express = require("express");
const router = express.Router();

const Cart = require("../models/cartModel");
const Checkout = require("../models/checkoutshippingModel");
const ShippingAddress = require("../models/shippingModel");

router.post("",async(req,res)=>{
    try{

        const user = req.user;
        const currentUser = user._id;

       ShippingAddress.deleteMany({userId:currentUser}).lean().exec();
       Cart.deleteMany({userId:currentUser}).lean().exec();
       Checkout.deleteMany({userId:currentUser}).lean().exec();
  
        res.render("paymentsuccess");
    }catch(e){
        const error = e.message;
        return res.status(500).render("serverError",{error});
    }
});


module.exports = router;