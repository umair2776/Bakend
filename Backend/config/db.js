const mongoose=require("mongoose");

const connectdb=async()=>{
    await mongoose.connect("mongodb://localhost:27017");
       console.log("MongoDb Connected Successfully");
}

module.exports=connectdb;