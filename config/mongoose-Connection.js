const { model } = require("mongoose");

const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/bag_web')
.then(function(){
    console.log("Connected");
})
.catch(function(err){
    console.log("Error Occurred");
})

module.exports = mongoose.connection;