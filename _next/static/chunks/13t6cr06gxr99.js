(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  69019,
  (e) => {
    "use strict";
    var t = e.i(71682),
      r = e.i(45482),
      n = e.i(86700),
      i = e.i(3904);
    e.s([
      "CapabilityChips",
      0,
      function ({ model: e, dark: s = !1, linked: a = !0 }) {
        let o = (0, r.modelCapabilities)(e);
        return (0, t.jsx)("span", {
          className: i.default.chips,
          "data-dark": s || void 0,
          children: o.length
            ? r.MODEL_CAPABILITIES.filter((e) => o.includes(e.key)).map((r) =>
                "attested" === r.key
                  ? (0, t.jsx)(
                      n.default,
                      {
                        evidence: { source: "model", data: e },
                        dark: s,
                        linked: a,
                      },
                      r.key
                    )
                  : (0, t.jsx)(
                      "span",
                      {
                        className: i.default.chip,
                        title: r.explanation,
                        "aria-label": `${r.label}: ${r.explanation}`,
                        children: r.label,
                      },
                      r.key
                    )
              )
            : (0, t.jsx)("span", {
                className: i.default.chip,
                children: "No tags declared",
              }),
        });
      },
      "CapabilityGuide",
      0,
      function ({ dark: e = !1 }) {
        return (0, t.jsxs)("details", {
          className: i.default.guide,
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
    function n(e, t = "input") {
      if (!e) return [];
      let r =
        e.architecture?.[`${t}_modalities`] ??
        e[`${t}_modalities`] ??
        e["input" === t ? "inputs" : "outputs"];
      if (Array.isArray(r)) return r;
      let i = e.architecture?.modality;
      return "string" == typeof i && i.includes("->")
        ? i.split("->")[+("input" !== t)].split("+")
        : ["text"];
    }
    function i(e) {
      return Array.isArray(e?.capabilities)
        ? r.filter((t) => e.capabilities.includes(t.key)).map((e) => e.key)
        : (function (e = {}) {
            let t,
              i = n(e, "input"),
              s = n(e, "output"),
              a = e.supported_parameters ?? e.params ?? [],
              o =
                !0 === e.attested_available ||
                (null == e.attested_available &&
                  (e.disclosure?.best === "attested" || !0 === e.attested)),
              l = {
                vision: i.includes("image"),
                imageOut: s.includes("image"),
                audio: i.includes("audio") || s.includes("audio"),
                tools:
                  ((t = "tools"),
                  a instanceof Set
                    ? a.has(t)
                    : Array.isArray(a) && a.includes(t)),
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
    let s = (e, t) => i(e).includes(t);
    function a(e, t = Date.now()) {
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
        s,
        "modelCapabilities",
        0,
        i,
        "modelModalities",
        0,
        n,
      ],
      45482
    ),
      e.s(["sealedLabel", 0, a], 64265);
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
      u = (e) => "string" == typeof e && e.trim().length > 0,
      d = (e, t) =>
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
        n = e.data || {},
        i = !1,
        h = !1,
        p = !1,
        m = !1,
        f = !1,
        g = "",
        y = "",
        _ = "";
      if ("model" === r)
        (i =
          d(n, t) &&
          d(n.attestation || {}, t) &&
          !1 !== n.attested_available &&
          s(n, "attested")),
          (_ =
            "Available endpoint: routing may choose another provider. Ordinary Harness chat is readable by the router.");
      else if ("host" === r)
        (i =
          !0 === n.attested &&
          n.attestation?.status === "attested" &&
          d(n.attestation, t)),
          (g = n.id),
          (_ =
            "Router record when loaded; refresh to check again. Build admission is a separate check.");
      else if ("admission" === r)
        (i = !0 === n.attested && d(n, t)),
          (g = e.providerId),
          (_ =
            "Router record when loaded; admission and routing health are separate checks.");
      else if ("network" === r) {
        let e = t - Date.parse(n.as_of || "");
        (i =
          Number.isSafeInteger(n.attested_hosts) &&
          n.attested_hosts > 0 &&
          e >= 0 &&
          e < 3e4 &&
          d(n, t)),
          (_ =
            "Count of hosts with fresh successful hardware and admission checks in this snapshot; inspect each host record before relying on it.");
      } else if ("sealed" === r)
        _ = (i = d(n, t) && !!a(n, t))
          ? `Sealed hosting \xb7 image ${n.agent_image_digest}. Measured code is not audited code.`
          : "Sealed hosting has no current hardware proof in this record.";
      else if ("profile" === r)
        _ =
          "This profile does not publish current hardware evidence. Owner-supplied capabilities are separate.";
      else if ("generation" === r)
        (f = !0 === n.live && u(n.signature)),
          (y = n.id),
          (_ =
            "This list does not include hardware evidence; inspect the receipt for the path used.");
      else if ("ledger" === r)
        (f = !!l(n.receipt_id)),
          (y = n.receipt_id),
          (_ =
            "This ledger records a receipt id; its signature has not been checked in this browser.");
      else if ("receipt" === r) {
        let e = n.payload || {};
        (y = n.id || e.id),
          (g = e.provider),
          (f = u(n.sig)),
          (m = "cache" === e.mode || "cache" === e.provider);
        let r = e.upstream_attestation;
        (h =
          (i =
            !m &&
            "attested" === e.disclosure &&
            !0 !== e.attestation_simulated &&
            d(e, t) &&
            (!r || (!0 === r.attested && d(r, t)))) &&
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
            (u(e.nullifier) ||
              (Array.isArray(e.nullifiers) && e.nullifiers.length > 0))),
          (_ = i
            ? "The receipt records the hardware check for this call; it does not establish a current check for a later call."
            : "");
      } else
        "attestation" === r &&
          ((i = "attested" === n.status && d(n, t)),
          (g = n.provider),
          (_ = "Router record when loaded; refresh to check again."));
      let b = m
          ? "cached"
          : h
          ? "encrypted"
          : p
          ? "unlinkable"
          : i
          ? "hardware"
          : "standard",
        v = (e) => ({
          key: e,
          ...o[e],
          hardware: "signed" !== e && i,
          context: "signed" === e ? "" : _,
          href: (function (e, { providerId: t, receiptId: r } = {}) {
            let n = new URLSearchParams();
            return (
              l(t) && n.set("p", t),
              l(r) && n.set("r", r),
              `/verify/${n.size ? "?" + n : ""}#proof-${e}`
            );
          })(e, { providerId: g, receiptId: y }),
        });
      return [...(e.signedOnly ? [] : [v(b)]), ...(f ? [v("signed")] : [])];
    }
    e.s(["proofBadges", 0, c], 68129);
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
          dark: n = !1,
          linked: i = !0,
          explain: s = !1,
        }) {
          return (0, t.jsx)("span", {
            className: h.default.group,
            "data-dark": n || void 0,
            children: c(e, r).map((e) =>
              (0, t.jsxs)(
                "span",
                {
                  className: h.default.item,
                  children: [
                    i && !s
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
                      : !i &&
                        (0, t.jsxs)("span", {
                          className: "sr-only",
                          children: [e.explanation, " ", e.context],
                        }),
                    i &&
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
  88491,
  (e) => {
    "use strict";
    let t = { min: 1, max: 8, default: 4 },
      r = ["system", "developer", "user", "assistant", "tool"],
      n = new Set(["custom_id", "prompt", "model"]),
      i = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
      s = (e, t = 160) => (e.length > t ? e.slice(0, t - 1) + "…" : e),
      a = "attested",
      o =
        'This row asks for lane "unlinkable", which Batch Studio cannot run. Remove it, or turn off the attested lane option.',
      l = (e) =>
        i(e) &&
        "unlinkable" ===
          String(e.lane ?? "")
            .trim()
            .toLowerCase(),
      u = "@route/",
      d = /(:(nitro|floor|free|private))+$/,
      c = (e) => String(e).replace(d, ""),
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
      f = (e, t, r, n) =>
        Object.assign(Error(t), {
          status: e,
          type: r,
          ...(n ? { metadata: n } : {}),
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
        n = new Set();
      for (let i of e) {
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
            n = e.max_tokens ?? e.max_completion_tokens,
            i = Number.isInteger(n)
              ? n
              : Math.min(4096, Math.floor((t?.context || 16384) / 4));
          return {
            input: r,
            output: i,
            maxCost: t ? r * t.prompt + i * t.completion : null,
          };
        })(
          i.body,
          (function (e, t) {
            let r = [e.model, ...(Array.isArray(e.models) ? e.models : [])]
              .filter(Boolean)
              .map((e) => t(e));
            return r.length && r.every(Boolean) ? g(r) : null;
          })(i.body, t)
        );
        (r.input += e.input),
          (r.output += e.output),
          null == e.maxCost
            ? (r.unpriced++, n.add(i.body.model))
            : (r.priced++,
              (r.maxCost += e.maxCost),
              (r.maxRowCost = Math.max(r.maxRowCost, e.maxCost)));
      }
      return (r.unpricedModels = [...n]), r;
    }
    function _(e, t = Date.now()) {
      let r = (function (e, t = Date.now()) {
        if (null == e) return null;
        let r = String(e).trim();
        if (!r) return null;
        if (/^\d+(\.\d+)?$/.test(r)) return Math.round(1e3 * Number(r));
        let n = Date.parse(r);
        return Number.isFinite(n) ? Math.max(0, n - t) : null;
      })(
        e?.retryAfter ??
          ("function" == typeof e?.headers?.get
            ? e.headers.get("retry-after")
            : e?.headers?.["retry-after"]),
        t
      );
      if (null != r) return r;
      let n = Number(e?.metadata?.retry_after_ms);
      return e?.metadata?.retry_after_ms != null && Number.isFinite(n) && n >= 0
        ? n
        : null;
    }
    function b(
      e,
      { base: t = 1e3, cap: r = 3e4, random: n = Math.random } = {}
    ) {
      let i = Math.min(r, t * 2 ** Math.max(0, e - 1));
      return Math.round(i / 2 + n() * (i / 2));
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
        "done" === e.status && i(e.response?.body?.usage)
          ? e.response.body.usage
          : null,
      A = (e) =>
        null != e && "" !== e && Number.isFinite(Number(e)) ? Number(e) : null;
    function S(e, t, { lane: r = !1 } = {}) {
      let n = "done" === t.status,
        i = n ? t.response?.body ?? null : null,
        s = x(t),
        a = null;
      n
        ? (a = { status_code: t.response.status_code, body: i })
        : "failed" === t.status &&
          t.error?.status &&
          (a = {
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
        : n || (o = { code: "not_run", message: "This row has not run yet." });
      let l = {
        custom_id: e.custom_id,
        response: a,
        error: o,
        usage: s,
        cost: A(s?.cost),
        receipt_id: n ? i?.receipt?.id ?? i?.id ?? null : null,
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
    function T(e) {
      if (null == e) return "";
      let t = String(e);
      return (
        "string" == typeof e && /^[=+\-@\t\r]/.test(t) && (t = "'" + t),
        /[",\r\n]/.test(t) || t !== t.trim()
          ? '"' + t.replace(/"/g, '""') + '"'
          : t
      );
    }
    function $(e) {
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
    let N = [
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
      C = ["lane", "fail_closed"],
      M = [
        "validating",
        "in_progress",
        "completed",
        "failed",
        "expired",
        "cancelling",
        "cancelled",
      ],
      O = ["completed", "failed", "expired", "cancelled"],
      j = "anyroute/council",
      E = (e, t) =>
        "string" == typeof e?.custom_id && e.custom_id
          ? e.custom_id
          : "row-" + (t + 1),
      I = (e) => O.includes(e?.status);
    function q(e, t) {
      if (!t) return {};
      let r = i(e.body?.receipt) ? e.body.receipt : {},
        n = r.payload?.lane ?? r.lane ?? null;
      return {
        served: {
          lane: "string" == typeof n && n ? n.toLowerCase() : null,
          receipt_id: e.request_id ?? r.id ?? null,
          policy_hash: null,
          disclosure: null,
        },
      };
    }
    function R(e) {
      let t = [],
        r = 0;
      for (let n of String(e ?? "").split(/\r?\n/)) {
        let e;
        if (n.trim()) {
          try {
            e = JSON.parse(n);
          } catch {
            e = null;
          }
          i(e) && "string" == typeof e.custom_id ? t.push(e) : r++;
        }
      }
      return { lines: t, invalid: r };
    }
    e.s([
      "ATTESTED_LANE",
      0,
      a,
      "BatchRunner",
      0,
      class {
        constructor({
          rows: e,
          states: r,
          send: n,
          concurrency: i = t.default,
          clock: s = w,
          random: a = Math.random,
          maxRetries: o = 2,
          maxRateLimitWaits: l = 8,
          onChange: u = () => {},
        }) {
          (this.rows = e),
            (this.states = r || e.map(v)),
            (this.send = n),
            (this.clock = s),
            (this.random = a),
            (this.maxRetries = o),
            (this.maxRateLimitWaits = l),
            (this.onChange = u),
            (this.concurrency = k(i)),
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
          return (this.states.forEach((r, n) => {
            e.includes(r.status) && ((this.states[n] = v()), t++);
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
          return (function (e, t, r, n = 6e4) {
            if (null == r) return null;
            let i = Math.max(r, t - n),
              s = t - i;
            return s < 1e3
              ? null
              : (e.filter((e) => e >= i && e <= t).length / s) * 6e4;
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
            n = new AbortController();
          for (let e of this.inflight.values()) e.alone = !1;
          this.inflight.set(e, { ctl: n, alone: 0 === this.inflight.size }),
            Object.assign(r, {
              status: "running",
              attempts: r.attempts + 1,
              nextAt: 0,
              startedAt: this.clock.now(),
            }),
            this.onChange(e);
          let i = null;
          try {
            t = Promise.resolve(
              this.send(this.rows[e].body, {
                signal: n.signal,
                row: this.rows[e],
                served: (e) => (i = e),
              })
            );
          } catch (e) {
            t = Promise.reject(e);
          }
          t.then(
            (t) => this.settle(e, (r) => this.succeed(e, t, r, i)),
            (t) => this.settle(e, (r) => this.failed(e, t, r, i))
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
        succeed(e, t, r, n) {
          r && (this.solo = !1),
            this.finish(e, {
              status: "done",
              response: { status_code: 200, body: t },
              error: null,
              ...(n ? { served: n } : {}),
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
        failed(e, t, r, n) {
          let a = this.states[e],
            o = this.clock.now();
          n && (a.served = n);
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
            u = {
              status: Number(t?.status) || 0,
              type: String(
                t?.type || (t?.name === "AbortError" ? "aborted" : "error")
              ),
              message: s(String(t?.message || t || "The request failed."), 2e3),
              ...(i(t?.metadata) ? { metadata: t.metadata } : {}),
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
          if (((a.error = u), "rate_limit" === l)) {
            if ((a.rateLimits++, a.rateLimits > this.maxRateLimitWaits))
              return this.finish(e, { status: "failed" });
            let r = Math.min(
              6e5,
              _(t, o) ??
                b(a.rateLimits, { base: 2e3, cap: 6e4, random: this.random })
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
                    type: u.type,
                    message: u.message,
                    metadata: u.metadata,
                  })
                : (this.solo = !0);
            return;
          }
          return "auth" === l
            ? (this.requeue(e),
              this.pause({ kind: "auth", type: u.type, message: u.message }))
            : "transient" === l
            ? (a.retries++, a.retries > this.maxRetries)
              ? this.finish(e, { status: "failed" })
              : this.toWaiting(e, o + b(a.retries, { random: this.random }))
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
        extra: n = "",
        lane: s = null,
      } = {}) {
        let u = {},
          d = null,
          c = String(n).trim();
        if (c) {
          let e;
          try {
            e = JSON.parse(c);
          } catch {
            e = void 0;
          }
          if (i(e)) {
            let t = ["model", "messages", "stream", "prompt"].find(
              (t) => t in e
            );
            t
              ? (d = `Set "${t}" per row or with the fields above, not in extra parameters.`)
              : s && l(e.provider)
              ? (d = o)
              : Object.assign(u, e);
          } else
            d =
              'Extra parameters must be a JSON object, for example {"top_p": 0.9}.';
        }
        let h = String(t).trim();
        if (h) {
          let e = Number(h);
          !Number.isInteger(e) || e < 1 || e > 1e6
            ? (d ||= "Max tokens must be a whole number of at least 1.")
            : (u.max_tokens = e);
        }
        let p = String(r).trim();
        if (p) {
          let e = Number(p);
          !Number.isFinite(e) || e < 0 || e > 2
            ? (d ||= "Temperature must be a number from 0 to 2.")
            : (u.temperature = e);
        }
        return {
          defaults: {
            model: String(e || "").trim(),
            params: u,
            ...(s === a ? { lane: s } : {}),
          },
          error: d,
        };
      },
      "checkFunds",
      0,
      function (e, { available: t, budgetRemaining: r } = {}) {
        let n = [];
        if (
          (null != t &&
            Number.isFinite(Number(t)) &&
            n.push({ source: "balance", amount: Number(t) }),
          null != r &&
            Number.isFinite(Number(r)) &&
            n.push({ source: "budget", amount: Number(r) }),
          !n.length)
        )
          return {
            known: !1,
            enough: null,
            limit: null,
            source: null,
            shortfall: 0,
          };
        let i = n.reduce((e, t) => (t.amount < e.amount ? t : e)),
          s = e <= i.amount + 1e-12;
        return {
          known: !0,
          enough: s,
          limit: i.amount,
          source: i.source,
          shortfall: s ? 0 : e - i.amount,
        };
      },
      "checkServerBatch",
      0,
      function (e, { maxLines: t = 1e3, maxBytes: r = 8388608 } = {}) {
        let n,
          a = [],
          o = null;
        for (let t of e || [])
          t.custom_id.length > 64
            ? (o ||= `custom_id "${s(
                t.custom_id,
                40
              )}" is longer than 64 characters, the most a server batch accepts.`)
            : String(t.body?.model || "").toLowerCase() === j
            ? (o ||= `Council mode (${j}) cannot run in a server batch. Choose another model, or run the batch in this browser.`)
            : i(t.body) &&
              "verify" in t.body &&
              (o ||=
                '"verify" cannot be used in a server batch. Remove it, or run the batch in this browser.');
        let l = e?.length || 0;
        l > t &&
          a.push(
            `${l.toLocaleString(
              "en-US"
            )} rows is more than the ${t.toLocaleString(
              "en-US"
            )} a server batch holds by default. If the router refuses it, split the input.`
          );
        let u =
          ((n = new TextEncoder()),
          (e || []).reduce(
            (e, t) => e + n.encode(JSON.stringify(t)).length + 1,
            0
          ));
        return (
          u > r &&
            a.push(
              `The input is ${(u / 1048576).toFixed(1)} MB, more than the ${
                r / 1048576
              } MB a server batch holds by default. If the router refuses it, split the input.`
            ),
          { error: o, warnings: a }
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
        let n = y(e, t),
          i = 1 - r / 1e4;
        return {
          ...n,
          maxCost: n.maxCost * i,
          maxRowCost: n.maxRowCost * i,
          listMaxCost: n.maxCost,
          discountBps: r,
        };
      },
      "failClosed",
      0,
      m,
      "makeSender",
      0,
      function (e, { lane: t = null } = {}) {
        return async (r, { signal: n, served: i } = {}) => {
          let s = null;
          try {
            let i = await e(r, {
              signal: n,
              ...(t
                ? {
                    onResponse: (e) => {
                      var t;
                      let r;
                      return (
                        (t = e?.headers),
                        (s = {
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
            if (!i || "object" != typeof i)
              throw f(
                502,
                "The router returned an empty response.",
                "empty_response"
              );
            let a = (function (e, t) {
              if (!e) return null;
              let r = t?.lane ? t.lane.toLowerCase() : null;
              if (r === e) return null;
              let n = r
                ? `The router answered on the "${r}" lane, not "${e}".`
                : `The router's answer did not state its lane (no X-Anyroute-Lane header), so it could not be confirmed as "${e}".`;
              return `${n} The answer was discarded. The call may still have been billed; see its receipt.`;
            })(t, s);
            if (a)
              throw f(502, a, "lane_not_confirmed", {
                lane: s?.lane ?? null,
                receipt_id: s?.receipt_id ?? null,
              });
            return i;
          } finally {
            t && s && i?.(s);
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
          .filter((e) => i(e) && "string" == typeof e.slug && e.slug.trim())
          .map((e) => {
            let t = i(e.config) ? e.config : {},
              r = [
                ...new Set(
                  [
                    t.model,
                    ...(Array.isArray(t.models) ? t.models : []),
                    ...(Array.isArray(t.fallbacks) ? t.fallbacks : []),
                    e.model,
                    ...(Array.isArray(e.models) ? e.models : []),
                  ]
                    .map((e) => (i(e) ? e.id || e.model : e))
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
          fileName: u = "",
          defaults: d = {},
          maxRows: c = 5e3,
        } = {}
      ) {
        let h = String(e ?? ""),
          p =
            "auto" === t
              ? (function (e, t = "") {
                  let r = String(t).toLowerCase();
                  if (/\.(jsonl|ndjson|json)$/.test(r)) return "jsonl";
                  if (/\.csv$/.test(r)) return "csv";
                  let n = String(e)
                    .replace(/^\ufeff/, "")
                    .trimStart()[0];
                  return "{" === n || "[" === n ? "jsonl" : "csv";
                })(h, u)
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
                let { records: r, error: n } = (function (e) {
                  let t = String(e).replace(/^\ufeff/, ""),
                    r = [],
                    n = "",
                    i = [],
                    s = !1,
                    a = !0,
                    o = 1,
                    l = 1,
                    u = () => {
                      i.push(n), (n = ""), (a = !0);
                    },
                    d = () => {
                      u(),
                        (1 !== i.length || "" !== i[0].trim()) &&
                          r.push({ line: l, fields: i }),
                        (i = []);
                    };
                  for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    if (s) {
                      '"' === r
                        ? '"' === t[e + 1]
                          ? ((n += '"'), e++)
                          : (s = !1)
                        : ("\n" === r && o++, (n += r));
                      continue;
                    }
                    '"' === r && a
                      ? ((s = !0), (a = !1))
                      : "," === r
                      ? u()
                      : "\n" === r || "\r" === r
                      ? ("\r" === r && "\n" === t[e + 1] && e++, d(), (l = ++o))
                      : ((a = !1), (n += r));
                  }
                  return s
                    ? {
                        records: r,
                        error: {
                          line: l,
                          message:
                            "A quoted field is never closed. Check for a missing closing quote.",
                        },
                      }
                    : (("" !== n || i.length) && d(),
                      { records: r, error: null });
                })(e);
                if (
                  (n &&
                    t.errors.push({
                      line: n.line,
                      custom_id: null,
                      message: n.message,
                    }),
                  !r.length)
                )
                  return [];
                let i = r[0].fields.map((e) => e.trim().toLowerCase()),
                  [s, a, o] = [
                    i.indexOf("prompt"),
                    i.indexOf("custom_id"),
                    i.indexOf("model"),
                  ];
                if (s < 0)
                  return (
                    t.errors.push({
                      line: r[0].line,
                      custom_id: null,
                      message:
                        'The first CSV row must be a header with a "prompt" column (optional: custom_id, model).',
                    }),
                    []
                  );
                t.ignoredColumns = i.filter(
                  (e, t) => e && ![s, a, o].includes(t)
                );
                let l = [];
                for (let { line: e, fields: t } of r.slice(1)) {
                  let r = t.slice(i.length).filter((e) => e.trim()),
                    n = (e) => (e >= 0 ? t[e] ?? "" : ""),
                    u = n(a).trim() || void 0;
                  r.length
                    ? l.push({
                        line: e,
                        id: u,
                        error: `Has ${t.length} values but the header has ${i.length} columns. Quote values that contain commas.`,
                      })
                    : l.push({
                        line: e,
                        id: u,
                        prompt: n(s),
                        model: n(o).trim() || void 0,
                      });
                }
                return l;
              })(h, m)
            : (function (e, t) {
                let r = [],
                  a = String(e).replace(/^\ufeff/, "");
                if (a.trimStart().startsWith("["))
                  return (
                    t.errors.push({
                      line: 1,
                      custom_id: null,
                      message:
                        "This looks like a JSON array. Use JSON Lines instead: one JSON object per line.",
                    }),
                    r
                  );
                let o = a.split(/\r?\n/);
                for (let e = 0; e < o.length; e++) {
                  let t,
                    a = o[e].trim();
                  if (!a) continue;
                  let l = e + 1;
                  try {
                    t = JSON.parse(a);
                  } catch (e) {
                    r.push({
                      line: l,
                      error:
                        "Not valid JSON (" +
                        s(String(e?.message || e), 100) +
                        ").",
                    });
                    continue;
                  }
                  if (!i(t)) {
                    r.push({
                      line: l,
                      error: "Each line must be a JSON object.",
                    });
                    continue;
                  }
                  let u = t.custom_id;
                  if ("body" in t)
                    "prompt" in t
                      ? r.push({
                          line: l,
                          id: u,
                          error:
                            'Use either "body" (OpenAI batch line) or "prompt", not both.',
                        })
                      : i(t.body)
                      ? null == t.url ||
                        /(^|\/)chat\/completions$/.test(
                          String(t.url).split("?")[0]
                        )
                        ? null != t.method &&
                          "POST" !== String(t.method).toUpperCase()
                          ? r.push({
                              line: l,
                              id: u,
                              error: '"method" must be "POST".',
                            })
                          : r.push({ line: l, id: u, body: t.body })
                        : r.push({
                            line: l,
                            id: u,
                            error: `Only chat completions are supported ("url": "/v1/chat/completions"), not "${s(
                              String(t.url),
                              60
                            )}".`,
                          })
                      : r.push({
                          line: l,
                          id: u,
                          error:
                            '"body" must be a JSON object with the request.',
                        });
                  else if ("prompt" in t) {
                    let e = Object.keys(t).filter((e) => !n.has(e));
                    e.length
                      ? r.push({
                          line: l,
                          id: u,
                          error: `Unknown field "${s(
                            e[0],
                            40
                          )}". Simple lines take custom_id, prompt and model; put other parameters in "body" (OpenAI batch line) or the defaults.`,
                        })
                      : null == t.model ||
                        ("string" == typeof t.model && t.model.trim())
                      ? r.push({
                          line: l,
                          id: u,
                          prompt: t.prompt,
                          model: t.model?.trim(),
                        })
                      : r.push({
                          line: l,
                          id: u,
                          error: '"model" must be a non-empty string.',
                        });
                  } else
                    r.push({
                      line: l,
                      id: u,
                      error: 'Needs "body" (OpenAI batch line) or "prompt".',
                    });
                }
                return r;
              })(h, m);
        if (((m.total = f.length), f.length > c))
          return (
            (m.tooMany = !0),
            m.errors.push({
              line: null,
              custom_id: null,
              message: `This input has ${f.length.toLocaleString(
                "en-US"
              )} rows. A batch runs at most ${c.toLocaleString(
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
              ? (e.error ||= `Duplicate custom_id "${s(
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
        let _ = new Set();
        for (let e of f) {
          let t,
            n = e.error;
          n ||
            e.body ||
            ("string" == typeof e.prompt && e.prompt.trim()) ||
            (n =
              "string" == typeof e.prompt
                ? "The prompt is empty."
                : '"prompt" must be a string.'),
            n ||
              (n =
                (function (e) {
                  if (!i(e)) return "The request must be a JSON object.";
                  if ("string" != typeof e.model || !e.model.trim())
                    return 'No model. Set "model" on the row or choose a default model or route.';
                  if ("prompt" in e && !("messages" in e))
                    return 'Use "messages" (chat completions), not "prompt", inside "body".';
                  let t = e.messages;
                  if (!Array.isArray(t) || !t.length)
                    return '"messages" must be a non-empty array.';
                  for (let e = 0; e < t.length; e++) {
                    let n = t[e];
                    if (!i(n)) return `messages[${e}] must be an object.`;
                    if (!r.includes(n.role))
                      return `messages[${e}].role must be one of ${r.join(
                        ", "
                      )}.`;
                    let s =
                      "assistant" === n.role &&
                      Array.isArray(n.tool_calls) &&
                      n.tool_calls.length;
                    if ("string" == typeof n.content) {
                      if (!n.content.trim() && "user" === n.role)
                        return `messages[${e}].content is empty.`;
                    } else if (Array.isArray(n.content)) {
                      if (!n.content.length)
                        return `messages[${e}].content is an empty array.`;
                    } else if (!(s && null == n.content))
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
                    for (let [e, n] of ((null == r.model || "" === r.model) &&
                      (r.model = t.model || void 0),
                    Object.entries(t.params || {})))
                      void 0 === r[e] &&
                        ("max_tokens" !== e ||
                          void 0 === r.max_completion_tokens) &&
                        (r[e] = n);
                    return (
                      delete r.stream,
                      delete r.stream_options,
                      void 0 === r.model && delete r.model,
                      t.lane === a &&
                        (r.provider = {
                          ...(i(r.provider) ? r.provider : {}),
                          lane: a,
                        }),
                      r
                    );
                  })(e, d))
                ) || (d.lane && l(e.body?.provider) ? o : null)),
            n
              ? (m.errors.push({
                  line: e.line,
                  custom_id: e.auto ? null : e.custom_id,
                  message: n,
                }),
                _.add(e.line))
              : m.rows.push({
                  index: m.rows.length,
                  line: e.line,
                  custom_id: e.custom_id,
                  body: t,
                });
        }
        return (m.invalid = _.size), m;
      },
      "parseServerResults",
      0,
      function (e, t, r, { lane: n = !1 } = {}) {
        let a = new Map((r || []).map((e, t) => [E(e, t), t])),
          o = (r || []).map(() => null),
          l = R(e),
          u = R(t),
          d = l.invalid + u.invalid;
        for (let e of l.lines) {
          let t = a.get(e.custom_id);
          if (null == t) {
            d++;
            continue;
          }
          let r = i(e.response) ? e.response : {};
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
            ...q(r, n),
          };
        }
        for (let e of u.lines) {
          let t = a.get(e.custom_id);
          if ((null == t && d++, null == t || o[t])) continue;
          let r = i(e.response) ? e.response : null,
            l = i(r?.body?.error) ? r.body.error : {},
            u = String(e.error?.code || l.type || l.code || "error"),
            c = s(
              String(e.error?.message || l.message || "The request failed."),
              2e3
            ),
            h = !r && /cancel/i.test(u),
            p = {
              status: h ? 0 : Number(r?.status_code) || 0,
              type: h ? "cancelled" : u,
              message: c,
              ...(i(l.metadata) ? { metadata: l.metadata } : {}),
            };
          o[t] = {
            ...v(),
            status: h ? "cancelled" : "failed",
            attempts: +!!r,
            error: p,
            request_id: r?.request_id ?? null,
            ...(r ? q(r, n) : {}),
          };
        }
        let c = {
          status: 0,
          type: "no_result",
          message: "The router returned no result for this row.",
        };
        return {
          states: o.map(
            (e) => e || { ...v(), status: "failed", error: { ...c } }
          ),
          unmatched: d,
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
        let n = new Map();
        for (let e of t) {
          let t = (e.models || []).map((e) => r.get(e));
          !t.length || t.some((e) => !e) || n.set("@route/" + e.slug, g(t));
        }
        return (e) => r.get(e) || n.get(e) || null;
      },
      "responseText",
      0,
      $,
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
      _,
      "routesOnLane",
      0,
      (e, t) => (e || []).filter((e) => e.models.some((e) => t.has(c(e)))),
      "rowsOffLane",
      0,
      function (e, t, r = [], n = 3) {
        let i = new Map(r.map((e) => [e.slug, e])),
          s = [],
          a = 0;
        for (let r of e) {
          let e,
            n = r?.body?.model;
          if ("string" == typeof n && n) {
            if (n.toLowerCase().startsWith(u)) {
              let r = i.get(n.slice(u.length));
              e = !!r && !r.models.some((e) => t.has(c(e)));
            } else
              e =
                !t.has(c(n)) &&
                !(
                  Array.isArray(r.body.models) &&
                  r.body.models.some((e) => "string" == typeof e && t.has(c(e)))
                );
            e && (a++, s.includes(n) || s.push(n));
          }
        }
        return { count: a, models: s.slice(0, n) };
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
                custom_id: r ? E(r, e.line - 1) : null,
                message: String(e?.message || e?.code || "Invalid line."),
              };
            })
          : [];
      },
      "serverProgress",
      0,
      function (e) {
        let t = e?.request_counts || {},
          r = Math.max(0, A(t.total) || 0),
          n = Math.max(0, A(t.completed) || 0),
          i = Math.max(0, A(t.failed) || 0),
          s = Math.min(r, n + i),
          a = A(e?.cost?.usd) || 0,
          o = A(e?.cost?.list_usd) ?? a;
        return {
          status: M.includes(e?.status) ? e.status : "validating",
          done: I(e),
          total: r,
          completed: n,
          failed: i,
          finished: s,
          remaining: r - s,
          pct: r ? Math.floor((s / r) * 100) : 0,
          cost: a,
          listCost: o,
          saved: Math.max(0, o - a),
          discountBps: A(e?.cost?.discount_bps) ?? 5e3,
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
            ((t.promptTokens += A(e.prompt_tokens) || 0),
            (t.completionTokens += A(e.completion_tokens) || 0),
            (t.cost += A(e.cost) || 0));
        }
        return (t.finished = t.done + t.failed), t;
      },
      "toCSV",
      0,
      function (e, t, { lane: r = !1 } = {}) {
        let n = [(r ? [...N, ...C] : N).join(",")];
        return (
          e.forEach((e, i) => {
            let s = t[i],
              a = S(e, s, { lane: r }),
              o = a.response?.status_code === 200 ? a.response.body : null,
              l = a.usage || {},
              u =
                {
                  done: "succeeded",
                  failed: r && a.fail_closed ? "failed_closed" : "failed",
                  cancelled: "cancelled",
                }[s.status] || "not_run",
              d = [
                e.custom_id,
                u,
                a.response?.status_code ?? null,
                o?.model || e.body?.model,
                o ? $(o) : null,
                o?.choices?.[0]?.finish_reason ?? null,
                A(l.prompt_tokens),
                A(l.completion_tokens),
                A(l.total_tokens),
                a.cost,
                a.receipt_id,
                a.error ? a.error.message : null,
              ];
            r && d.push(a.lane, a.fail_closed), n.push(d.map(T).join(","));
          }),
          "\uFEFF" + n.join("\r\n") + "\r\n"
        );
      },
      "toJSONL",
      0,
      function (e, t, r) {
        return (
          e.map((e, n) => JSON.stringify(S(e, t[n], r))).join("\n") +
          (e.length ? "\n" : "")
        );
      },
      "toServerRequests",
      0,
      function (e) {
        return (e || []).map((e, t) => ({
          custom_id: E(e, t),
          method: "POST",
          url: "/v1/chat/completions",
          body: e.body,
        }));
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
      n = [
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
      i = [
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
      s = (e) => e && "object" == typeof e && !Array.isArray(e),
      a = (e, t) =>
        s(e) &&
        Object.entries(e).every(
          ([e, r]) => t.includes(e) && Number.isSafeInteger(r) && r > 0
        );
    function o(e, o) {
      return !!(
        s(e) &&
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
        a(e.skipped, r) &&
        ["public", "attested", "unlinkable"].includes(e.lane) &&
        "boolean" == typeof e.network_host &&
        Array.isArray(e.parameters) &&
        e.parameters.length <= i.length &&
        new Set(e.parameters).size === e.parameters.length &&
        e.parameters.every((e) => i.includes(e)) &&
        ("fallback" === e.reason
          ? a(e.fallback, n) && Object.keys(e.fallback).length > 0
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
      u = {
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
                .map(([e, t]) => `${t} \xd7 ${u[e]}`)
                .join("; ")}); ${t} were available in the serving model’s plan`,
            }[e.reason],
            n = Object.entries(e.skipped)
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
          }${n ? ` ${n}.` : ""}${
            e.network_host ? " This provider is a network host." : ""
          }`;
        },
        "validRouteExplanation",
        0,
        o,
      ],
      34092
    );
    let d = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/,
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
      let n = Math.round((t - r) / 1e3);
      return n < -60
        ? "in the future"
        : n < 60
        ? "just now"
        : n < 3600
        ? `${Math.round(n / 60)} min ago`
        : n < 86400
        ? `${Math.round(n / 3600)} h ago`
        : `${Math.round(n / 86400)} d ago`;
    }
    let y = (e) =>
        "string" == typeof e && e.length > 22
          ? `${e.slice(0, 12)}…${e.slice(-8)}`
          : e || "",
      _ = (e) => (e ? "yes" : "no"),
      b = (e) => new TextEncoder().encode(e),
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
        n = atob(r + "=".repeat((4 - (r.length % 4)) % 4));
      return Uint8Array.from(n, (e) => e.charCodeAt(0));
    }
    let x = (...e) => {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          r = 0;
        for (let n of e) t.set(n, r), (r += n.length);
        return t;
      },
      A = async (e) => new Uint8Array(await crypto.subtle.digest("SHA-256", e)),
      S = (1n << 64n) - 1n,
      T = [
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
      $ = [
        0, 1, 62, 28, 27, 36, 44, 6, 55, 20, 3, 10, 43, 25, 39, 41, 45, 15, 21,
        8, 18, 2, 61, 56, 14,
      ],
      N = (e, t) =>
        0 === t ? e : ((e << BigInt(t)) | (e >> BigInt(64 - t))) & S;
    function C(e) {
      let t = new Uint8Array(136 * Math.ceil((e.length + 1) / 136));
      t.set(e), (t[e.length] ^= 1), (t[t.length - 1] ^= 128);
      let r = Array(25).fill(0n),
        n = [, , , , ,],
        i = Array(25);
      for (let e = 0; e < t.length; e += 136) {
        for (let n = 0; n < 17; n++) {
          let i = 0n;
          for (let r = 7; r >= 0; r--) i = (i << 8n) | BigInt(t[e + 8 * n + r]);
          r[n] ^= i;
        }
        for (let e = 0; e < 24; e++) {
          for (let e = 0; e < 5; e++)
            n[e] = r[e] ^ r[e + 5] ^ r[e + 10] ^ r[e + 15] ^ r[e + 20];
          for (let e = 0; e < 5; e++) {
            let t = n[(e + 4) % 5] ^ N(n[(e + 1) % 5], 1);
            for (let n = 0; n < 25; n += 5) r[e + n] ^= t;
          }
          for (let e = 0; e < 5; e++)
            for (let t = 0; t < 5; t++)
              i[t + ((2 * e + 3 * t) % 5) * 5] = N(r[e + 5 * t], $[e + 5 * t]);
          for (let e = 0; e < 25; e += 5)
            for (let t = 0; t < 5; t++)
              r[t + e] =
                i[t + e] ^ (~i[((t + 1) % 5) + e] & S & i[((t + 2) % 5) + e]);
          r[0] ^= T[e];
        }
      }
      let s = new Uint8Array(32);
      for (let e = 0; e < 4; e++)
        for (let t = 0; t < 8; t++)
          s[8 * e + t] = Number((r[e] >> BigInt(8 * t)) & 255n);
      return s;
    }
    let M = (e, t) => {
      for (let r = 0; r < Math.min(e.length, t.length); r++)
        if (e[r] !== t[r]) return e[r] - t[r];
      return e.length - t.length;
    };
    function O(e, t, r) {
      try {
        let n = w(e);
        for (let e of t) {
          let t = w(e);
          n = C(0 > M(n, t) ? x(n, t) : x(t, n));
        }
        return v(n) === v(w(r));
      } catch {
        return !1;
      }
    }
    async function j(e, t, r) {
      let n;
      try {
        n = await crypto.subtle.importKey("raw", e, { name: "Ed25519" }, !1, [
          "verify",
        ]);
      } catch (e) {
        throw Object.assign(
          Error("This browser cannot verify Ed25519 signatures."),
          { unsupported: !0, cause: e }
        );
      }
      return crypto.subtle.verify({ name: "Ed25519" }, n, r, t);
    }
    let E = (e, t) => ({ id: e, status: "pass", detail: t }),
      I = (e, t) => ({ id: e, status: "fail", detail: t }),
      q = (e, t) => ({ id: e, status: "not_checked", detail: t }),
      R = [
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
        n = {
          keys: t.keys,
          publicKeyHex: t.publicKeyHex,
          ed25519: t.ed25519 || j,
          chunks: t.chunks,
        };
      if (r && !e.payload) {
        let t = await z(r, { ...n, proof: e.anchor });
        return {
          valid: t.valid,
          keyId: t.keyId,
          checks: t.checks,
          anchor: D(t.checks),
          notChecked: R,
          claims: t.claims,
        };
      }
      let i = await U(e, t);
      if (!r) return i;
      let s = await z(r, { ...n, proof: e.v2?.anchor });
      return {
        ...i,
        valid: i.valid && s.valid,
        checks: [...i.checks, ...s.checks],
        claims: s.claims,
      };
    }
    let D = (e) => {
      let t = e.find((e) => "v2_anchor_proof" === e.id);
      return t?.status === "pass"
        ? "proof_valid"
        : t?.status === "fail"
        ? "proof_invalid"
        : "no_proof";
    };
    async function U(
      e,
      { keys: t, publicKeyHex: r, ed25519: n = j, skewMs: i = 3e5 } = {}
    ) {
      let s = [],
        a = "string" == typeof e?.key_id ? e.key_id : "",
        l = (e) => ({
          valid:
            s.every((e) => "fail" !== e.status) &&
            s.some((e) => "signature" === e.id && "pass" === e.status),
          keyId: a,
          checks: s,
          anchor: e,
          notChecked: R,
        });
      if (
        !e ||
        "object" != typeof e ||
        !e.payload ||
        "object" != typeof e.payload ||
        "string" != typeof e.sig ||
        !a
      )
        return (
          s.push(I("shape", "A receipt needs payload, sig and key_id.")),
          l("no_proof")
        );
      void 0 !== e.payload.route &&
        s.push(
          o(e.payload.route, e.payload.provider)
            ? E(
                "route",
                "Route explanation v1 is a router-signed summary, not independent proof of selection."
              )
            : I("route", "Invalid route explanation.")
        ),
        s.push(
          void 0 === e.alg || "Ed25519" === e.alg
            ? E("alg", "Ed25519")
            : I("alg", `Unsupported algorithm ${String(e.alg)}.`)
        );
      let u = null,
        d = null,
        c = async (e) => v(await A(e)).slice(0, 16);
      if (r) {
        try {
          if (((u = w(r.trim())), 32 !== u.length)) throw Error("length");
        } catch {
          (u = null),
            s.push(I("key", "The key you entered is not 32 bytes of hex."));
        }
        if (u) {
          let e = await c(u);
          s.push(
            e === a
              ? E("key", `Key id ${a} matches the key you entered.`)
              : I(
                  "key",
                  `The receipt names key ${a}, but the key you entered has id ${e}.`
                )
          );
        }
      } else {
        let e = (Array.isArray(t) ? t : t?.keys || []).find((e) => e.kid === a);
        if (e)
          if ("OKP" !== e.kty || "Ed25519" !== e.crv)
            s.push(I("key", "The published key is not an Ed25519 key."));
          else
            try {
              if (((u = k(e.x)), 32 !== u.length)) throw Error("length");
              let t = await c(u);
              s.push(
                t === a
                  ? E(
                      "key",
                      `Key ${a} is in the router's published list and its id matches its bytes.`
                    )
                  : I(
                      "key",
                      `The published entry's id does not match its key bytes (${t}).`
                    )
              ),
                (d = {
                  from: e.valid_from ? Date.parse(e.valid_from) : null,
                  to: e.retired_at ? Date.parse(e.retired_at) : null,
                });
            } catch {
              (u = null), s.push(I("key", "The published key is malformed."));
            }
        else
          s.push(
            I("key", `Key ${a} is not in the router's published key list.`)
          );
      }
      let h = null;
      try {
        h = k(e.sig);
      } catch {
        s.push(I("signature", "The signature is not valid base64."));
      }
      let p = b(
        JSON.stringify(
          (function e(t) {
            if ("bigint" == typeof t) return t.toString();
            if (Array.isArray(t)) return t.map(e);
            if (t && "object" == typeof t) {
              let r = {};
              for (let n of Object.keys(t).sort())
                void 0 !== t[n] && (r[n] = e(t[n]));
              return r;
            }
            return t;
          })(e.payload)
        )
      );
      if (u && h && !s.some((e) => "key" === e.id && "fail" === e.status))
        try {
          s.push(
            (await n(u, p, h))
              ? E(
                  "signature",
                  "The signature over the receipt's contents verifies with that key."
                )
              : I(
                  "signature",
                  "The signature does not verify: the receipt was changed or was not signed by that key."
                )
          );
        } catch (e) {
          s.push(
            e?.unsupported
              ? q("signature", `${e.message} Use one of the SDKs to check it.`)
              : I("signature", String(e?.message || e))
          );
        }
      else
        s.some((e) => "signature" === e.id) ||
          s.push(
            I("signature", "Not verified: there is no usable key or signature.")
          );
      let m = ((e) => {
        if ("number" == typeof e.ts && Number.isFinite(e.ts)) return e.ts;
        let t = Date.parse(e.issued || "");
        return Number.isFinite(t) ? t : null;
      })(e.payload);
      if (d && null !== m && (null !== d.from || null !== d.to)) {
        let e = null !== d.from && m < d.from - i,
          t = null !== d.to && m > d.to + i;
        s.push(
          e || t
            ? I(
                "key_window",
                "The receipt is dated outside its signing key's validity window."
              )
            : E(
                "key_window",
                "The receipt's date is inside its key's validity window."
              )
        );
      } else
        s.push(q("key_window", "No key window or receipt date to compare."));
      if (e.leaf && h) {
        let t = "0x" + v(C(C(x(p, h))));
        s.push(
          t === String(e.leaf).toLowerCase()
            ? E(
                "leaf",
                "The receipt's anchor leaf matches its contents and signature."
              )
            : I(
                "leaf",
                "The anchor leaf does not match the receipt's contents and signature."
              )
        );
      } else s.push(q("leaf", "The receipt carries no anchor leaf."));
      let f = "no_proof",
        g = e.anchor;
      if (g && Array.isArray(g.proof) && "string" == typeof g.root && e.leaf) {
        let t = O(e.leaf, g.proof, g.root);
        (f = t ? "proof_valid" : "proof_invalid"),
          s.push(
            t
              ? E(
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
        s.push(
          q(
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
        n = () => {
          r(1);
          let i = e[t++],
            s = i >> 5,
            a = 31 & i;
          if (7 === s) {
            if (20 === a) return !1;
            if (21 === a) return !0;
            if (22 === a) return null;
            throw Error("unsupported CBOR value");
          }
          let o = a;
          if (a >= 24) {
            let n = { 24: 1, 25: 2, 26: 4, 27: 8 }[a];
            if (!n) throw Error("indefinite CBOR lengths are not allowed");
            r(n), (o = 0);
            for (let r = 0; r < n; r++) o = 256 * o + e[t++];
          }
          if (0 === s) return o;
          if (1 === s) return -1 - o;
          if (2 === s || 3 === s) {
            r(o);
            let n = e.slice(t, t + o);
            return (t += o), 2 === s ? n : new TextDecoder().decode(n);
          }
          if (4 === s) return Array.from({ length: o }, n);
          if (5 === s) {
            let e = new Map();
            for (let t = 0; t < o; t++) e.set(n(), n());
            return e;
          }
          return { tag: o, value: n() };
        },
        i = n();
      if (t !== e.length) throw Error("trailing CBOR bytes");
      return i;
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
      H = (e) => x(F(2, e.length), e);
    async function J(e, t) {
      let r = await A(b(e));
      for (let e of t) r = await A(x(r, b(e)));
      return "sha256:" + v(r);
    }
    async function z(
      e,
      { keys: t, publicKeyHex: r, ed25519: n = j, chunks: i, proof: s } = {}
    ) {
      let a,
        l,
        u = [];
      try {
        (a = k(e)),
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
              n = r instanceof Map ? r.get(4) : null;
            return {
              alg: r instanceof Map ? r.get(1) : null,
              keyId: n instanceof Uint8Array ? v(n) : "",
              claims: P(B(t[2])),
              prot: t[0],
              payload: t[2],
              signature: t[3],
            };
          })(a));
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
        u.push(
          o(l.claims.route, l.claims.node?.provider)
            ? E(
                "v2_route",
                "Route explanation v1 is covered by the COSE signature; routing itself is not independently checked."
              )
            : I("v2_route", "Invalid route explanation.")
        ),
        u.push(
          -8 === l.alg
            ? E("v2_alg", "v2: COSE_Sign1 with EdDSA.")
            : I("v2_alg", `v2: unsupported COSE algorithm ${String(l.alg)}.`)
        );
      let d = null;
      try {
        if (r) d = w(r.trim());
        else {
          let e = (Array.isArray(t) ? t : t?.keys || []).find(
            (e) => e.kid === l.keyId
          );
          e && "OKP" === e.kty && "Ed25519" === e.crv && (d = k(e.x));
        }
      } catch {
        d = null;
      }
      if (d && 32 === d.length)
        if (v(await A(d)).slice(0, 16) !== l.keyId)
          u.push(
            I(
              "v2_signature",
              `v2: the receipt names key ${l.keyId}, which is not this key.`
            )
          );
        else
          try {
            let e, t;
            u.push(
              (await n(
                d,
                ((e = l.prot),
                (t = l.payload),
                x(
                  F(4, 4),
                  F(3, 10),
                  b("Signature1"),
                  H(e),
                  H(new Uint8Array()),
                  H(t)
                )),
                l.signature
              ))
                ? E(
                    "v2_signature",
                    "v2: the COSE signature over the claims verifies."
                  )
                : I(
                    "v2_signature",
                    "v2: the COSE signature does not verify: the claims were changed or not signed by that key."
                  )
            );
          } catch (e) {
            u.push(
              e?.unsupported
                ? q(
                    "v2_signature",
                    `${e.message} Use one of the SDKs to check it.`
                  )
                : I("v2_signature", String(e?.message || e))
            );
          }
      else
        u.push(
          I(
            "v2_signature",
            `v2: key ${l.keyId || "(none)"} is not available to check against.`
          )
        );
      if (Array.isArray(i)) {
        let e = await J(l.claims.rid, i);
        u.push(
          e === l.claims.resp?.chain
            ? E(
                "v2_chain",
                `v2: the chain head over ${i.length} streamed events matches.`
              )
            : I(
                "v2_chain",
                "v2: the chain head does not match the streamed events: the stream was cut or changed."
              )
        );
      } else
        u.push(
          q(
            "v2_chain",
            l.claims.resp?.chain
              ? `v2: signed chain head ${y(
                  l.claims.resp.chain
                )}. Paste the streamed events to check it.`
              : "v2: not a streamed response, so there is no chain."
          )
        );
      let c = "0x" + v(C(C(a)));
      if (s && Array.isArray(s.proof) && "string" == typeof s.root) {
        let e = O(c, s.proof, s.root);
        u.push(
          e
            ? E(
                "v2_anchor_proof",
                `v2: included under root ${s.root.slice(0, 10)}…${
                  s.anchored ? "" : " (a root kept off chain, not posted)"
                }`
              )
            : I(
                "v2_anchor_proof",
                "v2: the Merkle path does not lead from this receipt to the root."
              )
        );
      } else
        u.push(
          q(
            "v2_anchor_proof",
            "v2: no Merkle path yet. Roots are built hourly."
          )
        );
      return {
        valid:
          u.every((e) => "fail" !== e.status) &&
          u.some((e) => "v2_signature" === e.id && "pass" === e.status),
        keyId: l.keyId,
        claims: l.claims,
        leaf: c,
        checks: u,
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
            n = e || {},
            i =
              "attested" === n.status || "simulated" === n.status
                ? n.status
                : "unverified",
            s =
              "attested" === i
                ? {
                    tone: "ok",
                    label: "Attested",
                    text: "The router verified this provider's hardware attestation recently and reports it as attested. That is what the router checked, listed below. It does not show what the provider does with your data, and this page did not contact the provider or read its quote.",
                  }
                : "simulated" === i
                ? {
                    tone: "warn",
                    label: "Simulated",
                    text: "This provider has only simulated (development) evidence. No hardware backs it, so nothing about it is private or verified.",
                  }
                : {
                    tone: "bad",
                    label: "Unverified",
                    text: `${
                      c[n.reason] ||
                      "The router has no current verification for this provider."
                    } Treat it as an ordinary provider: nothing here should be read as a privacy guarantee.`,
                  },
            a = n.measurement || null,
            o = a?.transparency_log || null,
            l = a?.registry || null,
            u = f[l?.state] || f.not_recorded,
            d = Array.isArray(n.verifiers) ? n.verifiers : [],
            p = o?.subject === "measurement_bundle",
            y = p
              ? "A signed measurement bundle for this compose hash was found in the log"
              : "An entry for the image was found",
            b = a
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
            v = "unverified" === i ? null : n.attested_at || null;
          return {
            status: i,
            verdict: s,
            provider: n.provider || "",
            rows: {
              tee: {
                label: "Hardware",
                value: "unverified" === i ? "Not established" : m(n.tee),
                state:
                  "attested" === i
                    ? "known"
                    : "simulated" === i
                    ? "simulated"
                    : "unknown",
              },
              verifiers: {
                label: "Quote checked by",
                value:
                  d.length && "attested" === i ? d.map((e) => h[e] || e) : [],
                empty:
                  "Nobody: no verifier has accepted a quote for this provider.",
                state: "attested" === i && d.length ? "yes" : "no",
              },
              lastVerified: {
                label: "Last verified by the router",
                value: v || "",
                relative: g(v, t),
                empty: "Never, or not recently enough to count.",
                state: v ? "yes" : "no",
              },
            },
            measurement: a
              ? {
                  recorded: !0,
                  currentlyAttested: "attested" === i && !!a.attested_now,
                  status: a.status,
                  firstSeen: a.first_attested_at || "",
                  lastSeen: a.last_seen_at || "",
                  digests: [
                    {
                      key: "image",
                      label: "Image digest",
                      value: a.image_digest || "",
                    },
                    {
                      key: "compose",
                      label: "Compose hash",
                      value: a.compose_hash || "",
                    },
                    {
                      key: "model",
                      label: "Model digest",
                      value: a.model_digest || "",
                    },
                  ],
                }
              : { recorded: !1, currentlyAttested: !1, digests: [] },
            transparencyLog: {
              ...b,
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
              ...u,
              address: l?.address || "",
              tx: l?.tx_hash || "",
              registeredAt: l?.registered_at || "",
            },
            checks: [
              [
                "quote_verified",
                "The router verified a hardware quote",
                _("attested" === i && n.checks?.quote_verified),
              ],
              [
                "digests_bound_to_quote",
                "The image, compose and model digests are committed inside that quote",
                _("attested" === i && n.checks?.digests_bound_to_quote),
              ],
              [
                "transparency_log_entry",
                p
                  ? "The measurement bundle has an entry in a transparency log"
                  : "The image has an entry in a transparency log",
                _(n.checks?.transparency_log_entry),
              ],
              [
                "transparency_log_checkpoint_signature",
                "The log's signature over that entry was verified",
                _(n.checks?.transparency_log_checkpoint_signature),
              ],
              [
                "registered_on_chain",
                "The measurement is registered on chain",
                _(n.checks?.registered_on_chain),
              ],
            ].map(([e, t, r]) => ({ id: e, label: t, state: r })),
            notChecked: [
              ...(Array.isArray(n.not_checked) ? n.not_checked : []),
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
          let n = [t, t?.receipt, t?.data, t?.data?.receipt],
            i =
              n.find(
                (e) =>
                  e &&
                  "object" == typeof e &&
                  e.payload &&
                  "string" == typeof e.sig &&
                  "string" == typeof e.key_id
              ) ||
              n.find(
                (e) => e && "object" == typeof e && "string" == typeof e.cose
              );
          return i
            ? { receipt: i }
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
          return d.test(r) ? r : "";
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
    async function n({ id: e, name: t, rpc: r, explorer: i }) {
      let s = window.ethereum,
        a = "0x" + Number(e).toString(16);
      if ((await s.request({ method: "eth_chainId" })) !== a)
        try {
          await s.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: a }],
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
                chainId: a,
                chainName: t || "Robinhood Chain",
                nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
                rpcUrls: [r],
                ...(i ? { blockExplorerUrls: [i] } : {}),
              },
            ],
          });
        }
    }
    async function i(e, t = 18e4) {
      let r = window.ethereum,
        n = Date.now() + t;
      for (; Date.now() < n; ) {
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
    async function s(e, t, r) {
      let n = window.ethereum,
        s = [];
      for (let [a, o] of t.entries()) {
        r?.(
          `${a + 1}/${t.length}: ${o.description || "Confirm in your wallet"}`
        );
        let l = await n.request({
          method: "eth_sendTransaction",
          params: [{ from: e, to: o.to, data: o.data, value: "0x0" }],
        });
        r?.(`${a + 1}/${t.length}: waiting for confirmation…`),
          await i(l),
          s.push(l);
      }
      return s;
    }
    async function a(e, t) {
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
    async function u(e, t) {
      try {
        let r = "0x70a08231" + e.slice(2).toLowerCase().padStart(64, "0"),
          n = await window.ethereum.request({
            method: "eth_call",
            params: [{ to: t, data: r }, "latest"],
          });
        return /^0x[0-9a-fA-F]+$/.test(n) ? BigInt(n) : null;
      } catch {
        return null;
      }
    }
    async function d(e = "Wallet key") {
      let n = await r(),
        { data: i } = await (0, t.api)("/api/v1/auth/wallet/challenge", {
          method: "POST",
          body: { address: n },
        }),
        s = await o(n, i.message);
      return (
        await (0, t.api)("/api/v1/auth/wallet", {
          method: "POST",
          body: { address: n, nonce: i.nonce, signature: s, name: e },
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
      a,
      "tokenBalance",
      0,
      u,
      "walletApiKey",
      0,
      d,
    ]);
  },
]);
