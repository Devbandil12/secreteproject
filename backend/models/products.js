// models/Order.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id:{type:String},
  productName: { type: String, required: true },
  productUrl:{type:String, required:true},
  price:{type:Number, required:true},
  

 
});

const product = mongoose.model('produxt', productSchema);
module.exports = product;
