window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        palette: {
            popup: { background: "#000" },
            button: { background: "#f1d600" }
        },
        content: {
            message: "Цей сайт використовує cookies для покращення роботи.",
            dismiss: "Гаразд",
            link: "Детальніше",
            href: "../docs/PRIVACY_POLICY.md"
        }
    });
});
