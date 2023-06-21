document.addEventListener('DOMContentLoaded', function() {
    // Get necessary elements
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');
    var chatBody = document.querySelector('.chat-body');

    // Add event listener for send button click
    sendButton.addEventListener('click', function() {
      var message = messageInput.value.trim(); // Get the message text

      if (message !== '') {
        // Create a new chat bubble element
        var chatBubble = document.createElement('div');
        chatBubble.classList.add('chat-bubble', 'user-message');
        chatBubble.textContent = message;

        // Check if previous chat bubbles exist
        if (chatBody.lastElementChild && chatBody.lastElementChild.classList.contains('chat-bubble')) {
          chatBubble.style.clear = 'both'; // Clear the float for new line
        }

        // Append the user's chat bubble to the chat body
        chatBody.appendChild(chatBubble);

        // Process user's message and generate bot's response
        var botResponse = generateBotResponse(message);

        // Create a new chat bubble element for the bot's response
        var botChatBubble = document.createElement('div');
        botChatBubble.classList.add('chat-bubble', 'bot-message');
        botChatBubble.textContent = botResponse;

        // Append the bot's chat bubble to the chat body
        chatBody.appendChild(botChatBubble);

        // Clear the message input
        messageInput.value = '';

        // Scroll to the bottom of the chat body
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    });

    // Add event listener for Enter key press in message input
    messageInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendButton.click(); // Simulate a click on the send button
      }
    });

    // Function to generate bot's response based on user's message
    function generateBotResponse(message) {
      var lowercaseMessage = message.toLowerCase();
      var botResponse = '';

      // Check user's message for greetings
      if (lowercaseMessage.includes('hii') || lowercaseMessage.includes('hello')) {
        botResponse = 'Hello, Ashish! How are you doing today?';
      }else if (lowercaseMessage.includes('how are you doing')) {
        botResponse = 'I am doing well, thank you! How can I assist you?';
      }

      if(lowercaseMessage.includes("good")){
        botResponse="nice";
      }
      if(lowercaseMessage.includes("how are you")){
        botResponse="I am doing well, thank you! How can I assist you?";
      }

      // Check user's message for coupon code request
      if (lowercaseMessage.includes('coupon code')) {
        botResponse = 'Currently, we are having a 30% off for the summer sale. Your coupon code is OFFLINE30.';
      }

      // Default bot response if no specific condition is met
      if (botResponse === '') {
        botResponse = "'I'm sorry, I didn't understand your message. How can I assist you?";
      }

      return botResponse;
    }
  });