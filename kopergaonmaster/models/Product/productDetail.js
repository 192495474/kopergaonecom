const mongoose=require('mongoose');

const {ObjectId}=mongoose.Schema;

const productDetailSchema=new mongoose.Schema({

    color:{
        type:String,
        default:'NO COLOR'
    },
    size:{
        type:String,
        default:'NO SIZE'
    },
    price:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:'A'
    },
    product:{
        type:ObjectId,
        ref:'product'
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


module.exports=mongoose.model("ProductDetail",productDetailSchema);