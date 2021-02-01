const express = require('express');
const { getAllVersion } = require('../Controllers/VersionController');
const router = express.Router();


// get all versions
router.get('/',getAllVersion)

module.exports = router;