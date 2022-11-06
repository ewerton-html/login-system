const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('pages/home');
})


router.get('/login', (req, res)=>{
    res.render('pages/login');
});

router.get('/signin', (req, res)=>{
    res.render('pages/signin');
})

router.post('/signin', (req, res)=>{  
    res.send('cadastrado com sucesso!');
})
module.exports = router;