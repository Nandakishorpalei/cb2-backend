require('dotenv').config({ path: require('find-config')('.env') });
const mongoose = require('mongoose');

const connect= ()=>{
    return mongoose.connect(`mongodb+srv://nanda45:${process.env.MONGOPASSWORD}@cluster0.h4li8.mongodb.net/cb2Clone`)
};


module.exports = connect;