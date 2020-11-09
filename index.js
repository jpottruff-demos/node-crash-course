const http = require('http');
const path = require('path');
const fs = require('fs');

// 1. Set up a server object
const server = http.createServer( (req, res) => {
    
// a. Build the File Path Dynamically
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

// b. Check the extension of the file
    let extName = path.extname(filePath);

// c. Content Type
    // Initialize it to the one you generally expect
    let contentType = 'text/html'

    // Switch it based on the extension
    switch(extName) {
        case '.js':
            contentType = 'text/javascipt'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json': 
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

// d. Read a File
    fs.readFile(filePath, (err, content) => {
        
        if (err) {
        // Error Handling 
            // Usually page not found
            if (err.code == 'ENOENT') {
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'),
                    (err, content) => {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(content, 'utf8');
                    }
                )
            } else {
                // Probably some kind of Server Error (and should be handled better)
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
        // Success!
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');

        }
    });
})

// 2. Tell it which port to listen on
// Look for an ENV variable - or use 5000 as a default
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));