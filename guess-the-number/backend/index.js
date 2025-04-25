/**
 * @file Серверна частина гри "Вгадай число"
 * @module GuessTheNumberServer
 * @version 1.0.0
 * @requires express
 * @requires express-session
 * @requires cors
 * @requires swagger-ui-express
 * @requires yamljs
 */
const express = require("express");
const session = require("express-session");
const cors = require("cors");

const path = require("path");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yaml"));

const app = express();
const PORT = 3000;
/**
 * Ініціалізація middleware
 * @name useMiddleware
 * @function
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors({
    origin: "http://localhost:5500",
    credentials: true
}));
app.use(express.json());
/**
 * Налаштування сесії
 * @name useSession
 * @function
 * @param {Object} config - Конфігурація сесії
 */
app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}));
/**
 * Маршрут для початку нової гри
 * @name POST/game/start
 * @function
 * @param {Object} req - Об'єкт запиту
 * @param {Object} res - Об'єкт відповіді
 * @returns {Object} JSON з повідомленням
 */
app.post("/game/start", (req, res) => {
    const number = Math.floor(Math.random() * 100) + 1;
    req.session.secretNumber = number;
    req.session.guessCount = 0;
    res.json({ message: "Гру розпочато! Вгадайте число від 1 до 100." });
});

app.post("/game/guess", (req, res) => {
    const guess = Number(req.body.guess);
    const secret = req.session.secretNumber;

    if (!secret) return res.status(400).json({ message: "Гру не розпочато!" });
    if (!guess || guess < 1 || guess > 100) {
        return res.status(400).json({ message: "Некоректне число (1-100)" });
    }
    req.session.guessCount++;

    if (guess === secret) {
        return res.json({ result: "correct", message: `Ви вгадали число за ${req.session.guessCount} спроб.` });
    } else if (guess < secret) {
        return res.json({ result: "low", message: "Спробуйте більше число." });
    } else {
        return res.json({ result: "high", message: "Спробуйте менше число." });
    }
});
app.get("/game/state", (req, res) => {
    res.json({
        started: !!req.session.secretNumber,
        guessCount: req.session.guessCount || 0
    });
});

app.post("/game/restart", (req, res) => {
    req.session.secretNumber = null;
    req.session.guessCount = 0;
    res.json({ message: "Гру скинуто. Натисніть 'Почати гру'." });
});

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => console.log(`Сервер працює на http://localhost:${PORT}`));
