// Create a WebSocket connection to the server
const socket = io.connect('http://127.0.0.1:5000');

// Get the chat button and chat box elements
const chatButton = document.getElementById('chat-button');
const chatBox = document.getElementById('chat-box');
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');

// Add an event listener to the chat button
chatButton.addEventListener('click', () => {
    // Toggle the display of the chat box
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});

// Add an event listener to the close button
const closeButton = document.getElementById('close-chat');
closeButton.addEventListener('click', () => {
    chatBox.style.display = 'none'; // Close the chat box
});

// Add event listener to send a message when the Send button is clicked
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('message', message); // Send the message to the server
    messageInput.value = ''; // Clear the input field
});

// Listen for incoming messages from the server
socket.on('message', (data) => {
    const message = data.message;
    // Handle the incoming message, e.g., append it to the chat window
    appendReceiverMessage(message);
});

// Function to append a sender message to the chat content (you can keep this function)
function appendSenderMessage(message) {
    const chatContent = document.getElementById('chat-content');
    const senderMessage = document.createElement('div');
    senderMessage.classList.add('sender-message');
    senderMessage.innerHTML = `<p>${message}</p>`;
    chatContent.appendChild(senderMessage);
}

// Function to append a receiver message to the chat content
function appendReceiverMessage(message) {
    const chatContent = document.getElementById('chat-content');
    const receiverMessage = document.createElement('div');
    receiverMessage.classList.add('receiver-message');
    receiverMessage.innerHTML = `<p>${message}</p>`;
    chatContent.appendChild(receiverMessage);
}
