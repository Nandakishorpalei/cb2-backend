const express = require("express");
const router = express.Router();

const Checkout = require("../models/checkoutshippingModel");
const ShippingAddress = require("../models/shippingModel");

router.get("", async (req, res) => {
  try {
    const cart = await Checkout.find().lean().exec();

    res.render("checkoutshipping", { cart });
  } catch (e) {
    res.status(500).send(e.message);
  }
});


router.post("/address", async (req, res) => {
  try {
    const address = await ShippingAddress.create(req.body);

   res.redirect("/payment")
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
