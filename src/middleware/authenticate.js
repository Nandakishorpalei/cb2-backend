const jwt = require('jsonwebtoken');

const verifyToken  = (token) => { 
    return new Promise((resolve, reject)=>{
    jwt.verify(token, 'This is a secret', function(err, decoded) {
    if(err) return reject(err);
 
     resolve(decoded)
  });
 })
 };


// module.exports = (token)=>{
// console.log('token:', token)
// return async(req, res, next) =>{
//     try{
//   console.log(token);
//         let user;
//           user = await verifyToken(token);
//           console.log('user:', user)
  

//         req.user = user.user;
    
//         next();

//     }catch(e){
//         res.status(500).send(e.message);
//     }
// }

// }

function authenticate(token){
    return async(req, res, next) =>{
            try{
         if(token !== undefined){
             console.log("token found")
         }
                let user;
                  user = await verifyToken(token);
                  console.log('user:', user)
          
        
                req.user = user.user;
            
                next();
        
            }catch(e){
                res.status(500).send(e.message);
            }
        }
}

module.exports = authenticate;