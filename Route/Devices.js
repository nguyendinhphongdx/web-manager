const express = require('express');
const router = express.Router();


// GET ALL DEVICES
router.get('/',(req, res) =>{
    res.json({version:'get all device'});
})

module.exports = router;