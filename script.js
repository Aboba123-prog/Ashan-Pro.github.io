(function () {
    "use strict";

    var engines = [
        {
            id: "google",
            name: "Google",
            icon: "fa-brands fa-google",
            url: "https://www.google.com/search?q="
        },
        {
            id: "yandex",
            name: "Yandex",
            icon: "fa-brands fa-yandex",
            url: "https://yandex.com/search/?text="
        },
        {
            id: "duckduckgo",
            name: "DuckDuckGo",
            icon: "fa-solid fa-user-secret",
            url: "https://duckduckgo.com/?q="
        },
        {
            id: "bing",
            name: "Bing",
            icon: "fa-brands fa-bing",
            url: "https://www.bing.com/search?q="
        },
        {
            id: "yahoo",
            name: "Yahoo",
            icon: "fa-brands fa-yahoo",
            url: "https://search.yahoo.com/search?p="
        },
        {
            id: "brave",
            name: "Brave Search",
            icon: "fa-solid fa-shield-halved",
            url: "https://search.brave.com/search?q="
        },
        {
            id: "ecosia",
            name: "Ecosia",
            icon: "fa-solid fa-leaf",
            url: "https://www.ecosia.org/search?q="
        },
        {
            id: "startpage",
            name: "Startpage",
            icon: "fa-solid fa-user-shield",
            url: "https://www.startpage.com/sp/search?query="
        },
        {
            id: "qwant",
            name: "Qwant",
            icon: "fa-solid fa-magnifying-glass",
            url: "https://www.qwant.com/?q="
        },
        {
            id: "mojeek",
            name: "Mojeek",
            icon: "fa-solid fa-globe",
            url: "https://www.mojeek.com/search?q="
        }
    ];

    var wallpapers = {
        lake: {
            photo: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            position: "center 55%"
        },
        mountain: {
            photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            position: "center 50%"
        },
        forest: {
            photo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
            position: "center 50%"
        },
        coast: {
            photo: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
            position: "center 50%"
        },
        valley: {
            photo: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            position: "center 50%"
        },
        sunset: {
            photo: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            position: "center 55%"
        },
        waterfall: {
            photo: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
            position: "center 50%"
        },
        desert: {
            photo: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
            position: "center 50%"
        },
        snow: {
            photo: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            position: "center 50%"
        },
        garden: {
            photo: "https://images.unsplash.com/photo-1448375240586-882707db888b",
            position: "center 50%"
        }
    };

    function storageGet(key, fallback) {
        try {
            var value = localStorage.getItem(key);
            return value === null ? fallback : value;
        } catch (error) {
            return fallback;
        }
    }

    function storageSet(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
        }
    }

    function storageRemove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
        }
    }

    var currentEngine = storageGet("engine", "google");
    var currentTheme = storageGet("theme", "system");
    var customWallpaper = storageGet("customBackground", "");
    var currentWallpaper = storageGet(
        "wallpaper",
        customWallpaper ? "custom" : "default"
    );
    var glassLevel = parseInt(storageGet("glassLevel", "70"), 10);
    var animationsEnabled = storageGet("animationsEnabled", "true") !== "false";

    if (currentWallpaper === "blue") currentWallpaper = "lake";
    if (currentWallpaper === "purple") currentWallpaper = "sunset";
    if (currentWallpaper === "dark") currentWallpaper = "forest";

    var input = document.getElementById("searchInput");
    var clock = document.getElementById("clock");
    var dateLabel = document.getElementById("date");
    var background = document.getElementById("background");

    var settingsOverlay = document.getElementById("settingsOverlay");
    var settingsOpen = document.getElementById("settingsOpen");
    var enginesBox = document.getElementById("engines");
    var engineIndicator = document.getElementById("engineIndicator");

    var labelWrapper = document.getElementById("labelWrapper");
    var labelIndicator = document.getElementById("labelIndicator");
    var currentEngineName = document.getElementById("currentEngineName");

    var themeControls = document.getElementById("themeControls");
    var themeIndicator = document.getElementById("themeIndicator");

    var glassRange = document.getElementById("glassRange");
    var glassNumber = document.getElementById("glassNumber");
    var animationsToggle = document.getElementById("animationsToggle");

    var enginesRendered = false;
    var wallpaperPreviewsLoaded = false;
    var closeTimer = null;

    function getEngine(id) {
        var i;

        for (i = 0; i < engines.length; i++) {
            if (engines[i].id === id) return engines[i];
        }

        return engines[0];
    }

    function iconFor(engine) {
        var icon = document.createElement("i");
        icon.className = engine.icon;
        icon.setAttribute("aria-hidden", "true");
        return icon;
    }

    function renderEngines() {
        if (enginesRendered) {
            updateEngineButtons();
            return;
        }

        var i;

        for (i = 0; i < engines.length; i++) {
            (function (engine) {
                var button = document.createElement("button");

                button.type = "button";
                button.className = "engine-card engine-" + engine.id;
                button.title = engine.name;
                button.setAttribute("aria-label", engine.name);
                button.setAttribute("data-engine", engine.id);
                button.appendChild(iconFor(engine));

                button.onclick = function () {
                    setEngine(engine.id);
                };

                enginesBox.appendChild(button);
            })(engines[i]);
        }

        enginesRendered = true;
        updateEngineButtons();
        setTimeout(moveEngineIndicator, 40);
    }

    function updateEngineButtons() {
        var buttons = enginesBox.querySelectorAll(".engine-card");
        var i;

        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle(
                "active",
                buttons[i].getAttribute("data-engine") === currentEngine
            );
        }
    }

    function moveEngineIndicator() {
        if (!enginesRendered || !settingsOverlay.classList.contains("open")) return;

        var active = enginesBox.querySelector(
            '[data-engine="' + currentEngine + '"]'
        );

        if (!active) return;

        var activeRect = active.getBoundingClientRect();
        var parentRect = enginesBox.getBoundingClientRect();

        var x = activeRect.left - parentRect.left - enginesBox.clientLeft;
        var y = activeRect.top - parentRect.top - enginesBox.clientTop;

        engineIndicator.style.width = activeRect.width + "px";
        engineIndicator.style.height = activeRect.height + "px";
        engineIndicator.style.transform = "translate(" + x + "px," + y + "px)";
    }

    function moveLabelIndicator() {
        var wrapperWidth = labelWrapper.clientWidth;
        var textWidth = currentEngineName.getBoundingClientRect().width;
        var width = Math.min(wrapperWidth, Math.max(96, textWidth + 36));
        var x = (wrapperWidth - width) / 2;

        labelIndicator.style.width = width + "px";
        labelIndicator.style.transform = "translateX(" + x + "px)";
    }

    function moveThemeIndicator() {
        var active = themeControls.querySelector(
            '[data-theme="' + currentTheme + '"]'
        );

        if (!active) return;

        var activeRect = active.getBoundingClientRect();
        var parentRect = themeControls.getBoundingClientRect();

        var x = activeRect.left - parentRect.left -
            themeControls.clientLeft - themeIndicator.offsetLeft;

        themeIndicator.style.width = activeRect.width + "px";
        themeIndicator.style.transform = "translateX(" + x + "px)";
    }

    function requestFrame(callback) {
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(callback);
        } else {
            setTimeout(callback, 16);
        }
    }

    function setEngine(id) {
        currentEngine = getEngine(id).id;
        currentEngineName.textContent = getEngine(currentEngine).name;

        storageSet("engine", currentEngine);
        updateEngineButtons();

        requestFrame(function () {
            moveLabelIndicator();
            moveEngineIndicator();
        });
    }

    function search() {
        var query = input.value.trim();

        if (!query) {
            input.focus();
            return;
        }

        var engine = getEngine(currentEngine);
        window.open(engine.url + encodeURIComponent(query), "_blank");
    }

    function startVoiceSearch() {
        var Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!Recognition) {
            window.alert("Этот браузер не поддерживает голосовой ввод.");
            return;
        }

        var recognition = new Recognition();

        recognition.lang = "ru-RU";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        input.placeholder = "Слушаю...";

        recognition.onresult = function (event) {
            if (event.results && event.results[0] && event.results[0][0]) {
                input.value = event.results[0][0].transcript;
                search();
            }
        };

        recognition.onerror = function () {
            input.placeholder = "Введите запрос...";
        };

        recognition.onend = function () {
            input.placeholder = "Введите запрос...";
        };

        recognition.start();
    }

    function updateClock() {
        var now = new Date();

        clock.textContent = now.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        dateLabel.textContent = now.toLocaleDateString("ru-RU", {
            weekday: "short",
            day: "numeric",
            month: "short"
        });
    }

    function applyTheme() {
        var dark = currentTheme === "dark";

        if (
            currentTheme === "system" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            dark = true;
        }

        document.body.classList.toggle("dark", dark);

        var meta = document.querySelector('meta[name="theme-color"]');

        if (meta) meta.setAttribute("content", dark ? "#0d1120" : "#e3f0ff");

        var buttons = document.querySelectorAll("[data-theme]");
        var i;

        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle(
                "active",
                buttons[i].getAttribute("data-theme") === currentTheme
            );
        }

        moveThemeIndicator();
    }

    function applyGlass() {
        var off = glassLevel === 0;
        var blur = off ? 0 : 3 + Math.round(glassLevel * 0.18);
        var alpha = off ? .97 : .10 + glassLevel * .0021;
        var reflection = off ? 0 : Math.min(.65, glassLevel / 160);
        var shadow = off ? 0 : Math.min(.12, .025 + glassLevel * .0009);

        document.body.classList.toggle("glass-off", off);

        document.documentElement.style.setProperty("--glass-blur", blur + "px");
        document.documentElement.style.setProperty("--glass-alpha", alpha.toFixed(3));
        document.documentElement.style.setProperty("--glass-reflection", reflection.toFixed(3));
        document.documentElement.style.setProperty("--glass-shadow-alpha", shadow.toFixed(3));

        glassRange.value = glassLevel;
        glassNumber.value = glassLevel;
    }

    function normalizeGlass(value) {
        var number = parseInt(value, 10);

        if (isNaN(number)) number = glassLevel;

        return Math.max(0, Math.min(100, number));
    }

    function updateGlass(value) {
        glassLevel = normalizeGlass(value);
        storageSet("glassLevel", String(glassLevel));
        applyGlass();
    }

    function wallpaperURL(id, thumbnail) {
        var item = wallpapers[id];

        if (!item) return "";

        var width = thumbnail ? 360 : 1440;
        var quality = thumbnail ? 45 : 65;

        return item.photo + "?auto=format&fit=crop&w=" + width + "&q=" + quality;
    }

    function loadWallpaperPreviews() {
        if (wallpaperPreviewsLoaded) return;

        var buttons = document.querySelectorAll("[data-wallpaper]");
        var i;

        for (i = 0; i < buttons.length; i++) {
            var id = buttons[i].getAttribute("data-wallpaper");
            var url = wallpaperURL(id, true);

            if (url) {
                buttons[i].style.backgroundImage =
                    "linear-gradient(0deg,rgba(5,12,25,.48),transparent 75%),url('" +
                    url + "')";
            }
        }

        wallpaperPreviewsLoaded = true;
    }

    function updateWallpaperButtons() {
        var buttons = document.querySelectorAll("[data-wallpaper]");
        var i;

        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle(
                "active",
                buttons[i].getAttribute("data-wallpaper") === currentWallpaper
            );
        }
    }

    function applyWallpaper() {
        if (currentWallpaper === "custom" && customWallpaper) {
            background.style.backgroundImage = 'url("' + customWallpaper + '")';
            background.style.backgroundPosition = "center";
            background.style.backgroundSize = "cover";
            background.style.backgroundRepeat = "no-repeat";
            updateWallpaperButtons();
            return;
        }

        var item = wallpapers[currentWallpaper];

        if (item) {
            background.style.backgroundImage =
                "linear-gradient(135deg,rgba(6,14,28,.08),rgba(6,14,28,.12)),url('" +
                wallpaperURL(currentWallpaper, false) + "')";

            background.style.backgroundPosition = item.position;
            background.style.backgroundSize = "cover";
            background.style.backgroundRepeat = "no-repeat";
        } else {
            background.style.backgroundImage = "";
            background.style.backgroundPosition = "center";
            background.style.backgroundSize = "cover";
            background.style.backgroundRepeat = "no-repeat";
        }

        updateWallpaperButtons();
    }

    function applyAnimations() {
        document.body.classList.toggle("no-animations", !animationsEnabled);
        animationsToggle.checked = animationsEnabled;

        storageSet("animationsEnabled", animationsEnabled ? "true" : "false");
    }

    function openSettings() {
        if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
        }

        settingsOverlay.classList.remove("closing");
        renderEngines();
        loadWallpaperPreviews();

        settingsOverlay.classList.add("open");
        settingsOverlay.setAttribute("aria-hidden", "false");
        settingsOpen.classList.add("is-open");

        requestFrame(function () {
            moveEngineIndicator();
            moveThemeIndicator();
        });
    }

    function closeSettings() {
        if (!settingsOverlay.classList.contains("open")) return;

        settingsOverlay.setAttribute("aria-hidden", "true");
        settingsOpen.classList.remove("is-open");

        if (!animationsEnabled) {
            settingsOverlay.classList.remove("open", "closing");
            return;
        }

        settingsOverlay.classList.remove("open");
        settingsOverlay.classList.add("closing");

        if (closeTimer) clearTimeout(closeTimer);

        closeTimer = setTimeout(function () {
            settingsOverlay.classList.remove("closing");
            closeTimer = null;
        }, 300);
    }

    document.getElementById("searchButton").onclick = search;
    document.getElementById("voiceButton").onclick = startVoiceSearch;
    settingsOpen.onclick = openSettings;
    document.getElementById("settingsClose").onclick = closeSettings;

    settingsOverlay.onclick = function (event) {
        if (event.target === settingsOverlay) closeSettings();
    };

    input.onkeydown = function (event) {
        if (event.key === "Enter") search();
    };

    var themeButtons = document.querySelectorAll("[data-theme]");
    var i;

    for (i = 0; i < themeButtons.length; i++) {
        themeButtons[i].onclick = function () {
            currentTheme = this.getAttribute("data-theme");
            storageSet("theme", currentTheme);
            applyTheme();
        };
    }

    glassRange.oninput = function () {
        updateGlass(this.value);
    };

    glassNumber.onchange = function () {
        updateGlass(this.value);
    };

    glassNumber.onkeydown = function (event) {
        if (event.key === "Enter") {
            updateGlass(this.value);
            this.blur();
        }
    };

    animationsToggle.onchange = function () {
        animationsEnabled = this.checked;
        applyAnimations();
    };

    var wallpaperButtons = document.querySelectorAll("[data-wallpaper]");

    for (i = 0; i < wallpaperButtons.length; i++) {
        wallpaperButtons[i].onclick = function () {
            currentWallpaper = this.getAttribute("data-wallpaper");
            customWallpaper = "";

            storageSet("wallpaper", currentWallpaper);
            storageRemove("customBackground");

            applyWallpaper();
        };
    }

    document.getElementById("uploadWallpaper").onclick = function () {
        document.getElementById("wallpaperInput").click();
    };

    document.getElementById("wallpaperInput").onchange = function () {
        var file = this.files && this.files[0];

        if (!file) return;

        if (file.size > 8 * 1024 * 1024) {
            window.alert("Выберите изображение размером до 8 МБ.");
            this.value = "";
            return;
        }

        var reader = new FileReader();

        reader.onload = function (event) {
            customWallpaper = event.target.result;
            currentWallpaper = "custom";

            storageSet("customBackground", customWallpaper);
            storageSet("wallpaper", "custom");

            applyWallpaper();
        };

        reader.readAsDataURL(file);
    };

    document.getElementById("resetDefaults").onclick = function () {
        currentWallpaper = "default";
        customWallpaper = "";

        storageSet("wallpaper", "default");
        storageRemove("customBackground");

        setEngine("google");
        applyWallpaper();
    };

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeSettings();

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {
            event.preventDefault();
            input.focus();
        }
    });

    window.addEventListener("resize", function () {
        moveLabelIndicator();

        if (settingsOverlay.classList.contains("open")) {
            moveEngineIndicator();
            moveThemeIndicator();
        }
    });

    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            moveLabelIndicator();

            if (settingsOverlay.classList.contains("open")) {
                moveEngineIndicator();
                moveThemeIndicator();
            }
        }, 150);
    });

    if (window.matchMedia) {
        var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

        var updateSystemTheme = function () {
            if (currentTheme === "system") applyTheme();
        };

        if (systemTheme.addEventListener) {
            systemTheme.addEventListener("change", updateSystemTheme);
        } else if (systemTheme.addListener) {
            systemTheme.addListener(updateSystemTheme);
        }
    }

    currentEngine = getEngine(currentEngine).id;

    if (!wallpapers[currentWallpaper] && currentWallpaper !== "custom") {
        currentWallpaper = "default";
    }

    if (isNaN(glassLevel) || glassLevel < 0 || glassLevel > 100) {
        glassLevel = 70;
    }

    currentEngineName.textContent = getEngine(currentEngine).name;

    applyAnimations();
    applyTheme();
    applyGlass();
    applyWallpaper();
    updateClock();

    setTimeout(moveLabelIndicator, 50);

    setInterval(updateClock, 1000);
})();
