const express = require('express');
const { login } = require('../Controllers/AuthController');
const router = express.Router();


// post login
router.post('/',login)


module.exports = router;