# NodeJS Crash Course

## Overview
Made following Brad Travery's [tutorial](https://www.youtube.com/watch?v=fBNz5xF-Kx4) on youtube. 

**Reference Folder**

Contains standalone demos of each module used. To run them, navigate into the *reference* folder and run:

`node <demo-file-name>`

**Main App (index.js)**

A Bare-bones Server with:
- [Home Page](http://localhost:5000/)
- [About Page](http://localhost:5000/about.html) *(include the file extension - this is due to how the server parses the url)*
- [404 Page]((http://localhost:5000/about)) *(anything that is not the above 2 files)*

To run:

`npm run dev`

## External Libraries / Dependencies
- [UUID](https://www.npmjs.com/package/uuid) *(for creating unique identifiers on the fly)*
- [nodemon](https://www.npmjs.com/package/nodemon)

## Built in Node Modules Demonstrated
*Example usage for these can be found in the **reference** folder*
- [Path](https://nodejs.org/api/path.html)
- [File System](https://nodejs.org/api/fs.html)
- [Operating System](https://nodejs.org/api/os.html)
- [URL](https://nodejs.org/api/url.html)
- [Events](https://nodejs.org/api/events.html)
- [HTTP](https://nodejs.org/api/http.html)