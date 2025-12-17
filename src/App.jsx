import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { WelcomeMessage } from './components/WelcomeMessage'
import ChatMessages from './components/ChatMessages'
import AppMenu from './components/AppMenu'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    try {
      const stored = localStorage.getItem('chatMessages');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  function handleClickOutsideMenu(event) {
    const menu = document.querySelector('.app-menu');
    const button = document.querySelector('.chatbot-menu-button');
    if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
      menu.style.display = 'none';
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className="chatbot">
      <button
        className="chatbot-menu-button"
        onClick={() => {
          const menu = document.querySelector('.app-menu');
          if (menu.style.display === 'none' || !menu.style.display) {
            menu.style.display = 'block';
          } else {
            menu.style.display = 'none';
          }
        }}
      >
        ☰
      </button>
      <AppMenu />
      {chatMessages.length === 0 && <WelcomeMessage />}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;