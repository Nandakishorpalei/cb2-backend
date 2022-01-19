const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const productController = require('./controller/productController');
app.use("/products",productController);

const wishlistController = require('./controller/favouriteController');
app.use("/favourites",wishlistController);

const cartController = require('./controller/cartController');
app.use("/cart",cartController);

app.get("/", async(req,res)=>{
    try{
       res.render("home")
    }catch(e){
        res.status(500).send(e.message)
    }
})

app.get("/store", async(req,res)=>{
    try{
       res.render("storelocation")
    }catch(e){
        res.status(500).send(e.message)
    }
})

app.get("/login", async(req,res)=>{
    try{
       res.render("login")
    }catch(e){
        res.status(500).send(e.message)
    }
});


app.get("/signup", async(req,res)=>{
    try{
       res.render("signup")
    }catch(e){
        res.status(500).send(e.message)
    }
});








module.exports = app;