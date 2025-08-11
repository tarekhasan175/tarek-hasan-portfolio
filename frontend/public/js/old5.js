(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[617], {
          617: (e, t, r) => {
                    "use strict";
                    r.r(t),
                              r.d(t, {
                                        default: () => c
                              });
                    var n = r(5155)
                              , s = r(2115);
                    function c(e) {
                              let { value: t } = e
                                        , c = (0,
                                                  s.useRef)(null)
                                        , [u, a] = (0,
                                                  s.useState)(!1);
                              return (0,
                                        s.useEffect)(() => {
                                                  let e;
                                                  if (!u)
                                                            return (async () => {
                                                                      try {
                                                                                let { default: n } = await r.e(550).then(r.t.bind(r, 2550, 23));
                                                                                e = new IntersectionObserver(r => {
                                                                                          r[0].isIntersecting && c.current && (a(!0),
                                                                                                    new n({
                                                                                                              el: c.current,
                                                                                                              value: 0,
                                                                                                              format: "(,ddd)",
                                                                                                              theme: "default"
                                                                                                    }).update(t),
                                                                                                    e.disconnect())
                                                                                }
                                                                                          , {
                                                                                                    threshold: .5
                                                                                          }),
                                                                                          c.current && e.observe(c.current)
                                                                      } catch (e) {
                                                                                console.error("Failed to load Odometer or observe:", e)
                                                                      }
                                                            }
                                                            )(),
                                                                      () => {
                                                                                e && e.disconnect()
                                                                      }
                                        }
                                                  , [t, u]),
                                        (0,
                                                  n.jsx)("div", {
                                                            ref: c,
                                                            className: "odometer"
                                                  })
                    }
                    r(8993)
          }
          ,
          8993: () => { }
}]);
