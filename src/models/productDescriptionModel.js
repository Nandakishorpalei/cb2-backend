const mongoose = require('mongoose');

const productDetailSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
});

const ProductDetail = mongoose.model('productDetail',productDetailSchema);

module.exports = ProductDetail;