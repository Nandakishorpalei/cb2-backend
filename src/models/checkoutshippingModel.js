const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address: { type: String, required: true },
  zip_code: { type: Number, required: true },
  city: { type: String, required: true },
  mobile: { type: Number, required: true },
});

const Checkout = mongoose.model("checkoutshipping", checkoutSchema);

module.exports = Checkout;
