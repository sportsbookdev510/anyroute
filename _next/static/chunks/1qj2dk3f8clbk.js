(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  67898,
  (e) => {
    "use strict";
    var t = e.i(71682),
      n = e.i(98248),
      a = e.i(92882),
      s = e.i(55616);
    function r({ current: e, onNavigate: t }) {
      return (0, n.createElement)(
        "nav",
        { "aria-label": "Account sections" },
        s.ACCOUNT_GROUPS.map((a) =>
          (0, n.createElement)(
            "div",
            { key: a.title },
            (0, n.createElement)("span", { className: "eyebrow" }, a.title),
            ...a.ids.map((a) => {
              let r = s.ACCOUNT_SECTIONS.find((e) => e.taskId === a);
              return (0, n.createElement)(
                "a",
                {
                  key: a,
                  href: r.href,
                  "aria-current": e === r.title ? "page" : void 0,
                  onClick: (e) => {
                    !t ||
                      !r.hash ||
                      0 !== e.button ||
                      e.metaKey ||
                      e.ctrlKey ||
                      e.shiftKey ||
                      e.altKey ||
                      (e.preventDefault(), t(r.title));
                  },
                },
                r.title
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
    function l({ current: e, children: t }) {
      let a =
        s.ACCOUNT_SECTIONS.find((t) => t.title === e) || s.ACCOUNT_SECTIONS[0];
      return (0, n.createElement)(
        "section",
        {
          className: "control-panel",
          "aria-labelledby": "account-preview-title",
        },
        (0, n.createElement)("span", { className: "eyebrow" }, "Your account"),
        (0, n.createElement)(
          "h2",
          { id: "account-preview-title", tabIndex: -1 },
          a.title
        ),
        (0, n.createElement)("p", null, a.description),
        (0, n.createElement)("p", { className: "help-text" }, a.start),
        "Home" === a.title
          ? (0, n.createElement)(
              "div",
              {
                className: "account-preview-grid",
                "aria-label": "What your Home shows",
              },
              i.map(([e, t]) =>
                (0, n.createElement)(
                  "div",
                  { key: e },
                  (0, n.createElement)("strong", null, e),
                  (0, n.createElement)("span", null, t)
                )
              )
            )
          : null,
        t
      );
    }
    var o = e.i(4581),
      c = e.i(12043),
      d = e.i(67010);
    function u({ onConnect: e, onSecret: s }) {
      let [r, i] = (0, n.useState)(""),
        [l, h] = (0, n.useState)(!1),
        [m, p] = (0, n.useState)(""),
        [y, x] = (0, n.useState)(null);
      async function f(t) {
        h(!0), p("");
        try {
          let n = await t();
          if (!(0, o.validKey)(n))
            throw Error("Enter a valid AnyRoute API key.");
          await (0, o.api)("/api/v1/key", { key: n.trim() }), await e(n.trim());
        } catch (e) {
          p(e.message);
        } finally {
          h(!1);
        }
      }
      return (
        (0, n.useEffect)(() => {
          let e = new AbortController();
          return (
            (0, o.api)("/api/v1/escrow", { signal: e.signal })
              .then((e) => x(!!e.data?.enabled))
              .catch(() => {}),
            () => e.abort()
          );
        }, []),
        (0, t.jsxs)("div", {
          className: d.default.form,
          children: [
            (0, t.jsx)("h3", { children: "Sign in" }),
            (0, t.jsxs)("div", {
              className: "button-row",
              children: [
                (0, t.jsx)(a.Button, {
                  disabled: l,
                  onClick: () =>
                    f(async () => {
                      let e = await (0, c.walletApiKey)("Wallet key");
                      return s(e), e;
                    }),
                  children: "Sign in with wallet",
                }),
                !1 === y &&
                  (0, t.jsx)(a.Button, {
                    secondary: !0,
                    disabled: l,
                    onClick: () =>
                      f(async () => {
                        let e = await (0, o.api)("/api/v1/keys", {
                          method: "POST",
                          body: { name: "Account key" },
                        });
                        return s(e.key), e.key;
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
                e.preventDefault(), f(() => r);
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
                      value: r,
                      onChange: (e) => i(e.target.value),
                    }),
                  ],
                }),
                (0, t.jsx)(a.Button, {
                  type: "submit",
                  secondary: !0,
                  disabled: l,
                  children: l ? "Connecting…" : "Connect your key",
                }),
              ],
            }),
            m &&
              (0, t.jsx)("p", {
                className: "error",
                role: "alert",
                children: m,
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
          apiKey: s,
          onConnect: i,
          onDisconnect: o,
          onNavigate: c,
          publicContent: h = !1,
          children: m,
        }) {
          let [p, y] = (0, n.useState)(""),
            x = (0, n.useRef)(null),
            f = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              let e = f.current?.querySelector("nav"),
                t = e?.querySelector("[aria-current]");
              e &&
                t &&
                e.scrollWidth > e.clientWidth &&
                (e.scrollLeft = t.offsetLeft - e.offsetLeft - 8);
            }, [e]),
            (0, n.useEffect)(() => {
              !s &&
                window.location.hash &&
                x.current?.querySelector("h2")?.focus({ preventScroll: !0 });
            }, [e, s]),
            (0, t.jsxs)("div", {
              className: d.default.shell,
              children: [
                (0, t.jsxs)("aside", {
                  className: d.default.sidebar,
                  ref: f,
                  children: [
                    (0, t.jsx)(r, { current: e, onNavigate: c }),
                    (0, t.jsx)("div", {
                      className: d.default.connection,
                      children: s
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("p", {
                                className: "help-text",
                                children: "Key connected · this tab only",
                              }),
                              (0, t.jsx)(a.Button, {
                                secondary: !0,
                                onClick: o,
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
                  className: d.default.content,
                  ref: x,
                  children: [
                    !s &&
                      (0, t.jsx)(l, {
                        current: e,
                        children: (0, t.jsx)(u, { onConnect: i, onSecret: y }),
                      }),
                    (s || h) && m,
                  ],
                }),
                p &&
                  (0, t.jsxs)(a.Modal, {
                    title: "Save your API key",
                    onClose: () => y(""),
                    children: [
                      (0, t.jsx)("p", {
                        children:
                          "Keep this key safe. Anyone with it can use its account access and balance.",
                      }),
                      (0, t.jsx)("code", {
                        className: d.default.secret,
                        children: p,
                      }),
                      (0, t.jsxs)("div", {
                        className: "button-row",
                        children: [
                          (0, t.jsx)(a.CopyButton, {
                            text: p,
                            label: "Copy key",
                          }),
                          (0, t.jsx)(a.Button, {
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
  75993,
  (e) => {
    e.v({
      actions: "Webhooks-module__kST8DW__actions",
      destinations: "Webhooks-module__kST8DW__destinations",
      events: "Webhooks-module__kST8DW__events",
      log: "Webhooks-module__kST8DW__log",
      secret: "Webhooks-module__kST8DW__secret",
    });
  },
  14771,
  (e) => {
    "use strict";
    var t = e.i(71682),
      n = e.i(98248),
      a = e.i(67898),
      s = e.i(97674),
      r = e.i(4581);
    let i = (e) =>
      ({
        "spend.alert": "Spending alerts",
        "agent.alert": "Agent alerts",
        "approval.requested": "Approval requested",
        "approval.decided": "Approval decided",
        "deposit.credited": "Deposit credited",
        "agreement.funded": "Agreement funded",
        "agreement.disputed": "Agreement disputed",
        "agreement.ruled": "Agreement ruled",
        "host.status_changed": "Host status changed",
        "endpoint.check": "Endpoint check",
      }[e] || e);
    var l = e.i(92882),
      o = e.i(75993);
    function c({ names: e, selected: n, onChange: a, id: s }) {
      return (0, t.jsxs)("fieldset", {
        className: o.default.events,
        children: [
          (0, t.jsx)("legend", { children: "Events" }),
          e.map((e) =>
            (0, t.jsxs)(
              "label",
              {
                htmlFor: s + e,
                children: [
                  (0, t.jsx)("input", {
                    id: s + e,
                    type: "checkbox",
                    checked: n.includes(e),
                    onChange: (t) =>
                      a(
                        t.target.checked ? [...n, e] : n.filter((t) => t !== e)
                      ),
                  }),
                  i(e),
                ],
              },
              e
            )
          ),
        ],
      });
    }
    function d({ apiKey: e }) {
      let [a, s] = (0, n.useState)([]),
        [i, h] = (0, n.useState)([]),
        [m, p] = (0, n.useState)([]),
        [y, x] = (0, n.useState)(""),
        [f, w] = (0, n.useState)(""),
        [g, k] = (0, n.useState)(!1),
        [j, v] = (0, n.useState)(!1),
        [_, S] = (0, n.useState)(""),
        [b, C] = (0, n.useState)(""),
        N = (0, n.useRef)(!0);
      (0, n.useEffect)(
        () => (
          (N.current = !0),
          () => {
            N.current = !1;
          }
        ),
        []
      );
      let A = (t, n = {}) =>
        (0, r.api)("/api/v1/webhooks" + t, { key: e, ...n });
      async function T() {
        let e = await A("");
        N.current && (s(e.data), h(e.events));
      }
      async function E(e) {
        v(!0), w(""), C("");
        try {
          let t = await e();
          if (!N.current) return;
          t?.signing_secret && S(t.signing_secret), await T();
        } catch (e) {
          N.current && w(e.message);
        } finally {
          N.current && v(!1);
        }
      }
      return (
        (0, n.useEffect)(() => {
          T().catch((e) => {
            N.current && (404 === e.status ? k(!0) : w(e.message));
          });
        }, [e]),
        (0, t.jsxs)("section", {
          className: "control-panel",
          children: [
            (0, t.jsx)("h2", { children: "Manage destinations" }),
            (0, t.jsx)("p", {
              className: "help-text",
              children:
                "Use a management key to add account destinations. Owner/admin keys can manage linked destinations scoped to their own key. Signing is not switched on at anyroute.tech yet.",
            }),
            f &&
              (0, t.jsx)("p", {
                className: "error",
                role: "alert",
                children: f,
              }),
            b && (0, t.jsx)("p", { role: "status", children: b }),
            g
              ? (0, t.jsx)("p", {
                  role: "status",
                  children:
                    "Signed webhooks are not switched on for this router. Existing alert destinations keep their current delivery behaviour.",
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("form", {
                      onSubmit: (e) => {
                        e.preventDefault(),
                          E(async () => {
                            let e = await A("", {
                              method: "POST",
                              body: { webhook_url: y, events: m },
                            });
                            return N.current && x(""), e;
                          });
                      },
                      children: [
                        (0, t.jsxs)("div", {
                          className: "field",
                          children: [
                            (0, t.jsx)("label", {
                              htmlFor: "webhook-url",
                              children: "HTTPS destination",
                            }),
                            (0, t.jsx)("input", {
                              id: "webhook-url",
                              type: "url",
                              autoComplete: "off",
                              required: !0,
                              maxLength: 2048,
                              value: y,
                              onChange: (e) => x(e.target.value),
                            }),
                          ],
                        }),
                        (0, t.jsx)(c, {
                          names: i,
                          selected: m,
                          onChange: p,
                          id: "new-hook-",
                        }),
                        (0, t.jsx)(l.Button, {
                          type: "submit",
                          disabled: j || !m.length,
                          children: "Add destination",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("p", {
                      className: "help-text",
                      children: [
                        "Secrets appear once. Verify the exact body bytes, allow at most five minutes of clock difference, and reject repeated event IDs. ",
                        (0, t.jsx)("a", {
                          href: "/docs/#signed-webhooks",
                          children: "Read verification instructions",
                        }),
                        ".",
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: o.default.destinations,
                      children: a.map((e) =>
                        (0, t.jsx)(
                          u,
                          {
                            row: e,
                            names: i,
                            busy: j,
                            run: E,
                            request: A,
                            onMessage: C,
                          },
                          e.id
                        )
                      ),
                    }),
                    (0, t.jsx)("div", {
                      className: o.default.actions,
                      children: (0, t.jsx)(l.Button, {
                        secondary: !0,
                        disabled: j,
                        onClick: () => E(T),
                        children: "Refresh",
                      }),
                    }),
                  ],
                }),
            _ &&
              (0, t.jsxs)(l.Modal, {
                title: "Save your signing secret",
                onClose: () => S(""),
                children: [
                  (0, t.jsx)("p", {
                    children:
                      "This secret is shown once. Anyone with it can sign notices accepted by your receiver. Rotation stops use of the previous secret.",
                  }),
                  (0, t.jsx)("code", {
                    className: o.default.secret,
                    children: _,
                  }),
                  (0, t.jsxs)("div", {
                    className: o.default.actions,
                    children: [
                      (0, t.jsx)(l.CopyButton, {
                        text: _,
                        label: "Copy secret",
                      }),
                      (0, t.jsx)(l.Button, {
                        onClick: () => S(""),
                        children: "Saved",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      );
    }
    function u({
      row: e,
      names: a,
      busy: s,
      run: r,
      request: d,
      onMessage: h,
    }) {
      let [m, p] = (0, n.useState)(e.events),
        [y, x] = (0, n.useState)(null);
      (0, n.useEffect)(() => p(e.events), [e.events]);
      let f = "/" + encodeURIComponent(e.id);
      return (0, t.jsxs)("section", {
        children: [
          (0, t.jsx)("h3", { children: e.webhook_url }),
          (0, t.jsx)("p", {
            children:
              {
                signed: "Signed",
                unsigned: "Unsigned · rotate to enable signing",
                revoked: "Revoked · delivery stopped",
              }[e.signing] || "Signing status unavailable",
          }),
          e.legacy_rule_id &&
            (0, t.jsx)("p", {
              className: "help-text",
              children:
                "Linked to Spend Watch. Change its URL or remove it there.",
            }),
          (0, t.jsx)(c, { names: a, selected: m, onChange: p, id: e.id }),
          (0, t.jsxs)("div", {
            className: o.default.actions,
            children: [
              (0, t.jsx)(l.Button, {
                secondary: !0,
                disabled: s || !m.length,
                onClick: () =>
                  r(() => d(f, { method: "PATCH", body: { events: m } })),
                children: "Save events",
              }),
              (0, t.jsx)(l.Button, {
                secondary: !0,
                disabled: s,
                onClick: () => r(() => d(f + "/rotate", { method: "POST" })),
                children: "Rotate secret",
              }),
              (0, t.jsx)(l.Button, {
                secondary: !0,
                disabled: s || "revoked" === e.signing,
                onClick: () => r(() => d(f + "/revoke", { method: "POST" })),
                children: "Revoke",
              }),
              (0, t.jsx)(l.Button, {
                secondary: !0,
                disabled: s || "revoked" === e.signing,
                onClick: () =>
                  r(async () => {
                    let e = await d(f + "/test", { method: "POST" });
                    return (
                      h(
                        "Endpoint check queued. Refresh the log after the worker runs."
                      ),
                      e
                    );
                  }),
                children: "Send check event",
              }),
              (0, t.jsx)(l.Button, {
                secondary: !0,
                disabled: s,
                onClick: () =>
                  r(async () => {
                    let e = await d(f + "/deliveries");
                    return x(e.data), e;
                  }),
                children: "Read delivery log",
              }),
              !e.legacy_rule_id &&
                (0, t.jsx)(l.Button, {
                  secondary: !0,
                  disabled: s,
                  onClick: () => r(() => d(f, { method: "DELETE" })),
                  children: "Remove destination",
                }),
            ],
          }),
          y &&
            (0, t.jsx)("div", {
              className: o.default.log,
              children: y.length
                ? (0, t.jsxs)("table", {
                    children: [
                      (0, t.jsx)("caption", {
                        children: "Last 100 delivery attempts",
                      }),
                      (0, t.jsx)("thead", {
                        children: (0, t.jsxs)("tr", {
                          children: [
                            (0, t.jsx)("th", { children: "Time" }),
                            (0, t.jsx)("th", { children: "Event" }),
                            (0, t.jsx)("th", { children: "Status" }),
                            (0, t.jsx)("th", { children: "HTTP" }),
                            (0, t.jsx)("th", { children: "Latency" }),
                            (0, t.jsx)("th", { children: "Retries" }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("tbody", {
                        children: y.map((e, n) =>
                          (0, t.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, t.jsx)("td", {
                                  children: (0, t.jsx)("time", {
                                    dateTime: e.at,
                                    children: new Date(e.at).toLocaleString(),
                                  }),
                                }),
                                (0, t.jsx)("td", { children: i(e.event) }),
                                (0, t.jsx)("td", { children: e.status }),
                                (0, t.jsx)("td", {
                                  children: e.http_status ?? "—",
                                }),
                                (0, t.jsxs)("td", {
                                  children: [e.latency_ms, " ms"],
                                }),
                                (0, t.jsx)("td", { children: e.retry_count }),
                              ],
                            },
                            e.event_id + ":" + n
                          )
                        ),
                      }),
                    ],
                  })
                : (0, t.jsx)("p", {
                    children: "No delivery attempts recorded.",
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
          let [e, n] = (0, s.useAccountKey)();
          return (0, t.jsx)(a.default, {
            current: "Webhooks",
            apiKey: e,
            onConnect: n,
            onDisconnect: () => n(""),
            children: (0, t.jsx)(d, { apiKey: e }, e),
          });
        },
      ],
      14771
    );
  },
  12043,
  (e) => {
    "use strict";
    var t = e.i(4581);
    async function n() {
      let e = window.ethereum;
      if (!e)
        throw Error(
          "No browser wallet found. Install a wallet such as MetaMask, or use the manual deposit details."
        );
      let [t] = await e.request({ method: "eth_requestAccounts" });
      if (!t) throw Error("The wallet did not share an account.");
      return t;
    }
    async function a({ id: e, name: t, rpc: n, explorer: s }) {
      let r = window.ethereum,
        i = "0x" + Number(e).toString(16);
      if ((await r.request({ method: "eth_chainId" })) !== i)
        try {
          await r.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: i }],
          });
        } catch (e) {
          if (
            e?.code !== 4902 &&
            !/unrecognized|not added|unknown chain/i.test(String(e?.message))
          )
            throw e;
          await r.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: i,
                chainName: t || "Robinhood Chain",
                nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
                rpcUrls: [n],
                ...(s ? { blockExplorerUrls: [s] } : {}),
              },
            ],
          });
        }
    }
    async function s(e, t = 18e4) {
      let n = window.ethereum,
        a = Date.now() + t;
      for (; Date.now() < a; ) {
        let t = await n.request({
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
    async function r(e, t, n) {
      let a = window.ethereum,
        r = [];
      for (let [i, l] of t.entries()) {
        n?.(
          `${i + 1}/${t.length}: ${l.description || "Confirm in your wallet"}`
        );
        let o = await a.request({
          method: "eth_sendTransaction",
          params: [{ from: e, to: l.to, data: l.data, value: "0x0" }],
        });
        n?.(`${i + 1}/${t.length}: waiting for confirmation…`),
          await s(o),
          r.push(o);
      }
      return r;
    }
    async function i(e, t) {
      return window.ethereum.request({
        method: "eth_signTypedData_v4",
        params: [e, JSON.stringify(t)],
      });
    }
    async function l(e, t) {
      let n =
        "0x" +
        Array.from(new TextEncoder().encode(t), (e) =>
          e.toString(16).padStart(2, "0")
        ).join("");
      return window.ethereum.request({
        method: "personal_sign",
        params: [n, e],
      });
    }
    async function o() {
      try {
        let [e] =
          (await window.ethereum?.request({ method: "eth_accounts" })) ?? [];
        return e || null;
      } catch {
        return null;
      }
    }
    async function c(e, t) {
      try {
        let n = "0x70a08231" + e.slice(2).toLowerCase().padStart(64, "0"),
          a = await window.ethereum.request({
            method: "eth_call",
            params: [{ to: t, data: n }, "latest"],
          });
        return /^0x[0-9a-fA-F]+$/.test(a) ? BigInt(a) : null;
      } catch {
        return null;
      }
    }
    async function d(e = "Wallet key") {
      let a = await n(),
        { data: s } = await (0, t.api)("/api/v1/auth/wallet/challenge", {
          method: "POST",
          body: { address: a },
        }),
        r = await l(a, s.message);
      return (
        await (0, t.api)("/api/v1/auth/wallet", {
          method: "POST",
          body: { address: a, nonce: s.nonce, signature: r, name: e },
        })
      ).key;
    }
    e.s([
      "connect",
      0,
      n,
      "connectedAccount",
      0,
      o,
      "ensureChain",
      0,
      a,
      "hasWallet",
      0,
      () => !!window.ethereum,
      "personalSign",
      0,
      l,
      "sendTransactions",
      0,
      r,
      "shortAddress",
      0,
      (e) => (e ? e.slice(0, 6) + "…" + e.slice(-4) : ""),
      "signTypedData",
      0,
      i,
      "tokenBalance",
      0,
      c,
      "walletApiKey",
      0,
      d,
    ]);
  },
]);
