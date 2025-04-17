const API = "http://localhost:3000";
let guessCount = 0;

document.getElementById("start").addEventListener("click", async () => {
    try {
        const response = await fetch(`${API}/game/start`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById("feedback").textContent = data.message;
        document.getElementById("controls").classList.remove("hidden");
        document.getElementById("controls").classList.add("show");
        document.getElementById("progress").style.width = "0%";
        guessCount = 0;
        document.getElementById("startSound").play();
    } catch (error) {
        console.error("Помилка при старті гри:", error);
        document.getElementById("feedback").textContent = "Помилка підключення до сервера. Перевірте, чи запущений бекенд.";
    }
});


document.getElementById("guessBtn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("guessInput").value);

    if (isNaN(value) || value < 1 || value > 100) {
        document.getElementById("feedback").textContent = "Будь ласка, введіть число від 1 до 100";
        return;
    }

    fetch(`${API}/game/guess`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guess: value })
    })
        .then(res => res.json())
        .then(data => {
            const feedback = document.getElementById("feedback");
            feedback.textContent = data.message;
            guessCount++;
            document.getElementById("progress").style.width = `${(guessCount / 10) * 100}%`;

            if (data.result === "correct") {
                document.getElementById("guessInput").disabled = true;
                document.getElementById("guessBtn").disabled = true;
                feedback.classList.add("correct");
                document.getElementById("winSound").play();

                const currentAttempts = parseInt(data.message.match(/\d+/)[0]);
                updateRecords(currentAttempts);
                updateGameHistory(currentAttempts);
                displayGameHistory();
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("feedback").textContent = "Помилка при обробці спроби";
        });
});


document.getElementById("restart").addEventListener("click", () => {
    fetch(`${API}/game/restart`, {
        method: "POST",
        credentials: "include"
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("feedback").textContent = data.message;
            document.getElementById("feedback").classList.remove("correct");
            document.getElementById("guessInput").value = "";
            document.getElementById("guessInput").disabled = false;
            document.getElementById("guessBtn").disabled = false;
            document.getElementById("progress").style.width = "0%";
            guessCount = 0;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("feedback").textContent = "Помилка при скиданні гри";
        });
});


function updateRecords(attempts) {
    const best = localStorage.getItem("bestScore");
    const feedback = document.getElementById("feedback");

    if (!best || attempts < best) {
        localStorage.setItem("bestScore", attempts);
        feedback.textContent += " 🏆 Новий рекорд!";
    } else {
        feedback.textContent += ` (Рекорд: ${best})`;
    }
}


function updateGameHistory(attempts) {
    let gamesHistory = JSON.parse(localStorage.getItem("gamesHistory")) || [];
    gamesHistory.push(attempts);

    if (gamesHistory.length > 10) {
        gamesHistory = gamesHistory.slice(-10);
    }

    localStorage.setItem("gamesHistory", JSON.stringify(gamesHistory));
}


function displayGameHistory() {
    const historyList = document.getElementById("gameHistory");
    historyList.innerHTML = "";

    const gamesHistory = JSON.parse(localStorage.getItem("gamesHistory")) || [];
    gamesHistory.forEach((game, index) => {
        const li = document.createElement("li");
        li.textContent = `Гра ${index + 1}: ${game} спроб`;
        historyList.appendChild(li);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    displayGameHistory();
});