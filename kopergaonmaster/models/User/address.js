const mongoose=require('mongoose');
const crypto=require('crypto');
const uuidv1 =require('uuidv1');
const {ObjectId}=mongoose.Schema;

const AddressSchema=new mongoose.Schema({

    address:{
        type:String
    },
    pin:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    },
    geoLocationId:{
        type:String
    },
    user:{
        type:ObjectId,
        ref:'User'
    }
},
{timestamps:true}
);



module.exports=mongoose.model("Address",AddressSchema);