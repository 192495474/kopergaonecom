const express=require('express');
const mongoose=require('mongoose');
const MONGO_URI=require('./config').MONGOURI;
const morgan=require('morgan');
const boddParser=require('body-parser');
const cookieParser=require('cookie-parser');
const expressValidator=require('express-validator');


//app
const app=express();

//import router
const authrouter=require('./routes/auth');
const userrouter=require('./routes/User/user');
const addressrouter=require('./routes/User/address');
const categoryrouter=require('./routes/Product/category');
const productrouter=require('./routes/Product/product');
const productDetailrouter=require('./routes/Product/productDetail');
//db
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,useUnifiedTopology:true
})
.then(()=>{
    console.log("mongoose connected...");
})

//routes middleware
app.use(morgan('dev'));
app.use(boddParser.json());
app.use(cookieParser());
app.use(expressValidator());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
app.use('/api',authrouter);
app.use('/api',userrouter);
app.use('/api',addressrouter);
app.use('/api',categoryrouter);
app.use('/api',productrouter);
app.use('/api',productDetailrouter);

const port=process.env.port || 8000;

app.listen(port,(req,res)=>{
    console.log(`node server is runnig on port ${port}`);
})

