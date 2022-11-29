// 2022-11-24   THURSDAY
const express = require('express'); 
const app = express();

app.use('/', (req,res,next) => {
    console.log("1st use is called");
    next();
});

app.use('/product', (req,res,next) => {
    console.log("doesnot execute always");
    res.send("<html><h1>express routing</h1></html>");
});

app.use('/new-product', (req,res,next) => {
    console.log("This seldom executes");
    res.send("<html><h1>express routing</h1></html>");
});

app.listen(5000);

