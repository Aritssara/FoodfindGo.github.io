const mongoose = require('mongoose');

//เอาไว้เก็บค่าข้อมูลที่จะใช้ในฐานข้อมูล
const productSchema = mongoose.Schema({
    name:String,
    detail:{
        type:String
    },
    price:{
        type: Number
    }
},{timestamps:true});

module.exports = mongoose.model('Products',productSchema);