var jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/env');

// const config = require('../../service/constant');
const authenticateUser = (req, res,next) => {
      var token = req.headers.authorization;
      jwt.verify(token, jwtSecret, function(err, decoded) {
        if(decoded != undefined){
          if(decoded.user.email != undefined || decoded.user.username == "admin"){
            next()
          }else{
            user.findOne({email:decoded.user.email}).then((userData)=>{
              if(userData){
                  req.user = userData;
                  next();
              }else{
                  res.status(401).send({message:'UnAuthorized'});
              }
          });
          }
        }else{
          res.status(401).send({message:'UnAuthorized'});
        }
      });
}


module.exports = authenticateUser ;