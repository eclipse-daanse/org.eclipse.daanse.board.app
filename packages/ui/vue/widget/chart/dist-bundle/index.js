(function(){var i="ui.vue.widget.chart",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings-container[data-v-a6e713d8]{padding:16px}.settings-block[data-v-a6e713d8]{display:flex;flex-direction:column;gap:12px}.settings-block h3[data-v-a6e713d8]{margin:0;font-size:14px;font-weight:600;color:var(--color-fg)}.settings-block+.settings-block[data-v-a6e713d8]{margin-top:20px}.block__head[data-v-a6e713d8]{display:flex;align-items:center;justify-content:space-between}.entry[data-v-a6e713d8]{display:flex;flex-direction:column;gap:6px;padding:12px;border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px);margin-bottom:8px}.entry__head[data-v-a6e713d8]{display:flex;align-items:center;justify-content:space-between;color:var(--color-fg)}\n";})();
import { WidgetActionInterfaceImpl as Ma, EVENT_ACTIONS_REGISTRY as ka, PayloadImpl as gn, EVENT_REGISTRY_ID as Pa, EVENT_ACTIONS_REGISTRY_ID as Na } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as or, activate as Fa, deactivate as Wa, inject as pn } from "@eclipse-daanse/tsm";
import { defineComponent as Vi, shallowRef as rr, h as xs, ref as Ve, onMounted as Bs, onUnmounted as ar, watch as Ss, toRaw as Ts, nextTick as Ba, version as za, isProxy as lr, mergeModels as Ha, toRefs as Va, useModel as cr, inject as bn, computed as tt, createElementBlock as Lt, openBlock as Ct, withModifiers as Ga, createBlock as hr, createCommentVNode as dr, resolveDynamicComponent as ja, unref as L, createElementVNode as ot, createVNode as st, toDisplayString as bt, withCtx as jt, createTextVNode as Xt, Fragment as hi, renderList as di } from "vue";
import { VariableWrapper as A, useVariableRepository as Xa, useDatasourceRepository as Ya, useTranslation as Ua } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as $a } from "vue-router";
import { BasicEObject as ur, BasicEFactory as Za, BasicEPackage as Ka, EPackageRegistry as fr, BasicEClass as mn, BasicEReference as j, BasicEAttribute as ui, createContainmentEList as qa, createBasicEList as fi } from "@emfts/core";
import { WidgetAction as ei } from "org.eclipse.daanse.board.app.lib.events";
import { DCheckbox as Qa, DButton as Yt, DInput as At, DColorInput as gi } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as tl } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Ja } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), el = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2049.5C22.5%2047.0147%2024.5147%2045%2027%2045H33C35.4853%2045%2037.5%2047.0147%2037.5%2049.5V93C37.5%2095.4853%2035.4853%2097.5%2033%2097.5H27C24.5147%2097.5%2022.5%2095.4853%2022.5%2093V49.5Z'%20fill='%23606060'/%3e%3cpath%20d='M52.5%2027C52.5%2024.5147%2054.5147%2022.5%2057%2022.5H63C65.4853%2022.5%2067.5%2024.5147%2067.5%2027V93C67.5%2095.4853%2065.4853%2097.5%2063%2097.5H57C54.5147%2097.5%2052.5%2095.4853%2052.5%2093V27Z'%20fill='%23606060'/%3e%3cpath%20d='M82.5%2072C82.5%2069.5147%2084.5147%2067.5%2087%2067.5H93C95.4853%2067.5%2097.5%2069.5147%2097.5%2072V93C97.5%2095.4853%2095.4853%2097.5%2093%2097.5H87C84.5147%2097.5%2082.5%2095.4853%2082.5%2093V72Z'%20fill='%23606060'/%3e%3c/svg%3e";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function ii(i) {
  return i + 0.5 | 0;
}
const $t = (i, t, e) => Math.max(Math.min(i, e), t);
function Ge(i) {
  return $t(ii(i * 2.55), 0, 255);
}
function qt(i) {
  return $t(ii(i * 255), 0, 255);
}
function zt(i) {
  return $t(ii(i / 2.55) / 100, 0, 1);
}
function _n(i) {
  return $t(ii(i * 100), 0, 100);
}
const Rt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, vs = [..."0123456789ABCDEF"], il = (i) => vs[i & 15], sl = (i) => vs[(i & 240) >> 4] + vs[i & 15], pi = (i) => (i & 240) >> 4 === (i & 15), nl = (i) => pi(i.r) && pi(i.g) && pi(i.b) && pi(i.a);
function ol(i) {
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
const rl = (i, t) => i < 255 ? t(i) : "";
function al(i) {
  var t = nl(i) ? il : sl;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + rl(i.a, t) : void 0;
}
const ll = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function gr(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function cl(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function hl(i, t, e) {
  const s = gr(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function dl(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function zs(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = dl(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Hs(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(qt);
}
function Vs(i, t, e) {
  return Hs(gr, i, t, e);
}
function ul(i, t, e) {
  return Hs(hl, i, t, e);
}
function fl(i, t, e) {
  return Hs(cl, i, t, e);
}
function pr(i) {
  return (i % 360 + 360) % 360;
}
function gl(i) {
  const t = ll.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? Ge(+t[5]) : qt(+t[5]));
  const n = pr(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = ul(n, o, r) : t[1] === "hsv" ? s = fl(n, o, r) : s = Vs(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function pl(i, t) {
  var e = zs(i);
  e[0] = pr(e[0] + t), e = Vs(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function bl(i) {
  if (!i)
    return;
  const t = zs(i), e = t[0], s = _n(t[1]), n = _n(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${zt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
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
function ml() {
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
function _l(i) {
  bi || (bi = ml(), bi.transparent = [0, 0, 0, 0]);
  const t = bi[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const yl = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function xl(i) {
  const t = yl.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? Ge(r) : $t(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Ge(s) : $t(s, 0, 255)), n = 255 & (t[4] ? Ge(n) : $t(n, 0, 255)), o = 255 & (t[6] ? Ge(o) : $t(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function Sl(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${zt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const ns = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, ye = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function Tl(i, t, e) {
  const s = ye(zt(i.r)), n = ye(zt(i.g)), o = ye(zt(i.b));
  return {
    r: qt(ns(s + e * (ye(zt(t.r)) - s))),
    g: qt(ns(n + e * (ye(zt(t.g)) - n))),
    b: qt(ns(o + e * (ye(zt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function mi(i, t, e) {
  if (i) {
    let s = zs(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Vs(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function br(i, t) {
  return i && Object.assign(t || {}, i);
}
function Sn(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = qt(i[3]))) : (t = br(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = qt(t.a)), t;
}
function vl(i) {
  return i.charAt(0) === "r" ? xl(i) : gl(i);
}
class qe {
  constructor(t) {
    if (t instanceof qe)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = Sn(t) : e === "string" && (s = ol(t) || _l(t) || vl(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = br(this._rgb);
    return t && (t.a = zt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Sn(t);
  }
  rgbString() {
    return this._valid ? Sl(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? al(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? bl(this._rgb) : void 0;
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
    return t && (this._rgb = Tl(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new qe(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = qt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = ii(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return pl(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function Ft() {
}
const wl = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function Y(i) {
  return i == null;
}
function U(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function V(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function ht(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function It(i, t) {
  return ht(i) ? i : t;
}
function W(i, t) {
  return typeof i > "u" ? t : i;
}
const El = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, mr = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function $(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function Z(i, t, e, s) {
  let n, o, r;
  if (U(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (V(i))
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
  if (U(i))
    return i.map(Li);
  if (V(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Li(i[e[n]]);
    return t;
  }
  return i;
}
function _r(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function Al(i, t, e, s) {
  if (!_r(i))
    return;
  const n = t[i], o = e[i];
  V(n) && V(o) ? Je(n, o, s) : t[i] = Li(o);
}
function Je(i, t, e) {
  const s = U(t) ? t : [
    t
  ], n = s.length;
  if (!V(i))
    return i;
  e = e || {};
  const o = e.merger || Al;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !V(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function Ue(i, t) {
  return Je(i, t, {
    merger: Rl
  });
}
function Rl(i, t, e) {
  if (!_r(i))
    return;
  const s = t[i], n = e[i];
  V(s) && V(n) ? Ue(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Li(n));
}
const Tn = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function Cl(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Ol(i) {
  const t = Cl(i);
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
  return (Tn[t] || (Tn[t] = Ol(t)))(i);
}
function Gs(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Et = (i) => typeof i < "u", wt = (i) => typeof i == "function", vn = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function Dl(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const H = Math.PI, J = 2 * H, Il = J + H, Mi = Number.POSITIVE_INFINITY, js = H / 180, et = H / 2, Ot = H / 4, ki = H * 2 / 3, yr = Math.log10, Pt = Math.sign;
function $e(i, t, e) {
  return Math.abs(i - t) < e;
}
function wn(i) {
  const t = Math.round(i);
  i = $e(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(yr(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Ll(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function Ml(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function de(i) {
  return !Ml(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function kl(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function Pl(i, t, e) {
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
  return o < -0.5 * H && (o += J), {
    angle: o,
    distance: n
  };
}
function we(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Nl(i, t) {
  return (i - t + Il) % J - H;
}
function _t(i) {
  return (i % J + J) % J;
}
function Qe(i, t, e, s) {
  const n = _t(i), o = _t(t), r = _t(e), a = _t(o - n), l = _t(r - n), c = _t(n - o), h = _t(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function yt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Fl(i) {
  return yt(i, -32768, 32767);
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
const ae = (i, t, e, s) => Xs(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Wl = (i, t, e) => Xs(i, e, (s) => i[s][t] >= e);
function Bl(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const xr = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function zl(i, t) {
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
  }), xr.forEach((e) => {
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
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (xr.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function Sr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const Tr = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function vr(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, Tr.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function Hl(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Ys = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", mt = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Vl = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Gl(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, h = r.axis, { min: d, max: u, minDefined: f, maxDefined: g } = r.getUserBounds();
    if (f) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        ae(l, h, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : ae(t, h, r.getPixelForValue(d)).lo
      ), c) {
        const p = l.slice(0, n + 1).reverse().findIndex((b) => !Y(b[a.axis]));
        n -= Math.max(0, p);
      }
      n = yt(n, 0, s - 1);
    }
    if (g) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        ae(l, r.axis, u, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : ae(t, h, r.getPixelForValue(u), !0).hi + 1
      );
      if (c) {
        const b = l.slice(p - 1).findIndex((_) => !Y(_[a.axis]));
        p += Math.max(0, b);
      }
      o = yt(p, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function jl(i) {
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
const _i = (i) => i === 0 || i === 1, Rn = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * J / e)), Cn = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * J / e) + 1, Ze = {
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
  easeInElastic: (i) => _i(i) ? i : Rn(i, 0.075, 0.3),
  easeOutElastic: (i) => _i(i) ? i : Cn(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return _i(i) ? i : i < 0.5 ? 0.5 * Rn(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * Cn(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - Ze.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Ze.easeInBounce(i * 2) * 0.5 : Ze.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function Us(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function On(i) {
  return Us(i) ? i : new qe(i);
}
function os(i) {
  return Us(i) ? i : new qe(i).saturate(0.5).darken(0.1).hexString();
}
const Xl = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Yl = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Ul(i) {
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
      properties: Yl
    },
    numbers: {
      type: "number",
      properties: Xl
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
function $l(i) {
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
function Zl(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = Dn.get(e);
  return s || (s = new Intl.NumberFormat(i, t), Dn.set(e, s)), s;
}
function ji(i, t, e) {
  return Zl(t, e).format(i);
}
const Kl = {
  values(i) {
    return U(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = ql(i, e);
    }
    const r = yr(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), ji(i, s, l);
  }
};
function ql(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var $s = {
  formatters: Kl
};
function Jl(i) {
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
const ue = /* @__PURE__ */ Object.create(null), ws = /* @__PURE__ */ Object.create(null);
function Ke(i, t) {
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
  return typeof t == "string" ? Je(Ke(i, t), e) : Je(Ke(i, ""), t);
}
class Ql {
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
    return Ke(this, t);
  }
  describe(t, e) {
    return rs(ws, t, e);
  }
  override(t, e) {
    return rs(ue, t, e);
  }
  route(t, e, s, n) {
    const o = Ke(this, t), r = Ke(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return V(l) ? Object.assign({}, c, l) : W(l, c);
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
var nt = /* @__PURE__ */ new Ql({
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
  Ul,
  $l,
  Jl
]);
function tc(i) {
  return !i || Y(i.size) || Y(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Ni(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function ec(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, h, d, u;
  for (l = 0; l < a; l++)
    if (d = e[l], d != null && !U(d))
      r = Ni(i, n, o, r, d);
    else if (U(d))
      for (c = 0, h = d.length; c < h; c++)
        u = d[c], u != null && !U(u) && (r = Ni(i, n, o, r, u));
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
function In(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function Es(i, t, e, s) {
  wr(i, t, e, s, null);
}
function wr(i, t, e, s, n) {
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
        n ? i.ellipse(e, s, n / 2, p, 0, 0, J) : i.arc(e, s, p, 0, J), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : p, i.moveTo(e + Math.sin(b) * h, s - Math.cos(b) * p), b += ki, i.lineTo(e + Math.sin(b) * h, s - Math.cos(b) * p), b += ki, i.lineTo(e + Math.sin(b) * h, s - Math.cos(b) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(b + Ot) * l, d = Math.cos(b + Ot) * (n ? n / 2 - c : l), a = Math.sin(b + Ot) * l, u = Math.sin(b + Ot) * (n ? n / 2 - c : l), i.arc(e - d, s - a, c, b - H, b - et), i.arc(e + u, s - r, c, b - et, b), i.arc(e + d, s + a, c, b, b + et), i.arc(e - u, s + r, c, b + et, b + H), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        b += Ot;
      /* falls through */
      case "rectRot":
        d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + u, s - r), i.lineTo(e + d, s + a), i.lineTo(e - u, s + r), i.closePath();
        break;
      case "crossRot":
        b += Ot;
      /* falls through */
      case "cross":
        d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r);
        break;
      case "star":
        d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r), b += Ot, d = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + u, s - r), i.lineTo(e - u, s + r);
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
function Vt(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function si(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function ni(i) {
  i.restore();
}
function ic(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function sc(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function nc(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), Y(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function oc(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function rc(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function fe(i, t, e, s, n, o = {}) {
  const r = U(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, nc(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && rc(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), Y(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), oc(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Ee(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * H, H, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, H, et, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, et, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -et, !0), i.lineTo(e + r.topLeft, s);
}
const ac = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, lc = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function cc(i, t) {
  const e = ("" + i).match(ac);
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
const hc = (i) => +i || 0;
function Zs(i, t) {
  const e = {}, s = V(t), n = s ? Object.keys(t) : t, o = V(i) ? s ? (r) => W(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = hc(o(r));
  return e;
}
function Er(i) {
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
function dt(i) {
  const t = Er(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function rt(i, t) {
  i = i || {}, t = t || nt.font;
  let e = W(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = W(i.style, t.style);
  s && !("" + s).match(lc) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: W(i.family, t.family),
    lineHeight: cc(W(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: W(i.weight, t.weight),
    string: ""
  };
  return n.string = tc(n), n;
}
function yi(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function dc(i, t, e) {
  const { min: s, max: n } = i, o = mr(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
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
      return Rr(a, l, () => yc(l, t, i, a));
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
function Ae(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Ar(i, s),
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
      return Rr(o, r, () => fc(o, r, a));
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
function Ar(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: wt(e) ? e : () => e,
    isIndexable: wt(s) ? s : () => s
  };
}
const uc = (i, t) => i ? i + Gs(t) : t, qs = (i, t) => V(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Rr(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function fc(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return wt(a) && r.isScriptable(t) && (a = gc(t, a, i, e)), U(a) && a.length && (a = pc(t, a, i, r.isIndexable)), qs(t, a) && (a = Ae(a, n, o && o[t], r)), a;
}
function gc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), qs(i, l) && (l = Js(n._scopes, n, i, l)), l;
}
function pc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (V(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = Js(c, n, i, h);
      t.push(Ae(d, o, r && r[i], a));
    }
  }
  return t;
}
function Cr(i, t, e) {
  return wt(i) ? i(t, e) : i;
}
const bc = (i, t) => i === !0 ? t : typeof i == "string" ? te(t, i) : void 0;
function mc(i, t, e, s, n) {
  for (const o of t) {
    const r = bc(e, o);
    if (r) {
      i.add(r);
      const a = Cr(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function Js(i, t, e, s) {
  const n = t._rootScopes, o = Cr(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Ln(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Ln(a, r, o, l, s), l === null) ? !1 : Ks(Array.from(a), [
    ""
  ], n, o, () => _c(t, e, s));
}
function Ln(i, t, e, s, n) {
  for (; e; )
    e = mc(i, t, e, s, n);
  return e;
}
function _c(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return U(n) && V(e) ? e : n || {};
}
function yc(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Or(uc(o, i), e), typeof n < "u")
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
  return t || (t = i._keys = xc(i._scopes)), t;
}
function xc(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function Dr(i, t, e, s) {
  const { iScale: n } = i, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, l, c, h;
  for (a = 0, l = s; a < l; ++a)
    c = a + e, h = t[c], r[a] = {
      r: n.parse(te(h, o), c)
    };
  return r;
}
const Sc = Number.EPSILON || 1e-14, Re = (i, t) => t < i.length && !i[t].skip && i[t], Ir = (i) => i === "x" ? "y" : "x";
function Tc(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = we(o, n), l = we(r, o);
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
function vc(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Re(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = Re(i, h + 1), !(!l || !c)) {
      if ($e(t[h], 0, Sc)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function wc(i, t, e = "x") {
  const s = Ir(e), n = i.length;
  let o, r, a, l = Re(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Re(i, c + 1), !a)
      continue;
    const h = a[e], d = a[s];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
  }
}
function Ec(i, t = "x") {
  const e = Ir(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Re(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Re(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? Pt(n[r - 1]) !== Pt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  vc(i, n, o), wc(i, o, t);
}
function xi(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function Ac(i, t) {
  let e, s, n, o, r, a = Vt(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && Vt(i[e + 1], t), o && (n = i[e], r && (n.cp1x = xi(n.cp1x, t.left, t.right), n.cp1y = xi(n.cp1y, t.top, t.bottom)), a && (n.cp2x = xi(n.cp2x, t.left, t.right), n.cp2y = xi(n.cp2y, t.top, t.bottom)));
}
function Rc(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Ec(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = Tc(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && Ac(i, e);
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
function Cc(i, t) {
  return Xi(i).getPropertyValue(t);
}
const Oc = [
  "top",
  "right",
  "bottom",
  "left"
];
function ce(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = Oc[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Dc = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Ic(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (Dc(n, o, i.target))
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
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Xi(e), o = n.boxSizing === "border-box", r = ce(n, "padding"), a = ce(n, "border", "width"), { x: l, y: c, box: h } = Ic(i, e), d = r.left + (h && a.left), u = r.top + (h && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - d) / f * e.width / s),
    y: Math.round((c - u) / g * e.height / s)
  };
}
function Lc(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && tn(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Xi(o), l = ce(a, "border", "width"), c = ce(a, "padding");
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
const Zt = (i) => Math.round(i * 10) / 10;
function Mc(i, t, e, s) {
  const n = Xi(i), o = ce(n, "margin"), r = Fi(n.maxWidth, i, "clientWidth") || Mi, a = Fi(n.maxHeight, i, "clientHeight") || Mi, l = Lc(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const u = ce(n, "border", "width"), f = ce(n, "padding");
    c -= f.width + u.width, h -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = Zt(Math.min(c, r, l.maxWidth)), h = Zt(Math.min(h, a, l.maxHeight)), c && !h && (h = Zt(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = Zt(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function kn(i, t, e) {
  const s = t || 1, n = Zt(i.height * s), o = Zt(i.width * s);
  i.height = Zt(i.height), i.width = Zt(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const kc = (function() {
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
  const e = Cc(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function re(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Pc(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Nc(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = re(i, n, e), a = re(n, o, e), l = re(o, t, e), c = re(r, a, e), h = re(a, l, e);
  return re(c, h, e);
}
const Fc = function(i, t) {
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
}, Wc = function() {
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
function ve(i, t, e) {
  return i ? Fc(t, e) : Wc();
}
function Lr(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Mr(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function kr(i) {
  return i === "angle" ? {
    between: Qe,
    compare: Nl,
    normalize: _t
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
function Bc(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = kr(s), l = t.length;
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
function Pr(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = kr(s), { start: h, end: d, loop: u, style: f } = Bc(i, t, e), g = [];
  let p = !1, b = null, _, m, T;
  const x = () => l(n, T, _) && a(n, T) !== 0, S = () => a(o, _) === 0 || l(o, T, _), v = () => p || x(), C = () => !p || S();
  for (let O = h, D = h; O <= d; ++O)
    m = t[O % r], !m.skip && (_ = c(m[s]), _ !== T && (p = l(_, n, o), b === null && v() && (b = a(_, n) === 0 ? O : D), b !== null && C() && (g.push(Nn({
      start: b,
      end: O,
      loop: u,
      count: r,
      style: f
    })), b = null), D = O, T = _));
  return b !== null && g.push(Nn({
    start: b,
    end: d,
    loop: u,
    count: r,
    style: f
  })), g;
}
function Nr(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Pr(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function zc(i, t, e, s) {
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
function Hc(i, t, e, s) {
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
function Vc(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = zc(e, n, o, s);
  if (s === !0)
    return Fn(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return Fn(i, Hc(e, r, l, c), e, t);
}
function Fn(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Gc(i, t, e, s);
}
function Gc(i, t, e, s) {
  const n = i._chart.getContext(), o = Wn(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let h = o, d = t[0].start, u = d;
  function f(g, p, b, _) {
    const m = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= m;
      for (; e[p % l].skip; )
        p += m;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: b,
        style: _
      }), h = _, d = p % l);
    }
  }
  for (const g of t) {
    d = a ? d : g.start;
    let p = e[d % l], b;
    for (u = d + 1; u <= g.end; u++) {
      const _ = e[u % l];
      b = Wn(s.setContext(ie(n, {
        type: "segment",
        p0: p,
        p1: _,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: r
      }))), jc(b, h) && f(d, u - 1, g.loop, h), p = _, h = b;
    }
    d < u - 1 && f(d, u - 1, g.loop, h);
  }
  return c;
}
function Wn(i) {
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
function jc(i, t) {
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
function Xc(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: Si(e, t, "left"),
    right: Si(e, t, "right"),
    top: Si(s, t, "top"),
    bottom: Si(s, t, "bottom")
  } : t;
}
function Fr(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const s = Xc(t, i.chartArea);
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
class Yc {
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
    this._request || (this._running = !0, this._request = Tr.call(window, () => {
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
var Wt = /* @__PURE__ */ new Yc();
const Bn = "transparent", Uc = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = On(i || Bn), n = s.valid && On(t || Bn);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class $c {
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
    this._active = !0, this._fn = t.fn || Uc[t.type || typeof r], this._easing = Ze[t.easing] || Ze.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
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
    if (!V(t))
      return;
    const e = Object.keys(nt.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!V(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (U(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = Kc(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && Zc(t.options.$animations, s).then(() => {
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
      o[c] = d = new $c(u, t, c, h), n.push(d);
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
      return Wt.add(this._chart, s), !0;
  }
}
function Zc(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Kc(i, t) {
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
function zn(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function qc(i, t, e) {
  if (e === !1)
    return !1;
  const s = zn(i, e), n = zn(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function Jc(i) {
  let t, e, s, n;
  return V(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Wr(i, t) {
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
  let h = !1;
  for (r = 0, a = n.length; r < a; ++r) {
    if (l = +n[r], l === e) {
      if (h = !0, s.all)
        continue;
      break;
    }
    c = i.values[l], ht(c) && (o || t === 0 || Pt(t) === Pt(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function Qc(i, t) {
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
function th(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function eh(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function ih(i, t, e) {
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
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = th(o, r, s), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const g = t[f], { [l]: p, [c]: b } = g, _ = g._stacks || (g._stacks = {});
    u = _[c] = ih(n, h, p), u[a] = b, u._top = Vn(u, r, !0, s.type), u._bottom = Vn(u, r, !1, s.type);
    const m = u._visualValues || (u._visualValues = {});
    m[a] = b;
  }
}
function ls(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function sh(i, t) {
  return ie(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function nh(i, t, e) {
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
function Pe(i, t) {
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
const cs = (i) => i === "reset" || i === "none", jn = (i, t) => t ? i : Object.assign({}, i), oh = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Wr(e, !0),
  values: null
};
class Oe {
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
    this.index !== t && Pe(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, g) => d === "x" ? u : d === "r" ? g : f, o = e.xAxisID = W(s.xAxisID, ls(t, "x")), r = e.yAxisID = W(s.yAxisID, ls(t, "y")), a = e.rAxisID = W(s.rAxisID, ls(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
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
    this._data && An(this._data, this), t._stacked && Pe(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (V(e)) {
      const n = this._cachedMeta;
      this._data = Qc(e, n);
    } else if (s !== e) {
      if (s) {
        An(s, this);
        const n = this._cachedMeta;
        Pe(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && zl(e, this), this._syncList = [], this._data = e;
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
    e._stacked = as(e.vScale, e), e.stack !== s.stack && (n = !0, Pe(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (Gn(this, e._parsed), e._stacked = as(e.vScale, e));
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
      U(n[t]) ? u = this.parseArrayData(s, n, t, e) : V(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
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
        x: o.parse(te(f, a), u),
        y: r.parse(te(f, l), u)
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
      keys: Wr(n, !0),
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
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = oh(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = eh(a);
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
    this.update(t || "default"), e._clip = Jc(W(this.options.clip, qc(e.xScale, e.yScale, this.getMaxOverflow())));
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
      o = r.$context || (r.$context = nh(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = sh(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Et(s);
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
      s._stacked && Pe(s, n);
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
function rh(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = Sr(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function ah(i) {
  const t = i.iScale, e = rh(t, i.type);
  let s = t._length, n, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (Et(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (n = 0, o = e.length; n < o; ++n)
    r = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    r = t.getPixelForTick(n), l();
  return s;
}
function lh(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return Y(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function ch(i, t, e, s) {
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
function hh(i, t, e, s) {
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
function Br(i, t, e, s) {
  return U(i) ? hh(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function Xn(i, t, e, s) {
  const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
  let c, h, d, u;
  for (c = e, h = e + s; c < h; ++c)
    u = t[c], d = {}, d[n.axis] = a || n.parse(r[c], c), l.push(Br(u, d, o, c));
  return l;
}
function hs(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function dh(i, t, e) {
  return i !== 0 ? Pt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function uh(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function fh(i, t, e, s) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: h } = uh(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[Yn(h, r, a, l)] = !0, n = c)), o[Yn(n, r, a, l)] = !0, i.borderSkipped = o;
}
function Yn(i, t, e, s) {
  return s ? (i = gh(i, t, e), i = Un(i, e, t)) : i = Un(i, t, e), i;
}
function gh(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Un(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function ph(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class bh extends Oe {
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
      p = e[u], g = {}, g[o.axis] = o.parse(te(p, c), u), d.push(Br(te(p, h), g, r, u));
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
      const g = this.getParsed(f), p = o || Y(g[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), b = this._calculateBarIndexPixels(f, h), _ = (g._stacks || {})[a.axis], m = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !_ || hs(g._custom) || r === _._top || r === _._bottom,
        x: c ? p.head : b.center,
        y: c ? b.center : p.head,
        height: c ? b.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : b.size
      };
      u && (m.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const T = m.options || t[f].options;
      fh(m, T, _, r), ph(m, T, h.ratio), this.updateElement(t[f], f, m, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((h) => h.controller.options.grouped), o = s.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[s.axis], c = (h) => {
      const d = h._parsed.find((f) => f[s.axis] === l), u = d && d[h.vScale.axis];
      if (Y(u) || isNaN(u))
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
      t[W(this.chart.options.indexAxis === "x" ? s.xAxisID : s.yAxisID, e)] = !0;
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
      min: a || ah(e),
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
    f !== d && (u = f - d, f = d), h && (d = c.barStart, f = c.barEnd - c.barStart, d !== 0 && Pt(d) !== Pt(c.barEnd) && (u = 0), u += d);
    const b = !Y(o) && !h ? o : u;
    let _ = e.getPixelForValue(b);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(u + f) : g = _, p = g - _, Math.abs(p) < r) {
      p = dh(p, e, a) * r, d === a && (_ -= p / 2);
      const m = e.getPixelForDecimal(0), T = e.getPixelForDecimal(1), x = Math.min(m, T), S = Math.max(m, T);
      _ = Math.max(Math.min(_, S), x), g = _ + p, s && !h && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(_));
    }
    if (_ === e.getPixelForValue(a)) {
      const m = Pt(p) * e.getLineWidthForValue(a) / 2;
      _ += m, p -= m;
    }
    return {
      size: p,
      base: _,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, o = n.skipNull, r = W(n.maxBarThickness, 1 / 0);
    let a, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const h = o ? this._getStackCount(t) : e.stackCount, d = n.barThickness === "flex" ? ch(t, e, n, h * c) : lh(t, e, n, h * c), u = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(W(u, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
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
function mh(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < J) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), u = Math.sin(l), f = (T, x, S) => Qe(T, a, l, !0) ? 1 : Math.max(x, x * e, S, S * e), g = (T, x, S) => Qe(T, a, l, !0) ? -1 : Math.min(x, x * e, S, S * e), p = f(0, c, d), b = f(et, h, u), _ = g(H, c, d), m = g(H + et, h, u);
    s = (p - _) / 2, n = (b - m) / 2, o = -(p + _) / 2, r = -(b + m) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class sn extends Oe {
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
      if (V(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +te(s[c], l);
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
    let t = J, e = -J;
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
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(El(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: g, offsetY: p } = mh(d, h, l), b = (s.width - r) / u, _ = (s.height - r) / f, m = Math.max(Math.min(b, _) / 2, 0), T = mr(this.options.radius, m), x = Math.max(T * l, 0), S = (T - x) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * T, this.offsetY = p * T, n.total = this.calculateTotal(), this.outerRadius = T - S * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - S * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / J);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: b } = this._getSharedOptions(e, n);
    let _ = this._getRotation(), m;
    for (m = 0; m < e; ++m)
      _ += this._circumference(m, o);
    for (m = e; m < e + s; ++m) {
      const T = this._circumference(m, o), x = t[m], S = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: _,
        endAngle: _ + T,
        circumference: T,
        outerRadius: g,
        innerRadius: f
      };
      b && (S.options = p || this.resolveDataElementOptions(m, x.active ? "active" : n)), _ += T, this.updateElement(x, m, S, n);
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
    return e > 0 && !isNaN(t) ? J * (Math.abs(t) / e) : 0;
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
    return Math.max(W(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class _h extends Oe {
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
    let { start: a, count: l } = Gl(e, n, r);
    this._drawStart = a, this._drawCount = l, jl(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), u = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, b = de(g) ? g : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || o || n === "none", m = e + s, T = t.length;
    let x = e > 0 && this.getParsed(e - 1);
    for (let S = 0; S < T; ++S) {
      const v = t[S], C = _ ? v : {};
      if (S < e || S >= m) {
        C.skip = !0;
        continue;
      }
      const O = this.getParsed(S), D = Y(O[f]), F = C[u] = r.getPixelForValue(O[u], S), N = C[f] = o || D ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, O, l) : O[f], S);
      C.skip = isNaN(F) || isNaN(N) || D, C.stop = S > 0 && Math.abs(O[u] - x[u]) > b, p && (C.parsed = O, C.raw = c.data[S]), d && (C.options = h || this.resolveDataElementOptions(S, v.active ? "active" : n)), _ || this.updateElement(v, S, C, n), x = O;
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
class yh extends Oe {
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
    return Dr.bind(this)(t, e, s, n);
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
      let _ = f, m = f + this._computeAngle(g, n, p), T = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = m, o && (l.animateScale && (T = 0), l.animateRotate && (_ = m = u));
      const x = {
        x: h,
        y: d,
        innerRadius: 0,
        outerRadius: T,
        startAngle: _,
        endAngle: m,
        options: this.resolveDataElementOptions(g, b.active ? "active" : n)
      };
      this.updateElement(b, g, x, n);
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
class xh extends sn {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class Sh extends Oe {
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
    return Dr.bind(this)(t, e, s, n);
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
var Th = {
  _date: nn
};
function vh(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Wl : ae;
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
        const { vScale: d } = n._cachedMeta, { _parsed: u } = i, f = u.slice(0, h.lo + 1).reverse().findIndex((p) => !Y(p[d.axis]));
        h.lo -= Math.max(0, f);
        const g = u.slice(h.hi).findIndex((p) => !Y(p[d.axis]));
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
    const { index: c, data: h } = o[a], { lo: d, hi: u } = vh(o[a], t, r, n);
    for (let f = d; f <= u; ++f) {
      const g = h[f];
      g.skip || s(g, c, f);
    }
  }
}
function wh(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function ds(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Yi(i, e, t, function(a, l, c) {
    !n && !Vt(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Eh(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = Pi(r, {
      x: t.x,
      y: t.y
    });
    Qe(d, c, h) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Yi(i, e, t, o), n;
}
function Ah(i, t, e, s, n, o) {
  let r = [];
  const a = wh(e);
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
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Eh(i, t, e, n) : Ah(i, t, e, s, n, o);
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
var Rh = {
  modes: {
    index(i, t, e, s) {
      const n = oe(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? ds(i, n, o, s, r) : us(i, n, o, !1, s, r), l = [];
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
      const n = oe(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
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
      const n = oe(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ds(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = oe(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return us(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = oe(t, i);
      return $n(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = oe(t, i);
      return $n(i, n, "y", e.intersect, s);
    }
  }
};
const zr = [
  "left",
  "top",
  "right",
  "bottom"
];
function Ne(i, t) {
  return i.filter((e) => e.pos === t);
}
function Zn(i, t) {
  return i.filter((e) => zr.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Fe(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Ch(i) {
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
function Oh(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !zr.includes(n))
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
function Dh(i, t) {
  const e = Oh(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function Ih(i) {
  const t = Ch(i), e = Fe(t.filter((c) => c.box.fullSize), !0), s = Fe(Ne(t, "left"), !0), n = Fe(Ne(t, "right")), o = Fe(Ne(t, "top"), !0), r = Fe(Ne(t, "bottom")), a = Zn(t, "x"), l = Zn(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: Ne(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Kn(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Hr(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Lh(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!V(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && Hr(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Kn(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Kn(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Mh(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function kh(i, t) {
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
function je(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, kh(a.horizontal, t));
    const { same: d, other: u } = Lh(t, e, a, s);
    c |= d && n.length, h = h || u, l.fullSize || n.push(a);
  }
  return c && je(n, t, e, s) || h;
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
      Et(c.start) && (r = c.start), l.fullSize ? Ti(l, n.left, r, e.outerWidth - n.right - n.left, u) : Ti(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, u = c.size || l.width;
      Et(c.start) && (o = c.start), l.fullSize ? Ti(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : Ti(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
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
    const n = dt(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = Ih(i.boxes), l = a.vertical, c = a.horizontal;
    Z(i.boxes, (p) => {
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
    Hr(u, dt(s));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), g = Dh(l.concat(c), d);
    je(a.fullSize, f, d, g), je(l, f, d, g), je(c, f, d, g) && je(l, f, d, g), Mh(f), qn(a.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, qn(a.rightAndBottom, f, d, g), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, Z(a.chartArea, (p) => {
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
class Vr {
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
class Ph extends Vr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ci = "$chartjs", Nh = {
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
function Fh(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Ci] = {
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
const Gr = kc ? {
  passive: !0
} : !1;
function Wh(i, t, e) {
  i && i.addEventListener(t, e, Gr);
}
function Bh(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Gr);
}
function zh(i, t) {
  const e = Nh[i.type] || i.type, { x: s, y: n } = oe(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function Wi(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function Hh(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Wi(a.addedNodes, s), r = r && !Wi(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function Vh(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Wi(a.removedNodes, s), r = r && !Wi(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const ti = /* @__PURE__ */ new Map();
let Qn = 0;
function jr() {
  const i = window.devicePixelRatio;
  i !== Qn && (Qn = i, ti.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Gh(i, t) {
  ti.size || window.addEventListener("resize", jr), ti.set(i, t);
}
function jh(i) {
  ti.delete(i), ti.size || window.removeEventListener("resize", jr);
}
function Xh(i, t, e) {
  const s = i.canvas, n = s && tn(s);
  if (!n)
    return;
  const o = vr((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), Gh(i, o), r;
}
function fs(i, t, e) {
  e && e.disconnect(), t === "resize" && jh(i);
}
function Yh(i, t, e) {
  const s = i.canvas, n = vr((o) => {
    i.ctx !== null && e(zh(o, i));
  }, i);
  return Wh(s, t, n), n;
}
class Uh extends Vr {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Fh(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Ci])
      return !1;
    const s = e[Ci].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      Y(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[Ci], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: Hh,
      detach: Vh,
      resize: Xh
    }[e] || Yh;
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
    }[e] || Bh)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Mc(t, e, s, n);
  }
  isAttached(t) {
    const e = t && tn(t);
    return !!(e && e.isConnected);
  }
}
function $h(i) {
  return !Qs() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Ph : Uh;
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
function Zh(i, t) {
  const e = i.options.ticks, s = Kh(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? Jh(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return Qh(t, c, o, r / n), c;
  const h = qh(o, t, n);
  if (r > 0) {
    let d, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (vi(t, c, h, Y(f) ? 0 : a - f, a), d = 0, u = r - 1; d < u; d++)
      vi(t, c, h, o[d], o[d + 1]);
    return vi(t, c, h, l, Y(f) ? t.length : l + f), c;
  }
  return vi(t, c, h), c;
}
function Kh(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function qh(i, t, e) {
  const s = td(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = Ll(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function Jh(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function Qh(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function vi(i, t, e, s, n) {
  const o = W(s, 0), r = Math.min(W(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function td(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const ed = (i) => i === "left" ? "right" : i === "right" ? "left" : i, to = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, eo = (i, t) => Math.min(t || i, i);
function io(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function id(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function sd(i, t) {
  Z(i, (e) => {
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
function so(i, t) {
  if (!i.display)
    return 0;
  const e = rt(i.font, t), s = dt(i.padding);
  return (U(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function nd(i, t) {
  return ie(i, {
    scale: t,
    type: "scale"
  });
}
function od(i, t, e) {
  return ie(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function rd(i, t, e) {
  let s = Ys(i);
  return (e && t !== "right" || !e && t === "right") && (s = ed(s)), s;
}
function ad(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, u, f, g;
  const p = r - n, b = a - o;
  if (i.isHorizontal()) {
    if (f = mt(s, o, a), V(e)) {
      const _ = Object.keys(e)[0], m = e[_];
      g = h[_].getPixelForValue(m) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = to(i, e, t);
    u = a - o;
  } else {
    if (V(e)) {
      const _ = Object.keys(e)[0], m = e[_];
      f = h[_].getPixelForValue(m) - b + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - b + t : f = to(i, e, t);
    g = mt(s, r, n), d = e === "left" ? -et : et;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: u,
    rotation: d
  };
}
class De extends xt {
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
    return t = It(t, Number.POSITIVE_INFINITY), e = It(e, Number.NEGATIVE_INFINITY), s = It(s, Number.POSITIVE_INFINITY), n = It(n, Number.NEGATIVE_INFINITY), {
      min: It(t, s),
      max: It(e, n),
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
      min: It(e, It(s, e)),
      max: It(s, It(e, s))
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
    $(this.options.beforeUpdate, [
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = dc(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? io(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Zh(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    $(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    $(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    $(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), $(this.options[t], [
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
    $(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = $(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    $(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    $(this.options.beforeCalculateLabelRotation, [
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
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = yt(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - We(t.grid) - e.padding - so(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = Gi(Math.min(Math.asin(yt((h.highest.height + 6) / a, -1, 1)), Math.asin(yt(l / c, -1, 1)) - Math.asin(yt(u / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    $(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    $(this.options.beforeFit, [
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
      if (a ? (t.width = this.maxWidth, t.height = We(o) + l) : (t.height = this.maxHeight, t.width = We(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, g = ct(this.labelRotation), p = Math.cos(g), b = Math.sin(g);
        if (a) {
          const _ = s.mirror ? 0 : b * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + _ + f);
        } else {
          const _ = s.mirror ? 0 : p * d.width + b * u.height;
          t.width = Math.min(this.maxWidth, t.width + _ + f);
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
    $(this.options.afterFit, [
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
      Y(t[e].label) && (t.splice(e, 1), s--, e--);
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
    let c = 0, h = 0, d, u, f, g, p, b, _, m, T, x, S;
    for (d = 0; d < e; d += l) {
      if (g = t[d].label, p = this._resolveTickFontOptions(d), n.font = b = p.string, _ = o[b] = o[b] || {
        data: {},
        gc: []
      }, m = p.lineHeight, T = x = 0, !Y(g) && !U(g))
        T = Ni(n, _.data, _.gc, T, g), x = m;
      else if (U(g))
        for (u = 0, f = g.length; u < f; ++u)
          S = g[u], !Y(S) && !U(S) && (T = Ni(n, _.data, _.gc, T, S), x += m);
      r.push(T), a.push(x), c = Math.max(T, c), h = Math.max(x, h);
    }
    sd(o, e);
    const v = r.indexOf(c), C = a.indexOf(h), O = (D) => ({
      width: r[D] || 0,
      height: a[D] || 0
    });
    return {
      first: O(0),
      last: O(e - 1),
      widest: O(v),
      highest: O(C),
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
    return Fl(this._alignToPixels ? se(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = od(this.getContext(), t, s));
    }
    return this.$context || (this.$context = nd(this.chart.getContext(), this));
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
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = We(o), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, b = p / 2, _ = function(B) {
      return se(s, B, p);
    };
    let m, T, x, S, v, C, O, D, F, N, w, k;
    if (r === "top")
      m = _(this.bottom), C = this.bottom - u, D = m - b, N = _(t.top) + b, k = t.bottom;
    else if (r === "bottom")
      m = _(this.top), N = t.top, k = _(t.bottom) - b, C = m + b, D = this.top + u;
    else if (r === "left")
      m = _(this.right), v = this.right - u, O = m - b, F = _(t.left) + b, w = t.right;
    else if (r === "right")
      m = _(this.left), F = t.left, w = _(t.right) - b, v = m + b, O = this.left + u;
    else if (e === "x") {
      if (r === "center")
        m = _((t.top + t.bottom) / 2 + 0.5);
      else if (V(r)) {
        const B = Object.keys(r)[0], P = r[B];
        m = _(this.chart.scales[B].getPixelForValue(P));
      }
      N = t.top, k = t.bottom, C = m + b, D = C + u;
    } else if (e === "y") {
      if (r === "center")
        m = _((t.left + t.right) / 2);
      else if (V(r)) {
        const B = Object.keys(r)[0], P = r[B];
        m = _(this.chart.scales[B].getPixelForValue(P));
      }
      v = m - b, O = v - u, F = t.left, w = t.right;
    }
    const G = W(n.ticks.maxTicksLimit, d), M = Math.max(1, Math.ceil(d / G));
    for (T = 0; T < d; T += M) {
      const B = this.getContext(T), P = o.setContext(B), q = a.setContext(B), K = P.lineWidth, ut = P.color, gt = q.dash || [], ft = q.dashOffset, pt = P.tickWidth, at = P.tickColor, it = P.tickBorderDash || [], lt = P.tickBorderDashOffset;
      x = id(this, T, l), x !== void 0 && (S = se(s, x, K), c ? v = O = F = w = S : C = D = N = k = S, f.push({
        tx1: v,
        ty1: C,
        tx2: O,
        ty2: D,
        x1: F,
        y1: N,
        x2: w,
        y2: k,
        width: K,
        color: ut,
        borderDash: gt,
        borderDashOffset: ft,
        tickWidth: pt,
        tickColor: at,
        tickBorderDash: it,
        tickBorderDashOffset: lt
      }));
    }
    return this._ticksLength = d, this._borderValue = m, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = We(s.grid), f = u + h, g = d ? -h : f, p = -ct(this.labelRotation), b = [];
    let _, m, T, x, S, v, C, O, D, F, N, w, k = "middle";
    if (n === "top")
      v = this.bottom - g, C = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      v = this.top + g, C = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const M = this._getYAxisLabelAlignment(u);
      C = M.textAlign, S = M.x;
    } else if (n === "right") {
      const M = this._getYAxisLabelAlignment(u);
      C = M.textAlign, S = M.x;
    } else if (e === "x") {
      if (n === "center")
        v = (t.top + t.bottom) / 2 + f;
      else if (V(n)) {
        const M = Object.keys(n)[0], B = n[M];
        v = this.chart.scales[M].getPixelForValue(B) + f;
      }
      C = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        S = (t.left + t.right) / 2 - f;
      else if (V(n)) {
        const M = Object.keys(n)[0], B = n[M];
        S = this.chart.scales[M].getPixelForValue(B);
      }
      C = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? k = "top" : l === "end" && (k = "bottom"));
    const G = this._getLabelSizes();
    for (_ = 0, m = a.length; _ < m; ++_) {
      T = a[_], x = T.label;
      const M = o.setContext(this.getContext(_));
      O = this.getPixelForTick(_) + o.labelOffset, D = this._resolveTickFontOptions(_), F = D.lineHeight, N = U(x) ? x.length : 1;
      const B = N / 2, P = M.color, q = M.textStrokeColor, K = M.textStrokeWidth;
      let ut = C;
      r ? (S = O, C === "inner" && (_ === m - 1 ? ut = this.options.reverse ? "left" : "right" : _ === 0 ? ut = this.options.reverse ? "right" : "left" : ut = "center"), n === "top" ? c === "near" || p !== 0 ? w = -N * F + F / 2 : c === "center" ? w = -G.highest.height / 2 - B * F + F : w = -G.highest.height + F / 2 : c === "near" || p !== 0 ? w = F / 2 : c === "center" ? w = G.highest.height / 2 - B * F : w = G.highest.height - N * F, d && (w *= -1), p !== 0 && !M.showLabelBackdrop && (S += F / 2 * Math.sin(p))) : (v = O, w = (1 - N) * F / 2);
      let gt;
      if (M.showLabelBackdrop) {
        const ft = dt(M.backdropPadding), pt = G.heights[_], at = G.widths[_];
        let it = w - ft.top, lt = 0 - ft.left;
        switch (k) {
          case "middle":
            it -= pt / 2;
            break;
          case "bottom":
            it -= pt;
            break;
        }
        switch (C) {
          case "center":
            lt -= at / 2;
            break;
          case "right":
            lt -= at;
            break;
          case "inner":
            _ === m - 1 ? lt -= at : _ > 0 && (lt -= at / 2);
            break;
        }
        gt = {
          left: lt,
          top: it,
          width: at + ft.width,
          height: pt + ft.height,
          color: M.backdropColor
        };
      }
      b.push({
        label: x,
        font: D,
        textOffset: w,
        options: {
          rotation: p,
          color: P,
          strokeColor: q,
          strokeWidth: K,
          textAlign: ut,
          textBaseline: k,
          translation: [
            S,
            v
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
    this.isHorizontal() ? (c = se(t, this.left, r) - r / 2, h = se(t, this.right, a) + a / 2, d = u = l) : (d = se(t, this.top, r) - r / 2, u = se(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, u), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && si(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      fe(s, c, 0, h, l, a);
    }
    n && ni(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = rt(s.font), r = dt(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || V(e) ? (l += r.bottom, U(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = ad(this, l, e, a);
    fe(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: u,
      textAlign: rd(a, e, n),
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
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = W(t.grid && t.grid.z, -1), n = W(t.border && t.border.z, 0);
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
    hd(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, ld(t, r, s), this.override && nt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in nt[n] && (delete nt[n][s], this.override && delete ue[s]);
  }
}
function ld(i, t, e) {
  const s = Je(/* @__PURE__ */ Object.create(null), [
    e ? nt.get(e) : {},
    nt.get(t),
    i.defaults
  ]);
  nt.set(t, s), i.defaultRoutes && cd(t, i.defaultRoutes), i.descriptors && nt.describe(t, i.descriptors);
}
function cd(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    nt.route(o, n, l, a);
  });
}
function hd(i) {
  return "id" in i && "defaults" in i;
}
class dd {
  constructor() {
    this.controllers = new wi(Oe, "datasets", !0), this.elements = new wi(xt, "elements"), this.plugins = new wi(Object, "plugins"), this.scales = new wi(De, "scales"), this._typedRegistries = [
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
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : Z(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Gs(t);
    $(s["before" + n], [], s), e[t](s), $(s["after" + n], [], s);
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
var kt = /* @__PURE__ */ new dd();
class ud {
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
      if ($(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    Y(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = W(s.options && s.options.plugins, {}), o = fd(s);
    return n === !1 && !e ? [] : pd(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function fd(i) {
  const t = {}, e = [], s = Object.keys(kt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(kt.getPlugin(s[o]));
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
function gd(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function pd(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = gd(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: bd(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function bd(i, { plugin: t, local: e }, s, n) {
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
function md(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function _d(i, t) {
  return i === t ? "_index_" : "_value_";
}
function no(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function yd(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Rs(i, ...t) {
  if (no(i))
    return i;
  for (const e of t) {
    const s = e.axis || yd(e.position) || i.length > 1 && no(i[0].toLowerCase());
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
function xd(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return oo(i, "x", e[0]) || oo(i, "y", e[0]);
  }
  return {};
}
function Sd(i, t) {
  const e = ue[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = As(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!V(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Rs(r, a, xd(r, i), nt.scales[a.type]), c = _d(l, n), h = e.scales || {};
    o[r] = Ue(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || As(a, t), h = (ue[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const u = md(d, l), f = r[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Ue(o[f], [
        {
          axis: u
        },
        s[f],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Ue(a, [
      nt.scales[a.type],
      nt.scale
    ]);
  }), o;
}
function Xr(i) {
  const t = i.options || (i.options = {});
  t.plugins = W(t.plugins, {}), t.scales = Sd(i, t);
}
function Yr(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function Td(i) {
  return i = i || {}, i.data = Yr(i.data), Xr(i), i;
}
const ro = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Set();
function Ei(i, t) {
  let e = ro.get(i);
  return e || (e = t(), ro.set(i, e), Ur.add(e)), e;
}
const Be = (i, t, e) => {
  const s = te(t, e);
  s !== void 0 && i.add(s);
};
class vd {
  constructor(t) {
    this._config = Td(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Yr(t);
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
    this.clearCache(), Xr(t);
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
      t && (l.add(t), h.forEach((d) => Be(l, t, d))), h.forEach((d) => Be(l, n, d)), h.forEach((d) => Be(l, ue[o] || {}, d)), h.forEach((d) => Be(l, nt, d)), h.forEach((d) => Be(l, ws, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Ur.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      ue[e] || {},
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
    if (Ed(r, e)) {
      o.$shared = !1, s = wt(s) ? s() : s;
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
    const { resolver: o } = ao(this._resolverCache, t, s);
    return V(e) ? Ae(o, e, void 0, n) : o;
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
const wd = (i) => V(i) && Object.getOwnPropertyNames(i).some((t) => wt(i[t]));
function Ed(i, t) {
  const { isScriptable: e, isIndexable: s } = Ar(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (wt(a) || wd(a)) || r && U(a))
      return !0;
  }
  return !1;
}
var Ad = "4.5.1";
const Rd = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function lo(i, t) {
  return i === "top" || i === "bottom" || Rd.indexOf(i) === -1 && t === "x";
}
function co(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function ho(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), $(e && e.onComplete, [
    i
  ], t);
}
function Cd(i) {
  const t = i.chart, e = t.options.animation;
  $(e && e.onProgress, [
    i
  ], t);
}
function $r(i) {
  return Qs() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Oi = {}, uo = (i) => {
  const t = $r(i);
  return Object.values(Oi).filter((e) => e.canvas === t).pop();
};
function Od(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Dd(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let he = class {
  static defaults = nt;
  static instances = Oi;
  static overrides = ue;
  static registry = kt;
  static version = Ad;
  static getChart = uo;
  static register(...t) {
    kt.add(...t), fo();
  }
  static unregister(...t) {
    kt.remove(...t), fo();
  }
  constructor(t, e) {
    const s = this.config = new vd(e), n = $r(t), o = uo(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || $h(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = wl(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ud(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Hl((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], Oi[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Wt.listen(this, "complete", ho), Wt.listen(this, "progress", Cd), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return Y(t) ? e && o ? o : n ? s / n : null : t;
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
    return kt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : kn(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return In(this.canvas, this.ctx), this;
  }
  stop() {
    return Wt.stop(this), this;
  }
  resize(t, e) {
    Wt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, kn(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), $(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    Z(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = Rs(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), Z(o, (r) => {
      const a = r.options, l = a.id, c = Rs(l, a), h = W(a.type, r.dtype);
      (a.position === void 0 || lo(a.position, c) !== lo(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const u = kt.getScale(h);
        d = new u({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(a, t);
    }), Z(n, (r, a) => {
      r || delete s[a];
    }), Z(s, (r) => {
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
        const l = kt.getController(a), { datasetElementType: c, dataElementType: h } = nt.datasets[a];
        Object.assign(l, {
          dataElementType: kt.getElement(h),
          datasetElementType: c && kt.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    Z(this.data.datasets, (t, e) => {
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
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || Z(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(co("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    Z(this.scales, (t) => {
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
      Od(t, n, r);
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
    this._layers = [], Z(this.boxes, (n) => {
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
        this._updateDataset(e, wt(t) ? t({
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
    }) !== !1 && (Wt.has(this) ? this.attached && !Wt.running(this) && Wt.start(this) : (this.draw(), ho({
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
    }, n = Fr(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && si(e, n), t.controller.draw(), n && ni(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return Vt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Rh.modes[e];
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
    Et(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    for (this.stop(), Wt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), In(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Oi[this.id], this.notifyPlugins("afterDestroy");
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
    Z(this.options.events, (o) => s(o, n));
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
    Z(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, Z(this._responsiveListeners, (t, e) => {
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
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = Dl(t), c = Dd(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, $(o.onHover, [
      t,
      a,
      this
    ], this), l && $(o.onClick, [
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
  return Z(he.instances, (i) => i._plugins.invalidate());
}
function Id(i, t, e) {
  const { startAngle: s, x: n, y: o, outerRadius: r, innerRadius: a, options: l } = t, { borderWidth: c, borderJoinStyle: h } = l, d = Math.min(c / r, _t(s - e));
  if (i.beginPath(), i.arc(n, o, r - c / 2, s + d / 2, e - d / 2), a > 0) {
    const u = Math.min(c / a, _t(s - e));
    i.arc(n, o, a + c / 2, e - u / 2, s + u / 2, !0);
  } else {
    const u = Math.min(c / 2, r * _t(s - e));
    if (h === "round")
      i.arc(n, o, u, e - H / 2, s + H / 2, !0);
    else if (h === "bevel") {
      const f = 2 * u * u, g = -f * Math.cos(e + H / 2) + n, p = -f * Math.sin(e + H / 2) + o, b = f * Math.cos(s + H / 2) + n, _ = f * Math.sin(s + H / 2) + o;
      i.lineTo(g, p), i.lineTo(b, _);
    }
  }
  i.closePath(), i.moveTo(0, 0), i.rect(0, 0, i.canvas.width, i.canvas.height), i.clip("evenodd");
}
function Ld(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + et, s - et), i.closePath(), i.clip();
}
function Md(i) {
  return Zs(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function kd(i, t, e, s) {
  const n = Md(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return yt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: yt(n.innerStart, 0, r),
    innerEnd: yt(n.innerEnd, 0, r)
  };
}
function xe(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function Bi(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), u = h > 0 ? h + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const M = h > 0 ? h - s : 0, B = d > 0 ? d - s : 0, P = (M + B) / 2, q = P !== 0 ? g * P / (P + s) : g;
    f = (g - q) / 2;
  }
  const p = Math.max(1e-3, g * d - e / H) / d, b = (g - p) / 2, _ = l + b + f, m = n - b - f, { outerStart: T, outerEnd: x, innerStart: S, innerEnd: v } = kd(t, u, d, m - _), C = d - T, O = d - x, D = _ + T / C, F = m - x / O, N = u + S, w = u + v, k = _ + S / N, G = m - v / w;
  if (i.beginPath(), o) {
    const M = (D + F) / 2;
    if (i.arc(r, a, d, D, M), i.arc(r, a, d, M, F), x > 0) {
      const K = xe(O, F, r, a);
      i.arc(K.x, K.y, x, F, m + et);
    }
    const B = xe(w, m, r, a);
    if (i.lineTo(B.x, B.y), v > 0) {
      const K = xe(w, G, r, a);
      i.arc(K.x, K.y, v, m + et, G + Math.PI);
    }
    const P = (m - v / u + (_ + S / u)) / 2;
    if (i.arc(r, a, u, m - v / u, P, !0), i.arc(r, a, u, P, _ + S / u, !0), S > 0) {
      const K = xe(N, k, r, a);
      i.arc(K.x, K.y, S, k + Math.PI, _ - et);
    }
    const q = xe(C, _, r, a);
    if (i.lineTo(q.x, q.y), T > 0) {
      const K = xe(C, D, r, a);
      i.arc(K.x, K.y, T, _ - et, D);
    }
  } else {
    i.moveTo(r, a);
    const M = Math.cos(D) * d + r, B = Math.sin(D) * d + a;
    i.lineTo(M, B);
    const P = Math.cos(F) * d + r, q = Math.sin(F) * d + a;
    i.lineTo(P, q);
  }
  i.closePath();
}
function Pd(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Bi(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % J || J));
  }
  return Bi(i, t, e, s, l, n), i.fill(), l;
}
function Nd(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h, borderDash: d, borderDashOffset: u, borderRadius: f } = l, g = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(d || []), i.lineDashOffset = u, g ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let p = t.endAngle;
  if (o) {
    Bi(i, t, e, s, p, n);
    for (let b = 0; b < o; ++b)
      i.stroke();
    isNaN(a) || (p = r + (a % J || J));
  }
  g && Ld(i, t, p), l.selfJoin && p - r >= H && f === 0 && h !== "miter" && Id(i, t, p), o || (Bi(i, t, e, s, p, n), i.stroke());
}
class Fd extends xt {
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
    ], s), u = (this.options.spacing + this.options.borderWidth) / 2, f = W(d, l - a), g = Qe(o, a, l) && a !== l, p = f >= J || g, b = Ht(r, c + u, h + u);
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
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > J ? Math.floor(s / J) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * n, Math.sin(a) * n);
    const l = 1 - Math.sin(Math.min(H, s || 0)), c = n * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Pd(t, this, c, o, r), Nd(t, this, c, o, r), t.restore();
  }
}
function Zr(i, t, e = t) {
  i.lineCap = W(e.borderCapStyle, t.borderCapStyle), i.setLineDash(W(e.borderDash, t.borderDash)), i.lineDashOffset = W(e.borderDashOffset, t.borderDashOffset), i.lineJoin = W(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = W(e.borderWidth, t.borderWidth), i.strokeStyle = W(e.borderColor, t.borderColor);
}
function Wd(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Bd(i) {
  return i.stepped ? ic : i.tension || i.cubicInterpolationMode === "monotone" ? sc : Wd;
}
function Kr(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function zd(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Kr(n, e, s), h = Bd(o);
  let { move: d = !0, reverse: u } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(a + (u ? c - f : f)) % r], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, u, o.stepped), p = g);
  return l && (g = n[(a + (u ? c : 0)) % r], h(i, p, g, u, o.stepped)), !!l;
}
function Hd(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = Kr(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, d = 0, u, f, g, p, b, _;
  const m = (x) => (r + (c ? a - x : x)) % o, T = () => {
    p !== b && (i.lineTo(h, b), i.lineTo(h, p), i.lineTo(h, _));
  };
  for (l && (f = n[m(0)], i.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = n[m(u)], f.skip)
      continue;
    const x = f.x, S = f.y, v = x | 0;
    v === g ? (S < p ? p = S : S > b && (b = S), h = (d * h + x) / ++d) : (T(), i.lineTo(x, S), g = v, d = 0, p = b = S), _ = S;
  }
  T();
}
function Cs(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Hd : zd;
}
function Vd(i) {
  return i.stepped ? Pc : i.tension || i.cubicInterpolationMode === "monotone" ? Nc : re;
}
function Gd(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), Zr(i, t.options), i.stroke(n);
}
function jd(i, t, e, s) {
  const { segments: n, options: o } = t, r = Cs(t);
  for (const a of n)
    Zr(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Xd = typeof Path2D == "function";
function Yd(i, t, e, s) {
  Xd && !t.options.segment ? Gd(i, t, e, s) : jd(i, t, e, s);
}
class Ui extends xt {
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
      Rc(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Vc(this, this.options.segment));
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
    const s = this.options, n = t[e], o = this.points, r = Nr(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = Vd(s);
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
    return Cs(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = Cs(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), Yd(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function go(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class Ud extends xt {
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
    this.skip || s.radius < 0.1 || !Vt(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Es(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function qr(i, t) {
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
function Kt(i, t, e, s) {
  return i ? 0 : yt(t, e, s);
}
function $d(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = Er(s);
  return {
    t: Kt(n.top, o.top, 0, e),
    r: Kt(n.right, o.right, 0, t),
    b: Kt(n.bottom, o.bottom, 0, e),
    l: Kt(n.left, o.left, 0, t)
  };
}
function Zd(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = Jt(n), r = Math.min(t, e), a = i.borderSkipped, l = s || V(n);
  return {
    topLeft: Kt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Kt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Kt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Kt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Kd(i) {
  const t = qr(i), e = t.right - t.left, s = t.bottom - t.top, n = $d(i, e / 2, s / 2), o = Zd(i, e / 2, s / 2);
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
  const n = t === null, o = e === null, a = i && !(n && o) && qr(i, s);
  return a && (n || Ht(t, a.left, a.right)) && (o || Ht(e, a.top, a.bottom));
}
function qd(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Jd(i, t) {
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
class Qd extends xt {
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
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = Kd(this), a = qd(r.radius) ? Ee : Jd;
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
function tu(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = $i(l, c, n);
    const h = Os(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: h,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const d = Nr(t, h);
    for (const u of d) {
      const f = Os(e, o[u.start], o[u.end], u.loop), g = Pr(a, n, f);
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
function Os(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = _t(n), o = _t(o)), {
    property: i,
    start: n,
    end: o
  };
}
function eu(i, t) {
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
function Jr(i, t) {
  let e = [], s = !1;
  return U(i) ? (s = !0, e = i) : e = eu(i, t), e.length ? new Ui({
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
function iu(i, t, e) {
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
function su(i, t, e) {
  const s = au(i);
  if (V(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return ht(n) && Math.floor(n) === n ? nu(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function nu(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function ou(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : V(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function ru(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : V(i) ? s = i.value : s = t.getBaseValue(), s;
}
function au(i) {
  const t = i.options, e = t.fill;
  let s = W(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function lu(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = cu(t, e);
  a.push(Jr({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      hu(n, r[h], a);
  }
  return new Ui({
    points: n,
    options: {}
  });
}
function cu(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function hu(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = du(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function du(i, t, e) {
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
class Qr {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: J
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
function uu(i) {
  const { chart: t, fill: e, line: s } = i;
  if (ht(e))
    return fu(t, e);
  if (e === "stack")
    return lu(i);
  if (e === "shape")
    return !0;
  const n = gu(i);
  return n instanceof Qr ? n : Jr(n, s);
}
function fu(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function gu(i) {
  return (i.scale || {}).getPointPositionForValue ? bu(i) : pu(i);
}
function pu(i) {
  const { scale: t = {}, fill: e } = i, s = ou(e, t);
  if (ht(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function bu(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = ru(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Qr({
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
  const s = uu(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, h = c.fill, d = c.backgroundColor, { above: u = d, below: f = d } = h || {}, g = n.getDatasetMeta(o), p = Fr(n, g);
  s && r.points.length && (si(i, e), mu(i, {
    line: r,
    target: s,
    above: u,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: p
  }), ni(i));
}
function mu(i, t) {
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
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = tu(e, s, n);
  for (const { source: c, target: h, start: d, end: u } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, g = s !== !0;
    i.save(), i.fillStyle = f, _u(i, r, a, g && Os(n, d, u)), i.beginPath();
    const p = !!e.pathSegment(i, c);
    let b;
    if (g) {
      p ? i.closePath() : yo(i, s, u, n);
      const _ = !!s.pathSegment(i, h, {
        move: p,
        reverse: !0
      });
      b = p && _, b || yo(i, s, d, n);
    }
    i.closePath(), i.fill(b ? "evenodd" : "nonzero"), i.restore();
  }
}
function _u(i, t, e, s) {
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
var yu = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Ui && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: su(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = iu(n, r, e.propagate));
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
}, xu = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class So extends xt {
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
    let e = $(t.generateLabels, [
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
    return this.legendItems.forEach((b, _) => {
      const { itemWidth: m, itemHeight: T } = Su(s, e, o, b, n);
      _ > 0 && f + T + 2 * a > h && (d += u + a, c.push({
        width: u,
        height: f
      }), g += u + a, p++, u = f = 0), l[_] = {
        left: g,
        top: f,
        col: p,
        width: m,
        height: T
      }, u = Math.max(u, m), f += T + a;
    }), d += u, c.push({
      width: u,
      height: f
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = ve(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = mt(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = mt(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = mt(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = mt(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      si(t, this), this._draw(), ni(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = nt.color, l = ve(t.rtl, this.left, this.width), c = rt(r.font), { padding: h } = r, d = c.size, u = d / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: b } = xo(r, d), _ = function(v, C, O) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const D = W(O.lineWidth, 1);
      if (n.fillStyle = W(O.fillStyle, a), n.lineCap = W(O.lineCap, "butt"), n.lineDashOffset = W(O.lineDashOffset, 0), n.lineJoin = W(O.lineJoin, "miter"), n.lineWidth = D, n.strokeStyle = W(O.strokeStyle, a), n.setLineDash(W(O.lineDash, [])), r.usePointStyle) {
        const F = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: O.pointStyle,
          rotation: O.rotation,
          borderWidth: D
        }, N = l.xPlus(v, g / 2), w = C + u;
        wr(n, F, N, w, r.pointStyleWidth && g);
      } else {
        const F = C + Math.max((d - p) / 2, 0), N = l.leftForLtr(v, g), w = Jt(O.borderRadius);
        n.beginPath(), Object.values(w).some((k) => k !== 0) ? Ee(n, {
          x: N,
          y: F,
          w: g,
          h: p,
          radius: w
        }) : n.rect(N, F, g, p), n.fill(), D !== 0 && n.stroke();
      }
      n.restore();
    }, m = function(v, C, O) {
      fe(n, O.text, v, C + b / 2, c, {
        strikethrough: O.hidden,
        textAlign: l.textAlign(O.textAlign)
      });
    }, T = this.isHorizontal(), x = this._computeTitleHeight();
    T ? f = {
      x: mt(o, this.left + h, this.right - s[0]),
      y: this.top + h + x,
      line: 0
    } : f = {
      x: this.left + h,
      y: mt(o, this.top + x + h, this.bottom - e[0].height),
      line: 0
    }, Lr(this.ctx, t.textDirection);
    const S = b + h;
    this.legendItems.forEach((v, C) => {
      n.strokeStyle = v.fontColor, n.fillStyle = v.fontColor;
      const O = n.measureText(v.text).width, D = l.textAlign(v.textAlign || (v.textAlign = r.textAlign)), F = g + u + O;
      let N = f.x, w = f.y;
      l.setWidth(this.width), T ? C > 0 && N + F + h > this.right && (w = f.y += S, f.line++, N = f.x = mt(o, this.left + h, this.right - s[f.line])) : C > 0 && w + S > this.bottom && (N = f.x = N + e[f.line].width + h, f.line++, w = f.y = mt(o, this.top + x + h, this.bottom - e[f.line].height));
      const k = l.x(N);
      if (_(k, w, v), N = Vl(D, N + g + u, T ? N + F : this.right, t.rtl), m(l.x(N), w, v), T)
        f.x += F + h;
      else if (typeof v.text != "string") {
        const G = c.lineHeight;
        f.y += ta(v, G) + h;
      } else
        f.y += S;
    }), Mr(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = rt(e.font), n = dt(e.padding);
    if (!e.display)
      return;
    const o = ve(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), h = this.top + c, d = mt(t.align, d, this.right - u);
    else {
      const g = this.columnSizes.reduce((p, b) => Math.max(p, b.height), 0);
      h = c + mt(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = mt(a, d, d + u);
    r.textAlign = o.textAlign(Ys(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, fe(r, e.text, f, h, s);
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
    if (!wu(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = xu(n, s);
      n && !o && $(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && $(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && $(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function Su(i, t, e, s, n) {
  const o = Tu(s, i, t, e), r = vu(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Tu(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function vu(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = ta(t, e)), s;
}
function ta(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function wu(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var Eu = {
  id: "legend",
  _element: So,
  start(i, t, e) {
    const s = i.legend = new So({
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
class ea extends xt {
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
    const n = U(s.text) ? s.text.length : 1;
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
    return this.isHorizontal() ? (h = mt(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = mt(a, n, e), l = H * -0.5) : (h = o - t, d = mt(a, e, n), l = H * 0.5), c = n - e), {
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
    fe(t, e.text, 0, 0, s, {
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
function Au(i, t) {
  const e = new ea({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  Dt.configure(i, e, t), Dt.addBox(i, e), i.titleBlock = e;
}
var Ru = {
  id: "title",
  _element: ea,
  start(i, t, e) {
    Au(i, e);
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
        const c = l.getCenterPoint(), h = we(t, c);
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
function Mt(i, t) {
  return t && (U(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Bt(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Cu(i, t) {
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
  let p = g.height, b = 0, _ = s.reduce((x, S) => x + S.before.length + S.lines.length + S.after.length, 0);
  if (_ += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), _) {
    const x = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * x + (_ - f) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let m = 0;
  const T = function(x) {
    b = Math.max(b, e.measureText(x).width + m);
  };
  return e.save(), e.font = c.string, Z(i.title, T), e.font = l.string, Z(i.beforeBody.concat(i.afterBody), T), m = t.displayColors ? r + 2 + t.boxPadding : 0, Z(s, (x) => {
    Z(x.before, T), Z(x.lines, T), Z(x.after, T);
  }), m = 0, e.font = h.string, Z(i.footer, T), e.restore(), b += g.width, {
    width: b,
    height: p
  };
}
function Ou(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Du(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function Iu(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Du(c, i, t, e) && (c = "center"), c;
}
function vo(i, t, e) {
  const s = e.yAlign || t.yAlign || Ou(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Iu(i, t, e, s),
    yAlign: s
  };
}
function Lu(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Mu(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function wo(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = Jt(r);
  let g = Lu(t, a);
  const p = Mu(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, u) + n : a === "right" && (g += Math.max(d, f) + n), {
    x: yt(g, 0, s.width - t.width),
    y: yt(p, 0, s.height - t.height)
  };
}
function Ai(i, t, e) {
  const s = dt(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function Eo(i) {
  return Mt([], Bt(i));
}
function ku(i, t, e) {
  return ie(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Ao(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const ia = {
  beforeTitle: Ft,
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
  afterTitle: Ft,
  beforeBody: Ft,
  beforeLabel: Ft,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return Y(e) || (t += e), t;
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
  afterLabel: Ft,
  afterBody: Ft,
  beforeFooter: Ft,
  footer: Ft,
  afterFooter: Ft
};
function Tt(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? ia[t].call(e, s) : n;
}
class Ro extends xt {
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
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new en(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = ku(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = Tt(s, "beforeTitle", this, t), o = Tt(s, "title", this, t), r = Tt(s, "afterTitle", this, t);
    let a = [];
    return a = Mt(a, Bt(n)), a = Mt(a, Bt(o)), a = Mt(a, Bt(r)), a;
  }
  getBeforeBody(t, e) {
    return Eo(Tt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return Z(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Ao(s, o);
      Mt(r.before, Bt(Tt(a, "beforeLabel", this, o))), Mt(r.lines, Tt(a, "label", this, o)), Mt(r.after, Bt(Tt(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return Eo(Tt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = Tt(s, "beforeFooter", this, t), o = Tt(s, "footer", this, t), r = Tt(s, "afterFooter", this, t);
    let a = [];
    return a = Mt(a, Bt(n)), a = Mt(a, Bt(o)), a = Mt(a, Bt(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Cu(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))), Z(a, (h) => {
      const d = Ao(t.callbacks, h);
      n.push(Tt(d, "labelColor", this, h)), o.push(Tt(d, "labelPointStyle", this, h)), r.push(Tt(d, "labelTextColor", this, h));
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
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Jt(a), { x: u, y: f } = t, { width: g, height: p } = e;
    let b, _, m, T, x, S;
    return o === "center" ? (x = f + p / 2, n === "left" ? (b = u, _ = b - r, T = x + r, S = x - r) : (b = u + g, _ = b + r, T = x - r, S = x + r), m = b) : (n === "left" ? _ = u + Math.max(l, h) + r : n === "right" ? _ = u + g - Math.max(c, d) - r : _ = this.caretX, o === "top" ? (T = f, x = T - r, b = _ - r, m = _ + r) : (T = f + p, x = T + r, b = _ + r, m = _ - r), S = T), {
      x1: b,
      x2: _,
      x3: m,
      y1: T,
      y2: x,
      y3: S
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = ve(s.rtl, this.x, this.width);
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
      }, b = n.leftForLtr(u, c) + c / 2, _ = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Es(t, p, b, _), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Es(t, p, b, _);
    } else {
      t.lineWidth = V(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const p = n.leftForLtr(u, c), b = n.leftForLtr(n.xPlus(u, 1), c - 2), _ = Jt(r.borderRadius);
      Object.values(_).some((m) => m !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Ee(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Ee(t, {
        x: b,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: _
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(b, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = rt(s.bodyFont);
    let u = d.lineHeight, f = 0;
    const g = ve(s.rtl, this.x, this.width), p = function(O) {
      e.fillText(O, g.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, b = g.textAlign(r);
    let _, m, T, x, S, v, C;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = Ai(this, b, s), e.fillStyle = s.bodyColor, Z(this.beforeBody, p), f = a && b !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, x = 0, v = n.length; x < v; ++x) {
      for (_ = n[x], m = this.labelTextColors[x], e.fillStyle = m, Z(_.before, p), T = _.lines, a && T.length && (this._drawColorBox(e, t, x, g, s), u = Math.max(d.lineHeight, l)), S = 0, C = T.length; S < C; ++S)
        p(T[S]), u = d.lineHeight;
      Z(_.after, p);
    }
    f = 0, u = d.lineHeight, Z(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = ve(s.rtl, this.x, this.width);
      for (t.x = Ai(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = rt(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: g } = Jt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = Xe[t.position].call(this, this._active, this._eventPosition);
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
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Lr(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Mr(t, e.textDirection), t.restore());
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
    const { caretX: s, caretY: n, options: o } = this, r = Xe[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var Pu = {
  id: "tooltip",
  _element: Ro,
  positioners: Xe,
  afterInit(i, t, e) {
    e && (i.tooltip = new Ro({
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
    callbacks: ia
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
const Nu = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Fu(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Nu(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Wu = (i, t) => i === null ? null : yt(Math.round(i), 0, t);
function Co(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Bu extends De {
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
    if (Y(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Fu(s, t, W(e, t), this._addedLabels), Wu(e, s.length - 1);
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
function zu(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = i, f = o || 1, g = h - 1, { min: p, max: b } = t, _ = !Y(r), m = !Y(a), T = !Y(c), x = (b - p) / (d + 1);
  let S = wn((b - p) / g / f) * f, v, C, O, D;
  if (S < 1e-14 && !_ && !m)
    return [
      {
        value: p
      },
      {
        value: b
      }
    ];
  D = Math.ceil(b / S) - Math.floor(p / S), D > g && (S = wn(D * S / g / f) * f), Y(l) || (v = Math.pow(10, l), S = Math.ceil(S * v) / v), n === "ticks" ? (C = Math.floor(p / S) * S, O = Math.ceil(b / S) * S) : (C = p, O = b), _ && m && o && kl((a - r) / o, S / 1e3) ? (D = Math.round(Math.min((a - r) / S, h)), S = (a - r) / D, C = r, O = a) : T ? (C = _ ? r : C, O = m ? a : O, D = c - 1, S = (O - C) / D) : (D = (O - C) / S, $e(D, Math.round(D), S / 1e3) ? D = Math.round(D) : D = Math.ceil(D));
  const F = Math.max(En(S), En(C));
  v = Math.pow(10, Y(l) ? F : l), C = Math.round(C * v) / v, O = Math.round(O * v) / v;
  let N = 0;
  for (_ && (u && C !== r ? (e.push({
    value: r
  }), C < r && N++, $e(Math.round((C + N * S) * v) / v, r, Oo(r, x, i)) && N++) : C < r && N++); N < D; ++N) {
    const w = Math.round((C + N * S) * v) / v;
    if (m && w > a)
      break;
    e.push({
      value: w
    });
  }
  return m && u && O !== a ? e.length && $e(e[e.length - 1].value, a, Oo(a, x, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!m || O === a) && e.push({
    value: O
  }), e;
}
function Oo(i, t, { horizontal: e, minRotation: s }) {
  const n = ct(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Ds extends De {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return Y(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = Pt(n), c = Pt(o);
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
    }, o = this._range || this, r = zu(n, o);
    return t.bounds === "ticks" && Pl(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
class Hu extends Ds {
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
    return W(t.font && t.font.size, nt.font.size) + e.height;
  }
  return 0;
}
function Vu(i, t, e) {
  return e = U(e) ? e : [
    e
  ], {
    w: ec(i, t.string, e),
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
function Gu(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? H / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + n[l], a), d = rt(c.font), u = Vu(i.ctx, d, i._pointLabels[l]);
    s[l] = u;
    const f = _t(i.getIndexAngle(l) + a), g = Math.round(Gi(f)), p = Do(g, h.x, u.w, 0, 180), b = Do(g, h.y, u.h, 90, 270);
    ju(e, t, f, p, b);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Uu(i, s, n);
}
function ju(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Xu(i, t, e) {
  const s = i.drawingArea, { extra: n, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, s + n + r, o), c = Math.round(Gi(_t(l.angle + et))), h = Ku(l.y, a.h, c), d = $u(c), u = Zu(l.x, a.w, d);
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
function Yu(i, t) {
  if (!t)
    return !0;
  const { left: e, top: s, right: n, bottom: o } = i;
  return !(Vt({
    x: e,
    y: s
  }, t) || Vt({
    x: e,
    y: o
  }, t) || Vt({
    x: n,
    y: s
  }, t) || Vt({
    x: n,
    y: o
  }, t));
}
function Uu(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: Is(o) / 2,
    additionalAngle: r ? H / n : 0
  };
  let c;
  for (let h = 0; h < n; h++) {
    l.padding = e[h], l.size = t[h];
    const d = Xu(i, h, l);
    s.push(d), a === "auto" && (d.visible = Yu(d, c), d.visible && (c = d));
  }
  return s;
}
function $u(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function Zu(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Ku(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function qu(i, t, e) {
  const { left: s, top: n, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!Y(a)) {
    const l = Jt(t.borderRadius), c = dt(t.backdropPadding);
    i.fillStyle = a;
    const h = s - c.left, d = n - c.top, u = o - s + c.width, f = r - n + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), Ee(i, {
      x: h,
      y: d,
      w: u,
      h: f,
      radius: l
    }), i.fill()) : i.fillRect(h, d, u, f);
  }
}
function Ju(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = i._pointLabelItems[n];
    if (!o.visible)
      continue;
    const r = s.setContext(i.getPointLabelContext(n));
    qu(e, r, o);
    const a = rt(r.font), { x: l, y: c, textAlign: h } = o;
    fe(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function sa(i, t, e, s) {
  const { ctx: n } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, J);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
  }
}
function Qu(i, t, e, s, n) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash || []), o.lineDashOffset = n.dashOffset, o.beginPath(), sa(i, e, r, s), o.closePath(), o.stroke(), o.restore());
}
function tf(i, t, e) {
  return ie(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class ef extends Ds {
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
      const n = $(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Gu(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = J / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return _t(t * e + ct(s));
  }
  getDistanceFromCenterForValue(t) {
    if (Y(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (Y(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return tf(this.getContext(), t, s);
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
      s.save(), s.beginPath(), sa(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && Ju(this, r), n.display && this.ticks.forEach((h, d) => {
      if (d !== 0 || d === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const u = this.getContext(d), f = n.setContext(u), g = o.setContext(u);
        Qu(this, f, l, r, g);
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
      fe(t, a.label, 0, -o, h, {
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
}, vt = /* @__PURE__ */ Object.keys(Zi);
function Io(i, t) {
  return i - t;
}
function Lo(i, t) {
  if (Y(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), ht(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (de(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function Mo(i, t, e, s) {
  const n = vt.length;
  for (let o = vt.indexOf(i); o < n - 1; ++o) {
    const r = Zi[vt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return vt[o];
  }
  return vt[n - 1];
}
function sf(i, t, e, s, n) {
  for (let o = vt.length - 1; o >= vt.indexOf(e); o--) {
    const r = vt[o];
    if (Zi[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return vt[e ? vt.indexOf(e) : 0];
}
function nf(i) {
  for (let t = vt.indexOf(i) + 1, e = vt.length; t < e; ++t)
    if (Zi[vt[t]].common)
      return vt[t];
}
function ko(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Xs(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function of(i, t, e, s) {
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
  return o === 0 || !e ? s : of(i, s, n, e);
}
class No extends De {
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
    const s = t.time || (t.time = {}), n = this._adapter = new Th._date(t.adapters.date);
    n.init(e), Ue(s.displayFormats, n.formats()), this._parseOpts = {
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
    const o = this.min, r = this.max, a = Bl(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? Mo(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : sf(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : nf(this._unit), this.initOffsets(n), t.reverse && a.reverse(), Po(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = yt(e, 0, r), s = yt(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || Mo(o.minUnit, e, s, this._getLabelCapacity(e)), a = W(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = de(l) || l === !0, h = {};
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
      return $(r, [
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
    return Sr(t.sort(Io));
  }
}
function Ri(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = ae(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = ae(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Bp extends No {
  static id = "timeseries";
  static defaults = No.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Ri(e, this.min), this._tableRange = Ri(e, this.max) - this._minPos, super.initOffsets(t);
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
    return (Ri(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ri(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const na = {
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
}, rf = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, af = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...na,
  ...rf
}, lf = za[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function Se(i) {
  return lr(i) ? Ts(i) : i;
}
function cf(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return lr(t) ? new Proxy(i, {}) : i;
}
function hf(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function oa(i, t) {
  i.labels = t;
}
function ra(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function df(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return oa(e, i.labels), ra(e, i.datasets, t), e;
}
const uf = Vi({
  props: af,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = Ve(null), o = rr(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: h, options: d, plugins: u, datasetIdKey: f } = i, g = df(h, f), p = cf(g, h);
      o.value = new he(n.value, {
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
    return Bs(r), ar(a), Ss([
      () => i.options,
      () => i.data
    ], (c, h) => {
      let [d, u] = c, [f, g] = h;
      const p = Ts(o.value);
      if (!p)
        return;
      let b = !1;
      if (d) {
        const _ = Se(d), m = Se(f);
        _ && _ !== m && (hf(p, _), b = !0);
      }
      if (u) {
        const _ = Se(u.labels), m = Se(g.labels), T = Se(u.datasets), x = Se(g.datasets);
        _ !== m && (oa(p.config.data, _), b = !0), T && T !== x && (ra(p.config.data, T, i.datasetIdKey), b = !0);
      }
      b && Ba(() => {
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
function Ie(i, t) {
  return he.register(t), Vi({
    props: na,
    setup(e, s) {
      let { expose: n } = s;
      const o = rr(null), r = (a) => {
        o.value = a?.chart;
      };
      return n({
        chart: o
      }), () => xs(uf, lf({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const _s = /* @__PURE__ */ Ie("bar", bh), ff = /* @__PURE__ */ Ie("doughnut", sn), gf = /* @__PURE__ */ Ie("line", _h), pf = /* @__PURE__ */ Ie("pie", xh), bf = /* @__PURE__ */ Ie("polarArea", yh), mf = /* @__PURE__ */ Ie("radar", Sh);
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
      return xf(i, t, e);
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
function _f(i, t, e) {
  return e !== "x" && e !== "y" ? i.inRange(t.x, t.y, "x", !0) || i.inRange(t.x, t.y, "y", !0) : i.inRange(t.x, t.y, e, !0);
}
function yf(i, t, e) {
  return e === "x" ? { x: i.x, y: t.y } : e === "y" ? { x: t.x, y: i.y } : t;
}
function Di(i, t, e) {
  return i.filter((s) => e.intersect ? s.inRange(t.x, t.y) : _f(s, t, e.axis));
}
function xf(i, t, e) {
  let s = Number.POSITIVE_INFINITY;
  return Di(i, t, e).reduce((n, o) => {
    const r = o.getCenterPoint(), a = yf(t, r, e.axis), l = we(t, a);
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
const Sf = (i, t) => t > i || i.length > t.length && i.slice(0, t.length) === t, le = 1e-3, Ki = (i, t, e) => Math.min(e, Math.max(t, i)), aa = (i, t) => i.value >= i.start - t && i.value <= i.end + t;
function Tf(i, t, e) {
  for (const s of Object.keys(i))
    i[s] = Ki(i[s], t, e);
  return i;
}
function vf(i, t, e, s) {
  return !i || !t || e <= 0 ? !1 : Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2) <= Math.pow(e + s, 2);
}
function la(i, { x: t, y: e, x2: s, y2: n }, o, { borderWidth: r, hitTolerance: a }) {
  const l = (r + a) / 2, c = i.x >= t - l - le && i.x <= s + l + le, h = i.y >= e - l - le && i.y <= n + l + le;
  return o === "x" ? c : (o === "y" || c) && h;
}
function ca(i, { rect: t, center: e }, s, { rotation: n, borderWidth: o, hitTolerance: r }) {
  const a = pe(i, e, ct(-n));
  return la(a, t, s, { borderWidth: o, hitTolerance: r });
}
function be(i, t) {
  const { centerX: e, centerY: s } = i.getProps(["centerX", "centerY"], t);
  return { x: e, y: s };
}
function wf(i, t, e, s = !0) {
  const n = e.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = n[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (Sf(a, r)) {
      if (s)
        throw new Error(`${i} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const ha = (i) => typeof i == "string" && i.endsWith("%"), da = (i) => parseFloat(i) / 100, ua = (i) => Ki(da(i), 0, 1), ze = (i, t) => ({ x: i, y: t, x2: i, y2: t, width: 0, height: 0 }), Ef = {
  box: (i) => ze(i.centerX, i.centerY),
  doughnutLabel: (i) => ze(i.centerX, i.centerY),
  ellipse: (i) => ({ centerX: i.centerX, centerY: i.centerX, radius: 0, width: 0, height: 0 }),
  label: (i) => ze(i.centerX, i.centerY),
  line: (i) => ze(i.x, i.y),
  point: (i) => ({ centerX: i.centerX, centerY: i.centerY, radius: 0, width: 0, height: 0 }),
  polygon: (i) => ze(i.centerX, i.centerY)
};
function rn(i, t) {
  return t === "start" ? 0 : t === "end" ? i : ha(t) ? ua(t) * i : i / 2;
}
function ee(i, t, e = !0) {
  return typeof t == "number" ? t : ha(t) ? (e ? ua(t) : da(t)) * i : i;
}
function Af(i, t) {
  const { x: e, width: s } = i, n = t.textAlign;
  return n === "center" ? e + s / 2 : n === "end" || n === "right" ? e + s : e;
}
function fa(i, t, { borderWidth: e, position: s, xAdjust: n, yAdjust: o }, r) {
  const a = V(r), l = t.width + (a ? r.width : 0) + e, c = t.height + (a ? r.height : 0) + e, h = an(s), d = Wo(i.x, l, n, h.x), u = Wo(i.y, c, o, h.y);
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
  return V(i) ? {
    x: W(i.x, t),
    y: W(i.y, t)
  } : (i = W(i, t), {
    x: i,
    y: i
  });
}
const ga = (i, t) => i && i.autoFit && t < 1;
function pa(i, t) {
  const e = i.font, s = U(e) ? e : [e];
  return ga(i, t) ? s.map(function(n) {
    const o = rt(n);
    return o.size = Math.floor(n.size * t), o.lineHeight = n.lineHeight, rt(o);
  }) : s.map((n) => rt(n));
}
function ba(i) {
  return i && (Et(i.xValue) || Et(i.yValue));
}
function Wo(i, t, e = 0, s) {
  return i - rn(t, s) + e;
}
function Le(i, t, e) {
  const s = e.init;
  if (s) {
    if (s === !0)
      return _a(t, e);
  } else return;
  return Rf(i, t, e);
}
function ma(i, t, e) {
  let s = !1;
  return t.forEach((n) => {
    wt(i[n]) ? (s = !0, e[n] = i[n]) : Et(e[n]) && delete e[n];
  }), s;
}
function _a(i, t) {
  const e = t.type || "line";
  return Ef[e](i);
}
function Rf(i, t, e) {
  const s = $(e.init, [{ chart: i, properties: t, options: e }]);
  if (s === !0)
    return _a(t, e);
  if (V(s))
    return s;
}
const ys = /* @__PURE__ */ new Map(), Cf = (i) => isNaN(i) || i <= 0, Of = (i) => i.reduce(function(t, e) {
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
function Gt(i, t) {
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
      width: ee(e.width, t.width),
      height: ee(e.height, t.height)
    };
  const s = pa(t), n = t.textStrokeWidth, o = U(e) ? e : [e], r = o.join() + Of(s) + n + (i._measureText ? "-spriting" : "");
  return ys.has(r) || ys.set(r, Mf(i, o, s, n)), ys.get(r);
}
function ya(i, t, e) {
  const { x: s, y: n, width: o, height: r } = t;
  i.save(), Me(i, e);
  const a = Gt(i, e);
  i.fillStyle = e.backgroundColor, i.beginPath(), Ee(i, {
    x: s,
    y: n,
    w: o,
    h: r,
    radius: Tf(Jt(e.borderRadius), 0, Math.min(o, r) / 2)
  }), i.closePath(), i.fill(), a && (i.shadowColor = e.borderShadowColor, i.stroke()), i.restore();
}
function xa(i, t, e, s) {
  const n = e.content;
  if (qi(n)) {
    i.save(), i.globalAlpha = Nf(e.opacity, n.style.opacity), i.drawImage(n, t.x, t.y, t.width, t.height), i.restore();
    return;
  }
  const o = U(n) ? n : [n], r = pa(e, s), a = e.color, l = U(a) ? a : [a], c = Af(t, e), h = t.y + e.textStrokeWidth / 2;
  i.save(), i.textBaseline = "middle", i.textAlign = e.textAlign, Df(i, e) && kf(i, { x: c, y: h }, o, r), Pf(i, { x: c, y: h }, o, { fonts: r, colors: l }), i.restore();
}
function Df(i, t) {
  if (t.textStrokeWidth > 0)
    return i.lineJoin = "round", i.miterLimit = 2, i.lineWidth = t.textStrokeWidth, i.strokeStyle = t.textStrokeColor, !0;
}
function If(i, t, e, s) {
  const { radius: n, options: o } = t, r = o.pointStyle, a = o.rotation;
  let l = (a || 0) * js;
  if (qi(r)) {
    i.save(), i.translate(e, s), i.rotate(l), i.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), i.restore();
    return;
  }
  Cf(n) || Lf(i, { x: e, y: s, radius: n, rotation: a, style: r, rad: l });
}
function Lf(i, { x: t, y: e, radius: s, rotation: n, style: o, rad: r }) {
  let a, l, c, h;
  switch (i.beginPath(), o) {
    // Default includes circle
    default:
      i.arc(t, e, s, 0, J), i.closePath();
      break;
    case "triangle":
      i.moveTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += ki, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += ki, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), i.closePath();
      break;
    case "rectRounded":
      h = s * 0.516, c = s - h, a = Math.cos(r + Ot) * c, l = Math.sin(r + Ot) * c, i.arc(t - a, e - l, h, r - H, r - et), i.arc(t + l, e - a, h, r - et, r), i.arc(t + a, e + l, h, r, r + et), i.arc(t - l, e + a, h, r + et, r + H), i.closePath();
      break;
    case "rect":
      if (!n) {
        c = Math.SQRT1_2 * s, i.rect(t - c, e - c, 2 * c, 2 * c);
        break;
      }
      r += Ot;
    /* falls through */
    case "rectRot":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + l, e - a), i.lineTo(t + a, e + l), i.lineTo(t - l, e + a), i.closePath();
      break;
    case "crossRot":
      r += Ot;
    /* falls through */
    case "cross":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
      break;
    case "star":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a), r += Ot, a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
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
function Mf(i, t, e, s) {
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
function kf(i, { x: t, y: e }, s, n) {
  i.beginPath();
  let o = 0;
  s.forEach(function(r, a) {
    const l = n[Math.min(a, n.length - 1)], c = l.lineHeight;
    i.font = l.string, i.strokeText(r, t, e + c / 2 + o), o += c;
  }), i.stroke();
}
function Pf(i, { x: t, y: e }, s, { fonts: n, colors: o }) {
  let r = 0;
  s.forEach(function(a, l) {
    const c = o[Math.min(l, o.length - 1)], h = n[Math.min(l, n.length - 1)], d = h.lineHeight;
    i.beginPath(), i.font = h.string, i.fillStyle = c, i.fillText(a, t, e + d / 2 + r), r += d, i.fill();
  });
}
function Nf(i, t) {
  const e = de(i) ? i : t;
  return de(e) ? Ki(e, 0, 1) : 1;
}
const Sa = ["left", "bottom", "top", "right"];
function Ff(i, t) {
  const { pointX: e, pointY: s, options: n } = t, o = n.callout, r = o && o.display && Vf(t, o);
  if (!r || jf(t, o, r))
    return;
  if (i.save(), i.beginPath(), !Gt(i, o))
    return i.restore();
  const { separatorStart: l, separatorEnd: c } = Wf(t, r), { sideStart: h, sideEnd: d } = zf(t, r, l);
  (o.margin > 0 || n.borderWidth === 0) && (i.moveTo(l.x, l.y), i.lineTo(c.x, c.y)), i.moveTo(h.x, h.y), i.lineTo(d.x, d.y);
  const u = pe({ x: e, y: s }, t.getCenterPoint(), ct(-t.rotation));
  i.lineTo(u.x, u.y), i.stroke(), i.restore();
}
function Wf(i, t) {
  const { x: e, y: s, x2: n, y2: o } = i, r = Bf(i, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: s }, l = { x: a.x, y: o }) : (a = { x: e, y: s + r }, l = { x: n, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function Bf(i, t) {
  const { width: e, height: s, options: n } = i, o = n.callout.margin + n.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? s + o : -o;
}
function zf(i, t, e) {
  const { y: s, width: n, height: o, options: r } = i, a = r.callout.start, l = Hf(t, r.callout);
  let c, h;
  return t === "left" || t === "right" ? (c = { x: e.x, y: s + ee(o, a) }, h = { x: c.x + l, y: c.y }) : (c = { x: e.x + ee(n, a), y: e.y }, h = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: h };
}
function Hf(i, t) {
  const e = t.side;
  return i === "left" || i === "top" ? -e : e;
}
function Vf(i, t) {
  const e = t.position;
  return Sa.includes(e) ? e : Gf(i, t);
}
function Gf(i, t) {
  const { x: e, y: s, x2: n, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: h, centerY: d, rotation: u } = i, f = { x: h, y: d }, g = t.start, p = ee(r, g), b = ee(a, g), _ = [e, e + p, e + p, n], m = [s + b, o, s, o], T = [];
  for (let x = 0; x < 4; x++) {
    const S = pe({ x: _[x], y: m[x] }, f, ct(u));
    T.push({
      position: Sa[x],
      distance: we(S, { x: l, y: c })
    });
  }
  return T.sort((x, S) => x.distance - S.distance)[0].position;
}
function jf(i, t, e) {
  const { pointX: s, pointY: n } = i, o = t.margin;
  let r = s, a = n;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), i.inRange(r, a);
}
const Bo = {
  xScaleID: { min: "xMin", max: "xMax", start: "left", end: "right", startProp: "x", endProp: "x2" },
  yScaleID: { min: "yMin", max: "yMax", start: "bottom", end: "top", startProp: "y", endProp: "y2" }
};
function Ce(i, t, e) {
  return t = typeof t == "number" ? t : i.parse(t), ht(t) ? i.getPixelForValue(t) : e;
}
function ge(i, t, e) {
  const s = t[e];
  if (s || e === "scaleID")
    return s;
  const n = e.charAt(0), o = Object.values(i).filter((r) => r.axis && r.axis === n);
  return o.length ? o[0].id : n;
}
function Ta(i, t) {
  if (i) {
    const e = i.options.reverse, s = Ce(i, t.min, e ? t.end : t.start), n = Ce(i, t.max, e ? t.start : t.end);
    return {
      start: s,
      end: n
    };
  }
}
function va(i, t) {
  const { chartArea: e, scales: s } = i, n = s[ge(s, t, "xScaleID")], o = s[ge(s, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return n && (r = Ce(n, t.xValue, n.left + n.width / 2)), o && (a = Ce(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function ln(i, t) {
  const e = i.scales, s = e[ge(e, t, "xScaleID")], n = e[ge(e, t, "yScaleID")];
  if (!s && !n)
    return {};
  let { left: o, right: r } = s || i.chartArea, { top: a, bottom: l } = n || i.chartArea;
  const c = zo(s, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const h = zo(n, { min: t.yMin, max: t.yMax, start: l, end: a });
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
function wa(i, t) {
  if (!ba(t)) {
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
  return Yf(i, t);
}
function Xf(i, t) {
  const { scales: e, chartArea: s } = i, n = e[t.scaleID], o = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
  return n ? Uf(n, o, t) : $f(e, o, t), o;
}
function Ea(i, t) {
  const e = ln(i, t);
  return e.initProperties = Le(i, e, t), e.elements = [{
    type: "label",
    optionScope: "label",
    properties: qf(i, e, t),
    initProperties: e.initProperties
  }], e;
}
function Yf(i, t) {
  const e = va(i, t), s = t.radius * 2;
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
function zo(i, t) {
  const e = Ta(i, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function Uf(i, t, e) {
  const s = Ce(i, e.value, NaN), n = Ce(i, e.endValue, s);
  i.isHorizontal() ? (t.x = s, t.x2 = n) : (t.y = s, t.y2 = n);
}
function $f(i, t, e) {
  for (const s of Object.keys(Bo)) {
    const n = i[ge(i, e, s)];
    if (n) {
      const { min: o, max: r, start: a, end: l, startProp: c, endProp: h } = Bo[s], d = Ta(n, { min: e[o], max: e[r], start: n[a], end: n[l] });
      t[c] = d.start, t[h] = d.end;
    }
  }
}
function Zf({ properties: i, options: t }, e, s, n) {
  const { x: o, x2: r, width: a } = i;
  return Aa({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.x,
    padding: { start: n.left, end: n.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function Kf({ properties: i, options: t }, e, s, n) {
  const { y: o, y2: r, height: a } = i;
  return Aa({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.y,
    padding: { start: n.top, end: n.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function Aa(i, t) {
  const { start: e, end: s, borderWidth: n } = i, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = s - n - e - r - a - t.size;
  return e + n / 2 + l + rn(c, o);
}
function qf(i, t, e) {
  const s = e.label;
  s.backgroundColor = "transparent", s.callout.display = !1;
  const n = an(s.position), o = dt(s.padding), r = Qi(i.ctx, s), a = Zf({ properties: t, options: e }, r, n, o), l = Kf({ properties: t, options: e }, r, n, o), c = r.width + o.width, h = r.height + o.height;
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
function Jf(i, t, e) {
  t.listened = ma(e, cn, t.listeners), t.moveListened = !1, Ls.forEach((s) => {
    wt(e[s]) && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((s) => {
    !t.listened && wt(s.click) && (t.listened = !0), t.moveListened || Ls.forEach((n) => {
      wt(s[n]) && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function Qf(i, t, e) {
  if (i.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return tg(i, t, e);
      case "click":
        return eg(i, t, e);
    }
}
function tg(i, t, e) {
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
    n.indexOf(r) < 0 && (o = Ra(r.options[e] || i.listeners[e], r, t) || o);
  return o;
}
function eg(i, t, e) {
  const s = i.listeners, n = on(i.visibleElements, t, e.interaction);
  let o;
  for (const r of n)
    o = Ra(r.options.click || s.click, r, t) || o;
  return o;
}
function Ra(i, t, e) {
  return $(i, [t.$context, e]) === !0;
}
const zi = ["afterDraw", "beforeDraw"];
function ig(i, t, e) {
  const s = t.visibleElements;
  t.hooked = ma(e, zi, t.hooks), t.hooked || s.forEach((n) => {
    t.hooked || zi.forEach((o) => {
      wt(n.options[o]) && (t.hooked = !0);
    });
  });
}
function Vo(i, t, e) {
  if (i.hooked) {
    const s = t.options[e] || i.hooks[e];
    return $(s, [t.$context]);
  }
}
function sg(i, t, e) {
  const s = lg(i.scales, t, e);
  let n = Go(t, s, "min", "suggestedMin");
  n = Go(t, s, "max", "suggestedMax") || n, n && wt(t.handleTickRangeOptions) && t.handleTickRangeOptions();
}
function ng(i, t) {
  for (const e of i)
    rg(e, t);
}
function Go(i, t, e, s) {
  if (ht(t[e]) && !og(i.options, e, s)) {
    const n = i[e] !== t[e];
    return i[e] = t[e], n;
  }
}
function og(i, t, e) {
  return Et(i[t]) || Et(i[e]);
}
function rg(i, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const s = ge(t, i, e);
    s && !t[s] && ag(i, e) && console.warn(`No scale found with id '${s}' for annotation '${i.id}'`);
  }
}
function ag(i, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const s of ["Min", "Max", "Value"])
    if (Et(i[e + s]))
      return !0;
  return !1;
}
function lg(i, t, e) {
  const s = t.axis, n = t.id, o = s + "ScaleID", r = {
    min: W(t.min, Number.NEGATIVE_INFINITY),
    max: W(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === n ? jo(a, t, ["value", "endValue"], r) : ge(i, a, o) === n && jo(a, t, [s + "Min", s + "Max", s + "Value"], r);
  return r;
}
function jo(i, t, e, s) {
  for (const n of e) {
    const o = i[n];
    if (Et(o)) {
      const r = t.parse(o);
      s.min = Math.min(s.min, r), s.max = Math.max(s.max, r);
    }
  }
}
class ke extends xt {
  inRange(t, e, s, n) {
    const { x: o, y: r } = pe({ x: t, y: e }, this.getCenterPoint(n), ct(-this.options.rotation));
    return la({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], n), s, this.options);
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    t.save(), Ji(t, this.getCenterPoint(), this.options.rotation), ya(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return Ea(t, e);
  }
}
ke.id = "boxAnnotation";
ke.defaults = {
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
ke.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
ke.descriptors = {
  label: {
    _fallback: !0
  }
};
class ts extends xt {
  inRange(t, e, s, n) {
    return ca(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: 0, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const e = this.options;
    !e.display || !e.content || (gg(t, this), t.save(), Ji(t, this.getCenterPoint(), this.rotation), xa(t, this, e, this._fitRatio), t.restore());
  }
  resolveElementProperties(t, e) {
    const s = cg(t, e);
    if (!s)
      return {};
    const { controllerMeta: n, point: o, radius: r } = dg(t, e, s);
    let a = Qi(t.ctx, e);
    const l = ug(a, r);
    ga(e, l) && (a = { width: a.width * l, height: a.height * l });
    const { position: c, xAdjust: h, yAdjust: d } = e, u = fa(o, a, { borderWidth: 0, position: c, xAdjust: h, yAdjust: d });
    return {
      initProperties: Le(t, u, e),
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
function cg(i, t) {
  return i.getSortedVisibleDatasetMetas().reduce(function(e, s) {
    const n = s.controller;
    return n instanceof sn && hg(i, t, s.data) && (!e || n.innerRadius < e.controller.innerRadius) && n.options.circumference >= 90 ? s : e;
  }, void 0);
}
function hg(i, t, e) {
  if (!t.autoHide)
    return !0;
  for (let s = 0; s < e.length; s++)
    if (!e[s].hidden && i.getDataVisibility(s))
      return !0;
}
function dg({ chartArea: i }, t, e) {
  const { left: s, top: n, right: o, bottom: r } = i, { innerRadius: a, offsetX: l, offsetY: c } = e.controller, h = (s + o) / 2 + l, d = (n + r) / 2 + c, u = {
    left: Math.max(h - a, s),
    right: Math.min(h + a, o),
    top: Math.max(d - a, n),
    bottom: Math.min(d + a, r)
  }, f = {
    x: (u.left + u.right) / 2,
    y: (u.top + u.bottom) / 2
  }, g = t.spacing + t.borderWidth / 2, p = a - g, b = f.y > d, _ = b ? n + g : r - g, m = fg(_, h, d, p);
  return {
    controllerMeta: {
      _centerX: h,
      _centerY: d,
      _radius: p,
      _counterclockwise: b,
      ...m
    },
    point: f,
    radius: Math.min(a, Math.min(u.right - u.left, u.bottom - u.top) / 2)
  };
}
function ug({ width: i, height: t }, e) {
  const s = Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
  return e * 2 / s;
}
function fg(i, t, e, s) {
  const n = Math.pow(e - i, 2), o = Math.pow(s, 2), r = t * -2, a = Math.pow(t, 2) + n - o, l = Math.pow(r, 2) - 4 * a;
  if (l <= 0)
    return {
      _startAngle: 0,
      _endAngle: J
    };
  const c = (-r - Math.sqrt(l)) / 2, h = (-r + Math.sqrt(l)) / 2;
  return {
    _startAngle: Pi({ x: t, y: e }, { x: c, y: i }).angle,
    _endAngle: Pi({ x: t, y: e }, { x: h, y: i }).angle
  };
}
function gg(i, t) {
  const { _centerX: e, _centerY: s, _radius: n, _startAngle: o, _endAngle: r, _counterclockwise: a, options: l } = t;
  i.save();
  const c = Gt(i, l);
  i.fillStyle = l.backgroundColor, i.beginPath(), i.arc(e, s, n, o, r, a), i.closePath(), i.fill(), c && i.stroke(), i.restore();
}
class oi extends xt {
  inRange(t, e, s, n) {
    return ca(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: this.options.borderWidth, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const e = this.options, s = !Et(this._visible) || this._visible;
    !e.display || !e.content || !s || (t.save(), Ji(t, this.getCenterPoint(), this.rotation), Ff(t, this), ya(t, this, e), xa(t, pg(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let s;
    if (ba(e))
      s = va(t, e);
    else {
      const { centerX: a, centerY: l } = ln(t, e);
      s = { x: a, y: l };
    }
    const n = dt(e.padding), o = Qi(t.ctx, e), r = fa(s, o, e, n);
    return {
      initProperties: Le(t, r, e),
      pointX: s.x,
      pointY: s.y,
      ...r,
      rotation: e.rotation
    };
  }
}
oi.id = "labelAnnotation";
oi.defaults = {
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
oi.defaultRoutes = {
  borderColor: "color"
};
function pg({ x: i, y: t, width: e, height: s, options: n }) {
  const o = n.borderWidth / 2, r = dt(n.padding);
  return {
    x: i + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - n.borderWidth,
    height: s - r.top - r.bottom - n.borderWidth
  };
}
const hn = (i, t, e) => ({ x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) }), Ms = (i, t, e) => hn(t, e, Math.abs((i - t.y) / (e.y - t.y))).x, Xo = (i, t, e) => hn(t, e, Math.abs((i - t.x) / (e.x - t.x))).y, Ye = (i) => i * i, bg = (i, t, { x: e, y: s, x2: n, y2: o }, r) => r === "y" ? { start: Math.min(s, o), end: Math.max(s, o), value: t } : { start: Math.min(e, n), end: Math.max(e, n), value: i }, Yo = (i, t, e, s) => (1 - s) * (1 - s) * i + 2 * (1 - s) * s * t + s * s * e, ks = (i, t, e, s) => ({ x: Yo(i.x, t.x, e.x, s), y: Yo(i.y, t.y, e.y, s) }), Uo = (i, t, e, s) => 2 * (1 - s) * (t - i) + 2 * s * (e - t), $o = (i, t, e, s) => -Math.atan2(Uo(i.x, t.x, e.x, s), Uo(i.y, t.y, e.y, s)) + 0.5 * H;
class ri extends xt {
  inRange(t, e, s, n) {
    const o = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y") {
      const r = { mouseX: t, mouseY: e }, { path: a, ctx: l } = this;
      if (a) {
        Gt(l, this.options), l.lineWidth += this.options.hitTolerance;
        const { chart: h } = this.$context, d = t * h.currentDevicePixelRatio, u = e * h.currentDevicePixelRatio, f = l.isPointInStroke(a, d, u) || Ps(this, r, n);
        return l.restore(), f;
      }
      const c = Ye(o);
      return xg(this, r, c, n) || Ps(this, r, n);
    }
    return mg(this, { mouseX: t, mouseY: e }, s, { hitSize: o, useFinalPosition: n });
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const { x: e, y: s, x2: n, y2: o, cp: r, options: a } = this;
    if (t.save(), !Gt(t, a))
      return t.restore();
    Me(t, a);
    const l = Math.sqrt(Math.pow(n - e, 2) + Math.pow(o - s, 2));
    if (a.curve && r)
      return Cg(t, this, r, l), t.restore();
    const { startOpts: c, endOpts: h, startAdjust: d, endAdjust: u } = Ca(this), f = Math.atan2(o - s, n - e);
    t.translate(e, s), t.rotate(f), t.beginPath(), t.moveTo(0 + d, 0), t.lineTo(l - u, 0), t.shadowColor = a.borderShadowColor, t.stroke(), Ns(t, 0, d, c), Ns(t, l, -u, h), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const s = Xf(t, e), { x: n, y: o, x2: r, y2: a } = s, l = _g(s, t.chartArea), c = l ? yg({ x: n, y: o }, { x: r, y: a }, t.chartArea) : { x: n, y: o, x2: r, y2: a, width: Math.abs(r - n), height: Math.abs(a - o) };
    if (c.centerX = (r + n) / 2, c.centerY = (a + o) / 2, c.initProperties = Le(t, c, e), e.curve) {
      const d = { x: c.x, y: c.y }, u = { x: c.x2, y: c.y2 };
      c.cp = Rg(c, e, we(d, u));
    }
    const h = Sg(t, c, e.label);
    return h._visible = l, c.elements = [{
      type: "label",
      optionScope: "label",
      properties: h,
      initProperties: c.initProperties
    }], c;
  }
}
ri.id = "lineAnnotation";
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
ri.defaults = {
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
    callout: Object.assign({}, oi.defaults.callout),
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
ri.descriptors = {
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
ri.defaultRoutes = {
  borderColor: "color"
};
function mg(i, { mouseX: t, mouseY: e }, s, { hitSize: n, useFinalPosition: o }) {
  const r = bg(t, e, i.getProps(["x", "y", "x2", "y2"], o), s);
  return aa(r, n) || Ps(i, { mouseX: t, mouseY: e }, o, s);
}
function _g({ x: i, y: t, x2: e, y2: s }, { top: n, right: o, bottom: r, left: a }) {
  return !(i < a && e < a || i > o && e > o || t < n && s < n || t > r && s > r);
}
function Ko({ x: i, y: t }, e, { top: s, right: n, bottom: o, left: r }) {
  return i < r && (t = Xo(r, { x: i, y: t }, e), i = r), i > n && (t = Xo(n, { x: i, y: t }, e), i = n), t < s && (i = Ms(s, { x: i, y: t }, e), t = s), t > o && (i = Ms(o, { x: i, y: t }, e), t = o), { x: i, y: t };
}
function yg(i, t, e) {
  const { x: s, y: n } = Ko(i, t, e), { x: o, y: r } = Ko(t, i, e);
  return { x: s, y: n, x2: o, y2: r, width: Math.abs(o - s), height: Math.abs(r - n) };
}
function xg(i, { mouseX: t, mouseY: e }, s = le, n) {
  const { x: o, y: r, x2: a, y2: l } = i.getProps(["x", "y", "x2", "y2"], n), c = a - o, h = l - r, d = Ye(c) + Ye(h), u = d === 0 ? -1 : ((t - o) * c + (e - r) * h) / d;
  let f, g;
  return u < 0 ? (f = o, g = r) : u > 1 ? (f = a, g = l) : (f = o + u * c, g = r + u * h), Ye(t - f) + Ye(e - g) <= s;
}
function Ps(i, { mouseX: t, mouseY: e }, s, n) {
  const o = i.label;
  return o.options.display && o.inRange(t, e, n, s);
}
function Sg(i, t, e) {
  const s = e.borderWidth, n = dt(e.padding), o = Qi(i.ctx, e), r = o.width + n.width + s, a = o.height + n.height + s;
  return vg(t, e, { width: r, height: a, padding: n }, i.chartArea);
}
function Tg(i) {
  const { x: t, y: e, x2: s, y2: n } = i, o = Math.atan2(n - e, s - t);
  return o > H / 2 ? o - H : o < H / -2 ? o + H : o;
}
function vg(i, t, e, s) {
  const { width: n, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: i.x, y: i.y }, h = { x: i.x2, y: i.y2 }, d = t.rotation === "auto" ? Tg(i) : ct(t.rotation), u = wg(n, o, d), f = Eg(i, t, { labelSize: u, padding: r }, s), g = i.cp ? ks(c, i.cp, h, f) : hn(c, h, f), p = { size: u.w, min: s.left, max: s.right, padding: r.left }, b = { size: u.h, min: s.top, max: s.bottom, padding: r.top }, _ = Jo(g.x, p) + a, m = Jo(g.y, b) + l;
  return {
    x: _ - n / 2,
    y: m - o / 2,
    x2: _ + n / 2,
    y2: m + o / 2,
    centerX: _,
    centerY: m,
    pointX: g.x,
    pointY: g.y,
    width: n,
    height: o,
    rotation: Gi(d)
  };
}
function wg(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e);
  return {
    w: Math.abs(i * s) + Math.abs(t * n),
    h: Math.abs(i * n) + Math.abs(t * s)
  };
}
function Eg(i, t, e, s) {
  let n;
  const o = Ag(i, s);
  return t.position === "start" ? n = qo({ w: i.x2 - i.x, h: i.y2 - i.y }, e, t, o) : t.position === "end" ? n = 1 - qo({ w: i.x - i.x2, h: i.y - i.y2 }, e, t, o) : n = rn(1, t.position), n;
}
function qo(i, t, e, s) {
  const { labelSize: n, padding: o } = t, r = i.w * s.dx, a = i.h * s.dy, l = r > 0 && (n.w / 2 + o.left - s.x) / r, c = a > 0 && (n.h / 2 + o.top - s.y) / a;
  return Ki(Math.max(l, c), 0, 0.25);
}
function Ag(i, t) {
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
function Ca(i) {
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
  i.beginPath(), Me(i, s), Gt(i, s), i.moveTo(c, -o), i.lineTo(t + e, 0), i.lineTo(c, o), r === !0 ? (i.fillStyle = a || l, i.closePath(), i.fill(), i.shadowColor = "transparent") : i.shadowColor = s.borderShadowColor, i.stroke();
}
function Rg(i, t, e) {
  const { x: s, y: n, x2: o, y2: r, centerX: a, centerY: l } = i, c = Math.atan2(r - n, o - s), h = an(t.controlPoint, 0), d = {
    x: a + ee(e, h.x, !1),
    y: l + ee(e, h.y, !1)
  };
  return pe(d, { x: a, y: l }, c);
}
function tr(i, { x: t, y: e }, { angle: s, adjust: n }, o) {
  !o || !o.display || (i.save(), i.translate(t, e), i.rotate(s), Ns(i, 0, -n, o), i.restore());
}
function Cg(i, t, e, s) {
  const { x: n, y: o, x2: r, y2: a, options: l } = t, { startOpts: c, endOpts: h, startAdjust: d, endAdjust: u } = Ca(t), f = { x: n, y: o }, g = { x: r, y: a }, p = $o(f, e, g, 0), b = $o(f, e, g, 1) - H, _ = ks(f, e, g, d / s), m = ks(f, e, g, 1 - u / s), T = new Path2D();
  i.beginPath(), T.moveTo(_.x, _.y), T.quadraticCurveTo(e.x, e.y, m.x, m.y), i.shadowColor = l.borderShadowColor, i.stroke(T), t.path = T, t.ctx = i, tr(i, _, { angle: p, adjust: d }, c), tr(i, m, { angle: b, adjust: u }, h);
}
class ai extends xt {
  inRange(t, e, s, n) {
    const o = this.options.rotation, r = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y")
      return Og({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], n), o, r);
    const { x: a, y: l, x2: c, y2: h } = this.getProps(["x", "y", "x2", "y2"], n), d = s === "y" ? { start: l, end: h } : { start: a, end: c }, u = pe({ x: t, y: e }, this.getCenterPoint(n), ct(-o));
    return u[s] >= d.start - r - le && u[s] <= d.end + r + le;
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const { width: e, height: s, centerX: n, centerY: o, options: r } = this;
    t.save(), Ji(t, this.getCenterPoint(), r.rotation), Me(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Gt(t, r);
    t.ellipse(n, o, s / 2, e / 2, H / 2, 0, 2 * H), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return Ea(t, e);
  }
}
ai.id = "ellipseAnnotation";
ai.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  label: Object.assign({}, ke.defaults.label),
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
ai.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
ai.descriptors = {
  label: {
    _fallback: !0
  }
};
function Og(i, t, e, s) {
  const { width: n, height: o, centerX: r, centerY: a } = t, l = n / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const h = ct(e || 0), d = Math.cos(h), u = Math.sin(h), f = Math.pow(d * (i.x - r) + u * (i.y - a), 2), g = Math.pow(u * (i.x - r) - d * (i.y - a), 2);
  return f / Math.pow(l + s, 2) + g / Math.pow(c + s, 2) <= 1.0001;
}
class es extends xt {
  inRange(t, e, s, n) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], n), h = (this.options.borderWidth + this.options.hitTolerance) / 2;
    return s !== "x" && s !== "y" ? vf({ x: t, y: e }, this.getCenterPoint(n), c / 2, h) : aa(s === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t }, h);
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const e = this.options, s = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, Me(t, e);
    const n = Gt(t, e);
    If(t, this, this.centerX, this.centerY), n && !qi(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = s;
  }
  resolveElementProperties(t, e) {
    const s = wa(t, e);
    return s.initProperties = Le(t, s, e), s;
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
class is extends xt {
  inRange(t, e, s, n) {
    if (s !== "x" && s !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && Ig(this.elements, t, e, n);
    const o = pe({ x: t, y: e }, this.getCenterPoint(n), ct(-this.options.rotation)), r = this.elements.map((c) => s === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[s] >= a && o[s] <= l;
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const { elements: e, options: s } = this;
    t.save(), t.beginPath(), t.fillStyle = s.backgroundColor, Me(t, s);
    const n = Gt(t, s);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), n && (t.shadowColor = s.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const s = wa(t, e), { sides: n, rotation: o } = e, r = [], a = 2 * H / n;
    let l = o * js;
    for (let c = 0; c < n; c++, l += a) {
      const h = Dg(s, e, l);
      h.initProperties = Le(t, s, e), r.push(h);
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
function Dg({ centerX: i, centerY: t }, { radius: e, borderWidth: s, hitTolerance: n }, o) {
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
function Ig(i, t, e, s) {
  let n = !1, o = i[i.length - 1].getProps(["bX", "bY"], s);
  for (const r of i) {
    const a = r.getProps(["bX", "bY"], s);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (n = !n), o = a;
  }
  return n;
}
const Qt = {
  box: ke,
  doughnutLabel: ts,
  ellipse: ai,
  label: oi,
  line: ri,
  point: es,
  polygon: is
};
Object.keys(Qt).forEach((i) => {
  nt.describe(`elements.${Qt[i].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Lg = {
  update: Object.assign
}, Mg = cn.concat(zi), er = (i, t) => V(t) ? Ws(i, t) : i, Fs = (i) => i === "color" || i === "font";
function dn(i = "line") {
  return Qt[i] ? i : (console.warn(`Unknown annotation type: '${i}', defaulting to 'line'`), "line");
}
function kg(i, t, e, s) {
  const n = Ng(i, e.animations, s), o = t.annotations, r = Bg(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = Oa(r, a, l.type), h = l.setContext(Wg(i, c, r, l)), d = c.resolveElementProperties(i, h);
    d.skip = Pg(d), "elements" in d && (Fg(c, d.elements, h, n), delete d.elements), Et(c.x) || Object.assign(c, d), Object.assign(c, d.initProperties), d.options = Da(h), n.update(c, d);
  }
}
function Pg(i) {
  return isNaN(i.x) || isNaN(i.y);
}
function Ng(i, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? Lg : new en(i, t);
}
function Fg(i, t, e, s) {
  const n = i.elements || (i.elements = []);
  n.length = t.length;
  for (let o = 0; o < t.length; o++) {
    const r = t[o], a = r.properties, l = Oa(n, o, r.type, r.initProperties), c = e[r.optionScope].override(r);
    a.options = Da(c), s.update(l, a);
  }
}
function Oa(i, t, e, s) {
  const n = Qt[dn(e)];
  let o = i[t];
  return (!o || !(o instanceof n)) && (o = i[t] = new n(), Object.assign(o, s)), o;
}
function Da(i) {
  const t = Qt[dn(i.type)], e = {};
  e.id = i.id, e.type = i.type, e.drawTime = i.drawTime, Object.assign(
    e,
    Ws(i, t.defaults),
    Ws(i, t.defaultRoutes)
  );
  for (const s of Mg)
    e[s] = i[s];
  return e;
}
function Ws(i, t) {
  const e = {};
  for (const s of Object.keys(t)) {
    const n = t[s], o = i[s];
    Fs(s) && U(o) ? e[s] = o.map((r) => er(r, n)) : e[s] = er(o, n);
  }
  return e;
}
function Wg(i, t, e, s) {
  return t.$context || (t.$context = Object.assign(Object.create(i.getContext()), {
    element: t,
    get elements() {
      return e.filter((n) => n && n.options);
    },
    id: s.id,
    type: "annotation"
  }));
}
function Bg(i, t) {
  const e = t.length, s = i.length;
  if (s < e) {
    const n = e - s;
    i.splice(s, 0, ...new Array(n));
  } else s > e && i.splice(e, s - e);
  return i;
}
var zg = "3.1.0";
const Ut = /* @__PURE__ */ new Map(), ir = (i) => i.type !== "doughnutLabel", Hg = cn.concat(zi);
var Vg = {
  id: "annotation",
  version: zg,
  beforeRegister() {
    wf("chart.js", "4.0", he.version);
  },
  afterRegister() {
    he.register(Qt);
  },
  afterUnregister() {
    he.unregister(Qt);
  },
  beforeInit(i) {
    Ut.set(i, {
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
    const s = Ut.get(i), n = s.annotations = [];
    let o = e.annotations;
    V(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      V(a) && (a.id = r, n.push(a));
    }) : U(o) && n.push(...o), ng(n.filter(ir), i.scales);
  },
  afterDataLimits(i, t) {
    const e = Ut.get(i);
    sg(i, t.scale, e.annotations.filter(ir).filter((s) => s.display && s.adjustScaleRange));
  },
  afterUpdate(i, t, e) {
    const s = Ut.get(i);
    Jf(i, s, e), kg(i, s, e, t.mode), s.visibleElements = s.elements.filter((n) => !n.skip && n.options.display), ig(i, s, e);
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
    const s = Ut.get(i);
    Qf(s, t.event, e) && (t.changed = !0);
  },
  afterDestroy(i) {
    Ut.delete(i);
  },
  getAnnotations(i) {
    const t = Ut.get(i);
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
    _scriptable: (i) => !Hg.includes(i) && i !== "init",
    annotations: {
      _allKeys: !1,
      _fallback: (i, t) => `elements.${Qt[dn(t.type)].id}`
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
  const { ctx: s, chartArea: n } = i, o = Ut.get(i);
  e && si(s, n);
  const r = Gg(o.visibleElements, t).sort((a, l) => a.element.options.z - l.element.options.z);
  for (const a of r)
    jg(s, n, o, a);
  e && ni(s);
}
function Gg(i, t) {
  const e = [];
  for (const s of i)
    if (s.options.drawTime === t && e.push({ element: s, main: !0 }), s.elements && s.elements.length)
      for (const n of s.elements)
        n.options.display && n.options.drawTime === t && e.push({ element: n });
  return e;
}
function jg(i, t, e, s) {
  const n = s.element;
  s.main ? (Vo(e, n, "beforeDraw"), n.draw(i, t), Vo(e, n, "afterDraw")) : n.draw(i, t);
}
class R extends ur {
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
  _seriesIndex = new A();
  _label;
  _chartType = new A();
  _xAxisId = new A();
  _yAxisId = new A();
  _yAxisTitle = new A();
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
    return E.Literals.SERIES_SETTINGS;
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
        return this._seriesIndex !== new A();
      case R.LABEL:
        return this._label !== void 0;
      case R.CHART_TYPE:
        return this._chartType !== new A();
      case R.X_AXIS_ID:
        return this._xAxisId !== new A();
      case R.Y_AXIS_ID:
        return this._yAxisId !== new A();
      case R.Y_AXIS_TITLE:
        return this._yAxisTitle !== new A();
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
        this._seriesIndex = new A();
        return;
      case R.LABEL:
        this._label = void 0;
        return;
      case R.CHART_TYPE:
        this._chartType = new A();
        return;
      case R.X_AXIS_ID:
        this._xAxisId = new A();
        return;
      case R.Y_AXIS_ID:
        this._yAxisId = new A();
        return;
      case R.Y_AXIS_TITLE:
        this._yAxisTitle = new A();
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
class un extends Za {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new un()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(E.eINSTANCE);
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
function X(i) {
  const t = fr.INSTANCE.getEPackage(i);
  if (!t)
    throw new Error(`EPackage '${i}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ChartsettingsPackage.`);
  return t;
}
class E extends Ka {
  static eNAME = "chartsettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.chart";
  static eNS_PREFIX = "chartsettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new E(), this._instance.init()), this._instance;
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
    super(), this.setName(E.eNAME), this.setNsURI(E.eNS_URI), this.setNsPrefix(E.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    fr.INSTANCE.set(E.eNS_URI, this), this.setEFactoryInstance(un.eINSTANCE);
    const t = new mn();
    t.setName("SeriesSettings"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), E.Literals.SERIES_SETTINGS = t;
    const e = new j();
    e.setContainment(!1), e.setName("seriesIndex"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), E.Literals.SERIES_SETTINGS__SERIES_INDEX = e;
    const s = new j();
    s.setContainment(!1), s.setName("label"), s.setLowerBound(0), s.setUpperBound(1), t.getEStructuralFeatures().push(s), E.Literals.SERIES_SETTINGS__LABEL = s;
    const n = new j();
    n.setContainment(!1), n.setName("chartType"), n.setLowerBound(0), n.setUpperBound(1), t.getEStructuralFeatures().push(n), E.Literals.SERIES_SETTINGS__CHART_TYPE = n;
    const o = new j();
    o.setContainment(!1), o.setName("xAxisId"), o.setLowerBound(0), o.setUpperBound(1), t.getEStructuralFeatures().push(o), E.Literals.SERIES_SETTINGS__X_AXIS_ID = o;
    const r = new j();
    r.setContainment(!1), r.setName("yAxisId"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), E.Literals.SERIES_SETTINGS__Y_AXIS_ID = r;
    const a = new j();
    a.setContainment(!1), a.setName("yAxisTitle"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), E.Literals.SERIES_SETTINGS__Y_AXIS_TITLE = a;
    const l = new j();
    l.setContainment(!1), l.setName("borderColor"), l.setLowerBound(0), l.setUpperBound(1), t.getEStructuralFeatures().push(l), E.Literals.SERIES_SETTINGS__BORDER_COLOR = l;
    const c = new j();
    c.setContainment(!1), c.setName("backgroundColor"), c.setLowerBound(0), c.setUpperBound(1), t.getEStructuralFeatures().push(c), E.Literals.SERIES_SETTINGS__BACKGROUND_COLOR = c;
    const h = new j();
    h.setContainment(!1), h.setName("borderWidth"), h.setLowerBound(0), h.setUpperBound(1), t.getEStructuralFeatures().push(h), E.Literals.SERIES_SETTINGS__BORDER_WIDTH = h;
    const d = new j();
    d.setContainment(!1), d.setName("borderDash"), d.setLowerBound(0), d.setUpperBound(1), t.getEStructuralFeatures().push(d), E.Literals.SERIES_SETTINGS__BORDER_DASH = d;
    const u = new j();
    u.setContainment(!1), u.setName("fill"), u.setLowerBound(0), u.setUpperBound(1), t.getEStructuralFeatures().push(u), E.Literals.SERIES_SETTINGS__FILL = u;
    const f = new j();
    f.setContainment(!1), f.setName("showPoints"), f.setLowerBound(0), f.setUpperBound(1), t.getEStructuralFeatures().push(f), E.Literals.SERIES_SETTINGS__SHOW_POINTS = f;
    const g = new j();
    g.setContainment(!1), g.setName("pointColor"), g.setLowerBound(0), g.setUpperBound(1), t.getEStructuralFeatures().push(g), E.Literals.SERIES_SETTINGS__POINT_COLOR = g;
    const p = new j();
    p.setContainment(!1), p.setName("pointSize"), p.setLowerBound(0), p.setUpperBound(1), t.getEStructuralFeatures().push(p), E.Literals.SERIES_SETTINGS__POINT_SIZE = p;
    const b = new mn();
    b.setName("ChartSettings"), b.setAbstract(!1), b.setInterface(!1), this.getEClassifiers().push(b), b.setEPackage(this), E.Literals.CHART_SETTINGS = b;
    const _ = new j();
    _.setContainment(!0), _.setName("seriesSettings"), _.setLowerBound(0), _.setUpperBound(-1), b.getEStructuralFeatures().push(_), E.Literals.CHART_SETTINGS__SERIES_SETTINGS = _;
    const m = new j();
    m.setContainment(!1), m.setName("chartType"), m.setLowerBound(0), m.setUpperBound(1), b.getEStructuralFeatures().push(m), E.Literals.CHART_SETTINGS__CHART_TYPE = m;
    const T = new j();
    T.setContainment(!1), T.setName("barOrientation"), T.setLowerBound(0), T.setUpperBound(1), b.getEStructuralFeatures().push(T), E.Literals.CHART_SETTINGS__BAR_ORIENTATION = T;
    const x = new j();
    x.setContainment(!1), x.setName("stacked"), x.setLowerBound(0), x.setUpperBound(1), b.getEStructuralFeatures().push(x), E.Literals.CHART_SETTINGS__STACKED = x;
    const S = new j();
    S.setContainment(!1), S.setName("borderColor"), S.setLowerBound(0), S.setUpperBound(1), b.getEStructuralFeatures().push(S), E.Literals.CHART_SETTINGS__BORDER_COLOR = S;
    const v = new j();
    v.setContainment(!1), v.setName("borderWidth"), v.setLowerBound(0), v.setUpperBound(1), b.getEStructuralFeatures().push(v), E.Literals.CHART_SETTINGS__BORDER_WIDTH = v;
    const C = new j();
    C.setContainment(!1), C.setName("borderDash"), C.setLowerBound(0), C.setUpperBound(1), b.getEStructuralFeatures().push(C), E.Literals.CHART_SETTINGS__BORDER_DASH = C;
    const O = new j();
    O.setContainment(!1), O.setName("backgroundColor"), O.setLowerBound(0), O.setUpperBound(1), b.getEStructuralFeatures().push(O), E.Literals.CHART_SETTINGS__BACKGROUND_COLOR = O;
    const D = new j();
    D.setContainment(!1), D.setName("fill"), D.setLowerBound(0), D.setUpperBound(1), b.getEStructuralFeatures().push(D), E.Literals.CHART_SETTINGS__FILL = D;
    const F = new j();
    F.setContainment(!1), F.setName("showPoints"), F.setLowerBound(0), F.setUpperBound(1), b.getEStructuralFeatures().push(F), E.Literals.CHART_SETTINGS__SHOW_POINTS = F;
    const N = new j();
    N.setContainment(!1), N.setName("pointColor"), N.setLowerBound(0), N.setUpperBound(1), b.getEStructuralFeatures().push(N), E.Literals.CHART_SETTINGS__POINT_COLOR = N;
    const w = new j();
    w.setContainment(!1), w.setName("pointSize"), w.setLowerBound(0), w.setUpperBound(1), b.getEStructuralFeatures().push(w), E.Literals.CHART_SETTINGS__POINT_SIZE = w;
    const k = new j();
    k.setContainment(!1), k.setName("showHorizontalGrid"), k.setLowerBound(0), k.setUpperBound(1), b.getEStructuralFeatures().push(k), E.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID = k;
    const G = new j();
    G.setContainment(!1), G.setName("horizontalGridColor"), G.setLowerBound(0), G.setUpperBound(1), b.getEStructuralFeatures().push(G), E.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR = G;
    const M = new j();
    M.setContainment(!1), M.setName("horizontalGridWidth"), M.setLowerBound(0), M.setUpperBound(1), b.getEStructuralFeatures().push(M), E.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH = M;
    const B = new j();
    B.setContainment(!1), B.setName("showVerticalGrid"), B.setLowerBound(0), B.setUpperBound(1), b.getEStructuralFeatures().push(B), E.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID = B;
    const P = new j();
    P.setContainment(!1), P.setName("verticalGridColor"), P.setLowerBound(0), P.setUpperBound(1), b.getEStructuralFeatures().push(P), E.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR = P;
    const q = new j();
    q.setContainment(!1), q.setName("verticalGridWidth"), q.setLowerBound(0), q.setUpperBound(1), b.getEStructuralFeatures().push(q), E.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH = q;
    const K = new j();
    K.setContainment(!1), K.setName("xAxisTitle"), K.setLowerBound(0), K.setUpperBound(1), b.getEStructuralFeatures().push(K), E.Literals.CHART_SETTINGS__X_AXIS_TITLE = K;
    const ut = new j();
    ut.setContainment(!1), ut.setName("yAxisTitle"), ut.setLowerBound(0), ut.setUpperBound(1), b.getEStructuralFeatures().push(ut), E.Literals.CHART_SETTINGS__Y_AXIS_TITLE = ut;
    const gt = new j();
    gt.setContainment(!1), gt.setName("annotationsEditMode"), gt.setLowerBound(0), gt.setUpperBound(1), b.getEStructuralFeatures().push(gt), E.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE = gt;
    const ft = new ui();
    ft.setName("horizontalLines"), ft.setLowerBound(0), ft.setUpperBound(-1), b.getEStructuralFeatures().push(ft), E.Literals.CHART_SETTINGS__HORIZONTAL_LINES = ft;
    const pt = new ui();
    pt.setName("verticalLines"), pt.setLowerBound(0), pt.setUpperBound(-1), b.getEStructuralFeatures().push(pt), E.Literals.CHART_SETTINGS__VERTICAL_LINES = pt;
    const at = new ui();
    at.setName("horizontalBoxes"), at.setLowerBound(0), at.setUpperBound(-1), b.getEStructuralFeatures().push(at), E.Literals.CHART_SETTINGS__HORIZONTAL_BOXES = at;
    const it = new ui();
    it.setName("verticalBoxes"), it.setLowerBound(0), it.setUpperBound(-1), b.getEStructuralFeatures().push(it), E.Literals.CHART_SETTINGS__VERTICAL_BOXES = it;
    const lt = new j();
    lt.setContainment(!1), lt.setName("dateDisplayFormat"), lt.setLowerBound(0), lt.setUpperBound(1), b.getEStructuralFeatures().push(lt), E.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT = lt, E.Literals.SERIES_SETTINGS__SERIES_INDEX.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__LABEL.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__CHART_TYPE.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__X_AXIS_ID.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__Y_AXIS_ID.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__Y_AXIS_TITLE.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__BORDER_COLOR.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__BACKGROUND_COLOR.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__BORDER_WIDTH.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__BORDER_DASH.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__FILL.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__SHOW_POINTS.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__POINT_COLOR.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.SERIES_SETTINGS__POINT_SIZE.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__SERIES_SETTINGS.setEType(E.Literals.SERIES_SETTINGS), E.Literals.CHART_SETTINGS__CHART_TYPE.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__BAR_ORIENTATION.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__STACKED.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__BORDER_COLOR.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__BORDER_WIDTH.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__BORDER_DASH.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__BACKGROUND_COLOR.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__FILL.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__SHOW_POINTS.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__POINT_COLOR.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__POINT_SIZE.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__X_AXIS_TITLE.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__Y_AXIS_TITLE.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), E.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT.setEType(X("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class y extends ur {
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
  _chartType = new A();
  _barOrientation = new A();
  _stacked = new A();
  _borderColor = new A();
  _borderWidth = new A();
  _borderDash = new A();
  _backgroundColor = new A();
  _fill = new A();
  _showPoints = new A();
  _pointColor = new A();
  _pointSize = new A();
  _showHorizontalGrid = new A();
  _horizontalGridColor = new A();
  _horizontalGridWidth = new A();
  _showVerticalGrid = new A();
  _verticalGridColor = new A();
  _verticalGridWidth = new A();
  _xAxisTitle = new A();
  _yAxisTitle = new A();
  _annotationsEditMode = new A();
  _horizontalLines;
  _verticalLines;
  _horizontalBoxes;
  _verticalBoxes;
  _dateDisplayFormat = new A();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return E.Literals.CHART_SETTINGS;
  }
  // Getters and Setters
  get seriesSettings() {
    return this._seriesSettings || (this._seriesSettings = qa(this, this.eClass().getEStructuralFeature("seriesSettings"))), this._seriesSettings;
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
        return this._chartType !== new A();
      case y.BAR_ORIENTATION:
        return this._barOrientation !== new A();
      case y.STACKED:
        return this._stacked !== new A();
      case y.BORDER_COLOR:
        return this._borderColor !== new A();
      case y.BORDER_WIDTH:
        return this._borderWidth !== new A();
      case y.BORDER_DASH:
        return this._borderDash !== new A();
      case y.BACKGROUND_COLOR:
        return this._backgroundColor !== new A();
      case y.FILL:
        return this._fill !== new A();
      case y.SHOW_POINTS:
        return this._showPoints !== new A();
      case y.POINT_COLOR:
        return this._pointColor !== new A();
      case y.POINT_SIZE:
        return this._pointSize !== new A();
      case y.SHOW_HORIZONTAL_GRID:
        return this._showHorizontalGrid !== new A();
      case y.HORIZONTAL_GRID_COLOR:
        return this._horizontalGridColor !== new A();
      case y.HORIZONTAL_GRID_WIDTH:
        return this._horizontalGridWidth !== new A();
      case y.SHOW_VERTICAL_GRID:
        return this._showVerticalGrid !== new A();
      case y.VERTICAL_GRID_COLOR:
        return this._verticalGridColor !== new A();
      case y.VERTICAL_GRID_WIDTH:
        return this._verticalGridWidth !== new A();
      case y.X_AXIS_TITLE:
        return this._xAxisTitle !== new A();
      case y.Y_AXIS_TITLE:
        return this._yAxisTitle !== new A();
      case y.ANNOTATIONS_EDIT_MODE:
        return this._annotationsEditMode !== new A();
      case y.HORIZONTAL_LINES:
        return this._horizontalLines !== void 0 && !this._horizontalLines.isEmpty();
      case y.VERTICAL_LINES:
        return this._verticalLines !== void 0 && !this._verticalLines.isEmpty();
      case y.HORIZONTAL_BOXES:
        return this._horizontalBoxes !== void 0 && !this._horizontalBoxes.isEmpty();
      case y.VERTICAL_BOXES:
        return this._verticalBoxes !== void 0 && !this._verticalBoxes.isEmpty();
      case y.DATE_DISPLAY_FORMAT:
        return this._dateDisplayFormat !== new A();
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
        this._chartType = new A();
        return;
      case y.BAR_ORIENTATION:
        this._barOrientation = new A();
        return;
      case y.STACKED:
        this._stacked = new A();
        return;
      case y.BORDER_COLOR:
        this._borderColor = new A();
        return;
      case y.BORDER_WIDTH:
        this._borderWidth = new A();
        return;
      case y.BORDER_DASH:
        this._borderDash = new A();
        return;
      case y.BACKGROUND_COLOR:
        this._backgroundColor = new A();
        return;
      case y.FILL:
        this._fill = new A();
        return;
      case y.SHOW_POINTS:
        this._showPoints = new A();
        return;
      case y.POINT_COLOR:
        this._pointColor = new A();
        return;
      case y.POINT_SIZE:
        this._pointSize = new A();
        return;
      case y.SHOW_HORIZONTAL_GRID:
        this._showHorizontalGrid = new A();
        return;
      case y.HORIZONTAL_GRID_COLOR:
        this._horizontalGridColor = new A();
        return;
      case y.HORIZONTAL_GRID_WIDTH:
        this._horizontalGridWidth = new A();
        return;
      case y.SHOW_VERTICAL_GRID:
        this._showVerticalGrid = new A();
        return;
      case y.VERTICAL_GRID_COLOR:
        this._verticalGridColor = new A();
        return;
      case y.VERTICAL_GRID_WIDTH:
        this._verticalGridWidth = new A();
        return;
      case y.X_AXIS_TITLE:
        this._xAxisTitle = new A();
        return;
      case y.Y_AXIS_TITLE:
        this._yAxisTitle = new A();
        return;
      case y.ANNOTATIONS_EDIT_MODE:
        this._annotationsEditMode = new A();
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
        this._dateDisplayFormat = new A();
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
var Xg = Object.defineProperty, Yg = Object.getOwnPropertyDescriptor, li = (i, t, e, s) => {
  for (var n = Yg(t, e), o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(t, e, n) || n);
  return n && Xg(t, e, n), n;
};
class me extends Ma {
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
li([
  ei({ eventType: "chart.refresh" })
], me.prototype, "refresh");
li([
  ei({ eventType: "chart.zoomIn" })
], me.prototype, "zoomIn");
li([
  ei({ eventType: "chart.zoomOut" })
], me.prototype, "zoomOut");
li([
  ei({ eventType: "chart.resetZoom" })
], me.prototype, "resetZoom");
li([
  ei({ eventType: "chart.exportAsImage" })
], me.prototype, "exportAsImage");
const Ug = /* @__PURE__ */ Vi({
  __name: "ChartWidget",
  props: /* @__PURE__ */ Ha({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(i, { expose: t }) {
    const { wrapParameters: e } = Xa();
    he.register(Ru, Pu, Eu, Qd, Bu, Hu, Ui, Ud, ef, Fd, yu, Vg);
    const s = i, { datasourceId: n, id: o } = Va(s), r = cr(i, "configv"), a = new y(), l = Ve(null), c = bn(Ja.TINY_EMITTER), h = bn(ka), u = $a().params.pageid || "", f = Ve({ min: null, max: null }), g = Ve(null);
    class p extends me {
      refresh() {
        T(n.value, n.value);
      }
      zoomIn() {
        const k = f.value.min ?? 0, G = f.value.max ?? 100, M = G - k, B = (G + k) / 2;
        f.value = { min: B - M * 0.4, max: B + M * 0.4 }, S.value++;
      }
      zoomOut() {
        const k = f.value.min ?? 0, G = f.value.max ?? 100, M = G - k, B = (G + k) / 2;
        f.value = { min: B - M * 0.75, max: B + M * 0.75 }, S.value++;
      }
      resetZoom() {
        f.value = { min: null, max: null }, S.value++;
      }
      exportAsImage(k) {
        if (g.value && g.value.chart) {
          const G = g.value.chart, M = k || "image/png", B = G.toBase64Image(M), P = document.createElement("a");
          P.href = B, P.download = `chart.${M.split("/")[1] || "png"}`, P.click();
        }
      }
    }
    const b = new p();
    t(b), ar(() => {
      o?.value && h.unregisterInstance(o.value);
    });
    const _ = () => {
      o?.value && c.emit("widget:ChartWidget:click", {
        type: "widget:ChartWidget:click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, m = () => {
      o?.value && c.emit("widget:ChartWidget:right_click", {
        type: "widget:ChartWidget:right_click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    };
    Bs(() => {
      if (o?.value && h.registerInstance(o.value, b, "ChartWidget", u), r.value)
        for (const w of Object.keys(a))
          (!(w in r.value) || r.value[w] === void 0) && (r.value[w] = a[w]);
    }), Ss(n, (w, k) => {
      T(w, k);
    });
    const { update: T } = Ya(n, "ChartData", l), x = tt(() => {
      if (O().some(
        (M) => M.chartType?.value && M.chartType.value !== r.value?.chartType?.value
      ))
        return _s;
      const k = r.value?.chartType?.value ?? "bar";
      return {
        bar: _s,
        line: gf,
        radar: mf,
        pie: pf,
        doughnut: ff,
        polarArea: bf
      }[k] || _s;
    }), S = Ve(0);
    Ss(() => r.value, (w) => {
      S.value++;
    }, { deep: !0 });
    function v(...w) {
      return w.find((k) => k != null && k !== "");
    }
    function C(w, k) {
      const G = w;
      return typeof G?.get == "function" ? G.get(k) : G?.[k];
    }
    function O() {
      const w = r.value?.seriesSettings;
      return w ? typeof w.toArray == "function" ? w.toArray() : Array.isArray(w) ? w : [] : [];
    }
    const D = e({
      chartType: tt(() => r.value?.chartType?.value ?? "bar"),
      borderColor: tt(() => r.value?.borderColor?.value ?? "rgba(75, 192, 192, 1)"),
      backgroundColor: tt(() => r.value?.backgroundColor?.value ?? "rgba(75, 192, 192, 0.2)"),
      borderWidth: tt(() => r.value?.borderWidth?.value ?? 2),
      borderDash: tt(() => r.value?.borderDash?.value ?? []),
      fill: tt(() => r.value?.fill?.value ?? !1),
      showPoints: tt(() => r.value?.showPoints?.value ?? !0),
      pointColor: tt(() => r.value?.pointColor?.value ?? "rgba(75, 192, 192, 1)"),
      pointSize: tt(() => r.value?.pointSize?.value ?? 3),
      barOrientation: tt(() => r.value?.barOrientation?.value ?? "vertical"),
      stacked: tt(() => r.value?.stacked?.value ?? !1),
      showHorizontalGrid: tt(() => r.value?.showHorizontalGrid?.value ?? !0),
      horizontalGridColor: tt(() => r.value?.horizontalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      horizontalGridWidth: tt(() => r.value?.horizontalGridWidth?.value ?? 1),
      showVerticalGrid: tt(() => r.value?.showVerticalGrid?.value ?? !0),
      verticalGridColor: tt(() => r.value?.verticalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      verticalGridWidth: tt(() => r.value?.verticalGridWidth?.value ?? 1),
      dateDisplayFormat: tt(() => r.value?.dateDisplayFormat?.value ?? "dd.MM.yyyy HH:mm"),
      annotationsEditMode: tt(() => r.value?.annotationsEditMode?.value ?? !1)
    });
    console.log(D.backgroundColor.value);
    const F = tt(() => {
      if (!l.value) return null;
      const w = JSON.parse(JSON.stringify(l.value)), k = O(), G = k.length > 0;
      return w.datasets && Array.isArray(w.datasets) && (w.datasets = w.datasets.map((M, B) => {
        const P = k.find((lt) => {
          const Nt = lt.seriesIndex?.value;
          return Nt != null && Nt !== "" && Number(Nt) === B;
        }), q = P?.chartType?.value ?? D.chartType?.value ?? "bar", K = P?.xAxisId?.value, ut = P?.yAxisId?.value, gt = v(
          P?.borderColor?.value,
          r.value?.borderColor?.value,
          M.borderColor
        ), ft = v(
          P?.backgroundColor?.value,
          r.value?.backgroundColor?.value,
          M.backgroundColor
        ), pt = v(
          P?.borderWidth?.value,
          r.value?.borderWidth?.value,
          M.borderWidth
        ), at = v(
          P?.borderDash?.value,
          r.value?.borderDash?.value,
          M.borderDash
        );
        let it = {
          ...M,
          borderColor: gt,
          backgroundColor: ft,
          borderWidth: pt
        };
        if (G && (it.type = q, K && (it.xAxisID = K), ut && (it.yAxisID = ut), P?.label?.value && (it.label = (P?.label).value)), q === "line") {
          const lt = P?.showPoints?.value ?? r.value?.showPoints?.value ?? !0, Nt = P?.fill?.value ?? r.value?.fill?.value ?? !1, I = v(
            P?.pointColor?.value,
            r.value?.pointColor?.value,
            M.pointBackgroundColor
          ), Q = P?.pointSize?.value ?? r.value?.pointSize?.value ?? 3;
          it = {
            ...it,
            borderDash: at,
            fill: Nt ? "origin" : !1,
            // Point settings
            pointRadius: lt ? Q : 0,
            pointBackgroundColor: I,
            pointBorderColor: I,
            pointHoverRadius: lt ? Q + 2 : 0
          };
        } else q === "bar" ? it = {
          ...it,
          borderDash: at
        } : it = {
          ...it
        };
        return it;
      })), w;
    }), N = tt(() => {
      if (!r.value)
        return {
          responsive: !0
        };
      const w = D.annotationsEditMode.value, k = {};
      r.value.horizontalLines?.forEach((I, Q) => {
        k[`hline_${Q}`] = {
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
          draggable: w,
          borderDash: w ? [5, 5] : void 0,
          enter({ element: z }) {
            w && (z.options.borderWidth = I.width + 1);
          },
          leave({ element: z }) {
            w && (z.options.borderWidth = I.width);
          },
          drag({ element: z }) {
            w && r.value.horizontalLines && (C(r.value.horizontalLines, Q).value = z.y);
          }
        };
      }), r.value.verticalLines?.forEach((I, Q) => {
        k[`vline_${Q}`] = {
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
          draggable: w,
          borderDash: w ? [5, 5] : void 0,
          enter({ element: z }) {
            w && (z.options.borderWidth = I.width + 1);
          },
          leave({ element: z }) {
            w && (z.options.borderWidth = I.width);
          },
          drag({ element: z }) {
            w && r.value.verticalLines && (C(r.value.verticalLines, Q).value = z.x);
          }
        };
      }), r.value.horizontalBoxes?.forEach((I, Q) => {
        k[`hbox_${Q}`] = {
          type: "box",
          yMin: I.yMin,
          yMax: I.yMax,
          backgroundColor: I.color,
          borderWidth: w ? 2 : 0,
          borderColor: w ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: w ? [5, 5] : void 0,
          label: I.label ? {
            display: !0,
            content: I.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: w,
          enter({ element: z }) {
            w && (z.options.borderWidth = 3);
          },
          leave({ element: z }) {
            w && (z.options.borderWidth = 2);
          },
          drag({ element: z }) {
            if (w && r.value.horizontalBoxes) {
              const St = I.yMax - I.yMin;
              C(r.value.horizontalBoxes, Q).yMin = z.y - St / 2, C(r.value.horizontalBoxes, Q).yMax = z.y + St / 2;
            }
          }
        };
      }), r.value.verticalBoxes?.forEach((I, Q) => {
        k[`vbox_${Q}`] = {
          type: "box",
          xMin: I.xMin,
          xMax: I.xMax,
          backgroundColor: I.color,
          borderWidth: w ? 2 : 0,
          borderColor: w ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: w ? [5, 5] : void 0,
          label: I.label ? {
            display: !0,
            content: I.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: w,
          enter({ element: z }) {
            w && (z.options.borderWidth = 3);
          },
          leave({ element: z }) {
            w && (z.options.borderWidth = 2);
          },
          drag({ element: z }) {
            if (w && r.value.verticalBoxes) {
              const St = I.xMax - I.xMin;
              C(r.value.verticalBoxes, Q).xMin = z.x - St / 2, C(r.value.verticalBoxes, Q).xMax = z.x + St / 2;
            }
          }
        };
      });
      const G = (I) => {
        if (typeof I != "string") return !1;
        const Q = /^\d{4}-\d{2}-\d{2}(T|\s)/, z = /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}/;
        return Q.test(I) || z.test(I);
      }, M = (I, Q) => {
        if (!I || !G(I)) return I;
        const z = new Date(I);
        if (isNaN(z.getTime())) return I;
        const St = (_e) => _e.toString().padStart(2, "0"), ci = {
          yyyy: z.getFullYear().toString(),
          yy: z.getFullYear().toString().slice(-2),
          MM: St(z.getMonth() + 1),
          M: (z.getMonth() + 1).toString(),
          dd: St(z.getDate()),
          d: z.getDate().toString(),
          HH: St(z.getHours()),
          H: z.getHours().toString(),
          mm: St(z.getMinutes()),
          m: z.getMinutes().toString(),
          ss: St(z.getSeconds()),
          s: z.getSeconds().toString()
        };
        let ss = Q;
        return Object.keys(ci).sort((_e, La) => La.length - _e.length).forEach((_e) => {
          ss = ss.replace(new RegExp(_e, "g"), ci[_e]);
        }), ss;
      }, B = D.dateDisplayFormat.value, P = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set(), K = r.value?.seriesSettings && r.value.seriesSettings.length > 0, ut = {};
      K && (P.add("x"), q.add("y"), r.value.seriesSettings?.forEach((I) => {
        I?.xAxisId?.value && P.add(I.xAxisId.value), I.yAxisId?.value && (q.add(I.yAxisId.value), I.yAxisTitle?.value && (ut[I.yAxisId.value] = I.yAxisTitle.value));
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
            callback: function(I, Q, z) {
              const St = this.getLabelForValue(I);
              return M(St, B);
            }
          }
        }
      };
      P.size > 1 && P.forEach((I) => {
        I !== "x" && (at[I] = {
          type: "category",
          // Explicitly set the axis type
          grid: {
            display: D.showVerticalGrid.value,
            color: D.verticalGridColor.value,
            lineWidth: D.verticalGridWidth.value
          },
          ticks: {
            callback: function(Q, z, St) {
              const ci = this.getLabelForValue(Q);
              return M(ci, B);
            }
          },
          // Position secondary axes at the top
          position: "top"
        });
      }), q.size > 1 && q.forEach((I) => {
        if (I !== "y") {
          const Q = ut[I] ?? "";
          at[I] = {
            type: "linear",
            // Explicitly set the axis type
            title: {
              display: !!Q,
              text: Q
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
      const Nt = {
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
            annotations: k
          }
        }
      };
      return console.log("Chart options:", Nt), Nt;
    });
    return (w, k) => (Ct(), Lt("div", {
      class: "w-full h-full",
      onClick: _,
      onContextmenu: Ga(m, ["prevent"])
    }, [
      F.value && N.value ? (Ct(), hr(ja(x.value), {
        key: S.value,
        id: "my-chart-id",
        ref_key: "chartRef",
        ref: g,
        options: N.value,
        data: F.value
      }, null, 8, ["options", "data"])) : dr("", !0)
    ], 32));
  }
}), $g = ["data-section"], Zg = { class: "settings-container" }, Kg = { class: "settings-block" }, qg = { class: "settings-block" }, Jg = { class: "block__head" }, Qg = { class: "entry__head" }, tp = { class: "settings-block" }, ep = { class: "block__head" }, ip = { class: "entry__head" }, sp = { class: "settings-block" }, np = { class: "block__head" }, op = { class: "entry__head" }, rp = { class: "settings-block" }, ap = { class: "block__head" }, lp = { class: "entry__head" }, cp = /* @__PURE__ */ Vi({
  __name: "ChartWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const { t } = Ua("chart"), e = cr(i, "modelValue");
    function s(m, T) {
      typeof m?.add == "function" ? m.add(T) : Array.isArray(m) && m.push(T);
    }
    function n(m) {
      return typeof m?.toArray == "function" ? m.toArray() : Array.isArray(m) ? m : [];
    }
    const o = tt(() => n(e.value?.horizontalLines)), r = tt(() => n(e.value?.verticalLines)), a = tt(() => n(e.value?.horizontalBoxes)), l = tt(() => n(e.value?.verticalBoxes));
    function c(m, T) {
      typeof m?.removeAt == "function" ? m.removeAt(T) : Array.isArray(m) && m.splice(T, 1);
    }
    const h = () => {
      e.value.horizontalLines || (e.value.horizontalLines = []), s(e.value.horizontalLines, {
        value: 0,
        color: "rgba(255, 0, 0, 0.8)",
        width: 2,
        label: "Line"
      });
    }, d = (m) => {
      c(e.value.horizontalLines, m);
    }, u = () => {
      e.value.verticalLines || (e.value.verticalLines = []), s(e.value.verticalLines, {
        value: 0,
        color: "rgba(0, 0, 255, 0.8)",
        width: 2,
        label: "Line"
      });
    }, f = (m) => {
      c(e.value.verticalLines, m);
    }, g = () => {
      e.value.horizontalBoxes || (e.value.horizontalBoxes = []), s(e.value.horizontalBoxes, {
        yMin: 0,
        yMax: 10,
        color: "rgba(255, 0, 0, 0.1)",
        label: "Range"
      });
    }, p = (m) => {
      c(e.value.horizontalBoxes, m);
    }, b = () => {
      e.value.verticalBoxes || (e.value.verticalBoxes = []), s(e.value.verticalBoxes, {
        xMin: 0,
        xMax: 10,
        color: "rgba(0, 0, 255, 0.1)",
        label: "Range"
      });
    }, _ = (m) => {
      c(e.value.verticalBoxes, m);
    };
    return Bs(() => {
      e.value.seriesSettings || (e.value.seriesSettings = []), e.value.seriesSettings.forEach((m) => {
        m.label || (m.label = new A("")), m.borderColor || (m.borderColor = new A("")), m.backgroundColor || (m.backgroundColor = new A("")), m.borderWidth || (m.borderWidth = new A(2)), m.borderDash || (m.borderDash = new A([])), m.fill || (m.fill = new A(!1)), m.showPoints || (m.showPoints = new A(!0)), m.pointColor || (m.pointColor = new A("")), m.pointSize || (m.pointSize = new A(3));
      });
    }), (m, T) => (Ct(), Lt("section", {
      class: "settings-section",
      "data-section-id": "referenceLines",
      "data-section": L(t)("Reference.section")
    }, [
      ot("div", Zg, [
        ot("div", Kg, [
          e.value.annotationsEditMode ? (Ct(), hr(L(Qa), {
            key: 0,
            label: L(t)("Reference.dragDrop"),
            modelValue: e.value.annotationsEditMode.value,
            "onUpdate:modelValue": T[0] || (T[0] = (x) => e.value.annotationsEditMode.value = x)
          }, null, 8, ["label", "modelValue"])) : dr("", !0)
        ]),
        ot("div", qg, [
          ot("div", Jg, [
            ot("h3", null, bt(L(t)("Reference.hLines")), 1),
            st(L(Yt), {
              size: "sm",
              onClick: h
            }, {
              default: jt(() => [
                Xt(bt(L(t)("Reference.addLine")), 1)
              ]),
              _: 1
            })
          ]),
          (Ct(!0), Lt(hi, null, di(o.value, (x, S) => (Ct(), Lt("div", {
            key: `hline_${S}`,
            class: "entry"
          }, [
            ot("div", Qg, [
              ot("strong", null, bt(L(t)("Reference.line", { n: S + 1 })), 1),
              st(L(Yt), {
                size: "sm",
                intent: "danger",
                onClick: (v) => d(S)
              }, {
                default: jt(() => [
                  Xt(bt(L(t)("Reference.remove")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            st(L(At), {
              label: L(t)("Reference.yValue"),
              modelValue: x.value,
              "onUpdate:modelValue": (v) => x.value = v,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(gi), {
              label: L(t)("Reference.color"),
              modelValue: x.color,
              "onUpdate:modelValue": (v) => x.color = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(At), {
              label: L(t)("Reference.lineWidth"),
              modelValue: x.width,
              "onUpdate:modelValue": (v) => x.width = v,
              modelModifiers: { number: !0 },
              type: "number",
              min: 1,
              max: 10
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(At), {
              label: L(t)("Reference.label"),
              modelValue: x.label,
              "onUpdate:modelValue": (v) => x.label = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
          ]))), 128))
        ]),
        ot("div", tp, [
          ot("div", ep, [
            ot("h3", null, bt(L(t)("Reference.vLines")), 1),
            st(L(Yt), {
              size: "sm",
              onClick: u
            }, {
              default: jt(() => [
                Xt(bt(L(t)("Reference.addLine")), 1)
              ]),
              _: 1
            })
          ]),
          (Ct(!0), Lt(hi, null, di(r.value, (x, S) => (Ct(), Lt("div", {
            key: `vline_${S}`,
            class: "entry"
          }, [
            ot("div", ip, [
              ot("strong", null, bt(L(t)("Reference.line", { n: S + 1 })), 1),
              st(L(Yt), {
                size: "sm",
                intent: "danger",
                onClick: (v) => f(S)
              }, {
                default: jt(() => [
                  Xt(bt(L(t)("Reference.remove")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            st(L(At), {
              label: L(t)("Reference.xValue"),
              modelValue: x.value,
              "onUpdate:modelValue": (v) => x.value = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(gi), {
              label: L(t)("Reference.color"),
              modelValue: x.color,
              "onUpdate:modelValue": (v) => x.color = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(At), {
              label: L(t)("Reference.lineWidth"),
              modelValue: x.width,
              "onUpdate:modelValue": (v) => x.width = v,
              modelModifiers: { number: !0 },
              type: "number",
              min: 1,
              max: 10
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(At), {
              label: L(t)("Reference.label"),
              modelValue: x.label,
              "onUpdate:modelValue": (v) => x.label = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
          ]))), 128))
        ]),
        ot("div", sp, [
          ot("div", np, [
            ot("h3", null, bt(L(t)("Reference.hAreas")), 1),
            st(L(Yt), {
              size: "sm",
              onClick: g
            }, {
              default: jt(() => [
                Xt(bt(L(t)("Reference.addArea")), 1)
              ]),
              _: 1
            })
          ]),
          (Ct(!0), Lt(hi, null, di(a.value, (x, S) => (Ct(), Lt("div", {
            key: `hbox_${S}`,
            class: "entry"
          }, [
            ot("div", op, [
              ot("strong", null, bt(L(t)("Reference.area", { n: S + 1 })), 1),
              st(L(Yt), {
                size: "sm",
                intent: "danger",
                onClick: (v) => p(S)
              }, {
                default: jt(() => [
                  Xt(bt(L(t)("Reference.remove")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            st(L(At), {
              label: L(t)("Reference.yMin"),
              modelValue: x.yMin,
              "onUpdate:modelValue": (v) => x.yMin = v,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(At), {
              label: L(t)("Reference.yMax"),
              modelValue: x.yMax,
              "onUpdate:modelValue": (v) => x.yMax = v,
              modelModifiers: { number: !0 },
              type: "number"
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(gi), {
              label: L(t)("Reference.fillColor"),
              modelValue: x.color,
              "onUpdate:modelValue": (v) => x.color = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(At), {
              label: L(t)("Reference.label"),
              modelValue: x.label,
              "onUpdate:modelValue": (v) => x.label = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
          ]))), 128))
        ]),
        ot("div", rp, [
          ot("div", ap, [
            ot("h3", null, bt(L(t)("Reference.vAreas")), 1),
            st(L(Yt), {
              size: "sm",
              onClick: b
            }, {
              default: jt(() => [
                Xt(bt(L(t)("Reference.addArea")), 1)
              ]),
              _: 1
            })
          ]),
          (Ct(!0), Lt(hi, null, di(l.value, (x, S) => (Ct(), Lt("div", {
            key: `vbox_${S}`,
            class: "entry"
          }, [
            ot("div", lp, [
              ot("strong", null, bt(L(t)("Reference.area", { n: S + 1 })), 1),
              st(L(Yt), {
                size: "sm",
                intent: "danger",
                onClick: (v) => _(S)
              }, {
                default: jt(() => [
                  Xt(bt(L(t)("Reference.remove")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            st(L(At), {
              label: L(t)("Reference.xMin"),
              modelValue: x.xMin,
              "onUpdate:modelValue": (v) => x.xMin = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(At), {
              label: L(t)("Reference.xMax"),
              modelValue: x.xMax,
              "onUpdate:modelValue": (v) => x.xMax = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(gi), {
              label: L(t)("Reference.fillColor"),
              modelValue: x.color,
              "onUpdate:modelValue": (v) => x.color = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]),
            st(L(At), {
              label: L(t)("Reference.label"),
              modelValue: x.label,
              "onUpdate:modelValue": (v) => x.label = v
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
          ]))), 128))
        ])
      ])
    ], 8, $g));
  }
}), hp = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, dp = /* @__PURE__ */ hp(cp, [["__scopeId", "data-v-a6e713d8"]]), up = `<?xml version="1.0" encoding="UTF-8"?>
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

    <fields xsi:type="uimodel:GroupWidget" name="typeGroup" layout="VERTICAL" label="chart:Form.typeGroup">
      <fields xsi:type="uimodel:SelectWidget"
          name="chartType"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/chartType"
          label="chart:Form.chartType">
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
          label="chart:Form.barOrientation">
        <values>vertical</values>
        <values>horizontal</values>
        <visibilityCondition language="JS" body="self.chartType?.value === 'bar'"/>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="stacked"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/stacked"
          label="chart:Form.stacked"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="seriesGroup" layout="VERTICAL" label="chart:Form.seriesGroup">
      <!-- A list: each entry is a form of its own, built from SeriesSettings.
           What a series does not set falls back to the values below. -->
      <fields xsi:type="uimodel:InputWidget"
          name="seriesSettings"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/seriesSettings"
          label="chart:Form.seriesSettings"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="lineGroup" layout="VERTICAL" label="chart:Form.lineGroup">
      <fields xsi:type="uimodel:InputWidget"
          name="borderColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/borderColor"
          label="chart:Form.borderColor"
          placeholder="sichtbar ab Stärke 1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="borderWidth"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/borderWidth"
          label="chart:Form.borderWidth" min="0" max="20" step="1"/>
      <fields xsi:type="uimodel:SelectWidget"
          name="borderDash"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/borderDash"
          label="chart:Form.borderDash">
        <values>durchgezogen</values>
        <values>5,5</values>
        <values>10,5</values>
        <values>2,2</values>
        <values>15,5,5,5</values>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="fill"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/fill"
          label="chart:Form.fill"/>
      <!-- Always shown: this is what a bar, a pie or a doughnut is painted
           with, so hiding it behind "fill" made the colour unreachable for
           every chart type that is not a line. -->
      <fields xsi:type="uimodel:InputWidget"
          name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/backgroundColor"
          label="chart:Form.backgroundColor"
          placeholder="Balken, Torte, gefüllte Fläche"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="pointGroup" layout="VERTICAL" label="chart:Form.pointGroup">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="showPoints"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/showPoints"
          label="chart:Form.showPoints"/>
      <fields xsi:type="uimodel:InputWidget"
          name="pointColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/pointColor"
          label="chart:Form.pointColor">
        <visibilityCondition language="JS" body="self.showPoints?.value === true || self.showPoints?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:NumberWidget"
          name="pointSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/pointSize"
          label="chart:Form.pointSize" min="0" max="20" step="1">
        <visibilityCondition language="JS" body="self.showPoints?.value === true || self.showPoints?.value === 'true'"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="gridGroup" layout="VERTICAL" label="chart:Form.gridGroup">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="showHorizontalGrid"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/showHorizontalGrid"
          label="chart:Form.showHorizontalGrid"/>
      <fields xsi:type="uimodel:InputWidget"
          name="horizontalGridColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/horizontalGridColor"
          label="chart:Form.horizontalGridColor">
        <visibilityCondition language="JS" body="self.showHorizontalGrid?.value === true || self.showHorizontalGrid?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:InputWidget"
          name="horizontalGridWidth"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/horizontalGridWidth"
          label="chart:Form.horizontalGridWidth">
        <visibilityCondition language="JS" body="self.showHorizontalGrid?.value === true || self.showHorizontalGrid?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="showVerticalGrid"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/showVerticalGrid"
          label="chart:Form.showVerticalGrid"/>
      <fields xsi:type="uimodel:InputWidget"
          name="verticalGridColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/verticalGridColor"
          label="chart:Form.verticalGridColor">
        <visibilityCondition language="JS" body="self.showVerticalGrid?.value === true || self.showVerticalGrid?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:InputWidget"
          name="verticalGridWidth"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/verticalGridWidth"
          label="chart:Form.verticalGridWidth">
        <visibilityCondition language="JS" body="self.showVerticalGrid?.value === true || self.showVerticalGrid?.value === 'true'"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="axisGroup" layout="VERTICAL" label="chart:Form.axisGroup">
      <fields xsi:type="uimodel:InputWidget"
          name="xAxisTitle"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/xAxisTitle"
          label="chart:Form.xAxisTitle"/>
      <fields xsi:type="uimodel:InputWidget"
          name="yAxisTitle"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/yAxisTitle"
          label="chart:Form.yAxisTitle"/>
      <fields xsi:type="uimodel:SelectWidget"
          name="dateDisplayFormat"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//ChartSettings/dateDisplayFormat"
          label="chart:Form.dateDisplayFormat">
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
`, fp = `<?xml version="1.0" encoding="UTF-8"?>
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

    <fields xsi:type="uimodel:GroupWidget" name="seriesIdentity" layout="VERTICAL" label="chart:FormSeries.seriesIdentity">
      <fields xsi:type="uimodel:InputWidget"
          name="label"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/label"
          label="chart:FormSeries.label"
          placeholder="Wie im Diagramm benannt"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="seriesIndex"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/seriesIndex"
          label="chart:FormSeries.seriesIndex" min="0" step="1"/>
      <fields xsi:type="uimodel:SelectWidget"
          name="chartType"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/chartType"
          label="chart:FormSeries.chartType">
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

    <fields xsi:type="uimodel:GroupWidget" name="seriesAxes" layout="VERTICAL" label="chart:FormSeries.seriesAxes">
      <fields xsi:type="uimodel:InputWidget"
          name="xAxisId"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/xAxisId"
          label="chart:FormSeries.xAxisId"
          placeholder="x"/>
      <fields xsi:type="uimodel:InputWidget"
          name="yAxisId"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/yAxisId"
          label="chart:FormSeries.yAxisId"
          placeholder="y"/>
      <fields xsi:type="uimodel:InputWidget"
          name="yAxisTitle"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/yAxisTitle"
          label="chart:FormSeries.yAxisTitle"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="seriesLine" layout="VERTICAL" label="chart:FormSeries.seriesLine">
      <fields xsi:type="uimodel:InputWidget"
          name="borderColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/borderColor"
          label="chart:FormSeries.borderColor"
          placeholder="sichtbar ab Stärke 1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="borderWidth"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/borderWidth"
          label="chart:FormSeries.borderWidth" min="0" max="20" step="1"/>
      <fields xsi:type="uimodel:SelectWidget"
          name="borderDash"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/borderDash"
          label="chart:FormSeries.borderDash">
        <values>durchgezogen</values>
        <values>5,5</values>
        <values>10,5</values>
        <values>2,2</values>
        <values>15,5,5,5</values>
      </fields>
      <fields xsi:type="uimodel:CheckboxWidget"
          name="fill"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/fill"
          label="chart:FormSeries.fill"/>
      <!-- Always shown: see the note in the chart's own form. -->
      <fields xsi:type="uimodel:InputWidget"
          name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/backgroundColor"
          label="chart:FormSeries.backgroundColor"
          placeholder="Balken, Torte, gefüllte Fläche"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="seriesPoints" layout="VERTICAL" label="chart:FormSeries.seriesPoints">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="showPoints"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/showPoints"
          label="chart:FormSeries.showPoints"/>
      <fields xsi:type="uimodel:InputWidget"
          name="pointColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/pointColor"
          label="chart:FormSeries.pointColor">
        <visibilityCondition language="JS" body="self.showPoints?.value === true || self.showPoints?.value === 'true'"/>
      </fields>
      <fields xsi:type="uimodel:NumberWidget"
          name="pointSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.chart#//SeriesSettings/pointSize"
          label="chart:FormSeries.pointSize" min="0" max="20" step="1">
        <visibilityCondition language="JS" body="self.showPoints?.value === true || self.showPoints?.value === 'true'"/>
      </fields>
    </fields>

  </components>
</uimodel:UIModel>
`, gp = [
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
], pp = { name: "Diagramm" }, bp = { section: "Referenzlinien und -flächen", dragDrop: "Ziehen erlauben (Markierungen im Diagramm verschieben)", hLines: "Waagerechte Linien (Y-Achse)", vLines: "Senkrechte Linien (X-Achse)", hAreas: "Waagerechte Flächen (Y-Bereiche)", vAreas: "Senkrechte Flächen (X-Bereiche)", addLine: "Linie hinzufügen", addArea: "Fläche hinzufügen", line: "Linie {{n}}", area: "Fläche {{n}}", remove: "Entfernen", color: "Farbe", fillColor: "Füllfarbe", lineWidth: "Linienbreite (px)", label: "Beschriftung (optional)", yValue: "Y-Wert", xValue: "X-Wert", yMin: "Y-Minimum", yMax: "Y-Maximum", xMin: "X-Minimum", xMax: "X-Maximum" }, mp = { seriesIdentity: "Reihe", label: "Beschriftung", seriesIndex: "Reihennummer", chartType: "Typ", seriesAxes: "Achsen", xAxisId: "X-Achse", yAxisId: "Y-Achse", yAxisTitle: "Titel der Y-Achse", seriesLine: "Linie", borderColor: "Linien- und Randfarbe", borderWidth: "Stärke", borderDash: "Strichmuster", fill: "Fläche unter der Linie füllen", backgroundColor: "Flächenfarbe", seriesPoints: "Punkte", showPoints: "Punkte zeigen", pointColor: "Farbe", pointSize: "Größe" }, _p = { typeGroup: "Diagrammtyp", chartType: "Typ", barOrientation: "Balkenausrichtung", stacked: "Gestapelt", seriesGroup: "Datenreihen", seriesSettings: "Datenreihen", lineGroup: "Linie", borderColor: "Linien- und Randfarbe", borderWidth: "Linienstärke", borderDash: "Strichmuster", fill: "Fläche unter der Linie füllen", backgroundColor: "Flächenfarbe", pointGroup: "Punkte", showPoints: "Punkte zeigen", pointColor: "Farbe", pointSize: "Punktgröße", gridGroup: "Gitterlinien", showHorizontalGrid: "Waagerechte Linien", horizontalGridColor: "Farbe waagerecht", horizontalGridWidth: "Stärke waagerecht", showVerticalGrid: "Senkrechte Linien", verticalGridColor: "Farbe senkrecht", verticalGridWidth: "Stärke senkrecht", axisGroup: "Achsen", xAxisTitle: "Titel X", yAxisTitle: "Titel Y", dateDisplayFormat: "Datumsformat" }, yp = {
  Widget: pp,
  Reference: bp,
  FormSeries: mp,
  Form: _p
}, xp = { name: "Chart" }, Sp = { section: "Reference lines & areas", dragDrop: "Enable drag & drop (move annotations in the chart)", hLines: "Horizontal lines (Y axis)", vLines: "Vertical lines (X axis)", hAreas: "Horizontal areas (Y axis ranges)", vAreas: "Vertical areas (X axis ranges)", addLine: "Add line", addArea: "Add area", line: "Line {{n}}", area: "Area {{n}}", remove: "Remove", color: "Colour", fillColor: "Fill colour", lineWidth: "Line width (px)", label: "Label (optional)", yValue: "Y value", xValue: "X value", yMin: "Y min", yMax: "Y max", xMin: "X min", xMax: "X max" }, Tp = { seriesIdentity: "Series", label: "Label", seriesIndex: "Series number", chartType: "Type", seriesAxes: "Axes", xAxisId: "X axis", yAxisId: "Y axis", yAxisTitle: "Y axis title", seriesLine: "Line", borderColor: "Line and border colour", borderWidth: "Width", borderDash: "Dash pattern", fill: "Fill the area under the line", backgroundColor: "Area colour", seriesPoints: "Points", showPoints: "Show points", pointColor: "Colour", pointSize: "Size" }, vp = { typeGroup: "Chart type", chartType: "Type", barOrientation: "Bar orientation", stacked: "Stacked", seriesGroup: "Series", seriesSettings: "Series", lineGroup: "Line", borderColor: "Line and border colour", borderWidth: "Line width", borderDash: "Dash pattern", fill: "Fill the area under the line", backgroundColor: "Area colour", pointGroup: "Points", showPoints: "Show points", pointColor: "Colour", pointSize: "Point size", gridGroup: "Grid lines", showHorizontalGrid: "Horizontal lines", horizontalGridColor: "Horizontal colour", horizontalGridWidth: "Horizontal width", showVerticalGrid: "Vertical lines", verticalGridColor: "Vertical colour", verticalGridWidth: "Vertical width", axisGroup: "Axes", xAxisTitle: "X title", yAxisTitle: "Y title", dateDisplayFormat: "Date format" }, wp = {
  Widget: xp,
  Reference: Sp,
  FormSeries: Tp,
  Form: vp
};
var Ep = Object.getOwnPropertyDescriptor, Ap = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Ep(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(n) || n);
  return n;
};
const Ia = "chart";
let sr = class {
  namespace = Ia;
  resources = {
    de: yp,
    en: wp
  };
};
sr = Ap([
  or({
    service: ["Translations"],
    properties: { "i18n.namespace": Ia }
  })
], sr);
var Rp = Object.defineProperty, Cp = Object.getOwnPropertyDescriptor, fn = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Cp(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && Rp(t, e, n), n;
}, nr = (i, t) => (e, s) => t(e, s, i);
E.eINSTANCE;
const Te = "ChartWidget";
let Hi = class {
  constructor(i, t) {
    this.events = i, this.actions = t;
  }
  type = Te;
  component = Ug;
  settingsComponent = dp;
  supportedDSTypes = [];
  icon = el;
  name = "Chart";
  nameKey = "chart:Widget.name";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: up,
    uri: "/chart-settings.ui.xmi",
    ePackage: () => E.eINSTANCE,
    create: () => new y(),
    /* Forms for classes that appear inside this one's lists. */
    entryForms: [{ xmi: fp, uri: "/chart-series.ui.xmi" }],
    /*
     * What the model does not describe: the reference lines and areas, four
     * lists the Ecore does not type - there is no class to build a form
     * from. Named so that what is modelled is not offered twice, in two
     * forms that could disagree.
     */
    unmodelledSections: ["referenceLines"]
  };
  register() {
    this.events.registerWidget(Te, gp), this.actions.registerWidgetType(Te, me, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Te), this.actions.unregisterWidgetType(Te);
  }
};
fn([
  Fa()
], Hi.prototype, "register", 1);
fn([
  Wa()
], Hi.prototype, "unregister", 1);
Hi = fn([
  or({
    service: [tl],
    properties: { "widget.type": Te }
  }),
  nr(0, pn(Pa)),
  nr(1, pn(Na))
], Hi);
export {
  y as ChartSettingsImpl,
  sr as ChartTranslations,
  Ug as ChartWidget,
  Hi as ChartWidgetProvider,
  dp as ChartWidgetSettings,
  E as ChartsettingsPackage,
  up as chartSettingsFormXmi,
  fp as seriesSettingsFormXmi
};
