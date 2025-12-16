import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage.jsx';
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const containerElem = messagesEndRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={messagesEndRef}>
      {chatMessages.map( chatMessage => {
        return (
          <ChatMessage key={chatMessage.id} message={chatMessage.message} sender={chatMessage.sender} />
        );
      })}
    </div>
  );
}

export default ChatMessages;