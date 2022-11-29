const http = require('http');   //Importing Module
const server= http.createServer((req,res)=>{
    console.log("Hello JUET");
    res.write("<html><h1>Hello Manu</h1></html>")
}).listen(3000);

// Discuss response and request model that is used in web technology or web transaction using node.js technology.
// How to create server   // Using .listen('port') 
