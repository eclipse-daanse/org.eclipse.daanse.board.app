(function(){var i="ui.vue.widget.chart",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings-container[data-v-7701abd6]{padding:16px}.settings-block[data-v-7701abd6]{display:flex;flex-direction:column;gap:12px}.settings-block h3[data-v-7701abd6]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--va-primary)}\n";})();
import { EVENT_ACTIONS_REGISTRY as Sa, EVENT_REGISTRY_ID as Ma, EVENT_ACTIONS_REGISTRY_ID as ka } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Ca, deactivate as Pa, component as Aa, inject as us } from "@eclipse-daanse/tsm";
import { defineComponent as Nn, shallowRef as tr, h as _i, ref as Ft, onMounted as On, onUnmounted as er, watch as Ze, toRaw as wi, nextTick as Da, version as Ta, isProxy as nr, mergeModels as Oa, toRefs as Va, useModel as ir, inject as Si, computed as it, createElementBlock as gt, openBlock as R, withModifiers as La, createBlock as Y, createCommentVNode as F, resolveDynamicComponent as Ia, resolveComponent as ye, Fragment as Ut, createVNode as z, withCtx as U, createElementVNode as W, createTextVNode as Ot, renderList as xe, toDisplayString as ze, unref as at } from "vue";
import { VariableWrapper as I, useVariableRepository as Ra, useDatasourceRepository as za } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as Ea } from "vue-router";
import { Documentation as sn, Attribute as on, Reference as G, ModelClass as sr } from "org.eclipse.daanse.board.app.lib.annotations";
import { WidgetAction as rn, WidgetActionInterface as Ba, Payload as fs } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as lt } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Fa } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Wa } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ha = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2049.5C22.5%2047.0147%2024.5147%2045%2027%2045H33C35.4853%2045%2037.5%2047.0147%2037.5%2049.5V93C37.5%2095.4853%2035.4853%2097.5%2033%2097.5H27C24.5147%2097.5%2022.5%2095.4853%2022.5%2093V49.5Z'%20fill='%23606060'/%3e%3cpath%20d='M52.5%2027C52.5%2024.5147%2054.5147%2022.5%2057%2022.5H63C65.4853%2022.5%2067.5%2024.5147%2067.5%2027V93C67.5%2095.4853%2065.4853%2097.5%2063%2097.5H57C54.5147%2097.5%2052.5%2095.4853%2052.5%2093V27Z'%20fill='%23606060'/%3e%3cpath%20d='M82.5%2072C82.5%2069.5147%2084.5147%2067.5%2087%2067.5H93C95.4853%2067.5%2097.5%2069.5147%2097.5%2072V93C97.5%2095.4853%2095.4853%2097.5%2093%2097.5H87C84.5147%2097.5%2082.5%2095.4853%2082.5%2093V72Z'%20fill='%23606060'/%3e%3c/svg%3e";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function an(n) {
  return n + 0.5 | 0;
}
const Xt = (n, t, e) => Math.max(Math.min(n, e), t);
function Ye(n) {
  return Xt(an(n * 2.55), 0, 255);
}
function qt(n) {
  return Xt(an(n * 255), 0, 255);
}
function Bt(n) {
  return Xt(an(n / 2.55) / 100, 0, 1);
}
function gs(n) {
  return Xt(an(n * 100), 0, 100);
}
const At = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Mi = [..."0123456789ABCDEF"], ja = (n) => Mi[n & 15], Na = (n) => Mi[(n & 240) >> 4] + Mi[n & 15], pn = (n) => (n & 240) >> 4 === (n & 15), Ya = (n) => pn(n.r) && pn(n.g) && pn(n.b) && pn(n.a);
function Ua(n) {
  var t = n.length, e;
  return n[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & At[n[1]] * 17,
    g: 255 & At[n[2]] * 17,
    b: 255 & At[n[3]] * 17,
    a: t === 5 ? At[n[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: At[n[1]] << 4 | At[n[2]],
    g: At[n[3]] << 4 | At[n[4]],
    b: At[n[5]] << 4 | At[n[6]],
    a: t === 9 ? At[n[7]] << 4 | At[n[8]] : 255
  })), e;
}
const $a = (n, t) => n < 255 ? t(n) : "";
function Xa(n) {
  var t = Ya(n) ? ja : Na;
  return n ? "#" + t(n.r) + t(n.g) + t(n.b) + $a(n.a, t) : void 0;
}
const Ga = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function or(n, t, e) {
  const i = t * Math.min(e, 1 - e), s = (o, r = (o + n / 30) % 12) => e - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function Ka(n, t, e) {
  const i = (s, o = (s + n / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function qa(n, t, e) {
  const i = or(n, 1, 0.5);
  let s;
  for (t + e > 1 && (s = 1 / (t + e), t *= s, e *= s), s = 0; s < 3; s++)
    i[s] *= 1 - t - e, i[s] += t;
  return i;
}
function Ja(n, t, e, i, s) {
  return n === s ? (t - e) / i + (t < e ? 6 : 0) : t === s ? (e - n) / i + 2 : (n - t) / i + 4;
}
function Fi(n) {
  const e = n.r / 255, i = n.g / 255, s = n.b / 255, o = Math.max(e, i, s), r = Math.min(e, i, s), a = (o + r) / 2;
  let l, c, d;
  return o !== r && (d = o - r, c = a > 0.5 ? d / (2 - o - r) : d / (o + r), l = Ja(e, i, s, d, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Hi(n, t, e, i) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map(qt);
}
function ji(n, t, e) {
  return Hi(or, n, t, e);
}
function Za(n, t, e) {
  return Hi(qa, n, t, e);
}
function Qa(n, t, e) {
  return Hi(Ka, n, t, e);
}
function rr(n) {
  return (n % 360 + 360) % 360;
}
function tl(n) {
  const t = Ga.exec(n);
  let e = 255, i;
  if (!t)
    return;
  t[5] !== i && (e = t[6] ? Ye(+t[5]) : qt(+t[5]));
  const s = rr(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? i = Za(s, o, r) : t[1] === "hsv" ? i = Qa(s, o, r) : i = ji(s, o, r), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: e
  };
}
function el(n, t) {
  var e = Fi(n);
  e[0] = rr(e[0] + t), e = ji(e), n.r = e[0], n.g = e[1], n.b = e[2];
}
function nl(n) {
  if (!n)
    return;
  const t = Fi(n), e = t[0], i = gs(t[1]), s = gs(t[2]);
  return n.a < 255 ? `hsla(${e}, ${i}%, ${s}%, ${Bt(n.a)})` : `hsl(${e}, ${i}%, ${s}%)`;
}
const ps = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, ms = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function il() {
  const n = {}, t = Object.keys(ms), e = Object.keys(ps);
  let i, s, o, r, a;
  for (i = 0; i < t.length; i++) {
    for (r = a = t[i], s = 0; s < e.length; s++)
      o = e[s], a = a.replace(o, ps[o]);
    o = parseInt(ms[r], 16), n[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return n;
}
let mn;
function sl(n) {
  mn || (mn = il(), mn.transparent = [0, 0, 0, 0]);
  const t = mn[n.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const ol = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rl(n) {
  const t = ol.exec(n);
  let e = 255, i, s, o;
  if (t) {
    if (t[7] !== i) {
      const r = +t[7];
      e = t[8] ? Ye(r) : Xt(r * 255, 0, 255);
    }
    return i = +t[1], s = +t[3], o = +t[5], i = 255 & (t[2] ? Ye(i) : Xt(i, 0, 255)), s = 255 & (t[4] ? Ye(s) : Xt(s, 0, 255)), o = 255 & (t[6] ? Ye(o) : Xt(o, 0, 255)), {
      r: i,
      g: s,
      b: o,
      a: e
    };
  }
}
function al(n) {
  return n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${Bt(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`);
}
const oi = (n) => n <= 31308e-7 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055, ve = (n) => n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
function ll(n, t, e) {
  const i = ve(Bt(n.r)), s = ve(Bt(n.g)), o = ve(Bt(n.b));
  return {
    r: qt(oi(i + e * (ve(Bt(t.r)) - i))),
    g: qt(oi(s + e * (ve(Bt(t.g)) - s))),
    b: qt(oi(o + e * (ve(Bt(t.b)) - o))),
    a: n.a + e * (t.a - n.a)
  };
}
function bn(n, t, e) {
  if (n) {
    let i = Fi(n);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1)), i = ji(i), n.r = i[0], n.g = i[1], n.b = i[2];
  }
}
function ar(n, t) {
  return n && Object.assign(t || {}, n);
}
function bs(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(n) ? n.length >= 3 && (t = { r: n[0], g: n[1], b: n[2], a: 255 }, n.length > 3 && (t.a = qt(n[3]))) : (t = ar(n, { r: 0, g: 0, b: 0, a: 1 }), t.a = qt(t.a)), t;
}
function cl(n) {
  return n.charAt(0) === "r" ? rl(n) : tl(n);
}
class Qe {
  constructor(t) {
    if (t instanceof Qe)
      return t;
    const e = typeof t;
    let i;
    e === "object" ? i = bs(t) : e === "string" && (i = Ua(t) || sl(t) || cl(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ar(this._rgb);
    return t && (t.a = Bt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = bs(t);
  }
  rgbString() {
    return this._valid ? al(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Xa(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? nl(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const i = this.rgb, s = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = i.a - s.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, i.r = 255 & c * i.r + o * s.r + 0.5, i.g = 255 & c * i.g + o * s.g + 0.5, i.b = 255 & c * i.b + o * s.b + 0.5, i.a = r * i.a + (1 - r) * s.a, this.rgb = i;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = ll(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Qe(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = qt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = an(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return bn(this._rgb, 2, t), this;
  }
  darken(t) {
    return bn(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return bn(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return bn(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return el(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function zt() {
}
const dl = /* @__PURE__ */ (() => {
  let n = 0;
  return () => n++;
})();
function J(n) {
  return n == null;
}
function Q(n) {
  if (Array.isArray && Array.isArray(n))
    return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function N(n) {
  return n !== null && Object.prototype.toString.call(n) === "[object Object]";
}
function ut(n) {
  return (typeof n == "number" || n instanceof Number) && isFinite(+n);
}
function Vt(n, t) {
  return ut(n) ? n : t;
}
function B(n, t) {
  return typeof n > "u" ? t : n;
}
const hl = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 : +n / t, lr = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 * t : +n;
function tt(n, t, e) {
  if (n && typeof n.call == "function")
    return n.apply(e, t);
}
function et(n, t, e, i) {
  let s, o, r;
  if (Q(n))
    for (o = n.length, s = 0; s < o; s++)
      t.call(e, n[s], s);
  else if (N(n))
    for (r = Object.keys(n), o = r.length, s = 0; s < o; s++)
      t.call(e, n[r[s]], r[s]);
}
function Vn(n, t) {
  let e, i, s, o;
  if (!n || !t || n.length !== t.length)
    return !1;
  for (e = 0, i = n.length; e < i; ++e)
    if (s = n[e], o = t[e], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function Ln(n) {
  if (Q(n))
    return n.map(Ln);
  if (N(n)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(n), i = e.length;
    let s = 0;
    for (; s < i; ++s)
      t[e[s]] = Ln(n[e[s]]);
    return t;
  }
  return n;
}
function cr(n) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(n) === -1;
}
function ul(n, t, e, i) {
  if (!cr(n))
    return;
  const s = t[n], o = e[n];
  N(s) && N(o) ? tn(s, o, i) : t[n] = Ln(o);
}
function tn(n, t, e) {
  const i = Q(t) ? t : [
    t
  ], s = i.length;
  if (!N(n))
    return n;
  e = e || {};
  const o = e.merger || ul;
  let r;
  for (let a = 0; a < s; ++a) {
    if (r = i[a], !N(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, d = l.length; c < d; ++c)
      o(l[c], n, r, e);
  }
  return n;
}
function Ge(n, t) {
  return tn(n, t, {
    merger: fl
  });
}
function fl(n, t, e) {
  if (!cr(n))
    return;
  const i = t[n], s = e[n];
  N(i) && N(s) ? Ge(i, s) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Ln(s));
}
const ys = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (n) => n,
  // default resolvers
  x: (n) => n.x,
  y: (n) => n.y
};
function gl(n) {
  const t = n.split("."), e = [];
  let i = "";
  for (const s of t)
    i += s, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (e.push(i), i = "");
  return e;
}
function pl(n) {
  const t = gl(n);
  return (e) => {
    for (const i of t) {
      if (i === "")
        break;
      e = e && e[i];
    }
    return e;
  };
}
function Qt(n, t) {
  return (ys[t] || (ys[t] = pl(t)))(n);
}
function Ni(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const kt = (n) => typeof n < "u", Mt = (n) => typeof n == "function", xs = (n, t) => {
  if (n.size !== t.size)
    return !1;
  for (const e of n)
    if (!t.has(e))
      return !1;
  return !0;
};
function ml(n) {
  return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const j = Math.PI, st = 2 * j, bl = st + j, In = Number.POSITIVE_INFINITY, Yi = j / 180, rt = j / 2, Dt = j / 4, Rn = j * 2 / 3, dr = Math.log10, Rt = Math.sign;
function Ke(n, t, e) {
  return Math.abs(n - t) < e;
}
function vs(n) {
  const t = Math.round(n);
  n = Ke(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(dr(n))), i = n / e;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function yl(n) {
  const t = [], e = Math.sqrt(n);
  let i;
  for (i = 1; i < e; i++)
    n % i === 0 && (t.push(i), t.push(n / i));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function xl(n) {
  return typeof n == "symbol" || typeof n == "object" && n !== null && !(Symbol.toPrimitive in n || "toString" in n || "valueOf" in n);
}
function de(n) {
  return !xl(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function vl(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function _l(n, t, e) {
  let i, s, o;
  for (i = 0, s = n.length; i < s; i++)
    o = n[i][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function ht(n) {
  return n * (j / 180);
}
function Yn(n) {
  return n * (180 / j);
}
function _s(n) {
  if (!ut(n))
    return;
  let t = 1, e = 0;
  for (; Math.round(n * t) / t !== n; )
    t *= 10, e++;
  return e;
}
function zn(n, t) {
  const e = t.x - n.x, i = t.y - n.y, s = Math.sqrt(e * e + i * i);
  let o = Math.atan2(i, e);
  return o < -0.5 * j && (o += st), {
    angle: o,
    distance: s
  };
}
function ke(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function wl(n, t) {
  return (n - t + bl) % st - j;
}
function bt(n) {
  return (n % st + st) % st;
}
function en(n, t, e, i) {
  const s = bt(n), o = bt(t), r = bt(e), a = bt(o - s), l = bt(r - s), c = bt(s - o), d = bt(s - r);
  return s === o || s === r || i && o === r || a > l && c < d;
}
function yt(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function Sl(n) {
  return yt(n, -32768, 32767);
}
function Ht(n, t, e, i = 1e-6) {
  return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i;
}
function Ui(n, t, e) {
  e = e || ((r) => n[r] < t);
  let i = n.length - 1, s = 0, o;
  for (; i - s > 1; )
    o = s + i >> 1, e(o) ? s = o : i = o;
  return {
    lo: s,
    hi: i
  };
}
const re = (n, t, e, i) => Ui(n, e, i ? (s) => {
  const o = n[s][t];
  return o < e || o === e && n[s + 1][t] === e;
} : (s) => n[s][t] < e), Ml = (n, t, e) => Ui(n, e, (i) => n[i][t] >= e);
function kl(n, t, e) {
  let i = 0, s = n.length;
  for (; i < s && n[i] < t; )
    i++;
  for (; s > i && n[s - 1] > e; )
    s--;
  return i > 0 || s < n.length ? n.slice(i, s) : n;
}
const hr = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Cl(n, t) {
  if (n._chartjs) {
    n._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(n, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), hr.forEach((e) => {
    const i = "_onData" + Ni(e), s = n[e];
    Object.defineProperty(n, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = s.apply(this, o);
        return n._chartjs.listeners.forEach((a) => {
          typeof a[i] == "function" && a[i](...o);
        }), r;
      }
    });
  });
}
function ws(n, t) {
  const e = n._chartjs;
  if (!e)
    return;
  const i = e.listeners, s = i.indexOf(t);
  s !== -1 && i.splice(s, 1), !(i.length > 0) && (hr.forEach((o) => {
    delete n[o];
  }), delete n._chartjs);
}
function ur(n) {
  const t = new Set(n);
  return t.size === n.length ? n : Array.from(t);
}
const fr = (function() {
  return typeof window > "u" ? function(n) {
    return n();
  } : window.requestAnimationFrame;
})();
function gr(n, t) {
  let e = [], i = !1;
  return function(...s) {
    e = s, i || (i = !0, fr.call(window, () => {
      i = !1, n.apply(t, e);
    }));
  };
}
function Pl(n, t) {
  let e;
  return function(...i) {
    return t ? (clearTimeout(e), e = setTimeout(n, t, i)) : n.apply(this, i), t;
  };
}
const $i = (n) => n === "start" ? "left" : n === "end" ? "right" : "center", mt = (n, t, e) => n === "start" ? t : n === "end" ? e : (t + e) / 2, Al = (n, t, e, i) => n === (i ? "left" : "right") ? e : n === "center" ? (t + e) / 2 : t;
function Dl(n, t, e) {
  const i = t.length;
  let s = 0, o = i;
  if (n._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = n, c = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null, d = r.axis, { min: h, max: u, minDefined: f, maxDefined: g } = r.getUserBounds();
    if (f) {
      if (s = Math.min(
        // @ts-expect-error Need to type _parsed
        re(l, d, h).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? i : re(t, d, r.getPixelForValue(h)).lo
      ), c) {
        const p = l.slice(0, s + 1).reverse().findIndex((m) => !J(m[a.axis]));
        s -= Math.max(0, p);
      }
      s = yt(s, 0, i - 1);
    }
    if (g) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        re(l, r.axis, u, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : re(t, d, r.getPixelForValue(u), !0).hi + 1
      );
      if (c) {
        const m = l.slice(p - 1).findIndex((x) => !J(x[a.axis]));
        p += Math.max(0, m);
      }
      o = yt(p, s, i) - s;
    } else
      o = i - s;
  }
  return {
    start: s,
    count: o
  };
}
function Tl(n) {
  const { xScale: t, yScale: e, _scaleRanges: i } = n, s = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!i)
    return n._scaleRanges = s, !0;
  const o = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== e.min || i.ymax !== e.max;
  return Object.assign(i, s), o;
}
const yn = (n) => n === 0 || n === 1, Ss = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin((n - t) * st / e)), Ms = (n, t, e) => Math.pow(2, -10 * n) * Math.sin((n - t) * st / e) + 1, qe = {
  linear: (n) => n,
  easeInQuad: (n) => n * n,
  easeOutQuad: (n) => -n * (n - 2),
  easeInOutQuad: (n) => (n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1),
  easeInCubic: (n) => n * n * n,
  easeOutCubic: (n) => (n -= 1) * n * n + 1,
  easeInOutCubic: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2),
  easeInQuart: (n) => n * n * n * n,
  easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
  easeInOutQuart: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
  easeInQuint: (n) => n * n * n * n * n,
  easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
  easeInOutQuint: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2),
  easeInSine: (n) => -Math.cos(n * rt) + 1,
  easeOutSine: (n) => Math.sin(n * rt),
  easeInOutSine: (n) => -0.5 * (Math.cos(j * n) - 1),
  easeInExpo: (n) => n === 0 ? 0 : Math.pow(2, 10 * (n - 1)),
  easeOutExpo: (n) => n === 1 ? 1 : -Math.pow(2, -10 * n) + 1,
  easeInOutExpo: (n) => yn(n) ? n : n < 0.5 ? 0.5 * Math.pow(2, 10 * (n * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
  easeInCirc: (n) => n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1),
  easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
  easeInOutCirc: (n) => (n /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
  easeInElastic: (n) => yn(n) ? n : Ss(n, 0.075, 0.3),
  easeOutElastic: (n) => yn(n) ? n : Ms(n, 0.075, 0.3),
  easeInOutElastic(n) {
    return yn(n) ? n : n < 0.5 ? 0.5 * Ss(n * 2, 0.1125, 0.45) : 0.5 + 0.5 * Ms(n * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(n) {
    return n * n * ((1.70158 + 1) * n - 1.70158);
  },
  easeOutBack(n) {
    return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
  },
  easeInOutBack(n) {
    let t = 1.70158;
    return (n /= 0.5) < 1 ? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t)) : 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2);
  },
  easeInBounce: (n) => 1 - qe.easeOutBounce(1 - n),
  easeOutBounce(n) {
    return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  },
  easeInOutBounce: (n) => n < 0.5 ? qe.easeInBounce(n * 2) * 0.5 : qe.easeOutBounce(n * 2 - 1) * 0.5 + 0.5
};
function Xi(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function ks(n) {
  return Xi(n) ? n : new Qe(n);
}
function ri(n) {
  return Xi(n) ? n : new Qe(n).saturate(0.5).darken(0.1).hexString();
}
const Ol = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Vl = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Ll(n) {
  n.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), n.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), n.set("animations", {
    colors: {
      type: "color",
      properties: Vl
    },
    numbers: {
      type: "number",
      properties: Ol
    }
  }), n.describe("animations", {
    _fallback: "animation"
  }), n.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Il(n) {
  n.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Cs = /* @__PURE__ */ new Map();
function Rl(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let i = Cs.get(e);
  return i || (i = new Intl.NumberFormat(n, t), Cs.set(e, i)), i;
}
function Un(n, t, e) {
  return Rl(t, e).format(n);
}
const zl = {
  values(n) {
    return Q(n) ? n : "" + n;
  },
  numeric(n, t, e) {
    if (n === 0)
      return "0";
    const i = this.chart.options.locale;
    let s, o = n;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = El(n, e);
    }
    const r = dr(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Un(n, i, l);
  }
};
function El(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var Gi = {
  formatters: zl
};
function Wl(n) {
  n.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Gi.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), n.route("scale.ticks", "color", "", "color"), n.route("scale.grid", "color", "", "borderColor"), n.route("scale.border", "color", "", "borderColor"), n.route("scale.title", "color", "", "color"), n.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), n.describe("scales", {
    _fallback: "scale"
  }), n.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const he = /* @__PURE__ */ Object.create(null), ki = /* @__PURE__ */ Object.create(null);
function Je(n, t) {
  if (!t)
    return n;
  const e = t.split(".");
  for (let i = 0, s = e.length; i < s; ++i) {
    const o = e[i];
    n = n[o] || (n[o] = /* @__PURE__ */ Object.create(null));
  }
  return n;
}
function ai(n, t, e) {
  return typeof t == "string" ? tn(Je(n, t), e) : tn(Je(n, ""), t);
}
class Bl {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (i, s) => ri(s.backgroundColor), this.hoverBorderColor = (i, s) => ri(s.borderColor), this.hoverColor = (i, s) => ri(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ai(this, t, e);
  }
  get(t) {
    return Je(this, t);
  }
  describe(t, e) {
    return ai(ki, t, e);
  }
  override(t, e) {
    return ai(he, t, e);
  }
  route(t, e, i, s) {
    const o = Je(this, t), r = Je(this, i), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[s];
          return N(l) ? Object.assign({}, c, l) : B(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var ct = /* @__PURE__ */ new Bl({
  _scriptable: (n) => !n.startsWith("on"),
  _indexable: (n) => n !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Ll,
  Il,
  Wl
]);
function Fl(n) {
  return !n || J(n.size) || J(n.family) ? null : (n.style ? n.style + " " : "") + (n.weight ? n.weight + " " : "") + n.size + "px " + n.family;
}
function En(n, t, e, i, s) {
  let o = t[s];
  return o || (o = t[s] = n.measureText(s).width, e.push(s)), o > i && (i = o), i;
}
function Hl(n, t, e, i) {
  i = i || {};
  let s = i.data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
  i.font !== t && (s = i.data = {}, o = i.garbageCollect = [], i.font = t), n.save(), n.font = t;
  let r = 0;
  const a = e.length;
  let l, c, d, h, u;
  for (l = 0; l < a; l++)
    if (h = e[l], h != null && !Q(h))
      r = En(n, s, o, r, h);
    else if (Q(h))
      for (c = 0, d = h.length; c < d; c++)
        u = h[c], u != null && !Q(u) && (r = En(n, s, o, r, u));
  n.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete s[o[l]];
    o.splice(0, f);
  }
  return r;
}
function ne(n, t, e) {
  const i = n.currentDevicePixelRatio, s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function Ps(n, t) {
  !t && !n || (t = t || n.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, n.width, n.height), t.restore());
}
function Ci(n, t, e, i) {
  pr(n, t, e, i, null);
}
function pr(n, t, e, i, s) {
  let o, r, a, l, c, d, h, u;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let m = (g || 0) * Yi;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    n.save(), n.translate(e, i), n.rotate(m), n.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), n.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (n.beginPath(), f) {
      // Default includes circle
      default:
        s ? n.ellipse(e, i, s / 2, p, 0, 0, st) : n.arc(e, i, p, 0, st), n.closePath();
        break;
      case "triangle":
        d = s ? s / 2 : p, n.moveTo(e + Math.sin(m) * d, i - Math.cos(m) * p), m += Rn, n.lineTo(e + Math.sin(m) * d, i - Math.cos(m) * p), m += Rn, n.lineTo(e + Math.sin(m) * d, i - Math.cos(m) * p), n.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(m + Dt) * l, h = Math.cos(m + Dt) * (s ? s / 2 - c : l), a = Math.sin(m + Dt) * l, u = Math.sin(m + Dt) * (s ? s / 2 - c : l), n.arc(e - h, i - a, c, m - j, m - rt), n.arc(e + u, i - r, c, m - rt, m), n.arc(e + h, i + a, c, m, m + rt), n.arc(e - u, i + r, c, m + rt, m + j), n.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, d = s ? s / 2 : l, n.rect(e - d, i - l, 2 * d, 2 * l);
          break;
        }
        m += Dt;
      /* falls through */
      case "rectRot":
        h = Math.cos(m) * (s ? s / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, u = Math.sin(m) * (s ? s / 2 : p), n.moveTo(e - h, i - a), n.lineTo(e + u, i - r), n.lineTo(e + h, i + a), n.lineTo(e - u, i + r), n.closePath();
        break;
      case "crossRot":
        m += Dt;
      /* falls through */
      case "cross":
        h = Math.cos(m) * (s ? s / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, u = Math.sin(m) * (s ? s / 2 : p), n.moveTo(e - h, i - a), n.lineTo(e + h, i + a), n.moveTo(e + u, i - r), n.lineTo(e - u, i + r);
        break;
      case "star":
        h = Math.cos(m) * (s ? s / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, u = Math.sin(m) * (s ? s / 2 : p), n.moveTo(e - h, i - a), n.lineTo(e + h, i + a), n.moveTo(e + u, i - r), n.lineTo(e - u, i + r), m += Dt, h = Math.cos(m) * (s ? s / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, u = Math.sin(m) * (s ? s / 2 : p), n.moveTo(e - h, i - a), n.lineTo(e + h, i + a), n.moveTo(e + u, i - r), n.lineTo(e - u, i + r);
        break;
      case "line":
        r = s ? s / 2 : Math.cos(m) * p, a = Math.sin(m) * p, n.moveTo(e - r, i - a), n.lineTo(e + r, i + a);
        break;
      case "dash":
        n.moveTo(e, i), n.lineTo(e + Math.cos(m) * (s ? s / 2 : p), i + Math.sin(m) * p);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), t.borderWidth > 0 && n.stroke();
  }
}
function jt(n, t, e) {
  return e = e || 0.5, !t || n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e;
}
function ln(n, t) {
  n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip();
}
function cn(n) {
  n.restore();
}
function jl(n, t, e, i, s) {
  if (!t)
    return n.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    n.lineTo(o, t.y), n.lineTo(o, e.y);
  } else s === "after" != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function Nl(n, t, e, i) {
  if (!t)
    return n.lineTo(e.x, e.y);
  n.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? e.cp2x : e.cp1x, i ? e.cp2y : e.cp1y, e.x, e.y);
}
function Yl(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]), J(t.rotation) || n.rotate(t.rotation), t.color && (n.fillStyle = t.color), t.textAlign && (n.textAlign = t.textAlign), t.textBaseline && (n.textBaseline = t.textBaseline);
}
function Ul(n, t, e, i, s) {
  if (s.strikethrough || s.underline) {
    const o = n.measureText(i), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, d = s.strikethrough ? (l + c) / 2 : c;
    n.strokeStyle = n.fillStyle, n.beginPath(), n.lineWidth = s.decorationWidth || 2, n.moveTo(r, d), n.lineTo(a, d), n.stroke();
  }
}
function $l(n, t) {
  const e = n.fillStyle;
  n.fillStyle = t.color, n.fillRect(t.left, t.top, t.width, t.height), n.fillStyle = e;
}
function ue(n, t, e, i, s, o = {}) {
  const r = Q(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (n.save(), n.font = s.string, Yl(n, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && $l(n, o.backdrop), a && (o.strokeColor && (n.strokeStyle = o.strokeColor), J(o.strokeWidth) || (n.lineWidth = o.strokeWidth), n.strokeText(c, e, i, o.maxWidth)), n.fillText(c, e, i, o.maxWidth), Ul(n, e, i, c, o), i += Number(s.lineHeight);
  n.restore();
}
function Ce(n, t) {
  const { x: e, y: i, w: s, h: o, radius: r } = t;
  n.arc(e + r.topLeft, i + r.topLeft, r.topLeft, 1.5 * j, j, !0), n.lineTo(e, i + o - r.bottomLeft), n.arc(e + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, j, rt, !0), n.lineTo(e + s - r.bottomRight, i + o), n.arc(e + s - r.bottomRight, i + o - r.bottomRight, r.bottomRight, rt, 0, !0), n.lineTo(e + s, i + r.topRight), n.arc(e + s - r.topRight, i + r.topRight, r.topRight, 0, -rt, !0), n.lineTo(e + r.topLeft, i);
}
const Xl = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Gl = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Kl(n, t) {
  const e = ("" + n).match(Xl);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (n = +e[2], e[3]) {
    case "px":
      return n;
    case "%":
      n /= 100;
      break;
  }
  return t * n;
}
const ql = (n) => +n || 0;
function Ki(n, t) {
  const e = {}, i = N(t), s = i ? Object.keys(t) : t, o = N(n) ? i ? (r) => B(n[r], n[t[r]]) : (r) => n[r] : () => n;
  for (const r of s)
    e[r] = ql(o(r));
  return e;
}
function mr(n) {
  return Ki(n, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Jt(n) {
  return Ki(n, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function ft(n) {
  const t = mr(n);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function dt(n, t) {
  n = n || {}, t = t || ct.font;
  let e = B(n.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let i = B(n.style, t.style);
  i && !("" + i).match(Gl) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const s = {
    family: B(n.family, t.family),
    lineHeight: Kl(B(n.lineHeight, t.lineHeight), e),
    size: e,
    style: i,
    weight: B(n.weight, t.weight),
    string: ""
  };
  return s.string = Fl(s), s;
}
function xn(n, t, e, i) {
  let s, o, r;
  for (s = 0, o = n.length; s < o; ++s)
    if (r = n[s], r !== void 0 && r !== void 0)
      return r;
}
function Jl(n, t, e) {
  const { min: i, max: s } = n, o = lr(t, (s - i) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(i, -Math.abs(o)),
    max: r(s, o)
  };
}
function ee(n, t) {
  return Object.assign(Object.create(n), t);
}
function qi(n, t = [
  ""
], e, i, s = () => n[0]) {
  const o = e || n;
  typeof i > "u" && (i = vr("_fallback", n));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: n,
    _rootScopes: o,
    _fallback: i,
    _getTarget: s,
    override: (a) => qi([
      a,
      ...n
    ], t, o, i)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete n[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return yr(a, l, () => oc(l, t, n, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return Ds(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Ds(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const d = a._storage || (a._storage = s());
      return a[l] = d[l] = c, delete a._keys, !0;
    }
  });
}
function Pe(n, t, e, i) {
  const s = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: br(n, i),
    setContext: (o) => Pe(n, o, e, i),
    override: (o) => Pe(n.override(o), t, e, i)
  };
  return new Proxy(s, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete n[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return yr(o, r, () => Ql(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(n, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(n, r);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n);
    },
    /**
    * A trap for the in operator.
    */
    has(o, r) {
      return Reflect.has(n, r);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(n);
    },
    /**
    * A trap for setting property values.
    */
    set(o, r, a) {
      return n[r] = a, delete o[r], !0;
    }
  });
}
function br(n, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = n;
  return {
    allKeys: s,
    scriptable: e,
    indexable: i,
    isScriptable: Mt(e) ? e : () => e,
    isIndexable: Mt(i) ? i : () => i
  };
}
const Zl = (n, t) => n ? n + Ni(t) : t, Ji = (n, t) => N(t) && n !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function yr(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t) || t === "constructor")
    return n[t];
  const i = e();
  return n[t] = i, i;
}
function Ql(n, t, e) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: r } = n;
  let a = i[t];
  return Mt(a) && r.isScriptable(t) && (a = tc(t, a, n, e)), Q(a) && a.length && (a = ec(t, a, n, r.isIndexable)), Ji(t, a) && (a = Pe(a, s, o && o[t], r)), a;
}
function tc(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(n))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + n);
  a.add(n);
  let l = t(o, r || i);
  return a.delete(n), Ji(n, l) && (l = Zi(s._scopes, s, n, l)), l;
}
function ec(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && i(n))
    return t[o.index % t.length];
  if (N(t[0])) {
    const l = t, c = s._scopes.filter((d) => d !== l);
    t = [];
    for (const d of l) {
      const h = Zi(c, s, n, d);
      t.push(Pe(h, o, r && r[n], a));
    }
  }
  return t;
}
function xr(n, t, e) {
  return Mt(n) ? n(t, e) : n;
}
const nc = (n, t) => n === !0 ? t : typeof n == "string" ? Qt(t, n) : void 0;
function ic(n, t, e, i, s) {
  for (const o of t) {
    const r = nc(e, o);
    if (r) {
      n.add(r);
      const a = xr(r._fallback, e, s);
      if (typeof a < "u" && a !== e && a !== i)
        return a;
    } else if (r === !1 && typeof i < "u" && e !== i)
      return null;
  }
  return !1;
}
function Zi(n, t, e, i) {
  const s = t._rootScopes, o = xr(t._fallback, e, i), r = [
    ...n,
    ...s
  ], a = /* @__PURE__ */ new Set();
  a.add(i);
  let l = As(a, r, e, o || e, i);
  return l === null || typeof o < "u" && o !== e && (l = As(a, r, o, l, i), l === null) ? !1 : qi(Array.from(a), [
    ""
  ], s, o, () => sc(t, e, i));
}
function As(n, t, e, i, s) {
  for (; e; )
    e = ic(n, t, e, i, s);
  return e;
}
function sc(n, t, e) {
  const i = n._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return Q(s) && N(e) ? e : s || {};
}
function oc(n, t, e, i) {
  let s;
  for (const o of t)
    if (s = vr(Zl(o, n), e), typeof s < "u")
      return Ji(n, s) ? Zi(e, i, n, s) : s;
}
function vr(n, t) {
  for (const e of t) {
    if (!e)
      continue;
    const i = e[n];
    if (typeof i < "u")
      return i;
  }
}
function Ds(n) {
  let t = n._keys;
  return t || (t = n._keys = rc(n._scopes)), t;
}
function rc(n) {
  const t = /* @__PURE__ */ new Set();
  for (const e of n)
    for (const i of Object.keys(e).filter((s) => !s.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function _r(n, t, e, i) {
  const { iScale: s } = n, { key: o = "r" } = this._parsing, r = new Array(i);
  let a, l, c, d;
  for (a = 0, l = i; a < l; ++a)
    c = a + e, d = t[c], r[a] = {
      r: s.parse(Qt(d, o), c)
    };
  return r;
}
const ac = Number.EPSILON || 1e-14, Ae = (n, t) => t < n.length && !n[t].skip && n[t], wr = (n) => n === "x" ? "y" : "x";
function lc(n, t, e, i) {
  const s = n.skip ? t : n, o = t, r = e.skip ? t : e, a = ke(o, s), l = ke(r, o);
  let c = a / (a + l), d = l / (a + l);
  c = isNaN(c) ? 0 : c, d = isNaN(d) ? 0 : d;
  const h = i * c, u = i * d;
  return {
    previous: {
      x: o.x - h * (r.x - s.x),
      y: o.y - h * (r.y - s.y)
    },
    next: {
      x: o.x + u * (r.x - s.x),
      y: o.y + u * (r.y - s.y)
    }
  };
}
function cc(n, t, e) {
  const i = n.length;
  let s, o, r, a, l, c = Ae(n, 0);
  for (let d = 0; d < i - 1; ++d)
    if (l = c, c = Ae(n, d + 1), !(!l || !c)) {
      if (Ke(t[d], 0, ac)) {
        e[d] = e[d + 1] = 0;
        continue;
      }
      s = e[d] / t[d], o = e[d + 1] / t[d], a = Math.pow(s, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[d] = s * r * t[d], e[d + 1] = o * r * t[d]);
    }
}
function dc(n, t, e = "x") {
  const i = wr(e), s = n.length;
  let o, r, a, l = Ae(n, 0);
  for (let c = 0; c < s; ++c) {
    if (r = a, a = l, l = Ae(n, c + 1), !a)
      continue;
    const d = a[e], h = a[i];
    r && (o = (d - r[e]) / 3, a[`cp1${e}`] = d - o, a[`cp1${i}`] = h - o * t[c]), l && (o = (l[e] - d) / 3, a[`cp2${e}`] = d + o, a[`cp2${i}`] = h + o * t[c]);
  }
}
function hc(n, t = "x") {
  const e = wr(t), i = n.length, s = Array(i).fill(0), o = Array(i);
  let r, a, l, c = Ae(n, 0);
  for (r = 0; r < i; ++r)
    if (a = l, l = c, c = Ae(n, r + 1), !!l) {
      if (c) {
        const d = c[t] - l[t];
        s[r] = d !== 0 ? (c[e] - l[e]) / d : 0;
      }
      o[r] = a ? c ? Rt(s[r - 1]) !== Rt(s[r]) ? 0 : (s[r - 1] + s[r]) / 2 : s[r - 1] : s[r];
    }
  cc(n, s, o), dc(n, o, t);
}
function vn(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function uc(n, t) {
  let e, i, s, o, r, a = jt(n[0], t);
  for (e = 0, i = n.length; e < i; ++e)
    r = o, o = a, a = e < i - 1 && jt(n[e + 1], t), o && (s = n[e], r && (s.cp1x = vn(s.cp1x, t.left, t.right), s.cp1y = vn(s.cp1y, t.top, t.bottom)), a && (s.cp2x = vn(s.cp2x, t.left, t.right), s.cp2y = vn(s.cp2y, t.top, t.bottom)));
}
function fc(n, t, e, i, s) {
  let o, r, a, l;
  if (t.spanGaps && (n = n.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    hc(n, s);
  else {
    let c = i ? n[n.length - 1] : n[0];
    for (o = 0, r = n.length; o < r; ++o)
      a = n[o], l = lc(c, a, n[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && uc(n, e);
}
function Qi() {
  return typeof window < "u" && typeof document < "u";
}
function ts(n) {
  let t = n.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Wn(n, t, e) {
  let i;
  return typeof n == "string" ? (i = parseInt(n, 10), n.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[e])) : i = n, i;
}
const $n = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function gc(n, t) {
  return $n(n).getPropertyValue(t);
}
const pc = [
  "top",
  "right",
  "bottom",
  "left"
];
function le(n, t, e) {
  const i = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = pc[s];
    i[o] = parseFloat(n[t + "-" + o + e]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const mc = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function bc(n, t) {
  const e = n.touches, i = e && e.length ? e[0] : n, { offsetX: s, offsetY: o } = i;
  let r = !1, a, l;
  if (mc(s, o, n.target))
    a = s, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = i.clientX - c.left, l = i.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function se(n, t) {
  if ("native" in n)
    return n;
  const { canvas: e, currentDevicePixelRatio: i } = t, s = $n(e), o = s.boxSizing === "border-box", r = le(s, "padding"), a = le(s, "border", "width"), { x: l, y: c, box: d } = bc(n, e), h = r.left + (d && a.left), u = r.top + (d && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - h) / f * e.width / i),
    y: Math.round((c - u) / g * e.height / i)
  };
}
function yc(n, t, e) {
  let i, s;
  if (t === void 0 || e === void 0) {
    const o = n && ts(n);
    if (!o)
      t = n.clientWidth, e = n.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = $n(o), l = le(a, "border", "width"), c = le(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, i = Wn(a.maxWidth, o, "clientWidth"), s = Wn(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: i || In,
    maxHeight: s || In
  };
}
const Gt = (n) => Math.round(n * 10) / 10;
function xc(n, t, e, i) {
  const s = $n(n), o = le(s, "margin"), r = Wn(s.maxWidth, n, "clientWidth") || In, a = Wn(s.maxHeight, n, "clientHeight") || In, l = yc(n, t, e);
  let { width: c, height: d } = l;
  if (s.boxSizing === "content-box") {
    const u = le(s, "border", "width"), f = le(s, "padding");
    c -= f.width + u.width, d -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), d = Math.max(0, i ? c / i : d - o.height), c = Gt(Math.min(c, r, l.maxWidth)), d = Gt(Math.min(d, a, l.maxHeight)), c && !d && (d = Gt(c / 2)), (t !== void 0 || e !== void 0) && i && l.height && d > l.height && (d = l.height, c = Gt(Math.floor(d * i))), {
    width: c,
    height: d
  };
}
function Ts(n, t, e) {
  const i = t || 1, s = Gt(n.height * i), o = Gt(n.width * i);
  n.height = Gt(n.height), n.width = Gt(n.width);
  const r = n.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${n.height}px`, r.style.width = `${n.width}px`), n.currentDevicePixelRatio !== i || r.height !== s || r.width !== o ? (n.currentDevicePixelRatio = i, r.height = s, r.width = o, n.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const vc = (function() {
  let n = !1;
  try {
    const t = {
      get passive() {
        return n = !0, !1;
      }
    };
    Qi() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return n;
})();
function Os(n, t) {
  const e = gc(n, t), i = e && e.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function oe(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: n.y + e * (t.y - n.y)
  };
}
function _c(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: i === "middle" ? e < 0.5 ? n.y : t.y : i === "after" ? e < 1 ? n.y : t.y : e > 0 ? t.y : n.y
  };
}
function wc(n, t, e, i) {
  const s = {
    x: n.cp2x,
    y: n.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = oe(n, s, e), a = oe(s, o, e), l = oe(o, t, e), c = oe(r, a, e), d = oe(a, l, e);
  return oe(c, d, e);
}
const Sc = function(n, t) {
  return {
    x(e) {
      return n + n + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, i) {
      return e - i;
    },
    leftForLtr(e, i) {
      return e - i;
    }
  };
}, Mc = function() {
  return {
    x(n) {
      return n;
    },
    setWidth(n) {
    },
    textAlign(n) {
      return n;
    },
    xPlus(n, t) {
      return n + t;
    },
    leftForLtr(n, t) {
      return n;
    }
  };
};
function Me(n, t, e) {
  return n ? Sc(t, e) : Mc();
}
function Sr(n, t) {
  let e, i;
  (t === "ltr" || t === "rtl") && (e = n.canvas.style, i = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), n.prevTextDirection = i);
}
function Mr(n, t) {
  t !== void 0 && (delete n.prevTextDirection, n.canvas.style.setProperty("direction", t[0], t[1]));
}
function kr(n) {
  return n === "angle" ? {
    between: en,
    compare: wl,
    normalize: bt
  } : {
    between: Ht,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Vs({ start: n, end: t, count: e, loop: i, style: s }) {
  return {
    start: n % e,
    end: t % e,
    loop: i && (t - n + 1) % e === 0,
    style: s
  };
}
function kc(n, t, e) {
  const { property: i, start: s, end: o } = e, { between: r, normalize: a } = kr(i), l = t.length;
  let { start: c, end: d, loop: h } = n, u, f;
  if (h) {
    for (c += l, d += l, u = 0, f = l; u < f && r(a(t[c % l][i]), s, o); ++u)
      c--, d--;
    c %= l, d %= l;
  }
  return d < c && (d += l), {
    start: c,
    end: d,
    loop: h,
    style: n.style
  };
}
function Cr(n, t, e) {
  if (!e)
    return [
      n
    ];
  const { property: i, start: s, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = kr(i), { start: d, end: h, loop: u, style: f } = kc(n, t, e), g = [];
  let p = !1, m = null, x, v, S;
  const k = () => l(s, S, x) && a(s, S) !== 0, w = () => a(o, x) === 0 || l(o, S, x), P = () => p || k(), L = () => !p || w();
  for (let V = d, C = d; V <= h; ++V)
    v = t[V % r], !v.skip && (x = c(v[i]), x !== S && (p = l(x, s, o), m === null && P() && (m = a(x, s) === 0 ? V : C), m !== null && L() && (g.push(Vs({
      start: m,
      end: V,
      loop: u,
      count: r,
      style: f
    })), m = null), C = V, S = x));
  return m !== null && g.push(Vs({
    start: m,
    end: h,
    loop: u,
    count: r,
    style: f
  })), g;
}
function Pr(n, t) {
  const e = [], i = n.segments;
  for (let s = 0; s < i.length; s++) {
    const o = Cr(i[s], n.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Cc(n, t, e, i) {
  let s = 0, o = t - 1;
  if (e && !i)
    for (; s < t && !n[s].skip; )
      s++;
  for (; s < t && n[s].skip; )
    s++;
  for (s %= t, e && (o += s); o > s && n[o % t].skip; )
    o--;
  return o %= t, {
    start: s,
    end: o
  };
}
function Pc(n, t, e, i) {
  const s = n.length, o = [];
  let r = t, a = n[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = n[l % s];
    c.skip || c.stop ? a.skip || (i = !1, o.push({
      start: t % s,
      end: (l - 1) % s,
      loop: i
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % s,
    end: r % s,
    loop: i
  }), o;
}
function Ac(n, t) {
  const e = n.points, i = n.options.spanGaps, s = e.length;
  if (!s)
    return [];
  const o = !!n._loop, { start: r, end: a } = Cc(e, s, o, i);
  if (i === !0)
    return Ls(n, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + s : a, c = !!n._fullLoop && r === 0 && a === s - 1;
  return Ls(n, Pc(e, r, l, c), e, t);
}
function Ls(n, t, e, i) {
  return !i || !i.setContext || !e ? t : Dc(n, t, e, i);
}
function Dc(n, t, e, i) {
  const s = n._chart.getContext(), o = Is(n.options), { _datasetIndex: r, options: { spanGaps: a } } = n, l = e.length, c = [];
  let d = o, h = t[0].start, u = h;
  function f(g, p, m, x) {
    const v = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= v;
      for (; e[p % l].skip; )
        p += v;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: m,
        style: x
      }), d = x, h = p % l);
    }
  }
  for (const g of t) {
    h = a ? h : g.start;
    let p = e[h % l], m;
    for (u = h + 1; u <= g.end; u++) {
      const x = e[u % l];
      m = Is(i.setContext(ee(s, {
        type: "segment",
        p0: p,
        p1: x,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: r
      }))), Tc(m, d) && f(h, u - 1, g.loop, d), p = x, d = m;
    }
    h < u - 1 && f(h, u - 1, g.loop, d);
  }
  return c;
}
function Is(n) {
  return {
    backgroundColor: n.backgroundColor,
    borderCapStyle: n.borderCapStyle,
    borderDash: n.borderDash,
    borderDashOffset: n.borderDashOffset,
    borderJoinStyle: n.borderJoinStyle,
    borderWidth: n.borderWidth,
    borderColor: n.borderColor
  };
}
function Tc(n, t) {
  if (!t)
    return !1;
  const e = [], i = function(s, o) {
    return Xi(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(n, i) !== JSON.stringify(t, i);
}
function _n(n, t, e) {
  return n.options.clip ? n[e] : t[e];
}
function Oc(n, t) {
  const { xScale: e, yScale: i } = n;
  return e && i ? {
    left: _n(e, t, "left"),
    right: _n(e, t, "right"),
    top: _n(i, t, "top"),
    bottom: _n(i, t, "bottom")
  } : t;
}
function Ar(n, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const i = Oc(t, n.chartArea);
  return {
    left: e.left === !1 ? 0 : i.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? n.width : i.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : i.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? n.height : i.bottom + (e.bottom === !0 ? 0 : e.bottom)
  };
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class Vc {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, i, s) {
    const o = e.listeners[s], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(i - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = fr.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length)
        return;
      const o = i.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > i.duration && (i.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (s.draw(), this._notify(s, i, t, "progress")), o.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let i = e.get(t);
    return i || (i = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, i)), i;
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((i, s) => Math.max(i, s._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const i = e.items;
    let s = i.length - 1;
    for (; s >= 0; --s)
      i[s].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Et = /* @__PURE__ */ new Vc();
const Rs = "transparent", Lc = {
  boolean(n, t, e) {
    return e > 0.5 ? t : n;
  },
  color(n, t, e) {
    const i = ks(n || Rs), s = i.valid && ks(t || Rs);
    return s && s.valid ? s.mix(i, e).hexString() : t;
  },
  number(n, t, e) {
    return n + (t - n) * e;
  }
};
class Ic {
  constructor(t, e, i, s) {
    const o = e[i];
    s = xn([
      t.to,
      s,
      o,
      t.from
    ]);
    const r = xn([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || Lc[t.type || typeof r], this._easing = qe[t.easing] || qe.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = r, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = i - this._start, r = this._duration - o;
      this._start = i, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = xn([
        t.to,
        e,
        s,
        t.from
      ]), this._from = xn([
        t.from,
        s,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, i = this._duration, s = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < i), !this._active) {
      this._target[s] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    l = e / i % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, i) => {
      t.push({
        res: e,
        rej: i
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", i = this._promises || [];
    for (let s = 0; s < i.length; s++)
      i[s][e]();
  }
}
class es {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!N(t))
      return;
    const e = Object.keys(ct.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!N(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (Q(o.properties) && o.properties || [
        s
      ]).forEach((a) => {
        (a === s || !i.has(a)) && i.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options, s = zc(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && Rc(t.options.$animations, i).then(() => {
      t.options = i;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const i = this._properties, s = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const d = e[c];
      let h = o[c];
      const u = i.get(c);
      if (h)
        if (u && h.active()) {
          h.update(u, d, a);
          continue;
        } else
          h.cancel();
      if (!u || !u.duration) {
        t[c] = d;
        continue;
      }
      o[c] = h = new Ic(u, t, c, d), s.push(h);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const i = this._createAnimations(t, e);
    if (i.length)
      return Et.add(this._chart, i), !0;
  }
}
function Rc(n, t) {
  const e = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = n[i[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function zc(n, t) {
  if (!t)
    return;
  let e = n.options;
  if (!e) {
    n.options = t;
    return;
  }
  return e.$shared && (n.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function zs(n, t) {
  const e = n && n.options || {}, i = e.reverse, s = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function Ec(n, t, e) {
  if (e === !1)
    return !1;
  const i = zs(n, e), s = zs(t, e);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function Wc(n) {
  let t, e, i, s;
  return N(n) ? (t = n.top, e = n.right, i = n.bottom, s = n.left) : t = e = i = s = n, {
    top: t,
    right: e,
    bottom: i,
    left: s,
    disabled: n === !1
  };
}
function Dr(n, t) {
  const e = [], i = n._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    e.push(i[s].index);
  return e;
}
function Es(n, t, e, i = {}) {
  const s = n.keys, o = i.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let d = !1;
  for (r = 0, a = s.length; r < a; ++r) {
    if (l = +s[r], l === e) {
      if (d = !0, i.all)
        continue;
      break;
    }
    c = n.values[l], ut(c) && (o || t === 0 || Rt(t) === Rt(c)) && (t += c);
  }
  return !d && !i.all ? 0 : t;
}
function Bc(n, t) {
  const { iScale: e, vScale: i } = t, s = e.axis === "x" ? "x" : "y", o = i.axis === "x" ? "x" : "y", r = Object.keys(n), a = new Array(r.length);
  let l, c, d;
  for (l = 0, c = r.length; l < c; ++l)
    d = r[l], a[l] = {
      [s]: d,
      [o]: n[d]
    };
  return a;
}
function li(n, t) {
  const e = n && n.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Fc(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function Hc(n) {
  const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY
  };
}
function jc(n, t, e) {
  const i = n[t] || (n[t] = {});
  return i[e] || (i[e] = {});
}
function Ws(n, t, e, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = n[s.index];
    if (e && o > 0 || !e && o < 0)
      return s.index;
  }
  return null;
}
function Bs(n, t) {
  const { chart: e, _cachedMeta: i } = n, s = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = i, l = o.axis, c = r.axis, d = Fc(o, r, i), h = t.length;
  let u;
  for (let f = 0; f < h; ++f) {
    const g = t[f], { [l]: p, [c]: m } = g, x = g._stacks || (g._stacks = {});
    u = x[c] = jc(s, d, p), u[a] = m, u._top = Ws(u, r, !0, i.type), u._bottom = Ws(u, r, !1, i.type);
    const v = u._visualValues || (u._visualValues = {});
    v[a] = m;
  }
}
function ci(n, t) {
  const e = n.scales;
  return Object.keys(e).filter((i) => e[i].axis === t).shift();
}
function Nc(n, t) {
  return ee(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Yc(n, t, e) {
  return ee(n, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Ee(n, t) {
  const e = n.controller.index, i = n.vScale && n.vScale.axis;
  if (i) {
    t = t || n._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[i] === void 0 || o[i][e] === void 0)
        return;
      delete o[i][e], o[i]._visualValues !== void 0 && o[i]._visualValues[e] !== void 0 && delete o[i]._visualValues[e];
    }
  }
}
const di = (n) => n === "reset" || n === "none", Fs = (n, t) => t ? n : Object.assign({}, n), Uc = (n, t, e) => n && !t.hidden && t._stacked && {
  keys: Dr(e, !0),
  values: null
};
class Te {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = li(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ee(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (h, u, f, g) => h === "x" ? u : h === "r" ? g : f, o = e.xAxisID = B(i.xAxisID, ci(t, "x")), r = e.yAxisID = B(i.yAxisID, ci(t, "y")), a = e.rAxisID = B(i.rAxisID, ci(t, "r")), l = e.indexAxis, c = e.iAxisID = s(l, o, r, a), d = e.vAxisID = s(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(d);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && ws(this._data, this), t._stacked && Ee(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
    if (N(e)) {
      const s = this._cachedMeta;
      this._data = Bc(e, s);
    } else if (i !== e) {
      if (i) {
        ws(i, this);
        const s = this._cachedMeta;
        Ee(s), s._parsed = [];
      }
      e && Object.isExtensible(e) && Cl(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = li(e.vScale, e), e.stack !== i.stack && (s = !0, Ee(e), e.stack = i.stack), this._resyncElements(t), (s || o !== e._stacked) && (Bs(this, e._parsed), e._stacked = li(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: r } = i, a = o.axis;
    let l = t === 0 && e === s.length ? !0 : i._sorted, c = t > 0 && i._parsed[t - 1], d, h, u;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, u = s;
    else {
      Q(s[t]) ? u = this.parseArrayData(i, s, t, e) : N(s[t]) ? u = this.parseObjectData(i, s, t, e) : u = this.parsePrimitiveData(i, s, t, e);
      const f = () => h[a] === null || c && h[a] < c[a];
      for (d = 0; d < e; ++d)
        i._parsed[d + t] = h = u[d], l && (f() && (l = !1), c = h);
      i._sorted = l;
    }
    r && Bs(this, u);
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), d = o === r, h = new Array(s);
    let u, f, g;
    for (u = 0, f = s; u < f; ++u)
      g = u + i, h[u] = {
        [a]: d || o.parse(c[g], g),
        [l]: r.parse(e[g], g)
      };
    return h;
  }
  parseArrayData(t, e, i, s) {
    const { xScale: o, yScale: r } = t, a = new Array(s);
    let l, c, d, h;
    for (l = 0, c = s; l < c; ++l)
      d = l + i, h = e[d], a[l] = {
        x: o.parse(h[0], d),
        y: r.parse(h[1], d)
      };
    return a;
  }
  parseObjectData(t, e, i, s) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let d, h, u, f;
    for (d = 0, h = s; d < h; ++d)
      u = d + i, f = e[u], c[d] = {
        x: o.parse(Qt(f, a), u),
        y: r.parse(Qt(f, l), u)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, i) {
    const s = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: Dr(s, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Es(a, r, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, e, i, s) {
    const o = i[e.axis];
    let r = o === null ? NaN : o;
    const a = s && i._stacks[e.axis];
    s && a && (s.values = a, r = Es(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, r = s.length, a = this._getOtherScale(t), l = Uc(e, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: h } = Hc(a);
    let u, f;
    function g() {
      f = s[u];
      const p = f[a.axis];
      return !ut(f[t.axis]) || d > p || h < p;
    }
    for (u = 0; u < r && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u)
      ;
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!g()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, i = [];
    let s, o, r;
    for (s = 0, o = e.length; s < o; ++s)
      r = e[s][t.axis], ut(r) && i.push(r);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = e.iScale, s = e.vScale, o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = Wc(B(this.options.clip, Ec(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || s.length - a, c = this.options.drawActiveElementsOnTop;
    let d;
    for (i.dataset && i.dataset.draw(t, o, a, l), d = a; d < a + l; ++d) {
      const h = s[d];
      h.hidden || (h.active && c ? r.push(h) : h.draw(t, o));
    }
    for (d = 0; d < r.length; ++d)
      r[d].draw(t, o);
  }
  getStyle(t, e) {
    const i = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, e, i) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = Yc(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Nc(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = i, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", i) {
    const s = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && kt(i);
    if (a)
      return Fs(a, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, t), h = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), d), f = Object.keys(ct.elements[t]), g = () => this.getContext(i, s, e), p = c.resolveNamedOptions(u, f, g, h);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(Fs(p, l))), p;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (s.options.animation !== !1) {
      const d = this.chart.config, h = d.datasetAnimationScopeKeys(this._type, e), u = d.getOptionScopes(this.getDataset(), h);
      l = d.createResolver(u, this.getContext(t, i, e));
    }
    const c = new es(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || di(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e), s = this._sharedOptions, o = this.getSharedOptions(i), r = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, i), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, i, s) {
    di(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !di(e) && this._resolveAnimations(void 0, e).update(t, i);
  }
  _setStyle(t, e, i, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, i, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, i = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const s = i.length, o = e.length, r = Math.min(o, s);
    r && this.parse(0, r), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, i = !0) {
    const s = this._cachedMeta, o = s.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, e), i && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, i, s) {
  }
  _removeElements(t, e) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, e);
      i._stacked && Ee(i, s);
    }
    i.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, i, s] = t;
      this[e](i, s);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const i = arguments.length - 2;
    i && this._sync([
      "_insertElements",
      t,
      i
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
function $c(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let i = [];
    for (let s = 0, o = e.length; s < o; s++)
      i = i.concat(e[s].controller.getAllParsedValues(n));
    n._cache.$bar = ur(i.sort((s, o) => s - o));
  }
  return n._cache.$bar;
}
function Xc(n) {
  const t = n.iScale, e = $c(t, n.type);
  let i = t._length, s, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (kt(a) && (i = Math.min(i, Math.abs(r - a) || i)), a = r);
  };
  for (s = 0, o = e.length; s < o; ++s)
    r = t.getPixelForValue(e[s]), l();
  for (a = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    r = t.getPixelForTick(s), l();
  return i;
}
function Gc(n, t, e, i) {
  const s = e.barThickness;
  let o, r;
  return J(s) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = s * i, r = 1), {
    chunk: o / i,
    ratio: r,
    start: t.pixels[n] - o / 2
  };
}
function Kc(n, t, e, i) {
  const s = t.pixels, o = s[n];
  let r = n > 0 ? s[n - 1] : null, a = n < s.length - 1 ? s[n + 1] : null;
  const l = e.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
  const c = o - (o - Math.min(r, a)) / 2 * l;
  return {
    chunk: Math.abs(a - r) / 2 * l / i,
    ratio: e.barPercentage,
    start: c
  };
}
function qc(n, t, e, i) {
  const s = e.parse(n[0], i), o = e.parse(n[1], i), r = Math.min(s, o), a = Math.max(s, o);
  let l = r, c = a;
  Math.abs(r) > Math.abs(a) && (l = a, c = r), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: s,
    end: o,
    min: r,
    max: a
  };
}
function Tr(n, t, e, i) {
  return Q(n) ? qc(n, t, e, i) : t[e.axis] = e.parse(n, i), t;
}
function Hs(n, t, e, i) {
  const s = n.iScale, o = n.vScale, r = s.getLabels(), a = s === o, l = [];
  let c, d, h, u;
  for (c = e, d = e + i; c < d; ++c)
    u = t[c], h = {}, h[s.axis] = a || s.parse(r[c], c), l.push(Tr(u, h, o, c));
  return l;
}
function hi(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function Jc(n, t, e) {
  return n !== 0 ? Rt(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Zc(n) {
  let t, e, i, s, o;
  return n.horizontal ? (t = n.base > n.x, e = "left", i = "right") : (t = n.base < n.y, e = "bottom", i = "top"), t ? (s = "end", o = "start") : (s = "start", o = "end"), {
    start: e,
    end: i,
    reverse: t,
    top: s,
    bottom: o
  };
}
function Qc(n, t, e, i) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    n.borderSkipped = o;
    return;
  }
  if (s === !0) {
    n.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: r, end: a, reverse: l, top: c, bottom: d } = Zc(n);
  s === "middle" && e && (n.enableBorderRadius = !0, (e._top || 0) === i ? s = c : (e._bottom || 0) === i ? s = d : (o[js(d, r, a, l)] = !0, s = c)), o[js(s, r, a, l)] = !0, n.borderSkipped = o;
}
function js(n, t, e, i) {
  return i ? (n = td(n, t, e), n = Ns(n, e, t)) : n = Ns(n, t, e), n;
}
function td(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function Ns(n, t, e) {
  return n === "start" ? t : n === "end" ? e : n;
}
function ed(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class nd extends Te {
  static id = "bar";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "base",
          "width",
          "height"
        ]
      }
    }
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category",
        offset: !0,
        grid: {
          offset: !0
        }
      },
      _value_: {
        type: "linear",
        beginAtZero: !0
      }
    }
  };
  parsePrimitiveData(t, e, i, s) {
    return Hs(t, e, i, s);
  }
  parseArrayData(t, e, i, s) {
    return Hs(t, e, i, s);
  }
  parseObjectData(t, e, i, s) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, d = r.axis === "x" ? a : l, h = [];
    let u, f, g, p;
    for (u = i, f = i + s; u < f; ++u)
      p = e[u], g = {}, g[o.axis] = o.parse(Qt(p, c), u), h.push(Tr(Qt(p, d), g, r, u));
    return h;
  }
  updateRangeFromParsed(t, e, i, s) {
    super.updateRangeFromParsed(t, e, i, s);
    const o = i._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: i, vScale: s } = e, o = this.getParsed(t), r = o._custom, a = hi(r) ? "[" + r.start + ", " + r.end + "]" : "" + s.getLabelForValue(o[s.axis]);
    return {
      label: "" + i.getLabelForValue(o[i.axis]),
      value: a
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), d = this._getRuler(), { sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, s);
    for (let f = e; f < e + i; f++) {
      const g = this.getParsed(f), p = o || J(g[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, d), x = (g._stacks || {})[a.axis], v = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !x || hi(g._custom) || r === x._top || r === x._bottom,
        x: c ? p.head : m.center,
        y: c ? m.center : p.head,
        height: c ? m.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : m.size
      };
      u && (v.options = h || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const S = v.options || t[f].options;
      Qc(v, S, x, r), ed(v, S, d.ratio), this.updateElement(t[f], f, v, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((d) => d.controller.options.grouped), o = i.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[i.axis], c = (d) => {
      const h = d._parsed.find((f) => f[i.axis] === l), u = h && h[d.vScale.axis];
      if (J(u) || isNaN(u))
        return !0;
    };
    for (const d of s)
      if (!(e !== void 0 && c(d)) && ((o === !1 || r.indexOf(d.stack) === -1 || o === void 0 && d.stack === void 0) && r.push(d.stack), d.index === t))
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getAxisCount() {
    return this._getAxis().length;
  }
  getFirstScaleIdForIndexAxis() {
    const t = this.chart.scales, e = this.chart.options.indexAxis;
    return Object.keys(t).filter((i) => t[i].axis === e).shift();
  }
  _getAxis() {
    const t = {}, e = this.getFirstScaleIdForIndexAxis();
    for (const i of this.chart.data.datasets)
      t[B(this.chart.options.indexAxis === "x" ? i.xAxisID : i.yAxisID, e)] = !0;
    return Object.keys(t);
  }
  _getStackIndex(t, e, i) {
    const s = this._getStacks(t, i), o = e !== void 0 ? s.indexOf(e) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, i = e.iScale, s = [];
    let o, r;
    for (o = 0, r = e.data.length; o < r; ++o)
      s.push(i.getPixelForValue(this.getParsed(o)[i.axis], o));
    const a = t.barThickness;
    return {
      min: a || Xc(e),
      pixels: s,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: i, index: s }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, d = hi(c);
    let h = l[e.axis], u = 0, f = i ? this.applyStack(e, l, i) : h, g, p;
    f !== h && (u = f - h, f = h), d && (h = c.barStart, f = c.barEnd - c.barStart, h !== 0 && Rt(h) !== Rt(c.barEnd) && (u = 0), u += h);
    const m = !J(o) && !d ? o : u;
    let x = e.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(u + f) : g = x, p = g - x, Math.abs(p) < r) {
      p = Jc(p, e, a) * r, h === a && (x -= p / 2);
      const v = e.getPixelForDecimal(0), S = e.getPixelForDecimal(1), k = Math.min(v, S), w = Math.max(v, S);
      x = Math.max(Math.min(x, w), k), g = x + p, i && !d && (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(g) - e.getValueForPixel(x));
    }
    if (x === e.getPixelForValue(a)) {
      const v = Rt(p) * e.getLineWidthForValue(a) / 2;
      x += v, p -= v;
    }
    return {
      size: p,
      base: x,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale, s = this.options, o = s.skipNull, r = B(s.maxBarThickness, 1 / 0);
    let a, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const d = o ? this._getStackCount(t) : e.stackCount, h = s.barThickness === "flex" ? Kc(t, e, s, d * c) : Gc(t, e, s, d * c), u = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(B(u, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
      a = h.start + h.chunk * g + h.chunk / 2, l = Math.min(r, h.chunk * h.ratio);
    } else
      a = i.getPixelForValue(this.getParsed(t)[i.axis], t), l = Math.min(r, e.min * e.ratio);
    return {
      base: a - l / 2,
      head: a + l / 2,
      center: a,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, i = t.data, s = i.length;
    let o = 0;
    for (; o < s; ++o)
      this.getParsed(o)[e.axis] !== null && !i[o].hidden && i[o].draw(this._ctx);
  }
}
function id(n, t, e) {
  let i = 1, s = 1, o = 0, r = 0;
  if (t < st) {
    const a = n, l = a + t, c = Math.cos(a), d = Math.sin(a), h = Math.cos(l), u = Math.sin(l), f = (S, k, w) => en(S, a, l, !0) ? 1 : Math.max(k, k * e, w, w * e), g = (S, k, w) => en(S, a, l, !0) ? -1 : Math.min(k, k * e, w, w * e), p = f(0, c, h), m = f(rt, d, u), x = g(j, c, h), v = g(j + rt, d, u);
    i = (p - x) / 2, s = (m - v) / 2, o = -(p + x) / 2, r = -(m + v) / 2;
  }
  return {
    ratioX: i,
    ratioY: s,
    offsetX: o,
    offsetY: r
  };
}
class ns extends Te {
  static id = "doughnut";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing"
        ]
      }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
  };
  static descriptors = {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data, { labels: { pointStyle: i, textAlign: s, color: o, useBorderRadius: r, borderRadius: a } } = t.legend.options;
            return e.labels.length && e.datasets.length ? e.labels.map((l, c) => {
              const h = t.getDatasetMeta(0).controller.getStyle(c);
              return {
                text: l,
                fillStyle: h.backgroundColor,
                fontColor: o,
                hidden: !t.getDataVisibility(c),
                lineDash: h.borderDash,
                lineDashOffset: h.borderDashOffset,
                lineJoin: h.borderJoinStyle,
                lineWidth: h.borderWidth,
                strokeStyle: h.borderColor,
                textAlign: s,
                pointStyle: i,
                borderRadius: r && (a || h.borderRadius),
                index: c
              };
            }) : [];
          }
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      }
    }
  };
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const i = this.getDataset().data, s = this._cachedMeta;
    if (this._parsing === !1)
      s._parsed = i;
    else {
      let o = (l) => +i[l];
      if (N(i[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +Qt(i[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return ht(this.options.rotation - 90);
  }
  _getCircumference() {
    return ht(this.options.circumference);
  }
  _getRotationExtents() {
    let t = st, e = -st;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller, o = s._getRotation(), r = s._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + r);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: i } = e, s = this._cachedMeta, o = s.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(i.width, i.height) - r) / 2, 0), l = Math.min(hl(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: h } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: g, offsetY: p } = id(h, d, l), m = (i.width - r) / u, x = (i.height - r) / f, v = Math.max(Math.min(m, x) / 2, 0), S = lr(this.options.radius, v), k = Math.max(S * l, 0), w = (S - k) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * S, this.offsetY = p * S, s.total = this.calculateTotal(), this.outerRadius = S - w * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - w * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const i = this.options, s = this._cachedMeta, o = this._getCircumference();
    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / st);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, d = (a.left + a.right) / 2, h = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, s);
    let x = this._getRotation(), v;
    for (v = 0; v < e; ++v)
      x += this._circumference(v, o);
    for (v = e; v < e + i; ++v) {
      const S = this._circumference(v, o), k = t[v], w = {
        x: d + this.offsetX,
        y: h + this.offsetY,
        startAngle: x,
        endAngle: x + S,
        circumference: S,
        outerRadius: g,
        innerRadius: f
      };
      m && (w.options = p || this.resolveDataElementOptions(v, k.active ? "active" : s)), x += S, this.updateElement(k, v, w, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let i = 0, s;
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !e[s].hidden && (i += Math.abs(o));
    }
    return i;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? st * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = Un(e._parsed[t], i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const i = this.chart;
    let s, o, r, a, l;
    if (!t) {
      for (s = 0, o = i.data.datasets.length; s < o; ++s)
        if (i.isDatasetVisible(s)) {
          r = i.getDatasetMeta(s), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (s = 0, o = t.length; s < o; ++s)
      l = a.resolveDataElementOptions(s), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let i = 0, s = t.length; i < s; ++i) {
      const o = this.resolveDataElementOptions(i);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(B(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class sd extends Te {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category"
      },
      _value_: {
        type: "linear"
      }
    }
  };
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: i, data: s = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = Dl(e, s, r);
    this._drawStart = a, this._drawCount = l, Tl(e) && (a = 0, l = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = s;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(s, a, l, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: d, includeOptions: h } = this._getSharedOptions(e, s), u = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, m = de(g) ? g : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || s === "none", v = e + i, S = t.length;
    let k = e > 0 && this.getParsed(e - 1);
    for (let w = 0; w < S; ++w) {
      const P = t[w], L = x ? P : {};
      if (w < e || w >= v) {
        L.skip = !0;
        continue;
      }
      const V = this.getParsed(w), C = J(V[f]), _ = L[u] = r.getPixelForValue(V[u], w), y = L[f] = o || C ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, V, l) : V[f], w);
      L.skip = isNaN(_) || isNaN(y) || C, L.stop = w > 0 && Math.abs(V[u] - k[u]) > m, p && (L.parsed = V, L.raw = c.data[w]), h && (L.options = d || this.resolveDataElementOptions(w, P.active ? "active" : s)), x || this.updateElement(P, w, L, s), k = V;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, i = e.options && e.options.borderWidth || 0, s = t.data || [];
    if (!s.length)
      return i;
    const o = s[0].size(this.resolveDataElementOptions(0)), r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(i, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
class od extends Te {
  static id = "polarArea";
  static defaults = {
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius"
        ]
      }
    },
    indexAxis: "r",
    startAngle: 0
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const { labels: { pointStyle: i, color: s } } = t.legend.options;
              return e.labels.map((o, r) => {
                const l = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(r),
                  index: r
                };
              });
            }
            return [];
          }
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      }
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: {
          display: !1
        },
        beginAtZero: !0,
        grid: {
          circular: !0
        },
        pointLabels: {
          display: !1
        },
        startAngle: 0
      }
    }
  };
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = Un(e._parsed[t].r, i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, i, s) {
    return _r.bind(this)(t, e, i, s);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((i, s) => {
      const o = this.getParsed(s).r;
      !isNaN(o) && this.chart.getDataVisibility(s) && (o < e.min && (e.min = o), o > e.max && (e.max = o));
    }), e;
  }
  _updateRadius() {
    const t = this.chart, e = t.chartArea, i = t.options, s = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(s / 2, 0), r = Math.max(i.cutoutPercentage ? o / 100 * i.cutoutPercentage : 1, 0), a = (o - r) / t.getVisibleDatasetCount();
    this.outerRadius = o - a * this.index, this.innerRadius = this.outerRadius - a;
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, d = c.xCenter, h = c.yCenter, u = c.getIndexAngle(0) - 0.5 * j;
    let f = u, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, s, p);
    for (g = e; g < e + i; g++) {
      const m = t[g];
      let x = f, v = f + this._computeAngle(g, s, p), S = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = v, o && (l.animateScale && (S = 0), l.animateRotate && (x = v = u));
      const k = {
        x: d,
        y: h,
        innerRadius: 0,
        outerRadius: S,
        startAngle: x,
        endAngle: v,
        options: this.resolveDataElementOptions(g, m.active ? "active" : s)
      };
      this.updateElement(m, g, k, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return t.data.forEach((i, s) => {
      !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && e++;
    }), e;
  }
  _computeAngle(t, e, i) {
    return this.chart.getDataVisibility(t) ? ht(this.resolveDataElementOptions(t, e).angle || i) : 0;
  }
}
class rd extends ns {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class ad extends Te {
  static id = "radar";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: {
      line: {
        fill: "start"
      }
    }
  };
  static overrides = {
    aspectRatio: 1,
    scales: {
      r: {
        type: "radialLinear"
      }
    }
  };
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, i = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(i[e.axis])
    };
  }
  parseObjectData(t, e, i, s) {
    return _r.bind(this)(t, e, i, s);
  }
  update(t) {
    const e = this._cachedMeta, i = e.dataset, s = e.data || [], o = e.iScale.getLabels();
    if (i.points = s, t !== "resize") {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const a = {
        _loop: !0,
        _fullLoop: o.length === s.length,
        options: r
      };
      this.updateElement(i, void 0, a, t);
    }
    this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, e, i, s) {
    const o = this._cachedMeta.rScale, r = s === "reset";
    for (let a = e; a < e + i; a++) {
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : s), d = o.getPointPositionForValue(a, this.getParsed(a).r), h = r ? o.xCenter : d.x, u = r ? o.yCenter : d.y, f = {
        x: h,
        y: u,
        angle: d.angle,
        skip: isNaN(h) || isNaN(u),
        options: c
      };
      this.updateElement(l, a, f, s);
    }
  }
}
function ie() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class is {
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(is.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return ie();
  }
  parse() {
    return ie();
  }
  format() {
    return ie();
  }
  add() {
    return ie();
  }
  diff() {
    return ie();
  }
  startOf() {
    return ie();
  }
  endOf() {
    return ie();
  }
}
var ld = {
  _date: is
};
function cd(n, t, e, i) {
  const { controller: s, data: o, _sorted: r } = n, a = s._cachedMeta.iScale, l = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Ml : re;
    if (i) {
      if (s._sharedOptions) {
        const d = o[0], h = typeof d.getRange == "function" && d.getRange(t);
        if (h) {
          const u = c(o, t, e - h), f = c(o, t, e + h);
          return {
            lo: u.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const d = c(o, t, e);
      if (l) {
        const { vScale: h } = s._cachedMeta, { _parsed: u } = n, f = u.slice(0, d.lo + 1).reverse().findIndex((p) => !J(p[h.axis]));
        d.lo -= Math.max(0, f);
        const g = u.slice(d.hi).findIndex((p) => !J(p[h.axis]));
        d.hi += Math.max(0, g);
      }
      return d;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Xn(n, t, e, i, s) {
  const o = n.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: d } = o[a], { lo: h, hi: u } = cd(o[a], t, r, s);
    for (let f = h; f <= u; ++f) {
      const g = d[f];
      g.skip || i(g, c, f);
    }
  }
}
function dd(n) {
  const t = n.indexOf("x") !== -1, e = n.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, r = e ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function ui(n, t, e, i, s) {
  const o = [];
  return !s && !n.isPointInArea(t) || Xn(n, e, t, function(a, l, c) {
    !s && !jt(a, n.chartArea, 0) || a.inRange(t.x, t.y, i) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function hd(n, t, e, i) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: d } = r.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: h } = zn(r, {
      x: t.x,
      y: t.y
    });
    en(h, c, d) && s.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Xn(n, e, t, o), s;
}
function ud(n, t, e, i, s, o) {
  let r = [];
  const a = dd(e);
  let l = Number.POSITIVE_INFINITY;
  function c(d, h, u) {
    const f = d.inRange(t.x, t.y, s);
    if (i && !f)
      return;
    const g = d.getCenterPoint(s);
    if (!(!!o || n.isPointInArea(g)) && !f)
      return;
    const m = a(t, g);
    m < l ? (r = [
      {
        element: d,
        datasetIndex: h,
        index: u
      }
    ], l = m) : m === l && r.push({
      element: d,
      datasetIndex: h,
      index: u
    });
  }
  return Xn(n, e, t, c), r;
}
function fi(n, t, e, i, s, o) {
  return !o && !n.isPointInArea(t) ? [] : e === "r" && !i ? hd(n, t, e, s) : ud(n, t, e, i, s, o);
}
function Ys(n, t, e, i, s) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Xn(n, e, t, (l, c, d) => {
    l[r] && l[r](t[e], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: d
    }), a = a || l.inRange(t.x, t.y, s));
  }), i && !a ? [] : o;
}
var fd = {
  modes: {
    index(n, t, e, i) {
      const s = se(t, n), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? ui(n, s, o, i, r) : fi(n, s, o, !1, i, r), l = [];
      return a.length ? (n.getSortedVisibleDatasetMetas().forEach((c) => {
        const d = a[0].index, h = c.data[d];
        h && !h.skip && l.push({
          element: h,
          datasetIndex: c.index,
          index: d
        });
      }), l) : [];
    },
    dataset(n, t, e, i) {
      const s = se(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? ui(n, s, o, i, r) : fi(n, s, o, !1, i, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = n.getDatasetMeta(l).data;
        a = [];
        for (let d = 0; d < c.length; ++d)
          a.push({
            element: c[d],
            datasetIndex: l,
            index: d
          });
      }
      return a;
    },
    point(n, t, e, i) {
      const s = se(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ui(n, s, o, i, r);
    },
    nearest(n, t, e, i) {
      const s = se(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      return fi(n, s, o, e.intersect, i, r);
    },
    x(n, t, e, i) {
      const s = se(t, n);
      return Ys(n, s, "x", e.intersect, i);
    },
    y(n, t, e, i) {
      const s = se(t, n);
      return Ys(n, s, "y", e.intersect, i);
    }
  }
};
const Or = [
  "left",
  "top",
  "right",
  "bottom"
];
function We(n, t) {
  return n.filter((e) => e.pos === t);
}
function Us(n, t) {
  return n.filter((e) => Or.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Be(n, t) {
  return n.sort((e, i) => {
    const s = t ? i : e, o = t ? e : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function gd(n) {
  const t = [];
  let e, i, s, o, r, a;
  for (e = 0, i = (n || []).length; e < i; ++e)
    s = n[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = s, t.push({
      index: e,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function pd(n) {
  const t = {};
  for (const e of n) {
    const { stack: i, pos: s, stackWeight: o } = e;
    if (!i || !Or.includes(s))
      continue;
    const r = t[i] || (t[i] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function md(n, t) {
  const e = pd(n), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = n.length; o < r; ++o) {
    a = n[o];
    const { fullSize: l } = a.box, c = e[a.stack], d = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = d ? d * i : l && t.availableWidth, a.height = s) : (a.width = i, a.height = d ? d * s : l && t.availableHeight);
  }
  return e;
}
function bd(n) {
  const t = gd(n), e = Be(t.filter((c) => c.box.fullSize), !0), i = Be(We(t, "left"), !0), s = Be(We(t, "right")), o = Be(We(t, "top"), !0), r = Be(We(t, "bottom")), a = Us(t, "x"), l = Us(t, "y");
  return {
    fullSize: e,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: We(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function $s(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
}
function Vr(n, t) {
  n.top = Math.max(n.top, t.top), n.left = Math.max(n.left, t.left), n.bottom = Math.max(n.bottom, t.bottom), n.right = Math.max(n.right, t.right);
}
function yd(n, t, e, i) {
  const { pos: s, box: o } = e, r = n.maxPadding;
  if (!N(s)) {
    e.size && (n[s] -= e.size);
    const h = i[e.stack] || {
      size: 0,
      count: 1
    };
    h.size = Math.max(h.size, e.horizontal ? o.height : o.width), e.size = h.size / h.count, n[s] += e.size;
  }
  o.getPadding && Vr(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - $s(r, n, "left", "right")), l = Math.max(0, t.outerHeight - $s(r, n, "top", "bottom")), c = a !== n.w, d = l !== n.h;
  return n.w = a, n.h = l, e.horizontal ? {
    same: c,
    other: d
  } : {
    same: d,
    other: c
  };
}
function xd(n) {
  const t = n.maxPadding;
  function e(i) {
    const s = Math.max(t[i] - n[i], 0);
    return n[i] += s, s;
  }
  n.y += e("top"), n.x += e("left"), e("right"), e("bottom");
}
function vd(n, t) {
  const e = t.maxPadding;
  function i(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return i(n ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Ue(n, t, e, i) {
  const s = [];
  let o, r, a, l, c, d;
  for (o = 0, r = n.length, c = 0; o < r; ++o) {
    a = n[o], l = a.box, l.update(a.width || t.w, a.height || t.h, vd(a.horizontal, t));
    const { same: h, other: u } = yd(t, e, a, i);
    c |= h && s.length, d = d || u, l.fullSize || s.push(a);
  }
  return c && Ue(s, t, e, i) || d;
}
function wn(n, t, e, i, s) {
  n.top = e, n.left = t, n.right = t + i, n.bottom = e + s, n.width = i, n.height = s;
}
function Xs(n, t, e, i) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const a of n) {
    const l = a.box, c = i[a.stack] || {
      placed: 0,
      weight: 1
    }, d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const h = t.w * d, u = c.size || l.height;
      kt(c.start) && (r = c.start), l.fullSize ? wn(l, s.left, r, e.outerWidth - s.right - s.left, u) : wn(l, t.left + c.placed, r, h, u), c.start = r, c.placed += h, r = l.bottom;
    } else {
      const h = t.h * d, u = c.size || l.width;
      kt(c.start) && (o = c.start), l.fullSize ? wn(l, o, s.top, u, e.outerHeight - s.bottom - s.top) : wn(l, o, t.top + c.placed, u, h), c.start = o, c.placed += h, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Tt = {
  addBox(n, t) {
    n.boxes || (n.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, n.boxes.push(t);
  },
  removeBox(n, t) {
    const e = n.boxes ? n.boxes.indexOf(t) : -1;
    e !== -1 && n.boxes.splice(e, 1);
  },
  configure(n, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(n, t, e, i) {
    if (!n)
      return;
    const s = ft(n.options.layout.padding), o = Math.max(t - s.width, 0), r = Math.max(e - s.height, 0), a = bd(n.boxes), l = a.vertical, c = a.horizontal;
    et(n.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const d = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1, h = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: s,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / d,
      hBoxMaxHeight: r / 2
    }), u = Object.assign({}, s);
    Vr(u, ft(i));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: s.left,
      y: s.top
    }, s), g = md(l.concat(c), h);
    Ue(a.fullSize, f, h, g), Ue(l, f, h, g), Ue(c, f, h, g) && Ue(l, f, h, g), xd(f), Xs(a.leftAndTop, f, h, g), f.x += f.w, f.y += f.h, Xs(a.rightAndBottom, f, h, g), n.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, et(a.chartArea, (p) => {
      const m = p.box;
      Object.assign(m, n.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Lr {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, i) {
  }
  removeEventListener(t, e, i) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, i, s) {
    return e = Math.max(0, e || t.width), i = i || t.height, {
      width: e,
      height: Math.max(0, s ? Math.floor(e / s) : i)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class _d extends Lr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const An = "$chartjs", wd = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Gs = (n) => n === null || n === "";
function Sd(n, t) {
  const e = n.style, i = n.getAttribute("height"), s = n.getAttribute("width");
  if (n[An] = {
    initial: {
      height: i,
      width: s,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Gs(s)) {
    const o = Os(n, "width");
    o !== void 0 && (n.width = o);
  }
  if (Gs(i))
    if (n.style.height === "")
      n.height = n.width / (t || 2);
    else {
      const o = Os(n, "height");
      o !== void 0 && (n.height = o);
    }
  return n;
}
const Ir = vc ? {
  passive: !0
} : !1;
function Md(n, t, e) {
  n && n.addEventListener(t, e, Ir);
}
function kd(n, t, e) {
  n && n.canvas && n.canvas.removeEventListener(t, e, Ir);
}
function Cd(n, t) {
  const e = wd[n.type] || n.type, { x: i, y: s } = se(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null
  };
}
function Bn(n, t) {
  for (const e of n)
    if (e === t || e.contains(t))
      return !0;
}
function Pd(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Bn(a.addedNodes, i), r = r && !Bn(a.removedNodes, i);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function Ad(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Bn(a.removedNodes, i), r = r && !Bn(a.addedNodes, i);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const nn = /* @__PURE__ */ new Map();
let Ks = 0;
function Rr() {
  const n = window.devicePixelRatio;
  n !== Ks && (Ks = n, nn.forEach((t, e) => {
    e.currentDevicePixelRatio !== n && t();
  }));
}
function Dd(n, t) {
  nn.size || window.addEventListener("resize", Rr), nn.set(n, t);
}
function Td(n) {
  nn.delete(n), nn.size || window.removeEventListener("resize", Rr);
}
function Od(n, t, e) {
  const i = n.canvas, s = i && ts(i);
  if (!s)
    return;
  const o = gr((a, l) => {
    const c = s.clientWidth;
    e(a, l), c < s.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || o(c, d);
  });
  return r.observe(s), Dd(n, o), r;
}
function gi(n, t, e) {
  e && e.disconnect(), t === "resize" && Td(n);
}
function Vd(n, t, e) {
  const i = n.canvas, s = gr((o) => {
    n.ctx !== null && e(Cd(o, n));
  }, n);
  return Md(i, t, s), s;
}
class Ld extends Lr {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (Sd(t, e), i) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[An])
      return !1;
    const i = e[An].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = i[o];
      J(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      e.style[o] = s[o];
    }), e.width = e.width, delete e[An], !0;
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}), r = {
      attach: Pd,
      detach: Ad,
      resize: Od
    }[e] || Vd;
    s[e] = r(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}), s = i[e];
    if (!s)
      return;
    ({
      attach: gi,
      detach: gi,
      resize: gi
    }[e] || kd)(t, e, s), i[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return xc(t, e, i, s);
  }
  isAttached(t) {
    const e = t && ts(t);
    return !!(e && e.isConnected);
  }
}
function Id(n) {
  return !Qi() || typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas ? _d : Ld;
}
class xt {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(t) {
    const { x: e, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: i
    };
  }
  hasValue() {
    return de(this.x) && de(this.y);
  }
  getProps(t, e) {
    const i = this.$animations;
    if (!e || !i)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = i[o] && i[o].active() ? i[o]._to : this[o];
    }), s;
  }
}
function Rd(n, t) {
  const e = n.options.ticks, i = zd(n), s = Math.min(e.maxTicksLimit || i, i), o = e.major.enabled ? Wd(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > s)
    return Bd(t, c, o, r / s), c;
  const d = Ed(o, t, s);
  if (r > 0) {
    let h, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Sn(t, c, d, J(f) ? 0 : a - f, a), h = 0, u = r - 1; h < u; h++)
      Sn(t, c, d, o[h], o[h + 1]);
    return Sn(t, c, d, l, J(f) ? t.length : l + f), c;
  }
  return Sn(t, c, d), c;
}
function zd(n) {
  const t = n.options.offset, e = n._tickSize(), i = n._length / e + (t ? 0 : 1), s = n._maxLength / e;
  return Math.floor(Math.min(i, s));
}
function Ed(n, t, e) {
  const i = Fd(n), s = t.length / e;
  if (!i)
    return Math.max(s, 1);
  const o = yl(i);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function Wd(n) {
  const t = [];
  let e, i;
  for (e = 0, i = n.length; e < i; e++)
    n[e].major && t.push(e);
  return t;
}
function Bd(n, t, e, i) {
  let s = 0, o = e[0], r;
  for (i = Math.ceil(i), r = 0; r < n.length; r++)
    r === o && (t.push(n[r]), s++, o = e[s * i]);
}
function Sn(n, t, e, i, s) {
  const o = B(i, 0), r = Math.min(B(s, n.length), n.length);
  let a = 0, l, c, d;
  for (e = Math.ceil(e), s && (l = s - i, e = l / Math.floor(l / e)), d = o; d < 0; )
    a++, d = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === d && (t.push(n[c]), a++, d = Math.round(o + a * e));
}
function Fd(n) {
  const t = n.length;
  let e, i;
  if (t < 2)
    return !1;
  for (i = n[0], e = 1; e < t; ++e)
    if (n[e] - n[e - 1] !== i)
      return !1;
  return i;
}
const Hd = (n) => n === "left" ? "right" : n === "right" ? "left" : n, qs = (n, t, e) => t === "top" || t === "left" ? n[t] + e : n[t] - e, Js = (n, t) => Math.min(t || n, n);
function Zs(n, t) {
  const e = [], i = n.length / t, s = n.length;
  let o = 0;
  for (; o < s; o += i)
    e.push(n[Math.floor(o)]);
  return e;
}
function jd(n, t, e) {
  const i = n.ticks.length, s = Math.min(t, i - 1), o = n._startPixel, r = n._endPixel, a = 1e-6;
  let l = n.getPixelForTick(s), c;
  if (!(e && (i === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (n.getPixelForTick(1) - l) / 2 : c = (l - n.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Nd(n, t) {
  et(n, (e) => {
    const i = e.gc, s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete e.data[i[o]];
      i.splice(0, s);
    }
  });
}
function Fe(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function Qs(n, t) {
  if (!n.display)
    return 0;
  const e = dt(n.font, t), i = ft(n.padding);
  return (Q(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
}
function Yd(n, t) {
  return ee(n, {
    scale: t,
    type: "scale"
  });
}
function Ud(n, t, e) {
  return ee(n, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function $d(n, t, e) {
  let i = $i(n);
  return (e && t !== "right" || !e && t === "right") && (i = Hd(i)), i;
}
function Xd(n, t, e, i) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = n, { chartArea: c, scales: d } = l;
  let h = 0, u, f, g;
  const p = r - s, m = a - o;
  if (n.isHorizontal()) {
    if (f = mt(i, o, a), N(e)) {
      const x = Object.keys(e)[0], v = e[x];
      g = d[x].getPixelForValue(v) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = qs(n, e, t);
    u = a - o;
  } else {
    if (N(e)) {
      const x = Object.keys(e)[0], v = e[x];
      f = d[x].getPixelForValue(v) - m + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = qs(n, e, t);
    g = mt(i, r, s), h = e === "left" ? -rt : rt;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: u,
    rotation: h
  };
}
class Oe extends xt {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
    return t = Vt(t, Number.POSITIVE_INFINITY), e = Vt(e, Number.NEGATIVE_INFINITY), i = Vt(i, Number.POSITIVE_INFINITY), s = Vt(s, Number.NEGATIVE_INFINITY), {
      min: Vt(t, i),
      max: Vt(e, s),
      minDefined: ut(t),
      maxDefined: ut(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(), r;
    if (s && o)
      return {
        min: e,
        max: i
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), s || (e = Math.min(e, r.min)), o || (i = Math.max(i, r.max));
    return e = o && e > i ? i : e, i = s && e > i ? e : i, {
      min: Vt(e, Vt(i, e)),
      max: Vt(i, Vt(e, i))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    tt(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, i) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Jl(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Zs(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Rd(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, i;
    this.isHorizontal() ? (e = this.left, i = this.right) : (e = this.top, i = this.bottom, t = !t), this._startPixel = e, this._endPixel = i, this._reversePixels = t, this._length = i - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    tt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    tt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    tt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), tt(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    tt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      o = t[i], o.label = tt(e.callback, [
        o.value,
        i,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    tt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    tt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, i = Js(this.ticks.length, t.ticks.maxTicksLimit), s = e.minRotation || 0, o = e.maxRotation;
    let r = s, a, l, c;
    if (!this._isVisible() || !e.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const d = this._getLabelSizes(), h = d.widest.width, u = d.highest.height, f = yt(this.chart.width - h, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / i : f / (i - 1), h + 6 > a && (a = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - Fe(t.grid) - e.padding - Qs(t.title, this.chart.options.font), c = Math.sqrt(h * h + u * u), r = Yn(Math.min(Math.asin(yt((d.highest.height + 6) / a, -1, 1)), Math.asin(yt(l / c, -1, 1)) - Math.asin(yt(u / c, -1, 1)))), r = Math.max(s, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    tt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    tt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: i, title: s, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Qs(s, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Fe(o) + l) : (t.height = this.maxHeight, t.width = Fe(o) + l), i.display && this.ticks.length) {
        const { first: c, last: d, widest: h, highest: u } = this._getLabelSizes(), f = i.padding * 2, g = ht(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
        if (a) {
          const x = i.mirror ? 0 : m * h.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + x + f);
        } else {
          const x = i.mirror ? 0 : p * h.width + m * u.height;
          t.width = Math.min(this.maxWidth, t.width + x + f);
        }
        this._calculatePadding(c, d, m, p);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, i, s) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left, h = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? c ? (u = s * t.width, f = i * e.height) : (u = i * t.height, f = s * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - d + r) * this.width / (this.width - d), 0), this.paddingRight = Math.max((f - h + r) * this.width / (this.width - h), 0);
    } else {
      let d = e.height / 2, h = t.height / 2;
      o === "start" ? (d = 0, h = t.height) : o === "end" && (d = e.height, h = 0), this.paddingTop = d + r, this.paddingBottom = h + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    tt(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, i;
    for (e = 0, i = t.length; e < i; e++)
      J(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = Zs(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, i) {
    const { ctx: s, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / Js(e, i));
    let c = 0, d = 0, h, u, f, g, p, m, x, v, S, k, w;
    for (h = 0; h < e; h += l) {
      if (g = t[h].label, p = this._resolveTickFontOptions(h), s.font = m = p.string, x = o[m] = o[m] || {
        data: {},
        gc: []
      }, v = p.lineHeight, S = k = 0, !J(g) && !Q(g))
        S = En(s, x.data, x.gc, S, g), k = v;
      else if (Q(g))
        for (u = 0, f = g.length; u < f; ++u)
          w = g[u], !J(w) && !Q(w) && (S = En(s, x.data, x.gc, S, w), k += v);
      r.push(S), a.push(k), c = Math.max(S, c), d = Math.max(k, d);
    }
    Nd(o, e);
    const P = r.indexOf(c), L = a.indexOf(d), V = (C) => ({
      width: r[C] || 0,
      height: a[C] || 0
    });
    return {
      first: V(0),
      last: V(e - 1),
      widest: V(P),
      highest: V(L),
      widths: r,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Sl(this._alignToPixels ? ne(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return i.$context || (i.$context = Ud(this.getContext(), t, i));
    }
    return this.$context || (this.$context = Yd(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = ht(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * i > a * s ? a / i : l / s : l * s < a * i ? l / i : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, i = this.chart, s = this.options, { grid: o, position: r, border: a } = s, l = o.offset, c = this.isHorizontal(), h = this.ticks.length + (l ? 1 : 0), u = Fe(o), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, x = function($) {
      return ne(i, $, p);
    };
    let v, S, k, w, P, L, V, C, _, y, A, D;
    if (r === "top")
      v = x(this.bottom), L = this.bottom - u, C = v - m, y = x(t.top) + m, D = t.bottom;
    else if (r === "bottom")
      v = x(this.top), y = t.top, D = x(t.bottom) - m, L = v + m, C = this.top + u;
    else if (r === "left")
      v = x(this.right), P = this.right - u, V = v - m, _ = x(t.left) + m, A = t.right;
    else if (r === "right")
      v = x(this.left), _ = t.left, A = x(t.right) - m, P = v + m, V = this.left + u;
    else if (e === "x") {
      if (r === "center")
        v = x((t.top + t.bottom) / 2 + 0.5);
      else if (N(r)) {
        const $ = Object.keys(r)[0], q = r[$];
        v = x(this.chart.scales[$].getPixelForValue(q));
      }
      y = t.top, D = t.bottom, L = v + m, C = L + u;
    } else if (e === "y") {
      if (r === "center")
        v = x((t.left + t.right) / 2);
      else if (N(r)) {
        const $ = Object.keys(r)[0], q = r[$];
        v = x(this.chart.scales[$].getPixelForValue(q));
      }
      P = v - m, V = P - u, _ = t.left, A = t.right;
    }
    const K = B(s.ticks.maxTicksLimit, h), E = Math.max(1, Math.ceil(h / K));
    for (S = 0; S < h; S += E) {
      const $ = this.getContext(S), q = o.setContext($), b = a.setContext($), T = q.lineWidth, M = q.color, X = b.dash || [], Pt = b.dashOffset, Yt = q.tickWidth, Ct = q.tickColor, O = q.tickBorderDash || [], Z = q.tickBorderDashOffset;
      k = jd(this, S, l), k !== void 0 && (w = ne(i, k, T), c ? P = V = _ = A = w : L = C = y = D = w, f.push({
        tx1: P,
        ty1: L,
        tx2: V,
        ty2: C,
        x1: _,
        y1: y,
        x2: A,
        y2: D,
        width: T,
        color: M,
        borderDash: X,
        borderDashOffset: Pt,
        tickWidth: Yt,
        tickColor: Ct,
        tickBorderDash: O,
        tickBorderDashOffset: Z
      }));
    }
    return this._ticksLength = h, this._borderValue = v, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, i = this.options, { position: s, ticks: o } = i, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: d, mirror: h } = o, u = Fe(i.grid), f = u + d, g = h ? -d : f, p = -ht(this.labelRotation), m = [];
    let x, v, S, k, w, P, L, V, C, _, y, A, D = "middle";
    if (s === "top")
      P = this.bottom - g, L = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      P = this.top + g, L = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const E = this._getYAxisLabelAlignment(u);
      L = E.textAlign, w = E.x;
    } else if (s === "right") {
      const E = this._getYAxisLabelAlignment(u);
      L = E.textAlign, w = E.x;
    } else if (e === "x") {
      if (s === "center")
        P = (t.top + t.bottom) / 2 + f;
      else if (N(s)) {
        const E = Object.keys(s)[0], $ = s[E];
        P = this.chart.scales[E].getPixelForValue($) + f;
      }
      L = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center")
        w = (t.left + t.right) / 2 - f;
      else if (N(s)) {
        const E = Object.keys(s)[0], $ = s[E];
        w = this.chart.scales[E].getPixelForValue($);
      }
      L = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? D = "top" : l === "end" && (D = "bottom"));
    const K = this._getLabelSizes();
    for (x = 0, v = a.length; x < v; ++x) {
      S = a[x], k = S.label;
      const E = o.setContext(this.getContext(x));
      V = this.getPixelForTick(x) + o.labelOffset, C = this._resolveTickFontOptions(x), _ = C.lineHeight, y = Q(k) ? k.length : 1;
      const $ = y / 2, q = E.color, b = E.textStrokeColor, T = E.textStrokeWidth;
      let M = L;
      r ? (w = V, L === "inner" && (x === v - 1 ? M = this.options.reverse ? "left" : "right" : x === 0 ? M = this.options.reverse ? "right" : "left" : M = "center"), s === "top" ? c === "near" || p !== 0 ? A = -y * _ + _ / 2 : c === "center" ? A = -K.highest.height / 2 - $ * _ + _ : A = -K.highest.height + _ / 2 : c === "near" || p !== 0 ? A = _ / 2 : c === "center" ? A = K.highest.height / 2 - $ * _ : A = K.highest.height - y * _, h && (A *= -1), p !== 0 && !E.showLabelBackdrop && (w += _ / 2 * Math.sin(p))) : (P = V, A = (1 - y) * _ / 2);
      let X;
      if (E.showLabelBackdrop) {
        const Pt = ft(E.backdropPadding), Yt = K.heights[x], Ct = K.widths[x];
        let O = A - Pt.top, Z = 0 - Pt.left;
        switch (D) {
          case "middle":
            O -= Yt / 2;
            break;
          case "bottom":
            O -= Yt;
            break;
        }
        switch (L) {
          case "center":
            Z -= Ct / 2;
            break;
          case "right":
            Z -= Ct;
            break;
          case "inner":
            x === v - 1 ? Z -= Ct : x > 0 && (Z -= Ct / 2);
            break;
        }
        X = {
          left: Z,
          top: O,
          width: Ct + Pt.width,
          height: Yt + Pt.height,
          color: E.backdropColor
        };
      }
      m.push({
        label: k,
        font: C,
        textOffset: A,
        options: {
          rotation: p,
          color: q,
          strokeColor: b,
          strokeWidth: T,
          textAlign: M,
          textBaseline: D,
          translation: [
            w,
            P
          ],
          backdrop: X
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-ht(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return e.align === "start" ? s = "left" : e.align === "end" ? s = "right" : e.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: i, mirror: s, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, d;
    return e === "left" ? s ? (d = this.right + o, i === "near" ? c = "left" : i === "center" ? (c = "center", d += l / 2) : (c = "right", d += l)) : (d = this.right - a, i === "near" ? c = "right" : i === "center" ? (c = "center", d -= l / 2) : (c = "left", d = this.left)) : e === "right" ? s ? (d = this.left + o, i === "near" ? c = "right" : i === "center" ? (c = "center", d -= l / 2) : (c = "left", d -= l)) : (d = this.left + a, i === "near" ? c = "left" : i === "center" ? (c = "center", d += l / 2) : (c = "right", d = this.right)) : c = "right", {
      textAlign: c,
      x: d
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: i, top: s, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(i, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, d) => {
      !d.width || !d.color || (i.save(), i.lineWidth = d.width, i.strokeStyle = d.color, i.setLineDash(d.borderDash || []), i.lineDashOffset = d.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(c.x, c.y), i.stroke(), i.restore());
    };
    if (e.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        e.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: i, grid: s } } = this, o = i.setContext(this.getContext()), r = i.display ? o.width : 0;
    if (!r)
      return;
    const a = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, d, h, u;
    this.isHorizontal() ? (c = ne(t, this.left, r) - r / 2, d = ne(t, this.right, a) + a / 2, h = u = l) : (h = ne(t, this.top, r) - r / 2, u = ne(t, this.bottom, a) + a / 2, c = d = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, h), e.lineTo(d, u), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && ln(i, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, d = r.textOffset;
      ue(i, c, 0, d, l, a);
    }
    s && cn(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = dt(i.font), r = ft(i.padding), a = i.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || N(e) ? (l += r.bottom, Q(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: d, maxWidth: h, rotation: u } = Xd(this, l, e, a);
    ue(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: h,
      rotation: u,
      textAlign: $d(a, e, s),
      textBaseline: "middle",
      translation: [
        c,
        d
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, i = B(t.grid && t.grid.z, -1), s = B(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Oe.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: i,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: s,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[i] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return dt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Mn {
  constructor(t, e, i) {
    this.type = t, this.scope = e, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    qd(e) && (i = this.register(e));
    const s = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, Gd(t, r, i), this.override && ct.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, i = t.id, s = this.scope;
    i in e && delete e[i], s && i in ct[s] && (delete ct[s][i], this.override && delete he[i]);
  }
}
function Gd(n, t, e) {
  const i = tn(/* @__PURE__ */ Object.create(null), [
    e ? ct.get(e) : {},
    ct.get(t),
    n.defaults
  ]);
  ct.set(t, i), n.defaultRoutes && Kd(t, n.defaultRoutes), n.descriptors && ct.describe(t, n.descriptors);
}
function Kd(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split("."), s = i.pop(), o = [
      n
    ].concat(i).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    ct.route(o, s, l, a);
  });
}
function qd(n) {
  return "id" in n && "defaults" in n;
}
class Jd {
  constructor() {
    this.controllers = new Mn(Te, "datasets", !0), this.elements = new Mn(xt, "elements"), this.plugins = new Mn(Object, "plugins"), this.scales = new Mn(Oe, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, i) {
    [
      ...e
    ].forEach((s) => {
      const o = i || this._getRegistryForType(s);
      i || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : et(s, (r) => {
        const a = i || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, i) {
    const s = Ni(t);
    tt(i["before" + s], [], i), e[t](i), tt(i["after" + s], [], i);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e];
      if (i.isForType(t))
        return i;
    }
    return this.plugins;
  }
  _get(t, e, i) {
    const s = e.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return s;
  }
}
var It = /* @__PURE__ */ new Jd();
class Zd {
  constructor() {
    this._init = void 0;
  }
  notify(t, e, i, s) {
    if (e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")), this._init === void 0)
      return;
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), r = this._notify(o, t, e, i);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall"), this._init = void 0), r;
  }
  _notify(t, e, i, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin, a = r[i], l = [
        e,
        s,
        o.options
      ];
      if (tt(a, l, r) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    J(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config, s = B(i.options && i.options.plugins, {}), o = Qd(i);
    return s === !1 && !e ? [] : eh(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], i = this._cache, s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
  }
}
function Qd(n) {
  const t = {}, e = [], i = Object.keys(It.plugins.items);
  for (let o = 0; o < i.length; o++)
    e.push(It.getPlugin(i[o]));
  const s = n.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function th(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function eh(n, { plugins: t, localIds: e }, i, s) {
  const o = [], r = n.getContext();
  for (const a of t) {
    const l = a.id, c = th(i[l], s);
    c !== null && o.push({
      plugin: a,
      options: nh(n.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function nh(n, { plugin: t, local: e }, i, s) {
  const o = n.pluginScopeKeys(t), r = n.getOptionScopes(i, o);
  return e && t.defaults && r.push(t.defaults), n.createResolver(r, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Pi(n, t) {
  const e = ct.datasets[n] || {};
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function ih(n, t) {
  let e = n;
  return n === "_index_" ? e = t : n === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function sh(n, t) {
  return n === t ? "_index_" : "_value_";
}
function to(n) {
  if (n === "x" || n === "y" || n === "r")
    return n;
}
function oh(n) {
  if (n === "top" || n === "bottom")
    return "x";
  if (n === "left" || n === "right")
    return "y";
}
function Ai(n, ...t) {
  if (to(n))
    return n;
  for (const e of t) {
    const i = e.axis || oh(e.position) || n.length > 1 && to(n[0].toLowerCase());
    if (i)
      return i;
  }
  throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`);
}
function eo(n, t, e) {
  if (e[t + "AxisID"] === n)
    return {
      axis: t
    };
}
function rh(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((i) => i.xAxisID === n || i.yAxisID === n);
    if (e.length)
      return eo(n, "x", e[0]) || eo(n, "y", e[0]);
  }
  return {};
}
function ah(n, t) {
  const e = he[n.type] || {
    scales: {}
  }, i = t.scales || {}, s = Pi(n.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((r) => {
    const a = i[r];
    if (!N(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Ai(r, a, rh(r, n), ct.scales[a.type]), c = sh(l, s), d = e.scales || {};
    o[r] = Ge(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      d[l],
      d[c]
    ]);
  }), n.data.datasets.forEach((r) => {
    const a = r.type || n.type, l = r.indexAxis || Pi(a, t), d = (he[a] || {}).scales || {};
    Object.keys(d).forEach((h) => {
      const u = ih(h, l), f = r[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Ge(o[f], [
        {
          axis: u
        },
        i[f],
        d[h]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Ge(a, [
      ct.scales[a.type],
      ct.scale
    ]);
  }), o;
}
function zr(n) {
  const t = n.options || (n.options = {});
  t.plugins = B(t.plugins, {}), t.scales = ah(n, t);
}
function Er(n) {
  return n = n || {}, n.datasets = n.datasets || [], n.labels = n.labels || [], n;
}
function lh(n) {
  return n = n || {}, n.data = Er(n.data), zr(n), n;
}
const no = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Set();
function kn(n, t) {
  let e = no.get(n);
  return e || (e = t(), no.set(n, e), Wr.add(e)), e;
}
const He = (n, t, e) => {
  const i = Qt(t, e);
  i !== void 0 && n.add(i);
};
class ch {
  constructor(t) {
    this._config = lh(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Er(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), zr(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return kn(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return kn(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return kn(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, i = this.type;
    return kn(`${i}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (!s || e) && (s = /* @__PURE__ */ new Map(), i.set(t, s)), s;
  }
  getOptionScopes(t, e, i) {
    const { options: s, type: o } = this, r = this._cachedScopes(t, i), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((d) => {
      t && (l.add(t), d.forEach((h) => He(l, t, h))), d.forEach((h) => He(l, s, h)), d.forEach((h) => He(l, he[o] || {}, h)), d.forEach((h) => He(l, ct, h)), d.forEach((h) => He(l, ki, h));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Wr.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      he[e] || {},
      ct.datasets[e] || {},
      {
        type: e
      },
      ct,
      ki
    ];
  }
  resolveNamedOptions(t, e, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = io(this._resolverCache, t, s);
    let l = r;
    if (hh(r, e)) {
      o.$shared = !1, i = Mt(i) ? i() : i;
      const c = this.createResolver(t, i, a);
      l = Pe(r, i, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, i = [
    ""
  ], s) {
    const { resolver: o } = io(this._resolverCache, t, i);
    return N(e) ? Pe(o, e, void 0, s) : o;
  }
}
function io(n, t, e) {
  let i = n.get(t);
  i || (i = /* @__PURE__ */ new Map(), n.set(t, i));
  const s = e.join();
  let o = i.get(s);
  return o || (o = {
    resolver: qi(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const dh = (n) => N(n) && Object.getOwnPropertyNames(n).some((t) => Mt(n[t]));
function hh(n, t) {
  const { isScriptable: e, isIndexable: i } = br(n);
  for (const s of t) {
    const o = e(s), r = i(s), a = (r || o) && n[s];
    if (o && (Mt(a) || dh(a)) || r && Q(a))
      return !0;
  }
  return !1;
}
var uh = "4.5.1";
const fh = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function so(n, t) {
  return n === "top" || n === "bottom" || fh.indexOf(n) === -1 && t === "x";
}
function oo(n, t) {
  return function(e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
  };
}
function ro(n) {
  const t = n.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), tt(e && e.onComplete, [
    n
  ], t);
}
function gh(n) {
  const t = n.chart, e = t.options.animation;
  tt(e && e.onProgress, [
    n
  ], t);
}
function Br(n) {
  return Qi() && typeof n == "string" ? n = document.getElementById(n) : n && n.length && (n = n[0]), n && n.canvas && (n = n.canvas), n;
}
const Dn = {}, ao = (n) => {
  const t = Br(n);
  return Object.values(Dn).filter((e) => e.canvas === t).pop();
};
function ph(n, t, e) {
  const i = Object.keys(n);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const r = n[s];
      delete n[s], (e > 0 || o > t) && (n[o + e] = r);
    }
  }
}
function mh(n, t, e, i) {
  return !e || n.type === "mouseout" ? null : i ? t : n;
}
let ce = class {
  static defaults = ct;
  static instances = Dn;
  static overrides = he;
  static registry = It;
  static version = uh;
  static getChart = ao;
  static register(...t) {
    It.add(...t), lo();
  }
  static unregister(...t) {
    It.remove(...t), lo();
  }
  constructor(t, e) {
    const i = this.config = new ch(e), s = Br(t), o = ao(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || Id(s))(), this.platform.updateConfig(i);
    const a = this.platform.acquireContext(s, r.aspectRatio), l = a && a.canvas, c = l && l.height, d = l && l.width;
    if (this.id = dl(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Zd(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Pl((h) => this.update(h), r.resizeDelay || 0), this._dataChanges = [], Dn[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Et.listen(this, "complete", ro), Et.listen(this, "progress", gh), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: s, _aspectRatio: o } = this;
    return J(t) ? e && o ? o : s ? i / s : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return It;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ts(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Ps(this.canvas, this.ctx), this;
  }
  stop() {
    return Et.stop(this), this;
  }
  resize(t, e) {
    Et.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this.options, s = this.canvas, o = i.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(s, t, e, o), a = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Ts(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), tt(i.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    et(e, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, i = this.scales, s = Object.keys(i).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = Ai(r, a), c = l === "r", d = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : d ? "bottom" : "left",
        dtype: c ? "radialLinear" : d ? "category" : "linear"
      };
    }))), et(o, (r) => {
      const a = r.options, l = a.id, c = Ai(l, a), d = B(a.type, r.dtype);
      (a.position === void 0 || so(a.position, c) !== so(r.dposition)) && (a.position = r.dposition), s[l] = !0;
      let h = null;
      if (l in i && i[l].type === d)
        h = i[l];
      else {
        const u = It.getScale(d);
        h = new u({
          id: l,
          type: d,
          ctx: this.ctx,
          chart: this
        }), i[h.id] = h;
      }
      h.init(a, t);
    }), et(s, (r, a) => {
      r || delete i[a];
    }), et(i, (r) => {
      Tt.configure(this, r, r.options), Tt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, i = t.length;
    if (t.sort((s, o) => s.index - o.index), i > e) {
      for (let s = e; s < i; ++s)
        this._destroyDatasetMeta(s);
      t.splice(e, i - e);
    }
    this._sortedMetasets = t.slice(0).sort(oo("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((i, s) => {
      e.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let i, s;
    for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
      const o = e[i];
      let r = this.getDatasetMeta(i);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(i), r = this.getDatasetMeta(i)), r.type = a, r.indexAxis = o.indexAxis || Pi(a, this.options), r.order = o.order || 0, r.index = i, r.label = "" + o.label, r.visible = this.isDatasetVisible(i), r.controller)
        r.controller.updateIndex(i), r.controller.linkScales();
      else {
        const l = It.getController(a), { datasetElementType: c, dataElementType: d } = ct.datasets[a];
        Object.assign(l, {
          dataElementType: It.getElement(d),
          datasetElementType: c && It.getElement(c)
        }), r.controller = new l(this, i), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    et(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, d = this.data.datasets.length; c < d; c++) {
      const { controller: h } = this.getDatasetMeta(c), u = !s && o.indexOf(h) === -1;
      h.buildOrUpdateElements(u), r = Math.max(+h.getMaxOverflow(), r);
    }
    r = this._minPadding = i.layout.autoPadding ? r : 0, this._updateLayout(r), s || et(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(oo("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    et(this.scales, (t) => {
      Tt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!xs(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of e) {
      const r = i === "_removeElements" ? -o : o;
      ph(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, i = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), s = i(0);
    for (let o = 1; o < e; o++)
      if (!xs(s, i(o)))
        return;
    return Array.from(s).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Tt.update(this, this.width, this.height, t);
    const e = this.chartArea, i = e.width <= 0 || e.height <= 0;
    this._layers = [], et(this.boxes, (s) => {
      i && s.position === "chartArea" || (s.configure && s.configure(), this._layers.push(...s._layers()));
    }, this), this._layers.forEach((s, o) => {
      s._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this._updateDataset(e, Mt(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const i = this.getDatasetMeta(t), s = {
      meta: i,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Et.has(this) ? this.attached && !Et.running(this) && Et.start(this) : (this.draw(), ro({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: s } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(i, s);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, i = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const r = e[s];
      (!t || r.visible) && i.push(r);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, i = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, s = Ar(this, t);
    this.notifyPlugins("beforeDatasetDraw", i) !== !1 && (s && ln(e, s), t.controller.draw(), s && cn(e), i.cancelable = !1, this.notifyPlugins("afterDatasetDraw", i));
  }
  isPointInArea(t) {
    return jt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, s) {
    const o = fd.modes[e];
    return typeof o == "function" ? o(this, t, i, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], i = this._metasets;
    let s = i.filter((o) => o && o._dataset === e).pop();
    return s || (s = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, i.push(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = ee(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const i = this.getDatasetMeta(t);
    i.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, i) {
    const s = i ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, s);
    kt(e) ? (o.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), r.update(o, {
      visible: i
    }), this.update((a) => a.datasetIndex === t ? s : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), Et.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Ps(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Dn[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, i = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, s = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    et(this.options.events, (o) => i(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, i = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, s = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      s("attach", a), this.attached = !0, this.resize(), i("resize", o), i("detach", r);
    };
    r = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), i("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    et(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, et(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, i) {
    const s = i ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], i = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !Vn(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, i) {
    const s = this.options.hover, o = (l, c) => l.filter((d) => !c.some((h) => d.datasetIndex === h.datasetIndex && d.index === h.index)), r = o(e, t), a = i ? t : o(t, e);
    r.length && this.updateHoverStyle(r, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
  }
  _eventHandler(t, e) {
    const i = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, s) === !1)
      return;
    const o = this._handleEvent(t, e, i.inChartArea);
    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (o || i.changed) && this.render(), this;
  }
  _handleEvent(t, e, i) {
    const { _active: s = [], options: o } = this, r = e, a = this._getActiveElements(t, s, i, r), l = ml(t), c = mh(t, this._lastEvent, i, l);
    i && (this._lastEvent = null, tt(o.onHover, [
      t,
      a,
      this
    ], this), l && tt(o.onClick, [
      t,
      a,
      this
    ], this));
    const d = !Vn(a, s);
    return (d || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = c, d;
  }
  _getActiveElements(t, e, i, s) {
    if (t.type === "mouseout")
      return [];
    if (!i)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
};
function lo() {
  return et(ce.instances, (n) => n._plugins.invalidate());
}
function bh(n, t, e) {
  const { startAngle: i, x: s, y: o, outerRadius: r, innerRadius: a, options: l } = t, { borderWidth: c, borderJoinStyle: d } = l, h = Math.min(c / r, bt(i - e));
  if (n.beginPath(), n.arc(s, o, r - c / 2, i + h / 2, e - h / 2), a > 0) {
    const u = Math.min(c / a, bt(i - e));
    n.arc(s, o, a + c / 2, e - u / 2, i + u / 2, !0);
  } else {
    const u = Math.min(c / 2, r * bt(i - e));
    if (d === "round")
      n.arc(s, o, u, e - j / 2, i + j / 2, !0);
    else if (d === "bevel") {
      const f = 2 * u * u, g = -f * Math.cos(e + j / 2) + s, p = -f * Math.sin(e + j / 2) + o, m = f * Math.cos(i + j / 2) + s, x = f * Math.sin(i + j / 2) + o;
      n.lineTo(g, p), n.lineTo(m, x);
    }
  }
  n.closePath(), n.moveTo(0, 0), n.rect(0, 0, n.canvas.width, n.canvas.height), n.clip("evenodd");
}
function yh(n, t, e) {
  const { startAngle: i, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = s / a;
  n.beginPath(), n.arc(o, r, a, i - c, e + c), l > s ? (c = s / l, n.arc(o, r, l, e + c, i - c, !0)) : n.arc(o, r, s, e + rt, i - rt), n.closePath(), n.clip();
}
function xh(n) {
  return Ki(n, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function vh(n, t, e, i) {
  const s = xh(n.options.borderRadius), o = (e - t) / 2, r = Math.min(o, i * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * i / 2;
    return yt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: yt(s.innerStart, 0, r),
    innerEnd: yt(s.innerEnd, 0, r)
  };
}
function _e(n, t, e, i) {
  return {
    x: e + n * Math.cos(t),
    y: i + n * Math.sin(t)
  };
}
function Fn(n, t, e, i, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: d } = t, h = Math.max(t.outerRadius + i + e - c, 0), u = d > 0 ? d + i + e + c : 0;
  let f = 0;
  const g = s - l;
  if (i) {
    const E = d > 0 ? d - i : 0, $ = h > 0 ? h - i : 0, q = (E + $) / 2, b = q !== 0 ? g * q / (q + i) : g;
    f = (g - b) / 2;
  }
  const p = Math.max(1e-3, g * h - e / j) / h, m = (g - p) / 2, x = l + m + f, v = s - m - f, { outerStart: S, outerEnd: k, innerStart: w, innerEnd: P } = vh(t, u, h, v - x), L = h - S, V = h - k, C = x + S / L, _ = v - k / V, y = u + w, A = u + P, D = x + w / y, K = v - P / A;
  if (n.beginPath(), o) {
    const E = (C + _) / 2;
    if (n.arc(r, a, h, C, E), n.arc(r, a, h, E, _), k > 0) {
      const T = _e(V, _, r, a);
      n.arc(T.x, T.y, k, _, v + rt);
    }
    const $ = _e(A, v, r, a);
    if (n.lineTo($.x, $.y), P > 0) {
      const T = _e(A, K, r, a);
      n.arc(T.x, T.y, P, v + rt, K + Math.PI);
    }
    const q = (v - P / u + (x + w / u)) / 2;
    if (n.arc(r, a, u, v - P / u, q, !0), n.arc(r, a, u, q, x + w / u, !0), w > 0) {
      const T = _e(y, D, r, a);
      n.arc(T.x, T.y, w, D + Math.PI, x - rt);
    }
    const b = _e(L, x, r, a);
    if (n.lineTo(b.x, b.y), S > 0) {
      const T = _e(L, C, r, a);
      n.arc(T.x, T.y, S, x - rt, C);
    }
  } else {
    n.moveTo(r, a);
    const E = Math.cos(C) * h + r, $ = Math.sin(C) * h + a;
    n.lineTo(E, $);
    const q = Math.cos(_) * h + r, b = Math.sin(_) * h + a;
    n.lineTo(q, b);
  }
  n.closePath();
}
function _h(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Fn(n, t, e, i, l, s);
    for (let c = 0; c < o; ++c)
      n.fill();
    isNaN(a) || (l = r + (a % st || st));
  }
  return Fn(n, t, e, i, l, s), n.fill(), l;
}
function wh(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: d, borderDash: h, borderDashOffset: u, borderRadius: f } = l, g = l.borderAlign === "inner";
  if (!c)
    return;
  n.setLineDash(h || []), n.lineDashOffset = u, g ? (n.lineWidth = c * 2, n.lineJoin = d || "round") : (n.lineWidth = c, n.lineJoin = d || "bevel");
  let p = t.endAngle;
  if (o) {
    Fn(n, t, e, i, p, s);
    for (let m = 0; m < o; ++m)
      n.stroke();
    isNaN(a) || (p = r + (a % st || st));
  }
  g && yh(n, t, p), l.selfJoin && p - r >= j && f === 0 && d !== "miter" && bh(n, t, p), o || (Fn(n, t, e, i, p, s), n.stroke());
}
class Sh extends xt {
  static id = "arc";
  static defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
    selfJoin: !1
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor"
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash"
  };
  circumference;
  endAngle;
  fullCircles;
  innerRadius;
  outerRadius;
  pixelMargin;
  startAngle;
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.getProps([
      "x",
      "y"
    ], i), { angle: o, distance: r } = zn(s, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: d, circumference: h } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), u = (this.options.spacing + this.options.borderWidth) / 2, f = B(h, l - a), g = en(o, a, l) && a !== l, p = f >= st || g, m = Ht(r, c + u, d + u);
    return p && m;
  }
  getCenterPoint(t) {
    const { x: e, y: i, startAngle: s, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], t), { offset: l, spacing: c } = this.options, d = (s + o) / 2, h = (r + a + c + l) / 2;
    return {
      x: e + Math.cos(d) * h,
      y: i + Math.sin(d) * h
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: i } = this, s = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, r = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > st ? Math.floor(i / st) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * s, Math.sin(a) * s);
    const l = 1 - Math.sin(Math.min(j, i || 0)), c = s * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, _h(t, this, c, o, r), wh(t, this, c, o, r), t.restore();
  }
}
function Fr(n, t, e = t) {
  n.lineCap = B(e.borderCapStyle, t.borderCapStyle), n.setLineDash(B(e.borderDash, t.borderDash)), n.lineDashOffset = B(e.borderDashOffset, t.borderDashOffset), n.lineJoin = B(e.borderJoinStyle, t.borderJoinStyle), n.lineWidth = B(e.borderWidth, t.borderWidth), n.strokeStyle = B(e.borderColor, t.borderColor);
}
function Mh(n, t, e) {
  n.lineTo(e.x, e.y);
}
function kh(n) {
  return n.stepped ? jl : n.tension || n.cubicInterpolationMode === "monotone" ? Nl : Mh;
}
function Hr(n, t, e = {}) {
  const i = n.length, { start: s = 0, end: o = i - 1 } = e, { start: r, end: a } = t, l = Math.max(s, r), c = Math.min(o, a), d = s < r && o < r || s > a && o > a;
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: c < l && !d ? i + c - l : c - l
  };
}
function Ch(n, t, e, i) {
  const { points: s, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Hr(s, e, i), d = kh(o);
  let { move: h = !0, reverse: u } = i || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = s[(a + (u ? c - f : f)) % r], !g.skip && (h ? (n.moveTo(g.x, g.y), h = !1) : d(n, p, g, u, o.stepped), p = g);
  return l && (g = s[(a + (u ? c : 0)) % r], d(n, p, g, u, o.stepped)), !!l;
}
function Ph(n, t, e, i) {
  const s = t.points, { count: o, start: r, ilen: a } = Hr(s, e, i), { move: l = !0, reverse: c } = i || {};
  let d = 0, h = 0, u, f, g, p, m, x;
  const v = (k) => (r + (c ? a - k : k)) % o, S = () => {
    p !== m && (n.lineTo(d, m), n.lineTo(d, p), n.lineTo(d, x));
  };
  for (l && (f = s[v(0)], n.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = s[v(u)], f.skip)
      continue;
    const k = f.x, w = f.y, P = k | 0;
    P === g ? (w < p ? p = w : w > m && (m = w), d = (h * d + k) / ++h) : (S(), n.lineTo(k, w), g = P, h = 0, p = m = w), x = w;
  }
  S();
}
function Di(n) {
  const t = n.options, e = t.borderDash && t.borderDash.length;
  return !n._decimated && !n._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Ph : Ch;
}
function Ah(n) {
  return n.stepped ? _c : n.tension || n.cubicInterpolationMode === "monotone" ? wc : oe;
}
function Dh(n, t, e, i) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, e, i) && s.closePath()), Fr(n, t.options), n.stroke(s);
}
function Th(n, t, e, i) {
  const { segments: s, options: o } = t, r = Di(t);
  for (const a of s)
    Fr(n, o, a.style), n.beginPath(), r(n, t, a, {
      start: e,
      end: e + i - 1
    }) && n.closePath(), n.stroke();
}
const Oh = typeof Path2D == "function";
function Vh(n, t, e, i) {
  Oh && !t.options.segment ? Dh(n, t, e, i) : Th(n, t, e, i);
}
class Gn extends xt {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill"
  };
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      fc(this._points, i, t, s, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Ac(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, i = t.length;
    return i && e[t[i - 1].end];
  }
  interpolate(t, e) {
    const i = this.options, s = t[e], o = this.points, r = Pr(this, {
      property: e,
      start: s,
      end: s
    });
    if (!r.length)
      return;
    const a = [], l = Ah(i);
    let c, d;
    for (c = 0, d = r.length; c < d; ++c) {
      const { start: h, end: u } = r[c], f = o[h], g = o[u];
      if (f === g) {
        a.push(f);
        continue;
      }
      const p = Math.abs((s - f[e]) / (g[e] - f[e])), m = l(f, g, p, i.stepped);
      m[e] = t[e], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, i) {
    return Di(this)(t, this, e, i);
  }
  path(t, e, i) {
    const s = this.segments, o = Di(this);
    let r = this._loop;
    e = e || 0, i = i || this.points.length - e;
    for (const a of s)
      r &= o(t, this, a, {
        start: e,
        end: e + i - 1
      });
    return !!r;
  }
  draw(t, e, i, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Vh(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function co(n, t, e, i) {
  const s = n.options, { [e]: o } = n.getProps([
    e
  ], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Lh extends xt {
  static id = "point";
  parsed;
  skip;
  stop;
  /**
  * @type {any}
  */
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
  };
  /**
  * @type {any}
  */
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], i);
    return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(s.hitRadius + s.radius, 2);
  }
  inXRange(t, e) {
    return co(this, t, "x", e);
  }
  inYRange(t, e) {
    return co(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: i
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const i = e && t.borderWidth || 0;
    return (e + i) * 2;
  }
  draw(t, e) {
    const i = this.options;
    this.skip || i.radius < 0.1 || !jt(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Ci(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function jr(n, t) {
  const { x: e, y: i, base: s, width: o, height: r } = n.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, d, h;
  return n.horizontal ? (h = r / 2, a = Math.min(e, s), l = Math.max(e, s), c = i - h, d = i + h) : (h = o / 2, a = e - h, l = e + h, c = Math.min(i, s), d = Math.max(i, s)), {
    left: a,
    top: c,
    right: l,
    bottom: d
  };
}
function Kt(n, t, e, i) {
  return n ? 0 : yt(t, e, i);
}
function Ih(n, t, e) {
  const i = n.options.borderWidth, s = n.borderSkipped, o = mr(i);
  return {
    t: Kt(s.top, o.top, 0, e),
    r: Kt(s.right, o.right, 0, t),
    b: Kt(s.bottom, o.bottom, 0, e),
    l: Kt(s.left, o.left, 0, t)
  };
}
function Rh(n, t, e) {
  const { enableBorderRadius: i } = n.getProps([
    "enableBorderRadius"
  ]), s = n.options.borderRadius, o = Jt(s), r = Math.min(t, e), a = n.borderSkipped, l = i || N(s);
  return {
    topLeft: Kt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Kt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Kt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Kt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function zh(n) {
  const t = jr(n), e = t.right - t.left, i = t.bottom - t.top, s = Ih(n, e / 2, i / 2), o = Rh(n, e / 2, i / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: i,
      radius: o
    },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: i - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r))
      }
    }
  };
}
function pi(n, t, e, i) {
  const s = t === null, o = e === null, a = n && !(s && o) && jr(n, i);
  return a && (s || Ht(t, a.left, a.right)) && (o || Ht(e, a.top, a.bottom));
}
function Eh(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Wh(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function mi(n, t, e = {}) {
  const i = n.x !== e.x ? -t : 0, s = n.y !== e.y ? -t : 0, o = (n.x + n.w !== e.x + e.w ? t : 0) - i, r = (n.y + n.h !== e.y + e.h ? t : 0) - s;
  return {
    x: n.x + i,
    y: n.y + s,
    w: n.w + o,
    h: n.h + r,
    radius: n.radius
  };
}
class Bh extends xt {
  static id = "bar";
  static defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: o, outer: r } = zh(this), a = Eh(r.radius) ? Ce : Wh;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, mi(r, e, o)), t.clip(), a(t, mi(o, -e, r)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, mi(o, e)), t.fillStyle = s, t.fill(), t.restore();
  }
  inRange(t, e, i) {
    return pi(this, t, e, i);
  }
  inXRange(t, e) {
    return pi(this, t, null, e);
  }
  inYRange(t, e) {
    return pi(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: i, base: s, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (e + s) / 2 : e,
      y: o ? i : (i + s) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
function Fh(n, t, e) {
  const i = n.segments, s = n.points, o = t.points, r = [];
  for (const a of i) {
    let { start: l, end: c } = a;
    c = Kn(l, c, s);
    const d = Ti(e, s[l], s[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: d,
        start: s[l],
        end: s[c]
      });
      continue;
    }
    const h = Pr(t, d);
    for (const u of h) {
      const f = Ti(e, o[u.start], o[u.end], u.loop), g = Cr(a, s, f);
      for (const p of g)
        r.push({
          source: p,
          target: u,
          start: {
            [e]: ho(d, f, "start", Math.max)
          },
          end: {
            [e]: ho(d, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Ti(n, t, e, i) {
  if (i)
    return;
  let s = t[n], o = e[n];
  return n === "angle" && (s = bt(s), o = bt(o)), {
    property: n,
    start: s,
    end: o
  };
}
function Hh(n, t) {
  const { x: e = null, y: i = null } = n || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Kn(r, a, s);
    const l = s[r], c = s[a];
    i !== null ? (o.push({
      x: l.x,
      y: i
    }), o.push({
      x: c.x,
      y: i
    })) : e !== null && (o.push({
      x: e,
      y: l.y
    }), o.push({
      x: e,
      y: c.y
    }));
  }), o;
}
function Kn(n, t, e) {
  for (; t > n; t--) {
    const i = e[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function ho(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function Nr(n, t) {
  let e = [], i = !1;
  return Q(n) ? (i = !0, e = n) : e = Hh(n, t), e.length ? new Gn({
    points: e,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function uo(n) {
  return n && n.fill !== !1;
}
function jh(n, t, e) {
  let s = n[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!ut(s))
      return s;
    if (r = n[s], !r)
      return !1;
    if (r.visible)
      return s;
    o.push(s), s = r.fill;
  }
  return !1;
}
function Nh(n, t, e) {
  const i = Xh(n);
  if (N(i))
    return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return ut(s) && Math.floor(s) === s ? Yh(i[0], t, s, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function Yh(n, t, e, i) {
  return (n === "-" || n === "+") && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function Uh(n, t) {
  let e = null;
  return n === "start" ? e = t.bottom : n === "end" ? e = t.top : N(n) ? e = t.getPixelForValue(n.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function $h(n, t, e) {
  let i;
  return n === "start" ? i = e : n === "end" ? i = t.options.reverse ? t.min : t.max : N(n) ? i = n.value : i = t.getBaseValue(), i;
}
function Xh(n) {
  const t = n.options, e = t.fill;
  let i = B(e && e.target, e);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function Gh(n) {
  const { scale: t, index: e, line: i } = n, s = [], o = i.segments, r = i.points, a = Kh(t, e);
  a.push(Nr({
    x: null,
    y: t.bottom
  }, i));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let d = c.start; d <= c.end; d++)
      qh(s, r[d], a);
  }
  return new Gn({
    points: s,
    options: {}
  });
}
function Kh(n, t) {
  const e = [], i = n.getMatchingVisibleMetas("line");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function qh(n, t, e) {
  const i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s], { first: r, last: a, point: l } = Jh(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        i.unshift(l);
      else if (n.push(l), !a)
        break;
    }
  }
  n.push(...i);
}
function Jh(n, t, e) {
  const i = n.interpolate(t, e);
  if (!i)
    return {};
  const s = i[e], o = n.segments, r = n.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const d = o[c], h = r[d.start][e], u = r[d.end][e];
    if (Ht(s, h, u)) {
      a = s === h, l = s === u;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: i
  };
}
class Yr {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, i) {
    const { x: s, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: st
    }, t.arc(s, o, r, e.end, e.start, !0), !i.bounds;
  }
  interpolate(t) {
    const { x: e, y: i, radius: s } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * s,
      y: i + Math.sin(o) * s,
      angle: o
    };
  }
}
function Zh(n) {
  const { chart: t, fill: e, line: i } = n;
  if (ut(e))
    return Qh(t, e);
  if (e === "stack")
    return Gh(n);
  if (e === "shape")
    return !0;
  const s = tu(n);
  return s instanceof Yr ? s : Nr(s, i);
}
function Qh(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function tu(n) {
  return (n.scale || {}).getPointPositionForValue ? nu(n) : eu(n);
}
function eu(n) {
  const { scale: t = {}, fill: e } = n, i = Uh(e, t);
  if (ut(i)) {
    const s = t.isHorizontal();
    return {
      x: s ? i : null,
      y: s ? null : i
    };
  }
  return null;
}
function nu(n) {
  const { scale: t, fill: e } = n, i = t.options, s = t.getLabels().length, o = i.reverse ? t.max : t.min, r = $h(e, t, o), a = [];
  if (i.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Yr({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < s; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function bi(n, t, e) {
  const i = Zh(t), { chart: s, index: o, line: r, scale: a, axis: l } = t, c = r.options, d = c.fill, h = c.backgroundColor, { above: u = h, below: f = h } = d || {}, g = s.getDatasetMeta(o), p = Ar(s, g);
  i && r.points.length && (ln(n, e), iu(n, {
    line: r,
    target: i,
    above: u,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: p
  }), cn(n));
}
function iu(n, t) {
  const { line: e, target: i, above: s, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  n.save();
  let d = o;
  o !== s && (c === "x" ? (fo(n, i, r.top), yi(n, {
    line: e,
    target: i,
    color: s,
    scale: a,
    property: c,
    clip: l
  }), n.restore(), n.save(), fo(n, i, r.bottom)) : c === "y" && (go(n, i, r.left), yi(n, {
    line: e,
    target: i,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), n.restore(), n.save(), go(n, i, r.right), d = s)), yi(n, {
    line: e,
    target: i,
    color: d,
    scale: a,
    property: c,
    clip: l
  }), n.restore();
}
function fo(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, r = !1;
  n.beginPath();
  for (const a of i) {
    const { start: l, end: c } = a, d = s[l], h = s[Kn(l, c, s)];
    o ? (n.moveTo(d.x, d.y), o = !1) : (n.lineTo(d.x, e), n.lineTo(d.x, d.y)), r = !!t.pathSegment(n, a, {
      move: r
    }), r ? n.closePath() : n.lineTo(h.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function go(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, r = !1;
  n.beginPath();
  for (const a of i) {
    const { start: l, end: c } = a, d = s[l], h = s[Kn(l, c, s)];
    o ? (n.moveTo(d.x, d.y), o = !1) : (n.lineTo(e, d.y), n.lineTo(d.x, d.y)), r = !!t.pathSegment(n, a, {
      move: r
    }), r ? n.closePath() : n.lineTo(e, h.y);
  }
  n.lineTo(e, t.first().y), n.closePath(), n.clip();
}
function yi(n, t) {
  const { line: e, target: i, property: s, color: o, scale: r, clip: a } = t, l = Fh(e, i, s);
  for (const { source: c, target: d, start: h, end: u } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, g = i !== !0;
    n.save(), n.fillStyle = f, su(n, r, a, g && Ti(s, h, u)), n.beginPath();
    const p = !!e.pathSegment(n, c);
    let m;
    if (g) {
      p ? n.closePath() : po(n, i, u, s);
      const x = !!i.pathSegment(n, d, {
        move: p,
        reverse: !0
      });
      m = p && x, m || po(n, i, h, s);
    }
    n.closePath(), n.fill(m ? "evenodd" : "nonzero"), n.restore();
  }
}
function su(n, t, e, i) {
  const s = t.chart.chartArea, { property: o, start: r, end: a } = i || {};
  if (o === "x" || o === "y") {
    let l, c, d, h;
    o === "x" ? (l = r, c = s.top, d = a, h = s.bottom) : (l = s.left, c = r, d = s.right, h = a), n.beginPath(), e && (l = Math.max(l, e.left), d = Math.min(d, e.right), c = Math.max(c, e.top), h = Math.min(h, e.bottom)), n.rect(l, c, d - l, h - c), n.clip();
  }
}
function po(n, t, e, i) {
  const s = t.interpolate(e, i);
  s && n.lineTo(s.x, s.y);
}
var ou = {
  id: "filler",
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length, s = [];
    let o, r, a, l;
    for (r = 0; r < i; ++r)
      o = n.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Gn && (l = {
        visible: n.isDatasetVisible(r),
        index: r,
        fill: Nh(a, r, i),
        chart: n,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, s.push(l);
    for (r = 0; r < i; ++r)
      l = s[r], !(!l || l.fill === !1) && (l.fill = jh(s, r, e.propagate));
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === "beforeDraw", s = n.getSortedVisibleDatasetMetas(), o = n.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), i && a.fill && bi(n.ctx, a, o));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const i = n.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      uo(o) && bi(n.ctx, o, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler;
    !uo(i) || e.drawTime !== "beforeDatasetDraw" || bi(n.ctx, i, n.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const mo = (n, t) => {
  let { boxHeight: e = t, boxWidth: i = t } = n;
  return n.usePointStyle && (e = Math.min(e, t), i = n.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, ru = (n, t) => n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index;
class bo extends xt {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, i) {
    this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = tt(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((i) => t.filter(i, this.chart.data))), t.sort && (e = e.sort((i, s) => t.sort(i, s, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels, s = dt(i.font), o = s.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = mo(i, o);
    let c, d;
    e.font = s.string, this.isHorizontal() ? (c = this.maxWidth, d = this._fitRows(r, o, a, l) + 10) : (d = this.maxHeight, c = this._fitCols(r, s, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(d, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, i, s) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], d = s + a;
    let h = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -d;
    return this.legendItems.forEach((g, p) => {
      const m = i + e / 2 + o.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + m + 2 * a > r) && (h += d, c[c.length - (p > 0 ? 0 : 1)] = 0, f += d, u++), l[p] = {
        left: 0,
        top: f,
        row: u,
        width: m,
        height: s
      }, c[c.length - 1] += m + a;
    }), h;
  }
  _fitCols(t, e, i, s) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], d = r - t;
    let h = a, u = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((m, x) => {
      const { itemWidth: v, itemHeight: S } = au(i, e, o, m, s);
      x > 0 && f + S + 2 * a > d && (h += u + a, c.push({
        width: u,
        height: f
      }), g += u + a, p++, u = f = 0), l[x] = {
        left: g,
        top: f,
        col: p,
        width: v,
        height: S
      }, u = Math.max(u, v), f += S + a;
    }), h += u, c.push({
      width: u,
      height: f
    }), h;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: o } } = this, r = Me(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = mt(i, this.left + s, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = mt(i, this.left + s, this.right - this.lineWidths[a])), c.top += this.top + t + s, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + s;
    } else {
      let a = 0, l = mt(i, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = mt(i, this.top + t + s, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + s, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ln(t, this), this._draw(), cn(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: o, labels: r } = t, a = ct.color, l = Me(t.rtl, this.left, this.width), c = dt(r.font), { padding: d } = r, h = c.size, u = h / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: m } = mo(r, h), x = function(P, L, V) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      s.save();
      const C = B(V.lineWidth, 1);
      if (s.fillStyle = B(V.fillStyle, a), s.lineCap = B(V.lineCap, "butt"), s.lineDashOffset = B(V.lineDashOffset, 0), s.lineJoin = B(V.lineJoin, "miter"), s.lineWidth = C, s.strokeStyle = B(V.strokeStyle, a), s.setLineDash(B(V.lineDash, [])), r.usePointStyle) {
        const _ = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: V.pointStyle,
          rotation: V.rotation,
          borderWidth: C
        }, y = l.xPlus(P, g / 2), A = L + u;
        pr(s, _, y, A, r.pointStyleWidth && g);
      } else {
        const _ = L + Math.max((h - p) / 2, 0), y = l.leftForLtr(P, g), A = Jt(V.borderRadius);
        s.beginPath(), Object.values(A).some((D) => D !== 0) ? Ce(s, {
          x: y,
          y: _,
          w: g,
          h: p,
          radius: A
        }) : s.rect(y, _, g, p), s.fill(), C !== 0 && s.stroke();
      }
      s.restore();
    }, v = function(P, L, V) {
      ue(s, V.text, P, L + m / 2, c, {
        strikethrough: V.hidden,
        textAlign: l.textAlign(V.textAlign)
      });
    }, S = this.isHorizontal(), k = this._computeTitleHeight();
    S ? f = {
      x: mt(o, this.left + d, this.right - i[0]),
      y: this.top + d + k,
      line: 0
    } : f = {
      x: this.left + d,
      y: mt(o, this.top + k + d, this.bottom - e[0].height),
      line: 0
    }, Sr(this.ctx, t.textDirection);
    const w = m + d;
    this.legendItems.forEach((P, L) => {
      s.strokeStyle = P.fontColor, s.fillStyle = P.fontColor;
      const V = s.measureText(P.text).width, C = l.textAlign(P.textAlign || (P.textAlign = r.textAlign)), _ = g + u + V;
      let y = f.x, A = f.y;
      l.setWidth(this.width), S ? L > 0 && y + _ + d > this.right && (A = f.y += w, f.line++, y = f.x = mt(o, this.left + d, this.right - i[f.line])) : L > 0 && A + w > this.bottom && (y = f.x = y + e[f.line].width + d, f.line++, A = f.y = mt(o, this.top + k + d, this.bottom - e[f.line].height));
      const D = l.x(y);
      if (x(D, A, P), y = Al(C, y + g + u, S ? y + _ : this.right, t.rtl), v(l.x(y), A, P), S)
        f.x += _ + d;
      else if (typeof P.text != "string") {
        const K = c.lineHeight;
        f.y += Ur(P, K) + d;
      } else
        f.y += w;
    }), Mr(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, i = dt(e.font), s = ft(e.padding);
    if (!e.display)
      return;
    const o = Me(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = i.size / 2, c = s.top + l;
    let d, h = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), d = this.top + c, h = mt(t.align, h, this.right - u);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      d = c + mt(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = mt(a, h, h + u);
    r.textAlign = o.textAlign($i(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = i.string, ue(r, e.text, f, d, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = dt(t.font), i = ft(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, s, o;
    if (Ht(t, this.left, this.right) && Ht(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (s = o[i], Ht(t, s.left, s.left + s.width) && Ht(e, s.top, s.top + s.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!du(t.type, e))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = ru(s, i);
      s && !o && tt(e.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = i, i && !o && tt(e.onHover, [
        t,
        i,
        this
      ], this);
    } else i && tt(e.onClick, [
      t,
      i,
      this
    ], this);
  }
}
function au(n, t, e, i, s) {
  const o = lu(i, n, t, e), r = cu(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function lu(n, t, e, i) {
  let s = n.text;
  return s && typeof s != "string" && (s = s.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + i.measureText(s).width;
}
function cu(n, t, e) {
  let i = n;
  return typeof t.text != "string" && (i = Ur(t, e)), i;
}
function Ur(n, t) {
  const e = n.text ? n.text.length : 0;
  return t * e;
}
function du(n, t) {
  return !!((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (n === "click" || n === "mouseup"));
}
var hu = {
  id: "legend",
  _element: bo,
  start(n, t, e) {
    const i = n.legend = new bo({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Tt.configure(n, i, e), Tt.addBox(n, i);
  },
  stop(n) {
    Tt.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const i = n.legend;
    Tt.configure(n, i, e), i.options = e;
  },
  afterUpdate(n) {
    const t = n.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(n, t) {
    t.replay || n.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, t, e) {
      const i = t.datasetIndex, s = e.chart;
      s.isDatasetVisible(i) ? (s.hide(i), t.hidden = !0) : (s.show(i), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const t = n.data.datasets, { labels: { usePointStyle: e, pointStyle: i, textAlign: s, color: o, useBorderRadius: r, borderRadius: a } } = n.legend.options;
        return n._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), d = ft(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (d.width + d.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: i || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (n) => n.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith("on"),
    labels: {
      _scriptable: (n) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(n)
    }
  }
};
class $r extends xt {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const i = this.options;
    if (this.left = 0, this.top = 0, !i.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const s = Q(i.text) ? i.text.length : 1;
    this._padding = ft(i.padding);
    const o = s * dt(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: o, options: r } = this, a = r.align;
    let l = 0, c, d, h;
    return this.isHorizontal() ? (d = mt(a, i, o), h = e + t, c = o - i) : (r.position === "left" ? (d = i + t, h = mt(a, s, e), l = j * -0.5) : (d = o - t, h = mt(a, e, s), l = j * 0.5), c = s - e), {
      titleX: d,
      titleY: h,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const i = dt(e.font), o = i.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    ue(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: $i(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function uu(n, t) {
  const e = new $r({
    ctx: n.ctx,
    options: t,
    chart: n
  });
  Tt.configure(n, e, t), Tt.addBox(n, e), n.titleBlock = e;
}
var fu = {
  id: "title",
  _element: $r,
  start(n, t, e) {
    uu(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    Tt.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const i = n.titleBlock;
    Tt.configure(n, i, e), i.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const $e = {
  average(n) {
    if (!n.length)
      return !1;
    let t, e, i = /* @__PURE__ */ new Set(), s = 0, o = 0;
    for (t = 0, e = n.length; t < e; ++t) {
      const a = n[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        i.add(l.x), s += l.y, ++o;
      }
    }
    return o === 0 || i.size === 0 ? !1 : {
      x: [
        ...i
      ].reduce((a, l) => a + l) / i.size,
      y: s / o
    };
  },
  nearest(n, t) {
    if (!n.length)
      return !1;
    let e = t.x, i = t.y, s = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = n.length; o < r; ++o) {
      const l = n[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), d = ke(t, c);
        d < s && (s = d, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, i = l.y;
    }
    return {
      x: e,
      y: i
    };
  }
};
function Lt(n, t) {
  return t && (Q(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function Wt(n) {
  return (typeof n == "string" || n instanceof String) && n.indexOf(`
`) > -1 ? n.split(`
`) : n;
}
function gu(n, t) {
  const { element: e, datasetIndex: i, index: s } = t, o = n.getDatasetMeta(i).controller, { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: n,
    label: r,
    parsed: o.getParsed(s),
    raw: n.data.datasets[i].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: e
  };
}
function yo(n, t) {
  const e = n.chart.ctx, { body: i, footer: s, title: o } = n, { boxWidth: r, boxHeight: a } = t, l = dt(t.bodyFont), c = dt(t.titleFont), d = dt(t.footerFont), h = o.length, u = s.length, f = i.length, g = ft(t.padding);
  let p = g.height, m = 0, x = i.reduce((k, w) => k + w.before.length + w.lines.length + w.after.length, 0);
  if (x += n.beforeBody.length + n.afterBody.length, h && (p += h * c.lineHeight + (h - 1) * t.titleSpacing + t.titleMarginBottom), x) {
    const k = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * k + (x - f) * l.lineHeight + (x - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * d.lineHeight + (u - 1) * t.footerSpacing);
  let v = 0;
  const S = function(k) {
    m = Math.max(m, e.measureText(k).width + v);
  };
  return e.save(), e.font = c.string, et(n.title, S), e.font = l.string, et(n.beforeBody.concat(n.afterBody), S), v = t.displayColors ? r + 2 + t.boxPadding : 0, et(i, (k) => {
    et(k.before, S), et(k.lines, S), et(k.after, S);
  }), v = 0, e.font = d.string, et(n.footer, S), e.restore(), m += g.width, {
    width: m,
    height: p
  };
}
function pu(n, t) {
  const { y: e, height: i } = t;
  return e < i / 2 ? "top" : e > n.height - i / 2 ? "bottom" : "center";
}
function mu(n, t, e, i) {
  const { x: s, width: o } = i, r = e.caretSize + e.caretPadding;
  if (n === "left" && s + o + r > t.width || n === "right" && s - o - r < 0)
    return !0;
}
function bu(n, t, e, i) {
  const { x: s, width: o } = e, { width: r, chartArea: { left: a, right: l } } = n;
  let c = "center";
  return i === "center" ? c = s <= (a + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= r - o / 2 && (c = "right"), mu(c, n, t, e) && (c = "center"), c;
}
function xo(n, t, e) {
  const i = e.yAlign || t.yAlign || pu(n, e);
  return {
    xAlign: e.xAlign || t.xAlign || bu(n, t, e, i),
    yAlign: i
  };
}
function yu(n, t) {
  let { x: e, width: i } = n;
  return t === "right" ? e -= i : t === "center" && (e -= i / 2), e;
}
function xu(n, t, e) {
  let { y: i, height: s } = n;
  return t === "top" ? i += e : t === "bottom" ? i -= s + e : i -= s / 2, i;
}
function vo(n, t, e, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = n, { xAlign: a, yAlign: l } = e, c = s + o, { topLeft: d, topRight: h, bottomLeft: u, bottomRight: f } = Jt(r);
  let g = yu(t, a);
  const p = xu(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(d, u) + s : a === "right" && (g += Math.max(h, f) + s), {
    x: yt(g, 0, i.width - t.width),
    y: yt(p, 0, i.height - t.height)
  };
}
function Cn(n, t, e) {
  const i = ft(e.padding);
  return t === "center" ? n.x + n.width / 2 : t === "right" ? n.x + n.width - i.right : n.x + i.left;
}
function _o(n) {
  return Lt([], Wt(n));
}
function vu(n, t, e) {
  return ee(n, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function wo(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const Xr = {
  beforeTitle: zt,
  title(n) {
    if (n.length > 0) {
      const t = n[0], e = t.chart.data.labels, i = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (i > 0 && t.dataIndex < i)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: zt,
  beforeBody: zt,
  beforeLabel: zt,
  label(n) {
    if (this && this.options && this.options.mode === "dataset")
      return n.label + ": " + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || "";
    t && (t += ": ");
    const e = n.formattedValue;
    return J(e) || (t += e), t;
  },
  labelColor(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: zt,
  afterBody: zt,
  beforeFooter: zt,
  footer: zt,
  afterFooter: zt
};
function wt(n, t, e, i) {
  const s = n[t].call(e, i);
  return typeof s > "u" ? Xr[t].call(e, i) : s;
}
class So extends xt {
  static positioners = $e;
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, o = new es(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = vu(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: i } = e, s = wt(i, "beforeTitle", this, t), o = wt(i, "title", this, t), r = wt(i, "afterTitle", this, t);
    let a = [];
    return a = Lt(a, Wt(s)), a = Lt(a, Wt(o)), a = Lt(a, Wt(r)), a;
  }
  getBeforeBody(t, e) {
    return _o(wt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e, s = [];
    return et(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = wo(i, o);
      Lt(r.before, Wt(wt(a, "beforeLabel", this, o))), Lt(r.lines, wt(a, "label", this, o)), Lt(r.after, Wt(wt(a, "afterLabel", this, o))), s.push(r);
    }), s;
  }
  getAfterBody(t, e) {
    return _o(wt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: i } = e, s = wt(i, "beforeFooter", this, t), o = wt(i, "footer", this, t), r = wt(i, "afterFooter", this, t);
    let a = [];
    return a = Lt(a, Wt(s)), a = Lt(a, Wt(o)), a = Lt(a, Wt(r)), a;
  }
  _createItems(t) {
    const e = this._active, i = this.chart.data, s = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(gu(this.chart, e[l]));
    return t.filter && (a = a.filter((d, h, u) => t.filter(d, h, u, i))), t.itemSort && (a = a.sort((d, h) => t.itemSort(d, h, i))), et(a, (d) => {
      const h = wo(t.callbacks, d);
      s.push(wt(h, "labelColor", this, d)), o.push(wt(h, "labelPointStyle", this, d)), r.push(wt(h, "labelTextColor", this, d));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const i = this.options.setContext(this.getContext()), s = this._active;
    let o, r = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = $e[i.position].call(this, s, this._eventPosition);
      r = this._createItems(i), this.title = this.getTitle(r, i), this.beforeBody = this.getBeforeBody(r, i), this.body = this.getBody(r, i), this.afterBody = this.getAfterBody(r, i), this.footer = this.getFooter(r, i);
      const l = this._size = yo(this, i), c = Object.assign({}, a, l), d = xo(this.chart, i, c), h = vo(i, c, d, this.chart);
      this.xAlign = d.xAlign, this.yAlign = d.yAlign, o = {
        opacity: 1,
        x: h.x,
        y: h.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && i.external && i.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, i, s) {
    const o = this.getCaretPosition(t, i, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, i) {
    const { xAlign: s, yAlign: o } = this, { caretSize: r, cornerRadius: a } = i, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: h } = Jt(a), { x: u, y: f } = t, { width: g, height: p } = e;
    let m, x, v, S, k, w;
    return o === "center" ? (k = f + p / 2, s === "left" ? (m = u, x = m - r, S = k + r, w = k - r) : (m = u + g, x = m + r, S = k - r, w = k + r), v = m) : (s === "left" ? x = u + Math.max(l, d) + r : s === "right" ? x = u + g - Math.max(c, h) - r : x = this.caretX, o === "top" ? (S = f, k = S - r, m = x - r, v = x + r) : (S = f + p, k = S + r, m = x + r, v = x - r), w = S), {
      x1: m,
      x2: x,
      x3: v,
      y1: S,
      y2: k,
      y3: w
    };
  }
  drawTitle(t, e, i) {
    const s = this.title, o = s.length;
    let r, a, l;
    if (o) {
      const c = Me(i.rtl, this.x, this.width);
      for (t.x = Cn(this, i.titleAlign, i), e.textAlign = c.textAlign(i.titleAlign), e.textBaseline = "middle", r = dt(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, i, s, o) {
    const r = this.labelColors[i], a = this.labelPointStyles[i], { boxHeight: l, boxWidth: c } = o, d = dt(o.bodyFont), h = Cn(this, "left", o), u = s.x(h), f = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, g = e.y + f;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = s.leftForLtr(u, c) + c / 2, x = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ci(t, p, m, x), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Ci(t, p, m, x);
    } else {
      t.lineWidth = N(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const p = s.leftForLtr(u, c), m = s.leftForLtr(s.xPlus(u, 1), c - 2), x = Jt(r.borderRadius);
      Object.values(x).some((v) => v !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Ce(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: x
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Ce(t, {
        x: m,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: x
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(m, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: d } = i, h = dt(i.bodyFont);
    let u = h.lineHeight, f = 0;
    const g = Me(i.rtl, this.x, this.width), p = function(V) {
      e.fillText(V, g.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, m = g.textAlign(r);
    let x, v, S, k, w, P, L;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = h.string, t.x = Cn(this, m, i), e.fillStyle = i.bodyColor, et(this.beforeBody, p), f = a && m !== "right" ? r === "center" ? c / 2 + d : c + 2 + d : 0, k = 0, P = s.length; k < P; ++k) {
      for (x = s[k], v = this.labelTextColors[k], e.fillStyle = v, et(x.before, p), S = x.lines, a && S.length && (this._drawColorBox(e, t, k, g, i), u = Math.max(h.lineHeight, l)), w = 0, L = S.length; w < L; ++w)
        p(S[w]), u = h.lineHeight;
      et(x.after, p);
    }
    f = 0, u = h.lineHeight, et(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, i) {
    const s = this.footer, o = s.length;
    let r, a;
    if (o) {
      const l = Me(i.rtl, this.x, this.width);
      for (t.x = Cn(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l.textAlign(i.footerAlign), e.textBaseline = "middle", r = dt(i.footerFont), e.fillStyle = i.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: d } = i, { topLeft: h, topRight: u, bottomLeft: f, bottomRight: g } = Jt(s.cornerRadius);
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + h, l), r === "top" && this.drawCaret(t, e, i, s), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, i, s), e.lineTo(a + c, l + d - g), e.quadraticCurveTo(a + c, l + d, a + c - g, l + d), r === "bottom" && this.drawCaret(t, e, i, s), e.lineTo(a + f, l + d), e.quadraticCurveTo(a, l + d, a, l + d - f), r === "center" && o === "left" && this.drawCaret(t, e, i, s), e.lineTo(a, l + h), e.quadraticCurveTo(a, l, a + h, l), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const r = $e[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = yo(this, t), l = Object.assign({}, r, this._size), c = xo(e, t, l), d = vo(t, l, c, e);
      (s._to !== d.x || o._to !== d.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, d));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i)
      return;
    this._updateAnimationTarget(e);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const r = ft(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, e), Sr(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Mr(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const i = this._active, s = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !Vn(i, s), r = this._positionChanged(s, e);
    (o || r) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, i), a = this._positionChanged(r, t), l = e || !Vn(r, o) || a;
    return l && (this._active = r, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, i, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: i, caretY: s, options: o } = this, r = $e[o.position].call(this, t, e);
    return r !== !1 && (i !== r.x || s !== r.y);
  }
}
var _u = {
  id: "tooltip",
  _element: So,
  positioners: $e,
  afterInit(n, t, e) {
    e && (n.tooltip = new So({
      chart: n,
      options: e
    }));
  },
  beforeUpdate(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  reset(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  afterDraw(n) {
    const t = n.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (n.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(n.ctx), n.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(n, t) {
    if (n.tooltip) {
      const e = t.replay;
      n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (n, t) => t.bodyFont.size,
    boxWidth: (n, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: Xr
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (n) => n !== "filter" && n !== "itemSort" && n !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const wu = (n, t, e, i) => (typeof t == "string" ? (e = n.push(t) - 1, i.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Su(n, t, e, i) {
  const s = n.indexOf(t);
  if (s === -1)
    return wu(n, t, e, i);
  const o = n.lastIndexOf(t);
  return s !== o ? e : s;
}
const Mu = (n, t) => n === null ? null : yt(Math.round(n), 0, t);
function Mo(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class ku extends Oe {
  static id = "category";
  static defaults = {
    ticks: {
      callback: Mo
    }
  };
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const i = this.getLabels();
      for (const { index: s, label: o } of e)
        i[s] === o && i.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (J(t))
      return null;
    const i = this.getLabels();
    return e = isFinite(e) && i[e] === t ? e : Su(i, t, B(e, t), this._addedLabels), Mu(e, i.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: i, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.min, e = this.max, i = this.options.offset, s = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? 0.5 : 0);
    for (let r = t; r <= e; r++)
      s.push({
        value: r
      });
    return s;
  }
  getLabelForValue(t) {
    return Mo.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function Cu(n, t) {
  const e = [], { bounds: s, step: o, min: r, max: a, precision: l, count: c, maxTicks: d, maxDigits: h, includeBounds: u } = n, f = o || 1, g = d - 1, { min: p, max: m } = t, x = !J(r), v = !J(a), S = !J(c), k = (m - p) / (h + 1);
  let w = vs((m - p) / g / f) * f, P, L, V, C;
  if (w < 1e-14 && !x && !v)
    return [
      {
        value: p
      },
      {
        value: m
      }
    ];
  C = Math.ceil(m / w) - Math.floor(p / w), C > g && (w = vs(C * w / g / f) * f), J(l) || (P = Math.pow(10, l), w = Math.ceil(w * P) / P), s === "ticks" ? (L = Math.floor(p / w) * w, V = Math.ceil(m / w) * w) : (L = p, V = m), x && v && o && vl((a - r) / o, w / 1e3) ? (C = Math.round(Math.min((a - r) / w, d)), w = (a - r) / C, L = r, V = a) : S ? (L = x ? r : L, V = v ? a : V, C = c - 1, w = (V - L) / C) : (C = (V - L) / w, Ke(C, Math.round(C), w / 1e3) ? C = Math.round(C) : C = Math.ceil(C));
  const _ = Math.max(_s(w), _s(L));
  P = Math.pow(10, J(l) ? _ : l), L = Math.round(L * P) / P, V = Math.round(V * P) / P;
  let y = 0;
  for (x && (u && L !== r ? (e.push({
    value: r
  }), L < r && y++, Ke(Math.round((L + y * w) * P) / P, r, ko(r, k, n)) && y++) : L < r && y++); y < C; ++y) {
    const A = Math.round((L + y * w) * P) / P;
    if (v && A > a)
      break;
    e.push({
      value: A
    });
  }
  return v && u && V !== a ? e.length && Ke(e[e.length - 1].value, a, ko(a, k, n)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!v || V === a) && e.push({
    value: V
  }), e;
}
function ko(n, t, { horizontal: e, minRotation: i }) {
  const s = ht(i), o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3, r = 0.75 * t * ("" + n).length;
  return Math.min(t / o, r);
}
class Oi extends Oe {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return J(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: i } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => s = e ? s : l, a = (l) => o = i ? o : l;
    if (t) {
      const l = Rt(s), c = Rt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(s - l);
    }
    this.min = s, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: i } = t, s;
    return i ? (s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, s > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`), s = 1e3)) : (s = this.computeTickLimit(), e = e || 11), e && (s = Math.min(e, s)), s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = {
      maxTicks: i,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, r = Cu(s, o);
    return t.bounds === "ticks" && _l(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, i = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const s = (i - e) / Math.max(t.length - 1, 1) / 2;
      e -= s, i += s;
    }
    this._startValue = e, this._endValue = i, this._valueRange = i - e;
  }
  getLabelForValue(t) {
    return Un(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Pu extends Oi {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Gi.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = ut(t) ? t : 0, this.max = ut(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, i = ht(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
function Vi(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = ft(t.backdropPadding);
    return B(t.font && t.font.size, ct.font.size) + e.height;
  }
  return 0;
}
function Au(n, t, e) {
  return e = Q(e) ? e : [
    e
  ], {
    w: Hl(n, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Co(n, t, e, i, s) {
  return n === i || n === s ? {
    start: t - e / 2,
    end: t + e / 2
  } : n < i || n > s ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function Du(n) {
  const t = {
    l: n.left + n._padding.left,
    r: n.right - n._padding.right,
    t: n.top + n._padding.top,
    b: n.bottom - n._padding.bottom
  }, e = Object.assign({}, t), i = [], s = [], o = n._pointLabels.length, r = n.options.pointLabels, a = r.centerPointLabels ? j / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(n.getPointLabelContext(l));
    s[l] = c.padding;
    const d = n.getPointPosition(l, n.drawingArea + s[l], a), h = dt(c.font), u = Au(n.ctx, h, n._pointLabels[l]);
    i[l] = u;
    const f = bt(n.getIndexAngle(l) + a), g = Math.round(Yn(f)), p = Co(g, d.x, u.w, 0, 180), m = Co(g, d.y, u.h, 90, 270);
    Tu(e, t, f, p, m);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), n._pointLabelItems = Lu(n, i, s);
}
function Tu(n, t, e, i, s) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  i.start < t.l ? (a = (t.l - i.start) / o, n.l = Math.min(n.l, t.l - a)) : i.end > t.r && (a = (i.end - t.r) / o, n.r = Math.max(n.r, t.r + a)), s.start < t.t ? (l = (t.t - s.start) / r, n.t = Math.min(n.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / r, n.b = Math.max(n.b, t.b + l));
}
function Ou(n, t, e) {
  const i = n.drawingArea, { extra: s, additionalAngle: o, padding: r, size: a } = e, l = n.getPointPosition(t, i + s + r, o), c = Math.round(Yn(bt(l.angle + rt))), d = zu(l.y, a.h, c), h = Iu(c), u = Ru(l.x, a.w, h);
  return {
    visible: !0,
    x: l.x,
    y: d,
    textAlign: h,
    left: u,
    top: d,
    right: u + a.w,
    bottom: d + a.h
  };
}
function Vu(n, t) {
  if (!t)
    return !0;
  const { left: e, top: i, right: s, bottom: o } = n;
  return !(jt({
    x: e,
    y: i
  }, t) || jt({
    x: e,
    y: o
  }, t) || jt({
    x: s,
    y: i
  }, t) || jt({
    x: s,
    y: o
  }, t));
}
function Lu(n, t, e) {
  const i = [], s = n._pointLabels.length, o = n.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: Vi(o) / 2,
    additionalAngle: r ? j / s : 0
  };
  let c;
  for (let d = 0; d < s; d++) {
    l.padding = e[d], l.size = t[d];
    const h = Ou(n, d, l);
    i.push(h), a === "auto" && (h.visible = Vu(h, c), h.visible && (c = h));
  }
  return i;
}
function Iu(n) {
  return n === 0 || n === 180 ? "center" : n < 180 ? "left" : "right";
}
function Ru(n, t, e) {
  return e === "right" ? n -= t : e === "center" && (n -= t / 2), n;
}
function zu(n, t, e) {
  return e === 90 || e === 270 ? n -= t / 2 : (e > 270 || e < 90) && (n -= t), n;
}
function Eu(n, t, e) {
  const { left: i, top: s, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!J(a)) {
    const l = Jt(t.borderRadius), c = ft(t.backdropPadding);
    n.fillStyle = a;
    const d = i - c.left, h = s - c.top, u = o - i + c.width, f = r - s + c.height;
    Object.values(l).some((g) => g !== 0) ? (n.beginPath(), Ce(n, {
      x: d,
      y: h,
      w: u,
      h: f,
      radius: l
    }), n.fill()) : n.fillRect(d, h, u, f);
  }
}
function Wu(n, t) {
  const { ctx: e, options: { pointLabels: i } } = n;
  for (let s = t - 1; s >= 0; s--) {
    const o = n._pointLabelItems[s];
    if (!o.visible)
      continue;
    const r = i.setContext(n.getPointLabelContext(s));
    Eu(e, r, o);
    const a = dt(r.font), { x: l, y: c, textAlign: d } = o;
    ue(e, n._pointLabels[s], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: d,
      textBaseline: "middle"
    });
  }
}
function Gr(n, t, e, i) {
  const { ctx: s } = n;
  if (e)
    s.arc(n.xCenter, n.yCenter, t, 0, st);
  else {
    let o = n.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < i; r++)
      o = n.getPointPosition(r, t), s.lineTo(o.x, o.y);
  }
}
function Bu(n, t, e, i, s) {
  const o = n.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !i || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(s.dash || []), o.lineDashOffset = s.dashOffset, o.beginPath(), Gr(n, e, r, i), o.closePath(), o.stroke(), o.restore());
}
function Fu(n, t, e) {
  return ee(n, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Hu extends Oi {
  static id = "radialLinear";
  static defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: !1
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: !0,
      callback: Gi.formatters.numeric
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {
        size: 10
      },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1
    }
  };
  static defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  };
  static descriptors = {
    angleLines: {
      _fallback: "grid"
    }
  };
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = ft(Vi(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = ut(t) && !isNaN(t) ? t : 0, this.max = ut(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Vi(this.options));
  }
  generateTickLabels(t) {
    Oi.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, i) => {
      const s = tt(this.options.pointLabels.callback, [
        e,
        i
      ], this);
      return s || s === 0 ? s : "";
    }).filter((e, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Du(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, s) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
  }
  getIndexAngle(t) {
    const e = st / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return bt(t * e + ht(i));
  }
  getDistanceFromCenterForValue(t) {
    if (J(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (J(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return Fu(this.getContext(), t, i);
    }
  }
  getPointPosition(t, e, i = 0) {
    const s = this.getIndexAngle(t) - rt + i;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: i, right: s, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: i,
      right: s,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(), i.beginPath(), Gr(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: i, grid: s, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && Wu(this, r), s.display && this.ticks.forEach((d, h) => {
      if (h !== 0 || h === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(d.value);
        const u = this.getContext(h), f = s.setContext(u), g = o.setContext(u);
        Bu(this, f, l, r, g);
      }
    }), i.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const d = i.setContext(this.getPointLabelContext(a)), { color: h, lineWidth: u } = d;
        !u || !h || (t.lineWidth = u, t.strokeStyle = h, t.setLineDash(d.borderDash), t.lineDashOffset = d.borderDashOffset, l = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, i = e.ticks;
    if (!i.display)
      return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && this.min >= 0 && !e.reverse)
        return;
      const c = i.setContext(this.getContext(l)), d = dt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = d.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const h = ft(c.backdropPadding);
        t.fillRect(-r / 2 - h.left, -o - d.size / 2 - h.top, r + h.width, d.size + h.height);
      }
      ue(t, a.label, 0, -o, d, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const qn = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, St = /* @__PURE__ */ Object.keys(qn);
function Po(n, t) {
  return n - t;
}
function Ao(n, t) {
  if (J(t))
    return null;
  const e = n._adapter, { parser: i, round: s, isoWeekday: o } = n._parseOpts;
  let r = t;
  return typeof i == "function" && (r = i(r)), ut(r) || (r = typeof i == "string" ? e.parse(r, i) : e.parse(r)), r === null ? null : (s && (r = s === "week" && (de(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, s)), +r);
}
function Do(n, t, e, i) {
  const s = St.length;
  for (let o = St.indexOf(n); o < s - 1; ++o) {
    const r = qn[St[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= i)
      return St[o];
  }
  return St[s - 1];
}
function ju(n, t, e, i, s) {
  for (let o = St.length - 1; o >= St.indexOf(e); o--) {
    const r = St[o];
    if (qn[r].common && n._adapter.diff(s, i, r) >= t - 1)
      return r;
  }
  return St[e ? St.indexOf(e) : 0];
}
function Nu(n) {
  for (let t = St.indexOf(n) + 1, e = St.length; t < e; ++t)
    if (qn[St[t]].common)
      return St[t];
}
function To(n, t, e) {
  if (!e)
    n[t] = !0;
  else if (e.length) {
    const { lo: i, hi: s } = Ui(e, t), o = e[i] >= t ? e[i] : e[s];
    n[o] = !0;
  }
}
function Yu(n, t, e, i) {
  const s = n._adapter, o = +s.startOf(t[0].value, i), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, i))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Oo(n, t, e) {
  const i = [], s = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], s[a] = r, i.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? i : Yu(n, i, s, e);
}
class Vo extends Oe {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      callback: !1,
      major: {
        enabled: !1
      }
    }
  };
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}), s = this._adapter = new ld._date(t.adapters.date);
    s.init(e), Ge(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Ao(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, i = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = ut(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), o = ut(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], i = t[t.length - 1]), {
      min: e,
      max: i
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, i = t.ticks, s = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, r = this.max, a = kl(s, o, r);
    return this._unit = e.unit || (i.autoSkip ? Do(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : ju(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : Nu(this._unit), this.initOffsets(s), t.reverse && a.reverse(), Oo(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, i = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - s : e = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = yt(e, 0, r), i = yt(i, 0, r), this._offsets = {
      start: e,
      end: i,
      factor: 1 / (e + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, i = this.max, s = this.options, o = s.time, r = o.unit || Do(o.minUnit, e, i, this._getLabelCapacity(e)), a = B(s.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = de(l) || l === !0, d = {};
    let h = e, u, f;
    if (c && (h = +t.startOf(h, "isoWeek", l)), h = +t.startOf(h, c ? "day" : r), t.diff(i, e, r) > 1e5 * a)
      throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + r);
    const g = s.ticks.source === "data" && this.getDataTimestamps();
    for (u = h, f = 0; u < i; u = +t.add(u, a, r), f++)
      To(d, u, g);
    return (u === i || s.bounds === "ticks" || f === 1) && To(d, u, g), Object.keys(d).sort(Po).map((p) => +p);
  }
  getLabelForValue(t) {
    const e = this._adapter, i = this.options.time;
    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats, o = this._unit, r = e || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, i, s) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return tt(r, [
        t,
        e,
        i
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, d = l && a[l], h = c && a[c], u = i[e], f = c && h && u && u.major;
    return this._adapter.format(t, s || (f ? h : d));
  }
  generateTickLabels(t) {
    let e, i, s;
    for (e = 0, i = t.length; e < i; ++e)
      s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + i) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, i = this.ctx.measureText(t).width, s = ht(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(s), r = Math.sin(s), a = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + a * r,
      h: i * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, Oo(this, [
      t
    ], this._majorUnit), s), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, i;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (e = 0, i = s.length; e < i; ++e)
      t = t.concat(s[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, i;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (e = 0, i = s.length; e < i; ++e)
      t.push(Ao(this, s[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return ur(t.sort(Po));
  }
}
function Pn(n, t, e) {
  let i = 0, s = n.length - 1, o, r, a, l;
  e ? (t >= n[i].pos && t <= n[s].pos && ({ lo: i, hi: s } = re(n, "pos", t)), { pos: o, time: a } = n[i], { pos: r, time: l } = n[s]) : (t >= n[i].time && t <= n[s].time && ({ lo: i, hi: s } = re(n, "time", t)), { time: o, pos: a } = n[i], { time: r, pos: l } = n[s]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Lp extends Vo {
  static id = "timeseries";
  static defaults = Vo.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Pn(e, this.min), this._tableRange = Pn(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this, s = [], o = [];
    let r, a, l, c, d;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= i && s.push(c);
    if (s.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: i,
          pos: 1
        }
      ];
    for (r = 0, a = s.length; r < a; ++r)
      d = s[r + 1], l = s[r - 1], c = s[r], Math.round((d + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let i = super.getDataTimestamps();
    return (!i.includes(t) || !i.length) && i.splice(0, 0, t), (!i.includes(e) || i.length === 1) && i.push(e), i.sort((s, o) => s - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), i = this.getLabelTimestamps();
    return e.length && i.length ? t = this.normalize(e.concat(i)) : t = e.length ? e : i, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Pn(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return Pn(this._table, i * this._tableRange + this._minPos, !0);
  }
}
const Kr = {
  data: {
    type: Object,
    required: !0
  },
  options: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  datasetIdKey: {
    type: String,
    default: "label"
  },
  updateMode: {
    type: String,
    default: void 0
  }
}, Uu = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, $u = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...Kr,
  ...Uu
}, Xu = Ta[0] === "2" ? (n, t) => Object.assign(n, {
  attrs: t
}) : (n, t) => Object.assign(n, t);
function we(n) {
  return nr(n) ? wi(n) : n;
}
function Gu(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : n;
  return nr(t) ? new Proxy(n, {}) : n;
}
function Ku(n, t) {
  const e = n.options;
  e && t && Object.assign(e, t);
}
function qr(n, t) {
  n.labels = t;
}
function Jr(n, t, e) {
  const i = [];
  n.datasets = t.map((s) => {
    const o = n.datasets.find((r) => r[e] === s[e]);
    return !o || !s.data || i.includes(o) ? {
      ...s
    } : (i.push(o), Object.assign(o, s), o);
  });
}
function qu(n, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return qr(e, n.labels), Jr(e, n.datasets, t), e;
}
const Ju = Nn({
  props: $u,
  setup(n, t) {
    let { expose: e, slots: i } = t;
    const s = Ft(null), o = tr(null);
    e({
      chart: o
    });
    const r = () => {
      if (!s.value) return;
      const { type: c, data: d, options: h, plugins: u, datasetIdKey: f } = n, g = qu(d, f), p = Gu(g, d);
      o.value = new ce(s.value, {
        type: c,
        data: p,
        options: {
          ...h
        },
        plugins: u
      });
    }, a = () => {
      const c = wi(o.value);
      c && (n.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, n.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(n.updateMode);
    };
    return On(r), er(a), Ze([
      () => n.options,
      () => n.data
    ], (c, d) => {
      let [h, u] = c, [f, g] = d;
      const p = wi(o.value);
      if (!p)
        return;
      let m = !1;
      if (h) {
        const x = we(h), v = we(f);
        x && x !== v && (Ku(p, x), m = !0);
      }
      if (u) {
        const x = we(u.labels), v = we(g.labels), S = we(u.datasets), k = we(g.datasets);
        x !== v && (qr(p.config.data, x), m = !0), S && S !== k && (Jr(p.config.data, S, n.datasetIdKey), m = !0);
      }
      m && Da(() => {
        l(p);
      });
    }, {
      deep: !0
    }), () => _i("canvas", {
      role: "img",
      "aria-label": n.ariaLabel,
      "aria-describedby": n.ariaDescribedby,
      ref: s
    }, [
      _i("p", {}, [
        i.default ? i.default() : ""
      ])
    ]);
  }
});
function Ve(n, t) {
  return ce.register(t), Nn({
    props: Kr,
    setup(e, i) {
      let { expose: s } = i;
      const o = tr(null), r = (a) => {
        o.value = a?.chart;
      };
      return s({
        chart: o
      }), () => _i(Ju, Xu({
        ref: r
      }, {
        type: n,
        ...e
      }));
    }
  });
}
const xi = /* @__PURE__ */ Ve("bar", nd), Zu = /* @__PURE__ */ Ve("doughnut", ns), Qu = /* @__PURE__ */ Ve("line", sd), tf = /* @__PURE__ */ Ve("pie", rd), ef = /* @__PURE__ */ Ve("polarArea", od), nf = /* @__PURE__ */ Ve("radar", ad);
/*!
* chartjs-plugin-annotation v3.1.0
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2024 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */
const Lo = {
  modes: {
    /**
     * Point mode returns all elements that hit test based on the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @return {AnnotationElement[]} - elements that are found
     */
    point(n, t) {
      return Tn(n, t, { intersect: !0 });
    },
    /**
     * Nearest mode returns the element closest to the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found (only 1 element)
     */
    nearest(n, t, e) {
      return rf(n, t, e);
    },
    /**
     * x mode returns the elements that hit-test at the current x coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    x(n, t, e) {
      return Tn(n, t, { intersect: e.intersect, axis: "x" });
    },
    /**
     * y mode returns the elements that hit-test at the current y coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    y(n, t, e) {
      return Tn(n, t, { intersect: e.intersect, axis: "y" });
    }
  }
};
function ss(n, t, e) {
  return (Lo.modes[e.mode] || Lo.modes.nearest)(n, t, e);
}
function sf(n, t, e) {
  return e !== "x" && e !== "y" ? n.inRange(t.x, t.y, "x", !0) || n.inRange(t.x, t.y, "y", !0) : n.inRange(t.x, t.y, e, !0);
}
function of(n, t, e) {
  return e === "x" ? { x: n.x, y: t.y } : e === "y" ? { x: t.x, y: n.y } : t;
}
function Tn(n, t, e) {
  return n.filter((i) => e.intersect ? i.inRange(t.x, t.y) : sf(i, t, e.axis));
}
function rf(n, t, e) {
  let i = Number.POSITIVE_INFINITY;
  return Tn(n, t, e).reduce((s, o) => {
    const r = o.getCenterPoint(), a = of(t, r, e.axis), l = ke(t, a);
    return l < i ? (s = [o], i = l) : l === i && s.push(o), s;
  }, []).sort((s, o) => s._index - o._index).slice(0, 1);
}
function ge(n, t, e) {
  const i = Math.cos(e), s = Math.sin(e), o = t.x, r = t.y;
  return {
    x: o + i * (n.x - o) - s * (n.y - r),
    y: r + s * (n.x - o) + i * (n.y - r)
  };
}
const af = (n, t) => t > n || n.length > t.length && n.slice(0, t.length) === t, ae = 1e-3, Jn = (n, t, e) => Math.min(e, Math.max(t, n)), Zr = (n, t) => n.value >= n.start - t && n.value <= n.end + t;
function lf(n, t, e) {
  for (const i of Object.keys(n))
    n[i] = Jn(n[i], t, e);
  return n;
}
function cf(n, t, e, i) {
  return !n || !t || e <= 0 ? !1 : Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2) <= Math.pow(e + i, 2);
}
function Qr(n, { x: t, y: e, x2: i, y2: s }, o, { borderWidth: r, hitTolerance: a }) {
  const l = (r + a) / 2, c = n.x >= t - l - ae && n.x <= i + l + ae, d = n.y >= e - l - ae && n.y <= s + l + ae;
  return o === "x" ? c : (o === "y" || c) && d;
}
function ta(n, { rect: t, center: e }, i, { rotation: s, borderWidth: o, hitTolerance: r }) {
  const a = ge(n, e, ht(-s));
  return Qr(a, t, i, { borderWidth: o, hitTolerance: r });
}
function pe(n, t) {
  const { centerX: e, centerY: i } = n.getProps(["centerX", "centerY"], t);
  return { x: e, y: i };
}
function df(n, t, e, i = !0) {
  const s = e.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = s[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (af(a, r)) {
      if (i)
        throw new Error(`${n} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const ea = (n) => typeof n == "string" && n.endsWith("%"), na = (n) => parseFloat(n) / 100, ia = (n) => Jn(na(n), 0, 1), je = (n, t) => ({ x: n, y: t, x2: n, y2: t, width: 0, height: 0 }), hf = {
  box: (n) => je(n.centerX, n.centerY),
  doughnutLabel: (n) => je(n.centerX, n.centerY),
  ellipse: (n) => ({ centerX: n.centerX, centerY: n.centerX, radius: 0, width: 0, height: 0 }),
  label: (n) => je(n.centerX, n.centerY),
  line: (n) => je(n.x, n.y),
  point: (n) => ({ centerX: n.centerX, centerY: n.centerY, radius: 0, width: 0, height: 0 }),
  polygon: (n) => je(n.centerX, n.centerY)
};
function os(n, t) {
  return t === "start" ? 0 : t === "end" ? n : ea(t) ? ia(t) * n : n / 2;
}
function te(n, t, e = !0) {
  return typeof t == "number" ? t : ea(t) ? (e ? ia(t) : na(t)) * n : n;
}
function uf(n, t) {
  const { x: e, width: i } = n, s = t.textAlign;
  return s === "center" ? e + i / 2 : s === "end" || s === "right" ? e + i : e;
}
function sa(n, t, { borderWidth: e, position: i, xAdjust: s, yAdjust: o }, r) {
  const a = N(r), l = t.width + (a ? r.width : 0) + e, c = t.height + (a ? r.height : 0) + e, d = rs(i), h = Io(n.x, l, s, d.x), u = Io(n.y, c, o, d.y);
  return {
    x: h,
    y: u,
    x2: h + l,
    y2: u + c,
    width: l,
    height: c,
    centerX: h + l / 2,
    centerY: u + c / 2
  };
}
function rs(n, t = "center") {
  return N(n) ? {
    x: B(n.x, t),
    y: B(n.y, t)
  } : (n = B(n, t), {
    x: n,
    y: n
  });
}
const oa = (n, t) => n && n.autoFit && t < 1;
function ra(n, t) {
  const e = n.font, i = Q(e) ? e : [e];
  return oa(n, t) ? i.map(function(s) {
    const o = dt(s);
    return o.size = Math.floor(s.size * t), o.lineHeight = s.lineHeight, dt(o);
  }) : i.map((s) => dt(s));
}
function aa(n) {
  return n && (kt(n.xValue) || kt(n.yValue));
}
function Io(n, t, e = 0, i) {
  return n - os(t, i) + e;
}
function Le(n, t, e) {
  const i = e.init;
  if (i) {
    if (i === !0)
      return ca(t, e);
  } else return;
  return ff(n, t, e);
}
function la(n, t, e) {
  let i = !1;
  return t.forEach((s) => {
    Mt(n[s]) ? (i = !0, e[s] = n[s]) : kt(e[s]) && delete e[s];
  }), i;
}
function ca(n, t) {
  const e = t.type || "line";
  return hf[e](n);
}
function ff(n, t, e) {
  const i = tt(e.init, [{ chart: n, properties: t, options: e }]);
  if (i === !0)
    return ca(t, e);
  if (N(i))
    return i;
}
const vi = /* @__PURE__ */ new Map(), gf = (n) => isNaN(n) || n <= 0, pf = (n) => n.reduce(function(t, e) {
  return t += e.string, t;
}, "");
function Zn(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function Qn(n, { x: t, y: e }, i) {
  i && (n.translate(t, e), n.rotate(ht(i)), n.translate(-t, -e));
}
function Nt(n, t) {
  if (t && t.borderWidth)
    return n.lineCap = t.borderCapStyle || "butt", n.setLineDash(t.borderDash), n.lineDashOffset = t.borderDashOffset, n.lineJoin = t.borderJoinStyle || "miter", n.lineWidth = t.borderWidth, n.strokeStyle = t.borderColor, !0;
}
function Ie(n, t) {
  n.shadowColor = t.backgroundShadowColor, n.shadowBlur = t.shadowBlur, n.shadowOffsetX = t.shadowOffsetX, n.shadowOffsetY = t.shadowOffsetY;
}
function ti(n, t) {
  const e = t.content;
  if (Zn(e))
    return {
      width: te(e.width, t.width),
      height: te(e.height, t.height)
    };
  const i = ra(t), s = t.textStrokeWidth, o = Q(e) ? e : [e], r = o.join() + pf(i) + s + (n._measureText ? "-spriting" : "");
  return vi.has(r) || vi.set(r, xf(n, o, i, s)), vi.get(r);
}
function da(n, t, e) {
  const { x: i, y: s, width: o, height: r } = t;
  n.save(), Ie(n, e);
  const a = Nt(n, e);
  n.fillStyle = e.backgroundColor, n.beginPath(), Ce(n, {
    x: i,
    y: s,
    w: o,
    h: r,
    radius: lf(Jt(e.borderRadius), 0, Math.min(o, r) / 2)
  }), n.closePath(), n.fill(), a && (n.shadowColor = e.borderShadowColor, n.stroke()), n.restore();
}
function ha(n, t, e, i) {
  const s = e.content;
  if (Zn(s)) {
    n.save(), n.globalAlpha = wf(e.opacity, s.style.opacity), n.drawImage(s, t.x, t.y, t.width, t.height), n.restore();
    return;
  }
  const o = Q(s) ? s : [s], r = ra(e, i), a = e.color, l = Q(a) ? a : [a], c = uf(t, e), d = t.y + e.textStrokeWidth / 2;
  n.save(), n.textBaseline = "middle", n.textAlign = e.textAlign, mf(n, e) && vf(n, { x: c, y: d }, o, r), _f(n, { x: c, y: d }, o, { fonts: r, colors: l }), n.restore();
}
function mf(n, t) {
  if (t.textStrokeWidth > 0)
    return n.lineJoin = "round", n.miterLimit = 2, n.lineWidth = t.textStrokeWidth, n.strokeStyle = t.textStrokeColor, !0;
}
function bf(n, t, e, i) {
  const { radius: s, options: o } = t, r = o.pointStyle, a = o.rotation;
  let l = (a || 0) * Yi;
  if (Zn(r)) {
    n.save(), n.translate(e, i), n.rotate(l), n.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), n.restore();
    return;
  }
  gf(s) || yf(n, { x: e, y: i, radius: s, rotation: a, style: r, rad: l });
}
function yf(n, { x: t, y: e, radius: i, rotation: s, style: o, rad: r }) {
  let a, l, c, d;
  switch (n.beginPath(), o) {
    // Default includes circle
    default:
      n.arc(t, e, i, 0, st), n.closePath();
      break;
    case "triangle":
      n.moveTo(t + Math.sin(r) * i, e - Math.cos(r) * i), r += Rn, n.lineTo(t + Math.sin(r) * i, e - Math.cos(r) * i), r += Rn, n.lineTo(t + Math.sin(r) * i, e - Math.cos(r) * i), n.closePath();
      break;
    case "rectRounded":
      d = i * 0.516, c = i - d, a = Math.cos(r + Dt) * c, l = Math.sin(r + Dt) * c, n.arc(t - a, e - l, d, r - j, r - rt), n.arc(t + l, e - a, d, r - rt, r), n.arc(t + a, e + l, d, r, r + rt), n.arc(t - l, e + a, d, r + rt, r + j), n.closePath();
      break;
    case "rect":
      if (!s) {
        c = Math.SQRT1_2 * i, n.rect(t - c, e - c, 2 * c, 2 * c);
        break;
      }
      r += Dt;
    /* falls through */
    case "rectRot":
      a = Math.cos(r) * i, l = Math.sin(r) * i, n.moveTo(t - a, e - l), n.lineTo(t + l, e - a), n.lineTo(t + a, e + l), n.lineTo(t - l, e + a), n.closePath();
      break;
    case "crossRot":
      r += Dt;
    /* falls through */
    case "cross":
      a = Math.cos(r) * i, l = Math.sin(r) * i, n.moveTo(t - a, e - l), n.lineTo(t + a, e + l), n.moveTo(t + l, e - a), n.lineTo(t - l, e + a);
      break;
    case "star":
      a = Math.cos(r) * i, l = Math.sin(r) * i, n.moveTo(t - a, e - l), n.lineTo(t + a, e + l), n.moveTo(t + l, e - a), n.lineTo(t - l, e + a), r += Dt, a = Math.cos(r) * i, l = Math.sin(r) * i, n.moveTo(t - a, e - l), n.lineTo(t + a, e + l), n.moveTo(t + l, e - a), n.lineTo(t - l, e + a);
      break;
    case "line":
      a = Math.cos(r) * i, l = Math.sin(r) * i, n.moveTo(t - a, e - l), n.lineTo(t + a, e + l);
      break;
    case "dash":
      n.moveTo(t, e), n.lineTo(t + Math.cos(r) * i, e + Math.sin(r) * i);
      break;
  }
  n.fill();
}
function xf(n, t, e, i) {
  n.save();
  const s = t.length;
  let o = 0, r = i;
  for (let a = 0; a < s; a++) {
    const l = e[Math.min(a, e.length - 1)];
    n.font = l.string;
    const c = t[a];
    o = Math.max(o, n.measureText(c).width + i), r += l.lineHeight;
  }
  return n.restore(), { width: o, height: r };
}
function vf(n, { x: t, y: e }, i, s) {
  n.beginPath();
  let o = 0;
  i.forEach(function(r, a) {
    const l = s[Math.min(a, s.length - 1)], c = l.lineHeight;
    n.font = l.string, n.strokeText(r, t, e + c / 2 + o), o += c;
  }), n.stroke();
}
function _f(n, { x: t, y: e }, i, { fonts: s, colors: o }) {
  let r = 0;
  i.forEach(function(a, l) {
    const c = o[Math.min(l, o.length - 1)], d = s[Math.min(l, s.length - 1)], h = d.lineHeight;
    n.beginPath(), n.font = d.string, n.fillStyle = c, n.fillText(a, t, e + h / 2 + r), r += h, n.fill();
  });
}
function wf(n, t) {
  const e = de(n) ? n : t;
  return de(e) ? Jn(e, 0, 1) : 1;
}
const ua = ["left", "bottom", "top", "right"];
function Sf(n, t) {
  const { pointX: e, pointY: i, options: s } = t, o = s.callout, r = o && o.display && Af(t, o);
  if (!r || Tf(t, o, r))
    return;
  if (n.save(), n.beginPath(), !Nt(n, o))
    return n.restore();
  const { separatorStart: l, separatorEnd: c } = Mf(t, r), { sideStart: d, sideEnd: h } = Cf(t, r, l);
  (o.margin > 0 || s.borderWidth === 0) && (n.moveTo(l.x, l.y), n.lineTo(c.x, c.y)), n.moveTo(d.x, d.y), n.lineTo(h.x, h.y);
  const u = ge({ x: e, y: i }, t.getCenterPoint(), ht(-t.rotation));
  n.lineTo(u.x, u.y), n.stroke(), n.restore();
}
function Mf(n, t) {
  const { x: e, y: i, x2: s, y2: o } = n, r = kf(n, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: i }, l = { x: a.x, y: o }) : (a = { x: e, y: i + r }, l = { x: s, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function kf(n, t) {
  const { width: e, height: i, options: s } = n, o = s.callout.margin + s.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? i + o : -o;
}
function Cf(n, t, e) {
  const { y: i, width: s, height: o, options: r } = n, a = r.callout.start, l = Pf(t, r.callout);
  let c, d;
  return t === "left" || t === "right" ? (c = { x: e.x, y: i + te(o, a) }, d = { x: c.x + l, y: c.y }) : (c = { x: e.x + te(s, a), y: e.y }, d = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: d };
}
function Pf(n, t) {
  const e = t.side;
  return n === "left" || n === "top" ? -e : e;
}
function Af(n, t) {
  const e = t.position;
  return ua.includes(e) ? e : Df(n, t);
}
function Df(n, t) {
  const { x: e, y: i, x2: s, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: d, centerY: h, rotation: u } = n, f = { x: d, y: h }, g = t.start, p = te(r, g), m = te(a, g), x = [e, e + p, e + p, s], v = [i + m, o, i, o], S = [];
  for (let k = 0; k < 4; k++) {
    const w = ge({ x: x[k], y: v[k] }, f, ht(u));
    S.push({
      position: ua[k],
      distance: ke(w, { x: l, y: c })
    });
  }
  return S.sort((k, w) => k.distance - w.distance)[0].position;
}
function Tf(n, t, e) {
  const { pointX: i, pointY: s } = n, o = t.margin;
  let r = i, a = s;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), n.inRange(r, a);
}
const Ro = {
  xScaleID: { min: "xMin", max: "xMax", start: "left", end: "right", startProp: "x", endProp: "x2" },
  yScaleID: { min: "yMin", max: "yMax", start: "bottom", end: "top", startProp: "y", endProp: "y2" }
};
function De(n, t, e) {
  return t = typeof t == "number" ? t : n.parse(t), ut(t) ? n.getPixelForValue(t) : e;
}
function fe(n, t, e) {
  const i = t[e];
  if (i || e === "scaleID")
    return i;
  const s = e.charAt(0), o = Object.values(n).filter((r) => r.axis && r.axis === s);
  return o.length ? o[0].id : s;
}
function fa(n, t) {
  if (n) {
    const e = n.options.reverse, i = De(n, t.min, e ? t.end : t.start), s = De(n, t.max, e ? t.start : t.end);
    return {
      start: i,
      end: s
    };
  }
}
function ga(n, t) {
  const { chartArea: e, scales: i } = n, s = i[fe(i, t, "xScaleID")], o = i[fe(i, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return s && (r = De(s, t.xValue, s.left + s.width / 2)), o && (a = De(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function as(n, t) {
  const e = n.scales, i = e[fe(e, t, "xScaleID")], s = e[fe(e, t, "yScaleID")];
  if (!i && !s)
    return {};
  let { left: o, right: r } = i || n.chartArea, { top: a, bottom: l } = s || n.chartArea;
  const c = zo(i, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const d = zo(s, { min: t.yMin, max: t.yMax, start: l, end: a });
  return a = d.start, l = d.end, {
    x: o,
    y: a,
    x2: r,
    y2: l,
    width: r - o,
    height: l - a,
    centerX: o + (r - o) / 2,
    centerY: a + (l - a) / 2
  };
}
function pa(n, t) {
  if (!aa(t)) {
    const e = as(n, t);
    let i = t.radius;
    (!i || isNaN(i)) && (i = Math.min(e.width, e.height) / 2, t.radius = i);
    const s = i * 2, o = e.centerX + t.xAdjust, r = e.centerY + t.yAdjust;
    return {
      x: o - i,
      y: r - i,
      x2: o + i,
      y2: r + i,
      centerX: o,
      centerY: r,
      width: s,
      height: s,
      radius: i
    };
  }
  return Vf(n, t);
}
function Of(n, t) {
  const { scales: e, chartArea: i } = n, s = e[t.scaleID], o = { x: i.left, y: i.top, x2: i.right, y2: i.bottom };
  return s ? Lf(s, o, t) : If(e, o, t), o;
}
function ma(n, t) {
  const e = as(n, t);
  return e.initProperties = Le(n, e, t), e.elements = [{
    type: "label",
    optionScope: "label",
    properties: Ef(n, e, t),
    initProperties: e.initProperties
  }], e;
}
function Vf(n, t) {
  const e = ga(n, t), i = t.radius * 2;
  return {
    x: e.x - t.radius + t.xAdjust,
    y: e.y - t.radius + t.yAdjust,
    x2: e.x + t.radius + t.xAdjust,
    y2: e.y + t.radius + t.yAdjust,
    centerX: e.x + t.xAdjust,
    centerY: e.y + t.yAdjust,
    radius: t.radius,
    width: i,
    height: i
  };
}
function zo(n, t) {
  const e = fa(n, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function Lf(n, t, e) {
  const i = De(n, e.value, NaN), s = De(n, e.endValue, i);
  n.isHorizontal() ? (t.x = i, t.x2 = s) : (t.y = i, t.y2 = s);
}
function If(n, t, e) {
  for (const i of Object.keys(Ro)) {
    const s = n[fe(n, e, i)];
    if (s) {
      const { min: o, max: r, start: a, end: l, startProp: c, endProp: d } = Ro[i], h = fa(s, { min: e[o], max: e[r], start: s[a], end: s[l] });
      t[c] = h.start, t[d] = h.end;
    }
  }
}
function Rf({ properties: n, options: t }, e, i, s) {
  const { x: o, x2: r, width: a } = n;
  return ba({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: i.x,
    padding: { start: s.left, end: s.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function zf({ properties: n, options: t }, e, i, s) {
  const { y: o, y2: r, height: a } = n;
  return ba({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: i.y,
    padding: { start: s.top, end: s.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function ba(n, t) {
  const { start: e, end: i, borderWidth: s } = n, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = i - s - e - r - a - t.size;
  return e + s / 2 + l + os(c, o);
}
function Ef(n, t, e) {
  const i = e.label;
  i.backgroundColor = "transparent", i.callout.display = !1;
  const s = rs(i.position), o = ft(i.padding), r = ti(n.ctx, i), a = Rf({ properties: t, options: e }, r, s, o), l = zf({ properties: t, options: e }, r, s, o), c = r.width + o.width, d = r.height + o.height;
  return {
    x: a,
    y: l,
    x2: a + c,
    y2: l + d,
    width: c,
    height: d,
    centerX: a + c / 2,
    centerY: l + d / 2,
    rotation: i.rotation
  };
}
const Li = ["enter", "leave"], ls = Li.concat("click");
function Wf(n, t, e) {
  t.listened = la(e, ls, t.listeners), t.moveListened = !1, Li.forEach((i) => {
    Mt(e[i]) && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((i) => {
    !t.listened && Mt(i.click) && (t.listened = !0), t.moveListened || Li.forEach((s) => {
      Mt(i[s]) && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function Bf(n, t, e) {
  if (n.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return Ff(n, t, e);
      case "click":
        return Hf(n, t, e);
    }
}
function Ff(n, t, e) {
  if (!n.moveListened)
    return;
  let i;
  t.type === "mousemove" ? i = ss(n.visibleElements, t, e.interaction) : i = [];
  const s = n.hovered;
  n.hovered = i;
  const o = { state: n, event: t };
  let r = Eo(o, "leave", s, i);
  return Eo(o, "enter", i, s) || r;
}
function Eo({ state: n, event: t }, e, i, s) {
  let o;
  for (const r of i)
    s.indexOf(r) < 0 && (o = ya(r.options[e] || n.listeners[e], r, t) || o);
  return o;
}
function Hf(n, t, e) {
  const i = n.listeners, s = ss(n.visibleElements, t, e.interaction);
  let o;
  for (const r of s)
    o = ya(r.options.click || i.click, r, t) || o;
  return o;
}
function ya(n, t, e) {
  return tt(n, [t.$context, e]) === !0;
}
const Hn = ["afterDraw", "beforeDraw"];
function jf(n, t, e) {
  const i = t.visibleElements;
  t.hooked = la(e, Hn, t.hooks), t.hooked || i.forEach((s) => {
    t.hooked || Hn.forEach((o) => {
      Mt(s.options[o]) && (t.hooked = !0);
    });
  });
}
function Wo(n, t, e) {
  if (n.hooked) {
    const i = t.options[e] || n.hooks[e];
    return tt(i, [t.$context]);
  }
}
function Nf(n, t, e) {
  const i = Gf(n.scales, t, e);
  let s = Bo(t, i, "min", "suggestedMin");
  s = Bo(t, i, "max", "suggestedMax") || s, s && Mt(t.handleTickRangeOptions) && t.handleTickRangeOptions();
}
function Yf(n, t) {
  for (const e of n)
    $f(e, t);
}
function Bo(n, t, e, i) {
  if (ut(t[e]) && !Uf(n.options, e, i)) {
    const s = n[e] !== t[e];
    return n[e] = t[e], s;
  }
}
function Uf(n, t, e) {
  return kt(n[t]) || kt(n[e]);
}
function $f(n, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const i = fe(t, n, e);
    i && !t[i] && Xf(n, e) && console.warn(`No scale found with id '${i}' for annotation '${n.id}'`);
  }
}
function Xf(n, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const i of ["Min", "Max", "Value"])
    if (kt(n[e + i]))
      return !0;
  return !1;
}
function Gf(n, t, e) {
  const i = t.axis, s = t.id, o = i + "ScaleID", r = {
    min: B(t.min, Number.NEGATIVE_INFINITY),
    max: B(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === s ? Fo(a, t, ["value", "endValue"], r) : fe(n, a, o) === s && Fo(a, t, [i + "Min", i + "Max", i + "Value"], r);
  return r;
}
function Fo(n, t, e, i) {
  for (const s of e) {
    const o = n[s];
    if (kt(o)) {
      const r = t.parse(o);
      i.min = Math.min(i.min, r), i.max = Math.max(i.max, r);
    }
  }
}
class Re extends xt {
  inRange(t, e, i, s) {
    const { x: o, y: r } = ge({ x: t, y: e }, this.getCenterPoint(s), ht(-this.options.rotation));
    return Qr({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], s), i, this.options);
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    t.save(), Qn(t, this.getCenterPoint(), this.options.rotation), da(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return ma(t, e);
  }
}
Re.id = "boxAnnotation";
Re.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderRadius: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  init: void 0,
  hitTolerance: 0,
  label: {
    backgroundColor: "transparent",
    borderWidth: 0,
    callout: {
      display: !1
    },
    color: "black",
    content: null,
    display: !1,
    drawTime: void 0,
    font: {
      family: void 0,
      lineHeight: void 0,
      size: void 0,
      style: void 0,
      weight: "bold"
    },
    height: void 0,
    hitTolerance: void 0,
    opacity: void 0,
    padding: 6,
    position: "center",
    rotation: void 0,
    textAlign: "start",
    textStrokeColor: void 0,
    textStrokeWidth: 0,
    width: void 0,
    xAdjust: 0,
    yAdjust: 0,
    z: void 0
  },
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  z: 0
};
Re.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
Re.descriptors = {
  label: {
    _fallback: !0
  }
};
class ei extends xt {
  inRange(t, e, i, s) {
    return ta(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], s), center: this.getCenterPoint(s) },
      i,
      { rotation: this.rotation, borderWidth: 0, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const e = this.options;
    !e.display || !e.content || (tg(t, this), t.save(), Qn(t, this.getCenterPoint(), this.rotation), ha(t, this, e, this._fitRatio), t.restore());
  }
  resolveElementProperties(t, e) {
    const i = Kf(t, e);
    if (!i)
      return {};
    const { controllerMeta: s, point: o, radius: r } = Jf(t, e, i);
    let a = ti(t.ctx, e);
    const l = Zf(a, r);
    oa(e, l) && (a = { width: a.width * l, height: a.height * l });
    const { position: c, xAdjust: d, yAdjust: h } = e, u = sa(o, a, { borderWidth: 0, position: c, xAdjust: d, yAdjust: h });
    return {
      initProperties: Le(t, u, e),
      ...u,
      ...s,
      rotation: e.rotation,
      _fitRatio: l
    };
  }
}
ei.id = "doughnutLabelAnnotation";
ei.defaults = {
  autoFit: !0,
  autoHide: !0,
  backgroundColor: "transparent",
  backgroundShadowColor: "transparent",
  borderColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderShadowColor: "transparent",
  borderWidth: 0,
  color: "black",
  content: null,
  display: !0,
  font: {
    family: void 0,
    lineHeight: void 0,
    size: void 0,
    style: void 0,
    weight: void 0
  },
  height: void 0,
  hitTolerance: 0,
  init: void 0,
  opacity: void 0,
  position: "center",
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  spacing: 1,
  textAlign: "center",
  textStrokeColor: void 0,
  textStrokeWidth: 0,
  width: void 0,
  xAdjust: 0,
  yAdjust: 0
};
ei.defaultRoutes = {};
function Kf(n, t) {
  return n.getSortedVisibleDatasetMetas().reduce(function(e, i) {
    const s = i.controller;
    return s instanceof ns && qf(n, t, i.data) && (!e || s.innerRadius < e.controller.innerRadius) && s.options.circumference >= 90 ? i : e;
  }, void 0);
}
function qf(n, t, e) {
  if (!t.autoHide)
    return !0;
  for (let i = 0; i < e.length; i++)
    if (!e[i].hidden && n.getDataVisibility(i))
      return !0;
}
function Jf({ chartArea: n }, t, e) {
  const { left: i, top: s, right: o, bottom: r } = n, { innerRadius: a, offsetX: l, offsetY: c } = e.controller, d = (i + o) / 2 + l, h = (s + r) / 2 + c, u = {
    left: Math.max(d - a, i),
    right: Math.min(d + a, o),
    top: Math.max(h - a, s),
    bottom: Math.min(h + a, r)
  }, f = {
    x: (u.left + u.right) / 2,
    y: (u.top + u.bottom) / 2
  }, g = t.spacing + t.borderWidth / 2, p = a - g, m = f.y > h, x = m ? s + g : r - g, v = Qf(x, d, h, p);
  return {
    controllerMeta: {
      _centerX: d,
      _centerY: h,
      _radius: p,
      _counterclockwise: m,
      ...v
    },
    point: f,
    radius: Math.min(a, Math.min(u.right - u.left, u.bottom - u.top) / 2)
  };
}
function Zf({ width: n, height: t }, e) {
  const i = Math.sqrt(Math.pow(n, 2) + Math.pow(t, 2));
  return e * 2 / i;
}
function Qf(n, t, e, i) {
  const s = Math.pow(e - n, 2), o = Math.pow(i, 2), r = t * -2, a = Math.pow(t, 2) + s - o, l = Math.pow(r, 2) - 4 * a;
  if (l <= 0)
    return {
      _startAngle: 0,
      _endAngle: st
    };
  const c = (-r - Math.sqrt(l)) / 2, d = (-r + Math.sqrt(l)) / 2;
  return {
    _startAngle: zn({ x: t, y: e }, { x: c, y: n }).angle,
    _endAngle: zn({ x: t, y: e }, { x: d, y: n }).angle
  };
}
function tg(n, t) {
  const { _centerX: e, _centerY: i, _radius: s, _startAngle: o, _endAngle: r, _counterclockwise: a, options: l } = t;
  n.save();
  const c = Nt(n, l);
  n.fillStyle = l.backgroundColor, n.beginPath(), n.arc(e, i, s, o, r, a), n.closePath(), n.fill(), c && n.stroke(), n.restore();
}
class dn extends xt {
  inRange(t, e, i, s) {
    return ta(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], s), center: this.getCenterPoint(s) },
      i,
      { rotation: this.rotation, borderWidth: this.options.borderWidth, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const e = this.options, i = !kt(this._visible) || this._visible;
    !e.display || !e.content || !i || (t.save(), Qn(t, this.getCenterPoint(), this.rotation), Sf(t, this), da(t, this, e), ha(t, eg(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let i;
    if (aa(e))
      i = ga(t, e);
    else {
      const { centerX: a, centerY: l } = as(t, e);
      i = { x: a, y: l };
    }
    const s = ft(e.padding), o = ti(t.ctx, e), r = sa(i, o, e, s);
    return {
      initProperties: Le(t, r, e),
      pointX: i.x,
      pointY: i.y,
      ...r,
      rotation: e.rotation
    };
  }
}
dn.id = "labelAnnotation";
dn.defaults = {
  adjustScaleRange: !0,
  backgroundColor: "transparent",
  backgroundShadowColor: "transparent",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderRadius: 0,
  borderShadowColor: "transparent",
  borderWidth: 0,
  callout: {
    borderCapStyle: "butt",
    borderColor: void 0,
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 1,
    display: !1,
    margin: 5,
    position: "auto",
    side: 5,
    start: "50%"
  },
  color: "black",
  content: null,
  display: !0,
  font: {
    family: void 0,
    lineHeight: void 0,
    size: void 0,
    style: void 0,
    weight: void 0
  },
  height: void 0,
  hitTolerance: 0,
  init: void 0,
  opacity: void 0,
  padding: 6,
  position: "center",
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  textAlign: "center",
  textStrokeColor: void 0,
  textStrokeWidth: 0,
  width: void 0,
  xAdjust: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  xValue: void 0,
  yAdjust: 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  yValue: void 0,
  z: 0
};
dn.defaultRoutes = {
  borderColor: "color"
};
function eg({ x: n, y: t, width: e, height: i, options: s }) {
  const o = s.borderWidth / 2, r = ft(s.padding);
  return {
    x: n + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - s.borderWidth,
    height: i - r.top - r.bottom - s.borderWidth
  };
}
const cs = (n, t, e) => ({ x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) }), Ii = (n, t, e) => cs(t, e, Math.abs((n - t.y) / (e.y - t.y))).x, Ho = (n, t, e) => cs(t, e, Math.abs((n - t.x) / (e.x - t.x))).y, Xe = (n) => n * n, ng = (n, t, { x: e, y: i, x2: s, y2: o }, r) => r === "y" ? { start: Math.min(i, o), end: Math.max(i, o), value: t } : { start: Math.min(e, s), end: Math.max(e, s), value: n }, jo = (n, t, e, i) => (1 - i) * (1 - i) * n + 2 * (1 - i) * i * t + i * i * e, Ri = (n, t, e, i) => ({ x: jo(n.x, t.x, e.x, i), y: jo(n.y, t.y, e.y, i) }), No = (n, t, e, i) => 2 * (1 - i) * (t - n) + 2 * i * (e - t), Yo = (n, t, e, i) => -Math.atan2(No(n.x, t.x, e.x, i), No(n.y, t.y, e.y, i)) + 0.5 * j;
class hn extends xt {
  inRange(t, e, i, s) {
    const o = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (i !== "x" && i !== "y") {
      const r = { mouseX: t, mouseY: e }, { path: a, ctx: l } = this;
      if (a) {
        Nt(l, this.options), l.lineWidth += this.options.hitTolerance;
        const { chart: d } = this.$context, h = t * d.currentDevicePixelRatio, u = e * d.currentDevicePixelRatio, f = l.isPointInStroke(a, h, u) || zi(this, r, s);
        return l.restore(), f;
      }
      const c = Xe(o);
      return rg(this, r, c, s) || zi(this, r, s);
    }
    return ig(this, { mouseX: t, mouseY: e }, i, { hitSize: o, useFinalPosition: s });
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const { x: e, y: i, x2: s, y2: o, cp: r, options: a } = this;
    if (t.save(), !Nt(t, a))
      return t.restore();
    Ie(t, a);
    const l = Math.sqrt(Math.pow(s - e, 2) + Math.pow(o - i, 2));
    if (a.curve && r)
      return gg(t, this, r, l), t.restore();
    const { startOpts: c, endOpts: d, startAdjust: h, endAdjust: u } = xa(this), f = Math.atan2(o - i, s - e);
    t.translate(e, i), t.rotate(f), t.beginPath(), t.moveTo(0 + h, 0), t.lineTo(l - u, 0), t.shadowColor = a.borderShadowColor, t.stroke(), Ei(t, 0, h, c), Ei(t, l, -u, d), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const i = Of(t, e), { x: s, y: o, x2: r, y2: a } = i, l = sg(i, t.chartArea), c = l ? og({ x: s, y: o }, { x: r, y: a }, t.chartArea) : { x: s, y: o, x2: r, y2: a, width: Math.abs(r - s), height: Math.abs(a - o) };
    if (c.centerX = (r + s) / 2, c.centerY = (a + o) / 2, c.initProperties = Le(t, c, e), e.curve) {
      const h = { x: c.x, y: c.y }, u = { x: c.x2, y: c.y2 };
      c.cp = fg(c, e, ke(h, u));
    }
    const d = ag(t, c, e.label);
    return d._visible = l, c.elements = [{
      type: "label",
      optionScope: "label",
      properties: d,
      initProperties: c.initProperties
    }], c;
  }
}
hn.id = "lineAnnotation";
const Uo = {
  backgroundColor: void 0,
  backgroundShadowColor: void 0,
  borderColor: void 0,
  borderDash: void 0,
  borderDashOffset: void 0,
  borderShadowColor: void 0,
  borderWidth: void 0,
  display: void 0,
  fill: void 0,
  length: void 0,
  shadowBlur: void 0,
  shadowOffsetX: void 0,
  shadowOffsetY: void 0,
  width: void 0
};
hn.defaults = {
  adjustScaleRange: !0,
  arrowHeads: {
    display: !1,
    end: Object.assign({}, Uo),
    fill: !1,
    length: 12,
    start: Object.assign({}, Uo),
    width: 6
  },
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 2,
  curve: !1,
  controlPoint: {
    y: "-50%"
  },
  display: !0,
  endValue: void 0,
  init: void 0,
  hitTolerance: 0,
  label: {
    backgroundColor: "rgba(0,0,0,0.8)",
    backgroundShadowColor: "transparent",
    borderCapStyle: "butt",
    borderColor: "black",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderRadius: 6,
    borderShadowColor: "transparent",
    borderWidth: 0,
    callout: Object.assign({}, dn.defaults.callout),
    color: "#fff",
    content: null,
    display: !1,
    drawTime: void 0,
    font: {
      family: void 0,
      lineHeight: void 0,
      size: void 0,
      style: void 0,
      weight: "bold"
    },
    height: void 0,
    hitTolerance: void 0,
    opacity: void 0,
    padding: 6,
    position: "center",
    rotation: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textAlign: "center",
    textStrokeColor: void 0,
    textStrokeWidth: 0,
    width: void 0,
    xAdjust: 0,
    yAdjust: 0,
    z: void 0
  },
  scaleID: void 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  value: void 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  z: 0
};
hn.descriptors = {
  arrowHeads: {
    start: {
      _fallback: !0
    },
    end: {
      _fallback: !0
    },
    _fallback: !0
  }
};
hn.defaultRoutes = {
  borderColor: "color"
};
function ig(n, { mouseX: t, mouseY: e }, i, { hitSize: s, useFinalPosition: o }) {
  const r = ng(t, e, n.getProps(["x", "y", "x2", "y2"], o), i);
  return Zr(r, s) || zi(n, { mouseX: t, mouseY: e }, o, i);
}
function sg({ x: n, y: t, x2: e, y2: i }, { top: s, right: o, bottom: r, left: a }) {
  return !(n < a && e < a || n > o && e > o || t < s && i < s || t > r && i > r);
}
function $o({ x: n, y: t }, e, { top: i, right: s, bottom: o, left: r }) {
  return n < r && (t = Ho(r, { x: n, y: t }, e), n = r), n > s && (t = Ho(s, { x: n, y: t }, e), n = s), t < i && (n = Ii(i, { x: n, y: t }, e), t = i), t > o && (n = Ii(o, { x: n, y: t }, e), t = o), { x: n, y: t };
}
function og(n, t, e) {
  const { x: i, y: s } = $o(n, t, e), { x: o, y: r } = $o(t, n, e);
  return { x: i, y: s, x2: o, y2: r, width: Math.abs(o - i), height: Math.abs(r - s) };
}
function rg(n, { mouseX: t, mouseY: e }, i = ae, s) {
  const { x: o, y: r, x2: a, y2: l } = n.getProps(["x", "y", "x2", "y2"], s), c = a - o, d = l - r, h = Xe(c) + Xe(d), u = h === 0 ? -1 : ((t - o) * c + (e - r) * d) / h;
  let f, g;
  return u < 0 ? (f = o, g = r) : u > 1 ? (f = a, g = l) : (f = o + u * c, g = r + u * d), Xe(t - f) + Xe(e - g) <= i;
}
function zi(n, { mouseX: t, mouseY: e }, i, s) {
  const o = n.label;
  return o.options.display && o.inRange(t, e, s, i);
}
function ag(n, t, e) {
  const i = e.borderWidth, s = ft(e.padding), o = ti(n.ctx, e), r = o.width + s.width + i, a = o.height + s.height + i;
  return cg(t, e, { width: r, height: a, padding: s }, n.chartArea);
}
function lg(n) {
  const { x: t, y: e, x2: i, y2: s } = n, o = Math.atan2(s - e, i - t);
  return o > j / 2 ? o - j : o < j / -2 ? o + j : o;
}
function cg(n, t, e, i) {
  const { width: s, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: n.x, y: n.y }, d = { x: n.x2, y: n.y2 }, h = t.rotation === "auto" ? lg(n) : ht(t.rotation), u = dg(s, o, h), f = hg(n, t, { labelSize: u, padding: r }, i), g = n.cp ? Ri(c, n.cp, d, f) : cs(c, d, f), p = { size: u.w, min: i.left, max: i.right, padding: r.left }, m = { size: u.h, min: i.top, max: i.bottom, padding: r.top }, x = Go(g.x, p) + a, v = Go(g.y, m) + l;
  return {
    x: x - s / 2,
    y: v - o / 2,
    x2: x + s / 2,
    y2: v + o / 2,
    centerX: x,
    centerY: v,
    pointX: g.x,
    pointY: g.y,
    width: s,
    height: o,
    rotation: Yn(h)
  };
}
function dg(n, t, e) {
  const i = Math.cos(e), s = Math.sin(e);
  return {
    w: Math.abs(n * i) + Math.abs(t * s),
    h: Math.abs(n * s) + Math.abs(t * i)
  };
}
function hg(n, t, e, i) {
  let s;
  const o = ug(n, i);
  return t.position === "start" ? s = Xo({ w: n.x2 - n.x, h: n.y2 - n.y }, e, t, o) : t.position === "end" ? s = 1 - Xo({ w: n.x - n.x2, h: n.y - n.y2 }, e, t, o) : s = os(1, t.position), s;
}
function Xo(n, t, e, i) {
  const { labelSize: s, padding: o } = t, r = n.w * i.dx, a = n.h * i.dy, l = r > 0 && (s.w / 2 + o.left - i.x) / r, c = a > 0 && (s.h / 2 + o.top - i.y) / a;
  return Jn(Math.max(l, c), 0, 0.25);
}
function ug(n, t) {
  const { x: e, x2: i, y: s, y2: o } = n, r = Math.min(s, o) - t.top, a = Math.min(e, i) - t.left, l = t.bottom - Math.max(s, o), c = t.right - Math.max(e, i);
  return {
    x: Math.min(a, c),
    y: Math.min(r, l),
    dx: a <= c ? 1 : -1,
    dy: r <= l ? 1 : -1
  };
}
function Go(n, t) {
  const { size: e, min: i, max: s, padding: o } = t, r = e / 2;
  return e > s - i ? (s + i) / 2 : (i >= n - o - r && (n = i + o + r), s <= n + o + r && (n = s - o - r), n);
}
function xa(n) {
  const t = n.options, e = t.arrowHeads && t.arrowHeads.start, i = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: e,
    endOpts: i,
    startAdjust: Ko(n, e),
    endAdjust: Ko(n, i)
  };
}
function Ko(n, t) {
  if (!t || !t.display)
    return 0;
  const { length: e, width: i } = t, s = n.options.borderWidth / 2, o = { x: e, y: i + s };
  return Math.abs(Ii(0, o, { x: 0, y: s }));
}
function Ei(n, t, e, i) {
  if (!i || !i.display)
    return;
  const { length: s, width: o, fill: r, backgroundColor: a, borderColor: l } = i, c = Math.abs(t - s) + e;
  n.beginPath(), Ie(n, i), Nt(n, i), n.moveTo(c, -o), n.lineTo(t + e, 0), n.lineTo(c, o), r === !0 ? (n.fillStyle = a || l, n.closePath(), n.fill(), n.shadowColor = "transparent") : n.shadowColor = i.borderShadowColor, n.stroke();
}
function fg(n, t, e) {
  const { x: i, y: s, x2: o, y2: r, centerX: a, centerY: l } = n, c = Math.atan2(r - s, o - i), d = rs(t.controlPoint, 0), h = {
    x: a + te(e, d.x, !1),
    y: l + te(e, d.y, !1)
  };
  return ge(h, { x: a, y: l }, c);
}
function qo(n, { x: t, y: e }, { angle: i, adjust: s }, o) {
  !o || !o.display || (n.save(), n.translate(t, e), n.rotate(i), Ei(n, 0, -s, o), n.restore());
}
function gg(n, t, e, i) {
  const { x: s, y: o, x2: r, y2: a, options: l } = t, { startOpts: c, endOpts: d, startAdjust: h, endAdjust: u } = xa(t), f = { x: s, y: o }, g = { x: r, y: a }, p = Yo(f, e, g, 0), m = Yo(f, e, g, 1) - j, x = Ri(f, e, g, h / i), v = Ri(f, e, g, 1 - u / i), S = new Path2D();
  n.beginPath(), S.moveTo(x.x, x.y), S.quadraticCurveTo(e.x, e.y, v.x, v.y), n.shadowColor = l.borderShadowColor, n.stroke(S), t.path = S, t.ctx = n, qo(n, x, { angle: p, adjust: h }, c), qo(n, v, { angle: m, adjust: u }, d);
}
class un extends xt {
  inRange(t, e, i, s) {
    const o = this.options.rotation, r = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (i !== "x" && i !== "y")
      return pg({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], s), o, r);
    const { x: a, y: l, x2: c, y2: d } = this.getProps(["x", "y", "x2", "y2"], s), h = i === "y" ? { start: l, end: d } : { start: a, end: c }, u = ge({ x: t, y: e }, this.getCenterPoint(s), ht(-o));
    return u[i] >= h.start - r - ae && u[i] <= h.end + r + ae;
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const { width: e, height: i, centerX: s, centerY: o, options: r } = this;
    t.save(), Qn(t, this.getCenterPoint(), r.rotation), Ie(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Nt(t, r);
    t.ellipse(s, o, i / 2, e / 2, j / 2, 0, 2 * j), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return ma(t, e);
  }
}
un.id = "ellipseAnnotation";
un.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  label: Object.assign({}, Re.defaults.label),
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  z: 0
};
un.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
un.descriptors = {
  label: {
    _fallback: !0
  }
};
function pg(n, t, e, i) {
  const { width: s, height: o, centerX: r, centerY: a } = t, l = s / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const d = ht(e || 0), h = Math.cos(d), u = Math.sin(d), f = Math.pow(h * (n.x - r) + u * (n.y - a), 2), g = Math.pow(u * (n.x - r) - h * (n.y - a), 2);
  return f / Math.pow(l + i, 2) + g / Math.pow(c + i, 2) <= 1.0001;
}
class ni extends xt {
  inRange(t, e, i, s) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], s), d = (this.options.borderWidth + this.options.hitTolerance) / 2;
    return i !== "x" && i !== "y" ? cf({ x: t, y: e }, this.getCenterPoint(s), c / 2, d) : Zr(i === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t }, d);
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const e = this.options, i = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, Ie(t, e);
    const s = Nt(t, e);
    bf(t, this, this.centerX, this.centerY), s && !Zn(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = i;
  }
  resolveElementProperties(t, e) {
    const i = pa(t, e);
    return i.initProperties = Le(t, i, e), i;
  }
}
ni.id = "pointAnnotation";
ni.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  pointStyle: "circle",
  radius: 10,
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  xAdjust: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  xValue: void 0,
  yAdjust: 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  yValue: void 0,
  z: 0
};
ni.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class ii extends xt {
  inRange(t, e, i, s) {
    if (i !== "x" && i !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && bg(this.elements, t, e, s);
    const o = ge({ x: t, y: e }, this.getCenterPoint(s), ht(-this.options.rotation)), r = this.elements.map((c) => i === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[i] >= a && o[i] <= l;
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const { elements: e, options: i } = this;
    t.save(), t.beginPath(), t.fillStyle = i.backgroundColor, Ie(t, i);
    const s = Nt(t, i);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), s && (t.shadowColor = i.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const i = pa(t, e), { sides: s, rotation: o } = e, r = [], a = 2 * j / s;
    let l = o * Yi;
    for (let c = 0; c < s; c++, l += a) {
      const d = mg(i, e, l);
      d.initProperties = Le(t, i, e), r.push(d);
    }
    return i.elements = r, i;
  }
}
ii.id = "polygonAnnotation";
ii.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  point: {
    radius: 0
  },
  radius: 10,
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  sides: 3,
  xAdjust: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  xValue: void 0,
  yAdjust: 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  yValue: void 0,
  z: 0
};
ii.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
function mg({ centerX: n, centerY: t }, { radius: e, borderWidth: i, hitTolerance: s }, o) {
  const r = (i + s) / 2, a = Math.sin(o), l = Math.cos(o), c = { x: n + a * e, y: t - l * e };
  return {
    type: "point",
    optionScope: "point",
    properties: {
      x: c.x,
      y: c.y,
      centerX: c.x,
      centerY: c.y,
      bX: n + a * (e + r),
      bY: t - l * (e + r)
    }
  };
}
function bg(n, t, e, i) {
  let s = !1, o = n[n.length - 1].getProps(["bX", "bY"], i);
  for (const r of n) {
    const a = r.getProps(["bX", "bY"], i);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (s = !s), o = a;
  }
  return s;
}
const Zt = {
  box: Re,
  doughnutLabel: ei,
  ellipse: un,
  label: dn,
  line: hn,
  point: ni,
  polygon: ii
};
Object.keys(Zt).forEach((n) => {
  ct.describe(`elements.${Zt[n].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const yg = {
  update: Object.assign
}, xg = ls.concat(Hn), Jo = (n, t) => N(t) ? Bi(n, t) : n, Wi = (n) => n === "color" || n === "font";
function ds(n = "line") {
  return Zt[n] ? n : (console.warn(`Unknown annotation type: '${n}', defaulting to 'line'`), "line");
}
function vg(n, t, e, i) {
  const s = wg(n, e.animations, i), o = t.annotations, r = kg(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = va(r, a, l.type), d = l.setContext(Mg(n, c, r, l)), h = c.resolveElementProperties(n, d);
    h.skip = _g(h), "elements" in h && (Sg(c, h.elements, d, s), delete h.elements), kt(c.x) || Object.assign(c, h), Object.assign(c, h.initProperties), h.options = _a(d), s.update(c, h);
  }
}
function _g(n) {
  return isNaN(n.x) || isNaN(n.y);
}
function wg(n, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? yg : new es(n, t);
}
function Sg(n, t, e, i) {
  const s = n.elements || (n.elements = []);
  s.length = t.length;
  for (let o = 0; o < t.length; o++) {
    const r = t[o], a = r.properties, l = va(s, o, r.type, r.initProperties), c = e[r.optionScope].override(r);
    a.options = _a(c), i.update(l, a);
  }
}
function va(n, t, e, i) {
  const s = Zt[ds(e)];
  let o = n[t];
  return (!o || !(o instanceof s)) && (o = n[t] = new s(), Object.assign(o, i)), o;
}
function _a(n) {
  const t = Zt[ds(n.type)], e = {};
  e.id = n.id, e.type = n.type, e.drawTime = n.drawTime, Object.assign(
    e,
    Bi(n, t.defaults),
    Bi(n, t.defaultRoutes)
  );
  for (const i of xg)
    e[i] = n[i];
  return e;
}
function Bi(n, t) {
  const e = {};
  for (const i of Object.keys(t)) {
    const s = t[i], o = n[i];
    Wi(i) && Q(o) ? e[i] = o.map((r) => Jo(r, s)) : e[i] = Jo(o, s);
  }
  return e;
}
function Mg(n, t, e, i) {
  return t.$context || (t.$context = Object.assign(Object.create(n.getContext()), {
    element: t,
    get elements() {
      return e.filter((s) => s && s.options);
    },
    id: i.id,
    type: "annotation"
  }));
}
function kg(n, t) {
  const e = t.length, i = n.length;
  if (i < e) {
    const s = e - i;
    n.splice(i, 0, ...new Array(s));
  } else i > e && n.splice(e, i - e);
  return n;
}
var Cg = "3.1.0";
const $t = /* @__PURE__ */ new Map(), Zo = (n) => n.type !== "doughnutLabel", Pg = ls.concat(Hn);
var Ag = {
  id: "annotation",
  version: Cg,
  beforeRegister() {
    df("chart.js", "4.0", ce.version);
  },
  afterRegister() {
    ce.register(Zt);
  },
  afterUnregister() {
    ce.unregister(Zt);
  },
  beforeInit(n) {
    $t.set(n, {
      annotations: [],
      elements: [],
      visibleElements: [],
      listeners: {},
      listened: !1,
      moveListened: !1,
      hooks: {},
      hooked: !1,
      hovered: []
    });
  },
  beforeUpdate(n, t, e) {
    const i = $t.get(n), s = i.annotations = [];
    let o = e.annotations;
    N(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      N(a) && (a.id = r, s.push(a));
    }) : Q(o) && s.push(...o), Yf(s.filter(Zo), n.scales);
  },
  afterDataLimits(n, t) {
    const e = $t.get(n);
    Nf(n, t.scale, e.annotations.filter(Zo).filter((i) => i.display && i.adjustScaleRange));
  },
  afterUpdate(n, t, e) {
    const i = $t.get(n);
    Wf(n, i, e), vg(n, i, e, t.mode), i.visibleElements = i.elements.filter((s) => !s.skip && s.options.display), jf(n, i, e);
  },
  beforeDatasetsDraw(n, t, e) {
    Ne(n, "beforeDatasetsDraw", e.clip);
  },
  afterDatasetsDraw(n, t, e) {
    Ne(n, "afterDatasetsDraw", e.clip);
  },
  beforeDatasetDraw(n, t, e) {
    Ne(n, t.index, e.clip);
  },
  beforeDraw(n, t, e) {
    Ne(n, "beforeDraw", e.clip);
  },
  afterDraw(n, t, e) {
    Ne(n, "afterDraw", e.clip);
  },
  beforeEvent(n, t, e) {
    const i = $t.get(n);
    Bf(i, t.event, e) && (t.changed = !0);
  },
  afterDestroy(n) {
    $t.delete(n);
  },
  getAnnotations(n) {
    const t = $t.get(n);
    return t ? t.elements : [];
  },
  // only for testing
  _getAnnotationElementsAtEventForMode(n, t, e) {
    return ss(n, t, e);
  },
  defaults: {
    animations: {
      numbers: {
        properties: ["x", "y", "x2", "y2", "width", "height", "centerX", "centerY", "pointX", "pointY", "radius"],
        type: "number"
      },
      colors: {
        properties: ["backgroundColor", "borderColor"],
        type: "color"
      }
    },
    clip: !0,
    interaction: {
      mode: void 0,
      axis: void 0,
      intersect: void 0
    },
    common: {
      drawTime: "afterDatasetsDraw",
      init: !1,
      label: {}
    }
  },
  descriptors: {
    _indexable: !1,
    _scriptable: (n) => !Pg.includes(n) && n !== "init",
    annotations: {
      _allKeys: !1,
      _fallback: (n, t) => `elements.${Zt[ds(t.type)].id}`
    },
    interaction: {
      _fallback: !0
    },
    common: {
      label: {
        _indexable: Wi,
        _fallback: !0
      },
      _indexable: Wi
    }
  },
  additionalOptionScopes: [""]
};
function Ne(n, t, e) {
  const { ctx: i, chartArea: s } = n, o = $t.get(n);
  e && ln(i, s);
  const r = Dg(o.visibleElements, t).sort((a, l) => a.element.options.z - l.element.options.z);
  for (const a of r)
    Tg(i, s, o, a);
  e && cn(i);
}
function Dg(n, t) {
  const e = [];
  for (const i of n)
    if (i.options.drawTime === t && e.push({ element: i, main: !0 }), i.elements && i.elements.length)
      for (const s of i.elements)
        s.options.display && s.options.drawTime === t && e.push({ element: s });
  return e;
}
function Tg(n, t, e, i) {
  const s = i.element;
  i.main ? (Wo(e, s, "beforeDraw"), s.draw(n, t), Wo(e, s, "afterDraw")) : s.draw(n, t);
}
var Og = Object.defineProperty, Vg = Object.getOwnPropertyDescriptor, ot = (n, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Vg(t, e) : t, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (s = (i ? r(t, e, s) : r(s)) || s);
  return i && s && Og(t, e, s), s;
};
let nt = class {
  seriesSettings = [];
  chartType = new I();
  barOrientation = new I();
  stacked = new I();
  borderColor = new I();
  borderWidth = new I();
  borderDash = new I();
  backgroundColor = new I();
  fill = new I();
  showPoints = new I();
  pointColor = new I();
  pointSize = new I();
  showHorizontalGrid = new I();
  horizontalGridColor = new I();
  horizontalGridWidth = new I();
  showVerticalGrid = new I();
  verticalGridColor = new I();
  verticalGridWidth = new I();
  xAxisTitle = new I();
  yAxisTitle = new I();
  annotationsEditMode = new I();
  horizontalLines = [];
  verticalLines = [];
  horizontalBoxes = [];
  verticalBoxes = [];
  dateDisplayFormat = new I();
};
ot([
  sn("Per-series configuration (chart type, x-axis assignment, styling)"),
  on()
], nt.prototype, "seriesSettings", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "chartType", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "barOrientation", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "stacked", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "borderColor", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "borderWidth", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "borderDash", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "backgroundColor", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "fill", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "showPoints", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "pointColor", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "pointSize", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "showHorizontalGrid", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "horizontalGridColor", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "horizontalGridWidth", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "showVerticalGrid", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "verticalGridColor", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "verticalGridWidth", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "xAxisTitle", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "yAxisTitle", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "annotationsEditMode", 2);
ot([
  sn("Horizontal reference lines (Y-axis values)"),
  on()
], nt.prototype, "horizontalLines", 2);
ot([
  sn("Vertical reference lines (X-axis values)"),
  on()
], nt.prototype, "verticalLines", 2);
ot([
  sn("Horizontal boxes/areas (Y-axis ranges)"),
  on()
], nt.prototype, "horizontalBoxes", 2);
ot([
  sn("Vertical boxes/areas (X-axis ranges)"),
  on()
], nt.prototype, "verticalBoxes", 2);
ot([
  G("VariableWrapper")
], nt.prototype, "dateDisplayFormat", 2);
nt = ot([
  sr({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings" })
], nt);
var Lg = Object.defineProperty, Ig = Object.getOwnPropertyDescriptor, fn = (n, t, e, i) => {
  for (var s = Ig(t, e), o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (s = r(t, e, s) || s);
  return s && Lg(t, e, s), s;
};
class me extends Ba {
  refresh() {
    throw new Error("refresh not implemented");
  }
  zoomIn() {
    throw new Error("zoomIn not implemented");
  }
  zoomOut() {
    throw new Error("zoomOut not implemented");
  }
  resetZoom() {
    throw new Error("resetZoom not implemented");
  }
  exportAsImage(t) {
    throw new Error("exportAsImage not implemented");
  }
}
fn([
  rn({ eventType: "chart.refresh" })
], me.prototype, "refresh");
fn([
  rn({ eventType: "chart.zoomIn" })
], me.prototype, "zoomIn");
fn([
  rn({ eventType: "chart.zoomOut" })
], me.prototype, "zoomOut");
fn([
  rn({ eventType: "chart.resetZoom" })
], me.prototype, "resetZoom");
fn([
  rn({ eventType: "chart.exportAsImage" })
], me.prototype, "exportAsImage");
const Rg = /* @__PURE__ */ Nn({
  __name: "ChartWidget",
  props: /* @__PURE__ */ Oa({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(n, { expose: t }) {
    const { wrapParameters: e } = Ra();
    ce.register(fu, _u, hu, Bh, ku, Pu, Gn, Lh, Hu, Sh, ou, Ag);
    const i = n, { datasourceId: s, id: o } = Va(i), r = ir(n, "configv"), a = new nt(), l = Ft(null), c = Si(Wa.TINY_EMITTER), d = Si(Sa), u = Ea().params.pageid || "", f = Ft({ min: null, max: null }), g = Ft(null);
    class p extends me {
      refresh() {
        S(s.value, s.value);
      }
      zoomIn() {
        const _ = f.value.min ?? 0, y = f.value.max ?? 100, A = y - _, D = (y + _) / 2;
        f.value = { min: D - A * 0.4, max: D + A * 0.4 }, w.value++;
      }
      zoomOut() {
        const _ = f.value.min ?? 0, y = f.value.max ?? 100, A = y - _, D = (y + _) / 2;
        f.value = { min: D - A * 0.75, max: D + A * 0.75 }, w.value++;
      }
      resetZoom() {
        f.value = { min: null, max: null }, w.value++;
      }
      exportAsImage(_) {
        if (g.value && g.value.chart) {
          const y = g.value.chart, A = _ || "image/png", D = y.toBase64Image(A), K = document.createElement("a");
          K.href = D, K.download = `chart.${A.split("/")[1] || "png"}`, K.click();
        }
      }
    }
    const m = new p();
    t(m), er(() => {
      o?.value && d.unregisterInstance(o.value);
    });
    const x = () => {
      o?.value && c.emit("widget:ChartWidget:click", {
        type: "widget:ChartWidget:click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, v = () => {
      o?.value && c.emit("widget:ChartWidget:right_click", {
        type: "widget:ChartWidget:right_click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    };
    On(() => {
      if (o?.value && d.registerInstance(o.value, m, "ChartWidget", u), r.value)
        for (const C of Object.keys(a))
          (!(C in r.value) || r.value[C] === void 0) && (r.value[C] = a[C]);
    }), Ze(s, (C, _) => {
      S(C, _);
    });
    const { update: S } = za(s, "ChartData", l), k = it(() => {
      if (r.value?.seriesSettings?.some(
        (A) => A.chartType?.value && A.chartType.value !== r.value?.chartType?.value
      ))
        return xi;
      const _ = r.value?.chartType?.value ?? "bar";
      return {
        bar: xi,
        line: Qu,
        radar: nf,
        pie: tf,
        doughnut: Zu,
        polarArea: ef
      }[_] || xi;
    }), w = Ft(0);
    Ze(() => r.value, (C) => {
      w.value++;
    }, { deep: !0 });
    const P = e({
      chartType: it(() => r.value?.chartType?.value ?? "bar"),
      borderColor: it(() => r.value?.borderColor?.value ?? "rgba(75, 192, 192, 1)"),
      backgroundColor: it(() => r.value?.backgroundColor?.value ?? "rgba(75, 192, 192, 0.2)"),
      borderWidth: it(() => r.value?.borderWidth?.value ?? 2),
      borderDash: it(() => r.value?.borderDash?.value ?? []),
      fill: it(() => r.value?.fill ?? !1),
      showPoints: it(() => r.value?.showPoints ?? !0),
      pointColor: it(() => r.value?.pointColor?.value ?? "rgba(75, 192, 192, 1)"),
      pointSize: it(() => r.value?.pointSize?.value ?? 3),
      barOrientation: it(() => r.value?.barOrientation?.value ?? "vertical"),
      stacked: it(() => r.value?.stacked?.value ?? !1),
      showHorizontalGrid: it(() => r.value?.showHorizontalGrid ?? !0),
      horizontalGridColor: it(() => r.value?.horizontalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      horizontalGridWidth: it(() => r.value?.horizontalGridWidth?.value ?? 1),
      showVerticalGrid: it(() => r.value?.showVerticalGrid ?? !0),
      verticalGridColor: it(() => r.value?.verticalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      verticalGridWidth: it(() => r.value?.verticalGridWidth?.value ?? 1),
      dateDisplayFormat: it(() => r.value?.dateDisplayFormat?.value ?? "dd.MM.yyyy HH:mm"),
      annotationsEditMode: it(() => r.value?.annotationsEditMode ?? !1)
    });
    console.log(P.backgroundColor.value);
    const L = it(() => {
      if (!l.value) return null;
      const C = JSON.parse(JSON.stringify(l.value)), _ = r.value?.seriesSettings && r.value.seriesSettings.length > 0;
      return C.datasets && Array.isArray(C.datasets) && (C.datasets = C.datasets.map((y, A) => {
        const D = r.value?.seriesSettings?.find(
          (Pt) => Pt.seriesIndex?.value === A
        ), K = D?.chartType?.value ?? P.chartType ?? "bar", E = D?.xAxisId?.value, $ = D?.yAxisId?.value, q = D?.borderColor?.value ?? y.borderColor ?? r.value?.borderColor?.value, b = D?.backgroundColor?.value ?? y.backgroundColor ?? r.value?.backgroundColor?.value, T = D?.borderWidth?.value ?? y.borderWidth ?? r.value?.borderWidth?.value, M = D?.borderDash?.value ?? y.borderDash ?? r.value?.borderDash?.value;
        let X = {
          ...y,
          borderColor: q,
          backgroundColor: b,
          borderWidth: T
        };
        if (_ && (X.type = K, E && (X.xAxisID = E), $ && (X.yAxisID = $), D?.label?.value && (X.label = (D?.label).value)), K === "line") {
          const Pt = D?.showPoints?.value ?? r.value?.showPoints?.value ?? !0, Yt = D?.fill?.value ?? r.value?.fill?.value ?? !1, Ct = D?.pointColor?.value ?? y.pointBackgroundColor ?? r.value?.pointColor?.value, O = D?.pointSize?.value ?? r.value?.pointSize?.value ?? 3;
          X = {
            ...X,
            borderDash: M,
            fill: Yt ? "origin" : !1,
            // Point settings
            pointRadius: Pt ? O : 0,
            pointBackgroundColor: Ct,
            pointBorderColor: Ct,
            pointHoverRadius: Pt ? O + 2 : 0
          };
        } else K === "bar" ? X = {
          ...X,
          borderDash: M
        } : X = {
          ...X
        };
        return X;
      })), C;
    }), V = it(() => {
      if (!r.value)
        return {
          responsive: !0
        };
      const C = P.annotationsEditMode.value, _ = {};
      r.value.horizontalLines?.forEach((O, Z) => {
        _[`hline_${Z}`] = {
          type: "line",
          yMin: O.value,
          yMax: O.value,
          borderColor: O.color,
          borderWidth: O.width,
          label: O.label ? {
            display: !0,
            content: O.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: C,
          borderDash: C ? [5, 5] : void 0,
          enter({ element: H }) {
            C && (H.options.borderWidth = O.width + 1);
          },
          leave({ element: H }) {
            C && (H.options.borderWidth = O.width);
          },
          drag({ element: H }) {
            C && r.value.horizontalLines && (r.value.horizontalLines[Z].value = H.y);
          }
        };
      }), r.value.verticalLines?.forEach((O, Z) => {
        _[`vline_${Z}`] = {
          type: "line",
          xMin: O.value,
          xMax: O.value,
          borderColor: O.color,
          borderWidth: O.width,
          label: O.label ? {
            display: !0,
            content: O.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: C,
          borderDash: C ? [5, 5] : void 0,
          enter({ element: H }) {
            C && (H.options.borderWidth = O.width + 1);
          },
          leave({ element: H }) {
            C && (H.options.borderWidth = O.width);
          },
          drag({ element: H }) {
            C && r.value.verticalLines && (r.value.verticalLines[Z].value = H.x);
          }
        };
      }), r.value.horizontalBoxes?.forEach((O, Z) => {
        _[`hbox_${Z}`] = {
          type: "box",
          yMin: O.yMin,
          yMax: O.yMax,
          backgroundColor: O.color,
          borderWidth: C ? 2 : 0,
          borderColor: C ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: C ? [5, 5] : void 0,
          label: O.label ? {
            display: !0,
            content: O.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: C,
          enter({ element: H }) {
            C && (H.options.borderWidth = 3);
          },
          leave({ element: H }) {
            C && (H.options.borderWidth = 2);
          },
          drag({ element: H }) {
            if (C && r.value.horizontalBoxes) {
              const _t = O.yMax - O.yMin;
              r.value.horizontalBoxes[Z].yMin = H.y - _t / 2, r.value.horizontalBoxes[Z].yMax = H.y + _t / 2;
            }
          }
        };
      }), r.value.verticalBoxes?.forEach((O, Z) => {
        _[`vbox_${Z}`] = {
          type: "box",
          xMin: O.xMin,
          xMax: O.xMax,
          backgroundColor: O.color,
          borderWidth: C ? 2 : 0,
          borderColor: C ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: C ? [5, 5] : void 0,
          label: O.label ? {
            display: !0,
            content: O.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: C,
          enter({ element: H }) {
            C && (H.options.borderWidth = 3);
          },
          leave({ element: H }) {
            C && (H.options.borderWidth = 2);
          },
          drag({ element: H }) {
            if (C && r.value.verticalBoxes) {
              const _t = O.xMax - O.xMin;
              r.value.verticalBoxes[Z].xMin = H.x - _t / 2, r.value.verticalBoxes[Z].xMax = H.x + _t / 2;
            }
          }
        };
      });
      const y = (O) => {
        if (typeof O != "string") return !1;
        const Z = /^\d{4}-\d{2}-\d{2}(T|\s)/, H = /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}/;
        return Z.test(O) || H.test(O);
      }, A = (O, Z) => {
        if (!O || !y(O)) return O;
        const H = new Date(O);
        if (isNaN(H.getTime())) return O;
        const _t = (be) => be.toString().padStart(2, "0"), gn = {
          yyyy: H.getFullYear().toString(),
          yy: H.getFullYear().toString().slice(-2),
          MM: _t(H.getMonth() + 1),
          M: (H.getMonth() + 1).toString(),
          dd: _t(H.getDate()),
          d: H.getDate().toString(),
          HH: _t(H.getHours()),
          H: H.getHours().toString(),
          mm: _t(H.getMinutes()),
          m: H.getMinutes().toString(),
          ss: _t(H.getSeconds()),
          s: H.getSeconds().toString()
        };
        let si = Z;
        return Object.keys(gn).sort((be, wa) => wa.length - be.length).forEach((be) => {
          si = si.replace(new RegExp(be, "g"), gn[be]);
        }), si;
      }, D = P.dateDisplayFormat.value, K = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), $ = r.value?.seriesSettings && r.value.seriesSettings.length > 0, q = {};
      $ && (K.add("x"), E.add("y"), r.value.seriesSettings?.forEach((O) => {
        O?.xAxisId?.value && K.add(O.xAxisId.value), O.yAxisId?.value && (E.add(O.yAxisId.value), O.yAxisTitle?.value && (q[O.yAxisId.value] = O.yAxisTitle.value));
      }));
      const b = P.stacked.value === !0 || P.stacked.value === "true", T = r.value.xAxisTitle?.value ?? "", M = r.value.yAxisTitle?.value ?? "", X = {
        y: {
          stacked: b,
          title: {
            display: !!M,
            text: M
          },
          grid: {
            display: P.showHorizontalGrid.value,
            color: P.horizontalGridColor.value,
            lineWidth: P.horizontalGridWidth.value
          }
        },
        x: {
          stacked: b,
          title: {
            display: !!T,
            text: T
          },
          grid: {
            display: P.showVerticalGrid.value,
            color: P.verticalGridColor.value,
            lineWidth: P.verticalGridWidth.value
          },
          ticks: {
            callback: function(O, Z, H) {
              const _t = this.getLabelForValue(O);
              return A(_t, D);
            }
          }
        }
      };
      K.size > 1 && K.forEach((O) => {
        O !== "x" && (X[O] = {
          type: "category",
          // Explicitly set the axis type
          grid: {
            display: P.showVerticalGrid.value,
            color: P.verticalGridColor.value,
            lineWidth: P.verticalGridWidth.value
          },
          ticks: {
            callback: function(Z, H, _t) {
              const gn = this.getLabelForValue(Z);
              return A(gn, D);
            }
          },
          // Position secondary axes at the top
          position: "top"
        });
      }), E.size > 1 && E.forEach((O) => {
        if (O !== "y") {
          const Z = q[O] ?? "";
          X[O] = {
            type: "linear",
            // Explicitly set the axis type
            title: {
              display: !!Z,
              text: Z
            },
            grid: {
              display: P.showHorizontalGrid.value,
              color: P.horizontalGridColor.value,
              lineWidth: P.horizontalGridWidth.value
            },
            // Position secondary Y-axes on the right
            position: "right"
          };
        }
      });
      const Ct = {
        responsive: !0,
        maintainAspectRatio: !0,
        indexAxis: P.barOrientation.value === "horizontal" ? "y" : "x",
        scales: X,
        plugins: {
          legend: {
            labels: {
              usePointStyle: !0,
              pointStyle: "circle"
            }
          },
          annotation: {
            annotations: _
          }
        }
      };
      return console.log("Chart options:", Ct), Ct;
    });
    return (C, _) => (R(), gt("div", {
      class: "w-full h-full",
      onClick: x,
      onContextmenu: La(v, ["prevent"])
    }, [
      L.value && V.value ? (R(), Y(Ia(k.value), {
        key: w.value,
        id: "my-chart-id",
        ref_key: "chartRef",
        ref: g,
        options: V.value,
        data: L.value
      }, null, 8, ["options", "data"])) : F("", !0)
    ], 32));
  }
});
var zg = Object.defineProperty, Eg = Object.getOwnPropertyDescriptor, vt = (n, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Eg(t, e) : t, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (s = (i ? r(t, e, s) : r(s)) || s);
  return i && s && zg(t, e, s), s;
};
let pt = class {
  seriesIndex = new I();
  label = new I();
  chartType = new I();
  xAxisId = new I();
  yAxisId = new I();
  yAxisTitle = new I();
  borderColor = new I();
  backgroundColor = new I();
  borderWidth = new I();
  borderDash = new I();
  fill = new I();
  showPoints = new I();
  pointColor = new I();
  pointSize = new I();
};
vt([
  G("VariableWrapper")
], pt.prototype, "seriesIndex", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "label", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "chartType", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "xAxisId", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "yAxisId", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "yAxisTitle", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "borderColor", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "backgroundColor", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "borderWidth", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "borderDash", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "fill", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "showPoints", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "pointColor", 2);
vt([
  G("VariableWrapper")
], pt.prototype, "pointSize", 2);
pt = vt([
  sr({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings" })
], pt);
const Wg = { class: "settings-container" }, Bg = { class: "settings-block" }, Fg = { style: { display: "flex", "justify-content": "space-between", "align-items": "center", "margin-bottom": "12px" } }, Hg = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "12px" } }, jg = { style: { "font-size": "15px" } }, Ng = { key: 11 }, Yg = {
  key: 0,
  style: { padding: "20px", "text-align": "center", color: "var(--va-text-secondary)" }
}, Ug = { class: "settings-container" }, $g = { class: "settings-block" }, Xg = {
  key: 0,
  class: "settings-block"
}, Gg = {
  key: 1,
  class: "settings-block"
}, Kg = {
  key: 2,
  class: "settings-block"
}, qg = { class: "settings-container" }, Jg = { class: "settings-block" }, Zg = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, Qg = { class: "settings-container" }, tp = { class: "settings-block" }, ep = { class: "settings-container" }, np = { class: "settings-block" }, ip = { class: "settings-container" }, sp = { class: "settings-block" }, op = { class: "settings-block" }, rp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, ap = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, lp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, cp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, dp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, hp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, up = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, fp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, gp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, pp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, mp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, bp = /* @__PURE__ */ Nn({
  __name: "ChartWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(n) {
    const t = Ft({
      seriesSection: !1,
      styleSection: !0,
      gridSection: !1,
      dateFormatSection: !1,
      axisLabelSection: !1,
      annotationsSection: !1
    }), e = ir(n, "modelValue"), i = Ft(e.value?.xAxisTitle?.value ?? ""), s = Ft(e.value?.yAxisTitle?.value ?? "");
    Ze(i, (_) => {
      e.value.xAxisTitle ? e.value.xAxisTitle.value = _ : e.value.xAxisTitle = new I(_);
    }), Ze(s, (_) => {
      e.value.yAxisTitle ? e.value.yAxisTitle.value = _ : e.value.yAxisTitle = new I(_);
    }), Si("i18n");
    const o = it(() => e.value?.chartType?.value ?? "bar"), r = it(() => o.value === "line"), a = it(() => o.value === "bar"), l = it(() => ["pie", "doughnut", "polarArea"].includes(o.value)), c = it(() => {
      const _ = /* @__PURE__ */ new Set(["y"]);
      return e.value?.seriesSettings?.forEach((y) => {
        y.yAxisId?.value && _.add(y.yAxisId.value);
      }), Array.from(_);
    });
    function d(_) {
      return e.value?.seriesSettings?.find(
        (A) => A.yAxisId?.value === _
      )?.yAxisTitle?.value ?? "";
    }
    function h(_, y) {
      const A = e.value?.seriesSettings?.find(
        (D) => D.yAxisId?.value === _
      );
      A && (A.yAxisTitle ? A.yAxisTitle.value = y : A.yAxisTitle = new I(y));
    }
    On(() => {
      console.log("ChartWidgetSettings mounted, config:", e.value), console.log("borderColor:", e.value?.borderColor);
    });
    const u = [
      { label: "Solid", value: [] },
      { label: "Dashed", value: [5, 5] },
      { label: "Dotted", value: [2, 2] },
      { label: "Dash-Dot", value: [10, 5, 2, 5] }
    ], f = Ft("[]"), g = (_) => {
      try {
        const y = typeof _ == "string" ? _ : _?.value || _, A = typeof y == "string" ? JSON.parse(y) : y;
        e.value.borderDash.value = A;
      } catch (y) {
        console.error("Error parsing border dash preset:", y, _);
      }
    };
    e.value.borderDash?.value && (f.value = JSON.stringify(e.value.borderDash.value));
    const p = () => {
      e.value.horizontalLines || (e.value.horizontalLines = []), e.value.horizontalLines.push({
        value: 0,
        color: "rgba(255, 0, 0, 0.8)",
        width: 2,
        label: "Line"
      });
    }, m = (_) => {
      e.value.horizontalLines?.splice(_, 1);
    }, x = () => {
      e.value.verticalLines || (e.value.verticalLines = []), e.value.verticalLines.push({
        value: 0,
        color: "rgba(0, 0, 255, 0.8)",
        width: 2,
        label: "Line"
      });
    }, v = (_) => {
      e.value.verticalLines?.splice(_, 1);
    }, S = () => {
      e.value.horizontalBoxes || (e.value.horizontalBoxes = []), e.value.horizontalBoxes.push({
        yMin: 0,
        yMax: 10,
        color: "rgba(255, 0, 0, 0.1)",
        label: "Range"
      });
    }, k = (_) => {
      e.value.horizontalBoxes?.splice(_, 1);
    }, w = () => {
      e.value.verticalBoxes || (e.value.verticalBoxes = []), e.value.verticalBoxes.push({
        xMin: 0,
        xMax: 10,
        color: "rgba(0, 0, 255, 0.1)",
        label: "Range"
      });
    }, P = (_) => {
      e.value.verticalBoxes?.splice(_, 1);
    }, L = () => {
      e.value.seriesSettings || (e.value.seriesSettings = []);
      const _ = new pt();
      _.seriesIndex = new I(e.value.seriesSettings.length), _.chartType = new I("bar"), _.xAxisId = new I("x"), _.yAxisId = new I("y"), _.label = new I(""), _.borderColor = new I(""), _.backgroundColor = new I(""), _.borderWidth = new I(2), _.borderDash = new I([]), _.fill = new I(!1), _.showPoints = new I(!0), _.pointColor = new I(""), _.pointSize = new I(3), e.value.seriesSettings.push(_);
    }, V = (_) => {
      e.value.seriesSettings?.splice(_, 1);
    }, C = (_, y) => {
      try {
        const A = typeof y == "string" ? y : y?.value || y, D = typeof A == "string" ? JSON.parse(A) : A;
        _.borderDash ? _.borderDash.value = D : _.borderDash = new I(D);
      } catch (A) {
        console.error("Error parsing border dash preset:", A, y);
      }
    };
    return On(() => {
      e.value.seriesSettings || (e.value.seriesSettings = []), e.value.seriesSettings.forEach((_) => {
        _.label || (_.label = new I("")), _.borderColor || (_.borderColor = new I("")), _.backgroundColor || (_.backgroundColor = new I("")), _.borderWidth || (_.borderWidth = new I(2)), _.borderDash || (_.borderDash = new I([])), _.fill || (_.fill = new I(!1)), _.showPoints || (_.showPoints = new I(!0)), _.pointColor || (_.pointColor = new I("")), _.pointSize || (_.pointSize = new I(3));
      });
    }), (_, y) => {
      const A = ye("va-button"), D = ye("va-input"), K = ye("va-select"), E = ye("va-color-input"), $ = ye("va-checkbox"), q = ye("va-collapse");
      return R(), gt(Ut, null, [
        z(q, {
          modelValue: t.value.seriesSection,
          "onUpdate:modelValue": y[0] || (y[0] = (b) => t.value.seriesSection = b),
          icon: "format_list_numbered",
          header: "Per-Series Settings"
        }, {
          default: U(() => [
            W("div", Wg, [
              W("div", Bg, [
                y[39] || (y[39] = W("p", { style: { "margin-bottom": "12px", color: "var(--va-text-secondary)" } }, " Configure individual data series. Each series can have its own chart type, axis assignment, colors, and styling. ", -1)),
                W("div", Fg, [
                  y[33] || (y[33] = W("h3", null, "Series Configuration", -1)),
                  z(A, {
                    size: "small",
                    onClick: L
                  }, {
                    default: U(() => [...y[32] || (y[32] = [
                      Ot("Add Series", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (R(!0), gt(Ut, null, xe(e.value.seriesSettings, (b, T) => (R(), gt("div", {
                  key: `series_${T}`,
                  style: { border: "1px solid #ddd", padding: "16px", "border-radius": "4px", "margin-bottom": "12px", background: "#fafafa" }
                }, [
                  W("div", Hg, [
                    W("strong", jg, "Series " + ze(b.seriesIndex?.value ?? T), 1),
                    z(A, {
                      size: "small",
                      color: "danger",
                      onClick: (M) => V(T)
                    }, {
                      default: U(() => [...y[34] || (y[34] = [
                        Ot("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  b.seriesIndex ? (R(), Y(at(lt), {
                    key: 0,
                    label: "Series Index (0-based)",
                    modelValue: b.seriesIndex,
                    "onUpdate:modelValue": (M) => b.seriesIndex = M,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: U(({ value: M, change: X }) => [
                      z(D, {
                        label: "Series Index (0-based)",
                        "model-value": M,
                        onInput: X,
                        type: "number",
                        min: 0
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  b.label !== void 0 ? (R(), Y(at(lt), {
                    key: 1,
                    label: "Series Label/Title (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (M) => b.label = M,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: U(({ value: M, change: X }) => [
                      z(D, {
                        label: "Series Label/Title (optional)",
                        "model-value": M,
                        onInput: X,
                        placeholder: "e.g., Temperature, Humidity, Pressure..."
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  b.chartType ? (R(), Y(K, {
                    key: 2,
                    label: "Chart Type",
                    modelValue: b.chartType.value,
                    "onUpdate:modelValue": (M) => b.chartType.value = M,
                    options: [
                      { value: "bar", text: "Bar Chart" },
                      { value: "line", text: "Line Chart" },
                      { value: "radar", text: "Radar Chart" },
                      { value: "pie", text: "Pie Chart" },
                      { value: "doughnut", text: "Doughnut Chart" },
                      { value: "polarArea", text: "Polar Area Chart" }
                    ],
                    "value-by": "value",
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  y[36] || (y[36] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Axis Assignment", -1)),
                  b.xAxisId ? (R(), Y(at(lt), {
                    key: 3,
                    label: "X-Axis ID (e.g., 'x', 'x1', 'x2')",
                    modelValue: b.xAxisId,
                    "onUpdate:modelValue": (M) => b.xAxisId = M,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: U(({ value: M, change: X }) => [
                      z(D, {
                        label: "X-Axis ID",
                        "model-value": M,
                        onInput: X,
                        placeholder: "x"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  b.yAxisId ? (R(), Y(at(lt), {
                    key: 4,
                    label: "Y-Axis ID (e.g., 'y', 'y1', 'y2')",
                    modelValue: b.yAxisId,
                    "onUpdate:modelValue": (M) => b.yAxisId = M,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: U(({ value: M, change: X }) => [
                      z(D, {
                        label: "Y-Axis ID",
                        "model-value": M,
                        onInput: X,
                        placeholder: "y"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  b.yAxisTitle ? (R(), Y(D, {
                    key: 5,
                    label: "Y-Axis Title",
                    modelValue: b.yAxisTitle.value,
                    "onUpdate:modelValue": (M) => b.yAxisTitle.value = M,
                    placeholder: "e.g., Temperatur (°C)",
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  y[37] || (y[37] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Colors", -1)),
                  b.borderColor !== void 0 ? (R(), Y(at(lt), {
                    key: 6,
                    label: "Border Color",
                    modelValue: b.borderColor,
                    "onUpdate:modelValue": (M) => b.borderColor = M,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: U(({ value: M, change: X }) => [
                      z(E, {
                        label: "Border Color",
                        "model-value": M,
                        onInput: X
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  b.backgroundColor !== void 0 ? (R(), Y(at(lt), {
                    key: 7,
                    label: "Background Color",
                    modelValue: b.backgroundColor,
                    "onUpdate:modelValue": (M) => b.backgroundColor = M,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: U(({ value: M, change: X }) => [
                      z(E, {
                        label: "Background Color",
                        "model-value": M,
                        onInput: X
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  y[38] || (y[38] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Border Style", -1)),
                  b.borderWidth !== void 0 ? (R(), Y(at(lt), {
                    key: 8,
                    label: "Border Width (px)",
                    modelValue: b.borderWidth,
                    "onUpdate:modelValue": (M) => b.borderWidth = M,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: U(({ value: M, change: X }) => [
                      z(D, {
                        label: "Border Width (px)",
                        "model-value": M,
                        onInput: X,
                        type: "number",
                        min: 0,
                        max: 20
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  b.borderDash !== void 0 ? (R(), Y(K, {
                    key: 9,
                    label: "Border Style",
                    "model-value": JSON.stringify(b.borderDash.value || []),
                    options: u.map((M) => ({ value: JSON.stringify(M.value), text: M.label })),
                    "value-by": "value",
                    "onUpdate:modelValue": (M) => C(b, M),
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["model-value", "options", "onUpdate:modelValue"])) : F("", !0),
                  b.fill !== void 0 ? (R(), Y($, {
                    key: 10,
                    label: "Fill Area",
                    modelValue: b.fill.value,
                    "onUpdate:modelValue": (M) => b.fill.value = M,
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                  b.chartType?.value === "line" || b.chartType === "line" ? (R(), gt("div", Ng, [
                    y[35] || (y[35] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Point Style", -1)),
                    b.showPoints !== void 0 ? (R(), Y($, {
                      key: 0,
                      label: "Show Points",
                      modelValue: b.showPoints.value,
                      "onUpdate:modelValue": (M) => b.showPoints.value = M,
                      style: { "margin-bottom": "8px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                    b.pointColor !== void 0 && b.showPoints?.value ? (R(), Y(at(lt), {
                      key: 1,
                      label: "Point Color",
                      modelValue: b.pointColor,
                      "onUpdate:modelValue": (M) => b.pointColor = M,
                      style: { "margin-bottom": "8px" }
                    }, {
                      default: U(({ value: M, change: X }) => [
                        z(E, {
                          label: "Point Color",
                          "model-value": M,
                          onInput: X
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0),
                    b.pointSize !== void 0 && b.showPoints?.value ? (R(), Y(at(lt), {
                      key: 2,
                      label: "Point Size (px)",
                      modelValue: b.pointSize,
                      "onUpdate:modelValue": (M) => b.pointSize = M
                    }, {
                      default: U(({ value: M, change: X }) => [
                        z(D, {
                          label: "Point Size (px)",
                          "model-value": M,
                          onInput: X,
                          type: "number",
                          min: 0,
                          max: 20
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : F("", !0)
                  ])) : F("", !0)
                ]))), 128)),
                !e.value.seriesSettings || e.value.seriesSettings.length === 0 ? (R(), gt("div", Yg, ' No series-specific settings configured. Click "Add Series" to configure individual data series. ')) : F("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        z(q, {
          modelValue: t.value.styleSection,
          "onUpdate:modelValue": y[17] || (y[17] = (b) => t.value.styleSection = b),
          icon: "palette",
          header: "Default Chart Styling"
        }, {
          default: U(() => [
            W("div", Ug, [
              W("div", $g, [
                y[40] || (y[40] = W("h3", null, "Chart Type", -1)),
                e.value.chartType ? (R(), Y(K, {
                  key: 0,
                  label: "Chart Type",
                  modelValue: e.value.chartType.value,
                  "onUpdate:modelValue": y[1] || (y[1] = (b) => e.value.chartType.value = b),
                  options: [
                    { value: "bar", text: "Bar Chart" },
                    { value: "line", text: "Line Chart" },
                    { value: "radar", text: "Radar Chart" },
                    { value: "pie", text: "Pie Chart" },
                    { value: "doughnut", text: "Doughnut Chart" },
                    { value: "polarArea", text: "Polar Area Chart" }
                  ],
                  "value-by": "value"
                }, null, 8, ["modelValue"])) : F("", !0)
              ]),
              r.value ? (R(), gt("div", Xg, [
                y[41] || (y[41] = W("h3", null, "Line Style", -1)),
                e.value.borderColor ? (R(), Y(at(lt), {
                  key: 0,
                  label: "Line Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": y[2] || (y[2] = (b) => e.value.borderColor = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(E, {
                      label: "Line Color",
                      "model-value": b,
                      onInput: T
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0),
                e.value.borderWidth ? (R(), Y(at(lt), {
                  key: 1,
                  label: "Line Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": y[3] || (y[3] = (b) => e.value.borderWidth = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(D, {
                      label: "Line Width (px)",
                      "model-value": b,
                      onInput: T,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0),
                e.value.borderDash ? (R(), Y(K, {
                  key: 2,
                  label: "Line Style",
                  modelValue: f.value,
                  "onUpdate:modelValue": [
                    y[4] || (y[4] = (b) => f.value = b),
                    g
                  ],
                  options: u.map((b) => ({ value: JSON.stringify(b.value), text: b.label })),
                  "value-by": "value"
                }, null, 8, ["modelValue", "options"])) : F("", !0),
                e.value.fill ? (R(), Y($, {
                  key: 3,
                  label: "Fill Area Under Line",
                  modelValue: e.value.fill,
                  "onUpdate:modelValue": y[5] || (y[5] = (b) => e.value.fill = b)
                }, null, 8, ["modelValue"])) : F("", !0),
                e.value.backgroundColor && e.value.fill ? (R(), Y(at(lt), {
                  key: 4,
                  label: "Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": y[6] || (y[6] = (b) => e.value.backgroundColor = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(E, {
                      label: "Fill Color",
                      "model-value": b,
                      onInput: T
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0),
                y[42] || (y[42] = W("h3", { style: { "margin-top": "16px" } }, "Point Style", -1)),
                e.value.showPoints ? (R(), Y($, {
                  key: 5,
                  label: "Show Points",
                  modelValue: e.value.showPoints.value,
                  "onUpdate:modelValue": y[7] || (y[7] = (b) => e.value.showPoints.value = b)
                }, null, 8, ["modelValue"])) : F("", !0),
                e.value.pointColor && e.value.showPoints ? (R(), Y(at(lt), {
                  key: 6,
                  label: "Point Color",
                  modelValue: e.value.pointColor,
                  "onUpdate:modelValue": y[8] || (y[8] = (b) => e.value.pointColor = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(E, {
                      label: "Point Color",
                      "model-value": b,
                      onInput: T
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0),
                e.value.pointSize && e.value.showPoints ? (R(), Y(at(lt), {
                  key: 7,
                  label: "Point Size (px)",
                  modelValue: e.value.pointSize,
                  "onUpdate:modelValue": y[9] || (y[9] = (b) => e.value.pointSize = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(D, {
                      label: "Point Size (px)",
                      "model-value": b,
                      onInput: T,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0)
              ])) : F("", !0),
              a.value ? (R(), gt("div", Gg, [
                y[43] || (y[43] = W("h3", null, "Bar Layout", -1)),
                e.value.barOrientation ? (R(), Y(K, {
                  key: 0,
                  label: "Bar Orientation",
                  modelValue: e.value.barOrientation,
                  "onUpdate:modelValue": y[10] || (y[10] = (b) => e.value.barOrientation = b),
                  options: [
                    { value: "vertical", text: "Vertical (Standard)" },
                    { value: "horizontal", text: "Horizontal" }
                  ],
                  "value-by": "value"
                }, null, 8, ["modelValue"])) : F("", !0),
                e.value.stacked ? (R(), Y($, {
                  key: 1,
                  label: "Stacked Bars",
                  modelValue: e.value.stacked.value,
                  "onUpdate:modelValue": y[11] || (y[11] = (b) => e.value.stacked.value = b)
                }, null, 8, ["modelValue"])) : F("", !0),
                y[44] || (y[44] = W("h3", { style: { "margin-top": "16px" } }, "Bar Style", -1)),
                e.value.backgroundColor ? (R(), Y(at(lt), {
                  key: 2,
                  label: "Bar Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": y[12] || (y[12] = (b) => e.value.backgroundColor = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(E, {
                      label: "Bar Fill Color",
                      "model-value": b,
                      onInput: T
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0),
                e.value.borderColor ? (R(), Y(at(lt), {
                  key: 3,
                  label: "Bar Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": y[13] || (y[13] = (b) => e.value.borderColor = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(E, {
                      label: "Bar Border Color",
                      "model-value": b,
                      onInput: T
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0),
                e.value.borderWidth ? (R(), Y(at(lt), {
                  key: 4,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": y[14] || (y[14] = (b) => e.value.borderWidth = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(D, {
                      label: "Border Width (px)",
                      "model-value": b,
                      onInput: T,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0)
              ])) : F("", !0),
              l.value ? (R(), gt("div", Kg, [
                y[45] || (y[45] = W("h3", null, "Segment Style", -1)),
                e.value.borderColor ? (R(), Y(at(lt), {
                  key: 0,
                  label: "Segment Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": y[15] || (y[15] = (b) => e.value.borderColor = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(E, {
                      label: "Segment Border Color",
                      "model-value": b,
                      onInput: T
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0),
                e.value.borderWidth ? (R(), Y(at(lt), {
                  key: 1,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": y[16] || (y[16] = (b) => e.value.borderWidth = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(D, {
                      label: "Border Width (px)",
                      "model-value": b,
                      onInput: T,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0)
              ])) : F("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        z(q, {
          modelValue: t.value.gridSection,
          "onUpdate:modelValue": y[24] || (y[24] = (b) => t.value.gridSection = b),
          icon: "grid_on",
          header: "Grid Lines"
        }, {
          default: U(() => [
            W("div", qg, [
              W("div", Jg, [
                y[46] || (y[46] = W("h3", null, "Horizontal Grid (Y-Axis)", -1)),
                e.value.showHorizontalGrid ? (R(), Y($, {
                  key: 0,
                  label: "Show Horizontal Grid",
                  modelValue: e.value.showHorizontalGrid.value,
                  "onUpdate:modelValue": y[18] || (y[18] = (b) => e.value.showHorizontalGrid.value = b)
                }, null, 8, ["modelValue"])) : F("", !0),
                e.value.horizontalGridColor ? (R(), Y(at(lt), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.horizontalGridColor,
                  "onUpdate:modelValue": y[19] || (y[19] = (b) => e.value.horizontalGridColor = b),
                  disabled: !e.value.showHorizontalGrid?.value
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(E, {
                      label: "Grid Color",
                      "model-value": b,
                      onInput: T
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "disabled"])) : F("", !0),
                e.value.horizontalGridWidth ? (R(), Y(at(lt), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.horizontalGridWidth,
                  "onUpdate:modelValue": y[20] || (y[20] = (b) => e.value.horizontalGridWidth = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(D, {
                      label: "Grid Width (px)",
                      "model-value": b,
                      onInput: T,
                      type: "number",
                      min: 0,
                      max: 10
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0)
              ]),
              W("div", Zg, [
                y[47] || (y[47] = W("h3", null, "Vertical Grid (X-Axis)", -1)),
                e.value.showVerticalGrid ? (R(), Y($, {
                  key: 0,
                  label: "Show Vertical Grid",
                  modelValue: e.value.showVerticalGrid,
                  "onUpdate:modelValue": y[21] || (y[21] = (b) => e.value.showVerticalGrid = b)
                }, null, 8, ["modelValue"])) : F("", !0),
                e.value.verticalGridColor ? (R(), Y(at(lt), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.verticalGridColor,
                  "onUpdate:modelValue": y[22] || (y[22] = (b) => e.value.verticalGridColor = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(E, {
                      label: "Grid Color",
                      "model-value": b,
                      onInput: T
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0),
                e.value.verticalGridWidth ? (R(), Y(at(lt), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.verticalGridWidth,
                  "onUpdate:modelValue": y[23] || (y[23] = (b) => e.value.verticalGridWidth = b)
                }, {
                  default: U(({ value: b, change: T }) => [
                    z(D, {
                      label: "Grid Width (px)",
                      "model-value": b,
                      onInput: T,
                      type: "number",
                      min: 0,
                      max: 10
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : F("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        z(q, {
          modelValue: t.value.axisLabelSection,
          "onUpdate:modelValue": y[27] || (y[27] = (b) => t.value.axisLabelSection = b),
          icon: "text_fields",
          header: "Axis Titles"
        }, {
          default: U(() => [
            W("div", Qg, [
              W("div", tp, [
                z(D, {
                  label: "X-Axis Title",
                  modelValue: i.value,
                  "onUpdate:modelValue": y[25] || (y[25] = (b) => i.value = b),
                  placeholder: "e.g., Zeit, Datum",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                z(D, {
                  label: "Y-Axis Title (y)",
                  modelValue: s.value,
                  "onUpdate:modelValue": y[26] || (y[26] = (b) => s.value = b),
                  placeholder: "e.g., Temperatur (°C)",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                (R(!0), gt(Ut, null, xe(c.value, (b) => (R(), gt(Ut, { key: b }, [
                  b !== "y" ? (R(), Y(D, {
                    key: 0,
                    label: `Y-Axis Title (${b})`,
                    "model-value": d(b),
                    "onUpdate:modelValue": (T) => h(b, T),
                    placeholder: "e.g., Niederschlag (mm)",
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"])) : F("", !0)
                ], 64))), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        z(q, {
          modelValue: t.value.dateFormatSection,
          "onUpdate:modelValue": y[29] || (y[29] = (b) => t.value.dateFormatSection = b),
          icon: "event",
          header: "Date/Time Formatting"
        }, {
          default: U(() => [
            W("div", ep, [
              W("div", np, [
                y[48] || (y[48] = W("h3", null, "X-Axis Date/Time Format", -1)),
                e.value.dateDisplayFormat ? (R(), Y(K, {
                  key: 0,
                  label: "Date Format",
                  modelValue: e.value.dateDisplayFormat.value,
                  "onUpdate:modelValue": y[28] || (y[28] = (b) => e.value.dateDisplayFormat.value = b),
                  options: [
                    { value: "dd.MM.yyyy HH:mm", text: "dd.MM.yyyy HH:mm" },
                    { value: "dd.MM.yyyy HH:mm:ss", text: "dd.MM.yyyy HH:mm:ss" },
                    { value: "dd.MM.yyyy", text: "dd.MM.yyyy" },
                    { value: "dd.MM.yy HH:mm", text: "dd.MM.yy HH:mm" },
                    { value: "dd.MM.yy", text: "dd.MM.yy" },
                    { value: "yyyy-MM-dd HH:mm:ss", text: "yyyy-MM-dd HH:mm:ss" },
                    { value: "yyyy-MM-dd HH:mm", text: "yyyy-MM-dd HH:mm" },
                    { value: "yyyy-MM-dd", text: "yyyy-MM-dd" },
                    { value: "dd/MM/yyyy HH:mm", text: "dd/MM/yyyy HH:mm" },
                    { value: "dd/MM/yyyy", text: "dd/MM/yyyy" },
                    { value: "MM/dd/yyyy HH:mm", text: "MM/dd/yyyy HH:mm" },
                    { value: "MM/dd/yyyy", text: "MM/dd/yyyy" },
                    { value: "HH:mm:ss", text: "HH:mm:ss" },
                    { value: "HH:mm", text: "HH:mm" },
                    { value: "yyyy-MM-dd'T'HH:mm:ss", text: "yyyy-MM-dd'T'HH:mm:ss (ISO)" }
                  ],
                  "value-by": "value"
                }, null, 8, ["modelValue"])) : F("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        z(q, {
          modelValue: t.value.annotationsSection,
          "onUpdate:modelValue": y[31] || (y[31] = (b) => t.value.annotationsSection = b),
          icon: "show_chart",
          header: "Reference Lines & Areas"
        }, {
          default: U(() => [
            W("div", ip, [
              W("div", sp, [
                e.value.annotationsEditMode ? (R(), Y($, {
                  key: 0,
                  label: "Enable Drag & Drop (Move annotations in chart)",
                  modelValue: e.value.annotationsEditMode,
                  "onUpdate:modelValue": y[30] || (y[30] = (b) => e.value.annotationsEditMode = b)
                }, null, 8, ["modelValue"])) : F("", !0)
              ]),
              W("div", op, [
                W("div", rp, [
                  y[50] || (y[50] = W("h3", null, "Horizontal Lines (Y-Axis)", -1)),
                  z(A, {
                    size: "small",
                    onClick: p
                  }, {
                    default: U(() => [...y[49] || (y[49] = [
                      Ot("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (R(!0), gt(Ut, null, xe(e.value.horizontalLines, (b, T) => (R(), gt("div", {
                  key: `hline_${T}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", ap, [
                    W("strong", null, "Line " + ze(T + 1), 1),
                    z(A, {
                      size: "small",
                      color: "danger",
                      onClick: (M) => m(T)
                    }, {
                      default: U(() => [...y[51] || (y[51] = [
                        Ot("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  z(D, {
                    label: "Y-Value",
                    modelValue: b.value,
                    "onUpdate:modelValue": (M) => b.value = M,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(E, {
                    label: "Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (M) => b.color = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(D, {
                    label: "Line Width (px)",
                    modelValue: b.width,
                    "onUpdate:modelValue": (M) => b.width = M,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(D, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (M) => b.label = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              W("div", lp, [
                W("div", cp, [
                  y[53] || (y[53] = W("h3", null, "Vertical Lines (X-Axis)", -1)),
                  z(A, {
                    size: "small",
                    onClick: x
                  }, {
                    default: U(() => [...y[52] || (y[52] = [
                      Ot("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (R(!0), gt(Ut, null, xe(e.value.verticalLines, (b, T) => (R(), gt("div", {
                  key: `vline_${T}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", dp, [
                    W("strong", null, "Line " + ze(T + 1), 1),
                    z(A, {
                      size: "small",
                      color: "danger",
                      onClick: (M) => v(T)
                    }, {
                      default: U(() => [...y[54] || (y[54] = [
                        Ot("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  z(D, {
                    label: "X-Value",
                    modelValue: b.value,
                    "onUpdate:modelValue": (M) => b.value = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(E, {
                    label: "Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (M) => b.color = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(D, {
                    label: "Line Width (px)",
                    modelValue: b.width,
                    "onUpdate:modelValue": (M) => b.width = M,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(D, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (M) => b.label = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              W("div", hp, [
                W("div", up, [
                  y[56] || (y[56] = W("h3", null, "Horizontal Areas (Y-Axis Ranges)", -1)),
                  z(A, {
                    size: "small",
                    onClick: S
                  }, {
                    default: U(() => [...y[55] || (y[55] = [
                      Ot("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (R(!0), gt(Ut, null, xe(e.value.horizontalBoxes, (b, T) => (R(), gt("div", {
                  key: `hbox_${T}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", fp, [
                    W("strong", null, "Area " + ze(T + 1), 1),
                    z(A, {
                      size: "small",
                      color: "danger",
                      onClick: (M) => k(T)
                    }, {
                      default: U(() => [...y[57] || (y[57] = [
                        Ot("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  z(D, {
                    label: "Y-Min",
                    modelValue: b.yMin,
                    "onUpdate:modelValue": (M) => b.yMin = M,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(D, {
                    label: "Y-Max",
                    modelValue: b.yMax,
                    "onUpdate:modelValue": (M) => b.yMax = M,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(E, {
                    label: "Fill Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (M) => b.color = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(D, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (M) => b.label = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              W("div", gp, [
                W("div", pp, [
                  y[59] || (y[59] = W("h3", null, "Vertical Areas (X-Axis Ranges)", -1)),
                  z(A, {
                    size: "small",
                    onClick: w
                  }, {
                    default: U(() => [...y[58] || (y[58] = [
                      Ot("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (R(!0), gt(Ut, null, xe(e.value.verticalBoxes, (b, T) => (R(), gt("div", {
                  key: `vbox_${T}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", mp, [
                    W("strong", null, "Area " + ze(T + 1), 1),
                    z(A, {
                      size: "small",
                      color: "danger",
                      onClick: (M) => P(T)
                    }, {
                      default: U(() => [...y[60] || (y[60] = [
                        Ot("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  z(D, {
                    label: "X-Min",
                    modelValue: b.xMin,
                    "onUpdate:modelValue": (M) => b.xMin = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(D, {
                    label: "X-Max",
                    modelValue: b.xMax,
                    "onUpdate:modelValue": (M) => b.xMax = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(E, {
                    label: "Fill Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (M) => b.color = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  z(D, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (M) => b.label = M
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), yp = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, xp = /* @__PURE__ */ yp(bp, [["__scopeId", "data-v-7701abd6"]]), vp = [
  {
    name: "Chart Clicked",
    type: "click",
    description: "Triggered when the chart is clicked",
    payloadType: fs
  },
  {
    name: "Chart Right Clicked",
    type: "right_click",
    description: "Triggered when the chart is right-clicked",
    payloadType: fs
  }
];
var _p = Object.defineProperty, wp = Object.getOwnPropertyDescriptor, hs = (n, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? wp(t, e) : t, o = n.length - 1, r; o >= 0; o--)
    (r = n[o]) && (s = (i ? r(t, e, s) : r(s)) || s);
  return i && s && _p(t, e, s), s;
}, Qo = (n, t) => (e, i) => t(e, i, n);
const Se = "ChartWidget";
let jn = class {
  constructor(n, t) {
    this.events = n, this.actions = t;
  }
  type = Se;
  component = Rg;
  settingsComponent = xp;
  supportedDSTypes = [];
  icon = Ha;
  name = "Chart";
  register() {
    this.events.registerWidget(Se, vp), this.actions.registerWidgetType(Se, me, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Se), this.actions.unregisterWidgetType(Se);
  }
};
hs([
  Ca()
], jn.prototype, "register", 1);
hs([
  Pa()
], jn.prototype, "unregister", 1);
jn = hs([
  Aa({
    service: [Fa],
    properties: { "widget.type": Se }
  }),
  Qo(0, us(Ma)),
  Qo(1, us(ka))
], jn);
export {
  nt as ChartSettings,
  Rg as ChartWidget,
  jn as ChartWidgetProvider,
  xp as ChartWidgetSettings
};
