const express = require("express");
const router = express.Router();

const Cart = require("../models/cartModel");
const Checkout = require("../models/checkoutshippingModel");
const ShippingAddress = require("../models/shippingModel");

router.post("",async(req,res)=>{
    try{

        const user = req.user;
        const currentUser = user._id;


    //    const cart = await Cart.find().countDocuments().lean().exec();
    //    const checkout = await Checkout.find().countDocuments().lean().exec();
    //    const shippingAddress = await ShippingAddress.find().countDocuments().lean().exec();

       ShippingAddress.deleteMany({userId:currentUser}).lean().exec();
       Cart.deleteMany({userId:currentUser}).lean().exec();
       Checkout.deleteMany({userId:currentUser}).lean().exec();
  
        res.render("paymentsuccess");
    }catch(e){
        res.status(500).send(e.message);
    }
});


module.exports = router;