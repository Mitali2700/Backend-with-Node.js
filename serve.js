// 2022-11-26   SATURDAY

const express = require('express'); 
const app = express();
const path = require('path');

app.use("/", (req,res,next)=>{
    //res.send("<html></html>")        //inline html is not a generalize method
    res.sendFile(path.join(__dirname, 'index.html'))  //__dirname- current directory

});

app.listen(5005);
