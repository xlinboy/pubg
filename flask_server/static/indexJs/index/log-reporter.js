window.webpackLogReporter = function (e) {
    function t(t) {
        for (var n, o, i = t[0], s = t[1], a = 0, u = []; a < i.length; a++) o = i[a], r[o] && u.push(r[o][0]), r[o] = 0;
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        for (c && c(t); u.length;) u.shift()()
    }

    var n = {}, r = {0: 0};

    function o(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }

    o.e = function (e) {
        var t = [], n = r[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var i = new Promise(function (t, o) {
                n = r[e] = [t, o]
            });
            t.push(n[2] = i);
            var s, a = document.getElementsByTagName("head")[0], c = document.createElement("script");
            c.charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.src = function (e) {
                return o.p + "" + ({}[e] || e) + "." + {
                    1: "a7cf8",
                    2: "ba786",
                    3: "5cb84",
                    4: "dd0ae",
                    5: "24592"
                }[e] + ".function.chunk.js"
            }(e), s = function (t) {
                c.onerror = c.onload = null, clearTimeout(u);
                var n = r[e];
                if (0 !== n) {
                    if (n) {
                        var o = t && ("load" === t.type ? "missing" : t.type), i = t && t.target && t.target.src,
                            s = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
                        s.type = o, s.request = i, n[1](s)
                    }
                    r[e] = void 0
                }
            };
            var u = setTimeout(function () {
                s({type: "timeout", target: c})
            }, 12e4);
            c.onerror = c.onload = s, a.appendChild(c)
        }
        return Promise.all(t)
    }, o.m = e, o.c = n, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "//s1.hdslb.com/bfs/seed/jinkela/short/report-new/", o.oe = function (e) {
        throw e
    };
    var i = window.webpackJsonpwebpackLogReporter = window.webpackJsonpwebpackLogReporter || [], s = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var a = 0; a < i.length; a++) t(i[a]);
    var c = s;
    return o(o.s = 79)
}([function (e, t, n) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    t.a = {
        getSpmPrefix: function () {
            for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++) if ("spm_prefix" === e[t].getAttribute("name")) return e[t].getAttribute("content");
            return ""
        }, getPType: function () {
            for (var e = document.getElementsByTagName("meta"), t = 0; t < e.length; t++) if ("spm_ptype" === e[t].getAttribute("name")) return e[t].getAttribute("content")
        }, assignObject: function () {
            for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            for (var o in n[0]) e[o] = n[0][o];
            for (var i = 1; i < n.length; i++) {
                var s = n[i];
                for (var o in s) e[o] = s[o]
            }
            return e
        }, cloneObj: function (e) {
            function t(t) {
                return e.apply(this, arguments)
            }

            return t.toString = function () {
                return e.toString()
            }, t
        }(function (e) {
            var t, n = e.constructor === Array ? [] : {};
            if ("object" === r(e)) {
                if (window.JSON) t = JSON.stringify(e), n = JSON.parse(t); else for (var o in e) n[o] = "object" === r(e[o]) ? cloneObj(e[o]) : e[o];
                return n
            }
        }), isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
        }, getCookie: function (e) {
            var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (t = document.cookie.match(n)) ? unescape(t[2]) : null
        }, setCookie: function (e, t, n, r) {
            var o = new Date;
            return o.setTime(o.getTime() + 1e3 * n), document.cookie = e + "=" + escape(t) + ";expires=" + o.toGMTString() + (r ? ";domain=".concat(r, ";path=/") : ""), t
        }, getQueryParam: function (e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), n = window.location.search.substr(1).match(t);
            return null != n ? unescape(n[2]) : null
        }, addQueryParam: function (e, t, n) {
            var r = "";
            e.indexOf("#") >= 0 && (r = e.split("#")[1], e = e.split("#")[0]);
            var o = e.split("?")[1], i = e.split("?")[0], s = new RegExp("(^|&)(" + t + ")=[^&]*");
            return s.test(o) ? i + "?" + (o = o.replace(s, "$1$2=" + n)) + ("" === r ? "" : "#" + r) : i + "?" + (o ? o + "&" : "") + t + "=" + n + (r ? "#" + r : "")
        }, throttleV2: function (e, t, n, r) {
            var o, i = null;
            return function () {
                var s = this, a = arguments, c = +new Date;
                clearTimeout(i), r && "function" == typeof r && r(), o || (o = c), c - o >= n ? (e.apply(s, a), o = c) : i = setTimeout(function () {
                    e.apply(s, a)
                }, t)
            }
        }, isIE: function (e) {
            var t = document.createElement("b");
            return t.innerHTML = "\x3c!--[if IE " + e + "]><i></i><![endif]--\x3e", 1 === t.getElementsByTagName("i").length
        }, hexEncode: function (e) {
            for (var t = "", n = e.length, r = 0; r < n; r++) {
                t += e.charCodeAt(r).toString(16)
            }
            return "b_" + t
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(7), o = n(0), i = n(12);

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var a = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) try {
                    throw new TypeError("Cannot call a class as a function")
                } catch (e) {
                }
            }(this, e), this.requestQueue = [], this.currentPool = [], this.requestLimit = 6, this.msgObjects = [], this.baseURL = "//data.bilibili.com/log/web", this.errorReportURL = "//dataflow.biliapi.com/log/system", this.spmPrefix = o.a.getSpmPrefix(), this.ptype = i.a.ptype(), this.supportH5 = !1, this.initLoginIdConfig(), this.updateConfig()
        }

        var t, n, a;
        return t = e, (n = [{
            key: "initLoginIdConfig", value: function () {
                this.loginIdConfig = {
                    appear: "000016",
                    click: "000017",
                    pv: "000014",
                    abtest: "001449",
                    performance: "000015",
                    h5_selfDef: "000080",
                    errorLog: "000808"
                }
            }
        }, {
            key: "updateConfig", value: function () {
                var e = this.loginIdConfig, t = (new Date).getTime().toString(),
                    n = encodeURIComponent(window.location.href), r = window.innerWidth || document.body.clientWidth,
                    i = window.innerHeight || document.body.clientHeight;
                this.msgConfig = {
                    common: {
                        loginId: "",
                        url: n,
                        refer_url: document.referrer ? encodeURIComponent(document.referrer) : "",
                        spm_id: this.spmPrefix ? this.spmPrefix + ".0.0" : "",
                        timestamp: t,
                        fts: o.a.getCookie("fts") ? o.a.getCookie("fts") : "",
                        browser_resolution: r + "x" + i,
                        ptype: this.ptype
                    },
                    appear: {
                        loginId: e.appear + t,
                        url: n,
                        spm_id: this.spmPrefix + ".0.0",
                        timestamp: t,
                        browser_resolution: r + "x" + i,
                        ptype: this.ptype,
                        msg: ""
                    },
                    click: {
                        loginId: e.click + t,
                        url: n,
                        spm_id: this.spmPrefix + ".0.0",
                        target_url: "",
                        timestamp: t,
                        screenx: "",
                        screeny: "",
                        browser_resolution: r + "x" + i,
                        ptype: this.ptype,
                        msg: "",
                        abtest: window.abtest ? window.abtest : JSON.stringify({}),
                        refer_url: document.referrer ? encodeURIComponent(document.referrer) : "",
                        _uuid: o.a.getCookie("_uuid")
                    },
                    pv: {
                        loginId: e.pv + t,
                        url: n,
                        refer_url: document.referrer ? encodeURIComponent(document.referrer) : "",
                        spm_id: this.spmPrefix ? this.spmPrefix + ".0.0" : "",
                        timestamp: t,
                        fts: o.a.getCookie("fts") ? o.a.getCookie("fts") : "",
                        browser_resolution: r + "x" + i,
                        ptype: this.ptype,
                        msg: "",
                        abtest: window.abtest ? window.abtest : JSON.stringify({}),
                        _uuid: o.a.getCookie("_uuid")
                    },
                    abtest: {
                        loginId: e.abtest + t,
                        url: n,
                        refer_url: document.referrer ? encodeURIComponent(document.referrer) : "",
                        spm_id: this.spmPrefix ? this.spmPrefix + ".0.0" : "",
                        timestamp: t,
                        fts: o.a.getCookie("fts") ? o.a.getCookie("fts") : "",
                        browser_resolution: r + "x" + i,
                        ptype: this.ptype,
                        msg: "",
                        abtest: window.abtest ? window.abtest : JSON.stringify({}),
                        _uuid: o.a.getCookie("_uuid")
                    },
                    performance: {
                        loginId: e.performance + t,
                        url: n,
                        spm_id: this.spmPrefix ? this.spmPrefix + ".0.0" : "",
                        browser_resolution: r + "x" + i,
                        navigationStart: "",
                        unloadEventStart: "",
                        unloadEventEnd: "",
                        redirectStart: "",
                        redirectEnd: "",
                        fetchStart: "",
                        domainLookupStart: "",
                        domainLookupEnd: "",
                        connectStart: "",
                        connectEnd: "",
                        secureConnectionStart: "",
                        requestStart: "",
                        responseStart: "",
                        responseEnd: "",
                        domLoading: "",
                        domInteractive: "",
                        domContentLoadedEventStart: "",
                        domContentLoadedEventEnd: "",
                        domComplete: "",
                        loadEventStart: "",
                        loadEventEnd: "",
                        firstscreenfinish: "",
                        ptype: this.ptype,
                        msg: ""
                    },
                    h5_selfDef: {
                        loginId: e.h5_selfDef + t,
                        url: n,
                        refer_url: document.referrer ? encodeURIComponent(document.referrer) : "",
                        spm_id: this.spmPrefix + ".0.0",
                        timestamp: t,
                        fts: o.a.getCookie("fts") ? o.a.getCookie("fts") : "",
                        browser_resolution: r + "x" + i,
                        ptype: this.ptype,
                        avid: 0,
                        bsource: "default",
                        args: void 0,
                        abtest: 1
                    },
                    errorLog: {loginId: e.errorLog + t, msg: ""}
                }
            }
        }, {
            key: "setSupportH5", value: function (e) {
                this.supportH5 = !0, this.h5reporter = e
            }
        }, {
            key: "setSupportTryCatch", value: function (e) {
                this.supportTryCatch = !0, this.errorReporter = e
            }
        }, {
            key: "setSearchPage", value: function () {
                var e = (new Date).getTime();
                this.secondMsgConfig = o.a.cloneObj(this.msgConfig), this.secondMsgConfig.click.loginId = "000045" + e, this.secondMsgConfig.pv.loginId = "000043" + e, this.secondMsgConfig.performance.loginId = "000044" + e, delete this.secondMsgConfig.pv.abtest, delete this.secondMsgConfig.click.abtest, delete this.secondMsgConfig.errorLog, delete this.secondMsgConfig.appear, delete this.secondMsgConfig.h5_selfDef
            }
        }, {
            key: "setSPM_id", value: function (e) {
                this.spmPrefix = e, this.updateConfig()
            }
        }, {
            key: "transporter", value: function (e) {
                this.msgObjects.push(e)
            }
        }, {
            key: "sendUnloadEvent", value: function () {
                var e = {screenx: 0, screeny: 0};
                e.timestamp = Date.parse(new Date), e.spm_id = this.spmPrefix + ".selfDef.unload", e.target_url = "", this.receiveMsg({
                    type: "click",
                    obj: e
                })
            }
        }, {
            key: "checkRequests", value: function () {
                this.checkMsgObjects(), this.checkrequestPool()
            }
        }, {
            key: "checkMsgObjects", value: function () {
                if (0 !== this.msgObjects.length) for (var e in this.msgObjects) {
                    var t = this.msgObjects[e];
                    for (var n in t) {
                        var r = {screenx: 0, screeny: 0};
                        if (r.timestamp = Date.parse(new Date), r.url = encodeURIComponent(window.location.href), this.supportH5 && ("click" === n || "pv" === n)) return "click" === n ? r.spm_id = this.spmPrefix + ".click." + t[n] : "pv" === n && (r.spm_id = this.spmPrefix + ".pv." + t[n]), delete t[n], void this.h5reporter.send(r);
                        if (this.supportTryCatch && "tryCatchError" === n) return this.errorReporter.tryCatchError(t[n]), void delete t[n];
                        r.spm_id = this.spmPrefix + ".selfDef." + n, r.target_url = "";
                        var o = {};
                        o.event = n, o.value = t[n];
                        var i = JSON.stringify(o);
                        r.msg = i.replace(/"/g, "%22"), delete t[n];
                        var s = {type: "click", obj: r};
                        this.receiveMsg(s)
                    }
                }
            }
        }, {
            key: "checkrequestPool", value: function () {
                if (0 !== this.requestQueue.length) {
                    var e = this.requestQueue.length;
                    e > this.requestLimit ? (this.currentPool = this.requestQueue.splice(0, this.requestLimit), this.sendGroupMsg()) : e > 0 && (this.currentPool = this.requestQueue.splice(0, e), this.sendGroupMsg())
                }
            }
        }, {
            key: "forceFlush", value: function () {
                this.checkRequests()
            }
        }, {
            key: "reportWithAdditionalParam", value: function (e) {
                var t = o.a.assignObject(this.msgConfig.common, e);
                this.sendMsg(t)
            }
        }, {
            key: "receiveMsg", value: function (e) {
                var t = e.type;
                e = e.obj;
                var n = o.a.assignObject(this.msgConfig[t], e);
                if (this.sendMsg(n), this.secondMsgConfig && this.secondMsgConfig[t]) {
                    var r = o.a.assignObject(this.secondMsgConfig[t], e);
                    this.sendMsg(r)
                }
            }
        }, {
            key: "receiveGroupMsg", value: function (e) {
                var t = e.type;
                e = e.obj;
                var n = o.a.assignObject(this.msgConfig[t], e);
                if (this.requestQueue.push(n), this.secondMsgConfig && this.secondMsgConfig[t]) {
                    var r = o.a.assignObject(this.secondMsgConfig[t], e);
                    this.requestQueue.push(r)
                }
            }
        }, {
            key: "sendMsg", value: function (e) {
                var t = "";
                for (var n in e) {
                    if ("toJSON" !== n || "function" != typeof e[n]) t += ("function" == typeof e[n] ? e[n].call(this) : e[n]) + "|"
                }
                t = (t = t.substring(0, t.length - 1)).replace(/\|/, ""), 0 === e.loginId.indexOf(this.loginIdConfig.click) || 0 === e.loginId.indexOf(this.loginIdConfig.h5_selfDef) ? r.a.useBeacon(this.baseURL, t) : 0 === e.loginId.indexOf(this.loginIdConfig.errorLog) ? r.a.sendPostRequest(this.errorReportURL, t) : r.a.sendGetRequest(this.baseURL, t)
            }
        }, {
            key: "sendGroupMsg", value: function () {
                var e = this;
                0 !== this.currentPool.length && this.currentPool.forEach(function (t) {
                    e.sendMsg(t)
                })
            }
        }]) && s(t.prototype, n), a && s(t, a), e
    }();
    t.a = new a
}, function (e, t, n) {
    var r = n(30)("wks"), o = n(21), i = n(3).Symbol, s = "function" == typeof i;
    (e.exports = function (e) {
        return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
    }).store = r
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t) {
    var n = e.exports = {version: "2.5.7"};
    "number" == typeof __e && (__e = n)
}, function (e, t, n) {
    var r = n(9);
    e.exports = function (e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t, n) {
    var r = n(14), o = n(32);
    e.exports = n(10) ? function (e, t, n) {
        return r.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var i = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) try {
                    throw new TypeError("Cannot call a class as a function")
                } catch (e) {
                }
            }(this, e)
        }

        var t, n, i;
        return t = e, (n = [{
            key: "contructor", value: function () {
                this.ie8 = r.a.isIE(8), this.ie9 = r.a.isIE(9)
            }
        }, {
            key: "useBeacon", value: function (e, t, n) {
                if (navigator.sendBeacon) {
                    var r = "?" + t;
                    navigator.sendBeacon(e + r)
                } else this.sendGetRequest(e, t, n)
            }
        }, {
            key: "sendPostRequest", value: function (e, t) {
                var n = new XMLHttpRequest;
                n.open("post", e, !0), n.onreadystatechange = function (e) {
                    if (4 === this.readyState && 200 === this.status) this.responseText
                }, n.ontimeout = function (e) {
                }, n.onerror = function (e) {
                }, n.send(t)
            }
        }, {
            key: "sendGetRequest", value: function (e, t, n) {
                var r = "?" + t;
                if (window.XDomainRequest) {
                    var o = new XDomainRequest;
                    o && (o.onload = function () {
                        n && "function" == typeof n && n.call(window)
                    }, o.ontimeout = function () {
                    }, o.onerror = function (e) {
                    }, o.open("get", e + r), o.send())
                } else {
                    var i = new XMLHttpRequest;
                    i.open("GET", e + r, !0), i.withCredentials = !0, i.onreadystatechange = function (e) {
                        4 == this.readyState && 200 == this.status && n && "function" == typeof n && n.call(window)
                    }, i.ontimeout = function (e) {
                    }, i.onerror = function (e) {
                    }, i.send()
                }
            }
        }, {
            key: "ajax", value: function (e) {
                (e = e || {}).type = (e.type || "GET").toUpperCase(), e.dataType = e.dataType || "json";
                var t, n = function (e) {
                    var t = [];
                    for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.push(("v=" + Math.random()).replace(".", "")), t.join("&")
                }(e.data);
                (t = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function () {
                    if (4 === t.readyState) {
                        var n = t.status;
                        if (n >= 200 && n < 300) {
                            var r;
                            try {
                                r = JSON.parse(t.responseText)
                            } catch (e) {
                                r = t.responseText
                            }
                            e.success && e.success(r, t.responseXML)
                        } else e.fail && e.fail(n)
                    }
                }, "GET" === e.type ? (t.open("GET", e.url + "?" + n, !0), t.withCredentials = !0, t.send(null)) : "POST" === e.type && (t.open("POST", e.url, !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send(n))
            }
        }]) && o(t.prototype, n), i && o(t, i), e
    }();
    t.a = new i
}, function (e, t, n) {
    var r = n(3), o = n(6), i = n(15), s = n(21)("src"), a = Function.toString, c = ("" + a).split("toString");
    n(4).inspectSource = function (e) {
        return a.call(e)
    }, (e.exports = function (e, t, n, a) {
        var u = "function" == typeof n;
        u && (i(n, "name") || o(n, "name", t)), e[t] !== n && (u && (i(n, s) || o(n, s, e[t] ? "" + e[t] : c.join(String(t)))), e === r ? e[t] = n : a ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
    })(Function.prototype, "toString", function () {
        return "function" == typeof this && this[s] || a.call(this)
    })
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    e.exports = function (e) {
        return "object" === n(e) ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    e.exports = !n(31)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    "use strict";
    var r = n(0), o = function () {
        var e, t = navigator.userAgent;
        navigator.appVersion;
        return {
            mobile: /AppleWebKit.*Mobile.*/i.test(t),
            ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(t),
            android: /Android/i.test(t) || /Linux/i.test(t),
            windowsphone: /Windows Phone/i.test(t),
            iPhone: /iPhone/i.test(t),
            iPad: /iPad/i.test(t),
            webApp: !/Safari/i.test(t),
            MicroMessenger: /MicroMessenger/i.test(t),
            weibo: /Weibo/i.test(t),
            uc: /UCBrowser/i.test(t),
            qq: /MQQBrowser/i.test(t),
            baidu: /Baidu/i.test(t),
            mqq: /QQ\/([\d\.]+)/i.test(t),
            mbaidu: /baiduboxapp/i.test(t),
            iqiyi: /iqiyi/i.test(t),
            QQLive: /QQLive/i.test(t),
            Safari: (e = navigator.userAgent, !(!/ OS \d/.test(e) || ~e.indexOf("CriOS") || e.indexOf("Mozilla") || !/Safari\/[\d\.]+$/.test(e))),
            Youku: /youku/i.test(t),
            chrome: /CriOS/i.test(t),
            CMDC: /CMDC/i.test(t),
            xiaomiqjs: /MiuiQuickSearchBox/.test(t),
            baiduspider: /Baiduspider/.test(t)
        }
    }();
    (navigator.browserLanguage || navigator.language).toLowerCase();
    t.a = {
        identify: function () {
            var e, t = r.a.getQueryParam("bsource") ? r.a.getQueryParam("bsource").toLowerCase() : "";
            if (t) e = t; else if (document.referrer && /(.)*((baike.so.com)|(m.so.com)|(m.image.so.com)|(m.video.so.com)|(www.so.com)|(\.baidu.com)|(\.google.com)|(\.sm.cn)|(m.soso.com)|(www.soso.com)|(\.sogou.com)|(\.bing.com))/.test(document.referrer)) {
                var n = document.referrer;
                /(.)*((baike.so.com)|(m.image.so.com)|(m.so.com)|(m.video.so.com)|(www.so.com))/.test(n) ? e = "seo_360" : /(.)*\.baidu.com/.test(n) ? e = "seo_baidu" : /(.)*\.google.com/.test(n) ? e = "seo_google" : /(.)*\.sm.cn/.test(n) ? e = "seo_sm" : /(.)*((m.soso.com)|(www.soso.com)|(\.sogou.com))/.test(n) ? e = "seo_sougo" : /(.)*\.bing.com/.test(n) && (e = "seo_bing")
            } else r.a.getCookie("bsource") ? e = r.a.getCookie("bsource") : o.baiduspider ? e = "baiduspider" : o.QQLive ? e = "qqlive" : o.mqq ? e = "qq" : o.weibo ? e = "weibo" : o.MicroMessenger ? e = "wechat" : o.mbaidu ? e = "bdbox" : o.iqiyi ? e = "iqiyi_video_app" : o.qq ? e = "qqbrowser_app" : o.uc ? e = "uc_browser_app" : o.xiaomiqjs && (e = "xiaomiqjs");
            return e
        }, ptype: function () {
            var e = r.a.getPType();
            if (e) return e;
            var t = navigator.userAgent.toLowerCase(), n = "ipad" == t.match(/ipad/i),
                o = "iphone os" == t.match(/iphone os/i), i = "midp" == t.match(/midp/i),
                s = "rv:1.2.3.4" == t.match(/rv:1.2.3.4/i), a = "ucweb" == t.match(/ucweb/i),
                c = "android" == t.match(/android/i), u = "windows ce" == t.match(/windows ce/i),
                f = "windows mobile" == t.match(/windows mobile/i);
            return n || o || i || s || a || c || u || f ? 2 : 1
        }
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    var r = n(5), o = n(48), i = n(49), s = Object.defineProperty;
    t.f = n(10) ? Object.defineProperty : function (e, t, n) {
        if (r(e), t = i(t, !0), r(n), o) try {
            return s(e, t, n)
        } catch (e) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    var r = n(3), o = n(4), i = n(6), s = n(8), a = n(17), c = function e(t, n, c) {
        var u, f, l, p, h = t & e.F, d = t & e.G, v = t & e.P, m = t & e.B,
            g = d ? r : t & e.S ? r[n] || (r[n] = {}) : (r[n] || {}).prototype, y = d ? o : o[n] || (o[n] = {}),
            b = y.prototype || (y.prototype = {});
        for (u in d && (c = n), c) l = ((f = !h && g && void 0 !== g[u]) ? g : c)[u], p = m && f ? a(l, r) : v && "function" == typeof l ? a(Function.call, l) : l, g && s(g, u, l, t & e.U), y[u] != l && i(y, u, p), v && b[u] != l && (b[u] = l)
    };
    r.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function (e, t, n) {
    var r = n(18);
    e.exports = function (e, t, n) {
        if (r(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, o) {
                    return e.call(t, n, r, o)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t, n) {
    var r = n(13), o = n(2)("toStringTag"), i = "Arguments" == r(function () {
        return arguments
    }());
    e.exports = function (e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function (e, t) {
            try {
                return e[t]
            } catch (e) {
            }
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}, function (e, t) {
    e.exports = !1
}, function (e, t) {
    var n = 0, r = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function (e, t, n) {
    var r = n(9), o = n(3).document, i = r(o) && r(o.createElement);
    e.exports = function (e) {
        return i ? o.createElement(e) : {}
    }
}, function (e, t) {
    var n = Math.ceil, r = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t, n) {
    var r = n(56), o = n(24);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t, n) {
    var r = n(30)("keys"), o = n(21);
    e.exports = function (e) {
        return r[e] || (r[e] = o(e))
    }
}, function (e, t, n) {
    var r = n(14).f, o = n(15), i = n(2)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
    }
}, function (e, t, n) {
    "use strict";
    var r = n(18);
    e.exports.f = function (e) {
        return new function (e) {
            var t, n;
            this.promise = new e(function (e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            }), this.resolve = r(t), this.reject = r(n)
        }(e)
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return o
    });
    var r = n(0);

    function o() {
        if (!r.a.getCookie("finger")) try {
            var e = document.createElement("canvas"), t = e.getContext("2d"),
                n = "i am the finger-printing in this broswer";
            t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "tencent", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, 4, 17);
            var o = e.toDataURL().replace("data:image/png;base64,", ""), i = atob(o),
                s = this.bin2hex(i.slice(-16, -12));
            r.a.setCookie("finger", s)
        } catch (e) {
        }
    }
}, function (e, t, n) {
    var r = n(4), o = n(3), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: r.version,
        mode: n(20) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t, n) {
    "use strict";
    var r = n(20), o = n(16), i = n(8), s = n(6), a = n(11), c = n(52), u = n(27), f = n(59), l = n(2)("iterator"),
        p = !([].keys && "next" in [].keys()), h = function () {
            return this
        };
    e.exports = function (e, t, n, d, v, m, g) {
        c(n, t, d);
        var y, b, w, x = function (e) {
                if (!p && e in C) return C[e];
                switch (e) {
                    case"keys":
                    case"values":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }, k = t + " Iterator", _ = "values" == v, S = !1, C = e.prototype, P = C[l] || C["@@iterator"] || v && C[v],
            O = P || x(v), T = v ? _ ? x("entries") : O : void 0, j = "Array" == t && C.entries || P;
        if (j && (w = f(j.call(new e))) !== Object.prototype && w.next && (u(w, k, !0), r || "function" == typeof w[l] || s(w, l, h)), _ && P && "values" !== P.name && (S = !0, O = function () {
            return P.call(this)
        }), r && !g || !p && !S && C[l] || s(C, l, O), a[t] = O, a[k] = h, v) if (y = {
            values: _ ? O : x("values"),
            keys: m ? O : x("keys"),
            entries: T
        }, g) for (b in y) b in C || i(C, b, y[b]); else o(o.P + o.F * (p || S), t, y);
        return y
    }
}, function (e, t, n) {
    var r = n(55), o = n(36);
    e.exports = Object.keys || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(23), o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
    var r = n(3).document;
    e.exports = r && r.documentElement
}, function (e, t, n) {
    var r = n(5), o = n(18), i = n(2)("species");
    e.exports = function (e, t) {
        var n, s = r(e).constructor;
        return void 0 === s || void 0 == (n = r(s)[i]) ? t : o(n)
    }
}, function (e, t, n) {
    var r, o, i, s = n(17), a = n(71), c = n(37), u = n(22), f = n(3), l = f.process, p = f.setImmediate,
        h = f.clearImmediate, d = f.MessageChannel, v = f.Dispatch, m = 0, g = {}, y = function () {
            var e = +this;
            if (g.hasOwnProperty(e)) {
                var t = g[e];
                delete g[e], t()
            }
        }, b = function (e) {
            y.call(e.data)
        };
    p && h || (p = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return g[++m] = function () {
            a("function" == typeof e ? e : Function(e), t)
        }, r(m), m
    }, h = function (e) {
        delete g[e]
    }, "process" == n(13)(l) ? r = function (e) {
        l.nextTick(s(y, e, 1))
    } : v && v.now ? r = function (e) {
        v.now(s(y, e, 1))
    } : d ? (i = (o = new d).port2, o.port1.onmessage = b, r = s(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function (e) {
        f.postMessage(e + "", "*")
    }, f.addEventListener("message", b, !1)) : r = "onreadystatechange" in u("script") ? function (e) {
        c.appendChild(u("script")).onreadystatechange = function () {
            c.removeChild(this), y.call(e)
        }
    } : function (e) {
        setTimeout(s(y, e, 1), 0)
    }), e.exports = {set: p, clear: h}
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {e: !1, v: e()}
        } catch (e) {
            return {e: !0, v: e}
        }
    }
}, function (e, t, n) {
    var r = n(5), o = n(9), i = n(28);
    e.exports = function (e, t) {
        if (r(e), o(t) && t.constructor === e) return t;
        var n = i.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function (e, t, n) {
    "use strict";
    (function (t) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var o = n(44), i = n(45), s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i, a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            c = [["#", "hash"], ["?", "query"], function (e) {
                return e.replace("\\", "/")
            }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
            u = {hash: 1, query: 1};

        function f(e) {
            var n, o = t && t.location || {}, i = {}, s = r(e = e || o);
            if ("blob:" === e.protocol) i = new p(unescape(e.pathname), {}); else if ("string" === s) for (n in i = new p(e, {}), u) delete i[n]; else if ("object" === s) {
                for (n in e) n in u || (i[n] = e[n]);
                void 0 === i.slashes && (i.slashes = a.test(e.href))
            }
            return i
        }

        function l(e) {
            var t = s.exec(e);
            return {protocol: t[1] ? t[1].toLowerCase() : "", slashes: !!t[2], rest: t[3]}
        }

        function p(e, t, n) {
            if (!(this instanceof p)) return new p(e, t, n);
            var s, a, u, h, d, v, m = c.slice(), g = r(t), y = this, b = 0;
            for ("object" !== g && "string" !== g && (n = t, t = null), n && "function" != typeof n && (n = i.parse), t = f(t), s = !(a = l(e || "")).protocol && !a.slashes, y.slashes = a.slashes || s && t.slashes, y.protocol = a.protocol || t.protocol || "", e = a.rest, a.slashes || (m[3] = [/(.*)/, "pathname"]); b < m.length; b++) "function" != typeof(h = m[b]) ? (u = h[0], v = h[1], u != u ? y[v] = e : "string" == typeof u ? ~(d = e.indexOf(u)) && ("number" == typeof h[2] ? (y[v] = e.slice(0, d), e = e.slice(d + h[2])) : (y[v] = e.slice(d), e = e.slice(0, d))) : (d = u.exec(e)) && (y[v] = d[1], e = e.slice(0, d.index)), y[v] = y[v] || s && h[3] && t[v] || "", h[4] && (y[v] = y[v].toLowerCase())) : e = h(e);
            n && (y.query = n(y.query)), s && t.slashes && "/" !== y.pathname.charAt(0) && ("" !== y.pathname || "" !== t.pathname) && (y.pathname = function (e, t) {
                for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], i = !1, s = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), s++) : s && (0 === r && (i = !0), n.splice(r, 1), s--);
                return i && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/")
            }(y.pathname, t.pathname)), o(y.port, y.protocol) || (y.host = y.hostname, y.port = ""), y.username = y.password = "", y.auth && (h = y.auth.split(":"), y.username = h[0] || "", y.password = h[1] || ""), y.origin = y.protocol && y.host && "file:" !== y.protocol ? y.protocol + "//" + y.host : "null", y.href = y.toString()
        }

        p.prototype = {
            set: function (e, t, n) {
                var r = this;
                switch (e) {
                    case"query":
                        "string" == typeof t && t.length && (t = (n || i.parse)(t)), r[e] = t;
                        break;
                    case"port":
                        r[e] = t, o(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname, r[e] = "");
                        break;
                    case"hostname":
                        r[e] = t, r.port && (t += ":" + r.port), r.host = t;
                        break;
                    case"host":
                        r[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), r.port = t.pop(), r.hostname = t.join(":")) : (r.hostname = t, r.port = "");
                        break;
                    case"protocol":
                        r.protocol = t.toLowerCase(), r.slashes = !n;
                        break;
                    case"pathname":
                    case"hash":
                        if (t) {
                            var s = "pathname" === e ? "/" : "#";
                            r[e] = t.charAt(0) !== s ? s + t : t
                        } else r[e] = t;
                        break;
                    default:
                        r[e] = t
                }
                for (var a = 0; a < c.length; a++) {
                    var u = c[a];
                    u[4] && (r[u[1]] = r[u[1]].toLowerCase())
                }
                return r.origin = r.protocol && r.host && "file:" !== r.protocol ? r.protocol + "//" + r.host : "null", r.href = r.toString(), r
            }, toString: function (e) {
                e && "function" == typeof e || (e = i.stringify);
                var t, n = this, o = n.protocol;
                o && ":" !== o.charAt(o.length - 1) && (o += ":");
                var s = o + (n.slashes ? "//" : "");
                return n.username && (s += n.username, n.password && (s += ":" + n.password), s += "@"), s += n.host + n.pathname, (t = "object" === r(n.query) ? e(n.query) : n.query) && (s += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (s += n.hash), s
            }
        }, p.extractProtocol = l, p.location = f, p.qs = i, e.exports = p
    }).call(this, n(43))
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    var r;
    r = function () {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window)
    }
    e.exports = r
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        if (t = t.split(":")[0], !(e = +e)) return !1;
        switch (t) {
            case"http":
            case"ws":
                return 80 !== e;
            case"https":
            case"wss":
                return 443 !== e;
            case"ftp":
                return 21 !== e;
            case"gopher":
                return 70 !== e;
            case"file":
                return !1
        }
        return 0 !== e
    }
}, function (e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function o(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }

    t.stringify = function (e, t) {
        t = t || "";
        var n = [];
        for (var o in"string" != typeof t && (t = "?"), e) r.call(e, o) && n.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
        return n.length ? t + n.join("&") : ""
    }, t.parse = function (e) {
        for (var t, n = /([^=?&]+)=?([^&]*)/g, r = {}; t = n.exec(e);) {
            var i = o(t[1]), s = o(t[2]);
            i in r || (r[i] = s)
        }
        return r
    }
}, function (e, t, n) {
    n(47), n(50), n(61), n(65), n(77), n(78), e.exports = n(4).Promise
}, function (e, t, n) {
    "use strict";
    var r = n(19), o = {};
    o[n(2)("toStringTag")] = "z", o + "" != "[object z]" && n(8)(Object.prototype, "toString", function () {
        return "[object " + r(this) + "]"
    }, !0)
}, function (e, t, n) {
    e.exports = !n(10) && !n(31)(function () {
        return 7 != Object.defineProperty(n(22)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    var r = n(9);
    e.exports = function (e, t) {
        if (!r(e)) return e;
        var n, o;
        if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
        if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    "use strict";
    var r = n(51)(!0);
    n(33)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {value: void 0, done: !0} : (e = r(t, n), this._i += e.length, {value: e, done: !1})
    })
}, function (e, t, n) {
    var r = n(23), o = n(24);
    e.exports = function (e) {
        return function (t, n) {
            var i, s, a = String(o(t)), c = r(n), u = a.length;
            return c < 0 || c >= u ? e ? "" : void 0 : (i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? e ? a.charAt(c) : i : e ? a.slice(c, c + 2) : s - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(53), o = n(32), i = n(27), s = {};
    n(6)(s, n(2)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = r(s, {next: o(1, n)}), i(e, t + " Iterator")
    }
}, function (e, t, n) {
    var r = n(5), o = n(54), i = n(36), s = n(26)("IE_PROTO"), a = function () {
    }, c = function () {
        var e, t = n(22)("iframe"), r = i.length;
        for (t.style.display = "none", n(37).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; r--;) delete c.prototype[i[r]];
        return c()
    };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (a.prototype = r(e), n = new a, a.prototype = null, n[s] = e) : n = c(), void 0 === t ? n : o(n, t)
    }
}, function (e, t, n) {
    var r = n(14), o = n(5), i = n(34);
    e.exports = n(10) ? Object.defineProperties : function (e, t) {
        o(e);
        for (var n, s = i(t), a = s.length, c = 0; a > c;) r.f(e, n = s[c++], t[n]);
        return e
    }
}, function (e, t, n) {
    var r = n(15), o = n(25), i = n(57)(!1), s = n(26)("IE_PROTO");
    e.exports = function (e, t) {
        var n, a = o(e), c = 0, u = [];
        for (n in a) n != s && r(a, n) && u.push(n);
        for (; t.length > c;) r(a, n = t[c++]) && (~i(u, n) || u.push(n));
        return u
    }
}, function (e, t, n) {
    var r = n(13);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    var r = n(25), o = n(35), i = n(58);
    e.exports = function (e) {
        return function (t, n, s) {
            var a, c = r(t), u = o(c.length), f = i(s, u);
            if (e && n != n) {
                for (; u > f;) if ((a = c[f++]) != a) return !0
            } else for (; u > f; f++) if ((e || f in c) && c[f] === n) return e || f || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var r = n(23), o = Math.max, i = Math.min;
    e.exports = function (e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}, function (e, t, n) {
    var r = n(15), o = n(60), i = n(26)("IE_PROTO"), s = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}, function (e, t, n) {
    var r = n(24);
    e.exports = function (e) {
        return Object(r(e))
    }
}, function (e, t, n) {
    for (var r = n(62), o = n(34), i = n(8), s = n(3), a = n(6), c = n(11), u = n(2), f = u("iterator"), l = u("toStringTag"), p = c.Array, h = {
        CSSRuleList: !0,
        CSSStyleDeclaration: !1,
        CSSValueList: !1,
        ClientRectList: !1,
        DOMRectList: !1,
        DOMStringList: !1,
        DOMTokenList: !0,
        DataTransferItemList: !1,
        FileList: !1,
        HTMLAllCollection: !1,
        HTMLCollection: !1,
        HTMLFormElement: !1,
        HTMLSelectElement: !1,
        MediaList: !0,
        MimeTypeArray: !1,
        NamedNodeMap: !1,
        NodeList: !0,
        PaintRequestList: !1,
        Plugin: !1,
        PluginArray: !1,
        SVGLengthList: !1,
        SVGNumberList: !1,
        SVGPathSegList: !1,
        SVGPointList: !1,
        SVGStringList: !1,
        SVGTransformList: !1,
        SourceBufferList: !1,
        StyleSheetList: !0,
        TextTrackCueList: !1,
        TextTrackList: !1,
        TouchList: !1
    }, d = o(h), v = 0; v < d.length; v++) {
        var m, g = d[v], y = h[g], b = s[g], w = b && b.prototype;
        if (w && (w[f] || a(w, f, p), w[l] || a(w, l, g), c[g] = p, y)) for (m in r) w[m] || i(w, m, r[m], !0)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(63), o = n(64), i = n(11), s = n(25);
    e.exports = n(33)(Array, "Array", function (e, t) {
        this._t = s(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function (e, t, n) {
    var r = n(2)("unscopables"), o = Array.prototype;
    void 0 == o[r] && n(6)(o, r, {}), e.exports = function (e) {
        o[r][e] = !0
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {value: t, done: !!e}
    }
}, function (e, t, n) {
    "use strict";
    var r, o, i, s, a = n(20), c = n(3), u = n(17), f = n(19), l = n(16), p = n(9), h = n(18), d = n(66), v = n(67),
        m = n(38), g = n(39).set, y = n(72)(), b = n(28), w = n(40), x = n(73), k = n(41), _ = c.TypeError,
        S = c.process, C = S && S.versions, P = C && C.v8 || "", O = c.Promise, T = "process" == f(S), j = function () {
        }, M = o = b.f, E = !!function () {
            try {
                var e = O.resolve(1), t = (e.constructor = {})[n(2)("species")] = function (e) {
                    e(j, j)
                };
                return (T || "function" == typeof PromiseRejectionEvent) && e.then(j) instanceof t && 0 !== P.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
            } catch (e) {
            }
        }(), L = function (e) {
            var t;
            return !(!p(e) || "function" != typeof(t = e.then)) && t
        }, q = function (e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                y(function () {
                    for (var r = e._v, o = 1 == e._s, i = 0, s = function (t) {
                        var n, i, s, a = o ? t.ok : t.fail, c = t.resolve, u = t.reject, f = t.domain;
                        try {
                            a ? (o || (2 == e._h && A(e), e._h = 1), !0 === a ? n = r : (f && f.enter(), n = a(r), f && (f.exit(), s = !0)), n === t.promise ? u(_("Promise-chain cycle")) : (i = L(n)) ? i.call(n, c, u) : c(n)) : u(r)
                        } catch (e) {
                            f && !s && f.exit(), u(e)
                        }
                    }; n.length > i;) s(n[i++]);
                    e._c = [], e._n = !1, t && !e._h && R(e)
                })
            }
        }, R = function (e) {
            g.call(c, function () {
                var t, n, r, o = e._v, i = I(e);
                if (i && (t = w(function () {
                    T ? S.emit("unhandledRejection", o, e) : (n = c.onunhandledrejection) ? n({
                        promise: e,
                        reason: o
                    }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
                }), e._h = T || I(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
            })
        }, I = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        }, A = function (e) {
            g.call(c, function () {
                var t;
                T ? S.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({promise: e, reason: e._v})
            })
        }, N = function (e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), q(t, !0))
        }, U = function e(t) {
            var n, r = this;
            if (!r._d) {
                r._d = !0, r = r._w || r;
                try {
                    if (r === t) throw _("Promise can't be resolved itself");
                    (n = L(t)) ? y(function () {
                        var o = {_w: r, _d: !1};
                        try {
                            n.call(t, u(e, o, 1), u(N, o, 1))
                        } catch (e) {
                            N.call(o, e)
                        }
                    }) : (r._v = t, r._s = 1, q(r, !1))
                } catch (e) {
                    N.call({_w: r, _d: !1}, e)
                }
            }
        };
    E || (O = function (e) {
        d(this, O, "Promise", "_h"), h(e), r.call(this);
        try {
            e(u(U, this, 1), u(N, this, 1))
        } catch (e) {
            N.call(this, e)
        }
    }, (r = function (e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(74)(O.prototype, {
        then: function (e, t) {
            var n = M(m(this, O));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = T ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && q(this, !1), n.promise
        }, catch: function (e) {
            return this.then(void 0, e)
        }
    }), i = function () {
        var e = new r;
        this.promise = e, this.resolve = u(U, e, 1), this.reject = u(N, e, 1)
    }, b.f = M = function (e) {
        return e === O || e === s ? new i(e) : o(e)
    }), l(l.G + l.W + l.F * !E, {Promise: O}), n(27)(O, "Promise"), n(75)("Promise"), s = n(4).Promise, l(l.S + l.F * !E, "Promise", {
        reject: function (e) {
            var t = M(this);
            return (0, t.reject)(e), t.promise
        }
    }), l(l.S + l.F * (a || !E), "Promise", {
        resolve: function (e) {
            return k(a && this === s ? O : this, e)
        }
    }), l(l.S + l.F * !(E && n(76)(function (e) {
        O.all(e).catch(j)
    })), "Promise", {
        all: function (e) {
            var t = this, n = M(t), r = n.resolve, o = n.reject, i = w(function () {
                var n = [], i = 0, s = 1;
                v(e, !1, function (e) {
                    var a = i++, c = !1;
                    n.push(void 0), s++, t.resolve(e).then(function (e) {
                        c || (c = !0, n[a] = e, --s || r(n))
                    }, o)
                }), --s || r(n)
            });
            return i.e && o(i.v), n.promise
        }, race: function (e) {
            var t = this, n = M(t), r = n.reject, o = w(function () {
                v(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r)
                })
            });
            return o.e && r(o.v), n.promise
        }
    })
}, function (e, t) {
    e.exports = function (e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function (e, t, n) {
    var r = n(17), o = n(68), i = n(69), s = n(5), a = n(35), c = n(70), u = {}, f = {};
    (t = e.exports = function (e, t, n, l, p) {
        var h, d, v, m, g = p ? function () {
            return e
        } : c(e), y = r(n, l, t ? 2 : 1), b = 0;
        if ("function" != typeof g) throw TypeError(e + " is not iterable!");
        if (i(g)) {
            for (h = a(e.length); h > b; b++) if ((m = t ? y(s(d = e[b])[0], d[1]) : y(e[b])) === u || m === f) return m
        } else for (v = g.call(e); !(d = v.next()).done;) if ((m = o(v, y, d.value, t)) === u || m === f) return m
    }).BREAK = u, t.RETURN = f
}, function (e, t, n) {
    var r = n(5);
    e.exports = function (e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)), t
        }
    }
}, function (e, t, n) {
    var r = n(11), o = n(2)("iterator"), i = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}, function (e, t, n) {
    var r = n(19), o = n(2)("iterator"), i = n(11);
    e.exports = n(4).getIteratorMethod = function (e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)]
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function (e, t, n) {
    var r = n(3), o = n(39).set, i = r.MutationObserver || r.WebKitMutationObserver, s = r.process, a = r.Promise,
        c = "process" == n(13)(s);
    e.exports = function () {
        var e, t, n, u = function () {
            var r, o;
            for (c && (r = s.domain) && r.exit(); e;) {
                o = e.fn, e = e.next;
                try {
                    o()
                } catch (r) {
                    throw e ? n() : t = void 0, r
                }
            }
            t = void 0, r && r.enter()
        };
        if (c) n = function () {
            s.nextTick(u)
        }; else if (!i || r.navigator && r.navigator.standalone) if (a && a.resolve) {
            var f = a.resolve(void 0);
            n = function () {
                f.then(u)
            }
        } else n = function () {
            o.call(r, u)
        }; else {
            var l = !0, p = document.createTextNode("");
            new i(u).observe(p, {characterData: !0}), n = function () {
                p.data = l = !l
            }
        }
        return function (r) {
            var o = {fn: r, next: void 0};
            t && (t.next = o), e || (e = o, n()), t = o
        }
    }
}, function (e, t, n) {
    var r = n(3).navigator;
    e.exports = r && r.userAgent || ""
}, function (e, t, n) {
    var r = n(8);
    e.exports = function (e, t, n) {
        for (var o in t) r(e, o, t[o], n);
        return e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(3), o = n(14), i = n(10), s = n(2)("species");
    e.exports = function (e) {
        var t = r[e];
        i && t && !t[s] && o.f(t, s, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (e, t, n) {
    var r = n(2)("iterator"), o = !1;
    try {
        var i = [7][r]();
        i.return = function () {
            o = !0
        }, Array.from(i, function () {
            throw 2
        })
    } catch (e) {
    }
    e.exports = function (e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var i = [7], s = i[r]();
            s.next = function () {
                return {done: n = !0}
            }, i[r] = function () {
                return s
            }, e(i)
        } catch (e) {
        }
        return n
    }
}, function (e, t, n) {
    "use strict";
    var r = n(16), o = n(4), i = n(3), s = n(38), a = n(41);
    r(r.P + r.R, "Promise", {
        finally: function (e) {
            var t = s(this, o.Promise || i.Promise), n = "function" == typeof e;
            return this.then(n ? function (n) {
                return a(t, e()).then(function () {
                    return n
                })
            } : e, n ? function (n) {
                return a(t, e()).then(function () {
                    throw n
                })
            } : e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = n(16), o = n(28), i = n(40);
    r(r.S, "Promise", {
        try: function (e) {
            var t = o.f(this), n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0), o = n(1), i = n(42), s = n.n(i);

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var c = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) try {
                    throw new TypeError("Cannot call a class as a function")
                } catch (e) {
                }
            }(this, e), this.legalContainer = "report-wrap-module", this.bindEvent()
        }

        var t, n, i;
        return t = e, (n = [{
            key: "checkContainer", value: function (e) {
                return !(!e || "string" != typeof e) && e.indexOf(this.legalContainer) > -1
            }
        }, {
            key: "bindEvent", value: function (e) {
                var t = window.document;
                t.addEventListener ? t.addEventListener("click", this.eventCB.bind(this), !1) : t.attachEvent("onclick", this.eventCB.bind(this))
            }
        }, {
            key: "eventCB", value: function (e) {
                var t = o.a.spmPrefix + ".", n = (e = e || window.event).target || e.srcElement;
                3 === n.nodeType && (n = n.parentNode);
                for (var i = n, a = !1, c = null, u = ""; i.parentNode && !this.checkContainer(i.className);) {
                    "a" !== i.tagName.toLowerCase() || a || (a = !0, c = i, u = encodeURIComponent(c.getAttribute("href"))), i = i.parentNode
                }
                if (9 !== i.nodeType && (i.parentNode || this.checkContainer(i.className)) && a) {
                    for (var f = -1, l = i.getElementsByTagName("a"), p = 0, h = l.length; p < h; p++) if (l[p].isEqualNode && l[p].isEqualNode(c)) {
                        f = p + 1;
                        break
                    }
                    var d = null === i.id ? "navigationbar" : "" === i.id ? "1000" : i.id, v = t + d + "." + f,
                        m = t + r.a.hexEncode(d) + "." + f;
                    this.todo(n.id, u, e.screenX, e.screenY, v);
                    var g = decodeURIComponent(u), y = new s.a(g);
                    if (i.id && "null" !== g && y.hostname && 0 !== g.indexOf("#") && location.href !== y.href) {
                        var b = r.a.addQueryParam(g, "spm_id_from", m);
                        c.setAttribute("href", b)
                    }
                }
            }
        }, {
            key: "todo", value: function (e, t, n, r, i) {
                var s = {};
                s.screenx = n, s.screeny = r, s.timestamp = Date.parse(new Date), s.spm_id = i, s.target_url = t, s.msg = JSON.stringify({id: e}), o.a.receiveMsg({
                    type: "click",
                    obj: s
                })
            }
        }]) && a(t.prototype, n), i && a(t, i), e
    }(), u = n(29), f = n(7);

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var p = function () {
        function e() {
            !function (e, t) {
                if (!(e instanceof t)) try {
                    throw new TypeError("Cannot call a class as a function")
                } catch (e) {
                }
            }(this, e), Object(u.a)();
            var t = this, n = r.a.getCookie("_uuid");
            n && "null" !== n ? this._uuid = n : (this._uuid = this.generateUuid(), r.a.setCookie("_uuid", this._uuid, 31536e3)), r.a.getCookie("buvid3") ? this.sendPV() : this.getBuvid(function () {
                t.sendPV()
            })
        }

        var t, n, i;
        return t = e, (n = [{
            key: "getBuvid", value: function (e) {
                var t = {
                    mid: r.a.getCookie("DedeUserID"),
                    fts: r.a.getCookie("fts"),
                    url: encodeURIComponent(window.location.href),
                    proid: 3,
                    ptype: 2,
                    module: "game",
                    title: document.title,
                    ajaxtag: "",
                    ajaxid: "",
                    page_ref: document.referrer ? encodeURIComponent(document.referrer) : ""
                }, n = "";
                for (var o in t) n += o + "=" + t[o] + "&";
                n = n.substring(0, n.length - 1), f.a.sendGetRequest("//data.bilibili.com/v/web/web_page_view", n, function () {
                    e()
                })
            }
        }, {
            key: "generateUuid", value: function () {
                var e = this.generateUuidPart(8), t = this.generateUuidPart(4), n = this.generateUuidPart(4),
                    r = this.generateUuidPart(4), o = this.generateUuidPart(12), i = (new Date).getTime();
                return e + "-" + t + "-" + n + "-" + r + "-" + o + this.formatNum((i % 1e5).toString(), 5) + "infoc"
            }
        }, {
            key: "generateUuidPart", value: function (e) {
                for (var t = "", n = 0; n < e; n++) t += parseInt(16 * Math.random()).toString(16).toUpperCase();
                return this.formatNum(t, e)
            }
        }, {
            key: "formatNum", value: function (e, t) {
                var n = "";
                if (e.length < t) for (var r = 0; r < t - e.length; r++) n += "0";
                return n + e
            }
        }, {
            key: "sendPV", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                this.todo(e, t)
            }
        }, {
            key: "todo", value: function (e, t) {
                var n = {};
                if (localStorage && localStorage.index_user_setting) {
                    var r = JSON.parse(localStorage.index_user_setting).sort;
                    n.msg = JSON.stringify({sort: r})
                } else window.bsource && (n.msg = window.bsource);
                e && (n.refer_url = e), t && (n.msg = t), n._uuid = this._uuid;
                var i = {type: "pv", obj: n};
                o.a.receiveMsg(i)
            }
        }]) && l(t.prototype, n), i && l(t, i), e
    }();

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    var d = function () {
        function e(t, n, r) {
            !function (e, t) {
                if (!(e instanceof t)) try {
                    throw new TypeError("Cannot call a class as a function")
                } catch (e) {
                }
            }(this, e), this.interval = t, this.timer = null, this.pool = n, this.freq = r, this.startTimer()
        }

        var t, n, r;
        return t = e, (n = [{
            key: "startTimer", value: function () {
                var e = this, t = this, n = 0;
                this.timer = setInterval(function () {
                    n++, t.pool.stopCheck || n % t.freq == 0 && e.pool.checkRequests.call(e.pool)
                }, this.interval)
            }
        }]) && h(t.prototype, n), r && h(t, r), e
    }(), v = n(12);

    function m(e, t) {
        if (!(e instanceof t)) try {
            throw new TypeError("Cannot call a class as a function")
        } catch (e) {
        }
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t && g(e.prototype, t), n && g(e, n), e
    }

    var b = function () {
        function e(t) {
            m(this, e);
            this.init(t)
        }

        return y(e, [{
            key: "init", value: function (e) {
                var t = e.sample;
                Math.random() > t || (this.initBsource(), this.initTracker(e), this.timer = new d(1e3, o.a, 1), window.addEventListener("beforeunload", function (e) {
                    o.a.sendUnloadEvent()
                }))
            }
        }, {
            key: "initBsource", value: function () {
                v.a.identify() && (window.bsource = v.a.identify(), r.a.setCookie("bsource", window.bsource, 300, ".bilibili.com"))
            }
        }, {
            key: "initTracker", value: function (e) {
                var t = this;
                e.cancelLoadTracker || n.e(1).then(function (e) {
                    var r = n(80).default;
                    t.loadTracker = new r
                }.bind(null, n)).catch(n.oe), e.scrollTracker && n.e(2).then(function (r) {
                    var o = n(81).default;
                    t.scrollTracker = new o(e.scrollIgnoreHidden), "function" == typeof window.onScrollTrackerLoaded && window.onScrollTrackerLoaded()
                }.bind(null, n)).catch(n.oe), e.errorTracker && n.e(3).then(function (r) {
                    var i = n(82).default;
                    t.errorTracker = new i(e.ignoredErrorPattern), o.a.setSupportTryCatch(t.errorTracker)
                }.bind(null, n)).catch(n.oe), e.supportH5 && n.e(4).then(function (e) {
                    var r = n(83).default;
                    t.h5Supporter = new r, o.a.setSupportH5(t.h5Supporter)
                }.bind(null, n)).catch(n.oe), e.hasAbtest && n.e(5).then(function (e) {
                    var r = n(84).default;
                    t.abtestTracker = new r
                }.bind(null, n)).catch(n.oe), e.searchPage && o.a.setSearchPage(), this.pvTracker = new p, e.cancelEventTracker || (this.eventTracker = new c)
            }
        }, {
            key: "setSPM_id", value: function (e) {
                o.a.setSPM_id(e)
            }
        }, {
            key: "reportWithAdditionalParam", value: function (e) {
                o.a.reportWithAdditionalParam(e)
            }
        }, {
            key: "sendPV", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                this.pvTracker.sendPV(e, t)
            }
        }, {
            key: "forceCommit", value: function () {
                o.a.forceFlush()
            }
        }, {
            key: "setSpeicalMsg", value: function (e, t) {
                !0 === o.a.supportH5 && this.h5Supporter.setSpeicalMsg(e, t)
            }
        }]), e
    }(), w = function () {
        function e() {
            m(this, e), this.pvTracker = new p, this.timer = new d(1e3, o.a, 1)
        }

        return y(e, [{
            key: "sendPV", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                this.pvTracker.sendPV(e, t)
            }
        }, {
            key: "setSPM_id", value: function () {
            }
        }, {
            key: "forceCommit", value: function () {
            }
        }]), e
    }();
    n(46);
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    }), Array.isArray || (Array.isArray = function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }), "performance" in window && window.performance && window.performance.setResourceTimingBufferSize && performance.setResourceTimingBufferSize(300), function () {
        document.getElementsByTagName("meta");
        var e = r.a.getSpmPrefix();
        if (!window.reportObserver) if (window.reportConfig && e) {
            if (window.reportConfig.msgObjects) window.reportConfig.msgObjects.split("|").forEach(function (e) {
                window[e] && o.a.transporter(window[e])
            });
            var t = new b(window.reportConfig);
            window.reportObserver = t
        } else {
            var n = new w;
            window.reportObserver = n
        }
    }()
}]);