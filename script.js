// Function to handle sending a message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message !== '') {
      const chatMessages = document.querySelector('.chat-messages');
      const messageElement = document.createElement('div');
      
      // Add the 'user' class for user messages (optional: could be based on different logic)
      messageElement.classList.add('message', 'user');
      messageElement.textContent = message;
  
      // Append the message to the chat
      chatMessages.appendChild(messageElement);
  
      // Scroll to the bottom of the chat
      chatMessages.scrollTop = chatMessages.scrollHeight;
  
      // Clear the input field and refocus it
      messageInput.value = '';
      messageInput.focus();
    }
  }
  
  // Event listener for the send button
  document.getElementById('send-button').addEventListener('click', sendMessage);
  
  // Event listener for pressing Enter in the input field
  document.getElementById('message-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });
  