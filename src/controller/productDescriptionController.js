const express = require('express');
const router = express.Router();

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
  
  module.exports = router;