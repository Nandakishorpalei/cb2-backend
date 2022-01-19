const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address: { type: String, required: true },
  zipcode: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: Number, required: true },
});

const Checkout = mongoose.model("checkoutData", checkoutSchema);

module.exports = Checkout;
