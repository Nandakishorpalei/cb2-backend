const express = require('express');
const router = express.Router();
 
const Favourite = require('../models/favouriteModel');
const Cart = require("../models/cartModel")

router.get("", async (req, res) => {
    try{
      const wishlist = await Favourite.find().populate("productId").lean().exec();
  
      res.render("favourites",{wishlist});
   }catch(e){
       res.status(500).send(e.message);  
   }
  })
  

  router.post("", async (req, res) => {
    try {
      const product = await Favourite.create(req.body);
  
      return res.status(201).send(product);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });


  router.post("/delete", async (req, res) => {
    try {
      const id = req.body.id;
      console.log('id:', id)
      const product = await Favourite.findByIdAndDelete(id);
  
      return res.redirect("/favourites")
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  router.post("/addproducts", async (req, res) => {
    try {
      console.log(req.body)
      const product = await Cart.create(req.body);

      res.redirect("/cart");
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

  
  module.exports = router;