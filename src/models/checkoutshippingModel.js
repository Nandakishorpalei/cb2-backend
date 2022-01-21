const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
 },
merchandisePrice:{type:Number, required:true},
discount:{type:Number, required:true},
totalPrice:{type:Number, required:true}
});

const Checkout = mongoose.model("checkoutshipping", checkoutSchema);

module.exports = Checkout;
