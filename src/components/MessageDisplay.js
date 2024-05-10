import React from 'react';

function MessageDisplay({ messages }) {
  return (
    <div className='overflow-auto p-4'>
      {messages.map((msg, index) => (
        <div key={index} className={`p-2 my-2 rounded ${msg.isBot ? 'bg-green-100' : 'bg-blue-100'}`}>{msg.text}</div>
      ))}
    </div>
  );
}

export default MessageDisplay;