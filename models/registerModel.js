const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    secondName:{
        type:String,
        trim:true
    },
    firstName: {
        type:String,
        trim:true
    },
    output: {
        type:String,
        trim:true
    },

})

module.exports = mongoose.model("Register", registerSchema)