(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  84323,
  (e) => {
    e.v({
      scroll: "activity-module__oLIeZW__scroll",
      table: "activity-module__oLIeZW__table",
    });
  },
  9797,
  (e) => {
    e.v({
      agent: "agents-module___f14nG__agent",
      badges: "agents-module___f14nG__badges",
      barLabel: "agents-module___f14nG__barLabel",
      bars: "agents-module___f14nG__bars",
      body: "agents-module___f14nG__body",
      checks: "agents-module___f14nG__checks",
      errors: "agents-module___f14nG__errors",
      event: "agents-module___f14nG__event",
      events: "agents-module___f14nG__events",
      fieldset: "agents-module___f14nG__fieldset",
      hash: "agents-module___f14nG__hash",
      heading: "agents-module___f14nG__heading",
      json: "agents-module___f14nG__json",
      kill: "agents-module___f14nG__kill",
      list: "agents-module___f14nG__list",
      result: "agents-module___f14nG__result",
      window: "agents-module___f14nG__window",
    });
  },
  85748,
  (e) => {
    e.v({
      current: "autonomy-module__yvyDHq__current",
      ladder: "autonomy-module__yvyDHq__ladder",
    });
  },
  54632,
  (e) => {
    e.v({
      details: "starters-module__xeCDna__details",
      fieldset: "starters-module__xeCDna__fieldset",
      json: "starters-module__xeCDna__json",
      result: "starters-module__xeCDna__result",
      settings: "starters-module__xeCDna__settings",
    });
  },
  90602,
  (e) => {
    "use strict";
    var t = e.i(71682),
      s = e.i(67898),
      a = e.i(97674),
      n = e.i(86700),
      r = e.i(98248),
      l = e.i(64265);
    function i({ sealed: e, linked: s = !0 }) {
      let [a, l] = (0, r.useState)(Date.now());
      return (
        (0, r.useEffect)(() => {
          let e = setInterval(() => l(Date.now()), 15e3);
          return () => clearInterval(e);
        }, []),
        e
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(n.default, {
                  evidence: { source: "sealed", data: e },
                  now: a,
                  linked: s,
                }),
                (0, t.jsxs)("span", {
                  className: "help-text",
                  style: { overflowWrap: "anywhere" },
                  children: ["Image ", e.agent_image_digest || "not recorded"],
                }),
              ],
            })
          : null
      );
    }
    function d({ agent: e, request: s }) {
      let [a, n] = (0, r.useState)(""),
        [o, c] = (0, r.useState)(""),
        [u, h] = (0, r.useState)(""),
        [p, m] = (0, r.useState)(e.sealed),
        [x, g] = (0, r.useState)(!1),
        [j, y] = (0, r.useState)("");
      if (
        ((0, r.useEffect)(() => {
          m(e.sealed);
        }, [e.sealed]),
        void 0 === e.sealed)
      )
        return null;
      let b = async (t) => {
          t.preventDefault(), g(!0), y("");
          try {
            let t = await s(
              "/api/v1/agents/" + encodeURIComponent(e.key_hash) + "/sealed",
              {
                method: "POST",
                body: {
                  attestation_url: a,
                  agent_image_digest: o,
                  compose_hash: u,
                },
              }
            );
            m(t.data);
          } catch (e) {
            m({ attested: !1, agent_image_digest: o, compose_hash: u }),
              y(e.message || "Attestation could not be verified.");
          } finally {
            g(!1);
          }
        },
        _ = async () => {
          g(!0), y("");
          try {
            await s(
              "/api/v1/agents/" + encodeURIComponent(e.key_hash) + "/sealed",
              { method: "DELETE" }
            ),
              m(null);
          } catch (e) {
            y(e.message || "Registration could not be removed.");
          } finally {
            g(!1);
          }
        };
      return (0, t.jsxs)("section", {
        className: "control-panel",
        children: [
          (0, t.jsx)("h2", { children: "Sealed hosting" }),
          (0, t.jsx)(i, { sealed: p }),
          (0, t.jsxs)("p", {
            children: [
              "Register the exact measured deployment you approved. Measured code is not audited code. ",
              (0, t.jsx)("a", {
                href: "/docs/#sealed-agents",
                children: "Trust and privacy limits",
              }),
            ],
          }),
          p &&
            !(0, l.sealedLabel)(p) &&
            (0, t.jsx)("p", {
              children: "Sealed attestation is unavailable or expired.",
            }),
          (0, t.jsx)("form", {
            onSubmit: b,
            children: (0, t.jsxs)("fieldset", {
              disabled: x,
              children: [
                (0, t.jsx)("legend", { children: "Owner-approved deployment" }),
                (0, t.jsxs)("label", {
                  children: [
                    "HTTPS attestation URL",
                    (0, t.jsx)("input", {
                      type: "url",
                      required: !0,
                      value: a,
                      onChange: (e) => n(e.target.value),
                    }),
                  ],
                }),
                (0, t.jsxs)("label", {
                  children: [
                    "Agent image sha256 digest",
                    (0, t.jsx)("input", {
                      required: !0,
                      pattern: "sha256:[a-f0-9]{64}",
                      value: o,
                      onChange: (e) => c(e.target.value),
                    }),
                  ],
                }),
                (0, t.jsxs)("label", {
                  children: [
                    "Measured compose sha256 hash",
                    (0, t.jsx)("input", {
                      required: !0,
                      pattern: "sha256:[a-f0-9]{64}",
                      value: u,
                      onChange: (e) => h(e.target.value),
                    }),
                  ],
                }),
                (0, t.jsx)("button", {
                  type: "submit",
                  children: "Register and verify",
                }),
                p &&
                  (0, t.jsx)("button", {
                    type: "button",
                    onClick: _,
                    children: "Remove registration",
                  }),
              ],
            }),
          }),
          j && (0, t.jsx)("p", { role: "alert", children: j }),
        ],
      });
    }
    var o = e.i(54269),
      c = e.i(32837),
      u = e.i(42366),
      h = e.i(85748);
    function p({ agent: e }) {
      let s = (e.policies || []).filter((e) => e.autonomy);
      return s.length
        ? (0, t.jsxs)("section", {
            className: "control-panel",
            children: [
              (0, t.jsx)("h2", { children: "Autonomy ladder" }),
              (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "Trust grows after both the elapsed time and clean request requirement are met at each rung. Spending caps alone increase. The router enforces this for requests through AnyRoute.",
              }),
              s.map((e) =>
                (0, t.jsxs)(
                  "article",
                  {
                    children: [
                      (0, t.jsx)("h3", {
                        children: e.inherited
                          ? "Inherited rulebook"
                          : "Agent rulebook",
                      }),
                      (0, t.jsx)("ol", {
                        className: h.default.ladder,
                        children: (0, c.autonomyLadder)(
                          e.policy,
                          e.autonomy
                        ).map((e) =>
                          (0, t.jsxs)(
                            "li",
                            {
                              className: e.current ? h.default.current : "",
                              "aria-current": e.current ? "step" : void 0,
                              children: [
                                (0, t.jsxs)("strong", {
                                  children: [
                                    "Rung ",
                                    e.rung,
                                    " · caps ×",
                                    e.caps_multiplier,
                                  ],
                                }),
                                (0, t.jsx)("span", {
                                  children:
                                    0 === e.rung
                                      ? "Starting caps"
                                      : `${e.after_days} days and ${e.clean_requests} clean requests at the preceding rung`,
                                }),
                                e.current &&
                                  (0, t.jsx)("span", {
                                    children: "Current rung",
                                  }),
                              ],
                            },
                            e.rung
                          )
                        ),
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          "At this rung since ",
                          (0, u.utcTime)(e.autonomy.since),
                          " · ",
                          e.autonomy.clean_requests,
                          " clean requests.",
                        ],
                      }),
                      e.autonomy.next
                        ? (0, t.jsxs)("p", {
                            role: "status",
                            children: [
                              "Next rung: ",
                              Math.ceil(100 * e.autonomy.next.days_remaining) /
                                100,
                              " days and ",
                              e.autonomy.next.requests_remaining,
                              " more clean requests required.",
                            ],
                          })
                        : (0, t.jsx)("p", {
                            role: "status",
                            children: "Highest rung reached.",
                          }),
                      (0, t.jsxs)("p", {
                        className: "help-text",
                        children: [
                          "Return to rung 0 on: ",
                          e.policy.autonomy.demote_on.join(", ") ||
                            "no selected events",
                          ". Saving a rulebook restarts the ladder. Output token limits, models, tools, lanes, windows and approvals keep their original rules.",
                        ],
                      }),
                    ],
                  },
                  e.key_hash
                )
              ),
            ],
          })
        : null;
    }
    var m = e.i(92882),
      x = e.i(4581),
      g = e.i(9797);
    function j({ request: e, agents: s, onError: a }) {
      let [n, l] = (0, r.useState)([]),
        [i, d] = (0, r.useState)(""),
        [o, c] = (0, r.useState)(0),
        [h, p] = (0, r.useState)(!0);
      (0, r.useEffect)(() => {
        let t = new AbortController(),
          s = async () => {
            try {
              let s = await e("/api/v1/agents/approvals?status=pending", {
                signal: t.signal,
              });
              t.signal.aborted || l((0, u.pendingApprovals)(s));
            } catch (e) {
              t.signal.aborted || a(e);
            } finally {
              t.signal.aborted || p(!1);
            }
          };
        s();
        let n = setInterval(s, 15e3);
        return () => {
          t.abort(), clearInterval(n);
        };
      }, [e, o, a]);
      let x = async (t, s) => {
        d(t);
        try {
          await (0, u.decideAgentApproval)(e, t, s),
            l((e) => e.filter((e) => e.id !== t));
        } catch (e) {
          a(e);
        } finally {
          d(""), c((e) => e + 1);
        }
      };
      return (0, t.jsxs)("section", {
        className: "control-panel",
        children: [
          (0, t.jsxs)("div", {
            className: "button-row",
            children: [
              (0, t.jsx)("h2", { children: "Waiting for you" }),
              (0, t.jsx)(m.Button, {
                secondary: !0,
                disabled: !!i,
                onClick: () => c((e) => e + 1),
                children: "Refresh approvals",
              }),
            ],
          }),
          (0, t.jsx)("p", {
            className: "help-text",
            children:
              "Your agent asks you first above its approval threshold. Approval authorizes one matching request up to this estimated ceiling; the agent must retry before expiry. Other rulebook restrictions still apply.",
          }),
          !n.length &&
            (0, t.jsx)("p", {
              role: "status",
              children: h ? "Reading approvals…" : "No pending approvals.",
            }),
          n.map((e) =>
            (0, t.jsxs)(
              "article",
              {
                children: [
                  (0, t.jsxs)("h3", {
                    children: [
                      s.find((t) => t.key_hash === e.key_hash)?.name ||
                        "Unnamed agent",
                      " · up to ",
                      (0, u.formatUsd)((0, u.picoUsd)(e.max_cost_pico)),
                    ],
                  }),
                  (0, t.jsx)("p", { children: (0, u.intentSummary)(e.intent) }),
                  (0, t.jsxs)("p", {
                    children: ["Expires ", (0, u.utcTime)(e.expires_at)],
                  }),
                  (0, t.jsxs)("div", {
                    className: "button-row",
                    children: [
                      (0, t.jsx)(m.Button, {
                        disabled: !!i || Date.parse(e.expires_at) <= Date.now(),
                        onClick: () => x(e.id, "approve"),
                        children: "Approve",
                      }),
                      (0, t.jsx)(m.Button, {
                        secondary: !0,
                        disabled: !!i || Date.parse(e.expires_at) <= Date.now(),
                        onClick: () => x(e.id, "deny"),
                        children: "Deny",
                      }),
                    ],
                  }),
                ],
              },
              e.id
            )
          ),
        ],
      });
    }
    var y = e.i(51112);
    function b({ values: e, onChange: s, busy: a }) {
      return (0, t.jsxs)("fieldset", {
        disabled: a,
        className: "control-panel",
        children: [
          (0, t.jsx)("legend", { children: "Circuit breakers" }),
          (0, t.jsx)("p", {
            className: "help-text",
            children:
              "Blank limits are omitted. Reaching a recorded rolling limit stops the next request through AnyRoute and kills the agent until you resume it. Resume resets breaker counters; budget caps still include prior spend. In-flight requests may finish.",
          }),
          (0, t.jsx)("div", {
            className: "two-fields",
            children: y.BREAKER_FIELDS.map(([a, n]) =>
              (0, t.jsxs)(
                "div",
                {
                  className: "field",
                  children: [
                    (0, t.jsx)("label", { htmlFor: a, children: n }),
                    (0, t.jsx)("input", {
                      id: a,
                      type: "number",
                      min: "0",
                      max:
                        "max_spend_usd_per_minute" === a
                          ? 1e6
                          : Number.MAX_SAFE_INTEGER,
                      step: "max_spend_usd_per_minute" === a ? "any" : 1,
                      value: e[a],
                      onChange: (t) => s({ ...e, [a]: t.target.value }),
                    }),
                  ],
                },
                a
              )
            ),
          }),
        ],
      });
    }
    function _({ record: e, agent: s }) {
      let a = (0, y.trippedBy)(e, s);
      return (
        a &&
        (0, t.jsxs)("span", {
          className: "badge dark",
          children: ["Tripped by ", a],
        })
      );
    }
    let v = (
      e,
      { from: t = "", to: s = "", cursor: a = "", format: n = "json" } = {}
    ) => {
      let r = new URLSearchParams({ format: n });
      for (let [e, n] of Object.entries({ from: t, to: s, cursor: a }))
        n && r.set(e, n);
      return "/api/v1/agents/" + encodeURIComponent(e) + "/ledger?" + r;
    };
    async function f(e, t, s, a, n) {
      let r = v(t, { ...s, cursor: a, format: n });
      return {
        text: await e(r, { raw: !0 }),
        type: "csv" === n ? "text/csv" : "application/json",
        name: "agent-ledger." + n,
      };
    }
    var k = e.i(84323);
    function w({ agent: e, request: s, refreshVersion: a }) {
      let [l, i] = (0, r.useState)(""),
        [d, o] = (0, r.useState)(""),
        [c, h] = (0, r.useState)({}),
        [p, x] = (0, r.useState)(null),
        [g, j] = (0, r.useState)(""),
        [y, b] = (0, r.useState)([]),
        [_, N] = (0, r.useState)(!1),
        [S, C] = (0, r.useState)(""),
        [A, R] = (0, r.useState)(!1),
        T = (0, r.useCallback)(
          async (t) => {
            N(!0), C(""), x(null);
            try {
              let a = (function (e) {
                if (
                  !Array.isArray(e?.data?.rows) ||
                  !Array.isArray(e?.data?.totals_per_day)
                )
                  throw Error("The activity response could not be read.");
                return {
                  rows: e.data.rows,
                  totals: e.data.totals_per_day,
                  next: e.next_cursor ?? null,
                };
              })(await s(v(e.key_hash, { ...c, cursor: g }), { signal: t }));
              t.aborted || x(a);
            } catch (e) {
              t.aborted || C(e.message);
            } finally {
              t.aborted || N(!1);
            }
          },
          [e.key_hash, c, g, s]
        );
      (0, r.useEffect)(() => {
        let e = new AbortController();
        return T(e.signal), () => e.abort();
      }, [T, a]);
      let q = async (t) => {
        R(!0), C("");
        try {
          let a = await f(s, e.key_hash, c, g, t),
            n = URL.createObjectURL(new Blob([a.text], { type: a.type })),
            r = document.createElement("a");
          (r.href = n),
            (r.download = a.name),
            r.click(),
            setTimeout(() => URL.revokeObjectURL(n), 1e3);
        } catch (e) {
          C(e.message);
        } finally {
          R(!1);
        }
      };
      return (0, t.jsxs)("section", {
        className: "control-panel",
        children: [
          (0, t.jsx)("h2", { children: "Activity & receipts" }),
          (0, t.jsx)("p", {
            className: "help-text",
            children:
              "Requests evaluated by a rulebook or recorded as generations through AnyRoute. New records group the request’s policy checks and receipts. Earlier records without correlation stay separate and are marked unlinked. Errors before evaluation or generation creation are absent. The router reads request text in memory; this ledger contains no prompt or answer text.",
          }),
          (0, t.jsxs)("form", {
            onSubmit: (e) => {
              (e.preventDefault(), l && d && l >= d)
                ? C("From must be before To.")
                : (j(""),
                  b([]),
                  h({
                    from: l ? new Date(l + "T00:00:00Z").toISOString() : "",
                    to: d ? new Date(d + "T00:00:00Z").toISOString() : "",
                  }));
            },
            children: [
              (0, t.jsxs)("div", {
                className: "two-fields",
                children: [
                  (0, t.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "activity-from",
                        children: "From (UTC, inclusive)",
                      }),
                      (0, t.jsx)("input", {
                        id: "activity-from",
                        type: "date",
                        value: l,
                        onChange: (e) => i(e.target.value),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "activity-to",
                        children: "To (UTC, exclusive)",
                      }),
                      (0, t.jsx)("input", {
                        id: "activity-to",
                        type: "date",
                        value: d,
                        onChange: (e) => o(e.target.value),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(m.Button, {
                type: "submit",
                disabled: _,
                children: "Apply dates",
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "button-row",
            children: [
              (0, t.jsx)(m.Button, {
                secondary: !0,
                disabled: !p || A || _,
                onClick: () => q("json"),
                children: "Download JSON page",
              }),
              (0, t.jsx)(m.Button, {
                secondary: !0,
                disabled: !p || A || _,
                onClick: () => q("csv"),
                children: "Download CSV page",
              }),
            ],
          }),
          (0, t.jsx)("p", {
            className: "help-text",
            children:
              "Newest first, up to 100 requests per page. Downloads contain this page. Daily totals cover the full selected range, in UTC. Policy events and their correlations are retained for 90 days while the retention worker runs. A verify link opens the existing receipt view and checker; it does not itself establish signature validity.",
          }),
          S && (0, t.jsx)("p", { role: "alert", children: S }),
          _ &&
            (0, t.jsx)("p", { role: "status", children: "Reading activity…" }),
          p &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  className: k.default.scroll,
                  children: (0, t.jsxs)("table", {
                    className: k.default.table,
                    children: [
                      (0, t.jsx)("caption", { children: "Agent requests" }),
                      (0, t.jsx)("thead", {
                        children: (0, t.jsx)("tr", {
                          children: [
                            "Time (UTC)",
                            "Decision",
                            "Model / lane",
                            "Tokens in / out",
                            "Charged USD",
                            "Receipt",
                            "Approval",
                            "Policy SHA-256",
                          ].map((e) =>
                            (0, t.jsx)("th", { scope: "col", children: e }, e)
                          ),
                        }),
                      }),
                      (0, t.jsx)("tbody", {
                        children: p.rows.map((e) =>
                          (0, t.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, t.jsxs)("td", {
                                  children: [
                                    (0, u.utcTime)(e.time),
                                    e.unlinked &&
                                      (0, t.jsx)("small", {
                                        children: "Unlinked record",
                                      }),
                                  ],
                                }),
                                (0, t.jsx)("td", { children: e.decision }),
                                (0, t.jsxs)("td", {
                                  children: [
                                    e.model || "None",
                                    (0, t.jsx)("small", {
                                      children: e.lane || "Not recorded",
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("td", {
                                  children: [e.tokens_in, " / ", e.tokens_out],
                                }),
                                (0, t.jsx)("td", {
                                  children: (0, u.formatUsd)(e.cost_usd),
                                }),
                                (0, t.jsx)("td", {
                                  children: e.receipts.length
                                    ? e.receipts.map((e) =>
                                        e.receipt_id
                                          ? (0, t.jsxs)(
                                              "span",
                                              {
                                                children: [
                                                  (0, t.jsx)(n.default, {
                                                    evidence: {
                                                      source: "ledger",
                                                      data: e,
                                                      signedOnly: !0,
                                                    },
                                                  }),
                                                  (0, t.jsx)("a", {
                                                    className: "inline-link",
                                                    href: e.verify_url,
                                                    children: e.receipt_id,
                                                  }),
                                                ],
                                              },
                                              e.generation_id
                                            )
                                          : (0, t.jsx)(
                                              "span",
                                              { children: "No signed receipt" },
                                              e.generation_id
                                            )
                                      )
                                    : "No receipt",
                                }),
                                (0, t.jsx)("td", {
                                  children: e.approval_id || "None",
                                }),
                                (0, t.jsx)("td", {
                                  children:
                                    e.policy_sha256s.join("\n") ||
                                    "Not recorded",
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
                !p.rows.length &&
                  (0, t.jsx)("p", {
                    children: "No activity recorded in this range.",
                  }),
                (0, t.jsxs)("div", {
                  className: "button-row",
                  children: [
                    (0, t.jsx)(m.Button, {
                      secondary: !0,
                      disabled: !y.length || _,
                      onClick: () => {
                        j(y.at(-1)), b((e) => e.slice(0, -1));
                      },
                      children: "Newer page",
                    }),
                    (0, t.jsx)(m.Button, {
                      secondary: !0,
                      disabled: !p.next || _,
                      onClick: () => {
                        b((e) => [...e, g]), j(p.next);
                      },
                      children: "Older page",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: k.default.scroll,
                  children: (0, t.jsxs)("table", {
                    className: k.default.table,
                    children: [
                      (0, t.jsx)("caption", { children: "Daily totals (UTC)" }),
                      (0, t.jsx)("thead", {
                        children: (0, t.jsx)("tr", {
                          children: [
                            "Day",
                            "Requests",
                            "Tokens in / out",
                            "Charged USD",
                          ].map((e) =>
                            (0, t.jsx)("th", { scope: "col", children: e }, e)
                          ),
                        }),
                      }),
                      (0, t.jsx)("tbody", {
                        children: p.totals.map((e) =>
                          (0, t.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, t.jsx)("td", { children: e.day }),
                                (0, t.jsx)("td", { children: e.requests }),
                                (0, t.jsxs)("td", {
                                  children: [e.tokens_in, " / ", e.tokens_out],
                                }),
                                (0, t.jsx)("td", {
                                  children: (0, u.formatUsd)(e.cost_usd),
                                }),
                              ],
                            },
                            e.day
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
        ],
      });
    }
    function N({ request: e }) {
      let [s, a] = (0, r.useState)([]),
        [n, l] = (0, r.useState)(null),
        [i, d] = (0, r.useState)(""),
        [o, c] = (0, r.useState)(!1),
        [u, h] = (0, r.useState)(!1),
        [p, x] = (0, r.useState)(""),
        [g, j] = (0, r.useState)(0);
      (0, r.useEffect)(() => {
        let t = new AbortController();
        return (
          l(null),
          a([]),
          d(""),
          c(!1),
          e("/api/v1/agreements", { signal: t.signal })
            .then((e) => {
              t.signal.aborted || a(e.data || []);
            })
            .catch((e) => {
              t.signal.aborted ||
                (c(404 === e.status),
                d(
                  404 === e.status
                    ? "Agreements are not switched on yet for this router."
                    : e.message
                ));
            }),
          () => t.abort()
        );
      }, [e, g]);
      let y = async (t) => {
          h(!0), d(""), l(null), x("");
          try {
            let s = await e(`/api/v1/agreements/${t}`);
            l(s.data);
          } catch (e) {
            d(e.message);
          } finally {
            h(!1);
          }
        },
        b = async (t) => {
          t.preventDefault(), h(!0), d("");
          try {
            let t = p;
            try {
              t = JSON.parse(p);
            } catch {}
            await e(`/api/v1/agreements/${n.id}/evidence`, {
              method: "POST",
              body: t,
            });
            let s = await e(`/api/v1/agreements/${n.id}`);
            l(s.data), x("");
          } catch (e) {
            d(e.message);
          } finally {
            h(!1);
          }
        };
      return (0, t.jsxs)("section", {
        className: "control-panel",
        children: [
          (0, t.jsx)("h2", { children: "Agreements" }),
          (0, t.jsxs)("p", {
            className: "help-text",
            children: [
              "Wallet-linked parties can read their USDG escrow agreements. Contracts are not deployed at anyroute.tech yet. The payer signs its own transaction; AnyRoute does not hold the escrow funds. ",
              (0, t.jsx)("a", {
                href: "/docs/#agreements",
                children: "Read the trust model",
              }),
              ".",
            ],
          }),
          (0, t.jsx)(m.Button, {
            secondary: !0,
            disabled: u,
            onClick: () => j((e) => e + 1),
            children: "Refresh agreements",
          }),
          i && (0, t.jsx)("p", { role: o ? "status" : "alert", children: i }),
          !o &&
            !s.length &&
            (0, t.jsx)("p", {
              children: "No agreements returned for this wallet.",
            }),
          (0, t.jsx)("ul", {
            children: s.map((e) =>
              (0, t.jsx)(
                "li",
                {
                  children: (0, t.jsxs)("button", {
                    type: "button",
                    disabled: u,
                    onClick: () => y(e.id),
                    children: [
                      "Milestone ",
                      e.id,
                      " · ",
                      e.state,
                      " · ",
                      e.amount,
                      " USDG base units",
                    ],
                  }),
                },
                e.id
              )
            ),
          }),
          n &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("h3", { children: ["Milestone ", n.id] }),
                (0, t.jsxs)("p", { children: ["Dispute state: ", n.state] }),
                (0, t.jsxs)("p", {
                  children: [
                    "Payer: ",
                    (0, t.jsx)("code", { children: n.payer }),
                    (0, t.jsx)("br", {}),
                    "Payee: ",
                    (0, t.jsx)("code", { children: n.payee }),
                  ],
                }),
                (0, t.jsxs)("p", {
                  children: [
                    "Terms hash: ",
                    (0, t.jsx)("code", { children: n.termsHash }),
                  ],
                }),
                (0, t.jsxs)("p", {
                  children: [
                    "Deliverable hashes: ",
                    (n.deliverables || []).join(", ") || "None recorded",
                  ],
                }),
                (0, t.jsx)("h3", { children: "Party evidence" }),
                (0, t.jsx)("p", {
                  className: "help-text",
                  children:
                    "Both parties and the router can read uploaded evidence. Stored encrypted at rest; jury calls send decrypted evidence to attested models. Upload during the evidence window. Resolution plus the configured retention interval permits deletion; copies in backups follow the operator’s policy.",
                }),
                (0, t.jsx)("ul", {
                  children: (n.evidence || []).map((e, s) =>
                    (0, t.jsxs)(
                      "li",
                      {
                        children: [
                          (0, t.jsxs)("code", {
                            children: [e.party, " · ", e.sha256],
                          }),
                          (0, t.jsx)("pre", {
                            style: {
                              whiteSpace: "pre-wrap",
                              overflowWrap: "anywhere",
                            },
                            children:
                              "string" == typeof e.content
                                ? e.content
                                : JSON.stringify(e.content, null, 2),
                          }),
                        ],
                      },
                      `${e.sha256}-${s}`
                    )
                  ),
                }),
                !["resolved", "released"].includes(n.state) &&
                  (0, t.jsxs)("form", {
                    onSubmit: b,
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "agreement-evidence",
                        children: "Evidence text or JSON",
                      }),
                      (0, t.jsx)("textarea", {
                        id: "agreement-evidence",
                        value: p,
                        maxLength: 65536,
                        onChange: (e) => x(e.target.value),
                        required: !0,
                      }),
                      (0, t.jsx)(m.Button, {
                        type: "submit",
                        disabled: u || !p.trim(),
                        children: "Upload evidence",
                      }),
                    ],
                  }),
                (0, t.jsx)("h3", { children: "Router-run jury" }),
                n.jury
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsxs)("p", {
                          children: [
                            "Status: ",
                            n.jury.status,
                            " · ",
                            n.jury.statement.verdict
                              ? `${n.jury.statement.verdict.verdict}: ${n.jury.statement.verdict.payee_bps} bps to payee`
                              : "Unresolved jury; no automatic ruling",
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            "Evidence root: ",
                            (0, t.jsx)("code", {
                              children: n.jury.evidence_root,
                            }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className: "help-text",
                          children:
                            "Dry run stores a would-be ruling without posting. The router runs the jury and signs the statement. Attestation establishes hardware claims, not whether a verdict is correct.",
                        }),
                        (0, t.jsx)("ul", {
                          children: n.jury.statement.votes.map((e) =>
                            (0, t.jsxs)(
                              "li",
                              {
                                children: [
                                  e.model,
                                  ": ",
                                  e.verdict
                                    ? `${e.verdict.verdict} \xb7 ${e.verdict.payee_bps} bps \xb7 ${e.verdict.reason}`
                                    : e.failure || "No verdict",
                                  " ",
                                  e.receipt_id &&
                                    (e.internal_receipt
                                      ? (0, t.jsxs)("span", {
                                          children: [
                                            "Operational receipt ",
                                            (0, t.jsx)("code", {
                                              children: e.receipt_id,
                                            }),
                                            " · attestation and signature in the statement below",
                                          ],
                                        })
                                      : (0, t.jsxs)("a", {
                                          href:
                                            e.receipt_url ||
                                            `/verify/?id=${encodeURIComponent(
                                              e.receipt_id
                                            )}`,
                                          children: ["Receipt ", e.receipt_id],
                                        })),
                                ],
                              },
                              e.model
                            )
                          ),
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            "Statement key: ",
                            (0, t.jsx)("code", { children: n.jury.key_id }),
                          ],
                        }),
                        (0, t.jsxs)("details", {
                          children: [
                            (0, t.jsx)("summary", {
                              children: "Signed jury statement",
                            }),
                            (0, t.jsx)("pre", {
                              style: {
                                whiteSpace: "pre-wrap",
                                overflowWrap: "anywhere",
                              },
                              children: JSON.stringify(n.jury, null, 2),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, t.jsx)("p", {
                      children:
                        "No jury statement recorded. A dispute waits for the evidence window and a configured jury worker.",
                    }),
              ],
            }),
        ],
      });
    }
    function S({ agent: e, request: s, refreshVersion: a, children: n }) {
      let [l, i] = (0, r.useState)("rulebook");
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)(d, { agent: e, request: s }),
          (0, t.jsxs)("div", {
            className: "button-row",
            role: "tablist",
            "aria-label": "Agent views",
            children: [
              (0, t.jsx)("button", {
                type: "button",
                role: "tab",
                id: "agent-rulebook-tab",
                "aria-selected": "rulebook" === l,
                "aria-controls": "agent-view",
                onClick: () => i("rulebook"),
                children: "Rulebook",
              }),
              (0, t.jsx)("button", {
                type: "button",
                role: "tab",
                id: "agent-activity-tab",
                "aria-selected": "activity" === l,
                "aria-controls": "agent-view",
                onClick: () => i("activity"),
                children: "Activity & receipts",
              }),
              (0, t.jsx)("button", {
                type: "button",
                role: "tab",
                id: "agent-agreements-tab",
                "aria-selected": "agreements" === l,
                "aria-controls": "agent-view",
                onClick: () => i("agreements"),
                children: "Agreements",
              }),
            ],
          }),
          (0, t.jsx)("div", {
            id: "agent-view",
            role: "tabpanel",
            "aria-labelledby":
              "agreements" === l
                ? "agent-agreements-tab"
                : "activity" === l
                ? "agent-activity-tab"
                : "agent-rulebook-tab",
            children:
              "agreements" === l
                ? (0, t.jsx)(N, { request: s })
                : "activity" === l
                ? (0, t.jsx)(w, { agent: e, request: s, refreshVersion: a })
                : n,
          }),
        ],
      });
    }
    var C = e.i(39331);
    function A({ request: e, keyHash: s, refreshVersion: a, onError: n }) {
      let [l, i] = (0, r.useState)([]),
        [d, o] = (0, r.useState)(!0),
        [c, h] = (0, r.useState)(0);
      return (
        (0, r.useEffect)(() => {
          let t = new AbortController();
          return (
            o(!0),
            i([]),
            e("/api/v1/agents/" + encodeURIComponent(s) + "/alerts", {
              signal: t.signal,
            })
              .then((e) => {
                if (!t.signal.aborted) {
                  if (!Array.isArray(e.data))
                    throw Error("The alerts response could not be read.");
                  i(e.data);
                }
              })
              .catch((e) => {
                t.signal.aborted || n(e);
              })
              .finally(() => {
                t.signal.aborted || o(!1);
              }),
            () => t.abort()
          );
        }, [e, s, a, c, n]),
        (0, t.jsxs)("section", {
          className: "control-panel",
          children: [
            (0, t.jsx)("h2", { children: "Owner alerts" }),
            (0, t.jsx)("p", {
              className: "help-text",
              children:
                "Newest 100 alerts across the account, kept for up to 90 days. Delivery runs every minute while the worker is active. Cap alerts count charges plus open reservations; each percentage is announced once per rolling hour, day or week. No prompt or answer text is included.",
            }),
            (0, t.jsxs)("p", {
              children: [
                (0, t.jsx)("a", {
                  href: "/dashboard/webhooks/",
                  children: "Manage webhook destinations",
                }),
                " where signing is enabled.",
              ],
            }),
            " ",
            (0, t.jsx)("button", {
              className: "text-button",
              disabled: d,
              onClick: () => h((e) => e + 1),
              children: "Refresh alerts",
            }),
            d
              ? (0, t.jsx)("p", { role: "status", children: "Reading alerts…" })
              : !l.length &&
                (0, t.jsx)("p", {
                  children: "No alerts recorded for this agent.",
                }),
            (0, t.jsx)("ol", {
              children: l.map((e) =>
                (0, t.jsxs)(
                  "li",
                  {
                    children: [
                      (0, t.jsx)("strong", { children: (0, C.alertLabel)(e) }),
                      " · ",
                      (0, t.jsx)("time", {
                        dateTime: e.at,
                        children: (0, u.utcTime)(e.at),
                      }),
                      (0, t.jsx)("p", {
                        children:
                          {
                            pending: "Delivery pending",
                            delivered: "Delivered to linked channels",
                            failed: "Delivery failed after bounded attempts",
                            feed_only: "Feed only: no selected linked channel",
                          }[e.delivery] || "Delivery status unavailable",
                      }),
                    ],
                  },
                  e.id
                )
              ),
            }),
          ],
        })
      );
    }
    function R({ value: e, onChange: s, disabled: a }) {
      let n = (t) => s({ ...e, ...t });
      return (0, t.jsxs)("fieldset", {
        disabled: a,
        children: [
          (0, t.jsx)("legend", { children: "Owner alerts" }),
          (0, t.jsxs)("label", {
            className: "check-label",
            children: [
              (0, t.jsx)("input", {
                type: "checkbox",
                checked: void 0 !== e,
                onChange: (e) => s(e.target.checked ? {} : void 0),
              }),
              "Enable alerts for this rulebook",
            ],
          }),
          void 0 !== e &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("div", {
                  className: "field",
                  children: [
                    (0, t.jsx)("label", {
                      htmlFor: "alert-percent",
                      children: "Cap percentages (comma separated)",
                    }),
                    (0, t.jsx)("input", {
                      id: "alert-percent",
                      value: (e.at_percent ?? [80, 100]).join(","),
                      onChange: (e) =>
                        n({
                          at_percent:
                            "" === e.target.value.trim()
                              ? []
                              : e.target.value.split(",").map(Number),
                        }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "field",
                  children: [
                    (0, t.jsx)("label", {
                      htmlFor: "alert-denials",
                      children: "Denials in 10 minutes",
                    }),
                    (0, t.jsx)("input", {
                      id: "alert-denials",
                      type: "number",
                      min: "1",
                      max: "10000",
                      step: "1",
                      value: e.denials_in_10min ?? 5,
                      onChange: (e) =>
                        n({ denials_in_10min: Number(e.target.value) }),
                    }),
                  ],
                }),
                ["webhook", "telegram", "email"].map((s) =>
                  (0, t.jsxs)(
                    "label",
                    {
                      className: "check-label",
                      children: [
                        (0, t.jsx)("input", {
                          type: "checkbox",
                          checked: (
                            e.channels ?? ["webhook", "telegram"]
                          ).includes(s),
                          onChange: (t) =>
                            n({
                              channels: t.target.checked
                                ? [
                                    ...(e.channels ?? ["webhook", "telegram"]),
                                    s,
                                  ]
                                : (
                                    e.channels ?? ["webhook", "telegram"]
                                  ).filter((e) => e !== s),
                            }),
                        }),
                        "telegram" === s ? "Telegram" : s,
                      ],
                    },
                    s
                  )
                ),
                (0, t.jsx)("p", {
                  className: "help-text",
                  children:
                    "Reuses linked Spend Watch webhooks and principal Telegram links. Email has no account destination. With no selected linked channel, entries stay in this feed only. No prompt text is included.",
                }),
              ],
            }),
        ],
      });
    }
    let T = (e, t = {}) => ({
        version: 1,
        models: {},
        lanes: ["public"],
        caps: {
          per_request_usd: 0.02,
          per_hour_usd: 0.1,
          per_day_usd: 0.5,
          per_week_usd: 2,
          max_output_tokens: 512,
          ...e,
        },
        tools: { allow: [] },
        approval: { above_usd: 0.01 },
        breakers: { max_requests_per_minute: 5, max_denials_per_10min: 3 },
        on_breach: "deny",
        ...t,
      }),
      q = [
        {
          id: "research",
          name: "Research assistant",
          description:
            "Low spending caps and no declared tools: room to read and summarise, not to run up a bill.",
          policy: T({}),
        },
        {
          id: "coding",
          name: "Coding agent",
          description:
            "More room for long code answers. Ask first above two cents.",
          policy: T(
            {
              per_request_usd: 0.1,
              per_hour_usd: 0.5,
              per_day_usd: 2,
              per_week_usd: 8,
              max_output_tokens: 4096,
            },
            { approval: { above_usd: 0.02 } }
          ),
        },
        {
          id: "shopping",
          name: "Shopping and payments agent",
          description:
            "Ask first above a tenth of a cent. Allow weekday requests only during the chosen UTC hours. Payment tools stay denied until you edit the rulebook.",
          policy: T(
            {
              per_request_usd: 0.01,
              per_hour_usd: 0.05,
              per_day_usd: 0.1,
              per_week_usd: 0.5,
            },
            {
              approval: { above_usd: 0.001 },
              windows: [
                { days: [1, 2, 3, 4, 5], start: "09:00", end: "17:00" },
              ],
            }
          ),
        },
        {
          id: "support",
          name: "Customer support bot",
          description:
            "Keep replies short and capped. Show budget and denial alerts in the agent feed.",
          policy: T(
            {
              per_request_usd: 0.01,
              per_hour_usd: 0.2,
              per_day_usd: 1,
              per_week_usd: 5,
              max_output_tokens: 256,
            },
            {
              approval: { above_usd: 0.005 },
              alerts: {
                at_percent: [50, 80, 100],
                denials_in_10min: 3,
                channels: [],
              },
            }
          ),
        },
        {
          id: "private",
          name: "Proven hardware only",
          description:
            "Require the attested lane and its existing hardware checks. Ordinary requests remain readable by the router and answering provider; this rulebook does not enable encrypted chat.",
          policy: T({}, { lanes: ["attested"] }),
        },
        {
          id: "experiment",
          name: "Experiment safely",
          description:
            "Keep the daily cap at five cents. Stop future requests on a breach or the first circuit breaker trip; the owner must resume.",
          policy: T(
            {
              per_request_usd: 0.01,
              per_hour_usd: 0.02,
              per_day_usd: 0.05,
              per_week_usd: 0.2,
              max_output_tokens: 256,
            },
            {
              approval: { above_usd: 0.005 },
              breakers: {
                max_spend_usd_per_minute: 0.02,
                max_requests_per_minute: 2,
                max_denials_per_10min: 1,
              },
              on_breach: "kill",
            }
          ),
        },
      ];
    async function D(e, t, s) {
      if (!t || !q.includes(s))
        throw Error("Select an agent and a starter rulebook.");
      return e(`/api/v1/agents/${encodeURIComponent(t)}/policy`, {
        method: "PUT",
        body: structuredClone(s.policy),
      });
    }
    var E = e.i(54632);
    function U({ agent: e, request: s, onApplied: a, disabled: n = !1 }) {
      var l;
      let [i, d] = (0, r.useState)(q[0].id),
        [o, c] = (0, r.useState)(!1),
        [u, h] = (0, r.useState)(""),
        p = (0, r.useRef)(!0);
      (0, r.useEffect)(
        () => (
          (p.current = !0),
          () => {
            p.current = !1;
          }
        ),
        []
      );
      let x = q.find((e) => e.id === i);
      return (0, t.jsxs)("section", {
        id: "rulebook-templates",
        className: "control-panel",
        children: [
          (0, t.jsx)("h2", { children: "Start from a rulebook template" }),
          (0, t.jsx)("p", {
            className: "help-text",
            children:
              "Choose a starting point and review every setting before applying it. Model choices do not guarantee availability or speed; caps limit spending. All starters deny declared tools. Rules only cover requests through AnyRoute.",
          }),
          (0, t.jsxs)("div", {
            className: "field",
            children: [
              (0, t.jsx)("label", {
                htmlFor: "starter-choice",
                children: "Starter rulebook",
              }),
              (0, t.jsx)("select", {
                id: "starter-choice",
                value: i,
                disabled: o,
                onChange: (e) => {
                  d(e.target.value), h("");
                },
                children: q.map((e) =>
                  (0, t.jsx)("option", { value: e.id, children: e.name }, e.id)
                ),
              }),
            ],
          }),
          (0, t.jsx)("p", { children: x.description }),
          (0, t.jsx)("dl", {
            className: E.default.settings,
            children: ((l = x.policy),
            [
              [
                "Models",
                l.models.allow?.length
                  ? l.models.allow.join(", ")
                  : "Any model (spending caps still apply)",
              ],
              ["Lanes", l.lanes.join(", ")],
              [
                "Spending caps (USD)",
                `Request $${l.caps.per_request_usd}; rolling hour $${l.caps.per_hour_usd}; day $${l.caps.per_day_usd}; week $${l.caps.per_week_usd}`,
              ],
              ["Maximum output", `${l.caps.max_output_tokens} tokens`],
              [
                "Tools",
                l.tools.allow.length
                  ? l.tools.allow.join(", ")
                  : "All declared tools denied",
              ],
              [
                "Working hours",
                l.windows
                  ? "Monday–Friday, 09:00–17:00 UTC (end excluded)"
                  : "Any time",
              ],
              ["Ask first", `Above $${l.approval.above_usd}; caps still apply`],
              [
                "Circuit breakers",
                Object.entries(l.breakers)
                  .map(
                    ([e, t]) =>
                      `${
                        {
                          max_requests_per_minute:
                            "Requests per rolling minute",
                          max_denials_per_10min:
                            "Denials per rolling ten minutes",
                          max_spend_usd_per_minute: "USD per rolling minute",
                        }[e]
                      }: ${t}`
                  )
                  .join("; "),
              ],
              [
                "On breach",
                "kill" === l.on_breach
                  ? "Stop future requests until resumed"
                  : "Deny this request; breaker trips stop future requests until resumed",
              ],
              [
                "Alerts",
                l.alerts
                  ? "Agent feed at 50%, 80%, 100% of caps and 3 denials in ten minutes; no external channels"
                  : "Existing router alert defaults; no channel configuration set",
              ],
              ["Autonomy", "No automatic spending cap increases"],
              ["Agreements", "No agreement rules set"],
            ]).map(([e, s]) =>
              (0, t.jsxs)(
                "div",
                {
                  children: [
                    (0, t.jsx)("dt", { children: e }),
                    (0, t.jsx)("dd", { children: s }),
                  ],
                },
                e
              )
            ),
          }),
          (0, t.jsxs)("details", {
            className: E.default.details,
            children: [
              (0, t.jsx)("summary", { children: "View exact rulebook JSON" }),
              (0, t.jsx)("pre", {
                className: E.default.json,
                children: JSON.stringify(x.policy, null, 2),
              }),
            ],
          }),
          e && s
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("p", {
                    className: "help-text",
                    children: [
                      "Apply to ",
                      e.name || "selected agent",
                      " (",
                      e.key_hash,
                      "). This replaces its own rulebook, including autonomy, alerts and agreement settings. Inherited rules and its stopped state still apply. You can edit the saved rulebook below.",
                    ],
                  }),
                  (0, t.jsx)(m.Button, {
                    disabled: o || n,
                    onClick: async () => {
                      c(!0), h("");
                      try {
                        await D(s, e.key_hash, x),
                          p.current &&
                            (h("Rulebook saved. You can edit it below."), a());
                      } catch (e) {
                        p.current &&
                          h(e.message || "The rulebook could not be saved.");
                      } finally {
                        p.current && c(!1);
                      }
                    },
                    children: o ? "Applying…" : "Apply rulebook",
                  }),
                ],
              })
            : (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "Connect a management or owner/admin key, then select an agent to apply a rulebook.",
              }),
          u && (0, t.jsx)("p", { role: "status", children: u }),
        ],
      });
    }
    async function I(e, t, s, a = x.api, n) {
      if (!e) throw Error("Select an agent to check.");
      if (!(0, x.validKey)(t))
        throw Error("Enter the selected agent’s API key.");
      let { intent: r, errors: l } = (0, u.sampleIntent)(s);
      if (l.length) throw Error(l.join(" "));
      let i = { key: t.trim(), signal: n },
        d = await a("/api/v1/agents/me", i);
      if (d?.data?.key_hash !== e)
        throw Error(
          "This key belongs to a different agent. Enter the selected agent’s key."
        );
      let o = await a("/api/v1/agents/check", {
        ...i,
        method: "POST",
        body: r,
      });
      if (
        !["allow", "approval_required", "deny"].includes(o?.data?.decision) ||
        !Array.isArray(o?.data?.reasons)
      )
        throw Error("The router’s decision could not be read.");
      return o.data;
    }
    function F({ agent: e, refreshVersion: s }) {
      let [a, n] = (0, r.useState)({
          model: "",
          lane: "public",
          cost: "0.01",
          tokens: "512",
          tools: "",
        }),
        [l, i] = (0, r.useState)(""),
        [d, o] = (0, r.useState)(null),
        [c, h] = (0, r.useState)(""),
        [p, x] = (0, r.useState)(!1),
        g = (0, r.useRef)(null),
        j = () => {
          g.current?.abort(), (g.current = null), x(!1), o(null), h("");
        };
      (0, r.useEffect)(() => (j(), () => g.current?.abort()), [s]);
      let y = (e, t) => {
        j(), n((s) => ({ ...s, [e]: t }));
      };
      return (0, t.jsxs)("section", {
        className: "control-panel",
        children: [
          (0, t.jsx)("h2", { children: "Try a request" }),
          (0, t.jsxs)("p", {
            className: "help-text",
            children: [
              "Check ",
              e.name || "this agent",
              " against its current and inherited rules. No spending, no prompt and nothing sent to a model. This checks rules only: it does not reserve budget, verify model or lane availability, or guarantee a later request.",
            ],
          }),
          (0, t.jsxs)("form", {
            onSubmit: async (t) => {
              t.preventDefault(), j();
              let s = new AbortController();
              (g.current = s), x(!0);
              try {
                let t = await I(e.key_hash, l, a, void 0, s.signal);
                s.signal.aborted || o(t);
              } catch (e) {
                s.signal.aborted ||
                  h(e.message || "The request could not be checked.");
              } finally {
                s.signal.aborted || ((g.current = null), x(!1));
              }
            },
            children: [
              (0, t.jsxs)("fieldset", {
                className: E.default.fieldset,
                disabled: p,
                children: [
                  (0, t.jsx)("legend", { children: "Request details" }),
                  (0, t.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "starter-agent-key",
                        children: "Selected agent’s API key",
                      }),
                      (0, t.jsx)("input", {
                        id: "starter-agent-key",
                        type: "password",
                        autoComplete: "off",
                        spellCheck: !1,
                        required: !0,
                        value: l,
                        onChange: (e) => {
                          j(), i(e.target.value);
                        },
                      }),
                      (0, t.jsx)("p", {
                        className: "help-text",
                        children:
                          "Kept in memory on this page. The connected management key is never used as a substitute.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "starter-model",
                        children: "Model identifier",
                      }),
                      (0, t.jsx)("input", {
                        id: "starter-model",
                        required: !0,
                        maxLength: 160,
                        value: a.model,
                        onChange: (e) => y("model", e.target.value),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "two-fields",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "field",
                        children: [
                          (0, t.jsx)("label", {
                            htmlFor: "starter-lane",
                            children: "Lane",
                          }),
                          (0, t.jsx)("select", {
                            id: "starter-lane",
                            value: a.lane,
                            onChange: (e) => y("lane", e.target.value),
                            children: u.LANES.map((e) =>
                              (0, t.jsx)("option", { children: e }, e)
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "field",
                        children: [
                          (0, t.jsx)("label", {
                            htmlFor: "starter-cost",
                            children: "Estimated cost (USD)",
                          }),
                          (0, t.jsx)("input", {
                            id: "starter-cost",
                            type: "number",
                            required: !0,
                            min: "0",
                            max: u.LIMITS.usd,
                            step: "any",
                            value: a.cost,
                            onChange: (e) => y("cost", e.target.value),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "starter-tokens",
                        children: "Maximum output tokens",
                      }),
                      (0, t.jsx)("input", {
                        id: "starter-tokens",
                        type: "number",
                        min: "1",
                        max: u.LIMITS.tokens,
                        step: "1",
                        value: a.tokens,
                        onChange: (e) => y("tokens", e.target.value),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "starter-tools",
                        children: "Declared tools (one per line or comma)",
                      }),
                      (0, t.jsx)("textarea", {
                        id: "starter-tools",
                        rows: 2,
                        value: a.tools,
                        onChange: (e) => y("tools", e.target.value),
                      }),
                    ],
                  }),
                ],
              }),
              c && (0, t.jsx)("p", { role: "alert", children: c }),
              (0, t.jsx)(m.Button, {
                type: "submit",
                disabled: p,
                children: p ? "Checking…" : "Check request",
              }),
            ],
          }),
          d &&
            (0, t.jsxs)("div", {
              className: E.default.result,
              role: "status",
              children: [
                (0, t.jsx)("strong", {
                  children: (0, u.decisionText)(d.decision),
                }),
                d.reasons.length
                  ? (0, t.jsx)("ul", {
                      children: d.reasons.map((e, s) =>
                        (0, t.jsx)("li", { children: (0, u.reasonText)(e) }, s)
                      ),
                    })
                  : (0, t.jsx)("p", {
                      children:
                        "No rule in the current rulebooks blocks this estimate.",
                    }),
              ],
            }),
        ],
      });
    }
    function O({ label: e, id: s, children: a }) {
      return (0, t.jsxs)("div", {
        className: "field",
        children: [(0, t.jsx)("label", { htmlFor: s, children: e }), a],
      });
    }
    function L({ errors: e }) {
      return (
        e.length > 0 &&
        (0, t.jsx)("ul", {
          className: g.default.errors,
          role: "alert",
          children: e.map((e) => (0, t.jsx)("li", { children: e }, e)),
        })
      );
    }
    function $({ agent: e }) {
      return (0, t.jsx)("div", {
        className: g.default.bars,
        children: (0, u.capBars)(e).map((e) =>
          (0, t.jsxs)(
            "div",
            {
              children: [
                (0, t.jsxs)("span", {
                  className: g.default.barLabel,
                  children: [
                    (0, t.jsxs)("span", { children: ["Rolling ", e.period] }),
                    (0, t.jsx)("span", { children: e.label }),
                  ],
                }),
                (0, t.jsx)("progress", {
                  max: "100",
                  value: e.percent,
                  "aria-label": `Rolling ${e.period}: ${e.label}`,
                }),
              ],
            },
            e.period
          )
        ),
      });
    }
    function B({ policy: e, onSave: s, onRemove: a, busy: n, hasPolicy: l }) {
      let [i, d] = (0, r.useState)(() => (0, u.policyForm)(e)),
        [o, c] = (0, r.useState)([]),
        [h, p] = (0, r.useState)(!1),
        x = (e, t) => d((s) => ({ ...s, [e]: t })),
        j = (e, t) =>
          d((s) => ({
            ...s,
            windows: s.windows.map((s, a) => (a === e ? { ...s, ...t } : s)),
          })),
        y = (0, u.buildPolicy)(i);
      return (0, t.jsxs)("form", {
        onSubmit: (e) => {
          e.preventDefault(), c(y.errors), y.errors.length || s(y.policy);
        },
        children: [
          (0, t.jsxs)("fieldset", {
            disabled: n,
            className: g.default.fieldset,
            children: [
              (0, t.jsx)("legend", { children: "Models and tools" }),
              (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "One entry per line or comma. Model identifiers and author/* patterns are accepted. Deny wins. Blank lists add no restriction unless you choose to deny tools below.",
              }),
              (0, t.jsx)("div", {
                className: "two-fields",
                children: [
                  ["modelAllow", "Allowed models"],
                  ["modelDeny", "Denied models"],
                  ["toolAllow", "Allowed tools"],
                  ["toolDeny", "Denied tools"],
                ].map(([e, s]) =>
                  (0, t.jsx)(
                    O,
                    {
                      id: e,
                      label: s,
                      children: (0, t.jsx)("textarea", {
                        id: e,
                        value: i[e],
                        onChange: (t) => x(e, t.target.value),
                        rows: 3,
                      }),
                    },
                    e
                  )
                ),
              }),
            ],
          }),
          (0, t.jsxs)("label", {
            className: "check-label",
            children: [
              (0, t.jsx)("input", {
                type: "checkbox",
                checked: i.restrictTools,
                onChange: (e) => x("restrictTools", e.target.checked),
                disabled: n,
              }),
              "Deny all declared tools when the allowed list is blank",
            ],
          }),
          " ",
          (0, t.jsxs)("fieldset", {
            disabled: n,
            className: g.default.fieldset,
            children: [
              (0, t.jsx)("legend", { children: "Allowed lanes" }),
              (0, t.jsxs)("label", {
                className: "check-label",
                children: [
                  (0, t.jsx)("input", {
                    type: "checkbox",
                    checked: i.restrictLanes,
                    onChange: (e) => x("restrictLanes", e.target.checked),
                  }),
                  "Restrict lanes",
                ],
              }),
              (0, t.jsx)("div", {
                className: g.default.checks,
                children: u.LANES.map((e) =>
                  (0, t.jsxs)(
                    "label",
                    {
                      className: "check-label",
                      children: [
                        (0, t.jsx)("input", {
                          type: "checkbox",
                          disabled: !i.restrictLanes,
                          checked: i.lanes.includes(e),
                          onChange: (t) =>
                            x(
                              "lanes",
                              t.target.checked
                                ? [...i.lanes, e]
                                : i.lanes.filter((t) => t !== e)
                            ),
                        }),
                        e,
                      ],
                    },
                    e
                  )
                ),
              }),
              (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "With restrictions on, no checked lanes means every lane is denied. Selecting a lane does not establish its availability.",
              }),
            ],
          }),
          (0, t.jsxs)("fieldset", {
            disabled: n,
            className: g.default.fieldset,
            children: [
              (0, t.jsx)("legend", { children: "Budget caps" }),
              (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "Blank caps are omitted. Spend uses rolling hour, day and week windows.",
              }),
              (0, t.jsx)("div", {
                className: "two-fields",
                children: u.CAP_FIELDS.map((e) =>
                  (0, t.jsx)(
                    O,
                    {
                      id: e,
                      label:
                        "max_output_tokens" === e
                          ? "Maximum output tokens"
                          : `${e
                              .replace("per_", "Per ")
                              .replace("_usd", "")} cap (USD)`,
                      children: (0, t.jsx)("input", {
                        id: e,
                        type: "number",
                        min: +("max_output_tokens" === e),
                        max:
                          "max_output_tokens" === e
                            ? u.LIMITS.tokens
                            : u.LIMITS.usd,
                        step: "max_output_tokens" === e ? 1 : "any",
                        value: i.caps[e],
                        onChange: (t) =>
                          x("caps", { ...i.caps, [e]: t.target.value }),
                      }),
                    },
                    e
                  )
                ),
              }),
            ],
          }),
          (0, t.jsxs)("fieldset", {
            disabled: n,
            className: g.default.fieldset,
            children: [
              (0, t.jsx)("legend", { children: "Time windows (UTC)" }),
              (0, t.jsxs)("label", {
                className: "check-label",
                children: [
                  (0, t.jsx)("input", {
                    type: "checkbox",
                    checked: i.restrictWindows,
                    onChange: (e) => x("restrictWindows", e.target.checked),
                  }),
                  "Only allow requests within these UTC windows",
                ],
              }),
              (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "No windows while this restriction is on denies every time. The router evaluates window boundaries.",
              }),
              i.restrictWindows &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    i.windows.map((e, s) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: g.default.window,
                          children: [
                            (0, t.jsx)("div", {
                              className: g.default.checks,
                              children: u.DAYS.map((a, n) =>
                                (0, t.jsxs)(
                                  "label",
                                  {
                                    className: "check-label",
                                    children: [
                                      (0, t.jsx)("input", {
                                        type: "checkbox",
                                        checked: e.days.includes(n),
                                        onChange: (t) =>
                                          j(s, {
                                            days: t.target.checked
                                              ? [...e.days, n]
                                              : e.days.filter((e) => e !== n),
                                          }),
                                      }),
                                      a,
                                    ],
                                  },
                                  a
                                )
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: "two-fields",
                              children: ["start", "end"].map((a) =>
                                (0, t.jsx)(
                                  O,
                                  {
                                    id: `window-${s}-${a}`,
                                    label: `${a} (UTC)`,
                                    children: (0, t.jsx)("input", {
                                      id: `window-${s}-${a}`,
                                      type: "time",
                                      step: "60",
                                      required: !0,
                                      value: e[a],
                                      onChange: (e) =>
                                        j(s, { [a]: e.target.value }),
                                    }),
                                  },
                                  a
                                )
                              ),
                            }),
                            (0, t.jsxs)("button", {
                              type: "button",
                              className: "text-button",
                              onClick: () =>
                                x(
                                  "windows",
                                  i.windows.filter((e, t) => t !== s)
                                ),
                              children: ["Remove window ", s + 1],
                            }),
                          ],
                        },
                        s
                      )
                    ),
                    (0, t.jsx)(m.Button, {
                      type: "button",
                      secondary: !0,
                      disabled: i.windows.length >= 64,
                      onClick: () =>
                        x("windows", [
                          ...i.windows,
                          {
                            days: [1, 2, 3, 4, 5],
                            start: "09:00",
                            end: "17:00",
                          },
                        ]),
                      children: "Add UTC window",
                    }),
                  ],
                }),
            ],
          }),
          (0, t.jsxs)("fieldset", {
            disabled: n,
            className: g.default.fieldset,
            children: [
              (0, t.jsx)("legend", { children: "Approval and breaches" }),
              (0, t.jsx)(O, {
                label: "Require approval above (USD)",
                id: "approval",
                children: (0, t.jsx)("input", {
                  id: "approval",
                  type: "number",
                  step: "any",
                  max: u.LIMITS.usd,
                  value: i.approval,
                  onChange: (e) => x("approval", e.target.value),
                }),
              }),
              (0, t.jsx)(O, {
                label: "On breach",
                id: "breach",
                children: (0, t.jsxs)("select", {
                  id: "breach",
                  value: i.onBreach,
                  onChange: (e) => x("onBreach", e.target.value),
                  children: [
                    (0, t.jsx)("option", {
                      value: "deny",
                      children: "Deny this request",
                    }),
                    (0, t.jsx)("option", {
                      value: "kill",
                      children: "Kill agent",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "A kill breach stops future requests until the principal resumes the agent.",
              }),
            ],
          }),
          (0, t.jsx)(b, {
            values: i.breakers,
            onChange: (e) => x("breakers", e),
            busy: n,
          }),
          (0, t.jsx)(R, {
            value: i.alerts,
            onChange: (e) => x("alerts", e),
            disabled: n,
          }),
          (0, t.jsx)(L, { errors: o }),
          (0, t.jsxs)("div", {
            className: "button-row",
            children: [
              (0, t.jsx)(m.Button, {
                type: "submit",
                disabled: n,
                children: "Save rulebook",
              }),
              l &&
                (0, t.jsx)(m.Button, {
                  type: "button",
                  secondary: !0,
                  disabled: n,
                  onClick: () => {
                    window.confirm(
                      "Remove this rulebook? Its restrictions will no longer apply."
                    ) && a();
                  },
                  children: "Remove rulebook",
                }),
              (0, t.jsx)("button", {
                type: "button",
                className: "text-button",
                "aria-expanded": h,
                onClick: () => p(!h),
                children: h ? "Hide JSON" : "View JSON",
              }),
            ],
          }),
          h &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(L, { errors: y.errors }),
                (0, t.jsx)("pre", {
                  className: g.default.json,
                  children: JSON.stringify(y.policy, null, 2),
                }),
              ],
            }),
        ],
      });
    }
    function P({
      agent: e,
      request: s,
      refreshList: a,
      refreshVersion: n,
      onError: l,
    }) {
      let [i, d] = (0, r.useState)(null),
        [o, c] = (0, r.useState)([]),
        [h, p] = (0, r.useState)(null),
        [x, j] = (0, r.useState)(!0),
        [y, b] = (0, r.useState)(!1),
        [v, f] = (0, r.useState)(""),
        [k, w] = (0, r.useState)(0),
        [N, S] = (0, r.useState)(""),
        [C, A] = (0, r.useState)(""),
        R = (0, r.useRef)(!0),
        T = "/api/v1/agents/" + encodeURIComponent(e.key_hash);
      (0, r.useEffect)(() => {
        R.current = !0;
        let e = new AbortController();
        return (
          j(!0),
          d(null),
          A(""),
          c([]),
          p(null),
          Promise.all([
            s(T + "/policy", { signal: e.signal }),
            s(T + "/events", { signal: e.signal }),
          ])
            .then(([t, s]) => {
              if (e.signal.aborted) return;
              d(t.data || { policy: null });
              let a = (0, u.eventsPage)(s);
              c(a.events), p(a.next);
            })
            .catch((t) => {
              e.signal.aborted || (A((0, u.errorState)(t).message), l(t));
            })
            .finally(() => {
              e.signal.aborted || j(!1);
            }),
          () => {
            (R.current = !1), e.abort();
          }
        );
      }, [T, s, k, n, l]);
      let q = async (e) => {
          j(!0), S("");
          try {
            let t = await e();
            if (!R.current) return;
            !1 !== t && (S("Updated."), a(), w((e) => e + 1));
          } catch (e) {
            R.current && l(e);
          } finally {
            R.current && j(!1);
          }
        },
        D = i?.killed ?? e.killed,
        E = i?.policy ?? i?.spec ?? (i?.version === 1 && i?.models ? i : null);
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsxs)("section", {
            className: "control-panel",
            children: [
              (0, t.jsxs)("div", {
                className: g.default.heading,
                children: [
                  (0, t.jsx)("h2", { children: e.name || "Unnamed agent" }),
                  (0, t.jsx)("span", {
                    className: "badge" + (D ? " dark" : ""),
                    children: D ? "Killed" : "Running",
                  }),
                ],
              }),
              (0, t.jsx)(_, { record: i, agent: e }),
              (0, t.jsxs)("span", {
                className: g.default.hash,
                children: ["Key ", e.key_hash],
              }),
              (0, t.jsx)($, { agent: e }),
              (0, t.jsxs)("p", {
                className: g.default.hash,
                children: [
                  "Policy SHA ",
                  i?.sha256 || e.policy_sha256 || "None",
                ],
              }),
              N && (0, t.jsx)("p", { role: "status", children: N }),
              x &&
                (0, t.jsx)("p", {
                  role: "status",
                  children: "Reading or updating rulebook…",
                }),
              C &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("p", { role: "alert", children: C }),
                    (0, t.jsx)(m.Button, {
                      secondary: !0,
                      disabled: x,
                      onClick: () => w((e) => e + 1),
                      children: "Read rulebook again",
                    }),
                  ],
                }),
              i &&
                (0, t.jsx)(
                  B,
                  {
                    policy: E,
                    hasPolicy: !!E,
                    busy: x,
                    onSave: (e) =>
                      q(() => s(T + "/policy", { method: "PUT", body: e })),
                    onRemove: () =>
                      q(() => s(T + "/policy", { method: "DELETE" })),
                  },
                  k
                ),
            ],
          }),
          (0, t.jsxs)("section", {
            className: "control-panel",
            children: [
              (0, t.jsx)("h2", { children: "Kill switch" }),
              (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "Stops subsequent requests through AnyRoute. A request already in flight may finish.",
              }),
              D &&
                (0, t.jsxs)("p", {
                  children: [
                    "Killed: ",
                    (0, u.utcTime)(i?.killed_at || e.killed_at),
                    (0, t.jsx)("br", {}),
                    "Reason: ",
                    i?.killed_reason || e.killed_reason || "Not recorded",
                  ],
                }),
              !D &&
                (0, t.jsx)(O, {
                  id: "kill-reason",
                  label: "Kill reason (optional)",
                  children: (0, t.jsx)("input", {
                    id: "kill-reason",
                    value: v,
                    onChange: (e) => f(e.target.value),
                    disabled: x,
                  }),
                }),
              D
                ? (0, t.jsx)(m.Button, {
                    disabled: x,
                    onClick: () =>
                      q(() => s(T + "/resume", { method: "POST" })),
                    children: "Resume",
                  })
                : (0, t.jsx)(m.Button, {
                    className: g.default.kill,
                    disabled: x,
                    onClick: () =>
                      q(() =>
                        (0, u.confirmKill)(e, v, (e) => window.confirm(e), s)
                      ),
                    children: "Kill agent",
                  }),
            ],
          }),
          (0, t.jsxs)("section", {
            className: "control-panel",
            children: [
              (0, t.jsx)("h2", { children: "Event log" }),
              (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "Newest first, 50 per page. These intents contain model, lane, estimated cost and tools; no prompt or response text is shown.",
              }),
              !o.length &&
                (0, t.jsx)("p", {
                  children: x
                    ? "Reading events…"
                    : C
                    ? "Events could not be read."
                    : "No events recorded.",
                }),
              (0, t.jsx)("ol", {
                className: g.default.events,
                children: o.map((e) =>
                  (0, t.jsxs)(
                    "li",
                    {
                      className: g.default.event,
                      children: [
                        (0, t.jsxs)("div", {
                          className: g.default.heading,
                          children: [
                            (0, t.jsx)("strong", {
                              children: (0, u.decisionText)(
                                e.decision || e.kind
                              ),
                            }),
                            (0, t.jsx)("time", {
                              dateTime: e.ts,
                              children: (0, u.utcTime)(e.ts),
                            }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          children: (0, u.intentSummary)(e.intent),
                        }),
                        e.reasons?.length > 0 &&
                          (0, t.jsx)("ul", {
                            children: e.reasons.map((e, s) =>
                              (0, t.jsx)(
                                "li",
                                { children: (0, u.reasonText)(e) },
                                s
                              )
                            ),
                          }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              null != h &&
                (0, t.jsx)(m.Button, {
                  secondary: !0,
                  disabled: y || x,
                  onClick: async () => {
                    b(!0);
                    try {
                      let e = (0, u.eventsPage)(
                        await s(T + "/events?cursor=" + encodeURIComponent(h))
                      );
                      R.current &&
                        (c((t) => {
                          let s = new Set(t.map((e) => String(e.id)));
                          return [
                            ...t,
                            ...e.events.filter((e) => !s.has(String(e.id))),
                          ];
                        }),
                        p(e.next));
                    } catch (e) {
                      R.current && l(e);
                    } finally {
                      R.current && b(!1);
                    }
                  },
                  children: y ? "Reading…" : "Load older events",
                }),
            ],
          }),
        ],
      });
    }
    e.s(
      [
        "default",
        0,
        function () {
          let [e, n] = (0, a.useAccountKey)(),
            [l, d] = (0, r.useState)([]),
            [c, h] = (0, r.useState)(""),
            [m, y] = (0, r.useState)(!1),
            [b, _] = (0, r.useState)(!1),
            [v, f] = (0, r.useState)(""),
            [k, w] = (0, r.useState)(!1),
            [N, C] = (0, r.useState)(0),
            R = (0, r.useCallback)((e) => {
              let t = (0, u.errorState)(e);
              _(t.off), f(t.off ? "" : t.message);
            }, []),
            T = (0, r.useCallback)(
              (t, s = {}) => (0, x.api)(t, { ...s, key: e }),
              [e]
            );
          (0, r.useEffect)(() => {
            if (!e) return;
            let t = new AbortController();
            return (
              y(!0),
              f(""),
              _(!1),
              w(!1),
              (0, x.api)("/api/v1/agents", { key: e, signal: t.signal })
                .then((e) => {
                  if (t.signal.aborted) return;
                  let s = e.data;
                  if (!Array.isArray(s))
                    throw Error("The agent list response could not be read.");
                  d(s),
                    w(!0),
                    h((e) =>
                      s.some((t) => t.key_hash === e) ? e : s[0]?.key_hash || ""
                    );
                })
                .catch((e) => {
                  t.signal.aborted || R(e);
                })
                .finally(() => {
                  t.signal.aborted || y(!1);
                }),
              () => t.abort()
            );
          }, [e, N, R]);
          let q = l.find((e) => e.key_hash === c);
          return (0, t.jsx)(s.default, {
            publicContent: !0,
            current: "Agents",
            apiKey: e,
            onConnect: (e) => {
              n(e), d([]), h(""), _(!1), f("");
            },
            onDisconnect: () => {
              n(""), d([]), h(""), w(!1), _(!1), f("");
            },
            children: (0, t.jsxs)("div", {
              className: g.default.body,
              children: [
                (0, t.jsx)(
                  U,
                  {
                    agent: e && !b ? q : null,
                    request: T,
                    disabled: m,
                    onApplied: () => C((e) => e + 1),
                  },
                  e + c
                ),
                " ",
                (0, t.jsx)("div", {
                  id: "request-check",
                  children:
                    e && !b && q
                      ? (0, t.jsx)(F, { agent: q, refreshVersion: N }, e + c)
                      : (0, t.jsx)("p", {
                          className: "note",
                          children:
                            "Select an agent after connecting to check a request against its rules without spending.",
                        }),
                }),
                " ",
                v &&
                  (0, t.jsx)("p", {
                    className: "note",
                    role: "alert",
                    children: v,
                  }),
                b
                  ? (0, t.jsxs)("section", {
                      className: "empty",
                      role: "status",
                      children: [
                        (0, t.jsx)("h2", { children: u.FEATURE_OFF }),
                        (0, t.jsx)("p", {
                          children:
                            "This router is not serving agent rulebooks.",
                        }),
                      ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        e &&
                          (0, t.jsxs)("section", {
                            "aria-label": "Agent keys",
                            children: [
                              (0, t.jsxs)("div", {
                                className: g.default.heading,
                                children: [
                                  (0, t.jsx)("h2", { children: "Agent keys" }),
                                  (0, t.jsx)("button", {
                                    className: "text-button",
                                    disabled: m,
                                    onClick: () => C((e) => e + 1),
                                    children: "Refresh",
                                  }),
                                ],
                              }),
                              m &&
                                (0, t.jsx)("p", {
                                  role: "status",
                                  children: "Reading agent keys…",
                                }),
                              k &&
                                !l.length &&
                                (0, t.jsxs)("div", {
                                  className: "empty",
                                  children: [
                                    (0, t.jsx)("p", {
                                      children:
                                        "No agent keys returned for this account.",
                                    }),
                                    (0, t.jsx)("a", {
                                      className: "inline-link",
                                      href: "/dashboard/#api-keys",
                                      children: "Manage API keys",
                                    }),
                                  ],
                                }),
                              (0, t.jsx)("div", {
                                className: g.default.list,
                                children: l.map((e) =>
                                  (0, t.jsxs)(
                                    "div",
                                    {
                                      children: [
                                        (0, t.jsxs)("button", {
                                          className: g.default.agent,
                                          "aria-pressed": c === e.key_hash,
                                          onClick: () => {
                                            h(e.key_hash), f("");
                                          },
                                          children: [
                                            (0, t.jsxs)("div", {
                                              className: g.default.heading,
                                              children: [
                                                (0, t.jsx)("strong", {
                                                  children:
                                                    e.name || "Unnamed agent",
                                                }),
                                                (0, t.jsxs)("span", {
                                                  className: g.default.badges,
                                                  children: [
                                                    (0, t.jsxs)("span", {
                                                      className: "badge",
                                                      children: [
                                                        "Rulebook ",
                                                        e.has_policy
                                                          ? "on"
                                                          : "off",
                                                      ],
                                                    }),
                                                    e.killed &&
                                                      (0, t.jsx)("span", {
                                                        className: "badge dark",
                                                        children: "Killed",
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, t.jsxs)("span", {
                                              className: g.default.hash,
                                              children: [
                                                "Policy SHA ",
                                                e.policy_sha256
                                                  ? e.policy_sha256.slice(0, 12)
                                                  : "None",
                                              ],
                                            }),
                                            (0, t.jsx)($, { agent: e }),
                                          ],
                                        }),
                                        (0, t.jsx)(i, { sealed: e.sealed }),
                                      ],
                                    },
                                    e.key_hash
                                  )
                                ),
                              }),
                            ],
                          }),
                        e &&
                          (0, t.jsxs)("section", {
                            "aria-label": "Agent keys",
                            children: [
                              (0, t.jsxs)("div", {
                                className: g.default.heading,
                                children: [
                                  (0, t.jsx)("h2", { children: "Agent keys" }),
                                  (0, t.jsx)("button", {
                                    className: "text-button",
                                    disabled: m,
                                    onClick: () => C((e) => e + 1),
                                    children: "Refresh",
                                  }),
                                ],
                              }),
                              m &&
                                (0, t.jsx)("p", {
                                  role: "status",
                                  children: "Reading agent keys…",
                                }),
                              k &&
                                !l.length &&
                                (0, t.jsxs)("div", {
                                  className: "empty",
                                  children: [
                                    (0, t.jsx)("p", {
                                      children:
                                        "No agent keys returned for this account.",
                                    }),
                                    (0, t.jsx)("a", {
                                      className: "inline-link",
                                      href: "/dashboard/#api-keys",
                                      children: "Manage API keys",
                                    }),
                                  ],
                                }),
                              (0, t.jsx)("div", {
                                className: g.default.list,
                                children: l.map((e) =>
                                  (0, t.jsxs)(
                                    "button",
                                    {
                                      className: g.default.agent,
                                      "aria-pressed": c === e.key_hash,
                                      onClick: () => {
                                        h(e.key_hash), f("");
                                      },
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className: g.default.heading,
                                          children: [
                                            (0, t.jsx)("strong", {
                                              children:
                                                e.name || "Unnamed agent",
                                            }),
                                            (0, t.jsxs)("span", {
                                              className: g.default.badges,
                                              children: [
                                                (0, t.jsxs)("span", {
                                                  className: "badge",
                                                  children: [
                                                    "Rulebook ",
                                                    e.has_policy ? "on" : "off",
                                                  ],
                                                }),
                                                e.killed &&
                                                  (0, t.jsx)("span", {
                                                    className: "badge dark",
                                                    children: "Killed",
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("span", {
                                          className: g.default.hash,
                                          children: [
                                            "Policy SHA ",
                                            e.policy_sha256
                                              ? e.policy_sha256.slice(0, 12)
                                              : "None",
                                          ],
                                        }),
                                        (0, t.jsx)($, { agent: e }),
                                      ],
                                    },
                                    e.key_hash
                                  )
                                ),
                              }),
                            ],
                          }),
                        e && (0, t.jsx)(o.default, { principalKey: e }, e),
                        e &&
                          (0, t.jsx)("section", {
                            id: "approvals",
                            children: (0, t.jsx)(
                              j,
                              { request: T, agents: l, onError: R },
                              e
                            ),
                          }),
                        e && q && (0, t.jsx)(p, { agent: q }),
                        e &&
                          q &&
                          (0, t.jsx)(
                            S,
                            {
                              agent: q,
                              request: T,
                              refreshVersion: N,
                              children: (0, t.jsx)(P, {
                                agent: q,
                                request: T,
                                onError: R,
                                refreshVersion: N,
                                refreshList: () => C((e) => e + 1),
                              }),
                            },
                            e + q.key_hash
                          ),
                        e &&
                          q &&
                          (0, t.jsx)(
                            A,
                            {
                              keyHash: q.key_hash,
                              request: T,
                              refreshVersion: N,
                              onError: R,
                            },
                            e + q.key_hash
                          ),
                        !e &&
                          (0, t.jsx)("p", {
                            className: "note",
                            children:
                              "Connect your key to read and manage agent rulebooks.",
                          }),
                      ],
                    }),
                (0, t.jsx)("p", {
                  className: "help-text",
                  children:
                    "For ordinary requests on every lane today, AnyRoute’s router reads request text in memory to route it, and the provider that answers reads it too. Rulebooks constrain requests through AnyRoute; they do not control calls sent elsewhere.",
                }),
              ],
            }),
          });
        },
      ],
      90602
    );
  },
]);
