const path = require('path');

console.log(__filename);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths (this can help with delimiters (eg. forward and backslashes))
console.log(path.join(__dirname, 'test', 'hello.html'));