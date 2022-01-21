const express = require('express');
const router = express.Router();

const Cart = require('../models/cartModel');
const Checkout = require("../models/checkoutshippingModel");

router.get("", async (req, res) => {
    try{
      const currentUser = req.user;
      const userId = currentUser._id;
      console.log('userId:', userId)

      const cart = await Cart.find({userId:userId}).lean().exec();
      console.log('cart:', cart)

      const cartObj = {       
        userId : userId,
        cart:cart
      }
  
      res.render("cart",{cartObj})
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
      
    const user = req.user;
    const currentUser = user._id;
     const body = req.body;
    const prevPayment = await Checkout.find({userId:currentUser}).lean().exec();

    if(prevPayment.length != 0){
      const payment = await Checkout.findByIdAndUpdate(prevPayment[0]._id,{
        userId:user._id,
        merchandisePrice:body.merchandisePrice,
        discount:body.discount,
        totalPrice:body.totalPrice,
      },{new:true})
    }else{
      const payment = await Checkout.create({
        userId:user._id,
        merchandisePrice:body.merchandisePrice,
        discount:body.discount,
        totalPrice:body.totalPrice,
       });
    
    }



      res.redirect("/checkoutshipping");

    }catch(e){
      res.status(500).send(e.message);
    }
  })
  
  module.exports = router;