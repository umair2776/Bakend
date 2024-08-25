const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const salt = 10;  
var jwt = require('jsonwebtoken');
const sendEmail=require("../utilis/sendmail")

exports.register = async (req, res) => {
    try {
        const {password}=req.body;
        const hashPassword=await bcrypt.hash(password,salt)
        req.body.password=hashPassword;
        const randomNumber=Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
       const user =await User.create(req.body)
       user.code=randomNumber;
       user.save();
       const subject="Welcome to the LMS";
       const text=`this is a PNY training institute, this is your verification code ${randomNumber}`;
       sendEmail(user.email,subject,text);
       res.json({status: 200, message:"User created sucessfully",user})
    } catch (err) {
        console.log(err);
    }
};

exports.verifyUser=async(req,res,next)=>{
    try{
        const {email}=req.query;
       const {verifyCode}=req.body;
        const user=await User.findOne({email:email})
        if(user.code===verifyCode){
            user.isEmailVerified=true;
            user.code=null;
            user.save();
        }
        else {
            return res.json({message:"Code is not correct"})
        }
        res.json({message:"USer Verified Successfully"})
    }
    catch (err){
        console.log(err);
    }
    
}

exports.login = async (req, res) => {
    try{
 const {email,password}=req.body;
 const user=await User.findOne({email:email})
if(!user){
    return res.json({message:"User not found",status:404,success:false})
}
    const checkPassword=await bcrypt.compare(password,user.password);
    if(checkPassword){
        var token = jwt.sign({ id:user. _id }, 'umairtahir');
        return res.json({message:"user loggedin Successfully ",success:true,status:200,token:token})
    }
else{
    return res.json({message:"password is wrong",success:false,status:404})
}
res.json({staus:200,message:"product created successfully",product})
    }

    catch(err)
    {
        console.log(err);
    }
};

// exports.index = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json({ status: 200, message: "Users fetched successfully", users });
//     } 
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ status: 500, message: "Server Error" });
//     }
// };

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id });
        if (!user) {
            return res.json({ status: 404, success: false, message: `Couldn't find user` });
        }
        res.json({ status: 200, success:true, message: "User fetched successfully", user });
    } catch (err) {
        console.log(err);
    }
};

// exports.destroy = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findOneAndDelete({ _id: id });
//         if (!user) {
//             return res.status(404).json({ status: 404, success: false, message: `Couldn't find user` });
//         }
//         res.json({ status: 200, message: "User deleted successfully" });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ status: 500, message: "Server Error" });
//     }
// };
// exports.update = async (req, res) => { 
//     try {
//         const { id } = req.params;
//         const user = await User.findOneAndUpdate({ _id: id }, req.body, { new: true });
//         if (!user) {
//             return res.status(404).json({ status: 404, success: false, message: `Couldn't find user` });
//         }
//         res.json({ status: 200, message: "User updated successfully", user });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ status: 500, message: "Server Error" });
//     }
// };
