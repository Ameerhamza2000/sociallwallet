const express=require('express');
const router=express.Router();
const User=require('../models/users');
const bcrypt=require('bcrypt');

// register user
router.post('/',async(req,res)=>{
    try{
        // user check
    const user=await User.findOne({email:req.body.email});
    if(user){
        return res.json({error:"User Already Exists"});
    }

    // new user
    let newUser= new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    // password encryption
    const salt= await bcrypt.genSalt(10);
    newUser.password= await bcrypt.hash(newUser.password,salt);
    newUser=await newUser.save();
    const token= newUser.generateAuthToken();
    res.status(201).json({success:true,newUser,token:token});

}
catch(error){
    console.log(error);
    res.status(400).json({
        success:false,
        error
    })
}
});

module.exports=router;