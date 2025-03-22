function Util() { } !function (e) { "use strict"; function t() { var e, t; document.querySelectorAll("iframe").forEach((function (i) { i.width && i.height && (e = parseFloat(i.width) / parseFloat(i.height), t = parseFloat(window.getComputedStyle(i.parentElement, null).width.replace("px", "")), i.style.maxWidth = "100%", i.style.maxHeight = Math.round(t / e).toString() + "px") })) } e.exists = function (t) { return e(t).length > 0 }, e(".text-component a > img").parent("a").addClass("has-img"), e(".text-component__inner .twitter-tweet").parent(".media-wrapper").addClass("twitter-embed"), new Swiper(".swiper-container-h", { direction: "horizontal", effect: "slide", autoplay: !0, parallax: !0, speed: 1600, rtl: !0, loop: !0, loopFillGroupWithBlank: !0, mousewheel: { eventsTarged: ".swiper-slide", sensitivity: 1 }, keyboard: { enabled: !0, onlyInViewport: !0 }, scrollbar: { el: ".swiper-scrollbar", hide: !1, draggable: !0 }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, pagination: { el: ".swiper-pagination", type: "progressbar" } }), new Swiper(".swiper-container-h1", { direction: "horizontal", effect: "slide", autoplay: !1, parallax: !0, speed: 1600, rtl: !0, loop: !0, loopFillGroupWithBlank: !0, keyboard: { enabled: !0, onlyInViewport: !0 }, scrollbar: { el: ".swiper-scrollbar", hide: !1, draggable: !0 }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, pagination: { el: ".swiper-pagination", type: "bullets", clickable: "true" } }), function () { if (e.exists(".js-main-header__nav-trigger")) { var t = document.getElementsByClassName("js-main-header")[0]; if (t) { var i = t.getElementsByClassName("js-main-header__nav-trigger")[0], a = t.getElementsByClassName("js-main-header__nav")[0]; i.addEventListener("click", (function (e) { e.preventDefault(); var t = !Util.hasClass(a, "main-header__nav--is-visible"); Util.toggleClass(a, "main-header__nav--is-visible", t), i.setAttribute("aria-expanded", t), t && a.querySelectorAll("[href], input:not([disabled]), button:not([disabled])")[0].focus() })) } } if (e(window).width() > 1023) { if (e.exists(".menu-default")) { var n = e(".navbar-nav").find(" > li.menu-item > a"); if (e(n).each((function () { e(this).html("<span>" + this.textContent + "</span>"), e(this).attr("title", this.textContent) })), "fixed" == e("body").attr("data-menu")) { var o = e(".main-header__layout").addClass("top"); e(window).scroll((function () { e(window).scrollTop() > 300 ? o.removeClass("top").addClass("action") : o.addClass("top").removeClass("action") })) } } e(window).scroll((function () { e(this).scrollTop() > 50 ? e(".main-header").addClass("show-bg") : e(".main-header").removeClass("show-bg") })) } }(), function () { if (e.exists("#loaded")) { function t() { e("#loaded").css("display", "none"), e("body").attr("onunload", "") } window.onpageshow = function (e) { e.persisted && window.location.reload() }, window.onbeforeunload = function () { e("#loaded").css("display", "block"), gsap.to("#loaded", { opacity: 1, ease: "power4.inOut", duration: .3 }) }, gsap.fromTo("#loaded", { opacity: 1 }, { opacity: 0, ease: Power1.easeOut, onComplete: t, duration: 1 }) } }(), function () { if (e.exists('body[data-menu="sticky"]')) { var t = e(".main-header__layout"), i = e(".sub-nav-hero"), a = !1, n = 0, o = 5, s = 100; function l() { var t = e(window).scrollTop(); i.length > 0 ? checkStickyNavigation(t) : r(t), n = t, a = !1 } function r(e) { n - e > o ? t.removeClass("is-hide") : e - n > o && e > s && t.addClass("is-hide") } e(window).on("scroll", (function () { a || (a = !0, window.requestAnimationFrame ? requestAnimationFrame(l) : setTimeout(l, 300)) })), e(window).scroll((function () { e(this).scrollTop() > 50 ? e(".main-header").addClass("show-bg") : e(".main-header").removeClass("show-bg") })) } }(), function () { if (e.exists(".ms_theme_mode")) { var t = e("#theme-dark"), i = e("#theme-light"), a = e("#switcher"); function n(e) { localStorage.setItem("theme-mode", e) } function o() { return localStorage.getItem("theme-mode") } function s() { "dark" === o() ? (e(t).addClass("toggler--is-active"), e(i).removeClass("toggler--is-active"), e(a).prop("checked", !1), e("body").attr("data-theme", "dark")) : (e(t).removeClass("toggler--is-active"), e(i).addClass("toggler--is-active"), e(a).prop("checked", !0), e("body").attr("data-theme", "light")) } e("body").css("visibility", "hidden"), s(), e("body").css("visibility", "visible"), e(t).on("click", (function () { n("dark"), s() })), e(i).on("click", (function () { n("light"), s() })), e(a).on("click", (function () { n("light" === o() ? "dark" : "light"), s() })) } }(), function () { e(window).width() < 1024 && e(".main-header__nav ").addClass("is_mobile"); var t = e(window).width() > 1024; e(window).on("resize", (function (i) { e(window).width() < 1077 && t ? (t = !1, e(".sub-menu").css("display", "none"), e(".main-header__nav ").addClass("is_mobile")) : e(window).width() > 1077 && !t && (t = !0, e(".sub-menu").css("display", "block"), e(".main-header__nav ").removeClass("is_mobile")) })), e(document).on("click", ".is_mobile .navbar-nav > .menu-item-has-children > a", (function (t) { t.preventDefault(), e(this).hasClass("active") ? (e(this).removeClass("active"), e(this).siblings(".sub-menu").slideUp(100)) : (e(".menu-item-has-children > a").removeClass("active"), e(this).addClass("active"), e(".sub-menu").slideUp(200), e(this).siblings(".sub-menu").slideDown(100)) })) }(), new Swiper(".ms-post-media__gallery", { loop: !0, speed: 600, navigation: { nextEl: ".ms-sp-btn__next", prevEl: ".ms-sp-btn__prev" } }), e(".header__search-icon").on("click", (function () { e(".header__search-modal").toggleClass("modal--is-visible") })), e(document).on("click", ".modal--is-visible", (function (t) { t.target == this && e(".header__search-modal").toggleClass("modal--is-visible") })), e(".header__search--close-btn").on("click", (function () { e(".header__search-modal").toggleClass("modal--is-visible") })), e.exists(".ms-quantity") && e("body").on("click", ".button-plus, .button-minus", (function (t) { const i = e(t.target).closest(".button-minus").is(".button-minus"), a = e(t.target).closest(".ms-quantity").find("input"); a.is("input") && (a[0][i ? "stepDown" : "stepUp"](), e('button[name="update_cart"]').prop("disabled", !1)) })), function () { if ("on" == e("body").attr("data-footer-effect")) { var t = e(".ms-footer").height(); e(".ms-main").css("margin-bottom", t), e(window).on("resize", (function () { var t = e(".ms-footer").height(); e(".ms-main").css("margin-bottom", t) })) } }(), e((function () { e(".stars").find("a").on("click", (function () { e(this).nextAll().removeClass("action") })), e(".stars").find("a").mouseover((function () { e(".stars").find("a").each((function () { e(".stars").find("a").hasClass("active") || e(this).mouseover((function () { e(this).addClass("action"), e(this).nextAll().removeClass("action"), e(this).prevAll().addClass("action") })) })) })), e(".stars").find("a").mouseout((function () { e(".stars").find("a").each((function () { e(".stars").find("a").hasClass("active") ? (e(".active").prevAll().addClass("action"), e(".active").removeClass("action").nextAll().removeClass("action")) : e(".stars").find("a").removeClass("action") })) })) })), t(), window.onresize = t }(jQuery), function (e, t) { "function" == typeof define && define.amd ? define(["isotope-layout/js/layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("isotope-layout/js/layout-mode")) : t(e.Isotope.LayoutMode) }(window, (function (e) { "use strict"; var t = e.create("cellsByRow"), i = t.prototype; return i._resetLayout = function () { this.itemIndex = 0, this.getColumnWidth(), this.getRowHeight(), this.cols = Math.floor(this.isotope.size.innerWidth / this.columnWidth), this.cols = Math.max(this.cols, 1) }, i._getItemLayoutPosition = function (e) { e.getSize(); var t = this.itemIndex % this.cols, i = Math.floor(this.itemIndex / this.cols), a = (t + .5) * this.columnWidth - e.size.outerWidth / 2, n = (i + .5) * this.rowHeight - e.size.outerHeight / 2; return this.itemIndex++, { x: a, y: n } }, i._getContainerSize = function () { return { height: Math.ceil(this.itemIndex / this.cols) * this.rowHeight } }, t })), Util.hasClass = function (e, t) { return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)")) }, Util.addClass = function (e, t) { var i = t.split(" "); e.classList ? e.classList.add(i[0]) : Util.hasClass(e, i[0]) || (e.className += " " + i[0]), i.length > 1 && Util.addClass(e, i.slice(1).join(" ")) }, Util.removeClass = function (e, t) { var i = t.split(" "); if (e.classList) e.classList.remove(i[0]); else if (Util.hasClass(e, i[0])) { var a = new RegExp("(\\s|^)" + i[0] + "(\\s|$)"); e.className = e.className.replace(a, " ") } i.length > 1 && Util.removeClass(e, i.slice(1).join(" ")) }, Util.toggleClass = function (e, t, i) { i ? Util.addClass(e, t) : Util.removeClass(e, t) }, Util.setAttributes = function (e, t) { for (var i in t) e.setAttribute(i, t[i]) }, Util.getChildrenByClassName = function (e, t) { e.children; for (var i = [], a = 0; a < e.children.length; a++)Util.hasClass(e.children[a], t) && i.push(e.children[a]); return i }, Util.is = function (e, t) { if (t.nodeType) return e === t; for (var i = "string" == typeof t ? document.querySelectorAll(t) : t, a = i.length; a--;)if (i[a] === e) return !0; return !1 }, Util.setHeight = function (e, t, i, a, n) { var o = t - e, s = null, l = function (t) { s || (s = t); var r = t - s, c = parseInt(r / a * o + e); i.style.height = c + "px", r < a ? window.requestAnimationFrame(l) : n() }; i.style.height = e + "px", window.requestAnimationFrame(l) }, jarallax(document.querySelectorAll(".jarallax-img"), { speed: .7 }), jarallax(document.querySelectorAll(".footer-container"), { speed: .7 }), $(document).ready((function () { if ($(".main-isotop").length) { var e = new Isotope(".filter", { itemSelector: ".element-item", layoutMode: "fitRows" }), t = { ium: function (e) { return e.querySelector(".name").textContent.match(/ium$/) } }; document.querySelector(".filters-button-group").addEventListener("click", (function (i) { if (matchesSelector(i.target, "button")) { var a = i.target.getAttribute("data-filter"); a = t[a] || a, e.arrange({ filter: a }) } })); for (var i = document.querySelectorAll(".button-group"), a = 0, n = i.length; a < n; a++) { o(i[a]) } function o(e) { e.addEventListener("click", (function (t) { matchesSelector(t.target, "button") && (e.querySelector(".is-checked").classList.remove("is-checked"), t.target.classList.add("is-checked")) })) } } $(".grid-masonary").length && $(".grid-masonary").imagesLoaded((function () { $(".portfolio-filter").on("click", "button", (function () { var t = $(this).attr("data-filter"); e.isotope({ filter: t }) })); var e = $(".grid-masonary").isotope({ itemSelector: ".grid-item-p", percentPosition: !0, masonry: { columnWidth: ".grid-item-p" } }) })), $(".portfolio-filter button").on("click", (function (e) { $(this).siblings(".is-checked").removeClass("is-checked"), $(this).addClass("is-checked"), e.preventDefault() })) })), Math.easeInOutQuad = function (e, t, i, a) { return (e /= a / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t }, Util.scrollTo = function (e, t, i) { var a = window.scrollY || document.documentElement.scrollTop, n = null, o = function (s) { n || (n = s); var l = s - n; l > t && (l = t); var r = Math.easeInOutQuad(l, a, e - a, t); window.scrollTo(0, r), l < t ? window.requestAnimationFrame(o) : i && i() }; window.requestAnimationFrame(o) }, function () { var e = document.getElementsByClassName("js-back-to-top")[0]; if (e) { var t = parseInt(e.getAttribute("data-duration")) || 0; parseInt(e.getAttribute("data-offset")); e.addEventListener("click", (function (e) { e.preventDefault(), window.requestAnimationFrame ? Util.scrollTo(0, t) : window.scrollTo(0, 0) })) } if ($(".filter-price").length) { var i = document.querySelector("#lower"), a = document.querySelector("#upper"); document.querySelector("#two").value = a.value, document.querySelector("#one").value = i.value; var n = parseInt(i.value), o = parseInt(a.value); a.oninput = function () { n = parseInt(i.value), (o = parseInt(a.value)) < n + 4 && (i.value = o - 4, n == i.min && (a.value = 4)), document.querySelector("#two").value = this.value }, i.oninput = function () { n = parseInt(i.value), o = parseInt(a.value), n > o - 4 && (a.value = n + 4, o == a.max && (i.value = parseInt(a.max) - 4)), document.querySelector("#one").value = this.value } } }();