const express = require('express');
const router = express.Router();
const Cart = require("../models/cartModel")


const ProductDescription = require('../models/productDescriptionModel');

router.get("", async (req, res) => {
  try{
    const products = await ProductDescription.find().populate("productId").lean().exec();
 
   const newProduct = products[0].productId;

    res.render("productDescription",{products:newProduct})
 }catch(e){
     res.status(500).send(e.message)
 }
})

  router.post("", async (req, res) => {
    try {
      const product = await ProductDescription.create(req.body);
  
      return res.status(201).send(product);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }); 

  router.post("/addproducts", async (req, res) => {
    try {
   
       const user = req.user;
       const body = req.body;
    
      const product = await Cart.create({
      userId: user._id,
      count:body.count,
      total:body.total,
      img1: body.img1,
      name: body.name,
      catagory:body.catagory,
      });

      return res.redirect("/cart");
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  module.exports = router;