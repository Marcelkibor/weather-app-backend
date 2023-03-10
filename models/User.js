const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min: 6,
        max: 50,
    },
    password:{
        type:String,
        required:true,
        min: 6,
        max: 1000,
    },
    date:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("User",userSchema)