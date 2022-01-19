const mongoose = require('mongoose');

const productDetailSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    img1 :  {type:String,required:true},
    img2:  {type:String,required:true},
    img3: {type:String,required:true},
    img4: {type:String,required:true},
    name: {type:String,required:true},
    catagory: {type:String,required:true},
    price:{type:Number,required:true}
});

const ProductDetail = mongoose.model('productDetail',productDetailSchema);

module.exports = ProductDetail;