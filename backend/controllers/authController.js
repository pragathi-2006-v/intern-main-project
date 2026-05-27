
const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{

  try{

    const {
      username,
      email,
      password
    } = req.body;

    const hashPassword =
    await bcrypt.hash(password,10);

    const user = new User({
      username,
      email,
      password:hashPassword
    });

    await user.save();

    res.json({
      message:"User Registered"
    });

  }catch(error){

    res.json({
      message:error.message
    });
  }
};

exports.login = async(req,res)=>{

  try{

    const {
      email,
      password
    } = req.body;

    const user = await User.findOne({
      email
    });

    if(!user){

      return res.json({
        message:"User Not Found"
      });
    }

    const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

    if(!isMatch){

      return res.json({
        message:"Invalid Password"
      });
    }

    const token = jwt.sign(
      {
        id:user._id
      },
      process.env.JWT_SECRET
    );

    res.json({
      token
    });

  }catch(error){

    res.json({
      message:error.message
    });
  }
};
