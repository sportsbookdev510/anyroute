(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  54269,
  (e) => {
    "use strict";
    var t = e.i(71682),
      r = e.i(98248),
      a = e.i(92882),
      n = e.i(4581);
    let i = "/api/v1/telegram/link";
    async function s(e, t = {}) {
      let r = await e(i, t);
      if ("boolean" != typeof r?.data?.linked)
        throw Error("Telegram link status could not be read.");
      return r.data;
    }
    async function o(e) {
      let t = await e(i, { method: "POST" }),
        { code: r, expires_at: a } = t?.data || {};
      if (
        !/^[A-Za-z0-9_-]{16}$/.test(r || "") ||
        !Number.isFinite(Date.parse(a))
      )
        throw Error("Telegram link code could not be read.");
      return { code: r, expires_at: a };
    }
    e.s(
      [
        "default",
        0,
        function ({ principalKey: e }) {
          let [l, d] = (0, r.useState)(null),
            [c, u] = (0, r.useState)(null),
            [h, p] = (0, r.useState)(""),
            [m, f] = (0, r.useState)(!1),
            [g, y] = (0, r.useState)(!1),
            b = (0, r.useCallback)(
              (t, r = {}) => (0, n.api)(t, { ...r, key: e }),
              [e]
            );
          if (
            ((0, r.useEffect)(() => {
              let e = new AbortController();
              d(null), u(null), p(""), y(!1);
              let t = () =>
                s(b, { signal: e.signal })
                  .then((t) => {
                    !e.signal.aborted && (d(t), t.linked && u(null));
                  })
                  .catch((t) => {
                    e.signal.aborted ||
                      (y(404 === t.status),
                      p(404 === t.status ? "" : t.message));
                  });
              t();
              let r = setInterval(t, 5e3);
              return () => {
                e.abort(), clearInterval(r);
              };
            }, [b]),
            g)
          )
            return null;
          let _ = async (e) => {
            f(!0), p("");
            try {
              await e();
            } catch (e) {
              p(e.message);
            } finally {
              f(!1);
            }
          };
          return (0, t.jsxs)("section", {
            className: "control-panel",
            children: [
              (0, t.jsx)("h2", { children: "Telegram" }),
              (0, t.jsx)("p", {
                className: "help-text",
                children:
                  "Link this owner/admin key’s account for agent approvals and alerts. Send a one-time code to AnyRoute’s bot; no API key is needed in Telegram. Telegram can read these messages. The link’s authority ends if the key expires, is disabled or loses its role.",
              }),
              (0, t.jsxs)("p", {
                className: "help-text",
                children: [
                  "Agent approvals and alerts are also in ",
                  (0, t.jsx)("a", {
                    className: "inline-link",
                    href: "/dashboard/#inbox",
                    children: "your inbox",
                  }),
                  ".",
                ],
              }),
              (0, t.jsx)("p", {
                role: "status",
                children: l
                  ? l.linked
                    ? `Linked to Telegram user ${l.telegram_user_id}.`
                    : "Telegram is not linked for this key."
                  : "Reading Telegram status…",
              }),
              h && (0, t.jsx)("p", { role: "alert", children: h }),
              l &&
                (0, t.jsxs)("div", {
                  className: "button-row",
                  children: [
                    !l.linked &&
                      (0, t.jsx)(a.Button, {
                        disabled: m,
                        onClick: () => _(async () => u(await o(b))),
                        children: "Link Telegram",
                      }),
                    (0, t.jsx)(a.Button, {
                      secondary: !0,
                      disabled: m,
                      onClick: () =>
                        _(async () => {
                          await b(i, { method: "DELETE" }),
                            u(null),
                            d(await s(b));
                        }),
                      children: l.linked ? "Unlink Telegram" : "Cancel linking",
                    }),
                  ],
                }),
              c &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("p", {
                      children: [
                        "Send ",
                        (0, t.jsxs)("code", { children: ["/link ", c.code] }),
                        " in a private chat with AnyRoute’s bot. Keep this code to yourself; it grants approval authority. It expires at ",
                        new Date(c.expires_at).toLocaleTimeString(),
                        " and works once.",
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: "help-text",
                      children:
                        "Status refreshes every five seconds. You can also send /unlink to the bot. Linking does not connect chat inference; /key and /forget manage that separately.",
                    }),
                  ],
                }),
            ],
          });
        },
      ],
      54269
    );
  },
  8387,
  (e) => {
    "use strict";
    var t = e.i(71682),
      r = e.i(98248);
    let a = "0xa4dDF89A40A35264E9D7F896a1ef01C59b1e977a";
    e.s([
      "ANYR_CA",
      0,
      a,
      "default",
      0,
      function () {
        let [e, n] = (0, r.useState)(""),
          i = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          if (!e) return;
          let t = setTimeout(() => n(""), 1800);
          return () => clearTimeout(t);
        }, [e]);
        let s = async () => {
          try {
            await navigator.clipboard.writeText(a), n("Copied");
          } catch {
            let e = document.createRange();
            e.selectNodeContents(i.current);
            let t = getSelection();
            t.removeAllRanges(), t.addRange(e), n("Selected");
          }
        };
        return (0, t.jsxs)("div", {
          className: "ca",
          children: [
            (0, t.jsxs)("button", {
              type: "button",
              className: "ca-field" + ("Copied" === e ? " copied" : ""),
              onClick: s,
              title: "Copy contract address",
              children: [
                (0, t.jsx)("span", {
                  className: "ca-label",
                  children: "$ANYR CA",
                }),
                (0, t.jsx)("code", {
                  className: "ca-value",
                  ref: i,
                  children: a,
                }),
                (0, t.jsxs)("code", {
                  className: "ca-short",
                  "aria-hidden": "true",
                  children: [a.slice(0, 6), "…", a.slice(-4)],
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
  69019,
  (e) => {
    "use strict";
    var t = e.i(71682),
      r = e.i(45482),
      a = e.i(86700),
      n = e.i(3904);
    e.s([
      "CapabilityChips",
      0,
      function ({ model: e, dark: i = !1, linked: s = !0 }) {
        let o = (0, r.modelCapabilities)(e);
        return (0, t.jsx)("span", {
          className: n.default.chips,
          "data-dark": i || void 0,
          children: o.length
            ? r.MODEL_CAPABILITIES.filter((e) => o.includes(e.key)).map((r) =>
                "attested" === r.key
                  ? (0, t.jsx)(
                      a.default,
                      {
                        evidence: { source: "model", data: e },
                        dark: i,
                        linked: s,
                      },
                      r.key
                    )
                  : (0, t.jsx)(
                      "span",
                      {
                        className: n.default.chip,
                        title: r.explanation,
                        "aria-label": `${r.label}: ${r.explanation}`,
                        children: r.label,
                      },
                      r.key
                    )
              )
            : (0, t.jsx)("span", {
                className: n.default.chip,
                children: "No tags declared",
              }),
        });
      },
      "CapabilityGuide",
      0,
      function ({ dark: e = !1 }) {
        return (0, t.jsxs)("details", {
          className: n.default.guide,
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
  58702,
  (e) => {
    "use strict";
    var t = e.i(71682),
      r = e.i(98248),
      a = e.i(4581),
      n = e.i(45482),
      i = e.i(31303),
      s = e.i(69019),
      o = e.i(92882),
      l = e.i(42106);
    function d({ raw: e, onClose: r, onChoose: n }) {
      let i = (0, a.toCatalogModel)(e);
      return (0, t.jsxs)(o.Modal, {
        title: i.name,
        onClose: r,
        children: [
          (0, t.jsx)("p", { children: i.description }),
          (0, t.jsx)(s.CapabilityChips, { model: e }),
          (0, t.jsx)(s.CapabilityGuide, {}),
          (0, t.jsxs)("dl", {
            className: "detail-list",
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Model ID" }),
                  (0, t.jsx)("dd", { children: i.id }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Context" }),
                  (0, t.jsxs)("dd", {
                    children: [
                      (i.contextLength || 0).toLocaleString("en-US"),
                      " tokens",
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Input / output" }),
                  (0, t.jsxs)("dd", {
                    children: [
                      "$",
                      i.price.toLocaleString("en-US", {
                        maximumSignificantDigits: 6,
                      }),
                      " / $",
                      i.output.toLocaleString("en-US", {
                        maximumSignificantDigits: 6,
                      }),
                      " per 1M tokens",
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Providers" }),
                  (0, t.jsxs)("dd", {
                    children: [
                      e.provider_names?.join(", ") || i.providers,
                      " · ",
                      i.quantization.join(", ") || "quantization not declared",
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Creator royalty" }),
                  (0, t.jsx)("dd", {
                    children: i.creator
                      ? `${i.royaltyBps / 100}% to ${i.creator.slice(0, 10)}…`
                      : "None",
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "note",
            children:
              "Providers declare modalities, prices and context limits. Hardware tags reflect the router’s current checks. Ordinary chat is readable by the router in memory; encrypted chat requires the separate gateway setup.",
          }),
          n
            ? (0, t.jsx)(o.Button, {
                onClick: () => {
                  r(), n(i.id);
                },
                children: "Choose model",
              })
            : (0, t.jsx)(o.Button, {
                href:
                  "/dashboard/?model=" +
                  encodeURIComponent(i.id) +
                  "#playground",
                children: "Open playground",
              }),
        ],
      });
    }
    e.s([
      "default",
      0,
      function ({ onChoose: e }) {
        let [c, u] = (0, r.useState)(""),
          [h, p] = (0, r.useState)([]),
          [m, f] = (0, r.useState)("name"),
          [g, y] = (0, r.useState)(null),
          [b, _] = (0, r.useState)(null),
          [v, w] = (0, r.useState)(null),
          [k, x] = (0, r.useState)(""),
          [S, A] = (0, r.useState)(0);
        (0, r.useEffect)(() => {
          let e = !0;
          return (
            x(""),
            (0, a.api)("/api/v1/models")
              .then((t) => {
                e && (_(t.data), w(new Date()));
              })
              .catch((t) => e && x(t.message)),
            () => {
              e = !1;
            }
          );
        }, [S]);
        let j = (0, r.useMemo)(
            () => (0, i.filterModels)(b || [], { query: c, tags: h, sort: m }),
            [b, c, h, m]
          ),
          N = (0, r.useMemo)(
            () => (0, i.modelTagCounts)(b || [], { query: c, tags: h }),
            [b, c, h]
          ),
          C = (e) => (e < 0.01 && e > 0 ? e.toFixed(4) : e.toFixed(2));
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: "catalog-tools",
              children: [
                (0, t.jsxs)("label", {
                  className: "search-label",
                  children: [
                    (0, t.jsx)("span", {
                      className: "sr-only",
                      children: "Search models or providers",
                    }),
                    (0, t.jsx)("input", {
                      type: "search",
                      className: "search-field",
                      placeholder: "Search models or providers…",
                      value: c,
                      onChange: (e) => u(e.target.value),
                    }),
                  ],
                }),
                (0, t.jsxs)("label", {
                  className: "select-label",
                  children: [
                    (0, t.jsx)("span", {
                      className: "sr-only",
                      children: "Sort models",
                    }),
                    (0, t.jsx)("select", {
                      "aria-label": "Sort models",
                      value: m,
                      onChange: (e) => f(e.target.value),
                      children: i.CATALOG_SORTS.map((e) =>
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
              className: l.default.filters,
              role: "group",
              "aria-label": "Filter by capability",
              children: n.MODEL_CAPABILITIES.map((e) =>
                (0, t.jsxs)(
                  "button",
                  {
                    type: "button",
                    title: e.explanation,
                    "aria-pressed": h.includes(e.key),
                    onClick: () => {
                      let t;
                      return (
                        (t = e.key),
                        p((e) =>
                          e.includes(t) ? e.filter((e) => e !== t) : [...e, t]
                        )
                      );
                    },
                    disabled: !h.includes(e.key) && !N[e.key],
                    children: [
                      e.label,
                      " ",
                      (0, t.jsx)("span", { children: N[e.key] }),
                    ],
                  },
                  e.key
                )
              ),
            }),
            (0, t.jsx)(s.CapabilityGuide, {}),
            (0, t.jsxs)("div", {
              className: "catalog-meta",
              children: [
                (0, t.jsxs)("p", {
                  className: "catalog-note",
                  children: [
                    "Live catalog",
                    v ? " · updated " + v.toLocaleTimeString("en-GB") : "",
                    " · Prices are per 1M tokens from the cheapest live provider; routing may pick another provider by uptime and quality.",
                  ],
                }),
                b &&
                  !k &&
                  (0, t.jsxs)("span", {
                    className: "catalog-count",
                    "aria-live": "polite",
                    children: [j.length, " of ", b.length, " models"],
                  }),
              ],
            }),
            k &&
              (0, t.jsxs)("div", {
                className: "empty",
                children: [
                  (0, t.jsx)("h3", {
                    children: "The model catalog could not be loaded.",
                  }),
                  (0, t.jsx)("p", { children: k }),
                  (0, t.jsx)(o.Button, {
                    secondary: !0,
                    onClick: () => A((e) => e + 1),
                    children: "Retry",
                  }),
                ],
              }),
            !k &&
              !b &&
              (0, t.jsxs)("div", {
                className: "empty loading-state",
                role: "status",
                children: [
                  (0, t.jsx)("span", {
                    className: "loading-bar",
                    "aria-hidden": "true",
                  }),
                  "Loading the live catalog…",
                ],
              }),
            (0, t.jsx)("div", {
              className: "model-grid",
              children: j.map((r, n) => {
                let i = (0, a.toCatalogModel)(r);
                return (0, t.jsxs)(
                  "article",
                  {
                    className: "route-card model-card",
                    style: { "--i": Math.min(n, 10) },
                    children: [
                      (0, t.jsxs)("div", {
                        className: "eyebrow",
                        children: [
                          i.author,
                          (0, t.jsx)("span", { className: "live-square" }),
                          i.type,
                        ],
                      }),
                      (0, t.jsx)("h3", { children: i.name }),
                      (0, t.jsx)("p", { children: i.description }),
                      (0, t.jsx)(s.CapabilityChips, { model: r }),
                      (0, t.jsxs)("div", {
                        className: "model-meta",
                        children: [
                          (0, t.jsxs)("span", {
                            children: [i.context, " context"],
                          }),
                          (0, t.jsxs)("span", {
                            children: [
                              i.providers,
                              " provider",
                              1 === i.providers ? "" : "s",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "model-meta",
                        children: [
                          (0, t.jsxs)("span", {
                            children: ["$", C(i.price), " / 1M input"],
                          }),
                          (0, t.jsxs)("span", {
                            children: ["$", C(i.output), " / 1M output"],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "button-row",
                        children: [
                          (0, t.jsx)("button", {
                            className: "text-button",
                            onClick: () => y(r),
                            children: "Model details →",
                          }),
                          e
                            ? (0, t.jsx)("button", {
                                className: "text-button",
                                onClick: () => e(i.id),
                                children: "Try model →",
                              })
                            : (0, t.jsx)("a", {
                                className: "text-button",
                                href:
                                  "/dashboard/?model=" +
                                  encodeURIComponent(i.id) +
                                  "#playground",
                                children: "Try model →",
                              }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "card-ramp",
                        "aria-hidden": "true",
                      }),
                    ],
                  },
                  i.id
                );
              }),
            }),
            !j.length &&
              b &&
              !k &&
              (0, t.jsxs)("div", {
                className: "empty",
                children: [
                  (0, t.jsx)("h3", { children: "No matching models" }),
                  (0, t.jsx)("p", {
                    children: b.length
                      ? "Try a different search or clear the filters."
                      : "No providers are serving models yet.",
                  }),
                  (0, t.jsx)(o.Button, {
                    secondary: !0,
                    onClick: () => {
                      u(""), p([]);
                    },
                    children: "Clear filters",
                  }),
                ],
              }),
            g && (0, t.jsx)(d, { raw: g, onClose: () => y(null), onChoose: e }),
          ],
        });
      },
    ]);
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
      let n = e.architecture?.modality;
      return "string" == typeof n && n.includes("->")
        ? n.split("->")[+("input" !== t)].split("+")
        : ["text"];
    }
    function n(e) {
      return Array.isArray(e?.capabilities)
        ? r.filter((t) => e.capabilities.includes(t.key)).map((e) => e.key)
        : (function (e = {}) {
            let t,
              n = a(e, "input"),
              i = a(e, "output"),
              s = e.supported_parameters ?? e.params ?? [],
              o =
                !0 === e.attested_available ||
                (null == e.attested_available &&
                  (e.disclosure?.best === "attested" || !0 === e.attested)),
              l = {
                vision: n.includes("image"),
                imageOut: i.includes("image"),
                audio: n.includes("audio") || i.includes("audio"),
                tools:
                  ((t = "tools"),
                  s instanceof Set
                    ? s.has(t)
                    : Array.isArray(s) && s.includes(t)),
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
    let i = (e, t) => n(e).includes(t);
    function s(e, t = Date.now()) {
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
        n,
        "modelModalities",
        0,
        a,
      ],
      45482
    ),
      e.s(["sealedLabel", 0, s], 64265);
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
      c = (e, t) =>
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
    function u(e = {}, t = Date.now()) {
      let { source: r } = e,
        a = e.data || {},
        n = !1,
        h = !1,
        p = !1,
        m = !1,
        f = !1,
        g = "",
        y = "",
        b = "";
      if ("model" === r)
        (n =
          c(a, t) &&
          c(a.attestation || {}, t) &&
          !1 !== a.attested_available &&
          i(a, "attested")),
          (b =
            "Available endpoint: routing may choose another provider. Ordinary Harness chat is readable by the router.");
      else if ("host" === r)
        (n =
          !0 === a.attested &&
          a.attestation?.status === "attested" &&
          c(a.attestation, t)),
          (g = a.id),
          (b =
            "Router record when loaded; refresh to check again. Build admission is a separate check.");
      else if ("admission" === r)
        (n = !0 === a.attested && c(a, t)),
          (g = e.providerId),
          (b =
            "Router record when loaded; admission and routing health are separate checks.");
      else if ("network" === r) {
        let e = t - Date.parse(a.as_of || "");
        (n =
          Number.isSafeInteger(a.attested_hosts) &&
          a.attested_hosts > 0 &&
          e >= 0 &&
          e < 3e4 &&
          c(a, t)),
          (b =
            "Count of hosts with fresh successful hardware and admission checks in this snapshot; inspect each host record before relying on it.");
      } else if ("sealed" === r)
        b = (n = c(a, t) && !!s(a, t))
          ? `Sealed hosting \xb7 image ${a.agent_image_digest}. Measured code is not audited code.`
          : "Sealed hosting has no current hardware proof in this record.";
      else if ("profile" === r)
        b =
          "This profile does not publish current hardware evidence. Owner-supplied capabilities are separate.";
      else if ("generation" === r)
        (f = !0 === a.live && d(a.signature)),
          (y = a.id),
          (b =
            "This list does not include hardware evidence; inspect the receipt for the path used.");
      else if ("ledger" === r)
        (f = !!l(a.receipt_id)),
          (y = a.receipt_id),
          (b =
            "This ledger records a receipt id; its signature has not been checked in this browser.");
      else if ("receipt" === r) {
        let e = a.payload || {};
        (y = a.id || e.id),
          (g = e.provider),
          (f = d(a.sig)),
          (m = "cache" === e.mode || "cache" === e.provider);
        let r = e.upstream_attestation;
        (h =
          (n =
            !m &&
            "attested" === e.disclosure &&
            !0 !== e.attestation_simulated &&
            c(e, t) &&
            (!r || (!0 === r.attested && c(r, t)))) &&
          !0 === e.end_to_end_encrypted &&
          "phala-confidential-ai" === e.provider &&
          e.e2ee?.version === 2 &&
          e.e2ee?.suite === "x25519-aes-256-gcm-hkdf-sha256" &&
          e.e2ee?.gateway_attested === !0),
          (p =
            "unlinkable" === e.lane &&
            "blind" === e.mode &&
            !e.payer &&
            !e.payment_tx &&
            (d(e.nullifier) ||
              (Array.isArray(e.nullifiers) && e.nullifiers.length > 0))),
          (b = n
            ? "The receipt records the hardware check for this call; it does not establish a current check for a later call."
            : "");
      } else
        "attestation" === r &&
          ((n = "attested" === a.status && c(a, t)),
          (g = a.provider),
          (b = "Router record when loaded; refresh to check again."));
      let _ = m
          ? "cached"
          : h
          ? "encrypted"
          : p
          ? "unlinkable"
          : n
          ? "hardware"
          : "standard",
        v = (e) => ({
          key: e,
          ...o[e],
          hardware: "signed" !== e && n,
          context: "signed" === e ? "" : b,
          href: (function (e, { providerId: t, receiptId: r } = {}) {
            let a = new URLSearchParams();
            return (
              l(t) && a.set("p", t),
              l(r) && a.set("r", r),
              `/verify/${a.size ? "?" + a : ""}#proof-${e}`
            );
          })(e, { providerId: g, receiptId: y }),
        });
      return [...(e.signedOnly ? [] : [v(_)]), ...(f ? [v("signed")] : [])];
    }
    e.s(["proofBadges", 0, u], 68129);
    var h = e.i(22692);
    function p({ name: e }) {
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
          linked: n = !0,
          explain: i = !1,
        }) {
          return (0, t.jsx)("span", {
            className: h.default.group,
            "data-dark": a || void 0,
            children: u(e, r).map((e) =>
              (0, t.jsxs)(
                "span",
                {
                  className: h.default.item,
                  children: [
                    n && !i
                      ? (0, t.jsxs)("details", {
                          className: h.default.pop,
                          children: [
                            (0, t.jsxs)("summary", {
                              className: h.default.badge,
                              "data-tone": e.tone,
                              title: `${e.explanation} ${e.context}`,
                              children: [
                                (0, t.jsx)(p, { name: e.icon }),
                                e.label,
                              ],
                            }),
                            (0, t.jsxs)("span", {
                              className: h.default.popover,
                              role: "note",
                              children: [e.explanation, " ", e.context],
                            }),
                          ],
                        })
                      : (0, t.jsxs)("span", {
                          className: h.default.badge,
                          "data-tone": e.tone,
                          title: `${e.explanation} ${e.context}`,
                          children: [(0, t.jsx)(p, { name: e.icon }), e.label],
                        }),
                    i
                      ? (0, t.jsxs)("span", {
                          className: h.default.explanation,
                          children: [e.explanation, " ", e.context],
                        })
                      : !n &&
                        (0, t.jsxs)("span", {
                          className: "sr-only",
                          children: [e.explanation, " ", e.context],
                        }),
                    n &&
                      (0, t.jsx)("a", {
                        className: h.default.check,
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
  67898,
  (e) => {
    "use strict";
    var t = e.i(71682),
      r = e.i(98248),
      a = e.i(92882),
      n = e.i(55616);
    function i({ current: e, onNavigate: t }) {
      return (0, r.createElement)(
        "nav",
        { "aria-label": "Account sections" },
        n.ACCOUNT_GROUPS.map((a) =>
          (0, r.createElement)(
            "div",
            { key: a.title },
            (0, r.createElement)("span", { className: "eyebrow" }, a.title),
            ...a.ids.map((a) => {
              let i = n.ACCOUNT_SECTIONS.find((e) => e.taskId === a);
              return (0, r.createElement)(
                "a",
                {
                  key: a,
                  href: i.href,
                  "aria-current": e === i.title ? "page" : void 0,
                  onClick: (e) => {
                    !t ||
                      !i.hash ||
                      0 !== e.button ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.shiftKey ||
                      e.altKey ||
                      (e.preventDefault(), t(i.title));
                  },
                },
                i.title
              );
            })
          )
        )
      );
    }
    let s = [
      ["Balance", "What you can spend, and how to add funds."],
      ["Spending", "Today and this week, in USDG."],
      ["Keys", "Your API keys and what each one can do."],
      ["Agents", "Each agent and its budget, and any you have stopped."],
      ["Waiting for you", "Agent payments that need your approval."],
      ["Recent calls", "Your last five calls, each with its signed receipt."],
    ];
    function o({ current: e, children: t }) {
      let a =
        n.ACCOUNT_SECTIONS.find((t) => t.title === e) || n.ACCOUNT_SECTIONS[0];
      return (0, r.createElement)(
        "section",
        {
          className: "control-panel",
          "aria-labelledby": "account-preview-title",
        },
        (0, r.createElement)("span", { className: "eyebrow" }, "Your account"),
        (0, r.createElement)(
          "h2",
          { id: "account-preview-title", tabIndex: -1 },
          a.title
        ),
        (0, r.createElement)("p", null, a.description),
        (0, r.createElement)("p", { className: "help-text" }, a.start),
        "Home" === a.title
          ? (0, r.createElement)(
              "div",
              {
                className: "account-preview-grid",
                "aria-label": "What your Home shows",
              },
              s.map(([e, t]) =>
                (0, r.createElement)(
                  "div",
                  { key: e },
                  (0, r.createElement)("strong", null, e),
                  (0, r.createElement)("span", null, t)
                )
              )
            )
          : null,
        t
      );
    }
    var l = e.i(4581),
      d = e.i(12043),
      c = e.i(67010);
    function u({ onConnect: e, onSecret: n }) {
      let [i, s] = (0, r.useState)(""),
        [o, h] = (0, r.useState)(!1),
        [p, m] = (0, r.useState)(""),
        [f, g] = (0, r.useState)(null);
      async function y(t) {
        h(!0), m("");
        try {
          let r = await t();
          if (!(0, l.validKey)(r))
            throw Error("Enter a valid AnyRoute API key.");
          await (0, l.api)("/api/v1/key", { key: r.trim() }), await e(r.trim());
        } catch (e) {
          m(e.message);
        } finally {
          h(!1);
        }
      }
      return (
        (0, r.useEffect)(() => {
          let e = new AbortController();
          return (
            (0, l.api)("/api/v1/escrow", { signal: e.signal })
              .then((e) => g(!!e.data?.enabled))
              .catch(() => {}),
            () => e.abort()
          );
        }, []),
        (0, t.jsxs)("div", {
          className: c.default.form,
          children: [
            (0, t.jsx)("h3", { children: "Sign in" }),
            (0, t.jsxs)("div", {
              className: "button-row",
              children: [
                (0, t.jsx)(a.Button, {
                  disabled: o,
                  onClick: () =>
                    y(async () => {
                      let e = await (0, d.walletApiKey)("Wallet key");
                      return n(e), e;
                    }),
                  children: "Sign in with wallet",
                }),
                !1 === f &&
                  (0, t.jsx)(a.Button, {
                    secondary: !0,
                    disabled: o,
                    onClick: () =>
                      y(async () => {
                        let e = await (0, l.api)("/api/v1/keys", {
                          method: "POST",
                          body: { name: "Account key" },
                        });
                        return n(e.key), e.key;
                      }),
                    children: "Create a key",
                  }),
              ],
            }),
            (0, t.jsx)("p", {
              className: "help-text",
              children:
                "No email or password: your browser wallet signs in and you get its API key. Then open Payments to add funds.",
            }),
            (0, t.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), y(() => i);
              },
              children: [
                (0, t.jsxs)("div", {
                  className: "field",
                  children: [
                    (0, t.jsx)("label", {
                      htmlFor: "account-key",
                      children: "Or connect an API key",
                    }),
                    (0, t.jsx)("input", {
                      id: "account-key",
                      type: "password",
                      autoComplete: "off",
                      spellCheck: !1,
                      required: !0,
                      value: i,
                      onChange: (e) => s(e.target.value),
                    }),
                  ],
                }),
                (0, t.jsx)(a.Button, {
                  type: "submit",
                  secondary: !0,
                  disabled: o,
                  children: o ? "Connecting…" : "Connect your key",
                }),
              ],
            }),
            p &&
              (0, t.jsx)("p", {
                className: "error",
                role: "alert",
                children: p,
              }),
            (0, t.jsx)("p", {
              className: "help-text",
              children:
                "Your key stays in this browser tab’s session storage until you disconnect or close the tab. Use a management key or an owner/admin key to manage agents.",
            }),
            (0, t.jsxs)("details", {
              open: !0,
              children: [
                (0, t.jsx)("summary", { children: "New here?" }),
                (0, t.jsx)("p", {
                  children:
                    "Sign in with your browser wallet to get its API key, then open Payments to deposit a listed token. Keep the key safe and use it to connect apps.",
                }),
                (0, t.jsx)("p", {
                  className: "help-text",
                  children:
                    "Routers using USDG credits also let you create a key directly, then deposit USDG to that key.",
                }),
                (0, t.jsx)("a", {
                  className: "inline-link",
                  href: "/docs/#payments",
                  children: "Read payment and wallet instructions",
                }),
                " · ",
                (0, t.jsx)("a", {
                  className: "inline-link",
                  href: "/docs/#quickstart",
                  children: "Read the API quickstart",
                }),
              ],
            }),
            (0, t.jsxs)("p", {
              className: "help-text",
              children: [
                "For ordinary calls, the router reads request text in memory to route it. ",
                (0, t.jsx)("a", {
                  href: "/keep/",
                  className: "inline-link",
                  children: "See what we keep",
                }),
                ".",
              ],
            }),
          ],
        })
      );
    }
    e.s(
      [
        "default",
        0,
        function ({
          current: e,
          apiKey: n,
          onConnect: s,
          onDisconnect: l,
          onNavigate: d,
          publicContent: h = !1,
          children: p,
        }) {
          let [m, f] = (0, r.useState)(""),
            g = (0, r.useRef)(null),
            y = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              let e = y.current?.querySelector("nav"),
                t = e?.querySelector("[aria-current]");
              e &&
                t &&
                e.scrollWidth > e.clientWidth &&
                (e.scrollLeft = t.offsetLeft - e.offsetLeft - 8);
            }, [e]),
            (0, r.useEffect)(() => {
              !n &&
                window.location.hash &&
                g.current?.querySelector("h2")?.focus({ preventScroll: !0 });
            }, [e, n]),
            (0, t.jsxs)("div", {
              className: c.default.shell,
              children: [
                (0, t.jsxs)("aside", {
                  className: c.default.sidebar,
                  ref: y,
                  children: [
                    (0, t.jsx)(i, { current: e, onNavigate: d }),
                    (0, t.jsx)("div", {
                      className: c.default.connection,
                      children: n
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("p", {
                                className: "help-text",
                                children: "Key connected · this tab only",
                              }),
                              (0, t.jsx)(a.Button, {
                                secondary: !0,
                                onClick: l,
                                children: "Disconnect",
                              }),
                            ],
                          })
                        : (0, t.jsx)("p", {
                            className: "help-text",
                            children:
                              "Explore your account. Connect a key when you are ready.",
                          }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: c.default.content,
                  ref: g,
                  children: [
                    !n &&
                      (0, t.jsx)(o, {
                        current: e,
                        children: (0, t.jsx)(u, { onConnect: s, onSecret: f }),
                      }),
                    (n || h) && p,
                  ],
                }),
                m &&
                  (0, t.jsxs)(a.Modal, {
                    title: "Save your API key",
                    onClose: () => f(""),
                    children: [
                      (0, t.jsx)("p", {
                        children:
                          "Keep this key safe. Anyone with it can use its account access and balance.",
                      }),
                      (0, t.jsx)("code", {
                        className: c.default.secret,
                        children: m,
                      }),
                      (0, t.jsxs)("div", {
                        className: "button-row",
                        children: [
                          (0, t.jsx)(a.CopyButton, {
                            text: m,
                            label: "Copy key",
                          }),
                          (0, t.jsx)(a.Button, {
                            onClick: () => f(""),
                            children: "Done",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          );
        },
      ],
      67898
    );
  },
  67010,
  (e) => {
    e.v({
      cards: "AccountShell-module__5u-Okq__cards",
      connection: "AccountShell-module__5u-Okq__connection",
      content: "AccountShell-module__5u-Okq__content",
      form: "AccountShell-module__5u-Okq__form",
      home: "AccountShell-module__5u-Okq__home",
      recent: "AccountShell-module__5u-Okq__recent",
      secret: "AccountShell-module__5u-Okq__secret",
      shell: "AccountShell-module__5u-Okq__shell",
      sidebar: "AccountShell-module__5u-Okq__sidebar",
    });
  },
  95159,
  (e) => {
    "use strict";
    function t(e) {
      let t = Number(e);
      if (!Number.isFinite(t)) return "—";
      if (0 === t) return "$0";
      if (Math.abs(t) >= 1)
        return (
          "$" +
          t.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );
      let r =
          Math.abs(t) >= 0.01
            ? 4
            : Math.min(14, -Math.floor(Math.log10(Math.abs(t))) + 3),
        a = t.toFixed(r).replace(/0+$/, "");
      return "$" + ((a.split(".")[1] ?? "").length < 2 ? t.toFixed(2) : a);
    }
    let r = new Set(["credited", "orphaned", "reversed"]),
      a = (e) =>
        e?.stage ||
        {
          pending_finality: "confirming",
          pending: "crediting",
          credited: "credited",
          orphaned: "orphaned",
          reversed: "reversed",
        }[e?.status] ||
        "confirming";
    e.s([
      "ANYR_ATTESTED_LINE",
      0,
      'Credits pay for every model, including the attested lane: add "provider": {"lane": "attested"} to a request and the router sends it only to providers whose hardware attestation it has verified, or refuses it. The signed receipt records the lane that answered.',
      "STEPS",
      0,
      ["Sent", "Final", "Priced", "Credited"],
      "creditEstimate",
      0,
      function ({ amountText: e, decimals: t, rate: r, limit: a }) {
        let n;
        try {
          n = (function (e, t) {
            let r = String(e ?? "").trim();
            if (!/^\d*\.?\d*$/.test(r) || !/\d/.test(r))
              throw Error("Enter an amount as a number, for example 1000.");
            let [a, n = ""] = r.split(".");
            if (n.length > t) throw Error(`Use at most ${t} decimal places.`);
            return (
              BigInt(a || "0") * 10n ** BigInt(t) +
              BigInt((n + "0".repeat(t)).slice(0, t) || "0")
            );
          })(e, t);
        } catch (e) {
          return { ok: !1, error: e.message };
        }
        if (n <= 0n) return { ok: !1, error: "Enter an amount above zero." };
        if (!(r > 0))
          return { ok: !0, raw: n, credit: null, capped: !1, maxTokens: null };
        let i = (Number(n) / 10 ** t) * r,
          s = null != a && i > a * (1 + 1e-9);
        return {
          ok: !0,
          raw: n,
          credit: s ? a : i,
          value: i,
          capped: s,
          maxTokens: null != a ? Math.floor(a / r) : null,
        };
      },
      "depositView",
      0,
      function (e, r) {
        let n = a(e),
          i = e.symbol || "token";
        if ("confirming" === n) {
          let t,
            a = "";
          try {
            let t = BigInt(e.block) - BigInt(r?.credit_block);
            a =
              t > 0n
                ? ` Your transfer is in block ${
                    e.block
                  }; deposits are credited from finalized blocks (the finalized block is ${t.toLocaleString(
                    "en-US"
                  )} behind).`
                : "";
          } catch {
            a = "";
          }
          let s =
            Number(r?.expected_credit_delay_s) > 0
              ? ` Finality usually takes ${
                  ((t = Math.max(
                    1,
                    Math.round(Number(r.expected_credit_delay_s) / 60)
                  )),
                  `about ${t} minute${1 === t ? "" : "s"}`)
                }.`
              : "";
          return {
            stage: n,
            tone: "wait",
            step: 1,
            label: "Waiting for finality",
            detail: `The chain has seen your ${i} transfer but has not finalized its block yet.${a}${s}`,
          };
        }
        if ("awaiting_price" === n)
          return {
            stage: n,
            tone: "warn",
            step: 2,
            label: "Waiting for a price",
            detail:
              e.note ||
              `Final, but ${i} has no trustworthy price right now. It is credited automatically once it does.`,
          };
        if ("crediting" === n)
          return {
            stage: n,
            tone: "wait",
            step: 3,
            label: "Crediting",
            detail:
              "Final and priced. It is credited on the router's next pass, within a minute or so.",
          };
        if ("credited" === n) {
          let r = e.price_usd ? ` at ${t(e.price_usd)} per ${i}` : "";
          return {
            stage: n,
            tone: "ok",
            step: 4,
            label: "Credited",
            detail: `${
              null != e.credited_usd ? t(e.credited_usd) : "Your credit"
            } added to your balance${r}.${e.note ? " " + e.note : ""}`,
          };
        }
        return "reversed" === n
          ? {
              stage: n,
              tone: "bad",
              step: 3,
              label: "Reversed",
              detail:
                e.note ||
                "The chain no longer contains this transfer, so its credit was reversed.",
            }
          : {
              stage: n,
              tone: "bad",
              step: 1,
              label: "Not credited",
              detail:
                e.note ||
                "The chain dropped this transfer before it was final; nothing was credited.",
            };
      },
      "depositsOf",
      0,
      (e, t, r = 5) =>
        Array.isArray(e) ? e.filter((e) => e.symbol === t).slice(0, r) : [],
      "erc20TransferData",
      0,
      function (e, t) {
        if (!("string" == typeof e && /^0x[0-9a-fA-F]{40}$/.test(e)))
          throw Error("That is not an address.");
        let r = BigInt(t);
        if (r <= 0n) throw Error("Enter an amount above zero.");
        if (r >= 1n << 256n) throw Error("That amount is too large.");
        return (
          "0xa9059cbb" +
          e.slice(2).toLowerCase().padStart(64, "0") +
          r.toString(16).padStart(64, "0")
        );
      },
      "formatUnits",
      0,
      function (e, t, r = 4) {
        let a = BigInt(e ?? 0),
          n = 10n ** BigInt(t),
          i = (a / n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          s = (a % n)
            .toString()
            .padStart(t, "0")
            .slice(0, r)
            .replace(/0+$/, "");
        return s ? `${i}.${s}` : i;
      },
      "formatUsd",
      0,
      t,
      "newlyCredited",
      0,
      function (e, t) {
        let r = new Map((e || []).map((e) => [e.id, a(e)]));
        return (t || []).filter(
          (e) => "credited" === a(e) && "credited" !== r.get(e.id)
        );
      },
      "pollInterval",
      0,
      (e) => (Array.isArray(e) && e.some((e) => !r.has(a(e))) ? 5e3 : 2e4),
      "rateView",
      0,
      function (e) {
        let r;
        if (null == e)
          return {
            state: "loading",
            eyebrow: "Credit rate",
            headline: "Reading the pool price…",
            detail: "",
            rate: null,
          };
        if (!e.enabled)
          return {
            state: "off",
            eyebrow: "Credit rate",
            headline: "The router does not take $ANYR.",
            detail: "",
            rate: null,
          };
        if (!e.available || !(e.credit_usd_per_token > 0)) {
          let t = e.reason || {};
          return {
            state: "unavailable",
            eyebrow: "Credit rate · unavailable",
            headline: `No ${e.symbol} price right now`,
            detail:
              t.message || `The ${e.symbol} price source could not be read.`,
            code: t.code || "source_unreachable",
            rate: null,
            note: "A transfer sent now is recorded and credited automatically at the price in effect when it clears, up to the per-deposit limit.",
          };
        }
        let a = e.haircut_bps
          ? ` after a ${e.haircut_bps / 100}% haircut`
          : " with no haircut";
        return {
          state: "live",
          eyebrow: "Credit rate · live",
          headline: `1 ${e.symbol} = ${t(e.credit_usd_per_token)} in credits`,
          detail: `The lower of the pool's spot price and its ${
            e?.window_minutes ?? 30
          }-minute average (a time-weighted average of the pool's swaps)${a}. Deposits are credited up to ${t(
            e.max_usd_per_deposit
          )} each.`,
          rate: e.credit_usd_per_token,
          perDollar:
            (r = e.credit_usd_per_token) > 0
              ? Math.round(1 / r).toLocaleString("en-US")
              : null,
          spot: e.spot_usd,
          average: e.average_usd,
          swaps: e.swaps,
          windowSeconds: e.window_seconds,
          updatedAt: e.updated_at,
        };
      },
      "stageOf",
      0,
      a,
    ]);
  },
  88491,
  (e) => {
    "use strict";
    let t = { min: 1, max: 8, default: 4 },
      r = ["system", "developer", "user", "assistant", "tool"],
      a = new Set(["custom_id", "prompt", "model"]),
      n = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
      i = (e, t = 160) => (e.length > t ? e.slice(0, t - 1) + "…" : e),
      s = "attested",
      o =
        'This row asks for lane "unlinkable", which Batch Studio cannot run. Remove it, or turn off the attested lane option.',
      l = (e) =>
        n(e) &&
        "unlinkable" ===
          String(e.lane ?? "")
            .trim()
            .toLowerCase(),
      d = "@route/",
      c = /(:(nitro|floor|free|private))+$/,
      u = (e) => String(e).replace(c, ""),
      h = {
        no_attested_endpoint: "refused",
        lane_requires_anonymous_auth: "refused",
        lane_unavailable: "refused",
        disclosure_unavailable: "refused",
        disclosure_provider_unavailable: "refused",
        upstream_not_attested: "withheld",
        lane_not_confirmed: "withheld",
      },
      p = new Set(["upstream_not_attested", "lane_not_confirmed"]),
      m = (e) => (e?.status === "failed" && h[e.error?.type]) || null,
      f = (e, t, r, a) =>
        Object.assign(Error(t), {
          status: e,
          type: r,
          ...(a ? { metadata: a } : {}),
        });
    function g(e) {
      let t = e.map((e) => e.context).filter(Boolean);
      return {
        prompt: Math.max(...e.map((e) => e.prompt)),
        completion: Math.max(...e.map((e) => e.completion)),
        context: t.length ? Math.min(...t) : null,
      };
    }
    function y(e, t) {
      let r = {
          rows: e.length,
          input: 0,
          output: 0,
          maxCost: 0,
          maxRowCost: 0,
          priced: 0,
          unpriced: 0,
          unpricedModels: [],
        },
        a = new Set();
      for (let n of e) {
        let e = (function (e, t) {
          let r = Math.max(
              1,
              Math.ceil(
                (function (e) {
                  let t = 0;
                  for (let r of e?.messages || [])
                    if ("string" == typeof r?.content) t += r.content.length;
                    else if (Array.isArray(r?.content))
                      for (let e of r.content)
                        t +=
                          "string" == typeof e
                            ? e.length
                            : "string" == typeof e?.text
                            ? e.text.length
                            : 0;
                  return t;
                })(e) / 4
              )
            ),
            a = e.max_tokens ?? e.max_completion_tokens,
            n = Number.isInteger(a)
              ? a
              : Math.min(4096, Math.floor((t?.context || 16384) / 4));
          return {
            input: r,
            output: n,
            maxCost: t ? r * t.prompt + n * t.completion : null,
          };
        })(
          n.body,
          (function (e, t) {
            let r = [e.model, ...(Array.isArray(e.models) ? e.models : [])]
              .filter(Boolean)
              .map((e) => t(e));
            return r.length && r.every(Boolean) ? g(r) : null;
          })(n.body, t)
        );
        (r.input += e.input),
          (r.output += e.output),
          null == e.maxCost
            ? (r.unpriced++, a.add(n.body.model))
            : (r.priced++,
              (r.maxCost += e.maxCost),
              (r.maxRowCost = Math.max(r.maxRowCost, e.maxCost)));
      }
      return (r.unpricedModels = [...a]), r;
    }
    function b(e, t = Date.now()) {
      let r = (function (e, t = Date.now()) {
        if (null == e) return null;
        let r = String(e).trim();
        if (!r) return null;
        if (/^\d+(\.\d+)?$/.test(r)) return Math.round(1e3 * Number(r));
        let a = Date.parse(r);
        return Number.isFinite(a) ? Math.max(0, a - t) : null;
      })(
        e?.retryAfter ??
          ("function" == typeof e?.headers?.get
            ? e.headers.get("retry-after")
            : e?.headers?.["retry-after"]),
        t
      );
      if (null != r) return r;
      let a = Number(e?.metadata?.retry_after_ms);
      return e?.metadata?.retry_after_ms != null && Number.isFinite(a) && a >= 0
        ? a
        : null;
    }
    function _(
      e,
      { base: t = 1e3, cap: r = 3e4, random: a = Math.random } = {}
    ) {
      let n = Math.min(r, t * 2 ** Math.max(0, e - 1));
      return Math.round(n / 2 + a() * (n / 2));
    }
    let v = () => ({
        status: "pending",
        attempts: 0,
        retries: 0,
        rateLimits: 0,
        nextAt: 0,
        startedAt: null,
        finishedAt: null,
        response: null,
        error: null,
      }),
      w = {
        now: () => Date.now(),
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: (e) => clearTimeout(e),
      },
      k = (e) => {
        let r = Number(e);
        return Number.isFinite(r)
          ? Math.min(t.max, Math.max(t.min, Math.round(r)))
          : t.default;
      },
      x = (e) =>
        "done" === e.status && n(e.response?.body?.usage)
          ? e.response.body.usage
          : null,
      S = (e) =>
        null != e && "" !== e && Number.isFinite(Number(e)) ? Number(e) : null;
    function A(e, t, { lane: r = !1 } = {}) {
      let a = "done" === t.status,
        n = a ? t.response?.body ?? null : null,
        i = x(t),
        s = null;
      a
        ? (s = { status_code: t.response.status_code, body: n })
        : "failed" === t.status &&
          t.error?.status &&
          (s = {
            status_code: t.error.status,
            body: {
              error: {
                code: t.error.status,
                message: t.error.message,
                type: t.error.type,
                ...(t.error.metadata ? { metadata: t.error.metadata } : {}),
              },
            },
          });
      let o = null;
      "failed" === t.status
        ? (o = {
            code: t.error?.type || "error",
            message: t.error?.message || "The request failed.",
          })
        : "cancelled" === t.status
        ? (o = {
            code: "cancelled",
            message: t.error?.message || "Cancelled before it ran.",
          })
        : a || (o = { code: "not_run", message: "This row has not run yet." });
      let l = {
        custom_id: e.custom_id,
        response: s,
        error: o,
        usage: i,
        cost: S(i?.cost),
        receipt_id: a ? n?.receipt?.id ?? n?.id ?? null : null,
      };
      return (
        r &&
          Object.assign(l, {
            receipt_id: t.served?.receipt_id ?? l.receipt_id,
            lane: t.served?.lane ?? null,
            fail_closed: m(t),
          }),
        l
      );
    }
    function j(e) {
      if (null == e) return "";
      let t = String(e);
      return (
        "string" == typeof e && /^[=+\-@\t\r]/.test(t) && (t = "'" + t),
        /[",\r\n]/.test(t) || t !== t.trim()
          ? '"' + t.replace(/"/g, '""') + '"'
          : t
      );
    }
    function N(e) {
      let t = e?.choices?.[0]?.message;
      return t
        ? "string" == typeof t.content
          ? t.content
          : Array.isArray(t.content)
          ? t.content
              .map((e) => ("string" == typeof e ? e : e?.text || ""))
              .join("")
          : t.tool_calls
          ? JSON.stringify(t.tool_calls)
          : ""
        : "string" == typeof e?.choices?.[0]?.text
        ? e.choices[0].text
        : "";
    }
    let C = [
        "custom_id",
        "status",
        "status_code",
        "model",
        "content",
        "finish_reason",
        "prompt_tokens",
        "completion_tokens",
        "total_tokens",
        "cost",
        "receipt_id",
        "error",
      ],
      T = ["lane", "fail_closed"],
      $ = [
        "validating",
        "in_progress",
        "completed",
        "failed",
        "expired",
        "cancelling",
        "cancelled",
      ],
      E = ["completed", "failed", "expired", "cancelled"],
      O = "anyroute/council",
      M = (e, t) =>
        "string" == typeof e?.custom_id && e.custom_id
          ? e.custom_id
          : "row-" + (t + 1),
      I = (e) => E.includes(e?.status);
    function R(e, t) {
      if (!t) return {};
      let r = n(e.body?.receipt) ? e.body.receipt : {},
        a = r.payload?.lane ?? r.lane ?? null;
      return {
        served: {
          lane: "string" == typeof a && a ? a.toLowerCase() : null,
          receipt_id: e.request_id ?? r.id ?? null,
          policy_hash: null,
          disclosure: null,
        },
      };
    }
    function q(e) {
      let t = [],
        r = 0;
      for (let a of String(e ?? "").split(/\r?\n/)) {
        let e;
        if (a.trim()) {
          try {
            e = JSON.parse(a);
          } catch {
            e = null;
          }
          n(e) && "string" == typeof e.custom_id ? t.push(e) : r++;
        }
      }
      return { lines: t, invalid: r };
    }
    e.s([
      "ATTESTED_LANE",
      0,
      s,
      "BatchRunner",
      0,
      class {
        constructor({
          rows: e,
          states: r,
          send: a,
          concurrency: n = t.default,
          clock: i = w,
          random: s = Math.random,
          maxRetries: o = 2,
          maxRateLimitWaits: l = 8,
          onChange: d = () => {},
        }) {
          (this.rows = e),
            (this.states = r || e.map(v)),
            (this.send = a),
            (this.clock = i),
            (this.random = s),
            (this.maxRetries = o),
            (this.maxRateLimitWaits = l),
            (this.onChange = d),
            (this.concurrency = k(n)),
            (this.status = "idle"),
            (this.reason = null),
            (this.inflight = new Map()),
            (this.holdUntil = 0),
            (this.solo = !1),
            (this.timer = null),
            (this.wakeAt = 0),
            (this.sessionStart = null),
            (this.finishes = []),
            (this.waiters = []),
            this.queue();
        }
        queue() {
          (this.pending = []),
            (this.waiting = new Set()),
            this.states.forEach((e, t) => {
              "pending" === e.status || "running" === e.status
                ? ((e.status = "pending"), this.pending.push(t))
                : "waiting" === e.status && this.waiting.add(t);
            });
        }
        start() {
          return this.resume();
        }
        resume() {
          return (
            ("idle" !== this.status && "paused" !== this.status) ||
              ((this.status = "running"),
              (this.reason = null),
              (this.solo = !1),
              (this.sessionStart = this.clock.now()),
              (this.finishes = []),
              this.onChange(null),
              this.pump()),
            this
          );
        }
        pause(e = { kind: "user" }) {
          return (
            ("running" !== this.status && "idle" !== this.status) ||
              ((this.status = "paused"),
              (this.reason = e),
              this.stopTimer(),
              this.onChange(null),
              this.checkIdle()),
            this
          );
        }
        cancel() {
          if ("completed" === this.status || "cancelled" === this.status)
            return this;
          (this.status = "cancelled"),
            (this.reason = { kind: "user" }),
            this.stopTimer();
          let e = this.clock.now(),
            t = {
              status: 0,
              type: "cancelled",
              message: "Cancelled before it ran.",
            };
          for (let r of [...this.pending, ...this.waiting])
            Object.assign(this.states[r], {
              status: "cancelled",
              finishedAt: e,
              nextAt: 0,
              error: t,
            });
          for (let { ctl: e } of ((this.pending = []),
          this.waiting.clear(),
          this.inflight.values()))
            e.abort();
          return this.onChange(null), this.checkIdle(), this;
        }
        retry(e = ["failed", "cancelled"]) {
          if (this.inflight.size) return 0;
          let t = 0;
          return (this.states.forEach((r, a) => {
            e.includes(r.status) && ((this.states[a] = v()), t++);
          }),
          t)
            ? (this.queue(), (this.status = "paused"), this.resume(), t)
            : 0;
        }
        setConcurrency(e) {
          (this.concurrency = k(e)), this.pump();
        }
        settled() {
          return new Promise((e) => {
            this.waiters.push(e), this.checkIdle();
          });
        }
        rowsPerMinute(e = this.clock.now()) {
          return (function (e, t, r, a = 6e4) {
            if (null == r) return null;
            let n = Math.max(r, t - a),
              i = t - n;
            return i < 1e3
              ? null
              : (e.filter((e) => e >= n && e <= t).length / i) * 6e4;
          })(this.finishes, e, this.sessionStart);
        }
        pump() {
          if ("running" !== this.status) return this.checkIdle();
          let e = this.clock.now(),
            t = this.solo ? 1 : this.concurrency;
          for (; this.inflight.size < t; ) {
            if (e < this.holdUntil) {
              this.wake(this.holdUntil);
              break;
            }
            let t = this.next(e);
            if (null == t) {
              let e = 1 / 0;
              for (let t of this.waiting)
                e = Math.min(e, this.states[t].nextAt);
              e < 1 / 0 && this.wake(e);
              break;
            }
            this.launch(t);
          }
          this.checkIdle();
        }
        next(e) {
          let t = null;
          for (let r of this.waiting)
            this.states[r].nextAt <= e &&
              (null == t || this.states[r].nextAt < this.states[t].nextAt) &&
              (t = r);
          return null != t
            ? (this.waiting.delete(t), t)
            : this.pending.length
            ? this.pending.shift()
            : null;
        }
        wake(e) {
          (this.timer && this.wakeAt <= e) ||
            (this.stopTimer(),
            (this.wakeAt = e),
            (this.timer = this.clock.setTimeout(() => {
              (this.timer = null), this.pump();
            }, Math.max(0, e - this.clock.now()))));
        }
        stopTimer() {
          this.timer && this.clock.clearTimeout(this.timer),
            (this.timer = null);
        }
        launch(e) {
          let t,
            r = this.states[e],
            a = new AbortController();
          for (let e of this.inflight.values()) e.alone = !1;
          this.inflight.set(e, { ctl: a, alone: 0 === this.inflight.size }),
            Object.assign(r, {
              status: "running",
              attempts: r.attempts + 1,
              nextAt: 0,
              startedAt: this.clock.now(),
            }),
            this.onChange(e);
          let n = null;
          try {
            t = Promise.resolve(
              this.send(this.rows[e].body, {
                signal: a.signal,
                row: this.rows[e],
                served: (e) => (n = e),
              })
            );
          } catch (e) {
            t = Promise.reject(e);
          }
          t.then(
            (t) => this.settle(e, (r) => this.succeed(e, t, r, n)),
            (t) => this.settle(e, (r) => this.failed(e, t, r, n))
          );
        }
        settle(e, t) {
          let { alone: r } = this.inflight.get(e);
          this.inflight.delete(e), t(r), this.onChange(e), this.pump();
        }
        finish(e, t) {
          let r = this.clock.now();
          for (
            Object.assign(this.states[e], { ...t, finishedAt: r, nextAt: 0 }),
              "cancelled" !== t.status && this.finishes.push(r);
            this.finishes.length && this.finishes[0] < r - 6e4;

          )
            this.finishes.shift();
        }
        succeed(e, t, r, a) {
          r && (this.solo = !1),
            this.finish(e, {
              status: "done",
              response: { status_code: 200, body: t },
              error: null,
              ...(a ? { served: a } : {}),
            });
        }
        requeue(e) {
          let t = this.states[e];
          Object.assign(t, {
            status: "pending",
            attempts: Math.max(0, t.attempts - 1),
          }),
            this.pending.unshift(e);
        }
        toWaiting(e, t) {
          Object.assign(this.states[e], { status: "waiting", nextAt: t }),
            this.waiting.add(e);
        }
        failed(e, t, r, a) {
          let s = this.states[e],
            o = this.clock.now();
          a && (s.served = a);
          let l =
              "cancelled" === this.status
                ? "aborted"
                : (function (e) {
                    if (e?.name === "AbortError") return "aborted";
                    if (p.has(e?.type)) return "fatal";
                    let t = Number(e?.status);
                    return 429 === t
                      ? "rate_limit"
                      : 402 === t
                      ? "funds"
                      : 401 === t
                      ? "auth"
                      : !t || t >= 500 || 408 === t
                      ? "transient"
                      : "fatal";
                  })(t),
            d = {
              status: Number(t?.status) || 0,
              type: String(
                t?.type || (t?.name === "AbortError" ? "aborted" : "error")
              ),
              message: i(String(t?.message || t || "The request failed."), 2e3),
              ...(n(t?.metadata) ? { metadata: t.metadata } : {}),
            };
          if ("aborted" === l)
            return this.finish(e, {
              status: "cancelled",
              error: {
                status: 0,
                type: "cancelled",
                message:
                  "Cancelled before a response arrived. The router may still bill work a provider already did.",
              },
            });
          if (((s.error = d), "rate_limit" === l)) {
            if ((s.rateLimits++, s.rateLimits > this.maxRateLimitWaits))
              return this.finish(e, { status: "failed" });
            let r = Math.min(
              6e5,
              b(t, o) ??
                _(s.rateLimits, { base: 2e3, cap: 6e4, random: this.random })
            );
            return (
              (this.holdUntil = Math.max(this.holdUntil, o + r)),
              this.toWaiting(e, o + r)
            );
          }
          if ("funds" === l) {
            this.requeue(e),
              r
                ? this.pause({
                    kind: "funds",
                    type: d.type,
                    message: d.message,
                    metadata: d.metadata,
                  })
                : (this.solo = !0);
            return;
          }
          return "auth" === l
            ? (this.requeue(e),
              this.pause({ kind: "auth", type: d.type, message: d.message }))
            : "transient" === l
            ? (s.retries++, s.retries > this.maxRetries)
              ? this.finish(e, { status: "failed" })
              : this.toWaiting(e, o + _(s.retries, { random: this.random }))
            : void this.finish(e, { status: "failed" });
        }
        checkIdle() {
          if (
            this.inflight.size ||
            ("running" !== this.status ||
              this.pending.length ||
              this.waiting.size ||
              ((this.status = "completed"),
              this.stopTimer(),
              this.onChange(null)),
            "running" === this.status || "idle" === this.status)
          )
            return;
          let e = this.waiters;
          (this.waiters = []), e.forEach((e) => e(this.status));
        }
      },
      "CONCURRENCY",
      0,
      t,
      "MAX_INPUT_CHARS",
      0,
      0x2000000,
      "MAX_RETRIES",
      0,
      2,
      "MAX_ROWS",
      0,
      5e3,
      "SERVER_DISCOUNT_BPS",
      0,
      5e3,
      "SERVER_POLL_MS",
      0,
      4e3,
      "buildDefaults",
      0,
      function ({
        model: e = "",
        maxTokens: t = "",
        temperature: r = "",
        extra: a = "",
        lane: i = null,
      } = {}) {
        let d = {},
          c = null,
          u = String(a).trim();
        if (u) {
          let e;
          try {
            e = JSON.parse(u);
          } catch {
            e = void 0;
          }
          if (n(e)) {
            let t = ["model", "messages", "stream", "prompt"].find(
              (t) => t in e
            );
            t
              ? (c = `Set "${t}" per row or with the fields above, not in extra parameters.`)
              : i && l(e.provider)
              ? (c = o)
              : Object.assign(d, e);
          } else
            c =
              'Extra parameters must be a JSON object, for example {"top_p": 0.9}.';
        }
        let h = String(t).trim();
        if (h) {
          let e = Number(h);
          !Number.isInteger(e) || e < 1 || e > 1e6
            ? (c ||= "Max tokens must be a whole number of at least 1.")
            : (d.max_tokens = e);
        }
        let p = String(r).trim();
        if (p) {
          let e = Number(p);
          !Number.isFinite(e) || e < 0 || e > 2
            ? (c ||= "Temperature must be a number from 0 to 2.")
            : (d.temperature = e);
        }
        return {
          defaults: {
            model: String(e || "").trim(),
            params: d,
            ...(i === s ? { lane: i } : {}),
          },
          error: c,
        };
      },
      "checkFunds",
      0,
      function (e, { available: t, budgetRemaining: r } = {}) {
        let a = [];
        if (
          (null != t &&
            Number.isFinite(Number(t)) &&
            a.push({ source: "balance", amount: Number(t) }),
          null != r &&
            Number.isFinite(Number(r)) &&
            a.push({ source: "budget", amount: Number(r) }),
          !a.length)
        )
          return {
            known: !1,
            enough: null,
            limit: null,
            source: null,
            shortfall: 0,
          };
        let n = a.reduce((e, t) => (t.amount < e.amount ? t : e)),
          i = e <= n.amount + 1e-12;
        return {
          known: !0,
          enough: i,
          limit: n.amount,
          source: n.source,
          shortfall: i ? 0 : e - n.amount,
        };
      },
      "checkServerBatch",
      0,
      function (e, { maxLines: t = 1e3, maxBytes: r = 8388608 } = {}) {
        let a,
          s = [],
          o = null;
        for (let t of e || [])
          t.custom_id.length > 64
            ? (o ||= `custom_id "${i(
                t.custom_id,
                40
              )}" is longer than 64 characters, the most a server batch accepts.`)
            : String(t.body?.model || "").toLowerCase() === O
            ? (o ||= `Council mode (${O}) cannot run in a server batch. Choose another model, or run the batch in this browser.`)
            : n(t.body) &&
              "verify" in t.body &&
              (o ||=
                '"verify" cannot be used in a server batch. Remove it, or run the batch in this browser.');
        let l = e?.length || 0;
        l > t &&
          s.push(
            `${l.toLocaleString(
              "en-US"
            )} rows is more than the ${t.toLocaleString(
              "en-US"
            )} a server batch holds by default. If the router refuses it, split the input.`
          );
        let d =
          ((a = new TextEncoder()),
          (e || []).reduce(
            (e, t) => e + a.encode(JSON.stringify(t)).length + 1,
            0
          ));
        return (
          d > r &&
            s.push(
              `The input is ${(d / 1048576).toFixed(1)} MB, more than the ${
                r / 1048576
              } MB a server batch holds by default. If the router refuses it, split the input.`
            ),
          { error: o, warnings: s }
        );
      },
      "clampConcurrency",
      0,
      k,
      "countFailedClosed",
      0,
      (e) => e.reduce((e, t) => e + +!!m(t), 0),
      "estimateBatch",
      0,
      y,
      "estimateServerBatch",
      0,
      function (e, t, r = 5e3) {
        let a = y(e, t),
          n = 1 - r / 1e4;
        return {
          ...a,
          maxCost: a.maxCost * n,
          maxRowCost: a.maxRowCost * n,
          listMaxCost: a.maxCost,
          discountBps: r,
        };
      },
      "failClosed",
      0,
      m,
      "makeSender",
      0,
      function (e, { lane: t = null } = {}) {
        return async (r, { signal: a, served: n } = {}) => {
          let i = null;
          try {
            let n = await e(r, {
              signal: a,
              ...(t
                ? {
                    onResponse: (e) => {
                      var t;
                      let r;
                      return (
                        (t = e?.headers),
                        (i = {
                          lane: (r = (e) => {
                            try {
                              let r = t?.get?.(e);
                              return null == r || "" === String(r).trim()
                                ? null
                                : String(r).trim();
                            } catch {
                              return null;
                            }
                          })("x-anyroute-lane"),
                          receipt_id:
                            r("x-receipt-id") ??
                            r("inference-id") ??
                            r("x-generation-id"),
                          policy_hash: r("x-anyroute-policy-hash"),
                          disclosure: r("x-anyroute-disclosure"),
                        })
                      );
                    },
                  }
                : {}),
            });
            if (!n || "object" != typeof n)
              throw f(
                502,
                "The router returned an empty response.",
                "empty_response"
              );
            let s = (function (e, t) {
              if (!e) return null;
              let r = t?.lane ? t.lane.toLowerCase() : null;
              if (r === e) return null;
              let a = r
                ? `The router answered on the "${r}" lane, not "${e}".`
                : `The router's answer did not state its lane (no X-Anyroute-Lane header), so it could not be confirmed as "${e}".`;
              return `${a} The answer was discarded. The call may still have been billed; see its receipt.`;
            })(t, i);
            if (s)
              throw f(502, s, "lane_not_confirmed", {
                lane: i?.lane ?? null,
                receipt_id: i?.receipt_id ?? null,
              });
            return n;
          } finally {
            t && i && n?.(i);
          }
        };
      },
      "modelsOnLane",
      0,
      (e, t) => (e || []).filter((e) => t.has(e.id)),
      "newState",
      0,
      v,
      "normalizeRoutes",
      0,
      function (e) {
        return (
          Array.isArray(e)
            ? e
            : Array.isArray(e?.data)
            ? e.data
            : Array.isArray(e?.data?.routes)
            ? e.data.routes
            : Array.isArray(e?.routes)
            ? e.routes
            : []
        )
          .filter((e) => n(e) && "string" == typeof e.slug && e.slug.trim())
          .map((e) => {
            let t = n(e.config) ? e.config : {},
              r = [
                ...new Set(
                  [
                    t.model,
                    ...(Array.isArray(t.models) ? t.models : []),
                    ...(Array.isArray(t.fallbacks) ? t.fallbacks : []),
                    e.model,
                    ...(Array.isArray(e.models) ? e.models : []),
                  ]
                    .map((e) => (n(e) ? e.id || e.model : e))
                    .filter((e) => "string" == typeof e && e)
                ),
              ];
            return {
              slug: e.slug.trim(),
              name:
                "string" == typeof e.name && e.name.trim()
                  ? e.name.trim()
                  : e.slug.trim(),
              models: r,
            };
          });
      },
      "parseBatch",
      0,
      function (
        e,
        {
          format: t = "auto",
          fileName: d = "",
          defaults: c = {},
          maxRows: u = 5e3,
        } = {}
      ) {
        let h = String(e ?? ""),
          p =
            "auto" === t
              ? (function (e, t = "") {
                  let r = String(t).toLowerCase();
                  if (/\.(jsonl|ndjson|json)$/.test(r)) return "jsonl";
                  if (/\.csv$/.test(r)) return "csv";
                  let a = String(e)
                    .replace(/^\ufeff/, "")
                    .trimStart()[0];
                  return "{" === a || "[" === a ? "jsonl" : "csv";
                })(h, d)
              : t,
          m = {
            format: p,
            rows: [],
            errors: [],
            total: 0,
            invalid: 0,
            ignoredColumns: [],
            tooMany: !1,
          };
        if (!h.trim()) return m;
        if (h.length > 0x2000000)
          return (
            (m.tooMany = !0),
            m.errors.push({
              line: null,
              custom_id: null,
              message:
                "The input is larger than 32 MB. Split it into smaller files.",
            }),
            m
          );
        let f =
          "csv" === p
            ? (function (e, t) {
                let { records: r, error: a } = (function (e) {
                  let t = String(e).replace(/^\ufeff/, ""),
                    r = [],
                    a = "",
                    n = [],
                    i = !1,
                    s = !0,
                    o = 1,
                    l = 1,
                    d = () => {
                      n.push(a), (a = ""), (s = !0);
                    },
                    c = () => {
                      d(),
                        (1 !== n.length || "" !== n[0].trim()) &&
                          r.push({ line: l, fields: n }),
                        (n = []);
                    };
                  for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    if (i) {
                      '"' === r
                        ? '"' === t[e + 1]
                          ? ((a += '"'), e++)
                          : (i = !1)
                        : ("\n" === r && o++, (a += r));
                      continue;
                    }
                    '"' === r && s
                      ? ((i = !0), (s = !1))
                      : "," === r
                      ? d()
                      : "\n" === r || "\r" === r
                      ? ("\r" === r && "\n" === t[e + 1] && e++, c(), (l = ++o))
                      : ((s = !1), (a += r));
                  }
                  return i
                    ? {
                        records: r,
                        error: {
                          line: l,
                          message:
                            "A quoted field is never closed. Check for a missing closing quote.",
                        },
                      }
                    : (("" !== a || n.length) && c(),
                      { records: r, error: null });
                })(e);
                if (
                  (a &&
                    t.errors.push({
                      line: a.line,
                      custom_id: null,
                      message: a.message,
                    }),
                  !r.length)
                )
                  return [];
                let n = r[0].fields.map((e) => e.trim().toLowerCase()),
                  [i, s, o] = [
                    n.indexOf("prompt"),
                    n.indexOf("custom_id"),
                    n.indexOf("model"),
                  ];
                if (i < 0)
                  return (
                    t.errors.push({
                      line: r[0].line,
                      custom_id: null,
                      message:
                        'The first CSV row must be a header with a "prompt" column (optional: custom_id, model).',
                    }),
                    []
                  );
                t.ignoredColumns = n.filter(
                  (e, t) => e && ![i, s, o].includes(t)
                );
                let l = [];
                for (let { line: e, fields: t } of r.slice(1)) {
                  let r = t.slice(n.length).filter((e) => e.trim()),
                    a = (e) => (e >= 0 ? t[e] ?? "" : ""),
                    d = a(s).trim() || void 0;
                  r.length
                    ? l.push({
                        line: e,
                        id: d,
                        error: `Has ${t.length} values but the header has ${n.length} columns. Quote values that contain commas.`,
                      })
                    : l.push({
                        line: e,
                        id: d,
                        prompt: a(i),
                        model: a(o).trim() || void 0,
                      });
                }
                return l;
              })(h, m)
            : (function (e, t) {
                let r = [],
                  s = String(e).replace(/^\ufeff/, "");
                if (s.trimStart().startsWith("["))
                  return (
                    t.errors.push({
                      line: 1,
                      custom_id: null,
                      message:
                        "This looks like a JSON array. Use JSON Lines instead: one JSON object per line.",
                    }),
                    r
                  );
                let o = s.split(/\r?\n/);
                for (let e = 0; e < o.length; e++) {
                  let t,
                    s = o[e].trim();
                  if (!s) continue;
                  let l = e + 1;
                  try {
                    t = JSON.parse(s);
                  } catch (e) {
                    r.push({
                      line: l,
                      error:
                        "Not valid JSON (" +
                        i(String(e?.message || e), 100) +
                        ").",
                    });
                    continue;
                  }
                  if (!n(t)) {
                    r.push({
                      line: l,
                      error: "Each line must be a JSON object.",
                    });
                    continue;
                  }
                  let d = t.custom_id;
                  if ("body" in t)
                    "prompt" in t
                      ? r.push({
                          line: l,
                          id: d,
                          error:
                            'Use either "body" (OpenAI batch line) or "prompt", not both.',
                        })
                      : n(t.body)
                      ? null == t.url ||
                        /(^|\/)chat\/completions$/.test(
                          String(t.url).split("?")[0]
                        )
                        ? null != t.method &&
                          "POST" !== String(t.method).toUpperCase()
                          ? r.push({
                              line: l,
                              id: d,
                              error: '"method" must be "POST".',
                            })
                          : r.push({ line: l, id: d, body: t.body })
                        : r.push({
                            line: l,
                            id: d,
                            error: `Only chat completions are supported ("url": "/v1/chat/completions"), not "${i(
                              String(t.url),
                              60
                            )}".`,
                          })
                      : r.push({
                          line: l,
                          id: d,
                          error:
                            '"body" must be a JSON object with the request.',
                        });
                  else if ("prompt" in t) {
                    let e = Object.keys(t).filter((e) => !a.has(e));
                    e.length
                      ? r.push({
                          line: l,
                          id: d,
                          error: `Unknown field "${i(
                            e[0],
                            40
                          )}". Simple lines take custom_id, prompt and model; put other parameters in "body" (OpenAI batch line) or the defaults.`,
                        })
                      : null == t.model ||
                        ("string" == typeof t.model && t.model.trim())
                      ? r.push({
                          line: l,
                          id: d,
                          prompt: t.prompt,
                          model: t.model?.trim(),
                        })
                      : r.push({
                          line: l,
                          id: d,
                          error: '"model" must be a non-empty string.',
                        });
                  } else
                    r.push({
                      line: l,
                      id: d,
                      error: 'Needs "body" (OpenAI batch line) or "prompt".',
                    });
                }
                return r;
              })(h, m);
        if (((m.total = f.length), f.length > u))
          return (
            (m.tooMany = !0),
            m.errors.push({
              line: null,
              custom_id: null,
              message: `This input has ${f.length.toLocaleString(
                "en-US"
              )} rows. A batch runs at most ${u.toLocaleString(
                "en-US"
              )}; split it into smaller files.`,
            }),
            m
          );
        let g = new Map();
        for (let e of f) {
          if (void 0 === e.id || null === e.id) continue;
          let t =
            "number" == typeof e.id && Number.isFinite(e.id)
              ? String(e.id)
              : e.id;
          "string" == typeof t && t.trim()
            ? t.length > 128
              ? (e.error ||= '"custom_id" is longer than 128 characters.')
              : g.has(t)
              ? (e.error ||= `Duplicate custom_id "${i(
                  t,
                  40
                )}" (first used on line ${g.get(t)}).`)
              : g.set(t, e.line)
            : (e.error ||= '"custom_id" must be a non-empty string.'),
            (e.custom_id = "string" == typeof t ? t : null);
        }
        let y = 0;
        f.forEach((e, t) => {
          if (null != e.custom_id) return;
          let r = "row-" + (t + 1);
          for (; g.has(r); ) r = "row-" + (t + 1) + "-" + ++y;
          g.set(r, e.line), (e.custom_id = r), (e.auto = !0);
        });
        let b = new Set();
        for (let e of f) {
          let t,
            a = e.error;
          a ||
            e.body ||
            ("string" == typeof e.prompt && e.prompt.trim()) ||
            (a =
              "string" == typeof e.prompt
                ? "The prompt is empty."
                : '"prompt" must be a string.'),
            a ||
              (a =
                (function (e) {
                  if (!n(e)) return "The request must be a JSON object.";
                  if ("string" != typeof e.model || !e.model.trim())
                    return 'No model. Set "model" on the row or choose a default model or route.';
                  if ("prompt" in e && !("messages" in e))
                    return 'Use "messages" (chat completions), not "prompt", inside "body".';
                  let t = e.messages;
                  if (!Array.isArray(t) || !t.length)
                    return '"messages" must be a non-empty array.';
                  for (let e = 0; e < t.length; e++) {
                    let a = t[e];
                    if (!n(a)) return `messages[${e}] must be an object.`;
                    if (!r.includes(a.role))
                      return `messages[${e}].role must be one of ${r.join(
                        ", "
                      )}.`;
                    let i =
                      "assistant" === a.role &&
                      Array.isArray(a.tool_calls) &&
                      a.tool_calls.length;
                    if ("string" == typeof a.content) {
                      if (!a.content.trim() && "user" === a.role)
                        return `messages[${e}].content is empty.`;
                    } else if (Array.isArray(a.content)) {
                      if (!a.content.length)
                        return `messages[${e}].content is an empty array.`;
                    } else if (!(i && null == a.content))
                      return `messages[${e}].content must be a string or an array of content parts.`;
                  }
                  for (let t of ["max_tokens", "max_completion_tokens"])
                    if (null != e[t] && (!Number.isInteger(e[t]) || e[t] < 1))
                      return `"${t}" must be a positive integer.`;
                  return null != e.temperature &&
                    ("number" != typeof e.temperature ||
                      e.temperature < 0 ||
                      e.temperature > 2)
                    ? '"temperature" must be a number from 0 to 2.'
                    : null != e.top_p &&
                      ("number" != typeof e.top_p || e.top_p < 0 || e.top_p > 1)
                    ? '"top_p" must be a number from 0 to 1.'
                    : null != e.models &&
                      (!Array.isArray(e.models) ||
                        e.models.some((e) => "string" != typeof e))
                    ? '"models" must be an array of model ids.'
                    : null;
                })(
                  (t = (function (e, t) {
                    let r = e.body
                      ? { ...e.body }
                      : {
                          model: e.model,
                          messages: [{ role: "user", content: e.prompt }],
                        };
                    for (let [e, a] of ((null == r.model || "" === r.model) &&
                      (r.model = t.model || void 0),
                    Object.entries(t.params || {})))
                      void 0 === r[e] &&
                        ("max_tokens" !== e ||
                          void 0 === r.max_completion_tokens) &&
                        (r[e] = a);
                    return (
                      delete r.stream,
                      delete r.stream_options,
                      void 0 === r.model && delete r.model,
                      t.lane === s &&
                        (r.provider = {
                          ...(n(r.provider) ? r.provider : {}),
                          lane: s,
                        }),
                      r
                    );
                  })(e, c))
                ) || (c.lane && l(e.body?.provider) ? o : null)),
            a
              ? (m.errors.push({
                  line: e.line,
                  custom_id: e.auto ? null : e.custom_id,
                  message: a,
                }),
                b.add(e.line))
              : m.rows.push({
                  index: m.rows.length,
                  line: e.line,
                  custom_id: e.custom_id,
                  body: t,
                });
        }
        return (m.invalid = b.size), m;
      },
      "parseServerResults",
      0,
      function (e, t, r, { lane: a = !1 } = {}) {
        let s = new Map((r || []).map((e, t) => [M(e, t), t])),
          o = (r || []).map(() => null),
          l = q(e),
          d = q(t),
          c = l.invalid + d.invalid;
        for (let e of l.lines) {
          let t = s.get(e.custom_id);
          if (null == t) {
            c++;
            continue;
          }
          let r = n(e.response) ? e.response : {};
          o[t] = {
            ...v(),
            status: "done",
            attempts: 1,
            response: {
              status_code: Number(r.status_code) || 200,
              body: r.body ?? null,
            },
            error: null,
            request_id: r.request_id ?? null,
            ...R(r, a),
          };
        }
        for (let e of d.lines) {
          let t = s.get(e.custom_id);
          if ((null == t && c++, null == t || o[t])) continue;
          let r = n(e.response) ? e.response : null,
            l = n(r?.body?.error) ? r.body.error : {},
            d = String(e.error?.code || l.type || l.code || "error"),
            u = i(
              String(e.error?.message || l.message || "The request failed."),
              2e3
            ),
            h = !r && /cancel/i.test(d),
            p = {
              status: h ? 0 : Number(r?.status_code) || 0,
              type: h ? "cancelled" : d,
              message: u,
              ...(n(l.metadata) ? { metadata: l.metadata } : {}),
            };
          o[t] = {
            ...v(),
            status: h ? "cancelled" : "failed",
            attempts: +!!r,
            error: p,
            request_id: r?.request_id ?? null,
            ...(r ? R(r, a) : {}),
          };
        }
        let u = {
          status: 0,
          type: "no_result",
          message: "The router returned no result for this row.",
        };
        return {
          states: o.map(
            (e) => e || { ...v(), status: "failed", error: { ...u } }
          ),
          unmatched: c,
        };
      },
      "priceIndex",
      0,
      function (e = [], t = []) {
        let r = new Map();
        for (let t of e) {
          if (!t?.id) continue;
          let e = 1 + (Number(t.royaltyBps) || 0) / 1e4;
          r.set(t.id, {
            prompt: ((Number(t.price) || 0) / 1e6) * e,
            completion: ((Number(t.output) || 0) / 1e6) * e,
            context: Number(t.contextLength) || null,
          });
        }
        let a = new Map();
        for (let e of t) {
          let t = (e.models || []).map((e) => r.get(e));
          !t.length || t.some((e) => !e) || a.set("@route/" + e.slug, g(t));
        }
        return (e) => r.get(e) || a.get(e) || null;
      },
      "responseText",
      0,
      N,
      "restoreStates",
      0,
      function (e) {
        return e.map((e) => {
          let t = { ...v(), ...e };
          return "running" === t.status
            ? {
                ...t,
                status: "failed",
                finishedAt: t.startedAt,
                error: {
                  status: 0,
                  type: "interrupted",
                  message:
                    "The page closed while this row was in flight. It may have completed and been billed; check Receipts before retrying it.",
                },
              }
            : "waiting" === t.status
            ? { ...t, status: "pending", nextAt: 0 }
            : t;
        });
      },
      "retryAfterMs",
      0,
      b,
      "routesOnLane",
      0,
      (e, t) => (e || []).filter((e) => e.models.some((e) => t.has(u(e)))),
      "rowsOffLane",
      0,
      function (e, t, r = [], a = 3) {
        let n = new Map(r.map((e) => [e.slug, e])),
          i = [],
          s = 0;
        for (let r of e) {
          let e,
            a = r?.body?.model;
          if ("string" == typeof a && a) {
            if (a.toLowerCase().startsWith(d)) {
              let r = n.get(a.slice(d.length));
              e = !!r && !r.models.some((e) => t.has(u(e)));
            } else
              e =
                !t.has(u(a)) &&
                !(
                  Array.isArray(r.body.models) &&
                  r.body.models.some((e) => "string" == typeof e && t.has(u(e)))
                );
            e && (s++, i.includes(a) || i.push(a));
          }
        }
        return { count: s, models: i.slice(0, a) };
      },
      "serverBatchDone",
      0,
      I,
      "serverLineErrors",
      0,
      function (e, t) {
        let r = e?.metadata?.errors;
        return Array.isArray(r)
          ? r.map((e) => {
              let r = Number.isInteger(e?.line) ? t?.[e.line - 1] : null;
              return {
                line: r?.line ?? e?.line ?? null,
                custom_id: r ? M(r, e.line - 1) : null,
                message: String(e?.message || e?.code || "Invalid line."),
              };
            })
          : [];
      },
      "serverProgress",
      0,
      function (e) {
        let t = e?.request_counts || {},
          r = Math.max(0, S(t.total) || 0),
          a = Math.max(0, S(t.completed) || 0),
          n = Math.max(0, S(t.failed) || 0),
          i = Math.min(r, a + n),
          s = S(e?.cost?.usd) || 0,
          o = S(e?.cost?.list_usd) ?? s;
        return {
          status: $.includes(e?.status) ? e.status : "validating",
          done: I(e),
          total: r,
          completed: a,
          failed: n,
          finished: i,
          remaining: r - i,
          pct: r ? Math.floor((i / r) * 100) : 0,
          cost: s,
          listCost: o,
          saved: Math.max(0, o - s),
          discountBps: S(e?.cost?.discount_bps) ?? 5e3,
        };
      },
      "summarize",
      0,
      function (e) {
        let t = {
          total: e.length,
          pending: 0,
          running: 0,
          waiting: 0,
          done: 0,
          failed: 0,
          cancelled: 0,
          finished: 0,
          promptTokens: 0,
          completionTokens: 0,
          cost: 0,
        };
        for (let r of e) {
          t[r.status] = (t[r.status] || 0) + 1;
          let e = x(r);
          e &&
            ((t.promptTokens += S(e.prompt_tokens) || 0),
            (t.completionTokens += S(e.completion_tokens) || 0),
            (t.cost += S(e.cost) || 0));
        }
        return (t.finished = t.done + t.failed), t;
      },
      "toCSV",
      0,
      function (e, t, { lane: r = !1 } = {}) {
        let a = [(r ? [...C, ...T] : C).join(",")];
        return (
          e.forEach((e, n) => {
            let i = t[n],
              s = A(e, i, { lane: r }),
              o = s.response?.status_code === 200 ? s.response.body : null,
              l = s.usage || {},
              d =
                {
                  done: "succeeded",
                  failed: r && s.fail_closed ? "failed_closed" : "failed",
                  cancelled: "cancelled",
                }[i.status] || "not_run",
              c = [
                e.custom_id,
                d,
                s.response?.status_code ?? null,
                o?.model || e.body?.model,
                o ? N(o) : null,
                o?.choices?.[0]?.finish_reason ?? null,
                S(l.prompt_tokens),
                S(l.completion_tokens),
                S(l.total_tokens),
                s.cost,
                s.receipt_id,
                s.error ? s.error.message : null,
              ];
            r && c.push(s.lane, s.fail_closed), a.push(c.map(j).join(","));
          }),
          "\uFEFF" + a.join("\r\n") + "\r\n"
        );
      },
      "toJSONL",
      0,
      function (e, t, r) {
        return (
          e.map((e, a) => JSON.stringify(A(e, t[a], r))).join("\n") +
          (e.length ? "\n" : "")
        );
      },
      "toServerRequests",
      0,
      function (e) {
        return (e || []).map((e, t) => ({
          custom_id: M(e, t),
          method: "POST",
          url: "/v1/chat/completions",
          body: e.body,
        }));
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
    function n(e, { query: i = "", tags: s = [], sort: o = "name" } = {}) {
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
        .filter((e) => s.every((r) => (0, t.modelCapabilities)(e).includes(r)))
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
      n,
      "modelTagCounts",
      0,
      function (e, r = {}) {
        let a = n(e, r);
        return Object.fromEntries(
          t.MODEL_CAPABILITIES.map((e) => [
            e.key,
            a.filter((r) => (0, t.modelCapabilities)(r).includes(e.key)).length,
          ])
        );
      },
    ]);
  },
  54036,
  (e) => {
    "use strict";
    var t = e.i(78182);
    let r = (e) => {
      if ("string" != typeof e || !/^-?\d+(\.\d{1,12})?$/.test(e))
        throw Error("A statement amount is invalid.");
      let [t, r = ""] = e.replace(/^-/, "").split(".");
      return (
        (1000000000000n * BigInt(t) + BigInt(r.padEnd(12, "0"))) *
        (e.startsWith("-") ? -1n : 1n)
      );
    };
    async function a(e, a) {
      if (e?.payload?.type !== "anyroute.statement.v1")
        throw Error("This is not a monthly statement.");
      let n = await (0, t.verifyReceipt)(e, a),
        i = (function (e) {
          try {
            if (
              r(e.opening_balance) +
                r(e.deposits) +
                r(e.refunds) -
                r(e.usage) -
                r(e.fees) +
                r(e.other_changes) !==
              r(e.closing_balance)
            )
              return !1;
            for (let t of [
              "usage_by_model",
              "usage_by_key_agent",
              "usage_by_lane",
            ])
              if (
                !Array.isArray(e[t]) ||
                e[t].reduce((e, t) => e + r(t.amount), 0n) !== r(e.usage)
              )
                return !1;
            return (
              Array.isArray(e.movements_by_kind) &&
              r(e.opening_balance) +
                e.movements_by_kind.reduce((e, t) => e + r(t.amount), 0n) ===
                r(e.closing_balance)
            );
          } catch {
            return !1;
          }
        })(e.payload);
      return {
        ...n,
        valid: n.valid && i,
        checks: [
          ...n.checks,
          {
            id: "reconciliation",
            status: i ? "pass" : "fail",
            detail: i
              ? "The printed amounts and usage groups reconcile."
              : "The statement amounts do not reconcile.",
          },
        ],
        notChecked: [
          "A valid signature shows what the router signed. This browser has not read the underlying ledger or checked whether it is complete.",
        ],
      };
    }
    e.s([
      "downloadJson",
      0,
      function (e, t) {
        let r = URL.createObjectURL(
            new Blob([JSON.stringify(e, null, 2)], { type: "application/json" })
          ),
          a = document.createElement("a");
        (a.href = r),
          (a.download = t),
          a.click(),
          setTimeout(() => URL.revokeObjectURL(r), 1e3);
      },
      "parseStatement",
      0,
      function (e) {
        let t = JSON.parse(e),
          r = t?.data ?? t;
        if (r?.payload?.type !== "anyroute.statement.v1" || !r.sig || !r.key_id)
          throw Error("Choose a signed monthly statement JSON file.");
        return r;
      },
      "statementPath",
      0,
      (e) => "/api/v1/statements/" + encodeURIComponent(e),
      "verifyStatement",
      0,
      a,
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
      i = (e) => e && "object" == typeof e && !Array.isArray(e),
      s = (e, t) =>
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
        s(e.skipped, r) &&
        ["public", "attested", "unlinkable"].includes(e.lane) &&
        "boolean" == typeof e.network_host &&
        Array.isArray(e.parameters) &&
        e.parameters.length <= n.length &&
        new Set(e.parameters).size === e.parameters.length &&
        e.parameters.every((e) => n.includes(e)) &&
        ("fallback" === e.reason
          ? s(e.fallback, a) && Object.keys(e.fallback).length > 0
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
      b = (e) => (e ? "yes" : "no"),
      _ = (e) => new TextEncoder().encode(e),
      v = (e) => Array.from(e, (e) => e.toString(16).padStart(2, "0")).join("");
    function w(e) {
      let t = String(e).replace(/^0x/i, "");
      if (t.length % 2 || /[^0-9a-fA-F]/.test(t)) throw Error("invalid hex");
      return Uint8Array.from(t.match(/../g) || [], (e) => parseInt(e, 16));
    }
    function k(e) {
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
      S = async (e) => new Uint8Array(await crypto.subtle.digest("SHA-256", e)),
      A = (1n << 64n) - 1n,
      j = [
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
      N = [
        0, 1, 62, 28, 27, 36, 44, 6, 55, 20, 3, 10, 43, 25, 39, 41, 45, 15, 21,
        8, 18, 2, 61, 56, 14,
      ],
      C = (e, t) =>
        0 === t ? e : ((e << BigInt(t)) | (e >> BigInt(64 - t))) & A;
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
            let t = a[(e + 4) % 5] ^ C(a[(e + 1) % 5], 1);
            for (let a = 0; a < 25; a += 5) r[e + a] ^= t;
          }
          for (let e = 0; e < 5; e++)
            for (let t = 0; t < 5; t++)
              n[t + ((2 * e + 3 * t) % 5) * 5] = C(r[e + 5 * t], N[e + 5 * t]);
          for (let e = 0; e < 25; e += 5)
            for (let t = 0; t < 5; t++)
              r[t + e] =
                n[t + e] ^ (~n[((t + 1) % 5) + e] & A & n[((t + 2) % 5) + e]);
          r[0] ^= j[e];
        }
      }
      let i = new Uint8Array(32);
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 8; t++)
          i[8 * e + t] = Number((r[e] >> BigInt(8 * t)) & 255n);
      return i;
    }
    let $ = (e, t) => {
      for (let r = 0; r < Math.min(e.length, t.length); r++)
        if (e[r] !== t[r]) return e[r] - t[r];
      return e.length - t.length;
    };
    function E(e, t, r) {
      try {
        let a = w(e);
        for (let e of t) {
          let t = w(e);
          a = T(0 > $(a, t) ? x(a, t) : x(t, a));
        }
        return v(a) === v(w(r));
      } catch {
        return !1;
      }
    }
    async function O(e, t, r) {
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
      I = (e, t) => ({ id: e, status: "fail", detail: t }),
      R = (e, t) => ({ id: e, status: "not_checked", detail: t }),
      q = [
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
          ed25519: t.ed25519 || O,
          chunks: t.chunks,
        };
      if (r && !e.payload) {
        let t = await J(r, { ...a, proof: e.anchor });
        return {
          valid: t.valid,
          keyId: t.keyId,
          checks: t.checks,
          anchor: B(t.checks),
          notChecked: q,
          claims: t.claims,
        };
      }
      let n = await U(e, t);
      if (!r) return n;
      let i = await J(r, { ...a, proof: e.v2?.anchor });
      return {
        ...n,
        valid: n.valid && i.valid,
        checks: [...n.checks, ...i.checks],
        claims: i.claims,
      };
    }
    let B = (e) => {
      let t = e.find((e) => "v2_anchor_proof" === e.id);
      return t?.status === "pass"
        ? "proof_valid"
        : t?.status === "fail"
        ? "proof_invalid"
        : "no_proof";
    };
    async function U(
      e,
      { keys: t, publicKeyHex: r, ed25519: a = O, skewMs: n = 3e5 } = {}
    ) {
      let i = [],
        s = "string" == typeof e?.key_id ? e.key_id : "",
        l = (e) => ({
          valid:
            i.every((e) => "fail" !== e.status) &&
            i.some((e) => "signature" === e.id && "pass" === e.status),
          keyId: s,
          checks: i,
          anchor: e,
          notChecked: q,
        });
      if (
        !e ||
        "object" != typeof e ||
        !e.payload ||
        "object" != typeof e.payload ||
        "string" != typeof e.sig ||
        !s
      )
        return (
          i.push(I("shape", "A receipt needs payload, sig and key_id.")),
          l("no_proof")
        );
      void 0 !== e.payload.route &&
        i.push(
          o(e.payload.route, e.payload.provider)
            ? M(
                "route",
                "Route explanation v1 is a router-signed summary, not independent proof of selection."
              )
            : I("route", "Invalid route explanation.")
        ),
        i.push(
          void 0 === e.alg || "Ed25519" === e.alg
            ? M("alg", "Ed25519")
            : I("alg", `Unsupported algorithm ${String(e.alg)}.`)
        );
      let d = null,
        c = null,
        u = async (e) => v(await S(e)).slice(0, 16);
      if (r) {
        try {
          if (((d = w(r.trim())), 32 !== d.length)) throw Error("length");
        } catch {
          (d = null),
            i.push(I("key", "The key you entered is not 32 bytes of hex."));
        }
        if (d) {
          let e = await u(d);
          i.push(
            e === s
              ? M("key", `Key id ${s} matches the key you entered.`)
              : I(
                  "key",
                  `The receipt names key ${s}, but the key you entered has id ${e}.`
                )
          );
        }
      } else {
        let e = (Array.isArray(t) ? t : t?.keys || []).find((e) => e.kid === s);
        if (e)
          if ("OKP" !== e.kty || "Ed25519" !== e.crv)
            i.push(I("key", "The published key is not an Ed25519 key."));
          else
            try {
              if (((d = k(e.x)), 32 !== d.length)) throw Error("length");
              let t = await u(d);
              i.push(
                t === s
                  ? M(
                      "key",
                      `Key ${s} is in the router's published list and its id matches its bytes.`
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
              (d = null), i.push(I("key", "The published key is malformed."));
            }
        else
          i.push(
            I("key", `Key ${s} is not in the router's published key list.`)
          );
      }
      let h = null;
      try {
        h = k(e.sig);
      } catch {
        i.push(I("signature", "The signature is not valid base64."));
      }
      let p = _(
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
      if (d && h && !i.some((e) => "key" === e.id && "fail" === e.status))
        try {
          i.push(
            (await a(d, p, h))
              ? M(
                  "signature",
                  "The signature over the receipt's contents verifies with that key."
                )
              : I(
                  "signature",
                  "The signature does not verify: the receipt was changed or was not signed by that key."
                )
          );
        } catch (e) {
          i.push(
            e?.unsupported
              ? R("signature", `${e.message} Use one of the SDKs to check it.`)
              : I("signature", String(e?.message || e))
          );
        }
      else
        i.some((e) => "signature" === e.id) ||
          i.push(
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
        i.push(
          e || t
            ? I(
                "key_window",
                "The receipt is dated outside its signing key's validity window."
              )
            : M(
                "key_window",
                "The receipt's date is inside its key's validity window."
              )
        );
      } else
        i.push(R("key_window", "No key window or receipt date to compare."));
      if (e.leaf && h) {
        let t = "0x" + v(T(T(x(p, h))));
        i.push(
          t === String(e.leaf).toLowerCase()
            ? M(
                "leaf",
                "The receipt's anchor leaf matches its contents and signature."
              )
            : I(
                "leaf",
                "The anchor leaf does not match the receipt's contents and signature."
              )
        );
      } else i.push(R("leaf", "The receipt carries no anchor leaf."));
      let f = "no_proof",
        g = e.anchor;
      if (g && Array.isArray(g.proof) && "string" == typeof g.root && e.leaf) {
        let t = E(e.leaf, g.proof, g.root);
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
              : I(
                  "anchor_proof",
                  "The inclusion proof does not lead from the receipt to the stated root."
                )
          );
      } else
        i.push(
          R(
            "anchor_proof",
            "No anchor proof was included. A receipt is anchored within the hour, so fetch it again later to get one."
          )
        );
      return l(f);
    }
    function D(e) {
      let t = 0,
        r = (r) => {
          if (t + r > e.length) throw Error("truncated CBOR");
        },
        a = () => {
          r(1);
          let n = e[t++],
            i = n >> 5,
            s = 31 & n;
          if (7 === i) {
            if (20 === s) return !1;
            if (21 === s) return !0;
            if (22 === s) return null;
            throw Error("unsupported CBOR value");
          }
          let o = s;
          if (s >= 24) {
            let a = { 24: 1, 25: 2, 26: 4, 27: 8 }[s];
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
        n = a();
      if (t !== e.length) throw Error("trailing CBOR bytes");
      return n;
    }
    let P = (e) =>
        e instanceof Map
          ? Object.fromEntries([...e].map(([e, t]) => [String(e), P(t)]))
          : Array.isArray(e)
          ? e.map(P)
          : e,
      F = (e, t) =>
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
      z = (e) => x(F(2, e.length), e);
    async function K(e, t) {
      let r = await S(_(e));
      for (let e of t) r = await S(x(r, _(e)));
      return "sha256:" + v(r);
    }
    async function J(
      e,
      { keys: t, publicKeyHex: r, ed25519: a = O, chunks: n, proof: i } = {}
    ) {
      let s,
        l,
        d = [];
      try {
        (s = k(e)),
          (l = (function (e) {
            let t = D(e);
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
            let r = D(t[0]),
              a = r instanceof Map ? r.get(4) : null;
            return {
              alg: r instanceof Map ? r.get(1) : null,
              keyId: a instanceof Uint8Array ? v(a) : "",
              claims: P(D(t[2])),
              prot: t[0],
              payload: t[2],
              signature: t[3],
            };
          })(s));
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
            ? M(
                "v2_route",
                "Route explanation v1 is covered by the COSE signature; routing itself is not independently checked."
              )
            : I("v2_route", "Invalid route explanation.")
        ),
        d.push(
          -8 === l.alg
            ? M("v2_alg", "v2: COSE_Sign1 with EdDSA.")
            : I("v2_alg", `v2: unsupported COSE algorithm ${String(l.alg)}.`)
        );
      let c = null;
      try {
        if (r) c = w(r.trim());
        else {
          let e = (Array.isArray(t) ? t : t?.keys || []).find(
            (e) => e.kid === l.keyId
          );
          e && "OKP" === e.kty && "Ed25519" === e.crv && (c = k(e.x));
        }
      } catch {
        c = null;
      }
      if (c && 32 === c.length)
        if (v(await S(c)).slice(0, 16) !== l.keyId)
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
                  F(4, 4),
                  F(3, 10),
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
                : I(
                    "v2_signature",
                    "v2: the COSE signature does not verify: the claims were changed or not signed by that key."
                  )
            );
          } catch (e) {
            d.push(
              e?.unsupported
                ? R(
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
        let e = await K(l.claims.rid, n);
        d.push(
          e === l.claims.resp?.chain
            ? M(
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
          R(
            "v2_chain",
            l.claims.resp?.chain
              ? `v2: signed chain head ${y(
                  l.claims.resp.chain
                )}. Paste the streamed events to check it.`
              : "v2: not a streamed response, so there is no chain."
          )
        );
      let u = "0x" + v(T(T(s)));
      if (i && Array.isArray(i.proof) && "string" == typeof i.root) {
        let e = E(u, i.proof, i.root);
        d.push(
          e
            ? M(
                "v2_anchor_proof",
                `v2: included under root ${i.root.slice(0, 10)}…${
                  i.anchored ? "" : " (a root kept off chain, not posted)"
                }`
              )
            : I(
                "v2_anchor_proof",
                "v2: the Merkle path does not lead from this receipt to the root."
              )
        );
      } else
        d.push(
          R(
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
            i =
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
            s = a.measurement || null,
            o = s?.transparency_log || null,
            l = s?.registry || null,
            d = f[l?.state] || f.not_recorded,
            c = Array.isArray(a.verifiers) ? a.verifiers : [],
            p = o?.subject === "measurement_bundle",
            y = p
              ? "A signed measurement bundle for this compose hash was found in the log"
              : "An entry for the image was found",
            _ = s
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
            v = "unverified" === n ? null : a.attested_at || null;
          return {
            status: n,
            verdict: i,
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
                value: v || "",
                relative: g(v, t),
                empty: "Never, or not recently enough to count.",
                state: v ? "yes" : "no",
              },
            },
            measurement: s
              ? {
                  recorded: !0,
                  currentlyAttested: "attested" === n && !!s.attested_now,
                  status: s.status,
                  firstSeen: s.first_attested_at || "",
                  lastSeen: s.last_seen_at || "",
                  digests: [
                    {
                      key: "image",
                      label: "Image digest",
                      value: s.image_digest || "",
                    },
                    {
                      key: "compose",
                      label: "Compose hash",
                      value: s.compose_hash || "",
                    },
                    {
                      key: "model",
                      label: "Model digest",
                      value: s.model_digest || "",
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
                b("attested" === n && a.checks?.quote_verified),
              ],
              [
                "digests_bound_to_quote",
                "The image, compose and model digests are committed inside that quote",
                b("attested" === n && a.checks?.digests_bound_to_quote),
              ],
              [
                "transparency_log_entry",
                p
                  ? "The measurement bundle has an entry in a transparency log"
                  : "The image has an entry in a transparency log",
                b(a.checks?.transparency_log_entry),
              ],
              [
                "transparency_log_checkpoint_signature",
                "The log's signature over that entry was verified",
                b(a.checks?.transparency_log_checkpoint_signature),
              ],
              [
                "registered_on_chain",
                "The measurement is registered on chain",
                b(a.checks?.registered_on_chain),
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
  12043,
  (e) => {
    "use strict";
    var t = e.i(4581);
    async function r() {
      let e = window.ethereum;
      if (!e)
        throw Error(
          "No browser wallet found. Install a wallet such as MetaMask, or use the manual deposit details."
        );
      let [t] = await e.request({ method: "eth_requestAccounts" });
      if (!t) throw Error("The wallet did not share an account.");
      return t;
    }
    async function a({ id: e, name: t, rpc: r, explorer: n }) {
      let i = window.ethereum,
        s = "0x" + Number(e).toString(16);
      if ((await i.request({ method: "eth_chainId" })) !== s)
        try {
          await i.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: s }],
          });
        } catch (e) {
          if (
            e?.code !== 4902 &&
            !/unrecognized|not added|unknown chain/i.test(String(e?.message))
          )
            throw e;
          await i.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: s,
                chainName: t || "Robinhood Chain",
                nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
                rpcUrls: [r],
                ...(n ? { blockExplorerUrls: [n] } : {}),
              },
            ],
          });
        }
    }
    async function n(e, t = 18e4) {
      let r = window.ethereum,
        a = Date.now() + t;
      for (; Date.now() < a; ) {
        let t = await r.request({
          method: "eth_getTransactionReceipt",
          params: [e],
        });
        if (t) {
          if ("0x1" !== t.status)
            throw Error("The transaction failed on-chain: " + e);
          return t;
        }
        await new Promise((e) => setTimeout(e, 1e3));
      }
      throw Error("The transaction was not confirmed in time: " + e);
    }
    async function i(e, t, r) {
      let a = window.ethereum,
        i = [];
      for (let [s, o] of t.entries()) {
        r?.(
          `${s + 1}/${t.length}: ${o.description || "Confirm in your wallet"}`
        );
        let l = await a.request({
          method: "eth_sendTransaction",
          params: [{ from: e, to: o.to, data: o.data, value: "0x0" }],
        });
        r?.(`${s + 1}/${t.length}: waiting for confirmation…`),
          await n(l),
          i.push(l);
      }
      return i;
    }
    async function s(e, t) {
      return window.ethereum.request({
        method: "eth_signTypedData_v4",
        params: [e, JSON.stringify(t)],
      });
    }
    async function o(e, t) {
      let r =
        "0x" +
        Array.from(new TextEncoder().encode(t), (e) =>
          e.toString(16).padStart(2, "0")
        ).join("");
      return window.ethereum.request({
        method: "personal_sign",
        params: [r, e],
      });
    }
    async function l() {
      try {
        let [e] =
          (await window.ethereum?.request({ method: "eth_accounts" })) ?? [];
        return e || null;
      } catch {
        return null;
      }
    }
    async function d(e, t) {
      try {
        let r = "0x70a08231" + e.slice(2).toLowerCase().padStart(64, "0"),
          a = await window.ethereum.request({
            method: "eth_call",
            params: [{ to: t, data: r }, "latest"],
          });
        return /^0x[0-9a-fA-F]+$/.test(a) ? BigInt(a) : null;
      } catch {
        return null;
      }
    }
    async function c(e = "Wallet key") {
      let a = await r(),
        { data: n } = await (0, t.api)("/api/v1/auth/wallet/challenge", {
          method: "POST",
          body: { address: a },
        }),
        i = await o(a, n.message);
      return (
        await (0, t.api)("/api/v1/auth/wallet", {
          method: "POST",
          body: { address: a, nonce: n.nonce, signature: i, name: e },
        })
      ).key;
    }
    e.s([
      "connect",
      0,
      r,
      "connectedAccount",
      0,
      l,
      "ensureChain",
      0,
      a,
      "hasWallet",
      0,
      () => !!window.ethereum,
      "personalSign",
      0,
      o,
      "sendTransactions",
      0,
      i,
      "shortAddress",
      0,
      (e) => (e ? e.slice(0, 6) + "…" + e.slice(-4) : ""),
      "signTypedData",
      0,
      s,
      "tokenBalance",
      0,
      d,
      "walletApiKey",
      0,
      c,
    ]);
  },
]);
