const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get("", async(req,res)=>{
    try{
       res.render("signup")
    }catch(e){
        res.status(500).send(e.message)
    }
});

router.post("",async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email});
        console.log(req.body);

        if(user){
            return res.status(400).send("This Email is already in use");
        }

        user = await User.create(req.body);

    res.redirect("/signin")

    }catch(e){
       return res.status(500).send(e.message)
    }
});



module.exports = router;
