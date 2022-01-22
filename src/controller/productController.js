const express = require('express');
const router = express.Router();

const Product = require('../models/productModel');
const Favourite = require("../models/favouriteModel");
const ProductDetail = require('../models/productDescriptionModel');
const Cart = require("../models/cartModel");


router.get("", async (req, res) => {
  try{

    const user = req.user;

    const products = await Product.find().lean().exec();

    const cartLength = await Cart.find({userId: user._id}).countDocuments().lean().exec();

    const data = {
      products:products,
      cartLength:cartLength
    }

    res.render("products",{data})
 }catch(e){
  const error = e.message;
  return res.status(500).render("serverError",{error});
 }
})

  router.post("", async (req, res) => {
    try {
      const product = await Product.create(req.body);
  
      return res.status(201).send(product);
    } catch (err) {
      const error = err.message;
      return res.status(500).render("serverError",{error});
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
      const error = err.message;
      return res.status(500).render("serverError",{error});
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
      const error = err.message;
      return res.status(500).render("serverError",{error});
    }
  });
  
  module.exports = router;