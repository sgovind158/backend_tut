const express = require('express');

const app = express();  

app.get('/',(req,res,next)=>{
console.log("came in first middleware",req.url,req.method);
next();
})

app.get('/',(req,res,next)=>{
    console.log("came in second middleware",req.url,req.method);
    // res.send('<h1>Form Submitted Successfully</h1>');
    next();
})

app.use("/",(req,res,next)=>{
    console.log("came in third middleware",req.url,req.method);
    res.send('<h1>Page Not Found</h1>');
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})