(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  69019,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(45482),
      i = e.i(86700),
      s = e.i(3904);
    e.s([
      "CapabilityChips",
      0,
      function ({ model: e, dark: r = !1, linked: l = !0 }) {
        let n = (0, a.modelCapabilities)(e);
        return (0, t.jsx)("span", {
          className: s.default.chips,
          "data-dark": r || void 0,
          children: n.length
            ? a.MODEL_CAPABILITIES.filter((e) => n.includes(e.key)).map((a) =>
                "attested" === a.key
                  ? (0, t.jsx)(
                      i.default,
                      {
                        evidence: { source: "model", data: e },
                        dark: r,
                        linked: l,
                      },
                      a.key
                    )
                  : (0, t.jsx)(
                      "span",
                      {
                        className: s.default.chip,
                        title: a.explanation,
                        "aria-label": `${a.label}: ${a.explanation}`,
                        children: a.label,
                      },
                      a.key
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
              children: a.MODEL_CAPABILITIES.map((e) =>
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
      a = e.i(98248),
      i = e.i(4581),
      s = e.i(45482),
      r = e.i(31303),
      l = e.i(69019),
      n = e.i(92882),
      o = e.i(42106);
    function d({ raw: e, onClose: a, onChoose: s }) {
      let r = (0, i.toCatalogModel)(e);
      return (0, t.jsxs)(n.Modal, {
        title: r.name,
        onClose: a,
        children: [
          (0, t.jsx)("p", { children: r.description }),
          (0, t.jsx)(l.CapabilityChips, { model: e }),
          (0, t.jsx)(l.CapabilityGuide, {}),
          (0, t.jsxs)("dl", {
            className: "detail-list",
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Model ID" }),
                  (0, t.jsx)("dd", { children: r.id }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Context" }),
                  (0, t.jsxs)("dd", {
                    children: [
                      (r.contextLength || 0).toLocaleString("en-US"),
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
                      r.price.toLocaleString("en-US", {
                        maximumSignificantDigits: 6,
                      }),
                      " / $",
                      r.output.toLocaleString("en-US", {
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
                      e.provider_names?.join(", ") || r.providers,
                      " · ",
                      r.quantization.join(", ") || "quantization not declared",
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("dt", { children: "Creator royalty" }),
                  (0, t.jsx)("dd", {
                    children: r.creator
                      ? `${r.royaltyBps / 100}% to ${r.creator.slice(0, 10)}…`
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
          s
            ? (0, t.jsx)(n.Button, {
                onClick: () => {
                  a(), s(r.id);
                },
                children: "Choose model",
              })
            : (0, t.jsx)(n.Button, {
                href:
                  "/dashboard/?model=" +
                  encodeURIComponent(r.id) +
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
        let [c, h] = (0, a.useState)(""),
          [p, u] = (0, a.useState)([]),
          [m, g] = (0, a.useState)("name"),
          [x, f] = (0, a.useState)(null),
          [y, b] = (0, a.useState)(null),
          [v, _] = (0, a.useState)(null),
          [j, k] = (0, a.useState)(""),
          [C, w] = (0, a.useState)(0);
        (0, a.useEffect)(() => {
          let e = !0;
          return (
            k(""),
            (0, i.api)("/api/v1/models")
              .then((t) => {
                e && (b(t.data), _(new Date()));
              })
              .catch((t) => e && k(t.message)),
            () => {
              e = !1;
            }
          );
        }, [C]);
        let N = (0, a.useMemo)(
            () => (0, r.filterModels)(y || [], { query: c, tags: p, sort: m }),
            [y, c, p, m]
          ),
          S = (0, a.useMemo)(
            () => (0, r.modelTagCounts)(y || [], { query: c, tags: p }),
            [y, c, p]
          ),
          M = (e) => (e < 0.01 && e > 0 ? e.toFixed(4) : e.toFixed(2));
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
                      onChange: (e) => h(e.target.value),
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
                      onChange: (e) => g(e.target.value),
                      children: r.CATALOG_SORTS.map((e) =>
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
              className: o.default.filters,
              role: "group",
              "aria-label": "Filter by capability",
              children: s.MODEL_CAPABILITIES.map((e) =>
                (0, t.jsxs)(
                  "button",
                  {
                    type: "button",
                    title: e.explanation,
                    "aria-pressed": p.includes(e.key),
                    onClick: () => {
                      let t;
                      return (
                        (t = e.key),
                        u((e) =>
                          e.includes(t) ? e.filter((e) => e !== t) : [...e, t]
                        )
                      );
                    },
                    disabled: !p.includes(e.key) && !S[e.key],
                    children: [
                      e.label,
                      " ",
                      (0, t.jsx)("span", { children: S[e.key] }),
                    ],
                  },
                  e.key
                )
              ),
            }),
            (0, t.jsx)(l.CapabilityGuide, {}),
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
                y &&
                  !j &&
                  (0, t.jsxs)("span", {
                    className: "catalog-count",
                    "aria-live": "polite",
                    children: [N.length, " of ", y.length, " models"],
                  }),
              ],
            }),
            j &&
              (0, t.jsxs)("div", {
                className: "empty",
                children: [
                  (0, t.jsx)("h3", {
                    children: "The model catalog could not be loaded.",
                  }),
                  (0, t.jsx)("p", { children: j }),
                  (0, t.jsx)(n.Button, {
                    secondary: !0,
                    onClick: () => w((e) => e + 1),
                    children: "Retry",
                  }),
                ],
              }),
            !j &&
              !y &&
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
              children: N.map((a, s) => {
                let r = (0, i.toCatalogModel)(a);
                return (0, t.jsxs)(
                  "article",
                  {
                    className: "route-card model-card",
                    style: { "--i": Math.min(s, 10) },
                    children: [
                      (0, t.jsxs)("div", {
                        className: "eyebrow",
                        children: [
                          r.author,
                          (0, t.jsx)("span", { className: "live-square" }),
                          r.type,
                        ],
                      }),
                      (0, t.jsx)("h3", { children: r.name }),
                      (0, t.jsx)("p", { children: r.description }),
                      (0, t.jsx)(l.CapabilityChips, { model: a }),
                      (0, t.jsxs)("div", {
                        className: "model-meta",
                        children: [
                          (0, t.jsxs)("span", {
                            children: [r.context, " context"],
                          }),
                          (0, t.jsxs)("span", {
                            children: [
                              r.providers,
                              " provider",
                              1 === r.providers ? "" : "s",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "model-meta",
                        children: [
                          (0, t.jsxs)("span", {
                            children: ["$", M(r.price), " / 1M input"],
                          }),
                          (0, t.jsxs)("span", {
                            children: ["$", M(r.output), " / 1M output"],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "button-row",
                        children: [
                          (0, t.jsx)("button", {
                            className: "text-button",
                            onClick: () => f(a),
                            children: "Model details →",
                          }),
                          e
                            ? (0, t.jsx)("button", {
                                className: "text-button",
                                onClick: () => e(r.id),
                                children: "Try model →",
                              })
                            : (0, t.jsx)("a", {
                                className: "text-button",
                                href:
                                  "/dashboard/?model=" +
                                  encodeURIComponent(r.id) +
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
                  r.id
                );
              }),
            }),
            !N.length &&
              y &&
              !j &&
              (0, t.jsxs)("div", {
                className: "empty",
                children: [
                  (0, t.jsx)("h3", { children: "No matching models" }),
                  (0, t.jsx)("p", {
                    children: y.length
                      ? "Try a different search or clear the filters."
                      : "No providers are serving models yet.",
                  }),
                  (0, t.jsx)(n.Button, {
                    secondary: !0,
                    onClick: () => {
                      h(""), u([]);
                    },
                    children: "Clear filters",
                  }),
                ],
              }),
            x && (0, t.jsx)(d, { raw: x, onClose: () => f(null), onChoose: e }),
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
    let a = [
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
    function i(e, t = "input") {
      if (!e) return [];
      let a =
        e.architecture?.[`${t}_modalities`] ??
        e[`${t}_modalities`] ??
        e["input" === t ? "inputs" : "outputs"];
      if (Array.isArray(a)) return a;
      let s = e.architecture?.modality;
      return "string" == typeof s && s.includes("->")
        ? s.split("->")[+("input" !== t)].split("+")
        : ["text"];
    }
    function s(e) {
      return Array.isArray(e?.capabilities)
        ? a.filter((t) => e.capabilities.includes(t.key)).map((e) => e.key)
        : (function (e = {}) {
            let t,
              s = i(e, "input"),
              r = i(e, "output"),
              l = e.supported_parameters ?? e.params ?? [],
              n =
                !0 === e.attested_available ||
                (null == e.attested_available &&
                  (e.disclosure?.best === "attested" || !0 === e.attested)),
              o = {
                vision: s.includes("image"),
                imageOut: r.includes("image"),
                audio: s.includes("audio") || r.includes("audio"),
                tools:
                  ((t = "tools"),
                  l instanceof Set
                    ? l.has(t)
                    : Array.isArray(l) && l.includes(t)),
                longContext:
                  Number(
                    e.context_length ??
                      e.contextLength ??
                      e.context ??
                      e.top_provider?.context_length ??
                      0
                  ) >= 128e3,
                attested: n,
                network: !0 === e.network_host_available,
                encrypted: !0 === e.encrypted_chat_available,
              };
            return a.filter((e) => o[e.key]).map((e) => e.key);
          })(e ?? {});
    }
    let r = (e, t) => s(e).includes(t);
    function l(e, t = Date.now()) {
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
        a,
        "hasModelCapability",
        0,
        r,
        "modelCapabilities",
        0,
        s,
        "modelModalities",
        0,
        i,
      ],
      45482
    ),
      e.s(["sealedLabel", 0, l], 64265);
    let n = Object.freeze({
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
      o = (e) =>
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
    function h(e = {}, t = Date.now()) {
      let { source: a } = e,
        i = e.data || {},
        s = !1,
        p = !1,
        u = !1,
        m = !1,
        g = !1,
        x = "",
        f = "",
        y = "";
      if ("model" === a)
        (s =
          c(i, t) &&
          c(i.attestation || {}, t) &&
          !1 !== i.attested_available &&
          r(i, "attested")),
          (y =
            "Available endpoint: routing may choose another provider. Ordinary Harness chat is readable by the router.");
      else if ("host" === a)
        (s =
          !0 === i.attested &&
          i.attestation?.status === "attested" &&
          c(i.attestation, t)),
          (x = i.id),
          (y =
            "Router record when loaded; refresh to check again. Build admission is a separate check.");
      else if ("admission" === a)
        (s = !0 === i.attested && c(i, t)),
          (x = e.providerId),
          (y =
            "Router record when loaded; admission and routing health are separate checks.");
      else if ("network" === a) {
        let e = t - Date.parse(i.as_of || "");
        (s =
          Number.isSafeInteger(i.attested_hosts) &&
          i.attested_hosts > 0 &&
          e >= 0 &&
          e < 3e4 &&
          c(i, t)),
          (y =
            "Count of hosts with fresh successful hardware and admission checks in this snapshot; inspect each host record before relying on it.");
      } else if ("sealed" === a)
        y = (s = c(i, t) && !!l(i, t))
          ? `Sealed hosting \xb7 image ${i.agent_image_digest}. Measured code is not audited code.`
          : "Sealed hosting has no current hardware proof in this record.";
      else if ("profile" === a)
        y =
          "This profile does not publish current hardware evidence. Owner-supplied capabilities are separate.";
      else if ("generation" === a)
        (g = !0 === i.live && d(i.signature)),
          (f = i.id),
          (y =
            "This list does not include hardware evidence; inspect the receipt for the path used.");
      else if ("ledger" === a)
        (g = !!o(i.receipt_id)),
          (f = i.receipt_id),
          (y =
            "This ledger records a receipt id; its signature has not been checked in this browser.");
      else if ("receipt" === a) {
        let e = i.payload || {};
        (f = i.id || e.id),
          (x = e.provider),
          (g = d(i.sig)),
          (m = "cache" === e.mode || "cache" === e.provider);
        let a = e.upstream_attestation;
        (p =
          (s =
            !m &&
            "attested" === e.disclosure &&
            !0 !== e.attestation_simulated &&
            c(e, t) &&
            (!a || (!0 === a.attested && c(a, t)))) &&
          !0 === e.end_to_end_encrypted &&
          "phala-confidential-ai" === e.provider &&
          e.e2ee?.version === 2 &&
          e.e2ee?.suite === "x25519-aes-256-gcm-hkdf-sha256" &&
          e.e2ee?.gateway_attested === !0),
          (u =
            "unlinkable" === e.lane &&
            "blind" === e.mode &&
            !e.payer &&
            !e.payment_tx &&
            (d(e.nullifier) ||
              (Array.isArray(e.nullifiers) && e.nullifiers.length > 0))),
          (y = s
            ? "The receipt records the hardware check for this call; it does not establish a current check for a later call."
            : "");
      } else
        "attestation" === a &&
          ((s = "attested" === i.status && c(i, t)),
          (x = i.provider),
          (y = "Router record when loaded; refresh to check again."));
      let b = m
          ? "cached"
          : p
          ? "encrypted"
          : u
          ? "unlinkable"
          : s
          ? "hardware"
          : "standard",
        v = (e) => ({
          key: e,
          ...n[e],
          hardware: "signed" !== e && s,
          context: "signed" === e ? "" : y,
          href: (function (e, { providerId: t, receiptId: a } = {}) {
            let i = new URLSearchParams();
            return (
              o(t) && i.set("p", t),
              o(a) && i.set("r", a),
              `/verify/${i.size ? "?" + i : ""}#proof-${e}`
            );
          })(e, { providerId: x, receiptId: f }),
        });
      return [...(e.signedOnly ? [] : [v(b)]), ...(g ? [v("signed")] : [])];
    }
    e.s(["proofBadges", 0, h], 68129);
    var p = e.i(22692);
    function u({ name: e }) {
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
          now: a,
          dark: i = !1,
          linked: s = !0,
          explain: r = !1,
        }) {
          return (0, t.jsx)("span", {
            className: p.default.group,
            "data-dark": i || void 0,
            children: h(e, a).map((e) =>
              (0, t.jsxs)(
                "span",
                {
                  className: p.default.item,
                  children: [
                    s && !r
                      ? (0, t.jsxs)("details", {
                          className: p.default.pop,
                          children: [
                            (0, t.jsxs)("summary", {
                              className: p.default.badge,
                              "data-tone": e.tone,
                              title: `${e.explanation} ${e.context}`,
                              children: [
                                (0, t.jsx)(u, { name: e.icon }),
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
                          children: [(0, t.jsx)(u, { name: e.icon }), e.label],
                        }),
                    r
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
  31303,
  (e) => {
    "use strict";
    var t = e.i(45482);
    let a = (e, t) => {
        let a = e.pricing?.[t],
          i = null == a || "" === a ? NaN : Number(a);
        return Number.isFinite(i) && i >= 0 ? i : 1 / 0;
      },
      i = (e) =>
        Number(e.context_length ?? e.top_provider?.context_length ?? 0) || 0;
    function s(e, { query: r = "", tags: l = [], sort: n = "name" } = {}) {
      let o = {
        priceIn: (e, t) => a(e, "prompt") - a(t, "prompt"),
        priceOut: (e, t) => a(e, "completion") - a(t, "completion"),
        context: (e, t) => i(t) - i(e),
      }[n];
      return (function (e, t = "") {
        let a = t.toLowerCase().trim().split(/\s+/).filter(Boolean);
        return e.filter((e) => {
          let t = [e.id, e.name, e.provider_name, ...(e.provider_names || [])]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();
          return a.every((e) => t.includes(e));
        });
      })(e, r)
        .filter((e) => l.every((a) => (0, t.modelCapabilities)(e).includes(a)))
        .sort(
          (e, t) =>
            o?.(e, t) ||
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
      function (e, a = {}) {
        let i = s(e, a);
        return Object.fromEntries(
          t.MODEL_CAPABILITIES.map((e) => [
            e.key,
            i.filter((a) => (0, t.modelCapabilities)(a).includes(e.key)).length,
          ])
        );
      },
    ]);
  },
]);
