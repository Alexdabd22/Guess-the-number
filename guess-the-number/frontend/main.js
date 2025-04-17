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
            document.getElementById("feedback").textContent = data.message;
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
        });
});