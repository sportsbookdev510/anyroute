(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  82958,
  (e) => {
    "use strict";
    var t = e.i(71682),
      n = e.i(98248);
    e.s([
      "default",
      0,
      function () {
        let e = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let t = e.current,
              n = t.getContext("2d"),
              a = matchMedia("(prefers-reduced-motion: reduce)").matches,
              r = 0,
              s = 0,
              o = 1,
              i = [],
              l = 0,
              d = !1,
              c = -1e4,
              u = performance.now(),
              p = () => {
                let e = t.getBoundingClientRect();
                (r = e.width),
                  (s = e.height),
                  (o = Math.min(2, devicePixelRatio || 1)),
                  (t.width = r * o),
                  (t.height = s * o);
                let n = r < 700 ? 5 : 4;
                i = Array.from({ length: Math.ceil(r / n) }, (e, t) => ({
                  x: t * n,
                  seed: 100 * Math.random(),
                  green: 0.035 > Math.random(),
                  thin: 0.3 > Math.random(),
                }));
              },
              h = (e) => {
                let t = (e - u) / 1e3;
                for (let e of (n.setTransform(o, 0, 0, o, 0, 0),
                n.clearRect(0, 0, r, s),
                i)) {
                  let a = e.x / r,
                    o = Math.max(0, (a - 0.38) / 0.62);
                  if (o <= 0 && !e.green) continue;
                  let i =
                      0.5 * Math.sin(e.seed + 0.6 * t) +
                      0.3 * Math.sin(1.7 * e.seed + 1.3 * t + 9 * a) +
                      0.2 * Math.sin(23 * a - 0.8 * t),
                    l = Math.max(0, 1 - Math.abs(e.x - c) / 140),
                    d =
                      s *
                      (Math.pow(o, 1.4) * (0.55 + 0.35 * i) + 0.18 * l) *
                      (e.green ? 1.08 : 1);
                  d < 2 ||
                    ((n.fillStyle = e.green
                      ? "rgba(31,225,90,.95)"
                      : `rgba(245,245,240,${0.25 + 0.6 * o})`),
                    n.fillRect(e.x, 0, e.thin ? 1 : 2, d));
                }
              },
              m = (e) => {
                h(e), d && (l = requestAnimationFrame(m));
              },
              g = () => {
                (d = !1), cancelAnimationFrame(l);
              };
            p(), h(performance.now());
            let y = new ResizeObserver(() => {
              p(), h(performance.now());
            });
            y.observe(t);
            let b = new IntersectionObserver(([e]) =>
              e.isIntersecting
                ? void (!d && !a && ((d = !0), (l = requestAnimationFrame(m))))
                : g()
            );
            b.observe(t);
            let v = (e) => {
                let n = t.getBoundingClientRect();
                c = e.clientX - n.left;
              },
              f = () => {
                c = -1e4;
              },
              w = t.parentElement;
            return (
              w.addEventListener("pointermove", v),
              w.addEventListener("pointerleave", f),
              () => {
                g(),
                  y.disconnect(),
                  b.disconnect(),
                  w.removeEventListener("pointermove", v),
                  w.removeEventListener("pointerleave", f);
              }
            );
          }, []),
          (0, t.jsx)("canvas", {
            ref: e,
            className: "signal-field",
            "aria-hidden": "true",
          })
        );
      },
    ]);
  },
  92882,
  84420,
  58142,
  97674,
  51112,
  32837,
  39331,
  42366,
  96678,
  55616,
  (e) => {
    "use strict";
    e.s(
      [
        "Brand",
        () => ea,
        "Button",
        () => en,
        "Code",
        () => ec,
        "CopyButton",
        () => ei,
        "Header",
        () => er,
        "Modal",
        () => eu,
        "MotionManager",
        () => es,
        "Scramble",
        () => eo,
        "highlight",
        () => ed,
      ],
      92882
    ),
      e.s(["default", () => F], 96678);
    var t = e.i(71682),
      n = e.i(98248);
    function a({ title: e = "Anyroute", ...n }) {
      return (0, t.jsx)("svg", {
        viewBox: "214 159 1749 372",
        fill: "currentColor",
        fillRule: "evenodd",
        role: "img",
        "aria-label": e,
        ...n,
        children: (0, t.jsx)("path", {
          d: "M1134.2 529.3L1131 528.9L1131 510.1L1131 491.3L1139 491.8C1149.1 492.4 1154 490.7 1160.5 484.4C1165.2 479.8 1171 469.3 1171 465.4C1171 464.2 1169.6 460 1167.9 455.9C1166.2 451.8 1161.4 440.2 1157.3 430C1137.9 382.3 1134.7 374.3 1127.5 357C1119.4 337.6 1110 314.2 1110 313.6C1110 312.9 1147.8 312.1 1151.4 312.8L1155.2 313.5L1158.6 323C1160.5 328.2 1163.8 336.8 1165.9 342C1170.5 353.2 1190 405.1 1192.5 412.8C1193.4 415.8 1194.5 417.8 1194.9 417.3C1195.3 416.9 1197.6 410.9 1200 404C1203.8 392.9 1218.3 352.9 1229 324L1232.9 313.5L1255.5 313.2L1278.1 313L1277.5 315.2C1276.1 319.9 1265.8 346.3 1257.7 366C1253.1 377.3 1245.1 396.6 1240 409C1234.9 421.4 1228 438.5 1224.5 447C1206.2 492.2 1200.1 504 1189.8 514.1C1183.4 520.4 1173.2 526.2 1164.4 528.5C1158.9 529.9 1142.8 530.3 1134.2 529.3ZM263.8 523.3C237.5 523.1 216 522.7 216 522.4C216 522 221.8 511.3 229 498.5C236.1 485.7 242.3 474.4 242.7 473.4C243 472.3 244.6 469.6 246.2 467.2L249.1 463L293.8 463L338.5 463L355 447.3C364.1 438.7 377.6 425.6 385 418.3L398.5 405.1L398.7 366.3L398.9 327.5L395.7 331.3C393.9 333.4 390 339.1 387 344C371.9 368.4 359.3 389.2 355.8 395.5C353.7 399.4 349.4 406.8 346.2 412L340.5 421.5L305.7 421.8C286.6 421.9 271 421.8 271 421.6C271 421.4 274 415.8 277.6 409.3C285.1 396 298.7 371.6 314.2 343.5C330.1 314.8 359.6 262.5 365 253.5C367.6 249.1 373.1 239.2 377.3 231.5L384.9 217.5L402.2 201.3C411.7 192.5 425.1 180 432 173.7L444.5 162.2L445.2 166.3C445.6 168.6 445.9 231.2 445.7 305.5L445.5 440.5L443.9 443.4C443 445 424.3 463.5 402.4 484.6L362.5 522.9L343.5 523C333.1 523 321.6 523.2 318 523.3C314.4 523.5 290 523.5 263.8 523.3ZM608.9 523L542.3 522.5L533.5 514.5C522.6 504.7 464.2 447.5 461.5 444.1L459.5 441.5L459.2 301.2L459 160.8L468.7 169.7C474 174.5 483.8 183.7 490.4 190.1C497.1 196.4 506.3 205.2 511 209.6C516.9 215 520.8 219.8 523.8 225C529.5 234.9 540.3 254 550.2 272C554.6 280 560.6 290.8 563.5 296C566.4 301.2 575.2 317 583 331C599.8 361 617.8 393.8 626.5 410.2L632.8 422L598.7 422L564.5 422L561.1 415.7C559.3 412.3 555.6 405.9 553 401.5C550.4 397.1 544.4 386.8 539.5 378.5C525.5 354.7 525.2 354.1 516.7 341.2C512.3 334.5 508.3 329 507.8 329C507.4 329 507 346.3 507 367.4L507 405.8L524.3 422.6C533.8 431.9 547.3 444.8 554.2 451.2L566.7 463L611.3 463L655.9 463L661.3 473.2C664.3 478.9 671.5 492.3 677.3 503L687.9 522.5L686.2 523.2C685.3 523.6 682.5 523.8 680 523.7C677.5 523.6 645.5 523.3 608.9 523ZM1873.8 471C1838.4 465.4 1814.6 442.6 1807.9 408C1805.9 397.5 1806.4 378.1 1808.8 367.1C1813.8 345.2 1827.4 326.5 1845.1 317C1880.5 298.2 1927 307.2 1947.9 337.1C1958.3 351.9 1962.2 366.4 1961.8 388.4L1961.5 402.3L1908.5 402.1C1879.3 402.1 1854.2 402.3 1852.6 402.6L1849.7 403.2L1850.3 408.1C1852.2 423.6 1866 435.8 1883 436.8C1897.5 437.6 1908.6 433 1914.3 423.8L1917.5 418.8L1937.2 419.2C1948.1 419.4 1957.2 419.9 1957.6 420.3C1958.9 421.6 1956 429.4 1951.3 437.2C1941.1 454.1 1925.1 465.3 1905 469.4C1895.2 471.4 1881 472.1 1873.8 471ZM1434.4 469.5C1397.2 461 1373 429.5 1373 389.5C1373 370.4 1378 354.5 1388.4 340.7C1404.7 319.1 1427.4 308 1455.5 308C1496.1 308 1528.7 335.2 1535 374.2C1536.9 385.6 1535.8 406.6 1533 415.5C1525 440.6 1506.8 458.6 1480.5 467.6L1472.5 470.3L1456.5 470.6C1445.5 470.8 1438.6 470.5 1434.4 469.5ZM1590 469.9C1583.5 468.8 1572.1 463.5 1566.2 458.8C1560.3 454.1 1552.8 443.4 1549.4 434.8L1546.5 427.5L1546.2 370.4L1545.9 313.2L1565.2 312.8C1575.8 312.6 1585.5 312.6 1586.7 312.8L1588.9 313.2L1589.2 363.4L1589.5 413.5L1591.9 418.8C1594.9 425.5 1599.6 429.5 1606.7 431.6C1618.8 435.1 1633 431 1639.5 422.1C1645.5 414.1 1646.5 409.6 1646.6 391C1646.6 381.9 1646.7 360.7 1646.8 343.8L1647 313L1668.5 313L1690 313L1689.8 389.2L1689.5 465.5L1669.5 465.5L1649.5 465.5L1649.2 456.2L1648.9 447L1644 452.6C1633.9 464.1 1621.5 469.8 1605 470.5C1599.8 470.7 1593 470.5 1590 469.9ZM1753.6 468.4C1736.6 464.3 1725 452.2 1721.4 434.8C1720.2 429.1 1719.9 419.6 1719.9 389.6C1719.9 368.7 1719.7 350.5 1719.4 349.3L1718.8 347L1709.4 347L1700 347L1700 330L1700 313L1709.4 313L1718.8 313L1719.4 309.9C1719.7 308.2 1720 300.6 1720 293L1720 279.2L1725.2 277.2C1737.7 272.2 1760.5 264 1761.7 264C1762.7 264 1763 269.2 1763 288.5L1763 313L1780.5 313L1798 313L1798 330L1798 347L1780.5 347L1763 347L1763 381.3L1763 415.6L1764.5 420.7C1767.5 430.7 1775.1 434.2 1789.3 432.3C1793.3 431.7 1796.8 431.5 1797.2 431.7C1797.7 431.9 1798 439.9 1798 449.4L1798 466.7L1789.8 468.4C1779.7 470.4 1761.8 470.4 1753.6 468.4ZM732.3 465.3C732.6 464.8 737.1 453.5 742.5 440C752.9 413.5 765.1 383.1 784.8 334.5C791.6 317.4 799.4 298.1 802.1 291.5C804.7 284.9 809 274.6 811.5 268.5C814.1 262.4 817.3 254.5 818.7 250.8L821.3 244L846 244C864.6 244 871 244.3 871.7 245.2C872.3 245.9 874.3 250.6 876.3 255.5C878.3 260.4 883.8 273.9 888.5 285.5C902.7 320.1 909.6 337 922.1 368.5C928.7 385 934.9 400.5 936 403C937.1 405.5 942 417.6 946.9 430C951.8 442.4 957 455.2 958.3 458.5C959.7 461.8 960.6 464.8 960.3 465.2C960.1 465.7 949.4 466 936.6 466L913.4 466L902.8 439.2L892.2 412.5L846.5 412.5L800.8 412.5L797.8 420C796.1 424.1 791.5 436.1 787.5 446.5L780.3 465.5L756.1 465.8C742.7 465.9 732.1 465.7 732.3 465.3ZM969 389.5L969 313L989.5 313L1010 313L1010 322C1010 326.9 1010.3 331 1010.8 331C1011.2 331 1012.4 329.6 1013.5 328C1016.3 323.7 1025.9 316.4 1032.3 313.5C1040.9 309.8 1045.5 308.9 1056.4 308.9C1073.8 309 1086.7 313.8 1097.3 324.4C1104.8 331.9 1109.1 339.7 1112 350.9L1114.1 359.2L1114.3 412.4L1114.4 465.5L1093.2 465.8L1072 466L1072 422.8C1072 399 1071.5 376.4 1071 372.5C1069.2 359.9 1063.4 351.7 1054.1 348.4C1048.9 346.5 1037.3 346.7 1031.4 348.7C1025 350.9 1017 358.8 1014.5 365.5L1012.6 370.5L1012 418L1011.5 465.5L990.2 465.8L969 466L969 389.5ZM1286 389.5L1286 313L1305.5 313L1325 313L1325 318.9C1325 322.1 1325.3 326.8 1325.6 329.3L1326.3 333.9L1330.1 328.1C1334.5 321.5 1342.9 315.1 1350.5 312.5C1356.8 310.4 1369.6 309.4 1373.2 310.9L1376 312L1376 331.7L1376 351.5L1364.2 351.6L1352.5 351.6L1346.8 353.9C1340.1 356.5 1335.9 360.8 1332.4 368.8C1328.6 377.3 1327.9 385.9 1328 418.5C1328.1 435 1328.1 452.4 1328.1 457.2L1328 466L1307 466L1286 466L1286 389.5ZM1466.3 432C1484 426.5 1495.2 404.9 1492.1 382.4C1488.9 360 1476.4 347.2 1456.9 346.2C1445.5 345.6 1439.3 347.5 1431.6 353.7C1419.9 363.1 1414.3 379.3 1416.8 396.3C1421.1 424.8 1441.6 439.6 1466.3 432ZM877.5 373.2C877.2 372.3 874.4 364.5 871.4 356C865.9 340.5 863.4 333.8 857.5 318C855.7 313.3 852.6 304.9 850.5 299.2C848.4 293.6 846.5 289 846.1 289C845.8 289 843.2 295.6 840.3 303.8C837.5 311.9 832 326.8 828.1 337C824.3 347.2 819.5 359.9 817.6 365.2L814.1 375L846.2 375L878.2 375L877.5 373.2ZM1918 369.5C1918 359 1908.4 346 1898 342.4C1890.9 340 1879.5 340 1872 342.5C1864.1 345.1 1853.8 355.4 1851.6 363C1850.7 365.9 1850 369.4 1850 370.7L1850 373L1884 373L1918 373L1918 369.5Z",
        }),
      });
    }
    function r(e, t) {
      return !0 === e.standalone || t("(display-mode: standalone)").matches;
    }
    function s(e) {
      return (
        /iPad|iPhone|iPod/.test(e.userAgent) ||
        ("MacIntel" === e.platform && e.maxTouchPoints > 1)
      );
    }
    function o(e, t) {
      let n = null,
        a = () =>
          t({
            prompt: n,
            installed: r(e.navigator, e.matchMedia.bind(e)),
            ios: s(e.navigator),
          }),
        o = (e) => {
          e.preventDefault(), (n = e), a();
        },
        i = () => {
          (n = null), t({ prompt: null, installed: !0, ios: s(e.navigator) });
        },
        l = e.matchMedia("(display-mode: standalone)");
      return (
        e.addEventListener("beforeinstallprompt", o),
        e.addEventListener("appinstalled", i),
        l.addEventListener("change", a),
        a(),
        () => {
          e.removeEventListener("beforeinstallprompt", o),
            e.removeEventListener("appinstalled", i),
            l.removeEventListener("change", a);
        }
      );
    }
    e.s(
      [
        "MARK_LEFT",
        0,
        "M613.5 239.5L614 827.6L442.5 1000L142 1000L216.5 882L397 882Q399.5 881.5 401 880L524 758.9L523.6 599.3L505 621L394.7 797L252 797L502 353.2Z",
        "MARK_RIGHT",
        0,
        "M640.5 239.5L640 827.6L811.5 1000L1112 1000L1037.5 882L857 882Q854.5 881.5 853 880L730 758.9L730.4 599.3L749 621L859.3 797L1002 797L752 353.2Z",
        "Wordmark",
        0,
        a,
      ],
      84420
    ),
      e.s(["isInstalled", 0, r, "listenForInstall", 0, o], 58142);
    var i = e.i(80523);
    function l() {
      let [e, a] = (0, n.useState)({ prompt: null, installed: !1, ios: !1 }),
        [r, s] = (0, n.useState)(!1),
        [l, d] = (0, n.useState)(!1),
        [c, u] = (0, n.useState)("");
      if (
        ((0, n.useEffect)(() => {
          let e = o(window, a);
          return (
            "serviceWorker" in navigator &&
              navigator.serviceWorker
                .register("/sw.js", { scope: "/", updateViaCache: "none" })
                .catch(() => {}),
            e
          );
        }, []),
        e.installed || (!e.prompt && !e.ios))
      )
        return null;
      let p = async () => {
        if (e.prompt && !l) {
          d(!0);
          try {
            await e.prompt.prompt(), await e.prompt.userChoice;
          } catch {
            u("Open your browser menu to install AnyRoute.");
          } finally {
            a((e) => ({ ...e, prompt: null })), d(!1);
          }
        }
      };
      return (0, t.jsxs)(t.Fragment, {
        children: [
          e.prompt
            ? (0, t.jsx)("button", {
                type: "button",
                className: i.default.button,
                disabled: l,
                onClick: p,
                title: "Install AnyRoute on your phone or desktop",
                children: "Install app",
              })
            : (0, t.jsx)("button", {
                type: "button",
                className: i.default.button,
                onClick: () => s(!0),
                children: "Add to Home Screen",
              }),
          c &&
            (0, t.jsx)("span", {
              className: "sr-only",
              role: "status",
              children: c,
            }),
          r &&
            (0, t.jsx)(eu, {
              title: "Install AnyRoute",
              onClose: () => s(!1),
              children: (0, t.jsxs)("div", {
                className: i.default.instructions,
                children: [
                  (0, t.jsx)("p", {
                    children: "Install AnyRoute on your phone or desktop.",
                  }),
                  (0, t.jsxs)("ol", {
                    children: [
                      (0, t.jsx)("li", {
                        children: "Open this page in Safari.",
                      }),
                      (0, t.jsx)("li", {
                        children:
                          "Tap Share, then Add to Home Screen. You may need to scroll through the share menu.",
                      }),
                      (0, t.jsx)("li", {
                        children:
                          "Turn on Open as Web App if shown, then tap Add.",
                      }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    children:
                      "The app opens the Harness. Chat needs an internet connection. Its static pages and assets stay in this browser; requests and replies are never saved by the app cache.",
                  }),
                ],
              }),
            }),
        ],
      });
    }
    var d = e.i(94361),
      c = e.i(4581);
    let u = "anyroute-account-key";
    function p() {
      let [e, t] = (0, n.useState)("");
      return (
        (0, n.useEffect)(() => {
          let e;
          return (
            (e = (e) => t(e?.type === u ? e.detail : (0, c.loadKey)()))(),
            window.addEventListener(u, e),
            window.addEventListener("storage", e),
            () => {
              window.removeEventListener(u, e),
                window.removeEventListener("storage", e);
            }
          );
        }, []),
        [
          e,
          (0, n.useCallback)((e) => {
            e ? (0, c.saveKey)(e) : (0, c.clearKey)(),
              window.dispatchEvent(new CustomEvent(u, { detail: e })),
              t(e);
          }, []),
        ]
      );
    }
    e.s(["useAccountKey", 0, p], 97674);
    let h = "anyroute-inbox-changed",
      m = "anyroute-inbox-seen-v1:";
    function g(e) {
      if (
        !Array.isArray(e?.data) ||
        !Number.isInteger(e.count) ||
        e.count < 0 ||
        !/^[a-f0-9]{64}$/.test(e.seen_scope || "") ||
        !Number.isFinite(Date.parse(e.as_of))
      )
        throw Error("The inbox response could not be read.");
      return e;
    }
    function y(e, t) {
      try {
        let n = e.getItem(m + t);
        return Number.isFinite(Date.parse(n)) && Date.parse(n) <= Date.now()
          ? n
          : "";
      } catch {
        return "";
      }
    }
    async function b(e, t, n = {}) {
      let a = g(await e("/api/v1/inbox", n)),
        r = y(t, a.seen_scope);
      return r
        ? g(await e("/api/v1/inbox?since=" + encodeURIComponent(r), n))
        : a;
    }
    async function v(e, t, n) {
      let a = await e(
        "/api/v1/inbox/seen?through=" + encodeURIComponent(n.as_of),
        { method: "POST" }
      );
      if (a.seen_scope !== n.seen_scope || a.seen_at !== n.as_of)
        throw Error("The inbox seen time could not be read.");
      let r = y(t, a.seen_scope);
      return t.setItem(m + a.seen_scope, r > a.seen_at ? r : a.seen_at), a;
    }
    function f(e) {
      let [t, a] = (0, n.useState)({
          key: "",
          page: null,
          error: "",
          busy: !1,
        }),
        [r, s] = (0, n.useState)(0),
        o = (0, n.useCallback)(() => s((e) => e + 1), []);
      return (
        (0, n.useEffect)(() => {
          if (!e) return;
          let t = new AbortController();
          return (
            a((t) => ({
              key: e,
              page: t.key === e ? t.page : null,
              busy: !0,
              error: "",
            })),
            b((n, a) => (0, c.api)(n, { ...a, key: e, signal: t.signal }), {
              getItem: (e) => window.localStorage.getItem(e),
            })
              .then((n) => {
                t.signal.aborted || a({ key: e, page: n, error: "", busy: !1 });
              })
              .catch((n) => {
                t.signal.aborted ||
                  a({ key: e, page: null, error: n.message, busy: !1 });
              }),
            () => t.abort()
          );
        }, [e, r]),
        (0, n.useEffect)(() => {
          if (!e) return;
          let t = setInterval(o, 6e4);
          return (
            window.addEventListener(h, o),
            window.addEventListener("focus", o),
            window.addEventListener("storage", o),
            () => {
              clearInterval(t),
                window.removeEventListener(h, o),
                window.removeEventListener("focus", o),
                window.removeEventListener("storage", o);
            }
          );
        }, [e, o]),
        {
          ...(e && t.key === e ? t : { page: null, error: "", busy: !!e }),
          refresh: o,
        }
      );
    }
    function w({
      connected: e,
      count: t,
      error: a,
      open: r,
      onClick: s,
      buttonRef: o,
      className: i,
      badgeClass: l,
    }) {
      if (!e) return null;
      let d = a
        ? "Open inbox. Count unavailable."
        : void 0 === t
        ? "Open inbox. Reading count."
        : `Open inbox. ${t} ${
            1 === t ? "item needs" : "items need"
          } attention.`;
      return (0, n.createElement)(
        "button",
        {
          ref: o,
          className: i,
          "aria-label": d,
          "aria-haspopup": "dialog",
          "aria-expanded": r,
          onClick: s,
        },
        (0, n.createElement)(
          "svg",
          {
            width: 20,
            height: 20,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 1.5,
            "aria-hidden": !0,
          },
          (0, n.createElement)("path", {
            d: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4",
          })
        ),
        t > 0
          ? (0, n.createElement)(
              "span",
              { className: l, "aria-hidden": !0 },
              t > 99 ? "99+" : String(Math.max(0, t))
            )
          : null
      );
    }
    let k = [
        ["max_spend_usd_per_minute", "Spend per minute (USD)"],
        ["max_requests_per_minute", "Requests per minute"],
        ["max_denials_per_10min", "Denials per ten minutes"],
        ["max_distinct_models_per_hour", "Distinct models per hour"],
      ],
      x = (e) =>
        Object.fromEntries(
          k.map(([t]) => [
            t,
            e?.breakers?.[t] == null ? "" : String(e.breakers[t]),
          ])
        );
    function C(e, t, n) {
      if (!e) return;
      let a = {};
      for (let [t, r] of k) {
        let s = e[t];
        if (null == s || "" === String(s).trim()) continue;
        let o = Number(s),
          i = "max_spend_usd_per_minute" === t;
        (Number.isFinite(o) &&
          !(o <= 0) &&
          !(o > (i ? 1e6 : Number.MAX_SAFE_INTEGER)) &&
          (i || Number.isSafeInteger(o))) ||
          n.push(
            `${r}: enter a positive ${
              i ? "USD amount up to 1,000,000" : "safe whole number"
            }.`
          ),
          (a[t] = o);
      }
      Object.keys(a).length && (t.breakers = a);
    }
    let L = (e) => k.find(([t]) => e === "breaker:" + t)?.[1];
    e.s(
      [
        "BREAKER_FIELDS",
        0,
        k,
        "breakerForm",
        0,
        x,
        "breakerReasonText",
        0,
        L,
        "buildBreakers",
        0,
        C,
        "trippedBy",
        0,
        function (e, t) {
          let n =
            e?.killed && e.killed_reason?.startsWith("breaker:")
              ? e.killed_reason
              : t?.policies?.find(
                  (e) => e.killed && e.killed_reason?.startsWith("breaker:")
                )?.killed_reason;
          return n ? n.slice(8) : null;
        },
      ],
      51112
    );
    let _ = (e) => (e?.autonomy === void 0 ? {} : { autonomy: e.autonomy }),
      S = (e) => (void 0 === e.autonomy ? {} : { autonomy: e.autonomy });
    function j(e) {
      if (void 0 === e) return [];
      let t = [];
      return (
        e.at_percent &&
          (e.at_percent.length > 64 ||
            e.at_percent.some(
              (e) => !Number.isInteger(e) || e < 1 || e > 100
            )) &&
          t.push(
            "Alert percentages must be whole numbers from 1 to 100, at most 64 entries."
          ),
        void 0 !== e.denials_in_10min &&
          (!Number.isInteger(e.denials_in_10min) ||
            e.denials_in_10min < 1 ||
            e.denials_in_10min > 1e4) &&
          t.push("Denial alert count must be a whole number from 1 to 10,000."),
        e.channels &&
          (e.channels.length > 3 ||
            e.channels.some(
              (e) => !["webhook", "email", "telegram"].includes(e)
            )) &&
          t.push("Choose webhook, email or Telegram alert channels."),
        t
      );
    }
    e.s(
      [
        "autonomyForm",
        0,
        _,
        "autonomyLadder",
        0,
        function (e, t) {
          return e?.autonomy && t
            ? [
                {
                  rung: 0,
                  caps_multiplier: 1,
                  after_days: 0,
                  clean_requests: 0,
                },
                ...e.autonomy.rungs.map((e, t) => ({ ...e, rung: t + 1 })),
              ].map((e) => ({
                ...e,
                current: e.rung === t.rung,
                reached: e.rung <= t.rung,
              }))
            : [];
        },
        "autonomyPolicy",
        0,
        S,
      ],
      32837
    ),
      e.s(
        [
          "alertLabel",
          0,
          function (e) {
            return "cap" === e.kind
              ? `${e.percent}% of the rolling ${e.window} cap`
              : "denials" === e.kind
              ? `${e.count} denied request batches in 10 minutes`
              : {
                  killed: "Agent killed",
                  approval: "Agent requested approval",
                }[e.kind] || "Agent alert";
          },
          "alertSettingsErrors",
          0,
          j,
        ],
        39331
      );
    let E = ["public", "attested", "unlinkable"],
      A = [
        "per_request_usd",
        "per_hour_usd",
        "per_day_usd",
        "per_week_usd",
        "max_output_tokens",
      ],
      N = { entries: 64, string: 160, usd: 1e6, tokens: 1e7 },
      R = "Agent rulebooks aren't switched on yet.",
      I = (e) =>
        null != e && Number.isFinite(Number(e))
          ? "$" +
            Number(e).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 12,
            })
          : "Not recorded",
      q = (e) =>
        null != e && Number.isFinite(Number(e)) ? Number(e) / 1e12 : null;
    function T(e) {
      return Array.isArray(e?.intents)
        ? e.intents.map(T).join(" / ")
        : e?.kind === "mcp_tool"
        ? `Tool: ${e.name || "Not recorded"}`
        : e?.kind !== "inference"
        ? "No intent recorded"
        : `Model: ${e.model || "Not recorded"} \xb7 Lane: ${
            e.lane || "Not recorded"
          } \xb7 Estimated cost: ${I(q(e.est_cost_pico))} \xb7 Tools: ${
            (e.tools || []).join(", ") || "None"
          }`;
    }
    async function M(e, t, n) {
      if (!["approve", "deny"].includes(n))
        throw Error("Choose Approve or Deny.");
      return e("/api/v1/agents/approvals/" + encodeURIComponent(t) + "/" + n, {
        method: "POST",
      });
    }
    let O = (e) =>
      String(e || "")
        .split(/[\n,]/)
        .map((e) => e.trim())
        .filter(Boolean);
    async function D(e, t, n, a) {
      return (
        !!n(
          `Kill ${
            e.name || "this agent"
          }? New requests through AnyRoute will be stopped until you resume it.`
        ) &&
        (await a(`/api/v1/agents/${encodeURIComponent(e.key_hash)}/kill`, {
          method: "POST",
          body: t.trim() ? { reason: t.trim() } : {},
        }),
        !0)
      );
    }
    e.s(
      [
        "CAP_FIELDS",
        0,
        A,
        "DAYS",
        0,
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "FEATURE_OFF",
        0,
        R,
        "LANES",
        0,
        E,
        "LIMITS",
        0,
        N,
        "buildPolicy",
        0,
        function (e) {
          let t = [],
            n = (e, n) => {
              let a = O(e);
              return (
                (a.length > N.entries || a.some((e) => e.length > N.string)) &&
                  t.push(
                    `${n}: at most 64 entries, each up to 160 characters.`
                  ),
                a
              );
            },
            a = (e, n) => {
              let a = Number(e);
              return (
                (!Number.isFinite(a) || a <= 0 || a > N.usd) &&
                  t.push(`${n}: enter USD greater than 0 and up to 1,000,000.`),
                a
              );
            },
            r = {
              ...S(e),
              version: 1,
              models: {},
              caps: {},
              on_breach: e.onBreach,
            };
          for (let [t, a, s, o] of [
            ["modelAllow", "models", "allow", "Allowed models"],
            ["modelDeny", "models", "deny", "Denied models"],
            ["toolAllow", "tools", "allow", "Allowed tools"],
            ["toolDeny", "tools", "deny", "Denied tools"],
          ]) {
            let i = n(e[t], o);
            i.length && ((r[a] ||= {}), (r[a][s] = i));
          }
          for (let n of (e.restrictTools &&
            (r.tools = { ...r.tools, allow: O(e.toolAllow) }),
          e.restrictLanes &&
            ((r.lanes = [...e.lanes]),
            (r.lanes.length > 64 || r.lanes.some((e) => !E.includes(e))) &&
              t.push("Choose public, attested or unlinkable lanes.")),
          A)) {
            let s = e.caps[n];
            if ("" !== String(s).trim())
              if ("max_output_tokens" === n) {
                let e = Number(s);
                (!Number.isInteger(e) || e <= 0 || e > N.tokens) &&
                  t.push(
                    "Output tokens: enter a whole number from 1 to 10,000,000."
                  ),
                  (r.caps[n] = e);
              } else r.caps[n] = a(s, n.replaceAll("_", " "));
          }
          if (
            ("" !== String(e.approval).trim() &&
              (r.approval = { above_usd: a(e.approval, "Approval threshold") }),
            e.restrictWindows)
          )
            for (let n of ((r.windows = e.windows.map((e) => ({
              days: [...e.days],
              start: e.start,
              end: e.end,
            }))),
            r.windows.length > 64 && t.push("Use at most 64 time windows."),
            r.windows))
              (n.days.length > 64 ||
                n.days.some((e) => !Number.isInteger(e) || e < 0 || e > 6)) &&
                t.push("Window days must be Sunday through Saturday."),
                [n.start, n.end].every((e) =>
                  /^([01]\d|2[0-3]):[0-5]\d$/.test(e)
                ) || t.push("Window times must use HH:MM in UTC.");
          return (
            C(e.breakers, r, t),
            void 0 !== e.agreements &&
              (r.agreements = structuredClone(e.agreements)),
            ["deny", "kill"].includes(e.onBreach) ||
              t.push("On breach, choose deny or kill."),
            void 0 !== e.alerts &&
              ((r.alerts = structuredClone(e.alerts)), t.push(...j(e.alerts))),
            { policy: r, errors: [...new Set(t)] }
          );
        },
        "capBars",
        0,
        function (e) {
          return ["hour", "day", "week"].map((t) => {
            let n = e?.spent?.[t],
              a = null != n && Number.isFinite(Number(n)) ? Number(n) : null,
              r = e?.caps?.[`per_${t}_usd`] ?? null;
            return {
              period: t,
              spent: a,
              cap: r,
              percent:
                r > 0 && null != a
                  ? Math.min(100, Math.max(0, (a / r) * 100))
                  : 0,
              label: `${null == a ? "Spend not recorded" : I(a)} / ${
                null == r ? "No cap" : I(r)
              }`,
            };
          });
        },
        "confirmKill",
        0,
        D,
        "decideAgentApproval",
        0,
        M,
        "decisionText",
        0,
        (e) =>
          ({
            allow: "Allow",
            deny: "Deny",
            approval_required: "Approval required",
            policy_set: "Rulebook saved",
            killed: "Killed",
            resumed: "Resumed",
          }[e] ||
          e ||
          "Decision not recorded"),
        "errorState",
        0,
        (e) =>
          e?.status === 404 && e?.type === "not_found"
            ? { off: !0, message: R }
            : {
                off: !1,
                message: e?.message || "The request could not be completed.",
              },
        "eventsPage",
        0,
        function (e) {
          let t = e?.data;
          return {
            events: [...(Array.isArray(t) ? t : t?.events || [])].sort(
              (e, t) =>
                Date.parse(t.ts) - Date.parse(e.ts) ||
                (BigInt(t.id || 0) > BigInt(e.id || 0)
                  ? 1
                  : BigInt(t.id || 0) < BigInt(e.id || 0)
                  ? -1
                  : 0)
            ),
            next:
              e?.next_cursor ?? e?.next ?? t?.next_cursor ?? t?.next ?? null,
          };
        },
        "formatUsd",
        0,
        I,
        "intentSummary",
        0,
        T,
        "pendingApprovals",
        0,
        function (e, t = Date.now()) {
          if (!Array.isArray(e?.data))
            throw Error("The approvals response could not be read.");
          return e.data
            .filter(
              (e) => "pending" === e.status && Date.parse(e.expires_at) > t
            )
            .sort(
              (e, t) => Date.parse(e.requested_at) - Date.parse(t.requested_at)
            );
        },
        "picoUsd",
        0,
        q,
        "policyForm",
        0,
        function (e) {
          let t = e || {};
          return {
            ..._(t),
            breakers: x(t),
            modelAllow: (t.models?.allow || []).join("\n"),
            modelDeny: (t.models?.deny || []).join("\n"),
            restrictTools: t.tools?.allow !== void 0,
            toolAllow: (t.tools?.allow || []).join("\n"),
            toolDeny: (t.tools?.deny || []).join("\n"),
            restrictLanes: void 0 !== t.lanes,
            lanes: t.lanes || [...E],
            caps: Object.fromEntries(
              A.map((e) => [e, t.caps?.[e] == null ? "" : String(t.caps[e])])
            ),
            restrictWindows: void 0 !== t.windows,
            windows: (t.windows || []).map((e) => ({
              ...e,
              days: [...e.days],
            })),
            ...(void 0 === t.alerts
              ? {}
              : { alerts: structuredClone(t.alerts) }),
            ...(void 0 === t.agreements
              ? {}
              : { agreements: structuredClone(t.agreements) }),
            approval:
              t.approval?.above_usd == null ? "" : String(t.approval.above_usd),
            onBreach: t.on_breach || "deny",
          };
        },
        "reasonText",
        0,
        (e) =>
          e?.message ||
          {
            killed: "This agent is killed.",
            model_not_allowed: "The model is outside the rulebook.",
            lane_not_allowed: "The lane is outside the rulebook.",
            over_per_request: "The request exceeds its cost cap.",
            over_per_hour: "The rolling hour cap would be exceeded.",
            over_per_day: "The rolling day cap would be exceeded.",
            over_per_week: "The rolling week cap would be exceeded.",
            max_tokens: "The output token cap would be exceeded.",
            tool_not_allowed: "A tool is outside the rulebook.",
            outside_window:
              "The current UTC time is outside the allowed windows.",
            approval_required: "This request needs approval.",
          }[e?.code] ||
          L(e?.code) ||
          e?.code ||
          "No reason supplied.",
        "sampleIntent",
        0,
        function (e) {
          let t = [];
          (!e.model?.trim() || e.model.trim().length > 160) &&
            t.push("Enter a model identifier up to 160 characters."),
            E.includes(e.lane) || t.push("Choose a valid lane.");
          let n = String(e.cost).trim();
          (!/^\d+(?:\.\d{1,12})?$/.test(n) || Number(n) > 1e6) &&
            t.push(
              "Estimated cost must be 0 to 1,000,000 USD with at most 12 decimal places."
            );
          let a = O(e.tools);
          (a.length > 64 || a.some((e) => e.length > 160)) &&
            t.push("Use at most 64 tools, each up to 160 characters.");
          let r = {
            kind: "inference",
            model: e.model.trim(),
            lane: e.lane,
            est_cost_pico: "0",
            tools: a,
          };
          if ("" !== e.tokens) {
            let n = Number(e.tokens);
            (!Number.isInteger(n) || n <= 0 || n > 1e7) &&
              t.push(
                "Output tokens must be a whole number from 1 to 10,000,000."
              ),
              (r.max_output_tokens = n);
          }
          if (!t.length) {
            let [e, t = ""] = n.split(".");
            r.est_cost_pico = (
              1000000000000n * BigInt(e) +
              BigInt(t.padEnd(12, "0"))
            ).toString();
          }
          return { intent: r, errors: t };
        },
        "utcTime",
        0,
        (e) =>
          e && Number.isFinite(Date.parse(e))
            ? new Date(e)
                .toISOString()
                .replace("T", " ")
                .replace(".000Z", " UTC")
            : "Not recorded",
      ],
      42366
    );
    var P = e.i(58209);
    function F({ apiKey: e, panel: a = !1 }) {
      let { page: r, error: s, busy: o, refresh: i } = f(e),
        [l, d] = (0, n.useState)(""),
        [u, p] = (0, n.useState)(""),
        m = (0, n.useRef)(!0);
      (0, n.useEffect)(
        () => (
          (m.current = !0),
          () => {
            m.current = !1;
          }
        ),
        []
      );
      let g = (t, n) => (0, c.api)(t, { ...n, key: e });
      async function y(e, t) {
        d(e), p("");
        try {
          await t(), m.current && window.dispatchEvent(new Event(h));
        } catch (e) {
          m.current && p(e.message);
        } finally {
          m.current && d("");
        }
      }
      return (0, t.jsxs)("section", {
        className: P.default.inbox,
        "aria-label": "Inbox",
        children: [
          !a && (0, t.jsx)("h2", { children: "Inbox" }),
          (0, t.jsx)("p", {
            children: "Review requests waiting for you and new account events.",
          }),
          (0, t.jsxs)("div", {
            className: P.default.actions,
            children: [
              (0, t.jsx)("button", {
                className: "text-button",
                disabled: o || !!l,
                onClick: i,
                children: "Refresh",
              }),
              (0, t.jsx)("button", {
                className: "text-button",
                disabled: !r || o || !!l,
                onClick: () => y("seen", () => v(g, window.localStorage, r)),
                children: "Mark seen",
              }),
              a &&
                (0, t.jsx)("a", {
                  className: "inline-link",
                  href: "/dashboard/#inbox",
                  children: "Open inbox",
                }),
            ],
          }),
          (0, t.jsx)("p", {
            className: "help-text",
            children:
              "Seen time stays in this browser. Pending approvals stay counted until decided or expired. Alerts cover retained records. Host updates show the current status and record update time; earlier status changes are not retained here.",
          }),
          r?.scope === "key" &&
            (0, t.jsx)("p", {
              className: "help-text",
              children:
                "This key’s events only. A management or owner/admin key is needed to decide approvals.",
            }),
          (s || u) &&
            (0, t.jsx)("p", {
              role: "alert",
              className: "error",
              children: s || u,
            }),
          o && (0, t.jsx)("p", { role: "status", children: "Reading inbox…" }),
          !o &&
            r &&
            !r.data.length &&
            (0, t.jsx)("p", { children: "No new items or pending approvals." }),
          r?.capped &&
            (0, t.jsx)("p", {
              role: "status",
              children:
                "Showing up to 100 recent records per source. Open Activity or the linked view for earlier records; the count covers the items shown.",
            }),
          (0, t.jsx)("ul", {
            className: P.default.list,
            children: r?.data.map((e) =>
              (0, t.jsxs)(
                "li",
                {
                  children: [
                    (0, t.jsxs)("div", {
                      className: P.default.row,
                      children: [
                        (0, t.jsx)("a", {
                          className: "inline-link",
                          href: e.href,
                          children: e.title,
                        }),
                        (0, t.jsx)("time", {
                          dateTime: e.at,
                          children: new Date(e.at).toLocaleString(),
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: "help-text",
                      children: [
                        e.key_label,
                        e.model,
                        e.status,
                        e.amount && "0" !== e.amount ? `${e.amount} USDG` : "",
                      ]
                        .filter(Boolean)
                        .join(" · "),
                    }),
                    "approval" === e.kind &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("p", { children: T(e.intent) }),
                          e.intent?.intents
                            ?.filter((e) => void 0 !== e.max_output_tokens)
                            .map((e, n) =>
                              (0, t.jsxs)(
                                "p",
                                {
                                  className: "help-text",
                                  children: [
                                    e.model,
                                    " · Output limit: ",
                                    e.max_output_tokens,
                                    " tokens",
                                  ],
                                },
                                n
                              )
                            ),
                          (0, t.jsxs)("p", {
                            children: [
                              "Limit ",
                              e.approval_limit,
                              " USDG · Expires ",
                              (0, t.jsx)("time", {
                                dateTime: e.expires_at,
                                children: new Date(
                                  e.expires_at
                                ).toLocaleString(),
                              }),
                            ],
                          }),
                          e.can_decide &&
                            (0, t.jsx)("div", {
                              className: P.default.actions,
                              children: ["approve", "deny"].map((n) =>
                                (0, t.jsx)(
                                  en,
                                  {
                                    secondary: !0,
                                    disabled:
                                      !!l ||
                                      Date.parse(e.expires_at) <= Date.now(),
                                    onClick: () =>
                                      y(e.id, () => M(g, e.approval_id, n)),
                                    children:
                                      "approve" === n ? "Approve" : "Deny",
                                  },
                                  n
                                )
                              ),
                            }),
                        ],
                      }),
                  ],
                },
                e.id
              )
            ),
          }),
        ],
      });
    }
    function $({ apiKey: e, onClose: a }) {
      let r = (0, n.useRef)(null);
      return (
        (0, n.useEffect)(() => {
          let e = r.current;
          return e.showModal(), () => e.close();
        }, []),
        (0, d.createPortal)(
          (0, t.jsxs)("dialog", {
            ref: r,
            className: `modal ${P.default.dialog}`,
            "aria-labelledby": "inbox-panel-title",
            onCancel: (e) => {
              e.preventDefault(), a();
            },
            onClose: a,
            onClick: (e) => {
              e.target === e.currentTarget && a();
            },
            children: [
              (0, t.jsxs)("div", {
                className: "modal-head",
                children: [
                  (0, t.jsx)("h2", {
                    id: "inbox-panel-title",
                    children: "Inbox",
                  }),
                  (0, t.jsx)("button", {
                    className: "icon-button",
                    "aria-label": "Close inbox",
                    onClick: a,
                    children: "×",
                  }),
                ],
              }),
              (0, t.jsx)(F, { apiKey: e, panel: !0 }),
            ],
          }),
          document.body
        )
      );
    }
    function U() {
      let [e] = p(),
        { page: a, error: r } = f(e),
        [s, o] = (0, n.useState)(!1),
        i = (0, n.useRef)(null);
      if (((0, n.useEffect)(() => o(!1), [e]), !e)) return null;
      let l = a?.count;
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)(w, {
            connected: !!e,
            count: l,
            error: r,
            open: s,
            onClick: () => o(!0),
            buttonRef: i,
            className: P.default.bell,
            badgeClass: P.default.badge,
          }),
          s &&
            (0, t.jsx)(
              $,
              {
                apiKey: e,
                onClose: () => {
                  o(!1), i.current?.focus();
                },
              },
              e
            ),
        ],
      });
    }
    let B = [
        { id: "chat", title: "Chat" },
        { id: "build", title: "Build" },
        { id: "agents", title: "Agents" },
        { id: "network", title: "Network" },
        { id: "verify", title: "Verify" },
        { id: "learn", title: "Learn" },
      ],
      K = (e, t, n, a, r, s, o = !1) => ({
        id: e,
        group: t,
        title: n,
        description: a,
        href: r,
        keywords: s.split(", "),
        featured: o,
      }),
      W = [
        K(
          "chat",
          "chat",
          "Chat with any model",
          "Use the Harness to send messages and choose a model.",
          "/harness/",
          "conversation, assistant, harness",
          !0
        ),
        K(
          "compare",
          "chat",
          "Compare model answers",
          "Put models side by side in the Arena.",
          "/arena/",
          "compare, arena, side by side",
          !0
        ),
        K(
          "images",
          "chat",
          "Make an image",
          "Choose an image-output model in the Harness.",
          "/harness/",
          "picture, draw, art, image, photo",
          !0
        ),
        K(
          "vision",
          "chat",
          "Ask about a picture",
          "Attach images to a Harness chat with a model that reads images.",
          "/harness/",
          "vision, upload, photograph"
        ),
        K(
          "voice",
          "chat",
          "Talk with a model",
          "Use browser speech and voice controls in the Harness.",
          "/harness/",
          "voice, speech, microphone, audio"
        ),
        K(
          "files",
          "chat",
          "Ask your files",
          "Add text or PDFs, ask questions and inspect the cited passages.",
          "/ask/",
          "pdf, documents, rag, upload",
          !0
        ),
        K(
          "encrypted",
          "chat",
          "Use encrypted chat",
          "Follow the device-encryption setup for the attested gateway.",
          "/docs/#e2ee-phala",
          "encrypted, encryption, e2ee"
        ),
        K(
          "history",
          "chat",
          "Organise your chats",
          "Search, pin, rename, export or import chats in the Harness.",
          "/harness/",
          "history, conversations, export, import"
        ),
        K(
          "install",
          "chat",
          "Install the app",
          "Open the Harness and use browser installation on your phone or desktop.",
          "/harness/",
          "pwa, mobile, phone, install"
        ),
        K(
          "models",
          "chat",
          "Find models and prices",
          "Search one model catalog by capability, provider, context and price.",
          "/models/",
          "catalog, pricing, cost, models, capabilities, images, audio, network"
        ),
        K(
          "account-activity",
          "agents",
          "See all your activity",
          "Follow calls, approvals, alerts and funds, with receipts and exports.",
          "/dashboard/#activity",
          "activity, history, ledger, receipts, export"
        ),
        K(
          "inbox",
          "build",
          "Check your inbox",
          "Review pending approvals, alerts, deposits, agreement events and host updates.",
          "/dashboard/#inbox",
          "inbox, notifications, attention"
        ),
        K(
          "dashboard",
          "build",
          "Manage your API keys",
          "Explore your account, then connect a key to see balances, calls and rules.",
          "/dashboard/",
          "dashboard, api key, account",
          !0
        ),
        K(
          "api",
          "build",
          "Call the API",
          "Read request formats, endpoints and the quickstart.",
          "/docs/#quickstart",
          "api, integration, developer",
          !0
        ),
        K(
          "cost",
          "build",
          "Estimate model costs",
          "Compare input, output and monthly costs using live catalogue prices.",
          "/cost/",
          "cost, estimate, price, monthly, budget"
        ),
        K(
          "payments",
          "build",
          "Choose a way to pay",
          "Read how USDG, $ANYR, stock escrow and x402 payments work.",
          "/docs/#payments",
          "payment, usdg, anyr, stock, escrow, x402",
          !0
        ),
        K(
          "tokens",
          "build",
          "Get private tokens",
          "Buy and spend blind tokens; read the payment and transport limits.",
          "/tokens/",
          "private tokens, blind, credits",
          !0
        ),
        K(
          "seal",
          "build",
          "Explore SEAL",
          "Read the privacy protocol, available paths and their limits.",
          "/seal/",
          "seal, privacy, protocol"
        ),
        K(
          "lanes",
          "build",
          "Choose a routing lane",
          "Compare lane disclosures and the conditions for each path.",
          "/docs/#lanes",
          "private, attested, public, routing"
        ),
        K(
          "unlinkable",
          "build",
          "Use the unlinkable lane",
          "Follow the Tor onion and blind-token requirements.",
          "/docs/#unlinkable-tor",
          "unlinkable, tor, onion, anonymity"
        ),
        K(
          "proxy",
          "build",
          "Connect an app through the proxy",
          "Read the single-file proxy setup and its privacy limits.",
          "/docs/#private",
          "proxy, private app, command line"
        ),
        K(
          "spec",
          "build",
          "Read the protocol spec",
          "Browse the published SEAL specifications and implementation status.",
          "/spec/",
          "specification, standard, seal"
        ),
        K(
          "registry",
          "build",
          "Find a provider record",
          "Inspect provider keys, build history and registry records.",
          "/registry/",
          "registry, provider, key, build"
        ),
        K(
          "providers",
          "build",
          "Connect a provider",
          "Browse providers and read the provider setup instructions.",
          "/providers/",
          "provider, endpoint, serve, inference"
        ),
        K(
          "routing",
          "build",
          "Set up a saved route",
          "Open Saved Routes in the dashboard to set models and routing preferences.",
          "/dashboard/",
          "saved routes, fallback, policy"
        ),
        K(
          "json-check",
          "build",
          "Read JSON check options",
          "Ask the router to check or repair JSON answers, and see what each costs.",
          "/docs/#structured-output",
          "json, schema, structured output, repair"
        ),
        K(
          "presets",
          "build",
          "Reuse prompt settings",
          "Open Presets in the dashboard to combine prompts, models and settings.",
          "/dashboard/",
          "preset, system prompt, template"
        ),
        K(
          "characters",
          "build",
          "Use a character card",
          "Open Characters in the dashboard to import cards and choose their visibility.",
          "/dashboard/",
          "character, persona, card"
        ),
        K(
          "batches",
          "build",
          "Run a batch of requests",
          "Open Batch Studio in the dashboard to submit and follow request batches.",
          "/dashboard/",
          "batch, bulk, csv, jsonl"
        ),
        K(
          "teams",
          "build",
          "Manage a team",
          "Open Teams in the dashboard to manage roles, budgets, keys and invitations.",
          "/dashboard/",
          "team, invite, roles"
        ),
        K(
          "tracing",
          "build",
          "Trace a request",
          "Open Tracing in dashboard API keys to inspect request traces.",
          "/dashboard/",
          "trace, debugging, latency"
        ),
        K(
          "playground",
          "build",
          "Send an API request",
          "Open Playground in the dashboard to send a request and inspect its receipt.",
          "/dashboard/",
          "playground, api request"
        ),
        K(
          "evals",
          "build",
          "Evaluate model answers",
          "Open Eval Lab in the dashboard to compare answers against your cases.",
          "/dashboard/",
          "eval, evaluation, rubric, benchmark"
        ),
        K(
          "skills",
          "build",
          "Inspect a skill",
          "Open Skills in the dashboard to read scan reports and installation details.",
          "/dashboard/",
          "skills, scan, install"
        ),
        K(
          "spend",
          "build",
          "Watch API spending",
          "Open Spend Watch in the dashboard to inspect usage and spending controls.",
          "/dashboard/",
          "spend watch, usage, costs"
        ),
        K(
          "api-receipts",
          "build",
          "Review your API calls",
          "Open Activity for calls, receipts and account events; Receipts keeps extra tools.",
          "/dashboard/#activity",
          "api receipts, calls, history"
        ),
        K(
          "holders",
          "build",
          "Inspect $ANYR account benefits",
          "Open Holders in the dashboard to inspect balance, tier and credit details.",
          "/dashboard/",
          "holders, tier, balance, anyr"
        ),
        K(
          "settings",
          "build",
          "Set account preferences",
          "Open Settings in the dashboard to manage account preferences.",
          "/dashboard/",
          "settings, account, preferences"
        ),
        K(
          "mcp",
          "build",
          "Connect agent tools",
          "Read the MCP tool interface and connection instructions.",
          "/docs/#mcp",
          "mcp, tools, agent"
        ),
        K(
          "rulebook",
          "agents",
          "Give an agent a budget",
          "Set caps, models, lanes, tools and hours for requests through AnyRoute.",
          "/agents/",
          "agent, rulebook, budget, limits",
          !0
        ),
        K(
          "sessions",
          "agents",
          "Give an agent a session",
          "Open Agent Sessions in the dashboard to set a session budget and lifetime.",
          "/dashboard/",
          "agent sessions, session, ttl"
        ),
        K(
          "approvals",
          "agents",
          "Approve an agent’s payment",
          "Review how approvals work, then connect a key to approve or deny a request.",
          "/agents/",
          "approval, approve, deny, payment",
          !0
        ),
        K(
          "telegram",
          "agents",
          "Link Telegram approvals",
          "Connect Telegram from Agents for approvals and alerts.",
          "/agents/",
          "telegram, bot, notification"
        ),
        K(
          "activity",
          "agents",
          "Review agent activity",
          "Open Activity for calls and agent events; Agents keeps the per-agent ledger.",
          "/dashboard/#activity",
          "activity, ledger, receipts, csv, json"
        ),
        K(
          "alerts",
          "agents",
          "Set agent alerts",
          "Configure the alert feed, spend webhook or linked Telegram notifications.",
          "/agents/",
          "alerts, notification, webhook"
        ),
        K(
          "breakers",
          "agents",
          "Set circuit breakers",
          "Configure rulebook breakers that stop subsequent requests through AnyRoute.",
          "/agents/",
          "breaker, kill switch, stop, safety"
        ),
        K(
          "autonomy",
          "agents",
          "Adjust agent autonomy",
          "Review progressive autonomy and spending caps for a selected agent.",
          "/agents/",
          "autonomy, spending, caps"
        ),
        K(
          "certificates",
          "agents",
          "Check an agent’s track record",
          "Read the router-signed certificate format, lifetime and verification limits.",
          "/docs/#agent-certificates",
          "certificate, track record, reputation"
        ),
        K(
          "directory",
          "agents",
          "Find an agent",
          "Browse opt-in public profiles and owner-supplied capabilities.",
          "/agents/directory/",
          "directory, discover, agent card",
          !0
        ),
        K(
          "profile",
          "agents",
          "Publish an agent profile",
          "Manage an opt-in public profile and its rulebook summary.",
          "/agents/directory/",
          "profile, publish, agent card"
        ),
        K(
          "agreements",
          "agents",
          "Make an agreement between agents",
          "Select an agent, then Agreements to use USDG milestone escrow.",
          "/agents/",
          "agreement, milestone, escrow, jury"
        ),
        K(
          "sealed",
          "agents",
          "Host a sealed agent",
          "Read the hosting recipe; no sealed agent is registered on this site yet.",
          "/docs/#sealed-agents",
          "sealed agent, hosting, sidecar, tdx"
        ),
        K(
          "network",
          "network",
          "See live network stats",
          "Inspect host counts, available models, bonds and policy version.",
          "/network/",
          "stats, network, capacity",
          !0
        ),
        K(
          "join",
          "network",
          "Host hardware on the network",
          "Join with the approved early-host build in a supported confidential VM.",
          "/network/#join",
          "host, gpu, server, hardware, join",
          !0
        ),
        K(
          "readiness",
          "network",
          "Check your hardware",
          "Read and download the capability checker before joining.",
          "/network/#readiness",
          "hardware, checker, tdx, sev, gpu"
        ),
        K(
          "hosts",
          "network",
          "Inspect host records",
          "Inspect hardware checks, recorded builds and work roots for each host.",
          "/hosts/",
          "hosts, records, attestation",
          !0
        ),
        K(
          "bonds",
          "network",
          "Understand host bonds",
          "Read the USDG bond requirements and current limits.",
          "/network/#bonds",
          "bond, usdg, stake"
        ),
        K(
          "policy",
          "network",
          "Read the host policy",
          "Read the signed admission policy and host requirements.",
          "/docs/#network-host-policy",
          "policy, admission, sanctions"
        ),
        K(
          "interest",
          "network",
          "Register network interest",
          "Tell the network what hardware or capacity you would bring.",
          "/network/#waitlist",
          "waitlist, interest, capacity"
        ),
        K(
          "receipt",
          "verify",
          "Check a receipt",
          "Inspect signatures, recorded hashes and the checks a receipt can support.",
          "/verify/#v-receipt",
          "receipt, proof, signature, verify",
          !0
        ),
        K(
          "status",
          "verify",
          "Check service status",
          "Inspect API health, lane availability and recent incidents.",
          "/status/",
          "status, uptime, health, outage",
          !0
        ),
        K(
          "keep",
          "verify",
          "See what we keep",
          "Inspect storage, logs and the places request text or addresses are read.",
          "/keep/",
          "data, privacy, retention, inventory",
          !0
        ),
        K(
          "key-log",
          "verify",
          "Inspect the key log",
          "Read the signing-key transparency log and anchoring instructions.",
          "/docs/#key-log",
          "key log, transparency, rekor"
        ),
        K(
          "inventory-log",
          "verify",
          "Check the inventory log",
          "Inspect the provenance and transparency proof for the data inventory.",
          "/keep/#provenance",
          "transparency log, inventory, hash"
        ),
        K(
          "provider-check",
          "verify",
          "Check provider evidence",
          "Inspect provider attestation and the limits of each check.",
          "/verify/",
          "provider, attestation, hardware, evidence"
        ),
        K(
          "badge",
          "verify",
          "Embed a provider badge",
          "Read how to show a provider’s verification status and receipt evidence.",
          "/docs/#badge",
          "badge, embed, status"
        ),
        K(
          "proof-time",
          "verify",
          "Inspect proof freshness",
          "Read proof-time observations and what they establish.",
          "/status/#proof-time",
          "proof time, freshness, evidence"
        ),
        K(
          "docs",
          "learn",
          "Read the docs",
          "Browse guides and reference sections for AnyRoute tools.",
          "/docs/",
          "documentation, guide, help",
          !0
        ),
        K(
          "changelog",
          "learn",
          "See what's new",
          "Follow shipped changes with links to their pages and public commits.",
          "/changelog/",
          "changelog, updates, shipped, rss, atom"
        ),
        K(
          "whitepaper",
          "learn",
          "Read the whitepaper",
          "Read the architecture, payment design and routing model.",
          "/whitepaper/",
          "whitepaper, paper, architecture",
          !0
        ),
        K(
          "case-study",
          "learn",
          "Read the case study",
          "Follow an application integration and its routing choices.",
          "/case-study/",
          "case study, example, integration"
        ),
        K(
          "roadmap",
          "learn",
          "See the roadmap",
          "See what is available and what comes next.",
          "/#roadmap",
          "roadmap, planned, future"
        ),
        K(
          "about",
          "learn",
          "Learn about AnyRoute",
          "Read the project’s purpose and approach.",
          "/#about",
          "about, purpose, project"
        ),
        K(
          "privacy-notice",
          "learn",
          "Read the data notice",
          "Read the site’s data-handling notice and privacy limits.",
          "/legal/privacy/",
          "legal, privacy notice, data notice"
        ),
        K(
          "terms",
          "learn",
          "Read the terms",
          "Read the terms for using AnyRoute.",
          "/legal/terms/",
          "legal, terms, conditions"
        ),
      ],
      H = new Set([
        "json-check",
        "inbox",
        "activity",
        "history",
        "unlinkable",
        "proxy",
        "registry",
        "routing",
        "presets",
        "characters",
        "batches",
        "teams",
        "tracing",
        "playground",
        "evals",
        "skills",
        "spend",
        "api-receipts",
        "holders",
        "settings",
        "sessions",
        "breakers",
        "autonomy",
        "profile",
        "inventory-log",
        "badge",
        "proof-time",
      ]);
    for (let e of (H.add("spec"), W)) e.menu = !H.has(e.id);
    W.push({
      ...K(
        "chat-limits",
        "chat",
        "Limit chat spending",
        "Open Harness Tools to cap spending, approve replies and stop chat.",
        "/harness/",
        "limits, budget, spending, approval, stop"
      ),
      menu: !1,
    }),
      W.push({
        ...K(
          "rulebook-templates",
          "agents",
          "Start from a rulebook template",
          "Review starter limits, then apply a rulebook to a selected agent.",
          "/agents/#rulebook-templates",
          "starter, template, budget, rules"
        ),
        menu: !1,
      }),
      W.push({
        ...K(
          "request-check",
          "agents",
          "Check a request against your rules",
          "Check agent rules without spending: allow, approval required or deny.",
          "/agents/#request-check",
          "check, try, request, rules"
        ),
        menu: !1,
      }),
      W.push({
        ...K(
          "prompt-library",
          "chat",
          "Save and reuse prompts",
          "Keep named prompts in this browser and fill in variables before using them.",
          "/harness/#prompt-library",
          "prompts, library, templates, favourites"
        ),
        menu: !1,
      }),
      W.push({
        ...K(
          "why-this-route",
          "learn",
          "Understand a route",
          "See why each reply went to its provider, and what that explanation does not show.",
          "/docs/#why-this-route",
          "route explanation, provider, routing, fallback"
        ),
        menu: !1,
      }),
      W.push({
        ...K(
          "insights",
          "build",
          "See where your money goes",
          "See spend by model, key and lane, and the same abilities for less.",
          "/dashboard/#insights",
          "spend, insights, cost, model, key, agent, lane"
        ),
        menu: !1,
      });
    let z = (e) => W.filter((t) => t.group === e && t.menu);
    for (let e of (W.push({
      ...K(
        "webhooks",
        "build",
        "Manage webhook destinations",
        "Inspect signing availability, event subscriptions and delivery history.",
        "/dashboard/webhooks/",
        "webhooks, events, signature"
      ),
      menu: !1,
    }),
    W.push(
      K(
        "account-keys",
        "build",
        "Manage account keys",
        "Explore API keys, then connect to create keys and set budgets.",
        "/dashboard/#api-keys",
        "api keys, budget"
      )
    ),
    W.push(
      K(
        "account-payments",
        "build",
        "Add funds to your account",
        "Explore Payments, then connect to see deposit instructions and your balance.",
        "/dashboard/#payments",
        "balance, deposit"
      )
    ),
    ["account-keys", "account-payments"]))
      W.find((t) => t.id === e).menu = !1;
    let G = (e, t, n, a, r) => ({
        taskId: e,
        title: t,
        hash: n,
        description: a,
        start: r,
        href: n ? "/dashboard/#" + n : W.find((t) => t.id === e).href,
      }),
      Z = [
        G(
          "insights",
          "Insights",
          "insights",
          "Explore spending by day or week, model, key or agent and lane, with live price comparisons.",
          "Connect your key to see where your money goes."
        ),
        G(
          "webhooks",
          "Webhooks",
          null,
          "Inspect event destinations, signing availability and delivery history.",
          "Connect an owner key to manage webhook destinations and see deliveries."
        ),
        G(
          "inbox",
          "Inbox",
          "inbox",
          "Review pending approvals and new alerts, deposits, agreement events and host updates.",
          "Connect your key to check items that need your attention."
        ),
        G(
          "dashboard",
          "Home",
          "home",
          "See your balance, spending, keys, agents and recent call receipts in one place.",
          "Connect your key to see what you own and what needs your attention."
        ),
        G(
          "account-activity",
          "Activity",
          "activity",
          "Follow calls, approvals, alerts, deposits and agreements in one list.",
          "Connect your key to read visible activity and export a filtered range."
        ),
        G(
          "playground",
          "Playground",
          "playground",
          "Send an API request and inspect its answer, cost and receipt.",
          "Connect your key, choose a model and send a request."
        ),
        G(
          "models",
          "Models",
          "models",
          "Browse models, providers and per-token prices.",
          "Connect your key to choose a model for your next call."
        ),
        G(
          "routing",
          "Saved Routes",
          "saved-routes",
          "Save model choices, fallbacks and routing preferences for repeat calls.",
          "Connect your key to create a saved route."
        ),
        G(
          "presets",
          "Presets",
          "presets",
          "Reuse prompts, models and request settings.",
          "Connect your key to save a preset."
        ),
        G(
          "characters",
          "Characters",
          "characters",
          "Import character cards and choose who can use them.",
          "Connect your key to import a card."
        ),
        G(
          "evals",
          "Eval Lab",
          "eval-lab",
          "Compare model answers against your own cases.",
          "Connect your key to add cases and run a comparison."
        ),
        G(
          "batches",
          "Batch Studio",
          "batch-studio",
          "Submit groups of requests and follow their progress.",
          "Connect your key to submit a batch."
        ),
        G(
          "skills",
          "Skills",
          "skills",
          "Read skill scan reports and installation details.",
          "Connect your key to inspect a skill."
        ),
        G(
          "rulebook",
          "Agents",
          null,
          "Set budgets and rules, stop agents and review requests waiting for approval.",
          "Connect a management key or an owner/admin key to manage agents."
        ),
        G(
          "sessions",
          "Agent Sessions",
          "agent-sessions",
          "Give an agent a spending budget and a time limit.",
          "Connect your key to open a session."
        ),
        G(
          "directory",
          "Public directory",
          null,
          "Browse opt-in agent profiles and owner-supplied capabilities.",
          "Open the public directory to find an agent; no key is needed."
        ),
        G(
          "account-payments",
          "Payments",
          "payments",
          "See your balance, deposit instructions and payment options.",
          "Connect your key to add funds."
        ),
        G(
          "holders",
          "Holders",
          "holders",
          "Inspect your $ANYR balance, tier and credit details.",
          "Connect your key to read your account details."
        ),
        G(
          "spend",
          "Spend Watch",
          "spend-watch",
          "Inspect spending and configure spending alerts.",
          "Connect your key to read usage and set a spending threshold."
        ),
        G(
          "api-receipts",
          "Receipts",
          "receipts",
          "Inspect recorded calls, costs and signed receipts.",
          "Connect your key to read your call history."
        ),
        G(
          "account-keys",
          "API keys",
          "api-keys",
          "Create keys, set budgets and manage access to your account.",
          "Connect your key to manage account keys."
        ),
        G(
          "teams",
          "Teams",
          "teams",
          "Manage team roles, budgets, keys and invitations.",
          "Connect your key to manage a team, or follow your invitation link."
        ),
        G(
          "providers",
          "Providers",
          "providers",
          "Inspect provider records, hardware evidence and model availability.",
          "Connect your key to inspect providers, or browse the public provider page."
        ),
        G(
          "settings",
          "Settings",
          "settings",
          "Export account metadata and read how to connect an app.",
          "Connect your key to read your account settings."
        ),
        G(
          "keep",
          "What we keep",
          null,
          "Inspect storage, logs and where request text or addresses are read.",
          "Open What we keep to read the inventory; no key is needed."
        ),
      ];
    for (let e of (W.push(
      {
        ...K(
          "statements",
          "build",
          "Download a monthly statement",
          "Download a signed monthly statement as JSON, or print it to PDF.",
          "/dashboard/#statements",
          "statement, monthly, balance, money, pdf"
        ),
        menu: !1,
      },
      {
        ...K(
          "account-export",
          "build",
          "Export your data",
          "Download accessible account records with an inclusion manifest.",
          "/dashboard/#export-data",
          "export, download, account, data"
        ),
        menu: !1,
      }
    ),
    Z.push(
      G(
        "statements",
        "Statements",
        "statements",
        "Download a signed monthly statement as JSON, or print it to PDF.",
        "Connect a key to request a statement."
      ),
      G(
        "account-export",
        "Export your data",
        "export-data",
        "Take readable account records with you in one JSON download.",
        "Connect a key to export records within its access."
      )
    ),
    Z)) {
      let t = W.find((t) => t.id === e.taskId);
      e.hash && "/dashboard/" === t.href && (t.href = e.href);
    }
    function J({ path: e }) {
      let a,
        [r, s] = (0, n.useState)(null),
        [o, i] = (0, n.useState)(""),
        l = (0, n.useRef)(null),
        d = (0, n.useRef)({});
      (0, n.useEffect)(() => {
        let e = () => {
          i(location.hash), s(null);
        };
        return (
          e(),
          window.addEventListener("hashchange", e),
          () => window.removeEventListener("hashchange", e)
        );
      }, []),
        (0, n.useEffect)(() => {
          if (!r) return;
          let e = (e) => {
              l.current?.contains(e.target) || s(null);
            },
            t = (e) => {
              "Escape" === e.key &&
                (e.preventDefault(), s(null), d.current[r]?.focus());
            };
          return (
            document.addEventListener("pointerdown", e),
            document.addEventListener("keydown", t),
            () => {
              document.removeEventListener("pointerdown", e),
                document.removeEventListener("keydown", t);
            }
          );
        }, [r]);
      let c =
        ((a = "/" === e ? [] : W.filter((t) => t.href.split("#")[0] === e)),
        (
          a.find((e) => o && e.href.endsWith(o)) ||
          a.find((e) => !e.href.includes("#")) ||
          a[0]
        )?.group);
      return (0, t.jsx)("div", {
        className: "desktop-links task-menus",
        ref: l,
        onBlur: (e) => {
          e.currentTarget.contains(e.relatedTarget) || s(null);
        },
        children: B.map((e) =>
          (0, t.jsxs)(
            "div",
            {
              className: "task-disclosure",
              children: [
                (0, t.jsxs)("button", {
                  type: "button",
                  ref: (t) => {
                    d.current[e.id] = t;
                  },
                  "aria-expanded": r === e.id,
                  "aria-controls": `nav-${e.id}`,
                  "aria-current": c === e.id ? "true" : void 0,
                  onClick: () => s(r === e.id ? null : e.id),
                  children: [
                    e.title,
                    (0, t.jsx)("span", {
                      "aria-hidden": "true",
                      children: "⌄",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "task-panel",
                  id: `nav-${e.id}`,
                  hidden: r !== e.id,
                  "aria-label": `${e.title} tasks`,
                  children: z(e.id).map((e) =>
                    (0, t.jsxs)(
                      "a",
                      {
                        href: e.href,
                        onClick: () => s(null),
                        children: [
                          (0, t.jsx)("strong", { children: e.title }),
                          (0, t.jsx)("span", { children: e.description }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              ],
            },
            e.id
          )
        ),
      });
    }
    function Y({ onNavigate: e }) {
      return (0, t.jsxs)("div", {
        className: "mobile-task-groups",
        children: [
          (0, t.jsx)("a", {
            className: "mobile-home",
            href: "/",
            onClick: e,
            children: "Home",
          }),
          B.map((n) =>
            (0, t.jsxs)(
              "section",
              {
                "aria-labelledby": `mobile-${n.id}`,
                children: [
                  (0, t.jsx)("h2", { id: `mobile-${n.id}`, children: n.title }),
                  (0, t.jsx)("ul", {
                    children: z(n.id).map((n) =>
                      (0, t.jsx)(
                        "li",
                        {
                          children: (0, t.jsxs)("a", {
                            href: n.href,
                            onClick: e,
                            children: [
                              n.title,
                              (0, t.jsx)("span", { children: n.description }),
                            ],
                          }),
                        },
                        n.id
                      )
                    ),
                  }),
                ],
              },
              n.id
            )
          ),
        ],
      });
    }
    e.s(
      [
        "ACCOUNT_GROUPS",
        0,
        [
          { title: "Home", ids: ["dashboard", "inbox"] },
          {
            title: "Use",
            ids: [
              "playground",
              "models",
              "routing",
              "presets",
              "characters",
              "evals",
              "batches",
              "skills",
            ],
          },
          { title: "Agents", ids: ["rulebook", "sessions", "directory"] },
          {
            title: "Money",
            ids: [
              "insights",
              "account-activity",
              "statements",
              "account-payments",
              "holders",
              "spend",
              "api-receipts",
            ],
          },
          {
            title: "Account",
            ids: [
              "account-keys",
              "account-export",
              "teams",
              "providers",
              "settings",
              "webhooks",
              "keep",
            ],
          },
        ],
        "ACCOUNT_SECTIONS",
        0,
        Z,
        "GROUPS",
        0,
        B,
        "TASKS",
        0,
        W,
        "menuTasks",
        0,
        z,
      ],
      55616
    );
    var V = e.i(76804);
    let X = (e) =>
        e.length > 4 && e.endsWith("ies")
          ? e.slice(0, -3) + "y"
          : e.length > 3 && e.endsWith("s") && !e.endsWith("ss")
          ? e.slice(0, -1)
          : e,
      Q = (e) =>
        (
          e
            .toLowerCase()
            .normalize("NFKD")
            .replace(/[\u0300-\u036f]/g, "")
            .match(/[a-z0-9]+/g) || []
        )
          .map(X)
          .join(" ");
    function ee(e, t) {
      if (e === t) return !0;
      if (4 > Math.min(e.length, t.length) || Math.abs(e.length - t.length) > 1)
        return !1;
      if (e.length === t.length) {
        let n = [...e].flatMap((e, n) => (e === t[n] ? [] : [n]));
        return (
          1 === n.length ||
          (2 === n.length &&
            n[1] === n[0] + 1 &&
            e[n[0]] === t[n[1]] &&
            e[n[1]] === t[n[0]])
        );
      }
      let [n, a] = e.length < t.length ? [e, t] : [t, e],
        r = 0;
      for (; n[r] === a[r] && r < n.length; ) r++;
      return n.slice(r) === a.slice(r + 1);
    }
    function et() {
      let [e, a] = (0, n.useState)(!1),
        [r, s] = (0, n.useState)(""),
        [o, i] = (0, n.useState)(0),
        l = (0, n.useRef)(null),
        d = (0, n.useRef)(null),
        c = (0, n.useMemo)(
          () =>
            (function (e, t = W) {
              let n = Q(e);
              if (!n) return t.filter((e) => e.featured);
              let a = n.split(" ");
              return t
                .map((e, t) => {
                  let r = Q(e.title),
                    s = Q(e.keywords.join(" ")),
                    o = Q(e.description),
                    i =
                      r === n
                        ? 600
                        : r.startsWith(n)
                        ? 500
                        : 400 * !!r.includes(n);
                  if (!i) {
                    let e = [r.split(" "), s.split(" "), o.split(" ")],
                      t = a.map((t) =>
                        e[0].some((e) => e.startsWith(t))
                          ? 350
                          : e[1].some((e) => e.startsWith(t))
                          ? 300
                          : e[2].some((e) => e.startsWith(t))
                          ? 200
                          : e[0].some((e) => ee(t, e))
                          ? 120
                          : 100 * !!e[1].some((e) => ee(t, e))
                      );
                    i = t.every(Boolean) ? Math.min(...t) : 0;
                  }
                  return { task: e, index: t, score: i };
                })
                .filter((e) => e.score)
                .sort((e, t) => t.score - e.score || e.index - t.index)
                .map((e) => e.task);
            })(r),
          [r]
        );
      (0, n.useEffect)(() => {
        let e = () => {
            s(""), i(0), a(!0);
          },
          t = (t) => {
            let n;
            (function (
              e,
              { pathname: t, editable: n = !1, dialogOpen: a = !1 }
            ) {
              if (
                e.defaultPrevented ||
                e.isComposing ||
                /^\/harness\/?$/.test(t) ||
                a
              )
                return !1;
              let r =
                  (e.metaKey || e.ctrlKey) &&
                  !e.altKey &&
                  !e.shiftKey &&
                  "k" === e.key.toLowerCase(),
                s =
                  "/" === e.key && !e.metaKey && !e.ctrlKey && !e.altKey && !n;
              return !!(r || s);
            })(t, {
              pathname: location.pathname,
              editable:
                (n = t.target) instanceof Element &&
                !!n.closest(
                  'input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]'
                ),
              dialogOpen: !!document.querySelector("dialog[open]"),
            }) && (t.preventDefault(), e());
          };
        return (
          window.addEventListener("anyroute:site-search", e),
          document.addEventListener("keydown", t),
          () => {
            window.removeEventListener("anyroute:site-search", e),
              document.removeEventListener("keydown", t);
          }
        );
      }, []),
        (0, n.useEffect)(() => {
          if (!e) return;
          let t = document.activeElement,
            n = l.current;
          return (
            n.showModal(),
            d.current?.focus(),
            () => {
              n.close(), t?.isConnected && t.focus();
            }
          );
        }, [e]),
        (0, n.useEffect)(() => {
          e &&
            l.current
              ?.querySelector(`[data-result="${o}"]`)
              ?.scrollIntoView({ block: "nearest" });
        }, [e, o, r]);
      let u = () => a(!1);
      return (0, t.jsxs)("dialog", {
        ref: l,
        id: "site-search",
        className: "modal site-search",
        "aria-labelledby": "site-search-title",
        onCancel: (e) => {
          e.preventDefault(), u();
        },
        onClose: u,
        onClick: (e) => {
          e.target === e.currentTarget && u();
        },
        onKeyDown: (e) => {
          ("ArrowDown" === e.key || "ArrowUp" === e.key) && c.length
            ? (e.preventDefault(),
              i(
                (t) =>
                  (t + ("ArrowDown" === e.key ? 1 : -1) + c.length) % c.length
              ),
              d.current?.focus())
            : "Enter" === e.key &&
              e.target === d.current &&
              c[o] &&
              (e.preventDefault(), window.location.assign(c[o].href));
        },
        children: [
          (0, t.jsxs)("div", {
            className: "modal-head",
            children: [
              (0, t.jsx)("h2", {
                id: "site-search-title",
                children: "Find anything",
              }),
              (0, t.jsx)("button", {
                type: "button",
                className: "icon-button",
                "aria-label": "Close search",
                onClick: u,
                children: "×",
              }),
            ],
          }),
          (0, t.jsx)("label", {
            className: "eyebrow",
            htmlFor: "site-search-query",
            children: "Search tools and guides",
          }),
          (0, t.jsx)("input", {
            ref: d,
            id: "site-search-query",
            type: "search",
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-expanded": e,
            "aria-controls": "site-search-results",
            "aria-activedescendant": e && c[o] ? `search-${c[o].id}` : void 0,
            value: r,
            onChange: (e) => {
              s(e.target.value), i(0);
            },
            autoComplete: "off",
            spellCheck: "false",
          }),
          (0, t.jsx)("p", {
            className: "search-status",
            role: "status",
            children: r.trim()
              ? `${c.length} ${1 === c.length ? "result" : "results"}`
              : "Start here",
          }),
          (0, t.jsx)("div", {
            className: "search-results",
            id: "site-search-results",
            role: "listbox",
            "aria-label": "Matching tasks",
            children:
              e &&
              c.map((e, n) =>
                (0, t.jsxs)(
                  "a",
                  {
                    id: `search-${e.id}`,
                    "data-result": n,
                    href: e.href,
                    role: "option",
                    "aria-selected": o === n,
                    onFocus: () => i(n),
                    onMouseMove: () => i(n),
                    onClick: u,
                    children: [
                      (0, t.jsx)("small", {
                        children: B.find((t) => t.id === e.group).title,
                      }),
                      (0, t.jsx)("strong", { children: e.title }),
                      (0, t.jsx)("span", { children: e.description }),
                    ],
                  },
                  e.id
                )
              ),
          }),
          e &&
            !c.length &&
            (0, t.jsxs)("p", {
              className: "search-empty",
              children: [
                "No matching tasks. Try another word or ",
                (0, t.jsx)("a", {
                  href: "/docs/",
                  onClick: u,
                  children: "browse the docs",
                }),
                ".",
              ],
            }),
          (0, t.jsx)("p", {
            className: "search-help",
            children: "↑ ↓ to choose · Enter to open · Esc to close",
          }),
        ],
      });
    }
    function en({
      children: e,
      href: n,
      secondary: a = !1,
      light: r = !1,
      className: s = "",
      ...o
    }) {
      let i =
          "ar-button" +
          (a ? " secondary" : "") +
          (r ? " light" : "") +
          (s ? " " + s : ""),
        l = (0, t.jsxs)(t.Fragment, {
          children: [
            !a && (0, t.jsx)("i", { "aria-hidden": "true" }),
            (0, t.jsx)("span", { children: e }),
            (0, t.jsx)("b", { "aria-hidden": "true", children: "→" }),
          ],
        });
      return n
        ? (0, t.jsx)("a", { className: i, href: n, ...o, children: l })
        : (0, t.jsx)("button", { className: i, ...o, children: l });
    }
    function ea() {
      return (0, t.jsx)("a", {
        href: "/",
        className: "brand",
        "aria-label": "Anyroute home",
        children: (0, t.jsx)(a, { "aria-hidden": "true", title: "" }),
      });
    }
    function er({ app: e = !1 }) {
      let [a, r] = (0, n.useState)(!1),
        [s, o] = (0, n.useState)("light"),
        [i, d] = (0, n.useState)(!1),
        c = (0, n.useRef)(null),
        [u, p] = (0, n.useState)("");
      return (
        (0, n.useEffect)(() => {
          p(location.pathname);
          let e = scrollY,
            t = 0,
            n = () => {
              t = 0;
              let n = document.querySelector("[data-dark-hero]"),
                a = scrollY;
              o(n && n.getBoundingClientRect().bottom > 40 ? "dark" : "light"),
                d(a > e && a > 480),
                (e = a);
            },
            a = () => {
              t || (t = requestAnimationFrame(n));
            };
          return (
            n(),
            addEventListener("scroll", a, { passive: !0 }),
            addEventListener("resize", a),
            () => {
              removeEventListener("scroll", a),
                removeEventListener("resize", a),
                cancelAnimationFrame(t);
            }
          );
        }, []),
        (0, n.useEffect)(() => {
          let e = (e) => {
            "Escape" === e.key && a && (r(!1), c.current?.focus());
          };
          return (
            document.addEventListener("keydown", e),
            (document.documentElement.style.overflow = a ? "hidden" : ""),
            () => {
              document.removeEventListener("keydown", e),
                (document.documentElement.style.overflow = "");
            }
          );
        }, [a]),
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("a", {
              className: "skip",
              href: "#content",
              children: "Skip to content",
            }),
            (0, t.jsxs)("header", {
              className: "site-header" + (a ? " expanded" : ""),
              "data-tone": s,
              "data-hidden": i,
              children: [
                (0, t.jsxs)("nav", {
                  "aria-label": "Main navigation",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "nav-left",
                      children: [
                        (0, t.jsx)(ea, {}),
                        (0, t.jsx)(J, { path: u }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "nav-buttons",
                      children: [
                        (0, t.jsx)(en, {
                          href: e ? "/docs/" : "/dashboard/",
                          children: e ? "Read docs" : "Open dashboard",
                        }),
                        (0, t.jsx)(en, {
                          href: e ? "/" : "/docs/",
                          secondary: !0,
                          children: e ? "Website" : "API docs",
                        }),
                      ],
                    }),
                    (0, t.jsx)(U, {}),
                    (0, t.jsx)(V.default, {
                      onOpen: () => r(!1),
                      hint: !/^\/harness\/?$/.test(u),
                    }),
                    e && /^\/harness\/?$/.test(u) && (0, t.jsx)(l, {}),
                    (0, t.jsxs)("button", {
                      ref: c,
                      className: "menu-toggle",
                      "aria-label": a ? "Close menu" : "Open menu",
                      "aria-expanded": a,
                      "aria-controls": "mobile-menu",
                      onClick: () => r(!a),
                      children: [
                        (0, t.jsx)("span", {}),
                        (0, t.jsx)("span", {}),
                      ],
                    }),
                  ],
                }),
                a &&
                  (0, t.jsxs)("div", {
                    className: "mobile-menu",
                    id: "mobile-menu",
                    children: [
                      (0, t.jsx)(Y, { onNavigate: () => r(!1) }),
                      (0, t.jsxs)("div", {
                        className: "button-row",
                        children: [
                          (0, t.jsx)(en, {
                            href: "/dashboard/",
                            light: !0,
                            children: "Open dashboard",
                          }),
                          (0, t.jsx)(en, {
                            href: "/docs/",
                            secondary: !0,
                            children: "API docs",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            (0, t.jsx)(et, {}),
          ],
        })
      );
    }
    function es() {
      return (
        (0, n.useEffect)(() => {
          let e = matchMedia("(prefers-reduced-motion: reduce)").matches;
          document
            .querySelectorAll("[data-stagger]")
            .forEach((e) =>
              [...e.children].forEach((e, t) => e.style.setProperty("--i", t))
            );
          let t = (t) => {
              let n = Number(t.dataset.count),
                a = Number(t.dataset.decimals || 0),
                r = (e) =>
                  e.toLocaleString("en-US", {
                    minimumFractionDigits: a,
                    maximumFractionDigits: a,
                  });
              if (e) {
                t.textContent = r(n);
                return;
              }
              let s = performance.now(),
                o = (e) => {
                  let a = Math.min(1, (e - s) / 1600);
                  (t.textContent = r(n * (1 - Math.pow(1 - a, 4)))),
                    a < 1 && requestAnimationFrame(o);
                };
              requestAnimationFrame(o);
            },
            n = new IntersectionObserver(
              (e) =>
                e.forEach(({ target: e, isIntersecting: a }) => {
                  a &&
                    (e.classList.add("is-in"),
                    e.querySelectorAll("[data-count]").forEach(t),
                    e.dataset.count && t(e),
                    n.unobserve(e));
                }),
              { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
            ),
            a = (e) => {
              1 === e.nodeType &&
                (e.matches("[data-reveal],[data-inview]") &&
                  !e.classList.contains("is-in") &&
                  n.observe(e),
                e
                  .querySelectorAll(
                    "[data-reveal]:not(.is-in),[data-inview]:not(.is-in)"
                  )
                  .forEach((e) => n.observe(e)),
                e
                  .querySelectorAll("[data-stagger]")
                  .forEach((e) =>
                    [...e.children].forEach((e, t) =>
                      e.style.setProperty("--i", t)
                    )
                  ));
            };
          a(document.body);
          let r = new MutationObserver((e) =>
            e.forEach((e) => e.addedNodes.forEach(a))
          );
          r.observe(document.body, { childList: !0, subtree: !0 });
          let s = [...document.querySelectorAll("[data-spot]")],
            o = (e) => {
              let t = e.currentTarget,
                n = t.getBoundingClientRect();
              t.style.setProperty("--mx", `${e.clientX - n.left}px`),
                t.style.setProperty("--my", `${e.clientY - n.top}px`);
            };
          s.forEach((e) => e.addEventListener("pointermove", o));
          let i = [...document.querySelectorAll("[data-progress]")],
            l = 0,
            d = () => {
              l = 0;
              let t = innerHeight;
              i.forEach((n) => {
                let a = n.getBoundingClientRect(),
                  r = Math.min(
                    1,
                    Math.max(0, (0.85 * t - a.top) / (a.height + 0.25 * t))
                  );
                n.style.setProperty("--p", e ? 1 : r.toFixed(3)),
                  n.dispatchEvent(new CustomEvent("progress", { detail: r }));
              });
            },
            c = () => {
              l || (l = requestAnimationFrame(d));
            };
          return (
            i.length &&
              (d(),
              addEventListener("scroll", c, { passive: !0 }),
              addEventListener("resize", c)),
            () => {
              n.disconnect(),
                r.disconnect(),
                s.forEach((e) => e.removeEventListener("pointermove", o)),
                removeEventListener("scroll", c),
                removeEventListener("resize", c),
                cancelAnimationFrame(l);
            }
          );
        }, []),
        null
      );
    }
    function eo({ text: e, className: a = "" }) {
      let [r, s] = (0, n.useState)(e);
      return (
        (0, n.useEffect)(() => {
          if (matchMedia("(prefers-reduced-motion: reduce)").matches)
            return void s(e);
          let t = "0123456789abcdef#%/<>_",
            n = 0,
            a,
            r = () => {
              n++,
                s(
                  [...e]
                    .map((a, r) =>
                      " " === a || r < (n / 18) * e.length
                        ? a
                        : t[(Math.random() * t.length) | 0]
                    )
                    .join("")
                ),
                n < 18 ? (a = requestAnimationFrame(r)) : s(e);
            };
          return (a = requestAnimationFrame(r)), () => cancelAnimationFrame(a);
        }, [e]),
        (0, t.jsx)("span", { className: "scramble " + a, children: r })
      );
    }
    function ei({ text: e, label: a = "Copy" }) {
      let [r, s] = (0, n.useState)("");
      return (
        (0, n.useEffect)(() => {
          if (!r) return;
          let e = setTimeout(() => s(""), 1800);
          return () => clearTimeout(e);
        }, [r]),
        (0, t.jsx)("button", {
          className: "text-button",
          onClick: async () => {
            try {
              await navigator.clipboard.writeText(e), s("Copied");
            } catch {
              s("Select and copy below");
            }
          },
          children: r || a,
        })
      );
    }
    let el =
      /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`[^`]*`)|\b(const|let|await|new|import|from|export|default|async|function|return|true|false|null)\b|\b(\d[\d_.]*)\b/g;
    function ed(e) {
      let n = [],
        a = 0,
        r,
        s = 0;
      for (el.lastIndex = 0; (r = el.exec(e)); ) {
        r.index > a && n.push(e.slice(a, r.index));
        let o = r[1] ? "tok-c" : r[2] ? "tok-s" : r[3] ? "tok-k" : "tok-n";
        n.push((0, t.jsx)("span", { className: o, children: r[0] }, s++)),
          (a = r.index + r[0].length);
      }
      return a < e.length && n.push(e.slice(a)), n;
    }
    function ec({ children: e, label: n = "Example request" }) {
      return (0, t.jsxs)("div", {
        className: "code-panel",
        children: [
          (0, t.jsxs)("div", {
            className: "code-bar",
            children: [
              (0, t.jsx)("span", { children: n }),
              (0, t.jsx)(ei, { text: e }),
            ],
          }),
          (0, t.jsx)("pre", {
            children: (0, t.jsx)("code", { children: ed(e) }),
          }),
        ],
      });
    }
    function eu({ title: e, children: a, onClose: r }) {
      let s = (0, n.useRef)(null);
      return (
        (0, n.useEffect)(() => {
          let e = s.current;
          return e.showModal(), () => e.close();
        }, []),
        (0, t.jsxs)("dialog", {
          ref: s,
          className: "modal",
          onCancel: r,
          onClick: (e) => {
            e.target === e.currentTarget && r();
          },
          "aria-labelledby": "modal-title",
          children: [
            (0, t.jsxs)("div", {
              className: "modal-head",
              children: [
                (0, t.jsx)("h2", { id: "modal-title", children: e }),
                (0, t.jsx)("button", {
                  "aria-label": "Close dialog",
                  className: "icon-button",
                  onClick: r,
                  children: "×",
                }),
              ],
            }),
            a,
          ],
        })
      );
    }
  },
  58209,
  (e) => {
    e.v({
      actions: "Inbox-module__uhEeEq__actions",
      badge: "Inbox-module__uhEeEq__badge",
      bell: "Inbox-module__uhEeEq__bell",
      dialog: "Inbox-module__uhEeEq__dialog",
      inbox: "Inbox-module__uhEeEq__inbox",
      list: "Inbox-module__uhEeEq__list",
      row: "Inbox-module__uhEeEq__row",
    });
  },
  80523,
  (e) => {
    e.v({
      button: "InstallApp-module__bSpOxq__button",
      instructions: "InstallApp-module__bSpOxq__instructions",
    });
  },
  76804,
  (e) => {
    "use strict";
    var t = e.i(71682);
    function n() {
      window.dispatchEvent(new Event("anyroute:site-search"));
    }
    e.s([
      "default",
      0,
      function ({ homepage: e = !1, onOpen: a, hint: r = !0 }) {
        return (0, t.jsxs)("button", {
          type: "button",
          className: e ? "ar-button task-search" : "site-search-button",
          onClick: () => {
            a?.(), n();
          },
          "aria-haspopup": "dialog",
          "aria-controls": "site-search",
          children: [
            (0, t.jsx)("span", {
              children: e ? "Search everything" : "Search",
            }),
            !e &&
              r &&
              (0, t.jsx)("kbd", { "aria-hidden": "true", children: "⌘K" }),
          ],
        });
      },
      "openSiteSearch",
      0,
      n,
    ]);
  },
  4581,
  (e) => {
    "use strict";
    let t = (e.i(69996).default.env.NEXT_PUBLIC_ANYROUTE_API_URL || "").replace(
        /\/$/,
        ""
      ),
      n = "anyroute-key-v1",
      a = "anyroute-mode",
      r = (e, t) => {
        try {
          return e();
        } catch {
          return t;
        }
      };
    class s extends Error {
      constructor(e, t, n, a) {
        super(t), (this.status = e), (this.type = n), (this.metadata = a);
      }
    }
    async function o(
      e,
      {
        key: n,
        method: a = "GET",
        body: r,
        signal: i,
        headers: l = {},
        onResponse: d,
        raw: c = !1,
      } = {}
    ) {
      let u;
      try {
        u = await fetch(t + e, {
          method: a,
          signal: i,
          headers: {
            ...(void 0 !== r ? { "content-type": "application/json" } : {}),
            ...(n ? { authorization: "Bearer " + n } : {}),
            ...l,
          },
          body: void 0 !== r ? JSON.stringify(r) : void 0,
        });
      } catch (e) {
        if (e?.name === "AbortError") throw e;
        throw new s(
          0,
          "The Anyroute API could not be reached. Check your connection and try again.",
          "unreachable"
        );
      }
      d?.(u);
      let p = await u.text(),
        h = null;
      try {
        h = p ? JSON.parse(p) : null;
      } catch {}
      if (!u.ok) {
        let e = h?.error,
          t = new s(
            u.status,
            e?.message || `Request failed (${u.status}).`,
            e?.type || "error",
            e?.metadata
          );
        throw ((t.retryAfter = u.headers.get("retry-after")), t);
      }
      return c ? p : h;
    }
    async function i({
      key: e,
      body: n,
      headers: a = {},
      signal: r,
      onDelta: o,
      onEvent: l,
    }) {
      let d;
      try {
        d = await fetch(t + "/api/v1/chat/completions", {
          method: "POST",
          signal: r,
          headers: {
            "content-type": "application/json",
            authorization: "Bearer " + e,
            ...a,
          },
          body: JSON.stringify({ ...n, stream: !0 }),
        });
      } catch (e) {
        if (e?.name === "AbortError") throw e;
        throw new s(
          0,
          "The Anyroute API could not be reached. Check your connection and try again.",
          "unreachable"
        );
      }
      if (!d.ok) {
        let e = null;
        try {
          e = await d.json();
        } catch {}
        let t = e?.error,
          n = new s(
            d.status,
            t?.message || `Request failed (${d.status}).`,
            t?.type || "error",
            t?.metadata
          );
        throw (
          ((n.retryAfter = d.headers.get("retry-after")),
          e?.receipt && "object" == typeof e.receipt && (n.receipt = e.receipt),
          e?.usage && "object" == typeof e.usage && (n.usage = e.usage),
          n)
        );
      }
      let c = d.body.getReader(),
        u = new TextDecoder(),
        p = "",
        h = {
          id: d.headers.get("x-generation-id"),
          text: "",
          usage: null,
          receipt: null,
          provider: null,
          model: null,
          error: null,
        };
      for (;;) {
        let e,
          { value: t, done: n } = await c.read();
        if (n) break;
        for (
          p += u.decode(t, { stream: !0 }).replace(/\r\n/g, "\n");
          (e = p.indexOf("\n\n")) >= 0;

        ) {
          let t,
            n = p.slice(0, e);
          p = p.slice(e + 2);
          let a = n
            .split("\n")
            .filter((e) => e.startsWith("data:"))
            .map((e) => e.slice(5).trim())
            .join("");
          if (a && "[DONE]" !== a) {
            try {
              t = JSON.parse(a);
            } catch {
              continue;
            }
            if ((l?.(t), t.error && !t.choices)) {
              h.error = new s(
                t.error.code || 502,
                t.error.message || "The route failed.",
                t.error.type || "error",
                t.error.metadata
              );
              continue;
            }
            for (let e of (t.error &&
              (h.error = new s(
                502,
                t.error.message || "The provider failed mid-stream.",
                t.error.type || "provider_error"
              )),
            (h.id = t.id || h.id),
            (h.provider = t.provider || h.provider),
            (h.model = t.model || h.model),
            t.choices || [])) {
              let t = e?.delta?.content;
              "string" == typeof t && t && ((h.text += t), o?.(h.text));
            }
            t.usage && (h.usage = t.usage),
              t.receipt && (h.receipt = t.receipt);
          }
        }
      }
      if (h.error && !h.receipt) throw h.error;
      return h;
    }
    function l(e, t = []) {
      let n = e.paid_with || null,
        a = n && t.find((e) => e.symbol === n.token),
        r = n?.raw_units ? Number(n.raw_units) / 10 ** (a?.decimals ?? 18) : 0;
      return {
        id: e.id,
        time: e.created_at,
        model: e.model,
        modelId: e.model,
        provider: e.provider_name,
        tokens: (e.tokens_prompt || 0) + (e.tokens_completion || 0),
        input: e.tokens_prompt || 0,
        output: e.tokens_completion || 0,
        inference: e.upstream_inference_cost || 0,
        royalty: e.royalty || 0,
        margin: e.margin || 0,
        cost: e.total_cost || 0,
        latency: e.latency,
        private: !!e.private,
        quant: e.quantization,
        paidWith:
          n?.token || ("per_call" === e.mode ? "USDG · per call" : "USDG"),
        units: r,
        decimals: a?.decimals ?? 18,
        keyId: e.key_hash,
        mode: e.mode,
        status: e.anchored ? "Signed · anchored" : "Signed · anchor pending",
        signature: e.receipt_key_id,
        anchor: e.anchored,
        live: !0,
      };
    }
    async function d(e) {
      let [t, n, a, r] = await Promise.all([
          o("/api/v1/key", { key: e }),
          o("/api/v1/credits", { key: e }),
          o("/api/v1/generations?limit=100", { key: e }),
          o("/api/v1/paywith/tokens").catch(() => ({ data: { tokens: [] } })),
        ]),
        s = [],
        i = "";
      try {
        s = (await o("/api/v1/keys", { key: e })).data;
      } catch (e) {
        (i = e.message), (s = [t.data]);
      }
      let [d, c, u] = await Promise.all([
          o("/api/v1/paywith/session", { key: e }).catch(() => ({
            data: null,
          })),
          o("/api/v1/escrow")
            .then((e) => (e.data?.enabled ? e.data : null))
            .catch(() => null),
          o("/api/v1/escrow/deposits", { key: e })
            .then((e) => e.data)
            .catch(() => null),
        ]),
        p = r.data?.tokens || [];
      return {
        me: t.data,
        credits: n.data,
        keys: s,
        keysError: i,
        receipts: a.data.map((e) => l(e, p)),
        next: a.next,
        tokens: p,
        paywith: r.data || {},
        session: d.data,
        escrow: c,
        stock: u,
      };
    }
    e.s([
      "API_BASE",
      0,
      t,
      "ApiError",
      0,
      s,
      "api",
      0,
      o,
      "clearKey",
      0,
      function () {
        r(() => {
          sessionStorage.removeItem(n), localStorage.removeItem(n);
        });
      },
      "downloadJSON",
      0,
      function (e, t) {
        let n = URL.createObjectURL(
            new Blob([JSON.stringify(e, null, 2)], { type: "application/json" })
          ),
          a = document.createElement("a");
        (a.href = n),
          (a.download = t),
          a.click(),
          setTimeout(() => URL.revokeObjectURL(n), 1e3);
      },
      "loadKey",
      0,
      function () {
        return (
          r(() => localStorage.removeItem(n)),
          r(() => sessionStorage.getItem(n), null) || ""
        );
      },
      "loadWorkspace",
      0,
      d,
      "saveKey",
      0,
      function (e) {
        r(() => {
          sessionStorage.setItem(n, e), localStorage.removeItem(n);
        });
      },
      "setMode",
      0,
      function (e) {
        r(() =>
          "demo" === e
            ? localStorage.setItem(a, "demo")
            : localStorage.removeItem(a)
        );
      },
      "streamChat",
      0,
      i,
      "toCatalogModel",
      0,
      function (e) {
        let t,
          n = e.id.split("/")[0];
        return {
          id: e.id,
          name:
            e.name && e.name !== e.id
              ? e.name
              : e.id.split("/").slice(1).join("/") || e.id,
          author: n.charAt(0).toUpperCase() + n.slice(1),
          context:
            (t = e.context_length || 0) >= 1024
              ? Math.round(t / 1024) + "K"
              : String(t),
          contextLength: e.context_length,
          type: (e.supported_parameters || []).includes("reasoning")
            ? "Reasoning"
            : (e.architecture?.output_modalities || []).includes("embeddings")
            ? "Embeddings"
            : "General",
          private: !!e.attested_available,
          price: 1e6 * Number(e.pricing?.prompt || 0),
          output: 1e6 * Number(e.pricing?.completion || 0),
          description:
            e.description ||
            `${e.data_policy?.providers ?? 0} provider${
              e.data_policy?.providers === 1 ? "" : "s"
            } \xb7 ${
              (e.quantization || []).join(", ") || "quantization not declared"
            }.`,
          providers: e.data_policy?.providers ?? 0,
          quantization: e.quantization || [],
          zdr: !!e.data_policy?.zdr_available,
          creator: e.creator,
          royaltyBps: e.royalty_bps || 0,
          parameters: e.supported_parameters || [],
        };
      },
      "toProvider",
      0,
      function (e) {
        return {
          name: e.name,
          slug: e.slug,
          quant: (e.quantizations || []).join(", ") || "undeclared",
          uptime: e.uptime_30d,
          latency: e.latency_p50_ms,
          bond: Number(e.bond_usdg || 0) / 1e6,
          private: !!e.attestation_fresh,
          tee: e.tee,
          attestation: e.attestation_hash,
          attestedAt: e.attested_at,
          status: e.status,
          models: e.models,
          policy: e.data_policy || {},
          outage: e.outage,
        };
      },
      "toReceiptRow",
      0,
      l,
      "validKey",
      0,
      (e) => /^sk-ar-v1-[0-9a-f]{64}$/.test(String(e).trim()),
    ]);
  },
]);
