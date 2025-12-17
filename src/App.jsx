import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { WelcomeMessage } from './components/WelcomeMessage'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('chatMessages')) || []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]); 

  return (
    <div className="chatbot">
      {chatMessages.length === 0 && <WelcomeMessage />}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App
