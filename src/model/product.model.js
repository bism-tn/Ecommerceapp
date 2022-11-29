const mongoose = require('mongoose');
// const Review = require('./review');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  category:{
    type:String,
    min:0
  },
  price: {
    type: Number,
    min:0
  },
  desc: {
    type: String,
    minLength:10
  },
})
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;