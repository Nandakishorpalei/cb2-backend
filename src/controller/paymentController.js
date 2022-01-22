const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

const ShippingAddress = require('../models/shippingModel');
const Checkout = require("../models/checkoutshippingModel");

router.get("",async(req,res)=>{
    try{
        const user = req.user;
        const currentuser = user._id;

        const add = await ShippingAddress.find({userId:currentuser}).lean().exec();
        const payDetails = await Checkout.find({userId:currentuser}).lean().exec();

        const address = add[0];
        const paymentDetails = payDetails[0];

        const paymentPageData = {
            address, paymentDetails
        }

        res.render("payment",{ paymentPageData });

    }catch(e){
      const error = e.message;
      return res.status(500).render("serverError",{error});
    }
})

const razorpay=new Razorpay({
    key_id:process.env.RAZORPAY_ID,
    key_secret:process.env.RAZORPAY_SECRET
    })
    
   router.post("/order",async(req,res)=>{
   try{
        const user = req.user;
        const currentuser = user._id;

      const checkoutPrice = await Checkout.find({userId:currentuser}).lean().exec();
      const totalPrice = checkoutPrice[0].totalPrice;
    const options = {
        amount: totalPrice * 100 ,  // amount in the smallest currency unit
        currency: "USD",
    
      };
      razorpay.orders.create(options, function(err, order) {
          order_id_var=order.id;
        res.json(order)
      });
   
  }
  catch(e){
    const error = e.message;
      return res.status(500).render("serverError",{error});
  }
});
module.exports = router;