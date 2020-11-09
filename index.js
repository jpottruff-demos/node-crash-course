const http = require('http');
const path = require('path');
const fs = require('fs');

// 1. Set up a server object
const server = http.createServer( (req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.end('<h1> HOME </h1>');
    }
})

// 2. Tell it which port to listen on
// Look for an ENV variable - or use 5000 as a default
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));