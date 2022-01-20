
const razorpay=new Razorpay({
    key_id:process.env.RAZORPAY_ID,
    key_secret:process.env.RAZORPAY_SECRET
    })
  
  
    app.post("/order",(req,res)=>{
      const options = {
          amount:500 * 100 ,  // amount in the smallest currency unit
          currency: "INR",
      
        };
        razorpay.orders.create(options, function(err, order) {
           var order_id_var=order.id;
          // console.log(order);
          res.json(order)
        });
      })


      