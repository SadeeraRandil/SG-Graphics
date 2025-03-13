document.addEventListener('DOMContentLoaded', function() {
    const messageBtn = document.querySelector('.message-btn');
    const chatCard = document.getElementById('chat-card');
    const closeBtn = document.getElementById('close-btn');
    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('messageInput');
    const messageList = document.getElementById('message-list');
  
    // Toggle message window
    messageBtn.addEventListener('click', function() {
      chatCard.style.display = chatCard.style.display === 'none' || chatCard.style.display === '' ? 'flex' : 'none';
    });
  
    // Close the chat window
    closeBtn.addEventListener('click', function() {
      chatCard.style.display = 'none';
    });
  
    // Send message
    sendBtn.addEventListener('click', function() {
      const messageText = messageInput.value.trim();
      if (messageText !== '') {
        const newMessage = document.createElement('li');
        newMessage.classList.add('message-item'); // Add class for styling if needed
        newMessage.textContent = messageText;
        messageList.appendChild(newMessage);
        messageInput.value = ''; // Clear input after sending
        messageList.scrollTop = messageList.scrollHeight; // Scroll to the bottom after sending message
      }
    });
  
    // Handle Enter key press for sending messages
    messageInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        sendBtn.click();
      }
    });
  });
  