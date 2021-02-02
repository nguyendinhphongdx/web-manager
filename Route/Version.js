const express = require('express');
const { getAllVersion, upload } = require('../Controllers/VersionController');
const router = express.Router();


// get all versions
router.get('/',getAllVersion)
// post new version
router.post('/upload',upload)
module.exports = router;