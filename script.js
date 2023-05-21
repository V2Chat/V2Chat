// Initialize WebSocket connection
const socket = new WebSocket('ws://localhost:3000');

// Function to handle WebSocket connection established
socket.onopen = () => {
  console.log('WebSocket connection established.');
};

// Function to handle WebSocket received messages
socket.onmessage = event => {
  const chatMessage = JSON.parse(event.data);
  chatMessages.push(chatMessage);
  displayChatMessages();
};

// Function to handle sending a message
function sendMessage() {
  const usernameInput = document.getElementById('username-input');
  const messageInput = document.getElementById('message-input');

  const username = usernameInput.value;
  const message = messageInput.value;

  if (username && message) {
    const chatMessage = {
      username: username,
      message: message
    };

    // Send message through WebSocket
    socket.send(JSON.stringify(chatMessage));

    // Clear input fields
    messageInput.value = '';
    messageInput.focus();
  }
}

// Function to display chat messages
function displayChatMessages() {
  const chatWindow = document.getElementById('chat-window');
  chatWindow.innerHTML = '';

  chatMessages.forEach(chatMessage => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${chatMessage.username}: </strong>${chatMessage.message}`;
    chatWindow.appendChild(messageElement);
  });

  // Automatically scroll to the bottom
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
