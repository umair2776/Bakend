const mongoose = require('mongoose');

const productSchema=mongoose.Schema({
    title:{type:String},
    price:{type:Number},
    description:{type:String},
    thumbnail:{type:String},
    category:{type:String},
  

}
)
module.exports = mongoose.model('Product',productSchema)