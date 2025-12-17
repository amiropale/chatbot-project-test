import './AppMenu.css'

function AppMenu() {

  function handleResetChat() {
    localStorage.removeItem('chatMessages');
    window.location.reload();
  }

  function handleAbout() {
    alert('Chatbot Application\nVersion 1.0.0 (test-project)\nDeveloped by AmirMalek\nGitHub: https://github.com/amiropale');
  }

  return (
    <div className="app-menu">
      <h3>App Menu</h3>
      <ul className="menu-options">
        <button className="reset-chat-button" onClick={handleResetChat}>Reset Chat History</button>
        <button className="about-button" onClick={handleAbout}>About</button>
      </ul>
    </div>
  );
}

export default AppMenu;