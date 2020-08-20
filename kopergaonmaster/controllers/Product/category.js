const Category=require('../../models/Product/category');
const {errorHandler}=require('../../helpers/dbErrorHandlers');
exports.create= (req,res)=>{
    const category=new Category(req.body);
    category.save((err,category)=>{
 if(err){
     return res.status(404).json({
         err:errorHandler(err)
     })
 }
 return res.json({
    category
 })
    })
 };
 exports.list=(req,res)=>{
     console.log("jk");
     Category.find().exec((err,data)=>{
        if(err){
            return res.status(404).json({
                err:errorHandler(err)
            });
        }
        
        return res.json({
           data
        });
     });
 }
