(() => {
    "use strict";
    var e = {
            913: () => {
                try {
                    self["workbox:core:6.5.3"] && _()
                } catch (e) {}
            },
            977: () => {
                try {
                    self["workbox:precaching:6.5.3"] && _()
                } catch (e) {}
            },
            80: () => {
                try {
                    self["workbox:routing:6.5.3"] && _()
                } catch (e) {}
            },
            873: () => {
                try {
                    self["workbox:strategies:6.5.3"] && _()
                } catch (e) {}
            }
        },
        t = {};

    function s(a) {
        var n = t[a];
        if (void 0 !== n) return n.exports;
        var i = t[a] = {
            exports: {}
        };
        return e[a](i, i.exports, s), i.exports
    }(() => {
        s(913);
        const e = (e, ...t) => {
            let s = e;
            return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`), s
        };
        class t extends Error {
            constructor(t, s) {
                super(e(t, s)), this.name = t, this.details = s
            }
        }
        const a = {
                googleAnalytics: "googleAnalytics",
                precache: "precache-v2",
                prefix: "workbox",
                runtime: "runtime",
                suffix: "undefined" != typeof registration ? registration.scope : ""
            },
            n = e => [a.prefix, e, a.suffix].filter((e => e && e.length > 0)).join("-"),
            i = e => e || n(a.precache),
            r = e => e || n(a.runtime);

        function c(e, t) {
            const s = t();
            return e.waitUntil(s), s
        }
        s(977);

        function o(e) {
            if (!e) throw new t("add-to-cache-list-unexpected-type", {
                entry: e
            });
            if ("string" == typeof e) {
                const t = new URL(e, location.href);
                return {
                    cacheKey: t.href,
                    url: t.href
                }
            }
            const {
                revision: s,
                url: a
            } = e;
            if (!a) throw new t("add-to-cache-list-unexpected-type", {
                entry: e
            });
            if (!s) {
                const e = new URL(a, location.href);
                return {
                    cacheKey: e.href,
                    url: e.href
                }
            }
            const n = new URL(a, location.href),
                i = new URL(a, location.href);
            return n.searchParams.set("__WB_REVISION__", s), {
                cacheKey: n.href,
                url: i.href
            }
        }
        class h {
            constructor() {
                this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({
                    request: e,
                    state: t
                }) => {
                    t && (t.originalRequest = e)
                }, this.cachedResponseWillBeUsed = async ({
                    event: e,
                    state: t,
                    cachedResponse: s
                }) => {
                    if ("install" === e.type && t && t.originalRequest && t.originalRequest instanceof Request) {
                        const e = t.originalRequest.url;
                        s ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e)
                    }
                    return s
                }
            }
        }
        class l {
            constructor({
                precacheController: e
            }) {
                this.cacheKeyWillBeUsed = async ({
                    request: e,
                    params: t
                }) => {
                    const s = (null == t ? void 0 : t.cacheKey) || this._precacheController.getCacheKeyForURL(e.url);
                    return s ? new Request(s, {
                        headers: e.headers
                    }) : e
                }, this._precacheController = e
            }
        }
        let u;
        async function f(e, s) {
            let a = null;
            if (e.url) {
                a = new URL(e.url).origin
            }
            if (a !== self.location.origin) throw new t("cross-origin-copy-response", {
                origin: a
            });
            const n = e.clone(),
                i = {
                    headers: new Headers(n.headers),
                    status: n.status,
                    statusText: n.statusText
                },
                r = s ? s(i) : i,
                c = function() {
                    if (void 0 === u) {
                        const e = new Response("");
                        if ("body" in e) try {
                            new Response(e.body), u = !0
                        } catch (e) {
                            u = !1
                        }
                        u = !1
                    }
                    return u
                }() ? n.body : await n.blob();
            return new Response(c, r)
        }

        function d(e, t) {
            const s = new URL(e);
            for (const e of t) s.searchParams.delete(e);
            return s.href
        }
        class p {
            constructor() {
                this.promise = new Promise(((e, t) => {
                    this.resolve = e, this.reject = t
                }))
            }
        }
        const g = new Set;
        s(873);

        function y(e) {
            return "string" == typeof e ? new Request(e) : e
        }
        class w {
            constructor(e, t) {
                this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new p, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
                for (const e of this._plugins) this._pluginStateMap.set(e, {});
                this.event.waitUntil(this._handlerDeferred.promise)
            }
            async fetch(e) {
                const {
                    event: s
                } = this;
                let a = y(e);
                if ("navigate" === a.mode && s instanceof FetchEvent && s.preloadResponse) {
                    const e = await s.preloadResponse;
                    if (e) return e
                }
                const n = this.hasCallback("fetchDidFail") ? a.clone() : null;
                try {
                    for (const e of this.iterateCallbacks("requestWillFetch")) a = await e({
                        request: a.clone(),
                        event: s
                    })
                } catch (e) {
                    if (e instanceof Error) throw new t("plugin-error-request-will-fetch", {
                        thrownErrorMessage: e.message
                    })
                }
                const i = a.clone();
                try {
                    let e;
                    e = await fetch(a, "navigate" === a.mode ? void 0 : this._strategy.fetchOptions);
                    for (const t of this.iterateCallbacks("fetchDidSucceed")) e = await t({
                        event: s,
                        request: i,
                        response: e
                    });
                    return e
                } catch (e) {
                    throw n && await this.runCallbacks("fetchDidFail", {
                        error: e,
                        event: s,
                        originalRequest: n.clone(),
                        request: i.clone()
                    }), e
                }
            }
            async fetchAndCachePut(e) {
                const t = await this.fetch(e),
                    s = t.clone();
                return this.waitUntil(this.cachePut(e, s)), t
            }
            async cacheMatch(e) {
                const t = y(e);
                let s;
                const {
                    cacheName: a,
                    matchOptions: n
                } = this._strategy, i = await this.getCacheKey(t, "read"), r = Object.assign(Object.assign({}, n), {
                    cacheName: a
                });
                s = await caches.match(i, r);
                for (const e of this.iterateCallbacks("cachedResponseWillBeUsed")) s = await e({
                    cacheName: a,
                    matchOptions: n,
                    cachedResponse: s,
                    request: i,
                    event: this.event
                }) || void 0;
                return s
            }
            async cachePut(e, s) {
                const a = y(e);
                var n;
                await (n = 0, new Promise((e => setTimeout(e, n))));
                const i = await this.getCacheKey(a, "write");
                if (!s) throw new t("cache-put-with-no-response", {
                    url: (r = i.url, new URL(String(r), location.href).href.replace(new RegExp(`^${location.origin}`), ""))
                });
                var r;
                const c = await this._ensureResponseSafeToCache(s);
                if (!c) return !1;
                const {
                    cacheName: o,
                    matchOptions: h
                } = this._strategy, l = await self.caches.open(o), u = this.hasCallback("cacheDidUpdate"), f = u ? await async function(e, t, s, a) {
                    const n = d(t.url, s);
                    if (t.url === n) return e.match(t, a);
                    const i = Object.assign(Object.assign({}, a), {
                            ignoreSearch: !0
                        }),
                        r = await e.keys(t, i);
                    for (const t of r)
                        if (n === d(t.url, s)) return e.match(t, a)
                }(l, i.clone(), ["__WB_REVISION__"], h) : null;
                try {
                    await l.put(i, u ? c.clone() : c)
                } catch (e) {
                    if (e instanceof Error) throw "QuotaExceededError" === e.name && await async function() {
                        for (const e of g) await e()
                    }(), e
                }
                for (const e of this.iterateCallbacks("cacheDidUpdate")) await e({
                    cacheName: o,
                    oldResponse: f,
                    newResponse: c.clone(),
                    request: i,
                    event: this.event
                });
                return !0
            }
            async getCacheKey(e, t) {
                const s = `${e.url} | ${t}`;
                if (!this._cacheKeys[s]) {
                    let a = e;
                    for (const e of this.iterateCallbacks("cacheKeyWillBeUsed")) a = y(await e({
                        mode: t,
                        request: a,
                        event: this.event,
                        params: this.params
                    }));
                    this._cacheKeys[s] = a
                }
                return this._cacheKeys[s]
            }
            hasCallback(e) {
                for (const t of this._strategy.plugins)
                    if (e in t) return !0;
                return !1
            }
            async runCallbacks(e, t) {
                for (const s of this.iterateCallbacks(e)) await s(t)
            }* iterateCallbacks(e) {
                for (const t of this._strategy.plugins)
                    if ("function" == typeof t[e]) {
                        const s = this._pluginStateMap.get(t),
                            a = a => {
                                const n = Object.assign(Object.assign({}, a), {
                                    state: s
                                });
                                return t[e](n)
                            };
                        yield a
                    }
            }
            waitUntil(e) {
                return this._extendLifetimePromises.push(e), e
            }
            async doneWaiting() {
                let e;
                for (; e = this._extendLifetimePromises.shift();) await e
            }
            destroy() {
                this._handlerDeferred.resolve(null)
            }
            async _ensureResponseSafeToCache(e) {
                let t = e,
                    s = !1;
                for (const e of this.iterateCallbacks("cacheWillUpdate"))
                    if (t = await e({
                            request: this.request,
                            response: t,
                            event: this.event
                        }) || void 0, s = !0, !t) break;
                return s || t && 200 !== t.status && (t = void 0), t
            }
        }
        class _ extends class {
            constructor(e = {}) {
                this.cacheName = r(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions
            }
            handle(e) {
                const [t] = this.handleAll(e);
                return t
            }
            handleAll(e) {
                e instanceof FetchEvent && (e = {
                    event: e,
                    request: e.request
                });
                const t = e.event,
                    s = "string" == typeof e.request ? new Request(e.request) : e.request,
                    a = "params" in e ? e.params : void 0,
                    n = new w(this, {
                        event: t,
                        request: s,
                        params: a
                    }),
                    i = this._getResponse(n, s, t);
                return [i, this._awaitComplete(i, n, s, t)]
            }
            async _getResponse(e, s, a) {
                let n;
                await e.runCallbacks("handlerWillStart", {
                    event: a,
                    request: s
                });
                try {
                    if (n = await this._handle(s, e), !n || "error" === n.type) throw new t("no-response", {
                        url: s.url
                    })
                } catch (t) {
                    if (t instanceof Error)
                        for (const i of e.iterateCallbacks("handlerDidError"))
                            if (n = await i({
                                    error: t,
                                    event: a,
                                    request: s
                                }), n) break;
                    if (!n) throw t
                }
                for (const t of e.iterateCallbacks("handlerWillRespond")) n = await t({
                    event: a,
                    request: s,
                    response: n
                });
                return n
            }
            async _awaitComplete(e, t, s, a) {
                let n, i;
                try {
                    n = await e
                } catch (i) {}
                try {
                    await t.runCallbacks("handlerDidRespond", {
                        event: a,
                        request: s,
                        response: n
                    }), await t.doneWaiting()
                } catch (e) {
                    e instanceof Error && (i = e)
                }
                if (await t.runCallbacks("handlerDidComplete", {
                        event: a,
                        request: s,
                        response: n,
                        error: i
                    }), t.destroy(), i) throw i
            }
        } {
            constructor(e = {}) {
                e.cacheName = i(e.cacheName), super(e), this._fallbackToNetwork = !1 !== e.fallbackToNetwork, this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)
            }
            async _handle(e, t) {
                const s = await t.cacheMatch(e);
                return s || (t.event && "install" === t.event.type ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
            }
            async _handleFetch(e, s) {
                let a;
                const n = s.params || {};
                if (!this._fallbackToNetwork) throw new t("missing-precache-entry", {
                    cacheName: this.cacheName,
                    url: e.url
                }); {
                    0;
                    const t = n.integrity,
                        i = e.integrity,
                        r = !i || i === t;
                    if (a = await s.fetch(new Request(e, {
                            integrity: "no-cors" !== e.mode ? i || t : void 0
                        })), t && r && "no-cors" !== e.mode) {
                        this._useDefaultCacheabilityPluginIfNeeded();
                        await s.cachePut(e, a.clone());
                        0
                    }
                }
                return a
            }
            async _handleInstall(e, s) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const a = await s.fetch(e);
                if (!await s.cachePut(e, a.clone())) throw new t("bad-precaching-response", {
                    url: e.url,
                    status: a.status
                });
                return a
            }
            _useDefaultCacheabilityPluginIfNeeded() {
                let e = null,
                    t = 0;
                for (const [s, a] of this.plugins.entries()) a !== _.copyRedirectedCacheableResponsesPlugin && (a === _.defaultPrecacheCacheabilityPlugin && (e = s), a.cacheWillUpdate && t++);
                0 === t ? this.plugins.push(_.defaultPrecacheCacheabilityPlugin) : t > 1 && null !== e && this.plugins.splice(e, 1)
            }
        }
        _.defaultPrecacheCacheabilityPlugin = {
            cacheWillUpdate: async ({
                response: e
            }) => !e || e.status >= 400 ? null : e
        }, _.copyRedirectedCacheableResponsesPlugin = {
            cacheWillUpdate: async ({
                response: e
            }) => e.redirected ? await f(e) : e
        };
        class v {
            constructor({
                cacheName: e,
                plugins: t = [],
                fallbackToNetwork: s = !0
            } = {}) {
                this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new _({
                    cacheName: i(e),
                    plugins: [...t, new l({
                        precacheController: this
                    })],
                    fallbackToNetwork: s
                }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
            }
            get strategy() {
                return this._strategy
            }
            precache(e) {
                this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0)
            }
            addToCacheList(e) {
                const s = [];
                for (const a of e) {
                    "string" == typeof a ? s.push(a) : a && void 0 === a.revision && s.push(a.url);
                    const {
                        cacheKey: e,
                        url: n
                    } = o(a), i = "string" != typeof a && a.revision ? "reload" : "default";
                    if (this._urlsToCacheKeys.has(n) && this._urlsToCacheKeys.get(n) !== e) throw new t("add-to-cache-list-conflicting-entries", {
                        firstEntry: this._urlsToCacheKeys.get(n),
                        secondEntry: e
                    });
                    if ("string" != typeof a && a.integrity) {
                        if (this._cacheKeysToIntegrities.has(e) && this._cacheKeysToIntegrities.get(e) !== a.integrity) throw new t("add-to-cache-list-conflicting-integrities", {
                            url: n
                        });
                        this._cacheKeysToIntegrities.set(e, a.integrity)
                    }
                    if (this._urlsToCacheKeys.set(n, e), this._urlsToCacheModes.set(n, i), s.length > 0) {
                        const e = `Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                        console.warn(e)
                    }
                }
            }
            install(e) {
                return c(e, (async () => {
                    const t = new h;
                    this.strategy.plugins.push(t);
                    for (const [t, s] of this._urlsToCacheKeys) {
                        const a = this._cacheKeysToIntegrities.get(s),
                            n = this._urlsToCacheModes.get(t),
                            i = new Request(t, {
                                integrity: a,
                                cache: n,
                                credentials: "same-origin"
                            });
                        await Promise.all(this.strategy.handleAll({
                            params: {
                                cacheKey: s
                            },
                            request: i,
                            event: e
                        }))
                    }
                    const {
                        updatedURLs: s,
                        notUpdatedURLs: a
                    } = t;
                    return {
                        updatedURLs: s,
                        notUpdatedURLs: a
                    }
                }))
            }
            activate(e) {
                return c(e, (async () => {
                    const e = await self.caches.open(this.strategy.cacheName),
                        t = await e.keys(),
                        s = new Set(this._urlsToCacheKeys.values()),
                        a = [];
                    for (const n of t) s.has(n.url) || (await e.delete(n), a.push(n.url));
                    return {
                        deletedURLs: a
                    }
                }))
            }
            getURLsToCacheKeys() {
                return this._urlsToCacheKeys
            }
            getCachedURLs() {
                return [...this._urlsToCacheKeys.keys()]
            }
            getCacheKeyForURL(e) {
                const t = new URL(e, location.href);
                return this._urlsToCacheKeys.get(t.href)
            }
            getIntegrityForCacheKey(e) {
                return this._cacheKeysToIntegrities.get(e)
            }
            async matchPrecache(e) {
                const t = e instanceof Request ? e.url : e,
                    s = this.getCacheKeyForURL(t);
                if (s) {
                    return (await self.caches.open(this.strategy.cacheName)).match(s)
                }
            }
            createHandlerBoundToURL(e) {
                const s = this.getCacheKeyForURL(e);
                if (!s) throw new t("non-precached-url", {
                    url: e
                });
                return t => (t.request = new Request(e), t.params = Object.assign({
                    cacheKey: s
                }, t.params), this.strategy.handle(t))
            }
        }
        s(80);
        (async () => {
            const e = function() {
                    const e = JSON.parse(new URLSearchParams(self.location.search).get("params"));
                    return e.debug && console.log("[Docusaurus-PWA][SW]: Service Worker params:", e), e
                }(),
                t = [{
                    "revision": "27af6e241ba62e925085179e5ed9d95c",
                    "url": "404.html"
                }, {
                    "revision": "2489d0ee4cea72b4ed80786fa62eb970",
                    "url": "about/book/index.html"
                }, {
                    "revision": "5644c13a5d24c4a7fcff80e84281322c",
                    "url": "about/governance/index.html"
                }, {
                    "revision": "048b0e22dde0c31440060a8b2db49009",
                    "url": "about/intro/index.html"
                }, {
                    "revision": "d746f0a16c284e91298f47a64bd2eb1d",
                    "url": "about/trademark/index.html"
                }, {
                    "revision": "25dc06dc0b1aedca815c4c3500d8e05d",
                    "url": "assets/css/styles.1d9c036c.css"
                }, {
                    "revision": "1b83cd9d5a03a958d8c37fef6473eff4",
                    "url": "assets/js/00d8b136.4c52e1c7.js"
                }, {
                    "revision": "077a8f785e8bb47f41d7d1f8927565f0",
                    "url": "assets/js/046193ee.3dfe2be7.js"
                }, {
                    "revision": "c0b9eecf73fd0a8c56deefa1cf4c4f6e",
                    "url": "assets/js/06c387c0.6b4ca8f6.js"
                }, {
                    "revision": "684b43e4518ed7bd39268273afaa20ba",
                    "url": "assets/js/0ac0653f.17fe744e.js"
                }, {
                    "revision": "2818409a9529f7017605c06659ebf383",
                    "url": "assets/js/0be75463.8c59ebab.js"
                }, {
                    "revision": "5b82c48fb86283e4b97997e792386705",
                    "url": "assets/js/11c8688c.fe433544.js"
                }, {
                    "revision": "1dd932caa3e4245edcf87e52ce719cab",
                    "url": "assets/js/11dbbc56.cd713a01.js"
                }, {
                    "revision": "a56d8f2f901b8a5cd7ed8361f7de6f6a",
                    "url": "assets/js/1245.6df503d5.js"
                }, {
                    "revision": "ac9b08b1637faf14caf05c252beb05cb",
                    "url": "assets/js/12f494e8.55bd068f.js"
                }, {
                    "revision": "b575cc24770200c91453485f322350c9",
                    "url": "assets/js/145ac372.7830aaa0.js"
                }, {
                    "revision": "f56aa96be39dd9154e42787eac0f0eaa",
                    "url": "assets/js/1552.51a498f3.js"
                }, {
                    "revision": "a4f1ee681977ef81bf0b0a99306e97c1",
                    "url": "assets/js/161c69a8.f05a9628.js"
                }, {
                    "revision": "aa69a50c8300d56ded334e7076a358af",
                    "url": "assets/js/17896441.a3287012.js"
                }, {
                    "revision": "9cb33340f0600ec7d3e9040e3f745303",
                    "url": "assets/js/17bf660c.ef5af80a.js"
                }, {
                    "revision": "936532c9f9a36f15f33a41855d487886",
                    "url": "assets/js/19edae22.7ed1ba1c.js"
                }, {
                    "revision": "005476c19786758a612edcbdf692efcb",
                    "url": "assets/js/1b13dae8.5d3228c8.js"
                }, {
                    "revision": "3966d123a76de90b744c92a09301776f",
                    "url": "assets/js/1be78505.f8961a84.js"
                }, {
                    "revision": "c8af462549dfc8b89bf28d6ee43852a8",
                    "url": "assets/js/1f391b9e.a872ff99.js"
                }, {
                    "revision": "da936c147117dffced1b4b1d07c166ef",
                    "url": "assets/js/22a3627c.81222f67.js"
                }, {
                    "revision": "c7e8691610ec434a07b29fd71c06a2fb",
                    "url": "assets/js/2567787a.23d93861.js"
                }, {
                    "revision": "6e89773aa69de6c478cbe26a62638468",
                    "url": "assets/js/25f5440c.b54beee4.js"
                }, {
                    "revision": "0dbbd574c15fef316f6dc319f79de434",
                    "url": "assets/js/25ffc52f.412d54e7.js"
                }, {
                    "revision": "9d63d4608653b4d788e97e58025d07e2",
                    "url": "assets/js/26a8c297.068596c8.js"
                }, {
                    "revision": "490ede020b3fb0734811168809e2f8c4",
                    "url": "assets/js/28eb46ac.d8567614.js"
                }, {
                    "revision": "0f1d8cc78c605871e25b6e2c03604b10",
                    "url": "assets/js/2a1f719f.9f6e2dc9.js"
                }, {
                    "revision": "32592d77c1f646f2c9dadadac91259d5",
                    "url": "assets/js/2cad3ae1.b821b71a.js"
                }, {
                    "revision": "43e6bb4d79894e84fb7d6b01a8b6647a",
                    "url": "assets/js/2db778a9.bf808304.js"
                }, {
                    "revision": "96703c63364aa8cc5fcbf32f1fdcf89a",
                    "url": "assets/js/2df4bb2e.a7df8bcf.js"
                }, {
                    "revision": "a4180efef989bcee6629496c6f4f675e",
                    "url": "assets/js/31f159b1.1b8a5832.js"
                }, {
                    "revision": "64d44d7d6f8f2bb070977f57ae2ffb72",
                    "url": "assets/js/33657449.241723c1.js"
                }, {
                    "revision": "2071cfd929377404d04101756d1bc33a",
                    "url": "assets/js/3983920b.37fb75c7.js"
                }, {
                    "revision": "29e8a5965a6ce6afab873cf8a52554bc",
                    "url": "assets/js/39c2711c.7c68cfff.js"
                }, {
                    "revision": "58bf460bf0396e374ca0396d7bfd49b8",
                    "url": "assets/js/3b71e1cf.4c443bd5.js"
                }, {
                    "revision": "3fc9fc3303946cd2c2d130f78b3e4a63",
                    "url": "assets/js/3d262aac.f117cd24.js"
                }, {
                    "revision": "3300e74fe5bbed5b640fbb5339ec4b10",
                    "url": "assets/js/3fc95c08.342aa6f6.js"
                }, {
                    "revision": "6900de7d7aa167ae7d94a6ecda03df03",
                    "url": "assets/js/3ffa88a2.debbfeeb.js"
                }, {
                    "revision": "5f245d022b6f7457bc13b6a4d221b5c8",
                    "url": "assets/js/40f36d53.26c2e066.js"
                }, {
                    "revision": "ec5091bb49779e9d67593ce62d9434ae",
                    "url": "assets/js/41706282.b8cddc56.js"
                }, {
                    "revision": "dd81ea738fea07bd5b6818342134b139",
                    "url": "assets/js/433c02fa.fcceabac.js"
                }, {
                    "revision": "5828e46f6de46bd3d440b17ce9b0ca79",
                    "url": "assets/js/45550e3a.3ff71dc4.js"
                }, {
                    "revision": "42282b9d36d557e248aa44b3496020a7",
                    "url": "assets/js/4637.3c0abfc4.js"
                }, {
                    "revision": "f9eccabce09deebda1323ac3a27f9aa4",
                    "url": "assets/js/49500a4d.f2bf5201.js"
                }, {
                    "revision": "cf96bc1daf35321fdde136cc6c0ba7d3",
                    "url": "assets/js/4c58d839.11c07469.js"
                }, {
                    "revision": "d30e6b94908311806457225f26115980",
                    "url": "assets/js/4fd79595.352f5182.js"
                }, {
                    "revision": "ba359581033f9b7060a5693adc5f8e3a",
                    "url": "assets/js/5131.2711dced.js"
                }, {
                    "revision": "8efdb236ae4c5ab2f55a076f8a88352f",
                    "url": "assets/js/534d0b2f.33290405.js"
                }, {
                    "revision": "1cfe542ee12f0cebf336c63ef1b522f6",
                    "url": "assets/js/5e8eff85.73dbf1c1.js"
                }, {
                    "revision": "585c302d25deb51af33c518e4bf7ea1a",
                    "url": "assets/js/60b1c01c.a99ac8b4.js"
                }, {
                    "revision": "2c90d3258496b7cdd842a8dd0df980fe",
                    "url": "assets/js/6150279f.af57d855.js"
                }, {
                    "revision": "376fd0488eec30acf817a370274589a9",
                    "url": "assets/js/62a7221b.9f85ce7f.js"
                }, {
                    "revision": "ca3bca729d12ed5e0bb6f3df0d0978fd",
                    "url": "assets/js/6316.e49fa508.js"
                }, {
                    "revision": "1a02753d0112b40311e05477898f5a37",
                    "url": "assets/js/6754be54.e48df942.js"
                }, {
                    "revision": "c5d47a64cff9092852359b36659d2d1c",
                    "url": "assets/js/6a88efae.e8180343.js"
                }, {
                    "revision": "003e157d3fd982162524d3f19171141d",
                    "url": "assets/js/6d2b2eb5.0cd006e6.js"
                }, {
                    "revision": "d414e8efdcef6f46ed486b01cc5badf3",
                    "url": "assets/js/6e8acc2c.81389d24.js"
                }, {
                    "revision": "9497f34ca85486230fae55f1f402f2d1",
                    "url": "assets/js/6ec50fbf.5a7df763.js"
                }, {
                    "revision": "dacb21bf2f0e3ca0aeac2131f31cfe94",
                    "url": "assets/js/7152.93b6f6c5.js"
                }, {
                    "revision": "b903963e7b5d171b0101232c1550a232",
                    "url": "assets/js/7251.7da0dedd.js"
                }, {
                    "revision": "3a35cf9d816859f4189e031507b4dbf4",
                    "url": "assets/js/738c1e1d.80ab7110.js"
                }, {
                    "revision": "34f5804c01a463eb4e776479a759992f",
                    "url": "assets/js/7549.53b00e7d.js"
                }, {
                    "revision": "75e3085ccedda3138d5f8fd904820b7d",
                    "url": "assets/js/7724.10dcb8dd.js"
                }, {
                    "revision": "700c8c6805653742f67aad80e0ac4621",
                    "url": "assets/js/7890.ee6cbbde.js"
                }, {
                    "revision": "87b2a15dd359131e3a56dab36b285104",
                    "url": "assets/js/789369ad.4b809f11.js"
                }, {
                    "revision": "6f2031e76a3ffcdab1afcf6790fad9ad",
                    "url": "assets/js/7b059e73.cbb2b86b.js"
                }, {
                    "revision": "bd7fcf53a4d8589d8ded757d47a6a91d",
                    "url": "assets/js/7b79b74c.940a137d.js"
                }, {
                    "revision": "24052c1cc829d392efce601be2b08f03",
                    "url": "assets/js/7ef71a47.48fb96d5.js"
                }, {
                    "revision": "a045efc46d9785a4d4176d3bc3d829de",
                    "url": "assets/js/814f3328.7b81647f.js"
                }, {
                    "revision": "8850d9423e7588ce65a099b403226b21",
                    "url": "assets/js/81836579.87b93735.js"
                }, {
                    "revision": "c0e22280891d4f7bdc9661a4e4ab7933",
                    "url": "assets/js/81cd1e15.d485efd7.js"
                }, {
                    "revision": "c52964da10f944394d260af561311cd0",
                    "url": "assets/js/83e62c7b.facbac65.js"
                }, {
                    "revision": "f5c3e9a540cff167c041e18692b527bb",
                    "url": "assets/js/842ac164.f8475ae1.js"
                }, {
                    "revision": "8acdc789301eaf7dbc8e2ea5420887ba",
                    "url": "assets/js/85af2de8.02accd6e.js"
                }, {
                    "revision": "78a2b9f905001648594c352d13e11ca4",
                    "url": "assets/js/863d8b58.84cad95d.js"
                }, {
                    "revision": "9fcb5a40633dd4a9bb91e3458cd87ca9",
                    "url": "assets/js/88b33bf7.7c2b3f4d.js"
                }, {
                    "revision": "96eafed2e3846b38c3cd34c66ebc0400",
                    "url": "assets/js/8923.9b93c6ae.js"
                }, {
                    "revision": "4309b59531b01f29a43badbe1b72d4f3",
                    "url": "assets/js/89313887.68cf9c76.js"
                }, {
                    "revision": "05602028477547634140ab44076bd5e0",
                    "url": "assets/js/89af8042.03483d48.js"
                }, {
                    "revision": "9bab1ff35aad8f2d0ed603c6c16485a6",
                    "url": "assets/js/8c60dcaf.2e6930d9.js"
                }, {
                    "revision": "5208f69d6495e8fe506cf3d97d0f87ad",
                    "url": "assets/js/8eb4e46b.d948bf46.js"
                }, {
                    "revision": "bca8de38a69c7352a24a03954c7dfc02",
                    "url": "assets/js/8f21900f.116aa789.js"
                }, {
                    "revision": "76d7cca20ccf73d7c2de597367dda7f1",
                    "url": "assets/js/8f8a0726.2cf92ab0.js"
                }, {
                    "revision": "7f9952bc506e4df68e71d5490cfd1622",
                    "url": "assets/js/9099e65f.4af7a003.js"
                }, {
                    "revision": "0db506d483cbe7725659214dbd91d4bf",
                    "url": "assets/js/90e7ea3a.ecafc6a1.js"
                }, {
                    "revision": "096717b41b6cd30c3377f713901dbd1b",
                    "url": "assets/js/92608dd9.b6dbe6c7.js"
                }, {
                    "revision": "4f95d17dca902d08b6e6a9432f5b8123",
                    "url": "assets/js/935f2afb.89f3611d.js"
                }, {
                    "revision": "51b21b4c3b75eaeac24493feac58ccaf",
                    "url": "assets/js/9487.09b97ced.js"
                }, {
                    "revision": "4ed0b370d9f021d4fec9e99f78a14c12",
                    "url": "assets/js/9652.f8df1c35.js"
                }, {
                    "revision": "5fb535d1b26c1ea02cec8f1943853ee3",
                    "url": "assets/js/9654b5f5.494eb5e9.js"
                }, {
                    "revision": "ad841f9ce80341fc3cc42e84e59dbe59",
                    "url": "assets/js/987e4621.78480aa7.js"
                }, {
                    "revision": "59e329701e6e0f25597327bf07315599",
                    "url": "assets/js/9a02b972.881271ad.js"
                }, {
                    "revision": "38b0bcd9b4b5d155b16e2a31fb9fdda0",
                    "url": "assets/js/9a89dc9b.6a1caf16.js"
                }, {
                    "revision": "b5bf53abef19a2c1ea9abb169dbf9949",
                    "url": "assets/js/9d153c53.0c142ddd.js"
                }, {
                    "revision": "1f1f7c1cb61f1e5f6ef3e145f1f2956c",
                    "url": "assets/js/9d429a5d.3cef14f2.js"
                }, {
                    "revision": "17db7536a08b42d776e7402ac70784c3",
                    "url": "assets/js/9e4087bc.cad47f1c.js"
                }, {
                    "revision": "0da8ac68767264f35eb274a3802c06bc",
                    "url": "assets/js/9f42c566.0f5da723.js"
                }, {
                    "revision": "b4febb1c5ead6ee7c2a9cb1ddd84b3d6",
                    "url": "assets/js/9f7aa781.037b0052.js"
                }, {
                    "revision": "2a1bd8e926c3c2b312e6c77ed436fb03",
                    "url": "assets/js/a0316999.5ea917c3.js"
                }, {
                    "revision": "bdc572a0f07d6e18afb3b17e81da858e",
                    "url": "assets/js/a4c359c3.82110c5f.js"
                }, {
                    "revision": "42632b492c4c7ce5e3b631de8d6b5ca4",
                    "url": "assets/js/a6aa9e1f.9ba96044.js"
                }, {
                    "revision": "7e557b0141c80aaad9da450a3070f8d9",
                    "url": "assets/js/a744d937.17a8a291.js"
                }, {
                    "revision": "f3a4c68d008fcbfb6c5d87b849f5f936",
                    "url": "assets/js/ac4fe8ee.9f7ab6fd.js"
                }, {
                    "revision": "4eded9368770f2faf0ab05f8d3a238ec",
                    "url": "assets/js/b08ec6b2.c6ccdc46.js"
                }, {
                    "revision": "c960d3947a7abfa78a52f9ca4b745033",
                    "url": "assets/js/b2b675dd.bc5bdd17.js"
                }, {
                    "revision": "f1590562fe5e72119bd051dd4eb72023",
                    "url": "assets/js/b2f554cd.6f60cb5a.js"
                }, {
                    "revision": "5a01164d8d4c0daa6bef772f5af9b84f",
                    "url": "assets/js/b67fe843.b8ba6909.js"
                }, {
                    "revision": "f279fbff8363f113b918934a60f81526",
                    "url": "assets/js/b82a17c0.b021ce83.js"
                }, {
                    "revision": "c6d4f854cf09c0c1b9e3861bdd915b36",
                    "url": "assets/js/c1295794.449fbc2b.js"
                }, {
                    "revision": "f88658912a8eb08fd7db4d45f95a4071",
                    "url": "assets/js/c26d8cd4.40ce417d.js"
                }, {
                    "revision": "cee9e11c1ec40e50d11a723ccfa8d076",
                    "url": "assets/js/c41413dd.16eb9307.js"
                }, {
                    "revision": "67e8bd7368821354eef55a81d8929bf6",
                    "url": "assets/js/c4f5d8e4.b1acfd78.js"
                }, {
                    "revision": "cbf9be34f40a99ccb9c4e248c5707c10",
                    "url": "assets/js/ca78a751.d3b3f133.js"
                }, {
                    "revision": "90c0083a133b094dc3401103d8795067",
                    "url": "assets/js/caf4b688.233bc42c.js"
                }, {
                    "revision": "3f638c4609b7b6f16825311361f01f3e",
                    "url": "assets/js/ccc49370.47b14c39.js"
                }, {
                    "revision": "0b428082e415b4e81532e6713da6f55a",
                    "url": "assets/js/ccdd9746.1c327706.js"
                }, {
                    "revision": "8f2a98591f2e60bfde91add3603302e2",
                    "url": "assets/js/cf662274.e2438c3b.js"
                }, {
                    "revision": "1171b9c749c00ba0a824797aa80501b7",
                    "url": "assets/js/cf984a59.fba5841b.js"
                }, {
                    "revision": "ee50c0502a50d1bf5e89d8ee9829f826",
                    "url": "assets/js/d34eef05.ab35e71b.js"
                }, {
                    "revision": "d1008d2063bee40941e14e1e322f6144",
                    "url": "assets/js/d6dbd7aa.ee24153e.js"
                }, {
                    "revision": "c064480a5f910858470aa40f59459fe3",
                    "url": "assets/js/da81e86c.397ba4ae.js"
                }, {
                    "revision": "668631d0dd6db8e935d93327a410c4a5",
                    "url": "assets/js/da9f6d8e.11f6207f.js"
                }, {
                    "revision": "ec0ff3c9e81328c2400147f3ff917f3b",
                    "url": "assets/js/db38c070.187b78b5.js"
                }, {
                    "revision": "74f63bb1238206d0f241dadabafba596",
                    "url": "assets/js/e0d83d98.94589c44.js"
                }, {
                    "revision": "f59762c914fc6c55045cef67f7670bbf",
                    "url": "assets/js/e0de7dfa.02a6cb7f.js"
                }, {
                    "revision": "b948ce8501ff607c37c794d8df3e15b1",
                    "url": "assets/js/e5e1f63a.9c22f5e1.js"
                }, {
                    "revision": "95629e3fe5f7f291b87801f0f8aef45e",
                    "url": "assets/js/e643f321.1569382d.js"
                }, {
                    "revision": "bc6ddc7cebacf32dab4bd99bd4c2e5da",
                    "url": "assets/js/ec19da3d.b6a5b28b.js"
                }, {
                    "revision": "4f6a201abe9edbdad19bcc3d83b206aa",
                    "url": "assets/js/f00eb041.adacec65.js"
                }, {
                    "revision": "dfa2a813d5d876c8e622283a03c79ce9",
                    "url": "assets/js/f39b0504.67b63210.js"
                }, {
                    "revision": "8c082ca253588411eb11eb7dedbeae6b",
                    "url": "assets/js/fb0d7785.1e9f3704.js"
                }, {
                    "revision": "ab8b973451f95c3c77f2af20ae97b6ac",
                    "url": "assets/js/fb25b842.bc3745d4.js"
                }, {
                    "revision": "30f27572bea13d66366eb984b6406af5",
                    "url": "assets/js/fb63ed7d.ac76c682.js"
                }, {
                    "revision": "3daa1ec433c0f72cabf3b836a7b6ec0e",
                    "url": "assets/js/fd003b35.8057d41f.js"
                }, {
                    "revision": "fbd3c7b9f2e1c25698a5c026396d82f6",
                    "url": "assets/js/fd1c83ad.8af6db3b.js"
                }, {
                    "revision": "90aaea41e6b30d1d36b1024e3628d6aa",
                    "url": "assets/js/fd1f5770.1fb1fa55.js"
                }, {
                    "revision": "914130a6bd37e077387b4a43f72b064b",
                    "url": "assets/js/ffc4a06e.355ba15d.js"
                }, {
                    "revision": "be147d01a43ec841f7c2a0a2104088bf",
                    "url": "assets/js/main.e7f4e5ad.js"
                }, {
                    "revision": "7c2121c0bc32168a53896a0e9f98100b",
                    "url": "assets/js/runtime~main.3d08d1c1.js"
                }, {
                    "revision": "a6ff3c627a39f35edcc71a41d27cbd9f",
                    "url": "blog/2022/06/19/tauri-1-0/index.html"
                }, {
                    "revision": "13e66aa8f7d9acb9cfcb56fc08d500f6",
                    "url": "blog/2022/07/12/tauri-programme-turns-1-and-board-elections/index.html"
                }, {
                    "revision": "c22395e6b1ce51603452870199965f63",
                    "url": "blog/2022/09/15/tauri-1-1/index.html"
                }, {
                    "revision": "dee6c9a938682c2db0e7415f8ace8b30",
                    "url": "blog/2022/09/19/tauri-egui-0-1/index.html"
                }, {
                    "revision": "12b7d40f8eb98da00d29062aa2303d46",
                    "url": "blog/2022/11/08/tauri-1-2/index.html"
                }, {
                    "revision": "12046825545a462a33682506c035db9f",
                    "url": "blog/2022/12/09/tauri-mobile-alpha/index.html"
                }, {
                    "revision": "bf05dc00ed0019fdb78b8568e1e8b8ab",
                    "url": "blog/2023/02/03/tauri-2-0-0-alpha-3/index.html"
                }, {
                    "revision": "d8aae839707bc3fdcc96f1baa9c3f0a5",
                    "url": "blog/2023/02/09/tauri-community-growth-and-feedback/index.html"
                }, {
                    "revision": "72399ace70a8e611154435526f20c977",
                    "url": "blog/2023/03/01/create-tauri-app-version-3-released/index.html"
                }, {
                    "revision": "062127fc3946056d1b7e6073c5d9fc8c",
                    "url": "blog/2023/03/20/tauri-2-0-0-alpha-4/index.html"
                }, {
                    "revision": "423f11510cbcdb68d507b6068518d596",
                    "url": "blog/2023/05/03/tauri-1-3/index.html"
                }, {
                    "revision": "eb6b757d68feab6bc5bb738ed98f4164",
                    "url": "blog/2023/06/14/tauri-1-4/index.html"
                }, {
                    "revision": "b5afc98b3cb1fbc1a078b07196cddadc",
                    "url": "blog/2023/06/15/tauri-board-elections-and-governance-updates/index.html"
                }, {
                    "revision": "974555fe38a26ca1918c15755986994f",
                    "url": "blog/archive/index.html"
                }, {
                    "revision": "a47b2594f13c138b8060ec856cc8c0df",
                    "url": "blog/feed.json"
                }, {
                    "revision": "983b9561495e9e38dd14f544b31b3db6",
                    "url": "blog/index.html"
                }, {
                    "revision": "8c04498477c29cd481e99ec3c80a28e5",
                    "url": "blog/page/2/index.html"
                }, {
                    "revision": "bfa7deea8009340e74aed37b73155151",
                    "url": "index.html"
                }, {
                    "revision": "2c5b4f9efe7f03f46f8f59ca28598df7",
                    "url": "meta/manifest.json"
                }, {
                    "revision": "ed8418558a6440b42a594939389f82fd",
                    "url": "releases/index.html"
                }, {
                    "revision": "f2ee3825bf0347fd4ce8939ca7a6c00a",
                    "url": "tauri-splash.json"
                }, {
                    "revision": "2130bb977848b0e0a2cf5a2800269211",
                    "url": "v1/api/cli/index.html"
                }, {
                    "revision": "c52faefb12f6751c84d88d94b6b5ddd0",
                    "url": "v1/api/config/index.html"
                }, {
                    "revision": "46340aac48f52e2044af5aacffcb8d46",
                    "url": "v1/api/js/app/index.html"
                }, {
                    "revision": "aa35549867b448dfd0fb2a9a5320bc52",
                    "url": "v1/api/js/cli/index.html"
                }, {
                    "revision": "f816dfab2ec908cfeadd5da9e5163380",
                    "url": "v1/api/js/clipboard/index.html"
                }, {
                    "revision": "1dac5457863dad210e8efebf66d7c23b",
                    "url": "v1/api/js/dialog/index.html"
                }, {
                    "revision": "db289177e9683cb0769779920c4d7402",
                    "url": "v1/api/js/event/index.html"
                }, {
                    "revision": "29116ccfd25e13af606d4e500268d1ed",
                    "url": "v1/api/js/fs/index.html"
                }, {
                    "revision": "6b211b7212fdbe68e2453b317e831996",
                    "url": "v1/api/js/globalShortcut/index.html"
                }, {
                    "revision": "1120ce909e3cc309563252f857ce4b38",
                    "url": "v1/api/js/http/index.html"
                }, {
                    "revision": "da9fa0ae57adf8775fe3028f18116c04",
                    "url": "v1/api/js/index.html"
                }, {
                    "revision": "cf2b8c5dbfc2468862fb9e0711706857",
                    "url": "v1/api/js/mocks/index.html"
                }, {
                    "revision": "a93ecac99a7a4f7c56283771751b4c9f",
                    "url": "v1/api/js/notification/index.html"
                }, {
                    "revision": "fc5643d1195ee5c6ae5104bebc89bc88",
                    "url": "v1/api/js/os/index.html"
                }, {
                    "revision": "9c89a373287f6d77eac8b23dd33e9d46",
                    "url": "v1/api/js/path/index.html"
                }, {
                    "revision": "61452a9b6353ae96d542447a4b11a07f",
                    "url": "v1/api/js/process/index.html"
                }, {
                    "revision": "4b5d44265d7b487b5fed4b4a4f418ce2",
                    "url": "v1/api/js/shell/index.html"
                }, {
                    "revision": "03a6b5357d95b5c775790f5661dc68d1",
                    "url": "v1/api/js/tauri/index.html"
                }, {
                    "revision": "e998ecbc96cfef10d04bcee601047e28",
                    "url": "v1/api/js/updater/index.html"
                }, {
                    "revision": "90de0eaeaa00281de4cd1d70938c8195",
                    "url": "v1/api/js/window/index.html"
                }, {
                    "revision": "a6b267f7487b0e5888ef440a16a6fa15",
                    "url": "v1/guides/building/app-size/index.html"
                }, {
                    "revision": "36f8919830c3f974e407c5816619bab7",
                    "url": "v1/guides/building/cross-platform/index.html"
                }, {
                    "revision": "f1764879abc64d44a69c6c17bfc92230",
                    "url": "v1/guides/building/index.html"
                }, {
                    "revision": "0b211b1c4e67d1c236cd728bb5bd1124",
                    "url": "v1/guides/building/linux/index.html"
                }, {
                    "revision": "3c7a76634414dd300bbe27e197b5f9df",
                    "url": "v1/guides/building/macos/index.html"
                }, {
                    "revision": "a2fd4318b35ff69160e487c0e0edbce2",
                    "url": "v1/guides/building/resources/index.html"
                }, {
                    "revision": "003f8e8c3b07d71b4a2268b0b25c85f2",
                    "url": "v1/guides/building/sidecar/index.html"
                }, {
                    "revision": "1c6c795045910b0471817aed2340f790",
                    "url": "v1/guides/building/windows/index.html"
                }, {
                    "revision": "c884f68b8641bbad8ab01fa7116d2b48",
                    "url": "v1/guides/debugging/application/index.html"
                }, {
                    "revision": "40c4d109f73560ef0ef8e90d9e87d9ab",
                    "url": "v1/guides/debugging/clion/index.html"
                }, {
                    "revision": "7e9b250fcbd4e7cb03475c53a15eece3",
                    "url": "v1/guides/debugging/vs-code/index.html"
                }, {
                    "revision": "685e0c53e181e62e5fc2e550534e393f",
                    "url": "v1/guides/development/development-cycle/index.html"
                }, {
                    "revision": "7382720fc8760f8ea8850b1cf9cf4958",
                    "url": "v1/guides/development/updating-dependencies/index.html"
                }, {
                    "revision": "220cc1c323340def6cf3267c03a08a0a",
                    "url": "v1/guides/distribution/publishing/index.html"
                }, {
                    "revision": "52238534c8cce1d34f05d201b7d31876",
                    "url": "v1/guides/distribution/sign-linux/index.html"
                }, {
                    "revision": "31906f60edd62961f31d7c3ca6952b51",
                    "url": "v1/guides/distribution/sign-macos/index.html"
                }, {
                    "revision": "b8c1774cc38f85ac3db52be6eeee0948",
                    "url": "v1/guides/distribution/sign-windows/index.html"
                }, {
                    "revision": "bb51c07d35ddb8b7c1bb889262bd7fcf",
                    "url": "v1/guides/distribution/updater/index.html"
                }, {
                    "revision": "2619867869b90099e5193a912bc6262d",
                    "url": "v1/guides/faq/index.html"
                }, {
                    "revision": "45c1e1636177f508b73c5d215b1b5ff5",
                    "url": "v1/guides/features/cli/index.html"
                }, {
                    "revision": "456857660a599dd10b9682fb43b58a30",
                    "url": "v1/guides/features/command/index.html"
                }, {
                    "revision": "32e8e045683cc796769733c551961612",
                    "url": "v1/guides/features/events/index.html"
                }, {
                    "revision": "38f88ce709b2167dca5fb4b10a3a2cd5",
                    "url": "v1/guides/features/icons/index.html"
                }, {
                    "revision": "ff8b149f12d7609f41e687318ba80be5",
                    "url": "v1/guides/features/index.html"
                }, {
                    "revision": "9a6dc1cb9380197e7afc882c11af0b10",
                    "url": "v1/guides/features/menu/index.html"
                }, {
                    "revision": "3e48e2a2d63e711f1da42f14d10f6980",
                    "url": "v1/guides/features/multiwindow/index.html"
                }, {
                    "revision": "80f00396aeb4a9d75c12d1ab85a8c205",
                    "url": "v1/guides/features/plugin/index.html"
                }, {
                    "revision": "7e3f219c574d3d018d74d6f9dbfe0055",
                    "url": "v1/guides/features/splashscreen/index.html"
                }, {
                    "revision": "551469493fc67ac1d815de3fd10ccfcd",
                    "url": "v1/guides/features/system-tray/index.html"
                }, {
                    "revision": "90bc1256b239c447f187f56186a1bba2",
                    "url": "v1/guides/features/window-customization/index.html"
                }, {
                    "revision": "83419e8011aa7c61961ed22a005ecff4",
                    "url": "v1/guides/getting-started/prerequisites/index.html"
                }, {
                    "revision": "23ae5542927941f03c74d8698f516a6d",
                    "url": "v1/guides/getting-started/setup/html-css-js/index.html"
                }, {
                    "revision": "06d9965c74f2174438991d725b37eff2",
                    "url": "v1/guides/getting-started/setup/index.html"
                }, {
                    "revision": "24c8d7049a6871d52351aaa9d98d3efa",
                    "url": "v1/guides/getting-started/setup/integrate/index.html"
                }, {
                    "revision": "9877f25ad1948765a22edc95a0994f24",
                    "url": "v1/guides/getting-started/setup/next-js/index.html"
                }, {
                    "revision": "4c6c2d099f0b1a8cff9db1cf0a5d9aa2",
                    "url": "v1/guides/getting-started/setup/qwik/index.html"
                }, {
                    "revision": "326417e851f400b8334dc32779dd0972",
                    "url": "v1/guides/getting-started/setup/sveltekit/index.html"
                }, {
                    "revision": "80e0649b212255cb58619d320379e19f",
                    "url": "v1/guides/getting-started/setup/vite/index.html"
                }, {
                    "revision": "f62d070bba8bd2d02e3b4837b77d5245",
                    "url": "v1/guides/index.html"
                }, {
                    "revision": "d0e9dcba22321df16f6894ca742cf8b5",
                    "url": "v1/guides/testing/mocking/index.html"
                }, {
                    "revision": "756c5fea956933ba9d85e16e44d903fd",
                    "url": "v1/guides/testing/webdriver/ci/index.html"
                }, {
                    "revision": "6ee8d213585913b0f66b7f6e8ee42919",
                    "url": "v1/guides/testing/webdriver/example/selenium/index.html"
                }, {
                    "revision": "feca1008dbf92631ca7fe90fd53402a7",
                    "url": "v1/guides/testing/webdriver/example/setup/index.html"
                }, {
                    "revision": "83dccf0944a5136b0d129c366f8d665d",
                    "url": "v1/guides/testing/webdriver/example/webdriverio/index.html"
                }, {
                    "revision": "03b0144ec03556dd3737372779db0aa8",
                    "url": "v1/guides/testing/webdriver/introduction/index.html"
                }, {
                    "revision": "d1c85464d8bfd53537563009f4d46d7a",
                    "url": "v1/references/architecture/index.html"
                }, {
                    "revision": "83dbd7778fb115a7dd146ee09caaf1fe",
                    "url": "v1/references/architecture/inter-process-communication/brownfield/index.html"
                }, {
                    "revision": "4d193bbac8a2c0d23879e5f7fdcb1382",
                    "url": "v1/references/architecture/inter-process-communication/index.html"
                }, {
                    "revision": "047358a9461a1d47acbeedccfdb7f32c",
                    "url": "v1/references/architecture/inter-process-communication/isolation/index.html"
                }, {
                    "revision": "bdf82069106f364f085bd56f34b39224",
                    "url": "v1/references/architecture/process-model/index.html"
                }, {
                    "revision": "5b5da9bbe15fe0222bc206ea4fb31eb3",
                    "url": "v1/references/architecture/security/index.html"
                }, {
                    "revision": "d087385e01ad42f87f0e05262d512142",
                    "url": "v1/references/benchmarks/index.html"
                }, {
                    "revision": "9cb2c85679448d7e0f767e5706a36b52",
                    "url": "v1/references/configuration-files/index.html"
                }, {
                    "revision": "008afb45df4d80710bdc0a591c1a84f5",
                    "url": "v1/references/index.html"
                }, {
                    "revision": "781a70cae18e22546c667fccac08e26d",
                    "url": "v1/references/security/index.html"
                }, {
                    "revision": "7414da134b4b87c554ff75be87e02bd9",
                    "url": "v1/references/webview-versions/index.html"
                }, {
                    "revision": "8df2117d801eb2f7201f19a3d960b055",
                    "url": "assets/images/add-cargo-config-dark-eb1a798e06706eacbc85c9d1280cb41d.png"
                }, {
                    "revision": "14a9dfaeb9c2958712bcb3bfde59de70",
                    "url": "assets/images/add-cargo-config-light-b1e6a7707f0058d915c80a5dadeb1743.png"
                }, {
                    "revision": "dbd5bd5ca4b0014cd3ca948d446ae61f",
                    "url": "assets/images/amrbashir-878b73f23fbc3498b4fbe82e6b8ada57.png"
                }, {
                    "revision": "a14c8fbb6a7756619baf74b1302f822e",
                    "url": "assets/images/android-preview-ba953223e8a2bbda8ec69aa6fb76f674.png"
                }, {
                    "revision": "82c337c8cc51d107aa4e65c907e3439f",
                    "url": "assets/images/beanow-dd78305390e528a85b7671696533983e.jpg"
                }, {
                    "revision": "4c6d7b13f492428d27f1fb46e523e549",
                    "url": "assets/images/example-993a90d996d8272c78b2074b349d83c0.png"
                }, {
                    "revision": "d696c6c327c745519930987c7d2644f3",
                    "url": "assets/images/github_stars_dark-f371cf73562d814e6cbc45adaea930d4.png"
                }, {
                    "revision": "c1ae71dee926bedb822e757f01029323",
                    "url": "assets/images/github_stars_light-41c77cf95a806ce2547eda8bffe2c15f.png"
                }, {
                    "revision": "17ecb0b0beda841b3960fb1c2997aa13",
                    "url": "assets/images/governance-diagram-72cf0e23cddd897dffbd5266ce409133.svg"
                }, {
                    "revision": "f1e16c12f9b2e4686578b90486643b7d",
                    "url": "assets/images/hackernews-1d0261ac9089b3ec254ca5406a95ca64.jpg"
                }, {
                    "revision": "0de1e465dadef8adac0b8b7d9a304d16",
                    "url": "assets/images/header-1a053e7eda9e578b957d2fa0548d37e0.png"
                }, {
                    "revision": "0e2122594e430aa0fb4fe6fb493b6d07",
                    "url": "assets/images/header-23c69af4b74360ebce87f2f9ec1f594e.png"
                }, {
                    "revision": "2826dfca738cdc1795e77d12eb269906",
                    "url": "assets/images/header-35662a534ae509ca079ac165b1ed28fc.png"
                }, {
                    "revision": "682bb6b0ee52b01724a3383e3ebde70c",
                    "url": "assets/images/header-633315187fcfdffeddfdb84132f69b24.png"
                }, {
                    "revision": "c83190048d53763370f6bca28c4390a1",
                    "url": "assets/images/header-8f24f5059dd7bab5bd014a59f916640a.png"
                }, {
                    "revision": "d450ef0ca178edaf9221f906fcb1d855",
                    "url": "assets/images/header-a26cf30e099f85bd6c01732d6457a5fd.jpg"
                }, {
                    "revision": "3678fae37db974d121b0f09f25c30854",
                    "url": "assets/images/header-ae623d29abbe5d2ca2509b55e215d83c.png"
                }, {
                    "revision": "591eb6820c8b5faa1cc789275c749a60",
                    "url": "assets/images/header-e7a34e86e4b8203cb5bf14aa4d4ae353.jpg"
                }, {
                    "revision": "48114a9472fb486987f52afc69041d32",
                    "url": "assets/images/hoodie-604644bdf3d182c82ea90b58b414c18f.jpg"
                }, {
                    "revision": "ee72e3213dccb543cc042b2647b1c882",
                    "url": "assets/images/html-css-js-dev-dark-4e4e3e8819a54aeadba0b8075ce56e8b.png"
                }, {
                    "revision": "3cc73dcef64b33f862b33231d08482e2",
                    "url": "assets/images/html-css-js-dev-light-4c95c978b120ed30080617ee92e08357.png"
                }, {
                    "revision": "ddf4e3400ff92d1f6923f7ebabb51ddf",
                    "url": "assets/images/init-0279945d40196d63bffcbdb86cf218bc.png"
                }, {
                    "revision": "da1ff668105f1e352afc2be46ec7e285",
                    "url": "assets/images/ios-preview-bc80f5f90fb01c15300c92e26801b331.png"
                }, {
                    "revision": "7068b524fa44760c08abdce8b5ddb9e5",
                    "url": "assets/images/jbolda-1b47ccf19d3a5bef0c4ad922c4c5b036.jpeg"
                }, {
                    "revision": "f19c72b07d4fe69731fe6da4e2b2f2f8",
                    "url": "assets/images/lorenzolewis-54aea0e95428b53448168e3324578a59.png"
                }, {
                    "revision": "346c13eb54c22b2353d1f01288685594",
                    "url": "assets/images/lucasfernog-86e4473509d4c21bbcda82223fabe826.jpg"
                }, {
                    "revision": "7425c708a4214124051f17f1de70be05",
                    "url": "assets/images/next-js-dark-cbfb39774d8a6fd4970a46e312851029.png"
                }, {
                    "revision": "5fb70bb4390e20115ecf35e0676bf86a",
                    "url": "assets/images/next-js-dev-dark-7145997f18183b2ef72c5af102058f51.png"
                }, {
                    "revision": "c4d09f199010d4ad6a8a2882d28fca20",
                    "url": "assets/images/next-js-dev-light-d82eef4b96c91db047c4026205415137.png"
                }, {
                    "revision": "f8fc2c72ad11d6e19e4e2887e12ed799",
                    "url": "assets/images/next-js-light-90e1d8eae4e0372ebca2523361e36f9a.png"
                }, {
                    "revision": "433711b0efd4651a47c61359e156314d",
                    "url": "assets/images/nothingismagick-7c03825f2e03901b0b176e80cb26bebd.jpg"
                }, {
                    "revision": "a0e7fcc37eaa2432a8be7b17d7fe8ce5",
                    "url": "assets/images/ossc_logo_dark-b51d38a60f0873d1ecb3caed8058e5a8.png"
                }, {
                    "revision": "9b5625554730744b2db8ed47e1250dd4",
                    "url": "assets/images/ossc_logo_light-84470e2d37b02d06b60fb8b0baa6c386.png"
                }, {
                    "revision": "ebc94eb872a37fcdf12401c1caaca4a9",
                    "url": "assets/images/ossinsight-45949ccf166d68ac4658b4273dfb61d5.jpg"
                }, {
                    "revision": "771572fb01bfcd7cd164ed7b2faa72eb",
                    "url": "assets/images/rename-configuration-dark-b91383cae089e47d5c7456e3a962596b.png"
                }, {
                    "revision": "9ed21443ceec0dc9696557dbf1be6e92",
                    "url": "assets/images/rename-configuration-light-5740a3ead5c56967d74a1b7272b4687c.png"
                }, {
                    "revision": "8bfb3a0ac14f88ca8250e960e50f6b22",
                    "url": "assets/images/result-410742564ad5cfe636b9b51077152ef9.png"
                }, {
                    "revision": "3a32276ebedd3ffa8701007723eb18c4",
                    "url": "assets/images/result-888ca764c942ed1d228e2d534b2b0699.png"
                }, {
                    "revision": "50a9b77be508039c429f3a095ea08407",
                    "url": "assets/images/search_preview-0e9a66ad03a1eb6cca01350f9fb3fa68.gif"
                }, {
                    "revision": "2718a3947daea8f3ec79c9425810b07b",
                    "url": "assets/images/set-no-default-features-dark-66d6a096aa95a91a9bfe1d74b4739871.png"
                }, {
                    "revision": "0a186f0104d83ae96128f0acac7a1360",
                    "url": "assets/images/set-no-default-features-light-33d99ee27279541c27586bcc51cb0f8d.png"
                }, {
                    "revision": "c746710670214d297e14c32869b8bd52",
                    "url": "assets/images/spacedrive_logo_dark-119b52901cb7e827f567aa0e9a85e417.png"
                }, {
                    "revision": "801cdcf09f1c6b99a98de4ff93e143e9",
                    "url": "assets/images/spacedrive_logo_light-5204811e262314fab64d78717d47efd8.png"
                }, {
                    "revision": "370d560649d2ac2ba6ef5b1165da10c3",
                    "url": "assets/images/state_of_js-4d3cbc0f2d20816dd8628b38060e04dd.png"
                }, {
                    "revision": "4744368994193cb5db59b00b7b9041b0",
                    "url": "assets/images/tauri-trademark-page-764fa8149c4d47902677d276a692dc00.jpg"
                }, {
                    "revision": "3a3d8c26e75aec476cba6be1347ce074",
                    "url": "assets/images/update-available-01210961ee703996fbda4f039e84e319.png"
                }, {
                    "revision": "c1bcdf4caaf59115e5f076c304c88b34",
                    "url": "assets/images/vite-dev-dark-e719222ea84b74f10463a3563f3f14e7.png"
                }, {
                    "revision": "219f3fa75f2a61da359ac1cd380bf73b",
                    "url": "assets/images/vite-dev-light-c730bd93e534922666b4818fd679772c.png"
                }, {
                    "revision": "4fc7c936a919baf18c50e23331c033e7",
                    "url": "assets/images/vs-installer-dark-03cefd64bd4335f718aacc8f4842d2bb.png"
                }, {
                    "revision": "c7de27902c28deb7f97162bf4da0aeb2",
                    "url": "assets/images/vs-installer-light-ff9f655b16965d4ac45117fe2f2624e9.png"
                }, {
                    "revision": "62cba67165cbd4acc308d6952f37c844",
                    "url": "assets/images/worker_conf_2022-dc76f4fe18cc340ca85e1070d51329ce.png"
                }, {
                    "revision": "de9d9122445f81900029ef7422ada114",
                    "url": "assets/images/wusyong-f912118d772ad17bba6554bc57ad2968.jpg"
                }, {
                    "revision": "9c8e96ecc7fa01e6ebcd196495ed2db5",
                    "url": "fonts/themify.svg"
                }, {
                    "revision": "cdb469468cb47f7620d3528621da8284",
                    "url": "img/bookCover.png"
                }, {
                    "revision": "2fceea3634a91a717925b40bde2c4516",
                    "url": "img/contrast.svg"
                }, {
                    "revision": "338abbb5ea8d80b9869555eca253d49d",
                    "url": "img/favicon.ico"
                }, {
                    "revision": "8df2117d801eb2f7201f19a3d960b055",
                    "url": "img/guides/debugging/clion/add-cargo-config-dark.png"
                }, {
                    "revision": "14a9dfaeb9c2958712bcb3bfde59de70",
                    "url": "img/guides/debugging/clion/add-cargo-config-light.png"
                }, {
                    "revision": "771572fb01bfcd7cd164ed7b2faa72eb",
                    "url": "img/guides/debugging/clion/rename-configuration-dark.png"
                }, {
                    "revision": "9ed21443ceec0dc9696557dbf1be6e92",
                    "url": "img/guides/debugging/clion/rename-configuration-light.png"
                }, {
                    "revision": "2718a3947daea8f3ec79c9425810b07b",
                    "url": "img/guides/debugging/clion/set-no-default-features-dark.png"
                }, {
                    "revision": "0a186f0104d83ae96128f0acac7a1360",
                    "url": "img/guides/debugging/clion/set-no-default-features-light.png"
                }, {
                    "revision": "3a3d8c26e75aec476cba6be1347ce074",
                    "url": "img/guides/distribution/updater/update-available.png"
                }, {
                    "revision": "ee72e3213dccb543cc042b2647b1c882",
                    "url": "img/guides/getting-started/setup/html-css-js/html-css-js-dev-dark.png"
                }, {
                    "revision": "3cc73dcef64b33f862b33231d08482e2",
                    "url": "img/guides/getting-started/setup/html-css-js/html-css-js-dev-light.png"
                }, {
                    "revision": "0cb35b0ecee255a0e2075cfe11843c55",
                    "url": "img/guides/getting-started/setup/html5-dark.svg"
                }, {
                    "revision": "525f317fe9e90927edf7694d88ce42c8",
                    "url": "img/guides/getting-started/setup/html5-light.svg"
                }, {
                    "revision": "da8eef19c8f6e528859cae83b856f9db",
                    "url": "img/guides/getting-started/setup/integrate-dark.svg"
                }, {
                    "revision": "eaf821317e76e230ca3c88e44366b9af",
                    "url": "img/guides/getting-started/setup/integrate-light.svg"
                }, {
                    "revision": "7425c708a4214124051f17f1de70be05",
                    "url": "img/guides/getting-started/setup/next-js/next-js-dark.png"
                }, {
                    "revision": "5fb70bb4390e20115ecf35e0676bf86a",
                    "url": "img/guides/getting-started/setup/next-js/next-js-dev-dark.png"
                }, {
                    "revision": "c4d09f199010d4ad6a8a2882d28fca20",
                    "url": "img/guides/getting-started/setup/next-js/next-js-dev-light.png"
                }, {
                    "revision": "f8fc2c72ad11d6e19e4e2887e12ed799",
                    "url": "img/guides/getting-started/setup/next-js/next-js-light.png"
                }, {
                    "revision": "1add7a2340f69c77d00df24b9ff42eab",
                    "url": "img/guides/getting-started/setup/nextjs-dark.svg"
                }, {
                    "revision": "11a227f25d9a9bba12c04cc4ff9f32f6",
                    "url": "img/guides/getting-started/setup/nextjs-light.svg"
                }, {
                    "revision": "5c53ef44d4f7df1968a30b6545bb606f",
                    "url": "img/guides/getting-started/setup/qwik.svg"
                }, {
                    "revision": "8bfb3a0ac14f88ca8250e960e50f6b22",
                    "url": "img/guides/getting-started/setup/qwik/result.png"
                }, {
                    "revision": "211081871076759a1c63f38178a7a011",
                    "url": "img/guides/getting-started/setup/svelte.svg"
                }, {
                    "revision": "ddf4e3400ff92d1f6923f7ebabb51ddf",
                    "url": "img/guides/getting-started/setup/sveltekit/init.png"
                }, {
                    "revision": "3a32276ebedd3ffa8701007723eb18c4",
                    "url": "img/guides/getting-started/setup/sveltekit/result.png"
                }, {
                    "revision": "1821c958bbe5e0a6a4563025af907760",
                    "url": "img/guides/getting-started/setup/vite.svg"
                }, {
                    "revision": "c1bcdf4caaf59115e5f076c304c88b34",
                    "url": "img/guides/getting-started/setup/vite/vite-dev-dark.png"
                }, {
                    "revision": "219f3fa75f2a61da359ac1cd380bf73b",
                    "url": "img/guides/getting-started/setup/vite/vite-dev-light.png"
                }, {
                    "revision": "29827909ffa6338118fa9393a9efafd0",
                    "url": "img/index/blue_loops.svg"
                }, {
                    "revision": "75a76d0dc709bf38e0774b13c8048200",
                    "url": "img/index/blue_package.svg"
                }, {
                    "revision": "70babbe17d617275428c9463cd16a39c",
                    "url": "img/index/header_dark.svg"
                }, {
                    "revision": "097eeac17b244b2947664e3eb86b8814",
                    "url": "img/index/header_light.svg"
                }, {
                    "revision": "34cafb3f4b9cc88a1c32872a89c31ed9",
                    "url": "img/index/illustrations/box.svg"
                }, {
                    "revision": "933edc308c41b823b7526481b846a9d9",
                    "url": "img/index/illustrations/brownfield.svg"
                }, {
                    "revision": "e2679b42ee15b4b94e1397b7f982b686",
                    "url": "img/index/illustrations/code.svg"
                }, {
                    "revision": "7b370cb38e9239983f3f72d36a78f1a1",
                    "url": "img/index/illustrations/cross_platform.svg"
                }, {
                    "revision": "a08fd9787d6409aef0ddcfee727bf8ec",
                    "url": "img/index/illustrations/floss.svg"
                }, {
                    "revision": "63bda70bcde5bbb1e35687f282570244",
                    "url": "img/index/illustrations/security.svg"
                }, {
                    "revision": "8e4425a5dde0bb9e8b29fb6d0a5d78e2",
                    "url": "img/index/orange_loops.svg"
                }, {
                    "revision": "df4cee3c07429032aaf80d39bda46f5c",
                    "url": "img/index/orange_package.svg"
                }, {
                    "revision": "730af10f67646f312b883df6a831a5a1",
                    "url": "img/index/partners/1Password_color_dark.svg"
                }, {
                    "revision": "90bf4f480a92ed23d03203844f40077f",
                    "url": "img/index/partners/1Password_color_light.svg"
                }, {
                    "revision": "047338aeaee58c72d75ffa7bf8ab66a5",
                    "url": "img/index/partners/ClickUp_color_dark.svg"
                }, {
                    "revision": "926d575a34c5f9c504592f12202cc625",
                    "url": "img/index/partners/ClickUp_color_light.svg"
                }, {
                    "revision": "02cfbe2354ce25757c98acbec5d15819",
                    "url": "img/index/partners/Cloudflare_color_dark.svg"
                }, {
                    "revision": "61c42dc7b98c263571f5653da28f5648",
                    "url": "img/index/partners/Cloudflare_color_light.svg"
                }, {
                    "revision": "71f3b4a1f5f8e3b253821d560cb6b416",
                    "url": "img/index/partners/DigitalOcean_color_dark.svg"
                }, {
                    "revision": "e87fe65f0a3185464b8f8daf3525820d",
                    "url": "img/index/partners/DigitalOcean_color_light.svg"
                }, {
                    "revision": "83a241e2b85811458598db1da77bd0a5",
                    "url": "img/index/partners/dimension_color_dark.svg"
                }, {
                    "revision": "a8367659f3be03610bd75bbd5d695c10",
                    "url": "img/index/partners/dimension_color_light.svg"
                }, {
                    "revision": "356973b96558ed16b18074b0b9486a88",
                    "url": "img/index/partners/keygen_color_dark.svg"
                }, {
                    "revision": "642ef6eac6afecaafdd445572dc55f8e",
                    "url": "img/index/partners/keygen_color_light.svg"
                }, {
                    "revision": "6ed8d5104126ac937a323c93b13a649d",
                    "url": "img/index/partners/leniolabs_color_dark.svg"
                }, {
                    "revision": "43e53d219449c54641a5f4de6e3285f2",
                    "url": "img/index/partners/leniolabs_color_light.svg"
                }, {
                    "revision": "7d006bd392dc0af16f496dc7306b72b7",
                    "url": "img/index/partners/meilisearch_color_dark.svg"
                }, {
                    "revision": "4576ec491351ad25cb6d93519b46a603",
                    "url": "img/index/partners/meilisearch_color_light.svg"
                }, {
                    "revision": "bce2eed36bb5b03c06ca64d09d4becb1",
                    "url": "img/index/partners/Mintter_color_dark.svg"
                }, {
                    "revision": "0a3d23b02e4d81f8ede90891262bbfa4",
                    "url": "img/index/partners/Mintter_color_light.svg"
                }, {
                    "revision": "7b34c1f3d4a092cd8d4e1d29f6d7843f",
                    "url": "img/index/partners/Netlify_color_dark.svg"
                }, {
                    "revision": "d97368a7ee2b3c1c274aedb9371aa9bc",
                    "url": "img/index/partners/Netlify_color_light.svg"
                }, {
                    "revision": "75eb378153dc8ec56ab2ff256a694c94",
                    "url": "img/index/partners/nlnet_color_dark.svg"
                }, {
                    "revision": "0970a8d0db4e9f6f601b128723dfa7d8",
                    "url": "img/index/partners/nlnet_color_light.svg"
                }, {
                    "revision": "54543115252f64851211eb35659f5bb1",
                    "url": "img/index/partners/padloc_color_light.svg"
                }, {
                    "revision": "69ff56fbc354720562f8c6fb6784be4c",
                    "url": "img/index/partners/vps_server_color_dark.svg"
                }, {
                    "revision": "d65e19a813d92607317c703ac0d85cc5",
                    "url": "img/index/partners/vps_server_color_light.svg"
                }, {
                    "revision": "eeb558422baffdaf41e339fc5181490c",
                    "url": "img/oss_logo.png"
                }, {
                    "revision": "71d16e16f8885c162d5d0e42fdcb63d4",
                    "url": "img/recipes/Bridge.svg"
                }, {
                    "revision": "0e3d433f14866aea9f9a314103fc41ab",
                    "url": "img/recipes/Cloudbridge.svg"
                }, {
                    "revision": "604bf1f121562f16ec2793099ddb5d0a",
                    "url": "img/recipes/Cloudish.svg"
                }, {
                    "revision": "7067f8ab83fd614dbd85c9cb17dd1f38",
                    "url": "img/recipes/GLUI.svg"
                }, {
                    "revision": "10643eee88fcbb6e8cb61c099aacd5c6",
                    "url": "img/recipes/Hermit.svg"
                }, {
                    "revision": "c198fa88fe75e7396bbf6e6b7f21fdb1",
                    "url": "img/recipes/Lockdown.svg"
                }, {
                    "revision": "0b5704a3c4d7537d98a22c3113be7b68",
                    "url": "img/recipes/Multiwin.svg"
                }, {
                    "revision": "79b02dc026ee6a936604b11a13dff6ec",
                    "url": "img/smile.png"
                }, {
                    "revision": "97087ecf99aba7b3f760c6904f00a474",
                    "url": "img/social.png"
                }, {
                    "revision": "4744368994193cb5db59b00b7b9041b0",
                    "url": "img/tauri-trademark-page.jpg"
                }, {
                    "revision": "6532c92ac6af0c19b60df0197d65462a",
                    "url": "img/tauri.png"
                }, {
                    "revision": "eb1d9c314e76324f289f6af0dc29dd80",
                    "url": "img/tauri.svg"
                }, {
                    "revision": "333e3a4b09ba824bf15e9f605b714a38",
                    "url": "img/webdriver/hello-tauri-webdriver.png"
                }, {
                    "revision": "a50531f4f4356c7dc04379c021865139",
                    "url": "meta/favicon-144x144.png"
                }, {
                    "revision": "a07fb1e41cd36fd86fa472a5f1c4801f",
                    "url": "meta/favicon-16x16.png"
                }, {
                    "revision": "bcfe1437deeb3b816919ce06678d7dc8",
                    "url": "meta/favicon-32x32.png"
                }, {
                    "revision": "07351a90185cc5331ebbaf41dcd8833e",
                    "url": "meta/favicon-512x512.png"
                }, {
                    "revision": "1847b64472d07e0ba620b2bd73b650e8",
                    "url": "meta/favicon-96x96.png"
                }, {
                    "revision": "8f55b2d2ec8b1cdc93b5382ab7ec4a4f",
                    "url": "meta/favicon-apple-touch-icon.png"
                }, {
                    "revision": "eaed74141a23536f91da8cbd66f9fce3",
                    "url": "meta/state-of-tauri-2022-logo.svg"
                }, {
                    "revision": "fab8dbb7f89c464d9dce1ec01fda3c4d",
                    "url": "meta/tauri_logo_dark.svg"
                }, {
                    "revision": "faddee99422f1a2a96b5a9103136535b",
                    "url": "meta/tauri_logo_light.svg"
                }, {
                    "revision": "3d0ec57f40d62ba6a8e0d1857bb8f7d5",
                    "url": "assets/fonts/bootstrap-icons-4753c5ba57962b4d7bf8248a65c8e909.woff"
                }, {
                    "revision": "a30fb81bd52143bcd4de2898422ac8b9",
                    "url": "assets/fonts/bootstrap-icons-6d63d0501e5ed7b79dab993a344e5676.woff2"
                }, {
                    "revision": "717055430c80fee2dadb646e2b9800fe",
                    "url": "assets/fonts/rubik-latin-400-normal-86197d6f93b1eea220d0035f2068cdc8.woff2"
                }, {
                    "revision": "764fb07657ed306c3dd5ac0e72a29655",
                    "url": "assets/fonts/rubik-latin-400-normal-bca4b94f17366659cc98545a89f5e847.woff"
                }, {
                    "revision": "14d8e072edc72edeee5e3e184f42fe87",
                    "url": "assets/fonts/rubik-latin-ext-400-normal-63437145a08a57c69aa0b10a66f2de07.woff"
                }, {
                    "revision": "2c454669bdf3aebf32a1bd8ac1e0d2d6",
                    "url": "fonts/themify.eot"
                }, {
                    "revision": "e23a7dcaefbde4e74e263247aa42ecd7",
                    "url": "fonts/themify.ttf"
                }, {
                    "revision": "a1ecc3b826d01251edddf29c3e4e1e97",
                    "url": "fonts/themify.woff"
                }],
                s = new v({
                    fallbackToNetwork: !0
                });
            e.offlineMode && (s.addToCacheList(t), e.debug && console.log("[Docusaurus-PWA][SW]: addToCacheList", {
                precacheManifest: t
            })), await async function(e) {}(), self.addEventListener("install", (t => {
                e.debug && console.log("[Docusaurus-PWA][SW]: install event", {
                    event: t
                }), t.waitUntil(s.install(t))
            })), self.addEventListener("activate", (t => {
                e.debug && console.log("[Docusaurus-PWA][SW]: activate event", {
                    event: t
                }), t.waitUntil(s.activate(t))
            })), self.addEventListener("fetch", (async t => {
                if (e.offlineMode) {
                    const a = t.request.url,
                        n = function(e) {
                            const t = new URL(e, self.location.href);
                            return t.origin !== self.location.origin ? [] : (t.search = "", t.hash = "", [t.href, `${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])
                        }(a);
                    for (const i of n) {
                        const r = s.getCacheKeyForURL(i);
                        if (r) {
                            const s = caches.match(r);
                            e.debug && console.log("[Docusaurus-PWA][SW]: serving cached asset", {
                                requestURL: a,
                                possibleURL: i,
                                possibleURLs: n,
                                cacheKey: r,
                                cachedResponse: s
                            }), t.respondWith(s);
                            break
                        }
                    }
                }
            })), self.addEventListener("message", (async t => {
                e.debug && console.log("[Docusaurus-PWA][SW]: message event", {
                    event: t
                });
                const s = t.data ? .type;
                "SKIP_WAITING" === s && self.skipWaiting()
            }))
        })()
    })()
})();