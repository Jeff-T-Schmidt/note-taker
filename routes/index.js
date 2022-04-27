const express = require('express');
const router = express.Router();
const path = require("path");

const personRoutes = require("./get")
router.use("/notes",personRoutes)

module.exports = router;