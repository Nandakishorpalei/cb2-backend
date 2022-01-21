const express = require('express');
const router = express.Router();

const Product = require('../models/productModel');
const Favourite = require("../models/favouriteModel");
const ProductDetail = require('../models/productDescriptionModel')

router.get("", async (req, res) => {
  try{
    
    const products = await Product.find().lean().exec();

    res.render("products",{products:products})
 }catch(e){
     res.status(500).send(e.message)
 }
})

  router.post("", async (req, res) => {
    try {
      const product = await Product.create(req.body);
  
      return res.status(201).send(product);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.post("/wishlist", async (req, res) => {
    try {
      const user = req.user;
      const currentUser = user._id;

      const product = await Favourite.create({
        userId:currentUser,
        productId:req.body.productId
      });
  
      res.redirect('/products');
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.post("/productdescription", async (req, res) => {
    try {
      const isProduct = await ProductDetail.find().countDocuments().lean().exec();
      if(isProduct == 0){
        const product = await ProductDetail.create(req.body);
      }
    else{
      const prevProduct = await ProductDetail.find().lean().exec();
      const product = await ProductDetail.findByIdAndUpdate(prevProduct[0]._id, req.body,{new:true}).lean().exec();
    }
  
      res.redirect('/productDescription');
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  module.exports = router;