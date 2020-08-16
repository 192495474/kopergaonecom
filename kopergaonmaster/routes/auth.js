const express=require('express');

const router=express.Router();

const {signup,signin,hello}=require('../controllers/auth');
const {UserSignupValidator , requireSignin}=require("../validator");

router.post('/signup',UserSignupValidator,signup);
router.post('/signin',signin);


module.exports=router;