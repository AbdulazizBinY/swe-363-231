const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter {}

const customEmitter = new CustomEventEmitter();

customEmitter.on('userLoggedIn', (username) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${username} logged in`);
});

module.exports = customEmitter;
