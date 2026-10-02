(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  43516,
  (e) => {
    "use strict";
    var t = e.i(71682),
      s = e.i(98248);
    async function a(e = fetch) {
      try {
        let t = await e("/api/v1/status", {
          cache: "no-store",
          credentials: "omit",
          signal: AbortSignal.timeout(1e4),
        });
        if (!t.ok) return !1;
        return (await t.json())?.data?.network?.hosts_open === !0;
      } catch {
        return !1;
      }
    }
    var o = e.i(92882),
      n = e.i(52111);
    let r = (0, s.createContext)(!1);
    function i({ closed: e, open: a }) {
      let o = (0, s.useContext)(r);
      return (0, t.jsxs)("span", {
        className: n.default.copy,
        children: [
          (0, t.jsx)("span", {
            className: n.default.copyState,
            "aria-hidden": o || void 0,
            inert: o || void 0,
            style: { visibility: o ? "hidden" : "visible" },
            children: e,
          }),
          (0, t.jsx)("span", {
            className: n.default.copyState,
            "aria-hidden": !o || void 0,
            inert: !o || void 0,
            style: { visibility: o ? "visible" : "hidden" },
            children: a,
          }),
        ],
      });
    }
    e.s(
      [
        "HostAction",
        0,
        function () {
          return (0, t.jsx)(i, {
            closed: (0, t.jsx)(o.Button, {
              href: "#waitlist",
              children: "Join the waitlist",
            }),
            open: (0, t.jsx)(o.Button, {
              href: "#join",
              children: "Join as a host",
            }),
          });
        },
        "HostCopy",
        0,
        i,
        "NetworkHostsContext",
        0,
        r,
        "default",
        0,
        function ({ children: e }) {
          let [o, n] = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              let e = !0;
              return (
                a().then((t) => {
                  e && n(t);
                }),
                () => {
                  e = !1;
                }
              );
            }, []),
            (0, t.jsx)(r.Provider, { value: o, children: e })
          );
        },
      ],
      43516
    );
  },
  59477,
  (e) => {
    "use strict";
    var t = e.i(71682);
    function s() {
      return (0, t.jsxs)("section", {
        id: "bonds",
        children: [
          (0, t.jsx)("h2", { children: "Bonds" }),
          (0, t.jsxs)("p", {
            children: [
              "Host bonds are indexed live from HostBond on Robinhood Chain at ",
              (0, t.jsx)("a", {
                href: "https://robinhoodchain.blockscout.com/address/0x2921d34fd86d3323a5369a270a82814a74250518",
                children: (0, t.jsx)("code", {
                  children: "0x2921d34fd86d3323a5369a270a82814a74250518",
                }),
              }),
              ". The minimum is 5,000 USDG. Read the indexed state at ",
              (0, t.jsx)("code", { children: "GET /api/v1/network/bonds" }),
              " or on ",
              (0, t.jsx)("a", { href: "/hosts/", children: "Hosts" }),
              ".",
            ],
          }),
          (0, t.jsxs)("p", {
            children: [
              "Payouts, fee buy-and-burn and slashing are not switched on at anyroute.tech yet. No payouts are being made. A bond is a work deposit; it promises no payment. ",
              (0, t.jsx)("a", {
                href: "/docs/#host-bonds",
                children: "Read the bond rules and limits",
              }),
              ".",
            ],
          }),
        ],
      });
    }
    var a = e.i(86700),
      o = e.i(68129),
      n = e.i(98248);
    let r = (e) => Number.isSafeInteger(e) && e >= 0,
      i = (e) => "string" == typeof e && /^\d+$/.test(e);
    async function l(e = fetch, t) {
      try {
        let s = await e("/api/v1/network/stats", {
          credentials: "omit",
          cache: "no-store",
          signal: t,
        });
        if (!s.ok) return null;
        let { data: a } = await s.json();
        return !(function (e) {
          if (
            !e ||
            !Number.isFinite(Date.parse(e.as_of)) ||
            !e.hosts ||
            !e.capacity ||
            !e.interest ||
            !e.tokens?.public_lane ||
            ![
              e.hosts.total,
              e.hosts.probation,
              e.hosts.live,
              e.hosts.rejected,
              e.attested_hosts,
              e.capacity.model_count,
              e.interest.total,
            ].every(r) ||
            (null !== e.policy_version &&
              (!r(e.policy_version) || e.policy_version < 1))
          )
            return !1;
          for (let t of [
            e.tokens.public_lane.days_7,
            e.tokens.public_lane.days_30,
          ])
            if (
              null !== t &&
              (!i(t?.lower) ||
                !i(t?.upper_exclusive) ||
                BigInt(t.upper_exclusive) <= BigInt(t.lower))
            )
              return !1;
          return (
            null === e.bonds ||
            (!!i(e.bonds?.total_units) &&
              !!i(e.bonds?.active_units) &&
              6 === e.bonds.decimals &&
              "USDG" === e.bonds.asset &&
              "boolean" == typeof e.bonds.fresh)
          );
        })(a)
          ? null
          : a;
      } catch {
        return null;
      }
    }
    var d = e.i(80637);
    function c({ initialData: e = null }) {
      let s,
        r,
        i,
        [h, p] = (0, n.useState)(e);
      return (
        (0, n.useEffect)(() => {
          let e = new AbortController(),
            t = !0,
            s = async () => {
              let s = await l(fetch, e.signal);
              t && p(s);
            };
          s();
          let a = setInterval(s, 3e4);
          return () => {
            (t = !1), e.abort(), clearInterval(a);
          };
        }, []),
        (0, t.jsxs)("section", {
          className: d.default.section,
          "aria-label": "Network statistics",
          children: [
            (0, t.jsx)("span", {
              className: "eyebrow",
              children: "NETWORK STATISTICS",
            }),
            (0, t.jsx)("div", {
              className: `stats ${d.default.strip}`,
              "data-stagger": !0,
              "aria-live": "polite",
              children: ((s = (e, t) => ({
                label: e,
                value: t ?? null,
                text:
                  null == t ? "No data yet" : Number(t).toLocaleString("en-US"),
              })),
              (r = (e, t) => ({
                label: e,
                value: null,
                text: t
                  ? `${BigInt(t.lower).toLocaleString("en-US")}–${(
                      BigInt(t.upper_exclusive) - 1n
                    ).toLocaleString("en-US")}`
                  : "No data yet",
              })),
              (i = (e, t) => {
                let s;
                return {
                  label: e,
                  value: null,
                  text: h?.bonds?.fresh
                    ? ((s = BigInt(h.bonds[t])),
                      `${(s / 1000000n).toLocaleString("en-US")}${
                        s % 1000000n
                          ? `.${(s % 1000000n)
                              .toString()
                              .padStart(6, "0")
                              .replace(/0+$/, "")}`
                          : ""
                      }`)
                    : "No data yet",
                  unit: "USDG",
                };
              }),
              [
                s("Network hosts", h?.hosts.total),
                s("Attested hosts", h?.attested_hosts),
                s("Models on admitted hosts", h?.capacity.model_count),
                s("Waitlist interest", h?.interest.total),
                r("Public-lane tokens · 7 days", h?.tokens.public_lane.days_7),
                r(
                  "Public-lane tokens · 30 days",
                  h?.tokens.public_lane.days_30
                ),
                i("Total indexed bonds", "total_units"),
                i("Active indexed bonds", "active_units"),
              ]).map((e) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: `stat ${d.default.card}`,
                    "data-reveal": !0,
                    children: [
                      (0, t.jsxs)("strong", {
                        className: null === e.value ? d.default.text : "",
                        children: [
                          null === e.value
                            ? e.text
                            : (0, t.jsx)("span", {
                                "data-count": e.value,
                                children: e.text,
                              }),
                          e.unit && (0, t.jsx)("sup", { children: e.unit }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        children:
                          "Attested hosts" === e.label
                            ? "hardware" ===
                              (0, o.proofBadges)({
                                source: "network",
                                data: h,
                              })[0].key
                              ? (0, t.jsx)(a.default, {
                                  evidence: { source: "network", data: h },
                                })
                              : "Hosts with proven hardware"
                            : e.label,
                      }),
                    ],
                  },
                  `${h?.as_of ?? "empty"}:${e.label}`
                )
              ),
            }),
            h
              ? (0, t.jsxs)("p", {
                  children: [
                    "Hosts: ",
                    h.hosts.probation,
                    " on probation · ",
                    h.hosts.live,
                    " live · ",
                    h.hosts.rejected,
                    " rejected. Policy: ",
                    null === h.policy_version
                      ? "No data yet"
                      : `v${h.policy_version}`,
                    ". Snapshot: ",
                    (0, t.jsx)("time", {
                      dateTime: h.as_of,
                      children: h.as_of
                        .replace("T", " ")
                        .replace(/\.\d+Z$/, " UTC"),
                    }),
                    ".",
                    0 === h.hosts.total && " No data yet from network hosts.",
                    h.bonds &&
                      !h.bonds.fresh &&
                      " The bond index is not current.",
                  ],
                })
              : (0, t.jsx)("p", {
                  children:
                    "No data yet. Network statistics appear when available.",
                }),
            (0, t.jsxs)("p", {
              className: d.default.note,
              children: [
                "Attested hosts require fresh successful attestation and admission evidence. Capacity counts distinct eligible models, not throughput. Token ranges cover retained public-lane records in 100,000-token buckets; this is not differential privacy. Private-lane host totals are unavailable: existing DP counters at ",
                (0, t.jsx)("code", { children: "/api/v1/stats" }),
                " cover the router as a whole. Waitlist entries express interest, not admission. ",
                (0, t.jsx)("a", {
                  href: "/docs/#network-stats",
                  children: "Definitions and limits",
                }),
                ".",
              ],
            }),
          ],
        })
      );
    }
    var h = e.i(17307),
      p = e.i(92882),
      u = e.i(43516);
    let m = [
        ["host_gpu", "Host (GPU)"],
        ["host_cpu", "Host (CPU only)"],
        ["relay", "Relay operator"],
        ["witness", "Witness"],
        ["developer", "Developer who needs private capacity"],
      ],
      y = [
        ["africa", "Africa"],
        ["antarctica", "Antarctica"],
        ["asia", "Asia"],
        ["europe", "Europe"],
        ["north_america", "North America"],
        ["oceania", "Oceania"],
        ["south_america", "South America"],
      ],
      f = [
        ["usdg", "USDG"],
        ["anyr", "$ANYR"],
        ["any", "No preference"],
      ],
      x = (e) => e.length;
    function g(e) {
      let t = {};
      for (let [s, a] of [
        ["role", m],
        ["region", y],
        ["paid_in", f],
      ])
        a.some(([t]) => t === e[s]) || (t[s] = "Choose an option.");
      for (let [s, a] of [
        ["hardware", 200],
        ["readiness", 300],
        ["contact", 120],
        ["website", 200],
      ])
        ("string" != typeof e[s] || x(e[s]) > a) &&
          (t[s] = `Use at most ${a} characters.`);
      return t;
    }
    async function w(e, t = fetch) {
      if (Object.keys(g(e)).length)
        throw Error("Please check the form fields.");
      let s = await t("/api/v1/network/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(e),
        cache: "no-store",
        credentials: "omit",
      });
      if (!s.ok)
        throw Error(
          429 === s.status
            ? "Too many requests. Please try again later."
            : "Your sign-up could not be saved. Please try again."
        );
      let a = await s.json();
      if (
        !/^[0-9a-f-]{36}$/.test(a.id || "") ||
        !/^[0-9a-f]{64}$/.test(a.delete_code || "")
      )
        throw Error(
          "The server did not provide a delete code. Please try again."
        );
      return a;
    }
    async function j(e, t, s = fetch) {
      let a = await s(`/api/v1/network/waitlist/${encodeURIComponent(e)}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ delete_code: t }),
        cache: "no-store",
        credentials: "omit",
      });
      if (!a.ok)
        throw Error(
          404 === a.status
            ? "No entry matched that id and code."
            : "Deletion could not be completed. Please try again later."
        );
    }
    var b = e.i(52111);
    function v() {
      let [e, s] = (0, n.useState)({
          role: "",
          hardware: "",
          readiness: "",
          region: "",
          contact: "",
          paid_in: "any",
          website: "",
        }),
        [a, o] = (0, n.useState)({}),
        [r, i] = (0, n.useState)(!1),
        [l, d] = (0, n.useState)(""),
        [c, h] = (0, n.useState)(null),
        [p, u] = (0, n.useState)(""),
        [x, v] = (0, n.useState)(""),
        _ = (t) => s({ ...e, [t.target.name]: t.target.value }),
        k = (s, o, n) =>
          (0, t.jsxs)("label", {
            children: [
              o,
              (0, t.jsxs)("select", {
                name: s,
                value: e[s],
                onChange: _,
                required: !0,
                "aria-invalid": !!a[s],
                "aria-describedby": a[s] ? `${s}-error` : void 0,
                children: [
                  (0, t.jsx)("option", { value: "", children: "Choose one" }),
                  n.map(([e, s]) =>
                    (0, t.jsx)("option", { value: e, children: s }, e)
                  ),
                ],
              }),
              a[s] &&
                (0, t.jsx)("span", {
                  id: `${s}-error`,
                  className: b.default.error,
                  children: a[s],
                }),
            ],
          });
      async function N(t) {
        t.preventDefault();
        let a = g(e);
        if ((o(a), d(""), !Object.keys(a).length)) {
          i(!0);
          try {
            let t = await w(e);
            h(t),
              u(t.id),
              v(t.delete_code),
              s({
                role: "",
                hardware: "",
                readiness: "",
                region: "",
                contact: "",
                paid_in: "any",
                website: "",
              });
          } catch (e) {
            d(e.message);
          } finally {
            i(!1);
          }
        }
      }
      async function S(e) {
        e.preventDefault(), i(!0), d("");
        try {
          await j(p, x),
            h(null),
            u(""),
            v(""),
            d("Your entry has been deleted.");
        } catch (e) {
          d(e.message);
        } finally {
          i(!1);
        }
      }
      return (0, t.jsxs)("div", {
        className: b.default.formArea,
        children: [
          c
            ? (0, t.jsxs)("div", {
                role: "status",
                className: b.default.saved,
                children: [
                  (0, t.jsx)("h3", { children: "You’re on the waitlist." }),
                  (0, t.jsx)("p", {
                    children:
                      "Save both values below. Your delete code is shown once; we keep only its SHA-256. This is an interest sign-up, not permission to host.",
                  }),
                  (0, t.jsxs)("dl", {
                    children: [
                      (0, t.jsx)("dt", { children: "Entry id" }),
                      (0, t.jsx)("dd", {
                        children: (0, t.jsx)("code", { children: c.id }),
                      }),
                      (0, t.jsx)("dt", { children: "Delete code" }),
                      (0, t.jsx)("dd", {
                        children: (0, t.jsx)("code", {
                          children: c.delete_code,
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : (0, t.jsxs)("form", {
                onSubmit: N,
                className: b.default.form,
                children: [
                  k("role", "I want to join as", m),
                  (0, t.jsxs)("label", {
                    children: [
                      "Hardware ",
                      (0, t.jsx)("span", {
                        className: b.default.small,
                        children:
                          "GPU model and count; CPU TEE type (TDX, SEV-SNP, none or not sure). Up to 200 characters.",
                      }),
                      (0, t.jsx)("input", {
                        name: "hardware",
                        value: e.hardware,
                        onChange: _,
                        maxLength: 200,
                        "aria-invalid": !!a.hardware,
                      }),
                      a.hardware &&
                        (0, t.jsx)("span", {
                          className: b.default.error,
                          children: a.hardware,
                        }),
                    ],
                  }),
                  (0, t.jsxs)("label", {
                    children: [
                      "Readiness check result ",
                      (0, t.jsx)("span", {
                        className: b.default.small,
                        children:
                          "Optional. Paste the summary line, up to 300 characters.",
                      }),
                      (0, t.jsx)("textarea", {
                        name: "readiness",
                        value: e.readiness,
                        onChange: _,
                        maxLength: 300,
                        rows: 3,
                        "aria-invalid": !!a.readiness,
                      }),
                      a.readiness &&
                        (0, t.jsx)("span", {
                          className: b.default.error,
                          children: a.readiness,
                        }),
                    ],
                  }),
                  k("region", "Region · continent only", y),
                  (0, t.jsxs)("label", {
                    children: [
                      "How to reach you ",
                      (0, t.jsx)("span", {
                        className: b.default.small,
                        children:
                          "Optional. A handle or email in whatever form you prefer, up to 120 characters.",
                      }),
                      (0, t.jsx)("input", {
                        name: "contact",
                        value: e.contact,
                        onChange: _,
                        maxLength: 120,
                        autoComplete: "off",
                        "aria-invalid": !!a.contact,
                      }),
                      a.contact &&
                        (0, t.jsx)("span", {
                          className: b.default.error,
                          children: a.contact,
                        }),
                    ],
                  }),
                  k("paid_in", "Paid in · payout preference", f),
                  (0, t.jsx)("div", {
                    className: b.default.honey,
                    "aria-hidden": "true",
                    children: (0, t.jsxs)("label", {
                      children: [
                        "Website",
                        (0, t.jsx)("input", {
                          name: "website",
                          value: e.website,
                          onChange: _,
                          tabIndex: -1,
                          autoComplete: "off",
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("p", {
                    className: b.default.small,
                    children: [
                      "Describe hardware only. Please don’t paste prompts or other sensitive information. We keep a minute-specific keyed digest for rate limits; the owner can read your submitted fields. ",
                      (0, t.jsx)("a", {
                        href: "/keep/",
                        children: "What we keep",
                      }),
                      ".",
                    ],
                  }),
                  (0, t.jsx)("p", {
                    id: "network-privacy",
                    className: b.default.promise,
                    children:
                      "We keep only what you type here, to count interest and contact you if you asked us to. We don't store your IP address. We delete the list when the program launches or is cancelled.",
                  }),
                  (0, t.jsx)("button", {
                    type: "submit",
                    disabled: r,
                    "aria-describedby": "network-privacy",
                    className: "ar-button",
                    children: r ? "Saving…" : "Join the waitlist",
                  }),
                ],
              }),
          (0, t.jsx)("p", {
            role: "status",
            "aria-live": "polite",
            className: b.default.error,
            children: l,
          }),
          (0, t.jsxs)("details", {
            className: b.default.delete,
            children: [
              (0, t.jsx)("summary", { children: "Delete a sign-up" }),
              (0, t.jsxs)("form", {
                onSubmit: S,
                className: b.default.form,
                children: [
                  (0, t.jsxs)("label", {
                    children: [
                      "Entry id",
                      (0, t.jsx)("input", {
                        value: p,
                        onChange: (e) => u(e.target.value),
                        required: !0,
                        pattern: "[0-9a-f-]{36}",
                        autoComplete: "off",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("label", {
                    children: [
                      "Delete code",
                      (0, t.jsx)("input", {
                        value: x,
                        onChange: (e) => v(e.target.value),
                        required: !0,
                        pattern: "[0-9a-f]{64}",
                        autoComplete: "off",
                      }),
                    ],
                  }),
                  (0, t.jsx)("button", {
                    type: "submit",
                    disabled: r,
                    className: "ar-button secondary",
                    children: "Delete my entry",
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)("noscript", {
            children:
              "Enable JavaScript to submit or delete a sign-up. The hardware checker works independently.",
          }),
        ],
      });
    }
    function _({ sha: e }) {
      return (0, t.jsxs)("section", {
        id: "join",
        children: [
          (0, t.jsx)("span", {
            className: "eyebrow",
            children: "HOST REGISTRATION",
          }),
          (0, t.jsx)("h2", {
            children: (0, t.jsx)(u.HostCopy, {
              closed: "When hosting opens",
              open: "Join as a host",
            }),
          }),
          (0, t.jsx)("p", {
            role: "status",
            children: (0, t.jsx)(u.HostCopy, {
              closed: (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("strong", { children: "Hosting isn’t open yet." }),
                  " These commands are for when host registration opens; they do not admit a host while registration is closed.",
                ],
              }),
              open: (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("strong", {
                    children: "Host registration is open.",
                  }),
                  " Admission requires fresh hardware attestation and the published host policy. New hosts start on probation.",
                ],
              }),
            }),
          }),
          (0, t.jsxs)("p", {
            children: [
              (0, t.jsx)("strong", { children: "Run the approved build." }),
              " The published host policy (",
              (0, t.jsx)("code", { children: "/api/v1/network/policy" }),
              ") admits one build today: Intel TDX in a dstack confidential VM (for example Phala Cloud) running the pinned sidecar, llama.cpp and Qwen2.5 0.5B. The exact recipe is open source: ",
              (0, t.jsx)("a", {
                href: "https://github.com/AnyRouteRH/AnyRoute/tree/main/deploy/network/approved/tdx-qwen2.5-0.5b",
                children: "deploy/network/approved/tdx-qwen2.5-0.5b",
              }),
              ". Other builds, including ones made with the general installer ",
              (0, t.jsx)("code", { children: "deploy/seal/install.sh" }),
              ", are refused with the reason until the policy lists them.",
            ],
          }),
          (0, t.jsx)("pre", {
            className: b.default.code,
            children: (0, t.jsx)("code", {
              children:
                "phala deploy -n my-anyroute-host -c docker-compose.yml -t tdx.small --wait",
            }),
          }),
          (0, t.jsxs)("p", {
            children: [
              "Then download ",
              (0, t.jsx)("a", {
                href: "/network/join.mjs",
                children: "join.mjs",
              }),
              ", compare its SHA-256 below and inspect it before running. Requires Node 22 or later. Replace the capitalized values with your host settings and model ids. Keep the operator private key and sidecar API key in separate files readable only by you. The sidecar must already hold the SHA-256 of the same API key in its auth.keys configuration.",
            ],
          }),
          (0, t.jsx)("pre", {
            className: b.default.code,
            children: (0, t.jsx)("code", {
              children:
                "node join.mjs --key-file /path/to/operator.key --api-key-file /path/to/sidecar.key --name HOST_NAME --endpoint https://SIDECAR --payout-address 0xPAYOUT_ADDRESS --models MODEL_ID",
            }),
          }),
          (0, t.jsxs)("p", {
            children: [
              (0, t.jsx)("strong", {
                children:
                  "Use a dedicated operator wallet, not a wallet holding funds.",
              }),
              " The command signs wallet-auth messages, submits your host details, then supplies the sidecar credential to the router. It sends no transactions. ",
              (0, t.jsx)("code", { children: "--dry-run" }),
              " prints canonical signup and credential bodies without reading keys or sending requests; api_key is shown as <redacted> and the signup-assigned provider id as <provider_id>. ",
              (0, t.jsx)("code", { children: "--status PROVIDER_ID" }),
              " polls status five times; ",
              (0, t.jsx)("code", { children: "--help" }),
              " lists options.",
            ],
          }),
          (0, t.jsxs)("p", {
            children: [
              "Omit the API key source to register first, then use ",
              (0, t.jsx)("code", {
                children:
                  "node join.mjs --credential-only PROVIDER_ID --key-file /path/to/operator.key --api-key-file /path/to/sidecar.key",
              }),
              ". ",
              (0, t.jsx)("code", { children: "--api-key-env NAME" }),
              " selects an environment variable instead. The trimmed API key must contain 16–500 characters; POSIX files must not be group or world readable. The router stores the credential encrypted and can decrypt it to call your sidecar.",
            ],
          }),
          (0, t.jsxs)("dl", {
            className: b.default.digest,
            children: [
              (0, t.jsx)("dt", { children: "join.mjs SHA-256" }),
              (0, t.jsx)("dd", {
                children: (0, t.jsx)("code", {
                  "data-network-join-sha256": e,
                  children: e,
                }),
              }),
            ],
          }),
          (0, t.jsx)("p", {
            children:
              "Your signup details go to the router, including your operator wallet, endpoint, payout address, model ids and any contact you supply. AnyRoute’s router still reads inference requests in memory.",
          }),
        ],
      });
    }
    let k = [
        [
          "Do I need to do KYC?",
          "The planned program has no KYC and no contracts. Your machine would prove itself through hardware attestation. When payouts exist, payout addresses would be screened against the public sanctions list.",
        ],
        [
          "What hardware do I need?",
          "For GPU models: an NVIDIA H100, H200 or B200-class GPU that supports confidential-computing mode, on an Intel TDX or AMD SEV-SNP host. For small models, a TDX or SEV-SNP CPU server may be enough. The checker gives hints; attestation would establish eligibility.",
        ],
        [
          "How would I get paid?",
          "Paid per token served, in USDG, claimable on-chain. This is a plan, not a live program. No amounts are promised. The form lets you record a payout preference.",
        ],
        [
          "Can I see the prompts my machine serves?",
          "The planned design processes prompts inside the enclave, with attestation of the measured code intended to protect that memory from the host operator. This depends on the hardware, measured software and its policy. AnyRoute’s router still reads requests in memory; the enclave runs the model.",
        ],
        [
          "When does it launch?",
          "There’s no date yet. We’re checking interest first, and your sign-up helps decide when host onboarding opens. Until then, outside hosts can’t join.",
        ],
        [
          "Can I join without leaving contact details?",
          "Yes. Contact is optional. Keep your entry id and delete code to remove your entry at any time. We delete the list when the program launches or is cancelled.",
        ],
      ],
      N = [
        [
          "Do I need to do KYC?",
          "No KYC and no contracts. Your machine proves itself through hardware attestation. Operator and payout addresses are screened against the public sanctions list when you join.",
        ],
        [
          "What hardware do I need?",
          "Today the host policy admits one build: Intel TDX in a dstack confidential VM (for example Phala Cloud) running the approved recipe with Qwen2.5 0.5B. GPU and SEV-SNP builds aren’t on the policy yet. The checker gives hints; attestation establishes eligibility against the published host policy.",
        ],
        [
          "How do I get paid?",
          "Payouts to network hosts aren’t switched on yet. The plan is USDG per token served, counted from signed receipts. No amounts are promised. Your payout address is recorded when you join.",
        ],
        [
          "Can I see the prompts my machine serves?",
          "The enclave processes prompts, with attestation of the measured code intended to protect that memory from the host operator. This depends on the hardware, measured software and its policy. AnyRoute’s router still reads requests in memory; the enclave runs the model.",
        ],
        [
          "Is it open?",
          "Yes, for early hosts running an approved build (see the host policy at /api/v1/network/policy). New hosts start on probation.",
        ],
        [
          "Can I join without leaving contact details?",
          "Yes. Contact is optional. Keep your entry id and delete code to remove your waitlist entry at any time. Hosting signup requires an operator wallet, endpoint, payout address and model ids; contact is optional.",
        ],
      ];
    e.s(
      [
        "default",
        0,
        function ({ sha: e, joinSha: a }) {
          return (0, t.jsxs)("main", {
            className: "page-main",
            id: "content",
            children: [
              (0, t.jsxs)("div", {
                className: "page-title",
                "data-reveal": !0,
                children: [
                  (0, t.jsx)("span", {
                    className: "eyebrow",
                    children: (0, t.jsx)(u.HostCopy, {
                      closed: "ANYROUTE NETWORK · WE’RE GAUGING INTEREST",
                      open: "ANYROUTE NETWORK · OPEN FOR EARLY HOSTS",
                    }),
                  }),
                  (0, t.jsxs)("h1", {
                    children: [
                      "Private AI needs",
                      (0, t.jsx)("br", {}),
                      "private hardware.",
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)("em", { children: "Yours counts." }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    children: (0, t.jsx)(u.HostCopy, {
                      closed:
                        "The AnyRoute Network is coming: confidential hardware, owned by anyone, serving private AI and paid per token served. Hosting isn’t open yet. Join the waitlist and check your hardware now.",
                      open: "Hosting is open for early hosts running an approved build. Check your hardware, then join with one command.",
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "button-row",
                    children: [
                      (0, t.jsx)(u.HostAction, {}),
                      (0, t.jsx)(p.Button, {
                        href: "#readiness",
                        secondary: !0,
                        children: "Check your hardware",
                      }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    children: (0, t.jsx)(u.HostCopy, {
                      closed: null,
                      open: (0, t.jsxs)(t.Fragment, {
                        children: [
                          "Not ready yet? ",
                          (0, t.jsx)("a", {
                            href: "#waitlist",
                            children: "Join the waitlist.",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(c, {}),
              (0, t.jsxs)("div", {
                className: "side-layout",
                children: [
                  (0, t.jsxs)("nav", {
                    className: "side-nav",
                    "aria-label": "Sections",
                    children: [
                      (0, t.jsx)("span", {
                        className: "side-nav-label",
                        children: "On this page",
                      }),
                      [
                        [
                          "how",
                          (0, t.jsx)(u.HostCopy, {
                            closed: "How it will work",
                            open: "How it works",
                          }),
                        ],
                        ["today", "What’s true today"],
                        ["bonds", "Bonds"],
                        ["who", "Who it’s for"],
                        ["readiness", "Readiness checker"],
                        ["waitlist", "Join the waitlist"],
                        ["faq", "FAQ"],
                      ].map(([e, s]) =>
                        (0, t.jsx)("a", { href: `#${e}`, children: s }, e)
                      ),
                    ],
                  }),
                  (0, t.jsxs)("article", {
                    className: `page-body prose ${b.default.body}`,
                    children: [
                      (0, t.jsxs)("section", {
                        id: "how",
                        children: [
                          (0, t.jsx)("span", {
                            className: "eyebrow",
                            children: (0, t.jsx)(u.HostCopy, {
                              closed: "THE PLAN",
                              open: "HOW IT WORKS",
                            }),
                          }),
                          (0, t.jsx)("h2", {
                            children: "Your hardware proves what it runs.",
                          }),
                          (0, t.jsx)("p", {
                            children: (0, t.jsx)(u.HostCopy, {
                              closed:
                                "No KYC. No contracts. The machine would prove itself. This describes the proposed program; hosting and payouts are not available.",
                              open: "No KYC. No contracts. The machine proves itself through hardware attestation and the published host policy. New hosts start on probation.",
                            }),
                          }),
                          (0, t.jsx)("ol", {
                            className: "case-steps",
                            children: [
                              [
                                "Join with one command",
                                (0, t.jsx)(u.HostCopy, {
                                  closed:
                                    "When onboarding opens, an installer would connect your machine.",
                                  open: "The installer connects your machine; the join command submits it for admission.",
                                }),
                              ],
                              [
                                "Prove the hardware",
                                (0, t.jsx)(u.HostCopy, {
                                  closed:
                                    "Attestation would check the enclave and the measured software before traffic is accepted.",
                                  open: "Attestation checks the enclave and the measured software against the published host policy before traffic is accepted.",
                                }),
                              ],
                              [
                                "Serve private traffic",
                                (0, t.jsx)(u.HostCopy, {
                                  closed:
                                    "The enclave would run the model. AnyRoute’s router still reads requests in memory.",
                                  open: "The enclave runs the model. AnyRoute’s router still reads requests in memory.",
                                }),
                              ],
                              [
                                "Paid per token served",
                                (0, t.jsx)(u.HostCopy, {
                                  closed:
                                    "The plan is USDG payouts for tokens served, claimable on-chain.",
                                  open: (0, t.jsx)(h.default, {}),
                                }),
                              ],
                            ].map(([e, s], a) =>
                              (0, t.jsxs)(
                                "li",
                                {
                                  className: "case-step is-in",
                                  children: [
                                    (0, t.jsxs)("span", {
                                      className: "step-n",
                                      children: ["STEP ", a + 1],
                                    }),
                                    (0, t.jsx)("h3", { children: e }),
                                    (0, t.jsx)("p", { children: s }),
                                  ],
                                },
                                e
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("section", {
                        id: "today",
                        children: [
                          (0, t.jsx)("span", {
                            className: "eyebrow",
                            children: "CURRENT SERVING",
                          }),
                          (0, t.jsx)("h2", {
                            children: "There’s already a foundation.",
                          }),
                          (0, t.jsxs)("p", {
                            children: [
                              "AnyRoute’s attested lane already serves 23 open models inside hardware enclaves, with a signed receipt for each call. ",
                              (0, t.jsx)("a", {
                                href: "/seal/",
                                children:
                                  "See the serving protocol and current status",
                              }),
                              ".",
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            children: [
                              "Public host measurements and Sigstore records let you inspect what is measured. Receipt roots and anchors make served work checkable where anchoring is switched on. ",
                              (0, t.jsx)("a", {
                                href: "/verify/",
                                children: "Verify a provider and its evidence",
                              }),
                              ".",
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            children: [
                              "A one-command installer exists in the open-source repository. ",
                              (0, t.jsx)(u.HostCopy, {
                                closed:
                                  "It does not admit outside hosts to a network today.",
                                open: "Hosts running an approved build can submit their machine for admission.",
                              }),
                              " Tor onion access with blind tokens separates token issuance from spending; those protections depend on the transport and lane you use. ",
                              (0, t.jsx)("a", {
                                href: "/seal/",
                                children: "Read the conditions and limits",
                              }),
                              ".",
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            children: [
                              "AnyRoute’s router still reads requests in memory; the enclave runs the model. Receipts store hashes, token counts and cost, not prompt text. ",
                              (0, t.jsx)("a", {
                                href: "/keep/",
                                children:
                                  "See the full inventory of what we keep",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)(s, {}),
                      (0, t.jsxs)("section", {
                        id: "who",
                        children: [
                          (0, t.jsx)("h2", {
                            children: "Bring the hardware. Or the demand.",
                          }),
                          (0, t.jsxs)("ul", {
                            children: [
                              (0, t.jsxs)("li", {
                                children: [
                                  (0, t.jsx)("strong", {
                                    children:
                                      "Confidential GPU owners and fleet operators:",
                                  }),
                                  " NVIDIA H100, H200 or B200-class servers with GPU confidential-computing support on Intel TDX or AMD SEV-SNP hosts.",
                                ],
                              }),
                              (0, t.jsxs)("li", {
                                children: [
                                  (0, t.jsx)("strong", {
                                    children: "Confidential cloud users:",
                                  }),
                                  " rented TDX or SEV-SNP machines with spare capacity. Renting solely to host may not cover your costs.",
                                ],
                              }),
                              (0, t.jsxs)("li", {
                                children: [
                                  (0, t.jsx)("strong", {
                                    children: "Small-server owners:",
                                  }),
                                  " TDX or SEV-SNP CPU servers for small models.",
                                ],
                              }),
                              (0, t.jsxs)("li", {
                                children: [
                                  (0, t.jsx)("strong", {
                                    children: "Relay operators and witnesses:",
                                  }),
                                  " record your interest in supporting the proposed network.",
                                ],
                              }),
                              (0, t.jsxs)("li", {
                                children: [
                                  (0, t.jsx)("strong", {
                                    children: "Developers and agents:",
                                  }),
                                  " tell us you need more private inference capacity.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("section", {
                        id: "readiness",
                        children: [
                          (0, t.jsx)("span", {
                            className: "eyebrow",
                            children: "READ-ONLY · NO NETWORK CALLS",
                          }),
                          (0, t.jsx)("h2", {
                            children: "What can your machine do?",
                          }),
                          (0, t.jsx)("p", {
                            children:
                              "Download the checker, compare its SHA-256 with the value below, inspect it, then run it. It checks guest devices, host support hints and NVIDIA confidential-computing queries. It changes nothing and sends nothing. Kernel log permissions can limit the answer; sudo may reveal more, but the checker never asks for root.",
                          }),
                          (0, t.jsx)("pre", {
                            className: b.default.code,
                            children: (0, t.jsx)("code", {
                              children:
                                "curl -fsSLO https://anyroute.tech/network/check.sh && sha256sum check.sh && sh check.sh",
                            }),
                          }),
                          (0, t.jsx)("p", {
                            className: b.default.small,
                            children:
                              "The command prints the digest before running. Compare the downloaded file before running it; you can perform the three steps separately.",
                          }),
                          (0, t.jsxs)("dl", {
                            className: b.default.digest,
                            children: [
                              (0, t.jsx)("dt", {
                                children: "check.sh SHA-256",
                              }),
                              (0, t.jsx)("dd", {
                                children: (0, t.jsx)("code", {
                                  "data-network-check-sha256": e,
                                  children: e,
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            children: (0, t.jsx)("a", {
                              href: "/network/check.sh",
                              children: "Read or download check.sh",
                            }),
                          }),
                          (0, t.jsxs)("p", {
                            children: [
                              (0, t.jsx)("strong", {
                                children: "This is a hint.",
                              }),
                              " ",
                              (0, t.jsx)(u.HostCopy, {
                                closed:
                                  "Real eligibility is proven by attestation when hosting opens.",
                                open: "Real eligibility is proven by attestation against the published host policy.",
                              }),
                              " A capability mention or an enabled GPU mode is not proof of an eligible machine. Paste the summary into the form only if you choose.",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("section", {
                        id: "waitlist",
                        children: [
                          (0, t.jsx)("span", {
                            className: "eyebrow",
                            children: "WAITLIST",
                          }),
                          (0, t.jsx)("h2", {
                            children: "Tell us what you’d bring.",
                          }),
                          (0, t.jsx)("p", {
                            children:
                              "No names required. Contact details are optional. This form works on this site’s onion address using the same relative API path, with no third-party requests.",
                          }),
                          (0, t.jsx)(v, {}),
                        ],
                      }),
                      (0, t.jsx)(_, { sha: a }),
                      (0, t.jsxs)("section", {
                        id: "faq",
                        children: [
                          (0, t.jsx)("h2", {
                            children: "A few straight answers.",
                          }),
                          k.map(([e, s], a) =>
                            (0, t.jsxs)(
                              "details",
                              {
                                className: b.default.faq,
                                children: [
                                  (0, t.jsx)("summary", {
                                    children: (0, t.jsx)(u.HostCopy, {
                                      closed: e,
                                      open: N[a][0],
                                    }),
                                  }),
                                  (0, t.jsx)("p", {
                                    children: (0, t.jsx)(u.HostCopy, {
                                      closed: s,
                                      open: N[a][1],
                                    }),
                                  }),
                                ],
                              },
                              e
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
      ],
      59477
    );
  },
  52111,
  (e) => {
    e.v({
      body: "network-module___p5qCa__body",
      button: "network-module___p5qCa__button",
      code: "network-module___p5qCa__code",
      copy: "network-module___p5qCa__copy",
      copyState: "network-module___p5qCa__copyState",
      delete: "network-module___p5qCa__delete",
      digest: "network-module___p5qCa__digest",
      error: "network-module___p5qCa__error",
      faq: "network-module___p5qCa__faq",
      form: "network-module___p5qCa__form",
      formArea: "network-module___p5qCa__formArea",
      honey: "network-module___p5qCa__honey",
      promise: "network-module___p5qCa__promise",
      saved: "network-module___p5qCa__saved",
      small: "network-module___p5qCa__small",
      steps: "network-module___p5qCa__steps",
    });
  },
  80637,
  (e) => {
    e.v({
      card: "stats-module__UrxsnW__card",
      note: "stats-module__UrxsnW__note",
      section: "stats-module__UrxsnW__section",
      strip: "stats-module__UrxsnW__strip",
      text: "stats-module__UrxsnW__text",
    });
  },
  17307,
  (e) => {
    "use strict";
    var t = e.i(71682),
      s = e.i(98248);
    async function a(e = fetch) {
      try {
        let t = await e("/api/v1/status", {
          cache: "no-store",
          credentials: "omit",
          signal: AbortSignal.timeout(1e4),
        });
        if (!t.ok) return { open: !1, feeBps: 500 };
        let s = (await t.json())?.data?.network,
          a = s?.fee_bps;
        return {
          open: s?.payouts_open === !0,
          feeBps: Number.isInteger(a) && a >= 0 && a <= 2e3 ? a : 500,
        };
      } catch {
        return { open: !1, feeBps: 500 };
      }
    }
    e.s(
      [
        "default",
        0,
        function ({
          closed:
            e = "Payouts to network hosts aren’t switched on yet. The plan is USDG per token served, from signed receipts. No amounts are promised.",
        }) {
          let [o, n] = (0, s.useState)({ open: !1, feeBps: 500 });
          return (
            (0, s.useEffect)(() => {
              let e = !0;
              return (
                a().then((t) => {
                  e && n(t);
                }),
                () => {
                  e = !1;
                }
              );
            }, []),
            (0, t.jsx)("span", {
              children: o.open
                ? `Paid per token served, from receipts in confirmed per-host roots. Weekly net USDG payouts; the ${
                    o.feeBps / 100
                  }% network fee buys and burns $ANYR.`
                : e,
            })
          );
        },
      ],
      17307
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
    let s = [
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
      let s =
        e.architecture?.[`${t}_modalities`] ??
        e[`${t}_modalities`] ??
        e["input" === t ? "inputs" : "outputs"];
      if (Array.isArray(s)) return s;
      let o = e.architecture?.modality;
      return "string" == typeof o && o.includes("->")
        ? o.split("->")[+("input" !== t)].split("+")
        : ["text"];
    }
    function o(e) {
      return Array.isArray(e?.capabilities)
        ? s.filter((t) => e.capabilities.includes(t.key)).map((e) => e.key)
        : (function (e = {}) {
            let t,
              o = a(e, "input"),
              n = a(e, "output"),
              r = e.supported_parameters ?? e.params ?? [],
              i =
                !0 === e.attested_available ||
                (null == e.attested_available &&
                  (e.disclosure?.best === "attested" || !0 === e.attested)),
              l = {
                vision: o.includes("image"),
                imageOut: n.includes("image"),
                audio: o.includes("audio") || n.includes("audio"),
                tools:
                  ((t = "tools"),
                  r instanceof Set
                    ? r.has(t)
                    : Array.isArray(r) && r.includes(t)),
                longContext:
                  Number(
                    e.context_length ??
                      e.contextLength ??
                      e.context ??
                      e.top_provider?.context_length ??
                      0
                  ) >= 128e3,
                attested: i,
                network: !0 === e.network_host_available,
                encrypted: !0 === e.encrypted_chat_available,
              };
            return s.filter((e) => l[e.key]).map((e) => e.key);
          })(e ?? {});
    }
    let n = (e, t) => o(e).includes(t);
    function r(e, t = Date.now()) {
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
        s,
        "hasModelCapability",
        0,
        n,
        "modelCapabilities",
        0,
        o,
        "modelModalities",
        0,
        a,
      ],
      45482
    ),
      e.s(["sealedLabel", 0, r], 64265);
    let i = Object.freeze({
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
      let { source: s } = e,
        a = e.data || {},
        o = !1,
        p = !1,
        u = !1,
        m = !1,
        y = !1,
        f = "",
        x = "",
        g = "";
      if ("model" === s)
        (o =
          c(a, t) &&
          c(a.attestation || {}, t) &&
          !1 !== a.attested_available &&
          n(a, "attested")),
          (g =
            "Available endpoint: routing may choose another provider. Ordinary Harness chat is readable by the router.");
      else if ("host" === s)
        (o =
          !0 === a.attested &&
          a.attestation?.status === "attested" &&
          c(a.attestation, t)),
          (f = a.id),
          (g =
            "Router record when loaded; refresh to check again. Build admission is a separate check.");
      else if ("admission" === s)
        (o = !0 === a.attested && c(a, t)),
          (f = e.providerId),
          (g =
            "Router record when loaded; admission and routing health are separate checks.");
      else if ("network" === s) {
        let e = t - Date.parse(a.as_of || "");
        (o =
          Number.isSafeInteger(a.attested_hosts) &&
          a.attested_hosts > 0 &&
          e >= 0 &&
          e < 3e4 &&
          c(a, t)),
          (g =
            "Count of hosts with fresh successful hardware and admission checks in this snapshot; inspect each host record before relying on it.");
      } else if ("sealed" === s)
        g = (o = c(a, t) && !!r(a, t))
          ? `Sealed hosting \xb7 image ${a.agent_image_digest}. Measured code is not audited code.`
          : "Sealed hosting has no current hardware proof in this record.";
      else if ("profile" === s)
        g =
          "This profile does not publish current hardware evidence. Owner-supplied capabilities are separate.";
      else if ("generation" === s)
        (y = !0 === a.live && d(a.signature)),
          (x = a.id),
          (g =
            "This list does not include hardware evidence; inspect the receipt for the path used.");
      else if ("ledger" === s)
        (y = !!l(a.receipt_id)),
          (x = a.receipt_id),
          (g =
            "This ledger records a receipt id; its signature has not been checked in this browser.");
      else if ("receipt" === s) {
        let e = a.payload || {};
        (x = a.id || e.id),
          (f = e.provider),
          (y = d(a.sig)),
          (m = "cache" === e.mode || "cache" === e.provider);
        let s = e.upstream_attestation;
        (p =
          (o =
            !m &&
            "attested" === e.disclosure &&
            !0 !== e.attestation_simulated &&
            c(e, t) &&
            (!s || (!0 === s.attested && c(s, t)))) &&
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
          (g = o
            ? "The receipt records the hardware check for this call; it does not establish a current check for a later call."
            : "");
      } else
        "attestation" === s &&
          ((o = "attested" === a.status && c(a, t)),
          (f = a.provider),
          (g = "Router record when loaded; refresh to check again."));
      let w = m
          ? "cached"
          : p
          ? "encrypted"
          : u
          ? "unlinkable"
          : o
          ? "hardware"
          : "standard",
        j = (e) => ({
          key: e,
          ...i[e],
          hardware: "signed" !== e && o,
          context: "signed" === e ? "" : g,
          href: (function (e, { providerId: t, receiptId: s } = {}) {
            let a = new URLSearchParams();
            return (
              l(t) && a.set("p", t),
              l(s) && a.set("r", s),
              `/verify/${a.size ? "?" + a : ""}#proof-${e}`
            );
          })(e, { providerId: f, receiptId: x }),
        });
      return [...(e.signedOnly ? [] : [j(w)]), ...(y ? [j("signed")] : [])];
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
          now: s,
          dark: a = !1,
          linked: o = !0,
          explain: n = !1,
        }) {
          return (0, t.jsx)("span", {
            className: p.default.group,
            "data-dark": a || void 0,
            children: h(e, s).map((e) =>
              (0, t.jsxs)(
                "span",
                {
                  className: p.default.item,
                  children: [
                    o && !n
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
                    n
                      ? (0, t.jsxs)("span", {
                          className: p.default.explanation,
                          children: [e.explanation, " ", e.context],
                        })
                      : !o &&
                        (0, t.jsxs)("span", {
                          className: "sr-only",
                          children: [e.explanation, " ", e.context],
                        }),
                    o &&
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
]);
