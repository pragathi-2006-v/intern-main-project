const User = require("../models/User");

exports.updateProfile = async(req,res)=>{

  try{

    const updatedUser =
    await User.findByIdAndUpdate(

      req.params.id,

      req.body,

      {new:true}

    );

    res.json(updatedUser);

  }catch(error){

    res.json({
      message:error.message
    });
  }
};