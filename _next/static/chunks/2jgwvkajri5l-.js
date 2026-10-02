(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
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
    function r(e, t = "input") {
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
              s = r(e, "input"),
              i = r(e, "output"),
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
            return a.filter((e) => l[e.key]).map((e) => e.key);
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
        a,
        "hasModelCapability",
        0,
        i,
        "modelCapabilities",
        0,
        s,
        "modelModalities",
        0,
        r,
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
        r = e.data || {},
        s = !1,
        u = !1,
        p = !1,
        f = !1,
        m = !1,
        y = "",
        g = "",
        v = "";
      if ("model" === a)
        (s =
          c(r, t) &&
          c(r.attestation || {}, t) &&
          !1 !== r.attested_available &&
          i(r, "attested")),
          (v =
            "Available endpoint: routing may choose another provider. Ordinary Harness chat is readable by the router.");
      else if ("host" === a)
        (s =
          !0 === r.attested &&
          r.attestation?.status === "attested" &&
          c(r.attestation, t)),
          (y = r.id),
          (v =
            "Router record when loaded; refresh to check again. Build admission is a separate check.");
      else if ("admission" === a)
        (s = !0 === r.attested && c(r, t)),
          (y = e.providerId),
          (v =
            "Router record when loaded; admission and routing health are separate checks.");
      else if ("network" === a) {
        let e = t - Date.parse(r.as_of || "");
        (s =
          Number.isSafeInteger(r.attested_hosts) &&
          r.attested_hosts > 0 &&
          e >= 0 &&
          e < 3e4 &&
          c(r, t)),
          (v =
            "Count of hosts with fresh successful hardware and admission checks in this snapshot; inspect each host record before relying on it.");
      } else if ("sealed" === a)
        v = (s = c(r, t) && !!n(r, t))
          ? `Sealed hosting \xb7 image ${r.agent_image_digest}. Measured code is not audited code.`
          : "Sealed hosting has no current hardware proof in this record.";
      else if ("profile" === a)
        v =
          "This profile does not publish current hardware evidence. Owner-supplied capabilities are separate.";
      else if ("generation" === a)
        (m = !0 === r.live && d(r.signature)),
          (g = r.id),
          (v =
            "This list does not include hardware evidence; inspect the receipt for the path used.");
      else if ("ledger" === a)
        (m = !!l(r.receipt_id)),
          (g = r.receipt_id),
          (v =
            "This ledger records a receipt id; its signature has not been checked in this browser.");
      else if ("receipt" === a) {
        let e = r.payload || {};
        (g = r.id || e.id),
          (y = e.provider),
          (m = d(r.sig)),
          (f = "cache" === e.mode || "cache" === e.provider);
        let a = e.upstream_attestation;
        (u =
          (s =
            !f &&
            "attested" === e.disclosure &&
            !0 !== e.attestation_simulated &&
            c(e, t) &&
            (!a || (!0 === a.attested && c(a, t)))) &&
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
          (v = s
            ? "The receipt records the hardware check for this call; it does not establish a current check for a later call."
            : "");
      } else
        "attestation" === a &&
          ((s = "attested" === r.status && c(r, t)),
          (y = r.provider),
          (v = "Router record when loaded; refresh to check again."));
      let _ = f
          ? "cached"
          : u
          ? "encrypted"
          : p
          ? "unlinkable"
          : s
          ? "hardware"
          : "standard",
        x = (e) => ({
          key: e,
          ...o[e],
          hardware: "signed" !== e && s,
          context: "signed" === e ? "" : v,
          href: (function (e, { providerId: t, receiptId: a } = {}) {
            let r = new URLSearchParams();
            return (
              l(t) && r.set("p", t),
              l(a) && r.set("r", a),
              `/verify/${r.size ? "?" + r : ""}#proof-${e}`
            );
          })(e, { providerId: y, receiptId: g }),
        });
      return [...(e.signedOnly ? [] : [x(_)]), ...(m ? [x("signed")] : [])];
    }
    e.s(["proofBadges", 0, h], 68129);
    var u = e.i(22692);
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
          now: a,
          dark: r = !1,
          linked: s = !0,
          explain: i = !1,
        }) {
          return (0, t.jsx)("span", {
            className: u.default.group,
            "data-dark": r || void 0,
            children: h(e, a).map((e) =>
              (0, t.jsxs)(
                "span",
                {
                  className: u.default.item,
                  children: [
                    s && !i
                      ? (0, t.jsxs)("details", {
                          className: u.default.pop,
                          children: [
                            (0, t.jsxs)("summary", {
                              className: u.default.badge,
                              "data-tone": e.tone,
                              title: `${e.explanation} ${e.context}`,
                              children: [
                                (0, t.jsx)(p, { name: e.icon }),
                                e.label,
                              ],
                            }),
                            (0, t.jsxs)("span", {
                              className: u.default.popover,
                              role: "note",
                              children: [e.explanation, " ", e.context],
                            }),
                          ],
                        })
                      : (0, t.jsxs)("span", {
                          className: u.default.badge,
                          "data-tone": e.tone,
                          title: `${e.explanation} ${e.context}`,
                          children: [(0, t.jsx)(p, { name: e.icon }), e.label],
                        }),
                    i
                      ? (0, t.jsxs)("span", {
                          className: u.default.explanation,
                          children: [e.explanation, " ", e.context],
                        })
                      : !s &&
                        (0, t.jsxs)("span", {
                          className: "sr-only",
                          children: [e.explanation, " ", e.context],
                        }),
                    s &&
                      (0, t.jsx)("a", {
                        className: u.default.check,
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
  66609,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248),
      r = e.i(92882),
      s = e.i(4581),
      i = e.i(78182),
      n = e.i(54036),
      o = e.i(78921);
    function l() {
      let [e, l] = (0, a.useState)(""),
        [d, c] = (0, a.useState)(""),
        [h, u] = (0, a.useState)(null),
        [p, f] = (0, a.useState)(!1);
      async function m(e) {
        if ((u(null), c(""), e)) {
          if (e.size > 8388608) return void c("Choose a JSON file under 8 MB.");
          try {
            l(await e.text());
          } catch {
            c("The file could not be read.");
          }
        }
      }
      async function y(t) {
        t.preventDefault(), c(""), u(null), f(!0);
        try {
          let t = (0, n.parseStatement)(e),
            a = await fetch(s.API_BASE + i.KEYS_PATH);
          if (!a.ok)
            throw Error("The published receipt keys could not be loaded.");
          u(await (0, n.verifyStatement)(t, { keys: await a.json() }));
        } catch (e) {
          c(e.message);
        } finally {
          f(!1);
        }
      }
      return (0, t.jsxs)("section", {
        className: o.default.section,
        "aria-labelledby": "v-statement",
        children: [
          (0, t.jsx)("h2", {
            id: "v-statement",
            children: "Verify a monthly statement",
          }),
          (0, t.jsx)("p", {
            children:
              "Paste or drop signed JSON. The browser checks the canonical JSON signature with the router’s published receipt keys and reconciles its amounts. The JSON stays on your device.",
          }),
          (0, t.jsxs)("form", {
            onSubmit: y,
            onDragOver: (e) => e.preventDefault(),
            onDrop: (e) => {
              e.preventDefault(), m(e.dataTransfer.files[0]);
            },
            children: [
              (0, t.jsxs)("div", {
                className: "field",
                children: [
                  (0, t.jsx)("label", {
                    htmlFor: "statement-file",
                    children: "Choose statement JSON (or drop it here)",
                  }),
                  (0, t.jsx)("input", {
                    type: "file",
                    id: "statement-file",
                    accept: ".json,application/json",
                    onChange: (e) => m(e.target.files[0]),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "field",
                children: [
                  (0, t.jsx)("label", {
                    htmlFor: "statement-json",
                    children: "Signed statement JSON",
                  }),
                  (0, t.jsx)("textarea", {
                    id: "statement-json",
                    value: e,
                    onChange: (e) => {
                      l(e.target.value), u(null);
                    },
                    spellCheck: !1,
                  }),
                ],
              }),
              (0, t.jsx)(r.Button, {
                type: "submit",
                disabled: p,
                children: p ? "Checking…" : "Verify statement",
              }),
            ],
          }),
          d &&
            (0, t.jsx)("p", { role: "alert", className: "error", children: d }),
          h &&
            (0, t.jsxs)("div", {
              role: "status",
              children: [
                (0, t.jsx)("h3", {
                  children: h.valid
                    ? "Signature valid · amounts reconcile"
                    : "Statement did not verify",
                }),
                (0, t.jsx)("ul", {
                  children: h.checks.map((e) =>
                    (0, t.jsxs)(
                      "li",
                      {
                        children: [
                          "pass" === e.status
                            ? "Passed"
                            : "not_checked" === e.status
                            ? "Not checked"
                            : "Failed",
                          ": ",
                          e.detail,
                        ],
                      },
                      e.id
                    )
                  ),
                }),
                h.notChecked.map((e) => (0, t.jsx)("p", { children: e }, e)),
              ],
            }),
        ],
      });
    }
    var d = e.i(86700);
    let c = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/,
      h = (e) => c.test(String(e ?? "")),
      u = [
        ["output", "Output and usage"],
        ["prompt_readers", "Who could read the request"],
        ["network", "Who saw your address"],
        ["payment", "How it was paid"],
        ["stored", "What was kept"],
        ["hardware", "What hardware answered"],
      ],
      p = {
        public: "Public lane",
        attested: "Attested lane",
        unlinkable: "Unlinkable lane",
      },
      f = (e, t = 1600) => ("string" == typeof e ? e.slice(0, t) : ""),
      m = {
        yes: "Yes",
        no: "No",
        partial: "Partly",
        bad: "Problem",
        simulated: "Simulated",
        known: "Reported",
        unknown: "Unknown",
        pass: "Passed",
        fail: "Failed",
        not_checked: "Not checked",
      },
      y = ({ state: e }) =>
        (0, t.jsx)("span", {
          className: o.default.state,
          "data-state": e,
          children: m[e] || e,
        }),
      g = (e) => {
        let t = Date.parse(e || "");
        return Number.isFinite(t)
          ? new Date(t)
              .toISOString()
              .replace("T", " ")
              .replace(/\.\d+Z$/, " UTC")
          : "";
      },
      v = `import { AnyRoute } from "@anyroute/client";

const client = new AnyRoute({ baseUrl: "https://<router>", apiKey: process.env.ANYROUTE_API_KEY });

// Reads the router's record and the provider's own /attest, checks the quote binds its TLS key and digests,
// and throws AttestationRefused before anything is sent if a check fails.
const res = await client.chat.completions.create(
  { model: "<model>", messages: [{ role: "user", content: "Hello" }] },
  { attested: { providerId: "<provider id>", attestUrl: "https://<provider>/attest", expected: { modelDigest: "sha256:<digest you expect>" } } },
);
console.log(res.anyroute.receiptVerification.valid);`;
    function _({ providerId: e, note: a }) {
      return (0, t.jsxs)("div", {
        className: o.default.section,
        children: [
          (0, t.jsxs)("form", {
            className: o.default.lookup,
            action: "/verify/",
            method: "get",
            children: [
              (0, t.jsxs)("div", {
                className: "field",
                children: [
                  (0, t.jsx)("label", {
                    htmlFor: "provider-id",
                    children: "Provider id",
                  }),
                  (0, t.jsx)("input", {
                    id: "provider-id",
                    name: "p",
                    defaultValue: e,
                    placeholder: "the id shown next to a model’s provider",
                    autoComplete: "off",
                    spellCheck: "false",
                    maxLength: 128,
                  }),
                ],
              }),
              (0, t.jsx)(r.Button, { type: "submit", children: "Look up" }),
            ],
          }),
          a &&
            (0, t.jsx)("p", {
              className: o.default.help,
              role: "status",
              children: a,
            }),
        ],
      });
    }
    function x({ receiptId: e, asked: a, load: s, view: i }) {
      return (0, t.jsxs)("section", {
        className: o.default.section,
        "aria-labelledby": "v-saw",
        children: [
          (0, t.jsx)("h2", { id: "v-saw", children: "What we saw" }),
          (0, t.jsxs)("p", {
            className: o.default.lead,
            children: [
              "A plain-English reading of a receipt: output and usage, who could read the request, who saw your address, how it was paid, what was kept and what hardware answered. The router works it out from the signed receipt, and on ordinary chat paths it reads the prompt in memory to route it. The encrypted-chat path forwards ciphertext. Enter the id from the ",
              (0, t.jsx)("span", {
                className: "mono",
                children: "X-Receipt-Id",
              }),
              " header.",
            ],
          }),
          (0, t.jsxs)("form", {
            className: o.default.lookup,
            action: "/verify/",
            method: "get",
            children: [
              (0, t.jsxs)("div", {
                className: "field",
                children: [
                  (0, t.jsx)("label", {
                    htmlFor: "receipt-id",
                    children: "Receipt id",
                  }),
                  (0, t.jsx)("input", {
                    id: "receipt-id",
                    name: "r",
                    defaultValue: e,
                    placeholder: "gen-…",
                    autoComplete: "off",
                    spellCheck: "false",
                    maxLength: 128,
                  }),
                ],
              }),
              (0, t.jsx)(r.Button, {
                type: "submit",
                children: "Show what we saw",
              }),
            ],
          }),
          a &&
            !e &&
            (0, t.jsx)("p", {
              className: o.default.help,
              role: "status",
              children:
                "That is not a valid receipt id. Ids use letters, digits and . _ : -",
            }),
          "loading" === s &&
            (0, t.jsxs)("p", {
              className: o.default.lead,
              role: "status",
              children: [
                "Reading the receipt ",
                (0, t.jsx)("span", { className: "mono", children: e }),
                "…",
              ],
            }),
          "missing" === s &&
            (0, t.jsxs)("div", {
              className: o.default.verdict,
              "data-tone": "bad",
              role: "status",
              children: [
                (0, t.jsxs)("div", {
                  className: o.default.verdictHead,
                  children: [
                    (0, t.jsx)("h2", { children: "Unknown receipt" }),
                    (0, t.jsx)("span", {
                      className: o.default.who,
                      children: e,
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  children: "The router has no receipt with this id.",
                }),
              ],
            }),
          "error" === s &&
            (0, t.jsx)("div", {
              className: "error",
              role: "alert",
              children:
                "The router could not be reached, or did not send a label, so nothing is shown for this receipt. Try again.",
            }),
          i &&
            (0, t.jsxs)("div", {
              className: o.default.result,
              role: "status",
              children: [
                (0, t.jsxs)("div", {
                  className: o.default.verdict,
                  children: [
                    (0, t.jsxs)("div", {
                      className: o.default.verdictHead,
                      children: [
                        (0, t.jsx)("h2", { children: i.lane }),
                        i.id &&
                          (0, t.jsx)("span", {
                            className: o.default.who,
                            children: i.id,
                          }),
                      ],
                    }),
                    (0, t.jsx)("ul", {
                      className: o.default.gaps,
                      children: i.summary.map((e, a) =>
                        (0, t.jsx)("li", { children: e }, a)
                      ),
                    }),
                  ],
                }),
                i.rows.length > 0 &&
                  (0, t.jsx)("div", {
                    className: o.default.panel,
                    children: (0, t.jsx)("dl", {
                      className: o.default.facts,
                      children: i.rows.map((e) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            className: o.default.fact,
                            children: [
                              (0, t.jsx)("dt", { children: e.title }),
                              (0, t.jsx)("dd", { children: e.text }),
                            ],
                          },
                          e.key
                        )
                      ),
                    }),
                  }),
                (0, t.jsxs)("p", {
                  className: o.default.help,
                  children: [
                    "This is the router’s reading of the receipt. It does not check the receipt’s signature; the checker below does. ",
                    (0, t.jsx)("span", {
                      className: "mono",
                      children: "privacyLabel(receipt)",
                    }),
                    " in ",
                    (0, t.jsx)("span", {
                      className: "mono",
                      children: "@anyroute/client",
                    }),
                    " computes the same label from a receipt you hold.",
                  ],
                }),
              ],
            }),
        ],
      });
    }
    function b({ view: e }) {
      let a = e.rows,
        s = e.measurement,
        i = e.transparencyLog,
        n = e.registry;
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsxs)("div", {
            className: o.default.verdict,
            "data-tone": e.verdict.tone,
            role: "status",
            children: [
              (0, t.jsxs)("div", {
                className: o.default.verdictHead,
                children: [
                  (0, t.jsx)(d.default, {
                    evidence: {
                      source: "attestation",
                      data: { status: e.status, provider: e.provider },
                    },
                  }),
                  e.provider &&
                    (0, t.jsx)("span", {
                      className: o.default.who,
                      children: e.provider,
                    }),
                ],
              }),
              (0, t.jsx)("p", { children: e.verdict.text }),
            ],
          }),
          (0, t.jsxs)("section", {
            className: o.default.section,
            "aria-labelledby": "v-record",
            children: [
              (0, t.jsx)("h2", {
                id: "v-record",
                children: "What the router recorded",
              }),
              (0, t.jsx)("div", {
                className: o.default.panel,
                children: (0, t.jsxs)("dl", {
                  className: o.default.facts,
                  children: [
                    (0, t.jsxs)("div", {
                      className: o.default.fact,
                      children: [
                        (0, t.jsx)("dt", { children: a.tee.label }),
                        (0, t.jsx)("dd", {
                          children: (0, t.jsxs)("div", {
                            className: o.default.row,
                            children: [
                              (0, t.jsx)(y, { state: a.tee.state }),
                              (0, t.jsx)("span", { children: a.tee.value }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: o.default.fact,
                      children: [
                        (0, t.jsx)("dt", { children: a.verifiers.label }),
                        (0, t.jsx)("dd", {
                          children: a.verifiers.value.length
                            ? a.verifiers.value.map((e) =>
                                (0, t.jsxs)(
                                  "div",
                                  {
                                    className: o.default.row,
                                    children: [
                                      (0, t.jsx)(y, { state: "yes" }),
                                      (0, t.jsx)("span", { children: e }),
                                    ],
                                  },
                                  e
                                )
                              )
                            : (0, t.jsxs)("div", {
                                className: o.default.row,
                                children: [
                                  (0, t.jsx)(y, { state: "no" }),
                                  (0, t.jsx)("span", {
                                    children: a.verifiers.empty,
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: o.default.fact,
                      children: [
                        (0, t.jsx)("dt", { children: a.lastVerified.label }),
                        (0, t.jsx)("dd", {
                          children: a.lastVerified.value
                            ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: o.default.row,
                                    children: [
                                      (0, t.jsx)(y, { state: "yes" }),
                                      (0, t.jsx)("span", {
                                        children: g(a.lastVerified.value),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: o.default.sub,
                                    children: [
                                      a.lastVerified.relative,
                                      ". Read when you opened this page; reload to refresh.",
                                    ],
                                  }),
                                ],
                              })
                            : (0, t.jsxs)("div", {
                                className: o.default.row,
                                children: [
                                  (0, t.jsx)(y, { state: "no" }),
                                  (0, t.jsx)("span", {
                                    children: a.lastVerified.empty,
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: o.default.fact,
                      children: [
                        (0, t.jsx)("dt", { children: "Software and model" }),
                        (0, t.jsx)("dd", {
                          children: s.recorded
                            ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: o.default.row,
                                    children: [
                                      (0, t.jsx)(y, {
                                        state: s.currentlyAttested
                                          ? "yes"
                                          : "no",
                                      }),
                                      (0, t.jsx)("span", {
                                        children: s.currentlyAttested
                                          ? "These digests are what the provider is running now, as attested."
                                          : "Last seen, not currently attested. Do not rely on these for a live request.",
                                      }),
                                    ],
                                  }),
                                  s.digests.map((e) =>
                                    (0, t.jsxs)(
                                      "div",
                                      {
                                        children: [
                                          (0, t.jsx)("span", {
                                            className: o.default.sub,
                                            children: e.label,
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: o.default.digest,
                                            children: [
                                              (0, t.jsx)("code", {
                                                children:
                                                  e.value || "not recorded",
                                              }),
                                              e.value &&
                                                (0, t.jsx)(r.CopyButton, {
                                                  text: e.value,
                                                }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.key
                                    )
                                  ),
                                  (0, t.jsx)("span", {
                                    className: o.default.sub,
                                    children:
                                      "These are values the provider’s software committed to inside its quote. They are not derived from the hardware registers, and they name a build, not its source code.",
                                  }),
                                ],
                              })
                            : (0, t.jsxs)("div", {
                                className: o.default.row,
                                children: [
                                  (0, t.jsx)(y, { state: "no" }),
                                  (0, t.jsx)("span", {
                                    children:
                                      "No measurement is recorded, so the router cannot say which software or model is running.",
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: o.default.fact,
                      children: [
                        (0, t.jsx)("dt", { children: "Transparency log" }),
                        (0, t.jsxs)("dd", {
                          children: [
                            (0, t.jsxs)("div", {
                              className: o.default.row,
                              children: [
                                (0, t.jsx)(y, { state: i.state }),
                                (0, t.jsx)("span", { children: i.text }),
                              ],
                            }),
                            null !== i.index &&
                              (0, t.jsxs)("span", {
                                className: o.default.sub,
                                children: [
                                  "Log index ",
                                  i.index,
                                  i.integratedAt
                                    ? `, integrated ${g(i.integratedAt)}`
                                    : "",
                                ],
                              }),
                            i.bundleDigest &&
                              (0, t.jsxs)("span", {
                                className: o.default.sub,
                                children: ["Bundle digest ", i.bundleDigest],
                              }),
                            i.entryUrl &&
                              (0, t.jsx)("span", {
                                className: o.default.sub,
                                children: (0, t.jsx)("a", {
                                  href: i.entryUrl,
                                  rel: "noopener noreferrer",
                                  children: "Read the log entry from the log",
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: o.default.fact,
                      children: [
                        (0, t.jsx)("dt", { children: "On-chain registry" }),
                        (0, t.jsxs)("dd", {
                          children: [
                            (0, t.jsxs)("div", {
                              className: o.default.row,
                              children: [
                                (0, t.jsx)(y, { state: n.state }),
                                (0, t.jsx)("span", { children: n.text }),
                              ],
                            }),
                            n.tx &&
                              (0, t.jsxs)("span", {
                                className: o.default.sub,
                                children: ["Transaction ", n.tx],
                              }),
                            n.address &&
                              (0, t.jsxs)("span", {
                                className: o.default.sub,
                                children: ["Registry ", n.address],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, t.jsxs)("section", {
            className: o.default.section,
            "aria-labelledby": "v-checks",
            children: [
              (0, t.jsx)("h2", {
                id: "v-checks",
                children: "Each check, yes or no",
              }),
              (0, t.jsx)("div", {
                className: o.default.panel,
                children: (0, t.jsx)("ul", {
                  className: o.default.list,
                  children: e.checks.map((e) =>
                    (0, t.jsxs)(
                      "li",
                      {
                        children: [
                          (0, t.jsx)(y, { state: e.state }),
                          (0, t.jsx)("span", { children: e.label }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              }),
            ],
          }),
          (0, t.jsxs)("section", {
            className: o.default.section,
            "aria-labelledby": "v-gaps",
            children: [
              (0, t.jsx)("h2", { id: "v-gaps", children: "Not checked" }),
              (0, t.jsx)("p", {
                className: o.default.lead,
                children:
                  "Things this record does not establish. A green mark above does not cover any of them.",
              }),
              (0, t.jsx)("ul", {
                className: o.default.gaps,
                children: e.notChecked.map((e, a) =>
                  (0, t.jsx)("li", { children: e }, a)
                ),
              }),
            ],
          }),
        ],
      });
    }
    let k = {
      true: ["pass", "Signature valid"],
      false: ["fail", "Does not verify"],
    };
    function w({ providerId: e }) {
      let [n, l] = (0, a.useState)(""),
        [d, c] = (0, a.useState)(""),
        [h, u] = (0, a.useState)(!1),
        [p, f] = (0, a.useState)(""),
        [m, g] = (0, a.useState)(null);
      async function v(e) {
        e.preventDefault(), f(""), g(null);
        let t = (0, i.parseReceiptInput)(n);
        if (t.error) return void f(t.error);
        u(!0);
        try {
          let e = null;
          if (!d.trim()) {
            let t = await fetch(s.API_BASE + i.KEYS_PATH, {
              headers: { accept: "application/json" },
            });
            if (!t.ok) throw Error("keys " + t.status);
            e = await t.json();
          }
          g({
            receipt: t.receipt,
            result: await (0, i.verifyReceipt)(t.receipt, {
              keys: e,
              publicKeyHex: d.trim() || void 0,
            }),
            ownKey: !!d.trim(),
          });
        } catch {
          f(
            "Could not load the router’s published receipt keys. Check your connection, or enter a public key you trust below."
          );
        } finally {
          u(!1);
        }
      }
      let _ = m?.result,
        x = m?.receipt,
        [b, j] = _
          ? _.checks.some(
              (e) =>
                ("signature" === e.id || "v2_signature" === e.id) &&
                "not_checked" === e.status
            )
            ? ["not_checked", "Could not be checked here"]
            : k[_.valid]
          : [],
        N = x?.payload?.provider ?? _?.claims?.node?.provider;
      return (0, t.jsxs)("section", {
        className: `${o.default.section} ${o.default.receipt}`,
        "aria-labelledby": "v-receipt",
        children: [
          (0, t.jsx)("h2", { id: "v-receipt", children: "Verify a receipt" }),
          (0, t.jsxs)("p", {
            className: o.default.lead,
            children: [
              "Paste a receipt from a response, or from ",
              (0, t.jsx)("span", {
                className: "mono",
                children: "GET /api/v1/receipts/<id>",
              }),
              ". It is checked in this browser against the keys the router publishes at ",
              (0, t.jsx)("span", { className: "mono", children: i.KEYS_PATH }),
              ". A receipt with a v2 (COSE) encoding gets that checked too: signature, chain head and Merkle path. Nothing you paste is sent anywhere.",
            ],
          }),
          (0, t.jsxs)("form", {
            onSubmit: v,
            children: [
              (0, t.jsxs)("div", {
                className: "field",
                children: [
                  (0, t.jsx)("label", {
                    htmlFor: "receipt-json",
                    children: "Receipt (JSON)",
                  }),
                  (0, t.jsx)("textarea", {
                    id: "receipt-json",
                    value: n,
                    onChange: (e) => l(e.target.value),
                    spellCheck: "false",
                    autoComplete: "off",
                    placeholder:
                      '{ "payload": { … }, "sig": "…", "key_id": "…" }',
                  }),
                ],
              }),
              (0, t.jsxs)("details", {
                className: o.default.more,
                children: [
                  (0, t.jsx)("summary", {
                    children: "Check against a key I trust instead",
                  }),
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("p", {
                        className: o.default.help,
                        children:
                          "For a receipt a provider’s sidecar signed with its own enclave key, the router’s list will not contain the key. Enter that key (64 hex characters, the receipt_pubkey the provider’s quote commits to) to check against it.",
                      }),
                      (0, t.jsxs)("div", {
                        className: "field",
                        style: { margin: 0 },
                        children: [
                          (0, t.jsx)("label", {
                            htmlFor: "receipt-key",
                            children: "Ed25519 public key (hex)",
                          }),
                          (0, t.jsx)("input", {
                            id: "receipt-key",
                            value: d,
                            onChange: (e) => c(e.target.value),
                            spellCheck: "false",
                            autoComplete: "off",
                            className: "mono",
                            maxLength: 70,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: o.default.actions,
                style: { marginTop: 18 },
                children: (0, t.jsx)(r.Button, {
                  type: "submit",
                  disabled: h,
                  children: h ? "Checking…" : "Verify receipt",
                }),
              }),
            ],
          }),
          p &&
            (0, t.jsx)("div", {
              className: "error",
              role: "alert",
              children: p,
            }),
          _ &&
            (0, t.jsxs)("div", {
              className: o.default.result,
              role: "status",
              children: [
                (0, t.jsxs)("div", {
                  className: o.default.verdict,
                  "data-tone": _.valid
                    ? "ok"
                    : "not_checked" === b
                    ? "warn"
                    : "bad",
                  children: [
                    (0, t.jsxs)("div", {
                      className: o.default.verdictHead,
                      children: [
                        (0, t.jsx)("h2", { children: j }),
                        (0, t.jsx)(y, { state: b }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      children: _.valid
                        ? "This receipt’s contents are exactly what the holder of that key signed. That is all it shows: not that the answer was correct, and not what the provider did with your prompt."
                        : "not_checked" === b
                        ? "This browser could not run the signature check, so nothing was verified."
                        : "Do not rely on this receipt.",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: o.default.panel,
                  children: (0, t.jsx)("ul", {
                    className: o.default.list,
                    children: _.checks.map((e) =>
                      (0, t.jsxs)(
                        "li",
                        {
                          children: [
                            (0, t.jsx)(y, { state: e.status }),
                            (0, t.jsx)("span", { children: e.detail }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                }),
                !m.ownKey &&
                  (0, i.isEnclaveReceipt)(x) &&
                  (0, t.jsx)("div", {
                    className: o.default.hint,
                    children:
                      "This receipt was signed by a provider’s enclave key, not by the router, so the router’s key list is not the place to check it. Use “Check against a key I trust instead” with the provider’s attested receipt key, or verify it with an SDK against the provider’s attestation.",
                  }),
                e &&
                  N &&
                  N !== e &&
                  (0, t.jsxs)("div", {
                    className: o.default.hint,
                    children: [
                      "This receipt names provider ",
                      (0, t.jsx)("span", {
                        className: "mono",
                        children: String(N),
                      }),
                      ", not ",
                      (0, t.jsx)("span", { className: "mono", children: e }),
                      ".",
                    ],
                  }),
                (0, t.jsx)("ul", {
                  className: o.default.gaps,
                  children: _.notChecked.map((e, a) =>
                    (0, t.jsx)("li", { children: e }, a)
                  ),
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
          let [e, n] = (0, a.useState)(""),
            [d, c] = (0, a.useState)(!1),
            [m, y] = (0, a.useState)("idle"),
            [g, k] = (0, a.useState)(null),
            [j, N] = (0, a.useState)(0),
            [A, S] = (0, a.useState)(!1),
            [T, $] = (0, a.useState)(""),
            [E, C] = (0, a.useState)(!1),
            [O, I] = (0, a.useState)("idle"),
            [R, D] = (0, a.useState)(null);
          (0, a.useEffect)(() => {
            let e,
              t,
              a = new URLSearchParams(location.search),
              r = h(
                (t = (
                  (e = new URLSearchParams(
                    String(location.search || "").replace(/^\?/, "")
                  )).get("r") ||
                  e.get("receipt") ||
                  ""
                ).trim())
              )
                ? t
                : "";
            if (($(r), C(a.has("r") || a.has("receipt")), !r)) return;
            let i = new AbortController();
            return (
              I("loading"),
              fetch(
                s.API_BASE +
                  `/api/v1/receipts/${encodeURIComponent(r)}/privacy`,
                { signal: i.signal, headers: { accept: "application/json" } }
              )
                .then(async (e) => {
                  if (404 === e.status) return void I("missing");
                  if (!e.ok) throw Error(String(e.status));
                  let t = (function (e) {
                    let t =
                      e &&
                      "object" == typeof e &&
                      e.data &&
                      "object" == typeof e.data
                        ? e.data
                        : e;
                    if (
                      !t ||
                      "object" != typeof t ||
                      !Array.isArray(t.summary) ||
                      !t.label ||
                      "object" != typeof t.label
                    )
                      return null;
                    let a = t.summary
                      .filter((e) => "string" == typeof e && e)
                      .map((e) => e.slice(0, 400))
                      .slice(0, 5);
                    if (!a.length) return null;
                    let r = u
                      .map(([e, a]) => ({
                        key: e,
                        title: a,
                        text: f(t.label[e]?.text),
                      }))
                      .filter((e) => e.text);
                    return {
                      id: h(t.receipt_id) ? t.receipt_id : "",
                      lane: p[t.lane] || "Lane not recorded in this receipt",
                      summary: a,
                      rows: r,
                      short: f(t.short, 400),
                    };
                  })(await e.json());
                  if (!t) throw Error("shape");
                  D(t), I("ok");
                })
                .catch((e) => {
                  e?.name !== "AbortError" && I("error");
                }),
              () => i.abort()
            );
          }, []),
            (0, a.useEffect)(() => {
              let e = new URLSearchParams(location.search),
                t = (0, i.providerIdFromSearch)(location.search);
              if ((n(t), S(e.has("p") || e.has("provider")), c(!0), !t)) return;
              let a = new AbortController();
              return (
                y("loading"),
                fetch(s.API_BASE + (0, i.attestationPath)(t), {
                  signal: a.signal,
                  headers: { accept: "application/json" },
                })
                  .then(async (e) => {
                    if (404 === e.status) return void y("missing");
                    if (!e.ok) throw Error(String(e.status));
                    k((await e.json()).data), N(Date.now()), y("ok");
                  })
                  .catch((e) => {
                    e?.name !== "AbortError" && y("error");
                  }),
                () => a.abort()
              );
            }, []);
          let K = "ok" === m ? (0, i.describeAttestation)(g, j) : null;
          return (0, t.jsxs)("div", {
            className: o.default.stack,
            children: [
              (0, t.jsx)(_, {
                providerId: e,
                note:
                  d && A && !e
                    ? "That is not a valid provider id. Ids use letters, digits and . _ : -"
                    : "",
              }),
              "loading" === m &&
                (0, t.jsxs)("p", {
                  className: o.default.lead,
                  role: "status",
                  children: [
                    "Reading the router’s record for ",
                    (0, t.jsx)("span", { className: "mono", children: e }),
                    "…",
                  ],
                }),
              "missing" === m &&
                (0, t.jsxs)("div", {
                  className: o.default.verdict,
                  "data-tone": "bad",
                  role: "status",
                  children: [
                    (0, t.jsxs)("div", {
                      className: o.default.verdictHead,
                      children: [
                        (0, t.jsx)("h2", { children: "Unknown provider" }),
                        (0, t.jsx)("span", {
                          className: o.default.who,
                          children: e,
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      children:
                        "The router has no live provider with this id. Nothing about it is verified.",
                    }),
                  ],
                }),
              "error" === m &&
                (0, t.jsx)("div", {
                  className: "error",
                  role: "alert",
                  children:
                    "The router could not be reached, so nothing is known about this provider from here. That is not the same as “not attested”; try again.",
                }),
              K && (0, t.jsx)(b, { view: K }),
              (0, t.jsx)(x, {
                receiptId: T,
                asked: E,
                load: O,
                view: "ok" === O ? R : null,
              }),
              (0, t.jsx)(w, { providerId: e }),
              (0, t.jsx)(l, {}),
              " ",
              (0, t.jsxs)("section", {
                className: o.default.section,
                "aria-labelledby": "v-sdk",
                children: [
                  (0, t.jsx)("h2", {
                    id: "v-sdk",
                    children: "Check the provider itself",
                  }),
                  (0, t.jsxs)("p", {
                    className: o.default.lead,
                    children: [
                      "The record above is the router’s account. The SDKs go further before they send anything: they read the provider’s own ",
                      (0, t.jsx)("span", {
                        className: "mono",
                        children: "/attest",
                      }),
                      ", check that the quote commits to its TLS key and digests, that its certificate name is derived from the quote, and refuse if any of it fails. They do not repeat Intel’s signature check on the quote; the router does that, and the SDK says so in its report.",
                    ],
                  }),
                  (0, t.jsx)(r.Code, {
                    label: "JavaScript · @anyroute/client",
                    children: v,
                  }),
                  (0, t.jsx)("div", {
                    className: o.default.actions,
                    children: (0, t.jsx)(r.Button, {
                      href: "/docs/#sdk",
                      secondary: !0,
                      children: "SDK documentation",
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("section", {
                className: o.default.section,
                "aria-labelledby": "v-registry",
                children: [
                  (0, t.jsx)("h2", {
                    id: "v-registry",
                    children: "History and badge",
                  }),
                  (0, t.jsx)("p", {
                    className: o.default.lead,
                    children:
                      "The registry keeps every measurement the router verified for an attested provider, and every check it ran. Each entry has a badge any site can embed, which re-reads this record from the visitor’s browser and shows Attested only when the checks pass.",
                  }),
                  (0, t.jsxs)("div", {
                    className: o.default.actions,
                    children: [
                      (0, t.jsx)(r.Button, {
                        href:
                          e && K
                            ? `/registry/${encodeURIComponent(e)}/`
                            : "/registry/",
                        children:
                          e && K
                            ? "Open its registry entry"
                            : "Open the registry",
                      }),
                      (0, t.jsx)(r.Button, {
                        href: "/docs/#badge",
                        secondary: !0,
                        children: "Badge docs",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
      ],
      66609
    );
  },
  78921,
  (e) => {
    e.v({
      actions: "Verify-module__A2KefG__actions",
      digest: "Verify-module__A2KefG__digest",
      fact: "Verify-module__A2KefG__fact",
      facts: "Verify-module__A2KefG__facts",
      field: "Verify-module__A2KefG__field",
      gaps: "Verify-module__A2KefG__gaps",
      help: "Verify-module__A2KefG__help",
      hint: "Verify-module__A2KefG__hint",
      lead: "Verify-module__A2KefG__lead",
      list: "Verify-module__A2KefG__list",
      lookup: "Verify-module__A2KefG__lookup",
      more: "Verify-module__A2KefG__more",
      panel: "Verify-module__A2KefG__panel",
      receipt: "Verify-module__A2KefG__receipt",
      result: "Verify-module__A2KefG__result",
      row: "Verify-module__A2KefG__row",
      section: "Verify-module__A2KefG__section",
      stack: "Verify-module__A2KefG__stack",
      state: "Verify-module__A2KefG__state",
      sub: "Verify-module__A2KefG__sub",
      verdict: "Verify-module__A2KefG__verdict",
      verdictHead: "Verify-module__A2KefG__verdictHead",
      who: "Verify-module__A2KefG__who",
    });
  },
  54036,
  (e) => {
    "use strict";
    var t = e.i(78182);
    let a = (e) => {
      if ("string" != typeof e || !/^-?\d+(\.\d{1,12})?$/.test(e))
        throw Error("A statement amount is invalid.");
      let [t, a = ""] = e.replace(/^-/, "").split(".");
      return (
        (1000000000000n * BigInt(t) + BigInt(a.padEnd(12, "0"))) *
        (e.startsWith("-") ? -1n : 1n)
      );
    };
    async function r(e, r) {
      if (e?.payload?.type !== "anyroute.statement.v1")
        throw Error("This is not a monthly statement.");
      let s = await (0, t.verifyReceipt)(e, r),
        i = (function (e) {
          try {
            if (
              a(e.opening_balance) +
                a(e.deposits) +
                a(e.refunds) -
                a(e.usage) -
                a(e.fees) +
                a(e.other_changes) !==
              a(e.closing_balance)
            )
              return !1;
            for (let t of [
              "usage_by_model",
              "usage_by_key_agent",
              "usage_by_lane",
            ])
              if (
                !Array.isArray(e[t]) ||
                e[t].reduce((e, t) => e + a(t.amount), 0n) !== a(e.usage)
              )
                return !1;
            return (
              Array.isArray(e.movements_by_kind) &&
              a(e.opening_balance) +
                e.movements_by_kind.reduce((e, t) => e + a(t.amount), 0n) ===
                a(e.closing_balance)
            );
          } catch {
            return !1;
          }
        })(e.payload);
      return {
        ...s,
        valid: s.valid && i,
        checks: [
          ...s.checks,
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
        let a = URL.createObjectURL(
            new Blob([JSON.stringify(e, null, 2)], { type: "application/json" })
          ),
          r = document.createElement("a");
        (r.href = a),
          (r.download = t),
          r.click(),
          setTimeout(() => URL.revokeObjectURL(a), 1e3);
      },
      "parseStatement",
      0,
      function (e) {
        let t = JSON.parse(e),
          a = t?.data ?? t;
        if (a?.payload?.type !== "anyroute.statement.v1" || !a.sig || !a.key_id)
          throw Error("Choose a signed monthly statement JSON file.");
        return a;
      },
      "statementPath",
      0,
      (e) => "/api/v1/statements/" + encodeURIComponent(e),
      "verifyStatement",
      0,
      r,
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
      i = (e) => e && "object" == typeof e && !Array.isArray(e),
      n = (e, t) =>
        i(e) &&
        Object.entries(e).every(
          ([e, a]) => t.includes(e) && Number.isSafeInteger(a) && a > 0
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
        n(e.skipped, a) &&
        ["public", "attested", "unlinkable"].includes(e.lane) &&
        "boolean" == typeof e.network_host &&
        Array.isArray(e.parameters) &&
        e.parameters.length <= s.length &&
        new Set(e.parameters).size === e.parameters.length &&
        e.parameters.every((e) => s.includes(e)) &&
        ("fallback" === e.reason
          ? n(e.fallback, r) && Object.keys(e.fallback).length > 0
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
    let c = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/,
      h = {
        no_attestation: "The router has never verified this provider.",
        last_attempt_failed:
          "The router's most recent attempt to verify this provider failed.",
        attestation_stale:
          "The router's last successful verification is too old to rely on.",
        simulated_evidence_refused:
          "The only evidence is simulated (development) evidence, which this router does not accept.",
      },
      u = {
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
    let g = (e) =>
        "string" == typeof e && e.length > 22
          ? `${e.slice(0, 12)}…${e.slice(-8)}`
          : e || "",
      v = (e) => (e ? "yes" : "no"),
      _ = (e) => new TextEncoder().encode(e),
      x = (e) => Array.from(e, (e) => e.toString(16).padStart(2, "0")).join("");
    function b(e) {
      let t = String(e).replace(/^0x/i, "");
      if (t.length % 2 || /[^0-9a-fA-F]/.test(t)) throw Error("invalid hex");
      return Uint8Array.from(t.match(/../g) || [], (e) => parseInt(e, 16));
    }
    function k(e) {
      let t = String(e).trim();
      if (!/^[A-Za-z0-9+/_-]*={0,2}$/.test(t)) throw Error("invalid base64");
      let a = t.replace(/-/g, "+").replace(/_/g, "/").replace(/=+$/, ""),
        r = atob(a + "=".repeat((4 - (a.length % 4)) % 4));
      return Uint8Array.from(r, (e) => e.charCodeAt(0));
    }
    let w = (...e) => {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          a = 0;
        for (let r of e) t.set(r, a), (a += r.length);
        return t;
      },
      j = async (e) => new Uint8Array(await crypto.subtle.digest("SHA-256", e)),
      N = (1n << 64n) - 1n,
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
      S = [
        0, 1, 62, 28, 27, 36, 44, 6, 55, 20, 3, 10, 43, 25, 39, 41, 45, 15, 21,
        8, 18, 2, 61, 56, 14,
      ],
      T = (e, t) =>
        0 === t ? e : ((e << BigInt(t)) | (e >> BigInt(64 - t))) & N;
    function $(e) {
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
            let t = r[(e + 4) % 5] ^ T(r[(e + 1) % 5], 1);
            for (let r = 0; r < 25; r += 5) a[e + r] ^= t;
          }
          for (let e = 0; e < 5; e++)
            for (let t = 0; t < 5; t++)
              s[t + ((2 * e + 3 * t) % 5) * 5] = T(a[e + 5 * t], S[e + 5 * t]);
          for (let e = 0; e < 25; e += 5)
            for (let t = 0; t < 5; t++)
              a[t + e] =
                s[t + e] ^ (~s[((t + 1) % 5) + e] & N & s[((t + 2) % 5) + e]);
          a[0] ^= A[e];
        }
      }
      let i = new Uint8Array(32);
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 8; t++)
          i[8 * e + t] = Number((a[e] >> BigInt(8 * t)) & 255n);
      return i;
    }
    let E = (e, t) => {
      for (let a = 0; a < Math.min(e.length, t.length); a++)
        if (e[a] !== t[a]) return e[a] - t[a];
      return e.length - t.length;
    };
    function C(e, t, a) {
      try {
        let r = b(e);
        for (let e of t) {
          let t = b(e);
          r = $(0 > E(r, t) ? w(r, t) : w(t, r));
        }
        return x(r) === x(b(a));
      } catch {
        return !1;
      }
    }
    async function O(e, t, a) {
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
      R = (e, t) => ({ id: e, status: "fail", detail: t }),
      D = (e, t) => ({ id: e, status: "not_checked", detail: t }),
      K = [
        "That the signing key is the one registered on chain: compare the key id with the ReceiptAnchor contract, or pin the key yourself.",
        "That an anchor root was posted on chain: an inclusion proof shows the receipt sits under a root, not that the root was published.",
      ];
    async function U(e, t = {}) {
      let a =
          "string" == typeof e?.cose
            ? e.cose
            : "string" == typeof e?.v2?.cose
            ? e.v2.cose
            : null,
        r = {
          keys: t.keys,
          publicKeyHex: t.publicKeyHex,
          ed25519: t.ed25519 || O,
          chunks: t.chunks,
        };
      if (a && !e.payload) {
        let t = await G(a, { ...r, proof: e.anchor });
        return {
          valid: t.valid,
          keyId: t.keyId,
          checks: t.checks,
          anchor: P(t.checks),
          notChecked: K,
          claims: t.claims,
        };
      }
      let s = await B(e, t);
      if (!a) return s;
      let i = await G(a, { ...r, proof: e.v2?.anchor });
      return {
        ...s,
        valid: s.valid && i.valid,
        checks: [...s.checks, ...i.checks],
        claims: i.claims,
      };
    }
    let P = (e) => {
      let t = e.find((e) => "v2_anchor_proof" === e.id);
      return t?.status === "pass"
        ? "proof_valid"
        : t?.status === "fail"
        ? "proof_invalid"
        : "no_proof";
    };
    async function B(
      e,
      { keys: t, publicKeyHex: a, ed25519: r = O, skewMs: s = 3e5 } = {}
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
          notChecked: K,
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
          i.push(R("shape", "A receipt needs payload, sig and key_id.")),
          l("no_proof")
        );
      void 0 !== e.payload.route &&
        i.push(
          o(e.payload.route, e.payload.provider)
            ? I(
                "route",
                "Route explanation v1 is a router-signed summary, not independent proof of selection."
              )
            : R("route", "Invalid route explanation.")
        ),
        i.push(
          void 0 === e.alg || "Ed25519" === e.alg
            ? I("alg", "Ed25519")
            : R("alg", `Unsupported algorithm ${String(e.alg)}.`)
        );
      let d = null,
        c = null,
        h = async (e) => x(await j(e)).slice(0, 16);
      if (a) {
        try {
          if (((d = b(a.trim())), 32 !== d.length)) throw Error("length");
        } catch {
          (d = null),
            i.push(R("key", "The key you entered is not 32 bytes of hex."));
        }
        if (d) {
          let e = await h(d);
          i.push(
            e === n
              ? I("key", `Key id ${n} matches the key you entered.`)
              : R(
                  "key",
                  `The receipt names key ${n}, but the key you entered has id ${e}.`
                )
          );
        }
      } else {
        let e = (Array.isArray(t) ? t : t?.keys || []).find((e) => e.kid === n);
        if (e)
          if ("OKP" !== e.kty || "Ed25519" !== e.crv)
            i.push(R("key", "The published key is not an Ed25519 key."));
          else
            try {
              if (((d = k(e.x)), 32 !== d.length)) throw Error("length");
              let t = await h(d);
              i.push(
                t === n
                  ? I(
                      "key",
                      `Key ${n} is in the router's published list and its id matches its bytes.`
                    )
                  : R(
                      "key",
                      `The published entry's id does not match its key bytes (${t}).`
                    )
              ),
                (c = {
                  from: e.valid_from ? Date.parse(e.valid_from) : null,
                  to: e.retired_at ? Date.parse(e.retired_at) : null,
                });
            } catch {
              (d = null), i.push(R("key", "The published key is malformed."));
            }
        else
          i.push(
            R("key", `Key ${n} is not in the router's published key list.`)
          );
      }
      let u = null;
      try {
        u = k(e.sig);
      } catch {
        i.push(R("signature", "The signature is not valid base64."));
      }
      let p = _(
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
      if (d && u && !i.some((e) => "key" === e.id && "fail" === e.status))
        try {
          i.push(
            (await r(d, p, u))
              ? I(
                  "signature",
                  "The signature over the receipt's contents verifies with that key."
                )
              : R(
                  "signature",
                  "The signature does not verify: the receipt was changed or was not signed by that key."
                )
          );
        } catch (e) {
          i.push(
            e?.unsupported
              ? D("signature", `${e.message} Use one of the SDKs to check it.`)
              : R("signature", String(e?.message || e))
          );
        }
      else
        i.some((e) => "signature" === e.id) ||
          i.push(
            R("signature", "Not verified: there is no usable key or signature.")
          );
      let f = ((e) => {
        if ("number" == typeof e.ts && Number.isFinite(e.ts)) return e.ts;
        let t = Date.parse(e.issued || "");
        return Number.isFinite(t) ? t : null;
      })(e.payload);
      if (c && null !== f && (null !== c.from || null !== c.to)) {
        let e = null !== c.from && f < c.from - s,
          t = null !== c.to && f > c.to + s;
        i.push(
          e || t
            ? R(
                "key_window",
                "The receipt is dated outside its signing key's validity window."
              )
            : I(
                "key_window",
                "The receipt's date is inside its key's validity window."
              )
        );
      } else
        i.push(D("key_window", "No key window or receipt date to compare."));
      if (e.leaf && u) {
        let t = "0x" + x($($(w(p, u))));
        i.push(
          t === String(e.leaf).toLowerCase()
            ? I(
                "leaf",
                "The receipt's anchor leaf matches its contents and signature."
              )
            : R(
                "leaf",
                "The anchor leaf does not match the receipt's contents and signature."
              )
        );
      } else i.push(D("leaf", "The receipt carries no anchor leaf."));
      let m = "no_proof",
        y = e.anchor;
      if (y && Array.isArray(y.proof) && "string" == typeof y.root && e.leaf) {
        let t = C(e.leaf, y.proof, y.root);
        (m = t ? "proof_valid" : "proof_invalid"),
          i.push(
            t
              ? I(
                  "anchor_proof",
                  `The receipt is included under anchor root ${y.root.slice(
                    0,
                    10
                  )}…`
                )
              : R(
                  "anchor_proof",
                  "The inclusion proof does not lead from the receipt to the stated root."
                )
          );
      } else
        i.push(
          D(
            "anchor_proof",
            "No anchor proof was included. A receipt is anchored within the hour, so fetch it again later to get one."
          )
        );
      return l(m);
    }
    function q(e) {
      let t = 0,
        a = (a) => {
          if (t + a > e.length) throw Error("truncated CBOR");
        },
        r = () => {
          a(1);
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
            let r = { 24: 1, 25: 2, 26: 4, 27: 8 }[n];
            if (!r) throw Error("indefinite CBOR lengths are not allowed");
            a(r), (o = 0);
            for (let a = 0; a < r; a++) o = 256 * o + e[t++];
          }
          if (0 === i) return o;
          if (1 === i) return -1 - o;
          if (2 === i || 3 === i) {
            a(o);
            let r = e.slice(t, t + o);
            return (t += o), 2 === i ? r : new TextDecoder().decode(r);
          }
          if (4 === i) return Array.from({ length: o }, r);
          if (5 === i) {
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
    let V = (e) =>
        e instanceof Map
          ? Object.fromEntries([...e].map(([e, t]) => [String(e), V(t)]))
          : Array.isArray(e)
          ? e.map(V)
          : e,
      H = (e, t) =>
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
      L = (e) => w(H(2, e.length), e);
    async function M(e, t) {
      let a = await j(_(e));
      for (let e of t) a = await j(w(a, _(e)));
      return "sha256:" + x(a);
    }
    async function G(
      e,
      { keys: t, publicKeyHex: a, ed25519: r = O, chunks: s, proof: i } = {}
    ) {
      let n,
        l,
        d = [];
      try {
        (n = k(e)),
          (l = (function (e) {
            let t = q(e);
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
            let a = q(t[0]),
              r = a instanceof Map ? a.get(4) : null;
            return {
              alg: a instanceof Map ? a.get(1) : null,
              keyId: r instanceof Uint8Array ? x(r) : "",
              claims: V(q(t[2])),
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
            R(
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
            : R("v2_route", "Invalid route explanation.")
        ),
        d.push(
          -8 === l.alg
            ? I("v2_alg", "v2: COSE_Sign1 with EdDSA.")
            : R("v2_alg", `v2: unsupported COSE algorithm ${String(l.alg)}.`)
        );
      let c = null;
      try {
        if (a) c = b(a.trim());
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
        if (x(await j(c)).slice(0, 16) !== l.keyId)
          d.push(
            R(
              "v2_signature",
              `v2: the receipt names key ${l.keyId}, which is not this key.`
            )
          );
        else
          try {
            let e, t;
            d.push(
              (await r(
                c,
                ((e = l.prot),
                (t = l.payload),
                w(
                  H(4, 4),
                  H(3, 10),
                  _("Signature1"),
                  L(e),
                  L(new Uint8Array()),
                  L(t)
                )),
                l.signature
              ))
                ? I(
                    "v2_signature",
                    "v2: the COSE signature over the claims verifies."
                  )
                : R(
                    "v2_signature",
                    "v2: the COSE signature does not verify: the claims were changed or not signed by that key."
                  )
            );
          } catch (e) {
            d.push(
              e?.unsupported
                ? D(
                    "v2_signature",
                    `${e.message} Use one of the SDKs to check it.`
                  )
                : R("v2_signature", String(e?.message || e))
            );
          }
      else
        d.push(
          R(
            "v2_signature",
            `v2: key ${l.keyId || "(none)"} is not available to check against.`
          )
        );
      if (Array.isArray(s)) {
        let e = await M(l.claims.rid, s);
        d.push(
          e === l.claims.resp?.chain
            ? I(
                "v2_chain",
                `v2: the chain head over ${s.length} streamed events matches.`
              )
            : R(
                "v2_chain",
                "v2: the chain head does not match the streamed events: the stream was cut or changed."
              )
        );
      } else
        d.push(
          D(
            "v2_chain",
            l.claims.resp?.chain
              ? `v2: signed chain head ${g(
                  l.claims.resp.chain
                )}. Paste the streamed events to check it.`
              : "v2: not a streamed response, so there is no chain."
          )
        );
      let h = "0x" + x($($(n)));
      if (i && Array.isArray(i.proof) && "string" == typeof i.root) {
        let e = C(h, i.proof, i.root);
        d.push(
          e
            ? I(
                "v2_anchor_proof",
                `v2: included under root ${i.root.slice(0, 10)}…${
                  i.anchored ? "" : " (a root kept off chain, not posted)"
                }`
              )
            : R(
                "v2_anchor_proof",
                "v2: the Merkle path does not lead from this receipt to the root."
              )
        );
      } else
        d.push(
          D(
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
        leaf: h,
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
                      h[r.reason] ||
                      "The router has no current verification for this provider."
                    } Treat it as an ordinary provider: nothing here should be read as a privacy guarantee.`,
                  },
            n = r.measurement || null,
            o = n?.transparency_log || null,
            l = n?.registry || null,
            d = m[l?.state] || m.not_recorded,
            c = Array.isArray(r.verifiers) ? r.verifiers : [],
            p = o?.subject === "measurement_bundle",
            g = p
              ? "A signed measurement bundle for this compose hash was found in the log"
              : "An entry for the image was found",
            _ = n
              ? o?.found &&
                o.inclusion_verified &&
                o.checkpoint_signature_verified
                ? {
                    state: "yes",
                    text: `${g}, its inclusion in the log was verified, and so was the log's signature over its checkpoint.${
                      p
                        ? " The router checked that it was signed with the measurement key it publishes."
                        : ""
                    }`,
                  }
                : o?.found && o.inclusion_verified
                ? {
                    state: "partial",
                    text: `${g} and its inclusion was verified, but the log's signature over the checkpoint was not.`,
                  }
                : o?.found
                ? {
                    state: "partial",
                    text: `${g}, but its inclusion in the log has not been verified.`,
                  }
                : {
                    state: "no",
                    text: "No transparency-log entry was found for the image.",
                  }
              : {
                  state: "no",
                  text: "No measurement recorded, so no log lookup was made.",
                },
            x = "unverified" === s ? null : r.attested_at || null;
          return {
            status: s,
            verdict: i,
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
                  c.length && "attested" === s ? c.map((e) => u[e] || e) : [],
                empty:
                  "Nobody: no verifier has accepted a quote for this provider.",
                state: "attested" === s && c.length ? "yes" : "no",
              },
              lastVerified: {
                label: "Last verified by the router",
                value: x || "",
                relative: y(x, t),
                empty: "Never, or not recently enough to count.",
                state: x ? "yes" : "no",
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
                v("attested" === s && r.checks?.quote_verified),
              ],
              [
                "digests_bound_to_quote",
                "The image, compose and model digests are committed inside that quote",
                v("attested" === s && r.checks?.digests_bound_to_quote),
              ],
              [
                "transparency_log_entry",
                p
                  ? "The measurement bundle has an entry in a transparency log"
                  : "The image has an entry in a transparency log",
                v(r.checks?.transparency_log_entry),
              ],
              [
                "transparency_log_checkpoint_signature",
                "The log's signature over that entry was verified",
                v(r.checks?.transparency_log_checkpoint_signature),
              ],
              [
                "registered_on_chain",
                "The measurement is registered on chain",
                v(r.checks?.registered_on_chain),
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
          return c.test(a) ? a : "";
        },
        "relativeTime",
        0,
        y,
        "shortDigest",
        0,
        g,
        "teeLabel",
        0,
        f,
        "verifyHref",
        0,
        (e) => `/verify/?p=${encodeURIComponent(e)}`,
        "verifyReceipt",
        0,
        U,
      ],
      78182
    );
  },
]);
