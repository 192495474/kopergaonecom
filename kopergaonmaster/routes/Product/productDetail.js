const express=require('express');

const router=express.Router();

const {requireSignin}=require("../../validator");
const {userById}=require('../../controllers/User/user');
const {isAuth,isAdmin,isShopper}=require('../../controllers/auth');
const {create}=require("../../controllers/Product/productDetail");

router.post("/productdetail/create/:userId",requireSignin,isAuth,create);

router.param("userId",userById);


module.exports=router;