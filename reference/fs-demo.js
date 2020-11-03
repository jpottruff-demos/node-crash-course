const fs = require('fs');
const path = require('path');

// Create a folder
// NOTE: using asynchrous method (eg. call back function)
// NOTE: could omit the brackets around err
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if (err) throw err;
    console.log('Hi from callback function');
    console.log('Directory created!');
});

// Create and write to file
// Again - async; format slightly different (stylistically, eg. prettier)
fs.writeFile( 
    path.join(__dirname, '/test', 'hello.txt'), 
    'this is some text taht goes in the file', 
    err => {
        if (err) throw err;
        console.log('callback function here');
        console.log('wrote to the file!');
    }
);

// Create a file, write to it, then append some text
fs.writeFile( 
    path.join(__dirname, '/test', 'hello.txt'), 
    ' I will overwrite the previous files text', 
    err => {
        if (err) throw err;
        console.log('callback function here again');
        console.log('overwrote the file!');

        // File Append
        fs.appendFile(
            path.join(__dirname, '/test', 'hello.txt'),
            ' but this stuff will append',
            err => {
                if (err) throw err;
                console.log('appended some text')
            }
        )
    }
);

// Read File
// NOTE: pass in the encoding for an option
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Hi from callback function');
    console.log('File Read!');
    console.log(data);
});

// Rename File
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'), 
    path.join(__dirname, '/test', 'newFileName.txt'), 
    (err) => {
        if (err) throw err;
        console.log('I am callback');
        console.log('File renamed!');
    }
);