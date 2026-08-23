import { hasInjectionContext as An, inject as On, effectScope as Sn, ref as Tn, markRaw as ge, toRaw as ue, computed as Cn, isRef as he, isReactive as Ze, toRef as Ar, watch as bn, unref as Or, reactive as Sr, getCurrentScope as Tr, onScopeDispose as Cr, nextTick as br, toRefs as Ir } from "vue";
import { c as In } from "./index-BL070snA.js";
var Dr = Object.create, Dn = Object.defineProperty, wr = Object.getOwnPropertyDescriptor, Xe = Object.getOwnPropertyNames, Rr = Object.getPrototypeOf, Pr = Object.prototype.hasOwnProperty, kr = (e, t) => function() {
  return e && (t = (0, e[Xe(e)[0]])(e = 0)), t;
}, Vr = (e, t) => function() {
  return t || (0, e[Xe(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, xr = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Xe(t))
      !Pr.call(e, o) && o !== n && Dn(e, o, { get: () => t[o], enumerable: !(r = wr(t, o)) || r.enumerable });
  return e;
}, Nr = (e, t, n) => (n = e != null ? Dr(Rr(e)) : {}, xr(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Dn(n, "default", { value: e, enumerable: !0 }),
  e
)), Oe = kr({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Fr = Vr({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    Oe(), t.exports = r;
    function n(u) {
      return u instanceof Buffer ? Buffer.from(u) : new u.constructor(u.buffer.slice(), u.byteOffset, u.length);
    }
    function r(u) {
      if (u = u || {}, u.circles) return o(u);
      const s = /* @__PURE__ */ new Map();
      if (s.set(Date, (f) => new Date(f)), s.set(Map, (f, h) => new Map(l(Array.from(f), h))), s.set(Set, (f, h) => new Set(l(Array.from(f), h))), u.constructorHandlers)
        for (const f of u.constructorHandlers)
          s.set(f[0], f[1]);
      let i = null;
      return u.proto ? m : _;
      function l(f, h) {
        const c = Object.keys(f), d = new Array(c.length);
        for (let v = 0; v < c.length; v++) {
          const p = c[v], g = f[p];
          typeof g != "object" || g === null ? d[p] = g : g.constructor !== Object && (i = s.get(g.constructor)) ? d[p] = i(g, h) : ArrayBuffer.isView(g) ? d[p] = n(g) : d[p] = h(g);
        }
        return d;
      }
      function _(f) {
        if (typeof f != "object" || f === null) return f;
        if (Array.isArray(f)) return l(f, _);
        if (f.constructor !== Object && (i = s.get(f.constructor)))
          return i(f, _);
        const h = {};
        for (const c in f) {
          if (Object.hasOwnProperty.call(f, c) === !1) continue;
          const d = f[c];
          typeof d != "object" || d === null ? h[c] = d : d.constructor !== Object && (i = s.get(d.constructor)) ? h[c] = i(d, _) : ArrayBuffer.isView(d) ? h[c] = n(d) : h[c] = _(d);
        }
        return h;
      }
      function m(f) {
        if (typeof f != "object" || f === null) return f;
        if (Array.isArray(f)) return l(f, m);
        if (f.constructor !== Object && (i = s.get(f.constructor)))
          return i(f, m);
        const h = {};
        for (const c in f) {
          const d = f[c];
          typeof d != "object" || d === null ? h[c] = d : d.constructor !== Object && (i = s.get(d.constructor)) ? h[c] = i(d, m) : ArrayBuffer.isView(d) ? h[c] = n(d) : h[c] = m(d);
        }
        return h;
      }
    }
    function o(u) {
      const s = [], i = [], l = /* @__PURE__ */ new Map();
      if (l.set(Date, (c) => new Date(c)), l.set(Map, (c, d) => new Map(m(Array.from(c), d))), l.set(Set, (c, d) => new Set(m(Array.from(c), d))), u.constructorHandlers)
        for (const c of u.constructorHandlers)
          l.set(c[0], c[1]);
      let _ = null;
      return u.proto ? h : f;
      function m(c, d) {
        const v = Object.keys(c), p = new Array(v.length);
        for (let g = 0; g < v.length; g++) {
          const T = v[g], S = c[T];
          if (typeof S != "object" || S === null)
            p[T] = S;
          else if (S.constructor !== Object && (_ = l.get(S.constructor)))
            p[T] = _(S, d);
          else if (ArrayBuffer.isView(S))
            p[T] = n(S);
          else {
            const V = s.indexOf(S);
            V !== -1 ? p[T] = i[V] : p[T] = d(S);
          }
        }
        return p;
      }
      function f(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return m(c, f);
        if (c.constructor !== Object && (_ = l.get(c.constructor)))
          return _(c, f);
        const d = {};
        s.push(c), i.push(d);
        for (const v in c) {
          if (Object.hasOwnProperty.call(c, v) === !1) continue;
          const p = c[v];
          if (typeof p != "object" || p === null)
            d[v] = p;
          else if (p.constructor !== Object && (_ = l.get(p.constructor)))
            d[v] = _(p, f);
          else if (ArrayBuffer.isView(p))
            d[v] = n(p);
          else {
            const g = s.indexOf(p);
            g !== -1 ? d[v] = i[g] : d[v] = f(p);
          }
        }
        return s.pop(), i.pop(), d;
      }
      function h(c) {
        if (typeof c != "object" || c === null) return c;
        if (Array.isArray(c)) return m(c, h);
        if (c.constructor !== Object && (_ = l.get(c.constructor)))
          return _(c, h);
        const d = {};
        s.push(c), i.push(d);
        for (const v in c) {
          const p = c[v];
          if (typeof p != "object" || p === null)
            d[v] = p;
          else if (p.constructor !== Object && (_ = l.get(p.constructor)))
            d[v] = _(p, h);
          else if (ArrayBuffer.isView(p))
            d[v] = n(p);
          else {
            const g = s.indexOf(p);
            g !== -1 ? d[v] = i[g] : d[v] = h(p);
          }
        }
        return s.pop(), i.pop(), d;
      }
    }
  }
});
Oe();
Oe();
Oe();
var wn = typeof navigator < "u", E = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof E.chrome < "u" && E.chrome.devtools;
wn && (E.self, E.top);
var dt;
typeof navigator < "u" && ((dt = navigator.userAgent) == null || dt.toLowerCase().includes("electron"));
Oe();
var Ur = Nr(Fr()), Lr = /(?:^|[-_/])(\w)/g;
function Br(e, t) {
  return t ? t.toUpperCase() : "";
}
function Mr(e) {
  return e && `${e}`.replace(Lr, Br);
}
function $r(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const r = n.lastIndexOf("/"), o = n.substring(r + 1);
  {
    const u = o.lastIndexOf(t);
    return o.substring(0, u);
  }
}
var Et = (0, Ur.default)({ circles: !0 });
const Kr = {
  trailing: !0
};
function se(e, t = 25, n = {}) {
  if (n = { ...Kr, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let r, o, u = [], s, i;
  const l = (_, m) => (s = jr(e, _, m), s.finally(() => {
    if (s = null, n.trailing && i && !o) {
      const f = l(_, i);
      return i = null, f;
    }
  }), s);
  return function(..._) {
    return s ? (n.trailing && (i = _), s) : new Promise((m) => {
      const f = !o && n.leading;
      clearTimeout(o), o = setTimeout(() => {
        o = null;
        const h = n.leading ? r : l(this, _);
        for (const c of u)
          c(h);
        u = [];
      }, t), f ? (r = l(this, _), m(r)) : u.push(m);
    });
  };
}
async function jr(e, t, n) {
  return await e.apply(t, n);
}
var Hr = Object.create, Rn = Object.defineProperty, zr = Object.getOwnPropertyDescriptor, Je = Object.getOwnPropertyNames, Gr = Object.getPrototypeOf, Yr = Object.prototype.hasOwnProperty, Wr = (e, t) => function() {
  return e && (t = (0, e[Je(e)[0]])(e = 0)), t;
}, Pn = (e, t) => function() {
  return t || (0, e[Je(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, qr = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Je(t))
      !Yr.call(e, o) && o !== n && Rn(e, o, { get: () => t[o], enumerable: !(r = zr(t, o)) || r.enumerable });
  return e;
}, Zr = (e, t, n) => (n = e != null ? Hr(Gr(e)) : {}, qr(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Rn(n, "default", { value: e, enumerable: !0 }),
  e
)), a = Wr({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Xr = Pn({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    a(), (function(n) {
      var r = {
        // latin
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "Ae",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "Oe",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "Ue",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "ae",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "oe",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "ue",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        ا: "a",
        أ: "a",
        إ: "i",
        آ: "aa",
        ؤ: "u",
        ئ: "e",
        ء: "a",
        ب: "b",
        ت: "t",
        ث: "th",
        ج: "j",
        ح: "h",
        خ: "kh",
        د: "d",
        ذ: "th",
        ر: "r",
        ز: "z",
        س: "s",
        ش: "sh",
        ص: "s",
        ض: "dh",
        ط: "t",
        ظ: "z",
        ع: "a",
        غ: "gh",
        ف: "f",
        ق: "q",
        ك: "k",
        ل: "l",
        م: "m",
        ن: "n",
        ه: "h",
        و: "w",
        ي: "y",
        ى: "a",
        ة: "h",
        ﻻ: "la",
        ﻷ: "laa",
        ﻹ: "lai",
        ﻵ: "laa",
        // Persian additional characters than Arabic
        گ: "g",
        چ: "ch",
        پ: "p",
        ژ: "zh",
        ک: "k",
        ی: "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        က: "k",
        ခ: "kh",
        ဂ: "g",
        ဃ: "ga",
        င: "ng",
        စ: "s",
        ဆ: "sa",
        ဇ: "z",
        "စျ": "za",
        ည: "ny",
        ဋ: "t",
        ဌ: "ta",
        ဍ: "d",
        ဎ: "da",
        ဏ: "na",
        တ: "t",
        ထ: "ta",
        ဒ: "d",
        ဓ: "da",
        န: "n",
        ပ: "p",
        ဖ: "pa",
        ဗ: "b",
        ဘ: "ba",
        မ: "m",
        ယ: "y",
        ရ: "ya",
        လ: "l",
        ဝ: "w",
        သ: "th",
        ဟ: "h",
        ဠ: "la",
        အ: "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        ဧ: "e",
        "၏": "-e",
        ဣ: "i",
        ဤ: "-i",
        ဉ: "u",
        ဦ: "-u",
        ဩ: "aw",
        "သြော": "aw",
        ဪ: "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        // Dhivehi
        ހ: "h",
        ށ: "sh",
        ނ: "n",
        ރ: "r",
        ބ: "b",
        ޅ: "lh",
        ކ: "k",
        އ: "a",
        ވ: "v",
        މ: "m",
        ފ: "f",
        ދ: "dh",
        ތ: "th",
        ލ: "l",
        ގ: "g",
        ޏ: "gn",
        ސ: "s",
        ޑ: "d",
        ޒ: "z",
        ޓ: "t",
        ޔ: "y",
        ޕ: "p",
        ޖ: "j",
        ޗ: "ch",
        ޘ: "tt",
        ޙ: "hh",
        ޚ: "kh",
        ޛ: "th",
        ޜ: "z",
        ޝ: "sh",
        ޞ: "s",
        ޟ: "d",
        ޠ: "t",
        ޡ: "z",
        ޢ: "a",
        ޣ: "gh",
        ޤ: "q",
        ޥ: "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        ა: "a",
        ბ: "b",
        გ: "g",
        დ: "d",
        ე: "e",
        ვ: "v",
        ზ: "z",
        თ: "t",
        ი: "i",
        კ: "k",
        ლ: "l",
        მ: "m",
        ნ: "n",
        ო: "o",
        პ: "p",
        ჟ: "zh",
        რ: "r",
        ს: "s",
        ტ: "t",
        უ: "u",
        ფ: "p",
        ქ: "k",
        ღ: "gh",
        ყ: "q",
        შ: "sh",
        ჩ: "ch",
        ც: "ts",
        ძ: "dz",
        წ: "ts",
        ჭ: "ch",
        ხ: "kh",
        ჯ: "j",
        ჰ: "h",
        // Greek
        α: "a",
        β: "v",
        γ: "g",
        δ: "d",
        ε: "e",
        ζ: "z",
        η: "i",
        θ: "th",
        ι: "i",
        κ: "k",
        λ: "l",
        μ: "m",
        ν: "n",
        ξ: "ks",
        ο: "o",
        π: "p",
        ρ: "r",
        σ: "s",
        τ: "t",
        υ: "y",
        φ: "f",
        χ: "x",
        ψ: "ps",
        ω: "o",
        ά: "a",
        έ: "e",
        ί: "i",
        ό: "o",
        ύ: "y",
        ή: "i",
        ώ: "o",
        ς: "s",
        ϊ: "i",
        ΰ: "y",
        ϋ: "y",
        ΐ: "i",
        Α: "A",
        Β: "B",
        Γ: "G",
        Δ: "D",
        Ε: "E",
        Ζ: "Z",
        Η: "I",
        Θ: "TH",
        Ι: "I",
        Κ: "K",
        Λ: "L",
        Μ: "M",
        Ν: "N",
        Ξ: "KS",
        Ο: "O",
        Π: "P",
        Ρ: "R",
        Σ: "S",
        Τ: "T",
        Υ: "Y",
        Φ: "F",
        Χ: "X",
        Ψ: "PS",
        Ω: "O",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ώ: "O",
        Ϊ: "I",
        Ϋ: "Y",
        // Latvian
        ā: "a",
        // 'č': 'c', // duplicate
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        // 'š': 's', // duplicate
        ū: "u",
        // 'ž': 'z', // duplicate
        Ā: "A",
        // 'Č': 'C', // duplicate
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        // 'Š': 'S', // duplicate
        Ū: "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        Ќ: "Kj",
        ќ: "kj",
        Љ: "Lj",
        љ: "lj",
        Њ: "Nj",
        њ: "nj",
        Тс: "Ts",
        тс: "ts",
        // Polish
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        // 'ó': 'o', // duplicate
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        // Ukranian
        Є: "Ye",
        І: "I",
        Ї: "Yi",
        Ґ: "G",
        є: "ye",
        і: "i",
        ї: "yi",
        ґ: "g",
        // Romanian
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sh",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sh",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        // Serbian
        ђ: "dj",
        ј: "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        ћ: "c",
        џ: "dz",
        Ђ: "Dj",
        Ј: "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        Ћ: "C",
        Џ: "Dz",
        // Slovak
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        // Turkish
        ş: "s",
        Ş: "S",
        ı: "i",
        İ: "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        ğ: "g",
        Ğ: "G",
        // Vietnamese
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        ƒ: "f",
        "™": "(TM)",
        "©": "(C)",
        œ: "oe",
        Œ: "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        º: "o",
        ª: "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        $: "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        元: "CNY",
        円: "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        лв: "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        ден: "MKD",
        zł: "PLN",
        "₽": "RUB",
        "₾": "GEL"
      }, o = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], u = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      }, s = {
        en: {},
        // default language
        az: {
          // Azerbaijani
          ç: "c",
          ə: "e",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ə: "E",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U"
        },
        cs: {
          // Czech
          č: "c",
          ď: "d",
          ě: "e",
          ň: "n",
          ř: "r",
          š: "s",
          ť: "t",
          ů: "u",
          ž: "z",
          Č: "C",
          Ď: "D",
          Ě: "E",
          Ň: "N",
          Ř: "R",
          Š: "S",
          Ť: "T",
          Ů: "U",
          Ž: "Z"
        },
        fi: {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        hu: {
          // Hungarian
          ä: "a",
          // ok
          Ä: "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          ö: "o",
          // ok
          Ö: "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          ü: "u",
          Ü: "U",
          ű: "u",
          Ű: "U"
        },
        lt: {
          // Lithuanian
          ą: "a",
          č: "c",
          ę: "e",
          ė: "e",
          į: "i",
          š: "s",
          ų: "u",
          ū: "u",
          ž: "z",
          Ą: "A",
          Č: "C",
          Ę: "E",
          Ė: "E",
          Į: "I",
          Š: "S",
          Ų: "U",
          Ū: "U"
        },
        lv: {
          // Latvian
          ā: "a",
          č: "c",
          ē: "e",
          ģ: "g",
          ī: "i",
          ķ: "k",
          ļ: "l",
          ņ: "n",
          š: "s",
          ū: "u",
          ž: "z",
          Ā: "A",
          Č: "C",
          Ē: "E",
          Ģ: "G",
          Ī: "i",
          Ķ: "k",
          Ļ: "L",
          Ņ: "N",
          Š: "S",
          Ū: "u",
          Ž: "Z"
        },
        pl: {
          // Polish
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
          Ą: "A",
          Ć: "C",
          Ę: "e",
          Ł: "L",
          Ń: "N",
          Ó: "O",
          Ś: "S",
          Ź: "Z",
          Ż: "Z"
        },
        sv: {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        sk: {
          // Slovak
          ä: "a",
          Ä: "A"
        },
        sr: {
          // Serbian
          љ: "lj",
          њ: "nj",
          Љ: "Lj",
          Њ: "Nj",
          đ: "dj",
          Đ: "Dj"
        },
        tr: {
          // Turkish
          Ü: "U",
          Ö: "O",
          ü: "u",
          ö: "o"
        }
      }, i = {
        ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        az: {},
        ca: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        cs: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        dv: {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        fa: {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        fi: {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        ge: {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        gr: {},
        hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        lt: {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        lv: {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        mk: {},
        nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        pl: {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        ro: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        sr: {},
        tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        uk: {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      }, l = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), _ = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), m = [".", "!", "~", "*", "'", "(", ")"].join(""), f = function(p, g) {
        var T = "-", S = "", V = "", fe = !0, N = {}, D, _e, L, O, y, R, F, U, Q, B, A, H, b, ee, Y = "";
        if (typeof p != "string")
          return "";
        if (typeof g == "string" && (T = g), F = i.en, U = s.en, typeof g == "object") {
          D = g.maintainCase || !1, N = g.custom && typeof g.custom == "object" ? g.custom : N, L = +g.truncate > 1 && g.truncate || !1, O = g.uric || !1, y = g.uricNoSlash || !1, R = g.mark || !1, fe = !(g.symbols === !1 || g.lang === !1), T = g.separator || T, O && (Y += l), y && (Y += _), R && (Y += m), F = g.lang && i[g.lang] && fe ? i[g.lang] : fe ? i.en : {}, U = g.lang && s[g.lang] ? s[g.lang] : g.lang === !1 || g.lang === !0 ? {} : s.en, g.titleCase && typeof g.titleCase.length == "number" && Array.prototype.toString.call(g.titleCase) ? (g.titleCase.forEach(function(M) {
            N[M + ""] = M + "";
          }), _e = !0) : _e = !!g.titleCase, g.custom && typeof g.custom.length == "number" && Array.prototype.toString.call(g.custom) && g.custom.forEach(function(M) {
            N[M + ""] = M + "";
          }), Object.keys(N).forEach(function(M) {
            var de;
            M.length > 1 ? de = new RegExp("\\b" + c(M) + "\\b", "gi") : de = new RegExp(c(M), "gi"), p = p.replace(de, N[M]);
          });
          for (A in N)
            Y += A;
        }
        for (Y += T, Y = c(Y), p = p.replace(/(^\s+|\s+$)/g, ""), b = !1, ee = !1, B = 0, H = p.length; B < H; B++)
          A = p[B], d(A, N) ? b = !1 : U[A] ? (A = b && U[A].match(/[A-Za-z0-9]/) ? " " + U[A] : U[A], b = !1) : A in r ? (B + 1 < H && o.indexOf(p[B + 1]) >= 0 ? (V += A, A = "") : ee === !0 ? (A = u[V] + r[A], V = "") : A = b && r[A].match(/[A-Za-z0-9]/) ? " " + r[A] : r[A], b = !1, ee = !1) : A in u ? (V += A, A = "", B === H - 1 && (A = u[V]), ee = !0) : /* process symbol chars */ F[A] && !(O && l.indexOf(A) !== -1) && !(y && _.indexOf(A) !== -1) ? (A = b || S.substr(-1).match(/[A-Za-z0-9]/) ? T + F[A] : F[A], A += p[B + 1] !== void 0 && p[B + 1].match(/[A-Za-z0-9]/) ? T : "", b = !0) : (ee === !0 ? (A = u[V] + A, V = "", ee = !1) : b && (/[A-Za-z0-9]/.test(A) || S.substr(-1).match(/A-Za-z0-9]/)) && (A = " " + A), b = !1), S += A.replace(new RegExp("[^\\w\\s" + Y + "_-]", "g"), T);
        return _e && (S = S.replace(/(\w)(\S*)/g, function(M, de, _t) {
          var Fe = de.toUpperCase() + (_t !== null ? _t : "");
          return Object.keys(N).indexOf(Fe.toLowerCase()) < 0 ? Fe : Fe.toLowerCase();
        })), S = S.replace(/\s+/g, T).replace(new RegExp("\\" + T + "+", "g"), T).replace(new RegExp("(^\\" + T + "+|\\" + T + "+$)", "g"), ""), L && S.length > L && (Q = S.charAt(L) === T, S = S.slice(0, L), Q || (S = S.slice(0, S.lastIndexOf(T)))), !D && !_e && (S = S.toLowerCase()), S;
      }, h = function(p) {
        return function(T) {
          return f(T, p);
        };
      }, c = function(p) {
        return p.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, d = function(v, p) {
        for (var g in p)
          if (p[g] === v)
            return !0;
      };
      if (typeof t < "u" && t.exports)
        t.exports = f, t.exports.createSlug = h;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return f;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = f, n.createSlug = h;
        } catch {
        }
    })(e);
  }
}), Jr = Pn({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    a(), t.exports = Xr();
  }
});
a();
a();
a();
a();
a();
a();
a();
a();
function Qr(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function eo(e) {
  const t = e.__file;
  if (t)
    return Mr($r(t, ".vue"));
}
function pt(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Qe(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function kn(e) {
  var t, n;
  const r = (t = e.subTree) == null ? void 0 : t.type, o = Qe(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === r : !1;
}
function Ve(e) {
  var t, n, r;
  const o = Qr(e?.type || {});
  if (o)
    return o;
  if (e?.root === e)
    return "Root";
  for (const s in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[s] === e?.type)
      return pt(e, s);
  for (const s in (r = e.appContext) == null ? void 0 : r.components)
    if (e.appContext.components[s] === e?.type)
      return pt(e, s);
  const u = eo(e?.type || {});
  return u || "Anonymous Component";
}
function to(e) {
  var t, n, r;
  const o = (r = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? r : 0, u = e === e?.root ? "root" : e.uid;
  return `${o}:${u}`;
}
function Me(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function no() {
  const e = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return e.right - e.left;
    },
    get height() {
      return e.bottom - e.top;
    }
  };
  return e;
}
var Te;
function ro(e) {
  return Te || (Te = document.createRange()), Te.selectNode(e), Te.getBoundingClientRect();
}
function oo(e) {
  const t = no();
  if (!e.children)
    return t;
  for (let n = 0, r = e.children.length; n < r; n++) {
    const o = e.children[n];
    let u;
    if (o.component)
      u = J(o.component);
    else if (o.el) {
      const s = o.el;
      s.nodeType === 1 || s.getBoundingClientRect ? u = s.getBoundingClientRect() : s.nodeType === 3 && s.data.trim() && (u = ro(s));
    }
    u && uo(t, u);
  }
  return t;
}
function uo(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var gt = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function J(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? gt : kn(e) ? oo(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? J(e.subTree.component) : gt;
}
a();
function et(e) {
  return kn(e) ? so(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function so(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...et(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Vn = "__vue-devtools-component-inspector__", xn = "__vue-devtools-component-inspector__card__", Nn = "__vue-devtools-component-inspector__name__", Fn = "__vue-devtools-component-inspector__indicator__", Un = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, io = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, ao = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function le() {
  return document.getElementById(Vn);
}
function lo() {
  return document.getElementById(xn);
}
function co() {
  return document.getElementById(Fn);
}
function fo() {
  return document.getElementById(Nn);
}
function tt(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function nt(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Vn, Object.assign(n.style, {
    ...Un,
    ...tt(e.bounds),
    ...e.style
  });
  const r = document.createElement("span");
  r.id = xn, Object.assign(r.style, {
    ...io,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const o = document.createElement("span");
  o.id = Nn, o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const u = document.createElement("i");
  return u.id = Fn, u.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(u.style, ao), r.appendChild(o), r.appendChild(u), n.appendChild(r), document.body.appendChild(n), n;
}
function rt(e) {
  const t = le(), n = lo(), r = fo(), o = co();
  t && (Object.assign(t.style, {
    ...Un,
    ...tt(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function _o(e) {
  const t = J(e);
  if (!t.width && !t.height)
    return;
  const n = Ve(e);
  le() ? rt({ bounds: t, name: n }) : nt({ bounds: t, name: n });
}
function Ln() {
  const e = le();
  e && (e.style.display = "none");
}
var $e = null;
function Ke(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && ($e = n, n.vnode.el)) {
      const o = J(n), u = Ve(n);
      le() ? rt({ bounds: o, name: u }) : nt({ bounds: o, name: u });
    }
  }
}
function Eo(e, t) {
  if (e.preventDefault(), e.stopPropagation(), $e) {
    const n = to($e);
    t(n);
  }
}
var Pe = null;
function po() {
  Ln(), window.removeEventListener("mouseover", Ke), window.removeEventListener("click", Pe, !0), Pe = null;
}
function go() {
  return window.addEventListener("mouseover", Ke), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), Eo(n, (r) => {
        window.removeEventListener("click", t, !0), Pe = null, window.removeEventListener("mouseover", Ke);
        const o = le();
        o && (o.style.display = "none"), e(JSON.stringify({ id: r }));
      });
    }
    Pe = t, window.addEventListener("click", t, !0);
  });
}
function ho(e) {
  const t = Me(k.value, e.id);
  if (t) {
    const [n] = et(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const r = J(t), o = document.createElement("div"), u = {
        ...tt(r),
        position: "absolute"
      };
      Object.assign(o.style, u), document.body.appendChild(o), o.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      const r = J(t);
      if (r.width || r.height) {
        const o = Ve(t), u = le();
        u ? rt({ ...e, name: o, bounds: r }) : nt({ ...e, name: o, bounds: r }), setTimeout(() => {
          u && (u.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
a();
var ht, mt;
(mt = (ht = E).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (ht.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function mo(e) {
  let t = 0;
  const n = setInterval(() => {
    E.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function vo() {
  const e = E.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function yo() {
  return new Promise((e) => {
    function t() {
      vo(), e(E.__VUE_INSPECTOR__);
    }
    E.__VUE_INSPECTOR__ ? t() : mo(() => {
      t();
    });
  });
}
a();
a();
function Ao(e) {
  return !!(e && e.__v_isReadonly);
}
function Bn(e) {
  return Ao(e) ? Bn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ue(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ee(e) {
  const t = e && e.__v_raw;
  return t ? Ee(t) : e;
}
var Oo = class {
  constructor() {
    this.refEditor = new So();
  }
  set(e, t, n, r) {
    const o = Array.isArray(t) ? t : t.split(".");
    for (; o.length > 1; ) {
      const i = o.shift();
      e instanceof Map ? e = e.get(i) : e instanceof Set ? e = Array.from(e.values())[i] : e = e[i], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const u = o[0], s = this.refEditor.get(e)[u];
    r ? r(e, u, n) : this.refEditor.isRef(s) ? this.refEditor.set(s, n) : e[u] = n;
  }
  get(e, t) {
    const n = Array.isArray(t) ? t : t.split(".");
    for (let r = 0; r < n.length; r++)
      if (e instanceof Map ? e = e.get(n[r]) : e = e[n[r]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e)
        return;
    return e;
  }
  has(e, t, n = !1) {
    if (typeof e > "u")
      return !1;
    const r = Array.isArray(t) ? t.slice() : t.split("."), o = n ? 2 : 1;
    for (; e && r.length > o; ) {
      const u = r.shift();
      e = e[u], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
  }
  createDefaultSetCallback(e) {
    return (t, n, r) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : Ee(t) instanceof Map ? t.delete(n) : Ee(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const o = t[e.newKey || n];
        this.refEditor.isRef(o) ? this.refEditor.set(o, r) : Ee(t) instanceof Map ? t.set(e.newKey || n, r) : Ee(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
      }
    };
  }
}, So = class {
  set(e, t) {
    if (Ue(e))
      e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((o) => e.add(o));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const o = new Set(e.keys());
        n.forEach((u) => {
          e.set(u, Reflect.get(t, u)), o.delete(u);
        }), o.forEach((u) => e.delete(u));
        return;
      }
      const r = new Set(Object.keys(e));
      n.forEach((o) => {
        Reflect.set(e, o, Reflect.get(t, o)), r.delete(o);
      }), r.forEach((o) => Reflect.deleteProperty(e, o));
    }
  }
  get(e) {
    return Ue(e) ? e.value : e;
  }
  isRef(e) {
    return Ue(e) || Bn(e);
  }
};
a();
a();
a();
var To = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Co() {
  if (!wn || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(To);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
a();
a();
a();
var vt, yt;
(yt = (vt = E).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (vt.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var bo = new Proxy(E.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Io(e, t) {
  I.timelineLayersState[t.id] = !1, bo.push({
    ...e,
    descriptorId: t.id,
    appRecord: Qe(t.app)
  });
}
var At, Ot;
(Ot = (At = E).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (At.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var ot = new Proxy(E.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), Mn = se(() => {
  ce.hooks.callHook("sendInspectorToClient", $n());
});
function Do(e, t) {
  var n, r;
  ot.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (r = e.stateFilterPlaceholder) != null ? r : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Qe(t.app)
  }), Mn();
}
function $n() {
  return ot.filter((e) => e.descriptor.app === k.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    var t;
    const n = e.descriptor, r = e.options;
    return {
      id: r.id,
      label: r.label,
      logo: n.logo,
      icon: `custom-ic-baseline-${(t = r?.icon) == null ? void 0 : t.replace(/_/g, "-")}`,
      packageName: n.packageName,
      homepage: n.homepage,
      pluginId: n.id
    };
  });
}
function Ce(e, t) {
  return ot.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
function wo() {
  const e = In();
  e.hook("addInspector", ({ inspector: r, plugin: o }) => {
    Do(r, o.descriptor);
  });
  const t = se(async ({ inspectorId: r, plugin: o }) => {
    var u;
    if (!r || !((u = o?.descriptor) != null && u.app) || I.highPerfModeEnabled)
      return;
    const s = Ce(r, o.descriptor.app), i = {
      app: o.descriptor.app,
      inspectorId: r,
      filter: s?.treeFilter || "",
      rootNodes: []
    };
    await new Promise((l) => {
      e.callHookWith(
        async (_) => {
          await Promise.all(_.map((m) => m(i))), l();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (l) => {
        await Promise.all(l.map((_) => _({
          inspectorId: r,
          rootNodes: i.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = se(async ({ inspectorId: r, plugin: o }) => {
    var u;
    if (!r || !((u = o?.descriptor) != null && u.app) || I.highPerfModeEnabled)
      return;
    const s = Ce(r, o.descriptor.app), i = {
      app: o.descriptor.app,
      inspectorId: r,
      nodeId: s?.selectedNodeId || "",
      state: null
    }, l = {
      currentTab: `custom-inspector:${r}`
    };
    i.nodeId && await new Promise((_) => {
      e.callHookWith(
        async (m) => {
          await Promise.all(m.map((f) => f(i, l))), _();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (_) => {
        await Promise.all(_.map((m) => m({
          inspectorId: r,
          nodeId: i.nodeId,
          state: i.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: r, nodeId: o, plugin: u }) => {
    const s = Ce(r, u.descriptor.app);
    s && (s.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: r, plugin: o }) => {
    Io(r, o.descriptor);
  }), e.hook("timelineEventAdded", ({ options: r, plugin: o }) => {
    var u;
    const s = ["performance", "component-event", "keyboard", "mouse"];
    I.highPerfModeEnabled || !((u = I.timelineLayersState) != null && u[o.descriptor.id]) && !s.includes(r.layerId) || e.callHookWith(
      async (i) => {
        await Promise.all(i.map((l) => l(r)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), e.hook("getComponentInstances", async ({ app: r }) => {
    const o = r.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!o)
      return null;
    const u = o.id.toString();
    return [...o.instanceMap].filter(([i]) => i.split(":")[0] === u).map(([, i]) => i);
  }), e.hook("getComponentBounds", async ({ instance: r }) => J(r)), e.hook("getComponentName", ({ instance: r }) => Ve(r)), e.hook("componentHighlight", ({ uid: r }) => {
    const o = k.value.instanceMap.get(r);
    o && _o(o);
  }), e.hook("componentUnhighlight", () => {
    Ln();
  }), e;
}
var St, Tt;
(Tt = (St = E).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (St.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Ct, bt;
(bt = (Ct = E).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Ct.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var It, Dt;
(Dt = (It = E).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (It.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var wt, Rt;
(Rt = (wt = E).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (wt.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Pt, kt;
(kt = (Pt = E).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Pt.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var X = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function Ro() {
  return {
    connected: !1,
    clientConnected: !1,
    vitePluginDetected: !0,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: !0,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: Co()
  };
}
var Vt, xt;
(xt = (Vt = E)[X]) != null || (Vt[X] = Ro());
var Po = se((e) => {
  ce.hooks.callHook("devtoolsStateUpdated", { state: e });
});
se((e, t) => {
  ce.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var xe = new Proxy(E.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? E.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : E.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), k = new Proxy(E.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? E.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? E.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : E.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function Kn() {
  Po({
    ...E[X],
    appRecords: xe.value,
    activeAppRecordId: k.id,
    tabs: E.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: E.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function ko(e) {
  E.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Kn();
}
function Vo(e) {
  E.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Kn();
}
var I = new Proxy(E[X], {
  get(e, t) {
    return t === "appRecords" ? xe : t === "activeAppRecordId" ? k.id : t === "tabs" ? E.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? E.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : E[X][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return { ...E[X] }, e[t] = n, E[X][t] = n, !0;
  }
});
function xo(e = {}) {
  var t, n, r;
  const { file: o, host: u, baseUrl: s = window.location.origin, line: i = 0, column: l = 0 } = e;
  if (o) {
    if (u === "chrome-extension") {
      const _ = o.replace(/\\/g, "\\\\"), m = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${m}__open-in-editor?file=${encodeURI(o)}`).then((f) => {
        if (!f.ok) {
          const h = `Opening component ${_} failed`;
          console.log(`%c${h}`, "color:red");
        }
      });
    } else if (I.vitePluginDetected) {
      const _ = (r = E.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? r : s;
      E.__VUE_INSPECTOR__.openInEditor(_, o, i, l);
    }
  }
}
a();
a();
a();
a();
a();
var Nt, Ft;
(Ft = (Nt = E).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Nt.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var ut = new Proxy(E.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function je(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function st(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function No(e) {
  var t, n, r;
  const o = (n = (t = ut.find((u) => {
    var s;
    return u[0].id === e && !!((s = u[0]) != null && s.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (r = o?.settings) != null ? r : null;
}
function jn(e, t) {
  var n, r, o;
  const u = st(e);
  if (u) {
    const s = localStorage.getItem(u);
    if (s)
      return JSON.parse(s);
  }
  if (e) {
    const s = (r = (n = ut.find((i) => i[0].id === e)) == null ? void 0 : n[0]) != null ? r : null;
    return je((o = s?.settings) != null ? o : {});
  }
  return je(t);
}
function Fo(e, t) {
  const n = st(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(je(t)));
}
function Uo(e, t, n) {
  const r = st(e), o = localStorage.getItem(r), u = JSON.parse(o || "{}"), s = {
    ...u,
    [t]: n
  };
  localStorage.setItem(r, JSON.stringify(s)), ce.hooks.callHookWith(
    (i) => {
      i.forEach((l) => l({
        pluginId: e,
        key: t,
        oldValue: u[t],
        newValue: n,
        settings: s
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
var Ut, Lt, x = (Lt = (Ut = E).__VUE_DEVTOOLS_HOOK) != null ? Lt : Ut.__VUE_DEVTOOLS_HOOK = In(), Lo = {
  vueAppInit(e) {
    x.hook("app:init", e);
  },
  vueAppUnmount(e) {
    x.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    x.hook("app:connected", e);
  },
  componentAdded(e) {
    return x.hook("component:added", e);
  },
  componentEmit(e) {
    return x.hook("component:emit", e);
  },
  componentUpdated(e) {
    return x.hook("component:updated", e);
  },
  componentRemoved(e) {
    return x.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    x.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return x.hook("perf:start", e);
  },
  perfEnd(e) {
    return x.hook("perf:end", e);
  }
}, Hn = {
  on: Lo,
  setupDevToolsPlugin(e, t) {
    return x.callHook("devtools-plugin:setup", e, t);
  }
}, Bo = class {
  constructor({ plugin: e, ctx: t }) {
    this.hooks = t.hooks, this.plugin = e;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (e) => {
        this.hooks.hook("visitComponentTree", e);
      },
      inspectComponent: (e) => {
        this.hooks.hook("inspectComponent", e);
      },
      editComponentState: (e) => {
        this.hooks.hook("editComponentState", e);
      },
      // custom inspector
      getInspectorTree: (e) => {
        this.hooks.hook("getInspectorTree", e);
      },
      getInspectorState: (e) => {
        this.hooks.hook("getInspectorState", e);
      },
      editInspectorState: (e) => {
        this.hooks.hook("editInspectorState", e);
      },
      // timeline
      inspectTimelineEvent: (e) => {
        this.hooks.hook("inspectTimelineEvent", e);
      },
      timelineCleared: (e) => {
        this.hooks.hook("timelineCleared", e);
      },
      // settings
      setPluginSettings: (e) => {
        this.hooks.hook("setPluginSettings", e);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(e) {
    var t;
    if (I.highPerfModeEnabled)
      return;
    const n = $n().find((r) => r.packageName === this.plugin.descriptor.packageName);
    if (n?.id) {
      if (e) {
        const r = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        x.callHook("component:updated", ...r);
      } else
        x.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Fo(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    I.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    I.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return I.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    I.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return jn(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(e) {
    return this.hooks.callHook("getComponentInstances", { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook("getComponentBounds", { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook("getComponentName", { instance: e });
  }
  highlightElement(e) {
    const t = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid: t });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
}, Mo = Bo;
a();
a();
a();
a();
var $o = "__vue_devtool_undefined__", Ko = "__vue_devtool_infinity__", jo = "__vue_devtool_negative_infinity__", Ho = "__vue_devtool_nan__";
a();
a();
var zo = {
  [$o]: "undefined",
  [Ho]: "NaN",
  [Ko]: "Infinity",
  [jo]: "-Infinity"
};
Object.entries(zo).reduce((e, [t, n]) => (e[n] = t, e), {});
a();
a();
a();
a();
a();
var Bt, Mt;
(Mt = (Bt = E).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Bt.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function zn(e, t) {
  return Hn.setupDevToolsPlugin(e, t);
}
function Go(e, t) {
  const [n, r] = e;
  if (n.app !== t)
    return;
  const o = new Mo({
    plugin: {
      setupFn: r,
      descriptor: n
    },
    ctx: ce
  });
  n.packageName === "vuex" && o.on.editInspectorState((u) => {
    o.sendInspectorState(u.inspectorId);
  }), r(o);
}
function Gn(e, t) {
  E.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || I.highPerfModeEnabled && !t?.inspectingComponent || (E.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), ut.forEach((n) => {
    Go(n, e);
  }));
}
a();
a();
var me = "__VUE_DEVTOOLS_ROUTER__", ie = "__VUE_DEVTOOLS_ROUTER_INFO__", $t, Kt;
(Kt = ($t = E)[ie]) != null || ($t[ie] = {
  currentRoute: null,
  routes: []
});
var jt, Ht;
(Ht = (jt = E)[me]) != null || (jt[me] = {});
new Proxy(E[ie], {
  get(e, t) {
    return E[ie][t];
  }
});
new Proxy(E[me], {
  get(e, t) {
    if (t === "value")
      return E[me];
  }
});
function Yo(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function it(e) {
  return e.map((t) => {
    let { path: n, name: r, children: o, meta: u } = t;
    return o?.length && (o = it(o)), {
      path: n,
      name: r,
      children: o,
      meta: u
    };
  });
}
function Wo(e) {
  if (e) {
    const { fullPath: t, hash: n, href: r, path: o, name: u, matched: s, params: i, query: l } = e;
    return {
      fullPath: t,
      hash: n,
      href: r,
      path: o,
      name: u,
      params: i,
      query: l,
      matched: it(s)
    };
  }
  return e;
}
function qo(e, t) {
  function n() {
    var r;
    const o = (r = e.app) == null ? void 0 : r.config.globalProperties.$router, u = Wo(o?.currentRoute.value), s = it(Yo(o)), i = console.warn;
    console.warn = () => {
    }, E[ie] = {
      currentRoute: u ? Et(u) : {},
      routes: Et(s)
    }, E[me] = o, console.warn = i;
  }
  n(), Hn.on.componentUpdated(se(() => {
    var r;
    ((r = t.value) == null ? void 0 : r.app) === e.app && (n(), !I.highPerfModeEnabled && ce.hooks.callHook("routerInfoUpdated", { state: E[ie] }));
  }, 200));
}
function Zo(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: k.value.app,
        rootNodes: []
      };
      return await new Promise((r) => {
        e.callHookWith(
          async (o) => {
            await Promise.all(o.map((u) => u(n))), r();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      }), n.rootNodes;
    },
    // get inspector state
    async getInspectorState(t) {
      const n = {
        ...t,
        app: k.value.app,
        state: null
      }, r = {
        currentTab: `custom-inspector:${t.inspectorId}`
      };
      return await new Promise((o) => {
        e.callHookWith(
          async (u) => {
            await Promise.all(u.map((s) => s(n, r))), o();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), n.state;
    },
    // edit inspector state
    editInspectorState(t) {
      const n = new Oo(), r = {
        ...t,
        app: k.value.app,
        set: (o, u = t.path, s = t.state.value, i) => {
          n.set(o, u, s, i || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith(
        (o) => {
          o.forEach((u) => u(r));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(t) {
      const n = Ce(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return go();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return po();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = Me(k.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return ho({ id: t });
    },
    // open in editor
    openInEditor: xo,
    // get vue inspector
    getVueInspector: yo,
    // toggle app
    toggleApp(t, n) {
      const r = xe.value.find((o) => o.id === t);
      r && (Vo(t), ko(r), qo(r, k), Mn(), Gn(r.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = Me(k.value, t);
      if (n) {
        const [r] = et(n);
        r && (E.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = r);
      }
    },
    updatePluginSettings(t, n, r) {
      Uo(t, n, r);
    },
    getPluginSettings(t) {
      return {
        options: No(t),
        values: jn(t)
      };
    }
  };
}
a();
var zt, Gt;
(Gt = (zt = E).__VUE_DEVTOOLS_ENV__) != null || (zt.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var Yt = wo(), Wt, qt;
(qt = (Wt = E).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (Wt.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Yt,
  get state() {
    return {
      ...I,
      activeAppRecordId: k.id,
      activeAppRecord: k.value,
      appRecords: xe.value
    };
  },
  api: Zo(Yt)
});
var ce = E.__VUE_DEVTOOLS_KIT_CONTEXT__;
a();
Zr(Jr());
var Zt, Xt;
(Xt = (Zt = E).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (Zt.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
a();
a();
function Xo(e) {
  I.highPerfModeEnabled = e ?? !I.highPerfModeEnabled, !e && k.value && Gn(k.value.app);
}
a();
a();
a();
function Jo(e) {
  I.devtoolsClientDetected = {
    ...I.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(I.devtoolsClientDetected).some(Boolean);
  Xo(!t);
}
var Jt, Qt;
(Qt = (Jt = E).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (Jt.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = Jo);
a();
a();
a();
a();
a();
a();
a();
var Qo = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, Yn = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new Qo();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}, eu = class extends Yn {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
a();
a();
function tu(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function nu(e, t) {
  const n = tu(e);
  if ("find" in n)
    return n.find(t);
  const r = n;
  for (let o = 0; o < r.length; o++) {
    const u = r[o];
    if (t(u))
      return u;
  }
}
function ae(e, t) {
  Object.entries(e).forEach(([n, r]) => t(r, n));
}
function be(e, t) {
  return e.indexOf(t) !== -1;
}
function en(e, t) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (t(r))
      return r;
  }
}
var ru = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return nu(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
a();
a();
var ou = (e) => Object.prototype.toString.call(e).slice(8, -1), Wn = (e) => typeof e > "u", uu = (e) => e === null, ve = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, He = (e) => ve(e) && Object.keys(e).length === 0, q = (e) => Array.isArray(e), su = (e) => typeof e == "string", iu = (e) => typeof e == "number" && !isNaN(e), au = (e) => typeof e == "boolean", lu = (e) => e instanceof RegExp, ye = (e) => e instanceof Map, Ae = (e) => e instanceof Set, qn = (e) => ou(e) === "Symbol", cu = (e) => e instanceof Date && !isNaN(e.valueOf()), fu = (e) => e instanceof Error, tn = (e) => typeof e == "number" && isNaN(e), _u = (e) => au(e) || uu(e) || Wn(e) || iu(e) || su(e) || qn(e), du = (e) => typeof e == "bigint", Eu = (e) => e === 1 / 0 || e === -1 / 0, pu = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), gu = (e) => e instanceof URL;
a();
var Zn = (e) => e.replace(/\./g, "\\."), Le = (e) => e.map(String).map(Zn).join("."), pe = (e) => {
  const t = [];
  let n = "";
  for (let o = 0; o < e.length; o++) {
    let u = e.charAt(o);
    if (u === "\\" && e.charAt(o + 1) === ".") {
      n += ".", o++;
      continue;
    }
    if (u === ".") {
      t.push(n), n = "";
      continue;
    }
    n += u;
  }
  const r = n;
  return t.push(r), t;
};
a();
function z(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r
  };
}
var Xn = [
  z(Wn, "undefined", () => null, () => {
  }),
  z(du, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  z(cu, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  z(fu, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((r) => {
      n[r] = e[r];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((r) => {
      n[r] = e[r];
    }), n;
  }),
  z(lu, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  z(
    Ae,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  z(ye, "map", (e) => [...e.entries()], (e) => new Map(e)),
  z((e) => tn(e) || Eu(e), "number", (e) => tn(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  z((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  z(gu, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Ne(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r
  };
}
var Jn = Ne((e, t) => qn(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const r = n.symbolRegistry.getValue(t[1]);
  if (!r)
    throw new Error("Trying to deserialize unknown symbol");
  return r;
}), hu = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Qn = Ne(pu, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = hu[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function er(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var tr = Ne(er, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n)
    return { ...e };
  const r = {};
  return n.forEach((o) => {
    r[o] = e[o];
  }), r;
}, (e, t, n) => {
  const r = n.classRegistry.getValue(t[1]);
  if (!r)
    throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(r.prototype), e);
}), nr = Ne((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const r = n.customTransformerRegistry.findByName(t[1]);
  if (!r)
    throw new Error("Trying to deserialize unknown custom value");
  return r.deserialize(e);
}), mu = [tr, Jn, nr, Qn], nn = (e, t) => {
  const n = en(mu, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const r = en(Xn, (o) => o.isApplicable(e, t));
  if (r)
    return {
      value: r.transform(e, t),
      type: r.annotation
    };
}, rr = {};
Xn.forEach((e) => {
  rr[e.annotation] = e;
});
var vu = (e, t, n) => {
  if (q(t))
    switch (t[0]) {
      case "symbol":
        return Jn.untransform(e, t, n);
      case "class":
        return tr.untransform(e, t, n);
      case "custom":
        return nr.untransform(e, t, n);
      case "typed-array":
        return Qn.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const r = rr[t];
    if (!r)
      throw new Error("Unknown transformation: " + t);
    return r.untransform(e, n);
  }
};
a();
var ne = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function or(e) {
  if (be(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (be(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (be(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var yu = (e, t) => {
  or(t);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Ae(e))
      e = ne(e, +r);
    else if (ye(e)) {
      const o = +r, u = +t[++n] == 0 ? "key" : "value", s = ne(e, o);
      switch (u) {
        case "key":
          e = s;
          break;
        case "value":
          e = e.get(s);
          break;
      }
    } else
      e = e[r];
  }
  return e;
}, ze = (e, t, n) => {
  if (or(t), t.length === 0)
    return n(e);
  let r = e;
  for (let u = 0; u < t.length - 1; u++) {
    const s = t[u];
    if (q(r)) {
      const i = +s;
      r = r[i];
    } else if (ve(r))
      r = r[s];
    else if (Ae(r)) {
      const i = +s;
      r = ne(r, i);
    } else if (ye(r)) {
      if (u === t.length - 2)
        break;
      const l = +s, _ = +t[++u] == 0 ? "key" : "value", m = ne(r, l);
      switch (_) {
        case "key":
          r = m;
          break;
        case "value":
          r = r.get(m);
          break;
      }
    }
  }
  const o = t[t.length - 1];
  if (q(r) ? r[+o] = n(r[+o]) : ve(r) && (r[o] = n(r[o])), Ae(r)) {
    const u = ne(r, +o), s = n(u);
    u !== s && (r.delete(u), r.add(s));
  }
  if (ye(r)) {
    const u = +t[t.length - 2], s = ne(r, u);
    switch (+o == 0 ? "key" : "value") {
      case "key": {
        const l = n(s);
        r.set(l, r.get(s)), l !== s && r.delete(s);
        break;
      }
      case "value": {
        r.set(s, n(r.get(s)));
        break;
      }
    }
  }
  return e;
};
function Ge(e, t, n = []) {
  if (!e)
    return;
  if (!q(e)) {
    ae(e, (u, s) => Ge(u, t, [...n, ...pe(s)]));
    return;
  }
  const [r, o] = e;
  o && ae(o, (u, s) => {
    Ge(u, t, [...n, ...pe(s)]);
  }), t(r, n);
}
function Au(e, t, n) {
  return Ge(t, (r, o) => {
    e = ze(e, o, (u) => vu(u, r, n));
  }), e;
}
function Ou(e, t) {
  function n(r, o) {
    const u = yu(e, pe(o));
    r.map(pe).forEach((s) => {
      e = ze(e, s, () => u);
    });
  }
  if (q(t)) {
    const [r, o] = t;
    r.forEach((u) => {
      e = ze(e, pe(u), () => e);
    }), o && ae(o, n);
  } else
    ae(t, n);
  return e;
}
var Su = (e, t) => ve(e) || q(e) || ye(e) || Ae(e) || er(e, t);
function Tu(e, t, n) {
  const r = n.get(e);
  r ? r.push(t) : n.set(e, [t]);
}
function Cu(e, t) {
  const n = {};
  let r;
  return e.forEach((o) => {
    if (o.length <= 1)
      return;
    t || (o = o.map((i) => i.map(String)).sort((i, l) => i.length - l.length));
    const [u, ...s] = o;
    u.length === 0 ? r = s.map(Le) : n[Le(u)] = s.map(Le);
  }), r ? He(n) ? [r] : [r, n] : He(n) ? void 0 : n;
}
var ur = (e, t, n, r, o = [], u = [], s = /* @__PURE__ */ new Map()) => {
  var i;
  const l = _u(e);
  if (!l) {
    Tu(e, o, t);
    const d = s.get(e);
    if (d)
      return r ? {
        transformedValue: null
      } : d;
  }
  if (!Su(e, n)) {
    const d = nn(e, n), v = d ? {
      transformedValue: d.value,
      annotations: [d.type]
    } : {
      transformedValue: e
    };
    return l || s.set(e, v), v;
  }
  if (be(u, e))
    return {
      transformedValue: null
    };
  const _ = nn(e, n), m = (i = _?.value) != null ? i : e, f = q(m) ? [] : {}, h = {};
  ae(m, (d, v) => {
    if (v === "__proto__" || v === "constructor" || v === "prototype")
      throw new Error(`Detected property ${v}. This is a prototype pollution risk, please remove it from your object.`);
    const p = ur(d, t, n, r, [...o, v], [...u, e], s);
    f[v] = p.transformedValue, q(p.annotations) ? h[v] = p.annotations : ve(p.annotations) && ae(p.annotations, (g, T) => {
      h[Zn(v) + "." + T] = g;
    });
  });
  const c = He(h) ? {
    transformedValue: f,
    annotations: _ ? [_.type] : void 0
  } : {
    transformedValue: f,
    annotations: _ ? [_.type, h] : h
  };
  return l || s.set(e, c), c;
};
a();
a();
function sr(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function rn(e) {
  return sr(e) === "Array";
}
function bu(e) {
  if (sr(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Iu(e, t, n, r, o) {
  const u = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
  u === "enumerable" && (e[t] = n), o && u === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Ye(e, t = {}) {
  if (rn(e))
    return e.map((o) => Ye(o, t));
  if (!bu(e))
    return e;
  const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
  return [...n, ...r].reduce((o, u) => {
    if (rn(t.props) && !t.props.includes(u))
      return o;
    const s = e[u], i = Ye(s, t);
    return Iu(o, u, i, e, t.nonenumerable), o;
  }, {});
}
var C = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new eu(), this.symbolRegistry = new Yn((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new ru(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = ur(e, t, this, this.dedupe), r = {
      json: n.transformedValue
    };
    n.annotations && (r.meta = {
      ...r.meta,
      values: n.annotations
    });
    const o = Cu(t, this.dedupe);
    return o && (r.meta = {
      ...r.meta,
      referentialEqualities: o
    }), r;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let r = Ye(t);
    return n?.values && (r = Au(r, n.values, this)), n?.referentialEqualities && (r = Ou(r, n.referentialEqualities)), r;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
C.defaultInstance = new C();
C.serialize = C.defaultInstance.serialize.bind(C.defaultInstance);
C.deserialize = C.defaultInstance.deserialize.bind(C.defaultInstance);
C.stringify = C.defaultInstance.stringify.bind(C.defaultInstance);
C.parse = C.defaultInstance.parse.bind(C.defaultInstance);
C.registerClass = C.defaultInstance.registerClass.bind(C.defaultInstance);
C.registerSymbol = C.defaultInstance.registerSymbol.bind(C.defaultInstance);
C.registerCustom = C.defaultInstance.registerCustom.bind(C.defaultInstance);
C.allowErrorProps = C.defaultInstance.allowErrorProps.bind(C.defaultInstance);
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
a();
var on, un;
(un = (on = E).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (on.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var sn, an;
(an = (sn = E).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (sn.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var ln, cn;
(cn = (ln = E).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (ln.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var fn, _n;
(_n = (fn = E).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (fn.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var dn, En;
(En = (dn = E).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (dn.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var pn, gn;
(gn = (pn = E).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (pn.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
a();
a();
a();
a();
a();
a();
a();
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const oe = typeof window < "u";
let at;
const Se = (e) => at = e, Du = () => An() && On(lt) || at, lt = (
  /* istanbul ignore next */
  Symbol()
);
function We(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var j;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(j || (j = {}));
const hn = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function wu(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function ct(e, t, n) {
  const r = new XMLHttpRequest();
  r.open("GET", e), r.responseType = "blob", r.onload = function() {
    lr(r.response, t, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function ir(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Ie(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = new MouseEvent("click", {
      bubbles: !0,
      cancelable: !0,
      view: window,
      detail: 0,
      screenX: 80,
      screenY: 20,
      clientX: 80,
      clientY: 20,
      ctrlKey: !1,
      altKey: !1,
      shiftKey: !1,
      metaKey: !1,
      button: 0,
      relatedTarget: null
    });
    e.dispatchEvent(n);
  }
}
const De = typeof navigator == "object" ? navigator : { userAgent: "" }, ar = /Macintosh/.test(De.userAgent) && /AppleWebKit/.test(De.userAgent) && !/Safari/.test(De.userAgent), lr = oe ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ar ? Ru : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in De ? Pu : (
      // Fallback to using FileReader and a popup
      ku
    )
  )
) : () => {
};
function Ru(e, t = "download", n) {
  const r = document.createElement("a");
  r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin !== location.origin ? ir(r.href) ? ct(e, t, n) : (r.target = "_blank", Ie(r)) : Ie(r)) : (r.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    Ie(r);
  }, 0));
}
function Pu(e, t = "download", n) {
  if (typeof e == "string")
    if (ir(e))
      ct(e, t, n);
    else {
      const r = document.createElement("a");
      r.href = e, r.target = "_blank", setTimeout(function() {
        Ie(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(wu(e, n), t);
}
function ku(e, t, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string")
    return ct(e, t, n);
  const o = e.type === "application/octet-stream", u = /constructor/i.test(String(hn.HTMLElement)) || "safari" in hn, s = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((s || o && u || ar) && typeof FileReader < "u") {
    const i = new FileReader();
    i.onloadend = function() {
      let l = i.result;
      if (typeof l != "string")
        throw r = null, new Error("Wrong reader.result type");
      l = s ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = l : location.assign(l), r = null;
    }, i.readAsDataURL(e);
  } else {
    const i = URL.createObjectURL(e);
    r ? r.location.assign(i) : location.href = i, r = null, setTimeout(function() {
      URL.revokeObjectURL(i);
    }, 4e4);
  }
}
function w(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function ft(e) {
  return "_a" in e && "install" in e;
}
function cr() {
  if (!("clipboard" in navigator))
    return w("Your browser doesn't support the Clipboard API", "error"), !0;
}
function fr(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (w('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Vu(e) {
  if (!cr())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), w("Global state copied to clipboard.");
    } catch (t) {
      if (fr(t))
        return;
      w("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function xu(e) {
  if (!cr())
    try {
      _r(e, JSON.parse(await navigator.clipboard.readText())), w("Global state pasted from clipboard.");
    } catch (t) {
      if (fr(t))
        return;
      w("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Nu(e) {
  try {
    lr(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    w("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let G;
function Fu() {
  G || (G = document.createElement("input"), G.type = "file", G.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      G.onchange = async () => {
        const r = G.files;
        if (!r)
          return t(null);
        const o = r.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, G.oncancel = () => t(null), G.onerror = n, G.click();
    });
  }
  return e;
}
async function Uu(e) {
  try {
    const n = await Fu()();
    if (!n)
      return;
    const { text: r, file: o } = n;
    _r(e, JSON.parse(r)), w(`Global state imported from "${o.name}".`);
  } catch (t) {
    w("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function _r(e, t) {
  for (const n in t) {
    const r = e.state.value[n];
    r ? Object.assign(r, t[n]) : e.state.value[n] = t[n];
  }
}
function K(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const dr = "🍍 Pinia (root)", we = "_root";
function Lu(e) {
  return ft(e) ? {
    id: we,
    label: dr
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Bu(e) {
  if (ft(e)) {
    const n = Array.from(e._s.keys()), r = e._s;
    return {
      state: n.map((u) => ({
        editable: !0,
        key: u,
        value: e.state.value[u]
      })),
      getters: n.filter((u) => r.get(u)._getters).map((u) => {
        const s = r.get(u);
        return {
          editable: !1,
          key: u,
          value: s._getters.reduce((i, l) => (i[l] = s[l], i), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function Mu(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: K(e.type),
    key: K(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function $u(e) {
  switch (e) {
    case j.direct:
      return "mutation";
    case j.patchFunction:
      return "$patch";
    case j.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let re = !0;
const Re = [], Z = "pinia:mutations", P = "pinia", { assign: Ku } = Object, ke = (e) => "🍍 " + e;
function ju(e, t) {
  zn({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Re,
    app: e
  }, (n) => {
    typeof n.now != "function" && w("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: Z,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: P,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Vu(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await xu(t), n.sendInspectorTree(P), n.sendInspectorState(P);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Nu(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Uu(t), n.sendInspectorTree(P), n.sendInspectorState(P);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (r) => {
            const o = t._s.get(r);
            o ? typeof o.$reset != "function" ? w(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`, "warn") : (o.$reset(), w(`Store "${r}" reset.`)) : w(`Cannot reset "${r}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((r) => {
      const o = r.componentInstance && r.componentInstance.proxy;
      if (o && o._pStores) {
        const u = r.componentInstance.proxy._pStores;
        Object.values(u).forEach((s) => {
          r.instanceData.state.push({
            type: ke(s.$id),
            key: "state",
            editable: !0,
            value: s._isOptionsAPI ? {
              _custom: {
                value: ue(s.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => s.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(s.$state).reduce((i, l) => (i[l] = s.$state[l], i), {})
            )
          }), s._getters && s._getters.length && r.instanceData.state.push({
            type: ke(s.$id),
            key: "getters",
            editable: !1,
            value: s._getters.reduce((i, l) => {
              try {
                i[l] = s[l];
              } catch (_) {
                i[l] = _;
              }
              return i;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((r) => {
      if (r.app === e && r.inspectorId === P) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), r.rootNodes = (r.filter ? o.filter((u) => "$id" in u ? u.$id.toLowerCase().includes(r.filter.toLowerCase()) : dr.toLowerCase().includes(r.filter.toLowerCase())) : o).map(Lu);
      }
    }), globalThis.$pinia = t, n.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === P) {
        const o = r.nodeId === we ? t : t._s.get(r.nodeId);
        if (!o)
          return;
        o && (r.nodeId !== we && (globalThis.$store = ue(o)), r.state = Bu(o));
      }
    }), n.on.editInspectorState((r) => {
      if (r.app === e && r.inspectorId === P) {
        const o = r.nodeId === we ? t : t._s.get(r.nodeId);
        if (!o)
          return w(`store "${r.nodeId}" not found`, "error");
        const { path: u } = r;
        ft(o) ? u.unshift("state") : (u.length !== 1 || !o._customProperties.has(u[0]) || u[0] in o.$state) && u.unshift("$state"), re = !1, r.set(o, u, r.state.value), re = !0;
      }
    }), n.on.editComponentState((r) => {
      if (r.type.startsWith("🍍")) {
        const o = r.type.replace(/^🍍\s*/, ""), u = t._s.get(o);
        if (!u)
          return w(`store "${o}" not found`, "error");
        const { path: s } = r;
        if (s[0] !== "state")
          return w(`Invalid path for store "${o}":
${s}
Only state can be modified.`);
        s[0] = "$state", re = !1, r.set(u, s, r.state.value), re = !0;
      }
    });
  });
}
function Hu(e, t) {
  Re.includes(ke(t.$id)) || Re.push(ke(t.$id)), zn({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Re,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: s, onError: i, name: l, args: _ }) => {
      const m = Er++;
      n.addTimelineEvent({
        layerId: Z,
        event: {
          time: r(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: K(t.$id),
            action: K(l),
            args: _
          },
          groupId: m
        }
      }), s((f) => {
        W = void 0, n.addTimelineEvent({
          layerId: Z,
          event: {
            time: r(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: K(t.$id),
              action: K(l),
              args: _,
              result: f
            },
            groupId: m
          }
        });
      }), i((f) => {
        W = void 0, n.addTimelineEvent({
          layerId: Z,
          event: {
            time: r(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: K(t.$id),
              action: K(l),
              args: _,
              error: f
            },
            groupId: m
          }
        });
      });
    }, !0), t._customProperties.forEach((s) => {
      bn(() => Or(t[s]), (i, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(P), re && n.addTimelineEvent({
          layerId: Z,
          event: {
            time: r(),
            title: "Change",
            subtitle: s,
            data: {
              newValue: i,
              oldValue: l
            },
            groupId: W
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: s, type: i }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(P), !re)
        return;
      const _ = {
        time: r(),
        title: $u(i),
        data: Ku({ store: K(t.$id) }, Mu(s)),
        groupId: W
      };
      i === j.patchFunction ? _.subtitle = "⤵️" : i === j.patchObject ? _.subtitle = "🧩" : s && !Array.isArray(s) && (_.subtitle = s.type), s && (_.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: s
        }
      }), n.addTimelineEvent({
        layerId: Z,
        event: _
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = ge((s) => {
      o(s), n.addTimelineEvent({
        layerId: Z,
        event: {
          time: r(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: K(t.$id),
            info: K("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(P), n.sendInspectorState(P);
    });
    const { $dispose: u } = t;
    t.$dispose = () => {
      u(), n.notifyComponentUpdate(), n.sendInspectorTree(P), n.sendInspectorState(P), n.getSettings().logStoreChanges && w(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(P), n.sendInspectorState(P), n.getSettings().logStoreChanges && w(`"${t.$id}" store installed 🆕`);
  });
}
let Er = 0, W;
function mn(e, t, n) {
  const r = t.reduce((o, u) => (o[u] = ue(e)[u], o), {});
  for (const o in r)
    e[o] = function() {
      const u = Er, s = n ? new Proxy(e, {
        get(...l) {
          return W = u, Reflect.get(...l);
        },
        set(...l) {
          return W = u, Reflect.set(...l);
        }
      }) : e;
      W = u;
      const i = r[o].apply(s, arguments);
      return W = void 0, i;
    };
}
function zu({ app: e, store: t, options: n }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!n.state, !t._p._testing) {
      mn(t, Object.keys(n.actions), t._isOptionsAPI);
      const r = t._hotUpdate;
      ue(t)._hotUpdate = function(o) {
        r.apply(this, arguments), mn(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    Hu(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function Gu() {
  const e = Sn(!0), t = e.run(() => Tn({}));
  let n = [], r = [];
  const o = ge({
    install(u) {
      Se(o), o._a = u, u.provide(lt, o), u.config.globalProperties.$pinia = o, oe && ju(u, o), r.forEach((s) => n.push(s)), r = [];
    },
    use(u) {
      return this._a ? n.push(u) : r.push(u), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return oe && typeof Proxy < "u" && o.use(zu), o;
}
function Yu(e) {
  e._e.stop(), e._s.clear(), e._p.splice(0), e.state.value = {}, e._a = null;
}
function Wu(e, t) {
  return () => {
  };
}
const pr = () => {
};
function vn(e, t, n, r = pr) {
  e.add(t);
  const o = () => {
    e.delete(t) && r();
  };
  return !n && Tr() && Cr(o), o;
}
function te(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const qu = (e) => e(), yn = Symbol(), Be = Symbol();
function qe(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    We(o) && We(r) && e.hasOwnProperty(n) && !he(r) && !Ze(r) ? e[n] = qe(o, r) : e[n] = r;
  }
  return e;
}
const gr = (
  /* istanbul ignore next */
  Symbol()
);
function Zu(e) {
  return Object.defineProperty(e, gr, {});
}
function hr(e) {
  return !We(e) || !Object.prototype.hasOwnProperty.call(e, gr);
}
const { assign: $ } = Object;
function Xu(e) {
  return !!(he(e) && e.effect);
}
function Ju(e, t, n, r) {
  const { state: o, actions: u, getters: s } = t, i = n.state.value[e];
  let l;
  function _() {
    i || (n.state.value[e] = o ? o() : {});
    const m = Ir(n.state.value[e]);
    return $(m, u, Object.keys(s || {}).reduce((f, h) => (f[h] = ge(Cn(() => {
      Se(n);
      const c = n._s.get(e);
      return s[h].call(c, c);
    })), f), {}));
  }
  return l = mr(e, _, t, n, r, !0), l;
}
function mr(e, t, n = {}, r, o, u) {
  let s;
  const i = $({ actions: {} }, n), l = { deep: !0 };
  let _, m, f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), c;
  const d = r.state.value[e];
  !u && !d && (r.state.value[e] = {});
  const v = Tn({});
  let p;
  function g(O) {
    let y;
    _ = m = !1, typeof O == "function" ? (O(r.state.value[e]), y = {
      type: j.patchFunction,
      storeId: e,
      events: c
    }) : (qe(r.state.value[e], O), y = {
      type: j.patchObject,
      payload: O,
      storeId: e,
      events: c
    });
    const R = p = Symbol();
    br().then(() => {
      p === R && (_ = !0);
    }), m = !0, te(f, y, r.state.value[e]);
  }
  const T = u ? function() {
    const { state: y } = n, R = y ? y() : {};
    this.$patch((F) => {
      $(F, R);
    });
  } : (
    /* istanbul ignore next */
    pr
  );
  function S() {
    s.stop(), f.clear(), h.clear(), r._s.delete(e);
  }
  const V = (O, y = "") => {
    if (yn in O)
      return O[Be] = y, O;
    const R = function() {
      Se(r);
      const F = Array.from(arguments), U = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set();
      function B(b) {
        U.add(b);
      }
      function A(b) {
        Q.add(b);
      }
      te(h, {
        args: F,
        name: R[Be],
        store: D,
        after: B,
        onError: A
      });
      let H;
      try {
        H = O.apply(this && this.$id === e ? this : D, F);
      } catch (b) {
        throw te(Q, b), b;
      }
      return H instanceof Promise ? H.then((b) => (te(U, b), b)).catch((b) => (te(Q, b), Promise.reject(b))) : (te(U, H), H);
    };
    return R[yn] = !0, R[Be] = y, R;
  }, fe = /* @__PURE__ */ ge({
    actions: {},
    getters: {},
    state: [],
    hotState: v
  }), N = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: vn.bind(null, h),
    $patch: g,
    $reset: T,
    $subscribe(O, y = {}) {
      const R = vn(f, O, y.detached, () => F()), F = s.run(() => bn(() => r.state.value[e], (U) => {
        (y.flush === "sync" ? m : _) && O({
          storeId: e,
          type: j.direct,
          events: c
        }, U);
      }, $({}, l, y)));
      return R;
    },
    $dispose: S
  }, D = Sr(oe ? $(
    {
      _hmrPayload: fe,
      _customProperties: ge(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    N
    // must be added later
    // setupStore
  ) : N);
  r._s.set(e, D);
  const L = (r._a && r._a.runWithContext || qu)(() => r._e.run(() => (s = Sn()).run(() => t({ action: V }))));
  for (const O in L) {
    const y = L[O];
    if (he(y) && !Xu(y) || Ze(y))
      u || (d && hr(y) && (he(y) ? y.value = d[O] : qe(y, d[O])), r.state.value[e][O] = y);
    else if (typeof y == "function") {
      const R = V(y, O);
      L[O] = R, i.actions[O] = y;
    }
  }
  if ($(D, L), $(ue(D), L), Object.defineProperty(D, "$state", {
    get: () => r.state.value[e],
    set: (O) => {
      g((y) => {
        $(y, O);
      });
    }
  }), oe) {
    const O = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((y) => {
      Object.defineProperty(D, y, $({ value: D[y] }, O));
    });
  }
  return r._p.forEach((O) => {
    if (oe) {
      const y = s.run(() => O({
        store: D,
        app: r._a,
        pinia: r,
        options: i
      }));
      Object.keys(y || {}).forEach((R) => D._customProperties.add(R)), $(D, y);
    } else
      $(D, s.run(() => O({
        store: D,
        app: r._a,
        pinia: r,
        options: i
      })));
  }), d && u && n.hydrate && n.hydrate(D.$state, d), _ = !0, m = !0, D;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qu(e, t, n) {
  let r;
  const o = typeof t == "function";
  r = o ? n : t;
  function u(s, i) {
    const l = An();
    return s = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    s || (l ? On(lt, null) : null), s && Se(s), s = at, s._s.has(e) || (o ? mr(e, t, r, s) : Ju(e, r, s)), s._s.get(e);
  }
  return u.$id = e, u;
}
let vr = "Store";
function es(e) {
  vr = e;
}
function ts(...e) {
  return e.reduce((t, n) => (t[n.$id + vr] = function() {
    return n(this.$pinia);
  }, t), {});
}
function yr(e, t) {
  return Array.isArray(t) ? t.reduce((n, r) => (n[r] = function() {
    return e(this.$pinia)[r];
  }, n), {}) : Object.keys(t).reduce((n, r) => (n[r] = function() {
    const o = e(this.$pinia), u = t[r];
    return typeof u == "function" ? u.call(this, o) : (
      // @ts-expect-error: FIXME: should work?
      o[u]
    );
  }, n), {});
}
const ns = yr;
function rs(e, t) {
  return Array.isArray(t) ? t.reduce((n, r) => (n[r] = function(...o) {
    return e(this.$pinia)[r](...o);
  }, n), {}) : Object.keys(t).reduce((n, r) => (n[r] = function(...o) {
    return e(this.$pinia)[t[r]](...o);
  }, n), {});
}
function os(e, t) {
  return Array.isArray(t) ? t.reduce((n, r) => (n[r] = {
    get() {
      return e(this.$pinia)[r];
    },
    set(o) {
      return e(this.$pinia)[r] = o;
    }
  }, n), {}) : Object.keys(t).reduce((n, r) => (n[r] = {
    get() {
      return e(this.$pinia)[t[r]];
    },
    set(o) {
      return e(this.$pinia)[t[r]] = o;
    }
  }, n), {});
}
function us(e) {
  const t = ue(e), n = {};
  for (const r in t) {
    const o = t[r];
    o.effect ? n[r] = // ...
    Cn({
      get: () => e[r],
      set(u) {
        e[r] = u;
      }
    }) : (he(o) || Ze(o)) && (n[r] = // ---
    Ar(e, r));
  }
  return n;
}
const as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get MutationType() {
    return j;
  },
  acceptHMRUpdate: Wu,
  createPinia: Gu,
  defineStore: Qu,
  disposePinia: Yu,
  getActivePinia: Du,
  mapActions: rs,
  mapGetters: ns,
  mapState: yr,
  mapStores: ts,
  mapWritableState: os,
  setActivePinia: Se,
  setMapStoreSuffix: es,
  shouldHydrate: hr,
  skipHydrate: Zu,
  storeToRefs: us
}, Symbol.toStringTag, { value: "Module" }));
export {
  j as MutationType,
  Wu as acceptHMRUpdate,
  Gu as createPinia,
  as as default,
  Qu as defineStore,
  Yu as disposePinia,
  Du as getActivePinia,
  rs as mapActions,
  ns as mapGetters,
  yr as mapState,
  ts as mapStores,
  os as mapWritableState,
  Se as setActivePinia,
  es as setMapStoreSuffix,
  hr as shouldHydrate,
  Zu as skipHydrate,
  us as storeToRefs
};
