(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  28644,
  (e) => {
    e.v({
      actions: "Arena-module__15hPmG__actions",
      arena: "Arena-module__15hPmG__arena",
      badges: "Arena-module__15hPmG__badges",
      bar: "Arena-module__15hPmG__bar",
      blink: "Arena-module__15hPmG__blink",
      cap: "Arena-module__15hPmG__cap",
      caret: "Arena-module__15hPmG__caret",
      checks: "Arena-module__15hPmG__checks",
      closed: "Arena-module__15hPmG__closed",
      count: "Arena-module__15hPmG__count",
      cta: "Arena-module__15hPmG__cta",
      drift: "Arena-module__15hPmG__drift",
      fine: "Arena-module__15hPmG__fine",
      ghost: "Arena-module__15hPmG__ghost",
      glow: "Arena-module__15hPmG__glow",
      grid: "Arena-module__15hPmG__grid",
      head: "Arena-module__15hPmG__head",
      hint: "Arena-module__15hPmG__hint",
      hintLine: "Arena-module__15hPmG__hintLine",
      inner: "Arena-module__15hPmG__inner",
      kicker: "Arena-module__15hPmG__kicker",
      lane: "Arena-module__15hPmG__lane",
      laneError: "Arena-module__15hPmG__laneError",
      laneHead: "Arena-module__15hPmG__laneHead",
      lanes: "Arena-module__15hPmG__lanes",
      linkNote: "Arena-module__15hPmG__linkNote",
      list: "Arena-module__15hPmG__list",
      mode: "Arena-module__15hPmG__mode",
      more: "Arena-module__15hPmG__more",
      none: "Arena-module__15hPmG__none",
      notice: "Arena-module__15hPmG__notice",
      output: "Arena-module__15hPmG__output",
      panel: "Arena-module__15hPmG__panel",
      pick: "Arena-module__15hPmG__pick",
      picker: "Arena-module__15hPmG__picker",
      pop: "Arena-module__15hPmG__pop",
      prompt: "Arena-module__15hPmG__prompt",
      proof: "Arena-module__15hPmG__proof",
      proofLinks: "Arena-module__15hPmG__proofLinks",
      remove: "Arena-module__15hPmG__remove",
      reserve: "Arena-module__15hPmG__reserve",
      search: "Arena-module__15hPmG__search",
      stats: "Arena-module__15hPmG__stats",
      sweep: "Arena-module__15hPmG__sweep",
      switch: "Arena-module__15hPmG__switch",
      switchBtn: "Arena-module__15hPmG__switchBtn",
      switchText: "Arena-module__15hPmG__switchText",
      tag: "Arena-module__15hPmG__tag",
      ticking: "Arena-module__15hPmG__ticking",
      wait: "Arena-module__15hPmG__wait",
      why: "Arena-module__15hPmG__why",
      wide: "Arena-module__15hPmG__wide",
    });
  },
  19059,
  (e) => {
    "use strict";
    var t = e.i(71682),
      r = e.i(98248),
      a = e.i(4581),
      n = e.i(98208),
      s = e.i(78182),
      i = e.i(92882),
      o = e.i(28644);
    let l = (...e) => e.filter(Boolean).join(" "),
      d = (e) =>
        [...e, ...Array(Math.max(0, n.MIN_LANES - e.length)).fill(null)].map(
          n.blankLane
        ),
      c = [
        ["first", "First token"],
        ["fastest", "Fastest"],
        ["cheapest", "Cheapest"],
      ];
    function u({
      index: e,
      models: a,
      ready: s,
      value: i,
      taken: l,
      disabled: d,
      onPick: c,
    }) {
      let [h, p] = (0, r.useState)(!1),
        [m, f] = (0, r.useState)(""),
        g = (0, r.useRef)(null),
        y = (0, r.useRef)(null),
        _ = (0, r.useRef)(null),
        v = (0, r.useId)(),
        k = a.find((e) => e.id === i),
        { items: b, total: w } = (0, r.useMemo)(
          () => (h ? (0, n.filterModels)(a, m) : { items: [], total: 0 }),
          [h, a, m]
        ),
        x = (e) => {
          p(!1), f(""), e && y.current?.focus();
        };
      (0, r.useEffect)(() => {
        if (!h) return;
        _.current?.focus();
        let e = (e) => {
          g.current?.contains(e.target) || x(!1);
        };
        return (
          document.addEventListener("pointerdown", e),
          () => document.removeEventListener("pointerdown", e)
        );
      }, [h]);
      let A = (e) => {
        c(e.id), x(!0);
      };
      return (0, t.jsxs)("div", {
        className: o.default.picker,
        ref: g,
        onKeyDown: (e) =>
          "Escape" === e.key && h && (e.stopPropagation(), x(!0)),
        children: [
          (0, t.jsxs)("button", {
            ref: y,
            type: "button",
            className: o.default.pick,
            disabled: d || !s,
            "aria-expanded": h,
            "aria-controls": h ? v : void 0,
            onClick: () => p(!h),
            children: [
              (0, t.jsx)("small", {
                children: i
                  ? k?.author || "Model"
                  : s
                  ? "Lane " + (e + 1)
                  : "Loading models",
              }),
              (0, t.jsx)("span", {
                children: k?.name || i || (s ? "Choose a model" : "…"),
              }),
              (0, t.jsx)("i", {
                "aria-hidden": "true",
                children: h ? "−" : "+",
              }),
            ],
          }),
          h &&
            (0, t.jsxs)("div", {
              className: o.default.panel,
              id: v,
              children: [
                (0, t.jsx)("input", {
                  ref: _,
                  type: "search",
                  className: o.default.search,
                  placeholder: "Search models…",
                  "aria-label": `Search models for lane ${e + 1}`,
                  value: m,
                  onChange: (e) => f(e.target.value),
                  onKeyDown: (e) => {
                    let t = b.find((e) => !l.has(e.id));
                    "Enter" === e.key && t && (e.preventDefault(), A(t));
                  },
                }),
                (0, t.jsxs)("ul", {
                  className: o.default.list,
                  children: [
                    b.map((e) =>
                      (0, t.jsx)(
                        "li",
                        {
                          children: (0, t.jsxs)("button", {
                            type: "button",
                            disabled: l.has(e.id),
                            "aria-current": e.id === i ? "true" : void 0,
                            onClick: () => A(e),
                            children: [
                              (0, t.jsx)("span", { children: e.name }),
                              (0, t.jsx)("small", {
                                children:
                                  l.has(e.id) && e.id !== i
                                    ? "in another lane"
                                    : e.id,
                              }),
                              !0 === e.gpuAttested &&
                                (0, t.jsx)("em", {
                                  className: o.default.tag,
                                  title:
                                    "The router’s most recent verified receipt for this model asserted GPU attestation.",
                                  children: "GPU attested",
                                }),
                            ],
                          }),
                        },
                        e.id
                      )
                    ),
                    !b.length &&
                      (0, t.jsxs)("li", {
                        className: o.default.none,
                        children: ["No model matches “", m, "”."],
                      }),
                  ],
                }),
                w > b.length &&
                  (0, t.jsxs)("p", {
                    className: o.default.more,
                    children: [
                      "Showing ",
                      b.length,
                      " of ",
                      w,
                      ". Keep typing to narrow the list.",
                    ],
                  }),
              ],
            }),
        ],
      });
    }
    let h = { yes: "✓", no: "×", unknown: "?" };
    function p({ proof: e, receiptId: r }) {
      let a = e.provider ? (0, s.verifyHref)(e.provider) : null;
      return (0, t.jsxs)("div", {
        className: o.default.proof,
        "data-attested": e.attested ? "yes" : "no",
        role: "group",
        "aria-label": "Proof from the signed receipt",
        children: [
          (0, t.jsx)("ul", {
            className: o.default.checks,
            children: e.checks.map((e) =>
              (0, t.jsxs)(
                "li",
                {
                  "data-state": e.state,
                  children: [
                    (0, t.jsx)("span", {
                      "aria-hidden": "true",
                      children: h[e.state],
                    }),
                    e.text,
                  ],
                },
                e.key
              )
            ),
          }),
          e.reason &&
            (0, t.jsxs)("p", {
              className: o.default.why,
              children: [e.reason, "."],
            }),
          (0, t.jsxs)("p", {
            className: o.default.proofLinks,
            children: [
              a && (0, t.jsx)("a", { href: a, children: "Verify provider →" }),
              r &&
                (0, t.jsx)("a", {
                  href: (0, n.receiptHref)(r),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Signed receipt ↗",
                }),
            ],
          }),
          (0, t.jsx)("p", {
            className: o.default.fine,
            children: e.gateway
              ? "Read from the receipt’s gateway record."
              : "This provider is attested directly; its receipt has no gateway record, so GPU and TCB status are not part of it.",
          }),
        ],
      });
    }
    function m({
      lane: e,
      index: a,
      elapsed: s,
      winners: i,
      reserve: d,
      picker: h,
      canRemove: f,
      onRemove: g,
      locked: y,
    }) {
      let _ = (0, r.useRef)(null),
        v = (0, r.useRef)(!0),
        k = "waiting" === e.status || "streaming" === e.status;
      (0, r.useEffect)(() => {
        let e = _.current;
        e && v.current && (e.scrollTop = e.scrollHeight);
      }, [e.text]);
      let b = (0, n.tokensPerSecond)(e.tokens, e.ttft, e.total),
        w = c.filter(([e]) => i[e].includes(a)),
        x = e.model
          ? "answer from " +
            (h.models.find((t) => t.id === e.model)?.name || e.model)
          : "answer, no model chosen";
      return (0, t.jsxs)("article", {
        className: o.default.lane,
        "data-status": e.status,
        "aria-label": "Lane " + (a + 1),
        children: [
          (0, t.jsxs)("div", {
            className: o.default.laneHead,
            children: [
              (0, t.jsx)(u, { index: a, ...h, value: e.model, disabled: y }),
              f &&
                (0, t.jsx)("button", {
                  type: "button",
                  className: o.default.remove,
                  disabled: y,
                  "aria-label": "Remove lane " + (a + 1),
                  onClick: g,
                  children: "×",
                }),
            ],
          }),
          (0, t.jsx)("ul", {
            className: l(o.default.badges, d && o.default.reserve),
            "aria-label": "Results",
            children: w.map(([e, r]) =>
              (0, t.jsx)("li", { "data-badge": e, children: r }, e)
            ),
          }),
          (0, t.jsxs)("div", {
            ref: _,
            className: l(
              o.default.output,
              "streaming" === e.status && o.default.caret
            ),
            tabIndex: 0,
            role: "region",
            "aria-label": x,
            "aria-busy": k,
            onScroll: (e) => {
              let t = e.currentTarget;
              v.current = t.scrollHeight - t.scrollTop - t.clientHeight < 28;
            },
            children: [
              e.text
                ? e.text
                : "waiting" === e.status
                ? (0, t.jsx)("span", {
                    className: o.default.wait,
                    children: "Routing…",
                  })
                : "idle" === e.status
                ? (0, t.jsx)("span", {
                    className: o.default.hint,
                    children: "The answer streams here.",
                  })
                : null,
              e.error &&
                (0, t.jsxs)("p", {
                  className: o.default.laneError,
                  role: "error" === e.status ? "alert" : void 0,
                  children: [
                    (0, n.isFailClosed)(e.errorType) &&
                      (0, t.jsx)("b", {
                        className: o.default.closed,
                        children: "Failed closed ",
                      }),
                    e.error,
                    " ",
                    "insufficient_credits" === e.errorType &&
                      (0, t.jsx)("a", {
                        href: "/dashboard/",
                        children: "Add funds in the dashboard →",
                      }),
                  ],
                }),
            ],
          }),
          e.proof && (0, t.jsx)(p, { proof: e.proof, receiptId: e.receiptId }),
          (0, t.jsxs)("dl", {
            className: o.default.stats,
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "First token" }),
                  (0, t.jsx)("dd", {
                    children: (0, n.formatMs)(e.ttft ?? NaN),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Total" }),
                  (0, t.jsx)("dd", {
                    className: k ? o.default.ticking : void 0,
                    children: (0, n.formatMs)(
                      k ? s : "error" === e.status ? NaN : e.total ?? NaN
                    ),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Tokens" }),
                  (0, t.jsxs)("dd", {
                    children: [
                      null == e.tokens
                        ? "—"
                        : ("streaming" === e.status ? "~" : "") +
                          e.tokens.toLocaleString("en-US"),
                      b
                        ? (0, t.jsxs)("small", {
                            children: [" · ", Math.round(b), "/s"],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Cost" }),
                  (0, t.jsx)("dd", {
                    children: (0, n.formatUsd)(e.cost ?? NaN),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: o.default.wide,
                children: [
                  (0, t.jsx)("dt", { children: "Receipt" }),
                  (0, t.jsx)("dd", {
                    children: e.receiptId
                      ? (0, t.jsxs)("a", {
                          href: (0, n.receiptHref)(e.receiptId),
                          target: "_blank",
                          rel: "noopener noreferrer",
                          title: e.receiptId,
                          children: [(0, n.shortId)(e.receiptId), " ↗"],
                        })
                      : "—",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    e.s([
      "default",
      0,
      function () {
        let [e, s] = (0, r.useState)(""),
          [l, c] = (0, r.useState)(() => d([])),
          [u, h] = (0, r.useState)(n.DEFAULT_MAX_TOKENS),
          [p, f] = (0, r.useState)(null),
          [g, y] = (0, r.useState)(""),
          [_, v] = (0, r.useState)(!1),
          [k, b] = (0, r.useState)(null),
          [w, x] = (0, r.useState)(""),
          [A, j] = (0, r.useState)("checking"),
          [N, S] = (0, r.useState)(""),
          [P, T] = (0, r.useState)(null),
          [$, E] = (0, r.useState)(!1),
          [C, G] = (0, r.useState)(0),
          [I, M] = (0, r.useState)(""),
          [R, L] = (0, r.useState)(""),
          [U, O] = (0, r.useState)(""),
          F = (0, r.useRef)(null),
          B = (0, r.useRef)(0),
          K = (0, r.useRef)({}),
          D = (0, r.useRef)(0),
          q = (0, r.useRef)([]),
          H = (0, r.useRef)(!1);
        (0, r.useEffect)(() => {
          let e = (0, n.decodeArena)(location.search);
          (q.current = e.models),
            e.attested && v(!0),
            e.prompt && s(e.prompt),
            e.models.length && c(d(e.models));
          let t = (0, a.loadKey)();
          return (
            (0, a.validKey)(t) ? (S(t), j("ready")) : j("none"),
            () => {
              F.current?.abort(), cancelAnimationFrame(D.current);
            }
          );
        }, []);
        let X = () => {
          y(""),
            (0, a.api)("/api/v1/models")
              .then((e) => f((0, n.chatModels)(e.data.map(a.toCatalogModel))))
              .catch((e) => y(e.message));
        };
        (0, r.useEffect)(X, []);
        let z = () => {
          x(""),
            (0, a.api)("/api/v1/models?lane=attested")
              .then((e) => b((0, n.attestedCatalog)(e.data)))
              .catch((e) => x(e.message));
        };
        (0, r.useEffect)(z, []);
        let W = _ ? k : p;
        (0, r.useEffect)(() => {
          if (!W) return;
          let e = new Set(W.map((e) => e.id)),
            t = l.filter((t) => t.model && !e.has(t.model)).map((e) => e.model),
            r = q.current.some((e) => t.includes(e));
          if (((q.current = []), !t.length)) return;
          let a = t.length;
          L(
            _
              ? `${a} model${1 === a ? "" : "s"}${r ? " from this link" : ""} ${
                  1 === a ? "has" : "have"
                } no attested endpoint right now, so ${
                  1 === a ? "its lane was" : "their lanes were"
                } cleared. Choose from the attested models.`
              : `${a} model${1 === a ? "" : "s"} from this link ${
                  1 === a ? "is" : "are"
                } not in the live catalog right now. Choose another to fill ${
                  1 === a ? "its" : "their"
                } lane.`
          ),
            c((e) =>
              e.map((e) =>
                e.model && t.includes(e.model) ? (0, n.blankLane)(null) : e
              )
            );
        }, [W, _]),
          (0, r.useEffect)(() => {
            if ("ready" !== A) return;
            let e = !0;
            return (
              (0, a.api)("/api/v1/credits", { key: N })
                .then((t) => e && T(Number(t.data?.available)))
                .catch((t) => {
                  e && (401 === t.status || 403 === t.status) && j("rejected");
                }),
              () => {
                e = !1;
              }
            );
          }, [A, N]),
          (0, r.useEffect)(() => {
            if (!$) return;
            let e = setInterval(() => G(performance.now() - B.current), 100);
            return () => clearInterval(e);
          }, [$]);
        let Z = W || [],
          J = l.filter((e) => e.model),
          V = J.map((e) => Z.find((t) => t.id === e.model)).filter(Boolean),
          Y = (0, r.useMemo)(
            () =>
              $
                ? { first: [], fastest: [], cheapest: [] }
                : (0, n.pickWinners)(l),
            [$, l]
          ),
          Q = (0, r.useMemo)(
            () => new Set(l.map((e) => e.model).filter(Boolean)),
            [l]
          ),
          ee = V.length ? (0, n.estimateCeiling)(V, e, u) : 0,
          et =
            "ready" !== A
              ? "Add an API key to race."
              : e.trim()
              ? J.length < n.MIN_LANES
                ? "Choose at least two models."
                : ""
              : "Write a prompt to race.";
        (0, r.useEffect)(() => {
          $ ||
            !H.current ||
            (O(
              "Race finished. " +
                [
                  ["Fastest", Y.fastest],
                  ["Cheapest", Y.cheapest],
                  ["First token", Y.first],
                ]
                  .filter(([, e]) => e.length)
                  .map(
                    ([e, t]) =>
                      `${e}: ${t
                        .map(
                          (e) =>
                            Z.find((t) => t.id === l[e]?.model)?.name ||
                            l[e]?.model
                        )
                        .join(" and ")}.`
                  )
                  .join(" ")
            ),
            (H.current = !1));
        }, [$]);
        let er = () => {
          D.current = 0;
          let e = K.current;
          (K.current = {}),
            c((t) => t.map((t, r) => (e[r] ? { ...t, ...e[r] } : t)));
        };
        async function ea() {
          if ($ || et) return;
          let t = new AbortController();
          F.current = t;
          let r = performance.now();
          (B.current = r),
            (H.current = !0),
            G(0),
            O(
              "Race started with " +
                J.length +
                " models" +
                (_ ? " on the attested lane." : ".")
            ),
            M(""),
            c((e) =>
              e.map((e) =>
                e.model
                  ? { ...(0, n.blankLane)(e.model), status: "waiting" }
                  : e
              )
            ),
            E(!0),
            await Promise.all(
              l.map((a, s) =>
                a.model
                  ? (0, n.raceLane)({
                      model: a.model,
                      prompt: e.trim(),
                      maxTokens: u,
                      key: N,
                      signal: t.signal,
                      attested: _,
                      t0: r,
                      onUpdate: (e) => {
                        (K.current[s] = { ...K.current[s], ...e }),
                          "streaming" === e.status
                            ? !D.current &&
                              (D.current = requestAnimationFrame(er))
                            : (cancelAnimationFrame(D.current), er());
                      },
                    })
                  : null
              )
            ),
            E(!1);
        }
        async function en() {
          let { query: t, trimmed: r } = (0, n.encodeArena)({
              prompt: e,
              models: J.map((e) => e.model),
              attested: _,
            }),
            a = location.origin + location.pathname + t;
          try {
            history.replaceState(null, "", location.pathname + t);
          } catch {}
          let s = r
            ? "Link copied. The prompt was trimmed to fit."
            : "Link copied.";
          try {
            await navigator.clipboard.writeText(a);
          } catch {
            s = "The link is in your address bar. Copy it from there.";
          }
          M(t ? s : "Nothing to share yet: write a prompt or choose models.");
        }
        let es = _ ? w : g;
        return (0, t.jsxs)("section", {
          className: o.default.arena,
          "aria-labelledby": "arena-title",
          children: [
            (0, t.jsx)("div", {
              className: o.default.grid,
              "aria-hidden": "true",
            }),
            (0, t.jsx)("div", {
              className: o.default.glow,
              "aria-hidden": "true",
            }),
            (0, t.jsxs)("div", {
              className: o.default.inner,
              children: [
                (0, t.jsxs)("header", {
                  className: o.default.head,
                  children: [
                    (0, t.jsxs)("span", {
                      className: o.default.kicker,
                      children: [
                        (0, t.jsx)("b", { children: "▲" }),
                        " Model Arena · live race",
                      ],
                    }),
                    (0, t.jsxs)("h1", {
                      id: "arena-title",
                      children: [
                        "One prompt.",
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)("em", { children: "Every model, live." }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      children:
                        "Race the same prompt across two to four models. Tokens stream side by side, and every answer ends with its time to first token, total time, cost and a signed receipt.",
                    }),
                  ],
                }),
                ("none" === A || "rejected" === A) &&
                  (0, t.jsxs)("div", {
                    className: o.default.cta,
                    role: "region",
                    "aria-label": "API key required",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("strong", {
                            children:
                              "rejected" === A
                                ? "This tab’s API key was rejected."
                                : "A funded API key runs the race.",
                          }),
                          (0, t.jsxs)("p", {
                            children: [
                              "rejected" === A
                                ? "Add a valid key or fund the workspace"
                                : "Add a key or fund one in the dashboard",
                              ", then return here. Your key stays in this browser tab and is only ever sent to the Anyroute API.",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(i.Button, {
                        href: "/dashboard/",
                        light: !0,
                        children: "Add or fund a key",
                      }),
                    ],
                  }),
                "ready" === A &&
                  null !== P &&
                  P <= 0 &&
                  (0, t.jsxs)("div", {
                    className: o.default.cta,
                    role: "region",
                    "aria-label": "Balance",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("strong", {
                            children: "This key has no balance.",
                          }),
                          (0, t.jsx)("p", {
                            children:
                              "Each answer is billed per call at catalog prices. Fund the key to race.",
                          }),
                        ],
                      }),
                      (0, t.jsx)(i.Button, {
                        href: "/dashboard/",
                        light: !0,
                        children: "Fund in dashboard",
                      }),
                    ],
                  }),
                es &&
                  (0, t.jsxs)("div", {
                    className: o.default.cta,
                    role: "alert",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("strong", {
                            children: _
                              ? "The attested model list could not load."
                              : "The model list could not load.",
                          }),
                          (0, t.jsx)("p", { children: es }),
                        ],
                      }),
                      (0, t.jsx)(i.Button, {
                        secondary: !0,
                        onClick: _ ? z : X,
                        children: "Retry",
                      }),
                    ],
                  }),
                R &&
                  (0, t.jsx)("p", { className: o.default.notice, children: R }),
                _ &&
                  k &&
                  !k.length &&
                  (0, t.jsx)("p", {
                    className: o.default.notice,
                    children:
                      "No model has an attested endpoint right now, so there is nothing to race in this mode.",
                  }),
                (0, t.jsxs)("div", {
                  className: o.default.prompt,
                  children: [
                    (0, t.jsx)("label", {
                      htmlFor: "arena-prompt",
                      children: "Prompt",
                    }),
                    (0, t.jsx)("textarea", {
                      id: "arena-prompt",
                      value: e,
                      maxLength: n.MAX_PROMPT,
                      rows: 4,
                      placeholder:
                        "Explain how a Merkle proof works in three sentences.",
                      disabled: $,
                      onChange: (e) => s(e.target.value),
                      onKeyDown: (e) => {
                        "Enter" === e.key &&
                          (e.metaKey || e.ctrlKey) &&
                          (e.preventDefault(), ea());
                      },
                    }),
                    (0, t.jsxs)("span", {
                      className: o.default.count,
                      children: [
                        e.length.toLocaleString("en-US"),
                        " / ",
                        n.MAX_PROMPT.toLocaleString("en-US"),
                        " · Ctrl/⌘ + Enter races",
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: o.default.mode,
                  children: [
                    (0, t.jsxs)("button", {
                      type: "button",
                      role: "switch",
                      "aria-checked": _,
                      "aria-describedby": "arena-attested-note",
                      className: o.default.switchBtn,
                      disabled: $,
                      onClick: function () {
                        if ($) return;
                        let e = !_;
                        v(e),
                          L(""),
                          M(""),
                          c((e) => e.map((e) => (0, n.blankLane)(e.model))),
                          O(
                            e
                              ? "Attested only is on. Model lists show models with an attested endpoint."
                              : "Attested only is off."
                          );
                      },
                      children: [
                        (0, t.jsx)("span", {
                          className: o.default.switch,
                          "aria-hidden": "true",
                        }),
                        (0, t.jsxs)("span", {
                          className: o.default.switchText,
                          children: [
                            (0, t.jsx)("b", { children: "Attested only" }),
                            (0, t.jsx)("small", {
                              id: "arena-attested-note",
                              children:
                                "Models with an attested endpoint. Every lane asks for the attested lane and fails rather than fall back.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.PRESETS.map((e) =>
                      (0, t.jsx)(
                        "button",
                        {
                          type: "button",
                          className: o.default.ghost,
                          disabled: $ || !k,
                          onClick: () =>
                            (function (e) {
                              if ($ || !k) return;
                              let { models: t, missing: r } = (0,
                              n.presetLanes)(e, k);
                              t.length
                                ? (v(!0 === e.attested),
                                  c(d(t)),
                                  M(""),
                                  L(
                                    r.length
                                      ? `${t.length} of ${e.models.length} ${
                                          e.label
                                        } models have an attested endpoint right now. Without one: ${r.join(
                                          ", "
                                        )}.`
                                      : ""
                                  ),
                                  O(
                                    `${e.label}: ${t
                                      .map(
                                        (e) =>
                                          k.find((t) => t.id === e)?.name || e
                                      )
                                      .join(", ")}.`
                                  ))
                                : L(
                                    `None of the ${e.label} models has an attested endpoint right now.`
                                  );
                            })(e),
                          children: e.label,
                        },
                        e.id
                      )
                    ),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: o.default.lanes,
                  "data-lanes": l.length,
                  children: l.map((e, r) => {
                    let a;
                    return (0, t.jsx)(
                      m,
                      {
                        lane: e,
                        index: r,
                        elapsed: C,
                        winners: Y,
                        reserve: Object.values(Y).some((e) => e.length > 0),
                        picker: {
                          models: Z,
                          ready: !!W,
                          taken: Q,
                          onPick: (e) => {
                            let t;
                            return (
                              (t = a),
                              c((r) =>
                                r.map((r, a) =>
                                  a === t ? (0, n.blankLane)(e) : r
                                )
                              )
                            );
                          },
                          index: (a = r),
                        },
                        locked: $,
                        canRemove: l.length > n.MIN_LANES,
                        onRemove: () =>
                          c((e) =>
                            e.length > n.MIN_LANES
                              ? e.filter((e, t) => t !== r)
                              : e
                          ),
                      },
                      r
                    );
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: o.default.bar,
                  children: [
                    (0, t.jsxs)("div", {
                      className: o.default.actions,
                      children: [
                        $
                          ? (0, t.jsx)(i.Button, {
                              secondary: !0,
                              onClick: () => F.current?.abort(),
                              children: "Stop",
                            })
                          : (0, t.jsx)(i.Button, {
                              light: !0,
                              onClick: ea,
                              disabled: !!et,
                              "aria-describedby": "arena-hint",
                              children: "Race",
                            }),
                        (0, t.jsx)("button", {
                          type: "button",
                          className: o.default.ghost,
                          onClick: en,
                          children: "Copy link",
                        }),
                        (0, t.jsx)("button", {
                          type: "button",
                          className: o.default.ghost,
                          onClick: () =>
                            c((e) =>
                              e.length < n.MAX_LANES
                                ? [...e, (0, n.blankLane)(null)]
                                : e
                            ),
                          disabled: $ || l.length >= n.MAX_LANES,
                          children: "+ Add lane",
                        }),
                        (0, t.jsxs)("label", {
                          className: o.default.cap,
                          children: [
                            (0, t.jsx)("span", { children: "Answer cap" }),
                            (0, t.jsx)("select", {
                              value: u,
                              disabled: $,
                              onChange: (e) => h(Number(e.target.value)),
                              children: n.TOKEN_CAPS.map((e) =>
                                (0, t.jsxs)(
                                  "option",
                                  {
                                    value: e,
                                    children: [
                                      e.toLocaleString("en-US"),
                                      " tokens",
                                    ],
                                  },
                                  e
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("p", {
                      className: o.default.hintLine,
                      id: "arena-hint",
                      children: [
                        $
                          ? "Racing…"
                          : et ||
                            (ee > 0
                              ? `Worst case about ${(0, n.formatUsd)(
                                  ee
                                )} if every answer hits its cap. Billed per call from your key’s balance.`
                              : "Billed per call from your key’s balance."),
                        _ && !$ && !et && " A withheld answer is still billed.",
                        I &&
                          (0, t.jsxs)("span", {
                            className: o.default.linkNote,
                            children: [" ", I],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className: "sr-only",
                  role: "status",
                  children: U,
                }),
              ],
            }),
          ],
        });
      },
    ]);
  },
  98208,
  (e) => {
    "use strict";
    var t = e.i(4581),
      r = e.i(78182);
    let a = /^[A-Za-z0-9][A-Za-z0-9._\-:/@~+]{0,119}$/,
      n = /sk-ar-v1-[0-9a-f]{64}/gi,
      s = (e) => String(e ?? "").replace(n, "[key removed]"),
      i = (e) => (e || []).filter((e) => e && "Embeddings" !== e.type),
      o = (e) => Math.ceil(String(e || "").length / 4),
      l = new Set([
        "no_attested_endpoint",
        "lane_unavailable",
        "disclosure_unavailable",
        "disclosure_provider_unavailable",
        "upstream_not_attested",
      ]),
      d = (e) => l.has(String(e || "")),
      c = { asserted: "yes", refuted: "no" },
      u = (e) => (e && "string" == typeof e.status && c[e.status]) || "unknown",
      h = {
        yes: "TEE attested",
        no: "TEE not attested",
        unknown: "TEE status not reported",
      },
      p = {
        yes: "GPU attested",
        no: "GPU not attested",
        unknown: "GPU status not reported",
      },
      m = {
        yes: "TCB up to date",
        no: "TCB out of date",
        unknown: "TCB status not reported",
      };
    async function f({
      model: e,
      prompt: a,
      maxTokens: n = 1024,
      key: s,
      signal: i,
      attested: l = !1,
      stream: c = t.streamChat,
      now: g = () => performance.now(),
      t0: y = g(),
      onUpdate: _ = () => {},
    }) {
      let v = null,
        k = "",
        b = (e) =>
          l
            ? (function (e) {
                let t = e && "object" == typeof e ? e.payload : null;
                if (!t || "object" != typeof t) return null;
                let a =
                    t.upstream_attestation &&
                    "object" == typeof t.upstream_attestation
                      ? t.upstream_attestation
                      : null,
                  n = !0 === t.attestation_simulated,
                  s =
                    "attested" === t.disclosure &&
                    "string" == typeof t.attestation &&
                    "" !== t.attestation &&
                    !n &&
                    (!a || !0 === a.attested),
                  i = [
                    {
                      key: "provider",
                      state: s ? "yes" : "no",
                      text: s
                        ? "Provider attested"
                        : n
                        ? "Provider evidence is development-only"
                        : "Provider not attested",
                    },
                  ];
                if (a) {
                  let e = !0 === a.receipt_verified,
                    t = e ? u(a.claims?.tee_attested) : "no",
                    r = e
                      ? !0 === a.gpu_attested
                        ? "yes"
                        : "unknown" === u(a.claims?.gpu_attested)
                        ? "unknown"
                        : "no"
                      : "no",
                    n = e ? u(a.claims?.tcb_up_to_date) : "unknown";
                  i.push(
                    { key: "tee", state: t, text: h[t] },
                    { key: "gpu", state: r, text: p[r] },
                    { key: "tcb", state: n, text: m[n] }
                  );
                }
                let o = null;
                return (
                  s ||
                    (o =
                      a && !0 !== a.attested
                        ? "string" == typeof a.reason && a.reason
                          ? a.reason
                          : "the gateway's receipt does not show an attested upstream"
                        : n
                        ? "the attestation evidence is development-only"
                        : "served under " +
                          ("string" == typeof t.disclosure && t.disclosure
                            ? t.disclosure
                            : "unknown") +
                          " retention"),
                  {
                    provider:
                      ("string" == typeof t.provider &&
                        t.provider &&
                        (0, r.providerIdFromSearch)(
                          "?p=" + encodeURIComponent(t.provider)
                        )) ||
                      null,
                    attested: s,
                    gateway: !!a,
                    checks: i,
                    reason: o,
                  }
                );
              })(e)
            : null;
      _({ status: "waiting" });
      try {
        let t = await c({
            key: s,
            signal: i,
            body: {
              model: e,
              messages: [{ role: "user", content: a }],
              max_tokens: n,
              ...(l ? { provider: { lane: "attested" } } : {}),
            },
            onDelta: (e) => {
              (k = e),
                null === v && (v = g() - y),
                _({ status: "streaming", text: e, ttft: v, tokens: o(e) });
            },
          }),
          r = g() - y,
          u = t.usage || {},
          h = l && d(t.error?.type) ? t.error : null,
          p = {
            status: h ? "error" : "done",
            text: h ? "" : t.text ?? k,
            ttft: h ? null : v,
            total: r,
            tokens: Number.isFinite(u.completion_tokens)
              ? u.completion_tokens
              : h
              ? null
              : o(t.text ?? k),
            cost: Number.isFinite(u.cost) ? u.cost : null,
            receiptId: t.receipt?.id || null,
            provider: t.provider || null,
            partial: !h && !!t.error,
            error: h
              ? h.message
              : t.error
              ? "The provider stopped mid-stream; the delivered part was billed."
              : "",
            errorType: h ? h.type : "",
            proof: b(t.receipt),
          };
        return _(p), p;
      } catch (a) {
        let e = g() - y,
          t = a?.name === "AbortError",
          r = {
            status: t ? "stopped" : "error",
            ttft: v,
            total: e,
            tokens: t ? o(k) : null,
            error: t
              ? "Stopped before the answer finished. The part already delivered is billed."
              : a?.message || "The route failed.",
            errorType: a?.type || "",
          };
        if (!t && a?.receipt?.id) {
          let e = a.usage || {};
          Object.assign(r, {
            receiptId: a.receipt.id,
            proof: b(a.receipt),
            cost: Number.isFinite(e.cost) ? e.cost : null,
            tokens: Number.isFinite(e.completion_tokens)
              ? e.completion_tokens
              : null,
          });
        }
        return _(r), r;
      }
    }
    e.s([
      "DEFAULT_MAX_TOKENS",
      0,
      1024,
      "MAX_LANES",
      0,
      4,
      "MAX_PROMPT",
      0,
      8e3,
      "MIN_LANES",
      0,
      2,
      "PRESETS",
      0,
      [
        {
          id: "frontier-attested",
          label: "Frontier, attested",
          attested: !0,
          models: [
            "moonshotai/kimi-k3",
            "deepseek/deepseek-v4-flash-0731",
            "z-ai/glm-5.3",
            "openai/gpt-oss-120b",
          ],
        },
      ],
      "TOKEN_CAPS",
      0,
      [256, 512, 1024, 2048],
      "attestedCatalog",
      0,
      function (e) {
        return i(
          (e || [])
            .filter(
              (e) =>
                e &&
                "string" == typeof e.id &&
                Number(e.disclosure?.endpoints?.attested) > 0
            )
            .map((e) => ({
              ...(0, t.toCatalogModel)(e),
              gpuAttested:
                "boolean" == typeof e.gpu_attested ? e.gpu_attested : null,
            }))
        );
      },
      "blankLane",
      0,
      (e) => ({
        model: e,
        status: "idle",
        text: "",
        ttft: null,
        total: null,
        tokens: null,
        cost: null,
        receiptId: null,
        provider: null,
        error: "",
        errorType: "",
        partial: !1,
        proof: null,
      }),
      "chatModels",
      0,
      i,
      "decodeArena",
      0,
      function (e = "") {
        let t;
        try {
          t = new URLSearchParams(String(e));
        } catch {
          return { prompt: "", models: [] };
        }
        let r = s(t.get("prompt") ?? "").slice(0, 8e3),
          n = [];
        for (let e of t.getAll("model")) {
          let t = e.trim();
          if ((a.test(t) && !n.includes(t) && n.push(t), 4 === n.length)) break;
        }
        return ["1", "true"].includes(
          (t.get("attested") ?? "").trim().toLowerCase()
        )
          ? { prompt: r, models: n, attested: !0 }
          : { prompt: r, models: n };
      },
      "encodeArena",
      0,
      function ({ prompt: e = "", models: t = [], attested: r = !1 } = {}) {
        let n = [
            ...new Set(
              (t || []).filter((e) => "string" == typeof e && a.test(e))
            ),
          ].slice(0, 4),
          i = s(e).trim(),
          o = i.length > 1200,
          l = [];
        for (let e of (i &&
          l.push("prompt=" + encodeURIComponent(o ? i.slice(0, 1200) : i)),
        !0 === r && l.push("attested=1"),
        n))
          l.push(
            "model=" +
              encodeURIComponent(e)
                .replace(/%2F/gi, "/")
                .replace(/%3A/gi, ":")
                .replace(/%40/gi, "@")
          );
        return { query: l.length ? "?" + l.join("&") : "", trimmed: o };
      },
      "estimateCeiling",
      0,
      function (e, t, r) {
        let a = o(t);
        return e.reduce(
          (e, t) =>
            e +
            (a * (Number(t?.price) || 0) + r * (Number(t?.output) || 0)) / 1e6,
          0
        );
      },
      "estimateTokens",
      0,
      o,
      "filterModels",
      0,
      function (e, t = "", r = 60) {
        let a = String(t).toLowerCase().split(/\s+/).filter(Boolean),
          n = [];
        return (
          e.forEach((e, t) => {
            let r = String(e.name || "").toLowerCase(),
              s = `${r} ${String(e.id).toLowerCase()} ${String(
                e.author || ""
              ).toLowerCase()}`;
            if (!a.every((e) => s.includes(e))) return;
            let i =
              a.length && r.startsWith(a[0])
                ? 0
                : a.length &&
                  String(e.id)
                    .toLowerCase()
                    .includes("/" + a[0])
                ? 1
                : 2;
            n.push({ m: e, rank: i, order: t });
          }),
          n.sort((e, t) => e.rank - t.rank || e.order - t.order),
          { items: n.slice(0, r).map((e) => e.m), total: n.length }
        );
      },
      "formatMs",
      0,
      function (e) {
        return Number.isFinite(e)
          ? e < 1e3
            ? Math.round(e) + " ms"
            : (e / 1e3).toFixed(2) + " s"
          : "—";
      },
      "formatUsd",
      0,
      function (e) {
        return Number.isFinite(e)
          ? 0 === e
            ? "$0"
            : e < 0.01
            ? "$" + e.toFixed(6)
            : "$" + e.toFixed(4)
          : "—";
      },
      "isFailClosed",
      0,
      d,
      "pickWinners",
      0,
      function (e) {
        let t = e
          .map((e, t) => ({ l: e, i: t }))
          .filter(({ l: e }) => "done" === e.status && !e.partial);
        if (t.length < 2) return { first: [], fastest: [], cheapest: [] };
        let r = (e) => {
          let r = t
            .map(({ l: t, i: r }) => ({ i: r, v: e(t) }))
            .filter((e) => Number.isFinite(e.v));
          if (r.length < 2) return [];
          let a = Math.min(...r.map((e) => e.v)),
            n = r.filter((e) => e.v === a);
          return n.length === r.length ? [] : n.map((e) => e.i);
        };
        return {
          first: r((e) => Math.round(e.ttft)),
          fastest: r((e) => Math.round(e.total)),
          cheapest: r((e) => e.cost),
        };
      },
      "presetLanes",
      0,
      function (e, t) {
        let r = new Set((t || []).map((e) => e.id)),
          a = e?.models || [],
          n = a.filter((e) => r.has(e)).slice(0, 4);
        return {
          models: n,
          missing: a.filter((e) => !r.has(e)),
          ready: n.length >= 2,
        };
      },
      "raceLane",
      0,
      f,
      "receiptHref",
      0,
      (e) => t.API_BASE + "/api/v1/receipts/" + encodeURIComponent(e),
      "shortId",
      0,
      (e) =>
        e && e.length > 18 ? e.slice(0, 8) + "…" + e.slice(-6) : e || "—",
      "tokensPerSecond",
      0,
      function (e, t, r) {
        return e > 0 && Number.isFinite(t) && Number.isFinite(r) && !(r <= t)
          ? e / ((r - t) / 1e3)
          : null;
      },
    ]);
  },
  78182,
  34092,
  (e) => {
    "use strict";
    let t = [
        "lowest_price",
        "lowest_latency",
        "highest_throughput",
        "weighted_choice",
        "provider_order",
        "preferred_performance",
        "byok_priority",
        "only_eligible",
        "only_parameter_support",
        "fallback",
      ],
      r = [
        "health",
        "lane",
        "disclosure",
        "attestation",
        "parameters",
        "price",
        "context",
        "preferences",
        "availability",
        "other",
      ],
      a = [
        "http_5xx",
        "timeout",
        "connection",
        "rate_limited",
        "provider_auth",
        "rejected",
        "empty200",
        "unreadable",
        "interrupted",
        "other",
      ],
      n = [
        "tools",
        "tool_choice",
        "response_format",
        "temperature",
        "seed",
        "max_tokens",
        "stop",
        "top_p",
        "top_k",
        "reasoning",
        "include_reasoning",
        "modalities",
        "audio",
      ],
      s = (e) => e && "object" == typeof e && !Array.isArray(e),
      i = (e, t) =>
        s(e) &&
        Object.entries(e).every(
          ([e, r]) => t.includes(e) && Number.isSafeInteger(r) && r > 0
        );
    function o(e, o) {
      return !!(
        s(e) &&
        Object.keys(e).every((e) =>
          [
            "v",
            "provider",
            "reason",
            "eligible",
            "skipped",
            "lane",
            "parameters",
            "network_host",
            "fallback",
          ].includes(e)
        ) &&
        [
          "v",
          "provider",
          "reason",
          "eligible",
          "skipped",
          "lane",
          "parameters",
          "network_host",
        ].every((t) => Object.hasOwn(e, t)) &&
        1 === e.v &&
        "string" == typeof e.provider &&
        /^[A-Za-z0-9_-]{1,96}$/.test(e.provider) &&
        (void 0 === o || e.provider === o) &&
        t.includes(e.reason) &&
        Number.isSafeInteger(e.eligible) &&
        e.eligible > 0 &&
        i(e.skipped, r) &&
        ["public", "attested", "unlinkable"].includes(e.lane) &&
        "boolean" == typeof e.network_host &&
        Array.isArray(e.parameters) &&
        e.parameters.length <= n.length &&
        new Set(e.parameters).size === e.parameters.length &&
        e.parameters.every((e) => n.includes(e)) &&
        ("fallback" === e.reason
          ? i(e.fallback, a) && Object.keys(e.fallback).length > 0
          : !Object.hasOwn(e, "fallback"))
      );
    }
    let l = {
        health: "health",
        lane: "lane rules",
        disclosure: "disclosure rules",
        attestation: "hardware checks",
        parameters: "required parameters",
        price: "price limits",
        context: "context limits",
        preferences: "provider preferences",
        availability: "availability",
        other: "other routing rules",
      },
      d = {
        http_5xx: "a provider server error",
        timeout: "a timeout",
        connection: "a connection error",
        rate_limited: "a rate limit",
        provider_auth: "a provider authentication error",
        rejected: "a rejected request",
        empty200: "an empty reply",
        unreadable: "an unreadable reply",
        interrupted: "an interrupted reply",
        other: "a provider error",
      };
    e.s(
      [
        "routeEvidence",
        0,
        function (e, t) {
          if (e?.payload?.mode === "cache" || e?.payload?.provider === "cache")
            return null;
          let r = e?.payload?.route ?? e?.v2?.claims?.route;
          if (void 0 !== r)
            return o(r, e?.payload?.provider ?? e?.v2?.claims?.node?.provider)
              ? r
              : null;
          if ("string" != typeof t || t.length > 4096) return null;
          try {
            let e = JSON.parse(t);
            return o(e) ? e : null;
          } catch {
            return null;
          }
        },
        "routeSentence",
        0,
        function (e) {
          if (!o(e)) return "";
          let t = `${e.eligible} eligible provider${
              1 === e.eligible ? "" : "s"
            }`,
            r = {
              lowest_price: `it was first in price order among ${t}`,
              lowest_latency: `it was first in latency order among ${t}`,
              highest_throughput: `it was first in output-speed order among ${t}`,
              weighted_choice: `a weighted choice used price, health, quality and hardware checks across ${t}`,
              provider_order: `your provider order placed it first among ${t}`,
              preferred_performance: `the preferred speed and latency order placed it first among ${t}`,
              byok_priority: `your own provider key gave it priority among ${t}`,
              only_eligible: "it was the only eligible provider",
              only_parameter_support:
                "it was the only eligible provider supporting the required parameters",
              fallback: `earlier attempts failed (${Object.entries(
                e.fallback || {}
              )
                .map(([e, t]) => `${t} \xd7 ${d[e]}`)
                .join("; ")}); ${t} were available in the serving model’s plan`,
            }[e.reason],
            a = Object.entries(e.skipped)
              .map(
                ([e, t]) =>
                  `${t} ${1 === t ? "was" : "were"} skipped for ${l[e]}`
              )
              .join("; ");
          return `Sent to ${e.provider} because ${r}.${
            "public" !== e.lane ? ` The ${e.lane} lane was required.` : ""
          }${
            e.parameters.length
              ? ` Required parameter rules: ${e.parameters
                  .map((e) =>
                    "tools" === e ? "tools" : e.replaceAll("_", " ")
                  )
                  .join(", ")}.`
              : ""
          }${a ? ` ${a}.` : ""}${
            e.network_host ? " This provider is a network host." : ""
          }`;
        },
        "validRouteExplanation",
        0,
        o,
      ],
      34092
    );
    let c = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/,
      u = {
        no_attestation: "The router has never verified this provider.",
        last_attempt_failed:
          "The router's most recent attempt to verify this provider failed.",
        attestation_stale:
          "The router's last successful verification is too old to rely on.",
        simulated_evidence_refused:
          "The only evidence is simulated (development) evidence, which this router does not accept.",
      },
      h = {
        dcap: "DCAP: Intel's signature and certificate chain over the quote",
        dstack: "dstack: the deployment's compose hash against its event log",
      },
      p = [
        [/tdx/i, "Intel TDX (confidential virtual machine)"],
        [/snp|sev/i, "AMD SEV-SNP (confidential virtual machine)"],
        [/^dev$/i, "None: simulated for development"],
      ];
    function m(e) {
      if (!e) return "Not reported";
      for (let [t, r] of p) if (t.test(e)) return r;
      return String(e);
    }
    let f = {
      registered: { state: "yes", text: "Registered on chain." },
      revoked: {
        state: "bad",
        text: "Revoked on chain: this measurement is no longer accepted.",
      },
      submitted_unconfirmed: {
        state: "partial",
        text: "Submitted to the chain but not yet confirmed.",
      },
      calldata_ready_not_submitted: {
        state: "no",
        text: "Prepared for the chain but not submitted.",
      },
      not_submitted: { state: "no", text: "Not registered on chain." },
      not_recorded: {
        state: "no",
        text: "Nothing to register: the router has no measurement for this provider.",
      },
    };
    function g(e, t = Date.now()) {
      let r = Date.parse(e || "");
      if (!Number.isFinite(r)) return "";
      let a = Math.round((t - r) / 1e3);
      return a < -60
        ? "in the future"
        : a < 60
        ? "just now"
        : a < 3600
        ? `${Math.round(a / 60)} min ago`
        : a < 86400
        ? `${Math.round(a / 3600)} h ago`
        : `${Math.round(a / 86400)} d ago`;
    }
    let y = (e) =>
        "string" == typeof e && e.length > 22
          ? `${e.slice(0, 12)}…${e.slice(-8)}`
          : e || "",
      _ = (e) => (e ? "yes" : "no"),
      v = (e) => new TextEncoder().encode(e),
      k = (e) => Array.from(e, (e) => e.toString(16).padStart(2, "0")).join("");
    function b(e) {
      let t = String(e).replace(/^0x/i, "");
      if (t.length % 2 || /[^0-9a-fA-F]/.test(t)) throw Error("invalid hex");
      return Uint8Array.from(t.match(/../g) || [], (e) => parseInt(e, 16));
    }
    function w(e) {
      let t = String(e).trim();
      if (!/^[A-Za-z0-9+/_-]*={0,2}$/.test(t)) throw Error("invalid base64");
      let r = t.replace(/-/g, "+").replace(/_/g, "/").replace(/=+$/, ""),
        a = atob(r + "=".repeat((4 - (r.length % 4)) % 4));
      return Uint8Array.from(a, (e) => e.charCodeAt(0));
    }
    let x = (...e) => {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          r = 0;
        for (let a of e) t.set(a, r), (r += a.length);
        return t;
      },
      A = async (e) => new Uint8Array(await crypto.subtle.digest("SHA-256", e)),
      j = (1n << 64n) - 1n,
      N = [
        1n,
        32898n,
        0x800000000000808an,
        0x8000000080008000n,
        32907n,
        2147483649n,
        0x8000000080008081n,
        0x8000000000008009n,
        138n,
        136n,
        2147516425n,
        2147483658n,
        2147516555n,
        0x800000000000008bn,
        0x8000000000008089n,
        0x8000000000008003n,
        0x8000000000008002n,
        0x8000000000000080n,
        32778n,
        0x800000008000000an,
        0x8000000080008081n,
        0x8000000000008080n,
        2147483649n,
        0x8000000080008008n,
      ],
      S = [
        0, 1, 62, 28, 27, 36, 44, 6, 55, 20, 3, 10, 43, 25, 39, 41, 45, 15, 21,
        8, 18, 2, 61, 56, 14,
      ],
      P = (e, t) =>
        0 === t ? e : ((e << BigInt(t)) | (e >> BigInt(64 - t))) & j;
    function T(e) {
      let t = new Uint8Array(136 * Math.ceil((e.length + 1) / 136));
      t.set(e), (t[e.length] ^= 1), (t[t.length - 1] ^= 128);
      let r = Array(25).fill(0n),
        a = [, , , , ,],
        n = Array(25);
      for (let e = 0; e < t.length; e += 136) {
        for (let a = 0; a < 17; a++) {
          let n = 0n;
          for (let r = 7; r >= 0; r--) n = (n << 8n) | BigInt(t[e + 8 * a + r]);
          r[a] ^= n;
        }
        for (let e = 0; e < 24; e++) {
          for (let e = 0; e < 5; e++)
            a[e] = r[e] ^ r[e + 5] ^ r[e + 10] ^ r[e + 15] ^ r[e + 20];
          for (let e = 0; e < 5; e++) {
            let t = a[(e + 4) % 5] ^ P(a[(e + 1) % 5], 1);
            for (let a = 0; a < 25; a += 5) r[e + a] ^= t;
          }
          for (let e = 0; e < 5; e++)
            for (let t = 0; t < 5; t++)
              n[t + ((2 * e + 3 * t) % 5) * 5] = P(r[e + 5 * t], S[e + 5 * t]);
          for (let e = 0; e < 25; e += 5)
            for (let t = 0; t < 5; t++)
              r[t + e] =
                n[t + e] ^ (~n[((t + 1) % 5) + e] & j & n[((t + 2) % 5) + e]);
          r[0] ^= N[e];
        }
      }
      let s = new Uint8Array(32);
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 8; t++)
          s[8 * e + t] = Number((r[e] >> BigInt(8 * t)) & 255n);
      return s;
    }
    let $ = (e, t) => {
      for (let r = 0; r < Math.min(e.length, t.length); r++)
        if (e[r] !== t[r]) return e[r] - t[r];
      return e.length - t.length;
    };
    function E(e, t, r) {
      try {
        let a = b(e);
        for (let e of t) {
          let t = b(e);
          a = T(0 > $(a, t) ? x(a, t) : x(t, a));
        }
        return k(a) === k(b(r));
      } catch {
        return !1;
      }
    }
    async function C(e, t, r) {
      let a;
      try {
        a = await crypto.subtle.importKey("raw", e, { name: "Ed25519" }, !1, [
          "verify",
        ]);
      } catch (e) {
        throw Object.assign(
          Error("This browser cannot verify Ed25519 signatures."),
          { unsupported: !0, cause: e }
        );
      }
      return crypto.subtle.verify({ name: "Ed25519" }, a, r, t);
    }
    let G = (e, t) => ({ id: e, status: "pass", detail: t }),
      I = (e, t) => ({ id: e, status: "fail", detail: t }),
      M = (e, t) => ({ id: e, status: "not_checked", detail: t }),
      R = [
        "That the signing key is the one registered on chain: compare the key id with the ReceiptAnchor contract, or pin the key yourself.",
        "That an anchor root was posted on chain: an inclusion proof shows the receipt sits under a root, not that the root was published.",
      ];
    async function L(e, t = {}) {
      let r =
          "string" == typeof e?.cose
            ? e.cose
            : "string" == typeof e?.v2?.cose
            ? e.v2.cose
            : null,
        a = {
          keys: t.keys,
          publicKeyHex: t.publicKeyHex,
          ed25519: t.ed25519 || C,
          chunks: t.chunks,
        };
      if (r && !e.payload) {
        let t = await H(r, { ...a, proof: e.anchor });
        return {
          valid: t.valid,
          keyId: t.keyId,
          checks: t.checks,
          anchor: U(t.checks),
          notChecked: R,
          claims: t.claims,
        };
      }
      let n = await O(e, t);
      if (!r) return n;
      let s = await H(r, { ...a, proof: e.v2?.anchor });
      return {
        ...n,
        valid: n.valid && s.valid,
        checks: [...n.checks, ...s.checks],
        claims: s.claims,
      };
    }
    let U = (e) => {
      let t = e.find((e) => "v2_anchor_proof" === e.id);
      return t?.status === "pass"
        ? "proof_valid"
        : t?.status === "fail"
        ? "proof_invalid"
        : "no_proof";
    };
    async function O(
      e,
      { keys: t, publicKeyHex: r, ed25519: a = C, skewMs: n = 3e5 } = {}
    ) {
      let s = [],
        i = "string" == typeof e?.key_id ? e.key_id : "",
        l = (e) => ({
          valid:
            s.every((e) => "fail" !== e.status) &&
            s.some((e) => "signature" === e.id && "pass" === e.status),
          keyId: i,
          checks: s,
          anchor: e,
          notChecked: R,
        });
      if (
        !e ||
        "object" != typeof e ||
        !e.payload ||
        "object" != typeof e.payload ||
        "string" != typeof e.sig ||
        !i
      )
        return (
          s.push(I("shape", "A receipt needs payload, sig and key_id.")),
          l("no_proof")
        );
      void 0 !== e.payload.route &&
        s.push(
          o(e.payload.route, e.payload.provider)
            ? G(
                "route",
                "Route explanation v1 is a router-signed summary, not independent proof of selection."
              )
            : I("route", "Invalid route explanation.")
        ),
        s.push(
          void 0 === e.alg || "Ed25519" === e.alg
            ? G("alg", "Ed25519")
            : I("alg", `Unsupported algorithm ${String(e.alg)}.`)
        );
      let d = null,
        c = null,
        u = async (e) => k(await A(e)).slice(0, 16);
      if (r) {
        try {
          if (((d = b(r.trim())), 32 !== d.length)) throw Error("length");
        } catch {
          (d = null),
            s.push(I("key", "The key you entered is not 32 bytes of hex."));
        }
        if (d) {
          let e = await u(d);
          s.push(
            e === i
              ? G("key", `Key id ${i} matches the key you entered.`)
              : I(
                  "key",
                  `The receipt names key ${i}, but the key you entered has id ${e}.`
                )
          );
        }
      } else {
        let e = (Array.isArray(t) ? t : t?.keys || []).find((e) => e.kid === i);
        if (e)
          if ("OKP" !== e.kty || "Ed25519" !== e.crv)
            s.push(I("key", "The published key is not an Ed25519 key."));
          else
            try {
              if (((d = w(e.x)), 32 !== d.length)) throw Error("length");
              let t = await u(d);
              s.push(
                t === i
                  ? G(
                      "key",
                      `Key ${i} is in the router's published list and its id matches its bytes.`
                    )
                  : I(
                      "key",
                      `The published entry's id does not match its key bytes (${t}).`
                    )
              ),
                (c = {
                  from: e.valid_from ? Date.parse(e.valid_from) : null,
                  to: e.retired_at ? Date.parse(e.retired_at) : null,
                });
            } catch {
              (d = null), s.push(I("key", "The published key is malformed."));
            }
        else
          s.push(
            I("key", `Key ${i} is not in the router's published key list.`)
          );
      }
      let h = null;
      try {
        h = w(e.sig);
      } catch {
        s.push(I("signature", "The signature is not valid base64."));
      }
      let p = v(
        JSON.stringify(
          (function e(t) {
            if ("bigint" == typeof t) return t.toString();
            if (Array.isArray(t)) return t.map(e);
            if (t && "object" == typeof t) {
              let r = {};
              for (let a of Object.keys(t).sort())
                void 0 !== t[a] && (r[a] = e(t[a]));
              return r;
            }
            return t;
          })(e.payload)
        )
      );
      if (d && h && !s.some((e) => "key" === e.id && "fail" === e.status))
        try {
          s.push(
            (await a(d, p, h))
              ? G(
                  "signature",
                  "The signature over the receipt's contents verifies with that key."
                )
              : I(
                  "signature",
                  "The signature does not verify: the receipt was changed or was not signed by that key."
                )
          );
        } catch (e) {
          s.push(
            e?.unsupported
              ? M("signature", `${e.message} Use one of the SDKs to check it.`)
              : I("signature", String(e?.message || e))
          );
        }
      else
        s.some((e) => "signature" === e.id) ||
          s.push(
            I("signature", "Not verified: there is no usable key or signature.")
          );
      let m = ((e) => {
        if ("number" == typeof e.ts && Number.isFinite(e.ts)) return e.ts;
        let t = Date.parse(e.issued || "");
        return Number.isFinite(t) ? t : null;
      })(e.payload);
      if (c && null !== m && (null !== c.from || null !== c.to)) {
        let e = null !== c.from && m < c.from - n,
          t = null !== c.to && m > c.to + n;
        s.push(
          e || t
            ? I(
                "key_window",
                "The receipt is dated outside its signing key's validity window."
              )
            : G(
                "key_window",
                "The receipt's date is inside its key's validity window."
              )
        );
      } else
        s.push(M("key_window", "No key window or receipt date to compare."));
      if (e.leaf && h) {
        let t = "0x" + k(T(T(x(p, h))));
        s.push(
          t === String(e.leaf).toLowerCase()
            ? G(
                "leaf",
                "The receipt's anchor leaf matches its contents and signature."
              )
            : I(
                "leaf",
                "The anchor leaf does not match the receipt's contents and signature."
              )
        );
      } else s.push(M("leaf", "The receipt carries no anchor leaf."));
      let f = "no_proof",
        g = e.anchor;
      if (g && Array.isArray(g.proof) && "string" == typeof g.root && e.leaf) {
        let t = E(e.leaf, g.proof, g.root);
        (f = t ? "proof_valid" : "proof_invalid"),
          s.push(
            t
              ? G(
                  "anchor_proof",
                  `The receipt is included under anchor root ${g.root.slice(
                    0,
                    10
                  )}…`
                )
              : I(
                  "anchor_proof",
                  "The inclusion proof does not lead from the receipt to the stated root."
                )
          );
      } else
        s.push(
          M(
            "anchor_proof",
            "No anchor proof was included. A receipt is anchored within the hour, so fetch it again later to get one."
          )
        );
      return l(f);
    }
    function F(e) {
      let t = 0,
        r = (r) => {
          if (t + r > e.length) throw Error("truncated CBOR");
        },
        a = () => {
          r(1);
          let n = e[t++],
            s = n >> 5,
            i = 31 & n;
          if (7 === s) {
            if (20 === i) return !1;
            if (21 === i) return !0;
            if (22 === i) return null;
            throw Error("unsupported CBOR value");
          }
          let o = i;
          if (i >= 24) {
            let a = { 24: 1, 25: 2, 26: 4, 27: 8 }[i];
            if (!a) throw Error("indefinite CBOR lengths are not allowed");
            r(a), (o = 0);
            for (let r = 0; r < a; r++) o = 256 * o + e[t++];
          }
          if (0 === s) return o;
          if (1 === s) return -1 - o;
          if (2 === s || 3 === s) {
            r(o);
            let a = e.slice(t, t + o);
            return (t += o), 2 === s ? a : new TextDecoder().decode(a);
          }
          if (4 === s) return Array.from({ length: o }, a);
          if (5 === s) {
            let e = new Map();
            for (let t = 0; t < o; t++) e.set(a(), a());
            return e;
          }
          return { tag: o, value: a() };
        },
        n = a();
      if (t !== e.length) throw Error("trailing CBOR bytes");
      return n;
    }
    let B = (e) =>
        e instanceof Map
          ? Object.fromEntries([...e].map(([e, t]) => [String(e), B(t)]))
          : Array.isArray(e)
          ? e.map(B)
          : e,
      K = (e, t) =>
        t < 24
          ? Uint8Array.of((e << 5) | t)
          : t < 256
          ? Uint8Array.of((e << 5) | 24, t)
          : t < 65536
          ? Uint8Array.of((e << 5) | 25, t >> 8, 255 & t)
          : Uint8Array.of(
              (e << 5) | 26,
              t >>> 24,
              (t >> 16) & 255,
              (t >> 8) & 255,
              255 & t
            ),
      D = (e) => x(K(2, e.length), e);
    async function q(e, t) {
      let r = await A(v(e));
      for (let e of t) r = await A(x(r, v(e)));
      return "sha256:" + k(r);
    }
    async function H(
      e,
      { keys: t, publicKeyHex: r, ed25519: a = C, chunks: n, proof: s } = {}
    ) {
      let i,
        l,
        d = [];
      try {
        (i = w(e)),
          (l = (function (e) {
            let t = F(e);
            if (
              t &&
              void 0 !== t.tag &&
              !(t instanceof Map) &&
              !Array.isArray(t)
            ) {
              if (18 !== t.tag) throw Error("not a COSE_Sign1");
              t = t.value;
            }
            if (
              !Array.isArray(t) ||
              4 !== t.length ||
              !(t[0] instanceof Uint8Array) ||
              !(t[2] instanceof Uint8Array) ||
              !(t[3] instanceof Uint8Array)
            )
              throw Error("not a COSE_Sign1");
            let r = F(t[0]),
              a = r instanceof Map ? r.get(4) : null;
            return {
              alg: r instanceof Map ? r.get(1) : null,
              keyId: a instanceof Uint8Array ? k(a) : "",
              claims: B(F(t[2])),
              prot: t[0],
              payload: t[2],
              signature: t[3],
            };
          })(i));
      } catch (e) {
        return {
          valid: !1,
          keyId: "",
          claims: null,
          checks: [
            I(
              "v2_shape",
              `The v2 receipt is not a readable COSE_Sign1 (${e.message}).`
            ),
          ],
        };
      }
      void 0 !== l.claims.route &&
        d.push(
          o(l.claims.route, l.claims.node?.provider)
            ? G(
                "v2_route",
                "Route explanation v1 is covered by the COSE signature; routing itself is not independently checked."
              )
            : I("v2_route", "Invalid route explanation.")
        ),
        d.push(
          -8 === l.alg
            ? G("v2_alg", "v2: COSE_Sign1 with EdDSA.")
            : I("v2_alg", `v2: unsupported COSE algorithm ${String(l.alg)}.`)
        );
      let c = null;
      try {
        if (r) c = b(r.trim());
        else {
          let e = (Array.isArray(t) ? t : t?.keys || []).find(
            (e) => e.kid === l.keyId
          );
          e && "OKP" === e.kty && "Ed25519" === e.crv && (c = w(e.x));
        }
      } catch {
        c = null;
      }
      if (c && 32 === c.length)
        if (k(await A(c)).slice(0, 16) !== l.keyId)
          d.push(
            I(
              "v2_signature",
              `v2: the receipt names key ${l.keyId}, which is not this key.`
            )
          );
        else
          try {
            let e, t;
            d.push(
              (await a(
                c,
                ((e = l.prot),
                (t = l.payload),
                x(
                  K(4, 4),
                  K(3, 10),
                  v("Signature1"),
                  D(e),
                  D(new Uint8Array()),
                  D(t)
                )),
                l.signature
              ))
                ? G(
                    "v2_signature",
                    "v2: the COSE signature over the claims verifies."
                  )
                : I(
                    "v2_signature",
                    "v2: the COSE signature does not verify: the claims were changed or not signed by that key."
                  )
            );
          } catch (e) {
            d.push(
              e?.unsupported
                ? M(
                    "v2_signature",
                    `${e.message} Use one of the SDKs to check it.`
                  )
                : I("v2_signature", String(e?.message || e))
            );
          }
      else
        d.push(
          I(
            "v2_signature",
            `v2: key ${l.keyId || "(none)"} is not available to check against.`
          )
        );
      if (Array.isArray(n)) {
        let e = await q(l.claims.rid, n);
        d.push(
          e === l.claims.resp?.chain
            ? G(
                "v2_chain",
                `v2: the chain head over ${n.length} streamed events matches.`
              )
            : I(
                "v2_chain",
                "v2: the chain head does not match the streamed events: the stream was cut or changed."
              )
        );
      } else
        d.push(
          M(
            "v2_chain",
            l.claims.resp?.chain
              ? `v2: signed chain head ${y(
                  l.claims.resp.chain
                )}. Paste the streamed events to check it.`
              : "v2: not a streamed response, so there is no chain."
          )
        );
      let u = "0x" + k(T(T(i)));
      if (s && Array.isArray(s.proof) && "string" == typeof s.root) {
        let e = E(u, s.proof, s.root);
        d.push(
          e
            ? G(
                "v2_anchor_proof",
                `v2: included under root ${s.root.slice(0, 10)}…${
                  s.anchored ? "" : " (a root kept off chain, not posted)"
                }`
              )
            : I(
                "v2_anchor_proof",
                "v2: the Merkle path does not lead from this receipt to the root."
              )
        );
      } else
        d.push(
          M(
            "v2_anchor_proof",
            "v2: no Merkle path yet. Roots are built hourly."
          )
        );
      return {
        valid:
          d.every((e) => "fail" !== e.status) &&
          d.some((e) => "v2_signature" === e.id && "pass" === e.status),
        keyId: l.keyId,
        claims: l.claims,
        leaf: u,
        checks: d,
      };
    }
    e.s(
      [
        "KEYS_PATH",
        0,
        "/.well-known/anyroute-receipt-keys.json",
        "attestationPath",
        0,
        (e) => `/api/v1/attestation/${encodeURIComponent(e)}`,
        "describeAttestation",
        0,
        function (e, t = Date.now()) {
          let r,
            a = e || {},
            n =
              "attested" === a.status || "simulated" === a.status
                ? a.status
                : "unverified",
            s =
              "attested" === n
                ? {
                    tone: "ok",
                    label: "Attested",
                    text: "The router verified this provider's hardware attestation recently and reports it as attested. That is what the router checked, listed below. It does not show what the provider does with your data, and this page did not contact the provider or read its quote.",
                  }
                : "simulated" === n
                ? {
                    tone: "warn",
                    label: "Simulated",
                    text: "This provider has only simulated (development) evidence. No hardware backs it, so nothing about it is private or verified.",
                  }
                : {
                    tone: "bad",
                    label: "Unverified",
                    text: `${
                      u[a.reason] ||
                      "The router has no current verification for this provider."
                    } Treat it as an ordinary provider: nothing here should be read as a privacy guarantee.`,
                  },
            i = a.measurement || null,
            o = i?.transparency_log || null,
            l = i?.registry || null,
            d = f[l?.state] || f.not_recorded,
            c = Array.isArray(a.verifiers) ? a.verifiers : [],
            p = o?.subject === "measurement_bundle",
            y = p
              ? "A signed measurement bundle for this compose hash was found in the log"
              : "An entry for the image was found",
            v = i
              ? o?.found &&
                o.inclusion_verified &&
                o.checkpoint_signature_verified
                ? {
                    state: "yes",
                    text: `${y}, its inclusion in the log was verified, and so was the log's signature over its checkpoint.${
                      p
                        ? " The router checked that it was signed with the measurement key it publishes."
                        : ""
                    }`,
                  }
                : o?.found && o.inclusion_verified
                ? {
                    state: "partial",
                    text: `${y} and its inclusion was verified, but the log's signature over the checkpoint was not.`,
                  }
                : o?.found
                ? {
                    state: "partial",
                    text: `${y}, but its inclusion in the log has not been verified.`,
                  }
                : {
                    state: "no",
                    text: "No transparency-log entry was found for the image.",
                  }
              : {
                  state: "no",
                  text: "No measurement recorded, so no log lookup was made.",
                },
            k = "unverified" === n ? null : a.attested_at || null;
          return {
            status: n,
            verdict: s,
            provider: a.provider || "",
            rows: {
              tee: {
                label: "Hardware",
                value: "unverified" === n ? "Not established" : m(a.tee),
                state:
                  "attested" === n
                    ? "known"
                    : "simulated" === n
                    ? "simulated"
                    : "unknown",
              },
              verifiers: {
                label: "Quote checked by",
                value:
                  c.length && "attested" === n ? c.map((e) => h[e] || e) : [],
                empty:
                  "Nobody: no verifier has accepted a quote for this provider.",
                state: "attested" === n && c.length ? "yes" : "no",
              },
              lastVerified: {
                label: "Last verified by the router",
                value: k || "",
                relative: g(k, t),
                empty: "Never, or not recently enough to count.",
                state: k ? "yes" : "no",
              },
            },
            measurement: i
              ? {
                  recorded: !0,
                  currentlyAttested: "attested" === n && !!i.attested_now,
                  status: i.status,
                  firstSeen: i.first_attested_at || "",
                  lastSeen: i.last_seen_at || "",
                  digests: [
                    {
                      key: "image",
                      label: "Image digest",
                      value: i.image_digest || "",
                    },
                    {
                      key: "compose",
                      label: "Compose hash",
                      value: i.compose_hash || "",
                    },
                    {
                      key: "model",
                      label: "Model digest",
                      value: i.model_digest || "",
                    },
                  ],
                }
              : { recorded: !1, currentlyAttested: !1, digests: [] },
            transparencyLog: {
              ...v,
              index: o?.log_index ?? null,
              uuid: o?.uuid || "",
              integratedAt: o?.integrated_at || "",
              checkedAt: o?.checked_at || "",
              subject: p ? "measurement_bundle" : null,
              entryUrl:
                "string" == typeof (r = o?.entry_url) &&
                /^https:\/\/[^\s"'<>]+$/.test(r)
                  ? r
                  : "",
              bundleDigest:
                p && "string" == typeof o.bundle?.digest ? o.bundle.digest : "",
            },
            registry: {
              ...d,
              address: l?.address || "",
              tx: l?.tx_hash || "",
              registeredAt: l?.registered_at || "",
            },
            checks: [
              [
                "quote_verified",
                "The router verified a hardware quote",
                _("attested" === n && a.checks?.quote_verified),
              ],
              [
                "digests_bound_to_quote",
                "The image, compose and model digests are committed inside that quote",
                _("attested" === n && a.checks?.digests_bound_to_quote),
              ],
              [
                "transparency_log_entry",
                p
                  ? "The measurement bundle has an entry in a transparency log"
                  : "The image has an entry in a transparency log",
                _(a.checks?.transparency_log_entry),
              ],
              [
                "transparency_log_checkpoint_signature",
                "The log's signature over that entry was verified",
                _(a.checks?.transparency_log_checkpoint_signature),
              ],
              [
                "registered_on_chain",
                "The measurement is registered on chain",
                _(a.checks?.registered_on_chain),
              ],
            ].map(([e, t, r]) => ({ id: e, label: t, state: r })),
            notChecked: [
              ...(Array.isArray(a.not_checked) ? a.not_checked : []),
              "Anything about the provider itself. This page reads the router's record. To check the provider's own /attest document and its TLS certificate before you send, use an SDK (see the docs).",
            ],
          };
        },
        "isEnclaveReceipt",
        0,
        (e) => e?.payload?.type === "anyroute.sidecar.receipt",
        "parseReceiptInput",
        0,
        function (e) {
          let t,
            r = String(e || "").trim();
          if (!r) return { error: "Paste a receipt first." };
          try {
            t = JSON.parse(r);
          } catch {
            return {
              error: "That is not valid JSON. Paste the whole receipt object.",
            };
          }
          let a = [t, t?.receipt, t?.data, t?.data?.receipt],
            n =
              a.find(
                (e) =>
                  e &&
                  "object" == typeof e &&
                  e.payload &&
                  "string" == typeof e.sig &&
                  "string" == typeof e.key_id
              ) ||
              a.find(
                (e) => e && "object" == typeof e && "string" == typeof e.cose
              );
          return n
            ? { receipt: n }
            : {
                error:
                  "No receipt found. It needs payload, sig and key_id, or a v2 cose field (a chat response's receipt field, or GET /api/v1/receipts/:id, works).",
              };
        },
        "providerIdFromSearch",
        0,
        function (e) {
          let t = new URLSearchParams(String(e || "").replace(/^\?/, "")),
            r = (t.get("p") || t.get("provider") || "").trim();
          return c.test(r) ? r : "";
        },
        "relativeTime",
        0,
        g,
        "shortDigest",
        0,
        y,
        "teeLabel",
        0,
        m,
        "verifyHref",
        0,
        (e) => `/verify/?p=${encodeURIComponent(e)}`,
        "verifyReceipt",
        0,
        L,
      ],
      78182
    );
  },
]);
