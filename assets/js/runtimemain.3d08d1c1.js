! function() {
    "use strict";
    var e, f, c, a, d, b = {},
        t = {};

    function n(e) {
        var f = t[e];
        if (void 0 !== f) return f.exports;
        var c = t[e] = {
            exports: {}
        };
        return b[e].call(c.exports, c, c.exports, n), c.exports
    }
    n.m = b, e = [], n.O = function(f, c, a, d) {
            if (!c) {
                var b = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    c = e[u][0], a = e[u][1], d = e[u][2];
                    for (var t = !0, r = 0; r < c.length; r++)(!1 & d || b >= d) && Object.keys(n.O).every((function(e) {
                        return n.O[e](c[r])
                    })) ? c.splice(r--, 1) : (t = !1, d < b && (b = d));
                    if (t) {
                        e.splice(u--, 1);
                        var o = a();
                        void 0 !== o && (f = o)
                    }
                }
                return f
            }
            d = d || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > d; u--) e[u] = e[u - 1];
            e[u] = [c, a, d]
        }, n.n = function(e) {
            var f = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(f, {
                a: f
            }), f
        }, c = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        } : function(e) {
            return e.__proto__
        }, n.t = function(e, a) {
            if (1 & a && (e = this(e)), 8 & a) return e;
            if ("object" == typeof e && e) {
                if (4 & a && e.__esModule) return e;
                if (16 & a && "function" == typeof e.then) return e
            }
            var d = Object.create(null);
            n.r(d);
            var b = {};
            f = f || [null, c({}), c([]), c(c)];
            for (var t = 2 & a && e;
                "object" == typeof t && !~f.indexOf(t); t = c(t)) Object.getOwnPropertyNames(t).forEach((function(f) {
                b[f] = function() {
                    return e[f]
                }
            }));
            return b.default = function() {
                return e
            }, n.d(d, b), d
        }, n.d = function(e, f) {
            for (var c in f) n.o(f, c) && !n.o(e, c) && Object.defineProperty(e, c, {
                enumerable: !0,
                get: f[c]
            })
        }, n.f = {}, n.e = function(e) {
            return Promise.all(Object.keys(n.f).reduce((function(f, c) {
                return n.f[c](e, f), f
            }), []))
        }, n.u = function(e) {
            return "assets/js/" + ({
                1: "8eb4e46b",
                41: "17bf660c",
                53: "935f2afb",
                55: "31f159b1",
                204: "25ffc52f",
                337: "25f5440c",
                362: "8c60dcaf",
                499: "046193ee",
                513: "9a02b972",
                533: "b2b675dd",
                549: "6ec50fbf",
                639: "ec19da3d",
                718: "caf4b688",
                725: "45550e3a",
                727: "c26d8cd4",
                793: "2df4bb2e",
                833: "89af8042",
                873: "8f21900f",
                1033: "a744d937",
                1090: "e643f321",
                1292: "60b1c01c",
                1437: "da9f6d8e",
                1477: "b2f554cd",
                1567: "81836579",
                2004: "161c69a8",
                2005: "12f494e8",
                2029: "85af2de8",
                2155: "6d2b2eb5",
                2162: "e0de7dfa",
                2274: "9f7aa781",
                2417: "89313887",
                2481: "3ffa88a2",
                2535: "814f3328",
                2689: "9a89dc9b",
                2735: "789369ad",
                2816: "cf662274",
                2854: "c1295794",
                2974: "b08ec6b2",
                3014: "863d8b58",
                3015: "81cd1e15",
                3070: "40f36d53",
                3083: "842ac164",
                3085: "1f391b9e",
                3089: "a6aa9e1f",
                3238: "d6dbd7aa",
                3260: "2db778a9",
                3314: "ca78a751",
                3365: "9d429a5d",
                3440: "ccdd9746",
                3505: "9f42c566",
                3608: "9e4087bc",
                3754: "f39b0504",
                3912: "39c2711c",
                4051: "ffc4a06e",
                4116: "fd1c83ad",
                4195: "c4f5d8e4",
                4218: "6754be54",
                4235: "6150279f",
                4335: "987e4621",
                4353: "9d153c53",
                4396: "2a1f719f",
                4553: "7b79b74c",
                4606: "9099e65f",
                4622: "0be75463",
                4771: "4fd79595",
                4788: "62a7221b",
                5040: "3d262aac",
                5112: "11c8688c",
                5248: "f00eb041",
                5370: "d34eef05",
                5455: "3fc95c08",
                5597: "26a8c297",
                5894: "90e7ea3a",
                5915: "db38c070",
                6077: "6e8acc2c",
                6103: "ccc49370",
                6260: "19edae22",
                6448: "fd003b35",
                6467: "433c02fa",
                6590: "738c1e1d",
                6759: "2cad3ae1",
                6839: "fb0d7785",
                6945: "83e62c7b",
                7059: "fd1f5770",
                7252: "5e8eff85",
                7351: "8f8a0726",
                7359: "145ac372",
                7386: "88b33bf7",
                7483: "fb63ed7d",
                7599: "7ef71a47",
                7636: "7b059e73",
                7680: "ac4fe8ee",
                7741: "b67fe843",
                7825: "33657449",
                7918: "17896441",
                7961: "4c58d839",
                7985: "fb25b842",
                8028: "1b13dae8",
                8299: "c41413dd",
                8389: "49500a4d",
                8427: "0ac0653f",
                8429: "cf984a59",
                8549: "3983920b",
                8694: "a0316999",
                8779: "3b71e1cf",
                8793: "9654b5f5",
                8905: "22a3627c",
                8968: "28eb46ac",
                8974: "e5e1f63a",
                9121: "11dbbc56",
                9124: "e0d83d98",
                9182: "6a88efae",
                9192: "00d8b136",
                9216: "41706282",
                9288: "a4c359c3",
                9514: "1be78505",
                9587: "92608dd9",
                9609: "2567787a",
                9783: "b82a17c0",
                9866: "06c387c0",
                9898: "da81e86c",
                9921: "534d0b2f"
            }[e] || e) + "." + {
                1: "d948bf46",
                41: "ef5af80a",
                53: "89f3611d",
                55: "1b8a5832",
                204: "412d54e7",
                337: "b54beee4",
                362: "2e6930d9",
                499: "3dfe2be7",
                513: "881271ad",
                533: "bc5bdd17",
                549: "5a7df763",
                639: "b6a5b28b",
                718: "233bc42c",
                725: "3ff71dc4",
                727: "40ce417d",
                793: "a7df8bcf",
                833: "03483d48",
                873: "116aa789",
                1033: "17a8a291",
                1090: "1569382d",
                1245: "6df503d5",
                1292: "a99ac8b4",
                1437: "11f6207f",
                1477: "6f60cb5a",
                1552: "51a498f3",
                1567: "87b93735",
                2004: "f05a9628",
                2005: "55bd068f",
                2029: "02accd6e",
                2155: "0cd006e6",
                2162: "02a6cb7f",
                2274: "037b0052",
                2417: "68cf9c76",
                2481: "debbfeeb",
                2535: "7b81647f",
                2689: "6a1caf16",
                2735: "4b809f11",
                2816: "e2438c3b",
                2854: "449fbc2b",
                2974: "c6ccdc46",
                3014: "84cad95d",
                3015: "d485efd7",
                3070: "26c2e066",
                3083: "f8475ae1",
                3085: "a872ff99",
                3089: "9ba96044",
                3238: "ee24153e",
                3260: "bf808304",
                3314: "d3b3f133",
                3365: "3cef14f2",
                3440: "1c327706",
                3505: "0f5da723",
                3608: "cad47f1c",
                3754: "67b63210",
                3912: "7c68cfff",
                4051: "355ba15d",
                4116: "8af6db3b",
                4195: "b1acfd78",
                4218: "e48df942",
                4235: "af57d855",
                4335: "78480aa7",
                4353: "0c142ddd",
                4396: "9f6e2dc9",
                4553: "940a137d",
                4606: "4af7a003",
                4622: "8c59ebab",
                4637: "3c0abfc4",
                4771: "352f5182",
                4788: "9f85ce7f",
                5040: "f117cd24",
                5112: "fe433544",
                5131: "2711dced",
                5248: "adacec65",
                5370: "ab35e71b",
                5455: "342aa6f6",
                5597: "068596c8",
                5894: "ecafc6a1",
                5915: "187b78b5",
                6077: "81389d24",
                6103: "47b14c39",
                6260: "7ed1ba1c",
                6316: "e49fa508",
                6448: "8057d41f",
                6467: "fcceabac",
                6590: "80ab7110",
                6759: "b821b71a",
                6839: "1e9f3704",
                6945: "facbac65",
                7059: "1fb1fa55",
                7152: "93b6f6c5",
                7251: "7da0dedd",
                7252: "73dbf1c1",
                7351: "2cf92ab0",
                7359: "7830aaa0",
                7386: "7c2b3f4d",
                7483: "ac76c682",
                7549: "53b00e7d",
                7599: "48fb96d5",
                7636: "cbb2b86b",
                7680: "9f7ab6fd",
                7724: "10dcb8dd",
                7741: "b8ba6909",
                7825: "241723c1",
                7890: "ee6cbbde",
                7918: "a3287012",
                7961: "11c07469",
                7985: "bc3745d4",
                8028: "5d3228c8",
                8299: "16eb9307",
                8389: "f2bf5201",
                8427: "17fe744e",
                8429: "fba5841b",
                8549: "37fb75c7",
                8694: "5ea917c3",
                8779: "4c443bd5",
                8793: "494eb5e9",
                8905: "81222f67",
                8923: "9b93c6ae",
                8968: "d8567614",
                8974: "9c22f5e1",
                9121: "cd713a01",
                9124: "94589c44",
                9182: "e8180343",
                9192: "4c52e1c7",
                9216: "b8cddc56",
                9288: "82110c5f",
                9487: "09b97ced",
                9514: "f8961a84",
                9587: "b6dbe6c7",
                9609: "23d93861",
                9652: "f8df1c35",
                9783: "b021ce83",
                9866: "6b4ca8f6",
                9898: "397ba4ae",
                9921: "33290405"
            }[e] + ".js"
        }, n.miniCssF = function(e) {}, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), n.o = function(e, f) {
            return Object.prototype.hasOwnProperty.call(e, f)
        }, a = {}, d = "tauri-docs:", n.l = function(e, f, c, b) {
            if (a[e]) a[e].push(f);
            else {
                var t, r;
                if (void 0 !== c)
                    for (var o = document.getElementsByTagName("script"), u = 0; u < o.length; u++) {
                        var i = o[u];
                        if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == d + c) {
                            t = i;
                            break
                        }
                    }
                t || (r = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, n.nc && t.setAttribute("nonce", n.nc), t.setAttribute("data-webpack", d + c), t.src = e), a[e] = [f];
                var l = function(f, c) {
                        t.onerror = t.onload = null, clearTimeout(s);
                        var d = a[e];
                        if (delete a[e], t.parentNode && t.parentNode.removeChild(t), d && d.forEach((function(e) {
                                return e(c)
                            })), f) return f(c)
                    },
                    s = setTimeout(l.bind(null, void 0, {
                        type: "timeout",
                        target: t
                    }), 12e4);
                t.onerror = l.bind(null, t.onerror), t.onload = l.bind(null, t.onload), r && document.head.appendChild(t)
            }
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "/", n.gca = function(e) {
            return e = {
                17896441: "7918",
                33657449: "7825",
                41706282: "9216",
                81836579: "1567",
                89313887: "2417",
                "8eb4e46b": "1",
                "17bf660c": "41",
                "935f2afb": "53",
                "31f159b1": "55",
                "25ffc52f": "204",
                "25f5440c": "337",
                "8c60dcaf": "362",
                "046193ee": "499",
                "9a02b972": "513",
                b2b675dd: "533",
                "6ec50fbf": "549",
                ec19da3d: "639",
                caf4b688: "718",
                "45550e3a": "725",
                c26d8cd4: "727",
                "2df4bb2e": "793",
                "89af8042": "833",
                "8f21900f": "873",
                a744d937: "1033",
                e643f321: "1090",
                "60b1c01c": "1292",
                da9f6d8e: "1437",
                b2f554cd: "1477",
                "161c69a8": "2004",
                "12f494e8": "2005",
                "85af2de8": "2029",
                "6d2b2eb5": "2155",
                e0de7dfa: "2162",
                "9f7aa781": "2274",
                "3ffa88a2": "2481",
                "814f3328": "2535",
                "9a89dc9b": "2689",
                "789369ad": "2735",
                cf662274: "2816",
                c1295794: "2854",
                b08ec6b2: "2974",
                "863d8b58": "3014",
                "81cd1e15": "3015",
                "40f36d53": "3070",
                "842ac164": "3083",
                "1f391b9e": "3085",
                a6aa9e1f: "3089",
                d6dbd7aa: "3238",
                "2db778a9": "3260",
                ca78a751: "3314",
                "9d429a5d": "3365",
                ccdd9746: "3440",
                "9f42c566": "3505",
                "9e4087bc": "3608",
                f39b0504: "3754",
                "39c2711c": "3912",
                ffc4a06e: "4051",
                fd1c83ad: "4116",
                c4f5d8e4: "4195",
                "6754be54": "4218",
                "6150279f": "4235",
                "987e4621": "4335",
                "9d153c53": "4353",
                "2a1f719f": "4396",
                "7b79b74c": "4553",
                "9099e65f": "4606",
                "0be75463": "4622",
                "4fd79595": "4771",
                "62a7221b": "4788",
                "3d262aac": "5040",
                "11c8688c": "5112",
                f00eb041: "5248",
                d34eef05: "5370",
                "3fc95c08": "5455",
                "26a8c297": "5597",
                "90e7ea3a": "5894",
                db38c070: "5915",
                "6e8acc2c": "6077",
                ccc49370: "6103",
                "19edae22": "6260",
                fd003b35: "6448",
                "433c02fa": "6467",
                "738c1e1d": "6590",
                "2cad3ae1": "6759",
                fb0d7785: "6839",
                "83e62c7b": "6945",
                fd1f5770: "7059",
                "5e8eff85": "7252",
                "8f8a0726": "7351",
                "145ac372": "7359",
                "88b33bf7": "7386",
                fb63ed7d: "7483",
                "7ef71a47": "7599",
                "7b059e73": "7636",
                ac4fe8ee: "7680",
                b67fe843: "7741",
                "4c58d839": "7961",
                fb25b842: "7985",
                "1b13dae8": "8028",
                c41413dd: "8299",
                "49500a4d": "8389",
                "0ac0653f": "8427",
                cf984a59: "8429",
                "3983920b": "8549",
                a0316999: "8694",
                "3b71e1cf": "8779",
                "9654b5f5": "8793",
                "22a3627c": "8905",
                "28eb46ac": "8968",
                e5e1f63a: "8974",
                "11dbbc56": "9121",
                e0d83d98: "9124",
                "6a88efae": "9182",
                "00d8b136": "9192",
                a4c359c3: "9288",
                "1be78505": "9514",
                "92608dd9": "9587",
                "2567787a": "9609",
                b82a17c0: "9783",
                "06c387c0": "9866",
                da81e86c: "9898",
                "534d0b2f": "9921"
            }[e] || e, n.p + n.u(e)
        },
        function() {
            var e = {
                1303: 0,
                532: 0
            };
            n.f.j = function(f, c) {
                var a = n.o(e, f) ? e[f] : void 0;
                if (0 !== a)
                    if (a) c.push(a[2]);
                    else if (/^(1303|532)$/.test(f)) e[f] = 0;
                else {
                    var d = new Promise((function(c, d) {
                        a = e[f] = [c, d]
                    }));
                    c.push(a[2] = d);
                    var b = n.p + n.u(f),
                        t = new Error;
                    n.l(b, (function(c) {
                        if (n.o(e, f) && (0 !== (a = e[f]) && (e[f] = void 0), a)) {
                            var d = c && ("load" === c.type ? "missing" : c.type),
                                b = c && c.target && c.target.src;
                            t.message = "Loading chunk " + f + " failed.\n(" + d + ": " + b + ")", t.name = "ChunkLoadError", t.type = d, t.request = b, a[1](t)
                        }
                    }), "chunk-" + f, f)
                }
            }, n.O.j = function(f) {
                return 0 === e[f]
            };
            var f = function(f, c) {
                    var a, d, b = c[0],
                        t = c[1],
                        r = c[2],
                        o = 0;
                    if (b.some((function(f) {
                            return 0 !== e[f]
                        }))) {
                        for (a in t) n.o(t, a) && (n.m[a] = t[a]);
                        if (r) var u = r(n)
                    }
                    for (f && f(c); o < b.length; o++) d = b[o], n.o(e, d) && e[d] && e[d][0](), e[d] = 0;
                    return n.O(u)
                },
                c = self.webpackChunktauri_docs = self.webpackChunktauri_docs || [];
            c.forEach(f.bind(null, 0)), c.push = f.bind(null, c.push.bind(c))
        }()
}();