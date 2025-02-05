const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image : String,
    name :String,
    price:Number,
    dscount:{
        type:Array,
        debugger: 0,
    },
    bgcolor:String,
    panelColor: String,
    textcolor : String
})

module.exports = mongoose.model('product' , productSchema);