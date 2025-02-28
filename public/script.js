// AOS.init();

const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});





//chatbot
function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value;
    if (message.trim() === "") return;
    const chatMessages = document.getElementById("chatMessages");

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerText = message;
    chatMessages.appendChild(userMessage);

    // Bot response
    const botMessage = document.createElement("div");
    botMessage.className = "message bot-message";
    botMessage.innerText = "I'm here to help!";
    chatMessages.appendChild(botMessage);

    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


let home = document.querySelector('#home_icon');
let about = document.querySelector('#about_icon');
let contact = document.querySelector('#contact_icon');
let chat = document.querySelector('#ai_icon');
let homepage = document.querySelector('.myhomepage');

let aboutpage = document.querySelector('#aboutSection');
let chatbot = document.querySelector('.mychatbot');
let contactpage = document.querySelector('#contactSection');

chat.addEventListener('click',(e) => {
    home.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    chat.classList.add('active');
    e.preventDefault();
    chatbot.classList.remove('hidden');
    homepage.classList.add('hidden');
    aboutpage.classList.add('hidden');

})

// Home Button Click
home.addEventListener('click', (e) => {
    e.preventDefault();
    homepage.classList.remove('hidden');
    home.classList.add('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    chat.classList.remove('active');
    chatbot.classList.add('hidden');
    aboutpage.classList.add('hidden');


});

// About Button Click
about.addEventListener('click', (e) => {
    e.preventDefault();
    aboutpage.classList.remove('hidden');
    about.classList.add('active');
    home.classList.remove('active');
    contact.classList.remove('active');
    chat.classList.remove('active');
    chatbot.classList.add('hidden');
    homepage.classList.add('hidden');
    contactpage.classList.add('hidden')
});

// Contact Button Click
contact.addEventListener('click', (e) => {
    e.preventDefault();
    contactpage.classList.remove('hidden');

    contact.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    chat.classList.remove('active');

    chatbot.classList.add('hidden');
    homepage.classList.add('hidden');
    aboutpage.classList.add('hidden');
});





//

// Function to handle navigation
function navigateTo(section) {
    // Hide all sections
    homepage.classList.add('hidden');
    chatbot.classList.add('hidden');
    aboutpage.classList.add('hidden');
    contactpage.classList.add('hidden');

    // Remove active class from all nav items
    home.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    chat.classList.remove('active');

    // Show the selected section and make nav item active
    if (section === 'home') {
        homepage.classList.remove('hidden');
        home.classList.add('active');
    } else if (section === 'about') {
        aboutpage.classList.remove('hidden');
        about.classList.add('active');
    } else if (section === 'contact') {
        contactpage.classList.remove('hidden');
        contact.classList.add('active');
    } else if (section === 'chat') {
        chatbot.classList.remove('hidden');
        chat.classList.add('active');
    }

    // Save the current section in local storage
    localStorage.setItem('activeSection', section);
}

// Event listeners for navigation
home.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('home');
});

about.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('about');
});

contact.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('contact');
});

chat.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('chat');
});

// On page load, check for the saved section in local storage
window.addEventListener('load', () => {
    const savedSection = localStorage.getItem('activeSection') || 'home';
    navigateTo(savedSection);
});




// document.addEventListener("DOMContentLoaded", function () {
//     const chatInput = document.getElementById("chatInput");
//     const sendButton = document.getElementById("sendButton");
//     const chatContainer = document.getElementById("chatContainer");

//     sendButton.addEventListener("click", async function () {
//         const userMessage = chatInput.value.trim();
//         if (!userMessage) return;

//         // Display user message in chat UI
//         appendMessage("User", userMessage);

//         // Simulate bot response (You can replace this with AI-generated responses)
//         const botResponse = "This is a bot response!"; 

//         appendMessage("Bot", botResponse);

//         // Send message to backend to save in MongoDB
//         await saveMessage(userMessage, botResponse);

//         // Clear input field
//         chatInput.value = "";
//     });

//     function appendMessage(sender, message) {
//         const messageElement = document.createElement("p");
//         messageElement.textContent = `${sender}: ${message}`;
//         chatContainer.appendChild(messageElement);
//     }

//     async function saveMessage(userMessage, botResponse) {
//         try {
//             const response = await fetch("/save-message", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ userMessage, botResponse })
//             });

//             const result = await response.json();
//             console.log(result.message);
//         } catch (error) {
//             console.error("Error saving message:", error);
//         }
//     }
//});//

