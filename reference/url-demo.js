const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL (eg. the whole url)
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain; will include port)
console.log(myUrl.host);

// Hostname (will NOT get port)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized Query (eg. the stright up query parameters)
console.log(myUrl.search)

// Parameter Object
console.log(myUrl.searchParams)

// Add parameters as well!
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams)

// Loop through the parameters
myUrl.searchParams.forEach((name, value) => console.log(`${name}:${value}`));