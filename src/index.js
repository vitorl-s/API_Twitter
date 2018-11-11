const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://vitorl-s:vitor123@ds121960.mlab.com:21960/goweek-backend',{
    useNewUrlParser: true
})

app.use(express.json());
app.use(require('./routes'));

app.listen(3000,() => {
    console.log('mudou o log tio');
})

