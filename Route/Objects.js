const express = require('express');
const { requireLogin } = require('../Controllers/AuthController');
const RouteUsers = require('./SubObjectRoute/User');
const router = express.Router();


// get all objects
router.use('/users',requireLogin,RouteUsers)

module.exports = router;