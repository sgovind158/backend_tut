const sumRequestHandler = (req,res)=>{
console.log("Sum Request Handler Called",req.url);
const body = [];
req.on('data',chunk => body.push(chunk));

req.on('end',()=>{
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = +bodyObj.num1 + +bodyObj.num2;
    console.log("Sum Result:", result);
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>   
        <head>
            <title>Calculation Result</title>
        </head>
        <body>
            <h1>Calculation Result</h1>
            <p>The sum of ${bodyObj.num1} and ${bodyObj.num2} is: ${result}</p>
            <a href="/calculator">Go back to Calculator</a>
        </body>
    </html>`);
    res.end();
    
})
}

exports.sumRequestHandler = sumRequestHandler;