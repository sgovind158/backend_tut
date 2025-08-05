const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    if(req.url ==='/'){
        res.setHeader('Content-Type','text/html');
        res.write(`<html>`);
        res.write(`<head><title>Home Page</title></head>`);
        res.write(`<body><h1>Welcome to the Home Page</h1></body>`);
        res.write(`<form action="submit-details" method="POST">
        <input type="text" name="username" placeholder="Enter your username" />
        <input type="password" name="password" placeholder="Enter your password" />
        <button type="submit">Submit</button>
        </form>
            ` )
        res.write(`</html>`);
        return res.end();
    }else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
        fs.writeFileSync('user.txt','Govind Sahu');
        res.statusCode = 302;
        res.setHeader('Location','/');
        
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>`);
    res.write(`<head><title>404</title></head>`);
    res.write(`<body><h1>Page Not Found</h1></body>`);
    res.write(`</html>`);
     res.end();
})

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})