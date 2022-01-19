const express = require('express');
const router = express.Router();

const Wishlist = require('../models/favouriteModel');

router.get("", async (req, res) => {
    try{
      const wishlist = await Wishlist.find().lean().exec();
  
      res.render("favourites",{wishlist})
   }catch(e){
       res.status(500).send(e.message)
   }
  })
  

  router.post("", async (req, res) => {
    try {
      const product = await Wishlist.create(req.body);
  
      return res.status(201).send(product);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  module.exports = router;