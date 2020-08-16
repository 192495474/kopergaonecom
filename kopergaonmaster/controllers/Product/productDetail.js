const formidable=require('formidable');

const fs=require('fs');

const ProductDetail=require('../../models/Product/productDetail');
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
let productDetail=new ProductDetail(fields);

if(files.photo){
    productDetail.photo.data=fs.readFileSync(files.photo.path);
    productDetail.photo.contentType=files.photo.type;
}
productDetail.save((err,productDetail)=>{
    if(err){
        return res.status(404).json({
            err:errorHandler(err)
        })
    }
    return res.json({
        productDetail
    });

    });
   
});
   
    }