const express = require("express");

const router = express.Router();

const {
  addProject,
  getProjects
} = require("../controllers/projectController");

router.post("/", addProject);

router.get("/", getProjects);

module.exports = router;