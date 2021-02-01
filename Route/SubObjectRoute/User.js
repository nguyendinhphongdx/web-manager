const { addUser, Users } = require("../../Controllers/UserController");
const express = require('express');
const router = express.Router();


// post add user
router.post('/add_user',addUser)

// get all user
router.get('/',Users);

module.exports = router;