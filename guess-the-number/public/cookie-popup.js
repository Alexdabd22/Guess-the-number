window.addEventListener("load", function() {
    window.cookieconsent.initialise({
        palette: {
            popup: { background: "#252e39" },
            button: { background: "#14a7d0" }
        },
        theme: "classic",
        content: {
            message: "Цей сайт використовує cookies для покращення роботи.",
            dismiss: "Зрозуміло",
            link: "Детальніше",
            href: "privacy-policy.html"
        }
    });
});