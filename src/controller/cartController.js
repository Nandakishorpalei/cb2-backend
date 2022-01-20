const express = require('express');
const router = express.Router();

const Cart = require('../models/cartModel');
const Checkout = require("../models/checkoutshippingModel");

router.get("", async (req, res) => {
    try{
      const cart = await Cart.find().lean().exec();
  
      res.render("cart",{cart})
   }catch(e){
       res.status(500).send(e.message)
   }
  })
  

  router.post("", async (req, res) => {
    try {
      const product = await Cart.create(req.body);
  
      return res.status(201).send(product);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.post("/delete", async (req, res) => {
    try {
      const id = req.body.id;
      console.log('id:', id)
      const product = await Cart.findByIdAndDelete(id);
  
      return res.redirect("/cart")
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.post("/update", async (req, res) => {
    try {
      const id = req.body.id;
      const productCount = req.body.productCount;
      console.log('productCount:', productCount)
      console.log('id:', id)
      const updateBody = {
        count: productCount
      }
      const product = await Cart.findByIdAndUpdate(id,updateBody, {new:true}).lean().exec();
      
      return res.redirect("/cart")
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


  router.post("/datasend",async(req,res)=>{
    try{
      const product = await Checkout.create(req.body);

      res.redirect("/checkoutshipping");

    }catch(e){
      res.status(500).send(e.message);
    }
  })
  
  module.exports = router;