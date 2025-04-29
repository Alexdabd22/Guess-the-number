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
- Frontend: HTML, CSS, Vanilla JavaScript, Storybook (React)
- Backend: Node.js, Express
- Session: express-session
- CookieConsent by Osano (for GDPR compliance)
## 📜 License

This project is licensed under the ISC License.

For more details on licenses for dependencies, refer to the license-report.md.

 ### 1. Clone the project
```bash
https://github.com/Alexdabd22/Guess-the-number.git
cd guess-the-number
```
### 2. Access the application:
```bash
1. npm start
   game: http://localhost:3000
2. npm start
   swagger:  http://localhost:3000/api-docs
3. npx serve docs
   documentation : http://localhost:3000
4. cd client
   npm run storybook
   storybook : http://localhost:6006
```

