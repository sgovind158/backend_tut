const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    
    if(req.url ==='/'){
        res.setHeader('Content-Type', 'text/plain');
        res.write(`<html>`);
        res.write(`<head><title>Home Page</title></head>`);
        res.write(`<body><h1>Welcome to the Home Page</h1></body>`);
        res.write(`</html>`);
        return res.end();

    }else if(req.url ==='/about'){
        res.setHeader('Content-Type', 'text/plain');
        res.write(`<html>`);
        res.write(`<head><title>About Page</title></head>`);
        res.write(`<body><h1>Welcome to the about Page</h1></body>`);
        res.write(`</html>`);
      return  res.end();
    }

     res.setHeader('Content-Type', 'text/plain');
        res.write(`<html>`);
        res.write(`<head><title>404</title></head>`);
        res.write(`<body><h1>page not found</h1></body>`);
        res.write(`</html>`);
      return  res.end();
})

const PORT = 3000;  

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})