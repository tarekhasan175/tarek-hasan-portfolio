(function () {
    var settings = {
        frameRate: 300,
        animationTime: 600,
        stepSize: 100,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: true,
        arrowScroll: 50,
        fixedBackground: true,
        excluded: "",
    };

    var options = settings,
        initialized = false,
        isFrame = false,
        root = document.documentElement,
        activeElement,
        deltaBuffer = [],
        isMac = /^Mac/.test(navigator.platform),
        key = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
        },
        direction = {
            37: 1,
            38: 1,
            39: 1,
            40: 1,
        },
        scrollQueue = [],
        isAnimating = false,
        lastScrollTime = Date.now(),
        scrollX = 0,
        scrollY = 0,
        mutationObserver,
        resizeTimeout,
        scrollBehaviorCache = {};

    function init() {
        if (initialized || !document.body) return;
        initialized = true;

        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;

        root = document.compatMode.indexOf("CSS") >= 0 ? html : body;
        activeElement = body;

        if (options.keyboardSupport) {
            addEvent("keydown", keydownHandler);
        }

        // detect if in iframe
        if (top !== self) {
            isFrame = true;
        } else if (
            isOldSafari() &&
            windowHeight < scrollHeight &&
            (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)
        ) {
            var div = document.createElement("div");
            div.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + root.scrollHeight + "px";
            document.body.appendChild(div);

            var delayedResize = function () {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function () {
                    if (!isAnimating) {
                        div.style.height = "0px";
                        div.style.height = root.scrollHeight + "px";
                    }
                }, 500);
            };

            setTimeout(delayedResize, 10);
            addEvent("resize", delayedResize);

            if (mutationObserver) mutationObserver.disconnect();
            mutationObserver = new MutationObserver(delayedResize);
            mutationObserver.observe(body, { attributes: true, childList: true, characterData: false });

            if (root.offsetHeight <= windowHeight) {
                var clearDiv = document.createElement("div");
                clearDiv.style.clear = "both";
                body.appendChild(clearDiv);
            }
        }

        if (!options.fixedBackground && !isAnimating) {
            body.style.backgroundAttachment = "scroll";
            html.style.backgroundAttachment = "scroll";
        }
    }

    // Utility: check old Safari (version 8 or 9)
    function isOldSafari() {
        var ua = navigator.userAgent;
        return /safari/i.test(ua) && !/chrome/i.test(ua) && (/Version\/8/i.test(ua) || /Version\/9/i.test(ua));
    }

    // Add event listener wrapper
    function addEvent(type, fn, options) {
        window.addEventListener(type, fn, options || false);
    }

    // Remove event listener wrapper
    function removeEvent(type, fn, options) {
        window.removeEventListener(type, fn, options || false);
    }

    // Smooth scroll animation queue processor
    function scrollQueueProcessor(element, scrollXDelta, scrollYDelta) {
        updateDirection(scrollXDelta, scrollYDelta);
        if (options.accelerationMax !== 1) {
            var now = Date.now();
            var elapsed = now - lastScrollTime;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + 50 / elapsed) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    scrollXDelta *= factor;
                    scrollYDelta *= factor;
                }
            }
            lastScrollTime = now;
        }

        scrollQueue.push({
            x: scrollXDelta,
            y: scrollYDelta,
            lastX: scrollXDelta < 0 ? 0.99 : -0.99,
            lastY: scrollYDelta < 0 ? 0.99 : -0.99,
            start: Date.now(),
        });

        if (!isAnimating) {
            var isRootScroll = element === getScrollRoot() || element === document.body;
            if (element.$scrollBehavior === undefined) {
                if (hasSmoothScrollBehavior(element)) {
                    element.$scrollBehavior = element.style.scrollBehavior;
                    element.style.scrollBehavior = "auto";
                }
            }
            isAnimating = true;

            var step = function () {
                var now = Date.now();
                var scrollXSum = 0,
                    scrollYSum = 0;
                for (var i = 0; i < scrollQueue.length; i++) {
                    var item = scrollQueue[i];
                    var elapsed = now - item.start;
                    var finished = elapsed >= options.animationTime;
                    var progress = finished ? 1 : elapsed / options.animationTime;
                    if (options.pulseAlgorithm) progress = pulse(progress);

                    var deltaX = (item.x * progress - item.lastX) >> 0;
                    var deltaY = (item.y * progress - item.lastY) >> 0;

                    scrollXSum += deltaX;
                    scrollYSum += deltaY;

                    item.lastX += deltaX;
                    item.lastY += deltaY;

                    if (finished) {
                        scrollQueue.splice(i, 1);
                        i--;
                    }
                }

                if (isRootScroll) {
                    window.scrollBy(scrollXSum, scrollYSum);
                } else {
                    if (scrollXSum) element.scrollLeft += scrollXSum;
                    if (scrollYSum) element.scrollTop += scrollYSum;
                }

                if (!scrollXSum && !scrollYSum) scrollQueue = [];

                if (scrollQueue.length) {
                    requestFrame(step);
                } else {
                    isAnimating = false;
                    if (element.$scrollBehavior !== undefined) {
                        element.style.scrollBehavior = element.$scrollBehavior;
                        element.$scrollBehavior = undefined;
                    }
                }
            };
            requestFrame(step);
        }
    }

    // Update direction state
    function updateDirection(x, y) {
        var newX = x > 0 ? 1 : -1;
        var newY = y > 0 ? 1 : -1;
        if (scrollX !== newX || scrollY !== newY) {
            scrollX = newX;
            scrollY = newY;
            scrollQueue = [];
            lastScrollTime = 0;
        }
    }

    // Get the scroll root element (document.scrollingElement fallback)
    var scrollRoot;
    function getScrollRoot() {
        if (!scrollRoot) {
            scrollRoot = document.scrollingElement;
            if (!scrollRoot) {
                // fallback for older browsers
                var div = document.createElement("div");
                div.style.cssText = "height:10000px;width:1px;";
                document.body.appendChild(div);
                var initialScrollTop = document.body.scrollTop;
                window.scrollBy(0, 3);
                scrollRoot = document.body.scrollTop !== initialScrollTop ? document.body : document.documentElement;
                window.scrollBy(0, -3);
                document.body.removeChild(div);
            }
        }
        return scrollRoot;
    }

    // Detect if element has smooth scroll behavior
    function hasSmoothScrollBehavior(element) {
        var id = getUniqueId(element);
        if (scrollBehaviorCache[id] === undefined) {
            var style = getComputedStyle(element, "")["scroll-behavior"];
            scrollBehaviorCache[id] = style === "smooth";
        }
        return scrollBehaviorCache[id];
    }

    var uniqueIdCounter = 0;
    function getUniqueId(element) {
        if (!element.uniqueID) element.uniqueID = uniqueIdCounter++;
        return element.uniqueID;
    }

    // Pulse algorithm for easing (from original code)
    function pulse(x) {
        var val;
        var scale = options.pulseScale;
        var normalize = options.pulseNormalize;
        x *= scale;
        if (x < 1) {
            val = x - (1 - Math.exp(-x));
        } else {
            x -= 1;
            val = Math.exp(-1) + (1 - Math.exp(-x)) * (1 - Math.exp(-1));
        }
        return val * normalize;
    }

    // Wheel event handler
    function wheelHandler(event) {
        if (!initialized) init();

        var target = event.target;

        if (
            event.defaultPrevented ||
            event.ctrlKey ||
            isExcluded(target)
        ) {
            return true;
        }

        var deltaX = -event.wheelDeltaX || event.deltaX || 0;
        var deltaY = -event.wheelDeltaY || event.deltaY || 0;

        if (isMac) {
            if (event.wheelDeltaX && isMultiple(event.wheelDeltaX, 120)) {
                deltaX = (event.wheelDeltaX / Math.abs(event.wheelDeltaX)) * -120;
            }
            if (event.wheelDeltaY && isMultiple(event.wheelDeltaY, 120)) {
                deltaY = (event.wheelDeltaY / Math.abs(event.wheelDeltaY)) * -120;
            }
        }

        if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0;
        }

        if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40;
        }

        var scrollable = findScrollable(target);
        if (!scrollable) {
            if (isFrame && window.parent) {
                Object.defineProperty(event, "target", { value: window.frameElement });
                window.parent.dispatchEvent(event);
                return false;
            }
            return true;
        }

        if (shouldBeIgnored(deltaY)) {
            return true;
        }

        if (Math.abs(deltaX) > 1.2) deltaX *= options.stepSize / 120;
        if (Math.abs(deltaY) > 1.2) deltaY *= options.stepSize / 120;

        scrollQueueProcessor(scrollable, deltaX, deltaY);
        event.preventDefault();
        clearCacheTimeout();
    }

    // Detect if an element should be excluded from smooth scroll
    function isExcluded(element) {
        return (
            isTag(element, "embed") ||
            (isTag(element, "object") || (element.shadowRoot !== undefined))
        );
    }

    // Detect if element is a specific tag
    function isTag(element, tagName) {
        return element && element.nodeName && element.nodeName.toLowerCase() === tagName.toLowerCase();
    }

    // Check if a number is a multiple of another
    function isMultiple(value, test) {
        return Math.floor(value / test) === value / test;
    }

    // Detect if scrolling should be ignored due to low delta values
    var lastDeltas = [];
    function shouldBeIgnored(delta) {
        if (!lastDeltas.length) lastDeltas = [delta, delta, delta];

        delta = Math.abs(delta);
        lastDeltas.push(delta);
        lastDeltas.shift();

        try {
            localStorage.SS_deltaBuffer = lastDeltas.join(",");
        } catch (e) { }

        var isMultiple120 = isMultiple(lastDeltas[0], 120) && isMultiple(lastDeltas[1], 120) && isMultiple(lastDeltas[2], 120);
        var isNotMultiple = !isMultiple(120, lastDeltas[0]) && !isMultiple(100, lastDeltas[1]) && !isMultiple120;

        return delta < 50 || isNotMultiple;
    }

    // Find nearest scrollable element
    function findScrollable(element) {
        var elements = [],
            body = document.body,
            scrollHeight = root.scrollHeight;

        while (element) {
            var cached = scrollBehaviorCache[getUniqueId(element)];
            if (cached !== undefined) return setCache(elements, cached);

            elements.push(element);

            if (scrollHeight === element.scrollHeight) {
                var condition = (isFrame && isScrollable(root)) || (isScrollable(root) && isScrollable(body));
                if ((isFrame && isScrollable(root)) || (!isFrame && condition)) return setCache(elements, getScrollRoot());
            } else if (isScrollable(element) && hasOverflowScroll(element)) {
                return setCache(elements, element);
            }
            element = element.parentElement;
        }
        return null;
    }

    // Cache scroll behavior result
    function setCache(elements, value) {
        for (var i = 0; i < elements.length; i++) {
            scrollBehaviorCache[getUniqueId(elements[i])] = value;
        }
        return value;
    }

    // Detect if element is scrollable (has scroll height larger than client height)
    function isScrollable(el) {
        return el.clientHeight + 10 < el.scrollHeight;
    }

    // Detect if element has overflow-y scroll or auto
    function hasOverflowScroll(el) {
        var overflowY = getComputedStyle(el).getPropertyValue("overflow-y");
        return overflowY === "scroll" || overflowY === "auto";
    }

    // Keydown event handler for keyboard scrolling
    function keydownHandler(event) {
        var target = event.target;
        var ctrlAltMeta = event.ctrlKey || event.altKey || event.metaKey || (event.shiftKey && event.keyCode !== key.spacebar);
        var tagName = target.nodeName.toLowerCase();
        var inputType = target.type;

        if (
            event.defaultPrevented ||
            ["textarea", "select", "embed", "object"].indexOf(tagName) !== -1 ||
            (isTag(target, "input") && !/^(button|submit|radio|checkbox|file|color|image)$/i.test(inputType)) ||
            isTag(activeElement, "video") ||
            target.isContentEditable ||
            ctrlAltMeta ||
            isYouTubeHtml5Video(event)
        ) return true;

        if ((isTag(target, "button") || (isTag(target, "input") && /^(button|submit|radio|checkbox|file|color|image)$/i.test(inputType))) && event.keyCode === key.spacebar)
            return true;

        if (isTag(target, "input") && inputType === "radio" && direction[event.keyCode])
            return true;

        var scrollX = 0,
            scrollY = 0;

        var scrollable = findScrollable(activeElement);
        if (!scrollable) {
            if (!isFrame || !window.parent) return true;
            return window.parent.keydownHandler(event);
        }

        var clientHeight = scrollable.clientHeight;
        if (scrollable === document.body && document.scrollingElement) {
            clientHeight = window.innerHeight;
        }

        switch (event.keyCode) {
            case key.up:
                scrollY = -options.arrowScroll;
                break;
            case key.down:
                scrollY = options.arrowScroll;
                break;
            case key.spacebar:
                scrollY = -(event.shiftKey ? 1 : -1) * clientHeight * 0.9;
                break;
            case key.pageup:
                scrollY = -clientHeight * 0.9;
                break;
            case key.pagedown:
                scrollY = clientHeight * 0.9;
                break;
            case key.home:
                if (scrollable === document.body && document.scrollingElement) {
                    scrollable = document.scrollingElement;
                }
                scrollY = -scrollable.scrollTop;
                break;
            case key.end:
                var scrollBottom = scrollable.scrollHeight - scrollable.scrollTop - clientHeight;
                scrollY = scrollBottom > 0 ? 10 + scrollBottom : 0;
                break;
            case key.left:
                scrollX = -options.arrowScroll;
                break;
            case key.right:
                scrollX = options.arrowScroll;
                break;
            default:
                return true;
        }

        scrollQueueProcessor(scrollable, scrollX, scrollY);
        event.preventDefault();
        clearCacheTimeout();
    }

    // Detect if event target is YouTube html5 video controls
    function isYouTubeHtml5Video(event) {
        var el = event.target;
        if (document.URL.indexOf("www.youtube.com/watch") === -1) return false;
        while (el && el !== document.body) {
            if (el.classList && el.classList.contains("html5-video-controls")) return true;
            el = el.parentNode;
        }
        return false;
    }

    // Mouse down event handler to update active element
    function mousedownHandler(event) {
        activeElement = event.target;
    }

    // Clear cache on timeout to avoid memory leaks
    var cacheClearTimeout;
    function clearCacheTimeout() {
        clearTimeout(cacheClearTimeout);
        cacheClearTimeout = setInterval(function () {
            scrollBehaviorCache = {};
        }, 1000);
    }

    // requestAnimationFrame fallback
    var requestFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };

    // Detect passive event listener support
    var supportsPassive = false;
    try {
        window.addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            })
        );
    } catch (e) { }

    var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    var passiveOpt = supportsPassive ? { passive: false } : false;

    if (wheelEvent && isSupportedBrowser()) {
        addEvent(wheelEvent, wheelHandler, passiveOpt);
        addEvent("mousedown", mousedownHandler);
        addEvent("load", init);
    }

})();
