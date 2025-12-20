import { useState, useEffect, forwardRef } from 'react';
import './AppMenu.css';

const AppMenu = forwardRef(({ isOpen, onExited, onAbout }, ref) => {
  const [visible, setVisible] = useState(false);

  // Enter animation
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setVisible(true);
      });
    } else {
      // Exit animation
      setVisible(false);

      const timeout = setTimeout(() => {
        onExited?.();
      }, 150); // must match CSS transition duration

      return () => clearTimeout(timeout);
    }
  }, [isOpen, onExited]);

  function handleResetChat() {
    localStorage.removeItem('chatMessages');
    window.location.reload();
  }

  return (
    <div ref={ref} className="app-menu" data-visible={visible}>
      <h3>App Menu</h3>
      <ul className="menu-options">
        <li>
          <button onClick={handleResetChat}>
            Reset Chat History
          </button>
        </li>
        <li>
          <button onClick={onAbout}>
            About
          </button>
        </li>
      </ul>
    </div>
  );
});

export default AppMenu;