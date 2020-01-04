const express = require('express');
const chalk = require('chalk');

const PORT =  process.env.PORT || 3000;

const app =  express();



app.use((req,res, next) => {
    console.log('req made ',req.path);
    next();
})

app.use(express.static(path.join(__dirname, '.../dist')));

app.listen(... make the server start); // INCOMPLETE CODE,, complete it from other firl call to the server start.

