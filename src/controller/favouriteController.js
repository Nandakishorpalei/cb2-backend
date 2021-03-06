const express = require('express');
const router = express.Router();
 
const Favourite = require('../models/favouriteModel');
const Cart = require("../models/cartModel")

router.get("", async (req, res) => {
    try{
      const user = req.user;
      const currentUser = user._id;
      const wishlist = await Favourite.find({userId:currentUser}).populate("productId").lean().exec();
  
      res.render("favourites",{wishlist});
   }catch(e){
    const error = e.message;
    return res.status(500).render("serverError",{error});
   }
  })
  

  router.post("", async (req, res) => {
    try {
      const user = req.user;
      const currentUser = user._id;

      const product = await Favourite.create({
        userId:currentUser,
        productId:productId
      });
  
      return res.status(201).send(product);
    } catch (e) {
      const error = e.message;
      return res.status(500).render("serverError",{error});
    }
  });


  router.post("/delete", async (req, res) => {
    try {
      const id = req.body.id;
      console.log('id:', id)
      const product = await Favourite.findByIdAndDelete(id);
  
      return res.redirect("/favourites")
    } catch (e) {
      const error = e.message;
      return res.status(500).render("serverError",{error});
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

      res.redirect("/cart");
    } catch (e) {
      const error = e.message;
      return res.status(500).render("serverError",{error});
    }
  });

  
  module.exports = router;