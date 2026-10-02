// Static app shell only; generated from exported file hashes.
const shellRoute = function shellRoute(request, origin, assets) {
  const url = new URL(request.url);
  if (
    request.method !== "GET" ||
    url.origin !== origin ||
    url.search ||
    url.username ||
    url.password
  )
    return null;
  if (request.headers.has("authorization") || request.headers.has("range"))
    return null;
  // Keep API navigations network-only too, even if a future build lists one by mistake.
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname).toLowerCase();
  } catch {
    return null;
  }
  if (/^\/(api|trpc|v1)(\/|$)/.test(pathname)) return null;
  return Object.hasOwn(assets, url.pathname) ? url.pathname : null;
};
const createShellWorker = function createShellWorker(
  { assets, cacheName },
  env
) {
  const origin = env.location.origin;
  const prefix = "anyroute-shell-";
  env.addEventListener("install", (event) =>
    event.waitUntil(
      (async () => {
        const cache = await env.caches.open(cacheName);
        try {
          for (const [pathname, expected] of Object.entries(assets)) {
            const request = new Request(new URL(pathname, origin), {
              credentials: "omit",
              cache: "no-store",
            });
            if (!shellRoute(request, origin, assets))
              throw new Error("Invalid shell path");
            const response = await env.fetch(request);
            if (
              response.status !== 200 ||
              response.redirected ||
              response.type === "opaque" ||
              /\b(private|no-store)\b/i.test(
                response.headers.get("cache-control") || ""
              )
            )
              throw new Error("Invalid shell response");
            const bytes = await response.clone().arrayBuffer();
            const digest = await env.crypto.subtle.digest("SHA-256", bytes);
            const actual = [...new Uint8Array(digest)]
              .map((b) => b.toString(16).padStart(2, "0"))
              .join("");
            if (actual !== expected) throw new Error("Shell content changed");
            await cache.put(request, response);
          }
        } catch (error) {
          await env.caches.delete(cacheName);
          throw error;
        }
      })()
    )
  );
  // No skipWaiting: existing tabs keep their matching shell until they close.
  env.addEventListener("activate", (event) =>
    event.waitUntil(
      (async () => {
        for (const name of await env.caches.keys()) {
          if (name.startsWith(prefix) && name !== cacheName)
            await env.caches.delete(name);
        }
        await env.clients.claim();
      })()
    )
  );
  env.addEventListener("fetch", (event) => {
    const pathname = shellRoute(event.request, origin, assets);
    if (!pathname) return; // Browser networking handles every other request, with no offline substitution.
    event.respondWith(
      (async () => {
        const cached = async (path) =>
          (await env.caches.open(cacheName)).match(new URL(path, origin).href);
        if (event.request.mode === "navigate") {
          const shell = await cached(pathname);
          if (shell) return shell;
          try {
            return await env.fetch(event.request);
          } catch {
            return (await cached("/offline.html")) || Response.error();
          }
        }
        return (await cached(pathname)) || env.fetch(event.request);
      })()
    );
  });
};
createShellWorker(
  {
    assets: {
      "/_next/static/chunks/0clhnmmdec255.js":
        "0048dfdd66f516c0e42441c1200cfdb48736cac3910ef4fd356761c71a4482d9",
      "/_next/static/chunks/0cz1d0mv5g_q7.js":
        "0973c1d64c88adc8e3c950410cb58b288f72118d5965b78049438deb8f2f9683",
      "/_next/static/chunks/11ib6e-ih8031.css":
        "372490ac232cd77291b8918ee273fce9964169c39f149fb729f4c79682650978",
      "/_next/static/chunks/134q7cqeraz4s.js":
        "d6f9c74362812459af4e47f839221709d0650cca6b957b609726ce8176b2d86b",
      "/_next/static/chunks/13t6cr06gxr99.js":
        "1220ded15809972d116c20ae0b5070941d16c44c9042c2018d70d1c5f990b367",
      "/_next/static/chunks/1lob5yrbiwhta.js":
        "3031fff96a2fa0ec0ed4f5f3d03e0518ccbcb9cc0c19d8d0b80abc422b1f902b",
      "/_next/static/chunks/1om59xoa9p2h0.js":
        "ba9dfd12c692606f56f29a8908d4822803b6da78860210ee92e0a278da3d0715",
      "/_next/static/chunks/1wh8fs-t8mh63.css":
        "0856b004e385bb22846cc23965b4863d03daa9e41253eb1d376a11eb542bd5c1",
      "/_next/static/chunks/29q8gf-hyhsnf.js":
        "960daf43e163a8b87ea405f1e460dc09ca3e329d0089a4acb15eb89e124d0e9c",
      "/_next/static/chunks/3kurzlarhl-0x.js":
        "f95cf7bdf42dff94372341122ff41f271b1cbfe5f061b610c267768aabd2b671",
      "/_next/static/chunks/3q78nxwpl0bft.js":
        "e6aec719b0c7315e3ff4c8052ade3b2ed152b1ca2b541dba20068eb5282096a9",
      "/_next/static/chunks/43-ikvu1j2cef.css":
        "14896adcac80a39f8964bf23d410dc4e782c490be59328e8cdfb9ce6d550c790",
      "/_next/static/chunks/turbopack-36j1hbf3a04ri.js":
        "40bec90b23f4ac1cb55ef46da2cacbe70231c87951974282ecd92ccb815f3835",
      "/_next/static/media/host-grotesk-latin-ext-wght-normal.1eipnye6ox7_i.woff2":
        "194782c85ee857df4373f6c246e4da9c0ba3cccf85756f6d26e1e78de3479495",
      "/_next/static/media/host-grotesk-latin-wght-normal.15va9ht5r_l-h.woff2":
        "ce9c9db8a488852eb7e4a52f51fd8ce0c93ef61a8d3bfa054b509ec92958dcfe",
      "/_next/static/media/martian-mono-cyrillic-ext-wght-normal.1paonc31u-2hf.woff2":
        "25c291c2abbc28b2b7e7a3c42608239f92b4aa7a2494761e396e5e1f484e1601",
      "/_next/static/media/martian-mono-cyrillic-wght-normal.2s340byv9znl-.woff2":
        "2d30189f145a92ec118dc73194c7d813f218db9ec084444f6c071d419ce6b529",
      "/_next/static/media/martian-mono-latin-ext-wght-normal.2_8oyyktw1nlq.woff2":
        "c26a87eedc388afebc0c6331d99b248196ea64a883322fc519831278ffd169d5",
      "/_next/static/media/martian-mono-latin-wght-normal.3t1ax4g-8tve9.woff2":
        "d0be3a78a854bcea53a9dc26b6620ba322eaa515ccbd92bb4b6ec20a3c91b291",
      "/brand/anyroute-mark.svg":
        "7c6e630ad98fbf17b5276064d055c103e027bf601865541358ee751a273a733e",
      "/brand/anyroute-symbol.png":
        "1a362f97b34bbe89d04f51bf3f5e7cc7035b0ebab9f5be317ab3681caf4e4712",
      "/harness/":
        "c8d3d4822c3892c53badb9c8619537c9989435e2e656cf695801964f5a7aff9b",
      "/manifest.webmanifest":
        "780b59bf6ef4b6ab8cc5a302ea27cd57937dd1bff5fbcd6c4a03f3c4b4ec5902",
      "/offline.html":
        "e1d7a1b6d9b61155fd50207d80340ff9eed72b41a131f2f3aa9c0f64a576bd95",
      "/pwa/apple-touch-icon.png":
        "516a647d0ca392c90e0a2afbe9e6897a4ae637677e08700cf540b9e8376a9256",
      "/pwa/icon-192-maskable.png":
        "95da80277fa259f55147ed204b7d4f87f70897bcd2dbd1fbd701b0cf03e9e241",
      "/pwa/icon-192.png":
        "0c96c1cac5cc1a354c4e3964031d32879140033bdd76dcb35d147659e433514f",
      "/pwa/icon-512-maskable.png":
        "3dc01b2dcc569c15e469d292712b4a4fc06533c37b70f0112901378bdb628578",
      "/pwa/icon-512.png":
        "da7119218b49c85e852e5ca1962ebf1a778d615d2c85c91ad847b7d1bb1ef94b",
      "/pwa/offline.css":
        "06ba391dd30baab35b960d6f4651e4b3376d9ef2b18a59f84049a62099dd042d",
    },
    cacheName: "anyroute-shell-5dea31e8925df8a0f0b761e6",
  },
  self
);
