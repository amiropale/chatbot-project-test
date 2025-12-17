import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  async function handleSendClick() {
    if (inputValue.trim() === '' || isLoading) {
      return;
    }

    setIsLoading(true);

    setInputValue('');

    const newMessage = [
      ...chatMessages, 
      {
        message: inputValue,
        sender: 'user',
        id: crypto.randomUUID()
      }];

    setChatMessages([
      ...newMessage, 
      {
        message: <img className="loading-img" src={LoadingSpinnerImage} alt="Loading..." />,
        sender: 'robot',
        id: crypto.randomUUID()
      }]);

    const robotResponse = await Chatbot.getResponseAsync(inputValue);
    
    setChatMessages([
      ...newMessage, 
      {
        message: robotResponse,
        sender: 'robot',
        id: crypto.randomUUID()
      }]);

    setIsLoading(false);
  }
  
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSendClick();
    } else if (event.key === 'Escape') {
      setInputValue('');
    }
  }

  return (
    <div className="chat-input">
      <input type="text" placeholder="Type your message..." size="40" onChange={handleInputChange} onKeyDown={handleKeyDown} value={inputValue} />
      <button className="send-button" onClick={handleSendClick}>Send</button>
      <button className="clear-button" onClick={() => setInputValue('')}>Clear</button>
    </div>
  );
}