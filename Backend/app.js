const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path=require("path")
const bodyParser = require("body-parser");
const user=require('./routes/User');
const article=require("./routes/Article")

app.use(bodyParser.json());

app.use("/image",express.static(path.join(__dirname,"image")))
// app.use("/",express.static(path.join(__dirname,"angular")))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,X-Requested-With,Origin,Accept,auth"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,UPDATE,PATCH"
  );
  next();
});

mongoose.connect("mongodb://localhost:27017/sahil",{ useNewUrlParser: true , useUnifiedTopology: true }).then(() => {
  console.log("Connected successfully!");
});


app.use('/api/user',user);

app.use('/api/article',article);

// app.use((req,res,next)=>{
//   res.sendFile(path.join(__dirname,"angular","index.html"))
// })
module.exports = app;
