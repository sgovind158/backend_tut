// const {sumRequestHandler} = require("./sum");

const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    if(req.url ==="/"){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>My First Page</title>
            </head>
            <body>
                <h1>welcome to calculator!</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>
                           `)
                           return res.end();
    }
    if(req.url === "/calculator"){
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <h1>Calculator Page</h1>
                <form action="/calculate-result" method="POST">
                    <input type="number" name="num1" placeholder="Enter first number" required>
                    <input type="number" name="num2" placeholder="Enter second number" required>
                    <button type="submit">Calculate</button>
                </form>
            </body>
        </html>`);
        return res.end();
    } else if(req.url.toLowerCase()==="/calculate-result" && req.method === "POST"){
       return sumRequestHandler(req, res);
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head>
            <title>Not Found</title>
        </head>
        <body>
            <h1>Page Not Found</h1>
            <a href="/">Go to Home</a>
        </body>         
    </html>`);
    res.statusCode = 404;

}

exports.requestHandler = requestHandler;