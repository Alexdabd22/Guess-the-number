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
guess-the-number/
├── backend/               
│   ├── index.js           
├── docs/           
│
├── public/            
│   ├── index.html         
│   ├── styles.css       
│   ├── main.js            
│   ├── cookie-popup.js   
│
├── storybook/        
│     
├── package.json           
├── package-lock.json                 
├── licenses-report.md               

##  Technologies Used
- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js, Express
- Session: express-session
- Cookie Consent: CookieConsent by Osano
## 📜 License

This project is licensed under the [ISC License](LICENSE.md).

Dependencies license report: [license-report.md](license-report.md)

 ### 1. Clone the project
```bash

