const express = require('express');
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

const app = express();
const port = 3000;
const path = require('path');

const router = require('./router/router');
app.use('/', router);


app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set(bodyParser.urlencoded({extended:true}));



app.listen(3000, ()=>{
    console.log('o servidor está rodando');
})