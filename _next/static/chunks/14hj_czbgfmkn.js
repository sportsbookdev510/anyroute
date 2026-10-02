(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  8387,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248);
    let s = "0xa4dDF89A40A35264E9D7F896a1ef01C59b1e977a";
    e.s([
      "ANYR_CA",
      0,
      s,
      "default",
      0,
      function () {
        let [e, r] = (0, a.useState)(""),
          i = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
          if (!e) return;
          let t = setTimeout(() => r(""), 1800);
          return () => clearTimeout(t);
        }, [e]);
        let n = async () => {
          try {
            await navigator.clipboard.writeText(s), r("Copied");
          } catch {
            let e = document.createRange();
            e.selectNodeContents(i.current);
            let t = getSelection();
            t.removeAllRanges(), t.addRange(e), r("Selected");
          }
        };
        return (0, t.jsxs)("div", {
          className: "ca",
          children: [
            (0, t.jsxs)("button", {
              type: "button",
              className: "ca-field" + ("Copied" === e ? " copied" : ""),
              onClick: n,
              title: "Copy contract address",
              children: [
                (0, t.jsx)("span", {
                  className: "ca-label",
                  children: "$ANYR CA",
                }),
                (0, t.jsx)("code", {
                  className: "ca-value",
                  ref: i,
                  children: s,
                }),
                (0, t.jsxs)("code", {
                  className: "ca-short",
                  "aria-hidden": "true",
                  children: [s.slice(0, 6), "…", s.slice(-4)],
                }),
                (0, t.jsx)("span", {
                  className: "ca-action",
                  "aria-hidden": "true",
                  children: e || "Copy",
                }),
              ],
            }),
            (0, t.jsx)("span", {
              className: "sr-only",
              role: "status",
              children: "Copied" === e ? "Contract address copied" : "",
            }),
          ],
        });
      },
    ]);
  },
  52073,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248),
      s = e.i(92882);
    let r = [
        [
          "Bring your own workflow",
          "Keep your SDK, choose providers and configure fallbacks. Cache and guardrails are opt-in.",
        ],
        [
          "Budget, rules and a kill switch",
          "Set request/hour/day/week caps, models, lanes, tools and working hours. The kill switch stops the next request; the owner resumes.",
        ],
        [
          "Ask first, then inspect",
          "Approve once on /agents within 15 minutes. Read signed receipts in the per-agent ledger and export CSV or JSON.",
        ],
        [
          "Alerts, breakers and autonomy",
          "Follow the /agents alert feed, spend-alert webhook or Telegram via AnyRoute’s bot. Circuit breakers and progressive autonomy support spending caps up to 10x.",
        ],
      ],
      i = [
        ["fallbacks", "Fallbacks", "routing.provider", !0],
        ["budget", "Budget cap", "limit · reset", !0],
        ["rate", "Rate limits", "rpm · tpm", !0],
        ["models", "Model allowlist", "allowed_models", !0],
        ["guardrails", "Guardrails", "opt-in · pii", !1],
        ["team", "Team scope", "roles · budgets", !1],
        ["paywith", "Pay with NVDA", "stock token default", !1],
        ["expiry", "Expiry", "expires_at", !1],
      ];
    e.s([
      "default",
      0,
      function () {
        let [e, n] = (0, a.useState)(() =>
            Object.fromEntries(i.map(([e, , , t]) => [e, t]))
          ),
          [l, o] = (0, a.useState)({ k: "", n: 0 }),
          [d, c] = (0, a.useState)(""),
          h = i.filter(([t]) => e[t]).length;
        return (0, t.jsx)("section", {
          className: "section",
          id: "gateway",
          children: (0, t.jsxs)("div", {
            className: "container split reverse",
            children: [
              (0, t.jsxs)("div", {
                className: "split-copy",
                children: [
                  (0, t.jsxs)("div", {
                    "data-reveal": !0,
                    children: [
                      (0, t.jsx)("span", {
                        className: "eyebrow tick",
                        children: "Gateway / controls per key",
                      }),
                      (0, t.jsx)("h2", {
                        className: "h2",
                        children: "Batteries included. All removable.",
                      }),
                      (0, t.jsx)("p", {
                        className: "lede",
                        children:
                          "Set boundaries on the key and attach an agent rulebook. AnyRoute’s router enforces it for requests through AnyRoute only.",
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "points",
                    "data-stagger": !0,
                    children: r.map(([e, a]) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: "point",
                          "data-reveal": !0,
                          children: [
                            (0, t.jsx)("i", { "aria-hidden": "true" }),
                            (0, t.jsx)("h3", { children: e }),
                            (0, t.jsx)("p", { children: a }),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                  (0, t.jsxs)("p", {
                    "data-reveal": !0,
                    style: { marginTop: 24 },
                    children: [
                      (0, t.jsx)("a", {
                        className: "inline-link",
                        href: "/agents/",
                        children: "Open the agent rulebook",
                      }),
                      " · ",
                      (0, t.jsx)("a", {
                        className: "inline-link",
                        href: "/docs/#agent-rulebook",
                        children: "Read the API and MCP tools",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "panel gateway-panel",
                "data-reveal": !0,
                children: [
                  (0, t.jsxs)("div", {
                    className: "panel-bar",
                    children: [
                      (0, t.jsx)("span", {
                        children: "POST /api/v1/keys · example",
                      }),
                      (0, t.jsxs)("span", {
                        children: [
                          (0, t.jsx)("b", { children: h }),
                          " / ",
                          i.length,
                          " on",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "toggles",
                    role: "group",
                    "aria-label": "Gateway features for this key",
                    children: i.map(([a, s, r]) =>
                      (0, t.jsxs)(
                        "button",
                        {
                          type: "button",
                          className: "toggle",
                          "aria-pressed": e[a],
                          onClick: () => {
                            let t;
                            return (
                              (t = !e[a]),
                              void (n({ ...e, [a]: t }),
                              o((e) => ({ k: a, n: e.n + 1 })),
                              c(
                                `${s} ${
                                  t ? "on" : "off"
                                }. Key settings updated.`
                              ))
                            );
                          },
                          children: [
                            (0, t.jsxs)("span", {
                              children: [
                                s,
                                (0, t.jsx)("small", { children: r }),
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className: "switch",
                              "aria-hidden": "true",
                            }),
                          ],
                        },
                        a
                      )
                    ),
                  }),
                  (0, t.jsx)("pre", {
                    className: "config",
                    tabIndex: 0,
                    role: "region",
                    "aria-label": "Key settings preview, JSON",
                    children: (0, t.jsx)("code", {
                      children: [
                        ["{"],
                        ['  "name": "support-agent",'],
                        [`  "limit": ${e.budget ? "250" : "null"},`, "budget"],
                        [
                          `  "limit_reset": ${
                            e.budget ? '"monthly"' : "null"
                          },`,
                          "budget",
                        ],
                        [`  "rpm": ${e.rate ? "600" : "null"},`, "rate"],
                        [`  "tpm": ${e.rate ? "400000" : "null"},`, "rate"],
                        [
                          `  "allowed_models": ${
                            e.models
                              ? '["qwen/qwen3-32b", "deepseek/deepseek-r1"]'
                              : "null"
                          },`,
                          "models",
                        ],
                        [
                          `  "team": ${e.team ? '"research"' : "null"},`,
                          "team",
                        ],
                        [
                          `  "pay_with_default": ${
                            e.paywith ? '"NVDA"' : "null"
                          },`,
                          "paywith",
                        ],
                        [
                          `  "expires_at": ${
                            e.expiry ? '"2026-12-31T00:00:00Z"' : "null"
                          },`,
                          "expiry",
                        ],
                        [
                          `  "guardrails": ${
                            e.guardrails ? '{ "pii": "redact" }' : "null"
                          },`,
                          "guardrails",
                        ],
                        ['  "routing": {'],
                        ['    "provider": {'],
                        ['      "sort": "latency",'],
                        [
                          `      "allow_fallbacks": ${e.fallbacks}`,
                          "fallbacks",
                        ],
                        ["    }"],
                        ["  }"],
                        ["}"],
                      ].map(([e, a], r) => {
                        let i = a && a === l.k;
                        return (0, t.jsx)(
                          "span",
                          {
                            className: "ln" + (i ? " flash" : ""),
                            children: (0, s.highlight)(e),
                          },
                          i ? `${r}-${l.n}` : r
                        );
                      }),
                    }),
                  }),
                  (0, t.jsx)("p", {
                    className: "sr-only",
                    "aria-live": "polite",
                    children: d,
                  }),
                ],
              }),
            ],
          }),
        });
      },
    ]);
  },
  78068,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248),
      s = e.i(8387),
      r = e.i(84420);
    let i = [
        "llama-3.3-70b",
        "qwen3-32b",
        "deepseek-r1",
        "mistral-small",
        "gemma-3-27b",
        "qwen3-235b",
        "deepseek-v3",
        "llama-4-scout",
        "kimi-k2",
        "glm-4.6",
        "gpt-oss-120b",
        "mixtral-8x22b",
        "phi-4",
        "olmo-2-32b",
        "command-r",
        "hermes-3-70b",
        "nemotron-70b",
        "qwq-32b",
      ],
      n = ["North Compute", "Vector Inference", "East Cloud"];
    function l({ onRoute: e }) {
      let s = (0, a.useRef)(null),
        o = (0, a.useRef)(e);
      return (
        (o.current = e),
        (0, a.useEffect)(() => {
          let e = s.current,
            t = e.getContext("2d"),
            a = matchMedia("(prefers-reduced-motion: reduce)").matches,
            l = new Path2D(r.MARK_LEFT),
            d = new Path2D(r.MARK_RIGHT),
            c = 0,
            h = 0,
            u = 1,
            p = 0,
            m = 0,
            x = 0,
            v = [],
            j = 0,
            y = !1,
            f = performance.now(),
            g = null,
            b = 1041,
            w = { x: 0, y: 0, tx: 0, ty: 0 },
            N = (e, t) => e + Math.random() * (t - e),
            k = () => {
              let t = e.getBoundingClientRect();
              (c = t.width),
                (h = t.height),
                (u = Math.min(2, devicePixelRatio || 1)),
                (e.width = c * u),
                (e.height = h * u);
              let a = c < 700,
                s = Math.min(h, innerHeight);
              (p = a ? 0.5 * c : 0.7 * c),
                (m = a ? 0.27 * s : 0.44 * h),
                (x = a
                  ? Math.min(0.34 * c, 0.17 * s)
                  : Math.min(0.3 * c, 0.42 * h));
              let r = a ? 8 : i.length;
              v = Array.from({ length: r }, (e, t) => {
                let a = (t / r) * Math.PI * 2 + N(-0.12, 0.12) - Math.PI / 2,
                  s = x * N(0.62, 1.08);
                return {
                  label: i[t],
                  a,
                  rr: s,
                  phase: N(0, 6.28),
                  speed: N(0.15, 0.35),
                  heat: 0,
                  x: 0,
                  y: 0,
                };
              });
            },
            S = (e) => {
              let t = (e.x + p) / 2,
                a = (e.y + m) / 2,
                s = e.y - m,
                r = p - e.x,
                i = Math.hypot(s, r) || 1,
                n = 0.18 * Math.hypot(e.x - p, e.y - m);
              return [t + (s / i) * n * 0.5, a + (r / i) * n * 0.5];
            },
            A = (e, t) => {
              let [a, s] = S(e),
                r = 1 - t;
              return [
                r * r * p + 2 * r * t * a + t * t * e.x,
                r * r * m + 2 * r * t * s + t * t * e.y,
              ];
            },
            R = (e) => {
              let a,
                s,
                r = (e - f) / 1e3;
              (w.x += (w.tx - w.x) * 0.05),
                (w.y += (w.ty - w.y) * 0.05),
                t.setTransform(u, 0, 0, u, 0, 0),
                t.clearRect(0, 0, c, h),
                v.forEach((e) => {
                  let t, a;
                  return (
                    (t = Math.sin(r * e.speed + e.phase) * x * 0.035),
                    (a = e.a + 0.03 * Math.sin(0.05 * r + e.phase)),
                    void ((e.x =
                      p + Math.cos(a) * (e.rr + t) + w.x * (e.rr / x) * 14),
                    (e.y =
                      m +
                      Math.sin(a) * (e.rr + t) * 0.82 +
                      w.y * (e.rr / x) * 14))
                  );
                }),
                (t.strokeStyle = "rgba(245,245,240,.06)"),
                (t.lineWidth = 1),
                [0.55, 0.85, 1.1].forEach((e) => {
                  t.beginPath(),
                    t.ellipse(p, m, x * e, x * e * 0.82, 0, 0, 2 * Math.PI),
                    t.stroke();
                }),
                (!g || r - g.t > 3.1) &&
                  ((s = (a = [...v]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 4))[0]),
                  (g = {
                    t: r,
                    candidates: a,
                    winner: s,
                    provider: n[(Math.random() * n.length) | 0],
                    latency: Math.round(N(180, 640)),
                    tokens: Math.round(N(40, 420)),
                    private: 0.25 > Math.random(),
                    id: ++b,
                  }));
              let i = r - g.t;
              if (
                (i > 2.3 &&
                  !g.done &&
                  ((g.done = !0),
                  (g.winner.heat = 1),
                  o.current?.({ ...g, model: g.winner.label })),
                v.forEach((e) => {
                  let a = g.candidates.includes(e) && i < 0.9,
                    s = e === g.winner && i < 2.6,
                    [r, n] = S(e);
                  t.beginPath(),
                    t.moveTo(p, m),
                    t.quadraticCurveTo(r, n, e.x, e.y),
                    (t.strokeStyle =
                      s && i > 0.7
                        ? "rgba(31,225,90,.85)"
                        : a
                        ? "rgba(245,245,240,.28)"
                        : `rgba(245,245,240,${0.05 + 0.3 * e.heat})`),
                    (t.lineWidth = s && i > 0.7 ? 1.6 : 1),
                    s &&
                      i > 0.7 &&
                      ((t.shadowColor = "rgba(31,225,90,.8)"),
                      (t.shadowBlur = 12)),
                    t.stroke(),
                    (t.shadowBlur = 0),
                    (e.heat *= 0.985);
                  let l = s ? 7 : 5;
                  (t.fillStyle = s
                    ? "#1fe15a"
                    : a
                    ? "rgba(245,245,240,.9)"
                    : "rgba(245,245,240,.55)"),
                    t.fillRect(e.x - l / 2, e.y - l / 2, l, l),
                    s ||
                      ((t.fillStyle = "#0b0c0b"),
                      t.fillRect(
                        e.x - l / 2 + 1.2,
                        e.y - l / 2 + 1.2,
                        l - 2.4,
                        l - 2.4
                      )),
                    (t.font =
                      '500 10px "Martian Mono Variable", ui-monospace, monospace'),
                    (t.fillStyle = s
                      ? "rgba(31,225,90,1)"
                      : `rgba(245,245,240,${a ? 0.75 : 0.32})`);
                  let o = t.measureText(e.label).width,
                    d = e.x >= p;
                  d && e.x + 12 + o > c - 6
                    ? (d = !1)
                    : !d && e.x - 12 - o < 6 && (d = !0),
                    (t.textAlign = d ? "left" : "right"),
                    t.fillText(e.label, e.x + (d ? 12 : -12), e.y + 3.5);
                }),
                i > 0.7 && i < 2.3)
              ) {
                let e = i < 1.5,
                  a = e ? (i - 0.7) / 0.8 : 1 - (i - 1.5) / 0.8,
                  s = a < 0.5 ? 2 * a * a : 1 - Math.pow(-2 * a + 2, 2) / 2;
                for (let a = 0; a < 7; a++) {
                  let r = Math.max(
                      0,
                      Math.min(1, s - (e ? 1 : -1) * a * 0.025)
                    ),
                    [i, n] = A(g.winner, r);
                  t.fillStyle = `rgba(31,225,90,${1 - a / 7})`;
                  let l = 4 - 0.4 * a;
                  t.fillRect(i - l / 2, n - l / 2, l, l);
                }
              }
              let j = Math.max(0, 1 - i / 1.2);
              (t.strokeStyle = `rgba(31,225,90,${0.6 * j})`),
                (t.lineWidth = 1),
                t.beginPath(),
                t.arc(p, m, 26 + (1 - j) * 40, 0, 2 * Math.PI),
                t.stroke(),
                (t.fillStyle = "#0b0c0b"),
                t.fillRect(p - 30, m - 30, 60, 60),
                (t.strokeStyle = "rgba(245,245,240,.25)"),
                t.strokeRect(p - 30.5, m - 30.5, 61, 61),
                t.save(),
                t.translate(p, m),
                t.scale(40 / 982, 40 / 982),
                t.translate(-627, -618),
                (t.fillStyle = "#1fe15a"),
                t.fillRect(616, 940 - ((i % 1.6) / 1.6) * 700, 22, 90),
                (t.fillStyle = "#f5f5f0"),
                t.fill(l),
                t.fill(d),
                t.restore(),
                (t.font =
                  '500 9px "Martian Mono Variable", ui-monospace, monospace'),
                (t.textAlign = "center"),
                (t.fillStyle = "rgba(245,245,240,.5)"),
                t.fillText("ROUTER", p, m + 46);
            },
            E = (e) => {
              R(e), y && (j = requestAnimationFrame(E));
            },
            M = () => {
              y || a || ((y = !0), (j = requestAnimationFrame(E)));
            },
            T = () => {
              (y = !1), cancelAnimationFrame(j);
            };
          k(), a && ((f = performance.now() - 1500), R(performance.now()));
          let q = new ResizeObserver(() => {
            k(), y || R(performance.now());
          });
          q.observe(e);
          let C = new IntersectionObserver(([e]) =>
            e.isIntersecting && !document.hidden ? M() : T()
          );
          C.observe(e);
          let P = () => (document.hidden ? T() : M());
          document.addEventListener("visibilitychange", P);
          let $ = (e) => {
            (w.tx = (e.clientX / innerWidth - 0.5) * 2),
              (w.ty = (e.clientY / innerHeight - 0.5) * 2);
          };
          return (
            addEventListener("pointermove", $, { passive: !0 }),
            () => {
              T(),
                q.disconnect(),
                C.disconnect(),
                document.removeEventListener("visibilitychange", P),
                removeEventListener("pointermove", $);
            }
          );
        }, []),
        (0, t.jsx)("canvas", {
          ref: s,
          className: "route-field",
          "aria-hidden": "true",
        })
      );
    }
    var o = e.i(92882);
    let d = (e) =>
        Array.from(
          { length: e },
          () => "0123456789abcdef"[(16 * Math.random()) | 0]
        ).join(""),
      c = {
        id: 1041,
        model: "llama-3.3-70b",
        provider: "North Compute",
        private: !1,
        latency: 312,
        tokens: 184,
        cost: "0.000032",
        sig: "9f1c…e07a",
      };
    function h({ route: e }) {
      return (0, t.jsxs)("aside", {
        className: "route-card-live",
        "aria-label": "Illustrative route preview",
        children: [
          (0, t.jsxs)("div", {
            className: "rcl-head",
            children: [
              (0, t.jsxs)("span", {
                className: "rcl-dot",
                children: ["Route #", e.id],
              }),
              (0, t.jsx)("b", { children: "Illustrative" }),
            ],
          }),
          (0, t.jsxs)("dl", {
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "model" }),
                  (0, t.jsx)("dd", {
                    children: (0, t.jsx)(o.Scramble, { text: e.model }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "provider" }),
                  (0, t.jsx)("dd", {
                    children: (0, t.jsx)(o.Scramble, { text: e.provider }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "route" }),
                  (0, t.jsx)("dd", {
                    className: e.private ? "ok" : "",
                    children: e.private ? "private · attested" : "standard",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "latency" }),
                  (0, t.jsx)("dd", {
                    children: (0, t.jsx)(o.Scramble, {
                      text: `${e.latency} ms`,
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "tokens" }),
                  (0, t.jsx)("dd", {
                    children: (0, t.jsx)(o.Scramble, {
                      text: String(e.tokens),
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "cost" }),
                  (0, t.jsx)("dd", {
                    children: (0, t.jsx)(o.Scramble, {
                      text: `${e.cost} USDG`,
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "receipt" }),
                  (0, t.jsx)("dd", {
                    className: "ok",
                    children: (0, t.jsx)(o.Scramble, {
                      text: `ed25519 ${e.sig}`,
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "rcl-bar",
            children: (0, t.jsx)("i", { style: { "--dur": "3.1s" } }, e.id),
          }),
        ],
      });
    }
    let u = [
      ["Any", "model."],
      ["One", "key."],
      ["Paid", "per", "call."],
    ];
    e.s(
      [
        "default",
        0,
        function () {
          let [e, r] = (0, a.useState)(c),
            i = 0;
          return (0, t.jsxs)("section", {
            className: "hero",
            id: "home",
            "data-dark-hero": !0,
            children: [
              (0, t.jsx)("div", {
                className: "hero-grid",
                "aria-hidden": "true",
              }),
              (0, t.jsx)("div", {
                className: "hero-glow",
                "aria-hidden": "true",
              }),
              (0, t.jsx)(l, {
                onRoute: (e) =>
                  r({
                    id: e.id,
                    model: e.model,
                    provider: e.provider,
                    private: e.private,
                    latency: e.latency,
                    tokens: e.tokens,
                    cost: (e.tokens * (e.private ? 24e-8 : 18e-8)).toFixed(6),
                    sig: `${d(4)}…${d(4)}`,
                  }),
              }),
              (0, t.jsxs)("div", {
                className: "container hero-inner",
                children: [
                  (0, t.jsxs)("div", {
                    className: "hero-copy",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "hero-kicker",
                        children: [
                          (0, t.jsx)("b", { children: "▲" }),
                          " OpenRouter-compatible · Robinhood Chain",
                        ],
                      }),
                      (0, t.jsxs)("h1", {
                        className: "hero-title",
                        children: [
                          (0, t.jsx)("span", {
                            className: "brackets",
                            "aria-hidden": "true",
                          }),
                          u.map((e, a) =>
                            (0, t.jsx)(
                              "span",
                              {
                                className: "line",
                                children: e.map((s, r) =>
                                  (0, t.jsxs)(
                                    "span",
                                    {
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "w" + (2 === a ? " accent" : ""),
                                          style: { "--i": i++ },
                                          children: s,
                                        }),
                                        r < e.length - 1 ? " " : "",
                                      ],
                                    },
                                    r
                                  )
                                ),
                              },
                              a
                            )
                          ),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "hero-sub",
                        children: [
                          (0, t.jsxs)("p", {
                            children: [
                              "Route AI calls through ",
                              (0, t.jsx)("strong", {
                                children: "one API, one USDG balance",
                              }),
                              " and a signed receipt for every generation. Choose your model. Keep control of the route.",
                            ],
                          }),
                          (0, t.jsx)("p", {
                            children:
                              "Encrypted chat, an agent rulebook and a network open for early hosts. Built on Robinhood Chain.",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "button-row",
                        children: [
                          (0, t.jsx)(o.Button, {
                            href: "/dashboard/",
                            children: "Open dashboard",
                          }),
                          (0, t.jsx)(o.Button, {
                            href: "/docs/",
                            secondary: !0,
                            children: "Read the docs",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("a", {
                        className: "hero-harness",
                        href: "/harness/",
                        children: [
                          "Or try every model and its tools on one page",
                          (0, t.jsx)("b", {
                            "aria-hidden": "true",
                            children: "→",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("a", {
                        className: "hero-harness",
                        href: "/seal/",
                        children: [
                          "Read SEAL, the privacy protocol, and its public spec",
                          (0, t.jsx)("b", {
                            "aria-hidden": "true",
                            children: "→",
                          }),
                        ],
                      }),
                      (0, t.jsx)(s.default, {}),
                    ],
                  }),
                  (0, t.jsx)(h, { route: e }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "hero-status",
                children: (0, t.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, t.jsxs)("span", {
                      children: [(0, t.jsx)("i", {}), "Robinhood Chain · 4663"],
                    }),
                    (0, t.jsx)("span", { children: "Settlement · USDG" }),
                    (0, t.jsx)("span", {
                      children: "Receipts · Ed25519, anchored hourly",
                    }),
                    (0, t.jsx)("span", { children: "Prepaid router fee · 0%" }),
                  ],
                }),
              }),
            ],
          });
        },
      ],
      78068
    );
  },
  2322,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248);
    let s = [
      [
        "Choose your model.",
        "Use the familiar API request shape. Set your model, provider preferences and budget.",
        "model · provider{} · budget",
      ],
      [
        "Let Anyroute find the route.",
        "The router filters providers by health, price, data policy and your requirements, with fallbacks ready.",
        "1/price² × uptime × quality",
      ],
      [
        "Receive a receipt.",
        "Every generation returns itemized usage, cost and a signed receipt, anchored on-chain within the hour.",
        "ed25519 · merkle · 4663",
      ],
    ];
    e.s([
      "default",
      0,
      function () {
        let e = (0, a.useRef)(null),
          [r, i] = (0, a.useState)(0);
        return (
          (0, a.useEffect)(() => {
            let t = e.current,
              a = (e) => i(e.detail);
            return (
              t.addEventListener("progress", a),
              () => t.removeEventListener("progress", a)
            );
          }, []),
          (0, t.jsx)("section", {
            className: "section how",
            id: "how-it-works",
            ref: e,
            "data-progress": !0,
            children: (0, t.jsxs)("div", {
              className: "container",
              children: [
                (0, t.jsxs)("div", {
                  className: "section-head",
                  "data-reveal": !0,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("span", {
                          className: "eyebrow",
                          children: "How it works",
                        }),
                        (0, t.jsxs)("h2", {
                          children: [
                            "Three steps.",
                            (0, t.jsx)("br", {}),
                            "No new SDK.",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: "lede",
                      children:
                        "Point your client at the router, keep your code, and every call comes back with the route it took and the proof of what it cost.",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "how-track",
                  children: [
                    (0, t.jsx)("div", {
                      className: "how-rail",
                      "aria-hidden": "true",
                      children: (0, t.jsx)("i", {}),
                    }),
                    s.map(([e, a, s], i) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: "how-step",
                          "data-reveal": !0,
                          style: { "--i": i },
                          children: [
                            (0, t.jsx)("span", {
                              className:
                                "how-dot" + (r > i / 3 + 0.05 ? " on" : ""),
                              "aria-hidden": "true",
                            }),
                            (0, t.jsxs)("span", {
                              className: "n",
                              children: ["STEP 0", i + 1],
                            }),
                            (0, t.jsx)("h3", { children: e }),
                            (0, t.jsx)("p", { children: a }),
                            (0, t.jsx)("span", {
                              className: "chip",
                              children: s,
                            }),
                          ],
                        },
                        e
                      )
                    ),
                  ],
                }),
              ],
            }),
          })
        );
      },
    ]);
  },
  5004,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248),
      s = e.i(92882);
    let r = [
        [
          "End-to-end encrypted chat",
          "The client encrypts on your device; the attested gateway handles inference while the router forwards ciphertext.",
        ],
        [
          "Other request paths",
          "AnyRoute’s router reads request text in memory to route it. Attested serving alone does not hide prompts from the router.",
        ],
        [
          "Evidence and stored records",
          "Inspect signed receipts, the key transparency log and the data inventory. Receipts store hashes, token counts and cost, not prompt or answer text.",
        ],
      ],
      i = [
        "Request :private",
        "Quote verified",
        "Route selected",
        "Receipt signed",
      ],
      n = (e) =>
        Array.from(
          { length: e },
          () => "0123456789abcdef"[(16 * Math.random()) | 0]
        ).join(""),
      l = { quote: "sha256:9c41e0b2…a1f307e2", nonce: "0x5e2a…c91d" },
      o = i.length + 1;
    e.s([
      "default",
      0,
      function () {
        let e = (0, a.useRef)(null),
          [d, c] = (0, a.useState)(o),
          [h, u] = (0, a.useState)(l);
        (0, a.useEffect)(() => {
          if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
          c(0);
          let t = [],
            a = 0,
            s = !1,
            r = () => {
              t.forEach(clearTimeout), (t = []);
            },
            i = () => {
              r(),
                c(0),
                a++ &&
                  u({
                    quote: `sha256:${n(8)}…${n(8)}`,
                    nonce: `0x${n(4)}…${n(4)}`,
                  }),
                [600, 1500, 2400, 3300, 4100].forEach((e, a) =>
                  t.push(setTimeout(() => c(a + 1), e))
                ),
                t.push(setTimeout(i, 8e3));
            },
            l = new IntersectionObserver(
              ([e]) => {
                e.isIntersecting && !s
                  ? ((s = !0), i())
                  : !e.isIntersecting && s && ((s = !1), r());
              },
              { threshold: 0.35 }
            );
          return (
            l.observe(e.current),
            () => {
              l.disconnect(), r();
            }
          );
        }, []);
        let p = [
            ["request", "llama-3.3-70b:private", 1],
            ["tee", "intel tdx + nvidia cc", 2],
            ["nonce", `${h.nonce} \xb7 bound`, 2],
            ["quote", (0, t.jsx)(s.Scramble, { text: h.quote }), 2],
            ["freshness", "attested 4 min ago", 2],
            ["router", "reads ordinary requests in memory", 3],
            [
              "receipt",
              (0, t.jsxs)(t.Fragment, {
                children: [
                  "attestation ",
                  (0, t.jsx)(s.Scramble, { text: h.quote }),
                ],
              }),
              4,
            ],
          ],
          m = d >= o;
        return (0, t.jsx)("section", {
          className: "section muted-surface",
          id: "privacy",
          children: (0, t.jsxs)("div", {
            className: "container split",
            children: [
              (0, t.jsxs)("div", {
                className: "split-copy",
                children: [
                  (0, t.jsxs)("div", {
                    "data-reveal": !0,
                    children: [
                      (0, t.jsx)("span", {
                        className: "eyebrow tick",
                        children: "Privacy / attested routes",
                      }),
                      (0, t.jsx)("h2", {
                        className: "h2",
                        children: "Privacy with a receipt.",
                      }),
                      (0, t.jsx)("p", {
                        className: "lede",
                        children:
                          "A private request goes only to a provider whose TEE evidence was verified minutes ago. If the evidence is missing or stale, the request fails closed.",
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "points",
                    "data-stagger": !0,
                    children: r.map(([e, a]) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: "point",
                          "data-reveal": !0,
                          children: [
                            (0, t.jsx)("i", { "aria-hidden": "true" }),
                            (0, t.jsx)("h3", { children: e }),
                            (0, t.jsx)("p", { children: a }),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                  (0, t.jsxs)("p", {
                    "data-reveal": !0,
                    style: { marginTop: 24 },
                    children: [
                      (0, t.jsx)("a", {
                        className: "inline-link",
                        href: "/verify/",
                        children:
                          "Check what the router has verified about any provider",
                      }),
                      " · ",
                      (0, t.jsx)("a", {
                        className: "inline-link",
                        href: "/docs/#e2ee-phala",
                        children: "Encrypted chat",
                      }),
                      " · ",
                      (0, t.jsx)("a", {
                        className: "inline-link",
                        href: "/keep/",
                        children: "What we keep",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                "data-reveal": !0,
                children: (0, t.jsxs)("div", {
                  ref: e,
                  className: "attest" + (m ? " done" : ""),
                  role: "figure",
                  "aria-label":
                    "Example private route: attestation checks from request to signed receipt",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "panel-bar",
                      children: [
                        (0, t.jsx)("span", {
                          children: "Private route · example",
                        }),
                        (0, t.jsx)("span", { children: "fail-closed" }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "attest-steps",
                      role: "list",
                      children: i.map((e, a) =>
                        (0, t.jsx)(
                          "div",
                          {
                            role: "listitem",
                            className: d > a ? "on" : "",
                            children: e,
                          },
                          e
                        )
                      ),
                    }),
                    (0, t.jsxs)("div", {
                      className: "attest-body shielded",
                      children: [
                        (0, t.jsxs)("svg", {
                          className: "shield",
                          viewBox: "0 0 48 48",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          "aria-hidden": "true",
                          children: [
                            (0, t.jsx)("path", {
                              d: "M24 5.5l15 6v11.5c0 9.3-6.4 16.3-15 19.5C15.4 39.3 9 32.3 9 23V11.5z",
                            }),
                            (0, t.jsx)("path", {
                              className: "check",
                              d: "M17.5 24l4.5 4.5 9-10",
                              pathLength: "1",
                            }),
                          ],
                        }),
                        (0, t.jsx)("dl", {
                          children: p.map(([e, a, s]) => {
                            let r = d < s;
                            return (0, t.jsxs)(
                              "div",
                              {
                                className: "attest-row" + (r ? " wait" : ""),
                                children: [
                                  (0, t.jsx)("dt", { children: e }),
                                  (0, t.jsx)("dd", {
                                    children: r ? "pending" : a,
                                  }),
                                ],
                              },
                              e
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "verdict" + (m ? " ok" : ""),
                      children: [
                        (0, t.jsx)("i", {
                          "aria-hidden": "true",
                          children: "✓",
                        }),
                        (0, t.jsx)("span", {
                          children: m
                            ? "Attestation verified · route allowed"
                            : "Verifying attestation…",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      },
    ]);
  },
  41670,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248),
      s = e.i(92882);
    let r = [
      {
        tag: "Routing",
        title: "Standard inference",
        attrs: ["Model preferences", "Price or latency sort", "USDG"],
        label: "chat/completions",
        code: `const res = await client.chat.completions.create({
  model: "meta-llama/llama-3.3-70b-instruct",
  messages,
  provider: { sort: "price", allow_fallbacks: true },
});

res.provider;        // who served it
res.usage.cost;      // what it cost, in USDG
res.receipt.sig;     // Ed25519, anchored hourly`,
        flow: [
          ["Filter", "health, price, data policy"],
          ["Route", "best provider, fallbacks ready"],
          ["Receipt", "signed, itemized, anchored"],
        ],
      },
      {
        tag: "Privacy",
        title: "Attested private route",
        attrs: ["TEE evidence", "Fail-closed", "Receipt"],
        label: "private route",
        code: `const res = await client.chat.completions.create({
  model: "meta-llama/llama-3.3-70b-instruct:private",
  messages,
});

// Only freshly attested TEE providers qualify.
res.receipt.payload.attestation;  // quote hash
res.provider;                      // the attested host`,
        flow: [
          ["Attest", "TDX quote + GPU evidence"],
          ["Select", "fresh attestations only"],
          ["Prove", "hash in the receipt"],
        ],
      },
      {
        tag: "Payments",
        title: "Stock Token payments",
        attrs: ["Daily cap", "Oracle fair value", "Exact units"],
        label: "pay with NVDA",
        code: `const res = await fetch(\`\${BASE}/chat/completions\`, {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${KEY}\`,
    "X-Pay-With": "NVDA",        // capped session
  },
  body: JSON.stringify({ model, messages }),
});
// receipt.paid_with -> { token, raw_units, fair_price }`,
        flow: [
          ["Accrue", "small calls add up"],
          ["Swap", "bounded, at fair value"],
          ["Allocate", "units per generation"],
        ],
      },
      {
        tag: "Encryption",
        title: "End-to-end encrypted chat",
        attrs: ["On-device encryption", "Attested gateway", "Ciphertext relay"],
        label: "encrypted chat path",
        code: `// The client encrypts on your device.
// AnyRoute's router forwards ciphertext to the attested gateway.
// The gateway handles inference and encrypts the response.
// Follow /docs/#e2ee-phala for the client flow.

// Other request paths are read in memory by the router.
// Attestation alone does not hide prompts from the router.`,
        flow: [
          ["Encrypt", "client on your device"],
          ["Forward", "ciphertext through the router"],
          ["Infer", "attested gateway"],
        ],
      },
    ];
    e.s([
      "default",
      0,
      function () {
        let [e, i] = (0, a.useState)(0),
          [n, l] = (0, a.useState)(r[0].code.length),
          [o, d] = (0, a.useState)(!1),
          [c, h] = (0, a.useState)(!1),
          u = (0, a.useRef)(null),
          p = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
          p.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
          let e = new IntersectionObserver(([e]) => h(e.isIntersecting), {
            threshold: 0.25,
          });
          return e.observe(u.current), () => e.disconnect();
        }, []),
          (0, a.useEffect)(() => {
            let t = r[e].code;
            if (p.current || !c) return void l(t.length);
            l(0);
            let a = 0,
              s,
              i = () => {
                l((a = Math.min(t.length, a + 3))),
                  a < t.length && (s = requestAnimationFrame(i));
              };
            return (
              (s = requestAnimationFrame(i)), () => cancelAnimationFrame(s)
            );
          }, [e, c]),
          (0, a.useEffect)(() => {
            if (o || !c || p.current) return;
            let e = setTimeout(() => i((e) => (e + 1) % r.length), 6500);
            return () => clearTimeout(e);
          }, [e, o, c]);
        let m = r[e],
          x = n >= m.code.length;
        return (0, t.jsx)("section", {
          className: "section muted-surface",
          id: "routes",
          ref: u,
          children: (0, t.jsxs)("div", {
            className: "container",
            children: [
              (0, t.jsxs)("div", {
                className: "section-head",
                "data-reveal": !0,
                children: [
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("span", {
                        className: "eyebrow",
                        children: "Route types",
                      }),
                      (0, t.jsxs)("h2", {
                        children: [
                          "One API.",
                          (0, t.jsx)("br", {}),
                          "Every kind of route.",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    className: "lede",
                    children:
                      "The same request shape reaches a standard model, an attested host or a Stock Token payment. Encrypted chat uses on-device encryption through the attested gateway; ordinary requests are read in memory by the router.",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "modes",
                "data-paused": o,
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                onFocus: () => d(!0),
                onBlur: () => d(!1),
                "data-reveal": !0,
                children: [
                  (0, t.jsxs)("div", {
                    className: "mode-tabs",
                    role: "tablist",
                    "aria-label": "Route types",
                    "aria-orientation": "vertical",
                    onKeyDown: (t) => {
                      if ("ArrowDown" !== t.key && "ArrowUp" !== t.key) return;
                      t.preventDefault();
                      let a =
                        (e + ("ArrowDown" === t.key ? 1 : r.length - 1)) %
                        r.length;
                      i(a), u.current.querySelectorAll("[role=tab]")[a].focus();
                    },
                    children: [
                      r.map((a, s) =>
                        (0, t.jsxs)(
                          "button",
                          {
                            className: "mode-tab",
                            role: "tab",
                            id: `mode-tab-${s}`,
                            "aria-controls": "mode-panel",
                            "aria-selected": s === e,
                            tabIndex: s === e ? 0 : -1,
                            onClick: () => i(s),
                            children: [
                              (0, t.jsxs)("span", {
                                className: "num",
                                children: ["0", s + 1],
                              }),
                              (0, t.jsx)("h3", { children: a.title }),
                              (0, t.jsx)("span", {
                                className: "tag",
                                children: a.tag,
                              }),
                              (0, t.jsx)("span", {
                                className: "attrs",
                                children: a.attrs.map((e) =>
                                  (0, t.jsx)("span", { children: e }, e)
                                ),
                              }),
                              s === e &&
                                (0, t.jsx)(
                                  "span",
                                  {
                                    className: "progress",
                                    "aria-hidden": "true",
                                  },
                                  e
                                ),
                            ],
                          },
                          a.title
                        )
                      ),
                      (0, t.jsxs)("div", {
                        style: { paddingTop: 28 },
                        children: [
                          (0, t.jsx)(s.Button, {
                            href: "/models/",
                            secondary: !0,
                            children: "Explore models",
                          }),
                          (0, t.jsx)("p", {
                            children: (0, t.jsx)("a", {
                              className: "inline-link",
                              href: "/docs/#e2ee-phala",
                              children: "Encrypted chat documentation",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "mode-panel",
                    role: "tabpanel",
                    id: "mode-panel",
                    "aria-labelledby": `mode-tab-${e}`,
                    children: [
                      (0, t.jsxs)("div", {
                        className: "code-bar",
                        children: [
                          (0, t.jsx)("span", { children: m.label }),
                          (0, t.jsx)(s.CopyButton, { text: m.code }),
                        ],
                      }),
                      (0, t.jsx)("pre", {
                        children: (0, t.jsxs)("code", {
                          children: [
                            (0, s.highlight)(m.code.slice(0, n)),
                            !x &&
                              (0, t.jsx)("span", {
                                className: "caret",
                                "aria-hidden": "true",
                              }),
                          ],
                        }),
                      }),
                      (0, t.jsx)(
                        "div",
                        {
                          className: "mode-flow",
                          children: m.flow.map(([e, a], s) =>
                            (0, t.jsxs)(
                              "div",
                              {
                                style: { "--i": s },
                                children: [(0, t.jsx)("b", { children: e }), a],
                              },
                              e
                            )
                          ),
                        },
                        e
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      },
    ]);
  },
]);
