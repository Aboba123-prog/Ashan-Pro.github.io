const engines = [
    { id: "google", name: "Google", domain: "google.com", url: "https://www.google.com/search?q=", icon: "fa-brands fa-google", color: "#4285f4" },
    { id: "yandex", name: "Yandex", domain: "yandex.com", url: "https://yandex.com/search/?text=", icon: "fa-solid fa-magnifying-glass", color: "#e43d30" },
    { id: "duckduckgo", name: "DuckDuckGo", domain: "duckduckgo.com", url: "https://duckduckgo.com/?q=", icon: "fa-solid fa-user-secret", color: "#de7134" },
    { id: "bing", name: "Bing", domain: "bing.com", url: "https://www.bing.com/search?q=", icon: "fa-solid fa-magnifying-glass", color: "#1683cf" },
    { id: "yahoo", name: "Yahoo", domain: "search.yahoo.com", url: "https://search.yahoo.com/search?p=", icon: "fa-brands fa-yahoo", color: "#6001d2" },
    { id: "brave", name: "Brave Search", domain: "search.brave.com", url: "https://search.brave.com/search?q=", icon: "fa-solid fa-shield-halved", color: "#fb542b" },
    { id: "ecosia", name: "Ecosia", domain: "ecosia.org", url: "https://www.ecosia.org/search?q=", icon: "fa-solid fa-leaf", color: "#4ca86b" },
    { id: "startpage", name: "Startpage", domain: "startpage.com", url: "https://www.startpage.com/sp/search?query=", icon: "fa-solid fa-shield", color: "#477bea" },
    { id: "qwant", name: "Qwant", domain: "qwant.com", url: "https://www.qwant.com/?q=", icon: "fa-solid fa-magnifying-glass", color: "#5366df" },
    { id: "mojeek", name: "Mojeek", domain: "mojeek.com", url: "https://www.mojeek.com/search?q=", icon: "fa-solid fa-earth-europe", color: "#e84b41" },
    { id: "swisscows", name: "Swisscows", domain: "swisscows.com", url: "https://swisscows.com/web?query=", icon: "fa-solid fa-cow", color: "#d64b50" },
    { id: "metager", name: "MetaGer", domain: "metager.org", url: "https://metager.org/meta/meta.ger3?eingabe=", icon: "fa-solid fa-shield-halved", color: "#31895c" },
    { id: "you", name: "You.com AI", domain: "you.com", url: "https://you.com/search?q=", icon: "fa-solid fa-wand-magic-sparkles", color: "#386dce" },
    { id: "perplexity", name: "Perplexity", domain: "perplexity.ai", url: "https://www.perplexity.ai/search?q=", icon: "fa-solid fa-circle-nodes", color: "#20a8a4" },
    { id: "chatgpt", name: "ChatGPT", domain: "chatgpt.com", url: "https://chatgpt.com/?q=", icon: "fa-solid fa-robot", color: "#18856f" },
    { id: "claude", name: "Claude", domain: "claude.ai", url: "https://claude.ai/new?q=", icon: "fa-solid fa-brain", color: "#bd7655" }
];

const wallpapers = [
    { id: "lake", name: "Озеро", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=320&q=48" },
    { id: "mountain", name: "Горы", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=320&q=48" },
    { id: "forest", name: "Лес", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=320&q=48" },
    { id: "coast", name: "Море", url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=320&q=48" },
    { id: "valley", name: "Долина", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=320&q=48" },
    { id: "sunset", name: "Закат", url: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=320&q=48" },
    { id: "waterfall", name: "Водопад", url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=320&q=48" },
    { id: "desert", name: "Пустыня", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=320&q=48" },
    { id: "snow", name: "Снег", url: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=320&q=48" },
    { id: "garden", name: "Природа", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=82", thumb: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=320&q=48" }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const background = $("#background");
const searchForm = $("#searchForm");
const searchInput = $("#searchInput");
const voiceButton = $("#voiceButton");
const settingsOpen = $("#settingsOpen");
const settingsClose = $("#settingsClose");
const settingsOverlay = $("#settingsOverlay");
const settingsWindow = $("#settingsWindow");
const enginesBox = $("#engines");
const engineIndicator = $("#engineIndicator");
const themeControls = $("#themeControls");
const themeIndicator = $("#themeIndicator");
const currentEngineLogo = $("#currentEngineLogo");
const currentEngineName = $("#currentEngineName");
const glassRange = $("#glassRange");
const glassNumber = $("#glassNumber");
const animationsToggle = $("#animationsToggle");
const wallpaperUpload = $("#wallpaperUpload");
const toast = $("#toast");

function getStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
    } catch (error) {
        return fallback;
    }
}

function setStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        return false;
    }
    return true;
}

function removeStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        return false;
    }
    return true;
}

function nextFrame(callback) {
    if ("requestAnimationFrame" in window) {
        window.requestAnimationFrame(callback);
    } else {
        window.setTimeout(callback, 16);
    }
}

let toastTimer = 0;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2500);
}

function createIcon(engine) {
    const icon = document.createElement("i");
    icon.className = engine.icon;
    icon.setAttribute("aria-hidden", "true");
    return icon;
}

function getFaviconUrl(engine) {
    return "https://www.google.com/s2/favicons?sz=64&domain=" + encodeURIComponent(engine.domain);
}

function fillLogo(container, engine) {
    container.replaceChildren();
    container.style.color = engine.color;
    container.dataset.engineId = engine.id;

    const image = document.createElement("img");
    image.src = getFaviconUrl(engine);
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    image.draggable = false;

    image.addEventListener("error", () => {
        if (container.dataset.engineId !== engine.id) {
            return;
        }
        container.replaceChildren(createIcon(engine));
    }, { once: true });

    container.appendChild(image);
}

const storedEngine = getStorage("selectedEngine", "google");
let activeEngineId = engines.some((engine) => engine.id === storedEngine) ? storedEngine : "google";

const storedTheme = getStorage("theme", "system");
let currentTheme = ["light", "dark", "system"].includes(storedTheme) ? storedTheme : "system";

let enginesRendered = false;
let currentWallpaper = "default";
let customWallpaperUrl = null;
let wallpaperToken = 0;
let wallpaperObserver = null;
let resizePending = false;
let previousFocus = null;
let recognition = null;

const enginePositions = new Map();
const themePositions = new Map();

function getActiveEngine() {
    return engines.find((engine) => engine.id === activeEngineId) || engines[0];
}

function setEngine(id) {
    const engine = engines.find((item) => item.id === id);

    if (!engine) {
        return;
    }

    activeEngineId = engine.id;
    currentEngineName.textContent = engine.name;
    fillLogo(currentEngineLogo, engine);
    setStorage("selectedEngine", engine.id);

    if (enginesRendered) {
        $$(".engine-button", enginesBox).forEach((button) => {
            button.setAttribute("aria-pressed", String(button.dataset.engineId === engine.id));
        });

        moveIndicator(engineIndicator, enginePositions, engine.id);
    }
}

function renderEngines() {
    if (enginesRendered) {
        return;
    }

    engines.forEach((engine) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "engine-button";
        button.dataset.engineId = engine.id;
        button.title = engine.name;
        button.setAttribute("aria-label", engine.name);
        button.setAttribute("aria-pressed", String(engine.id === activeEngineId));

        const logo = document.createElement("span");
        logo.className = "engine-logo";
        fillLogo(logo, engine);

        const name = document.createElement("span");
        name.className = "engine-name";
        name.textContent = engine.name;

        button.append(logo, name);
        button.addEventListener("click", () => setEngine(engine.id));
        enginesBox.appendChild(button);
    });

    enginesRendered = true;
}

function cachePositions(container, selector, keyAttribute, destination) {
    destination.clear();

    const containerRect = container.getBoundingClientRect();
    const originX = containerRect.left + container.clientLeft;
    const originY = containerRect.top + container.clientTop;

    $$(selector, container).forEach((element) => {
        const rect = element.getBoundingClientRect();

        destination.set(element.getAttribute(keyAttribute), {
            x: rect.left - originX,
            y: rect.top - originY,
            width: rect.width,
            height: rect.height
        });
    });
}

function moveIndicator(indicator, positions, id) {
    const position = positions.get(id);

    if (!position) {
        return;
    }

    indicator.style.width = position.width + "px";
    indicator.style.height = position.height + "px";
    indicator.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
    indicator.parentElement.classList.add("has-selection");
}

function refreshIndicatorPositions() {
    if (!settingsOverlay.classList.contains("is-open")) {
        return;
    }

    cachePositions(enginesBox, ".engine-button", "data-engine-id", enginePositions);
    cachePositions(themeControls, ".theme-button", "data-theme", themePositions);

    moveIndicator(engineIndicator, enginePositions, activeEngineId);
    moveIndicator(themeIndicator, themePositions, currentTheme);
}

function openSettings() {
    previousFocus = document.activeElement;

    renderEngines();

    settingsOverlay.classList.add("is-open");
    settingsOverlay.setAttribute("aria-hidden", "false");
    settingsOpen.classList.add("is-active");
    settingsOpen.setAttribute("aria-expanded", "true");
    document.body.classList.add("settings-open");

    nextFrame(refreshIndicatorPositions);
    loadWallpaperPreviews();
    settingsClose.focus({ preventScroll: true });
}

function closeSettings() {
    if (!settingsOverlay.classList.contains("is-open")) {
        return;
    }

    settingsOverlay.classList.remove("is-open");
    settingsOverlay.setAttribute("aria-hidden", "true");
    settingsOpen.classList.remove("is-active");
    settingsOpen.setAttribute("aria-expanded", "false");
    document.body.classList.remove("settings-open");

    if (previousFocus && typeof previousFocus.focus === "function") {
        previousFocus.focus({ preventScroll: true });
    }
}

settingsOpen.addEventListener("click", openSettings);
settingsClose.addEventListener("click", closeSettings);

settingsOverlay.addEventListener("click", (event) => {
    if (event.target === settingsOverlay) {
        closeSettings();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && settingsOverlay.classList.contains("is-open")) {
        closeSettings();
    }
});

settingsWindow.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") {
        return;
    }

    const focusable = $$('button:not(:disabled), input:not(:disabled):not([type="file"]), [tabindex="0"]', settingsWindow)
        .filter((element) => element.getClientRects().length > 0);

    if (!focusable.length) {
        return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
});

function runSearch(query) {
    const value = String(query || "").trim();

    if (!value) {
        searchInput.focus();
        return;
    }

    const engine = getActiveEngine();
    window.open(engine.url + encodeURIComponent(value), "_blank", "noopener,noreferrer");
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    runSearch(searchInput.value);
});

voiceButton.addEventListener("click", () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        showToast("Голосовой поиск не поддерживается этим браузером.");
        return;
    }

    if (recognition) {
        recognition.stop();
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = "ru-RU";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    voiceButton.classList.add("is-listening");
    voiceButton.setAttribute("aria-pressed", "true");
    showToast("Слушаю…");

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript.trim();
        searchInput.value = result;
        runSearch(result);
    };

    recognition.onerror = () => {
        finishRecognition();
        showToast("Не удалось распознать речь.");
    };

    recognition.onend = finishRecognition;

    try {
        recognition.start();
    } catch (error) {
        finishRecognition();
        showToast("Микрофон сейчас недоступен.");
    }
});

function finishRecognition() {
    voiceButton.classList.remove("is-listening");
    voiceButton.setAttribute("aria-pressed", "false");
    recognition = null;
}

function updateClock() {
    const now = new Date();

    $("#clock").textContent = now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
    });

    $("#date").textContent = now.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long"
    });
}

function updateGreeting(animate = true) {
    const hour = new Date().getHours();
    let greeting = "Добрый вечер";

    if (hour >= 5 && hour < 12) {
        greeting = "Доброе утро";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Добрый день";
    }

    const element = $("#greeting");
    element.replaceChildren();

    Array.from(greeting).forEach((character, index) => {
        const span = document.createElement("span");
        span.className = "greeting-char";
        span.textContent = character === " " ? "\u00a0" : character;

        if (animate) {
            span.style.animationDelay = `${index * 22}ms`;
        }

        element.appendChild(span);
    });
}

function applyTheme(theme) {
    currentTheme = theme;

    const isDark = theme === "dark" || (
        theme === "system" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    document.body.classList.toggle("dark-theme", isDark);

    $$(".theme-button", themeControls).forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.theme === theme));
    });

    moveIndicator(themeIndicator, themePositions, theme);
}

themeControls.addEventListener("click", (event) => {
    const button = event.target.closest(".theme-button");

    if (!button) {
        return;
    }

    const theme = button.dataset.theme;

    if (!["light", "dark", "system"].includes(theme)) {
        return;
    }

    setStorage("theme", theme);
    applyTheme(theme);
});

function updateSystemTheme() {
    if (currentTheme === "system") {
        applyTheme("system");
    }
}

if (window.matchMedia) {
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (colorScheme.addEventListener) {
        colorScheme.addEventListener("change", updateSystemTheme);
    } else if (colorScheme.addListener) {
        colorScheme.addListener(updateSystemTheme);
    }
}

function setGlassLevel(value, save = true) {
    const parsed = Number.parseInt(value, 10);
    const level = Number.isFinite(parsed) ? Math.max(0, Math.min(100, parsed)) : 72;

    glassRange.value = String(level);
    glassNumber.textContent = String(level);

    document.documentElement.style.setProperty("--glass-blur", `${(level * 0.19).toFixed(1)}px`);
    document.documentElement.style.setProperty("--glass-alpha", (0.22 + level * 0.0031).toFixed(3));

    document.body.classList.toggle("glass-off", level === 0);

    if (save) {
        setStorage("glassLevel", String(level));
    }
}

glassRange.addEventListener("input", () => setGlassLevel(glassRange.value));
glassRange.addEventListener("change", () => setGlassLevel(glassRange.value));

function applyAnimations(enabled, save = true) {
    document.body.classList.toggle("no-animations", !enabled);
    animationsToggle.checked = enabled;

    if (save) {
        setStorage("animationsEnabled", String(enabled));
    }
}

animationsToggle.addEventListener("change", () => {
    applyAnimations(animationsToggle.checked);
});

function updateWallpaperSelection() {
    $$(".wallpaper-card").forEach((button) => {
        const selected = button.dataset.wallpaper === currentWallpaper;
        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
}

function clearCustomWallpaper() {
    if (customWallpaperUrl) {
        URL.revokeObjectURL(customWallpaperUrl);
        customWallpaperUrl = null;
    }
}

function setWallpaper(id, save = true) {
    const wallpaper = wallpapers.find((item) => item.id === id);
    const token = ++wallpaperToken;

    clearCustomWallpaper();

    if (!wallpaper) {
        currentWallpaper = "default";
        background.style.backgroundImage = "";
        updateWallpaperSelection();
        removeStorage("wallpaper");
        return;
    }

    currentWallpaper = wallpaper.id;
    background.style.backgroundImage = "";
    updateWallpaperSelection();

    if (save) {
        setStorage("wallpaper", wallpaper.id);
    }

    const image = new Image();
    image.decoding = "async";

    image.onload = () => {
        if (token === wallpaperToken) {
            background.style.backgroundImage = `url("${wallpaper.url}")`;
        }
    };

    image.onerror = () => {
        if (token === wallpaperToken) {
            background.style.backgroundImage = "";
            showToast("Не удалось загрузить обои.");
        }
    };

    image.src = wallpaper.url;
}

function applyCustomWallpaper(file) {
    if (!file || !file.type.startsWith("image/")) {
        showToast("Выбери файл изображения.");
        return;
    }

    if (file.size > 8 * 1024 * 1024) {
        showToast("Размер изображения не должен превышать 8 МБ.");
        return;
    }

    wallpaperToken++;
    clearCustomWallpaper();

    customWallpaperUrl = URL.createObjectURL(file);
    currentWallpaper = "custom";
    background.style.backgroundImage = `url("${customWallpaperUrl}")`;

    updateWallpaperSelection();
    removeStorage("wallpaper");
    showToast("Обои установлены.");
}

wallpaperUpload.addEventListener("change", () => {
    applyCustomWallpaper(wallpaperUpload.files && wallpaperUpload.files[0]);
    wallpaperUpload.value = "";
});

$$(".wallpaper-card").forEach((button) => {
    button.addEventListener("click", () => setWallpaper(button.dataset.wallpaper));
});

function loadWallpaperPreviews() {
    const cards = $$(".wallpaper-card");

    const loadCard = (card) => {
        if (card.dataset.previewLoaded === "true") {
            return;
        }

        const wallpaper = wallpapers.find((item) => item.id === card.dataset.wallpaper);

        if (!wallpaper) {
            return;
        }

        card.dataset.previewLoaded = "true";
        card.style.backgroundImage = `url("${wallpaper.thumb}")`;
    };

    if ("IntersectionObserver" in window) {
        if (!wallpaperObserver) {
            wallpaperObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        loadCard(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: settingsWindow,
                rootMargin: "120px"
            });
        }

        cards.forEach((card) => {
            if (card.dataset.previewLoaded !== "true") {
                wallpaperObserver.observe(card);
            }
        });
    } else {
        cards.forEach(loadCard);
    }
}

$("#resetDefaults").addEventListener("click", () => {
    setEngine("google");
    setWallpaper("default");
    showToast("Поиск и обои сброшены.");
});

function scheduleIndicatorRefresh() {
    if (resizePending) {
        return;
    }

    resizePending = true;

    nextFrame(() => {
        resizePending = false;
        refreshIndicatorPositions();
    });
}

window.addEventListener("resize", scheduleIndicatorRefresh, { passive: true });
window.addEventListener("orientationchange", scheduleIndicatorRefresh, { passive: true });

function initialize() {
    const glassLevel = getStorage("glassLevel", "72");
    const animationsEnabled = getStorage("animationsEnabled", "true") !== "false";
    const savedWallpaper = getStorage("wallpaper", "default");

    setEngine(activeEngineId);
    applyTheme(currentTheme);
    setGlassLevel(glassLevel, false);
    applyAnimations(animationsEnabled, false);
    updateClock();
    updateGreeting(animationsEnabled);

    if (wallpapers.some((item) => item.id === savedWallpaper)) {
        setWallpaper(savedWallpaper, false);
    } else {
        setWallpaper("default", false);
    }

    window.setInterval(updateClock, 20000);
}

initialize();
