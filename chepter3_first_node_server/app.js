const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("req",req)
})

const PORT = 3000;;

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})