const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');

// userSchema

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// jwt 
userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.PRIVATEKEY);
    return token;
}

// user model
const User=mongoose.model('user',userSchema);

module.exports=User;