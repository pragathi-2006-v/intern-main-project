const express = require("express");

const router = express.Router();

const {
  updateProfile
} = require("../controllers/profileController");

router.put("/:id", updateProfile);

module.exports = router;