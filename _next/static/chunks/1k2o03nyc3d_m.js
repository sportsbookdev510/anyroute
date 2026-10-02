(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  5161,
  (s) => {
    "use strict";
    var e = s.i(71682),
      t = s.i(98248),
      a = s.i(4581);
    let r = /^[a-z2-7]{56}\.onion$/;
    s.s([
      "default",
      0,
      function () {
        let [s, o] = (0, t.useState)({ phase: "loading", address: "" });
        return (
          (0, t.useEffect)(() => {
            let s = new AbortController();
            return (
              fetch(a.API_BASE + "/api/v1/status", {
                signal: s.signal,
                headers: { accept: "application/json" },
              })
                .then(async (s) => {
                  if (!s.ok) throw Error("status " + s.status);
                  let e = (await s.json())?.data?.onion?.address;
                  o(
                    r.test(e || "")
                      ? { phase: "ready", address: e }
                      : { phase: "none", address: "" }
                  );
                })
                .catch((s) => {
                  s?.name !== "AbortError" &&
                    o({ phase: "error", address: "" });
                }),
              () => s.abort()
            );
          }, []),
          (0, e.jsxs)("div", {
            className: "note",
            role: "status",
            children: [
              "loading" === s.phase && "Reading this router’s status…",
              "ready" === s.phase &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    "This router’s onion address: ",
                    (0, e.jsx)("code", {
                      className: "mono",
                      children: s.address,
                    }),
                    " (use it as http://",
                    s.address,
                    ", with /api/v1 after it).",
                  ],
                }),
              "none" === s.phase &&
                "This router does not publish an onion address.",
              "error" === s.phase &&
                "The router’s status could not be read, so its onion address is not shown. GET /api/v1/status carries it as onion.address when there is one.",
            ],
          })
        );
      },
    ]);
  },
]);
