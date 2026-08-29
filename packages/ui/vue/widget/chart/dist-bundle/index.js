(function(){var i="ui.vue.widget.chart",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings-container[data-v-c5346fb1]{padding:16px}.settings-block[data-v-c5346fb1]{display:flex;flex-direction:column;gap:12px}.settings-block h3[data-v-c5346fb1]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--va-primary)}\n";})();
import { EVENT_ACTIONS_REGISTRY as wa, EVENT_REGISTRY_ID as Ca, EVENT_ACTIONS_REGISTRY_ID as Aa } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Ia, deactivate as Oa, component as Ra, inject as fn } from "@eclipse-daanse/tsm";
import { defineComponent as zi, shallowRef as ir, h as xs, ref as Wt, onMounted as Ri, onUnmounted as sr, watch as Je, toRaw as vs, nextTick as Da, version as La, isProxy as nr, mergeModels as ka, toRefs as Ma, useModel as or, inject as Ss, computed as rt, createElementBlock as bt, openBlock as H, withModifiers as Pa, createBlock as q, createCommentVNode as U, resolveDynamicComponent as Na, resolveComponent as _e, Fragment as Ut, createVNode as F, withCtx as J, createElementVNode as W, createTextVNode as Lt, renderList as ye, toDisplayString as Ne, unref as ct } from "vue";
import { VariableWrapper as C, useVariableRepository as Va, useDatasourceRepository as Ba } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as Ha } from "vue-router";
import { BasicEObject as rr, BasicEFactory as Fa, BasicEPackage as Wa, BasicEClass as gn, BasicEReference as tt, BasicEAttribute as hi, EPackageRegistry as et, createContainmentEList as za, createBasicEList as fi } from "@emfts/core";
import { WidgetAction as si, WidgetActionInterface as ja, Payload as pn } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as dt } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Ua } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Ga } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Xa = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2049.5C22.5%2047.0147%2024.5147%2045%2027%2045H33C35.4853%2045%2037.5%2047.0147%2037.5%2049.5V93C37.5%2095.4853%2035.4853%2097.5%2033%2097.5H27C24.5147%2097.5%2022.5%2095.4853%2022.5%2093V49.5Z'%20fill='%23606060'/%3e%3cpath%20d='M52.5%2027C52.5%2024.5147%2054.5147%2022.5%2057%2022.5H63C65.4853%2022.5%2067.5%2024.5147%2067.5%2027V93C67.5%2095.4853%2065.4853%2097.5%2063%2097.5H57C54.5147%2097.5%2052.5%2095.4853%2052.5%2093V27Z'%20fill='%23606060'/%3e%3cpath%20d='M82.5%2072C82.5%2069.5147%2084.5147%2067.5%2087%2067.5H93C95.4853%2067.5%2097.5%2069.5147%2097.5%2072V93C97.5%2095.4853%2095.4853%2097.5%2093%2097.5H87C84.5147%2097.5%2082.5%2095.4853%2082.5%2093V72Z'%20fill='%23606060'/%3e%3c/svg%3e";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function ni(i) {
  return i + 0.5 | 0;
}
const Yt = (i, t, e) => Math.max(Math.min(i, e), t);
function je(i) {
  return Yt(ni(i * 2.55), 0, 255);
}
function Kt(i) {
  return Yt(ni(i * 255), 0, 255);
}
function Ft(i) {
  return Yt(ni(i / 2.55) / 100, 0, 1);
}
function mn(i) {
  return Yt(ni(i * 100), 0, 100);
}
const Ot = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Ts = [..."0123456789ABCDEF"], Ya = (i) => Ts[i & 15], $a = (i) => Ts[(i & 240) >> 4] + Ts[i & 15], gi = (i) => (i & 240) >> 4 === (i & 15), Za = (i) => gi(i.r) && gi(i.g) && gi(i.b) && gi(i.a);
function Ka(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Ot[i[1]] * 17,
    g: 255 & Ot[i[2]] * 17,
    b: 255 & Ot[i[3]] * 17,
    a: t === 5 ? Ot[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Ot[i[1]] << 4 | Ot[i[2]],
    g: Ot[i[3]] << 4 | Ot[i[4]],
    b: Ot[i[5]] << 4 | Ot[i[6]],
    a: t === 9 ? Ot[i[7]] << 4 | Ot[i[8]] : 255
  })), e;
}
const qa = (i, t) => i < 255 ? t(i) : "";
function Ja(i) {
  var t = Za(i) ? Ya : $a;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + qa(i.a, t) : void 0;
}
const Qa = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ar(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function tl(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function el(i, t, e) {
  const s = ar(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function il(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Hs(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, d;
  return o !== r && (d = o - r, c = a > 0.5 ? d / (2 - o - r) : d / (o + r), l = il(e, s, n, d, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Fs(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Kt);
}
function Ws(i, t, e) {
  return Fs(ar, i, t, e);
}
function sl(i, t, e) {
  return Fs(el, i, t, e);
}
function nl(i, t, e) {
  return Fs(tl, i, t, e);
}
function lr(i) {
  return (i % 360 + 360) % 360;
}
function ol(i) {
  const t = Qa.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? je(+t[5]) : Kt(+t[5]));
  const n = lr(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = sl(n, o, r) : t[1] === "hsv" ? s = nl(n, o, r) : s = Ws(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function rl(i, t) {
  var e = Hs(i);
  e[0] = lr(e[0] + t), e = Ws(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function al(i) {
  if (!i)
    return;
  const t = Hs(i), e = t[0], s = mn(t[1]), n = mn(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${Ft(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const bn = {
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
}, _n = {
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
function ll() {
  const i = {}, t = Object.keys(_n), e = Object.keys(bn);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, bn[o]);
    o = parseInt(_n[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let pi;
function cl(i) {
  pi || (pi = ll(), pi.transparent = [0, 0, 0, 0]);
  const t = pi[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const dl = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function ul(i) {
  const t = dl.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? je(r) : Yt(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? je(s) : Yt(s, 0, 255)), n = 255 & (t[4] ? je(n) : Yt(n, 0, 255)), o = 255 & (t[6] ? je(o) : Yt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function hl(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Ft(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const ns = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, xe = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function fl(i, t, e) {
  const s = xe(Ft(i.r)), n = xe(Ft(i.g)), o = xe(Ft(i.b));
  return {
    r: Kt(ns(s + e * (xe(Ft(t.r)) - s))),
    g: Kt(ns(n + e * (xe(Ft(t.g)) - n))),
    b: Kt(ns(o + e * (xe(Ft(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function mi(i, t, e) {
  if (i) {
    let s = Hs(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Ws(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function cr(i, t) {
  return i && Object.assign(t || {}, i);
}
function yn(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = Kt(i[3]))) : (t = cr(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = Kt(t.a)), t;
}
function gl(i) {
  return i.charAt(0) === "r" ? ul(i) : ol(i);
}
class Qe {
  constructor(t) {
    if (t instanceof Qe)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = yn(t) : e === "string" && (s = Ka(t) || cl(t) || gl(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = cr(this._rgb);
    return t && (t.a = Ft(t.a)), t;
  }
  set rgb(t) {
    this._rgb = yn(t);
  }
  rgbString() {
    return this._valid ? hl(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Ja(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? al(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb, n = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = s.a - n.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = r * s.a + (1 - r) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = fl(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Qe(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Kt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = ni(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return mi(this._rgb, 2, t), this;
  }
  darken(t) {
    return mi(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return mi(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return mi(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return rl(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function Vt() {
}
const pl = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function it(i) {
  return i == null;
}
function st(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function $(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function gt(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function kt(i, t) {
  return gt(i) ? i : t;
}
function z(i, t) {
  return typeof i > "u" ? t : i;
}
const ml = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, dr = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function nt(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function ot(i, t, e, s) {
  let n, o, r;
  if (st(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if ($(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function Di(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Li(i) {
  if (st(i))
    return i.map(Li);
  if ($(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Li(i[e[n]]);
    return t;
  }
  return i;
}
function ur(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function bl(i, t, e, s) {
  if (!ur(i))
    return;
  const n = t[i], o = e[i];
  $(n) && $(o) ? ti(n, o, s) : t[i] = Li(o);
}
function ti(i, t, e) {
  const s = st(t) ? t : [
    t
  ], n = s.length;
  if (!$(i))
    return i;
  e = e || {};
  const o = e.merger || bl;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !$(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, d = l.length; c < d; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function $e(i, t) {
  return ti(i, t, {
    merger: _l
  });
}
function _l(i, t, e) {
  if (!ur(i))
    return;
  const s = t[i], n = e[i];
  $(s) && $(n) ? $e(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Li(n));
}
const xn = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function yl(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function xl(i) {
  const t = yl(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function Qt(i, t) {
  return (xn[t] || (xn[t] = xl(t)))(i);
}
function zs(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const It = (i) => typeof i < "u", At = (i) => typeof i == "function", vn = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function vl(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const Y = Math.PI, at = 2 * Y, Sl = at + Y, ki = Number.POSITIVE_INFINITY, Gs = Y / 180, lt = Y / 2, Rt = Y / 4, Mi = Y * 2 / 3, hr = Math.log10, Nt = Math.sign;
function Ze(i, t, e) {
  return Math.abs(i - t) < e;
}
function Sn(i) {
  const t = Math.round(i);
  i = Ze(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(hr(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Tl(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function El(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function de(i) {
  return !El(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function wl(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function Cl(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function ft(i) {
  return i * (Y / 180);
}
function Gi(i) {
  return i * (180 / Y);
}
function Tn(i) {
  if (!gt(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Pi(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * Y && (o += at), {
    angle: o,
    distance: n
  };
}
function we(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Al(i, t) {
  return (i - t + Sl) % at - Y;
}
function xt(i) {
  return (i % at + at) % at;
}
function ei(i, t, e, s) {
  const n = xt(i), o = xt(t), r = xt(e), a = xt(o - n), l = xt(r - n), c = xt(n - o), d = xt(n - r);
  return n === o || n === r || s && o === r || a > l && c < d;
}
function vt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Il(i) {
  return vt(i, -32768, 32767);
}
function zt(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function js(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const re = (i, t, e, s) => js(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Ol = (i, t, e) => js(i, e, (s) => i[s][t] >= e);
function Rl(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const fr = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Dl(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), fr.forEach((e) => {
    const s = "_onData" + zs(e), n = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = n.apply(this, o);
        return i._chartjs.listeners.forEach((a) => {
          typeof a[s] == "function" && a[s](...o);
        }), r;
      }
    });
  });
}
function En(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (fr.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function gr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const pr = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function mr(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, pr.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function Ll(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Us = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", yt = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, kl = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Ml(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, d = r.axis, { min: u, max: h, minDefined: f, maxDefined: g } = r.getUserBounds();
    if (f) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        re(l, d, u).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : re(t, d, r.getPixelForValue(u)).lo
      ), c) {
        const p = l.slice(0, n + 1).reverse().findIndex((m) => !it(m[a.axis]));
        n -= Math.max(0, p);
      }
      n = vt(n, 0, s - 1);
    }
    if (g) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        re(l, r.axis, h, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : re(t, d, r.getPixelForValue(h), !0).hi + 1
      );
      if (c) {
        const m = l.slice(p - 1).findIndex((y) => !it(y[a.axis]));
        p += Math.max(0, m);
      }
      o = vt(p, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function Pl(i) {
  const { xScale: t, yScale: e, _scaleRanges: s } = i, n = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!s)
    return i._scaleRanges = n, !0;
  const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
  return Object.assign(s, n), o;
}
const bi = (i) => i === 0 || i === 1, wn = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * at / e)), Cn = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * at / e) + 1, Ke = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * lt) + 1,
  easeOutSine: (i) => Math.sin(i * lt),
  easeInOutSine: (i) => -0.5 * (Math.cos(Y * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => bi(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => bi(i) ? i : wn(i, 0.075, 0.3),
  easeOutElastic: (i) => bi(i) ? i : Cn(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return bi(i) ? i : i < 0.5 ? 0.5 * wn(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * Cn(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - Ke.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Ke.easeInBounce(i * 2) * 0.5 : Ke.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function Xs(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function An(i) {
  return Xs(i) ? i : new Qe(i);
}
function os(i) {
  return Xs(i) ? i : new Qe(i).saturate(0.5).darken(0.1).hexString();
}
const Nl = [
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
function Bl(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), i.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), i.set("animations", {
    colors: {
      type: "color",
      properties: Vl
    },
    numbers: {
      type: "number",
      properties: Nl
    }
  }), i.describe("animations", {
    _fallback: "animation"
  }), i.set("transitions", {
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
function Hl(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const In = /* @__PURE__ */ new Map();
function Fl(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = In.get(e);
  return s || (s = new Intl.NumberFormat(i, t), In.set(e, s)), s;
}
function ji(i, t, e) {
  return Fl(t, e).format(i);
}
const Wl = {
  values(i) {
    return st(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = zl(i, e);
    }
    const r = hr(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), ji(i, s, l);
  }
};
function zl(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Ys = {
  formatters: Wl
};
function Gl(i) {
  i.set("scale", {
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
      callback: Ys.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), i.describe("scales", {
    _fallback: "scale"
  }), i.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const ue = /* @__PURE__ */ Object.create(null), Es = /* @__PURE__ */ Object.create(null);
function qe(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function rs(i, t, e) {
  return typeof t == "string" ? ti(qe(i, t), e) : ti(qe(i, ""), t);
}
class jl {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => os(n.backgroundColor), this.hoverBorderColor = (s, n) => os(n.borderColor), this.hoverColor = (s, n) => os(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return rs(this, t, e);
  }
  get(t) {
    return qe(this, t);
  }
  describe(t, e) {
    return rs(Es, t, e);
  }
  override(t, e) {
    return rs(ue, t, e);
  }
  route(t, e, s, n) {
    const o = qe(this, t), r = qe(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return $(l) ? Object.assign({}, c, l) : z(l, c);
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
var ut = /* @__PURE__ */ new jl({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Bl,
  Hl,
  Gl
]);
function Ul(i) {
  return !i || it(i.size) || it(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Ni(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function Xl(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, d, u, h;
  for (l = 0; l < a; l++)
    if (u = e[l], u != null && !st(u))
      r = Ni(i, n, o, r, u);
    else if (st(u))
      for (c = 0, d = u.length; c < d; c++)
        h = u[c], h != null && !st(h) && (r = Ni(i, n, o, r, h));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete n[o[l]];
    o.splice(0, f);
  }
  return r;
}
function ie(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function On(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function ws(i, t, e, s) {
  br(i, t, e, s, null);
}
function br(i, t, e, s, n) {
  let o, r, a, l, c, d, u, h;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let m = (g || 0) * Gs;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(m), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (i.beginPath(), f) {
      // Default includes circle
      default:
        n ? i.ellipse(e, s, n / 2, p, 0, 0, at) : i.arc(e, s, p, 0, at), i.closePath();
        break;
      case "triangle":
        d = n ? n / 2 : p, i.moveTo(e + Math.sin(m) * d, s - Math.cos(m) * p), m += Mi, i.lineTo(e + Math.sin(m) * d, s - Math.cos(m) * p), m += Mi, i.lineTo(e + Math.sin(m) * d, s - Math.cos(m) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(m + Rt) * l, u = Math.cos(m + Rt) * (n ? n / 2 - c : l), a = Math.sin(m + Rt) * l, h = Math.sin(m + Rt) * (n ? n / 2 - c : l), i.arc(e - u, s - a, c, m - Y, m - lt), i.arc(e + h, s - r, c, m - lt, m), i.arc(e + u, s + a, c, m, m + lt), i.arc(e - h, s + r, c, m + lt, m + Y), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, d = n ? n / 2 : l, i.rect(e - d, s - l, 2 * d, 2 * l);
          break;
        }
        m += Rt;
      /* falls through */
      case "rectRot":
        u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + h, s - r), i.lineTo(e + u, s + a), i.lineTo(e - h, s + r), i.closePath();
        break;
      case "crossRot":
        m += Rt;
      /* falls through */
      case "cross":
        u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r);
        break;
      case "star":
        u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r), m += Rt, u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r);
        break;
      case "line":
        r = n ? n / 2 : Math.cos(m) * p, a = Math.sin(m) * p, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function Gt(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function oi(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function ri(i) {
  i.restore();
}
function Yl(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function $l(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Zl(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), it(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Kl(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, d = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, d), i.lineTo(a, d), i.stroke();
  }
}
function ql(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function he(i, t, e, s, n, o = {}) {
  const r = st(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, Zl(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && ql(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), it(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), Kl(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Ce(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * Y, Y, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, Y, lt, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, lt, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -lt, !0), i.lineTo(e + r.topLeft, s);
}
const Jl = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Ql = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function tc(i, t) {
  const e = ("" + i).match(Jl);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const ec = (i) => +i || 0;
function $s(i, t) {
  const e = {}, s = $(t), n = s ? Object.keys(t) : t, o = $(i) ? s ? (r) => z(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = ec(o(r));
  return e;
}
function _r(i) {
  return $s(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function qt(i) {
  return $s(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function pt(i) {
  const t = _r(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function ht(i, t) {
  i = i || {}, t = t || ut.font;
  let e = z(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = z(i.style, t.style);
  s && !("" + s).match(Ql) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: z(i.family, t.family),
    lineHeight: tc(z(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: z(i.weight, t.weight),
    string: ""
  };
  return n.string = Ul(n), n;
}
function _i(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function ic(i, t, e) {
  const { min: s, max: n } = i, o = dr(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function ee(i, t) {
  return Object.assign(Object.create(i), t);
}
function Zs(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = Sr("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => Zs([
      a,
      ...i
    ], t, o, s)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete i[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return xr(a, l, () => dc(l, t, i, a));
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
      return Reflect.getPrototypeOf(i[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return Dn(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Dn(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const d = a._storage || (a._storage = n());
      return a[l] = d[l] = c, delete a._keys, !0;
    }
  });
}
function Ae(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: yr(i, s),
    setContext: (o) => Ae(i, o, e, s),
    override: (o) => Ae(i.override(o), t, e, s)
  };
  return new Proxy(n, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return xr(o, r, () => nc(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(i, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, r);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    /**
    * A trap for the in operator.
    */
    has(o, r) {
      return Reflect.has(i, r);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    /**
    * A trap for setting property values.
    */
    set(o, r, a) {
      return i[r] = a, delete o[r], !0;
    }
  });
}
function yr(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: At(e) ? e : () => e,
    isIndexable: At(s) ? s : () => s
  };
}
const sc = (i, t) => i ? i + zs(t) : t, Ks = (i, t) => $(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function xr(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function nc(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return At(a) && r.isScriptable(t) && (a = oc(t, a, i, e)), st(a) && a.length && (a = rc(t, a, i, r.isIndexable)), Ks(t, a) && (a = Ae(a, n, o && o[t], r)), a;
}
function oc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), Ks(i, l) && (l = qs(n._scopes, n, i, l)), l;
}
function rc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if ($(t[0])) {
    const l = t, c = n._scopes.filter((d) => d !== l);
    t = [];
    for (const d of l) {
      const u = qs(c, n, i, d);
      t.push(Ae(u, o, r && r[i], a));
    }
  }
  return t;
}
function vr(i, t, e) {
  return At(i) ? i(t, e) : i;
}
const ac = (i, t) => i === !0 ? t : typeof i == "string" ? Qt(t, i) : void 0;
function lc(i, t, e, s, n) {
  for (const o of t) {
    const r = ac(e, o);
    if (r) {
      i.add(r);
      const a = vr(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function qs(i, t, e, s) {
  const n = t._rootScopes, o = vr(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Rn(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Rn(a, r, o, l, s), l === null) ? !1 : Zs(Array.from(a), [
    ""
  ], n, o, () => cc(t, e, s));
}
function Rn(i, t, e, s, n) {
  for (; e; )
    e = lc(i, t, e, s, n);
  return e;
}
function cc(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return st(n) && $(e) ? e : n || {};
}
function dc(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Sr(sc(o, i), e), typeof n < "u")
      return Ks(i, n) ? qs(e, s, i, n) : n;
}
function Sr(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function Dn(i) {
  let t = i._keys;
  return t || (t = i._keys = uc(i._scopes)), t;
}
function uc(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function Tr(i, t, e, s) {
  const { iScale: n } = i, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, l, c, d;
  for (a = 0, l = s; a < l; ++a)
    c = a + e, d = t[c], r[a] = {
      r: n.parse(Qt(d, o), c)
    };
  return r;
}
const hc = Number.EPSILON || 1e-14, Ie = (i, t) => t < i.length && !i[t].skip && i[t], Er = (i) => i === "x" ? "y" : "x";
function fc(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = we(o, n), l = we(r, o);
  let c = a / (a + l), d = l / (a + l);
  c = isNaN(c) ? 0 : c, d = isNaN(d) ? 0 : d;
  const u = s * c, h = s * d;
  return {
    previous: {
      x: o.x - u * (r.x - n.x),
      y: o.y - u * (r.y - n.y)
    },
    next: {
      x: o.x + h * (r.x - n.x),
      y: o.y + h * (r.y - n.y)
    }
  };
}
function gc(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Ie(i, 0);
  for (let d = 0; d < s - 1; ++d)
    if (l = c, c = Ie(i, d + 1), !(!l || !c)) {
      if (Ze(t[d], 0, hc)) {
        e[d] = e[d + 1] = 0;
        continue;
      }
      n = e[d] / t[d], o = e[d + 1] / t[d], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[d] = n * r * t[d], e[d + 1] = o * r * t[d]);
    }
}
function pc(i, t, e = "x") {
  const s = Er(e), n = i.length;
  let o, r, a, l = Ie(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Ie(i, c + 1), !a)
      continue;
    const d = a[e], u = a[s];
    r && (o = (d - r[e]) / 3, a[`cp1${e}`] = d - o, a[`cp1${s}`] = u - o * t[c]), l && (o = (l[e] - d) / 3, a[`cp2${e}`] = d + o, a[`cp2${s}`] = u + o * t[c]);
  }
}
function mc(i, t = "x") {
  const e = Er(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Ie(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Ie(i, r + 1), !!l) {
      if (c) {
        const d = c[t] - l[t];
        n[r] = d !== 0 ? (c[e] - l[e]) / d : 0;
      }
      o[r] = a ? c ? Nt(n[r - 1]) !== Nt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  gc(i, n, o), pc(i, o, t);
}
function yi(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function bc(i, t) {
  let e, s, n, o, r, a = Gt(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && Gt(i[e + 1], t), o && (n = i[e], r && (n.cp1x = yi(n.cp1x, t.left, t.right), n.cp1y = yi(n.cp1y, t.top, t.bottom)), a && (n.cp2x = yi(n.cp2x, t.left, t.right), n.cp2y = yi(n.cp2y, t.top, t.bottom)));
}
function _c(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    mc(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = fc(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && bc(i, e);
}
function Js() {
  return typeof window < "u" && typeof document < "u";
}
function Qs(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Vi(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Ui = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function yc(i, t) {
  return Ui(i).getPropertyValue(t);
}
const xc = [
  "top",
  "right",
  "bottom",
  "left"
];
function le(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = xc[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const vc = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Sc(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (vc(n, o, i.target))
    a = n, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function ne(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Ui(e), o = n.boxSizing === "border-box", r = le(n, "padding"), a = le(n, "border", "width"), { x: l, y: c, box: d } = Sc(i, e), u = r.left + (d && a.left), h = r.top + (d && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - u) / f * e.width / s),
    y: Math.round((c - h) / g * e.height / s)
  };
}
function Tc(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && Qs(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Ui(o), l = le(a, "border", "width"), c = le(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Vi(a.maxWidth, o, "clientWidth"), n = Vi(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || ki,
    maxHeight: n || ki
  };
}
const $t = (i) => Math.round(i * 10) / 10;
function Ec(i, t, e, s) {
  const n = Ui(i), o = le(n, "margin"), r = Vi(n.maxWidth, i, "clientWidth") || ki, a = Vi(n.maxHeight, i, "clientHeight") || ki, l = Tc(i, t, e);
  let { width: c, height: d } = l;
  if (n.boxSizing === "content-box") {
    const h = le(n, "border", "width"), f = le(n, "padding");
    c -= f.width + h.width, d -= f.height + h.height;
  }
  return c = Math.max(0, c - o.width), d = Math.max(0, s ? c / s : d - o.height), c = $t(Math.min(c, r, l.maxWidth)), d = $t(Math.min(d, a, l.maxHeight)), c && !d && (d = $t(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && d > l.height && (d = l.height, c = $t(Math.floor(d * s))), {
    width: c,
    height: d
  };
}
function Ln(i, t, e) {
  const s = t || 1, n = $t(i.height * s), o = $t(i.width * s);
  i.height = $t(i.height), i.width = $t(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const wc = (function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    Js() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
})();
function kn(i, t) {
  const e = yc(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function oe(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Cc(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Ac(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = oe(i, n, e), a = oe(n, o, e), l = oe(o, t, e), c = oe(r, a, e), d = oe(a, l, e);
  return oe(c, d, e);
}
const Ic = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, s) {
      return e - s;
    },
    leftForLtr(e, s) {
      return e - s;
    }
  };
}, Oc = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function Ee(i, t, e) {
  return i ? Ic(t, e) : Oc();
}
function wr(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Cr(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Ar(i) {
  return i === "angle" ? {
    between: ei,
    compare: Al,
    normalize: xt
  } : {
    between: zt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Mn({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function Rc(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = Ar(s), l = t.length;
  let { start: c, end: d, loop: u } = i, h, f;
  if (u) {
    for (c += l, d += l, h = 0, f = l; h < f && r(a(t[c % l][s]), n, o); ++h)
      c--, d--;
    c %= l, d %= l;
  }
  return d < c && (d += l), {
    start: c,
    end: d,
    loop: u,
    style: i.style
  };
}
function Ir(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Ar(s), { start: d, end: u, loop: h, style: f } = Rc(i, t, e), g = [];
  let p = !1, m = null, y, v, E;
  const A = () => l(n, E, y) && a(n, E) !== 0, T = () => a(o, y) === 0 || l(o, E, y), O = () => p || A(), V = () => !p || T();
  for (let P = d, I = d; P <= u; ++P)
    v = t[P % r], !v.skip && (y = c(v[s]), y !== E && (p = l(y, n, o), m === null && O() && (m = a(y, n) === 0 ? P : I), m !== null && V() && (g.push(Mn({
      start: m,
      end: P,
      loop: h,
      count: r,
      style: f
    })), m = null), I = P, E = y));
  return m !== null && g.push(Mn({
    start: m,
    end: u,
    loop: h,
    count: r,
    style: f
  })), g;
}
function Or(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Ir(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Dc(i, t, e, s) {
  let n = 0, o = t - 1;
  if (e && !s)
    for (; n < t && !i[n].skip; )
      n++;
  for (; n < t && i[n].skip; )
    n++;
  for (n %= t, e && (o += n); o > n && i[o % t].skip; )
    o--;
  return o %= t, {
    start: n,
    end: o
  };
}
function Lc(i, t, e, s) {
  const n = i.length, o = [];
  let r = t, a = i[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % n];
    c.skip || c.stop ? a.skip || (s = !1, o.push({
      start: t % n,
      end: (l - 1) % n,
      loop: s
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % n,
    end: r % n,
    loop: s
  }), o;
}
function kc(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = Dc(e, n, o, s);
  if (s === !0)
    return Pn(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return Pn(i, Lc(e, r, l, c), e, t);
}
function Pn(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Mc(i, t, e, s);
}
function Mc(i, t, e, s) {
  const n = i._chart.getContext(), o = Nn(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let d = o, u = t[0].start, h = u;
  function f(g, p, m, y) {
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
        style: y
      }), d = y, u = p % l);
    }
  }
  for (const g of t) {
    u = a ? u : g.start;
    let p = e[u % l], m;
    for (h = u + 1; h <= g.end; h++) {
      const y = e[h % l];
      m = Nn(s.setContext(ee(n, {
        type: "segment",
        p0: p,
        p1: y,
        p0DataIndex: (h - 1) % l,
        p1DataIndex: h % l,
        datasetIndex: r
      }))), Pc(m, d) && f(u, h - 1, g.loop, d), p = y, d = m;
    }
    u < h - 1 && f(u, h - 1, g.loop, d);
  }
  return c;
}
function Nn(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor
  };
}
function Pc(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return Xs(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
function xi(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Nc(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: xi(e, t, "left"),
    right: xi(e, t, "right"),
    top: xi(s, t, "top"),
    bottom: xi(s, t, "bottom")
  } : t;
}
function Rr(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const s = Nc(t, i.chartArea);
  return {
    left: e.left === !1 ? 0 : s.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? i.width : s.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : s.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? i.height : s.bottom + (e.bottom === !0 ? 0 : e.bottom)
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
  _notify(t, e, s, n) {
    const o = e.listeners[n], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(s - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = pr.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, s)), s;
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh());
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
    const s = e.items;
    let n = s.length - 1;
    for (; n >= 0; --n)
      s[n].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Bt = /* @__PURE__ */ new Vc();
const Vn = "transparent", Bc = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = An(i || Vn), n = s.valid && An(t || Vn);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class Hc {
  constructor(t, e, s, n) {
    const o = e[s];
    n = _i([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = _i([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || Bc[t.type || typeof r], this._easing = Ke[t.easing] || Ke.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = _i([
        t.to,
        e,
        n,
        t.from
      ]), this._from = _i([
        t.from,
        n,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, s = this._duration, n = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < s), !this._active) {
      this._target[n] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    l = e / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({
        res: e,
        rej: s
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", s = this._promises || [];
    for (let n = 0; n < s.length; n++)
      s[n][e]();
  }
}
class tn {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!$(t))
      return;
    const e = Object.keys(ut.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!$(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (st(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = Wc(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && Fc(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const d = e[c];
      let u = o[c];
      const h = s.get(c);
      if (u)
        if (h && u.active()) {
          u.update(h, d, a);
          continue;
        } else
          u.cancel();
      if (!h || !h.duration) {
        t[c] = d;
        continue;
      }
      o[c] = u = new Hc(h, t, c, d), n.push(u);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length)
      return Bt.add(this._chart, s), !0;
  }
}
function Fc(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Wc(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function Bn(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function zc(i, t, e) {
  if (e === !1)
    return !1;
  const s = Bn(i, e), n = Bn(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function Gc(i) {
  let t, e, s, n;
  return $(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Dr(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function Hn(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let d = !1;
  for (r = 0, a = n.length; r < a; ++r) {
    if (l = +n[r], l === e) {
      if (d = !0, s.all)
        continue;
      break;
    }
    c = i.values[l], gt(c) && (o || t === 0 || Nt(t) === Nt(c)) && (t += c);
  }
  return !d && !s.all ? 0 : t;
}
function jc(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, d;
  for (l = 0, c = r.length; l < c; ++l)
    d = r[l], a[l] = {
      [n]: d,
      [o]: i[d]
    };
  return a;
}
function as(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Uc(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Xc(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function Yc(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Fn(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function Wn(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, d = Uc(o, r, s), u = t.length;
  let h;
  for (let f = 0; f < u; ++f) {
    const g = t[f], { [l]: p, [c]: m } = g, y = g._stacks || (g._stacks = {});
    h = y[c] = Yc(n, d, p), h[a] = m, h._top = Fn(h, r, !0, s.type), h._bottom = Fn(h, r, !1, s.type);
    const v = h._visualValues || (h._visualValues = {});
    v[a] = m;
  }
}
function ls(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function $c(i, t) {
  return ee(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Zc(i, t, e) {
  return ee(i, {
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
function Ve(i, t) {
  const e = i.controller.index, s = i.vScale && i.vScale.axis;
  if (s) {
    t = t || i._parsed;
    for (const n of t) {
      const o = n._stacks;
      if (!o || o[s] === void 0 || o[s][e] === void 0)
        return;
      delete o[s][e], o[s]._visualValues !== void 0 && o[s]._visualValues[e] !== void 0 && delete o[s]._visualValues[e];
    }
  }
}
const cs = (i) => i === "reset" || i === "none", zn = (i, t) => t ? i : Object.assign({}, i), Kc = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Dr(e, !0),
  values: null
};
class Re {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = as(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ve(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (u, h, f, g) => u === "x" ? h : u === "r" ? g : f, o = e.xAxisID = z(s.xAxisID, ls(t, "x")), r = e.yAxisID = z(s.yAxisID, ls(t, "y")), a = e.rAxisID = z(s.rAxisID, ls(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), d = e.vAxisID = n(l, r, o, a);
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
    this._data && En(this._data, this), t._stacked && Ve(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if ($(e)) {
      const n = this._cachedMeta;
      this._data = jc(e, n);
    } else if (s !== e) {
      if (s) {
        En(s, this);
        const n = this._cachedMeta;
        Ve(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Dl(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, s = this.getDataset();
    let n = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = as(e.vScale, e), e.stack !== s.stack && (n = !0, Ve(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (Wn(this, e._parsed), e._stacked = as(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], d, u, h;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, h = n;
    else {
      st(n[t]) ? h = this.parseArrayData(s, n, t, e) : $(n[t]) ? h = this.parseObjectData(s, n, t, e) : h = this.parsePrimitiveData(s, n, t, e);
      const f = () => u[a] === null || c && u[a] < c[a];
      for (d = 0; d < e; ++d)
        s._parsed[d + t] = u = h[d], l && (f() && (l = !1), c = u);
      s._sorted = l;
    }
    r && Wn(this, h);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), d = o === r, u = new Array(n);
    let h, f, g;
    for (h = 0, f = n; h < f; ++h)
      g = h + s, u[h] = {
        [a]: d || o.parse(c[g], g),
        [l]: r.parse(e[g], g)
      };
    return u;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, a = new Array(n);
    let l, c, d, u;
    for (l = 0, c = n; l < c; ++l)
      d = l + s, u = e[d], a[l] = {
        x: o.parse(u[0], d),
        y: r.parse(u[1], d)
      };
    return a;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let d, u, h, f;
    for (d = 0, u = n; d < u; ++d)
      h = d + s, f = e[h], c[d] = {
        x: o.parse(Qt(f, a), h),
        y: r.parse(Qt(f, l), h)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const n = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: Dr(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Hn(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = Hn(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = Kc(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: u } = Xc(a);
    let h, f;
    function g() {
      f = n[h];
      const p = f[a.axis];
      return !gt(f[t.axis]) || d > p || u < p;
    }
    for (h = 0; h < r && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++h)
      ;
    if (o) {
      for (h = r - 1; h >= 0; --h)
        if (!g()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, s = [];
    let n, o, r;
    for (n = 0, o = e.length; n < o; ++n)
      r = e[n][t.axis], gt(r) && s.push(r);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = Gc(z(this.options.clip, zc(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
    let d;
    for (s.dataset && s.dataset.draw(t, o, a, l), d = a; d < a + l; ++d) {
      const u = n[d];
      u.hidden || (u.active && c ? r.push(u) : u.draw(t, o));
    }
    for (d = 0; d < r.length; ++d)
      r[d].draw(t, o);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = Zc(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = $c(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && It(s);
    if (a)
      return zn(a, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, t), u = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], h = c.getOptionScopes(this.getDataset(), d), f = Object.keys(ut.elements[t]), g = () => this.getContext(s, n, e), p = c.resolveNamedOptions(h, f, g, u);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(zn(p, l))), p;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (n.options.animation !== !1) {
      const d = this.chart.config, u = d.datasetAnimationScopeKeys(this._type, e), h = d.getOptionScopes(this.getDataset(), u);
      l = d.createResolver(h, this.getContext(t, s, e));
    }
    const c = new tn(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || cs(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    cs(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !cs(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    const o = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: !n && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !0);
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
    const e = this._data, s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const n = s.length, o = e.length, r = Math.min(o, n);
    r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta, o = n.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && Ve(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, s, n] = t;
      this[e](s, n);
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
    const s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
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
function qc(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = gr(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function Jc(i) {
  const t = i.iScale, e = qc(t, i.type);
  let s = t._length, n, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (It(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (n = 0, o = e.length; n < o; ++n)
    r = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    r = t.getPixelForTick(n), l();
  return s;
}
function Qc(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return it(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function td(i, t, e, s) {
  const n = t.pixels, o = n[i];
  let r = i > 0 ? n[i - 1] : null, a = i < n.length - 1 ? n[i + 1] : null;
  const l = e.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
  const c = o - (o - Math.min(r, a)) / 2 * l;
  return {
    chunk: Math.abs(a - r) / 2 * l / s,
    ratio: e.barPercentage,
    start: c
  };
}
function ed(i, t, e, s) {
  const n = e.parse(i[0], s), o = e.parse(i[1], s), r = Math.min(n, o), a = Math.max(n, o);
  let l = r, c = a;
  Math.abs(r) > Math.abs(a) && (l = a, c = r), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: n,
    end: o,
    min: r,
    max: a
  };
}
function Lr(i, t, e, s) {
  return st(i) ? ed(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function Gn(i, t, e, s) {
  const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
  let c, d, u, h;
  for (c = e, d = e + s; c < d; ++c)
    h = t[c], u = {}, u[n.axis] = a || n.parse(r[c], c), l.push(Lr(h, u, o, c));
  return l;
}
function ds(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function id(i, t, e) {
  return i !== 0 ? Nt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function sd(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function nd(i, t, e, s) {
  let n = t.borderSkipped;
  const o = {};
  if (!n) {
    i.borderSkipped = o;
    return;
  }
  if (n === !0) {
    i.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: r, end: a, reverse: l, top: c, bottom: d } = sd(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = d : (o[jn(d, r, a, l)] = !0, n = c)), o[jn(n, r, a, l)] = !0, i.borderSkipped = o;
}
function jn(i, t, e, s) {
  return s ? (i = od(i, t, e), i = Un(i, e, t)) : i = Un(i, t, e), i;
}
function od(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Un(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function rd(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class ad extends Re {
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
  parsePrimitiveData(t, e, s, n) {
    return Gn(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return Gn(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, d = r.axis === "x" ? a : l, u = [];
    let h, f, g, p;
    for (h = s, f = s + n; h < f; ++h)
      p = e[h], g = {}, g[o.axis] = o.parse(Qt(p, c), h), u.push(Lr(Qt(p, d), g, r, h));
    return u;
  }
  updateRangeFromParsed(t, e, s, n) {
    super.updateRangeFromParsed(t, e, s, n);
    const o = s._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), r = o._custom, a = ds(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(o[n.axis]);
    return {
      label: "" + s.getLabelForValue(o[s.axis]),
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
  updateElements(t, e, s, n) {
    const o = n === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), d = this._getRuler(), { sharedOptions: u, includeOptions: h } = this._getSharedOptions(e, n);
    for (let f = e; f < e + s; f++) {
      const g = this.getParsed(f), p = o || it(g[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, d), y = (g._stacks || {})[a.axis], v = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !y || ds(g._custom) || r === y._top || r === y._bottom,
        x: c ? p.head : m.center,
        y: c ? m.center : p.head,
        height: c ? m.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : m.size
      };
      h && (v.options = u || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const E = v.options || t[f].options;
      nd(v, E, y, r), rd(v, E, d.ratio), this.updateElement(t[f], f, v, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((d) => d.controller.options.grouped), o = s.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[s.axis], c = (d) => {
      const u = d._parsed.find((f) => f[s.axis] === l), h = u && u[d.vScale.axis];
      if (it(h) || isNaN(h))
        return !0;
    };
    for (const d of n)
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
    return Object.keys(t).filter((s) => t[s].axis === e).shift();
  }
  _getAxis() {
    const t = {}, e = this.getFirstScaleIdForIndexAxis();
    for (const s of this.chart.data.datasets)
      t[z(this.chart.options.indexAxis === "x" ? s.xAxisID : s.yAxisID, e)] = !0;
    return Object.keys(t);
  }
  _getStackIndex(t, e, s) {
    const n = this._getStacks(t, s), o = e !== void 0 ? n.indexOf(e) : -1;
    return o === -1 ? n.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, s = e.iScale, n = [];
    let o, r;
    for (o = 0, r = e.data.length; o < r; ++o)
      n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
    const a = t.barThickness;
    return {
      min: a || Jc(e),
      pixels: n,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: s, index: n }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, d = ds(c);
    let u = l[e.axis], h = 0, f = s ? this.applyStack(e, l, s) : u, g, p;
    f !== u && (h = f - u, f = u), d && (u = c.barStart, f = c.barEnd - c.barStart, u !== 0 && Nt(u) !== Nt(c.barEnd) && (h = 0), h += u);
    const m = !it(o) && !d ? o : h;
    let y = e.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(h + f) : g = y, p = g - y, Math.abs(p) < r) {
      p = id(p, e, a) * r, u === a && (y -= p / 2);
      const v = e.getPixelForDecimal(0), E = e.getPixelForDecimal(1), A = Math.min(v, E), T = Math.max(v, E);
      y = Math.max(Math.min(y, T), A), g = y + p, s && !d && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(y));
    }
    if (y === e.getPixelForValue(a)) {
      const v = Nt(p) * e.getLineWidthForValue(a) / 2;
      y += v, p -= v;
    }
    return {
      size: p,
      base: y,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, o = n.skipNull, r = z(n.maxBarThickness, 1 / 0);
    let a, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const d = o ? this._getStackCount(t) : e.stackCount, u = n.barThickness === "flex" ? td(t, e, n, d * c) : Qc(t, e, n, d * c), h = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(z(h, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
      a = u.start + u.chunk * g + u.chunk / 2, l = Math.min(r, u.chunk * u.ratio);
    } else
      a = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(r, e.min * e.ratio);
    return {
      base: a - l / 2,
      head: a + l / 2,
      center: a,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length;
    let o = 0;
    for (; o < n; ++o)
      this.getParsed(o)[e.axis] !== null && !s[o].hidden && s[o].draw(this._ctx);
  }
}
function ld(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < at) {
    const a = i, l = a + t, c = Math.cos(a), d = Math.sin(a), u = Math.cos(l), h = Math.sin(l), f = (E, A, T) => ei(E, a, l, !0) ? 1 : Math.max(A, A * e, T, T * e), g = (E, A, T) => ei(E, a, l, !0) ? -1 : Math.min(A, A * e, T, T * e), p = f(0, c, u), m = f(lt, d, h), y = g(Y, c, u), v = g(Y + lt, d, h);
    s = (p - y) / 2, n = (m - v) / 2, o = -(p + y) / 2, r = -(m + v) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class en extends Re {
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
            const e = t.data, { labels: { pointStyle: s, textAlign: n, color: o, useBorderRadius: r, borderRadius: a } } = t.legend.options;
            return e.labels.length && e.datasets.length ? e.labels.map((l, c) => {
              const u = t.getDatasetMeta(0).controller.getStyle(c);
              return {
                text: l,
                fillStyle: u.backgroundColor,
                fontColor: o,
                hidden: !t.getDataVisibility(c),
                lineDash: u.borderDash,
                lineDashOffset: u.borderDashOffset,
                lineJoin: u.borderJoinStyle,
                lineWidth: u.borderWidth,
                strokeStyle: u.borderColor,
                textAlign: n,
                pointStyle: s,
                borderRadius: r && (a || u.borderRadius),
                index: c
              };
            }) : [];
          }
        },
        onClick(t, e, s) {
          s.chart.toggleDataVisibility(e.index), s.chart.update();
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
    const s = this.getDataset().data, n = this._cachedMeta;
    if (this._parsing === !1)
      n._parsed = s;
    else {
      let o = (l) => +s[l];
      if ($(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +Qt(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return ft(this.options.rotation - 90);
  }
  _getCircumference() {
    return ft(this.options.circumference);
  }
  _getRotationExtents() {
    let t = at, e = -at;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
        const n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), r = n._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + r);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(ml(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: u } = this._getRotationExtents(), { ratioX: h, ratioY: f, offsetX: g, offsetY: p } = ld(u, d, l), m = (s.width - r) / h, y = (s.height - r) / f, v = Math.max(Math.min(m, y) / 2, 0), E = dr(this.options.radius, v), A = Math.max(E * l, 0), T = (E - A) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * E, this.offsetY = p * E, n.total = this.calculateTotal(), this.outerRadius = E - T * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - T * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / at);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, d = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, h = o && c.animateScale, f = h ? 0 : this.innerRadius, g = h ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, n);
    let y = this._getRotation(), v;
    for (v = 0; v < e; ++v)
      y += this._circumference(v, o);
    for (v = e; v < e + s; ++v) {
      const E = this._circumference(v, o), A = t[v], T = {
        x: d + this.offsetX,
        y: u + this.offsetY,
        startAngle: y,
        endAngle: y + E,
        circumference: E,
        outerRadius: g,
        innerRadius: f
      };
      m && (T.options = p || this.resolveDataElementOptions(v, A.active ? "active" : n)), y += E, this.updateElement(A, v, T, n);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let s = 0, n;
    for (n = 0; n < e.length; n++) {
      const o = t._parsed[n];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? at * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = ji(e._parsed[t], s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const s = this.chart;
    let n, o, r, a, l;
    if (!t) {
      for (n = 0, o = s.data.datasets.length; n < o; ++n)
        if (s.isDatasetVisible(n)) {
          r = s.getDatasetMeta(n), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (n = 0, o = t.length; n < o; ++n)
      l = a.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let s = 0, n = t.length; s < n; ++s) {
      const o = this.resolveDataElementOptions(s);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(z(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class cd extends Re {
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
    const e = this._cachedMeta, { dataset: s, data: n = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = Ml(e, n, r);
    this._drawStart = a, this._drawCount = l, Pl(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n), h = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, m = de(g) ? g : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || n === "none", v = e + s, E = t.length;
    let A = e > 0 && this.getParsed(e - 1);
    for (let T = 0; T < E; ++T) {
      const O = t[T], V = y ? O : {};
      if (T < e || T >= v) {
        V.skip = !0;
        continue;
      }
      const P = this.getParsed(T), I = it(P[f]), S = V[h] = r.getPixelForValue(P[h], T), _ = V[f] = o || I ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, P, l) : P[f], T);
      V.skip = isNaN(S) || isNaN(_) || I, V.stop = T > 0 && Math.abs(P[h] - A[h]) > m, p && (V.parsed = P, V.raw = c.data[T]), u && (V.options = d || this.resolveDataElementOptions(T, O.active ? "active" : n)), y || this.updateElement(O, T, V, n), A = P;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
    if (!n.length)
      return s;
    const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
class dd extends Re {
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
              const { labels: { pointStyle: s, color: n } } = t.legend.options;
              return e.labels.map((o, r) => {
                const l = t.getDatasetMeta(0).controller.getStyle(r);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: n,
                  lineWidth: l.borderWidth,
                  pointStyle: s,
                  hidden: !t.getDataVisibility(r),
                  index: r
                };
              });
            }
            return [];
          }
        },
        onClick(t, e, s) {
          s.chart.toggleDataVisibility(e.index), s.chart.update();
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
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = ji(e._parsed[t].r, s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, s, n) {
    return Tr.bind(this)(t, e, s, n);
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
    return t.data.forEach((s, n) => {
      const o = this.getParsed(n).r;
      !isNaN(o) && this.chart.getDataVisibility(n) && (o < e.min && (e.min = o), o > e.max && (e.max = o));
    }), e;
  }
  _updateRadius() {
    const t = this.chart, e = t.chartArea, s = t.options, n = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(n / 2, 0), r = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0), a = (o - r) / t.getVisibleDatasetCount();
    this.outerRadius = o - a * this.index, this.innerRadius = this.outerRadius - a;
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, d = c.xCenter, u = c.yCenter, h = c.getIndexAngle(0) - 0.5 * Y;
    let f = h, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, n, p);
    for (g = e; g < e + s; g++) {
      const m = t[g];
      let y = f, v = f + this._computeAngle(g, n, p), E = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = v, o && (l.animateScale && (E = 0), l.animateRotate && (y = v = h));
      const A = {
        x: d,
        y: u,
        innerRadius: 0,
        outerRadius: E,
        startAngle: y,
        endAngle: v,
        options: this.resolveDataElementOptions(g, m.active ? "active" : n)
      };
      this.updateElement(m, g, A, n);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return t.data.forEach((s, n) => {
      !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
    }), e;
  }
  _computeAngle(t, e, s) {
    return this.chart.getDataVisibility(t) ? ft(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
}
class ud extends en {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class hd extends Re {
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
    const e = this._cachedMeta.vScale, s = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(s[e.axis])
    };
  }
  parseObjectData(t, e, s, n) {
    return Tr.bind(this)(t, e, s, n);
  }
  update(t) {
    const e = this._cachedMeta, s = e.dataset, n = e.data || [], o = e.iScale.getLabels();
    if (s.points = n, t !== "resize") {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const a = {
        _loop: !0,
        _fullLoop: o.length === n.length,
        options: r
      };
      this.updateElement(s, void 0, a, t);
    }
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, e, s, n) {
    const o = this._cachedMeta.rScale, r = n === "reset";
    for (let a = e; a < e + s; a++) {
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : n), d = o.getPointPositionForValue(a, this.getParsed(a).r), u = r ? o.xCenter : d.x, h = r ? o.yCenter : d.y, f = {
        x: u,
        y: h,
        angle: d.angle,
        skip: isNaN(u) || isNaN(h),
        options: c
      };
      this.updateElement(l, a, f, n);
    }
  }
}
function se() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class sn {
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
    Object.assign(sn.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return se();
  }
  parse() {
    return se();
  }
  format() {
    return se();
  }
  add() {
    return se();
  }
  diff() {
    return se();
  }
  startOf() {
    return se();
  }
  endOf() {
    return se();
  }
}
var fd = {
  _date: sn
};
function gd(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Ol : re;
    if (s) {
      if (n._sharedOptions) {
        const d = o[0], u = typeof d.getRange == "function" && d.getRange(t);
        if (u) {
          const h = c(o, t, e - u), f = c(o, t, e + u);
          return {
            lo: h.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const d = c(o, t, e);
      if (l) {
        const { vScale: u } = n._cachedMeta, { _parsed: h } = i, f = h.slice(0, d.lo + 1).reverse().findIndex((p) => !it(p[u.axis]));
        d.lo -= Math.max(0, f);
        const g = h.slice(d.hi).findIndex((p) => !it(p[u.axis]));
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
function Xi(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: d } = o[a], { lo: u, hi: h } = gd(o[a], t, r, n);
    for (let f = u; f <= h; ++f) {
      const g = d[f];
      g.skip || s(g, c, f);
    }
  }
}
function pd(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function us(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Xi(i, e, t, function(a, l, c) {
    !n && !Gt(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function md(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: d } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: u } = Pi(r, {
      x: t.x,
      y: t.y
    });
    ei(u, c, d) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Xi(i, e, t, o), n;
}
function bd(i, t, e, s, n, o) {
  let r = [];
  const a = pd(e);
  let l = Number.POSITIVE_INFINITY;
  function c(d, u, h) {
    const f = d.inRange(t.x, t.y, n);
    if (s && !f)
      return;
    const g = d.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(g)) && !f)
      return;
    const m = a(t, g);
    m < l ? (r = [
      {
        element: d,
        datasetIndex: u,
        index: h
      }
    ], l = m) : m === l && r.push({
      element: d,
      datasetIndex: u,
      index: h
    });
  }
  return Xi(i, e, t, c), r;
}
function hs(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? md(i, t, e, n) : bd(i, t, e, s, n, o);
}
function Xn(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Xi(i, e, t, (l, c, d) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: d
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var _d = {
  modes: {
    index(i, t, e, s) {
      const n = ne(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? us(i, n, o, s, r) : hs(i, n, o, !1, s, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const d = a[0].index, u = c.data[d];
        u && !u.skip && l.push({
          element: u,
          datasetIndex: c.index,
          index: d
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = ne(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? us(i, n, o, s, r) : hs(i, n, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
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
    point(i, t, e, s) {
      const n = ne(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return us(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = ne(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return hs(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = ne(t, i);
      return Xn(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = ne(t, i);
      return Xn(i, n, "y", e.intersect, s);
    }
  }
};
const kr = [
  "left",
  "top",
  "right",
  "bottom"
];
function Be(i, t) {
  return i.filter((e) => e.pos === t);
}
function Yn(i, t) {
  return i.filter((e) => kr.indexOf(e.pos) === -1 && e.box.axis === t);
}
function He(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function yd(i) {
  const t = [];
  let e, s, n, o, r, a;
  for (e = 0, s = (i || []).length; e < s; ++e)
    n = i[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = n, t.push({
      index: e,
      box: n,
      pos: o,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function xd(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !kr.includes(n))
      continue;
    const r = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function vd(i, t) {
  const e = xd(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], d = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = d ? d * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = d ? d * n : l && t.availableHeight);
  }
  return e;
}
function Sd(i) {
  const t = yd(i), e = He(t.filter((c) => c.box.fullSize), !0), s = He(Be(t, "left"), !0), n = He(Be(t, "right")), o = He(Be(t, "top"), !0), r = He(Be(t, "bottom")), a = Yn(t, "x"), l = Yn(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: Be(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function $n(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Mr(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Td(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!$(n)) {
    e.size && (i[n] -= e.size);
    const u = s[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? o.height : o.width), e.size = u.size / u.count, i[n] += e.size;
  }
  o.getPadding && Mr(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - $n(r, i, "left", "right")), l = Math.max(0, t.outerHeight - $n(r, i, "top", "bottom")), c = a !== i.w, d = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: d
  } : {
    same: d,
    other: c
  };
}
function Ed(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function wd(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return s(i ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Ue(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, d;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, wd(a.horizontal, t));
    const { same: u, other: h } = Td(t, e, a, s);
    c |= u && n.length, d = d || h, l.fullSize || n.push(a);
  }
  return c && Ue(n, t, e, s) || d;
}
function vi(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function Zn(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * d, h = c.size || l.height;
      It(c.start) && (r = c.start), l.fullSize ? vi(l, n.left, r, e.outerWidth - n.right - n.left, h) : vi(l, t.left + c.placed, r, u, h), c.start = r, c.placed += u, r = l.bottom;
    } else {
      const u = t.h * d, h = c.size || l.width;
      It(c.start) && (o = c.start), l.fullSize ? vi(l, o, n.top, h, e.outerHeight - n.bottom - n.top) : vi(l, o, t.top + c.placed, h, u), c.start = o, c.placed += u, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Dt = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, s) {
    if (!i)
      return;
    const n = pt(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = Sd(i.boxes), l = a.vertical, c = a.horizontal;
    ot(i.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const d = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1, u = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / d,
      hBoxMaxHeight: r / 2
    }), h = Object.assign({}, n);
    Mr(h, pt(s));
    const f = Object.assign({
      maxPadding: h,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), g = vd(l.concat(c), u);
    Ue(a.fullSize, f, u, g), Ue(l, f, u, g), Ue(c, f, u, g) && Ue(l, f, u, g), Ed(f), Zn(a.leftAndTop, f, u, g), f.x += f.w, f.y += f.h, Zn(a.rightAndBottom, f, u, g), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, ot(a.chartArea, (p) => {
      const m = p.box;
      Object.assign(m, i.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Pr {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {
  }
  removeEventListener(t, e, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return e = Math.max(0, e || t.width), s = s || t.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Cd extends Pr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ai = "$chartjs", Ad = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Kn = (i) => i === null || i === "";
function Id(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Ai] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Kn(n)) {
    const o = kn(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Kn(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = kn(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Nr = wc ? {
  passive: !0
} : !1;
function Od(i, t, e) {
  i && i.addEventListener(t, e, Nr);
}
function Rd(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Nr);
}
function Dd(i, t) {
  const e = Ad[i.type] || i.type, { x: s, y: n } = ne(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function Bi(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function Ld(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Bi(a.addedNodes, s), r = r && !Bi(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function kd(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Bi(a.removedNodes, s), r = r && !Bi(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const ii = /* @__PURE__ */ new Map();
let qn = 0;
function Vr() {
  const i = window.devicePixelRatio;
  i !== qn && (qn = i, ii.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Md(i, t) {
  ii.size || window.addEventListener("resize", Vr), ii.set(i, t);
}
function Pd(i) {
  ii.delete(i), ii.size || window.removeEventListener("resize", Vr);
}
function Nd(i, t, e) {
  const s = i.canvas, n = s && Qs(s);
  if (!n)
    return;
  const o = mr((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || o(c, d);
  });
  return r.observe(n), Md(i, o), r;
}
function fs(i, t, e) {
  e && e.disconnect(), t === "resize" && Pd(i);
}
function Vd(i, t, e) {
  const s = i.canvas, n = mr((o) => {
    i.ctx !== null && e(Dd(o, i));
  }, i);
  return Od(s, t, n), n;
}
class Bd extends Pr {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Id(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Ai])
      return !1;
    const s = e[Ai].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      it(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[Ai], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: Ld,
      detach: kd,
      resize: Nd
    }[e] || Vd;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: fs,
      detach: fs,
      resize: fs
    }[e] || Rd)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Ec(t, e, s, n);
  }
  isAttached(t) {
    const e = t && Qs(t);
    return !!(e && e.isConnected);
  }
}
function Hd(i) {
  return !Js() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Cd : Bd;
}
class St {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  hasValue() {
    return de(this.x) && de(this.y);
  }
  getProps(t, e) {
    const s = this.$animations;
    if (!e || !s)
      return this;
    const n = {};
    return t.forEach((o) => {
      n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), n;
  }
}
function Fd(i, t) {
  const e = i.options.ticks, s = Wd(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? Gd(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return jd(t, c, o, r / n), c;
  const d = zd(o, t, n);
  if (r > 0) {
    let u, h;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Si(t, c, d, it(f) ? 0 : a - f, a), u = 0, h = r - 1; u < h; u++)
      Si(t, c, d, o[u], o[u + 1]);
    return Si(t, c, d, l, it(f) ? t.length : l + f), c;
  }
  return Si(t, c, d), c;
}
function Wd(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function zd(i, t, e) {
  const s = Ud(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = Tl(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function Gd(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function jd(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function Si(i, t, e, s, n) {
  const o = z(s, 0), r = Math.min(z(n, i.length), i.length);
  let a = 0, l, c, d;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), d = o; d < 0; )
    a++, d = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === d && (t.push(i[c]), a++, d = Math.round(o + a * e));
}
function Ud(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const Xd = (i) => i === "left" ? "right" : i === "right" ? "left" : i, Jn = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, Qn = (i, t) => Math.min(t || i, i);
function to(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function Yd(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function $d(i, t) {
  ot(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function Fe(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function eo(i, t) {
  if (!i.display)
    return 0;
  const e = ht(i.font, t), s = pt(i.padding);
  return (st(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function Zd(i, t) {
  return ee(i, {
    scale: t,
    type: "scale"
  });
}
function Kd(i, t, e) {
  return ee(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function qd(i, t, e) {
  let s = Us(i);
  return (e && t !== "right" || !e && t === "right") && (s = Xd(s)), s;
}
function Jd(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: d } = l;
  let u = 0, h, f, g;
  const p = r - n, m = a - o;
  if (i.isHorizontal()) {
    if (f = yt(s, o, a), $(e)) {
      const y = Object.keys(e)[0], v = e[y];
      g = d[y].getPixelForValue(v) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = Jn(i, e, t);
    h = a - o;
  } else {
    if ($(e)) {
      const y = Object.keys(e)[0], v = e[y];
      f = d[y].getPixelForValue(v) - m + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Jn(i, e, t);
    g = yt(s, r, n), u = e === "left" ? -lt : lt;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: h,
    rotation: u
  };
}
class De extends St {
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
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
    return t = kt(t, Number.POSITIVE_INFINITY), e = kt(e, Number.NEGATIVE_INFINITY), s = kt(s, Number.POSITIVE_INFINITY), n = kt(n, Number.NEGATIVE_INFINITY), {
      min: kt(t, s),
      max: kt(e, n),
      minDefined: gt(t),
      maxDefined: gt(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), r;
    if (n && o)
      return {
        min: e,
        max: s
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (s = Math.max(s, r.max));
    return e = o && e > s ? s : e, s = n && e > s ? e : s, {
      min: kt(e, kt(s, e)),
      max: kt(s, kt(e, s))
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
    nt(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, s) {
    const { beginAtZero: n, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = ic(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? to(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Fd(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    nt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    nt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    nt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), nt(this.options[t], [
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
    nt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = nt(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    nt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    nt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = Qn(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const d = this._getLabelSizes(), u = d.widest.width, h = d.highest.height, f = vt(this.chart.width - u, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), u + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Fe(t.grid) - e.padding - eo(t.title, this.chart.options.font), c = Math.sqrt(u * u + h * h), r = Gi(Math.min(Math.asin(vt((d.highest.height + 6) / a, -1, 1)), Math.asin(vt(l / c, -1, 1)) - Math.asin(vt(h / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    nt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    nt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = eo(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Fe(o) + l) : (t.height = this.maxHeight, t.width = Fe(o) + l), s.display && this.ticks.length) {
        const { first: c, last: d, widest: u, highest: h } = this._getLabelSizes(), f = s.padding * 2, g = ft(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
        if (a) {
          const y = s.mirror ? 0 : m * u.width + p * h.height;
          t.height = Math.min(this.maxHeight, t.height + y + f);
        } else {
          const y = s.mirror ? 0 : p * u.width + m * h.height;
          t.width = Math.min(this.maxWidth, t.width + y + f);
        }
        this._calculatePadding(c, d, m, p);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let h = 0, f = 0;
      l ? c ? (h = n * t.width, f = s * e.height) : (h = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? h = t.width : o !== "inner" && (h = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((h - d + r) * this.width / (this.width - d), 0), this.paddingRight = Math.max((f - u + r) * this.width / (this.width - u), 0);
    } else {
      let d = e.height / 2, u = t.height / 2;
      o === "start" ? (d = 0, u = t.height) : o === "end" && (d = e.height, u = 0), this.paddingTop = d + r, this.paddingBottom = u + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    nt(this.options.afterFit, [
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
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      it(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = to(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / Qn(e, s));
    let c = 0, d = 0, u, h, f, g, p, m, y, v, E, A, T;
    for (u = 0; u < e; u += l) {
      if (g = t[u].label, p = this._resolveTickFontOptions(u), n.font = m = p.string, y = o[m] = o[m] || {
        data: {},
        gc: []
      }, v = p.lineHeight, E = A = 0, !it(g) && !st(g))
        E = Ni(n, y.data, y.gc, E, g), A = v;
      else if (st(g))
        for (h = 0, f = g.length; h < f; ++h)
          T = g[h], !it(T) && !st(T) && (E = Ni(n, y.data, y.gc, E, T), A += v);
      r.push(E), a.push(A), c = Math.max(E, c), d = Math.max(A, d);
    }
    $d(o, e);
    const O = r.indexOf(c), V = a.indexOf(d), P = (I) => ({
      width: r[I] || 0,
      height: a[I] || 0
    });
    return {
      first: P(0),
      last: P(e - 1),
      widest: P(O),
      highest: P(V),
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
    return Il(this._alignToPixels ? ie(this.chart, e, 0) : e);
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
      const s = e[t];
      return s.$context || (s.$context = Kd(this.getContext(), t, s));
    }
    return this.$context || (this.$context = Zd(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = ft(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), h = Fe(o), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, y = function(G) {
      return ie(s, G, p);
    };
    let v, E, A, T, O, V, P, I, S, _, L, k;
    if (r === "top")
      v = y(this.bottom), V = this.bottom - h, I = v - m, _ = y(t.top) + m, k = t.bottom;
    else if (r === "bottom")
      v = y(this.top), _ = t.top, k = y(t.bottom) - m, V = v + m, I = this.top + h;
    else if (r === "left")
      v = y(this.right), O = this.right - h, P = v - m, S = y(t.left) + m, L = t.right;
    else if (r === "right")
      v = y(this.left), S = t.left, L = y(t.right) - m, O = v + m, P = this.left + h;
    else if (e === "x") {
      if (r === "center")
        v = y((t.top + t.bottom) / 2 + 0.5);
      else if ($(r)) {
        const G = Object.keys(r)[0], K = r[G];
        v = y(this.chart.scales[G].getPixelForValue(K));
      }
      _ = t.top, k = t.bottom, V = v + m, I = V + h;
    } else if (e === "y") {
      if (r === "center")
        v = y((t.left + t.right) / 2);
      else if ($(r)) {
        const G = Object.keys(r)[0], K = r[G];
        v = y(this.chart.scales[G].getPixelForValue(K));
      }
      O = v - m, P = O - h, S = t.left, L = t.right;
    }
    const Z = z(n.ticks.maxTicksLimit, u), B = Math.max(1, Math.ceil(u / Z));
    for (E = 0; E < u; E += B) {
      const G = this.getContext(E), K = o.setContext(G), b = a.setContext(G), M = K.lineWidth, w = K.color, j = b.dash || [], _t = b.dashOffset, Tt = K.tickWidth, mt = K.tickColor, N = K.tickBorderDash || [], Q = K.tickBorderDashOffset;
      A = Yd(this, E, l), A !== void 0 && (T = ie(s, A, M), c ? O = P = S = L = T : V = I = _ = k = T, f.push({
        tx1: O,
        ty1: V,
        tx2: P,
        ty2: I,
        x1: S,
        y1: _,
        x2: L,
        y2: k,
        width: M,
        color: w,
        borderDash: j,
        borderDashOffset: _t,
        tickWidth: Tt,
        tickColor: mt,
        tickBorderDash: N,
        tickBorderDashOffset: Q
      }));
    }
    return this._ticksLength = u, this._borderValue = v, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: d, mirror: u } = o, h = Fe(s.grid), f = h + d, g = u ? -d : f, p = -ft(this.labelRotation), m = [];
    let y, v, E, A, T, O, V, P, I, S, _, L, k = "middle";
    if (n === "top")
      O = this.bottom - g, V = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      O = this.top + g, V = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const B = this._getYAxisLabelAlignment(h);
      V = B.textAlign, T = B.x;
    } else if (n === "right") {
      const B = this._getYAxisLabelAlignment(h);
      V = B.textAlign, T = B.x;
    } else if (e === "x") {
      if (n === "center")
        O = (t.top + t.bottom) / 2 + f;
      else if ($(n)) {
        const B = Object.keys(n)[0], G = n[B];
        O = this.chart.scales[B].getPixelForValue(G) + f;
      }
      V = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        T = (t.left + t.right) / 2 - f;
      else if ($(n)) {
        const B = Object.keys(n)[0], G = n[B];
        T = this.chart.scales[B].getPixelForValue(G);
      }
      V = this._getYAxisLabelAlignment(h).textAlign;
    }
    e === "y" && (l === "start" ? k = "top" : l === "end" && (k = "bottom"));
    const Z = this._getLabelSizes();
    for (y = 0, v = a.length; y < v; ++y) {
      E = a[y], A = E.label;
      const B = o.setContext(this.getContext(y));
      P = this.getPixelForTick(y) + o.labelOffset, I = this._resolveTickFontOptions(y), S = I.lineHeight, _ = st(A) ? A.length : 1;
      const G = _ / 2, K = B.color, b = B.textStrokeColor, M = B.textStrokeWidth;
      let w = V;
      r ? (T = P, V === "inner" && (y === v - 1 ? w = this.options.reverse ? "left" : "right" : y === 0 ? w = this.options.reverse ? "right" : "left" : w = "center"), n === "top" ? c === "near" || p !== 0 ? L = -_ * S + S / 2 : c === "center" ? L = -Z.highest.height / 2 - G * S + S : L = -Z.highest.height + S / 2 : c === "near" || p !== 0 ? L = S / 2 : c === "center" ? L = Z.highest.height / 2 - G * S : L = Z.highest.height - _ * S, u && (L *= -1), p !== 0 && !B.showLabelBackdrop && (T += S / 2 * Math.sin(p))) : (O = P, L = (1 - _) * S / 2);
      let j;
      if (B.showLabelBackdrop) {
        const _t = pt(B.backdropPadding), Tt = Z.heights[y], mt = Z.widths[y];
        let N = L - _t.top, Q = 0 - _t.left;
        switch (k) {
          case "middle":
            N -= Tt / 2;
            break;
          case "bottom":
            N -= Tt;
            break;
        }
        switch (V) {
          case "center":
            Q -= mt / 2;
            break;
          case "right":
            Q -= mt;
            break;
          case "inner":
            y === v - 1 ? Q -= mt : y > 0 && (Q -= mt / 2);
            break;
        }
        j = {
          left: Q,
          top: N,
          width: mt + _t.width,
          height: Tt + _t.height,
          color: B.backdropColor
        };
      }
      m.push({
        label: A,
        font: I,
        textOffset: L,
        options: {
          rotation: p,
          color: K,
          strokeColor: b,
          strokeWidth: M,
          textAlign: w,
          textBaseline: k,
          translation: [
            T,
            O
          ],
          backdrop: j
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-ft(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, d;
    return e === "left" ? n ? (d = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", d += l / 2) : (c = "right", d += l)) : (d = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", d -= l / 2) : (c = "left", d = this.left)) : e === "right" ? n ? (d = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", d -= l / 2) : (c = "left", d -= l)) : (d = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", d += l / 2) : (c = "right", d = this.right)) : c = "right", {
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
    const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, d) => {
      !d.width || !d.color || (s.save(), s.lineWidth = d.width, s.strokeStyle = d.color, s.setLineDash(d.borderDash || []), s.lineDashOffset = d.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display)
      for (o = 0, r = n.length; o < r; ++o) {
        const l = n[o];
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
    const { chart: t, ctx: e, options: { border: s, grid: n } } = this, o = s.setContext(this.getContext()), r = s.display ? o.width : 0;
    if (!r)
      return;
    const a = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, d, u, h;
    this.isHorizontal() ? (c = ie(t, this.left, r) - r / 2, d = ie(t, this.right, a) + a / 2, u = h = l) : (u = ie(t, this.top, r) - r / 2, h = ie(t, this.bottom, a) + a / 2, c = d = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(d, h), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && oi(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, d = r.textOffset;
      he(s, c, 0, d, l, a);
    }
    n && ri(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = ht(s.font), r = pt(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || $(e) ? (l += r.bottom, st(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: d, maxWidth: u, rotation: h } = Jd(this, l, e, a);
    he(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: u,
      rotation: h,
      textAlign: qd(a, e, n),
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
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = z(t.grid && t.grid.z, -1), n = z(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== De.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: s,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: n,
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
    const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[s] === this.id && (!t || a.type === t) && n.push(a);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return ht(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ti {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    eu(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, Qd(t, r, s), this.override && ut.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in ut[n] && (delete ut[n][s], this.override && delete ue[s]);
  }
}
function Qd(i, t, e) {
  const s = ti(/* @__PURE__ */ Object.create(null), [
    e ? ut.get(e) : {},
    ut.get(t),
    i.defaults
  ]);
  ut.set(t, s), i.defaultRoutes && tu(t, i.defaultRoutes), i.descriptors && ut.describe(t, i.descriptors);
}
function tu(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    ut.route(o, n, l, a);
  });
}
function eu(i) {
  return "id" in i && "defaults" in i;
}
class iu {
  constructor() {
    this.controllers = new Ti(Re, "datasets", !0), this.elements = new Ti(St, "elements"), this.plugins = new Ti(Object, "plugins"), this.scales = new Ti(De, "scales"), this._typedRegistries = [
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
  _each(t, e, s) {
    [
      ...e
    ].forEach((n) => {
      const o = s || this._getRegistryForType(n);
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : ot(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = zs(t);
    nt(s["before" + n], [], s), e[t](s), nt(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const n = e.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
}
var Pt = /* @__PURE__ */ new iu();
class su {
  constructor() {
    this._init = void 0;
  }
  notify(t, e, s, n) {
    if (e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")), this._init === void 0)
      return;
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), r = this._notify(o, t, e, s);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall"), this._init = void 0), r;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const o of t) {
      const r = o.plugin, a = r[s], l = [
        e,
        n,
        o.options
      ];
      if (nt(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    it(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = z(s.options && s.options.plugins, {}), o = nu(s);
    return n === !1 && !e ? [] : ru(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function nu(i) {
  const t = {}, e = [], s = Object.keys(Pt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(Pt.getPlugin(s[o]));
  const n = i.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function ou(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function ru(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = ou(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: au(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function au(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Cs(i, t) {
  const e = ut.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function lu(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function cu(i, t) {
  return i === t ? "_index_" : "_value_";
}
function io(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function du(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function As(i, ...t) {
  if (io(i))
    return i;
  for (const e of t) {
    const s = e.axis || du(e.position) || i.length > 1 && io(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function so(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function uu(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return so(i, "x", e[0]) || so(i, "y", e[0]);
  }
  return {};
}
function hu(i, t) {
  const e = ue[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = Cs(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!$(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = As(r, a, uu(r, i), ut.scales[a.type]), c = cu(l, n), d = e.scales || {};
    o[r] = $e(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      d[l],
      d[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || Cs(a, t), d = (ue[a] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      const h = lu(u, l), f = r[h + "AxisID"] || h;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), $e(o[f], [
        {
          axis: h
        },
        s[f],
        d[u]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    $e(a, [
      ut.scales[a.type],
      ut.scale
    ]);
  }), o;
}
function Br(i) {
  const t = i.options || (i.options = {});
  t.plugins = z(t.plugins, {}), t.scales = hu(i, t);
}
function Hr(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function fu(i) {
  return i = i || {}, i.data = Hr(i.data), Br(i), i;
}
const no = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Set();
function Ei(i, t) {
  let e = no.get(i);
  return e || (e = t(), no.set(i, e), Fr.add(e)), e;
}
const We = (i, t, e) => {
  const s = Qt(t, e);
  s !== void 0 && i.add(s);
};
class gu {
  constructor(t) {
    this._config = fu(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Hr(t);
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
    this.clearCache(), Br(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Ei(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Ei(`${t}.transition.${e}`, () => [
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
    return Ei(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, s = this.type;
    return Ei(`${s}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let n = s.get(t);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    const { options: n, type: o } = this, r = this._cachedScopes(t, s), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((d) => {
      t && (l.add(t), d.forEach((u) => We(l, t, u))), d.forEach((u) => We(l, n, u)), d.forEach((u) => We(l, ue[o] || {}, u)), d.forEach((u) => We(l, ut, u)), d.forEach((u) => We(l, Es, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Fr.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      ue[e] || {},
      ut.datasets[e] || {},
      {
        type: e
      },
      ut,
      Es
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = oo(this._resolverCache, t, n);
    let l = r;
    if (mu(r, e)) {
      o.$shared = !1, s = At(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Ae(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = oo(this._resolverCache, t, s);
    return $(e) ? Ae(o, e, void 0, n) : o;
  }
}
function oo(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: Zs(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const pu = (i) => $(i) && Object.getOwnPropertyNames(i).some((t) => At(i[t]));
function mu(i, t) {
  const { isScriptable: e, isIndexable: s } = yr(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (At(a) || pu(a)) || r && st(a))
      return !0;
  }
  return !1;
}
var bu = "4.5.1";
const _u = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function ro(i, t) {
  return i === "top" || i === "bottom" || _u.indexOf(i) === -1 && t === "x";
}
function ao(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function lo(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), nt(e && e.onComplete, [
    i
  ], t);
}
function yu(i) {
  const t = i.chart, e = t.options.animation;
  nt(e && e.onProgress, [
    i
  ], t);
}
function Wr(i) {
  return Js() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Ii = {}, co = (i) => {
  const t = Wr(i);
  return Object.values(Ii).filter((e) => e.canvas === t).pop();
};
function xu(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function vu(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let ce = class {
  static defaults = ut;
  static instances = Ii;
  static overrides = ue;
  static registry = Pt;
  static version = bu;
  static getChart = co;
  static register(...t) {
    Pt.add(...t), uo();
  }
  static unregister(...t) {
    Pt.remove(...t), uo();
  }
  constructor(t, e) {
    const s = this.config = new gu(e), n = Wr(t), o = co(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || Hd(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, d = l && l.width;
    if (this.id = pl(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new su(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Ll((u) => this.update(u), r.resizeDelay || 0), this._dataChanges = [], Ii[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Bt.listen(this, "complete", lo), Bt.listen(this, "progress", yu), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return it(t) ? e && o ? o : n ? s / n : null : t;
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
    return Pt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ln(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return On(this.canvas, this.ctx), this;
  }
  stop() {
    return Bt.stop(this), this;
  }
  resize(t, e) {
    Bt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Ln(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), nt(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    ot(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = As(r, a), c = l === "r", d = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : d ? "bottom" : "left",
        dtype: c ? "radialLinear" : d ? "category" : "linear"
      };
    }))), ot(o, (r) => {
      const a = r.options, l = a.id, c = As(l, a), d = z(a.type, r.dtype);
      (a.position === void 0 || ro(a.position, c) !== ro(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let u = null;
      if (l in s && s[l].type === d)
        u = s[l];
      else {
        const h = Pt.getScale(d);
        u = new h({
          id: l,
          type: d,
          ctx: this.ctx,
          chart: this
        }), s[u.id] = u;
      }
      u.init(a, t);
    }), ot(n, (r, a) => {
      r || delete s[a];
    }), ot(s, (r) => {
      Dt.configure(this, r, r.options), Dt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(ao("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((s, n) => {
      e.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      const o = e[s];
      let r = this.getDatasetMeta(s);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Cs(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = Pt.getController(a), { datasetElementType: c, dataElementType: d } = ut.datasets[a];
        Object.assign(l, {
          dataElementType: Pt.getElement(d),
          datasetElementType: c && Pt.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    ot(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, d = this.data.datasets.length; c < d; c++) {
      const { controller: u } = this.getDatasetMeta(c), h = !n && o.indexOf(u) === -1;
      u.buildOrUpdateElements(h), r = Math.max(+u.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || ot(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(ao("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    ot(this.scales, (t) => {
      Dt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!vn(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      xu(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!vn(n, s(o)))
        return;
    return Array.from(n).map((o) => o.split(",")).map((o) => ({
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
    Dt.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], ot(this.boxes, (n) => {
      s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, o) => {
      n._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, At(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t), n = {
      meta: s,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Bt.has(this) ? this.attached && !Bt.running(this) && Bt.start(this) : (this.draw(), lo({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: n } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(s, n);
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
    const e = this._sortedMetasets, s = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const r = e[n];
      (!t || r.visible) && s.push(r);
    }
    return s;
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
    const e = this.ctx, s = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, n = Rr(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && oi(e, n), t.controller.draw(), n && ri(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return Gt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = _d.modes[e];
    return typeof o == "function" ? o(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], s = this._metasets;
    let n = s.filter((o) => o && o._dataset === e).pop();
    return n || (n = {
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
    }, s.push(n)), n;
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
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const n = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, n);
    It(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
      visible: s
    }), this.update((a) => a.datasetIndex === t ? n : void 0));
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
    for (this.stop(), Bt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), On(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Ii[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, s = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, n = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    ot(this.options.events, (o) => s(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, s = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, n = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      n("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
    };
    r = () => {
      this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    ot(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, ot(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], s = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !Di(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((d) => !c.some((u) => d.datasetIndex === u.datasetIndex && d.index === u.index)), r = o(e, t), a = s ? t : o(t, e);
    r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, n = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1)
      return;
    const o = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = vl(t), c = vu(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, nt(o.onHover, [
      t,
      a,
      this
    ], this), l && nt(o.onClick, [
      t,
      a,
      this
    ], this));
    const d = !Di(a, n);
    return (d || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, d;
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
};
function uo() {
  return ot(ce.instances, (i) => i._plugins.invalidate());
}
function Su(i, t, e) {
  const { startAngle: s, x: n, y: o, outerRadius: r, innerRadius: a, options: l } = t, { borderWidth: c, borderJoinStyle: d } = l, u = Math.min(c / r, xt(s - e));
  if (i.beginPath(), i.arc(n, o, r - c / 2, s + u / 2, e - u / 2), a > 0) {
    const h = Math.min(c / a, xt(s - e));
    i.arc(n, o, a + c / 2, e - h / 2, s + h / 2, !0);
  } else {
    const h = Math.min(c / 2, r * xt(s - e));
    if (d === "round")
      i.arc(n, o, h, e - Y / 2, s + Y / 2, !0);
    else if (d === "bevel") {
      const f = 2 * h * h, g = -f * Math.cos(e + Y / 2) + n, p = -f * Math.sin(e + Y / 2) + o, m = f * Math.cos(s + Y / 2) + n, y = f * Math.sin(s + Y / 2) + o;
      i.lineTo(g, p), i.lineTo(m, y);
    }
  }
  i.closePath(), i.moveTo(0, 0), i.rect(0, 0, i.canvas.width, i.canvas.height), i.clip("evenodd");
}
function Tu(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + lt, s - lt), i.closePath(), i.clip();
}
function Eu(i) {
  return $s(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function wu(i, t, e, s) {
  const n = Eu(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return vt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: vt(n.innerStart, 0, r),
    innerEnd: vt(n.innerEnd, 0, r)
  };
}
function ve(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function Hi(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: d } = t, u = Math.max(t.outerRadius + s + e - c, 0), h = d > 0 ? d + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const B = d > 0 ? d - s : 0, G = u > 0 ? u - s : 0, K = (B + G) / 2, b = K !== 0 ? g * K / (K + s) : g;
    f = (g - b) / 2;
  }
  const p = Math.max(1e-3, g * u - e / Y) / u, m = (g - p) / 2, y = l + m + f, v = n - m - f, { outerStart: E, outerEnd: A, innerStart: T, innerEnd: O } = wu(t, h, u, v - y), V = u - E, P = u - A, I = y + E / V, S = v - A / P, _ = h + T, L = h + O, k = y + T / _, Z = v - O / L;
  if (i.beginPath(), o) {
    const B = (I + S) / 2;
    if (i.arc(r, a, u, I, B), i.arc(r, a, u, B, S), A > 0) {
      const M = ve(P, S, r, a);
      i.arc(M.x, M.y, A, S, v + lt);
    }
    const G = ve(L, v, r, a);
    if (i.lineTo(G.x, G.y), O > 0) {
      const M = ve(L, Z, r, a);
      i.arc(M.x, M.y, O, v + lt, Z + Math.PI);
    }
    const K = (v - O / h + (y + T / h)) / 2;
    if (i.arc(r, a, h, v - O / h, K, !0), i.arc(r, a, h, K, y + T / h, !0), T > 0) {
      const M = ve(_, k, r, a);
      i.arc(M.x, M.y, T, k + Math.PI, y - lt);
    }
    const b = ve(V, y, r, a);
    if (i.lineTo(b.x, b.y), E > 0) {
      const M = ve(V, I, r, a);
      i.arc(M.x, M.y, E, y - lt, I);
    }
  } else {
    i.moveTo(r, a);
    const B = Math.cos(I) * u + r, G = Math.sin(I) * u + a;
    i.lineTo(B, G);
    const K = Math.cos(S) * u + r, b = Math.sin(S) * u + a;
    i.lineTo(K, b);
  }
  i.closePath();
}
function Cu(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Hi(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % at || at));
  }
  return Hi(i, t, e, s, l, n), i.fill(), l;
}
function Au(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: d, borderDash: u, borderDashOffset: h, borderRadius: f } = l, g = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(u || []), i.lineDashOffset = h, g ? (i.lineWidth = c * 2, i.lineJoin = d || "round") : (i.lineWidth = c, i.lineJoin = d || "bevel");
  let p = t.endAngle;
  if (o) {
    Hi(i, t, e, s, p, n);
    for (let m = 0; m < o; ++m)
      i.stroke();
    isNaN(a) || (p = r + (a % at || at));
  }
  g && Tu(i, t, p), l.selfJoin && p - r >= Y && f === 0 && d !== "miter" && Su(i, t, p), o || (Hi(i, t, e, s, p, n), i.stroke());
}
class Iu extends St {
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
  inRange(t, e, s) {
    const n = this.getProps([
      "x",
      "y"
    ], s), { angle: o, distance: r } = Pi(n, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: d, circumference: u } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), h = (this.options.spacing + this.options.borderWidth) / 2, f = z(u, l - a), g = ei(o, a, l) && a !== l, p = f >= at || g, m = zt(r, c + h, d + h);
    return p && m;
  }
  getCenterPoint(t) {
    const { x: e, y: s, startAngle: n, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], t), { offset: l, spacing: c } = this.options, d = (n + o) / 2, u = (r + a + c + l) / 2;
    return {
      x: e + Math.cos(d) * u,
      y: s + Math.sin(d) * u
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: s } = this, n = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, r = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > at ? Math.floor(s / at) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * n, Math.sin(a) * n);
    const l = 1 - Math.sin(Math.min(Y, s || 0)), c = n * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Cu(t, this, c, o, r), Au(t, this, c, o, r), t.restore();
  }
}
function zr(i, t, e = t) {
  i.lineCap = z(e.borderCapStyle, t.borderCapStyle), i.setLineDash(z(e.borderDash, t.borderDash)), i.lineDashOffset = z(e.borderDashOffset, t.borderDashOffset), i.lineJoin = z(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = z(e.borderWidth, t.borderWidth), i.strokeStyle = z(e.borderColor, t.borderColor);
}
function Ou(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Ru(i) {
  return i.stepped ? Yl : i.tension || i.cubicInterpolationMode === "monotone" ? $l : Ou;
}
function Gr(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), d = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !d ? s + c - l : c - l
  };
}
function Du(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Gr(n, e, s), d = Ru(o);
  let { move: u = !0, reverse: h } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(a + (h ? c - f : f)) % r], !g.skip && (u ? (i.moveTo(g.x, g.y), u = !1) : d(i, p, g, h, o.stepped), p = g);
  return l && (g = n[(a + (h ? c : 0)) % r], d(i, p, g, h, o.stepped)), !!l;
}
function Lu(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = Gr(n, e, s), { move: l = !0, reverse: c } = s || {};
  let d = 0, u = 0, h, f, g, p, m, y;
  const v = (A) => (r + (c ? a - A : A)) % o, E = () => {
    p !== m && (i.lineTo(d, m), i.lineTo(d, p), i.lineTo(d, y));
  };
  for (l && (f = n[v(0)], i.moveTo(f.x, f.y)), h = 0; h <= a; ++h) {
    if (f = n[v(h)], f.skip)
      continue;
    const A = f.x, T = f.y, O = A | 0;
    O === g ? (T < p ? p = T : T > m && (m = T), d = (u * d + A) / ++u) : (E(), i.lineTo(A, T), g = O, u = 0, p = m = T), y = T;
  }
  E();
}
function Is(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Lu : Du;
}
function ku(i) {
  return i.stepped ? Cc : i.tension || i.cubicInterpolationMode === "monotone" ? Ac : oe;
}
function Mu(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), zr(i, t.options), i.stroke(n);
}
function Pu(i, t, e, s) {
  const { segments: n, options: o } = t, r = Is(t);
  for (const a of n)
    zr(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Nu = typeof Path2D == "function";
function Vu(i, t, e, s) {
  Nu && !t.options.segment ? Mu(i, t, e, s) : Pu(i, t, e, s);
}
class Yi extends St {
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
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const n = s.spanGaps ? this._loop : this._fullLoop;
      _c(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = kc(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    const s = this.options, n = t[e], o = this.points, r = Or(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = ku(s);
    let c, d;
    for (c = 0, d = r.length; c < d; ++c) {
      const { start: u, end: h } = r[c], f = o[u], g = o[h];
      if (f === g) {
        a.push(f);
        continue;
      }
      const p = Math.abs((n - f[e]) / (g[e] - f[e])), m = l(f, g, p, s.stepped);
      m[e] = t[e], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, s) {
    return Is(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = Is(this);
    let r = this._loop;
    e = e || 0, s = s || this.points.length - e;
    for (const a of n)
      r &= o(t, this, a, {
        start: e,
        end: e + s - 1
      });
    return !!r;
  }
  draw(t, e, s, n) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Vu(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function ho(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class Bu extends St {
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
  inRange(t, e, s) {
    const n = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], s);
    return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(n.hitRadius + n.radius, 2);
  }
  inXRange(t, e) {
    return ho(this, t, "x", e);
  }
  inYRange(t, e) {
    return ho(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const s = e && t.borderWidth || 0;
    return (e + s) * 2;
  }
  draw(t, e) {
    const s = this.options;
    this.skip || s.radius < 0.1 || !Gt(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, ws(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function jr(i, t) {
  const { x: e, y: s, base: n, width: o, height: r } = i.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, d, u;
  return i.horizontal ? (u = r / 2, a = Math.min(e, n), l = Math.max(e, n), c = s - u, d = s + u) : (u = o / 2, a = e - u, l = e + u, c = Math.min(s, n), d = Math.max(s, n)), {
    left: a,
    top: c,
    right: l,
    bottom: d
  };
}
function Zt(i, t, e, s) {
  return i ? 0 : vt(t, e, s);
}
function Hu(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = _r(s);
  return {
    t: Zt(n.top, o.top, 0, e),
    r: Zt(n.right, o.right, 0, t),
    b: Zt(n.bottom, o.bottom, 0, e),
    l: Zt(n.left, o.left, 0, t)
  };
}
function Fu(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = qt(n), r = Math.min(t, e), a = i.borderSkipped, l = s || $(n);
  return {
    topLeft: Zt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Zt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Zt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Zt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Wu(i) {
  const t = jr(i), e = t.right - t.left, s = t.bottom - t.top, n = Hu(i, e / 2, s / 2), o = Fu(i, e / 2, s / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: s,
      radius: o
    },
    inner: {
      x: t.left + n.l,
      y: t.top + n.t,
      w: e - n.l - n.r,
      h: s - n.t - n.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
      }
    }
  };
}
function gs(i, t, e, s) {
  const n = t === null, o = e === null, a = i && !(n && o) && jr(i, s);
  return a && (n || zt(t, a.left, a.right)) && (o || zt(e, a.top, a.bottom));
}
function zu(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Gu(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function ps(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + o,
    h: i.h + r,
    radius: i.radius
  };
}
class ju extends St {
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
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = Wu(this), a = zu(r.radius) ? Ce : Gu;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, ps(r, e, o)), t.clip(), a(t, ps(o, -e, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, ps(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return gs(this, t, e, s);
  }
  inXRange(t, e) {
    return gs(this, t, null, e);
  }
  inYRange(t, e) {
    return gs(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: s, base: n, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (e + n) / 2 : e,
      y: o ? s : (s + n) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
function Uu(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = $i(l, c, n);
    const d = Os(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: d,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const u = Or(t, d);
    for (const h of u) {
      const f = Os(e, o[h.start], o[h.end], h.loop), g = Ir(a, n, f);
      for (const p of g)
        r.push({
          source: p,
          target: h,
          start: {
            [e]: fo(d, f, "start", Math.max)
          },
          end: {
            [e]: fo(d, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Os(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = xt(n), o = xt(o)), {
    property: i,
    start: n,
    end: o
  };
}
function Xu(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = $i(r, a, n);
    const l = n[r], c = n[a];
    s !== null ? (o.push({
      x: l.x,
      y: s
    }), o.push({
      x: c.x,
      y: s
    })) : e !== null && (o.push({
      x: e,
      y: l.y
    }), o.push({
      x: e,
      y: c.y
    }));
  }), o;
}
function $i(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function fo(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Ur(i, t) {
  let e = [], s = !1;
  return st(i) ? (s = !0, e = i) : e = Xu(i, t), e.length ? new Yi({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function go(i) {
  return i && i.fill !== !1;
}
function Yu(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!gt(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function $u(i, t, e) {
  const s = Ju(i);
  if ($(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return gt(n) && Math.floor(n) === n ? Zu(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function Zu(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function Ku(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : $(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function qu(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : $(i) ? s = i.value : s = t.getBaseValue(), s;
}
function Ju(i) {
  const t = i.options, e = t.fill;
  let s = z(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function Qu(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = th(t, e);
  a.push(Ur({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let d = c.start; d <= c.end; d++)
      eh(n, r[d], a);
  }
  return new Yi({
    points: n,
    options: {}
  });
}
function th(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function eh(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = ih(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function ih(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const d = o[c], u = r[d.start][e], h = r[d.end][e];
    if (zt(n, u, h)) {
      a = n === u, l = n === h;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: s
  };
}
class Xr {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: at
    }, t.arc(n, o, r, e.end, e.start, !0), !s.bounds;
  }
  interpolate(t) {
    const { x: e, y: s, radius: n } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * n,
      y: s + Math.sin(o) * n,
      angle: o
    };
  }
}
function sh(i) {
  const { chart: t, fill: e, line: s } = i;
  if (gt(e))
    return nh(t, e);
  if (e === "stack")
    return Qu(i);
  if (e === "shape")
    return !0;
  const n = oh(i);
  return n instanceof Xr ? n : Ur(n, s);
}
function nh(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function oh(i) {
  return (i.scale || {}).getPointPositionForValue ? ah(i) : rh(i);
}
function rh(i) {
  const { scale: t = {}, fill: e } = i, s = Ku(e, t);
  if (gt(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function ah(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = qu(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Xr({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < n; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function ms(i, t, e) {
  const s = sh(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, d = c.fill, u = c.backgroundColor, { above: h = u, below: f = u } = d || {}, g = n.getDatasetMeta(o), p = Rr(n, g);
  s && r.points.length && (oi(i, e), lh(i, {
    line: r,
    target: s,
    above: h,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: p
  }), ri(i));
}
function lh(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  i.save();
  let d = o;
  o !== n && (c === "x" ? (po(i, s, r.top), bs(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), po(i, s, r.bottom)) : c === "y" && (mo(i, s, r.left), bs(i, {
    line: e,
    target: s,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), mo(i, s, r.right), d = n)), bs(i, {
    line: e,
    target: s,
    color: d,
    scale: a,
    property: c,
    clip: l
  }), i.restore();
}
function po(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, d = n[l], u = n[$i(l, c, n)];
    o ? (i.moveTo(d.x, d.y), o = !1) : (i.lineTo(d.x, e), i.lineTo(d.x, d.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(u.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function mo(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, d = n[l], u = n[$i(l, c, n)];
    o ? (i.moveTo(d.x, d.y), o = !1) : (i.lineTo(e, d.y), i.lineTo(d.x, d.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(e, u.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function bs(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = Uu(e, s, n);
  for (const { source: c, target: d, start: u, end: h } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, g = s !== !0;
    i.save(), i.fillStyle = f, ch(i, r, a, g && Os(n, u, h)), i.beginPath();
    const p = !!e.pathSegment(i, c);
    let m;
    if (g) {
      p ? i.closePath() : bo(i, s, h, n);
      const y = !!s.pathSegment(i, d, {
        move: p,
        reverse: !0
      });
      m = p && y, m || bo(i, s, u, n);
    }
    i.closePath(), i.fill(m ? "evenodd" : "nonzero"), i.restore();
  }
}
function ch(i, t, e, s) {
  const n = t.chart.chartArea, { property: o, start: r, end: a } = s || {};
  if (o === "x" || o === "y") {
    let l, c, d, u;
    o === "x" ? (l = r, c = n.top, d = a, u = n.bottom) : (l = n.left, c = r, d = n.right, u = a), i.beginPath(), e && (l = Math.max(l, e.left), d = Math.min(d, e.right), c = Math.max(c, e.top), u = Math.min(u, e.bottom)), i.rect(l, c, d - l, u - c), i.clip();
  }
}
function bo(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var dh = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Yi && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: $u(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = Yu(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && ms(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      go(o) && ms(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !go(s) || e.drawTime !== "beforeDatasetDraw" || ms(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const _o = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, uh = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class yo extends St {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, s) {
    this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = nt(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, n = ht(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = _o(s, o);
    let c, d;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, d = this._fitRows(r, o, a, l) + 10) : (d = this.maxHeight, c = this._fitCols(r, n, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(d, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], d = n + a;
    let u = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let h = -1, f = -d;
    return this.legendItems.forEach((g, p) => {
      const m = s + e / 2 + o.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + m + 2 * a > r) && (u += d, c[c.length - (p > 0 ? 0 : 1)] = 0, f += d, h++), l[p] = {
        left: 0,
        top: f,
        row: h,
        width: m,
        height: n
      }, c[c.length - 1] += m + a;
    }), u;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], d = r - t;
    let u = a, h = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((m, y) => {
      const { itemWidth: v, itemHeight: E } = hh(s, e, o, m, n);
      y > 0 && f + E + 2 * a > d && (u += h + a, c.push({
        width: h,
        height: f
      }), g += h + a, p++, h = f = 0), l[y] = {
        left: g,
        top: f,
        col: p,
        width: v,
        height: E
      }, h = Math.max(h, v), f += E + a;
    }), u += h, c.push({
      width: h,
      height: f
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = Ee(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = yt(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = yt(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = yt(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = yt(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      oi(t, this), this._draw(), ri(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = ut.color, l = Ee(t.rtl, this.left, this.width), c = ht(r.font), { padding: d } = r, u = c.size, h = u / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: m } = _o(r, u), y = function(O, V, P) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const I = z(P.lineWidth, 1);
      if (n.fillStyle = z(P.fillStyle, a), n.lineCap = z(P.lineCap, "butt"), n.lineDashOffset = z(P.lineDashOffset, 0), n.lineJoin = z(P.lineJoin, "miter"), n.lineWidth = I, n.strokeStyle = z(P.strokeStyle, a), n.setLineDash(z(P.lineDash, [])), r.usePointStyle) {
        const S = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: P.pointStyle,
          rotation: P.rotation,
          borderWidth: I
        }, _ = l.xPlus(O, g / 2), L = V + h;
        br(n, S, _, L, r.pointStyleWidth && g);
      } else {
        const S = V + Math.max((u - p) / 2, 0), _ = l.leftForLtr(O, g), L = qt(P.borderRadius);
        n.beginPath(), Object.values(L).some((k) => k !== 0) ? Ce(n, {
          x: _,
          y: S,
          w: g,
          h: p,
          radius: L
        }) : n.rect(_, S, g, p), n.fill(), I !== 0 && n.stroke();
      }
      n.restore();
    }, v = function(O, V, P) {
      he(n, P.text, O, V + m / 2, c, {
        strikethrough: P.hidden,
        textAlign: l.textAlign(P.textAlign)
      });
    }, E = this.isHorizontal(), A = this._computeTitleHeight();
    E ? f = {
      x: yt(o, this.left + d, this.right - s[0]),
      y: this.top + d + A,
      line: 0
    } : f = {
      x: this.left + d,
      y: yt(o, this.top + A + d, this.bottom - e[0].height),
      line: 0
    }, wr(this.ctx, t.textDirection);
    const T = m + d;
    this.legendItems.forEach((O, V) => {
      n.strokeStyle = O.fontColor, n.fillStyle = O.fontColor;
      const P = n.measureText(O.text).width, I = l.textAlign(O.textAlign || (O.textAlign = r.textAlign)), S = g + h + P;
      let _ = f.x, L = f.y;
      l.setWidth(this.width), E ? V > 0 && _ + S + d > this.right && (L = f.y += T, f.line++, _ = f.x = yt(o, this.left + d, this.right - s[f.line])) : V > 0 && L + T > this.bottom && (_ = f.x = _ + e[f.line].width + d, f.line++, L = f.y = yt(o, this.top + A + d, this.bottom - e[f.line].height));
      const k = l.x(_);
      if (y(k, L, O), _ = kl(I, _ + g + h, E ? _ + S : this.right, t.rtl), v(l.x(_), L, O), E)
        f.x += S + d;
      else if (typeof O.text != "string") {
        const Z = c.lineHeight;
        f.y += Yr(O, Z) + d;
      } else
        f.y += T;
    }), Cr(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = ht(e.font), n = pt(e.padding);
    if (!e.display)
      return;
    const o = Ee(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let d, u = this.left, h = this.width;
    if (this.isHorizontal())
      h = Math.max(...this.lineWidths), d = this.top + c, u = yt(t.align, u, this.right - h);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      d = c + yt(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = yt(a, u, u + h);
    r.textAlign = o.textAlign(Us(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, he(r, e.text, f, d, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = ht(t.font), s = pt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (zt(t, this.left, this.right) && zt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], zt(t, n.left, n.left + n.width) && zt(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!ph(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = uh(n, s);
      n && !o && nt(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && nt(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && nt(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function hh(i, t, e, s, n) {
  const o = fh(s, i, t, e), r = gh(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function fh(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function gh(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = Yr(t, e)), s;
}
function Yr(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function ph(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var mh = {
  id: "legend",
  _element: yo,
  start(i, t, e) {
    const s = i.legend = new yo({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    Dt.configure(i, s, e), Dt.addBox(i, s);
  },
  stop(i) {
    Dt.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    Dt.configure(i, s, e), s.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const s = t.datasetIndex, n = e.chart;
      n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o, useBorderRadius: r, borderRadius: a } } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), d = pt(c.borderWidth);
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
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: n || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(i)
    }
  }
};
class $r extends St {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const n = st(s.text) ? s.text.length : 1;
    this._padding = pt(s.padding);
    const o = n * ht(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, d, u;
    return this.isHorizontal() ? (d = yt(a, s, o), u = e + t, c = o - s) : (r.position === "left" ? (d = s + t, u = yt(a, n, e), l = Y * -0.5) : (d = o - t, u = yt(a, e, n), l = Y * 0.5), c = n - e), {
      titleX: d,
      titleY: u,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = ht(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    he(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Us(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function bh(i, t) {
  const e = new $r({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  Dt.configure(i, e, t), Dt.addBox(i, e), i.titleBlock = e;
}
var _h = {
  id: "title",
  _element: $r,
  start(i, t, e) {
    bh(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    Dt.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    Dt.configure(i, s, e), s.options = e;
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
const Xe = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = /* @__PURE__ */ new Set(), n = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        s.add(l.x), n += l.y, ++o;
      }
    }
    return o === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((a, l) => a + l) / s.size,
      y: n / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), d = we(t, c);
        d < n && (n = d, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, s = l.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function Mt(i, t) {
  return t && (st(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Ht(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function yh(i, t) {
  const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(n);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function xo(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = ht(t.bodyFont), c = ht(t.titleFont), d = ht(t.footerFont), u = o.length, h = n.length, f = s.length, g = pt(t.padding);
  let p = g.height, m = 0, y = s.reduce((A, T) => A + T.before.length + T.lines.length + T.after.length, 0);
  if (y += i.beforeBody.length + i.afterBody.length, u && (p += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), y) {
    const A = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * A + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing;
  }
  h && (p += t.footerMarginTop + h * d.lineHeight + (h - 1) * t.footerSpacing);
  let v = 0;
  const E = function(A) {
    m = Math.max(m, e.measureText(A).width + v);
  };
  return e.save(), e.font = c.string, ot(i.title, E), e.font = l.string, ot(i.beforeBody.concat(i.afterBody), E), v = t.displayColors ? r + 2 + t.boxPadding : 0, ot(s, (A) => {
    ot(A.before, E), ot(A.lines, E), ot(A.after, E);
  }), v = 0, e.font = d.string, ot(i.footer, E), e.restore(), m += g.width, {
    width: m,
    height: p
  };
}
function xh(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function vh(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function Sh(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), vh(c, i, t, e) && (c = "center"), c;
}
function vo(i, t, e) {
  const s = e.yAlign || t.yAlign || xh(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Sh(i, t, e, s),
    yAlign: s
  };
}
function Th(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Eh(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function So(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: d, topRight: u, bottomLeft: h, bottomRight: f } = qt(r);
  let g = Th(t, a);
  const p = Eh(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(d, h) + n : a === "right" && (g += Math.max(u, f) + n), {
    x: vt(g, 0, s.width - t.width),
    y: vt(p, 0, s.height - t.height)
  };
}
function wi(i, t, e) {
  const s = pt(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function To(i) {
  return Mt([], Ht(i));
}
function wh(i, t, e) {
  return ee(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Eo(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const Zr = {
  beforeTitle: Vt,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: Vt,
  beforeBody: Vt,
  beforeLabel: Vt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return it(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
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
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: Vt,
  afterBody: Vt,
  beforeFooter: Vt,
  footer: Vt,
  afterFooter: Vt
};
function wt(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? Zr[t].call(e, s) : n;
}
class wo extends St {
  static positioners = Xe;
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
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new tn(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = wh(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = wt(s, "beforeTitle", this, t), o = wt(s, "title", this, t), r = wt(s, "afterTitle", this, t);
    let a = [];
    return a = Mt(a, Ht(n)), a = Mt(a, Ht(o)), a = Mt(a, Ht(r)), a;
  }
  getBeforeBody(t, e) {
    return To(wt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return ot(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Eo(s, o);
      Mt(r.before, Ht(wt(a, "beforeLabel", this, o))), Mt(r.lines, wt(a, "label", this, o)), Mt(r.after, Ht(wt(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return To(wt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = wt(s, "beforeFooter", this, t), o = wt(s, "footer", this, t), r = wt(s, "afterFooter", this, t);
    let a = [];
    return a = Mt(a, Ht(n)), a = Mt(a, Ht(o)), a = Mt(a, Ht(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(yh(this.chart, e[l]));
    return t.filter && (a = a.filter((d, u, h) => t.filter(d, u, h, s))), t.itemSort && (a = a.sort((d, u) => t.itemSort(d, u, s))), ot(a, (d) => {
      const u = Eo(t.callbacks, d);
      n.push(wt(u, "labelColor", this, d)), o.push(wt(u, "labelPointStyle", this, d)), r.push(wt(u, "labelTextColor", this, d));
    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()), n = this._active;
    let o, r = [];
    if (!n.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = Xe[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = xo(this, s), c = Object.assign({}, a, l), d = vo(this.chart, s, c), u = So(s, c, d, this.chart);
      this.xAlign = d.xAlign, this.yAlign = d.yAlign, o = {
        opacity: 1,
        x: u.x,
        y: u.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, s, n) {
    const o = this.getCaretPosition(t, s, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, s) {
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: u } = qt(a), { x: h, y: f } = t, { width: g, height: p } = e;
    let m, y, v, E, A, T;
    return o === "center" ? (A = f + p / 2, n === "left" ? (m = h, y = m - r, E = A + r, T = A - r) : (m = h + g, y = m + r, E = A - r, T = A + r), v = m) : (n === "left" ? y = h + Math.max(l, d) + r : n === "right" ? y = h + g - Math.max(c, u) - r : y = this.caretX, o === "top" ? (E = f, A = E - r, m = y - r, v = y + r) : (E = f + p, A = E + r, m = y + r, v = y - r), T = E), {
      x1: m,
      x2: y,
      x3: v,
      y1: E,
      y2: A,
      y3: T
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = Ee(s.rtl, this.x, this.width);
      for (t.x = wi(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = ht(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, d = ht(o.bodyFont), u = wi(this, "left", o), h = n.x(u), f = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, g = e.y + f;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = n.leftForLtr(h, c) + c / 2, y = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, ws(t, p, m, y), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, ws(t, p, m, y);
    } else {
      t.lineWidth = $(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const p = n.leftForLtr(h, c), m = n.leftForLtr(n.xPlus(h, 1), c - 2), y = qt(r.borderRadius);
      Object.values(y).some((v) => v !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Ce(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: y
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Ce(t, {
        x: m,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: y
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(m, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: d } = s, u = ht(s.bodyFont);
    let h = u.lineHeight, f = 0;
    const g = Ee(s.rtl, this.x, this.width), p = function(P) {
      e.fillText(P, g.x(t.x + f), t.y + h / 2), t.y += h + o;
    }, m = g.textAlign(r);
    let y, v, E, A, T, O, V;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = u.string, t.x = wi(this, m, s), e.fillStyle = s.bodyColor, ot(this.beforeBody, p), f = a && m !== "right" ? r === "center" ? c / 2 + d : c + 2 + d : 0, A = 0, O = n.length; A < O; ++A) {
      for (y = n[A], v = this.labelTextColors[A], e.fillStyle = v, ot(y.before, p), E = y.lines, a && E.length && (this._drawColorBox(e, t, A, g, s), h = Math.max(u.lineHeight, l)), T = 0, V = E.length; T < V; ++T)
        p(E[T]), h = u.lineHeight;
      ot(y.after, p);
    }
    f = 0, h = u.lineHeight, ot(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = Ee(s.rtl, this.x, this.width);
      for (t.x = wi(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = ht(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: d } = s, { topLeft: u, topRight: h, bottomLeft: f, bottomRight: g } = qt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + u, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - h, l), e.quadraticCurveTo(a + c, l, a + c, l + h), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + d - g), e.quadraticCurveTo(a + c, l + d, a + c - g, l + d), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + d), e.quadraticCurveTo(a, l + d, a, l + d - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + u), e.quadraticCurveTo(a, l, a + u, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = Xe[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = xo(this, t), l = Object.assign({}, r, this._size), c = vo(e, t, l), d = So(t, l, c, e);
      (n._to !== d.x || o._to !== d.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, d));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(e);
    const n = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const r = pt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), wr(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Cr(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active, n = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !Di(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !Di(r, o) || a;
    return l && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, s, n) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: n, options: o } = this, r = Xe[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var Ch = {
  id: "tooltip",
  _element: wo,
  positioners: Xe,
  afterInit(i, t, e) {
    e && (i.tooltip = new wo({
      chart: i,
      options: e
    }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
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
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
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
    callbacks: Zr
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
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
const Ah = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Ih(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Ah(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Oh = (i, t) => i === null ? null : vt(Math.round(i), 0, t);
function Co(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Rh extends De {
  static id = "category";
  static defaults = {
    ticks: {
      callback: Co
    }
  };
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const { index: n, label: o } of e)
        s[n] === o && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (it(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Ih(s, t, z(e, t), this._addedLabels), Oh(e, s.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: s, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.min, e = this.max, s = this.options.offset, n = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let r = t; r <= e; r++)
      n.push({
        value: r
      });
    return n;
  }
  getLabelForValue(t) {
    return Co.call(this, t);
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
function Dh(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: d, maxDigits: u, includeBounds: h } = i, f = o || 1, g = d - 1, { min: p, max: m } = t, y = !it(r), v = !it(a), E = !it(c), A = (m - p) / (u + 1);
  let T = Sn((m - p) / g / f) * f, O, V, P, I;
  if (T < 1e-14 && !y && !v)
    return [
      {
        value: p
      },
      {
        value: m
      }
    ];
  I = Math.ceil(m / T) - Math.floor(p / T), I > g && (T = Sn(I * T / g / f) * f), it(l) || (O = Math.pow(10, l), T = Math.ceil(T * O) / O), n === "ticks" ? (V = Math.floor(p / T) * T, P = Math.ceil(m / T) * T) : (V = p, P = m), y && v && o && wl((a - r) / o, T / 1e3) ? (I = Math.round(Math.min((a - r) / T, d)), T = (a - r) / I, V = r, P = a) : E ? (V = y ? r : V, P = v ? a : P, I = c - 1, T = (P - V) / I) : (I = (P - V) / T, Ze(I, Math.round(I), T / 1e3) ? I = Math.round(I) : I = Math.ceil(I));
  const S = Math.max(Tn(T), Tn(V));
  O = Math.pow(10, it(l) ? S : l), V = Math.round(V * O) / O, P = Math.round(P * O) / O;
  let _ = 0;
  for (y && (h && V !== r ? (e.push({
    value: r
  }), V < r && _++, Ze(Math.round((V + _ * T) * O) / O, r, Ao(r, A, i)) && _++) : V < r && _++); _ < I; ++_) {
    const L = Math.round((V + _ * T) * O) / O;
    if (v && L > a)
      break;
    e.push({
      value: L
    });
  }
  return v && h && P !== a ? e.length && Ze(e[e.length - 1].value, a, Ao(a, A, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!v || P === a) && e.push({
    value: P
  }), e;
}
function Ao(i, t, { horizontal: e, minRotation: s }) {
  const n = ft(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Rs extends De {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return it(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = Nt(n), c = Nt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (n === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(n - l);
    }
    this.min = n, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: s } = t, n;
    return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const n = {
      maxTicks: s,
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
    }, o = this._range || this, r = Dh(n, o);
    return t.bounds === "ticks" && Cl(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const n = (s - e) / Math.max(t.length - 1, 1) / 2;
      e -= n, s += n;
    }
    this._startValue = e, this._endValue = s, this._valueRange = s - e;
  }
  getLabelForValue(t) {
    return ji(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Lh extends Rs {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Ys.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = gt(t) ? t : 0, this.max = gt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = ft(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
function Ds(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = pt(t.backdropPadding);
    return z(t.font && t.font.size, ut.font.size) + e.height;
  }
  return 0;
}
function kh(i, t, e) {
  return e = st(e) ? e : [
    e
  ], {
    w: Xl(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Io(i, t, e, s, n) {
  return i === s || i === n ? {
    start: t - e / 2,
    end: t + e / 2
  } : i < s || i > n ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function Mh(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? Y / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const d = i.getPointPosition(l, i.drawingArea + n[l], a), u = ht(c.font), h = kh(i.ctx, u, i._pointLabels[l]);
    s[l] = h;
    const f = xt(i.getIndexAngle(l) + a), g = Math.round(Gi(f)), p = Io(g, d.x, h.w, 0, 180), m = Io(g, d.y, h.h, 90, 270);
    Ph(e, t, f, p, m);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Bh(i, s, n);
}
function Ph(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Nh(i, t, e) {
  const s = i.drawingArea, { extra: n, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, s + n + r, o), c = Math.round(Gi(xt(l.angle + lt))), d = Wh(l.y, a.h, c), u = Hh(c), h = Fh(l.x, a.w, u);
  return {
    visible: !0,
    x: l.x,
    y: d,
    textAlign: u,
    left: h,
    top: d,
    right: h + a.w,
    bottom: d + a.h
  };
}
function Vh(i, t) {
  if (!t)
    return !0;
  const { left: e, top: s, right: n, bottom: o } = i;
  return !(Gt({
    x: e,
    y: s
  }, t) || Gt({
    x: e,
    y: o
  }, t) || Gt({
    x: n,
    y: s
  }, t) || Gt({
    x: n,
    y: o
  }, t));
}
function Bh(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: Ds(o) / 2,
    additionalAngle: r ? Y / n : 0
  };
  let c;
  for (let d = 0; d < n; d++) {
    l.padding = e[d], l.size = t[d];
    const u = Nh(i, d, l);
    s.push(u), a === "auto" && (u.visible = Vh(u, c), u.visible && (c = u));
  }
  return s;
}
function Hh(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function Fh(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Wh(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function zh(i, t, e) {
  const { left: s, top: n, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!it(a)) {
    const l = qt(t.borderRadius), c = pt(t.backdropPadding);
    i.fillStyle = a;
    const d = s - c.left, u = n - c.top, h = o - s + c.width, f = r - n + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), Ce(i, {
      x: d,
      y: u,
      w: h,
      h: f,
      radius: l
    }), i.fill()) : i.fillRect(d, u, h, f);
  }
}
function Gh(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = i._pointLabelItems[n];
    if (!o.visible)
      continue;
    const r = s.setContext(i.getPointLabelContext(n));
    zh(e, r, o);
    const a = ht(r.font), { x: l, y: c, textAlign: d } = o;
    he(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: d,
      textBaseline: "middle"
    });
  }
}
function Kr(i, t, e, s) {
  const { ctx: n } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, at);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
  }
}
function jh(i, t, e, s, n) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash || []), o.lineDashOffset = n.dashOffset, o.beginPath(), Kr(i, e, r, s), o.closePath(), o.stroke(), o.restore());
}
function Uh(i, t, e) {
  return ee(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Xh extends Rs {
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
      callback: Ys.formatters.numeric
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
    const t = this._padding = pt(Ds(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = gt(t) && !isNaN(t) ? t : 0, this.max = gt(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ds(this.options));
  }
  generateTickLabels(t) {
    Rs.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = nt(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Mh(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = at / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return xt(t * e + ft(s));
  }
  getDistanceFromCenterForValue(t) {
    if (it(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (it(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return Uh(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - lt + s;
    return {
      x: Math.cos(n) * e + this.xCenter,
      y: Math.sin(n) * e + this.yCenter,
      angle: n
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: s, right: n, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: s,
      right: n,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(), s.beginPath(), Kr(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && Gh(this, r), n.display && this.ticks.forEach((d, u) => {
      if (u !== 0 || u === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(d.value);
        const h = this.getContext(u), f = n.setContext(h), g = o.setContext(h);
        jh(this, f, l, r, g);
      }
    }), s.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const d = s.setContext(this.getPointLabelContext(a)), { color: u, lineWidth: h } = d;
        !h || !u || (t.lineWidth = h, t.strokeStyle = u, t.setLineDash(d.borderDash), t.lineDashOffset = d.borderDashOffset, l = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, s = e.ticks;
    if (!s.display)
      return;
    const n = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && this.min >= 0 && !e.reverse)
        return;
      const c = s.setContext(this.getContext(l)), d = ht(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = d.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const u = pt(c.backdropPadding);
        t.fillRect(-r / 2 - u.left, -o - d.size / 2 - u.top, r + u.width, d.size + u.height);
      }
      he(t, a.label, 0, -o, d, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const Zi = {
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
}, Ct = /* @__PURE__ */ Object.keys(Zi);
function Oo(i, t) {
  return i - t;
}
function Ro(i, t) {
  if (it(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), gt(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (de(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function Do(i, t, e, s) {
  const n = Ct.length;
  for (let o = Ct.indexOf(i); o < n - 1; ++o) {
    const r = Zi[Ct[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return Ct[o];
  }
  return Ct[n - 1];
}
function Yh(i, t, e, s, n) {
  for (let o = Ct.length - 1; o >= Ct.indexOf(e); o--) {
    const r = Ct[o];
    if (Zi[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return Ct[e ? Ct.indexOf(e) : 0];
}
function $h(i) {
  for (let t = Ct.indexOf(i) + 1, e = Ct.length; t < e; ++t)
    if (Zi[Ct[t]].common)
      return Ct[t];
}
function Lo(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = js(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function Zh(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function ko(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : Zh(i, s, n, e);
}
class Mo extends De {
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
    const s = t.time || (t.time = {}), n = this._adapter = new fd._date(t.adapters.date);
    n.init(e), $e(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Ro(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, s = t.time.unit || "day";
    let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = gt(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = gt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], s = t[t.length - 1]), {
      min: e,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const o = this.min, r = this.max, a = Rl(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? Do(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Yh(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : $h(this._unit), this.initOffsets(n), t.reverse && a.reverse(), ko(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = vt(e, 0, r), s = vt(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || Do(o.minUnit, e, s, this._getLabelCapacity(e)), a = z(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = de(l) || l === !0, d = {};
    let u = e, h, f;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (h = u, f = 0; h < s; h = +t.add(h, a, r), f++)
      Lo(d, h, g);
    return (h === s || n.bounds === "ticks" || f === 1) && Lo(d, h, g), Object.keys(d).sort(Oo).map((p) => +p);
  }
  getLabelForValue(t) {
    const e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  format(t, e) {
    const n = this.options.time.displayFormats, o = this._unit, r = e || n[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, s, n) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return nt(r, [
        t,
        e,
        s
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, d = l && a[l], u = c && a[c], h = s[e], f = c && u && h && h.major;
    return this._adapter.format(t, n || (f ? u : d));
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e)
      n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = ft(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, ko(this, [
      t
    ], this._majorUnit), n), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, s;
    if (t.length)
      return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, s = n.length; e < s; ++e)
      t = t.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length)
      return t;
    const n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e)
      t.push(Ro(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return gr(t.sort(Oo));
  }
}
function Ci(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = re(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = re(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Pp extends Mo {
  static id = "timeseries";
  static defaults = Mo.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Ci(e, this.min), this._tableRange = Ci(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this, n = [], o = [];
    let r, a, l, c, d;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= s && n.push(c);
    if (n.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: s,
          pos: 1
        }
      ];
    for (r = 0, a = n.length; r < a; ++r)
      d = n[r + 1], l = n[r - 1], c = n[r], Math.round((d + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let s = super.getDataTimestamps();
    return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, o) => n - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Ci(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ci(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const qr = {
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
}, Kh = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, qh = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...qr,
  ...Kh
}, Jh = La[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function Se(i) {
  return nr(i) ? vs(i) : i;
}
function Qh(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return nr(t) ? new Proxy(i, {}) : i;
}
function tf(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function Jr(i, t) {
  i.labels = t;
}
function Qr(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function ef(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return Jr(e, i.labels), Qr(e, i.datasets, t), e;
}
const sf = zi({
  props: qh,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = Wt(null), o = ir(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: d, options: u, plugins: h, datasetIdKey: f } = i, g = ef(d, f), p = Qh(g, d);
      o.value = new ce(n.value, {
        type: c,
        data: p,
        options: {
          ...u
        },
        plugins: h
      });
    }, a = () => {
      const c = vs(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return Ri(r), sr(a), Je([
      () => i.options,
      () => i.data
    ], (c, d) => {
      let [u, h] = c, [f, g] = d;
      const p = vs(o.value);
      if (!p)
        return;
      let m = !1;
      if (u) {
        const y = Se(u), v = Se(f);
        y && y !== v && (tf(p, y), m = !0);
      }
      if (h) {
        const y = Se(h.labels), v = Se(g.labels), E = Se(h.datasets), A = Se(g.datasets);
        y !== v && (Jr(p.config.data, y), m = !0), E && E !== A && (Qr(p.config.data, E, i.datasetIdKey), m = !0);
      }
      m && Da(() => {
        l(p);
      });
    }, {
      deep: !0
    }), () => xs("canvas", {
      role: "img",
      "aria-label": i.ariaLabel,
      "aria-describedby": i.ariaDescribedby,
      ref: n
    }, [
      xs("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function Le(i, t) {
  return ce.register(t), zi({
    props: qr,
    setup(e, s) {
      let { expose: n } = s;
      const o = ir(null), r = (a) => {
        o.value = a?.chart;
      };
      return n({
        chart: o
      }), () => xs(sf, Jh({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const _s = /* @__PURE__ */ Le("bar", ad), nf = /* @__PURE__ */ Le("doughnut", en), of = /* @__PURE__ */ Le("line", cd), rf = /* @__PURE__ */ Le("pie", ud), af = /* @__PURE__ */ Le("polarArea", dd), lf = /* @__PURE__ */ Le("radar", hd);
/*!
* chartjs-plugin-annotation v3.1.0
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2024 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */
const Po = {
  modes: {
    /**
     * Point mode returns all elements that hit test based on the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @return {AnnotationElement[]} - elements that are found
     */
    point(i, t) {
      return Oi(i, t, { intersect: !0 });
    },
    /**
     * Nearest mode returns the element closest to the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found (only 1 element)
     */
    nearest(i, t, e) {
      return uf(i, t, e);
    },
    /**
     * x mode returns the elements that hit-test at the current x coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    x(i, t, e) {
      return Oi(i, t, { intersect: e.intersect, axis: "x" });
    },
    /**
     * y mode returns the elements that hit-test at the current y coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    y(i, t, e) {
      return Oi(i, t, { intersect: e.intersect, axis: "y" });
    }
  }
};
function nn(i, t, e) {
  return (Po.modes[e.mode] || Po.modes.nearest)(i, t, e);
}
function cf(i, t, e) {
  return e !== "x" && e !== "y" ? i.inRange(t.x, t.y, "x", !0) || i.inRange(t.x, t.y, "y", !0) : i.inRange(t.x, t.y, e, !0);
}
function df(i, t, e) {
  return e === "x" ? { x: i.x, y: t.y } : e === "y" ? { x: t.x, y: i.y } : t;
}
function Oi(i, t, e) {
  return i.filter((s) => e.intersect ? s.inRange(t.x, t.y) : cf(s, t, e.axis));
}
function uf(i, t, e) {
  let s = Number.POSITIVE_INFINITY;
  return Oi(i, t, e).reduce((n, o) => {
    const r = o.getCenterPoint(), a = df(t, r, e.axis), l = we(t, a);
    return l < s ? (n = [o], s = l) : l === s && n.push(o), n;
  }, []).sort((n, o) => n._index - o._index).slice(0, 1);
}
function ge(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e), o = t.x, r = t.y;
  return {
    x: o + s * (i.x - o) - n * (i.y - r),
    y: r + n * (i.x - o) + s * (i.y - r)
  };
}
const hf = (i, t) => t > i || i.length > t.length && i.slice(0, t.length) === t, ae = 1e-3, Ki = (i, t, e) => Math.min(e, Math.max(t, i)), ta = (i, t) => i.value >= i.start - t && i.value <= i.end + t;
function ff(i, t, e) {
  for (const s of Object.keys(i))
    i[s] = Ki(i[s], t, e);
  return i;
}
function gf(i, t, e, s) {
  return !i || !t || e <= 0 ? !1 : Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2) <= Math.pow(e + s, 2);
}
function ea(i, { x: t, y: e, x2: s, y2: n }, o, { borderWidth: r, hitTolerance: a }) {
  const l = (r + a) / 2, c = i.x >= t - l - ae && i.x <= s + l + ae, d = i.y >= e - l - ae && i.y <= n + l + ae;
  return o === "x" ? c : (o === "y" || c) && d;
}
function ia(i, { rect: t, center: e }, s, { rotation: n, borderWidth: o, hitTolerance: r }) {
  const a = ge(i, e, ft(-n));
  return ea(a, t, s, { borderWidth: o, hitTolerance: r });
}
function pe(i, t) {
  const { centerX: e, centerY: s } = i.getProps(["centerX", "centerY"], t);
  return { x: e, y: s };
}
function pf(i, t, e, s = !0) {
  const n = e.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = n[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (hf(a, r)) {
      if (s)
        throw new Error(`${i} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const sa = (i) => typeof i == "string" && i.endsWith("%"), na = (i) => parseFloat(i) / 100, oa = (i) => Ki(na(i), 0, 1), ze = (i, t) => ({ x: i, y: t, x2: i, y2: t, width: 0, height: 0 }), mf = {
  box: (i) => ze(i.centerX, i.centerY),
  doughnutLabel: (i) => ze(i.centerX, i.centerY),
  ellipse: (i) => ({ centerX: i.centerX, centerY: i.centerX, radius: 0, width: 0, height: 0 }),
  label: (i) => ze(i.centerX, i.centerY),
  line: (i) => ze(i.x, i.y),
  point: (i) => ({ centerX: i.centerX, centerY: i.centerY, radius: 0, width: 0, height: 0 }),
  polygon: (i) => ze(i.centerX, i.centerY)
};
function on(i, t) {
  return t === "start" ? 0 : t === "end" ? i : sa(t) ? oa(t) * i : i / 2;
}
function te(i, t, e = !0) {
  return typeof t == "number" ? t : sa(t) ? (e ? oa(t) : na(t)) * i : i;
}
function bf(i, t) {
  const { x: e, width: s } = i, n = t.textAlign;
  return n === "center" ? e + s / 2 : n === "end" || n === "right" ? e + s : e;
}
function ra(i, t, { borderWidth: e, position: s, xAdjust: n, yAdjust: o }, r) {
  const a = $(r), l = t.width + (a ? r.width : 0) + e, c = t.height + (a ? r.height : 0) + e, d = rn(s), u = No(i.x, l, n, d.x), h = No(i.y, c, o, d.y);
  return {
    x: u,
    y: h,
    x2: u + l,
    y2: h + c,
    width: l,
    height: c,
    centerX: u + l / 2,
    centerY: h + c / 2
  };
}
function rn(i, t = "center") {
  return $(i) ? {
    x: z(i.x, t),
    y: z(i.y, t)
  } : (i = z(i, t), {
    x: i,
    y: i
  });
}
const aa = (i, t) => i && i.autoFit && t < 1;
function la(i, t) {
  const e = i.font, s = st(e) ? e : [e];
  return aa(i, t) ? s.map(function(n) {
    const o = ht(n);
    return o.size = Math.floor(n.size * t), o.lineHeight = n.lineHeight, ht(o);
  }) : s.map((n) => ht(n));
}
function ca(i) {
  return i && (It(i.xValue) || It(i.yValue));
}
function No(i, t, e = 0, s) {
  return i - on(t, s) + e;
}
function ke(i, t, e) {
  const s = e.init;
  if (s) {
    if (s === !0)
      return ua(t, e);
  } else return;
  return _f(i, t, e);
}
function da(i, t, e) {
  let s = !1;
  return t.forEach((n) => {
    At(i[n]) ? (s = !0, e[n] = i[n]) : It(e[n]) && delete e[n];
  }), s;
}
function ua(i, t) {
  const e = t.type || "line";
  return mf[e](i);
}
function _f(i, t, e) {
  const s = nt(e.init, [{ chart: i, properties: t, options: e }]);
  if (s === !0)
    return ua(t, e);
  if ($(s))
    return s;
}
const ys = /* @__PURE__ */ new Map(), yf = (i) => isNaN(i) || i <= 0, xf = (i) => i.reduce(function(t, e) {
  return t += e.string, t;
}, "");
function qi(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function Ji(i, { x: t, y: e }, s) {
  s && (i.translate(t, e), i.rotate(ft(s)), i.translate(-t, -e));
}
function jt(i, t) {
  if (t && t.borderWidth)
    return i.lineCap = t.borderCapStyle || "butt", i.setLineDash(t.borderDash), i.lineDashOffset = t.borderDashOffset, i.lineJoin = t.borderJoinStyle || "miter", i.lineWidth = t.borderWidth, i.strokeStyle = t.borderColor, !0;
}
function Me(i, t) {
  i.shadowColor = t.backgroundShadowColor, i.shadowBlur = t.shadowBlur, i.shadowOffsetX = t.shadowOffsetX, i.shadowOffsetY = t.shadowOffsetY;
}
function Qi(i, t) {
  const e = t.content;
  if (qi(e))
    return {
      width: te(e.width, t.width),
      height: te(e.height, t.height)
    };
  const s = la(t), n = t.textStrokeWidth, o = st(e) ? e : [e], r = o.join() + xf(s) + n + (i._measureText ? "-spriting" : "");
  return ys.has(r) || ys.set(r, Ef(i, o, s, n)), ys.get(r);
}
function ha(i, t, e) {
  const { x: s, y: n, width: o, height: r } = t;
  i.save(), Me(i, e);
  const a = jt(i, e);
  i.fillStyle = e.backgroundColor, i.beginPath(), Ce(i, {
    x: s,
    y: n,
    w: o,
    h: r,
    radius: ff(qt(e.borderRadius), 0, Math.min(o, r) / 2)
  }), i.closePath(), i.fill(), a && (i.shadowColor = e.borderShadowColor, i.stroke()), i.restore();
}
function fa(i, t, e, s) {
  const n = e.content;
  if (qi(n)) {
    i.save(), i.globalAlpha = Af(e.opacity, n.style.opacity), i.drawImage(n, t.x, t.y, t.width, t.height), i.restore();
    return;
  }
  const o = st(n) ? n : [n], r = la(e, s), a = e.color, l = st(a) ? a : [a], c = bf(t, e), d = t.y + e.textStrokeWidth / 2;
  i.save(), i.textBaseline = "middle", i.textAlign = e.textAlign, vf(i, e) && wf(i, { x: c, y: d }, o, r), Cf(i, { x: c, y: d }, o, { fonts: r, colors: l }), i.restore();
}
function vf(i, t) {
  if (t.textStrokeWidth > 0)
    return i.lineJoin = "round", i.miterLimit = 2, i.lineWidth = t.textStrokeWidth, i.strokeStyle = t.textStrokeColor, !0;
}
function Sf(i, t, e, s) {
  const { radius: n, options: o } = t, r = o.pointStyle, a = o.rotation;
  let l = (a || 0) * Gs;
  if (qi(r)) {
    i.save(), i.translate(e, s), i.rotate(l), i.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), i.restore();
    return;
  }
  yf(n) || Tf(i, { x: e, y: s, radius: n, rotation: a, style: r, rad: l });
}
function Tf(i, { x: t, y: e, radius: s, rotation: n, style: o, rad: r }) {
  let a, l, c, d;
  switch (i.beginPath(), o) {
    // Default includes circle
    default:
      i.arc(t, e, s, 0, at), i.closePath();
      break;
    case "triangle":
      i.moveTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Mi, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Mi, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), i.closePath();
      break;
    case "rectRounded":
      d = s * 0.516, c = s - d, a = Math.cos(r + Rt) * c, l = Math.sin(r + Rt) * c, i.arc(t - a, e - l, d, r - Y, r - lt), i.arc(t + l, e - a, d, r - lt, r), i.arc(t + a, e + l, d, r, r + lt), i.arc(t - l, e + a, d, r + lt, r + Y), i.closePath();
      break;
    case "rect":
      if (!n) {
        c = Math.SQRT1_2 * s, i.rect(t - c, e - c, 2 * c, 2 * c);
        break;
      }
      r += Rt;
    /* falls through */
    case "rectRot":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + l, e - a), i.lineTo(t + a, e + l), i.lineTo(t - l, e + a), i.closePath();
      break;
    case "crossRot":
      r += Rt;
    /* falls through */
    case "cross":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
      break;
    case "star":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a), r += Rt, a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
      break;
    case "line":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l);
      break;
    case "dash":
      i.moveTo(t, e), i.lineTo(t + Math.cos(r) * s, e + Math.sin(r) * s);
      break;
  }
  i.fill();
}
function Ef(i, t, e, s) {
  i.save();
  const n = t.length;
  let o = 0, r = s;
  for (let a = 0; a < n; a++) {
    const l = e[Math.min(a, e.length - 1)];
    i.font = l.string;
    const c = t[a];
    o = Math.max(o, i.measureText(c).width + s), r += l.lineHeight;
  }
  return i.restore(), { width: o, height: r };
}
function wf(i, { x: t, y: e }, s, n) {
  i.beginPath();
  let o = 0;
  s.forEach(function(r, a) {
    const l = n[Math.min(a, n.length - 1)], c = l.lineHeight;
    i.font = l.string, i.strokeText(r, t, e + c / 2 + o), o += c;
  }), i.stroke();
}
function Cf(i, { x: t, y: e }, s, { fonts: n, colors: o }) {
  let r = 0;
  s.forEach(function(a, l) {
    const c = o[Math.min(l, o.length - 1)], d = n[Math.min(l, n.length - 1)], u = d.lineHeight;
    i.beginPath(), i.font = d.string, i.fillStyle = c, i.fillText(a, t, e + u / 2 + r), r += u, i.fill();
  });
}
function Af(i, t) {
  const e = de(i) ? i : t;
  return de(e) ? Ki(e, 0, 1) : 1;
}
const ga = ["left", "bottom", "top", "right"];
function If(i, t) {
  const { pointX: e, pointY: s, options: n } = t, o = n.callout, r = o && o.display && kf(t, o);
  if (!r || Pf(t, o, r))
    return;
  if (i.save(), i.beginPath(), !jt(i, o))
    return i.restore();
  const { separatorStart: l, separatorEnd: c } = Of(t, r), { sideStart: d, sideEnd: u } = Df(t, r, l);
  (o.margin > 0 || n.borderWidth === 0) && (i.moveTo(l.x, l.y), i.lineTo(c.x, c.y)), i.moveTo(d.x, d.y), i.lineTo(u.x, u.y);
  const h = ge({ x: e, y: s }, t.getCenterPoint(), ft(-t.rotation));
  i.lineTo(h.x, h.y), i.stroke(), i.restore();
}
function Of(i, t) {
  const { x: e, y: s, x2: n, y2: o } = i, r = Rf(i, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: s }, l = { x: a.x, y: o }) : (a = { x: e, y: s + r }, l = { x: n, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function Rf(i, t) {
  const { width: e, height: s, options: n } = i, o = n.callout.margin + n.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? s + o : -o;
}
function Df(i, t, e) {
  const { y: s, width: n, height: o, options: r } = i, a = r.callout.start, l = Lf(t, r.callout);
  let c, d;
  return t === "left" || t === "right" ? (c = { x: e.x, y: s + te(o, a) }, d = { x: c.x + l, y: c.y }) : (c = { x: e.x + te(n, a), y: e.y }, d = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: d };
}
function Lf(i, t) {
  const e = t.side;
  return i === "left" || i === "top" ? -e : e;
}
function kf(i, t) {
  const e = t.position;
  return ga.includes(e) ? e : Mf(i, t);
}
function Mf(i, t) {
  const { x: e, y: s, x2: n, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: d, centerY: u, rotation: h } = i, f = { x: d, y: u }, g = t.start, p = te(r, g), m = te(a, g), y = [e, e + p, e + p, n], v = [s + m, o, s, o], E = [];
  for (let A = 0; A < 4; A++) {
    const T = ge({ x: y[A], y: v[A] }, f, ft(h));
    E.push({
      position: ga[A],
      distance: we(T, { x: l, y: c })
    });
  }
  return E.sort((A, T) => A.distance - T.distance)[0].position;
}
function Pf(i, t, e) {
  const { pointX: s, pointY: n } = i, o = t.margin;
  let r = s, a = n;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), i.inRange(r, a);
}
const Vo = {
  xScaleID: { min: "xMin", max: "xMax", start: "left", end: "right", startProp: "x", endProp: "x2" },
  yScaleID: { min: "yMin", max: "yMax", start: "bottom", end: "top", startProp: "y", endProp: "y2" }
};
function Oe(i, t, e) {
  return t = typeof t == "number" ? t : i.parse(t), gt(t) ? i.getPixelForValue(t) : e;
}
function fe(i, t, e) {
  const s = t[e];
  if (s || e === "scaleID")
    return s;
  const n = e.charAt(0), o = Object.values(i).filter((r) => r.axis && r.axis === n);
  return o.length ? o[0].id : n;
}
function pa(i, t) {
  if (i) {
    const e = i.options.reverse, s = Oe(i, t.min, e ? t.end : t.start), n = Oe(i, t.max, e ? t.start : t.end);
    return {
      start: s,
      end: n
    };
  }
}
function ma(i, t) {
  const { chartArea: e, scales: s } = i, n = s[fe(s, t, "xScaleID")], o = s[fe(s, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return n && (r = Oe(n, t.xValue, n.left + n.width / 2)), o && (a = Oe(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function an(i, t) {
  const e = i.scales, s = e[fe(e, t, "xScaleID")], n = e[fe(e, t, "yScaleID")];
  if (!s && !n)
    return {};
  let { left: o, right: r } = s || i.chartArea, { top: a, bottom: l } = n || i.chartArea;
  const c = Bo(s, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const d = Bo(n, { min: t.yMin, max: t.yMax, start: l, end: a });
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
function ba(i, t) {
  if (!ca(t)) {
    const e = an(i, t);
    let s = t.radius;
    (!s || isNaN(s)) && (s = Math.min(e.width, e.height) / 2, t.radius = s);
    const n = s * 2, o = e.centerX + t.xAdjust, r = e.centerY + t.yAdjust;
    return {
      x: o - s,
      y: r - s,
      x2: o + s,
      y2: r + s,
      centerX: o,
      centerY: r,
      width: n,
      height: n,
      radius: s
    };
  }
  return Vf(i, t);
}
function Nf(i, t) {
  const { scales: e, chartArea: s } = i, n = e[t.scaleID], o = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
  return n ? Bf(n, o, t) : Hf(e, o, t), o;
}
function _a(i, t) {
  const e = an(i, t);
  return e.initProperties = ke(i, e, t), e.elements = [{
    type: "label",
    optionScope: "label",
    properties: zf(i, e, t),
    initProperties: e.initProperties
  }], e;
}
function Vf(i, t) {
  const e = ma(i, t), s = t.radius * 2;
  return {
    x: e.x - t.radius + t.xAdjust,
    y: e.y - t.radius + t.yAdjust,
    x2: e.x + t.radius + t.xAdjust,
    y2: e.y + t.radius + t.yAdjust,
    centerX: e.x + t.xAdjust,
    centerY: e.y + t.yAdjust,
    radius: t.radius,
    width: s,
    height: s
  };
}
function Bo(i, t) {
  const e = pa(i, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function Bf(i, t, e) {
  const s = Oe(i, e.value, NaN), n = Oe(i, e.endValue, s);
  i.isHorizontal() ? (t.x = s, t.x2 = n) : (t.y = s, t.y2 = n);
}
function Hf(i, t, e) {
  for (const s of Object.keys(Vo)) {
    const n = i[fe(i, e, s)];
    if (n) {
      const { min: o, max: r, start: a, end: l, startProp: c, endProp: d } = Vo[s], u = pa(n, { min: e[o], max: e[r], start: n[a], end: n[l] });
      t[c] = u.start, t[d] = u.end;
    }
  }
}
function Ff({ properties: i, options: t }, e, s, n) {
  const { x: o, x2: r, width: a } = i;
  return ya({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.x,
    padding: { start: n.left, end: n.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function Wf({ properties: i, options: t }, e, s, n) {
  const { y: o, y2: r, height: a } = i;
  return ya({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.y,
    padding: { start: n.top, end: n.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function ya(i, t) {
  const { start: e, end: s, borderWidth: n } = i, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = s - n - e - r - a - t.size;
  return e + n / 2 + l + on(c, o);
}
function zf(i, t, e) {
  const s = e.label;
  s.backgroundColor = "transparent", s.callout.display = !1;
  const n = rn(s.position), o = pt(s.padding), r = Qi(i.ctx, s), a = Ff({ properties: t, options: e }, r, n, o), l = Wf({ properties: t, options: e }, r, n, o), c = r.width + o.width, d = r.height + o.height;
  return {
    x: a,
    y: l,
    x2: a + c,
    y2: l + d,
    width: c,
    height: d,
    centerX: a + c / 2,
    centerY: l + d / 2,
    rotation: s.rotation
  };
}
const Ls = ["enter", "leave"], ln = Ls.concat("click");
function Gf(i, t, e) {
  t.listened = da(e, ln, t.listeners), t.moveListened = !1, Ls.forEach((s) => {
    At(e[s]) && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((s) => {
    !t.listened && At(s.click) && (t.listened = !0), t.moveListened || Ls.forEach((n) => {
      At(s[n]) && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function jf(i, t, e) {
  if (i.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return Uf(i, t, e);
      case "click":
        return Xf(i, t, e);
    }
}
function Uf(i, t, e) {
  if (!i.moveListened)
    return;
  let s;
  t.type === "mousemove" ? s = nn(i.visibleElements, t, e.interaction) : s = [];
  const n = i.hovered;
  i.hovered = s;
  const o = { state: i, event: t };
  let r = Ho(o, "leave", n, s);
  return Ho(o, "enter", s, n) || r;
}
function Ho({ state: i, event: t }, e, s, n) {
  let o;
  for (const r of s)
    n.indexOf(r) < 0 && (o = xa(r.options[e] || i.listeners[e], r, t) || o);
  return o;
}
function Xf(i, t, e) {
  const s = i.listeners, n = nn(i.visibleElements, t, e.interaction);
  let o;
  for (const r of n)
    o = xa(r.options.click || s.click, r, t) || o;
  return o;
}
function xa(i, t, e) {
  return nt(i, [t.$context, e]) === !0;
}
const Fi = ["afterDraw", "beforeDraw"];
function Yf(i, t, e) {
  const s = t.visibleElements;
  t.hooked = da(e, Fi, t.hooks), t.hooked || s.forEach((n) => {
    t.hooked || Fi.forEach((o) => {
      At(n.options[o]) && (t.hooked = !0);
    });
  });
}
function Fo(i, t, e) {
  if (i.hooked) {
    const s = t.options[e] || i.hooks[e];
    return nt(s, [t.$context]);
  }
}
function $f(i, t, e) {
  const s = Qf(i.scales, t, e);
  let n = Wo(t, s, "min", "suggestedMin");
  n = Wo(t, s, "max", "suggestedMax") || n, n && At(t.handleTickRangeOptions) && t.handleTickRangeOptions();
}
function Zf(i, t) {
  for (const e of i)
    qf(e, t);
}
function Wo(i, t, e, s) {
  if (gt(t[e]) && !Kf(i.options, e, s)) {
    const n = i[e] !== t[e];
    return i[e] = t[e], n;
  }
}
function Kf(i, t, e) {
  return It(i[t]) || It(i[e]);
}
function qf(i, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const s = fe(t, i, e);
    s && !t[s] && Jf(i, e) && console.warn(`No scale found with id '${s}' for annotation '${i.id}'`);
  }
}
function Jf(i, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const s of ["Min", "Max", "Value"])
    if (It(i[e + s]))
      return !0;
  return !1;
}
function Qf(i, t, e) {
  const s = t.axis, n = t.id, o = s + "ScaleID", r = {
    min: z(t.min, Number.NEGATIVE_INFINITY),
    max: z(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === n ? zo(a, t, ["value", "endValue"], r) : fe(i, a, o) === n && zo(a, t, [s + "Min", s + "Max", s + "Value"], r);
  return r;
}
function zo(i, t, e, s) {
  for (const n of e) {
    const o = i[n];
    if (It(o)) {
      const r = t.parse(o);
      s.min = Math.min(s.min, r), s.max = Math.max(s.max, r);
    }
  }
}
class Pe extends St {
  inRange(t, e, s, n) {
    const { x: o, y: r } = ge({ x: t, y: e }, this.getCenterPoint(n), ft(-this.options.rotation));
    return ea({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], n), s, this.options);
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    t.save(), Ji(t, this.getCenterPoint(), this.options.rotation), ha(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return _a(t, e);
  }
}
Pe.id = "boxAnnotation";
Pe.defaults = {
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
Pe.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
Pe.descriptors = {
  label: {
    _fallback: !0
  }
};
class ts extends St {
  inRange(t, e, s, n) {
    return ia(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: 0, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const e = this.options;
    !e.display || !e.content || (og(t, this), t.save(), Ji(t, this.getCenterPoint(), this.rotation), fa(t, this, e, this._fitRatio), t.restore());
  }
  resolveElementProperties(t, e) {
    const s = tg(t, e);
    if (!s)
      return {};
    const { controllerMeta: n, point: o, radius: r } = ig(t, e, s);
    let a = Qi(t.ctx, e);
    const l = sg(a, r);
    aa(e, l) && (a = { width: a.width * l, height: a.height * l });
    const { position: c, xAdjust: d, yAdjust: u } = e, h = ra(o, a, { borderWidth: 0, position: c, xAdjust: d, yAdjust: u });
    return {
      initProperties: ke(t, h, e),
      ...h,
      ...n,
      rotation: e.rotation,
      _fitRatio: l
    };
  }
}
ts.id = "doughnutLabelAnnotation";
ts.defaults = {
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
ts.defaultRoutes = {};
function tg(i, t) {
  return i.getSortedVisibleDatasetMetas().reduce(function(e, s) {
    const n = s.controller;
    return n instanceof en && eg(i, t, s.data) && (!e || n.innerRadius < e.controller.innerRadius) && n.options.circumference >= 90 ? s : e;
  }, void 0);
}
function eg(i, t, e) {
  if (!t.autoHide)
    return !0;
  for (let s = 0; s < e.length; s++)
    if (!e[s].hidden && i.getDataVisibility(s))
      return !0;
}
function ig({ chartArea: i }, t, e) {
  const { left: s, top: n, right: o, bottom: r } = i, { innerRadius: a, offsetX: l, offsetY: c } = e.controller, d = (s + o) / 2 + l, u = (n + r) / 2 + c, h = {
    left: Math.max(d - a, s),
    right: Math.min(d + a, o),
    top: Math.max(u - a, n),
    bottom: Math.min(u + a, r)
  }, f = {
    x: (h.left + h.right) / 2,
    y: (h.top + h.bottom) / 2
  }, g = t.spacing + t.borderWidth / 2, p = a - g, m = f.y > u, y = m ? n + g : r - g, v = ng(y, d, u, p);
  return {
    controllerMeta: {
      _centerX: d,
      _centerY: u,
      _radius: p,
      _counterclockwise: m,
      ...v
    },
    point: f,
    radius: Math.min(a, Math.min(h.right - h.left, h.bottom - h.top) / 2)
  };
}
function sg({ width: i, height: t }, e) {
  const s = Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
  return e * 2 / s;
}
function ng(i, t, e, s) {
  const n = Math.pow(e - i, 2), o = Math.pow(s, 2), r = t * -2, a = Math.pow(t, 2) + n - o, l = Math.pow(r, 2) - 4 * a;
  if (l <= 0)
    return {
      _startAngle: 0,
      _endAngle: at
    };
  const c = (-r - Math.sqrt(l)) / 2, d = (-r + Math.sqrt(l)) / 2;
  return {
    _startAngle: Pi({ x: t, y: e }, { x: c, y: i }).angle,
    _endAngle: Pi({ x: t, y: e }, { x: d, y: i }).angle
  };
}
function og(i, t) {
  const { _centerX: e, _centerY: s, _radius: n, _startAngle: o, _endAngle: r, _counterclockwise: a, options: l } = t;
  i.save();
  const c = jt(i, l);
  i.fillStyle = l.backgroundColor, i.beginPath(), i.arc(e, s, n, o, r, a), i.closePath(), i.fill(), c && i.stroke(), i.restore();
}
class ai extends St {
  inRange(t, e, s, n) {
    return ia(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: this.options.borderWidth, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const e = this.options, s = !It(this._visible) || this._visible;
    !e.display || !e.content || !s || (t.save(), Ji(t, this.getCenterPoint(), this.rotation), If(t, this), ha(t, this, e), fa(t, rg(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let s;
    if (ca(e))
      s = ma(t, e);
    else {
      const { centerX: a, centerY: l } = an(t, e);
      s = { x: a, y: l };
    }
    const n = pt(e.padding), o = Qi(t.ctx, e), r = ra(s, o, e, n);
    return {
      initProperties: ke(t, r, e),
      pointX: s.x,
      pointY: s.y,
      ...r,
      rotation: e.rotation
    };
  }
}
ai.id = "labelAnnotation";
ai.defaults = {
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
ai.defaultRoutes = {
  borderColor: "color"
};
function rg({ x: i, y: t, width: e, height: s, options: n }) {
  const o = n.borderWidth / 2, r = pt(n.padding);
  return {
    x: i + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - n.borderWidth,
    height: s - r.top - r.bottom - n.borderWidth
  };
}
const cn = (i, t, e) => ({ x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) }), ks = (i, t, e) => cn(t, e, Math.abs((i - t.y) / (e.y - t.y))).x, Go = (i, t, e) => cn(t, e, Math.abs((i - t.x) / (e.x - t.x))).y, Ye = (i) => i * i, ag = (i, t, { x: e, y: s, x2: n, y2: o }, r) => r === "y" ? { start: Math.min(s, o), end: Math.max(s, o), value: t } : { start: Math.min(e, n), end: Math.max(e, n), value: i }, jo = (i, t, e, s) => (1 - s) * (1 - s) * i + 2 * (1 - s) * s * t + s * s * e, Ms = (i, t, e, s) => ({ x: jo(i.x, t.x, e.x, s), y: jo(i.y, t.y, e.y, s) }), Uo = (i, t, e, s) => 2 * (1 - s) * (t - i) + 2 * s * (e - t), Xo = (i, t, e, s) => -Math.atan2(Uo(i.x, t.x, e.x, s), Uo(i.y, t.y, e.y, s)) + 0.5 * Y;
class li extends St {
  inRange(t, e, s, n) {
    const o = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y") {
      const r = { mouseX: t, mouseY: e }, { path: a, ctx: l } = this;
      if (a) {
        jt(l, this.options), l.lineWidth += this.options.hitTolerance;
        const { chart: d } = this.$context, u = t * d.currentDevicePixelRatio, h = e * d.currentDevicePixelRatio, f = l.isPointInStroke(a, u, h) || Ps(this, r, n);
        return l.restore(), f;
      }
      const c = Ye(o);
      return ug(this, r, c, n) || Ps(this, r, n);
    }
    return lg(this, { mouseX: t, mouseY: e }, s, { hitSize: o, useFinalPosition: n });
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const { x: e, y: s, x2: n, y2: o, cp: r, options: a } = this;
    if (t.save(), !jt(t, a))
      return t.restore();
    Me(t, a);
    const l = Math.sqrt(Math.pow(n - e, 2) + Math.pow(o - s, 2));
    if (a.curve && r)
      return yg(t, this, r, l), t.restore();
    const { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = va(this), f = Math.atan2(o - s, n - e);
    t.translate(e, s), t.rotate(f), t.beginPath(), t.moveTo(0 + u, 0), t.lineTo(l - h, 0), t.shadowColor = a.borderShadowColor, t.stroke(), Ns(t, 0, u, c), Ns(t, l, -h, d), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const s = Nf(t, e), { x: n, y: o, x2: r, y2: a } = s, l = cg(s, t.chartArea), c = l ? dg({ x: n, y: o }, { x: r, y: a }, t.chartArea) : { x: n, y: o, x2: r, y2: a, width: Math.abs(r - n), height: Math.abs(a - o) };
    if (c.centerX = (r + n) / 2, c.centerY = (a + o) / 2, c.initProperties = ke(t, c, e), e.curve) {
      const u = { x: c.x, y: c.y }, h = { x: c.x2, y: c.y2 };
      c.cp = _g(c, e, we(u, h));
    }
    const d = hg(t, c, e.label);
    return d._visible = l, c.elements = [{
      type: "label",
      optionScope: "label",
      properties: d,
      initProperties: c.initProperties
    }], c;
  }
}
li.id = "lineAnnotation";
const Yo = {
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
li.defaults = {
  adjustScaleRange: !0,
  arrowHeads: {
    display: !1,
    end: Object.assign({}, Yo),
    fill: !1,
    length: 12,
    start: Object.assign({}, Yo),
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
    callout: Object.assign({}, ai.defaults.callout),
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
li.descriptors = {
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
li.defaultRoutes = {
  borderColor: "color"
};
function lg(i, { mouseX: t, mouseY: e }, s, { hitSize: n, useFinalPosition: o }) {
  const r = ag(t, e, i.getProps(["x", "y", "x2", "y2"], o), s);
  return ta(r, n) || Ps(i, { mouseX: t, mouseY: e }, o, s);
}
function cg({ x: i, y: t, x2: e, y2: s }, { top: n, right: o, bottom: r, left: a }) {
  return !(i < a && e < a || i > o && e > o || t < n && s < n || t > r && s > r);
}
function $o({ x: i, y: t }, e, { top: s, right: n, bottom: o, left: r }) {
  return i < r && (t = Go(r, { x: i, y: t }, e), i = r), i > n && (t = Go(n, { x: i, y: t }, e), i = n), t < s && (i = ks(s, { x: i, y: t }, e), t = s), t > o && (i = ks(o, { x: i, y: t }, e), t = o), { x: i, y: t };
}
function dg(i, t, e) {
  const { x: s, y: n } = $o(i, t, e), { x: o, y: r } = $o(t, i, e);
  return { x: s, y: n, x2: o, y2: r, width: Math.abs(o - s), height: Math.abs(r - n) };
}
function ug(i, { mouseX: t, mouseY: e }, s = ae, n) {
  const { x: o, y: r, x2: a, y2: l } = i.getProps(["x", "y", "x2", "y2"], n), c = a - o, d = l - r, u = Ye(c) + Ye(d), h = u === 0 ? -1 : ((t - o) * c + (e - r) * d) / u;
  let f, g;
  return h < 0 ? (f = o, g = r) : h > 1 ? (f = a, g = l) : (f = o + h * c, g = r + h * d), Ye(t - f) + Ye(e - g) <= s;
}
function Ps(i, { mouseX: t, mouseY: e }, s, n) {
  const o = i.label;
  return o.options.display && o.inRange(t, e, n, s);
}
function hg(i, t, e) {
  const s = e.borderWidth, n = pt(e.padding), o = Qi(i.ctx, e), r = o.width + n.width + s, a = o.height + n.height + s;
  return gg(t, e, { width: r, height: a, padding: n }, i.chartArea);
}
function fg(i) {
  const { x: t, y: e, x2: s, y2: n } = i, o = Math.atan2(n - e, s - t);
  return o > Y / 2 ? o - Y : o < Y / -2 ? o + Y : o;
}
function gg(i, t, e, s) {
  const { width: n, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: i.x, y: i.y }, d = { x: i.x2, y: i.y2 }, u = t.rotation === "auto" ? fg(i) : ft(t.rotation), h = pg(n, o, u), f = mg(i, t, { labelSize: h, padding: r }, s), g = i.cp ? Ms(c, i.cp, d, f) : cn(c, d, f), p = { size: h.w, min: s.left, max: s.right, padding: r.left }, m = { size: h.h, min: s.top, max: s.bottom, padding: r.top }, y = Ko(g.x, p) + a, v = Ko(g.y, m) + l;
  return {
    x: y - n / 2,
    y: v - o / 2,
    x2: y + n / 2,
    y2: v + o / 2,
    centerX: y,
    centerY: v,
    pointX: g.x,
    pointY: g.y,
    width: n,
    height: o,
    rotation: Gi(u)
  };
}
function pg(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e);
  return {
    w: Math.abs(i * s) + Math.abs(t * n),
    h: Math.abs(i * n) + Math.abs(t * s)
  };
}
function mg(i, t, e, s) {
  let n;
  const o = bg(i, s);
  return t.position === "start" ? n = Zo({ w: i.x2 - i.x, h: i.y2 - i.y }, e, t, o) : t.position === "end" ? n = 1 - Zo({ w: i.x - i.x2, h: i.y - i.y2 }, e, t, o) : n = on(1, t.position), n;
}
function Zo(i, t, e, s) {
  const { labelSize: n, padding: o } = t, r = i.w * s.dx, a = i.h * s.dy, l = r > 0 && (n.w / 2 + o.left - s.x) / r, c = a > 0 && (n.h / 2 + o.top - s.y) / a;
  return Ki(Math.max(l, c), 0, 0.25);
}
function bg(i, t) {
  const { x: e, x2: s, y: n, y2: o } = i, r = Math.min(n, o) - t.top, a = Math.min(e, s) - t.left, l = t.bottom - Math.max(n, o), c = t.right - Math.max(e, s);
  return {
    x: Math.min(a, c),
    y: Math.min(r, l),
    dx: a <= c ? 1 : -1,
    dy: r <= l ? 1 : -1
  };
}
function Ko(i, t) {
  const { size: e, min: s, max: n, padding: o } = t, r = e / 2;
  return e > n - s ? (n + s) / 2 : (s >= i - o - r && (i = s + o + r), n <= i + o + r && (i = n - o - r), i);
}
function va(i) {
  const t = i.options, e = t.arrowHeads && t.arrowHeads.start, s = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: e,
    endOpts: s,
    startAdjust: qo(i, e),
    endAdjust: qo(i, s)
  };
}
function qo(i, t) {
  if (!t || !t.display)
    return 0;
  const { length: e, width: s } = t, n = i.options.borderWidth / 2, o = { x: e, y: s + n };
  return Math.abs(ks(0, o, { x: 0, y: n }));
}
function Ns(i, t, e, s) {
  if (!s || !s.display)
    return;
  const { length: n, width: o, fill: r, backgroundColor: a, borderColor: l } = s, c = Math.abs(t - n) + e;
  i.beginPath(), Me(i, s), jt(i, s), i.moveTo(c, -o), i.lineTo(t + e, 0), i.lineTo(c, o), r === !0 ? (i.fillStyle = a || l, i.closePath(), i.fill(), i.shadowColor = "transparent") : i.shadowColor = s.borderShadowColor, i.stroke();
}
function _g(i, t, e) {
  const { x: s, y: n, x2: o, y2: r, centerX: a, centerY: l } = i, c = Math.atan2(r - n, o - s), d = rn(t.controlPoint, 0), u = {
    x: a + te(e, d.x, !1),
    y: l + te(e, d.y, !1)
  };
  return ge(u, { x: a, y: l }, c);
}
function Jo(i, { x: t, y: e }, { angle: s, adjust: n }, o) {
  !o || !o.display || (i.save(), i.translate(t, e), i.rotate(s), Ns(i, 0, -n, o), i.restore());
}
function yg(i, t, e, s) {
  const { x: n, y: o, x2: r, y2: a, options: l } = t, { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = va(t), f = { x: n, y: o }, g = { x: r, y: a }, p = Xo(f, e, g, 0), m = Xo(f, e, g, 1) - Y, y = Ms(f, e, g, u / s), v = Ms(f, e, g, 1 - h / s), E = new Path2D();
  i.beginPath(), E.moveTo(y.x, y.y), E.quadraticCurveTo(e.x, e.y, v.x, v.y), i.shadowColor = l.borderShadowColor, i.stroke(E), t.path = E, t.ctx = i, Jo(i, y, { angle: p, adjust: u }, c), Jo(i, v, { angle: m, adjust: h }, d);
}
class ci extends St {
  inRange(t, e, s, n) {
    const o = this.options.rotation, r = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y")
      return xg({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], n), o, r);
    const { x: a, y: l, x2: c, y2: d } = this.getProps(["x", "y", "x2", "y2"], n), u = s === "y" ? { start: l, end: d } : { start: a, end: c }, h = ge({ x: t, y: e }, this.getCenterPoint(n), ft(-o));
    return h[s] >= u.start - r - ae && h[s] <= u.end + r + ae;
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const { width: e, height: s, centerX: n, centerY: o, options: r } = this;
    t.save(), Ji(t, this.getCenterPoint(), r.rotation), Me(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = jt(t, r);
    t.ellipse(n, o, s / 2, e / 2, Y / 2, 0, 2 * Y), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return _a(t, e);
  }
}
ci.id = "ellipseAnnotation";
ci.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  label: Object.assign({}, Pe.defaults.label),
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
ci.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
ci.descriptors = {
  label: {
    _fallback: !0
  }
};
function xg(i, t, e, s) {
  const { width: n, height: o, centerX: r, centerY: a } = t, l = n / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const d = ft(e || 0), u = Math.cos(d), h = Math.sin(d), f = Math.pow(u * (i.x - r) + h * (i.y - a), 2), g = Math.pow(h * (i.x - r) - u * (i.y - a), 2);
  return f / Math.pow(l + s, 2) + g / Math.pow(c + s, 2) <= 1.0001;
}
class es extends St {
  inRange(t, e, s, n) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], n), d = (this.options.borderWidth + this.options.hitTolerance) / 2;
    return s !== "x" && s !== "y" ? gf({ x: t, y: e }, this.getCenterPoint(n), c / 2, d) : ta(s === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t }, d);
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const e = this.options, s = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, Me(t, e);
    const n = jt(t, e);
    Sf(t, this, this.centerX, this.centerY), n && !qi(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = s;
  }
  resolveElementProperties(t, e) {
    const s = ba(t, e);
    return s.initProperties = ke(t, s, e), s;
  }
}
es.id = "pointAnnotation";
es.defaults = {
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
es.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class is extends St {
  inRange(t, e, s, n) {
    if (s !== "x" && s !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && Sg(this.elements, t, e, n);
    const o = ge({ x: t, y: e }, this.getCenterPoint(n), ft(-this.options.rotation)), r = this.elements.map((c) => s === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[s] >= a && o[s] <= l;
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const { elements: e, options: s } = this;
    t.save(), t.beginPath(), t.fillStyle = s.backgroundColor, Me(t, s);
    const n = jt(t, s);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), n && (t.shadowColor = s.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const s = ba(t, e), { sides: n, rotation: o } = e, r = [], a = 2 * Y / n;
    let l = o * Gs;
    for (let c = 0; c < n; c++, l += a) {
      const d = vg(s, e, l);
      d.initProperties = ke(t, s, e), r.push(d);
    }
    return s.elements = r, s;
  }
}
is.id = "polygonAnnotation";
is.defaults = {
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
is.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
function vg({ centerX: i, centerY: t }, { radius: e, borderWidth: s, hitTolerance: n }, o) {
  const r = (s + n) / 2, a = Math.sin(o), l = Math.cos(o), c = { x: i + a * e, y: t - l * e };
  return {
    type: "point",
    optionScope: "point",
    properties: {
      x: c.x,
      y: c.y,
      centerX: c.x,
      centerY: c.y,
      bX: i + a * (e + r),
      bY: t - l * (e + r)
    }
  };
}
function Sg(i, t, e, s) {
  let n = !1, o = i[i.length - 1].getProps(["bX", "bY"], s);
  for (const r of i) {
    const a = r.getProps(["bX", "bY"], s);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (n = !n), o = a;
  }
  return n;
}
const Jt = {
  box: Pe,
  doughnutLabel: ts,
  ellipse: ci,
  label: ai,
  line: li,
  point: es,
  polygon: is
};
Object.keys(Jt).forEach((i) => {
  ut.describe(`elements.${Jt[i].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Tg = {
  update: Object.assign
}, Eg = ln.concat(Fi), Qo = (i, t) => $(t) ? Bs(i, t) : i, Vs = (i) => i === "color" || i === "font";
function dn(i = "line") {
  return Jt[i] ? i : (console.warn(`Unknown annotation type: '${i}', defaulting to 'line'`), "line");
}
function wg(i, t, e, s) {
  const n = Ag(i, e.animations, s), o = t.annotations, r = Rg(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = Sa(r, a, l.type), d = l.setContext(Og(i, c, r, l)), u = c.resolveElementProperties(i, d);
    u.skip = Cg(u), "elements" in u && (Ig(c, u.elements, d, n), delete u.elements), It(c.x) || Object.assign(c, u), Object.assign(c, u.initProperties), u.options = Ta(d), n.update(c, u);
  }
}
function Cg(i) {
  return isNaN(i.x) || isNaN(i.y);
}
function Ag(i, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? Tg : new tn(i, t);
}
function Ig(i, t, e, s) {
  const n = i.elements || (i.elements = []);
  n.length = t.length;
  for (let o = 0; o < t.length; o++) {
    const r = t[o], a = r.properties, l = Sa(n, o, r.type, r.initProperties), c = e[r.optionScope].override(r);
    a.options = Ta(c), s.update(l, a);
  }
}
function Sa(i, t, e, s) {
  const n = Jt[dn(e)];
  let o = i[t];
  return (!o || !(o instanceof n)) && (o = i[t] = new n(), Object.assign(o, s)), o;
}
function Ta(i) {
  const t = Jt[dn(i.type)], e = {};
  e.id = i.id, e.type = i.type, e.drawTime = i.drawTime, Object.assign(
    e,
    Bs(i, t.defaults),
    Bs(i, t.defaultRoutes)
  );
  for (const s of Eg)
    e[s] = i[s];
  return e;
}
function Bs(i, t) {
  const e = {};
  for (const s of Object.keys(t)) {
    const n = t[s], o = i[s];
    Vs(s) && st(o) ? e[s] = o.map((r) => Qo(r, n)) : e[s] = Qo(o, n);
  }
  return e;
}
function Og(i, t, e, s) {
  return t.$context || (t.$context = Object.assign(Object.create(i.getContext()), {
    element: t,
    get elements() {
      return e.filter((n) => n && n.options);
    },
    id: s.id,
    type: "annotation"
  }));
}
function Rg(i, t) {
  const e = t.length, s = i.length;
  if (s < e) {
    const n = e - s;
    i.splice(s, 0, ...new Array(n));
  } else s > e && i.splice(e, s - e);
  return i;
}
var Dg = "3.1.0";
const Xt = /* @__PURE__ */ new Map(), tr = (i) => i.type !== "doughnutLabel", Lg = ln.concat(Fi);
var kg = {
  id: "annotation",
  version: Dg,
  beforeRegister() {
    pf("chart.js", "4.0", ce.version);
  },
  afterRegister() {
    ce.register(Jt);
  },
  afterUnregister() {
    ce.unregister(Jt);
  },
  beforeInit(i) {
    Xt.set(i, {
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
  beforeUpdate(i, t, e) {
    const s = Xt.get(i), n = s.annotations = [];
    let o = e.annotations;
    $(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      $(a) && (a.id = r, n.push(a));
    }) : st(o) && n.push(...o), Zf(n.filter(tr), i.scales);
  },
  afterDataLimits(i, t) {
    const e = Xt.get(i);
    $f(i, t.scale, e.annotations.filter(tr).filter((s) => s.display && s.adjustScaleRange));
  },
  afterUpdate(i, t, e) {
    const s = Xt.get(i);
    Gf(i, s, e), wg(i, s, e, t.mode), s.visibleElements = s.elements.filter((n) => !n.skip && n.options.display), Yf(i, s, e);
  },
  beforeDatasetsDraw(i, t, e) {
    Ge(i, "beforeDatasetsDraw", e.clip);
  },
  afterDatasetsDraw(i, t, e) {
    Ge(i, "afterDatasetsDraw", e.clip);
  },
  beforeDatasetDraw(i, t, e) {
    Ge(i, t.index, e.clip);
  },
  beforeDraw(i, t, e) {
    Ge(i, "beforeDraw", e.clip);
  },
  afterDraw(i, t, e) {
    Ge(i, "afterDraw", e.clip);
  },
  beforeEvent(i, t, e) {
    const s = Xt.get(i);
    jf(s, t.event, e) && (t.changed = !0);
  },
  afterDestroy(i) {
    Xt.delete(i);
  },
  getAnnotations(i) {
    const t = Xt.get(i);
    return t ? t.elements : [];
  },
  // only for testing
  _getAnnotationElementsAtEventForMode(i, t, e) {
    return nn(i, t, e);
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
    _scriptable: (i) => !Lg.includes(i) && i !== "init",
    annotations: {
      _allKeys: !1,
      _fallback: (i, t) => `elements.${Jt[dn(t.type)].id}`
    },
    interaction: {
      _fallback: !0
    },
    common: {
      label: {
        _indexable: Vs,
        _fallback: !0
      },
      _indexable: Vs
    }
  },
  additionalOptionScopes: [""]
};
function Ge(i, t, e) {
  const { ctx: s, chartArea: n } = i, o = Xt.get(i);
  e && oi(s, n);
  const r = Mg(o.visibleElements, t).sort((a, l) => a.element.options.z - l.element.options.z);
  for (const a of r)
    Pg(s, n, o, a);
  e && ri(s);
}
function Mg(i, t) {
  const e = [];
  for (const s of i)
    if (s.options.drawTime === t && e.push({ element: s, main: !0 }), s.elements && s.elements.length)
      for (const n of s.elements)
        n.options.display && n.options.drawTime === t && e.push({ element: n });
  return e;
}
function Pg(i, t, e, s) {
  const n = s.element;
  s.main ? (Fo(e, n, "beforeDraw"), n.draw(i, t), Fo(e, n, "afterDraw")) : n.draw(i, t);
}
class D extends rr {
  // Feature ID Constants (eLiterals)
  static SERIES_INDEX = 0;
  static LABEL = 1;
  static CHART_TYPE = 2;
  static X_AXIS_ID = 3;
  static Y_AXIS_ID = 4;
  static Y_AXIS_TITLE = 5;
  static BORDER_COLOR = 6;
  static BACKGROUND_COLOR = 7;
  static BORDER_WIDTH = 8;
  static BORDER_DASH = 9;
  static FILL = 10;
  static SHOW_POINTS = 11;
  static POINT_COLOR = 12;
  static POINT_SIZE = 13;
  // Private fields
  _seriesIndex = new C();
  _label;
  _chartType = new C();
  _xAxisId = new C();
  _yAxisId = new C();
  _yAxisTitle = new C();
  _borderColor;
  _backgroundColor;
  _borderWidth;
  _borderDash;
  _fill;
  _showPoints;
  _pointColor;
  _pointSize;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.SERIES_SETTINGS;
  }
  // Getters and Setters
  get seriesIndex() {
    return this._seriesIndex;
  }
  set seriesIndex(t) {
    const e = this._seriesIndex;
    this._seriesIndex = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.SERIES_INDEX),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.SERIES_INDEX,
      merge: () => !1
    });
  }
  get label() {
    return this._label;
  }
  set label(t) {
    const e = this._label;
    this._label = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.LABEL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.LABEL,
      merge: () => !1
    });
  }
  get chartType() {
    return this._chartType;
  }
  set chartType(t) {
    const e = this._chartType;
    this._chartType = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.CHART_TYPE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.CHART_TYPE,
      merge: () => !1
    });
  }
  get xAxisId() {
    return this._xAxisId;
  }
  set xAxisId(t) {
    const e = this._xAxisId;
    this._xAxisId = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.X_AXIS_ID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.X_AXIS_ID,
      merge: () => !1
    });
  }
  get yAxisId() {
    return this._yAxisId;
  }
  set yAxisId(t) {
    const e = this._yAxisId;
    this._yAxisId = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.Y_AXIS_ID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.Y_AXIS_ID,
      merge: () => !1
    });
  }
  get yAxisTitle() {
    return this._yAxisTitle;
  }
  set yAxisTitle(t) {
    const e = this._yAxisTitle;
    this._yAxisTitle = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.Y_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.Y_AXIS_TITLE,
      merge: () => !1
    });
  }
  get borderColor() {
    return this._borderColor;
  }
  set borderColor(t) {
    const e = this._borderColor;
    this._borderColor = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.BORDER_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.BORDER_COLOR,
      merge: () => !1
    });
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(t) {
    const e = this._backgroundColor;
    this._backgroundColor = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.BACKGROUND_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get borderWidth() {
    return this._borderWidth;
  }
  set borderWidth(t) {
    const e = this._borderWidth;
    this._borderWidth = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.BORDER_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.BORDER_WIDTH,
      merge: () => !1
    });
  }
  get borderDash() {
    return this._borderDash;
  }
  set borderDash(t) {
    const e = this._borderDash;
    this._borderDash = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.BORDER_DASH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.BORDER_DASH,
      merge: () => !1
    });
  }
  get fill() {
    return this._fill;
  }
  set fill(t) {
    const e = this._fill;
    this._fill = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.FILL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.FILL,
      merge: () => !1
    });
  }
  get showPoints() {
    return this._showPoints;
  }
  set showPoints(t) {
    const e = this._showPoints;
    this._showPoints = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.SHOW_POINTS),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.SHOW_POINTS,
      merge: () => !1
    });
  }
  get pointColor() {
    return this._pointColor;
  }
  set pointColor(t) {
    const e = this._pointColor;
    this._pointColor = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.POINT_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.POINT_COLOR,
      merge: () => !1
    });
  }
  get pointSize() {
    return this._pointSize;
  }
  set pointSize(t) {
    const e = this._pointSize;
    this._pointSize = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(D.POINT_SIZE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => D.POINT_SIZE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case D.SERIES_INDEX:
        return this.seriesIndex;
      case D.LABEL:
        return this.label;
      case D.CHART_TYPE:
        return this.chartType;
      case D.X_AXIS_ID:
        return this.xAxisId;
      case D.Y_AXIS_ID:
        return this.yAxisId;
      case D.Y_AXIS_TITLE:
        return this.yAxisTitle;
      case D.BORDER_COLOR:
        return this.borderColor;
      case D.BACKGROUND_COLOR:
        return this.backgroundColor;
      case D.BORDER_WIDTH:
        return this.borderWidth;
      case D.BORDER_DASH:
        return this.borderDash;
      case D.FILL:
        return this.fill;
      case D.SHOW_POINTS:
        return this.showPoints;
      case D.POINT_COLOR:
        return this.pointColor;
      case D.POINT_SIZE:
        return this.pointSize;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, e) {
    switch (this.eClass().getFeatureID(t)) {
      case D.SERIES_INDEX:
        this.seriesIndex = e, super.eSet(t, e);
        break;
      case D.LABEL:
        this.label = e, super.eSet(t, e);
        break;
      case D.CHART_TYPE:
        this.chartType = e, super.eSet(t, e);
        break;
      case D.X_AXIS_ID:
        this.xAxisId = e, super.eSet(t, e);
        break;
      case D.Y_AXIS_ID:
        this.yAxisId = e, super.eSet(t, e);
        break;
      case D.Y_AXIS_TITLE:
        this.yAxisTitle = e, super.eSet(t, e);
        break;
      case D.BORDER_COLOR:
        this.borderColor = e, super.eSet(t, e);
        break;
      case D.BACKGROUND_COLOR:
        this.backgroundColor = e, super.eSet(t, e);
        break;
      case D.BORDER_WIDTH:
        this.borderWidth = e, super.eSet(t, e);
        break;
      case D.BORDER_DASH:
        this.borderDash = e, super.eSet(t, e);
        break;
      case D.FILL:
        this.fill = e, super.eSet(t, e);
        break;
      case D.SHOW_POINTS:
        this.showPoints = e, super.eSet(t, e);
        break;
      case D.POINT_COLOR:
        this.pointColor = e, super.eSet(t, e);
        break;
      case D.POINT_SIZE:
        this.pointSize = e, super.eSet(t, e);
        break;
      default:
        super.eSet(t, e);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case D.SERIES_INDEX:
        return this._seriesIndex !== new C();
      case D.LABEL:
        return this._label !== void 0;
      case D.CHART_TYPE:
        return this._chartType !== new C();
      case D.X_AXIS_ID:
        return this._xAxisId !== new C();
      case D.Y_AXIS_ID:
        return this._yAxisId !== new C();
      case D.Y_AXIS_TITLE:
        return this._yAxisTitle !== new C();
      case D.BORDER_COLOR:
        return this._borderColor !== void 0;
      case D.BACKGROUND_COLOR:
        return this._backgroundColor !== void 0;
      case D.BORDER_WIDTH:
        return this._borderWidth !== void 0;
      case D.BORDER_DASH:
        return this._borderDash !== void 0;
      case D.FILL:
        return this._fill !== void 0;
      case D.SHOW_POINTS:
        return this._showPoints !== void 0;
      case D.POINT_COLOR:
        return this._pointColor !== void 0;
      case D.POINT_SIZE:
        return this._pointSize !== void 0;
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case D.SERIES_INDEX:
        this._seriesIndex = new C();
        return;
      case D.LABEL:
        this._label = void 0;
        return;
      case D.CHART_TYPE:
        this._chartType = new C();
        return;
      case D.X_AXIS_ID:
        this._xAxisId = new C();
        return;
      case D.Y_AXIS_ID:
        this._yAxisId = new C();
        return;
      case D.Y_AXIS_TITLE:
        this._yAxisTitle = new C();
        return;
      case D.BORDER_COLOR:
        this._borderColor = void 0;
        return;
      case D.BACKGROUND_COLOR:
        this._backgroundColor = void 0;
        return;
      case D.BORDER_WIDTH:
        this._borderWidth = void 0;
        return;
      case D.BORDER_DASH:
        this._borderDash = void 0;
        return;
      case D.FILL:
        this._fill = void 0;
        return;
      case D.SHOW_POINTS:
        this._showPoints = void 0;
        return;
      case D.POINT_COLOR:
        this._pointColor = void 0;
        return;
      case D.POINT_SIZE:
        this._pointSize = void 0;
        return;
      default:
        super.eUnset(t);
    }
  }
}
class un extends Fa {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new un()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(R.eINSTANCE);
  }
  /**
   * Create a new SeriesSettings instance
   */
  createSeriesSettings() {
    return new D();
  }
  /**
   * Create a new ChartSettings instance
   */
  createChartSettings() {
    return new x();
  }
  /**
   * Create an instance of the given class
   */
  create(t) {
    switch (t.getName()) {
      case "SeriesSettings":
        return this.createSeriesSettings();
      case "ChartSettings":
        return this.createChartSettings();
      default:
        throw new Error(`Unknown class: ${t.getName()}`);
    }
  }
}
class R extends Wa {
  static eNAME = "chartsettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.chart";
  static eNS_PREFIX = "chartsettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new R(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    SERIES_SETTINGS: null,
    SERIES_SETTINGS__SERIES_INDEX: null,
    SERIES_SETTINGS__LABEL: null,
    SERIES_SETTINGS__CHART_TYPE: null,
    SERIES_SETTINGS__X_AXIS_ID: null,
    SERIES_SETTINGS__Y_AXIS_ID: null,
    SERIES_SETTINGS__Y_AXIS_TITLE: null,
    SERIES_SETTINGS__BORDER_COLOR: null,
    SERIES_SETTINGS__BACKGROUND_COLOR: null,
    SERIES_SETTINGS__BORDER_WIDTH: null,
    SERIES_SETTINGS__BORDER_DASH: null,
    SERIES_SETTINGS__FILL: null,
    SERIES_SETTINGS__SHOW_POINTS: null,
    SERIES_SETTINGS__POINT_COLOR: null,
    SERIES_SETTINGS__POINT_SIZE: null,
    CHART_SETTINGS: null,
    CHART_SETTINGS__SERIES_SETTINGS: null,
    CHART_SETTINGS__CHART_TYPE: null,
    CHART_SETTINGS__BAR_ORIENTATION: null,
    CHART_SETTINGS__STACKED: null,
    CHART_SETTINGS__BORDER_COLOR: null,
    CHART_SETTINGS__BORDER_WIDTH: null,
    CHART_SETTINGS__BORDER_DASH: null,
    CHART_SETTINGS__BACKGROUND_COLOR: null,
    CHART_SETTINGS__FILL: null,
    CHART_SETTINGS__SHOW_POINTS: null,
    CHART_SETTINGS__POINT_COLOR: null,
    CHART_SETTINGS__POINT_SIZE: null,
    CHART_SETTINGS__SHOW_HORIZONTAL_GRID: null,
    CHART_SETTINGS__HORIZONTAL_GRID_COLOR: null,
    CHART_SETTINGS__HORIZONTAL_GRID_WIDTH: null,
    CHART_SETTINGS__SHOW_VERTICAL_GRID: null,
    CHART_SETTINGS__VERTICAL_GRID_COLOR: null,
    CHART_SETTINGS__VERTICAL_GRID_WIDTH: null,
    CHART_SETTINGS__X_AXIS_TITLE: null,
    CHART_SETTINGS__Y_AXIS_TITLE: null,
    CHART_SETTINGS__ANNOTATIONS_EDIT_MODE: null,
    CHART_SETTINGS__HORIZONTAL_LINES: null,
    CHART_SETTINGS__VERTICAL_LINES: null,
    CHART_SETTINGS__HORIZONTAL_BOXES: null,
    CHART_SETTINGS__VERTICAL_BOXES: null,
    CHART_SETTINGS__DATE_DISPLAY_FORMAT: null
  };
  constructor() {
    super(), this.setName(R.eNAME), this.setNsURI(R.eNS_URI), this.setNsPrefix(R.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    this.setEFactoryInstance(un.eINSTANCE);
    const t = new gn();
    t.setName("SeriesSettings"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), R.Literals.SERIES_SETTINGS = t;
    const e = new tt();
    e.setContainment(!1), e.setName("seriesIndex"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), R.Literals.SERIES_SETTINGS__SERIES_INDEX = e;
    const s = new tt();
    s.setContainment(!1), s.setName("label"), s.setLowerBound(0), s.setUpperBound(1), t.getEStructuralFeatures().push(s), R.Literals.SERIES_SETTINGS__LABEL = s;
    const n = new tt();
    n.setContainment(!1), n.setName("chartType"), n.setLowerBound(0), n.setUpperBound(1), t.getEStructuralFeatures().push(n), R.Literals.SERIES_SETTINGS__CHART_TYPE = n;
    const o = new tt();
    o.setContainment(!1), o.setName("xAxisId"), o.setLowerBound(0), o.setUpperBound(1), t.getEStructuralFeatures().push(o), R.Literals.SERIES_SETTINGS__X_AXIS_ID = o;
    const r = new tt();
    r.setContainment(!1), r.setName("yAxisId"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), R.Literals.SERIES_SETTINGS__Y_AXIS_ID = r;
    const a = new tt();
    a.setContainment(!1), a.setName("yAxisTitle"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), R.Literals.SERIES_SETTINGS__Y_AXIS_TITLE = a;
    const l = new tt();
    l.setContainment(!1), l.setName("borderColor"), l.setLowerBound(0), l.setUpperBound(1), t.getEStructuralFeatures().push(l), R.Literals.SERIES_SETTINGS__BORDER_COLOR = l;
    const c = new tt();
    c.setContainment(!1), c.setName("backgroundColor"), c.setLowerBound(0), c.setUpperBound(1), t.getEStructuralFeatures().push(c), R.Literals.SERIES_SETTINGS__BACKGROUND_COLOR = c;
    const d = new tt();
    d.setContainment(!1), d.setName("borderWidth"), d.setLowerBound(0), d.setUpperBound(1), t.getEStructuralFeatures().push(d), R.Literals.SERIES_SETTINGS__BORDER_WIDTH = d;
    const u = new tt();
    u.setContainment(!1), u.setName("borderDash"), u.setLowerBound(0), u.setUpperBound(1), t.getEStructuralFeatures().push(u), R.Literals.SERIES_SETTINGS__BORDER_DASH = u;
    const h = new tt();
    h.setContainment(!1), h.setName("fill"), h.setLowerBound(0), h.setUpperBound(1), t.getEStructuralFeatures().push(h), R.Literals.SERIES_SETTINGS__FILL = h;
    const f = new tt();
    f.setContainment(!1), f.setName("showPoints"), f.setLowerBound(0), f.setUpperBound(1), t.getEStructuralFeatures().push(f), R.Literals.SERIES_SETTINGS__SHOW_POINTS = f;
    const g = new tt();
    g.setContainment(!1), g.setName("pointColor"), g.setLowerBound(0), g.setUpperBound(1), t.getEStructuralFeatures().push(g), R.Literals.SERIES_SETTINGS__POINT_COLOR = g;
    const p = new tt();
    p.setContainment(!1), p.setName("pointSize"), p.setLowerBound(0), p.setUpperBound(1), t.getEStructuralFeatures().push(p), R.Literals.SERIES_SETTINGS__POINT_SIZE = p;
    const m = new gn();
    m.setName("ChartSettings"), m.setAbstract(!1), m.setInterface(!1), this.getEClassifiers().push(m), m.setEPackage(this), R.Literals.CHART_SETTINGS = m;
    const y = new tt();
    y.setContainment(!0), y.setName("seriesSettings"), y.setLowerBound(0), y.setUpperBound(-1), m.getEStructuralFeatures().push(y), R.Literals.CHART_SETTINGS__SERIES_SETTINGS = y;
    const v = new tt();
    v.setContainment(!1), v.setName("chartType"), v.setLowerBound(0), v.setUpperBound(1), m.getEStructuralFeatures().push(v), R.Literals.CHART_SETTINGS__CHART_TYPE = v;
    const E = new tt();
    E.setContainment(!1), E.setName("barOrientation"), E.setLowerBound(0), E.setUpperBound(1), m.getEStructuralFeatures().push(E), R.Literals.CHART_SETTINGS__BAR_ORIENTATION = E;
    const A = new tt();
    A.setContainment(!1), A.setName("stacked"), A.setLowerBound(0), A.setUpperBound(1), m.getEStructuralFeatures().push(A), R.Literals.CHART_SETTINGS__STACKED = A;
    const T = new tt();
    T.setContainment(!1), T.setName("borderColor"), T.setLowerBound(0), T.setUpperBound(1), m.getEStructuralFeatures().push(T), R.Literals.CHART_SETTINGS__BORDER_COLOR = T;
    const O = new tt();
    O.setContainment(!1), O.setName("borderWidth"), O.setLowerBound(0), O.setUpperBound(1), m.getEStructuralFeatures().push(O), R.Literals.CHART_SETTINGS__BORDER_WIDTH = O;
    const V = new tt();
    V.setContainment(!1), V.setName("borderDash"), V.setLowerBound(0), V.setUpperBound(1), m.getEStructuralFeatures().push(V), R.Literals.CHART_SETTINGS__BORDER_DASH = V;
    const P = new tt();
    P.setContainment(!1), P.setName("backgroundColor"), P.setLowerBound(0), P.setUpperBound(1), m.getEStructuralFeatures().push(P), R.Literals.CHART_SETTINGS__BACKGROUND_COLOR = P;
    const I = new tt();
    I.setContainment(!1), I.setName("fill"), I.setLowerBound(0), I.setUpperBound(1), m.getEStructuralFeatures().push(I), R.Literals.CHART_SETTINGS__FILL = I;
    const S = new tt();
    S.setContainment(!1), S.setName("showPoints"), S.setLowerBound(0), S.setUpperBound(1), m.getEStructuralFeatures().push(S), R.Literals.CHART_SETTINGS__SHOW_POINTS = S;
    const _ = new tt();
    _.setContainment(!1), _.setName("pointColor"), _.setLowerBound(0), _.setUpperBound(1), m.getEStructuralFeatures().push(_), R.Literals.CHART_SETTINGS__POINT_COLOR = _;
    const L = new tt();
    L.setContainment(!1), L.setName("pointSize"), L.setLowerBound(0), L.setUpperBound(1), m.getEStructuralFeatures().push(L), R.Literals.CHART_SETTINGS__POINT_SIZE = L;
    const k = new tt();
    k.setContainment(!1), k.setName("showHorizontalGrid"), k.setLowerBound(0), k.setUpperBound(1), m.getEStructuralFeatures().push(k), R.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID = k;
    const Z = new tt();
    Z.setContainment(!1), Z.setName("horizontalGridColor"), Z.setLowerBound(0), Z.setUpperBound(1), m.getEStructuralFeatures().push(Z), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR = Z;
    const B = new tt();
    B.setContainment(!1), B.setName("horizontalGridWidth"), B.setLowerBound(0), B.setUpperBound(1), m.getEStructuralFeatures().push(B), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH = B;
    const G = new tt();
    G.setContainment(!1), G.setName("showVerticalGrid"), G.setLowerBound(0), G.setUpperBound(1), m.getEStructuralFeatures().push(G), R.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID = G;
    const K = new tt();
    K.setContainment(!1), K.setName("verticalGridColor"), K.setLowerBound(0), K.setUpperBound(1), m.getEStructuralFeatures().push(K), R.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR = K;
    const b = new tt();
    b.setContainment(!1), b.setName("verticalGridWidth"), b.setLowerBound(0), b.setUpperBound(1), m.getEStructuralFeatures().push(b), R.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH = b;
    const M = new tt();
    M.setContainment(!1), M.setName("xAxisTitle"), M.setLowerBound(0), M.setUpperBound(1), m.getEStructuralFeatures().push(M), R.Literals.CHART_SETTINGS__X_AXIS_TITLE = M;
    const w = new tt();
    w.setContainment(!1), w.setName("yAxisTitle"), w.setLowerBound(0), w.setUpperBound(1), m.getEStructuralFeatures().push(w), R.Literals.CHART_SETTINGS__Y_AXIS_TITLE = w;
    const j = new tt();
    j.setContainment(!1), j.setName("annotationsEditMode"), j.setLowerBound(0), j.setUpperBound(1), m.getEStructuralFeatures().push(j), R.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE = j;
    const _t = new hi();
    _t.setName("horizontalLines"), _t.setLowerBound(0), _t.setUpperBound(-1), m.getEStructuralFeatures().push(_t), R.Literals.CHART_SETTINGS__HORIZONTAL_LINES = _t;
    const Tt = new hi();
    Tt.setName("verticalLines"), Tt.setLowerBound(0), Tt.setUpperBound(-1), m.getEStructuralFeatures().push(Tt), R.Literals.CHART_SETTINGS__VERTICAL_LINES = Tt;
    const mt = new hi();
    mt.setName("horizontalBoxes"), mt.setLowerBound(0), mt.setUpperBound(-1), m.getEStructuralFeatures().push(mt), R.Literals.CHART_SETTINGS__HORIZONTAL_BOXES = mt;
    const N = new hi();
    N.setName("verticalBoxes"), N.setLowerBound(0), N.setUpperBound(-1), m.getEStructuralFeatures().push(N), R.Literals.CHART_SETTINGS__VERTICAL_BOXES = N;
    const Q = new tt();
    Q.setContainment(!1), Q.setName("dateDisplayFormat"), Q.setLowerBound(0), Q.setUpperBound(1), m.getEStructuralFeatures().push(Q), R.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT = Q, R.Literals.SERIES_SETTINGS__SERIES_INDEX.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__LABEL.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__CHART_TYPE.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__X_AXIS_ID.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__Y_AXIS_ID.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__Y_AXIS_TITLE.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BORDER_COLOR.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BACKGROUND_COLOR.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BORDER_WIDTH.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BORDER_DASH.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__FILL.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__SHOW_POINTS.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__POINT_COLOR.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__POINT_SIZE.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SERIES_SETTINGS.setEType(R.Literals.SERIES_SETTINGS), R.Literals.CHART_SETTINGS__CHART_TYPE.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BAR_ORIENTATION.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__STACKED.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BORDER_COLOR.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BORDER_WIDTH.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BORDER_DASH.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BACKGROUND_COLOR.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__FILL.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SHOW_POINTS.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__POINT_COLOR.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__POINT_SIZE.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__X_AXIS_TITLE.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__Y_AXIS_TITLE.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT.setEType(et.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class x extends rr {
  // Feature ID Constants (eLiterals)
  static SERIES_SETTINGS = 0;
  static CHART_TYPE = 1;
  static BAR_ORIENTATION = 2;
  static STACKED = 3;
  static BORDER_COLOR = 4;
  static BORDER_WIDTH = 5;
  static BORDER_DASH = 6;
  static BACKGROUND_COLOR = 7;
  static FILL = 8;
  static SHOW_POINTS = 9;
  static POINT_COLOR = 10;
  static POINT_SIZE = 11;
  static SHOW_HORIZONTAL_GRID = 12;
  static HORIZONTAL_GRID_COLOR = 13;
  static HORIZONTAL_GRID_WIDTH = 14;
  static SHOW_VERTICAL_GRID = 15;
  static VERTICAL_GRID_COLOR = 16;
  static VERTICAL_GRID_WIDTH = 17;
  static X_AXIS_TITLE = 18;
  static Y_AXIS_TITLE = 19;
  static ANNOTATIONS_EDIT_MODE = 20;
  static HORIZONTAL_LINES = 21;
  static VERTICAL_LINES = 22;
  static HORIZONTAL_BOXES = 23;
  static VERTICAL_BOXES = 24;
  static DATE_DISPLAY_FORMAT = 25;
  // Private fields
  _seriesSettings;
  _chartType = new C();
  _barOrientation = new C();
  _stacked = new C();
  _borderColor = new C();
  _borderWidth = new C();
  _borderDash = new C();
  _backgroundColor = new C();
  _fill = new C();
  _showPoints = new C();
  _pointColor = new C();
  _pointSize = new C();
  _showHorizontalGrid = new C();
  _horizontalGridColor = new C();
  _horizontalGridWidth = new C();
  _showVerticalGrid = new C();
  _verticalGridColor = new C();
  _verticalGridWidth = new C();
  _xAxisTitle = new C();
  _yAxisTitle = new C();
  _annotationsEditMode = new C();
  _horizontalLines;
  _verticalLines;
  _horizontalBoxes;
  _verticalBoxes;
  _dateDisplayFormat = new C();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return R.Literals.CHART_SETTINGS;
  }
  // Getters and Setters
  get seriesSettings() {
    return this._seriesSettings || (this._seriesSettings = za(this, this.eClass().getEStructuralFeature("seriesSettings"))), this._seriesSettings;
  }
  get chartType() {
    return this._chartType;
  }
  set chartType(t) {
    const e = this._chartType;
    this._chartType = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.CHART_TYPE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.CHART_TYPE,
      merge: () => !1
    });
  }
  get barOrientation() {
    return this._barOrientation;
  }
  set barOrientation(t) {
    const e = this._barOrientation;
    this._barOrientation = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.BAR_ORIENTATION),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.BAR_ORIENTATION,
      merge: () => !1
    });
  }
  get stacked() {
    return this._stacked;
  }
  set stacked(t) {
    const e = this._stacked;
    this._stacked = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.STACKED),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.STACKED,
      merge: () => !1
    });
  }
  get borderColor() {
    return this._borderColor;
  }
  set borderColor(t) {
    const e = this._borderColor;
    this._borderColor = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.BORDER_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.BORDER_COLOR,
      merge: () => !1
    });
  }
  get borderWidth() {
    return this._borderWidth;
  }
  set borderWidth(t) {
    const e = this._borderWidth;
    this._borderWidth = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.BORDER_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.BORDER_WIDTH,
      merge: () => !1
    });
  }
  get borderDash() {
    return this._borderDash;
  }
  set borderDash(t) {
    const e = this._borderDash;
    this._borderDash = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.BORDER_DASH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.BORDER_DASH,
      merge: () => !1
    });
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(t) {
    const e = this._backgroundColor;
    this._backgroundColor = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.BACKGROUND_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get fill() {
    return this._fill;
  }
  set fill(t) {
    const e = this._fill;
    this._fill = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.FILL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.FILL,
      merge: () => !1
    });
  }
  get showPoints() {
    return this._showPoints;
  }
  set showPoints(t) {
    const e = this._showPoints;
    this._showPoints = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.SHOW_POINTS),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.SHOW_POINTS,
      merge: () => !1
    });
  }
  get pointColor() {
    return this._pointColor;
  }
  set pointColor(t) {
    const e = this._pointColor;
    this._pointColor = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.POINT_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.POINT_COLOR,
      merge: () => !1
    });
  }
  get pointSize() {
    return this._pointSize;
  }
  set pointSize(t) {
    const e = this._pointSize;
    this._pointSize = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.POINT_SIZE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.POINT_SIZE,
      merge: () => !1
    });
  }
  get showHorizontalGrid() {
    return this._showHorizontalGrid;
  }
  set showHorizontalGrid(t) {
    const e = this._showHorizontalGrid;
    this._showHorizontalGrid = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.SHOW_HORIZONTAL_GRID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.SHOW_HORIZONTAL_GRID,
      merge: () => !1
    });
  }
  get horizontalGridColor() {
    return this._horizontalGridColor;
  }
  set horizontalGridColor(t) {
    const e = this._horizontalGridColor;
    this._horizontalGridColor = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.HORIZONTAL_GRID_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.HORIZONTAL_GRID_COLOR,
      merge: () => !1
    });
  }
  get horizontalGridWidth() {
    return this._horizontalGridWidth;
  }
  set horizontalGridWidth(t) {
    const e = this._horizontalGridWidth;
    this._horizontalGridWidth = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.HORIZONTAL_GRID_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.HORIZONTAL_GRID_WIDTH,
      merge: () => !1
    });
  }
  get showVerticalGrid() {
    return this._showVerticalGrid;
  }
  set showVerticalGrid(t) {
    const e = this._showVerticalGrid;
    this._showVerticalGrid = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.SHOW_VERTICAL_GRID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.SHOW_VERTICAL_GRID,
      merge: () => !1
    });
  }
  get verticalGridColor() {
    return this._verticalGridColor;
  }
  set verticalGridColor(t) {
    const e = this._verticalGridColor;
    this._verticalGridColor = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.VERTICAL_GRID_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.VERTICAL_GRID_COLOR,
      merge: () => !1
    });
  }
  get verticalGridWidth() {
    return this._verticalGridWidth;
  }
  set verticalGridWidth(t) {
    const e = this._verticalGridWidth;
    this._verticalGridWidth = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.VERTICAL_GRID_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.VERTICAL_GRID_WIDTH,
      merge: () => !1
    });
  }
  get xAxisTitle() {
    return this._xAxisTitle;
  }
  set xAxisTitle(t) {
    const e = this._xAxisTitle;
    this._xAxisTitle = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.X_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.X_AXIS_TITLE,
      merge: () => !1
    });
  }
  get yAxisTitle() {
    return this._yAxisTitle;
  }
  set yAxisTitle(t) {
    const e = this._yAxisTitle;
    this._yAxisTitle = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.Y_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.Y_AXIS_TITLE,
      merge: () => !1
    });
  }
  get annotationsEditMode() {
    return this._annotationsEditMode;
  }
  set annotationsEditMode(t) {
    const e = this._annotationsEditMode;
    this._annotationsEditMode = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.ANNOTATIONS_EDIT_MODE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.ANNOTATIONS_EDIT_MODE,
      merge: () => !1
    });
  }
  get horizontalLines() {
    return this._horizontalLines || (this._horizontalLines = fi(this, this.eClass().getEStructuralFeature("horizontalLines"))), this._horizontalLines;
  }
  get verticalLines() {
    return this._verticalLines || (this._verticalLines = fi(this, this.eClass().getEStructuralFeature("verticalLines"))), this._verticalLines;
  }
  get horizontalBoxes() {
    return this._horizontalBoxes || (this._horizontalBoxes = fi(this, this.eClass().getEStructuralFeature("horizontalBoxes"))), this._horizontalBoxes;
  }
  get verticalBoxes() {
    return this._verticalBoxes || (this._verticalBoxes = fi(this, this.eClass().getEStructuralFeature("verticalBoxes"))), this._verticalBoxes;
  }
  get dateDisplayFormat() {
    return this._dateDisplayFormat;
  }
  set dateDisplayFormat(t) {
    const e = this._dateDisplayFormat;
    this._dateDisplayFormat = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(x.DATE_DISPLAY_FORMAT),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => x.DATE_DISPLAY_FORMAT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case x.SERIES_SETTINGS:
        return this.seriesSettings;
      case x.CHART_TYPE:
        return this.chartType;
      case x.BAR_ORIENTATION:
        return this.barOrientation;
      case x.STACKED:
        return this.stacked;
      case x.BORDER_COLOR:
        return this.borderColor;
      case x.BORDER_WIDTH:
        return this.borderWidth;
      case x.BORDER_DASH:
        return this.borderDash;
      case x.BACKGROUND_COLOR:
        return this.backgroundColor;
      case x.FILL:
        return this.fill;
      case x.SHOW_POINTS:
        return this.showPoints;
      case x.POINT_COLOR:
        return this.pointColor;
      case x.POINT_SIZE:
        return this.pointSize;
      case x.SHOW_HORIZONTAL_GRID:
        return this.showHorizontalGrid;
      case x.HORIZONTAL_GRID_COLOR:
        return this.horizontalGridColor;
      case x.HORIZONTAL_GRID_WIDTH:
        return this.horizontalGridWidth;
      case x.SHOW_VERTICAL_GRID:
        return this.showVerticalGrid;
      case x.VERTICAL_GRID_COLOR:
        return this.verticalGridColor;
      case x.VERTICAL_GRID_WIDTH:
        return this.verticalGridWidth;
      case x.X_AXIS_TITLE:
        return this.xAxisTitle;
      case x.Y_AXIS_TITLE:
        return this.yAxisTitle;
      case x.ANNOTATIONS_EDIT_MODE:
        return this.annotationsEditMode;
      case x.HORIZONTAL_LINES:
        return this.horizontalLines;
      case x.VERTICAL_LINES:
        return this.verticalLines;
      case x.HORIZONTAL_BOXES:
        return this.horizontalBoxes;
      case x.VERTICAL_BOXES:
        return this.verticalBoxes;
      case x.DATE_DISPLAY_FORMAT:
        return this.dateDisplayFormat;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, e) {
    switch (this.eClass().getFeatureID(t)) {
      case x.SERIES_SETTINGS:
        this.seriesSettings.clear(), this.seriesSettings.addAll(e), super.eSet(t, e);
        break;
      case x.CHART_TYPE:
        this.chartType = e, super.eSet(t, e);
        break;
      case x.BAR_ORIENTATION:
        this.barOrientation = e, super.eSet(t, e);
        break;
      case x.STACKED:
        this.stacked = e, super.eSet(t, e);
        break;
      case x.BORDER_COLOR:
        this.borderColor = e, super.eSet(t, e);
        break;
      case x.BORDER_WIDTH:
        this.borderWidth = e, super.eSet(t, e);
        break;
      case x.BORDER_DASH:
        this.borderDash = e, super.eSet(t, e);
        break;
      case x.BACKGROUND_COLOR:
        this.backgroundColor = e, super.eSet(t, e);
        break;
      case x.FILL:
        this.fill = e, super.eSet(t, e);
        break;
      case x.SHOW_POINTS:
        this.showPoints = e, super.eSet(t, e);
        break;
      case x.POINT_COLOR:
        this.pointColor = e, super.eSet(t, e);
        break;
      case x.POINT_SIZE:
        this.pointSize = e, super.eSet(t, e);
        break;
      case x.SHOW_HORIZONTAL_GRID:
        this.showHorizontalGrid = e, super.eSet(t, e);
        break;
      case x.HORIZONTAL_GRID_COLOR:
        this.horizontalGridColor = e, super.eSet(t, e);
        break;
      case x.HORIZONTAL_GRID_WIDTH:
        this.horizontalGridWidth = e, super.eSet(t, e);
        break;
      case x.SHOW_VERTICAL_GRID:
        this.showVerticalGrid = e, super.eSet(t, e);
        break;
      case x.VERTICAL_GRID_COLOR:
        this.verticalGridColor = e, super.eSet(t, e);
        break;
      case x.VERTICAL_GRID_WIDTH:
        this.verticalGridWidth = e, super.eSet(t, e);
        break;
      case x.X_AXIS_TITLE:
        this.xAxisTitle = e, super.eSet(t, e);
        break;
      case x.Y_AXIS_TITLE:
        this.yAxisTitle = e, super.eSet(t, e);
        break;
      case x.ANNOTATIONS_EDIT_MODE:
        this.annotationsEditMode = e, super.eSet(t, e);
        break;
      case x.HORIZONTAL_LINES:
        this.horizontalLines.clear(), this.horizontalLines.addAll(e), super.eSet(t, e);
        break;
      case x.VERTICAL_LINES:
        this.verticalLines.clear(), this.verticalLines.addAll(e), super.eSet(t, e);
        break;
      case x.HORIZONTAL_BOXES:
        this.horizontalBoxes.clear(), this.horizontalBoxes.addAll(e), super.eSet(t, e);
        break;
      case x.VERTICAL_BOXES:
        this.verticalBoxes.clear(), this.verticalBoxes.addAll(e), super.eSet(t, e);
        break;
      case x.DATE_DISPLAY_FORMAT:
        this.dateDisplayFormat = e, super.eSet(t, e);
        break;
      default:
        super.eSet(t, e);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case x.SERIES_SETTINGS:
        return this._seriesSettings !== void 0 && !this._seriesSettings.isEmpty();
      case x.CHART_TYPE:
        return this._chartType !== new C();
      case x.BAR_ORIENTATION:
        return this._barOrientation !== new C();
      case x.STACKED:
        return this._stacked !== new C();
      case x.BORDER_COLOR:
        return this._borderColor !== new C();
      case x.BORDER_WIDTH:
        return this._borderWidth !== new C();
      case x.BORDER_DASH:
        return this._borderDash !== new C();
      case x.BACKGROUND_COLOR:
        return this._backgroundColor !== new C();
      case x.FILL:
        return this._fill !== new C();
      case x.SHOW_POINTS:
        return this._showPoints !== new C();
      case x.POINT_COLOR:
        return this._pointColor !== new C();
      case x.POINT_SIZE:
        return this._pointSize !== new C();
      case x.SHOW_HORIZONTAL_GRID:
        return this._showHorizontalGrid !== new C();
      case x.HORIZONTAL_GRID_COLOR:
        return this._horizontalGridColor !== new C();
      case x.HORIZONTAL_GRID_WIDTH:
        return this._horizontalGridWidth !== new C();
      case x.SHOW_VERTICAL_GRID:
        return this._showVerticalGrid !== new C();
      case x.VERTICAL_GRID_COLOR:
        return this._verticalGridColor !== new C();
      case x.VERTICAL_GRID_WIDTH:
        return this._verticalGridWidth !== new C();
      case x.X_AXIS_TITLE:
        return this._xAxisTitle !== new C();
      case x.Y_AXIS_TITLE:
        return this._yAxisTitle !== new C();
      case x.ANNOTATIONS_EDIT_MODE:
        return this._annotationsEditMode !== new C();
      case x.HORIZONTAL_LINES:
        return this._horizontalLines !== void 0 && !this._horizontalLines.isEmpty();
      case x.VERTICAL_LINES:
        return this._verticalLines !== void 0 && !this._verticalLines.isEmpty();
      case x.HORIZONTAL_BOXES:
        return this._horizontalBoxes !== void 0 && !this._horizontalBoxes.isEmpty();
      case x.VERTICAL_BOXES:
        return this._verticalBoxes !== void 0 && !this._verticalBoxes.isEmpty();
      case x.DATE_DISPLAY_FORMAT:
        return this._dateDisplayFormat !== new C();
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case x.SERIES_SETTINGS:
        this._seriesSettings && this._seriesSettings.clear();
        return;
      case x.CHART_TYPE:
        this._chartType = new C();
        return;
      case x.BAR_ORIENTATION:
        this._barOrientation = new C();
        return;
      case x.STACKED:
        this._stacked = new C();
        return;
      case x.BORDER_COLOR:
        this._borderColor = new C();
        return;
      case x.BORDER_WIDTH:
        this._borderWidth = new C();
        return;
      case x.BORDER_DASH:
        this._borderDash = new C();
        return;
      case x.BACKGROUND_COLOR:
        this._backgroundColor = new C();
        return;
      case x.FILL:
        this._fill = new C();
        return;
      case x.SHOW_POINTS:
        this._showPoints = new C();
        return;
      case x.POINT_COLOR:
        this._pointColor = new C();
        return;
      case x.POINT_SIZE:
        this._pointSize = new C();
        return;
      case x.SHOW_HORIZONTAL_GRID:
        this._showHorizontalGrid = new C();
        return;
      case x.HORIZONTAL_GRID_COLOR:
        this._horizontalGridColor = new C();
        return;
      case x.HORIZONTAL_GRID_WIDTH:
        this._horizontalGridWidth = new C();
        return;
      case x.SHOW_VERTICAL_GRID:
        this._showVerticalGrid = new C();
        return;
      case x.VERTICAL_GRID_COLOR:
        this._verticalGridColor = new C();
        return;
      case x.VERTICAL_GRID_WIDTH:
        this._verticalGridWidth = new C();
        return;
      case x.X_AXIS_TITLE:
        this._xAxisTitle = new C();
        return;
      case x.Y_AXIS_TITLE:
        this._yAxisTitle = new C();
        return;
      case x.ANNOTATIONS_EDIT_MODE:
        this._annotationsEditMode = new C();
        return;
      case x.HORIZONTAL_LINES:
        this._horizontalLines && this._horizontalLines.clear();
        return;
      case x.VERTICAL_LINES:
        this._verticalLines && this._verticalLines.clear();
        return;
      case x.HORIZONTAL_BOXES:
        this._horizontalBoxes && this._horizontalBoxes.clear();
        return;
      case x.VERTICAL_BOXES:
        this._verticalBoxes && this._verticalBoxes.clear();
        return;
      case x.DATE_DISPLAY_FORMAT:
        this._dateDisplayFormat = new C();
        return;
      default:
        super.eUnset(t);
    }
  }
}
var Ng = Object.defineProperty, Vg = Object.getOwnPropertyDescriptor, di = (i, t, e, s) => {
  for (var n = Vg(t, e), o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(t, e, n) || n);
  return n && Ng(t, e, n), n;
};
class me extends ja {
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
di([
  si({ eventType: "chart.refresh" })
], me.prototype, "refresh");
di([
  si({ eventType: "chart.zoomIn" })
], me.prototype, "zoomIn");
di([
  si({ eventType: "chart.zoomOut" })
], me.prototype, "zoomOut");
di([
  si({ eventType: "chart.resetZoom" })
], me.prototype, "resetZoom");
di([
  si({ eventType: "chart.exportAsImage" })
], me.prototype, "exportAsImage");
const Bg = /* @__PURE__ */ zi({
  __name: "ChartWidget",
  props: /* @__PURE__ */ ka({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(i, { expose: t }) {
    const { wrapParameters: e } = Va();
    ce.register(_h, Ch, mh, ju, Rh, Lh, Yi, Bu, Xh, Iu, dh, kg);
    const s = i, { datasourceId: n, id: o } = Ma(s), r = or(i, "configv"), a = new x(), l = Wt(null), c = Ss(Ga.TINY_EMITTER), d = Ss(wa), h = Ha().params.pageid || "", f = Wt({ min: null, max: null }), g = Wt(null);
    class p extends me {
      refresh() {
        E(n.value, n.value);
      }
      zoomIn() {
        const S = f.value.min ?? 0, _ = f.value.max ?? 100, L = _ - S, k = (_ + S) / 2;
        f.value = { min: k - L * 0.4, max: k + L * 0.4 }, T.value++;
      }
      zoomOut() {
        const S = f.value.min ?? 0, _ = f.value.max ?? 100, L = _ - S, k = (_ + S) / 2;
        f.value = { min: k - L * 0.75, max: k + L * 0.75 }, T.value++;
      }
      resetZoom() {
        f.value = { min: null, max: null }, T.value++;
      }
      exportAsImage(S) {
        if (g.value && g.value.chart) {
          const _ = g.value.chart, L = S || "image/png", k = _.toBase64Image(L), Z = document.createElement("a");
          Z.href = k, Z.download = `chart.${L.split("/")[1] || "png"}`, Z.click();
        }
      }
    }
    const m = new p();
    t(m), sr(() => {
      o?.value && d.unregisterInstance(o.value);
    });
    const y = () => {
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
    Ri(() => {
      if (o?.value && d.registerInstance(o.value, m, "ChartWidget", h), r.value)
        for (const I of Object.keys(a))
          (!(I in r.value) || r.value[I] === void 0) && (r.value[I] = a[I]);
    }), Je(n, (I, S) => {
      E(I, S);
    });
    const { update: E } = Ba(n, "ChartData", l), A = rt(() => {
      if (r.value?.seriesSettings?.some(
        (L) => L.chartType?.value && L.chartType.value !== r.value?.chartType?.value
      ))
        return _s;
      const S = r.value?.chartType?.value ?? "bar";
      return {
        bar: _s,
        line: of,
        radar: lf,
        pie: rf,
        doughnut: nf,
        polarArea: af
      }[S] || _s;
    }), T = Wt(0);
    Je(() => r.value, (I) => {
      T.value++;
    }, { deep: !0 });
    const O = e({
      chartType: rt(() => r.value?.chartType?.value ?? "bar"),
      borderColor: rt(() => r.value?.borderColor?.value ?? "rgba(75, 192, 192, 1)"),
      backgroundColor: rt(() => r.value?.backgroundColor?.value ?? "rgba(75, 192, 192, 0.2)"),
      borderWidth: rt(() => r.value?.borderWidth?.value ?? 2),
      borderDash: rt(() => r.value?.borderDash?.value ?? []),
      fill: rt(() => r.value?.fill ?? !1),
      showPoints: rt(() => r.value?.showPoints ?? !0),
      pointColor: rt(() => r.value?.pointColor?.value ?? "rgba(75, 192, 192, 1)"),
      pointSize: rt(() => r.value?.pointSize?.value ?? 3),
      barOrientation: rt(() => r.value?.barOrientation?.value ?? "vertical"),
      stacked: rt(() => r.value?.stacked?.value ?? !1),
      showHorizontalGrid: rt(() => r.value?.showHorizontalGrid ?? !0),
      horizontalGridColor: rt(() => r.value?.horizontalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      horizontalGridWidth: rt(() => r.value?.horizontalGridWidth?.value ?? 1),
      showVerticalGrid: rt(() => r.value?.showVerticalGrid ?? !0),
      verticalGridColor: rt(() => r.value?.verticalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      verticalGridWidth: rt(() => r.value?.verticalGridWidth?.value ?? 1),
      dateDisplayFormat: rt(() => r.value?.dateDisplayFormat?.value ?? "dd.MM.yyyy HH:mm"),
      annotationsEditMode: rt(() => r.value?.annotationsEditMode ?? !1)
    });
    console.log(O.backgroundColor.value);
    const V = rt(() => {
      if (!l.value) return null;
      const I = JSON.parse(JSON.stringify(l.value)), S = r.value?.seriesSettings && r.value.seriesSettings.length > 0;
      return I.datasets && Array.isArray(I.datasets) && (I.datasets = I.datasets.map((_, L) => {
        const k = r.value?.seriesSettings?.find(
          (_t) => _t.seriesIndex?.value === L
        ), Z = k?.chartType?.value ?? O.chartType ?? "bar", B = k?.xAxisId?.value, G = k?.yAxisId?.value, K = k?.borderColor?.value ?? _.borderColor ?? r.value?.borderColor?.value, b = k?.backgroundColor?.value ?? _.backgroundColor ?? r.value?.backgroundColor?.value, M = k?.borderWidth?.value ?? _.borderWidth ?? r.value?.borderWidth?.value, w = k?.borderDash?.value ?? _.borderDash ?? r.value?.borderDash?.value;
        let j = {
          ..._,
          borderColor: K,
          backgroundColor: b,
          borderWidth: M
        };
        if (S && (j.type = Z, B && (j.xAxisID = B), G && (j.yAxisID = G), k?.label?.value && (j.label = (k?.label).value)), Z === "line") {
          const _t = k?.showPoints?.value ?? r.value?.showPoints?.value ?? !0, Tt = k?.fill?.value ?? r.value?.fill?.value ?? !1, mt = k?.pointColor?.value ?? _.pointBackgroundColor ?? r.value?.pointColor?.value, N = k?.pointSize?.value ?? r.value?.pointSize?.value ?? 3;
          j = {
            ...j,
            borderDash: w,
            fill: Tt ? "origin" : !1,
            // Point settings
            pointRadius: _t ? N : 0,
            pointBackgroundColor: mt,
            pointBorderColor: mt,
            pointHoverRadius: _t ? N + 2 : 0
          };
        } else Z === "bar" ? j = {
          ...j,
          borderDash: w
        } : j = {
          ...j
        };
        return j;
      })), I;
    }), P = rt(() => {
      if (!r.value)
        return {
          responsive: !0
        };
      const I = O.annotationsEditMode.value, S = {};
      r.value.horizontalLines?.forEach((N, Q) => {
        S[`hline_${Q}`] = {
          type: "line",
          yMin: N.value,
          yMax: N.value,
          borderColor: N.color,
          borderWidth: N.width,
          label: N.label ? {
            display: !0,
            content: N.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: I,
          borderDash: I ? [5, 5] : void 0,
          enter({ element: X }) {
            I && (X.options.borderWidth = N.width + 1);
          },
          leave({ element: X }) {
            I && (X.options.borderWidth = N.width);
          },
          drag({ element: X }) {
            I && r.value.horizontalLines && (r.value.horizontalLines[Q].value = X.y);
          }
        };
      }), r.value.verticalLines?.forEach((N, Q) => {
        S[`vline_${Q}`] = {
          type: "line",
          xMin: N.value,
          xMax: N.value,
          borderColor: N.color,
          borderWidth: N.width,
          label: N.label ? {
            display: !0,
            content: N.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: I,
          borderDash: I ? [5, 5] : void 0,
          enter({ element: X }) {
            I && (X.options.borderWidth = N.width + 1);
          },
          leave({ element: X }) {
            I && (X.options.borderWidth = N.width);
          },
          drag({ element: X }) {
            I && r.value.verticalLines && (r.value.verticalLines[Q].value = X.x);
          }
        };
      }), r.value.horizontalBoxes?.forEach((N, Q) => {
        S[`hbox_${Q}`] = {
          type: "box",
          yMin: N.yMin,
          yMax: N.yMax,
          backgroundColor: N.color,
          borderWidth: I ? 2 : 0,
          borderColor: I ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: I ? [5, 5] : void 0,
          label: N.label ? {
            display: !0,
            content: N.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: I,
          enter({ element: X }) {
            I && (X.options.borderWidth = 3);
          },
          leave({ element: X }) {
            I && (X.options.borderWidth = 2);
          },
          drag({ element: X }) {
            if (I && r.value.horizontalBoxes) {
              const Et = N.yMax - N.yMin;
              r.value.horizontalBoxes[Q].yMin = X.y - Et / 2, r.value.horizontalBoxes[Q].yMax = X.y + Et / 2;
            }
          }
        };
      }), r.value.verticalBoxes?.forEach((N, Q) => {
        S[`vbox_${Q}`] = {
          type: "box",
          xMin: N.xMin,
          xMax: N.xMax,
          backgroundColor: N.color,
          borderWidth: I ? 2 : 0,
          borderColor: I ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: I ? [5, 5] : void 0,
          label: N.label ? {
            display: !0,
            content: N.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: I,
          enter({ element: X }) {
            I && (X.options.borderWidth = 3);
          },
          leave({ element: X }) {
            I && (X.options.borderWidth = 2);
          },
          drag({ element: X }) {
            if (I && r.value.verticalBoxes) {
              const Et = N.xMax - N.xMin;
              r.value.verticalBoxes[Q].xMin = X.x - Et / 2, r.value.verticalBoxes[Q].xMax = X.x + Et / 2;
            }
          }
        };
      });
      const _ = (N) => {
        if (typeof N != "string") return !1;
        const Q = /^\d{4}-\d{2}-\d{2}(T|\s)/, X = /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}/;
        return Q.test(N) || X.test(N);
      }, L = (N, Q) => {
        if (!N || !_(N)) return N;
        const X = new Date(N);
        if (isNaN(X.getTime())) return N;
        const Et = (be) => be.toString().padStart(2, "0"), ui = {
          yyyy: X.getFullYear().toString(),
          yy: X.getFullYear().toString().slice(-2),
          MM: Et(X.getMonth() + 1),
          M: (X.getMonth() + 1).toString(),
          dd: Et(X.getDate()),
          d: X.getDate().toString(),
          HH: Et(X.getHours()),
          H: X.getHours().toString(),
          mm: Et(X.getMinutes()),
          m: X.getMinutes().toString(),
          ss: Et(X.getSeconds()),
          s: X.getSeconds().toString()
        };
        let ss = Q;
        return Object.keys(ui).sort((be, Ea) => Ea.length - be.length).forEach((be) => {
          ss = ss.replace(new RegExp(be, "g"), ui[be]);
        }), ss;
      }, k = O.dateDisplayFormat.value, Z = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set(), G = r.value?.seriesSettings && r.value.seriesSettings.length > 0, K = {};
      G && (Z.add("x"), B.add("y"), r.value.seriesSettings?.forEach((N) => {
        N?.xAxisId?.value && Z.add(N.xAxisId.value), N.yAxisId?.value && (B.add(N.yAxisId.value), N.yAxisTitle?.value && (K[N.yAxisId.value] = N.yAxisTitle.value));
      }));
      const b = O.stacked.value === !0 || O.stacked.value === "true", M = r.value.xAxisTitle?.value ?? "", w = r.value.yAxisTitle?.value ?? "", j = {
        y: {
          stacked: b,
          title: {
            display: !!w,
            text: w
          },
          grid: {
            display: O.showHorizontalGrid.value,
            color: O.horizontalGridColor.value,
            lineWidth: O.horizontalGridWidth.value
          }
        },
        x: {
          stacked: b,
          title: {
            display: !!M,
            text: M
          },
          grid: {
            display: O.showVerticalGrid.value,
            color: O.verticalGridColor.value,
            lineWidth: O.verticalGridWidth.value
          },
          ticks: {
            callback: function(N, Q, X) {
              const Et = this.getLabelForValue(N);
              return L(Et, k);
            }
          }
        }
      };
      Z.size > 1 && Z.forEach((N) => {
        N !== "x" && (j[N] = {
          type: "category",
          // Explicitly set the axis type
          grid: {
            display: O.showVerticalGrid.value,
            color: O.verticalGridColor.value,
            lineWidth: O.verticalGridWidth.value
          },
          ticks: {
            callback: function(Q, X, Et) {
              const ui = this.getLabelForValue(Q);
              return L(ui, k);
            }
          },
          // Position secondary axes at the top
          position: "top"
        });
      }), B.size > 1 && B.forEach((N) => {
        if (N !== "y") {
          const Q = K[N] ?? "";
          j[N] = {
            type: "linear",
            // Explicitly set the axis type
            title: {
              display: !!Q,
              text: Q
            },
            grid: {
              display: O.showHorizontalGrid.value,
              color: O.horizontalGridColor.value,
              lineWidth: O.horizontalGridWidth.value
            },
            // Position secondary Y-axes on the right
            position: "right"
          };
        }
      });
      const mt = {
        responsive: !0,
        maintainAspectRatio: !0,
        indexAxis: O.barOrientation.value === "horizontal" ? "y" : "x",
        scales: j,
        plugins: {
          legend: {
            labels: {
              usePointStyle: !0,
              pointStyle: "circle"
            }
          },
          annotation: {
            annotations: S
          }
        }
      };
      return console.log("Chart options:", mt), mt;
    });
    return (I, S) => (H(), bt("div", {
      class: "w-full h-full",
      onClick: y,
      onContextmenu: Pa(v, ["prevent"])
    }, [
      V.value && P.value ? (H(), q(Na(A.value), {
        key: T.value,
        id: "my-chart-id",
        ref_key: "chartRef",
        ref: g,
        options: P.value,
        data: V.value
      }, null, 8, ["options", "data"])) : U("", !0)
    ], 32));
  }
}), Hg = { class: "settings-container" }, Fg = { class: "settings-block" }, Wg = { style: { display: "flex", "justify-content": "space-between", "align-items": "center", "margin-bottom": "12px" } }, zg = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "12px" } }, Gg = { style: { "font-size": "15px" } }, jg = { key: 11 }, Ug = {
  key: 0,
  style: { padding: "20px", "text-align": "center", color: "var(--va-text-secondary)" }
}, Xg = { class: "settings-container" }, Yg = { class: "settings-block" }, $g = {
  key: 0,
  class: "settings-block"
}, Zg = {
  key: 1,
  class: "settings-block"
}, Kg = {
  key: 2,
  class: "settings-block"
}, qg = { class: "settings-container" }, Jg = { class: "settings-block" }, Qg = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, tp = { class: "settings-container" }, ep = { class: "settings-block" }, ip = { class: "settings-container" }, sp = { class: "settings-block" }, np = { class: "settings-container" }, op = { class: "settings-block" }, rp = { class: "settings-block" }, ap = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, lp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, cp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, dp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, up = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, hp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, fp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, gp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, pp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, mp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, bp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, _p = /* @__PURE__ */ zi({
  __name: "ChartWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const t = Wt({
      seriesSection: !1,
      styleSection: !0,
      gridSection: !1,
      dateFormatSection: !1,
      axisLabelSection: !1,
      annotationsSection: !1
    }), e = or(i, "modelValue"), s = Wt(e.value?.xAxisTitle?.value ?? ""), n = Wt(e.value?.yAxisTitle?.value ?? "");
    Je(s, (S) => {
      e.value.xAxisTitle ? e.value.xAxisTitle.value = S : e.value.xAxisTitle = new C(S);
    }), Je(n, (S) => {
      e.value.yAxisTitle ? e.value.yAxisTitle.value = S : e.value.yAxisTitle = new C(S);
    }), Ss("i18n");
    const o = rt(() => e.value?.chartType?.value ?? "bar"), r = rt(() => o.value === "line"), a = rt(() => o.value === "bar"), l = rt(() => ["pie", "doughnut", "polarArea"].includes(o.value)), c = rt(() => {
      const S = /* @__PURE__ */ new Set(["y"]);
      return e.value?.seriesSettings?.forEach((_) => {
        _.yAxisId?.value && S.add(_.yAxisId.value);
      }), Array.from(S);
    });
    function d(S) {
      return e.value?.seriesSettings?.find(
        (L) => L.yAxisId?.value === S
      )?.yAxisTitle?.value ?? "";
    }
    function u(S, _) {
      const L = e.value?.seriesSettings?.find(
        (k) => k.yAxisId?.value === S
      );
      L && (L.yAxisTitle ? L.yAxisTitle.value = _ : L.yAxisTitle = new C(_));
    }
    Ri(() => {
      console.log("ChartWidgetSettings mounted, config:", e.value), console.log("borderColor:", e.value?.borderColor);
    });
    const h = [
      { label: "Solid", value: [] },
      { label: "Dashed", value: [5, 5] },
      { label: "Dotted", value: [2, 2] },
      { label: "Dash-Dot", value: [10, 5, 2, 5] }
    ], f = Wt("[]"), g = (S) => {
      try {
        const _ = typeof S == "string" ? S : S?.value || S, L = typeof _ == "string" ? JSON.parse(_) : _;
        e.value.borderDash.value = L;
      } catch (_) {
        console.error("Error parsing border dash preset:", _, S);
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
    }, m = (S) => {
      e.value.horizontalLines?.splice(S, 1);
    }, y = () => {
      e.value.verticalLines || (e.value.verticalLines = []), e.value.verticalLines.push({
        value: 0,
        color: "rgba(0, 0, 255, 0.8)",
        width: 2,
        label: "Line"
      });
    }, v = (S) => {
      e.value.verticalLines?.splice(S, 1);
    }, E = () => {
      e.value.horizontalBoxes || (e.value.horizontalBoxes = []), e.value.horizontalBoxes.push({
        yMin: 0,
        yMax: 10,
        color: "rgba(255, 0, 0, 0.1)",
        label: "Range"
      });
    }, A = (S) => {
      e.value.horizontalBoxes?.splice(S, 1);
    }, T = () => {
      e.value.verticalBoxes || (e.value.verticalBoxes = []), e.value.verticalBoxes.push({
        xMin: 0,
        xMax: 10,
        color: "rgba(0, 0, 255, 0.1)",
        label: "Range"
      });
    }, O = (S) => {
      e.value.verticalBoxes?.splice(S, 1);
    }, V = () => {
      e.value.seriesSettings || (e.value.seriesSettings = []);
      const S = new D();
      S.seriesIndex = new C(e.value.seriesSettings.length), S.chartType = new C("bar"), S.xAxisId = new C("x"), S.yAxisId = new C("y"), S.label = new C(""), S.borderColor = new C(""), S.backgroundColor = new C(""), S.borderWidth = new C(2), S.borderDash = new C([]), S.fill = new C(!1), S.showPoints = new C(!0), S.pointColor = new C(""), S.pointSize = new C(3), e.value.seriesSettings.push(S);
    }, P = (S) => {
      e.value.seriesSettings?.splice(S, 1);
    }, I = (S, _) => {
      try {
        const L = typeof _ == "string" ? _ : _?.value || _, k = typeof L == "string" ? JSON.parse(L) : L;
        S.borderDash ? S.borderDash.value = k : S.borderDash = new C(k);
      } catch (L) {
        console.error("Error parsing border dash preset:", L, _);
      }
    };
    return Ri(() => {
      e.value.seriesSettings || (e.value.seriesSettings = []), e.value.seriesSettings.forEach((S) => {
        S.label || (S.label = new C("")), S.borderColor || (S.borderColor = new C("")), S.backgroundColor || (S.backgroundColor = new C("")), S.borderWidth || (S.borderWidth = new C(2)), S.borderDash || (S.borderDash = new C([])), S.fill || (S.fill = new C(!1)), S.showPoints || (S.showPoints = new C(!0)), S.pointColor || (S.pointColor = new C("")), S.pointSize || (S.pointSize = new C(3));
      });
    }), (S, _) => {
      const L = _e("va-button"), k = _e("va-input"), Z = _e("va-select"), B = _e("va-color-input"), G = _e("va-checkbox"), K = _e("va-collapse");
      return H(), bt(Ut, null, [
        F(K, {
          modelValue: t.value.seriesSection,
          "onUpdate:modelValue": _[0] || (_[0] = (b) => t.value.seriesSection = b),
          icon: "format_list_numbered",
          header: "Per-Series Settings"
        }, {
          default: J(() => [
            W("div", Hg, [
              W("div", Fg, [
                _[39] || (_[39] = W("p", { style: { "margin-bottom": "12px", color: "var(--va-text-secondary)" } }, " Configure individual data series. Each series can have its own chart type, axis assignment, colors, and styling. ", -1)),
                W("div", Wg, [
                  _[33] || (_[33] = W("h3", null, "Series Configuration", -1)),
                  F(L, {
                    size: "small",
                    onClick: V
                  }, {
                    default: J(() => [..._[32] || (_[32] = [
                      Lt("Add Series", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), bt(Ut, null, ye(e.value.seriesSettings, (b, M) => (H(), bt("div", {
                  key: `series_${M}`,
                  style: { border: "1px solid #ddd", padding: "16px", "border-radius": "4px", "margin-bottom": "12px", background: "#fafafa" }
                }, [
                  W("div", zg, [
                    W("strong", Gg, "Series " + Ne(b.seriesIndex?.value ?? M), 1),
                    F(L, {
                      size: "small",
                      color: "danger",
                      onClick: (w) => P(M)
                    }, {
                      default: J(() => [..._[34] || (_[34] = [
                        Lt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  b.seriesIndex ? (H(), q(ct(dt), {
                    key: 0,
                    label: "Series Index (0-based)",
                    modelValue: b.seriesIndex,
                    "onUpdate:modelValue": (w) => b.seriesIndex = w,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: J(({ value: w, change: j }) => [
                      F(k, {
                        label: "Series Index (0-based)",
                        "model-value": w,
                        onInput: j,
                        type: "number",
                        min: 0
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  b.label !== void 0 ? (H(), q(ct(dt), {
                    key: 1,
                    label: "Series Label/Title (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (w) => b.label = w,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: J(({ value: w, change: j }) => [
                      F(k, {
                        label: "Series Label/Title (optional)",
                        "model-value": w,
                        onInput: j,
                        placeholder: "e.g., Temperature, Humidity, Pressure..."
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  b.chartType ? (H(), q(Z, {
                    key: 2,
                    label: "Chart Type",
                    modelValue: b.chartType.value,
                    "onUpdate:modelValue": (w) => b.chartType.value = w,
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
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  _[36] || (_[36] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Axis Assignment", -1)),
                  b.xAxisId ? (H(), q(ct(dt), {
                    key: 3,
                    label: "X-Axis ID (e.g., 'x', 'x1', 'x2')",
                    modelValue: b.xAxisId,
                    "onUpdate:modelValue": (w) => b.xAxisId = w,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: J(({ value: w, change: j }) => [
                      F(k, {
                        label: "X-Axis ID",
                        "model-value": w,
                        onInput: j,
                        placeholder: "x"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  b.yAxisId ? (H(), q(ct(dt), {
                    key: 4,
                    label: "Y-Axis ID (e.g., 'y', 'y1', 'y2')",
                    modelValue: b.yAxisId,
                    "onUpdate:modelValue": (w) => b.yAxisId = w,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: J(({ value: w, change: j }) => [
                      F(k, {
                        label: "Y-Axis ID",
                        "model-value": w,
                        onInput: j,
                        placeholder: "y"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  b.yAxisTitle ? (H(), q(k, {
                    key: 5,
                    label: "Y-Axis Title",
                    modelValue: b.yAxisTitle.value,
                    "onUpdate:modelValue": (w) => b.yAxisTitle.value = w,
                    placeholder: "e.g., Temperatur (°C)",
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  _[37] || (_[37] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Colors", -1)),
                  b.borderColor !== void 0 ? (H(), q(ct(dt), {
                    key: 6,
                    label: "Border Color",
                    modelValue: b.borderColor,
                    "onUpdate:modelValue": (w) => b.borderColor = w,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: J(({ value: w, change: j }) => [
                      F(B, {
                        label: "Border Color",
                        "model-value": w,
                        onInput: j
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  b.backgroundColor !== void 0 ? (H(), q(ct(dt), {
                    key: 7,
                    label: "Background Color",
                    modelValue: b.backgroundColor,
                    "onUpdate:modelValue": (w) => b.backgroundColor = w,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: J(({ value: w, change: j }) => [
                      F(B, {
                        label: "Background Color",
                        "model-value": w,
                        onInput: j
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  _[38] || (_[38] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Border Style", -1)),
                  b.borderWidth !== void 0 ? (H(), q(ct(dt), {
                    key: 8,
                    label: "Border Width (px)",
                    modelValue: b.borderWidth,
                    "onUpdate:modelValue": (w) => b.borderWidth = w,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: J(({ value: w, change: j }) => [
                      F(k, {
                        label: "Border Width (px)",
                        "model-value": w,
                        onInput: j,
                        type: "number",
                        min: 0,
                        max: 20
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  b.borderDash !== void 0 ? (H(), q(Z, {
                    key: 9,
                    label: "Border Style",
                    "model-value": JSON.stringify(b.borderDash.value || []),
                    options: h.map((w) => ({ value: JSON.stringify(w.value), text: w.label })),
                    "value-by": "value",
                    "onUpdate:modelValue": (w) => I(b, w),
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["model-value", "options", "onUpdate:modelValue"])) : U("", !0),
                  b.fill !== void 0 ? (H(), q(G, {
                    key: 10,
                    label: "Fill Area",
                    modelValue: b.fill.value,
                    "onUpdate:modelValue": (w) => b.fill.value = w,
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  b.chartType?.value === "line" || b.chartType === "line" ? (H(), bt("div", jg, [
                    _[35] || (_[35] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Point Style", -1)),
                    b.showPoints !== void 0 ? (H(), q(G, {
                      key: 0,
                      label: "Show Points",
                      modelValue: b.showPoints.value,
                      "onUpdate:modelValue": (w) => b.showPoints.value = w,
                      style: { "margin-bottom": "8px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                    b.pointColor !== void 0 && b.showPoints?.value ? (H(), q(ct(dt), {
                      key: 1,
                      label: "Point Color",
                      modelValue: b.pointColor,
                      "onUpdate:modelValue": (w) => b.pointColor = w,
                      style: { "margin-bottom": "8px" }
                    }, {
                      default: J(({ value: w, change: j }) => [
                        F(B, {
                          label: "Point Color",
                          "model-value": w,
                          onInput: j
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                    b.pointSize !== void 0 && b.showPoints?.value ? (H(), q(ct(dt), {
                      key: 2,
                      label: "Point Size (px)",
                      modelValue: b.pointSize,
                      "onUpdate:modelValue": (w) => b.pointSize = w
                    }, {
                      default: J(({ value: w, change: j }) => [
                        F(k, {
                          label: "Point Size (px)",
                          "model-value": w,
                          onInput: j,
                          type: "number",
                          min: 0,
                          max: 20
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0)
                  ])) : U("", !0)
                ]))), 128)),
                !e.value.seriesSettings || e.value.seriesSettings.length === 0 ? (H(), bt("div", Ug, ' No series-specific settings configured. Click "Add Series" to configure individual data series. ')) : U("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(K, {
          modelValue: t.value.styleSection,
          "onUpdate:modelValue": _[17] || (_[17] = (b) => t.value.styleSection = b),
          icon: "palette",
          header: "Default Chart Styling"
        }, {
          default: J(() => [
            W("div", Xg, [
              W("div", Yg, [
                _[40] || (_[40] = W("h3", null, "Chart Type", -1)),
                e.value.chartType ? (H(), q(Z, {
                  key: 0,
                  label: "Chart Type",
                  modelValue: e.value.chartType.value,
                  "onUpdate:modelValue": _[1] || (_[1] = (b) => e.value.chartType.value = b),
                  options: [
                    { value: "bar", text: "Bar Chart" },
                    { value: "line", text: "Line Chart" },
                    { value: "radar", text: "Radar Chart" },
                    { value: "pie", text: "Pie Chart" },
                    { value: "doughnut", text: "Doughnut Chart" },
                    { value: "polarArea", text: "Polar Area Chart" }
                  ],
                  "value-by": "value"
                }, null, 8, ["modelValue"])) : U("", !0)
              ]),
              r.value ? (H(), bt("div", $g, [
                _[41] || (_[41] = W("h3", null, "Line Style", -1)),
                e.value.borderColor ? (H(), q(ct(dt), {
                  key: 0,
                  label: "Line Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": _[2] || (_[2] = (b) => e.value.borderColor = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(B, {
                      label: "Line Color",
                      "model-value": b,
                      onInput: M
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderWidth ? (H(), q(ct(dt), {
                  key: 1,
                  label: "Line Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": _[3] || (_[3] = (b) => e.value.borderWidth = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(k, {
                      label: "Line Width (px)",
                      "model-value": b,
                      onInput: M,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderDash ? (H(), q(Z, {
                  key: 2,
                  label: "Line Style",
                  modelValue: f.value,
                  "onUpdate:modelValue": [
                    _[4] || (_[4] = (b) => f.value = b),
                    g
                  ],
                  options: h.map((b) => ({ value: JSON.stringify(b.value), text: b.label })),
                  "value-by": "value"
                }, null, 8, ["modelValue", "options"])) : U("", !0),
                e.value.fill ? (H(), q(G, {
                  key: 3,
                  label: "Fill Area Under Line",
                  modelValue: e.value.fill,
                  "onUpdate:modelValue": _[5] || (_[5] = (b) => e.value.fill = b)
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.backgroundColor && e.value.fill ? (H(), q(ct(dt), {
                  key: 4,
                  label: "Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": _[6] || (_[6] = (b) => e.value.backgroundColor = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(B, {
                      label: "Fill Color",
                      "model-value": b,
                      onInput: M
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                _[42] || (_[42] = W("h3", { style: { "margin-top": "16px" } }, "Point Style", -1)),
                e.value.showPoints ? (H(), q(G, {
                  key: 5,
                  label: "Show Points",
                  modelValue: e.value.showPoints.value,
                  "onUpdate:modelValue": _[7] || (_[7] = (b) => e.value.showPoints.value = b)
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.pointColor && e.value.showPoints ? (H(), q(ct(dt), {
                  key: 6,
                  label: "Point Color",
                  modelValue: e.value.pointColor,
                  "onUpdate:modelValue": _[8] || (_[8] = (b) => e.value.pointColor = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(B, {
                      label: "Point Color",
                      "model-value": b,
                      onInput: M
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.pointSize && e.value.showPoints ? (H(), q(ct(dt), {
                  key: 7,
                  label: "Point Size (px)",
                  modelValue: e.value.pointSize,
                  "onUpdate:modelValue": _[9] || (_[9] = (b) => e.value.pointSize = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(k, {
                      label: "Point Size (px)",
                      "model-value": b,
                      onInput: M,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0)
              ])) : U("", !0),
              a.value ? (H(), bt("div", Zg, [
                _[43] || (_[43] = W("h3", null, "Bar Layout", -1)),
                e.value.barOrientation ? (H(), q(Z, {
                  key: 0,
                  label: "Bar Orientation",
                  modelValue: e.value.barOrientation,
                  "onUpdate:modelValue": _[10] || (_[10] = (b) => e.value.barOrientation = b),
                  options: [
                    { value: "vertical", text: "Vertical (Standard)" },
                    { value: "horizontal", text: "Horizontal" }
                  ],
                  "value-by": "value"
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.stacked ? (H(), q(G, {
                  key: 1,
                  label: "Stacked Bars",
                  modelValue: e.value.stacked.value,
                  "onUpdate:modelValue": _[11] || (_[11] = (b) => e.value.stacked.value = b)
                }, null, 8, ["modelValue"])) : U("", !0),
                _[44] || (_[44] = W("h3", { style: { "margin-top": "16px" } }, "Bar Style", -1)),
                e.value.backgroundColor ? (H(), q(ct(dt), {
                  key: 2,
                  label: "Bar Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": _[12] || (_[12] = (b) => e.value.backgroundColor = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(B, {
                      label: "Bar Fill Color",
                      "model-value": b,
                      onInput: M
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderColor ? (H(), q(ct(dt), {
                  key: 3,
                  label: "Bar Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": _[13] || (_[13] = (b) => e.value.borderColor = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(B, {
                      label: "Bar Border Color",
                      "model-value": b,
                      onInput: M
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderWidth ? (H(), q(ct(dt), {
                  key: 4,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": _[14] || (_[14] = (b) => e.value.borderWidth = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(k, {
                      label: "Border Width (px)",
                      "model-value": b,
                      onInput: M,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0)
              ])) : U("", !0),
              l.value ? (H(), bt("div", Kg, [
                _[45] || (_[45] = W("h3", null, "Segment Style", -1)),
                e.value.borderColor ? (H(), q(ct(dt), {
                  key: 0,
                  label: "Segment Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": _[15] || (_[15] = (b) => e.value.borderColor = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(B, {
                      label: "Segment Border Color",
                      "model-value": b,
                      onInput: M
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderWidth ? (H(), q(ct(dt), {
                  key: 1,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": _[16] || (_[16] = (b) => e.value.borderWidth = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(k, {
                      label: "Border Width (px)",
                      "model-value": b,
                      onInput: M,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0)
              ])) : U("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(K, {
          modelValue: t.value.gridSection,
          "onUpdate:modelValue": _[24] || (_[24] = (b) => t.value.gridSection = b),
          icon: "grid_on",
          header: "Grid Lines"
        }, {
          default: J(() => [
            W("div", qg, [
              W("div", Jg, [
                _[46] || (_[46] = W("h3", null, "Horizontal Grid (Y-Axis)", -1)),
                e.value.showHorizontalGrid ? (H(), q(G, {
                  key: 0,
                  label: "Show Horizontal Grid",
                  modelValue: e.value.showHorizontalGrid.value,
                  "onUpdate:modelValue": _[18] || (_[18] = (b) => e.value.showHorizontalGrid.value = b)
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.horizontalGridColor ? (H(), q(ct(dt), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.horizontalGridColor,
                  "onUpdate:modelValue": _[19] || (_[19] = (b) => e.value.horizontalGridColor = b),
                  disabled: !e.value.showHorizontalGrid?.value
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(B, {
                      label: "Grid Color",
                      "model-value": b,
                      onInput: M
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "disabled"])) : U("", !0),
                e.value.horizontalGridWidth ? (H(), q(ct(dt), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.horizontalGridWidth,
                  "onUpdate:modelValue": _[20] || (_[20] = (b) => e.value.horizontalGridWidth = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(k, {
                      label: "Grid Width (px)",
                      "model-value": b,
                      onInput: M,
                      type: "number",
                      min: 0,
                      max: 10
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0)
              ]),
              W("div", Qg, [
                _[47] || (_[47] = W("h3", null, "Vertical Grid (X-Axis)", -1)),
                e.value.showVerticalGrid ? (H(), q(G, {
                  key: 0,
                  label: "Show Vertical Grid",
                  modelValue: e.value.showVerticalGrid,
                  "onUpdate:modelValue": _[21] || (_[21] = (b) => e.value.showVerticalGrid = b)
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.verticalGridColor ? (H(), q(ct(dt), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.verticalGridColor,
                  "onUpdate:modelValue": _[22] || (_[22] = (b) => e.value.verticalGridColor = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(B, {
                      label: "Grid Color",
                      "model-value": b,
                      onInput: M
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.verticalGridWidth ? (H(), q(ct(dt), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.verticalGridWidth,
                  "onUpdate:modelValue": _[23] || (_[23] = (b) => e.value.verticalGridWidth = b)
                }, {
                  default: J(({ value: b, change: M }) => [
                    F(k, {
                      label: "Grid Width (px)",
                      "model-value": b,
                      onInput: M,
                      type: "number",
                      min: 0,
                      max: 10
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(K, {
          modelValue: t.value.axisLabelSection,
          "onUpdate:modelValue": _[27] || (_[27] = (b) => t.value.axisLabelSection = b),
          icon: "text_fields",
          header: "Axis Titles"
        }, {
          default: J(() => [
            W("div", tp, [
              W("div", ep, [
                F(k, {
                  label: "X-Axis Title",
                  modelValue: s.value,
                  "onUpdate:modelValue": _[25] || (_[25] = (b) => s.value = b),
                  placeholder: "e.g., Zeit, Datum",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                F(k, {
                  label: "Y-Axis Title (y)",
                  modelValue: n.value,
                  "onUpdate:modelValue": _[26] || (_[26] = (b) => n.value = b),
                  placeholder: "e.g., Temperatur (°C)",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                (H(!0), bt(Ut, null, ye(c.value, (b) => (H(), bt(Ut, { key: b }, [
                  b !== "y" ? (H(), q(k, {
                    key: 0,
                    label: `Y-Axis Title (${b})`,
                    "model-value": d(b),
                    "onUpdate:modelValue": (M) => u(b, M),
                    placeholder: "e.g., Niederschlag (mm)",
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"])) : U("", !0)
                ], 64))), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(K, {
          modelValue: t.value.dateFormatSection,
          "onUpdate:modelValue": _[29] || (_[29] = (b) => t.value.dateFormatSection = b),
          icon: "event",
          header: "Date/Time Formatting"
        }, {
          default: J(() => [
            W("div", ip, [
              W("div", sp, [
                _[48] || (_[48] = W("h3", null, "X-Axis Date/Time Format", -1)),
                e.value.dateDisplayFormat ? (H(), q(Z, {
                  key: 0,
                  label: "Date Format",
                  modelValue: e.value.dateDisplayFormat.value,
                  "onUpdate:modelValue": _[28] || (_[28] = (b) => e.value.dateDisplayFormat.value = b),
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
                }, null, 8, ["modelValue"])) : U("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(K, {
          modelValue: t.value.annotationsSection,
          "onUpdate:modelValue": _[31] || (_[31] = (b) => t.value.annotationsSection = b),
          icon: "show_chart",
          header: "Reference Lines & Areas"
        }, {
          default: J(() => [
            W("div", np, [
              W("div", op, [
                e.value.annotationsEditMode ? (H(), q(G, {
                  key: 0,
                  label: "Enable Drag & Drop (Move annotations in chart)",
                  modelValue: e.value.annotationsEditMode,
                  "onUpdate:modelValue": _[30] || (_[30] = (b) => e.value.annotationsEditMode = b)
                }, null, 8, ["modelValue"])) : U("", !0)
              ]),
              W("div", rp, [
                W("div", ap, [
                  _[50] || (_[50] = W("h3", null, "Horizontal Lines (Y-Axis)", -1)),
                  F(L, {
                    size: "small",
                    onClick: p
                  }, {
                    default: J(() => [..._[49] || (_[49] = [
                      Lt("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), bt(Ut, null, ye(e.value.horizontalLines, (b, M) => (H(), bt("div", {
                  key: `hline_${M}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", lp, [
                    W("strong", null, "Line " + Ne(M + 1), 1),
                    F(L, {
                      size: "small",
                      color: "danger",
                      onClick: (w) => m(M)
                    }, {
                      default: J(() => [..._[51] || (_[51] = [
                        Lt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  F(k, {
                    label: "Y-Value",
                    modelValue: b.value,
                    "onUpdate:modelValue": (w) => b.value = w,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(B, {
                    label: "Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (w) => b.color = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(k, {
                    label: "Line Width (px)",
                    modelValue: b.width,
                    "onUpdate:modelValue": (w) => b.width = w,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(k, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (w) => b.label = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              W("div", cp, [
                W("div", dp, [
                  _[53] || (_[53] = W("h3", null, "Vertical Lines (X-Axis)", -1)),
                  F(L, {
                    size: "small",
                    onClick: y
                  }, {
                    default: J(() => [..._[52] || (_[52] = [
                      Lt("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), bt(Ut, null, ye(e.value.verticalLines, (b, M) => (H(), bt("div", {
                  key: `vline_${M}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", up, [
                    W("strong", null, "Line " + Ne(M + 1), 1),
                    F(L, {
                      size: "small",
                      color: "danger",
                      onClick: (w) => v(M)
                    }, {
                      default: J(() => [..._[54] || (_[54] = [
                        Lt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  F(k, {
                    label: "X-Value",
                    modelValue: b.value,
                    "onUpdate:modelValue": (w) => b.value = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(B, {
                    label: "Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (w) => b.color = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(k, {
                    label: "Line Width (px)",
                    modelValue: b.width,
                    "onUpdate:modelValue": (w) => b.width = w,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(k, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (w) => b.label = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              W("div", hp, [
                W("div", fp, [
                  _[56] || (_[56] = W("h3", null, "Horizontal Areas (Y-Axis Ranges)", -1)),
                  F(L, {
                    size: "small",
                    onClick: E
                  }, {
                    default: J(() => [..._[55] || (_[55] = [
                      Lt("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), bt(Ut, null, ye(e.value.horizontalBoxes, (b, M) => (H(), bt("div", {
                  key: `hbox_${M}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", gp, [
                    W("strong", null, "Area " + Ne(M + 1), 1),
                    F(L, {
                      size: "small",
                      color: "danger",
                      onClick: (w) => A(M)
                    }, {
                      default: J(() => [..._[57] || (_[57] = [
                        Lt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  F(k, {
                    label: "Y-Min",
                    modelValue: b.yMin,
                    "onUpdate:modelValue": (w) => b.yMin = w,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(k, {
                    label: "Y-Max",
                    modelValue: b.yMax,
                    "onUpdate:modelValue": (w) => b.yMax = w,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(B, {
                    label: "Fill Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (w) => b.color = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(k, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (w) => b.label = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              W("div", pp, [
                W("div", mp, [
                  _[59] || (_[59] = W("h3", null, "Vertical Areas (X-Axis Ranges)", -1)),
                  F(L, {
                    size: "small",
                    onClick: T
                  }, {
                    default: J(() => [..._[58] || (_[58] = [
                      Lt("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), bt(Ut, null, ye(e.value.verticalBoxes, (b, M) => (H(), bt("div", {
                  key: `vbox_${M}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", bp, [
                    W("strong", null, "Area " + Ne(M + 1), 1),
                    F(L, {
                      size: "small",
                      color: "danger",
                      onClick: (w) => O(M)
                    }, {
                      default: J(() => [..._[60] || (_[60] = [
                        Lt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  F(k, {
                    label: "X-Min",
                    modelValue: b.xMin,
                    "onUpdate:modelValue": (w) => b.xMin = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(k, {
                    label: "X-Max",
                    modelValue: b.xMax,
                    "onUpdate:modelValue": (w) => b.xMax = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(B, {
                    label: "Fill Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (w) => b.color = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(k, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (w) => b.label = w
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
}), yp = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, xp = /* @__PURE__ */ yp(_p, [["__scopeId", "data-v-c5346fb1"]]), vp = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2026 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

The form for the chart settings.

The order is the order of the decisions: first what kind of chart this is,
then how its lines and points look, then the grid and axes it sits in, and
last the date format. Point colour and size only mean anything once points
are shown, and the fill colour only once the area is filled - both say so
through a condition rather than by sitting there greyed out.

The per-series settings are a list and are not in this form yet; the
reference lines and areas are four lists the model does not type at all.
Both still come from the hand-written component beside this.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="ChartSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings"/>

  <components xsi:type="uimodel:FormView" name="ChartSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="typeGroup" layout="VERTICAL" label="Diagrammtyp">
      <fields xsi:type="uimodel:InputWidget"
          name="chartType"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/chartType"
          label="Typ"
          placeholder="bar, line, pie …"/>
      <fields xsi:type="uimodel:InputWidget"
          name="barOrientation"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/barOrientation"
          label="Ausrichtung"
          placeholder="vertical, horizontal"/>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="stacked"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/stacked"
          label="Gestapelt"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="lineGroup" layout="VERTICAL" label="Linie">
      <fields xsi:type="uimodel:InputWidget"
          name="borderColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/borderColor"
          label="Farbe"/>
      <fields xsi:type="uimodel:InputWidget"
          name="borderWidth"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/borderWidth"
          label="Stärke"/>
      <fields xsi:type="uimodel:InputWidget"
          name="borderDash"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/borderDash"
          label="Strichmuster"/>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="fill"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/fill"
          label="Fläche füllen"/>
      <!-- Only worth setting once there is an area to fill -->
      <fields xsi:type="uimodel:InputWidget"
          name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/backgroundColor"
          label="Füllfarbe">
        <visibilityCondition language="JS" body="self.fill?.value === true || self.fill?.value === 'true'"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="pointGroup" layout="VERTICAL" label="Punkte">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="showPoints"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/showPoints"
          label="Punkte zeigen"/>
      <fields xsi:type="uimodel:InputWidget"
          name="pointColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/pointColor"
          label="Farbe">
        <visibilityCondition language="JS" body="self.showPoints?.value === true || self.showPoints?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:InputWidget"
          name="pointSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/pointSize"
          label="Größe">
        <visibilityCondition language="JS" body="self.showPoints?.value === true || self.showPoints?.value === 'true'"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="gridGroup" layout="VERTICAL" label="Gitterlinien">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="showHorizontalGrid"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/showHorizontalGrid"
          label="Waagerecht"/>
      <fields xsi:type="uimodel:InputWidget"
          name="horizontalGridColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/horizontalGridColor"
          label="Farbe waagerecht">
        <visibilityCondition language="JS" body="self.showHorizontalGrid?.value === true || self.showHorizontalGrid?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:InputWidget"
          name="horizontalGridWidth"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/horizontalGridWidth"
          label="Stärke waagerecht">
        <visibilityCondition language="JS" body="self.showHorizontalGrid?.value === true || self.showHorizontalGrid?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="showVerticalGrid"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/showVerticalGrid"
          label="Senkrecht"/>
      <fields xsi:type="uimodel:InputWidget"
          name="verticalGridColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/verticalGridColor"
          label="Farbe senkrecht">
        <visibilityCondition language="JS" body="self.showVerticalGrid?.value === true || self.showVerticalGrid?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:InputWidget"
          name="verticalGridWidth"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/verticalGridWidth"
          label="Stärke senkrecht">
        <visibilityCondition language="JS" body="self.showVerticalGrid?.value === true || self.showVerticalGrid?.value === 'true'"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="axisGroup" layout="VERTICAL" label="Achsen">
      <fields xsi:type="uimodel:InputWidget"
          name="xAxisTitle"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/xAxisTitle"
          label="Titel X"/>
      <fields xsi:type="uimodel:InputWidget"
          name="yAxisTitle"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/yAxisTitle"
          label="Titel Y"/>
      <fields xsi:type="uimodel:InputWidget"
          name="dateDisplayFormat"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/dateDisplayFormat"
          label="Datumsformat"
          placeholder="dd.MM.yyyy HH:mm"/>
    </fields>

  </components>
</uimodel:UIModel>
`, Sp = [
  {
    name: "Chart Clicked",
    type: "click",
    description: "Triggered when the chart is clicked",
    payloadType: pn
  },
  {
    name: "Chart Right Clicked",
    type: "right_click",
    description: "Triggered when the chart is right-clicked",
    payloadType: pn
  }
];
var Tp = Object.defineProperty, Ep = Object.getOwnPropertyDescriptor, hn = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Ep(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && Tp(t, e, n), n;
}, er = (i, t) => (e, s) => t(e, s, i);
R.eINSTANCE;
const Te = "ChartWidget";
let Wi = class {
  constructor(i, t) {
    this.events = i, this.actions = t;
  }
  type = Te;
  component = Bg;
  settingsComponent = xp;
  supportedDSTypes = [];
  icon = Xa;
  name = "Chart";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: vp,
    uri: "/chart-settings.ui.xmi",
    ePackage: () => R.eINSTANCE,
    create: () => new x()
  };
  register() {
    this.events.registerWidget(Te, Sp), this.actions.registerWidgetType(Te, me, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Te), this.actions.unregisterWidgetType(Te);
  }
};
hn([
  Ia()
], Wi.prototype, "register", 1);
hn([
  Oa()
], Wi.prototype, "unregister", 1);
Wi = hn([
  Ra({
    service: [Ua],
    properties: { "widget.type": Te }
  }),
  er(0, fn(Ca)),
  er(1, fn(Aa))
], Wi);
export {
  x as ChartSettingsImpl,
  Bg as ChartWidget,
  Wi as ChartWidgetProvider,
  xp as ChartWidgetSettings,
  R as ChartsettingsPackage,
  vp as chartSettingsFormXmi
};
