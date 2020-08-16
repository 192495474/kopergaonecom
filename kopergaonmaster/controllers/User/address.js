const Address=require('../../models/User/address');

exports.create= (req,res)=>{
    const address=new Address(req.body);
    address.save((err,address)=>{
 if(err){
     return res.status(404).json({
         err:errorHandler(err)
     })
 }
 return res.json({
    address
 })
    })
 };
