import UserProfileImage from '../assets/user.png'
import RobotProfileImage from '../assets/robot.png'
import dayjs from 'dayjs'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
  const timestamp = dayjs().format('h:mma');

  return (
      <div className={sender === 'user' ? 'user-chat-message' : 'robot-chat-message'}>
        {sender === 'robot' && <img src={RobotProfileImage} alt="Robot Avatar" className="chat-message-profile" />}
        <div className="chat-message-text">
          {message}
          <div className={sender === 'user' ? 'user-chat-message-timestamp' : 'robot-chat-message-timestamp'}>{timestamp}</div>
        </div>  
        {sender === 'user' && <img src={UserProfileImage} alt="User Avatar" className="chat-message-profile" />}
      </div>
  );
}