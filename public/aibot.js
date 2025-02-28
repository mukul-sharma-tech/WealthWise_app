/* // Import modules
const fs = require('fs');
const express = require('express');
const natural = require('natural');
const tf = require('@tensorflow/tfjs-node');
const readline = require('readline');

// Load intents
const intents = JSON.parse(fs.readFileSync('./intents.json', 'utf-8'));

// Initialize tokenizer and classifier
const tokenizer = new natural.WordTokenizer();
const classifier = new natural.BayesClassifier();

// Prepare training data
intents.forEach(intent => {
    intent.patterns.forEach(pattern => {
        classifier.addDocument(tokenizer.tokenize(pattern.toLowerCase()), intent.tag);
    });
});

// Train the classifier
classifier.train();

// Function to get response based on user input
function getResponse(userInput) {
    const tag = classifier.classify(tokenizer.tokenize(userInput.toLowerCase()));
    for (let intent of intents) {
        if (intent.tag === tag) {
            const responses = intent.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return "I don't understand. Can you rephrase?";
}

// Express setup
const app = express();
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Chatbot is running...');
});

// Chat endpoint
app.post('/chat', (req, res) => {
    const userInput = req.body.message;
    const response = getResponse(userInput);

    // Save conversation history
    const timestamp = new Date().toISOString();
    fs.appendFileSync('./logs/chat_log.txt', `User: ${userInput}\nChatbot: ${response}\nTimestamp: ${timestamp}\n---\n`);

    res.json({ response });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// CLI Chat (Optional)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Chatbot: Hi! Type 'exit' to end the conversation.");
rl.prompt();
rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        console.log("Chatbot: Goodbye!");
        rl.close();
    } else {
        const response = getResponse(input);
        console.log(`Chatbot: ${response}`);
        rl.prompt();
    }
});
 */




// Backend: Node.js (aibot.js)
const fs = require('fs');
const express = require('express');
const natural = require('natural');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load intents
const intents = JSON.parse(fs.readFileSync('./intents.json', 'utf-8'));

// Initialize tokenizer and classifier
const tokenizer = new natural.WordTokenizer();
const classifier = new natural.BayesClassifier();

// database
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/chatbotDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};



// Prepare training data
intents.forEach(intent => {
    intent.patterns.forEach(pattern => {
        classifier.addDocument(tokenizer.tokenize(pattern.toLowerCase()), intent.tag);
    });
});

// Train the classifier
classifier.train();

// Function to get response based on user input
function getResponse(userInput) {
    const tag = classifier.classify(tokenizer.tokenize(userInput.toLowerCase()));
    for (let intent of intents) {
        if (intent.tag === tag) {
            const responses = intent.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return "I don't understand. Can you rephrase?";
}

// Express setup
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Chat endpoint
app.post('/chat', (req, res) => {
    const userInput = req.body.message;
    const response = getResponse(userInput);
    res.json({ response });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// Frontend Integration (script.js)
async function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value;
    if (message.trim() === "") return;
    const chatMessages = document.getElementById("chatMessages");

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerText = message;
    chatMessages.appendChild(userMessage);

    // Fetch response from backend
    const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });
    const data = await response.json();

    // Bot response
    const botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.innerText = data.response;
    chatMessages.appendChild(botMessage);

    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
