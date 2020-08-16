const express=require('express');

const router=express.Router();

const {requireSignin}=require("../../validator");
const {userById}=require('../../controllers/User/user');
const {isAuth,isAdmin,isShopper}=require('../../controllers/auth');

router.get("/secret/:userId",requireSignin,isAuth,isAdmin,(req,res)=>{
    res.json({
        user : req.profile
    });
});

router.param("userId",userById);


module.exports=router;