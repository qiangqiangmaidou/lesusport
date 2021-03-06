// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 12
(function (w, g) {
    w[g] = w[g] || {};
})(window, 'google_tag_manager');
(function () {


    var wa = this, xa = function () {
        var a = YT.Player, b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }, ya = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    };
    /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ba = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Ca = function (a) {
        if (null == a) return String(a);
        var b = Ba.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, Da = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, ea = function (a) {
        if (!a || "object" != Ca(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Da(a, "constructor") && !Da(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || Da(a, b)
    }, Ea = function (a, b) {
        var c = b || ("array" == Ca(a) ? [] : {}), d;
        for (d in a) if (Da(a, d)) {
            var e = a[d];
            "array" == Ca(e) ? ("array" != Ca(c[d]) && (c[d] = []), c[d] = Ea(e, c[d])) : ea(e) ? (ea(c[d]) || (c[d] = {}), c[d] = Ea(e, c[d])) : c[d] = e
        }
        return c
    };
    var ja = null, Fa = Math.random(), Ga = null, Ha = null, Ia = {};
    var Ja, Ka, La, Ma, Oa, Pa, Qa, Ra, Sa, Ta, O, P, Ua, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib,
        jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb,
        Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc,
        pc, qc, rc, sc, tc, uc, vc, wc, xc, yc, zc, R, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc,
        Qc, Rc, Sc, Tc, Uc, Vc, Yc, Zc, dd, ed, fd, gd, hd, id, jd, kd, ld, md, nd, od, pd, qd, rd, sd, td, ud, vd, wd,
        xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd,
        Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, we, xe, ye,
        ze, Ae, Be, Ce, De, Ee, Fe, Ge, He, Ie, Je, Ke, Le;
    (function () {
        var a = function (a) {
            return {
                toString: function () {
                    return a
                }
            }
        };
        Ja = a("");
        Ka = a("");
        La = a("");
        Ma = a("");
        Oa = a("");
        Pa = a("");
        Qa = a("");
        Ra = a("");
        Sa = a("");
        Ta = a("");
        O = a("0");
        P = a("1");
        Ua = a("");
        Va = a("");
        Wa = a("");
        Xa = a("");
        Ya = a("");
        Za = a("");
        $a = a("");
        ab = a("");
        bb = a("");
        cb = a("");
        db = a("");
        eb = a("");
        fb = a("");
        gb = a("");
        hb = a("");
        ib = a("");
        jb = a("");
        kb = a("");
        lb = a("");
        mb = a("");
        nb = a("");
        ob = a("");
        pb = a("");
        qb = a("2");
        rb = a("");
        sb = a("");
        vb = a("");
        wb = a("");
        xb = a("");
        yb = a("");
        zb = a("");
        Ab = a("");
        Bb = a("");
        Cb = a("");
        Db = a("");
        Eb = a("");
        Fb = a("");
        Gb = a("");
        Hb = a("3");
        Ib = a("");
        Jb = a("4");
        Kb = a("");
        Lb = a("");
        Mb = a("");
        Nb = a("");
        Ob = a("");
        Pb = a("");
        Qb = a("");
        Rb = a("");
        Sb = a("");
        Tb = a("");
        Ub = a("");
        Vb = a("");
        Wb = a("");
        Xb = a("");
        Yb = a("");
        Zb = a("");
        $b = a("");
        ac = a("");
        bc = a("");
        dc = a("");
        ec = a("");
        fc = a("");
        gc = a("");
        hc = a("");
        ic = a("");
        jc = a("");
        kc = a("");
        lc = a("");
        mc = a("");
        nc = a("");
        oc = a("");
        pc = a("");
        qc = a("");
        rc = a("");
        sc = a("");
        tc = a("");
        uc = a("5");
        vc = a("");
        wc = a("12");
        xc = a("13");
        yc = a("");
        zc = a("");
        R = a("6");
        Ac = a("");
        Bc = a("");
        Cc = a("");
        Dc = a("");
        Ec = a("7");
        Fc = a("");
        Gc = a("");
        Hc = a("");
        Ic = a("");
        Jc = a("8");
        Kc = a("");
        Lc = a("");
        Mc = a("");
        Nc = a("");
        Oc = a("");
        Pc = a("");
        Qc = a("");
        Rc = a("");
        Sc = a("");
        Tc = a("");
        Uc = a("");
        Vc = a("");
        Yc = a("");
        Zc = a("");
        dd = a("");
        ed = a("9");
        fd = a("");
        gd = a("");
        hd = a("");
        id = a("");
        jd = a("");
        kd = a("");
        ld = a("");
        md = a("");
        nd = a("");
        od = a("");
        pd = a("");
        qd = a("");
        rd = a("");
        sd = a("");
        td = a("");
        ud = a("");
        vd = a("");
        wd = a("");
        xd = a("");
        yd = a("");
        zd = a("");
        Ad = a("");
        Bd = a("");
        Cd = a("");
        Dd = a("");
        Ed = a("");
        Fd = a("");
        Gd = a("");
        Hd = a("");
        Id = a("");
        Jd = a("");
        Kd = a("");
        Ld = a("");
        Md = a("");
        Nd = a("");
        Od = a("");
        Pd = a("");
        Qd = a("");
        Rd = a("");
        Sd = a("");
        Td = a("");
        Ud = a("");
        Vd = a("");
        Wd = a("");
        Xd = a("");
        Yd = a("10");
        Zd = a("");
        $d = a("");
        ae = a("");
        be =
            a("");
        ce = a("");
        de = a("");
        ee = a("");
        fe = a("");
        ge = a("");
        he = a("");
        ie = a("");
        je = a("");
        ke = a("");
        le = a("");
        me = a("");
        ne = a("");
        oe = a("");
        pe = a("");
        qe = a("");
        re = a("");
        se = a("");
        te = a("");
        ue = a("");
        ve = a("");
        we = a("");
        xe = a("");
        ye = a("");
        ze = a("");
        Ae = a("");
        Be = a("");
        Ce = a("");
        De = a("");
        Ee = a("");
        Fe = a("");
        Ge = a("11");
        He = a("");
        Ie = a("");
        Je = a("");
        Ke = a("");
        Le = a("")
    })();
    var Me = function () {
    }, H = function (a) {
        return "function" == typeof a
    }, S = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }, Ne = function (a) {
        return "number" == Ca(a) && !isNaN(a)
    }, Oe = function (a) {
        return /^[0-9]+$/.test(a)
    }, Pe = function (a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return -1
    }, Qe = function (a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }, J = function (a) {
        return Math.round(Number(a)) || 0
    }, ga = function (a) {
        return "false" ==
        String(a).toLowerCase() ? !1 : !!a
    }, Re = function (a) {
        var b = [];
        if (S(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }, B = function () {
        return new Date
    }, Ye = function (a, b) {
        if (!Ne(a) || !Ne(b) || a > b) a = 0, b = 2147483647;
        return Math.round(Math.random() * (b - a) + a)
    }, Ze = function () {
        this.prefix = "gtm.";
        this.values = {}
    };
    Ze.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    Ze.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    Ze.prototype.contains = function (a) {
        return void 0 !== this.get(a)
    };
    var $e = function (a, b, c) {
        try {
            return a[uc](a, b || Me, c || Me)
        } catch (d) {
        }
        return !1
    }, df = function (a, b) {
        function c(b, c) {
            a.contains(b) || a.set(b, []);
            a.get(b).push(c)
        }

        for (var d = Qe(b).split("&"), e = 0; e < d.length; e++) if (d[e]) {
            var f = d[e].indexOf("=");
            0 > f ? c(d[e], "1") : c(d[e].substring(0, f), d[e].substring(f + 1))
        }
    }, ef = function (a) {
        var b = a ? a.length : 0;
        return 0 < b ? a[b - 1] : ""
    }, ff = function (a) {
        for (var b = 0; b < a.length; b++) a[b]()
    }, ca = B().getTime(), fa = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }, gf = function (a, b, c) {
        a.prototype["gtm_proxy_" +
        b] = a.prototype[b];
        a.prototype[b] = c
    }, hf = function (a) {
        return null !== a && void 0 !== a && void 0 !== a.length
    }, da = function (a, b, c) {
        if (!(b && c && hf(a) && S(a) && 0 != a.length)) return null;
        for (var d = {}, e = 0; e < a.length; e++) a[e] && a[e].hasOwnProperty(b) && a[e].hasOwnProperty(c) && (d[a[e][b]] = a[e][c]);
        return d
    }, jf = function (a, b) {
        0 == b ? a.Ma = !0 : a.complete = !0;
        var c = a.g;
        a.i && (a.i.ka[c] = b);
        Ia[c] && (Ia[c].state = b)
    }, kf = function (a, b) {
        a.sort(function (a, d) {
            return b(a, d) ? -1 : b(d, a) ? 1 : 0
        })
    };
    var A = window, N = document, mf = navigator, w = function (a, b, c) {
            var d = A[a];
            A[a] = void 0 === d || c ? b : d;
            return A[a]
        }, K = function (a, b, c, d) {
            return (d || "http:" != A.location.protocol ? a : b) + c
        }, nf = function (a) {
            var b = N.getElementsByTagName("script")[0] || N.body || N.head;
            b.parentNode.insertBefore(a, b)
        }, ia = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, n = function (a, b, c) {
            var d = N.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            ia(d, b);
            c && (d.onerror = c);
            nf(d)
        }, pa = function (a, b) {
            var c = N.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            nf(c);
            ia(c, b);
            void 0 !== a && (c.src = a);
            return c
        }, M = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            };
            d.onerror = function () {
                d.onerror = null;
                c && c()
            };
            d.src = a
        }, V = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, q = function (a) {
            A.setTimeout(a, 0)
        }, la = !1,
        ma = [], of = function (a) {
            if (!la) {
                var b = N.createEventObject, c = "complete" == N.readyState, d = "interactive" == N.readyState;
                if (!a || "readystatechange" != a.type || c || !b && d) {
                    la = !0;
                    for (var e = 0; e < ma.length; e++) ma[e]()
                }
            }
        }, pf = 0, qf = function () {
            if (!la && 140 > pf) {
                pf++;
                try {
                    N.documentElement.doScroll("left"), of()
                } catch (a) {
                    A.setTimeout(qf, 50)
                }
            }
        }, sf = function (a) {
            var b = N.getElementById(a);
            if (b && rf(b, "id") != a) for (var c = 1; c < document.all[a].length; c++) if (rf(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        }, rf = function (a,
                          b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        }, tf = function (a) {
            return a.target || a.srcElement || {}
        }, qa = function (a) {
            var b = N.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            for (var b = b.lastChild, c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        }, uf = function (a, b) {
            for (var c = {}, d = 0; d < b.length; d++) c[b[d]] = !0;
            for (var e = a, d = 0; e && !c[String(e.tagName).toLowerCase()] && 100 > d; d++) e = e.parentElement;
            e && !c[String(e.tagName).toLowerCase()] && (e = null);
            return e
        }, vf = !1, wf = [],
        xf = function () {
            if (!vf) {
                vf = !0;
                for (var a = 0; a < wf.length; a++) wf[a]()
            }
        }, yf = function (a) {
            a = a || A;
            var b = a.location.href, c = b.indexOf("#");
            return 0 > c ? "" : b.substring(c + 1)
        }, na = function (a) {
            window.console && window.console.log && window.console.log(a)
        };
    var zf = function (a, b, c, d, e) {
        var f, g = (a.protocol.replace(":", "") || A.location.protocol.replace(":", "")).toLowerCase();
        switch (b) {
            case "protocol":
                f = g;
                break;
            case "host":
                f = (a.hostname || A.location.hostname).split(":")[0].toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substr(k[0].length))
                }
                break;
            case "port":
                f = String(1 * (a.hostname ? a.port : A.location.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                break;
            case "path":
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var l = f.split("/");
                0 <= Pe(d || [], l[l.length -
                1]) && (l[l.length - 1] = "");
                f = l.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                if (e) a:{
                    for (var m = f.split("&"), h = 0; h < m.length; h++) {
                        var p = m[h].split("=");
                        if (decodeURIComponent(p[0]).replace("+", " ") == e) {
                            var r = p.slice(1).join("=");
                            f = decodeURIComponent(r).replace("+", " ");
                            break a
                        }
                    }
                    f = void 0
                }
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, Af = function (a) {
        var b = "";
        a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
        return b
    }, ra = function (a) {
        var b = N.createElement("a");
        a && (b.href = a);
        return b
    };
    var ua = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var sa = function (a) {
        var b = ["veinteractive.com", "ve-interactive.cn"];
        if (!a) return !1;
        var c = zf(ra(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var ta = function (a, b) {
        n("//bat.bing.com/bat.js", a, b)
    }, L = A, ha = function (a, b, c) {
        b && (void 0 === L[a] || c && !L[a]) && (L[a] = b);
        return L[a]
    };
    var Bf = new Ze, Cf = {}, Ef = {
        set: function (a, b) {
            Ea(Df(a, b), Cf)
        }, get: function (a) {
            return G(a, 2)
        }, reset: function () {
            Bf = new Ze;
            Cf = {}
        }
    }, G = function (a, b) {
        if (2 == b) {
            for (var c = Cf, d = a.split("."), e = 0; e < d.length; e++) {
                if (void 0 === c[d[e]]) return;
                c = c[d[e]]
            }
            return c
        }
        return Bf.get(a)
    }, Df = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    };
    var Ff = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Gf = {
        customPixels: ["nonGooglePixels"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, Hf = {
        customPixels: ["customScripts", "html"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels",
            "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, If = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }, Jf = function () {
        var a = G("gtm.whitelist");
        var b = a && If(Re(a), Gf), c = G("gtm.blacklist") || G("tagTypeBlacklist") || [];
        Ff.test(A.location && A.location.hostname) && (c = Re(c), c.push("nonGooglePixels", "nonGoogleScripts"));
        var d = c && If(Re(c), Hf), e = {};
        return function (f) {
            var g = f && f[uc];
            if (!g) return !0;
            if (void 0 !== e[g.a]) return e[g.a];
            var k = !0;
            if (a) a:{
                if (0 > Pe(b, g.a)) if (g.b && 0 < g.b.length) for (var l = 0; l < g.b.length; l++) {
                    if (0 > Pe(b,
                            g.b[l])) {
                        k = !1;
                        break a
                    }
                } else {
                    k = !1;
                    break a
                }
                k = !0
            }
            var m = !1;
            if (c) {
                var h;
                if (!(h = 0 <= Pe(d, g.a))) a:{
                    for (var p = g.b || [], r = new Ze, t = 0; t < d.length; t++) r.set(d[t], !0);
                    for (t = 0; t < p.length; t++) if (r.get(p[t])) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                m = h
            }
            var v = !!f[Tc];
            return e[g.a] = !k || m || v
        }
    };
    var T = function (a) {
        var b = N;
        return Kf ? b.querySelectorAll(a) : null
    }, Lf;
    a:{
        var Mf = /MSIE +([\d\.]+)/.exec(mf.userAgent);
        if (Mf && Mf[1]) {
            var Nf = N.documentMode;
            Nf || (Nf = "CSS1Compat" == N.compatMode ? parseInt(Mf[1], 10) : 5);
            if (!Nf || 8 >= Nf) {
                Lf = !1;
                break a
            }
        }
        Lf = !!N.querySelectorAll
    }
    var Kf = Lf;
    var _eu = function (a) {
        var b = String(G("gtm.elementUrl") || a[Rb] || ""), c = ra(b);
        return b
    };
    _eu.a = "eu";
    _eu.b = ["google"];
    var _e = function () {
        return Ha
    };
    _e.a = "e";
    _e.b = ["google"];
    var Sf = /(^|\.)doubleclick\.net$/i, Tf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Uf = function () {
        for (var a = String(N.cookie).split(";"), b = [], c = 0; c < a.length; c++) {
            var d = a[c].split("="), e = Qe(d[0]);
            if (e && "_gaexp" == e) {
                var f = Qe(d.slice(1).join("="));
                f && (f = decodeURIComponent(f));
                b.push(f)
            }
        }
        return b
    }, Vf = function (a, b, c, d) {
        if (Sf.test(N.location.hostname) || "/" == b && Tf.test(c)) return !1;
        var e = "_gaexp=" + a + "; ";
        b && (e += "path=" + b + "; ");
        d && (e += "expires=" + d.toGMTString() + "; ");
        c && (e += "domain=" + c + ";");
        var f = N.cookie;
        N.cookie =
            e;
        return f != N.cookie || 0 <= Pe(Uf(), a)
    }, Wf = function (a) {
        if ("none" == a) return 0;
        0 == a.indexOf(".") && (a = a.substr(1));
        return a.split(".").length
    }, Xf = function (a) {
        var b = a;
        b ? (1 < b.length && b.lastIndexOf("/") == b.length - 1 && (b = b.substr(0, b.length - 1)), 0 != b.indexOf("/") && (b = "/" + b), a = b) : a = "/";
        return "/" == a ? 1 : a.split("/").length
    };
    var Yf = function (a, b) {
        this.f = a;
        this.j = b
    };
    Yf.prototype.toString = function () {
        var a = "" + this.f;
        1 < this.j && (a = a + "-" + this.j);
        return a
    };
    var Zf = function (a, b) {
        this.xa = a;
        this.Y = b
    };
    Zf.prototype.toString = function () {
        return "" + this.Y + "." + this.xa
    };
    var bg = function (a, b) {
        var c = new $f(null, a, b);
        ag(c);
        return c
    }, $f = function (a, b, c) {
        this.Fa = Math.floor(B().getTime() / 864E5);
        this.X = b || "auto";
        this.P = c || "/";
        var d = Wf(this.X), e = Xf(this.P);
        this.B = a || new Yf(d, e);
        this.h = [];
        this.w = new Ze
    }, dg = function (a, b, c) {
        b && ("" == c.xa ? cg(a, b) : (a.w.contains(b) || a.h.push(b), a.w.set(b, c)))
    }, eg = function (a, b) {
        for (var c = 0; c < b.length; c++) dg(a, b[c][0], b[c][1])
    }, cg = function (a, b) {
        var c = Pe(a.h, b);
        0 <= c && a.h.splice(c, 1);
        a.w.set(b, void 0)
    }, fg = function (a) {
        for (var b = [], c = 0; c < a.h.length; c++) {
            var d =
                a.h[c];
            b.push([d, a.w.get(d)])
        }
        return b
    }, gg = function (a) {
        for (var b = 0, c = 0; c < a.h.length; c++) b = Math.max(b, a.w.get(a.h[c]).Y);
        return 864E5 * b
    };
    $f.prototype.toString = function () {
        if (0 == this.h.length) return "";
        for (var a = [], b = 0; b < this.h.length; b++) {
            var c = this.h[b];
            a.push("" + c + "." + this.w.get(c).toString())
        }
        return "GAX1." + this.B.toString() + "." + a.join("!")
    };
    var hg = function (a, b) {
        for (var c = new Date, d = Xf(a.P), e = [], f = 0; f < a.h.length; f++) {
            var g = a.h[f];
            a.w.get(g).Y < a.Fa && e.push(g)
        }
        for (f = 0; f < e.length; f++) cg(a, e[f]);
        if (a.h.length > (b || 10)) return !1;
        c.setTime(gg(a));
        if ("auto" != a.X) return Vf(a.toString(), a.P, a.X, c);
        var k;
        var l = zf(A.location, "host", !0).split(".");
        if (4 == l.length && /^[0-9]*$/.exec(l[3])) k = ["none"]; else {
            for (var m = [], h = l.length - 2; 0 <= h; h--) m.push(l.slice(h).join("."));
            m.push("none");
            k = m
        }
        for (var p = 0; p < k.length; p++) if ("none" != k[p] && (a.B = new Yf(Wf(k[p]), d),
                Vf(a.toString(), a.P, k[p], c))) return !0;
        return !1
    }, ag = function (a) {
        for (var b = a.B.f, c = a.B.j, d = Uf(), e = [], f = 0; f < d.length; f++) {
            var g = ig(a, d[f]);
            g && e.push(g)
        }
        kf(e, function (a, d) {
            var e = a.B, f = d.B;
            return e.f == f.f && e.j == f.j ? !1 : e.f == b && e.j == c ? !0 : f.f == b && f.j == c ? !1 : e.f == b ? f.f != b || e.j < f.j : f.f == b ? !1 : e.j == c ? f.f != b && (f.j != c || e.f < f.f) : f.j == c ? !1 : e.f < f.f || e.f == f.f && e.j < f.j
        });
        a.B = 0 < e.length ? e[0].B : new Yf(b, c);
        for (f = e.length - 1; 0 <= f; f--) eg(a, fg(e[f]))
    }, ig = function (a, b) {
        var c = b.match(/GAX1\.([^.]+).(.*)/);
        if (c) {
            var d;
            a:{
                var e =
                    (c[1] || "").split("-");
                if (!(0 == e.length || 2 < e.length)) {
                    var f = Qe(e[0]);
                    if (0 != f.length) {
                        var g = 2 == e.length ? Qe(e[1]) : "1";
                        if (Oe(f) && Oe(g)) {
                            d = new Yf(J(f), J(g));
                            break a
                        }
                    }
                }
                d = void 0
            }
            if (d) {
                for (var k = new $f(d, a.X, a.P), l = (c[2] || "").split("!"), m = 0; m < l.length; m++) {
                    var h = l[m].split(".");
                    if (3 == h.length) {
                        if (!Oe(h[1])) return;
                        dg(k, h[0], new Zf(h[2], J(h[1])))
                    }
                }
                return k
            }
        }
    };
    var _v = function (a) {
        var b = G(a[ed].replace(/\\\./g, "."), a[Jb]);
        return void 0 !== b ? b : a[Rb]
    };
    _v.a = "v";
    _v.b = ["google"];
    var _f = function (a) {
        var b = String(G("gtm.referrer") || N.referrer);
        if (!b) return b;
        var c = ra(b);
        return b
    };
    _f.a = "f";
    _f.b = ["google"];
    var va = function (a) {
        var b = A.location, c;
        (c = a[Gb] ? a[Gb] : G("gtm.url")) && (b = ra(String(c)));
        var d = b.href, e = d.indexOf("#"), f = 0 > e ? d : d.substr(0, e);
        a[qb] && (f = zf(b, a[qb], a[Sd], a[Qb], a[Fd]));
        return f
    }, _u = va;
    _u.a = "u";
    _u.b = ["google"];
    var _cn = function (a) {
        return 0 <= String(a[O]).indexOf(String(a[P]))
    };
    _cn.a = "cn";
    _cn.b = ["google"];
    var _eq = function (a) {
        return String(a[O]) == String(a[P])
    };
    _eq.a = "eq";
    _eq.b = ["google"];
    var _re = function (a) {
        return (new RegExp(a[P], a[Ac] ? "i" : void 0)).test(a[O])
    };
    _re.a = "re";
    _re.b = ["google"];
    var _awct = function (a, b, c) {
        n("//www.googleadservices.com/pagead/conversion_async.js", function () {
            var d = A.google_trackConversion, e = {
                google_conversion_id: a[R],
                google_conversion_label: a[Jc],
                google_conversion_value: a[Ge] || 0,
                google_remarketing_only: !1,
                onload_callback: b
            };
            a[Fb] && (e.google_conversion_currency = a[Fb]);
            H(d) ? d(e) || c() : c()
        }, c)
    };
    _awct.a = "awct";
    _awct.b = ["google"];
    var qg = Math.random(), rg = "1.000000" > qg;
    var sg = Me;
    var tg = Me, ug = [], vg = !1, wg = function (a) {
        return A["dataLayer"].push(a)
    }, xg = function (a) {
        var b = !1;
        return function () {
            !b && H(a) && q(a);
            b = !0
        }
    }, Dg = function () {
        for (var a = !1; !vg && 0 < ug.length;) {
            vg = !0;
            var b = ug.shift();
            if (H(b)) try {
                b.call(Ef)
            } catch (ub) {
            } else if (S(b)) a:{
                var c = b;
                if ("string" == Ca(c[0])) {
                    for (var d = c[0].split("."), e = d.pop(), f = c.slice(1), g = Cf, k = 0; k < d.length; k++) {
                        if (void 0 === g[d[k]]) break a;
                        g = g[d[k]]
                    }
                    try {
                        g[e].apply(g, f)
                    } catch (ub) {
                    }
                }
            } else {
                var l = b, m = void 0;
                for (m in l) if (l.hasOwnProperty(m)) {
                    var h = m, p = l[m];
                    Bf.set(h, p);
                    Ea(Df(h, p), Cf)
                }
                var r = !1, t = l.event, v = void 0;
                if (t) {
                    v = ca++;
                    Ha = t;
                    if (!l["gtm.uniqueEventId"]) {
                        var u = v;
                        Bf.set("gtm.uniqueEventId", u);
                        Ea(Df("gtm.uniqueEventId", u), Cf)
                    }
                    var z = xg(l.eventCallback), D = l.eventTimeout;
                    D && A.setTimeout(z, Number(D));
                    r = tg(v, t, z, l.eventReporter)
                }
                Ga || (Ga = l["gtm.start"]) && sg();
                var E = l, F = v, y = t, C = Cf;
                if (!r) {
                    var I = v, U = t;
                }
                Ha = null;
                a = r || a
            }
            var ba = b, Y = Cf;
            Cg();
            vg = !1
        }
        return !a
    };
    var Eg, Fg = /(Firefox\D28\D)/g.test(mf.userAgent), Gg = {nwnc: {}, nwc: {}, wnc: {}, wc: {}, wt: null, l: !1},
        Hg = {nwnc: {}, nwc: {}, wnc: {}, wc: {}, wt: null, l: !1}, Ng = function (a, b) {
            return function (c) {
                c = c || A.event;
                var d = tf(c), e = !1;
                if (3 !== c.which || "LINK_CLICK" != a) {
                    "LINK_CLICK" == a && (d = uf(d, ["a", "area"]), e = !d || !d.href || Ig(d.href) || 2 === c.which || null == c.which && 4 == c.button || c.ctrlKey || c.shiftKey || c.altKey || !0 === c.metaKey);
                    var f = "FORM_SUBMIT" == a ? Hg : Gg;
                    if (c.defaultPrevented || !1 === c.returnValue || c.oa && c.oa()) {
                        if (d) {
                            var g = {simulateDefault: !1},
                                k = Jg(f, ["wnc", "nwnc"]);
                            k && Kg(a, d, g, f.wt, k)
                        }
                    } else {
                        if (d) {
                            var g = {}, l = !0, m = Jg(f, ["wnc", "nwnc", "nwc", "wc"]);
                            (l = Kg(a, d, g, f.wt, m)) || (Lg(g.eventReport, f) ? b = !0 : e = !0);
                            e = e || l || "LINK_CLICK" == a && Fg;
                            g.simulateDefault = !l && b && !e;
                            g.simulateDefault && (e = Mg(d, g) || e, !e && c.preventDefault && c.preventDefault());
                            c.returnValue = l || !b || e;
                            return c.returnValue
                        }
                        return !0
                    }
                }
            }
        }, Kg = function (a, b, c, d, e) {
            var f = d || 2E3, g = {
                "gtm.element": b,
                "gtm.elementClasses": b.className,
                "gtm.elementId": b["for"] || rf(b, "id") || "",
                "gtm.elementTarget": b.formTarget ||
                b.target || ""
            };
            switch (a) {
                case "LINK_CLICK":
                    g["gtm.triggers"] = e || "";
                    g.event = "gtm.linkClick";
                    g["gtm.elementUrl"] = b.href;
                    g.eventTimeout = f;
                    g.eventCallback = Og(b, c);
                    g.eventReporter = function (a) {
                        c.eventReport = a
                    };
                    break;
                case "FORM_SUBMIT":
                    g["gtm.triggers"] = e || "";
                    g.event = "gtm.formSubmit";
                    g["gtm.elementUrl"] = Pg(b);
                    g.eventTimeout = f;
                    g.eventCallback = Qg(b, c);
                    g.eventReporter = function (a) {
                        c.eventReport = a
                    };
                    break;
                case "CLICK":
                    g.event = "gtm.click";
                    g["gtm.elementUrl"] = b.formAction || b.action || b.href || b.src || b.code || b.codebase ||
                        "";
                    break;
                default:
                    return !0
            }
            return wg(g)
        }, Pg = function (a) {
            var b = a.action;
            b && b.tagName && (b = a.cloneNode(!1).action);
            return b
        }, Rg = function (a) {
            var b = a.target;
            if (!b) switch (String(a.tagName).toLowerCase()) {
                case "a":
                case "area":
                case "form":
                    b = "_self"
            }
            return b
        }, Mg = function (a, b) {
            var c = !1, d = /(iPad|iPhone|iPod)/g.test(mf.userAgent), e = Rg(a).toLowerCase();
            switch (e) {
                case "":
                case "_self":
                case "_parent":
                case "_top":
                    var f;
                    f = (e || "_self").substring(1);
                    b.targetWindow = A.frames && A.frames[f] || A[f];
                    break;
                case "_blank":
                    d ? (b.simulateDefault =
                        !1, c = !0) : (b.targetWindowName = "gtm_autoEvent_" + B().getTime(), b.targetWindow = A.open("", b.targetWindowName));
                    break;
                default:
                    d && !A.frames[e] ? (b.simulateDefault = !1, c = !0) : (A.frames[e] || (b.targetWindowName = e), b.targetWindow = A.frames[e] || A.open("", e))
            }
            return c
        }, Og = function (a, b, c) {
            return function () {
                b.simulateDefault && (b.targetWindow ? b.targetWindow.location.href = a.href : (c = c || B().getTime(), 500 > B().getTime() - c && A.setTimeout(Og(a, b, c), 25)))
            }
        }, Qg = function (a, b, c) {
            return function () {
                if (b.simulateDefault) if (b.targetWindow) {
                    var d;
                    b.targetWindowName && (d = a.target, a.target = b.targetWindowName);
                    N.gtmSubmitFormNow = !0;
                    Sg(a).call(a);
                    b.targetWindowName && (a.target = d)
                } else c = c || B().getTime(), 500 > B().getTime() - c && A.setTimeout(Qg(a, b, c), 25)
            }
        }, Jg = function (a, b) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = a[b[d]], f;
                for (f in e) e.hasOwnProperty(f) && e[f] && c.push(f)
            }
            return c.join(",")
        }, Tg = function (a, b, c, d, e) {
            var f = e;
            if (!f || "0" == f) {
                if (a.l) return;
                a.l = !0;
                f = "0"
            }
            var g = a.wt;
            b && (!g || g > d) && (a.wt = d);
            a[b ? c ? "wc" : "wnc" : c ? "nwc" : "nwnc"][f] = !0
        }, Lg = function (a, b) {
            if (b.wnc["0"] ||
                b.wc["0"]) return !0;
            for (var c = 0; c < Ug.length; c++) if (a.passingRules[c]) {
                var d = Ug[c], e = Vg[c], f = e && e[0] && e[0][0] || e[1] && e[1][0];
                if (f && "0" != f && (b.wc[f] || b.wnc[f])) for (var g = d[1], k = 0; k < g.length; k++) if (a.resolvedTags[g[k]]) return !0
            }
            return !1
        }, Wg = function (a, b, c, d, e) {
            var f, g, k = !1;
            switch (a) {
                case "CLICK":
                    if (N.gtmHasClickListenerTag) return;
                    N.gtmHasClickListenerTag = !0;
                    f = "click";
                    g = function (a) {
                        var b = tf(a);
                        b && Kg("CLICK", b, {}, d)
                    };
                    k = !0;
                    break;
                case "LINK_CLICK":
                    b && !Eg && (Eg = Af(N.location));
                    Tg(Gg, b || !1, c || !1, d, e);
                    if (N.gtmHasLinkClickListenerTag) return;
                    N.gtmHasLinkClickListenerTag = !0;
                    f = "click";
                    g = Ng(a, b || !1);
                    break;
                case "FORM_SUBMIT":
                    Tg(Hg, b || !1, c || !1, d, e);
                    if (N.gtmHasFormSubmitListenerTag) return;
                    N.gtmHasFormSubmitListenerTag = !0;
                    f = "submit";
                    g = Ng(a, b || !1);
                    break;
                default:
                    return
            }
            V(N, f, g, k)
        }, Ig = function (a) {
            if (!Eg) return !0;
            var b = a.indexOf("#");
            if (0 > b) return !1;
            if (0 == b) return !0;
            var c = ra(a);
            return Eg == Af(c)
        }, Sg = function (a) {
            try {
                if (a.constructor && a.constructor.prototype) return a.constructor.prototype.submit
            } catch (b) {
            }
            if (a.gtmReplacedFormSubmit) return a.gtmReplacedFormSubmit;
            N.gtmFormElementSubmitter || (N.gtmFormElementSubmitter = N.createElement("form"));
            return N.gtmFormElementSubmitter.submit.call ? N.gtmFormElementSubmitter.submit : a.submit
        };
    var jg = new String("undefined"), dh = function (a) {
        this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === jg ? b : a[d]);
            return c.join("")
        }
    };
    dh.prototype.toString = function () {
        return this.resolve("undefined")
    };
    dh.prototype.valueOf = dh.prototype.toString;
    var eh = {}, fh = function (a, b) {
        var c = ca++;
        eh[c] = [a, b];
        return c
    }, gh = function (a) {
        var b = a ? 0 : 1;
        return function (a) {
            var d = eh[a];
            if (d && H(d[b])) d[b]();
            eh[a] = void 0
        }
    };
    var hh = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }, ih = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var jh;
    a:{
        var kh = wa.navigator;
        if (kh) {
            var lh = kh.userAgent;
            if (lh) {
                jh = lh;
                break a
            }
        }
        jh = ""
    }
    var W = function (a) {
        return -1 != jh.indexOf(a)
    };
    var mh = W("Opera") || W("OPR"), nh = W("Trident") || W("MSIE"), oh = W("Edge"), ph;
    if (ph = W("Gecko")) ph = !(-1 != jh.toLowerCase().indexOf("webkit") && !W("Edge"));
    var qh = ph && !(W("Trident") || W("MSIE")) && !W("Edge"),
        rh = -1 != jh.toLowerCase().indexOf("webkit") && !W("Edge");
    rh && W("Mobile");
    W("Macintosh");
    W("Windows");
    W("Linux") || W("CrOS");
    var sh = wa.navigator || null;
    sh && (sh.appVersion || "").indexOf("X11");
    W("Android");
    !W("iPhone") || W("iPod") || W("iPad");
    W("iPad");
    var th = function () {
        var a = jh;
        if (qh) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (oh) return /Edge\/([\d\.]+)/.exec(a);
        if (nh) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (rh) return /WebKit\/(\S+)/.exec(a)
    }, uh = function () {
        var a = wa.document;
        return a ? a.documentMode : void 0
    }, vh = function () {
        if (mh && wa.opera) {
            var a;
            var b = wa.opera.version;
            try {
                a = b()
            } catch (f) {
                a = b
            }
            return a
        }
        var c = "", d = th();
        d && (c = d ? d[1] : "");
        if (nh) {
            var e = uh();
            if (e > parseFloat(c)) return String(e)
        }
        return c
    }(), wh = {}, xh = function (a) {
        var b;
        if (!(b = wh[a])) {
            for (var c =
                0, d = hh(String(vh)).split("."), e = hh(String(a)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                var k = d[g] || "", l = e[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), h = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var p = m.exec(k) || ["", "", ""], r = h.exec(l) || ["", "", ""];
                    if (0 == p[0].length && 0 == r[0].length) break;
                    c = ih(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || ih(0 == p[2].length, 0 == r[2].length) || ih(p[2], r[2])
                } while (0 == c)
            }
            b = wh[a] = 0 <= c
        }
        return b
    }, yh = wa.document, zh = yh && nh ? uh() || ("CSS1Compat" == yh.compatMode ?
        parseInt(vh, 10) : 5) : void 0;
    var Ah;
    if (!(Ah = !qh && !nh)) {
        var Bh;
        if (Bh = nh) Bh = 9 <= zh;
        Ah = Bh
    }
    Ah || qh && xh("1.9.1");
    nh && xh("9");
    var Ch = function (a) {
        Ch[" "](a);
        return a
    };
    Ch[" "] = function () {
    };
    var oa = function (a, b) {
        var c = "";
        nh && !Dh(a) && (c = '<script>document.domain="' + document.domain + '";\x3c/script>' + c);
        var d = "<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>" + c + "</head><body>" + b + "</body></html>";
        if (Eh) a.srcdoc = d; else if (Fh) {
            var e = a.contentWindow.document;
            e.open("text/html", "replace");
            e.write(d);
            e.close()
        } else Gh(a, d)
    }, Eh = rh && "srcdoc" in document.createElement("iframe"), Fh = qh || rh || nh && xh(11), Gh = function (a, b) {
        nh && xh(7) && !xh(10) && 6 > Hh() && Ih(b) && (b = Jh(b));
        var c = function () {
            a.contentWindow.goog_content =
                b;
            a.contentWindow.location.replace("javascript:window.goog_content")
        };
        nh && !Dh(a) ? Kh(a, c) : c()
    }, Hh = function () {
        var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
        return a ? parseFloat(a[1]) : 0
    }, Dh = function (a) {
        try {
            var b;
            var c = a.contentWindow;
            try {
                var d;
                if (d = !!c && null != c.location.href) b:{
                    try {
                        Ch(c.foo);
                        d = !0;
                        break b
                    } catch (e) {
                    }
                    d = !1
                }
                b = d
            } catch (e) {
                b = !1
            }
            return b
        } catch (e) {
            return !1
        }
    }, Lh = 0, Kh = function (a, b) {
        var c = "goog_rendering_callback" + Lh++;
        window[c] = b;
        a.src = "javascript:'<script>(function() {document.domain = \"" +
            document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
    }, Ih = function (a) {
        for (var b = 0; b < a.length; ++b) if (127 < a.charCodeAt(b)) return !0;
        return !1
    }, Jh = function (a) {
        for (var b = unescape(encodeURIComponent(a)), c = Math.floor(b.length / 2), d = [], e = 0; e < c; ++e) d[e] = String.fromCharCode(256 * b.charCodeAt(2 * e + 1) + b.charCodeAt(2 * e));
        1 == b.length % 2 && (d[c] = b.charAt(b.length - 1));
        return d.join("")
    };
    /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

    var Yh = function (a, b, c, d) {
        var e = b + ": " + c + (d ? " !important" : ""), f = document;
        if (f.createStyleSheet) {
            var g = Vh(f), k = g.rules.length;
            g.addRule(a, e);
            return function () {
                g.removeRule ? g.removeRule(k) : g.deleteRule(k);
                g.addRule("x", "-", k)
            }
        }
        var l = Wh(a + "{" + e + "}", f);
        Xh(l, f);
        var m = l.parentNode;
        return function () {
            m.removeChild(l)
        }
    }, Zh = null, Vh = function (a) {
        if (Zh) return Zh;
        for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
            var c = a.styleSheets[b], d = c.ownerNode;
            if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return Zh = c
        }
        0 == a.styleSheets.length &&
        a.createStyleSheet();
        return Zh = a.styleSheets[0]
    }, Wh = function (a, b) {
        var c = (b || document).createElement("style");
        void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
        return c
    }, Xh = function (a, b) {
        var c = b || document, d = c.getElementsByTagName("head")[0];
        d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
        d.appendChild(a)
    };
    var ci = {}, ei = function (a, b, c, d, e) {
        if (!Kf) return !1;
        var f = ci[a];
        f || (f = {id: a, L: [], ba: 0, za: null, Ea: !1}, ci[a] = f);
        var g = {id: a + ":" + f.L.length, Ua: c, Pa: d, K: b, ma: 0, ja: e || null, Da: 0, aa: !1};
        f.L.push(g);
        null === b ? (g.aa = !0, c(null)) : di(f);
        return !0
    }, fi = function (a) {
        var b = Yh(a, "visibility", "hidden", !0);
        return function () {
            H(b) && b.apply();
            b = null
        }
    }, gi = function (a, b, c, d, e) {
        var f = fi(b.u);
        ma.push(f);
        return ei(a, b, function (a, b) {
            c(a, b);
            f()
        }, d, e)
    }, di = function (a) {
        for (var b = a.ba; b < a.L.length; b++) {
            var c = a.L[b], d = b == a.ba;
            if (!c.aa &&
                !hi(d, c)) break;
            c.aa && d && a.ba++
        }
        a.L.length > a.ba && (a.za || (a.za = A.setTimeout(function () {
            a.za = null;
            di(a)
        }, 80)), la || a.Ea || (a.Ea = !0, ma.push(function () {
            di(a)
        })))
    }, hi = function (a, b) {
        var c = [];
        if (b.K) {
            var d = ii(b.K, b.id), e = null;
            b.ja && (e = ii(b.ja, b.id + "-t"));
            for (var f = 0; f < d.length; f++) {
                var g = d[f], k;
                if (null != e && (k = e.length > f ? e[f] : null, !k && !la && (null === b.ja.o || b.Da + c.length < b.ja.o))) break;
                c.push({element: g, tb: k})
            }
        }
        if (!la && b.Pa && (!a || null == b.K.o || b.K.o != b.ma + c.length)) return !1;
        for (var l = 0; l < c.length; l++) {
            var m = c[l].element,
                h = c[l].tb;
            b.ma++;
            ji(m, b.id);
            h && (b.Da++, ji(h, b.id + "-t"));
            b.Ua(m, h)
        }
        if (b.K.o && b.K.o == b.ma || la) b.aa = !0;
        return !0
    }, ji = function (a, b) {
        a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
        a.gtmProgressiveApplied[b] = !0
    }, ii = function (a, b) {
        for (var c = T(a.u) || [], d = [], e = 0; e < c.length; e++) {
            var f = c[e];
            if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
                if (a.A && !ki(f)) break;
                d.push(f)
            }
        }
        return d
    }, ki = function (a) {
        if (la) return !0;
        for (; a;) {
            if (a.nextSibling) return !0;
            a = a.parentNode
        }
        return !1
    };
    var ni, oi;
    var yi = function (a) {
        return function () {
        }
    }, zi = function (a) {
        return function () {
        }
    };
    var Yi = function (a) {
        var b = A || wa, c = b.onerror, d = !1;
        rh && !xh("535.3") && (d = !d);
        b.onerror = function (b, f, g, k, l) {
            c && c(b, f, g, k, l);
            a({message: b, fileName: f, mb: g, Jb: k, error: l});
            return d
        }
    };
    var tj = 48, uj = [], vj = [], wj = [], xj = new Ze, yj = [], Z = [], Ug = [], Vg = [], zj = function () {
        this.D = []
    };
    zj.prototype.set = function (a, b) {
        this.D.push([a, b]);
        return this
    };
    zj.prototype.resolve = function (a, b) {
        for (var c = {}, d = 0; d < this.D.length; d++) {
            var e = Aj(this.D[d][0], a, b), f = Aj(this.D[d][1], a, b);
            c[e] = f
        }
        return c
    };
    var Bj = function (a) {
        this.index = a
    };
    Bj.prototype.resolve = function (a, b) {
        var c = wj[this.index];
        if (c && !b(c)) {
            var d = c[Ec];
            if (a) {
                if (a.get(d)) return;
                a.set(d, !0)
            }
            c = Aj(c, a, b);
            a && a.set(d, !1);
            return $e(c)
        }
    };
    var _M = function (a) {
        return new Bj(a)
    }, Cj = function (a) {
        this.resolve = function (b, c) {
            for (var d = [], e = !1, f = 0; f < a.length; f++) {
                var g = Aj(uj[a[f]], b, c);
                g === jg && (e = !0);
                d.push(g)
            }
            return e ? new dh(d) : d.join("")
        }
    }, _T = function (a) {
        return new Cj(arguments)
    }, Dj = function (a) {
        function b(b) {
            for (var d = 1; d < a.length; d++) if (a[d] == b) return !0;
            return !1
        }

        this.resolve =
            function (c, d) {
                var e = Aj(a[0], c, d);
                if (a[0] instanceof Bj && b(8) && b(16)) {
                    if (e === jg) return e;
                    var f = "gtm" + ca++;
                    xj.set(f, e);
                    return 'google_tag_manager["GTM-T947SH"].macro(\'' + f + "')"
                }
                for (var e = String(e), g = 1; g < a.length; g++) e = X[a[g]](e);
                return e
            }
    }, _E = function (a, b) {
        return new Dj(arguments)
    }, Ej = function (a, b) {
        this.s = a;
        this.ia = b
    }, _R = function (a, b) {
        return new Ej(a, b)
    }, Fj = function (a, b) {
        return Aj(a, new Ze, b)
    }, Aj = function (a, b, c) {
        var d = a;
        if (a instanceof Bj || a instanceof zj || a instanceof Cj || a instanceof Dj) return a.resolve(b,
            c);
        if (!(a instanceof Ej)) if (S(a)) for (var d = [], e = 0; e < a.length; e++) d[e] = Aj(a[e], b, c); else if (a && "object" == typeof a) {
            var d = {}, f;
            for (f in a) a.hasOwnProperty(f) && (d[f] = Aj(a[f], b, c))
        }
        return d
    }, Gj = function (a, b) {
        var c = b[a], d = c;
        if (c instanceof Bj || c instanceof Dj || c instanceof Cj || c instanceof Ej) d = c; else if (S(c)) for (var d = [], e = 0; e < c.length; e++) d[e] = Gj(c[e], b); else if ("object" == typeof c) {
            var d = new zj, f;
            for (f in c) c.hasOwnProperty(f) && d.set(b[f], Gj(c[f], b))
        }
        return d
    }, Ij = function (a, b) {
        for (var c = b ? b.split(",") :
            [], d = 0; d < c.length; d++) {
            var e = c[d] = c[d].split(":");
            0 == a && (e[1] = uj[e[1]]);
            if (1 == a) for (var f = Hj(e[0]), e = c[d] = {}, g = 0; g < f.length; g++) {
                var k = vj[f[g]];
                e[k[0]] = k[1]
            }
            if (2 == a) for (g = 0; 4 > g; g++) e[g] = Hj(e[g]);
            3 == a && (c[d] = uj[e[0]]);
            if (4 == a) for (g = 0; 2 > g; g++) if (e[g]) {
                e[g] = e[g].split(".");
                for (var l = 0; l < e[g].length; l++) e[g][l] = uj[e[g][l]]
            } else e[g] = [];
            5 == a && (c[d] = e[0])
        }
        return c
    }, Hj = function (a) {
        var b = [];
        if (!a) return b;
        for (var c = 0, d = 0; d < a.length && c < tj; c += 6, d++) {
            var e = a && a.charCodeAt(d) || 65;
            if (65 != e) {
                var f = 0, f = 65 < e && 90 >=
                e ? e - 65 : 97 <= e && 122 >= e ? e - 97 + 26 : 95 == e ? 63 : 48 <= e ? e - 48 + 52 : 62;
                1 & f && b.push(c);
                2 & f && b.push(c + 1);
                4 & f && b.push(c + 2);
                8 & f && b.push(c + 3);
                16 & f && b.push(c + 4);
                32 & f && b.push(c + 5)
            }
        }
        return b
    }, Jj = function (a, b, c) {
        a.push.apply(a, Ij(b, c))
    };
    var zg = function () {
    }, Rj = function (a) {
    }, Cg = function () {
    }, Sj = function (a) {
    }, Tj = function (a, b) {
    }, Uj = function (a, b) {
    }, Ag = function (a) {
    };
    var Vj = function (a) {
            var b = this;
            this.g = a;
            this.complete = this.Ma = !1;
            this.ha = [];
            this.Z = [];
            this.O = function () {
                if (b.i && b.i.event) {
                    var a = b.i.event, d = b.g;
                }
                b.complete || ff(b.ha);
                jf(b, 1)
            };
            this.N = function () {
                if (b.i && b.i.event) {
                    var a = b.i.event, d = b.g;
                }
                b.complete || ff(b.Z);
                jf(b, 2)
            };
            this.v = Me
        }, Wj = function (a, b) {
            a.ha.push(b)
        },
        Xj = function (a, b) {
            a.Z.push(b)
        }, Yj = function (a) {
            this.F = [];
            this.ya = [];
            this.Ga = {};
            this.sa = [];
            this.M = 0;
            this.Ka = {};
            this.Na = {};
            this.ka = {};
            this.event = a
        };
    Yj.prototype.addListener = function (a) {
        this.sa.push(a)
    };
    var Zj = function (a, b, c, d, e, f) {
        if (!c.complete) {
            a.F[b] = c;
            void 0 == d && (d = []);
            void 0 == e && (e = []);
            void 0 == f && (f = []);
            d = S(d) ? d.slice() : ["or", d];
            e = S(e) ? e.slice() : [e];
            f = S(f) ? f.slice() : [f];
            a.Ga[b] = d;
            a.Ka[b] = 0 < e.length;
            a.Na[b] = 0 < f.length;
            a.M++;
            var g = function () {
                0 < a.M && a.M--;
                0 < a.M || ff(a.sa)
            };
            Wj(c, g);
            Xj(c, g)
        }
    }, ak = function (a, b, c) {
        a.F[b] && (Wj(a.F[b], function () {
            c(b, !0)
        }), Xj(a.F[b], function () {
            c(b, !1)
        }))
    }, bk = function (a, b) {
        var c = !1;
        return function (d, e) {
            var f;
            a:{
                for (var g = 0; g < a.length; g++) if (a[g] instanceof Ej && a[g].s ===
                    d || a[g] === d) {
                    f = g;
                    break a
                }
                f = -1
            }
            c || 0 > f || ("or" == a[0] ? e ? (c = !0, b()) : (a.splice(f, 1), 1 == a.length && (c = !0)) : e ? (a.splice(f, 1), 1 == a.length && (c = !0, b())) : c = !0)
        }
    }, fk = function (a, b) {
        var c = [], d = !1, e = function (b) {
            var f, g, k = Z[b];
            if (a.event.c(k)) {
            } else g = ck(k, b, a);
            if (f = g) {
                var h = dk(b, !0);
                0 < h.length && e(h[0].s);
                c.push(f);
                var l = dk(b, !1);
                0 < l.length && e(l[0].s)
            } else d =
                !0
        };
        e(b);
        if (!d) {
            for (var f = 0; f < c.length; f++) {
                var g = c[f], k = dk(g.g, !0);
                if (0 < k.length) {
                    var l = c[f - 1], m = ek(g);
                    Wj(l, m);
                    0 == k[0].ia && Xj(l, m)
                }
                var h = dk(g.g, !1);
                0 < h.length && (m = ek(c[f + 1]), Wj(g, m), 0 == h[0].ia && Xj(g, m))
            }
            a.ya.push(c)
        }
    }, dk = function (a, b) {
        var c = b ? Pd : fe, d = Z[a], e = void 0 === d[c] ? [] : d[c];
        return S(e) ? e : [e]
    }, ek = function (a) {
        return function () {
            a.v()
        }
    }, hk = function (a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c], e = [], f = function (a) {
                var b = dk(a, !0);
                0 < b.length && f(b[0].s);
                e.push(a);
                var c = dk(a, !1);
                0 < c.length && f(c[0].s)
            };
            f(d.g);
            b[d.g] = e
        }
        gk(a, b);
        return b
    }, gk = function (a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c].g, e;
            for (e in b) if (b.hasOwnProperty(e) && e != d && -1 < Pe(b[e], d)) {
                delete b[d];
                break
            }
        }
    };
    var jk = function (a, b) {
        return function () {
            a[wc] = b.O;
            a[xc] = b.N;
            var c = b.g, d = b.i && b.i.ka[c], e = Ia[c] && Ia[c].state, f = d ? void 0 !== d : b.Ma,
                g = Ia[c] && Ia[c].firingOption, k = g && 2 == g, l = g && 1 == g;
            if ((f || e && 0 != e) && (f || k) && (k || l)) k && Ia[c] && 1 == Ia[c].state || l && b.i && 1 == b.i.ka[c] ? b.O() : b.N(); else {
                var m = b.i ? b.i.event : void 0;
                a = ik(a, m ? m.c : Jf());
                jf(b, 0);
                if (m) {
                    var h = a;
                    Tj(m, c)
                }
                $e(a, b.O, b.N)
            }
        }
    }, ik = function (a, b) {
        a = Fj(a, b);
        return a
    }, ck = function (a, b, c) {
        var d = new Vj(b);
        d.i = c;
        Wj(d, yi(a));
        Xj(d, zi(a));
        d.v = jk(a, d);
        return d
    };
    var _sp = function (a, b, c) {
        n("//www.googleadservices.com/pagead/conversion_async.js", function () {
            var d = A.google_trackConversion;
            H(d) ? d({
                google_conversion_id: a[R],
                google_conversion_label: a[Jc],
                google_custom_params: a[Hb] || {},
                google_remarketing_only: !0,
                onload_callback: b
            }) || c() : c()
        }, c)
    };
    _sp.a = "sp";
    _sp.b = ["google"];
    var ok, pk;
    var yk = function () {
        var a = [];
        return function (b, c) {
            if (void 0 === a[b]) {
                var d = yj[b] && Fj(yj[b], c), e = d;
                if (d) if (d[Ta] && S(d[P])) for (var f = d[P], e = !1, g = 0; !e && g < f.length; g++) d[P] = f[g], e = $e(d); else e = $e(d);
                a[b] = [e, d]
            }
            return a[b]
        }
    }, Qj = function (a, b) {
        for (var c = b[0], d = 0; d < c.length; d++) if (!a.I(c[d], a.c)[0]) return !1;
        for (var e = b[2], d = 0; d < e.length; d++) if (a.I(e[d], a.c)[0]) return !1;
        return !0
    }, zk = !1, tg = function (a, b, c, d) {
        switch (b) {
            case "gtm.js":
                if (zk) return !1;
                zk = !0;
                break;
            case "gtm.sync":
                if (G("gtm.snippet") != Fa) return !1
        }
        G("tagTypeBlacklist");
        for (var e = {
            id: a,
            name: b,
            V: c || Me,
            U: Hj(),
            ga: Hj(),
            I: yk(),
            c: Jf()
        }, f = [], g = 0; g < Ug.length; g++) if (Qj(e, Ug[g])) {
            f[g] = !0;
            for (var k = e, l = Ug[g], m = l[1], h = 0; h < m.length; h++) k.U[m[h]] = !0;
            for (var p = l[3], h = 0; h < p.length; h++) k.ga[p[h]] = !0
        } else f[g] = !1;
        Tj(e);
        var t = [];
        for (var v = 0; v < tj; v++) if (e.U[v] && !e.ga[v]) if (e.c(Z[v])) {
        } else {
            t[v] = Z[v];
        }
        e.J = t;
        for (var u = new Yj(e), z = 0; z < tj; z++) if (e.U[z] && !e.ga[z]) if (e.c(Z[z])) {
        } else {
            var D = e.J[z], E = ck(D, z, u);
            Zj(u, z, E, D[Sb], D[Pd], D[fe]);
            if (D[Ja]) break
        }
        u.addListener(e.V);
        for (var F = [], y =
            0; y < u.F.length; y++) {
            var C = u.F[y];
            if (C) {
                var x = u.Ga[y], I = u.Ka[y], U = u.Na[y];
                if (0 != x.length || I || U) {
                    if (0 < x.length) for (var ba = bk(x, C.v), Y = 0; Y < x.length; Y++) x[Y] instanceof Ej && x[Y].s != y && ak(u, x[Y].s, ba);
                    (I || U) && fk(u, y)
                } else F.push(y)
            }
        }
        for (y = 0; y < F.length; y++) u.F[F[y]].v();
        for (y = 0; y < u.ya.length; y++) {
            for (var ub = u.ya[y], Aa = ub, cf = [], bd = 0; bd < Aa.length; bd++) {
                var cd = Aa[bd], af = cd.g, bf = Ia[af], $c = bf.firingOption;
                0 != $c && (1 == $c && void 0 !== cd.i.ka[af] || 2 == $c && void 0 !== bf.state) && cf.push(cd)
            }
            var ad = hk(cf), cc = void 0;
            for (cc in ad) if (ad.hasOwnProperty(cc)) {
                for (var Se =
                    void 0, Qi = void 0, Wc = ad[cc], Mk = Wc[0], Ri = Wc[Wc.length - 1], Si, za = 0; za < Aa.length; za++) {
                    var Xc = Aa[za];
                    !Se && Xc.g == Mk && 0 < za && (Se = Aa[za - 1]);
                    Xc.g == Ri && za < Aa.length - 1 && (Qi = Aa[za + 1]);
                    if (-1 < Pe(Wc, Xc.g)) if (Si = Aa.splice(za, 1)[0], Xc.g == Ri) break; else za--
                }
                if (Si) {
                    var Ti = Number(cc), aa = Se, Te = Qi;
                    if (aa) {
                        var Nk = aa.ha[0], Ok = aa.Z[0], Ui = aa;
                        Ui.ha = [];
                        Ui.Z = [];
                        Wj(aa, Nk);
                        Xj(aa, Ok)
                    }
                    if (aa && Te) {
                        var Ue = ek(Te);
                        Wj(aa, Ue);
                        var Ve = dk(aa.g, !1);
                        0 < Ve.length && Ve[0].s != Ti && 0 == Ve[0].ia && Xj(aa, Ue);
                        var We = dk(Te.g, !0);
                        0 < We.length && We[0].s != Ti &&
                        0 == We[0].ia && Xj(aa, Ue)
                    }
                }
            }
            0 < ub.length && ub[0].v()
        }
        0 < u.M || ff(u.sa);
        d && H(d) && d({
            passingRules: f,
            resolvedTags: e.J
        });
        for (var Vi in e.J) if (e.J.hasOwnProperty(Vi)) {
            var Wi = e.J[Vi], Xe;
            if (!(Xe = void 0 == Wi[Ec])) {
                var Xi = Wi[Ec];
                Xe = !("function" != typeof String.prototype.startsWith ? 0 === Xi.indexOf("_implicit") : Xi.startsWith("_implicit"))
            }
            if (Xe) return !0
        }
        return !1
    };
    var Ak = {
        macro: function (a) {
            if (xj.contains(a)) return xj.get(a)
        }
    };
    Ak.dataLayer = Ef;
    Ak.onHtmlSuccess = gh(!0);
    Ak.onHtmlFailure = gh(!1);
    Ak.Ya = function () {
        var a = A.google_tag_manager;
        a || (a = A.google_tag_manager = {});
        a["GTM-T947SH"] || (a["GTM-T947SH"] = Ak);
        ja = a
    };
    uj.push.apply(uj, function () {
        for (var a = [_cn, _u, 'url', _M(0), 'success', _eq, _e, '_event', _M(1), 'gtm.js', 'suc_orderid', _awct, '1066677870', 'KpmsCJLsPhDu7ND8Aw', _v, 'conversion_value', 2, _M(2), _re, '.*', 'addToCart', _sp, 'google_tag_params', _M(3), '-fcUCJ6S2QYQ7uzQ_AM', 3, 'event', _M(4), 5, 'element', 'gtm.element', 'element classes', 'gtm.elementClasses', 'element id', 'gtm.elementId', 'element target', 'gtm.elementTarget', 'url hostname', 'host', 'url path', 'path', _f, 'referrer', 'element url', 'gtm.elementUrl'], b = [], c = 0; c < a.length; c++) b[c] = Gj(c, a);
        return b
    }());
    Jj(vj, 0, "5:0,5:1,7:2,0:3,1:4,5:5,5:6,7:7,0:8,1:9,1:10,5:11,6:12,8:13,5:14,7:15,9:15,4:16,11:17,10:16,5:18,1:19,1:20,5:21,7:22,9:22,3:23,8:24,10:25,7:26,0:27,10:28,7:29,9:30,7:31,9:32,7:33,9:34,7:35,9:36,7:37,2:38,7:39,2:40,5:41,7:42,7:43,9:44");
    Jj(wj, 1, "G,AD,AA8,AAkAD,ABAAg,AAEAAM,AAEAAw,AAEAAAD,AAEAAAM,CAAAAAw,CAAAAAAD,AAAAAAAM,AAEAAAAw");
    Jj(yj, 1, "Z,gM,JQ,IAAM,JAAQ,BAAQAB");
    Jj(Z, 1, "AgDD,AABgc,AABgMC");
    Jj(Ug, 2, "D:B::,G:B::,K:C::,g:E::,Q:::C");
    Jj(Vg, 4, ":,:,:,:,:");
    for (var Bk = 0; Bk < Z.length; Bk++) {
        var Ck = Z[Bk], Dk = 1;
        Ck[ld] ? Dk = 2 : Ck[xe] && (Dk = 0);
        Ia[Bk] = {firingOption: Dk, state: void 0}
    }
    Ak.Ya();
    (function (a) {
    })("async");
    (function () {
        var a = w("dataLayer", [], !1), b = w("google_tag_manager", {}, !1), b = b["dataLayer"] = b["dataLayer"] || {};
        ma.push(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        wf.push(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        var c = a.push;
        a.push = function () {
            var b = [].slice.call(arguments, 0);
            c.apply(a, b);
            for (ug.push.apply(ug, b); 300 < this.length;) this.shift();
            return Dg()
        };
        ug.push.apply(ug, a.slice(0));
        q(Dg)
    })();
    if ("interactive" == N.readyState && !N.createEventObject || "complete" == N.readyState) of(); else {
        V(N, "DOMContentLoaded", of);
        V(N, "readystatechange", of);
        if (N.createEventObject && N.documentElement.doScroll) {
            var Lk = !0;
            try {
                Lk = !A.frameElement
            } catch (a) {
            }
            Lk && qf()
        }
        V(A, "load", of)
    }
    "complete" === N.readyState ? xf() : V(A, "load", xf);
    (function (a) {
    })("async");
    (function () {
    })();
    var _vs = "res_ts:1404183095481000,srv_cl:109452713,ds:live,cv:12";
})()
