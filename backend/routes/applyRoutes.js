
const express = require("express");

const router = express.Router();

const {
  applyProject
} = require("../controllers/applyController");

router.post("/", applyProject);

module.exports = router;