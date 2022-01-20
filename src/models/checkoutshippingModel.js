const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
merchandisePrice:{type:Number, required:true},
discount:{type:Number, required:true},
totalPrice:{type:Number, required:true}
});

const Checkout = mongoose.model("checkoutshipping", checkoutSchema);

module.exports = Checkout;
