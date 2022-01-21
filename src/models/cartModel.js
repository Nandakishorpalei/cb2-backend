const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    count:{type:Number,required:true},
    total:  {type:Number,required:true},
    img1:  {type:String,required:true},
    name: {type:String,required:true},
    catagory: {type:String,required:true},
});

const Cart = mongoose.model('cart',cartSchema);

module.exports = Cart;