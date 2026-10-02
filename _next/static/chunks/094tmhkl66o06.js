(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  1342,
  (e) => {
    "use strict";
    var t = e.i(71682),
      o = e.i(98248),
      r = e.i(27270);
    e.s([
      "default",
      0,
      function () {
        let e = (0, o.useId)(),
          [l, n] = (0, o.useState)(null);
        return (0, t.jsxs)("div", {
          className: r.default.filter,
          role: "search",
          children: [
            (0, t.jsx)("label", {
              htmlFor: e,
              children:
                "Filter tables and columns, for example ip, prompt, receipt or tlog",
            }),
            (0, t.jsx)("input", {
              id: e,
              type: "search",
              autoComplete: "off",
              spellCheck: !1,
              onChange: (e) =>
                (function (e) {
                  let t = e.trim().toLowerCase(),
                    o = Array.from(
                      document.querySelectorAll("[data-keep-table]")
                    ),
                    r = 0;
                  for (let e of o) {
                    let o =
                      !t || (e.textContent || "").toLowerCase().includes(t);
                    (e.hidden = !o),
                      o && r++,
                      t &&
                        o &&
                        e instanceof HTMLDetailsElement &&
                        (e.open = !0),
                      !t && e instanceof HTMLDetailsElement && (e.open = !1);
                  }
                  for (let e of document.querySelectorAll("[data-keep-group]"))
                    e.hidden =
                      !!t &&
                      !e.querySelector("[data-keep-table]:not([hidden])");
                  n(t ? r : null);
                })(e.target.value),
            }),
            (0, t.jsx)("span", {
              "aria-live": "polite",
              children:
                null == l ? "" : `${l} table${1 === l ? "" : "s"} match`,
            }),
          ],
        });
      },
    ]);
  },
  93714,
  (e) => {
    "use strict";
    var t = e.i(71682),
      o = e.i(98248),
      r = e.i(4581);
    let l = /^[0-9a-f]{64}$/;
    var n = e.i(27270);
    e.s(
      [
        "default",
        0,
        function ({ digest: e }) {
          let s,
            [a, i] = (0, o.useState)({ phase: "loading" });
          return (
            (0, o.useEffect)(() => {
              let t,
                o = new AbortController();
              return (
                fetch(
                  ((t = r.API_BASE),
                  `${String(t || "").replace(
                    /\/$/,
                    ""
                  )}/api/v1/tlog/proof?kind=data_inventory&sha256=${e}`),
                  { signal: o.signal, headers: { accept: "application/json" } }
                )
                  .then(async (t) => {
                    let o = await t.json().catch(() => null);
                    i(
                      (function (e, t, o) {
                        if (!l.test(o || ""))
                          return { phase: "error", reason: "bad_digest" };
                        if (200 === e) {
                          let e = t?.data;
                          if (
                            !e ||
                            "data_inventory" !== e.kind ||
                            e.sha256 !== o ||
                            !Number.isInteger(e.index)
                          )
                            return {
                              phase: "error",
                              reason: "unexpected_answer",
                            };
                          let r =
                              e.checkpoint && "object" == typeof e.checkpoint
                                ? e.checkpoint
                                : null,
                            l =
                              r?.rekor && "object" == typeof r.rekor
                                ? r.rekor
                                : null,
                            n =
                              l &&
                              Number.isInteger(l.log_index) &&
                              l.verified?.inclusion === !0
                                ? {
                                    logIndex: l.log_index,
                                    entryUrl:
                                      "string" == typeof l.entry_url &&
                                      /^https:\/\//.test(l.entry_url)
                                        ? l.entry_url
                                        : null,
                                    searchUrl:
                                      "string" == typeof l.search_url &&
                                      /^https:\/\//.test(l.search_url)
                                        ? l.search_url
                                        : null,
                                    checkpointSize: Number.isInteger(l.size)
                                      ? l.size
                                      : null,
                                  }
                                : null;
                          return {
                            phase: "logged",
                            index: e.index,
                            checkpointSize: Number.isInteger(r?.size)
                              ? r.size
                              : null,
                            witnessed: r?.witnessed === !0,
                            cosignedBy: Array.isArray(r?.cosigned_by)
                              ? r.cosigned_by.filter(
                                  (e) => "string" == typeof e
                                )
                              : [],
                            rekor: n,
                          };
                        }
                        let r = t?.error?.type;
                        return 404 === e && "not_logged" === r
                          ? { phase: "not_logged" }
                          : 404 === e
                          ? { phase: "no_log" }
                          : { phase: "error", reason: `status_${e}` };
                      })(t.status, o, e)
                    );
                  })
                  .catch((e) => {
                    e?.name !== "AbortError" &&
                      i({ phase: "error", reason: "network" });
                  }),
                () => o.abort()
              );
            }, [e]),
            (0, t.jsxs)("div", {
              className: n.default.log,
              "aria-live": "polite",
              "aria-busy": "loading" === a.phase,
              children: [
                (0, t.jsxs)("div", {
                  className: n.default.logHead,
                  children: [
                    (0, t.jsx)("span", {
                      className: n.default.pulse,
                      "data-phase": a.phase,
                      "aria-hidden": "true",
                    }),
                    (0, t.jsx)("span", { children: "Transparency log" }),
                    (0, t.jsx)("code", {
                      children: "GET /api/v1/tlog/proof?kind=data_inventory",
                    }),
                  ],
                }),
                "loading" === a.phase &&
                  (0, t.jsx)("p", {
                    className: n.default.logNote,
                    children: "Asking the router’s log about this hash…",
                  }),
                "logged" === a.phase &&
                  (0, t.jsxs)("dl", {
                    className: n.default.logList,
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("dt", { children: "In the log" }),
                          (0, t.jsxs)("dd", {
                            children: [
                              "Yes: entry ",
                              (0, t.jsx)("code", { children: a.index }),
                              ", kind ",
                              (0, t.jsx)("code", {
                                children: "data_inventory",
                              }),
                              null != a.checkpointSize &&
                                (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    ", under a signed checkpoint of size ",
                                    (0, t.jsx)("code", {
                                      children: a.checkpointSize,
                                    }),
                                    " (",
                                    (0, t.jsx)("a", {
                                      href:
                                        ((s = r.API_BASE),
                                        `${String(s || "").replace(
                                          /\/$/,
                                          ""
                                        )}/tlog/checkpoint`),
                                      children: "read the newest checkpoint",
                                    }),
                                    ")",
                                  ],
                                }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("dt", { children: "Witnesses" }),
                          (0, t.jsx)("dd", {
                            children: a.witnessed
                              ? `The checkpoint carries the quorum of witness cosignatures (${a.cosignedBy.join(
                                  ", "
                                )}).`
                              : "The checkpoint does not carry the quorum of witness cosignatures yet.",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("dt", { children: "Rekor" }),
                          (0, t.jsx)("dd", {
                            children: a.rekor
                              ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    "A checkpoint that includes it is anchored in Rekor at log index ",
                                    (0, t.jsx)("code", {
                                      children: a.rekor.logIndex,
                                    }),
                                    null != a.rekor.checkpointSize &&
                                      (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          " (checkpoint size ",
                                          a.rekor.checkpointSize,
                                          ")",
                                        ],
                                      }),
                                    ".",
                                    " ",
                                    a.rekor.searchUrl
                                      ? (0, t.jsx)("a", {
                                          href: a.rekor.searchUrl,
                                          rel: "noopener noreferrer",
                                          target: "_blank",
                                          children: "Open the entry",
                                        })
                                      : a.rekor.entryUrl
                                      ? (0, t.jsx)("a", {
                                          href: a.rekor.entryUrl,
                                          rel: "noopener noreferrer",
                                          target: "_blank",
                                          children: "Open the entry",
                                        })
                                      : null,
                                  ],
                                })
                              : "Not anchored in Rekor for this checkpoint.",
                          }),
                        ],
                      }),
                    ],
                  }),
                "not_logged" === a.phase &&
                  (0, t.jsx)("p", {
                    className: n.default.logNote,
                    children:
                      "The router’s log does not hold this hash. Either this router does not append the inventory (TLOG_DATA_INVENTORY is off) or it has not started with this version yet.",
                  }),
                "no_log" === a.phase &&
                  (0, t.jsx)("p", {
                    className: n.default.logNote,
                    children:
                      "This router does not run a transparency log, so there is nothing to look up. The hash above can still be checked against the file.",
                  }),
                "error" === a.phase &&
                  (0, t.jsx)("p", {
                    className: n.default.logNote,
                    children:
                      "The router’s log could not be read just now, so nothing is shown here.",
                  }),
              ],
            })
          );
        },
      ],
      93714
    );
  },
  27270,
  (e) => {
    e.v({
      body: "keep-module__MzKewq__body",
      caveat: "keep-module__MzKewq__caveat",
      caveats: "keep-module__MzKewq__caveats",
      cols: "keep-module__MzKewq__cols",
      dirty: "keep-module__MzKewq__dirty",
      facts: "keep-module__MzKewq__facts",
      filter: "keep-module__MzKewq__filter",
      group: "keep-module__MzKewq__group",
      groupNote: "keep-module__MzKewq__groupNote",
      hash: "keep-module__MzKewq__hash",
      headline: "keep-module__MzKewq__headline",
      holds: "keep-module__MzKewq__holds",
      log: "keep-module__MzKewq__log",
      logHead: "keep-module__MzKewq__logHead",
      logList: "keep-module__MzKewq__logList",
      logNote: "keep-module__MzKewq__logNote",
      more: "keep-module__MzKewq__more",
      nav: "keep-module__MzKewq__nav",
      notes: "keep-module__MzKewq__notes",
      plain: "keep-module__MzKewq__plain",
      prov: "keep-module__MzKewq__prov",
      pulse: "keep-module__MzKewq__pulse",
      readers: "keep-module__MzKewq__readers",
      reads: "keep-module__MzKewq__reads",
      req: "keep-module__MzKewq__req",
      retention: "keep-module__MzKewq__retention",
      reviewed: "keep-module__MzKewq__reviewed",
      small: "keep-module__MzKewq__small",
      src: "keep-module__MzKewq__src",
      store: "keep-module__MzKewq__store",
      stores: "keep-module__MzKewq__stores",
      subnav: "keep-module__MzKewq__subnav",
      table: "keep-module__MzKewq__table",
      tbody: "keep-module__MzKewq__tbody",
      tmeta: "keep-module__MzKewq__tmeta",
      tname: "keep-module__MzKewq__tname",
      type: "keep-module__MzKewq__type",
      wide: "keep-module__MzKewq__wide",
    });
  },
]);
