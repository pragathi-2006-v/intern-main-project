const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

  title:String,

  theme:String,

  description:String,

  budget:String,

  deadline:String

});

module.exports =
mongoose.model("Project", projectSchema);