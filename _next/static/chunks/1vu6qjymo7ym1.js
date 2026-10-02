(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  54269,
  (e) => {
    "use strict";
    var t = e.i(71682),
      a = e.i(98248),
      n = e.i(92882),
      r = e.i(4581);
    let s = "/api/v1/telegram/link";
    async function i(e, t = {}) {
      let a = await e(s, t);
      if ("boolean" != typeof a?.data?.linked)
        throw Error("Telegram link status could not be read.");
      return a.data;
    }
    async function o(e) {
      let t = await e(s, { method: "POST" }),
        { code: a, expires_at: n } = t?.data || {};
      if (
        !/^[A-Za-z0-9_-]{16}$/.test(a || "") ||
        !Number.isFinite(Date.parse(n))
      )
        throw Error("Telegram link code could not be read.");
      return { code: a, expires_at: n };
    }
    e.s(
      [
        "default",
        0,
        function ({ principalKey: e }) {
          let [l, d] = (0, a.useState)(null),
            [c, u] = (0, a.useState)(null),
            [h, p] = (0, a.useState)(""),
            [m, y] = (0, a.useState)(!1),
            [f, g] = (0, a.useState)(!1),
            w = (0, a.useCallback)(
              (t, a = {}) => (0, r.api)(t, { ...a, key: e }),
              [e]
            );
          if (
            ((0, a.useEffect)(() => {
              let e = new AbortController();
              d(null), u(null), p(""), g(!1);
              let t = () =>
                i(w, { signal: e.signal })
                  .then((t) => {
                    !e.signal.aborted && (d(t), t.linked && u(null));
                  })
                  .catch((t) => {
                    e.signal.aborted ||
                      (g(404 === t.status),
                      p(404 === t.status ? "" : t.message));
                  });
              t();
              let a = setInterval(t, 5e3);
              return () => {
                e.abort(), clearInterval(a);
              };
            }, [w]),
            f)
          )
            return null;
          let k = async (e) => {
            y(!0), p("");
            try {
              await e();
            } catch (e) {
              p(e.message);
            } finally {
              y(!1);
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
                      (0, t.jsx)(n.Button, {
                        disabled: m,
                        onClick: () => k(async () => u(await o(w))),
                        children: "Link Telegram",
                      }),
                    (0, t.jsx)(n.Button, {
                      secondary: !0,
                      disabled: m,
                      onClick: () =>
                        k(async () => {
                          await w(s, { method: "DELETE" }),
                            u(null),
                            d(await i(w));
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
    function n(e, t = "input") {
      if (!e) return [];
      let a =
        e.architecture?.[`${t}_modalities`] ??
        e[`${t}_modalities`] ??
        e["input" === t ? "inputs" : "outputs"];
      if (Array.isArray(a)) return a;
      let r = e.architecture?.modality;
      return "string" == typeof r && r.includes("->")
        ? r.split("->")[+("input" !== t)].split("+")
        : ["text"];
    }
    function r(e) {
      return Array.isArray(e?.capabilities)
        ? a.filter((t) => e.capabilities.includes(t.key)).map((e) => e.key)
        : (function (e = {}) {
            let t,
              r = n(e, "input"),
              s = n(e, "output"),
              i = e.supported_parameters ?? e.params ?? [],
              o =
                !0 === e.attested_available ||
                (null == e.attested_available &&
                  (e.disclosure?.best === "attested" || !0 === e.attested)),
              l = {
                vision: r.includes("image"),
                imageOut: s.includes("image"),
                audio: r.includes("audio") || s.includes("audio"),
                tools:
                  ((t = "tools"),
                  i instanceof Set
                    ? i.has(t)
                    : Array.isArray(i) && i.includes(t)),
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
    let s = (e, t) => r(e).includes(t);
    function i(e, t = Date.now()) {
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
        s,
        "modelCapabilities",
        0,
        r,
        "modelModalities",
        0,
        n,
      ],
      45482
    ),
      e.s(["sealedLabel", 0, i], 64265);
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
      let { source: a } = e,
        n = e.data || {},
        r = !1,
        h = !1,
        p = !1,
        m = !1,
        y = !1,
        f = "",
        g = "",
        w = "";
      if ("model" === a)
        (r =
          c(n, t) &&
          c(n.attestation || {}, t) &&
          !1 !== n.attested_available &&
          s(n, "attested")),
          (w =
            "Available endpoint: routing may choose another provider. Ordinary Harness chat is readable by the router.");
      else if ("host" === a)
        (r =
          !0 === n.attested &&
          n.attestation?.status === "attested" &&
          c(n.attestation, t)),
          (f = n.id),
          (w =
            "Router record when loaded; refresh to check again. Build admission is a separate check.");
      else if ("admission" === a)
        (r = !0 === n.attested && c(n, t)),
          (f = e.providerId),
          (w =
            "Router record when loaded; admission and routing health are separate checks.");
      else if ("network" === a) {
        let e = t - Date.parse(n.as_of || "");
        (r =
          Number.isSafeInteger(n.attested_hosts) &&
          n.attested_hosts > 0 &&
          e >= 0 &&
          e < 3e4 &&
          c(n, t)),
          (w =
            "Count of hosts with fresh successful hardware and admission checks in this snapshot; inspect each host record before relying on it.");
      } else if ("sealed" === a)
        w = (r = c(n, t) && !!i(n, t))
          ? `Sealed hosting \xb7 image ${n.agent_image_digest}. Measured code is not audited code.`
          : "Sealed hosting has no current hardware proof in this record.";
      else if ("profile" === a)
        w =
          "This profile does not publish current hardware evidence. Owner-supplied capabilities are separate.";
      else if ("generation" === a)
        (y = !0 === n.live && d(n.signature)),
          (g = n.id),
          (w =
            "This list does not include hardware evidence; inspect the receipt for the path used.");
      else if ("ledger" === a)
        (y = !!l(n.receipt_id)),
          (g = n.receipt_id),
          (w =
            "This ledger records a receipt id; its signature has not been checked in this browser.");
      else if ("receipt" === a) {
        let e = n.payload || {};
        (g = n.id || e.id),
          (f = e.provider),
          (y = d(n.sig)),
          (m = "cache" === e.mode || "cache" === e.provider);
        let a = e.upstream_attestation;
        (h =
          (r =
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
          (p =
            "unlinkable" === e.lane &&
            "blind" === e.mode &&
            !e.payer &&
            !e.payment_tx &&
            (d(e.nullifier) ||
              (Array.isArray(e.nullifiers) && e.nullifiers.length > 0))),
          (w = r
            ? "The receipt records the hardware check for this call; it does not establish a current check for a later call."
            : "");
      } else
        "attestation" === a &&
          ((r = "attested" === n.status && c(n, t)),
          (f = n.provider),
          (w = "Router record when loaded; refresh to check again."));
      let k = m
          ? "cached"
          : h
          ? "encrypted"
          : p
          ? "unlinkable"
          : r
          ? "hardware"
          : "standard",
        x = (e) => ({
          key: e,
          ...o[e],
          hardware: "signed" !== e && r,
          context: "signed" === e ? "" : w,
          href: (function (e, { providerId: t, receiptId: a } = {}) {
            let n = new URLSearchParams();
            return (
              l(t) && n.set("p", t),
              l(a) && n.set("r", a),
              `/verify/${n.size ? "?" + n : ""}#proof-${e}`
            );
          })(e, { providerId: f, receiptId: g }),
        });
      return [...(e.signedOnly ? [] : [x(k)]), ...(y ? [x("signed")] : [])];
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
          now: a,
          dark: n = !1,
          linked: r = !0,
          explain: s = !1,
        }) {
          return (0, t.jsx)("span", {
            className: h.default.group,
            "data-dark": n || void 0,
            children: u(e, a).map((e) =>
              (0, t.jsxs)(
                "span",
                {
                  className: h.default.item,
                  children: [
                    r && !s
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
                    s
                      ? (0, t.jsxs)("span", {
                          className: h.default.explanation,
                          children: [e.explanation, " ", e.context],
                        })
                      : !r &&
                        (0, t.jsxs)("span", {
                          className: "sr-only",
                          children: [e.explanation, " ", e.context],
                        }),
                    r &&
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
      a = e.i(98248),
      n = e.i(92882),
      r = e.i(55616);
    function s({ current: e, onNavigate: t }) {
      return (0, a.createElement)(
        "nav",
        { "aria-label": "Account sections" },
        r.ACCOUNT_GROUPS.map((n) =>
          (0, a.createElement)(
            "div",
            { key: n.title },
            (0, a.createElement)("span", { className: "eyebrow" }, n.title),
            ...n.ids.map((n) => {
              let s = r.ACCOUNT_SECTIONS.find((e) => e.taskId === n);
              return (0, a.createElement)(
                "a",
                {
                  key: n,
                  href: s.href,
                  "aria-current": e === s.title ? "page" : void 0,
                  onClick: (e) => {
                    !t ||
                      !s.hash ||
                      0 !== e.button ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.shiftKey ||
                      e.altKey ||
                      (e.preventDefault(), t(s.title));
                  },
                },
                s.title
              );
            })
          )
        )
      );
    }
    let i = [
      ["Balance", "What you can spend, and how to add funds."],
      ["Spending", "Today and this week, in USDG."],
      ["Keys", "Your API keys and what each one can do."],
      ["Agents", "Each agent and its budget, and any you have stopped."],
      ["Waiting for you", "Agent payments that need your approval."],
      ["Recent calls", "Your last five calls, each with its signed receipt."],
    ];
    function o({ current: e, children: t }) {
      let n =
        r.ACCOUNT_SECTIONS.find((t) => t.title === e) || r.ACCOUNT_SECTIONS[0];
      return (0, a.createElement)(
        "section",
        {
          className: "control-panel",
          "aria-labelledby": "account-preview-title",
        },
        (0, a.createElement)("span", { className: "eyebrow" }, "Your account"),
        (0, a.createElement)(
          "h2",
          { id: "account-preview-title", tabIndex: -1 },
          n.title
        ),
        (0, a.createElement)("p", null, n.description),
        (0, a.createElement)("p", { className: "help-text" }, n.start),
        "Home" === n.title
          ? (0, a.createElement)(
              "div",
              {
                className: "account-preview-grid",
                "aria-label": "What your Home shows",
              },
              i.map(([e, t]) =>
                (0, a.createElement)(
                  "div",
                  { key: e },
                  (0, a.createElement)("strong", null, e),
                  (0, a.createElement)("span", null, t)
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
    function u({ onConnect: e, onSecret: r }) {
      let [s, i] = (0, a.useState)(""),
        [o, h] = (0, a.useState)(!1),
        [p, m] = (0, a.useState)(""),
        [y, f] = (0, a.useState)(null);
      async function g(t) {
        h(!0), m("");
        try {
          let a = await t();
          if (!(0, l.validKey)(a))
            throw Error("Enter a valid AnyRoute API key.");
          await (0, l.api)("/api/v1/key", { key: a.trim() }), await e(a.trim());
        } catch (e) {
          m(e.message);
        } finally {
          h(!1);
        }
      }
      return (
        (0, a.useEffect)(() => {
          let e = new AbortController();
          return (
            (0, l.api)("/api/v1/escrow", { signal: e.signal })
              .then((e) => f(!!e.data?.enabled))
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
                (0, t.jsx)(n.Button, {
                  disabled: o,
                  onClick: () =>
                    g(async () => {
                      let e = await (0, d.walletApiKey)("Wallet key");
                      return r(e), e;
                    }),
                  children: "Sign in with wallet",
                }),
                !1 === y &&
                  (0, t.jsx)(n.Button, {
                    secondary: !0,
                    disabled: o,
                    onClick: () =>
                      g(async () => {
                        let e = await (0, l.api)("/api/v1/keys", {
                          method: "POST",
                          body: { name: "Account key" },
                        });
                        return r(e.key), e.key;
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
                e.preventDefault(), g(() => s);
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
                      value: s,
                      onChange: (e) => i(e.target.value),
                    }),
                  ],
                }),
                (0, t.jsx)(n.Button, {
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
          apiKey: r,
          onConnect: i,
          onDisconnect: l,
          onNavigate: d,
          publicContent: h = !1,
          children: p,
        }) {
          let [m, y] = (0, a.useState)(""),
            f = (0, a.useRef)(null),
            g = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              let e = g.current?.querySelector("nav"),
                t = e?.querySelector("[aria-current]");
              e &&
                t &&
                e.scrollWidth > e.clientWidth &&
                (e.scrollLeft = t.offsetLeft - e.offsetLeft - 8);
            }, [e]),
            (0, a.useEffect)(() => {
              !r &&
                window.location.hash &&
                f.current?.querySelector("h2")?.focus({ preventScroll: !0 });
            }, [e, r]),
            (0, t.jsxs)("div", {
              className: c.default.shell,
              children: [
                (0, t.jsxs)("aside", {
                  className: c.default.sidebar,
                  ref: g,
                  children: [
                    (0, t.jsx)(s, { current: e, onNavigate: d }),
                    (0, t.jsx)("div", {
                      className: c.default.connection,
                      children: r
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("p", {
                                className: "help-text",
                                children: "Key connected · this tab only",
                              }),
                              (0, t.jsx)(n.Button, {
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
                  ref: f,
                  children: [
                    !r &&
                      (0, t.jsx)(o, {
                        current: e,
                        children: (0, t.jsx)(u, { onConnect: i, onSecret: y }),
                      }),
                    (r || h) && p,
                  ],
                }),
                m &&
                  (0, t.jsxs)(n.Modal, {
                    title: "Save your API key",
                    onClose: () => y(""),
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
                          (0, t.jsx)(n.CopyButton, {
                            text: m,
                            label: "Copy key",
                          }),
                          (0, t.jsx)(n.Button, {
                            onClick: () => y(""),
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
  12043,
  (e) => {
    "use strict";
    var t = e.i(4581);
    async function a() {
      let e = window.ethereum;
      if (!e)
        throw Error(
          "No browser wallet found. Install a wallet such as MetaMask, or use the manual deposit details."
        );
      let [t] = await e.request({ method: "eth_requestAccounts" });
      if (!t) throw Error("The wallet did not share an account.");
      return t;
    }
    async function n({ id: e, name: t, rpc: a, explorer: r }) {
      let s = window.ethereum,
        i = "0x" + Number(e).toString(16);
      if ((await s.request({ method: "eth_chainId" })) !== i)
        try {
          await s.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: i }],
          });
        } catch (e) {
          if (
            e?.code !== 4902 &&
            !/unrecognized|not added|unknown chain/i.test(String(e?.message))
          )
            throw e;
          await s.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: i,
                chainName: t || "Robinhood Chain",
                nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
                rpcUrls: [a],
                ...(r ? { blockExplorerUrls: [r] } : {}),
              },
            ],
          });
        }
    }
    async function r(e, t = 18e4) {
      let a = window.ethereum,
        n = Date.now() + t;
      for (; Date.now() < n; ) {
        let t = await a.request({
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
    async function s(e, t, a) {
      let n = window.ethereum,
        s = [];
      for (let [i, o] of t.entries()) {
        a?.(
          `${i + 1}/${t.length}: ${o.description || "Confirm in your wallet"}`
        );
        let l = await n.request({
          method: "eth_sendTransaction",
          params: [{ from: e, to: o.to, data: o.data, value: "0x0" }],
        });
        a?.(`${i + 1}/${t.length}: waiting for confirmation…`),
          await r(l),
          s.push(l);
      }
      return s;
    }
    async function i(e, t) {
      return window.ethereum.request({
        method: "eth_signTypedData_v4",
        params: [e, JSON.stringify(t)],
      });
    }
    async function o(e, t) {
      let a =
        "0x" +
        Array.from(new TextEncoder().encode(t), (e) =>
          e.toString(16).padStart(2, "0")
        ).join("");
      return window.ethereum.request({
        method: "personal_sign",
        params: [a, e],
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
        let a = "0x70a08231" + e.slice(2).toLowerCase().padStart(64, "0"),
          n = await window.ethereum.request({
            method: "eth_call",
            params: [{ to: t, data: a }, "latest"],
          });
        return /^0x[0-9a-fA-F]+$/.test(n) ? BigInt(n) : null;
      } catch {
        return null;
      }
    }
    async function c(e = "Wallet key") {
      let n = await a(),
        { data: r } = await (0, t.api)("/api/v1/auth/wallet/challenge", {
          method: "POST",
          body: { address: n },
        }),
        s = await o(n, r.message);
      return (
        await (0, t.api)("/api/v1/auth/wallet", {
          method: "POST",
          body: { address: n, nonce: r.nonce, signature: s, name: e },
        })
      ).key;
    }
    e.s([
      "connect",
      0,
      a,
      "connectedAccount",
      0,
      l,
      "ensureChain",
      0,
      n,
      "hasWallet",
      0,
      () => !!window.ethereum,
      "personalSign",
      0,
      o,
      "sendTransactions",
      0,
      s,
      "shortAddress",
      0,
      (e) => (e ? e.slice(0, 6) + "…" + e.slice(-4) : ""),
      "signTypedData",
      0,
      i,
      "tokenBalance",
      0,
      d,
      "walletApiKey",
      0,
      c,
    ]);
  },
]);
