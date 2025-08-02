const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Welcome to Complete Coding</h1></body>');  
        res.write('<a href="/home">Home</a>');
        res.write('<a href="/men">Men</a>');
        res.write('<a href="/women">Women</a>');
        res.write('<a href="/kids">Kids</a>');
        res.write('<a href="/cart">Cart</a>');
    if(req.url === '/') {
        res.write('<p>This is the home page.</p>');
        
    }else if(req.url === '/men') {
        res.write('<p>This is the contact page.</p>');
    }else if(req.url ==="/women"){
        res.write('<p>This is the about page.</p>');
    }else if(req.url ==="/kids"){
        res.write('<p>This is the kids page.</p>');     
    } else if(req.url ==="/cart"){
        res.write('<p>This is the cart page.</p>');
    }else {
        res.write('<p>Welcome to the default page!</p>');
    }
    res.write('</html>');
   return  res.end();
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})