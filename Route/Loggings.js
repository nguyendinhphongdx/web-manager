const express = require('express');
const router = express.Router();


// get all logging
router.get('/',(req, res) =>{
    res.json({version:'get all logings'});
})

module.exports = router;