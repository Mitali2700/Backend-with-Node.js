// 2022-11-24   THURSDAY
const express = require('express'); 
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

app.get('/new-product', (req,res,next) => {
    console.log("it runs on get request and new-product");
    res.send("<form methods ='POST' action='/product'><input type='text' name='text1'><input type='submit' value='click'></form>");
});

app.post('/product', (req,res,next) => {
    console.log("it runs on POST request and /product");
    console.log(req.body);
});

app.listen(5001);

// GET request- attachment with url, that's why we never sends confidential details with this like password 

// POST request - having its own body.