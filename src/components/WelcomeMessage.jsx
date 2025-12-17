import RobotProfileImage from '../assets/robot.png'
import dayjs from 'dayjs'
import './WelcomeMessage.css'

export function WelcomeMessage() {
  const timestamp = dayjs().format('h:mma');

  return (
    <div className="initial-message-robot">
      <img src={RobotProfileImage} alt="Robot Avatar" className="initial-message-profile" />
      <div className="initial-message-text">
        Hello! I am your friendly chatbot. How can I assist you today?
        <div className="initial-message-timestamp">{timestamp}</div>
      </div>
    </div>
  );
}