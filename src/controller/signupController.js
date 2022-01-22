const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get("", async(req,res)=>{
    try{
       res.render("signup")
    }catch(e){
        const error = e.message;
      return res.status(500).render("serverError",{error});
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
        const error = e.message;
        return res.status(500).render("serverError",{error});
    }
});



module.exports = router;
