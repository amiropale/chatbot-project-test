import './AboutModal.css';

function AboutModal({ onClose }) {
  return (
    <div className="about-modal-backdrop" onClick={onClose}>
      <div
        className="about-modal"
        onClick={e => e.stopPropagation()}
      >
        <h3>About</h3>

        <p><strong>Chatbot Application</strong></p>
        <p>Version 1.0.0 (test-project)</p>
        <p>Developed by AmirMalek</p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/amiropale"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/amiropale
          </a>
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AboutModal;