const express = require("express");
const router = express.Router();

const ShippingAddress = require('../models/shippingModel');
const Checkout = require("../models/checkoutshippingModel");

router.get("",async(req,res)=>{
    try{
        
        const add = await ShippingAddress.find().lean().exec();
        const payDetails = await Checkout.find().lean().exec();

        const address = add[0];
        const paymentDetails = payDetails[0];

        const paymentPageData = {
            address, paymentDetails
        }

        res.render("payment",{ paymentPageData });

    }catch(e){
        res.status(500).send(e.message);
    }
})

module.exports = router;