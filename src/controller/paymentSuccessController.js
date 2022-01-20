const express = require("express");
const router = express.Router();

const Cart = require("../models/cartModel");
const Checkout = require("../models/checkoutshippingModel");
const ShippingAddress = require("../models/shippingModel");

router.post("",async(req,res)=>{
    try{
       const cart = await Cart.find().countDocuments().lean().exec();
       const checkout = await Checkout.find().countDocuments().lean().exec();
       const shippingAddress = await ShippingAddress.find().countDocuments().lean().exec();

       if(shippingAddress != 0){
       ShippingAddress.remove({},()=>{
            console.log("ShippingAddress collection removed");
        })
       }

       if(cart != 0){
      Cart.remove({},()=>{
            console.log("Cart collection removed")
        });
       }

       if(checkout != 0){
        Checkout.remove({},()=>{
            console.log("Checkout collection removed");
        })
       }
  
        res.render("paymentsuccess");
    }catch(e){
        res.status(500).send(e.message);
    }
});


module.exports = router;