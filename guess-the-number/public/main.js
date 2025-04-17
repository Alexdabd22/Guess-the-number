const API = "http://localhost:3000";

document.getElementById("start").addEventListener("click", () => {
    fetch(`${API}/game/start`, {
        method: "POST",
        credentials: "include"
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById("feedback").textContent = data.message;
            document.getElementById("controls").style.display = "block";
        });
});

document.getElementById("guessBtn").addEventListener("click", () => {
    const value = document.getElementById("guessInput").value;
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

            if (data.result === "correct") {
                document.getElementById("guessInput").disabled = true;
                document.getElementById("guessBtn").disabled = true;

                const currentAttempts = parseInt(data.message.match(/\d+/)[0]);
                const best = localStorage.getItem("bestScore");
                if (!best || currentAttempts < best) {
                    localStorage.setItem("bestScore", currentAttempts);
                    feedback.textContent += " 🏆 Новий рекорд!";
                } else {
                    feedback.textContent += ` (Рекорд: ${best})`;
                }

                let gamesHistory = JSON.parse(localStorage.getItem("gamesHistory")) || [];
                gamesHistory.push(currentAttempts);

                if (gamesHistory.length > 10) {
                    gamesHistory.shift();
                }
                localStorage.setItem("gamesHistory", JSON.stringify(gamesHistory));
                displayGameHistory();
            }
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
            document.getElementById("guessInput").value = "";
            document.getElementById("guessInput").disabled = false;
            document.getElementById("guessBtn").disabled = false;
        });
});
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
window.onload = displayGameHistory;
