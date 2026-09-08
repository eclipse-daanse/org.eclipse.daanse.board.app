(function(){var i="ui.vue.widget.chart",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings-container[data-v-1d1049c7]{padding:16px}.settings-block[data-v-1d1049c7]{display:flex;flex-direction:column;gap:12px}.settings-block h3[data-v-1d1049c7]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--va-primary)}\n";})();
import { WidgetActionInterfaceImpl as Oa, EVENT_ACTIONS_REGISTRY as Ra, PayloadImpl as mn, EVENT_REGISTRY_ID as Da, EVENT_ACTIONS_REGISTRY_ID as La } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Ma, deactivate as ka, component as Pa, inject as bn } from "@eclipse-daanse/tsm";
import { defineComponent as Ui, shallowRef as or, h as Ts, ref as jt, onMounted as Mi, onUnmounted as rr, watch as ei, toRaw as ws, nextTick as Na, version as Va, isProxy as ar, mergeModels as Ba, toRefs as Fa, useModel as lr, inject as Es, computed as rt, createElementBlock as St, openBlock as B, withModifiers as Ha, createBlock as J, createCommentVNode as $, resolveDynamicComponent as Wa, resolveComponent as ve, Fragment as $t, createVNode as F, withCtx as tt, createElementVNode as j, createTextVNode as Pt, renderList as Se, toDisplayString as Fe, unref as pt } from "vue";
import { VariableWrapper as C, useVariableRepository as za, useDatasourceRepository as Ga } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as ja } from "vue-router";
import { BasicEObject as cr, BasicEFactory as Ua, BasicEPackage as Xa, EPackageRegistry as dr, BasicEClass as yn, BasicEReference as it, BasicEAttribute as pi, createContainmentEList as Ya, createBasicEList as mi } from "@emfts/core";
import { WidgetAction as ri } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as mt } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Za } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: $a } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ka = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2049.5C22.5%2047.0147%2024.5147%2045%2027%2045H33C35.4853%2045%2037.5%2047.0147%2037.5%2049.5V93C37.5%2095.4853%2035.4853%2097.5%2033%2097.5H27C24.5147%2097.5%2022.5%2095.4853%2022.5%2093V49.5Z'%20fill='%23606060'/%3e%3cpath%20d='M52.5%2027C52.5%2024.5147%2054.5147%2022.5%2057%2022.5H63C65.4853%2022.5%2067.5%2024.5147%2067.5%2027V93C67.5%2095.4853%2065.4853%2097.5%2063%2097.5H57C54.5147%2097.5%2052.5%2095.4853%2052.5%2093V27Z'%20fill='%23606060'/%3e%3cpath%20d='M82.5%2072C82.5%2069.5147%2084.5147%2067.5%2087%2067.5H93C95.4853%2067.5%2097.5%2069.5147%2097.5%2072V93C97.5%2095.4853%2095.4853%2097.5%2093%2097.5H87C84.5147%2097.5%2082.5%2095.4853%2082.5%2093V72Z'%20fill='%23606060'/%3e%3c/svg%3e";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function ai(i) {
  return i + 0.5 | 0;
}
const Kt = (i, t, e) => Math.max(Math.min(i, e), t);
function Ye(i) {
  return Kt(ai(i * 2.55), 0, 255);
}
function Qt(i) {
  return Kt(ai(i * 255), 0, 255);
}
function Gt(i) {
  return Kt(ai(i / 2.55) / 100, 0, 1);
}
function _n(i) {
  return Kt(ai(i * 100), 0, 100);
}
const Lt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, As = [..."0123456789ABCDEF"], qa = (i) => As[i & 15], Ja = (i) => As[(i & 240) >> 4] + As[i & 15], bi = (i) => (i & 240) >> 4 === (i & 15), Qa = (i) => bi(i.r) && bi(i.g) && bi(i.b) && bi(i.a);
function tl(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Lt[i[1]] * 17,
    g: 255 & Lt[i[2]] * 17,
    b: 255 & Lt[i[3]] * 17,
    a: t === 5 ? Lt[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Lt[i[1]] << 4 | Lt[i[2]],
    g: Lt[i[3]] << 4 | Lt[i[4]],
    b: Lt[i[5]] << 4 | Lt[i[6]],
    a: t === 9 ? Lt[i[7]] << 4 | Lt[i[8]] : 255
  })), e;
}
const el = (i, t) => i < 255 ? t(i) : "";
function il(i) {
  var t = Qa(i) ? qa : Ja;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + el(i.a, t) : void 0;
}
const sl = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ur(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function nl(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function ol(i, t, e) {
  const s = ur(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function rl(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function zs(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, d;
  return o !== r && (d = o - r, c = a > 0.5 ? d / (2 - o - r) : d / (o + r), l = rl(e, s, n, d, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Gs(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Qt);
}
function js(i, t, e) {
  return Gs(ur, i, t, e);
}
function al(i, t, e) {
  return Gs(ol, i, t, e);
}
function ll(i, t, e) {
  return Gs(nl, i, t, e);
}
function hr(i) {
  return (i % 360 + 360) % 360;
}
function cl(i) {
  const t = sl.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? Ye(+t[5]) : Qt(+t[5]));
  const n = hr(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = al(n, o, r) : t[1] === "hsv" ? s = ll(n, o, r) : s = js(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function dl(i, t) {
  var e = zs(i);
  e[0] = hr(e[0] + t), e = js(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function ul(i) {
  if (!i)
    return;
  const t = zs(i), e = t[0], s = _n(t[1]), n = _n(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${Gt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const xn = {
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
}, vn = {
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
  const i = {}, t = Object.keys(vn), e = Object.keys(xn);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, xn[o]);
    o = parseInt(vn[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let yi;
function fl(i) {
  yi || (yi = hl(), yi.transparent = [0, 0, 0, 0]);
  const t = yi[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const gl = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function pl(i) {
  const t = gl.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? Ye(r) : Kt(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Ye(s) : Kt(s, 0, 255)), n = 255 & (t[4] ? Ye(n) : Kt(n, 0, 255)), o = 255 & (t[6] ? Ye(o) : Kt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function ml(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Gt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const as = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Te = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function bl(i, t, e) {
  const s = Te(Gt(i.r)), n = Te(Gt(i.g)), o = Te(Gt(i.b));
  return {
    r: Qt(as(s + e * (Te(Gt(t.r)) - s))),
    g: Qt(as(n + e * (Te(Gt(t.g)) - n))),
    b: Qt(as(o + e * (Te(Gt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function _i(i, t, e) {
  if (i) {
    let s = zs(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = js(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function fr(i, t) {
  return i && Object.assign(t || {}, i);
}
function Sn(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = Qt(i[3]))) : (t = fr(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = Qt(t.a)), t;
}
function yl(i) {
  return i.charAt(0) === "r" ? pl(i) : cl(i);
}
class ii {
  constructor(t) {
    if (t instanceof ii)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = Sn(t) : e === "string" && (s = tl(t) || fl(t) || yl(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = fr(this._rgb);
    return t && (t.a = Gt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Sn(t);
  }
  rgbString() {
    return this._valid ? ml(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? il(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? ul(this._rgb) : void 0;
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
    return t && (this._rgb = bl(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new ii(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Qt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = ai(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return _i(this._rgb, 2, t), this;
  }
  darken(t) {
    return _i(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return _i(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return _i(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return dl(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function Ht() {
}
const _l = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function ot(i) {
  return i == null;
}
function at(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function q(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function xt(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Nt(i, t) {
  return xt(i) ? i : t;
}
function Y(i, t) {
  return typeof i > "u" ? t : i;
}
const xl = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, gr = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function ct(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function dt(i, t, e, s) {
  let n, o, r;
  if (at(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (q(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function ki(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Pi(i) {
  if (at(i))
    return i.map(Pi);
  if (q(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Pi(i[e[n]]);
    return t;
  }
  return i;
}
function pr(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function vl(i, t, e, s) {
  if (!pr(i))
    return;
  const n = t[i], o = e[i];
  q(n) && q(o) ? si(n, o, s) : t[i] = Pi(o);
}
function si(i, t, e) {
  const s = at(t) ? t : [
    t
  ], n = s.length;
  if (!q(i))
    return i;
  e = e || {};
  const o = e.merger || vl;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !q(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, d = l.length; c < d; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function qe(i, t) {
  return si(i, t, {
    merger: Sl
  });
}
function Sl(i, t, e) {
  if (!pr(i))
    return;
  const s = t[i], n = e[i];
  q(s) && q(n) ? qe(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Pi(n));
}
const Tn = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function Tl(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function wl(i) {
  const t = Tl(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function ie(i, t) {
  return (Tn[t] || (Tn[t] = wl(t)))(i);
}
function Us(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Dt = (i) => typeof i < "u", Rt = (i) => typeof i == "function", wn = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function El(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const Z = Math.PI, ht = 2 * Z, Al = ht + Z, Ni = Number.POSITIVE_INFINITY, Xs = Z / 180, ft = Z / 2, Mt = Z / 4, Vi = Z * 2 / 3, mr = Math.log10, Ft = Math.sign;
function Je(i, t, e) {
  return Math.abs(i - t) < e;
}
function En(i) {
  const t = Math.round(i);
  i = Je(i, t, i / 1e3) ? t : i;
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
function Il(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function fe(i) {
  return !Il(i) && !isNaN(parseFloat(i)) && isFinite(i);
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
function _t(i) {
  return i * (Z / 180);
}
function Xi(i) {
  return i * (180 / Z);
}
function An(i) {
  if (!xt(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Bi(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * Z && (o += ht), {
    angle: o,
    distance: n
  };
}
function Ie(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Dl(i, t) {
  return (i - t + Al) % ht - Z;
}
function wt(i) {
  return (i % ht + ht) % ht;
}
function ni(i, t, e, s) {
  const n = wt(i), o = wt(t), r = wt(e), a = wt(o - n), l = wt(r - n), c = wt(n - o), d = wt(n - r);
  return n === o || n === r || s && o === r || a > l && c < d;
}
function Et(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Ll(i) {
  return Et(i, -32768, 32767);
}
function Ut(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Ys(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const ce = (i, t, e, s) => Ys(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Ml = (i, t, e) => Ys(i, e, (s) => i[s][t] >= e);
function kl(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const br = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Pl(i, t) {
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
  }), br.forEach((e) => {
    const s = "_onData" + Us(e), n = i[e];
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
function Cn(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (br.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function yr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const _r = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function xr(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, _r.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function Nl(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const $s = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", Tt = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Vl = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Bl(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, d = r.axis, { min: u, max: h, minDefined: f, maxDefined: g } = r.getUserBounds();
    if (f) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        ce(l, d, u).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : ce(t, d, r.getPixelForValue(u)).lo
      ), c) {
        const p = l.slice(0, n + 1).reverse().findIndex((m) => !ot(m[a.axis]));
        n -= Math.max(0, p);
      }
      n = Et(n, 0, s - 1);
    }
    if (g) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        ce(l, r.axis, h, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : ce(t, d, r.getPixelForValue(h), !0).hi + 1
      );
      if (c) {
        const m = l.slice(p - 1).findIndex((y) => !ot(y[a.axis]));
        p += Math.max(0, m);
      }
      o = Et(p, n, s) - n;
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
const xi = (i) => i === 0 || i === 1, In = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * ht / e)), On = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * ht / e) + 1, Qe = {
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
  easeInSine: (i) => -Math.cos(i * ft) + 1,
  easeOutSine: (i) => Math.sin(i * ft),
  easeInOutSine: (i) => -0.5 * (Math.cos(Z * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => xi(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => xi(i) ? i : In(i, 0.075, 0.3),
  easeOutElastic: (i) => xi(i) ? i : On(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return xi(i) ? i : i < 0.5 ? 0.5 * In(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * On(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - Qe.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Qe.easeInBounce(i * 2) * 0.5 : Qe.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function Zs(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Rn(i) {
  return Zs(i) ? i : new ii(i);
}
function ls(i) {
  return Zs(i) ? i : new ii(i).saturate(0.5).darken(0.1).hexString();
}
const Hl = [
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
function zl(i) {
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
      properties: Hl
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
function Gl(i) {
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
function jl(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = Dn.get(e);
  return s || (s = new Intl.NumberFormat(i, t), Dn.set(e, s)), s;
}
function Yi(i, t, e) {
  return jl(t, e).format(i);
}
const Ul = {
  values(i) {
    return at(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = Xl(i, e);
    }
    const r = mr(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Yi(i, s, l);
  }
};
function Xl(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Ks = {
  formatters: Ul
};
function Yl(i) {
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
      callback: Ks.formatters.values,
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
const ge = /* @__PURE__ */ Object.create(null), Cs = /* @__PURE__ */ Object.create(null);
function ti(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function cs(i, t, e) {
  return typeof t == "string" ? si(ti(i, t), e) : si(ti(i, ""), t);
}
class $l {
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => ls(n.backgroundColor), this.hoverBorderColor = (s, n) => ls(n.borderColor), this.hoverColor = (s, n) => ls(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return cs(this, t, e);
  }
  get(t) {
    return ti(this, t);
  }
  describe(t, e) {
    return cs(Cs, t, e);
  }
  override(t, e) {
    return cs(ge, t, e);
  }
  route(t, e, s, n) {
    const o = ti(this, t), r = ti(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return q(l) ? Object.assign({}, c, l) : Y(l, c);
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
var bt = /* @__PURE__ */ new $l({
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
  zl,
  Gl,
  Yl
]);
function Zl(i) {
  return !i || ot(i.size) || ot(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Fi(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function Kl(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, d, u, h;
  for (l = 0; l < a; l++)
    if (u = e[l], u != null && !at(u))
      r = Fi(i, n, o, r, u);
    else if (at(u))
      for (c = 0, d = u.length; c < d; c++)
        h = u[c], h != null && !at(h) && (r = Fi(i, n, o, r, h));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete n[o[l]];
    o.splice(0, f);
  }
  return r;
}
function oe(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function Ln(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function Is(i, t, e, s) {
  vr(i, t, e, s, null);
}
function vr(i, t, e, s, n) {
  let o, r, a, l, c, d, u, h;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let m = (g || 0) * Xs;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(m), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (i.beginPath(), f) {
      // Default includes circle
      default:
        n ? i.ellipse(e, s, n / 2, p, 0, 0, ht) : i.arc(e, s, p, 0, ht), i.closePath();
        break;
      case "triangle":
        d = n ? n / 2 : p, i.moveTo(e + Math.sin(m) * d, s - Math.cos(m) * p), m += Vi, i.lineTo(e + Math.sin(m) * d, s - Math.cos(m) * p), m += Vi, i.lineTo(e + Math.sin(m) * d, s - Math.cos(m) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(m + Mt) * l, u = Math.cos(m + Mt) * (n ? n / 2 - c : l), a = Math.sin(m + Mt) * l, h = Math.sin(m + Mt) * (n ? n / 2 - c : l), i.arc(e - u, s - a, c, m - Z, m - ft), i.arc(e + h, s - r, c, m - ft, m), i.arc(e + u, s + a, c, m, m + ft), i.arc(e - h, s + r, c, m + ft, m + Z), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, d = n ? n / 2 : l, i.rect(e - d, s - l, 2 * d, 2 * l);
          break;
        }
        m += Mt;
      /* falls through */
      case "rectRot":
        u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + h, s - r), i.lineTo(e + u, s + a), i.lineTo(e - h, s + r), i.closePath();
        break;
      case "crossRot":
        m += Mt;
      /* falls through */
      case "cross":
        u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r);
        break;
      case "star":
        u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r), m += Mt, u = Math.cos(m) * (n ? n / 2 : p), r = Math.cos(m) * p, a = Math.sin(m) * p, h = Math.sin(m) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r);
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
function Xt(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function li(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function ci(i) {
  i.restore();
}
function ql(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Jl(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Ql(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), ot(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function tc(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, d = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, d), i.lineTo(a, d), i.stroke();
  }
}
function ec(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function pe(i, t, e, s, n, o = {}) {
  const r = at(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, Ql(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && ec(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), ot(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), tc(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Oe(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * Z, Z, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, Z, ft, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, ft, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -ft, !0), i.lineTo(e + r.topLeft, s);
}
const ic = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, sc = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function nc(i, t) {
  const e = ("" + i).match(ic);
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
const oc = (i) => +i || 0;
function qs(i, t) {
  const e = {}, s = q(t), n = s ? Object.keys(t) : t, o = q(i) ? s ? (r) => Y(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = oc(o(r));
  return e;
}
function Sr(i) {
  return qs(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function te(i) {
  return qs(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function vt(i) {
  const t = Sr(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function yt(i, t) {
  i = i || {}, t = t || bt.font;
  let e = Y(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = Y(i.style, t.style);
  s && !("" + s).match(sc) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: Y(i.family, t.family),
    lineHeight: nc(Y(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: Y(i.weight, t.weight),
    string: ""
  };
  return n.string = Zl(n), n;
}
function vi(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function rc(i, t, e) {
  const { min: s, max: n } = i, o = gr(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function ne(i, t) {
  return Object.assign(Object.create(i), t);
}
function Js(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = Ar("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => Js([
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
      return wr(a, l, () => gc(l, t, i, a));
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
      return kn(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return kn(a);
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
function Re(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Tr(i, s),
    setContext: (o) => Re(i, o, e, s),
    override: (o) => Re(i.override(o), t, e, s)
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
      return wr(o, r, () => lc(o, r, a));
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
function Tr(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: Rt(e) ? e : () => e,
    isIndexable: Rt(s) ? s : () => s
  };
}
const ac = (i, t) => i ? i + Us(t) : t, Qs = (i, t) => q(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function wr(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function lc(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return Rt(a) && r.isScriptable(t) && (a = cc(t, a, i, e)), at(a) && a.length && (a = dc(t, a, i, r.isIndexable)), Qs(t, a) && (a = Re(a, n, o && o[t], r)), a;
}
function cc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), Qs(i, l) && (l = tn(n._scopes, n, i, l)), l;
}
function dc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (q(t[0])) {
    const l = t, c = n._scopes.filter((d) => d !== l);
    t = [];
    for (const d of l) {
      const u = tn(c, n, i, d);
      t.push(Re(u, o, r && r[i], a));
    }
  }
  return t;
}
function Er(i, t, e) {
  return Rt(i) ? i(t, e) : i;
}
const uc = (i, t) => i === !0 ? t : typeof i == "string" ? ie(t, i) : void 0;
function hc(i, t, e, s, n) {
  for (const o of t) {
    const r = uc(e, o);
    if (r) {
      i.add(r);
      const a = Er(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function tn(i, t, e, s) {
  const n = t._rootScopes, o = Er(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Mn(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Mn(a, r, o, l, s), l === null) ? !1 : Js(Array.from(a), [
    ""
  ], n, o, () => fc(t, e, s));
}
function Mn(i, t, e, s, n) {
  for (; e; )
    e = hc(i, t, e, s, n);
  return e;
}
function fc(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return at(n) && q(e) ? e : n || {};
}
function gc(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Ar(ac(o, i), e), typeof n < "u")
      return Qs(i, n) ? tn(e, s, i, n) : n;
}
function Ar(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function kn(i) {
  let t = i._keys;
  return t || (t = i._keys = pc(i._scopes)), t;
}
function pc(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function Cr(i, t, e, s) {
  const { iScale: n } = i, { key: o = "r" } = this._parsing, r = new Array(s);
  let a, l, c, d;
  for (a = 0, l = s; a < l; ++a)
    c = a + e, d = t[c], r[a] = {
      r: n.parse(ie(d, o), c)
    };
  return r;
}
const mc = Number.EPSILON || 1e-14, De = (i, t) => t < i.length && !i[t].skip && i[t], Ir = (i) => i === "x" ? "y" : "x";
function bc(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = Ie(o, n), l = Ie(r, o);
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
function yc(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = De(i, 0);
  for (let d = 0; d < s - 1; ++d)
    if (l = c, c = De(i, d + 1), !(!l || !c)) {
      if (Je(t[d], 0, mc)) {
        e[d] = e[d + 1] = 0;
        continue;
      }
      n = e[d] / t[d], o = e[d + 1] / t[d], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[d] = n * r * t[d], e[d + 1] = o * r * t[d]);
    }
}
function _c(i, t, e = "x") {
  const s = Ir(e), n = i.length;
  let o, r, a, l = De(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = De(i, c + 1), !a)
      continue;
    const d = a[e], u = a[s];
    r && (o = (d - r[e]) / 3, a[`cp1${e}`] = d - o, a[`cp1${s}`] = u - o * t[c]), l && (o = (l[e] - d) / 3, a[`cp2${e}`] = d + o, a[`cp2${s}`] = u + o * t[c]);
  }
}
function xc(i, t = "x") {
  const e = Ir(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = De(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = De(i, r + 1), !!l) {
      if (c) {
        const d = c[t] - l[t];
        n[r] = d !== 0 ? (c[e] - l[e]) / d : 0;
      }
      o[r] = a ? c ? Ft(n[r - 1]) !== Ft(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  yc(i, n, o), _c(i, o, t);
}
function Si(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function vc(i, t) {
  let e, s, n, o, r, a = Xt(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && Xt(i[e + 1], t), o && (n = i[e], r && (n.cp1x = Si(n.cp1x, t.left, t.right), n.cp1y = Si(n.cp1y, t.top, t.bottom)), a && (n.cp2x = Si(n.cp2x, t.left, t.right), n.cp2y = Si(n.cp2y, t.top, t.bottom)));
}
function Sc(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    xc(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = bc(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && vc(i, e);
}
function en() {
  return typeof window < "u" && typeof document < "u";
}
function sn(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Hi(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const $i = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Tc(i, t) {
  return $i(i).getPropertyValue(t);
}
const wc = [
  "top",
  "right",
  "bottom",
  "left"
];
function ue(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = wc[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Ec = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Ac(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (Ec(n, o, i.target))
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
function ae(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = $i(e), o = n.boxSizing === "border-box", r = ue(n, "padding"), a = ue(n, "border", "width"), { x: l, y: c, box: d } = Ac(i, e), u = r.left + (d && a.left), h = r.top + (d && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - u) / f * e.width / s),
    y: Math.round((c - h) / g * e.height / s)
  };
}
function Cc(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && sn(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = $i(o), l = ue(a, "border", "width"), c = ue(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Hi(a.maxWidth, o, "clientWidth"), n = Hi(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Ni,
    maxHeight: n || Ni
  };
}
const qt = (i) => Math.round(i * 10) / 10;
function Ic(i, t, e, s) {
  const n = $i(i), o = ue(n, "margin"), r = Hi(n.maxWidth, i, "clientWidth") || Ni, a = Hi(n.maxHeight, i, "clientHeight") || Ni, l = Cc(i, t, e);
  let { width: c, height: d } = l;
  if (n.boxSizing === "content-box") {
    const h = ue(n, "border", "width"), f = ue(n, "padding");
    c -= f.width + h.width, d -= f.height + h.height;
  }
  return c = Math.max(0, c - o.width), d = Math.max(0, s ? c / s : d - o.height), c = qt(Math.min(c, r, l.maxWidth)), d = qt(Math.min(d, a, l.maxHeight)), c && !d && (d = qt(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && d > l.height && (d = l.height, c = qt(Math.floor(d * s))), {
    width: c,
    height: d
  };
}
function Pn(i, t, e) {
  const s = t || 1, n = qt(i.height * s), o = qt(i.width * s);
  i.height = qt(i.height), i.width = qt(i.width);
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
    en() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
})();
function Nn(i, t) {
  const e = Tc(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function le(i, t, e, s) {
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
function Dc(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = le(i, n, e), a = le(n, o, e), l = le(o, t, e), c = le(r, a, e), d = le(a, l, e);
  return le(c, d, e);
}
const Lc = function(i, t) {
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
}, Mc = function() {
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
function Ce(i, t, e) {
  return i ? Lc(t, e) : Mc();
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
function Dr(i) {
  return i === "angle" ? {
    between: ni,
    compare: Dl,
    normalize: wt
  } : {
    between: Ut,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Vn({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function kc(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = Dr(s), l = t.length;
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
function Lr(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Dr(s), { start: d, end: u, loop: h, style: f } = kc(i, t, e), g = [];
  let p = !1, m = null, y, v, E;
  const I = () => l(n, E, y) && a(n, E) !== 0, S = () => a(o, y) === 0 || l(o, E, y), M = () => p || I(), L = () => !p || S();
  for (let k = d, P = d; k <= u; ++k)
    v = t[k % r], !v.skip && (y = c(v[s]), y !== E && (p = l(y, n, o), m === null && M() && (m = a(y, n) === 0 ? k : P), m !== null && L() && (g.push(Vn({
      start: m,
      end: k,
      loop: h,
      count: r,
      style: f
    })), m = null), P = k, E = y));
  return m !== null && g.push(Vn({
    start: m,
    end: u,
    loop: h,
    count: r,
    style: f
  })), g;
}
function Mr(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Lr(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Pc(i, t, e, s) {
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
function Nc(i, t, e, s) {
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
  const o = !!i._loop, { start: r, end: a } = Pc(e, n, o, s);
  if (s === !0)
    return Bn(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return Bn(i, Nc(e, r, l, c), e, t);
}
function Bn(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Bc(i, t, e, s);
}
function Bc(i, t, e, s) {
  const n = i._chart.getContext(), o = Fn(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
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
      m = Fn(s.setContext(ne(n, {
        type: "segment",
        p0: p,
        p1: y,
        p0DataIndex: (h - 1) % l,
        p1DataIndex: h % l,
        datasetIndex: r
      }))), Fc(m, d) && f(u, h - 1, g.loop, d), p = y, d = m;
    }
    u < h - 1 && f(u, h - 1, g.loop, d);
  }
  return c;
}
function Fn(i) {
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
    return Zs(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
function Ti(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Hc(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: Ti(e, t, "left"),
    right: Ti(e, t, "right"),
    top: Ti(s, t, "top"),
    bottom: Ti(s, t, "bottom")
  } : t;
}
function kr(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const s = Hc(t, i.chartArea);
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
    this._request || (this._running = !0, this._request = _r.call(window, () => {
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
var Wt = /* @__PURE__ */ new Wc();
const Hn = "transparent", zc = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = Rn(i || Hn), n = s.valid && Rn(t || Hn);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class Gc {
  constructor(t, e, s, n) {
    const o = e[s];
    n = vi([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = vi([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || zc[t.type || typeof r], this._easing = Qe[t.easing] || Qe.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = vi([
        t.to,
        e,
        n,
        t.from
      ]), this._from = vi([
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
class nn {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!q(t))
      return;
    const e = Object.keys(bt.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!q(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (at(o.properties) && o.properties || [
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
    return s.$shared && jc(t.options.$animations, s).then(() => {
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
      o[c] = u = new Gc(h, t, c, d), n.push(u);
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
function jc(i, t) {
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
function Wn(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function Xc(i, t, e) {
  if (e === !1)
    return !1;
  const s = Wn(i, e), n = Wn(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function Yc(i) {
  let t, e, s, n;
  return q(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function Pr(i, t) {
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
  let d = !1;
  for (r = 0, a = n.length; r < a; ++r) {
    if (l = +n[r], l === e) {
      if (d = !0, s.all)
        continue;
      break;
    }
    c = i.values[l], xt(c) && (o || t === 0 || Ft(t) === Ft(c)) && (t += c);
  }
  return !d && !s.all ? 0 : t;
}
function $c(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, d;
  for (l = 0, c = r.length; l < c; ++l)
    d = r[l], a[l] = {
      [n]: d,
      [o]: i[d]
    };
  return a;
}
function ds(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Zc(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Kc(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function qc(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Gn(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function jn(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, d = Zc(o, r, s), u = t.length;
  let h;
  for (let f = 0; f < u; ++f) {
    const g = t[f], { [l]: p, [c]: m } = g, y = g._stacks || (g._stacks = {});
    h = y[c] = qc(n, d, p), h[a] = m, h._top = Gn(h, r, !0, s.type), h._bottom = Gn(h, r, !1, s.type);
    const v = h._visualValues || (h._visualValues = {});
    v[a] = m;
  }
}
function us(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function Jc(i, t) {
  return ne(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Qc(i, t, e) {
  return ne(i, {
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
function He(i, t) {
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
const hs = (i) => i === "reset" || i === "none", Un = (i, t) => t ? i : Object.assign({}, i), td = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Pr(e, !0),
  values: null
};
class Me {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = ds(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && He(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (u, h, f, g) => u === "x" ? h : u === "r" ? g : f, o = e.xAxisID = Y(s.xAxisID, us(t, "x")), r = e.yAxisID = Y(s.yAxisID, us(t, "y")), a = e.rAxisID = Y(s.rAxisID, us(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), d = e.vAxisID = n(l, r, o, a);
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
    this._data && Cn(this._data, this), t._stacked && He(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (q(e)) {
      const n = this._cachedMeta;
      this._data = $c(e, n);
    } else if (s !== e) {
      if (s) {
        Cn(s, this);
        const n = this._cachedMeta;
        He(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Pl(e, this), this._syncList = [], this._data = e;
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
    e._stacked = ds(e.vScale, e), e.stack !== s.stack && (n = !0, He(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (jn(this, e._parsed), e._stacked = ds(e.vScale, e));
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
      at(n[t]) ? h = this.parseArrayData(s, n, t, e) : q(n[t]) ? h = this.parseObjectData(s, n, t, e) : h = this.parsePrimitiveData(s, n, t, e);
      const f = () => u[a] === null || c && u[a] < c[a];
      for (d = 0; d < e; ++d)
        s._parsed[d + t] = u = h[d], l && (f() && (l = !1), c = u);
      s._sorted = l;
    }
    r && jn(this, h);
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
        x: o.parse(ie(f, a), h),
        y: r.parse(ie(f, l), h)
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
      keys: Pr(n, !0),
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
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = td(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: u } = Kc(a);
    let h, f;
    function g() {
      f = n[h];
      const p = f[a.axis];
      return !xt(f[t.axis]) || d > p || u < p;
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
      r = e[n][t.axis], xt(r) && s.push(r);
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
    this.update(t || "default"), e._clip = Yc(Y(this.options.clip, Xc(e.xScale, e.yScale, this.getMaxOverflow())));
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
      o = r.$context || (r.$context = Qc(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Jc(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Dt(s);
    if (a)
      return Un(a, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, t), u = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], h = c.getOptionScopes(this.getDataset(), d), f = Object.keys(bt.elements[t]), g = () => this.getContext(s, n, e), p = c.resolveNamedOptions(h, f, g, u);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(Un(p, l))), p;
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
    const c = new nn(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || hs(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    hs(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !hs(e) && this._resolveAnimations(void 0, e).update(t, s);
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
      s._stacked && He(s, n);
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
function ed(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = yr(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function id(i) {
  const t = i.iScale, e = ed(t, i.type);
  let s = t._length, n, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (Dt(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (n = 0, o = e.length; n < o; ++n)
    r = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    r = t.getPixelForTick(n), l();
  return s;
}
function sd(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return ot(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function nd(i, t, e, s) {
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
function od(i, t, e, s) {
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
function Nr(i, t, e, s) {
  return at(i) ? od(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function Xn(i, t, e, s) {
  const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
  let c, d, u, h;
  for (c = e, d = e + s; c < d; ++c)
    h = t[c], u = {}, u[n.axis] = a || n.parse(r[c], c), l.push(Nr(h, u, o, c));
  return l;
}
function fs(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function rd(i, t, e) {
  return i !== 0 ? Ft(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function ad(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function ld(i, t, e, s) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: d } = ad(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = d : (o[Yn(d, r, a, l)] = !0, n = c)), o[Yn(n, r, a, l)] = !0, i.borderSkipped = o;
}
function Yn(i, t, e, s) {
  return s ? (i = cd(i, t, e), i = $n(i, e, t)) : i = $n(i, t, e), i;
}
function cd(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function $n(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function dd(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class ud extends Me {
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
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, d = r.axis === "x" ? a : l, u = [];
    let h, f, g, p;
    for (h = s, f = s + n; h < f; ++h)
      p = e[h], g = {}, g[o.axis] = o.parse(ie(p, c), h), u.push(Nr(ie(p, d), g, r, h));
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
    const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), r = o._custom, a = fs(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(o[n.axis]);
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
      const g = this.getParsed(f), p = o || ot(g[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, d), y = (g._stacks || {})[a.axis], v = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !y || fs(g._custom) || r === y._top || r === y._bottom,
        x: c ? p.head : m.center,
        y: c ? m.center : p.head,
        height: c ? m.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : m.size
      };
      h && (v.options = u || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const E = v.options || t[f].options;
      ld(v, E, y, r), dd(v, E, d.ratio), this.updateElement(t[f], f, v, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((d) => d.controller.options.grouped), o = s.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[s.axis], c = (d) => {
      const u = d._parsed.find((f) => f[s.axis] === l), h = u && u[d.vScale.axis];
      if (ot(h) || isNaN(h))
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
      t[Y(this.chart.options.indexAxis === "x" ? s.xAxisID : s.yAxisID, e)] = !0;
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
      min: a || id(e),
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
    const { _cachedMeta: { vScale: e, _stacked: s, index: n }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, d = fs(c);
    let u = l[e.axis], h = 0, f = s ? this.applyStack(e, l, s) : u, g, p;
    f !== u && (h = f - u, f = u), d && (u = c.barStart, f = c.barEnd - c.barStart, u !== 0 && Ft(u) !== Ft(c.barEnd) && (h = 0), h += u);
    const m = !ot(o) && !d ? o : h;
    let y = e.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(h + f) : g = y, p = g - y, Math.abs(p) < r) {
      p = rd(p, e, a) * r, u === a && (y -= p / 2);
      const v = e.getPixelForDecimal(0), E = e.getPixelForDecimal(1), I = Math.min(v, E), S = Math.max(v, E);
      y = Math.max(Math.min(y, S), I), g = y + p, s && !d && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(y));
    }
    if (y === e.getPixelForValue(a)) {
      const v = Ft(p) * e.getLineWidthForValue(a) / 2;
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
    const s = e.scale, n = this.options, o = n.skipNull, r = Y(n.maxBarThickness, 1 / 0);
    let a, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const d = o ? this._getStackCount(t) : e.stackCount, u = n.barThickness === "flex" ? nd(t, e, n, d * c) : sd(t, e, n, d * c), h = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(Y(h, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
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
function hd(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < ht) {
    const a = i, l = a + t, c = Math.cos(a), d = Math.sin(a), u = Math.cos(l), h = Math.sin(l), f = (E, I, S) => ni(E, a, l, !0) ? 1 : Math.max(I, I * e, S, S * e), g = (E, I, S) => ni(E, a, l, !0) ? -1 : Math.min(I, I * e, S, S * e), p = f(0, c, u), m = f(ft, d, h), y = g(Z, c, u), v = g(Z + ft, d, h);
    s = (p - y) / 2, n = (m - v) / 2, o = -(p + y) / 2, r = -(m + v) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class on extends Me {
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
      if (q(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +ie(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return _t(this.options.rotation - 90);
  }
  _getCircumference() {
    return _t(this.options.circumference);
  }
  _getRotationExtents() {
    let t = ht, e = -ht;
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
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(xl(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: u } = this._getRotationExtents(), { ratioX: h, ratioY: f, offsetX: g, offsetY: p } = hd(u, d, l), m = (s.width - r) / h, y = (s.height - r) / f, v = Math.max(Math.min(m, y) / 2, 0), E = gr(this.options.radius, v), I = Math.max(E * l, 0), S = (E - I) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * E, this.offsetY = p * E, n.total = this.calculateTotal(), this.outerRadius = E - S * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - S * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / ht);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, d = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, h = o && c.animateScale, f = h ? 0 : this.innerRadius, g = h ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, n);
    let y = this._getRotation(), v;
    for (v = 0; v < e; ++v)
      y += this._circumference(v, o);
    for (v = e; v < e + s; ++v) {
      const E = this._circumference(v, o), I = t[v], S = {
        x: d + this.offsetX,
        y: u + this.offsetY,
        startAngle: y,
        endAngle: y + E,
        circumference: E,
        outerRadius: g,
        innerRadius: f
      };
      m && (S.options = p || this.resolveDataElementOptions(v, I.active ? "active" : n)), y += E, this.updateElement(I, v, S, n);
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
    return e > 0 && !isNaN(t) ? ht * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Yi(e._parsed[t], s.options.locale);
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
    return Math.max(Y(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class fd extends Me {
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
    let { start: a, count: l } = Bl(e, n, r);
    this._drawStart = a, this._drawCount = l, Fl(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n), h = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, m = fe(g) ? g : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || n === "none", v = e + s, E = t.length;
    let I = e > 0 && this.getParsed(e - 1);
    for (let S = 0; S < E; ++S) {
      const M = t[S], L = y ? M : {};
      if (S < e || S >= v) {
        L.skip = !0;
        continue;
      }
      const k = this.getParsed(S), P = ot(k[f]), U = L[h] = r.getPixelForValue(k[h], S), z = L[f] = o || P ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[f], S);
      L.skip = isNaN(U) || isNaN(z) || P, L.stop = S > 0 && Math.abs(k[h] - I[h]) > m, p && (L.parsed = k, L.raw = c.data[S]), u && (L.options = d || this.resolveDataElementOptions(S, M.active ? "active" : n)), y || this.updateElement(M, S, L, n), I = k;
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
class gd extends Me {
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
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Yi(e._parsed[t].r, s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, s, n) {
    return Cr.bind(this)(t, e, s, n);
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
    const o = n === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, d = c.xCenter, u = c.yCenter, h = c.getIndexAngle(0) - 0.5 * Z;
    let f = h, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, n, p);
    for (g = e; g < e + s; g++) {
      const m = t[g];
      let y = f, v = f + this._computeAngle(g, n, p), E = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = v, o && (l.animateScale && (E = 0), l.animateRotate && (y = v = h));
      const I = {
        x: d,
        y: u,
        innerRadius: 0,
        outerRadius: E,
        startAngle: y,
        endAngle: v,
        options: this.resolveDataElementOptions(g, m.active ? "active" : n)
      };
      this.updateElement(m, g, I, n);
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
    return this.chart.getDataVisibility(t) ? _t(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
}
class pd extends on {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class md extends Me {
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
    return Cr.bind(this)(t, e, s, n);
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
function re() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class rn {
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
    Object.assign(rn.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return re();
  }
  parse() {
    return re();
  }
  format() {
    return re();
  }
  add() {
    return re();
  }
  diff() {
    return re();
  }
  startOf() {
    return re();
  }
  endOf() {
    return re();
  }
}
var bd = {
  _date: rn
};
function yd(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Ml : ce;
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
        const { vScale: u } = n._cachedMeta, { _parsed: h } = i, f = h.slice(0, d.lo + 1).reverse().findIndex((p) => !ot(p[u.axis]));
        d.lo -= Math.max(0, f);
        const g = h.slice(d.hi).findIndex((p) => !ot(p[u.axis]));
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
function Zi(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: d } = o[a], { lo: u, hi: h } = yd(o[a], t, r, n);
    for (let f = u; f <= h; ++f) {
      const g = d[f];
      g.skip || s(g, c, f);
    }
  }
}
function _d(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function gs(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Zi(i, e, t, function(a, l, c) {
    !n && !Xt(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function xd(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: d } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: u } = Bi(r, {
      x: t.x,
      y: t.y
    });
    ni(u, c, d) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Zi(i, e, t, o), n;
}
function vd(i, t, e, s, n, o) {
  let r = [];
  const a = _d(e);
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
  return Zi(i, e, t, c), r;
}
function ps(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? xd(i, t, e, n) : vd(i, t, e, s, n, o);
}
function Zn(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Zi(i, e, t, (l, c, d) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: d
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var Sd = {
  modes: {
    index(i, t, e, s) {
      const n = ae(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? gs(i, n, o, s, r) : ps(i, n, o, !1, s, r), l = [];
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
      const n = ae(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? gs(i, n, o, s, r) : ps(i, n, o, !1, s, r);
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
      const n = ae(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return gs(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = ae(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ps(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = ae(t, i);
      return Zn(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = ae(t, i);
      return Zn(i, n, "y", e.intersect, s);
    }
  }
};
const Vr = [
  "left",
  "top",
  "right",
  "bottom"
];
function We(i, t) {
  return i.filter((e) => e.pos === t);
}
function Kn(i, t) {
  return i.filter((e) => Vr.indexOf(e.pos) === -1 && e.box.axis === t);
}
function ze(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Td(i) {
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
function wd(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !Vr.includes(n))
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
function Ed(i, t) {
  const e = wd(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], d = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = d ? d * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = d ? d * n : l && t.availableHeight);
  }
  return e;
}
function Ad(i) {
  const t = Td(i), e = ze(t.filter((c) => c.box.fullSize), !0), s = ze(We(t, "left"), !0), n = ze(We(t, "right")), o = ze(We(t, "top"), !0), r = ze(We(t, "bottom")), a = Kn(t, "x"), l = Kn(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: We(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function qn(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Br(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Cd(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!q(n)) {
    e.size && (i[n] -= e.size);
    const u = s[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? o.height : o.width), e.size = u.size / u.count, i[n] += e.size;
  }
  o.getPadding && Br(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - qn(r, i, "left", "right")), l = Math.max(0, t.outerHeight - qn(r, i, "top", "bottom")), c = a !== i.w, d = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: d
  } : {
    same: d,
    other: c
  };
}
function Id(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Od(i, t) {
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
function $e(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, d;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Od(a.horizontal, t));
    const { same: u, other: h } = Cd(t, e, a, s);
    c |= u && n.length, d = d || h, l.fullSize || n.push(a);
  }
  return c && $e(n, t, e, s) || d;
}
function wi(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function Jn(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * d, h = c.size || l.height;
      Dt(c.start) && (r = c.start), l.fullSize ? wi(l, n.left, r, e.outerWidth - n.right - n.left, h) : wi(l, t.left + c.placed, r, u, h), c.start = r, c.placed += u, r = l.bottom;
    } else {
      const u = t.h * d, h = c.size || l.width;
      Dt(c.start) && (o = c.start), l.fullSize ? wi(l, o, n.top, h, e.outerHeight - n.bottom - n.top) : wi(l, o, t.top + c.placed, h, u), c.start = o, c.placed += u, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var kt = {
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
    const n = vt(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = Ad(i.boxes), l = a.vertical, c = a.horizontal;
    dt(i.boxes, (p) => {
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
    Br(h, vt(s));
    const f = Object.assign({
      maxPadding: h,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), g = Ed(l.concat(c), u);
    $e(a.fullSize, f, u, g), $e(l, f, u, g), $e(c, f, u, g) && $e(l, f, u, g), Id(f), Jn(a.leftAndTop, f, u, g), f.x += f.w, f.y += f.h, Jn(a.rightAndBottom, f, u, g), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, dt(a.chartArea, (p) => {
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
class Rd extends Fr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ri = "$chartjs", Dd = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Qn = (i) => i === null || i === "";
function Ld(i, t) {
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
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Qn(n)) {
    const o = Nn(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Qn(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = Nn(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Hr = Oc ? {
  passive: !0
} : !1;
function Md(i, t, e) {
  i && i.addEventListener(t, e, Hr);
}
function kd(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Hr);
}
function Pd(i, t) {
  const e = Dd[i.type] || i.type, { x: s, y: n } = ae(i, t);
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
function Nd(i, t, e) {
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
function Vd(i, t, e) {
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
const oi = /* @__PURE__ */ new Map();
let to = 0;
function Wr() {
  const i = window.devicePixelRatio;
  i !== to && (to = i, oi.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Bd(i, t) {
  oi.size || window.addEventListener("resize", Wr), oi.set(i, t);
}
function Fd(i) {
  oi.delete(i), oi.size || window.removeEventListener("resize", Wr);
}
function Hd(i, t, e) {
  const s = i.canvas, n = s && sn(s);
  if (!n)
    return;
  const o = xr((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || o(c, d);
  });
  return r.observe(n), Bd(i, o), r;
}
function ms(i, t, e) {
  e && e.disconnect(), t === "resize" && Fd(i);
}
function Wd(i, t, e) {
  const s = i.canvas, n = xr((o) => {
    i.ctx !== null && e(Pd(o, i));
  }, i);
  return Md(s, t, n), n;
}
class zd extends Fr {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Ld(t, e), s) : null;
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
      ot(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[Ri], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: Nd,
      detach: Vd,
      resize: Hd
    }[e] || Wd;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: ms,
      detach: ms,
      resize: ms
    }[e] || kd)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Ic(t, e, s, n);
  }
  isAttached(t) {
    const e = t && sn(t);
    return !!(e && e.isConnected);
  }
}
function Gd(i) {
  return !en() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Rd : zd;
}
class At {
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
    return fe(this.x) && fe(this.y);
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
function jd(i, t) {
  const e = i.options.ticks, s = Ud(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? Yd(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return $d(t, c, o, r / n), c;
  const d = Xd(o, t, n);
  if (r > 0) {
    let u, h;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Ei(t, c, d, ot(f) ? 0 : a - f, a), u = 0, h = r - 1; u < h; u++)
      Ei(t, c, d, o[u], o[u + 1]);
    return Ei(t, c, d, l, ot(f) ? t.length : l + f), c;
  }
  return Ei(t, c, d), c;
}
function Ud(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function Xd(i, t, e) {
  const s = Zd(i), n = t.length / e;
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
function Yd(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function $d(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function Ei(i, t, e, s, n) {
  const o = Y(s, 0), r = Math.min(Y(n, i.length), i.length);
  let a = 0, l, c, d;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), d = o; d < 0; )
    a++, d = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === d && (t.push(i[c]), a++, d = Math.round(o + a * e));
}
function Zd(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const Kd = (i) => i === "left" ? "right" : i === "right" ? "left" : i, eo = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, io = (i, t) => Math.min(t || i, i);
function so(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function qd(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Jd(i, t) {
  dt(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function Ge(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function no(i, t) {
  if (!i.display)
    return 0;
  const e = yt(i.font, t), s = vt(i.padding);
  return (at(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function Qd(i, t) {
  return ne(i, {
    scale: t,
    type: "scale"
  });
}
function tu(i, t, e) {
  return ne(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function eu(i, t, e) {
  let s = $s(i);
  return (e && t !== "right" || !e && t === "right") && (s = Kd(s)), s;
}
function iu(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: d } = l;
  let u = 0, h, f, g;
  const p = r - n, m = a - o;
  if (i.isHorizontal()) {
    if (f = Tt(s, o, a), q(e)) {
      const y = Object.keys(e)[0], v = e[y];
      g = d[y].getPixelForValue(v) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = eo(i, e, t);
    h = a - o;
  } else {
    if (q(e)) {
      const y = Object.keys(e)[0], v = e[y];
      f = d[y].getPixelForValue(v) - m + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = eo(i, e, t);
    g = Tt(s, r, n), u = e === "left" ? -ft : ft;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: h,
    rotation: u
  };
}
class ke extends At {
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
    return t = Nt(t, Number.POSITIVE_INFINITY), e = Nt(e, Number.NEGATIVE_INFINITY), s = Nt(s, Number.POSITIVE_INFINITY), n = Nt(n, Number.NEGATIVE_INFINITY), {
      min: Nt(t, s),
      max: Nt(e, n),
      minDefined: xt(t),
      maxDefined: xt(e)
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
      min: Nt(e, Nt(s, e)),
      max: Nt(s, Nt(e, s))
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
    ct(this.options.beforeUpdate, [
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = rc(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? so(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = jd(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    ct(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    ct(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    ct(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), ct(this.options[t], [
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
    ct(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = ct(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    ct(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    ct(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = io(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const d = this._getLabelSizes(), u = d.widest.width, h = d.highest.height, f = Et(this.chart.width - u, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), u + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Ge(t.grid) - e.padding - no(t.title, this.chart.options.font), c = Math.sqrt(u * u + h * h), r = Xi(Math.min(Math.asin(Et((d.highest.height + 6) / a, -1, 1)), Math.asin(Et(l / c, -1, 1)) - Math.asin(Et(h / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    ct(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    ct(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = no(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Ge(o) + l) : (t.height = this.maxHeight, t.width = Ge(o) + l), s.display && this.ticks.length) {
        const { first: c, last: d, widest: u, highest: h } = this._getLabelSizes(), f = s.padding * 2, g = _t(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
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
    ct(this.options.afterFit, [
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
      ot(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = so(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / io(e, s));
    let c = 0, d = 0, u, h, f, g, p, m, y, v, E, I, S;
    for (u = 0; u < e; u += l) {
      if (g = t[u].label, p = this._resolveTickFontOptions(u), n.font = m = p.string, y = o[m] = o[m] || {
        data: {},
        gc: []
      }, v = p.lineHeight, E = I = 0, !ot(g) && !at(g))
        E = Fi(n, y.data, y.gc, E, g), I = v;
      else if (at(g))
        for (h = 0, f = g.length; h < f; ++h)
          S = g[h], !ot(S) && !at(S) && (E = Fi(n, y.data, y.gc, E, S), I += v);
      r.push(E), a.push(I), c = Math.max(E, c), d = Math.max(I, d);
    }
    Jd(o, e);
    const M = r.indexOf(c), L = a.indexOf(d), k = (P) => ({
      width: r[P] || 0,
      height: a[P] || 0
    });
    return {
      first: k(0),
      last: k(e - 1),
      widest: k(M),
      highest: k(L),
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
    return Ll(this._alignToPixels ? oe(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = tu(this.getContext(), t, s));
    }
    return this.$context || (this.$context = Qd(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = _t(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), h = Ge(o), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, y = function(X) {
      return oe(s, X, p);
    };
    let v, E, I, S, M, L, k, P, U, z, O, H;
    if (r === "top")
      v = y(this.bottom), L = this.bottom - h, P = v - m, z = y(t.top) + m, H = t.bottom;
    else if (r === "bottom")
      v = y(this.top), z = t.top, H = y(t.bottom) - m, L = v + m, P = this.top + h;
    else if (r === "left")
      v = y(this.right), M = this.right - h, k = v - m, U = y(t.left) + m, O = t.right;
    else if (r === "right")
      v = y(this.left), U = t.left, O = y(t.right) - m, M = v + m, k = this.left + h;
    else if (e === "x") {
      if (r === "center")
        v = y((t.top + t.bottom) / 2 + 0.5);
      else if (q(r)) {
        const X = Object.keys(r)[0], W = r[X];
        v = y(this.chart.scales[X].getPixelForValue(W));
      }
      z = t.top, H = t.bottom, L = v + m, P = L + h;
    } else if (e === "y") {
      if (r === "center")
        v = y((t.left + t.right) / 2);
      else if (q(r)) {
        const X = Object.keys(r)[0], W = r[X];
        v = y(this.chart.scales[X].getPixelForValue(W));
      }
      M = v - m, k = M - h, U = t.left, O = t.right;
    }
    const Q = Y(n.ticks.maxTicksLimit, u), V = Math.max(1, Math.ceil(u / Q));
    for (E = 0; E < u; E += V) {
      const X = this.getContext(E), W = o.setContext(X), lt = a.setContext(X), T = W.lineWidth, _ = W.color, K = lt.dash || [], G = lt.dashOffset, gt = W.tickWidth, et = W.tickColor, nt = W.tickBorderDash || [], ut = W.tickBorderDashOffset;
      I = qd(this, E, l), I !== void 0 && (S = oe(s, I, T), c ? M = k = U = O = S : L = P = z = H = S, f.push({
        tx1: M,
        ty1: L,
        tx2: k,
        ty2: P,
        x1: U,
        y1: z,
        x2: O,
        y2: H,
        width: T,
        color: _,
        borderDash: K,
        borderDashOffset: G,
        tickWidth: gt,
        tickColor: et,
        tickBorderDash: nt,
        tickBorderDashOffset: ut
      }));
    }
    return this._ticksLength = u, this._borderValue = v, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: d, mirror: u } = o, h = Ge(s.grid), f = h + d, g = u ? -d : f, p = -_t(this.labelRotation), m = [];
    let y, v, E, I, S, M, L, k, P, U, z, O, H = "middle";
    if (n === "top")
      M = this.bottom - g, L = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      M = this.top + g, L = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const V = this._getYAxisLabelAlignment(h);
      L = V.textAlign, S = V.x;
    } else if (n === "right") {
      const V = this._getYAxisLabelAlignment(h);
      L = V.textAlign, S = V.x;
    } else if (e === "x") {
      if (n === "center")
        M = (t.top + t.bottom) / 2 + f;
      else if (q(n)) {
        const V = Object.keys(n)[0], X = n[V];
        M = this.chart.scales[V].getPixelForValue(X) + f;
      }
      L = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        S = (t.left + t.right) / 2 - f;
      else if (q(n)) {
        const V = Object.keys(n)[0], X = n[V];
        S = this.chart.scales[V].getPixelForValue(X);
      }
      L = this._getYAxisLabelAlignment(h).textAlign;
    }
    e === "y" && (l === "start" ? H = "top" : l === "end" && (H = "bottom"));
    const Q = this._getLabelSizes();
    for (y = 0, v = a.length; y < v; ++y) {
      E = a[y], I = E.label;
      const V = o.setContext(this.getContext(y));
      k = this.getPixelForTick(y) + o.labelOffset, P = this._resolveTickFontOptions(y), U = P.lineHeight, z = at(I) ? I.length : 1;
      const X = z / 2, W = V.color, lt = V.textStrokeColor, T = V.textStrokeWidth;
      let _ = L;
      r ? (S = k, L === "inner" && (y === v - 1 ? _ = this.options.reverse ? "left" : "right" : y === 0 ? _ = this.options.reverse ? "right" : "left" : _ = "center"), n === "top" ? c === "near" || p !== 0 ? O = -z * U + U / 2 : c === "center" ? O = -Q.highest.height / 2 - X * U + U : O = -Q.highest.height + U / 2 : c === "near" || p !== 0 ? O = U / 2 : c === "center" ? O = Q.highest.height / 2 - X * U : O = Q.highest.height - z * U, u && (O *= -1), p !== 0 && !V.showLabelBackdrop && (S += U / 2 * Math.sin(p))) : (M = k, O = (1 - z) * U / 2);
      let K;
      if (V.showLabelBackdrop) {
        const G = vt(V.backdropPadding), gt = Q.heights[y], et = Q.widths[y];
        let nt = O - G.top, ut = 0 - G.left;
        switch (H) {
          case "middle":
            nt -= gt / 2;
            break;
          case "bottom":
            nt -= gt;
            break;
        }
        switch (L) {
          case "center":
            ut -= et / 2;
            break;
          case "right":
            ut -= et;
            break;
          case "inner":
            y === v - 1 ? ut -= et : y > 0 && (ut -= et / 2);
            break;
        }
        K = {
          left: ut,
          top: nt,
          width: et + G.width,
          height: gt + G.height,
          color: V.backdropColor
        };
      }
      m.push({
        label: I,
        font: P,
        textOffset: O,
        options: {
          rotation: p,
          color: W,
          strokeColor: lt,
          strokeWidth: T,
          textAlign: _,
          textBaseline: H,
          translation: [
            S,
            M
          ],
          backdrop: K
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-_t(this.labelRotation))
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
    this.isHorizontal() ? (c = oe(t, this.left, r) - r / 2, d = oe(t, this.right, a) + a / 2, u = h = l) : (u = oe(t, this.top, r) - r / 2, h = oe(t, this.bottom, a) + a / 2, c = d = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(d, h), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && li(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, d = r.textOffset;
      pe(s, c, 0, d, l, a);
    }
    n && ci(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = yt(s.font), r = vt(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || q(e) ? (l += r.bottom, at(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: d, maxWidth: u, rotation: h } = iu(this, l, e, a);
    pe(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: u,
      rotation: h,
      textAlign: eu(a, e, n),
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
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = Y(t.grid && t.grid.z, -1), n = Y(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== ke.prototype.draw ? [
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
    return yt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ai {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    ou(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, su(t, r, s), this.override && bt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in bt[n] && (delete bt[n][s], this.override && delete ge[s]);
  }
}
function su(i, t, e) {
  const s = si(/* @__PURE__ */ Object.create(null), [
    e ? bt.get(e) : {},
    bt.get(t),
    i.defaults
  ]);
  bt.set(t, s), i.defaultRoutes && nu(t, i.defaultRoutes), i.descriptors && bt.describe(t, i.descriptors);
}
function nu(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    bt.route(o, n, l, a);
  });
}
function ou(i) {
  return "id" in i && "defaults" in i;
}
class ru {
  constructor() {
    this.controllers = new Ai(Me, "datasets", !0), this.elements = new Ai(At, "elements"), this.plugins = new Ai(Object, "plugins"), this.scales = new Ai(ke, "scales"), this._typedRegistries = [
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
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : dt(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Us(t);
    ct(s["before" + n], [], s), e[t](s), ct(s["after" + n], [], s);
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
var Bt = /* @__PURE__ */ new ru();
class au {
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
      if (ct(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    ot(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = Y(s.options && s.options.plugins, {}), o = lu(s);
    return n === !1 && !e ? [] : du(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function lu(i) {
  const t = {}, e = [], s = Object.keys(Bt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(Bt.getPlugin(s[o]));
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
function cu(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function du(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = cu(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: uu(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function uu(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Os(i, t) {
  const e = bt.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function hu(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function fu(i, t) {
  return i === t ? "_index_" : "_value_";
}
function oo(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function gu(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Rs(i, ...t) {
  if (oo(i))
    return i;
  for (const e of t) {
    const s = e.axis || gu(e.position) || i.length > 1 && oo(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function ro(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function pu(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return ro(i, "x", e[0]) || ro(i, "y", e[0]);
  }
  return {};
}
function mu(i, t) {
  const e = ge[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = Os(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!q(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Rs(r, a, pu(r, i), bt.scales[a.type]), c = fu(l, n), d = e.scales || {};
    o[r] = qe(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      d[l],
      d[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || Os(a, t), d = (ge[a] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      const h = hu(u, l), f = r[h + "AxisID"] || h;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), qe(o[f], [
        {
          axis: h
        },
        s[f],
        d[u]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    qe(a, [
      bt.scales[a.type],
      bt.scale
    ]);
  }), o;
}
function zr(i) {
  const t = i.options || (i.options = {});
  t.plugins = Y(t.plugins, {}), t.scales = mu(i, t);
}
function Gr(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function bu(i) {
  return i = i || {}, i.data = Gr(i.data), zr(i), i;
}
const ao = /* @__PURE__ */ new Map(), jr = /* @__PURE__ */ new Set();
function Ci(i, t) {
  let e = ao.get(i);
  return e || (e = t(), ao.set(i, e), jr.add(e)), e;
}
const je = (i, t, e) => {
  const s = ie(t, e);
  s !== void 0 && i.add(s);
};
class yu {
  constructor(t) {
    this._config = bu(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Gr(t);
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
    return Ci(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Ci(`${t}.transition.${e}`, () => [
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
    return Ci(`${t}-${e}`, () => [
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
    return Ci(`${s}-plugin-${e}`, () => [
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
      t && (l.add(t), d.forEach((u) => je(l, t, u))), d.forEach((u) => je(l, n, u)), d.forEach((u) => je(l, ge[o] || {}, u)), d.forEach((u) => je(l, bt, u)), d.forEach((u) => je(l, Cs, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), jr.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      ge[e] || {},
      bt.datasets[e] || {},
      {
        type: e
      },
      bt,
      Cs
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = lo(this._resolverCache, t, n);
    let l = r;
    if (xu(r, e)) {
      o.$shared = !1, s = Rt(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Re(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = lo(this._resolverCache, t, s);
    return q(e) ? Re(o, e, void 0, n) : o;
  }
}
function lo(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: Js(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const _u = (i) => q(i) && Object.getOwnPropertyNames(i).some((t) => Rt(i[t]));
function xu(i, t) {
  const { isScriptable: e, isIndexable: s } = Tr(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (Rt(a) || _u(a)) || r && at(a))
      return !0;
  }
  return !1;
}
var vu = "4.5.1";
const Su = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function co(i, t) {
  return i === "top" || i === "bottom" || Su.indexOf(i) === -1 && t === "x";
}
function uo(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function ho(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), ct(e && e.onComplete, [
    i
  ], t);
}
function Tu(i) {
  const t = i.chart, e = t.options.animation;
  ct(e && e.onProgress, [
    i
  ], t);
}
function Ur(i) {
  return en() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Di = {}, fo = (i) => {
  const t = Ur(i);
  return Object.values(Di).filter((e) => e.canvas === t).pop();
};
function wu(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Eu(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let he = class {
  static defaults = bt;
  static instances = Di;
  static overrides = ge;
  static registry = Bt;
  static version = vu;
  static getChart = fo;
  static register(...t) {
    Bt.add(...t), go();
  }
  static unregister(...t) {
    Bt.remove(...t), go();
  }
  constructor(t, e) {
    const s = this.config = new yu(e), n = Ur(t), o = fo(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || Gd(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, d = l && l.width;
    if (this.id = _l(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new au(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Nl((u) => this.update(u), r.resizeDelay || 0), this._dataChanges = [], Di[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Wt.listen(this, "complete", ho), Wt.listen(this, "progress", Tu), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return ot(t) ? e && o ? o : n ? s / n : null : t;
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
    return Bt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Pn(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Ln(this.canvas, this.ctx), this;
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
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Pn(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), ct(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    dt(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = Rs(r, a), c = l === "r", d = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : d ? "bottom" : "left",
        dtype: c ? "radialLinear" : d ? "category" : "linear"
      };
    }))), dt(o, (r) => {
      const a = r.options, l = a.id, c = Rs(l, a), d = Y(a.type, r.dtype);
      (a.position === void 0 || co(a.position, c) !== co(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let u = null;
      if (l in s && s[l].type === d)
        u = s[l];
      else {
        const h = Bt.getScale(d);
        u = new h({
          id: l,
          type: d,
          ctx: this.ctx,
          chart: this
        }), s[u.id] = u;
      }
      u.init(a, t);
    }), dt(n, (r, a) => {
      r || delete s[a];
    }), dt(s, (r) => {
      kt.configure(this, r, r.options), kt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(uo("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Os(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = Bt.getController(a), { datasetElementType: c, dataElementType: d } = bt.datasets[a];
        Object.assign(l, {
          dataElementType: Bt.getElement(d),
          datasetElementType: c && Bt.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    dt(this.data.datasets, (t, e) => {
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
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || dt(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(uo("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    dt(this.scales, (t) => {
      kt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!wn(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      wu(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!wn(n, s(o)))
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
    kt.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], dt(this.boxes, (n) => {
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
        this._updateDataset(e, Rt(t) ? t({
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
    }, n = kr(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && li(e, n), t.controller.draw(), n && ci(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return Xt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Sd.modes[e];
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
    return this.$context || (this.$context = ne(null, {
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
    Dt(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Ln(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Di[this.id], this.notifyPlugins("afterDestroy");
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
    dt(this.options.events, (o) => s(o, n));
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
    dt(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, dt(this._responsiveListeners, (t, e) => {
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
    !ki(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
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
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = El(t), c = Eu(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, ct(o.onHover, [
      t,
      a,
      this
    ], this), l && ct(o.onClick, [
      t,
      a,
      this
    ], this));
    const d = !ki(a, n);
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
function go() {
  return dt(he.instances, (i) => i._plugins.invalidate());
}
function Au(i, t, e) {
  const { startAngle: s, x: n, y: o, outerRadius: r, innerRadius: a, options: l } = t, { borderWidth: c, borderJoinStyle: d } = l, u = Math.min(c / r, wt(s - e));
  if (i.beginPath(), i.arc(n, o, r - c / 2, s + u / 2, e - u / 2), a > 0) {
    const h = Math.min(c / a, wt(s - e));
    i.arc(n, o, a + c / 2, e - h / 2, s + h / 2, !0);
  } else {
    const h = Math.min(c / 2, r * wt(s - e));
    if (d === "round")
      i.arc(n, o, h, e - Z / 2, s + Z / 2, !0);
    else if (d === "bevel") {
      const f = 2 * h * h, g = -f * Math.cos(e + Z / 2) + n, p = -f * Math.sin(e + Z / 2) + o, m = f * Math.cos(s + Z / 2) + n, y = f * Math.sin(s + Z / 2) + o;
      i.lineTo(g, p), i.lineTo(m, y);
    }
  }
  i.closePath(), i.moveTo(0, 0), i.rect(0, 0, i.canvas.width, i.canvas.height), i.clip("evenodd");
}
function Cu(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + ft, s - ft), i.closePath(), i.clip();
}
function Iu(i) {
  return qs(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Ou(i, t, e, s) {
  const n = Iu(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return Et(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: Et(n.innerStart, 0, r),
    innerEnd: Et(n.innerEnd, 0, r)
  };
}
function we(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function zi(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: d } = t, u = Math.max(t.outerRadius + s + e - c, 0), h = d > 0 ? d + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const V = d > 0 ? d - s : 0, X = u > 0 ? u - s : 0, W = (V + X) / 2, lt = W !== 0 ? g * W / (W + s) : g;
    f = (g - lt) / 2;
  }
  const p = Math.max(1e-3, g * u - e / Z) / u, m = (g - p) / 2, y = l + m + f, v = n - m - f, { outerStart: E, outerEnd: I, innerStart: S, innerEnd: M } = Ou(t, h, u, v - y), L = u - E, k = u - I, P = y + E / L, U = v - I / k, z = h + S, O = h + M, H = y + S / z, Q = v - M / O;
  if (i.beginPath(), o) {
    const V = (P + U) / 2;
    if (i.arc(r, a, u, P, V), i.arc(r, a, u, V, U), I > 0) {
      const T = we(k, U, r, a);
      i.arc(T.x, T.y, I, U, v + ft);
    }
    const X = we(O, v, r, a);
    if (i.lineTo(X.x, X.y), M > 0) {
      const T = we(O, Q, r, a);
      i.arc(T.x, T.y, M, v + ft, Q + Math.PI);
    }
    const W = (v - M / h + (y + S / h)) / 2;
    if (i.arc(r, a, h, v - M / h, W, !0), i.arc(r, a, h, W, y + S / h, !0), S > 0) {
      const T = we(z, H, r, a);
      i.arc(T.x, T.y, S, H + Math.PI, y - ft);
    }
    const lt = we(L, y, r, a);
    if (i.lineTo(lt.x, lt.y), E > 0) {
      const T = we(L, P, r, a);
      i.arc(T.x, T.y, E, y - ft, P);
    }
  } else {
    i.moveTo(r, a);
    const V = Math.cos(P) * u + r, X = Math.sin(P) * u + a;
    i.lineTo(V, X);
    const W = Math.cos(U) * u + r, lt = Math.sin(U) * u + a;
    i.lineTo(W, lt);
  }
  i.closePath();
}
function Ru(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    zi(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % ht || ht));
  }
  return zi(i, t, e, s, l, n), i.fill(), l;
}
function Du(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: d, borderDash: u, borderDashOffset: h, borderRadius: f } = l, g = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(u || []), i.lineDashOffset = h, g ? (i.lineWidth = c * 2, i.lineJoin = d || "round") : (i.lineWidth = c, i.lineJoin = d || "bevel");
  let p = t.endAngle;
  if (o) {
    zi(i, t, e, s, p, n);
    for (let m = 0; m < o; ++m)
      i.stroke();
    isNaN(a) || (p = r + (a % ht || ht));
  }
  g && Cu(i, t, p), l.selfJoin && p - r >= Z && f === 0 && d !== "miter" && Au(i, t, p), o || (zi(i, t, e, s, p, n), i.stroke());
}
class Lu extends At {
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
    ], s), { angle: o, distance: r } = Bi(n, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: d, circumference: u } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), h = (this.options.spacing + this.options.borderWidth) / 2, f = Y(u, l - a), g = ni(o, a, l) && a !== l, p = f >= ht || g, m = Ut(r, c + h, d + h);
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
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > ht ? Math.floor(s / ht) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * n, Math.sin(a) * n);
    const l = 1 - Math.sin(Math.min(Z, s || 0)), c = n * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Ru(t, this, c, o, r), Du(t, this, c, o, r), t.restore();
  }
}
function Xr(i, t, e = t) {
  i.lineCap = Y(e.borderCapStyle, t.borderCapStyle), i.setLineDash(Y(e.borderDash, t.borderDash)), i.lineDashOffset = Y(e.borderDashOffset, t.borderDashOffset), i.lineJoin = Y(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = Y(e.borderWidth, t.borderWidth), i.strokeStyle = Y(e.borderColor, t.borderColor);
}
function Mu(i, t, e) {
  i.lineTo(e.x, e.y);
}
function ku(i) {
  return i.stepped ? ql : i.tension || i.cubicInterpolationMode === "monotone" ? Jl : Mu;
}
function Yr(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), d = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !d ? s + c - l : c - l
  };
}
function Pu(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Yr(n, e, s), d = ku(o);
  let { move: u = !0, reverse: h } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(a + (h ? c - f : f)) % r], !g.skip && (u ? (i.moveTo(g.x, g.y), u = !1) : d(i, p, g, h, o.stepped), p = g);
  return l && (g = n[(a + (h ? c : 0)) % r], d(i, p, g, h, o.stepped)), !!l;
}
function Nu(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = Yr(n, e, s), { move: l = !0, reverse: c } = s || {};
  let d = 0, u = 0, h, f, g, p, m, y;
  const v = (I) => (r + (c ? a - I : I)) % o, E = () => {
    p !== m && (i.lineTo(d, m), i.lineTo(d, p), i.lineTo(d, y));
  };
  for (l && (f = n[v(0)], i.moveTo(f.x, f.y)), h = 0; h <= a; ++h) {
    if (f = n[v(h)], f.skip)
      continue;
    const I = f.x, S = f.y, M = I | 0;
    M === g ? (S < p ? p = S : S > m && (m = S), d = (u * d + I) / ++u) : (E(), i.lineTo(I, S), g = M, u = 0, p = m = S), y = S;
  }
  E();
}
function Ds(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Nu : Pu;
}
function Vu(i) {
  return i.stepped ? Rc : i.tension || i.cubicInterpolationMode === "monotone" ? Dc : le;
}
function Bu(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), Xr(i, t.options), i.stroke(n);
}
function Fu(i, t, e, s) {
  const { segments: n, options: o } = t, r = Ds(t);
  for (const a of n)
    Xr(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Hu = typeof Path2D == "function";
function Wu(i, t, e, s) {
  Hu && !t.options.segment ? Bu(i, t, e, s) : Fu(i, t, e, s);
}
class Ki extends At {
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
      Sc(this._points, s, t, n, e), this._pointsUpdated = !0;
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
    const s = this.options, n = t[e], o = this.points, r = Mr(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = Vu(s);
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
    return Ds(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = Ds(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), Wu(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function po(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class zu extends At {
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
    return po(this, t, "x", e);
  }
  inYRange(t, e) {
    return po(this, t, "y", e);
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
    this.skip || s.radius < 0.1 || !Xt(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Is(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function $r(i, t) {
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
function Jt(i, t, e, s) {
  return i ? 0 : Et(t, e, s);
}
function Gu(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = Sr(s);
  return {
    t: Jt(n.top, o.top, 0, e),
    r: Jt(n.right, o.right, 0, t),
    b: Jt(n.bottom, o.bottom, 0, e),
    l: Jt(n.left, o.left, 0, t)
  };
}
function ju(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = te(n), r = Math.min(t, e), a = i.borderSkipped, l = s || q(n);
  return {
    topLeft: Jt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Jt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Jt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Jt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Uu(i) {
  const t = $r(i), e = t.right - t.left, s = t.bottom - t.top, n = Gu(i, e / 2, s / 2), o = ju(i, e / 2, s / 2);
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
function bs(i, t, e, s) {
  const n = t === null, o = e === null, a = i && !(n && o) && $r(i, s);
  return a && (n || Ut(t, a.left, a.right)) && (o || Ut(e, a.top, a.bottom));
}
function Xu(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Yu(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function ys(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + o,
    h: i.h + r,
    radius: i.radius
  };
}
class $u extends At {
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
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = Uu(this), a = Xu(r.radius) ? Oe : Yu;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, ys(r, e, o)), t.clip(), a(t, ys(o, -e, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, ys(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return bs(this, t, e, s);
  }
  inXRange(t, e) {
    return bs(this, t, null, e);
  }
  inYRange(t, e) {
    return bs(this, null, t, e);
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
function Zu(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = qi(l, c, n);
    const d = Ls(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: d,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const u = Mr(t, d);
    for (const h of u) {
      const f = Ls(e, o[h.start], o[h.end], h.loop), g = Lr(a, n, f);
      for (const p of g)
        r.push({
          source: p,
          target: h,
          start: {
            [e]: mo(d, f, "start", Math.max)
          },
          end: {
            [e]: mo(d, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Ls(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = wt(n), o = wt(o)), {
    property: i,
    start: n,
    end: o
  };
}
function Ku(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = qi(r, a, n);
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
function qi(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function mo(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Zr(i, t) {
  let e = [], s = !1;
  return at(i) ? (s = !0, e = i) : e = Ku(i, t), e.length ? new Ki({
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
function qu(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!xt(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function Ju(i, t, e) {
  const s = ih(i);
  if (q(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return xt(n) && Math.floor(n) === n ? Qu(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function Qu(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function th(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : q(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function eh(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : q(i) ? s = i.value : s = t.getBaseValue(), s;
}
function ih(i) {
  const t = i.options, e = t.fill;
  let s = Y(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function sh(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = nh(t, e);
  a.push(Zr({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let d = c.start; d <= c.end; d++)
      oh(n, r[d], a);
  }
  return new Ki({
    points: n,
    options: {}
  });
}
function nh(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function oh(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = rh(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function rh(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const d = o[c], u = r[d.start][e], h = r[d.end][e];
    if (Ut(n, u, h)) {
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
class Kr {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: ht
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
function ah(i) {
  const { chart: t, fill: e, line: s } = i;
  if (xt(e))
    return lh(t, e);
  if (e === "stack")
    return sh(i);
  if (e === "shape")
    return !0;
  const n = ch(i);
  return n instanceof Kr ? n : Zr(n, s);
}
function lh(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function ch(i) {
  return (i.scale || {}).getPointPositionForValue ? uh(i) : dh(i);
}
function dh(i) {
  const { scale: t = {}, fill: e } = i, s = th(e, t);
  if (xt(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function uh(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = eh(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Kr({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < n; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function _s(i, t, e) {
  const s = ah(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, d = c.fill, u = c.backgroundColor, { above: h = u, below: f = u } = d || {}, g = n.getDatasetMeta(o), p = kr(n, g);
  s && r.points.length && (li(i, e), hh(i, {
    line: r,
    target: s,
    above: h,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: p
  }), ci(i));
}
function hh(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  i.save();
  let d = o;
  o !== n && (c === "x" ? (yo(i, s, r.top), xs(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), yo(i, s, r.bottom)) : c === "y" && (_o(i, s, r.left), xs(i, {
    line: e,
    target: s,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), _o(i, s, r.right), d = n)), xs(i, {
    line: e,
    target: s,
    color: d,
    scale: a,
    property: c,
    clip: l
  }), i.restore();
}
function yo(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, d = n[l], u = n[qi(l, c, n)];
    o ? (i.moveTo(d.x, d.y), o = !1) : (i.lineTo(d.x, e), i.lineTo(d.x, d.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(u.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function _o(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, d = n[l], u = n[qi(l, c, n)];
    o ? (i.moveTo(d.x, d.y), o = !1) : (i.lineTo(e, d.y), i.lineTo(d.x, d.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(e, u.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function xs(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = Zu(e, s, n);
  for (const { source: c, target: d, start: u, end: h } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, g = s !== !0;
    i.save(), i.fillStyle = f, fh(i, r, a, g && Ls(n, u, h)), i.beginPath();
    const p = !!e.pathSegment(i, c);
    let m;
    if (g) {
      p ? i.closePath() : xo(i, s, h, n);
      const y = !!s.pathSegment(i, d, {
        move: p,
        reverse: !0
      });
      m = p && y, m || xo(i, s, u, n);
    }
    i.closePath(), i.fill(m ? "evenodd" : "nonzero"), i.restore();
  }
}
function fh(i, t, e, s) {
  const n = t.chart.chartArea, { property: o, start: r, end: a } = s || {};
  if (o === "x" || o === "y") {
    let l, c, d, u;
    o === "x" ? (l = r, c = n.top, d = a, u = n.bottom) : (l = n.left, c = r, d = n.right, u = a), i.beginPath(), e && (l = Math.max(l, e.left), d = Math.min(d, e.right), c = Math.max(c, e.top), u = Math.min(u, e.bottom)), i.rect(l, c, d - l, u - c), i.clip();
  }
}
function xo(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var gh = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Ki && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: Ju(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = qu(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && _s(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      bo(o) && _s(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !bo(s) || e.drawTime !== "beforeDatasetDraw" || _s(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const vo = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, ph = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class So extends At {
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
    let e = ct(t.generateLabels, [
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
    const s = t.labels, n = yt(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = vo(s, o);
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
      const { itemWidth: v, itemHeight: E } = mh(s, e, o, m, n);
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
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = Ce(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = Tt(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = Tt(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = Tt(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = Tt(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      li(t, this), this._draw(), ci(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = bt.color, l = Ce(t.rtl, this.left, this.width), c = yt(r.font), { padding: d } = r, u = c.size, h = u / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: m } = vo(r, u), y = function(M, L, k) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const P = Y(k.lineWidth, 1);
      if (n.fillStyle = Y(k.fillStyle, a), n.lineCap = Y(k.lineCap, "butt"), n.lineDashOffset = Y(k.lineDashOffset, 0), n.lineJoin = Y(k.lineJoin, "miter"), n.lineWidth = P, n.strokeStyle = Y(k.strokeStyle, a), n.setLineDash(Y(k.lineDash, [])), r.usePointStyle) {
        const U = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: k.pointStyle,
          rotation: k.rotation,
          borderWidth: P
        }, z = l.xPlus(M, g / 2), O = L + h;
        vr(n, U, z, O, r.pointStyleWidth && g);
      } else {
        const U = L + Math.max((u - p) / 2, 0), z = l.leftForLtr(M, g), O = te(k.borderRadius);
        n.beginPath(), Object.values(O).some((H) => H !== 0) ? Oe(n, {
          x: z,
          y: U,
          w: g,
          h: p,
          radius: O
        }) : n.rect(z, U, g, p), n.fill(), P !== 0 && n.stroke();
      }
      n.restore();
    }, v = function(M, L, k) {
      pe(n, k.text, M, L + m / 2, c, {
        strikethrough: k.hidden,
        textAlign: l.textAlign(k.textAlign)
      });
    }, E = this.isHorizontal(), I = this._computeTitleHeight();
    E ? f = {
      x: Tt(o, this.left + d, this.right - s[0]),
      y: this.top + d + I,
      line: 0
    } : f = {
      x: this.left + d,
      y: Tt(o, this.top + I + d, this.bottom - e[0].height),
      line: 0
    }, Or(this.ctx, t.textDirection);
    const S = m + d;
    this.legendItems.forEach((M, L) => {
      n.strokeStyle = M.fontColor, n.fillStyle = M.fontColor;
      const k = n.measureText(M.text).width, P = l.textAlign(M.textAlign || (M.textAlign = r.textAlign)), U = g + h + k;
      let z = f.x, O = f.y;
      l.setWidth(this.width), E ? L > 0 && z + U + d > this.right && (O = f.y += S, f.line++, z = f.x = Tt(o, this.left + d, this.right - s[f.line])) : L > 0 && O + S > this.bottom && (z = f.x = z + e[f.line].width + d, f.line++, O = f.y = Tt(o, this.top + I + d, this.bottom - e[f.line].height));
      const H = l.x(z);
      if (y(H, O, M), z = Vl(P, z + g + h, E ? z + U : this.right, t.rtl), v(l.x(z), O, M), E)
        f.x += U + d;
      else if (typeof M.text != "string") {
        const Q = c.lineHeight;
        f.y += qr(M, Q) + d;
      } else
        f.y += S;
    }), Rr(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = yt(e.font), n = vt(e.padding);
    if (!e.display)
      return;
    const o = Ce(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let d, u = this.left, h = this.width;
    if (this.isHorizontal())
      h = Math.max(...this.lineWidths), d = this.top + c, u = Tt(t.align, u, this.right - h);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      d = c + Tt(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = Tt(a, u, u + h);
    r.textAlign = o.textAlign($s(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, pe(r, e.text, f, d, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = yt(t.font), s = vt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Ut(t, this.left, this.right) && Ut(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Ut(t, n.left, n.left + n.width) && Ut(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!_h(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = ph(n, s);
      n && !o && ct(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && ct(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && ct(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function mh(i, t, e, s, n) {
  const o = bh(s, i, t, e), r = yh(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function bh(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function yh(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = qr(t, e)), s;
}
function qr(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function _h(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var xh = {
  id: "legend",
  _element: So,
  start(i, t, e) {
    const s = i.legend = new So({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    kt.configure(i, s, e), kt.addBox(i, s);
  },
  stop(i) {
    kt.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    kt.configure(i, s, e), s.options = e;
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
          const c = l.controller.getStyle(e ? 0 : void 0), d = vt(c.borderWidth);
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
class Jr extends At {
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
    const n = at(s.text) ? s.text.length : 1;
    this._padding = vt(s.padding);
    const o = n * yt(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, d, u;
    return this.isHorizontal() ? (d = Tt(a, s, o), u = e + t, c = o - s) : (r.position === "left" ? (d = s + t, u = Tt(a, n, e), l = Z * -0.5) : (d = o - t, u = Tt(a, e, n), l = Z * 0.5), c = n - e), {
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
    const s = yt(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    pe(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: $s(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function vh(i, t) {
  const e = new Jr({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  kt.configure(i, e, t), kt.addBox(i, e), i.titleBlock = e;
}
var Sh = {
  id: "title",
  _element: Jr,
  start(i, t, e) {
    vh(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    kt.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    kt.configure(i, s, e), s.options = e;
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
const Ze = {
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
        const c = l.getCenterPoint(), d = Ie(t, c);
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
function Vt(i, t) {
  return t && (at(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function zt(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Th(i, t) {
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
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = yt(t.bodyFont), c = yt(t.titleFont), d = yt(t.footerFont), u = o.length, h = n.length, f = s.length, g = vt(t.padding);
  let p = g.height, m = 0, y = s.reduce((I, S) => I + S.before.length + S.lines.length + S.after.length, 0);
  if (y += i.beforeBody.length + i.afterBody.length, u && (p += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), y) {
    const I = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * I + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing;
  }
  h && (p += t.footerMarginTop + h * d.lineHeight + (h - 1) * t.footerSpacing);
  let v = 0;
  const E = function(I) {
    m = Math.max(m, e.measureText(I).width + v);
  };
  return e.save(), e.font = c.string, dt(i.title, E), e.font = l.string, dt(i.beforeBody.concat(i.afterBody), E), v = t.displayColors ? r + 2 + t.boxPadding : 0, dt(s, (I) => {
    dt(I.before, E), dt(I.lines, E), dt(I.after, E);
  }), v = 0, e.font = d.string, dt(i.footer, E), e.restore(), m += g.width, {
    width: m,
    height: p
  };
}
function wh(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Eh(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function Ah(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Eh(c, i, t, e) && (c = "center"), c;
}
function wo(i, t, e) {
  const s = e.yAlign || t.yAlign || wh(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Ah(i, t, e, s),
    yAlign: s
  };
}
function Ch(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Ih(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function Eo(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: d, topRight: u, bottomLeft: h, bottomRight: f } = te(r);
  let g = Ch(t, a);
  const p = Ih(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(d, h) + n : a === "right" && (g += Math.max(u, f) + n), {
    x: Et(g, 0, s.width - t.width),
    y: Et(p, 0, s.height - t.height)
  };
}
function Ii(i, t, e) {
  const s = vt(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function Ao(i) {
  return Vt([], zt(i));
}
function Oh(i, t, e) {
  return ne(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Co(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const Qr = {
  beforeTitle: Ht,
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
  afterTitle: Ht,
  beforeBody: Ht,
  beforeLabel: Ht,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return ot(e) || (t += e), t;
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
  afterLabel: Ht,
  afterBody: Ht,
  beforeFooter: Ht,
  footer: Ht,
  afterFooter: Ht
};
function It(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? Qr[t].call(e, s) : n;
}
class Io extends At {
  static positioners = Ze;
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
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new nn(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Oh(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = It(s, "beforeTitle", this, t), o = It(s, "title", this, t), r = It(s, "afterTitle", this, t);
    let a = [];
    return a = Vt(a, zt(n)), a = Vt(a, zt(o)), a = Vt(a, zt(r)), a;
  }
  getBeforeBody(t, e) {
    return Ao(It(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return dt(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Co(s, o);
      Vt(r.before, zt(It(a, "beforeLabel", this, o))), Vt(r.lines, It(a, "label", this, o)), Vt(r.after, zt(It(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return Ao(It(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = It(s, "beforeFooter", this, t), o = It(s, "footer", this, t), r = It(s, "afterFooter", this, t);
    let a = [];
    return a = Vt(a, zt(n)), a = Vt(a, zt(o)), a = Vt(a, zt(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Th(this.chart, e[l]));
    return t.filter && (a = a.filter((d, u, h) => t.filter(d, u, h, s))), t.itemSort && (a = a.sort((d, u) => t.itemSort(d, u, s))), dt(a, (d) => {
      const u = Co(t.callbacks, d);
      n.push(It(u, "labelColor", this, d)), o.push(It(u, "labelPointStyle", this, d)), r.push(It(u, "labelTextColor", this, d));
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
      const a = Ze[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = To(this, s), c = Object.assign({}, a, l), d = wo(this.chart, s, c), u = Eo(s, c, d, this.chart);
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
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: u } = te(a), { x: h, y: f } = t, { width: g, height: p } = e;
    let m, y, v, E, I, S;
    return o === "center" ? (I = f + p / 2, n === "left" ? (m = h, y = m - r, E = I + r, S = I - r) : (m = h + g, y = m + r, E = I - r, S = I + r), v = m) : (n === "left" ? y = h + Math.max(l, d) + r : n === "right" ? y = h + g - Math.max(c, u) - r : y = this.caretX, o === "top" ? (E = f, I = E - r, m = y - r, v = y + r) : (E = f + p, I = E + r, m = y + r, v = y - r), S = E), {
      x1: m,
      x2: y,
      x3: v,
      y1: E,
      y2: I,
      y3: S
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = Ce(s.rtl, this.x, this.width);
      for (t.x = Ii(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = yt(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, d = yt(o.bodyFont), u = Ii(this, "left", o), h = n.x(u), f = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, g = e.y + f;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, m = n.leftForLtr(h, c) + c / 2, y = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Is(t, p, m, y), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Is(t, p, m, y);
    } else {
      t.lineWidth = q(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const p = n.leftForLtr(h, c), m = n.leftForLtr(n.xPlus(h, 1), c - 2), y = te(r.borderRadius);
      Object.values(y).some((v) => v !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Oe(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: y
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Oe(t, {
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
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: d } = s, u = yt(s.bodyFont);
    let h = u.lineHeight, f = 0;
    const g = Ce(s.rtl, this.x, this.width), p = function(k) {
      e.fillText(k, g.x(t.x + f), t.y + h / 2), t.y += h + o;
    }, m = g.textAlign(r);
    let y, v, E, I, S, M, L;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = u.string, t.x = Ii(this, m, s), e.fillStyle = s.bodyColor, dt(this.beforeBody, p), f = a && m !== "right" ? r === "center" ? c / 2 + d : c + 2 + d : 0, I = 0, M = n.length; I < M; ++I) {
      for (y = n[I], v = this.labelTextColors[I], e.fillStyle = v, dt(y.before, p), E = y.lines, a && E.length && (this._drawColorBox(e, t, I, g, s), h = Math.max(u.lineHeight, l)), S = 0, L = E.length; S < L; ++S)
        p(E[S]), h = u.lineHeight;
      dt(y.after, p);
    }
    f = 0, h = u.lineHeight, dt(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = Ce(s.rtl, this.x, this.width);
      for (t.x = Ii(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = yt(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: d } = s, { topLeft: u, topRight: h, bottomLeft: f, bottomRight: g } = te(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + u, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - h, l), e.quadraticCurveTo(a + c, l, a + c, l + h), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + d - g), e.quadraticCurveTo(a + c, l + d, a + c - g, l + d), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + d), e.quadraticCurveTo(a, l + d, a, l + d - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + u), e.quadraticCurveTo(a, l, a + u, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = Ze[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = To(this, t), l = Object.assign({}, r, this._size), c = wo(e, t, l), d = Eo(t, l, c, e);
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
    const r = vt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
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
    }), o = !ki(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !ki(r, o) || a;
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
    const { caretX: s, caretY: n, options: o } = this, r = Ze[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var Rh = {
  id: "tooltip",
  _element: Io,
  positioners: Ze,
  afterInit(i, t, e) {
    e && (i.tooltip = new Io({
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
    callbacks: Qr
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
const Dh = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Lh(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Dh(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Mh = (i, t) => i === null ? null : Et(Math.round(i), 0, t);
function Oo(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class kh extends ke {
  static id = "category";
  static defaults = {
    ticks: {
      callback: Oo
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
    if (ot(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Lh(s, t, Y(e, t), this._addedLabels), Mh(e, s.length - 1);
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
    return Oo.call(this, t);
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
function Ph(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: d, maxDigits: u, includeBounds: h } = i, f = o || 1, g = d - 1, { min: p, max: m } = t, y = !ot(r), v = !ot(a), E = !ot(c), I = (m - p) / (u + 1);
  let S = En((m - p) / g / f) * f, M, L, k, P;
  if (S < 1e-14 && !y && !v)
    return [
      {
        value: p
      },
      {
        value: m
      }
    ];
  P = Math.ceil(m / S) - Math.floor(p / S), P > g && (S = En(P * S / g / f) * f), ot(l) || (M = Math.pow(10, l), S = Math.ceil(S * M) / M), n === "ticks" ? (L = Math.floor(p / S) * S, k = Math.ceil(m / S) * S) : (L = p, k = m), y && v && o && Ol((a - r) / o, S / 1e3) ? (P = Math.round(Math.min((a - r) / S, d)), S = (a - r) / P, L = r, k = a) : E ? (L = y ? r : L, k = v ? a : k, P = c - 1, S = (k - L) / P) : (P = (k - L) / S, Je(P, Math.round(P), S / 1e3) ? P = Math.round(P) : P = Math.ceil(P));
  const U = Math.max(An(S), An(L));
  M = Math.pow(10, ot(l) ? U : l), L = Math.round(L * M) / M, k = Math.round(k * M) / M;
  let z = 0;
  for (y && (h && L !== r ? (e.push({
    value: r
  }), L < r && z++, Je(Math.round((L + z * S) * M) / M, r, Ro(r, I, i)) && z++) : L < r && z++); z < P; ++z) {
    const O = Math.round((L + z * S) * M) / M;
    if (v && O > a)
      break;
    e.push({
      value: O
    });
  }
  return v && h && k !== a ? e.length && Je(e[e.length - 1].value, a, Ro(a, I, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!v || k === a) && e.push({
    value: k
  }), e;
}
function Ro(i, t, { horizontal: e, minRotation: s }) {
  const n = _t(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Ms extends ke {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return ot(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = Ft(n), c = Ft(o);
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
    }, o = this._range || this, r = Ph(n, o);
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
    return Yi(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Nh extends Ms {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Ks.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = xt(t) ? t : 0, this.max = xt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = _t(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
function ks(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = vt(t.backdropPadding);
    return Y(t.font && t.font.size, bt.font.size) + e.height;
  }
  return 0;
}
function Vh(i, t, e) {
  return e = at(e) ? e : [
    e
  ], {
    w: Kl(i, t.string, e),
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
function Bh(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? Z / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const d = i.getPointPosition(l, i.drawingArea + n[l], a), u = yt(c.font), h = Vh(i.ctx, u, i._pointLabels[l]);
    s[l] = h;
    const f = wt(i.getIndexAngle(l) + a), g = Math.round(Xi(f)), p = Do(g, d.x, h.w, 0, 180), m = Do(g, d.y, h.h, 90, 270);
    Fh(e, t, f, p, m);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = zh(i, s, n);
}
function Fh(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Hh(i, t, e) {
  const s = i.drawingArea, { extra: n, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, s + n + r, o), c = Math.round(Xi(wt(l.angle + ft))), d = Uh(l.y, a.h, c), u = Gh(c), h = jh(l.x, a.w, u);
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
function Wh(i, t) {
  if (!t)
    return !0;
  const { left: e, top: s, right: n, bottom: o } = i;
  return !(Xt({
    x: e,
    y: s
  }, t) || Xt({
    x: e,
    y: o
  }, t) || Xt({
    x: n,
    y: s
  }, t) || Xt({
    x: n,
    y: o
  }, t));
}
function zh(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: ks(o) / 2,
    additionalAngle: r ? Z / n : 0
  };
  let c;
  for (let d = 0; d < n; d++) {
    l.padding = e[d], l.size = t[d];
    const u = Hh(i, d, l);
    s.push(u), a === "auto" && (u.visible = Wh(u, c), u.visible && (c = u));
  }
  return s;
}
function Gh(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function jh(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Uh(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function Xh(i, t, e) {
  const { left: s, top: n, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!ot(a)) {
    const l = te(t.borderRadius), c = vt(t.backdropPadding);
    i.fillStyle = a;
    const d = s - c.left, u = n - c.top, h = o - s + c.width, f = r - n + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), Oe(i, {
      x: d,
      y: u,
      w: h,
      h: f,
      radius: l
    }), i.fill()) : i.fillRect(d, u, h, f);
  }
}
function Yh(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = i._pointLabelItems[n];
    if (!o.visible)
      continue;
    const r = s.setContext(i.getPointLabelContext(n));
    Xh(e, r, o);
    const a = yt(r.font), { x: l, y: c, textAlign: d } = o;
    pe(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: d,
      textBaseline: "middle"
    });
  }
}
function ta(i, t, e, s) {
  const { ctx: n } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, ht);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
  }
}
function $h(i, t, e, s, n) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash || []), o.lineDashOffset = n.dashOffset, o.beginPath(), ta(i, e, r, s), o.closePath(), o.stroke(), o.restore());
}
function Zh(i, t, e) {
  return ne(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Kh extends Ms {
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
      callback: Ks.formatters.numeric
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
    const t = this._padding = vt(ks(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = xt(t) && !isNaN(t) ? t : 0, this.max = xt(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / ks(this.options));
  }
  generateTickLabels(t) {
    Ms.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = ct(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Bh(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = ht / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return wt(t * e + _t(s));
  }
  getDistanceFromCenterForValue(t) {
    if (ot(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (ot(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return Zh(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - ft + s;
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
      s.save(), s.beginPath(), ta(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && Yh(this, r), n.display && this.ticks.forEach((d, u) => {
      if (u !== 0 || u === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(d.value);
        const h = this.getContext(u), f = n.setContext(h), g = o.setContext(h);
        $h(this, f, l, r, g);
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
      const c = s.setContext(this.getContext(l)), d = yt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = d.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const u = vt(c.backdropPadding);
        t.fillRect(-r / 2 - u.left, -o - d.size / 2 - u.top, r + u.width, d.size + u.height);
      }
      pe(t, a.label, 0, -o, d, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const Ji = {
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
}, Ot = /* @__PURE__ */ Object.keys(Ji);
function Lo(i, t) {
  return i - t;
}
function Mo(i, t) {
  if (ot(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), xt(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (fe(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function ko(i, t, e, s) {
  const n = Ot.length;
  for (let o = Ot.indexOf(i); o < n - 1; ++o) {
    const r = Ji[Ot[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return Ot[o];
  }
  return Ot[n - 1];
}
function qh(i, t, e, s, n) {
  for (let o = Ot.length - 1; o >= Ot.indexOf(e); o--) {
    const r = Ot[o];
    if (Ji[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return Ot[e ? Ot.indexOf(e) : 0];
}
function Jh(i) {
  for (let t = Ot.indexOf(i) + 1, e = Ot.length; t < e; ++t)
    if (Ji[Ot[t]].common)
      return Ot[t];
}
function Po(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Ys(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function Qh(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function No(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : Qh(i, s, n, e);
}
class Vo extends ke {
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
    const s = t.time || (t.time = {}), n = this._adapter = new bd._date(t.adapters.date);
    n.init(e), qe(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Mo(this, t);
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = xt(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = xt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
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
    const o = this.min, r = this.max, a = kl(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? ko(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : qh(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Jh(this._unit), this.initOffsets(n), t.reverse && a.reverse(), No(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = Et(e, 0, r), s = Et(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || ko(o.minUnit, e, s, this._getLabelCapacity(e)), a = Y(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = fe(l) || l === !0, d = {};
    let u = e, h, f;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (h = u, f = 0; h < s; h = +t.add(h, a, r), f++)
      Po(d, h, g);
    return (h === s || n.bounds === "ticks" || f === 1) && Po(d, h, g), Object.keys(d).sort(Lo).map((p) => +p);
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
      return ct(r, [
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
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = _t(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, No(this, [
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
      t.push(Mo(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return yr(t.sort(Lo));
  }
}
function Oi(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = ce(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = ce(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Hp extends Vo {
  static id = "timeseries";
  static defaults = Vo.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Oi(e, this.min), this._tableRange = Oi(e, this.max) - this._minPos, super.initOffsets(t);
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
    return (Oi(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Oi(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const ea = {
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
}, tf = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, ef = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...ea,
  ...tf
}, sf = Va[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function Ee(i) {
  return ar(i) ? ws(i) : i;
}
function nf(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return ar(t) ? new Proxy(i, {}) : i;
}
function of(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function ia(i, t) {
  i.labels = t;
}
function sa(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function rf(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return ia(e, i.labels), sa(e, i.datasets, t), e;
}
const af = Ui({
  props: ef,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = jt(null), o = or(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: d, options: u, plugins: h, datasetIdKey: f } = i, g = rf(d, f), p = nf(g, d);
      o.value = new he(n.value, {
        type: c,
        data: p,
        options: {
          ...u
        },
        plugins: h
      });
    }, a = () => {
      const c = ws(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return Mi(r), rr(a), ei([
      () => i.options,
      () => i.data
    ], (c, d) => {
      let [u, h] = c, [f, g] = d;
      const p = ws(o.value);
      if (!p)
        return;
      let m = !1;
      if (u) {
        const y = Ee(u), v = Ee(f);
        y && y !== v && (of(p, y), m = !0);
      }
      if (h) {
        const y = Ee(h.labels), v = Ee(g.labels), E = Ee(h.datasets), I = Ee(g.datasets);
        y !== v && (ia(p.config.data, y), m = !0), E && E !== I && (sa(p.config.data, E, i.datasetIdKey), m = !0);
      }
      m && Na(() => {
        l(p);
      });
    }, {
      deep: !0
    }), () => Ts("canvas", {
      role: "img",
      "aria-label": i.ariaLabel,
      "aria-describedby": i.ariaDescribedby,
      ref: n
    }, [
      Ts("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function Pe(i, t) {
  return he.register(t), Ui({
    props: ea,
    setup(e, s) {
      let { expose: n } = s;
      const o = or(null), r = (a) => {
        o.value = a?.chart;
      };
      return n({
        chart: o
      }), () => Ts(af, sf({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const vs = /* @__PURE__ */ Pe("bar", ud), lf = /* @__PURE__ */ Pe("doughnut", on), cf = /* @__PURE__ */ Pe("line", fd), df = /* @__PURE__ */ Pe("pie", pd), uf = /* @__PURE__ */ Pe("polarArea", gd), hf = /* @__PURE__ */ Pe("radar", md);
/*!
* chartjs-plugin-annotation v3.1.0
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2024 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */
const Bo = {
  modes: {
    /**
     * Point mode returns all elements that hit test based on the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @return {AnnotationElement[]} - elements that are found
     */
    point(i, t) {
      return Li(i, t, { intersect: !0 });
    },
    /**
     * Nearest mode returns the element closest to the event position
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found (only 1 element)
     */
    nearest(i, t, e) {
      return pf(i, t, e);
    },
    /**
     * x mode returns the elements that hit-test at the current x coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    x(i, t, e) {
      return Li(i, t, { intersect: e.intersect, axis: "x" });
    },
    /**
     * y mode returns the elements that hit-test at the current y coordinate
     * @param {AnnotationElement[]} visibleElements - annotation elements which are visible
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */
    y(i, t, e) {
      return Li(i, t, { intersect: e.intersect, axis: "y" });
    }
  }
};
function an(i, t, e) {
  return (Bo.modes[e.mode] || Bo.modes.nearest)(i, t, e);
}
function ff(i, t, e) {
  return e !== "x" && e !== "y" ? i.inRange(t.x, t.y, "x", !0) || i.inRange(t.x, t.y, "y", !0) : i.inRange(t.x, t.y, e, !0);
}
function gf(i, t, e) {
  return e === "x" ? { x: i.x, y: t.y } : e === "y" ? { x: t.x, y: i.y } : t;
}
function Li(i, t, e) {
  return i.filter((s) => e.intersect ? s.inRange(t.x, t.y) : ff(s, t, e.axis));
}
function pf(i, t, e) {
  let s = Number.POSITIVE_INFINITY;
  return Li(i, t, e).reduce((n, o) => {
    const r = o.getCenterPoint(), a = gf(t, r, e.axis), l = Ie(t, a);
    return l < s ? (n = [o], s = l) : l === s && n.push(o), n;
  }, []).sort((n, o) => n._index - o._index).slice(0, 1);
}
function be(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e), o = t.x, r = t.y;
  return {
    x: o + s * (i.x - o) - n * (i.y - r),
    y: r + n * (i.x - o) + s * (i.y - r)
  };
}
const mf = (i, t) => t > i || i.length > t.length && i.slice(0, t.length) === t, de = 1e-3, Qi = (i, t, e) => Math.min(e, Math.max(t, i)), na = (i, t) => i.value >= i.start - t && i.value <= i.end + t;
function bf(i, t, e) {
  for (const s of Object.keys(i))
    i[s] = Qi(i[s], t, e);
  return i;
}
function yf(i, t, e, s) {
  return !i || !t || e <= 0 ? !1 : Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2) <= Math.pow(e + s, 2);
}
function oa(i, { x: t, y: e, x2: s, y2: n }, o, { borderWidth: r, hitTolerance: a }) {
  const l = (r + a) / 2, c = i.x >= t - l - de && i.x <= s + l + de, d = i.y >= e - l - de && i.y <= n + l + de;
  return o === "x" ? c : (o === "y" || c) && d;
}
function ra(i, { rect: t, center: e }, s, { rotation: n, borderWidth: o, hitTolerance: r }) {
  const a = be(i, e, _t(-n));
  return oa(a, t, s, { borderWidth: o, hitTolerance: r });
}
function ye(i, t) {
  const { centerX: e, centerY: s } = i.getProps(["centerX", "centerY"], t);
  return { x: e, y: s };
}
function _f(i, t, e, s = !0) {
  const n = e.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = n[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (mf(a, r)) {
      if (s)
        throw new Error(`${i} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const aa = (i) => typeof i == "string" && i.endsWith("%"), la = (i) => parseFloat(i) / 100, ca = (i) => Qi(la(i), 0, 1), Ue = (i, t) => ({ x: i, y: t, x2: i, y2: t, width: 0, height: 0 }), xf = {
  box: (i) => Ue(i.centerX, i.centerY),
  doughnutLabel: (i) => Ue(i.centerX, i.centerY),
  ellipse: (i) => ({ centerX: i.centerX, centerY: i.centerX, radius: 0, width: 0, height: 0 }),
  label: (i) => Ue(i.centerX, i.centerY),
  line: (i) => Ue(i.x, i.y),
  point: (i) => ({ centerX: i.centerX, centerY: i.centerY, radius: 0, width: 0, height: 0 }),
  polygon: (i) => Ue(i.centerX, i.centerY)
};
function ln(i, t) {
  return t === "start" ? 0 : t === "end" ? i : aa(t) ? ca(t) * i : i / 2;
}
function se(i, t, e = !0) {
  return typeof t == "number" ? t : aa(t) ? (e ? ca(t) : la(t)) * i : i;
}
function vf(i, t) {
  const { x: e, width: s } = i, n = t.textAlign;
  return n === "center" ? e + s / 2 : n === "end" || n === "right" ? e + s : e;
}
function da(i, t, { borderWidth: e, position: s, xAdjust: n, yAdjust: o }, r) {
  const a = q(r), l = t.width + (a ? r.width : 0) + e, c = t.height + (a ? r.height : 0) + e, d = cn(s), u = Fo(i.x, l, n, d.x), h = Fo(i.y, c, o, d.y);
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
function cn(i, t = "center") {
  return q(i) ? {
    x: Y(i.x, t),
    y: Y(i.y, t)
  } : (i = Y(i, t), {
    x: i,
    y: i
  });
}
const ua = (i, t) => i && i.autoFit && t < 1;
function ha(i, t) {
  const e = i.font, s = at(e) ? e : [e];
  return ua(i, t) ? s.map(function(n) {
    const o = yt(n);
    return o.size = Math.floor(n.size * t), o.lineHeight = n.lineHeight, yt(o);
  }) : s.map((n) => yt(n));
}
function fa(i) {
  return i && (Dt(i.xValue) || Dt(i.yValue));
}
function Fo(i, t, e = 0, s) {
  return i - ln(t, s) + e;
}
function Ne(i, t, e) {
  const s = e.init;
  if (s) {
    if (s === !0)
      return pa(t, e);
  } else return;
  return Sf(i, t, e);
}
function ga(i, t, e) {
  let s = !1;
  return t.forEach((n) => {
    Rt(i[n]) ? (s = !0, e[n] = i[n]) : Dt(e[n]) && delete e[n];
  }), s;
}
function pa(i, t) {
  const e = t.type || "line";
  return xf[e](i);
}
function Sf(i, t, e) {
  const s = ct(e.init, [{ chart: i, properties: t, options: e }]);
  if (s === !0)
    return pa(t, e);
  if (q(s))
    return s;
}
const Ss = /* @__PURE__ */ new Map(), Tf = (i) => isNaN(i) || i <= 0, wf = (i) => i.reduce(function(t, e) {
  return t += e.string, t;
}, "");
function ts(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function es(i, { x: t, y: e }, s) {
  s && (i.translate(t, e), i.rotate(_t(s)), i.translate(-t, -e));
}
function Yt(i, t) {
  if (t && t.borderWidth)
    return i.lineCap = t.borderCapStyle || "butt", i.setLineDash(t.borderDash), i.lineDashOffset = t.borderDashOffset, i.lineJoin = t.borderJoinStyle || "miter", i.lineWidth = t.borderWidth, i.strokeStyle = t.borderColor, !0;
}
function Ve(i, t) {
  i.shadowColor = t.backgroundShadowColor, i.shadowBlur = t.shadowBlur, i.shadowOffsetX = t.shadowOffsetX, i.shadowOffsetY = t.shadowOffsetY;
}
function is(i, t) {
  const e = t.content;
  if (ts(e))
    return {
      width: se(e.width, t.width),
      height: se(e.height, t.height)
    };
  const s = ha(t), n = t.textStrokeWidth, o = at(e) ? e : [e], r = o.join() + wf(s) + n + (i._measureText ? "-spriting" : "");
  return Ss.has(r) || Ss.set(r, If(i, o, s, n)), Ss.get(r);
}
function ma(i, t, e) {
  const { x: s, y: n, width: o, height: r } = t;
  i.save(), Ve(i, e);
  const a = Yt(i, e);
  i.fillStyle = e.backgroundColor, i.beginPath(), Oe(i, {
    x: s,
    y: n,
    w: o,
    h: r,
    radius: bf(te(e.borderRadius), 0, Math.min(o, r) / 2)
  }), i.closePath(), i.fill(), a && (i.shadowColor = e.borderShadowColor, i.stroke()), i.restore();
}
function ba(i, t, e, s) {
  const n = e.content;
  if (ts(n)) {
    i.save(), i.globalAlpha = Df(e.opacity, n.style.opacity), i.drawImage(n, t.x, t.y, t.width, t.height), i.restore();
    return;
  }
  const o = at(n) ? n : [n], r = ha(e, s), a = e.color, l = at(a) ? a : [a], c = vf(t, e), d = t.y + e.textStrokeWidth / 2;
  i.save(), i.textBaseline = "middle", i.textAlign = e.textAlign, Ef(i, e) && Of(i, { x: c, y: d }, o, r), Rf(i, { x: c, y: d }, o, { fonts: r, colors: l }), i.restore();
}
function Ef(i, t) {
  if (t.textStrokeWidth > 0)
    return i.lineJoin = "round", i.miterLimit = 2, i.lineWidth = t.textStrokeWidth, i.strokeStyle = t.textStrokeColor, !0;
}
function Af(i, t, e, s) {
  const { radius: n, options: o } = t, r = o.pointStyle, a = o.rotation;
  let l = (a || 0) * Xs;
  if (ts(r)) {
    i.save(), i.translate(e, s), i.rotate(l), i.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), i.restore();
    return;
  }
  Tf(n) || Cf(i, { x: e, y: s, radius: n, rotation: a, style: r, rad: l });
}
function Cf(i, { x: t, y: e, radius: s, rotation: n, style: o, rad: r }) {
  let a, l, c, d;
  switch (i.beginPath(), o) {
    // Default includes circle
    default:
      i.arc(t, e, s, 0, ht), i.closePath();
      break;
    case "triangle":
      i.moveTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Vi, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Vi, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), i.closePath();
      break;
    case "rectRounded":
      d = s * 0.516, c = s - d, a = Math.cos(r + Mt) * c, l = Math.sin(r + Mt) * c, i.arc(t - a, e - l, d, r - Z, r - ft), i.arc(t + l, e - a, d, r - ft, r), i.arc(t + a, e + l, d, r, r + ft), i.arc(t - l, e + a, d, r + ft, r + Z), i.closePath();
      break;
    case "rect":
      if (!n) {
        c = Math.SQRT1_2 * s, i.rect(t - c, e - c, 2 * c, 2 * c);
        break;
      }
      r += Mt;
    /* falls through */
    case "rectRot":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + l, e - a), i.lineTo(t + a, e + l), i.lineTo(t - l, e + a), i.closePath();
      break;
    case "crossRot":
      r += Mt;
    /* falls through */
    case "cross":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
      break;
    case "star":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a), r += Mt, a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
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
function If(i, t, e, s) {
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
    const c = o[Math.min(l, o.length - 1)], d = n[Math.min(l, n.length - 1)], u = d.lineHeight;
    i.beginPath(), i.font = d.string, i.fillStyle = c, i.fillText(a, t, e + u / 2 + r), r += u, i.fill();
  });
}
function Df(i, t) {
  const e = fe(i) ? i : t;
  return fe(e) ? Qi(e, 0, 1) : 1;
}
const ya = ["left", "bottom", "top", "right"];
function Lf(i, t) {
  const { pointX: e, pointY: s, options: n } = t, o = n.callout, r = o && o.display && Vf(t, o);
  if (!r || Ff(t, o, r))
    return;
  if (i.save(), i.beginPath(), !Yt(i, o))
    return i.restore();
  const { separatorStart: l, separatorEnd: c } = Mf(t, r), { sideStart: d, sideEnd: u } = Pf(t, r, l);
  (o.margin > 0 || n.borderWidth === 0) && (i.moveTo(l.x, l.y), i.lineTo(c.x, c.y)), i.moveTo(d.x, d.y), i.lineTo(u.x, u.y);
  const h = be({ x: e, y: s }, t.getCenterPoint(), _t(-t.rotation));
  i.lineTo(h.x, h.y), i.stroke(), i.restore();
}
function Mf(i, t) {
  const { x: e, y: s, x2: n, y2: o } = i, r = kf(i, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: s }, l = { x: a.x, y: o }) : (a = { x: e, y: s + r }, l = { x: n, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function kf(i, t) {
  const { width: e, height: s, options: n } = i, o = n.callout.margin + n.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? s + o : -o;
}
function Pf(i, t, e) {
  const { y: s, width: n, height: o, options: r } = i, a = r.callout.start, l = Nf(t, r.callout);
  let c, d;
  return t === "left" || t === "right" ? (c = { x: e.x, y: s + se(o, a) }, d = { x: c.x + l, y: c.y }) : (c = { x: e.x + se(n, a), y: e.y }, d = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: d };
}
function Nf(i, t) {
  const e = t.side;
  return i === "left" || i === "top" ? -e : e;
}
function Vf(i, t) {
  const e = t.position;
  return ya.includes(e) ? e : Bf(i, t);
}
function Bf(i, t) {
  const { x: e, y: s, x2: n, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: d, centerY: u, rotation: h } = i, f = { x: d, y: u }, g = t.start, p = se(r, g), m = se(a, g), y = [e, e + p, e + p, n], v = [s + m, o, s, o], E = [];
  for (let I = 0; I < 4; I++) {
    const S = be({ x: y[I], y: v[I] }, f, _t(h));
    E.push({
      position: ya[I],
      distance: Ie(S, { x: l, y: c })
    });
  }
  return E.sort((I, S) => I.distance - S.distance)[0].position;
}
function Ff(i, t, e) {
  const { pointX: s, pointY: n } = i, o = t.margin;
  let r = s, a = n;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), i.inRange(r, a);
}
const Ho = {
  xScaleID: { min: "xMin", max: "xMax", start: "left", end: "right", startProp: "x", endProp: "x2" },
  yScaleID: { min: "yMin", max: "yMax", start: "bottom", end: "top", startProp: "y", endProp: "y2" }
};
function Le(i, t, e) {
  return t = typeof t == "number" ? t : i.parse(t), xt(t) ? i.getPixelForValue(t) : e;
}
function me(i, t, e) {
  const s = t[e];
  if (s || e === "scaleID")
    return s;
  const n = e.charAt(0), o = Object.values(i).filter((r) => r.axis && r.axis === n);
  return o.length ? o[0].id : n;
}
function _a(i, t) {
  if (i) {
    const e = i.options.reverse, s = Le(i, t.min, e ? t.end : t.start), n = Le(i, t.max, e ? t.start : t.end);
    return {
      start: s,
      end: n
    };
  }
}
function xa(i, t) {
  const { chartArea: e, scales: s } = i, n = s[me(s, t, "xScaleID")], o = s[me(s, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return n && (r = Le(n, t.xValue, n.left + n.width / 2)), o && (a = Le(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function dn(i, t) {
  const e = i.scales, s = e[me(e, t, "xScaleID")], n = e[me(e, t, "yScaleID")];
  if (!s && !n)
    return {};
  let { left: o, right: r } = s || i.chartArea, { top: a, bottom: l } = n || i.chartArea;
  const c = Wo(s, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const d = Wo(n, { min: t.yMin, max: t.yMax, start: l, end: a });
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
function va(i, t) {
  if (!fa(t)) {
    const e = dn(i, t);
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
function Hf(i, t) {
  const { scales: e, chartArea: s } = i, n = e[t.scaleID], o = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
  return n ? zf(n, o, t) : Gf(e, o, t), o;
}
function Sa(i, t) {
  const e = dn(i, t);
  return e.initProperties = Ne(i, e, t), e.elements = [{
    type: "label",
    optionScope: "label",
    properties: Xf(i, e, t),
    initProperties: e.initProperties
  }], e;
}
function Wf(i, t) {
  const e = xa(i, t), s = t.radius * 2;
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
function Wo(i, t) {
  const e = _a(i, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function zf(i, t, e) {
  const s = Le(i, e.value, NaN), n = Le(i, e.endValue, s);
  i.isHorizontal() ? (t.x = s, t.x2 = n) : (t.y = s, t.y2 = n);
}
function Gf(i, t, e) {
  for (const s of Object.keys(Ho)) {
    const n = i[me(i, e, s)];
    if (n) {
      const { min: o, max: r, start: a, end: l, startProp: c, endProp: d } = Ho[s], u = _a(n, { min: e[o], max: e[r], start: n[a], end: n[l] });
      t[c] = u.start, t[d] = u.end;
    }
  }
}
function jf({ properties: i, options: t }, e, s, n) {
  const { x: o, x2: r, width: a } = i;
  return Ta({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.x,
    padding: { start: n.left, end: n.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function Uf({ properties: i, options: t }, e, s, n) {
  const { y: o, y2: r, height: a } = i;
  return Ta({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.y,
    padding: { start: n.top, end: n.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function Ta(i, t) {
  const { start: e, end: s, borderWidth: n } = i, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = s - n - e - r - a - t.size;
  return e + n / 2 + l + ln(c, o);
}
function Xf(i, t, e) {
  const s = e.label;
  s.backgroundColor = "transparent", s.callout.display = !1;
  const n = cn(s.position), o = vt(s.padding), r = is(i.ctx, s), a = jf({ properties: t, options: e }, r, n, o), l = Uf({ properties: t, options: e }, r, n, o), c = r.width + o.width, d = r.height + o.height;
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
const Ps = ["enter", "leave"], un = Ps.concat("click");
function Yf(i, t, e) {
  t.listened = ga(e, un, t.listeners), t.moveListened = !1, Ps.forEach((s) => {
    Rt(e[s]) && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((s) => {
    !t.listened && Rt(s.click) && (t.listened = !0), t.moveListened || Ps.forEach((n) => {
      Rt(s[n]) && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function $f(i, t, e) {
  if (i.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return Zf(i, t, e);
      case "click":
        return Kf(i, t, e);
    }
}
function Zf(i, t, e) {
  if (!i.moveListened)
    return;
  let s;
  t.type === "mousemove" ? s = an(i.visibleElements, t, e.interaction) : s = [];
  const n = i.hovered;
  i.hovered = s;
  const o = { state: i, event: t };
  let r = zo(o, "leave", n, s);
  return zo(o, "enter", s, n) || r;
}
function zo({ state: i, event: t }, e, s, n) {
  let o;
  for (const r of s)
    n.indexOf(r) < 0 && (o = wa(r.options[e] || i.listeners[e], r, t) || o);
  return o;
}
function Kf(i, t, e) {
  const s = i.listeners, n = an(i.visibleElements, t, e.interaction);
  let o;
  for (const r of n)
    o = wa(r.options.click || s.click, r, t) || o;
  return o;
}
function wa(i, t, e) {
  return ct(i, [t.$context, e]) === !0;
}
const Gi = ["afterDraw", "beforeDraw"];
function qf(i, t, e) {
  const s = t.visibleElements;
  t.hooked = ga(e, Gi, t.hooks), t.hooked || s.forEach((n) => {
    t.hooked || Gi.forEach((o) => {
      Rt(n.options[o]) && (t.hooked = !0);
    });
  });
}
function Go(i, t, e) {
  if (i.hooked) {
    const s = t.options[e] || i.hooks[e];
    return ct(s, [t.$context]);
  }
}
function Jf(i, t, e) {
  const s = sg(i.scales, t, e);
  let n = jo(t, s, "min", "suggestedMin");
  n = jo(t, s, "max", "suggestedMax") || n, n && Rt(t.handleTickRangeOptions) && t.handleTickRangeOptions();
}
function Qf(i, t) {
  for (const e of i)
    eg(e, t);
}
function jo(i, t, e, s) {
  if (xt(t[e]) && !tg(i.options, e, s)) {
    const n = i[e] !== t[e];
    return i[e] = t[e], n;
  }
}
function tg(i, t, e) {
  return Dt(i[t]) || Dt(i[e]);
}
function eg(i, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const s = me(t, i, e);
    s && !t[s] && ig(i, e) && console.warn(`No scale found with id '${s}' for annotation '${i.id}'`);
  }
}
function ig(i, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const s of ["Min", "Max", "Value"])
    if (Dt(i[e + s]))
      return !0;
  return !1;
}
function sg(i, t, e) {
  const s = t.axis, n = t.id, o = s + "ScaleID", r = {
    min: Y(t.min, Number.NEGATIVE_INFINITY),
    max: Y(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === n ? Uo(a, t, ["value", "endValue"], r) : me(i, a, o) === n && Uo(a, t, [s + "Min", s + "Max", s + "Value"], r);
  return r;
}
function Uo(i, t, e, s) {
  for (const n of e) {
    const o = i[n];
    if (Dt(o)) {
      const r = t.parse(o);
      s.min = Math.min(s.min, r), s.max = Math.max(s.max, r);
    }
  }
}
class Be extends At {
  inRange(t, e, s, n) {
    const { x: o, y: r } = be({ x: t, y: e }, this.getCenterPoint(n), _t(-this.options.rotation));
    return oa({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], n), s, this.options);
  }
  getCenterPoint(t) {
    return ye(this, t);
  }
  draw(t) {
    t.save(), es(t, this.getCenterPoint(), this.options.rotation), ma(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return Sa(t, e);
  }
}
Be.id = "boxAnnotation";
Be.defaults = {
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
Be.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
Be.descriptors = {
  label: {
    _fallback: !0
  }
};
class ss extends At {
  inRange(t, e, s, n) {
    return ra(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: 0, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return ye(this, t);
  }
  draw(t) {
    const e = this.options;
    !e.display || !e.content || (cg(t, this), t.save(), es(t, this.getCenterPoint(), this.rotation), ba(t, this, e, this._fitRatio), t.restore());
  }
  resolveElementProperties(t, e) {
    const s = ng(t, e);
    if (!s)
      return {};
    const { controllerMeta: n, point: o, radius: r } = rg(t, e, s);
    let a = is(t.ctx, e);
    const l = ag(a, r);
    ua(e, l) && (a = { width: a.width * l, height: a.height * l });
    const { position: c, xAdjust: d, yAdjust: u } = e, h = da(o, a, { borderWidth: 0, position: c, xAdjust: d, yAdjust: u });
    return {
      initProperties: Ne(t, h, e),
      ...h,
      ...n,
      rotation: e.rotation,
      _fitRatio: l
    };
  }
}
ss.id = "doughnutLabelAnnotation";
ss.defaults = {
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
ss.defaultRoutes = {};
function ng(i, t) {
  return i.getSortedVisibleDatasetMetas().reduce(function(e, s) {
    const n = s.controller;
    return n instanceof on && og(i, t, s.data) && (!e || n.innerRadius < e.controller.innerRadius) && n.options.circumference >= 90 ? s : e;
  }, void 0);
}
function og(i, t, e) {
  if (!t.autoHide)
    return !0;
  for (let s = 0; s < e.length; s++)
    if (!e[s].hidden && i.getDataVisibility(s))
      return !0;
}
function rg({ chartArea: i }, t, e) {
  const { left: s, top: n, right: o, bottom: r } = i, { innerRadius: a, offsetX: l, offsetY: c } = e.controller, d = (s + o) / 2 + l, u = (n + r) / 2 + c, h = {
    left: Math.max(d - a, s),
    right: Math.min(d + a, o),
    top: Math.max(u - a, n),
    bottom: Math.min(u + a, r)
  }, f = {
    x: (h.left + h.right) / 2,
    y: (h.top + h.bottom) / 2
  }, g = t.spacing + t.borderWidth / 2, p = a - g, m = f.y > u, y = m ? n + g : r - g, v = lg(y, d, u, p);
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
function ag({ width: i, height: t }, e) {
  const s = Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
  return e * 2 / s;
}
function lg(i, t, e, s) {
  const n = Math.pow(e - i, 2), o = Math.pow(s, 2), r = t * -2, a = Math.pow(t, 2) + n - o, l = Math.pow(r, 2) - 4 * a;
  if (l <= 0)
    return {
      _startAngle: 0,
      _endAngle: ht
    };
  const c = (-r - Math.sqrt(l)) / 2, d = (-r + Math.sqrt(l)) / 2;
  return {
    _startAngle: Bi({ x: t, y: e }, { x: c, y: i }).angle,
    _endAngle: Bi({ x: t, y: e }, { x: d, y: i }).angle
  };
}
function cg(i, t) {
  const { _centerX: e, _centerY: s, _radius: n, _startAngle: o, _endAngle: r, _counterclockwise: a, options: l } = t;
  i.save();
  const c = Yt(i, l);
  i.fillStyle = l.backgroundColor, i.beginPath(), i.arc(e, s, n, o, r, a), i.closePath(), i.fill(), c && i.stroke(), i.restore();
}
class di extends At {
  inRange(t, e, s, n) {
    return ra(
      { x: t, y: e },
      { rect: this.getProps(["x", "y", "x2", "y2"], n), center: this.getCenterPoint(n) },
      s,
      { rotation: this.rotation, borderWidth: this.options.borderWidth, hitTolerance: this.options.hitTolerance }
    );
  }
  getCenterPoint(t) {
    return ye(this, t);
  }
  draw(t) {
    const e = this.options, s = !Dt(this._visible) || this._visible;
    !e.display || !e.content || !s || (t.save(), es(t, this.getCenterPoint(), this.rotation), Lf(t, this), ma(t, this, e), ba(t, dg(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let s;
    if (fa(e))
      s = xa(t, e);
    else {
      const { centerX: a, centerY: l } = dn(t, e);
      s = { x: a, y: l };
    }
    const n = vt(e.padding), o = is(t.ctx, e), r = da(s, o, e, n);
    return {
      initProperties: Ne(t, r, e),
      pointX: s.x,
      pointY: s.y,
      ...r,
      rotation: e.rotation
    };
  }
}
di.id = "labelAnnotation";
di.defaults = {
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
di.defaultRoutes = {
  borderColor: "color"
};
function dg({ x: i, y: t, width: e, height: s, options: n }) {
  const o = n.borderWidth / 2, r = vt(n.padding);
  return {
    x: i + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - n.borderWidth,
    height: s - r.top - r.bottom - n.borderWidth
  };
}
const hn = (i, t, e) => ({ x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) }), Ns = (i, t, e) => hn(t, e, Math.abs((i - t.y) / (e.y - t.y))).x, Xo = (i, t, e) => hn(t, e, Math.abs((i - t.x) / (e.x - t.x))).y, Ke = (i) => i * i, ug = (i, t, { x: e, y: s, x2: n, y2: o }, r) => r === "y" ? { start: Math.min(s, o), end: Math.max(s, o), value: t } : { start: Math.min(e, n), end: Math.max(e, n), value: i }, Yo = (i, t, e, s) => (1 - s) * (1 - s) * i + 2 * (1 - s) * s * t + s * s * e, Vs = (i, t, e, s) => ({ x: Yo(i.x, t.x, e.x, s), y: Yo(i.y, t.y, e.y, s) }), $o = (i, t, e, s) => 2 * (1 - s) * (t - i) + 2 * s * (e - t), Zo = (i, t, e, s) => -Math.atan2($o(i.x, t.x, e.x, s), $o(i.y, t.y, e.y, s)) + 0.5 * Z;
class ui extends At {
  inRange(t, e, s, n) {
    const o = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y") {
      const r = { mouseX: t, mouseY: e }, { path: a, ctx: l } = this;
      if (a) {
        Yt(l, this.options), l.lineWidth += this.options.hitTolerance;
        const { chart: d } = this.$context, u = t * d.currentDevicePixelRatio, h = e * d.currentDevicePixelRatio, f = l.isPointInStroke(a, u, h) || Bs(this, r, n);
        return l.restore(), f;
      }
      const c = Ke(o);
      return pg(this, r, c, n) || Bs(this, r, n);
    }
    return hg(this, { mouseX: t, mouseY: e }, s, { hitSize: o, useFinalPosition: n });
  }
  getCenterPoint(t) {
    return ye(this, t);
  }
  draw(t) {
    const { x: e, y: s, x2: n, y2: o, cp: r, options: a } = this;
    if (t.save(), !Yt(t, a))
      return t.restore();
    Ve(t, a);
    const l = Math.sqrt(Math.pow(n - e, 2) + Math.pow(o - s, 2));
    if (a.curve && r)
      return Tg(t, this, r, l), t.restore();
    const { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = Ea(this), f = Math.atan2(o - s, n - e);
    t.translate(e, s), t.rotate(f), t.beginPath(), t.moveTo(0 + u, 0), t.lineTo(l - h, 0), t.shadowColor = a.borderShadowColor, t.stroke(), Fs(t, 0, u, c), Fs(t, l, -h, d), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const s = Hf(t, e), { x: n, y: o, x2: r, y2: a } = s, l = fg(s, t.chartArea), c = l ? gg({ x: n, y: o }, { x: r, y: a }, t.chartArea) : { x: n, y: o, x2: r, y2: a, width: Math.abs(r - n), height: Math.abs(a - o) };
    if (c.centerX = (r + n) / 2, c.centerY = (a + o) / 2, c.initProperties = Ne(t, c, e), e.curve) {
      const u = { x: c.x, y: c.y }, h = { x: c.x2, y: c.y2 };
      c.cp = Sg(c, e, Ie(u, h));
    }
    const d = mg(t, c, e.label);
    return d._visible = l, c.elements = [{
      type: "label",
      optionScope: "label",
      properties: d,
      initProperties: c.initProperties
    }], c;
  }
}
ui.id = "lineAnnotation";
const Ko = {
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
ui.defaults = {
  adjustScaleRange: !0,
  arrowHeads: {
    display: !1,
    end: Object.assign({}, Ko),
    fill: !1,
    length: 12,
    start: Object.assign({}, Ko),
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
    callout: Object.assign({}, di.defaults.callout),
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
ui.descriptors = {
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
ui.defaultRoutes = {
  borderColor: "color"
};
function hg(i, { mouseX: t, mouseY: e }, s, { hitSize: n, useFinalPosition: o }) {
  const r = ug(t, e, i.getProps(["x", "y", "x2", "y2"], o), s);
  return na(r, n) || Bs(i, { mouseX: t, mouseY: e }, o, s);
}
function fg({ x: i, y: t, x2: e, y2: s }, { top: n, right: o, bottom: r, left: a }) {
  return !(i < a && e < a || i > o && e > o || t < n && s < n || t > r && s > r);
}
function qo({ x: i, y: t }, e, { top: s, right: n, bottom: o, left: r }) {
  return i < r && (t = Xo(r, { x: i, y: t }, e), i = r), i > n && (t = Xo(n, { x: i, y: t }, e), i = n), t < s && (i = Ns(s, { x: i, y: t }, e), t = s), t > o && (i = Ns(o, { x: i, y: t }, e), t = o), { x: i, y: t };
}
function gg(i, t, e) {
  const { x: s, y: n } = qo(i, t, e), { x: o, y: r } = qo(t, i, e);
  return { x: s, y: n, x2: o, y2: r, width: Math.abs(o - s), height: Math.abs(r - n) };
}
function pg(i, { mouseX: t, mouseY: e }, s = de, n) {
  const { x: o, y: r, x2: a, y2: l } = i.getProps(["x", "y", "x2", "y2"], n), c = a - o, d = l - r, u = Ke(c) + Ke(d), h = u === 0 ? -1 : ((t - o) * c + (e - r) * d) / u;
  let f, g;
  return h < 0 ? (f = o, g = r) : h > 1 ? (f = a, g = l) : (f = o + h * c, g = r + h * d), Ke(t - f) + Ke(e - g) <= s;
}
function Bs(i, { mouseX: t, mouseY: e }, s, n) {
  const o = i.label;
  return o.options.display && o.inRange(t, e, n, s);
}
function mg(i, t, e) {
  const s = e.borderWidth, n = vt(e.padding), o = is(i.ctx, e), r = o.width + n.width + s, a = o.height + n.height + s;
  return yg(t, e, { width: r, height: a, padding: n }, i.chartArea);
}
function bg(i) {
  const { x: t, y: e, x2: s, y2: n } = i, o = Math.atan2(n - e, s - t);
  return o > Z / 2 ? o - Z : o < Z / -2 ? o + Z : o;
}
function yg(i, t, e, s) {
  const { width: n, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: i.x, y: i.y }, d = { x: i.x2, y: i.y2 }, u = t.rotation === "auto" ? bg(i) : _t(t.rotation), h = _g(n, o, u), f = xg(i, t, { labelSize: h, padding: r }, s), g = i.cp ? Vs(c, i.cp, d, f) : hn(c, d, f), p = { size: h.w, min: s.left, max: s.right, padding: r.left }, m = { size: h.h, min: s.top, max: s.bottom, padding: r.top }, y = Qo(g.x, p) + a, v = Qo(g.y, m) + l;
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
    rotation: Xi(u)
  };
}
function _g(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e);
  return {
    w: Math.abs(i * s) + Math.abs(t * n),
    h: Math.abs(i * n) + Math.abs(t * s)
  };
}
function xg(i, t, e, s) {
  let n;
  const o = vg(i, s);
  return t.position === "start" ? n = Jo({ w: i.x2 - i.x, h: i.y2 - i.y }, e, t, o) : t.position === "end" ? n = 1 - Jo({ w: i.x - i.x2, h: i.y - i.y2 }, e, t, o) : n = ln(1, t.position), n;
}
function Jo(i, t, e, s) {
  const { labelSize: n, padding: o } = t, r = i.w * s.dx, a = i.h * s.dy, l = r > 0 && (n.w / 2 + o.left - s.x) / r, c = a > 0 && (n.h / 2 + o.top - s.y) / a;
  return Qi(Math.max(l, c), 0, 0.25);
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
function Qo(i, t) {
  const { size: e, min: s, max: n, padding: o } = t, r = e / 2;
  return e > n - s ? (n + s) / 2 : (s >= i - o - r && (i = s + o + r), n <= i + o + r && (i = n - o - r), i);
}
function Ea(i) {
  const t = i.options, e = t.arrowHeads && t.arrowHeads.start, s = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: e,
    endOpts: s,
    startAdjust: tr(i, e),
    endAdjust: tr(i, s)
  };
}
function tr(i, t) {
  if (!t || !t.display)
    return 0;
  const { length: e, width: s } = t, n = i.options.borderWidth / 2, o = { x: e, y: s + n };
  return Math.abs(Ns(0, o, { x: 0, y: n }));
}
function Fs(i, t, e, s) {
  if (!s || !s.display)
    return;
  const { length: n, width: o, fill: r, backgroundColor: a, borderColor: l } = s, c = Math.abs(t - n) + e;
  i.beginPath(), Ve(i, s), Yt(i, s), i.moveTo(c, -o), i.lineTo(t + e, 0), i.lineTo(c, o), r === !0 ? (i.fillStyle = a || l, i.closePath(), i.fill(), i.shadowColor = "transparent") : i.shadowColor = s.borderShadowColor, i.stroke();
}
function Sg(i, t, e) {
  const { x: s, y: n, x2: o, y2: r, centerX: a, centerY: l } = i, c = Math.atan2(r - n, o - s), d = cn(t.controlPoint, 0), u = {
    x: a + se(e, d.x, !1),
    y: l + se(e, d.y, !1)
  };
  return be(u, { x: a, y: l }, c);
}
function er(i, { x: t, y: e }, { angle: s, adjust: n }, o) {
  !o || !o.display || (i.save(), i.translate(t, e), i.rotate(s), Fs(i, 0, -n, o), i.restore());
}
function Tg(i, t, e, s) {
  const { x: n, y: o, x2: r, y2: a, options: l } = t, { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = Ea(t), f = { x: n, y: o }, g = { x: r, y: a }, p = Zo(f, e, g, 0), m = Zo(f, e, g, 1) - Z, y = Vs(f, e, g, u / s), v = Vs(f, e, g, 1 - h / s), E = new Path2D();
  i.beginPath(), E.moveTo(y.x, y.y), E.quadraticCurveTo(e.x, e.y, v.x, v.y), i.shadowColor = l.borderShadowColor, i.stroke(E), t.path = E, t.ctx = i, er(i, y, { angle: p, adjust: u }, c), er(i, v, { angle: m, adjust: h }, d);
}
class hi extends At {
  inRange(t, e, s, n) {
    const o = this.options.rotation, r = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y")
      return wg({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], n), o, r);
    const { x: a, y: l, x2: c, y2: d } = this.getProps(["x", "y", "x2", "y2"], n), u = s === "y" ? { start: l, end: d } : { start: a, end: c }, h = be({ x: t, y: e }, this.getCenterPoint(n), _t(-o));
    return h[s] >= u.start - r - de && h[s] <= u.end + r + de;
  }
  getCenterPoint(t) {
    return ye(this, t);
  }
  draw(t) {
    const { width: e, height: s, centerX: n, centerY: o, options: r } = this;
    t.save(), es(t, this.getCenterPoint(), r.rotation), Ve(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Yt(t, r);
    t.ellipse(n, o, s / 2, e / 2, Z / 2, 0, 2 * Z), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return Sa(t, e);
  }
}
hi.id = "ellipseAnnotation";
hi.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  label: Object.assign({}, Be.defaults.label),
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
hi.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
hi.descriptors = {
  label: {
    _fallback: !0
  }
};
function wg(i, t, e, s) {
  const { width: n, height: o, centerX: r, centerY: a } = t, l = n / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const d = _t(e || 0), u = Math.cos(d), h = Math.sin(d), f = Math.pow(u * (i.x - r) + h * (i.y - a), 2), g = Math.pow(h * (i.x - r) - u * (i.y - a), 2);
  return f / Math.pow(l + s, 2) + g / Math.pow(c + s, 2) <= 1.0001;
}
class ns extends At {
  inRange(t, e, s, n) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], n), d = (this.options.borderWidth + this.options.hitTolerance) / 2;
    return s !== "x" && s !== "y" ? yf({ x: t, y: e }, this.getCenterPoint(n), c / 2, d) : na(s === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t }, d);
  }
  getCenterPoint(t) {
    return ye(this, t);
  }
  draw(t) {
    const e = this.options, s = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, Ve(t, e);
    const n = Yt(t, e);
    Af(t, this, this.centerX, this.centerY), n && !ts(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = s;
  }
  resolveElementProperties(t, e) {
    const s = va(t, e);
    return s.initProperties = Ne(t, s, e), s;
  }
}
ns.id = "pointAnnotation";
ns.defaults = {
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
ns.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class os extends At {
  inRange(t, e, s, n) {
    if (s !== "x" && s !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && Ag(this.elements, t, e, n);
    const o = be({ x: t, y: e }, this.getCenterPoint(n), _t(-this.options.rotation)), r = this.elements.map((c) => s === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[s] >= a && o[s] <= l;
  }
  getCenterPoint(t) {
    return ye(this, t);
  }
  draw(t) {
    const { elements: e, options: s } = this;
    t.save(), t.beginPath(), t.fillStyle = s.backgroundColor, Ve(t, s);
    const n = Yt(t, s);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), n && (t.shadowColor = s.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const s = va(t, e), { sides: n, rotation: o } = e, r = [], a = 2 * Z / n;
    let l = o * Xs;
    for (let c = 0; c < n; c++, l += a) {
      const d = Eg(s, e, l);
      d.initProperties = Ne(t, s, e), r.push(d);
    }
    return s.elements = r, s;
  }
}
os.id = "polygonAnnotation";
os.defaults = {
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
os.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
function Eg({ centerX: i, centerY: t }, { radius: e, borderWidth: s, hitTolerance: n }, o) {
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
function Ag(i, t, e, s) {
  let n = !1, o = i[i.length - 1].getProps(["bX", "bY"], s);
  for (const r of i) {
    const a = r.getProps(["bX", "bY"], s);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (n = !n), o = a;
  }
  return n;
}
const ee = {
  box: Be,
  doughnutLabel: ss,
  ellipse: hi,
  label: di,
  line: ui,
  point: ns,
  polygon: os
};
Object.keys(ee).forEach((i) => {
  bt.describe(`elements.${ee[i].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Cg = {
  update: Object.assign
}, Ig = un.concat(Gi), ir = (i, t) => q(t) ? Ws(i, t) : i, Hs = (i) => i === "color" || i === "font";
function fn(i = "line") {
  return ee[i] ? i : (console.warn(`Unknown annotation type: '${i}', defaulting to 'line'`), "line");
}
function Og(i, t, e, s) {
  const n = Dg(i, e.animations, s), o = t.annotations, r = kg(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = Aa(r, a, l.type), d = l.setContext(Mg(i, c, r, l)), u = c.resolveElementProperties(i, d);
    u.skip = Rg(u), "elements" in u && (Lg(c, u.elements, d, n), delete u.elements), Dt(c.x) || Object.assign(c, u), Object.assign(c, u.initProperties), u.options = Ca(d), n.update(c, u);
  }
}
function Rg(i) {
  return isNaN(i.x) || isNaN(i.y);
}
function Dg(i, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? Cg : new nn(i, t);
}
function Lg(i, t, e, s) {
  const n = i.elements || (i.elements = []);
  n.length = t.length;
  for (let o = 0; o < t.length; o++) {
    const r = t[o], a = r.properties, l = Aa(n, o, r.type, r.initProperties), c = e[r.optionScope].override(r);
    a.options = Ca(c), s.update(l, a);
  }
}
function Aa(i, t, e, s) {
  const n = ee[fn(e)];
  let o = i[t];
  return (!o || !(o instanceof n)) && (o = i[t] = new n(), Object.assign(o, s)), o;
}
function Ca(i) {
  const t = ee[fn(i.type)], e = {};
  e.id = i.id, e.type = i.type, e.drawTime = i.drawTime, Object.assign(
    e,
    Ws(i, t.defaults),
    Ws(i, t.defaultRoutes)
  );
  for (const s of Ig)
    e[s] = i[s];
  return e;
}
function Ws(i, t) {
  const e = {};
  for (const s of Object.keys(t)) {
    const n = t[s], o = i[s];
    Hs(s) && at(o) ? e[s] = o.map((r) => ir(r, n)) : e[s] = ir(o, n);
  }
  return e;
}
function Mg(i, t, e, s) {
  return t.$context || (t.$context = Object.assign(Object.create(i.getContext()), {
    element: t,
    get elements() {
      return e.filter((n) => n && n.options);
    },
    id: s.id,
    type: "annotation"
  }));
}
function kg(i, t) {
  const e = t.length, s = i.length;
  if (s < e) {
    const n = e - s;
    i.splice(s, 0, ...new Array(n));
  } else s > e && i.splice(e, s - e);
  return i;
}
var Pg = "3.1.0";
const Zt = /* @__PURE__ */ new Map(), sr = (i) => i.type !== "doughnutLabel", Ng = un.concat(Gi);
var Vg = {
  id: "annotation",
  version: Pg,
  beforeRegister() {
    _f("chart.js", "4.0", he.version);
  },
  afterRegister() {
    he.register(ee);
  },
  afterUnregister() {
    he.unregister(ee);
  },
  beforeInit(i) {
    Zt.set(i, {
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
    const s = Zt.get(i), n = s.annotations = [];
    let o = e.annotations;
    q(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      q(a) && (a.id = r, n.push(a));
    }) : at(o) && n.push(...o), Qf(n.filter(sr), i.scales);
  },
  afterDataLimits(i, t) {
    const e = Zt.get(i);
    Jf(i, t.scale, e.annotations.filter(sr).filter((s) => s.display && s.adjustScaleRange));
  },
  afterUpdate(i, t, e) {
    const s = Zt.get(i);
    Yf(i, s, e), Og(i, s, e, t.mode), s.visibleElements = s.elements.filter((n) => !n.skip && n.options.display), qf(i, s, e);
  },
  beforeDatasetsDraw(i, t, e) {
    Xe(i, "beforeDatasetsDraw", e.clip);
  },
  afterDatasetsDraw(i, t, e) {
    Xe(i, "afterDatasetsDraw", e.clip);
  },
  beforeDatasetDraw(i, t, e) {
    Xe(i, t.index, e.clip);
  },
  beforeDraw(i, t, e) {
    Xe(i, "beforeDraw", e.clip);
  },
  afterDraw(i, t, e) {
    Xe(i, "afterDraw", e.clip);
  },
  beforeEvent(i, t, e) {
    const s = Zt.get(i);
    $f(s, t.event, e) && (t.changed = !0);
  },
  afterDestroy(i) {
    Zt.delete(i);
  },
  getAnnotations(i) {
    const t = Zt.get(i);
    return t ? t.elements : [];
  },
  // only for testing
  _getAnnotationElementsAtEventForMode(i, t, e) {
    return an(i, t, e);
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
    _scriptable: (i) => !Ng.includes(i) && i !== "init",
    annotations: {
      _allKeys: !1,
      _fallback: (i, t) => `elements.${ee[fn(t.type)].id}`
    },
    interaction: {
      _fallback: !0
    },
    common: {
      label: {
        _indexable: Hs,
        _fallback: !0
      },
      _indexable: Hs
    }
  },
  additionalOptionScopes: [""]
};
function Xe(i, t, e) {
  const { ctx: s, chartArea: n } = i, o = Zt.get(i);
  e && li(s, n);
  const r = Bg(o.visibleElements, t).sort((a, l) => a.element.options.z - l.element.options.z);
  for (const a of r)
    Fg(s, n, o, a);
  e && ci(s);
}
function Bg(i, t) {
  const e = [];
  for (const s of i)
    if (s.options.drawTime === t && e.push({ element: s, main: !0 }), s.elements && s.elements.length)
      for (const n of s.elements)
        n.options.display && n.options.drawTime === t && e.push({ element: n });
  return e;
}
function Fg(i, t, e, s) {
  const n = s.element;
  s.main ? (Go(e, n, "beforeDraw"), n.draw(i, t), Go(e, n, "afterDraw")) : n.draw(i, t);
}
class D extends cr {
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
class gn extends Ua {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new gn()), this._instance;
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
function st(i) {
  const t = dr.INSTANCE.getEPackage(i);
  if (!t)
    throw new Error(`EPackage '${i}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing ChartsettingsPackage.`);
  return t;
}
class R extends Xa {
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
    dr.INSTANCE.set(R.eNS_URI, this), this.setEFactoryInstance(gn.eINSTANCE);
    const t = new yn();
    t.setName("SeriesSettings"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), R.Literals.SERIES_SETTINGS = t;
    const e = new it();
    e.setContainment(!1), e.setName("seriesIndex"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), R.Literals.SERIES_SETTINGS__SERIES_INDEX = e;
    const s = new it();
    s.setContainment(!1), s.setName("label"), s.setLowerBound(0), s.setUpperBound(1), t.getEStructuralFeatures().push(s), R.Literals.SERIES_SETTINGS__LABEL = s;
    const n = new it();
    n.setContainment(!1), n.setName("chartType"), n.setLowerBound(0), n.setUpperBound(1), t.getEStructuralFeatures().push(n), R.Literals.SERIES_SETTINGS__CHART_TYPE = n;
    const o = new it();
    o.setContainment(!1), o.setName("xAxisId"), o.setLowerBound(0), o.setUpperBound(1), t.getEStructuralFeatures().push(o), R.Literals.SERIES_SETTINGS__X_AXIS_ID = o;
    const r = new it();
    r.setContainment(!1), r.setName("yAxisId"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), R.Literals.SERIES_SETTINGS__Y_AXIS_ID = r;
    const a = new it();
    a.setContainment(!1), a.setName("yAxisTitle"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), R.Literals.SERIES_SETTINGS__Y_AXIS_TITLE = a;
    const l = new it();
    l.setContainment(!1), l.setName("borderColor"), l.setLowerBound(0), l.setUpperBound(1), t.getEStructuralFeatures().push(l), R.Literals.SERIES_SETTINGS__BORDER_COLOR = l;
    const c = new it();
    c.setContainment(!1), c.setName("backgroundColor"), c.setLowerBound(0), c.setUpperBound(1), t.getEStructuralFeatures().push(c), R.Literals.SERIES_SETTINGS__BACKGROUND_COLOR = c;
    const d = new it();
    d.setContainment(!1), d.setName("borderWidth"), d.setLowerBound(0), d.setUpperBound(1), t.getEStructuralFeatures().push(d), R.Literals.SERIES_SETTINGS__BORDER_WIDTH = d;
    const u = new it();
    u.setContainment(!1), u.setName("borderDash"), u.setLowerBound(0), u.setUpperBound(1), t.getEStructuralFeatures().push(u), R.Literals.SERIES_SETTINGS__BORDER_DASH = u;
    const h = new it();
    h.setContainment(!1), h.setName("fill"), h.setLowerBound(0), h.setUpperBound(1), t.getEStructuralFeatures().push(h), R.Literals.SERIES_SETTINGS__FILL = h;
    const f = new it();
    f.setContainment(!1), f.setName("showPoints"), f.setLowerBound(0), f.setUpperBound(1), t.getEStructuralFeatures().push(f), R.Literals.SERIES_SETTINGS__SHOW_POINTS = f;
    const g = new it();
    g.setContainment(!1), g.setName("pointColor"), g.setLowerBound(0), g.setUpperBound(1), t.getEStructuralFeatures().push(g), R.Literals.SERIES_SETTINGS__POINT_COLOR = g;
    const p = new it();
    p.setContainment(!1), p.setName("pointSize"), p.setLowerBound(0), p.setUpperBound(1), t.getEStructuralFeatures().push(p), R.Literals.SERIES_SETTINGS__POINT_SIZE = p;
    const m = new yn();
    m.setName("ChartSettings"), m.setAbstract(!1), m.setInterface(!1), this.getEClassifiers().push(m), m.setEPackage(this), R.Literals.CHART_SETTINGS = m;
    const y = new it();
    y.setContainment(!0), y.setName("seriesSettings"), y.setLowerBound(0), y.setUpperBound(-1), m.getEStructuralFeatures().push(y), R.Literals.CHART_SETTINGS__SERIES_SETTINGS = y;
    const v = new it();
    v.setContainment(!1), v.setName("chartType"), v.setLowerBound(0), v.setUpperBound(1), m.getEStructuralFeatures().push(v), R.Literals.CHART_SETTINGS__CHART_TYPE = v;
    const E = new it();
    E.setContainment(!1), E.setName("barOrientation"), E.setLowerBound(0), E.setUpperBound(1), m.getEStructuralFeatures().push(E), R.Literals.CHART_SETTINGS__BAR_ORIENTATION = E;
    const I = new it();
    I.setContainment(!1), I.setName("stacked"), I.setLowerBound(0), I.setUpperBound(1), m.getEStructuralFeatures().push(I), R.Literals.CHART_SETTINGS__STACKED = I;
    const S = new it();
    S.setContainment(!1), S.setName("borderColor"), S.setLowerBound(0), S.setUpperBound(1), m.getEStructuralFeatures().push(S), R.Literals.CHART_SETTINGS__BORDER_COLOR = S;
    const M = new it();
    M.setContainment(!1), M.setName("borderWidth"), M.setLowerBound(0), M.setUpperBound(1), m.getEStructuralFeatures().push(M), R.Literals.CHART_SETTINGS__BORDER_WIDTH = M;
    const L = new it();
    L.setContainment(!1), L.setName("borderDash"), L.setLowerBound(0), L.setUpperBound(1), m.getEStructuralFeatures().push(L), R.Literals.CHART_SETTINGS__BORDER_DASH = L;
    const k = new it();
    k.setContainment(!1), k.setName("backgroundColor"), k.setLowerBound(0), k.setUpperBound(1), m.getEStructuralFeatures().push(k), R.Literals.CHART_SETTINGS__BACKGROUND_COLOR = k;
    const P = new it();
    P.setContainment(!1), P.setName("fill"), P.setLowerBound(0), P.setUpperBound(1), m.getEStructuralFeatures().push(P), R.Literals.CHART_SETTINGS__FILL = P;
    const U = new it();
    U.setContainment(!1), U.setName("showPoints"), U.setLowerBound(0), U.setUpperBound(1), m.getEStructuralFeatures().push(U), R.Literals.CHART_SETTINGS__SHOW_POINTS = U;
    const z = new it();
    z.setContainment(!1), z.setName("pointColor"), z.setLowerBound(0), z.setUpperBound(1), m.getEStructuralFeatures().push(z), R.Literals.CHART_SETTINGS__POINT_COLOR = z;
    const O = new it();
    O.setContainment(!1), O.setName("pointSize"), O.setLowerBound(0), O.setUpperBound(1), m.getEStructuralFeatures().push(O), R.Literals.CHART_SETTINGS__POINT_SIZE = O;
    const H = new it();
    H.setContainment(!1), H.setName("showHorizontalGrid"), H.setLowerBound(0), H.setUpperBound(1), m.getEStructuralFeatures().push(H), R.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID = H;
    const Q = new it();
    Q.setContainment(!1), Q.setName("horizontalGridColor"), Q.setLowerBound(0), Q.setUpperBound(1), m.getEStructuralFeatures().push(Q), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR = Q;
    const V = new it();
    V.setContainment(!1), V.setName("horizontalGridWidth"), V.setLowerBound(0), V.setUpperBound(1), m.getEStructuralFeatures().push(V), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH = V;
    const X = new it();
    X.setContainment(!1), X.setName("showVerticalGrid"), X.setLowerBound(0), X.setUpperBound(1), m.getEStructuralFeatures().push(X), R.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID = X;
    const W = new it();
    W.setContainment(!1), W.setName("verticalGridColor"), W.setLowerBound(0), W.setUpperBound(1), m.getEStructuralFeatures().push(W), R.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR = W;
    const lt = new it();
    lt.setContainment(!1), lt.setName("verticalGridWidth"), lt.setLowerBound(0), lt.setUpperBound(1), m.getEStructuralFeatures().push(lt), R.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH = lt;
    const T = new it();
    T.setContainment(!1), T.setName("xAxisTitle"), T.setLowerBound(0), T.setUpperBound(1), m.getEStructuralFeatures().push(T), R.Literals.CHART_SETTINGS__X_AXIS_TITLE = T;
    const _ = new it();
    _.setContainment(!1), _.setName("yAxisTitle"), _.setLowerBound(0), _.setUpperBound(1), m.getEStructuralFeatures().push(_), R.Literals.CHART_SETTINGS__Y_AXIS_TITLE = _;
    const K = new it();
    K.setContainment(!1), K.setName("annotationsEditMode"), K.setLowerBound(0), K.setUpperBound(1), m.getEStructuralFeatures().push(K), R.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE = K;
    const G = new pi();
    G.setName("horizontalLines"), G.setLowerBound(0), G.setUpperBound(-1), m.getEStructuralFeatures().push(G), R.Literals.CHART_SETTINGS__HORIZONTAL_LINES = G;
    const gt = new pi();
    gt.setName("verticalLines"), gt.setLowerBound(0), gt.setUpperBound(-1), m.getEStructuralFeatures().push(gt), R.Literals.CHART_SETTINGS__VERTICAL_LINES = gt;
    const et = new pi();
    et.setName("horizontalBoxes"), et.setLowerBound(0), et.setUpperBound(-1), m.getEStructuralFeatures().push(et), R.Literals.CHART_SETTINGS__HORIZONTAL_BOXES = et;
    const nt = new pi();
    nt.setName("verticalBoxes"), nt.setLowerBound(0), nt.setUpperBound(-1), m.getEStructuralFeatures().push(nt), R.Literals.CHART_SETTINGS__VERTICAL_BOXES = nt;
    const ut = new it();
    ut.setContainment(!1), ut.setName("dateDisplayFormat"), ut.setLowerBound(0), ut.setUpperBound(1), m.getEStructuralFeatures().push(ut), R.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT = ut, R.Literals.SERIES_SETTINGS__SERIES_INDEX.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__LABEL.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__CHART_TYPE.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__X_AXIS_ID.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__Y_AXIS_ID.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__Y_AXIS_TITLE.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BORDER_COLOR.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BACKGROUND_COLOR.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BORDER_WIDTH.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BORDER_DASH.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__FILL.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__SHOW_POINTS.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__POINT_COLOR.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__POINT_SIZE.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SERIES_SETTINGS.setEType(R.Literals.SERIES_SETTINGS), R.Literals.CHART_SETTINGS__CHART_TYPE.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BAR_ORIENTATION.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__STACKED.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BORDER_COLOR.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BORDER_WIDTH.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BORDER_DASH.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BACKGROUND_COLOR.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__FILL.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SHOW_POINTS.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__POINT_COLOR.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__POINT_SIZE.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__X_AXIS_TITLE.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__Y_AXIS_TITLE.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT.setEType(st("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class x extends cr {
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
    return this._seriesSettings || (this._seriesSettings = Ya(this, this.eClass().getEStructuralFeature("seriesSettings"))), this._seriesSettings;
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
    return this._horizontalLines || (this._horizontalLines = mi(this, this.eClass().getEStructuralFeature("horizontalLines"))), this._horizontalLines;
  }
  get verticalLines() {
    return this._verticalLines || (this._verticalLines = mi(this, this.eClass().getEStructuralFeature("verticalLines"))), this._verticalLines;
  }
  get horizontalBoxes() {
    return this._horizontalBoxes || (this._horizontalBoxes = mi(this, this.eClass().getEStructuralFeature("horizontalBoxes"))), this._horizontalBoxes;
  }
  get verticalBoxes() {
    return this._verticalBoxes || (this._verticalBoxes = mi(this, this.eClass().getEStructuralFeature("verticalBoxes"))), this._verticalBoxes;
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
var Hg = Object.defineProperty, Wg = Object.getOwnPropertyDescriptor, fi = (i, t, e, s) => {
  for (var n = Wg(t, e), o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(t, e, n) || n);
  return n && Hg(t, e, n), n;
};
class _e extends Oa {
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
fi([
  ri({ eventType: "chart.refresh" })
], _e.prototype, "refresh");
fi([
  ri({ eventType: "chart.zoomIn" })
], _e.prototype, "zoomIn");
fi([
  ri({ eventType: "chart.zoomOut" })
], _e.prototype, "zoomOut");
fi([
  ri({ eventType: "chart.resetZoom" })
], _e.prototype, "resetZoom");
fi([
  ri({ eventType: "chart.exportAsImage" })
], _e.prototype, "exportAsImage");
const zg = /* @__PURE__ */ Ui({
  __name: "ChartWidget",
  props: /* @__PURE__ */ Ba({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(i, { expose: t }) {
    const { wrapParameters: e } = za();
    he.register(Sh, Rh, xh, $u, kh, Nh, Ki, zu, Kh, Lu, gh, Vg);
    const s = i, { datasourceId: n, id: o } = Fa(s), r = lr(i, "configv"), a = new x(), l = jt(null), c = Es($a.TINY_EMITTER), d = Es(Ra), h = ja().params.pageid || "", f = jt({ min: null, max: null }), g = jt(null);
    class p extends _e {
      refresh() {
        E(n.value, n.value);
      }
      zoomIn() {
        const H = f.value.min ?? 0, Q = f.value.max ?? 100, V = Q - H, X = (Q + H) / 2;
        f.value = { min: X - V * 0.4, max: X + V * 0.4 }, S.value++;
      }
      zoomOut() {
        const H = f.value.min ?? 0, Q = f.value.max ?? 100, V = Q - H, X = (Q + H) / 2;
        f.value = { min: X - V * 0.75, max: X + V * 0.75 }, S.value++;
      }
      resetZoom() {
        f.value = { min: null, max: null }, S.value++;
      }
      exportAsImage(H) {
        if (g.value && g.value.chart) {
          const Q = g.value.chart, V = H || "image/png", X = Q.toBase64Image(V), W = document.createElement("a");
          W.href = X, W.download = `chart.${V.split("/")[1] || "png"}`, W.click();
        }
      }
    }
    const m = new p();
    t(m), rr(() => {
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
    Mi(() => {
      if (o?.value && d.registerInstance(o.value, m, "ChartWidget", h), r.value)
        for (const O of Object.keys(a))
          (!(O in r.value) || r.value[O] === void 0) && (r.value[O] = a[O]);
    }), ei(n, (O, H) => {
      E(O, H);
    });
    const { update: E } = Ga(n, "ChartData", l), I = rt(() => {
      if (k().some(
        (V) => V.chartType?.value && V.chartType.value !== r.value?.chartType?.value
      ))
        return vs;
      const H = r.value?.chartType?.value ?? "bar";
      return {
        bar: vs,
        line: cf,
        radar: hf,
        pie: df,
        doughnut: lf,
        polarArea: uf
      }[H] || vs;
    }), S = jt(0);
    ei(() => r.value, (O) => {
      S.value++;
    }, { deep: !0 });
    function M(...O) {
      return O.find((H) => H != null && H !== "");
    }
    function L(O, H) {
      const Q = O;
      return typeof Q?.get == "function" ? Q.get(H) : Q?.[H];
    }
    function k() {
      const O = r.value?.seriesSettings;
      return O ? typeof O.toArray == "function" ? O.toArray() : Array.isArray(O) ? O : [] : [];
    }
    const P = e({
      chartType: rt(() => r.value?.chartType?.value ?? "bar"),
      borderColor: rt(() => r.value?.borderColor?.value ?? "rgba(75, 192, 192, 1)"),
      backgroundColor: rt(() => r.value?.backgroundColor?.value ?? "rgba(75, 192, 192, 0.2)"),
      borderWidth: rt(() => r.value?.borderWidth?.value ?? 2),
      borderDash: rt(() => r.value?.borderDash?.value ?? []),
      fill: rt(() => r.value?.fill?.value ?? !1),
      showPoints: rt(() => r.value?.showPoints?.value ?? !0),
      pointColor: rt(() => r.value?.pointColor?.value ?? "rgba(75, 192, 192, 1)"),
      pointSize: rt(() => r.value?.pointSize?.value ?? 3),
      barOrientation: rt(() => r.value?.barOrientation?.value ?? "vertical"),
      stacked: rt(() => r.value?.stacked?.value ?? !1),
      showHorizontalGrid: rt(() => r.value?.showHorizontalGrid?.value ?? !0),
      horizontalGridColor: rt(() => r.value?.horizontalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      horizontalGridWidth: rt(() => r.value?.horizontalGridWidth?.value ?? 1),
      showVerticalGrid: rt(() => r.value?.showVerticalGrid?.value ?? !0),
      verticalGridColor: rt(() => r.value?.verticalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      verticalGridWidth: rt(() => r.value?.verticalGridWidth?.value ?? 1),
      dateDisplayFormat: rt(() => r.value?.dateDisplayFormat?.value ?? "dd.MM.yyyy HH:mm"),
      annotationsEditMode: rt(() => r.value?.annotationsEditMode?.value ?? !1)
    });
    console.log(P.backgroundColor.value);
    const U = rt(() => {
      if (!l.value) return null;
      const O = JSON.parse(JSON.stringify(l.value)), H = k(), Q = H.length > 0;
      return O.datasets && Array.isArray(O.datasets) && (O.datasets = O.datasets.map((V, X) => {
        const W = H.find((ut) => {
          const b = ut.seriesIndex?.value;
          return b != null && b !== "" && Number(b) === X;
        }), lt = W?.chartType?.value ?? P.chartType?.value ?? "bar", T = W?.xAxisId?.value, _ = W?.yAxisId?.value, K = M(
          W?.borderColor?.value,
          r.value?.borderColor?.value,
          V.borderColor
        ), G = M(
          W?.backgroundColor?.value,
          r.value?.backgroundColor?.value,
          V.backgroundColor
        ), gt = M(
          W?.borderWidth?.value,
          r.value?.borderWidth?.value,
          V.borderWidth
        ), et = M(
          W?.borderDash?.value,
          r.value?.borderDash?.value,
          V.borderDash
        );
        let nt = {
          ...V,
          borderColor: K,
          backgroundColor: G,
          borderWidth: gt
        };
        if (Q && (nt.type = lt, T && (nt.xAxisID = T), _ && (nt.yAxisID = _), W?.label?.value && (nt.label = (W?.label).value)), lt === "line") {
          const ut = W?.showPoints?.value ?? r.value?.showPoints?.value ?? !0, b = W?.fill?.value ?? r.value?.fill?.value ?? !1, w = M(
            W?.pointColor?.value,
            r.value?.pointColor?.value,
            V.pointBackgroundColor
          ), A = W?.pointSize?.value ?? r.value?.pointSize?.value ?? 3;
          nt = {
            ...nt,
            borderDash: et,
            fill: b ? "origin" : !1,
            // Point settings
            pointRadius: ut ? A : 0,
            pointBackgroundColor: w,
            pointBorderColor: w,
            pointHoverRadius: ut ? A + 2 : 0
          };
        } else lt === "bar" ? nt = {
          ...nt,
          borderDash: et
        } : nt = {
          ...nt
        };
        return nt;
      })), O;
    }), z = rt(() => {
      if (!r.value)
        return {
          responsive: !0
        };
      const O = P.annotationsEditMode.value, H = {};
      r.value.horizontalLines?.forEach((w, A) => {
        H[`hline_${A}`] = {
          type: "line",
          yMin: w.value,
          yMax: w.value,
          borderColor: w.color,
          borderWidth: w.width,
          label: w.label ? {
            display: !0,
            content: w.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: O,
          borderDash: O ? [5, 5] : void 0,
          enter({ element: N }) {
            O && (N.options.borderWidth = w.width + 1);
          },
          leave({ element: N }) {
            O && (N.options.borderWidth = w.width);
          },
          drag({ element: N }) {
            O && r.value.horizontalLines && (L(r.value.horizontalLines, A).value = N.y);
          }
        };
      }), r.value.verticalLines?.forEach((w, A) => {
        H[`vline_${A}`] = {
          type: "line",
          xMin: w.value,
          xMax: w.value,
          borderColor: w.color,
          borderWidth: w.width,
          label: w.label ? {
            display: !0,
            content: w.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: O,
          borderDash: O ? [5, 5] : void 0,
          enter({ element: N }) {
            O && (N.options.borderWidth = w.width + 1);
          },
          leave({ element: N }) {
            O && (N.options.borderWidth = w.width);
          },
          drag({ element: N }) {
            O && r.value.verticalLines && (L(r.value.verticalLines, A).value = N.x);
          }
        };
      }), r.value.horizontalBoxes?.forEach((w, A) => {
        H[`hbox_${A}`] = {
          type: "box",
          yMin: w.yMin,
          yMax: w.yMax,
          backgroundColor: w.color,
          borderWidth: O ? 2 : 0,
          borderColor: O ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: O ? [5, 5] : void 0,
          label: w.label ? {
            display: !0,
            content: w.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: O,
          enter({ element: N }) {
            O && (N.options.borderWidth = 3);
          },
          leave({ element: N }) {
            O && (N.options.borderWidth = 2);
          },
          drag({ element: N }) {
            if (O && r.value.horizontalBoxes) {
              const Ct = w.yMax - w.yMin;
              L(r.value.horizontalBoxes, A).yMin = N.y - Ct / 2, L(r.value.horizontalBoxes, A).yMax = N.y + Ct / 2;
            }
          }
        };
      }), r.value.verticalBoxes?.forEach((w, A) => {
        H[`vbox_${A}`] = {
          type: "box",
          xMin: w.xMin,
          xMax: w.xMax,
          backgroundColor: w.color,
          borderWidth: O ? 2 : 0,
          borderColor: O ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: O ? [5, 5] : void 0,
          label: w.label ? {
            display: !0,
            content: w.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: O,
          enter({ element: N }) {
            O && (N.options.borderWidth = 3);
          },
          leave({ element: N }) {
            O && (N.options.borderWidth = 2);
          },
          drag({ element: N }) {
            if (O && r.value.verticalBoxes) {
              const Ct = w.xMax - w.xMin;
              L(r.value.verticalBoxes, A).xMin = N.x - Ct / 2, L(r.value.verticalBoxes, A).xMax = N.x + Ct / 2;
            }
          }
        };
      });
      const Q = (w) => {
        if (typeof w != "string") return !1;
        const A = /^\d{4}-\d{2}-\d{2}(T|\s)/, N = /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}/;
        return A.test(w) || N.test(w);
      }, V = (w, A) => {
        if (!w || !Q(w)) return w;
        const N = new Date(w);
        if (isNaN(N.getTime())) return w;
        const Ct = (xe) => xe.toString().padStart(2, "0"), gi = {
          yyyy: N.getFullYear().toString(),
          yy: N.getFullYear().toString().slice(-2),
          MM: Ct(N.getMonth() + 1),
          M: (N.getMonth() + 1).toString(),
          dd: Ct(N.getDate()),
          d: N.getDate().toString(),
          HH: Ct(N.getHours()),
          H: N.getHours().toString(),
          mm: Ct(N.getMinutes()),
          m: N.getMinutes().toString(),
          ss: Ct(N.getSeconds()),
          s: N.getSeconds().toString()
        };
        let rs = A;
        return Object.keys(gi).sort((xe, Ia) => Ia.length - xe.length).forEach((xe) => {
          rs = rs.replace(new RegExp(xe, "g"), gi[xe]);
        }), rs;
      }, X = P.dateDisplayFormat.value, W = /* @__PURE__ */ new Set(), lt = /* @__PURE__ */ new Set(), T = r.value?.seriesSettings && r.value.seriesSettings.length > 0, _ = {};
      T && (W.add("x"), lt.add("y"), r.value.seriesSettings?.forEach((w) => {
        w?.xAxisId?.value && W.add(w.xAxisId.value), w.yAxisId?.value && (lt.add(w.yAxisId.value), w.yAxisTitle?.value && (_[w.yAxisId.value] = w.yAxisTitle.value));
      }));
      const K = P.stacked.value === !0 || P.stacked.value === "true", G = r.value.xAxisTitle?.value ?? "", gt = r.value.yAxisTitle?.value ?? "", et = {
        y: {
          stacked: K,
          title: {
            display: !!gt,
            text: gt
          },
          grid: {
            display: P.showHorizontalGrid.value,
            color: P.horizontalGridColor.value,
            lineWidth: P.horizontalGridWidth.value
          }
        },
        x: {
          stacked: K,
          title: {
            display: !!G,
            text: G
          },
          grid: {
            display: P.showVerticalGrid.value,
            color: P.verticalGridColor.value,
            lineWidth: P.verticalGridWidth.value
          },
          ticks: {
            callback: function(w, A, N) {
              const Ct = this.getLabelForValue(w);
              return V(Ct, X);
            }
          }
        }
      };
      W.size > 1 && W.forEach((w) => {
        w !== "x" && (et[w] = {
          type: "category",
          // Explicitly set the axis type
          grid: {
            display: P.showVerticalGrid.value,
            color: P.verticalGridColor.value,
            lineWidth: P.verticalGridWidth.value
          },
          ticks: {
            callback: function(A, N, Ct) {
              const gi = this.getLabelForValue(A);
              return V(gi, X);
            }
          },
          // Position secondary axes at the top
          position: "top"
        });
      }), lt.size > 1 && lt.forEach((w) => {
        if (w !== "y") {
          const A = _[w] ?? "";
          et[w] = {
            type: "linear",
            // Explicitly set the axis type
            title: {
              display: !!A,
              text: A
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
      const b = {
        responsive: !0,
        maintainAspectRatio: !0,
        indexAxis: P.barOrientation.value === "horizontal" ? "y" : "x",
        scales: et,
        plugins: {
          legend: {
            labels: {
              usePointStyle: !0,
              pointStyle: "circle"
            }
          },
          annotation: {
            annotations: H
          }
        }
      };
      return console.log("Chart options:", b), b;
    });
    return (O, H) => (B(), St("div", {
      class: "w-full h-full",
      onClick: y,
      onContextmenu: Ha(v, ["prevent"])
    }, [
      U.value && z.value ? (B(), J(Wa(I.value), {
        key: S.value,
        id: "my-chart-id",
        ref_key: "chartRef",
        ref: g,
        options: z.value,
        data: U.value
      }, null, 8, ["options", "data"])) : $("", !0)
    ], 32));
  }
}), Gg = { class: "settings-container" }, jg = { class: "settings-block" }, Ug = { style: { display: "flex", "justify-content": "space-between", "align-items": "center", "margin-bottom": "12px" } }, Xg = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "12px" } }, Yg = { style: { "font-size": "15px" } }, $g = { key: 11 }, Zg = {
  key: 0,
  style: { padding: "20px", "text-align": "center", color: "var(--va-text-secondary)" }
}, Kg = { class: "settings-container" }, qg = { class: "settings-block" }, Jg = {
  key: 0,
  class: "settings-block"
}, Qg = {
  key: 1,
  class: "settings-block"
}, tp = {
  key: 2,
  class: "settings-block"
}, ep = { class: "settings-container" }, ip = { class: "settings-block" }, sp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, np = { class: "settings-container" }, op = { class: "settings-block" }, rp = { class: "settings-container" }, ap = { class: "settings-block" }, lp = { class: "settings-container" }, cp = { class: "settings-block" }, dp = { class: "settings-block" }, up = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, hp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, fp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, gp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, pp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, mp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, bp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, yp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, _p = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, xp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, vp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, Sp = /* @__PURE__ */ Ui({
  __name: "ChartWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const t = jt({
      seriesSection: !1,
      styleSection: !0,
      gridSection: !1,
      dateFormatSection: !1,
      axisLabelSection: !1,
      annotationsSection: !1
    }), e = lr(i, "modelValue"), s = jt(e.value?.xAxisTitle?.value ?? ""), n = jt(e.value?.yAxisTitle?.value ?? "");
    ei(s, (T) => {
      e.value.xAxisTitle ? e.value.xAxisTitle.value = T : e.value.xAxisTitle = new C(T);
    }), ei(n, (T) => {
      e.value.yAxisTitle ? e.value.yAxisTitle.value = T : e.value.yAxisTitle = new C(T);
    }), Es("i18n");
    const o = rt(() => e.value?.chartType?.value ?? "bar"), r = rt(() => o.value === "line"), a = rt(() => o.value === "bar"), l = rt(() => ["pie", "doughnut", "polarArea"].includes(o.value)), c = rt(() => {
      const T = /* @__PURE__ */ new Set(["y"]);
      return e.value?.seriesSettings?.forEach((_) => {
        _.yAxisId?.value && T.add(_.yAxisId.value);
      }), Array.from(T);
    });
    function d(T) {
      return e.value?.seriesSettings?.find(
        (K) => K.yAxisId?.value === T
      )?.yAxisTitle?.value ?? "";
    }
    function u(T, _) {
      const K = e.value?.seriesSettings?.find(
        (G) => G.yAxisId?.value === T
      );
      K && (K.yAxisTitle ? K.yAxisTitle.value = _ : K.yAxisTitle = new C(_));
    }
    Mi(() => {
      console.log("ChartWidgetSettings mounted, config:", e.value), console.log("borderColor:", e.value?.borderColor);
    });
    const h = [
      { label: "Solid", value: [] },
      { label: "Dashed", value: [5, 5] },
      { label: "Dotted", value: [2, 2] },
      { label: "Dash-Dot", value: [10, 5, 2, 5] }
    ], f = jt("[]"), g = (T) => {
      try {
        const _ = typeof T == "string" ? T : T?.value || T, K = typeof _ == "string" ? JSON.parse(_) : _;
        e.value.borderDash && (e.value.borderDash.value = K);
      } catch (_) {
        console.error("Error parsing border dash preset:", _, T);
      }
    };
    e.value.borderDash?.value && (f.value = JSON.stringify(e.value.borderDash.value));
    function p(T, _) {
      typeof T?.add == "function" ? T.add(_) : Array.isArray(T) && T.push(_);
    }
    function m(T) {
      return typeof T?.toArray == "function" ? T.toArray() : Array.isArray(T) ? T : [];
    }
    const y = rt(() => m(e.value?.horizontalLines)), v = rt(() => m(e.value?.verticalLines)), E = rt(() => m(e.value?.horizontalBoxes)), I = rt(() => m(e.value?.verticalBoxes)), S = rt(() => m(e.value?.seriesSettings));
    function M(T) {
      return typeof T?.size == "function" ? T.size() : Array.isArray(T) ? T.length : 0;
    }
    function L(T, _) {
      typeof T?.removeAt == "function" ? T.removeAt(_) : Array.isArray(T) && T.splice(_, 1);
    }
    const k = () => {
      e.value.horizontalLines || (e.value.horizontalLines = []), p(e.value.horizontalLines, {
        value: 0,
        color: "rgba(255, 0, 0, 0.8)",
        width: 2,
        label: "Line"
      });
    }, P = (T) => {
      L(e.value.horizontalLines, T);
    }, U = () => {
      e.value.verticalLines || (e.value.verticalLines = []), p(e.value.verticalLines, {
        value: 0,
        color: "rgba(0, 0, 255, 0.8)",
        width: 2,
        label: "Line"
      });
    }, z = (T) => {
      L(e.value.verticalLines, T);
    }, O = () => {
      e.value.horizontalBoxes || (e.value.horizontalBoxes = []), p(e.value.horizontalBoxes, {
        yMin: 0,
        yMax: 10,
        color: "rgba(255, 0, 0, 0.1)",
        label: "Range"
      });
    }, H = (T) => {
      L(e.value.horizontalBoxes, T);
    }, Q = () => {
      e.value.verticalBoxes || (e.value.verticalBoxes = []), p(e.value.verticalBoxes, {
        xMin: 0,
        xMax: 10,
        color: "rgba(0, 0, 255, 0.1)",
        label: "Range"
      });
    }, V = (T) => {
      L(e.value.verticalBoxes, T);
    }, X = () => {
      e.value.seriesSettings || (e.value.seriesSettings = []);
      const T = new D();
      T.seriesIndex = new C(M(e.value.seriesSettings)), T.chartType = new C("bar"), T.xAxisId = new C("x"), T.yAxisId = new C("y"), T.label = new C(""), T.borderColor = new C(""), T.backgroundColor = new C(""), T.borderWidth = new C(2), T.borderDash = new C([]), T.fill = new C(!1), T.showPoints = new C(!0), T.pointColor = new C(""), T.pointSize = new C(3), e.value.seriesSettings.push(T);
    }, W = (T) => {
      L(e.value.seriesSettings, T);
    }, lt = (T, _) => {
      try {
        const K = typeof _ == "string" ? _ : _?.value || _, G = typeof K == "string" ? JSON.parse(K) : K;
        T.borderDash ? T.borderDash.value = G : T.borderDash = new C(G);
      } catch (K) {
        console.error("Error parsing border dash preset:", K, _);
      }
    };
    return Mi(() => {
      e.value.seriesSettings || (e.value.seriesSettings = []), e.value.seriesSettings.forEach((T) => {
        T.label || (T.label = new C("")), T.borderColor || (T.borderColor = new C("")), T.backgroundColor || (T.backgroundColor = new C("")), T.borderWidth || (T.borderWidth = new C(2)), T.borderDash || (T.borderDash = new C([])), T.fill || (T.fill = new C(!1)), T.showPoints || (T.showPoints = new C(!0)), T.pointColor || (T.pointColor = new C("")), T.pointSize || (T.pointSize = new C(3));
      });
    }), (T, _) => {
      const K = ve("va-button"), G = ve("va-input"), gt = ve("va-select"), et = ve("va-color-input"), nt = ve("va-checkbox"), ut = ve("va-collapse");
      return B(), St($t, null, [
        F(ut, {
          modelValue: t.value.seriesSection,
          "onUpdate:modelValue": _[0] || (_[0] = (b) => t.value.seriesSection = b),
          icon: "format_list_numbered",
          header: "Per-Series Settings"
        }, {
          default: tt(() => [
            j("div", Gg, [
              j("div", jg, [
                _[39] || (_[39] = j("p", { style: { "margin-bottom": "12px", color: "var(--va-text-secondary)" } }, " Configure individual data series. Each series can have its own chart type, axis assignment, colors, and styling. ", -1)),
                j("div", Ug, [
                  _[33] || (_[33] = j("h3", null, "Series Configuration", -1)),
                  F(K, {
                    size: "small",
                    onClick: X
                  }, {
                    default: tt(() => [..._[32] || (_[32] = [
                      Pt("Add Series", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (B(!0), St($t, null, Se(S.value, (b, w) => (B(), St("div", {
                  key: `series_${w}`,
                  style: { border: "1px solid #ddd", padding: "16px", "border-radius": "4px", "margin-bottom": "12px", background: "#fafafa" }
                }, [
                  j("div", Xg, [
                    j("strong", Yg, "Series " + Fe(b.seriesIndex?.value ?? w), 1),
                    F(K, {
                      size: "small",
                      color: "danger",
                      onClick: (A) => W(w)
                    }, {
                      default: tt(() => [..._[34] || (_[34] = [
                        Pt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  b.seriesIndex ? (B(), J(pt(mt), {
                    key: 0,
                    label: "Series Index (0-based)",
                    modelValue: b.seriesIndex,
                    "onUpdate:modelValue": (A) => b.seriesIndex = A,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: tt(({ value: A, change: N }) => [
                      F(G, {
                        label: "Series Index (0-based)",
                        "model-value": A,
                        onInput: N,
                        type: "number",
                        min: 0
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  b.label !== void 0 ? (B(), J(pt(mt), {
                    key: 1,
                    label: "Series Label/Title (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (A) => b.label = A,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: tt(({ value: A, change: N }) => [
                      F(G, {
                        label: "Series Label/Title (optional)",
                        "model-value": A,
                        onInput: N,
                        placeholder: "e.g., Temperature, Humidity, Pressure..."
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  b.chartType ? (B(), J(gt, {
                    key: 2,
                    label: "Chart Type",
                    modelValue: b.chartType.value,
                    "onUpdate:modelValue": (A) => b.chartType.value = A,
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
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  _[36] || (_[36] = j("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Axis Assignment", -1)),
                  b.xAxisId ? (B(), J(pt(mt), {
                    key: 3,
                    label: "X-Axis ID (e.g., 'x', 'x1', 'x2')",
                    modelValue: b.xAxisId,
                    "onUpdate:modelValue": (A) => b.xAxisId = A,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: tt(({ value: A, change: N }) => [
                      F(G, {
                        label: "X-Axis ID",
                        "model-value": A,
                        onInput: N,
                        placeholder: "x"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  b.yAxisId ? (B(), J(pt(mt), {
                    key: 4,
                    label: "Y-Axis ID (e.g., 'y', 'y1', 'y2')",
                    modelValue: b.yAxisId,
                    "onUpdate:modelValue": (A) => b.yAxisId = A,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: tt(({ value: A, change: N }) => [
                      F(G, {
                        label: "Y-Axis ID",
                        "model-value": A,
                        onInput: N,
                        placeholder: "y"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  b.yAxisTitle ? (B(), J(G, {
                    key: 5,
                    label: "Y-Axis Title",
                    modelValue: b.yAxisTitle.value,
                    "onUpdate:modelValue": (A) => b.yAxisTitle.value = A,
                    placeholder: "e.g., Temperatur (°C)",
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  _[37] || (_[37] = j("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Colors", -1)),
                  b.borderColor !== void 0 ? (B(), J(pt(mt), {
                    key: 6,
                    label: "Border Color",
                    modelValue: b.borderColor,
                    "onUpdate:modelValue": (A) => b.borderColor = A,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: tt(({ value: A, change: N }) => [
                      F(et, {
                        label: "Border Color",
                        "model-value": A,
                        onInput: N
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  b.backgroundColor !== void 0 ? (B(), J(pt(mt), {
                    key: 7,
                    label: "Background Color",
                    modelValue: b.backgroundColor,
                    "onUpdate:modelValue": (A) => b.backgroundColor = A,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: tt(({ value: A, change: N }) => [
                      F(et, {
                        label: "Background Color",
                        "model-value": A,
                        onInput: N
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  _[38] || (_[38] = j("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Border Style", -1)),
                  b.borderWidth !== void 0 ? (B(), J(pt(mt), {
                    key: 8,
                    label: "Border Width (px)",
                    modelValue: b.borderWidth,
                    "onUpdate:modelValue": (A) => b.borderWidth = A,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: tt(({ value: A, change: N }) => [
                      F(G, {
                        label: "Border Width (px)",
                        "model-value": A,
                        onInput: N,
                        type: "number",
                        min: 0,
                        max: 20
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  b.borderDash !== void 0 ? (B(), J(gt, {
                    key: 9,
                    label: "Border Style",
                    "model-value": JSON.stringify(b.borderDash.value || []),
                    options: h.map((A) => ({ value: JSON.stringify(A.value), text: A.label })),
                    "value-by": "value",
                    "onUpdate:modelValue": (A) => lt(b, A),
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["model-value", "options", "onUpdate:modelValue"])) : $("", !0),
                  b.fill !== void 0 ? (B(), J(nt, {
                    key: 10,
                    label: "Fill Area",
                    modelValue: b.fill.value,
                    "onUpdate:modelValue": (A) => b.fill.value = A,
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                  b.chartType?.value === "line" || b.chartType === "line" ? (B(), St("div", $g, [
                    _[35] || (_[35] = j("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Point Style", -1)),
                    b.showPoints !== void 0 ? (B(), J(nt, {
                      key: 0,
                      label: "Show Points",
                      modelValue: b.showPoints.value,
                      "onUpdate:modelValue": (A) => b.showPoints.value = A,
                      style: { "margin-bottom": "8px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                    b.pointColor !== void 0 && b.showPoints?.value ? (B(), J(pt(mt), {
                      key: 1,
                      label: "Point Color",
                      modelValue: b.pointColor,
                      "onUpdate:modelValue": (A) => b.pointColor = A,
                      style: { "margin-bottom": "8px" }
                    }, {
                      default: tt(({ value: A, change: N }) => [
                        F(et, {
                          label: "Point Color",
                          "model-value": A,
                          onInput: N
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0),
                    b.pointSize !== void 0 && b.showPoints?.value ? (B(), J(pt(mt), {
                      key: 2,
                      label: "Point Size (px)",
                      modelValue: b.pointSize,
                      "onUpdate:modelValue": (A) => b.pointSize = A
                    }, {
                      default: tt(({ value: A, change: N }) => [
                        F(G, {
                          label: "Point Size (px)",
                          "model-value": A,
                          onInput: N,
                          type: "number",
                          min: 0,
                          max: 20
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : $("", !0)
                  ])) : $("", !0)
                ]))), 128)),
                !e.value.seriesSettings || e.value.seriesSettings.length === 0 ? (B(), St("div", Zg, ' No series-specific settings configured. Click "Add Series" to configure individual data series. ')) : $("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(ut, {
          modelValue: t.value.styleSection,
          "onUpdate:modelValue": _[17] || (_[17] = (b) => t.value.styleSection = b),
          icon: "palette",
          header: "Default Chart Styling"
        }, {
          default: tt(() => [
            j("div", Kg, [
              j("div", qg, [
                _[40] || (_[40] = j("h3", null, "Chart Type", -1)),
                e.value.chartType ? (B(), J(gt, {
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
                }, null, 8, ["modelValue"])) : $("", !0)
              ]),
              r.value ? (B(), St("div", Jg, [
                _[41] || (_[41] = j("h3", null, "Line Style", -1)),
                e.value.borderColor ? (B(), J(pt(mt), {
                  key: 0,
                  label: "Line Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": _[2] || (_[2] = (b) => e.value.borderColor = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(et, {
                      label: "Line Color",
                      "model-value": b,
                      onInput: w
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0),
                e.value.borderWidth ? (B(), J(pt(mt), {
                  key: 1,
                  label: "Line Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": _[3] || (_[3] = (b) => e.value.borderWidth = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(G, {
                      label: "Line Width (px)",
                      "model-value": b,
                      onInput: w,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0),
                e.value.borderDash ? (B(), J(gt, {
                  key: 2,
                  label: "Line Style",
                  modelValue: f.value,
                  "onUpdate:modelValue": [
                    _[4] || (_[4] = (b) => f.value = b),
                    g
                  ],
                  options: h.map((b) => ({ value: JSON.stringify(b.value), text: b.label })),
                  "value-by": "value"
                }, null, 8, ["modelValue", "options"])) : $("", !0),
                e.value.fill ? (B(), J(nt, {
                  key: 3,
                  label: "Fill Area Under Line",
                  modelValue: e.value.fill,
                  "onUpdate:modelValue": _[5] || (_[5] = (b) => e.value.fill = b)
                }, null, 8, ["modelValue"])) : $("", !0),
                e.value.backgroundColor && e.value.fill ? (B(), J(pt(mt), {
                  key: 4,
                  label: "Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": _[6] || (_[6] = (b) => e.value.backgroundColor = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(et, {
                      label: "Fill Color",
                      "model-value": b,
                      onInput: w
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0),
                _[42] || (_[42] = j("h3", { style: { "margin-top": "16px" } }, "Point Style", -1)),
                e.value.showPoints ? (B(), J(nt, {
                  key: 5,
                  label: "Show Points",
                  modelValue: e.value.showPoints.value,
                  "onUpdate:modelValue": _[7] || (_[7] = (b) => e.value.showPoints.value = b)
                }, null, 8, ["modelValue"])) : $("", !0),
                e.value.pointColor && e.value.showPoints ? (B(), J(pt(mt), {
                  key: 6,
                  label: "Point Color",
                  modelValue: e.value.pointColor,
                  "onUpdate:modelValue": _[8] || (_[8] = (b) => e.value.pointColor = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(et, {
                      label: "Point Color",
                      "model-value": b,
                      onInput: w
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0),
                e.value.pointSize && e.value.showPoints ? (B(), J(pt(mt), {
                  key: 7,
                  label: "Point Size (px)",
                  modelValue: e.value.pointSize,
                  "onUpdate:modelValue": _[9] || (_[9] = (b) => e.value.pointSize = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(G, {
                      label: "Point Size (px)",
                      "model-value": b,
                      onInput: w,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0)
              ])) : $("", !0),
              a.value ? (B(), St("div", Qg, [
                _[43] || (_[43] = j("h3", null, "Bar Layout", -1)),
                e.value.barOrientation ? (B(), J(gt, {
                  key: 0,
                  label: "Bar Orientation",
                  modelValue: e.value.barOrientation,
                  "onUpdate:modelValue": _[10] || (_[10] = (b) => e.value.barOrientation = b),
                  options: [
                    { value: "vertical", text: "Vertical (Standard)" },
                    { value: "horizontal", text: "Horizontal" }
                  ],
                  "value-by": "value"
                }, null, 8, ["modelValue"])) : $("", !0),
                e.value.stacked ? (B(), J(nt, {
                  key: 1,
                  label: "Stacked Bars",
                  modelValue: e.value.stacked.value,
                  "onUpdate:modelValue": _[11] || (_[11] = (b) => e.value.stacked.value = b)
                }, null, 8, ["modelValue"])) : $("", !0),
                _[44] || (_[44] = j("h3", { style: { "margin-top": "16px" } }, "Bar Style", -1)),
                e.value.backgroundColor ? (B(), J(pt(mt), {
                  key: 2,
                  label: "Bar Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": _[12] || (_[12] = (b) => e.value.backgroundColor = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(et, {
                      label: "Bar Fill Color",
                      "model-value": b,
                      onInput: w
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0),
                e.value.borderColor ? (B(), J(pt(mt), {
                  key: 3,
                  label: "Bar Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": _[13] || (_[13] = (b) => e.value.borderColor = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(et, {
                      label: "Bar Border Color",
                      "model-value": b,
                      onInput: w
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0),
                e.value.borderWidth ? (B(), J(pt(mt), {
                  key: 4,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": _[14] || (_[14] = (b) => e.value.borderWidth = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(G, {
                      label: "Border Width (px)",
                      "model-value": b,
                      onInput: w,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0)
              ])) : $("", !0),
              l.value ? (B(), St("div", tp, [
                _[45] || (_[45] = j("h3", null, "Segment Style", -1)),
                e.value.borderColor ? (B(), J(pt(mt), {
                  key: 0,
                  label: "Segment Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": _[15] || (_[15] = (b) => e.value.borderColor = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(et, {
                      label: "Segment Border Color",
                      "model-value": b,
                      onInput: w
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0),
                e.value.borderWidth ? (B(), J(pt(mt), {
                  key: 1,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": _[16] || (_[16] = (b) => e.value.borderWidth = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(G, {
                      label: "Border Width (px)",
                      "model-value": b,
                      onInput: w,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(ut, {
          modelValue: t.value.gridSection,
          "onUpdate:modelValue": _[24] || (_[24] = (b) => t.value.gridSection = b),
          icon: "grid_on",
          header: "Grid Lines"
        }, {
          default: tt(() => [
            j("div", ep, [
              j("div", ip, [
                _[46] || (_[46] = j("h3", null, "Horizontal Grid (Y-Axis)", -1)),
                e.value.showHorizontalGrid ? (B(), J(nt, {
                  key: 0,
                  label: "Show Horizontal Grid",
                  modelValue: e.value.showHorizontalGrid.value,
                  "onUpdate:modelValue": _[18] || (_[18] = (b) => e.value.showHorizontalGrid.value = b)
                }, null, 8, ["modelValue"])) : $("", !0),
                e.value.horizontalGridColor ? (B(), J(pt(mt), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.horizontalGridColor,
                  "onUpdate:modelValue": _[19] || (_[19] = (b) => e.value.horizontalGridColor = b),
                  disabled: !e.value.showHorizontalGrid?.value
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(et, {
                      label: "Grid Color",
                      "model-value": b,
                      onInput: w
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "disabled"])) : $("", !0),
                e.value.horizontalGridWidth ? (B(), J(pt(mt), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.horizontalGridWidth,
                  "onUpdate:modelValue": _[20] || (_[20] = (b) => e.value.horizontalGridWidth = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(G, {
                      label: "Grid Width (px)",
                      "model-value": b,
                      onInput: w,
                      type: "number",
                      min: 0,
                      max: 10
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0)
              ]),
              j("div", sp, [
                _[47] || (_[47] = j("h3", null, "Vertical Grid (X-Axis)", -1)),
                e.value.showVerticalGrid ? (B(), J(nt, {
                  key: 0,
                  label: "Show Vertical Grid",
                  modelValue: e.value.showVerticalGrid,
                  "onUpdate:modelValue": _[21] || (_[21] = (b) => e.value.showVerticalGrid = b)
                }, null, 8, ["modelValue"])) : $("", !0),
                e.value.verticalGridColor ? (B(), J(pt(mt), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.verticalGridColor,
                  "onUpdate:modelValue": _[22] || (_[22] = (b) => e.value.verticalGridColor = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(et, {
                      label: "Grid Color",
                      "model-value": b,
                      onInput: w
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0),
                e.value.verticalGridWidth ? (B(), J(pt(mt), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.verticalGridWidth,
                  "onUpdate:modelValue": _[23] || (_[23] = (b) => e.value.verticalGridWidth = b)
                }, {
                  default: tt(({ value: b, change: w }) => [
                    F(G, {
                      label: "Grid Width (px)",
                      "model-value": b,
                      onInput: w,
                      type: "number",
                      min: 0,
                      max: 10
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : $("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(ut, {
          modelValue: t.value.axisLabelSection,
          "onUpdate:modelValue": _[27] || (_[27] = (b) => t.value.axisLabelSection = b),
          icon: "text_fields",
          header: "Axis Titles"
        }, {
          default: tt(() => [
            j("div", np, [
              j("div", op, [
                F(G, {
                  label: "X-Axis Title",
                  modelValue: s.value,
                  "onUpdate:modelValue": _[25] || (_[25] = (b) => s.value = b),
                  placeholder: "e.g., Zeit, Datum",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                F(G, {
                  label: "Y-Axis Title (y)",
                  modelValue: n.value,
                  "onUpdate:modelValue": _[26] || (_[26] = (b) => n.value = b),
                  placeholder: "e.g., Temperatur (°C)",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                (B(!0), St($t, null, Se(c.value, (b) => (B(), St($t, { key: b }, [
                  b !== "y" ? (B(), J(G, {
                    key: 0,
                    label: `Y-Axis Title (${b})`,
                    "model-value": d(b),
                    "onUpdate:modelValue": (w) => u(b, w),
                    placeholder: "e.g., Niederschlag (mm)",
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"])) : $("", !0)
                ], 64))), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(ut, {
          modelValue: t.value.dateFormatSection,
          "onUpdate:modelValue": _[29] || (_[29] = (b) => t.value.dateFormatSection = b),
          icon: "event",
          header: "Date/Time Formatting"
        }, {
          default: tt(() => [
            j("div", rp, [
              j("div", ap, [
                _[48] || (_[48] = j("h3", null, "X-Axis Date/Time Format", -1)),
                e.value.dateDisplayFormat ? (B(), J(gt, {
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
                }, null, 8, ["modelValue"])) : $("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        F(ut, {
          modelValue: t.value.annotationsSection,
          "onUpdate:modelValue": _[31] || (_[31] = (b) => t.value.annotationsSection = b),
          icon: "show_chart",
          header: "Reference Lines & Areas"
        }, {
          default: tt(() => [
            j("div", lp, [
              j("div", cp, [
                e.value.annotationsEditMode ? (B(), J(nt, {
                  key: 0,
                  label: "Enable Drag & Drop (Move annotations in chart)",
                  modelValue: e.value.annotationsEditMode,
                  "onUpdate:modelValue": _[30] || (_[30] = (b) => e.value.annotationsEditMode = b)
                }, null, 8, ["modelValue"])) : $("", !0)
              ]),
              j("div", dp, [
                j("div", up, [
                  _[50] || (_[50] = j("h3", null, "Horizontal Lines (Y-Axis)", -1)),
                  F(K, {
                    size: "small",
                    onClick: k
                  }, {
                    default: tt(() => [..._[49] || (_[49] = [
                      Pt("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (B(!0), St($t, null, Se(y.value, (b, w) => (B(), St("div", {
                  key: `hline_${w}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  j("div", hp, [
                    j("strong", null, "Line " + Fe(w + 1), 1),
                    F(K, {
                      size: "small",
                      color: "danger",
                      onClick: (A) => P(w)
                    }, {
                      default: tt(() => [..._[51] || (_[51] = [
                        Pt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  F(G, {
                    label: "Y-Value",
                    modelValue: b.value,
                    "onUpdate:modelValue": (A) => b.value = A,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(et, {
                    label: "Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (A) => b.color = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(G, {
                    label: "Line Width (px)",
                    modelValue: b.width,
                    "onUpdate:modelValue": (A) => b.width = A,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(G, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (A) => b.label = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              j("div", fp, [
                j("div", gp, [
                  _[53] || (_[53] = j("h3", null, "Vertical Lines (X-Axis)", -1)),
                  F(K, {
                    size: "small",
                    onClick: U
                  }, {
                    default: tt(() => [..._[52] || (_[52] = [
                      Pt("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (B(!0), St($t, null, Se(v.value, (b, w) => (B(), St("div", {
                  key: `vline_${w}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  j("div", pp, [
                    j("strong", null, "Line " + Fe(w + 1), 1),
                    F(K, {
                      size: "small",
                      color: "danger",
                      onClick: (A) => z(w)
                    }, {
                      default: tt(() => [..._[54] || (_[54] = [
                        Pt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  F(G, {
                    label: "X-Value",
                    modelValue: b.value,
                    "onUpdate:modelValue": (A) => b.value = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(et, {
                    label: "Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (A) => b.color = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(G, {
                    label: "Line Width (px)",
                    modelValue: b.width,
                    "onUpdate:modelValue": (A) => b.width = A,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(G, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (A) => b.label = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              j("div", mp, [
                j("div", bp, [
                  _[56] || (_[56] = j("h3", null, "Horizontal Areas (Y-Axis Ranges)", -1)),
                  F(K, {
                    size: "small",
                    onClick: O
                  }, {
                    default: tt(() => [..._[55] || (_[55] = [
                      Pt("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (B(!0), St($t, null, Se(E.value, (b, w) => (B(), St("div", {
                  key: `hbox_${w}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  j("div", yp, [
                    j("strong", null, "Area " + Fe(w + 1), 1),
                    F(K, {
                      size: "small",
                      color: "danger",
                      onClick: (A) => H(w)
                    }, {
                      default: tt(() => [..._[57] || (_[57] = [
                        Pt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  F(G, {
                    label: "Y-Min",
                    modelValue: b.yMin,
                    "onUpdate:modelValue": (A) => b.yMin = A,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(G, {
                    label: "Y-Max",
                    modelValue: b.yMax,
                    "onUpdate:modelValue": (A) => b.yMax = A,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(et, {
                    label: "Fill Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (A) => b.color = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(G, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (A) => b.label = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              j("div", _p, [
                j("div", xp, [
                  _[59] || (_[59] = j("h3", null, "Vertical Areas (X-Axis Ranges)", -1)),
                  F(K, {
                    size: "small",
                    onClick: Q
                  }, {
                    default: tt(() => [..._[58] || (_[58] = [
                      Pt("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (B(!0), St($t, null, Se(I.value, (b, w) => (B(), St("div", {
                  key: `vbox_${w}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  j("div", vp, [
                    j("strong", null, "Area " + Fe(w + 1), 1),
                    F(K, {
                      size: "small",
                      color: "danger",
                      onClick: (A) => V(w)
                    }, {
                      default: tt(() => [..._[60] || (_[60] = [
                        Pt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  F(G, {
                    label: "X-Min",
                    modelValue: b.xMin,
                    "onUpdate:modelValue": (A) => b.xMin = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(G, {
                    label: "X-Max",
                    modelValue: b.xMax,
                    "onUpdate:modelValue": (A) => b.xMax = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(et, {
                    label: "Fill Color",
                    modelValue: b.color,
                    "onUpdate:modelValue": (A) => b.color = A
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  F(G, {
                    label: "Label (optional)",
                    modelValue: b.label,
                    "onUpdate:modelValue": (A) => b.label = A
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
}), Tp = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, wp = /* @__PURE__ */ Tp(Sp, [["__scopeId", "data-v-1d1049c7"]]), Ep = `<?xml version="1.0" encoding="UTF-8"?>
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
`, Ap = `<?xml version="1.0" encoding="UTF-8"?>
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
`, Cp = [
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
var Ip = Object.defineProperty, Op = Object.getOwnPropertyDescriptor, pn = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Op(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && Ip(t, e, n), n;
}, nr = (i, t) => (e, s) => t(e, s, i);
R.eINSTANCE;
const Ae = "ChartWidget";
let ji = class {
  constructor(i, t) {
    this.events = i, this.actions = t;
  }
  type = Ae;
  component = zg;
  settingsComponent = wp;
  supportedDSTypes = [];
  icon = Ka;
  name = "Chart";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Ep,
    uri: "/chart-settings.ui.xmi",
    ePackage: () => R.eINSTANCE,
    create: () => new x(),
    /* Forms for classes that appear inside this one's lists. */
    entryForms: [{ xmi: Ap, uri: "/chart-series.ui.xmi" }],
    /*
     * What the model does not describe: the reference lines and areas, four
     * lists the Ecore does not type - there is no class to build a form
     * from. Named so that what is modelled is not offered twice, in two
     * forms that could disagree.
     */
    unmodelledSections: ["Reference Lines & Areas"]
  };
  register() {
    this.events.registerWidget(Ae, Cp), this.actions.registerWidgetType(Ae, _e, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Ae), this.actions.unregisterWidgetType(Ae);
  }
};
pn([
  Ma()
], ji.prototype, "register", 1);
pn([
  ka()
], ji.prototype, "unregister", 1);
ji = pn([
  Pa({
    service: [Za],
    properties: { "widget.type": Ae }
  }),
  nr(0, bn(Da)),
  nr(1, bn(La))
], ji);
export {
  x as ChartSettingsImpl,
  zg as ChartWidget,
  ji as ChartWidgetProvider,
  wp as ChartWidgetSettings,
  R as ChartsettingsPackage,
  Ep as chartSettingsFormXmi,
  Ap as seriesSettingsFormXmi
};
