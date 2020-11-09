const Logger = require('../logger');

// 1. Instantiate the Class (defined in the logger.js file)
const logger = new Logger();

// 2. Set up a listener
logger.on('message', (data) => console.log(`called listener:`, data));



// Fire some events (via the log method in Logger Class)
logger.log('hey there');
logger.log('sup');