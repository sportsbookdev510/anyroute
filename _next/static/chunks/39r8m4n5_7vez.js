(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  93896,
  (e) => {
    e.v({
      advanced: "Ask-module__TcxPyW__advanced",
      answer: "Ask-module__TcxPyW__answer",
      bar: "Ask-module__TcxPyW__bar",
      checks: "Ask-module__TcxPyW__checks",
      cite: "Ask-module__TcxPyW__cite",
      cites: "Ask-module__TcxPyW__cites",
      connected: "Ask-module__TcxPyW__connected",
      ctx: "Ask-module__TcxPyW__ctx",
      drop: "Ask-module__TcxPyW__drop",
      facts: "Ask-module__TcxPyW__facts",
      field: "Ask-module__TcxPyW__field",
      file: "Ask-module__TcxPyW__file",
      fileError: "Ask-module__TcxPyW__fileError",
      fileHead: "Ask-module__TcxPyW__fileHead",
      fileInput: "Ask-module__TcxPyW__fileInput",
      fileName: "Ask-module__TcxPyW__fileName",
      files: "Ask-module__TcxPyW__files",
      handling: "Ask-module__TcxPyW__handling",
      help: "Ask-module__TcxPyW__help",
      hint: "Ask-module__TcxPyW__hint",
      id: "Ask-module__TcxPyW__id",
      keyForm: "Ask-module__TcxPyW__keyForm",
      label: "Ask-module__TcxPyW__label",
      laneBox: "Ask-module__TcxPyW__laneBox",
      laneOption: "Ask-module__TcxPyW__laneOption",
      lanes: "Ask-module__TcxPyW__lanes",
      limits: "Ask-module__TcxPyW__limits",
      links: "Ask-module__TcxPyW__links",
      meter: "Ask-module__TcxPyW__meter",
      meterLabel: "Ask-module__TcxPyW__meterLabel",
      meterValue: "Ask-module__TcxPyW__meterValue",
      more: "Ask-module__TcxPyW__more",
      num: "Ask-module__TcxPyW__num",
      preview: "Ask-module__TcxPyW__preview",
      quote: "Ask-module__TcxPyW__quote",
      receipt: "Ask-module__TcxPyW__receipt",
      receiptHead: "Ask-module__TcxPyW__receiptHead",
      receipts: "Ask-module__TcxPyW__receipts",
      refBadge: "Ask-module__TcxPyW__refBadge",
      result: "Ask-module__TcxPyW__result",
      row: "Ask-module__TcxPyW__row",
      send: "Ask-module__TcxPyW__send",
      sendLine: "Ask-module__TcxPyW__sendLine",
      source: "Ask-module__TcxPyW__source",
      sourceHead: "Ask-module__TcxPyW__sourceHead",
      sources: "Ask-module__TcxPyW__sources",
      stack: "Ask-module__TcxPyW__stack",
      state: "Ask-module__TcxPyW__state",
      step: "Ask-module__TcxPyW__step",
      stepName: "Ask-module__TcxPyW__stepName",
      stops: "Ask-module__TcxPyW__stops",
      sub: "Ask-module__TcxPyW__sub",
      "text-button": "Ask-module__TcxPyW__text-button",
    });
  },
  15061,
  (e) => {
    "use strict";
    var t = e.i(71682),
      s = e.i(98248),
      a = e.i(4581);
    class n extends Error {
      constructor(e, t = "") {
        super(t), (this.kind = e);
      }
    }
    let r = Object.freeze({
      empty: "This file is empty.",
      notPdf: "This is not a PDF file: it does not start with %PDF-.",
      encrypted:
        "This PDF is password-protected, and this page does not take passwords. Save a copy without the password and add that.",
      corrupt:
        "This PDF is damaged, or not a valid PDF, so it could not be read.",
      noText: "This PDF has no text layer; scanned pages aren't read.",
      unavailable:
        "The PDF reader could not be loaded in this browser, so this file was not read.",
      unreadable: "This PDF could not be read.",
    });
    function l(e) {
      if (e instanceof n) return e;
      switch (e?.name) {
        case "PasswordException":
          return new n("encrypted", r.encrypted);
        case "InvalidPDFException":
        case "FormatError":
        case "XRefParseException":
        case "MissingPDFException":
          return new n("corrupt", r.corrupt);
        default:
          return new n("unreadable", r.unreadable);
      }
    }
    let i = new TextEncoder();
    async function o(e, t, { maxTextBytes: s }) {
      if (!t.length) throw new n("empty", r.empty);
      if (
        !(function (e) {
          let t = Math.min(e.length, 1024) - 4;
          for (let s = 0; s < t; s++)
            if (
              37 === e[s] &&
              80 === e[s + 1] &&
              68 === e[s + 2] &&
              70 === e[s + 3] &&
              45 === e[s + 4]
            )
              return !0;
          return !1;
        })(t)
      )
        throw new n("notPdf", r.notPdf);
      let a = e.getDocument({
        data: t.slice(),
        isEvalSupported: !1,
        disableFontFace: !0,
        useSystemFonts: !1,
        useWasm: !1,
        useWorkerFetch: !1,
        enableXfa: !1,
        disableRange: !0,
        disableStream: !0,
        disableAutoFetch: !0,
        verbosity: 0,
      });
      try {
        let e;
        try {
          e = await a.promise;
        } catch (e) {
          throw l(e);
        }
        let t = [],
          o = 0,
          d = 0,
          c = 0;
        for (let a = 1; a <= e.numPages; a++) {
          let r;
          try {
            let t = await e.getPage(a);
            try {
              r = (function (e) {
                let t = "";
                for (let s of e?.items ?? [])
                  "string" == typeof s?.str &&
                    ((t += s.str), s.hasEOL && (t += "\n"));
                return t;
              })(await t.getTextContent());
            } finally {
              t.cleanup();
            }
          } catch (e) {
            if (e?.name === "PasswordException" || e?.name === "AbortException")
              throw l(e);
            d++;
            continue;
          }
          if (!/\S/.test(r)) {
            o++;
            continue;
          }
          if ((c += i.encode(r).length) > s) throw new n("text-limit");
          t.push({ number: a, text: r });
        }
        if (!t.length) {
          let t = d === e.numPages;
          throw new n(t ? "corrupt" : "noText", t ? r.corrupt : r.noText);
        }
        return { pages: t, pageCount: e.numPages, blank: o, unreadable: d };
      } finally {
        await a.destroy().catch(() => void 0);
      }
    }
    function d(e, t) {
      let s,
        a = /(^|\n)\[page (\d{1,6})\]\n/g,
        n = null;
      for (; (s = a.exec(e)) && !(s.index + s[1].length > t); )
        n = Number(s[2]);
      return n;
    }
    let c = Object.freeze({
        documents: 200,
        bytes: 2097152,
        chunks: 2e3,
        embeddingCalls: 64,
      }),
      u = Object.freeze({ min: 1, max: 20, default: 4 }),
      h = Object.freeze({ min: 100, max: 8e3, default: 1e3 }),
      m = (e) => Math.round(0.15 * e),
      f = Object.freeze({
        txt: "text",
        text: "text",
        md: "markdown",
        markdown: "markdown",
        csv: "csv",
        tsv: "csv",
        json: "json",
        html: "html",
        htm: "html",
        docx: "docx",
        pdf: "pdf",
      }),
      p = Object.freeze([
        ".txt",
        ".md",
        ".csv",
        ".json",
        ".html",
        ".docx",
        ".pdf",
      ]),
      x = (e) => {
        let t = /\.([A-Za-z0-9]{1,12})$/.exec(String(e).trim());
        return t ? t[1].toLowerCase() : "";
      },
      g = (e) => f[x(e)] ?? null;
    class b extends Error {}
    let y = new TextEncoder(),
      k = /[\u0000-\u0008\u000b-\u001f\u007f]/g;
    function w(e) {
      return String(e)
        .replace(/\r\n?/g, "\n")
        .replace(k, (e) => ("	" === e || "\n" === e ? e : " "))
        .replace(/[ \t]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }
    let j = Object.freeze({
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"',
      apos: "'",
      nbsp: " ",
      ndash: "–",
      mdash: "—",
      hellip: "…",
      lsquo: "‘",
      rsquo: "’",
      ldquo: "“",
      rdquo: "”",
      bull: "•",
      middot: "·",
      copy: "©",
      reg: "®",
      trade: "™",
      deg: "°",
      euro: "€",
      pound: "£",
      yen: "¥",
      cent: "¢",
      times: "×",
      divide: "÷",
      laquo: "«",
      raquo: "»",
      sect: "§",
      para: "¶",
      plusmn: "±",
      frac12: "½",
      larr: "←",
      rarr: "→",
    });
    function _(e) {
      return e.replace(
        /&(?:#(\d{1,7})|#[xX]([0-9a-fA-F]{1,6})|([A-Za-z][A-Za-z0-9]{1,10}));/g,
        (e, t, s, a) => {
          if (void 0 !== a) return Object.hasOwn(j, a) ? j[a] : e;
          let n =
            void 0 !== t ? Number.parseInt(t, 10) : Number.parseInt(s, 16);
          return !(n > 0) || n > 1114111 || (n >= 55296 && n <= 57343)
            ? "�"
            : String.fromCodePoint(n);
        }
      );
    }
    let v = "(?:\"[^\"]*\"|'[^']*'|[^>\"'])*",
      N = (e, t = "gi") => RegExp(`</?(?:${e})\\b${v}>`, t);
    function T(e) {
      return e
        .split("\n")
        .map((e) =>
          e.includes("\x01")
            ? e
                .split("\x01")
                .map((e) => e.trim())
                .filter(Boolean)
                .join(" | ")
            : e
        )
        .join("\n");
    }
    let A = (e, t) => e.getUint16(t, !0),
      P = (e, t) => e.getUint32(t, !0),
      S = () =>
        new b("This Word file is damaged, so its text could not be read.");
    async function $(e, t) {
      if ("u" < typeof DecompressionStream)
        throw new b(
          "This browser cannot unpack .docx files. Save the document as .txt or .html and add that."
        );
      let s = new DecompressionStream("deflate-raw"),
        a = s.writable.getWriter();
      a.write(e)
        .then(() => a.close())
        .catch(() => void 0);
      let n = s.readable.getReader(),
        r = [],
        l = 0;
      try {
        for (;;) {
          let { done: e, value: s } = await n.read();
          if (e) break;
          if ((l += s.length) > t)
            throw (
              (await n.cancel().catch(() => void 0),
              new b(
                "This Word file unpacks to far more text than a request can carry."
              ))
            );
          r.push(s);
        }
      } catch (e) {
        if (e instanceof b) throw e;
        throw S();
      }
      let i = new Uint8Array(l),
        o = 0;
      for (let e of r) i.set(e, o), (o += e.length);
      return i;
    }
    async function C(e, t, s = 0x2800000) {
      let a = e instanceof Uint8Array ? e : new Uint8Array(e),
        n = new DataView(a.buffer, a.byteOffset, a.byteLength),
        r = -1;
      for (let e = a.length - 22; e >= 0 && e >= a.length - 22 - 65535; e--)
        if (0x6054b50 === P(n, e)) {
          r = e;
          break;
        }
      if (r < 0)
        throw new b(
          "This is not a Word (.docx) file: it is not a zip archive."
        );
      let l = A(n, r + 10),
        i = P(n, r + 12),
        o = P(n, r + 16);
      if (65535 === l || 0xffffffff === i || 0xffffffff === o)
        throw new b(
          "This zip archive uses a format (ZIP64) that this page does not read."
        );
      if (o + i > a.length) throw S();
      let d = new TextDecoder(),
        c = o;
      for (let e = 0; e < l; e++) {
        if (c + 46 > a.length || 0x2014b50 !== P(n, c)) throw S();
        let e = A(n, c + 8),
          r = A(n, c + 10),
          l = P(n, c + 20),
          i = P(n, c + 24),
          o = A(n, c + 28),
          u = A(n, c + 30),
          h = A(n, c + 32),
          m = P(n, c + 42);
        if (c + 46 + o > a.length) throw S();
        let f = d.decode(a.subarray(c + 46, c + 46 + o));
        if (((c += 46 + o + u + h), f !== t)) continue;
        if (1 & e)
          throw new b(
            "This Word file is password-protected, so it cannot be read."
          );
        if (i > s)
          throw new b(
            "This Word file unpacks to far more text than a request can carry."
          );
        if (m + 30 > a.length || 0x4034b50 !== P(n, m)) throw S();
        let p = m + 30 + A(n, m + 26) + A(n, m + 28);
        if (p + l > a.length) throw S();
        let x = a.subarray(p, p + l);
        if (0 === r) {
          if (x.length !== i) throw S();
          return x;
        }
        if (8 !== r)
          throw new b(
            "This Word file uses a compression method this page does not read."
          );
        let g = await $(x, Math.min(s, i));
        if (g.length !== i) throw S();
        return g;
      }
      return null;
    }
    async function W(e) {
      let t = await C(e, "word/document.xml");
      if (!t)
        throw new b(
          "This is not a Word (.docx) document: it has no body text part."
        );
      return (function (e) {
        let t = "",
          s = !1,
          a = "",
          n = 0,
          r = 0,
          l = e.length,
          i = 0;
        for (; i < l; ) {
          let o = e.indexOf("<", i);
          if (o < 0) break;
          if (
            (s && 0 === n && o > i && (a += e.slice(i, o)),
            e.startsWith("<!--", o))
          ) {
            let t = e.indexOf("-->", o + 4);
            i = t < 0 ? l : t + 3;
            continue;
          }
          let d = o + 1,
            c = "";
          for (; d < l; d++) {
            let t = e[d];
            if (c) t === c && (c = "");
            else if ('"' === t || "'" === t) c = t;
            else if (">" === t) break;
          }
          let u = e.slice(o + 1, d);
          i = d + 1;
          let h = u.startsWith("/"),
            m = u.endsWith("/"),
            f = /^\/?([A-Za-z][\w.:-]*)/.exec(u)?.[1];
          if (f) {
            if ("mc:Fallback" === f) {
              h ? (n = Math.max(0, n - 1)) : !m && n++;
              continue;
            }
            if (!n)
              switch (f) {
                case "w:t":
                  h
                    ? ((t += _(a)), (a = ""), (s = !1))
                    : m || ((s = !0), (a = ""));
                  break;
                case "w:tab":
                  h || (t += "	");
                  break;
                case "w:br":
                case "w:cr":
                  h || (t += "\n");
                  break;
                case "w:noBreakHyphen":
                  h || (t += "-");
                  break;
                case "w:p":
                  h && (t += r ? " " : "\n");
                  break;
                case "w:tbl":
                  h ? ((r = Math.max(0, r - 1)), (t += "\n")) : !m && r++;
                  break;
                case "w:tc":
                  h && (t += "\x01");
                  break;
                case "w:tr":
                  h && (t += "\n");
              }
          }
        }
        return T(t.replace(/\t/g, " ").replace(/[ ]+\n/g, "\n"));
      })(new TextDecoder().decode(t));
    }
    let F = (e) =>
      `This file is ${I(e)}. A request can carry at most ${I(
        c.bytes
      )} of text in all.`;
    async function R(e, t) {
      let s;
      if (e.length > 0x1400000) throw new b(F(e.length));
      try {
        if ("function" != typeof t) throw Error("no reader");
        s = await t();
      } catch {
        throw new b(r.unavailable);
      }
      try {
        let t = await o(s, e, { maxTextBytes: c.bytes }),
          a = [];
        return (
          t.blank &&
            a.push(
              `${t.blank} of ${t.pageCount} pages have no text and were skipped; scanned pages aren't read.`
            ),
          t.unreadable &&
            a.push(
              `${t.unreadable} of ${t.pageCount} pages could not be read.`
            ),
          {
            text: t.pages
              .map((e) => {
                let t;
                return `${((t = e.number), `[page ${t}]`)}
${e.text}`;
              })
              .join("\n\n"),
            pages: t.pageCount,
            note: a.join(" "),
          }
        );
      } catch (e) {
        if (e instanceof n) {
          if ("text-limit" === e.kind)
            throw new b(
              `This file has more than ${I(
                c.bytes
              )} of text, and one request may carry at most ${I(
                c.bytes
              )} in all.`
            );
          throw new b(e.message);
        }
        throw e;
      }
    }
    async function E(e, t, s = {}) {
      let a = g(e);
      if (!a) {
        let t = x(e);
        return "doc" === t
          ? {
              ok: !1,
              error:
                "Old .doc files are not supported. Save it as .docx and add that.",
            }
          : {
              ok: !1,
              error: `${
                t ? "." + t : "This"
              } is not a supported format. Supported: ${p.join(", ")}.`,
            };
      }
      try {
        let e,
          n,
          r = {};
        if ("pdf" === a) {
          let e = await R(t, s.loadPdfjs);
          (n = e.text),
            (r = { pages: e.pages, ...(e.note ? { note: e.note } : {}) });
        } else if ("docx" === a) n = await W(t);
        else {
          let e,
            s,
            r,
            l = (function (e) {
              let t,
                s = e instanceof Uint8Array ? e : new Uint8Array(e),
                a = "utf-8";
              s.length >= 2 && 255 === s[0] && 254 === s[1]
                ? (a = "utf-16le")
                : s.length >= 2 &&
                  254 === s[0] &&
                  255 === s[1] &&
                  (a = "utf-16be");
              try {
                t = new TextDecoder(a, { fatal: !0 }).decode(s);
              } catch {
                throw new b(
                  "This is not UTF-8 text. Save it as UTF-8 and add it again."
                );
              }
              if (
                (65279 === t.charCodeAt(0) && (t = t.slice(1)),
                t.includes("\0"))
              )
                throw new b("This looks like a binary file, not text.");
              return t;
            })(t);
          n =
            "csv" === a
              ? (function (e) {
                  let t = (function (e, t = ",") {
                    let s = [],
                      a = [],
                      n = "",
                      r = !1;
                    for (let l = 0; l < e.length; l++) {
                      let i = e[l];
                      r
                        ? '"' === i
                          ? '"' === e[l + 1]
                            ? ((n += '"'), l++)
                            : (r = !1)
                          : (n += i)
                        : '"' === i && "" === n
                        ? (r = !0)
                        : i === t
                        ? (a.push(n), (n = ""))
                        : "\n" === i
                        ? (a.push(n), s.push(a), (a = []), (n = ""))
                        : (n += i);
                    }
                    return (
                      ("" !== n || a.length) && (a.push(n), s.push(a)),
                      s.filter((e) => e.some((e) => "" !== e.trim()))
                    );
                  })(
                    e,
                    (function (e) {
                      let t = e.split("\n", 1)[0] ?? "",
                        s = ",",
                        a = 0;
                      for (let e of [",", ";", "	"]) {
                        let n = 0,
                          r = !1;
                        for (let s of t)
                          '"' === s ? (r = !r) : !r && s === e && n++;
                        n > a && ((s = e), (a = n));
                      }
                      return s;
                    })(e)
                  );
                  if (!t.length) return "";
                  let s = (e) => e.trim().replace(/\s*\n\s*/g, " / ");
                  if (1 === t.length)
                    return t[0].map(s).filter(Boolean).join(", ");
                  let a = new Set(),
                    n = t[0].map((e, t) => {
                      let n = s(e),
                        r = n.toLowerCase();
                      return !n || a.has(r) ? `column ${t + 1}` : (a.add(r), n);
                    });
                  return t
                    .slice(1)
                    .map((e) =>
                      e
                        .map((e, t) => [n[t] ?? `column ${t + 1}`, s(e)])
                        .filter(([, e]) => e)
                        .map(([e, t]) => `${e}: ${t}`)
                        .join("; ")
                    )
                    .filter(Boolean)
                    .join("\n");
                })(l.replace(/\r\n?/g, "\n"))
              : "json" === a
              ? (function (e) {
                  let t;
                  try {
                    t = JSON.parse(e);
                  } catch {
                    throw new b(
                      "This is not valid JSON. If it is plain text, rename it to .txt."
                    );
                  }
                  return JSON.stringify(t, null, 2) ?? "";
                })(l)
              : "html" === a
              ? ((e = w(l)),
                (s = /<title\b[^>]*>([\s\S]*?)<\/title\s*>/i.exec(e)?.[1]),
                (e = T(
                  (e = (e = (e = _(
                    (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(
                      /<!--[\s\S]*?(?:-->|$)/g,
                      " "
                    )).replace(/<[!?][^>]*>/g, " ")).replace(
                      /<head\b[\s\S]*?<\/head\s*>/gi,
                      " "
                    )).replace(
                      /<(script|style|noscript|template|svg|iframe|object|canvas|select|math)\b[\s\S]*?(?:<\/\1\s*>|$)/gi,
                      " "
                    )).replace(
                      /(<pre\b[^>]*>)([\s\S]*?)(<\/pre\s*>)/gi,
                      (e, t, s, a) => t + s.replace(/\n/g, "\x02") + a
                    )).replace(RegExp(`<br\\b${v}>`, "gi"), "\x02")).replace(
                      N(
                        "p|div|section|article|header|footer|main|nav|aside|h[1-6]|ul|ol|table|thead|tbody|tfoot|blockquote|pre|figure|figcaption|form|fieldset|details|summary|address|hr|dl"
                      ),
                      "\x03"
                    )).replace(
                      N("li|tr|dt|dd|caption|option"),
                      "\x02"
                    )).replace(/<\/(?:td|th)\s*>/gi, "\x01")).replace(
                      RegExp(`</?[a-zA-Z]${v}>`, "g"),
                      ""
                    ))
                  ).replace(/[\u00a0\u3000]/g, " ")).replace(
                    /[ \t\r\n\f\v]+/g,
                    " "
                  )).replace(/ ?([\u0002\u0003]+) ?/g, (e, t) =>
                    t.includes("\x03") ? "\n\n" : "\n"
                  ))
                )
                  .split("\n")
                  .map((e) => e.trim())
                  .join("\n")),
                (r = s
                  ? w(
                      _(s.replace(RegExp(`</?[a-zA-Z]${v}>`, "g"), "")).replace(
                        /\s+/g,
                        " "
                      )
                    )
                  : ""),
                w(
                  r
                    ? `${r}

${e}`
                    : e
                ))
              : l;
        }
        if (!(n = w(n))) throw new b("No text was found in this file.");
        let l = ((e = n), y.encode(e).length);
        if (l > c.bytes)
          throw new b(
            `This file has ${I(
              l
            )} of text, and one request may carry at most ${I(c.bytes)} in all.`
          );
        return { ok: !0, kind: a, text: n, bytes: l, ...r };
      } catch (e) {
        if (e instanceof b) return { ok: !1, error: e.message };
        return { ok: !1, error: "This file could not be read." };
      }
    }
    function I(e) {
      return e < 1024
        ? `${e} B`
        : e < 1048576
        ? `${(e / 1024).toFixed(+(e < 10240))} KiB`
        : `${(e / 1024 / 1024).toFixed(e < 0xa00000 ? 2 : 1)} MiB`;
    }
    let q = (e) =>
        " " === e ||
        "\n" === e ||
        "	" === e ||
        "\r" === e ||
        "\f" === e ||
        "\v" === e ||
        " " === e ||
        "　" === e,
      O = (e) => e >= 55296 && e <= 56319,
      M = (e) => e >= 56320 && e <= 57343;
    function z(e, t, s) {
      if (
        !(Number.isInteger(t) && t >= 1) ||
        !(Number.isInteger(s) && s >= 0 && s < t)
      )
        throw RangeError("chunk size must be >= 1 and overlap in [0, size)");
      let a = [],
        n = e.length,
        r = 0;
      for (; r < n; ) {
        for (; r < n && q(e[r]); ) r++;
        if (r >= n) break;
        let l = Math.min(r + t, n);
        if (l < n) {
          let s = (function (e, t, s) {
            let a = e.slice(t, s),
              n = a.lastIndexOf("\n\n");
            if (n >= 0) return t + n + 2;
            let r = a.lastIndexOf("\n");
            if (r >= 0) return t + r + 1;
            let l = -1;
            for (let e = a.length - 2; e >= 0; e--) {
              let t = a[e];
              if (
                ("." === t ||
                  "!" === t ||
                  "?" === t ||
                  "。" === t ||
                  "！" === t ||
                  "？" === t) &&
                q(a[e + 1])
              ) {
                l = e + 1;
                break;
              }
            }
            if (l >= 0) return t + l;
            for (let e = a.length - 1; e >= 0; e--)
              if (q(a[e])) return t + e + 1;
            return -1;
          })(e, r + Math.floor(0.6 * t), l);
          s > r && (l = s), l < n && O(e.charCodeAt(l - 1)) && l - 1 > r && l--;
        }
        let i = l;
        for (; i > r && q(e[i - 1]); ) i--;
        if (
          (i > r && a.push({ start: r, end: i, text: e.slice(r, i) }), l >= n)
        )
          break;
        let o = l - s;
        if (o <= r) o = l;
        else if (o < l) {
          if (!q(e[o - 1])) {
            let t = o;
            for (; t < l && !q(e[t]); ) t++;
            if (t < l) {
              for (; t < l && q(e[t]); ) t++;
              o = t;
            }
          }
          o < l && M(e.charCodeAt(o)) && o++;
        }
        r = o;
      }
      return a;
    }
    let D = Object.freeze(["attested", "public", "auto"]),
      U = (e) => {
        let t;
        return (
          Number(e?.disclosure?.endpoints?.attested ?? 0) ||
          +((t = e?.lanes), !!(Array.isArray(t) && t.includes("attested")))
        );
      },
      L = (e, t) =>
        "attested" === t ? e.chat.filter((e) => e.attested) : e.chat,
      B = (e) =>
        "string" == typeof e && /^[A-Za-z0-9][A-Za-z0-9_.:-]{0,127}$/.test(e),
      H = (e, t = 200) => ("string" == typeof e ? e.slice(0, t) : null),
      Z = (e) => ("number" == typeof e && Number.isFinite(e) ? e : null);
    function K(e) {
      return Array.isArray(e)
        ? e
            .filter((e) => e && "object" == typeof e)
            .map((e) => {
              let t =
                e.upstream_attestation &&
                "object" == typeof e.upstream_attestation
                  ? e.upstream_attestation
                  : null;
              return {
                step:
                  "embeddings" === e.step || "chat" === e.step ? e.step : null,
                id: B(e.receipt_id) ? e.receipt_id : null,
                model: H(e.model),
                provider: H(e.provider),
                lane: H(e.lane, 40),
                disclosure: H(e.disclosure, 40),
                cost: Z(e.cost),
                promptTokens: Z(e.tokens?.prompt),
                completionTokens: Z(e.tokens?.completion),
                inputs: Z(e.inputs),
                withheld: !0 === e.withheld,
                developmentAttestation: !0 === e.attestation_simulated,
                attestation: t
                  ? {
                      attested: !0 === t.attested,
                      gpu: !0 === t.gpu_attested,
                      verified: !0 === t.receipt_verified,
                      kind: H(t.kind, 40),
                      reason: H(t.reason, 300),
                    }
                  : null,
              };
            })
        : [];
    }
    function V(e, t, s) {
      let a = Math.max(0, t),
        n = Math.min(e.length, s);
      return (
        a > 0 && M(e.charCodeAt(a)) && a++,
        n < e.length && n > a && O(e.charCodeAt(n - 1)) && n--,
        e.slice(a, n)
      );
    }
    let J = {
      no_attested_endpoint:
        "Nothing was sent to a provider on a weaker lane. Try again later, or choose the public lane.",
      upstream_not_attested:
        "The provider's answer was withheld because its attestation could not be confirmed. The call was billed, and its receipt is listed.",
      disclosure_unavailable: "No provider meets the lane you chose right now.",
      context_too_small:
        "Use fewer or smaller passages, or a model with a longer context.",
      payload_too_large:
        "Remove some files, or use larger passages so there are fewer chunks.",
    };
    function Y(e) {
      let t = e?.metadata && "object" == typeof e.metadata ? e.metadata : {},
        s = "string" == typeof e?.type ? e.type : "error";
      return {
        status: Number.isInteger(e?.status) ? e.status : 0,
        type: s,
        message:
          "string" == typeof e?.message && e.message
            ? e.message
            : "The request failed.",
        step: "embeddings" === t.step || "chat" === t.step ? t.step : null,
        limit: Number.isInteger(t.limit) ? t.limit : null,
        receipts: K(t.receipts),
        hint: J[s] ?? null,
        retryAfter: "string" == typeof e?.retryAfter ? e.retryAfter : null,
      };
    }
    let G = Object.freeze([
        ["prompt_readers", "Who can read the prompt"],
        ["network", "Network"],
        ["payment", "Payment"],
        ["stored", "Stored"],
        ["hardware", "Hardware"],
      ]),
      X = (e, t) => {
        if ("string" == typeof e) return e.trim().slice(0, t) || null;
        if ("number" == typeof e || "boolean" == typeof e) return String(e);
        if (e && "object" == typeof e) {
          for (let s of ["summary", "text", "value", "label"])
            if ("string" == typeof e[s] && e[s].trim())
              return e[s].trim().slice(0, t);
        }
        return null;
      };
    async function Q() {
      let t = await e.A(44614);
      return (t.GlobalWorkerOptions.workerSrc = new e.U(e.r(72885)).href), t;
    }
    var ee = e.i(92882),
      et = e.i(93896);
    let es = {
        attested: [
          "Attested",
          "The chat and embedding models run only at providers whose hardware attestation the router has verified and holds fresh. If a step cannot be served on it, the request is refused rather than sent on a weaker lane. Calls made before a refusal are billed and listed.",
        ],
        public: [
          "Public",
          "The router's ordinary lane. A provider's documented policy applies to your text.",
        ],
        auto: [
          "Router's choice",
          "The attested lane when the chat model and the embedding model both have an attested endpoint right now, otherwise the public lane. The answer says which lane it used and why.",
        ],
      },
      ea = { embeddings: "Embeddings", chat: "Answer" },
      en = {
        text: "text",
        markdown: "markdown",
        csv: "csv",
        json: "json",
        html: "html",
        docx: "word",
        pdf: "pdf",
      },
      er = (e) => (e ? "yes" : "no"),
      el = ({ state: e, children: s }) =>
        (0, t.jsx)("span", {
          className: et.default.state,
          "data-state": e,
          children: s,
        }),
      ei = 0;
    function eo({ auth: e, onConnect: n, onForget: r }) {
      let [l, i] = (0, s.useState)(""),
        [o, d] = (0, s.useState)(!1),
        [c, u] = (0, s.useState)("");
      async function h(e) {
        e.preventDefault(), u("");
        let t = l.trim();
        if (!(0, a.validKey)(t))
          return u(
            "That is not an Anyroute key (sk-ar-v1- followed by 64 hex characters)."
          );
        d(!0);
        try {
          let e = await (0, a.api)("/api/v1/credits", { key: t });
          i(""), n(t, e?.data?.available ?? null);
        } catch (e) {
          u(
            e instanceof a.ApiError && (401 === e.status || 403 === e.status)
              ? "The router did not accept that key."
              : e?.message || "The key could not be checked."
          );
        } finally {
          d(!1);
        }
      }
      return (0, t.jsxs)("section", {
        className: et.default.step,
        "aria-labelledby": "ask-key",
        children: [
          (0, t.jsxs)("h2", {
            id: "ask-key",
            children: [
              (0, t.jsx)("span", { className: et.default.num, children: "1" }),
              "Your API key",
            ],
          }),
          e.key
            ? (0, t.jsxs)("div", {
                className: et.default.connected,
                children: [
                  (0, t.jsx)(el, { state: "yes", children: "Connected" }),
                  (0, t.jsxs)("span", {
                    className: "mono",
                    children: [e.key.slice(0, 9), "…", e.key.slice(-4)],
                  }),
                  Number.isFinite(Number(e.balance)) &&
                    null !== e.balance &&
                    (0, t.jsxs)("span", {
                      className: et.default.sub,
                      children: [
                        "$",
                        Number(e.balance).toFixed(2),
                        " available",
                      ],
                    }),
                  (0, t.jsx)("button", {
                    type: "button",
                    className: "text-button",
                    onClick: r,
                    children: "Forget key",
                  }),
                ],
              })
            : (0, t.jsxs)("form", {
                onSubmit: h,
                className: et.default.keyForm,
                children: [
                  (0, t.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "ask-key-input",
                        children: "API key",
                      }),
                      (0, t.jsx)("input", {
                        id: "ask-key-input",
                        type: "password",
                        autoComplete: "off",
                        spellCheck: "false",
                        value: l,
                        onChange: (e) => i(e.target.value),
                        placeholder: "sk-ar-v1-…",
                      }),
                    ],
                  }),
                  (0, t.jsx)(ee.Button, {
                    type: "submit",
                    disabled: o || !l.trim(),
                    children: o ? "Checking…" : "Connect key",
                  }),
                ],
              }),
          c &&
            (0, t.jsx)("div", {
              className: "error",
              role: "alert",
              children: c,
            }),
          (0, t.jsxs)("p", {
            className: et.default.help,
            children: [
              "This needs a prepaid Anyroute API key; per-call payment and blind tokens are not accepted here. The key is kept in this tab's memory only: it is not written to browser storage and is gone when you reload or leave.",
              " ",
              !e.key &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    "No key yet? ",
                    (0, t.jsx)("a", {
                      className: "inline-link",
                      href: "/dashboard/",
                      children: "Create one in the dashboard",
                    }),
                    ".",
                  ],
                }),
            ],
          }),
        ],
      });
    }
    function ed({ row: e }) {
      let s = e.bytes
        ? `${I(e.used)} of ${I(e.limit)}`
        : `${e.used.toLocaleString("en-US")}${
            e.floor ? " or more" : ""
          } of ${e.limit.toLocaleString("en-US")}`;
      return (0, t.jsxs)("li", {
        className: et.default.meter,
        "data-over": e.over,
        children: [
          (0, t.jsx)("span", {
            className: et.default.meterLabel,
            children: e.label,
          }),
          (0, t.jsx)("span", { className: et.default.meterValue, children: s }),
          (0, t.jsx)("span", {
            className: et.default.bar,
            "aria-hidden": "true",
            children: (0, t.jsx)("i", {
              style: { width: `${Math.max(2 * !!e.used, 100 * e.share)}%` },
            }),
          }),
          (0, t.jsx)(el, {
            state: e.over ? "bad" : "yes",
            children: e.over ? "Over the limit" : "Within the limit",
          }),
        ],
      });
    }
    function ec({ file: e, chunks: s, onRemove: a }) {
      let n =
          "ready" === e.status
            ? "yes"
            : "reading" === e.status
            ? "unknown"
            : "bad",
        r =
          "ready" === e.status
            ? "Ready"
            : "reading" === e.status
            ? "Reading"
            : "Not used";
      return (0, t.jsxs)("li", {
        className: et.default.file,
        children: [
          (0, t.jsxs)("div", {
            className: et.default.fileHead,
            children: [
              (0, t.jsx)("span", {
                className: et.default.fileName,
                children: e.name,
              }),
              (0, t.jsx)(el, { state: n, children: r }),
              (0, t.jsx)("button", {
                type: "button",
                className: "text-button",
                onClick: () => a(e.id),
                "aria-label": `Remove ${e.name}`,
                children: "Remove",
              }),
            ],
          }),
          "ready" === e.status &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("p", {
                  className: et.default.sub,
                  children: [
                    en[e.kind],
                    e.pages
                      ? ` \xb7 ${e.pages} page${1 === e.pages ? "" : "s"}`
                      : "",
                    " · ",
                    I(e.bytes),
                    " of text · ",
                    s ?? 0,
                    " chunk",
                    1 === s ? "" : "s",
                  ],
                }),
                e.note &&
                  (0, t.jsx)("p", {
                    className: et.default.sub,
                    children: e.note,
                  }),
                (0, t.jsxs)("details", {
                  className: et.default.more,
                  children: [
                    (0, t.jsx)("summary", {
                      children: "Preview the text that will be sent",
                    }),
                    (0, t.jsxs)("pre", {
                      className: et.default.preview,
                      children: [
                        e.text.slice(0, 1500),
                        e.text.length > 1500 ? "\n…" : "",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          "error" === e.status &&
            (0, t.jsx)("p", {
              className: et.default.fileError,
              children: e.error,
            }),
        ],
      });
    }
    function eu({ refs: e, onPick: s, active: a }) {
      return (0, t.jsx)("span", {
        className: et.default.cites,
        children: e.map((e) =>
          (0, t.jsx)(
            "button",
            {
              type: "button",
              className: et.default.cite,
              "data-active": a === e,
              onClick: () => s(e),
              "aria-label": `Show source ${e}`,
              "aria-controls": `ask-source-${e}`,
              children: e,
            },
            e
          )
        ),
      });
    }
    function eh({
      source: e,
      cited: s,
      active: a,
      open: n,
      onToggle: r,
      cardRef: l,
    }) {
      let i = e.excerpt,
        o = a || n;
      return (0, t.jsxs)("li", {
        id: `ask-source-${e.ref}`,
        ref: l,
        tabIndex: -1,
        className: et.default.source,
        "data-active": a,
        children: [
          (0, t.jsxs)("div", {
            className: et.default.sourceHead,
            children: [
              (0, t.jsx)("span", {
                className: et.default.refBadge,
                children: e.ref,
              }),
              (0, t.jsx)("span", {
                className: et.default.fileName,
                children: e.name,
              }),
              null !== e.part &&
                (0, t.jsxs)("span", {
                  className: et.default.sub,
                  children: ["passage ", e.part],
                }),
              e.pages &&
                (0, t.jsx)("span", {
                  className: et.default.sub,
                  children:
                    e.pages.first === e.pages.last
                      ? `page ${e.pages.first}`
                      : `pages ${e.pages.first} to ${e.pages.last}`,
                }),
              null !== e.score &&
                (0, t.jsxs)("span", {
                  className: et.default.sub,
                  children: ["match ", e.score.toFixed(3)],
                }),
              (0, t.jsx)(el, {
                state: s ? "yes" : "unknown",
                children: s ? "Cited in the answer" : "Not cited",
              }),
            ],
          }),
          i
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("blockquote", {
                    className: et.default.quote,
                    "data-open": o,
                    children: o
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            i.moreBefore && "… ",
                            (0, t.jsx)("span", {
                              className: et.default.ctx,
                              children: i.before,
                            }),
                            (0, t.jsx)("mark", { children: i.hit }),
                            (0, t.jsx)("span", {
                              className: et.default.ctx,
                              children: i.after,
                            }),
                            i.moreAfter && " …",
                          ],
                        })
                      : (0, t.jsxs)("mark", {
                          children: [
                            i.hit.slice(0, 280),
                            i.hit.length > 280 ? "…" : "",
                          ],
                        }),
                  }),
                  !a &&
                    (0, t.jsx)("button", {
                      type: "button",
                      className: "text-button",
                      onClick: r,
                      "aria-expanded": n,
                      children: n
                        ? "Show less"
                        : "Show the whole passage in context",
                    }),
                ],
              })
            : (0, t.jsx)("p", {
                className: et.default.sub,
                children:
                  "This passage could not be placed in the text that was sent.",
              }),
        ],
      });
    }
    function em({ state: e }) {
      if (!e || "hidden" === e.state) return null;
      if ("loading" === e.state)
        return (0, t.jsx)("p", {
          className: et.default.sub,
          children: "Reading the label…",
        });
      if ("absent" === e.state)
        return (0, t.jsx)("p", {
          className: et.default.sub,
          children:
            "This router does not publish a privacy label for this receipt. The signed receipt is still the record.",
        });
      if ("error" === e.state)
        return (0, t.jsx)("p", {
          className: et.default.sub,
          children: "The label could not be loaded. Try again.",
        });
      let a = e.label;
      return (0, t.jsxs)("div", {
        className: et.default.label,
        children: [
          (0, t.jsx)("dl", {
            children: a.rows.map((e) =>
              (0, t.jsxs)(
                s.Fragment,
                {
                  children: [
                    (0, t.jsx)("dt", { children: e.title }),
                    (0, t.jsx)("dd", { children: e.value }),
                  ],
                },
                e.key
              )
            ),
          }),
          a.summary.length > 0 &&
            (0, t.jsx)("ul", {
              children: a.summary.map((e, s) =>
                (0, t.jsx)("li", { children: e }, s)
              ),
            }),
          a.verifyUrl &&
            (0, t.jsx)("p", {
              children: (0, t.jsx)("a", {
                className: "inline-link",
                href: a.verifyUrl,
                children: "Check this receipt (link from the router)",
              }),
            }),
          (0, t.jsx)("p", {
            className: et.default.sub,
            children:
              "Read from the router when you asked. The signed receipt, not this summary, is what can be verified.",
          }),
        ],
      });
    }
    function ef({ r: e, label: s, onLabel: n, onCopy: r, copied: l }) {
      let i = (function (e, t = "") {
        if (!B(e)) return null;
        let s = `/api/v1/receipts/${encodeURIComponent(e)}`;
        return {
          verify: "/verify/#v-receipt",
          receipt: t + s,
          privacy: t + s + "/privacy",
        };
      })(e.id, a.API_BASE);
      return (0, t.jsxs)("li", {
        className: et.default.receipt,
        children: [
          (0, t.jsxs)("div", {
            className: et.default.receiptHead,
            children: [
              (0, t.jsx)("span", {
                className: et.default.stepName,
                children: ea[e.step] || "Call",
              }),
              e.id
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("code", {
                        className: et.default.id,
                        children: e.id,
                      }),
                      (0, t.jsx)(ee.CopyButton, {
                        text: e.id,
                        label: "Copy id",
                      }),
                    ],
                  })
                : (0, t.jsx)("span", {
                    className: et.default.sub,
                    children: "No usable receipt id",
                  }),
              e.withheld &&
                (0, t.jsx)(el, { state: "bad", children: "Withheld, billed" }),
            ],
          }),
          (0, t.jsxs)("dl", {
            className: et.default.facts,
            children: [
              e.model &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("dt", { children: "Model" }),
                    (0, t.jsx)("dd", { className: "mono", children: e.model }),
                  ],
                }),
              e.provider &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("dt", { children: "Provider" }),
                    (0, t.jsx)("dd", {
                      className: "mono",
                      children: e.provider,
                    }),
                  ],
                }),
              e.lane &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("dt", { children: "Lane" }),
                    (0, t.jsx)("dd", { children: e.lane }),
                  ],
                }),
              e.disclosure &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("dt", { children: "Disclosure class" }),
                    (0, t.jsx)("dd", { children: e.disclosure }),
                  ],
                }),
              (null !== e.promptTokens || null !== e.completionTokens) &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("dt", { children: "Tokens" }),
                    (0, t.jsxs)("dd", {
                      children: [
                        e.promptTokens ?? 0,
                        " in · ",
                        e.completionTokens ?? 0,
                        " out",
                        null !== e.inputs
                          ? ` \xb7 ${e.inputs} text${1 === e.inputs ? "" : "s"}`
                          : "",
                      ],
                    }),
                  ],
                }),
              null !== e.cost &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("dt", { children: "Cost" }),
                    (0, t.jsxs)("dd", {
                      children: [
                        "$",
                        e.cost
                          .toFixed(7)
                          .replace(/0+$/, "")
                          .replace(/\.$/, ".0"),
                      ],
                    }),
                  ],
                }),
              e.attestation &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("dt", { children: "Gateway attestation" }),
                    (0, t.jsxs)("dd", {
                      className: et.default.checks,
                      children: [
                        (0, t.jsxs)(el, {
                          state: er(e.attestation.attested),
                          children: ["Attested ", er(e.attestation.attested)],
                        }),
                        (0, t.jsxs)(el, {
                          state: er(e.attestation.gpu),
                          children: ["GPU ", er(e.attestation.gpu)],
                        }),
                        (0, t.jsxs)(el, {
                          state: er(e.attestation.verified),
                          children: [
                            "Receipt verified ",
                            er(e.attestation.verified),
                          ],
                        }),
                        e.attestation.kind &&
                          (0, t.jsx)("span", {
                            className: et.default.sub,
                            children: e.attestation.kind,
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          e.developmentAttestation &&
            (0, t.jsx)("p", {
              className: et.default.hint,
              children:
                "This router reports development attestation for this call, so treat nothing about its hardware as proven.",
            }),
          i &&
            (0, t.jsxs)("div", {
              className: et.default.links,
              children: [
                (0, t.jsx)("a", {
                  className: "inline-link",
                  href: i.verify,
                  children: "Verify it",
                }),
                (0, t.jsx)("button", {
                  type: "button",
                  className: "text-button",
                  onClick: () => r(e.id),
                  children:
                    l === e.id
                      ? "Copied. Paste it on the verify page"
                      : "Copy the signed receipt",
                }),
                (0, t.jsx)("a", {
                  className: "inline-link",
                  href: i.receipt,
                  rel: "noopener",
                  children: "Signed receipt (JSON)",
                }),
                (0, t.jsx)("button", {
                  type: "button",
                  className: "text-button",
                  onClick: () => n(e.id),
                  disabled: s?.state === "loading",
                  children:
                    s?.state === "ok" ? "Hide privacy label" : "Privacy label",
                }),
              ],
            }),
          i && (0, t.jsx)(em, { state: s }),
        ],
      });
    }
    e.s(
      [
        "default",
        0,
        function () {
          let [e, n] = (0, s.useState)({ key: "", balance: null }),
            r = (0, s.useRef)(e);
          r.current = e;
          let [l, i] = (0, s.useState)([]),
            o = (0, s.useRef)([]),
            f = (0, s.useCallback)((e) => {
              (o.current = "function" == typeof e ? e(o.current) : e),
                i(o.current);
            }, []),
            x = (0, s.useRef)(Promise.resolve()),
            [b, k] = (0, s.useState)(""),
            [w, j] = (0, s.useState)(!1),
            [_, v] = (0, s.useState)(""),
            [N, T] = (0, s.useState)("attested"),
            [A, P] = (0, s.useState)(""),
            [S, $] = (0, s.useState)(u.default),
            [C, W] = (0, s.useState)(h.default),
            [R, q] = (0, s.useState)({
              state: "loading",
              data: { chat: [], embedding: [] },
            }),
            [O, M] = (0, s.useState)({ state: "idle" }),
            [B, J] = (0, s.useState)(0),
            ea = (0, s.useRef)(null),
            [en, er] = (0, s.useState)(0),
            [em, ep] = (0, s.useState)(() => new Set()),
            [ex, eg] = (0, s.useState)({}),
            [eb, ey] = (0, s.useState)(""),
            ek = (0, s.useRef)({}),
            ew = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            let e = new AbortController();
            return (
              (0, a.api)("/api/v1/models", { signal: e.signal })
                .then((e) =>
                  q({
                    state: "ok",
                    data: (function (e) {
                      let t = [],
                        s = [];
                      for (let a of Array.isArray(e) ? e : []) {
                        if (!a || "string" != typeof a.id || !a.id) continue;
                        let e = a.architecture?.output_modalities,
                          n = Array.isArray(e) ? e : ["text"],
                          r = {
                            id: a.id,
                            name:
                              "string" == typeof a.name && a.name
                                ? a.name
                                : a.id,
                            context:
                              Number(a.top_provider?.context_length) ||
                              Number(a.context_length) ||
                              0,
                            attested: U(a) > 0,
                            prompt: Number(a.pricing?.prompt) || 0,
                            completion: Number(a.pricing?.completion) || 0,
                          };
                        n.includes("embeddings")
                          ? s.push(r)
                          : n.includes("text") && t.push(r);
                      }
                      let a = (e, t) => e.id.localeCompare(t.id);
                      return { chat: t.sort(a), embedding: s.sort(a) };
                    })(e?.data),
                  })
                )
                .catch(
                  (e) =>
                    e?.name !== "AbortError" &&
                    q({
                      state: "error",
                      data: { chat: [], embedding: [] },
                      message: e?.message,
                    })
                ),
              () => e.abort()
            );
          }, []),
            (0, s.useEffect)(() => () => ea.current?.abort(), []),
            (0, s.useEffect)(() => {
              P((e) =>
                (function (e, t, s) {
                  let a = L(e, t);
                  if (s && a.some((e) => e.id === s)) return s;
                  let n = [...a.filter((e) => e.context >= 32e3)].sort(
                      (e, t) =>
                        e.prompt + e.completion - (t.prompt + t.completion) ||
                        e.id.localeCompare(t.id)
                    )[0],
                    r = [...a].sort(
                      (e, t) =>
                        t.context - e.context || e.id.localeCompare(t.id)
                    )[0];
                  return (n ?? r)?.id ?? "";
                })(R.data, N, e)
              );
            }, [R, N]);
          let ej = (0, s.useCallback)(
              (e, t) =>
                f((s) => s.map((s) => (s.id === e ? { ...s, ...t } : s))),
              [f]
            ),
            e_ = (0, s.useCallback)(
              (e) => f((t) => t.filter((t) => t.id !== e)),
              [f]
            ),
            ev = (0, s.useCallback)(
              async (e) => {
                let t,
                  s = o.current;
                if (s.length >= 300)
                  return k("At most 300 files are listed at once.");
                if (
                  s.some(
                    (t) =>
                      t.name === e.name &&
                      t.size === e.size &&
                      t.modified === e.lastModified
                  )
                )
                  return k(`${e.name} is already added.`);
                let a = ++ei;
                f((t) => [
                  ...t,
                  {
                    id: a,
                    name: e.name,
                    size: e.size,
                    modified: e.lastModified,
                    status: "reading",
                  },
                ]);
                try {
                  let s = g(e.name);
                  t =
                    e.size > 0x1400000
                      ? { ok: !1, error: F(e.size) }
                      : s
                      ? await E(e.name, new Uint8Array(await e.arrayBuffer()), {
                          loadPdfjs: Q,
                        })
                      : await E(e.name, new Uint8Array(0));
                } catch {
                  t = { ok: !1, error: "This file could not be read." };
                }
                t.ok &&
                  o.current
                    .filter((e) => "ready" === e.status)
                    .reduce((e, t) => e + t.bytes, 0) +
                    t.bytes >
                    0x1000000 &&
                  (t = {
                    ok: !1,
                    error:
                      "Too much text is loaded at once. Remove some files first.",
                  }),
                  t.ok
                    ? ej(a, {
                        status: "ready",
                        kind: t.kind,
                        text: t.text,
                        bytes: t.bytes,
                        pages: t.pages,
                        note: t.note,
                      })
                    : ej(a, { status: "error", error: t.error });
              },
              [ej, f]
            ),
            eN = (0, s.useCallback)(
              (e) => {
                let t = Array.from(e || []);
                t.length &&
                  (k(""),
                  (x.current = x.current
                    .then(async () => {
                      for (let e of t) await ev(e);
                    })
                    .catch(() => void 0)));
              },
              [ev]
            ),
            eT = (0, s.useMemo)(
              () => l.filter((e) => "ready" === e.status),
              [l]
            ),
            eA =
              Number.isInteger(C) && C >= h.min && C <= h.max ? C : h.default,
            eP = (0, s.useMemo)(
              () => new Map(eT.map((e) => [e.id, z(e.text, eA, m(eA))])),
              [eT, eA]
            ),
            eS = (0, s.useMemo)(
              () =>
                (function (
                  e,
                  { chunkSize: t = h.default, limits: s = c, chunks: a } = {}
                ) {
                  let n = m(t),
                    r = 0,
                    l = 0,
                    i = [];
                  e.forEach((e, s) => {
                    let o;
                    r += ((o = e.text), y.encode(o).length);
                    let d = a ? a[s] : z(e.text, t, n);
                    for (let e of ((l += d.length), d))
                      i.push(e.text ? e.text.length : e.end - e.start);
                  });
                  let o = l ? Math.ceil((l + 1) / 64) : 0,
                    d = [
                      {
                        key: "documents",
                        label: "Documents",
                        used: e.length,
                        limit: s.documents,
                      },
                      {
                        key: "bytes",
                        label: "Text",
                        used: r,
                        limit: s.bytes,
                        bytes: !0,
                      },
                      {
                        key: "chunks",
                        label: "Chunks",
                        used: l,
                        limit: s.chunks,
                      },
                      {
                        key: "embeddingCalls",
                        label: "Embeddings calls",
                        used: o,
                        limit: s.embeddingCalls,
                        floor: !0,
                      },
                    ].map((e) => ({
                      ...e,
                      over: e.used > e.limit,
                      share: e.limit ? Math.min(1, e.used / e.limit) : 0,
                    })),
                    u = d.filter((e) => e.over).map((e) => e.key);
                  return {
                    rows: d,
                    over: u,
                    blocked: u.length > 0,
                    documents: e.length,
                    bytes: r,
                    chunks: l,
                    embeddingCalls: o,
                    chunkLengths: i,
                    overlap: n,
                  };
                })(eT, {
                  chunkSize: eA,
                  chunks: eT.map((e) => eP.get(e.id) || []),
                }),
              [eT, eP, eA]
            ),
            e$ = R.data.chat.find((e) => e.id === A),
            eC = (function ({
              key: e,
              docs: t,
              plan: s,
              question: a,
              model: n,
              topK: r,
              chunkSize: l,
              contextLength: i,
            }) {
              var o, d;
              let c,
                m = [];
              return (
                e || m.push("Connect your API key."),
                t.length || m.push("Add at least one file."),
                s?.blocked &&
                  m.push("The files are over a limit below. Remove some."),
                String(a ?? "").trim()
                  ? String(a).trim().length > 8e3 &&
                    m.push("The question is longer than 8000 characters.")
                  : m.push("Write a question."),
                n || m.push("Choose a model."),
                (!Number.isInteger(r) || r < u.min || r > u.max) &&
                  m.push(`Passages to use must be from ${u.min} to ${u.max}.`),
                (!Number.isInteger(l) || l < h.min || l > h.max) &&
                  m.push(
                    `Passage size must be from ${h.min} to ${h.max} characters.`
                  ),
                s &&
                  i &&
                  Number.isInteger(r) &&
                  ((o = s.chunkLengths),
                  (d = a ?? ""),
                  Math.ceil(
                    ((c = [...o].sort((e, t) => t - e).slice(0, r)).reduce(
                      (e, t) => e + t,
                      0
                    ) +
                      String(d).length +
                      1200 +
                      120 * c.length) /
                      3
                  ) +
                    8 >
                    i) &&
                  m.push(
                    "The passages could be longer than this model's context. Use fewer passages, smaller passages or a model with a longer context."
                  ),
                m
              );
            })({
              key: e.key,
              docs: eT,
              plan: eS,
              question: _,
              model: A,
              topK: S,
              chunkSize: C,
              contextLength: e$?.context,
            }),
            eW =
              "ok" === R.state
                ? (function (e, t, s) {
                    let a = e.chat.find((e) => e.id === s),
                      n = e.embedding.some((e) => e.attested);
                    if ("attested" === t)
                      return L(e, "attested").length
                        ? n
                          ? null
                          : "No embedding model has an attested endpoint right now, so the attested lane would refuse this request. Nothing would be sent."
                        : "No chat model has an attested endpoint right now, so the attested lane would refuse this request. Nothing would be sent.";
                    if ("auto" === t) {
                      if (a && !a.attested)
                        return "This model has no attested endpoint, so the router will use its public lane and say why.";
                      if (!n)
                        return "No embedding model has an attested endpoint right now, so the router will use its public lane and say why.";
                    }
                    return null;
                  })(R.data, N, A)
                : null,
            eF = L(R.data, N);
          async function eR(e) {
            let t;
            if ((e?.preventDefault(), eC.length || "running" === O.state))
              return;
            let s = eT.map((e) => ({
              name: e.name,
              text: e.text,
              kind: e.kind,
            }));
            try {
              t = (function ({
                docs: e,
                question: t,
                model: s,
                lane: a = "attested",
                topK: n = u.default,
                chunkSize: r = h.default,
              }) {
                if (!Array.isArray(e) || !e.length)
                  throw RangeError("Add at least one document.");
                if ("string" != typeof s || !s)
                  throw RangeError("Choose a model.");
                let l = String(t ?? "").trim();
                if (!l || l.length > 8e3)
                  throw RangeError(
                    "The question must be from 1 to 8000 characters."
                  );
                if (!D.includes(a)) throw RangeError("Unknown lane.");
                if (!Number.isInteger(n) || n < u.min || n > u.max)
                  throw RangeError("top_k is out of range.");
                if (!Number.isInteger(r) || r < h.min || r > h.max)
                  throw RangeError("The chunk size is out of range.");
                return {
                  documents: e.map((e, t) => ({
                    id: `doc-${t + 1}`,
                    text: e.text,
                  })),
                  question: l,
                  model: s,
                  top_k: n,
                  chunk: { size: r, overlap: m(r) },
                  ...("auto" === a ? {} : { provider: { lane: a } }),
                };
              })({
                docs: s,
                question: _,
                model: A,
                lane: N,
                topK: S,
                chunkSize: C,
              });
            } catch (e) {
              return M({ state: "error", error: Y({ message: e.message }) });
            }
            let n = new AbortController();
            (ea.current = n),
              J(0),
              M({ state: "running", startedAt: Date.now() }),
              er(0),
              ep(new Set()),
              eg({});
            try {
              var l;
              let e,
                i,
                o,
                c,
                u,
                h = await (0, a.api)("/api/v1/rag", {
                  key: r.current.key,
                  method: "POST",
                  body: t,
                  signal: n.signal,
                });
              M({
                state: "done",
                view:
                  ((l = h?.sources),
                  (e = Array.isArray(l)
                    ? l
                        .filter(
                          (e) =>
                            e &&
                            "object" == typeof e &&
                            Number.isInteger(e.ref) &&
                            e.ref >= 1
                        )
                        .map((e) => {
                          var t, a, n;
                          let r,
                            l = /^doc-(\d{1,4})$/.exec(String(e.document_id)),
                            i = l ? s[Number(l[1]) - 1] : void 0,
                            o =
                              i &&
                              Number.isInteger(e.start) &&
                              Number.isInteger(e.end) &&
                              e.start >= 0 &&
                              e.start < e.end &&
                              e.end <= i.text.length;
                          return {
                            ref: e.ref,
                            name: i
                              ? i.name
                              : H(e.document_id) ?? "unknown document",
                            part: Number.isInteger(e.chunk_index)
                              ? e.chunk_index + 1
                              : null,
                            pages:
                              o && "pdf" === i.kind
                                ? ((t = i.text),
                                  (a = e.start),
                                  (n = e.end),
                                  (r = d(t, a)),
                                  null === r
                                    ? null
                                    : {
                                        first: r,
                                        last: Math.max(
                                          r,
                                          d(t, Math.max(a, n - 1)) ?? r
                                        ),
                                      })
                                : null,
                            score: Z(e.score),
                            excerpt: o
                              ? {
                                  before: V(i.text, e.start - 200, e.start),
                                  hit: i.text.slice(e.start, e.end),
                                  after: V(i.text, e.end, e.end + 200),
                                  moreBefore: e.start > 200,
                                  moreAfter: e.end + 200 < i.text.length,
                                }
                              : null,
                          };
                        })
                    : []),
                  (i = "string" == typeof h?.answer ? h.answer : ""),
                  (o = (function (e, t) {
                    let s,
                      a = [],
                      n = /\[(\d{1,3}(?:\s*[,;]\s*\d{1,3})*)\]/g,
                      r = 0;
                    for (; (s = n.exec(e)); ) {
                      let n = [
                        ...new Set(
                          [...s[1].matchAll(/\d+/g)].map((e) => Number(e[0]))
                        ),
                      ];
                      !n.length ||
                        n.some((e) => e < 1 || e > t) ||
                        (s.index > r &&
                          a.push({ type: "text", text: e.slice(r, s.index) }),
                        a.push({ type: "cite", refs: n, raw: s[0] }),
                        (r = s.index + s[0].length));
                    }
                    return (
                      r < e.length &&
                        a.push({ type: "text", text: e.slice(r) }),
                      a
                    );
                  })(i, e.length ? Math.max(...e.map((e) => e.ref)) : 0)),
                  (c = new Set(
                    o.filter((e) => "cite" === e.type).flatMap((e) => e.refs)
                  )),
                  (u = h?.usage && "object" == typeof h.usage ? h.usage : {}),
                  {
                    answer: i,
                    segments: o,
                    cited: c,
                    sources: e,
                    receipts: K(h?.receipts),
                    model: H(h?.model),
                    embeddingModel: H(h?.embedding_model),
                    lane: H(h?.lane, 40),
                    laneSource:
                      h?.lane_source === "request" ||
                      h?.lane_source === "default"
                        ? h.lane_source
                        : null,
                    laneNote: H(h?.lane_note, 600),
                    disclosure: H(h?.disclosure, 40),
                    developmentAttestation: h?.attestation_simulated === !0,
                    finishReason: H(h?.finish_reason, 40),
                    retrieval:
                      h?.retrieval && "object" == typeof h.retrieval
                        ? {
                            documents: Z(h.retrieval.documents),
                            chunks: Z(h.retrieval.chunks),
                            topK: Z(h.retrieval.top_k),
                            embeddingCalls: Z(h.retrieval.embedding_calls),
                          }
                        : null,
                    usage: {
                      embeddingTokens: Z(u.embedding_tokens),
                      promptTokens: Z(u.prompt_tokens),
                      completionTokens: Z(u.completion_tokens),
                      costUsd:
                        "string" == typeof u.cost_usd &&
                        /^\d+(\.\d+)?$/.test(u.cost_usd)
                          ? u.cost_usd
                          : null,
                    },
                  }),
                lane: N,
              });
            } catch (e) {
              e?.name === "AbortError"
                ? M({ state: "cancelled" })
                : M({ state: "error", error: Y(e) });
            } finally {
              ea.current = null;
            }
          }
          function eE(e) {
            er(e);
            let t = ek.current[e];
            if (!t) return;
            let s =
              "function" == typeof matchMedia &&
              matchMedia("(prefers-reduced-motion: reduce)").matches;
            t.scrollIntoView({
              behavior: s ? "auto" : "smooth",
              block: "center",
            }),
              t.focus({ preventScroll: !0 });
          }
          async function eI(e) {
            if (ex[e]?.state === "ok")
              return eg((t) => ({ ...t, [e]: { ...t[e], state: "hidden" } }));
            if (ex[e]?.state === "hidden")
              return eg((t) => ({ ...t, [e]: { ...t[e], state: "ok" } }));
            eg((t) => ({ ...t, [e]: { state: "loading" } }));
            try {
              let t = await (0, a.api)(
                  `/api/v1/receipts/${encodeURIComponent(e)}/privacy`
                ),
                s = (function (e, t = "") {
                  let s =
                    e?.data &&
                    "object" == typeof e.data &&
                    !Array.isArray(e.data)
                      ? e.data
                      : e;
                  if (
                    !s ||
                    "object" != typeof s ||
                    !s.label ||
                    "object" != typeof s.label
                  )
                    return null;
                  let a = G.map(([e, t]) => ({
                      key: e,
                      title: t,
                      value: X(s.label[e], 400),
                    })).filter((e) => e.value),
                    n = (Array.isArray(s.summary) ? s.summary : [])
                      .map((e) => X(e, 400))
                      .filter(Boolean)
                      .slice(0, 6);
                  return a.length || n.length
                    ? {
                        lane: X(s.lane, 40),
                        rows: a,
                        summary: n,
                        verifyUrl: (function (e, t) {
                          if (
                            "string" != typeof e ||
                            !e ||
                            e.length > 500 ||
                            /[\u0000-\u001f\\]/.test(e)
                          )
                            return null;
                          if (e.startsWith("/") && !e.startsWith("//"))
                            return e;
                          if (!t) return null;
                          try {
                            let s = new URL(e, t);
                            return s.origin === t &&
                              ("https:" === s.protocol ||
                                "http:" === s.protocol)
                              ? s.pathname + s.search + s.hash
                              : null;
                          } catch {
                            return null;
                          }
                        })(s.verify_url, t),
                      }
                    : null;
                })(t, "object" == typeof location ? location.origin : "");
              eg((t) => ({
                ...t,
                [e]: s ? { state: "ok", label: s } : { state: "absent" },
              }));
            } catch (t) {
              eg((s) => ({
                ...s,
                [e]:
                  t instanceof a.ApiError &&
                  (404 === t.status || 501 === t.status)
                    ? { state: "absent" }
                    : { state: "error" },
              }));
            }
          }
          async function eq(e) {
            try {
              let t = await fetch(
                a.API_BASE + `/api/v1/receipts/${encodeURIComponent(e)}`,
                { headers: { accept: "application/json" } }
              );
              if (!t.ok) throw Error(String(t.status));
              await navigator.clipboard.writeText(await t.text()),
                ey(e),
                setTimeout(() => ey((t) => (t === e ? "" : t)), 4e3);
            } catch {
              ey(""),
                k(
                  "The signed receipt could not be copied. Open its JSON link instead and copy it from there."
                );
            }
          }
          (0, s.useEffect)(() => {
            if ("running" !== O.state) return;
            let e = setInterval(
              () => J(Math.round((Date.now() - O.startedAt) / 1e3)),
              1e3
            );
            return () => clearInterval(e);
          }, [O]),
            (0, s.useEffect)(() => {
              ("done" === O.state || "error" === O.state) &&
                ew.current?.focus({ preventScroll: !1 });
            }, [O.state]);
          let eO = "done" === O.state ? O.view : null,
            eM = "error" === O.state ? O.error : null,
            ez = eS.documents;
          return (0, t.jsxs)("div", {
            className: et.default.stack,
            children: [
              (0, t.jsxs)("section", {
                className: et.default.handling,
                "aria-labelledby": "ask-handling",
                children: [
                  (0, t.jsx)("h2", {
                    id: "ask-handling",
                    children: "How your files are handled",
                  }),
                  (0, t.jsxs)("ol", {
                    children: [
                      (0, t.jsxs)("li", {
                        children: [
                          (0, t.jsx)("b", { children: "Read here." }),
                          " Files are opened in this browser and turned into plain text (",
                          p.join(", "),
                          "). A PDF is read by a reader that this site serves, in a background worker in your browser, and only when you add one; it asks no other site for anything. File names stay here: the router receives documents called doc-1, doc-2 and so on.",
                        ],
                      }),
                      (0, t.jsxs)("li", {
                        children: [
                          (0, t.jsx)("b", { children: "Sent over TLS." }),
                          " The text and your question go to AnyRoute. The router reads them in memory to cut them into chunks, embed them and rank them against your question, and asks a chat model to answer from the best few. It writes none of it to a database, cache or log.",
                        ],
                      }),
                      (0, t.jsxs)("li", {
                        children: [
                          (0, t.jsx)("b", { children: "Then to models." }),
                          " The chunks and the question go to the embedding model's provider, and the question and the best chunks go to the chat model's provider. On the attested lane the router sends them only to providers whose hardware attestation it has verified and holds fresh. That shows what code is running, not what it does with your text. On the public lane a provider's documented policy applies.",
                        ],
                      }),
                      (0, t.jsxs)("li", {
                        children: [
                          (0, t.jsx)("b", { children: "What is kept." }),
                          " Only what any call leaves: a signed receipt with ids, model, provider, lane, token counts, cost, timing and the SHA-256 of the request and of the response, never their text. A hash does not reveal text, but whoever holds an exact guess of a request can confirm it against one, and a receipt can be read by its id.",
                        ],
                      }),
                      (0, t.jsxs)("li", {
                        children: [
                          (0, t.jsx)("b", { children: "On this page." }),
                          " Your key and your files stay in this tab's memory, and are gone when you reload or choose Clear. Nothing is written to browser storage.",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("p", {
                    className: et.default.help,
                    children: [
                      "The endpoint is ",
                      (0, t.jsx)("span", {
                        className: "mono",
                        children: "POST /api/v1/rag",
                      }),
                      ". ",
                      (0, t.jsx)("a", {
                        className: "inline-link",
                        href: "/docs/#rag",
                        children: "Read what it does and does not claim",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(eo, {
                auth: e,
                onConnect: (e, t) => n({ key: e, balance: t }),
                onForget: () => n({ key: "", balance: null }),
              }),
              (0, t.jsxs)("section", {
                className: et.default.step,
                "aria-labelledby": "ask-files",
                children: [
                  (0, t.jsxs)("h2", {
                    id: "ask-files",
                    children: [
                      (0, t.jsx)("span", {
                        className: et.default.num,
                        children: "2",
                      }),
                      "Your files",
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: et.default.drop,
                    "data-active": w,
                    onDragEnter: (e) => {
                      e.preventDefault(), j(!0);
                    },
                    onDragOver: (e) => {
                      e.preventDefault(),
                        (e.dataTransfer.dropEffect = "copy"),
                        j(!0);
                    },
                    onDragLeave: (e) => {
                      e.currentTarget.contains(e.relatedTarget) || j(!1);
                    },
                    onDrop: (e) => {
                      e.preventDefault(), j(!1), eN(e.dataTransfer?.files);
                    },
                    children: [
                      (0, t.jsx)("input", {
                        id: "ask-file-input",
                        className: et.default.fileInput,
                        type: "file",
                        multiple: !0,
                        accept:
                          ".txt,.text,.md,.markdown,.csv,.tsv,.json,.html,.htm,.docx,.pdf",
                        onChange: (e) => {
                          eN(e.target.files), (e.target.value = "");
                        },
                      }),
                      (0, t.jsxs)("label", {
                        htmlFor: "ask-file-input",
                        children: [
                          (0, t.jsx)("b", { children: "Drop files here" }),
                          (0, t.jsx)("span", { children: "or choose files" }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("p", {
                    className: et.default.help,
                    children: [
                      "Reads ",
                      p.join(", "),
                      " in this browser. Word files: the body text only, not headers, footers, footnotes or comments. PDF files: the text layer only, page by page; scanned pages are pictures and aren't read.",
                    ],
                  }),
                  b &&
                    (0, t.jsx)("div", {
                      className: et.default.hint,
                      role: "status",
                      children: b,
                    }),
                  l.length > 0 &&
                    (0, t.jsx)("ul", {
                      className: et.default.files,
                      children: l.map((e) =>
                        (0, t.jsx)(
                          ec,
                          {
                            file: e,
                            chunks: eP.get(e.id)?.length,
                            onRemove: e_,
                          },
                          e.id
                        )
                      ),
                    }),
                  (0, t.jsxs)("div", {
                    className: et.default.limits,
                    children: [
                      (0, t.jsx)("h3", { children: "Before you send" }),
                      (0, t.jsx)("ul", {
                        children: eS.rows.map((e) =>
                          (0, t.jsx)(ed, { row: e }, e.key)
                        ),
                      }),
                      (0, t.jsxs)("p", {
                        className: et.default.help,
                        children: [
                          "These are the router's default limits for one request (",
                          c.documents,
                          " documents, ",
                          I(c.bytes),
                          " of text, ",
                          c.chunks.toLocaleString("en-US"),
                          " chunks, ",
                          c.embeddingCalls,
                          " embeddings calls). Over any of them the router refuses the request with 413 before anything is sent to a provider; a router configured differently says so in its refusal. The embeddings calls shown are a floor: an embedding model with a small context needs more.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("form", {
                className: et.default.step,
                onSubmit: eR,
                "aria-labelledby": "ask-question",
                children: [
                  (0, t.jsxs)("h2", {
                    id: "ask-question",
                    children: [
                      (0, t.jsx)("span", {
                        className: et.default.num,
                        children: "3",
                      }),
                      "Your question",
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "ask-q",
                        children: "Question",
                      }),
                      (0, t.jsx)("textarea", {
                        id: "ask-q",
                        value: _,
                        onChange: (e) => v(e.target.value),
                        maxLength: 8e3,
                        spellCheck: "true",
                        placeholder:
                          "What does the handbook say about refunds?",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("fieldset", {
                    className: et.default.lanes,
                    children: [
                      (0, t.jsx)("legend", { children: "Lane" }),
                      D.map((e) =>
                        (0, t.jsxs)(
                          "label",
                          {
                            className: et.default.laneOption,
                            "data-checked": N === e,
                            children: [
                              (0, t.jsx)("input", {
                                type: "radio",
                                name: "ask-lane",
                                value: e,
                                checked: N === e,
                                onChange: () => T(e),
                              }),
                              (0, t.jsxs)("span", {
                                children: [
                                  (0, t.jsxs)("b", {
                                    children: [
                                      es[e][0],
                                      "attested" === e ? " (default)" : "",
                                    ],
                                  }),
                                  (0, t.jsx)("span", { children: es[e][1] }),
                                ],
                              }),
                            ],
                          },
                          e
                        )
                      ),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "field",
                    children: [
                      (0, t.jsx)("label", {
                        htmlFor: "ask-model",
                        children: "Chat model",
                      }),
                      (0, t.jsxs)("select", {
                        id: "ask-model",
                        value: A,
                        onChange: (e) => P(e.target.value),
                        disabled: "ok" !== R.state || !eF.length,
                        children: [
                          "loading" === R.state &&
                            (0, t.jsx)("option", {
                              value: "",
                              children: "Loading models…",
                            }),
                          "error" === R.state &&
                            (0, t.jsx)("option", {
                              value: "",
                              children: "Models could not be loaded",
                            }),
                          "ok" === R.state &&
                            !eF.length &&
                            (0, t.jsx)("option", {
                              value: "",
                              children: "No model available on this lane",
                            }),
                          eF.map((e) => {
                            let s, a;
                            return (0, t.jsxs)(
                              "option",
                              {
                                value: e.id,
                                children: [
                                  e.id,
                                  " · ",
                                  (s = e.context)
                                    ? s >= 1e6
                                      ? `${+(s / 1e6).toFixed(1)}M`
                                      : s >= 1e3
                                      ? `${Math.round(s / 1024)}K`
                                      : String(s)
                                    : "n/a",
                                  " · ",
                                  (a = 1e6 * e.prompt) >= 100
                                    ? `$${a.toFixed(0)}`
                                    : a >= 1
                                    ? `$${a.toFixed(2)}`
                                    : a > 0
                                    ? `$${a.toPrecision(2)}`
                                    : "$0",
                                  "/M in",
                                  e.attested ? " · attested" : "",
                                ],
                              },
                              e.id
                            );
                          }),
                        ],
                      }),
                    ],
                  }),
                  "error" === R.state &&
                    (0, t.jsx)("div", {
                      className: "error",
                      role: "alert",
                      children:
                        R.message || "The model list could not be loaded.",
                    }),
                  eW &&
                    (0, t.jsx)("div", {
                      className: et.default.hint,
                      role: "status",
                      children: eW,
                    }),
                  (0, t.jsx)("p", {
                    className: et.default.help,
                    children:
                      "The embedding model is chosen by the router (and named in the answer). The catalog above is read from this router when the page opens.",
                  }),
                  (0, t.jsxs)("details", {
                    className: et.default.more,
                    children: [
                      (0, t.jsx)("summary", { children: "Passages" }),
                      (0, t.jsxs)("div", {
                        className: et.default.advanced,
                        children: [
                          (0, t.jsxs)("div", {
                            className: "field",
                            children: [
                              (0, t.jsx)("label", {
                                htmlFor: "ask-topk",
                                children: "Passages to answer from",
                              }),
                              (0, t.jsx)("input", {
                                id: "ask-topk",
                                type: "number",
                                inputMode: "numeric",
                                min: u.min,
                                max: u.max,
                                value: Number.isInteger(S) ? S : "",
                                onChange: (e) =>
                                  $(
                                    "" === e.target.value
                                      ? NaN
                                      : Number(e.target.value)
                                  ),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "field",
                            children: [
                              (0, t.jsx)("label", {
                                htmlFor: "ask-size",
                                children: "Passage size (characters)",
                              }),
                              (0, t.jsx)("input", {
                                id: "ask-size",
                                type: "number",
                                inputMode: "numeric",
                                min: h.min,
                                max: h.max,
                                step: "50",
                                value: Number.isInteger(C) ? C : "",
                                onChange: (e) =>
                                  W(
                                    "" === e.target.value
                                      ? NaN
                                      : Number(e.target.value)
                                  ),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            className: et.default.help,
                            children: [
                              "The files are cut into overlapping passages of this size (",
                              h.min,
                              " to ",
                              h.max,
                              "; overlap 15%), the passages closest to your question are ranked in memory, and the best ",
                              u.min,
                              " to ",
                              u.max,
                              " go to the model.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: et.default.send,
                    children: [
                      (0, t.jsx)("p", {
                        className: et.default.sendLine,
                        role: "status",
                        children: ez
                          ? `You are about to send ${ez} file${
                              1 === ez ? "" : "s"
                            } (${I(
                              eS.bytes
                            )} of text, ${eS.chunks.toLocaleString(
                              "en-US"
                            )} chunk${
                              1 === eS.chunks ? "" : "s"
                            }) and your question to AnyRoute over TLS, ${
                              "auto" === N
                                ? "on the lane the router chooses"
                                : `on the ${N} lane`
                            }${A ? `, answered by ${A}` : ""}.`
                          : "Nothing is sent until you press Ask.",
                      }),
                      (0, t.jsxs)("div", {
                        className: "button-row",
                        children: [
                          (0, t.jsx)(ee.Button, {
                            type: "submit",
                            disabled: eC.length > 0 || "running" === O.state,
                            children:
                              "running" === O.state ? `Asking… ${B}s` : "Ask",
                          }),
                          "running" === O.state &&
                            (0, t.jsx)("button", {
                              type: "button",
                              className: "text-button",
                              onClick: () => ea.current?.abort(),
                              children: "Cancel",
                            }),
                          (0, t.jsx)("button", {
                            type: "button",
                            className: "text-button",
                            onClick: function () {
                              ea.current?.abort(),
                                f([]),
                                v(""),
                                M({ state: "idle" }),
                                er(0),
                                eg({}),
                                k("");
                            },
                            children: "Clear files and answer",
                          }),
                        ],
                      }),
                      eC.length > 0 &&
                        "running" !== O.state &&
                        (0, t.jsx)("ul", {
                          className: et.default.stops,
                          children: eC.map((e) =>
                            (0, t.jsx)("li", { children: e }, e)
                          ),
                        }),
                    ],
                  }),
                ],
              }),
              "cancelled" === O.state &&
                (0, t.jsx)("div", {
                  className: et.default.hint,
                  role: "status",
                  children:
                    "Cancelled. The router may already have made, and billed, some of its calls; each one is a receipt on your key.",
                }),
              eM &&
                (0, t.jsxs)("section", {
                  className: et.default.result,
                  "aria-labelledby": "ask-failed",
                  children: [
                    (0, t.jsx)("h2", {
                      id: "ask-failed",
                      ref: ew,
                      tabIndex: -1,
                      children: "Not answered",
                    }),
                    (0, t.jsx)("div", {
                      className: "error",
                      role: "alert",
                      children: eM.message,
                    }),
                    eM.hint &&
                      (0, t.jsx)("p", {
                        className: et.default.hint,
                        children: eM.hint,
                      }),
                    "payload_too_large" === eM.type &&
                      null !== eM.limit &&
                      (0, t.jsxs)("p", {
                        className: et.default.help,
                        children: [
                          "This router's limit here is ",
                          eM.limit.toLocaleString("en-US"),
                          ".",
                        ],
                      }),
                    eM.step &&
                      (0, t.jsxs)("p", {
                        className: et.default.help,
                        children: ["It stopped at the ", eM.step, " step."],
                      }),
                    eM.retryAfter &&
                      (0, t.jsxs)("p", {
                        className: et.default.help,
                        children: ["Try again after ", eM.retryAfter, "."],
                      }),
                    eM.receipts.length > 0 &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("h3", {
                            children: "Calls already made, and billed",
                          }),
                          (0, t.jsx)("ul", {
                            className: et.default.receipts,
                            children: eM.receipts.map((e, s) =>
                              (0, t.jsx)(
                                ef,
                                {
                                  r: e,
                                  label: ex[e.id],
                                  onLabel: eI,
                                  onCopy: eq,
                                  copied: eb,
                                },
                                e.id || s
                              )
                            ),
                          }),
                        ],
                      }),
                  ],
                }),
              eO &&
                (0, t.jsxs)("section", {
                  className: et.default.result,
                  "aria-labelledby": "ask-answer",
                  children: [
                    (0, t.jsx)("h2", {
                      id: "ask-answer",
                      ref: ew,
                      tabIndex: -1,
                      children: "Answer",
                    }),
                    (0, t.jsxs)("div", {
                      className: et.default.laneBox,
                      "data-lane": eO.lane,
                      children: [
                        (0, t.jsxs)("div", {
                          className: et.default.row,
                          children: [
                            (0, t.jsx)("span", {
                              className: et.default.sub,
                              children: "Lane used",
                            }),
                            (0, t.jsx)(el, {
                              state: "attested" === eO.lane ? "yes" : "known",
                              children: eO.lane || "not reported",
                            }),
                            (0, t.jsx)("span", {
                              className: et.default.sub,
                              children:
                                "request" === eO.laneSource
                                  ? "you chose it"
                                  : "default" === eO.laneSource
                                  ? "the router chose it"
                                  : "",
                            }),
                            eO.disclosure &&
                              (0, t.jsxs)("span", {
                                className: et.default.sub,
                                children: [
                                  "weakest disclosure class across the calls: ",
                                  eO.disclosure,
                                ],
                              }),
                          ],
                        }),
                        eO.laneNote &&
                          (0, t.jsxs)("p", {
                            className: et.default.hint,
                            children: ["Router note: ", eO.laneNote],
                          }),
                        eO.developmentAttestation &&
                          (0, t.jsx)("p", {
                            className: et.default.hint,
                            children:
                              "This router reports development attestation, so treat nothing about its hardware as proven.",
                          }),
                        (0, t.jsxs)("p", {
                          className: et.default.sub,
                          children: [
                            eO.model &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  "Chat model ",
                                  (0, t.jsx)("span", {
                                    className: "mono",
                                    children: eO.model,
                                  }),
                                  ".",
                                  " ",
                                ],
                              }),
                            eO.embeddingModel &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  "Embedding model ",
                                  (0, t.jsx)("span", {
                                    className: "mono",
                                    children: eO.embeddingModel,
                                  }),
                                  ".",
                                  " ",
                                ],
                              }),
                            eO.retrieval &&
                              null !== eO.retrieval.chunks &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  eO.retrieval.chunks,
                                  " chunk",
                                  1 === eO.retrieval.chunks ? "" : "s",
                                  " searched, ",
                                  eO.retrieval.topK,
                                  " used, ",
                                  eO.retrieval.embeddingCalls,
                                  " embeddings call",
                                  1 === eO.retrieval.embeddingCalls ? "" : "s",
                                  ".",
                                  " ",
                                ],
                              }),
                            eO.usage.costUsd &&
                              (0, t.jsxs)(t.Fragment, {
                                children: ["Cost $", eO.usage.costUsd, "."],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: et.default.answer,
                      children: eO.answer.trim()
                        ? eO.segments.map((e, a) =>
                            "text" === e.type
                              ? (0, t.jsx)(s.Fragment, { children: e.text }, a)
                              : (0, t.jsx)(
                                  eu,
                                  { refs: e.refs, onPick: eE, active: en },
                                  a
                                )
                          )
                        : (0, t.jsx)("span", {
                            className: et.default.sub,
                            children: "The model returned no text.",
                          }),
                    }),
                    eO.finishReason &&
                      "stop" !== eO.finishReason &&
                      (0, t.jsxs)("p", {
                        className: et.default.hint,
                        children: [
                          "The answer stopped early (",
                          eO.finishReason,
                          ").",
                        ],
                      }),
                    (0, t.jsx)("p", {
                      className: et.default.help,
                      children:
                        "The answer is a model's output grounded in the passages below, not a proof: check the numbered citations against them. Documents are treated as untrusted; the prompt tells the model to use only the numbered passages and to ignore instructions inside them, which lowers, and does not remove, the chance that a document steers the answer.",
                    }),
                    eO.sources.length > 0 &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("h3", {
                            children: "Passages it was given",
                          }),
                          (0, t.jsx)("p", {
                            className: et.default.help,
                            children:
                              "Click a number in the answer to jump to its passage. The passage is cut from the text held in this tab, using the position the router returned.",
                          }),
                          (0, t.jsx)("ul", {
                            className: et.default.sources,
                            children: eO.sources.map((e) =>
                              (0, t.jsx)(
                                eh,
                                {
                                  source: e,
                                  cited: eO.cited.has(e.ref),
                                  active: en === e.ref,
                                  open: em.has(e.ref),
                                  onToggle: () => {
                                    let t;
                                    return (
                                      (t = e.ref),
                                      ep((e) => {
                                        let s = new Set(e);
                                        return (
                                          s.has(t) ? s.delete(t) : s.add(t), s
                                        );
                                      })
                                    );
                                  },
                                  cardRef: (t) => {
                                    ek.current[e.ref] = t;
                                  },
                                },
                                e.ref
                              )
                            ),
                          }),
                        ],
                      }),
                    (0, t.jsx)("h3", { children: "Receipts" }),
                    (0, t.jsx)("p", {
                      className: et.default.help,
                      children:
                        "Every call is a signed receipt on your key. The verify page checks one against the keys the router publishes; the privacy label is the router's plain-language summary of how the call was served, where it publishes one.",
                    }),
                    (0, t.jsx)("ul", {
                      className: et.default.receipts,
                      children: eO.receipts.map((e, s) =>
                        (0, t.jsx)(
                          ef,
                          {
                            r: e,
                            label: ex[e.id],
                            onLabel: eI,
                            onCopy: eq,
                            copied: eb,
                          },
                          e.id || s
                        )
                      ),
                    }),
                  ],
                }),
            ],
          });
        },
      ],
      15061
    );
  },
]);
