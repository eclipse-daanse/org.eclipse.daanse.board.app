(function(){var i="ui.vue.widget.chart",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings-container[data-v-c5346fb1]{padding:16px}.settings-block[data-v-c5346fb1]{display:flex;flex-direction:column;gap:12px}.settings-block h3[data-v-c5346fb1]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--va-primary)}\n";})();
import { EVENT_ACTIONS_REGISTRY as Ca, EVENT_REGISTRY_ID as Aa, EVENT_ACTIONS_REGISTRY_ID as Ia } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Oa, deactivate as Ra, component as Da, inject as gn } from "@eclipse-daanse/tsm";
import { defineComponent as Gi, shallowRef as sr, h as vs, ref as zt, onMounted as Di, onUnmounted as nr, watch as Qe, toRaw as Ss, nextTick as La, version as Ma, isProxy as or, mergeModels as ka, toRefs as Pa, useModel as rr, inject as Ts, computed as ot, createElementBlock as _t, openBlock as F, withModifiers as Na, createBlock as K, createCommentVNode as j, resolveDynamicComponent as Va, resolveComponent as _e, Fragment as Xt, createVNode as H, withCtx as q, createElementVNode as W, createTextVNode as Mt, renderList as xe, toDisplayString as Ve, unref as dt } from "vue";
import { VariableWrapper as C, useVariableRepository as Ba, useDatasourceRepository as Fa } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as Ha } from "vue-router";
import { BasicEObject as ar, BasicEFactory as Wa, BasicEPackage as za, BasicEClass as pn, BasicEReference as J, BasicEAttribute as fi, EPackageRegistry as Q, createContainmentEList as Ga, createBasicEList as gi } from "@emfts/core";
import { WidgetAction as ni, WidgetActionInterface as Ua, Payload as mn } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as ut } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Xa } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: ja } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ya = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2049.5C22.5%2047.0147%2024.5147%2045%2027%2045H33C35.4853%2045%2037.5%2047.0147%2037.5%2049.5V93C37.5%2095.4853%2035.4853%2097.5%2033%2097.5H27C24.5147%2097.5%2022.5%2095.4853%2022.5%2093V49.5Z'%20fill='%23606060'/%3e%3cpath%20d='M52.5%2027C52.5%2024.5147%2054.5147%2022.5%2057%2022.5H63C65.4853%2022.5%2067.5%2024.5147%2067.5%2027V93C67.5%2095.4853%2065.4853%2097.5%2063%2097.5H57C54.5147%2097.5%2052.5%2095.4853%2052.5%2093V27Z'%20fill='%23606060'/%3e%3cpath%20d='M82.5%2072C82.5%2069.5147%2084.5147%2067.5%2087%2067.5H93C95.4853%2067.5%2097.5%2069.5147%2097.5%2072V93C97.5%2095.4853%2095.4853%2097.5%2093%2097.5H87C84.5147%2097.5%2082.5%2095.4853%2082.5%2093V72Z'%20fill='%23606060'/%3e%3c/svg%3e";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function oi(i) {
  return i + 0.5 | 0;
}
const $t = (i, t, e) => Math.max(Math.min(i, e), t);
function Ue(i) {
  return $t(oi(i * 2.55), 0, 255);
}
function qt(i) {
  return $t(oi(i * 255), 0, 255);
}
function Wt(i) {
  return $t(oi(i / 2.55) / 100, 0, 1);
}
function bn(i) {
  return $t(oi(i * 100), 0, 100);
}
const Rt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, ws = [..."0123456789ABCDEF"], $a = (i) => ws[i & 15], Za = (i) => ws[(i & 240) >> 4] + ws[i & 15], pi = (i) => (i & 240) >> 4 === (i & 15), Ka = (i) => pi(i.r) && pi(i.g) && pi(i.b) && pi(i.a);
function qa(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Rt[i[1]] * 17,
    g: 255 & Rt[i[2]] * 17,
    b: 255 & Rt[i[3]] * 17,
    a: t === 5 ? Rt[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Rt[i[1]] << 4 | Rt[i[2]],
    g: Rt[i[3]] << 4 | Rt[i[4]],
    b: Rt[i[5]] << 4 | Rt[i[6]],
    a: t === 9 ? Rt[i[7]] << 4 | Rt[i[8]] : 255
  })), e;
}
const Ja = (i, t) => i < 255 ? t(i) : "";
function Qa(i) {
  var t = Ka(i) ? $a : Za;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Ja(i.a, t) : void 0;
}
const tl = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function lr(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function el(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function il(i, t, e) {
  const s = lr(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function sl(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Hs(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, d;
  return o !== r && (d = o - r, c = a > 0.5 ? d / (2 - o - r) : d / (o + r), l = sl(e, s, n, d, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Ws(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(qt);
}
function zs(i, t, e) {
  return Ws(lr, i, t, e);
}
function nl(i, t, e) {
  return Ws(il, i, t, e);
}
function ol(i, t, e) {
  return Ws(el, i, t, e);
}
function cr(i) {
  return (i % 360 + 360) % 360;
}
function rl(i) {
  const t = tl.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? Ue(+t[5]) : qt(+t[5]));
  const n = cr(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = nl(n, o, r) : t[1] === "hsv" ? s = ol(n, o, r) : s = zs(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function al(i, t) {
  var e = Hs(i);
  e[0] = cr(e[0] + t), e = zs(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function ll(i) {
  if (!i)
    return;
  const t = Hs(i), e = t[0], s = bn(t[1]), n = bn(t[2]);
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
function cl() {
  const i = {}, t = Object.keys(_n), e = Object.keys(yn);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, yn[o]);
    o = parseInt(_n[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let mi;
function dl(i) {
  mi || (mi = cl(), mi.transparent = [0, 0, 0, 0]);
  const t = mi[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const ul = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function hl(i) {
  const t = ul.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? Ue(r) : $t(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Ue(s) : $t(s, 0, 255)), n = 255 & (t[4] ? Ue(n) : $t(n, 0, 255)), o = 255 & (t[6] ? Ue(o) : $t(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function fl(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Wt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const os = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, ve = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function gl(i, t, e) {
  const s = ve(Wt(i.r)), n = ve(Wt(i.g)), o = ve(Wt(i.b));
  return {
    r: qt(os(s + e * (ve(Wt(t.r)) - s))),
    g: qt(os(n + e * (ve(Wt(t.g)) - n))),
    b: qt(os(o + e * (ve(Wt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function bi(i, t, e) {
  if (i) {
    let s = Hs(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = zs(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function dr(i, t) {
  return i && Object.assign(t || {}, i);
}
function xn(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = qt(i[3]))) : (t = dr(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = qt(t.a)), t;
}
function pl(i) {
  return i.charAt(0) === "r" ? hl(i) : rl(i);
}
class ti {
  constructor(t) {
    if (t instanceof ti)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = xn(t) : e === "string" && (s = qa(t) || dl(t) || pl(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = dr(this._rgb);
    return t && (t.a = Wt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = xn(t);
  }
  rgbString() {
    return this._valid ? fl(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Qa(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? ll(this._rgb) : void 0;
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
    return t && (this._rgb = gl(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new ti(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = qt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = oi(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return bi(this._rgb, 2, t), this;
  }
  darken(t) {
    return bi(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return bi(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return bi(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return al(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function Bt() {
}
const ml = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function et(i) {
  return i == null;
}
function it(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function Y(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function pt(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function kt(i, t) {
  return pt(i) ? i : t;
}
function G(i, t) {
  return typeof i > "u" ? t : i;
}
const bl = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, ur = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function st(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function nt(i, t, e, s) {
  let n, o, r;
  if (it(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (Y(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function Li(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Mi(i) {
  if (it(i))
    return i.map(Mi);
  if (Y(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Mi(i[e[n]]);
    return t;
  }
  return i;
}
function hr(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function yl(i, t, e, s) {
  if (!hr(i))
    return;
  const n = t[i], o = e[i];
  Y(n) && Y(o) ? ei(n, o, s) : t[i] = Mi(o);
}
function ei(i, t, e) {
  const s = it(t) ? t : [
    t
  ], n = s.length;
  if (!Y(i))
    return i;
  e = e || {};
  const o = e.merger || yl;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !Y(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, d = l.length; c < d; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function Ze(i, t) {
  return ei(i, t, {
    merger: _l
  });
}
function _l(i, t, e) {
  if (!hr(i))
    return;
  const s = t[i], n = e[i];
  Y(s) && Y(n) ? Ze(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Mi(n));
}
const vn = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function xl(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function vl(i) {
  const t = xl(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function te(i, t) {
  return (vn[t] || (vn[t] = vl(t)))(i);
}
function Gs(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Ot = (i) => typeof i < "u", It = (i) => typeof i == "function", Sn = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function Sl(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const X = Math.PI, rt = 2 * X, Tl = rt + X, ki = Number.POSITIVE_INFINITY, js = X / 180, lt = X / 2, Dt = X / 4, Pi = X * 2 / 3, fr = Math.log10, Vt = Math.sign;
function Ke(i, t, e) {
  return Math.abs(i - t) < e;
}
function Tn(i) {
  const t = Math.round(i);
  i = Ke(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(fr(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function wl(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function El(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function ue(i) {
  return !El(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function Cl(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function Al(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function gt(i) {
  return i * (X / 180);
}
function ji(i) {
  return i * (180 / X);
}
function wn(i) {
  if (!pt(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Ni(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * X && (o += rt), {
    angle: o,
    distance: n
  };
}
function Ce(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Il(i, t) {
  return (i - t + Tl) % rt - X;
}
function St(i) {
  return (i % rt + rt) % rt;
}
function ii(i, t, e, s) {
  const n = St(i), o = St(t), r = St(e), a = St(o - n), l = St(r - n), c = St(n - o), d = St(n - r);
  return n === o || n === r || s && o === r || a > l && c < d;
}
function Tt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Ol(i) {
  return Tt(i, -32768, 32767);
}
function Gt(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Us(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const ae = (i, t, e, s) => Us(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Rl = (i, t, e) => Us(i, e, (s) => i[s][t] >= e);
function Dl(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const gr = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Ll(i, t) {
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
  }), gr.forEach((e) => {
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
function En(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (gr.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function pr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const mr = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function br(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, mr.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function Ml(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Xs = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", vt = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, kl = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Pl(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, d = r.axis, { min: u, max: h, minDefined: f, maxDefined: g } = r.getUserBounds();
    if (f) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        ae(l, d, u).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : ae(t, d, r.getPixelForValue(u)).lo
      ), c) {
        const p = l.slice(0, n + 1).reverse().findIndex((m) => !et(m[a.axis]));
        n -= Math.max(0, p);
      }
      n = Tt(n, 0, s - 1);
    }
    if (g) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        ae(l, r.axis, h, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : ae(t, d, r.getPixelForValue(h), !0).hi + 1
      );
      if (c) {
        const m = l.slice(p - 1).findIndex((_) => !et(_[a.axis]));
        p += Math.max(0, m);
      }
      o = Tt(p, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function Nl(i) {
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
const yi = (i) => i === 0 || i === 1, Cn = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * rt / e)), An = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * rt / e) + 1, qe = {
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
  easeInOutSine: (i) => -0.5 * (Math.cos(X * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => yi(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => yi(i) ? i : Cn(i, 0.075, 0.3),
  easeOutElastic: (i) => yi(i) ? i : An(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return yi(i) ? i : i < 0.5 ? 0.5 * Cn(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * An(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - qe.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? qe.easeInBounce(i * 2) * 0.5 : qe.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function Ys(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function In(i) {
  return Ys(i) ? i : new ti(i);
}
function rs(i) {
  return Ys(i) ? i : new ti(i).saturate(0.5).darken(0.1).hexString();
}
const Vl = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Bl = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Fl(i) {
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
      properties: Bl
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
const On = /* @__PURE__ */ new Map();
function Wl(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = On.get(e);
  return s || (s = new Intl.NumberFormat(i, t), On.set(e, s)), s;
}
function Ui(i, t, e) {
  return Wl(t, e).format(i);
}
const zl = {
  values(i) {
    return it(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = Gl(i, e);
    }
    const r = fr(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Ui(i, s, l);
  }
};
function Gl(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var $s = {
  formatters: zl
};
function jl(i) {
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
const he = /* @__PURE__ */ Object.create(null), Es = /* @__PURE__ */ Object.create(null);
function Je(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function as(i, t, e) {
  return typeof t == "string" ? ei(Je(i, t), e) : ei(Je(i, ""), t);
}
class Ul {
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => rs(n.backgroundColor), this.hoverBorderColor = (s, n) => rs(n.borderColor), this.hoverColor = (s, n) => rs(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return as(this, t, e);
  }
  get(t) {
    return Je(this, t);
  }
  describe(t, e) {
    return as(Es, t, e);
  }
  override(t, e) {
    return as(he, t, e);
  }
  route(t, e, s, n) {
    const o = Je(this, t), r = Je(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return Y(l) ? Object.assign({}, c, l) : G(l, c);
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
var ht = /* @__PURE__ */ new Ul({
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
  Fl,
  Hl,
  jl
]);
function Xl(i) {
  return !i || et(i.size) || et(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Vi(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function Yl(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, d, u, h;
  for (l = 0; l < a; l++)
    if (u = e[l], u != null && !it(u))
      r = Vi(i, n, o, r, u);
    else if (it(u))
      for (c = 0, d = u.length; c < d; c++)
        h = u[c], h != null && !it(h) && (r = Vi(i, n, o, r, h));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete n[o[l]];
    o.splice(0, f);
  }
  return r;
}
function se(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function Rn(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function Cs(i, t, e, s) {
  yr(i, t, e, s, null);
}
function yr(i, t, e, s, n) {
  let o, r, a, l, c, d, u, h;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let m = (g || 0) * js;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(m), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (i.beginPath(), f) {
      // Default includes circle
      default:
        n ? i.ellipse(e, s, n / 2, p, 0, 0, rt) : i.arc(e, s, p, 0, rt), i.closePath();
        break;
      case "triangle":
        d = n ? n / 2 : p, i.moveTo(e + Math.sin(m) * d, s - Math.cos(m) * p), m += Pi, i.lineTo(e + Math.sin(m) * d, s - Math.cos(m) * p), m += Pi, i.lineTo(e + Math.sin(m) * d, s - Math.cos(m) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(m + Dt) * l, u = Math.cos(m + Dt) * (n ? n / 2 - c : l), a = Math.sin(m + Dt) * l, h = Math.sin(m + Dt) * (n ? n / 2 - c : l), i.arc(e - u, s - a, c, m - X, m - lt), i.arc(e + h, s - r, c, m - lt, m), i.arc(e + u, s + a, c, m, m + lt), i.arc(e - h, s + r, c, m + lt, m + X), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, d = n ? n / 2 : l, i.rect(e - d, s - l, 2 * d, 2 * l);
          break;
        }
        m += Dt;
      /* falls through */
      case "rectRot":
        u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + h, s - r), i.lineTo(e + u, s + a), i.lineTo(e - h, s + r), i.closePath();
        break;
      case "crossRot":
        m += Dt;
      /* falls through */
      case "cross":
        u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r);
        break;
      case "star":
        u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r), m += Dt, u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r);
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
function jt(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function ri(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function ai(i) {
  i.restore();
}
function $l(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Zl(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Kl(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), et(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function ql(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, d = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, d), i.lineTo(a, d), i.stroke();
  }
}
function Jl(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function fe(i, t, e, s, n, o = {}) {
  const r = it(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, Kl(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Jl(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), et(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), ql(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Ae(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * X, X, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, X, lt, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, lt, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -lt, !0), i.lineTo(e + r.topLeft, s);
}
const Ql = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, tc = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function ec(i, t) {
  const e = ("" + i).match(Ql);
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
const ic = (i) => +i || 0;
function Zs(i, t) {
  const e = {}, s = Y(t), n = s ? Object.keys(t) : t, o = Y(i) ? s ? (r) => G(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = ic(o(r));
  return e;
}
function _r(i) {
  return Zs(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Jt(i) {
  return Zs(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function mt(i) {
  const t = _r(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function ft(i, t) {
  i = i || {}, t = t || ht.font;
  let e = G(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = G(i.style, t.style);
  s && !("" + s).match(tc) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: G(i.family, t.family),
    lineHeight: ec(G(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: G(i.weight, t.weight),
    string: ""
  };
  return n.string = Xl(n), n;
}
function _i(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function sc(i, t, e) {
  const { min: s, max: n } = i, o = ur(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function ie(i, t) {
  return Object.assign(Object.create(i), t);
}
function Ks(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = Tr("_fallback", i));
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
      return vr(a, l, () => uc(l, t, i, a));
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
      return Ln(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Ln(a);
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
function Ie(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: xr(i, s),
    setContext: (o) => Ie(i, o, e, s),
    override: (o) => Ie(i.override(o), t, e, s)
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
      return vr(o, r, () => oc(o, r, a));
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
function xr(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: It(e) ? e : () => e,
    isIndexable: It(s) ? s : () => s
  };
}
const nc = (i, t) => i ? i + Gs(t) : t, qs = (i, t) => Y(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function vr(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function oc(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return It(a) && r.isScriptable(t) && (a = rc(t, a, i, e)), it(a) && a.length && (a = ac(t, a, i, r.isIndexable)), qs(t, a) && (a = Ie(a, n, o && o[t], r)), a;
}
function rc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), qs(i, l) && (l = Js(n._scopes, n, i, l)), l;
}
function ac(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (Y(t[0])) {
    const l = t, c = n._scopes.filter((d) => d !== l);
    t = [];
    for (const d of l) {
      const u = Js(c, n, i, d);
      t.push(Ie(u, o, r && r[i], a));
    }
  }
  return t;
}
function Sr(i, t, e) {
  return It(i) ? i(t, e) : i;
}
const lc = (i, t) => i === !0 ? t : typeof i == "string" ? te(t, i) : void 0;
function cc(i, t, e, s, n) {
  for (const o of t) {
    const r = lc(e, o);
    if (r) {
      i.add(r);
      const a = Sr(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function Js(i, t, e, s) {
  const n = t._rootScopes, o = Sr(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Dn(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Dn(a, r, o, l, s), l === null) ? !1 : Ks(Array.from(a), [
    ""
  ], n, o, () => dc(t, e, s));
}
function Dn(i, t, e, s, n) {
  for (; e; )
    e = cc(i, t, e, s, n);
  return e;
}
function dc(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return it(n) && Y(e) ? e : n || {};
}
function uc(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Tr(nc(o, i), e), typeof n < "u")
      return qs(i, n) ? Js(e, s, i, n) : n;
}
function Tr(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function Ln(i) {
  let t = i._keys;
  return t || (t = i._keys = hc(i._scopes)), t;
}
function hc(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function wr(i, t, e, s) {
  const { iScale: n } = i, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, l, c, d;
  for (a = 0, l = s; a < l; ++a)
    c = a + e, d = t[c], r[a] = {
      r: n.parse(te(d, o), c)
    };
  return r;
}
const fc = Number.EPSILON || 1e-14, Oe = (i, t) => t < i.length && !i[t].skip && i[t], Er = (i) => i === "x" ? "y" : "x";
function gc(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = Ce(o, n), l = Ce(r, o);
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
function pc(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Oe(i, 0);
  for (let d = 0; d < s - 1; ++d)
    if (l = c, c = Oe(i, d + 1), !(!l || !c)) {
      if (Ke(t[d], 0, fc)) {
        e[d] = e[d + 1] = 0;
        continue;
      }
      n = e[d] / t[d], o = e[d + 1] / t[d], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[d] = n * r * t[d], e[d + 1] = o * r * t[d]);
    }
}
function mc(i, t, e = "x") {
  const s = Er(e), n = i.length;
  let o, r, a, l = Oe(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Oe(i, c + 1), !a)
      continue;
    const d = a[e], u = a[s];
    r && (o = (d - r[e]) / 3, a[`cp1${e}`] = d - o, a[`cp1${s}`] = u - o * t[c]), l && (o = (l[e] - d) / 3, a[`cp2${e}`] = d + o, a[`cp2${s}`] = u + o * t[c]);
  }
}
function bc(i, t = "x") {
  const e = Er(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Oe(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Oe(i, r + 1), !!l) {
      if (c) {
        const d = c[t] - l[t];
        n[r] = d !== 0 ? (c[e] - l[e]) / d : 0;
      }
      o[r] = a ? c ? Vt(n[r - 1]) !== Vt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  pc(i, n, o), mc(i, o, t);
}
function xi(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function yc(i, t) {
  let e, s, n, o, r, a = jt(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && jt(i[e + 1], t), o && (n = i[e], r && (n.cp1x = xi(n.cp1x, t.left, t.right), n.cp1y = xi(n.cp1y, t.top, t.bottom)), a && (n.cp2x = xi(n.cp2x, t.left, t.right), n.cp2y = xi(n.cp2y, t.top, t.bottom)));
}
function _c(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    bc(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = gc(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && yc(i, e);
}
function Qs() {
  return typeof window < "u" && typeof document < "u";
}
function tn(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Bi(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Xi = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function xc(i, t) {
  return Xi(i).getPropertyValue(t);
}
const vc = [
  "top",
  "right",
  "bottom",
  "left"
];
function ce(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = vc[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Sc = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Tc(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (Sc(n, o, i.target))
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
function oe(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Xi(e), o = n.boxSizing === "border-box", r = ce(n, "padding"), a = ce(n, "border", "width"), { x: l, y: c, box: d } = Tc(i, e), u = r.left + (d && a.left), h = r.top + (d && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - u) / f * e.width / s),
    y: Math.round((c - h) / g * e.height / s)
  };
}
function wc(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && tn(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Xi(o), l = ce(a, "border", "width"), c = ce(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Bi(a.maxWidth, o, "clientWidth"), n = Bi(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || ki,
    maxHeight: n || ki
  };
}
const Zt = (i) => Math.round(i * 10) / 10;
function Ec(i, t, e, s) {
  const n = Xi(i), o = ce(n, "margin"), r = Bi(n.maxWidth, i, "clientWidth") || ki, a = Bi(n.maxHeight, i, "clientHeight") || ki, l = wc(i, t, e);
  let { width: c, height: d } = l;
  if (n.boxSizing === "content-box") {
    const h = ce(n, "border", "width"), f = ce(n, "padding");
    c -= f.width + h.width, d -= f.height + h.height;
  }
  return c = Math.max(0, c - o.width), d = Math.max(0, s ? c / s : d - o.height), c = Zt(Math.min(c, r, l.maxWidth)), d = Zt(Math.min(d, a, l.maxHeight)), c && !d && (d = Zt(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && d > l.height && (d = l.height, c = Zt(Math.floor(d * s))), {
    width: c,
    height: d
  };
}
function Mn(i, t, e) {
  const s = t || 1, n = Zt(i.height * s), o = Zt(i.width * s);
  i.height = Zt(i.height), i.width = Zt(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Cc = (function() {
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
function kn(i, t) {
  const e = xc(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function re(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Ac(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Ic(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = re(i, n, e), a = re(n, o, e), l = re(o, t, e), c = re(r, a, e), d = re(a, l, e);
  return re(c, d, e);
}
const Oc = function(i, t) {
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
}, Rc = function() {
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
  return i ? Oc(t, e) : Rc();
}
function Cr(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Ar(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Ir(i) {
  return i === "angle" ? {
    between: ii,
    compare: Il,
    normalize: St
  } : {
    between: Gt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Pn({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function Dc(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = Ir(s), l = t.length;
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
function Or(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Ir(s), { start: d, end: u, loop: h, style: f } = Dc(i, t, e), g = [];
  let p = !1, m = null, _, S, w;
  const A = () => l(n, w, _) && a(n, w) !== 0, T = () => a(o, _) === 0 || l(o, w, _), N = () => p || A(), I = () => !p || T();
  for (let P = d, B = d; P <= u; ++P)
    S = t[P % r], !S.skip && (_ = c(S[s]), _ !== w && (p = l(_, n, o), m === null && N() && (m = a(_, n) === 0 ? P : B), m !== null && I() && (g.push(Pn({
      start: m,
      end: P,
      loop: h,
      count: r,
      style: f
    })), m = null), B = P, w = _));
  return m !== null && g.push(Pn({
    start: m,
    end: u,
    loop: h,
    count: r,
    style: f
  })), g;
}
function Rr(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Or(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Lc(i, t, e, s) {
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
function Mc(i, t, e, s) {
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
  const o = !!i._loop, { start: r, end: a } = Lc(e, n, o, s);
  if (s === !0)
    return Nn(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return Nn(i, Mc(e, r, l, c), e, t);
}
function Nn(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Pc(i, t, e, s);
}
function Pc(i, t, e, s) {
  const n = i._chart.getContext(), o = Vn(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let d = o, u = t[0].start, h = u;
  function f(g, p, m, _) {
    const S = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= S;
      for (; e[p % l].skip; )
        p += S;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: m,
        style: _
      }), d = _, u = p % l);
    }
  }
  for (const g of t) {
    u = a ? u : g.start;
    let p = e[u % l], m;
    for (h = u + 1; h <= g.end; h++) {
      const _ = e[h % l];
      m = Vn(s.setContext(ie(n, {
        type: "segment",
        p0: p,
        p1: _,
        p0DataIndex: (h - 1) % l,
        p1DataIndex: h % l,
        datasetIndex: r
      }))), Nc(m, d) && f(u, h - 1, g.loop, d), p = _, d = m;
    }
    u < h - 1 && f(u, h - 1, g.loop, d);
  }
  return c;
}
function Vn(i) {
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
function Nc(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return Ys(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
function vi(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Vc(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: vi(e, t, "left"),
    right: vi(e, t, "right"),
    top: vi(s, t, "top"),
    bottom: vi(s, t, "bottom")
  } : t;
}
function Dr(i, t) {
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
class Bc {
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
var Ft = /* @__PURE__ */ new Bc();
const Bn = "transparent", Fc = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = In(i || Bn), n = s.valid && In(t || Bn);
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
    this._active = !0, this._fn = t.fn || Fc[t.type || typeof r], this._easing = qe[t.easing] || qe.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
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
class en {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!Y(t))
      return;
    const e = Object.keys(ht.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!Y(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (it(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = zc(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && Wc(t.options.$animations, s).then(() => {
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
      return Ft.add(this._chart, s), !0;
  }
}
function Wc(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function zc(i, t) {
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
function Gc(i, t, e) {
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
function jc(i) {
  let t, e, s, n;
  return Y(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Lr(i, t) {
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
    c = i.values[l], pt(c) && (o || t === 0 || Vt(t) === Vt(c)) && (t += c);
  }
  return !d && !s.all ? 0 : t;
}
function Uc(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, d;
  for (l = 0, c = r.length; l < c; ++l)
    d = r[l], a[l] = {
      [n]: d,
      [o]: i[d]
    };
  return a;
}
function ls(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Xc(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Yc(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function $c(i, t, e) {
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
function zn(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, d = Xc(o, r, s), u = t.length;
  let h;
  for (let f = 0; f < u; ++f) {
    const g = t[f], { [l]: p, [c]: m } = g, _ = g._stacks || (g._stacks = {});
    h = _[c] = $c(n, d, p), h[a] = m, h._top = Wn(h, r, !0, s.type), h._bottom = Wn(h, r, !1, s.type);
    const S = h._visualValues || (h._visualValues = {});
    S[a] = m;
  }
}
function cs(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function Zc(i, t) {
  return ie(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Kc(i, t, e) {
  return ie(i, {
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
function Be(i, t) {
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
const ds = (i) => i === "reset" || i === "none", Gn = (i, t) => t ? i : Object.assign({}, i), qc = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Lr(e, !0),
  values: null
};
class De {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = ls(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Be(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (u, h, f, g) => u === "x" ? h : u === "r" ? g : f, o = e.xAxisID = G(s.xAxisID, cs(t, "x")), r = e.yAxisID = G(s.yAxisID, cs(t, "y")), a = e.rAxisID = G(s.rAxisID, cs(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), d = e.vAxisID = n(l, r, o, a);
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
    this._data && En(this._data, this), t._stacked && Be(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (Y(e)) {
      const n = this._cachedMeta;
      this._data = Uc(e, n);
    } else if (s !== e) {
      if (s) {
        En(s, this);
        const n = this._cachedMeta;
        Be(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Ll(e, this), this._syncList = [], this._data = e;
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
    e._stacked = ls(e.vScale, e), e.stack !== s.stack && (n = !0, Be(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (zn(this, e._parsed), e._stacked = ls(e.vScale, e));
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
      it(n[t]) ? h = this.parseArrayData(s, n, t, e) : Y(n[t]) ? h = this.parseObjectData(s, n, t, e) : h = this.parsePrimitiveData(s, n, t, e);
      const f = () => u[a] === null || c && u[a] < c[a];
      for (d = 0; d < e; ++d)
        s._parsed[d + t] = u = h[d], l && (f() && (l = !1), c = u);
      s._sorted = l;
    }
    r && zn(this, h);
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
        x: o.parse(te(f, a), h),
        y: r.parse(te(f, l), h)
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
      keys: Lr(n, !0),
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
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = qc(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: u } = Yc(a);
    let h, f;
    function g() {
      f = n[h];
      const p = f[a.axis];
      return !pt(f[t.axis]) || d > p || u < p;
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
      r = e[n][t.axis], pt(r) && s.push(r);
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
    this.update(t || "default"), e._clip = jc(G(this.options.clip, Gc(e.xScale, e.yScale, this.getMaxOverflow())));
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
      o = r.$context || (r.$context = Kc(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Zc(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Ot(s);
    if (a)
      return Gn(a, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, t), u = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], h = c.getOptionScopes(this.getDataset(), d), f = Object.keys(ht.elements[t]), g = () => this.getContext(s, n, e), p = c.resolveNamedOptions(h, f, g, u);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(Gn(p, l))), p;
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
    const c = new en(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || ds(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    ds(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !ds(e) && this._resolveAnimations(void 0, e).update(t, s);
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
      s._stacked && Be(s, n);
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
function Jc(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = pr(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function Qc(i) {
  const t = i.iScale, e = Jc(t, i.type);
  let s = t._length, n, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (Ot(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (n = 0, o = e.length; n < o; ++n)
    r = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    r = t.getPixelForTick(n), l();
  return s;
}
function td(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return et(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function ed(i, t, e, s) {
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
function id(i, t, e, s) {
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
function Mr(i, t, e, s) {
  return it(i) ? id(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function jn(i, t, e, s) {
  const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
  let c, d, u, h;
  for (c = e, d = e + s; c < d; ++c)
    h = t[c], u = {}, u[n.axis] = a || n.parse(r[c], c), l.push(Mr(h, u, o, c));
  return l;
}
function us(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function sd(i, t, e) {
  return i !== 0 ? Vt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function nd(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function od(i, t, e, s) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: d } = nd(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = d : (o[Un(d, r, a, l)] = !0, n = c)), o[Un(n, r, a, l)] = !0, i.borderSkipped = o;
}
function Un(i, t, e, s) {
  return s ? (i = rd(i, t, e), i = Xn(i, e, t)) : i = Xn(i, t, e), i;
}
function rd(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Xn(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function ad(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class ld extends De {
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
    return jn(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return jn(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, d = r.axis === "x" ? a : l, u = [];
    let h, f, g, p;
    for (h = s, f = s + n; h < f; ++h)
      p = e[h], g = {}, g[o.axis] = o.parse(te(p, c), h), u.push(Mr(te(p, d), g, r, h));
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
    const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), r = o._custom, a = us(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(o[n.axis]);
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
      const g = this.getParsed(f), p = o || et(g[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, d), _ = (g._stacks || {})[a.axis], S = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !_ || us(g._custom) || r === _._top || r === _._bottom,
        x: c ? p.head : m.center,
        y: c ? m.center : p.head,
        height: c ? m.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : m.size
      };
      h && (S.options = u || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const w = S.options || t[f].options;
      od(S, w, _, r), ad(S, w, d.ratio), this.updateElement(t[f], f, S, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((d) => d.controller.options.grouped), o = s.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[s.axis], c = (d) => {
      const u = d._parsed.find((f) => f[s.axis] === l), h = u && u[d.vScale.axis];
      if (et(h) || isNaN(h))
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
      t[G(this.chart.options.indexAxis === "x" ? s.xAxisID : s.yAxisID, e)] = !0;
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
      min: a || Qc(e),
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
    const { _cachedMeta: { vScale: e, _stacked: s, index: n }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, d = us(c);
    let u = l[e.axis], h = 0, f = s ? this.applyStack(e, l, s) : u, g, p;
    f !== u && (h = f - u, f = u), d && (u = c.barStart, f = c.barEnd - c.barStart, u !== 0 && Vt(u) !== Vt(c.barEnd) && (h = 0), h += u);
    const m = !et(o) && !d ? o : h;
    let _ = e.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(h + f) : g = _, p = g - _, Math.abs(p) < r) {
      p = sd(p, e, a) * r, u === a && (_ -= p / 2);
      const S = e.getPixelForDecimal(0), w = e.getPixelForDecimal(1), A = Math.min(S, w), T = Math.max(S, w);
      _ = Math.max(Math.min(_, T), A), g = _ + p, s && !d && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(_));
    }
    if (_ === e.getPixelForValue(a)) {
      const S = Vt(p) * e.getLineWidthForValue(a) / 2;
      _ += S, p -= S;
    }
    return {
      size: p,
      base: _,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, o = n.skipNull, r = G(n.maxBarThickness, 1 / 0);
    let a, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const d = o ? this._getStackCount(t) : e.stackCount, u = n.barThickness === "flex" ? ed(t, e, n, d * c) : td(t, e, n, d * c), h = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(G(h, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
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
function cd(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < rt) {
    const a = i, l = a + t, c = Math.cos(a), d = Math.sin(a), u = Math.cos(l), h = Math.sin(l), f = (w, A, T) => ii(w, a, l, !0) ? 1 : Math.max(A, A * e, T, T * e), g = (w, A, T) => ii(w, a, l, !0) ? -1 : Math.min(A, A * e, T, T * e), p = f(0, c, u), m = f(lt, d, h), _ = g(X, c, u), S = g(X + lt, d, h);
    s = (p - _) / 2, n = (m - S) / 2, o = -(p + _) / 2, r = -(m + S) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class sn extends De {
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
      if (Y(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +te(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return gt(this.options.rotation - 90);
  }
  _getCircumference() {
    return gt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = rt, e = -rt;
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
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(bl(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: u } = this._getRotationExtents(), { ratioX: h, ratioY: f, offsetX: g, offsetY: p } = cd(u, d, l), m = (s.width - r) / h, _ = (s.height - r) / f, S = Math.max(Math.min(m, _) / 2, 0), w = ur(this.options.radius, S), A = Math.max(w * l, 0), T = (w - A) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * w, this.offsetY = p * w, n.total = this.calculateTotal(), this.outerRadius = w - T * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - T * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / rt);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, d = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, h = o && c.animateScale, f = h ? 0 : this.innerRadius, g = h ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, n);
    let _ = this._getRotation(), S;
    for (S = 0; S < e; ++S)
      _ += this._circumference(S, o);
    for (S = e; S < e + s; ++S) {
      const w = this._circumference(S, o), A = t[S], T = {
        x: d + this.offsetX,
        y: u + this.offsetY,
        startAngle: _,
        endAngle: _ + w,
        circumference: w,
        outerRadius: g,
        innerRadius: f
      };
      m && (T.options = p || this.resolveDataElementOptions(S, A.active ? "active" : n)), _ += w, this.updateElement(A, S, T, n);
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
    return e > 0 && !isNaN(t) ? rt * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Ui(e._parsed[t], s.options.locale);
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
    return Math.max(G(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class dd extends De {
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
    let { start: a, count: l } = Pl(e, n, r);
    this._drawStart = a, this._drawCount = l, Nl(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n), h = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, m = ue(g) ? g : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || o || n === "none", S = e + s, w = t.length;
    let A = e > 0 && this.getParsed(e - 1);
    for (let T = 0; T < w; ++T) {
      const N = t[T], I = _ ? N : {};
      if (T < e || T >= S) {
        I.skip = !0;
        continue;
      }
      const P = this.getParsed(T), B = et(P[f]), x = I[h] = r.getPixelForValue(P[h], T), b = I[f] = o || B ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, P, l) : P[f], T);
      I.skip = isNaN(x) || isNaN(b) || B, I.stop = T > 0 && Math.abs(P[h] - A[h]) > m, p && (I.parsed = P, I.raw = c.data[T]), u && (I.options = d || this.resolveDataElementOptions(T, N.active ? "active" : n)), _ || this.updateElement(N, T, I, n), A = P;
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
class ud extends De {
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
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Ui(e._parsed[t].r, s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, s, n) {
    return wr.bind(this)(t, e, s, n);
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
    const o = n === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, d = c.xCenter, u = c.yCenter, h = c.getIndexAngle(0) - 0.5 * X;
    let f = h, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, n, p);
    for (g = e; g < e + s; g++) {
      const m = t[g];
      let _ = f, S = f + this._computeAngle(g, n, p), w = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = S, o && (l.animateScale && (w = 0), l.animateRotate && (_ = S = h));
      const A = {
        x: d,
        y: u,
        innerRadius: 0,
        outerRadius: w,
        startAngle: _,
        endAngle: S,
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
    return this.chart.getDataVisibility(t) ? gt(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
}
class hd extends sn {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class fd extends De {
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
    return wr.bind(this)(t, e, s, n);
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
function ne() {
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
    return ne();
  }
  parse() {
    return ne();
  }
  format() {
    return ne();
  }
  add() {
    return ne();
  }
  diff() {
    return ne();
  }
  startOf() {
    return ne();
  }
  endOf() {
    return ne();
  }
}
var gd = {
  _date: nn
};
function pd(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Rl : ae;
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
        const { vScale: u } = n._cachedMeta, { _parsed: h } = i, f = h.slice(0, d.lo + 1).reverse().findIndex((p) => !et(p[u.axis]));
        d.lo -= Math.max(0, f);
        const g = h.slice(d.hi).findIndex((p) => !et(p[u.axis]));
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
function Yi(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: d } = o[a], { lo: u, hi: h } = pd(o[a], t, r, n);
    for (let f = u; f <= h; ++f) {
      const g = d[f];
      g.skip || s(g, c, f);
    }
  }
}
function md(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function hs(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Yi(i, e, t, function(a, l, c) {
    !n && !jt(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function bd(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: d } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: u } = Ni(r, {
      x: t.x,
      y: t.y
    });
    ii(u, c, d) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Yi(i, e, t, o), n;
}
function yd(i, t, e, s, n, o) {
  let r = [];
  const a = md(e);
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
  return Yi(i, e, t, c), r;
}
function fs(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? bd(i, t, e, n) : yd(i, t, e, s, n, o);
}
function Yn(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Yi(i, e, t, (l, c, d) => {
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
      const n = oe(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? hs(i, n, o, s, r) : fs(i, n, o, !1, s, r), l = [];
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
      const n = oe(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? hs(i, n, o, s, r) : fs(i, n, o, !1, s, r);
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
      const n = oe(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return hs(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = oe(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return fs(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = oe(t, i);
      return Yn(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = oe(t, i);
      return Yn(i, n, "y", e.intersect, s);
    }
  }
};
const kr = [
  "left",
  "top",
  "right",
  "bottom"
];
function Fe(i, t) {
  return i.filter((e) => e.pos === t);
}
function $n(i, t) {
  return i.filter((e) => kr.indexOf(e.pos) === -1 && e.box.axis === t);
}
function He(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function xd(i) {
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
function vd(i) {
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
function Sd(i, t) {
  const e = vd(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], d = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = d ? d * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = d ? d * n : l && t.availableHeight);
  }
  return e;
}
function Td(i) {
  const t = xd(i), e = He(t.filter((c) => c.box.fullSize), !0), s = He(Fe(t, "left"), !0), n = He(Fe(t, "right")), o = He(Fe(t, "top"), !0), r = He(Fe(t, "bottom")), a = $n(t, "x"), l = $n(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: Fe(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Zn(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Pr(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function wd(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!Y(n)) {
    e.size && (i[n] -= e.size);
    const u = s[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? o.height : o.width), e.size = u.size / u.count, i[n] += e.size;
  }
  o.getPadding && Pr(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Zn(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Zn(r, i, "top", "bottom")), c = a !== i.w, d = l !== i.h;
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
function Cd(i, t) {
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
function Xe(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, d;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Cd(a.horizontal, t));
    const { same: u, other: h } = wd(t, e, a, s);
    c |= u && n.length, d = d || h, l.fullSize || n.push(a);
  }
  return c && Xe(n, t, e, s) || d;
}
function Si(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function Kn(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * d, h = c.size || l.height;
      Ot(c.start) && (r = c.start), l.fullSize ? Si(l, n.left, r, e.outerWidth - n.right - n.left, h) : Si(l, t.left + c.placed, r, u, h), c.start = r, c.placed += u, r = l.bottom;
    } else {
      const u = t.h * d, h = c.size || l.width;
      Ot(c.start) && (o = c.start), l.fullSize ? Si(l, o, n.top, h, e.outerHeight - n.bottom - n.top) : Si(l, o, t.top + c.placed, h, u), c.start = o, c.placed += u, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Lt = {
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
    const n = mt(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = Td(i.boxes), l = a.vertical, c = a.horizontal;
    nt(i.boxes, (p) => {
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
    Pr(h, mt(s));
    const f = Object.assign({
      maxPadding: h,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), g = Sd(l.concat(c), u);
    Xe(a.fullSize, f, u, g), Xe(l, f, u, g), Xe(c, f, u, g) && Xe(l, f, u, g), Ed(f), Kn(a.leftAndTop, f, u, g), f.x += f.w, f.y += f.h, Kn(a.rightAndBottom, f, u, g), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, nt(a.chartArea, (p) => {
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
class Nr {
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
class Ad extends Nr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ii = "$chartjs", Id = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, qn = (i) => i === null || i === "";
function Od(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Ii] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", qn(n)) {
    const o = kn(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (qn(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = kn(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Vr = Cc ? {
  passive: !0
} : !1;
function Rd(i, t, e) {
  i && i.addEventListener(t, e, Vr);
}
function Dd(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Vr);
}
function Ld(i, t) {
  const e = Id[i.type] || i.type, { x: s, y: n } = oe(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function Fi(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function Md(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Fi(a.addedNodes, s), r = r && !Fi(a.removedNodes, s);
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
      r = r || Fi(a.removedNodes, s), r = r && !Fi(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const si = /* @__PURE__ */ new Map();
let Jn = 0;
function Br() {
  const i = window.devicePixelRatio;
  i !== Jn && (Jn = i, si.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Pd(i, t) {
  si.size || window.addEventListener("resize", Br), si.set(i, t);
}
function Nd(i) {
  si.delete(i), si.size || window.removeEventListener("resize", Br);
}
function Vd(i, t, e) {
  const s = i.canvas, n = s && tn(s);
  if (!n)
    return;
  const o = br((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || o(c, d);
  });
  return r.observe(n), Pd(i, o), r;
}
function gs(i, t, e) {
  e && e.disconnect(), t === "resize" && Nd(i);
}
function Bd(i, t, e) {
  const s = i.canvas, n = br((o) => {
    i.ctx !== null && e(Ld(o, i));
  }, i);
  return Rd(s, t, n), n;
}
class Fd extends Nr {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Od(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Ii])
      return !1;
    const s = e[Ii].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      et(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[Ii], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: Md,
      detach: kd,
      resize: Vd
    }[e] || Bd;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: gs,
      detach: gs,
      resize: gs
    }[e] || Dd)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Ec(t, e, s, n);
  }
  isAttached(t) {
    const e = t && tn(t);
    return !!(e && e.isConnected);
  }
}
function Hd(i) {
  return !Qs() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Ad : Fd;
}
class wt {
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
    return ue(this.x) && ue(this.y);
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
function Wd(i, t) {
  const e = i.options.ticks, s = zd(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? jd(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return Ud(t, c, o, r / n), c;
  const d = Gd(o, t, n);
  if (r > 0) {
    let u, h;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Ti(t, c, d, et(f) ? 0 : a - f, a), u = 0, h = r - 1; u < h; u++)
      Ti(t, c, d, o[u], o[u + 1]);
    return Ti(t, c, d, l, et(f) ? t.length : l + f), c;
  }
  return Ti(t, c, d), c;
}
function zd(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function Gd(i, t, e) {
  const s = Xd(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = wl(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function jd(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function Ud(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function Ti(i, t, e, s, n) {
  const o = G(s, 0), r = Math.min(G(n, i.length), i.length);
  let a = 0, l, c, d;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), d = o; d < 0; )
    a++, d = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === d && (t.push(i[c]), a++, d = Math.round(o + a * e));
}
function Xd(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const Yd = (i) => i === "left" ? "right" : i === "right" ? "left" : i, Qn = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, to = (i, t) => Math.min(t || i, i);
function eo(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function $d(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Zd(i, t) {
  nt(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function We(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function io(i, t) {
  if (!i.display)
    return 0;
  const e = ft(i.font, t), s = mt(i.padding);
  return (it(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function Kd(i, t) {
  return ie(i, {
    scale: t,
    type: "scale"
  });
}
function qd(i, t, e) {
  return ie(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Jd(i, t, e) {
  let s = Xs(i);
  return (e && t !== "right" || !e && t === "right") && (s = Yd(s)), s;
}
function Qd(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: d } = l;
  let u = 0, h, f, g;
  const p = r - n, m = a - o;
  if (i.isHorizontal()) {
    if (f = vt(s, o, a), Y(e)) {
      const _ = Object.keys(e)[0], S = e[_];
      g = d[_].getPixelForValue(S) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = Qn(i, e, t);
    h = a - o;
  } else {
    if (Y(e)) {
      const _ = Object.keys(e)[0], S = e[_];
      f = d[_].getPixelForValue(S) - m + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Qn(i, e, t);
    g = vt(s, r, n), u = e === "left" ? -lt : lt;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: h,
    rotation: u
  };
}
class Le extends wt {
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
      minDefined: pt(t),
      maxDefined: pt(e)
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
    st(this.options.beforeUpdate, [
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = sc(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? eo(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Wd(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    st(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    st(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    st(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), st(this.options[t], [
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
    st(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = st(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    st(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    st(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = to(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const d = this._getLabelSizes(), u = d.widest.width, h = d.highest.height, f = Tt(this.chart.width - u, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), u + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - We(t.grid) - e.padding - io(t.title, this.chart.options.font), c = Math.sqrt(u * u + h * h), r = ji(Math.min(Math.asin(Tt((d.highest.height + 6) / a, -1, 1)), Math.asin(Tt(l / c, -1, 1)) - Math.asin(Tt(h / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    st(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    st(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = io(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = We(o) + l) : (t.height = this.maxHeight, t.width = We(o) + l), s.display && this.ticks.length) {
        const { first: c, last: d, widest: u, highest: h } = this._getLabelSizes(), f = s.padding * 2, g = gt(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
        if (a) {
          const _ = s.mirror ? 0 : m * u.width + p * h.height;
          t.height = Math.min(this.maxHeight, t.height + _ + f);
        } else {
          const _ = s.mirror ? 0 : p * u.width + m * h.height;
          t.width = Math.min(this.maxWidth, t.width + _ + f);
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
    st(this.options.afterFit, [
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
      et(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = eo(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / to(e, s));
    let c = 0, d = 0, u, h, f, g, p, m, _, S, w, A, T;
    for (u = 0; u < e; u += l) {
      if (g = t[u].label, p = this._resolveTickFontOptions(u), n.font = m = p.string, _ = o[m] = o[m] || {
        data: {},
        gc: []
      }, S = p.lineHeight, w = A = 0, !et(g) && !it(g))
        w = Vi(n, _.data, _.gc, w, g), A = S;
      else if (it(g))
        for (h = 0, f = g.length; h < f; ++h)
          T = g[h], !et(T) && !it(T) && (w = Vi(n, _.data, _.gc, w, T), A += S);
      r.push(w), a.push(A), c = Math.max(w, c), d = Math.max(A, d);
    }
    Zd(o, e);
    const N = r.indexOf(c), I = a.indexOf(d), P = (B) => ({
      width: r[B] || 0,
      height: a[B] || 0
    });
    return {
      first: P(0),
      last: P(e - 1),
      widest: P(N),
      highest: P(I),
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
    return Ol(this._alignToPixels ? se(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = qd(this.getContext(), t, s));
    }
    return this.$context || (this.$context = Kd(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = gt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), h = We(o), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, _ = function(z) {
      return se(s, z, p);
    };
    let S, w, A, T, N, I, P, B, x, b, D, L;
    if (r === "top")
      S = _(this.bottom), I = this.bottom - h, B = S - m, b = _(t.top) + m, L = t.bottom;
    else if (r === "bottom")
      S = _(this.top), b = t.top, L = _(t.bottom) - m, I = S + m, B = this.top + h;
    else if (r === "left")
      S = _(this.right), N = this.right - h, P = S - m, x = _(t.left) + m, D = t.right;
    else if (r === "right")
      S = _(this.left), x = t.left, D = _(t.right) - m, N = S + m, P = this.left + h;
    else if (e === "x") {
      if (r === "center")
        S = _((t.top + t.bottom) / 2 + 0.5);
      else if (Y(r)) {
        const z = Object.keys(r)[0], Z = r[z];
        S = _(this.chart.scales[z].getPixelForValue(Z));
      }
      b = t.top, L = t.bottom, I = S + m, B = I + h;
    } else if (e === "y") {
      if (r === "center")
        S = _((t.left + t.right) / 2);
      else if (Y(r)) {
        const z = Object.keys(r)[0], Z = r[z];
        S = _(this.chart.scales[z].getPixelForValue(Z));
      }
      N = S - m, P = N - h, x = t.left, D = t.right;
    }
    const $ = G(n.ticks.maxTicksLimit, u), V = Math.max(1, Math.ceil(u / $));
    for (w = 0; w < u; w += V) {
      const z = this.getContext(w), Z = o.setContext(z), y = a.setContext(z), k = Z.lineWidth, E = Z.color, tt = y.dash || [], bt = y.dashOffset, ct = Z.tickWidth, yt = Z.tickColor, xt = Z.tickBorderDash || [], M = Z.tickBorderDashOffset;
      A = $d(this, w, l), A !== void 0 && (T = se(s, A, k), c ? N = P = x = D = T : I = B = b = L = T, f.push({
        tx1: N,
        ty1: I,
        tx2: P,
        ty2: B,
        x1: x,
        y1: b,
        x2: D,
        y2: L,
        width: k,
        color: E,
        borderDash: tt,
        borderDashOffset: bt,
        tickWidth: ct,
        tickColor: yt,
        tickBorderDash: xt,
        tickBorderDashOffset: M
      }));
    }
    return this._ticksLength = u, this._borderValue = S, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: d, mirror: u } = o, h = We(s.grid), f = h + d, g = u ? -d : f, p = -gt(this.labelRotation), m = [];
    let _, S, w, A, T, N, I, P, B, x, b, D, L = "middle";
    if (n === "top")
      N = this.bottom - g, I = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      N = this.top + g, I = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const V = this._getYAxisLabelAlignment(h);
      I = V.textAlign, T = V.x;
    } else if (n === "right") {
      const V = this._getYAxisLabelAlignment(h);
      I = V.textAlign, T = V.x;
    } else if (e === "x") {
      if (n === "center")
        N = (t.top + t.bottom) / 2 + f;
      else if (Y(n)) {
        const V = Object.keys(n)[0], z = n[V];
        N = this.chart.scales[V].getPixelForValue(z) + f;
      }
      I = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        T = (t.left + t.right) / 2 - f;
      else if (Y(n)) {
        const V = Object.keys(n)[0], z = n[V];
        T = this.chart.scales[V].getPixelForValue(z);
      }
      I = this._getYAxisLabelAlignment(h).textAlign;
    }
    e === "y" && (l === "start" ? L = "top" : l === "end" && (L = "bottom"));
    const $ = this._getLabelSizes();
    for (_ = 0, S = a.length; _ < S; ++_) {
      w = a[_], A = w.label;
      const V = o.setContext(this.getContext(_));
      P = this.getPixelForTick(_) + o.labelOffset, B = this._resolveTickFontOptions(_), x = B.lineHeight, b = it(A) ? A.length : 1;
      const z = b / 2, Z = V.color, y = V.textStrokeColor, k = V.textStrokeWidth;
      let E = I;
      r ? (T = P, I === "inner" && (_ === S - 1 ? E = this.options.reverse ? "left" : "right" : _ === 0 ? E = this.options.reverse ? "right" : "left" : E = "center"), n === "top" ? c === "near" || p !== 0 ? D = -b * x + x / 2 : c === "center" ? D = -$.highest.height / 2 - z * x + x : D = -$.highest.height + x / 2 : c === "near" || p !== 0 ? D = x / 2 : c === "center" ? D = $.highest.height / 2 - z * x : D = $.highest.height - b * x, u && (D *= -1), p !== 0 && !V.showLabelBackdrop && (T += x / 2 * Math.sin(p))) : (N = P, D = (1 - b) * x / 2);
      let tt;
      if (V.showLabelBackdrop) {
        const bt = mt(V.backdropPadding), ct = $.heights[_], yt = $.widths[_];
        let xt = D - bt.top, M = 0 - bt.left;
        switch (L) {
          case "middle":
            xt -= ct / 2;
            break;
          case "bottom":
            xt -= ct;
            break;
        }
        switch (I) {
          case "center":
            M -= yt / 2;
            break;
          case "right":
            M -= yt;
            break;
          case "inner":
            _ === S - 1 ? M -= yt : _ > 0 && (M -= yt / 2);
            break;
        }
        tt = {
          left: M,
          top: xt,
          width: yt + bt.width,
          height: ct + bt.height,
          color: V.backdropColor
        };
      }
      m.push({
        label: A,
        font: B,
        textOffset: D,
        options: {
          rotation: p,
          color: Z,
          strokeColor: y,
          strokeWidth: k,
          textAlign: E,
          textBaseline: L,
          translation: [
            T,
            N
          ],
          backdrop: tt
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-gt(this.labelRotation))
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
    this.isHorizontal() ? (c = se(t, this.left, r) - r / 2, d = se(t, this.right, a) + a / 2, u = h = l) : (u = se(t, this.top, r) - r / 2, h = se(t, this.bottom, a) + a / 2, c = d = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(d, h), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && ri(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, d = r.textOffset;
      fe(s, c, 0, d, l, a);
    }
    n && ai(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = ft(s.font), r = mt(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || Y(e) ? (l += r.bottom, it(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: d, maxWidth: u, rotation: h } = Qd(this, l, e, a);
    fe(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: u,
      rotation: h,
      textAlign: Jd(a, e, n),
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
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = G(t.grid && t.grid.z, -1), n = G(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Le.prototype.draw ? [
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
    return ft(e.font);
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
    iu(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, tu(t, r, s), this.override && ht.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in ht[n] && (delete ht[n][s], this.override && delete he[s]);
  }
}
function tu(i, t, e) {
  const s = ei(/* @__PURE__ */ Object.create(null), [
    e ? ht.get(e) : {},
    ht.get(t),
    i.defaults
  ]);
  ht.set(t, s), i.defaultRoutes && eu(t, i.defaultRoutes), i.descriptors && ht.describe(t, i.descriptors);
}
function eu(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    ht.route(o, n, l, a);
  });
}
function iu(i) {
  return "id" in i && "defaults" in i;
}
class su {
  constructor() {
    this.controllers = new wi(De, "datasets", !0), this.elements = new wi(wt, "elements"), this.plugins = new wi(Object, "plugins"), this.scales = new wi(Le, "scales"), this._typedRegistries = [
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
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : nt(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Gs(t);
    st(s["before" + n], [], s), e[t](s), st(s["after" + n], [], s);
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
var Nt = /* @__PURE__ */ new su();
class nu {
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
      if (st(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    et(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = G(s.options && s.options.plugins, {}), o = ou(s);
    return n === !1 && !e ? [] : au(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function ou(i) {
  const t = {}, e = [], s = Object.keys(Nt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(Nt.getPlugin(s[o]));
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
function ru(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function au(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = ru(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: lu(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function lu(i, { plugin: t, local: e }, s, n) {
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
  const e = ht.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function cu(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function du(i, t) {
  return i === t ? "_index_" : "_value_";
}
function so(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function uu(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Is(i, ...t) {
  if (so(i))
    return i;
  for (const e of t) {
    const s = e.axis || uu(e.position) || i.length > 1 && so(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function no(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function hu(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return no(i, "x", e[0]) || no(i, "y", e[0]);
  }
  return {};
}
function fu(i, t) {
  const e = he[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = As(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!Y(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Is(r, a, hu(r, i), ht.scales[a.type]), c = du(l, n), d = e.scales || {};
    o[r] = Ze(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      d[l],
      d[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || As(a, t), d = (he[a] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      const h = cu(u, l), f = r[h + "AxisID"] || h;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Ze(o[f], [
        {
          axis: h
        },
        s[f],
        d[u]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Ze(a, [
      ht.scales[a.type],
      ht.scale
    ]);
  }), o;
}
function Fr(i) {
  const t = i.options || (i.options = {});
  t.plugins = G(t.plugins, {}), t.scales = fu(i, t);
}
function Hr(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function gu(i) {
  return i = i || {}, i.data = Hr(i.data), Fr(i), i;
}
const oo = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Set();
function Ei(i, t) {
  let e = oo.get(i);
  return e || (e = t(), oo.set(i, e), Wr.add(e)), e;
}
const ze = (i, t, e) => {
  const s = te(t, e);
  s !== void 0 && i.add(s);
};
class pu {
  constructor(t) {
    this._config = gu(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this.clearCache(), Fr(t);
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
      t && (l.add(t), d.forEach((u) => ze(l, t, u))), d.forEach((u) => ze(l, n, u)), d.forEach((u) => ze(l, he[o] || {}, u)), d.forEach((u) => ze(l, ht, u)), d.forEach((u) => ze(l, Es, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Wr.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      he[e] || {},
      ht.datasets[e] || {},
      {
        type: e
      },
      ht,
      Es
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = ro(this._resolverCache, t, n);
    let l = r;
    if (bu(r, e)) {
      o.$shared = !1, s = It(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Ie(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = ro(this._resolverCache, t, s);
    return Y(e) ? Ie(o, e, void 0, n) : o;
  }
}
function ro(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: Ks(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const mu = (i) => Y(i) && Object.getOwnPropertyNames(i).some((t) => It(i[t]));
function bu(i, t) {
  const { isScriptable: e, isIndexable: s } = xr(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (It(a) || mu(a)) || r && it(a))
      return !0;
  }
  return !1;
}
var yu = "4.5.1";
const _u = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function ao(i, t) {
  return i === "top" || i === "bottom" || _u.indexOf(i) === -1 && t === "x";
}
function lo(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function co(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), st(e && e.onComplete, [
    i
  ], t);
}
function xu(i) {
  const t = i.chart, e = t.options.animation;
  st(e && e.onProgress, [
    i
  ], t);
}
function zr(i) {
  return Qs() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Oi = {}, uo = (i) => {
  const t = zr(i);
  return Object.values(Oi).filter((e) => e.canvas === t).pop();
};
function vu(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Su(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let de = class {
  static defaults = ht;
  static instances = Oi;
  static overrides = he;
  static registry = Nt;
  static version = yu;
  static getChart = uo;
  static register(...t) {
    Nt.add(...t), ho();
  }
  static unregister(...t) {
    Nt.remove(...t), ho();
  }
  constructor(t, e) {
    const s = this.config = new pu(e), n = zr(t), o = uo(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || Hd(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, d = l && l.width;
    if (this.id = ml(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new nu(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Ml((u) => this.update(u), r.resizeDelay || 0), this._dataChanges = [], Oi[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Ft.listen(this, "complete", co), Ft.listen(this, "progress", xu), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return et(t) ? e && o ? o : n ? s / n : null : t;
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
    return Nt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Mn(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Rn(this.canvas, this.ctx), this;
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
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Mn(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), st(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    nt(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = Is(r, a), c = l === "r", d = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : d ? "bottom" : "left",
        dtype: c ? "radialLinear" : d ? "category" : "linear"
      };
    }))), nt(o, (r) => {
      const a = r.options, l = a.id, c = Is(l, a), d = G(a.type, r.dtype);
      (a.position === void 0 || ao(a.position, c) !== ao(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let u = null;
      if (l in s && s[l].type === d)
        u = s[l];
      else {
        const h = Nt.getScale(d);
        u = new h({
          id: l,
          type: d,
          ctx: this.ctx,
          chart: this
        }), s[u.id] = u;
      }
      u.init(a, t);
    }), nt(n, (r, a) => {
      r || delete s[a];
    }), nt(s, (r) => {
      Lt.configure(this, r, r.options), Lt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(lo("order", "index"));
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
        const l = Nt.getController(a), { datasetElementType: c, dataElementType: d } = ht.datasets[a];
        Object.assign(l, {
          dataElementType: Nt.getElement(d),
          datasetElementType: c && Nt.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    nt(this.data.datasets, (t, e) => {
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
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || nt(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(lo("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    nt(this.scales, (t) => {
      Lt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!Sn(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      vu(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!Sn(n, s(o)))
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
    Lt.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], nt(this.boxes, (n) => {
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
        this._updateDataset(e, It(t) ? t({
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
    }) !== !1 && (Ft.has(this) ? this.attached && !Ft.running(this) && Ft.start(this) : (this.draw(), co({
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
    }, n = Dr(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && ri(e, n), t.controller.draw(), n && ai(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return jt(t, this.chartArea, this._minPadding);
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
    return this.$context || (this.$context = ie(null, {
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
    Ot(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Rn(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Oi[this.id], this.notifyPlugins("afterDestroy");
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
    nt(this.options.events, (o) => s(o, n));
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
    nt(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, nt(this._responsiveListeners, (t, e) => {
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
    !Li(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
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
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = Sl(t), c = Su(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, st(o.onHover, [
      t,
      a,
      this
    ], this), l && st(o.onClick, [
      t,
      a,
      this
    ], this));
    const d = !Li(a, n);
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
function ho() {
  return nt(de.instances, (i) => i._plugins.invalidate());
}
function Tu(i, t, e) {
  const { startAngle: s, x: n, y: o, outerRadius: r, innerRadius: a, options: l } = t, { borderWidth: c, borderJoinStyle: d } = l, u = Math.min(c / r, St(s - e));
  if (i.beginPath(), i.arc(n, o, r - c / 2, s + u / 2, e - u / 2), a > 0) {
    const h = Math.min(c / a, St(s - e));
    i.arc(n, o, a + c / 2, e - h / 2, s + h / 2, !0);
  } else {
    const h = Math.min(c / 2, r * St(s - e));
    if (d === "round")
      i.arc(n, o, h, e - X / 2, s + X / 2, !0);
    else if (d === "bevel") {
      const f = 2 * h * h, g = -f * Math.cos(e + X / 2) + n, p = -f * Math.sin(e + X / 2) + o, m = f * Math.cos(s + X / 2) + n, _ = f * Math.sin(s + X / 2) + o;
      i.lineTo(g, p), i.lineTo(m, _);
    }
  }
  i.closePath(), i.moveTo(0, 0), i.rect(0, 0, i.canvas.width, i.canvas.height), i.clip("evenodd");
}
function wu(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + lt, s - lt), i.closePath(), i.clip();
}
function Eu(i) {
  return Zs(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Cu(i, t, e, s) {
  const n = Eu(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return Tt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: Tt(n.innerStart, 0, r),
    innerEnd: Tt(n.innerEnd, 0, r)
  };
}
function Se(i, t, e, s) {
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
    const V = d > 0 ? d - s : 0, z = u > 0 ? u - s : 0, Z = (V + z) / 2, y = Z !== 0 ? g * Z / (Z + s) : g;
    f = (g - y) / 2;
  }
  const p = Math.max(1e-3, g * u - e / X) / u, m = (g - p) / 2, _ = l + m + f, S = n - m - f, { outerStart: w, outerEnd: A, innerStart: T, innerEnd: N } = Cu(t, h, u, S - _), I = u - w, P = u - A, B = _ + w / I, x = S - A / P, b = h + T, D = h + N, L = _ + T / b, $ = S - N / D;
  if (i.beginPath(), o) {
    const V = (B + x) / 2;
    if (i.arc(r, a, u, B, V), i.arc(r, a, u, V, x), A > 0) {
      const k = Se(P, x, r, a);
      i.arc(k.x, k.y, A, x, S + lt);
    }
    const z = Se(D, S, r, a);
    if (i.lineTo(z.x, z.y), N > 0) {
      const k = Se(D, $, r, a);
      i.arc(k.x, k.y, N, S + lt, $ + Math.PI);
    }
    const Z = (S - N / h + (_ + T / h)) / 2;
    if (i.arc(r, a, h, S - N / h, Z, !0), i.arc(r, a, h, Z, _ + T / h, !0), T > 0) {
      const k = Se(b, L, r, a);
      i.arc(k.x, k.y, T, L + Math.PI, _ - lt);
    }
    const y = Se(I, _, r, a);
    if (i.lineTo(y.x, y.y), w > 0) {
      const k = Se(I, B, r, a);
      i.arc(k.x, k.y, w, _ - lt, B);
    }
  } else {
    i.moveTo(r, a);
    const V = Math.cos(B) * u + r, z = Math.sin(B) * u + a;
    i.lineTo(V, z);
    const Z = Math.cos(x) * u + r, y = Math.sin(x) * u + a;
    i.lineTo(Z, y);
  }
  i.closePath();
}
function Au(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Hi(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % rt || rt));
  }
  return Hi(i, t, e, s, l, n), i.fill(), l;
}
function Iu(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: d, borderDash: u, borderDashOffset: h, borderRadius: f } = l, g = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(u || []), i.lineDashOffset = h, g ? (i.lineWidth = c * 2, i.lineJoin = d || "round") : (i.lineWidth = c, i.lineJoin = d || "bevel");
  let p = t.endAngle;
  if (o) {
    Hi(i, t, e, s, p, n);
    for (let m = 0; m < o; ++m)
      i.stroke();
    isNaN(a) || (p = r + (a % rt || rt));
  }
  g && wu(i, t, p), l.selfJoin && p - r >= X && f === 0 && d !== "miter" && Tu(i, t, p), o || (Hi(i, t, e, s, p, n), i.stroke());
}
class Ou extends wt {
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
    ], s), { angle: o, distance: r } = Ni(n, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: d, circumference: u } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), h = (this.options.spacing + this.options.borderWidth) / 2, f = G(u, l - a), g = ii(o, a, l) && a !== l, p = f >= rt || g, m = Gt(r, c + h, d + h);
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
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > rt ? Math.floor(s / rt) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * n, Math.sin(a) * n);
    const l = 1 - Math.sin(Math.min(X, s || 0)), c = n * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Au(t, this, c, o, r), Iu(t, this, c, o, r), t.restore();
  }
}
function Gr(i, t, e = t) {
  i.lineCap = G(e.borderCapStyle, t.borderCapStyle), i.setLineDash(G(e.borderDash, t.borderDash)), i.lineDashOffset = G(e.borderDashOffset, t.borderDashOffset), i.lineJoin = G(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = G(e.borderWidth, t.borderWidth), i.strokeStyle = G(e.borderColor, t.borderColor);
}
function Ru(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Du(i) {
  return i.stepped ? $l : i.tension || i.cubicInterpolationMode === "monotone" ? Zl : Ru;
}
function jr(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), d = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !d ? s + c - l : c - l
  };
}
function Lu(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = jr(n, e, s), d = Du(o);
  let { move: u = !0, reverse: h } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(a + (h ? c - f : f)) % r], !g.skip && (u ? (i.moveTo(g.x, g.y), u = !1) : d(i, p, g, h, o.stepped), p = g);
  return l && (g = n[(a + (h ? c : 0)) % r], d(i, p, g, h, o.stepped)), !!l;
}
function Mu(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = jr(n, e, s), { move: l = !0, reverse: c } = s || {};
  let d = 0, u = 0, h, f, g, p, m, _;
  const S = (A) => (r + (c ? a - A : A)) % o, w = () => {
    p !== m && (i.lineTo(d, m), i.lineTo(d, p), i.lineTo(d, _));
  };
  for (l && (f = n[S(0)], i.moveTo(f.x, f.y)), h = 0; h <= a; ++h) {
    if (f = n[S(h)], f.skip)
      continue;
    const A = f.x, T = f.y, N = A | 0;
    N === g ? (T < p ? p = T : T > m && (m = T), d = (u * d + A) / ++u) : (w(), i.lineTo(A, T), g = N, u = 0, p = m = T), _ = T;
  }
  w();
}
function Os(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Mu : Lu;
}
function ku(i) {
  return i.stepped ? Ac : i.tension || i.cubicInterpolationMode === "monotone" ? Ic : re;
}
function Pu(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), Gr(i, t.options), i.stroke(n);
}
function Nu(i, t, e, s) {
  const { segments: n, options: o } = t, r = Os(t);
  for (const a of n)
    Gr(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Vu = typeof Path2D == "function";
function Bu(i, t, e, s) {
  Vu && !t.options.segment ? Pu(i, t, e, s) : Nu(i, t, e, s);
}
class $i extends wt {
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
    const s = this.options, n = t[e], o = this.points, r = Rr(this, {
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
    return Os(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = Os(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), Bu(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function fo(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class Fu extends wt {
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
    return fo(this, t, "x", e);
  }
  inYRange(t, e) {
    return fo(this, t, "y", e);
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
    this.skip || s.radius < 0.1 || !jt(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Cs(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function Ur(i, t) {
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
function Kt(i, t, e, s) {
  return i ? 0 : Tt(t, e, s);
}
function Hu(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = _r(s);
  return {
    t: Kt(n.top, o.top, 0, e),
    r: Kt(n.right, o.right, 0, t),
    b: Kt(n.bottom, o.bottom, 0, e),
    l: Kt(n.left, o.left, 0, t)
  };
}
function Wu(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = Jt(n), r = Math.min(t, e), a = i.borderSkipped, l = s || Y(n);
  return {
    topLeft: Kt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Kt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Kt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Kt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function zu(i) {
  const t = Ur(i), e = t.right - t.left, s = t.bottom - t.top, n = Hu(i, e / 2, s / 2), o = Wu(i, e / 2, s / 2);
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
function ps(i, t, e, s) {
  const n = t === null, o = e === null, a = i && !(n && o) && Ur(i, s);
  return a && (n || Gt(t, a.left, a.right)) && (o || Gt(e, a.top, a.bottom));
}
function Gu(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function ju(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function ms(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + o,
    h: i.h + r,
    radius: i.radius
  };
}
class Uu extends wt {
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
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = zu(this), a = Gu(r.radius) ? Ae : ju;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, ms(r, e, o)), t.clip(), a(t, ms(o, -e, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, ms(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return ps(this, t, e, s);
  }
  inXRange(t, e) {
    return ps(this, t, null, e);
  }
  inYRange(t, e) {
    return ps(this, null, t, e);
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
function Xu(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = Zi(l, c, n);
    const d = Rs(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: d,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const u = Rr(t, d);
    for (const h of u) {
      const f = Rs(e, o[h.start], o[h.end], h.loop), g = Or(a, n, f);
      for (const p of g)
        r.push({
          source: p,
          target: h,
          start: {
            [e]: go(d, f, "start", Math.max)
          },
          end: {
            [e]: go(d, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Rs(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = St(n), o = St(o)), {
    property: i,
    start: n,
    end: o
  };
}
function Yu(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Zi(r, a, n);
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
function Zi(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function go(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Xr(i, t) {
  let e = [], s = !1;
  return it(i) ? (s = !0, e = i) : e = Yu(i, t), e.length ? new $i({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function po(i) {
  return i && i.fill !== !1;
}
function $u(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!pt(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function Zu(i, t, e) {
  const s = Qu(i);
  if (Y(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return pt(n) && Math.floor(n) === n ? Ku(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function Ku(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function qu(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : Y(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Ju(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : Y(i) ? s = i.value : s = t.getBaseValue(), s;
}
function Qu(i) {
  const t = i.options, e = t.fill;
  let s = G(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function th(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = eh(t, e);
  a.push(Xr({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let d = c.start; d <= c.end; d++)
      ih(n, r[d], a);
  }
  return new $i({
    points: n,
    options: {}
  });
}
function eh(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function ih(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = sh(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function sh(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const d = o[c], u = r[d.start][e], h = r[d.end][e];
    if (Gt(n, u, h)) {
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
class Yr {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: rt
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
function nh(i) {
  const { chart: t, fill: e, line: s } = i;
  if (pt(e))
    return oh(t, e);
  if (e === "stack")
    return th(i);
  if (e === "shape")
    return !0;
  const n = rh(i);
  return n instanceof Yr ? n : Xr(n, s);
}
function oh(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function rh(i) {
  return (i.scale || {}).getPointPositionForValue ? lh(i) : ah(i);
}
function ah(i) {
  const { scale: t = {}, fill: e } = i, s = qu(e, t);
  if (pt(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function lh(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = Ju(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Yr({
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
  const s = nh(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, d = c.fill, u = c.backgroundColor, { above: h = u, below: f = u } = d || {}, g = n.getDatasetMeta(o), p = Dr(n, g);
  s && r.points.length && (ri(i, e), ch(i, {
    line: r,
    target: s,
    above: h,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: p
  }), ai(i));
}
function ch(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  i.save();
  let d = o;
  o !== n && (c === "x" ? (mo(i, s, r.top), ys(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), mo(i, s, r.bottom)) : c === "y" && (bo(i, s, r.left), ys(i, {
    line: e,
    target: s,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), bo(i, s, r.right), d = n)), ys(i, {
    line: e,
    target: s,
    color: d,
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
    const { start: l, end: c } = a, d = n[l], u = n[Zi(l, c, n)];
    o ? (i.moveTo(d.x, d.y), o = !1) : (i.lineTo(d.x, e), i.lineTo(d.x, d.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(u.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function bo(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, d = n[l], u = n[Zi(l, c, n)];
    o ? (i.moveTo(d.x, d.y), o = !1) : (i.lineTo(e, d.y), i.lineTo(d.x, d.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(e, u.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function ys(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = Xu(e, s, n);
  for (const { source: c, target: d, start: u, end: h } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, g = s !== !0;
    i.save(), i.fillStyle = f, dh(i, r, a, g && Rs(n, u, h)), i.beginPath();
    const p = !!e.pathSegment(i, c);
    let m;
    if (g) {
      p ? i.closePath() : yo(i, s, h, n);
      const _ = !!s.pathSegment(i, d, {
        move: p,
        reverse: !0
      });
      m = p && _, m || yo(i, s, u, n);
    }
    i.closePath(), i.fill(m ? "evenodd" : "nonzero"), i.restore();
  }
}
function dh(i, t, e, s) {
  const n = t.chart.chartArea, { property: o, start: r, end: a } = s || {};
  if (o === "x" || o === "y") {
    let l, c, d, u;
    o === "x" ? (l = r, c = n.top, d = a, u = n.bottom) : (l = n.left, c = r, d = n.right, u = a), i.beginPath(), e && (l = Math.max(l, e.left), d = Math.min(d, e.right), c = Math.max(c, e.top), u = Math.min(u, e.bottom)), i.rect(l, c, d - l, u - c), i.clip();
  }
}
function yo(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var uh = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof $i && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: Zu(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = $u(n, r, e.propagate));
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
      po(o) && bs(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !po(s) || e.drawTime !== "beforeDatasetDraw" || bs(i.ctx, s, i.chartArea);
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
}, hh = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class xo extends wt {
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
    let e = st(t.generateLabels, [
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
    const s = t.labels, n = ft(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = _o(s, o);
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
    return this.legendItems.forEach((m, _) => {
      const { itemWidth: S, itemHeight: w } = fh(s, e, o, m, n);
      _ > 0 && f + w + 2 * a > d && (u += h + a, c.push({
        width: h,
        height: f
      }), g += h + a, p++, h = f = 0), l[_] = {
        left: g,
        top: f,
        col: p,
        width: S,
        height: w
      }, h = Math.max(h, S), f += w + a;
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
      let a = 0, l = vt(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = vt(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = vt(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = vt(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ri(t, this), this._draw(), ai(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = ht.color, l = Ee(t.rtl, this.left, this.width), c = ft(r.font), { padding: d } = r, u = c.size, h = u / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: m } = _o(r, u), _ = function(N, I, P) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const B = G(P.lineWidth, 1);
      if (n.fillStyle = G(P.fillStyle, a), n.lineCap = G(P.lineCap, "butt"), n.lineDashOffset = G(P.lineDashOffset, 0), n.lineJoin = G(P.lineJoin, "miter"), n.lineWidth = B, n.strokeStyle = G(P.strokeStyle, a), n.setLineDash(G(P.lineDash, [])), r.usePointStyle) {
        const x = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: P.pointStyle,
          rotation: P.rotation,
          borderWidth: B
        }, b = l.xPlus(N, g / 2), D = I + h;
        yr(n, x, b, D, r.pointStyleWidth && g);
      } else {
        const x = I + Math.max((u - p) / 2, 0), b = l.leftForLtr(N, g), D = Jt(P.borderRadius);
        n.beginPath(), Object.values(D).some((L) => L !== 0) ? Ae(n, {
          x: b,
          y: x,
          w: g,
          h: p,
          radius: D
        }) : n.rect(b, x, g, p), n.fill(), B !== 0 && n.stroke();
      }
      n.restore();
    }, S = function(N, I, P) {
      fe(n, P.text, N, I + m / 2, c, {
        strikethrough: P.hidden,
        textAlign: l.textAlign(P.textAlign)
      });
    }, w = this.isHorizontal(), A = this._computeTitleHeight();
    w ? f = {
      x: vt(o, this.left + d, this.right - s[0]),
      y: this.top + d + A,
      line: 0
    } : f = {
      x: this.left + d,
      y: vt(o, this.top + A + d, this.bottom - e[0].height),
      line: 0
    }, Cr(this.ctx, t.textDirection);
    const T = m + d;
    this.legendItems.forEach((N, I) => {
      n.strokeStyle = N.fontColor, n.fillStyle = N.fontColor;
      const P = n.measureText(N.text).width, B = l.textAlign(N.textAlign || (N.textAlign = r.textAlign)), x = g + h + P;
      let b = f.x, D = f.y;
      l.setWidth(this.width), w ? I > 0 && b + x + d > this.right && (D = f.y += T, f.line++, b = f.x = vt(o, this.left + d, this.right - s[f.line])) : I > 0 && D + T > this.bottom && (b = f.x = b + e[f.line].width + d, f.line++, D = f.y = vt(o, this.top + A + d, this.bottom - e[f.line].height));
      const L = l.x(b);
      if (_(L, D, N), b = kl(B, b + g + h, w ? b + x : this.right, t.rtl), S(l.x(b), D, N), w)
        f.x += x + d;
      else if (typeof N.text != "string") {
        const $ = c.lineHeight;
        f.y += $r(N, $) + d;
      } else
        f.y += T;
    }), Ar(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = ft(e.font), n = mt(e.padding);
    if (!e.display)
      return;
    const o = Ee(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let d, u = this.left, h = this.width;
    if (this.isHorizontal())
      h = Math.max(...this.lineWidths), d = this.top + c, u = vt(t.align, u, this.right - h);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      d = c + vt(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = vt(a, u, u + h);
    r.textAlign = o.textAlign(Xs(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, fe(r, e.text, f, d, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = ft(t.font), s = mt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Gt(t, this.left, this.right) && Gt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Gt(t, n.left, n.left + n.width) && Gt(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!mh(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = hh(n, s);
      n && !o && st(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && st(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && st(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function fh(i, t, e, s, n) {
  const o = gh(s, i, t, e), r = ph(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function gh(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function ph(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = $r(t, e)), s;
}
function $r(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function mh(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var bh = {
  id: "legend",
  _element: xo,
  start(i, t, e) {
    const s = i.legend = new xo({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    Lt.configure(i, s, e), Lt.addBox(i, s);
  },
  stop(i) {
    Lt.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    Lt.configure(i, s, e), s.options = e;
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
          const c = l.controller.getStyle(e ? 0 : void 0), d = mt(c.borderWidth);
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
class Zr extends wt {
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
    const n = it(s.text) ? s.text.length : 1;
    this._padding = mt(s.padding);
    const o = n * ft(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, d, u;
    return this.isHorizontal() ? (d = vt(a, s, o), u = e + t, c = o - s) : (r.position === "left" ? (d = s + t, u = vt(a, n, e), l = X * -0.5) : (d = o - t, u = vt(a, e, n), l = X * 0.5), c = n - e), {
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
    const s = ft(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    fe(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Xs(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function yh(i, t) {
  const e = new Zr({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  Lt.configure(i, e, t), Lt.addBox(i, e), i.titleBlock = e;
}
var _h = {
  id: "title",
  _element: Zr,
  start(i, t, e) {
    yh(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    Lt.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    Lt.configure(i, s, e), s.options = e;
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
const Ye = {
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
        const c = l.getCenterPoint(), d = Ce(t, c);
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
function Pt(i, t) {
  return t && (it(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Ht(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function xh(i, t) {
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
function vo(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = ft(t.bodyFont), c = ft(t.titleFont), d = ft(t.footerFont), u = o.length, h = n.length, f = s.length, g = mt(t.padding);
  let p = g.height, m = 0, _ = s.reduce((A, T) => A + T.before.length + T.lines.length + T.after.length, 0);
  if (_ += i.beforeBody.length + i.afterBody.length, u && (p += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), _) {
    const A = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * A + (_ - f) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  h && (p += t.footerMarginTop + h * d.lineHeight + (h - 1) * t.footerSpacing);
  let S = 0;
  const w = function(A) {
    m = Math.max(m, e.measureText(A).width + S);
  };
  return e.save(), e.font = c.string, nt(i.title, w), e.font = l.string, nt(i.beforeBody.concat(i.afterBody), w), S = t.displayColors ? r + 2 + t.boxPadding : 0, nt(s, (A) => {
    nt(A.before, w), nt(A.lines, w), nt(A.after, w);
  }), S = 0, e.font = d.string, nt(i.footer, w), e.restore(), m += g.width, {
    width: m,
    height: p
  };
}
function vh(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Sh(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function Th(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Sh(c, i, t, e) && (c = "center"), c;
}
function So(i, t, e) {
  const s = e.yAlign || t.yAlign || vh(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Th(i, t, e, s),
    yAlign: s
  };
}
function wh(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Eh(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function To(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: d, topRight: u, bottomLeft: h, bottomRight: f } = Jt(r);
  let g = wh(t, a);
  const p = Eh(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(d, h) + n : a === "right" && (g += Math.max(u, f) + n), {
    x: Tt(g, 0, s.width - t.width),
    y: Tt(p, 0, s.height - t.height)
  };
}
function Ci(i, t, e) {
  const s = mt(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function wo(i) {
  return Pt([], Ht(i));
}
function Ch(i, t, e) {
  return ie(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Eo(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const Kr = {
  beforeTitle: Bt,
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
  afterTitle: Bt,
  beforeBody: Bt,
  beforeLabel: Bt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return et(e) || (t += e), t;
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
  afterLabel: Bt,
  afterBody: Bt,
  beforeFooter: Bt,
  footer: Bt,
  afterFooter: Bt
};
function Ct(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? Kr[t].call(e, s) : n;
}
class Co extends wt {
  static positioners = Ye;
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
    return this.$context || (this.$context = Ch(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = Ct(s, "beforeTitle", this, t), o = Ct(s, "title", this, t), r = Ct(s, "afterTitle", this, t);
    let a = [];
    return a = Pt(a, Ht(n)), a = Pt(a, Ht(o)), a = Pt(a, Ht(r)), a;
  }
  getBeforeBody(t, e) {
    return wo(Ct(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return nt(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Eo(s, o);
      Pt(r.before, Ht(Ct(a, "beforeLabel", this, o))), Pt(r.lines, Ct(a, "label", this, o)), Pt(r.after, Ht(Ct(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return wo(Ct(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = Ct(s, "beforeFooter", this, t), o = Ct(s, "footer", this, t), r = Ct(s, "afterFooter", this, t);
    let a = [];
    return a = Pt(a, Ht(n)), a = Pt(a, Ht(o)), a = Pt(a, Ht(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(xh(this.chart, e[l]));
    return t.filter && (a = a.filter((d, u, h) => t.filter(d, u, h, s))), t.itemSort && (a = a.sort((d, u) => t.itemSort(d, u, s))), nt(a, (d) => {
      const u = Eo(t.callbacks, d);
      n.push(Ct(u, "labelColor", this, d)), o.push(Ct(u, "labelPointStyle", this, d)), r.push(Ct(u, "labelTextColor", this, d));
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
      const a = Ye[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = vo(this, s), c = Object.assign({}, a, l), d = So(this.chart, s, c), u = To(s, c, d, this.chart);
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
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: u } = Jt(a), { x: h, y: f } = t, { width: g, height: p } = e;
    let m, _, S, w, A, T;
    return o === "center" ? (A = f + p / 2, n === "left" ? (m = h, _ = m - r, w = A + r, T = A - r) : (m = h + g, _ = m + r, w = A - r, T = A + r), S = m) : (n === "left" ? _ = h + Math.max(l, d) + r : n === "right" ? _ = h + g - Math.max(c, u) - r : _ = this.caretX, o === "top" ? (w = f, A = w - r, m = _ - r, S = _ + r) : (w = f + p, A = w + r, m = _ + r, S = _ - r), T = w), {
      x1: m,
      x2: _,
      x3: S,
      y1: w,
      y2: A,
      y3: T
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = Ee(s.rtl, this.x, this.width);
      for (t.x = Ci(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = ft(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, d = ft(o.bodyFont), u = Ci(this, "left", o), h = n.x(u), f = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, g = e.y + f;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = n.leftForLtr(h, c) + c / 2, _ = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Cs(t, p, m, _), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Cs(t, p, m, _);
    } else {
      t.lineWidth = Y(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const p = n.leftForLtr(h, c), m = n.leftForLtr(n.xPlus(h, 1), c - 2), _ = Jt(r.borderRadius);
      Object.values(_).some((S) => S !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Ae(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Ae(t, {
        x: m,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: _
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(m, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: d } = s, u = ft(s.bodyFont);
    let h = u.lineHeight, f = 0;
    const g = Ee(s.rtl, this.x, this.width), p = function(P) {
      e.fillText(P, g.x(t.x + f), t.y + h / 2), t.y += h + o;
    }, m = g.textAlign(r);
    let _, S, w, A, T, N, I;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = u.string, t.x = Ci(this, m, s), e.fillStyle = s.bodyColor, nt(this.beforeBody, p), f = a && m !== "right" ? r === "center" ? c / 2 + d : c + 2 + d : 0, A = 0, N = n.length; A < N; ++A) {
      for (_ = n[A], S = this.labelTextColors[A], e.fillStyle = S, nt(_.before, p), w = _.lines, a && w.length && (this._drawColorBox(e, t, A, g, s), h = Math.max(u.lineHeight, l)), T = 0, I = w.length; T < I; ++T)
        p(w[T]), h = u.lineHeight;
      nt(_.after, p);
    }
    f = 0, h = u.lineHeight, nt(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = Ee(s.rtl, this.x, this.width);
      for (t.x = Ci(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = ft(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: d } = s, { topLeft: u, topRight: h, bottomLeft: f, bottomRight: g } = Jt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + u, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - h, l), e.quadraticCurveTo(a + c, l, a + c, l + h), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + d - g), e.quadraticCurveTo(a + c, l + d, a + c - g, l + d), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + d), e.quadraticCurveTo(a, l + d, a, l + d - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + u), e.quadraticCurveTo(a, l, a + u, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = Ye[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = vo(this, t), l = Object.assign({}, r, this._size), c = So(e, t, l), d = To(t, l, c, e);
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
    const r = mt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Cr(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Ar(t, e.textDirection), t.restore());
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
    }), o = !Li(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !Li(r, o) || a;
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
    const { caretX: s, caretY: n, options: o } = this, r = Ye[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var Ah = {
  id: "tooltip",
  _element: Co,
  positioners: Ye,
  afterInit(i, t, e) {
    e && (i.tooltip = new Co({
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
    callbacks: Kr
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
const Ih = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Oh(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Ih(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Rh = (i, t) => i === null ? null : Tt(Math.round(i), 0, t);
function Ao(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Dh extends Le {
  static id = "category";
  static defaults = {
    ticks: {
      callback: Ao
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
    if (et(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Oh(s, t, G(e, t), this._addedLabels), Rh(e, s.length - 1);
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
    return Ao.call(this, t);
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
function Lh(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: d, maxDigits: u, includeBounds: h } = i, f = o || 1, g = d - 1, { min: p, max: m } = t, _ = !et(r), S = !et(a), w = !et(c), A = (m - p) / (u + 1);
  let T = Tn((m - p) / g / f) * f, N, I, P, B;
  if (T < 1e-14 && !_ && !S)
    return [
      {
        value: p
      },
      {
        value: m
      }
    ];
  B = Math.ceil(m / T) - Math.floor(p / T), B > g && (T = Tn(B * T / g / f) * f), et(l) || (N = Math.pow(10, l), T = Math.ceil(T * N) / N), n === "ticks" ? (I = Math.floor(p / T) * T, P = Math.ceil(m / T) * T) : (I = p, P = m), _ && S && o && Cl((a - r) / o, T / 1e3) ? (B = Math.round(Math.min((a - r) / T, d)), T = (a - r) / B, I = r, P = a) : w ? (I = _ ? r : I, P = S ? a : P, B = c - 1, T = (P - I) / B) : (B = (P - I) / T, Ke(B, Math.round(B), T / 1e3) ? B = Math.round(B) : B = Math.ceil(B));
  const x = Math.max(wn(T), wn(I));
  N = Math.pow(10, et(l) ? x : l), I = Math.round(I * N) / N, P = Math.round(P * N) / N;
  let b = 0;
  for (_ && (h && I !== r ? (e.push({
    value: r
  }), I < r && b++, Ke(Math.round((I + b * T) * N) / N, r, Io(r, A, i)) && b++) : I < r && b++); b < B; ++b) {
    const D = Math.round((I + b * T) * N) / N;
    if (S && D > a)
      break;
    e.push({
      value: D
    });
  }
  return S && h && P !== a ? e.length && Ke(e[e.length - 1].value, a, Io(a, A, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!S || P === a) && e.push({
    value: P
  }), e;
}
function Io(i, t, { horizontal: e, minRotation: s }) {
  const n = gt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Ds extends Le {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return et(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = Vt(n), c = Vt(o);
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
    }, o = this._range || this, r = Lh(n, o);
    return t.bounds === "ticks" && Al(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return Ui(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Mh extends Ds {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: $s.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = pt(t) ? t : 0, this.max = pt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = gt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
function Ls(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = mt(t.backdropPadding);
    return G(t.font && t.font.size, ht.font.size) + e.height;
  }
  return 0;
}
function kh(i, t, e) {
  return e = it(e) ? e : [
    e
  ], {
    w: Yl(i, t.string, e),
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
function Ph(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? X / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const d = i.getPointPosition(l, i.drawingArea + n[l], a), u = ft(c.font), h = kh(i.ctx, u, i._pointLabels[l]);
    s[l] = h;
    const f = St(i.getIndexAngle(l) + a), g = Math.round(ji(f)), p = Oo(g, d.x, h.w, 0, 180), m = Oo(g, d.y, h.h, 90, 270);
    Nh(e, t, f, p, m);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Fh(i, s, n);
}
function Nh(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Vh(i, t, e) {
  const s = i.drawingArea, { extra: n, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, s + n + r, o), c = Math.round(ji(St(l.angle + lt))), d = zh(l.y, a.h, c), u = Hh(c), h = Wh(l.x, a.w, u);
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
function Bh(i, t) {
  if (!t)
    return !0;
  const { left: e, top: s, right: n, bottom: o } = i;
  return !(jt({
    x: e,
    y: s
  }, t) || jt({
    x: e,
    y: o
  }, t) || jt({
    x: n,
    y: s
  }, t) || jt({
    x: n,
    y: o
  }, t));
}
function Fh(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: Ls(o) / 2,
    additionalAngle: r ? X / n : 0
  };
  let c;
  for (let d = 0; d < n; d++) {
    l.padding = e[d], l.size = t[d];
    const u = Vh(i, d, l);
    s.push(u), a === "auto" && (u.visible = Bh(u, c), u.visible && (c = u));
  }
  return s;
}
function Hh(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function Wh(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function zh(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function Gh(i, t, e) {
  const { left: s, top: n, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!et(a)) {
    const l = Jt(t.borderRadius), c = mt(t.backdropPadding);
    i.fillStyle = a;
    const d = s - c.left, u = n - c.top, h = o - s + c.width, f = r - n + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), Ae(i, {
      x: d,
      y: u,
      w: h,
      h: f,
      radius: l
    }), i.fill()) : i.fillRect(d, u, h, f);
  }
}
function jh(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = i._pointLabelItems[n];
    if (!o.visible)
      continue;
    const r = s.setContext(i.getPointLabelContext(n));
    Gh(e, r, o);
    const a = ft(r.font), { x: l, y: c, textAlign: d } = o;
    fe(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: d,
      textBaseline: "middle"
    });
  }
}
function qr(i, t, e, s) {
  const { ctx: n } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, rt);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
  }
}
function Uh(i, t, e, s, n) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash || []), o.lineDashOffset = n.dashOffset, o.beginPath(), qr(i, e, r, s), o.closePath(), o.stroke(), o.restore());
}
function Xh(i, t, e) {
  return ie(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Yh extends Ds {
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
    const t = this._padding = mt(Ls(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = pt(t) && !isNaN(t) ? t : 0, this.max = pt(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ls(this.options));
  }
  generateTickLabels(t) {
    Ds.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = st(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Ph(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = rt / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return St(t * e + gt(s));
  }
  getDistanceFromCenterForValue(t) {
    if (et(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (et(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return Xh(this.getContext(), t, s);
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
      s.save(), s.beginPath(), qr(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && jh(this, r), n.display && this.ticks.forEach((d, u) => {
      if (u !== 0 || u === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(d.value);
        const h = this.getContext(u), f = n.setContext(h), g = o.setContext(h);
        Uh(this, f, l, r, g);
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
      const c = s.setContext(this.getContext(l)), d = ft(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = d.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const u = mt(c.backdropPadding);
        t.fillRect(-r / 2 - u.left, -o - d.size / 2 - u.top, r + u.width, d.size + u.height);
      }
      fe(t, a.label, 0, -o, d, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const Ki = {
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
}, At = /* @__PURE__ */ Object.keys(Ki);
function Ro(i, t) {
  return i - t;
}
function Do(i, t) {
  if (et(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), pt(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (ue(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function Lo(i, t, e, s) {
  const n = At.length;
  for (let o = At.indexOf(i); o < n - 1; ++o) {
    const r = Ki[At[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return At[o];
  }
  return At[n - 1];
}
function $h(i, t, e, s, n) {
  for (let o = At.length - 1; o >= At.indexOf(e); o--) {
    const r = At[o];
    if (Ki[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return At[e ? At.indexOf(e) : 0];
}
function Zh(i) {
  for (let t = At.indexOf(i) + 1, e = At.length; t < e; ++t)
    if (Ki[At[t]].common)
      return At[t];
}
function Mo(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Us(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function Kh(i, t, e, s) {
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
  return o === 0 || !e ? s : Kh(i, s, n, e);
}
class Po extends Le {
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
    const s = t.time || (t.time = {}), n = this._adapter = new gd._date(t.adapters.date);
    n.init(e), Ze(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Do(this, t);
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = pt(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = pt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
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
    const o = this.min, r = this.max, a = Dl(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? Lo(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : $h(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Zh(this._unit), this.initOffsets(n), t.reverse && a.reverse(), ko(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = Tt(e, 0, r), s = Tt(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || Lo(o.minUnit, e, s, this._getLabelCapacity(e)), a = G(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = ue(l) || l === !0, d = {};
    let u = e, h, f;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (h = u, f = 0; h < s; h = +t.add(h, a, r), f++)
      Mo(d, h, g);
    return (h === s || n.bounds === "ticks" || f === 1) && Mo(d, h, g), Object.keys(d).sort(Ro).map((p) => +p);
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
      return st(r, [
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
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = gt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
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
      t.push(Do(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return pr(t.sort(Ro));
  }
}
function Ai(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = ae(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = ae(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Vp extends Po {
  static id = "timeseries";
  static defaults = Po.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Ai(e, this.min), this._tableRange = Ai(e, this.max) - this._minPos, super.initOffsets(t);
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
    return (Ai(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ai(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const Jr = {
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
}, qh = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, Jh = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...Jr,
  ...qh
}, Qh = Ma[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function Te(i) {
  return or(i) ? Ss(i) : i;
}
function tf(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return or(t) ? new Proxy(i, {}) : i;
}
function ef(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function Qr(i, t) {
  i.labels = t;
}
function ta(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function sf(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return Qr(e, i.labels), ta(e, i.datasets, t), e;
}
const nf = Gi({
  props: Jh,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = zt(null), o = sr(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: d, options: u, plugins: h, datasetIdKey: f } = i, g = sf(d, f), p = tf(g, d);
      o.value = new de(n.value, {
        type: c,
        data: p,
        options: {
          ...u
        },
        plugins: h
      });
    }, a = () => {
      const c = Ss(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return Di(r), nr(a), Qe([
      () => i.options,
      () => i.data
    ], (c, d) => {
      let [u, h] = c, [f, g] = d;
      const p = Ss(o.value);
      if (!p)
        return;
      let m = !1;
      if (u) {
        const _ = Te(u), S = Te(f);
        _ && _ !== S && (ef(p, _), m = !0);
      }
      if (h) {
        const _ = Te(h.labels), S = Te(g.labels), w = Te(h.datasets), A = Te(g.datasets);
        _ !== S && (Qr(p.config.data, _), m = !0), w && w !== A && (ta(p.config.data, w, i.datasetIdKey), m = !0);
      }
      m && La(() => {
        l(p);
      });
    }, {
      deep: !0
    }), () => vs("canvas", {
      role: "img",
      "aria-label": i.ariaLabel,
      "aria-describedby": i.ariaDescribedby,
      ref: n
    }, [
      vs("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function Me(i, t) {
  return de.register(t), Gi({
    props: Jr,
    setup(e, s) {
      let { expose: n } = s;
      const o = sr(null), r = (a) => {
        o.value = a?.chart;
      };
      return n({
        chart: o
      }), () => vs(nf, Qh({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const _s = /* @__PURE__ */ Me("bar", ld), of = /* @__PURE__ */ Me("doughnut", sn), rf = /* @__PURE__ */ Me("line", dd), af = /* @__PURE__ */ Me("pie", hd), lf = /* @__PURE__ */ Me("polarArea", ud), cf = /* @__PURE__ */ Me("radar", fd);
/*!
* chartjs-plugin-annotation v3.1.0
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2024 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */
const No = {
  modes: {
    /**
     * Point mode returns all elements that hit test based on the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @return {AnnotationElement[]} - elements that are found
     */
    point(i, t) {
      return Ri(i, t, { intersect: !0 });
    },
    /**
     * Nearest mode returns the element closest to the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found (only 1 element)
     */
    nearest(i, t, e) {
      return hf(i, t, e);
    },
    /**
     * x mode returns the elements that hit-test at the current x coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    x(i, t, e) {
      return Ri(i, t, { intersect: e.intersect, axis: "x" });
    },
    /**
     * y mode returns the elements that hit-test at the current y coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    y(i, t, e) {
      return Ri(i, t, { intersect: e.intersect, axis: "y" });
    }
  }
};
function on(i, t, e) {
  return (No.modes[e.mode] || No.modes.nearest)(i, t, e);
}
function df(i, t, e) {
  return e !== "x" && e !== "y" ? i.inRange(t.x, t.y, "x", !0) || i.inRange(t.x, t.y, "y", !0) : i.inRange(t.x, t.y, e, !0);
}
function uf(i, t, e) {
  return e === "x" ? { x: i.x, y: t.y } : e === "y" ? { x: t.x, y: i.y } : t;
}
function Ri(i, t, e) {
  return i.filter((s) => e.intersect ? s.inRange(t.x, t.y) : df(s, t, e.axis));
}
function hf(i, t, e) {
  let s = Number.POSITIVE_INFINITY;
  return Ri(i, t, e).reduce((n, o) => {
    const r = o.getCenterPoint(), a = uf(t, r, e.axis), l = Ce(t, a);
    return l < s ? (n = [o], s = l) : l === s && n.push(o), n;
  }, []).sort((n, o) => n._index - o._index).slice(0, 1);
}
function pe(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e), o = t.x, r = t.y;
  return {
    x: o + s * (i.x - o) - n * (i.y - r),
    y: r + n * (i.x - o) + s * (i.y - r)
  };
}
const ff = (i, t) => t > i || i.length > t.length && i.slice(0, t.length) === t, le = 1e-3, qi = (i, t, e) => Math.min(e, Math.max(t, i)), ea = (i, t) => i.value >= i.start - t && i.value <= i.end + t;
function gf(i, t, e) {
  for (const s of Object.keys(i))
    i[s] = qi(i[s], t, e);
  return i;
}
function pf(i, t, e, s) {
  return !i || !t || e <= 0 ? !1 : Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2) <= Math.pow(e + s, 2);
}
function ia(i, { x: t, y: e, x2: s, y2: n }, o, { borderWidth: r, hitTolerance: a }) {
  const l = (r + a) / 2, c = i.x >= t - l - le && i.x <= s + l + le, d = i.y >= e - l - le && i.y <= n + l + le;
  return o === "x" ? c : (o === "y" || c) && d;
}
function sa(i, { rect: t, center: e }, s, { rotation: n, borderWidth: o, hitTolerance: r }) {
  const a = pe(i, e, gt(-n));
  return ia(a, t, s, { borderWidth: o, hitTolerance: r });
}
function me(i, t) {
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
    if (ff(a, r)) {
      if (s)
        throw new Error(`${i} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const na = (i) => typeof i == "string" && i.endsWith("%"), oa = (i) => parseFloat(i) / 100, ra = (i) => qi(oa(i), 0, 1), Ge = (i, t) => ({ x: i, y: t, x2: i, y2: t, width: 0, height: 0 }), bf = {
  box: (i) => Ge(i.centerX, i.centerY),
  doughnutLabel: (i) => Ge(i.centerX, i.centerY),
  ellipse: (i) => ({ centerX: i.centerX, centerY: i.centerX, radius: 0, width: 0, height: 0 }),
  label: (i) => Ge(i.centerX, i.centerY),
  line: (i) => Ge(i.x, i.y),
  point: (i) => ({ centerX: i.centerX, centerY: i.centerY, radius: 0, width: 0, height: 0 }),
  polygon: (i) => Ge(i.centerX, i.centerY)
};
function rn(i, t) {
  return t === "start" ? 0 : t === "end" ? i : na(t) ? ra(t) * i : i / 2;
}
function ee(i, t, e = !0) {
  return typeof t == "number" ? t : na(t) ? (e ? ra(t) : oa(t)) * i : i;
}
function yf(i, t) {
  const { x: e, width: s } = i, n = t.textAlign;
  return n === "center" ? e + s / 2 : n === "end" || n === "right" ? e + s : e;
}
function aa(i, t, { borderWidth: e, position: s, xAdjust: n, yAdjust: o }, r) {
  const a = Y(r), l = t.width + (a ? r.width : 0) + e, c = t.height + (a ? r.height : 0) + e, d = an(s), u = Vo(i.x, l, n, d.x), h = Vo(i.y, c, o, d.y);
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
function an(i, t = "center") {
  return Y(i) ? {
    x: G(i.x, t),
    y: G(i.y, t)
  } : (i = G(i, t), {
    x: i,
    y: i
  });
}
const la = (i, t) => i && i.autoFit && t < 1;
function ca(i, t) {
  const e = i.font, s = it(e) ? e : [e];
  return la(i, t) ? s.map(function(n) {
    const o = ft(n);
    return o.size = Math.floor(n.size * t), o.lineHeight = n.lineHeight, ft(o);
  }) : s.map((n) => ft(n));
}
function da(i) {
  return i && (Ot(i.xValue) || Ot(i.yValue));
}
function Vo(i, t, e = 0, s) {
  return i - rn(t, s) + e;
}
function ke(i, t, e) {
  const s = e.init;
  if (s) {
    if (s === !0)
      return ha(t, e);
  } else return;
  return _f(i, t, e);
}
function ua(i, t, e) {
  let s = !1;
  return t.forEach((n) => {
    It(i[n]) ? (s = !0, e[n] = i[n]) : Ot(e[n]) && delete e[n];
  }), s;
}
function ha(i, t) {
  const e = t.type || "line";
  return bf[e](i);
}
function _f(i, t, e) {
  const s = st(e.init, [{ chart: i, properties: t, options: e }]);
  if (s === !0)
    return ha(t, e);
  if (Y(s))
    return s;
}
const xs = /* @__PURE__ */ new Map(), xf = (i) => isNaN(i) || i <= 0, vf = (i) => i.reduce(function(t, e) {
  return t += e.string, t;
}, "");
function Ji(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function Qi(i, { x: t, y: e }, s) {
  s && (i.translate(t, e), i.rotate(gt(s)), i.translate(-t, -e));
}
function Ut(i, t) {
  if (t && t.borderWidth)
    return i.lineCap = t.borderCapStyle || "butt", i.setLineDash(t.borderDash), i.lineDashOffset = t.borderDashOffset, i.lineJoin = t.borderJoinStyle || "miter", i.lineWidth = t.borderWidth, i.strokeStyle = t.borderColor, !0;
}
function Pe(i, t) {
  i.shadowColor = t.backgroundShadowColor, i.shadowBlur = t.shadowBlur, i.shadowOffsetX = t.shadowOffsetX, i.shadowOffsetY = t.shadowOffsetY;
}
function ts(i, t) {
  const e = t.content;
  if (Ji(e))
    return {
      width: ee(e.width, t.width),
      height: ee(e.height, t.height)
    };
  const s = ca(t), n = t.textStrokeWidth, o = it(e) ? e : [e], r = o.join() + vf(s) + n + (i._measureText ? "-spriting" : "");
  return xs.has(r) || xs.set(r, Ef(i, o, s, n)), xs.get(r);
}
function fa(i, t, e) {
  const { x: s, y: n, width: o, height: r } = t;
  i.save(), Pe(i, e);
  const a = Ut(i, e);
  i.fillStyle = e.backgroundColor, i.beginPath(), Ae(i, {
    x: s,
    y: n,
    w: o,
    h: r,
    radius: gf(Jt(e.borderRadius), 0, Math.min(o, r) / 2)
  }), i.closePath(), i.fill(), a && (i.shadowColor = e.borderShadowColor, i.stroke()), i.restore();
}
function ga(i, t, e, s) {
  const n = e.content;
  if (Ji(n)) {
    i.save(), i.globalAlpha = If(e.opacity, n.style.opacity), i.drawImage(n, t.x, t.y, t.width, t.height), i.restore();
    return;
  }
  const o = it(n) ? n : [n], r = ca(e, s), a = e.color, l = it(a) ? a : [a], c = yf(t, e), d = t.y + e.textStrokeWidth / 2;
  i.save(), i.textBaseline = "middle", i.textAlign = e.textAlign, Sf(i, e) && Cf(i, { x: c, y: d }, o, r), Af(i, { x: c, y: d }, o, { fonts: r, colors: l }), i.restore();
}
function Sf(i, t) {
  if (t.textStrokeWidth > 0)
    return i.lineJoin = "round", i.miterLimit = 2, i.lineWidth = t.textStrokeWidth, i.strokeStyle = t.textStrokeColor, !0;
}
function Tf(i, t, e, s) {
  const { radius: n, options: o } = t, r = o.pointStyle, a = o.rotation;
  let l = (a || 0) * js;
  if (Ji(r)) {
    i.save(), i.translate(e, s), i.rotate(l), i.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), i.restore();
    return;
  }
  xf(n) || wf(i, { x: e, y: s, radius: n, rotation: a, style: r, rad: l });
}
function wf(i, { x: t, y: e, radius: s, rotation: n, style: o, rad: r }) {
  let a, l, c, d;
  switch (i.beginPath(), o) {
    // Default includes circle
    default:
      i.arc(t, e, s, 0, rt), i.closePath();
      break;
    case "triangle":
      i.moveTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Pi, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Pi, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), i.closePath();
      break;
    case "rectRounded":
      d = s * 0.516, c = s - d, a = Math.cos(r + Dt) * c, l = Math.sin(r + Dt) * c, i.arc(t - a, e - l, d, r - X, r - lt), i.arc(t + l, e - a, d, r - lt, r), i.arc(t + a, e + l, d, r, r + lt), i.arc(t - l, e + a, d, r + lt, r + X), i.closePath();
      break;
    case "rect":
      if (!n) {
        c = Math.SQRT1_2 * s, i.rect(t - c, e - c, 2 * c, 2 * c);
        break;
      }
      r += Dt;
    /* falls through */
    case "rectRot":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + l, e - a), i.lineTo(t + a, e + l), i.lineTo(t - l, e + a), i.closePath();
      break;
    case "crossRot":
      r += Dt;
    /* falls through */
    case "cross":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
      break;
    case "star":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a), r += Dt, a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
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
function Cf(i, { x: t, y: e }, s, n) {
  i.beginPath();
  let o = 0;
  s.forEach(function(r, a) {
    const l = n[Math.min(a, n.length - 1)], c = l.lineHeight;
    i.font = l.string, i.strokeText(r, t, e + c / 2 + o), o += c;
  }), i.stroke();
}
function Af(i, { x: t, y: e }, s, { fonts: n, colors: o }) {
  let r = 0;
  s.forEach(function(a, l) {
    const c = o[Math.min(l, o.length - 1)], d = n[Math.min(l, n.length - 1)], u = d.lineHeight;
    i.beginPath(), i.font = d.string, i.fillStyle = c, i.fillText(a, t, e + u / 2 + r), r += u, i.fill();
  });
}
function If(i, t) {
  const e = ue(i) ? i : t;
  return ue(e) ? qi(e, 0, 1) : 1;
}
const pa = ["left", "bottom", "top", "right"];
function Of(i, t) {
  const { pointX: e, pointY: s, options: n } = t, o = n.callout, r = o && o.display && kf(t, o);
  if (!r || Nf(t, o, r))
    return;
  if (i.save(), i.beginPath(), !Ut(i, o))
    return i.restore();
  const { separatorStart: l, separatorEnd: c } = Rf(t, r), { sideStart: d, sideEnd: u } = Lf(t, r, l);
  (o.margin > 0 || n.borderWidth === 0) && (i.moveTo(l.x, l.y), i.lineTo(c.x, c.y)), i.moveTo(d.x, d.y), i.lineTo(u.x, u.y);
  const h = pe({ x: e, y: s }, t.getCenterPoint(), gt(-t.rotation));
  i.lineTo(h.x, h.y), i.stroke(), i.restore();
}
function Rf(i, t) {
  const { x: e, y: s, x2: n, y2: o } = i, r = Df(i, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: s }, l = { x: a.x, y: o }) : (a = { x: e, y: s + r }, l = { x: n, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function Df(i, t) {
  const { width: e, height: s, options: n } = i, o = n.callout.margin + n.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? s + o : -o;
}
function Lf(i, t, e) {
  const { y: s, width: n, height: o, options: r } = i, a = r.callout.start, l = Mf(t, r.callout);
  let c, d;
  return t === "left" || t === "right" ? (c = { x: e.x, y: s + ee(o, a) }, d = { x: c.x + l, y: c.y }) : (c = { x: e.x + ee(n, a), y: e.y }, d = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: d };
}
function Mf(i, t) {
  const e = t.side;
  return i === "left" || i === "top" ? -e : e;
}
function kf(i, t) {
  const e = t.position;
  return pa.includes(e) ? e : Pf(i, t);
}
function Pf(i, t) {
  const { x: e, y: s, x2: n, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: d, centerY: u, rotation: h } = i, f = { x: d, y: u }, g = t.start, p = ee(r, g), m = ee(a, g), _ = [e, e + p, e + p, n], S = [s + m, o, s, o], w = [];
  for (let A = 0; A < 4; A++) {
    const T = pe({ x: _[A], y: S[A] }, f, gt(h));
    w.push({
      position: pa[A],
      distance: Ce(T, { x: l, y: c })
    });
  }
  return w.sort((A, T) => A.distance - T.distance)[0].position;
}
function Nf(i, t, e) {
  const { pointX: s, pointY: n } = i, o = t.margin;
  let r = s, a = n;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), i.inRange(r, a);
}
const Bo = {
  xScaleID: { min: "xMin", max: "xMax", start: "left", end: "right", startProp: "x", endProp: "x2" },
  yScaleID: { min: "yMin", max: "yMax", start: "bottom", end: "top", startProp: "y", endProp: "y2" }
};
function Re(i, t, e) {
  return t = typeof t == "number" ? t : i.parse(t), pt(t) ? i.getPixelForValue(t) : e;
}
function ge(i, t, e) {
  const s = t[e];
  if (s || e === "scaleID")
    return s;
  const n = e.charAt(0), o = Object.values(i).filter((r) => r.axis && r.axis === n);
  return o.length ? o[0].id : n;
}
function ma(i, t) {
  if (i) {
    const e = i.options.reverse, s = Re(i, t.min, e ? t.end : t.start), n = Re(i, t.max, e ? t.start : t.end);
    return {
      start: s,
      end: n
    };
  }
}
function ba(i, t) {
  const { chartArea: e, scales: s } = i, n = s[ge(s, t, "xScaleID")], o = s[ge(s, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return n && (r = Re(n, t.xValue, n.left + n.width / 2)), o && (a = Re(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function ln(i, t) {
  const e = i.scales, s = e[ge(e, t, "xScaleID")], n = e[ge(e, t, "yScaleID")];
  if (!s && !n)
    return {};
  let { left: o, right: r } = s || i.chartArea, { top: a, bottom: l } = n || i.chartArea;
  const c = Fo(s, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const d = Fo(n, { min: t.yMin, max: t.yMax, start: l, end: a });
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
function ya(i, t) {
  if (!da(t)) {
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
  return Bf(i, t);
}
function Vf(i, t) {
  const { scales: e, chartArea: s } = i, n = e[t.scaleID], o = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
  return n ? Ff(n, o, t) : Hf(e, o, t), o;
}
function _a(i, t) {
  const e = ln(i, t);
  return e.initProperties = ke(i, e, t), e.elements = [{
    type: "label",
    optionScope: "label",
    properties: Gf(i, e, t),
    initProperties: e.initProperties
  }], e;
}
function Bf(i, t) {
  const e = ba(i, t), s = t.radius * 2;
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
function Ff(i, t, e) {
  const s = Re(i, e.value, NaN), n = Re(i, e.endValue, s);
  i.isHorizontal() ? (t.x = s, t.x2 = n) : (t.y = s, t.y2 = n);
}
function Hf(i, t, e) {
  for (const s of Object.keys(Bo)) {
    const n = i[ge(i, e, s)];
    if (n) {
      const { min: o, max: r, start: a, end: l, startProp: c, endProp: d } = Bo[s], u = ma(n, { min: e[o], max: e[r], start: n[a], end: n[l] });
      t[c] = u.start, t[d] = u.end;
    }
  }
}
function Wf({ properties: i, options: t }, e, s, n) {
  const { x: o, x2: r, width: a } = i;
  return xa({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.x,
    padding: { start: n.left, end: n.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function zf({ properties: i, options: t }, e, s, n) {
  const { y: o, y2: r, height: a } = i;
  return xa({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.y,
    padding: { start: n.top, end: n.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function xa(i, t) {
  const { start: e, end: s, borderWidth: n } = i, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = s - n - e - r - a - t.size;
  return e + n / 2 + l + rn(c, o);
}
function Gf(i, t, e) {
  const s = e.label;
  s.backgroundColor = "transparent", s.callout.display = !1;
  const n = an(s.position), o = mt(s.padding), r = ts(i.ctx, s), a = Wf({ properties: t, options: e }, r, n, o), l = zf({ properties: t, options: e }, r, n, o), c = r.width + o.width, d = r.height + o.height;
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
const Ms = ["enter", "leave"], cn = Ms.concat("click");
function jf(i, t, e) {
  t.listened = ua(e, cn, t.listeners), t.moveListened = !1, Ms.forEach((s) => {
    It(e[s]) && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((s) => {
    !t.listened && It(s.click) && (t.listened = !0), t.moveListened || Ms.forEach((n) => {
      It(s[n]) && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function Uf(i, t, e) {
  if (i.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return Xf(i, t, e);
      case "click":
        return Yf(i, t, e);
    }
}
function Xf(i, t, e) {
  if (!i.moveListened)
    return;
  let s;
  t.type === "mousemove" ? s = on(i.visibleElements, t, e.interaction) : s = [];
  const n = i.hovered;
  i.hovered = s;
  const o = { state: i, event: t };
  let r = Ho(o, "leave", n, s);
  return Ho(o, "enter", s, n) || r;
}
function Ho({ state: i, event: t }, e, s, n) {
  let o;
  for (const r of s)
    n.indexOf(r) < 0 && (o = va(r.options[e] || i.listeners[e], r, t) || o);
  return o;
}
function Yf(i, t, e) {
  const s = i.listeners, n = on(i.visibleElements, t, e.interaction);
  let o;
  for (const r of n)
    o = va(r.options.click || s.click, r, t) || o;
  return o;
}
function va(i, t, e) {
  return st(i, [t.$context, e]) === !0;
}
const Wi = ["afterDraw", "beforeDraw"];
function $f(i, t, e) {
  const s = t.visibleElements;
  t.hooked = ua(e, Wi, t.hooks), t.hooked || s.forEach((n) => {
    t.hooked || Wi.forEach((o) => {
      It(n.options[o]) && (t.hooked = !0);
    });
  });
}
function Wo(i, t, e) {
  if (i.hooked) {
    const s = t.options[e] || i.hooks[e];
    return st(s, [t.$context]);
  }
}
function Zf(i, t, e) {
  const s = tg(i.scales, t, e);
  let n = zo(t, s, "min", "suggestedMin");
  n = zo(t, s, "max", "suggestedMax") || n, n && It(t.handleTickRangeOptions) && t.handleTickRangeOptions();
}
function Kf(i, t) {
  for (const e of i)
    Jf(e, t);
}
function zo(i, t, e, s) {
  if (pt(t[e]) && !qf(i.options, e, s)) {
    const n = i[e] !== t[e];
    return i[e] = t[e], n;
  }
}
function qf(i, t, e) {
  return Ot(i[t]) || Ot(i[e]);
}
function Jf(i, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const s = ge(t, i, e);
    s && !t[s] && Qf(i, e) && console.warn(`No scale found with id '${s}' for annotation '${i.id}'`);
  }
}
function Qf(i, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const s of ["Min", "Max", "Value"])
    if (Ot(i[e + s]))
      return !0;
  return !1;
}
function tg(i, t, e) {
  const s = t.axis, n = t.id, o = s + "ScaleID", r = {
    min: G(t.min, Number.NEGATIVE_INFINITY),
    max: G(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === n ? Go(a, t, ["value", "endValue"], r) : ge(i, a, o) === n && Go(a, t, [s + "Min", s + "Max", s + "Value"], r);
  return r;
}
function Go(i, t, e, s) {
  for (const n of e) {
    const o = i[n];
    if (Ot(o)) {
      const r = t.parse(o);
      s.min = Math.min(s.min, r), s.max = Math.max(s.max, r);
    }
  }
}
class Ne extends wt {
  inRange(t, e, s, n) {
    const { x: o, y: r } = pe({ x: t, y: e }, this.getCenterPoint(n), gt(-this.options.rotation));
    return ia({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], n), s, this.options);
  }
  getCenterPoint(t) {
    return me(this, t);
  }
  draw(t) {
    t.save(), Qi(t, this.getCenterPoint(), this.options.rotation), fa(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return _a(t, e);
  }
}
Ne.id = "boxAnnotation";
Ne.defaults = {
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
Ne.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
Ne.descriptors = {
  label: {
    _fallback: !0
  }
};
class es extends wt {
  inRange(t, e, s, n) {
    return sa(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: 0, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return me(this, t);
  }
  draw(t) {
    const e = this.options;
    !e.display || !e.content || (rg(t, this), t.save(), Qi(t, this.getCenterPoint(), this.rotation), ga(t, this, e, this._fitRatio), t.restore());
  }
  resolveElementProperties(t, e) {
    const s = eg(t, e);
    if (!s)
      return {};
    const { controllerMeta: n, point: o, radius: r } = sg(t, e, s);
    let a = ts(t.ctx, e);
    const l = ng(a, r);
    la(e, l) && (a = { width: a.width * l, height: a.height * l });
    const { position: c, xAdjust: d, yAdjust: u } = e, h = aa(o, a, { borderWidth: 0, position: c, xAdjust: d, yAdjust: u });
    return {
      initProperties: ke(t, h, e),
      ...h,
      ...n,
      rotation: e.rotation,
      _fitRatio: l
    };
  }
}
es.id = "doughnutLabelAnnotation";
es.defaults = {
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
es.defaultRoutes = {};
function eg(i, t) {
  return i.getSortedVisibleDatasetMetas().reduce(function(e, s) {
    const n = s.controller;
    return n instanceof sn && ig(i, t, s.data) && (!e || n.innerRadius < e.controller.innerRadius) && n.options.circumference >= 90 ? s : e;
  }, void 0);
}
function ig(i, t, e) {
  if (!t.autoHide)
    return !0;
  for (let s = 0; s < e.length; s++)
    if (!e[s].hidden && i.getDataVisibility(s))
      return !0;
}
function sg({ chartArea: i }, t, e) {
  const { left: s, top: n, right: o, bottom: r } = i, { innerRadius: a, offsetX: l, offsetY: c } = e.controller, d = (s + o) / 2 + l, u = (n + r) / 2 + c, h = {
    left: Math.max(d - a, s),
    right: Math.min(d + a, o),
    top: Math.max(u - a, n),
    bottom: Math.min(u + a, r)
  }, f = {
    x: (h.left + h.right) / 2,
    y: (h.top + h.bottom) / 2
  }, g = t.spacing + t.borderWidth / 2, p = a - g, m = f.y > u, _ = m ? n + g : r - g, S = og(_, d, u, p);
  return {
    controllerMeta: {
      _centerX: d,
      _centerY: u,
      _radius: p,
      _counterclockwise: m,
      ...S
    },
    point: f,
    radius: Math.min(a, Math.min(h.right - h.left, h.bottom - h.top) / 2)
  };
}
function ng({ width: i, height: t }, e) {
  const s = Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
  return e * 2 / s;
}
function og(i, t, e, s) {
  const n = Math.pow(e - i, 2), o = Math.pow(s, 2), r = t * -2, a = Math.pow(t, 2) + n - o, l = Math.pow(r, 2) - 4 * a;
  if (l <= 0)
    return {
      _startAngle: 0,
      _endAngle: rt
    };
  const c = (-r - Math.sqrt(l)) / 2, d = (-r + Math.sqrt(l)) / 2;
  return {
    _startAngle: Ni({ x: t, y: e }, { x: c, y: i }).angle,
    _endAngle: Ni({ x: t, y: e }, { x: d, y: i }).angle
  };
}
function rg(i, t) {
  const { _centerX: e, _centerY: s, _radius: n, _startAngle: o, _endAngle: r, _counterclockwise: a, options: l } = t;
  i.save();
  const c = Ut(i, l);
  i.fillStyle = l.backgroundColor, i.beginPath(), i.arc(e, s, n, o, r, a), i.closePath(), i.fill(), c && i.stroke(), i.restore();
}
class li extends wt {
  inRange(t, e, s, n) {
    return sa(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: this.options.borderWidth, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return me(this, t);
  }
  draw(t) {
    const e = this.options, s = !Ot(this._visible) || this._visible;
    !e.display || !e.content || !s || (t.save(), Qi(t, this.getCenterPoint(), this.rotation), Of(t, this), fa(t, this, e), ga(t, ag(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let s;
    if (da(e))
      s = ba(t, e);
    else {
      const { centerX: a, centerY: l } = ln(t, e);
      s = { x: a, y: l };
    }
    const n = mt(e.padding), o = ts(t.ctx, e), r = aa(s, o, e, n);
    return {
      initProperties: ke(t, r, e),
      pointX: s.x,
      pointY: s.y,
      ...r,
      rotation: e.rotation
    };
  }
}
li.id = "labelAnnotation";
li.defaults = {
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
li.defaultRoutes = {
  borderColor: "color"
};
function ag({ x: i, y: t, width: e, height: s, options: n }) {
  const o = n.borderWidth / 2, r = mt(n.padding);
  return {
    x: i + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - n.borderWidth,
    height: s - r.top - r.bottom - n.borderWidth
  };
}
const dn = (i, t, e) => ({ x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) }), ks = (i, t, e) => dn(t, e, Math.abs((i - t.y) / (e.y - t.y))).x, jo = (i, t, e) => dn(t, e, Math.abs((i - t.x) / (e.x - t.x))).y, $e = (i) => i * i, lg = (i, t, { x: e, y: s, x2: n, y2: o }, r) => r === "y" ? { start: Math.min(s, o), end: Math.max(s, o), value: t } : { start: Math.min(e, n), end: Math.max(e, n), value: i }, Uo = (i, t, e, s) => (1 - s) * (1 - s) * i + 2 * (1 - s) * s * t + s * s * e, Ps = (i, t, e, s) => ({ x: Uo(i.x, t.x, e.x, s), y: Uo(i.y, t.y, e.y, s) }), Xo = (i, t, e, s) => 2 * (1 - s) * (t - i) + 2 * s * (e - t), Yo = (i, t, e, s) => -Math.atan2(Xo(i.x, t.x, e.x, s), Xo(i.y, t.y, e.y, s)) + 0.5 * X;
class ci extends wt {
  inRange(t, e, s, n) {
    const o = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y") {
      const r = { mouseX: t, mouseY: e }, { path: a, ctx: l } = this;
      if (a) {
        Ut(l, this.options), l.lineWidth += this.options.hitTolerance;
        const { chart: d } = this.$context, u = t * d.currentDevicePixelRatio, h = e * d.currentDevicePixelRatio, f = l.isPointInStroke(a, u, h) || Ns(this, r, n);
        return l.restore(), f;
      }
      const c = $e(o);
      return hg(this, r, c, n) || Ns(this, r, n);
    }
    return cg(this, { mouseX: t, mouseY: e }, s, { hitSize: o, useFinalPosition: n });
  }
  getCenterPoint(t) {
    return me(this, t);
  }
  draw(t) {
    const { x: e, y: s, x2: n, y2: o, cp: r, options: a } = this;
    if (t.save(), !Ut(t, a))
      return t.restore();
    Pe(t, a);
    const l = Math.sqrt(Math.pow(n - e, 2) + Math.pow(o - s, 2));
    if (a.curve && r)
      return xg(t, this, r, l), t.restore();
    const { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = Sa(this), f = Math.atan2(o - s, n - e);
    t.translate(e, s), t.rotate(f), t.beginPath(), t.moveTo(0 + u, 0), t.lineTo(l - h, 0), t.shadowColor = a.borderShadowColor, t.stroke(), Vs(t, 0, u, c), Vs(t, l, -h, d), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const s = Vf(t, e), { x: n, y: o, x2: r, y2: a } = s, l = dg(s, t.chartArea), c = l ? ug({ x: n, y: o }, { x: r, y: a }, t.chartArea) : { x: n, y: o, x2: r, y2: a, width: Math.abs(r - n), height: Math.abs(a - o) };
    if (c.centerX = (r + n) / 2, c.centerY = (a + o) / 2, c.initProperties = ke(t, c, e), e.curve) {
      const u = { x: c.x, y: c.y }, h = { x: c.x2, y: c.y2 };
      c.cp = _g(c, e, Ce(u, h));
    }
    const d = fg(t, c, e.label);
    return d._visible = l, c.elements = [{
      type: "label",
      optionScope: "label",
      properties: d,
      initProperties: c.initProperties
    }], c;
  }
}
ci.id = "lineAnnotation";
const $o = {
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
ci.defaults = {
  adjustScaleRange: !0,
  arrowHeads: {
    display: !1,
    end: Object.assign({}, $o),
    fill: !1,
    length: 12,
    start: Object.assign({}, $o),
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
    callout: Object.assign({}, li.defaults.callout),
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
ci.descriptors = {
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
ci.defaultRoutes = {
  borderColor: "color"
};
function cg(i, { mouseX: t, mouseY: e }, s, { hitSize: n, useFinalPosition: o }) {
  const r = lg(t, e, i.getProps(["x", "y", "x2", "y2"], o), s);
  return ea(r, n) || Ns(i, { mouseX: t, mouseY: e }, o, s);
}
function dg({ x: i, y: t, x2: e, y2: s }, { top: n, right: o, bottom: r, left: a }) {
  return !(i < a && e < a || i > o && e > o || t < n && s < n || t > r && s > r);
}
function Zo({ x: i, y: t }, e, { top: s, right: n, bottom: o, left: r }) {
  return i < r && (t = jo(r, { x: i, y: t }, e), i = r), i > n && (t = jo(n, { x: i, y: t }, e), i = n), t < s && (i = ks(s, { x: i, y: t }, e), t = s), t > o && (i = ks(o, { x: i, y: t }, e), t = o), { x: i, y: t };
}
function ug(i, t, e) {
  const { x: s, y: n } = Zo(i, t, e), { x: o, y: r } = Zo(t, i, e);
  return { x: s, y: n, x2: o, y2: r, width: Math.abs(o - s), height: Math.abs(r - n) };
}
function hg(i, { mouseX: t, mouseY: e }, s = le, n) {
  const { x: o, y: r, x2: a, y2: l } = i.getProps(["x", "y", "x2", "y2"], n), c = a - o, d = l - r, u = $e(c) + $e(d), h = u === 0 ? -1 : ((t - o) * c + (e - r) * d) / u;
  let f, g;
  return h < 0 ? (f = o, g = r) : h > 1 ? (f = a, g = l) : (f = o + h * c, g = r + h * d), $e(t - f) + $e(e - g) <= s;
}
function Ns(i, { mouseX: t, mouseY: e }, s, n) {
  const o = i.label;
  return o.options.display && o.inRange(t, e, n, s);
}
function fg(i, t, e) {
  const s = e.borderWidth, n = mt(e.padding), o = ts(i.ctx, e), r = o.width + n.width + s, a = o.height + n.height + s;
  return pg(t, e, { width: r, height: a, padding: n }, i.chartArea);
}
function gg(i) {
  const { x: t, y: e, x2: s, y2: n } = i, o = Math.atan2(n - e, s - t);
  return o > X / 2 ? o - X : o < X / -2 ? o + X : o;
}
function pg(i, t, e, s) {
  const { width: n, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: i.x, y: i.y }, d = { x: i.x2, y: i.y2 }, u = t.rotation === "auto" ? gg(i) : gt(t.rotation), h = mg(n, o, u), f = bg(i, t, { labelSize: h, padding: r }, s), g = i.cp ? Ps(c, i.cp, d, f) : dn(c, d, f), p = { size: h.w, min: s.left, max: s.right, padding: r.left }, m = { size: h.h, min: s.top, max: s.bottom, padding: r.top }, _ = qo(g.x, p) + a, S = qo(g.y, m) + l;
  return {
    x: _ - n / 2,
    y: S - o / 2,
    x2: _ + n / 2,
    y2: S + o / 2,
    centerX: _,
    centerY: S,
    pointX: g.x,
    pointY: g.y,
    width: n,
    height: o,
    rotation: ji(u)
  };
}
function mg(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e);
  return {
    w: Math.abs(i * s) + Math.abs(t * n),
    h: Math.abs(i * n) + Math.abs(t * s)
  };
}
function bg(i, t, e, s) {
  let n;
  const o = yg(i, s);
  return t.position === "start" ? n = Ko({ w: i.x2 - i.x, h: i.y2 - i.y }, e, t, o) : t.position === "end" ? n = 1 - Ko({ w: i.x - i.x2, h: i.y - i.y2 }, e, t, o) : n = rn(1, t.position), n;
}
function Ko(i, t, e, s) {
  const { labelSize: n, padding: o } = t, r = i.w * s.dx, a = i.h * s.dy, l = r > 0 && (n.w / 2 + o.left - s.x) / r, c = a > 0 && (n.h / 2 + o.top - s.y) / a;
  return qi(Math.max(l, c), 0, 0.25);
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
function qo(i, t) {
  const { size: e, min: s, max: n, padding: o } = t, r = e / 2;
  return e > n - s ? (n + s) / 2 : (s >= i - o - r && (i = s + o + r), n <= i + o + r && (i = n - o - r), i);
}
function Sa(i) {
  const t = i.options, e = t.arrowHeads && t.arrowHeads.start, s = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: e,
    endOpts: s,
    startAdjust: Jo(i, e),
    endAdjust: Jo(i, s)
  };
}
function Jo(i, t) {
  if (!t || !t.display)
    return 0;
  const { length: e, width: s } = t, n = i.options.borderWidth / 2, o = { x: e, y: s + n };
  return Math.abs(ks(0, o, { x: 0, y: n }));
}
function Vs(i, t, e, s) {
  if (!s || !s.display)
    return;
  const { length: n, width: o, fill: r, backgroundColor: a, borderColor: l } = s, c = Math.abs(t - n) + e;
  i.beginPath(), Pe(i, s), Ut(i, s), i.moveTo(c, -o), i.lineTo(t + e, 0), i.lineTo(c, o), r === !0 ? (i.fillStyle = a || l, i.closePath(), i.fill(), i.shadowColor = "transparent") : i.shadowColor = s.borderShadowColor, i.stroke();
}
function _g(i, t, e) {
  const { x: s, y: n, x2: o, y2: r, centerX: a, centerY: l } = i, c = Math.atan2(r - n, o - s), d = an(t.controlPoint, 0), u = {
    x: a + ee(e, d.x, !1),
    y: l + ee(e, d.y, !1)
  };
  return pe(u, { x: a, y: l }, c);
}
function Qo(i, { x: t, y: e }, { angle: s, adjust: n }, o) {
  !o || !o.display || (i.save(), i.translate(t, e), i.rotate(s), Vs(i, 0, -n, o), i.restore());
}
function xg(i, t, e, s) {
  const { x: n, y: o, x2: r, y2: a, options: l } = t, { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = Sa(t), f = { x: n, y: o }, g = { x: r, y: a }, p = Yo(f, e, g, 0), m = Yo(f, e, g, 1) - X, _ = Ps(f, e, g, u / s), S = Ps(f, e, g, 1 - h / s), w = new Path2D();
  i.beginPath(), w.moveTo(_.x, _.y), w.quadraticCurveTo(e.x, e.y, S.x, S.y), i.shadowColor = l.borderShadowColor, i.stroke(w), t.path = w, t.ctx = i, Qo(i, _, { angle: p, adjust: u }, c), Qo(i, S, { angle: m, adjust: h }, d);
}
class di extends wt {
  inRange(t, e, s, n) {
    const o = this.options.rotation, r = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y")
      return vg({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], n), o, r);
    const { x: a, y: l, x2: c, y2: d } = this.getProps(["x", "y", "x2", "y2"], n), u = s === "y" ? { start: l, end: d } : { start: a, end: c }, h = pe({ x: t, y: e }, this.getCenterPoint(n), gt(-o));
    return h[s] >= u.start - r - le && h[s] <= u.end + r + le;
  }
  getCenterPoint(t) {
    return me(this, t);
  }
  draw(t) {
    const { width: e, height: s, centerX: n, centerY: o, options: r } = this;
    t.save(), Qi(t, this.getCenterPoint(), r.rotation), Pe(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Ut(t, r);
    t.ellipse(n, o, s / 2, e / 2, X / 2, 0, 2 * X), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return _a(t, e);
  }
}
di.id = "ellipseAnnotation";
di.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  label: Object.assign({}, Ne.defaults.label),
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
di.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
di.descriptors = {
  label: {
    _fallback: !0
  }
};
function vg(i, t, e, s) {
  const { width: n, height: o, centerX: r, centerY: a } = t, l = n / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const d = gt(e || 0), u = Math.cos(d), h = Math.sin(d), f = Math.pow(u * (i.x - r) + h * (i.y - a), 2), g = Math.pow(h * (i.x - r) - u * (i.y - a), 2);
  return f / Math.pow(l + s, 2) + g / Math.pow(c + s, 2) <= 1.0001;
}
class is extends wt {
  inRange(t, e, s, n) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], n), d = (this.options.borderWidth + this.options.hitTolerance) / 2;
    return s !== "x" && s !== "y" ? pf({ x: t, y: e }, this.getCenterPoint(n), c / 2, d) : ea(s === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t }, d);
  }
  getCenterPoint(t) {
    return me(this, t);
  }
  draw(t) {
    const e = this.options, s = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, Pe(t, e);
    const n = Ut(t, e);
    Tf(t, this, this.centerX, this.centerY), n && !Ji(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = s;
  }
  resolveElementProperties(t, e) {
    const s = ya(t, e);
    return s.initProperties = ke(t, s, e), s;
  }
}
is.id = "pointAnnotation";
is.defaults = {
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
is.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class ss extends wt {
  inRange(t, e, s, n) {
    if (s !== "x" && s !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && Tg(this.elements, t, e, n);
    const o = pe({ x: t, y: e }, this.getCenterPoint(n), gt(-this.options.rotation)), r = this.elements.map((c) => s === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[s] >= a && o[s] <= l;
  }
  getCenterPoint(t) {
    return me(this, t);
  }
  draw(t) {
    const { elements: e, options: s } = this;
    t.save(), t.beginPath(), t.fillStyle = s.backgroundColor, Pe(t, s);
    const n = Ut(t, s);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), n && (t.shadowColor = s.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const s = ya(t, e), { sides: n, rotation: o } = e, r = [], a = 2 * X / n;
    let l = o * js;
    for (let c = 0; c < n; c++, l += a) {
      const d = Sg(s, e, l);
      d.initProperties = ke(t, s, e), r.push(d);
    }
    return s.elements = r, s;
  }
}
ss.id = "polygonAnnotation";
ss.defaults = {
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
ss.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
function Sg({ centerX: i, centerY: t }, { radius: e, borderWidth: s, hitTolerance: n }, o) {
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
function Tg(i, t, e, s) {
  let n = !1, o = i[i.length - 1].getProps(["bX", "bY"], s);
  for (const r of i) {
    const a = r.getProps(["bX", "bY"], s);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (n = !n), o = a;
  }
  return n;
}
const Qt = {
  box: Ne,
  doughnutLabel: es,
  ellipse: di,
  label: li,
  line: ci,
  point: is,
  polygon: ss
};
Object.keys(Qt).forEach((i) => {
  ht.describe(`elements.${Qt[i].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const wg = {
  update: Object.assign
}, Eg = cn.concat(Wi), tr = (i, t) => Y(t) ? Fs(i, t) : i, Bs = (i) => i === "color" || i === "font";
function un(i = "line") {
  return Qt[i] ? i : (console.warn(`Unknown annotation type: '${i}', defaulting to 'line'`), "line");
}
function Cg(i, t, e, s) {
  const n = Ig(i, e.animations, s), o = t.annotations, r = Dg(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = Ta(r, a, l.type), d = l.setContext(Rg(i, c, r, l)), u = c.resolveElementProperties(i, d);
    u.skip = Ag(u), "elements" in u && (Og(c, u.elements, d, n), delete u.elements), Ot(c.x) || Object.assign(c, u), Object.assign(c, u.initProperties), u.options = wa(d), n.update(c, u);
  }
}
function Ag(i) {
  return isNaN(i.x) || isNaN(i.y);
}
function Ig(i, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? wg : new en(i, t);
}
function Og(i, t, e, s) {
  const n = i.elements || (i.elements = []);
  n.length = t.length;
  for (let o = 0; o < t.length; o++) {
    const r = t[o], a = r.properties, l = Ta(n, o, r.type, r.initProperties), c = e[r.optionScope].override(r);
    a.options = wa(c), s.update(l, a);
  }
}
function Ta(i, t, e, s) {
  const n = Qt[un(e)];
  let o = i[t];
  return (!o || !(o instanceof n)) && (o = i[t] = new n(), Object.assign(o, s)), o;
}
function wa(i) {
  const t = Qt[un(i.type)], e = {};
  e.id = i.id, e.type = i.type, e.drawTime = i.drawTime, Object.assign(
    e,
    Fs(i, t.defaults),
    Fs(i, t.defaultRoutes)
  );
  for (const s of Eg)
    e[s] = i[s];
  return e;
}
function Fs(i, t) {
  const e = {};
  for (const s of Object.keys(t)) {
    const n = t[s], o = i[s];
    Bs(s) && it(o) ? e[s] = o.map((r) => tr(r, n)) : e[s] = tr(o, n);
  }
  return e;
}
function Rg(i, t, e, s) {
  return t.$context || (t.$context = Object.assign(Object.create(i.getContext()), {
    element: t,
    get elements() {
      return e.filter((n) => n && n.options);
    },
    id: s.id,
    type: "annotation"
  }));
}
function Dg(i, t) {
  const e = t.length, s = i.length;
  if (s < e) {
    const n = e - s;
    i.splice(s, 0, ...new Array(n));
  } else s > e && i.splice(e, s - e);
  return i;
}
var Lg = "3.1.0";
const Yt = /* @__PURE__ */ new Map(), er = (i) => i.type !== "doughnutLabel", Mg = cn.concat(Wi);
var kg = {
  id: "annotation",
  version: Lg,
  beforeRegister() {
    mf("chart.js", "4.0", de.version);
  },
  afterRegister() {
    de.register(Qt);
  },
  afterUnregister() {
    de.unregister(Qt);
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
    Y(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      Y(a) && (a.id = r, n.push(a));
    }) : it(o) && n.push(...o), Kf(n.filter(er), i.scales);
  },
  afterDataLimits(i, t) {
    const e = Yt.get(i);
    Zf(i, t.scale, e.annotations.filter(er).filter((s) => s.display && s.adjustScaleRange));
  },
  afterUpdate(i, t, e) {
    const s = Yt.get(i);
    jf(i, s, e), Cg(i, s, e, t.mode), s.visibleElements = s.elements.filter((n) => !n.skip && n.options.display), $f(i, s, e);
  },
  beforeDatasetsDraw(i, t, e) {
    je(i, "beforeDatasetsDraw", e.clip);
  },
  afterDatasetsDraw(i, t, e) {
    je(i, "afterDatasetsDraw", e.clip);
  },
  beforeDatasetDraw(i, t, e) {
    je(i, t.index, e.clip);
  },
  beforeDraw(i, t, e) {
    je(i, "beforeDraw", e.clip);
  },
  afterDraw(i, t, e) {
    je(i, "afterDraw", e.clip);
  },
  beforeEvent(i, t, e) {
    const s = Yt.get(i);
    Uf(s, t.event, e) && (t.changed = !0);
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
    _scriptable: (i) => !Mg.includes(i) && i !== "init",
    annotations: {
      _allKeys: !1,
      _fallback: (i, t) => `elements.${Qt[un(t.type)].id}`
    },
    interaction: {
      _fallback: !0
    },
    common: {
      label: {
        _indexable: Bs,
        _fallback: !0
      },
      _indexable: Bs
    }
  },
  additionalOptionScopes: [""]
};
function je(i, t, e) {
  const { ctx: s, chartArea: n } = i, o = Yt.get(i);
  e && ri(s, n);
  const r = Pg(o.visibleElements, t).sort((a, l) => a.element.options.z - l.element.options.z);
  for (const a of r)
    Ng(s, n, o, a);
  e && ai(s);
}
function Pg(i, t) {
  const e = [];
  for (const s of i)
    if (s.options.drawTime === t && e.push({ element: s, main: !0 }), s.elements && s.elements.length)
      for (const n of s.elements)
        n.options.display && n.options.drawTime === t && e.push({ element: n });
  return e;
}
function Ng(i, t, e, s) {
  const n = s.element;
  s.main ? (Wo(e, n, "beforeDraw"), n.draw(i, t), Wo(e, n, "afterDraw")) : n.draw(i, t);
}
class R extends ar {
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
      getFeature: () => this.eClass().getEStructuralFeature(R.SERIES_INDEX),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.SERIES_INDEX,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.LABEL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.LABEL,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.CHART_TYPE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.CHART_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.X_AXIS_ID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.X_AXIS_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.Y_AXIS_ID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.Y_AXIS_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.Y_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.Y_AXIS_TITLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.BORDER_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.BORDER_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.BACKGROUND_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.BORDER_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.BORDER_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.BORDER_DASH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.BORDER_DASH,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.FILL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.FILL,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.SHOW_POINTS),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.SHOW_POINTS,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.POINT_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.POINT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(R.POINT_SIZE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => R.POINT_SIZE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case R.SERIES_INDEX:
        return this.seriesIndex;
      case R.LABEL:
        return this.label;
      case R.CHART_TYPE:
        return this.chartType;
      case R.X_AXIS_ID:
        return this.xAxisId;
      case R.Y_AXIS_ID:
        return this.yAxisId;
      case R.Y_AXIS_TITLE:
        return this.yAxisTitle;
      case R.BORDER_COLOR:
        return this.borderColor;
      case R.BACKGROUND_COLOR:
        return this.backgroundColor;
      case R.BORDER_WIDTH:
        return this.borderWidth;
      case R.BORDER_DASH:
        return this.borderDash;
      case R.FILL:
        return this.fill;
      case R.SHOW_POINTS:
        return this.showPoints;
      case R.POINT_COLOR:
        return this.pointColor;
      case R.POINT_SIZE:
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
      case R.SERIES_INDEX:
        this.seriesIndex = e, super.eSet(t, e);
        break;
      case R.LABEL:
        this.label = e, super.eSet(t, e);
        break;
      case R.CHART_TYPE:
        this.chartType = e, super.eSet(t, e);
        break;
      case R.X_AXIS_ID:
        this.xAxisId = e, super.eSet(t, e);
        break;
      case R.Y_AXIS_ID:
        this.yAxisId = e, super.eSet(t, e);
        break;
      case R.Y_AXIS_TITLE:
        this.yAxisTitle = e, super.eSet(t, e);
        break;
      case R.BORDER_COLOR:
        this.borderColor = e, super.eSet(t, e);
        break;
      case R.BACKGROUND_COLOR:
        this.backgroundColor = e, super.eSet(t, e);
        break;
      case R.BORDER_WIDTH:
        this.borderWidth = e, super.eSet(t, e);
        break;
      case R.BORDER_DASH:
        this.borderDash = e, super.eSet(t, e);
        break;
      case R.FILL:
        this.fill = e, super.eSet(t, e);
        break;
      case R.SHOW_POINTS:
        this.showPoints = e, super.eSet(t, e);
        break;
      case R.POINT_COLOR:
        this.pointColor = e, super.eSet(t, e);
        break;
      case R.POINT_SIZE:
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
      case R.SERIES_INDEX:
        return this._seriesIndex !== new C();
      case R.LABEL:
        return this._label !== void 0;
      case R.CHART_TYPE:
        return this._chartType !== new C();
      case R.X_AXIS_ID:
        return this._xAxisId !== new C();
      case R.Y_AXIS_ID:
        return this._yAxisId !== new C();
      case R.Y_AXIS_TITLE:
        return this._yAxisTitle !== new C();
      case R.BORDER_COLOR:
        return this._borderColor !== void 0;
      case R.BACKGROUND_COLOR:
        return this._backgroundColor !== void 0;
      case R.BORDER_WIDTH:
        return this._borderWidth !== void 0;
      case R.BORDER_DASH:
        return this._borderDash !== void 0;
      case R.FILL:
        return this._fill !== void 0;
      case R.SHOW_POINTS:
        return this._showPoints !== void 0;
      case R.POINT_COLOR:
        return this._pointColor !== void 0;
      case R.POINT_SIZE:
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
      case R.SERIES_INDEX:
        this._seriesIndex = new C();
        return;
      case R.LABEL:
        this._label = void 0;
        return;
      case R.CHART_TYPE:
        this._chartType = new C();
        return;
      case R.X_AXIS_ID:
        this._xAxisId = new C();
        return;
      case R.Y_AXIS_ID:
        this._yAxisId = new C();
        return;
      case R.Y_AXIS_TITLE:
        this._yAxisTitle = new C();
        return;
      case R.BORDER_COLOR:
        this._borderColor = void 0;
        return;
      case R.BACKGROUND_COLOR:
        this._backgroundColor = void 0;
        return;
      case R.BORDER_WIDTH:
        this._borderWidth = void 0;
        return;
      case R.BORDER_DASH:
        this._borderDash = void 0;
        return;
      case R.FILL:
        this._fill = void 0;
        return;
      case R.SHOW_POINTS:
        this._showPoints = void 0;
        return;
      case R.POINT_COLOR:
        this._pointColor = void 0;
        return;
      case R.POINT_SIZE:
        this._pointSize = void 0;
        return;
      default:
        super.eUnset(t);
    }
  }
}
class hn extends Wa {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new hn()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(O.eINSTANCE);
  }
  /**
   * Create a new SeriesSettings instance
   */
  createSeriesSettings() {
    return new R();
  }
  /**
   * Create a new ChartSettings instance
   */
  createChartSettings() {
    return new v();
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
class O extends za {
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
    this.setEFactoryInstance(hn.eINSTANCE);
    const t = new pn();
    t.setName("SeriesSettings"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), O.Literals.SERIES_SETTINGS = t;
    const e = new J();
    e.setContainment(!1), e.setName("seriesIndex"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), O.Literals.SERIES_SETTINGS__SERIES_INDEX = e;
    const s = new J();
    s.setContainment(!1), s.setName("label"), s.setLowerBound(0), s.setUpperBound(1), t.getEStructuralFeatures().push(s), O.Literals.SERIES_SETTINGS__LABEL = s;
    const n = new J();
    n.setContainment(!1), n.setName("chartType"), n.setLowerBound(0), n.setUpperBound(1), t.getEStructuralFeatures().push(n), O.Literals.SERIES_SETTINGS__CHART_TYPE = n;
    const o = new J();
    o.setContainment(!1), o.setName("xAxisId"), o.setLowerBound(0), o.setUpperBound(1), t.getEStructuralFeatures().push(o), O.Literals.SERIES_SETTINGS__X_AXIS_ID = o;
    const r = new J();
    r.setContainment(!1), r.setName("yAxisId"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), O.Literals.SERIES_SETTINGS__Y_AXIS_ID = r;
    const a = new J();
    a.setContainment(!1), a.setName("yAxisTitle"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), O.Literals.SERIES_SETTINGS__Y_AXIS_TITLE = a;
    const l = new J();
    l.setContainment(!1), l.setName("borderColor"), l.setLowerBound(0), l.setUpperBound(1), t.getEStructuralFeatures().push(l), O.Literals.SERIES_SETTINGS__BORDER_COLOR = l;
    const c = new J();
    c.setContainment(!1), c.setName("backgroundColor"), c.setLowerBound(0), c.setUpperBound(1), t.getEStructuralFeatures().push(c), O.Literals.SERIES_SETTINGS__BACKGROUND_COLOR = c;
    const d = new J();
    d.setContainment(!1), d.setName("borderWidth"), d.setLowerBound(0), d.setUpperBound(1), t.getEStructuralFeatures().push(d), O.Literals.SERIES_SETTINGS__BORDER_WIDTH = d;
    const u = new J();
    u.setContainment(!1), u.setName("borderDash"), u.setLowerBound(0), u.setUpperBound(1), t.getEStructuralFeatures().push(u), O.Literals.SERIES_SETTINGS__BORDER_DASH = u;
    const h = new J();
    h.setContainment(!1), h.setName("fill"), h.setLowerBound(0), h.setUpperBound(1), t.getEStructuralFeatures().push(h), O.Literals.SERIES_SETTINGS__FILL = h;
    const f = new J();
    f.setContainment(!1), f.setName("showPoints"), f.setLowerBound(0), f.setUpperBound(1), t.getEStructuralFeatures().push(f), O.Literals.SERIES_SETTINGS__SHOW_POINTS = f;
    const g = new J();
    g.setContainment(!1), g.setName("pointColor"), g.setLowerBound(0), g.setUpperBound(1), t.getEStructuralFeatures().push(g), O.Literals.SERIES_SETTINGS__POINT_COLOR = g;
    const p = new J();
    p.setContainment(!1), p.setName("pointSize"), p.setLowerBound(0), p.setUpperBound(1), t.getEStructuralFeatures().push(p), O.Literals.SERIES_SETTINGS__POINT_SIZE = p;
    const m = new pn();
    m.setName("ChartSettings"), m.setAbstract(!1), m.setInterface(!1), this.getEClassifiers().push(m), m.setEPackage(this), O.Literals.CHART_SETTINGS = m;
    const _ = new J();
    _.setContainment(!0), _.setName("seriesSettings"), _.setLowerBound(0), _.setUpperBound(-1), m.getEStructuralFeatures().push(_), O.Literals.CHART_SETTINGS__SERIES_SETTINGS = _;
    const S = new J();
    S.setContainment(!1), S.setName("chartType"), S.setLowerBound(0), S.setUpperBound(1), m.getEStructuralFeatures().push(S), O.Literals.CHART_SETTINGS__CHART_TYPE = S;
    const w = new J();
    w.setContainment(!1), w.setName("barOrientation"), w.setLowerBound(0), w.setUpperBound(1), m.getEStructuralFeatures().push(w), O.Literals.CHART_SETTINGS__BAR_ORIENTATION = w;
    const A = new J();
    A.setContainment(!1), A.setName("stacked"), A.setLowerBound(0), A.setUpperBound(1), m.getEStructuralFeatures().push(A), O.Literals.CHART_SETTINGS__STACKED = A;
    const T = new J();
    T.setContainment(!1), T.setName("borderColor"), T.setLowerBound(0), T.setUpperBound(1), m.getEStructuralFeatures().push(T), O.Literals.CHART_SETTINGS__BORDER_COLOR = T;
    const N = new J();
    N.setContainment(!1), N.setName("borderWidth"), N.setLowerBound(0), N.setUpperBound(1), m.getEStructuralFeatures().push(N), O.Literals.CHART_SETTINGS__BORDER_WIDTH = N;
    const I = new J();
    I.setContainment(!1), I.setName("borderDash"), I.setLowerBound(0), I.setUpperBound(1), m.getEStructuralFeatures().push(I), O.Literals.CHART_SETTINGS__BORDER_DASH = I;
    const P = new J();
    P.setContainment(!1), P.setName("backgroundColor"), P.setLowerBound(0), P.setUpperBound(1), m.getEStructuralFeatures().push(P), O.Literals.CHART_SETTINGS__BACKGROUND_COLOR = P;
    const B = new J();
    B.setContainment(!1), B.setName("fill"), B.setLowerBound(0), B.setUpperBound(1), m.getEStructuralFeatures().push(B), O.Literals.CHART_SETTINGS__FILL = B;
    const x = new J();
    x.setContainment(!1), x.setName("showPoints"), x.setLowerBound(0), x.setUpperBound(1), m.getEStructuralFeatures().push(x), O.Literals.CHART_SETTINGS__SHOW_POINTS = x;
    const b = new J();
    b.setContainment(!1), b.setName("pointColor"), b.setLowerBound(0), b.setUpperBound(1), m.getEStructuralFeatures().push(b), O.Literals.CHART_SETTINGS__POINT_COLOR = b;
    const D = new J();
    D.setContainment(!1), D.setName("pointSize"), D.setLowerBound(0), D.setUpperBound(1), m.getEStructuralFeatures().push(D), O.Literals.CHART_SETTINGS__POINT_SIZE = D;
    const L = new J();
    L.setContainment(!1), L.setName("showHorizontalGrid"), L.setLowerBound(0), L.setUpperBound(1), m.getEStructuralFeatures().push(L), O.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID = L;
    const $ = new J();
    $.setContainment(!1), $.setName("horizontalGridColor"), $.setLowerBound(0), $.setUpperBound(1), m.getEStructuralFeatures().push($), O.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR = $;
    const V = new J();
    V.setContainment(!1), V.setName("horizontalGridWidth"), V.setLowerBound(0), V.setUpperBound(1), m.getEStructuralFeatures().push(V), O.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH = V;
    const z = new J();
    z.setContainment(!1), z.setName("showVerticalGrid"), z.setLowerBound(0), z.setUpperBound(1), m.getEStructuralFeatures().push(z), O.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID = z;
    const Z = new J();
    Z.setContainment(!1), Z.setName("verticalGridColor"), Z.setLowerBound(0), Z.setUpperBound(1), m.getEStructuralFeatures().push(Z), O.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR = Z;
    const y = new J();
    y.setContainment(!1), y.setName("verticalGridWidth"), y.setLowerBound(0), y.setUpperBound(1), m.getEStructuralFeatures().push(y), O.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH = y;
    const k = new J();
    k.setContainment(!1), k.setName("xAxisTitle"), k.setLowerBound(0), k.setUpperBound(1), m.getEStructuralFeatures().push(k), O.Literals.CHART_SETTINGS__X_AXIS_TITLE = k;
    const E = new J();
    E.setContainment(!1), E.setName("yAxisTitle"), E.setLowerBound(0), E.setUpperBound(1), m.getEStructuralFeatures().push(E), O.Literals.CHART_SETTINGS__Y_AXIS_TITLE = E;
    const tt = new J();
    tt.setContainment(!1), tt.setName("annotationsEditMode"), tt.setLowerBound(0), tt.setUpperBound(1), m.getEStructuralFeatures().push(tt), O.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE = tt;
    const bt = new fi();
    bt.setName("horizontalLines"), bt.setLowerBound(0), bt.setUpperBound(-1), m.getEStructuralFeatures().push(bt), O.Literals.CHART_SETTINGS__HORIZONTAL_LINES = bt;
    const ct = new fi();
    ct.setName("verticalLines"), ct.setLowerBound(0), ct.setUpperBound(-1), m.getEStructuralFeatures().push(ct), O.Literals.CHART_SETTINGS__VERTICAL_LINES = ct;
    const yt = new fi();
    yt.setName("horizontalBoxes"), yt.setLowerBound(0), yt.setUpperBound(-1), m.getEStructuralFeatures().push(yt), O.Literals.CHART_SETTINGS__HORIZONTAL_BOXES = yt;
    const xt = new fi();
    xt.setName("verticalBoxes"), xt.setLowerBound(0), xt.setUpperBound(-1), m.getEStructuralFeatures().push(xt), O.Literals.CHART_SETTINGS__VERTICAL_BOXES = xt;
    const M = new J();
    M.setContainment(!1), M.setName("dateDisplayFormat"), M.setLowerBound(0), M.setUpperBound(1), m.getEStructuralFeatures().push(M), O.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT = M, O.Literals.SERIES_SETTINGS__SERIES_INDEX.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__LABEL.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__CHART_TYPE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__X_AXIS_ID.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__Y_AXIS_ID.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__Y_AXIS_TITLE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__BORDER_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__BACKGROUND_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__BORDER_WIDTH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__BORDER_DASH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__FILL.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__SHOW_POINTS.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__POINT_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.SERIES_SETTINGS__POINT_SIZE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__SERIES_SETTINGS.setEType(O.Literals.SERIES_SETTINGS), O.Literals.CHART_SETTINGS__CHART_TYPE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BAR_ORIENTATION.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__STACKED.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BORDER_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BORDER_WIDTH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BORDER_DASH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__BACKGROUND_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__FILL.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__SHOW_POINTS.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__POINT_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__POINT_SIZE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__X_AXIS_TITLE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__Y_AXIS_TITLE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), O.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class v extends ar {
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
    return O.Literals.CHART_SETTINGS;
  }
  // Getters and Setters
  get seriesSettings() {
    return this._seriesSettings || (this._seriesSettings = Ga(this, this.eClass().getEStructuralFeature("seriesSettings"))), this._seriesSettings;
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
      getFeature: () => this.eClass().getEStructuralFeature(v.CHART_TYPE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.CHART_TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.BAR_ORIENTATION),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.BAR_ORIENTATION,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.STACKED),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.STACKED,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.BORDER_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.BORDER_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.BORDER_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.BORDER_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.BORDER_DASH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.BORDER_DASH,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.BACKGROUND_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.BACKGROUND_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.FILL),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.FILL,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.SHOW_POINTS),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.SHOW_POINTS,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.POINT_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.POINT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.POINT_SIZE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.POINT_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.SHOW_HORIZONTAL_GRID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.SHOW_HORIZONTAL_GRID,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.HORIZONTAL_GRID_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.HORIZONTAL_GRID_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.HORIZONTAL_GRID_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.HORIZONTAL_GRID_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.SHOW_VERTICAL_GRID),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.SHOW_VERTICAL_GRID,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.VERTICAL_GRID_COLOR),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.VERTICAL_GRID_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.VERTICAL_GRID_WIDTH),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.VERTICAL_GRID_WIDTH,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.X_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.X_AXIS_TITLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.Y_AXIS_TITLE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.Y_AXIS_TITLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(v.ANNOTATIONS_EDIT_MODE),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.ANNOTATIONS_EDIT_MODE,
      merge: () => !1
    });
  }
  get horizontalLines() {
    return this._horizontalLines || (this._horizontalLines = gi(this, this.eClass().getEStructuralFeature("horizontalLines"))), this._horizontalLines;
  }
  get verticalLines() {
    return this._verticalLines || (this._verticalLines = gi(this, this.eClass().getEStructuralFeature("verticalLines"))), this._verticalLines;
  }
  get horizontalBoxes() {
    return this._horizontalBoxes || (this._horizontalBoxes = gi(this, this.eClass().getEStructuralFeature("horizontalBoxes"))), this._horizontalBoxes;
  }
  get verticalBoxes() {
    return this._verticalBoxes || (this._verticalBoxes = gi(this, this.eClass().getEStructuralFeature("verticalBoxes"))), this._verticalBoxes;
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
      getFeature: () => this.eClass().getEStructuralFeature(v.DATE_DISPLAY_FORMAT),
      getOldValue: () => e,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => v.DATE_DISPLAY_FORMAT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case v.SERIES_SETTINGS:
        return this.seriesSettings;
      case v.CHART_TYPE:
        return this.chartType;
      case v.BAR_ORIENTATION:
        return this.barOrientation;
      case v.STACKED:
        return this.stacked;
      case v.BORDER_COLOR:
        return this.borderColor;
      case v.BORDER_WIDTH:
        return this.borderWidth;
      case v.BORDER_DASH:
        return this.borderDash;
      case v.BACKGROUND_COLOR:
        return this.backgroundColor;
      case v.FILL:
        return this.fill;
      case v.SHOW_POINTS:
        return this.showPoints;
      case v.POINT_COLOR:
        return this.pointColor;
      case v.POINT_SIZE:
        return this.pointSize;
      case v.SHOW_HORIZONTAL_GRID:
        return this.showHorizontalGrid;
      case v.HORIZONTAL_GRID_COLOR:
        return this.horizontalGridColor;
      case v.HORIZONTAL_GRID_WIDTH:
        return this.horizontalGridWidth;
      case v.SHOW_VERTICAL_GRID:
        return this.showVerticalGrid;
      case v.VERTICAL_GRID_COLOR:
        return this.verticalGridColor;
      case v.VERTICAL_GRID_WIDTH:
        return this.verticalGridWidth;
      case v.X_AXIS_TITLE:
        return this.xAxisTitle;
      case v.Y_AXIS_TITLE:
        return this.yAxisTitle;
      case v.ANNOTATIONS_EDIT_MODE:
        return this.annotationsEditMode;
      case v.HORIZONTAL_LINES:
        return this.horizontalLines;
      case v.VERTICAL_LINES:
        return this.verticalLines;
      case v.HORIZONTAL_BOXES:
        return this.horizontalBoxes;
      case v.VERTICAL_BOXES:
        return this.verticalBoxes;
      case v.DATE_DISPLAY_FORMAT:
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
      case v.SERIES_SETTINGS:
        this.seriesSettings.clear(), this.seriesSettings.addAll(e), super.eSet(t, e);
        break;
      case v.CHART_TYPE:
        this.chartType = e, super.eSet(t, e);
        break;
      case v.BAR_ORIENTATION:
        this.barOrientation = e, super.eSet(t, e);
        break;
      case v.STACKED:
        this.stacked = e, super.eSet(t, e);
        break;
      case v.BORDER_COLOR:
        this.borderColor = e, super.eSet(t, e);
        break;
      case v.BORDER_WIDTH:
        this.borderWidth = e, super.eSet(t, e);
        break;
      case v.BORDER_DASH:
        this.borderDash = e, super.eSet(t, e);
        break;
      case v.BACKGROUND_COLOR:
        this.backgroundColor = e, super.eSet(t, e);
        break;
      case v.FILL:
        this.fill = e, super.eSet(t, e);
        break;
      case v.SHOW_POINTS:
        this.showPoints = e, super.eSet(t, e);
        break;
      case v.POINT_COLOR:
        this.pointColor = e, super.eSet(t, e);
        break;
      case v.POINT_SIZE:
        this.pointSize = e, super.eSet(t, e);
        break;
      case v.SHOW_HORIZONTAL_GRID:
        this.showHorizontalGrid = e, super.eSet(t, e);
        break;
      case v.HORIZONTAL_GRID_COLOR:
        this.horizontalGridColor = e, super.eSet(t, e);
        break;
      case v.HORIZONTAL_GRID_WIDTH:
        this.horizontalGridWidth = e, super.eSet(t, e);
        break;
      case v.SHOW_VERTICAL_GRID:
        this.showVerticalGrid = e, super.eSet(t, e);
        break;
      case v.VERTICAL_GRID_COLOR:
        this.verticalGridColor = e, super.eSet(t, e);
        break;
      case v.VERTICAL_GRID_WIDTH:
        this.verticalGridWidth = e, super.eSet(t, e);
        break;
      case v.X_AXIS_TITLE:
        this.xAxisTitle = e, super.eSet(t, e);
        break;
      case v.Y_AXIS_TITLE:
        this.yAxisTitle = e, super.eSet(t, e);
        break;
      case v.ANNOTATIONS_EDIT_MODE:
        this.annotationsEditMode = e, super.eSet(t, e);
        break;
      case v.HORIZONTAL_LINES:
        this.horizontalLines.clear(), this.horizontalLines.addAll(e), super.eSet(t, e);
        break;
      case v.VERTICAL_LINES:
        this.verticalLines.clear(), this.verticalLines.addAll(e), super.eSet(t, e);
        break;
      case v.HORIZONTAL_BOXES:
        this.horizontalBoxes.clear(), this.horizontalBoxes.addAll(e), super.eSet(t, e);
        break;
      case v.VERTICAL_BOXES:
        this.verticalBoxes.clear(), this.verticalBoxes.addAll(e), super.eSet(t, e);
        break;
      case v.DATE_DISPLAY_FORMAT:
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
      case v.SERIES_SETTINGS:
        return this._seriesSettings !== void 0 && !this._seriesSettings.isEmpty();
      case v.CHART_TYPE:
        return this._chartType !== new C();
      case v.BAR_ORIENTATION:
        return this._barOrientation !== new C();
      case v.STACKED:
        return this._stacked !== new C();
      case v.BORDER_COLOR:
        return this._borderColor !== new C();
      case v.BORDER_WIDTH:
        return this._borderWidth !== new C();
      case v.BORDER_DASH:
        return this._borderDash !== new C();
      case v.BACKGROUND_COLOR:
        return this._backgroundColor !== new C();
      case v.FILL:
        return this._fill !== new C();
      case v.SHOW_POINTS:
        return this._showPoints !== new C();
      case v.POINT_COLOR:
        return this._pointColor !== new C();
      case v.POINT_SIZE:
        return this._pointSize !== new C();
      case v.SHOW_HORIZONTAL_GRID:
        return this._showHorizontalGrid !== new C();
      case v.HORIZONTAL_GRID_COLOR:
        return this._horizontalGridColor !== new C();
      case v.HORIZONTAL_GRID_WIDTH:
        return this._horizontalGridWidth !== new C();
      case v.SHOW_VERTICAL_GRID:
        return this._showVerticalGrid !== new C();
      case v.VERTICAL_GRID_COLOR:
        return this._verticalGridColor !== new C();
      case v.VERTICAL_GRID_WIDTH:
        return this._verticalGridWidth !== new C();
      case v.X_AXIS_TITLE:
        return this._xAxisTitle !== new C();
      case v.Y_AXIS_TITLE:
        return this._yAxisTitle !== new C();
      case v.ANNOTATIONS_EDIT_MODE:
        return this._annotationsEditMode !== new C();
      case v.HORIZONTAL_LINES:
        return this._horizontalLines !== void 0 && !this._horizontalLines.isEmpty();
      case v.VERTICAL_LINES:
        return this._verticalLines !== void 0 && !this._verticalLines.isEmpty();
      case v.HORIZONTAL_BOXES:
        return this._horizontalBoxes !== void 0 && !this._horizontalBoxes.isEmpty();
      case v.VERTICAL_BOXES:
        return this._verticalBoxes !== void 0 && !this._verticalBoxes.isEmpty();
      case v.DATE_DISPLAY_FORMAT:
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
      case v.SERIES_SETTINGS:
        this._seriesSettings && this._seriesSettings.clear();
        return;
      case v.CHART_TYPE:
        this._chartType = new C();
        return;
      case v.BAR_ORIENTATION:
        this._barOrientation = new C();
        return;
      case v.STACKED:
        this._stacked = new C();
        return;
      case v.BORDER_COLOR:
        this._borderColor = new C();
        return;
      case v.BORDER_WIDTH:
        this._borderWidth = new C();
        return;
      case v.BORDER_DASH:
        this._borderDash = new C();
        return;
      case v.BACKGROUND_COLOR:
        this._backgroundColor = new C();
        return;
      case v.FILL:
        this._fill = new C();
        return;
      case v.SHOW_POINTS:
        this._showPoints = new C();
        return;
      case v.POINT_COLOR:
        this._pointColor = new C();
        return;
      case v.POINT_SIZE:
        this._pointSize = new C();
        return;
      case v.SHOW_HORIZONTAL_GRID:
        this._showHorizontalGrid = new C();
        return;
      case v.HORIZONTAL_GRID_COLOR:
        this._horizontalGridColor = new C();
        return;
      case v.HORIZONTAL_GRID_WIDTH:
        this._horizontalGridWidth = new C();
        return;
      case v.SHOW_VERTICAL_GRID:
        this._showVerticalGrid = new C();
        return;
      case v.VERTICAL_GRID_COLOR:
        this._verticalGridColor = new C();
        return;
      case v.VERTICAL_GRID_WIDTH:
        this._verticalGridWidth = new C();
        return;
      case v.X_AXIS_TITLE:
        this._xAxisTitle = new C();
        return;
      case v.Y_AXIS_TITLE:
        this._yAxisTitle = new C();
        return;
      case v.ANNOTATIONS_EDIT_MODE:
        this._annotationsEditMode = new C();
        return;
      case v.HORIZONTAL_LINES:
        this._horizontalLines && this._horizontalLines.clear();
        return;
      case v.VERTICAL_LINES:
        this._verticalLines && this._verticalLines.clear();
        return;
      case v.HORIZONTAL_BOXES:
        this._horizontalBoxes && this._horizontalBoxes.clear();
        return;
      case v.VERTICAL_BOXES:
        this._verticalBoxes && this._verticalBoxes.clear();
        return;
      case v.DATE_DISPLAY_FORMAT:
        this._dateDisplayFormat = new C();
        return;
      default:
        super.eUnset(t);
    }
  }
}
var Vg = Object.defineProperty, Bg = Object.getOwnPropertyDescriptor, ui = (i, t, e, s) => {
  for (var n = Bg(t, e), o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(t, e, n) || n);
  return n && Vg(t, e, n), n;
};
class be extends Ua {
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
ui([
  ni({ eventType: "chart.refresh" })
], be.prototype, "refresh");
ui([
  ni({ eventType: "chart.zoomIn" })
], be.prototype, "zoomIn");
ui([
  ni({ eventType: "chart.zoomOut" })
], be.prototype, "zoomOut");
ui([
  ni({ eventType: "chart.resetZoom" })
], be.prototype, "resetZoom");
ui([
  ni({ eventType: "chart.exportAsImage" })
], be.prototype, "exportAsImage");
const Fg = /* @__PURE__ */ Gi({
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
    const { wrapParameters: e } = Ba();
    de.register(_h, Ah, bh, Uu, Dh, Mh, $i, Fu, Yh, Ou, uh, kg);
    const s = i, { datasourceId: n, id: o } = Pa(s), r = rr(i, "configv"), a = new v(), l = zt(null), c = Ts(ja.TINY_EMITTER), d = Ts(Ca), h = Ha().params.pageid || "", f = zt({ min: null, max: null }), g = zt(null);
    class p extends be {
      refresh() {
        w(n.value, n.value);
      }
      zoomIn() {
        const b = f.value.min ?? 0, D = f.value.max ?? 100, L = D - b, $ = (D + b) / 2;
        f.value = { min: $ - L * 0.4, max: $ + L * 0.4 }, T.value++;
      }
      zoomOut() {
        const b = f.value.min ?? 0, D = f.value.max ?? 100, L = D - b, $ = (D + b) / 2;
        f.value = { min: $ - L * 0.75, max: $ + L * 0.75 }, T.value++;
      }
      resetZoom() {
        f.value = { min: null, max: null }, T.value++;
      }
      exportAsImage(b) {
        if (g.value && g.value.chart) {
          const D = g.value.chart, L = b || "image/png", $ = D.toBase64Image(L), V = document.createElement("a");
          V.href = $, V.download = `chart.${L.split("/")[1] || "png"}`, V.click();
        }
      }
    }
    const m = new p();
    t(m), nr(() => {
      o?.value && d.unregisterInstance(o.value);
    });
    const _ = () => {
      o?.value && c.emit("widget:ChartWidget:click", {
        type: "widget:ChartWidget:click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, S = () => {
      o?.value && c.emit("widget:ChartWidget:right_click", {
        type: "widget:ChartWidget:right_click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    };
    Di(() => {
      if (o?.value && d.registerInstance(o.value, m, "ChartWidget", h), r.value)
        for (const x of Object.keys(a))
          (!(x in r.value) || r.value[x] === void 0) && (r.value[x] = a[x]);
    }), Qe(n, (x, b) => {
      w(x, b);
    });
    const { update: w } = Fa(n, "ChartData", l), A = ot(() => {
      if (N().some(
        (L) => L.chartType?.value && L.chartType.value !== r.value?.chartType?.value
      ))
        return _s;
      const b = r.value?.chartType?.value ?? "bar";
      return {
        bar: _s,
        line: rf,
        radar: cf,
        pie: af,
        doughnut: of,
        polarArea: lf
      }[b] || _s;
    }), T = zt(0);
    Qe(() => r.value, (x) => {
      T.value++;
    }, { deep: !0 });
    function N() {
      const x = r.value?.seriesSettings;
      return x ? typeof x.toArray == "function" ? x.toArray() : Array.isArray(x) ? x : [] : [];
    }
    const I = e({
      chartType: ot(() => r.value?.chartType?.value ?? "bar"),
      borderColor: ot(() => r.value?.borderColor?.value ?? "rgba(75, 192, 192, 1)"),
      backgroundColor: ot(() => r.value?.backgroundColor?.value ?? "rgba(75, 192, 192, 0.2)"),
      borderWidth: ot(() => r.value?.borderWidth?.value ?? 2),
      borderDash: ot(() => r.value?.borderDash?.value ?? []),
      fill: ot(() => r.value?.fill ?? !1),
      showPoints: ot(() => r.value?.showPoints ?? !0),
      pointColor: ot(() => r.value?.pointColor?.value ?? "rgba(75, 192, 192, 1)"),
      pointSize: ot(() => r.value?.pointSize?.value ?? 3),
      barOrientation: ot(() => r.value?.barOrientation?.value ?? "vertical"),
      stacked: ot(() => r.value?.stacked?.value ?? !1),
      showHorizontalGrid: ot(() => r.value?.showHorizontalGrid ?? !0),
      horizontalGridColor: ot(() => r.value?.horizontalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      horizontalGridWidth: ot(() => r.value?.horizontalGridWidth?.value ?? 1),
      showVerticalGrid: ot(() => r.value?.showVerticalGrid ?? !0),
      verticalGridColor: ot(() => r.value?.verticalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      verticalGridWidth: ot(() => r.value?.verticalGridWidth?.value ?? 1),
      dateDisplayFormat: ot(() => r.value?.dateDisplayFormat?.value ?? "dd.MM.yyyy HH:mm"),
      annotationsEditMode: ot(() => r.value?.annotationsEditMode ?? !1)
    });
    console.log(I.backgroundColor.value);
    const P = ot(() => {
      if (!l.value) return null;
      const x = JSON.parse(JSON.stringify(l.value)), b = N(), D = b.length > 0;
      return x.datasets && Array.isArray(x.datasets) && (x.datasets = x.datasets.map((L, $) => {
        const V = b.find(
          (yt) => yt.seriesIndex?.value === $
        ), z = V?.chartType?.value ?? I.chartType?.value ?? "bar", Z = V?.xAxisId?.value, y = V?.yAxisId?.value, k = V?.borderColor?.value ?? L.borderColor ?? r.value?.borderColor?.value, E = V?.backgroundColor?.value ?? L.backgroundColor ?? r.value?.backgroundColor?.value, tt = V?.borderWidth?.value ?? L.borderWidth ?? r.value?.borderWidth?.value, bt = V?.borderDash?.value ?? L.borderDash ?? r.value?.borderDash?.value;
        let ct = {
          ...L,
          borderColor: k,
          backgroundColor: E,
          borderWidth: tt
        };
        if (D && (ct.type = z, Z && (ct.xAxisID = Z), y && (ct.yAxisID = y), V?.label?.value && (ct.label = (V?.label).value)), z === "line") {
          const yt = V?.showPoints?.value ?? r.value?.showPoints?.value ?? !0, xt = V?.fill?.value ?? r.value?.fill?.value ?? !1, M = V?.pointColor?.value ?? L.pointBackgroundColor ?? r.value?.pointColor?.value, at = V?.pointSize?.value ?? r.value?.pointSize?.value ?? 3;
          ct = {
            ...ct,
            borderDash: bt,
            fill: xt ? "origin" : !1,
            // Point settings
            pointRadius: yt ? at : 0,
            pointBackgroundColor: M,
            pointBorderColor: M,
            pointHoverRadius: yt ? at + 2 : 0
          };
        } else z === "bar" ? ct = {
          ...ct,
          borderDash: bt
        } : ct = {
          ...ct
        };
        return ct;
      })), x;
    }), B = ot(() => {
      if (!r.value)
        return {
          responsive: !0
        };
      const x = I.annotationsEditMode.value, b = {};
      r.value.horizontalLines?.forEach((M, at) => {
        b[`hline_${at}`] = {
          type: "line",
          yMin: M.value,
          yMax: M.value,
          borderColor: M.color,
          borderWidth: M.width,
          label: M.label ? {
            display: !0,
            content: M.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: x,
          borderDash: x ? [5, 5] : void 0,
          enter({ element: U }) {
            x && (U.options.borderWidth = M.width + 1);
          },
          leave({ element: U }) {
            x && (U.options.borderWidth = M.width);
          },
          drag({ element: U }) {
            x && r.value.horizontalLines && (r.value.horizontalLines[at].value = U.y);
          }
        };
      }), r.value.verticalLines?.forEach((M, at) => {
        b[`vline_${at}`] = {
          type: "line",
          xMin: M.value,
          xMax: M.value,
          borderColor: M.color,
          borderWidth: M.width,
          label: M.label ? {
            display: !0,
            content: M.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: x,
          borderDash: x ? [5, 5] : void 0,
          enter({ element: U }) {
            x && (U.options.borderWidth = M.width + 1);
          },
          leave({ element: U }) {
            x && (U.options.borderWidth = M.width);
          },
          drag({ element: U }) {
            x && r.value.verticalLines && (r.value.verticalLines[at].value = U.x);
          }
        };
      }), r.value.horizontalBoxes?.forEach((M, at) => {
        b[`hbox_${at}`] = {
          type: "box",
          yMin: M.yMin,
          yMax: M.yMax,
          backgroundColor: M.color,
          borderWidth: x ? 2 : 0,
          borderColor: x ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: x ? [5, 5] : void 0,
          label: M.label ? {
            display: !0,
            content: M.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: x,
          enter({ element: U }) {
            x && (U.options.borderWidth = 3);
          },
          leave({ element: U }) {
            x && (U.options.borderWidth = 2);
          },
          drag({ element: U }) {
            if (x && r.value.horizontalBoxes) {
              const Et = M.yMax - M.yMin;
              r.value.horizontalBoxes[at].yMin = U.y - Et / 2, r.value.horizontalBoxes[at].yMax = U.y + Et / 2;
            }
          }
        };
      }), r.value.verticalBoxes?.forEach((M, at) => {
        b[`vbox_${at}`] = {
          type: "box",
          xMin: M.xMin,
          xMax: M.xMax,
          backgroundColor: M.color,
          borderWidth: x ? 2 : 0,
          borderColor: x ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: x ? [5, 5] : void 0,
          label: M.label ? {
            display: !0,
            content: M.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: x,
          enter({ element: U }) {
            x && (U.options.borderWidth = 3);
          },
          leave({ element: U }) {
            x && (U.options.borderWidth = 2);
          },
          drag({ element: U }) {
            if (x && r.value.verticalBoxes) {
              const Et = M.xMax - M.xMin;
              r.value.verticalBoxes[at].xMin = U.x - Et / 2, r.value.verticalBoxes[at].xMax = U.x + Et / 2;
            }
          }
        };
      });
      const D = (M) => {
        if (typeof M != "string") return !1;
        const at = /^\d{4}-\d{2}-\d{2}(T|\s)/, U = /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}/;
        return at.test(M) || U.test(M);
      }, L = (M, at) => {
        if (!M || !D(M)) return M;
        const U = new Date(M);
        if (isNaN(U.getTime())) return M;
        const Et = (ye) => ye.toString().padStart(2, "0"), hi = {
          yyyy: U.getFullYear().toString(),
          yy: U.getFullYear().toString().slice(-2),
          MM: Et(U.getMonth() + 1),
          M: (U.getMonth() + 1).toString(),
          dd: Et(U.getDate()),
          d: U.getDate().toString(),
          HH: Et(U.getHours()),
          H: U.getHours().toString(),
          mm: Et(U.getMinutes()),
          m: U.getMinutes().toString(),
          ss: Et(U.getSeconds()),
          s: U.getSeconds().toString()
        };
        let ns = at;
        return Object.keys(hi).sort((ye, Ea) => Ea.length - ye.length).forEach((ye) => {
          ns = ns.replace(new RegExp(ye, "g"), hi[ye]);
        }), ns;
      }, $ = I.dateDisplayFormat.value, V = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), Z = r.value?.seriesSettings && r.value.seriesSettings.length > 0, y = {};
      Z && (V.add("x"), z.add("y"), r.value.seriesSettings?.forEach((M) => {
        M?.xAxisId?.value && V.add(M.xAxisId.value), M.yAxisId?.value && (z.add(M.yAxisId.value), M.yAxisTitle?.value && (y[M.yAxisId.value] = M.yAxisTitle.value));
      }));
      const k = I.stacked.value === !0 || I.stacked.value === "true", E = r.value.xAxisTitle?.value ?? "", tt = r.value.yAxisTitle?.value ?? "", bt = {
        y: {
          stacked: k,
          title: {
            display: !!tt,
            text: tt
          },
          grid: {
            display: I.showHorizontalGrid.value,
            color: I.horizontalGridColor.value,
            lineWidth: I.horizontalGridWidth.value
          }
        },
        x: {
          stacked: k,
          title: {
            display: !!E,
            text: E
          },
          grid: {
            display: I.showVerticalGrid.value,
            color: I.verticalGridColor.value,
            lineWidth: I.verticalGridWidth.value
          },
          ticks: {
            callback: function(M, at, U) {
              const Et = this.getLabelForValue(M);
              return L(Et, $);
            }
          }
        }
      };
      V.size > 1 && V.forEach((M) => {
        M !== "x" && (bt[M] = {
          type: "category",
          // Explicitly set the axis type
          grid: {
            display: I.showVerticalGrid.value,
            color: I.verticalGridColor.value,
            lineWidth: I.verticalGridWidth.value
          },
          ticks: {
            callback: function(at, U, Et) {
              const hi = this.getLabelForValue(at);
              return L(hi, $);
            }
          },
          // Position secondary axes at the top
          position: "top"
        });
      }), z.size > 1 && z.forEach((M) => {
        if (M !== "y") {
          const at = y[M] ?? "";
          bt[M] = {
            type: "linear",
            // Explicitly set the axis type
            title: {
              display: !!at,
              text: at
            },
            grid: {
              display: I.showHorizontalGrid.value,
              color: I.horizontalGridColor.value,
              lineWidth: I.horizontalGridWidth.value
            },
            // Position secondary Y-axes on the right
            position: "right"
          };
        }
      });
      const xt = {
        responsive: !0,
        maintainAspectRatio: !0,
        indexAxis: I.barOrientation.value === "horizontal" ? "y" : "x",
        scales: bt,
        plugins: {
          legend: {
            labels: {
              usePointStyle: !0,
              pointStyle: "circle"
            }
          },
          annotation: {
            annotations: b
          }
        }
      };
      return console.log("Chart options:", xt), xt;
    });
    return (x, b) => (F(), _t("div", {
      class: "w-full h-full",
      onClick: _,
      onContextmenu: Na(S, ["prevent"])
    }, [
      P.value && B.value ? (F(), K(Va(A.value), {
        key: T.value,
        id: "my-chart-id",
        ref_key: "chartRef",
        ref: g,
        options: B.value,
        data: P.value
      }, null, 8, ["options", "data"])) : j("", !0)
    ], 32));
  }
}), Hg = { class: "settings-container" }, Wg = { class: "settings-block" }, zg = { style: { display: "flex", "justify-content": "space-between", "align-items": "center", "margin-bottom": "12px" } }, Gg = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "12px" } }, jg = { style: { "font-size": "15px" } }, Ug = { key: 11 }, Xg = {
  key: 0,
  style: { padding: "20px", "text-align": "center", color: "var(--va-text-secondary)" }
}, Yg = { class: "settings-container" }, $g = { class: "settings-block" }, Zg = {
  key: 0,
  class: "settings-block"
}, Kg = {
  key: 1,
  class: "settings-block"
}, qg = {
  key: 2,
  class: "settings-block"
}, Jg = { class: "settings-container" }, Qg = { class: "settings-block" }, tp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, ep = { class: "settings-container" }, ip = { class: "settings-block" }, sp = { class: "settings-container" }, np = { class: "settings-block" }, op = { class: "settings-container" }, rp = { class: "settings-block" }, ap = { class: "settings-block" }, lp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, cp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, dp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, up = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, hp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, fp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, gp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, pp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, mp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, bp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, yp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, _p = /* @__PURE__ */ Gi({
  __name: "ChartWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const t = zt({
      seriesSection: !1,
      styleSection: !0,
      gridSection: !1,
      dateFormatSection: !1,
      axisLabelSection: !1,
      annotationsSection: !1
    }), e = rr(i, "modelValue"), s = zt(e.value?.xAxisTitle?.value ?? ""), n = zt(e.value?.yAxisTitle?.value ?? "");
    Qe(s, (x) => {
      e.value.xAxisTitle ? e.value.xAxisTitle.value = x : e.value.xAxisTitle = new C(x);
    }), Qe(n, (x) => {
      e.value.yAxisTitle ? e.value.yAxisTitle.value = x : e.value.yAxisTitle = new C(x);
    }), Ts("i18n");
    const o = ot(() => e.value?.chartType?.value ?? "bar"), r = ot(() => o.value === "line"), a = ot(() => o.value === "bar"), l = ot(() => ["pie", "doughnut", "polarArea"].includes(o.value)), c = ot(() => {
      const x = /* @__PURE__ */ new Set(["y"]);
      return e.value?.seriesSettings?.forEach((b) => {
        b.yAxisId?.value && x.add(b.yAxisId.value);
      }), Array.from(x);
    });
    function d(x) {
      return e.value?.seriesSettings?.find(
        (D) => D.yAxisId?.value === x
      )?.yAxisTitle?.value ?? "";
    }
    function u(x, b) {
      const D = e.value?.seriesSettings?.find(
        (L) => L.yAxisId?.value === x
      );
      D && (D.yAxisTitle ? D.yAxisTitle.value = b : D.yAxisTitle = new C(b));
    }
    Di(() => {
      console.log("ChartWidgetSettings mounted, config:", e.value), console.log("borderColor:", e.value?.borderColor);
    });
    const h = [
      { label: "Solid", value: [] },
      { label: "Dashed", value: [5, 5] },
      { label: "Dotted", value: [2, 2] },
      { label: "Dash-Dot", value: [10, 5, 2, 5] }
    ], f = zt("[]"), g = (x) => {
      try {
        const b = typeof x == "string" ? x : x?.value || x, D = typeof b == "string" ? JSON.parse(b) : b;
        e.value.borderDash.value = D;
      } catch (b) {
        console.error("Error parsing border dash preset:", b, x);
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
    }, m = (x) => {
      e.value.horizontalLines?.splice(x, 1);
    }, _ = () => {
      e.value.verticalLines || (e.value.verticalLines = []), e.value.verticalLines.push({
        value: 0,
        color: "rgba(0, 0, 255, 0.8)",
        width: 2,
        label: "Line"
      });
    }, S = (x) => {
      e.value.verticalLines?.splice(x, 1);
    }, w = () => {
      e.value.horizontalBoxes || (e.value.horizontalBoxes = []), e.value.horizontalBoxes.push({
        yMin: 0,
        yMax: 10,
        color: "rgba(255, 0, 0, 0.1)",
        label: "Range"
      });
    }, A = (x) => {
      e.value.horizontalBoxes?.splice(x, 1);
    }, T = () => {
      e.value.verticalBoxes || (e.value.verticalBoxes = []), e.value.verticalBoxes.push({
        xMin: 0,
        xMax: 10,
        color: "rgba(0, 0, 255, 0.1)",
        label: "Range"
      });
    }, N = (x) => {
      e.value.verticalBoxes?.splice(x, 1);
    }, I = () => {
      e.value.seriesSettings || (e.value.seriesSettings = []);
      const x = new R();
      x.seriesIndex = new C(e.value.seriesSettings.length), x.chartType = new C("bar"), x.xAxisId = new C("x"), x.yAxisId = new C("y"), x.label = new C(""), x.borderColor = new C(""), x.backgroundColor = new C(""), x.borderWidth = new C(2), x.borderDash = new C([]), x.fill = new C(!1), x.showPoints = new C(!0), x.pointColor = new C(""), x.pointSize = new C(3), e.value.seriesSettings.push(x);
    }, P = (x) => {
      e.value.seriesSettings?.splice(x, 1);
    }, B = (x, b) => {
      try {
        const D = typeof b == "string" ? b : b?.value || b, L = typeof D == "string" ? JSON.parse(D) : D;
        x.borderDash ? x.borderDash.value = L : x.borderDash = new C(L);
      } catch (D) {
        console.error("Error parsing border dash preset:", D, b);
      }
    };
    return Di(() => {
      e.value.seriesSettings || (e.value.seriesSettings = []), e.value.seriesSettings.forEach((x) => {
        x.label || (x.label = new C("")), x.borderColor || (x.borderColor = new C("")), x.backgroundColor || (x.backgroundColor = new C("")), x.borderWidth || (x.borderWidth = new C(2)), x.borderDash || (x.borderDash = new C([])), x.fill || (x.fill = new C(!1)), x.showPoints || (x.showPoints = new C(!0)), x.pointColor || (x.pointColor = new C("")), x.pointSize || (x.pointSize = new C(3));
      });
    }), (x, b) => {
      const D = _e("va-button"), L = _e("va-input"), $ = _e("va-select"), V = _e("va-color-input"), z = _e("va-checkbox"), Z = _e("va-collapse");
      return F(), _t(Xt, null, [
        H(Z, {
          modelValue: t.value.seriesSection,
          "onUpdate:modelValue": b[0] || (b[0] = (y) => t.value.seriesSection = y),
          icon: "format_list_numbered",
          header: "Per-Series Settings"
        }, {
          default: q(() => [
            W("div", Hg, [
              W("div", Wg, [
                b[39] || (b[39] = W("p", { style: { "margin-bottom": "12px", color: "var(--va-text-secondary)" } }, " Configure individual data series. Each series can have its own chart type, axis assignment, colors, and styling. ", -1)),
                W("div", zg, [
                  b[33] || (b[33] = W("h3", null, "Series Configuration", -1)),
                  H(D, {
                    size: "small",
                    onClick: I
                  }, {
                    default: q(() => [...b[32] || (b[32] = [
                      Mt("Add Series", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (F(!0), _t(Xt, null, xe(e.value.seriesSettings, (y, k) => (F(), _t("div", {
                  key: `series_${k}`,
                  style: { border: "1px solid #ddd", padding: "16px", "border-radius": "4px", "margin-bottom": "12px", background: "#fafafa" }
                }, [
                  W("div", Gg, [
                    W("strong", jg, "Series " + Ve(y.seriesIndex?.value ?? k), 1),
                    H(D, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => P(k)
                    }, {
                      default: q(() => [...b[34] || (b[34] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  y.seriesIndex ? (F(), K(dt(ut), {
                    key: 0,
                    label: "Series Index (0-based)",
                    modelValue: y.seriesIndex,
                    "onUpdate:modelValue": (E) => y.seriesIndex = E,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      H(L, {
                        label: "Series Index (0-based)",
                        "model-value": E,
                        onInput: tt,
                        type: "number",
                        min: 0
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  y.label !== void 0 ? (F(), K(dt(ut), {
                    key: 1,
                    label: "Series Label/Title (optional)",
                    modelValue: y.label,
                    "onUpdate:modelValue": (E) => y.label = E,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      H(L, {
                        label: "Series Label/Title (optional)",
                        "model-value": E,
                        onInput: tt,
                        placeholder: "e.g., Temperature, Humidity, Pressure..."
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  y.chartType ? (F(), K($, {
                    key: 2,
                    label: "Chart Type",
                    modelValue: y.chartType.value,
                    "onUpdate:modelValue": (E) => y.chartType.value = E,
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
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  b[36] || (b[36] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Axis Assignment", -1)),
                  y.xAxisId ? (F(), K(dt(ut), {
                    key: 3,
                    label: "X-Axis ID (e.g., 'x', 'x1', 'x2')",
                    modelValue: y.xAxisId,
                    "onUpdate:modelValue": (E) => y.xAxisId = E,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      H(L, {
                        label: "X-Axis ID",
                        "model-value": E,
                        onInput: tt,
                        placeholder: "x"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  y.yAxisId ? (F(), K(dt(ut), {
                    key: 4,
                    label: "Y-Axis ID (e.g., 'y', 'y1', 'y2')",
                    modelValue: y.yAxisId,
                    "onUpdate:modelValue": (E) => y.yAxisId = E,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      H(L, {
                        label: "Y-Axis ID",
                        "model-value": E,
                        onInput: tt,
                        placeholder: "y"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  y.yAxisTitle ? (F(), K(L, {
                    key: 5,
                    label: "Y-Axis Title",
                    modelValue: y.yAxisTitle.value,
                    "onUpdate:modelValue": (E) => y.yAxisTitle.value = E,
                    placeholder: "e.g., Temperatur (°C)",
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  b[37] || (b[37] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Colors", -1)),
                  y.borderColor !== void 0 ? (F(), K(dt(ut), {
                    key: 6,
                    label: "Border Color",
                    modelValue: y.borderColor,
                    "onUpdate:modelValue": (E) => y.borderColor = E,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      H(V, {
                        label: "Border Color",
                        "model-value": E,
                        onInput: tt
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  y.backgroundColor !== void 0 ? (F(), K(dt(ut), {
                    key: 7,
                    label: "Background Color",
                    modelValue: y.backgroundColor,
                    "onUpdate:modelValue": (E) => y.backgroundColor = E,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      H(V, {
                        label: "Background Color",
                        "model-value": E,
                        onInput: tt
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  b[38] || (b[38] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Border Style", -1)),
                  y.borderWidth !== void 0 ? (F(), K(dt(ut), {
                    key: 8,
                    label: "Border Width (px)",
                    modelValue: y.borderWidth,
                    "onUpdate:modelValue": (E) => y.borderWidth = E,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      H(L, {
                        label: "Border Width (px)",
                        "model-value": E,
                        onInput: tt,
                        type: "number",
                        min: 0,
                        max: 20
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  y.borderDash !== void 0 ? (F(), K($, {
                    key: 9,
                    label: "Border Style",
                    "model-value": JSON.stringify(y.borderDash.value || []),
                    options: h.map((E) => ({ value: JSON.stringify(E.value), text: E.label })),
                    "value-by": "value",
                    "onUpdate:modelValue": (E) => B(y, E),
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["model-value", "options", "onUpdate:modelValue"])) : j("", !0),
                  y.fill !== void 0 ? (F(), K(z, {
                    key: 10,
                    label: "Fill Area",
                    modelValue: y.fill.value,
                    "onUpdate:modelValue": (E) => y.fill.value = E,
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                  y.chartType?.value === "line" || y.chartType === "line" ? (F(), _t("div", Ug, [
                    b[35] || (b[35] = W("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Point Style", -1)),
                    y.showPoints !== void 0 ? (F(), K(z, {
                      key: 0,
                      label: "Show Points",
                      modelValue: y.showPoints.value,
                      "onUpdate:modelValue": (E) => y.showPoints.value = E,
                      style: { "margin-bottom": "8px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                    y.pointColor !== void 0 && y.showPoints?.value ? (F(), K(dt(ut), {
                      key: 1,
                      label: "Point Color",
                      modelValue: y.pointColor,
                      "onUpdate:modelValue": (E) => y.pointColor = E,
                      style: { "margin-bottom": "8px" }
                    }, {
                      default: q(({ value: E, change: tt }) => [
                        H(V, {
                          label: "Point Color",
                          "model-value": E,
                          onInput: tt
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0),
                    y.pointSize !== void 0 && y.showPoints?.value ? (F(), K(dt(ut), {
                      key: 2,
                      label: "Point Size (px)",
                      modelValue: y.pointSize,
                      "onUpdate:modelValue": (E) => y.pointSize = E
                    }, {
                      default: q(({ value: E, change: tt }) => [
                        H(L, {
                          label: "Point Size (px)",
                          "model-value": E,
                          onInput: tt,
                          type: "number",
                          min: 0,
                          max: 20
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : j("", !0)
                  ])) : j("", !0)
                ]))), 128)),
                !e.value.seriesSettings || e.value.seriesSettings.length === 0 ? (F(), _t("div", Xg, ' No series-specific settings configured. Click "Add Series" to configure individual data series. ')) : j("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        H(Z, {
          modelValue: t.value.styleSection,
          "onUpdate:modelValue": b[17] || (b[17] = (y) => t.value.styleSection = y),
          icon: "palette",
          header: "Default Chart Styling"
        }, {
          default: q(() => [
            W("div", Yg, [
              W("div", $g, [
                b[40] || (b[40] = W("h3", null, "Chart Type", -1)),
                e.value.chartType ? (F(), K($, {
                  key: 0,
                  label: "Chart Type",
                  modelValue: e.value.chartType.value,
                  "onUpdate:modelValue": b[1] || (b[1] = (y) => e.value.chartType.value = y),
                  options: [
                    { value: "bar", text: "Bar Chart" },
                    { value: "line", text: "Line Chart" },
                    { value: "radar", text: "Radar Chart" },
                    { value: "pie", text: "Pie Chart" },
                    { value: "doughnut", text: "Doughnut Chart" },
                    { value: "polarArea", text: "Polar Area Chart" }
                  ],
                  "value-by": "value"
                }, null, 8, ["modelValue"])) : j("", !0)
              ]),
              r.value ? (F(), _t("div", Zg, [
                b[41] || (b[41] = W("h3", null, "Line Style", -1)),
                e.value.borderColor ? (F(), K(dt(ut), {
                  key: 0,
                  label: "Line Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": b[2] || (b[2] = (y) => e.value.borderColor = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(V, {
                      label: "Line Color",
                      "model-value": y,
                      onInput: k
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0),
                e.value.borderWidth ? (F(), K(dt(ut), {
                  key: 1,
                  label: "Line Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": b[3] || (b[3] = (y) => e.value.borderWidth = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(L, {
                      label: "Line Width (px)",
                      "model-value": y,
                      onInput: k,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0),
                e.value.borderDash ? (F(), K($, {
                  key: 2,
                  label: "Line Style",
                  modelValue: f.value,
                  "onUpdate:modelValue": [
                    b[4] || (b[4] = (y) => f.value = y),
                    g
                  ],
                  options: h.map((y) => ({ value: JSON.stringify(y.value), text: y.label })),
                  "value-by": "value"
                }, null, 8, ["modelValue", "options"])) : j("", !0),
                e.value.fill ? (F(), K(z, {
                  key: 3,
                  label: "Fill Area Under Line",
                  modelValue: e.value.fill,
                  "onUpdate:modelValue": b[5] || (b[5] = (y) => e.value.fill = y)
                }, null, 8, ["modelValue"])) : j("", !0),
                e.value.backgroundColor && e.value.fill ? (F(), K(dt(ut), {
                  key: 4,
                  label: "Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": b[6] || (b[6] = (y) => e.value.backgroundColor = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(V, {
                      label: "Fill Color",
                      "model-value": y,
                      onInput: k
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0),
                b[42] || (b[42] = W("h3", { style: { "margin-top": "16px" } }, "Point Style", -1)),
                e.value.showPoints ? (F(), K(z, {
                  key: 5,
                  label: "Show Points",
                  modelValue: e.value.showPoints.value,
                  "onUpdate:modelValue": b[7] || (b[7] = (y) => e.value.showPoints.value = y)
                }, null, 8, ["modelValue"])) : j("", !0),
                e.value.pointColor && e.value.showPoints ? (F(), K(dt(ut), {
                  key: 6,
                  label: "Point Color",
                  modelValue: e.value.pointColor,
                  "onUpdate:modelValue": b[8] || (b[8] = (y) => e.value.pointColor = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(V, {
                      label: "Point Color",
                      "model-value": y,
                      onInput: k
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0),
                e.value.pointSize && e.value.showPoints ? (F(), K(dt(ut), {
                  key: 7,
                  label: "Point Size (px)",
                  modelValue: e.value.pointSize,
                  "onUpdate:modelValue": b[9] || (b[9] = (y) => e.value.pointSize = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(L, {
                      label: "Point Size (px)",
                      "model-value": y,
                      onInput: k,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0)
              ])) : j("", !0),
              a.value ? (F(), _t("div", Kg, [
                b[43] || (b[43] = W("h3", null, "Bar Layout", -1)),
                e.value.barOrientation ? (F(), K($, {
                  key: 0,
                  label: "Bar Orientation",
                  modelValue: e.value.barOrientation,
                  "onUpdate:modelValue": b[10] || (b[10] = (y) => e.value.barOrientation = y),
                  options: [
                    { value: "vertical", text: "Vertical (Standard)" },
                    { value: "horizontal", text: "Horizontal" }
                  ],
                  "value-by": "value"
                }, null, 8, ["modelValue"])) : j("", !0),
                e.value.stacked ? (F(), K(z, {
                  key: 1,
                  label: "Stacked Bars",
                  modelValue: e.value.stacked.value,
                  "onUpdate:modelValue": b[11] || (b[11] = (y) => e.value.stacked.value = y)
                }, null, 8, ["modelValue"])) : j("", !0),
                b[44] || (b[44] = W("h3", { style: { "margin-top": "16px" } }, "Bar Style", -1)),
                e.value.backgroundColor ? (F(), K(dt(ut), {
                  key: 2,
                  label: "Bar Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": b[12] || (b[12] = (y) => e.value.backgroundColor = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(V, {
                      label: "Bar Fill Color",
                      "model-value": y,
                      onInput: k
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0),
                e.value.borderColor ? (F(), K(dt(ut), {
                  key: 3,
                  label: "Bar Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": b[13] || (b[13] = (y) => e.value.borderColor = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(V, {
                      label: "Bar Border Color",
                      "model-value": y,
                      onInput: k
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0),
                e.value.borderWidth ? (F(), K(dt(ut), {
                  key: 4,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": b[14] || (b[14] = (y) => e.value.borderWidth = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(L, {
                      label: "Border Width (px)",
                      "model-value": y,
                      onInput: k,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0)
              ])) : j("", !0),
              l.value ? (F(), _t("div", qg, [
                b[45] || (b[45] = W("h3", null, "Segment Style", -1)),
                e.value.borderColor ? (F(), K(dt(ut), {
                  key: 0,
                  label: "Segment Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": b[15] || (b[15] = (y) => e.value.borderColor = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(V, {
                      label: "Segment Border Color",
                      "model-value": y,
                      onInput: k
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0),
                e.value.borderWidth ? (F(), K(dt(ut), {
                  key: 1,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": b[16] || (b[16] = (y) => e.value.borderWidth = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(L, {
                      label: "Border Width (px)",
                      "model-value": y,
                      onInput: k,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0)
              ])) : j("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        H(Z, {
          modelValue: t.value.gridSection,
          "onUpdate:modelValue": b[24] || (b[24] = (y) => t.value.gridSection = y),
          icon: "grid_on",
          header: "Grid Lines"
        }, {
          default: q(() => [
            W("div", Jg, [
              W("div", Qg, [
                b[46] || (b[46] = W("h3", null, "Horizontal Grid (Y-Axis)", -1)),
                e.value.showHorizontalGrid ? (F(), K(z, {
                  key: 0,
                  label: "Show Horizontal Grid",
                  modelValue: e.value.showHorizontalGrid.value,
                  "onUpdate:modelValue": b[18] || (b[18] = (y) => e.value.showHorizontalGrid.value = y)
                }, null, 8, ["modelValue"])) : j("", !0),
                e.value.horizontalGridColor ? (F(), K(dt(ut), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.horizontalGridColor,
                  "onUpdate:modelValue": b[19] || (b[19] = (y) => e.value.horizontalGridColor = y),
                  disabled: !e.value.showHorizontalGrid?.value
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(V, {
                      label: "Grid Color",
                      "model-value": y,
                      onInput: k
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "disabled"])) : j("", !0),
                e.value.horizontalGridWidth ? (F(), K(dt(ut), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.horizontalGridWidth,
                  "onUpdate:modelValue": b[20] || (b[20] = (y) => e.value.horizontalGridWidth = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(L, {
                      label: "Grid Width (px)",
                      "model-value": y,
                      onInput: k,
                      type: "number",
                      min: 0,
                      max: 10
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0)
              ]),
              W("div", tp, [
                b[47] || (b[47] = W("h3", null, "Vertical Grid (X-Axis)", -1)),
                e.value.showVerticalGrid ? (F(), K(z, {
                  key: 0,
                  label: "Show Vertical Grid",
                  modelValue: e.value.showVerticalGrid,
                  "onUpdate:modelValue": b[21] || (b[21] = (y) => e.value.showVerticalGrid = y)
                }, null, 8, ["modelValue"])) : j("", !0),
                e.value.verticalGridColor ? (F(), K(dt(ut), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.verticalGridColor,
                  "onUpdate:modelValue": b[22] || (b[22] = (y) => e.value.verticalGridColor = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(V, {
                      label: "Grid Color",
                      "model-value": y,
                      onInput: k
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0),
                e.value.verticalGridWidth ? (F(), K(dt(ut), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.verticalGridWidth,
                  "onUpdate:modelValue": b[23] || (b[23] = (y) => e.value.verticalGridWidth = y)
                }, {
                  default: q(({ value: y, change: k }) => [
                    H(L, {
                      label: "Grid Width (px)",
                      "model-value": y,
                      onInput: k,
                      type: "number",
                      min: 0,
                      max: 10
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : j("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        H(Z, {
          modelValue: t.value.axisLabelSection,
          "onUpdate:modelValue": b[27] || (b[27] = (y) => t.value.axisLabelSection = y),
          icon: "text_fields",
          header: "Axis Titles"
        }, {
          default: q(() => [
            W("div", ep, [
              W("div", ip, [
                H(L, {
                  label: "X-Axis Title",
                  modelValue: s.value,
                  "onUpdate:modelValue": b[25] || (b[25] = (y) => s.value = y),
                  placeholder: "e.g., Zeit, Datum",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                H(L, {
                  label: "Y-Axis Title (y)",
                  modelValue: n.value,
                  "onUpdate:modelValue": b[26] || (b[26] = (y) => n.value = y),
                  placeholder: "e.g., Temperatur (°C)",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                (F(!0), _t(Xt, null, xe(c.value, (y) => (F(), _t(Xt, { key: y }, [
                  y !== "y" ? (F(), K(L, {
                    key: 0,
                    label: `Y-Axis Title (${y})`,
                    "model-value": d(y),
                    "onUpdate:modelValue": (k) => u(y, k),
                    placeholder: "e.g., Niederschlag (mm)",
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"])) : j("", !0)
                ], 64))), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        H(Z, {
          modelValue: t.value.dateFormatSection,
          "onUpdate:modelValue": b[29] || (b[29] = (y) => t.value.dateFormatSection = y),
          icon: "event",
          header: "Date/Time Formatting"
        }, {
          default: q(() => [
            W("div", sp, [
              W("div", np, [
                b[48] || (b[48] = W("h3", null, "X-Axis Date/Time Format", -1)),
                e.value.dateDisplayFormat ? (F(), K($, {
                  key: 0,
                  label: "Date Format",
                  modelValue: e.value.dateDisplayFormat.value,
                  "onUpdate:modelValue": b[28] || (b[28] = (y) => e.value.dateDisplayFormat.value = y),
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
                }, null, 8, ["modelValue"])) : j("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        H(Z, {
          modelValue: t.value.annotationsSection,
          "onUpdate:modelValue": b[31] || (b[31] = (y) => t.value.annotationsSection = y),
          icon: "show_chart",
          header: "Reference Lines & Areas"
        }, {
          default: q(() => [
            W("div", op, [
              W("div", rp, [
                e.value.annotationsEditMode ? (F(), K(z, {
                  key: 0,
                  label: "Enable Drag & Drop (Move annotations in chart)",
                  modelValue: e.value.annotationsEditMode,
                  "onUpdate:modelValue": b[30] || (b[30] = (y) => e.value.annotationsEditMode = y)
                }, null, 8, ["modelValue"])) : j("", !0)
              ]),
              W("div", ap, [
                W("div", lp, [
                  b[50] || (b[50] = W("h3", null, "Horizontal Lines (Y-Axis)", -1)),
                  H(D, {
                    size: "small",
                    onClick: p
                  }, {
                    default: q(() => [...b[49] || (b[49] = [
                      Mt("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (F(!0), _t(Xt, null, xe(e.value.horizontalLines, (y, k) => (F(), _t("div", {
                  key: `hline_${k}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", cp, [
                    W("strong", null, "Line " + Ve(k + 1), 1),
                    H(D, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => m(k)
                    }, {
                      default: q(() => [...b[51] || (b[51] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  H(L, {
                    label: "Y-Value",
                    modelValue: y.value,
                    "onUpdate:modelValue": (E) => y.value = E,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(V, {
                    label: "Color",
                    modelValue: y.color,
                    "onUpdate:modelValue": (E) => y.color = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(L, {
                    label: "Line Width (px)",
                    modelValue: y.width,
                    "onUpdate:modelValue": (E) => y.width = E,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(L, {
                    label: "Label (optional)",
                    modelValue: y.label,
                    "onUpdate:modelValue": (E) => y.label = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              W("div", dp, [
                W("div", up, [
                  b[53] || (b[53] = W("h3", null, "Vertical Lines (X-Axis)", -1)),
                  H(D, {
                    size: "small",
                    onClick: _
                  }, {
                    default: q(() => [...b[52] || (b[52] = [
                      Mt("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (F(!0), _t(Xt, null, xe(e.value.verticalLines, (y, k) => (F(), _t("div", {
                  key: `vline_${k}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", hp, [
                    W("strong", null, "Line " + Ve(k + 1), 1),
                    H(D, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => S(k)
                    }, {
                      default: q(() => [...b[54] || (b[54] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  H(L, {
                    label: "X-Value",
                    modelValue: y.value,
                    "onUpdate:modelValue": (E) => y.value = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(V, {
                    label: "Color",
                    modelValue: y.color,
                    "onUpdate:modelValue": (E) => y.color = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(L, {
                    label: "Line Width (px)",
                    modelValue: y.width,
                    "onUpdate:modelValue": (E) => y.width = E,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(L, {
                    label: "Label (optional)",
                    modelValue: y.label,
                    "onUpdate:modelValue": (E) => y.label = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              W("div", fp, [
                W("div", gp, [
                  b[56] || (b[56] = W("h3", null, "Horizontal Areas (Y-Axis Ranges)", -1)),
                  H(D, {
                    size: "small",
                    onClick: w
                  }, {
                    default: q(() => [...b[55] || (b[55] = [
                      Mt("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (F(!0), _t(Xt, null, xe(e.value.horizontalBoxes, (y, k) => (F(), _t("div", {
                  key: `hbox_${k}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", pp, [
                    W("strong", null, "Area " + Ve(k + 1), 1),
                    H(D, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => A(k)
                    }, {
                      default: q(() => [...b[57] || (b[57] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  H(L, {
                    label: "Y-Min",
                    modelValue: y.yMin,
                    "onUpdate:modelValue": (E) => y.yMin = E,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(L, {
                    label: "Y-Max",
                    modelValue: y.yMax,
                    "onUpdate:modelValue": (E) => y.yMax = E,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(V, {
                    label: "Fill Color",
                    modelValue: y.color,
                    "onUpdate:modelValue": (E) => y.color = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(L, {
                    label: "Label (optional)",
                    modelValue: y.label,
                    "onUpdate:modelValue": (E) => y.label = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              W("div", mp, [
                W("div", bp, [
                  b[59] || (b[59] = W("h3", null, "Vertical Areas (X-Axis Ranges)", -1)),
                  H(D, {
                    size: "small",
                    onClick: T
                  }, {
                    default: q(() => [...b[58] || (b[58] = [
                      Mt("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (F(!0), _t(Xt, null, xe(e.value.verticalBoxes, (y, k) => (F(), _t("div", {
                  key: `vbox_${k}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  W("div", yp, [
                    W("strong", null, "Area " + Ve(k + 1), 1),
                    H(D, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => N(k)
                    }, {
                      default: q(() => [...b[60] || (b[60] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  H(L, {
                    label: "X-Min",
                    modelValue: y.xMin,
                    "onUpdate:modelValue": (E) => y.xMin = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(L, {
                    label: "X-Max",
                    modelValue: y.xMax,
                    "onUpdate:modelValue": (E) => y.xMax = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(V, {
                    label: "Fill Color",
                    modelValue: y.color,
                    "onUpdate:modelValue": (E) => y.color = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  H(L, {
                    label: "Label (optional)",
                    modelValue: y.label,
                    "onUpdate:modelValue": (E) => y.label = E
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
}), xp = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, vp = /* @__PURE__ */ xp(_p, [["__scopeId", "data-v-c5346fb1"]]), Sp = `<?xml version="1.0" encoding="UTF-8"?>
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
          label="Farbe"/>
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
`, Tp = `<?xml version="1.0" encoding="UTF-8"?>
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
          label="Farbe"/>
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
          label="Fläche füllen"/>
      <fields xsi:type="uimodel:InputWidget"
          name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/backgroundColor"
          label="Füllfarbe">
        <visibilityCondition language="JS" body="self.fill?.value === true || self.fill?.value === 'true'"/>
      </fields>
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
`, wp = [
  {
    name: "Chart Clicked",
    type: "click",
    description: "Triggered when the chart is clicked",
    payloadType: mn
  },
  {
    name: "Chart Right Clicked",
    type: "right_click",
    description: "Triggered when the chart is right-clicked",
    payloadType: mn
  }
];
var Ep = Object.defineProperty, Cp = Object.getOwnPropertyDescriptor, fn = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Cp(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && Ep(t, e, n), n;
}, ir = (i, t) => (e, s) => t(e, s, i);
O.eINSTANCE;
const we = "ChartWidget";
let zi = class {
  constructor(i, t) {
    this.events = i, this.actions = t;
  }
  type = we;
  component = Fg;
  settingsComponent = vp;
  supportedDSTypes = [];
  icon = Ya;
  name = "Chart";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Sp,
    uri: "/chart-settings.ui.xmi",
    ePackage: () => O.eINSTANCE,
    create: () => new v(),
    /* Forms for classes that appear inside this one's lists. */
    entryForms: [{ xmi: Tp, uri: "/chart-series.ui.xmi" }],
    /*
     * What the model does not describe: the reference lines and areas, four
     * lists the Ecore does not type - there is no class to build a form
     * from. Named so that what is modelled is not offered twice, in two
     * forms that could disagree.
     */
    unmodelledSections: ["Reference Lines & Areas"]
  };
  register() {
    this.events.registerWidget(we, wp), this.actions.registerWidgetType(we, be, "widget");
  }
  unregister() {
    this.events.unregisterWidget(we), this.actions.unregisterWidgetType(we);
  }
};
fn([
  Oa()
], zi.prototype, "register", 1);
fn([
  Ra()
], zi.prototype, "unregister", 1);
zi = fn([
  Da({
    service: [Xa],
    properties: { "widget.type": we }
  }),
  ir(0, gn(Aa)),
  ir(1, gn(Ia))
], zi);
export {
  v as ChartSettingsImpl,
  Fg as ChartWidget,
  zi as ChartWidgetProvider,
  vp as ChartWidgetSettings,
  O as ChartsettingsPackage,
  Sp as chartSettingsFormXmi,
  Tp as seriesSettingsFormXmi
};
