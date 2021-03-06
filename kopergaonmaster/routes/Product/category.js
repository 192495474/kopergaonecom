const express=require('express');

const router=express.Router();

const {requireSignin}=require("../../validator");
const {userById}=require('../../controllers/User/user');
const {isAuth,isAdmin,isShopper}=require('../../controllers/auth');
const {create,list}=require("../../controllers/Product/category");

router.post("/category/create/:userId",requireSignin,isAuth,create);
router.get("/categories",list);

router.param("userId",userById);


module.exports=router;