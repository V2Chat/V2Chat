// Initialize empty chat messages array
let chatMessages = [];

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

    // Add message to chat messages array
    chatMessages.push(chatMessage);

    // Clear input fields
    messageInput.value = '';
    messageInput.focus();

    // Display updated chat messages
    displayChatMessages();
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
