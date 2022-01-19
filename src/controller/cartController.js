const express = require('express');
const router = express.Router();

const Cart = require('../models/cartModel');

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
  
  module.exports = router;