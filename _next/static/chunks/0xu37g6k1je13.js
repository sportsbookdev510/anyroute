(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  88778,
  (e) => {
    e.v({
      body: "changelog-module__eZoe_G__body",
      count: "changelog-module__eZoe_G__count",
      entry: "changelog-module__eZoe_G__entry",
      filters: "changelog-module__eZoe_G__filters",
      links: "changelog-module__eZoe_G__links",
      meta: "changelog-module__eZoe_G__meta",
      month: "changelog-module__eZoe_G__month",
      search: "changelog-module__eZoe_G__search",
    });
  },
  20417,
  (e) => {
    "use strict";
    var l = e.i(71682),
      a = e.i(98248);
    let t = ["chat", "agents", "network", "build", "verify", "privacy", "fix"];
    function n(e) {
      return [...e].sort(
        (e, l) => l.date.localeCompare(e.date) || e.id.localeCompare(l.id)
      );
    }
    var s = e.i(88778);
    e.s(
      [
        "default",
        0,
        function ({ entries: e }) {
          let [i, r] = (0, a.useState)(""),
            [o, c] = (0, a.useState)(""),
            h = (function (e, { tag: l = "", query: a = "" } = {}) {
              let t = a.trim().toLowerCase().split(/\s+/).filter(Boolean);
              return n(e).filter((e) => {
                let a = [e.title, e.summary, e.date, ...e.tags]
                  .join(" ")
                  .toLowerCase();
                return (
                  (!l || e.tags.includes(l)) && t.every((e) => a.includes(e))
                );
              });
            })(e, { query: i, tag: o });
          return (0, l.jsxs)("div", {
            className: s.default.body,
            children: [
              (0, l.jsxs)("div", {
                className: s.default.filters,
                role: "search",
                "aria-label": "Search shipped changes",
                children: [
                  (0, l.jsxs)("label", {
                    className: s.default.search,
                    children: [
                      "Search changes",
                      (0, l.jsx)("input", {
                        type: "search",
                        value: i,
                        onChange: (e) => r(e.target.value),
                        autoComplete: "off",
                      }),
                    ],
                  }),
                  (0, l.jsxs)("label", {
                    children: [
                      "Filter by tag",
                      (0, l.jsxs)("select", {
                        value: o,
                        onChange: (e) => c(e.target.value),
                        children: [
                          (0, l.jsx)("option", {
                            value: "",
                            children: "All tags",
                          }),
                          t.map((e) =>
                            (0, l.jsx)("option", { value: e, children: e }, e)
                          ),
                        ],
                      }),
                    ],
                  }),
                  (i || o) &&
                    (0, l.jsx)("button", {
                      className: "text-button",
                      onClick: () => {
                        r(""), c("");
                      },
                      children: "Clear filters",
                    }),
                ],
              }),
              (0, l.jsxs)("p", {
                className: s.default.count,
                role: "status",
                children: [
                  h.length,
                  " ",
                  1 === h.length ? "change" : "changes",
                ],
              }),
              !h.length &&
                (0, l.jsx)("p", {
                  children:
                    "No changes match. Try another search or clear the filters.",
                }),
              (function (e) {
                let l = new Map();
                for (let a of n(e)) {
                  let e = a.date.slice(0, 7);
                  l.has(e) ||
                    l.set(e, {
                      month: e,
                      label: new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                      }).format(new Date(a.date)),
                      entries: [],
                    }),
                    l.get(e).entries.push(a);
                }
                return [...l.values()];
              })(h).map((e) =>
                (0, l.jsxs)(
                  "section",
                  {
                    "aria-labelledby": `month-${e.month}`,
                    className: s.default.month,
                    children: [
                      (0, l.jsx)("h2", {
                        id: `month-${e.month}`,
                        children: e.label,
                      }),
                      (0, l.jsx)("div", {
                        children: e.entries.map((e) =>
                          (0, l.jsxs)(
                            "article",
                            {
                              id: e.id,
                              className: s.default.entry,
                              children: [
                                (0, l.jsxs)("div", {
                                  className: s.default.meta,
                                  children: [
                                    (0, l.jsxs)("time", {
                                      dateTime: e.date,
                                      children: [e.date, " UTC"],
                                    }),
                                    (0, l.jsx)("span", {
                                      children: e.tags.join(" · "),
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("h3", {
                                  children: (0, l.jsx)("a", {
                                    href: `#${e.id}`,
                                    "aria-label": `${e.title}, permalink`,
                                    children: e.title,
                                  }),
                                }),
                                (0, l.jsx)("p", { children: e.summary }),
                                (0, l.jsx)("ul", {
                                  className: s.default.links,
                                  "aria-label": `Links for ${e.title}`,
                                  children: e.links.map((a, t) =>
                                    (0, l.jsx)(
                                      "li",
                                      {
                                        children: (0, l.jsxs)("a", {
                                          href: a.href,
                                          children: [
                                            a.label,
                                            "View commit" === a.label &&
                                            e.links.filter(
                                              (e) => "View commit" === e.label
                                            ).length > 1
                                              ? ` ${t}`
                                              : "",
                                            (0, l.jsx)("span", {
                                              "aria-hidden": "true",
                                              children: " ↗",
                                            }),
                                          ],
                                        }),
                                      },
                                      a.href
                                    )
                                  ),
                                }),
                              ],
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  },
                  e.month
                )
              ),
            ],
          });
        },
      ],
      20417
    );
  },
]);
