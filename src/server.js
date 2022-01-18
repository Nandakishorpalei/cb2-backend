const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", async(req,res)=>{
    try{
       res.render("home")
    }catch(e){
        res.status(500).send(e.message)
    }
})

module.exports = app;