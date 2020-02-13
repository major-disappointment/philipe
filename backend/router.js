const express = require("express");
const router = express.Router();

// Import routes
const problem = require("routes/problem");

// Use routes
router.use(problem);

module.exports = router;
