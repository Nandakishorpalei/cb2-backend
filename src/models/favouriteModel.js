const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
});

const Favourite = mongoose.model('favourite',favouriteSchema);

module.exports = Favourite;