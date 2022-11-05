const express = require('express');
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'))
app.set('/views', path.join(__dirname, 'views'))


// const router = require('./src/router/router');
// app.use('/', router);

app.get('/', (req, res)=>{
    res.render('pages/home');
})

app.listen(port, ()=>{
    console.log('o servidor está rodando');
})