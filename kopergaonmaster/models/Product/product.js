const mongoose=require('mongoose');

const {ObjectId}=mongoose.Schema;

const productSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    quantity:{
        type:Number
    },
    status:{
        type:String,
        default:'A'
    },
    category:{
        type:ObjectId,
        ref:'category'
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    shipping:{
        type:Boolean,
        required:false
    }
},
{timestamps:true}
);


module.exports=mongoose.model("Product",productSchema);