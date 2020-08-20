const express=require('express');

const router=express.Router();

const {requireSignin}=require("../../validator");
const {userById}=require('../../controllers/User/user');
const {isAuth,isAdmin,isShopper}=require('../../controllers/auth');
const {create}=require("../../controllers/Product/product");

router.post("/product/create",create);

router.param("userId",userById);


module.exports=router;