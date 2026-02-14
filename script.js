const engines = {
    google: "https://www.google.com/search?q=",
    yandex: "https://yandex.ru/search/?text=",
    duckduckgo: "https://duckduckgo.com/?q=",
    yahoo: "https://search.yahoo.com/search?p=",
    bing: "https://www.bing.com/search?q="
};




let currentEngine = localStorage.getItem("engine") || "google";

function setEngine(engine) {
    currentEngine = engine;
    localStorage.setItem("engine", engine);
    alert("Выбран поисковик: " + engine);
}

function search() {
    const query = document.getElementById("searchInput").value;
    if (!query) return;

    const url = engines[currentEngine] + encodeURIComponent(query);
    window.open(url, "_blank");
}

document.getElementById("searchInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") search();
});

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Явно меняем цвет текста часов
    const clock = document.getElementById('clock');
    clock.style.color = isDark ? 'white' : 'black'; 
}


window.onload = function() {
    document.getElementById("searchInput").focus();

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    setInterval(() => {
        const now = new Date();
        document.getElementById("clock").textContent =
            now.toLocaleTimeString();
            
    }, 1000);
};



function openWithProxy() {
    const query = document.getElementById('searchInput').value; // исправлены кавычки

    if (!query) {
        alert("VPN не может быть активирован без запроса!"); // Сообщение, если поле пустое
        return;
    }

    // Сообщение перед открытием (опционально)
    console.log("Открываю VPN для запроса: " + query);

    const proxyURL = "https://corsproxy.io/?";
    const target = engines[currentEngine] + encodeURIComponent(query);
    
    window.open(proxyURL + encodeURIComponent(target), "_blank");
}
