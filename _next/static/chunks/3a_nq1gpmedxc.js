(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  90453,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248),
      i = e.i(4581),
      s = e.i(27594),
      r = e.i(95989);
    let n = {
      name: "",
      description: "",
      homepage: "",
      tags: "",
      show: [],
      claims: "",
    };
    function o() {
      let [e, r] = (0, a.useState)(""),
        [o, l] = (0, a.useState)(""),
        [d, c] = (0, a.useState)([]),
        [p, h] = (0, a.useState)(""),
        [u, m] = (0, a.useState)(n),
        [g, f] = (0, a.useState)(""),
        [y, x] = (0, a.useState)(""),
        [b, _] = (0, a.useState)(!1),
        [k, v] = (0, a.useState)(!1);
      (0, a.useEffect)(() => {
        r((0, i.loadKey)());
      }, []),
        (0, a.useEffect)(() => {
          if ((v(!1), m(n), f(""), !p || !o)) return;
          let e = new AbortController();
          return (
            (0, i.api)("/api/v1/agents/" + p + "/profile", {
              key: o,
              signal: e.signal,
            })
              .then(({ data: e }) => {
                e &&
                  (m({
                    name: e.name,
                    description: e.description,
                    homepage: e.homepage || "",
                    tags: e.capabilities.join(", "),
                    show: e.show,
                    claims: e.certificate_claims.join(", "),
                  }),
                  f(e.id)),
                  v(!0),
                  x("");
              })
              .catch((t) => {
                e.signal.aborted ||
                  x(
                    404 === t.status
                      ? "Public profiles are not switched on."
                      : t.message
                  );
              }),
            () => e.abort()
          );
        }, [o, p]);
      let j = async (t) => {
          t.preventDefault(), _(!0), x(""), v(!1);
          try {
            let t = e.trim(),
              a = await (0, i.api)("/api/v1/keys", { key: t });
            (0, i.saveKey)(t), c(a.data), l(t), h(a.data[0]?.hash || "");
          } catch (e) {
            x(e.message);
          } finally {
            _(!1);
          }
        },
        w = async (e) => {
          _(!0), x("");
          try {
            let t = await (0, i.api)("/api/v1/agents/" + p + "/profile", {
              key: o,
              method: e ? "DELETE" : "PUT",
              ...(e ? {} : { body: (0, s.profilePayload)(u) }),
            });
            f(e ? "" : t.data.id);
          } catch (e) {
            x(e.message);
          } finally {
            _(!1);
          }
        };
      return (0, t.jsxs)("section", {
        className: "control-panel",
        children: [
          (0, t.jsx)("h2", { children: "Publish your agent" }),
          (0, t.jsx)("p", {
            children:
              "Publication is opt-in. Names, descriptions, homepages and tags are public. Only selected rulebook categories and certificate claims are shown; exact caps and thresholds stay private. Public readers may retain copies after unpublish.",
          }),
          (0, t.jsxs)("form", {
            onSubmit: j,
            children: [
              (0, t.jsxs)("label", {
                children: [
                  "Owner API key ",
                  (0, t.jsx)("input", {
                    type: "password",
                    autoComplete: "off",
                    value: e,
                    onChange: (e) => r(e.target.value),
                  }),
                ],
              }),
              " ",
              (0, t.jsx)("button", { disabled: b, children: "Read my keys" }),
            ],
          }),
          y && (0, t.jsx)("p", { role: "alert", children: y }),
          !!d.length &&
            (0, t.jsxs)("label", {
              children: [
                "Agent key ",
                (0, t.jsx)("select", {
                  value: p,
                  disabled: b,
                  onChange: (e) => h(e.target.value),
                  children: d.map((e) =>
                    (0, t.jsx)(
                      "option",
                      { value: e.hash, children: e.name || e.hash },
                      e.hash
                    )
                  ),
                }),
              ],
            }),
          k &&
            (0, t.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), w(!1);
              },
              children: [
                ["name", "description", "homepage", "tags", "claims"].map((e) =>
                  (0, t.jsx)(
                    "p",
                    {
                      children: (0, t.jsxs)("label", {
                        children: [
                          {
                            name: "Display name",
                            description: "Short description",
                            homepage: "Homepage (optional)",
                            tags: "Capability tags (comma separated)",
                            claims:
                              "Certificate claims (comma separated, optional)",
                          }[e],
                          " ",
                          (0, t.jsx)("input", {
                            required: "name" === e,
                            type: "homepage" === e ? "url" : "text",
                            maxLength:
                              "name" === e
                                ? 80
                                : "description" === e
                                ? 280
                                : "homepage" === e
                                ? 500
                                : 1e3,
                            value: u[e],
                            disabled: b,
                            onChange: (t) =>
                              m((a) => ({ ...a, [e]: t.target.value })),
                          }),
                        ],
                      }),
                    },
                    e
                  )
                ),
                (0, t.jsxs)("fieldset", {
                  disabled: b,
                  children: [
                    (0, t.jsx)("legend", {
                      children: "Public rulebook categories",
                    }),
                    Object.entries(s.PROFILE_CATEGORIES).map(([e, a]) =>
                      (0, t.jsxs)(
                        "label",
                        {
                          style: { display: "block" },
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: u.show.includes(e),
                              onChange: (t) =>
                                m((a) => ({
                                  ...a,
                                  show: t.target.checked
                                    ? [...a.show, e]
                                    : a.show.filter((t) => t !== e),
                                })),
                            }),
                            a,
                          ],
                        },
                        e
                      )
                    ),
                  ],
                }),
                (0, t.jsx)("p", {
                  children:
                    "Certificates require enabled rulebooks and the signing key log. Claims such as requests_at_least:1 are checked against this key’s retained activity. Publishing or updating replaces the selected certificate; empty claims remove it.",
                }),
                (0, t.jsx)("button", {
                  disabled: b,
                  children: b ? "Updating…" : "Publish selected fields",
                }),
                " ",
                (0, t.jsx)("button", {
                  type: "button",
                  disabled: b,
                  onClick: () => w(!0),
                  children: "Unpublish",
                }),
              ],
            }),
          g &&
            (0, t.jsx)("p", {
              role: "status",
              children: (0, t.jsx)("a", {
                href: "/agents/profile/?id=" + encodeURIComponent(g),
                children: "Open public profile",
              }),
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
            [l, d] = (0, a.useState)(""),
            [c, p] = (0, a.useState)(""),
            [h, u] = (0, a.useState)(null),
            [m, g] = (0, a.useState)("");
          return (
            (0, a.useEffect)(() => {
              let e = new AbortController();
              return (
                u(null),
                g(""),
                (0, i.api)((0, s.directoryPath)(l, c), { signal: e.signal })
                  .then(u)
                  .catch((t) => {
                    e.signal.aborted ||
                      g(
                        404 === t.status
                          ? "Public profiles are not switched on."
                          : t.message
                      );
                  }),
                () => e.abort()
              );
            }, [l, c]),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("section", {
                  className: "control-panel",
                  children: (0, t.jsxs)("form", {
                    onSubmit: (t) => {
                      t.preventDefault(), p(""), d(e);
                    },
                    children: [
                      (0, t.jsxs)("label", {
                        children: [
                          "Capability tag ",
                          (0, t.jsx)("input", {
                            value: e,
                            maxLength: 40,
                            onChange: (e) => n(e.target.value),
                          }),
                        ],
                      }),
                      " ",
                      (0, t.jsx)("button", {
                        type: "submit",
                        children: "Search",
                      }),
                    ],
                  }),
                }),
                m && (0, t.jsx)("p", { role: "alert", children: m }),
                !m &&
                  !h &&
                  (0, t.jsx)("p", {
                    role: "status",
                    children: "Reading directory…",
                  }),
                h?.data.map((e) =>
                  (0, t.jsx)(r.default, { card: e }, e.anyroute.id)
                ),
                h &&
                  !h.data.length &&
                  (0, t.jsx)("p", { children: "No matching public profiles." }),
                h?.next_cursor &&
                  (0, t.jsx)("button", {
                    onClick: () => p(h.next_cursor),
                    children: "Next page",
                  }),
                c &&
                  (0, t.jsx)("button", {
                    onClick: () => p(""),
                    children: "First page",
                  }),
                (0, t.jsx)(o, {}),
              ],
            })
          );
        },
      ],
      90453
    );
  },
  95989,
  27594,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(86700);
    let i = {
      has_spending_caps: "Has spending caps",
      asks_before_spending: "Asks before spending",
      kill_switch_armed: "Kill switch armed",
      killed: "Currently killed",
    };
    function s(e) {
      return "/agents/profile/?id=" + encodeURIComponent(e.anyroute.id);
    }
    function r(e) {
      try {
        let t = new URL(e);
        return !["http:", "https:"].includes(t.protocol) ||
          t.username ||
          t.password
          ? null
          : t.href;
      } catch {
        return null;
      }
    }
    e.s(
      [
        "PROFILE_CATEGORIES",
        0,
        {
          spending_caps: "Has spending caps",
          ask_first: "Asks before spending",
          kill_switch: "Kill switch state",
        },
        "PROFILE_SUMMARY",
        0,
        i,
        "directoryPath",
        0,
        (e = "", t = "") =>
          "/api/v1/agents/profiles?" +
          new URLSearchParams({
            ...(e.trim() ? { tag: e.trim() } : {}),
            ...(t ? { cursor: t } : {}),
          }),
        "profileLink",
        0,
        s,
        "profilePayload",
        0,
        function (e) {
          return {
            name: e.name.trim(),
            description: e.description.trim(),
            ...(e.homepage.trim() ? { homepage: e.homepage.trim() } : {}),
            capabilities: [
              ...new Set(
                e.tags
                  .split(",")
                  .map((e) => e.trim())
                  .filter(Boolean)
              ),
            ],
            show: e.show,
            certificate_claims: [
              ...new Set(
                e.claims
                  .split(",")
                  .map((e) => e.trim())
                  .filter(Boolean)
              ),
            ],
          };
        },
        "safeHomepage",
        0,
        r,
      ],
      27594
    ),
      e.s(
        [
          "default",
          0,
          function ({ card: e, detail: n = !1 }) {
            let o = r(e.homepage);
            return (0, t.jsxs)("article", {
              className: "control-panel",
              children: [
                (0, t.jsx)("h2", {
                  children: n
                    ? e.name
                    : (0, t.jsx)("a", { href: s(e), children: e.name }),
                }),
                (0, t.jsx)("p", { children: e.description }),
                (0, t.jsxs)("p", {
                  children: [
                    "Capabilities supplied by the owner: ",
                    e.capabilities.join(", ") || "None listed",
                  ],
                }),
                o &&
                  (0, t.jsx)("p", {
                    children: (0, t.jsx)("a", {
                      href: o,
                      rel: "noopener noreferrer",
                      children: "Owner’s homepage",
                    }),
                  }),
                (0, t.jsx)("ul", {
                  children: Object.entries(e.anyroute.rulebook_summary).map(
                    ([e, a]) =>
                      (0, t.jsxs)(
                        "li",
                        { children: [i[e] || e, ": ", a ? "Yes" : "No"] },
                        e
                      )
                  ),
                }),
                (0, t.jsx)(a.default, {
                  evidence: { source: "profile", data: e.anyroute },
                  explain: !0,
                }),
                (0, t.jsxs)("p", {
                  children: ["Sealed hosting: ", e.anyroute.status.sealed, "."],
                }),
                (0, t.jsx)("h3", {
                  children: "Valid track-record certificates",
                }),
                (0, t.jsx)("a", {
                  href: "/verify/#proof-certificates",
                  children: "How to check certificates →",
                }),
                !e.anyroute.certificates.length &&
                  (0, t.jsx)("p", {
                    children: "No currently valid certificate published.",
                  }),
                e.anyroute.certificates.map((e) =>
                  (0, t.jsxs)(
                    "section",
                    {
                      children: [
                        (0, t.jsxs)("p", {
                          children: [
                            e.payload.claims.join(", "),
                            (0, t.jsx)("br", {}),
                            "Expires: ",
                            (0, t.jsx)("time", {
                              dateTime: e.payload.expires_at,
                              children: e.payload.expires_at,
                            }),
                          ],
                        }),
                        (0, t.jsx)("p", { children: e.payload.notice }),
                        n &&
                          (0, t.jsxs)("details", {
                            children: [
                              (0, t.jsx)("summary", {
                                children: "Signed certificate JSON",
                              }),
                              (0, t.jsx)("pre", {
                                style: {
                                  whiteSpace: "pre-wrap",
                                  overflowWrap: "anywhere",
                                },
                                children: JSON.stringify(
                                  (({ valid: e, ...t }) => t)(e),
                                  null,
                                  2
                                ),
                              }),
                            ],
                          }),
                      ],
                    },
                    e.payload.pseudonym
                  )
                ),
                (0, t.jsx)("p", {
                  className: "help-text",
                  children: e.anyroute.notice,
                }),
              ],
            });
          },
        ],
        95989
      );
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
              n = e.supported_parameters ?? e.params ?? [],
              o =
                !0 === e.attested_available ||
                (null == e.attested_available &&
                  (e.disclosure?.best === "attested" || !0 === e.attested)),
              l = {
                vision: s.includes("image"),
                imageOut: r.includes("image"),
                audio: s.includes("audio") || r.includes("audio"),
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
    let r = (e, t) => s(e).includes(t);
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
    function p(e = {}, t = Date.now()) {
      let { source: a } = e,
        i = e.data || {},
        s = !1,
        h = !1,
        u = !1,
        m = !1,
        g = !1,
        f = "",
        y = "",
        x = "";
      if ("model" === a)
        (s =
          c(i, t) &&
          c(i.attestation || {}, t) &&
          !1 !== i.attested_available &&
          r(i, "attested")),
          (x =
            "Available endpoint: routing may choose another provider. Ordinary Harness chat is readable by the router.");
      else if ("host" === a)
        (s =
          !0 === i.attested &&
          i.attestation?.status === "attested" &&
          c(i.attestation, t)),
          (f = i.id),
          (x =
            "Router record when loaded; refresh to check again. Build admission is a separate check.");
      else if ("admission" === a)
        (s = !0 === i.attested && c(i, t)),
          (f = e.providerId),
          (x =
            "Router record when loaded; admission and routing health are separate checks.");
      else if ("network" === a) {
        let e = t - Date.parse(i.as_of || "");
        (s =
          Number.isSafeInteger(i.attested_hosts) &&
          i.attested_hosts > 0 &&
          e >= 0 &&
          e < 3e4 &&
          c(i, t)),
          (x =
            "Count of hosts with fresh successful hardware and admission checks in this snapshot; inspect each host record before relying on it.");
      } else if ("sealed" === a)
        x = (s = c(i, t) && !!n(i, t))
          ? `Sealed hosting \xb7 image ${i.agent_image_digest}. Measured code is not audited code.`
          : "Sealed hosting has no current hardware proof in this record.";
      else if ("profile" === a)
        x =
          "This profile does not publish current hardware evidence. Owner-supplied capabilities are separate.";
      else if ("generation" === a)
        (g = !0 === i.live && d(i.signature)),
          (y = i.id),
          (x =
            "This list does not include hardware evidence; inspect the receipt for the path used.");
      else if ("ledger" === a)
        (g = !!l(i.receipt_id)),
          (y = i.receipt_id),
          (x =
            "This ledger records a receipt id; its signature has not been checked in this browser.");
      else if ("receipt" === a) {
        let e = i.payload || {};
        (y = i.id || e.id),
          (f = e.provider),
          (g = d(i.sig)),
          (m = "cache" === e.mode || "cache" === e.provider);
        let a = e.upstream_attestation;
        (h =
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
          (x = s
            ? "The receipt records the hardware check for this call; it does not establish a current check for a later call."
            : "");
      } else
        "attestation" === a &&
          ((s = "attested" === i.status && c(i, t)),
          (f = i.provider),
          (x = "Router record when loaded; refresh to check again."));
      let b = m
          ? "cached"
          : h
          ? "encrypted"
          : u
          ? "unlinkable"
          : s
          ? "hardware"
          : "standard",
        _ = (e) => ({
          key: e,
          ...o[e],
          hardware: "signed" !== e && s,
          context: "signed" === e ? "" : x,
          href: (function (e, { providerId: t, receiptId: a } = {}) {
            let i = new URLSearchParams();
            return (
              l(t) && i.set("p", t),
              l(a) && i.set("r", a),
              `/verify/${i.size ? "?" + i : ""}#proof-${e}`
            );
          })(e, { providerId: f, receiptId: y }),
        });
      return [...(e.signedOnly ? [] : [_(b)]), ...(g ? [_("signed")] : [])];
    }
    e.s(["proofBadges", 0, p], 68129);
    var h = e.i(22692);
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
            className: h.default.group,
            "data-dark": i || void 0,
            children: p(e, a).map((e) =>
              (0, t.jsxs)(
                "span",
                {
                  className: h.default.item,
                  children: [
                    s && !r
                      ? (0, t.jsxs)("details", {
                          className: h.default.pop,
                          children: [
                            (0, t.jsxs)("summary", {
                              className: h.default.badge,
                              "data-tone": e.tone,
                              title: `${e.explanation} ${e.context}`,
                              children: [
                                (0, t.jsx)(u, { name: e.icon }),
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
                          children: [(0, t.jsx)(u, { name: e.icon }), e.label],
                        }),
                    r
                      ? (0, t.jsxs)("span", {
                          className: h.default.explanation,
                          children: [e.explanation, " ", e.context],
                        })
                      : !s &&
                        (0, t.jsxs)("span", {
                          className: "sr-only",
                          children: [e.explanation, " ", e.context],
                        }),
                    s &&
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
]);
