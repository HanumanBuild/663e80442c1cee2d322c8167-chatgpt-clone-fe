import React, { useState } from 'react';

function InputArea({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    onSendMessage(message);
    setMessage('');
  };

  return (
    <div className='mt-4 flex'>
      <input
        type='text'
        className='flex-1 p-2 border rounded'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className='ml-2 px-4 py-2 bg-blue-500 text-white rounded' onClick={handleSend}>Send</button>
    </div>
  );
}

export default InputArea;