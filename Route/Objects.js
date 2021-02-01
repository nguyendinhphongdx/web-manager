const express = require('express');
const RouteUsers = require('./SubObjectRoute/User');
const router = express.Router();


// get all objects
router.use('/users',RouteUsers)

module.exports = router;