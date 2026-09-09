(function(){var i="ui.vue.widget.chart",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings-container[data-v-a972ff04]{padding:16px}.settings-block[data-v-a972ff04]{display:flex;flex-direction:column;gap:12px}.settings-block h3[data-v-a972ff04]{margin:0;font-size:14px;font-weight:600;color:var(--color-fg)}.settings-block+.settings-block[data-v-a972ff04]{margin-top:20px}.block__head[data-v-a972ff04]{display:flex;align-items:center;justify-content:space-between}.entry[data-v-a972ff04]{display:flex;flex-direction:column;gap:6px;padding:12px;border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);margin-bottom:8px}.entry__head[data-v-a972ff04]{display:flex;align-items:center;justify-content:space-between;color:var(--color-fg)}\n";})();
import { WidgetActionInterfaceImpl as Da, EVENT_ACTIONS_REGISTRY as Ia, PayloadImpl as gn, EVENT_REGISTRY_ID as La, EVENT_ACTIONS_REGISTRY_ID as Ma } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as ka, deactivate as Pa, component as Na, inject as pn } from "@eclipse-daanse/tsm";
import { defineComponent as Vi, shallowRef as nr, h as xs, ref as ze, onMounted as Ws, onUnmounted as or, watch as Ss, toRaw as Ts, nextTick as Fa, version as Ba, isProxy as rr, mergeModels as Wa, toRefs as Ha, useModel as ar, inject as bn, computed as Q, createElementBlock as It, openBlock as Ot, withModifiers as za, createBlock as lr, createCommentVNode as cr, resolveDynamicComponent as Va, createElementVNode as ot, unref as tt, createVNode as st, withCtx as Gt, createTextVNode as jt, Fragment as ci, renderList as hi, toDisplayString as di } from "vue";
import { VariableWrapper as E, useVariableRepository as Ga, useDatasourceRepository as ja } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as Xa } from "vue-router";
import { BasicEObject as hr, BasicEFactory as Ya, BasicEPackage as Ua, EPackageRegistry as dr, BasicEClass as mn, BasicEReference as G, BasicEAttribute as ui, createContainmentEList as $a, createBasicEList as fi } from "@emfts/core";
import { WidgetAction as ti } from "org.eclipse.daanse.board.app.lib.events";
import { DCheckbox as Ka, DButton as Xt, DInput as Et, DColorInput as gi } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as qa } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Za } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ja = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2049.5C22.5%2047.0147%2024.5147%2045%2027%2045H33C35.4853%2045%2037.5%2047.0147%2037.5%2049.5V93C37.5%2095.4853%2035.4853%2097.5%2033%2097.5H27C24.5147%2097.5%2022.5%2095.4853%2022.5%2093V49.5Z'%20fill='%23606060'/%3e%3cpath%20d='M52.5%2027C52.5%2024.5147%2054.5147%2022.5%2057%2022.5H63C65.4853%2022.5%2067.5%2024.5147%2067.5%2027V93C67.5%2095.4853%2065.4853%2097.5%2063%2097.5H57C54.5147%2097.5%2052.5%2095.4853%2052.5%2093V27Z'%20fill='%23606060'/%3e%3cpath%20d='M82.5%2072C82.5%2069.5147%2084.5147%2067.5%2087%2067.5H93C95.4853%2067.5%2097.5%2069.5147%2097.5%2072V93C97.5%2095.4853%2095.4853%2097.5%2093%2097.5H87C84.5147%2097.5%2082.5%2095.4853%2082.5%2093V72Z'%20fill='%23606060'/%3e%3c/svg%3e";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function ei(i) {
  return i + 0.5 | 0;
}
const Ut = (i, t, e) => Math.max(Math.min(i, e), t);
function Ve(i) {
  return Ut(ei(i * 2.55), 0, 255);
}
function Kt(i) {
  return Ut(ei(i * 255), 0, 255);
}
function Wt(i) {
  return Ut(ei(i / 2.55) / 100, 0, 1);
}
function _n(i) {
  return Ut(ei(i * 100), 0, 100);
}
const At = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, vs = [..."0123456789ABCDEF"], Qa = (i) => vs[i & 15], tl = (i) => vs[(i & 240) >> 4] + vs[i & 15], pi = (i) => (i & 240) >> 4 === (i & 15), el = (i) => pi(i.r) && pi(i.g) && pi(i.b) && pi(i.a);
function il(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & At[i[1]] * 17,
    g: 255 & At[i[2]] * 17,
    b: 255 & At[i[3]] * 17,
    a: t === 5 ? At[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: At[i[1]] << 4 | At[i[2]],
    g: At[i[3]] << 4 | At[i[4]],
    b: At[i[5]] << 4 | At[i[6]],
    a: t === 9 ? At[i[7]] << 4 | At[i[8]] : 255
  })), e;
}
const sl = (i, t) => i < 255 ? t(i) : "";
function nl(i) {
  var t = el(i) ? Qa : tl;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + sl(i.a, t) : void 0;
}
const ol = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ur(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function rl(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function al(i, t, e) {
  const s = ur(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function ll(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Hs(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = ll(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function zs(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Kt);
}
function Vs(i, t, e) {
  return zs(ur, i, t, e);
}
function cl(i, t, e) {
  return zs(al, i, t, e);
}
function hl(i, t, e) {
  return zs(rl, i, t, e);
}
function fr(i) {
  return (i % 360 + 360) % 360;
}
function dl(i) {
  const t = ol.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? Ve(+t[5]) : Kt(+t[5]));
  const n = fr(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = cl(n, o, r) : t[1] === "hsv" ? s = hl(n, o, r) : s = Vs(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function ul(i, t) {
  var e = Hs(i);
  e[0] = fr(e[0] + t), e = Vs(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function fl(i) {
  if (!i)
    return;
  const t = Hs(i), e = t[0], s = _n(t[1]), n = _n(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${Wt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const yn = {
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
}, xn = {
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
function gl() {
  const i = {}, t = Object.keys(xn), e = Object.keys(yn);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, yn[o]);
    o = parseInt(xn[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let bi;
function pl(i) {
  bi || (bi = gl(), bi.transparent = [0, 0, 0, 0]);
  const t = bi[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const bl = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function ml(i) {
  const t = bl.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? Ve(r) : Ut(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Ve(s) : Ut(s, 0, 255)), n = 255 & (t[4] ? Ve(n) : Ut(n, 0, 255)), o = 255 & (t[6] ? Ve(o) : Ut(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function _l(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Wt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const ns = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, _e = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function yl(i, t, e) {
  const s = _e(Wt(i.r)), n = _e(Wt(i.g)), o = _e(Wt(i.b));
  return {
    r: Kt(ns(s + e * (_e(Wt(t.r)) - s))),
    g: Kt(ns(n + e * (_e(Wt(t.g)) - n))),
    b: Kt(ns(o + e * (_e(Wt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function mi(i, t, e) {
  if (i) {
    let s = Hs(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Vs(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function gr(i, t) {
  return i && Object.assign(t || {}, i);
}
function Sn(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = Kt(i[3]))) : (t = gr(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = Kt(t.a)), t;
}
function xl(i) {
  return i.charAt(0) === "r" ? ml(i) : dl(i);
}
class Ke {
  constructor(t) {
    if (t instanceof Ke)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = Sn(t) : e === "string" && (s = il(t) || pl(t) || xl(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = gr(this._rgb);
    return t && (t.a = Wt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Sn(t);
  }
  rgbString() {
    return this._valid ? _l(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? nl(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? fl(this._rgb) : void 0;
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
    return t && (this._rgb = yl(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Ke(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Kt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = ei(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return ul(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function Nt() {
}
const Sl = /* @__PURE__ */ (() => {
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
function ht(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Dt(i, t) {
  return ht(i) ? i : t;
}
function F(i, t) {
  return typeof i > "u" ? t : i;
}
const Tl = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, pr = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
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
function Ii(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Li(i) {
  if (Y(i))
    return i.map(Li);
  if (z(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Li(i[e[n]]);
    return t;
  }
  return i;
}
function br(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function vl(i, t, e, s) {
  if (!br(i))
    return;
  const n = t[i], o = e[i];
  z(n) && z(o) ? qe(n, o, s) : t[i] = Li(o);
}
function qe(i, t, e) {
  const s = Y(t) ? t : [
    t
  ], n = s.length;
  if (!z(i))
    return i;
  e = e || {};
  const o = e.merger || vl;
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
function Ye(i, t) {
  return qe(i, t, {
    merger: wl
  });
}
function wl(i, t, e) {
  if (!br(i))
    return;
  const s = t[i], n = e[i];
  z(s) && z(n) ? Ye(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Li(n));
}
const Tn = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function El(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Al(i) {
  const t = El(i);
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
  return (Tn[t] || (Tn[t] = Al(t)))(i);
}
function Gs(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const wt = (i) => typeof i < "u", vt = (i) => typeof i == "function", vn = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function Ol(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const H = Math.PI, q = 2 * H, Rl = q + H, Mi = Number.POSITIVE_INFINITY, js = H / 180, et = H / 2, Rt = H / 4, ki = H * 2 / 3, mr = Math.log10, kt = Math.sign;
function Ue(i, t, e) {
  return Math.abs(i - t) < e;
}
function wn(i) {
  const t = Math.round(i);
  i = Ue(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(mr(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Cl(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function Dl(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function he(i) {
  return !Dl(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function Il(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function Ll(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function ct(i) {
  return i * (H / 180);
}
function Gi(i) {
  return i * (180 / H);
}
function En(i) {
  if (!ht(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Pi(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * H && (o += q), {
    angle: o,
    distance: n
  };
}
function ve(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Ml(i, t) {
  return (i - t + Rl) % q - H;
}
function mt(i) {
  return (i % q + q) % q;
}
function Je(i, t, e, s) {
  const n = mt(i), o = mt(t), r = mt(e), a = mt(o - n), l = mt(r - n), c = mt(n - o), h = mt(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function _t(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function kl(i) {
  return _t(i, -32768, 32767);
}
function Ht(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Xs(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const re = (i, t, e, s) => Xs(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Pl = (i, t, e) => Xs(i, e, (s) => i[s][t] >= e);
function Nl(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const _r = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Fl(i, t) {
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
  }), _r.forEach((e) => {
    const s = "_onData" + Gs(e), n = i[e];
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
function An(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (_r.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function yr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const xr = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function Sr(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, xr.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function Bl(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Ys = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", bt = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Wl = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Hl(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, h = r.axis, { min: d, max: u, minDefined: f, maxDefined: g } = r.getUserBounds();
    if (f) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        re(l, h, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : re(t, h, r.getPixelForValue(d)).lo
      ), c) {
        const p = l.slice(0, n + 1).reverse().findIndex((b) => !X(b[a.axis]));
        n -= Math.max(0, p);
      }
      n = _t(n, 0, s - 1);
    }
    if (g) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        re(l, r.axis, u, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : re(t, h, r.getPixelForValue(u), !0).hi + 1
      );
      if (c) {
        const b = l.slice(p - 1).findIndex((m) => !X(m[a.axis]));
        p += Math.max(0, b);
      }
      o = _t(p, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function zl(i) {
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
const _i = (i) => i === 0 || i === 1, On = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * q / e)), Rn = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * q / e) + 1, $e = {
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
  easeInSine: (i) => -Math.cos(i * et) + 1,
  easeOutSine: (i) => Math.sin(i * et),
  easeInOutSine: (i) => -0.5 * (Math.cos(H * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => _i(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => _i(i) ? i : On(i, 0.075, 0.3),
  easeOutElastic: (i) => _i(i) ? i : Rn(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return _i(i) ? i : i < 0.5 ? 0.5 * On(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * Rn(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - $e.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? $e.easeInBounce(i * 2) * 0.5 : $e.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function Us(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Cn(i) {
  return Us(i) ? i : new Ke(i);
}
function os(i) {
  return Us(i) ? i : new Ke(i).saturate(0.5).darken(0.1).hexString();
}
const Vl = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Gl = [
  "color",
  "borderColor",
  "backgroundColor"
];
function jl(i) {
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
      properties: Gl
    },
    numbers: {
      type: "number",
      properties: Vl
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
function Xl(i) {
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
const Dn = /* @__PURE__ */ new Map();
function Yl(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = Dn.get(e);
  return s || (s = new Intl.NumberFormat(i, t), Dn.set(e, s)), s;
}
function ji(i, t, e) {
  return Yl(t, e).format(i);
}
const Ul = {
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
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = $l(i, e);
    }
    const r = mr(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), ji(i, s, l);
  }
};
function $l(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var $s = {
  formatters: Ul
};
function Zl(i) {
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
      callback: $s.formatters.values,
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
const de = /* @__PURE__ */ Object.create(null), ws = /* @__PURE__ */ Object.create(null);
function Ze(i, t) {
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
  return typeof t == "string" ? qe(Ze(i, t), e) : qe(Ze(i, ""), t);
}
class Kl {
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
    return Ze(this, t);
  }
  describe(t, e) {
    return rs(ws, t, e);
  }
  override(t, e) {
    return rs(de, t, e);
  }
  route(t, e, s, n) {
    const o = Ze(this, t), r = Ze(this, s), a = "_" + e;
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
var nt = /* @__PURE__ */ new Kl({
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
  jl,
  Xl,
  Zl
]);
function ql(i) {
  return !i || X(i.size) || X(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Ni(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function Jl(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, h, d, u;
  for (l = 0; l < a; l++)
    if (d = e[l], d != null && !Y(d))
      r = Ni(i, n, o, r, d);
    else if (Y(d))
      for (c = 0, h = d.length; c < h; c++)
        u = d[c], u != null && !Y(u) && (r = Ni(i, n, o, r, u));
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
function In(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function Es(i, t, e, s) {
  Tr(i, t, e, s, null);
}
function Tr(i, t, e, s, n) {
  let o, r, a, l, c, h, d, u;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let b = (g || 0) * js;
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
        h = n ? n / 2 : p, i.moveTo(e + Math.sin(b) * h, s - Math.cos(b) * p), b += ki, i.lineTo(e + Math.sin(b) * h, s - Math.cos(b) * p), b += ki, i.lineTo(e + Math.sin(b) * h, s - Math.cos(b) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(b + Rt) * l, d = Math.cos(b + Rt) * (n ? n / 2 - c : l), a = Math.sin(b + Rt) * l, u = Math.sin(b + Rt) * (n ? n / 2 - c : l), i.arc(e - d, s - a, c, b - H, b - et), i.arc(e + u, s - r, c, b - et, b), i.arc(e + d, s + a, c, b, b + et), i.arc(e - u, s + r, c, b + et, b + H), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        b += Rt;
      /* falls through */
      case "rectRot":
        d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + u, s - r), i.lineTo(e + d, s + a), i.lineTo(e - u, s + r), i.closePath();
        break;
      case "crossRot":
        b += Rt;
      /* falls through */
      case "cross":
        d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r);
        break;
      case "star":
        d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r), b += Rt, d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r);
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
function zt(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function ii(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function si(i) {
  i.restore();
}
function Ql(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function tc(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function ec(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), X(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function ic(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function sc(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function ue(i, t, e, s, n, o = {}) {
  const r = Y(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, ec(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && sc(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), X(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), ic(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function we(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * H, H, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, H, et, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, et, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -et, !0), i.lineTo(e + r.topLeft, s);
}
const nc = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, oc = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function rc(i, t) {
  const e = ("" + i).match(nc);
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
const ac = (i) => +i || 0;
function Zs(i, t) {
  const e = {}, s = z(t), n = s ? Object.keys(t) : t, o = z(i) ? s ? (r) => F(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = ac(o(r));
  return e;
}
function vr(i) {
  return Zs(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function qt(i) {
  return Zs(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function dt(i) {
  const t = vr(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function rt(i, t) {
  i = i || {}, t = t || nt.font;
  let e = F(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = F(i.style, t.style);
  s && !("" + s).match(oc) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: F(i.family, t.family),
    lineHeight: rc(F(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: F(i.weight, t.weight),
    string: ""
  };
  return n.string = ql(n), n;
}
function yi(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function lc(i, t, e) {
  const { min: s, max: n } = i, o = pr(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function ee(i, t) {
  return Object.assign(Object.create(i), t);
}
function Ks(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = Or("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => Ks([
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
      return Er(a, l, () => bc(l, t, i, a));
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
      return Mn(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Mn(a);
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
function Ee(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: wr(i, s),
    setContext: (o) => Ee(i, o, e, s),
    override: (o) => Ee(i.override(o), t, e, s)
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
      return Er(o, r, () => hc(o, r, a));
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
function wr(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: vt(e) ? e : () => e,
    isIndexable: vt(s) ? s : () => s
  };
}
const cc = (i, t) => i ? i + Gs(t) : t, qs = (i, t) => z(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Er(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function hc(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return vt(a) && r.isScriptable(t) && (a = dc(t, a, i, e)), Y(a) && a.length && (a = uc(t, a, i, r.isIndexable)), qs(t, a) && (a = Ee(a, n, o && o[t], r)), a;
}
function dc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), qs(i, l) && (l = Js(n._scopes, n, i, l)), l;
}
function uc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (z(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = Js(c, n, i, h);
      t.push(Ee(d, o, r && r[i], a));
    }
  }
  return t;
}
function Ar(i, t, e) {
  return vt(i) ? i(t, e) : i;
}
const fc = (i, t) => i === !0 ? t : typeof i == "string" ? Qt(t, i) : void 0;
function gc(i, t, e, s, n) {
  for (const o of t) {
    const r = fc(e, o);
    if (r) {
      i.add(r);
      const a = Ar(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function Js(i, t, e, s) {
  const n = t._rootScopes, o = Ar(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Ln(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Ln(a, r, o, l, s), l === null) ? !1 : Ks(Array.from(a), [
    ""
  ], n, o, () => pc(t, e, s));
}
function Ln(i, t, e, s, n) {
  for (; e; )
    e = gc(i, t, e, s, n);
  return e;
}
function pc(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return Y(n) && z(e) ? e : n || {};
}
function bc(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Or(cc(o, i), e), typeof n < "u")
      return qs(i, n) ? Js(e, s, i, n) : n;
}
function Or(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function Mn(i) {
  let t = i._keys;
  return t || (t = i._keys = mc(i._scopes)), t;
}
function mc(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function Rr(i, t, e, s) {
  const { iScale: n } = i, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, l, c, h;
  for (a = 0, l = s; a < l; ++a)
    c = a + e, h = t[c], r[a] = {
      r: n.parse(Qt(h, o), c)
    };
  return r;
}
const _c = Number.EPSILON || 1e-14, Ae = (i, t) => t < i.length && !i[t].skip && i[t], Cr = (i) => i === "x" ? "y" : "x";
function yc(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = ve(o, n), l = ve(r, o);
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
function xc(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Ae(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = Ae(i, h + 1), !(!l || !c)) {
      if (Ue(t[h], 0, _c)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function Sc(i, t, e = "x") {
  const s = Cr(e), n = i.length;
  let o, r, a, l = Ae(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Ae(i, c + 1), !a)
      continue;
    const h = a[e], d = a[s];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
  }
}
function Tc(i, t = "x") {
  const e = Cr(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Ae(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Ae(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? kt(n[r - 1]) !== kt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  xc(i, n, o), Sc(i, o, t);
}
function xi(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function vc(i, t) {
  let e, s, n, o, r, a = zt(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && zt(i[e + 1], t), o && (n = i[e], r && (n.cp1x = xi(n.cp1x, t.left, t.right), n.cp1y = xi(n.cp1y, t.top, t.bottom)), a && (n.cp2x = xi(n.cp2x, t.left, t.right), n.cp2y = xi(n.cp2y, t.top, t.bottom)));
}
function wc(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Tc(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = yc(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && vc(i, e);
}
function Qs() {
  return typeof window < "u" && typeof document < "u";
}
function tn(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Fi(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Xi = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Ec(i, t) {
  return Xi(i).getPropertyValue(t);
}
const Ac = [
  "top",
  "right",
  "bottom",
  "left"
];
function le(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = Ac[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Oc = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Rc(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (Oc(n, o, i.target))
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
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Xi(e), o = n.boxSizing === "border-box", r = le(n, "padding"), a = le(n, "border", "width"), { x: l, y: c, box: h } = Rc(i, e), d = r.left + (h && a.left), u = r.top + (h && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - d) / f * e.width / s),
    y: Math.round((c - u) / g * e.height / s)
  };
}
function Cc(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && tn(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Xi(o), l = le(a, "border", "width"), c = le(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Fi(a.maxWidth, o, "clientWidth"), n = Fi(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Mi,
    maxHeight: n || Mi
  };
}
const $t = (i) => Math.round(i * 10) / 10;
function Dc(i, t, e, s) {
  const n = Xi(i), o = le(n, "margin"), r = Fi(n.maxWidth, i, "clientWidth") || Mi, a = Fi(n.maxHeight, i, "clientHeight") || Mi, l = Cc(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const u = le(n, "border", "width"), f = le(n, "padding");
    c -= f.width + u.width, h -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = $t(Math.min(c, r, l.maxWidth)), h = $t(Math.min(h, a, l.maxHeight)), c && !h && (h = $t(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = $t(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function kn(i, t, e) {
  const s = t || 1, n = $t(i.height * s), o = $t(i.width * s);
  i.height = $t(i.height), i.width = $t(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Ic = (function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    Qs() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
})();
function Pn(i, t) {
  const e = Ec(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function oe(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Lc(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Mc(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = oe(i, n, e), a = oe(n, o, e), l = oe(o, t, e), c = oe(r, a, e), h = oe(a, l, e);
  return oe(c, h, e);
}
const kc = function(i, t) {
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
}, Pc = function() {
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
function Te(i, t, e) {
  return i ? kc(t, e) : Pc();
}
function Dr(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Ir(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Lr(i) {
  return i === "angle" ? {
    between: Je,
    compare: Ml,
    normalize: mt
  } : {
    between: Ht,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Nn({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function Nc(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = Lr(s), l = t.length;
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
function Mr(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Lr(s), { start: h, end: d, loop: u, style: f } = Nc(i, t, e), g = [];
  let p = !1, b = null, m, _, S;
  const T = () => l(n, S, m) && a(n, S) !== 0, y = () => a(o, m) === 0 || l(o, S, m), O = () => p || T(), R = () => !p || y();
  for (let C = h, D = h; C <= d; ++C)
    _ = t[C % r], !_.skip && (m = c(_[s]), m !== S && (p = l(m, n, o), b === null && O() && (b = a(m, n) === 0 ? C : D), b !== null && R() && (g.push(Nn({
      start: b,
      end: C,
      loop: u,
      count: r,
      style: f
    })), b = null), D = C, S = m));
  return b !== null && g.push(Nn({
    start: b,
    end: d,
    loop: u,
    count: r,
    style: f
  })), g;
}
function kr(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Mr(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Fc(i, t, e, s) {
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
function Bc(i, t, e, s) {
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
function Wc(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = Fc(e, n, o, s);
  if (s === !0)
    return Fn(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return Fn(i, Bc(e, r, l, c), e, t);
}
function Fn(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Hc(i, t, e, s);
}
function Hc(i, t, e, s) {
  const n = i._chart.getContext(), o = Bn(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
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
      b = Bn(s.setContext(ee(n, {
        type: "segment",
        p0: p,
        p1: m,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: r
      }))), zc(b, h) && f(d, u - 1, g.loop, h), p = m, h = b;
    }
    d < u - 1 && f(d, u - 1, g.loop, h);
  }
  return c;
}
function Bn(i) {
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
function zc(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return Us(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
function Si(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Vc(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: Si(e, t, "left"),
    right: Si(e, t, "right"),
    top: Si(s, t, "top"),
    bottom: Si(s, t, "bottom")
  } : t;
}
function Pr(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const s = Vc(t, i.chartArea);
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
class Gc {
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
    this._request || (this._running = !0, this._request = xr.call(window, () => {
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
var Ft = /* @__PURE__ */ new Gc();
const Wn = "transparent", jc = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = Cn(i || Wn), n = s.valid && Cn(t || Wn);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class Xc {
  constructor(t, e, s, n) {
    const o = e[s];
    n = yi([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = yi([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || jc[t.type || typeof r], this._easing = $e[t.easing] || $e.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = yi([
        t.to,
        e,
        n,
        t.from
      ]), this._from = yi([
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
class en {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!z(t))
      return;
    const e = Object.keys(nt.animation), s = this._properties;
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
    const s = e.options, n = Uc(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && Yc(t.options.$animations, s).then(() => {
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
      o[c] = d = new Xc(u, t, c, h), n.push(d);
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
      return Ft.add(this._chart, s), !0;
  }
}
function Yc(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Uc(i, t) {
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
function Hn(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function $c(i, t, e) {
  if (e === !1)
    return !1;
  const s = Hn(i, e), n = Hn(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function Zc(i) {
  let t, e, s, n;
  return z(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Nr(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function zn(i, t, e, s = {}) {
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
    c = i.values[l], ht(c) && (o || t === 0 || kt(t) === kt(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function Kc(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    h = r[l], a[l] = {
      [n]: h,
      [o]: i[h]
    };
  return a;
}
function as(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function qc(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Jc(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function Qc(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Vn(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function Gn(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = qc(o, r, s), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const g = t[f], { [l]: p, [c]: b } = g, m = g._stacks || (g._stacks = {});
    u = m[c] = Qc(n, h, p), u[a] = b, u._top = Vn(u, r, !0, s.type), u._bottom = Vn(u, r, !1, s.type);
    const _ = u._visualValues || (u._visualValues = {});
    _[a] = b;
  }
}
function ls(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function th(i, t) {
  return ee(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function eh(i, t, e) {
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
function ke(i, t) {
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
const cs = (i) => i === "reset" || i === "none", jn = (i, t) => t ? i : Object.assign({}, i), ih = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Nr(e, !0),
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
    this.index !== t && ke(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, g) => d === "x" ? u : d === "r" ? g : f, o = e.xAxisID = F(s.xAxisID, ls(t, "x")), r = e.yAxisID = F(s.yAxisID, ls(t, "y")), a = e.rAxisID = F(s.rAxisID, ls(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
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
    this._data && An(this._data, this), t._stacked && ke(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (z(e)) {
      const n = this._cachedMeta;
      this._data = Kc(e, n);
    } else if (s !== e) {
      if (s) {
        An(s, this);
        const n = this._cachedMeta;
        ke(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Fl(e, this), this._syncList = [], this._data = e;
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
    e._stacked = as(e.vScale, e), e.stack !== s.stack && (n = !0, ke(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (Gn(this, e._parsed), e._stacked = as(e.vScale, e));
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
    r && Gn(this, u);
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
  applyStack(t, e, s) {
    const n = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: Nr(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return zn(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = zn(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = ih(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = Jc(a);
    let u, f;
    function g() {
      f = n[u];
      const p = f[a.axis];
      return !ht(f[t.axis]) || h > p || d < p;
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
      r = e[n][t.axis], ht(r) && s.push(r);
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
    this.update(t || "default"), e._clip = Zc(F(this.options.clip, $c(e.xScale, e.yScale, this.getMaxOverflow())));
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
      o = r.$context || (r.$context = eh(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = th(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && wt(s);
    if (a)
      return jn(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(nt.elements[t]), g = () => this.getContext(s, n, e), p = c.resolveNamedOptions(u, f, g, d);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(jn(p, l))), p;
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
    const c = new en(n, l && l.animations);
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
      s._stacked && ke(s, n);
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
function sh(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = yr(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function nh(i) {
  const t = i.iScale, e = sh(t, i.type);
  let s = t._length, n, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (wt(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (n = 0, o = e.length; n < o; ++n)
    r = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    r = t.getPixelForTick(n), l();
  return s;
}
function oh(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return X(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function rh(i, t, e, s) {
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
function ah(i, t, e, s) {
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
function Fr(i, t, e, s) {
  return Y(i) ? ah(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function Xn(i, t, e, s) {
  const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
  let c, h, d, u;
  for (c = e, h = e + s; c < h; ++c)
    u = t[c], d = {}, d[n.axis] = a || n.parse(r[c], c), l.push(Fr(u, d, o, c));
  return l;
}
function hs(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function lh(i, t, e) {
  return i !== 0 ? kt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function ch(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function hh(i, t, e, s) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: h } = ch(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[Yn(h, r, a, l)] = !0, n = c)), o[Yn(n, r, a, l)] = !0, i.borderSkipped = o;
}
function Yn(i, t, e, s) {
  return s ? (i = dh(i, t, e), i = Un(i, e, t)) : i = Un(i, t, e), i;
}
function dh(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Un(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function uh(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class fh extends Re {
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
    return Xn(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return Xn(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, h = r.axis === "x" ? a : l, d = [];
    let u, f, g, p;
    for (u = s, f = s + n; u < f; ++u)
      p = e[u], g = {}, g[o.axis] = o.parse(Qt(p, c), u), d.push(Fr(Qt(p, h), g, r, u));
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
    const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), r = o._custom, a = hs(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(o[n.axis]);
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
        enableBorderRadius: !m || hs(g._custom) || r === m._top || r === m._bottom,
        x: c ? p.head : b.center,
        y: c ? b.center : p.head,
        height: c ? b.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : b.size
      };
      u && (_.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const S = _.options || t[f].options;
      hh(_, S, m, r), uh(_, S, h.ratio), this.updateElement(t[f], f, _, n);
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
      min: a || nh(e),
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
    const { _cachedMeta: { vScale: e, _stacked: s, index: n }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, h = hs(c);
    let d = l[e.axis], u = 0, f = s ? this.applyStack(e, l, s) : d, g, p;
    f !== d && (u = f - d, f = d), h && (d = c.barStart, f = c.barEnd - c.barStart, d !== 0 && kt(d) !== kt(c.barEnd) && (u = 0), u += d);
    const b = !X(o) && !h ? o : u;
    let m = e.getPixelForValue(b);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(u + f) : g = m, p = g - m, Math.abs(p) < r) {
      p = lh(p, e, a) * r, d === a && (m -= p / 2);
      const _ = e.getPixelForDecimal(0), S = e.getPixelForDecimal(1), T = Math.min(_, S), y = Math.max(_, S);
      m = Math.max(Math.min(m, y), T), g = m + p, s && !h && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(m));
    }
    if (m === e.getPixelForValue(a)) {
      const _ = kt(p) * e.getLineWidthForValue(a) / 2;
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
      const h = o ? this._getStackCount(t) : e.stackCount, d = n.barThickness === "flex" ? rh(t, e, n, h * c) : oh(t, e, n, h * c), u = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(F(u, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
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
function gh(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < q) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), u = Math.sin(l), f = (S, T, y) => Je(S, a, l, !0) ? 1 : Math.max(T, T * e, y, y * e), g = (S, T, y) => Je(S, a, l, !0) ? -1 : Math.min(T, T * e, y, y * e), p = f(0, c, d), b = f(et, h, u), m = g(H, c, d), _ = g(H + et, h, u);
    s = (p - m) / 2, n = (b - _) / 2, o = -(p + m) / 2, r = -(b + _) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class sn extends Re {
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
        o = (c) => +Qt(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return ct(this.options.rotation - 90);
  }
  _getCircumference() {
    return ct(this.options.circumference);
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
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(Tl(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: g, offsetY: p } = gh(d, h, l), b = (s.width - r) / u, m = (s.height - r) / f, _ = Math.max(Math.min(b, m) / 2, 0), S = pr(this.options.radius, _), T = Math.max(S * l, 0), y = (S - T) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * S, this.offsetY = p * S, n.total = this.calculateTotal(), this.outerRadius = S - y * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - y * c, 0), this.updateElements(o, 0, o.length, t);
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
      const S = this._circumference(_, o), T = t[_], y = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: m,
        endAngle: m + S,
        circumference: S,
        outerRadius: g,
        innerRadius: f
      };
      b && (y.options = p || this.resolveDataElementOptions(_, T.active ? "active" : n)), m += S, this.updateElement(T, _, y, n);
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
    return Math.max(F(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class ph extends Re {
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
    let { start: a, count: l } = Hl(e, n, r);
    this._drawStart = a, this._drawCount = l, zl(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), u = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, b = he(g) ? g : Number.POSITIVE_INFINITY, m = this.chart._animationsDisabled || o || n === "none", _ = e + s, S = t.length;
    let T = e > 0 && this.getParsed(e - 1);
    for (let y = 0; y < S; ++y) {
      const O = t[y], R = m ? O : {};
      if (y < e || y >= _) {
        R.skip = !0;
        continue;
      }
      const C = this.getParsed(y), D = X(C[f]), N = R[u] = r.getPixelForValue(C[u], y), P = R[f] = o || D ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, C, l) : C[f], y);
      R.skip = isNaN(N) || isNaN(P) || D, R.stop = y > 0 && Math.abs(C[u] - T[u]) > b, p && (R.parsed = C, R.raw = c.data[y]), d && (R.options = h || this.resolveDataElementOptions(y, O.active ? "active" : n)), m || this.updateElement(O, y, R, n), T = C;
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
class bh extends Re {
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
    return Rr.bind(this)(t, e, s, n);
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
      let m = f, _ = f + this._computeAngle(g, n, p), S = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = _, o && (l.animateScale && (S = 0), l.animateRotate && (m = _ = u));
      const T = {
        x: h,
        y: d,
        innerRadius: 0,
        outerRadius: S,
        startAngle: m,
        endAngle: _,
        options: this.resolveDataElementOptions(g, b.active ? "active" : n)
      };
      this.updateElement(b, g, T, n);
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
    return this.chart.getDataVisibility(t) ? ct(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
}
class mh extends sn {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class _h extends Re {
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
    return Rr.bind(this)(t, e, s, n);
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
function se() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class nn {
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
    Object.assign(nn.prototype, t);
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
var yh = {
  _date: nn
};
function xh(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Pl : re;
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
function Yi(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: u } = xh(o[a], t, r, n);
    for (let f = d; f <= u; ++f) {
      const g = h[f];
      g.skip || s(g, c, f);
    }
  }
}
function Sh(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function ds(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Yi(i, e, t, function(a, l, c) {
    !n && !zt(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Th(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = Pi(r, {
      x: t.x,
      y: t.y
    });
    Je(d, c, h) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Yi(i, e, t, o), n;
}
function vh(i, t, e, s, n, o) {
  let r = [];
  const a = Sh(e);
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
  return Yi(i, e, t, c), r;
}
function us(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Th(i, t, e, n) : vh(i, t, e, s, n, o);
}
function $n(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Yi(i, e, t, (l, c, h) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var wh = {
  modes: {
    index(i, t, e, s) {
      const n = ne(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? ds(i, n, o, s, r) : us(i, n, o, !1, s, r), l = [];
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
      const n = ne(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? ds(i, n, o, s, r) : us(i, n, o, !1, s, r);
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
      const n = ne(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ds(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = ne(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return us(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = ne(t, i);
      return $n(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = ne(t, i);
      return $n(i, n, "y", e.intersect, s);
    }
  }
};
const Br = [
  "left",
  "top",
  "right",
  "bottom"
];
function Pe(i, t) {
  return i.filter((e) => e.pos === t);
}
function Zn(i, t) {
  return i.filter((e) => Br.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Ne(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Eh(i) {
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
function Ah(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !Br.includes(n))
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
function Oh(i, t) {
  const e = Ah(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function Rh(i) {
  const t = Eh(i), e = Ne(t.filter((c) => c.box.fullSize), !0), s = Ne(Pe(t, "left"), !0), n = Ne(Pe(t, "right")), o = Ne(Pe(t, "top"), !0), r = Ne(Pe(t, "bottom")), a = Zn(t, "x"), l = Zn(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: Pe(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Kn(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Wr(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Ch(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!z(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && Wr(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Kn(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Kn(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Dh(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Ih(i, t) {
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
function Ge(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Ih(a.horizontal, t));
    const { same: d, other: u } = Ch(t, e, a, s);
    c |= d && n.length, h = h || u, l.fullSize || n.push(a);
  }
  return c && Ge(n, t, e, s) || h;
}
function Ti(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function qn(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, u = c.size || l.height;
      wt(c.start) && (r = c.start), l.fullSize ? Ti(l, n.left, r, e.outerWidth - n.right - n.left, u) : Ti(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, u = c.size || l.width;
      wt(c.start) && (o = c.start), l.fullSize ? Ti(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : Ti(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Ct = {
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
    const n = dt(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = Rh(i.boxes), l = a.vertical, c = a.horizontal;
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
    Wr(u, dt(s));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), g = Oh(l.concat(c), d);
    Ge(a.fullSize, f, d, g), Ge(l, f, d, g), Ge(c, f, d, g) && Ge(l, f, d, g), Dh(f), qn(a.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, qn(a.rightAndBottom, f, d, g), i.chartArea = {
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
class Hr {
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
class Lh extends Hr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ri = "$chartjs", Mh = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Jn = (i) => i === null || i === "";
function kh(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Ri] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Jn(n)) {
    const o = Pn(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Jn(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = Pn(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const zr = Ic ? {
  passive: !0
} : !1;
function Ph(i, t, e) {
  i && i.addEventListener(t, e, zr);
}
function Nh(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, zr);
}
function Fh(i, t) {
  const e = Mh[i.type] || i.type, { x: s, y: n } = ne(i, t);
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
function Bh(i, t, e) {
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
function Wh(i, t, e) {
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
const Qe = /* @__PURE__ */ new Map();
let Qn = 0;
function Vr() {
  const i = window.devicePixelRatio;
  i !== Qn && (Qn = i, Qe.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Hh(i, t) {
  Qe.size || window.addEventListener("resize", Vr), Qe.set(i, t);
}
function zh(i) {
  Qe.delete(i), Qe.size || window.removeEventListener("resize", Vr);
}
function Vh(i, t, e) {
  const s = i.canvas, n = s && tn(s);
  if (!n)
    return;
  const o = Sr((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), Hh(i, o), r;
}
function fs(i, t, e) {
  e && e.disconnect(), t === "resize" && zh(i);
}
function Gh(i, t, e) {
  const s = i.canvas, n = Sr((o) => {
    i.ctx !== null && e(Fh(o, i));
  }, i);
  return Ph(s, t, n), n;
}
class jh extends Hr {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (kh(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Ri])
      return !1;
    const s = e[Ri].initial;
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
    }), e.width = e.width, delete e[Ri], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: Bh,
      detach: Wh,
      resize: Vh
    }[e] || Gh;
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
    }[e] || Nh)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Dc(t, e, s, n);
  }
  isAttached(t) {
    const e = t && tn(t);
    return !!(e && e.isConnected);
  }
}
function Xh(i) {
  return !Qs() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Lh : jh;
}
class yt {
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
    return he(this.x) && he(this.y);
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
function Yh(i, t) {
  const e = i.options.ticks, s = Uh(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? Zh(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return Kh(t, c, o, r / n), c;
  const h = $h(o, t, n);
  if (r > 0) {
    let d, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (vi(t, c, h, X(f) ? 0 : a - f, a), d = 0, u = r - 1; d < u; d++)
      vi(t, c, h, o[d], o[d + 1]);
    return vi(t, c, h, l, X(f) ? t.length : l + f), c;
  }
  return vi(t, c, h), c;
}
function Uh(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function $h(i, t, e) {
  const s = qh(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = Cl(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function Zh(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function Kh(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function vi(i, t, e, s, n) {
  const o = F(s, 0), r = Math.min(F(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function qh(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const Jh = (i) => i === "left" ? "right" : i === "right" ? "left" : i, to = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, eo = (i, t) => Math.min(t || i, i);
function io(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function Qh(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function td(i, t) {
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
function Fe(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function so(i, t) {
  if (!i.display)
    return 0;
  const e = rt(i.font, t), s = dt(i.padding);
  return (Y(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function ed(i, t) {
  return ee(i, {
    scale: t,
    type: "scale"
  });
}
function id(i, t, e) {
  return ee(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function sd(i, t, e) {
  let s = Ys(i);
  return (e && t !== "right" || !e && t === "right") && (s = Jh(s)), s;
}
function nd(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, u, f, g;
  const p = r - n, b = a - o;
  if (i.isHorizontal()) {
    if (f = bt(s, o, a), z(e)) {
      const m = Object.keys(e)[0], _ = e[m];
      g = h[m].getPixelForValue(_) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = to(i, e, t);
    u = a - o;
  } else {
    if (z(e)) {
      const m = Object.keys(e)[0], _ = e[m];
      f = h[m].getPixelForValue(_) - b + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - b + t : f = to(i, e, t);
    g = bt(s, r, n), d = e === "left" ? -et : et;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: u,
    rotation: d
  };
}
class Ce extends yt {
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
    return t = Dt(t, Number.POSITIVE_INFINITY), e = Dt(e, Number.NEGATIVE_INFINITY), s = Dt(s, Number.POSITIVE_INFINITY), n = Dt(n, Number.NEGATIVE_INFINITY), {
      min: Dt(t, s),
      max: Dt(e, n),
      minDefined: ht(t),
      maxDefined: ht(e)
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
      min: Dt(e, Dt(s, e)),
      max: Dt(s, Dt(e, s))
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = lc(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? io(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Yh(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
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
    const t = this.options, e = t.ticks, s = eo(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = _t(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Fe(t.grid) - e.padding - so(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = Gi(Math.min(Math.asin(_t((h.highest.height + 6) / a, -1, 1)), Math.asin(_t(l / c, -1, 1)) - Math.asin(_t(u / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
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
      const l = so(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Fe(o) + l) : (t.height = this.maxHeight, t.width = Fe(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, g = ct(this.labelRotation), p = Math.cos(g), b = Math.sin(g);
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
      e < s.length && (s = io(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / eo(e, s));
    let c = 0, h = 0, d, u, f, g, p, b, m, _, S, T, y;
    for (d = 0; d < e; d += l) {
      if (g = t[d].label, p = this._resolveTickFontOptions(d), n.font = b = p.string, m = o[b] = o[b] || {
        data: {},
        gc: []
      }, _ = p.lineHeight, S = T = 0, !X(g) && !Y(g))
        S = Ni(n, m.data, m.gc, S, g), T = _;
      else if (Y(g))
        for (u = 0, f = g.length; u < f; ++u)
          y = g[u], !X(y) && !Y(y) && (S = Ni(n, m.data, m.gc, S, y), T += _);
      r.push(S), a.push(T), c = Math.max(S, c), h = Math.max(T, h);
    }
    td(o, e);
    const O = r.indexOf(c), R = a.indexOf(h), C = (D) => ({
      width: r[D] || 0,
      height: a[D] || 0
    });
    return {
      first: C(0),
      last: C(e - 1),
      widest: C(O),
      highest: C(R),
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
    return kl(this._alignToPixels ? ie(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = id(this.getContext(), t, s));
    }
    return this.$context || (this.$context = ed(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = ct(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = Fe(o), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, b = p / 2, m = function(B) {
      return ie(s, B, p);
    };
    let _, S, T, y, O, R, C, D, N, P, v, M;
    if (r === "top")
      _ = m(this.bottom), R = this.bottom - u, D = _ - b, P = m(t.top) + b, M = t.bottom;
    else if (r === "bottom")
      _ = m(this.top), P = t.top, M = m(t.bottom) - b, R = _ + b, D = this.top + u;
    else if (r === "left")
      _ = m(this.right), O = this.right - u, C = _ - b, N = m(t.left) + b, v = t.right;
    else if (r === "right")
      _ = m(this.left), N = t.left, v = m(t.right) - b, O = _ + b, C = this.left + u;
    else if (e === "x") {
      if (r === "center")
        _ = m((t.top + t.bottom) / 2 + 0.5);
      else if (z(r)) {
        const B = Object.keys(r)[0], k = r[B];
        _ = m(this.chart.scales[B].getPixelForValue(k));
      }
      P = t.top, M = t.bottom, R = _ + b, D = R + u;
    } else if (e === "y") {
      if (r === "center")
        _ = m((t.left + t.right) / 2);
      else if (z(r)) {
        const B = Object.keys(r)[0], k = r[B];
        _ = m(this.chart.scales[B].getPixelForValue(k));
      }
      O = _ - b, C = O - u, N = t.left, v = t.right;
    }
    const V = F(n.ticks.maxTicksLimit, d), L = Math.max(1, Math.ceil(d / V));
    for (S = 0; S < d; S += L) {
      const B = this.getContext(S), k = o.setContext(B), K = a.setContext(B), Z = k.lineWidth, ut = k.color, gt = K.dash || [], ft = K.dashOffset, pt = k.tickWidth, at = k.tickColor, it = k.tickBorderDash || [], lt = k.tickBorderDashOffset;
      T = Qh(this, S, l), T !== void 0 && (y = ie(s, T, Z), c ? O = C = N = v = y : R = D = P = M = y, f.push({
        tx1: O,
        ty1: R,
        tx2: C,
        ty2: D,
        x1: N,
        y1: P,
        x2: v,
        y2: M,
        width: Z,
        color: ut,
        borderDash: gt,
        borderDashOffset: ft,
        tickWidth: pt,
        tickColor: at,
        tickBorderDash: it,
        tickBorderDashOffset: lt
      }));
    }
    return this._ticksLength = d, this._borderValue = _, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = Fe(s.grid), f = u + h, g = d ? -h : f, p = -ct(this.labelRotation), b = [];
    let m, _, S, T, y, O, R, C, D, N, P, v, M = "middle";
    if (n === "top")
      O = this.bottom - g, R = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      O = this.top + g, R = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const L = this._getYAxisLabelAlignment(u);
      R = L.textAlign, y = L.x;
    } else if (n === "right") {
      const L = this._getYAxisLabelAlignment(u);
      R = L.textAlign, y = L.x;
    } else if (e === "x") {
      if (n === "center")
        O = (t.top + t.bottom) / 2 + f;
      else if (z(n)) {
        const L = Object.keys(n)[0], B = n[L];
        O = this.chart.scales[L].getPixelForValue(B) + f;
      }
      R = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        y = (t.left + t.right) / 2 - f;
      else if (z(n)) {
        const L = Object.keys(n)[0], B = n[L];
        y = this.chart.scales[L].getPixelForValue(B);
      }
      R = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? M = "top" : l === "end" && (M = "bottom"));
    const V = this._getLabelSizes();
    for (m = 0, _ = a.length; m < _; ++m) {
      S = a[m], T = S.label;
      const L = o.setContext(this.getContext(m));
      C = this.getPixelForTick(m) + o.labelOffset, D = this._resolveTickFontOptions(m), N = D.lineHeight, P = Y(T) ? T.length : 1;
      const B = P / 2, k = L.color, K = L.textStrokeColor, Z = L.textStrokeWidth;
      let ut = R;
      r ? (y = C, R === "inner" && (m === _ - 1 ? ut = this.options.reverse ? "left" : "right" : m === 0 ? ut = this.options.reverse ? "right" : "left" : ut = "center"), n === "top" ? c === "near" || p !== 0 ? v = -P * N + N / 2 : c === "center" ? v = -V.highest.height / 2 - B * N + N : v = -V.highest.height + N / 2 : c === "near" || p !== 0 ? v = N / 2 : c === "center" ? v = V.highest.height / 2 - B * N : v = V.highest.height - P * N, d && (v *= -1), p !== 0 && !L.showLabelBackdrop && (y += N / 2 * Math.sin(p))) : (O = C, v = (1 - P) * N / 2);
      let gt;
      if (L.showLabelBackdrop) {
        const ft = dt(L.backdropPadding), pt = V.heights[m], at = V.widths[m];
        let it = v - ft.top, lt = 0 - ft.left;
        switch (M) {
          case "middle":
            it -= pt / 2;
            break;
          case "bottom":
            it -= pt;
            break;
        }
        switch (R) {
          case "center":
            lt -= at / 2;
            break;
          case "right":
            lt -= at;
            break;
          case "inner":
            m === _ - 1 ? lt -= at : m > 0 && (lt -= at / 2);
            break;
        }
        gt = {
          left: lt,
          top: it,
          width: at + ft.width,
          height: pt + ft.height,
          color: L.backdropColor
        };
      }
      b.push({
        label: T,
        font: D,
        textOffset: v,
        options: {
          rotation: p,
          color: k,
          strokeColor: K,
          strokeWidth: Z,
          textAlign: ut,
          textBaseline: M,
          translation: [
            y,
            O
          ],
          backdrop: gt
        }
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-ct(this.labelRotation))
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
    this.isHorizontal() ? (c = ie(t, this.left, r) - r / 2, h = ie(t, this.right, a) + a / 2, d = u = l) : (d = ie(t, this.top, r) - r / 2, u = ie(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, u), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && ii(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      ue(s, c, 0, h, l, a);
    }
    n && si(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = rt(s.font), r = dt(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || z(e) ? (l += r.bottom, Y(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = nd(this, l, e, a);
    ue(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: u,
      textAlign: sd(a, e, n),
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
    return !this._isVisible() || this.draw !== Ce.prototype.draw ? [
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
    return rt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class wi {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    ad(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, od(t, r, s), this.override && nt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in nt[n] && (delete nt[n][s], this.override && delete de[s]);
  }
}
function od(i, t, e) {
  const s = qe(/* @__PURE__ */ Object.create(null), [
    e ? nt.get(e) : {},
    nt.get(t),
    i.defaults
  ]);
  nt.set(t, s), i.defaultRoutes && rd(t, i.defaultRoutes), i.descriptors && nt.describe(t, i.descriptors);
}
function rd(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    nt.route(o, n, l, a);
  });
}
function ad(i) {
  return "id" in i && "defaults" in i;
}
class ld {
  constructor() {
    this.controllers = new wi(Re, "datasets", !0), this.elements = new wi(yt, "elements"), this.plugins = new wi(Object, "plugins"), this.scales = new wi(Ce, "scales"), this._typedRegistries = [
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
    const n = Gs(t);
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
var Mt = /* @__PURE__ */ new ld();
class cd {
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
    const s = t && t.config, n = F(s.options && s.options.plugins, {}), o = hd(s);
    return n === !1 && !e ? [] : ud(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function hd(i) {
  const t = {}, e = [], s = Object.keys(Mt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(Mt.getPlugin(s[o]));
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
function dd(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function ud(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = dd(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: fd(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function fd(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function As(i, t) {
  const e = nt.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function gd(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function pd(i, t) {
  return i === t ? "_index_" : "_value_";
}
function no(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function bd(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Os(i, ...t) {
  if (no(i))
    return i;
  for (const e of t) {
    const s = e.axis || bd(e.position) || i.length > 1 && no(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function oo(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function md(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return oo(i, "x", e[0]) || oo(i, "y", e[0]);
  }
  return {};
}
function _d(i, t) {
  const e = de[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = As(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!z(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Os(r, a, md(r, i), nt.scales[a.type]), c = pd(l, n), h = e.scales || {};
    o[r] = Ye(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || As(a, t), h = (de[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const u = gd(d, l), f = r[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Ye(o[f], [
        {
          axis: u
        },
        s[f],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Ye(a, [
      nt.scales[a.type],
      nt.scale
    ]);
  }), o;
}
function Gr(i) {
  const t = i.options || (i.options = {});
  t.plugins = F(t.plugins, {}), t.scales = _d(i, t);
}
function jr(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function yd(i) {
  return i = i || {}, i.data = jr(i.data), Gr(i), i;
}
const ro = /* @__PURE__ */ new Map(), Xr = /* @__PURE__ */ new Set();
function Ei(i, t) {
  let e = ro.get(i);
  return e || (e = t(), ro.set(i, e), Xr.add(e)), e;
}
const Be = (i, t, e) => {
  const s = Qt(t, e);
  s !== void 0 && i.add(s);
};
class xd {
  constructor(t) {
    this._config = yd(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = jr(t);
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
    this.clearCache(), Gr(t);
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
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => Be(l, t, d))), h.forEach((d) => Be(l, n, d)), h.forEach((d) => Be(l, de[o] || {}, d)), h.forEach((d) => Be(l, nt, d)), h.forEach((d) => Be(l, ws, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Xr.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      de[e] || {},
      nt.datasets[e] || {},
      {
        type: e
      },
      nt,
      ws
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = ao(this._resolverCache, t, n);
    let l = r;
    if (Td(r, e)) {
      o.$shared = !1, s = vt(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Ee(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = ao(this._resolverCache, t, s);
    return z(e) ? Ee(o, e, void 0, n) : o;
  }
}
function ao(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: Ks(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const Sd = (i) => z(i) && Object.getOwnPropertyNames(i).some((t) => vt(i[t]));
function Td(i, t) {
  const { isScriptable: e, isIndexable: s } = wr(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (vt(a) || Sd(a)) || r && Y(a))
      return !0;
  }
  return !1;
}
var vd = "4.5.1";
const wd = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function lo(i, t) {
  return i === "top" || i === "bottom" || wd.indexOf(i) === -1 && t === "x";
}
function co(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function ho(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), U(e && e.onComplete, [
    i
  ], t);
}
function Ed(i) {
  const t = i.chart, e = t.options.animation;
  U(e && e.onProgress, [
    i
  ], t);
}
function Yr(i) {
  return Qs() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Ci = {}, uo = (i) => {
  const t = Yr(i);
  return Object.values(Ci).filter((e) => e.canvas === t).pop();
};
function Ad(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Od(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let ce = class {
  static defaults = nt;
  static instances = Ci;
  static overrides = de;
  static registry = Mt;
  static version = vd;
  static getChart = uo;
  static register(...t) {
    Mt.add(...t), fo();
  }
  static unregister(...t) {
    Mt.remove(...t), fo();
  }
  constructor(t, e) {
    const s = this.config = new xd(e), n = Yr(t), o = uo(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || Xh(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Sl(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new cd(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Bl((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], Ci[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Ft.listen(this, "complete", ho), Ft.listen(this, "progress", Ed), this._initialize(), this.attached && this.update();
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
    return Mt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : kn(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return In(this.canvas, this.ctx), this;
  }
  stop() {
    return Ft.stop(this), this;
  }
  resize(t, e) {
    Ft.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, kn(this, a, !0) && (this.notifyPlugins("resize", {
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
      const a = e[r], l = Os(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), $(o, (r) => {
      const a = r.options, l = a.id, c = Os(l, a), h = F(a.type, r.dtype);
      (a.position === void 0 || lo(a.position, c) !== lo(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const u = Mt.getScale(h);
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
      Ct.configure(this, r, r.options), Ct.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(co("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || As(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = Mt.getController(a), { datasetElementType: c, dataElementType: h } = nt.datasets[a];
        Object.assign(l, {
          dataElementType: Mt.getElement(h),
          datasetElementType: c && Mt.getElement(c)
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
    }), this._layers.sort(co("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    $(this.scales, (t) => {
      Ct.removeBox(this, t);
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
      Ad(t, n, r);
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
    Ct.update(this, this.width, this.height, t);
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
        this._updateDataset(e, vt(t) ? t({
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
    }) !== !1 && (Ft.has(this) ? this.attached && !Ft.running(this) && Ft.start(this) : (this.draw(), ho({
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
    }, n = Pr(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && ii(e, n), t.controller.draw(), n && si(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return zt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = wh.modes[e];
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
    wt(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    for (this.stop(), Ft.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), In(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Ci[this.id], this.notifyPlugins("afterDestroy");
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
    !Ii(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
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
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = Ol(t), c = Od(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, U(o.onHover, [
      t,
      a,
      this
    ], this), l && U(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !Ii(a, n);
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
function fo() {
  return $(ce.instances, (i) => i._plugins.invalidate());
}
function Rd(i, t, e) {
  const { startAngle: s, x: n, y: o, outerRadius: r, innerRadius: a, options: l } = t, { borderWidth: c, borderJoinStyle: h } = l, d = Math.min(c / r, mt(s - e));
  if (i.beginPath(), i.arc(n, o, r - c / 2, s + d / 2, e - d / 2), a > 0) {
    const u = Math.min(c / a, mt(s - e));
    i.arc(n, o, a + c / 2, e - u / 2, s + u / 2, !0);
  } else {
    const u = Math.min(c / 2, r * mt(s - e));
    if (h === "round")
      i.arc(n, o, u, e - H / 2, s + H / 2, !0);
    else if (h === "bevel") {
      const f = 2 * u * u, g = -f * Math.cos(e + H / 2) + n, p = -f * Math.sin(e + H / 2) + o, b = f * Math.cos(s + H / 2) + n, m = f * Math.sin(s + H / 2) + o;
      i.lineTo(g, p), i.lineTo(b, m);
    }
  }
  i.closePath(), i.moveTo(0, 0), i.rect(0, 0, i.canvas.width, i.canvas.height), i.clip("evenodd");
}
function Cd(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + et, s - et), i.closePath(), i.clip();
}
function Dd(i) {
  return Zs(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Id(i, t, e, s) {
  const n = Dd(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return _t(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: _t(n.innerStart, 0, r),
    innerEnd: _t(n.innerEnd, 0, r)
  };
}
function ye(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function Wi(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), u = h > 0 ? h + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const L = h > 0 ? h - s : 0, B = d > 0 ? d - s : 0, k = (L + B) / 2, K = k !== 0 ? g * k / (k + s) : g;
    f = (g - K) / 2;
  }
  const p = Math.max(1e-3, g * d - e / H) / d, b = (g - p) / 2, m = l + b + f, _ = n - b - f, { outerStart: S, outerEnd: T, innerStart: y, innerEnd: O } = Id(t, u, d, _ - m), R = d - S, C = d - T, D = m + S / R, N = _ - T / C, P = u + y, v = u + O, M = m + y / P, V = _ - O / v;
  if (i.beginPath(), o) {
    const L = (D + N) / 2;
    if (i.arc(r, a, d, D, L), i.arc(r, a, d, L, N), T > 0) {
      const Z = ye(C, N, r, a);
      i.arc(Z.x, Z.y, T, N, _ + et);
    }
    const B = ye(v, _, r, a);
    if (i.lineTo(B.x, B.y), O > 0) {
      const Z = ye(v, V, r, a);
      i.arc(Z.x, Z.y, O, _ + et, V + Math.PI);
    }
    const k = (_ - O / u + (m + y / u)) / 2;
    if (i.arc(r, a, u, _ - O / u, k, !0), i.arc(r, a, u, k, m + y / u, !0), y > 0) {
      const Z = ye(P, M, r, a);
      i.arc(Z.x, Z.y, y, M + Math.PI, m - et);
    }
    const K = ye(R, m, r, a);
    if (i.lineTo(K.x, K.y), S > 0) {
      const Z = ye(R, D, r, a);
      i.arc(Z.x, Z.y, S, m - et, D);
    }
  } else {
    i.moveTo(r, a);
    const L = Math.cos(D) * d + r, B = Math.sin(D) * d + a;
    i.lineTo(L, B);
    const k = Math.cos(N) * d + r, K = Math.sin(N) * d + a;
    i.lineTo(k, K);
  }
  i.closePath();
}
function Ld(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Wi(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % q || q));
  }
  return Wi(i, t, e, s, l, n), i.fill(), l;
}
function Md(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h, borderDash: d, borderDashOffset: u, borderRadius: f } = l, g = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(d || []), i.lineDashOffset = u, g ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let p = t.endAngle;
  if (o) {
    Wi(i, t, e, s, p, n);
    for (let b = 0; b < o; ++b)
      i.stroke();
    isNaN(a) || (p = r + (a % q || q));
  }
  g && Cd(i, t, p), l.selfJoin && p - r >= H && f === 0 && h !== "miter" && Rd(i, t, p), o || (Wi(i, t, e, s, p, n), i.stroke());
}
class kd extends yt {
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
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), u = (this.options.spacing + this.options.borderWidth) / 2, f = F(d, l - a), g = Je(o, a, l) && a !== l, p = f >= q || g, b = Ht(r, c + u, h + u);
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
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Ld(t, this, c, o, r), Md(t, this, c, o, r), t.restore();
  }
}
function Ur(i, t, e = t) {
  i.lineCap = F(e.borderCapStyle, t.borderCapStyle), i.setLineDash(F(e.borderDash, t.borderDash)), i.lineDashOffset = F(e.borderDashOffset, t.borderDashOffset), i.lineJoin = F(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = F(e.borderWidth, t.borderWidth), i.strokeStyle = F(e.borderColor, t.borderColor);
}
function Pd(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Nd(i) {
  return i.stepped ? Ql : i.tension || i.cubicInterpolationMode === "monotone" ? tc : Pd;
}
function $r(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function Fd(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = $r(n, e, s), h = Nd(o);
  let { move: d = !0, reverse: u } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(a + (u ? c - f : f)) % r], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, u, o.stepped), p = g);
  return l && (g = n[(a + (u ? c : 0)) % r], h(i, p, g, u, o.stepped)), !!l;
}
function Bd(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = $r(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, d = 0, u, f, g, p, b, m;
  const _ = (T) => (r + (c ? a - T : T)) % o, S = () => {
    p !== b && (i.lineTo(h, b), i.lineTo(h, p), i.lineTo(h, m));
  };
  for (l && (f = n[_(0)], i.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = n[_(u)], f.skip)
      continue;
    const T = f.x, y = f.y, O = T | 0;
    O === g ? (y < p ? p = y : y > b && (b = y), h = (d * h + T) / ++d) : (S(), i.lineTo(T, y), g = O, d = 0, p = b = y), m = y;
  }
  S();
}
function Rs(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Bd : Fd;
}
function Wd(i) {
  return i.stepped ? Lc : i.tension || i.cubicInterpolationMode === "monotone" ? Mc : oe;
}
function Hd(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), Ur(i, t.options), i.stroke(n);
}
function zd(i, t, e, s) {
  const { segments: n, options: o } = t, r = Rs(t);
  for (const a of n)
    Ur(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Vd = typeof Path2D == "function";
function Gd(i, t, e, s) {
  Vd && !t.options.segment ? Hd(i, t, e, s) : zd(i, t, e, s);
}
class Ui extends yt {
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
      wc(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Wc(this, this.options.segment));
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
    const s = this.options, n = t[e], o = this.points, r = kr(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = Wd(s);
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
    return Rs(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = Rs(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), Gd(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function go(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class jd extends yt {
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
    return go(this, t, "x", e);
  }
  inYRange(t, e) {
    return go(this, t, "y", e);
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
    this.skip || s.radius < 0.1 || !zt(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Es(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function Zr(i, t) {
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
function Zt(i, t, e, s) {
  return i ? 0 : _t(t, e, s);
}
function Xd(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = vr(s);
  return {
    t: Zt(n.top, o.top, 0, e),
    r: Zt(n.right, o.right, 0, t),
    b: Zt(n.bottom, o.bottom, 0, e),
    l: Zt(n.left, o.left, 0, t)
  };
}
function Yd(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = qt(n), r = Math.min(t, e), a = i.borderSkipped, l = s || z(n);
  return {
    topLeft: Zt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Zt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Zt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Zt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Ud(i) {
  const t = Zr(i), e = t.right - t.left, s = t.bottom - t.top, n = Xd(i, e / 2, s / 2), o = Yd(i, e / 2, s / 2);
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
  const n = t === null, o = e === null, a = i && !(n && o) && Zr(i, s);
  return a && (n || Ht(t, a.left, a.right)) && (o || Ht(e, a.top, a.bottom));
}
function $d(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Zd(i, t) {
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
class Kd extends yt {
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
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = Ud(this), a = $d(r.radius) ? we : Zd;
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
function qd(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = $i(l, c, n);
    const h = Cs(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: h,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const d = kr(t, h);
    for (const u of d) {
      const f = Cs(e, o[u.start], o[u.end], u.loop), g = Mr(a, n, f);
      for (const p of g)
        r.push({
          source: p,
          target: u,
          start: {
            [e]: po(h, f, "start", Math.max)
          },
          end: {
            [e]: po(h, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Cs(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = mt(n), o = mt(o)), {
    property: i,
    start: n,
    end: o
  };
}
function Jd(i, t) {
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
function po(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Kr(i, t) {
  let e = [], s = !1;
  return Y(i) ? (s = !0, e = i) : e = Jd(i, t), e.length ? new Ui({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function bo(i) {
  return i && i.fill !== !1;
}
function Qd(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!ht(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function tu(i, t, e) {
  const s = nu(i);
  if (z(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return ht(n) && Math.floor(n) === n ? eu(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function eu(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function iu(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : z(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function su(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : z(i) ? s = i.value : s = t.getBaseValue(), s;
}
function nu(i) {
  const t = i.options, e = t.fill;
  let s = F(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function ou(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = ru(t, e);
  a.push(Kr({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      au(n, r[h], a);
  }
  return new Ui({
    points: n,
    options: {}
  });
}
function ru(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function au(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = lu(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function lu(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], d = r[h.start][e], u = r[h.end][e];
    if (Ht(n, d, u)) {
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
class qr {
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
function cu(i) {
  const { chart: t, fill: e, line: s } = i;
  if (ht(e))
    return hu(t, e);
  if (e === "stack")
    return ou(i);
  if (e === "shape")
    return !0;
  const n = du(i);
  return n instanceof qr ? n : Kr(n, s);
}
function hu(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function du(i) {
  return (i.scale || {}).getPointPositionForValue ? fu(i) : uu(i);
}
function uu(i) {
  const { scale: t = {}, fill: e } = i, s = iu(e, t);
  if (ht(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function fu(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = su(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new qr({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < n; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function bs(i, t, e) {
  const s = cu(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, h = c.fill, d = c.backgroundColor, { above: u = d, below: f = d } = h || {}, g = n.getDatasetMeta(o), p = Pr(n, g);
  s && r.points.length && (ii(i, e), gu(i, {
    line: r,
    target: s,
    above: u,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: p
  }), si(i));
}
function gu(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  i.save();
  let h = o;
  o !== n && (c === "x" ? (mo(i, s, r.top), ms(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), mo(i, s, r.bottom)) : c === "y" && (_o(i, s, r.left), ms(i, {
    line: e,
    target: s,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), _o(i, s, r.right), h = n)), ms(i, {
    line: e,
    target: s,
    color: h,
    scale: a,
    property: c,
    clip: l
  }), i.restore();
}
function mo(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], d = n[$i(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(d.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function _o(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], d = n[$i(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(e, h.y), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(e, d.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function ms(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = qd(e, s, n);
  for (const { source: c, target: h, start: d, end: u } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, g = s !== !0;
    i.save(), i.fillStyle = f, pu(i, r, a, g && Cs(n, d, u)), i.beginPath();
    const p = !!e.pathSegment(i, c);
    let b;
    if (g) {
      p ? i.closePath() : yo(i, s, u, n);
      const m = !!s.pathSegment(i, h, {
        move: p,
        reverse: !0
      });
      b = p && m, b || yo(i, s, d, n);
    }
    i.closePath(), i.fill(b ? "evenodd" : "nonzero"), i.restore();
  }
}
function pu(i, t, e, s) {
  const n = t.chart.chartArea, { property: o, start: r, end: a } = s || {};
  if (o === "x" || o === "y") {
    let l, c, h, d;
    o === "x" ? (l = r, c = n.top, h = a, d = n.bottom) : (l = n.left, c = r, h = n.right, d = a), i.beginPath(), e && (l = Math.max(l, e.left), h = Math.min(h, e.right), c = Math.max(c, e.top), d = Math.min(d, e.bottom)), i.rect(l, c, h - l, d - c), i.clip();
  }
}
function yo(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var bu = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Ui && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: tu(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = Qd(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && bs(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      bo(o) && bs(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !bo(s) || e.drawTime !== "beforeDatasetDraw" || bs(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const xo = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, mu = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class So extends yt {
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
    const s = t.labels, n = rt(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = xo(s, o);
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
      const { itemWidth: _, itemHeight: S } = _u(s, e, o, b, n);
      m > 0 && f + S + 2 * a > h && (d += u + a, c.push({
        width: u,
        height: f
      }), g += u + a, p++, u = f = 0), l[m] = {
        left: g,
        top: f,
        col: p,
        width: _,
        height: S
      }, u = Math.max(u, _), f += S + a;
    }), d += u, c.push({
      width: u,
      height: f
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = Te(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = bt(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = bt(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = bt(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = bt(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ii(t, this), this._draw(), si(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = nt.color, l = Te(t.rtl, this.left, this.width), c = rt(r.font), { padding: h } = r, d = c.size, u = d / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: b } = xo(r, d), m = function(O, R, C) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const D = F(C.lineWidth, 1);
      if (n.fillStyle = F(C.fillStyle, a), n.lineCap = F(C.lineCap, "butt"), n.lineDashOffset = F(C.lineDashOffset, 0), n.lineJoin = F(C.lineJoin, "miter"), n.lineWidth = D, n.strokeStyle = F(C.strokeStyle, a), n.setLineDash(F(C.lineDash, [])), r.usePointStyle) {
        const N = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: C.pointStyle,
          rotation: C.rotation,
          borderWidth: D
        }, P = l.xPlus(O, g / 2), v = R + u;
        Tr(n, N, P, v, r.pointStyleWidth && g);
      } else {
        const N = R + Math.max((d - p) / 2, 0), P = l.leftForLtr(O, g), v = qt(C.borderRadius);
        n.beginPath(), Object.values(v).some((M) => M !== 0) ? we(n, {
          x: P,
          y: N,
          w: g,
          h: p,
          radius: v
        }) : n.rect(P, N, g, p), n.fill(), D !== 0 && n.stroke();
      }
      n.restore();
    }, _ = function(O, R, C) {
      ue(n, C.text, O, R + b / 2, c, {
        strikethrough: C.hidden,
        textAlign: l.textAlign(C.textAlign)
      });
    }, S = this.isHorizontal(), T = this._computeTitleHeight();
    S ? f = {
      x: bt(o, this.left + h, this.right - s[0]),
      y: this.top + h + T,
      line: 0
    } : f = {
      x: this.left + h,
      y: bt(o, this.top + T + h, this.bottom - e[0].height),
      line: 0
    }, Dr(this.ctx, t.textDirection);
    const y = b + h;
    this.legendItems.forEach((O, R) => {
      n.strokeStyle = O.fontColor, n.fillStyle = O.fontColor;
      const C = n.measureText(O.text).width, D = l.textAlign(O.textAlign || (O.textAlign = r.textAlign)), N = g + u + C;
      let P = f.x, v = f.y;
      l.setWidth(this.width), S ? R > 0 && P + N + h > this.right && (v = f.y += y, f.line++, P = f.x = bt(o, this.left + h, this.right - s[f.line])) : R > 0 && v + y > this.bottom && (P = f.x = P + e[f.line].width + h, f.line++, v = f.y = bt(o, this.top + T + h, this.bottom - e[f.line].height));
      const M = l.x(P);
      if (m(M, v, O), P = Wl(D, P + g + u, S ? P + N : this.right, t.rtl), _(l.x(P), v, O), S)
        f.x += N + h;
      else if (typeof O.text != "string") {
        const V = c.lineHeight;
        f.y += Jr(O, V) + h;
      } else
        f.y += y;
    }), Ir(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = rt(e.font), n = dt(e.padding);
    if (!e.display)
      return;
    const o = Te(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), h = this.top + c, d = bt(t.align, d, this.right - u);
    else {
      const g = this.columnSizes.reduce((p, b) => Math.max(p, b.height), 0);
      h = c + bt(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = bt(a, d, d + u);
    r.textAlign = o.textAlign(Ys(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, ue(r, e.text, f, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = rt(t.font), s = dt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Ht(t, this.left, this.right) && Ht(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Ht(t, n.left, n.left + n.width) && Ht(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!Su(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = mu(n, s);
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
function _u(i, t, e, s, n) {
  const o = yu(s, i, t, e), r = xu(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function yu(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function xu(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = Jr(t, e)), s;
}
function Jr(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function Su(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var Tu = {
  id: "legend",
  _element: So,
  start(i, t, e) {
    const s = i.legend = new So({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    Ct.configure(i, s, e), Ct.addBox(i, s);
  },
  stop(i) {
    Ct.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    Ct.configure(i, s, e), s.options = e;
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
          const c = l.controller.getStyle(e ? 0 : void 0), h = dt(c.borderWidth);
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
class Qr extends yt {
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
    this._padding = dt(s.padding);
    const o = n * rt(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = bt(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = bt(a, n, e), l = H * -0.5) : (h = o - t, d = bt(a, e, n), l = H * 0.5), c = n - e), {
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
    const s = rt(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    ue(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Ys(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function vu(i, t) {
  const e = new Qr({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  Ct.configure(i, e, t), Ct.addBox(i, e), i.titleBlock = e;
}
var wu = {
  id: "title",
  _element: Qr,
  start(i, t, e) {
    vu(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    Ct.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    Ct.configure(i, s, e), s.options = e;
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
const je = {
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
        const c = l.getCenterPoint(), h = ve(t, c);
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
function Lt(i, t) {
  return t && (Y(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Bt(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Eu(i, t) {
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
function To(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = rt(t.bodyFont), c = rt(t.titleFont), h = rt(t.footerFont), d = o.length, u = n.length, f = s.length, g = dt(t.padding);
  let p = g.height, b = 0, m = s.reduce((T, y) => T + y.before.length + y.lines.length + y.after.length, 0);
  if (m += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), m) {
    const T = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * T + (m - f) * l.lineHeight + (m - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let _ = 0;
  const S = function(T) {
    b = Math.max(b, e.measureText(T).width + _);
  };
  return e.save(), e.font = c.string, $(i.title, S), e.font = l.string, $(i.beforeBody.concat(i.afterBody), S), _ = t.displayColors ? r + 2 + t.boxPadding : 0, $(s, (T) => {
    $(T.before, S), $(T.lines, S), $(T.after, S);
  }), _ = 0, e.font = h.string, $(i.footer, S), e.restore(), b += g.width, {
    width: b,
    height: p
  };
}
function Au(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Ou(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function Ru(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Ou(c, i, t, e) && (c = "center"), c;
}
function vo(i, t, e) {
  const s = e.yAlign || t.yAlign || Au(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Ru(i, t, e, s),
    yAlign: s
  };
}
function Cu(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Du(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function wo(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = qt(r);
  let g = Cu(t, a);
  const p = Du(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, u) + n : a === "right" && (g += Math.max(d, f) + n), {
    x: _t(g, 0, s.width - t.width),
    y: _t(p, 0, s.height - t.height)
  };
}
function Ai(i, t, e) {
  const s = dt(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function Eo(i) {
  return Lt([], Bt(i));
}
function Iu(i, t, e) {
  return ee(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Ao(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const ta = {
  beforeTitle: Nt,
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
  afterTitle: Nt,
  beforeBody: Nt,
  beforeLabel: Nt,
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
  afterLabel: Nt,
  afterBody: Nt,
  beforeFooter: Nt,
  footer: Nt,
  afterFooter: Nt
};
function St(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? ta[t].call(e, s) : n;
}
class Oo extends yt {
  static positioners = je;
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
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new en(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Iu(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = St(s, "beforeTitle", this, t), o = St(s, "title", this, t), r = St(s, "afterTitle", this, t);
    let a = [];
    return a = Lt(a, Bt(n)), a = Lt(a, Bt(o)), a = Lt(a, Bt(r)), a;
  }
  getBeforeBody(t, e) {
    return Eo(St(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return $(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Ao(s, o);
      Lt(r.before, Bt(St(a, "beforeLabel", this, o))), Lt(r.lines, St(a, "label", this, o)), Lt(r.after, Bt(St(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return Eo(St(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = St(s, "beforeFooter", this, t), o = St(s, "footer", this, t), r = St(s, "afterFooter", this, t);
    let a = [];
    return a = Lt(a, Bt(n)), a = Lt(a, Bt(o)), a = Lt(a, Bt(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Eu(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))), $(a, (h) => {
      const d = Ao(t.callbacks, h);
      n.push(St(d, "labelColor", this, h)), o.push(St(d, "labelPointStyle", this, h)), r.push(St(d, "labelTextColor", this, h));
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
      const a = je[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = To(this, s), c = Object.assign({}, a, l), h = vo(this.chart, s, c), d = wo(s, c, h, this.chart);
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
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = qt(a), { x: u, y: f } = t, { width: g, height: p } = e;
    let b, m, _, S, T, y;
    return o === "center" ? (T = f + p / 2, n === "left" ? (b = u, m = b - r, S = T + r, y = T - r) : (b = u + g, m = b + r, S = T - r, y = T + r), _ = b) : (n === "left" ? m = u + Math.max(l, h) + r : n === "right" ? m = u + g - Math.max(c, d) - r : m = this.caretX, o === "top" ? (S = f, T = S - r, b = m - r, _ = m + r) : (S = f + p, T = S + r, b = m + r, _ = m - r), y = S), {
      x1: b,
      x2: m,
      x3: _,
      y1: S,
      y2: T,
      y3: y
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = Te(s.rtl, this.x, this.width);
      for (t.x = Ai(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = rt(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, h = rt(o.bodyFont), d = Ai(this, "left", o), u = n.x(d), f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, g = e.y + f;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, b = n.leftForLtr(u, c) + c / 2, m = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Es(t, p, b, m), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Es(t, p, b, m);
    } else {
      t.lineWidth = z(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const p = n.leftForLtr(u, c), b = n.leftForLtr(n.xPlus(u, 1), c - 2), m = qt(r.borderRadius);
      Object.values(m).some((_) => _ !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, we(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: m
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), we(t, {
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
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = rt(s.bodyFont);
    let u = d.lineHeight, f = 0;
    const g = Te(s.rtl, this.x, this.width), p = function(C) {
      e.fillText(C, g.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, b = g.textAlign(r);
    let m, _, S, T, y, O, R;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = Ai(this, b, s), e.fillStyle = s.bodyColor, $(this.beforeBody, p), f = a && b !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, T = 0, O = n.length; T < O; ++T) {
      for (m = n[T], _ = this.labelTextColors[T], e.fillStyle = _, $(m.before, p), S = m.lines, a && S.length && (this._drawColorBox(e, t, T, g, s), u = Math.max(d.lineHeight, l)), y = 0, R = S.length; y < R; ++y)
        p(S[y]), u = d.lineHeight;
      $(m.after, p);
    }
    f = 0, u = d.lineHeight, $(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = Te(s.rtl, this.x, this.width);
      for (t.x = Ai(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = rt(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: g } = qt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = je[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = To(this, t), l = Object.assign({}, r, this._size), c = vo(e, t, l), h = wo(t, l, c, e);
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
    const r = dt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Dr(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Ir(t, e.textDirection), t.restore());
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
    }), o = !Ii(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !Ii(r, o) || a;
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
    const { caretX: s, caretY: n, options: o } = this, r = je[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var Lu = {
  id: "tooltip",
  _element: Oo,
  positioners: je,
  afterInit(i, t, e) {
    e && (i.tooltip = new Oo({
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
    callbacks: ta
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
const Mu = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function ku(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Mu(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Pu = (i, t) => i === null ? null : _t(Math.round(i), 0, t);
function Ro(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Nu extends Ce {
  static id = "category";
  static defaults = {
    ticks: {
      callback: Ro
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
    return e = isFinite(e) && s[e] === t ? e : ku(s, t, F(e, t), this._addedLabels), Pu(e, s.length - 1);
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
    return Ro.call(this, t);
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
function Fu(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = i, f = o || 1, g = h - 1, { min: p, max: b } = t, m = !X(r), _ = !X(a), S = !X(c), T = (b - p) / (d + 1);
  let y = wn((b - p) / g / f) * f, O, R, C, D;
  if (y < 1e-14 && !m && !_)
    return [
      {
        value: p
      },
      {
        value: b
      }
    ];
  D = Math.ceil(b / y) - Math.floor(p / y), D > g && (y = wn(D * y / g / f) * f), X(l) || (O = Math.pow(10, l), y = Math.ceil(y * O) / O), n === "ticks" ? (R = Math.floor(p / y) * y, C = Math.ceil(b / y) * y) : (R = p, C = b), m && _ && o && Il((a - r) / o, y / 1e3) ? (D = Math.round(Math.min((a - r) / y, h)), y = (a - r) / D, R = r, C = a) : S ? (R = m ? r : R, C = _ ? a : C, D = c - 1, y = (C - R) / D) : (D = (C - R) / y, Ue(D, Math.round(D), y / 1e3) ? D = Math.round(D) : D = Math.ceil(D));
  const N = Math.max(En(y), En(R));
  O = Math.pow(10, X(l) ? N : l), R = Math.round(R * O) / O, C = Math.round(C * O) / O;
  let P = 0;
  for (m && (u && R !== r ? (e.push({
    value: r
  }), R < r && P++, Ue(Math.round((R + P * y) * O) / O, r, Co(r, T, i)) && P++) : R < r && P++); P < D; ++P) {
    const v = Math.round((R + P * y) * O) / O;
    if (_ && v > a)
      break;
    e.push({
      value: v
    });
  }
  return _ && u && C !== a ? e.length && Ue(e[e.length - 1].value, a, Co(a, T, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!_ || C === a) && e.push({
    value: C
  }), e;
}
function Co(i, t, { horizontal: e, minRotation: s }) {
  const n = ct(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Ds extends Ce {
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
      const l = kt(n), c = kt(o);
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
    }, o = this._range || this, r = Fu(n, o);
    return t.bounds === "ticks" && Ll(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
class Bu extends Ds {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: $s.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = ht(t) ? t : 0, this.max = ht(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = ct(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
function Is(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = dt(t.backdropPadding);
    return F(t.font && t.font.size, nt.font.size) + e.height;
  }
  return 0;
}
function Wu(i, t, e) {
  return e = Y(e) ? e : [
    e
  ], {
    w: Jl(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Do(i, t, e, s, n) {
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
function Hu(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? H / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + n[l], a), d = rt(c.font), u = Wu(i.ctx, d, i._pointLabels[l]);
    s[l] = u;
    const f = mt(i.getIndexAngle(l) + a), g = Math.round(Gi(f)), p = Do(g, h.x, u.w, 0, 180), b = Do(g, h.y, u.h, 90, 270);
    zu(e, t, f, p, b);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = ju(i, s, n);
}
function zu(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Vu(i, t, e) {
  const s = i.drawingArea, { extra: n, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, s + n + r, o), c = Math.round(Gi(mt(l.angle + et))), h = Uu(l.y, a.h, c), d = Xu(c), u = Yu(l.x, a.w, d);
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
function Gu(i, t) {
  if (!t)
    return !0;
  const { left: e, top: s, right: n, bottom: o } = i;
  return !(zt({
    x: e,
    y: s
  }, t) || zt({
    x: e,
    y: o
  }, t) || zt({
    x: n,
    y: s
  }, t) || zt({
    x: n,
    y: o
  }, t));
}
function ju(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: Is(o) / 2,
    additionalAngle: r ? H / n : 0
  };
  let c;
  for (let h = 0; h < n; h++) {
    l.padding = e[h], l.size = t[h];
    const d = Vu(i, h, l);
    s.push(d), a === "auto" && (d.visible = Gu(d, c), d.visible && (c = d));
  }
  return s;
}
function Xu(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function Yu(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Uu(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function $u(i, t, e) {
  const { left: s, top: n, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!X(a)) {
    const l = qt(t.borderRadius), c = dt(t.backdropPadding);
    i.fillStyle = a;
    const h = s - c.left, d = n - c.top, u = o - s + c.width, f = r - n + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), we(i, {
      x: h,
      y: d,
      w: u,
      h: f,
      radius: l
    }), i.fill()) : i.fillRect(h, d, u, f);
  }
}
function Zu(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = i._pointLabelItems[n];
    if (!o.visible)
      continue;
    const r = s.setContext(i.getPointLabelContext(n));
    $u(e, r, o);
    const a = rt(r.font), { x: l, y: c, textAlign: h } = o;
    ue(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function ea(i, t, e, s) {
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
function Ku(i, t, e, s, n) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash || []), o.lineDashOffset = n.dashOffset, o.beginPath(), ea(i, e, r, s), o.closePath(), o.stroke(), o.restore());
}
function qu(i, t, e) {
  return ee(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Ju extends Ds {
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
      callback: $s.formatters.numeric
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
    const t = this._padding = dt(Is(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = ht(t) && !isNaN(t) ? t : 0, this.max = ht(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Is(this.options));
  }
  generateTickLabels(t) {
    Ds.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = U(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Hu(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = q / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return mt(t * e + ct(s));
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
      return qu(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - et + s;
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
      s.save(), s.beginPath(), ea(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && Zu(this, r), n.display && this.ticks.forEach((h, d) => {
      if (d !== 0 || d === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const u = this.getContext(d), f = n.setContext(u), g = o.setContext(u);
        Ku(this, f, l, r, g);
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
      const c = s.setContext(this.getContext(l)), h = rt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const d = dt(c.backdropPadding);
        t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
      }
      ue(t, a.label, 0, -o, h, {
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
}, Tt = /* @__PURE__ */ Object.keys(Zi);
function Io(i, t) {
  return i - t;
}
function Lo(i, t) {
  if (X(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), ht(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (he(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function Mo(i, t, e, s) {
  const n = Tt.length;
  for (let o = Tt.indexOf(i); o < n - 1; ++o) {
    const r = Zi[Tt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return Tt[o];
  }
  return Tt[n - 1];
}
function Qu(i, t, e, s, n) {
  for (let o = Tt.length - 1; o >= Tt.indexOf(e); o--) {
    const r = Tt[o];
    if (Zi[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return Tt[e ? Tt.indexOf(e) : 0];
}
function tf(i) {
  for (let t = Tt.indexOf(i) + 1, e = Tt.length; t < e; ++t)
    if (Zi[Tt[t]].common)
      return Tt[t];
}
function ko(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Xs(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function ef(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Po(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : ef(i, s, n, e);
}
class No extends Ce {
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
    const s = t.time || (t.time = {}), n = this._adapter = new yh._date(t.adapters.date);
    n.init(e), Ye(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Lo(this, t);
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = ht(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = ht(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
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
    const o = this.min, r = this.max, a = Nl(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? Mo(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Qu(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : tf(this._unit), this.initOffsets(n), t.reverse && a.reverse(), Po(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = _t(e, 0, r), s = _t(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || Mo(o.minUnit, e, s, this._getLabelCapacity(e)), a = F(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = he(l) || l === !0, h = {};
    let d = e, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < s; u = +t.add(u, a, r), f++)
      ko(h, u, g);
    return (u === s || n.bounds === "ticks" || f === 1) && ko(h, u, g), Object.keys(h).sort(Io).map((p) => +p);
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
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = ct(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, Po(this, [
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
      t.push(Lo(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return yr(t.sort(Io));
  }
}
function Oi(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = re(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = re(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class wp extends No {
  static id = "timeseries";
  static defaults = No.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Oi(e, this.min), this._tableRange = Oi(e, this.max) - this._minPos, super.initOffsets(t);
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
    return (Oi(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Oi(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const ia = {
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
}, sf = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, nf = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...ia,
  ...sf
}, of = Ba[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function xe(i) {
  return rr(i) ? Ts(i) : i;
}
function rf(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return rr(t) ? new Proxy(i, {}) : i;
}
function af(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function sa(i, t) {
  i.labels = t;
}
function na(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function lf(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return sa(e, i.labels), na(e, i.datasets, t), e;
}
const cf = Vi({
  props: nf,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = ze(null), o = nr(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: h, options: d, plugins: u, datasetIdKey: f } = i, g = lf(h, f), p = rf(g, h);
      o.value = new ce(n.value, {
        type: c,
        data: p,
        options: {
          ...d
        },
        plugins: u
      });
    }, a = () => {
      const c = Ts(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return Ws(r), or(a), Ss([
      () => i.options,
      () => i.data
    ], (c, h) => {
      let [d, u] = c, [f, g] = h;
      const p = Ts(o.value);
      if (!p)
        return;
      let b = !1;
      if (d) {
        const m = xe(d), _ = xe(f);
        m && m !== _ && (af(p, m), b = !0);
      }
      if (u) {
        const m = xe(u.labels), _ = xe(g.labels), S = xe(u.datasets), T = xe(g.datasets);
        m !== _ && (sa(p.config.data, m), b = !0), S && S !== T && (na(p.config.data, S, i.datasetIdKey), b = !0);
      }
      b && Fa(() => {
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
function De(i, t) {
  return ce.register(t), Vi({
    props: ia,
    setup(e, s) {
      let { expose: n } = s;
      const o = nr(null), r = (a) => {
        o.value = a?.chart;
      };
      return n({
        chart: o
      }), () => xs(cf, of({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const _s = /* @__PURE__ */ De("bar", fh), hf = /* @__PURE__ */ De("doughnut", sn), df = /* @__PURE__ */ De("line", ph), uf = /* @__PURE__ */ De("pie", mh), ff = /* @__PURE__ */ De("polarArea", bh), gf = /* @__PURE__ */ De("radar", _h);
/*!
* chartjs-plugin-annotation v3.1.0
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2024 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */
const Fo = {
  modes: {
    /**
     * Point mode returns all elements that hit test based on the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @return {AnnotationElement[]} - elements that are found
     */
    point(i, t) {
      return Di(i, t, { intersect: !0 });
    },
    /**
     * Nearest mode returns the element closest to the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found (only 1 element)
     */
    nearest(i, t, e) {
      return mf(i, t, e);
    },
    /**
     * x mode returns the elements that hit-test at the current x coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    x(i, t, e) {
      return Di(i, t, { intersect: e.intersect, axis: "x" });
    },
    /**
     * y mode returns the elements that hit-test at the current y coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    y(i, t, e) {
      return Di(i, t, { intersect: e.intersect, axis: "y" });
    }
  }
};
function on(i, t, e) {
  return (Fo.modes[e.mode] || Fo.modes.nearest)(i, t, e);
}
function pf(i, t, e) {
  return e !== "x" && e !== "y" ? i.inRange(t.x, t.y, "x", !0) || i.inRange(t.x, t.y, "y", !0) : i.inRange(t.x, t.y, e, !0);
}
function bf(i, t, e) {
  return e === "x" ? { x: i.x, y: t.y } : e === "y" ? { x: t.x, y: i.y } : t;
}
function Di(i, t, e) {
  return i.filter((s) => e.intersect ? s.inRange(t.x, t.y) : pf(s, t, e.axis));
}
function mf(i, t, e) {
  let s = Number.POSITIVE_INFINITY;
  return Di(i, t, e).reduce((n, o) => {
    const r = o.getCenterPoint(), a = bf(t, r, e.axis), l = ve(t, a);
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
const _f = (i, t) => t > i || i.length > t.length && i.slice(0, t.length) === t, ae = 1e-3, Ki = (i, t, e) => Math.min(e, Math.max(t, i)), oa = (i, t) => i.value >= i.start - t && i.value <= i.end + t;
function yf(i, t, e) {
  for (const s of Object.keys(i))
    i[s] = Ki(i[s], t, e);
  return i;
}
function xf(i, t, e, s) {
  return !i || !t || e <= 0 ? !1 : Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2) <= Math.pow(e + s, 2);
}
function ra(i, { x: t, y: e, x2: s, y2: n }, o, { borderWidth: r, hitTolerance: a }) {
  const l = (r + a) / 2, c = i.x >= t - l - ae && i.x <= s + l + ae, h = i.y >= e - l - ae && i.y <= n + l + ae;
  return o === "x" ? c : (o === "y" || c) && h;
}
function aa(i, { rect: t, center: e }, s, { rotation: n, borderWidth: o, hitTolerance: r }) {
  const a = ge(i, e, ct(-n));
  return ra(a, t, s, { borderWidth: o, hitTolerance: r });
}
function pe(i, t) {
  const { centerX: e, centerY: s } = i.getProps(["centerX", "centerY"], t);
  return { x: e, y: s };
}
function Sf(i, t, e, s = !0) {
  const n = e.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = n[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (_f(a, r)) {
      if (s)
        throw new Error(`${i} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const la = (i) => typeof i == "string" && i.endsWith("%"), ca = (i) => parseFloat(i) / 100, ha = (i) => Ki(ca(i), 0, 1), We = (i, t) => ({ x: i, y: t, x2: i, y2: t, width: 0, height: 0 }), Tf = {
  box: (i) => We(i.centerX, i.centerY),
  doughnutLabel: (i) => We(i.centerX, i.centerY),
  ellipse: (i) => ({ centerX: i.centerX, centerY: i.centerX, radius: 0, width: 0, height: 0 }),
  label: (i) => We(i.centerX, i.centerY),
  line: (i) => We(i.x, i.y),
  point: (i) => ({ centerX: i.centerX, centerY: i.centerY, radius: 0, width: 0, height: 0 }),
  polygon: (i) => We(i.centerX, i.centerY)
};
function rn(i, t) {
  return t === "start" ? 0 : t === "end" ? i : la(t) ? ha(t) * i : i / 2;
}
function te(i, t, e = !0) {
  return typeof t == "number" ? t : la(t) ? (e ? ha(t) : ca(t)) * i : i;
}
function vf(i, t) {
  const { x: e, width: s } = i, n = t.textAlign;
  return n === "center" ? e + s / 2 : n === "end" || n === "right" ? e + s : e;
}
function da(i, t, { borderWidth: e, position: s, xAdjust: n, yAdjust: o }, r) {
  const a = z(r), l = t.width + (a ? r.width : 0) + e, c = t.height + (a ? r.height : 0) + e, h = an(s), d = Bo(i.x, l, n, h.x), u = Bo(i.y, c, o, h.y);
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
function an(i, t = "center") {
  return z(i) ? {
    x: F(i.x, t),
    y: F(i.y, t)
  } : (i = F(i, t), {
    x: i,
    y: i
  });
}
const ua = (i, t) => i && i.autoFit && t < 1;
function fa(i, t) {
  const e = i.font, s = Y(e) ? e : [e];
  return ua(i, t) ? s.map(function(n) {
    const o = rt(n);
    return o.size = Math.floor(n.size * t), o.lineHeight = n.lineHeight, rt(o);
  }) : s.map((n) => rt(n));
}
function ga(i) {
  return i && (wt(i.xValue) || wt(i.yValue));
}
function Bo(i, t, e = 0, s) {
  return i - rn(t, s) + e;
}
function Ie(i, t, e) {
  const s = e.init;
  if (s) {
    if (s === !0)
      return ba(t, e);
  } else return;
  return wf(i, t, e);
}
function pa(i, t, e) {
  let s = !1;
  return t.forEach((n) => {
    vt(i[n]) ? (s = !0, e[n] = i[n]) : wt(e[n]) && delete e[n];
  }), s;
}
function ba(i, t) {
  const e = t.type || "line";
  return Tf[e](i);
}
function wf(i, t, e) {
  const s = U(e.init, [{ chart: i, properties: t, options: e }]);
  if (s === !0)
    return ba(t, e);
  if (z(s))
    return s;
}
const ys = /* @__PURE__ */ new Map(), Ef = (i) => isNaN(i) || i <= 0, Af = (i) => i.reduce(function(t, e) {
  return t += e.string, t;
}, "");
function qi(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function Ji(i, { x: t, y: e }, s) {
  s && (i.translate(t, e), i.rotate(ct(s)), i.translate(-t, -e));
}
function Vt(i, t) {
  if (t && t.borderWidth)
    return i.lineCap = t.borderCapStyle || "butt", i.setLineDash(t.borderDash), i.lineDashOffset = t.borderDashOffset, i.lineJoin = t.borderJoinStyle || "miter", i.lineWidth = t.borderWidth, i.strokeStyle = t.borderColor, !0;
}
function Le(i, t) {
  i.shadowColor = t.backgroundShadowColor, i.shadowBlur = t.shadowBlur, i.shadowOffsetX = t.shadowOffsetX, i.shadowOffsetY = t.shadowOffsetY;
}
function Qi(i, t) {
  const e = t.content;
  if (qi(e))
    return {
      width: te(e.width, t.width),
      height: te(e.height, t.height)
    };
  const s = fa(t), n = t.textStrokeWidth, o = Y(e) ? e : [e], r = o.join() + Af(s) + n + (i._measureText ? "-spriting" : "");
  return ys.has(r) || ys.set(r, Df(i, o, s, n)), ys.get(r);
}
function ma(i, t, e) {
  const { x: s, y: n, width: o, height: r } = t;
  i.save(), Le(i, e);
  const a = Vt(i, e);
  i.fillStyle = e.backgroundColor, i.beginPath(), we(i, {
    x: s,
    y: n,
    w: o,
    h: r,
    radius: yf(qt(e.borderRadius), 0, Math.min(o, r) / 2)
  }), i.closePath(), i.fill(), a && (i.shadowColor = e.borderShadowColor, i.stroke()), i.restore();
}
function _a(i, t, e, s) {
  const n = e.content;
  if (qi(n)) {
    i.save(), i.globalAlpha = Mf(e.opacity, n.style.opacity), i.drawImage(n, t.x, t.y, t.width, t.height), i.restore();
    return;
  }
  const o = Y(n) ? n : [n], r = fa(e, s), a = e.color, l = Y(a) ? a : [a], c = vf(t, e), h = t.y + e.textStrokeWidth / 2;
  i.save(), i.textBaseline = "middle", i.textAlign = e.textAlign, Of(i, e) && If(i, { x: c, y: h }, o, r), Lf(i, { x: c, y: h }, o, { fonts: r, colors: l }), i.restore();
}
function Of(i, t) {
  if (t.textStrokeWidth > 0)
    return i.lineJoin = "round", i.miterLimit = 2, i.lineWidth = t.textStrokeWidth, i.strokeStyle = t.textStrokeColor, !0;
}
function Rf(i, t, e, s) {
  const { radius: n, options: o } = t, r = o.pointStyle, a = o.rotation;
  let l = (a || 0) * js;
  if (qi(r)) {
    i.save(), i.translate(e, s), i.rotate(l), i.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), i.restore();
    return;
  }
  Ef(n) || Cf(i, { x: e, y: s, radius: n, rotation: a, style: r, rad: l });
}
function Cf(i, { x: t, y: e, radius: s, rotation: n, style: o, rad: r }) {
  let a, l, c, h;
  switch (i.beginPath(), o) {
    // Default includes circle
    default:
      i.arc(t, e, s, 0, q), i.closePath();
      break;
    case "triangle":
      i.moveTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += ki, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += ki, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), i.closePath();
      break;
    case "rectRounded":
      h = s * 0.516, c = s - h, a = Math.cos(r + Rt) * c, l = Math.sin(r + Rt) * c, i.arc(t - a, e - l, h, r - H, r - et), i.arc(t + l, e - a, h, r - et, r), i.arc(t + a, e + l, h, r, r + et), i.arc(t - l, e + a, h, r + et, r + H), i.closePath();
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
function Df(i, t, e, s) {
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
function If(i, { x: t, y: e }, s, n) {
  i.beginPath();
  let o = 0;
  s.forEach(function(r, a) {
    const l = n[Math.min(a, n.length - 1)], c = l.lineHeight;
    i.font = l.string, i.strokeText(r, t, e + c / 2 + o), o += c;
  }), i.stroke();
}
function Lf(i, { x: t, y: e }, s, { fonts: n, colors: o }) {
  let r = 0;
  s.forEach(function(a, l) {
    const c = o[Math.min(l, o.length - 1)], h = n[Math.min(l, n.length - 1)], d = h.lineHeight;
    i.beginPath(), i.font = h.string, i.fillStyle = c, i.fillText(a, t, e + d / 2 + r), r += d, i.fill();
  });
}
function Mf(i, t) {
  const e = he(i) ? i : t;
  return he(e) ? Ki(e, 0, 1) : 1;
}
const ya = ["left", "bottom", "top", "right"];
function kf(i, t) {
  const { pointX: e, pointY: s, options: n } = t, o = n.callout, r = o && o.display && Wf(t, o);
  if (!r || zf(t, o, r))
    return;
  if (i.save(), i.beginPath(), !Vt(i, o))
    return i.restore();
  const { separatorStart: l, separatorEnd: c } = Pf(t, r), { sideStart: h, sideEnd: d } = Ff(t, r, l);
  (o.margin > 0 || n.borderWidth === 0) && (i.moveTo(l.x, l.y), i.lineTo(c.x, c.y)), i.moveTo(h.x, h.y), i.lineTo(d.x, d.y);
  const u = ge({ x: e, y: s }, t.getCenterPoint(), ct(-t.rotation));
  i.lineTo(u.x, u.y), i.stroke(), i.restore();
}
function Pf(i, t) {
  const { x: e, y: s, x2: n, y2: o } = i, r = Nf(i, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: s }, l = { x: a.x, y: o }) : (a = { x: e, y: s + r }, l = { x: n, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function Nf(i, t) {
  const { width: e, height: s, options: n } = i, o = n.callout.margin + n.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? s + o : -o;
}
function Ff(i, t, e) {
  const { y: s, width: n, height: o, options: r } = i, a = r.callout.start, l = Bf(t, r.callout);
  let c, h;
  return t === "left" || t === "right" ? (c = { x: e.x, y: s + te(o, a) }, h = { x: c.x + l, y: c.y }) : (c = { x: e.x + te(n, a), y: e.y }, h = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: h };
}
function Bf(i, t) {
  const e = t.side;
  return i === "left" || i === "top" ? -e : e;
}
function Wf(i, t) {
  const e = t.position;
  return ya.includes(e) ? e : Hf(i, t);
}
function Hf(i, t) {
  const { x: e, y: s, x2: n, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: h, centerY: d, rotation: u } = i, f = { x: h, y: d }, g = t.start, p = te(r, g), b = te(a, g), m = [e, e + p, e + p, n], _ = [s + b, o, s, o], S = [];
  for (let T = 0; T < 4; T++) {
    const y = ge({ x: m[T], y: _[T] }, f, ct(u));
    S.push({
      position: ya[T],
      distance: ve(y, { x: l, y: c })
    });
  }
  return S.sort((T, y) => T.distance - y.distance)[0].position;
}
function zf(i, t, e) {
  const { pointX: s, pointY: n } = i, o = t.margin;
  let r = s, a = n;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), i.inRange(r, a);
}
const Wo = {
  xScaleID: { min: "xMin", max: "xMax", start: "left", end: "right", startProp: "x", endProp: "x2" },
  yScaleID: { min: "yMin", max: "yMax", start: "bottom", end: "top", startProp: "y", endProp: "y2" }
};
function Oe(i, t, e) {
  return t = typeof t == "number" ? t : i.parse(t), ht(t) ? i.getPixelForValue(t) : e;
}
function fe(i, t, e) {
  const s = t[e];
  if (s || e === "scaleID")
    return s;
  const n = e.charAt(0), o = Object.values(i).filter((r) => r.axis && r.axis === n);
  return o.length ? o[0].id : n;
}
function xa(i, t) {
  if (i) {
    const e = i.options.reverse, s = Oe(i, t.min, e ? t.end : t.start), n = Oe(i, t.max, e ? t.start : t.end);
    return {
      start: s,
      end: n
    };
  }
}
function Sa(i, t) {
  const { chartArea: e, scales: s } = i, n = s[fe(s, t, "xScaleID")], o = s[fe(s, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return n && (r = Oe(n, t.xValue, n.left + n.width / 2)), o && (a = Oe(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function ln(i, t) {
  const e = i.scales, s = e[fe(e, t, "xScaleID")], n = e[fe(e, t, "yScaleID")];
  if (!s && !n)
    return {};
  let { left: o, right: r } = s || i.chartArea, { top: a, bottom: l } = n || i.chartArea;
  const c = Ho(s, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const h = Ho(n, { min: t.yMin, max: t.yMax, start: l, end: a });
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
function Ta(i, t) {
  if (!ga(t)) {
    const e = ln(i, t);
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
  return Gf(i, t);
}
function Vf(i, t) {
  const { scales: e, chartArea: s } = i, n = e[t.scaleID], o = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
  return n ? jf(n, o, t) : Xf(e, o, t), o;
}
function va(i, t) {
  const e = ln(i, t);
  return e.initProperties = Ie(i, e, t), e.elements = [{
    type: "label",
    optionScope: "label",
    properties: $f(i, e, t),
    initProperties: e.initProperties
  }], e;
}
function Gf(i, t) {
  const e = Sa(i, t), s = t.radius * 2;
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
function Ho(i, t) {
  const e = xa(i, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function jf(i, t, e) {
  const s = Oe(i, e.value, NaN), n = Oe(i, e.endValue, s);
  i.isHorizontal() ? (t.x = s, t.x2 = n) : (t.y = s, t.y2 = n);
}
function Xf(i, t, e) {
  for (const s of Object.keys(Wo)) {
    const n = i[fe(i, e, s)];
    if (n) {
      const { min: o, max: r, start: a, end: l, startProp: c, endProp: h } = Wo[s], d = xa(n, { min: e[o], max: e[r], start: n[a], end: n[l] });
      t[c] = d.start, t[h] = d.end;
    }
  }
}
function Yf({ properties: i, options: t }, e, s, n) {
  const { x: o, x2: r, width: a } = i;
  return wa({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.x,
    padding: { start: n.left, end: n.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function Uf({ properties: i, options: t }, e, s, n) {
  const { y: o, y2: r, height: a } = i;
  return wa({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.y,
    padding: { start: n.top, end: n.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function wa(i, t) {
  const { start: e, end: s, borderWidth: n } = i, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = s - n - e - r - a - t.size;
  return e + n / 2 + l + rn(c, o);
}
function $f(i, t, e) {
  const s = e.label;
  s.backgroundColor = "transparent", s.callout.display = !1;
  const n = an(s.position), o = dt(s.padding), r = Qi(i.ctx, s), a = Yf({ properties: t, options: e }, r, n, o), l = Uf({ properties: t, options: e }, r, n, o), c = r.width + o.width, h = r.height + o.height;
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
const Ls = ["enter", "leave"], cn = Ls.concat("click");
function Zf(i, t, e) {
  t.listened = pa(e, cn, t.listeners), t.moveListened = !1, Ls.forEach((s) => {
    vt(e[s]) && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((s) => {
    !t.listened && vt(s.click) && (t.listened = !0), t.moveListened || Ls.forEach((n) => {
      vt(s[n]) && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function Kf(i, t, e) {
  if (i.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return qf(i, t, e);
      case "click":
        return Jf(i, t, e);
    }
}
function qf(i, t, e) {
  if (!i.moveListened)
    return;
  let s;
  t.type === "mousemove" ? s = on(i.visibleElements, t, e.interaction) : s = [];
  const n = i.hovered;
  i.hovered = s;
  const o = { state: i, event: t };
  let r = zo(o, "leave", n, s);
  return zo(o, "enter", s, n) || r;
}
function zo({ state: i, event: t }, e, s, n) {
  let o;
  for (const r of s)
    n.indexOf(r) < 0 && (o = Ea(r.options[e] || i.listeners[e], r, t) || o);
  return o;
}
function Jf(i, t, e) {
  const s = i.listeners, n = on(i.visibleElements, t, e.interaction);
  let o;
  for (const r of n)
    o = Ea(r.options.click || s.click, r, t) || o;
  return o;
}
function Ea(i, t, e) {
  return U(i, [t.$context, e]) === !0;
}
const Hi = ["afterDraw", "beforeDraw"];
function Qf(i, t, e) {
  const s = t.visibleElements;
  t.hooked = pa(e, Hi, t.hooks), t.hooked || s.forEach((n) => {
    t.hooked || Hi.forEach((o) => {
      vt(n.options[o]) && (t.hooked = !0);
    });
  });
}
function Vo(i, t, e) {
  if (i.hooked) {
    const s = t.options[e] || i.hooks[e];
    return U(s, [t.$context]);
  }
}
function tg(i, t, e) {
  const s = og(i.scales, t, e);
  let n = Go(t, s, "min", "suggestedMin");
  n = Go(t, s, "max", "suggestedMax") || n, n && vt(t.handleTickRangeOptions) && t.handleTickRangeOptions();
}
function eg(i, t) {
  for (const e of i)
    sg(e, t);
}
function Go(i, t, e, s) {
  if (ht(t[e]) && !ig(i.options, e, s)) {
    const n = i[e] !== t[e];
    return i[e] = t[e], n;
  }
}
function ig(i, t, e) {
  return wt(i[t]) || wt(i[e]);
}
function sg(i, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const s = fe(t, i, e);
    s && !t[s] && ng(i, e) && console.warn(`No scale found with id '${s}' for annotation '${i.id}'`);
  }
}
function ng(i, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const s of ["Min", "Max", "Value"])
    if (wt(i[e + s]))
      return !0;
  return !1;
}
function og(i, t, e) {
  const s = t.axis, n = t.id, o = s + "ScaleID", r = {
    min: F(t.min, Number.NEGATIVE_INFINITY),
    max: F(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === n ? jo(a, t, ["value", "endValue"], r) : fe(i, a, o) === n && jo(a, t, [s + "Min", s + "Max", s + "Value"], r);
  return r;
}
function jo(i, t, e, s) {
  for (const n of e) {
    const o = i[n];
    if (wt(o)) {
      const r = t.parse(o);
      s.min = Math.min(s.min, r), s.max = Math.max(s.max, r);
    }
  }
}
class Me extends yt {
  inRange(t, e, s, n) {
    const { x: o, y: r } = ge({ x: t, y: e }, this.getCenterPoint(n), ct(-this.options.rotation));
    return ra({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], n), s, this.options);
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    t.save(), Ji(t, this.getCenterPoint(), this.options.rotation), ma(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return va(t, e);
  }
}
Me.id = "boxAnnotation";
Me.defaults = {
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
Me.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
Me.descriptors = {
  label: {
    _fallback: !0
  }
};
class ts extends yt {
  inRange(t, e, s, n) {
    return aa(
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
    !e.display || !e.content || (dg(t, this), t.save(), Ji(t, this.getCenterPoint(), this.rotation), _a(t, this, e, this._fitRatio), t.restore());
  }
  resolveElementProperties(t, e) {
    const s = rg(t, e);
    if (!s)
      return {};
    const { controllerMeta: n, point: o, radius: r } = lg(t, e, s);
    let a = Qi(t.ctx, e);
    const l = cg(a, r);
    ua(e, l) && (a = { width: a.width * l, height: a.height * l });
    const { position: c, xAdjust: h, yAdjust: d } = e, u = da(o, a, { borderWidth: 0, position: c, xAdjust: h, yAdjust: d });
    return {
      initProperties: Ie(t, u, e),
      ...u,
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
function rg(i, t) {
  return i.getSortedVisibleDatasetMetas().reduce(function(e, s) {
    const n = s.controller;
    return n instanceof sn && ag(i, t, s.data) && (!e || n.innerRadius < e.controller.innerRadius) && n.options.circumference >= 90 ? s : e;
  }, void 0);
}
function ag(i, t, e) {
  if (!t.autoHide)
    return !0;
  for (let s = 0; s < e.length; s++)
    if (!e[s].hidden && i.getDataVisibility(s))
      return !0;
}
function lg({ chartArea: i }, t, e) {
  const { left: s, top: n, right: o, bottom: r } = i, { innerRadius: a, offsetX: l, offsetY: c } = e.controller, h = (s + o) / 2 + l, d = (n + r) / 2 + c, u = {
    left: Math.max(h - a, s),
    right: Math.min(h + a, o),
    top: Math.max(d - a, n),
    bottom: Math.min(d + a, r)
  }, f = {
    x: (u.left + u.right) / 2,
    y: (u.top + u.bottom) / 2
  }, g = t.spacing + t.borderWidth / 2, p = a - g, b = f.y > d, m = b ? n + g : r - g, _ = hg(m, h, d, p);
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
function cg({ width: i, height: t }, e) {
  const s = Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
  return e * 2 / s;
}
function hg(i, t, e, s) {
  const n = Math.pow(e - i, 2), o = Math.pow(s, 2), r = t * -2, a = Math.pow(t, 2) + n - o, l = Math.pow(r, 2) - 4 * a;
  if (l <= 0)
    return {
      _startAngle: 0,
      _endAngle: q
    };
  const c = (-r - Math.sqrt(l)) / 2, h = (-r + Math.sqrt(l)) / 2;
  return {
    _startAngle: Pi({ x: t, y: e }, { x: c, y: i }).angle,
    _endAngle: Pi({ x: t, y: e }, { x: h, y: i }).angle
  };
}
function dg(i, t) {
  const { _centerX: e, _centerY: s, _radius: n, _startAngle: o, _endAngle: r, _counterclockwise: a, options: l } = t;
  i.save();
  const c = Vt(i, l);
  i.fillStyle = l.backgroundColor, i.beginPath(), i.arc(e, s, n, o, r, a), i.closePath(), i.fill(), c && i.stroke(), i.restore();
}
class ni extends yt {
  inRange(t, e, s, n) {
    return aa(
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
    const e = this.options, s = !wt(this._visible) || this._visible;
    !e.display || !e.content || !s || (t.save(), Ji(t, this.getCenterPoint(), this.rotation), kf(t, this), ma(t, this, e), _a(t, ug(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let s;
    if (ga(e))
      s = Sa(t, e);
    else {
      const { centerX: a, centerY: l } = ln(t, e);
      s = { x: a, y: l };
    }
    const n = dt(e.padding), o = Qi(t.ctx, e), r = da(s, o, e, n);
    return {
      initProperties: Ie(t, r, e),
      pointX: s.x,
      pointY: s.y,
      ...r,
      rotation: e.rotation
    };
  }
}
ni.id = "labelAnnotation";
ni.defaults = {
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
ni.defaultRoutes = {
  borderColor: "color"
};
function ug({ x: i, y: t, width: e, height: s, options: n }) {
  const o = n.borderWidth / 2, r = dt(n.padding);
  return {
    x: i + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - n.borderWidth,
    height: s - r.top - r.bottom - n.borderWidth
  };
}
const hn = (i, t, e) => ({ x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) }), Ms = (i, t, e) => hn(t, e, Math.abs((i - t.y) / (e.y - t.y))).x, Xo = (i, t, e) => hn(t, e, Math.abs((i - t.x) / (e.x - t.x))).y, Xe = (i) => i * i, fg = (i, t, { x: e, y: s, x2: n, y2: o }, r) => r === "y" ? { start: Math.min(s, o), end: Math.max(s, o), value: t } : { start: Math.min(e, n), end: Math.max(e, n), value: i }, Yo = (i, t, e, s) => (1 - s) * (1 - s) * i + 2 * (1 - s) * s * t + s * s * e, ks = (i, t, e, s) => ({ x: Yo(i.x, t.x, e.x, s), y: Yo(i.y, t.y, e.y, s) }), Uo = (i, t, e, s) => 2 * (1 - s) * (t - i) + 2 * s * (e - t), $o = (i, t, e, s) => -Math.atan2(Uo(i.x, t.x, e.x, s), Uo(i.y, t.y, e.y, s)) + 0.5 * H;
class oi extends yt {
  inRange(t, e, s, n) {
    const o = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y") {
      const r = { mouseX: t, mouseY: e }, { path: a, ctx: l } = this;
      if (a) {
        Vt(l, this.options), l.lineWidth += this.options.hitTolerance;
        const { chart: h } = this.$context, d = t * h.currentDevicePixelRatio, u = e * h.currentDevicePixelRatio, f = l.isPointInStroke(a, d, u) || Ps(this, r, n);
        return l.restore(), f;
      }
      const c = Xe(o);
      return mg(this, r, c, n) || Ps(this, r, n);
    }
    return gg(this, { mouseX: t, mouseY: e }, s, { hitSize: o, useFinalPosition: n });
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const { x: e, y: s, x2: n, y2: o, cp: r, options: a } = this;
    if (t.save(), !Vt(t, a))
      return t.restore();
    Le(t, a);
    const l = Math.sqrt(Math.pow(n - e, 2) + Math.pow(o - s, 2));
    if (a.curve && r)
      return Eg(t, this, r, l), t.restore();
    const { startOpts: c, endOpts: h, startAdjust: d, endAdjust: u } = Aa(this), f = Math.atan2(o - s, n - e);
    t.translate(e, s), t.rotate(f), t.beginPath(), t.moveTo(0 + d, 0), t.lineTo(l - u, 0), t.shadowColor = a.borderShadowColor, t.stroke(), Ns(t, 0, d, c), Ns(t, l, -u, h), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const s = Vf(t, e), { x: n, y: o, x2: r, y2: a } = s, l = pg(s, t.chartArea), c = l ? bg({ x: n, y: o }, { x: r, y: a }, t.chartArea) : { x: n, y: o, x2: r, y2: a, width: Math.abs(r - n), height: Math.abs(a - o) };
    if (c.centerX = (r + n) / 2, c.centerY = (a + o) / 2, c.initProperties = Ie(t, c, e), e.curve) {
      const d = { x: c.x, y: c.y }, u = { x: c.x2, y: c.y2 };
      c.cp = wg(c, e, ve(d, u));
    }
    const h = _g(t, c, e.label);
    return h._visible = l, c.elements = [{
      type: "label",
      optionScope: "label",
      properties: h,
      initProperties: c.initProperties
    }], c;
  }
}
oi.id = "lineAnnotation";
const Zo = {
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
oi.defaults = {
  adjustScaleRange: !0,
  arrowHeads: {
    display: !1,
    end: Object.assign({}, Zo),
    fill: !1,
    length: 12,
    start: Object.assign({}, Zo),
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
    callout: Object.assign({}, ni.defaults.callout),
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
oi.descriptors = {
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
oi.defaultRoutes = {
  borderColor: "color"
};
function gg(i, { mouseX: t, mouseY: e }, s, { hitSize: n, useFinalPosition: o }) {
  const r = fg(t, e, i.getProps(["x", "y", "x2", "y2"], o), s);
  return oa(r, n) || Ps(i, { mouseX: t, mouseY: e }, o, s);
}
function pg({ x: i, y: t, x2: e, y2: s }, { top: n, right: o, bottom: r, left: a }) {
  return !(i < a && e < a || i > o && e > o || t < n && s < n || t > r && s > r);
}
function Ko({ x: i, y: t }, e, { top: s, right: n, bottom: o, left: r }) {
  return i < r && (t = Xo(r, { x: i, y: t }, e), i = r), i > n && (t = Xo(n, { x: i, y: t }, e), i = n), t < s && (i = Ms(s, { x: i, y: t }, e), t = s), t > o && (i = Ms(o, { x: i, y: t }, e), t = o), { x: i, y: t };
}
function bg(i, t, e) {
  const { x: s, y: n } = Ko(i, t, e), { x: o, y: r } = Ko(t, i, e);
  return { x: s, y: n, x2: o, y2: r, width: Math.abs(o - s), height: Math.abs(r - n) };
}
function mg(i, { mouseX: t, mouseY: e }, s = ae, n) {
  const { x: o, y: r, x2: a, y2: l } = i.getProps(["x", "y", "x2", "y2"], n), c = a - o, h = l - r, d = Xe(c) + Xe(h), u = d === 0 ? -1 : ((t - o) * c + (e - r) * h) / d;
  let f, g;
  return u < 0 ? (f = o, g = r) : u > 1 ? (f = a, g = l) : (f = o + u * c, g = r + u * h), Xe(t - f) + Xe(e - g) <= s;
}
function Ps(i, { mouseX: t, mouseY: e }, s, n) {
  const o = i.label;
  return o.options.display && o.inRange(t, e, n, s);
}
function _g(i, t, e) {
  const s = e.borderWidth, n = dt(e.padding), o = Qi(i.ctx, e), r = o.width + n.width + s, a = o.height + n.height + s;
  return xg(t, e, { width: r, height: a, padding: n }, i.chartArea);
}
function yg(i) {
  const { x: t, y: e, x2: s, y2: n } = i, o = Math.atan2(n - e, s - t);
  return o > H / 2 ? o - H : o < H / -2 ? o + H : o;
}
function xg(i, t, e, s) {
  const { width: n, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: i.x, y: i.y }, h = { x: i.x2, y: i.y2 }, d = t.rotation === "auto" ? yg(i) : ct(t.rotation), u = Sg(n, o, d), f = Tg(i, t, { labelSize: u, padding: r }, s), g = i.cp ? ks(c, i.cp, h, f) : hn(c, h, f), p = { size: u.w, min: s.left, max: s.right, padding: r.left }, b = { size: u.h, min: s.top, max: s.bottom, padding: r.top }, m = Jo(g.x, p) + a, _ = Jo(g.y, b) + l;
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
    rotation: Gi(d)
  };
}
function Sg(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e);
  return {
    w: Math.abs(i * s) + Math.abs(t * n),
    h: Math.abs(i * n) + Math.abs(t * s)
  };
}
function Tg(i, t, e, s) {
  let n;
  const o = vg(i, s);
  return t.position === "start" ? n = qo({ w: i.x2 - i.x, h: i.y2 - i.y }, e, t, o) : t.position === "end" ? n = 1 - qo({ w: i.x - i.x2, h: i.y - i.y2 }, e, t, o) : n = rn(1, t.position), n;
}
function qo(i, t, e, s) {
  const { labelSize: n, padding: o } = t, r = i.w * s.dx, a = i.h * s.dy, l = r > 0 && (n.w / 2 + o.left - s.x) / r, c = a > 0 && (n.h / 2 + o.top - s.y) / a;
  return Ki(Math.max(l, c), 0, 0.25);
}
function vg(i, t) {
  const { x: e, x2: s, y: n, y2: o } = i, r = Math.min(n, o) - t.top, a = Math.min(e, s) - t.left, l = t.bottom - Math.max(n, o), c = t.right - Math.max(e, s);
  return {
    x: Math.min(a, c),
    y: Math.min(r, l),
    dx: a <= c ? 1 : -1,
    dy: r <= l ? 1 : -1
  };
}
function Jo(i, t) {
  const { size: e, min: s, max: n, padding: o } = t, r = e / 2;
  return e > n - s ? (n + s) / 2 : (s >= i - o - r && (i = s + o + r), n <= i + o + r && (i = n - o - r), i);
}
function Aa(i) {
  const t = i.options, e = t.arrowHeads && t.arrowHeads.start, s = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: e,
    endOpts: s,
    startAdjust: Qo(i, e),
    endAdjust: Qo(i, s)
  };
}
function Qo(i, t) {
  if (!t || !t.display)
    return 0;
  const { length: e, width: s } = t, n = i.options.borderWidth / 2, o = { x: e, y: s + n };
  return Math.abs(Ms(0, o, { x: 0, y: n }));
}
function Ns(i, t, e, s) {
  if (!s || !s.display)
    return;
  const { length: n, width: o, fill: r, backgroundColor: a, borderColor: l } = s, c = Math.abs(t - n) + e;
  i.beginPath(), Le(i, s), Vt(i, s), i.moveTo(c, -o), i.lineTo(t + e, 0), i.lineTo(c, o), r === !0 ? (i.fillStyle = a || l, i.closePath(), i.fill(), i.shadowColor = "transparent") : i.shadowColor = s.borderShadowColor, i.stroke();
}
function wg(i, t, e) {
  const { x: s, y: n, x2: o, y2: r, centerX: a, centerY: l } = i, c = Math.atan2(r - n, o - s), h = an(t.controlPoint, 0), d = {
    x: a + te(e, h.x, !1),
    y: l + te(e, h.y, !1)
  };
  return ge(d, { x: a, y: l }, c);
}
function tr(i, { x: t, y: e }, { angle: s, adjust: n }, o) {
  !o || !o.display || (i.save(), i.translate(t, e), i.rotate(s), Ns(i, 0, -n, o), i.restore());
}
function Eg(i, t, e, s) {
  const { x: n, y: o, x2: r, y2: a, options: l } = t, { startOpts: c, endOpts: h, startAdjust: d, endAdjust: u } = Aa(t), f = { x: n, y: o }, g = { x: r, y: a }, p = $o(f, e, g, 0), b = $o(f, e, g, 1) - H, m = ks(f, e, g, d / s), _ = ks(f, e, g, 1 - u / s), S = new Path2D();
  i.beginPath(), S.moveTo(m.x, m.y), S.quadraticCurveTo(e.x, e.y, _.x, _.y), i.shadowColor = l.borderShadowColor, i.stroke(S), t.path = S, t.ctx = i, tr(i, m, { angle: p, adjust: d }, c), tr(i, _, { angle: b, adjust: u }, h);
}
class ri extends yt {
  inRange(t, e, s, n) {
    const o = this.options.rotation, r = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y")
      return Ag({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], n), o, r);
    const { x: a, y: l, x2: c, y2: h } = this.getProps(["x", "y", "x2", "y2"], n), d = s === "y" ? { start: l, end: h } : { start: a, end: c }, u = ge({ x: t, y: e }, this.getCenterPoint(n), ct(-o));
    return u[s] >= d.start - r - ae && u[s] <= d.end + r + ae;
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const { width: e, height: s, centerX: n, centerY: o, options: r } = this;
    t.save(), Ji(t, this.getCenterPoint(), r.rotation), Le(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Vt(t, r);
    t.ellipse(n, o, s / 2, e / 2, H / 2, 0, 2 * H), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return va(t, e);
  }
}
ri.id = "ellipseAnnotation";
ri.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  label: Object.assign({}, Me.defaults.label),
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
ri.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
ri.descriptors = {
  label: {
    _fallback: !0
  }
};
function Ag(i, t, e, s) {
  const { width: n, height: o, centerX: r, centerY: a } = t, l = n / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const h = ct(e || 0), d = Math.cos(h), u = Math.sin(h), f = Math.pow(d * (i.x - r) + u * (i.y - a), 2), g = Math.pow(u * (i.x - r) - d * (i.y - a), 2);
  return f / Math.pow(l + s, 2) + g / Math.pow(c + s, 2) <= 1.0001;
}
class es extends yt {
  inRange(t, e, s, n) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], n), h = (this.options.borderWidth + this.options.hitTolerance) / 2;
    return s !== "x" && s !== "y" ? xf({ x: t, y: e }, this.getCenterPoint(n), c / 2, h) : oa(s === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t }, h);
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const e = this.options, s = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, Le(t, e);
    const n = Vt(t, e);
    Rf(t, this, this.centerX, this.centerY), n && !qi(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = s;
  }
  resolveElementProperties(t, e) {
    const s = Ta(t, e);
    return s.initProperties = Ie(t, s, e), s;
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
class is extends yt {
  inRange(t, e, s, n) {
    if (s !== "x" && s !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && Rg(this.elements, t, e, n);
    const o = ge({ x: t, y: e }, this.getCenterPoint(n), ct(-this.options.rotation)), r = this.elements.map((c) => s === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[s] >= a && o[s] <= l;
  }
  getCenterPoint(t) {
    return pe(this, t);
  }
  draw(t) {
    const { elements: e, options: s } = this;
    t.save(), t.beginPath(), t.fillStyle = s.backgroundColor, Le(t, s);
    const n = Vt(t, s);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), n && (t.shadowColor = s.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const s = Ta(t, e), { sides: n, rotation: o } = e, r = [], a = 2 * H / n;
    let l = o * js;
    for (let c = 0; c < n; c++, l += a) {
      const h = Og(s, e, l);
      h.initProperties = Ie(t, s, e), r.push(h);
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
function Og({ centerX: i, centerY: t }, { radius: e, borderWidth: s, hitTolerance: n }, o) {
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
function Rg(i, t, e, s) {
  let n = !1, o = i[i.length - 1].getProps(["bX", "bY"], s);
  for (const r of i) {
    const a = r.getProps(["bX", "bY"], s);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (n = !n), o = a;
  }
  return n;
}
const Jt = {
  box: Me,
  doughnutLabel: ts,
  ellipse: ri,
  label: ni,
  line: oi,
  point: es,
  polygon: is
};
Object.keys(Jt).forEach((i) => {
  nt.describe(`elements.${Jt[i].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Cg = {
  update: Object.assign
}, Dg = cn.concat(Hi), er = (i, t) => z(t) ? Bs(i, t) : i, Fs = (i) => i === "color" || i === "font";
function dn(i = "line") {
  return Jt[i] ? i : (console.warn(`Unknown annotation type: '${i}', defaulting to 'line'`), "line");
}
function Ig(i, t, e, s) {
  const n = Mg(i, e.animations, s), o = t.annotations, r = Ng(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = Oa(r, a, l.type), h = l.setContext(Pg(i, c, r, l)), d = c.resolveElementProperties(i, h);
    d.skip = Lg(d), "elements" in d && (kg(c, d.elements, h, n), delete d.elements), wt(c.x) || Object.assign(c, d), Object.assign(c, d.initProperties), d.options = Ra(h), n.update(c, d);
  }
}
function Lg(i) {
  return isNaN(i.x) || isNaN(i.y);
}
function Mg(i, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? Cg : new en(i, t);
}
function kg(i, t, e, s) {
  const n = i.elements || (i.elements = []);
  n.length = t.length;
  for (let o = 0; o < t.length; o++) {
    const r = t[o], a = r.properties, l = Oa(n, o, r.type, r.initProperties), c = e[r.optionScope].override(r);
    a.options = Ra(c), s.update(l, a);
  }
}
function Oa(i, t, e, s) {
  const n = Jt[dn(e)];
  let o = i[t];
  return (!o || !(o instanceof n)) && (o = i[t] = new n(), Object.assign(o, s)), o;
}
function Ra(i) {
  const t = Jt[dn(i.type)], e = {};
  e.id = i.id, e.type = i.type, e.drawTime = i.drawTime, Object.assign(
    e,
    Bs(i, t.defaults),
    Bs(i, t.defaultRoutes)
  );
  for (const s of Dg)
    e[s] = i[s];
  return e;
}
function Bs(i, t) {
  const e = {};
  for (const s of Object.keys(t)) {
    const n = t[s], o = i[s];
    Fs(s) && Y(o) ? e[s] = o.map((r) => er(r, n)) : e[s] = er(o, n);
  }
  return e;
}
function Pg(i, t, e, s) {
  return t.$context || (t.$context = Object.assign(Object.create(i.getContext()), {
    element: t,
    get elements() {
      return e.filter((n) => n && n.options);
    },
    id: s.id,
    type: "annotation"
  }));
}
function Ng(i, t) {
  const e = t.length, s = i.length;
  if (s < e) {
    const n = e - s;
    i.splice(s, 0, ...new Array(n));
  } else s > e && i.splice(e, s - e);
  return i;
}
var Fg = "3.1.0";
const Yt = /* @__PURE__ */ new Map(), ir = (i) => i.type !== "doughnutLabel", Bg = cn.concat(Hi);
var Wg = {
  id: "annotation",
  version: Fg,
  beforeRegister() {
    Sf("chart.js", "4.0", ce.version);
  },
  afterRegister() {
    ce.register(Jt);
  },
  afterUnregister() {
    ce.unregister(Jt);
  },
  beforeInit(i) {
    Yt.set(i, {
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
    const s = Yt.get(i), n = s.annotations = [];
    let o = e.annotations;
    z(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      z(a) && (a.id = r, n.push(a));
    }) : Y(o) && n.push(...o), eg(n.filter(ir), i.scales);
  },
  afterDataLimits(i, t) {
    const e = Yt.get(i);
    tg(i, t.scale, e.annotations.filter(ir).filter((s) => s.display && s.adjustScaleRange));
  },
  afterUpdate(i, t, e) {
    const s = Yt.get(i);
    Zf(i, s, e), Ig(i, s, e, t.mode), s.visibleElements = s.elements.filter((n) => !n.skip && n.options.display), Qf(i, s, e);
  },
  beforeDatasetsDraw(i, t, e) {
    He(i, "beforeDatasetsDraw", e.clip);
  },
  afterDatasetsDraw(i, t, e) {
    He(i, "afterDatasetsDraw", e.clip);
  },
  beforeDatasetDraw(i, t, e) {
    He(i, t.index, e.clip);
  },
  beforeDraw(i, t, e) {
    He(i, "beforeDraw", e.clip);
  },
  afterDraw(i, t, e) {
    He(i, "afterDraw", e.clip);
  },
  beforeEvent(i, t, e) {
    const s = Yt.get(i);
    Kf(s, t.event, e) && (t.changed = !0);
  },
  afterDestroy(i) {
    Yt.delete(i);
  },
  getAnnotations(i) {
    const t = Yt.get(i);
    return t ? t.elements : [];
  },
  // only for testing
  _getAnnotationElementsAtEventForMode(i, t, e) {
    return on(i, t, e);
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
    _scriptable: (i) => !Bg.includes(i) && i !== "init",
    annotations: {
      _allKeys: !1,
      _fallback: (i, t) => `elements.${Jt[dn(t.type)].id}`
    },
    interaction: {
      _fallback: !0
    },
    common: {
      label: {
        _indexable: Fs,
        _fallback: !0
      },
      _indexable: Fs
    }
  },
  additionalOptionScopes: [""]
};
function He(i, t, e) {
  const { ctx: s, chartArea: n } = i, o = Yt.get(i);
  e && ii(s, n);
  const r = Hg(o.visibleElements, t).sort((a, l) => a.element.options.z - l.element.options.z);
  for (const a of r)
    zg(s, n, o, a);
  e && si(s);
}
function Hg(i, t) {
  const e = [];
  for (const s of i)
    if (s.options.drawTime === t && e.push({ element: s, main: !0 }), s.elements && s.elements.length)
      for (const n of s.elements)
        n.options.display && n.options.drawTime === t && e.push({ element: n });
  return e;
}
function zg(i, t, e, s) {
  const n = s.element;
  s.main ? (Vo(e, n, "beforeDraw"), n.draw(i, t), Vo(e, n, "afterDraw")) : n.draw(i, t);
}
class A extends hr {
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
  _seriesIndex = new E();
  _label;
  _chartType = new E();
  _xAxisId = new E();
  _yAxisId = new E();
  _yAxisTitle = new E();
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
    return w.Literals.SERIES_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(A.SERIES_INDEX),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.SERIES_INDEX,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.LABEL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.CHART_TYPE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.CHART_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.X_AXIS_ID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.X_AXIS_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.Y_AXIS_ID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.Y_AXIS_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.Y_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.Y_AXIS_TITLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.BORDER_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.BORDER_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.BACKGROUND_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.BORDER_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.BORDER_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.BORDER_DASH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.BORDER_DASH,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.FILL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.FILL,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.SHOW_POINTS),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.SHOW_POINTS,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.POINT_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.POINT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(A.POINT_SIZE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => A.POINT_SIZE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case A.SERIES_INDEX:
        return this.seriesIndex;
      case A.LABEL:
        return this.label;
      case A.CHART_TYPE:
        return this.chartType;
      case A.X_AXIS_ID:
        return this.xAxisId;
      case A.Y_AXIS_ID:
        return this.yAxisId;
      case A.Y_AXIS_TITLE:
        return this.yAxisTitle;
      case A.BORDER_COLOR:
        return this.borderColor;
      case A.BACKGROUND_COLOR:
        return this.backgroundColor;
      case A.BORDER_WIDTH:
        return this.borderWidth;
      case A.BORDER_DASH:
        return this.borderDash;
      case A.FILL:
        return this.fill;
      case A.SHOW_POINTS:
        return this.showPoints;
      case A.POINT_COLOR:
        return this.pointColor;
      case A.POINT_SIZE:
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
      case A.SERIES_INDEX:
        this.seriesIndex = e, super.eSet(t, e);
        break;
      case A.LABEL:
        this.label = e, super.eSet(t, e);
        break;
      case A.CHART_TYPE:
        this.chartType = e, super.eSet(t, e);
        break;
      case A.X_AXIS_ID:
        this.xAxisId = e, super.eSet(t, e);
        break;
      case A.Y_AXIS_ID:
        this.yAxisId = e, super.eSet(t, e);
        break;
      case A.Y_AXIS_TITLE:
        this.yAxisTitle = e, super.eSet(t, e);
        break;
      case A.BORDER_COLOR:
        this.borderColor = e, super.eSet(t, e);
        break;
      case A.BACKGROUND_COLOR:
        this.backgroundColor = e, super.eSet(t, e);
        break;
      case A.BORDER_WIDTH:
        this.borderWidth = e, super.eSet(t, e);
        break;
      case A.BORDER_DASH:
        this.borderDash = e, super.eSet(t, e);
        break;
      case A.FILL:
        this.fill = e, super.eSet(t, e);
        break;
      case A.SHOW_POINTS:
        this.showPoints = e, super.eSet(t, e);
        break;
      case A.POINT_COLOR:
        this.pointColor = e, super.eSet(t, e);
        break;
      case A.POINT_SIZE:
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
      case A.SERIES_INDEX:
        return this._seriesIndex !== new E();
      case A.LABEL:
        return this._label !== void 0;
      case A.CHART_TYPE:
        return this._chartType !== new E();
      case A.X_AXIS_ID:
        return this._xAxisId !== new E();
      case A.Y_AXIS_ID:
        return this._yAxisId !== new E();
      case A.Y_AXIS_TITLE:
        return this._yAxisTitle !== new E();
      case A.BORDER_COLOR:
        return this._borderColor !== void 0;
      case A.BACKGROUND_COLOR:
        return this._backgroundColor !== void 0;
      case A.BORDER_WIDTH:
        return this._borderWidth !== void 0;
      case A.BORDER_DASH:
        return this._borderDash !== void 0;
      case A.FILL:
        return this._fill !== void 0;
      case A.SHOW_POINTS:
        return this._showPoints !== void 0;
      case A.POINT_COLOR:
        return this._pointColor !== void 0;
      case A.POINT_SIZE:
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
      case A.SERIES_INDEX:
        this._seriesIndex = new E();
        return;
      case A.LABEL:
        this._label = void 0;
        return;
      case A.CHART_TYPE:
        this._chartType = new E();
        return;
      case A.X_AXIS_ID:
        this._xAxisId = new E();
        return;
      case A.Y_AXIS_ID:
        this._yAxisId = new E();
        return;
      case A.Y_AXIS_TITLE:
        this._yAxisTitle = new E();
        return;
      case A.BORDER_COLOR:
        this._borderColor = void 0;
        return;
      case A.BACKGROUND_COLOR:
        this._backgroundColor = void 0;
        return;
      case A.BORDER_WIDTH:
        this._borderWidth = void 0;
        return;
      case A.BORDER_DASH:
        this._borderDash = void 0;
        return;
      case A.FILL:
        this._fill = void 0;
        return;
      case A.SHOW_POINTS:
        this._showPoints = void 0;
        return;
      case A.POINT_COLOR:
        this._pointColor = void 0;
        return;
      case A.POINT_SIZE:
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
class un extends Ya {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new un()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(w.eINSTANCE);
  }
  /**
   * Create a new SeriesSettings instance
   */
  createSeriesSettings() {
    return new A();
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
function j(i) {
  const t = dr.INSTANCE.getEPackage(i);
  if (!t)
    throw new Error(`EPackage '${i}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ChartsettingsPackage.`);
  return t;
}
class w extends Ua {
  static eNAME = "chartsettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.chart";
  static eNS_PREFIX = "chartsettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new w(), this._instance.init()), this._instance;
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
    super(), this.setName(w.eNAME), this.setNsURI(w.eNS_URI), this.setNsPrefix(w.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    dr.INSTANCE.set(w.eNS_URI, this), this.setEFactoryInstance(un.eINSTANCE);
    const t = new mn();
    t.setName("SeriesSettings"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), w.Literals.SERIES_SETTINGS = t;
    const e = new G();
    e.setContainment(!1), e.setName("seriesIndex"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), w.Literals.SERIES_SETTINGS__SERIES_INDEX = e;
    const s = new G();
    s.setContainment(!1), s.setName("label"), s.setLowerBound(0), s.setUpperBound(1), t.getEStructuralFeatures().push(s), w.Literals.SERIES_SETTINGS__LABEL = s;
    const n = new G();
    n.setContainment(!1), n.setName("chartType"), n.setLowerBound(0), n.setUpperBound(1), t.getEStructuralFeatures().push(n), w.Literals.SERIES_SETTINGS__CHART_TYPE = n;
    const o = new G();
    o.setContainment(!1), o.setName("xAxisId"), o.setLowerBound(0), o.setUpperBound(1), t.getEStructuralFeatures().push(o), w.Literals.SERIES_SETTINGS__X_AXIS_ID = o;
    const r = new G();
    r.setContainment(!1), r.setName("yAxisId"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), w.Literals.SERIES_SETTINGS__Y_AXIS_ID = r;
    const a = new G();
    a.setContainment(!1), a.setName("yAxisTitle"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), w.Literals.SERIES_SETTINGS__Y_AXIS_TITLE = a;
    const l = new G();
    l.setContainment(!1), l.setName("borderColor"), l.setLowerBound(0), l.setUpperBound(1), t.getEStructuralFeatures().push(l), w.Literals.SERIES_SETTINGS__BORDER_COLOR = l;
    const c = new G();
    c.setContainment(!1), c.setName("backgroundColor"), c.setLowerBound(0), c.setUpperBound(1), t.getEStructuralFeatures().push(c), w.Literals.SERIES_SETTINGS__BACKGROUND_COLOR = c;
    const h = new G();
    h.setContainment(!1), h.setName("borderWidth"), h.setLowerBound(0), h.setUpperBound(1), t.getEStructuralFeatures().push(h), w.Literals.SERIES_SETTINGS__BORDER_WIDTH = h;
    const d = new G();
    d.setContainment(!1), d.setName("borderDash"), d.setLowerBound(0), d.setUpperBound(1), t.getEStructuralFeatures().push(d), w.Literals.SERIES_SETTINGS__BORDER_DASH = d;
    const u = new G();
    u.setContainment(!1), u.setName("fill"), u.setLowerBound(0), u.setUpperBound(1), t.getEStructuralFeatures().push(u), w.Literals.SERIES_SETTINGS__FILL = u;
    const f = new G();
    f.setContainment(!1), f.setName("showPoints"), f.setLowerBound(0), f.setUpperBound(1), t.getEStructuralFeatures().push(f), w.Literals.SERIES_SETTINGS__SHOW_POINTS = f;
    const g = new G();
    g.setContainment(!1), g.setName("pointColor"), g.setLowerBound(0), g.setUpperBound(1), t.getEStructuralFeatures().push(g), w.Literals.SERIES_SETTINGS__POINT_COLOR = g;
    const p = new G();
    p.setContainment(!1), p.setName("pointSize"), p.setLowerBound(0), p.setUpperBound(1), t.getEStructuralFeatures().push(p), w.Literals.SERIES_SETTINGS__POINT_SIZE = p;
    const b = new mn();
    b.setName("ChartSettings"), b.setAbstract(!1), b.setInterface(!1), this.getEClassifiers().push(b), b.setEPackage(this), w.Literals.CHART_SETTINGS = b;
    const m = new G();
    m.setContainment(!0), m.setName("seriesSettings"), m.setLowerBound(0), m.setUpperBound(-1), b.getEStructuralFeatures().push(m), w.Literals.CHART_SETTINGS__SERIES_SETTINGS = m;
    const _ = new G();
    _.setContainment(!1), _.setName("chartType"), _.setLowerBound(0), _.setUpperBound(1), b.getEStructuralFeatures().push(_), w.Literals.CHART_SETTINGS__CHART_TYPE = _;
    const S = new G();
    S.setContainment(!1), S.setName("barOrientation"), S.setLowerBound(0), S.setUpperBound(1), b.getEStructuralFeatures().push(S), w.Literals.CHART_SETTINGS__BAR_ORIENTATION = S;
    const T = new G();
    T.setContainment(!1), T.setName("stacked"), T.setLowerBound(0), T.setUpperBound(1), b.getEStructuralFeatures().push(T), w.Literals.CHART_SETTINGS__STACKED = T;
    const y = new G();
    y.setContainment(!1), y.setName("borderColor"), y.setLowerBound(0), y.setUpperBound(1), b.getEStructuralFeatures().push(y), w.Literals.CHART_SETTINGS__BORDER_COLOR = y;
    const O = new G();
    O.setContainment(!1), O.setName("borderWidth"), O.setLowerBound(0), O.setUpperBound(1), b.getEStructuralFeatures().push(O), w.Literals.CHART_SETTINGS__BORDER_WIDTH = O;
    const R = new G();
    R.setContainment(!1), R.setName("borderDash"), R.setLowerBound(0), R.setUpperBound(1), b.getEStructuralFeatures().push(R), w.Literals.CHART_SETTINGS__BORDER_DASH = R;
    const C = new G();
    C.setContainment(!1), C.setName("backgroundColor"), C.setLowerBound(0), C.setUpperBound(1), b.getEStructuralFeatures().push(C), w.Literals.CHART_SETTINGS__BACKGROUND_COLOR = C;
    const D = new G();
    D.setContainment(!1), D.setName("fill"), D.setLowerBound(0), D.setUpperBound(1), b.getEStructuralFeatures().push(D), w.Literals.CHART_SETTINGS__FILL = D;
    const N = new G();
    N.setContainment(!1), N.setName("showPoints"), N.setLowerBound(0), N.setUpperBound(1), b.getEStructuralFeatures().push(N), w.Literals.CHART_SETTINGS__SHOW_POINTS = N;
    const P = new G();
    P.setContainment(!1), P.setName("pointColor"), P.setLowerBound(0), P.setUpperBound(1), b.getEStructuralFeatures().push(P), w.Literals.CHART_SETTINGS__POINT_COLOR = P;
    const v = new G();
    v.setContainment(!1), v.setName("pointSize"), v.setLowerBound(0), v.setUpperBound(1), b.getEStructuralFeatures().push(v), w.Literals.CHART_SETTINGS__POINT_SIZE = v;
    const M = new G();
    M.setContainment(!1), M.setName("showHorizontalGrid"), M.setLowerBound(0), M.setUpperBound(1), b.getEStructuralFeatures().push(M), w.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID = M;
    const V = new G();
    V.setContainment(!1), V.setName("horizontalGridColor"), V.setLowerBound(0), V.setUpperBound(1), b.getEStructuralFeatures().push(V), w.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR = V;
    const L = new G();
    L.setContainment(!1), L.setName("horizontalGridWidth"), L.setLowerBound(0), L.setUpperBound(1), b.getEStructuralFeatures().push(L), w.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH = L;
    const B = new G();
    B.setContainment(!1), B.setName("showVerticalGrid"), B.setLowerBound(0), B.setUpperBound(1), b.getEStructuralFeatures().push(B), w.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID = B;
    const k = new G();
    k.setContainment(!1), k.setName("verticalGridColor"), k.setLowerBound(0), k.setUpperBound(1), b.getEStructuralFeatures().push(k), w.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR = k;
    const K = new G();
    K.setContainment(!1), K.setName("verticalGridWidth"), K.setLowerBound(0), K.setUpperBound(1), b.getEStructuralFeatures().push(K), w.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH = K;
    const Z = new G();
    Z.setContainment(!1), Z.setName("xAxisTitle"), Z.setLowerBound(0), Z.setUpperBound(1), b.getEStructuralFeatures().push(Z), w.Literals.CHART_SETTINGS__X_AXIS_TITLE = Z;
    const ut = new G();
    ut.setContainment(!1), ut.setName("yAxisTitle"), ut.setLowerBound(0), ut.setUpperBound(1), b.getEStructuralFeatures().push(ut), w.Literals.CHART_SETTINGS__Y_AXIS_TITLE = ut;
    const gt = new G();
    gt.setContainment(!1), gt.setName("annotationsEditMode"), gt.setLowerBound(0), gt.setUpperBound(1), b.getEStructuralFeatures().push(gt), w.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE = gt;
    const ft = new ui();
    ft.setName("horizontalLines"), ft.setLowerBound(0), ft.setUpperBound(-1), b.getEStructuralFeatures().push(ft), w.Literals.CHART_SETTINGS__HORIZONTAL_LINES = ft;
    const pt = new ui();
    pt.setName("verticalLines"), pt.setLowerBound(0), pt.setUpperBound(-1), b.getEStructuralFeatures().push(pt), w.Literals.CHART_SETTINGS__VERTICAL_LINES = pt;
    const at = new ui();
    at.setName("horizontalBoxes"), at.setLowerBound(0), at.setUpperBound(-1), b.getEStructuralFeatures().push(at), w.Literals.CHART_SETTINGS__HORIZONTAL_BOXES = at;
    const it = new ui();
    it.setName("verticalBoxes"), it.setLowerBound(0), it.setUpperBound(-1), b.getEStructuralFeatures().push(it), w.Literals.CHART_SETTINGS__VERTICAL_BOXES = it;
    const lt = new G();
    lt.setContainment(!1), lt.setName("dateDisplayFormat"), lt.setLowerBound(0), lt.setUpperBound(1), b.getEStructuralFeatures().push(lt), w.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT = lt, w.Literals.SERIES_SETTINGS__SERIES_INDEX.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__LABEL.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__CHART_TYPE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__X_AXIS_ID.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__Y_AXIS_ID.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__Y_AXIS_TITLE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__BORDER_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__BACKGROUND_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__BORDER_WIDTH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__BORDER_DASH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__FILL.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__SHOW_POINTS.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__POINT_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.SERIES_SETTINGS__POINT_SIZE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__SERIES_SETTINGS.setEType(w.Literals.SERIES_SETTINGS), w.Literals.CHART_SETTINGS__CHART_TYPE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__BAR_ORIENTATION.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__STACKED.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__BORDER_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__BORDER_WIDTH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__BORDER_DASH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__BACKGROUND_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__FILL.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__SHOW_POINTS.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__POINT_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__POINT_SIZE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__X_AXIS_TITLE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__Y_AXIS_TITLE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT.setEType(j("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class x extends hr {
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
  _chartType = new E();
  _barOrientation = new E();
  _stacked = new E();
  _borderColor = new E();
  _borderWidth = new E();
  _borderDash = new E();
  _backgroundColor = new E();
  _fill = new E();
  _showPoints = new E();
  _pointColor = new E();
  _pointSize = new E();
  _showHorizontalGrid = new E();
  _horizontalGridColor = new E();
  _horizontalGridWidth = new E();
  _showVerticalGrid = new E();
  _verticalGridColor = new E();
  _verticalGridWidth = new E();
  _xAxisTitle = new E();
  _yAxisTitle = new E();
  _annotationsEditMode = new E();
  _horizontalLines;
  _verticalLines;
  _horizontalBoxes;
  _verticalBoxes;
  _dateDisplayFormat = new E();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return w.Literals.CHART_SETTINGS;
  }
  // Getters and Setters
  get seriesSettings() {
    return this._seriesSettings || (this._seriesSettings = $a(this, this.eClass().getEStructuralFeature("seriesSettings"))), this._seriesSettings;
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
        return this._chartType !== new E();
      case x.BAR_ORIENTATION:
        return this._barOrientation !== new E();
      case x.STACKED:
        return this._stacked !== new E();
      case x.BORDER_COLOR:
        return this._borderColor !== new E();
      case x.BORDER_WIDTH:
        return this._borderWidth !== new E();
      case x.BORDER_DASH:
        return this._borderDash !== new E();
      case x.BACKGROUND_COLOR:
        return this._backgroundColor !== new E();
      case x.FILL:
        return this._fill !== new E();
      case x.SHOW_POINTS:
        return this._showPoints !== new E();
      case x.POINT_COLOR:
        return this._pointColor !== new E();
      case x.POINT_SIZE:
        return this._pointSize !== new E();
      case x.SHOW_HORIZONTAL_GRID:
        return this._showHorizontalGrid !== new E();
      case x.HORIZONTAL_GRID_COLOR:
        return this._horizontalGridColor !== new E();
      case x.HORIZONTAL_GRID_WIDTH:
        return this._horizontalGridWidth !== new E();
      case x.SHOW_VERTICAL_GRID:
        return this._showVerticalGrid !== new E();
      case x.VERTICAL_GRID_COLOR:
        return this._verticalGridColor !== new E();
      case x.VERTICAL_GRID_WIDTH:
        return this._verticalGridWidth !== new E();
      case x.X_AXIS_TITLE:
        return this._xAxisTitle !== new E();
      case x.Y_AXIS_TITLE:
        return this._yAxisTitle !== new E();
      case x.ANNOTATIONS_EDIT_MODE:
        return this._annotationsEditMode !== new E();
      case x.HORIZONTAL_LINES:
        return this._horizontalLines !== void 0 && !this._horizontalLines.isEmpty();
      case x.VERTICAL_LINES:
        return this._verticalLines !== void 0 && !this._verticalLines.isEmpty();
      case x.HORIZONTAL_BOXES:
        return this._horizontalBoxes !== void 0 && !this._horizontalBoxes.isEmpty();
      case x.VERTICAL_BOXES:
        return this._verticalBoxes !== void 0 && !this._verticalBoxes.isEmpty();
      case x.DATE_DISPLAY_FORMAT:
        return this._dateDisplayFormat !== new E();
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
        this._chartType = new E();
        return;
      case x.BAR_ORIENTATION:
        this._barOrientation = new E();
        return;
      case x.STACKED:
        this._stacked = new E();
        return;
      case x.BORDER_COLOR:
        this._borderColor = new E();
        return;
      case x.BORDER_WIDTH:
        this._borderWidth = new E();
        return;
      case x.BORDER_DASH:
        this._borderDash = new E();
        return;
      case x.BACKGROUND_COLOR:
        this._backgroundColor = new E();
        return;
      case x.FILL:
        this._fill = new E();
        return;
      case x.SHOW_POINTS:
        this._showPoints = new E();
        return;
      case x.POINT_COLOR:
        this._pointColor = new E();
        return;
      case x.POINT_SIZE:
        this._pointSize = new E();
        return;
      case x.SHOW_HORIZONTAL_GRID:
        this._showHorizontalGrid = new E();
        return;
      case x.HORIZONTAL_GRID_COLOR:
        this._horizontalGridColor = new E();
        return;
      case x.HORIZONTAL_GRID_WIDTH:
        this._horizontalGridWidth = new E();
        return;
      case x.SHOW_VERTICAL_GRID:
        this._showVerticalGrid = new E();
        return;
      case x.VERTICAL_GRID_COLOR:
        this._verticalGridColor = new E();
        return;
      case x.VERTICAL_GRID_WIDTH:
        this._verticalGridWidth = new E();
        return;
      case x.X_AXIS_TITLE:
        this._xAxisTitle = new E();
        return;
      case x.Y_AXIS_TITLE:
        this._yAxisTitle = new E();
        return;
      case x.ANNOTATIONS_EDIT_MODE:
        this._annotationsEditMode = new E();
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
        this._dateDisplayFormat = new E();
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
var Vg = Object.defineProperty, Gg = Object.getOwnPropertyDescriptor, ai = (i, t, e, s) => {
  for (var n = Gg(t, e), o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(t, e, n) || n);
  return n && Vg(t, e, n), n;
};
class be extends Da {
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
ai([
  ti({ eventType: "chart.refresh" })
], be.prototype, "refresh");
ai([
  ti({ eventType: "chart.zoomIn" })
], be.prototype, "zoomIn");
ai([
  ti({ eventType: "chart.zoomOut" })
], be.prototype, "zoomOut");
ai([
  ti({ eventType: "chart.resetZoom" })
], be.prototype, "resetZoom");
ai([
  ti({ eventType: "chart.exportAsImage" })
], be.prototype, "exportAsImage");
const jg = /* @__PURE__ */ Vi({
  __name: "ChartWidget",
  props: /* @__PURE__ */ Wa({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(i, { expose: t }) {
    const { wrapParameters: e } = Ga();
    ce.register(wu, Lu, Tu, Kd, Nu, Bu, Ui, jd, Ju, kd, bu, Wg);
    const s = i, { datasourceId: n, id: o } = Ha(s), r = ar(i, "configv"), a = new x(), l = ze(null), c = bn(Za.TINY_EMITTER), h = bn(Ia), u = Xa().params.pageid || "", f = ze({ min: null, max: null }), g = ze(null);
    class p extends be {
      refresh() {
        S(n.value, n.value);
      }
      zoomIn() {
        const M = f.value.min ?? 0, V = f.value.max ?? 100, L = V - M, B = (V + M) / 2;
        f.value = { min: B - L * 0.4, max: B + L * 0.4 }, y.value++;
      }
      zoomOut() {
        const M = f.value.min ?? 0, V = f.value.max ?? 100, L = V - M, B = (V + M) / 2;
        f.value = { min: B - L * 0.75, max: B + L * 0.75 }, y.value++;
      }
      resetZoom() {
        f.value = { min: null, max: null }, y.value++;
      }
      exportAsImage(M) {
        if (g.value && g.value.chart) {
          const V = g.value.chart, L = M || "image/png", B = V.toBase64Image(L), k = document.createElement("a");
          k.href = B, k.download = `chart.${L.split("/")[1] || "png"}`, k.click();
        }
      }
    }
    const b = new p();
    t(b), or(() => {
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
    Ws(() => {
      if (o?.value && h.registerInstance(o.value, b, "ChartWidget", u), r.value)
        for (const v of Object.keys(a))
          (!(v in r.value) || r.value[v] === void 0) && (r.value[v] = a[v]);
    }), Ss(n, (v, M) => {
      S(v, M);
    });
    const { update: S } = ja(n, "ChartData", l), T = Q(() => {
      if (C().some(
        (L) => L.chartType?.value && L.chartType.value !== r.value?.chartType?.value
      ))
        return _s;
      const M = r.value?.chartType?.value ?? "bar";
      return {
        bar: _s,
        line: df,
        radar: gf,
        pie: uf,
        doughnut: hf,
        polarArea: ff
      }[M] || _s;
    }), y = ze(0);
    Ss(() => r.value, (v) => {
      y.value++;
    }, { deep: !0 });
    function O(...v) {
      return v.find((M) => M != null && M !== "");
    }
    function R(v, M) {
      const V = v;
      return typeof V?.get == "function" ? V.get(M) : V?.[M];
    }
    function C() {
      const v = r.value?.seriesSettings;
      return v ? typeof v.toArray == "function" ? v.toArray() : Array.isArray(v) ? v : [] : [];
    }
    const D = e({
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
    console.log(D.backgroundColor.value);
    const N = Q(() => {
      if (!l.value) return null;
      const v = JSON.parse(JSON.stringify(l.value)), M = C(), V = M.length > 0;
      return v.datasets && Array.isArray(v.datasets) && (v.datasets = v.datasets.map((L, B) => {
        const k = M.find((lt) => {
          const Pt = lt.seriesIndex?.value;
          return Pt != null && Pt !== "" && Number(Pt) === B;
        }), K = k?.chartType?.value ?? D.chartType?.value ?? "bar", Z = k?.xAxisId?.value, ut = k?.yAxisId?.value, gt = O(
          k?.borderColor?.value,
          r.value?.borderColor?.value,
          L.borderColor
        ), ft = O(
          k?.backgroundColor?.value,
          r.value?.backgroundColor?.value,
          L.backgroundColor
        ), pt = O(
          k?.borderWidth?.value,
          r.value?.borderWidth?.value,
          L.borderWidth
        ), at = O(
          k?.borderDash?.value,
          r.value?.borderDash?.value,
          L.borderDash
        );
        let it = {
          ...L,
          borderColor: gt,
          backgroundColor: ft,
          borderWidth: pt
        };
        if (V && (it.type = K, Z && (it.xAxisID = Z), ut && (it.yAxisID = ut), k?.label?.value && (it.label = (k?.label).value)), K === "line") {
          const lt = k?.showPoints?.value ?? r.value?.showPoints?.value ?? !0, Pt = k?.fill?.value ?? r.value?.fill?.value ?? !1, I = O(
            k?.pointColor?.value,
            r.value?.pointColor?.value,
            L.pointBackgroundColor
          ), J = k?.pointSize?.value ?? r.value?.pointSize?.value ?? 3;
          it = {
            ...it,
            borderDash: at,
            fill: Pt ? "origin" : !1,
            // Point settings
            pointRadius: lt ? J : 0,
            pointBackgroundColor: I,
            pointBorderColor: I,
            pointHoverRadius: lt ? J + 2 : 0
          };
        } else K === "bar" ? it = {
          ...it,
          borderDash: at
        } : it = {
          ...it
        };
        return it;
      })), v;
    }), P = Q(() => {
      if (!r.value)
        return {
          responsive: !0
        };
      const v = D.annotationsEditMode.value, M = {};
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
          draggable: v,
          borderDash: v ? [5, 5] : void 0,
          enter({ element: W }) {
            v && (W.options.borderWidth = I.width + 1);
          },
          leave({ element: W }) {
            v && (W.options.borderWidth = I.width);
          },
          drag({ element: W }) {
            v && r.value.horizontalLines && (R(r.value.horizontalLines, J).value = W.y);
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
          draggable: v,
          borderDash: v ? [5, 5] : void 0,
          enter({ element: W }) {
            v && (W.options.borderWidth = I.width + 1);
          },
          leave({ element: W }) {
            v && (W.options.borderWidth = I.width);
          },
          drag({ element: W }) {
            v && r.value.verticalLines && (R(r.value.verticalLines, J).value = W.x);
          }
        };
      }), r.value.horizontalBoxes?.forEach((I, J) => {
        M[`hbox_${J}`] = {
          type: "box",
          yMin: I.yMin,
          yMax: I.yMax,
          backgroundColor: I.color,
          borderWidth: v ? 2 : 0,
          borderColor: v ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: v ? [5, 5] : void 0,
          label: I.label ? {
            display: !0,
            content: I.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: v,
          enter({ element: W }) {
            v && (W.options.borderWidth = 3);
          },
          leave({ element: W }) {
            v && (W.options.borderWidth = 2);
          },
          drag({ element: W }) {
            if (v && r.value.horizontalBoxes) {
              const xt = I.yMax - I.yMin;
              R(r.value.horizontalBoxes, J).yMin = W.y - xt / 2, R(r.value.horizontalBoxes, J).yMax = W.y + xt / 2;
            }
          }
        };
      }), r.value.verticalBoxes?.forEach((I, J) => {
        M[`vbox_${J}`] = {
          type: "box",
          xMin: I.xMin,
          xMax: I.xMax,
          backgroundColor: I.color,
          borderWidth: v ? 2 : 0,
          borderColor: v ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: v ? [5, 5] : void 0,
          label: I.label ? {
            display: !0,
            content: I.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: v,
          enter({ element: W }) {
            v && (W.options.borderWidth = 3);
          },
          leave({ element: W }) {
            v && (W.options.borderWidth = 2);
          },
          drag({ element: W }) {
            if (v && r.value.verticalBoxes) {
              const xt = I.xMax - I.xMin;
              R(r.value.verticalBoxes, J).xMin = W.x - xt / 2, R(r.value.verticalBoxes, J).xMax = W.x + xt / 2;
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
        const xt = (me) => me.toString().padStart(2, "0"), li = {
          yyyy: W.getFullYear().toString(),
          yy: W.getFullYear().toString().slice(-2),
          MM: xt(W.getMonth() + 1),
          M: (W.getMonth() + 1).toString(),
          dd: xt(W.getDate()),
          d: W.getDate().toString(),
          HH: xt(W.getHours()),
          H: W.getHours().toString(),
          mm: xt(W.getMinutes()),
          m: W.getMinutes().toString(),
          ss: xt(W.getSeconds()),
          s: W.getSeconds().toString()
        };
        let ss = J;
        return Object.keys(li).sort((me, Ca) => Ca.length - me.length).forEach((me) => {
          ss = ss.replace(new RegExp(me, "g"), li[me]);
        }), ss;
      }, B = D.dateDisplayFormat.value, k = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), Z = r.value?.seriesSettings && r.value.seriesSettings.length > 0, ut = {};
      Z && (k.add("x"), K.add("y"), r.value.seriesSettings?.forEach((I) => {
        I?.xAxisId?.value && k.add(I.xAxisId.value), I.yAxisId?.value && (K.add(I.yAxisId.value), I.yAxisTitle?.value && (ut[I.yAxisId.value] = I.yAxisTitle.value));
      }));
      const gt = D.stacked.value === !0 || D.stacked.value === "true", ft = r.value.xAxisTitle?.value ?? "", pt = r.value.yAxisTitle?.value ?? "", at = {
        y: {
          stacked: gt,
          title: {
            display: !!pt,
            text: pt
          },
          grid: {
            display: D.showHorizontalGrid.value,
            color: D.horizontalGridColor.value,
            lineWidth: D.horizontalGridWidth.value
          }
        },
        x: {
          stacked: gt,
          title: {
            display: !!ft,
            text: ft
          },
          grid: {
            display: D.showVerticalGrid.value,
            color: D.verticalGridColor.value,
            lineWidth: D.verticalGridWidth.value
          },
          ticks: {
            callback: function(I, J, W) {
              const xt = this.getLabelForValue(I);
              return L(xt, B);
            }
          }
        }
      };
      k.size > 1 && k.forEach((I) => {
        I !== "x" && (at[I] = {
          type: "category",
          // Explicitly set the axis type
          grid: {
            display: D.showVerticalGrid.value,
            color: D.verticalGridColor.value,
            lineWidth: D.verticalGridWidth.value
          },
          ticks: {
            callback: function(J, W, xt) {
              const li = this.getLabelForValue(J);
              return L(li, B);
            }
          },
          // Position secondary axes at the top
          position: "top"
        });
      }), K.size > 1 && K.forEach((I) => {
        if (I !== "y") {
          const J = ut[I] ?? "";
          at[I] = {
            type: "linear",
            // Explicitly set the axis type
            title: {
              display: !!J,
              text: J
            },
            grid: {
              display: D.showHorizontalGrid.value,
              color: D.horizontalGridColor.value,
              lineWidth: D.horizontalGridWidth.value
            },
            // Position secondary Y-axes on the right
            position: "right"
          };
        }
      });
      const Pt = {
        responsive: !0,
        maintainAspectRatio: !0,
        indexAxis: D.barOrientation.value === "horizontal" ? "y" : "x",
        scales: at,
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
      return console.log("Chart options:", Pt), Pt;
    });
    return (v, M) => (Ot(), It("div", {
      class: "w-full h-full",
      onClick: m,
      onContextmenu: za(_, ["prevent"])
    }, [
      N.value && P.value ? (Ot(), lr(Va(T.value), {
        key: y.value,
        id: "my-chart-id",
        ref_key: "chartRef",
        ref: g,
        options: P.value,
        data: N.value
      }, null, 8, ["options", "data"])) : cr("", !0)
    ], 32));
  }
}), Xg = {
  class: "settings-section",
  "data-section": "Reference Lines & Areas"
}, Yg = { class: "settings-container" }, Ug = { class: "settings-block" }, $g = { class: "settings-block" }, Zg = { class: "block__head" }, Kg = { class: "entry__head" }, qg = { class: "settings-block" }, Jg = { class: "block__head" }, Qg = { class: "entry__head" }, tp = { class: "settings-block" }, ep = { class: "block__head" }, ip = { class: "entry__head" }, sp = { class: "settings-block" }, np = { class: "block__head" }, op = { class: "entry__head" }, rp = /* @__PURE__ */ Vi({
  __name: "ChartWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const t = ar(i, "modelValue");
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
    return Ws(() => {
      t.value.seriesSettings || (t.value.seriesSettings = []), t.value.seriesSettings.forEach((m) => {
        m.label || (m.label = new E("")), m.borderColor || (m.borderColor = new E("")), m.backgroundColor || (m.backgroundColor = new E("")), m.borderWidth || (m.borderWidth = new E(2)), m.borderDash || (m.borderDash = new E([])), m.fill || (m.fill = new E(!1)), m.showPoints || (m.showPoints = new E(!0)), m.pointColor || (m.pointColor = new E("")), m.pointSize || (m.pointSize = new E(3));
      });
    }), (m, _) => (Ot(), It("section", Xg, [
      ot("div", Yg, [
        ot("div", Ug, [
          t.value.annotationsEditMode ? (Ot(), lr(tt(Ka), {
            key: 0,
            label: "Enable Drag & Drop (Move annotations in chart)",
            modelValue: t.value.annotationsEditMode.value,
            "onUpdate:modelValue": _[0] || (_[0] = (S) => t.value.annotationsEditMode.value = S)
          }, null, 8, ["modelValue"])) : cr("", !0)
        ]),
        ot("div", $g, [
          ot("div", Zg, [
            _[2] || (_[2] = ot("h3", null, "Horizontal Lines (Y-Axis)", -1)),
            st(tt(Xt), {
              size: "sm",
              onClick: c
            }, {
              default: Gt(() => [..._[1] || (_[1] = [
                jt("Add Line", -1)
              ])]),
              _: 1
            })
          ]),
          (Ot(!0), It(ci, null, hi(n.value, (S, T) => (Ot(), It("div", {
            key: `hline_${T}`,
            class: "entry"
          }, [
            ot("div", Kg, [
              ot("strong", null, "Line " + di(T + 1), 1),
              st(tt(Xt), {
                size: "sm",
                intent: "danger",
                onClick: (y) => h(T)
              }, {
                default: Gt(() => [..._[3] || (_[3] = [
                  jt("Remove", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            st(tt(Et), {
              label: "Y-Value",
              modelValue: S.value,
              "onUpdate:modelValue": (y) => S.value = y,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(gi), {
              label: "Color",
              modelValue: S.color,
              "onUpdate:modelValue": (y) => S.color = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(Et), {
              label: "Line Width (px)",
              modelValue: S.width,
              "onUpdate:modelValue": (y) => S.width = y,
              modelModifiers: { number: !0 },
              type: "number",
              min: 1,
              max: 10
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(Et), {
              label: "Label (optional)",
              modelValue: S.label,
              "onUpdate:modelValue": (y) => S.label = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]))), 128))
        ]),
        ot("div", qg, [
          ot("div", Jg, [
            _[5] || (_[5] = ot("h3", null, "Vertical Lines (X-Axis)", -1)),
            st(tt(Xt), {
              size: "sm",
              onClick: d
            }, {
              default: Gt(() => [..._[4] || (_[4] = [
                jt("Add Line", -1)
              ])]),
              _: 1
            })
          ]),
          (Ot(!0), It(ci, null, hi(o.value, (S, T) => (Ot(), It("div", {
            key: `vline_${T}`,
            class: "entry"
          }, [
            ot("div", Qg, [
              ot("strong", null, "Line " + di(T + 1), 1),
              st(tt(Xt), {
                size: "sm",
                intent: "danger",
                onClick: (y) => u(T)
              }, {
                default: Gt(() => [..._[6] || (_[6] = [
                  jt("Remove", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            st(tt(Et), {
              label: "X-Value",
              modelValue: S.value,
              "onUpdate:modelValue": (y) => S.value = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(gi), {
              label: "Color",
              modelValue: S.color,
              "onUpdate:modelValue": (y) => S.color = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(Et), {
              label: "Line Width (px)",
              modelValue: S.width,
              "onUpdate:modelValue": (y) => S.width = y,
              modelModifiers: { number: !0 },
              type: "number",
              min: 1,
              max: 10
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(Et), {
              label: "Label (optional)",
              modelValue: S.label,
              "onUpdate:modelValue": (y) => S.label = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]))), 128))
        ]),
        ot("div", tp, [
          ot("div", ep, [
            _[8] || (_[8] = ot("h3", null, "Horizontal Areas (Y-Axis Ranges)", -1)),
            st(tt(Xt), {
              size: "sm",
              onClick: f
            }, {
              default: Gt(() => [..._[7] || (_[7] = [
                jt("Add Area", -1)
              ])]),
              _: 1
            })
          ]),
          (Ot(!0), It(ci, null, hi(r.value, (S, T) => (Ot(), It("div", {
            key: `hbox_${T}`,
            class: "entry"
          }, [
            ot("div", ip, [
              ot("strong", null, "Area " + di(T + 1), 1),
              st(tt(Xt), {
                size: "sm",
                intent: "danger",
                onClick: (y) => g(T)
              }, {
                default: Gt(() => [..._[9] || (_[9] = [
                  jt("Remove", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            st(tt(Et), {
              label: "Y-Min",
              modelValue: S.yMin,
              "onUpdate:modelValue": (y) => S.yMin = y,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(Et), {
              label: "Y-Max",
              modelValue: S.yMax,
              "onUpdate:modelValue": (y) => S.yMax = y,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(gi), {
              label: "Fill Color",
              modelValue: S.color,
              "onUpdate:modelValue": (y) => S.color = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(Et), {
              label: "Label (optional)",
              modelValue: S.label,
              "onUpdate:modelValue": (y) => S.label = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]))), 128))
        ]),
        ot("div", sp, [
          ot("div", np, [
            _[11] || (_[11] = ot("h3", null, "Vertical Areas (X-Axis Ranges)", -1)),
            st(tt(Xt), {
              size: "sm",
              onClick: p
            }, {
              default: Gt(() => [..._[10] || (_[10] = [
                jt("Add Area", -1)
              ])]),
              _: 1
            })
          ]),
          (Ot(!0), It(ci, null, hi(a.value, (S, T) => (Ot(), It("div", {
            key: `vbox_${T}`,
            class: "entry"
          }, [
            ot("div", op, [
              ot("strong", null, "Area " + di(T + 1), 1),
              st(tt(Xt), {
                size: "sm",
                intent: "danger",
                onClick: (y) => b(T)
              }, {
                default: Gt(() => [..._[12] || (_[12] = [
                  jt("Remove", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]),
            st(tt(Et), {
              label: "X-Min",
              modelValue: S.xMin,
              "onUpdate:modelValue": (y) => S.xMin = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(Et), {
              label: "X-Max",
              modelValue: S.xMax,
              "onUpdate:modelValue": (y) => S.xMax = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(gi), {
              label: "Fill Color",
              modelValue: S.color,
              "onUpdate:modelValue": (y) => S.color = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            st(tt(Et), {
              label: "Label (optional)",
              modelValue: S.label,
              "onUpdate:modelValue": (y) => S.label = y
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]))), 128))
        ])
      ])
    ]));
  }
}), ap = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, lp = /* @__PURE__ */ ap(rp, [["__scopeId", "data-v-a972ff04"]]), cp = `<?xml version="1.0" encoding="UTF-8"?>
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
`, hp = `<?xml version="1.0" encoding="UTF-8"?>
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
`, dp = [
  {
    name: "Chart Clicked",
    type: "click",
    description: "Triggered when the chart is clicked",
    payloadType: gn
  },
  {
    name: "Chart Right Clicked",
    type: "right_click",
    description: "Triggered when the chart is right-clicked",
    payloadType: gn
  }
];
var up = Object.defineProperty, fp = Object.getOwnPropertyDescriptor, fn = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? fp(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && up(t, e, n), n;
}, sr = (i, t) => (e, s) => t(e, s, i);
w.eINSTANCE;
const Se = "ChartWidget";
let zi = class {
  constructor(i, t) {
    this.events = i, this.actions = t;
  }
  type = Se;
  component = jg;
  settingsComponent = lp;
  supportedDSTypes = [];
  icon = Ja;
  name = "Chart";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: cp,
    uri: "/chart-settings.ui.xmi",
    ePackage: () => w.eINSTANCE,
    create: () => new x(),
    /* Forms for classes that appear inside this one's lists. */
    entryForms: [{ xmi: hp, uri: "/chart-series.ui.xmi" }],
    /*
     * What the model does not describe: the reference lines and areas, four
     * lists the Ecore does not type - there is no class to build a form
     * from. Named so that what is modelled is not offered twice, in two
     * forms that could disagree.
     */
    unmodelledSections: ["Reference Lines & Areas"]
  };
  register() {
    this.events.registerWidget(Se, dp), this.actions.registerWidgetType(Se, be, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Se), this.actions.unregisterWidgetType(Se);
  }
};
fn([
  ka()
], zi.prototype, "register", 1);
fn([
  Pa()
], zi.prototype, "unregister", 1);
zi = fn([
  Na({
    service: [qa],
    properties: { "widget.type": Se }
  }),
  sr(0, pn(La)),
  sr(1, pn(Ma))
], zi);
export {
  x as ChartSettingsImpl,
  jg as ChartWidget,
  zi as ChartWidgetProvider,
  lp as ChartWidgetSettings,
  w as ChartsettingsPackage,
  cp as chartSettingsFormXmi,
  hp as seriesSettingsFormXmi
};
