"use strict";
(self.webpackChunktauri_docs = self.webpackChunktauri_docs || []).push([
    [4195], {
        9247: function(e, a, t) {
            t.d(a, {
                Z: function() {
                    return m
                }
            });
            var r = t(7294),
                n = t(6010),
                l = "tabItem_Ymn6",
                s = Object.defineProperty,
                o = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable,
                u = (e, a, t) => a in e ? s(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;

            function m({
                children: e,
                hidden: a,
                className: t
            }) {
                return r.createElement("div", ((e, a) => {
                    for (var t in a || (a = {})) i.call(a, t) && u(e, t, a[t]);
                    if (o)
                        for (var t of o(a)) c.call(a, t) && u(e, t, a[t]);
                    return e
                })({
                    role: "tabpanel",
                    className: (0, n.Z)(l, t)
                }, {
                    hidden: a
                }), e)
            }
        },
        4023: function(e, a, t) {
            t.d(a, {
                Z: function() {
                    return V
                }
            });
            var r = t(7294),
                n = t(6010),
                l = t(7287),
                s = t(6775),
                o = t(3962),
                i = t(9920),
                c = t(5801),
                u = Object.defineProperty,
                m = Object.defineProperties,
                g = Object.getOwnPropertyDescriptors,
                p = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                h = Object.prototype.propertyIsEnumerable,
                f = (e, a, t) => a in e ? u(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;

            function v(e) {
                return function(e) {
                    var a, t;
                    return null != (t = null == (a = r.Children.map(e, (e => {
                        if (!e || (0, r.isValidElement)(e) && function(e) {
                                const {
                                    props: a
                                } = e;
                                return !!a && "object" == typeof a && "value" in a
                            }(e)) return e;
                        throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)
                    }))) ? void 0 : a.filter(Boolean)) ? t : []
                }(e).map((({
                    props: {
                        value: e,
                        label: a,
                        attributes: t,
                        default: r
                    }
                }) => ({
                    value: e,
                    label: a,
                    attributes: t,
                    default: r
                })))
            }

            function b(e) {
                const {
                    values: a,
                    children: t
                } = e;
                return (0, r.useMemo)((() => {
                    const e = null != a ? a : v(t);
                    return function(e) {
                        const a = (0, i.l)(e, ((e, a) => e.value === a.value));
                        if (a.length > 0) throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)
                    }(e), e
                }), [a, t])
            }

            function E({
                value: e,
                tabValues: a
            }) {
                return a.some((a => a.value === e))
            }

            function k({
                queryString: e = !1,
                groupId: a
            }) {
                const t = (0, s.k6)(),
                    n = function({
                        queryString: e = !1,
                        groupId: a
                    }) {
                        if ("string" == typeof e) return e;
                        if (!1 === e) return null;
                        if (!0 === e && !a) throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');
                        return null != a ? a : null
                    }({
                        queryString: e,
                        groupId: a
                    });
                return [(0, o._X)(n), (0, r.useCallback)((e => {
                    if (!n) return;
                    const a = new URLSearchParams(t.location.search);
                    var r, l;
                    a.set(n, e), t.replace((r = ((e, a) => {
                        for (var t in a || (a = {})) d.call(a, t) && f(e, t, a[t]);
                        if (p)
                            for (var t of p(a)) h.call(a, t) && f(e, t, a[t]);
                        return e
                    })({}, t.location), l = {
                        search: a.toString()
                    }, m(r, g(l))))
                }), [n, t])]
            }

            function y(e) {
                const {
                    defaultValue: a,
                    queryString: t = !1,
                    groupId: n
                } = e, l = b(e), [s, o] = (0, r.useState)((() => function({
                    defaultValue: e,
                    tabValues: a
                }) {
                    var t;
                    if (0 === a.length) throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");
                    if (e) {
                        if (!E({
                                value: e,
                                tabValues: a
                            })) throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);
                        return e
                    }
                    const r = null != (t = a.find((e => e.default))) ? t : a[0];
                    if (!r) throw new Error("Unexpected error: 0 tabValues");
                    return r.value
                }({
                    defaultValue: a,
                    tabValues: l
                }))), [i, u] = k({
                    queryString: t,
                    groupId: n
                }), [m, g] = function({
                    groupId: e
                }) {
                    const a = function(e) {
                            return e ? `docusaurus.tab.${e}` : null
                        }(e),
                        [t, n] = (0, c.Nk)(a);
                    return [t, (0, r.useCallback)((e => {
                        a && n.set(e)
                    }), [a, n])]
                }({
                    groupId: n
                }), p = (() => {
                    const e = null != i ? i : m;
                    return E({
                        value: e,
                        tabValues: l
                    }) ? e : null
                })();
                (0, r.useLayoutEffect)((() => {
                    p && o(p)
                }), [p]);
                return {
                    selectedValue: s,
                    selectValue: (0, r.useCallback)((e => {
                        if (!E({
                                value: e,
                                tabValues: l
                            })) throw new Error(`Can't select invalid tab value=${e}`);
                        o(e), u(e), g(e)
                    }), [u, g, l]),
                    tabValues: l
                }
            }
            var _ = t(5710),
                I = "tabList__CuJ",
                w = "tabItem_LNqP",
                N = Object.defineProperty,
                C = Object.defineProperties,
                Z = Object.getOwnPropertyDescriptors,
                O = Object.getOwnPropertySymbols,
                S = Object.prototype.hasOwnProperty,
                D = Object.prototype.propertyIsEnumerable,
                P = (e, a, t) => a in e ? N(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t,
                x = (e, a) => {
                    for (var t in a || (a = {})) S.call(a, t) && P(e, t, a[t]);
                    if (O)
                        for (var t of O(a)) D.call(a, t) && P(e, t, a[t]);
                    return e
                };

            function j({
                className: e,
                block: a,
                selectedValue: t,
                selectValue: s,
                tabValues: o
            }) {
                const i = [],
                    {
                        blockElementScrollPositionUntilNextRender: c
                    } = (0, l.o5)(),
                    u = e => {
                        const a = e.currentTarget,
                            r = i.indexOf(a),
                            n = o[r].value;
                        n !== t && (c(a), s(n))
                    },
                    m = e => {
                        var a, t;
                        let r = null;
                        switch (e.key) {
                            case "Enter":
                                u(e);
                                break;
                            case "ArrowRight":
                                {
                                    const t = i.indexOf(e.currentTarget) + 1;r = null != (a = i[t]) ? a : i[0];
                                    break
                                }
                            case "ArrowLeft":
                                {
                                    const a = i.indexOf(e.currentTarget) - 1;r = null != (t = i[a]) ? t : i[i.length - 1];
                                    break
                                }
                        }
                        null == r || r.focus()
                    };
                return r.createElement("ul", {
                    role: "tablist",
                    "aria-orientation": "horizontal",
                    className: (0, n.Z)("tabs", {
                        "tabs--block": a
                    }, e)
                }, o.map((({
                    value: e,
                    label: a,
                    attributes: l
                }) => {
                    return r.createElement("li", (s = x({
                        role: "tab",
                        tabIndex: t === e ? 0 : -1,
                        "aria-selected": t === e,
                        key: e,
                        ref: e => i.push(e),
                        onKeyDown: m,
                        onClick: u
                    }, l), o = {
                        className: (0, n.Z)("tabs__item", w, null == l ? void 0 : l.className, {
                            "tabs__item--active": t === e
                        })
                    }, C(s, Z(o))), null != a ? a : e);
                    var s, o
                })))
            }

            function T({
                lazy: e,
                children: a,
                selectedValue: t
            }) {
                const n = (Array.isArray(a) ? a : [a]).filter(Boolean);
                if (e) {
                    const e = n.find((e => e.props.value === t));
                    return e ? (0, r.cloneElement)(e, {
                        className: "margin-top--md"
                    }) : null
                }
                return r.createElement("div", {
                    className: "margin-top--md"
                }, n.map(((e, a) => (0, r.cloneElement)(e, {
                    key: a,
                    hidden: e.props.value !== t
                }))))
            }

            function L(e) {
                const a = y(e);
                return r.createElement("div", {
                    className: (0, n.Z)("tabs-container", I)
                }, r.createElement(j, x(x({}, e), a)), r.createElement(T, x(x({}, e), a)))
            }

            function V(e) {
                const a = (0, _.Z)();
                return r.createElement(L, x({
                    key: String(a)
                }, e))
            }
        },
        3174: function(e, a, t) {
            t.r(a), t.d(a, {
                default: function() {
                    return te
                }
            });
            var r = t(7294),
                n = t(4184),
                l = t.n(n),
                s = "row_Kb3D",
                o = "h1_SKUt",
                i = "spacer_hnjC",
                c = "hero_aEcG",
                u = "heroContainer_i2aB",
                m = "heroBefore_Nccm",
                g = "heroAfter_rddx",
                p = "loopsContainer_X0tn",
                d = "heroLoops_wCY6",
                h = "heroPackage_2PmF",
                f = "heroImage_xZN7",
                v = "heroSubtitle_jFu1",
                b = "commandContainer_y6dw",
                E = "cardContainer_z0Sh",
                k = "card_M5pr",
                y = "cardSide_Y6jR",
                _ = "cardLeading_NK6F",
                I = "cardImage_DTfg",
                w = "cardSpacer_TH73",
                N = "featureRoadmapEntry_kVIk",
                C = "featureRoadmapIconContainer_u1CY",
                Z = "featureRoadmapIcon_ODO8",
                O = "featureIcon_qaBM",
                S = "roadmapIcon_IDaP",
                D = "sponsor_eEfG",
                P = t(6067),
                x = t(1128),
                j = t(5692),
                T = t(4305),
                L = t(433),
                V = t(580),
                B = t(4699),
                M = t(1013),
                U = Object.defineProperty,
                A = Object.defineProperties,
                q = Object.getOwnPropertyDescriptors,
                R = Object.getOwnPropertySymbols,
                z = Object.prototype.hasOwnProperty,
                Y = Object.prototype.propertyIsEnumerable,
                F = (e, a, t) => a in e ? U(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t,
                $ = (e, a) => {
                    for (var t in a || (a = {})) z.call(a, t) && F(e, t, a[t]);
                    if (R)
                        for (var t of R(a)) Y.call(a, t) && F(e, t, a[t]);
                    return e
                },
                G = (e, a) => A(e, q(a));

            function K() {
                const e = [{
                        label: (0, B.I)({
                            message: "Brownfield"
                        }),
                        description: (0, B.I)({
                            message: "Compatibility with any front-end framework means you don't have to change your stack."
                        }),
                        link: "/guides/getting-started/setup",
                        isDoc: !0,
                        linkText: (0, B.I)({
                            message: "Learn More"
                        }),
                        imageUrl: "img/index/illustrations/brownfield.svg"
                    }, {
                        label: (0, B.I)({
                            message: "Security"
                        }),
                        description: (0, B.I)({
                            message: "Front-of-mind for the Tauri Team driving our highest priorities and biggest innovations."
                        }),
                        link: "/references/architecture/security",
                        isDoc: !0,
                        linkText: (0, B.I)({
                            message: "Learn More"
                        }),
                        imageUrl: "img/index/illustrations/security.svg"
                    }, {
                        label: (0, B.I)({
                            message: "FLOSS"
                        }),
                        description: (0, B.I)({
                            message: "Relicensing and redistribution is possible thanks to MIT or MIT/Apache 2.0 licensing where applicable."
                        }),
                        link: "about/intro#honest-open-source",
                        linkText: (0, B.I)({
                            message: "Learn More"
                        }),
                        imageUrl: "img/index/illustrations/floss.svg"
                    }, {
                        label: (0, B.I)({
                            message: "Bundle Size"
                        }),
                        description: (0, B.I)({
                            message: "By using the OS's native web renderer, the size of a Tauri app can be less than 600KB."
                        }),
                        link: "/references/benchmarks",
                        isDoc: !0,
                        linkText: (0, B.I)({
                            message: "Learn More"
                        }),
                        imageUrl: "img/index/illustrations/box.svg"
                    }, {
                        label: (0, B.I)({
                            message: "Cross Platform"
                        }),
                        description: (0, B.I)({
                            message: "Bundle binaries for all major desktop platforms (mobile coming soon)."
                        }),
                        link: "/guides/building/cross-platform",
                        isDoc: !0,
                        linkText: (0, B.I)({
                            message: "Learn More"
                        }),
                        imageUrl: "img/index/illustrations/cross_platform.svg"
                    }, {
                        label: (0, B.I)({
                            message: "Built on Rust"
                        }),
                        description: (0, B.I)({
                            message: "With performance and security at the center, Rust is the language for the next generation of apps."
                        }),
                        link: "https://docs.rs/tauri/1/",
                        linkText: (0, B.I)({
                            message: "Learn More"
                        }),
                        imageUrl: "img/index/illustrations/code.svg"
                    }],
                    a = (0, V.yW)();
                return r.createElement("section", {
                    className: l()(E)
                }, e.map(((e, t) => r.createElement("div", {
                    className: l()(k, "card"),
                    key: t
                }, r.createElement("div", {
                    className: l()(y, _)
                }, r.createElement("h2", null, e.label), r.createElement("p", null, e.description), r.createElement("div", {
                    className: l()(w)
                }), r.createElement(x.Z, {
                    className: "button button--primary",
                    href: (e.isDoc ? a.path : "") + e.link
                }, e.linkText)), r.createElement("div", {
                    className: l()(y, I)
                }, r.createElement("img", {
                    src: e.imageUrl
                }))))))
            }

            function W() {
                const e = [{
                    title: (0, B.I)({
                        message: "Desktop Bundler"
                    }),
                    description: (0, B.I)({
                        message: "Bundle for all major desktops from native systems"
                    }),
                    icon: "box-seam"
                }, {
                    title: (0, B.I)({
                        message: "Self Updater"
                    }),
                    description: (0, B.I)({
                        message: "Update Tauri Apps from within themselves"
                    }),
                    icon: "cloud-arrow-down"
                }, {
                    title: (0, B.I)({
                        message: "Core Plugin System"
                    }),
                    description: (0, B.I)({
                        message: "Build reusable plugins to extend Tauri core"
                    }),
                    icon: "puzzle"
                }, {
                    title: (0, B.I)({
                        message: "Scoped Filesystem"
                    }),
                    description: (0, B.I)({
                        message: "Improved security of file interactions"
                    }),
                    icon: "safe"
                }, {
                    title: (0, B.I)({
                        message: "App Tray"
                    }),
                    description: (0, B.I)({
                        message: "Cross-platform desktop icon tray"
                    }),
                    icon: "menu-app"
                }, {
                    title: (0, B.I)({
                        message: "GitHub Action"
                    }),
                    description: (0, B.I)({
                        message: "Build your Tauri binary for macOS, Linux, and Windows"
                    }),
                    icon: "github"
                }, {
                    title: (0, B.I)({
                        message: "Native Notifications"
                    }),
                    description: (0, B.I)({
                        message: "Cross-platform notifications using polyfilled web API"
                    }),
                    icon: "app-indicator"
                }, {
                    title: (0, B.I)({
                        message: "Sidecar"
                    }),
                    description: (0, B.I)({
                        message: "Integrate and instrument other binaries"
                    }),
                    icon: "code-square"
                }, {
                    title: (0, B.I)({
                        message: "App Storage"
                    }),
                    description: (0, B.I)({
                        message: "Use a canonical location to store user data"
                    }),
                    icon: "folder2-open"
                }];
                return r.createElement("div", {
                    className: s
                }, e.map(((e, a) => r.createElement(J, G($({}, e), {
                    key: a,
                    cname: O
                })))))
            }

            function H() {
                const e = [{
                    title: (0, B.I)({
                        message: "Mobile Bundler"
                    }),
                    description: (0, B.I)({
                        message: "Bundle to all major mobile device operating systems"
                    }),
                    icon: "phone"
                }, {
                    title: (0, B.I)({
                        message: "Cross Compiler"
                    }),
                    description: (0, B.I)({
                        message: "Generate bundled binaries from select operating system environments"
                    }),
                    icon: "gear-wide-connected"
                }, {
                    title: (0, B.I)({
                        message: "Other Bindings"
                    }),
                    description: (0, B.I)({
                        message: "Go, Nim, Python, C++ and other bindings are possible with the stable API"
                    }),
                    icon: "arrow-repeat"
                }, {
                    title: (0, B.I)({
                        message: "One-Time Commands"
                    }),
                    description: (0, B.I)({
                        message: "Run a command that is no longer available after first run"
                    }),
                    icon: "stars"
                }, {
                    title: (0, B.I)({
                        message: "Alternative Renderers"
                    }),
                    description: (0, B.I)({
                        message: "Candidate presentation for Webview alternatives, including GL windowing"
                    }),
                    icon: "brush"
                }, {
                    title: (0, B.I)({
                        message: "Channel API"
                    }),
                    description: (0, B.I)({
                        message: "Send messages through a channel"
                    }),
                    icon: "signpost-2"
                }];
                return r.createElement("div", {
                    className: s
                }, e.map(((e, a) => r.createElement(J, G($({}, e), {
                    key: a,
                    cname: S
                })))))
            }

            function J(e) {
                return r.createElement("div", {
                    className: N
                }, r.createElement("div", {
                    className: C
                }, r.createElement("i", {
                    className: l()(Z, "bi", `bi-${e.icon}`, e.cname)
                })), r.createElement("div", null, r.createElement("h3", null, e.title), r.createElement("p", null, e.description)))
            }

            function X() {
                return r.createElement("div", {
                    className: s
                }, [{
                    name: "1Password",
                    link: "https://1password.com",
                    logoColorDark: "1Password_color_dark.svg",
                    logoColorLight: "1Password_color_light.svg"
                }, {
                    name: "Cloudflare",
                    link: "https://www.cloudflare.com",
                    logoColorDark: "Cloudflare_color_dark.svg",
                    logoColorLight: "Cloudflare_color_light.svg"
                }, {
                    name: "nlnet",
                    link: "https://nlnet.nl",
                    logoColorDark: "nlnet_color_dark.svg",
                    logoColorLight: "nlnet_color_light.svg"
                }, {
                    name: "Padloc",
                    link: "https://padloc.app",
                    logoColorDark: "padloc_color_light.svg",
                    logoColorLight: "padloc_color_light.svg"
                }, {
                    name: "Meilisearch",
                    link: "https://www.meilisearch.com",
                    logoColorDark: "meilisearch_color_dark.svg",
                    logoColorLight: "meilisearch_color_light.svg"
                }].map(((e, a) => r.createElement(ee, {
                    classNames: D,
                    brand: e,
                    key: a
                }))))
            }

            function Q() {
                return r.createElement("div", {
                    className: s
                }, [{
                    name: "DigitalOcean",
                    link: "https://www.digitalocean.com",
                    logoColorDark: "DigitalOcean_color_dark.svg",
                    logoColorLight: "DigitalOcean_color_light.svg"
                }, {
                    name: "Netlify",
                    link: "https://www.netlify.com",
                    logoColorDark: "Netlify_color_dark.svg",
                    logoColorLight: "Netlify_color_light.svg"
                }, {
                    name: "keygen",
                    link: "https://keygen.sh",
                    logoColorDark: "keygen_color_dark.svg",
                    logoColorLight: "keygen_color_light.svg"
                }, {
                    name: "ClickUp",
                    link: "https://clickup.com",
                    logoColorDark: "ClickUp_color_dark.svg",
                    logoColorLight: "ClickUp_color_light.svg"
                }, {
                    name: "Mintter",
                    link: "https://mintter.com",
                    logoColorDark: "Mintter_color_dark.svg",
                    logoColorLight: "Mintter_color_light.svg"
                }, {
                    name: "Leniolabs_",
                    link: "https://www.leniolabs.com",
                    logoColorDark: "leniolabs_color_dark.svg",
                    logoColorLight: "leniolabs_color_light.svg"
                }, {
                    name: "VPS Server",
                    link: "https://www.vpsserver.com",
                    logoColorDark: "vps_server_color_dark.svg",
                    logoColorLight: "vps_server_color_light.svg"
                }, {
                    name: "Dimension",
                    link: "https://dimension.dev/",
                    logoColorDark: "dimension_color_dark.svg",
                    logoColorLight: "dimension_color_light.svg"
                }].map(((e, a) => r.createElement(ee, {
                    classNames: D,
                    brand: e,
                    key: a
                }))))
            }

            function ee(e) {
                const {
                    colorMode: a
                } = (0, j.I)(), [t, n] = (0, r.useState)(!1), l = "/img/index/partners/";
                return (0, r.useEffect)((() => {
                    n("dark" === a)
                }), [a]), (0, r.useEffect)((() => {
                    const a = [],
                        t = (new Image).src = l + e.brand.logoColorDark;
                    a.push(t);
                    const r = (new Image).src = l + e.brand.logoColorLight;
                    a.push(r)
                }), []), r.createElement(x.Z, {
                    href: e.brand.link,
                    className: D
                }, r.createElement("img", {
                    src: (0, L.Z)(l + (t ? e.brand.logoColorDark : e.brand.logoColorLight)),
                    alt: e.brand.name
                }))
            }

            function ae() {
                const {
                    colorMode: e
                } = (0, j.I)(), [a, t] = (0, r.useState)(!1);
                return (0, r.useEffect)((() => {
                    const e = [],
                        a = (new Image).src = "img/header_dark.svg";
                    e.push(a);
                    const t = (new Image).src = "img/header_light.svg";
                    e.push(t)
                }), []), (0, r.useEffect)((() => {
                    t("dark" === e)
                }), [e]), r.createElement("img", {
                    src: a ? "/img/index/header_dark.svg" : "/img/index/header_light.svg"
                })
            }

            function te() {
                const e = (0, T.Z)(),
                    a = (0, V.yW)();
                return r.createElement(P.Z, {
                    title: `${e.siteConfig.tagline}`,
                    description: (0, B.I)({
                        message: "Tauri is a framework for building tiny, blazing fast binaries for all major desktop platforms. Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface."
                    })
                }, r.createElement("header", {
                    className: l()("hero", c)
                }, r.createElement("div", {
                    className: l()(m)
                }, r.createElement("div", {
                    className: l()(p)
                }, r.createElement("img", {
                    className: l()(d),
                    src: "/img/index/blue_loops.svg"
                })), r.createElement("img", {
                    className: l()(h),
                    src: "/img/index/orange_package.svg"
                })), r.createElement("div", {
                    className: l()(u)
                }, r.createElement("p", {
                    className: l()(v, "hero__subtitle")
                }, r.createElement(B.Z, null, "Announcing the release of")), r.createElement("span", {
                    className: l()(f)
                }, r.createElement(ae, null)), r.createElement("div", {
                    className: l()(v, "hero__subtitle")
                }, r.createElement(B.Z, null, "Build an optimized, secure, and frontend-independent application for multi-platform deployment.")), r.createElement("div", {
                    className: l()(b)
                }, r.createElement(M.lM, null)), r.createElement(x.Z, {
                    className: l()("button button--secondary button--lg"),
                    to: a.path + "/guides/getting-started/setup"
                }, r.createElement(B.Z, null, "Quick Start"))), r.createElement("div", {
                    className: l()(g)
                }, r.createElement("img", {
                    className: l()(h),
                    src: "/img/index/blue_package.svg"
                }), r.createElement("div", {
                    className: l()(p)
                }, r.createElement("img", {
                    className: l()(d),
                    src: "/img/index/orange_loops.svg"
                })))), r.createElement("main", null, r.createElement("section", {
                    className: "container"
                }, r.createElement("div", {
                    className: l()(s)
                }, r.createElement(K, null))), r.createElement("section", {
                    className: "hero hero--dark"
                }, r.createElement("div", {
                    className: "container"
                }, r.createElement("h1", {
                    className: o
                }, "Features"), r.createElement("div", {
                    className: s
                }, r.createElement(W, null)), r.createElement("div", {
                    className: i
                }), r.createElement("h1", {
                    className: o
                }, "Roadmap"), r.createElement("div", {
                    className: s
                }, r.createElement(H, null)))), r.createElement("div", {
                    className: i
                }), r.createElement("div", {
                    className: "container"
                }, r.createElement("section", {
                    id: "sponsors"
                }, r.createElement("h1", {
                    className: o
                }, "Premium Sponsors"), r.createElement(X, null)), r.createElement("div", {
                    className: i
                }), r.createElement("section", null, r.createElement("h1", {
                    className: o
                }, "Sponsors"), r.createElement(Q, null)), r.createElement("div", {
                    className: i
                }))))
            }
        },
        1013: function(e, a, t) {
            t.d(a, {
                _2: function() {
                    return c
                },
                gd: function() {
                    return u
                },
                lM: function() {
                    return i
                }
            });
            var r = t(7294),
                n = t(4637),
                l = t(4023),
                s = t(9247);
            const o = [{
                value: "npm",
                content: "npm run tauri "
            }, {
                value: "Yarn",
                content: "yarn tauri "
            }, {
                value: "pnpm",
                content: "pnpm tauri "
            }, {
                value: "Cargo",
                content: "cargo tauri "
            }];
            const i = () => r.createElement(l.Z, {
                    groupId: "package-manager"
                }, r.createElement(s.Z, {
                    value: "Bash"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "sh <(curl https://create.tauri.app/sh)")), r.createElement(s.Z, {
                    value: "PowerShell"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "powershell"
                }, "irm https://create.tauri.app/ps | iex")), r.createElement(s.Z, {
                    value: "Cargo"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "cargo install create-tauri-app\ncargo create-tauri-app")), r.createElement(s.Z, {
                    value: "npm"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "npm create tauri-app@latest")), r.createElement(s.Z, {
                    value: "Yarn"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "yarn create tauri-app")), r.createElement(s.Z, {
                    value: "pnpm"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "pnpm create tauri-app"))),
                c = () => r.createElement(l.Z, {
                    groupId: "package-manager"
                }, r.createElement(s.Z, {
                    value: "npm",
                    default: !0
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "npm install --save-dev @tauri-apps/cli"), r.createElement("div", {
                    style: {
                        margin: 8
                    }
                }, 'For npm to detect Tauri correctly you need to add it to the "scripts" section in your package.json file:'), r.createElement(n.Z, {
                    className: "language-json",
                    language: "json",
                    title: "package.json"
                }, '"scripts": {\n  "tauri": "tauri"\n}')), r.createElement(s.Z, {
                    value: "Yarn"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "yarn add -D @tauri-apps/cli")), r.createElement(s.Z, {
                    value: "pnpm"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "pnpm add -D @tauri-apps/cli")), r.createElement(s.Z, {
                    value: "Cargo"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "cargo install tauri-cli"))),
                u = () => r.createElement(l.Z, {
                    groupId: "package-manager"
                }, r.createElement(s.Z, {
                    value: "npm",
                    default: !0
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "npm install @tauri-apps/api")), r.createElement(s.Z, {
                    value: "Yarn"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "yarn add @tauri-apps/api")), r.createElement(s.Z, {
                    value: "pnpm"
                }, r.createElement(n.Z, {
                    className: "language-shell",
                    language: "shell"
                }, "pnpm add @tauri-apps/api")));
            a.ZP = ({
                name: e
            }) => r.createElement(l.Z, {
                groupId: "package-manager",
                values: o
            }, o.map((a => r.createElement(s.Z, {
                value: a.value
            }, r.createElement(n.Z, {
                className: "language-shell",
                language: "shell"
            }, "npm" !== a.value ? a.content + e : function(e, a) {
                let t = a.indexOf(" --");
                return -1 === t && (t = a.indexOf(" -")), -1 === t ? e + a : e + a.slice(0, t + 1) + "--" + a.slice(t)
            }(a.content, e))))))
        }
    }
]);