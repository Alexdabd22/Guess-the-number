# Guess-the-number — Web Game
A simple web game where users try to guess a randomly generated number between 1 and 100. The game uses session-based state management on the backend, stores game history and best score on the client side, and includes a GDPR-compliant cookie consent popup.

## 🚀 Features

- Start a new game with a random number between 1–100
- Submit guesses and get feedback (“higher” / “lower” / “correct”)
- Track number of attempts per game
- Local storage of:
  - Best score (minimum attempts)
  - Last 10 games history
- Cookie consent popup compliant with GDPR
- Session management with Express
- Frontend & backend separated

## 📁 Project Structure
project-root/ │ ├── public/ # Frontend │ ├── index.html │ ├── styles.css │ ├── main.js │ ├── cookie-popup.js │ └── privacy-policy.html │ ├── server/ # Backend │ └── server.js │ ├── README.md ├── LICENSE └── licenses-report.txt # Generated by license-checker

##  Technologies Used
- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js, Express
- Session: express-session
- Cookie Consent: CookieConsent by Osano

 ### 1. Clone the project
```bash
git clone https://github.com/your-username/guess-the-number-game.git
cd guess-the-number-game
