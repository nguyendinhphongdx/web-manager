const express = require('express');
const router = express.Router();


// get all report
router.get('/',(req, res) =>{
    res.json({version:'get all report'});
})

module.exports = router;