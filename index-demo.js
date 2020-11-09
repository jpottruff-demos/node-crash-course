// THIS IS JUST TO ILLUSTRATE SOME BASIC CONCEPTS 
// NO ONE WOULD ACTUALLY DO THIS - JUST EXAMPLES/CONCEPTS

const http = require('http');
const path = require('path');
const fs = require('fs');

// 1. Set up a server object
const server = http.createServer( (req, res) => {
    
    // 1. Mimicking sending back HTML Content
    // NOTE: you could do something similar for the about page - eg(req.url === '/about')
    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), 
            (err, content) => {
                if (err) throw err;

                // Writing Content Type Headers
                res.writeHead(200, {'Content-Type': 'text/html'});

                // Writing / Rendering the content
                // res.end('<h1> HOME </h1>'); 
                res.end(content);
            }
        );
    }

    // 2. Mimicking Sneidng back some JSON data (eg. from a REST API)
    if (req.url === '/api/users') {
        const users = [
            {name: 'John Doe', age: 40},
            {name: 'Susan Smith', age: 41},
        ];

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
})

// 2. Tell it which port to listen on
// Look for an ENV variable - or use 5000 as a default
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));