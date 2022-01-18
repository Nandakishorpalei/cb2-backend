const app = require('./server');
const connect = require('./config/db');

app.listen(3456, async(req,res)=>{
    try{
        await connect();

        console.log("This server runs on port 3456")

    }catch(e){
        console.log(e.message);
    }
})