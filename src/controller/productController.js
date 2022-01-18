const express = require('express');
const router = express.Router();

const Product = require('../models/productModel');

router.get("", async (req, res) => {
    try {
      const products = await Product.find().lean().exec();
  
      return res.send(products);
    } catch (err) {
        return res.status(500).send(err.message);
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
  
  module.exports = router;