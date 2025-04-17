const express = require("express");
const session = require("express-session");
const cors = require("cors");

const  app =express();
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5500",
    credentials: true
}));
app.use(express.json());
app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}));

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

app.listen(PORT, () => console.log(`Сервер працює на http://localhost:${PORT}`));
