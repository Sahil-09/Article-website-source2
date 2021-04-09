const mongoose=require("mongoose");

const Article=new mongoose.Schema({
    title:String,
    desc:String,
    author:String,
    image:String,
    time:String,
    creatorid:String
})

module.exports=mongoose.model('article',Article)