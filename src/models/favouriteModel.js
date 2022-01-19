const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    img1 : {type:String,required:true},
    img2:  {type:String,required:true},
    img3: {type:String,required:true},
    img4: {type:String,required:true},
    name: {type:String,required:true},
    catagory: {type:String,required:true},
    price:{type:Number,required:true}
});

const Favourite = mongoose.model('favourite',favouriteSchema);

module.exports = Favourite;