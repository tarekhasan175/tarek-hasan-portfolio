(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[669], {
          8669: function (n) {
                    n.exports = function () {
                              "use strict";
                              var n = document
                                        , t = n.createTextNode.bind(n);
                              function r(n, t, r) {
                                        n.style.setProperty(t, r)
                              }
                              function e(n, t) {
                                        return n.appendChild(t)
                              }
                              function u(t, r, u, i) {
                                        var o = n.createElement("span");
                                        return r && (o.className = r),
                                                  u && (i || o.setAttribute("data-" + r, u),
                                                            o.textContent = u),
                                                  t && e(t, o) || o
                              }
                              function i(n, t) {
                                        return n.getAttribute("data-" + t)
                              }
                              function o(t, r) {
                                        return t && 0 != t.length ? t.nodeName ? [t] : [].slice.call(t[0].nodeName ? t : (r || n).querySelectorAll(t)) : []
                              }
                              function c(n) {
                                        for (var t = []; n--;)
                                                  t[n] = [];
                                        return t
                              }
                              function a(n, t) {
                                        n && n.some(t)
                              }
                              function s(n) {
                                        return function (t) {
                                                  return n[t]
                                        }
                              }
                              var l = {};
                              function f(n, t, r, e) {
                                        return {
                                                  by: n,
                                                  depends: t,
                                                  key: r,
                                                  split: e
                                        }
                              }
                              function p(n) {
                                        l[n.by] = n
                              }
                              function h(n, r, i, c, s) {
                                        n.normalize();
                                        var l = []
                                                  , f = document.createDocumentFragment();
                                        c && l.push(n.previousSibling);
                                        var p = [];
                                        return o(n.childNodes).some(function (n) {
                                                  if (n.tagName && !n.hasChildNodes())
                                                            return void p.push(n);
                                                  if (n.childNodes && n.childNodes.length) {
                                                            p.push(n),
                                                                      l.push.apply(l, h(n, r, i, c, s));
                                                            return
                                                  }
                                                  var e = n.wholeText || ""
                                                            , o = e.trim();
                                                  o.length && (" " === e[0] && p.push(t(" ")),
                                                            a("" === i && "function" == typeof Intl.Segmenter ? Array.from(new Intl.Segmenter().segment(o)).map(function (n) {
                                                                      return n.segment
                                                            }) : o.split(i), function (n, t) {
                                                                      t && s && p.push(u(f, "whitespace", " ", s));
                                                                      var e = u(f, r, n);
                                                                      l.push(e),
                                                                                p.push(e)
                                                            }),
                                                            " " === e[e.length - 1] && p.push(t(" ")))
                                        }),
                                                  a(p, function (n) {
                                                            e(f, n)
                                                  }),
                                                  n.innerHTML = "",
                                                  e(n, f),
                                                  l
                              }
                              var m = "words"
                                        , d = f(m, 0, "word", function (n) {
                                                  return h(n, "word", /\s+/, 0, 1)
                                        })
                                        , g = "chars"
                                        , v = f(g, [m], "char", function (n, t, r) {
                                                  var e = [];
                                                  return a(r[m], function (n, r) {
                                                            e.push.apply(e, h(n, "char", "", t.whitespace && r))
                                                  }),
                                                            e
                                        });
                              function w(n) {
                                        var t = (n = n || {}).key;
                                        return o(n.target || "[data-splitting]").map(function (e) {
                                                  var u = e["\uD83C\uDF4C"];
                                                  if (!n.force && u)
                                                            return u;
                                                  u = e["\uD83C\uDF4C"] = {
                                                            el: e
                                                  };
                                                  var o = n.by || i(e, "splitting");
                                                  o && "true" != o || (o = g);
                                                  var c = (function n(t, r, e) {
                                                            var u = e.indexOf(t);
                                                            if (-1 == u) {
                                                                      e.unshift(t);
                                                                      var i = l[t];
                                                                      if (!i)
                                                                                throw Error("plugin not loaded: " + t);
                                                                      a(i.depends, function (r) {
                                                                                n(r, t, e)
                                                                      })
                                                            } else {
                                                                      var o = e.indexOf(r);
                                                                      e.splice(u, 1),
                                                                                e.splice(o, 0, t)
                                                            }
                                                            return e
                                                  }
                                                  )(o, 0, []).map(s(l))
                                                            , f = function (n, t) {
                                                                      for (var r in t)
                                                                                n[r] = t[r];
                                                                      return n
                                                            }({}, n);
                                                  return a(c, function (n) {
                                                            if (n.split) {
                                                                      var i, o, c = n.by, s = (t ? "-" + t : "") + n.key, l = n.split(e, f, u);
                                                                      s && (o = (i = "--" + s) + "-index",
                                                                                a(l, function (n, t) {
                                                                                          Array.isArray(n) ? a(n, function (n) {
                                                                                                    r(n, o, t)
                                                                                          }) : r(n, o, t)
                                                                                }),
                                                                                r(e, i + "-total", l.length)),
                                                                                u[c] = l,
                                                                                e.classList.add(c)
                                                            }
                                                  }),
                                                            e.classList.add("splitting"),
                                                            u
                                        })
                              }
                              function y(n, t, r) {
                                        var e = o(t.matching || n.children, n)
                                                  , u = {};
                                        return a(e, function (n) {
                                                  var t = Math.round(n[r]);
                                                  (u[t] || (u[t] = [])).push(n)
                                        }),
                                                  Object.keys(u).map(Number).sort(b).map(s(u))
                              }
                              function b(n, t) {
                                        return n - t
                              }
                              w.html = function (n) {
                                        var t = (n = n || {}).target = u();
                                        return t.innerHTML = n.content,
                                                  w(n),
                                                  t.outerHTML
                              }
                                        ,
                                        w.add = p;
                              var N = f("lines", [m], "line", function (n, t, r) {
                                        return y(n, {
                                                  matching: r[m]
                                        }, "offsetTop")
                              })
                                        , k = f("items", 0, "item", function (n, t) {
                                                  return o(t.matching || n.children, n)
                                        })
                                        , x = f("rows", 0, "row", function (n, t) {
                                                  return y(n, t, "offsetTop")
                                        })
                                        , C = f("cols", 0, "col", function (n, t) {
                                                  return y(n, t, "offsetLeft")
                                        })
                                        , T = f("grid", ["rows", "cols"])
                                        , A = "layout"
                                        , L = f(A, 0, 0, function (n, t) {
                                                  var c = t.rows = +(t.rows || i(n, "rows") || 1)
                                                            , a = t.columns = +(t.columns || i(n, "columns") || 1);
                                                  if (t.image = t.image || i(n, "image") || n.currentSrc || n.src,
                                                            t.image) {
                                                            var s = o("img", n)[0];
                                                            t.image = s && (s.currentSrc || s.src)
                                                  }
                                                  t.image && r(n, "background-image", "url(" + t.image + ")");
                                                  for (var l = c * a, f = [], p = u(0, "cell-grid"); l--;) {
                                                            var h = u(p, "cell");
                                                            u(h, "cell-inner"),
                                                                      f.push(h)
                                                  }
                                                  return e(n, p),
                                                            f
                                        })
                                        , S = f("cellRows", [A], "row", function (n, t, r) {
                                                  var e = t.rows
                                                            , u = c(e);
                                                  return a(r[A], function (n, t, r) {
                                                            u[Math.floor(t / (r.length / e))].push(n)
                                                  }),
                                                            u
                                        })
                                        , M = f("cellColumns", [A], "col", function (n, t, r) {
                                                  var e = t.columns
                                                            , u = c(e);
                                                  return a(r[A], function (n, t) {
                                                            u[t % e].push(n)
                                                  }),
                                                            u
                                        })
                                        , E = f("cells", ["cellRows", "cellColumns"], "cell", function (n, t, r) {
                                                  return r[A]
                                        });
                              return p(d),
                                        p(v),
                                        p(N),
                                        p(k),
                                        p(x),
                                        p(C),
                                        p(T),
                                        p(L),
                                        p(S),
                                        p(M),
                                        p(E),
                                        w
                    }()
          }
}]);
