import { useState, useEffect, useRef } from 'react'
import { ChatInput } from './components/ChatInput'
import { WelcomeMessage } from './components/WelcomeMessage'
import ChatMessages from './components/ChatMessages'
import AppMenu from './components/AppMenu'
import './App.css'

function App() {
  // ------------------------------
  // Chat messages (localStorage-safe)
  // ------------------------------
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

  // ------------------------------
  // Menu state + refs
  // ------------------------------
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // ------------------------------
  // Click outside handler
  // ------------------------------
  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  // ------------------------------
  // Render
  // ------------------------------
  return (
    <div className="chatbot">
      <button
        ref={buttonRef}
        className="chatbot-menu-button"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        ☰
      </button>

      {menuOpen && <AppMenu ref={menuRef} />}

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