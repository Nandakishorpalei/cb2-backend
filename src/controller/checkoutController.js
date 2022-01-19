const express = require("express");
const router = express.Router();

const Checkout = require("../models/checkoutModel");

router.get("", async (req, res) => {
  try {
    const checkouts = await Checkout.find().lean().exec();

    res.render("checkoutshipping", { checkouts });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.post("", async (req, res) => {
  try {
    const checkout = await Checkout.create(req.body);

    return res.status(201).send(checkout);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
