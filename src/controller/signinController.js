const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get("", async(req,res)=>{
    try{
       res.render("signin")
    }catch(e){
        res.status(500).send(e.message)
    }
});

router.post("",async(req,res)=>{
    try{
        let user = await User.findOne({email: req.body.email});

        if(!user){
            return res.status(401).send("Either Email or Password is incorrect!");
        }

        const match = user.checkPassword(req.body.password);

        if(!match){
            return res.status(401).send("Either Email or Password is incorrect!");
        }

    


    }catch(e){
        res.status(500).send(e.message)
    }
}
);

module.exports = router;
