const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullName:{type:String, required:false},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    username:{type:String, required:false},
    phone:{type:Number, required:false}
},{
    versionKey:false,
    timestamps:true
})

userSchema.pre("save",function(next){
   
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hashSync(this.password, 8);

    next();
});

userSchema.methods.checkPassword= function(password){
   return bcrypt.compareSync(password, this.password); 
}


const User = mongoose.model("user",userSchema);

module.exports = User;