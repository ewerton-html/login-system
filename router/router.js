const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    res.set('home');
})

module.exports = router;