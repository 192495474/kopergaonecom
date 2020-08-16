const formidable=require('formidable');

const fs=require('fs');

const Product=require('../../models/Product/product');
const {errorHandler}=require('../../helpers/dbErrorHandlers');

exports.create= (req,res)=>{
    let form=formidable.IncomingForm();
    form.keepExtentions=true;
    form.parse(req,(err,fields,files)=>{
if(err){
    return res.status(400).json({
        err : 'Image could not found'
    });
}
let product=new Product(fields);

if(files.photo){
    product.photo.data=fs.readFileSync(files.photo.path);
    product.photo.contentType=files.photo.type;
}
product.save((err,product)=>{
    if(err){
        return res.status(404).json({
            err:errorHandler(err)
        })
    }
    return res.json({
       product
    });

    });
   
});
   
    }