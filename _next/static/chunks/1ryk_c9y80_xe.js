(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  41215,
  (e) => {
    e.v({
      amounts: "CostEstimator-module__lVhHDa__amounts",
      cheapest: "CostEstimator-module__lVhHDa__cheapest",
      controls: "CostEstimator-module__lVhHDa__controls",
      inputs: "CostEstimator-module__lVhHDa__inputs",
      intro: "CostEstimator-module__lVhHDa__intro",
      links: "CostEstimator-module__lVhHDa__links",
      model: "CostEstimator-module__lVhHDa__model",
      modelHeading: "CostEstimator-module__lVhHDa__modelHeading",
      note: "CostEstimator-module__lVhHDa__note",
      providers: "CostEstimator-module__lVhHDa__providers",
      rates: "CostEstimator-module__lVhHDa__rates",
      resultHead: "CostEstimator-module__lVhHDa__resultHead",
      root: "CostEstimator-module__lVhHDa__root",
      row: "CostEstimator-module__lVhHDa__row",
      rows: "CostEstimator-module__lVhHDa__rows",
      search: "CostEstimator-module__lVhHDa__search",
      summary: "CostEstimator-module__lVhHDa__summary",
      system: "CostEstimator-module__lVhHDa__system",
      text: "CostEstimator-module__lVhHDa__text",
    });
  },
  27094,
  (e) => {
    "use strict";
    var t = e.i(71682),
      r = e.i(98248),
      a = e.i(4581),
      s = e.i(45482),
      i = e.i(31303),
      n = e.i(98208);
    let o = [
        { key: "question", label: "A short question" },
        { key: "document", label: "A long document" },
        { key: "code", label: "A coding task" },
        { key: "prompt", label: "Paste your text" },
      ],
      l = [
        { key: "total", label: "Total · lowest first" },
        { key: "totalDesc", label: "Total · highest first" },
        { key: "name", label: "Model name" },
      ],
      d = {
        tags: [],
        size: "question",
        pages: 10,
        input: 100,
        systemTokens: 0,
        output: 512,
        volume: 100,
        sort: "total",
      },
      u = (e, t, r) => {
        let a = Number(e);
        return null !== e &&
          "" !== e &&
          Number.isSafeInteger(a) &&
          a >= 0 &&
          a <= r
          ? a
          : t;
      };
    function c(e = {}) {
      return {
        tags: s.MODEL_CAPABILITIES.filter((t) =>
          (e.tags || []).includes(t.key)
        ).map((e) => e.key),
        size: o.some((t) => t.key === e.size) ? e.size : d.size,
        pages: Math.max(1, u(e.pages, d.pages, 1e3)),
        input: u(e.input, d.input, 1e6),
        systemTokens: u(e.systemTokens, 0, 1e6),
        output: u(e.output, d.output, 1e6),
        volume: u(e.volume, d.volume, 1e6),
        sort: l.some((t) => t.key === e.sort) ? e.sort : d.sort,
      };
    }
    function p(e) {
      if ("string" != typeof e && "number" != typeof e) return null;
      let t = /^(\d+)(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/.exec(String(e));
      if (!t || t[1].length + (t[2]?.length || 0) > 40) return null;
      let r = Number(t[3] || 0),
        a = t[2] || "",
        s = 18 + r - a.length;
      return !Number.isInteger(r) || Math.abs(r) > 24 || s < 0 || s > 42
        ? null
        : BigInt(t[1] + a) * 10n ** BigInt(s);
    }
    let h = (e) => {
      let t = p(e);
      return null === t ? null : 1000000n * t;
    };
    function m(e, t = 6) {
      if (null === e) return "Price unavailable";
      if (!Number.isInteger(t) || t < 0 || t > 18)
        throw RangeError("Invalid precision.");
      if (0n === e) return "$0";
      let r = 10n ** BigInt(18 - t),
        a = 10n ** BigInt(t),
        s = (e + r / 2n) / r,
        i = (e) => `${e / a}${t ? "." + String(e % a).padStart(t, "0") : ""}`;
      return 0n === s ? "<$" + i(1n) : "$" + i(s);
    }
    var f = e.i(69019),
      g = e.i(92882),
      y = e.i(42106),
      v = e.i(41215);
    e.s(
      [
        "default",
        0,
        function () {
          let [e, u] = (0, r.useState)(d),
            [_, b] = (0, r.useState)(""),
            [k, x] = (0, r.useState)(""),
            [w, S] = (0, r.useState)(!1),
            [j, A] = (0, r.useState)(!1),
            [C, T] = (0, r.useState)(!1),
            [N, E] = (0, r.useState)(""),
            [$, I] = (0, r.useState)(""),
            [M, D] = (0, r.useState)(null),
            [O, P] = (0, r.useState)(""),
            [L, q] = (0, r.useState)(0);
          (0, r.useEffect)(() => {
            let e = () => {
              u(
                (function (e = "") {
                  let t = new URLSearchParams(e);
                  return c({
                    ...Object.fromEntries(t),
                    tags: (t.get("tags") || "").split(","),
                  });
                })(window.location.search)
              ),
                b(""),
                x(""),
                S(!1),
                A(!1);
            };
            return (
              e(),
              T(!0),
              window.addEventListener("popstate", e),
              () => window.removeEventListener("popstate", e)
            );
          }, []);
          let U = (function (e, t, r) {
              let a = c(e);
              if ("prompt" === a.size)
                return void 0 === t
                  ? a.input
                  : (0, n.estimateTokens)([r, t].filter(Boolean).join("\n"));
              let s =
                "document" === a.size
                  ? 2e3 * a.pages
                  : "code" === a.size
                  ? 6e3
                  : 400;
              return (
                (0, n.estimateTokens)(" ".repeat(s)) +
                (void 0 === r ? a.systemTokens : (0, n.estimateTokens)(r))
              );
            })(e, w ? _ : void 0, j ? k : void 0),
            B = j ? (0, n.estimateTokens)(k) : e.systemTokens;
          (0, r.useEffect)(() => {
            let t, r;
            if (!C) return;
            let a =
              ((r = new URLSearchParams({
                size: (t = c({ ...e, input: U, systemTokens: B })).size,
                output: String(t.output),
                volume: String(t.volume),
                sort: t.sort,
              })),
              t.tags.length && r.set("tags", t.tags.join(",")),
              "document" === t.size && r.set("pages", String(t.pages)),
              "prompt" === t.size
                ? r.set("input", String(t.input))
                : t.systemTokens &&
                  r.set("systemTokens", String(t.systemTokens)),
              "/cost/?" + r);
            window.history.replaceState(null, "", a),
              E(window.location.origin + a);
          }, [e, U, B, C]),
            (0, r.useEffect)(() => {
              let e = new AbortController();
              return (
                P(""),
                (0, a.api)("/api/v1/models", { signal: e.signal })
                  .then((e) => {
                    if (!Array.isArray(e.data))
                      throw Error("The model catalogue could not be read.");
                    D(e.data);
                  })
                  .catch((t) => {
                    e.signal.aborted || P(t.message);
                  }),
                () => e.abort()
              );
            }, [L]);
          let H = (e) => u((t) => c({ ...t, ...e })),
            R = (0, r.useMemo)(
              () =>
                (function (
                  e,
                  {
                    query: t = "",
                    tags: r = [],
                    sort: a = "total",
                    input: s = 0,
                    output: n = 512,
                    volume: o = 100,
                  } = {}
                ) {
                  let l = (0, i.filterModels)(e, { query: t, tags: r }).map(
                      (e) => ({
                        model: e,
                        cost: (function (e, t, r, a) {
                          if (
                            ![t, r, a].every(
                              (e) => Number.isSafeInteger(e) && e >= 0
                            )
                          )
                            throw RangeError(
                              "Counts must be non-negative whole numbers."
                            );
                          let s = p(e.pricing?.prompt),
                            i = p(e.pricing?.completion),
                            n = p(e.pricing?.request ?? "0"),
                            o = null === s ? null : s * BigInt(t),
                            l = null === i ? null : i * BigInt(r),
                            d =
                              (0n === s && 0n === i && 0n === n) ||
                              null === o ||
                              null === l ||
                              null === n
                                ? null
                                : o + l + n;
                          return {
                            input: o,
                            output: l,
                            fee: n,
                            total: d,
                            monthly:
                              null === d ? null : d * BigInt(a) * BigInt(30),
                          };
                        })(e, s, n, o),
                      })
                    ),
                    d = (e, t) =>
                      String(e.model.name || e.model.id).localeCompare(
                        String(t.model.name || t.model.id)
                      ) || String(e.model.id).localeCompare(String(t.model.id)),
                    u = new Set(
                      [...l]
                        .filter((e) => null !== e.cost.total)
                        .sort((e, t) =>
                          e.cost.total < t.cost.total
                            ? -1
                            : e.cost.total > t.cost.total
                            ? 1
                            : d(e, t)
                        )
                        .slice(0, 3)
                        .map((e) => e.model.id)
                    );
                  return l
                    .sort((e, t) => {
                      if ("name" === a) return d(e, t);
                      if (null === e.cost.total || null === t.cost.total)
                        return e.cost.total === t.cost.total
                          ? d(e, t)
                          : null === e.cost.total
                          ? 1
                          : -1;
                      let r =
                        e.cost.total < t.cost.total
                          ? -1
                          : +(e.cost.total > t.cost.total);
                      return ("totalDesc" === a ? -r : r) || d(e, t);
                    })
                    .map((e) => ({ ...e, cheapest: u.has(e.model.id) }));
                })(M || [], { ...e, query: $, input: U }),
              [M, e, $, U]
            ),
            z = (0, r.useMemo)(
              () => (0, i.modelTagCounts)(M || [], { query: $, tags: e.tags }),
              [M, $, e.tags]
            );
          return (0, t.jsxs)("div", {
            className: v.default.root,
            children: [
              (0, t.jsxs)("section", {
                className: v.default.inputs,
                "aria-labelledby": "estimate-heading",
                children: [
                  (0, t.jsxs)("div", {
                    className: v.default.intro,
                    children: [
                      (0, t.jsx)("h2", {
                        id: "estimate-heading",
                        children: "Set your request size",
                      }),
                      (0, t.jsx)("p", {
                        children:
                          "Your prompt and system prompt never leave this browser on this page. The calculator fetches the public model catalogue and computes costs here. Shared links contain choices and token counts, never prompt text.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v.default.controls,
                    children: [
                      (0, t.jsxs)("label", {
                        children: [
                          "Input size",
                          (0, t.jsx)("select", {
                            value: e.size,
                            onChange: (e) => H({ size: e.target.value }),
                            children: o.map((e) =>
                              (0, t.jsx)(
                                "option",
                                { value: e.key, children: e.label },
                                e.key
                              )
                            ),
                          }),
                        ],
                      }),
                      "document" === e.size &&
                        (0, t.jsxs)("label", {
                          children: [
                            "About how many pages?",
                            (0, t.jsx)("input", {
                              type: "number",
                              min: "1",
                              max: "1000",
                              step: "1",
                              value: e.pages,
                              onChange: (e) => H({ pages: e.target.value }),
                            }),
                          ],
                        }),
                      (0, t.jsxs)("label", {
                        children: [
                          "Expected output",
                          (0, t.jsxs)("select", {
                            value: [128, 512, 2048].includes(e.output)
                              ? e.output
                              : "custom",
                            onChange: (e) => {
                              "custom" === e.target.value
                                ? H({ output: 1e3 })
                                : H({ output: Number(e.target.value) });
                            },
                            children: [
                              (0, t.jsx)("option", {
                                value: "128",
                                children: "Short · 128 tokens",
                              }),
                              (0, t.jsx)("option", {
                                value: "512",
                                children: "Medium · 512 tokens",
                              }),
                              (0, t.jsx)("option", {
                                value: "2048",
                                children: "Long · 2,048 tokens",
                              }),
                              (0, t.jsx)("option", {
                                value: "custom",
                                children: "Choose token count",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("label", {
                        children: [
                          "Output tokens",
                          (0, t.jsx)("input", {
                            type: "number",
                            min: "0",
                            max: "1000000",
                            step: "1",
                            value: e.output,
                            onChange: (e) => H({ output: e.target.value }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("label", {
                        children: [
                          "Requests per day",
                          (0, t.jsx)("input", {
                            type: "number",
                            min: "0",
                            max: "1000000",
                            step: "1",
                            value: e.volume,
                            onChange: (e) => H({ volume: e.target.value }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  "prompt" === e.size &&
                    (0, t.jsxs)("label", {
                      className: v.default.text,
                      children: [
                        "Paste a prompt",
                        (0, t.jsx)("textarea", {
                          rows: "5",
                          maxLength: 1e6,
                          value: _,
                          onChange: (e) => {
                            b(e.target.value), S(!0);
                          },
                        }),
                        !w &&
                          (0, t.jsxs)("small", {
                            children: [
                              "Using the shared input estimate of ",
                              e.input.toLocaleString("en-US"),
                              " tokens. Paste text to replace it.",
                            ],
                          }),
                      ],
                    }),
                  (0, t.jsxs)("details", {
                    className: v.default.system,
                    children: [
                      (0, t.jsx)("summary", {
                        children: "Add a system prompt (optional)",
                      }),
                      (0, t.jsxs)("label", {
                        className: v.default.text,
                        children: [
                          "System prompt",
                          (0, t.jsx)("textarea", {
                            rows: "3",
                            maxLength: 1e6,
                            value: k,
                            onChange: (t) => {
                              x(t.target.value),
                                A(!0),
                                "prompt" === e.size && S(!0);
                            },
                          }),
                          "prompt" !== e.size &&
                            !j &&
                            e.systemTokens > 0 &&
                            (0, t.jsxs)("small", {
                              children: [
                                "Shared system prompt estimate: ",
                                e.systemTokens.toLocaleString("en-US"),
                                " tokens. Add text to replace it.",
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v.default.summary,
                    children: [
                      (0, t.jsxs)("p", {
                        children: [
                          (0, t.jsx)("strong", {
                            children: U.toLocaleString("en-US"),
                          }),
                          " estimated input tokens · ",
                          (0, t.jsx)("strong", {
                            children: e.output.toLocaleString("en-US"),
                          }),
                          " output tokens · ",
                          (0, t.jsx)("strong", {
                            children: (30 * e.volume).toLocaleString("en-US"),
                          }),
                          " requests per 30-day month",
                        ],
                      }),
                      N &&
                        (0, t.jsx)(g.CopyButton, {
                          text: N,
                          label: "Copy estimate link",
                        }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    className: v.default.note,
                    children:
                      "Token counts are estimates: about one token per four characters, using the same helper as the Harness. Presets use 100 input tokens for a question, 1,500 for a coding task, or 500 per document page (about 2,000 characters). Actual token use depends on the model, language and request format.",
                  }),
                ],
              }),
              (0, t.jsxs)("section", {
                "aria-labelledby": "cost-results",
                children: [
                  (0, t.jsxs)("div", {
                    className: v.default.resultHead,
                    children: [
                      (0, t.jsx)("h2", {
                        id: "cost-results",
                        children: "Compare live models",
                      }),
                      (0, t.jsx)("span", {
                        role: "status",
                        children:
                          M && !O ? `${R.length} of ${M.length} models` : "",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: v.default.search,
                    children: [
                      (0, t.jsxs)("label", {
                        children: [
                          "Search model or provider",
                          (0, t.jsx)("input", {
                            type: "search",
                            value: $,
                            onChange: (e) => I(e.target.value),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("label", {
                        children: [
                          "Sort by",
                          (0, t.jsx)("select", {
                            value: e.sort,
                            onChange: (e) => H({ sort: e.target.value }),
                            children: l.map((e) =>
                              (0, t.jsx)(
                                "option",
                                { value: e.key, children: e.label },
                                e.key
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: y.default.filters,
                    role: "group",
                    "aria-label": "Filter by capability",
                    children: s.MODEL_CAPABILITIES.map((r) =>
                      (0, t.jsxs)(
                        "button",
                        {
                          type: "button",
                          title: r.explanation,
                          "aria-pressed": e.tags.includes(r.key),
                          disabled: !e.tags.includes(r.key) && !z[r.key],
                          onClick: () => {
                            let t;
                            return (
                              (t = r.key),
                              H({
                                tags: e.tags.includes(t)
                                  ? e.tags.filter((e) => e !== t)
                                  : [...e.tags, t],
                              })
                            );
                          },
                          children: [
                            r.label,
                            (0, t.jsx)("span", { children: z[r.key] }),
                          ],
                        },
                        r.key
                      )
                    ),
                  }),
                  (0, t.jsx)(f.CapabilityGuide, {}),
                  (0, t.jsx)("p", {
                    className: v.default.note,
                    children:
                      "Prices from the live catalogue; routing may pick another provider",
                  }),
                  (0, t.jsx)("p", {
                    className: v.default.note,
                    children:
                      "USD estimates use input and output token rates plus any listed per-request fee. They exclude image, audio, search, cache and separate reasoning charges, conversation history and request-format overhead. They do not reserve a price or check whether your request fits a model’s limits. Amounts round half up to six decimals per request and two per month; monthly totals use the unrounded request cost. Small positive amounts are shown with <.",
                  }),
                  O
                    ? (0, t.jsxs)("div", {
                        className: "empty",
                        role: "alert",
                        children: [
                          (0, t.jsx)("h3", {
                            children:
                              "The model catalogue could not be loaded.",
                          }),
                          (0, t.jsx)("p", { children: O }),
                          (0, t.jsx)(g.Button, {
                            secondary: !0,
                            onClick: () => q((e) => e + 1),
                            children: "Retry",
                          }),
                        ],
                      })
                    : M
                    ? R.length
                      ? (0, t.jsx)("div", {
                          className: v.default.rows,
                          children: R.map(
                            ({ model: e, cost: r, cheapest: a }) =>
                              (0, t.jsxs)(
                                "article",
                                {
                                  className: v.default.row,
                                  "data-cheapest": a || void 0,
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: v.default.model,
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className: v.default.modelHeading,
                                          children: [
                                            (0, t.jsx)("h3", {
                                              children: e.name || e.id,
                                            }),
                                            a &&
                                              (0, t.jsx)("span", {
                                                className: v.default.cheapest,
                                                children: "Among the cheapest",
                                              }),
                                          ],
                                        }),
                                        (0, t.jsx)("p", {
                                          className: v.default.providers,
                                          children:
                                            e.provider_names?.join(", ") ||
                                            e.provider_name ||
                                            e.id,
                                        }),
                                        (0, t.jsx)(f.CapabilityChips, {
                                          model: e,
                                        }),
                                        (0, t.jsxs)("p", {
                                          className: v.default.rates,
                                          children: [
                                            m(h(e.pricing?.prompt)),
                                            " / 1M input · ",
                                            m(h(e.pricing?.completion)),
                                            " / 1M output",
                                            null !== r.fee && r.fee > 0n
                                              ? ` \xb7 ${m(r.fee)} request fee`
                                              : "",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("dl", {
                                      className: v.default.amounts,
                                      children: [
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("dt", {
                                              children: "Input cost",
                                            }),
                                            (0, t.jsx)("dd", {
                                              children: m(r.input),
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("dt", {
                                              children: "Output cost",
                                            }),
                                            (0, t.jsx)("dd", {
                                              children: m(r.output),
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("dt", {
                                              children: "Per request",
                                            }),
                                            (0, t.jsx)("dd", {
                                              children: m(r.total),
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("dt", {
                                              children: "Per month",
                                            }),
                                            (0, t.jsx)("dd", {
                                              children: m(r.monthly, 2),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: v.default.links,
                                      children: [
                                        (0, t.jsx)("a", {
                                          className: "text-button",
                                          href:
                                            "/harness/?model=" +
                                            encodeURIComponent(e.id),
                                          children: "Try it in the chat →",
                                        }),
                                        (0, t.jsx)("a", {
                                          className: "text-button",
                                          href: "/models/",
                                          children: "Open in /models →",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.id
                              )
                          ),
                        })
                      : (0, t.jsxs)("div", {
                          className: "empty",
                          children: [
                            (0, t.jsx)("h3", {
                              children: "No matching models",
                            }),
                            (0, t.jsx)("p", {
                              children: M.length
                                ? "Try another search or clear the capability filters."
                                : "No models are listed right now.",
                            }),
                            (0, t.jsx)(g.Button, {
                              secondary: !0,
                              onClick: () => {
                                I(""), H({ tags: [] });
                              },
                              children: "Clear filters",
                            }),
                          ],
                        })
                    : (0, t.jsx)("p", {
                        className: "empty",
                        role: "status",
                        children: "Loading the live catalogue…",
                      }),
                ],
              }),
            ],
          });
        },
      ],
      27094
    );
  },
  69019,
  (e) => {
    "use strict";
    var t = e.i(71682),
      r = e.i(45482),
      a = e.i(86700),
      s = e.i(3904);
    e.s([
      "CapabilityChips",
      0,
      function ({ model: e, dark: i = !1, linked: n = !0 }) {
        let o = (0, r.modelCapabilities)(e);
        return (0, t.jsx)("span", {
          className: s.default.chips,
          "data-dark": i || void 0,
          children: o.length
            ? r.MODEL_CAPABILITIES.filter((e) => o.includes(e.key)).map((r) =>
                "attested" === r.key
                  ? (0, t.jsx)(
                      a.default,
                      {
                        evidence: { source: "model", data: e },
                        dark: i,
                        linked: n,
                      },
                      r.key
                    )
                  : (0, t.jsx)(
                      "span",
                      {
                        className: s.default.chip,
                        title: r.explanation,
                        "aria-label": `${r.label}: ${r.explanation}`,
                        children: r.label,
                      },
                      r.key
                    )
              )
            : (0, t.jsx)("span", {
                className: s.default.chip,
                children: "No tags declared",
              }),
        });
      },
      "CapabilityGuide",
      0,
      function ({ dark: e = !1 }) {
        return (0, t.jsxs)("details", {
          className: s.default.guide,
          "data-dark": e || void 0,
          children: [
            (0, t.jsx)("summary", { children: "What the tags mean" }),
            (0, t.jsx)("ul", {
              children: r.MODEL_CAPABILITIES.map((e) =>
                (0, t.jsxs)(
                  "li",
                  {
                    children: [
                      (0, t.jsxs)("b", { children: [e.label, "."] }),
                      " ",
                      e.explanation,
                      " ",
                      e.href &&
                        (0, t.jsx)("a", {
                          href: e.href,
                          children: "Read more →",
                        }),
                    ],
                  },
                  e.key
                )
              ),
            }),
            (0, t.jsx)("p", {
              children:
                "Tags describe available endpoints. A request’s lane, provider and signed receipt show which path was used.",
            }),
          ],
        });
      },
    ]);
  },
  3904,
  (e) => {
    e.v({
      chip: "ModelCapabilities-module__LCvf4G__chip",
      chips: "ModelCapabilities-module__LCvf4G__chips",
      guide: "ModelCapabilities-module__LCvf4G__guide",
    });
  },
  42106,
  (e) => {
    e.v({ filters: "ModelCatalog-module__Y_ThZG__filters" });
  },
  22692,
  (e) => {
    e.v({
      badge: "ProofBadge-module__38DSgq__badge",
      check: "ProofBadge-module__38DSgq__check",
      explanation: "ProofBadge-module__38DSgq__explanation",
      group: "ProofBadge-module__38DSgq__group",
      guide: "ProofBadge-module__38DSgq__guide",
      item: "ProofBadge-module__38DSgq__item",
      pop: "ProofBadge-module__38DSgq__pop",
      popover: "ProofBadge-module__38DSgq__popover",
    });
  },
  86700,
  45482,
  64265,
  68129,
  (e) => {
    "use strict";
    var t = e.i(71682);
    let r = [
      {
        key: "vision",
        label: "Reads images",
        explanation:
          "Accepts images alongside text; image input is declared by the provider.",
      },
      {
        key: "imageOut",
        label: "Makes images",
        explanation:
          "Returns images; catalogue rates may include token and image charges.",
      },
      {
        key: "audio",
        label: "Audio",
        explanation:
          "Accepts or returns audio; browser speech works separately from model audio.",
      },
      {
        key: "tools",
        label: "Tools",
        explanation:
          "Can request tool calls; the calling app must run the tools and return their results.",
      },
      {
        key: "longContext",
        label: "Long context",
        explanation:
          "Lists a context window of at least 128,000 tokens; the chosen provider may have a lower limit.",
      },
      {
        key: "attested",
        label: "Proven hardware",
        explanation:
          "Has an endpoint with a fresh hardware attestation checked by the router; this does not prove answer quality or encrypt ordinary chat.",
      },
      {
        key: "network",
        label: "AnyRoute network",
        explanation:
          "Has a live offer on an AnyRoute network host for a model admitted on that host; routing may choose another provider.",
        href: "/network/",
      },
      {
        key: "encrypted",
        label: "Encrypted chat",
        explanation:
          "Available through the separate device-encryption gateway setup; ordinary Harness chat still sends readable requests to the router.",
        href: "/docs/#e2ee-phala",
      },
    ];
    function a(e, t = "input") {
      if (!e) return [];
      let r =
        e.architecture?.[`${t}_modalities`] ??
        e[`${t}_modalities`] ??
        e["input" === t ? "inputs" : "outputs"];
      if (Array.isArray(r)) return r;
      let s = e.architecture?.modality;
      return "string" == typeof s && s.includes("->")
        ? s.split("->")[+("input" !== t)].split("+")
        : ["text"];
    }
    function s(e) {
      return Array.isArray(e?.capabilities)
        ? r.filter((t) => e.capabilities.includes(t.key)).map((e) => e.key)
        : (function (e = {}) {
            let t,
              s = a(e, "input"),
              i = a(e, "output"),
              n = e.supported_parameters ?? e.params ?? [],
              o =
                !0 === e.attested_available ||
                (null == e.attested_available &&
                  (e.disclosure?.best === "attested" || !0 === e.attested)),
              l = {
                vision: s.includes("image"),
                imageOut: i.includes("image"),
                audio: s.includes("audio") || i.includes("audio"),
                tools:
                  ((t = "tools"),
                  n instanceof Set
                    ? n.has(t)
                    : Array.isArray(n) && n.includes(t)),
                longContext:
                  Number(
                    e.context_length ??
                      e.contextLength ??
                      e.context ??
                      e.top_provider?.context_length ??
                      0
                  ) >= 128e3,
                attested: o,
                network: !0 === e.network_host_available,
                encrypted: !0 === e.encrypted_chat_available,
              };
            return r.filter((e) => l[e.key]).map((e) => e.key);
          })(e ?? {});
    }
    let i = (e, t) => s(e).includes(t);
    function n(e, t = Date.now()) {
      return !e?.attested ||
        !Number.isFinite(Date.parse(e.expires_at)) ||
        Date.parse(e.expires_at) <= t ||
        !/^sha256:[a-f0-9]{64}$/.test(e.agent_image_digest || "")
        ? null
        : "Sealed · attested · image " + e.agent_image_digest;
    }
    e.s(
      [
        "MODEL_CAPABILITIES",
        0,
        r,
        "hasModelCapability",
        0,
        i,
        "modelCapabilities",
        0,
        s,
        "modelModalities",
        0,
        a,
      ],
      45482
    ),
      e.s(["sealedLabel", 0, n], 64265);
    let o = Object.freeze({
        hardware: {
          label: "Proven hardware",
          icon: "shield",
          tone: "proof",
          explanation:
            "The hardware check passed; this does not hide ordinary prompts from the router or prove answer quality.",
        },
        encrypted: {
          label: "Encrypted end to end",
          icon: "lock",
          tone: "proof",
          explanation:
            "The device-encryption path sends ciphertext through the router to the attested gateway; routing and billing details remain visible.",
        },
        unlinkable: {
          label: "Unlinkable route",
          icon: "route",
          tone: "proof",
          explanation:
            "Tor onion access and blind tokens separate your address and payment from the request; the router still reads ordinary prompts in memory.",
        },
        standard: {
          label: "Standard provider",
          icon: "provider",
          tone: "neutral",
          explanation:
            "No hardware proof is established by this record; ordinary requests are readable by the router and provider.",
        },
        cached: {
          label: "Stored answer",
          icon: "provider",
          tone: "neutral",
          explanation:
            "This answer came from the response cache; no provider ran for this call and the router read the request in memory.",
        },
        signed: {
          label: "Signed receipt",
          icon: "signature",
          tone: "neutral",
          explanation:
            "A signature is recorded for this receipt; use the checker to verify it, its signing key and its limits.",
        },
      }),
      l = (e) =>
        "string" == typeof e && /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(e)
          ? e
          : "",
      d = (e) => "string" == typeof e && e.trim().length > 0,
      u = (e, t) =>
        e &&
        !0 !== e.stale &&
        !0 !== e.failed &&
        !1 !== e.last_attempt_ok &&
        !["unverified", "failed", "stale", "simulated", "revoked"].includes(
          e.status
        ) &&
        (!e.expires_at ||
          (Number.isFinite(Date.parse(e.expires_at)) &&
            Date.parse(e.expires_at) > t));
    function c(e = {}, t = Date.now()) {
      let { source: r } = e,
        a = e.data || {},
        s = !1,
        p = !1,
        h = !1,
        m = !1,
        f = !1,
        g = "",
        y = "",
        v = "";
      if ("model" === r)
        (s =
          u(a, t) &&
          u(a.attestation || {}, t) &&
          !1 !== a.attested_available &&
          i(a, "attested")),
          (v =
            "Available endpoint: routing may choose another provider. Ordinary Harness chat is readable by the router.");
      else if ("host" === r)
        (s =
          !0 === a.attested &&
          a.attestation?.status === "attested" &&
          u(a.attestation, t)),
          (g = a.id),
          (v =
            "Router record when loaded; refresh to check again. Build admission is a separate check.");
      else if ("admission" === r)
        (s = !0 === a.attested && u(a, t)),
          (g = e.providerId),
          (v =
            "Router record when loaded; admission and routing health are separate checks.");
      else if ("network" === r) {
        let e = t - Date.parse(a.as_of || "");
        (s =
          Number.isSafeInteger(a.attested_hosts) &&
          a.attested_hosts > 0 &&
          e >= 0 &&
          e < 3e4 &&
          u(a, t)),
          (v =
            "Count of hosts with fresh successful hardware and admission checks in this snapshot; inspect each host record before relying on it.");
      } else if ("sealed" === r)
        v = (s = u(a, t) && !!n(a, t))
          ? `Sealed hosting \xb7 image ${a.agent_image_digest}. Measured code is not audited code.`
          : "Sealed hosting has no current hardware proof in this record.";
      else if ("profile" === r)
        v =
          "This profile does not publish current hardware evidence. Owner-supplied capabilities are separate.";
      else if ("generation" === r)
        (f = !0 === a.live && d(a.signature)),
          (y = a.id),
          (v =
            "This list does not include hardware evidence; inspect the receipt for the path used.");
      else if ("ledger" === r)
        (f = !!l(a.receipt_id)),
          (y = a.receipt_id),
          (v =
            "This ledger records a receipt id; its signature has not been checked in this browser.");
      else if ("receipt" === r) {
        let e = a.payload || {};
        (y = a.id || e.id),
          (g = e.provider),
          (f = d(a.sig)),
          (m = "cache" === e.mode || "cache" === e.provider);
        let r = e.upstream_attestation;
        (p =
          (s =
            !m &&
            "attested" === e.disclosure &&
            !0 !== e.attestation_simulated &&
            u(e, t) &&
            (!r || (!0 === r.attested && u(r, t)))) &&
          !0 === e.end_to_end_encrypted &&
          "phala-confidential-ai" === e.provider &&
          e.e2ee?.version === 2 &&
          e.e2ee?.suite === "x25519-aes-256-gcm-hkdf-sha256" &&
          e.e2ee?.gateway_attested === !0),
          (h =
            "unlinkable" === e.lane &&
            "blind" === e.mode &&
            !e.payer &&
            !e.payment_tx &&
            (d(e.nullifier) ||
              (Array.isArray(e.nullifiers) && e.nullifiers.length > 0))),
          (v = s
            ? "The receipt records the hardware check for this call; it does not establish a current check for a later call."
            : "");
      } else
        "attestation" === r &&
          ((s = "attested" === a.status && u(a, t)),
          (g = a.provider),
          (v = "Router record when loaded; refresh to check again."));
      let _ = m
          ? "cached"
          : p
          ? "encrypted"
          : h
          ? "unlinkable"
          : s
          ? "hardware"
          : "standard",
        b = (e) => ({
          key: e,
          ...o[e],
          hardware: "signed" !== e && s,
          context: "signed" === e ? "" : v,
          href: (function (e, { providerId: t, receiptId: r } = {}) {
            let a = new URLSearchParams();
            return (
              l(t) && a.set("p", t),
              l(r) && a.set("r", r),
              `/verify/${a.size ? "?" + a : ""}#proof-${e}`
            );
          })(e, { providerId: g, receiptId: y }),
        });
      return [...(e.signedOnly ? [] : [b(_)]), ...(f ? [b("signed")] : [])];
    }
    e.s(["proofBadges", 0, c], 68129);
    var p = e.i(22692);
    function h({ name: e }) {
      return (0, t.jsx)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.3",
        "aria-hidden": "true",
        children: (0, t.jsx)("path", {
          d: {
            shield:
              "M8 1.5 13 3.5v4c0 3-2 5.5-5 7-3-1.5-5-4-5-7v-4ZM5 8l2 2 4-4",
            lock: "M4 7V5a4 4 0 0 1 8 0v2M3 7h10v7H3Zm5 3v2",
            route: "M2 3h8l3 3-3 3M14 13H6l-3-3 3-3",
            provider: "M2 3h12v4H2Zm0 6h12v4H2ZM4 5h1m-1 6h1",
            signature: "m3 10 7-7 3 3-7 7H3Zm6-6 3 3M2 15h12",
          }[e],
        }),
      });
    }
    e.s(
      [
        "default",
        0,
        function ({
          evidence: e,
          now: r,
          dark: a = !1,
          linked: s = !0,
          explain: i = !1,
        }) {
          return (0, t.jsx)("span", {
            className: p.default.group,
            "data-dark": a || void 0,
            children: c(e, r).map((e) =>
              (0, t.jsxs)(
                "span",
                {
                  className: p.default.item,
                  children: [
                    s && !i
                      ? (0, t.jsxs)("details", {
                          className: p.default.pop,
                          children: [
                            (0, t.jsxs)("summary", {
                              className: p.default.badge,
                              "data-tone": e.tone,
                              title: `${e.explanation} ${e.context}`,
                              children: [
                                (0, t.jsx)(h, { name: e.icon }),
                                e.label,
                              ],
                            }),
                            (0, t.jsxs)("span", {
                              className: p.default.popover,
                              role: "note",
                              children: [e.explanation, " ", e.context],
                            }),
                          ],
                        })
                      : (0, t.jsxs)("span", {
                          className: p.default.badge,
                          "data-tone": e.tone,
                          title: `${e.explanation} ${e.context}`,
                          children: [(0, t.jsx)(h, { name: e.icon }), e.label],
                        }),
                    i
                      ? (0, t.jsxs)("span", {
                          className: p.default.explanation,
                          children: [e.explanation, " ", e.context],
                        })
                      : !s &&
                        (0, t.jsxs)("span", {
                          className: "sr-only",
                          children: [e.explanation, " ", e.context],
                        }),
                    s &&
                      (0, t.jsx)("a", {
                        className: p.default.check,
                        href: e.href,
                        "aria-label": `How to check: ${e.label}`,
                        onClick: (e) => e.stopPropagation(),
                        children: "How to check",
                      }),
                  ],
                },
                e.key
              )
            ),
          });
        },
      ],
      86700
    );
  },
  98208,
  (e) => {
    "use strict";
    var t = e.i(4581),
      r = e.i(78182);
    let a = /^[A-Za-z0-9][A-Za-z0-9._\-:/@~+]{0,119}$/,
      s = /sk-ar-v1-[0-9a-f]{64}/gi,
      i = (e) => String(e ?? "").replace(s, "[key removed]"),
      n = (e) => (e || []).filter((e) => e && "Embeddings" !== e.type),
      o = (e) => Math.ceil(String(e || "").length / 4),
      l = new Set([
        "no_attested_endpoint",
        "lane_unavailable",
        "disclosure_unavailable",
        "disclosure_provider_unavailable",
        "upstream_not_attested",
      ]),
      d = (e) => l.has(String(e || "")),
      u = { asserted: "yes", refuted: "no" },
      c = (e) => (e && "string" == typeof e.status && u[e.status]) || "unknown",
      p = {
        yes: "TEE attested",
        no: "TEE not attested",
        unknown: "TEE status not reported",
      },
      h = {
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
      maxTokens: s = 1024,
      key: i,
      signal: n,
      attested: l = !1,
      stream: u = t.streamChat,
      now: g = () => performance.now(),
      t0: y = g(),
      onUpdate: v = () => {},
    }) {
      let _ = null,
        b = "",
        k = (e) =>
          l
            ? (function (e) {
                let t = e && "object" == typeof e ? e.payload : null;
                if (!t || "object" != typeof t) return null;
                let a =
                    t.upstream_attestation &&
                    "object" == typeof t.upstream_attestation
                      ? t.upstream_attestation
                      : null,
                  s = !0 === t.attestation_simulated,
                  i =
                    "attested" === t.disclosure &&
                    "string" == typeof t.attestation &&
                    "" !== t.attestation &&
                    !s &&
                    (!a || !0 === a.attested),
                  n = [
                    {
                      key: "provider",
                      state: i ? "yes" : "no",
                      text: i
                        ? "Provider attested"
                        : s
                        ? "Provider evidence is development-only"
                        : "Provider not attested",
                    },
                  ];
                if (a) {
                  let e = !0 === a.receipt_verified,
                    t = e ? c(a.claims?.tee_attested) : "no",
                    r = e
                      ? !0 === a.gpu_attested
                        ? "yes"
                        : "unknown" === c(a.claims?.gpu_attested)
                        ? "unknown"
                        : "no"
                      : "no",
                    s = e ? c(a.claims?.tcb_up_to_date) : "unknown";
                  n.push(
                    { key: "tee", state: t, text: p[t] },
                    { key: "gpu", state: r, text: h[r] },
                    { key: "tcb", state: s, text: m[s] }
                  );
                }
                let o = null;
                return (
                  i ||
                    (o =
                      a && !0 !== a.attested
                        ? "string" == typeof a.reason && a.reason
                          ? a.reason
                          : "the gateway's receipt does not show an attested upstream"
                        : s
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
                    attested: i,
                    gateway: !!a,
                    checks: n,
                    reason: o,
                  }
                );
              })(e)
            : null;
      v({ status: "waiting" });
      try {
        let t = await u({
            key: i,
            signal: n,
            body: {
              model: e,
              messages: [{ role: "user", content: a }],
              max_tokens: s,
              ...(l ? { provider: { lane: "attested" } } : {}),
            },
            onDelta: (e) => {
              (b = e),
                null === _ && (_ = g() - y),
                v({ status: "streaming", text: e, ttft: _, tokens: o(e) });
            },
          }),
          r = g() - y,
          c = t.usage || {},
          p = l && d(t.error?.type) ? t.error : null,
          h = {
            status: p ? "error" : "done",
            text: p ? "" : t.text ?? b,
            ttft: p ? null : _,
            total: r,
            tokens: Number.isFinite(c.completion_tokens)
              ? c.completion_tokens
              : p
              ? null
              : o(t.text ?? b),
            cost: Number.isFinite(c.cost) ? c.cost : null,
            receiptId: t.receipt?.id || null,
            provider: t.provider || null,
            partial: !p && !!t.error,
            error: p
              ? p.message
              : t.error
              ? "The provider stopped mid-stream; the delivered part was billed."
              : "",
            errorType: p ? p.type : "",
            proof: k(t.receipt),
          };
        return v(h), h;
      } catch (a) {
        let e = g() - y,
          t = a?.name === "AbortError",
          r = {
            status: t ? "stopped" : "error",
            ttft: _,
            total: e,
            tokens: t ? o(b) : null,
            error: t
              ? "Stopped before the answer finished. The part already delivered is billed."
              : a?.message || "The route failed.",
            errorType: a?.type || "",
          };
        if (!t && a?.receipt?.id) {
          let e = a.usage || {};
          Object.assign(r, {
            receiptId: a.receipt.id,
            proof: k(a.receipt),
            cost: Number.isFinite(e.cost) ? e.cost : null,
            tokens: Number.isFinite(e.completion_tokens)
              ? e.completion_tokens
              : null,
          });
        }
        return v(r), r;
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
        return n(
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
      n,
      "decodeArena",
      0,
      function (e = "") {
        let t;
        try {
          t = new URLSearchParams(String(e));
        } catch {
          return { prompt: "", models: [] };
        }
        let r = i(t.get("prompt") ?? "").slice(0, 8e3),
          s = [];
        for (let e of t.getAll("model")) {
          let t = e.trim();
          if ((a.test(t) && !s.includes(t) && s.push(t), 4 === s.length)) break;
        }
        return ["1", "true"].includes(
          (t.get("attested") ?? "").trim().toLowerCase()
        )
          ? { prompt: r, models: s, attested: !0 }
          : { prompt: r, models: s };
      },
      "encodeArena",
      0,
      function ({ prompt: e = "", models: t = [], attested: r = !1 } = {}) {
        let s = [
            ...new Set(
              (t || []).filter((e) => "string" == typeof e && a.test(e))
            ),
          ].slice(0, 4),
          n = i(e).trim(),
          o = n.length > 1200,
          l = [];
        for (let e of (n &&
          l.push("prompt=" + encodeURIComponent(o ? n.slice(0, 1200) : n)),
        !0 === r && l.push("attested=1"),
        s))
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
          s = [];
        return (
          e.forEach((e, t) => {
            let r = String(e.name || "").toLowerCase(),
              i = `${r} ${String(e.id).toLowerCase()} ${String(
                e.author || ""
              ).toLowerCase()}`;
            if (!a.every((e) => i.includes(e))) return;
            let n =
              a.length && r.startsWith(a[0])
                ? 0
                : a.length &&
                  String(e.id)
                    .toLowerCase()
                    .includes("/" + a[0])
                ? 1
                : 2;
            s.push({ m: e, rank: n, order: t });
          }),
          s.sort((e, t) => e.rank - t.rank || e.order - t.order),
          { items: s.slice(0, r).map((e) => e.m), total: s.length }
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
            s = r.filter((e) => e.v === a);
          return s.length === r.length ? [] : s.map((e) => e.i);
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
          s = a.filter((e) => r.has(e)).slice(0, 4);
        return {
          models: s,
          missing: a.filter((e) => !r.has(e)),
          ready: s.length >= 2,
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
  31303,
  (e) => {
    "use strict";
    var t = e.i(45482);
    let r = (e, t) => {
        let r = e.pricing?.[t],
          a = null == r || "" === r ? NaN : Number(r);
        return Number.isFinite(a) && a >= 0 ? a : 1 / 0;
      },
      a = (e) =>
        Number(e.context_length ?? e.top_provider?.context_length ?? 0) || 0;
    function s(e, { query: i = "", tags: n = [], sort: o = "name" } = {}) {
      let l = {
        priceIn: (e, t) => r(e, "prompt") - r(t, "prompt"),
        priceOut: (e, t) => r(e, "completion") - r(t, "completion"),
        context: (e, t) => a(t) - a(e),
      }[o];
      return (function (e, t = "") {
        let r = t.toLowerCase().trim().split(/\s+/).filter(Boolean);
        return e.filter((e) => {
          let t = [e.id, e.name, e.provider_name, ...(e.provider_names || [])]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();
          return r.every((e) => t.includes(e));
        });
      })(e, i)
        .filter((e) => n.every((r) => (0, t.modelCapabilities)(e).includes(r)))
        .sort(
          (e, t) =>
            l?.(e, t) ||
            String(e.name || e.id).localeCompare(String(t.name || t.id)) ||
            String(e.id).localeCompare(String(t.id))
        );
    }
    e.s([
      "CATALOG_SORTS",
      0,
      [
        { key: "name", label: "Name" },
        { key: "priceIn", label: "Price in · lowest first" },
        { key: "priceOut", label: "Price out · lowest first" },
        { key: "context", label: "Context · largest first" },
      ],
      "filterModels",
      0,
      s,
      "modelTagCounts",
      0,
      function (e, r = {}) {
        let a = s(e, r);
        return Object.fromEntries(
          t.MODEL_CAPABILITIES.map((e) => [
            e.key,
            a.filter((r) => (0, t.modelCapabilities)(r).includes(e.key)).length,
          ])
        );
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
      i = (e) => e && "object" == typeof e && !Array.isArray(e),
      n = (e, t) =>
        i(e) &&
        Object.entries(e).every(
          ([e, r]) => t.includes(e) && Number.isSafeInteger(r) && r > 0
        );
    function o(e, o) {
      return !!(
        i(e) &&
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
        n(e.skipped, r) &&
        ["public", "attested", "unlinkable"].includes(e.lane) &&
        "boolean" == typeof e.network_host &&
        Array.isArray(e.parameters) &&
        e.parameters.length <= s.length &&
        new Set(e.parameters).size === e.parameters.length &&
        e.parameters.every((e) => s.includes(e)) &&
        ("fallback" === e.reason
          ? n(e.fallback, a) && Object.keys(e.fallback).length > 0
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
      p = {
        dcap: "DCAP: Intel's signature and certificate chain over the quote",
        dstack: "dstack: the deployment's compose hash against its event log",
      },
      h = [
        [/tdx/i, "Intel TDX (confidential virtual machine)"],
        [/snp|sev/i, "AMD SEV-SNP (confidential virtual machine)"],
        [/^dev$/i, "None: simulated for development"],
      ];
    function m(e) {
      if (!e) return "Not reported";
      for (let [t, r] of h) if (t.test(e)) return r;
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
      v = (e) => (e ? "yes" : "no"),
      _ = (e) => new TextEncoder().encode(e),
      b = (e) => Array.from(e, (e) => e.toString(16).padStart(2, "0")).join("");
    function k(e) {
      let t = String(e).replace(/^0x/i, "");
      if (t.length % 2 || /[^0-9a-fA-F]/.test(t)) throw Error("invalid hex");
      return Uint8Array.from(t.match(/../g) || [], (e) => parseInt(e, 16));
    }
    function x(e) {
      let t = String(e).trim();
      if (!/^[A-Za-z0-9+/_-]*={0,2}$/.test(t)) throw Error("invalid base64");
      let r = t.replace(/-/g, "+").replace(/_/g, "/").replace(/=+$/, ""),
        a = atob(r + "=".repeat((4 - (r.length % 4)) % 4));
      return Uint8Array.from(a, (e) => e.charCodeAt(0));
    }
    let w = (...e) => {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          r = 0;
        for (let a of e) t.set(a, r), (r += a.length);
        return t;
      },
      S = async (e) => new Uint8Array(await crypto.subtle.digest("SHA-256", e)),
      j = (1n << 64n) - 1n,
      A = [
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
      C = [
        0, 1, 62, 28, 27, 36, 44, 6, 55, 20, 3, 10, 43, 25, 39, 41, 45, 15, 21,
        8, 18, 2, 61, 56, 14,
      ],
      T = (e, t) =>
        0 === t ? e : ((e << BigInt(t)) | (e >> BigInt(64 - t))) & j;
    function N(e) {
      let t = new Uint8Array(136 * Math.ceil((e.length + 1) / 136));
      t.set(e), (t[e.length] ^= 1), (t[t.length - 1] ^= 128);
      let r = Array(25).fill(0n),
        a = [, , , , ,],
        s = Array(25);
      for (let e = 0; e < t.length; e += 136) {
        for (let a = 0; a < 17; a++) {
          let s = 0n;
          for (let r = 7; r >= 0; r--) s = (s << 8n) | BigInt(t[e + 8 * a + r]);
          r[a] ^= s;
        }
        for (let e = 0; e < 24; e++) {
          for (let e = 0; e < 5; e++)
            a[e] = r[e] ^ r[e + 5] ^ r[e + 10] ^ r[e + 15] ^ r[e + 20];
          for (let e = 0; e < 5; e++) {
            let t = a[(e + 4) % 5] ^ T(a[(e + 1) % 5], 1);
            for (let a = 0; a < 25; a += 5) r[e + a] ^= t;
          }
          for (let e = 0; e < 5; e++)
            for (let t = 0; t < 5; t++)
              s[t + ((2 * e + 3 * t) % 5) * 5] = T(r[e + 5 * t], C[e + 5 * t]);
          for (let e = 0; e < 25; e += 5)
            for (let t = 0; t < 5; t++)
              r[t + e] =
                s[t + e] ^ (~s[((t + 1) % 5) + e] & j & s[((t + 2) % 5) + e]);
          r[0] ^= A[e];
        }
      }
      let i = new Uint8Array(32);
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 8; t++)
          i[8 * e + t] = Number((r[e] >> BigInt(8 * t)) & 255n);
      return i;
    }
    let E = (e, t) => {
      for (let r = 0; r < Math.min(e.length, t.length); r++)
        if (e[r] !== t[r]) return e[r] - t[r];
      return e.length - t.length;
    };
    function $(e, t, r) {
      try {
        let a = k(e);
        for (let e of t) {
          let t = k(e);
          a = N(0 > E(a, t) ? w(a, t) : w(t, a));
        }
        return b(a) === b(k(r));
      } catch {
        return !1;
      }
    }
    async function I(e, t, r) {
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
    let M = (e, t) => ({ id: e, status: "pass", detail: t }),
      D = (e, t) => ({ id: e, status: "fail", detail: t }),
      O = (e, t) => ({ id: e, status: "not_checked", detail: t }),
      P = [
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
          ed25519: t.ed25519 || I,
          chunks: t.chunks,
        };
      if (r && !e.payload) {
        let t = await V(r, { ...a, proof: e.anchor });
        return {
          valid: t.valid,
          keyId: t.keyId,
          checks: t.checks,
          anchor: q(t.checks),
          notChecked: P,
          claims: t.claims,
        };
      }
      let s = await U(e, t);
      if (!r) return s;
      let i = await V(r, { ...a, proof: e.v2?.anchor });
      return {
        ...s,
        valid: s.valid && i.valid,
        checks: [...s.checks, ...i.checks],
        claims: i.claims,
      };
    }
    let q = (e) => {
      let t = e.find((e) => "v2_anchor_proof" === e.id);
      return t?.status === "pass"
        ? "proof_valid"
        : t?.status === "fail"
        ? "proof_invalid"
        : "no_proof";
    };
    async function U(
      e,
      { keys: t, publicKeyHex: r, ed25519: a = I, skewMs: s = 3e5 } = {}
    ) {
      let i = [],
        n = "string" == typeof e?.key_id ? e.key_id : "",
        l = (e) => ({
          valid:
            i.every((e) => "fail" !== e.status) &&
            i.some((e) => "signature" === e.id && "pass" === e.status),
          keyId: n,
          checks: i,
          anchor: e,
          notChecked: P,
        });
      if (
        !e ||
        "object" != typeof e ||
        !e.payload ||
        "object" != typeof e.payload ||
        "string" != typeof e.sig ||
        !n
      )
        return (
          i.push(D("shape", "A receipt needs payload, sig and key_id.")),
          l("no_proof")
        );
      void 0 !== e.payload.route &&
        i.push(
          o(e.payload.route, e.payload.provider)
            ? M(
                "route",
                "Route explanation v1 is a router-signed summary, not independent proof of selection."
              )
            : D("route", "Invalid route explanation.")
        ),
        i.push(
          void 0 === e.alg || "Ed25519" === e.alg
            ? M("alg", "Ed25519")
            : D("alg", `Unsupported algorithm ${String(e.alg)}.`)
        );
      let d = null,
        u = null,
        c = async (e) => b(await S(e)).slice(0, 16);
      if (r) {
        try {
          if (((d = k(r.trim())), 32 !== d.length)) throw Error("length");
        } catch {
          (d = null),
            i.push(D("key", "The key you entered is not 32 bytes of hex."));
        }
        if (d) {
          let e = await c(d);
          i.push(
            e === n
              ? M("key", `Key id ${n} matches the key you entered.`)
              : D(
                  "key",
                  `The receipt names key ${n}, but the key you entered has id ${e}.`
                )
          );
        }
      } else {
        let e = (Array.isArray(t) ? t : t?.keys || []).find((e) => e.kid === n);
        if (e)
          if ("OKP" !== e.kty || "Ed25519" !== e.crv)
            i.push(D("key", "The published key is not an Ed25519 key."));
          else
            try {
              if (((d = x(e.x)), 32 !== d.length)) throw Error("length");
              let t = await c(d);
              i.push(
                t === n
                  ? M(
                      "key",
                      `Key ${n} is in the router's published list and its id matches its bytes.`
                    )
                  : D(
                      "key",
                      `The published entry's id does not match its key bytes (${t}).`
                    )
              ),
                (u = {
                  from: e.valid_from ? Date.parse(e.valid_from) : null,
                  to: e.retired_at ? Date.parse(e.retired_at) : null,
                });
            } catch {
              (d = null), i.push(D("key", "The published key is malformed."));
            }
        else
          i.push(
            D("key", `Key ${n} is not in the router's published key list.`)
          );
      }
      let p = null;
      try {
        p = x(e.sig);
      } catch {
        i.push(D("signature", "The signature is not valid base64."));
      }
      let h = _(
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
      if (d && p && !i.some((e) => "key" === e.id && "fail" === e.status))
        try {
          i.push(
            (await a(d, h, p))
              ? M(
                  "signature",
                  "The signature over the receipt's contents verifies with that key."
                )
              : D(
                  "signature",
                  "The signature does not verify: the receipt was changed or was not signed by that key."
                )
          );
        } catch (e) {
          i.push(
            e?.unsupported
              ? O("signature", `${e.message} Use one of the SDKs to check it.`)
              : D("signature", String(e?.message || e))
          );
        }
      else
        i.some((e) => "signature" === e.id) ||
          i.push(
            D("signature", "Not verified: there is no usable key or signature.")
          );
      let m = ((e) => {
        if ("number" == typeof e.ts && Number.isFinite(e.ts)) return e.ts;
        let t = Date.parse(e.issued || "");
        return Number.isFinite(t) ? t : null;
      })(e.payload);
      if (u && null !== m && (null !== u.from || null !== u.to)) {
        let e = null !== u.from && m < u.from - s,
          t = null !== u.to && m > u.to + s;
        i.push(
          e || t
            ? D(
                "key_window",
                "The receipt is dated outside its signing key's validity window."
              )
            : M(
                "key_window",
                "The receipt's date is inside its key's validity window."
              )
        );
      } else
        i.push(O("key_window", "No key window or receipt date to compare."));
      if (e.leaf && p) {
        let t = "0x" + b(N(N(w(h, p))));
        i.push(
          t === String(e.leaf).toLowerCase()
            ? M(
                "leaf",
                "The receipt's anchor leaf matches its contents and signature."
              )
            : D(
                "leaf",
                "The anchor leaf does not match the receipt's contents and signature."
              )
        );
      } else i.push(O("leaf", "The receipt carries no anchor leaf."));
      let f = "no_proof",
        g = e.anchor;
      if (g && Array.isArray(g.proof) && "string" == typeof g.root && e.leaf) {
        let t = $(e.leaf, g.proof, g.root);
        (f = t ? "proof_valid" : "proof_invalid"),
          i.push(
            t
              ? M(
                  "anchor_proof",
                  `The receipt is included under anchor root ${g.root.slice(
                    0,
                    10
                  )}…`
                )
              : D(
                  "anchor_proof",
                  "The inclusion proof does not lead from the receipt to the stated root."
                )
          );
      } else
        i.push(
          O(
            "anchor_proof",
            "No anchor proof was included. A receipt is anchored within the hour, so fetch it again later to get one."
          )
        );
      return l(f);
    }
    function B(e) {
      let t = 0,
        r = (r) => {
          if (t + r > e.length) throw Error("truncated CBOR");
        },
        a = () => {
          r(1);
          let s = e[t++],
            i = s >> 5,
            n = 31 & s;
          if (7 === i) {
            if (20 === n) return !1;
            if (21 === n) return !0;
            if (22 === n) return null;
            throw Error("unsupported CBOR value");
          }
          let o = n;
          if (n >= 24) {
            let a = { 24: 1, 25: 2, 26: 4, 27: 8 }[n];
            if (!a) throw Error("indefinite CBOR lengths are not allowed");
            r(a), (o = 0);
            for (let r = 0; r < a; r++) o = 256 * o + e[t++];
          }
          if (0 === i) return o;
          if (1 === i) return -1 - o;
          if (2 === i || 3 === i) {
            r(o);
            let a = e.slice(t, t + o);
            return (t += o), 2 === i ? a : new TextDecoder().decode(a);
          }
          if (4 === i) return Array.from({ length: o }, a);
          if (5 === i) {
            let e = new Map();
            for (let t = 0; t < o; t++) e.set(a(), a());
            return e;
          }
          return { tag: o, value: a() };
        },
        s = a();
      if (t !== e.length) throw Error("trailing CBOR bytes");
      return s;
    }
    let H = (e) =>
        e instanceof Map
          ? Object.fromEntries([...e].map(([e, t]) => [String(e), H(t)]))
          : Array.isArray(e)
          ? e.map(H)
          : e,
      R = (e, t) =>
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
      z = (e) => w(R(2, e.length), e);
    async function F(e, t) {
      let r = await S(_(e));
      for (let e of t) r = await S(w(r, _(e)));
      return "sha256:" + b(r);
    }
    async function V(
      e,
      { keys: t, publicKeyHex: r, ed25519: a = I, chunks: s, proof: i } = {}
    ) {
      let n,
        l,
        d = [];
      try {
        (n = x(e)),
          (l = (function (e) {
            let t = B(e);
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
            let r = B(t[0]),
              a = r instanceof Map ? r.get(4) : null;
            return {
              alg: r instanceof Map ? r.get(1) : null,
              keyId: a instanceof Uint8Array ? b(a) : "",
              claims: H(B(t[2])),
              prot: t[0],
              payload: t[2],
              signature: t[3],
            };
          })(n));
      } catch (e) {
        return {
          valid: !1,
          keyId: "",
          claims: null,
          checks: [
            D(
              "v2_shape",
              `The v2 receipt is not a readable COSE_Sign1 (${e.message}).`
            ),
          ],
        };
      }
      void 0 !== l.claims.route &&
        d.push(
          o(l.claims.route, l.claims.node?.provider)
            ? M(
                "v2_route",
                "Route explanation v1 is covered by the COSE signature; routing itself is not independently checked."
              )
            : D("v2_route", "Invalid route explanation.")
        ),
        d.push(
          -8 === l.alg
            ? M("v2_alg", "v2: COSE_Sign1 with EdDSA.")
            : D("v2_alg", `v2: unsupported COSE algorithm ${String(l.alg)}.`)
        );
      let u = null;
      try {
        if (r) u = k(r.trim());
        else {
          let e = (Array.isArray(t) ? t : t?.keys || []).find(
            (e) => e.kid === l.keyId
          );
          e && "OKP" === e.kty && "Ed25519" === e.crv && (u = x(e.x));
        }
      } catch {
        u = null;
      }
      if (u && 32 === u.length)
        if (b(await S(u)).slice(0, 16) !== l.keyId)
          d.push(
            D(
              "v2_signature",
              `v2: the receipt names key ${l.keyId}, which is not this key.`
            )
          );
        else
          try {
            let e, t;
            d.push(
              (await a(
                u,
                ((e = l.prot),
                (t = l.payload),
                w(
                  R(4, 4),
                  R(3, 10),
                  _("Signature1"),
                  z(e),
                  z(new Uint8Array()),
                  z(t)
                )),
                l.signature
              ))
                ? M(
                    "v2_signature",
                    "v2: the COSE signature over the claims verifies."
                  )
                : D(
                    "v2_signature",
                    "v2: the COSE signature does not verify: the claims were changed or not signed by that key."
                  )
            );
          } catch (e) {
            d.push(
              e?.unsupported
                ? O(
                    "v2_signature",
                    `${e.message} Use one of the SDKs to check it.`
                  )
                : D("v2_signature", String(e?.message || e))
            );
          }
      else
        d.push(
          D(
            "v2_signature",
            `v2: key ${l.keyId || "(none)"} is not available to check against.`
          )
        );
      if (Array.isArray(s)) {
        let e = await F(l.claims.rid, s);
        d.push(
          e === l.claims.resp?.chain
            ? M(
                "v2_chain",
                `v2: the chain head over ${s.length} streamed events matches.`
              )
            : D(
                "v2_chain",
                "v2: the chain head does not match the streamed events: the stream was cut or changed."
              )
        );
      } else
        d.push(
          O(
            "v2_chain",
            l.claims.resp?.chain
              ? `v2: signed chain head ${y(
                  l.claims.resp.chain
                )}. Paste the streamed events to check it.`
              : "v2: not a streamed response, so there is no chain."
          )
        );
      let c = "0x" + b(N(N(n)));
      if (i && Array.isArray(i.proof) && "string" == typeof i.root) {
        let e = $(c, i.proof, i.root);
        d.push(
          e
            ? M(
                "v2_anchor_proof",
                `v2: included under root ${i.root.slice(0, 10)}…${
                  i.anchored ? "" : " (a root kept off chain, not posted)"
                }`
              )
            : D(
                "v2_anchor_proof",
                "v2: the Merkle path does not lead from this receipt to the root."
              )
        );
      } else
        d.push(
          O(
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
          let r,
            a = e || {},
            s =
              "attested" === a.status || "simulated" === a.status
                ? a.status
                : "unverified",
            i =
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
                      c[a.reason] ||
                      "The router has no current verification for this provider."
                    } Treat it as an ordinary provider: nothing here should be read as a privacy guarantee.`,
                  },
            n = a.measurement || null,
            o = n?.transparency_log || null,
            l = n?.registry || null,
            d = f[l?.state] || f.not_recorded,
            u = Array.isArray(a.verifiers) ? a.verifiers : [],
            h = o?.subject === "measurement_bundle",
            y = h
              ? "A signed measurement bundle for this compose hash was found in the log"
              : "An entry for the image was found",
            _ = n
              ? o?.found &&
                o.inclusion_verified &&
                o.checkpoint_signature_verified
                ? {
                    state: "yes",
                    text: `${y}, its inclusion in the log was verified, and so was the log's signature over its checkpoint.${
                      h
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
            b = "unverified" === s ? null : a.attested_at || null;
          return {
            status: s,
            verdict: i,
            provider: a.provider || "",
            rows: {
              tee: {
                label: "Hardware",
                value: "unverified" === s ? "Not established" : m(a.tee),
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
                  u.length && "attested" === s ? u.map((e) => p[e] || e) : [],
                empty:
                  "Nobody: no verifier has accepted a quote for this provider.",
                state: "attested" === s && u.length ? "yes" : "no",
              },
              lastVerified: {
                label: "Last verified by the router",
                value: b || "",
                relative: g(b, t),
                empty: "Never, or not recently enough to count.",
                state: b ? "yes" : "no",
              },
            },
            measurement: n
              ? {
                  recorded: !0,
                  currentlyAttested: "attested" === s && !!n.attested_now,
                  status: n.status,
                  firstSeen: n.first_attested_at || "",
                  lastSeen: n.last_seen_at || "",
                  digests: [
                    {
                      key: "image",
                      label: "Image digest",
                      value: n.image_digest || "",
                    },
                    {
                      key: "compose",
                      label: "Compose hash",
                      value: n.compose_hash || "",
                    },
                    {
                      key: "model",
                      label: "Model digest",
                      value: n.model_digest || "",
                    },
                  ],
                }
              : { recorded: !1, currentlyAttested: !1, digests: [] },
            transparencyLog: {
              ..._,
              index: o?.log_index ?? null,
              uuid: o?.uuid || "",
              integratedAt: o?.integrated_at || "",
              checkedAt: o?.checked_at || "",
              subject: h ? "measurement_bundle" : null,
              entryUrl:
                "string" == typeof (r = o?.entry_url) &&
                /^https:\/\/[^\s"'<>]+$/.test(r)
                  ? r
                  : "",
              bundleDigest:
                h && "string" == typeof o.bundle?.digest ? o.bundle.digest : "",
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
                v("attested" === s && a.checks?.quote_verified),
              ],
              [
                "digests_bound_to_quote",
                "The image, compose and model digests are committed inside that quote",
                v("attested" === s && a.checks?.digests_bound_to_quote),
              ],
              [
                "transparency_log_entry",
                h
                  ? "The measurement bundle has an entry in a transparency log"
                  : "The image has an entry in a transparency log",
                v(a.checks?.transparency_log_entry),
              ],
              [
                "transparency_log_checkpoint_signature",
                "The log's signature over that entry was verified",
                v(a.checks?.transparency_log_checkpoint_signature),
              ],
              [
                "registered_on_chain",
                "The measurement is registered on chain",
                v(a.checks?.registered_on_chain),
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
            s =
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
            r = (t.get("p") || t.get("provider") || "").trim();
          return u.test(r) ? r : "";
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
