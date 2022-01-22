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
            const data = "User already exists!!"
            return res.status(401).render("userError",{data})
        }

        user = await User.create(req.body);

    res.redirect("/signin")

    }catch(e){
        const error = e.message;
        return res.status(500).render("serverError",{error});
    }
});



module.exports = router;
