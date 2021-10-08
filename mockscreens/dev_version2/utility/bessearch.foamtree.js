/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 * Copyright 2002-2021,Be-Secure Community, All Rights Reserved.
 *
 *
 * A simple utility for attaching showing and hiding a
 * data loading and preparation progress indicator. The utility
 * will create and attach all the necessary HTML to the page.
 *
 * Please see demos/loading.html for the usage example.
 *
 * @param foamtree the FoamTree instance whose loading and
 *        layout preparation progress should be monitored
 * @param indicatorHtml the HTML representing the loading message
 */
 (function() {
    var v = function() {
        var e = window.navigator.userAgent,
            m;
        try {
            window.localStorage.setItem("ftap5caavc", "ftap5caavc"), window.localStorage.removeItem("ftap5caavc"), m = !0
        } catch (g) {
            m = !1
        }
        return {
            qf: function() {
                return /webkit/i.test(e)
            },
            oi: function() {
                return /Mac/.test(e)
            },
            of: function() {
                return /iPad|iPod|iPhone/.test(e)
            },
            lf: function() {
                return /Android/.test(e)
            },
            ki: function() {
                return "ontouchstart" in window || !!window.DocumentTouch && document instanceof window.DocumentTouch
            },
            ji: function() {
                return m
            },
            ii: function() {
                var d = document.createElement("canvas");
                return !(!d.getContext || !d.getContext("2d"))
            },
            Gd: function(d, c) {
                return [].forEach && v.ii() ? d && d() : c && c()
            }
        }
    }();
    var ba = function() {
        function e() {
            return window.performance && (window.performance.now || window.performance.mozNow || window.performance.msNow || window.performance.oNow || window.performance.webkitNow) || Date.now
        }
        var m = e();
        return {
            create: function() {
                return {
                    now: function() {
                        var g = e();
                        return function() {
                            return g.call(window.performance)
                        }
                    }()
                }
            },
            now: function() {
                return m.call(window.performance)
            }
        }
    }();

    function da() {
        function e() {
            if (!f) throw "AF0";
            var d = ba.now();
            0 !== l && (g.Nd = d - l);
            l = d;
            c = c.filter(function(a) {
                return null !== a
            });
            g.frames++;
            for (var b = 0; b < c.length; b++) {
                var a = c[b];
                null !== a && (!0 === a.Be.call(a.Zg) ? c[b] = null : D.Uc(a.repeat) && (a.repeat = a.repeat - 1, 0 >= a.repeat && (c[b] = null)))
            }
            c = c.filter(function(a) {
                return null !== a
            });
            f = !1;
            m();
            d = ba.now() - d;
            0 !== d && (g.Md = d);
            g.totalTime += d;
            g.Re = 1E3 * g.frames / g.totalTime;
            l = 0 === c.length ? 0 : ba.now()
        }

        function m() {
            0 < c.length && !f && (f = !0, d(e))
        }
        var g = this.sg = {
            frames: 0,
            totalTime: 0,
            Md: 0,
            Nd: 0,
            Re: 0
        };
        fa = g;
        var d = function() {
                return v.of() ? function(c) {
                    window.setTimeout(c, 0)
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function() {
                    var c = ba.create();
                    return function(b) {
                        var a = 0;
                        window.setTimeout(function() {
                            var f = c.now();
                            b();
                            a = c.now() - f
                        }, 16 > a ? 16 - a : 0)
                    }
                }()
            }(),
            c = [],
            f = !1,
            l = 0;
        this.repeat = function(f, b, a) {
            this.cancel(f);
            c.push({
                Be: f,
                Zg: a,
                repeat: b
            });
            m()
        };
        this.d = function(c, b) {
            this.repeat(c,
                1, b)
        };
        this.cancel = function(f) {
            for (var b = 0; b < c.length; b++) {
                var a = c[b];
                null !== a && a.Be === f && (c[b] = null)
            }
        };
        this.k = function() {
            c = []
        }
    }
    var fa;
    var ga = v.Gd(function() {
        function e() {
            this.buffer = [];
            this.na = 0;
            this.Ic = D.extend({}, l)
        }

        function m(c) {
            return function() {
                var b, a = this.buffer,
                    f = this.na;
                a[f++] = "call";
                a[f++] = c;
                a[f++] = arguments.length;
                for (b = 0; b < arguments.length; b++) a[f++] = arguments[b];
                this.na = f
            }
        }

        function g(f) {
            return function() {
                return c[f].apply(c, arguments)
            }
        }
        var d = document.createElement("canvas");
        d.width = 1;
        d.height = 1;
        var c = d.getContext("2d"),
            d = ["font"],
            f = "fillStyle globalAlpha globalCompositeOperation lineCap lineDashOffset lineJoin lineWidth miterLimit shadowBlur shadowColor shadowOffsetX shadowOffsetY strokeStyle textAlign textBaseline".split(" "),
            l = {};
        f.concat(d).forEach(function(f) {
            l[f] = c[f]
        });
        e.prototype.clear = function() {
            this.na = 0
        };
        e.prototype.Na = function() {
            return 0 === this.na
        };
        e.prototype.Ua = function(c) {
            function b(a, b, c) {
                for (var f = 0, d = a.na, g = a.buffer; f < c;) g[d++] = b[f++];
                a.na = d
            }

            function a(a, b, c, f) {
                for (var d = 0; d < c;) switch (b[d++]) {
                    case "set":
                        a[b[d++]] = b[d++];
                        break;
                    case "setGlobalAlpha":
                        a[b[d++]] = b[d++] * f;
                        break;
                    case "call":
                        var g = b[d++];
                        switch (b[d++]) {
                            case 0:
                                a[g]();
                                break;
                            case 1:
                                a[g](b[d++]);
                                break;
                            case 2:
                                a[g](b[d++], b[d++]);
                                break;
                            case 3:
                                a[g](b[d++],
                                    b[d++], b[d++]);
                                break;
                            case 4:
                                a[g](b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 5:
                                a[g](b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 6:
                                a[g](b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 7:
                                a[g](b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 8:
                                a[g](b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            case 9:
                                a[g](b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++], b[d++]);
                                break;
                            default:
                                throw "CB0";
                        }
                }
            }
            c instanceof ga ? b(c, this.buffer, this.na) : a(c, this.buffer, this.na, D.B(c.globalAlpha,
                1))
        };
        e.prototype.replay = e.prototype.Ua;
        e.prototype.d = function() {
            return new e
        };
        e.prototype.scratch = e.prototype.d;
        "arc arcTo beginPath bezierCurveTo clearRect clip closePath drawImage fill fillRect fillText lineTo moveTo putImageData quadraticCurveTo rect rotate scale setLineDash setTransform stroke strokeRect strokeText transform translate".split(" ").forEach(function(c) {
            e.prototype[c] = m(c)
        });
        ["measureText", "createLinearGradient", "createRadialGradient", "createPattern", "getLineDash"].forEach(function(c) {
            e.prototype[c] =
                g(c)
        });
        ["save", "restore"].forEach(function(c) {
            e.prototype[c] = function(b, a) {
                return function() {
                    b.apply(this, arguments);
                    a.apply(this, arguments)
                }
            }(m(c), g(c))
        });
        d.forEach(function(f) {
            Object.defineProperty(e.prototype, f, {
                set: function(b) {
                    c[f] = b;
                    this.Ic[f] = b;
                    var a = this.buffer;
                    a[this.na++] = "set";
                    a[this.na++] = f;
                    a[this.na++] = b
                },
                get: function() {
                    return this.Ic[f]
                }
            })
        });
        f.forEach(function(c) {
            Object.defineProperty(e.prototype, c, {
                set: function(b) {
                    this.Ic[c] = b;
                    var a = this.buffer;
                    a[this.na++] = "globalAlpha" === c ? "setGlobalAlpha" :
                        "set";
                    a[this.na++] = c;
                    a[this.na++] = b
                },
                get: function() {
                    return this.Ic[c]
                }
            })
        });
        e.prototype.roundRect = function(c, b, a, f, d) {
            this.beginPath();
            this.moveTo(c + d, b);
            this.lineTo(c + a - d, b);
            this.quadraticCurveTo(c + a, b, c + a, b + d);
            this.lineTo(c + a, b + f - d);
            this.quadraticCurveTo(c + a, b + f, c + a - d, b + f);
            this.lineTo(c + d, b + f);
            this.quadraticCurveTo(c, b + f, c, b + f - d);
            this.lineTo(c, b + d);
            this.quadraticCurveTo(c, b, c + d, b);
            this.closePath()
        };
        e.prototype.fillPolygonWithText = function(c, b, a, f, d) {
            d || (d = {});
            var g = {
                    sb: D.B(d.maxFontSize, G.Da.sb),
                    ad: D.B(d.minFontSize, G.Da.ad),
                    lineHeight: D.B(d.lineHeight, G.Da.lineHeight),
                    pb: D.B(d.horizontalPadding, G.Da.pb),
                    eb: D.B(d.verticalPadding, G.Da.eb),
                    tb: D.B(d.maxTotalTextHeight, G.Da.tb),
                    fontFamily: D.B(d.fontFamily, G.Da.fontFamily),
                    fontStyle: D.B(d.fontStyle, G.Da.fontStyle),
                    fontVariant: D.B(d.fontVariant, G.Da.fontVariant),
                    fontWeight: D.B(d.fontWeight, G.Da.fontWeight),
                    verticalAlign: D.B(d.verticalAlign, G.Da.verticalAlign)
                },
                e = d.cache;
            if (e && D.K(d, "area")) {
                e.ld || (e.ld = new ga);
                var l = d.area,
                    s = D.B(d.cacheInvalidationThreshold,
                        0.05);
                c = G.Ae(g, this, f, c, M.q(c, {}), {
                    x: b,
                    y: a
                }, d.allowForcedSplit || !1, d.allowEllipsis || !1, e, l, s, d.invalidateCache)
            } else c = G.Oe(g, this, f, c, M.q(c, {}), {
                x: b,
                y: a
            }, d.allowForcedSplit || !1, d.allowEllipsis || !1);
            return c.la ? {
                fit: !0,
                lineCount: c.pc,
                fontSize: c.fontSize,
                box: {
                    x: c.ea.x,
                    y: c.ea.y,
                    w: c.ea.f,
                    h: c.ea.i
                },
                ellipsis: c.ic
            } : {
                fit: !1
            }
        };
        return e
    });
    var ha = v.Gd(function() {
        function e(a) {
            this.Q = a;
            this.d = [];
            this.Lb = [void 0];
            this.Pc = ["#SIZE#px sans-serif"];
            this.Od = [0];
            this.Pd = [1];
            this.le = [0];
            this.me = [0];
            this.ne = [0];
            this.Td = [10];
            this.lc = [10];
            this.Vb = [this.Lb, this.Pc, this.lc, this.Od, this.Pd, this.le, this.Td, this.me, this.ne];
            this.ga = [1, 0, 0, 1, 0, 0]
        }

        function m(a) {
            var b = a.Q,
                c = a.Vb[0].length - 1;
            a.Lb[c] && (b.setLineDash(a.Lb[c]), b.Sj = a.Od[c]);
            b.miterLimit = a.Td[c];
            b.lineWidth = a.Pd[c];
            b.shadowBlur = a.le[c];
            b.shadowOffsetX = a.me[c];
            b.shadowOffsetY = a.ne[c];
            b.font =
                a.Pc[c].replace("#SIZE#", a.lc[c].toString())
        }

        function g(a) {
            return function() {
                return this.Q[a].apply(this.Q, arguments)
            }
        }

        function d(a) {
            return function(b, c) {
                var d = this.ga;
                return this.Q[a].call(this.Q, f(b, c, d), l(b, c, d))
            }
        }

        function c(a) {
            return function(b, c, d, g) {
                var e = this.ga;
                return this.Q[a].call(this.Q, f(b, c, e), l(b, c, e), d * e[0], g * e[3])
            }
        }

        function f(a, b, c) {
            return a * c[0] + b * c[2] + c[4]
        }

        function l(a, b, c) {
            return a * c[1] + b * c[3] + c[5]
        }

        function h(a, b) {
            for (var c = 0; c < a.length; c++) a[c] *= b[0];
            return a
        }
        e.prototype.save =
            function() {
                this.d.push(this.ga.slice(0));
                for (var a = 0; a < this.Vb.length; a++) {
                    var b = this.Vb[a];
                    b.push(b[b.length - 1])
                }
                this.Q.save()
            };
        e.prototype.restore = function() {
            this.ga = this.d.pop();
            for (var a = 0; a < this.Vb.length; a++) this.Vb[a].pop();
            this.Q.restore();
            m(this)
        };
        e.prototype.scale = function(a, b) {
            var c = this.ga;
            c[0] *= a;
            c[1] *= a;
            c[2] *= b;
            c[3] *= b;
            var c = this.ga,
                f = this.Vb,
                d = f[0].length - 1,
                g = this.Lb[d];
            g && h(g, c);
            for (g = 2; g < f.length; g++) {
                var e = f[g];
                e[d] *= c[0]
            }
            m(this)
        };
        e.prototype.translate = function(a, b) {
            var c = this.ga;
            c[4] += c[0] * a + c[2] * b;
            c[5] += c[1] * a + c[3] * b
        };
        ["moveTo", "lineTo"].forEach(function(a) {
            e.prototype[a] = d(a)
        });
        ["clearRect", "fillRect", "strokeRect", "rect"].forEach(function(a) {
            e.prototype[a] = c(a)
        });
        "fill stroke beginPath closePath clip createImageData createPattern getImageData putImageData getLineDash setLineDash".split(" ").forEach(function(a) {
            e.prototype[a] = g(a)
        });
        [{
                vb: "lineDashOffset",
                Ab: function(a) {
                    return a.Od
                }
            }, {
                vb: "lineWidth",
                Ab: function(a) {
                    return a.Pd
                }
            }, {
                vb: "miterLimit",
                Ab: function(a) {
                    return a.Td
                }
            },
            {
                vb: "shadowBlur",
                Ab: function(a) {
                    return a.le
                }
            }, {
                vb: "shadowOffsetX",
                Ab: function(a) {
                    return a.me
                }
            }, {
                vb: "shadowOffsetY",
                Ab: function(a) {
                    return a.ne
                }
            }
        ].forEach(function(a) {
            Object.defineProperty(e.prototype, a.vb, {
                set: function(b) {
                    var c = a.Ab(this);
                    b *= this.ga[0];
                    c[c.length - 1] = b;
                    this.Q[a.vb] = b
                }
            })
        });
        var b = /(\d+(?:\.\d+)?)px/;
        Object.defineProperty(e.prototype, "font", {
            set: function(a) {
                var c = b.exec(a);
                if (1 < c.length) {
                    var f = this.lc.length - 1;
                    this.lc[f] = parseFloat(c[1]);
                    this.Pc[f] = a.replace(b, "#SIZE#px");
                    this.Q.font =
                        this.Pc[f].replace("#SIZE#", (this.lc[f] * this.ga[0]).toString())
                }
            }
        });
        "fillStyle globalAlpha globalCompositeOperation lineCap lineJoin shadowColor strokeStyle textAlign textBaseline".split(" ").forEach(function(a) {
            Object.defineProperty(e.prototype, a, {
                set: function(b) {
                    this.Q[a] = b
                }
            })
        });
        e.prototype.arc = function(a, b, c, d, g, e) {
            var s = this.ga;
            this.Q.arc(f(a, b, s), l(a, b, s), c * s[0], d, g, e)
        };
        e.prototype.arcTo = function(a, b, c, d, g) {
            var e = this.ga;
            this.Q.arc(f(a, b, e), l(a, b, e), f(c, d, e), l(c, d, e), g * e[0])
        };
        e.prototype.bezierCurveTo =
            function(a, b, c, d, g, e) {
                var s = this.ga;
                this.Q.bezierCurveTo(f(a, b, s), l(a, b, s), f(c, d, s), l(c, d, s), f(g, e, s), l(g, e, s))
            };
        e.prototype.drawImage = function(a, b, c, d, g, e, s, h, m) {
            function y(b, c, d, g) {
                A.push(f(b, c, x));
                A.push(l(b, c, x));
                d = D.V(d) ? a.width : d;
                g = D.V(g) ? a.height : g;
                A.push(d * x[0]);
                A.push(g * x[3])
            }
            var x = this.ga,
                A = [a];
            D.V(e) ? y(b, c, d, g) : y(e, s, h, m);
            this.Q.drawImage.apply(this.Q, A)
        };
        e.prototype.quadraticCurveTo = function(a, b, c, d) {
            var g = this.ga;
            this.Q.quadraticCurveTo(f(a, b, g), l(a, b, g), f(c, d, g), l(c, d, g))
        };
        e.prototype.fillText =
            function(a, b, c, d) {
                var g = this.ga;
                this.Q.fillText(a, f(b, c, g), l(b, c, g), D.Uc(d) ? d * g[0] : 1E20)
            };
        e.prototype.setLineDash = function(a) {
            a = h(a.slice(0), this.ga);
            this.Lb[this.Lb.length - 1] = a;
            this.Q.setLineDash(a)
        };
        return e
    });
    var ja = function() {
        var e = !v.qf() || v.of() || v.lf() ? 1 : 7;
        return {
            gh: function() {
                function m(a) {
                    a.beginPath();
                    ia.oe(a, h)
                }
                var g = document.createElement("canvas");
                g.width = 800;
                g.height = 600;
                var d = g.getContext("2d"),
                    c = g.width,
                    g = g.height,
                    f, l = 0,
                    h = [{
                        x: 0,
                        y: 100
                    }];
                for (f = 1; 6 >= f; f++) l = 2 * f * Math.PI / 6, h.push({
                    x: 0 + 100 * Math.sin(l),
                    y: 0 + 100 * Math.cos(l)
                });
                f = {
                    polygonPlainFill: [m, function(a) {
                        a.fillStyle = "rgb(255, 0, 0)";
                        a.fill()
                    }],
                    polygonPlainStroke: [m, function(a) {
                        a.strokeStyle = "rgb(128, 0, 0)";
                        a.lineWidth = 2;
                        a.closePath();
                        a.stroke()
                    }],
                    polygonGradientFill: [m, function(a) {
                        var b = a.createRadialGradient(0, 0, 10, 0, 0, 60);
                        b.addColorStop(0, "rgb(255, 0, 0)");
                        b.addColorStop(1, "rgb(255, 255, 0)");
                        a.fillStyle = b;
                        a.fill()
                    }],
                    polygonGradientStroke: [m, function(a) {
                        var b = a.createLinearGradient(-100, -100, 100, 100);
                        b.addColorStop(0, "rgb(224, 0, 0)");
                        b.addColorStop(1, "rgb(32, 0, 0)");
                        a.strokeStyle = b;
                        a.lineWidth = 2;
                        a.closePath();
                        a.stroke()
                    }],
                    polygonExposureShadow: [m, function(a) {
                        a.shadowBlur = 50;
                        a.shadowColor = "rgba(0, 0, 0, 1)";
                        a.fillStyle = "rgba(0, 0, 0, 1)";
                        a.globalCompositeOperation = "source-over";
                        a.fill();
                        a.shadowBlur = 0;
                        a.shadowColor = "transparent";
                        a.globalCompositeOperation = "destination-out";
                        a.fill()
                    }],
                    labelPlainFill: [function(a) {
                        a.fillStyle = "#000";
                        a.font = "24px sans-serif";
                        a.textAlign = "center"
                    }, function(a) {
                        a.fillText("Some text", 0, -16);
                        a.fillText("for testing purposes", 0, 16)
                    }]
                };
                var l = 100 / Object.keys(f).length,
                    b = ba.now(),
                    a = {},
                    k;
                for (k in f) {
                    var n = f[k],
                        q = ba.now(),
                        p, r = 0;
                    do {
                        d.save();
                        d.translate(Math.random() * c, Math.random() * g);
                        p = 3 * Math.random() + 0.5;
                        d.scale(p,
                            p);
                        for (p = 0; p < n.length; p++) n[p](d);
                        d.restore();
                        r++;
                        p = ba.now()
                    } while (p - q < l);
                    a[k] = e * (p - q) / r
                }
                a.total = ba.now() - b;
                return a
            }
        }
    }();
    var ia = {
        oe: function(e, m) {
            var g = m[0];
            e.moveTo(g.x, g.y);
            for (var d = m.length - 1; 0 < d; d--) g = m[d], e.lineTo(g.x, g.y)
        },
        vj: function(e, m, g, d) {
            var c, f, l, h = [],
                b = 0,
                a = m.length;
            for (l = 0; l < a; l++) c = m[l], f = m[(l + 1) % a], c = M.d(c, f), c = Math.sqrt(c), h.push(c), b += c;
            g = d * (g + 0.5 * d * b / a);
            var k, n;
            d = {};
            var b = {},
                q = {},
                p = 0;
            for (l = 0; l < a; l++) c = m[l], f = m[(l + 1) % a], k = m[(l + 2) % a], n = h[(l + 1) % a], n = Math.min(0.5, g / n), M.za(1 - n, f, k, b), M.za(n, f, k, q), p++, 0 == l && (k = Math.min(0.5, g / h[0]), M.za(k, c, f, d), p++, e.moveTo(d.x, d.y)), e.quadraticCurveTo(f.x, f.y, b.x, b.y),
                e.lineTo(q.x, q.y);
            return !0
        }
    };

    function ka(e) {
        function m() {
            return "embedded" === c.getAttribute("data-foamtree")
        }

        function g(a) {
            n[a] && (n[a].style.opacity = p * q[a])
        }

        function d(a) {
            a.width = Math.round(l * a.n);
            a.height = Math.round(h * a.n)
        }
        var c, f, l, h, b, a, k = [],
            n = {},
            q = {},
            p = 0;
        this.H = function(d) {
            c = d;
            0 !== c.clientWidth && 0 !== c.clientHeight || la.Pa("element has zero dimensions: " + c.clientWidth + " x " + c.clientHeight + ".");
            c.innerHTML = "";
            l = c.clientWidth;
            h = c.clientHeight;
            b = 0 !== l ? l : void 0;
            a = 0 !== h ? h : void 0;
            m() && la.Pa("visualization already embedded in the element.");
            c.setAttribute("data-foamtree", "embedded");
            f = document.createElement("div");
            f.style.width = "100%";
            f.style.height = "100%";
            f.style.position = "relative";
            c.appendChild(f);
            e.c.p("stage:initialized", this, f, l, h)
        };
        this.lb = function() {
            m() && (c.removeAttribute("data-foamtree"), k = [], n = {}, c.removeChild(f), e.c.p("stage:disposed", this, f))
        };
        this.k = function() {
            l = c.clientWidth;
            h = c.clientHeight;
            if (0 !== l && 0 !== h && (l !== b || h !== a)) {
                for (var f = k.length - 1; 0 <= f; f--) d(k[f]);
                e.c.p("stage:resized", b, a, l, h);
                b = l;
                a = h
            }
        };
        this.jj = function(a,
            b) {
            a.n = b;
            d(a)
        };
        this.rc = function(a, b, c) {
            var l = document.createElement("canvas");
            l.setAttribute("style", "position: absolute; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; -webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;");
            l.n = b;
            d(l);
            k.push(l);
            n[a] = l;
            q[a] = 1;
            g(a);
            c || f.appendChild(l);
            e.c.p("stage:newLayer", a, l);
            return l
        };
        this.nc = function(a, b) {
            D.V(b) || (q[a] = b, g(a));
            return q[a]
        };
        this.d = function(a) {
            D.V(a) || (p = a, D.Fa(n,
                function(a, b) {
                    g(b)
                }));
            return p
        }
    };

    function oa(e) {
        function m(a, b, d) {
            y = !0;
            q.x = 0;
            q.y = 0;
            p.x = 0;
            p.y = 0;
            c = k;
            f.x = n.x;
            f.y = n.y;
            b();
            l *= a;
            h = d ? l / c : a;
            h = Math.max(0.25 / c, h);
            return !0
        }

        function g(a, b) {
            b.x = a.x / k + n.x;
            b.y = a.y / k + n.y;
            return b
        }

        function d(a, b, c, f, d, g, e, k, l) {
            var s = (a - c) * (g - k) - (b - f) * (d - e);
            if (1E-5 > Math.abs(s)) return !1;
            l.x = ((a * f - b * c) * (d - e) - (a - c) * (d * k - g * e)) / s;
            l.y = ((a * f - b * c) * (g - k) - (b - f) * (d * k - g * e)) / s;
            return !0
        }
        var c = 1,
            f = {
                x: 0,
                y: 0
            },
            l = 1,
            h = 1,
            b = 1,
            a = {
                x: 0,
                y: 0
            },
            k = 1,
            n = {
                x: 0,
                y: 0
            },
            q = {
                x: 0,
                y: 0
            },
            p = {
                x: 0,
                y: 0
            },
            r, s, w = {
                x: 0,
                y: 0,
                f: 0,
                i: 0
            },
            u = {
                x: 0,
                y: 0,
                f: 0,
                i: 0,
                scale: 1
            },
            y = !0;
        e.c.j("stage:initialized", function(a, b, c, f) {
            r = c;
            s = f;
            w.x = 0;
            w.y = 0;
            w.f = c;
            w.i = f;
            u.x = 0;
            u.y = 0;
            u.f = c;
            u.i = f;
            u.scale = 1
        });
        e.c.j("stage:resized", function(b, c, d, g) {
            function e(a) {
                a.x *= l;
                a.y *= h
            }

            function k(a) {
                e(a);
                a.f *= l;
                a.i *= h
            }
            r = d;
            s = g;
            var l = d / b,
                h = g / c;
            e(f);
            e(n);
            e(a);
            e(q);
            e(p);
            k(w);
            k(u)
        });
        this.bc = function(b, c) {
            return m(c, function() {
                g(b, a)
            }, !0)
        };
        this.Z = function(b, c) {
            if (1 === Math.round(1E4 * c) / 1E4) {
                var f = w.x - n.x,
                    g = w.y - n.y;
                m(1, function() {}, !0);
                return this.d(-f, -g)
            }
            return m(c, function() {
                for (var c = !1; !c;) var c = Math.random(),
                    f = Math.random(),
                    g = Math.random(),
                    e = Math.random(),
                    c = d(b.x + c * b.f, b.y + f * b.i, w.x + c * w.f, w.y + f * w.i, b.x + g * b.f, b.y + e * b.i, w.x + g * w.f, w.y + e * w.i, a)
            }, !0)
        };
        this.vc = function(b, c) {
            var f, g, e, l;
            f = b.f / b.i;
            g = r / s;
            f < g ? (e = b.i * g, l = b.i, f = b.x - 0.5 * (e - b.f), g = b.y) : f > g ? (e = b.f, l = b.f * s / r, f = b.x, g = b.y - 0.5 * (l - b.i)) : (f = b.x, g = b.y, e = b.f, l = b.i);
            f -= e * c;
            g -= l * c;
            e *= 1 + 2 * c;
            if (d(f, g, n.x, n.y, f + e, g, n.x + r / k, n.y, a)) return m(r / k / e, D.sa, !1);
            y = !1;
            return this.d(k * (n.x - f), k * (n.y - g))
        };
        this.d = function(a, b) {
            var c = Math.round(1E4 * a) / 1E4,
                f = Math.round(1E4 * b) /
                1E4;
            p.x += c / k;
            p.y += f / k;
            return 0 !== c || 0 !== f
        };
        this.reset = function(a) {
            a && this.content(0, 0, r, s);
            return this.Z({
                x: w.x + n.x,
                y: w.y + n.y,
                f: w.f / k,
                i: w.i / k
            }, b / l)
        };
        this.Tb = function(a) {
            b = Math.min(1, Math.round(1E4 * (a || l)) / 1E4)
        };
        this.k = function() {
            return n.x < w.x ? (w.x - n.x) * k : n.x + r / k > w.x + w.f ? -(n.x + r / k - w.x - w.f) * k : 0
        };
        this.A = function() {
            return n.y < w.y ? (w.y - n.y) * k : n.y + s / k > w.y + w.i ? -(n.y + s / k - w.y - w.i) * k : 0
        };
        this.update = function(b) {
            var d = Math.abs(Math.log(h));
            6 > d ? d = 2 : (d /= 4, d += 3 * d * (1 < h ? b : 1 - b));
            d = 1 < h ? Math.pow(b, d) : 1 - Math.pow(1 - b,
                d);
            d = (y ? d : 1) * (h - 1) + 1;
            k = c * d;
            n.x = a.x - (a.x - f.x) / d;
            n.y = a.y - (a.y - f.y) / d;
            n.x -= q.x * (1 - b) + p.x * b;
            n.y -= q.y * (1 - b) + p.y * b;
            1 === b && (q.x = p.x, q.y = p.y);
            u.x = n.x;
            u.y = n.y;
            u.f = r / k;
            u.i = s / k;
            u.scale = k
        };
        this.S = function(a) {
            a.x = u.x;
            a.y = u.y;
            a.scale = u.scale;
            return a
        };
        this.absolute = function(a, b) {
            return g(a, b || {})
        };
        this.pd = function(a, b) {
            var c = b || {};
            c.x = (a.x - n.x) * k;
            c.y = (a.y - n.y) * k;
            return c
        };
        this.Jc = function(a) {
            return this.scale() < b / a
        };
        this.Ud = function() {
            return D.Id(k, 1)
        };
        this.scale = function() {
            return Math.round(1E4 * k) / 1E4
        };
        this.content =
            function(a, b, c, f) {
                w.x = a;
                w.y = b;
                w.f = c;
                w.i = f
            };
        this.Lc = function(a, b) {
            var c;
            for (c = a.length - 1; 0 <= c; c--) {
                var f = a[c];
                f.save();
                f.scale(k, k);
                f.translate(-n.x, -n.y)
            }
            b(u);
            for (c = a.length - 1; 0 <= c; c--) f = a[c], f.restore()
        }
    };
    var S = new function() {
        function e(g) {
            if ("hsl" == g.model || "hsla" == g.model) return g;
            var d = g.r /= 255,
                c = g.g /= 255,
                f = g.b /= 255,
                e = Math.max(d, c, f),
                h = Math.min(d, c, f),
                b, a = (e + h) / 2;
            if (e == h) b = h = 0;
            else {
                var k = e - h,
                    h = 0.5 < a ? k / (2 - e - h) : k / (e + h);
                switch (e) {
                    case d:
                        b = (c - f) / k + (c < f ? 6 : 0);
                        break;
                    case c:
                        b = (f - d) / k + 2;
                        break;
                    case f:
                        b = (d - c) / k + 4
                }
                b /= 6
            }
            g.h = 360 * b;
            g.s = 100 * h;
            g.l = 100 * a;
            g.model = "hsl";
            return g
        }
        var m = {
            h: 0,
            s: 0,
            l: 0,
            a: 1,
            model: "hsla"
        };
        this.Aa = function(g) {
            return D.Vc(g) ? e(S.Hg(g)) : D.Ib(g) ? e(g) : m
        };
        this.Hg = function(g) {
            var d;
            return (d = /rgba\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)/.exec(g)) &&
                5 == d.length ? {
                    r: parseFloat(d[1]),
                    g: parseFloat(d[2]),
                    b: parseFloat(d[3]),
                    a: parseFloat(d[4]),
                    model: "rgba"
                } : (d = /hsla\(\s*([^,\s]+)\s*,\s*([^,%\s]+)%\s*,\s*([^,\s%]+)%\s*,\s*([^,\s]+)\s*\)/.exec(g)) && 5 == d.length ? {
                    h: parseFloat(d[1]),
                    s: parseFloat(d[2]),
                    l: parseFloat(d[3]),
                    a: parseFloat(d[4]),
                    model: "hsla"
                } : (d = /rgb\(\s*([^,\s]+)\s*,\s*([^,\s]+)\s*,\s*([^,\s]+)\s*\)/.exec(g)) && 4 == d.length ? {
                    r: parseFloat(d[1]),
                    g: parseFloat(d[2]),
                    b: parseFloat(d[3]),
                    a: 1,
                    model: "rgb"
                } : (d = /hsl\(\s*([^,\s]+)\s*,\s*([^,\s%]+)%\s*,\s*([^,\s%]+)%\s*\)/.exec(g)) &&
                4 == d.length ? {
                    h: parseFloat(d[1]),
                    s: parseFloat(d[2]),
                    l: parseFloat(d[3]),
                    a: 1,
                    model: "hsl"
                } : (d = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(g)) && 4 == d.length ? {
                    r: parseInt(d[1], 16),
                    g: parseInt(d[2], 16),
                    b: parseInt(d[3], 16),
                    a: 1,
                    model: "rgb"
                } : (d = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(g)) && 4 == d.length ? {
                    r: 17 * parseInt(d[1], 16),
                    g: 17 * parseInt(d[2], 16),
                    b: 17 * parseInt(d[3], 16),
                    a: 1,
                    model: "rgb"
                } : m
        };
        this.Cg = function(g) {
            function d(b, a, c) {
                0 > c && (c += 1);
                1 < c && (c -= 1);
                return c < 1 / 6 ? b + 6 * (a - b) * c : 0.5 > c ? a : c < 2 / 3 ?
                    b + (a - b) * (2 / 3 - c) * 6 : b
            }
            if ("rgb" == g.model || "rgba" == g.model) return Math.sqrt(g.r * g.r * 0.241 + g.g * g.g * 0.691 + g.b * g.b * 0.068) / 255;
            var c, f;
            c = g.l / 100;
            var e = g.s / 100;
            f = g.h / 360;
            if (0 == g.Vj) c = g = f = c;
            else {
                var e = 0.5 > c ? c * (1 + e) : c + e - c * e,
                    h = 2 * c - e;
                c = d(h, e, f + 1 / 3);
                g = d(h, e, f);
                f = d(h, e, f - 1 / 3)
            }
            return Math.sqrt(65025 * c * c * 0.241 + 65025 * g * g * 0.691 + 65025 * f * f * 0.068) / 255
        };
        this.Ng = function(g) {
            if (D.Vc(g)) return g;
            if (D.Ib(g)) switch (g.model) {
                case "hsla":
                    return S.Ig(g);
                case "hsl":
                    return S.Cc(g);
                case "rgba":
                    return S.Lg(g);
                case "rgb":
                    return S.Kg(g);
                default:
                    return "#000"
            } else return "#000"
        };
        this.Lg = function(g) {
            return "rgba(" + (0.5 + g.r | 0) + "," + (0.5 + g.g | 0) + "," + (0.5 + g.b | 0) + "," + g.a + ")"
        };
        this.Kg = function(g) {
            return "rgba(" + (0.5 + g.r | 0) + "," + (0.5 + g.g | 0) + "," + (0.5 + g.b | 0) + ")"
        };
        this.Ig = function(g) {
            return "hsla(" + (0.5 + g.h | 0) + "," + (0.5 + g.s | 0) + "%," + (0.5 + g.l | 0) + "%," + g.a + ")"
        };
        this.Cc = function(g) {
            return "hsl(" + (0.5 + g.h | 0) + "," + (0.5 + g.s | 0) + "%," + (0.5 + g.l | 0) + "%)"
        };
        this.Z = function(g, d, c) {
            return "hsl(" + (0.5 + g | 0) + "," + (0.5 + d | 0) + "%," + (0.5 + c | 0) + "%)"
        }
    };

    function V() {
        var e = !1,
            m, g = [],
            d = this,
            c = new function() {
                this.P = function(c) {
                    c && (e ? c.apply(d, m) : g.push(c));
                    return this
                };
                this.kh = function(c) {
                    d = c;
                    return {
                        then: this.P
                    }
                }
            };
        this.J = function() {
            m = arguments;
            for (var c = 0; c < g.length; c++) g[c].apply(d, m);
            e = !0;
            return this
        };
        this.N = function() {
            return c
        }
    }

    function pa(e) {
        var m = new V,
            g = e.length;
        if (0 < e.length)
            for (var d = e.length - 1; 0 <= d; d--) e[d].P(function() {
                0 === --g && m.J()
            });
        else m.J();
        return m.N()
    }

    function qa(e) {
        var m = 0;
        this.d = function() {
            m++
        };
        this.k = function() {
            m--;
            0 === m && e()
        };
        this.clear = function() {
            m = 0
        };
        this.A = function() {
            return 0 === m
        }
    };
    var ra = {
        Le: function(e, m, g, d) {
            d = d || {};
            var c;
            try {
                c = e.getBoundingClientRect()
            } catch (f) {
                if (!ra.mi) {
                    ra.mi = !0;
                    window.console.log("getBoundingClientRect() failed.");
                    for (window.console.log("Element", e); null !== e.parentElement;) e = e.parentElement;
                    window.console.log("Attached to DOM", e === document.body.parentElement)
                }
                c = {
                    left: 0,
                    top: 0
                }
            }
            d.x = m - c.left;
            d.y = g - c.top;
            return d
        }
    };

    function sa() {
        var e = document,
            m = {};
        this.addEventListener = function(g, d, c) {
            var f = m[g];
            f || (f = [], m[g] = f);
            f.push(d);
            e.addEventListener(g, d, c)
        };
        this.d = function() {
            D.Fa(m, function(g, d) {
                for (var c = g.length - 1; 0 <= c; c--) e.removeEventListener(d, g[c])
            })
        }
    };

    function ta(e) {
        function m(a) {
            return function(b) {
                g(b) && a.apply(this, arguments)
            }
        }

        function g(a) {
            for (a = a.target; a;) {
                if (a === e) return !0;
                a = a.parentElement
            }
            return !1
        }

        function d(a, b, f) {
            f = f || {};
            c(a, f);
            for (var d = 0; d < b.length; d++) b[d].call(a.target, f);
            c(a, f);
            (void 0 === f.Pb && f.Di || "prevent" === f.Pb) && a.preventDefault();
            return f
        }

        function c(a, b) {
            ra.Le(e, a.clientX, a.clientY, b);
            b.altKey = a.altKey;
            b.metaKey = a.metaKey;
            b.ctrlKey = a.ctrlKey;
            b.shiftKey = a.shiftKey;
            b.xb = 3 === a.which;
            return b
        }
        var f = new sa,
            l = [],
            h = [],
            b = [],
            a = [],
            k = [],
            n = [],
            q = [],
            p = [],
            r = [],
            s = [],
            w = [];
        this.d = function(a) {
            l.push(a)
        };
        this.k = function(a) {
            k.push(a)
        };
        this.xa = function(a) {
            h.push(a)
        };
        this.Aa = function(a) {
            b.push(a)
        };
        this.Pa = function(b) {
            a.push(b)
        };
        this.za = function(a) {
            w.push(a)
        };
        this.ya = function(a) {
            n.push(a)
        };
        this.Ia = function(a) {
            q.push(a)
        };
        this.Z = function(a) {
            p.push(a)
        };
        this.A = function(a) {
            r.push(a)
        };
        this.S = function(a) {
            s.push(a)
        };
        this.lb = function() {
            f.d()
        };
        var u, y, x, A, B = {
                x: 0,
                y: 0
            },
            K = {
                x: 0,
                y: 0
            },
            C = !1,
            H = !1;
        f.addEventListener("mousedown", m(function(a) {
            if (a.target !==
                e) {
                var c = d(a, b);
                K.x = c.x;
                K.y = c.y;
                B.x = c.x;
                B.y = c.y;
                C = !0;
                d(a, p);
                y = !1;
                u = window.setTimeout(function() {
                    100 > M.d(B, c) && (window.clearTimeout(A), d(a, h), y = !0)
                }, 400)
            }
        }));
        f.addEventListener("mouseup", function(b) {
            var c = d(b, a);
            C && (H && d(b, s), window.clearTimeout(u), y || H || !g(b) || (c = {
                x: c.x,
                y: c.y
            }, x && 100 > M.d(c, x) ? d(b, k) : d(b, l), x = c, A = window.setTimeout(function() {
                x = null
            }, 350)), H = C = !1)
        });
        f.addEventListener("mousemove", function(a) {
            var b = c(a, {});
            g(a) && d(a, n, {
                type: "move"
            });
            B.x = b.x;
            B.y = b.y;
            C && !H && 100 < M.d(K, B) && (H = !0);
            H && d(a,
                r, b)
        });
        f.addEventListener("mouseout", m(function(a) {
            d(a, q, {
                type: "out"
            })
        }));
        f.addEventListener("wheel", m(function() {
            return function(a) {
                var b;
                "deltaY" in a ? b = a.deltaY : (b = 0, "detail" in a && (b = a.detail), "wheelDelta" in a && (b = -a.wheelDelta / 120), "wheelDeltaY" in a && (b = -a.wheelDeltaY / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (b = 0), b *= 10);
                b && a.deltaMode && (b = 1 === a.deltaMode ? 67 * b : 800 * b);
                d(a, w, {
                    zd: -b / 200,
                    Di: !0
                })
            }
        }()), {
            passive: !1
        });
        f.addEventListener("contextmenu", m(function(a) {
            a.preventDefault()
        }))
    };
    var X = function() {
        function e(c) {
            return function(f) {
                return Math.pow(f, c)
            }
        }

        function m(c) {
            return function(f) {
                return 1 - Math.pow(1 - f, c)
            }
        }

        function g(c) {
            return function(f) {
                return 1 > (f *= 2) ? 0.5 * Math.pow(f, c) : 1 - 0.5 * Math.abs(Math.pow(2 - f, c))
            }
        }

        function d(c) {
            return function(f) {
                for (var d = 0; d < c.length; d++) f = (0, c[d])(f);
                return f
            }
        }
        return {
            oa: function(c) {
                switch (c) {
                    case "linear":
                        return X.Mb;
                    case "bounce":
                        return X.Wg;
                    case "squareIn":
                        return X.pg;
                    case "squareOut":
                        return X.Ub;
                    case "squareInOut":
                        return X.qg;
                    case "cubicIn":
                        return X.$g;
                    case "cubicOut":
                        return X.Ce;
                    case "cubicInOut":
                        return X.ah;
                    case "quadIn":
                        return X.Vi;
                    case "quadOut":
                        return X.Xi;
                    case "quadInOut":
                        return X.Wi;
                    default:
                        return X.Mb
                }
            },
            Mb: function(c) {
                return c
            },
            Wg: d([g(2), function(c) {
                return 0 === c ? 0 : 1 === c ? 1 : c * (c * (c * (c * (25.9425 * c - 85.88) + 105.78) - 58.69) + 13.8475)
            }]),
            pg: e(2),
            Ub: m(2),
            qg: g(2),
            $g: e(3),
            Ce: m(3),
            ah: g(3),
            Vi: e(2),
            Xi: m(2),
            Wi: g(2),
            d: d
        }
    }();
    var D = {
        V: function(e) {
            return void 0 === e
        },
        pf: function(e) {
            return null === e
        },
        Uc: function(e) {
            return "[object Number]" === Object.prototype.toString.call(e)
        },
        Vc: function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        },
        Jd: function(e) {
            return "function" === typeof e
        },
        Ib: function(e) {
            return e === Object(e)
        },
        Id: function(e, m) {
            return 1E-6 > e - m && -1E-6 < e - m
        },
        mf: function(e) {
            return D.V(e) || D.pf(e) || D.Vc(e) && !/\S/.test(e)
        },
        K: function(e, m) {
            return e && e.hasOwnProperty(m)
        },
        ob: function(e, m) {
            if (e)
                for (var g = m.length -
                        1; 0 <= g; g--)
                    if (e.hasOwnProperty(m[g])) return !0;
            return !1
        },
        extend: function(e) {
            D.fh(Array.prototype.slice.call(arguments, 1), function(m) {
                if (m)
                    for (var g in m) m.hasOwnProperty(g) && (e[g] = m[g])
            });
            return e
        },
        A: function(e, m) {
            return e.map(function(g) {
                return g[m]
            }, [])
        },
        fh: function(e, m, g) {
            null != e && (e.forEach ? e.forEach(m, g) : D.Fa(e, m, g))
        },
        Fa: function(e, m, g) {
            for (var d in e)
                if (e.hasOwnProperty(d) && !1 === m.call(g, e[d], d, e)) break
        },
        B: function() {
            for (var e = 0; e < arguments.length; e++) {
                var m = arguments[e];
                if (!(D.V(m) || D.Uc(m) &&
                        isNaN(m) || D.Vc(m) && D.mf(m))) return m
            }
        },
        eg: function(e, m) {
            var g = e.indexOf(m);
            0 <= g && e.splice(g, 1)
        },
        bh: function(e, m, g) {
            var d;
            return function() {
                var c = this,
                    f = arguments,
                    l = g && !d;
                clearTimeout(d);
                d = setTimeout(function() {
                    d = null;
                    g || e.apply(c, f)
                }, m);
                l && e.apply(c, f)
            }
        },
        defer: function(e) {
            setTimeout(e, 1)
        },
        k: function(e) {
            return e
        },
        sa: function() {}
    };
    var ua = {
        li: function(e, m, g) {
            return v.ji() ? function() {
                var d = m + ":" + JSON.stringify(arguments),
                    c = window.localStorage.getItem(d);
                c && (c = JSON.parse(c));
                if (c && Date.now() - c.t < g) return c.v;
                c = e.apply(this, arguments);
                window.localStorage.setItem(d, JSON.stringify({
                    v: c,
                    t: Date.now()
                }));
                return c
            } : e
        }
    };
    var va = {
        m: function(e, m) {
            function g() {
                var d = [];
                if (Array.isArray(e))
                    for (var c = 0; c < e.length; c++) {
                        var f = e[c];
                        f && d.push(f.apply(m, arguments))
                    } else e && d.push(e.apply(m, arguments));
                return d
            }
            g.empty = function() {
                return 0 === e.length && !D.Jd(e)
            };
            return g
        }
    };

    function wa() {
        var e = {};
        this.j = function(m, g) {
            var d = e[m];
            d || (d = [], e[m] = d);
            d.push(g)
        };
        this.p = function(m, g) {
            var d = e[m];
            if (d)
                for (var c = Array.prototype.slice.call(arguments, 1), f = 0; f < d.length; f++) d[f].apply(this, c)
        }
    };

    function xa(e) {
        function m(a, c, g) {
            var q = this,
                p, r = 0;
            this.id = l++;
            this.name = g ? g : "{unnamed on " + a + "}";
            this.target = function() {
                return a
            };
            this.Jb = function() {
                return -1 != b.indexOf(q)
            };
            this.start = function() {
                if (!q.Jb()) {
                    if (-1 == b.indexOf(q)) {
                        var a = h.now();
                        !0 === q.zf(a) && (b = b.slice(), b.push(q))
                    }
                    0 < b.length && e.repeat(d)
                }
                return this
            };
            this.stop = function() {
                for (f(q); p < c.length; p++) {
                    var a = c[p];
                    a.jb && a.Ya.call()
                }
                return this
            };
            this.gg = function() {
                p = void 0
            };
            this.zf = function(a) {
                r++;
                if (0 !== c.length) {
                    var b;
                    D.V(p) ? (p = 0, b = c[p], b.X &&
                        b.X.call(b, a, r, q)) : b = c[p];
                    for (; p < c.length;) {
                        if (b.Ya && b.Ya.call(b, a, r, q)) return !0;
                        b.Ca && b.Ca.call(b, a, r, q);
                        D.V(p) && (p = -1);
                        ++p < c.length && (b = c[p], b.X && b.X.call(b, a, r, q))
                    }
                }
                return !1
            }
        }

        function g(a) {
            return D.V(a) ? b.slice() : b.filter(function(b) {
                return b.target() === a
            })
        }

        function d() {
            c();
            0 == b.length && e.cancel(d)
        }

        function c() {
            var a = h.now();
            b.forEach(function(b) {
                !0 !== b.zf(a) && f(b)
            })
        }

        function f(a) {
            b = b.filter(function(b) {
                return b !== a
            })
        }
        var l = 0,
            h = ba.create(),
            b = [];
        this.d = function() {
            for (var a = b.length - 1; 0 <= a; a--) b[a].stop();
            b = []
        };
        this.D = function() {
            function a() {}

            function b(a) {
                var c = a.target,
                    f = a.duration,
                    d = a.da,
                    g, e;
                this.X = function() {
                    g = {};
                    for (var b in a.G) c.hasOwnProperty(b) && (g[b] = {
                        start: D.V(a.G[b].start) ? c[b] : D.Jd(a.G[b].start) ? a.G[b].start.call(void 0) : a.G[b].start,
                        end: D.V(a.G[b].end) ? c[b] : D.Jd(a.G[b].end) ? a.G[b].end.call(void 0) : a.G[b].end,
                        R: D.V(a.G[b].R) ? X.Mb : a.G[b].R
                    });
                    e = h.now()
                };
                this.Ya = function() {
                    var a = h.now() - e,
                        a = 0 === f ? 1 : Math.min(f, a) / f,
                        b;
                    for (b in g) {
                        var l = g[b];
                        c[b] = l.start + (l.end - l.start) * l.R(a)
                    }
                    d && d.call(c, a);
                    return 1 > a
                }
            }

            function c(a, b, f) {
                this.jb = f;
                this.Ya = function() {
                    a.call(b);
                    return !1
                }
            }

            function f(a) {
                var b;
                this.X = function(c, f) {
                    b = f + a
                };
                this.Ya = function(a, c) {
                    return c < b
                }
            }

            function d(a) {
                var b;
                this.X = function(c) {
                    b = c + a
                };
                this.Ya = function(a) {
                    return a < b
                }
            }

            function e(a) {
                this.X = function() {
                    a.forEach(function(a) {
                        a.start()
                    })
                };
                this.Ya = function() {
                    for (var b = 0; b < a.length; b++)
                        if (a[b].Jb()) return !0;
                    return !1
                }
            }
            a.m = function(a, g) {
                return new function() {
                    function l(b, f, d, g) {
                        return f ? (D.V(d) && (d = a), b.Cb(new c(f, d, g))) : b
                    }
                    var h = [];
                    this.Cb =
                        function(a) {
                            h.push(a);
                            return this
                        };
                    this.fb = function(a) {
                        return this.Cb(new d(a))
                    };
                    this.re = function(a) {
                        return this.Cb(new f(a || 1))
                    };
                    this.call = function(a, b) {
                        return l(this, a, b, !1)
                    };
                    this.jb = function(a, b) {
                        return l(this, a, b, !0)
                    };
                    this.ia = function(c) {
                        D.V(c.target) && (c.target = a);
                        return this.Cb(new b(c))
                    };
                    this.Za = function(a) {
                        return this.Cb(new e(a))
                    };
                    this.gg = function() {
                        return this.Cb({
                            Ya: function(a, b) {
                                b.gg();
                                return !0
                            }
                        })
                    };
                    this.wa = function() {
                        return new m(a, h, g)
                    };
                    this.start = function() {
                        return this.wa().start()
                    };
                    this.Gg = function() {
                        var a = new V;
                        this.re().call(a.J).wa();
                        return a.N()
                    };
                    this.bb = function() {
                        var a = this.Gg();
                        this.start();
                        return a
                    }
                }
            };
            a.wc = function(b) {
                g(b).forEach(function(a) {
                    a.stop()
                });
                return a.m(b, void 0)
            };
            return a
        }()
    };
    var $ = function() {
        var e = {
            Ke: function(e, g) {
                if (e.e)
                    for (var d = e.e, c = 0; c < d.length; c++) g(d[c], c)
            },
            Mc: function(m, g) {
                if (m.e)
                    for (var d = m.e, c = 0; c < d.length; c++)
                        if (!1 === e.Mc(d[c], g) || !1 === g(d[c], c)) return !1
            }
        };
        e.F = e.Mc;
        e.Nc = function(m, g) {
            if (m.e)
                for (var d = m.e, c = 0; c < d.length; c++)
                    if (!1 === g(d[c], c) || !1 === e.Nc(d[c], g)) return !1
        };
        e.Ea = function(m, g) {
            if (m.e)
                for (var d = m.e, c = 0; c < d.length; c++)
                    if (!1 === e.Ea(d[c], g)) return !1;
            return g(m)
        };
        e.Mj = e.Ea;
        e.Ad = function(m, g) {
            !1 !== g(m) && e.Nc(m, g)
        };
        e.Oc = function(m, g) {
            var d = [];
            e.Nc(m, function(c) {
                d.push(c)
            });
            return g ? d.filter(g) : d
        };
        e.Je = function(e, g) {
            for (var d = e.parent; d && !1 !== g(d);) d = d.parent
        };
        e.ni = function(e, g) {
            for (var d = e.parent; d && d !== g;) d = d.parent;
            return !!d
        };
        return e
    }();
    var M = new function() {
        function e(g, d) {
            var c = g.x - d.x,
                f = g.y - d.y;
            return c * c + f * f
        }

        function m(g, d, c) {
            for (var f = 0; f < g.length; f++) {
                var e = M.ya(g[f], g[f + 1] || g[0], d, c, !0);
                if (e) return e
            }
        }
        this.ya = function(g, d, c, f, e) {
            var h = g.x;
            g = g.y;
            var b = d.x - h;
            d = d.y - g;
            var a = c.x,
                k = c.y;
            c = f.x - a;
            var n = f.y - k;
            f = b * n - c * d;
            if (!(1E-12 >= f && -1E-12 <= f) && (a = a - h, k = k - g, c = (a * n - c * k) / f, f = (a * d - b * k) / f, 0 <= f && (e || 1 >= f) && 0 <= c && 1 >= c)) return {
                x: h + b * c,
                y: g + d * c
            }
        };
        this.Jg = function(g, d, c, f) {
            var e = g.x;
            g = g.y;
            var h = d.x - e;
            d = d.y - g;
            var b = c.x;
            c = c.y;
            var a = f.x - b;
            f = f.y -
                c;
            var k = h * f - a * d;
            if (!(1E-12 >= k && -1E-12 <= k) && (f = ((b - e) * f - a * (c - g)) / k, 0 <= f && 1 >= f)) return {
                x: e + h * f,
                y: g + d * f
            }
        };
        this.Dc = function(g, d, c) {
            for (var f = M.k(d, {}), e = M.k(c, {}), h, b = e.x - f.x, a = e.y - f.y, k = [], e = 0; e < c.length; e++) h = c[e], k.push({
                x: h.x - b,
                y: h.y - a
            });
            c = [];
            h = [];
            for (e = 0; e < g.length; e++) {
                var n = g[e],
                    q = m(d, f, n);
                q ? (c.push(q), h.push(m(k, f, n))) : (c.push(null), h.push(null))
            }
            for (e = 0; e < g.length; e++)
                if (q = c[e], n = h[e], q && n) {
                    d = g[e];
                    var k = f,
                        p = q.x - f.x,
                        q = q.y - f.y,
                        q = Math.sqrt(p * p + q * q);
                    if (1E-12 < q) {
                        var p = d.x - f.x,
                            r = d.y - f.y,
                            q = Math.sqrt(p *
                                p + r * r) / q;
                        d.x = k.x + q * (n.x - k.x);
                        d.y = k.y + q * (n.y - k.y)
                    } else d.x = k.x, d.y = k.y
                } for (e = 0; e < g.length; e++) h = g[e], h.x += b, h.y += a
        };
        this.q = function(g, d) {
            if (0 !== g.length) {
                var c, f, e, h;
                c = f = g[0].x;
                e = h = g[0].y;
                for (var b = g.length; 0 < --b;) c = Math.min(c, g[b].x), f = Math.max(f, g[b].x), e = Math.min(e, g[b].y), h = Math.max(h, g[b].y);
                d.x = c;
                d.y = e;
                d.f = f - c;
                d.i = h - e;
                return d
            }
        };
        this.A = function(e) {
            return [{
                x: e.x,
                y: e.y
            }, {
                x: e.x + e.f,
                y: e.y
            }, {
                x: e.x + e.f,
                y: e.y + e.i
            }, {
                x: e.x,
                y: e.y + e.i
            }]
        };
        this.k = function(e, d) {
            for (var c = 0, f = 0, l = e.length, h = e[0], b = 0, a = 1; a <
                l - 1; a++) var k = e[a],
                n = e[a + 1],
                q = h.y + k.y + n.y,
                p = (k.x - h.x) * (n.y - h.y) - (n.x - h.x) * (k.y - h.y),
                c = c + p * (h.x + k.x + n.x),
                f = f + p * q,
                b = b + p;
            d.x = c / (3 * b);
            d.y = f / (3 * b);
            d.ja = b / 2;
            return d
        };
        this.te = function(e, d) {
            this.k(e, d);
            d.Rb = Math.sqrt(d.ja / Math.PI)
        };
        this.Va = function(e, d) {
            for (var c = 0; c < e.length; c++) {
                var f = e[c],
                    l = e[c + 1] || e[0];
                if (0 > (d.y - f.y) * (l.x - f.x) - (d.x - f.x) * (l.y - f.y)) return !1
            }
            return !0
        };
        this.Mg = function(e, d, c) {
            var f = e.x,
                l = d.x;
            e.x > d.x && (f = d.x, l = e.x);
            l > c.x + c.f && (l = c.x + c.f);
            f < c.x && (f = c.x);
            if (f > l) return !1;
            var h = e.y,
                b = d.y,
                a = d.x -
                e.x;
            1E-7 < Math.abs(a) && (b = (d.y - e.y) / a, e = e.y - b * e.x, h = b * f + e, b = b * l + e);
            h > b && (f = b, b = h, h = f);
            b > c.y + c.i && (b = c.y + c.i);
            h < c.y && (h = c.y);
            return h <= b
        };
        this.ue = function(g, d, c, f, l) {
            var h, b;

            function a(a, c, f) {
                if (d.x === n.x && d.y === n.y) return f;
                var l = m(g, d, n),
                    p = Math.sqrt(e(l, d) / (a * a + c * c));
                return p < k ? (k = p, h = l.x, b = l.y, 0 !== c ? Math.abs(b - d.y) / Math.abs(c) : Math.abs(h - d.x) / Math.abs(a)) : f
            }
            f = D.B(f, 0.5);
            l = D.B(l, 0.5);
            c = D.B(c, 1);
            var k = Number.MAX_VALUE;
            b = h = 0;
            var n = {
                    x: 0,
                    y: 0
                },
                q, p = f * c;
            c = (1 - f) * c;
            f = 1 - l;
            n.x = d.x - p;
            n.y = d.y - l;
            q = a(p, l, q);
            n.x =
                d.x + c;
            n.y = d.y - l;
            q = a(c, l, q);
            n.x = d.x - p;
            n.y = d.y + f;
            q = a(p, f, q);
            n.x = d.x + c;
            n.y = d.y + f;
            return q = a(c, f, q)
        };
        this.Fg = function(e, d) {
            function c(a, b, c) {
                var f = b.x,
                    d = c.x;
                b = b.y;
                c = c.y;
                var e = d - f,
                    g = c - b;
                return Math.abs(g * a.x - e * a.y - f * c + d * b) / Math.sqrt(e * e + g * g)
            }
            for (var f = e.length, l = c(d, e[f - 1], e[0]), h = 0; h < f - 1; h++) {
                var b = c(d, e[h], e[h + 1]);
                b < l && (l = b)
            }
            return l
        };
        this.$b = function(e, d, c) {
            var f;
            c = {
                x: d.x + Math.cos(c),
                y: d.y - Math.sin(c)
            };
            var l = [],
                h = [],
                b = e.length;
            for (f = 0; f < b; f++) {
                var a = M.Jg(e[f], e[(f + 1) % b], d, c);
                if (a && (l.push(a), 2 == h.push(f))) break
            }
            if (2 ==
                l.length) {
                var a = l[0],
                    l = l[1],
                    k = h[0],
                    h = h[1],
                    n = [l, a];
                for (f = k + 1; f <= h; f++) n.push(e[f]);
                for (f = [a, l]; h != k;) h = (h + 1) % b, f.push(e[h]);
                e = [n, f];
                b = c.x - d.x;
                f = l.x - a.x;
                0 === b && (b = c.y - d.y, f = l.y - a.y);
                (0 > b ? -1 : 0 < b ? 1 : 0) !== (0 > f ? -1 : 0 < f ? 1 : 0) && e.reverse();
                return e
            }
        };
        this.za = function(e, d, c, f) {
            f.x = e * (d.x - c.x) + c.x;
            f.y = e * (d.y - c.y) + c.y;
            return f
        };
        this.d = e;
        this.hb = function(e, d, c) {
            if (D.Uc(d)) d = 2 * Math.PI * d / 360;
            else {
                var f = M.q(e, {});
                switch (d) {
                    case "random":
                        d = Math.random() * Math.PI * 2;
                        break;
                    case "top":
                        d = Math.atan2(-f.i, 0);
                        break;
                    case "bottom":
                        d =
                            Math.atan2(f.i, 0);
                        break;
                    case "left":
                        d = Math.atan2(0, -f.f);
                        break;
                    case "right":
                        d = Math.atan2(0, f.f);
                        break;
                    case "topleft":
                        d = Math.atan2(-f.i, -f.f);
                        break;
                    case "topright":
                        d = Math.atan2(-f.i, f.f);
                        break;
                    case "bottomleft":
                        d = Math.atan2(f.i, -f.f);
                        break;
                    default:
                        d = Math.atan2(f.i, f.f)
                }
            }
            f = M.k(e, {});
            return M.za(c, m(e, f, {
                x: f.x + Math.cos(d),
                y: f.y + Math.sin(d)
            }), f, {})
        };
        return this
    };
    var ya = new function() {
        function e(c, d) {
            this.face = c;
            this.md = d;
            this.sc = this.fd = null
        }

        function m(c, d, e) {
            this.ma = [c, d, e];
            this.C = Array(3);
            var b = d.y - c.y,
                a = e.z - c.z,
                g = d.x - c.x;
            d = d.z - c.z;
            var n = e.x - c.x;
            c = e.y - c.y;
            this.Oa = {
                x: b * a - d * c,
                y: d * n - g * a,
                z: g * c - b * n
            };
            this.kb = [];
            this.wd = this.visible = !1
        }
        this.S = function(f) {
            function d(a, c, f) {
                var g, k, l = a.ma[0],
                    h = a.Oa,
                    r = h.x,
                    s = h.y,
                    h = h.z,
                    p = Array(n);
                c = c.kb;
                g = c.length;
                for (b = 0; b < g; b++) k = c[b].md, p[k.index] = !0, 0 > r * (k.x - l.x) + s * (k.y - l.y) + h * (k.z - l.z) && e.d(a, k);
                c = f.kb;
                g = c.length;
                for (b = 0; b < g; b++) k =
                    c[b].md, !0 !== p[k.index] && 0 > r * (k.x - l.x) + s * (k.y - l.y) + h * (k.z - l.z) && e.d(a, k)
            }
            var h, b, a, k, n = f.length;
            for (h = 0; h < n; h++) f[h].index = h, f[h].dc = null;
            var q = [],
                p;
            if (0 < (p = function() {
                    function a(b, c, d, f) {
                        var e = (c.y - b.y) * (d.z - b.z) - (c.z - b.z) * (d.y - b.y),
                            g = (c.z - b.z) * (d.x - b.x) - (c.x - b.x) * (d.z - b.z),
                            k = (c.x - b.x) * (d.y - b.y) - (c.y - b.y) * (d.x - b.x);
                        return e * f.x + g * f.y + k * f.z > e * b.x + g * b.y + k * b.z ? new m(b, c, d) : new m(d, c, b)
                    }

                    function b(a, c, d, f) {
                        function e(a, b, c) {
                            a = a.ma;
                            b = a[0] == b ? 0 : a[1] == b ? 1 : 2;
                            return a[(b + 1) % 3] != c ? (b + 2) % 3 : b
                        }
                        c.C[e(c, d, f)] =
                            a;
                        a.C[e(a, f, d)] = c
                    }
                    if (4 > n) return 0;
                    var c = f[0],
                        d = f[1],
                        g = f[2],
                        k = f[3],
                        l = a(c, d, g, k),
                        h = a(c, g, k, d),
                        r = a(c, d, k, g),
                        s = a(d, g, k, c);
                    b(l, h, g, c);
                    b(l, r, c, d);
                    b(l, s, d, g);
                    b(h, r, k, c);
                    b(h, s, g, k);
                    b(r, s, k, d);
                    q.push(l, h, r, s);
                    for (c = 4; c < n; c++)
                        for (d = f[c], g = 0; 4 > g; g++) k = q[g], l = k.ma[0], h = k.Oa, 0 > h.x * (d.x - l.x) + h.y * (d.y - l.y) + h.z * (d.z - l.z) && e.d(k, d);
                    return 4
                }())) {
                for (; p < n;) {
                    a = f[p];
                    if (a.dc) {
                        for (h = a.dc; null !== h;) h.face.visible = !0, h = h.sc;
                        var r, s;
                        h = 0;
                        a: for (; h < q.length; h++)
                            if (k = q[h], !1 === k.visible) {
                                var w = k.C;
                                for (b = 0; 3 > b; b++)
                                    if (!0 === w[b].visible) {
                                        r =
                                            k;
                                        s = b;
                                        break a
                                    }
                            } k = [];
                        var w = [],
                            u = r,
                            y = s;
                        do
                            if (k.push(u), w.push(y), y = (y + 1) % 3, !1 === u.C[y].visible) {
                                do
                                    for (h = u.ma[y], u = u.C[y], b = 0; 3 > b; b++) u.ma[b] == h && (y = b); while (!1 === u.C[y].visible && (u !== r || y !== s))
                            } while (u !== r || y !== s);
                        var x = null,
                            A = null;
                        for (h = 0; h < k.length; h++) {
                            var u = k[h],
                                y = w[h],
                                B = u.C[y],
                                K = u.ma[(y + 1) % 3],
                                C = u.ma[y],
                                H = K.y - a.y,
                                Q = C.z - a.z,
                                O = K.x - a.x,
                                P = K.z - a.z,
                                F = C.x - a.x,
                                T = C.y - a.y,
                                N;
                            0 < c.length ? (N = c.pop(), N.ma[0] = a, N.ma[1] = K, N.ma[2] = C, N.Oa.x = H * Q - P * T, N.Oa.y = P * F - O * Q, N.Oa.z = O * T - H * F, N.kb.length = 0, N.visible = !1, N.wd = !0) :
                                N = {
                                    ma: [a, K, C],
                                    C: Array(3),
                                    Oa: {
                                        x: H * Q - P * T,
                                        y: P * F - O * Q,
                                        z: O * T - H * F
                                    },
                                    kb: [],
                                    visible: !1
                                };
                            q.push(N);
                            u.C[y] = N;
                            N.C[1] = u;
                            null !== A && (A.C[0] = N, N.C[2] = A);
                            A = N;
                            null === x && (x = N);
                            d(N, u, B)
                        }
                        A.C[0] = x;
                        x.C[2] = A;
                        h = [];
                        for (b = 0; b < q.length; b++)
                            if (k = q[b], !0 === k.visible) {
                                w = k.kb;
                                u = w.length;
                                for (a = 0; a < u; a++) y = w[a], x = y.fd, A = y.sc, null !== x && (x.sc = A), null !== A && (A.fd = x), null === x && (y.md.dc = A), g.push(y);
                                k.wd && c.push(k)
                            } else h.push(k);
                        q = h
                    }
                    p++
                }
                for (h = 0; h < q.length; h++) k = q[h], k.wd && c.push(k)
            }
            return {
                Me: q
            }
        };
        e.d = function(c, d) {
            var h;
            0 < g.length ? (h = g.pop(),
                h.face = c, h.md = d, h.sc = null, h.fd = null) : h = new e(c, d);
            c.kb.push(h);
            var b = d.dc;
            null !== b && (b.fd = h);
            h.sc = b;
            d.dc = h
        };
        for (var g = Array(2E3), d = 0; d < g.length; d++) g[d] = new e(null, null);
        for (var c = Array(1E3), d = 0; d < c.length; d++) c[d] = {
            ma: Array(3),
            C: Array(3),
            Oa: {
                x: 0,
                y: 0,
                z: 0
            },
            kb: [],
            visible: !1
        }
    };
    var za = new function() {
        function e(e, d, c, f, l, h, b, a) {
            var k = (e - c) * (h - a) - (d - f) * (l - b);
            return Math.abs(k) < m ? void 0 : {
                x: ((e * f - d * c) * (l - b) - (e - c) * (l * a - h * b)) / k,
                y: ((e * f - d * c) * (h - a) - (d - f) * (l * a - h * b)) / k
            }
        }
        var m = 1E-12;
        this.cb = function(g, d) {
            for (var c = g[0], f = c.x, l = c.y, h = c.x, b = c.y, a = g.length - 1; 0 < a; a--) c = g[a], f = Math.min(f, c.x), l = Math.min(l, c.y), h = Math.max(h, c.x), b = Math.max(b, c.y);
            if (h - f < 3 * d || b - l < 3 * d) c = void 0;
            else {
                a: {
                    c = !0;void 0 == c && (c = !1);f = [];l = g.length;
                    for (h = 0; h <= l; h++) {
                        var b = g[h % l],
                            a = g[(h + 1) % l],
                            k = g[(h + 2) % l],
                            n, q, p;
                        n = a.x -
                            b.x;
                        q = a.y - b.y;
                        p = Math.sqrt(n * n + q * q);
                        var r = d * n / p,
                            s = d * q / p;
                        n = k.x - a.x;
                        q = k.y - a.y;
                        p = Math.sqrt(n * n + q * q);
                        n = d * n / p;
                        q = d * q / p;
                        if (b = e(b.x - s, b.y + r, a.x - s, a.y + r, a.x - q, a.y + n, k.x - q, k.y + n))
                            if (f.push(b), k = f.length, c && 3 <= k && (b = f[k - 3], a = f[k - 2], k = f[k - 1], 0 > (a.x - b.x) * (k.y - b.y) - (k.x - b.x) * (a.y - b.y))) {
                                c = void 0;
                                break a
                            }
                    }
                    f.shift();c = 3 > f.length ? void 0 : f
                }
                if (!c) a: {
                    f = g.slice(0);
                    for (c = 0; c < g.length; c++) {
                        h = g[c % g.length];
                        a = g[(c + 1) % g.length];
                        k = a.x - h.x;
                        l = a.y - h.y;
                        b = Math.sqrt(k * k + l * l);
                        k = d * k / b;
                        b = d * l / b;
                        l = h.x - b;
                        h = h.y + k;
                        b = a.x - b;
                        a = a.y + k;
                        if (0 != f.length) {
                            s =
                                l - b;
                            q = h - a;
                            k = [];
                            n = p = !0;
                            r = void 0;
                            for (r = 0; r < f.length; r++) {
                                var w = s * (h - f[r].y) - (l - f[r].x) * q;
                                w <= m && w >= -m && (w = 0);
                                k.push(w);
                                0 < w && (p = !1);
                                0 > w && (n = !1)
                            }
                            if (p) f = [];
                            else if (!n) {
                                s = [];
                                for (r = 0; r < f.length; r++) q = (r + 1) % f.length, p = k[r], n = k[q], 0 <= p && s.push(f[r]), (0 < p && 0 > n || 0 > p && 0 < n) && s.push(e(f[r].x, f[r].y, f[q].x, f[q].y, l, h, b, a));
                                f = s
                            }
                        }
                        if (3 > f.length) {
                            c = void 0;
                            break a
                        }
                    }
                    c = f
                }
            }
            return c
        };
        return this
    };
    var Aa = new function() {
        function e(e) {
            for (var d = e[0].x, c = e[0].y, f = d, l = c, h = 1; h < e.length; h++) var b = e[h],
                d = Math.min(d, b.x),
                c = Math.min(c, b.y),
                f = Math.max(f, b.x),
                l = Math.max(l, b.y);
            e = f - d;
            l = l - c;
            return [{
                x: d + 2 * e,
                y: c + 2 * l,
                f: 0
            }, {
                x: d + 2 * e,
                y: c - 2 * l,
                f: 0
            }, {
                x: d - 2 * e,
                y: c + 2 * l,
                f: 0
            }]
        }
        var m = 1E-12;
        this.S = function(g, d) {
            function c() {
                for (a = 0; a < p.length; a++) {
                    var b = p[a],
                        c = b.ma,
                        d = c[0],
                        f = c[1],
                        e = c[2],
                        c = d.x,
                        g = d.y,
                        d = d.z,
                        k = f.x,
                        l = f.y,
                        f = f.z,
                        h = e.x,
                        n = e.y,
                        e = e.z,
                        r = c * (l - n) + k * (n - g) + h * (g - l);
                    b.ha = {
                        x: -(g * (f - e) + l * (e - d) + n * (d - f)) / r / 2,
                        y: -(d * (k - h) + f * (h -
                            c) + e * (c - k)) / r / 2
                    }
                }
            }

            function f(b) {
                for (a = 0; a < p.length; a++) {
                    var c = p[a];
                    c.ub = !M.Va(b, c.ha)
                }
            }

            function l(a, b) {
                var c = Array(b.length),
                    d;
                for (d = 0; d < c.length; d++) c[d] = [];
                for (d = 0; d < a.length; d++) {
                    var f = a[d];
                    if (!(0 > f.Oa.z))
                        for (var e = f.C, g = 0; g < e.length; g++) {
                            var k = e[g];
                            if (!(0 > k.Oa.z)) {
                                var l = f.ma,
                                    h = l[(g + 1) % 3].index,
                                    l = l[g].index;
                                2 < h && c[h - 3].push([f, k, 2 < l ? b[l - 3] : null])
                            }
                        }
                }
                return c
            }

            function h(a) {
                var b = [a[0]],
                    c = a[0][0],
                    d = a[0][1],
                    f = a.length,
                    e = 1;
                a: for (; e < f; e++)
                    for (var g = 1; g < f; g++) {
                        var k = a[g];
                        if (null !== k) {
                            if (k[1] === c)
                                if (b.unshift(k),
                                    c = k[0], a[g] = null, b.length === f) break a;
                                else continue;
                            if (k[0] === d && (b.push(k), d = k[1], a[g] = null, b.length === f)) break a
                        }
                    }
                b[0][0] != b[f - 1][1] && b.push([b[f - 1][1], b[0][0]]);
                return b
            }

            function b(a, b, c, d) {
                var f = [],
                    e = [],
                    g = c.length,
                    k, l = b.length,
                    h = 0,
                    n = -1,
                    r = -1,
                    s = -1,
                    p = null,
                    q = d;
                for (d = 0; d < g; d++) {
                    var w = (q + 1) % g,
                        u = c[q][0],
                        E = c[w][0];
                    if (M.d(u.ha, E.ha) > m)
                        if (u.ub && E.ub) {
                            var I = [],
                                J = [];
                            for (k = 0; k < l; k++) {
                                n = (h + 1) % l;
                                if (p = M.ya(b[h], b[n], u.ha, E.ha, !1))
                                    if (J.push(h), 2 === I.push(p)) break;
                                h = n
                            }
                            if (2 === I.length) {
                                n = I[1];
                                p = M.d(u.ha, I[0]);
                                n =
                                    M.d(u.ha, n);
                                u = p < n ? 0 : 1;
                                p = p < n ? 1 : 0;
                                n = J[u]; - 1 === r && (r = n);
                                if (-1 !== s)
                                    for (; n != s;) s = (s + 1) % l, f.push(b[s]), e.push(null);
                                f.push(I[u], I[p]);
                                e.push(c[q][2], null);
                                s = J[p]
                            }
                        } else if (u.ub && !E.ub)
                        for (k = 0; k < l; k++) {
                            n = (h + 1) % l;
                            if (p = M.ya(b[h], b[n], u.ha, E.ha, !1)) {
                                if (-1 !== s)
                                    for (I = s; h != I;) I = (I + 1) % l, f.push(b[I]), e.push(null);
                                f.push(p);
                                e.push(c[q][2]); - 1 === r && (r = h);
                                break
                            }
                            h = n
                        } else if (!u.ub && E.ub)
                            for (k = 0; k < l; k++) {
                                n = (h + 1) % l;
                                if (p = M.ya(b[h], b[n], u.ha, E.ha, !1)) {
                                    f.push(u.ha, p);
                                    e.push(c[q][2], null);
                                    s = h;
                                    break
                                }
                                h = n
                            } else f.push(u.ha), e.push(c[q][2]);
                    q = w
                }
                if (0 == f.length) e = f = null;
                else if (-1 !== s)
                    for (; r != s;) s = (s + 1) % l, f.push(b[s]), e.push(null);
                a.o = f;
                a.C = e
            }
            if (1 === g.length) g[0].o = d.slice(0), g[0].C = [];
            else {
                var a, k;
                k = e(d);
                var n = [],
                    q;
                for (a = 0; a < k.length; a++) q = k[a], n.push({
                    x: q.x,
                    y: q.y,
                    z: q.x * q.x + q.y * q.y - q.f
                });
                for (a = 0; a < g.length; a++) q = g[a], q.o = null, n.push({
                    x: q.x,
                    y: q.y,
                    z: q.x * q.x + q.y * q.y - q.f
                });
                var p = ya.S(n).Me;
                c();
                f(d);
                n = l(p, g);
                for (a = 0; a < g.length; a++)
                    if (q = n[a], 0 !== q.length) {
                        var r = g[a];
                        q = h(q);
                        var s = q.length,
                            w = -1;
                        for (k = 0; k < s; k++) q[k][0].ub && (w = k);
                        if (0 <= w) b(r, d,
                            q, w);
                        else {
                            var w = [],
                                u = [];
                            for (k = 0; k < s; k++) M.d(q[k][0].ha, q[(k + 1) % s][0].ha) > m && (w.push(q[k][0].ha), u.push(q[k][2]));
                            r.o = w;
                            r.C = u
                        }
                        r.o && 3 > r.o.length && (r.o = null, r.C = null)
                    }
            }
        };
        this.Bc = function(g, d) {
            var c, f, l = !1,
                h = g.length;
            for (f = 0; f < h; f++) c = g[f], null === c.o && (l = !0), c.se = c.f;
            if (l) {
                var l = e(d),
                    b = [],
                    a, k;
                f = g.length;
                for (c = 0; c < l.length; c++) a = l[c], b.push({
                    x: a.x,
                    y: a.y,
                    z: a.x * a.x + a.y * a.y
                });
                for (c = 0; c < f; c++) a = g[c], b.push({
                    x: a.x,
                    y: a.y,
                    z: a.x * a.x + a.y * a.y
                });
                a = ya.S(b).Me;
                l = Array(f);
                for (c = 0; c < f; c++) l[c] = {};
                b = a.length;
                for (c = 0; c <
                    b; c++)
                    if (k = a[c], 0 < k.Oa.z) {
                        var n = k.ma,
                            q = n.length;
                        for (k = 0; k < q - 1; k++) {
                            var p = n[k].index - 3,
                                r = n[k + 1].index - 3;
                            0 <= p && 0 <= r && (l[p][r] = !0, l[r][p] = !0)
                        }
                        k = n[0].index - 3;
                        0 <= r && 0 <= k && (l[r][k] = !0, l[k][r] = !0)
                    } for (c = 0; c < f; c++) {
                    k = l[c];
                    a = g[c];
                    var r = Number.MAX_VALUE,
                        b = null,
                        s;
                    for (s in k) k = g[s], n = M.d(a, k), r > n && (r = n, b = k);
                    a.Tj = b;
                    a.xf = Math.sqrt(r)
                }
                for (f = 0; f < h; f++) c = g[f], s = Math.min(Math.sqrt(c.f), 0.95 * c.xf), c.f = s * s;
                this.S(g, d);
                for (f = 0; f < h; f++) c = g[f], c.se !== c.f && 0 < c.xc && (s = Math.min(c.xc, c.se - c.f), c.f += s, c.xc -= s)
            }
        }
    };
    var Ba = new function() {
        this.Eg = function(e) {
            e = e.e;
            for (var m = 0, g = e.length, d = 0; d < g; d++) {
                var c = e[d];
                if (c.o) {
                    var f = c.x,
                        l = c.y;
                    M.k(c.o, c);
                    f = f - c.x;
                    c = l - c.y;
                    c = (0 < f ? f : -f) + (0 < c ? c : -c);
                    m < c && (m = c)
                }
            }
            return m
        };
        this.xa = function(e, m) {
            var g = e.e,
                d, c, f, l;
            switch (m) {
                case "random":
                    return e.e[Math.floor(g.length * Math.random())];
                case "topleft":
                    d = g[0];
                    var h = d.x + d.y;
                    for (l = 1; l < g.length; l++) c = g[l], f = c.x + c.y, f < h && (h = f, d = c);
                    return d;
                case "bottomright":
                    d = g[0];
                    h = d.x + d.y;
                    for (l = 1; l < g.length; l++) c = g[l], f = c.x + c.y, f > h && (h = f, d = c);
                    return d;
                default:
                    d = g[0];
                    f = c = M.d(e, d);
                    for (l = g.length - 1; 1 <= l; l--) h = g[l], c = M.d(e, h), c < f && (f = c, d = h);
                    return d
            }
        };
        this.Ia = function(e, m, g) {
            var d = e.e;
            if (d[0].C) {
                var c = d.length;
                for (e = 0; e < c; e++) d[e].nd = !1, d[e].mc = 0;
                var c = [],
                    f, l;
                l = f = 0;
                c[f++] = m || d[0];
                for (m = m.mc = 0; l < f;)
                    if (d = c[l++], !d.nd && d.C) {
                        g(d, m++, d.mc);
                        d.nd = !0;
                        var h = d.C,
                            b = h.length;
                        for (e = 0; e < b; e++) {
                            var a = h[e];
                            a && !0 !== a.nd && (0 === a.mc && (a.mc = d.mc + 1), c[f++] = a)
                        }
                    }
            } else
                for (e = 0; e < d.length; e++) g(d[e], e, 1)
        }
    };
    var G = function() {
        function e(b, e, k, s, r, p, w, P) {
            var F = D.extend({}, h, b);
            1 > b.lineHeight && (b.lineHeight = 1);
            b = F.fontFamily;
            var T = F.fontStyle + " " + F.fontVariant + " " + F.fontWeight,
                N = F.sb,
                U = F.ad,
                t = T + " " + b;
            F.Qe = t;
            var z = {
                la: !1,
                pc: 0,
                fontSize: 0
            };
            e.save();
            e.font = T + " " + x + "px " + b;
            e.textBaseline = "middle";
            e.textAlign = "center";
            m(e, F);
            k = k.trim();
            u.text = k;
            c(s, r, p, y);
            if (/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(k)) d(u), g(e, u, t), f(F, u, y, U, N, !0, z);
            else if (g(e, u, t), f(F, u, y, U, N, !1,
                    z), !z.la && (w && (d(u), g(e, u, t)), P || w)) P && (z.ic = !0), f(F, u, y, U, U, !0, z);
            if (z.la) {
                var L = "",
                    E = 0,
                    I = Number.MAX_VALUE,
                    J = Number.MIN_VALUE;
                l(F, u, z.pc, z.fontSize, y, z.ic, function(b, c) {
                    0 < L.length && c === a && (L += a);
                    L += b
                }, function(a, b, c, d, f) {
                    d === q && (L += n);
                    e.save();
                    e.translate(p.x, b);
                    a = z.fontSize / x;
                    e.scale(a, a);
                    e.fillText(L, 0, 0);
                    e.restore();
                    L = c;
                    E < f && (E = f);
                    I > b && (I = b);
                    J < b && (J = b)
                });
                z.ea = {
                    x: p.x - E / 2,
                    y: I - z.fontSize / 2,
                    f: E,
                    i: J - I + z.fontSize
                };
                e.restore()
            } else e.clear && e.clear();
            return z
        }

        function m(c, d) {
            var f = d.Qe,
                e = b[f];
            void 0 ===
                e && (e = {}, b[f] = e);
            e[a] = c.measureText(a).width;
            e[k] = c.measureText(k).width
        }

        function g(a, c, d) {
            var f, e = c.text.split(/(\n|[ \f\r\t\v\u2028\u2029]+|\u00ad+|\u200b+)/),
                g = [],
                k = [],
                l = e.length >>> 1;
            for (f = 0; f < l; f++) g.push(e[2 * f]), k.push(e[2 * f + 1]);
            2 * f < e.length && (g.push(e[2 * f]), k.push(void 0));
            d = b[d];
            for (f = 0; f < g.length; f++) e = g[f], l = d[e], void 0 === l && (l = a.measureText(e).width, d[e] = l);
            c.od = g;
            c.mg = k
        }

        function d(b) {
            for (var c = b.text.split(/\s+/), f = [], d = {
                    ".": !0,
                    ",": !0,
                    ";": !0,
                    "?": !0,
                    "!": !0,
                    ":": !0,
                    "\u3002": !0
                }, e = 0; e < c.length; e++) {
                var g =
                    c[e];
                if (3 < g.length) {
                    for (var k = "", k = k + g.charAt(0), k = k + g.charAt(1), l = 2; l < g.length - 2; l++) {
                        var h = g.charAt(l);
                        d[h] || (k += p);
                        k += h
                    }
                    k += p;
                    k += g.charAt(g.length - 2);
                    k += g.charAt(g.length - 1);
                    f.push(k)
                } else f.push(g)
            }
            b.text = f.join(a)
        }

        function c(a, b, c, f) {
            for (var d, e, g = 0; g < a.length; g++) a[g].y === b.y && (void 0 === d ? d = g : e = g);
            void 0 === e && (e = d);
            d !== e && a[e].x < a[d].x && (g = d, d = e, e = g);
            f.o = a;
            f.q = b;
            f.yd = c;
            f.vf = d;
            f.wf = e
        }

        function f(a, b, c, d, f, e, g) {
            var k = a.lineHeight,
                h = Math.max(a.eb, 0.001),
                n = a.tb,
                s = b.od,
                r = c.yd,
                p = c.q,
                q = void 0,
                m = void 0;
            switch (a.verticalAlign) {
                case "top":
                    r = p.y + p.i - r.y;
                    break;
                case "bottom":
                    r = r.y - p.y;
                    break;
                default:
                    r = 2 * Math.min(r.y - p.y, p.y + p.i - r.y)
            }
            n = Math.min(r, n * c.q.i);
            if (0 >= n) g.la = !1;
            else {
                r = d;
                f = Math.min(f, n);
                p = Math.min(1, n / Math.max(20, b.od.length));
                do {
                    var w = (r + f) / 2,
                        u = Math.min(s.length, Math.floor((n + w * (k - 1 - 2 * h)) / (w * k))),
                        y = void 0;
                    if (0 < u) {
                        var x = 1,
                            Y = u;
                        do {
                            var Z = Math.floor((x + Y) / 2);
                            if (l(a, b, Z, w, c, e && w === d && Z === u, null, null)) {
                                if (Y = q = y = Z, x === Y) break
                            } else if (x = Z + 1, x > Y) break
                        } while (1)
                    }
                    void 0 !== y ? r = m = w : f = w
                } while (f - r > p);
                void 0 ===
                    m ? (g.la = !1, g.fontSize = 0) : (g.la = !0, g.fontSize = m, g.pc = q, g.ic = e && w === r)
            }
        }

        function l(c, f, d, e, g, l, h, n) {
            var p = c.pb,
                q = e * (c.lineHeight - 1),
                m = c.verticalAlign,
                u = Math.max(c.eb, 0.001);
            c = b[c.Qe];
            var y = f.od;
            f = f.mg;
            var z = g.o,
                L = g.yd,
                E = g.vf,
                I = g.wf,
                J;
            switch (m) {
                case "top":
                    g = L.y + e / 2 + e * u;
                    J = 1;
                    break;
                case "bottom":
                    g = L.y - (e * d + q * (d - 1)) + e / 2 - e * u;
                    J = -1;
                    break;
                default:
                    g = L.y - (e * (d - 1) / 2 + q * (d - 1) / 2), J = 1
            }
            m = g;
            for (u = 0; u < d; u++) r[2 * u] = g - e / 2, r[2 * u + 1] = g + e / 2, g += J * e, g += J * q;
            for (; s.length < r.length;) s.push(Array(2));
            u = r;
            g = 2 * d;
            J = s;
            for (var R = z.length,
                    Y = E, E = (E - 1 + R) % R, Z = I, I = (I + 1) % R, W = 0; W < g;) {
                for (var ea = u[W], aa = z[E]; aa.y < ea;) Y = E, E = (E - 1 + R) % R, aa = z[E];
                for (var ca = z[I]; ca.y < ea;) Z = I, I = (I + 1) % R, ca = z[I];
                var ma = z[Y],
                    na = z[Z],
                    ca = na.x + (ca.x - na.x) * (ea - na.y) / (ca.y - na.y);
                J[W][0] = ma.x + (aa.x - ma.x) * (ea - ma.y) / (aa.y - ma.y);
                J[W][1] = ca;
                W++
            }
            for (u = 0; u < d; u++) z = 2 * u, g = L.x, J = g - s[z][0], R = s[z][1] - g, J = J < R ? J : R, R = g - s[z + 1][0], z = s[z + 1][1] - g, z = R < z ? R : z, w[u] = 2 * (J < z ? J : z) - p * e;
            Y = c[a] * e / x;
            J = c[k] * e / x;
            p = 0;
            E = w[p];
            L = 0;
            z = void 0;
            for (u = 0; u < y.length; u++) {
                g = y[u];
                Z = f[u];
                R = c[g] * e / x;
                if (L + R < E && y.length -
                    u >= d - p && "\n" != z) L += R, " " === Z && (L += Y), h && h(g, z);
                else {
                    if (R > E && (p !== d - 1 || !l)) return !1;
                    if (p + 1 >= d) {
                        if (l) {
                            d = E - L - J;
                            if (d > J || R > J) d = Math.floor(g.length * d / R), 0 < d && h && h(g.substring(0, d), z);
                            h && h(k, void 0);
                            n && n(p, m, g, z, L);
                            return !0
                        }
                        return !1
                    }
                    p++;
                    n && n(p, m, g, z, L);
                    m += e;
                    m += q;
                    E = w[p];
                    L = R;
                    " " === Z && (L += Y);
                    if (R > E && (p !== d || !l)) return !1
                }
                z = Z
            }
            n && n(p, m, void 0, void 0, L);
            return !0
        }
        var h = {
                sb: 72,
                ad: 0,
                lineHeight: 1.05,
                pb: 1,
                eb: 0.5,
                tb: 0.9,
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "normal",
                fontVariant: "normal",
                verticalAlign: "center"
            },
            b = {},
            a = " ",
            k = "\u2026",
            n = "\u2010",
            q = "\u00ad",
            p = "\u200b",
            r = [],
            s = [],
            w = [],
            u = {
                text: "",
                od: void 0,
                mg: void 0
            },
            y = {
                o: void 0,
                q: void 0,
                yd: void 0,
                vf: 0,
                wf: 0
            },
            x = 100;
        return {
            Oe: e,
            Ae: function(a, b, c, d, f, g, k, l, h, n, r, s) {
                var p, q = 0,
                    m = 0;
                c = c.toString().trim();
                !s && h.result && c === h.tg && Math.abs(n - h.we) / n <= r && (p = h.result, p.la && (q = g.x - h.Ag, m = g.y - h.Bg, r = h.ld, b.save(), b.translate(q, m), r.Ua(b), b.restore()));
                p || (r = h.ld, r.clear(), p = e(a, r, c, d, f, g, k, l), p.la && r.Ua(b), h.we = n, h.Ag = g.x, h.Bg = g.y, h.result = p, h.tg = c);
                return p.la ? {
                    la: !0,
                    pc: p.pc,
                    fontSize: p.fontSize,
                    ea: {
                        x: p.ea.x + q,
                        y: p.ea.y + m,
                        f: p.ea.f,
                        i: p.ea.i
                    },
                    ic: p.ic
                } : {
                    la: !1
                }
            },
            Ci: function() {
                return {
                    we: 0,
                    Ag: 0,
                    Bg: 0,
                    result: void 0,
                    ld: new ga,
                    tg: void 0
                }
            },
            Da: h
        }
    }();
    var Ca = new function() {
        function e(d, c) {
            return function(f, e, h, b) {
                function a(b, d, f, e, l) {
                    if (0 != b.length) {
                        var n = b.shift(),
                            r = g(n),
                            p, s, q, m;
                        if (c(e, l)) {
                            p = d;
                            q = r / e;
                            do {
                                r = n.shift();
                                s = r.yc;
                                m = s / q;
                                s = r;
                                var P = f,
                                    F = q;
                                s.x = p + m / 2;
                                s.y = P + F / 2;
                                h && k(r, p, f, m, q);
                                p += m
                            } while (0 < n.length);
                            return a(b, d, f + q, e, l - q)
                        }
                        p = f;
                        m = r / l;
                        do r = n.shift(), s = r.yc, q = s / m, s = r, P = p, F = q, s.x = d + m / 2, s.y = P + F / 2, h && k(r, d, p, m, q), p += q; while (0 < n.length);
                        return a(b, d + m, f, e - m, l)
                    }
                }

                function k(a, b, c, d, f) {
                    a.o = [{
                        x: b,
                        y: c
                    }, {
                        x: b + d,
                        y: c
                    }, {
                        x: b + d,
                        y: c + f
                    }, {
                        x: b,
                        y: c + f
                    }]
                }
                var n = e.x,
                    q =
                    e.y,
                    p = e.f;
                e = e.i;
                if (0 != f.length)
                    if (1 == f.length) f[0].x = n + p / 2, f[0].y = q + e / 2, f[0].Hd = 0, h && k(f[0], n, q, p, e);
                    else {
                        f = f.slice(0);
                        for (var r = 0, s = 0; s < f.length; s++) r += f[s].T;
                        r = p * e / r;
                        for (s = 0; s < f.length; s++) f[s].yc = f[s].T * r;
                        b = d(f, p, e, [
                            [f.shift()]
                        ], b);
                        a(b, n, q, p, e)
                    }
            }
        }

        function m(d, c, f, e) {
            function h(b) {
                return Math.max(Math.pow(k * b / a, f), Math.pow(a / (k * b), e))
            }
            var b = g(d),
                a = b * b,
                k = c * c;
            c = h(d[0].yc);
            for (b = 1; b < d.length; b++) c = Math.max(c, h(d[b].yc));
            return c
        }

        function g(d) {
            for (var c = 0, f = 0; f < d.length; f++) c += d[f].yc;
            return c
        }
        this.ve =
            e(function(d, c, f, e, h) {
                h = Math.pow(2, h);
                for (var b = 1 / h, a = c < f; 0 < d.length;) {
                    var k = e[e.length - 1],
                        n = d.shift(),
                        q = a ? c : f,
                        p = a ? h : b,
                        r = a ? b : h,
                        s = m(k, q, p, r);
                    k.push(n);
                    q = m(k, q, p, r);
                    s < q && (k.pop(), e.push([n]), a ? f -= g(k) / c : c -= g(k) / f, a = c < f)
                }
                return e
            }, function(d, c) {
                return d < c
            });
        this.ac = e(function(d, c, f, e, g) {
            function b(b) {
                if (1 < e.length) {
                    for (var d = e[e.length - 1], f = e[e.length - 2].slice(0), g = 0; g < d.length; g++) f.push(d[g]);
                    m(f, c, a, k) < b && e.splice(-2, 2, f)
                }
            }
            for (var a = Math.pow(2, g), k = 1 / a; 0 < d.length;) {
                f = e[e.length - 1];
                g = m(f, c, a, k);
                if (0 ==
                    d.length) return;
                var n = d.shift();
                f.push(n);
                var q = m(f, c, a, k);
                g < q && (f.pop(), b(g), e.push([n]))
            }
            b(m(e[e.length - 1], c, a, k));
            return e
        }, function() {
            return !0
        })
    };

    function Da(e) {
        var m = {},
            g = e.Xd,
            d;
        e.c.j("model:loaded", function(c) {
            d = c
        });
        this.H = function() {
            e.c.p("api:initialized", this)
        };
        this.Fc = function(c, d, e, h) {
            this.rd(m, d);
            this.sd(m, d);
            this.qd(m, d, !1);
            h && h(m);
            c(g, m, e)
        };
        this.xd = function(c, f, e, g, b, a, k) {
            if (c) {
                for (c = f.length - 1; 0 <= c; c--) {
                    var n = f[c],
                        q = D.extend({
                            group: n.group
                        }, b);
                    q[e] = g(n);
                    a(q)
                }
                0 < f.length && k(D.extend({
                    groups: $.Oc(d, g).map(function(a) {
                        return a.group
                    })
                }, b))
            }
        };
        this.sd = function(c, d) {
            c.selected = d.selected;
            c.hovered = d.Gb;
            c.open = d.open;
            c.openness = d.Ob;
            c.exposed =
                d.U;
            c.exposure = d.ka;
            c.transitionProgress = d.ta;
            c.revealed = !d.ca.Na();
            c.browseable = d.Qa ? d.O : void 0;
            c.visible = d.$;
            c.labelDrawn = d.qa && d.qa.la;
            return c
        };
        this.rd = function(c, d) {
            var e = d.parent;
            c.group = d.group;
            c.parent = e && e.group;
            c.weightNormalized = d.yg;
            c.level = d.L - 1;
            c.siblingCount = e && e.e.length;
            c.hasChildren = !d.empty();
            c.index = d.index;
            c.indexByWeight = d.Hd;
            c.description = d.description;
            c.attribution = d.Ra;
            return c
        };
        this.qd = function(c, d, e) {
            c.polygonCenterX = d.M.x;
            c.polygonCenterY = d.M.y;
            c.polygonArea = d.M.ja;
            c.boxLeft =
                d.q.x;
            c.boxTop = d.q.y;
            c.boxWidth = d.q.f;
            c.boxHeight = d.q.i;
            if (d.qa && d.qa.la) {
                var g = d.qa.ea;
                c.labelBoxLeft = g.x;
                c.labelBoxTop = g.y;
                c.labelBoxWidth = g.f;
                c.labelBoxHeight = g.i;
                c.labelFontSize = d.qa.fontSize
            }
            e && d.ba && (c.polygon = d.ba.map(function(b) {
                return {
                    x: b.x,
                    y: b.y
                }
            }), c.neighbors = d.C && d.C.map(function(b) {
                return b && b.group
            }));
            return c
        }
    };
    var la = new function() {
        var e = window.console;
        this.Pa = function(e) {
            throw "FoamTree: " + e;
        };
        this.info = function(m) {
            e.info("FoamTree: " + m)
        };
        this.warn = function(m) {
            e.warn("FoamTree: " + m)
        }
    };

    function Ea(e) {
        function m(a, b) {
            a.e = [];
            a.Ka = !0;
            var d = c(b),
                f = 0;
            if (("flattened" === e.yb || "always" === e.dh && a.group && a.group.description) && 0 < b.length && 0 < a.L) {
                var k = b.reduce(function(a, b) {
                        return a + D.B(b.weight, 1)
                    }, 0),
                    h = g(a.group, !1);
                h.description = !0;
                h.T = k * e.gc;
                h.index = f++;
                h.parent = a;
                h.L = a.L + 1;
                h.id = h.id + "_d";
                a.e.push(h)
            }
            for (k = 0; k < b.length; k++) {
                var l = b[k],
                    h = D.B(l.weight, 1);
                if (0 >= h)
                    if (e.yj) h = 0.9 * d;
                    else continue;
                l = g(l, !0);
                l.T = h;
                l.index = f;
                l.parent = a;
                l.L = a.L + 1;
                a.e.push(l);
                f++
            }
        }

        function g(a, b) {
            var c = new Fa;
            d(a);
            c.id = a.__id;
            c.group = a;
            b && (n[a.__id] = c);
            return c
        }

        function d(a) {
            D.K(a, "__id") || (Object.defineProperty(a, "__id", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: k
            }), k++)
        }

        function c(a) {
            for (var b = Number.MAX_VALUE, c = 0; c < a.length; c++) {
                var d = a[c].weight;
                0 < d && b > d && (b = d)
            }
            b === Number.MAX_VALUE && (b = 1);
            return b
        }

        function f(a) {
            if (!a.empty()) {
                a = a.e;
                var b = 0,
                    c;
                for (c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].T;
                    b < d && (b = d)
                }
                for (c = a.length - 1; 0 <= c; c--) d = a[c], d.yg = d.T / b
            }
        }

        function l(a) {
            if (!a.empty()) {
                a = a.e.slice(0).sort(function(a, b) {
                    return a.T <
                        b.T ? 1 : a.T > b.T ? -1 : a.index - b.index
                });
                for (var b = 0; b < a.length; b++) a[b].Hd = b
            }
        }

        function h() {
            for (var b = a.e.reduce(function(a, b) {
                    return a + b.T
                }, 0), c = 0; c < a.e.length; c++) {
                var d = a.e[c];
                d.Ra && (d.T = Math.max(0, e.Vg) * b)
            }
        }
        var b = this,
            a = new Fa,
            k, n, q, p, r;
        this.H = function() {
            return a
        };
        this.S = function(a) {
            var b = a.group.groups,
                c = e.ui;
            return !a.e && !a.description && b && 0 < b.length && r + b.length <= c ? (r += b.length, m(a, b), f(a), l(a), !0) : !1
        };
        this.Z = function(b) {
            function c(a) {
                var b = a.groups;
                if (b)
                    for (var e = 0; e < b.length; e++) {
                        var f = b[e];
                        d(f);
                        var g = f.__id;
                        n[g] = null;
                        p[g] = a;
                        g = f.id;
                        D.V(g) || (q[g] = f);
                        c(f)
                    }
            }

            function u(a, b) {
                if (!a) return b;
                var c = Math.max(b, a.__id || 0),
                    d = a.groups;
                if (d && 0 < d.length)
                    for (var e = d.length - 1; 0 <= e; e--) c = u(d[e], c);
                return c
            }
            a.group = b;
            a.Ba = !1;
            a.O = !1;
            a.Qa = !1;
            a.open = !0;
            a.Ob = 1;
            k = u(b, 0) + 1;
            n = {};
            q = {};
            p = {};
            r = 0;
            b && (d(b), n[b.__id] = a, D.V(b.id) || (q[b.id] = b), c(b));
            m(a, b && b.groups || []);
            (function(a) {
                if (!a.empty() && (e.ye || e.Db)) {
                    var b = g({
                        attribution: !0
                    });
                    b.index = a.e.length;
                    e.Db || (b.group.label = e.ye);
                    b.parent = a;
                    b.L = a.L + 1;
                    b.Ra = !0;
                    a.e.push(b)
                }
            })(a);
            f(a);
            h();
            l(a)
        };
        this.update = function(b) {
            b.forEach(function(b) {
                $.Ea(b, function(a) {
                    if (!a.empty()) {
                        a = a.e;
                        for (var b = c(a.map(function(a) {
                                return a.group
                            })), d = 0; d < a.length; d++) {
                            var e = a[d];
                            e.T = 0 < e.group.weight ? e.group.weight : 0.9 * b
                        }
                    }
                });
                f(b);
                b === a && h();
                l(b)
            })
        };
        this.k = function(c) {
            return function() {
                if (D.V(c) || D.pf(c)) return [];
                if (Array.isArray(c)) return c.map(b.d, b);
                if (D.Ib(c)) {
                    if (D.K(c, "__id")) return [b.d(c)];
                    if (D.K(c, "all")) {
                        var d = [];
                        $.F(a, function(a) {
                            d.push(a)
                        });
                        return d
                    }
                    if (D.K(c, "groups")) return b.k(c.groups)
                }
                return [b.d(c)]
            }().filter(function(a) {
                return void 0 !==
                    a
            })
        };
        this.d = function(a) {
            if (D.Ib(a) && D.K(a, "__id")) {
                if (a = a.__id, D.K(n, a)) {
                    if (null === n[a]) {
                        for (var b = p[a], c = []; b;) {
                            b = b.__id;
                            c.push(b);
                            if (n[b]) break;
                            b = p[b]
                        }
                        for (b = c.length - 1; 0 <= b; b--) this.S(n[c[b]])
                    }
                    return n[a]
                }
            } else if (D.K(q, a)) return this.d(q[a])
        };
        this.A = function(a, c, d) {
            return {
                e: b.k(a),
                Ha: D.B(a && a[c], !0),
                Ga: D.B(a && a.keepPrevious, d)
            }
        }
    }

    function Ga(e, m, g) {
        var d = {};
        m.Ga && $.F(e, function(c) {
            g(c) && (d[c.id] = c)
        });
        e = m.e;
        m = m.Ha;
        for (var c = e.length - 1; 0 <= c; c--) {
            var f = e[c];
            d[f.id] = m ? f : void 0
        }
        var l = [];
        D.Fa(d, function(c) {
            void 0 !== c && l.push(c)
        });
        return l
    };

    function Ha(e) {
        function m(a, b) {
            var c = a.ka;
            b.opacity = 1;
            b.Ja = 1;
            b.ua = 0 > c ? 1 - p.gi / 100 * c : 1;
            b.va = 0 > c ? 1 - p.hi / 100 * c : 1;
            b.fa = 0 > c ? 1 + 0.5 * c : 1
        }

        function g(a) {
            a = a.ka;
            return Math.max(0.001, 0 === a ? 1 : 1 + a * (p.Xa - 1))
        }

        function d(a, b) {
            for (var c = a.reduce(function(a, b) {
                    a[b.id] = b;
                    return a
                }, {}), d = a.length - 1; 0 <= d; d--) $.F(a[d], function(a) {
                c[a.id] = void 0
            });
            var e = [];
            D.Fa(c, function(a) {
                a && $.Je(a, function(a) {
                    a.open || e.push(a)
                })
            });
            var f = [];
            D.Fa(c, function(a) {
                a && a.open && f.push(a)
            });
            d = [];
            0 !== e.length && d.push(x.Nb({
                e: e,
                Ha: !0,
                Ga: !0
            }, b, !0));
            return pa(d)
        }

        function c(c, d, g, n) {
            var q = h();
            if (0 === c.length && !q) return (new V).J().N();
            var m = c.reduce(function(a, b) {
                    a[b.id] = !0;
                    return a
                }, {}),
                s = [];
            c = [];
            if (A.reduce(function(a, b) {
                    return a || m[b.id] && (!b.U || 1 !== b.ka) || !m[b.id] && !b.parent.U && (b.U || -1 !== b.ka)
                }, !1)) {
                var x = [],
                    C = {};
                A.forEach(function(b) {
                    m[b.id] && (b.U || s.push(b), b.U = !0, $.Ea(b, function(b) {
                        x.push(a(b, 1));
                        C[b.id] = !0
                    }))
                });
                0 < x.length ? ($.F(r, function(b) {
                        m[b.id] || (b.U && s.push(b), b.U = !1);
                        C[b.id] || x.push(a(b, -1))
                    }), c.push(y.D.m({}).Za(x).call(k).bb()),
                    f(m), c.push(l(q)), g && (u.vc(B, p.Sc, p.Wa, X.oa(p.kc)), u.Tb())) : (c.push(b(g)), d && $.F(r, function(a) {
                    a.U && s.push(a)
                }))
            }
            return pa(c).P(function() {
                w.xd(d, s, "exposed", function(a) {
                    return a.U
                }, {
                    indirect: n
                }, e.options.Gf, e.options.Ff)
            })
        }

        function f(a) {
            A.reduce(n(!0, void 0, function(b) {
                return b.U || a[b.id]
            }), q(B));
            B.x -= B.f * (p.Xa - 1) / 2;
            B.y -= B.i * (p.Xa - 1) / 2;
            B.f *= p.Xa;
            B.i *= p.Xa
        }

        function l(a) {
            if (a || !u.Ud()) return y.D.m(s).ia({
                duration: 0.7 * p.Wa,
                G: {
                    x: {
                        end: B.x + B.f / 2,
                        R: X.oa(p.kc)
                    },
                    y: {
                        end: B.y + B.i / 2,
                        R: X.oa(p.kc)
                    }
                },
                da: function() {
                    e.c.p("foamtree:dirty",
                        !0)
                }
            }).bb();
            s.x = B.x + B.f / 2;
            s.y = B.y + B.i / 2;
            return (new V).J().N()
        }

        function h() {
            return !!A && A.reduce(function(a, b) {
                return a || 0 !== b.ka
            }, !1)
        }

        function b(b) {
            var c = [],
                d = [];
            $.F(r, function(b) {
                0 !== b.ka && d.push(a(b, 0, function() {
                    this.U = !1
                }))
            });
            c.push(y.D.m({}).Za(d).bb());
            u.content(0, 0, K, C);
            b && (c.push(u.reset(p.Wa, X.oa(p.kc))), u.Tb());
            return pa(c)
        }

        function a(a, b, c) {
            var d = y.D.m(a);
            0 === a.ka && 0 !== b && d.call(function() {
                this.Ec(H);
                this.Bb(m)
            });
            d.ia({
                duration: p.Wa,
                G: {
                    ka: {
                        end: b,
                        R: X.oa(p.kc)
                    }
                },
                da: function() {
                    r.I = !0;
                    r.Ma = !0;
                    e.c.p("foamtree:dirty", !0)
                }
            });
            0 === b && d.call(function() {
                this.Qd();
                this.qc();
                this.hd(H);
                this.gd(m)
            });
            return d.call(c).wa()
        }

        function k() {
            var a = r.e.reduce(n(!1, H.Xb, void 0), q({})).ea,
                b = p.Sc,
                c = Math.min(a.x, B.x - B.f * b),
                d = Math.max(a.x + a.f, B.x + B.f * (1 + b)),
                e = Math.min(a.y, B.y - B.i * b),
                a = Math.max(a.y + a.i, B.y + B.i * (1 + b));
            u.content(c, e, d - c, a - e)
        }

        function n(a, b, c) {
            var d = {};
            return function(e, f) {
                if (!c || c(f)) {
                    for (var g = a ? f.ba || f.o : f.o, k, h = g.length - 1; 0 <= h; h--) k = void 0 !== b ? b(f, g[h], d) : g[h], e.bd = Math.min(e.bd, k.x), e.Rd = Math.max(e.Rd,
                        k.x), e.cd = Math.min(e.cd, k.y), e.Sd = Math.max(e.Sd, k.y);
                    e.ea.x = e.bd;
                    e.ea.y = e.cd;
                    e.ea.f = e.Rd - e.bd;
                    e.ea.i = e.Sd - e.cd
                }
                return e
            }
        }

        function q(a) {
            return {
                bd: Number.MAX_VALUE,
                Rd: Number.MIN_VALUE,
                cd: Number.MAX_VALUE,
                Sd: Number.MIN_VALUE,
                ea: a
            }
        }
        var p = e.options,
            r, s, w, u, y, x, A, B, K, C, H = {
                tf: function(a, b) {
                    b.scale = g(a);
                    return !1
                },
                Wb: function(a, b) {
                    var c = g(a),
                        d = s.x,
                        e = s.y;
                    b.translate(d, e);
                    b.scale(c, c);
                    b.translate(-d, -e)
                },
                Yb: function(a, b, c) {
                    a = g(a);
                    var d = s.x,
                        e = s.y;
                    c.x = (b.x - d) / a + d;
                    c.y = (b.y - e) / a + e
                },
                Xb: function(a, b, c) {
                    a = g(a);
                    var d =
                        s.x,
                        e = s.y;
                    c.x = (b.x - d) * a + d;
                    c.y = (b.y - e) * a + e;
                    return c
                }
            };
        e.c.j("stage:initialized", function(a, b, c, d) {
            s = {
                x: c / 2,
                y: d / 2
            };
            K = c;
            C = d;
            B = {
                x: 0,
                y: 0,
                f: K,
                i: C
            }
        });
        e.c.j("stage:resized", function(a, b, c, d) {
            s.x *= c / a;
            s.y *= d / b;
            K = c;
            C = d
        });
        e.c.j("api:initialized", function(a) {
            w = a
        });
        e.c.j("zoom:initialized", function(a) {
            u = a
        });
        e.c.j("model:loaded", function(a, b) {
            r = a;
            A = b
        });
        e.c.j("model:childrenAttached", function(a) {
            A = a
        });
        e.c.j("timeline:initialized", function(a) {
            y = a
        });
        e.c.j("openclose:initialized", function(a) {
            x = a
        });
        var Q = ["groupExposureScale",
            "groupUnexposureScale", "groupExposureZoomMargin"
        ];
        e.c.j("options:changed", function(a) {
            D.ob(a, Q) && h() && (f({}), u.Fj(B, p.Sc), u.Tb())
        });
        this.H = function() {
            e.c.p("expose:initialized", this)
        };
        this.jc = function(a, b, e, f) {
            var g = a.e.reduce(function(a, b) {
                    for (var c = b; c = c.parent;) a[c.id] = !0;
                    return a
                }, {}),
                k = Ga(r, a, function(a) {
                    return a.U && !a.open && !g[a.id]
                }),
                h = new V;
            d(k, b).P(function() {
                c(k.filter(function(a) {
                    return a.o && a.ba
                }), b, e, f).P(h.J)
            });
            return h.N()
        }
    };

    function Ia(e) {
        function m(b) {
            function a(a, b) {
                var c = Math.min(1, Math.max(0, a.ta));
                b.opacity = c;
                b.ua = 1;
                b.va = c;
                b.Ja = c;
                b.fa = a.Kb
            }
            var c = e.options,
                g = c.tj,
                q = c.uj,
                p = c.qj,
                r = c.rj,
                m = c.sj,
                w = c.ie,
                u = g + q + p + r + m,
                y = 0 < u ? w / u : 0,
                x = [];
            h.Zb(c.jg, c.ig, c.kg, c.lg, c.hg);
            if (0 === y && b.e && b.O) {
                w = b.e;
                for (u = 0; u < w.length; u++) {
                    var A = w[u];
                    A.ta = 1;
                    A.Kb = 1;
                    A.Bb(a);
                    A.qc();
                    A.gd(a)
                }
                b.I = !0;
                e.c.p("foamtree:dirty", 0 < y);
                return (new V).J().N()
            }
            if (b.e && b.O) {
                Ba.Ia(b, Ba.xa(b, e.options.ke), function(b, f, u) {
                    b.Ec(h);
                    b.Bb(a);
                    u = "groups" === e.options.je ? u : f;
                    f = d.D.m(b).fb(u * y * g).ia({
                        duration: y * q,
                        G: {
                            ta: {
                                end: 1,
                                R: X.oa(c.pj)
                            }
                        },
                        da: function() {
                            this.I = !0;
                            e.c.p("foamtree:dirty", 0 < y)
                        }
                    }).wa();
                    u = d.D.m(b).fb(l ? y * (p + u * r) : 0).ia({
                        duration: l ? y * m : 0,
                        G: {
                            Kb: {
                                end: 1,
                                R: X.Mb
                            }
                        },
                        da: function() {
                            this.I = !0;
                            e.c.p("foamtree:dirty", 0 < y)
                        }
                    }).wa();
                    b = d.D.m(b).Za([f, u]).re().jb(function() {
                        this.Qd();
                        this.qc();
                        this.hd(h);
                        this.gd(a)
                    }).wa();
                    x.push(b)
                });
                f.d();
                var B = new V;
                d.D.m({}).Za(x).call(function() {
                    f.k();
                    B.J()
                }).start();
                return B.N()
            }
            return (new V).J().N()
        }
        var g, d, c = [],
            f = new qa(D.sa);
        e.c.j("stage:initialized",
            function() {});
        e.c.j("stage:resized", function() {});
        e.c.j("stage:newLayer", function(b, a) {
            c.push(a)
        });
        e.c.j("model:loaded", function(b) {
            g = b;
            f.clear()
        });
        e.c.j("zoom:initialized", function() {});
        e.c.j("timeline:initialized", function(b) {
            d = b
        });
        var l = !1;
        e.c.j("render:renderers:resolved", function(b) {
            l = b.labelPlainFill || !1
        });
        var h = new function() {
            var b = 0,
                a = 0,
                c = 0,
                d = 0,
                e = 0,
                f = 0;
            this.Zb = function(g, h, l, m, y) {
                b = 1 + h;
                a = 1 - b;
                c = l;
                d = m;
                e = y;
                f = g
            };
            this.tf = function(f, g) {
                g.scale = b + a * f.ta;
                return 0 !== e || 0 !== c || 0 !== d
            };
            this.Wb = function(g,
                h) {
                var l = b + a * g.ta,
                    m = g.parent,
                    y = f * g.x + (1 - f) * m.x,
                    x = f * g.y + (1 - f) * m.y;
                h.translate(y, x);
                h.scale(l, l);
                l = 1 - g.ta;
                h.rotate(e * Math.PI * l);
                h.translate(-y, -x);
                h.translate(m.q.f * c * l, m.q.i * d * l)
            };
            this.Yb = function(e, g, h) {
                var l = b + a * e.ta,
                    m = f * e.x + (1 - f) * e.parent.x,
                    q = f * e.y + (1 - f) * e.parent.y,
                    A = 1 - e.ta;
                e = e.parent;
                h.x = (g.x - m) / l + m - e.q.f * c * A;
                h.y = (g.y - q) / l + q - e.q.i * d * A
            };
            this.Xb = function(e, g, h) {
                var l = b + a * e.ta,
                    m = f * e.x + (1 - f) * e.parent.x,
                    q = f * e.y + (1 - f) * e.parent.y,
                    A = 1 - e.ta;
                e = e.parent;
                h.x = (g.x - m) * l + m - e.q.f * c * A;
                h.y = (g.y - q) * l + q - e.q.i * d * A
            }
        };
        this.H = function() {};
        this.k = function() {
            function b(a, b) {
                var c = Math.min(1, Math.max(0, a.ta));
                b.opacity = c;
                b.ua = 1;
                b.va = c;
                b.Ja = c;
                b.fa = a.Kb
            }

            function a(a, b) {
                var c = Math.min(1, Math.max(0, a.be));
                b.opacity = c;
                b.Ja = c;
                b.ua = 1;
                b.va = 1;
                b.fa = a.Kb
            }
            var c = e.options,
                n = c.ae,
                m = c.Mi,
                p = c.Ni,
                r = c.Oi,
                s = c.Ii,
                w = c.Ji,
                u = c.Ki,
                y = c.Ei,
                x = c.Fi,
                A = c.Gi,
                B = s + w + u + y + x + A + m + p + r,
                K = 0 < B ? n / B : 0,
                C = [];
            f.A() ? h.Zb(c.Si, c.Qi, c.Ti, c.Ui, c.Pi) : h.Zb(c.jg, c.ig, c.kg, c.lg, c.hg);
            Ba.Ia(g, Ba.xa(g, e.options.Ri), function(f, g, n) {
                var B = "groups" === e.options.Li ? n : g;
                C.push(d.D.m(f).call(function() {
                    this.Bb(b)
                }).fb(l ?
                    K * (s + B * w) : 0).ia({
                    duration: l ? K * u : 0,
                    G: {
                        Kb: {
                            end: 0,
                            R: X.Mb
                        }
                    },
                    da: function() {
                        this.I = !0;
                        e.c.p("foamtree:dirty", !0)
                    }
                }).wa());
                $.F(f, function(b) {
                    C.push(d.D.m(b).call(function() {
                        this.Ec(h);
                        this.Bb(a)
                    }).fb(K * (y + x * B)).ia({
                        duration: K * A,
                        G: {
                            be: {
                                end: 0,
                                R: X.Mb
                            }
                        },
                        da: function() {
                            this.I = !0;
                            e.c.p("foamtree:dirty", !0)
                        }
                    }).jb(function() {
                        this.selected = !1;
                        this.hd(h)
                    }).wa())
                });
                C.push(d.D.m(f).call(function() {
                    this.Ec(h)
                }).fb(K * (m + p * B)).ia({
                    duration: K * r,
                    G: {
                        ta: {
                            end: 0,
                            R: X.oa(c.Hi)
                        }
                    },
                    da: function() {
                        this.I = !0;
                        e.c.p("foamtree:dirty", !0)
                    }
                }).jb(function() {
                    this.selected = !1;
                    this.hd(h)
                }).wa())
            });
            return d.D.m({}).Za(C).bb()
        };
        this.d = function(b) {
            return m(b)
        }
    };

    function Ja(e) {
        function m(b, a) {
            var c = [];
            $.F(l, function(a) {
                if (a.e) {
                    var d = D.K(b, a.id);
                    a.open !== d && (d || a.U || $.F(a, function(b) {
                        if (b.U) return c.push(a), !1
                    }))
                }
            });
            if (0 === c.length) return (new V).J().N();
            var d;
            for (d = c.length - 1; 0 <= d; d--) c[d].open = !1;
            var e = f.jc({
                e: c,
                Ha: !0,
                Ga: !0
            }, a, !0, !0);
            for (d = c.length - 1; 0 <= d; d--) c[d].open = !0;
            return e
        }

        function g(b, a, f) {
            function g(a, b) {
                a.Bb(m);
                var f = c.D.m(a).ia({
                    duration: e.options.ed,
                    G: {
                        Ob: {
                            end: b ? 1 : 0,
                            R: X.Ce
                        }
                    },
                    da: function() {
                        this.I = !0;
                        e.c.p("foamtree:dirty", !0)
                    }
                }).call(function() {
                    this.open =
                        b;
                    a.gb = !1
                }).jb(function() {
                    this.qc();
                    this.gd(m);
                    delete d[this.id]
                }).wa();
                return d[a.id] = f
            }

            function m(a, b) {
                b.opacity = 1 - a.Ob;
                b.ua = 1;
                b.va = 1;
                b.fa = 1;
                b.Ja = 1
            }
            var p = [],
                r = [];
            $.F(l, function(a) {
                if (a.O && a.Y) {
                    var c = D.K(b, a.id),
                        e = d[a.id];
                    if (e && e.Jb()) e.stop();
                    else if (a.open === c) return;
                    a.gb = c;
                    c || (a.open = c, a.Wd = !1);
                    r.push(a);
                    p.push(g(a, c))
                }
            });
            return 0 < p.length ? (e.c.p("openclose:changing"), c.D.m({}).Za(p).bb().P(function() {
                h.xd(a, r, "open", function(a) {
                    return a.open
                }, {
                    indirect: f
                }, e.options.Of, e.options.Nf)
            })) : (new V).J().N()
        }
        var d, c, f, l, h;
        e.c.j("api:initialized", function(b) {
            h = b
        });
        e.c.j("model:loaded", function(b) {
            l = b;
            d = {}
        });
        e.c.j("timeline:initialized", function(b) {
            c = b
        });
        e.c.j("expose:initialized", function(b) {
            f = b
        });
        this.H = function() {
            e.c.p("openclose:initialized", this)
        };
        this.Nb = function(b, a, c) {
            if ("flattened" == e.options.yb) return (new V).J().N();
            b = Ga(l, b, function(a) {
                return a.open || a.gb
            });
            for (var d = new V, f = 0; f < b.length; f++) b[f].gb = !0;
            0 < b.length && e.c.p("foamtree:attachChildren", b);
            var h = b.reduce(function(a, b) {
                a[b.id] = !0;
                return a
            }, {});
            m(h, a).P(function() {
                g(h, a, c).P(d.J)
            });
            return d.N()
        }
    };

    function Ka(e) {
        function m(c, f) {
            var l = Ga(g, c, function(a) {
                return a.selected
            });
            $.F(g, function(a) {
                !0 === a.selected && (a.selected = !a.selected, a.I = !a.I, a.ab = !a.ab)
            });
            var h;
            for (h = l.length - 1; 0 <= h; h--) {
                var b = l[h];
                b.selected = !b.selected;
                b.I = !b.I;
                b.ab = !b.ab
            }
            var a = [];
            $.F(g, function(b) {
                b.I && a.push(b)
            });
            0 < a.length && e.c.p("foamtree:dirty", !1);
            d.xd(f, a, "selected", function(a) {
                return a.selected
            }, {}, e.options.Qf, e.options.Pf)
        }
        var g, d;
        e.c.j("api:initialized", function(c) {
            d = c
        });
        e.c.j("model:loaded", function(c) {
            g = c
        });
        this.H =
            function() {
                e.c.p("select:initialized", this)
            };
        this.select = function(c, d) {
            return m(c, d)
        }
    };

    function La(e) {
        function m(a) {
            return function(b) {
                a.call(this, {
                    x: b.x,
                    y: b.y,
                    scale: b.scale,
                    zd: b.delta,
                    ctrlKey: b.ctrlKey,
                    metaKey: b.metaKey,
                    altKey: b.altKey,
                    shiftKey: b.shiftKey,
                    xb: b.secondary,
                    touches: b.touches
                })
            }
        }

        function g() {
            function a(b) {
                return function(a) {
                    a.x *= N / q.clientWidth;
                    a.y *= U / q.clientHeight;
                    return b(a)
                }
            }
            "external" !== n.kf && ("hammerjs" === n.kf && D.K(window, "Hammer") && (E.H(q), E.m("tap", a(k.d), !0), E.m("doubletap", a(k.k), !0), E.m("hold", a(k.xa), !0), E.m("touch", a(k.za), !1), E.m("release", a(k.Aa), !1), E.m("dragstart",
                a(k.Z), !0), E.m("drag", a(k.A), !0), E.m("dragend", a(k.S), !0), E.m("transformstart", a(k.Va), !0), E.m("transform", a(k.Ia), !0), E.m("transformend", a(k.cb), !0)), F = new ta(q), T = new sa, F.d(a(k.d)), F.k(a(k.k)), F.xa(a(k.xa)), F.Aa(a(k.za)), F.Pa(a(k.Aa)), F.Z(a(k.Z)), F.A(a(k.A)), F.S(a(k.S)), F.ya(a(k.ya)), F.Ia(a(k.ya)), F.za(a(k.Pa)), T.addEventListener("keyup", function(a) {
                var b = !1,
                    c = void 0,
                    d = n.Uf({
                        keyCode: a.keyCode,
                        preventDefault: function() {
                            b = !0
                        },
                        preventOriginalEventDefault: function() {
                            c = "prevent"
                        },
                        allowOriginalEventDefault: function() {
                            c =
                                "allow"
                        }
                    });
                "prevent" === c && a.preventDefault();
                (b = b || 0 <= d.indexOf(!1)) || 27 === a.keyCode && e.c.p("interaction:reset")
            }))
        }

        function d() {
            p.Jc(2) ? e.c.p("interaction:reset") : p.normalize(n.zc, X.oa(n.Ac))
        }

        function c(a) {
            return function() {
                x.empty() || a.apply(this, arguments)
            }
        }

        function f(a, c, d) {
            var e = {},
                f = {};
            return function(g) {
                var k;
                switch (a) {
                    case "click":
                        k = n.Af;
                        break;
                    case "doubleclick":
                        k = n.Bf;
                        break;
                    case "hold":
                        k = n.Hf;
                        break;
                    case "hover":
                        k = n.If;
                        break;
                    case "mousemove":
                        k = n.Kf;
                        break;
                    case "mousewheel":
                        k = n.Mf;
                        break;
                    case "mousedown":
                        k =
                            n.Jf;
                        break;
                    case "mouseup":
                        k = n.Lf;
                        break;
                    case "dragstart":
                        k = n.Ef;
                        break;
                    case "drag":
                        k = n.Cf;
                        break;
                    case "dragend":
                        k = n.Df;
                        break;
                    case "transformstart":
                        k = n.Tf;
                        break;
                    case "transform":
                        k = n.Rf;
                        break;
                    case "transformend":
                        k = n.Sf
                }
                var l = !1,
                    m = !k.empty(),
                    r = p.absolute(g, e),
                    q = (c || m) && h(r),
                    s = (c || m) && b(r);
                m && (m = q ? q.group : null, r = q ? q.Yb(r, f) : r, g.Pb = void 0, k = k({
                    type: a,
                    group: m,
                    topmostClosedGroup: m,
                    bottommostOpenGroup: s ? s.group : null,
                    x: g.x,
                    y: g.y,
                    xAbsolute: r.x,
                    yAbsolute: r.y,
                    scale: D.B(g.scale, 1),
                    secondary: g.xb,
                    touches: D.B(g.touches,
                        1),
                    delta: D.B(g.zd, 0),
                    ctrlKey: g.ctrlKey,
                    metaKey: g.metaKey,
                    altKey: g.altKey,
                    shiftKey: g.shiftKey,
                    preventDefault: function() {
                        l = !0
                    },
                    preventOriginalEventDefault: function() {
                        g.Pb = "prevent"
                    },
                    allowOriginalEventDefault: function() {
                        g.Pb = "allow"
                    }
                }), l = l || 0 <= k.indexOf(!1));
                l || d && d({
                    Gc: q,
                    Xg: s
                }, g)
            }
        }

        function l(a) {
            function b(a, c) {
                var d = c.e;
                if (d) {
                    for (var e = -Number.MAX_VALUE, f, g = 0; g < d.length; g++) {
                        var k = d[g];
                        !k.description && k.$ && I(k, a) && k.scale > e && (f = k, e = k.scale)
                    }
                    var h;
                    f && (h = b(a, f));
                    return h || f || c
                }
                return c
            }
            for (var c = t.length,
                    d = t[0].scale, e = t[0].scale, f = 0; f < c; f++) {
                var g = t[f],
                    g = g.scale;
                g < d && (d = g);
                g > e && (e = g)
            }
            if (d !== e)
                for (f = 0; f < c; f++)
                    if (g = t[f], g.scale === e && g.$ && I(g, a)) return b(a, g);
            return b(a, x)
        }

        function h(a, b) {
            var c;
            if ("flattened" === n.yb) c = l(a);
            else {
                c = b || 0;
                for (var d = t.length, e = void 0, f = 0; f < d; f++) {
                    var g = t[f];
                    g.scale > c && !1 === g.open && g.$ && I(g, a) && (e = g, c = g.scale)
                }
                c = e
            }
            c && c.description && (c = c.parent);
            return c
        }

        function b(a) {
            var b = void 0,
                c = 0;
            $.Mc(x, function(d) {
                !0 === d.open && d.$ && d.scale > c && I(d, a) && (b = d, c = d.scale)
            });
            return b
        }
        var a =
            v.oi(),
            k = this,
            n = e.options,
            q, p, r, s, w, u, y, x, A = !1,
            B, K, C, H, Q, O, P, F, T, N, U;
        e.c.j("stage:initialized", function(a, b, c, d) {
            q = b;
            N = c;
            U = d;
            g()
        });
        e.c.j("stage:resized", function(a, b, c, d) {
            N = c;
            U = d
        });
        e.c.j("stage:disposed", function() {
            F.lb();
            E.lb();
            T.d()
        });
        e.c.j("expose:initialized", function(a) {
            s = a
        });
        e.c.j("zoom:initialized", function(a) {
            p = a
        });
        e.c.j("openclose:initialized", function(a) {
            w = a
        });
        e.c.j("select:initialized", function(a) {
            u = a
        });
        e.c.j("titlebar:initialized", function(a) {
            y = a
        });
        e.c.j("timeline:initialized", function(a) {
            r =
                a
        });
        var t;
        e.c.j("model:loaded", function(a, b) {
            x = a;
            t = b
        });
        e.c.j("model:childrenAttached", function(a) {
            t = a
        });
        this.H = function() {};
        this.za = c(f("mousedown", !1, function() {
            p.zi()
        }));
        this.Aa = c(f("mouseup", !1, void 0));
        this.d = c(f("click", !0, function(a, b) {
            if (!b.xb && !b.shiftKey) {
                var c = a.Gc;
                c && (c.Ra && n.ud ? n.ud && (document.location.href = n.ud) : u.select({
                    e: [c],
                    Ha: !c.selected,
                    Ga: b.metaKey || b.ctrlKey
                }, !0))
            }
        }));
        this.k = c(f("doubleclick", !0, function(a, b) {
            var c, d;
            if (b.xb || b.shiftKey) {
                if (c = a.Gc) c.parent.U && (c = c.parent), d = {
                    e: c.parent !==
                        x ? [c.parent] : [],
                    Ha: !0,
                    Ga: !1
                }, u.select(d, !0), s.jc(d, !0, !0, !1)
            } else if (c = a.Gc) d = {
                e: [c],
                Ha: !0,
                Ga: !1
            }, c.gb = !0, e.c.p("foamtree:attachChildren", [c]), s.jc(d, !0, !0, !1);
            c && r.D.m({}).fb(n.Wa / 2).call(function() {
                w.Nb({
                    e: $.Oc(x, function(a) {
                        return a.Wd && !$.ni(c, a)
                    }),
                    Ha: !1,
                    Ga: !0
                }, !0, !0);
                c.Wd = !0;
                w.Nb({
                    e: [c],
                    Ha: !(b.xb || b.shiftKey),
                    Ga: !0
                }, !0, !0)
            }).start()
        }));
        this.xa = c(f("hold", !0, function(a, b) {
            var c = !(b.metaKey || b.ctrlKey || b.shiftKey) && !b.xb,
                d;
            (d = c ? a.Gc : a.Xg) && d !== x && w.Nb({
                e: [d],
                Ha: c,
                Ga: !0
            }, !0, !1)
        }));
        this.Z = c(f("dragstart",
            !1,
            function(a, b) {
                B = b.x;
                K = b.y;
                C = Date.now();
                A = !0
            }));
        this.A = c(f("drag", !1, function(a, b) {
            if (A) {
                var c = Date.now();
                O = Math.min(1, c - C);
                C = c;
                var c = b.x - B,
                    d = b.y - K;
                p.xi(c, d);
                H = c;
                Q = d;
                B = b.x;
                K = b.y
            }
        }));
        this.S = c(f("dragend", !1, function() {
            if (A) {
                A = !1;
                var a = Math.sqrt(H * H + Q * Q) / O;
                4 <= a ? p.yi(a, H, Q) : p.yf()
            }
        }));
        this.Va = c(f("transformstart", !1, function(a, b) {
            P = 1;
            B = b.x;
            K = b.y
        }));
        var z = 1,
            L = !1;
        this.Ia = c(f("transform", !1, function(a, b) {
            var c = b.scale - 0.01;
            p.Qg(b, c / P, b.x - B, b.y - K);
            P = c;
            B = b.x;
            K = b.y;
            z = P;
            L = L || 2 < b.touches
        }));
        this.cb = c(f("transformend",
            !1,
            function() {
                L && 0.8 > z ? e.c.p("interaction:reset") : d();
                L = !1
            }));
        this.Pa = c(f("mousewheel", !1, function() {
            var b = D.bh(function() {
                d()
            }, 300);
            return function(c, e) {
                var f = n.Lj;
                1 !== f && (f = Math.pow(f, e.zd), a ? (p.Rg(e, f), b()) : p.bc(e, f, n.zc, X.oa(n.Ac)).P(d))
            }
        }()));
        this.ya = c(function() {
            var a = void 0,
                b = {},
                c = !1,
                d, g = f("hover", !1, function() {
                    a && (a.Gb = !1, 0 < a.L && (a.I = !0));
                    d && (d.Gb = !0, 0 < d.L && (d.I = !0));
                    y.update(d);
                    e.c.p("foamtree:dirty", !1)
                }),
                k = f("mousemove", !1, void 0);
            return function(e) {
                if ("out" === e.type) d = void 0, c = d !== a;
                else if (p.absolute(e,
                        b), a && !a.open && I(a, b)) {
                    var f = h(b, a.scale);
                    f && f !== a ? (c = !0, d = f) : c = !1
                } else d = h(b), c = d !== a;
                c && (g(e), a = d, c = !1);
                a && k(e)
            }
        }());
        this.hb = {
            click: m(this.d),
            doubleclick: m(this.k),
            hold: m(this.xa),
            mouseup: m(this.Aa),
            mousedown: m(this.za),
            dragstart: m(this.Z),
            drag: m(this.A),
            dragend: m(this.S),
            transformstart: m(this.Va),
            transform: m(this.Ia),
            transformend: m(this.cb),
            hover: m(this.ya),
            mousewheel: m(this.Pa)
        };
        var E = function() {
                function a(b, c) {
                    return function(a) {
                        a = a.gesture;
                        var d = a.center,
                            d = ra.Le(q, d.pageX, d.pageY, {});
                        d.scale =
                            a.scale;
                        d.xb = 1 < a.touches.length;
                        d.touches = a.touches.length;
                        b.call(q, d);
                        (void 0 === d.Pb && c || "prevent" === d.Pb) && a.preventDefault()
                    }
                }
                var b, c = {};
                return {
                    H: function(a) {
                        b = window.Hammer(a, {
                            doubletap_interval: 350,
                            hold_timeout: 400,
                            doubletap_distance: 10
                        })
                    },
                    m: function(d, e, f) {
                        c[d] = e;
                        b.on(d, a(e, f))
                    },
                    lb: function() {
                        b && D.Fa(c, function(a, c) {
                            b.off(c, a)
                        })
                    }
                }
            }(),
            I = function() {
                var a = {};
                return function(b, c) {
                    b.Yb(c, a);
                    return b.ba && M.Va(b.ba, a)
                }
            }()
    };

    function Ma(e) {
        function m(c, d, e, g) {
            var b, a = 0,
                k = [];
            for (b = 0; b < d.length; b++) {
                var n = Math.sqrt(M.d(d[b], d[(b + 1) % d.length]));
                k.push(n);
                a += n
            }
            for (b = 0; b < k.length; b++) k[b] /= a;
            c[0].x = e.x;
            c[0].y = e.y;
            var m = n = a = 0;
            for (b = 1; b < c.length; b++) {
                for (var p = c[b], r = 0.95 * Math.pow(b / c.length, g), a = a + 0.3819; n < a;) n += k[m], m = (m + 1) % k.length;
                var s = (m - 1 + k.length) % k.length,
                    w = 1 - (n - a) / k[s],
                    u = d[s].x,
                    s = d[s].y,
                    y = d[m].x,
                    x = d[m].y,
                    u = (u - e.x) * r + e.x,
                    s = (s - e.y) * r + e.y,
                    y = (y - e.x) * r + e.x,
                    x = (x - e.y) * r + e.y;
                p.x = u * (1 - w) + y * w;
                p.y = s * (1 - w) + x * w
            }
        }
        var g = {
            random: {
                Hb: function(c,
                    d) {
                    for (var e = 0; e < c.length; e++) {
                        var g = c[e];
                        g.x = d.x + Math.random() * d.f;
                        g.y = d.y + Math.random() * d.i
                    }
                },
                cc: "box"
            },
            ordered: {
                Hb: function(c, e) {
                    var g = c.slice(0);
                    d.oc && g.sort(Na);
                    Ca.ac(g, e, !1, d.fe)
                },
                cc: "box"
            },
            squarified: {
                Hb: function(c, e) {
                    var g = c.slice(0);
                    d.oc && g.sort(Na);
                    Ca.ve(g, e, !1, d.fe)
                },
                cc: "box"
            },
            fisheye: {
                Hb: function(c, e, g) {
                    c = c.slice(0);
                    d.oc && c.sort(Na);
                    m(c, e, g, 0.25)
                },
                cc: "polygon"
            },
            blackhole: {
                Hb: function(c, e, g) {
                    c = c.slice(0);
                    d.oc && c.sort(Na).reverse();
                    m(c, e, g, 1)
                },
                cc: "polygon"
            }
        };
        g.order = g.ordered;
        g.treemap =
            g.squarified;
        var d = e.options;
        this.d = function(c, e, l) {
            var h;
            if (0 < c.length) {
                l = g[l.relaxationInitializer || l.initializer || d.kj || "random"];
                if ("box" === l.cc) {
                    var b = M.q(e, {});
                    l.Hb(c, b);
                    M.Dc(c, M.A(b), e)
                } else l.Hb(c, e, M.k(e, {}));
                for (l = c.length - 1; 0 <= l; l--) b = c[l], b.description && (h = M.hb(e, d.Kc, d.eh), b.x = h.x, b.y = h.y), b.Ra && (h = M.hb(e, d.xe, d.Sg), b.x = h.x, b.y = h.y), D.Ib(b.group.initialPosition) && (h = b.group.initialPosition, h = M.hb(e, h.position || "bottomright", h.distanceFromCenter || 1), b.x = h.x, b.y = h.y)
            }
        }
    };

    function Oa(e) {
        var m, g = e.options,
            d = new Pa(e, this),
            c = new Qa(e, this),
            f = {
                relaxed: d,
                ordered: c,
                squarified: c
            },
            l = f[e.options.Yc] || d;
        this.Dg = 5E-5;
        e.c.j("model:loaded", function(c) {
            m = c
        });
        e.c.j("options:changed", function(c) {
            c.layout && D.K(f, g.Yc) && (l = f[g.Yc])
        });
        this.step = function(c, b, a, d) {
            return l.step(c, b, a, d)
        };
        this.complete = function(c) {
            l.complete(c)
        };
        this.nf = function(c) {
            return c === m ? !0 : 2 * Math.sqrt(c.M.ja / (Math.PI * c.e.length)) >= Math.max(g.Ye, 5E-5)
        };
        this.Bd = function(c, b) {
            for (var a = Math.pow(g.Sa, c.L), d = g.mb * a,
                    a = g.Dd * a, e = c.e, f = e.length - 1; 0 <= f; f--) {
                var m = e[f];
                l.ze(m, a);
                var r = m;
                r.ba = 0 < d ? za.cb(r.o, d) : r.o;
                r.ba && (M.q(r.ba, r.q), M.te(r.ba, r.M));
                m.e && b.push(m)
            }
        };
        this.tc = function(c) {
            l.tc(c)
        };
        this.Qb = function(c) {
            l.Qb(c)
        }
    };

    function Pa(e, m) {
        function g(a) {
            if (a.e) {
                a = a.e;
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    c.xc = c.uc * n.Th
                }
            }
        }

        function d(b, d) {
            m.nf(b) && (b.u || (b.u = za.cb(b.o, n.Dd * Math.pow(n.Sa, b.L - 1)), b.u && b.e[0] && b.e[0].description && "stab" == n.hc && h(b)), b.u && (a.Qb(b), q.d(c(b), b.u, b.group), b.O = !0, d(b)), g(b))
        }

        function c(a) {
            return "stab" === n.hc && 0 < a.e.length && a.e[0].description ? a.e.slice(1) : a.e
        }

        function f(a) {
            var b = c(a);
            Aa.S(b, a.u);
            Aa.Bc(b, a.u);
            return Ba.Eg(a) * Math.sqrt(k.M.ja / a.M.ja)
        }

        function l(a) {
            return a < n.dg || 1E-4 > a
        }

        function h(a) {
            var b =
                n.gc / (1 + n.gc),
                c = M.q(a.u, {}),
                d = {
                    x: c.x,
                    y: 0
                },
                e = c.y,
                f = c.i,
                g = n.Fe * Math.pow(n.Sa, a.L - 1),
                k = f * n.Ee,
                h = n.Kc;
            "bottom" == h || 0 <= h && 180 > h ? (h = Math.PI, e += f, f = -1) : (h = 0, f = 1);
            for (var l, m = a.u, p = h, q = 0, P = 1, F = M.k(m, {}), T = F.ja, b = T * b, N = 0; q < P && 20 > N++;) {
                var U = (q + P) / 2;
                d.y = c.y + c.i * U;
                l = M.$b(m, d, p);
                M.k(l[0], F);
                var t = F.ja - b;
                if (0.01 >= Math.abs(t) / T) break;
                else 0 < (0 == p ? 1 : -1) * t ? P = U : q = U
            }
            M.q(l[0], c);
            if (c.i < g || c.i > k) d.y = c.i < g ? e + f * Math.min(g, k) : e + f * k, l = M.$b(a.u, d, h);
            a.e[0].o = l[0];
            a.u = l[1]
        }

        function b(a) {
            a !== k && 2 * Math.sqrt(a.M.ja / (Math.PI *
                a.e.length)) < Math.max(0.85 * n.Ye, m.Dg) && (a.O = !1, a.Ba = !1, a.Qa = !0, a.u = null)
        }
        var a = this,
            k, n = e.options,
            q = new Ma(e),
            p = 0;
        e.c.j("model:loaded", function(a) {
            k = a;
            p = 0
        });
        this.step = function(a, e, g, h) {
            function q(e) {
                e.O && e.Ba ? b(e) : e.Qa && e.o && d(e, function() {
                    var b = c(e);
                    Aa.S(b, e.u);
                    Aa.Bc(b, e.u);
                    a(e)
                });
                if (!e.u || !e.O) return 0;
                var k;
                e.parent && e.parent.aa || e.Ka ? (k = f(e), h && h(e), e.Ka = !l(k) && !g, e.aa = !0) : k = 0;
                m.Bd(e, B);
                return k
            }

            function x(a, b, c) {
                p < a && (p = a);
                var d = n.dg;
                n.Vd(b ? 1 : 1 - (a - d) / (p - d || 1), b, c);
                b && (p = 0)
            }
            for (var A = 0, B = [k]; 0 <
                B.length;) A = Math.max(A, q(B.shift()));
            var K = l(A);
            e && x(A, K, g);
            return K
        };
        this.complete = function(a) {
            for (var b = [k]; 0 < b.length;) {
                var c = b.shift();
                !c.O && c.Qa && c.o && d(c, a);
                if (c.u) {
                    if (c.parent && c.parent.aa || c.Ka) {
                        for (var e = 1E-4 > c.M.ja, g = 0; !(l(f(c)) || e && 32 < g++););
                        c.aa = !0;
                        c.Ka = !1
                    }
                    m.Bd(c, b)
                }
            }
        };
        this.tc = function(a) {
            $.F(a, g)
        };
        this.ze = function(a, b) {
            if (a.O) {
                var d = a.u;
                d && (a.$d = d);
                a.u = za.cb(a.o, b);
                a.u && a.e[0] && a.e[0].description && "stab" == n.hc && h(a);
                d && !a.u && (a.aa = !0);
                a.u && a.$d && M.Dc(c(a), a.$d, a.u)
            }
        };
        this.Qb = function(a) {
            for (var b =
                    c(a), d = a.ja, e, f = e = 0; f < b.length; f++) e += b[f].T;
            a.$j = e;
            for (a = 0; a < b.length; a++) f = b[a], f.rg = f.f, f.uc = d / Math.PI * (0 < e ? f.T / e : 1 / b.length)
        }
    };

    function Qa(e, m) {
        function g(a, b) {
            if (m.nf(a)) {
                if (!a.u || a.parent && a.parent.aa) {
                    var d = h.Dd * Math.pow(h.Sa, a.L - 1);
                    a.u = M.A(c(M.q(a.o, {}), d))
                }
                a.u && (a.O = !0, b(a))
            } else a.O = !1, $.Ea(a, function(a) {
                a.u = null
            })
        }

        function d(a) {
            function c(a) {
                function b() {
                    e.o = M.A(f);
                    e.x = f.x + f.f / 2;
                    e.y = f.y + f.i / 2
                }
                var d = h.gc / (1 + h.gc),
                    e = a.e[0],
                    f = M.q(a.u, {}),
                    g = f.i,
                    d = Math.min(Math.max(g * d, h.Fe * Math.pow(h.Sa, a.L - 1)), g * h.Ee),
                    k = h.Kc;
                "bottom" == k || 0 <= k && 180 > k ? (f.i = g - d, a.u = M.A(f), f.y += g - d, f.i = d, b()) : (f.i = d, b(), f.y += d, f.i = g - d, a.u = M.A(f))
            }
            var d;
            "stab" ==
            h.hc && 0 < a.e.length && a.e[0].description ? (d = a.e.slice(1), c(a)) : d = a.e;
            h.oc && d.sort(Na);
            "floating" == h.hc && f(d, h.Kc, function(a) {
                return a.description
            });
            f(d, h.xe, function(a) {
                return a.Ra
            });
            var e = M.q(a.u, {});
            (b[h.Yc] || Ca.ac)(d, e, !0, h.fe);
            a.Ka = !1;
            a.aa = !0;
            a.I = !0;
            a.Ma = !0
        }

        function c(a, b) {
            var c = 2 * b;
            a.x += b;
            a.y += b;
            a.f -= c;
            a.i -= c;
            return a
        }

        function f(a, b, c) {
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                if (c(e)) {
                    a.splice(d, 1);
                    "topleft" == b || 135 <= b && 315 > b ? a.unshift(e) : a.push(e);
                    break
                }
            }
        }
        var l, h = e.options,
            b = {
                squarified: Ca.ve,
                ordered: Ca.ac
            };
        e.c.j("model:loaded", function(a) {
            l = a
        });
        this.step = function(a, b, c) {
            this.complete(a);
            b && h.Vd(1, !0, c);
            return !0
        };
        this.complete = function(a) {
            for (var b = [l]; 0 < b.length;) {
                var c = b.shift();
                (!c.O || c.parent && c.parent.aa) && c.Qa && c.o && g(c, a);
                c.u && ((c.parent && c.parent.aa || c.Ka) && d(c), m.Bd(c, b))
            }
        };
        this.Qb = this.tc = this.ze = D.sa
    };

    function Ra(e, m) {
        function g(a, b) {
            var c = a.M.Rb,
                d = c / 15,
                e = 0.5 * c / 15,
                c = c / 5,
                f = a.M.x,
                g = a.M.y;
            b.fillRect(f - e, g - e, d, d);
            b.fillRect(f - e - c, g - e, d, d);
            b.fillRect(f - e + c, g - e, d, d)
        }

        function d(a, b, c, d) {
            null === a && c.clearRect(0, 0, H, Q);
            var e, f = Array(W.length);
            for (e = W.length - 1; 0 <= e; e--) f[e] = W[e].pa(c, d);
            for (e = W.length - 1; 0 <= e; e--) f[e] && W[e].X(c, d);
            T.Lc([c, C], function(d) {
                var e;
                if (null !== a) {
                    c.save();
                    c.globalCompositeOperation = "destination-out";
                    c.fillStyle = c.strokeStyle = "rgba(255, 255, 255, 1)";
                    for (e = a.length - 1; 0 <= e; e--) {
                        var g =
                            a[e],
                            k = g.o;
                        k && (c.save(), c.beginPath(), g.Wb(c), ia.oe(c, k), c.fill(), g = t.mb * Math.pow(t.Sa, g.L - 1), 0 < g && (c.lineWidth = g / 2, c.stroke()), c.restore())
                    }
                    c.restore()
                }
                d = d.scale;
                if (0 !== b.length) {
                    e = {};
                    for (k = W.length - 1; 0 <= k; k--) W[k].Og(e);
                    for (g = Z.length - 1; 0 <= g; g--)
                        if (k = Z[g], e[k.id])
                            for (var h = k.ee, k = 0; k < b.length; k++) {
                                var l = b[k];
                                !l.parent || l.parent.Ba && l.parent.O ? h(l, d) : l.ca.clear()
                            }
                }
                for (e = W.length - 1; 0 <= e; e--) g = W[e], f[e] && g.he(b, c, d)
            });
            for (e = W.length - 1; 0 <= e; e--) f[e] && W[e].Ca(c);
            t.td && (c.canvas.style.opacity = 0.99, setTimeout(function() {
                c.canvas.style.opacity =
                    1
            }, 1))
        }

        function c(a) {
            s === u ? a < 0.9 * q && (s = w, x = A, b()) : a >= q && (s = u, x = B, b())
        }

        function f() {
            function a(b, c, d) {
                b.Eb = Math.floor(1E3 * b.scale) - d * c;
                0 < b.opacity && !b.open && c++;
                var e = b.e;
                if (e)
                    for (var f = e.length - 1; 0 <= f; f--) b.W && a(e[f], c, d)
            }
            var b = null,
                d = null,
                e = null;
            T.Lc([], function(f) {
                c(f.scale);
                var g = !1;
                $.F(z, function(a) {
                    a.W && (g = a.Qd() || g, a.qc(), a.Ta = P.d(a) || a.Ta)
                });
                g && (z.I = !0);
                var k = "onSurfaceDirty" === t.qh;
                $.Ad(z, function(a) {
                    a.parent && a.parent.aa && (a.ca.clear(), a.Ta = !0, k || (a.Hc = !0, a.ec.clear()));
                    k && (a.Hc = !0, a.ec.clear())
                });
                var h = f.scale * f.scale;
                $.Ad(z, function(a) {
                    if (a.O) {
                        for (var b = a.e, c = 0; c < b.length; c++)
                            if (5 < b[c].M.ja * h) {
                                a.Y = !0;
                                return
                            } a.Y = !1
                    }
                });
                n(f);
                e = [];
                $.Nc(z, function(a) {
                    if (a.parent.Y && a.$ && a.W) {
                        e.push(a);
                        for (var b = a.parent; b !== z && (b.open || 0 === b.opacity);) b = b.parent;
                        b !== z && 0.02 > Math.abs(b.scale - a.scale) && (a.scale = Math.min(a.scale, b.scale))
                    }
                });
                a(z, 0, "flattened" === t.yb ? -1 : 1);
                e.sort(function(a, b) {
                    return a.Eb - b.Eb
                });
                if (l()) b = e, d = null;
                else {
                    var m = {},
                        p = {},
                        q = "none" != t.Fd && t.mb < t.nb / 2,
                        r = t.mb < t.Tc / 2 + t.Ed * t.$e.a;
                    $.F(z, function(a) {
                        if (a.W &&
                            !a.description && (a.aa || a.I || a.$c && a.parent.Y && a.Ta)) {
                            var b, c, d = [a],
                                e = a.C || a.parent.e;
                            if (q)
                                for (b = 0; b < e.length; b++)(c = e[b]) && d.push(c);
                            else if (r)
                                if (!a.selected && a.ab) {
                                    c = !0;
                                    for (b = 0; b < e.length; b++) e[b] ? d.push(e[b]) : c = !1;
                                    !c && 1 < a.L && d.push(a.parent)
                                } else
                                    for (b = 0; b < e.length; b++)(c = e[b]) && c.selected && d.push(c);
                            var f;
                            for (b = a.parent; b != z;) b.selected && (f = b), b = b.parent;
                            f && d.push(f);
                            for (b = 0; b < d.length; b++) {
                                f = d[b];
                                for (a = f.parent; a && a !== z;) 0 < a.opacity && (f = a), a = a.parent;
                                p[f.id] = !0;
                                $.Ea(f, function(a) {
                                    m[a.id] = !0
                                })
                            }
                        }
                    });
                    b = e.filter(function(a) {
                        return m[a.id]
                    });
                    d = b.filter(function(a) {
                        return p[a.id]
                    })
                }
            });
            (function() {
                var a = !1;
                t.cg && $.F(z, function(b) {
                    if (b.W && 0 !== b.ra.a && 1 !== b.ra.a) return a = !0, !1
                });
                a ? ($.Mc(z, function(a) {
                    if (a.W && (a.opacity !== a.dd || a.Ma)) {
                        var b = a.e;
                        if (b) {
                            for (var c = 0, d = b.length - 1; 0 <= d; d--) c = Math.max(c, b[d].Zc);
                            a.Zc = c + a.opacity * a.ra.a
                        } else a.Zc = a.opacity * a.ra.a
                    }
                }), $.F(z, function(a) {
                    if (a.W && (a.opacity !== a.dd || a.Ma)) {
                        for (var b = a.Zc, c = a;
                            (c = c.parent) && c !== z;) b += c.opacity * c.ra.a * t.ag;
                        a.vd = 0 < b ? 1 - Math.pow(1 - a.ra.a,
                            1 / b) : 0;
                        a.dd = a.opacity
                    }
                })) : $.F(z, function(a) {
                    a.W && (a.vd = 1, a.dd = -1)
                })
            })();
            return {
                xg: b,
                wg: d,
                $: e
            }
        }

        function l() {
            var a = z.aa || z.I || "none" == t.hf;
            if (!a && !z.empty()) {
                var b = z.e[0].scale;
                $.F(z, function(c) {
                    if (c.W && c.$ && c.scale !== b) return a = !0, !1
                })
            }!a && 0 < t.Ue && 1 != t.Xa && $.F(z, function(b) {
                if (b.W && 0 < b.ka) return a = !0, !1
            });
            "accurate" == t.hf && (a = (a = a || 0 === t.mb) || "none" != t.Fd && t.mb < t.nb / 2, !a && t.mb < t.Tc / 2 + t.Ed * t.$e.a && $.F(z, function(b) {
                if (b.W && (b.selected && !b.ab || !b.selected && b.ab)) return a = !0, !1
            }));
            return a
        }

        function h() {
            if (t.n !==
                t.zb) return !0;
            var a = "polygonPlainFill polygonPlainStroke polygonGradientFill polygonGradientStroke labelPlainFill contentDecoration".split(" ");
            $.F(z, function(b) {
                if (b.W && b.U) return a.push("polygonExposureShadow"), !1
            });
            for (var b = a.length - 1; 0 <= b; b--) {
                var c = a[b];
                if (!!E[c] !== !!J[c]) return !0
            }
            return !1
        }

        function b() {
            function a(c, d, e, f, g) {
                function k(a, b, c, d, e) {
                    a[d] && (b -= c * p[d], a[d] = !1, e && (b += c * p[e], a[e] = !0));
                    return b
                }
                c = D.extend({}, c);
                switch (e) {
                    case "never":
                        c.labelPlainFill = !1;
                        break;
                    case "always":
                    case "auto":
                        c.labelPlainFill = !0
                }
                if (t.Rc) switch (f) {
                    case "never":
                        c.contentDecoration = !1;
                        break;
                    case "always":
                    case "auto":
                        c.contentDecoration = !0
                } else c.contentDecoration = !1;
                var h = 0;
                D.Fa(c, function(a, b) {
                    a && (h += d * p["contentDecoration" === b ? "labelPlainFill" : b])
                });
                c.polygonExposureShadow = b;
                h += 2 * p.polygonExposureShadow;
                if (h <= g || (h = k(c, h, 2, "polygonExposureShadow")) <= g || (h = k(c, h, d, "polygonGradientFill", "polygonPlainFill")) <= g || (h = k(c, h, d, "polygonGradientStroke")) <= g || (h = k(c, h, d, "polygonPlainStroke")) <= g || "auto" === f && (h = k(c, h, d, "contentDecoration")) <=
                    g) return c;
                "auto" === e && (h = k(c, h, d, "labelPlainFill"));
                return c
            }
            var b = s === w,
                c = 0,
                d = 0;
            $.Ke(z, function(a) {
                var b = 1;
                $.F(a, function() {
                    b++
                });
                c += b;
                d = Math.max(d, b)
            });
            var e = {};
            switch (t.zh) {
                case "plain":
                    e.polygonPlainFill = !0;
                    break;
                case "gradient":
                    e.polygonPlainFill = !b, e.polygonGradientFill = b
            }
            switch (t.Fd) {
                case "plain":
                    e.polygonPlainStroke = !0;
                    break;
                case "gradient":
                    e.polygonPlainStroke = !b, e.polygonGradientStroke = b
            }
            E = a(e, c, t.Jj, t.Hj, t.Ij);
            J = a(e, 2 * d, "always", "always", t.jh);
            I = a(e, c, "always", "always", t.ih)
        }

        function a(a) {
            return function(b,
                c) {
                return b === s ? !0 === E[a] : !0 === (c ? J : I)[a]
            }
        }

        function k(a, b) {
            return function(c, d) {
                return a(c, d) && b(c, d)
            }
        }

        function n(a) {
            z.$ = !0;
            $.Ad(z, function(b) {
                if (b.W && b.Y && b.Ba && b.O && (z.I || b.aa || b.pe)) {
                    b.pe = !1;
                    var c = b.e,
                        d = {
                            x: 0,
                            y: 0,
                            f: 0,
                            i: 0
                        },
                        e = !!b.u;
                    if (1 < H / a.f) {
                        var f;
                        for (f = c.length - 1; 0 <= f; f--) c[f].$ = !1;
                        if (b.$ && e)
                            for (f = c.length - 1; 0 <= f; f--)
                                if (b = c[f], 1 !== b.scale && (b.Yb(a, d), d.f = a.f / b.scale, d.i = a.i / b.scale), !1 === b.$ && b.o) {
                                    var e = b.o,
                                        g = e.length;
                                    if (M.Va(b.o, 1 === b.scale ? a : d)) b.$ = !0;
                                    else
                                        for (var k = 0; k < g; k++)
                                            if (M.Mg(e[k], e[(k +
                                                    1) % g], 1 === b.scale ? a : d)) {
                                                b.$ = !0;
                                                b.C && (b = b.C[k]) && (c[b.index].$ = !0);
                                                break
                                            }
                                }
                    } else
                        for (f = 0; f < c.length; f++) c[f].$ = e
                }
            })
        }
        var q = v.qf() ? 50 : 1E4,
            p, r, s, w, u, y, x, A, B, K, C, H, Q, O, P = new Ta(e),
            F = new Ua(e),
            T, N, U, t = e.options,
            z, L, E, I, J;
        e.c.j("stage:initialized", function(a, b, c, d) {
            O = a;
            H = c;
            Q = d;
            r = O.rc("wireframe", t.zb, !1);
            w = r.getContext("2d");
            u = new ha(w);
            y = O.rc("hifi", t.n, !1);
            A = y.getContext("2d");
            B = new ha(A);
            s = w;
            x = A;
            w.n = t.zb;
            u.n = t.zb;
            A.n = t.n;
            B.n = t.n;
            K = O.rc("tmp", Math.max(t.n, t.zb), !0);
            C = K.getContext("2d");
            C.n = 1;
            [w, A, C].forEach(function(a) {
                a.scale(a.n,
                    a.n)
            })
        });
        e.c.j("stage:resized", function(a, b, c, d) {
            H = c;
            Q = d;
            [w, A, C].forEach(function(a) {
                a.scale(a.n, a.n)
            })
        });
        e.c.j("model:loaded", function(a) {
            function c(a) {
                var b = 0;
                if (!a.empty()) {
                    for (var d = a.e, e = d.length - 1; 0 <= e; e--) b = Math.max(b, c(d[e]));
                    b += 1
                }
                return a.og = b
            }
            z = a;
            L = !0;
            c(z);
            b();
            e.c.p("render:renderers:resolved", E, J, I)
        });
        var R = "groupFillType groupStrokeType wireframeDrawMaxDuration wireframeLabelDrawing wireframeContentDecorationDrawing finalCompleteDrawMaxDuration finalIncrementalDrawMaxDuration groupContentDecorator".split(" "),
            Y = ["groupLabelLightColor", "groupLabelDarkColor", "groupLabelColorThreshold", "groupUnexposureLabelColorThreshold"];
        e.c.j("options:changed", function(a) {
            function c(a, b, d, e) {
                O.jj(a, d);
                b.n = d;
                e && b.scale(d, d)
            }
            a.dataObject || (D.ob(a, R) && b(), D.ob(a, Y) && $.F(z, function(a) {
                a.Cd = -1
            }));
            var d = D.K(a, "pixelRatio");
            a = D.K(a, "wireframePixelRatio");
            if (d || a) d && c(y, x, t.n, !0), a && c(r, s, t.zb, !0), c(K, C, Math.max(t.n, t.zb), !1)
        });
        e.c.j("zoom:initialized", function(a) {
            T = a
        });
        e.c.j("timeline:initialized", function(a) {
            N = a
        });
        e.c.j("api:initialized",
            function(a) {
                U = a
            });
        var Z = [{
                id: "offsetPolygon",
                ee: function(a) {
                    if ((a.selected || 0 < a.opacity && !1 === a.open || !a.Y) && a.ca.Na()) {
                        var b = a.ca;
                        b.clear();
                        if (a.ba) {
                            var c = a.ba,
                                d = t.lh;
                            0 < d ? (d = Math.min(1, d * Math.pow(1 - t.mh * d, a.og)), ia.vj(b, c, a.parent.M.Rb / 32, d)) : ia.oe(b, c)
                        }
                        a.Yd = !0
                    }
                }
            }, {
                id: "label",
                ee: function(a) {
                    a.Ta && a.$c && P.k(a)
                }
            }, {
                id: "custom",
                ee: function(a, b) {
                    if (a.ba && (0 < a.opacity && (!1 === a.open || !0 === a.selected) || !a.Y) && a.Hc && e.options.Rc) {
                        var c = {};
                        U.rd(c, a);
                        U.sd(c, a);
                        U.qd(c, a, !0);
                        c.context = a.ec;
                        c.polygonContext = a.ca;
                        c.labelContext = a.Wc;
                        c.shapeDirty = a.Yd;
                        c.viewportScale = b;
                        var d = {
                            groupLabelDrawn: !0,
                            groupPolygonDrawn: !0
                        };
                        e.options.ph(e.Xd, c, d);
                        a.rf = d.groupLabelDrawn;
                        a.Zd = d.groupPolygonDrawn;
                        a.Yd = !1;
                        a.Hc = !1
                    }
                }
            }].reverse(),
            W = [new function(a) {
                var b = Array(a.length);
                this.he = function(c, d, e) {
                    if (0 !== c.length) {
                        var f, g, k = [],
                            h = c[0].Eb;
                        for (f = 0; f < c.length; f++) g = c[f], g.Eb !== h && (k.push(f), h = g.Eb);
                        k.push(f);
                        for (var l = h = 0; l < k.length; l++) {
                            for (var m = k[l], n = a.length - 1; 0 <= n; n--)
                                if (b[n]) {
                                    var p = a[n];
                                    d.save();
                                    for (f = h; f < m; f++) g = c[f], d.save(),
                                        g.Wb(d), p.wb.call(p, g, d, e), d.restore();
                                    p.ib.call(p, d, e);
                                    d.restore()
                                } h = m
                        }
                    }
                };
                this.pa = function(c, d) {
                    for (var e = !1, f = a.length - 1; 0 <= f; f--) b[f] = a[f].pa(c, d), e |= b[f];
                    return e
                };
                this.X = function(c, d) {
                    for (var e = a.length - 1; 0 <= e; e--)
                        if (b[e]) {
                            var f = a[e];
                            f.X.call(f, c, d)
                        }
                };
                this.Ca = function(c) {
                    for (var d = a.length - 1; 0 <= d; d--)
                        if (b[d]) {
                            var e = a[d];
                            e.Ca.call(e, c)
                        }
                };
                this.Og = function(c) {
                    for (var d = a.length - 1; 0 <= d; d--) {
                        var e = a[d];
                        if (b[d])
                            for (var f = e.$a.length - 1; 0 <= f; f--) c[e.$a[f]] = !0
                    }
                }
            }([{
                $a: ["offsetPolygon"],
                pa: a("polygonExposureShadow"),
                X: function(a) {
                    C.save();
                    C.scale(a.n, a.n)
                },
                Ca: function() {
                    C.restore()
                },
                d: function() {},
                ib: function(a) {
                    this.ng && (this.ng = !1, a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(K, 0, 0, a.canvas.width, a.canvas.height, 0, 0, a.canvas.width, a.canvas.height), a.restore(), C.save(), C.setTransform(1, 0, 0, 1, 0, 0), C.clearRect(0, 0, K.width, K.height), C.restore())
                },
                wb: function(a, b, c) {
                    if (!(a.open && a.Y || a.ca.Na())) {
                        var d = t.Ue * a.opacity * a.ka * ("flattened" === t.yb ? 1 - a.parent.ka : (1 - a.Ob) * a.parent.Ob) * (1.1 <= t.Xa ? 1 : (t.Xa - 1) / 0.1);
                        0 < d &&
                            (C.save(), C.beginPath(), a.Wb(C), a.ca.Ua(C), C.shadowBlur = c * b.n * d, C.shadowColor = t.rh, C.fillStyle = "rgba(0, 0, 0, 1)", C.globalCompositeOperation = "source-over", C.globalAlpha = a.opacity, C.fill(), C.shadowBlur = 0, C.shadowColor = "transparent", C.globalCompositeOperation = "destination-out", C.fill(), C.restore(), this.ng = !0)
                    }
                }
            }, {
                $a: ["offsetPolygon"],
                pa: function() {
                    return !0
                },
                X: function() {
                    function b(a) {
                        var d = a.ra,
                            e = a.Gb,
                            f = a.selected,
                            g = c(d.l * a.ua + (e ? t.Eh : 0) + (f ? t.Vh : 0)),
                            k = c(d.s * a.va + (e ? t.Fh : 0) + (f ? t.Wh : 0));
                        a = a.Te;
                        a.h = (d.h +
                            (e ? t.Dh : 0) + (f ? t.Uh : 0)) % 360;
                        a.s = k;
                        a.l = g;
                        return a
                    }

                    function c(a) {
                        return 100 < a ? 100 : 0 > a ? 0 : a
                    }
                    var d = [{
                            type: "fill",
                            pa: a("polygonPlainFill"),
                            kd: function(a, c) {
                                c.fillStyle = S.Cc(b(a))
                            }
                        }, {
                            type: "fill",
                            pa: a("polygonGradientFill"),
                            kd: function(a, d) {
                                var e = a.M.Rb,
                                    f = b(a),
                                    e = d.createRadialGradient(a.x, a.y, 0, a.x, a.y, e * t.vh);
                                e.addColorStop(0, S.Z((f.h + t.sh) % 360, c(f.s + t.uh), c(f.l + t.th)));
                                e.addColorStop(1, S.Z((f.h + t.wh) % 360, c(f.s + t.yh), c(f.l + t.xh)));
                                a.ca.Ua(d);
                                d.fillStyle = e
                            }
                        }, {
                            type: "stroke",
                            pa: k(a("polygonPlainStroke"), function() {
                                return 0 <
                                    t.nb
                            }),
                            kd: function(a, b) {
                                var d = a.ra,
                                    e = a.Gb,
                                    f = a.selected;
                                b.strokeStyle = S.Z((d.h + t.df + (e ? t.Ve : 0) + (f ? t.af : 0)) % 360, c(d.s * a.va + t.ff + (e ? t.Xe : 0) + (f ? t.cf : 0)), c(d.l * a.ua + t.ef + (e ? t.We : 0) + (f ? t.bf : 0)));
                                b.lineWidth = t.nb * Math.pow(t.Sa, a.L - 1)
                            }
                        }, {
                            type: "stroke",
                            pa: k(a("polygonGradientStroke"), function() {
                                return 0 < t.nb
                            }),
                            kd: function(a, b) {
                                var d = a.M.Rb * t.bi,
                                    e = a.ra,
                                    f = Math.PI * t.Yh / 180,
                                    d = b.createLinearGradient(a.x + d * Math.cos(f), a.y + d * Math.sin(f), a.x + d * Math.cos(f + Math.PI), a.y + d * Math.sin(f + Math.PI)),
                                    g = a.Gb,
                                    k = a.selected,
                                    f = (e.h +
                                        t.df + (g ? t.Ve : 0) + (k ? t.af : 0)) % 360,
                                    h = c(e.s * a.va + t.ff + (g ? t.Xe : 0) + (k ? t.cf : 0)),
                                    e = c(e.l * a.ua + t.ef + (g ? t.We : 0) + (k ? t.bf : 0));
                                d.addColorStop(0, S.Z((f + t.Zh) % 360, c(h + t.ai), c(e + t.$h)));
                                d.addColorStop(1, S.Z((f + t.ci) % 360, c(h + t.ei), c(e + t.di)));
                                b.strokeStyle = d;
                                b.lineWidth = t.nb * Math.pow(t.Sa, a.L - 1)
                            }
                        }],
                        e = Array(d.length);
                    return function(a, b) {
                        for (var c = d.length - 1; 0 <= c; c--) e[c] = d[c].pa(a, b);
                        this.zj = d;
                        this.Yg = e
                    }
                }(),
                Ca: function() {},
                d: function() {},
                ib: function() {},
                wb: function(a, b) {
                    if (a.Zd && !((0 === a.opacity || a.open) && a.Y || a.ca.Na() ||
                            !t.Ge && a.description)) {
                        var c = this.zj,
                            d = this.Yg;
                        b.beginPath();
                        a.ca.Ua(b);
                        for (var e = !1, f = !1, g = c.length - 1; 0 <= g; g--) {
                            var k = c[g];
                            if (d[g]) switch (k.kd(a, b), k.type) {
                                case "fill":
                                    e = !0;
                                    break;
                                case "stroke":
                                    f = !0
                            }
                        }
                        c = (a.Y ? a.opacity : 1) * a.ra.a;
                        d = !a.empty();
                        g = t.cg ? a.vd : 1;
                        e && (e = d && a.Y && a.O && a.e[0].W ? 1 - a.e.reduce(function(a, b) {
                            return a + b.ta * b.be
                        }, 0) / a.e.length * (1 - t.ag) : 1, b.globalAlpha = c * e * g, Va(b));
                        f && (b.globalAlpha = c * (d ? t.Ai : 1) * g, b.closePath(), Wa(b), b.stroke())
                    }
                }
            }, {
                $a: ["offsetPolygon"],
                pa: function() {
                    return 0 < t.Tc
                },
                X: function() {},
                Ca: function() {},
                d: function() {},
                ib: function() {},
                wb: function(a, b, c) {
                    if (a.Zd && a.selected && !a.ca.Na()) {
                        b.globalAlpha = a.Ja;
                        b.beginPath();
                        var d = Math.pow(t.Sa, a.L - 1);
                        b.lineWidth = t.Tc * d;
                        b.strokeStyle = t.Xh;
                        var e = t.Ed;
                        0 < e && (b.shadowBlur = e * d * c * b.n, b.shadowColor = t.Ze);
                        a.ca.Ua(b);
                        b.closePath();
                        b.stroke()
                    }
                }
            }, {
                $a: [],
                pa: function() {
                    return t.La
                },
                X: function() {},
                Ca: function() {},
                d: function() {},
                ib: function() {},
                wb: function(a, b) {
                    function c(d, e, f) {
                        var g = M.ue(a.ba, a.M, d / e),
                            k = t.Tg,
                            g = Math.min(Math.min(0.9 * g, k * a.q.i) / e, k * a.q.f /
                                d);
                        b.save();
                        b.translate(a.x, a.y);
                        b.globalAlpha = a.opacity * a.fa;
                        b.scale(g, g);
                        b.translate(-d / 2, -e / 2);
                        f(b);
                        b.restore()
                    }
                    a.Ra && !a.ca.Na() && t.La && 0 < t.La.width && 0 < t.La.height && c(t.La.width, t.La.height, function(a) {
                        a.drawImage(t.La, 0, 0)
                    })
                }
            }, {
                $a: [],
                pa: function(a, b) {
                    return function(c, d) {
                        return a(c, d) || b(c, d)
                    }
                }(a("labelPlainFill"), k(a("contentDecoration"), function() {
                    return t.Rc
                })),
                X: function() {},
                Ca: function() {},
                d: function() {},
                ib: function() {},
                wb: function(a, b, c) {
                    (0 < a.opacity && 0 < a.fa && !a.open || !a.Y) && !a.ca.Na() &&
                        (a.Xc = a.qa && a.qa.la && t.n * a.qa.fontSize * a.scale * c >= t.Rh, "auto" === a.Kd ? !t.Ge && a.description ? a.rb = a.parent.rb : (b = a.Te, c = b.h + (b.s << 9) + (b.l << 16), a.Cd !== c && (a.rb = S.Cg(b) > (0 > a.ka ? t.fi : t.Gh) ? t.Hh : t.Qh, a.Cd = c)) : a.rb = a.Kd)
                }
            }, {
                $a: ["custom"],
                pa: k(a("contentDecoration"), function() {
                    return t.Rc
                }),
                X: function() {},
                Ca: function() {},
                d: function() {},
                ib: function() {},
                wb: function(a, b) {
                    !(0 < a.opacity && 0 < a.fa && !a.open || !a.Y) || a.ec.Na() || a.ca.Na() || (a.Xc || void 0 === a.qa ? (b.globalAlpha = a.fa * (a.Y ? a.opacity : 1) * (a.empty() ? 1 : t.bg),
                        b.fillStyle = a.rb, b.strokeStyle = a.rb, a.ec.Ua(b)) : g(a, b))
                }
            }, {
                $a: ["label"],
                pa: a("labelPlainFill"),
                X: function() {},
                Ca: function() {},
                d: function() {},
                ib: function() {},
                wb: function(a, b, c) {
                    a.rf && a.$c && (0 < a.opacity && 0 < a.fa && !a.open || !a.Y) && !a.ca.Na() && a.qa && (b.fillStyle = a.rb, b.globalAlpha = a.fa * (a.Y ? a.opacity : 1) * (a.empty() ? 1 : t.bg), a.Xc ? Xa(a, b, c) : g(a, b))
                }
            }].reverse())];
        this.H = function() {
            p = ua.li(function() {
                return ja.gh()
            }, "BeSSearchFoamTree", 12096E5)(Ya());
            F.H()
        };
        this.clear = function() {
            s.clearRect(0, 0, H, Q);
            x.clearRect(0,
                0, H, Q)
        };
        var ea = !1,
            aa = void 0;
        this.k = function(a) {
            ea ? aa = a : a()
        };
        this.he = function() {
            function a() {
                window.clearTimeout(b);
                ea = !0;
                b = setTimeout(function() {
                    ea = !1;
                    if (h()) {
                        var a = !l();
                        d(null, c.$, x, a);
                        D.defer(function() {
                            ca.wj();
                            aa && (aa(), aa = void 0)
                        })
                    } else aa && (aa(), aa = void 0)
                }, Math.max(t.Kj, 3 * m.sg.Nd, 3 * m.sg.Md))
            }
            var b, c;
            return function(b) {
                Za(F);
                c = f();
                var e = null !== c.wg,
                    g = 0 < O.nc("hifi"),
                    k = g && (e || !b);
                b = e || L || !b;
                L = !1;
                g && !k && ca.xj();
                d(c.wg, c.xg, k ? x : s, b);
                $.Ea(z, function(a) {
                    a.aa = !1;
                    a.I = !1;
                    a.ab = !1
                });
                k || a();
                t.Xf(e)
            }
        }();
        this.d = function(a) {
            a = a || {};
            Za(F);
            z.I = !0;
            var b = f(),
                c = t.n;
            try {
                var e = D.B(a.pixelRatio, t.n);
                t.n = e;
                var g = O.rc("export", e, !0),
                    k = g.getContext("2d");
                s === u && (k = new ha(k));
                k.scale(e, e);
                var h = D.K(a, "backgroundColor");
                h && (k.save(), k.fillStyle = a.backgroundColor, k.fillRect(0, 0, H, Q), k.restore());
                d(h ? [] : null, b.xg, k, !0)
            } finally {
                t.n = c
            }
            return g.toDataURL(D.B(a.format, "image/png"), D.B(a.quality, 0.8))
        };
        var ca = function() {
            function a(b, d, e, f) {
                function g(a, b, c, d) {
                    return N.D.m({
                        opacity: O.nc(a)
                    }).ia({
                        duration: c,
                        G: {
                            opacity: {
                                end: b,
                                R: d
                            }
                        },
                        da: function() {
                            O.nc(a, this.opacity)
                        }
                    }).wa()
                }
                var k = D.Id(O.nc(b), 1),
                    h = D.Id(O.nc(e), 0);
                if (!k || !h) {
                    for (var l = c.length - 1; 0 <= l; l--) c[l].stop();
                    c = [];
                    k || c.push(g(b, 1, d, X.Ub));
                    h || c.push(g(e, 0, f, X.pg));
                    return N.D.m({}).Za(c).start()
                }
            }
            var b, c = [];
            return {
                xj: function() {
                    t.td ? 1 !== r.style.opacity && (r.style.visibility = "visible", y.style.visibility = "hidden", r.style.opacity = 1, y.style.opacity = 0) : b && b.Jb() || (b = a("wireframe", t.Pe, "hifi", t.Pe))
                },
                wj: function() {
                    t.td ? (y.style.visibility = "visible", r.style.visibility = "hidden",
                        r.style.opacity = 0, y.style.opacity = 1) : a("hifi", t.zg, "wireframe", t.zg)
                }
            }
        }();
        Za = function(a) {
            a.apply()
        };
        Va = function(a) {
            a.fill()
        };
        Wa = function(a) {
            a.stroke()
        };
        return this
    }
    var Va, Wa, Za;

    function Ta(e) {
        function m(a) {
            return d.Ph ? (b.fontFamily = c.fontFamily, b.fontStyle = c.fontStyle, b.fontVariant = c.fontVariant, b.fontWeight = c.fontWeight, b.lineHeight = c.lineHeight, b.horizontalPadding = c.pb, b.verticalPadding = c.eb, b.maxTotalTextHeight = c.tb, b.maxFontSize = c.sb, l.Fc(d.Oh, a, b), f.fontFamily = b.fontFamily, f.fontStyle = b.fontStyle, f.fontVariant = b.fontVariant, f.fontWeight = b.fontWeight, f.lineHeight = b.lineHeight, f.pb = b.horizontalPadding, f.eb = b.verticalPadding, f.tb = b.maxTotalTextHeight, f.sb = b.maxFontSize,
                f) : c
        }

        function g(a) {
            "undefined" !== typeof a.groupLabelFontFamily && (c.fontFamily = a.groupLabelFontFamily);
            "undefined" !== typeof a.groupLabelFontStyle && (c.fontStyle = a.groupLabelFontStyle);
            "undefined" !== typeof a.groupLabelFontVariant && (c.fontVariant = a.groupLabelFontVariant);
            "undefined" !== typeof a.groupLabelFontWeight && (c.fontWeight = a.groupLabelFontWeight);
            "undefined" !== typeof a.groupLabelLineHeight && (c.lineHeight = a.groupLabelLineHeight);
            "undefined" !== typeof a.groupLabelHorizontalPadding && (c.pb = a.groupLabelHorizontalPadding);
            "undefined" !== typeof a.groupLabelVerticalPadding && (c.eb = a.groupLabelVerticalPadding);
            "undefined" !== typeof a.groupLabelMaxTotalHeight && (c.tb = a.groupLabelMaxTotalHeight);
            "undefined" !== typeof a.groupLabelMaxFontSize && (c.sb = a.groupLabelMaxFontSize)
        }
        var d = e.options,
            c = {},
            f = {},
            l, h = {
                groupLabel: ""
            },
            b = {};
        e.c.j("api:initialized", function(a) {
            l = a
        });
        e.c.j("options:changed", g);
        g(e.Xd);
        this.d = function(a) {
            if (!a.ba) return !1;
            var b = a.group.label;
            d.Jh && (h.labelText = b, l.Fc(d.Ih, a, h), b = h.labelText);
            a.sf = b;
            return a.Ld !==
                b
        };
        this.k = function(a) {
            var b = a.sf;
            a.Ld = b;
            a.Wc.clear();
            a.qa = void 0;
            !a.ba || D.mf(b) || "flattened" === d.yb && !a.empty() && a.O && a.e[0].W || (a.qa = G.Ae(m(a), a.Wc, b, a.ba, a.q, a.M, !1, !1, a.pi, a.M.ja, d.Sh, a.Ta));
            a.Ta = !1
        };
        Xa = this.A = function(a, b) {
            a.Wc.Ua(b)
        }
    }
    var Xa;

    function Ua(e) {
        function m(a, b) {
            var c = a.e,
                d = c.length,
                e, f, g = h.M.Rb;
            for (e = 0; e < d; e++) f = c[e], f.Fb = (180 * (Math.atan2(f.x - a.x, f.y - a.y) + b) / Math.PI + 180) / 360, f.Qc = Math.min(1, Math.sqrt(M.d(f, a)) / g)
        }

        function g(a, b) {
            var c = a.e,
                d = c.length;
            if (1 === d || 2 === d && c[0].description) c[0].Fb = 0.5;
            else {
                var e, f, g = 0,
                    h = Number.MAX_VALUE,
                    l = Math.sin(b),
                    m = Math.cos(b);
                for (e = 0; e < d; e++) {
                    f = c[e];
                    var x = f.x * l + f.y * m;
                    g < x && (g = x);
                    h > x && (h = x);
                    f.Fb = x;
                    f.Qc = 1
                }
                for (e = 0; e < d; e++) f = c[e], f.Fb = (f.Fb - h) / (g - h)
            }
        }

        function d(a, b, c, d) {
            b = b[d];
            return b + (c[d] - b) * a
        }
        var c = {
                radial: m,
                linear: g
            },
            f = e.options,
            l, h, b = {
                groupColor: null,
                labelColor: null
            };
        e.c.j("model:loaded", function(a) {
            h = a
        });
        e.c.j("api:initialized", function(a) {
            l = a
        });
        this.H = function() {};
        this.apply = function() {
            function a(c) {
                if (c.O && c.Ba) {
                    var g = c.e,
                        h, m;
                    if (c.aa || c.Ma || w) {
                        0 === c.L ? n(c, f.Zi * Math.PI / 180) : q(c, f.cj * Math.PI / 180);
                        for (h = g.length - 1; 0 <= h; h--) {
                            m = g[h];
                            m.Ma = !0;
                            var C = m.Fb,
                                H, Q, O, P, F = m.Se;
                            0 === c.L ? (H = d(C, p, r, "h"), Q = (y + (1 - y) * m.Qc) * d(C, p, r, "s"), O = (1 + (0 > m.ka ? u * (m.ka + 1) : u) * (1 - m.Qc)) * d(C, p, r, "l"), P = d(C, p, r, "a")) :
                                (O = c.ra, H = O.h, Q = O.s, O = e(O.l, C, f.dj, f.ej), P = c.Se.a);
                            F.h = H;
                            F.s = Q;
                            F.l = O;
                            F.a = P;
                            H = m.ra;
                            m.Ra ? (H.h = 0, H.s = 0, H.l = "light" == f.Ug ? 90 : 10, H.a = 1) : (H.h = F.h, H.s = F.s, H.l = F.l, H.a = F.a);
                            w && (b.groupColor = H, b.labelColor = "auto", l.Fc(s, m, b, function(a) {
                                a.ratio = C
                            }), m.ra = S.Aa(b.groupColor), m.ra.a = D.K(b.groupColor, "a") ? b.groupColor.a : 1, "auto" !== b.labelColor && (m.Kd = S.Ng(b.labelColor)))
                        }
                        c.Ma = !1
                    }
                    for (h = g.length - 1; 0 <= h; h--) a(g[h])
                }
            }

            function e(a, b, c, d) {
                var f = 0 > a + c * d ? 0 : 100 < a + c * d ? 100 : a + c * d;
                return f + b * ((0 > a - c * (1 - d) ? 0 : 100 < a - c * (1 - d) ? 100 :
                    a - c * (1 - d)) - f)
            }
            var n = c[f.Yi] || m,
                q = g,
                p = f.hj,
                r = f.aj,
                s = f.nh,
                w = f.oh,
                u = f.bj,
                y = f.fj;
            a(h)
        };
        return this
    };

    function Fa() {
        this.xc = this.se = this.uc = this.rg = this.f = this.yg = this.T = this.y = this.x = this.id = 0;
        this.o = this.parent = this.e = null;
        this.q = {
            x: 0,
            y: 0,
            f: 0,
            i: 0
        };
        this.C = null;
        this.Ld = this.sf = void 0;
        this.nd = !1;
        this.Qc = this.Fb = 0;
        this.Se = {
            h: 0,
            s: 0,
            l: 0,
            a: 0,
            model: "hsla"
        };
        this.ra = {
            h: 0,
            s: 0,
            l: 0,
            a: 0,
            model: "hsla"
        };
        this.Te = {
            h: 0,
            s: 0,
            l: 0,
            model: "hsl"
        };
        this.Cd = -1;
        this.Kd = "auto";
        this.rb = "#000";
        this.og = this.L = this.Hd = this.index = 0;
        this.Ra = !1;
        this.ja = this.xf = 0;
        this.$ = !1;
        this.ba = null;
        this.M = {
            x: 0,
            y: 0,
            ja: 0,
            Rb: 0
        };
        this.$d = this.u = null;
        this.$c =
            this.W = this.ab = this.Hc = this.pe = this.Yd = this.Ta = this.Ma = this.I = this.aa = this.Ka = this.Ba = this.O = this.Qa = !1;
        this.va = this.ua = this.Ja = this.fa = this.opacity = this.scale = 1;
        this.ta = 0;
        this.be = 1;
        this.Ob = this.ka = this.Kb = 0;
        this.description = this.selected = this.Gb = this.Wd = this.open = this.U = !1;
        this.Eb = 0;
        this.rf = this.Zd = this.Y = !0;
        this.qa = void 0;
        this.Xc = !1;
        this.Wc = new ga;
        this.ca = new ga;
        this.ec = new ga;
        this.pi = G.Ci();
        this.Zc = 0;
        this.vd = 1;
        this.dd = -1;
        this.empty = function() {
            return !this.e || 0 === this.e.length
        };
        var e = [];
        this.Ec =
            function(c) {
                e.push(c)
            };
        this.hd = function(c) {
            D.eg(e, c)
        };
        var m = {
            scale: 1
        };
        this.Qd = function() {
            var c = !1;
            this.scale = 1;
            for (var d = 0; d < e.length; d++) c = e[d].tf(this, m) || c, this.scale *= m.scale;
            return c
        };
        this.Wb = function(c) {
            for (var d = 0; d < e.length; d++) e[d].Wb(this, c)
        };
        this.Xb = function(c, d) {
            d.x = c.x;
            d.y = c.y;
            for (var g = 0; g < e.length; g++) e[g].Xb(this, d, d);
            return d
        };
        this.Yb = function(c, d) {
            d.x = c.x;
            d.y = c.y;
            for (var g = 0; g < e.length; g++) e[g].Yb(this, d, d);
            return d
        };
        var g = [];
        this.Bb = function(c) {
            g.push(c)
        };
        this.gd = function(c) {
            D.eg(g,
                c)
        };
        var d = {
            opacity: 1,
            va: 1,
            ua: 1,
            fa: 1,
            Ja: 1
        };
        this.qc = function() {
            if (0 !== g.length) {
                this.Ja = this.fa = this.ua = this.va = this.opacity = 1;
                for (var c = g.length - 1; 0 <= c; c--)(0, g[c])(this, d), this.opacity *= d.opacity, this.ua *= d.ua, this.va *= d.va, this.fa *= d.fa, this.Ja *= d.Ja
            }
        }
    }

    function Na(e, m) {
        return m.T > e.T ? 1 : m.T < e.T ? -1 : e.index - m.index
    };

    function $a(e) {
        var m = this,
            g, d, c, f, l = e.options,
            h, b;
        e.c.j("stage:initialized", function(a, b, h, q) {
            c = h;
            f = q;
            g = a.rc("titlebar", l.n, !1);
            d = g.getContext("2d");
            d.n = l.n;
            d.scale(d.n, d.n);
            e.c.p("titlebar:initialized", m)
        });
        e.c.j("stage:resized", function(a, b, e, g) {
            c = e;
            f = g;
            d.scale(d.n, d.n)
        });
        e.c.j("zoom:initialized", function(a) {
            b = a
        });
        e.c.j("api:initialized", function(a) {
            h = a
        });
        e.c.j("model:loaded", function() {
            d.clearRect(0, 0, c, f)
        });
        this.update = function(a) {
            d.clearRect(0, 0, c, f);
            if (a) {
                !a.empty() && a.e[0].description && (a =
                    a.e[0]);
                var e = l.Ej,
                    g = l.Dj,
                    m = Math.min(f / 2, l.qe + 2 * e),
                    p = m - 2 * e,
                    r = c - 2 * g;
                if (!(0 >= p || 0 >= r)) {
                    var s = a.Xc ? a.qa.fontSize * a.scale * b.scale() : 0,
                        w, u = {
                            titleBarText: a.Ld,
                            titleBarTextColor: l.vg,
                            titleBarBackgroundColor: l.ug,
                            titleBarMaxFontSize: l.qe,
                            titleBarShown: s < l.vi
                        };
                    h.Fc(l.Aj, a, u, function(a) {
                        a.titleBarWidth = r;
                        a.titleBarHeight = p;
                        a.labelFontSize = s;
                        a.viewportScale = b.scale()
                    });
                    (w = u.titleBarText) && 0 !== w.length && u.titleBarShown && (a = b.pd(a.Xb(a, {}), {}).y > f / 2, e = {
                        x: g,
                        y: a ? e : f - m + e,
                        f: r,
                        i: p
                    }, g = M.A(e), d.fillStyle = l.ug, d.fillRect(0,
                        a ? 0 : f - m, c, m), d.fillStyle = l.vg, G.Oe({
                        fontFamily: l.Bj || l.Kh,
                        fontStyle: l.Xj || l.Lh,
                        fontWeight: l.Zj || l.Nh,
                        fontVariant: l.Yj || l.Mh,
                        sb: l.qe,
                        ad: l.Cj,
                        pb: 0,
                        eb: 0,
                        tb: 1
                    }, d, w, g, e, {
                        x: e.x + e.f / 2,
                        y: e.y + e.i / 2
                    }, !0, !0).la || d.clearRect(0, 0, c, f))
                }
            }
        }
    };

    function ab(e) {
        function m(a, c, d) {
            u = !0;
            k && k.stop();
            q && q.stop();
            return l(b.reset(a), c, d).P(function() {
                u = !1
            })
        }

        function g(a) {
            b.update(a);
            s.I = !0;
            e.c.p("foamtree:dirty", !0)
        }

        function d(a, c) {
            return b.d((0 !== b.k() ? 0.35 : 1) * a, (0 !== b.A() ? 0.35 : 1) * c)
        }

        function c() {
            if (1 === a.Sb) {
                var c = Math.round(1E4 * b.k()) / 1E4;
                0 !== c && (n.ce = c, k = w.D.wc(n).ia({
                    duration: 500,
                    G: {
                        x: {
                            start: c,
                            end: 0,
                            R: X.Ub
                        }
                    },
                    da: function() {
                        b.d(n.x - n.ce, 0);
                        g(1);
                        n.ce = n.x
                    }
                }).start())
            }
        }

        function f() {
            if (1 === a.Sb) {
                var c = Math.round(1E4 * b.A()) / 1E4;
                0 !== c && (p.de = c, q = w.D.wc(p).ia({
                    duration: 500,
                    G: {
                        y: {
                            start: c,
                            end: 0,
                            R: X.Ub
                        }
                    },
                    da: function() {
                        b.d(0, p.y - p.de);
                        g(1);
                        p.de = p.y
                    }
                }).start())
            }
        }

        function l(b, c, d) {
            return b ? w.D.wc(a).ia({
                duration: void 0 === c ? 700 : c,
                G: {
                    Sb: {
                        start: 0,
                        end: 1,
                        R: d || X.qg
                    }
                },
                da: function() {
                    g(a.Sb)
                }
            }).bb() : (new V).J().N()
        }

        function h(a) {
            return function() {
                return u ? (new V).J().N() : a.apply(this, arguments)
            }
        }
        var b = new oa(e),
            a = {
                Sb: 1
            },
            k, n = {
                He: 0,
                x: 0,
                ce: 0
            },
            q, p = {
                Ie: 0,
                y: 0,
                de: 0
            },
            r = this,
            s, w, u = !1;
        e.c.j("model:loaded", function(a) {
            s = a;
            b.reset(!1);
            b.update(1)
        });
        e.c.j("timeline:initialized", function(a) {
            w =
                a
        });
        this.H = function() {
            e.c.p("zoom:initialized", this)
        };
        this.reset = function(a, c) {
            b.Tb(1);
            return m(!0, a, c)
        };
        this.normalize = h(function(a, c) {
            b.Jc(1) ? m(!1, a, c) : r.yf()
        });
        this.yf = function() {
            c();
            f()
        };
        this.k = h(function(a, b, c, d) {
            return r.vc(a.q, b, c, d)
        });
        this.bc = h(function(a, c, d, e) {
            return l(b.bc(a, c), d, e)
        });
        this.vc = h(function(a, c, d, e) {
            return l(b.vc(a, c), d, e)
        });
        this.Fj = h(function(a, c) {
            b.vc(a, c) && g(1)
        });
        this.xi = h(function(b, c) {
            1 === a.Sb && d(b, c) && g(1)
        });
        this.Rg = h(function(a, c) {
            b.bc(a, c) && g(1)
        });
        this.Qg = h(function(a,
            c, e, f) {
            a = 0 | b.bc(a, c);
            (a |= d(e, f)) && g(1)
        });
        this.yi = h(function(e, h, l) {
            1 === a.Sb && (k = w.D.wc(n).ia({
                duration: e / 0.03,
                G: {
                    He: {
                        start: h,
                        end: 0,
                        R: X.Ub
                    }
                },
                da: function() {
                    b.d(n.He, 0) && g(1);
                    c()
                }
            }).start(), q = w.D.wc(p).ia({
                duration: e / 0.03,
                G: {
                    Ie: {
                        start: l,
                        end: 0,
                        R: X.Ub
                    }
                },
                da: function() {
                    d(0, p.Ie) && g(1);
                    f()
                }
            }).start())
        });
        this.zi = function() {
            k && 0 === b.k() && k.stop();
            q && 0 === b.A() && q.stop()
        };
        this.Lc = function(a, c) {
            b.Lc(a, c)
        };
        this.Tb = function(a) {
            return b.Tb(a)
        };
        this.Jc = function(a) {
            return b.Jc(a)
        };
        this.Ud = function() {
            return b.Ud()
        };
        this.absolute = function(a, c) {
            return b.absolute(a, c)
        };
        this.pd = function(a, c) {
            return b.pd(a, c)
        };
        this.scale = function() {
            return b.scale()
        };
        this.d = function(a) {
            return b.S(a)
        };
        this.content = function(a, c, d, e) {
            b.content(a, c, d, e)
        }
    };

    function bb(e, m, g) {
        function d(a) {
            var b = [];
            $.F(q, function(c) {
                a(c) && b.push(c.group)
            });
            return {
                groups: b
            }
        }

        function c(a, b) {
            var c = n.options,
                d = c.oj,
                e = c.nj,
                c = c.ie,
                f = 0 < d + e ? c : 0,
                g = [];
            Ba.Ia(a, Ba.xa(a, n.options.ke), function(a, c, k) {
                c = "groups" === n.options.je ? k : c;
                a.e && (a = r.D.m(a).fb(f * (e + d * c)).call(b).wa(), g.push(a))
            });
            return r.D.m({}).Za(g).bb()
        }

        function f(a) {
            Y || (Y = !0, p.d(function() {
                Y = !1;
                n.c.p("repaint:before");
                B.he(this.Pg)
            }, {
                Pg: a
            }))
        }

        function l(b) {
            function c(a, b) {
                var f = a.W;
                a.W = b <= d;
                a.$c = b <= e;
                a.W !== f && $.Je(a, function(a) {
                    a.pe = !0
                });
                a.open || a.gb || b++;
                if (f = a.e)
                    for (var g = 0; g < f.length; g++) c(f[g], b)
            }
            var d = n.options.uf,
                e = Math.min(n.options.uf, n.options.si);
            if (b)
                for (var f = 0; f < b.length; f++) {
                    var g = b[f];
                    c(g, a(g))
                } else c(q, 0)
        }

        function h(a, c) {
            var d = [],
                e = b(a, c);
            e.wi && n.c.p("model:childrenAttached", $.Oc(q));
            e.ij && A.complete(function(a) {
                J.qb(a);
                d.push(a)
            });
            for (var f = e = 0; f < d.length; f++) {
                var g = d[f];
                g.e && (e += g.e.length);
                g.Ba = !0;
                H.d(g)
            }
            return e
        }

        function b(a, b) {
            function c(a, b) {
                var h = !a.Ra && b - (a.gb ? 1 : 0) < d;
                f = f || h;
                a.Qa = a.Qa || h;
                a.open || a.gb ||
                    b++;
                var l = a.e;
                !l && h && (e = x.S(a) || e, l = a.e, k && (a.Ta = !0));
                if (l)
                    for (h = 0; h < l.length; h++) g.push(l[h], b)
            }
            var d = b || n.options.ti,
                e = !1,
                f = !1,
                g, k = "flattened" === m.yb;
            for (g = a ? a.reduce(function(a, b) {
                    a.push(b, 1);
                    return a
                }, []) : [q, 1]; 0 < g.length;) c(g.shift(), g.shift());
            return {
                wi: e,
                ij: f
            }
        }

        function a(a) {
            for (var b = 0; a.parent;) a.open || a.gb || b++, a = a.parent;
            return b
        }
        var k = this,
            n = {
                c: new wa,
                options: m,
                Xd: g
            },
            q, p = new da,
            r = new xa(p),
            s = ba.create(),
            w = new ka(n),
            u = new ab(n),
            y = new Da(n),
            x = new Ea(n.options),
            A = new Oa(n),
            B = new Ra(n, p),
            K =
            new La(n);
        new $a(n);
        var C = new Ha(n),
            H = new Ia(n),
            Q = new Ja(n),
            O = new Ka(n);
        n.c.j("stage:initialized", function(a, b, c, d) {
            t.jf(c, d)
        });
        n.c.j("stage:resized", function(a, b, c, d) {
            t.mj(a, b, c, d)
        });
        n.c.j("foamtree:attachChildren", h);
        n.c.j("openclose:changing", l);
        n.c.j("interaction:reset", function() {
            R(!0)
        });
        n.c.j("foamtree:dirty", f);
        this.H = function() {
            n.c.p("timeline:initialized", r);
            q = x.H();
            w.H(e);
            y.H();
            B.H();
            K.H();
            C.H();
            H.H();
            u.H();
            Q.H();
            O.H()
        };
        this.lb = function() {
            r.d();
            I.stop();
            p.k();
            w.lb()
        };
        var P = "groupLabelFontFamily groupLabelFontStyle groupLabelFontVariant groupLabelFontWeight groupLabelLineHeight groupLabelHorizontalPadding groupLabelVerticalPadding groupLabelDottingThreshold groupLabelMaxTotalHeight groupLabelMinFontSize groupLabelMaxFontSize groupLabelDecorator".split(" "),
            F = "rainbowColorDistribution rainbowLightnessDistribution rainbowColorDistributionAngle rainbowLightnessDistributionAngle rainbowColorModelStartPoint rainbowLightnessCorrection rainbowSaturationCorrection rainbowStartColor rainbowEndColor rainbowHueShift rainbowHueShiftCenter rainbowSaturationShift rainbowSaturationShiftCenter rainbowLightnessShift rainbowLightnessShiftCenter attributionTheme".split(" "),
            T = !1,
            N = ["groupBorderRadius", "groupBorderRadiusCorrection", "groupBorderWidth", "groupInsetWidth",
                "groupBorderWidthScaling"
            ],
            U = ["maxGroupLevelsDrawn", "maxGroupLabelLevelsDrawn"];
        this.$b = function(a) {
            n.c.p("options:changed", a);
            D.ob(a, P) && $.F(q, function(a) {
                a.Ta = !0
            });
            D.ob(a, F) && (q.Ma = !0);
            D.ob(a, N) && (T = !0);
            D.ob(a, U) && (l(), h())
        };
        this.reload = function() {
            z.reload()
        };
        this.ac = function(a, b) {
            D.defer(function() {
                if (T) t.qi(a), T = !1;
                else {
                    if (b)
                        for (var c = x.k(b), d = c.length - 1; 0 <= d; d--) c[d].I = !0;
                    else q.I = !0;
                    f(a)
                }
            })
        };
        this.Z = function() {
            w.k()
        };
        this.update = function(a) {
            a = a ? x.k(a) : [q];
            var b = a.reduce(function(a, b) {
                a[b.id] =
                    b;
                return a
            }, {});
            a = a.filter(function(a) {
                for (a = a.parent; a;) {
                    if (D.K(b, a.id)) return !1;
                    a = a.parent
                }
                return !0
            });
            x.update(a);
            t.Gj(a)
        };
        this.reset = function() {
            return R(!1)
        };
        this.S = B.d;
        this.Ia = function() {
            var a = {};
            return function(b, c) {
                var d = x.d(b);
                return d ? y.qd(a, d, c) : null
            }
        }();
        this.Aa = function() {
            var a = {
                    x: 0,
                    y: 0
                },
                b = {
                    x: 0,
                    y: 0
                };
            return function(c, d) {
                var e = x.d(c);
                return e ? (a.x = d.x, a.y = d.y, e.Xb(a, a), u.pd(a, a), b.x = a.x, b.y = a.y, b) : null
            }
        }();
        this.xa = function() {
            var a = {};
            return function(b) {
                return (b = x.d(b)) ? y.sd(a, b) : null
            }
        }();
        this.Zb = function() {
            var a = {};
            return function(b) {
                return (b = x.d(b)) ? y.rd(a, b) : null
            }
        }();
        this.ya = function() {
            var a = {};
            return function() {
                return u.d(a)
            }
        }();
        this.Bc = function() {
            this.A({
                groups: d(function(a) {
                    return a.group.selected
                }),
                newState: !0,
                keepPrevious: !1
            });
            this.k({
                groups: d(function(a) {
                    return a.group.open
                }),
                newState: !0,
                keepPrevious: !1
            });
            this.d({
                groups: d(function(a) {
                    return a.group.exposed
                }),
                newState: !0,
                keepPrevious: !1
            })
        };
        this.Pa = function() {
            return d(function(a) {
                return a.U
            })
        };
        this.d = function(a) {
            return z.submit(function() {
                return C.jc(x.A(a,
                    "exposed", !1), !1, !0, !1)
            })
        };
        this.cb = function() {
            return d(function(a) {
                return a.open
            })
        };
        this.k = function(a) {
            return z.submit(function() {
                return Q.Nb(x.A(a, "open", !0), !1, !1)
            })
        };
        this.Va = function() {
            return d(function(a) {
                return a.selected
            })
        };
        this.A = function(a) {
            return z.submit(function() {
                O.select(x.A(a, "selected", !0), !1);
                return (new V).J().N()
            })
        };
        this.Dc = function(a) {
            return (a = x.d(a)) ? a === q ? u.reset(m.zc, X.oa(m.Ac)) : u.k(a, m.Sc, m.zc, X.oa(m.Ac)) : (new V).J().N()
        };
        this.za = function(a, b) {
            var c = x.k(a);
            if (c) {
                var d = h(c, b);
                l(c);
                return d
            }
            return 0
        };
        this.hb = function(a) {
            return K.hb[a]
        };
        this.Cc = function() {
            var a = fa;
            return {
                frames: a.frames,
                totalTime: a.totalTime,
                lastFrameTime: a.Md,
                lastInterFrameTime: a.Nd,
                fps: a.Re
            }
        };
        var t = function() {
                function a(e, f) {
                    var g = e || c,
                        k = f || d;
                    c = g;
                    d = k;
                    var h = m.fc && m.fc.boundary;
                    h && 2 < h.length ? q.o = h.map(function(a) {
                        return {
                            x: g * a.x,
                            y: k * a.y
                        }
                    }) : q.o = [{
                        x: 0,
                        y: 0
                    }, {
                        x: g,
                        y: 0
                    }, {
                        x: g,
                        y: k
                    }, {
                        x: 0,
                        y: k
                    }];
                    b()
                }

                function b() {
                    q.aa = !0;
                    q.u = q.o;
                    q.q = M.q(q.o, q.q);
                    q.M = q;
                    M.te(q.o, q.M)
                }
                var c, d;
                return {
                    jf: a,
                    mj: function(b, c, d, e) {
                        J.stop();
                        var g =
                            d / b,
                            k = e / c;
                        $.Ke(q, function(a) {
                            a.x = a.x * g + (Math.random() - 0.5) * d / 1E3;
                            a.y = a.y * k + (Math.random() - 0.5) * e / 1E3
                        });
                        a(d, e);
                        q.Ka = !0;
                        A.step(J.qb, !0, !1, function(a) {
                            var b = a.e;
                            if (b) {
                                A.Qb(a);
                                for (var c = b.length - 1; 0 <= c; c--) {
                                    var d = b[c];
                                    d.f = d.uc
                                }
                                a.Ka = !0
                            }
                        }) ? f(!1) : (A.tc(q), n.options.ge ? (f(!1), I.fg(), I.jd()) : (A.complete(J.qb), q.Ma = !0, f(!1)))
                    },
                    qi: function(a) {
                        var c = !1;
                        q.empty() || (b(), I.Jb() || (c = A.step(J.qb, !1, !1), f(a)));
                        return c
                    },
                    Gj: function(a) {
                        a.forEach(function(a) {
                            $.Ea(a, function(a) {
                                a.empty() || A.Qb(a)
                            });
                            A.tc(a);
                            n.options.ge ?
                                (I.fg(), $.Ea(a, function(a) {
                                    a.empty() || J.gf(a)
                                })) : ($.Ea(a, function(a) {
                                    a.empty() || J.qb(a)
                                }), A.complete(J.qb), a.Ma = !0, f(!1))
                        })
                    }
                }
            }(),
            z = function() {
                function a() {
                    0 === m.ae && u.reset(0);
                    n.options.Wf(m.fc);
                    t.jf();
                    x.Z(m.fc);
                    b();
                    l();
                    n.c.p("model:loaded", q, $.Oc(q));
                    var c;
                    q.empty() || (q.open = !0, q.Qa = !0, m.ge ? c = I.jd() : (I.Bi(), c = f()), d(), 0 < m.ie ? (B.clear(), w.d(1)) : c = pa([c, e(1)]));
                    n.options.Vf(m.fc);
                    c && (n.options.Zf(), c.P(function() {
                        B.k(function() {
                            p.d(n.options.Yf)
                        })
                    }))
                }

                function d() {
                    var a = m.Wa,
                        b = m.ed;
                    m.Wa = 0;
                    m.ed = 0;
                    k.Bc();
                    m.Wa = a;
                    m.ed = b
                }

                function e(a, b) {
                    return 0 === m.Ne || b ? (w.d(a), (new V).J().N()) : r.D.m({
                        opacity: w.d()
                    }).re(2).ia({
                        duration: m.Ne,
                        G: {
                            opacity: {
                                end: a,
                                R: X.oa(m.hh)
                            }
                        },
                        da: function() {
                            w.d(this.opacity)
                        }
                    }).bb()
                }

                function f() {
                    $.Ea(q, function(a) {
                        a.Ba = !1
                    });
                    var a = new V,
                        b = new qa(a.J);
                    b.d();
                    q.Ba = !0;
                    H.d(q).P(b.k);
                    c(q, function Sa() {
                        this.O && this.o && (this.aa = this.Ba = !0, b.d(), H.d(this).P(b.k), b.d(), c(this, Sa).P(b.k))
                    });
                    return a.N()
                }

                function g() {
                    for (var a = 0; a < s.length; a++) {
                        var b = s[a],
                            c = b.action();
                        D.K(c, "then") ? c.P(b.De.J) : b.De.J()
                    }
                    s = []
                }
                var h = !1,
                    s = [];
                return {
                    reload: function() {
                        h || (q.empty() ? a() : (J.stop(), r.d(), I.stop(), h = !0, pa(0 < m.ae ? [H.k(), R(!1)] : [e(0)]).P(function() {
                            e(0, !0);
                            h = !1;
                            a();
                            D.defer(g)
                        })))
                    },
                    submit: function(a) {
                        if (h) {
                            var b = new V;
                            s.push({
                                action: a,
                                De: b
                            });
                            return b.N()
                        }
                        return a()
                    }
                }
            }(),
            L, E = new qa(function() {
                L.J()
            }),
            I = function() {
                function a() {
                    e || (E.A() && (L = new V), E.d(), b(), e = !0, p.repeat(d));
                    return L.N()
                }

                function b() {
                    g = s.now()
                }

                function d() {
                    var b = s.now() - g > m.lj,
                        b = A.step(function(b) {
                            b.Ba = !0;
                            J.gf(b);
                            E.d();
                            H.d(b).P(E.k);
                            E.d();
                            c(b, function() {
                                this.Qa = !0;
                                a()
                            }).P(E.k)
                        }, !0, b) || b;
                    f(!0);
                    b && (e = !1, E.k());
                    return b
                }
                var e = !1,
                    g;
                return {
                    Bi: function() {
                        A.complete(J.qb)
                    },
                    jd: a,
                    fg: b,
                    Jb: function() {
                        return !E.A()
                    },
                    stop: function() {
                        p.cancel(d);
                        e = !1;
                        E.clear()
                    }
                }
            }(),
            J = function() {
                function a(b) {
                    var c = !b.empty();
                    b.Ba = !0;
                    if (c) {
                        for (var d = b.e, e = d.length - 1; 0 <= e; e--) {
                            var f = d[e];
                            f.f = f.uc
                        }
                        b.Ka = !0
                    }
                    return c
                }
                var b = [];
                return {
                    gf: function(c) {
                        var d = n.options,
                            e = d.Bh;
                        0 < e ? Ba.Ia(c, Ba.xa(c, n.options.ke), function(a, c, f) {
                            c = "groups" === n.options.je ? f : c;
                            E.d();
                            b.push(r.D.m(a).fb(c * d.Ah * e).ia({
                                duration: e,
                                G: {
                                    f: {
                                        start: a.rg,
                                        end: a.uc,
                                        R: X.oa(d.Ch)
                                    }
                                },
                                da: function() {
                                    this.f = Math.max(0, this.f);
                                    this.parent.Ka = !0;
                                    I.jd()
                                }
                            }).jb(E.k).start())
                        }) : a(c) && I.jd()
                    },
                    qb: a,
                    stop: function() {
                        for (var a = b.length - 1; 0 <= a; a--) b[a].stop();
                        b = []
                    }
                }
            }(),
            R = function() {
                var a = !1;
                return function(b) {
                    if (a) return (new V).J().N();
                    a = !0;
                    var c = [];
                    c.push(u.reset(m.zc, X.oa(m.Ac)));
                    var d = new V;
                    C.jc({
                        e: [],
                        Ha: !1,
                        Ga: !1
                    }, b, !1, !0).P(function() {
                        Q.Nb({
                            e: [],
                            Ha: !1,
                            Ga: !1
                        }, b, !1).P(d.J)
                    });
                    c.push(d.N());
                    return pa(c).P(function() {
                        a = !1;
                        b && m.$f()
                    })
                }
            }(),
            Y = !1
    }

    function Ya() {
        return {
            version: "3.4.10",
            build: "bugfix/3.4.x/b18f7427",
            brandingAllowed: !0
        }
    };
    v.Gd(function() {
        window.BeSSearchFoamTree = function(e) {
            function m(a, c) {
                if (!h || h.exists(a)) switch (a) {
                    case "selection":
                        return k.Va();
                    case "open":
                        return k.cb();
                    case "exposure":
                        return k.Pa();
                    case "state":
                        return k.xa.apply(this, c);
                    case "geometry":
                        return k.Ia.apply(this, c);
                    case "hierarchy":
                        return k.Zb.apply(this, c);
                    case "containerCoordinates":
                        return k.Aa.apply(this, c);
                    case "imageData":
                        return k.S.apply(this, c);
                    case "viewport":
                        return k.ya();
                    case "times":
                        return k.Cc();
                    case "onModelChanged":
                    case "onRedraw":
                    case "onRolloutStart":
                    case "onRolloutComplete":
                    case "onRelaxationStep":
                    case "onGroupHover":
                    case "onGroupOpenOrCloseChanging":
                    case "onGroupExposureChanging":
                    case "onGroupSelectionChanging":
                    case "onGroupSelectionChanged":
                    case "onGroupClick":
                    case "onGroupDoubleClick":
                    case "onGroupHold":
                        var d =
                            b[a];
                        return Array.isArray(d) ? d : [d];
                    default:
                        return b[a]
                }
            }

            function g(d) {
                function e(a, b) {
                    return D.K(f, a) ? (b(f[a]), delete f[a], 1) : 0
                }
                var f;
                if (0 === arguments.length) return 0;
                1 === arguments.length ? f = D.extend({}, arguments[0]) : 2 === arguments.length && (f = {}, f[arguments[0]] = arguments[1]);
                h && h.validate(f, a.ri);
                var g = 0;
                k && (g += e("selection", k.A), g += e("open", k.k), g += e("exposure", k.d));
                var l = {};
                D.Fa(f, function(a, c) {
                    if (b[c] !== a || D.Ib(a)) l[c] = a, g++;
                    b[c] = a
                });
                0 < g && c(l);
                return g
            }

            function d(a, d) {
                var e = "on" + a.charAt(0).toUpperCase() +
                    a.slice(1),
                    f = b[e];
                b[e] = d(Array.isArray(f) ? f : [f]);
                f = {};
                f[e] = b[e];
                c(f)
            }

            function c(c) {
                (function() {
                    function d(a, e) {
                        return D.K(c, a) || void 0 === e ? va.m(b[a], l) : e
                    }
                    a.ri = b.logging;
                    a.fc = b.dataObject;
                    a.n = b.pixelRatio;
                    a.zb = b.wireframePixelRatio;
                    a.yb = b.stacking;
                    a.dh = b.descriptionGroup;
                    a.hc = b.descriptionGroupType;
                    a.Kc = b.descriptionGroupPosition;
                    a.eh = b.descriptionGroupDistanceFromCenter;
                    a.gc = b.descriptionGroupSize;
                    a.Fe = b.descriptionGroupMinHeight;
                    a.Ee = b.descriptionGroupMaxHeight;
                    a.Ge = b.descriptionGroupPolygonDrawn;
                    a.Yc = b.layout;
                    a.oc = b.layoutByWeightOrder;
                    a.yj = b.showZeroWeightGroups;
                    a.Ye = b.groupMinDiameter;
                    a.fe = b.rectangleAspectRatioPreference;
                    a.kj = b.initializer || b.relaxationInitializer;
                    a.lj = b.relaxationMaxDuration;
                    a.ge = b.relaxationVisible;
                    a.dg = b.relaxationQualityThreshold;
                    a.Th = b.groupResizingBudget;
                    a.Bh = b.groupGrowingDuration;
                    a.Ah = b.groupGrowingDrag;
                    a.Ch = b.groupGrowingEasing;
                    a.lh = b.groupBorderRadius;
                    a.mb = b.groupBorderWidth;
                    a.Sa = b.groupBorderWidthScaling;
                    a.Dd = b.groupInsetWidth;
                    a.mh = b.groupBorderRadiusCorrection;
                    a.nb = b.groupStrokeWidth;
                    a.Tc = b.groupSelectionOutlineWidth;
                    a.Xh = b.groupSelectionOutlineColor;
                    a.Ed = b.groupSelectionOutlineShadowSize;
                    a.Ze = b.groupSelectionOutlineShadowColor;
                    a.Uh = b.groupSelectionFillHueShift;
                    a.Wh = b.groupSelectionFillSaturationShift;
                    a.Vh = b.groupSelectionFillLightnessShift;
                    a.af = b.groupSelectionStrokeHueShift;
                    a.cf = b.groupSelectionStrokeSaturationShift;
                    a.bf = b.groupSelectionStrokeLightnessShift;
                    a.zh = b.groupFillType;
                    a.vh = b.groupFillGradientRadius;
                    a.sh = b.groupFillGradientCenterHueShift;
                    a.uh =
                        b.groupFillGradientCenterSaturationShift;
                    a.th = b.groupFillGradientCenterLightnessShift;
                    a.wh = b.groupFillGradientRimHueShift;
                    a.yh = b.groupFillGradientRimSaturationShift;
                    a.xh = b.groupFillGradientRimLightnessShift;
                    a.Fd = b.groupStrokeType;
                    a.nb = b.groupStrokeWidth;
                    a.df = b.groupStrokePlainHueShift;
                    a.ff = b.groupStrokePlainSaturationShift;
                    a.ef = b.groupStrokePlainLightnessShift;
                    a.bi = b.groupStrokeGradientRadius;
                    a.Yh = b.groupStrokeGradientAngle;
                    a.ci = b.groupStrokeGradientUpperHueShift;
                    a.ei = b.groupStrokeGradientUpperSaturationShift;
                    a.di = b.groupStrokeGradientUpperLightnessShift;
                    a.Zh = b.groupStrokeGradientLowerHueShift;
                    a.ai = b.groupStrokeGradientLowerSaturationShift;
                    a.$h = b.groupStrokeGradientLowerLightnessShift;
                    a.Dh = b.groupHoverFillHueShift;
                    a.Fh = b.groupHoverFillSaturationShift;
                    a.Eh = b.groupHoverFillLightnessShift;
                    a.Ve = b.groupHoverStrokeHueShift;
                    a.Xe = b.groupHoverStrokeSaturationShift;
                    a.We = b.groupHoverStrokeLightnessShift;
                    a.Xa = b.groupExposureScale;
                    a.rh = b.groupExposureShadowColor;
                    a.Ue = b.groupExposureShadowSize;
                    a.Sc = b.groupExposureZoomMargin;
                    a.gi = b.groupUnexposureLightnessShift;
                    a.hi = b.groupUnexposureSaturationShift;
                    a.fi = b.groupUnexposureLabelColorThreshold;
                    a.Wa = b.exposeDuration;
                    a.kc = b.exposeEasing;
                    a.ed = b.openCloseDuration;
                    a.nh = va.m(b.groupColorDecorator, l);
                    a.oh = b.groupColorDecorator !== D.sa;
                    a.Ih = va.m(b.groupLabelDecorator, l);
                    a.Jh = b.groupLabelDecorator !== D.sa;
                    a.Oh = va.m(b.groupLabelLayoutDecorator, l);
                    a.Ph = b.groupLabelLayoutDecorator !== D.sa;
                    a.ph = va.m(b.groupContentDecorator, l);
                    a.Rc = b.groupContentDecorator !== D.sa;
                    a.qh = b.groupContentDecoratorTriggering;
                    a.gj = b.rainbowStartColor;
                    a.$i = b.rainbowEndColor;
                    a.Yi = b.rainbowColorDistribution;
                    a.Zi = b.rainbowColorDistributionAngle;
                    a.cj = b.rainbowLightnessDistributionAngle;
                    a.dj = b.rainbowLightnessShift;
                    a.ej = b.rainbowLightnessShiftCenter;
                    a.fj = b.rainbowSaturationCorrection;
                    a.bj = b.rainbowLightnessCorrection;
                    a.ag = b.parentFillOpacity;
                    a.Ai = b.parentStrokeOpacity;
                    a.bg = b.parentLabelOpacity;
                    a.cg = b.parentOpacityBalancing;
                    a.Sh = b.groupLabelUpdateThreshold;
                    a.Kh = b.groupLabelFontFamily;
                    a.Lh = b.groupLabelFontStyle;
                    a.Mh = b.groupLabelFontVariant;
                    a.Nh = b.groupLabelFontWeight;
                    a.Rh = b.groupLabelMinFontSize;
                    a.Pj = b.groupLabelMaxFontSize;
                    a.Oj = b.groupLabelLineHeight;
                    a.Nj = b.groupLabelHorizontalPadding;
                    a.Rj = b.groupLabelVerticalPadding;
                    a.Qj = b.groupLabelMaxTotalHeight;
                    a.Hh = b.groupLabelDarkColor;
                    a.Qh = b.groupLabelLightColor;
                    a.Gh = b.groupLabelColorThreshold;
                    a.Ij = b.wireframeDrawMaxDuration;
                    a.Jj = b.wireframeLabelDrawing;
                    a.Hj = b.wireframeContentDecorationDrawing;
                    a.zg = b.wireframeToFinalFadeDuration;
                    a.Kj = b.wireframeToFinalFadeDelay;
                    a.ih = b.finalCompleteDrawMaxDuration;
                    a.jh = b.finalIncrementalDrawMaxDuration;
                    a.Pe = b.finalToWireframeFadeDuration;
                    a.td = b.androidStockBrowserWorkaround;
                    a.hf = b.incrementalDraw;
                    a.ui = b.maxGroups;
                    a.ti = b.maxGroupLevelsAttached;
                    a.uf = b.maxGroupLevelsDrawn;
                    a.si = b.maxGroupLabelLevelsDrawn;
                    a.ke = b.rolloutStartPoint;
                    a.je = b.rolloutMethod;
                    a.pj = b.rolloutEasing;
                    a.ie = b.rolloutDuration;
                    a.ig = b.rolloutScalingStrength;
                    a.kg = b.rolloutTranslationXStrength;
                    a.lg = b.rolloutTranslationYStrength;
                    a.hg = b.rolloutRotationStrength;
                    a.jg = b.rolloutTransformationCenter;
                    a.tj =
                        b.rolloutPolygonDrag;
                    a.uj = b.rolloutPolygonDuration;
                    a.qj = b.rolloutLabelDelay;
                    a.rj = b.rolloutLabelDrag;
                    a.sj = b.rolloutLabelDuration;
                    a.oj = b.rolloutChildGroupsDrag;
                    a.nj = b.rolloutChildGroupsDelay;
                    a.Ri = b.pullbackStartPoint;
                    a.Li = b.pullbackMethod;
                    a.Hi = b.pullbackEasing;
                    a.Uj = b.pullbackType;
                    a.ae = b.pullbackDuration;
                    a.Qi = b.pullbackScalingStrength;
                    a.Ti = b.pullbackTranslationXStrength;
                    a.Ui = b.pullbackTranslationYStrength;
                    a.Pi = b.pullbackRotationStrength;
                    a.Si = b.pullbackTransformationCenter;
                    a.Mi = b.pullbackPolygonDelay;
                    a.Ni = b.pullbackPolygonDrag;
                    a.Oi = b.pullbackPolygonDuration;
                    a.Ii = b.pullbackLabelDelay;
                    a.Ji = b.pullbackLabelDrag;
                    a.Ki = b.pullbackLabelDuration;
                    a.Ei = b.pullbackChildGroupsDelay;
                    a.Fi = b.pullbackChildGroupsDrag;
                    a.Gi = b.pullbackChildGroupsDuration;
                    a.Ne = b.fadeDuration;
                    a.hh = b.fadeEasing;
                    a.Lj = b.zoomMouseWheelFactor;
                    a.zc = b.zoomMouseWheelDuration;
                    a.Ac = b.zoomMouseWheelEasing;
                    a.vi = b.maxLabelSizeForTitleBar;
                    a.Bj = b.titleBarFontFamily;
                    a.ug = b.titleBarBackgroundColor;
                    a.vg = b.titleBarTextColor;
                    a.Cj = b.titleBarMinFontSize;
                    a.qe =
                        b.titleBarMaxFontSize;
                    a.Dj = b.titleBarTextPaddingLeftRight;
                    a.Ej = b.titleBarTextPaddingTopBottom;
                    a.Aj = b.titleBarDecorator;
                    a.ye = b.attributionText;
                    a.Db = b.attributionLogo;
                    a.Tg = b.attributionLogoScale;
                    a.ud = b.attributionUrl;
                    a.xe = b.attributionPosition;
                    a.Sg = b.attributionDistanceFromCenter;
                    a.Vg = b.attributionWeight;
                    a.Ug = b.attributionTheme;
                    a.kf = b.interactionHandler;
                    a.Wf = d("onModelChanging", a.Wf);
                    a.Vf = d("onModelChanged", a.Vf);
                    a.Xf = d("onRedraw", a.Xf);
                    a.Zf = d("onRolloutStart", a.Zf);
                    a.Yf = d("onRolloutComplete", a.Yf);
                    a.Vd = d("onRelaxationStep", a.Vd);
                    a.$f = d("onViewReset", a.$f);
                    a.Of = d("onGroupOpenOrCloseChanging", a.Of);
                    a.Nf = d("onGroupOpenOrCloseChanged", a.Nf);
                    a.Gf = d("onGroupExposureChanging", a.Gf);
                    a.Ff = d("onGroupExposureChanged", a.Ff);
                    a.Qf = d("onGroupSelectionChanging", a.Qf);
                    a.Pf = d("onGroupSelectionChanged", a.Pf);
                    a.If = d("onGroupHover", a.If);
                    a.Kf = d("onGroupMouseMove", a.Kf);
                    a.Af = d("onGroupClick", a.Af);
                    a.Bf = d("onGroupDoubleClick", a.Bf);
                    a.Hf = d("onGroupHold", a.Hf);
                    a.Mf = d("onGroupMouseWheel", a.Mf);
                    a.Lf = d("onGroupMouseUp",
                        a.Lf);
                    a.Jf = d("onGroupMouseDown", a.Jf);
                    a.Ef = d("onGroupDragStart", a.Ef);
                    a.Cf = d("onGroupDrag", a.Cf);
                    a.Df = d("onGroupDragEnd", a.Df);
                    a.Tf = d("onGroupTransformStart", a.Tf);
                    a.Rf = d("onGroupTransform", a.Rf);
                    a.Sf = d("onGroupTransformEnd", a.Sf);
                    a.Uf = d("onKeyUp", a.Uf)
                })();
                a.hj = S.Aa(a.gj);
                a.aj = S.Aa(a.$i);
                a.$e = S.Aa(a.Ze);
                a.Db ? D.K(c, "attributionLogo") && (a.Db instanceof Image ? a.La = a.Db : (a.La = new Image, a.La.src = a.Db)) : a.La = null;
                k && (k.$b(c), D.K(c, "dataObject") && k.reload())
            }

            function f(a) {
                return function() {
                    return a.apply(this,
                        arguments).kh(l)
                }
            }
            var l = this,
                h = window.BeSSearchFoamTree.asserts,
                b = D.extend({}, window.BeSSearchFoamTree.defaults),
                a = {};
            g(e);
            (e = b.element || document.getElementById(b.id)) || la.Pa("Element to embed FoamTree in not found.");
            b.element = e;
            var k = new bb(e, a, b);
            k.H();
            var n = {
                get: function(a) {
                    return 0 === arguments.length ? D.extend({}, b) : m(arguments[0], Array.prototype.slice.call(arguments, 1))
                },
                set: g,
                on: function(a, b) {
                    d(a, function(a) {
                        a.push(b);
                        return a
                    })
                },
                off: function(a, b) {
                    d(a, function(a) {
                        return a.filter(function(a) {
                            return a !==
                                b
                        })
                    })
                },
                resize: k.Z,
                redraw: k.ac,
                update: k.update,
                attach: k.za,
                select: f(k.A),
                expose: f(k.d),
                open: f(k.k),
                reset: f(k.reset),
                zoom: f(k.Dc),
                trigger: function(a, b) {
                    var c = k.hb(a);
                    c && c(b)
                },
                dispose: function() {
                    function a() {
                        throw "FoamTree instance disposed";
                    }
                    k.lb();
                    D.Fa(n, function(b, c) {
                        "dispose" !== c && (l[c] = a)
                    })
                }
            };
            D.Fa(n, function(a, b) {
                l[b] = a
            });
            k.reload()
        };
        window["BeSSearchFoamTree.asserts"] && (window.BeSSearchFoamTree.asserts = window["BeSSearchFoamTree.asserts"], delete window["BeSSearchFoamTree.asserts"]);
        window.BeSSearchFoamTree.supported = !0;
        window.BeSSearchFoamTree.version = Ya;
        window.BeSSearchFoamTree.defaults = Object.freeze({
            id: void 0,
            element: void 0,
            logging: !1,
            dataObject: void 0,
            pixelRatio: 1,
            wireframePixelRatio: 1,
            layout: "relaxed",
            layoutByWeightOrder: !0,
            showZeroWeightGroups: !0,
            groupMinDiameter: 10,
            rectangleAspectRatioPreference: -1,
            relaxationInitializer: "fisheye",
            relaxationMaxDuration: 3E3,
            relaxationVisible: !1,
            relaxationQualityThreshold: 1,
            stacking: "hierarchical",
            descriptionGroup: "auto",
            descriptionGroupType: "stab",
            descriptionGroupPosition: 225,
            descriptionGroupDistanceFromCenter: 1,
            descriptionGroupSize: 0.125,
            descriptionGroupMinHeight: 35,
            descriptionGroupMaxHeight: 0.5,
            descriptionGroupPolygonDrawn: !1,
            maxGroups: 5E4,
            maxGroupLevelsAttached: 4,
            maxGroupLevelsDrawn: 4,
            maxGroupLabelLevelsDrawn: 3,
            groupGrowingDuration: 0,
            groupGrowingEasing: "bounce",
            groupGrowingDrag: 0,
            groupResizingBudget: 2,
            groupBorderRadius: 0.15,
            groupBorderWidth: 4,
            groupBorderWidthScaling: 0.6,
            groupInsetWidth: 6,
            groupBorderRadiusCorrection: 1,
            groupSelectionOutlineWidth: 5,
            groupSelectionOutlineColor: "#222",
            groupSelectionOutlineShadowSize: 0,
            groupSelectionOutlineShadowColor: "#fff",
            groupSelectionFillHueShift: 0,
            groupSelectionFillSaturationShift: 0,
            groupSelectionFillLightnessShift: 0,
            groupSelectionStrokeHueShift: 0,
            groupSelectionStrokeSaturationShift: 0,
            groupSelectionStrokeLightnessShift: -10,
            groupFillType: "gradient",
            groupFillGradientRadius: 1,
            groupFillGradientCenterHueShift: 0,
            groupFillGradientCenterSaturationShift: 0,
            groupFillGradientCenterLightnessShift: 20,
            groupFillGradientRimHueShift: 0,
            groupFillGradientRimSaturationShift: 0,
            groupFillGradientRimLightnessShift: -5,
            groupStrokeType: "plain",
            groupStrokeWidth: 1.5,
            groupStrokePlainHueShift: 0,
            groupStrokePlainSaturationShift: 0,
            groupStrokePlainLightnessShift: -10,
            groupStrokeGradientRadius: 1,
            groupStrokeGradientAngle: 45,
            groupStrokeGradientUpperHueShift: 0,
            groupStrokeGradientUpperSaturationShift: 0,
            groupStrokeGradientUpperLightnessShift: 20,
            groupStrokeGradientLowerHueShift: 0,
            groupStrokeGradientLowerSaturationShift: 0,
            groupStrokeGradientLowerLightnessShift: -20,
            groupHoverFillHueShift: 0,
            groupHoverFillSaturationShift: 0,
            groupHoverFillLightnessShift: 20,
            groupHoverStrokeHueShift: 0,
            groupHoverStrokeSaturationShift: 0,
            groupHoverStrokeLightnessShift: -10,
            groupExposureScale: 1.15,
            groupExposureShadowColor: "rgba(0, 0, 0, 0.5)",
            groupExposureShadowSize: 50,
            groupExposureZoomMargin: 0.1,
            groupUnexposureLightnessShift: 65,
            groupUnexposureSaturationShift: -65,
            groupUnexposureLabelColorThreshold: 0.35,
            exposeDuration: 700,
            exposeEasing: "squareInOut",
            groupColorDecorator: D.sa,
            groupLabelDecorator: D.sa,
            groupLabelLayoutDecorator: D.sa,
            groupContentDecorator: D.sa,
            groupContentDecoratorTriggering: "onLayoutDirty",
            openCloseDuration: 500,
            rainbowColorDistribution: "radial",
            rainbowColorDistributionAngle: -45,
            rainbowLightnessDistributionAngle: 45,
            rainbowSaturationCorrection: 0.1,
            rainbowLightnessCorrection: 0.4,
            rainbowStartColor: "hsla(0, 100%, 55%, 1)",
            rainbowEndColor: "hsla(359, 100%, 55%, 1)",
            rainbowLightnessShift: 30,
            rainbowLightnessShiftCenter: 0.4,
            parentFillOpacity: 0.7,
            parentStrokeOpacity: 1,
            parentLabelOpacity: 1,
            parentOpacityBalancing: !0,
            wireframeDrawMaxDuration: 15,
            wireframeLabelDrawing: "auto",
            wireframeContentDecorationDrawing: "auto",
            wireframeToFinalFadeDuration: 500,
            wireframeToFinalFadeDelay: 300,
            finalCompleteDrawMaxDuration: 80,
            finalIncrementalDrawMaxDuration: 100,
            finalToWireframeFadeDuration: 200,
            androidStockBrowserWorkaround: v.lf(),
            incrementalDraw: "fast",
            groupLabelFontFamily: "sans-serif",
            groupLabelFontStyle: "normal",
            groupLabelFontWeight: "normal",
            groupLabelFontVariant: "normal",
            groupLabelLineHeight: 1.05,
            groupLabelHorizontalPadding: 1,
            groupLabelVerticalPadding: 1,
            groupLabelMinFontSize: 6,
            groupLabelMaxFontSize: 160,
            groupLabelMaxTotalHeight: 0.9,
            groupLabelUpdateThreshold: 0.05,
            groupLabelDarkColor: "#000",
            groupLabelLightColor: "#fff",
            groupLabelColorThreshold: 0.35,
            rolloutStartPoint: "center",
            rolloutEasing: "squareOut",
            rolloutMethod: "groups",
            rolloutDuration: 2E3,
            rolloutScalingStrength: -0.7,
            rolloutTranslationXStrength: 0,
            rolloutTranslationYStrength: 0,
            rolloutRotationStrength: -0.7,
            rolloutTransformationCenter: 0.7,
            rolloutPolygonDrag: 0.1,
            rolloutPolygonDuration: 0.5,
            rolloutLabelDelay: 0.8,
            rolloutLabelDrag: 0.1,
            rolloutLabelDuration: 0.5,
            rolloutChildGroupsDrag: 0.1,
            rolloutChildGroupsDelay: 0.2,
            pullbackStartPoint: "center",
            pullbackEasing: "squareIn",
            pullbackMethod: "groups",
            pullbackDuration: 1500,
            pullbackScalingStrength: -0.7,
            pullbackTranslationXStrength: 0,
            pullbackTranslationYStrength: 0,
            pullbackRotationStrength: -0.7,
            pullbackTransformationCenter: 0.7,
            pullbackPolygonDelay: 0.3,
            pullbackPolygonDrag: 0.1,
            pullbackPolygonDuration: 0.8,
            pullbackLabelDelay: 0,
            pullbackLabelDrag: 0.1,
            pullbackLabelDuration: 0.3,
            pullbackChildGroupsDelay: 0.1,
            pullbackChildGroupsDrag: 0.1,
            pullbackChildGroupsDuration: 0.3,
            fadeDuration: 700,
            fadeEasing: "cubicInOut",
            zoomMouseWheelFactor: 1.5,
            zoomMouseWheelDuration: 500,
            zoomMouseWheelEasing: "squareOut",
            maxLabelSizeForTitleBar: 8,
            titleBarFontFamily: null,
            titleBarFontStyle: "normal",
            titleBarFontWeight: "normal",
            titleBarFontVariant: "normal",
            titleBarBackgroundColor: "rgba(0, 0, 0, 0.5)",
            titleBarTextColor: "rgba(255, 255, 255, 1)",
            titleBarMinFontSize: 10,
            titleBarMaxFontSize: 40,
            titleBarTextPaddingLeftRight: 20,
            titleBarTextPaddingTopBottom: 15,
            titleBarDecorator: D.sa,
            attributionText: null,
            attributionLogo: null,
            attributionLogoScale: 0.5,
            attributionUrl: null,
            attributionPosition: "bottomright",
            attributionDistanceFromCenter: 1,
            attributionWeight: 0.025,
            attributionTheme: "light",
            interactionHandler: v.ki() ? "hammerjs" : "builtin",
            onModelChanging: [],
            onModelChanged: [],
            onRedraw: [],
            onRolloutStart: [],
            onRolloutComplete: [],
            onRelaxationStep: [],
            onViewReset: [],
            onGroupOpenOrCloseChanging: [],
            onGroupOpenOrCloseChanged: [],
            onGroupExposureChanging: [],
            onGroupExposureChanged: [],
            onGroupSelectionChanging: [],
            onGroupSelectionChanged: [],
            onGroupHover: [],
            onGroupMouseMove: [],
            onGroupClick: [],
            onGroupDoubleClick: [],
            onGroupHold: [],
            onGroupMouseWheel: [],
            onGroupMouseUp: [],
            onGroupMouseDown: [],
            onGroupDragStart: [],
            onGroupDrag: [],
            onGroupDragEnd: [],
            onGroupTransformStart: [],
            onGroupTransform: [],
            onGroupTransformEnd: [],
            onKeyUp: [],
            selection: null,
            open: null,
            exposure: null,
            imageData: null,
            hierarchy: null,
            geometry: null,
            containerCoordinates: null,
            state: null,
            viewport: null,
            times: null
        });
        window.BeSSearchFoamTree.geometry = Object.freeze(function() {
            return {
                rectangleInPolygon: function(e, m, g, d, c, f, l) {
                    c = D.B(c, 1);
                    f = D.B(f, 0.5);
                    l = D.B(l, 0.5);
                    e = M.ue(e, {
                        x: m,
                        y: g
                    }, d, f, l) * c;
                    return {
                        x: m - e * d * f,
                        y: g - e * l,
                        w: e * d,
                        h: e
                    }
                },
                circleInPolygon: function(e, m, g) {
                    return M.Fg(e, {
                        x: m,
                        y: g
                    })
                },
                stabPolygon: function(e, m, g, d) {
                    return M.$b(e, {
                        x: m,
                        y: g
                    }, d)
                },
                polygonCentroid: function(e) {
                    e = M.k(e, {});
                    return {
                        x: e.x,
                        y: e.y,
                        area: e.ja
                    }
                },
                boundingBox: function(e) {
                    for (var m = e[0].x, g = e[0].y, d = e[0].x, c = e[0].y, f = 1; f < e.length; f++) {
                        var l = e[f];
                        l.x <
                            m && (m = l.x);
                        l.y < g && (g = l.y);
                        l.x > d && (d = l.x);
                        l.y > c && (c = l.y)
                    }
                    return {
                        x: m,
                        y: g,
                        w: d - m,
                        h: c - g
                    }
                }
            }
        }())
    }, function() {
        window.BeSSearchFoamTree = function() {
            window.console.error("FoamTree is not supported on this browser.")
        };
        window.BeSSearchFoamTree.Wj = !1
    });
})();