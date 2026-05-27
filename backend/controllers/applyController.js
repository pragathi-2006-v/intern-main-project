const Apply = require("../models/Apply");

exports.applyProject = async(req,res)=>{

  try{

    const apply =
    new Apply(req.body);

    await apply.save();

    res.json({
      message:"Applied Successfully"
    });

  }catch(error){

    res.json({
      message:error.message
    });
  }
};
