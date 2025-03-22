window.Modernizr = function (e, t, n) { function r(e) { h.cssText = e } function o(e, t) { return typeof e === t } function i(e, t) { return !!~("" + e).indexOf(t) } function a(e, t) { for (var r in e) { var o = e[r]; if (!i(o, "-") && h[o] !== n) return "pfx" != t || o } return !1 } function c(e, t, r) { for (var i in e) { var a = t[e[i]]; if (a !== n) return !1 === r ? e[i] : o(a, "function") ? a.bind(r || t) : a } return !1 } function s(e, t, n) { var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + w.join(r + " ") + r).split(" "); return o(t, "string") || o(t, "undefined") ? a(i, t) : c(i = (e + " " + x.join(r + " ") + r).split(" "), t, n) } var l, u, f = {}, d = t.documentElement, p = "modernizr", m = t.createElement(p), h = m.style, g = t.createElement("input"), v = ":)", y = {}.toString, b = " -webkit- -moz- -o- -ms- ".split(" "), E = "Webkit Moz O ms", w = E.split(" "), x = E.toLowerCase().split(" "), S = "http://www.w3.org/2000/svg", C = {}, k = {}, T = {}, j = [], N = j.slice, P = function (e, n, r, o) { var i, a, c, s, l = t.createElement("div"), u = t.body, f = u || t.createElement("body"); if (parseInt(r, 10)) for (; r--;)(c = t.createElement("div")).id = o ? o[r] : p + (r + 1), l.appendChild(c); return i = ["&#173;", '<style id="s', p, '">', e, "</style>"].join(""), l.id = p, (u ? l : f).innerHTML += i, f.appendChild(l), u || (f.style.background = "", f.style.overflow = "hidden", s = d.style.overflow, d.style.overflow = "hidden", d.appendChild(f)), a = n(l, e), u ? l.parentNode.removeChild(l) : (f.parentNode.removeChild(f), d.style.overflow = s), !!a }, M = function () { var e = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return function (r, i) { i = i || t.createElement(e[r] || "div"); var a = (r = "on" + r) in i; return a || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(r, ""), a = o(i[r], "function"), o(i[r], "undefined") || (i[r] = n), i.removeAttribute(r))), i = null, a } }(), A = {}.hasOwnProperty; for (var L in u = o(A, "undefined") || o(A.call, "undefined") ? function (e, t) { return t in e && o(e.constructor.prototype[t], "undefined") } : function (e, t) { return A.call(e, t) }, Function.prototype.bind || (Function.prototype.bind = function (e) { var t = this; if ("function" != typeof t) throw new TypeError; var n = N.call(arguments, 1), r = function () { if (this instanceof r) { var o = function () { }; o.prototype = t.prototype; var i = new o, a = t.apply(i, n.concat(N.call(arguments))); return Object(a) === a ? a : i } return t.apply(e, n.concat(N.call(arguments))) }; return r }), C.flexbox = function () { return s("flexWrap") }, C.canvas = function () { var e = t.createElement("canvas"); return !!e.getContext && !!e.getContext("2d") }, C.canvastext = function () { return !!f.canvas && !!o(t.createElement("canvas").getContext("2d").fillText, "function") }, C.webgl = function () { return !!e.WebGLRenderingContext }, C.touch = function () { var n; return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : P(["@media (", b.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), (function (e) { n = 9 === e.offsetTop })), n }, C.geolocation = function () { return "geolocation" in navigator }, C.postmessage = function () { return !!e.postMessage }, C.websqldatabase = function () { return !!e.openDatabase }, C.indexedDB = function () { return !!s("indexedDB", e) }, C.hashchange = function () { return M("hashchange", e) && (t.documentMode === n || t.documentMode > 7) }, C.history = function () { return !!e.history && !!history.pushState }, C.draganddrop = function () { var e = t.createElement("div"); return "draggable" in e || "ondragstart" in e && "ondrop" in e }, C.websockets = function () { return "WebSocket" in e || "MozWebSocket" in e }, C.rgba = function () { return r("background-color:rgba(150,255,150,.5)"), i(h.backgroundColor, "rgba") }, C.hsla = function () { return r("background-color:hsla(120,40%,100%,.5)"), i(h.backgroundColor, "rgba") || i(h.backgroundColor, "hsla") }, C.multiplebgs = function () { return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(h.background) }, C.backgroundsize = function () { return s("backgroundSize") }, C.borderimage = function () { return s("borderImage") }, C.borderradius = function () { return s("borderRadius") }, C.boxshadow = function () { return s("boxShadow") }, C.textshadow = function () { return "" === t.createElement("div").style.textShadow }, C.opacity = function () { return function (e, t) { r(b.join(e + ";") + (t || "")) }("opacity:.55"), /^0.55$/.test(h.opacity) }, C.cssanimations = function () { return s("animationName") }, C.csscolumns = function () { return s("columnCount") }, C.cssgradients = function () { var e = "background-image:"; return r((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + b.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -17)), i(h.backgroundImage, "gradient") }, C.cssreflections = function () { return s("boxReflect") }, C.csstransforms = function () { return !!s("transform") }, C.csstransforms3d = function () { var e = !!s("perspective"); return e && "webkitPerspective" in d.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", (function (t, n) { e = 9 === t.offsetLeft && 3 === t.offsetHeight })), e }, C.csstransitions = function () { return s("transition") }, C.fontface = function () { var e; return P('@font-face {font-family:"font";src:url("https://")}', (function (n, r) { var o = t.getElementById("smodernizr"), i = o.sheet || o.styleSheet, a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : ""; e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0]) })), e }, C.generatedcontent = function () { var e; return P(["#", p, "{font:0/0 a}#", p, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), (function (t) { e = t.offsetHeight >= 3 })), e }, C.video = function () { var e = t.createElement("video"), n = !1; try { (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")) } catch (e) { } return n }, C.audio = function () { var e = t.createElement("audio"), n = !1; try { (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")) } catch (e) { } return n }, C.localstorage = function () { try { return localStorage.setItem(p, p), localStorage.removeItem(p), !0 } catch (e) { return !1 } }, C.sessionstorage = function () { try { return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0 } catch (e) { return !1 } }, C.webworkers = function () { return !!e.Worker }, C.applicationcache = function () { return !!e.applicationCache }, C.svg = function () { return !!t.createElementNS && !!t.createElementNS(S, "svg").createSVGRect }, C.inlinesvg = function () { var e = t.createElement("div"); return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == S }, C.smil = function () { return !!t.createElementNS && /SVGAnimate/.test(y.call(t.createElementNS(S, "animate"))) }, C.svgclippaths = function () { return !!t.createElementNS && /SVGClipPath/.test(y.call(t.createElementNS(S, "clipPath"))) }, C) u(C, L) && (l = L.toLowerCase(), f[l] = C[L](), j.push((f[l] ? "" : "no-") + l)); return f.input || (f.input = function (n) { for (var r = 0, o = n.length; r < o; r++)T[n[r]] = n[r] in g; return T.list && (T.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), T }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function (e) { for (var r, o, i, a = 0, c = e.length; a < c; a++)g.setAttribute("type", o = e[a]), (r = "text" !== g.type) && (g.value = v, g.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && g.style.WebkitAppearance !== n ? (d.appendChild(g), r = (i = t.defaultView).getComputedStyle && "textfield" !== i.getComputedStyle(g, null).WebkitAppearance && 0 !== g.offsetHeight, d.removeChild(g)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? g.checkValidity && !1 === g.checkValidity() : g.value != v)), k[e[a]] = !!r; return k }("search tel url email datetime date month week time datetime-local number range color".split(" "))), f.addTest = function (e, t) { if ("object" == typeof e) for (var r in e) u(e, r) && f.addTest(r, e[r]); else { if (e = e.toLowerCase(), f[e] !== n) return f; t = "function" == typeof t ? t() : t, d.className += " " + (t ? "" : "no-") + e, f[e] = t } return f }, r(""), m = g = null, function (e, t) { function n() { var e = m.elements; return "string" == typeof e ? e.split(" ") : e } function r(e) { var t = p[e[f]]; return t || (t = {}, d++, e[f] = d, p[d] = t), t } function o(e, n, o) { return n || (n = t), c ? n.createElement(e) : (o || (o = r(n)), !(i = o.cache[e] ? o.cache[e].cloneNode() : u.test(e) ? (o.cache[e] = o.createElem(e)).cloneNode() : o.createElem(e)).canHaveChildren || l.test(e) || i.tagUrn ? i : o.frag.appendChild(i)); var i } function i(e) { e || (e = t); var i = r(e); return m.shivCSS && !a && !i.hasCSS && (i.hasCSS = !!function (e, t) { var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement; return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild) }(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || function (e, t) { t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) { return m.shivMethods ? o(n, e, t) : t.createElem(n) }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, (function (e) { return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")' })) + ");return n}")(m, t.frag) }(e, i), e } var a, c, s = e.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f = "_html5shiv", d = 0, p = {}; !function () { try { var e = t.createElement("a"); e.innerHTML = "<xyz></xyz>", a = "hidden" in e, c = 1 == e.childNodes.length || function () { t.createElement("a"); var e = t.createDocumentFragment(); return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement }() } catch (e) { a = !0, c = !0 } }(); var m = { elements: s.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: "3.7.0", shivCSS: !1 !== s.shivCSS, supportsUnknownElements: c, shivMethods: !1 !== s.shivMethods, type: "default", shivDocument: i, createElement: o, createDocumentFragment: function (e, o) { if (e || (e = t), c) return e.createDocumentFragment(); for (var i = (o = o || r(e)).frag.cloneNode(), a = 0, s = n(), l = s.length; a < l; a++)i.createElement(s[a]); return i } }; e.html5 = m, i(t) }(this, t), f._version = "2.8.3", f._prefixes = b, f._domPrefixes = x, f._cssomPrefixes = w, f.hasEvent = M, f.testProp = function (e) { return a([e]) }, f.testAllProps = s, f.testStyles = P, f.prefixed = function (e, t, n) { return t ? s(e, t, n) : s(e, "pfx") }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + j.join(" "), f }(this, this.document), function (e, t, n) { function r(e) { return "[object Function]" == g.call(e) } function o(e) { return "string" == typeof e } function i() { } function a(e) { return !e || "loaded" == e || "complete" == e || "uninitialized" == e } function c() { var e = v.shift(); y = 1, e ? e.t ? m((function () { ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1) }), 0) : (e(), c()) : y = 0 } function s(e, n, r, o, i, s, l) { function u(t) { if (!p && a(f.readyState) && (b.r = p = 1, !y && c(), f.onload = f.onreadystatechange = null, t)) for (var r in "img" != e && m((function () { w.removeChild(f) }), 50), T[n]) T[n].hasOwnProperty(r) && T[n][r].onload() } l = l || d.errorTimeout; var f = t.createElement(e), p = 0, g = 0, b = { t: r, s: n, e: i, a: s, x: l }; 1 === T[n] && (g = 1, T[n] = []), "object" == e ? f.data = n : (f.src = n, f.type = e), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function () { u.call(this, g) }, v.splice(o, 0, b), "img" != e && (g || 2 === T[n] ? (w.insertBefore(f, E ? null : h), m(u, l)) : T[n].push(f)) } function l(e, t, n, r, i) { return y = 0, t = t || "j", o(e) ? s("c" == t ? S : x, e, t, this.i++, n, r, i) : (v.splice(this.i++, 0, e), 1 == v.length && c()), this } function u() { var e = d; return e.loader = { load: l, i: 0 }, e } var f, d, p = t.documentElement, m = e.setTimeout, h = t.getElementsByTagName("script")[0], g = {}.toString, v = [], y = 0, b = "MozAppearance" in p.style, E = b && !!t.createRange().compareNode, w = E ? p : h.parentNode, x = (p = e.opera && "[object Opera]" == g.call(e.opera), p = !!t.attachEvent && !p, b ? "object" : p ? "script" : "img"), S = p ? "script" : x, C = Array.isArray || function (e) { return "[object Array]" == g.call(e) }, k = [], T = {}, j = { timeout: function (e, t) { return t.length && (e.timeout = t[0]), e } }; d = function (e) { function t(e, t, n, o, i) { var a = function (e) { e = e.split("!"); var t, n, r, o = k.length, i = e.pop(), a = e.length; for (i = { url: i, origUrl: i, prefixes: e }, n = 0; n < a; n++)r = e[n].split("="), (t = j[r.shift()]) && (i = t(i, r)); for (n = 0; n < o; n++)i = k[n](i); return i }(e), c = a.autoCallback; a.url.split(".").pop().split("?").shift(), a.bypass || (t && (t = r(t) ? t : t[e] || t[o] || t[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, t, n, o, i) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, n.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : undefined, a.noexec, a.attrs, a.timeout), (r(t) || r(c)) && n.load((function () { u(), t && t(a.origUrl, i, o), c && c(a.origUrl, i, o), T[a.url] = 2 })))) } function n(e, n) { function a(e, i) { if (e) { if (o(e)) i || (f = function () { var e = [].slice.call(arguments); d.apply(this, e), p() }), t(e, f, n, 0, l); else if (Object(e) === e) for (s in c = function () { var t, n = 0; for (t in e) e.hasOwnProperty(t) && n++; return n }(), e) e.hasOwnProperty(s) && (!i && ! --c && (r(f) ? f = function () { var e = [].slice.call(arguments); d.apply(this, e), p() } : f[s] = function (e) { return function () { var t = [].slice.call(arguments); e && e.apply(this, t), p() } }(d[s])), t(e[s], f, n, s, l)) } else !i && p() } var c, s, l = !!e.test, u = e.load || e.both, f = e.callback || i, d = f, p = e.complete || i; a(l ? e.yep : e.nope, !!u), u && a(u) } var a, c, s = this.yepnope.loader; if (o(e)) t(e, 0, s, 0); else if (C(e)) for (a = 0; a < e.length; a++)o(c = e[a]) ? t(c, 0, s, 0) : C(c) ? d(c) : Object(c) === c && n(c, s); else Object(e) === e && n(e, s) }, d.addPrefix = function (e, t) { j[e] = t }, d.addFilter = function (e) { k.push(e) }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f = function () { t.removeEventListener("DOMContentLoaded", f, 0), t.readyState = "complete" }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function (e, n, r, o, s, l) { var u, f, p = t.createElement("script"); o = o || d.errorTimeout; for (f in p.src = e, r) p.setAttribute(f, r[f]); n = l ? c : n || i, p.onreadystatechange = p.onload = function () { !u && a(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null) }, m((function () { u || (u = 1, n(1)) }), o), s ? p.onload() : h.parentNode.insertBefore(p, h) }, e.yepnope.injectCss = function (e, n, r, o, a, s) { var l; o = t.createElement("link"), n = s ? c : n || i; for (l in o.href = e, o.rel = "stylesheet", o.type = "text/css", r) o.setAttribute(l, r[l]); a || (h.parentNode.insertBefore(o, h), m(n, 0)) } }(this, document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };