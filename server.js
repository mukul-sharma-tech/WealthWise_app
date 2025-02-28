// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "public")));
const mongoose = require("mongoose");

// mongoose
//     .connect("mongodb://127.0.0.1:27017/chatbot", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Connected to MongoDB 🚀"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// const messageSchema = new mongoose.Schema({
//     userMessage: String,
//     botResponse: String,
//     timestamp: { type: Date, default: Date.now }
// });

// const Message = mongoose.model("Message", messageSchema);

// API Endpoint to Save Messages
// app.post("/save-message", async (req, res) => {
//     const { userMessage, botResponse } = req.body;

//     try {
//         const newMessage = new Message({ userMessage, botResponse });
//         await newMessage.save();
//         res.json({ success: true, message: "Message saved successfully!" });
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message });
//     }
// });



///front to back
app.get("/",  async (req, res) => {
    res.sendFile(__dirname + "/public/head.html");
  });

  app.get("/chatbot", async(req, res) => {
    
    res.sendFile(__dirname + "/public/chatbot.html");
    // const { userMessage, botResponse } = req.body;

    // try {
    //     const newMessage = new Message({ userMessage, botResponse });
    //     await newMessage.save();
    //     res.json({ success: true, message: "Message saved successfully!" });
    // } catch (error) {
    //     res.status(500).json({ success: false, error: error.message });
    // }

  });

// Load intents from JSON file
// const intents = JSON.parse(fs.readFileSync('intents.json'));

// Function to get a response based on user input
const getResponse = (message) => {
    for (let intent of intents) {
        for (let pattern of intent.patterns) {
            if (message.toLowerCase() === pattern.toLowerCase()) {
                const responses = intent.responses;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }
    return "I'm sorry, I don't have information on that. Please ask about investments, savings, budgeting, or debt.";
};

// API endpoint for chatbot
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = getResponse(userMessage);
    res.json({ response: botResponse });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
