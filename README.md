# Chatbot App (React + Vite)

A small practice Chatbot application built with **React** and **Vite** as part of a learning exercise inspired by the teaching style and frontend fundamentals emphasized by **SuperSimpleDev**.

This project is intentionally simple and focused on reinforcing core React concepts rather than advanced AI or backend integrations.

---

## Purpose of the Project

The main goals of this exercise are to:

- Practice setting up a React project using **Vite**
- Understand **component-based architecture**
- Work with **React state (`useState`)**
- Handle **user input and events**
- Render dynamic content conditionally
- Build confidence with small, complete React apps

---

## App Description

The Chatbot App allows a user to:

- Type a message into an input field
- Submit the message
- See their message appear in a chat-style UI
- Receive predefined or rule-based bot responses

> This is **not** an AI-powered chatbot. Responses are generated using simple JavaScript logic for learning purposes.

---

## Tech Stack

- **React** (Functional Components)
- **Vite** (Fast development build tool)
- **JavaScript (ES6+)**
- **HTML5**
- **CSS** (or basic styling of your choice)

---

## Project Structure (Example)

chatbot-project-test/
├── src/
│   ├── components/
│   │   ├── ChatInput.jsx
|   |   ├── ChatInput.css
│   │   ├── ChatMessage.jsx
│   │   ├── WelcomeMessage.jsx
│   │   ├── WelcomeMessage.css
|   |   ├── ChatMessage.css
│   │   ├── ChatMessages.jsx
|   |   └── ChatMessages.css
│   ├── assets/
|   |   ├── loading-spinner.gif
│   │   ├── robot.png
|   |   └── user.png
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
└── README.md

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/amiropale/chatbot-project-test.git
cd chatbot-project-test
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## Example Bot Logic

The chatbot can respond based on simple rules, such as:

* Greeting messages
* Keywords like `help`, `hello`, `bye`
* Default fallback responses

This keeps the focus on **React logic**, not AI complexity.

---

## Concepts Practiced

* React functional components
* `useState` for managing messages
* Handling form submission
* Mapping arrays to JSX
* Passing props between components
* Basic conditional rendering

---

## Suggested Improvements (Optional)

If you want to extend this project:

* Add message timestamps
* Improve UI styling
* Store chat history in `localStorage`

---

## Learning Reference

This project is inspired by the beginner-friendly teaching philosophy of **SuperSimpleDev**, focusing on:

* Simplicity
* Clarity
* Learning by building small, complete apps

---

## License

This project is for **educational purposes only** and is free to use or modify for learning and practice.

---

Happy coding!