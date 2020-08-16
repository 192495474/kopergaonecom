const mongoose=require('mongoose');
const crypto=require('crypto');
const uuidv1 =require('uuidv1');
const address = require('./address');

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:32
    },
    email:{
        type:String,
        unique:true
    },
    hashed_password:{
        type:String
    },
    about:{
        type:String,
        trim:true
    },
    salt:String,
    role:{
        type:Number,
        default:0
    },
    phone:{
        type:Number,
        required:true
    },
    history:{
        type:Array,
        default:[]
    }
},
{timestamps:true}
);

userSchema.virtual('password')
.set(function(password){
this._password=password
this.salt=uuidv1()
this.hashed_password=this.encrypt(password)
})
.get(function(){
    return this._password
});

userSchema.methods={
    authenticate:function(plainText){
return this.encrypt(plainText) === this.hashed_password;
    },
    encrypt:function(password){
        if(!password) return '';

        try{
            return crypto.createHmac('sha1',this.salt)
                         .update(password)
                         .digest('hex');
        }catch (err){
            //retrun  ;
        }
    }
}

module.exports=mongoose.model("User",userSchema);