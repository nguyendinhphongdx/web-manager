const express = require('express');
const { requireLogin } = require('../app/Controllers/AuthController');
const { addClass, Classes, removeClass, updateClass, assignProfessor, addMember, compareClass, removeMember } = require('../app/Controllers/ClassController');

const router = express.Router();

router.post('/add_class',requireLogin,addClass)
router.post('/remove_class',requireLogin,removeClass)
router.post('/update_class',requireLogin,updateClass)
router.post('/assign_professor',requireLogin,assignProfessor)
router.post('/add_member',requireLogin,addMember)
router.post('/remove_member',requireLogin,removeMember)
router.get('/compare_class',requireLogin,compareClass)
router.get('/classes',requireLogin,Classes)

module.exports = router;