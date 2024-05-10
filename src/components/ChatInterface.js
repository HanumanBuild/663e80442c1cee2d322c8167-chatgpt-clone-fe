import React from 'react';
// Import API configuration
import API from '../api';

function ChatInterface() {
  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow'>
      {/* Message display component will be inserted here */}
      {/* Input area component will be inserted here */}
    </div>
  );
}

// Example function to initialize chat
const initializeChat = async () => {
  try {
    const response = await API.post('/initialize');
    console.log(response.data);
  } catch (error) {
    console.error('Error initializing chat:', error);
  }
};

// Example function to send a message
const sendMessage = async (message) => {
  try {
    const response = await API.post('/send-message', { message });
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export default ChatInterface;