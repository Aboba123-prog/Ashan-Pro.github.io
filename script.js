(function () {
    "use strict";

    var engines = [
        {
            id: "google",
            name: "Google",
            logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
            icon: "fa-brands fa-google",
            url: "https://www.google.com/search?q="
        },
        {
            id: "yandex",
            name: "Yandex",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Yandex_Browser_logo.png?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original",
            icon: "fa-solid fa-magnifying-glass",
            url: "https://yandex.com/search/?text="
        },
        {
            id: "duckduckgo",
            name: "DuckDuckGo",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/90/The_DuckDuckGo_Duck.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
            icon: "fa-solid fa-user-secret",
            url: "https://duckduckgo.com/?q="
        },
        {
            id: "bing",
            name: "Bing",
            logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Bing_Fluent_Logo.svg",
            icon: "fa-solid fa-magnifying-glass",
            url: "https://www.bing.com/search?q="
        },
        {
            id: "yahoo",
            name: "Yahoo",
            logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/yahoo-square-icon.png",
            icon: "fa-brands fa-yahoo",
            url: "https://search.yahoo.com/search?p="
        },
        {
            id: "brave",
            name: "Brave Search",
            logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Brave_lion_icon.svg",
            icon: "fa-solid fa-shield-halved",
            url: "https://search.brave.com/search?q="
        },
        {
            id: "ecosia",
            name: "Ecosia",
            logo: "https://cdn.aptoide.com/imgs/2/0/a/20a9c070515af29e991485fada983b55_icon.png",
            icon: "fa-solid fa-leaf",
            url: "https://www.ecosia.org/search?q="
        },
        {
            id: "startpage",
            name: "Startpage",
            logo: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/startpage-dark.webp",
            icon: "fa-solid fa-user-shield",
            url: "https://www.startpage.com/sp/search?query="
        },
        {
            id: "qwant",
            name: "Qwant",
            logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Qwant-Icone-2022.svg",
            icon: "fa-solid fa-magnifying-glass",
            url: "https://www.qwant.com/?q="
        },
        {
            id: "mojeek",
            name: "Mojeek",
            logo: "https://www.mojeek.com/logos/icon_cc.svg",
            icon: "fa-solid fa-globe",
            url: "https://www.mojeek.com/search?q="
        },
        {
            id: "perplexity",
            name: "Perplexity",
            logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png",
            icon: "fa-solid fa-magnifying-glass",
            url: "https://www.perplexity.ai/search?q="
        },
        {
            id: "you",
            name: "You",
            logo: "https://cdn.aptoide.com/imgs/f/4/7/f47b58066771b82493f5a47c1ec340c9_icon.png",
            icon: "fa-solid fa-globe",
            url: "https://you.com/search?q="
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
    var wallpaperPreviewsScheduled = false;
    var closeTimer = null;
    var wallpaperToken = 0;
    var clockDate = "";

    function getEngine(id) {
        var i;

        for (i = 0; i < engines.length; i++) {
            if (engines[i].id === id) return engines[i];
        }

        return engines[0];
    }

    function getEngineIndex(id) {
        var i;

        for (i = 0; i < engines.length; i++) {
            if (engines[i].id === id) return i;
        }

        return 0;
    }

    function iconFor(engine) {
        var icon = document.createElement("i");
        icon.className = engine.icon;
        icon.setAttribute("aria-hidden", "true");
        return icon;
    }

    function makeEngineLogo(engine) {
        var holder = document.createElement("span");
        holder.className = "engine-logo";

        var fallback = iconFor(engine);
        holder.appendChild(fallback);

        if (!engine.logo) return holder;

        var image = new Image();
        image.alt = "";
        image.width = 24;
        image.height = 24;

        image.onload = function () {
            if (fallback.parentNode === holder) {
                holder.replaceChild(image, fallback);
            }
        };

        image.onerror = function () {
            image.onload = null;
            image.onerror = null;
        };

        image.src = engine.logo;

        return holder;
    }

    function renderEngines() {
        if (enginesRendered) {
            updateEngineButtons();
            return;
        }

        var fragment = document.createDocumentFragment();
        var i;

        for (i = 0; i < engines.length; i++) {
            (function (engine) {
                var button = document.createElement("button");

                button.type = "button";
                button.className = "engine-card engine-" + engine.id;
                button.title = engine.name;
                button.setAttribute("aria-label", engine.name);
                button.setAttribute("data-engine", engine.id);
                button.appendChild(makeEngineLogo(engine));

                button.onclick = function () {
                    setEngine(engine.id);
                };

                fragment.appendChild(button);
            })(engines[i]);
        }

        enginesBox.appendChild(fragment);
        enginesRendered = true;

        updateEngineButtons();
        moveEngineIndicator();
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
        if (!enginesRendered || !settingsOverlay.classList.contains("open")) {
            return;
        }

        var columns = 4;
        var gap = 7;
        var padding = 9;
        var cellHeight = 49;
        var index = getEngineIndex(currentEngine);

        var availableWidth = enginesBox.clientWidth - padding * 2;
        var cellWidth = (availableWidth - gap * (columns - 1)) / columns;

        var column = index % columns;
        var row = Math.floor(index / columns);

        var x = column * (cellWidth + gap);
        var y = row * (cellHeight + gap);

        engineIndicator.style.width = cellWidth + "px";
        engineIndicator.style.height = cellHeight + "px";
        engineIndicator.style.transform = "translate3d(" + x + "px," + y + "px,0)";
    }

    function moveLabelIndicator() {
        var wrapperWidth = labelWrapper.clientWidth;
        var textWidth = currentEngineName.offsetWidth;

        var targetWidth = Math.max(94, textWidth + 34);
        targetWidth = Math.min(wrapperWidth - 12, targetWidth);

        var scale = targetWidth / 100;

        labelIndicator.style.transform =
            "translate3d(-50%,0,0) scaleX(" + scale + ")";
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

        window.open(
            getEngine(currentEngine).url + encodeURIComponent(query),
            "_blank"
        );
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

        var today = now.getFullYear() + "-" +
            now.getMonth() + "-" +
            now.getDate();

        if (today !== clockDate) {
            clockDate = today;
            dateLabel.textContent = now.toLocaleDateString("ru-RU", {
                weekday: "short",
                day: "numeric",
                month: "short"
            });
        }
    }

    function moveThemeIndicator() {
        var themes = ["light", "dark", "system"];
        var index = themes.indexOf(currentTheme);

        if (index < 0) index = 2;

        var gap = 6;
        var padding = 7;
        var columns = 3;
        var cellWidth = (
            themeControls.clientWidth -
            padding * 2 -
            gap * (columns - 1)
        ) / columns;

        var x = index * (cellWidth + gap);

        themeIndicator.style.width = cellWidth + "px";
        themeIndicator.style.transform = "translate3d(" + x + "px,0,0)";
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

        if (meta) {
            meta.setAttribute("content", dark ? "#0d1120" : "#e3f0ff");
        }

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
        var blur = off ? 0 : 2 + Math.round(glassLevel * 0.13);
        var alpha = off ? .97 : .10 + glassLevel * .0021;
        var reflection = off ? 0 : Math.min(.62, glassLevel / 165);
        var shadow = off ? 0 : Math.min(.11, .02 + glassLevel * .0009);

        document.body.classList.toggle("glass-off", off);

        document.documentElement.style.setProperty("--glass-blur", blur + "px");
        document.documentElement.style.setProperty("--glass-alpha", alpha.toFixed(3));
        document.documentElement.style.setProperty("--glass-reflection", reflection.toFixed(3));
        document.documentElement.style.setProperty("--glass-shadow-alpha", shadow.toFixed(3));

        glassRange.value = glassLevel;
        glassNumber.value = glassLevel;
    }

    function updateGlass(value) {
        var number = parseInt(value, 10);

        if (isNaN(number)) return;

        glassLevel = Math.max(0, Math.min(100, number));

        storageSet("glassLevel", String(glassLevel));
        applyGlass();
    }

    function wallpaperURL(id, thumbnail) {
        var item = wallpapers[id];

        if (!item) return "";

        var ratio = Math.min(window.devicePixelRatio || 1, 1.5);
        var width = thumbnail
            ? 320
            : Math.max(480, Math.min(1440, Math.round(window.innerWidth * ratio)));
        var quality = thumbnail ? 40 : 58;

        return item.photo + "?auto=format&fit=crop&w=" + width + "&q=" + quality;
    }

    function loadWallpaperPreviews() {
        if (wallpaperPreviewsScheduled) return;

        wallpaperPreviewsScheduled = true;

        var buttons = document.querySelectorAll("[data-wallpaper]");
        var index = 0;

        function loadNext() {
            if (index >= buttons.length) return;

            var button = buttons[index++];
            var id = button.getAttribute("data-wallpaper");
            var url = wallpaperURL(id, true);

            if (url) {
                button.style.backgroundImage =
                    "linear-gradient(0deg,rgba(5,12,25,.48),transparent 75%),url('" +
                    url + "')";
            }

            if (index < buttons.length) {
                setTimeout(loadNext, 100);
            }
        }

        setTimeout(loadNext, animationsEnabled ? 250 : 0);
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
        var token = ++wallpaperToken;

        if (!item) {
            background.style.backgroundImage = "";
            background.style.backgroundPosition = "center";
            background.style.backgroundSize = "cover";
            background.style.backgroundRepeat = "no-repeat";
            updateWallpaperButtons();
            return;
        }

        var url = wallpaperURL(currentWallpaper, false);
        var image = new Image();

        image.onload = function () {
            if (token !== wallpaperToken) return;

            background.style.backgroundImage =
                "linear-gradient(135deg,rgba(6,14,28,.08),rgba(6,14,28,.12)),url('" +
                url + "')";

            background.style.backgroundPosition = item.position;
            background.style.backgroundSize = "cover";
            background.style.backgroundRepeat = "no-repeat";
        };

        image.onerror = function () {
            if (token !== wallpaperToken) return;

            background.style.backgroundImage =
                "linear-gradient(135deg,var(--bg1),var(--bg2))";
        };

        image.src = url;

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

        settingsOverlay.classList.add("open");
        settingsOverlay.setAttribute("aria-hidden", "false");
        settingsOpen.classList.add("is-open");

        requestFrame(function () {
            moveEngineIndicator();
            moveThemeIndicator();
        });

        loadWallpaperPreviews();
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
        }, 240);
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

    requestFrame(moveLabelIndicator);

    setInterval(updateClock, 1000);
})();
