import { forwardRef } from 'react';
import './AppMenu.css';

const AppMenu = forwardRef((props, ref) => {
  function handleResetChat() {
    localStorage.removeItem('chatMessages');
    window.location.reload();
  }

  function handleAbout() {
    alert(
      'Chatbot Application\nVersion 1.0.0 (test-project)\nDeveloped by AmirMalek\nGitHub: https://github.com/amiropale'
    );
  }

  return (
    <div ref={ref} className="app-menu" data-visible="true">
      <h3>App Menu</h3>
      <ul className="menu-options">
        <li>
          <button className="reset-chat-button" onClick={handleResetChat}>
            Reset Chat History
          </button>
        </li>
        <li>
          <button className="about-button" onClick={handleAbout}>
            About
          </button>
        </li>
      </ul>
    </div>
  );
});

export default AppMenu;