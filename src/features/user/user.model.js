const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true}
},{versionKey:false,timestamps:true})

const userModel = mongoose.model("user",userSchema)

module.exports =userModel