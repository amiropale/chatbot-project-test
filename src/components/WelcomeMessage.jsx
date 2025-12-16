import RobotProfileImage from '../assets/robot.png'
import './WelcomeMessage.css'

export function WelcomeMessage() {
    return (
      <div className="initial-message-robot">
        <img src={RobotProfileImage} alt="Robot Avatar" className="initial-message-profile" />
        <div className="initial-message-text">
          Hello! I am your friendly chatbot. How can I assist you today?
        </div>
      </div>
    );
  }