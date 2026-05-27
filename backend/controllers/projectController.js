const Project = require("../models/Project");

exports.addProject = async(req,res)=>{

  try{

    const project =
    new Project(req.body);

    await project.save();

    res.json({
      message:"Project Uploaded"
    });

  }catch(error){

    res.json({
      message:error.message
    });
  }
};

exports.getProjects = async(req,res)=>{

  try{

    const projects =
    await Project.find();

    res.json(projects);

  }catch(error){

    res.json({
      message:error.message
    });
  }
};
