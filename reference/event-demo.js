const EventEmitter = require('events');

// 1. Create a class 
class MyEmitter extends EventEmitter { };

// 2. Initalize the object
const myEmitter = new MyEmitter();

// 3. Create a listener
myEmitter.on('event', () => console.log('Event Fired!'));
myEmitter.on('something else', () => console.log('I am different'));


// Emiting some events
myEmitter.emit('event');
myEmitter.emit('something else');
myEmitter.emit('event');