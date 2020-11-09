const http = require('http');

// 1. Create a Server Object
http.createServer( (req, res) => {
    // Write a response (basically just outputs to the browser)
    res.write('Hullo');
    res.end();
}).listen(5000, () => console.log('Server running...'));