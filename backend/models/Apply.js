const mongoose = require("mongoose");

const applySchema = new mongoose.Schema({

  projectId:String,

  proposal:String

});

module.exports =
mongoose.model("Apply", applySchema);