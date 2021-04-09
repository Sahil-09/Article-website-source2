const mongoose=require('mongoose');

const Userschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    gender:String,
})

module.exports=mongoose.model("User",Userschema)