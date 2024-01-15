const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');

const User=require('../models/users');

router.post('/',async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(404).json({message:"user not found"});
        }

        const isValid= await bcrypt.compare(req.body.password,user.password);
        if(!isValid){
            return res.json({message:"Incorrect password"});
        }

        const token= user.generateAuthToken();
        res.status(200).json({success:true,user,token:token});

    }catch(error){
        console.log(error);
        res.status(400).json({success:false,error:error});
    }
});

module.exports=router;
