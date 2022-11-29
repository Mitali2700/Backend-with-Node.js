const express = require('express'); // Express works as a layer.
const app=express();

//Express install ->  npm install --save express

app.use((req,res,next)=>{

    console.log("In the middleware");
    next(); // Use your application as middle ware through "next()"
})

app.use((req,res,next)=>{

    console.log("In another middleware");
    res.send("Hello from express")
})

app.listen(3001);



