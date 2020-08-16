const User=require('../models/User/user');
const jwt=require('jsonwebtoken'); //to generate signed token
const expressjwt=require('express-jwt'); //to authorization check
const JWT_SECRET=require('../config').JWT_SECRET;

const {errorHandler}=require('../helpers/dbErrorHandlers');

exports.signup= (req,res)=>{
   const user=new User(req.body);
   user.save((err,User)=>{
if(err){
    return res.status(404).json({
        err:errorHandler(err)
    })
}
return res.json({
    User
})
   })
};

exports.signin=(req,res)=>{
    //find the user based on emaill
    const {email,password}=req.body;

    User.findOne({email},(err,user)=>{
        if(err || !user ) {
            return res.status(400).json({
                err : 'User with that email does not exist'
            });
        }
        //user authentication using username and password
       //create authenticate method in user model
        if(!user.authenticate(password)){
            return res.status(401).json({
                err : 'Email and Password does not match'
            });
        }

       //generate a signed a token with userid and secret 
       const token=jwt.sign({_id:user._id},JWT_SECRET);
       //persist the token as 't' in cookies with expiry date
       res.cookie('t',token,{expire: new Date()+9999});

       //return response with user and token to frontend client
       const {_id,name,email,role}=user;
       return res.json({token,User:{_id,name,email,role}});
    });
        
}

exports.isAdmin=(req,res,next)=>{
    console.log(req.auth);
    console.log(req.profile);
 if(req.profile.role == 0 || req.profile.role == 2){
return res.status(403).json({
error : "Admin resource ! Access denied"
});
 }
 next();
}

exports.isShopper=(req,res,next)=>{
    if(req.profile.role == 0 || req.profile.role == 1){
   return res.status(403).json({
   error : "Shopper resource ! Access denied"
   });
  
    }
    next();
   }

   exports.isAuth=(req,res,next)=>{
      
       let user=req.profile && req.auth && req.profile._id == req.auth._id;
   
       if(!user){
   return res.status(403).json({
   error : "Access denied"
   });
    }
    next();
   }