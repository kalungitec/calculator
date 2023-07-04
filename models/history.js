const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
    first:{
        type:String,
       
    },
    second:{
        type:String,
    },
    operator:{
        type:String,
    },
    result:{
        type:String,
    }
})

module.exports = mongoose.model("History", historySchema)