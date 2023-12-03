const readline = require('readline');

const predefinedResponses = {
    'How are you?': 'I am just a computer program, but I am functioning well. How can I assist you?',
    'What is your name?': 'I am a chatbot. You can call me AzizBot.',
    'What is the weather today?': 'I am sorry, I do not have access to real-time data. You can check a weather website for the latest updates.',
    'exit': 'Goodbye! Have a great day!'
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chatbotResponse(userInput) {
    const response = predefinedResponses[userInput];
    return response ? response : 'I am not sure how to respond to that. Can you ask me something else?';
}

function startChat() {
    rl.question('Hello! How can I assist you? (Type "exit" to end the conversation)\n', (userInput) => {
        if (userInput.toLowerCase() === 'exit') {
        console.log(chatbotResponse(userInput));
        rl.close();

        } else {
        console.log(chatbotResponse(userInput));
        startChat();
        }

    });
}

startChat();
