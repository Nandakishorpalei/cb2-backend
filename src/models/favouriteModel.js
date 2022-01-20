const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
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