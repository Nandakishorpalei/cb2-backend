const mongoose = require('mongoose');

const shippingAdressSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName :  {type:String,required:true},
    street:  {type:String,required:true},
    city: {type:String,required:true},
    zipcode: {type:Number,required:true},
    state: {type:String,required:true},
    phone: {type:Number,required:true}
});

const ShippingAddress = mongoose.model('shippingAddress',shippingAdressSchema);

module.exports = ShippingAddress; 