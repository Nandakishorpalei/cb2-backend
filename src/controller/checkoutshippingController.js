const express = require("express");
const router = express.Router();

const Checkout = require("../models/checkoutshippingModel");
const ShippingAddress = require("../models/shippingModel");

router.get("", async (req, res) => {
  try {
    const user = req.user;
    const currentUser = user._id;
    const cart = await Checkout.find({userId:currentUser}).lean().exec();
    console.log('cart:', cart)

    res.render("checkoutshipping", { cart });
  } catch (e) {
    const error = e.message;
    return res.status(500).render("serverError",{error});
  }
});


router.post("/address", async (req, res) => {
  try {
    
    const user = req.user;
    console.log('user:', user)
    const currentUser = user._id;
     const body = req.body;
    const prevAddress = await ShippingAddress.find({userId:currentUser}).lean().exec();
    if(prevAddress.length != 0){
      console.log('prevAddress:', prevAddress)

      const address = await ShippingAddress.findByIdAndUpdate(prevAddress[0]._id,{
      userId:currentUser,
      firstName: body.firstName,
      lastName :  body.lastName,
      street:  body.street,
      city: body.city,
      zipcode: body.zipcode,
      state: body.state,
      phone: body.phone
      },{new:true});

    }else{

      console.log('prevAddress:', prevAddress)

      const address = await ShippingAddress.create({
      userId:user._id,
      firstName: body.firstName,
      lastName :  body.lastName,
      street:  body.street,
      city: body.city,
      zipcode: body.zipcode,
      state: body.state,
      phone: body.phone
      });
    }
  

   res.redirect("/payment")
  } catch (e) {
    const error = e.message;
    return res.status(500).render("serverError",{error});
  }
});

module.exports = router;
