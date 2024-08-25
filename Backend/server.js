const express=require("express")
const app= express();
require('dotenv').config()
const connectdb=require('./config/db');
const adminRoutes=require("./route/index.js")
const PORT=process.env.PORT || 9000;
const cors=require("cors");
const { BiLogIn } = require("react-icons/bi");
const path =require('path')

connectdb();
app.use('/upload',express.static(path.join(__dirname,'./','upload')));
app.use(express.json())

app.use(cors());
app.use("/api/admin",adminRoutes)
app.get("/",(req,res)=>{
    res.json({success:true,message:"Welcome to the Express",status:200});
})

app.listen(PORT,()=>{
    console.log("Port is running on:"+PORT)
})