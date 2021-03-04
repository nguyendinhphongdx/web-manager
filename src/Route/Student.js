const express = require('express');
const { requireLogin } = require('../app/Controllers/AuthController');
 const { 
    addStudent, 
    removeStudent, 
    Students, 
    updateStudent,
    changeAvatar
} = require('../app/Controllers/StudentController');

const router = express.Router();

router.post('/add_student',requireLogin,addStudent)
router.post('/remove_student',requireLogin,removeStudent)
router.post('/update_student',requireLogin,updateStudent)
router.post('/change_avatar',requireLogin,changeAvatar)
router.get('/students',requireLogin,Students)

module.exports = router;