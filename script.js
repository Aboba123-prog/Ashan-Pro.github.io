const engines = {
    google: "https://www.google.com/search?q=",
    yandex: "https://yandex.ru/search/?text=",
    duckduckgo: "https://duckduckgo.com/?q=",
    yahoo: "https://search.yahoo.com/search?p=",
    bing: "https://www.bing.com/search?q="
};

let currentEngine = localStorage.getItem("engine") || "google";

const engineLabel = document.getElementById("currentEngineLabel");

function setEngine(engine) {
    currentEngine = engine;
    localStorage.setItem("engine", engine);

    engineLabel.textContent = engine.charAt(0).toUpperCase() + engine.slice(1);
}

function search() {
    const input = document.getElementById("searchInput");
    const query = input.value;
    if (!query) return;

    const url = engines[currentEngine] + encodeURIComponent(query);
    window.open(url, "_blank");
}

function startVoiceSearch() {
    const input = document.getElementById("searchInput");
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Ваш браузер не поддерживает голосовой ввод.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ru-RU";
    recognition.interimResults = false;

    input.placeholder = "Слушаю...";

    recognition.onresult = (event) => {
        input.value = event.results[0][0].transcript;
        input.placeholder = "Введите запрос...";
    };

    recognition.onerror = () => {
        input.value = "";
        input.placeholder = "Введите запрос...";
    };

    recognition.onend = () => {
        if (!input.value) input.placeholder = "Введите запрос...";
    };

    recognition.start();
}

document.getElementById("searchInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") search();
});

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    const clock = document.getElementById("clock");
    clock.style.color = isDark ? "white" : "black";
}

function openWithProxy() {
    const input = document.getElementById("searchInput");
    const query = input.value;

    if (!query) {
        alert("VPN не может быть активирован без запроса!");
        return;
    }

    const proxyURL = "https://corsproxy.io/?";
    const target = engines[currentEngine] + encodeURIComponent(query);

    window.open(proxyURL + encodeURIComponent(target), "_blank");
}

window.addEventListener("load", () => {
    const input = document.getElementById("searchInput");
    const clock = document.getElementById("clock");

    input.focus();

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        clock.style.color = "white";
    }

    setInterval(() => {
        clock.textContent = new Date().toLocaleTimeString();
    }, 1000);
});
