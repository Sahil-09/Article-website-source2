const express=require('express');
const router=express.Router();
const User = require("../UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", (req, res) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        gender: req.body.gender,
      });
      user.save().then(() => {
        console.log("Saved!");
      });
    });
  });
  
  
  router.post("/login", (req, res) => {
    let temp;
    User.findOne({ email: req.body.email }).then((data) => {
        temp=data;
      bcrypt.compare(req.body.password, data.password).then(islogin => {
        if (!islogin) {
          return res.json({ error: "Authentication failed" });
        }
        let token = jwt.sign({email: temp.email, name: temp.name, id:temp._id }, "thisissecretpassword");
        let name=temp.name
        res.status(201).json({ token: token,name:name});
      });
    });
  });

  module.exports=router;