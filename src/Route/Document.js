const express = require('express');
const { requireLogin } = require('../app/Controllers/AuthController');
const { uploadDocumemt, Documents, removeDocument, updateDocument } = require('../app/Controllers/DocumentController');
const router = express.Router();

router.post('/upload',requireLogin,uploadDocumemt)
router.post('/remove_document',requireLogin,removeDocument)
router.post('/update_document',requireLogin,updateDocument)
router.get('/documents',requireLogin,Documents)

module.exports = router;