const engines = {
    google: "https://www.google.com/search?q=",
    yandex: "https://yandex.ru/search/?text=",
    duckduckgo: "https://duckduckgo.com/?q=",
    yahoo: "https://search.yahoo.com/search?p=",
    bing: "https://www.bing.com/search?q="
};

let currentEngine = localStorage.getItem("engine") || "google";

const input = document.getElementById("searchInput");
const engineLabel = document.getElementById("currentEngineLabel");
const suggestionsBox = document.getElementById("suggestions");
const clock = document.getElementById("clock");
const indicator = document.getElementById("engineIndicator");

function setEngine(engine, element) {
    currentEngine = engine;
    localStorage.setItem("engine", engine);
    engineLabel.textContent =
        engine.charAt(0).toUpperCase() + engine.slice(1);
    moveIndicator(element);
    moveLabelIndicator();

}

function moveIndicator(element) {
    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();

    indicator.style.width = rect.width + "px";
    indicator.style.left = (rect.left - parentRect.left) + "px";
    indicator.style.top = (rect.top - parentRect.top) + "px";
}

function startVoiceSearch() {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Браузер не поддерживает голосовой ввод.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ru-RU";

    input.placeholder = "Слушаю...";

    recognition.onresult = e => {
        input.value = e.results[0][0].transcript;
        input.placeholder = "Введите запрос...";
    };

    recognition.onend = () => {
        input.placeholder = "Введите запрос...";
    };

    recognition.start();
}


function search() {
    const query = input.value.trim();
    if (!query) return;
    window.open(engines[currentEngine] + encodeURIComponent(query), "_blank");
    suggestionsBox.style.display = "none";
}

input.addEventListener("keydown", e => {
    if (e.key === "Enter") search();
});

function toggleTheme() {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

function openWithProxy() {
    const query = input.value.trim();
    if (!query) return;
    const proxyURL = "https://corsproxy.io/?";
    const target = engines[currentEngine] + encodeURIComponent(query);
    window.open(proxyURL + encodeURIComponent(target), "_blank");
}

function resetBackground() {
    document.querySelector(".background").style.background =
        "linear-gradient(135deg, var(--bg1), var(--bg2))";
    localStorage.removeItem("customBackground");
}

window.addEventListener("load", () => {

moveLabelIndicator();


    // Обои
const bgUpload = document.getElementById("bgUpload");

bgUpload.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const imageData = e.target.result;

        document.querySelector(".background").style.background =
            `url(${imageData}) center/cover no-repeat`;

        localStorage.setItem("customBackground", imageData);
    };

    reader.readAsDataURL(file);
});

// Восстановление фона
const savedBg = localStorage.getItem("customBackground");
if (savedBg) {
    document.querySelector(".background").style.background =
        `url(${savedBg}) center/cover no-repeat`;
}


    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    engineLabel.textContent =
        currentEngine.charAt(0).toUpperCase() + currentEngine.slice(1);

    const activeCard = document.querySelector(
        `.engine-card[onclick*="${currentEngine}"]`
    );

    if (activeCard) moveIndicator(activeCard);

    setInterval(() => {
        clock.textContent = new Date().toLocaleTimeString();
    }, 1000);

});

const controlsIndicator = document.getElementById("controlsIndicator");

function moveControlsIndicator(element) {
    const rect = element.getBoundingClientRect();
    const parentRect = element.parentElement.getBoundingClientRect();

    controlsIndicator.style.width = rect.width + "px";
    controlsIndicator.style.left = (rect.left - parentRect.left) + "px";
    controlsIndicator.style.top = (rect.top - parentRect.top) + "px";
}

document.querySelectorAll(".controls button").forEach(btn => {
    btn.addEventListener("click", function() {
        moveControlsIndicator(this);
    });
});


const labelIndicator = document.getElementById("labelIndicator");
const labelElement = document.getElementById("currentEngineLabel");

function moveLabelIndicator() {
    const rect = labelElement.getBoundingClientRect();
    const parentRect = labelElement.parentElement.getBoundingClientRect();

    labelIndicator.style.width = rect.width + "px";
    labelIndicator.style.height = rect.height + "px";
    labelIndicator.style.left = (rect.left - parentRect.left) + "px";
    labelIndicator.style.top = (rect.top - parentRect.top) + "px";
}

const searchIndicator = document.getElementById("searchIndicator");

document.querySelectorAll(".search-box button").forEach(btn => {
    btn.addEventListener("click", function () {
        const rect = this.getBoundingClientRect();
        const parentRect = this.parentElement.parentElement.getBoundingClientRect();

        searchIndicator.style.width = rect.width + "px";
        searchIndicator.style.height = rect.height + "px";
        searchIndicator.style.left = (rect.left - parentRect.left) + "px";
        searchIndicator.style.top = (rect.top - parentRect.top) + "px";
    });
});
