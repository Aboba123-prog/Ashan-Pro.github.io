(function () {
    "use strict";

    var STORAGE_PREFIX = "ashanPro27_";
    var DEFAULT_ENGINE = "google";
    var DEFAULT_THEME = "light";
    var DEFAULT_GLASS_LEVEL = 75;
    var MIN_GLASS_LEVEL = 0;
    var MAX_GLASS_LEVEL = 100;

    var engines = [
        {
            id: "google",
            name: "Google",
            logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            domain: "google.com",
            color: "#4285f4",
            url: "https://www.google.com/search?q="
        },
        {
            id: "yandex",
            name: "Yandex",
            logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Yandex_Browser_logo.svg/960px-Yandex_Browser_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20171118053753",
            domain: "yandex.com",
            color: "#fc3f1d",
            url: "https://yandex.com/search/?text="
        },
        {
            id: "duckduckgo",
            name: "DuckDuckGo",
            logo: "https://upload.wikimedia.org/wikipedia/en/9/90/The_DuckDuckGo_Duck.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
            domain: "duckduckgo.com",
            color: "#de5833",
            url: "https://duckduckgo.com/?q="
        },
        {
            id: "bing",
            name: "Bing",
            logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Bing_Logo.svg/3840px-Bing_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
            domain: "bing.com",
            color: "#008373",
            url: "https://www.bing.com/search?q="
        },
        {
            id: "yahoo",
            name: "Yahoo",
            logo: "https://images.seeklogo.com/logo-png/50/2/yahoo-logo-png_seeklogo-503090.png",
            domain: "search.yahoo.com",
            color: "#6001d2",
            url: "https://search.yahoo.com/search?p="
        },
        {
            id: "brave",
            name: "Brave",
            logo: "https://www.google.com/s2/favicons?domain=search.brave.com&sz=64",
            domain: "search.brave.com",
            color: "#fb542b",
            url: "https://search.brave.com/search?q="
        },
        {
            id: "ecosia",
            name: "Ecosia",
            logo: "https://www.google.com/s2/favicons?domain=ecosia.org&sz=64",
            domain: "ecosia.org",
            color: "#438b45",
            url: "https://www.ecosia.org/search?q="
        },
        {
            id: "startpage",
            name: "Startpage",
            logo: "https://www.google.com/s2/favicons?domain=startpage.com&sz=64",
            domain: "startpage.com",
            color: "#5374d8",
            url: "https://www.startpage.com/sp/search?query="
        },
        {
            id: "qwant",
            name: "Qwant",
            logo: "https://www.google.com/s2/favicons?domain=qwant.com&sz=64",
            domain: "qwant.com",
            color: "#5c3bdb",
            url: "https://www.qwant.com/?q="
        },
        {
            id: "mojeek",
            name: "Mojeek",
            logo: "https://www.google.com/s2/favicons?domain=mojeek.com&sz=64",
            domain: "mojeek.com",
            color: "#fa6a36",
            url: "https://www.mojeek.com/search?q="
        },
        {
            id: "you",
            name: "You.com AI",
            logo: "https://www.google.com/s2/favicons?domain=you.com&sz=64",
            domain: "you.com",
            color: "#6558d3",
            url: "https://you.com/search?q="
        },
        {
            id: "perplexity",
            name: "Perplexity",
            logo: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64",
            domain: "perplexity.ai",
            color: "#20808d",
            url: "https://www.perplexity.ai/search?q="
        }
    ];

    var wallpapers = [
        {
            id: "lake",
            name: "Озеро",
            thumb: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=85"
        },
        {
            id: "mountain",
            name: "Горы",
            thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85"
        },
        {
            id: "forest",
            name: "Лес",
            thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85"
        },
        {
            id: "coast",
            name: "Побережье",
            thumb: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&q=85"
        },
        {
            id: "valley",
            name: "Долина",
            thumb: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&q=85"
        },
        {
            id: "sunset",
            name: "Закат",
            thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85"
        },
        {
            id: "waterfall",
            name: "Водопад",
            thumb: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=85"
        },
        {
            id: "desert",
            name: "Пустыня",
            thumb: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1920&q=85"
        },
        {
            id: "snow",
            name: "Снег",
            thumb: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&w=1920&q=85"
        },
        {
            id: "garden",
            name: "Природа",
            thumb: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=480&q=70",
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=85"
        }
    ];

    var elements = {};
    var activeEngine = DEFAULT_ENGINE;
    var activeTheme = DEFAULT_THEME;
    var activeWallpaper = "default";
    var glassLevel = DEFAULT_GLASS_LEVEL;
    var animationsEnabled = true;
    var customWallpaperData = "";
    var speechRecognition = null;
    var toastTimer = null;
    var resizeTimer = null;
    var assetObserver = null;
    var fallbackQueue = [];
    var fallbackQueueRunning = false;
    var greetingText = "";
    var lastClockText = "";
    var lastDateText = "";

    var months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    function getElement(selector) {
        return document.querySelector(selector);
    }

    function getAll(selector, parent) {
        return (parent || document).querySelectorAll(selector);
    }

    function addClass(element, className) {
        if (!element) {
            return;
        }

        if (element.classList) {
            element.classList.add(className);
        } else if ((" " + element.className + " ").indexOf(" " + className + " ") === -1) {
            element.className += " " + className;
        }
    }

    function removeClass(element, className) {
        if (!element) {
            return;
        }

        if (element.classList) {
            element.classList.remove(className);
        } else {
            element.className = (" " + element.className + " ")
                .replace(" " + className + " ", " ")
                .replace(/^\s+|\s+$/g, "");
        }
    }

    function setClass(element, className, enabled) {
        if (enabled) {
            addClass(element, className);
        } else {
            removeClass(element, className);
        }
    }

    function setStyleVariable(name, value) {
        if (document.documentElement.style.setProperty) {
            document.documentElement.style.setProperty(name, value);
        }
    }

    function getSaved(key) {
        try {
            return window.localStorage.getItem(STORAGE_PREFIX + key);
        } catch (error) {
            return null;
        }
    }

    function saveValue(key, value) {
        try {
            window.localStorage.setItem(STORAGE_PREFIX + key, value);
            return true;
        } catch (error) {
            return false;
        }
    }

    function removeSaved(key) {
        try {
            window.localStorage.removeItem(STORAGE_PREFIX + key);
        } catch (error) {
            return false;
        }

        return true;
    }

    function findEngine(id) {
        var i;

        for (i = 0; i < engines.length; i++) {
            if (engines[i].id === id) {
                return engines[i];
            }
        }

        return engines[0];
    }

    function findWallpaper(id) {
        var i;

        for (i = 0; i < wallpapers.length; i++) {
            if (wallpapers[i].id === id) {
                return wallpapers[i];
            }
        }

        return null;
    }

    function setSelected(element, selected) {
        setClass(element, "active", selected);
        setClass(element, "is-active", selected);
        setClass(element, "is-selected", selected);

        if (element) {
            element.setAttribute("aria-pressed", selected ? "true" : "false");
        }
    }

    function createEngineButtons() {
        var container = elements.engines;
        var indicator;
        var oldButtons;
        var i;

        if (!container) {
            return;
        }

        indicator = getElement(".engine-indicator", container);

        if (!indicator) {
            indicator = document.createElement("span");
            indicator.className = "engine-indicator";
            indicator.setAttribute("aria-hidden", "true");
            container.insertBefore(indicator, container.firstChild);
        }

        indicator.style.pointerEvents = "none";

        oldButtons = getAll("button[data-engine], .engine-button, .engine-option", container);

        for (i = oldButtons.length - 1; i >= 0; i--) {
            if (oldButtons[i] !== indicator && oldButtons[i].parentNode) {
                oldButtons[i].parentNode.removeChild(oldButtons[i]);
            }
        }

        for (i = 0; i < engines.length; i++) {
            createEngineButton(engines[i], container);
        }

        if (window.getComputedStyle && window.getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    }

    function createEngineButton(engine, container) {
        var button = document.createElement("button");
        var logo = document.createElement("span");
        var label = document.createElement("span");

        button.type = "button";
        button.className = "engine-button engine-option";
        button.setAttribute("data-engine", engine.id);
        button.setAttribute("aria-label", engine.name);
        button.setAttribute("title", engine.name);

        logo.className = "engine-logo";
        logo.textContent = "";
        logo.setAttribute("data-domain", engine.domain);
        logo.style.backgroundColor = engine.color;
        logo.style.color = "#ffffff";

        label.className = "engine-label engine-name";
        label.textContent = engine.name;

        button.appendChild(logo);
        button.appendChild(label);

        button.addEventListener("click", function () {
            setEngine(engine.id, true);
        });

        container.appendChild(button);
    }

    function getEngineButtons() {
        if (!elements.engines) {
            return [];
        }

        return getAll("button[data-engine]", elements.engines);
    }

    function setEngine(id, save) {
        var engine = findEngine(id);
        var buttons = getEngineButtons();
        var i;

        activeEngine = engine.id;

        if (elements.currentEngineName) {
            elements.currentEngineName.textContent = engine.name;
        }

        if (elements.searchInput) {
            elements.searchInput.setAttribute("aria-label", "Поиск через " + engine.name);
            elements.searchInput.setAttribute("placeholder", "Поиск в " + engine.name);
        }

        for (i = 0; i < buttons.length; i++) {
            setSelected(
                buttons[i],
                buttons[i].getAttribute("data-engine") === activeEngine
            );
        }

        if (save !== false) {
            saveValue("engine", activeEngine);
        }

        updateIndicators();

        return engine;
    }

    function getSearchUrl(query) {
        var engine = findEngine(activeEngine);

        return engine.url + encodeURIComponent(query);
    }

    function submitSearch(event) {
        var query;

        if (event && event.preventDefault) {
            event.preventDefault();
        }

        if (!elements.searchInput) {
            return;
        }

        query = elements.searchInput.value.replace(/^\s+|\s+$/g, "");

        if (!query) {
            elements.searchInput.focus();
            return;
        }

        window.location.href = getSearchUrl(query);
    }

    function initializeSearch() {
        if (elements.searchForm) {
            elements.searchForm.addEventListener("submit", submitSearch);
        }

        if (elements.searchInput) {
            elements.searchInput.addEventListener("keydown", function (event) {
                event = event || window.event;

                if (event.key === "Enter" || event.keyCode === 13) {
                    submitSearch(event);
                }
            });
        }
    }

    function showToast(message) {
        var toast = elements.toast;

        if (!toast) {
            toast = document.createElement("div");
            toast.id = "ashanToast";
            toast.className = "toast";
            toast.setAttribute("role", "status");
            toast.setAttribute("aria-live", "polite");
            document.body.appendChild(toast);
            elements.toast = toast;
        }

        toast.textContent = message;

        addClass(toast, "is-visible");
        addClass(toast, "visible");

        if (toastTimer) {
            window.clearTimeout(toastTimer);
        }

        toastTimer = window.setTimeout(function () {
            removeClass(toast, "is-visible");
            removeClass(toast, "visible");
        }, 2500);
    }

    function openSettings() {
        if (!elements.settingsOverlay) {
            return;
        }

        addClass(elements.settingsOverlay, "is-open");
        addClass(elements.settingsOverlay, "active");
        addClass(document.body, "settings-open");

        if (elements.settingsOverlay.setAttribute) {
            elements.settingsOverlay.setAttribute("aria-hidden", "false");
        }

        if (elements.settingsToggle) {
            addClass(elements.settingsToggle, "is-active");
            elements.settingsToggle.setAttribute("aria-expanded", "true");
        }

        window.setTimeout(function () {
            updateIndicators();
            loadVisibleAssets();
        }, 80);
    }

    function closeSettings() {
        if (!elements.settingsOverlay) {
            return;
        }

        removeClass(elements.settingsOverlay, "is-open");
        removeClass(elements.settingsOverlay, "active");
        removeClass(document.body, "settings-open");

        elements.settingsOverlay.setAttribute("aria-hidden", "true");

        if (elements.settingsToggle) {
            removeClass(elements.settingsToggle, "is-active");
            elements.settingsToggle.setAttribute("aria-expanded", "false");
        }
    }

    function toggleSettings() {
        if (
            elements.settingsOverlay &&
            (
                elements.settingsOverlay.classList.contains("is-open") ||
                elements.settingsOverlay.classList.contains("active")
            )
        ) {
            closeSettings();
        } else {
            openSettings();
        }
    }

    function initializeSettings() {
        if (elements.settingsToggle) {
            elements.settingsToggle.addEventListener("click", function (event) {
                event.preventDefault();
                toggleSettings();
            });
        }

        if (elements.closeSettings) {
            elements.closeSettings.addEventListener("click", function (event) {
                event.preventDefault();
                closeSettings();
            });
        }

        if (elements.settingsOverlay) {
            elements.settingsOverlay.addEventListener("click", function (event) {
                if (event.target === elements.settingsOverlay) {
                    closeSettings();
                }
            });
        }

        document.addEventListener("keydown", function (event) {
            event = event || window.event;

            if (event.key === "Escape" || event.keyCode === 27) {
                closeSettings();
            }
        });
    }

    function moveIndicator(indicator, target, container) {
        var targetRect;
        var containerRect;
        var x;
        var y;

        if (!indicator || !target || !container) {
            return;
        }

        targetRect = target.getBoundingClientRect();
        containerRect = container.getBoundingClientRect();

        if (!targetRect.width || !targetRect.height) {
            return;
        }

        x = targetRect.left - containerRect.left + container.scrollLeft;
        y = targetRect.top - containerRect.top + container.scrollTop;

        indicator.style.width = targetRect.width + "px";
        indicator.style.height = targetRect.height + "px";
        indicator.style.left = "0px";
        indicator.style.top = "0px";
        indicator.style.transform = "translate3d(" + x + "px," + y + "px,0)";
        indicator.style.webkitTransform = "translate3d(" + x + "px," + y + "px,0)";
        indicator.style.opacity = "1";
    }

    function updateIndicators() {
        var engineIndicator;
        var engineButtons;
        var themeIndicator;
        var themeButtons;
        var selectedButton = null;
        var selectedTheme = null;
        var i;

        if (elements.engines) {
            engineIndicator = getElement(".engine-indicator", elements.engines);
            engineButtons = getEngineButtons();

            for (i = 0; i < engineButtons.length; i++) {
                if (engineButtons[i].getAttribute("data-engine") === activeEngine) {
                    selectedButton = engineButtons[i];
                    break;
                }
            }

            if (selectedButton) {
                moveIndicator(engineIndicator, selectedButton, elements.engines);
            }
        }

        if (elements.themeControls) {
            themeIndicator = getElement(".theme-indicator", elements.themeControls);
            themeButtons = getAll(".theme-button[data-theme]", elements.themeControls);

            for (i = 0; i < themeButtons.length; i++) {
                if (themeButtons[i].getAttribute("data-theme") === activeTheme) {
                    selectedTheme = themeButtons[i];
                    break;
                }
            }

            if (selectedTheme) {
                moveIndicator(themeIndicator, selectedTheme, elements.themeControls);
            }
        }
    }

    function initializeIndicators() {
        var themeButtons;
        var i;

        if (!elements.themeControls) {
            return;
        }

        themeButtons = getAll(".theme-button[data-theme]", elements.themeControls);

        for (i = 0; i < themeButtons.length; i++) {
            themeButtons[i].addEventListener("click", function () {
                setTheme(this.getAttribute("data-theme"), true);
            });
        }
    }

    function isSystemDark() {
        if (!window.matchMedia) {
            return false;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function setTheme(theme, save) {
        var themeButtons;
        var i;
        var dark;

        if (theme === "white") {
            theme = "light";
        }

        if (theme === "black") {
            theme = "dark";
        }

        if (theme !== "light" && theme !== "dark" && theme !== "system") {
            theme = DEFAULT_THEME;
        }

        activeTheme = theme;
        dark = theme === "dark" || (theme === "system" && isSystemDark());

        setClass(document.body, "dark-theme", dark);
        setClass(document.body, "light-theme", !dark);
        setClass(document.body, "system-theme", theme === "system");

        themeButtons = getAll(".theme-button[data-theme]");

        for (i = 0; i < themeButtons.length; i++) {
            setSelected(
                themeButtons[i],
                themeButtons[i].getAttribute("data-theme") === activeTheme
            );
        }

        if (save !== false) {
            saveValue("theme", activeTheme);
        }

        updateIndicators();
    }

    function initializeSystemThemeListener() {
        var media;

        if (!window.matchMedia) {
            return;
        }

        media = window.matchMedia("(prefers-color-scheme: dark)");

        if (media.addEventListener) {
            media.addEventListener("change", function () {
                if (activeTheme === "system") {
                    setTheme("system", false);
                }
            });
        } else if (media.addListener) {
            media.addListener(function () {
                if (activeTheme === "system") {
                    setTheme("system", false);
                }
            });
        }
    }

    function normalizeGlassLevel(value) {
        var level = parseInt(value, 10);

        if (isNaN(level)) {
            level = DEFAULT_GLASS_LEVEL;
        }

        if (level < MIN_GLASS_LEVEL) {
            level = MIN_GLASS_LEVEL;
        }

        if (level > MAX_GLASS_LEVEL) {
            level = MAX_GLASS_LEVEL;
        }

        return level;
    }

    function applyGlassLevel(value, save) {
        var level = normalizeGlassLevel(value);
        var alpha;
        var blur;

        glassLevel = level;
        alpha = 0.12 + (level / 100) * 0.42;
        blur = Math.min(6, level * 0.06);

        setStyleVariable("--glass-alpha", alpha.toFixed(3));
        setStyleVariable("--glass-blur", blur.toFixed(2) + "px");

        setClass(document.body, "glass-off", level === 0);
        setClass(document.body, "glass-lite", level > 0 && level <= 25);

        if (elements.glassNumber && String(elements.glassNumber.value) !== String(level)) {
            elements.glassNumber.value = level;
        }

        if (elements.glassRange && String(elements.glassRange.value) !== String(level)) {
            elements.glassRange.value = level;
        }

        if (save !== false) {
            saveValue("glassLevel", String(level));
        }
    }

    function handleGlassInput(value) {
        addClass(document.body, "glass-adjusting");
        applyGlassLevel(value, true);
    }

    function finishGlassAdjustment() {
        removeClass(document.body, "glass-adjusting");
        applyGlassLevel(glassLevel, true);
    }

    function initializeGlassControls() {
        if (elements.glassNumber) {
            elements.glassNumber.addEventListener("input", function () {
                handleGlassInput(this.value);
            });

            elements.glassNumber.addEventListener("change", finishGlassAdjustment);
            elements.glassNumber.addEventListener("blur", finishGlassAdjustment);
        }

        if (elements.glassRange) {
            elements.glassRange.addEventListener("input", function () {
                handleGlassInput(this.value);
            });

            elements.glassRange.addEventListener("change", finishGlassAdjustment);
            elements.glassRange.addEventListener("blur", finishGlassAdjustment);
        }
    }

    function createWallpaperCard(wallpaper) {
        var button = document.createElement("button");
        var label = document.createElement("span");

        button.type = "button";
        button.className = "wallpaper-card";
        button.setAttribute("data-wallpaper", wallpaper.id);
        button.setAttribute("aria-label", wallpaper.name);
        button.setAttribute("title", wallpaper.name);
        button.style.backgroundImage = "none";

        label.className = "wallpaper-label wallpaper-name";
        label.textContent = wallpaper.name;

        button.appendChild(label);

        button.addEventListener("click", function () {
            setWallpaper(wallpaper.id, true);
        });

        return button;
    }

    function createCustomWallpaperCard() {
        var button;
        var label;

        if (!elements.wallpapers || !customWallpaperData) {
            return null;
        }

        button = document.createElement("button");
        button.type = "button";
        button.className = "wallpaper-card custom-wallpaper";
        button.setAttribute("data-wallpaper", "custom");
        button.setAttribute("aria-label", "Мои обои");
        button.setAttribute("title", "Мои обои");
        button.style.backgroundImage = "url('" + customWallpaperData + "')";
        button.setAttribute("data-asset-loaded", "true");

        label = document.createElement("span");
        label.className = "wallpaper-label wallpaper-name";
        label.textContent = "Мои обои";

        button.appendChild(label);

        button.addEventListener("click", function () {
            setWallpaper("custom", true);
        });

        return button;
    }

    function renderWallpaperCards() {
        var i;
        var customCard;

        if (!elements.wallpapers) {
            return;
        }

        elements.wallpapers.innerHTML = "";

        if (customWallpaperData) {
            customCard = createCustomWallpaperCard();

            if (customCard) {
                elements.wallpapers.appendChild(customCard);
            }
        }

        for (i = 0; i < wallpapers.length; i++) {
            elements.wallpapers.appendChild(createWallpaperCard(wallpapers[i]));
        }

        initializeAssetObserver();
    }

    function setWallpaper(id, save) {
        var wallpaper;
        var cards;
        var i;

        if (id === "custom" && customWallpaperData) {
            activeWallpaper = "custom";

            if (elements.background) {
                elements.background.style.backgroundImage = "url('" + customWallpaperData + "')";
            }
        } else if (id === "default" || !id) {
            activeWallpaper = "default";

            if (elements.background) {
                elements.background.style.backgroundImage = "";
            }
        } else {
            wallpaper = findWallpaper(id);

            if (!wallpaper) {
                activeWallpaper = "default";

                if (elements.background) {
                    elements.background.style.backgroundImage = "";
                }
            } else {
                activeWallpaper = wallpaper.id;

                if (elements.background) {
                    elements.background.style.backgroundImage = "url('" + wallpaper.url + "')";
                }
            }
        }

        cards = elements.wallpapers ? getAll(".wallpaper-card", elements.wallpapers) : [];

        for (i = 0; i < cards.length; i++) {
            setSelected(
                cards[i],
                cards[i].getAttribute("data-wallpaper") === activeWallpaper
            );
        }

        if (save !== false) {
            saveValue("wallpaper", activeWallpaper);
        }
    }

    function loadWallpaperPreview(button) {
        var id;
        var wallpaper;

        if (!button || button.getAttribute("data-asset-loaded") === "true") {
            return;
        }

        id = button.getAttribute("data-wallpaper");

        if (id === "custom") {
            return;
        }

        wallpaper = findWallpaper(id);

        if (!wallpaper) {
            return;
        }

        button.style.backgroundImage = "url('" + wallpaper.thumb + "')";
        button.setAttribute("data-asset-loaded", "true");
    }

    function loadEngineLogo(button) {
        var engineId;
        var engine;
        var logo;
        var image;

        if (!button || button.getAttribute("data-logo-loaded") === "true") {
            return;
        }

        engineId = button.getAttribute("data-engine");
        engine = findEngine(engineId);
        logo = getElement(".engine-logo", button);

        if (!logo) {
            return;
        }

        button.setAttribute("data-logo-loaded", "true");

        image = document.createElement("img");
        image.className = "engine-logo-img";
        image.alt = "";
        image.setAttribute("aria-hidden", "true");
        image.src = engine.logo;
        logo.style.position = "relative";
        logo.style.overflow = "hidden";

        image.style.position = "absolute";
        image.style.left = "0";
        image.style.top = "0";
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.objectFit = "contain";
        image.style.borderRadius = "inherit";
        image.style.opacity = "0";
        image.style.transition = "opacity 150ms ease";
        image.style.backgroundColor = "#ffffff";

        image.onload = function () {
            image.style.opacity = "1";
            addClass(logo, "has-image");
        };

        image.onerror = function () {
            if (image.parentNode) {
                image.parentNode.removeChild(image);
            }

            removeClass(logo, "has-image");
        };

        logo.appendChild(image);
    }

    function queueAsset(callback, target) {
        fallbackQueue.push({
            callback: callback,
            target: target
        });

        if (!fallbackQueueRunning) {
            runFallbackQueue();
        }
    }

    function runFallbackQueue() {
        var item;

        if (!fallbackQueue.length) {
            fallbackQueueRunning = false;
            return;
        }

        fallbackQueueRunning = true;
        item = fallbackQueue.shift();

        window.setTimeout(function () {
            if (item && item.callback && item.target) {
                item.callback(item.target);
            }

            runFallbackQueue();
        }, 65);
    }

    function initializeAssetObserver() {
        var i;
        var engineButtons;
        var wallpaperCards;

        if (assetObserver && assetObserver.disconnect) {
            assetObserver.disconnect();
        }

        assetObserver = null;

        if ("IntersectionObserver" in window) {
            assetObserver = new window.IntersectionObserver(function (entries) {
                var j;
                var target;
                var wallpaperId;

                for (j = 0; j < entries.length; j++) {
                    if (!entries[j].isIntersecting && entries[j].intersectionRatio <= 0) {
                        continue;
                    }

                    target = entries[j].target;

                    if (target.getAttribute("data-engine")) {
                        loadEngineLogo(target);
                    } else {
                        wallpaperId = target.getAttribute("data-wallpaper");

                        if (wallpaperId !== "custom") {
                            loadWallpaperPreview(target);
                        }
                    }

                    assetObserver.unobserve(target);
                }
            }, {
                root: elements.settingsWindow || null,
                rootMargin: "120px"
            });
        }

        engineButtons = getEngineButtons();

        for (i = 0; i < engineButtons.length; i++) {
            if (assetObserver) {
                assetObserver.observe(engineButtons[i]);
            } else if (engineButtons[i].getAttribute("data-logo-loaded") !== "true") {
                queueAsset(loadEngineLogo, engineButtons[i]);
            }
        }

        wallpaperCards = elements.wallpapers ? getAll(".wallpaper-card", elements.wallpapers) : [];

        for (i = 0; i < wallpaperCards.length; i++) {
            if (wallpaperCards[i].getAttribute("data-wallpaper") === "custom") {
                continue;
            }

            if (assetObserver) {
                assetObserver.observe(wallpaperCards[i]);
            } else {
                queueAsset(loadWallpaperPreview, wallpaperCards[i]);
            }
        }
    }

    function loadVisibleAssets() {
        var engineButtons;
        var wallpaperCards;
        var i;

        engineButtons = getEngineButtons();

        if (assetObserver) {
            for (i = 0; i < engineButtons.length; i++) {
                if (engineButtons[i].getAttribute("data-logo-loaded") !== "true") {
                    assetObserver.observe(engineButtons[i]);
                }
            }

            wallpaperCards = elements.wallpapers ? getAll(".wallpaper-card", elements.wallpapers) : [];

            for (i = 0; i < wallpaperCards.length; i++) {
                if (
                    wallpaperCards[i].getAttribute("data-wallpaper") !== "custom" &&
                    wallpaperCards[i].getAttribute("data-asset-loaded") !== "true"
                ) {
                    assetObserver.observe(wallpaperCards[i]);
                }
            }
        } else {
            initializeAssetObserver();
        }
    }

    function initializeWallpaperUpload() {
        if (!elements.wallpaperUpload) {
            return;
        }

        elements.wallpaperUpload.addEventListener("change", function () {
            var file;
            var reader;

            if (!this.files || !this.files.length) {
                return;
            }

            file = this.files[0];

            if (!file.type || file.type.indexOf("image/") !== 0) {
                showToast("Выберите файл изображения");
                this.value = "";
                return;
            }

            if (!window.FileReader) {
                showToast("Загрузка обоев не поддерживается этим браузером");
                this.value = "";
                return;
            }

            reader = new FileReader();

            reader.onload = function (event) {
                customWallpaperData = event.target.result;

                if (!customWallpaperData || customWallpaperData.indexOf("data:image/") !== 0) {
                    showToast("Не удалось прочитать изображение");
                    return;
                }

                renderWallpaperCards();
                setWallpaper("custom", true);

                if (!saveValue("customWallpaper", customWallpaperData)) {
                    showToast("Обои применены, но сохранить их не удалось");
                } else {
                    showToast("Ваши обои установлены");
                }

                loadVisibleAssets();
            };

            reader.onerror = function () {
                showToast("Не удалось загрузить изображение");
            };

            reader.readAsDataURL(file);
        });
    }

    function resetDefaults() {
        activeEngine = DEFAULT_ENGINE;
        activeTheme = DEFAULT_THEME;
        glassLevel = DEFAULT_GLASS_LEVEL;
        animationsEnabled = true;

        customWallpaperData = "";

        removeSaved("customWallpaper");

        setEngine(DEFAULT_ENGINE, true);
        setTheme(DEFAULT_THEME, true);
        applyGlassLevel(DEFAULT_GLASS_LEVEL, true);
        setWallpaper("default", true);
        setAnimations(true, true);

        renderWallpaperCards();
        closeSettings();
        showToast("Настройки сброшены");
    }

    function initializeResetButton() {
        if (!elements.resetDefaults) {
            return;
        }

        elements.resetDefaults.addEventListener("click", function (event) {
            event.preventDefault();
            resetDefaults();
        });
    }

    function setAnimations(enabled, save) {
        animationsEnabled = !!enabled;

        setClass(document.body, "animations-off", !animationsEnabled);

        if (elements.animationsToggle) {
            if ("checked" in elements.animationsToggle) {
                elements.animationsToggle.checked = animationsEnabled;
            }

            elements.animationsToggle.setAttribute(
                "aria-checked",
                animationsEnabled ? "true" : "false"
            );

            elements.animationsToggle.setAttribute(
                "aria-pressed",
                animationsEnabled ? "true" : "false"
            );

            setSelected(
                elements.animationsToggle,
                animationsEnabled
            );
        }

        if (save !== false) {
            saveValue("animations", animationsEnabled ? "1" : "0");
        }
    }

    function initializeAnimationsToggle() {
        if (!elements.animationsToggle) {
            return;
        }

        if (
            elements.animationsToggle.tagName &&
            elements.animationsToggle.tagName.toLowerCase() === "input"
        ) {
            elements.animationsToggle.addEventListener("change", function () {
                setAnimations(!!this.checked, true);
            });
        } else {
            elements.animationsToggle.addEventListener("click", function (event) {
                event.preventDefault();
                setAnimations(!animationsEnabled, true);
            });
        }
    }

    function initializeVoiceSearch() {
        if (!elements.voiceButton) {
            return;
        }

        elements.voiceButton.addEventListener("click", function (event) {
            var Recognition;

            if (event && event.preventDefault) {
                event.preventDefault();
            }

            Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            if (!Recognition) {
                showToast("Голосовой поиск не поддерживается этим браузером");
                return;
            }

            if (speechRecognition) {
                try {
                    speechRecognition.stop();
                } catch (error) {
                    speechRecognition = null;
                }
            }

            try {
                speechRecognition = new Recognition();
                speechRecognition.lang = navigator.language || "ru-RU";
                speechRecognition.interimResults = false;
                speechRecognition.maxAlternatives = 1;

                speechRecognition.onstart = function () {
                    addClass(elements.voiceButton, "is-listening");
                    addClass(elements.voiceButton, "active");
                    showToast("Слушаю...");
                };

                speechRecognition.onresult = function (resultEvent) {
                    var result;
                    var transcript;

                    if (
                        resultEvent.results &&
                        resultEvent.results.length &&
                        resultEvent.results[0].length
                    ) {
                        result = resultEvent.results[0][0];
                        transcript = result.transcript || "";

                        if (elements.searchInput) {
                            elements.searchInput.value = transcript;
                            elements.searchInput.focus();
                        }

                        if (transcript.replace(/^\s+|\s+$/g, "")) {
                            submitSearch({
                                preventDefault: function () { }
                            });
                        }
                    }
                };

                speechRecognition.onerror = function () {
                    showToast("Не удалось распознать речь");
                };

                speechRecognition.onend = function () {
                    removeClass(elements.voiceButton, "is-listening");
                    removeClass(elements.voiceButton, "active");
                };

                speechRecognition.start();
            } catch (error) {
                removeClass(elements.voiceButton, "is-listening");
                showToast("Не удалось запустить голосовой поиск");
            }
        });
    }

    function padNumber(number) {
        return number < 10 ? "0" + number : String(number);
    }

    function updateClock() {
        var now = new Date();
        var hours = padNumber(now.getHours());
        var minutes = padNumber(now.getMinutes());
        var clockText = hours + ":" + minutes;
        var dateText = now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();

        if (elements.clock && clockText !== lastClockText) {
            elements.clock.textContent = clockText;
            lastClockText = clockText;
        }

        if (elements.date && dateText !== lastDateText) {
            elements.date.textContent = dateText;
            lastDateText = dateText;
        }

        updateGreeting(now);
    }

    function getGreetingForHour(hour) {
        if (hour >= 5 && hour < 12) {
            return "Доброе утро";
        }

        if (hour >= 12 && hour < 18) {
            return "Добрый день";
        }

        return "Добрый вечер";
    }

    function updateGreeting(now) {
        var text;
        var i;
        var span;
        var character;

        if (!elements.greeting) {
            return;
        }

        text = getGreetingForHour(now.getHours());

        if (text === greetingText) {
            return;
        }

        greetingText = text;
        elements.greeting.innerHTML = "";
        elements.greeting.setAttribute("aria-label", text);

        for (i = 0; i < text.length; i++) {
            character = text.charAt(i);
            span = document.createElement("span");

            if (character === " ") {
                span.className = "greeting-space";
                span.textContent = "\u00a0";
            } else {
                span.className = "greeting-letter";
                span.textContent = character;
                span.style.animationDelay = (i * 35) + "ms";
                span.style.webkitAnimationDelay = (i * 35) + "ms";
            }

            elements.greeting.appendChild(span);
        }
    }

    function initializeClock() {
        updateClock();
        window.setInterval(updateClock, 1000);
    }

    function initializeResizeHandler() {
        window.addEventListener("resize", function () {
            if (resizeTimer) {
                window.clearTimeout(resizeTimer);
            }

            resizeTimer = window.setTimeout(function () {
                updateIndicators();
            }, 100);
        });
    }

    function getElements() {
        elements.background = getElement("#background");
        elements.settingsToggle = getElement("#settingsToggle, .settings-toggle");
        elements.settingsOverlay = getElement("#settingsOverlay");
        elements.settingsWindow = getElement("#settingsWindow");
        elements.closeSettings = getElement("#closeSettings, #settingsClose, .settings-close, [data-close-settings]");

        elements.searchForm = getElement("#searchForm");
        elements.searchInput = getElement("#searchInput");
        elements.voiceButton = getElement("#voiceButton");

        elements.currentEngine = getElement("#currentEngine");
        elements.currentEngineName = getElement("#currentEngineName");

        elements.clock = getElement("#clock");
        elements.date = getElement("#date");
        elements.greeting = getElement("#greeting");

        elements.engines = getElement("#engines");
        elements.themeControls = getElement("#themeControls");

        elements.glassNumber = getElement("#glassNumber");
        elements.glassRange = getElement("#glassRange");
        elements.animationsToggle = getElement("#animationsToggle");

        elements.wallpapers = getElement("#wallpapers");
        elements.wallpaperUpload = getElement("#wallpaperUpload");
        elements.resetDefaults = getElement("#resetDefaults");
        elements.toast = getElement("#toast");
    }

    function loadSavedSettings() {
        var savedEngine = getSaved("engine");
        var savedTheme = getSaved("theme");
        var savedGlassLevel = getSaved("glassLevel");
        var savedAnimations = getSaved("animations");
        var savedWallpaper = getSaved("wallpaper");

        customWallpaperData = getSaved("customWallpaper") || "";

        if (savedEngine && findEngine(savedEngine)) {
            activeEngine = savedEngine;
        } else {
            activeEngine = DEFAULT_ENGINE;
        }

        if (
            savedTheme === "light" ||
            savedTheme === "dark" ||
            savedTheme === "system"
        ) {
            activeTheme = savedTheme;
        } else {
            activeTheme = DEFAULT_THEME;
        }

        if (savedGlassLevel !== null) {
            glassLevel = normalizeGlassLevel(savedGlassLevel);
        } else {
            glassLevel = DEFAULT_GLASS_LEVEL;
        }

        if (savedAnimations === "0") {
            animationsEnabled = false;
        } else {
            animationsEnabled = true;
        }

        if (savedWallpaper === "custom" && customWallpaperData) {
            activeWallpaper = "custom";
        } else if (savedWallpaper === "default" || !savedWallpaper) {
            activeWallpaper = "default";
        } else if (findWallpaper(savedWallpaper)) {
            activeWallpaper = savedWallpaper;
        } else {
            activeWallpaper = "default";
        }
    }

    function initialize() {
        getElements();
        loadSavedSettings();

        createEngineButtons();
        renderWallpaperCards();

        setEngine(activeEngine, false);
        setTheme(activeTheme, false);
        applyGlassLevel(glassLevel, false);
        setAnimations(animationsEnabled, false);
        setWallpaper(activeWallpaper, false);

        initializeSearch();
        initializeSettings();
        initializeIndicators();
        initializeGlassControls();
        initializeWallpaperUpload();
        initializeResetButton();
        initializeAnimationsToggle();
        initializeVoiceSearch();
        initializeSystemThemeListener();
        initializeClock();
        initializeResizeHandler();

        updateIndicators();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialize);
    } else {
        initialize();
    }
})();
