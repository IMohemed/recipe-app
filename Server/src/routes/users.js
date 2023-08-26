const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require( "bcrypt");
const userModel = require("../Models/Users")

const router=express.Router();

router.post("/register",async (req,res) => {
    // try {
        
    //     const newuser= new usermodel({
    //         name:req.body.name,
    //         Age:req.body.Age,
    //         username:req.body.username,
    //     });
    //     const user=await newuser.save();
    //     res.json(user);
    // } catch (error) {
    //     console.log(error);
    // }
    const {username,password}=req.body;
    const user= await userModel.findOne({username});
    if(user){
        return res.json({message:"user already exists"});
    }
    const hashedpw = await bcrypt.hash(password,10);
    const newuser=new userModel({username,password:hashedpw});
    await newuser.save();
    res.json({message:"registered successfully"});
});

router.post("/login", async(req,res) =>{
    const {username,password}=req.body;
    const user= await userModel.findOne({username});
    if(!user){
        return res.json({message:"username not exists"});
    }
    const ispaswd=await bcrypt.compare(password,user.password)
    if(!ispaswd){
        return res.json({message:"username or password is incorrect"});
    }

    const token = jwt.sign({id: user._id},"secret");
    res.json({token,userID:user._id})
})

//export {router as userRouter};
module.exports=router;