(function(){var i="ui.vue.widget.chart",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings-container[data-v-0f6824eb]{padding:16px}.settings-block[data-v-0f6824eb]{display:flex;flex-direction:column;gap:12px}.settings-block h3[data-v-0f6824eb]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--va-primary)}\n";})();
import { WidgetActionInterfaceImpl as Oa, EVENT_ACTIONS_REGISTRY as Ra, PayloadImpl as dn, EVENT_REGISTRY_ID as Ca, EVENT_ACTIONS_REGISTRY_ID as Da } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Ia, deactivate as La, component as Ma, inject as un } from "@eclipse-daanse/tsm";
import { defineComponent as Wi, shallowRef as er, h as ms, ref as Be, onMounted as Ns, onUnmounted as ir, watch as _s, toRaw as ys, nextTick as ka, version as Pa, isProxy as sr, mergeModels as Na, toRefs as Fa, useModel as nr, inject as fn, computed as Q, createElementBlock as Ct, openBlock as Et, withModifiers as Ba, createBlock as or, createCommentVNode as rr, resolveDynamicComponent as Wa, resolveComponent as ri, createElementVNode as nt, createVNode as it, withCtx as zt, createTextVNode as Vt, Fragment as ai, renderList as li, toDisplayString as ci } from "vue";
import { VariableWrapper as R, useVariableRepository as Ha, useDatasourceRepository as za } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as Va } from "vue-router";
import { BasicEObject as ar, BasicEFactory as Ga, BasicEPackage as ja, EPackageRegistry as lr, BasicEClass as gn, BasicEReference as G, BasicEAttribute as hi, createContainmentEList as Xa, createBasicEList as di } from "@emfts/core";
import { WidgetAction as qe } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as Ua } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Ya } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), $a = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2049.5C22.5%2047.0147%2024.5147%2045%2027%2045H33C35.4853%2045%2037.5%2047.0147%2037.5%2049.5V93C37.5%2095.4853%2035.4853%2097.5%2033%2097.5H27C24.5147%2097.5%2022.5%2095.4853%2022.5%2093V49.5Z'%20fill='%23606060'/%3e%3cpath%20d='M52.5%2027C52.5%2024.5147%2054.5147%2022.5%2057%2022.5H63C65.4853%2022.5%2067.5%2024.5147%2067.5%2027V93C67.5%2095.4853%2065.4853%2097.5%2063%2097.5H57C54.5147%2097.5%2052.5%2095.4853%2052.5%2093V27Z'%20fill='%23606060'/%3e%3cpath%20d='M82.5%2072C82.5%2069.5147%2084.5147%2067.5%2087%2067.5H93C95.4853%2067.5%2097.5%2069.5147%2097.5%2072V93C97.5%2095.4853%2095.4853%2097.5%2093%2097.5H87C84.5147%2097.5%2082.5%2095.4853%2082.5%2093V72Z'%20fill='%23606060'/%3e%3c/svg%3e";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Je(i) {
  return i + 0.5 | 0;
}
const jt = (i, t, e) => Math.max(Math.min(i, e), t);
function We(i) {
  return jt(Je(i * 2.55), 0, 255);
}
function Ut(i) {
  return jt(Je(i * 255), 0, 255);
}
function Ft(i) {
  return jt(Je(i / 2.55) / 100, 0, 1);
}
function pn(i) {
  return jt(Je(i * 100), 0, 100);
}
const wt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, xs = [..."0123456789ABCDEF"], Za = (i) => xs[i & 15], Ka = (i) => xs[(i & 240) >> 4] + xs[i & 15], ui = (i) => (i & 240) >> 4 === (i & 15), qa = (i) => ui(i.r) && ui(i.g) && ui(i.b) && ui(i.a);
function Ja(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & wt[i[1]] * 17,
    g: 255 & wt[i[2]] * 17,
    b: 255 & wt[i[3]] * 17,
    a: t === 5 ? wt[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: wt[i[1]] << 4 | wt[i[2]],
    g: wt[i[3]] << 4 | wt[i[4]],
    b: wt[i[5]] << 4 | wt[i[6]],
    a: t === 9 ? wt[i[7]] << 4 | wt[i[8]] : 255
  })), e;
}
const Qa = (i, t) => i < 255 ? t(i) : "";
function tl(i) {
  var t = qa(i) ? Za : Ka;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Qa(i.a, t) : void 0;
}
const el = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function cr(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function il(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function sl(i, t, e) {
  const s = cr(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function nl(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Fs(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = nl(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Bs(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Ut);
}
function Ws(i, t, e) {
  return Bs(cr, i, t, e);
}
function ol(i, t, e) {
  return Bs(sl, i, t, e);
}
function rl(i, t, e) {
  return Bs(il, i, t, e);
}
function hr(i) {
  return (i % 360 + 360) % 360;
}
function al(i) {
  const t = el.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? We(+t[5]) : Ut(+t[5]));
  const n = hr(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = ol(n, o, r) : t[1] === "hsv" ? s = rl(n, o, r) : s = Ws(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function ll(i, t) {
  var e = Fs(i);
  e[0] = hr(e[0] + t), e = Ws(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function cl(i) {
  if (!i)
    return;
  const t = Fs(i), e = t[0], s = pn(t[1]), n = pn(t[2]);
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
}, mn = {
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
function hl() {
  const i = {}, t = Object.keys(mn), e = Object.keys(bn);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, bn[o]);
    o = parseInt(mn[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let fi;
function dl(i) {
  fi || (fi = hl(), fi.transparent = [0, 0, 0, 0]);
  const t = fi[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const ul = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function fl(i) {
  const t = ul.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? We(r) : jt(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? We(s) : jt(s, 0, 255)), n = 255 & (t[4] ? We(n) : jt(n, 0, 255)), o = 255 & (t[6] ? We(o) : jt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function gl(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Ft(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const es = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, pe = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function pl(i, t, e) {
  const s = pe(Ft(i.r)), n = pe(Ft(i.g)), o = pe(Ft(i.b));
  return {
    r: Ut(es(s + e * (pe(Ft(t.r)) - s))),
    g: Ut(es(n + e * (pe(Ft(t.g)) - n))),
    b: Ut(es(o + e * (pe(Ft(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function gi(i, t, e) {
  if (i) {
    let s = Fs(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Ws(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function dr(i, t) {
  return i && Object.assign(t || {}, i);
}
function _n(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = Ut(i[3]))) : (t = dr(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = Ut(t.a)), t;
}
function bl(i) {
  return i.charAt(0) === "r" ? fl(i) : al(i);
}
class Ue {
  constructor(t) {
    if (t instanceof Ue)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = _n(t) : e === "string" && (s = Ja(t) || dl(t) || bl(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = dr(this._rgb);
    return t && (t.a = Ft(t.a)), t;
  }
  set rgb(t) {
    this._rgb = _n(t);
  }
  rgbString() {
    return this._valid ? gl(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? tl(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? cl(this._rgb) : void 0;
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
    return t && (this._rgb = pl(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Ue(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Ut(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = Je(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return gi(this._rgb, 2, t), this;
  }
  darken(t) {
    return gi(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return gi(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return gi(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return ll(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function kt() {
}
const ml = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function X(i) {
  return i == null;
}
function Y(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function z(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function ct(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Rt(i, t) {
  return ct(i) ? i : t;
}
function F(i, t) {
  return typeof i > "u" ? t : i;
}
const _l = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, ur = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function U(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function $(i, t, e, s) {
  let n, o, r;
  if (Y(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (z(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function Ri(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Ci(i) {
  if (Y(i))
    return i.map(Ci);
  if (z(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Ci(i[e[n]]);
    return t;
  }
  return i;
}
function fr(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function yl(i, t, e, s) {
  if (!fr(i))
    return;
  const n = t[i], o = e[i];
  z(n) && z(o) ? $e(n, o, s) : t[i] = Ci(o);
}
function $e(i, t, e) {
  const s = Y(t) ? t : [
    t
  ], n = s.length;
  if (!z(i))
    return i;
  e = e || {};
  const o = e.merger || yl;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !z(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function Ge(i, t) {
  return $e(i, t, {
    merger: xl
  });
}
function xl(i, t, e) {
  if (!fr(i))
    return;
  const s = t[i], n = e[i];
  z(s) && z(n) ? Ge(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Ci(n));
}
const yn = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function Sl(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Tl(i) {
  const t = Sl(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function Kt(i, t) {
  return (yn[t] || (yn[t] = Tl(t)))(i);
}
function Hs(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const vt = (i) => typeof i < "u", Tt = (i) => typeof i == "function", xn = (i, t) => {
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
const H = Math.PI, q = 2 * H, wl = q + H, Di = Number.POSITIVE_INFINITY, zs = H / 180, tt = H / 2, At = H / 4, Ii = H * 2 / 3, gr = Math.log10, Lt = Math.sign;
function je(i, t, e) {
  return Math.abs(i - t) < e;
}
function Sn(i) {
  const t = Math.round(i);
  i = je(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(gr(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function El(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function Al(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function ae(i) {
  return !Al(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function Ol(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function Rl(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function lt(i) {
  return i * (H / 180);
}
function Hi(i) {
  return i * (180 / H);
}
function Tn(i) {
  if (!ct(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Li(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * H && (o += q), {
    angle: o,
    distance: n
  };
}
function xe(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Cl(i, t) {
  return (i - t + wl) % q - H;
}
function bt(i) {
  return (i % q + q) % q;
}
function Ze(i, t, e, s) {
  const n = bt(i), o = bt(t), r = bt(e), a = bt(o - n), l = bt(r - n), c = bt(n - o), h = bt(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function mt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Dl(i) {
  return mt(i, -32768, 32767);
}
function Bt(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Vs(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const se = (i, t, e, s) => Vs(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Il = (i, t, e) => Vs(i, e, (s) => i[s][t] >= e);
function Ll(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const pr = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Ml(i, t) {
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
  }), pr.forEach((e) => {
    const s = "_onData" + Hs(e), n = i[e];
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
function vn(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (pr.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function br(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const mr = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function _r(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, mr.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function kl(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Gs = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", pt = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Pl = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Nl(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, h = r.axis, { min: d, max: u, minDefined: f, maxDefined: g } = r.getUserBounds();
    if (f) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        se(l, h, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : se(t, h, r.getPixelForValue(d)).lo
      ), c) {
        const p = l.slice(0, n + 1).reverse().findIndex((b) => !X(b[a.axis]));
        n -= Math.max(0, p);
      }
      n = mt(n, 0, s - 1);
    }
    if (g) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        se(l, r.axis, u, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : se(t, h, r.getPixelForValue(u), !0).hi + 1
      );
      if (c) {
        const b = l.slice(p - 1).findIndex((m) => !X(m[a.axis]));
        p += Math.max(0, b);
      }
      o = mt(p, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function Fl(i) {
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
const pi = (i) => i === 0 || i === 1, wn = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * q / e)), En = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * q / e) + 1, Xe = {
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
  easeInSine: (i) => -Math.cos(i * tt) + 1,
  easeOutSine: (i) => Math.sin(i * tt),
  easeInOutSine: (i) => -0.5 * (Math.cos(H * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => pi(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => pi(i) ? i : wn(i, 0.075, 0.3),
  easeOutElastic: (i) => pi(i) ? i : En(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return pi(i) ? i : i < 0.5 ? 0.5 * wn(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * En(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - Xe.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Xe.easeInBounce(i * 2) * 0.5 : Xe.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function js(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function An(i) {
  return js(i) ? i : new Ue(i);
}
function is(i) {
  return js(i) ? i : new Ue(i).saturate(0.5).darken(0.1).hexString();
}
const Bl = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Wl = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Hl(i) {
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
      properties: Wl
    },
    numbers: {
      type: "number",
      properties: Bl
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
function zl(i) {
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
const On = /* @__PURE__ */ new Map();
function Vl(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = On.get(e);
  return s || (s = new Intl.NumberFormat(i, t), On.set(e, s)), s;
}
function zi(i, t, e) {
  return Vl(t, e).format(i);
}
const Gl = {
  values(i) {
    return Y(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = jl(i, e);
    }
    const r = gr(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), zi(i, s, l);
  }
};
function jl(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Xs = {
  formatters: Gl
};
function Xl(i) {
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
      callback: Xs.formatters.values,
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
const le = /* @__PURE__ */ Object.create(null), Ss = /* @__PURE__ */ Object.create(null);
function Ye(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function ss(i, t, e) {
  return typeof t == "string" ? $e(Ye(i, t), e) : $e(Ye(i, ""), t);
}
class Yl {
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => is(n.backgroundColor), this.hoverBorderColor = (s, n) => is(n.borderColor), this.hoverColor = (s, n) => is(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ss(this, t, e);
  }
  get(t) {
    return Ye(this, t);
  }
  describe(t, e) {
    return ss(Ss, t, e);
  }
  override(t, e) {
    return ss(le, t, e);
  }
  route(t, e, s, n) {
    const o = Ye(this, t), r = Ye(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return z(l) ? Object.assign({}, c, l) : F(l, c);
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
var st = /* @__PURE__ */ new Yl({
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
  Hl,
  zl,
  Xl
]);
function Ul(i) {
  return !i || X(i.size) || X(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Mi(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function $l(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, h, d, u;
  for (l = 0; l < a; l++)
    if (d = e[l], d != null && !Y(d))
      r = Mi(i, n, o, r, d);
    else if (Y(d))
      for (c = 0, h = d.length; c < h; c++)
        u = d[c], u != null && !Y(u) && (r = Mi(i, n, o, r, u));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete n[o[l]];
    o.splice(0, f);
  }
  return r;
}
function Qt(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function Rn(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function Ts(i, t, e, s) {
  yr(i, t, e, s, null);
}
function yr(i, t, e, s, n) {
  let o, r, a, l, c, h, d, u;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let b = (g || 0) * zs;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(b), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (i.beginPath(), f) {
      // Default includes circle
      default:
        n ? i.ellipse(e, s, n / 2, p, 0, 0, q) : i.arc(e, s, p, 0, q), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : p, i.moveTo(e + Math.sin(b) * h, s - Math.cos(b) * p), b += Ii, i.lineTo(e + Math.sin(b) * h, s - Math.cos(b) * p), b += Ii, i.lineTo(e + Math.sin(b) * h, s - Math.cos(b) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(b + At) * l, d = Math.cos(b + At) * (n ? n / 2 - c : l), a = Math.sin(b + At) * l, u = Math.sin(b + At) * (n ? n / 2 - c : l), i.arc(e - d, s - a, c, b - H, b - tt), i.arc(e + u, s - r, c, b - tt, b), i.arc(e + d, s + a, c, b, b + tt), i.arc(e - u, s + r, c, b + tt, b + H), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        b += At;
      /* falls through */
      case "rectRot":
        d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + u, s - r), i.lineTo(e + d, s + a), i.lineTo(e - u, s + r), i.closePath();
        break;
      case "crossRot":
        b += At;
      /* falls through */
      case "cross":
        d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r);
        break;
      case "star":
        d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r), b += At, d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r);
        break;
      case "line":
        r = n ? n / 2 : Math.cos(b) * p, a = Math.sin(b) * p, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(b) * (n ? n / 2 : p), s + Math.sin(b) * p);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function Wt(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function Qe(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function ti(i) {
  i.restore();
}
function Zl(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Kl(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function ql(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), X(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Jl(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function Ql(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function ce(i, t, e, s, n, o = {}) {
  const r = Y(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, ql(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Ql(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), X(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), Jl(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Se(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * H, H, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, H, tt, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, tt, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -tt, !0), i.lineTo(e + r.topLeft, s);
}
const tc = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, ec = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function ic(i, t) {
  const e = ("" + i).match(tc);
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
const sc = (i) => +i || 0;
function Ys(i, t) {
  const e = {}, s = z(t), n = s ? Object.keys(t) : t, o = z(i) ? s ? (r) => F(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = sc(o(r));
  return e;
}
function xr(i) {
  return Ys(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function $t(i) {
  return Ys(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function ht(i) {
  const t = xr(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function ot(i, t) {
  i = i || {}, t = t || st.font;
  let e = F(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = F(i.style, t.style);
  s && !("" + s).match(ec) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: F(i.family, t.family),
    lineHeight: ic(F(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: F(i.weight, t.weight),
    string: ""
  };
  return n.string = Ul(n), n;
}
function bi(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function nc(i, t, e) {
  const { min: s, max: n } = i, o = ur(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function Jt(i, t) {
  return Object.assign(Object.create(i), t);
}
function Us(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = wr("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => Us([
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
      return Tr(a, l, () => uc(l, t, i, a));
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
      const h = a._storage || (a._storage = n());
      return a[l] = h[l] = c, delete a._keys, !0;
    }
  });
}
function Te(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Sr(i, s),
    setContext: (o) => Te(i, o, e, s),
    override: (o) => Te(i.override(o), t, e, s)
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
      return Tr(o, r, () => rc(o, r, a));
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
function Sr(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: Tt(e) ? e : () => e,
    isIndexable: Tt(s) ? s : () => s
  };
}
const oc = (i, t) => i ? i + Hs(t) : t, $s = (i, t) => z(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Tr(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function rc(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return Tt(a) && r.isScriptable(t) && (a = ac(t, a, i, e)), Y(a) && a.length && (a = lc(t, a, i, r.isIndexable)), $s(t, a) && (a = Te(a, n, o && o[t], r)), a;
}
function ac(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), $s(i, l) && (l = Zs(n._scopes, n, i, l)), l;
}
function lc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (z(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = Zs(c, n, i, h);
      t.push(Te(d, o, r && r[i], a));
    }
  }
  return t;
}
function vr(i, t, e) {
  return Tt(i) ? i(t, e) : i;
}
const cc = (i, t) => i === !0 ? t : typeof i == "string" ? Kt(t, i) : void 0;
function hc(i, t, e, s, n) {
  for (const o of t) {
    const r = cc(e, o);
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
function Zs(i, t, e, s) {
  const n = t._rootScopes, o = vr(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Cn(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Cn(a, r, o, l, s), l === null) ? !1 : Us(Array.from(a), [
    ""
  ], n, o, () => dc(t, e, s));
}
function Cn(i, t, e, s, n) {
  for (; e; )
    e = hc(i, t, e, s, n);
  return e;
}
function dc(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return Y(n) && z(e) ? e : n || {};
}
function uc(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = wr(oc(o, i), e), typeof n < "u")
      return $s(i, n) ? Zs(e, s, i, n) : n;
}
function wr(i, t) {
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
  return t || (t = i._keys = fc(i._scopes)), t;
}
function fc(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function Er(i, t, e, s) {
  const { iScale: n } = i, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, l, c, h;
  for (a = 0, l = s; a < l; ++a)
    c = a + e, h = t[c], r[a] = {
      r: n.parse(Kt(h, o), c)
    };
  return r;
}
const gc = Number.EPSILON || 1e-14, ve = (i, t) => t < i.length && !i[t].skip && i[t], Ar = (i) => i === "x" ? "y" : "x";
function pc(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = xe(o, n), l = xe(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = s * c, u = s * h;
  return {
    previous: {
      x: o.x - d * (r.x - n.x),
      y: o.y - d * (r.y - n.y)
    },
    next: {
      x: o.x + u * (r.x - n.x),
      y: o.y + u * (r.y - n.y)
    }
  };
}
function bc(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = ve(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = ve(i, h + 1), !(!l || !c)) {
      if (je(t[h], 0, gc)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function mc(i, t, e = "x") {
  const s = Ar(e), n = i.length;
  let o, r, a, l = ve(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = ve(i, c + 1), !a)
      continue;
    const h = a[e], d = a[s];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
  }
}
function _c(i, t = "x") {
  const e = Ar(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = ve(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = ve(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? Lt(n[r - 1]) !== Lt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  bc(i, n, o), mc(i, o, t);
}
function mi(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function yc(i, t) {
  let e, s, n, o, r, a = Wt(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && Wt(i[e + 1], t), o && (n = i[e], r && (n.cp1x = mi(n.cp1x, t.left, t.right), n.cp1y = mi(n.cp1y, t.top, t.bottom)), a && (n.cp2x = mi(n.cp2x, t.left, t.right), n.cp2y = mi(n.cp2y, t.top, t.bottom)));
}
function xc(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    _c(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = pc(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && yc(i, e);
}
function Ks() {
  return typeof window < "u" && typeof document < "u";
}
function qs(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function ki(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Vi = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Sc(i, t) {
  return Vi(i).getPropertyValue(t);
}
const Tc = [
  "top",
  "right",
  "bottom",
  "left"
];
function oe(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = Tc[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const vc = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function wc(i, t) {
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
function ee(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Vi(e), o = n.boxSizing === "border-box", r = oe(n, "padding"), a = oe(n, "border", "width"), { x: l, y: c, box: h } = wc(i, e), d = r.left + (h && a.left), u = r.top + (h && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - d) / f * e.width / s),
    y: Math.round((c - u) / g * e.height / s)
  };
}
function Ec(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && qs(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Vi(o), l = oe(a, "border", "width"), c = oe(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = ki(a.maxWidth, o, "clientWidth"), n = ki(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Di,
    maxHeight: n || Di
  };
}
const Xt = (i) => Math.round(i * 10) / 10;
function Ac(i, t, e, s) {
  const n = Vi(i), o = oe(n, "margin"), r = ki(n.maxWidth, i, "clientWidth") || Di, a = ki(n.maxHeight, i, "clientHeight") || Di, l = Ec(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const u = oe(n, "border", "width"), f = oe(n, "padding");
    c -= f.width + u.width, h -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = Xt(Math.min(c, r, l.maxWidth)), h = Xt(Math.min(h, a, l.maxHeight)), c && !h && (h = Xt(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = Xt(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function In(i, t, e) {
  const s = t || 1, n = Xt(i.height * s), o = Xt(i.width * s);
  i.height = Xt(i.height), i.width = Xt(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Oc = (function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    Ks() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
})();
function Ln(i, t) {
  const e = Sc(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function ie(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Rc(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Cc(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = ie(i, n, e), a = ie(n, o, e), l = ie(o, t, e), c = ie(r, a, e), h = ie(a, l, e);
  return ie(c, h, e);
}
const Dc = function(i, t) {
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
}, Ic = function() {
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
function ye(i, t, e) {
  return i ? Dc(t, e) : Ic();
}
function Or(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Rr(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Cr(i) {
  return i === "angle" ? {
    between: Ze,
    compare: Cl,
    normalize: bt
  } : {
    between: Bt,
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
function Lc(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = Cr(s), l = t.length;
  let { start: c, end: h, loop: d } = i, u, f;
  if (d) {
    for (c += l, h += l, u = 0, f = l; u < f && r(a(t[c % l][s]), n, o); ++u)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: d,
    style: i.style
  };
}
function Dr(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Cr(s), { start: h, end: d, loop: u, style: f } = Lc(i, t, e), g = [];
  let p = !1, b = null, m, _, T;
  const w = () => l(n, T, m) && a(n, T) !== 0, x = () => a(o, m) === 0 || l(o, T, m), D = () => p || w(), S = () => !p || x();
  for (let A = h, v = h; A <= d; ++A)
    _ = t[A % r], !_.skip && (m = c(_[s]), m !== T && (p = l(m, n, o), b === null && D() && (b = a(m, n) === 0 ? A : v), b !== null && S() && (g.push(Mn({
      start: b,
      end: A,
      loop: u,
      count: r,
      style: f
    })), b = null), v = A, T = m));
  return b !== null && g.push(Mn({
    start: b,
    end: d,
    loop: u,
    count: r,
    style: f
  })), g;
}
function Ir(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Dr(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Mc(i, t, e, s) {
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
function kc(i, t, e, s) {
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
function Pc(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = Mc(e, n, o, s);
  if (s === !0)
    return kn(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return kn(i, kc(e, r, l, c), e, t);
}
function kn(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Nc(i, t, e, s);
}
function Nc(i, t, e, s) {
  const n = i._chart.getContext(), o = Pn(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let h = o, d = t[0].start, u = d;
  function f(g, p, b, m) {
    const _ = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= _;
      for (; e[p % l].skip; )
        p += _;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: b,
        style: m
      }), h = m, d = p % l);
    }
  }
  for (const g of t) {
    d = a ? d : g.start;
    let p = e[d % l], b;
    for (u = d + 1; u <= g.end; u++) {
      const m = e[u % l];
      b = Pn(s.setContext(Jt(n, {
        type: "segment",
        p0: p,
        p1: m,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: r
      }))), Fc(b, h) && f(d, u - 1, g.loop, h), p = m, h = b;
    }
    d < u - 1 && f(d, u - 1, g.loop, h);
  }
  return c;
}
function Pn(i) {
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
function Fc(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return js(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
function _i(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Bc(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: _i(e, t, "left"),
    right: _i(e, t, "right"),
    top: _i(s, t, "top"),
    bottom: _i(s, t, "bottom")
  } : t;
}
function Lr(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const s = Bc(t, i.chartArea);
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
class Wc {
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
    this._request || (this._running = !0, this._request = mr.call(window, () => {
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
var Pt = /* @__PURE__ */ new Wc();
const Nn = "transparent", Hc = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = An(i || Nn), n = s.valid && An(t || Nn);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class zc {
  constructor(t, e, s, n) {
    const o = e[s];
    n = bi([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = bi([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || Hc[t.type || typeof r], this._easing = Xe[t.easing] || Xe.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = bi([
        t.to,
        e,
        n,
        t.from
      ]), this._from = bi([
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
class Js {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!z(t))
      return;
    const e = Object.keys(st.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!z(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (Y(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = Gc(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && Vc(t.options.$animations, s).then(() => {
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
      const h = e[c];
      let d = o[c];
      const u = s.get(c);
      if (d)
        if (u && d.active()) {
          d.update(u, h, a);
          continue;
        } else
          d.cancel();
      if (!u || !u.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new zc(u, t, c, h), n.push(d);
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
      return Pt.add(this._chart, s), !0;
  }
}
function Vc(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Gc(i, t) {
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
function Fn(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function jc(i, t, e) {
  if (e === !1)
    return !1;
  const s = Fn(i, e), n = Fn(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function Xc(i) {
  let t, e, s, n;
  return z(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Mr(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function Bn(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let h = !1;
  for (r = 0, a = n.length; r < a; ++r) {
    if (l = +n[r], l === e) {
      if (h = !0, s.all)
        continue;
      break;
    }
    c = i.values[l], ct(c) && (o || t === 0 || Lt(t) === Lt(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function Yc(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    h = r[l], a[l] = {
      [n]: h,
      [o]: i[h]
    };
  return a;
}
function ns(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Uc(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function $c(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function Zc(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Wn(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function Hn(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = Uc(o, r, s), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const g = t[f], { [l]: p, [c]: b } = g, m = g._stacks || (g._stacks = {});
    u = m[c] = Zc(n, h, p), u[a] = b, u._top = Wn(u, r, !0, s.type), u._bottom = Wn(u, r, !1, s.type);
    const _ = u._visualValues || (u._visualValues = {});
    _[a] = b;
  }
}
function os(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function Kc(i, t) {
  return Jt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function qc(i, t, e) {
  return Jt(i, {
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
function Ie(i, t) {
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
const rs = (i) => i === "reset" || i === "none", zn = (i, t) => t ? i : Object.assign({}, i), Jc = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Mr(e, !0),
  values: null
};
class Ee {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = ns(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ie(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, g) => d === "x" ? u : d === "r" ? g : f, o = e.xAxisID = F(s.xAxisID, os(t, "x")), r = e.yAxisID = F(s.yAxisID, os(t, "y")), a = e.rAxisID = F(s.rAxisID, os(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
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
    this._data && vn(this._data, this), t._stacked && Ie(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (z(e)) {
      const n = this._cachedMeta;
      this._data = Yc(e, n);
    } else if (s !== e) {
      if (s) {
        vn(s, this);
        const n = this._cachedMeta;
        Ie(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Ml(e, this), this._syncList = [], this._data = e;
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
    e._stacked = ns(e.vScale, e), e.stack !== s.stack && (n = !0, Ie(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (Hn(this, e._parsed), e._stacked = ns(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, u = n;
    else {
      Y(n[t]) ? u = this.parseArrayData(s, n, t, e) : z(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
      const f = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
      s._sorted = l;
    }
    r && Hn(this, u);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(n);
    let u, f, g;
    for (u = 0, f = n; u < f; ++u)
      g = u + s, d[u] = {
        [a]: h || o.parse(c[g], g),
        [l]: r.parse(e[g], g)
      };
    return d;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, a = new Array(n);
    let l, c, h, d;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, d = e[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let h, d, u, f;
    for (h = 0, d = n; h < d; ++h)
      u = h + s, f = e[u], c[h] = {
        x: o.parse(Kt(f, a), u),
        y: r.parse(Kt(f, l), u)
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
      keys: Mr(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Bn(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = Bn(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = Jc(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = $c(a);
    let u, f;
    function g() {
      f = n[u];
      const p = f[a.axis];
      return !ct(f[t.axis]) || h > p || d < p;
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
    const e = this._cachedMeta._parsed, s = [];
    let n, o, r;
    for (n = 0, o = e.length; n < o; ++n)
      r = e[n][t.axis], ct(r) && s.push(r);
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
    this.update(t || "default"), e._clip = Xc(F(this.options.clip, jc(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = n[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
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
      o = r.$context || (r.$context = qc(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Kc(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && vt(s);
    if (a)
      return zn(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(st.elements[t]), g = () => this.getContext(s, n, e), p = c.resolveNamedOptions(u, f, g, d);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(zn(p, l))), p;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), u = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(u, this.getContext(t, s, e));
    }
    const c = new Js(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || rs(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    rs(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !rs(e) && this._resolveAnimations(void 0, e).update(t, s);
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
      s._stacked && Ie(s, n);
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
function Qc(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = br(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function th(i) {
  const t = i.iScale, e = Qc(t, i.type);
  let s = t._length, n, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (vt(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (n = 0, o = e.length; n < o; ++n)
    r = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    r = t.getPixelForTick(n), l();
  return s;
}
function eh(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return X(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function ih(i, t, e, s) {
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
function sh(i, t, e, s) {
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
function kr(i, t, e, s) {
  return Y(i) ? sh(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function Vn(i, t, e, s) {
  const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
  let c, h, d, u;
  for (c = e, h = e + s; c < h; ++c)
    u = t[c], d = {}, d[n.axis] = a || n.parse(r[c], c), l.push(kr(u, d, o, c));
  return l;
}
function as(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function nh(i, t, e) {
  return i !== 0 ? Lt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function oh(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function rh(i, t, e, s) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: h } = oh(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[Gn(h, r, a, l)] = !0, n = c)), o[Gn(n, r, a, l)] = !0, i.borderSkipped = o;
}
function Gn(i, t, e, s) {
  return s ? (i = ah(i, t, e), i = jn(i, e, t)) : i = jn(i, t, e), i;
}
function ah(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function jn(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function lh(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class ch extends Ee {
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
    return Vn(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return Vn(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, h = r.axis === "x" ? a : l, d = [];
    let u, f, g, p;
    for (u = s, f = s + n; u < f; ++u)
      p = e[u], g = {}, g[o.axis] = o.parse(Kt(p, c), u), d.push(kr(Kt(p, h), g, r, u));
    return d;
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
    const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), r = o._custom, a = as(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(o[n.axis]);
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
    const o = n === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), h = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n);
    for (let f = e; f < e + s; f++) {
      const g = this.getParsed(f), p = o || X(g[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), b = this._calculateBarIndexPixels(f, h), m = (g._stacks || {})[a.axis], _ = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !m || as(g._custom) || r === m._top || r === m._bottom,
        x: c ? p.head : b.center,
        y: c ? b.center : p.head,
        height: c ? b.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : b.size
      };
      u && (_.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const T = _.options || t[f].options;
      rh(_, T, m, r), lh(_, T, h.ratio), this.updateElement(t[f], f, _, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((h) => h.controller.options.grouped), o = s.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[s.axis], c = (h) => {
      const d = h._parsed.find((f) => f[s.axis] === l), u = d && d[h.vScale.axis];
      if (X(u) || isNaN(u))
        return !0;
    };
    for (const h of n)
      if (!(e !== void 0 && c(h)) && ((o === !1 || r.indexOf(h.stack) === -1 || o === void 0 && h.stack === void 0) && r.push(h.stack), h.index === t))
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
      t[F(this.chart.options.indexAxis === "x" ? s.xAxisID : s.yAxisID, e)] = !0;
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
      min: a || th(e),
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
    const { _cachedMeta: { vScale: e, _stacked: s, index: n }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, h = as(c);
    let d = l[e.axis], u = 0, f = s ? this.applyStack(e, l, s) : d, g, p;
    f !== d && (u = f - d, f = d), h && (d = c.barStart, f = c.barEnd - c.barStart, d !== 0 && Lt(d) !== Lt(c.barEnd) && (u = 0), u += d);
    const b = !X(o) && !h ? o : u;
    let m = e.getPixelForValue(b);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(u + f) : g = m, p = g - m, Math.abs(p) < r) {
      p = nh(p, e, a) * r, d === a && (m -= p / 2);
      const _ = e.getPixelForDecimal(0), T = e.getPixelForDecimal(1), w = Math.min(_, T), x = Math.max(_, T);
      m = Math.max(Math.min(m, x), w), g = m + p, s && !h && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(m));
    }
    if (m === e.getPixelForValue(a)) {
      const _ = Lt(p) * e.getLineWidthForValue(a) / 2;
      m += _, p -= _;
    }
    return {
      size: p,
      base: m,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, o = n.skipNull, r = F(n.maxBarThickness, 1 / 0);
    let a, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const h = o ? this._getStackCount(t) : e.stackCount, d = n.barThickness === "flex" ? ih(t, e, n, h * c) : eh(t, e, n, h * c), u = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(F(u, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
      a = d.start + d.chunk * g + d.chunk / 2, l = Math.min(r, d.chunk * d.ratio);
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
function hh(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < q) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), u = Math.sin(l), f = (T, w, x) => Ze(T, a, l, !0) ? 1 : Math.max(w, w * e, x, x * e), g = (T, w, x) => Ze(T, a, l, !0) ? -1 : Math.min(w, w * e, x, x * e), p = f(0, c, d), b = f(tt, h, u), m = g(H, c, d), _ = g(H + tt, h, u);
    s = (p - m) / 2, n = (b - _) / 2, o = -(p + m) / 2, r = -(b + _) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class Qs extends Ee {
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
              const d = t.getDatasetMeta(0).controller.getStyle(c);
              return {
                text: l,
                fillStyle: d.backgroundColor,
                fontColor: o,
                hidden: !t.getDataVisibility(c),
                lineDash: d.borderDash,
                lineDashOffset: d.borderDashOffset,
                lineJoin: d.borderJoinStyle,
                lineWidth: d.borderWidth,
                strokeStyle: d.borderColor,
                textAlign: n,
                pointStyle: s,
                borderRadius: r && (a || d.borderRadius),
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
      if (z(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +Kt(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return lt(this.options.rotation - 90);
  }
  _getCircumference() {
    return lt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = q, e = -q;
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
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(_l(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: g, offsetY: p } = hh(d, h, l), b = (s.width - r) / u, m = (s.height - r) / f, _ = Math.max(Math.min(b, m) / 2, 0), T = ur(this.options.radius, _), w = Math.max(T * l, 0), x = (T - w) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * T, this.offsetY = p * T, n.total = this.calculateTotal(), this.outerRadius = T - x * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / q);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: b } = this._getSharedOptions(e, n);
    let m = this._getRotation(), _;
    for (_ = 0; _ < e; ++_)
      m += this._circumference(_, o);
    for (_ = e; _ < e + s; ++_) {
      const T = this._circumference(_, o), w = t[_], x = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: m,
        endAngle: m + T,
        circumference: T,
        outerRadius: g,
        innerRadius: f
      };
      b && (x.options = p || this.resolveDataElementOptions(_, w.active ? "active" : n)), m += T, this.updateElement(w, _, x, n);
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
    return e > 0 && !isNaN(t) ? q * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = zi(e._parsed[t], s.options.locale);
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
    return Math.max(F(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class dh extends Ee {
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
    let { start: a, count: l } = Nl(e, n, r);
    this._drawStart = a, this._drawCount = l, Fl(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), u = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, b = ae(g) ? g : Number.POSITIVE_INFINITY, m = this.chart._animationsDisabled || o || n === "none", _ = e + s, T = t.length;
    let w = e > 0 && this.getParsed(e - 1);
    for (let x = 0; x < T; ++x) {
      const D = t[x], S = m ? D : {};
      if (x < e || x >= _) {
        S.skip = !0;
        continue;
      }
      const A = this.getParsed(x), v = X(A[f]), N = S[u] = r.getPixelForValue(A[u], x), P = S[f] = o || v ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, A, l) : A[f], x);
      S.skip = isNaN(N) || isNaN(P) || v, S.stop = x > 0 && Math.abs(A[u] - w[u]) > b, p && (S.parsed = A, S.raw = c.data[x]), d && (S.options = h || this.resolveDataElementOptions(x, D.active ? "active" : n)), m || this.updateElement(D, x, S, n), w = A;
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
class uh extends Ee {
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
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = zi(e._parsed[t].r, s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, s, n) {
    return Er.bind(this)(t, e, s, n);
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
    const o = n === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, h = c.xCenter, d = c.yCenter, u = c.getIndexAngle(0) - 0.5 * H;
    let f = u, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, n, p);
    for (g = e; g < e + s; g++) {
      const b = t[g];
      let m = f, _ = f + this._computeAngle(g, n, p), T = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = _, o && (l.animateScale && (T = 0), l.animateRotate && (m = _ = u));
      const w = {
        x: h,
        y: d,
        innerRadius: 0,
        outerRadius: T,
        startAngle: m,
        endAngle: _,
        options: this.resolveDataElementOptions(g, b.active ? "active" : n)
      };
      this.updateElement(b, g, w, n);
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
    return this.chart.getDataVisibility(t) ? lt(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
}
class fh extends Qs {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class gh extends Ee {
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
    return Er.bind(this)(t, e, s, n);
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
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : n), h = o.getPointPositionForValue(a, this.getParsed(a).r), d = r ? o.xCenter : h.x, u = r ? o.yCenter : h.y, f = {
        x: d,
        y: u,
        angle: h.angle,
        skip: isNaN(d) || isNaN(u),
        options: c
      };
      this.updateElement(l, a, f, n);
    }
  }
}
function te() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class tn {
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
    Object.assign(tn.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return te();
  }
  parse() {
    return te();
  }
  format() {
    return te();
  }
  add() {
    return te();
  }
  diff() {
    return te();
  }
  startOf() {
    return te();
  }
  endOf() {
    return te();
  }
}
var ph = {
  _date: tn
};
function bh(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Il : se;
    if (s) {
      if (n._sharedOptions) {
        const h = o[0], d = typeof h.getRange == "function" && h.getRange(t);
        if (d) {
          const u = c(o, t, e - d), f = c(o, t, e + d);
          return {
            lo: u.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const h = c(o, t, e);
      if (l) {
        const { vScale: d } = n._cachedMeta, { _parsed: u } = i, f = u.slice(0, h.lo + 1).reverse().findIndex((p) => !X(p[d.axis]));
        h.lo -= Math.max(0, f);
        const g = u.slice(h.hi).findIndex((p) => !X(p[d.axis]));
        h.hi += Math.max(0, g);
      }
      return h;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Gi(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: u } = bh(o[a], t, r, n);
    for (let f = d; f <= u; ++f) {
      const g = h[f];
      g.skip || s(g, c, f);
    }
  }
}
function mh(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function ls(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Gi(i, e, t, function(a, l, c) {
    !n && !Wt(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function _h(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = Li(r, {
      x: t.x,
      y: t.y
    });
    Ze(d, c, h) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Gi(i, e, t, o), n;
}
function yh(i, t, e, s, n, o) {
  let r = [];
  const a = mh(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, u) {
    const f = h.inRange(t.x, t.y, n);
    if (s && !f)
      return;
    const g = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(g)) && !f)
      return;
    const b = a(t, g);
    b < l ? (r = [
      {
        element: h,
        datasetIndex: d,
        index: u
      }
    ], l = b) : b === l && r.push({
      element: h,
      datasetIndex: d,
      index: u
    });
  }
  return Gi(i, e, t, c), r;
}
function cs(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? _h(i, t, e, n) : yh(i, t, e, s, n, o);
}
function Xn(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Gi(i, e, t, (l, c, h) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var xh = {
  modes: {
    index(i, t, e, s) {
      const n = ee(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? ls(i, n, o, s, r) : cs(i, n, o, !1, s, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = ee(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? ls(i, n, o, s, r) : cs(i, n, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return a;
    },
    point(i, t, e, s) {
      const n = ee(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ls(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = ee(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return cs(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = ee(t, i);
      return Xn(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = ee(t, i);
      return Xn(i, n, "y", e.intersect, s);
    }
  }
};
const Pr = [
  "left",
  "top",
  "right",
  "bottom"
];
function Le(i, t) {
  return i.filter((e) => e.pos === t);
}
function Yn(i, t) {
  return i.filter((e) => Pr.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Me(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Sh(i) {
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
function Th(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !Pr.includes(n))
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
function vh(i, t) {
  const e = Th(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function wh(i) {
  const t = Sh(i), e = Me(t.filter((c) => c.box.fullSize), !0), s = Me(Le(t, "left"), !0), n = Me(Le(t, "right")), o = Me(Le(t, "top"), !0), r = Me(Le(t, "bottom")), a = Yn(t, "x"), l = Yn(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: Le(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Un(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Nr(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Eh(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!z(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && Nr(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Un(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Un(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Ah(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Oh(i, t) {
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
function He(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Oh(a.horizontal, t));
    const { same: d, other: u } = Eh(t, e, a, s);
    c |= d && n.length, h = h || u, l.fullSize || n.push(a);
  }
  return c && He(n, t, e, s) || h;
}
function yi(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function $n(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, u = c.size || l.height;
      vt(c.start) && (r = c.start), l.fullSize ? yi(l, n.left, r, e.outerWidth - n.right - n.left, u) : yi(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, u = c.size || l.width;
      vt(c.start) && (o = c.start), l.fullSize ? yi(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : yi(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Ot = {
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
    const n = ht(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = wh(i.boxes), l = a.vertical, c = a.horizontal;
    $(i.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = l.reduce((p, b) => b.box.options && b.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), u = Object.assign({}, n);
    Nr(u, ht(s));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), g = vh(l.concat(c), d);
    He(a.fullSize, f, d, g), He(l, f, d, g), He(c, f, d, g) && He(l, f, d, g), Ah(f), $n(a.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, $n(a.rightAndBottom, f, d, g), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, $(a.chartArea, (p) => {
      const b = p.box;
      Object.assign(b, i.chartArea), b.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Fr {
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
class Rh extends Fr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ei = "$chartjs", Ch = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Zn = (i) => i === null || i === "";
function Dh(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Ei] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Zn(n)) {
    const o = Ln(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Zn(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = Ln(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Br = Oc ? {
  passive: !0
} : !1;
function Ih(i, t, e) {
  i && i.addEventListener(t, e, Br);
}
function Lh(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Br);
}
function Mh(i, t) {
  const e = Ch[i.type] || i.type, { x: s, y: n } = ee(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function Pi(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function kh(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Pi(a.addedNodes, s), r = r && !Pi(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function Ph(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Pi(a.removedNodes, s), r = r && !Pi(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const Ke = /* @__PURE__ */ new Map();
let Kn = 0;
function Wr() {
  const i = window.devicePixelRatio;
  i !== Kn && (Kn = i, Ke.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Nh(i, t) {
  Ke.size || window.addEventListener("resize", Wr), Ke.set(i, t);
}
function Fh(i) {
  Ke.delete(i), Ke.size || window.removeEventListener("resize", Wr);
}
function Bh(i, t, e) {
  const s = i.canvas, n = s && qs(s);
  if (!n)
    return;
  const o = _r((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), Nh(i, o), r;
}
function hs(i, t, e) {
  e && e.disconnect(), t === "resize" && Fh(i);
}
function Wh(i, t, e) {
  const s = i.canvas, n = _r((o) => {
    i.ctx !== null && e(Mh(o, i));
  }, i);
  return Ih(s, t, n), n;
}
class Hh extends Fr {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Dh(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Ei])
      return !1;
    const s = e[Ei].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      X(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[Ei], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: kh,
      detach: Ph,
      resize: Bh
    }[e] || Wh;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: hs,
      detach: hs,
      resize: hs
    }[e] || Lh)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Ac(t, e, s, n);
  }
  isAttached(t) {
    const e = t && qs(t);
    return !!(e && e.isConnected);
  }
}
function zh(i) {
  return !Ks() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Rh : Hh;
}
class _t {
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
    return ae(this.x) && ae(this.y);
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
function Vh(i, t) {
  const e = i.options.ticks, s = Gh(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? Xh(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return Yh(t, c, o, r / n), c;
  const h = jh(o, t, n);
  if (r > 0) {
    let d, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (xi(t, c, h, X(f) ? 0 : a - f, a), d = 0, u = r - 1; d < u; d++)
      xi(t, c, h, o[d], o[d + 1]);
    return xi(t, c, h, l, X(f) ? t.length : l + f), c;
  }
  return xi(t, c, h), c;
}
function Gh(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function jh(i, t, e) {
  const s = Uh(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = El(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function Xh(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function Yh(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function xi(i, t, e, s, n) {
  const o = F(s, 0), r = Math.min(F(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function Uh(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const $h = (i) => i === "left" ? "right" : i === "right" ? "left" : i, qn = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, Jn = (i, t) => Math.min(t || i, i);
function Qn(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function Zh(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Kh(i, t) {
  $(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function ke(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function to(i, t) {
  if (!i.display)
    return 0;
  const e = ot(i.font, t), s = ht(i.padding);
  return (Y(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function qh(i, t) {
  return Jt(i, {
    scale: t,
    type: "scale"
  });
}
function Jh(i, t, e) {
  return Jt(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Qh(i, t, e) {
  let s = Gs(i);
  return (e && t !== "right" || !e && t === "right") && (s = $h(s)), s;
}
function td(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, u, f, g;
  const p = r - n, b = a - o;
  if (i.isHorizontal()) {
    if (f = pt(s, o, a), z(e)) {
      const m = Object.keys(e)[0], _ = e[m];
      g = h[m].getPixelForValue(_) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = qn(i, e, t);
    u = a - o;
  } else {
    if (z(e)) {
      const m = Object.keys(e)[0], _ = e[m];
      f = h[m].getPixelForValue(_) - b + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - b + t : f = qn(i, e, t);
    g = pt(s, r, n), d = e === "left" ? -tt : tt;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: u,
    rotation: d
  };
}
class Ae extends _t {
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
    return t = Rt(t, Number.POSITIVE_INFINITY), e = Rt(e, Number.NEGATIVE_INFINITY), s = Rt(s, Number.POSITIVE_INFINITY), n = Rt(n, Number.NEGATIVE_INFINITY), {
      min: Rt(t, s),
      max: Rt(e, n),
      minDefined: ct(t),
      maxDefined: ct(e)
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
      min: Rt(e, Rt(s, e)),
      max: Rt(s, Rt(e, s))
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
    U(this.options.beforeUpdate, [
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = nc(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Qn(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Vh(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    U(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    U(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    U(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), U(this.options[t], [
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
    U(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = U(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    U(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    U(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = Jn(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = mt(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - ke(t.grid) - e.padding - to(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = Hi(Math.min(Math.asin(mt((h.highest.height + 6) / a, -1, 1)), Math.asin(mt(l / c, -1, 1)) - Math.asin(mt(u / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    U(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    U(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = to(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = ke(o) + l) : (t.height = this.maxHeight, t.width = ke(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, g = lt(this.labelRotation), p = Math.cos(g), b = Math.sin(g);
        if (a) {
          const m = s.mirror ? 0 : b * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + m + f);
        } else {
          const m = s.mirror ? 0 : p * d.width + b * u.height;
          t.width = Math.min(this.maxWidth, t.width + m + f);
        }
        this._calculatePadding(c, h, b, p);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    U(this.options.afterFit, [
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
      X(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = Qn(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / Jn(e, s));
    let c = 0, h = 0, d, u, f, g, p, b, m, _, T, w, x;
    for (d = 0; d < e; d += l) {
      if (g = t[d].label, p = this._resolveTickFontOptions(d), n.font = b = p.string, m = o[b] = o[b] || {
        data: {},
        gc: []
      }, _ = p.lineHeight, T = w = 0, !X(g) && !Y(g))
        T = Mi(n, m.data, m.gc, T, g), w = _;
      else if (Y(g))
        for (u = 0, f = g.length; u < f; ++u)
          x = g[u], !X(x) && !Y(x) && (T = Mi(n, m.data, m.gc, T, x), w += _);
      r.push(T), a.push(w), c = Math.max(T, c), h = Math.max(w, h);
    }
    Kh(o, e);
    const D = r.indexOf(c), S = a.indexOf(h), A = (v) => ({
      width: r[v] || 0,
      height: a[v] || 0
    });
    return {
      first: A(0),
      last: A(e - 1),
      widest: A(D),
      highest: A(S),
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
    return Dl(this._alignToPixels ? Qt(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = Jh(this.getContext(), t, s));
    }
    return this.$context || (this.$context = qh(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = lt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = ke(o), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, b = p / 2, m = function(B) {
      return Qt(s, B, p);
    };
    let _, T, w, x, D, S, A, v, N, P, E, M;
    if (r === "top")
      _ = m(this.bottom), S = this.bottom - u, v = _ - b, P = m(t.top) + b, M = t.bottom;
    else if (r === "bottom")
      _ = m(this.top), P = t.top, M = m(t.bottom) - b, S = _ + b, v = this.top + u;
    else if (r === "left")
      _ = m(this.right), D = this.right - u, A = _ - b, N = m(t.left) + b, E = t.right;
    else if (r === "right")
      _ = m(this.left), N = t.left, E = m(t.right) - b, D = _ + b, A = this.left + u;
    else if (e === "x") {
      if (r === "center")
        _ = m((t.top + t.bottom) / 2 + 0.5);
      else if (z(r)) {
        const B = Object.keys(r)[0], k = r[B];
        _ = m(this.chart.scales[B].getPixelForValue(k));
      }
      P = t.top, M = t.bottom, S = _ + b, v = S + u;
    } else if (e === "y") {
      if (r === "center")
        _ = m((t.left + t.right) / 2);
      else if (z(r)) {
        const B = Object.keys(r)[0], k = r[B];
        _ = m(this.chart.scales[B].getPixelForValue(k));
      }
      D = _ - b, A = D - u, N = t.left, E = t.right;
    }
    const V = F(n.ticks.maxTicksLimit, d), L = Math.max(1, Math.ceil(d / V));
    for (T = 0; T < d; T += L) {
      const B = this.getContext(T), k = o.setContext(B), K = a.setContext(B), Z = k.lineWidth, dt = k.color, ft = K.dash || [], ut = K.dashOffset, gt = k.tickWidth, rt = k.tickColor, et = k.tickBorderDash || [], at = k.tickBorderDashOffset;
      w = Zh(this, T, l), w !== void 0 && (x = Qt(s, w, Z), c ? D = A = N = E = x : S = v = P = M = x, f.push({
        tx1: D,
        ty1: S,
        tx2: A,
        ty2: v,
        x1: N,
        y1: P,
        x2: E,
        y2: M,
        width: Z,
        color: dt,
        borderDash: ft,
        borderDashOffset: ut,
        tickWidth: gt,
        tickColor: rt,
        tickBorderDash: et,
        tickBorderDashOffset: at
      }));
    }
    return this._ticksLength = d, this._borderValue = _, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = ke(s.grid), f = u + h, g = d ? -h : f, p = -lt(this.labelRotation), b = [];
    let m, _, T, w, x, D, S, A, v, N, P, E, M = "middle";
    if (n === "top")
      D = this.bottom - g, S = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      D = this.top + g, S = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const L = this._getYAxisLabelAlignment(u);
      S = L.textAlign, x = L.x;
    } else if (n === "right") {
      const L = this._getYAxisLabelAlignment(u);
      S = L.textAlign, x = L.x;
    } else if (e === "x") {
      if (n === "center")
        D = (t.top + t.bottom) / 2 + f;
      else if (z(n)) {
        const L = Object.keys(n)[0], B = n[L];
        D = this.chart.scales[L].getPixelForValue(B) + f;
      }
      S = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        x = (t.left + t.right) / 2 - f;
      else if (z(n)) {
        const L = Object.keys(n)[0], B = n[L];
        x = this.chart.scales[L].getPixelForValue(B);
      }
      S = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? M = "top" : l === "end" && (M = "bottom"));
    const V = this._getLabelSizes();
    for (m = 0, _ = a.length; m < _; ++m) {
      T = a[m], w = T.label;
      const L = o.setContext(this.getContext(m));
      A = this.getPixelForTick(m) + o.labelOffset, v = this._resolveTickFontOptions(m), N = v.lineHeight, P = Y(w) ? w.length : 1;
      const B = P / 2, k = L.color, K = L.textStrokeColor, Z = L.textStrokeWidth;
      let dt = S;
      r ? (x = A, S === "inner" && (m === _ - 1 ? dt = this.options.reverse ? "left" : "right" : m === 0 ? dt = this.options.reverse ? "right" : "left" : dt = "center"), n === "top" ? c === "near" || p !== 0 ? E = -P * N + N / 2 : c === "center" ? E = -V.highest.height / 2 - B * N + N : E = -V.highest.height + N / 2 : c === "near" || p !== 0 ? E = N / 2 : c === "center" ? E = V.highest.height / 2 - B * N : E = V.highest.height - P * N, d && (E *= -1), p !== 0 && !L.showLabelBackdrop && (x += N / 2 * Math.sin(p))) : (D = A, E = (1 - P) * N / 2);
      let ft;
      if (L.showLabelBackdrop) {
        const ut = ht(L.backdropPadding), gt = V.heights[m], rt = V.widths[m];
        let et = E - ut.top, at = 0 - ut.left;
        switch (M) {
          case "middle":
            et -= gt / 2;
            break;
          case "bottom":
            et -= gt;
            break;
        }
        switch (S) {
          case "center":
            at -= rt / 2;
            break;
          case "right":
            at -= rt;
            break;
          case "inner":
            m === _ - 1 ? at -= rt : m > 0 && (at -= rt / 2);
            break;
        }
        ft = {
          left: at,
          top: et,
          width: rt + ut.width,
          height: gt + ut.height,
          color: L.backdropColor
        };
      }
      b.push({
        label: w,
        font: v,
        textOffset: E,
        options: {
          rotation: p,
          color: k,
          strokeColor: K,
          strokeWidth: Z,
          textAlign: dt,
          textBaseline: M,
          translation: [
            x,
            D
          ],
          backdrop: ft
        }
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-lt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
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
    const a = (l, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
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
    let c, h, d, u;
    this.isHorizontal() ? (c = Qt(t, this.left, r) - r / 2, h = Qt(t, this.right, a) + a / 2, d = u = l) : (d = Qt(t, this.top, r) - r / 2, u = Qt(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, u), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && Qe(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      ce(s, c, 0, h, l, a);
    }
    n && ti(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = ot(s.font), r = ht(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || z(e) ? (l += r.bottom, Y(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = td(this, l, e, a);
    ce(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: u,
      textAlign: Qh(a, e, n),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = F(t.grid && t.grid.z, -1), n = F(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Ae.prototype.draw ? [
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
    return ot(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Si {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    sd(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, ed(t, r, s), this.override && st.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in st[n] && (delete st[n][s], this.override && delete le[s]);
  }
}
function ed(i, t, e) {
  const s = $e(/* @__PURE__ */ Object.create(null), [
    e ? st.get(e) : {},
    st.get(t),
    i.defaults
  ]);
  st.set(t, s), i.defaultRoutes && id(t, i.defaultRoutes), i.descriptors && st.describe(t, i.descriptors);
}
function id(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    st.route(o, n, l, a);
  });
}
function sd(i) {
  return "id" in i && "defaults" in i;
}
class nd {
  constructor() {
    this.controllers = new Si(Ee, "datasets", !0), this.elements = new Si(_t, "elements"), this.plugins = new Si(Object, "plugins"), this.scales = new Si(Ae, "scales"), this._typedRegistries = [
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
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : $(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Hs(t);
    U(s["before" + n], [], s), e[t](s), U(s["after" + n], [], s);
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
var It = /* @__PURE__ */ new nd();
class od {
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
      if (U(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    X(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = F(s.options && s.options.plugins, {}), o = rd(s);
    return n === !1 && !e ? [] : ld(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function rd(i) {
  const t = {}, e = [], s = Object.keys(It.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(It.getPlugin(s[o]));
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
function ad(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function ld(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = ad(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: cd(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function cd(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function vs(i, t) {
  const e = st.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function hd(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function dd(i, t) {
  return i === t ? "_index_" : "_value_";
}
function eo(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function ud(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function ws(i, ...t) {
  if (eo(i))
    return i;
  for (const e of t) {
    const s = e.axis || ud(e.position) || i.length > 1 && eo(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function io(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function fd(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return io(i, "x", e[0]) || io(i, "y", e[0]);
  }
  return {};
}
function gd(i, t) {
  const e = le[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = vs(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!z(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = ws(r, a, fd(r, i), st.scales[a.type]), c = dd(l, n), h = e.scales || {};
    o[r] = Ge(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || vs(a, t), h = (le[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const u = hd(d, l), f = r[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Ge(o[f], [
        {
          axis: u
        },
        s[f],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Ge(a, [
      st.scales[a.type],
      st.scale
    ]);
  }), o;
}
function Hr(i) {
  const t = i.options || (i.options = {});
  t.plugins = F(t.plugins, {}), t.scales = gd(i, t);
}
function zr(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function pd(i) {
  return i = i || {}, i.data = zr(i.data), Hr(i), i;
}
const so = /* @__PURE__ */ new Map(), Vr = /* @__PURE__ */ new Set();
function Ti(i, t) {
  let e = so.get(i);
  return e || (e = t(), so.set(i, e), Vr.add(e)), e;
}
const Pe = (i, t, e) => {
  const s = Kt(t, e);
  s !== void 0 && i.add(s);
};
class bd {
  constructor(t) {
    this._config = pd(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = zr(t);
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
    this.clearCache(), Hr(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Ti(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Ti(`${t}.transition.${e}`, () => [
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
    return Ti(`${t}-${e}`, () => [
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
    return Ti(`${s}-plugin-${e}`, () => [
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
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => Pe(l, t, d))), h.forEach((d) => Pe(l, n, d)), h.forEach((d) => Pe(l, le[o] || {}, d)), h.forEach((d) => Pe(l, st, d)), h.forEach((d) => Pe(l, Ss, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Vr.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      le[e] || {},
      st.datasets[e] || {},
      {
        type: e
      },
      st,
      Ss
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = no(this._resolverCache, t, n);
    let l = r;
    if (_d(r, e)) {
      o.$shared = !1, s = Tt(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Te(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = no(this._resolverCache, t, s);
    return z(e) ? Te(o, e, void 0, n) : o;
  }
}
function no(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: Us(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const md = (i) => z(i) && Object.getOwnPropertyNames(i).some((t) => Tt(i[t]));
function _d(i, t) {
  const { isScriptable: e, isIndexable: s } = Sr(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (Tt(a) || md(a)) || r && Y(a))
      return !0;
  }
  return !1;
}
var yd = "4.5.1";
const xd = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function oo(i, t) {
  return i === "top" || i === "bottom" || xd.indexOf(i) === -1 && t === "x";
}
function ro(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function ao(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), U(e && e.onComplete, [
    i
  ], t);
}
function Sd(i) {
  const t = i.chart, e = t.options.animation;
  U(e && e.onProgress, [
    i
  ], t);
}
function Gr(i) {
  return Ks() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Ai = {}, lo = (i) => {
  const t = Gr(i);
  return Object.values(Ai).filter((e) => e.canvas === t).pop();
};
function Td(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function vd(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let re = class {
  static defaults = st;
  static instances = Ai;
  static overrides = le;
  static registry = It;
  static version = yd;
  static getChart = lo;
  static register(...t) {
    It.add(...t), co();
  }
  static unregister(...t) {
    It.remove(...t), co();
  }
  constructor(t, e) {
    const s = this.config = new bd(e), n = Gr(t), o = lo(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || zh(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = ml(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new od(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = kl((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], Ai[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Pt.listen(this, "complete", ao), Pt.listen(this, "progress", Sd), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return X(t) ? e && o ? o : n ? s / n : null : t;
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
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : In(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Rn(this.canvas, this.ctx), this;
  }
  stop() {
    return Pt.stop(this), this;
  }
  resize(t, e) {
    Pt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, In(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), U(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    $(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = ws(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), $(o, (r) => {
      const a = r.options, l = a.id, c = ws(l, a), h = F(a.type, r.dtype);
      (a.position === void 0 || oo(a.position, c) !== oo(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const u = It.getScale(h);
        d = new u({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(a, t);
    }), $(n, (r, a) => {
      r || delete s[a];
    }), $(s, (r) => {
      Ot.configure(this, r, r.options), Ot.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(ro("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || vs(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = It.getController(a), { datasetElementType: c, dataElementType: h } = st.datasets[a];
        Object.assign(l, {
          dataElementType: It.getElement(h),
          datasetElementType: c && It.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    $(this.data.datasets, (t, e) => {
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
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), u = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), r = Math.max(+d.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || $(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(ro("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    $(this.scales, (t) => {
      Ot.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!xn(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      Td(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!xn(n, s(o)))
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
    Ot.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], $(this.boxes, (n) => {
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
        this._updateDataset(e, Tt(t) ? t({
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
    }) !== !1 && (Pt.has(this) ? this.attached && !Pt.running(this) && Pt.start(this) : (this.draw(), ao({
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
    }, n = Lr(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && Qe(e, n), t.controller.draw(), n && ti(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return Wt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = xh.modes[e];
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
    return this.$context || (this.$context = Jt(null, {
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
    vt(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    for (this.stop(), Pt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Rn(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Ai[this.id], this.notifyPlugins("afterDestroy");
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
    $(this.options.events, (o) => s(o, n));
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
    $(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, $(this._responsiveListeners, (t, e) => {
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
    !Ri(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = s ? t : o(t, e);
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
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = vl(t), c = vd(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, U(o.onHover, [
      t,
      a,
      this
    ], this), l && U(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !Ri(a, n);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h;
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
function co() {
  return $(re.instances, (i) => i._plugins.invalidate());
}
function wd(i, t, e) {
  const { startAngle: s, x: n, y: o, outerRadius: r, innerRadius: a, options: l } = t, { borderWidth: c, borderJoinStyle: h } = l, d = Math.min(c / r, bt(s - e));
  if (i.beginPath(), i.arc(n, o, r - c / 2, s + d / 2, e - d / 2), a > 0) {
    const u = Math.min(c / a, bt(s - e));
    i.arc(n, o, a + c / 2, e - u / 2, s + u / 2, !0);
  } else {
    const u = Math.min(c / 2, r * bt(s - e));
    if (h === "round")
      i.arc(n, o, u, e - H / 2, s + H / 2, !0);
    else if (h === "bevel") {
      const f = 2 * u * u, g = -f * Math.cos(e + H / 2) + n, p = -f * Math.sin(e + H / 2) + o, b = f * Math.cos(s + H / 2) + n, m = f * Math.sin(s + H / 2) + o;
      i.lineTo(g, p), i.lineTo(b, m);
    }
  }
  i.closePath(), i.moveTo(0, 0), i.rect(0, 0, i.canvas.width, i.canvas.height), i.clip("evenodd");
}
function Ed(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + tt, s - tt), i.closePath(), i.clip();
}
function Ad(i) {
  return Ys(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Od(i, t, e, s) {
  const n = Ad(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return mt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: mt(n.innerStart, 0, r),
    innerEnd: mt(n.innerEnd, 0, r)
  };
}
function be(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function Ni(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), u = h > 0 ? h + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const L = h > 0 ? h - s : 0, B = d > 0 ? d - s : 0, k = (L + B) / 2, K = k !== 0 ? g * k / (k + s) : g;
    f = (g - K) / 2;
  }
  const p = Math.max(1e-3, g * d - e / H) / d, b = (g - p) / 2, m = l + b + f, _ = n - b - f, { outerStart: T, outerEnd: w, innerStart: x, innerEnd: D } = Od(t, u, d, _ - m), S = d - T, A = d - w, v = m + T / S, N = _ - w / A, P = u + x, E = u + D, M = m + x / P, V = _ - D / E;
  if (i.beginPath(), o) {
    const L = (v + N) / 2;
    if (i.arc(r, a, d, v, L), i.arc(r, a, d, L, N), w > 0) {
      const Z = be(A, N, r, a);
      i.arc(Z.x, Z.y, w, N, _ + tt);
    }
    const B = be(E, _, r, a);
    if (i.lineTo(B.x, B.y), D > 0) {
      const Z = be(E, V, r, a);
      i.arc(Z.x, Z.y, D, _ + tt, V + Math.PI);
    }
    const k = (_ - D / u + (m + x / u)) / 2;
    if (i.arc(r, a, u, _ - D / u, k, !0), i.arc(r, a, u, k, m + x / u, !0), x > 0) {
      const Z = be(P, M, r, a);
      i.arc(Z.x, Z.y, x, M + Math.PI, m - tt);
    }
    const K = be(S, m, r, a);
    if (i.lineTo(K.x, K.y), T > 0) {
      const Z = be(S, v, r, a);
      i.arc(Z.x, Z.y, T, m - tt, v);
    }
  } else {
    i.moveTo(r, a);
    const L = Math.cos(v) * d + r, B = Math.sin(v) * d + a;
    i.lineTo(L, B);
    const k = Math.cos(N) * d + r, K = Math.sin(N) * d + a;
    i.lineTo(k, K);
  }
  i.closePath();
}
function Rd(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Ni(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % q || q));
  }
  return Ni(i, t, e, s, l, n), i.fill(), l;
}
function Cd(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h, borderDash: d, borderDashOffset: u, borderRadius: f } = l, g = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(d || []), i.lineDashOffset = u, g ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let p = t.endAngle;
  if (o) {
    Ni(i, t, e, s, p, n);
    for (let b = 0; b < o; ++b)
      i.stroke();
    isNaN(a) || (p = r + (a % q || q));
  }
  g && Ed(i, t, p), l.selfJoin && p - r >= H && f === 0 && h !== "miter" && wd(i, t, p), o || (Ni(i, t, e, s, p, n), i.stroke());
}
class Dd extends _t {
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
    ], s), { angle: o, distance: r } = Li(n, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), u = (this.options.spacing + this.options.borderWidth) / 2, f = F(d, l - a), g = Ze(o, a, l) && a !== l, p = f >= q || g, b = Bt(r, c + u, h + u);
    return p && b;
  }
  getCenterPoint(t) {
    const { x: e, y: s, startAngle: n, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], t), { offset: l, spacing: c } = this.options, h = (n + o) / 2, d = (r + a + c + l) / 2;
    return {
      x: e + Math.cos(h) * d,
      y: s + Math.sin(h) * d
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: s } = this, n = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, r = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > q ? Math.floor(s / q) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * n, Math.sin(a) * n);
    const l = 1 - Math.sin(Math.min(H, s || 0)), c = n * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Rd(t, this, c, o, r), Cd(t, this, c, o, r), t.restore();
  }
}
function jr(i, t, e = t) {
  i.lineCap = F(e.borderCapStyle, t.borderCapStyle), i.setLineDash(F(e.borderDash, t.borderDash)), i.lineDashOffset = F(e.borderDashOffset, t.borderDashOffset), i.lineJoin = F(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = F(e.borderWidth, t.borderWidth), i.strokeStyle = F(e.borderColor, t.borderColor);
}
function Id(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Ld(i) {
  return i.stepped ? Zl : i.tension || i.cubicInterpolationMode === "monotone" ? Kl : Id;
}
function Xr(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function Md(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Xr(n, e, s), h = Ld(o);
  let { move: d = !0, reverse: u } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(a + (u ? c - f : f)) % r], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, u, o.stepped), p = g);
  return l && (g = n[(a + (u ? c : 0)) % r], h(i, p, g, u, o.stepped)), !!l;
}
function kd(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = Xr(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, d = 0, u, f, g, p, b, m;
  const _ = (w) => (r + (c ? a - w : w)) % o, T = () => {
    p !== b && (i.lineTo(h, b), i.lineTo(h, p), i.lineTo(h, m));
  };
  for (l && (f = n[_(0)], i.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = n[_(u)], f.skip)
      continue;
    const w = f.x, x = f.y, D = w | 0;
    D === g ? (x < p ? p = x : x > b && (b = x), h = (d * h + w) / ++d) : (T(), i.lineTo(w, x), g = D, d = 0, p = b = x), m = x;
  }
  T();
}
function Es(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? kd : Md;
}
function Pd(i) {
  return i.stepped ? Rc : i.tension || i.cubicInterpolationMode === "monotone" ? Cc : ie;
}
function Nd(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), jr(i, t.options), i.stroke(n);
}
function Fd(i, t, e, s) {
  const { segments: n, options: o } = t, r = Es(t);
  for (const a of n)
    jr(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Bd = typeof Path2D == "function";
function Wd(i, t, e, s) {
  Bd && !t.options.segment ? Nd(i, t, e, s) : Fd(i, t, e, s);
}
class ji extends _t {
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
      xc(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Pc(this, this.options.segment));
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
    const s = this.options, n = t[e], o = this.points, r = Ir(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = Pd(s);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: u } = r[c], f = o[d], g = o[u];
      if (f === g) {
        a.push(f);
        continue;
      }
      const p = Math.abs((n - f[e]) / (g[e] - f[e])), b = l(f, g, p, s.stepped);
      b[e] = t[e], a.push(b);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, s) {
    return Es(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = Es(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), Wd(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function ho(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class Hd extends _t {
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
    this.skip || s.radius < 0.1 || !Wt(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Ts(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function Yr(i, t) {
  const { x: e, y: s, base: n, width: o, height: r } = i.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, h, d;
  return i.horizontal ? (d = r / 2, a = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, a = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), {
    left: a,
    top: c,
    right: l,
    bottom: h
  };
}
function Yt(i, t, e, s) {
  return i ? 0 : mt(t, e, s);
}
function zd(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = xr(s);
  return {
    t: Yt(n.top, o.top, 0, e),
    r: Yt(n.right, o.right, 0, t),
    b: Yt(n.bottom, o.bottom, 0, e),
    l: Yt(n.left, o.left, 0, t)
  };
}
function Vd(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = $t(n), r = Math.min(t, e), a = i.borderSkipped, l = s || z(n);
  return {
    topLeft: Yt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Yt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Yt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Yt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Gd(i) {
  const t = Yr(i), e = t.right - t.left, s = t.bottom - t.top, n = zd(i, e / 2, s / 2), o = Vd(i, e / 2, s / 2);
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
function ds(i, t, e, s) {
  const n = t === null, o = e === null, a = i && !(n && o) && Yr(i, s);
  return a && (n || Bt(t, a.left, a.right)) && (o || Bt(e, a.top, a.bottom));
}
function jd(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Xd(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function us(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + o,
    h: i.h + r,
    radius: i.radius
  };
}
class Yd extends _t {
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
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = Gd(this), a = jd(r.radius) ? Se : Xd;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, us(r, e, o)), t.clip(), a(t, us(o, -e, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, us(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return ds(this, t, e, s);
  }
  inXRange(t, e) {
    return ds(this, t, null, e);
  }
  inYRange(t, e) {
    return ds(this, null, t, e);
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
function Ud(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = Xi(l, c, n);
    const h = As(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: h,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const d = Ir(t, h);
    for (const u of d) {
      const f = As(e, o[u.start], o[u.end], u.loop), g = Dr(a, n, f);
      for (const p of g)
        r.push({
          source: p,
          target: u,
          start: {
            [e]: uo(h, f, "start", Math.max)
          },
          end: {
            [e]: uo(h, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function As(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = bt(n), o = bt(o)), {
    property: i,
    start: n,
    end: o
  };
}
function $d(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Xi(r, a, n);
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
function Xi(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function uo(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Ur(i, t) {
  let e = [], s = !1;
  return Y(i) ? (s = !0, e = i) : e = $d(i, t), e.length ? new ji({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function fo(i) {
  return i && i.fill !== !1;
}
function Zd(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!ct(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function Kd(i, t, e) {
  const s = tu(i);
  if (z(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return ct(n) && Math.floor(n) === n ? qd(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function qd(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function Jd(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : z(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Qd(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : z(i) ? s = i.value : s = t.getBaseValue(), s;
}
function tu(i) {
  const t = i.options, e = t.fill;
  let s = F(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function eu(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = iu(t, e);
  a.push(Ur({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      su(n, r[h], a);
  }
  return new ji({
    points: n,
    options: {}
  });
}
function iu(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function su(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = nu(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function nu(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], d = r[h.start][e], u = r[h.end][e];
    if (Bt(n, d, u)) {
      a = n === d, l = n === u;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: s
  };
}
class $r {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: q
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
function ou(i) {
  const { chart: t, fill: e, line: s } = i;
  if (ct(e))
    return ru(t, e);
  if (e === "stack")
    return eu(i);
  if (e === "shape")
    return !0;
  const n = au(i);
  return n instanceof $r ? n : Ur(n, s);
}
function ru(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function au(i) {
  return (i.scale || {}).getPointPositionForValue ? cu(i) : lu(i);
}
function lu(i) {
  const { scale: t = {}, fill: e } = i, s = Jd(e, t);
  if (ct(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function cu(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = Qd(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new $r({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < n; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function fs(i, t, e) {
  const s = ou(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, h = c.fill, d = c.backgroundColor, { above: u = d, below: f = d } = h || {}, g = n.getDatasetMeta(o), p = Lr(n, g);
  s && r.points.length && (Qe(i, e), hu(i, {
    line: r,
    target: s,
    above: u,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: p
  }), ti(i));
}
function hu(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  i.save();
  let h = o;
  o !== n && (c === "x" ? (go(i, s, r.top), gs(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), go(i, s, r.bottom)) : c === "y" && (po(i, s, r.left), gs(i, {
    line: e,
    target: s,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), po(i, s, r.right), h = n)), gs(i, {
    line: e,
    target: s,
    color: h,
    scale: a,
    property: c,
    clip: l
  }), i.restore();
}
function go(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], d = n[Xi(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(d.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function po(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], d = n[Xi(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(e, h.y), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(e, d.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function gs(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = Ud(e, s, n);
  for (const { source: c, target: h, start: d, end: u } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, g = s !== !0;
    i.save(), i.fillStyle = f, du(i, r, a, g && As(n, d, u)), i.beginPath();
    const p = !!e.pathSegment(i, c);
    let b;
    if (g) {
      p ? i.closePath() : bo(i, s, u, n);
      const m = !!s.pathSegment(i, h, {
        move: p,
        reverse: !0
      });
      b = p && m, b || bo(i, s, d, n);
    }
    i.closePath(), i.fill(b ? "evenodd" : "nonzero"), i.restore();
  }
}
function du(i, t, e, s) {
  const n = t.chart.chartArea, { property: o, start: r, end: a } = s || {};
  if (o === "x" || o === "y") {
    let l, c, h, d;
    o === "x" ? (l = r, c = n.top, h = a, d = n.bottom) : (l = n.left, c = r, h = n.right, d = a), i.beginPath(), e && (l = Math.max(l, e.left), h = Math.min(h, e.right), c = Math.max(c, e.top), d = Math.min(d, e.bottom)), i.rect(l, c, h - l, d - c), i.clip();
  }
}
function bo(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var uu = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof ji && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: Kd(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = Zd(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && fs(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      fo(o) && fs(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !fo(s) || e.drawTime !== "beforeDatasetDraw" || fs(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const mo = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, fu = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class _o extends _t {
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
    let e = U(t.generateLabels, [
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
    const s = t.labels, n = ot(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = mo(s, o);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, n, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = n + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -h;
    return this.legendItems.forEach((g, p) => {
      const b = s + e / 2 + o.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + b + 2 * a > r) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = {
        left: 0,
        top: f,
        row: u,
        width: b,
        height: n
      }, c[c.length - 1] += b + a;
    }), d;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, u = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((b, m) => {
      const { itemWidth: _, itemHeight: T } = gu(s, e, o, b, n);
      m > 0 && f + T + 2 * a > h && (d += u + a, c.push({
        width: u,
        height: f
      }), g += u + a, p++, u = f = 0), l[m] = {
        left: g,
        top: f,
        col: p,
        width: _,
        height: T
      }, u = Math.max(u, _), f += T + a;
    }), d += u, c.push({
      width: u,
      height: f
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = ye(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = pt(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = pt(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = pt(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = pt(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Qe(t, this), this._draw(), ti(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = st.color, l = ye(t.rtl, this.left, this.width), c = ot(r.font), { padding: h } = r, d = c.size, u = d / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: b } = mo(r, d), m = function(D, S, A) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const v = F(A.lineWidth, 1);
      if (n.fillStyle = F(A.fillStyle, a), n.lineCap = F(A.lineCap, "butt"), n.lineDashOffset = F(A.lineDashOffset, 0), n.lineJoin = F(A.lineJoin, "miter"), n.lineWidth = v, n.strokeStyle = F(A.strokeStyle, a), n.setLineDash(F(A.lineDash, [])), r.usePointStyle) {
        const N = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: A.pointStyle,
          rotation: A.rotation,
          borderWidth: v
        }, P = l.xPlus(D, g / 2), E = S + u;
        yr(n, N, P, E, r.pointStyleWidth && g);
      } else {
        const N = S + Math.max((d - p) / 2, 0), P = l.leftForLtr(D, g), E = $t(A.borderRadius);
        n.beginPath(), Object.values(E).some((M) => M !== 0) ? Se(n, {
          x: P,
          y: N,
          w: g,
          h: p,
          radius: E
        }) : n.rect(P, N, g, p), n.fill(), v !== 0 && n.stroke();
      }
      n.restore();
    }, _ = function(D, S, A) {
      ce(n, A.text, D, S + b / 2, c, {
        strikethrough: A.hidden,
        textAlign: l.textAlign(A.textAlign)
      });
    }, T = this.isHorizontal(), w = this._computeTitleHeight();
    T ? f = {
      x: pt(o, this.left + h, this.right - s[0]),
      y: this.top + h + w,
      line: 0
    } : f = {
      x: this.left + h,
      y: pt(o, this.top + w + h, this.bottom - e[0].height),
      line: 0
    }, Or(this.ctx, t.textDirection);
    const x = b + h;
    this.legendItems.forEach((D, S) => {
      n.strokeStyle = D.fontColor, n.fillStyle = D.fontColor;
      const A = n.measureText(D.text).width, v = l.textAlign(D.textAlign || (D.textAlign = r.textAlign)), N = g + u + A;
      let P = f.x, E = f.y;
      l.setWidth(this.width), T ? S > 0 && P + N + h > this.right && (E = f.y += x, f.line++, P = f.x = pt(o, this.left + h, this.right - s[f.line])) : S > 0 && E + x > this.bottom && (P = f.x = P + e[f.line].width + h, f.line++, E = f.y = pt(o, this.top + w + h, this.bottom - e[f.line].height));
      const M = l.x(P);
      if (m(M, E, D), P = Pl(v, P + g + u, T ? P + N : this.right, t.rtl), _(l.x(P), E, D), T)
        f.x += N + h;
      else if (typeof D.text != "string") {
        const V = c.lineHeight;
        f.y += Zr(D, V) + h;
      } else
        f.y += x;
    }), Rr(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = ot(e.font), n = ht(e.padding);
    if (!e.display)
      return;
    const o = ye(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), h = this.top + c, d = pt(t.align, d, this.right - u);
    else {
      const g = this.columnSizes.reduce((p, b) => Math.max(p, b.height), 0);
      h = c + pt(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = pt(a, d, d + u);
    r.textAlign = o.textAlign(Gs(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, ce(r, e.text, f, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = ot(t.font), s = ht(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Bt(t, this.left, this.right) && Bt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Bt(t, n.left, n.left + n.width) && Bt(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!mu(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = fu(n, s);
      n && !o && U(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && U(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && U(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function gu(i, t, e, s, n) {
  const o = pu(s, i, t, e), r = bu(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function pu(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function bu(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = Zr(t, e)), s;
}
function Zr(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function mu(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var _u = {
  id: "legend",
  _element: _o,
  start(i, t, e) {
    const s = i.legend = new _o({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    Ot.configure(i, s, e), Ot.addBox(i, s);
  },
  stop(i) {
    Ot.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    Ot.configure(i, s, e), s.options = e;
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
          const c = l.controller.getStyle(e ? 0 : void 0), h = ht(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
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
class Kr extends _t {
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
    const n = Y(s.text) ? s.text.length : 1;
    this._padding = ht(s.padding);
    const o = n * ot(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = pt(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = pt(a, n, e), l = H * -0.5) : (h = o - t, d = pt(a, e, n), l = H * 0.5), c = n - e), {
      titleX: h,
      titleY: d,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = ot(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    ce(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Gs(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function yu(i, t) {
  const e = new Kr({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  Ot.configure(i, e, t), Ot.addBox(i, e), i.titleBlock = e;
}
var xu = {
  id: "title",
  _element: Kr,
  start(i, t, e) {
    yu(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    Ot.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    Ot.configure(i, s, e), s.options = e;
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
const ze = {
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
        const c = l.getCenterPoint(), h = xe(t, c);
        h < n && (n = h, a = l);
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
function Dt(i, t) {
  return t && (Y(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Nt(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Su(i, t) {
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
function yo(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = ot(t.bodyFont), c = ot(t.titleFont), h = ot(t.footerFont), d = o.length, u = n.length, f = s.length, g = ht(t.padding);
  let p = g.height, b = 0, m = s.reduce((w, x) => w + x.before.length + x.lines.length + x.after.length, 0);
  if (m += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), m) {
    const w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * w + (m - f) * l.lineHeight + (m - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let _ = 0;
  const T = function(w) {
    b = Math.max(b, e.measureText(w).width + _);
  };
  return e.save(), e.font = c.string, $(i.title, T), e.font = l.string, $(i.beforeBody.concat(i.afterBody), T), _ = t.displayColors ? r + 2 + t.boxPadding : 0, $(s, (w) => {
    $(w.before, T), $(w.lines, T), $(w.after, T);
  }), _ = 0, e.font = h.string, $(i.footer, T), e.restore(), b += g.width, {
    width: b,
    height: p
  };
}
function Tu(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function vu(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function wu(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), vu(c, i, t, e) && (c = "center"), c;
}
function xo(i, t, e) {
  const s = e.yAlign || t.yAlign || Tu(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || wu(i, t, e, s),
    yAlign: s
  };
}
function Eu(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Au(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function So(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = $t(r);
  let g = Eu(t, a);
  const p = Au(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, u) + n : a === "right" && (g += Math.max(d, f) + n), {
    x: mt(g, 0, s.width - t.width),
    y: mt(p, 0, s.height - t.height)
  };
}
function vi(i, t, e) {
  const s = ht(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function To(i) {
  return Dt([], Nt(i));
}
function Ou(i, t, e) {
  return Jt(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function vo(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const qr = {
  beforeTitle: kt,
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
  afterTitle: kt,
  beforeBody: kt,
  beforeLabel: kt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return X(e) || (t += e), t;
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
  afterLabel: kt,
  afterBody: kt,
  beforeFooter: kt,
  footer: kt,
  afterFooter: kt
};
function xt(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? qr[t].call(e, s) : n;
}
class wo extends _t {
  static positioners = ze;
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
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new Js(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Ou(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = xt(s, "beforeTitle", this, t), o = xt(s, "title", this, t), r = xt(s, "afterTitle", this, t);
    let a = [];
    return a = Dt(a, Nt(n)), a = Dt(a, Nt(o)), a = Dt(a, Nt(r)), a;
  }
  getBeforeBody(t, e) {
    return To(xt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return $(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = vo(s, o);
      Dt(r.before, Nt(xt(a, "beforeLabel", this, o))), Dt(r.lines, xt(a, "label", this, o)), Dt(r.after, Nt(xt(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return To(xt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = xt(s, "beforeFooter", this, t), o = xt(s, "footer", this, t), r = xt(s, "afterFooter", this, t);
    let a = [];
    return a = Dt(a, Nt(n)), a = Dt(a, Nt(o)), a = Dt(a, Nt(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Su(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))), $(a, (h) => {
      const d = vo(t.callbacks, h);
      n.push(xt(d, "labelColor", this, h)), o.push(xt(d, "labelPointStyle", this, h)), r.push(xt(d, "labelTextColor", this, h));
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
      const a = ze[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = yo(this, s), c = Object.assign({}, a, l), h = xo(this.chart, s, c), d = So(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
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
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = $t(a), { x: u, y: f } = t, { width: g, height: p } = e;
    let b, m, _, T, w, x;
    return o === "center" ? (w = f + p / 2, n === "left" ? (b = u, m = b - r, T = w + r, x = w - r) : (b = u + g, m = b + r, T = w - r, x = w + r), _ = b) : (n === "left" ? m = u + Math.max(l, h) + r : n === "right" ? m = u + g - Math.max(c, d) - r : m = this.caretX, o === "top" ? (T = f, w = T - r, b = m - r, _ = m + r) : (T = f + p, w = T + r, b = m + r, _ = m - r), x = T), {
      x1: b,
      x2: m,
      x3: _,
      y1: T,
      y2: w,
      y3: x
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = ye(s.rtl, this.x, this.width);
      for (t.x = vi(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = ot(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, h = ot(o.bodyFont), d = vi(this, "left", o), u = n.x(d), f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, g = e.y + f;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, b = n.leftForLtr(u, c) + c / 2, m = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ts(t, p, b, m), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Ts(t, p, b, m);
    } else {
      t.lineWidth = z(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const p = n.leftForLtr(u, c), b = n.leftForLtr(n.xPlus(u, 1), c - 2), m = $t(r.borderRadius);
      Object.values(m).some((_) => _ !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Se(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: m
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Se(t, {
        x: b,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: m
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(b, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = ot(s.bodyFont);
    let u = d.lineHeight, f = 0;
    const g = ye(s.rtl, this.x, this.width), p = function(A) {
      e.fillText(A, g.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, b = g.textAlign(r);
    let m, _, T, w, x, D, S;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = vi(this, b, s), e.fillStyle = s.bodyColor, $(this.beforeBody, p), f = a && b !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, w = 0, D = n.length; w < D; ++w) {
      for (m = n[w], _ = this.labelTextColors[w], e.fillStyle = _, $(m.before, p), T = m.lines, a && T.length && (this._drawColorBox(e, t, w, g, s), u = Math.max(d.lineHeight, l)), x = 0, S = T.length; x < S; ++x)
        p(T[x]), u = d.lineHeight;
      $(m.after, p);
    }
    f = 0, u = d.lineHeight, $(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = ye(s.rtl, this.x, this.width);
      for (t.x = vi(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = ot(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: g } = $t(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = ze[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = yo(this, t), l = Object.assign({}, r, this._size), c = xo(e, t, l), h = So(t, l, c, e);
      (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
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
    const r = ht(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Or(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Rr(t, e.textDirection), t.restore());
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
    }), o = !Ri(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !Ri(r, o) || a;
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
    const { caretX: s, caretY: n, options: o } = this, r = ze[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var Ru = {
  id: "tooltip",
  _element: wo,
  positioners: ze,
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
    callbacks: qr
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
const Cu = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Du(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Cu(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Iu = (i, t) => i === null ? null : mt(Math.round(i), 0, t);
function Eo(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Lu extends Ae {
  static id = "category";
  static defaults = {
    ticks: {
      callback: Eo
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
    if (X(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Du(s, t, F(e, t), this._addedLabels), Iu(e, s.length - 1);
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
    return Eo.call(this, t);
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
function Mu(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = i, f = o || 1, g = h - 1, { min: p, max: b } = t, m = !X(r), _ = !X(a), T = !X(c), w = (b - p) / (d + 1);
  let x = Sn((b - p) / g / f) * f, D, S, A, v;
  if (x < 1e-14 && !m && !_)
    return [
      {
        value: p
      },
      {
        value: b
      }
    ];
  v = Math.ceil(b / x) - Math.floor(p / x), v > g && (x = Sn(v * x / g / f) * f), X(l) || (D = Math.pow(10, l), x = Math.ceil(x * D) / D), n === "ticks" ? (S = Math.floor(p / x) * x, A = Math.ceil(b / x) * x) : (S = p, A = b), m && _ && o && Ol((a - r) / o, x / 1e3) ? (v = Math.round(Math.min((a - r) / x, h)), x = (a - r) / v, S = r, A = a) : T ? (S = m ? r : S, A = _ ? a : A, v = c - 1, x = (A - S) / v) : (v = (A - S) / x, je(v, Math.round(v), x / 1e3) ? v = Math.round(v) : v = Math.ceil(v));
  const N = Math.max(Tn(x), Tn(S));
  D = Math.pow(10, X(l) ? N : l), S = Math.round(S * D) / D, A = Math.round(A * D) / D;
  let P = 0;
  for (m && (u && S !== r ? (e.push({
    value: r
  }), S < r && P++, je(Math.round((S + P * x) * D) / D, r, Ao(r, w, i)) && P++) : S < r && P++); P < v; ++P) {
    const E = Math.round((S + P * x) * D) / D;
    if (_ && E > a)
      break;
    e.push({
      value: E
    });
  }
  return _ && u && A !== a ? e.length && je(e[e.length - 1].value, a, Ao(a, w, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!_ || A === a) && e.push({
    value: A
  }), e;
}
function Ao(i, t, { horizontal: e, minRotation: s }) {
  const n = lt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Os extends Ae {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return X(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = Lt(n), c = Lt(o);
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
    }, o = this._range || this, r = Mu(n, o);
    return t.bounds === "ticks" && Rl(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return zi(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class ku extends Os {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Xs.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = ct(t) ? t : 0, this.max = ct(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = lt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
function Rs(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = ht(t.backdropPadding);
    return F(t.font && t.font.size, st.font.size) + e.height;
  }
  return 0;
}
function Pu(i, t, e) {
  return e = Y(e) ? e : [
    e
  ], {
    w: $l(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Oo(i, t, e, s, n) {
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
function Nu(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? H / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + n[l], a), d = ot(c.font), u = Pu(i.ctx, d, i._pointLabels[l]);
    s[l] = u;
    const f = bt(i.getIndexAngle(l) + a), g = Math.round(Hi(f)), p = Oo(g, h.x, u.w, 0, 180), b = Oo(g, h.y, u.h, 90, 270);
    Fu(e, t, f, p, b);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Hu(i, s, n);
}
function Fu(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Bu(i, t, e) {
  const s = i.drawingArea, { extra: n, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, s + n + r, o), c = Math.round(Hi(bt(l.angle + tt))), h = Gu(l.y, a.h, c), d = zu(c), u = Vu(l.x, a.w, d);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: d,
    left: u,
    top: h,
    right: u + a.w,
    bottom: h + a.h
  };
}
function Wu(i, t) {
  if (!t)
    return !0;
  const { left: e, top: s, right: n, bottom: o } = i;
  return !(Wt({
    x: e,
    y: s
  }, t) || Wt({
    x: e,
    y: o
  }, t) || Wt({
    x: n,
    y: s
  }, t) || Wt({
    x: n,
    y: o
  }, t));
}
function Hu(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: Rs(o) / 2,
    additionalAngle: r ? H / n : 0
  };
  let c;
  for (let h = 0; h < n; h++) {
    l.padding = e[h], l.size = t[h];
    const d = Bu(i, h, l);
    s.push(d), a === "auto" && (d.visible = Wu(d, c), d.visible && (c = d));
  }
  return s;
}
function zu(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function Vu(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Gu(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function ju(i, t, e) {
  const { left: s, top: n, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!X(a)) {
    const l = $t(t.borderRadius), c = ht(t.backdropPadding);
    i.fillStyle = a;
    const h = s - c.left, d = n - c.top, u = o - s + c.width, f = r - n + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), Se(i, {
      x: h,
      y: d,
      w: u,
      h: f,
      radius: l
    }), i.fill()) : i.fillRect(h, d, u, f);
  }
}
function Xu(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = i._pointLabelItems[n];
    if (!o.visible)
      continue;
    const r = s.setContext(i.getPointLabelContext(n));
    ju(e, r, o);
    const a = ot(r.font), { x: l, y: c, textAlign: h } = o;
    ce(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function Jr(i, t, e, s) {
  const { ctx: n } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, q);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
  }
}
function Yu(i, t, e, s, n) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash || []), o.lineDashOffset = n.dashOffset, o.beginPath(), Jr(i, e, r, s), o.closePath(), o.stroke(), o.restore());
}
function Uu(i, t, e) {
  return Jt(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class $u extends Os {
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
      callback: Xs.formatters.numeric
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
    const t = this._padding = ht(Rs(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = ct(t) && !isNaN(t) ? t : 0, this.max = ct(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Rs(this.options));
  }
  generateTickLabels(t) {
    Os.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = U(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Nu(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = q / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return bt(t * e + lt(s));
  }
  getDistanceFromCenterForValue(t) {
    if (X(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (X(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return Uu(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - tt + s;
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
      s.save(), s.beginPath(), Jr(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && Xu(this, r), n.display && this.ticks.forEach((h, d) => {
      if (d !== 0 || d === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const u = this.getContext(d), f = n.setContext(u), g = o.setContext(u);
        Yu(this, f, l, r, g);
      }
    }), s.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const h = s.setContext(this.getPointLabelContext(a)), { color: d, lineWidth: u } = h;
        !u || !d || (t.lineWidth = u, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
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
      const c = s.setContext(this.getContext(l)), h = ot(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const d = ht(c.backdropPadding);
        t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
      }
      ce(t, a.label, 0, -o, h, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const Yi = {
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
}, St = /* @__PURE__ */ Object.keys(Yi);
function Ro(i, t) {
  return i - t;
}
function Co(i, t) {
  if (X(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), ct(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (ae(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function Do(i, t, e, s) {
  const n = St.length;
  for (let o = St.indexOf(i); o < n - 1; ++o) {
    const r = Yi[St[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return St[o];
  }
  return St[n - 1];
}
function Zu(i, t, e, s, n) {
  for (let o = St.length - 1; o >= St.indexOf(e); o--) {
    const r = St[o];
    if (Yi[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return St[e ? St.indexOf(e) : 0];
}
function Ku(i) {
  for (let t = St.indexOf(i) + 1, e = St.length; t < e; ++t)
    if (Yi[St[t]].common)
      return St[t];
}
function Io(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Vs(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function qu(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Lo(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : qu(i, s, n, e);
}
class Mo extends Ae {
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
    const s = t.time || (t.time = {}), n = this._adapter = new ph._date(t.adapters.date);
    n.init(e), Ge(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Co(this, t);
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = ct(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = ct(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
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
    const o = this.min, r = this.max, a = Ll(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? Do(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Zu(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Ku(this._unit), this.initOffsets(n), t.reverse && a.reverse(), Lo(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = mt(e, 0, r), s = mt(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || Do(o.minUnit, e, s, this._getLabelCapacity(e)), a = F(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = ae(l) || l === !0, h = {};
    let d = e, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < s; u = +t.add(u, a, r), f++)
      Io(h, u, g);
    return (u === s || n.bounds === "ticks" || f === 1) && Io(h, u, g), Object.keys(h).sort(Ro).map((p) => +p);
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
      return U(r, [
        t,
        e,
        s
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], d = c && a[c], u = s[e], f = c && d && u && u.major;
    return this._adapter.format(t, n || (f ? d : h));
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
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = lt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, Lo(this, [
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
      t.push(Co(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return br(t.sort(Ro));
  }
}
function wi(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = se(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = se(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class yp extends Mo {
  static id = "timeseries";
  static defaults = Mo.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = wi(e, this.min), this._tableRange = wi(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this, n = [], o = [];
    let r, a, l, c, h;
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
      h = n[r + 1], l = n[r - 1], c = n[r], Math.round((h + l) / 2) !== c && o.push({
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
    return (wi(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return wi(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const Qr = {
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
}, Ju = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, Qu = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...Qr,
  ...Ju
}, tf = Pa[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function me(i) {
  return sr(i) ? ys(i) : i;
}
function ef(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return sr(t) ? new Proxy(i, {}) : i;
}
function sf(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function ta(i, t) {
  i.labels = t;
}
function ea(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function nf(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return ta(e, i.labels), ea(e, i.datasets, t), e;
}
const of = Wi({
  props: Qu,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = Be(null), o = er(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: h, options: d, plugins: u, datasetIdKey: f } = i, g = nf(h, f), p = ef(g, h);
      o.value = new re(n.value, {
        type: c,
        data: p,
        options: {
          ...d
        },
        plugins: u
      });
    }, a = () => {
      const c = ys(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return Ns(r), ir(a), _s([
      () => i.options,
      () => i.data
    ], (c, h) => {
      let [d, u] = c, [f, g] = h;
      const p = ys(o.value);
      if (!p)
        return;
      let b = !1;
      if (d) {
        const m = me(d), _ = me(f);
        m && m !== _ && (sf(p, m), b = !0);
      }
      if (u) {
        const m = me(u.labels), _ = me(g.labels), T = me(u.datasets), w = me(g.datasets);
        m !== _ && (ta(p.config.data, m), b = !0), T && T !== w && (ea(p.config.data, T, i.datasetIdKey), b = !0);
      }
      b && ka(() => {
        l(p);
      });
    }, {
      deep: !0
    }), () => ms("canvas", {
      role: "img",
      "aria-label": i.ariaLabel,
      "aria-describedby": i.ariaDescribedby,
      ref: n
    }, [
      ms("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function Oe(i, t) {
  return re.register(t), Wi({
    props: Qr,
    setup(e, s) {
      let { expose: n } = s;
      const o = er(null), r = (a) => {
        o.value = a?.chart;
      };
      return n({
        chart: o
      }), () => ms(of, tf({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const ps = /* @__PURE__ */ Oe("bar", ch), rf = /* @__PURE__ */ Oe("doughnut", Qs), af = /* @__PURE__ */ Oe("line", dh), lf = /* @__PURE__ */ Oe("pie", fh), cf = /* @__PURE__ */ Oe("polarArea", uh), hf = /* @__PURE__ */ Oe("radar", gh);
/*!
* chartjs-plugin-annotation v3.1.0
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2024 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */
const ko = {
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
      return ff(i, t, e);
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
function en(i, t, e) {
  return (ko.modes[e.mode] || ko.modes.nearest)(i, t, e);
}
function df(i, t, e) {
  return e !== "x" && e !== "y" ? i.inRange(t.x, t.y, "x", !0) || i.inRange(t.x, t.y, "y", !0) : i.inRange(t.x, t.y, e, !0);
}
function uf(i, t, e) {
  return e === "x" ? { x: i.x, y: t.y } : e === "y" ? { x: t.x, y: i.y } : t;
}
function Oi(i, t, e) {
  return i.filter((s) => e.intersect ? s.inRange(t.x, t.y) : df(s, t, e.axis));
}
function ff(i, t, e) {
  let s = Number.POSITIVE_INFINITY;
  return Oi(i, t, e).reduce((n, o) => {
    const r = o.getCenterPoint(), a = uf(t, r, e.axis), l = xe(t, a);
    return l < s ? (n = [o], s = l) : l === s && n.push(o), n;
  }, []).sort((n, o) => n._index - o._index).slice(0, 1);
}
function de(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e), o = t.x, r = t.y;
  return {
    x: o + s * (i.x - o) - n * (i.y - r),
    y: r + n * (i.x - o) + s * (i.y - r)
  };
}
const gf = (i, t) => t > i || i.length > t.length && i.slice(0, t.length) === t, ne = 1e-3, Ui = (i, t, e) => Math.min(e, Math.max(t, i)), ia = (i, t) => i.value >= i.start - t && i.value <= i.end + t;
function pf(i, t, e) {
  for (const s of Object.keys(i))
    i[s] = Ui(i[s], t, e);
  return i;
}
function bf(i, t, e, s) {
  return !i || !t || e <= 0 ? !1 : Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2) <= Math.pow(e + s, 2);
}
function sa(i, { x: t, y: e, x2: s, y2: n }, o, { borderWidth: r, hitTolerance: a }) {
  const l = (r + a) / 2, c = i.x >= t - l - ne && i.x <= s + l + ne, h = i.y >= e - l - ne && i.y <= n + l + ne;
  return o === "x" ? c : (o === "y" || c) && h;
}
function na(i, { rect: t, center: e }, s, { rotation: n, borderWidth: o, hitTolerance: r }) {
  const a = de(i, e, lt(-n));
  return sa(a, t, s, { borderWidth: o, hitTolerance: r });
}
function ue(i, t) {
  const { centerX: e, centerY: s } = i.getProps(["centerX", "centerY"], t);
  return { x: e, y: s };
}
function mf(i, t, e, s = !0) {
  const n = e.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = n[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (gf(a, r)) {
      if (s)
        throw new Error(`${i} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const oa = (i) => typeof i == "string" && i.endsWith("%"), ra = (i) => parseFloat(i) / 100, aa = (i) => Ui(ra(i), 0, 1), Ne = (i, t) => ({ x: i, y: t, x2: i, y2: t, width: 0, height: 0 }), _f = {
  box: (i) => Ne(i.centerX, i.centerY),
  doughnutLabel: (i) => Ne(i.centerX, i.centerY),
  ellipse: (i) => ({ centerX: i.centerX, centerY: i.centerX, radius: 0, width: 0, height: 0 }),
  label: (i) => Ne(i.centerX, i.centerY),
  line: (i) => Ne(i.x, i.y),
  point: (i) => ({ centerX: i.centerX, centerY: i.centerY, radius: 0, width: 0, height: 0 }),
  polygon: (i) => Ne(i.centerX, i.centerY)
};
function sn(i, t) {
  return t === "start" ? 0 : t === "end" ? i : oa(t) ? aa(t) * i : i / 2;
}
function qt(i, t, e = !0) {
  return typeof t == "number" ? t : oa(t) ? (e ? aa(t) : ra(t)) * i : i;
}
function yf(i, t) {
  const { x: e, width: s } = i, n = t.textAlign;
  return n === "center" ? e + s / 2 : n === "end" || n === "right" ? e + s : e;
}
function la(i, t, { borderWidth: e, position: s, xAdjust: n, yAdjust: o }, r) {
  const a = z(r), l = t.width + (a ? r.width : 0) + e, c = t.height + (a ? r.height : 0) + e, h = nn(s), d = Po(i.x, l, n, h.x), u = Po(i.y, c, o, h.y);
  return {
    x: d,
    y: u,
    x2: d + l,
    y2: u + c,
    width: l,
    height: c,
    centerX: d + l / 2,
    centerY: u + c / 2
  };
}
function nn(i, t = "center") {
  return z(i) ? {
    x: F(i.x, t),
    y: F(i.y, t)
  } : (i = F(i, t), {
    x: i,
    y: i
  });
}
const ca = (i, t) => i && i.autoFit && t < 1;
function ha(i, t) {
  const e = i.font, s = Y(e) ? e : [e];
  return ca(i, t) ? s.map(function(n) {
    const o = ot(n);
    return o.size = Math.floor(n.size * t), o.lineHeight = n.lineHeight, ot(o);
  }) : s.map((n) => ot(n));
}
function da(i) {
  return i && (vt(i.xValue) || vt(i.yValue));
}
function Po(i, t, e = 0, s) {
  return i - sn(t, s) + e;
}
function Re(i, t, e) {
  const s = e.init;
  if (s) {
    if (s === !0)
      return fa(t, e);
  } else return;
  return xf(i, t, e);
}
function ua(i, t, e) {
  let s = !1;
  return t.forEach((n) => {
    Tt(i[n]) ? (s = !0, e[n] = i[n]) : vt(e[n]) && delete e[n];
  }), s;
}
function fa(i, t) {
  const e = t.type || "line";
  return _f[e](i);
}
function xf(i, t, e) {
  const s = U(e.init, [{ chart: i, properties: t, options: e }]);
  if (s === !0)
    return fa(t, e);
  if (z(s))
    return s;
}
const bs = /* @__PURE__ */ new Map(), Sf = (i) => isNaN(i) || i <= 0, Tf = (i) => i.reduce(function(t, e) {
  return t += e.string, t;
}, "");
function $i(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function Zi(i, { x: t, y: e }, s) {
  s && (i.translate(t, e), i.rotate(lt(s)), i.translate(-t, -e));
}
function Ht(i, t) {
  if (t && t.borderWidth)
    return i.lineCap = t.borderCapStyle || "butt", i.setLineDash(t.borderDash), i.lineDashOffset = t.borderDashOffset, i.lineJoin = t.borderJoinStyle || "miter", i.lineWidth = t.borderWidth, i.strokeStyle = t.borderColor, !0;
}
function Ce(i, t) {
  i.shadowColor = t.backgroundShadowColor, i.shadowBlur = t.shadowBlur, i.shadowOffsetX = t.shadowOffsetX, i.shadowOffsetY = t.shadowOffsetY;
}
function Ki(i, t) {
  const e = t.content;
  if ($i(e))
    return {
      width: qt(e.width, t.width),
      height: qt(e.height, t.height)
    };
  const s = ha(t), n = t.textStrokeWidth, o = Y(e) ? e : [e], r = o.join() + Tf(s) + n + (i._measureText ? "-spriting" : "");
  return bs.has(r) || bs.set(r, Af(i, o, s, n)), bs.get(r);
}
function ga(i, t, e) {
  const { x: s, y: n, width: o, height: r } = t;
  i.save(), Ce(i, e);
  const a = Ht(i, e);
  i.fillStyle = e.backgroundColor, i.beginPath(), Se(i, {
    x: s,
    y: n,
    w: o,
    h: r,
    radius: pf($t(e.borderRadius), 0, Math.min(o, r) / 2)
  }), i.closePath(), i.fill(), a && (i.shadowColor = e.borderShadowColor, i.stroke()), i.restore();
}
function pa(i, t, e, s) {
  const n = e.content;
  if ($i(n)) {
    i.save(), i.globalAlpha = Cf(e.opacity, n.style.opacity), i.drawImage(n, t.x, t.y, t.width, t.height), i.restore();
    return;
  }
  const o = Y(n) ? n : [n], r = ha(e, s), a = e.color, l = Y(a) ? a : [a], c = yf(t, e), h = t.y + e.textStrokeWidth / 2;
  i.save(), i.textBaseline = "middle", i.textAlign = e.textAlign, vf(i, e) && Of(i, { x: c, y: h }, o, r), Rf(i, { x: c, y: h }, o, { fonts: r, colors: l }), i.restore();
}
function vf(i, t) {
  if (t.textStrokeWidth > 0)
    return i.lineJoin = "round", i.miterLimit = 2, i.lineWidth = t.textStrokeWidth, i.strokeStyle = t.textStrokeColor, !0;
}
function wf(i, t, e, s) {
  const { radius: n, options: o } = t, r = o.pointStyle, a = o.rotation;
  let l = (a || 0) * zs;
  if ($i(r)) {
    i.save(), i.translate(e, s), i.rotate(l), i.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), i.restore();
    return;
  }
  Sf(n) || Ef(i, { x: e, y: s, radius: n, rotation: a, style: r, rad: l });
}
function Ef(i, { x: t, y: e, radius: s, rotation: n, style: o, rad: r }) {
  let a, l, c, h;
  switch (i.beginPath(), o) {
    // Default includes circle
    default:
      i.arc(t, e, s, 0, q), i.closePath();
      break;
    case "triangle":
      i.moveTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Ii, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Ii, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), i.closePath();
      break;
    case "rectRounded":
      h = s * 0.516, c = s - h, a = Math.cos(r + At) * c, l = Math.sin(r + At) * c, i.arc(t - a, e - l, h, r - H, r - tt), i.arc(t + l, e - a, h, r - tt, r), i.arc(t + a, e + l, h, r, r + tt), i.arc(t - l, e + a, h, r + tt, r + H), i.closePath();
      break;
    case "rect":
      if (!n) {
        c = Math.SQRT1_2 * s, i.rect(t - c, e - c, 2 * c, 2 * c);
        break;
      }
      r += At;
    /* falls through */
    case "rectRot":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + l, e - a), i.lineTo(t + a, e + l), i.lineTo(t - l, e + a), i.closePath();
      break;
    case "crossRot":
      r += At;
    /* falls through */
    case "cross":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
      break;
    case "star":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a), r += At, a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
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
function Af(i, t, e, s) {
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
function Of(i, { x: t, y: e }, s, n) {
  i.beginPath();
  let o = 0;
  s.forEach(function(r, a) {
    const l = n[Math.min(a, n.length - 1)], c = l.lineHeight;
    i.font = l.string, i.strokeText(r, t, e + c / 2 + o), o += c;
  }), i.stroke();
}
function Rf(i, { x: t, y: e }, s, { fonts: n, colors: o }) {
  let r = 0;
  s.forEach(function(a, l) {
    const c = o[Math.min(l, o.length - 1)], h = n[Math.min(l, n.length - 1)], d = h.lineHeight;
    i.beginPath(), i.font = h.string, i.fillStyle = c, i.fillText(a, t, e + d / 2 + r), r += d, i.fill();
  });
}
function Cf(i, t) {
  const e = ae(i) ? i : t;
  return ae(e) ? Ui(e, 0, 1) : 1;
}
const ba = ["left", "bottom", "top", "right"];
function Df(i, t) {
  const { pointX: e, pointY: s, options: n } = t, o = n.callout, r = o && o.display && Pf(t, o);
  if (!r || Ff(t, o, r))
    return;
  if (i.save(), i.beginPath(), !Ht(i, o))
    return i.restore();
  const { separatorStart: l, separatorEnd: c } = If(t, r), { sideStart: h, sideEnd: d } = Mf(t, r, l);
  (o.margin > 0 || n.borderWidth === 0) && (i.moveTo(l.x, l.y), i.lineTo(c.x, c.y)), i.moveTo(h.x, h.y), i.lineTo(d.x, d.y);
  const u = de({ x: e, y: s }, t.getCenterPoint(), lt(-t.rotation));
  i.lineTo(u.x, u.y), i.stroke(), i.restore();
}
function If(i, t) {
  const { x: e, y: s, x2: n, y2: o } = i, r = Lf(i, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: s }, l = { x: a.x, y: o }) : (a = { x: e, y: s + r }, l = { x: n, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function Lf(i, t) {
  const { width: e, height: s, options: n } = i, o = n.callout.margin + n.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? s + o : -o;
}
function Mf(i, t, e) {
  const { y: s, width: n, height: o, options: r } = i, a = r.callout.start, l = kf(t, r.callout);
  let c, h;
  return t === "left" || t === "right" ? (c = { x: e.x, y: s + qt(o, a) }, h = { x: c.x + l, y: c.y }) : (c = { x: e.x + qt(n, a), y: e.y }, h = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: h };
}
function kf(i, t) {
  const e = t.side;
  return i === "left" || i === "top" ? -e : e;
}
function Pf(i, t) {
  const e = t.position;
  return ba.includes(e) ? e : Nf(i, t);
}
function Nf(i, t) {
  const { x: e, y: s, x2: n, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: h, centerY: d, rotation: u } = i, f = { x: h, y: d }, g = t.start, p = qt(r, g), b = qt(a, g), m = [e, e + p, e + p, n], _ = [s + b, o, s, o], T = [];
  for (let w = 0; w < 4; w++) {
    const x = de({ x: m[w], y: _[w] }, f, lt(u));
    T.push({
      position: ba[w],
      distance: xe(x, { x: l, y: c })
    });
  }
  return T.sort((w, x) => w.distance - x.distance)[0].position;
}
function Ff(i, t, e) {
  const { pointX: s, pointY: n } = i, o = t.margin;
  let r = s, a = n;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), i.inRange(r, a);
}
const No = {
  xScaleID: { min: "xMin", max: "xMax", start: "left", end: "right", startProp: "x", endProp: "x2" },
  yScaleID: { min: "yMin", max: "yMax", start: "bottom", end: "top", startProp: "y", endProp: "y2" }
};
function we(i, t, e) {
  return t = typeof t == "number" ? t : i.parse(t), ct(t) ? i.getPixelForValue(t) : e;
}
function he(i, t, e) {
  const s = t[e];
  if (s || e === "scaleID")
    return s;
  const n = e.charAt(0), o = Object.values(i).filter((r) => r.axis && r.axis === n);
  return o.length ? o[0].id : n;
}
function ma(i, t) {
  if (i) {
    const e = i.options.reverse, s = we(i, t.min, e ? t.end : t.start), n = we(i, t.max, e ? t.start : t.end);
    return {
      start: s,
      end: n
    };
  }
}
function _a(i, t) {
  const { chartArea: e, scales: s } = i, n = s[he(s, t, "xScaleID")], o = s[he(s, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return n && (r = we(n, t.xValue, n.left + n.width / 2)), o && (a = we(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function on(i, t) {
  const e = i.scales, s = e[he(e, t, "xScaleID")], n = e[he(e, t, "yScaleID")];
  if (!s && !n)
    return {};
  let { left: o, right: r } = s || i.chartArea, { top: a, bottom: l } = n || i.chartArea;
  const c = Fo(s, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const h = Fo(n, { min: t.yMin, max: t.yMax, start: l, end: a });
  return a = h.start, l = h.end, {
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
function ya(i, t) {
  if (!da(t)) {
    const e = on(i, t);
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
  return Wf(i, t);
}
function Bf(i, t) {
  const { scales: e, chartArea: s } = i, n = e[t.scaleID], o = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
  return n ? Hf(n, o, t) : zf(e, o, t), o;
}
function xa(i, t) {
  const e = on(i, t);
  return e.initProperties = Re(i, e, t), e.elements = [{
    type: "label",
    optionScope: "label",
    properties: jf(i, e, t),
    initProperties: e.initProperties
  }], e;
}
function Wf(i, t) {
  const e = _a(i, t), s = t.radius * 2;
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
function Fo(i, t) {
  const e = ma(i, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function Hf(i, t, e) {
  const s = we(i, e.value, NaN), n = we(i, e.endValue, s);
  i.isHorizontal() ? (t.x = s, t.x2 = n) : (t.y = s, t.y2 = n);
}
function zf(i, t, e) {
  for (const s of Object.keys(No)) {
    const n = i[he(i, e, s)];
    if (n) {
      const { min: o, max: r, start: a, end: l, startProp: c, endProp: h } = No[s], d = ma(n, { min: e[o], max: e[r], start: n[a], end: n[l] });
      t[c] = d.start, t[h] = d.end;
    }
  }
}
function Vf({ properties: i, options: t }, e, s, n) {
  const { x: o, x2: r, width: a } = i;
  return Sa({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.x,
    padding: { start: n.left, end: n.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function Gf({ properties: i, options: t }, e, s, n) {
  const { y: o, y2: r, height: a } = i;
  return Sa({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.y,
    padding: { start: n.top, end: n.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function Sa(i, t) {
  const { start: e, end: s, borderWidth: n } = i, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = s - n - e - r - a - t.size;
  return e + n / 2 + l + sn(c, o);
}
function jf(i, t, e) {
  const s = e.label;
  s.backgroundColor = "transparent", s.callout.display = !1;
  const n = nn(s.position), o = ht(s.padding), r = Ki(i.ctx, s), a = Vf({ properties: t, options: e }, r, n, o), l = Gf({ properties: t, options: e }, r, n, o), c = r.width + o.width, h = r.height + o.height;
  return {
    x: a,
    y: l,
    x2: a + c,
    y2: l + h,
    width: c,
    height: h,
    centerX: a + c / 2,
    centerY: l + h / 2,
    rotation: s.rotation
  };
}
const Cs = ["enter", "leave"], rn = Cs.concat("click");
function Xf(i, t, e) {
  t.listened = ua(e, rn, t.listeners), t.moveListened = !1, Cs.forEach((s) => {
    Tt(e[s]) && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((s) => {
    !t.listened && Tt(s.click) && (t.listened = !0), t.moveListened || Cs.forEach((n) => {
      Tt(s[n]) && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function Yf(i, t, e) {
  if (i.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return Uf(i, t, e);
      case "click":
        return $f(i, t, e);
    }
}
function Uf(i, t, e) {
  if (!i.moveListened)
    return;
  let s;
  t.type === "mousemove" ? s = en(i.visibleElements, t, e.interaction) : s = [];
  const n = i.hovered;
  i.hovered = s;
  const o = { state: i, event: t };
  let r = Bo(o, "leave", n, s);
  return Bo(o, "enter", s, n) || r;
}
function Bo({ state: i, event: t }, e, s, n) {
  let o;
  for (const r of s)
    n.indexOf(r) < 0 && (o = Ta(r.options[e] || i.listeners[e], r, t) || o);
  return o;
}
function $f(i, t, e) {
  const s = i.listeners, n = en(i.visibleElements, t, e.interaction);
  let o;
  for (const r of n)
    o = Ta(r.options.click || s.click, r, t) || o;
  return o;
}
function Ta(i, t, e) {
  return U(i, [t.$context, e]) === !0;
}
const Fi = ["afterDraw", "beforeDraw"];
function Zf(i, t, e) {
  const s = t.visibleElements;
  t.hooked = ua(e, Fi, t.hooks), t.hooked || s.forEach((n) => {
    t.hooked || Fi.forEach((o) => {
      Tt(n.options[o]) && (t.hooked = !0);
    });
  });
}
function Wo(i, t, e) {
  if (i.hooked) {
    const s = t.options[e] || i.hooks[e];
    return U(s, [t.$context]);
  }
}
function Kf(i, t, e) {
  const s = eg(i.scales, t, e);
  let n = Ho(t, s, "min", "suggestedMin");
  n = Ho(t, s, "max", "suggestedMax") || n, n && Tt(t.handleTickRangeOptions) && t.handleTickRangeOptions();
}
function qf(i, t) {
  for (const e of i)
    Qf(e, t);
}
function Ho(i, t, e, s) {
  if (ct(t[e]) && !Jf(i.options, e, s)) {
    const n = i[e] !== t[e];
    return i[e] = t[e], n;
  }
}
function Jf(i, t, e) {
  return vt(i[t]) || vt(i[e]);
}
function Qf(i, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const s = he(t, i, e);
    s && !t[s] && tg(i, e) && console.warn(`No scale found with id '${s}' for annotation '${i.id}'`);
  }
}
function tg(i, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const s of ["Min", "Max", "Value"])
    if (vt(i[e + s]))
      return !0;
  return !1;
}
function eg(i, t, e) {
  const s = t.axis, n = t.id, o = s + "ScaleID", r = {
    min: F(t.min, Number.NEGATIVE_INFINITY),
    max: F(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === n ? zo(a, t, ["value", "endValue"], r) : he(i, a, o) === n && zo(a, t, [s + "Min", s + "Max", s + "Value"], r);
  return r;
}
function zo(i, t, e, s) {
  for (const n of e) {
    const o = i[n];
    if (vt(o)) {
      const r = t.parse(o);
      s.min = Math.min(s.min, r), s.max = Math.max(s.max, r);
    }
  }
}
class De extends _t {
  inRange(t, e, s, n) {
    const { x: o, y: r } = de({ x: t, y: e }, this.getCenterPoint(n), lt(-this.options.rotation));
    return sa({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], n), s, this.options);
  }
  getCenterPoint(t) {
    return ue(this, t);
  }
  draw(t) {
    t.save(), Zi(t, this.getCenterPoint(), this.options.rotation), ga(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return xa(t, e);
  }
}
De.id = "boxAnnotation";
De.defaults = {
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
De.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
De.descriptors = {
  label: {
    _fallback: !0
  }
};
class qi extends _t {
  inRange(t, e, s, n) {
    return na(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: 0, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return ue(this, t);
  }
  draw(t) {
    const e = this.options;
    !e.display || !e.content || (ag(t, this), t.save(), Zi(t, this.getCenterPoint(), this.rotation), pa(t, this, e, this._fitRatio), t.restore());
  }
  resolveElementProperties(t, e) {
    const s = ig(t, e);
    if (!s)
      return {};
    const { controllerMeta: n, point: o, radius: r } = ng(t, e, s);
    let a = Ki(t.ctx, e);
    const l = og(a, r);
    ca(e, l) && (a = { width: a.width * l, height: a.height * l });
    const { position: c, xAdjust: h, yAdjust: d } = e, u = la(o, a, { borderWidth: 0, position: c, xAdjust: h, yAdjust: d });
    return {
      initProperties: Re(t, u, e),
      ...u,
      ...n,
      rotation: e.rotation,
      _fitRatio: l
    };
  }
}
qi.id = "doughnutLabelAnnotation";
qi.defaults = {
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
qi.defaultRoutes = {};
function ig(i, t) {
  return i.getSortedVisibleDatasetMetas().reduce(function(e, s) {
    const n = s.controller;
    return n instanceof Qs && sg(i, t, s.data) && (!e || n.innerRadius < e.controller.innerRadius) && n.options.circumference >= 90 ? s : e;
  }, void 0);
}
function sg(i, t, e) {
  if (!t.autoHide)
    return !0;
  for (let s = 0; s < e.length; s++)
    if (!e[s].hidden && i.getDataVisibility(s))
      return !0;
}
function ng({ chartArea: i }, t, e) {
  const { left: s, top: n, right: o, bottom: r } = i, { innerRadius: a, offsetX: l, offsetY: c } = e.controller, h = (s + o) / 2 + l, d = (n + r) / 2 + c, u = {
    left: Math.max(h - a, s),
    right: Math.min(h + a, o),
    top: Math.max(d - a, n),
    bottom: Math.min(d + a, r)
  }, f = {
    x: (u.left + u.right) / 2,
    y: (u.top + u.bottom) / 2
  }, g = t.spacing + t.borderWidth / 2, p = a - g, b = f.y > d, m = b ? n + g : r - g, _ = rg(m, h, d, p);
  return {
    controllerMeta: {
      _centerX: h,
      _centerY: d,
      _radius: p,
      _counterclockwise: b,
      ..._
    },
    point: f,
    radius: Math.min(a, Math.min(u.right - u.left, u.bottom - u.top) / 2)
  };
}
function og({ width: i, height: t }, e) {
  const s = Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
  return e * 2 / s;
}
function rg(i, t, e, s) {
  const n = Math.pow(e - i, 2), o = Math.pow(s, 2), r = t * -2, a = Math.pow(t, 2) + n - o, l = Math.pow(r, 2) - 4 * a;
  if (l <= 0)
    return {
      _startAngle: 0,
      _endAngle: q
    };
  const c = (-r - Math.sqrt(l)) / 2, h = (-r + Math.sqrt(l)) / 2;
  return {
    _startAngle: Li({ x: t, y: e }, { x: c, y: i }).angle,
    _endAngle: Li({ x: t, y: e }, { x: h, y: i }).angle
  };
}
function ag(i, t) {
  const { _centerX: e, _centerY: s, _radius: n, _startAngle: o, _endAngle: r, _counterclockwise: a, options: l } = t;
  i.save();
  const c = Ht(i, l);
  i.fillStyle = l.backgroundColor, i.beginPath(), i.arc(e, s, n, o, r, a), i.closePath(), i.fill(), c && i.stroke(), i.restore();
}
class ei extends _t {
  inRange(t, e, s, n) {
    return na(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: this.options.borderWidth, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return ue(this, t);
  }
  draw(t) {
    const e = this.options, s = !vt(this._visible) || this._visible;
    !e.display || !e.content || !s || (t.save(), Zi(t, this.getCenterPoint(), this.rotation), Df(t, this), ga(t, this, e), pa(t, lg(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let s;
    if (da(e))
      s = _a(t, e);
    else {
      const { centerX: a, centerY: l } = on(t, e);
      s = { x: a, y: l };
    }
    const n = ht(e.padding), o = Ki(t.ctx, e), r = la(s, o, e, n);
    return {
      initProperties: Re(t, r, e),
      pointX: s.x,
      pointY: s.y,
      ...r,
      rotation: e.rotation
    };
  }
}
ei.id = "labelAnnotation";
ei.defaults = {
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
ei.defaultRoutes = {
  borderColor: "color"
};
function lg({ x: i, y: t, width: e, height: s, options: n }) {
  const o = n.borderWidth / 2, r = ht(n.padding);
  return {
    x: i + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - n.borderWidth,
    height: s - r.top - r.bottom - n.borderWidth
  };
}
const an = (i, t, e) => ({ x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) }), Ds = (i, t, e) => an(t, e, Math.abs((i - t.y) / (e.y - t.y))).x, Vo = (i, t, e) => an(t, e, Math.abs((i - t.x) / (e.x - t.x))).y, Ve = (i) => i * i, cg = (i, t, { x: e, y: s, x2: n, y2: o }, r) => r === "y" ? { start: Math.min(s, o), end: Math.max(s, o), value: t } : { start: Math.min(e, n), end: Math.max(e, n), value: i }, Go = (i, t, e, s) => (1 - s) * (1 - s) * i + 2 * (1 - s) * s * t + s * s * e, Is = (i, t, e, s) => ({ x: Go(i.x, t.x, e.x, s), y: Go(i.y, t.y, e.y, s) }), jo = (i, t, e, s) => 2 * (1 - s) * (t - i) + 2 * s * (e - t), Xo = (i, t, e, s) => -Math.atan2(jo(i.x, t.x, e.x, s), jo(i.y, t.y, e.y, s)) + 0.5 * H;
class ii extends _t {
  inRange(t, e, s, n) {
    const o = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y") {
      const r = { mouseX: t, mouseY: e }, { path: a, ctx: l } = this;
      if (a) {
        Ht(l, this.options), l.lineWidth += this.options.hitTolerance;
        const { chart: h } = this.$context, d = t * h.currentDevicePixelRatio, u = e * h.currentDevicePixelRatio, f = l.isPointInStroke(a, d, u) || Ls(this, r, n);
        return l.restore(), f;
      }
      const c = Ve(o);
      return fg(this, r, c, n) || Ls(this, r, n);
    }
    return hg(this, { mouseX: t, mouseY: e }, s, { hitSize: o, useFinalPosition: n });
  }
  getCenterPoint(t) {
    return ue(this, t);
  }
  draw(t) {
    const { x: e, y: s, x2: n, y2: o, cp: r, options: a } = this;
    if (t.save(), !Ht(t, a))
      return t.restore();
    Ce(t, a);
    const l = Math.sqrt(Math.pow(n - e, 2) + Math.pow(o - s, 2));
    if (a.curve && r)
      return Sg(t, this, r, l), t.restore();
    const { startOpts: c, endOpts: h, startAdjust: d, endAdjust: u } = va(this), f = Math.atan2(o - s, n - e);
    t.translate(e, s), t.rotate(f), t.beginPath(), t.moveTo(0 + d, 0), t.lineTo(l - u, 0), t.shadowColor = a.borderShadowColor, t.stroke(), Ms(t, 0, d, c), Ms(t, l, -u, h), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const s = Bf(t, e), { x: n, y: o, x2: r, y2: a } = s, l = dg(s, t.chartArea), c = l ? ug({ x: n, y: o }, { x: r, y: a }, t.chartArea) : { x: n, y: o, x2: r, y2: a, width: Math.abs(r - n), height: Math.abs(a - o) };
    if (c.centerX = (r + n) / 2, c.centerY = (a + o) / 2, c.initProperties = Re(t, c, e), e.curve) {
      const d = { x: c.x, y: c.y }, u = { x: c.x2, y: c.y2 };
      c.cp = xg(c, e, xe(d, u));
    }
    const h = gg(t, c, e.label);
    return h._visible = l, c.elements = [{
      type: "label",
      optionScope: "label",
      properties: h,
      initProperties: c.initProperties
    }], c;
  }
}
ii.id = "lineAnnotation";
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
ii.defaults = {
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
    callout: Object.assign({}, ei.defaults.callout),
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
ii.descriptors = {
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
ii.defaultRoutes = {
  borderColor: "color"
};
function hg(i, { mouseX: t, mouseY: e }, s, { hitSize: n, useFinalPosition: o }) {
  const r = cg(t, e, i.getProps(["x", "y", "x2", "y2"], o), s);
  return ia(r, n) || Ls(i, { mouseX: t, mouseY: e }, o, s);
}
function dg({ x: i, y: t, x2: e, y2: s }, { top: n, right: o, bottom: r, left: a }) {
  return !(i < a && e < a || i > o && e > o || t < n && s < n || t > r && s > r);
}
function Uo({ x: i, y: t }, e, { top: s, right: n, bottom: o, left: r }) {
  return i < r && (t = Vo(r, { x: i, y: t }, e), i = r), i > n && (t = Vo(n, { x: i, y: t }, e), i = n), t < s && (i = Ds(s, { x: i, y: t }, e), t = s), t > o && (i = Ds(o, { x: i, y: t }, e), t = o), { x: i, y: t };
}
function ug(i, t, e) {
  const { x: s, y: n } = Uo(i, t, e), { x: o, y: r } = Uo(t, i, e);
  return { x: s, y: n, x2: o, y2: r, width: Math.abs(o - s), height: Math.abs(r - n) };
}
function fg(i, { mouseX: t, mouseY: e }, s = ne, n) {
  const { x: o, y: r, x2: a, y2: l } = i.getProps(["x", "y", "x2", "y2"], n), c = a - o, h = l - r, d = Ve(c) + Ve(h), u = d === 0 ? -1 : ((t - o) * c + (e - r) * h) / d;
  let f, g;
  return u < 0 ? (f = o, g = r) : u > 1 ? (f = a, g = l) : (f = o + u * c, g = r + u * h), Ve(t - f) + Ve(e - g) <= s;
}
function Ls(i, { mouseX: t, mouseY: e }, s, n) {
  const o = i.label;
  return o.options.display && o.inRange(t, e, n, s);
}
function gg(i, t, e) {
  const s = e.borderWidth, n = ht(e.padding), o = Ki(i.ctx, e), r = o.width + n.width + s, a = o.height + n.height + s;
  return bg(t, e, { width: r, height: a, padding: n }, i.chartArea);
}
function pg(i) {
  const { x: t, y: e, x2: s, y2: n } = i, o = Math.atan2(n - e, s - t);
  return o > H / 2 ? o - H : o < H / -2 ? o + H : o;
}
function bg(i, t, e, s) {
  const { width: n, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: i.x, y: i.y }, h = { x: i.x2, y: i.y2 }, d = t.rotation === "auto" ? pg(i) : lt(t.rotation), u = mg(n, o, d), f = _g(i, t, { labelSize: u, padding: r }, s), g = i.cp ? Is(c, i.cp, h, f) : an(c, h, f), p = { size: u.w, min: s.left, max: s.right, padding: r.left }, b = { size: u.h, min: s.top, max: s.bottom, padding: r.top }, m = Zo(g.x, p) + a, _ = Zo(g.y, b) + l;
  return {
    x: m - n / 2,
    y: _ - o / 2,
    x2: m + n / 2,
    y2: _ + o / 2,
    centerX: m,
    centerY: _,
    pointX: g.x,
    pointY: g.y,
    width: n,
    height: o,
    rotation: Hi(d)
  };
}
function mg(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e);
  return {
    w: Math.abs(i * s) + Math.abs(t * n),
    h: Math.abs(i * n) + Math.abs(t * s)
  };
}
function _g(i, t, e, s) {
  let n;
  const o = yg(i, s);
  return t.position === "start" ? n = $o({ w: i.x2 - i.x, h: i.y2 - i.y }, e, t, o) : t.position === "end" ? n = 1 - $o({ w: i.x - i.x2, h: i.y - i.y2 }, e, t, o) : n = sn(1, t.position), n;
}
function $o(i, t, e, s) {
  const { labelSize: n, padding: o } = t, r = i.w * s.dx, a = i.h * s.dy, l = r > 0 && (n.w / 2 + o.left - s.x) / r, c = a > 0 && (n.h / 2 + o.top - s.y) / a;
  return Ui(Math.max(l, c), 0, 0.25);
}
function yg(i, t) {
  const { x: e, x2: s, y: n, y2: o } = i, r = Math.min(n, o) - t.top, a = Math.min(e, s) - t.left, l = t.bottom - Math.max(n, o), c = t.right - Math.max(e, s);
  return {
    x: Math.min(a, c),
    y: Math.min(r, l),
    dx: a <= c ? 1 : -1,
    dy: r <= l ? 1 : -1
  };
}
function Zo(i, t) {
  const { size: e, min: s, max: n, padding: o } = t, r = e / 2;
  return e > n - s ? (n + s) / 2 : (s >= i - o - r && (i = s + o + r), n <= i + o + r && (i = n - o - r), i);
}
function va(i) {
  const t = i.options, e = t.arrowHeads && t.arrowHeads.start, s = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: e,
    endOpts: s,
    startAdjust: Ko(i, e),
    endAdjust: Ko(i, s)
  };
}
function Ko(i, t) {
  if (!t || !t.display)
    return 0;
  const { length: e, width: s } = t, n = i.options.borderWidth / 2, o = { x: e, y: s + n };
  return Math.abs(Ds(0, o, { x: 0, y: n }));
}
function Ms(i, t, e, s) {
  if (!s || !s.display)
    return;
  const { length: n, width: o, fill: r, backgroundColor: a, borderColor: l } = s, c = Math.abs(t - n) + e;
  i.beginPath(), Ce(i, s), Ht(i, s), i.moveTo(c, -o), i.lineTo(t + e, 0), i.lineTo(c, o), r === !0 ? (i.fillStyle = a || l, i.closePath(), i.fill(), i.shadowColor = "transparent") : i.shadowColor = s.borderShadowColor, i.stroke();
}
function xg(i, t, e) {
  const { x: s, y: n, x2: o, y2: r, centerX: a, centerY: l } = i, c = Math.atan2(r - n, o - s), h = nn(t.controlPoint, 0), d = {
    x: a + qt(e, h.x, !1),
    y: l + qt(e, h.y, !1)
  };
  return de(d, { x: a, y: l }, c);
}
function qo(i, { x: t, y: e }, { angle: s, adjust: n }, o) {
  !o || !o.display || (i.save(), i.translate(t, e), i.rotate(s), Ms(i, 0, -n, o), i.restore());
}
function Sg(i, t, e, s) {
  const { x: n, y: o, x2: r, y2: a, options: l } = t, { startOpts: c, endOpts: h, startAdjust: d, endAdjust: u } = va(t), f = { x: n, y: o }, g = { x: r, y: a }, p = Xo(f, e, g, 0), b = Xo(f, e, g, 1) - H, m = Is(f, e, g, d / s), _ = Is(f, e, g, 1 - u / s), T = new Path2D();
  i.beginPath(), T.moveTo(m.x, m.y), T.quadraticCurveTo(e.x, e.y, _.x, _.y), i.shadowColor = l.borderShadowColor, i.stroke(T), t.path = T, t.ctx = i, qo(i, m, { angle: p, adjust: d }, c), qo(i, _, { angle: b, adjust: u }, h);
}
class si extends _t {
  inRange(t, e, s, n) {
    const o = this.options.rotation, r = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y")
      return Tg({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], n), o, r);
    const { x: a, y: l, x2: c, y2: h } = this.getProps(["x", "y", "x2", "y2"], n), d = s === "y" ? { start: l, end: h } : { start: a, end: c }, u = de({ x: t, y: e }, this.getCenterPoint(n), lt(-o));
    return u[s] >= d.start - r - ne && u[s] <= d.end + r + ne;
  }
  getCenterPoint(t) {
    return ue(this, t);
  }
  draw(t) {
    const { width: e, height: s, centerX: n, centerY: o, options: r } = this;
    t.save(), Zi(t, this.getCenterPoint(), r.rotation), Ce(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Ht(t, r);
    t.ellipse(n, o, s / 2, e / 2, H / 2, 0, 2 * H), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return xa(t, e);
  }
}
si.id = "ellipseAnnotation";
si.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  label: Object.assign({}, De.defaults.label),
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
si.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
si.descriptors = {
  label: {
    _fallback: !0
  }
};
function Tg(i, t, e, s) {
  const { width: n, height: o, centerX: r, centerY: a } = t, l = n / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const h = lt(e || 0), d = Math.cos(h), u = Math.sin(h), f = Math.pow(d * (i.x - r) + u * (i.y - a), 2), g = Math.pow(u * (i.x - r) - d * (i.y - a), 2);
  return f / Math.pow(l + s, 2) + g / Math.pow(c + s, 2) <= 1.0001;
}
class Ji extends _t {
  inRange(t, e, s, n) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], n), h = (this.options.borderWidth + this.options.hitTolerance) / 2;
    return s !== "x" && s !== "y" ? bf({ x: t, y: e }, this.getCenterPoint(n), c / 2, h) : ia(s === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t }, h);
  }
  getCenterPoint(t) {
    return ue(this, t);
  }
  draw(t) {
    const e = this.options, s = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, Ce(t, e);
    const n = Ht(t, e);
    wf(t, this, this.centerX, this.centerY), n && !$i(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = s;
  }
  resolveElementProperties(t, e) {
    const s = ya(t, e);
    return s.initProperties = Re(t, s, e), s;
  }
}
Ji.id = "pointAnnotation";
Ji.defaults = {
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
Ji.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class Qi extends _t {
  inRange(t, e, s, n) {
    if (s !== "x" && s !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && wg(this.elements, t, e, n);
    const o = de({ x: t, y: e }, this.getCenterPoint(n), lt(-this.options.rotation)), r = this.elements.map((c) => s === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[s] >= a && o[s] <= l;
  }
  getCenterPoint(t) {
    return ue(this, t);
  }
  draw(t) {
    const { elements: e, options: s } = this;
    t.save(), t.beginPath(), t.fillStyle = s.backgroundColor, Ce(t, s);
    const n = Ht(t, s);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), n && (t.shadowColor = s.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const s = ya(t, e), { sides: n, rotation: o } = e, r = [], a = 2 * H / n;
    let l = o * zs;
    for (let c = 0; c < n; c++, l += a) {
      const h = vg(s, e, l);
      h.initProperties = Re(t, s, e), r.push(h);
    }
    return s.elements = r, s;
  }
}
Qi.id = "polygonAnnotation";
Qi.defaults = {
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
Qi.defaultRoutes = {
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
function wg(i, t, e, s) {
  let n = !1, o = i[i.length - 1].getProps(["bX", "bY"], s);
  for (const r of i) {
    const a = r.getProps(["bX", "bY"], s);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (n = !n), o = a;
  }
  return n;
}
const Zt = {
  box: De,
  doughnutLabel: qi,
  ellipse: si,
  label: ei,
  line: ii,
  point: Ji,
  polygon: Qi
};
Object.keys(Zt).forEach((i) => {
  st.describe(`elements.${Zt[i].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Eg = {
  update: Object.assign
}, Ag = rn.concat(Fi), Jo = (i, t) => z(t) ? Ps(i, t) : i, ks = (i) => i === "color" || i === "font";
function ln(i = "line") {
  return Zt[i] ? i : (console.warn(`Unknown annotation type: '${i}', defaulting to 'line'`), "line");
}
function Og(i, t, e, s) {
  const n = Cg(i, e.animations, s), o = t.annotations, r = Lg(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = wa(r, a, l.type), h = l.setContext(Ig(i, c, r, l)), d = c.resolveElementProperties(i, h);
    d.skip = Rg(d), "elements" in d && (Dg(c, d.elements, h, n), delete d.elements), vt(c.x) || Object.assign(c, d), Object.assign(c, d.initProperties), d.options = Ea(h), n.update(c, d);
  }
}
function Rg(i) {
  return isNaN(i.x) || isNaN(i.y);
}
function Cg(i, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? Eg : new Js(i, t);
}
function Dg(i, t, e, s) {
  const n = i.elements || (i.elements = []);
  n.length = t.length;
  for (let o = 0; o < t.length; o++) {
    const r = t[o], a = r.properties, l = wa(n, o, r.type, r.initProperties), c = e[r.optionScope].override(r);
    a.options = Ea(c), s.update(l, a);
  }
}
function wa(i, t, e, s) {
  const n = Zt[ln(e)];
  let o = i[t];
  return (!o || !(o instanceof n)) && (o = i[t] = new n(), Object.assign(o, s)), o;
}
function Ea(i) {
  const t = Zt[ln(i.type)], e = {};
  e.id = i.id, e.type = i.type, e.drawTime = i.drawTime, Object.assign(
    e,
    Ps(i, t.defaults),
    Ps(i, t.defaultRoutes)
  );
  for (const s of Ag)
    e[s] = i[s];
  return e;
}
function Ps(i, t) {
  const e = {};
  for (const s of Object.keys(t)) {
    const n = t[s], o = i[s];
    ks(s) && Y(o) ? e[s] = o.map((r) => Jo(r, n)) : e[s] = Jo(o, n);
  }
  return e;
}
function Ig(i, t, e, s) {
  return t.$context || (t.$context = Object.assign(Object.create(i.getContext()), {
    element: t,
    get elements() {
      return e.filter((n) => n && n.options);
    },
    id: s.id,
    type: "annotation"
  }));
}
function Lg(i, t) {
  const e = t.length, s = i.length;
  if (s < e) {
    const n = e - s;
    i.splice(s, 0, ...new Array(n));
  } else s > e && i.splice(e, s - e);
  return i;
}
var Mg = "3.1.0";
const Gt = /* @__PURE__ */ new Map(), Qo = (i) => i.type !== "doughnutLabel", kg = rn.concat(Fi);
var Pg = {
  id: "annotation",
  version: Mg,
  beforeRegister() {
    mf("chart.js", "4.0", re.version);
  },
  afterRegister() {
    re.register(Zt);
  },
  afterUnregister() {
    re.unregister(Zt);
  },
  beforeInit(i) {
    Gt.set(i, {
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
    const s = Gt.get(i), n = s.annotations = [];
    let o = e.annotations;
    z(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      z(a) && (a.id = r, n.push(a));
    }) : Y(o) && n.push(...o), qf(n.filter(Qo), i.scales);
  },
  afterDataLimits(i, t) {
    const e = Gt.get(i);
    Kf(i, t.scale, e.annotations.filter(Qo).filter((s) => s.display && s.adjustScaleRange));
  },
  afterUpdate(i, t, e) {
    const s = Gt.get(i);
    Xf(i, s, e), Og(i, s, e, t.mode), s.visibleElements = s.elements.filter((n) => !n.skip && n.options.display), Zf(i, s, e);
  },
  beforeDatasetsDraw(i, t, e) {
    Fe(i, "beforeDatasetsDraw", e.clip);
  },
  afterDatasetsDraw(i, t, e) {
    Fe(i, "afterDatasetsDraw", e.clip);
  },
  beforeDatasetDraw(i, t, e) {
    Fe(i, t.index, e.clip);
  },
  beforeDraw(i, t, e) {
    Fe(i, "beforeDraw", e.clip);
  },
  afterDraw(i, t, e) {
    Fe(i, "afterDraw", e.clip);
  },
  beforeEvent(i, t, e) {
    const s = Gt.get(i);
    Yf(s, t.event, e) && (t.changed = !0);
  },
  afterDestroy(i) {
    Gt.delete(i);
  },
  getAnnotations(i) {
    const t = Gt.get(i);
    return t ? t.elements : [];
  },
  // only for testing
  _getAnnotationElementsAtEventForMode(i, t, e) {
    return en(i, t, e);
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
    _scriptable: (i) => !kg.includes(i) && i !== "init",
    annotations: {
      _allKeys: !1,
      _fallback: (i, t) => `elements.${Zt[ln(t.type)].id}`
    },
    interaction: {
      _fallback: !0
    },
    common: {
      label: {
        _indexable: ks,
        _fallback: !0
      },
      _indexable: ks
    }
  },
  additionalOptionScopes: [""]
};
function Fe(i, t, e) {
  const { ctx: s, chartArea: n } = i, o = Gt.get(i);
  e && Qe(s, n);
  const r = Ng(o.visibleElements, t).sort((a, l) => a.element.options.z - l.element.options.z);
  for (const a of r)
    Fg(s, n, o, a);
  e && ti(s);
}
function Ng(i, t) {
  const e = [];
  for (const s of i)
    if (s.options.drawTime === t && e.push({ element: s, main: !0 }), s.elements && s.elements.length)
      for (const n of s.elements)
        n.options.display && n.options.drawTime === t && e.push({ element: n });
  return e;
}
function Fg(i, t, e, s) {
  const n = s.element;
  s.main ? (Wo(e, n, "beforeDraw"), n.draw(i, t), Wo(e, n, "afterDraw")) : n.draw(i, t);
}
class C extends ar {
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
  _seriesIndex = new R();
  _label;
  _chartType = new R();
  _xAxisId = new R();
  _yAxisId = new R();
  _yAxisTitle = new R();
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
    return O.Literals.SERIES_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(C.SERIES_INDEX),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.SERIES_INDEX,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.LABEL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.CHART_TYPE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.CHART_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.X_AXIS_ID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.X_AXIS_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.Y_AXIS_ID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.Y_AXIS_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.Y_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.Y_AXIS_TITLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.BORDER_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.BORDER_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.BACKGROUND_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.BORDER_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.BORDER_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.BORDER_DASH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.BORDER_DASH,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.FILL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.FILL,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.SHOW_POINTS),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.SHOW_POINTS,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.POINT_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.POINT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(C.POINT_SIZE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => C.POINT_SIZE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case C.SERIES_INDEX:
        return this.seriesIndex;
      case C.LABEL:
        return this.label;
      case C.CHART_TYPE:
        return this.chartType;
      case C.X_AXIS_ID:
        return this.xAxisId;
      case C.Y_AXIS_ID:
        return this.yAxisId;
      case C.Y_AXIS_TITLE:
        return this.yAxisTitle;
      case C.BORDER_COLOR:
        return this.borderColor;
      case C.BACKGROUND_COLOR:
        return this.backgroundColor;
      case C.BORDER_WIDTH:
        return this.borderWidth;
      case C.BORDER_DASH:
        return this.borderDash;
      case C.FILL:
        return this.fill;
      case C.SHOW_POINTS:
        return this.showPoints;
      case C.POINT_COLOR:
        return this.pointColor;
      case C.POINT_SIZE:
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
      case C.SERIES_INDEX:
        this.seriesIndex = e, super.eSet(t, e);
        break;
      case C.LABEL:
        this.label = e, super.eSet(t, e);
        break;
      case C.CHART_TYPE:
        this.chartType = e, super.eSet(t, e);
        break;
      case C.X_AXIS_ID:
        this.xAxisId = e, super.eSet(t, e);
        break;
      case C.Y_AXIS_ID:
        this.yAxisId = e, super.eSet(t, e);
        break;
      case C.Y_AXIS_TITLE:
        this.yAxisTitle = e, super.eSet(t, e);
        break;
      case C.BORDER_COLOR:
        this.borderColor = e, super.eSet(t, e);
        break;
      case C.BACKGROUND_COLOR:
        this.backgroundColor = e, super.eSet(t, e);
        break;
      case C.BORDER_WIDTH:
        this.borderWidth = e, super.eSet(t, e);
        break;
      case C.BORDER_DASH:
        this.borderDash = e, super.eSet(t, e);
        break;
      case C.FILL:
        this.fill = e, super.eSet(t, e);
        break;
      case C.SHOW_POINTS:
        this.showPoints = e, super.eSet(t, e);
        break;
      case C.POINT_COLOR:
        this.pointColor = e, super.eSet(t, e);
        break;
      case C.POINT_SIZE:
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
      case C.SERIES_INDEX:
        return this._seriesIndex !== new R();
      case C.LABEL:
        return this._label !== void 0;
      case C.CHART_TYPE:
        return this._chartType !== new R();
      case C.X_AXIS_ID:
        return this._xAxisId !== new R();
      case C.Y_AXIS_ID:
        return this._yAxisId !== new R();
      case C.Y_AXIS_TITLE:
        return this._yAxisTitle !== new R();
      case C.BORDER_COLOR:
        return this._borderColor !== void 0;
      case C.BACKGROUND_COLOR:
        return this._backgroundColor !== void 0;
      case C.BORDER_WIDTH:
        return this._borderWidth !== void 0;
      case C.BORDER_DASH:
        return this._borderDash !== void 0;
      case C.FILL:
        return this._fill !== void 0;
      case C.SHOW_POINTS:
        return this._showPoints !== void 0;
      case C.POINT_COLOR:
        return this._pointColor !== void 0;
      case C.POINT_SIZE:
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
      case C.SERIES_INDEX:
        this._seriesIndex = new R();
        return;
      case C.LABEL:
        this._label = void 0;
        return;
      case C.CHART_TYPE:
        this._chartType = new R();
        return;
      case C.X_AXIS_ID:
        this._xAxisId = new R();
        return;
      case C.Y_AXIS_ID:
        this._yAxisId = new R();
        return;
      case C.Y_AXIS_TITLE:
        this._yAxisTitle = new R();
        return;
      case C.BORDER_COLOR:
        this._borderColor = void 0;
        return;
      case C.BACKGROUND_COLOR:
        this._backgroundColor = void 0;
        return;
      case C.BORDER_WIDTH:
        this._borderWidth = void 0;
        return;
      case C.BORDER_DASH:
        this._borderDash = void 0;
        return;
      case C.FILL:
        this._fill = void 0;
        return;
      case C.SHOW_POINTS:
        this._showPoints = void 0;
        return;
      case C.POINT_COLOR:
        this._pointColor = void 0;
        return;
      case C.POINT_SIZE:
        this._pointSize = void 0;
        return;
      default:
        super.eUnset(t);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      seriesIndex: this.seriesIndex,
      label: this.label,
      chartType: this.chartType,
      xAxisId: this.xAxisId,
      yAxisId: this.yAxisId,
      yAxisTitle: this.yAxisTitle,
      borderColor: this.borderColor,
      backgroundColor: this.backgroundColor,
      borderWidth: this.borderWidth,
      borderDash: this.borderDash,
      fill: this.fill,
      showPoints: this.showPoints,
      pointColor: this.pointColor,
      pointSize: this.pointSize
    };
  }
}
class cn extends Ga {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new cn()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(O.eINSTANCE);
  }
  /**
   * Create a new SeriesSettings instance
   */
  createSeriesSettings() {
    return new C();
  }
  /**
   * Create a new ChartSettings instance
   */
  createChartSettings() {
    return new y();
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
function j(i) {
  const t = lr.INSTANCE.getEPackage(i);
  if (!t)
    throw new Error(`EPackage '${i}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ChartsettingsPackage.`);
  return t;
}
class O extends ja {
  static eNAME = "chartsettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.chart";
  static eNS_PREFIX = "chartsettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new O(), this._instance.init()), this._instance;
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
    super(), this.setName(O.eNAME), this.setNsURI(O.eNS_URI), this.setNsPrefix(O.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    lr.INSTANCE.set(O.eNS_URI, this), this.setEFactoryInstance(cn.eINSTANCE);
    const t = new gn();
    t.setName("SeriesSettings"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), O.Literals.SERIES_SETTINGS = t;
    const e = new G();
    e.setContainment(!1), e.setName("seriesIndex"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), O.Literals.SERIES_SETTINGS__SERIES_INDEX = e;
    const s = new G();
    s.setContainment(!1), s.setName("label"), s.setLowerBound(0), s.setUpperBound(1), t.getEStructuralFeatures().push(s), O.Literals.SERIES_SETTINGS__LABEL = s;
    const n = new G();
    n.setContainment(!1), n.setName("chartType"), n.setLowerBound(0), n.setUpperBound(1), t.getEStructuralFeatures().push(n), O.Literals.SERIES_SETTINGS__CHART_TYPE = n;
    const o = new G();
    o.setContainment(!1), o.setName("xAxisId"), o.setLowerBound(0), o.setUpperBound(1), t.getEStructuralFeatures().push(o), O.Literals.SERIES_SETTINGS__X_AXIS_ID = o;
    const r = new G();
    r.setContainment(!1), r.setName("yAxisId"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), O.Literals.SERIES_SETTINGS__Y_AXIS_ID = r;
    const a = new G();
    a.setContainment(!1), a.setName("yAxisTitle"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), O.Literals.SERIES_SETTINGS__Y_AXIS_TITLE = a;
    const l = new G();
    l.setContainment(!1), l.setName("borderColor"), l.setLowerBound(0), l.setUpperBound(1), t.getEStructuralFeatures().push(l), O.Literals.SERIES_SETTINGS__BORDER_COLOR = l;
    const c = new G();
    c.setContainment(!1), c.setName("backgroundColor"), c.setLowerBound(0), c.setUpperBound(1), t.getEStructuralFeatures().push(c), O.Literals.SERIES_SETTINGS__BACKGROUND_COLOR = c;
    const h = new G();
    h.setContainment(!1), h.setName("borderWidth"), h.setLowerBound(0), h.setUpperBound(1), t.getEStructuralFeatures().push(h), O.Literals.SERIES_SETTINGS__BORDER_WIDTH = h;
    const d = new G();
    d.setContainment(!1), d.setName("borderDash"), d.setLowerBound(0), d.setUpperBound(1), t.getEStructuralFeatures().push(d), O.Literals.SERIES_SETTINGS__BORDER_DASH = d;
    const u = new G();
    u.setContainment(!1), u.setName("fill"), u.setLowerBound(0), u.setUpperBound(1), t.getEStructuralFeatures().push(u), O.Literals.SERIES_SETTINGS__FILL = u;
    const f = new G();
    f.setContainment(!1), f.setName("showPoints"), f.setLowerBound(0), f.setUpperBound(1), t.getEStructuralFeatures().push(f), O.Literals.SERIES_SETTINGS__SHOW_POINTS = f;
    const g = new G();
    g.setContainment(!1), g.setName("pointColor"), g.setLowerBound(0), g.setUpperBound(1), t.getEStructuralFeatures().push(g), O.Literals.SERIES_SETTINGS__POINT_COLOR = g;
    const p = new G();
    p.setContainment(!1), p.setName("pointSize"), p.setLowerBound(0), p.setUpperBound(1), t.getEStructuralFeatures().push(p), O.Literals.SERIES_SETTINGS__POINT_SIZE = p;
    const b = new gn();
    b.setName("ChartSettings"), b.setAbstract(!1), b.setInterface(!1), this.getEClassifiers().push(b), b.setEPackage(this), O.Literals.CHART_SETTINGS = b;
    const m = new G();
    m.setContainment(!0), m.setName("seriesSettings"), m.setLowerBound(0), m.setUpperBound(-1), b.getEStructuralFeatures().push(m), O.Literals.CHART_SETTINGS__SERIES_SETTINGS = m;
    const _ = new G();
    _.setContainment(!1), _.setName("chartType"), _.setLowerBound(0), _.setUpperBound(1), b.getEStructuralFeatures().push(_), O.Literals.CHART_SETTINGS__CHART_TYPE = _;
    const T = new G();
    T.setContainment(!1), T.setName("barOrientation"), T.setLowerBound(0), T.setUpperBound(1), b.getEStructuralFeatures().push(T), O.Literals.CHART_SETTINGS__BAR_ORIENTATION = T;
    const w = new G();
    w.setContainment(!1), w.setName("stacked"), w.setLowerBound(0), w.setUpperBound(1), b.getEStructuralFeatures().push(w), O.Literals.CHART_SETTINGS__STACKED = w;
    const x = new G();
    x.setContainment(!1), x.setName("borderColor"), x.setLowerBound(0), x.setUpperBound(1), b.getEStructuralFeatures().push(x), O.Literals.CHART_SETTINGS__BORDER_COLOR = x;
    const D = new G();
    D.setContainment(!1), D.setName("borderWidth"), D.setLowerBound(0), D.setUpperBound(1), b.getEStructuralFeatures().push(D), O.Literals.CHART_SETTINGS__BORDER_WIDTH = D;
    const S = new G();
    S.setContainment(!1), S.setName("borderDash"), S.setLowerBound(0), S.setUpperBound(1), b.getEStructuralFeatures().push(S), O.Literals.CHART_SETTINGS__BORDER_DASH = S;
    const A = new G();
    A.setContainment(!1), A.setName("backgroundColor"), A.setLowerBound(0), A.setUpperBound(1), b.getEStructuralFeatures().push(A), O.Literals.CHART_SETTINGS__BACKGROUND_COLOR = A;
    const v = new G();
    v.setContainment(!1), v.setName("fill"), v.setLowerBound(0), v.setUpperBound(1), b.getEStructuralFeatures().push(v), O.Literals.CHART_SETTINGS__FILL = v;
    const N = new G();
    N.setContainment(!1), N.setName("showPoints"), N.setLowerBound(0), N.setUpperBound(1), b.getEStructuralFeatures().push(N), O.Literals.CHART_SETTINGS__SHOW_POINTS = N;
    const P = new G();
    P.setContainment(!1), P.setName("pointColor"), P.setLowerBound(0), P.setUpperBound(1), b.getEStructuralFeatures().push(P), O.Literals.CHART_SETTINGS__POINT_COLOR = P;
    const E = new G();
    E.setContainment(!1), E.setName("pointSize"), E.setLowerBound(0), E.setUpperBound(1), b.getEStructuralFeatures().push(E), O.Literals.CHART_SETTINGS__POINT_SIZE = E;
    const M = new G();
    M.setContainment(!1), M.setName("showHorizontalGrid"), M.setLowerBound(0), M.setUpperBound(1), b.getEStructuralFeatures().push(M), O.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID = M;
    const V = new G();
    V.setContainment(!1), V.setName("horizontalGridColor"), V.setLowerBound(0), V.setUpperBound(1), b.getEStructuralFeatures().push(V), O.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR = V;
    const L = new G();
    L.setContainment(!1), L.setName("horizontalGridWidth"), L.setLowerBound(0), L.setUpperBound(1), b.getEStructuralFeatures().push(L), O.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH = L;
    const B = new G();
    B.setContainment(!1), B.setName("showVerticalGrid"), B.setLowerBound(0), B.setUpperBound(1), b.getEStructuralFeatures().push(B), O.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID = B;
    const k = new G();
    k.setContainment(!1), k.setName("verticalGridColor"), k.setLowerBound(0), k.setUpperBound(1), b.getEStructuralFeatures().push(k), O.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR = k;
    const K = new G();
    K.setContainment(!1), K.setName("verticalGridWidth"), K.setLowerBound(0), K.setUpperBound(1), b.getEStructuralFeatures().push(K), O.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH = K;
    const Z = new G();
    Z.setContainment(!1), Z.setName("xAxisTitle"), Z.setLowerBound(0), Z.setUpperBound(1), b.getEStructuralFeatures().push(Z), O.Literals.CHART_SETTINGS__X_AXIS_TITLE = Z;
    const dt = new G();
    dt.setContainment(!1), dt.setName("yAxisTitle"), dt.setLowerBound(0), dt.setUpperBound(1), b.getEStructuralFeatures().push(dt), O.Literals.CHART_SETTINGS__Y_AXIS_TITLE = dt;
    const ft = new G();
    ft.setContainment(!1), ft.setName("annotationsEditMode"), ft.setLowerBound(0), ft.setUpperBound(1), b.getEStructuralFeatures().push(ft), O.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE = ft;
    const ut = new hi();
    ut.setName("horizontalLines"), ut.setLowerBound(0), ut.setUpperBound(-1), b.getEStructuralFeatures().push(ut), O.Literals.CHART_SETTINGS__HORIZONTAL_LINES = ut;
    const gt = new hi();
    gt.setName("verticalLines"), gt.setLowerBound(0), gt.setUpperBound(-1), b.getEStructuralFeatures().push(gt), O.Literals.CHART_SETTINGS__VERTICAL_LINES = gt;
    const rt = new hi();
    rt.setName("horizontalBoxes"), rt.setLowerBound(0), rt.setUpperBound(-1), b.getEStructuralFeatures().push(rt), O.Literals.CHART_SETTINGS__HORIZONTAL_BOXES = rt;
    const et = new hi();
    et.setName("verticalBoxes"), et.setLowerBound(0), et.setUpperBound(-1), b.getEStructuralFeatures().push(et), O.Literals.CHART_SETTINGS__VERTICAL_BOXES = et;
    const at = new G();
    at.setContainment(!1), at.setName("dateDisplayFormat"), at.setLowerBound(0), at.setUpperBound(1), b.getEStructuralFeatures().push(at), O.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT = at, O.Literals.SERIES_SETTINGS__SERIES_INDEX.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__LABEL.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__CHART_TYPE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__X_AXIS_ID.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__Y_AXIS_ID.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__Y_AXIS_TITLE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__BORDER_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__BACKGROUND_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__BORDER_WIDTH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__BORDER_DASH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__FILL.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__SHOW_POINTS.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__POINT_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__POINT_SIZE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__SERIES_SETTINGS.setEType(O.Literals.SERIES_SETTINGS), O.Literals.CHART_SETTINGS__CHART_TYPE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BAR_ORIENTATION.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__STACKED.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BORDER_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BORDER_WIDTH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BORDER_DASH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BACKGROUND_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__FILL.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__SHOW_POINTS.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__POINT_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__POINT_SIZE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__X_AXIS_TITLE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__Y_AXIS_TITLE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class y extends ar {
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
  _chartType = new R();
  _barOrientation = new R();
  _stacked = new R();
  _borderColor = new R();
  _borderWidth = new R();
  _borderDash = new R();
  _backgroundColor = new R();
  _fill = new R();
  _showPoints = new R();
  _pointColor = new R();
  _pointSize = new R();
  _showHorizontalGrid = new R();
  _horizontalGridColor = new R();
  _horizontalGridWidth = new R();
  _showVerticalGrid = new R();
  _verticalGridColor = new R();
  _verticalGridWidth = new R();
  _xAxisTitle = new R();
  _yAxisTitle = new R();
  _annotationsEditMode = new R();
  _horizontalLines;
  _verticalLines;
  _horizontalBoxes;
  _verticalBoxes;
  _dateDisplayFormat = new R();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return O.Literals.CHART_SETTINGS;
  }
  // Getters and Setters
  get seriesSettings() {
    return this._seriesSettings || (this._seriesSettings = Xa(this, this.eClass().getEStructuralFeature("seriesSettings"))), this._seriesSettings;
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
      getFeature: () => this.eClass().getEStructuralFeature(y.CHART_TYPE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.CHART_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.BAR_ORIENTATION),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.BAR_ORIENTATION,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.STACKED),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.STACKED,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.BORDER_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.BORDER_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.BORDER_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.BORDER_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.BORDER_DASH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.BORDER_DASH,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.BACKGROUND_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.FILL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.FILL,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.SHOW_POINTS),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.SHOW_POINTS,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.POINT_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.POINT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.POINT_SIZE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.POINT_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.SHOW_HORIZONTAL_GRID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.SHOW_HORIZONTAL_GRID,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.HORIZONTAL_GRID_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.HORIZONTAL_GRID_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.HORIZONTAL_GRID_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.HORIZONTAL_GRID_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.SHOW_VERTICAL_GRID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.SHOW_VERTICAL_GRID,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.VERTICAL_GRID_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.VERTICAL_GRID_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.VERTICAL_GRID_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.VERTICAL_GRID_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.X_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.X_AXIS_TITLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.Y_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.Y_AXIS_TITLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(y.ANNOTATIONS_EDIT_MODE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.ANNOTATIONS_EDIT_MODE,
      merge: () => !1
    });
  }
  get horizontalLines() {
    return this._horizontalLines || (this._horizontalLines = di(this, this.eClass().getEStructuralFeature("horizontalLines"))), this._horizontalLines;
  }
  get verticalLines() {
    return this._verticalLines || (this._verticalLines = di(this, this.eClass().getEStructuralFeature("verticalLines"))), this._verticalLines;
  }
  get horizontalBoxes() {
    return this._horizontalBoxes || (this._horizontalBoxes = di(this, this.eClass().getEStructuralFeature("horizontalBoxes"))), this._horizontalBoxes;
  }
  get verticalBoxes() {
    return this._verticalBoxes || (this._verticalBoxes = di(this, this.eClass().getEStructuralFeature("verticalBoxes"))), this._verticalBoxes;
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
      getFeature: () => this.eClass().getEStructuralFeature(y.DATE_DISPLAY_FORMAT),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => y.DATE_DISPLAY_FORMAT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case y.SERIES_SETTINGS:
        return this.seriesSettings;
      case y.CHART_TYPE:
        return this.chartType;
      case y.BAR_ORIENTATION:
        return this.barOrientation;
      case y.STACKED:
        return this.stacked;
      case y.BORDER_COLOR:
        return this.borderColor;
      case y.BORDER_WIDTH:
        return this.borderWidth;
      case y.BORDER_DASH:
        return this.borderDash;
      case y.BACKGROUND_COLOR:
        return this.backgroundColor;
      case y.FILL:
        return this.fill;
      case y.SHOW_POINTS:
        return this.showPoints;
      case y.POINT_COLOR:
        return this.pointColor;
      case y.POINT_SIZE:
        return this.pointSize;
      case y.SHOW_HORIZONTAL_GRID:
        return this.showHorizontalGrid;
      case y.HORIZONTAL_GRID_COLOR:
        return this.horizontalGridColor;
      case y.HORIZONTAL_GRID_WIDTH:
        return this.horizontalGridWidth;
      case y.SHOW_VERTICAL_GRID:
        return this.showVerticalGrid;
      case y.VERTICAL_GRID_COLOR:
        return this.verticalGridColor;
      case y.VERTICAL_GRID_WIDTH:
        return this.verticalGridWidth;
      case y.X_AXIS_TITLE:
        return this.xAxisTitle;
      case y.Y_AXIS_TITLE:
        return this.yAxisTitle;
      case y.ANNOTATIONS_EDIT_MODE:
        return this.annotationsEditMode;
      case y.HORIZONTAL_LINES:
        return this.horizontalLines;
      case y.VERTICAL_LINES:
        return this.verticalLines;
      case y.HORIZONTAL_BOXES:
        return this.horizontalBoxes;
      case y.VERTICAL_BOXES:
        return this.verticalBoxes;
      case y.DATE_DISPLAY_FORMAT:
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
      case y.SERIES_SETTINGS:
        this.seriesSettings.clear(), this.seriesSettings.addAll(e), super.eSet(t, e);
        break;
      case y.CHART_TYPE:
        this.chartType = e, super.eSet(t, e);
        break;
      case y.BAR_ORIENTATION:
        this.barOrientation = e, super.eSet(t, e);
        break;
      case y.STACKED:
        this.stacked = e, super.eSet(t, e);
        break;
      case y.BORDER_COLOR:
        this.borderColor = e, super.eSet(t, e);
        break;
      case y.BORDER_WIDTH:
        this.borderWidth = e, super.eSet(t, e);
        break;
      case y.BORDER_DASH:
        this.borderDash = e, super.eSet(t, e);
        break;
      case y.BACKGROUND_COLOR:
        this.backgroundColor = e, super.eSet(t, e);
        break;
      case y.FILL:
        this.fill = e, super.eSet(t, e);
        break;
      case y.SHOW_POINTS:
        this.showPoints = e, super.eSet(t, e);
        break;
      case y.POINT_COLOR:
        this.pointColor = e, super.eSet(t, e);
        break;
      case y.POINT_SIZE:
        this.pointSize = e, super.eSet(t, e);
        break;
      case y.SHOW_HORIZONTAL_GRID:
        this.showHorizontalGrid = e, super.eSet(t, e);
        break;
      case y.HORIZONTAL_GRID_COLOR:
        this.horizontalGridColor = e, super.eSet(t, e);
        break;
      case y.HORIZONTAL_GRID_WIDTH:
        this.horizontalGridWidth = e, super.eSet(t, e);
        break;
      case y.SHOW_VERTICAL_GRID:
        this.showVerticalGrid = e, super.eSet(t, e);
        break;
      case y.VERTICAL_GRID_COLOR:
        this.verticalGridColor = e, super.eSet(t, e);
        break;
      case y.VERTICAL_GRID_WIDTH:
        this.verticalGridWidth = e, super.eSet(t, e);
        break;
      case y.X_AXIS_TITLE:
        this.xAxisTitle = e, super.eSet(t, e);
        break;
      case y.Y_AXIS_TITLE:
        this.yAxisTitle = e, super.eSet(t, e);
        break;
      case y.ANNOTATIONS_EDIT_MODE:
        this.annotationsEditMode = e, super.eSet(t, e);
        break;
      case y.HORIZONTAL_LINES:
        this.horizontalLines.clear(), this.horizontalLines.addAll(e), super.eSet(t, e);
        break;
      case y.VERTICAL_LINES:
        this.verticalLines.clear(), this.verticalLines.addAll(e), super.eSet(t, e);
        break;
      case y.HORIZONTAL_BOXES:
        this.horizontalBoxes.clear(), this.horizontalBoxes.addAll(e), super.eSet(t, e);
        break;
      case y.VERTICAL_BOXES:
        this.verticalBoxes.clear(), this.verticalBoxes.addAll(e), super.eSet(t, e);
        break;
      case y.DATE_DISPLAY_FORMAT:
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
      case y.SERIES_SETTINGS:
        return this._seriesSettings !== void 0 && !this._seriesSettings.isEmpty();
      case y.CHART_TYPE:
        return this._chartType !== new R();
      case y.BAR_ORIENTATION:
        return this._barOrientation !== new R();
      case y.STACKED:
        return this._stacked !== new R();
      case y.BORDER_COLOR:
        return this._borderColor !== new R();
      case y.BORDER_WIDTH:
        return this._borderWidth !== new R();
      case y.BORDER_DASH:
        return this._borderDash !== new R();
      case y.BACKGROUND_COLOR:
        return this._backgroundColor !== new R();
      case y.FILL:
        return this._fill !== new R();
      case y.SHOW_POINTS:
        return this._showPoints !== new R();
      case y.POINT_COLOR:
        return this._pointColor !== new R();
      case y.POINT_SIZE:
        return this._pointSize !== new R();
      case y.SHOW_HORIZONTAL_GRID:
        return this._showHorizontalGrid !== new R();
      case y.HORIZONTAL_GRID_COLOR:
        return this._horizontalGridColor !== new R();
      case y.HORIZONTAL_GRID_WIDTH:
        return this._horizontalGridWidth !== new R();
      case y.SHOW_VERTICAL_GRID:
        return this._showVerticalGrid !== new R();
      case y.VERTICAL_GRID_COLOR:
        return this._verticalGridColor !== new R();
      case y.VERTICAL_GRID_WIDTH:
        return this._verticalGridWidth !== new R();
      case y.X_AXIS_TITLE:
        return this._xAxisTitle !== new R();
      case y.Y_AXIS_TITLE:
        return this._yAxisTitle !== new R();
      case y.ANNOTATIONS_EDIT_MODE:
        return this._annotationsEditMode !== new R();
      case y.HORIZONTAL_LINES:
        return this._horizontalLines !== void 0 && !this._horizontalLines.isEmpty();
      case y.VERTICAL_LINES:
        return this._verticalLines !== void 0 && !this._verticalLines.isEmpty();
      case y.HORIZONTAL_BOXES:
        return this._horizontalBoxes !== void 0 && !this._horizontalBoxes.isEmpty();
      case y.VERTICAL_BOXES:
        return this._verticalBoxes !== void 0 && !this._verticalBoxes.isEmpty();
      case y.DATE_DISPLAY_FORMAT:
        return this._dateDisplayFormat !== new R();
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case y.SERIES_SETTINGS:
        this._seriesSettings && this._seriesSettings.clear();
        return;
      case y.CHART_TYPE:
        this._chartType = new R();
        return;
      case y.BAR_ORIENTATION:
        this._barOrientation = new R();
        return;
      case y.STACKED:
        this._stacked = new R();
        return;
      case y.BORDER_COLOR:
        this._borderColor = new R();
        return;
      case y.BORDER_WIDTH:
        this._borderWidth = new R();
        return;
      case y.BORDER_DASH:
        this._borderDash = new R();
        return;
      case y.BACKGROUND_COLOR:
        this._backgroundColor = new R();
        return;
      case y.FILL:
        this._fill = new R();
        return;
      case y.SHOW_POINTS:
        this._showPoints = new R();
        return;
      case y.POINT_COLOR:
        this._pointColor = new R();
        return;
      case y.POINT_SIZE:
        this._pointSize = new R();
        return;
      case y.SHOW_HORIZONTAL_GRID:
        this._showHorizontalGrid = new R();
        return;
      case y.HORIZONTAL_GRID_COLOR:
        this._horizontalGridColor = new R();
        return;
      case y.HORIZONTAL_GRID_WIDTH:
        this._horizontalGridWidth = new R();
        return;
      case y.SHOW_VERTICAL_GRID:
        this._showVerticalGrid = new R();
        return;
      case y.VERTICAL_GRID_COLOR:
        this._verticalGridColor = new R();
        return;
      case y.VERTICAL_GRID_WIDTH:
        this._verticalGridWidth = new R();
        return;
      case y.X_AXIS_TITLE:
        this._xAxisTitle = new R();
        return;
      case y.Y_AXIS_TITLE:
        this._yAxisTitle = new R();
        return;
      case y.ANNOTATIONS_EDIT_MODE:
        this._annotationsEditMode = new R();
        return;
      case y.HORIZONTAL_LINES:
        this._horizontalLines && this._horizontalLines.clear();
        return;
      case y.VERTICAL_LINES:
        this._verticalLines && this._verticalLines.clear();
        return;
      case y.HORIZONTAL_BOXES:
        this._horizontalBoxes && this._horizontalBoxes.clear();
        return;
      case y.VERTICAL_BOXES:
        this._verticalBoxes && this._verticalBoxes.clear();
        return;
      case y.DATE_DISPLAY_FORMAT:
        this._dateDisplayFormat = new R();
        return;
      default:
        super.eUnset(t);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      seriesSettings: this.seriesSettings?.toArray?.() ?? this.seriesSettings,
      chartType: this.chartType,
      barOrientation: this.barOrientation,
      stacked: this.stacked,
      borderColor: this.borderColor,
      borderWidth: this.borderWidth,
      borderDash: this.borderDash,
      backgroundColor: this.backgroundColor,
      fill: this.fill,
      showPoints: this.showPoints,
      pointColor: this.pointColor,
      pointSize: this.pointSize,
      showHorizontalGrid: this.showHorizontalGrid,
      horizontalGridColor: this.horizontalGridColor,
      horizontalGridWidth: this.horizontalGridWidth,
      showVerticalGrid: this.showVerticalGrid,
      verticalGridColor: this.verticalGridColor,
      verticalGridWidth: this.verticalGridWidth,
      xAxisTitle: this.xAxisTitle,
      yAxisTitle: this.yAxisTitle,
      annotationsEditMode: this.annotationsEditMode,
      horizontalLines: this.horizontalLines?.toArray?.() ?? this.horizontalLines,
      verticalLines: this.verticalLines?.toArray?.() ?? this.verticalLines,
      horizontalBoxes: this.horizontalBoxes?.toArray?.() ?? this.horizontalBoxes,
      verticalBoxes: this.verticalBoxes?.toArray?.() ?? this.verticalBoxes,
      dateDisplayFormat: this.dateDisplayFormat
    };
  }
}
var Bg = Object.defineProperty, Wg = Object.getOwnPropertyDescriptor, ni = (i, t, e, s) => {
  for (var n = Wg(t, e), o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(t, e, n) || n);
  return n && Bg(t, e, n), n;
};
class fe extends Oa {
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
ni([
  qe({ eventType: "chart.refresh" })
], fe.prototype, "refresh");
ni([
  qe({ eventType: "chart.zoomIn" })
], fe.prototype, "zoomIn");
ni([
  qe({ eventType: "chart.zoomOut" })
], fe.prototype, "zoomOut");
ni([
  qe({ eventType: "chart.resetZoom" })
], fe.prototype, "resetZoom");
ni([
  qe({ eventType: "chart.exportAsImage" })
], fe.prototype, "exportAsImage");
const Hg = /* @__PURE__ */ Wi({
  __name: "ChartWidget",
  props: /* @__PURE__ */ Na({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(i, { expose: t }) {
    const { wrapParameters: e } = Ha();
    re.register(xu, Ru, _u, Yd, Lu, ku, ji, Hd, $u, Dd, uu, Pg);
    const s = i, { datasourceId: n, id: o } = Fa(s), r = nr(i, "configv"), a = new y(), l = Be(null), c = fn(Ya.TINY_EMITTER), h = fn(Ra), u = Va().params.pageid || "", f = Be({ min: null, max: null }), g = Be(null);
    class p extends fe {
      refresh() {
        T(n.value, n.value);
      }
      zoomIn() {
        const M = f.value.min ?? 0, V = f.value.max ?? 100, L = V - M, B = (V + M) / 2;
        f.value = { min: B - L * 0.4, max: B + L * 0.4 }, x.value++;
      }
      zoomOut() {
        const M = f.value.min ?? 0, V = f.value.max ?? 100, L = V - M, B = (V + M) / 2;
        f.value = { min: B - L * 0.75, max: B + L * 0.75 }, x.value++;
      }
      resetZoom() {
        f.value = { min: null, max: null }, x.value++;
      }
      exportAsImage(M) {
        if (g.value && g.value.chart) {
          const V = g.value.chart, L = M || "image/png", B = V.toBase64Image(L), k = document.createElement("a");
          k.href = B, k.download = `chart.${L.split("/")[1] || "png"}`, k.click();
        }
      }
    }
    const b = new p();
    t(b), ir(() => {
      o?.value && h.unregisterInstance(o.value);
    });
    const m = () => {
      o?.value && c.emit("widget:ChartWidget:click", {
        type: "widget:ChartWidget:click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, _ = () => {
      o?.value && c.emit("widget:ChartWidget:right_click", {
        type: "widget:ChartWidget:right_click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    };
    Ns(() => {
      if (o?.value && h.registerInstance(o.value, b, "ChartWidget", u), r.value)
        for (const E of Object.keys(a))
          (!(E in r.value) || r.value[E] === void 0) && (r.value[E] = a[E]);
    }), _s(n, (E, M) => {
      T(E, M);
    });
    const { update: T } = za(n, "ChartData", l), w = Q(() => {
      if (A().some(
        (L) => L.chartType?.value && L.chartType.value !== r.value?.chartType?.value
      ))
        return ps;
      const M = r.value?.chartType?.value ?? "bar";
      return {
        bar: ps,
        line: af,
        radar: hf,
        pie: lf,
        doughnut: rf,
        polarArea: cf
      }[M] || ps;
    }), x = Be(0);
    _s(() => r.value, (E) => {
      x.value++;
    }, { deep: !0 });
    function D(...E) {
      return E.find((M) => M != null && M !== "");
    }
    function S(E, M) {
      const V = E;
      return typeof V?.get == "function" ? V.get(M) : V?.[M];
    }
    function A() {
      const E = r.value?.seriesSettings;
      return E ? typeof E.toArray == "function" ? E.toArray() : Array.isArray(E) ? E : [] : [];
    }
    const v = e({
      chartType: Q(() => r.value?.chartType?.value ?? "bar"),
      borderColor: Q(() => r.value?.borderColor?.value ?? "rgba(75, 192, 192, 1)"),
      backgroundColor: Q(() => r.value?.backgroundColor?.value ?? "rgba(75, 192, 192, 0.2)"),
      borderWidth: Q(() => r.value?.borderWidth?.value ?? 2),
      borderDash: Q(() => r.value?.borderDash?.value ?? []),
      fill: Q(() => r.value?.fill?.value ?? !1),
      showPoints: Q(() => r.value?.showPoints?.value ?? !0),
      pointColor: Q(() => r.value?.pointColor?.value ?? "rgba(75, 192, 192, 1)"),
      pointSize: Q(() => r.value?.pointSize?.value ?? 3),
      barOrientation: Q(() => r.value?.barOrientation?.value ?? "vertical"),
      stacked: Q(() => r.value?.stacked?.value ?? !1),
      showHorizontalGrid: Q(() => r.value?.showHorizontalGrid?.value ?? !0),
      horizontalGridColor: Q(() => r.value?.horizontalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      horizontalGridWidth: Q(() => r.value?.horizontalGridWidth?.value ?? 1),
      showVerticalGrid: Q(() => r.value?.showVerticalGrid?.value ?? !0),
      verticalGridColor: Q(() => r.value?.verticalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      verticalGridWidth: Q(() => r.value?.verticalGridWidth?.value ?? 1),
      dateDisplayFormat: Q(() => r.value?.dateDisplayFormat?.value ?? "dd.MM.yyyy HH:mm"),
      annotationsEditMode: Q(() => r.value?.annotationsEditMode?.value ?? !1)
    });
    console.log(v.backgroundColor.value);
    const N = Q(() => {
      if (!l.value) return null;
      const E = JSON.parse(JSON.stringify(l.value)), M = A(), V = M.length > 0;
      return E.datasets && Array.isArray(E.datasets) && (E.datasets = E.datasets.map((L, B) => {
        const k = M.find((at) => {
          const Mt = at.seriesIndex?.value;
          return Mt != null && Mt !== "" && Number(Mt) === B;
        }), K = k?.chartType?.value ?? v.chartType?.value ?? "bar", Z = k?.xAxisId?.value, dt = k?.yAxisId?.value, ft = D(
          k?.borderColor?.value,
          r.value?.borderColor?.value,
          L.borderColor
        ), ut = D(
          k?.backgroundColor?.value,
          r.value?.backgroundColor?.value,
          L.backgroundColor
        ), gt = D(
          k?.borderWidth?.value,
          r.value?.borderWidth?.value,
          L.borderWidth
        ), rt = D(
          k?.borderDash?.value,
          r.value?.borderDash?.value,
          L.borderDash
        );
        let et = {
          ...L,
          borderColor: ft,
          backgroundColor: ut,
          borderWidth: gt
        };
        if (V && (et.type = K, Z && (et.xAxisID = Z), dt && (et.yAxisID = dt), k?.label?.value && (et.label = (k?.label).value)), K === "line") {
          const at = k?.showPoints?.value ?? r.value?.showPoints?.value ?? !0, Mt = k?.fill?.value ?? r.value?.fill?.value ?? !1, I = D(
            k?.pointColor?.value,
            r.value?.pointColor?.value,
            L.pointBackgroundColor
          ), J = k?.pointSize?.value ?? r.value?.pointSize?.value ?? 3;
          et = {
            ...et,
            borderDash: rt,
            fill: Mt ? "origin" : !1,
            // Point settings
            pointRadius: at ? J : 0,
            pointBackgroundColor: I,
            pointBorderColor: I,
            pointHoverRadius: at ? J + 2 : 0
          };
        } else K === "bar" ? et = {
          ...et,
          borderDash: rt
        } : et = {
          ...et
        };
        return et;
      })), E;
    }), P = Q(() => {
      if (!r.value)
        return {
          responsive: !0
        };
      const E = v.annotationsEditMode.value, M = {};
      r.value.horizontalLines?.forEach((I, J) => {
        M[`hline_${J}`] = {
          type: "line",
          yMin: I.value,
          yMax: I.value,
          borderColor: I.color,
          borderWidth: I.width,
          label: I.label ? {
            display: !0,
            content: I.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: E,
          borderDash: E ? [5, 5] : void 0,
          enter({ element: W }) {
            E && (W.options.borderWidth = I.width + 1);
          },
          leave({ element: W }) {
            E && (W.options.borderWidth = I.width);
          },
          drag({ element: W }) {
            E && r.value.horizontalLines && (S(r.value.horizontalLines, J).value = W.y);
          }
        };
      }), r.value.verticalLines?.forEach((I, J) => {
        M[`vline_${J}`] = {
          type: "line",
          xMin: I.value,
          xMax: I.value,
          borderColor: I.color,
          borderWidth: I.width,
          label: I.label ? {
            display: !0,
            content: I.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: E,
          borderDash: E ? [5, 5] : void 0,
          enter({ element: W }) {
            E && (W.options.borderWidth = I.width + 1);
          },
          leave({ element: W }) {
            E && (W.options.borderWidth = I.width);
          },
          drag({ element: W }) {
            E && r.value.verticalLines && (S(r.value.verticalLines, J).value = W.x);
          }
        };
      }), r.value.horizontalBoxes?.forEach((I, J) => {
        M[`hbox_${J}`] = {
          type: "box",
          yMin: I.yMin,
          yMax: I.yMax,
          backgroundColor: I.color,
          borderWidth: E ? 2 : 0,
          borderColor: E ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: E ? [5, 5] : void 0,
          label: I.label ? {
            display: !0,
            content: I.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: E,
          enter({ element: W }) {
            E && (W.options.borderWidth = 3);
          },
          leave({ element: W }) {
            E && (W.options.borderWidth = 2);
          },
          drag({ element: W }) {
            if (E && r.value.horizontalBoxes) {
              const yt = I.yMax - I.yMin;
              S(r.value.horizontalBoxes, J).yMin = W.y - yt / 2, S(r.value.horizontalBoxes, J).yMax = W.y + yt / 2;
            }
          }
        };
      }), r.value.verticalBoxes?.forEach((I, J) => {
        M[`vbox_${J}`] = {
          type: "box",
          xMin: I.xMin,
          xMax: I.xMax,
          backgroundColor: I.color,
          borderWidth: E ? 2 : 0,
          borderColor: E ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: E ? [5, 5] : void 0,
          label: I.label ? {
            display: !0,
            content: I.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: E,
          enter({ element: W }) {
            E && (W.options.borderWidth = 3);
          },
          leave({ element: W }) {
            E && (W.options.borderWidth = 2);
          },
          drag({ element: W }) {
            if (E && r.value.verticalBoxes) {
              const yt = I.xMax - I.xMin;
              S(r.value.verticalBoxes, J).xMin = W.x - yt / 2, S(r.value.verticalBoxes, J).xMax = W.x + yt / 2;
            }
          }
        };
      });
      const V = (I) => {
        if (typeof I != "string") return !1;
        const J = /^\d{4}-\d{2}-\d{2}(T|\s)/, W = /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}/;
        return J.test(I) || W.test(I);
      }, L = (I, J) => {
        if (!I || !V(I)) return I;
        const W = new Date(I);
        if (isNaN(W.getTime())) return I;
        const yt = (ge) => ge.toString().padStart(2, "0"), oi = {
          yyyy: W.getFullYear().toString(),
          yy: W.getFullYear().toString().slice(-2),
          MM: yt(W.getMonth() + 1),
          M: (W.getMonth() + 1).toString(),
          dd: yt(W.getDate()),
          d: W.getDate().toString(),
          HH: yt(W.getHours()),
          H: W.getHours().toString(),
          mm: yt(W.getMinutes()),
          m: W.getMinutes().toString(),
          ss: yt(W.getSeconds()),
          s: W.getSeconds().toString()
        };
        let ts = J;
        return Object.keys(oi).sort((ge, Aa) => Aa.length - ge.length).forEach((ge) => {
          ts = ts.replace(new RegExp(ge, "g"), oi[ge]);
        }), ts;
      }, B = v.dateDisplayFormat.value, k = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), Z = r.value?.seriesSettings && r.value.seriesSettings.length > 0, dt = {};
      Z && (k.add("x"), K.add("y"), r.value.seriesSettings?.forEach((I) => {
        I?.xAxisId?.value && k.add(I.xAxisId.value), I.yAxisId?.value && (K.add(I.yAxisId.value), I.yAxisTitle?.value && (dt[I.yAxisId.value] = I.yAxisTitle.value));
      }));
      const ft = v.stacked.value === !0 || v.stacked.value === "true", ut = r.value.xAxisTitle?.value ?? "", gt = r.value.yAxisTitle?.value ?? "", rt = {
        y: {
          stacked: ft,
          title: {
            display: !!gt,
            text: gt
          },
          grid: {
            display: v.showHorizontalGrid.value,
            color: v.horizontalGridColor.value,
            lineWidth: v.horizontalGridWidth.value
          }
        },
        x: {
          stacked: ft,
          title: {
            display: !!ut,
            text: ut
          },
          grid: {
            display: v.showVerticalGrid.value,
            color: v.verticalGridColor.value,
            lineWidth: v.verticalGridWidth.value
          },
          ticks: {
            callback: function(I, J, W) {
              const yt = this.getLabelForValue(I);
              return L(yt, B);
            }
          }
        }
      };
      k.size > 1 && k.forEach((I) => {
        I !== "x" && (rt[I] = {
          type: "category",
          // Explicitly set the axis type
          grid: {
            display: v.showVerticalGrid.value,
            color: v.verticalGridColor.value,
            lineWidth: v.verticalGridWidth.value
          },
          ticks: {
            callback: function(J, W, yt) {
              const oi = this.getLabelForValue(J);
              return L(oi, B);
            }
          },
          // Position secondary axes at the top
          position: "top"
        });
      }), K.size > 1 && K.forEach((I) => {
        if (I !== "y") {
          const J = dt[I] ?? "";
          rt[I] = {
            type: "linear",
            // Explicitly set the axis type
            title: {
              display: !!J,
              text: J
            },
            grid: {
              display: v.showHorizontalGrid.value,
              color: v.horizontalGridColor.value,
              lineWidth: v.horizontalGridWidth.value
            },
            // Position secondary Y-axes on the right
            position: "right"
          };
        }
      });
      const Mt = {
        responsive: !0,
        maintainAspectRatio: !0,
        indexAxis: v.barOrientation.value === "horizontal" ? "y" : "x",
        scales: rt,
        plugins: {
          legend: {
            labels: {
              usePointStyle: !0,
              pointStyle: "circle"
            }
          },
          annotation: {
            annotations: M
          }
        }
      };
      return console.log("Chart options:", Mt), Mt;
    });
    return (E, M) => (Et(), Ct("div", {
      class: "w-full h-full",
      onClick: m,
      onContextmenu: Ba(_, ["prevent"])
    }, [
      N.value && P.value ? (Et(), or(Wa(w.value), {
        key: x.value,
        id: "my-chart-id",
        ref_key: "chartRef",
        ref: g,
        options: P.value,
        data: N.value
      }, null, 8, ["options", "data"])) : rr("", !0)
    ], 32));
  }
}), zg = {
  class: "settings-section",
  "data-section": "Reference Lines & Areas"
}, Vg = { class: "settings-container" }, Gg = { class: "settings-block" }, jg = { class: "settings-block" }, Xg = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, Yg = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, Ug = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, $g = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, Zg = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, Kg = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, qg = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, Jg = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, Qg = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, tp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, ep = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, ip = /* @__PURE__ */ Wi({
  __name: "ChartWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const t = nr(i, "modelValue");
    function e(m, _) {
      typeof m?.add == "function" ? m.add(_) : Array.isArray(m) && m.push(_);
    }
    function s(m) {
      return typeof m?.toArray == "function" ? m.toArray() : Array.isArray(m) ? m : [];
    }
    const n = Q(() => s(t.value?.horizontalLines)), o = Q(() => s(t.value?.verticalLines)), r = Q(() => s(t.value?.horizontalBoxes)), a = Q(() => s(t.value?.verticalBoxes));
    function l(m, _) {
      typeof m?.removeAt == "function" ? m.removeAt(_) : Array.isArray(m) && m.splice(_, 1);
    }
    const c = () => {
      t.value.horizontalLines || (t.value.horizontalLines = []), e(t.value.horizontalLines, {
        value: 0,
        color: "rgba(255, 0, 0, 0.8)",
        width: 2,
        label: "Line"
      });
    }, h = (m) => {
      l(t.value.horizontalLines, m);
    }, d = () => {
      t.value.verticalLines || (t.value.verticalLines = []), e(t.value.verticalLines, {
        value: 0,
        color: "rgba(0, 0, 255, 0.8)",
        width: 2,
        label: "Line"
      });
    }, u = (m) => {
      l(t.value.verticalLines, m);
    }, f = () => {
      t.value.horizontalBoxes || (t.value.horizontalBoxes = []), e(t.value.horizontalBoxes, {
        yMin: 0,
        yMax: 10,
        color: "rgba(255, 0, 0, 0.1)",
        label: "Range"
      });
    }, g = (m) => {
      l(t.value.horizontalBoxes, m);
    }, p = () => {
      t.value.verticalBoxes || (t.value.verticalBoxes = []), e(t.value.verticalBoxes, {
        xMin: 0,
        xMax: 10,
        color: "rgba(0, 0, 255, 0.1)",
        label: "Range"
      });
    }, b = (m) => {
      l(t.value.verticalBoxes, m);
    };
    return Ns(() => {
      t.value.seriesSettings || (t.value.seriesSettings = []), t.value.seriesSettings.forEach((m) => {
        m.label || (m.label = new R("")), m.borderColor || (m.borderColor = new R("")), m.backgroundColor || (m.backgroundColor = new R("")), m.borderWidth || (m.borderWidth = new R(2)), m.borderDash || (m.borderDash = new R([])), m.fill || (m.fill = new R(!1)), m.showPoints || (m.showPoints = new R(!0)), m.pointColor || (m.pointColor = new R("")), m.pointSize || (m.pointSize = new R(3));
      });
    }), (m, _) => {
      const T = ri("va-checkbox"), w = ri("va-button"), x = ri("va-input"), D = ri("va-color-input");
      return Et(), Ct("section", zg, [
        nt("div", Vg, [
          nt("div", Gg, [
            t.value.annotationsEditMode ? (Et(), or(T, {
              key: 0,
              label: "Enable Drag & Drop (Move annotations in chart)",
              modelValue: t.value.annotationsEditMode,
              "onUpdate:modelValue": _[0] || (_[0] = (S) => t.value.annotationsEditMode = S)
            }, null, 8, ["modelValue"])) : rr("", !0)
          ]),
          nt("div", jg, [
            nt("div", Xg, [
              _[2] || (_[2] = nt("h3", null, "Horizontal Lines (Y-Axis)", -1)),
              it(w, {
                size: "small",
                onClick: c
              }, {
                default: zt(() => [..._[1] || (_[1] = [
                  Vt("Add Line", -1)
                ])]),
                _: 1
              })
            ]),
            (Et(!0), Ct(ai, null, li(n.value, (S, A) => (Et(), Ct("div", {
              key: `hline_${A}`,
              style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
            }, [
              nt("div", Yg, [
                nt("strong", null, "Line " + ci(A + 1), 1),
                it(w, {
                  size: "small",
                  color: "danger",
                  onClick: (v) => h(A)
                }, {
                  default: zt(() => [..._[3] || (_[3] = [
                    Vt("Remove", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              it(x, {
                label: "Y-Value",
                modelValue: S.value,
                "onUpdate:modelValue": (v) => S.value = v,
                modelModifiers: { number: !0 },
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(D, {
                label: "Color",
                modelValue: S.color,
                "onUpdate:modelValue": (v) => S.color = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(x, {
                label: "Line Width (px)",
                modelValue: S.width,
                "onUpdate:modelValue": (v) => S.width = v,
                modelModifiers: { number: !0 },
                type: "number",
                min: 1,
                max: 10
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(x, {
                label: "Label (optional)",
                modelValue: S.label,
                "onUpdate:modelValue": (v) => S.label = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]))), 128))
          ]),
          nt("div", Ug, [
            nt("div", $g, [
              _[5] || (_[5] = nt("h3", null, "Vertical Lines (X-Axis)", -1)),
              it(w, {
                size: "small",
                onClick: d
              }, {
                default: zt(() => [..._[4] || (_[4] = [
                  Vt("Add Line", -1)
                ])]),
                _: 1
              })
            ]),
            (Et(!0), Ct(ai, null, li(o.value, (S, A) => (Et(), Ct("div", {
              key: `vline_${A}`,
              style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
            }, [
              nt("div", Zg, [
                nt("strong", null, "Line " + ci(A + 1), 1),
                it(w, {
                  size: "small",
                  color: "danger",
                  onClick: (v) => u(A)
                }, {
                  default: zt(() => [..._[6] || (_[6] = [
                    Vt("Remove", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              it(x, {
                label: "X-Value",
                modelValue: S.value,
                "onUpdate:modelValue": (v) => S.value = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(D, {
                label: "Color",
                modelValue: S.color,
                "onUpdate:modelValue": (v) => S.color = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(x, {
                label: "Line Width (px)",
                modelValue: S.width,
                "onUpdate:modelValue": (v) => S.width = v,
                modelModifiers: { number: !0 },
                type: "number",
                min: 1,
                max: 10
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(x, {
                label: "Label (optional)",
                modelValue: S.label,
                "onUpdate:modelValue": (v) => S.label = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]))), 128))
          ]),
          nt("div", Kg, [
            nt("div", qg, [
              _[8] || (_[8] = nt("h3", null, "Horizontal Areas (Y-Axis Ranges)", -1)),
              it(w, {
                size: "small",
                onClick: f
              }, {
                default: zt(() => [..._[7] || (_[7] = [
                  Vt("Add Area", -1)
                ])]),
                _: 1
              })
            ]),
            (Et(!0), Ct(ai, null, li(r.value, (S, A) => (Et(), Ct("div", {
              key: `hbox_${A}`,
              style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
            }, [
              nt("div", Jg, [
                nt("strong", null, "Area " + ci(A + 1), 1),
                it(w, {
                  size: "small",
                  color: "danger",
                  onClick: (v) => g(A)
                }, {
                  default: zt(() => [..._[9] || (_[9] = [
                    Vt("Remove", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              it(x, {
                label: "Y-Min",
                modelValue: S.yMin,
                "onUpdate:modelValue": (v) => S.yMin = v,
                modelModifiers: { number: !0 },
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(x, {
                label: "Y-Max",
                modelValue: S.yMax,
                "onUpdate:modelValue": (v) => S.yMax = v,
                modelModifiers: { number: !0 },
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(D, {
                label: "Fill Color",
                modelValue: S.color,
                "onUpdate:modelValue": (v) => S.color = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(x, {
                label: "Label (optional)",
                modelValue: S.label,
                "onUpdate:modelValue": (v) => S.label = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]))), 128))
          ]),
          nt("div", Qg, [
            nt("div", tp, [
              _[11] || (_[11] = nt("h3", null, "Vertical Areas (X-Axis Ranges)", -1)),
              it(w, {
                size: "small",
                onClick: p
              }, {
                default: zt(() => [..._[10] || (_[10] = [
                  Vt("Add Area", -1)
                ])]),
                _: 1
              })
            ]),
            (Et(!0), Ct(ai, null, li(a.value, (S, A) => (Et(), Ct("div", {
              key: `vbox_${A}`,
              style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
            }, [
              nt("div", ep, [
                nt("strong", null, "Area " + ci(A + 1), 1),
                it(w, {
                  size: "small",
                  color: "danger",
                  onClick: (v) => b(A)
                }, {
                  default: zt(() => [..._[12] || (_[12] = [
                    Vt("Remove", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              it(x, {
                label: "X-Min",
                modelValue: S.xMin,
                "onUpdate:modelValue": (v) => S.xMin = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(x, {
                label: "X-Max",
                modelValue: S.xMax,
                "onUpdate:modelValue": (v) => S.xMax = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(D, {
                label: "Fill Color",
                modelValue: S.color,
                "onUpdate:modelValue": (v) => S.color = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              it(x, {
                label: "Label (optional)",
                modelValue: S.label,
                "onUpdate:modelValue": (v) => S.label = v
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]))), 128))
          ])
        ])
      ]);
    };
  }
}), sp = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, np = /* @__PURE__ */ sp(ip, [["__scopeId", "data-v-0f6824eb"]]), op = `<?xml version="1.0" encoding="UTF-8"?>
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

The series are a list, rendered by the host's list renderer: each entry is
a form built from SeriesSettings. The reference lines and areas are four
lists the Ecore does not type at all - there is no class to build a form
from, so they still come from the hand-written component beside this.
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
      <fields xsi:type="uimodel:SelectWidget"
          name="chartType"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/chartType"
          label="Typ">
        <values>line</values>
        <values>bar</values>
        <values>pie</values>
        <values>doughnut</values>
        <values>radar</values>
        <values>polarArea</values>
        <values>scatter</values>
        <values>bubble</values>
      </fields>
      <!-- Only bars have an orientation -->
      <fields xsi:type="uimodel:SelectWidget"
          name="barOrientation"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/barOrientation"
          label="Balkenausrichtung">
        <values>vertical</values>
        <values>horizontal</values>
        <visibilityCondition language="JS" body="self.chartType?.value === 'bar'"/>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="stacked"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/stacked"
          label="Gestapelt"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="seriesGroup" layout="VERTICAL" label="Datenreihen">
      <!-- A list: each entry is a form of its own, built from SeriesSettings.
           What a series does not set falls back to the values below. -->
      <fields xsi:type="uimodel:InputWidget"
          name="seriesSettings"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/seriesSettings"
          label="Datenreihen"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="lineGroup" layout="VERTICAL" label="Linie">
      <fields xsi:type="uimodel:InputWidget"
          name="borderColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/borderColor"
          label="Linien- und Randfarbe"
          placeholder="sichtbar ab Stärke 1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="borderWidth"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/borderWidth"
          label="Linienstärke" min="0" max="20" step="1"/>
      <fields xsi:type="uimodel:SelectWidget"
          name="borderDash"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/borderDash"
          label="Strichmuster">
        <values>durchgezogen</values>
        <values>5,5</values>
        <values>10,5</values>
        <values>2,2</values>
        <values>15,5,5,5</values>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="fill"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/fill"
          label="Fläche unter der Linie füllen"/>
      <!-- Always shown: this is what a bar, a pie or a doughnut is painted
           with, so hiding it behind "fill" made the colour unreachable for
           every chart type that is not a line. -->
      <fields xsi:type="uimodel:InputWidget"
          name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/backgroundColor"
          label="Flächenfarbe"
          placeholder="Balken, Torte, gefüllte Fläche"/>
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
      <fields xsi:type="uimodel:NumberWidget"
          name="pointSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/pointSize"
          label="Punktgröße" min="0" max="20" step="1">
        <visibilityCondition language="JS" body="self.showPoints?.value === true || self.showPoints?.value === 'true'"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="gridGroup" layout="VERTICAL" label="Gitterlinien">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="showHorizontalGrid"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/showHorizontalGrid"
          label="Waagerechte Linien"/>
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
          label="Senkrechte Linien"/>
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
      <fields xsi:type="uimodel:SelectWidget"
          name="dateDisplayFormat"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/dateDisplayFormat"
          label="Datumsformat">
        <values>dd.MM.yyyy</values>
        <values>dd.MM.yyyy HH:mm</values>
        <values>dd.MM. HH:mm</values>
        <values>HH:mm</values>
        <values>yyyy-MM-dd</values>
        <values>yyyy-MM-dd HH:mm</values>
        <values>MMM yyyy</values>
      </fields>
    </fields>

  </components>
</uimodel:UIModel>
`, rp = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for one data series.

A series overrides the chart's own settings for itself, so the fields are
the same ones and take the same values - the type is a choice from the same
list, not free text, because a series with a mistyped type silently draws
nothing.

Left empty, a field falls back to the chart's setting. That is why nothing
here is required and why the labels say what they set rather than what they
are: "Typ" here means this series' type, the one above means every series
that does not state its own.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="SeriesSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings"/>

  <components xsi:type="uimodel:FormView" name="SeriesSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="seriesIdentity" layout="VERTICAL" label="Reihe">
      <fields xsi:type="uimodel:InputWidget"
          name="label"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/label"
          label="Beschriftung"
          placeholder="Wie im Diagramm benannt"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="seriesIndex"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/seriesIndex"
          label="Reihennummer" min="0" step="1"/>
      <fields xsi:type="uimodel:SelectWidget"
          name="chartType"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/chartType"
          label="Typ">
        <values>line</values>
        <values>bar</values>
        <values>pie</values>
        <values>doughnut</values>
        <values>radar</values>
        <values>polarArea</values>
        <values>scatter</values>
        <values>bubble</values>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="seriesAxes" layout="VERTICAL" label="Achsen">
      <fields xsi:type="uimodel:InputWidget"
          name="xAxisId"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/xAxisId"
          label="X-Achse"
          placeholder="x"/>
      <fields xsi:type="uimodel:InputWidget"
          name="yAxisId"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/yAxisId"
          label="Y-Achse"
          placeholder="y"/>
      <fields xsi:type="uimodel:InputWidget"
          name="yAxisTitle"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/yAxisTitle"
          label="Titel der Y-Achse"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="seriesLine" layout="VERTICAL" label="Linie">
      <fields xsi:type="uimodel:InputWidget"
          name="borderColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/borderColor"
          label="Linien- und Randfarbe"
          placeholder="sichtbar ab Stärke 1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="borderWidth"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/borderWidth"
          label="Stärke" min="0" max="20" step="1"/>
      <fields xsi:type="uimodel:SelectWidget"
          name="borderDash"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/borderDash"
          label="Strichmuster">
        <values>durchgezogen</values>
        <values>5,5</values>
        <values>10,5</values>
        <values>2,2</values>
        <values>15,5,5,5</values>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="fill"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/fill"
          label="Fläche unter der Linie füllen"/>
      <!-- Always shown: see the note in the chart's own form. -->
      <fields xsi:type="uimodel:InputWidget"
          name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/backgroundColor"
          label="Flächenfarbe"
          placeholder="Balken, Torte, gefüllte Fläche"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="seriesPoints" layout="VERTICAL" label="Punkte">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="showPoints"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/showPoints"
          label="Punkte zeigen"/>
      <fields xsi:type="uimodel:InputWidget"
          name="pointColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/pointColor"
          label="Farbe">
        <visibilityCondition language="JS" body="self.showPoints?.value === true || self.showPoints?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:NumberWidget"
          name="pointSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/pointSize"
          label="Größe" min="0" max="20" step="1">
        <visibilityCondition language="JS" body="self.showPoints?.value === true || self.showPoints?.value === 'true'"/>
      </fields>
    </fields>

  </components>
</uimodel:UIModel>
`, ap = [
  {
    name: "Chart Clicked",
    type: "click",
    description: "Triggered when the chart is clicked",
    payloadType: dn
  },
  {
    name: "Chart Right Clicked",
    type: "right_click",
    description: "Triggered when the chart is right-clicked",
    payloadType: dn
  }
];
var lp = Object.defineProperty, cp = Object.getOwnPropertyDescriptor, hn = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? cp(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && lp(t, e, n), n;
}, tr = (i, t) => (e, s) => t(e, s, i);
O.eINSTANCE;
const _e = "ChartWidget";
let Bi = class {
  constructor(i, t) {
    this.events = i, this.actions = t;
  }
  type = _e;
  component = Hg;
  settingsComponent = np;
  supportedDSTypes = [];
  icon = $a;
  name = "Chart";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: op,
    uri: "/chart-settings.ui.xmi",
    ePackage: () => O.eINSTANCE,
    create: () => new y(),
    /* Forms for classes that appear inside this one's lists. */
    entryForms: [{ xmi: rp, uri: "/chart-series.ui.xmi" }],
    /*
     * What the model does not describe: the reference lines and areas, four
     * lists the Ecore does not type - there is no class to build a form
     * from. Named so that what is modelled is not offered twice, in two
     * forms that could disagree.
     */
    unmodelledSections: ["Reference Lines & Areas"]
  };
  register() {
    this.events.registerWidget(_e, ap), this.actions.registerWidgetType(_e, fe, "widget");
  }
  unregister() {
    this.events.unregisterWidget(_e), this.actions.unregisterWidgetType(_e);
  }
};
hn([
  Ia()
], Bi.prototype, "register", 1);
hn([
  La()
], Bi.prototype, "unregister", 1);
Bi = hn([
  Ma({
    service: [Ua],
    properties: { "widget.type": _e }
  }),
  tr(0, un(Ca)),
  tr(1, un(Da))
], Bi);
export {
  y as ChartSettingsImpl,
  Hg as ChartWidget,
  Bi as ChartWidgetProvider,
  np as ChartWidgetSettings,
  O as ChartsettingsPackage,
  op as chartSettingsFormXmi,
  rp as seriesSettingsFormXmi
};
