const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  username:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true
  },

  password:{
    type:String,
    required:true
  },

  github:String,

  linkedin:String,

  skills:String,

  bio:String

});

module.exports =
mongoose.model("User", userSchema);