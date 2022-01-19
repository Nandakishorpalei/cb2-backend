const express = require("express");
const router = express.Router();

const Checkout = require("../models/checkoutshippingModel");

router.get("", async (req, res) => {
  try {
    const cart = await Checkout.find().lean().exec();

    res.render("checkoutshipping", { cart });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post("", async (req, res) => {
  try {
    const product = await Cart.create(req.body);

    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
