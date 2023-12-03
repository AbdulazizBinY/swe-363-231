const customEmitter = require('./eventEmitter');

function simulateUserLogin() {
    const usernames = ['UserA', 'UserB', 'UserC'];
     const randomUserIndex = Math.floor(Math.random() * usernames.length);
    const randomDelay = Math.random() * (2 - 0.1) + 0.1; // Random delay between 0.1 to 2 seconds
    const selectedUsername = usernames[randomUserIndex];

    setTimeout(() => {
        customEmitter.emit('userLoggedIn', selectedUsername);
        simulateUserLogin();
    }, randomDelay * 1000);
}
simulateUserLogin();
