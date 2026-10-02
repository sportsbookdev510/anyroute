(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  62699,
  (e) => {
    e.v({
      bar: "ProofTime-module__ruTsJa__bar",
      barWrap: "ProofTime-module__ruTsJa__barWrap",
      caption: "ProofTime-module__ruTsJa__caption",
      card: "ProofTime-module__ruTsJa__card",
      cardHead: "ProofTime-module__ruTsJa__cardHead",
      cell: "ProofTime-module__ruTsJa__cell",
      changes: "ProofTime-module__ruTsJa__changes",
      diamond: "ProofTime-module__ruTsJa__diamond",
      facts: "ProofTime-module__ruTsJa__facts",
      foot: "ProofTime-module__ruTsJa__foot",
      id: "ProofTime-module__ruTsJa__id",
      key: "ProofTime-module__ruTsJa__key",
      lead: "ProofTime-module__ruTsJa__lead",
      legend: "ProofTime-module__ruTsJa__legend",
      list: "ProofTime-module__ruTsJa__list",
      marker: "ProofTime-module__ruTsJa__marker",
      markers: "ProofTime-module__ruTsJa__markers",
      noShare: "ProofTime-module__ruTsJa__noShare",
      notice: "ProofTime-module__ruTsJa__notice",
      pill: "ProofTime-module__ruTsJa__pill",
      rise: "ProofTime-module__ruTsJa__rise",
      scale: "ProofTime-module__ruTsJa__scale",
      share: "ProofTime-module__ruTsJa__share",
      stack: "ProofTime-module__ruTsJa__stack",
      verdict: "ProofTime-module__ruTsJa__verdict",
      verify: "ProofTime-module__ruTsJa__verify",
      who: "ProofTime-module__ruTsJa__who",
      window: "ProofTime-module__ruTsJa__window",
      windowHead: "ProofTime-module__ruTsJa__windowHead",
      windows: "ProofTime-module__ruTsJa__windows",
    });
  },
  70631,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248),
      r = e.i(4581),
      s = e.i(22010),
      n = e.i(62699);
    let i = ({ tone: e, children: a }) =>
      (0, t.jsx)("span", {
        className: n.default.pill,
        "data-tone": e,
        children: a,
      });
    function o({ w: e }) {
      return (0, t.jsxs)("div", {
        className: n.default.barWrap,
        children: [
          (0, t.jsx)("div", {
            className: n.default.markers,
            "aria-hidden": "true",
            children: e.markers.map((e) =>
              (0, t.jsx)(
                "i",
                { className: n.default.marker, style: { left: `${e.left}%` } },
                e.at
              )
            ),
          }),
          (0, t.jsx)("div", {
            className: n.default.bar,
            role: "img",
            "aria-label": e.summary,
            "data-count": e.cells.length,
            children: e.cells.map((e, a) =>
              (0, t.jsx)(
                "span",
                {
                  className: n.default.cell,
                  "data-kind": e.kind,
                  style: null !== e.pct ? { "--fill": `${e.pct}%` } : void 0,
                },
                a
              )
            ),
          }),
        ],
      });
    }
    function l({ w: e, changes: a }) {
      return (0, t.jsxs)("section", {
        className: n.default.window,
        "aria-label": e.label,
        children: [
          (0, t.jsxs)("div", {
            className: n.default.windowHead,
            children: [
              (0, t.jsx)("h3", { children: e.label }),
              e.shareText
                ? (0, t.jsx)("span", {
                    className: n.default.share,
                    children: e.shareText,
                  })
                : (0, t.jsx)("span", {
                    className: n.default.noShare,
                    children: "empty" === e.state ? "No record" : "Too early",
                  }),
            ],
          }),
          (0, t.jsx)(o, { w: e }),
          (0, t.jsxs)("div", {
            className: n.default.scale,
            "aria-hidden": "true",
            children: [
              (0, t.jsx)("span", {
                children: "24h" === e.name ? "24 h ago" : "7 d ago",
              }),
              (0, t.jsx)("span", { children: "now" }),
            ],
          }),
          (0, t.jsx)("p", {
            className: n.default.caption,
            children: e.caption,
          }),
          e.markers.length > 0 &&
            (0, t.jsx)("ul", {
              className: n.default.changes,
              children: a
                .filter((t) => e.markers.some((e) => e.at === t.at))
                .map((e) =>
                  (0, t.jsxs)(
                    "li",
                    {
                      children: [
                        (0, t.jsx)("span", {
                          className: n.default.diamond,
                          "aria-hidden": "true",
                        }),
                        "Measurement changed ",
                        e.when,
                        ": ",
                        e.text,
                      ],
                    },
                    e.at
                  )
                ),
            }),
        ],
      });
    }
    function d({ v: e }) {
      return (0, t.jsxs)("article", {
        className: n.default.card,
        "aria-labelledby": `p-${e.id}`,
        children: [
          (0, t.jsxs)("header", {
            className: n.default.cardHead,
            children: [
              (0, t.jsxs)("div", {
                className: n.default.who,
                children: [
                  (0, t.jsx)("h2", { id: `p-${e.id}`, children: e.name }),
                  (0, t.jsx)("span", {
                    className: n.default.id,
                    children: e.id,
                  }),
                ],
              }),
              (0, t.jsx)(i, { tone: e.tone, children: e.label }),
            ],
          }),
          (0, t.jsxs)("p", {
            className: n.default.verdict,
            children: [
              e.text,
              e.lastVerified &&
                (0, t.jsxs)(t.Fragment, {
                  children: [" Last verified ", e.lastVerified, "."],
                }),
            ],
          }),
          (0, t.jsx)("div", {
            className: n.default.windows,
            children: e.windows.map((a) =>
              (0, t.jsx)(l, { w: a, changes: e.changes }, a.name)
            ),
          }),
          (0, t.jsxs)("dl", {
            className: n.default.facts,
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Last failed check" }),
                  (0, t.jsx)("dd", {
                    "data-state": e.failure.state,
                    children:
                      "seen" === e.failure.state
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("strong", {
                                children: e.failure.when,
                              }),
                              ". ",
                              e.failure.text,
                            ],
                          })
                        : e.failure.text,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Last measurement change" }),
                  (0, t.jsx)("dd", {
                    "data-state":
                      "seen" === e.change.state ? "changed" : e.change.state,
                    children:
                      "seen" === e.change.state
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("strong", { children: e.change.when }),
                              ". ",
                              e.change.text,
                            ],
                          })
                        : e.change.text,
                  }),
                ],
              }),
              e.runs &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("dt", { children: "Checks passed" }),
                    (0, t.jsxs)("dd", { children: [e.runs.text, "."] }),
                  ],
                }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Hardware" }),
                  (0, t.jsx)("dd", { children: e.tee }),
                ],
              }),
              e.probe &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("dt", { children: "Health probe" }),
                    (0, t.jsx)("dd", {
                      "data-state": e.probe.ok ? "none" : "seen",
                      children: e.probe.text,
                    }),
                  ],
                }),
              e.canary &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("dt", { children: "Canary" }),
                    (0, t.jsx)("dd", {
                      "data-state": e.canary.ok ? "none" : "seen",
                      children: e.canary.text,
                    }),
                  ],
                }),
            ],
          }),
          (0, t.jsxs)("a", {
            className: n.default.verify,
            href: e.verifyHref,
            children: ["What the router checked for ", e.name, " →"],
          }),
        ],
      });
    }
    e.s([
      "default",
      0,
      function () {
        let [e, i] = (0, a.useState)("loading"),
          [o, l] = (0, a.useState)(null),
          [u, c] = (0, a.useState)(""),
          [h, p] = (0, a.useState)(0);
        (0, a.useEffect)(() => {
          let e = new AbortController(),
            t = async () => {
              e.abort(), (e = new AbortController());
              try {
                let t = await fetch(r.API_BASE + s.SUMMARY_PATH, {
                  signal: e.signal,
                  headers: { accept: "application/json" },
                });
                if (!t.ok) {
                  let e = (0, s.pageState)(t.status);
                  c(e.text),
                    i("off" === e.kind ? "off" : "error"),
                    "off" === e.kind && l(null);
                  return;
                }
                let a = await t.json();
                l(a.data), p(Date.now()), c(""), i("ok");
              } catch (e) {
                if (e?.name === "AbortError") return;
                c((0, s.pageState)("network").text), i("error");
              }
            };
          t();
          let a = setInterval(() => {
            document.hidden || t();
          }, 6e4);
          return () => {
            clearInterval(a), e.abort();
          };
        }, []);
        let f = o ? (0, s.describeSummary)(o, h) : null;
        return (0, t.jsxs)("div", {
          className: n.default.stack,
          children: [
            "loading" === e &&
              (0, t.jsx)("p", {
                className: n.default.lead,
                role: "status",
                children: "Reading the router’s record…",
              }),
            "off" === e &&
              (0, t.jsx)("div", {
                className: n.default.notice,
                "data-tone": "warn",
                role: "status",
                children: u,
              }),
            "error" === e &&
              (0, t.jsxs)("div", {
                className: "error",
                role: "alert",
                children: [
                  u,
                  f && " The figures below are from the last successful read.",
                ],
              }),
            f &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("p", {
                    className: n.default.lead,
                    children: [
                      f.definition,
                      " The router keeps ",
                      f.historyDays,
                      " days of history, so a provider new to the record shows less than a full window, and says so.",
                    ],
                  }),
                  (0, t.jsxs)("ul", {
                    className: n.default.legend,
                    "aria-label": "How to read the bars",
                    children: [
                      (0, t.jsxs)("li", {
                        children: [
                          (0, t.jsx)("span", {
                            className: n.default.key,
                            "data-kind": "full",
                          }),
                          "Fresh attestation held for the whole slice",
                        ],
                      }),
                      (0, t.jsxs)("li", {
                        children: [
                          (0, t.jsx)("span", {
                            className: n.default.key,
                            "data-kind": "none",
                          }),
                          "No fresh attestation: a gap",
                        ],
                      }),
                      (0, t.jsxs)("li", {
                        children: [
                          (0, t.jsx)("span", {
                            className: n.default.key,
                            "data-kind": "nodata",
                          }),
                          "Before the record begins: unknown",
                        ],
                      }),
                      (0, t.jsxs)("li", {
                        children: [
                          (0, t.jsx)("span", {
                            className: n.default.diamond,
                            "aria-hidden": "true",
                          }),
                          "Measurement changed",
                        ],
                      }),
                    ],
                  }),
                  0 === f.providers.length
                    ? (0, t.jsx)("div", {
                        className: n.default.notice,
                        role: "status",
                        children:
                          "No provider attests through this router right now, so there is nothing to measure. Providers without hardware attestation are not listed here.",
                      })
                    : (0, t.jsx)("div", {
                        className: n.default.list,
                        children: f.providers.map((e) =>
                          (0, t.jsx)(d, { v: e }, e.id)
                        ),
                      }),
                  (0, t.jsxs)("p", {
                    className: n.default.foot,
                    children: [
                      "Read ",
                      f.generatedAt
                        ? new Date(f.generatedAt)
                            .toISOString()
                            .replace("T", " ")
                            .replace(/\.\d+Z$/, " UTC")
                        : "just now",
                      "; it refreshes every minute while this page is open. Attestation shows what software a provider’s hardware reported running when the router checked. It does not show what happens to a prompt, and time between checks is not verified time.",
                    ],
                  }),
                ],
              }),
          ],
        });
      },
    ]);
  },
  96698,
  (e) => {
    e.v({
      advisories: "StatusBoard-module__V44Y9G__advisories",
      big: "StatusBoard-module__V44Y9G__big",
      blurb: "StatusBoard-module__V44Y9G__blurb",
      breathe: "StatusBoard-module__V44Y9G__breathe",
      budget: "StatusBoard-module__V44Y9G__budget",
      budgetText: "StatusBoard-module__V44Y9G__budgetText",
      calm: "StatusBoard-module__V44Y9G__calm",
      day: "StatusBoard-module__V44Y9G__day",
      dot: "StatusBoard-module__V44Y9G__dot",
      facts: "StatusBoard-module__V44Y9G__facts",
      h: "StatusBoard-module__V44Y9G__h",
      incident: "StatusBoard-module__V44Y9G__incident",
      incidentHead: "StatusBoard-module__V44Y9G__incidentHead",
      incidents: "StatusBoard-module__V44Y9G__incidents",
      key: "StatusBoard-module__V44Y9G__key",
      lane: "StatusBoard-module__V44Y9G__lane",
      laneHead: "StatusBoard-module__V44Y9G__laneHead",
      lanes: "StatusBoard-module__V44Y9G__lanes",
      lead: "StatusBoard-module__V44Y9G__lead",
      legend: "StatusBoard-module__V44Y9G__legend",
      meta: "StatusBoard-module__V44Y9G__meta",
      noise: "StatusBoard-module__V44Y9G__noise",
      note: "StatusBoard-module__V44Y9G__note",
      now: "StatusBoard-module__V44Y9G__now",
      pill: "StatusBoard-module__V44Y9G__pill",
      rise: "StatusBoard-module__V44Y9G__rise",
      scale: "StatusBoard-module__V44Y9G__scale",
      stack: "StatusBoard-module__V44Y9G__stack",
      strip: "StatusBoard-module__V44Y9G__strip",
      stripWrap: "StatusBoard-module__V44Y9G__stripWrap",
      table: "StatusBoard-module__V44Y9G__table",
      tableWrap: "StatusBoard-module__V44Y9G__tableWrap",
      updates: "StatusBoard-module__V44Y9G__updates",
      windows: "StatusBoard-module__V44Y9G__windows",
    });
  },
  49947,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248),
      r = e.i(4581);
    let s = ["1h", "24h", "7d", "30d"],
      n = {
        "1h": "1 hour",
        "24h": "24 hours",
        "7d": "7 days",
        "30d": "30 days",
      },
      i = {
        public: {
          name: "Public",
          blurb:
            "Any provider. Counted from each request’s outcome, never its content.",
        },
        attested: {
          name: "Attested",
          blurb:
            "Confidential hardware the router verified. Counted only through noisy hourly totals.",
        },
        unlinkable: {
          name: "Unlinkable",
          blurb:
            "Attested, reached without your address. Counted only through noisy hourly totals.",
        },
      },
      o = {
        chat: "Chat and Responses",
        embeddings: "Embeddings",
        batch: "Batch",
        messages: "Anthropic Messages",
        ollama: "Ollama",
        rerank: "Rerank",
      },
      l = {
        operational: { tone: "ok", label: "Operational" },
        degraded: { tone: "warn", label: "Degraded" },
        outage: { tone: "bad", label: "Outage" },
        no_data: { tone: "none", label: "No data" },
      },
      d = {
        investigating: "Investigating",
        identified: "Identified",
        monitoring: "Monitoring",
        resolved: "Resolved",
      },
      u = (e) => i[e]?.name ?? String(e),
      c = (e) => o[e] ?? String(e),
      h = (e) => l[e] ?? l.no_data;
    function p(e) {
      if ("number" != typeof e || !Number.isFinite(e) || e < 0) return "";
      let t = Math.floor(1e4 * Math.min(1, e) + 1e-9) / 100;
      return `${Number.isInteger(t) ? t : t.toFixed(2).replace(/0$/, "")}%`;
    }
    function f(e) {
      return "number" != typeof e || !Number.isFinite(e) || e <= 0
        ? ""
        : e < 1e3
        ? `≤ ${e} ms`
        : `≤ ${Number((e / 1e3).toFixed(1))} s`;
    }
    function m(e) {
      var t, a;
      let r = s.map((t) => {
        let a = e.windows?.[t] ?? {};
        return {
          name: t,
          label: n[t],
          pct: p(a.availability),
          eligible: a.eligible ?? 0,
        };
      });
      return {
        id: e.lane,
        name: u(e.lane),
        blurb: i[e.lane]?.blurb ?? "",
        state: h(e.state),
        noisy: "dp-noised" === e.source,
        target: p(e.target),
        headline: r.find((e) => "30d" === e.name)?.pct || "",
        windows: r,
        strip:
          ((t = e.daily),
          (a = e.target),
          (Array.isArray(t) ? t : []).map((e) => {
            let t = e?.availability,
              r =
                "number" != typeof t
                  ? "none"
                  : t >= a
                  ? "ok"
                  : t >= 0.95
                  ? "dip"
                  : "bad";
            return {
              day: e?.day ?? "",
              kind: r,
              text: `${e?.day ?? ""}: ${
                "number" == typeof t ? p(t) : "no data"
              }`,
            };
          })),
        p50: f(e.latency_24h?.p50_ms),
        p95: f(e.latency_24h?.p95_ms),
        measure: e.latency_24h?.measure ?? "",
        budget: (function (e) {
          if (!e || "number" != typeof e.remaining)
            return {
              pct: null,
              text: "No requests in the last 30 days, so no budget is spent.",
            };
          let t = Math.max(0, Math.min(1, e.remaining)),
            a = Math.round(e.failures),
            r = Math.round(e.allowed_failures);
          return {
            pct: Math.floor(1e3 * t) / 10,
            exhausted: !!e.exhausted,
            text: e.exhausted
              ? `Spent: ${a} failed requests against ${r} allowed over 30 days.`
              : `${a} failed of ${r} allowed over 30 days.`,
          };
        })(e.error_budget),
      };
    }
    function y(e) {
      let t = e.windows?.["24h"] ?? {};
      return {
        id: e.surface,
        name: c(e.surface),
        state: h(e.state),
        day: p(t.availability) || "no data",
        p50: f(e.latency_24h?.p50_ms) || "no data",
        p95: f(e.latency_24h?.p95_ms) || "no data",
        errors:
          "number" == typeof t.errors?.server_error_rate
            ? p(t.errors.server_error_rate)
            : "no data",
      };
    }
    let _ = (e) =>
      e
        ? new Date(e)
            .toISOString()
            .replace("T", " ")
            .replace(/:\d\d(\.\d+)?Z$/, " UTC")
        : "";
    function g(e) {
      return {
        id: e.id,
        anchor: `incident-${e.id}`,
        title: e.title,
        status: d[e.status] ?? e.status,
        open: "resolved" !== e.status,
        impact: e.impact,
        scope: [
          (e.lanes ?? []).map(u).join(", "),
          (e.surfaces ?? []).length ? (e.surfaces ?? []).map(c).join(", ") : "",
        ]
          .filter(Boolean)
          .join(" · "),
        started: _(e.started_at),
        resolved: _(e.resolved_at),
        updates: (e.updates ?? []).map((e) => ({
          at: _(e.at),
          status: d[e.status] ?? e.status,
          text: e.text,
        })),
      };
    }
    var v = e.i(78182),
      b = e.i(96698);
    let x = ({ tone: e, children: a }) =>
      (0, t.jsx)("span", {
        className: b.default.pill,
        "data-tone": e,
        children: a,
      });
    function w({ cells: e, lane: a }) {
      return (0, t.jsxs)("div", {
        className: b.default.stripWrap,
        children: [
          (0, t.jsx)("div", {
            className: b.default.strip,
            role: "img",
            "aria-label": `${a}: daily availability for the last ${e.length} days`,
            children: e.map((e) =>
              (0, t.jsx)(
                "span",
                {
                  className: b.default.day,
                  "data-kind": e.kind,
                  title: e.text,
                },
                e.day
              )
            ),
          }),
          (0, t.jsxs)("div", {
            className: b.default.scale,
            "aria-hidden": "true",
            children: [
              (0, t.jsxs)("span", { children: [e.length, " days ago"] }),
              (0, t.jsx)("span", { children: "today" }),
            ],
          }),
        ],
      });
    }
    function k({ v: e }) {
      return (0, t.jsxs)("article", {
        className: b.default.lane,
        "aria-labelledby": `lane-${e.id}`,
        "data-state": e.state.tone,
        children: [
          (0, t.jsxs)("header", {
            className: b.default.laneHead,
            children: [
              (0, t.jsx)("h3", { id: `lane-${e.id}`, children: e.name }),
              (0, t.jsx)(x, { tone: e.state.tone, children: e.state.label }),
            ],
          }),
          (0, t.jsx)("p", { className: b.default.blurb, children: e.blurb }),
          (0, t.jsxs)("div", {
            className: b.default.big,
            children: [
              (0, t.jsx)("strong", { children: e.headline || "No data" }),
              (0, t.jsxs)("span", {
                children: [
                  "30 days · target ",
                  e.target,
                  e.noisy && " · noisy",
                ],
              }),
            ],
          }),
          (0, t.jsx)(w, { cells: e.strip, lane: e.name }),
          (0, t.jsx)("dl", {
            className: b.default.windows,
            children: e.windows.map((e) =>
              (0, t.jsxs)(
                "div",
                {
                  children: [
                    (0, t.jsx)("dt", { children: e.label }),
                    (0, t.jsx)("dd", { children: e.pct || "no data" }),
                  ],
                },
                e.name
              )
            ),
          }),
          (0, t.jsxs)("dl", {
            className: b.default.facts,
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Latency p50 / p95" }),
                  (0, t.jsxs)("dd", {
                    children: [e.p50 || "no data", " / ", e.p95 || "no data"],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Error budget" }),
                  (0, t.jsxs)("dd", {
                    children: [
                      null !== e.budget.pct &&
                        (0, t.jsx)("span", {
                          className: b.default.budget,
                          "data-exhausted": e.budget.exhausted
                            ? "true"
                            : void 0,
                          children: (0, t.jsx)("i", {
                            style: { width: `${e.budget.pct}%` },
                          }),
                        }),
                      (0, t.jsxs)("span", {
                        className: b.default.budgetText,
                        children: [
                          null !== e.budget.pct
                            ? `${e.budget.pct}% left. `
                            : "",
                          e.budget.text,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.noisy &&
            (0, t.jsx)("p", {
              className: b.default.noise,
              children:
                "Differentially private: every figure here is summed from noisy hourly totals, never from single requests. The attested and unlinkable lanes share those totals, so they show one combined figure.",
            }),
        ],
      });
    }
    function j({ i: e }) {
      return (0, t.jsxs)("li", {
        id: e.anchor,
        className: b.default.incident,
        "data-open": e.open ? "true" : void 0,
        children: [
          (0, t.jsxs)("div", {
            className: b.default.incidentHead,
            children: [
              (0, t.jsx)("strong", { children: e.title }),
              (0, t.jsx)(x, {
                tone: e.open
                  ? "critical" === e.impact
                    ? "bad"
                    : "warn"
                  : "ok",
                children: e.status,
              }),
            ],
          }),
          (0, t.jsxs)("p", {
            className: b.default.meta,
            children: [
              e.scope,
              " · started ",
              e.started,
              e.resolved &&
                (0, t.jsxs)(t.Fragment, {
                  children: [" · resolved ", e.resolved],
                }),
            ],
          }),
          (0, t.jsx)("ol", {
            className: b.default.updates,
            children: e.updates.map((e, a) =>
              (0, t.jsxs)(
                "li",
                {
                  children: [
                    (0, t.jsxs)("span", { children: [e.at, " · ", e.status] }),
                    e.text,
                  ],
                },
                a
              )
            ),
          }),
        ],
      });
    }
    e.s(
      [
        "default",
        0,
        function () {
          let [e, s] = (0, a.useState)(null),
            [n, i] = (0, a.useState)(null),
            [o, l] = (0, a.useState)("loading");
          (0, a.useEffect)(() => {
            let e = new AbortController(),
              t = async (t) => {
                let a = await fetch(r.API_BASE + t, {
                  signal: e.signal,
                  headers: { accept: "application/json" },
                });
                if (!a.ok) throw Error(String(a.status));
                return (await a.json()).data;
              },
              a = async () => {
                e.abort(), (e = new AbortController());
                let [a, r] = await Promise.allSettled([
                  t("/api/v1/status/slo"),
                  t("/api/v1/attestation/summary"),
                ]);
                "fulfilled" === a.status
                  ? (s(a.value), l("ok"))
                  : a.reason?.name !== "AbortError" && l("error"),
                  "fulfilled" === r.status && i(r.value);
              };
            a();
            let n = setInterval(() => {
              document.hidden || a();
            }, 3e4);
            return () => {
              clearInterval(n), e.abort();
            };
          }, []);
          let d = (function (e) {
              var t;
              let a;
              if (!e || !Array.isArray(e.lanes)) return null;
              let r = (e.incidents?.recent ?? []).map(g);
              return {
                generatedAt: e.generated_at,
                headline:
                  ((a = ((t = e.lanes) ?? []).filter(
                    (e) => "outage" === e.state || "degraded" === e.state
                  )),
                  t?.length
                    ? a.length
                      ? {
                          tone: a.some((e) => "outage" === e.state)
                            ? "bad"
                            : "warn",
                          text: `${a.map((e) => u(e.lane)).join(" and ")} ${
                            a.length > 1 ? "are" : "is"
                          } ${
                            a.some((e) => "outage" === e.state)
                              ? "having an outage"
                              : "degraded"
                          }`,
                        }
                      : t.every((e) => "no_data" === e.state)
                      ? { tone: "none", text: "No traffic measured yet" }
                      : { tone: "ok", text: "All lanes operational" }
                    : { tone: "none", text: "No status yet" }),
                lanes: e.lanes.map(m),
                surfaces: (e.surfaces ?? []).map(y),
                open: (e.incidents?.open ?? []).map(g),
                history: r.filter((e) => !e.open),
              };
            })(e),
            c = n
              ? (function (e, t = Date.now()) {
                  let a = [];
                  for (let r of e?.providers ?? []) {
                    let e = r.name || r.provider;
                    "unverified" === r.status &&
                      a.push({
                        tone: "bad",
                        provider: r.provider,
                        text: `${e}: the router holds no current verification, so the attested lanes do not route to it.`,
                      });
                    let s = r.last_measurement_change;
                    s?.at &&
                      t - Date.parse(s.at) < 6048e5 &&
                      a.push({
                        tone: "warn",
                        provider: r.provider,
                        text: `${e}: measured software changed on ${s.at.slice(
                          0,
                          10
                        )} (${
                          (s.changed ?? []).join(", ") || "measurement"
                        }). Check the new digests against the published build.`,
                      });
                    let n = r.last_failure;
                    "attested" === r.status &&
                      n?.at &&
                      t - Date.parse(n.at) < 864e5 &&
                      a.push({
                        tone: "warn",
                        provider: r.provider,
                        text: `${e}: a check failed on ${n.at
                          .slice(0, 16)
                          .replace("T", " ")} UTC and later passed.`,
                      });
                  }
                  return a;
                })(n)
              : null;
          return (0, t.jsxs)("div", {
            className: b.default.stack,
            children: [
              "loading" === o &&
                (0, t.jsx)("p", {
                  className: b.default.lead,
                  role: "status",
                  children: "Reading the router’s record…",
                }),
              "error" === o &&
                (0, t.jsxs)("div", {
                  className: "error",
                  role: "alert",
                  children: [
                    "The status record could not be read just now.",
                    d &&
                      " The figures below are from the last successful read.",
                  ],
                }),
              d &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("section", {
                      className: b.default.now,
                      "data-tone": d.headline.tone,
                      "aria-live": "polite",
                      children: [
                        (0, t.jsx)("span", {
                          className: b.default.dot,
                          "aria-hidden": "true",
                        }),
                        (0, t.jsx)("h2", { children: d.headline.text }),
                      ],
                    }),
                    d.open.length > 0 &&
                      (0, t.jsxs)("section", {
                        "aria-labelledby": "open-h",
                        children: [
                          (0, t.jsx)("h2", {
                            id: "open-h",
                            className: b.default.h,
                            children: "Open incidents",
                          }),
                          (0, t.jsx)("ul", {
                            className: b.default.incidents,
                            children: d.open.map((e) =>
                              (0, t.jsx)(j, { i: e }, e.id)
                            ),
                          }),
                        ],
                      }),
                    (0, t.jsxs)("section", {
                      "aria-labelledby": "lanes-h",
                      children: [
                        (0, t.jsx)("h2", {
                          id: "lanes-h",
                          className: b.default.h,
                          children: "Lanes",
                        }),
                        (0, t.jsxs)("ul", {
                          className: b.default.legend,
                          "aria-label": "How to read the bars",
                          children: [
                            (0, t.jsxs)("li", {
                              children: [
                                (0, t.jsx)("span", {
                                  className: b.default.key,
                                  "data-kind": "ok",
                                }),
                                "At or above target",
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              children: [
                                (0, t.jsx)("span", {
                                  className: b.default.key,
                                  "data-kind": "dip",
                                }),
                                "Below target",
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              children: [
                                (0, t.jsx)("span", {
                                  className: b.default.key,
                                  "data-kind": "bad",
                                }),
                                "Under 95%",
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              children: [
                                (0, t.jsx)("span", {
                                  className: b.default.key,
                                  "data-kind": "none",
                                }),
                                "No data",
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: b.default.lanes,
                          children: d.lanes.map((e) =>
                            (0, t.jsx)(k, { v: e }, e.id)
                          ),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("section", {
                      "aria-labelledby": "surfaces-h",
                      children: [
                        (0, t.jsx)("h2", {
                          id: "surfaces-h",
                          className: b.default.h,
                          children: "API surfaces · public lane · 24 hours",
                        }),
                        (0, t.jsx)("div", {
                          className: b.default.tableWrap,
                          children: (0, t.jsxs)("table", {
                            className: b.default.table,
                            children: [
                              (0, t.jsx)("thead", {
                                children: (0, t.jsxs)("tr", {
                                  children: [
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      children: "Surface",
                                    }),
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      children: "State",
                                    }),
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      children: "Availability",
                                    }),
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      children: "p50",
                                    }),
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      children: "p95",
                                    }),
                                    (0, t.jsx)("th", {
                                      scope: "col",
                                      children: "5xx rate",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("tbody", {
                                children: d.surfaces.map((e) =>
                                  (0, t.jsxs)(
                                    "tr",
                                    {
                                      children: [
                                        (0, t.jsx)("th", {
                                          scope: "row",
                                          children: e.name,
                                        }),
                                        (0, t.jsx)("td", {
                                          children: (0, t.jsx)(x, {
                                            tone: e.state.tone,
                                            children: e.state.label,
                                          }),
                                        }),
                                        (0, t.jsx)("td", { children: e.day }),
                                        (0, t.jsx)("td", { children: e.p50 }),
                                        (0, t.jsx)("td", { children: e.p95 }),
                                        (0, t.jsx)("td", {
                                          children: e.errors,
                                        }),
                                      ],
                                    },
                                    e.id
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("p", {
                          className: b.default.note,
                          children:
                            "Latency is time to first token for streams and to the full answer otherwise, read as the top of a fixed bucket. Private lanes have no per-surface figures: their noisy totals are not split by surface.",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("section", {
                      "aria-labelledby": "tcb-h",
                      children: [
                        (0, t.jsx)("h2", {
                          id: "tcb-h",
                          className: b.default.h,
                          children: "Attestation advisories",
                        }),
                        null === c
                          ? (0, t.jsx)("p", {
                              className: b.default.note,
                              children:
                                "The attestation record is not available on this router.",
                            })
                          : 0 === c.length
                          ? (0, t.jsx)("p", {
                              className: b.default.calm,
                              children:
                                "No advisories. Every attesting provider holds a current verification and no measured software changed in the last 7 days.",
                            })
                          : (0, t.jsx)("ul", {
                              className: b.default.advisories,
                              children: c.map((e, a) =>
                                (0, t.jsxs)(
                                  "li",
                                  {
                                    "data-tone": e.tone,
                                    children: [
                                      e.text,
                                      " ",
                                      (0, t.jsx)("a", {
                                        href: (0, v.verifyHref)(e.provider),
                                        children: "Verify",
                                      }),
                                    ],
                                  },
                                  a
                                )
                              ),
                            }),
                      ],
                    }),
                    (0, t.jsxs)("section", {
                      "aria-labelledby": "history-h",
                      children: [
                        (0, t.jsx)("h2", {
                          id: "history-h",
                          className: b.default.h,
                          children: "Incident history · 90 days",
                        }),
                        d.history.length
                          ? (0, t.jsx)("ul", {
                              className: b.default.incidents,
                              children: d.history.map((e) =>
                                (0, t.jsx)(j, { i: e }, e.id)
                              ),
                            })
                          : (0, t.jsx)("p", {
                              className: b.default.calm,
                              children: "No incidents in the last 90 days.",
                            }),
                        (0, t.jsxs)("p", {
                          className: b.default.note,
                          children: [
                            "Follow incidents by ",
                            (0, t.jsx)("a", {
                              href:
                                r.API_BASE + "/api/v1/status/incidents.atom",
                              children: "Atom",
                            }),
                            " or ",
                            (0, t.jsx)("a", {
                              href: r.API_BASE + "/api/v1/status/incidents.rss",
                              children: "RSS",
                            }),
                            ". Read ",
                            d.generatedAt
                              ? new Date(d.generatedAt)
                                  .toISOString()
                                  .replace("T", " ")
                                  .replace(/\.\d+Z$/, " UTC")
                              : "just now",
                            "; this page refreshes every 30 seconds while it is open.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
      ],
      49947
    );
  },
  22010,
  (e) => {
    "use strict";
    var t = e.i(78182);
    let a = { "24h": 864e5, "7d": 6048e5 },
      r = { "24h": "Last 24 hours", "7d": "Last 7 days" };
    function s(e) {
      if ("number" != typeof e || !Number.isFinite(e) || e < 0) return "";
      let t = Math.floor(1e3 * Math.min(1, e) + 1e-9) / 10;
      return `${Number.isInteger(t) ? t : t.toFixed(1)}%`;
    }
    function n(e) {
      if ("number" != typeof e || !Number.isFinite(e) || e < 0) return "";
      let t = Math.floor(e / 6e4);
      if (t < 1) return "under a minute";
      if (t < 60) return `${t} min`;
      let a = Math.floor(t / 60);
      if (a < 24) return t % 60 ? `${a} h ${t % 60} min` : `${a} h`;
      let r = Math.floor(a / 24);
      return a % 24 ? `${r} d ${a % 24} h` : `${r} d`;
    }
    let i = {
        attested: {
          tone: "ok",
          label: "Attested",
          text: "The router holds a fresh attestation it verified itself.",
        },
        simulated: {
          tone: "warn",
          label: "Simulated",
          text: "Development evidence only. Nothing about it is verified, and a production router refuses it.",
        },
        unverified: {
          tone: "bad",
          label: "Unverified",
          text: "The router has no current verification for this provider.",
        },
      },
      o = {
        no_attestation: "The router has never verified this provider.",
        last_attempt_failed:
          "The router's latest attempt to verify this provider failed.",
        attestation_stale:
          "The router's last verification is too old to count.",
        simulated_evidence_refused:
          "The only evidence is simulated, which this router does not accept.",
      },
      l = {
        image_digest: "image digest",
        compose_hash: "compose hash",
        model_digest: "model digest",
        mrtd: "TDX build measurement",
        rtmr0: "TDX runtime register 0",
        rtmr1: "TDX runtime register 1",
        rtmr2: "TDX runtime register 2",
        rtmr3: "TDX runtime register 3",
        measurement: "measurement",
      },
      d = (e) => l[e] || String(e),
      u = (e) => (e.length ? e.map(d).join(", ") : "the recorded measurement");
    function c(e, t, i, o) {
      var l;
      let d,
        u = t || {},
        c = "number" == typeof u.observed_ms ? u.observed_ms : 0,
        h = (Array.isArray((l = u.buckets)) ? l : []).map((e) => {
          if ("number" != typeof e || !Number.isFinite(e))
            return { pct: null, kind: "nodata" };
          let t = Math.max(0, Math.min(100, Math.round(e)));
          return {
            pct: t,
            kind: 100 === t ? "full" : 0 === t ? "none" : "partial",
          };
        }),
        p = c > 0 && "number" == typeof u.share,
        f = p && c >= 36e5;
      d = p
        ? f
          ? u.history_complete
            ? `Covered for ${s(u.share)} of the window.`
            : `Covered for ${s(u.share)} of the ${n(
                c
              )} the record spans. The earlier part of the window is unknown, and is not counted either way.`
          : `The record spans only ${n(c)}, too little to give a share.`
        : "Nothing recorded in this window yet.";
      let m = h.filter((e) => "full" === e.kind).length,
        y = h.filter((e) => "none" === e.kind || "partial" === e.kind).length,
        _ = h.filter((e) => "nodata" === e.kind).length;
      return {
        name: e,
        label: r[e] || e,
        state: p
          ? f
            ? u.history_complete
              ? "complete"
              : "partial"
            : "early"
          : "empty",
        share: f ? u.share : null,
        shareText: f ? s(u.share) : "",
        caption: d,
        cells: h,
        markers: (function (e, t, a) {
          let r = [];
          for (let s of Array.isArray(e) ? e : []) {
            let e = ((Date.parse(s?.at || "") - (t - a)) / a) * 100;
            Number.isFinite(e) &&
              e >= 0 &&
              e <= 100 &&
              r.push({
                at: s.at,
                left: Math.round(10 * e) / 10,
                changed: Array.isArray(s.changed) ? s.changed : [],
              });
          }
          return r;
        })(i, o, a[e] || 0),
        summary: `${r[e] || e}: ${
          f ? `fresh attestation for ${s(u.share)} of the time` : d
        } ${
          h.length
        } slices: ${m} fully covered, ${y} with a gap, ${_} before the record begins.`,
      };
    }
    function h(e, t = Date.now()) {
      let a = Date.parse(e || "");
      if (!Number.isFinite(a)) return "";
      let r = Math.round((t - a) / 1e3);
      return r < -60
        ? "in the future"
        : r < 60
        ? "just now"
        : r < 3600
        ? `${Math.round(r / 60)} min ago`
        : r < 172800
        ? `${Math.round(r / 3600)} h ago`
        : `${Math.round(r / 86400)} d ago`;
    }
    function p(e, r, l = Date.now()) {
      let d = e || {},
        f = i[d.status] ? d.status : "unverified",
        m = i[f],
        y = Array.isArray(d.measurement_changes_7d)
          ? d.measurement_changes_7d
          : [],
        _ = y.filter((e) => Date.parse(e?.at || "") >= l - a["24h"]),
        g = Number(r?.history_days) || 0,
        v = !!d.history_since,
        b = v ? l - Date.parse(d.history_since) : NaN,
        x =
          Number.isFinite(b) && b >= 0 ? n(g ? Math.min(b, 864e5 * g) : b) : "",
        w = d.last_failure,
        k = d.last_measurement_change,
        j = d.runs_7d || {},
        T = d.probe,
        N = d.canary;
      return {
        id: String(d.provider || ""),
        name: String(d.name || d.provider || ""),
        status: f,
        tone: m.tone,
        label: m.label,
        text: ("unverified" === f && o[d.reason]) || m.text,
        tee: "unverified" === f ? "Not established" : (0, t.teeLabel)(d.tee),
        lastVerified: "unverified" === f ? "" : h(d.attested_at, l),
        hasHistory: v,
        historySince: d.history_since || "",
        changes: y.map((e) => ({
          at: e.at,
          when: h(e.at, l),
          text: u(Array.isArray(e.changed) ? e.changed : []),
        })),
        windows: [
          c("24h", d.fresh?.["24h"], _, l),
          c("7d", d.fresh?.["7d"], y, l),
        ],
        runs:
          "number" == typeof j.total && j.total > 0
            ? {
                text: `${s((j.attested || 0) / j.total)} of ${
                  j.total
                } checks in 7 days passed`,
                total: j.total,
                attested: j.attested || 0,
              }
            : null,
        failure: w
          ? {
              state: "seen",
              when: h(w.at, l),
              at: w.at,
              text: w.message || "The check failed.",
              code: w.code || "other",
            }
          : v
          ? {
              state: "none",
              text: x
                ? `No failed check in the ${x} on record.`
                : "No failed check on record.",
            }
          : { state: "unknown", text: "Nothing has been recorded yet." },
        change: k
          ? {
              state: "seen",
              when: h(k.at, l),
              at: k.at,
              text: `Changed: ${u(Array.isArray(k.changed) ? k.changed : [])}.`,
              from: (0, t.shortDigest)(Object.values(k.from || {})[0] || ""),
              to: (0, t.shortDigest)(Object.values(k.to || {})[0] || ""),
            }
          : v
          ? {
              state: "none",
              text: x
                ? `No measurement change in the ${x} on record.`
                : "No measurement change on record.",
            }
          : { state: "unknown", text: "Nothing has been recorded yet." },
        probe: T
          ? {
              ok: !!T.ok,
              text: T.ok
                ? `Answered its last health probe, unchanged since ${
                    h(T.since, l) || "the record began"
                  }.`
                : `Failed its last health probe ${h(T.since, l)}: ${
                    T.reason?.message || "no answer"
                  }`,
            }
          : null,
        canary: N
          ? {
              ok: !!N.ok,
              text: N.ok
                ? `Last canary ${h(
                    N.at,
                    l
                  )} matched what the provider declares.`
                : `Last canary ${h(N.at, l)}: ${
                    N.reason?.message || "did not match"
                  }`,
            }
          : null,
        verifyHref: (0, t.verifyHref)(String(d.provider || "")),
      };
    }
    e.s([
      "SUMMARY_PATH",
      0,
      "/api/v1/attestation/summary",
      "ago",
      0,
      h,
      "describeProvider",
      0,
      p,
      "describeSummary",
      0,
      function (e, t = Date.now()) {
        let a = e || {},
          r = (Array.isArray(a.providers) ? a.providers : []).map((e) =>
            p(e, a, t)
          ),
          s = Number.isFinite(a.fresh_within_ms)
            ? Math.round(a.fresh_within_ms / 6e4)
            : null;
        return {
          providers: r,
          historyDays: Number(a.history_days) || 0,
          generatedAt: a.generated_at || "",
          freshMinutes: s,
          definition: s
            ? `A fresh attestation is one the router verified itself in the last ${s} minutes, with no failed check since. Time is counted as covered only while one is held.`
            : "A fresh attestation is one the router verified itself recently, with no failed check since.",
        };
      },
      "describeWindow",
      0,
      c,
      "fieldLabel",
      0,
      d,
      "historyPath",
      0,
      (e) => `/api/v1/attestation/${encodeURIComponent(e)}/history`,
      "pageState",
      0,
      function (e) {
        return 501 === e
          ? {
              kind: "off",
              text: "This router does not keep an attestation history, so there is no proof-time to show.",
            }
          : "network" === e || e >= 500 || 0 === e
          ? {
              kind: "error",
              text: "The router could not be reached, so nothing is known from here. That is not the same as “not attested”; try again.",
            }
          : e >= 400
          ? {
              kind: "error",
              text: "The router did not return its attestation record. Try again in a moment.",
            }
          : { kind: "ok", text: "" };
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
      a = [
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
      r = [
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
      s = [
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
      n = (e) => e && "object" == typeof e && !Array.isArray(e),
      i = (e, t) =>
        n(e) &&
        Object.entries(e).every(
          ([e, a]) => t.includes(e) && Number.isSafeInteger(a) && a > 0
        );
    function o(e, o) {
      return !!(
        n(e) &&
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
        i(e.skipped, a) &&
        ["public", "attested", "unlinkable"].includes(e.lane) &&
        "boolean" == typeof e.network_host &&
        Array.isArray(e.parameters) &&
        e.parameters.length <= s.length &&
        new Set(e.parameters).size === e.parameters.length &&
        e.parameters.every((e) => s.includes(e)) &&
        ("fallback" === e.reason
          ? i(e.fallback, r) && Object.keys(e.fallback).length > 0
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
          let a = e?.payload?.route ?? e?.v2?.claims?.route;
          if (void 0 !== a)
            return o(a, e?.payload?.provider ?? e?.v2?.claims?.node?.provider)
              ? a
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
            a = {
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
            r = Object.entries(e.skipped)
              .map(
                ([e, t]) =>
                  `${t} ${1 === t ? "was" : "were"} skipped for ${l[e]}`
              )
              .join("; ");
          return `Sent to ${e.provider} because ${a}.${
            "public" !== e.lane ? ` The ${e.lane} lane was required.` : ""
          }${
            e.parameters.length
              ? ` Required parameter rules: ${e.parameters
                  .map((e) =>
                    "tools" === e ? "tools" : e.replaceAll("_", " ")
                  )
                  .join(", ")}.`
              : ""
          }${r ? ` ${r}.` : ""}${
            e.network_host ? " This provider is a network host." : ""
          }`;
        },
        "validRouteExplanation",
        0,
        o,
      ],
      34092
    );
    let u = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/,
      c = {
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
    function f(e) {
      if (!e) return "Not reported";
      for (let [t, a] of p) if (t.test(e)) return a;
      return String(e);
    }
    let m = {
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
    function y(e, t = Date.now()) {
      let a = Date.parse(e || "");
      if (!Number.isFinite(a)) return "";
      let r = Math.round((t - a) / 1e3);
      return r < -60
        ? "in the future"
        : r < 60
        ? "just now"
        : r < 3600
        ? `${Math.round(r / 60)} min ago`
        : r < 86400
        ? `${Math.round(r / 3600)} h ago`
        : `${Math.round(r / 86400)} d ago`;
    }
    let _ = (e) =>
        "string" == typeof e && e.length > 22
          ? `${e.slice(0, 12)}…${e.slice(-8)}`
          : e || "",
      g = (e) => (e ? "yes" : "no"),
      v = (e) => new TextEncoder().encode(e),
      b = (e) => Array.from(e, (e) => e.toString(16).padStart(2, "0")).join("");
    function x(e) {
      let t = String(e).replace(/^0x/i, "");
      if (t.length % 2 || /[^0-9a-fA-F]/.test(t)) throw Error("invalid hex");
      return Uint8Array.from(t.match(/../g) || [], (e) => parseInt(e, 16));
    }
    function w(e) {
      let t = String(e).trim();
      if (!/^[A-Za-z0-9+/_-]*={0,2}$/.test(t)) throw Error("invalid base64");
      let a = t.replace(/-/g, "+").replace(/_/g, "/").replace(/=+$/, ""),
        r = atob(a + "=".repeat((4 - (a.length % 4)) % 4));
      return Uint8Array.from(r, (e) => e.charCodeAt(0));
    }
    let k = (...e) => {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          a = 0;
        for (let r of e) t.set(r, a), (a += r.length);
        return t;
      },
      j = async (e) => new Uint8Array(await crypto.subtle.digest("SHA-256", e)),
      T = (1n << 64n) - 1n,
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
      A = [
        0, 1, 62, 28, 27, 36, 44, 6, 55, 20, 3, 10, 43, 25, 39, 41, 45, 15, 21,
        8, 18, 2, 61, 56, 14,
      ],
      $ = (e, t) =>
        0 === t ? e : ((e << BigInt(t)) | (e >> BigInt(64 - t))) & T;
    function S(e) {
      let t = new Uint8Array(136 * Math.ceil((e.length + 1) / 136));
      t.set(e), (t[e.length] ^= 1), (t[t.length - 1] ^= 128);
      let a = Array(25).fill(0n),
        r = [, , , , ,],
        s = Array(25);
      for (let e = 0; e < t.length; e += 136) {
        for (let r = 0; r < 17; r++) {
          let s = 0n;
          for (let a = 7; a >= 0; a--) s = (s << 8n) | BigInt(t[e + 8 * r + a]);
          a[r] ^= s;
        }
        for (let e = 0; e < 24; e++) {
          for (let e = 0; e < 5; e++)
            r[e] = a[e] ^ a[e + 5] ^ a[e + 10] ^ a[e + 15] ^ a[e + 20];
          for (let e = 0; e < 5; e++) {
            let t = r[(e + 4) % 5] ^ $(r[(e + 1) % 5], 1);
            for (let r = 0; r < 25; r += 5) a[e + r] ^= t;
          }
          for (let e = 0; e < 5; e++)
            for (let t = 0; t < 5; t++)
              s[t + ((2 * e + 3 * t) % 5) * 5] = $(a[e + 5 * t], A[e + 5 * t]);
          for (let e = 0; e < 25; e += 5)
            for (let t = 0; t < 5; t++)
              a[t + e] =
                s[t + e] ^ (~s[((t + 1) % 5) + e] & T & s[((t + 2) % 5) + e]);
          a[0] ^= N[e];
        }
      }
      let n = new Uint8Array(32);
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 8; t++)
          n[8 * e + t] = Number((a[e] >> BigInt(8 * t)) & 255n);
      return n;
    }
    let P = (e, t) => {
      for (let a = 0; a < Math.min(e.length, t.length); a++)
        if (e[a] !== t[a]) return e[a] - t[a];
      return e.length - t.length;
    };
    function B(e, t, a) {
      try {
        let r = x(e);
        for (let e of t) {
          let t = x(e);
          r = S(0 > P(r, t) ? k(r, t) : k(t, r));
        }
        return b(r) === b(x(a));
      } catch {
        return !1;
      }
    }
    async function E(e, t, a) {
      let r;
      try {
        r = await crypto.subtle.importKey("raw", e, { name: "Ed25519" }, !1, [
          "verify",
        ]);
      } catch (e) {
        throw Object.assign(
          Error("This browser cannot verify Ed25519 signatures."),
          { unsupported: !0, cause: e }
        );
      }
      return crypto.subtle.verify({ name: "Ed25519" }, r, a, t);
    }
    let I = (e, t) => ({ id: e, status: "pass", detail: t }),
      M = (e, t) => ({ id: e, status: "fail", detail: t }),
      C = (e, t) => ({ id: e, status: "not_checked", detail: t }),
      D = [
        "That the signing key is the one registered on chain: compare the key id with the ReceiptAnchor contract, or pin the key yourself.",
        "That an anchor root was posted on chain: an inclusion proof shows the receipt sits under a root, not that the root was published.",
      ];
    async function O(e, t = {}) {
      let a =
          "string" == typeof e?.cose
            ? e.cose
            : "string" == typeof e?.v2?.cose
            ? e.v2.cose
            : null,
        r = {
          keys: t.keys,
          publicKeyHex: t.publicKeyHex,
          ed25519: t.ed25519 || E,
          chunks: t.chunks,
        };
      if (a && !e.payload) {
        let t = await F(a, { ...r, proof: e.anchor });
        return {
          valid: t.valid,
          keyId: t.keyId,
          checks: t.checks,
          anchor: V(t.checks),
          notChecked: D,
          claims: t.claims,
        };
      }
      let s = await Y(e, t);
      if (!a) return s;
      let n = await F(a, { ...r, proof: e.v2?.anchor });
      return {
        ...s,
        valid: s.valid && n.valid,
        checks: [...s.checks, ...n.checks],
        claims: n.claims,
      };
    }
    let V = (e) => {
      let t = e.find((e) => "v2_anchor_proof" === e.id);
      return t?.status === "pass"
        ? "proof_valid"
        : t?.status === "fail"
        ? "proof_invalid"
        : "no_proof";
    };
    async function Y(
      e,
      { keys: t, publicKeyHex: a, ed25519: r = E, skewMs: s = 3e5 } = {}
    ) {
      let n = [],
        i = "string" == typeof e?.key_id ? e.key_id : "",
        l = (e) => ({
          valid:
            n.every((e) => "fail" !== e.status) &&
            n.some((e) => "signature" === e.id && "pass" === e.status),
          keyId: i,
          checks: n,
          anchor: e,
          notChecked: D,
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
          n.push(M("shape", "A receipt needs payload, sig and key_id.")),
          l("no_proof")
        );
      void 0 !== e.payload.route &&
        n.push(
          o(e.payload.route, e.payload.provider)
            ? I(
                "route",
                "Route explanation v1 is a router-signed summary, not independent proof of selection."
              )
            : M("route", "Invalid route explanation.")
        ),
        n.push(
          void 0 === e.alg || "Ed25519" === e.alg
            ? I("alg", "Ed25519")
            : M("alg", `Unsupported algorithm ${String(e.alg)}.`)
        );
      let d = null,
        u = null,
        c = async (e) => b(await j(e)).slice(0, 16);
      if (a) {
        try {
          if (((d = x(a.trim())), 32 !== d.length)) throw Error("length");
        } catch {
          (d = null),
            n.push(M("key", "The key you entered is not 32 bytes of hex."));
        }
        if (d) {
          let e = await c(d);
          n.push(
            e === i
              ? I("key", `Key id ${i} matches the key you entered.`)
              : M(
                  "key",
                  `The receipt names key ${i}, but the key you entered has id ${e}.`
                )
          );
        }
      } else {
        let e = (Array.isArray(t) ? t : t?.keys || []).find((e) => e.kid === i);
        if (e)
          if ("OKP" !== e.kty || "Ed25519" !== e.crv)
            n.push(M("key", "The published key is not an Ed25519 key."));
          else
            try {
              if (((d = w(e.x)), 32 !== d.length)) throw Error("length");
              let t = await c(d);
              n.push(
                t === i
                  ? I(
                      "key",
                      `Key ${i} is in the router's published list and its id matches its bytes.`
                    )
                  : M(
                      "key",
                      `The published entry's id does not match its key bytes (${t}).`
                    )
              ),
                (u = {
                  from: e.valid_from ? Date.parse(e.valid_from) : null,
                  to: e.retired_at ? Date.parse(e.retired_at) : null,
                });
            } catch {
              (d = null), n.push(M("key", "The published key is malformed."));
            }
        else
          n.push(
            M("key", `Key ${i} is not in the router's published key list.`)
          );
      }
      let h = null;
      try {
        h = w(e.sig);
      } catch {
        n.push(M("signature", "The signature is not valid base64."));
      }
      let p = v(
        JSON.stringify(
          (function e(t) {
            if ("bigint" == typeof t) return t.toString();
            if (Array.isArray(t)) return t.map(e);
            if (t && "object" == typeof t) {
              let a = {};
              for (let r of Object.keys(t).sort())
                void 0 !== t[r] && (a[r] = e(t[r]));
              return a;
            }
            return t;
          })(e.payload)
        )
      );
      if (d && h && !n.some((e) => "key" === e.id && "fail" === e.status))
        try {
          n.push(
            (await r(d, p, h))
              ? I(
                  "signature",
                  "The signature over the receipt's contents verifies with that key."
                )
              : M(
                  "signature",
                  "The signature does not verify: the receipt was changed or was not signed by that key."
                )
          );
        } catch (e) {
          n.push(
            e?.unsupported
              ? C("signature", `${e.message} Use one of the SDKs to check it.`)
              : M("signature", String(e?.message || e))
          );
        }
      else
        n.some((e) => "signature" === e.id) ||
          n.push(
            M("signature", "Not verified: there is no usable key or signature.")
          );
      let f = ((e) => {
        if ("number" == typeof e.ts && Number.isFinite(e.ts)) return e.ts;
        let t = Date.parse(e.issued || "");
        return Number.isFinite(t) ? t : null;
      })(e.payload);
      if (u && null !== f && (null !== u.from || null !== u.to)) {
        let e = null !== u.from && f < u.from - s,
          t = null !== u.to && f > u.to + s;
        n.push(
          e || t
            ? M(
                "key_window",
                "The receipt is dated outside its signing key's validity window."
              )
            : I(
                "key_window",
                "The receipt's date is inside its key's validity window."
              )
        );
      } else
        n.push(C("key_window", "No key window or receipt date to compare."));
      if (e.leaf && h) {
        let t = "0x" + b(S(S(k(p, h))));
        n.push(
          t === String(e.leaf).toLowerCase()
            ? I(
                "leaf",
                "The receipt's anchor leaf matches its contents and signature."
              )
            : M(
                "leaf",
                "The anchor leaf does not match the receipt's contents and signature."
              )
        );
      } else n.push(C("leaf", "The receipt carries no anchor leaf."));
      let m = "no_proof",
        y = e.anchor;
      if (y && Array.isArray(y.proof) && "string" == typeof y.root && e.leaf) {
        let t = B(e.leaf, y.proof, y.root);
        (m = t ? "proof_valid" : "proof_invalid"),
          n.push(
            t
              ? I(
                  "anchor_proof",
                  `The receipt is included under anchor root ${y.root.slice(
                    0,
                    10
                  )}…`
                )
              : M(
                  "anchor_proof",
                  "The inclusion proof does not lead from the receipt to the stated root."
                )
          );
      } else
        n.push(
          C(
            "anchor_proof",
            "No anchor proof was included. A receipt is anchored within the hour, so fetch it again later to get one."
          )
        );
      return l(m);
    }
    function G(e) {
      let t = 0,
        a = (a) => {
          if (t + a > e.length) throw Error("truncated CBOR");
        },
        r = () => {
          a(1);
          let s = e[t++],
            n = s >> 5,
            i = 31 & s;
          if (7 === n) {
            if (20 === i) return !1;
            if (21 === i) return !0;
            if (22 === i) return null;
            throw Error("unsupported CBOR value");
          }
          let o = i;
          if (i >= 24) {
            let r = { 24: 1, 25: 2, 26: 4, 27: 8 }[i];
            if (!r) throw Error("indefinite CBOR lengths are not allowed");
            a(r), (o = 0);
            for (let a = 0; a < r; a++) o = 256 * o + e[t++];
          }
          if (0 === n) return o;
          if (1 === n) return -1 - o;
          if (2 === n || 3 === n) {
            a(o);
            let r = e.slice(t, t + o);
            return (t += o), 2 === n ? r : new TextDecoder().decode(r);
          }
          if (4 === n) return Array.from({ length: o }, r);
          if (5 === n) {
            let e = new Map();
            for (let t = 0; t < o; t++) e.set(r(), r());
            return e;
          }
          return { tag: o, value: r() };
        },
        s = r();
      if (t !== e.length) throw Error("trailing CBOR bytes");
      return s;
    }
    let U = (e) =>
        e instanceof Map
          ? Object.fromEntries([...e].map(([e, t]) => [String(e), U(t)]))
          : Array.isArray(e)
          ? e.map(U)
          : e,
      J = (e, t) =>
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
      R = (e) => k(J(2, e.length), e);
    async function H(e, t) {
      let a = await j(v(e));
      for (let e of t) a = await j(k(a, v(e)));
      return "sha256:" + b(a);
    }
    async function F(
      e,
      { keys: t, publicKeyHex: a, ed25519: r = E, chunks: s, proof: n } = {}
    ) {
      let i,
        l,
        d = [];
      try {
        (i = w(e)),
          (l = (function (e) {
            let t = G(e);
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
            let a = G(t[0]),
              r = a instanceof Map ? a.get(4) : null;
            return {
              alg: a instanceof Map ? a.get(1) : null,
              keyId: r instanceof Uint8Array ? b(r) : "",
              claims: U(G(t[2])),
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
            M(
              "v2_shape",
              `The v2 receipt is not a readable COSE_Sign1 (${e.message}).`
            ),
          ],
        };
      }
      void 0 !== l.claims.route &&
        d.push(
          o(l.claims.route, l.claims.node?.provider)
            ? I(
                "v2_route",
                "Route explanation v1 is covered by the COSE signature; routing itself is not independently checked."
              )
            : M("v2_route", "Invalid route explanation.")
        ),
        d.push(
          -8 === l.alg
            ? I("v2_alg", "v2: COSE_Sign1 with EdDSA.")
            : M("v2_alg", `v2: unsupported COSE algorithm ${String(l.alg)}.`)
        );
      let u = null;
      try {
        if (a) u = x(a.trim());
        else {
          let e = (Array.isArray(t) ? t : t?.keys || []).find(
            (e) => e.kid === l.keyId
          );
          e && "OKP" === e.kty && "Ed25519" === e.crv && (u = w(e.x));
        }
      } catch {
        u = null;
      }
      if (u && 32 === u.length)
        if (b(await j(u)).slice(0, 16) !== l.keyId)
          d.push(
            M(
              "v2_signature",
              `v2: the receipt names key ${l.keyId}, which is not this key.`
            )
          );
        else
          try {
            let e, t;
            d.push(
              (await r(
                u,
                ((e = l.prot),
                (t = l.payload),
                k(
                  J(4, 4),
                  J(3, 10),
                  v("Signature1"),
                  R(e),
                  R(new Uint8Array()),
                  R(t)
                )),
                l.signature
              ))
                ? I(
                    "v2_signature",
                    "v2: the COSE signature over the claims verifies."
                  )
                : M(
                    "v2_signature",
                    "v2: the COSE signature does not verify: the claims were changed or not signed by that key."
                  )
            );
          } catch (e) {
            d.push(
              e?.unsupported
                ? C(
                    "v2_signature",
                    `${e.message} Use one of the SDKs to check it.`
                  )
                : M("v2_signature", String(e?.message || e))
            );
          }
      else
        d.push(
          M(
            "v2_signature",
            `v2: key ${l.keyId || "(none)"} is not available to check against.`
          )
        );
      if (Array.isArray(s)) {
        let e = await H(l.claims.rid, s);
        d.push(
          e === l.claims.resp?.chain
            ? I(
                "v2_chain",
                `v2: the chain head over ${s.length} streamed events matches.`
              )
            : M(
                "v2_chain",
                "v2: the chain head does not match the streamed events: the stream was cut or changed."
              )
        );
      } else
        d.push(
          C(
            "v2_chain",
            l.claims.resp?.chain
              ? `v2: signed chain head ${_(
                  l.claims.resp.chain
                )}. Paste the streamed events to check it.`
              : "v2: not a streamed response, so there is no chain."
          )
        );
      let c = "0x" + b(S(S(i)));
      if (n && Array.isArray(n.proof) && "string" == typeof n.root) {
        let e = B(c, n.proof, n.root);
        d.push(
          e
            ? I(
                "v2_anchor_proof",
                `v2: included under root ${n.root.slice(0, 10)}…${
                  n.anchored ? "" : " (a root kept off chain, not posted)"
                }`
              )
            : M(
                "v2_anchor_proof",
                "v2: the Merkle path does not lead from this receipt to the root."
              )
        );
      } else
        d.push(
          C(
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
        leaf: c,
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
          let a,
            r = e || {},
            s =
              "attested" === r.status || "simulated" === r.status
                ? r.status
                : "unverified",
            n =
              "attested" === s
                ? {
                    tone: "ok",
                    label: "Attested",
                    text: "The router verified this provider's hardware attestation recently and reports it as attested. That is what the router checked, listed below. It does not show what the provider does with your data, and this page did not contact the provider or read its quote.",
                  }
                : "simulated" === s
                ? {
                    tone: "warn",
                    label: "Simulated",
                    text: "This provider has only simulated (development) evidence. No hardware backs it, so nothing about it is private or verified.",
                  }
                : {
                    tone: "bad",
                    label: "Unverified",
                    text: `${
                      c[r.reason] ||
                      "The router has no current verification for this provider."
                    } Treat it as an ordinary provider: nothing here should be read as a privacy guarantee.`,
                  },
            i = r.measurement || null,
            o = i?.transparency_log || null,
            l = i?.registry || null,
            d = m[l?.state] || m.not_recorded,
            u = Array.isArray(r.verifiers) ? r.verifiers : [],
            p = o?.subject === "measurement_bundle",
            _ = p
              ? "A signed measurement bundle for this compose hash was found in the log"
              : "An entry for the image was found",
            v = i
              ? o?.found &&
                o.inclusion_verified &&
                o.checkpoint_signature_verified
                ? {
                    state: "yes",
                    text: `${_}, its inclusion in the log was verified, and so was the log's signature over its checkpoint.${
                      p
                        ? " The router checked that it was signed with the measurement key it publishes."
                        : ""
                    }`,
                  }
                : o?.found && o.inclusion_verified
                ? {
                    state: "partial",
                    text: `${_} and its inclusion was verified, but the log's signature over the checkpoint was not.`,
                  }
                : o?.found
                ? {
                    state: "partial",
                    text: `${_}, but its inclusion in the log has not been verified.`,
                  }
                : {
                    state: "no",
                    text: "No transparency-log entry was found for the image.",
                  }
              : {
                  state: "no",
                  text: "No measurement recorded, so no log lookup was made.",
                },
            b = "unverified" === s ? null : r.attested_at || null;
          return {
            status: s,
            verdict: n,
            provider: r.provider || "",
            rows: {
              tee: {
                label: "Hardware",
                value: "unverified" === s ? "Not established" : f(r.tee),
                state:
                  "attested" === s
                    ? "known"
                    : "simulated" === s
                    ? "simulated"
                    : "unknown",
              },
              verifiers: {
                label: "Quote checked by",
                value:
                  u.length && "attested" === s ? u.map((e) => h[e] || e) : [],
                empty:
                  "Nobody: no verifier has accepted a quote for this provider.",
                state: "attested" === s && u.length ? "yes" : "no",
              },
              lastVerified: {
                label: "Last verified by the router",
                value: b || "",
                relative: y(b, t),
                empty: "Never, or not recently enough to count.",
                state: b ? "yes" : "no",
              },
            },
            measurement: i
              ? {
                  recorded: !0,
                  currentlyAttested: "attested" === s && !!i.attested_now,
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
                "string" == typeof (a = o?.entry_url) &&
                /^https:\/\/[^\s"'<>]+$/.test(a)
                  ? a
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
                g("attested" === s && r.checks?.quote_verified),
              ],
              [
                "digests_bound_to_quote",
                "The image, compose and model digests are committed inside that quote",
                g("attested" === s && r.checks?.digests_bound_to_quote),
              ],
              [
                "transparency_log_entry",
                p
                  ? "The measurement bundle has an entry in a transparency log"
                  : "The image has an entry in a transparency log",
                g(r.checks?.transparency_log_entry),
              ],
              [
                "transparency_log_checkpoint_signature",
                "The log's signature over that entry was verified",
                g(r.checks?.transparency_log_checkpoint_signature),
              ],
              [
                "registered_on_chain",
                "The measurement is registered on chain",
                g(r.checks?.registered_on_chain),
              ],
            ].map(([e, t, a]) => ({ id: e, label: t, state: a })),
            notChecked: [
              ...(Array.isArray(r.not_checked) ? r.not_checked : []),
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
            a = String(e || "").trim();
          if (!a) return { error: "Paste a receipt first." };
          try {
            t = JSON.parse(a);
          } catch {
            return {
              error: "That is not valid JSON. Paste the whole receipt object.",
            };
          }
          let r = [t, t?.receipt, t?.data, t?.data?.receipt],
            s =
              r.find(
                (e) =>
                  e &&
                  "object" == typeof e &&
                  e.payload &&
                  "string" == typeof e.sig &&
                  "string" == typeof e.key_id
              ) ||
              r.find(
                (e) => e && "object" == typeof e && "string" == typeof e.cose
              );
          return s
            ? { receipt: s }
            : {
                error:
                  "No receipt found. It needs payload, sig and key_id, or a v2 cose field (a chat response's receipt field, or GET /api/v1/receipts/:id, works).",
              };
        },
        "providerIdFromSearch",
        0,
        function (e) {
          let t = new URLSearchParams(String(e || "").replace(/^\?/, "")),
            a = (t.get("p") || t.get("provider") || "").trim();
          return u.test(a) ? a : "";
        },
        "relativeTime",
        0,
        y,
        "shortDigest",
        0,
        _,
        "teeLabel",
        0,
        f,
        "verifyHref",
        0,
        (e) => `/verify/?p=${encodeURIComponent(e)}`,
        "verifyReceipt",
        0,
        O,
      ],
      78182
    );
  },
]);
