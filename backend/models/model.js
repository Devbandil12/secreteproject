// models/Order.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id:{type:String},
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isShopkeeper:{type:Boolean},
  shopid:{type:String},
 
});

const user = mongoose.model('Order', UserSchema);
module.exports = user;
