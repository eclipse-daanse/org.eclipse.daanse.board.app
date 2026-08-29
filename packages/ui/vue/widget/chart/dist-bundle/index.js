(function(){var i="ui.vue.widget.chart",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings-container[data-v-c5346fb1]{padding:16px}.settings-block[data-v-c5346fb1]{display:flex;flex-direction:column;gap:12px}.settings-block h3[data-v-c5346fb1]{margin:0 0 8px;font-size:14px;font-weight:600;color:var(--va-primary)}\n";})();
import { EVENT_ACTIONS_REGISTRY as Ca, EVENT_REGISTRY_ID as Ia, EVENT_ACTIONS_REGISTRY_ID as Oa } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Ra, deactivate as Da, component as La, inject as pn } from "@eclipse-daanse/tsm";
import { defineComponent as ji, shallowRef as nr, h as Ss, ref as Gt, onMounted as Li, onUnmounted as or, watch as ti, toRaw as Ts, nextTick as ka, version as Ma, isProxy as rr, mergeModels as Pa, toRefs as Na, useModel as ar, inject as ws, computed as ot, createElementBlock as yt, openBlock as H, withModifiers as Va, createBlock as K, createCommentVNode as U, resolveDynamicComponent as Ba, resolveComponent as xe, Fragment as Yt, createVNode as W, withCtx as q, createElementVNode as z, createTextVNode as Mt, renderList as ve, toDisplayString as Be, unref as ut } from "vue";
import { VariableWrapper as A, useVariableRepository as Fa, useDatasourceRepository as Ha } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as Wa } from "vue-router";
import { BasicEObject as lr, BasicEFactory as za, BasicEPackage as Ga, BasicEClass as mn, BasicEReference as J, BasicEAttribute as gi, EPackageRegistry as Q, createContainmentEList as ja, createBasicEList as pi } from "@emfts/core";
import { WidgetAction as oi, WidgetActionInterface as Xa, Payload as bn } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as ht } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Ya } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Ua } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), $a = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2049.5C22.5%2047.0147%2024.5147%2045%2027%2045H33C35.4853%2045%2037.5%2047.0147%2037.5%2049.5V93C37.5%2095.4853%2035.4853%2097.5%2033%2097.5H27C24.5147%2097.5%2022.5%2095.4853%2022.5%2093V49.5Z'%20fill='%23606060'/%3e%3cpath%20d='M52.5%2027C52.5%2024.5147%2054.5147%2022.5%2057%2022.5H63C65.4853%2022.5%2067.5%2024.5147%2067.5%2027V93C67.5%2095.4853%2065.4853%2097.5%2063%2097.5H57C54.5147%2097.5%2052.5%2095.4853%2052.5%2093V27Z'%20fill='%23606060'/%3e%3cpath%20d='M82.5%2072C82.5%2069.5147%2084.5147%2067.5%2087%2067.5H93C95.4853%2067.5%2097.5%2069.5147%2097.5%2072V93C97.5%2095.4853%2095.4853%2097.5%2093%2097.5H87C84.5147%2097.5%2082.5%2095.4853%2082.5%2093V72Z'%20fill='%23606060'/%3e%3c/svg%3e";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function ri(i) {
  return i + 0.5 | 0;
}
const Zt = (i, t, e) => Math.max(Math.min(i, e), t);
function Xe(i) {
  return Zt(ri(i * 2.55), 0, 255);
}
function Jt(i) {
  return Zt(ri(i * 255), 0, 255);
}
function zt(i) {
  return Zt(ri(i / 2.55) / 100, 0, 1);
}
function yn(i) {
  return Zt(ri(i * 100), 0, 100);
}
const Dt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Es = [..."0123456789ABCDEF"], Za = (i) => Es[i & 15], Ka = (i) => Es[(i & 240) >> 4] + Es[i & 15], mi = (i) => (i & 240) >> 4 === (i & 15), qa = (i) => mi(i.r) && mi(i.g) && mi(i.b) && mi(i.a);
function Ja(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Dt[i[1]] * 17,
    g: 255 & Dt[i[2]] * 17,
    b: 255 & Dt[i[3]] * 17,
    a: t === 5 ? Dt[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Dt[i[1]] << 4 | Dt[i[2]],
    g: Dt[i[3]] << 4 | Dt[i[4]],
    b: Dt[i[5]] << 4 | Dt[i[6]],
    a: t === 9 ? Dt[i[7]] << 4 | Dt[i[8]] : 255
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
function Ws(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, d;
  return o !== r && (d = o - r, c = a > 0.5 ? d / (2 - o - r) : d / (o + r), l = nl(e, s, n, d, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function zs(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Jt);
}
function Gs(i, t, e) {
  return zs(cr, i, t, e);
}
function ol(i, t, e) {
  return zs(sl, i, t, e);
}
function rl(i, t, e) {
  return zs(il, i, t, e);
}
function dr(i) {
  return (i % 360 + 360) % 360;
}
function al(i) {
  const t = el.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? Xe(+t[5]) : Jt(+t[5]));
  const n = dr(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = ol(n, o, r) : t[1] === "hsv" ? s = rl(n, o, r) : s = Gs(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function ll(i, t) {
  var e = Ws(i);
  e[0] = dr(e[0] + t), e = Gs(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function cl(i) {
  if (!i)
    return;
  const t = Ws(i), e = t[0], s = yn(t[1]), n = yn(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${zt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const _n = {
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
function dl() {
  const i = {}, t = Object.keys(xn), e = Object.keys(_n);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, _n[o]);
    o = parseInt(xn[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let bi;
function ul(i) {
  bi || (bi = dl(), bi.transparent = [0, 0, 0, 0]);
  const t = bi[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const hl = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function fl(i) {
  const t = hl.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? Xe(r) : Zt(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Xe(s) : Zt(s, 0, 255)), n = 255 & (t[4] ? Xe(n) : Zt(n, 0, 255)), o = 255 & (t[6] ? Xe(o) : Zt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function gl(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${zt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const rs = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Se = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function pl(i, t, e) {
  const s = Se(zt(i.r)), n = Se(zt(i.g)), o = Se(zt(i.b));
  return {
    r: Jt(rs(s + e * (Se(zt(t.r)) - s))),
    g: Jt(rs(n + e * (Se(zt(t.g)) - n))),
    b: Jt(rs(o + e * (Se(zt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function yi(i, t, e) {
  if (i) {
    let s = Ws(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Gs(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function ur(i, t) {
  return i && Object.assign(t || {}, i);
}
function vn(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = Jt(i[3]))) : (t = ur(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = Jt(t.a)), t;
}
function ml(i) {
  return i.charAt(0) === "r" ? fl(i) : al(i);
}
class ei {
  constructor(t) {
    if (t instanceof ei)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = vn(t) : e === "string" && (s = Ja(t) || ul(t) || ml(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ur(this._rgb);
    return t && (t.a = zt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = vn(t);
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
    return new ei(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Jt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = ri(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return yi(this._rgb, 2, t), this;
  }
  darken(t) {
    return yi(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return yi(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return yi(this._rgb, 1, -t), this;
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
function Ft() {
}
const bl = /* @__PURE__ */ (() => {
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
function Z(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function mt(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Pt(i, t) {
  return mt(i) ? i : t;
}
function j(i, t) {
  return typeof i > "u" ? t : i;
}
const yl = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, hr = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function st(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function nt(i, t, e, s) {
  let n, o, r;
  if (it(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (Z(i))
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
function Mi(i) {
  if (it(i))
    return i.map(Mi);
  if (Z(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Mi(i[e[n]]);
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
function _l(i, t, e, s) {
  if (!fr(i))
    return;
  const n = t[i], o = e[i];
  Z(n) && Z(o) ? ii(n, o, s) : t[i] = Mi(o);
}
function ii(i, t, e) {
  const s = it(t) ? t : [
    t
  ], n = s.length;
  if (!Z(i))
    return i;
  e = e || {};
  const o = e.merger || _l;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !Z(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, d = l.length; c < d; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function Ke(i, t) {
  return ii(i, t, {
    merger: xl
  });
}
function xl(i, t, e) {
  if (!fr(i))
    return;
  const s = t[i], n = e[i];
  Z(s) && Z(n) ? Ke(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Mi(n));
}
const Sn = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function vl(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Sl(i) {
  const t = vl(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function ee(i, t) {
  return (Sn[t] || (Sn[t] = Sl(t)))(i);
}
function js(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Rt = (i) => typeof i < "u", Ot = (i) => typeof i == "function", Tn = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function Tl(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const $ = Math.PI, rt = 2 * $, wl = rt + $, Pi = Number.POSITIVE_INFINITY, Us = $ / 180, ct = $ / 2, Lt = $ / 4, Ni = $ * 2 / 3, gr = Math.log10, Bt = Math.sign;
function qe(i, t, e) {
  return Math.abs(i - t) < e;
}
function wn(i) {
  const t = Math.round(i);
  i = qe(i, t, i / 1e3) ? t : i;
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
function he(i) {
  return !Al(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function Cl(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function Il(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function pt(i) {
  return i * ($ / 180);
}
function Ui(i) {
  return i * (180 / $);
}
function En(i) {
  if (!mt(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Vi(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * $ && (o += rt), {
    angle: o,
    distance: n
  };
}
function Ce(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Ol(i, t) {
  return (i - t + wl) % rt - $;
}
function Tt(i) {
  return (i % rt + rt) % rt;
}
function si(i, t, e, s) {
  const n = Tt(i), o = Tt(t), r = Tt(e), a = Tt(o - n), l = Tt(r - n), c = Tt(n - o), d = Tt(n - r);
  return n === o || n === r || s && o === r || a > l && c < d;
}
function wt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Rl(i) {
  return wt(i, -32768, 32767);
}
function jt(i, t, e, s = 1e-6) {
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
const le = (i, t, e, s) => Xs(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Dl = (i, t, e) => Xs(i, e, (s) => i[s][t] >= e);
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
function kl(i, t) {
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
    const s = "_onData" + js(e), n = i[e];
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
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (pr.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function mr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const br = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function yr(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, br.call(window, () => {
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
const Ys = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", St = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Pl = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Nl(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, d = r.axis, { min: u, max: h, minDefined: f, maxDefined: g } = r.getUserBounds();
    if (f) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        le(l, d, u).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : le(t, d, r.getPixelForValue(u)).lo
      ), c) {
        const p = l.slice(0, n + 1).reverse().findIndex((b) => !et(b[a.axis]));
        n -= Math.max(0, p);
      }
      n = wt(n, 0, s - 1);
    }
    if (g) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        le(l, r.axis, h, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : le(t, d, r.getPixelForValue(h), !0).hi + 1
      );
      if (c) {
        const b = l.slice(p - 1).findIndex((_) => !et(_[a.axis]));
        p += Math.max(0, b);
      }
      o = wt(p, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function Vl(i) {
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
const _i = (i) => i === 0 || i === 1, Cn = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * rt / e)), In = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * rt / e) + 1, Je = {
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
  easeInSine: (i) => -Math.cos(i * ct) + 1,
  easeOutSine: (i) => Math.sin(i * ct),
  easeInOutSine: (i) => -0.5 * (Math.cos($ * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => _i(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => _i(i) ? i : Cn(i, 0.075, 0.3),
  easeOutElastic: (i) => _i(i) ? i : In(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return _i(i) ? i : i < 0.5 ? 0.5 * Cn(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * In(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - Je.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Je.easeInBounce(i * 2) * 0.5 : Je.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function $s(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function On(i) {
  return $s(i) ? i : new ei(i);
}
function as(i) {
  return $s(i) ? i : new ei(i).saturate(0.5).darken(0.1).hexString();
}
const Bl = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Fl = [
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
      properties: Fl
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
function Wl(i) {
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
const Rn = /* @__PURE__ */ new Map();
function zl(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = Rn.get(e);
  return s || (s = new Intl.NumberFormat(i, t), Rn.set(e, s)), s;
}
function Xi(i, t, e) {
  return zl(t, e).format(i);
}
const Gl = {
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
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = jl(i, e);
    }
    const r = gr(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Xi(i, s, l);
  }
};
function jl(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Zs = {
  formatters: Gl
};
function Ul(i) {
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
      callback: Zs.formatters.values,
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
const fe = /* @__PURE__ */ Object.create(null), As = /* @__PURE__ */ Object.create(null);
function Qe(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function ls(i, t, e) {
  return typeof t == "string" ? ii(Qe(i, t), e) : ii(Qe(i, ""), t);
}
class Xl {
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => as(n.backgroundColor), this.hoverBorderColor = (s, n) => as(n.borderColor), this.hoverColor = (s, n) => as(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ls(this, t, e);
  }
  get(t) {
    return Qe(this, t);
  }
  describe(t, e) {
    return ls(As, t, e);
  }
  override(t, e) {
    return ls(fe, t, e);
  }
  route(t, e, s, n) {
    const o = Qe(this, t), r = Qe(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return Z(l) ? Object.assign({}, c, l) : j(l, c);
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
var ft = /* @__PURE__ */ new Xl({
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
  Wl,
  Ul
]);
function Yl(i) {
  return !i || et(i.size) || et(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Bi(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function $l(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, d, u, h;
  for (l = 0; l < a; l++)
    if (u = e[l], u != null && !it(u))
      r = Bi(i, n, o, r, u);
    else if (it(u))
      for (c = 0, d = u.length; c < d; c++)
        h = u[c], h != null && !it(h) && (r = Bi(i, n, o, r, h));
  i.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete n[o[l]];
    o.splice(0, f);
  }
  return r;
}
function ne(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function Dn(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function Cs(i, t, e, s) {
  _r(i, t, e, s, null);
}
function _r(i, t, e, s, n) {
  let o, r, a, l, c, d, u, h;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let b = (g || 0) * Us;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(b), i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), i.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (i.beginPath(), f) {
      // Default includes circle
      default:
        n ? i.ellipse(e, s, n / 2, p, 0, 0, rt) : i.arc(e, s, p, 0, rt), i.closePath();
        break;
      case "triangle":
        d = n ? n / 2 : p, i.moveTo(e + Math.sin(b) * d, s - Math.cos(b) * p), b += Ni, i.lineTo(e + Math.sin(b) * d, s - Math.cos(b) * p), b += Ni, i.lineTo(e + Math.sin(b) * d, s - Math.cos(b) * p), i.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(b + Lt) * l, u = Math.cos(b + Lt) * (n ? n / 2 - c : l), a = Math.sin(b + Lt) * l, h = Math.sin(b + Lt) * (n ? n / 2 - c : l), i.arc(e - u, s - a, c, b - $, b - ct), i.arc(e + h, s - r, c, b - ct, b), i.arc(e + u, s + a, c, b, b + ct), i.arc(e - h, s + r, c, b + ct, b + $), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, d = n ? n / 2 : l, i.rect(e - d, s - l, 2 * d, 2 * l);
          break;
        }
        b += Lt;
      /* falls through */
      case "rectRot":
        u = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, h = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + h, s - r), i.lineTo(e + u, s + a), i.lineTo(e - h, s + r), i.closePath();
        break;
      case "crossRot":
        b += Lt;
      /* falls through */
      case "cross":
        u = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, h = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r);
        break;
      case "star":
        u = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, h = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r), b += Lt, u = Math.cos(b) * (n ? n / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, h = Math.sin(b) * (n ? n / 2 : p), i.moveTo(e - u, s - a), i.lineTo(e + u, s + a), i.moveTo(e + h, s - r), i.lineTo(e - h, s + r);
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
function Ut(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function ai(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function li(i) {
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
  t.translation && i.translate(t.translation[0], t.translation[1]), et(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Jl(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, d = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, d), i.lineTo(a, d), i.stroke();
  }
}
function Ql(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function ge(i, t, e, s, n, o = {}) {
  const r = it(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, ql(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Ql(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), et(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), Jl(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Ie(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * $, $, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, $, ct, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, ct, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -ct, !0), i.lineTo(e + r.topLeft, s);
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
function Ks(i, t) {
  const e = {}, s = Z(t), n = s ? Object.keys(t) : t, o = Z(i) ? s ? (r) => j(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = sc(o(r));
  return e;
}
function xr(i) {
  return Ks(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Qt(i) {
  return Ks(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function bt(i) {
  const t = xr(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function gt(i, t) {
  i = i || {}, t = t || ft.font;
  let e = j(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = j(i.style, t.style);
  s && !("" + s).match(ec) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: j(i.family, t.family),
    lineHeight: ic(j(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: j(i.weight, t.weight),
    string: ""
  };
  return n.string = Yl(n), n;
}
function xi(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function nc(i, t, e) {
  const { min: s, max: n } = i, o = hr(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function se(i, t) {
  return Object.assign(Object.create(i), t);
}
function qs(i, t = [
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
    override: (a) => qs([
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
      return Sr(a, l, () => hc(l, t, i, a));
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
function Oe(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: vr(i, s),
    setContext: (o) => Oe(i, o, e, s),
    override: (o) => Oe(i.override(o), t, e, s)
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
      return Sr(o, r, () => rc(o, r, a));
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
function vr(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: Ot(e) ? e : () => e,
    isIndexable: Ot(s) ? s : () => s
  };
}
const oc = (i, t) => i ? i + js(t) : t, Js = (i, t) => Z(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Sr(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function rc(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return Ot(a) && r.isScriptable(t) && (a = ac(t, a, i, e)), it(a) && a.length && (a = lc(t, a, i, r.isIndexable)), Js(t, a) && (a = Oe(a, n, o && o[t], r)), a;
}
function ac(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), Js(i, l) && (l = Qs(n._scopes, n, i, l)), l;
}
function lc(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (Z(t[0])) {
    const l = t, c = n._scopes.filter((d) => d !== l);
    t = [];
    for (const d of l) {
      const u = Qs(c, n, i, d);
      t.push(Oe(u, o, r && r[i], a));
    }
  }
  return t;
}
function Tr(i, t, e) {
  return Ot(i) ? i(t, e) : i;
}
const cc = (i, t) => i === !0 ? t : typeof i == "string" ? ee(t, i) : void 0;
function dc(i, t, e, s, n) {
  for (const o of t) {
    const r = cc(e, o);
    if (r) {
      i.add(r);
      const a = Tr(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function Qs(i, t, e, s) {
  const n = t._rootScopes, o = Tr(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Ln(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Ln(a, r, o, l, s), l === null) ? !1 : qs(Array.from(a), [
    ""
  ], n, o, () => uc(t, e, s));
}
function Ln(i, t, e, s, n) {
  for (; e; )
    e = dc(i, t, e, s, n);
  return e;
}
function uc(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return it(n) && Z(e) ? e : n || {};
}
function hc(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = wr(oc(o, i), e), typeof n < "u")
      return Js(i, n) ? Qs(e, s, i, n) : n;
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
function kn(i) {
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
  let a, l, c, d;
  for (a = 0, l = s; a < l; ++a)
    c = a + e, d = t[c], r[a] = {
      r: n.parse(ee(d, o), c)
    };
  return r;
}
const gc = Number.EPSILON || 1e-14, Re = (i, t) => t < i.length && !i[t].skip && i[t], Ar = (i) => i === "x" ? "y" : "x";
function pc(i, t, e, s) {
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
function mc(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Re(i, 0);
  for (let d = 0; d < s - 1; ++d)
    if (l = c, c = Re(i, d + 1), !(!l || !c)) {
      if (qe(t[d], 0, gc)) {
        e[d] = e[d + 1] = 0;
        continue;
      }
      n = e[d] / t[d], o = e[d + 1] / t[d], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[d] = n * r * t[d], e[d + 1] = o * r * t[d]);
    }
}
function bc(i, t, e = "x") {
  const s = Ar(e), n = i.length;
  let o, r, a, l = Re(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Re(i, c + 1), !a)
      continue;
    const d = a[e], u = a[s];
    r && (o = (d - r[e]) / 3, a[`cp1${e}`] = d - o, a[`cp1${s}`] = u - o * t[c]), l && (o = (l[e] - d) / 3, a[`cp2${e}`] = d + o, a[`cp2${s}`] = u + o * t[c]);
  }
}
function yc(i, t = "x") {
  const e = Ar(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Re(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Re(i, r + 1), !!l) {
      if (c) {
        const d = c[t] - l[t];
        n[r] = d !== 0 ? (c[e] - l[e]) / d : 0;
      }
      o[r] = a ? c ? Bt(n[r - 1]) !== Bt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  mc(i, n, o), bc(i, o, t);
}
function vi(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function _c(i, t) {
  let e, s, n, o, r, a = Ut(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && Ut(i[e + 1], t), o && (n = i[e], r && (n.cp1x = vi(n.cp1x, t.left, t.right), n.cp1y = vi(n.cp1y, t.top, t.bottom)), a && (n.cp2x = vi(n.cp2x, t.left, t.right), n.cp2y = vi(n.cp2y, t.top, t.bottom)));
}
function xc(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    yc(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = pc(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && _c(i, e);
}
function tn() {
  return typeof window < "u" && typeof document < "u";
}
function en(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Fi(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Yi = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function vc(i, t) {
  return Yi(i).getPropertyValue(t);
}
const Sc = [
  "top",
  "right",
  "bottom",
  "left"
];
function de(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = Sc[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Tc = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function wc(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (Tc(n, o, i.target))
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
function re(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Yi(e), o = n.boxSizing === "border-box", r = de(n, "padding"), a = de(n, "border", "width"), { x: l, y: c, box: d } = wc(i, e), u = r.left + (d && a.left), h = r.top + (d && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - u) / f * e.width / s),
    y: Math.round((c - h) / g * e.height / s)
  };
}
function Ec(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && en(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Yi(o), l = de(a, "border", "width"), c = de(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Fi(a.maxWidth, o, "clientWidth"), n = Fi(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Pi,
    maxHeight: n || Pi
  };
}
const Kt = (i) => Math.round(i * 10) / 10;
function Ac(i, t, e, s) {
  const n = Yi(i), o = de(n, "margin"), r = Fi(n.maxWidth, i, "clientWidth") || Pi, a = Fi(n.maxHeight, i, "clientHeight") || Pi, l = Ec(i, t, e);
  let { width: c, height: d } = l;
  if (n.boxSizing === "content-box") {
    const h = de(n, "border", "width"), f = de(n, "padding");
    c -= f.width + h.width, d -= f.height + h.height;
  }
  return c = Math.max(0, c - o.width), d = Math.max(0, s ? c / s : d - o.height), c = Kt(Math.min(c, r, l.maxWidth)), d = Kt(Math.min(d, a, l.maxHeight)), c && !d && (d = Kt(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && d > l.height && (d = l.height, c = Kt(Math.floor(d * s))), {
    width: c,
    height: d
  };
}
function Mn(i, t, e) {
  const s = t || 1, n = Kt(i.height * s), o = Kt(i.width * s);
  i.height = Kt(i.height), i.width = Kt(i.width);
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
    tn() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
})();
function Pn(i, t) {
  const e = vc(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function ae(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function Ic(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function Oc(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = ae(i, n, e), a = ae(n, o, e), l = ae(o, t, e), c = ae(r, a, e), d = ae(a, l, e);
  return ae(c, d, e);
}
const Rc = function(i, t) {
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
}, Dc = function() {
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
function Ae(i, t, e) {
  return i ? Rc(t, e) : Dc();
}
function Cr(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Ir(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Or(i) {
  return i === "angle" ? {
    between: si,
    compare: Ol,
    normalize: Tt
  } : {
    between: jt,
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
function Lc(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = Or(s), l = t.length;
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
function Rr(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Or(s), { start: d, end: u, loop: h, style: f } = Lc(i, t, e), g = [];
  let p = !1, b = null, _, v, w;
  const C = () => l(n, w, _) && a(n, w) !== 0, S = () => a(o, _) === 0 || l(o, w, _), k = () => p || C(), M = () => !p || S();
  for (let I = d, F = d; I <= u; ++I)
    v = t[I % r], !v.skip && (_ = c(v[s]), _ !== w && (p = l(_, n, o), b === null && k() && (b = a(_, n) === 0 ? I : F), b !== null && M() && (g.push(Nn({
      start: b,
      end: I,
      loop: h,
      count: r,
      style: f
    })), b = null), F = I, w = _));
  return b !== null && g.push(Nn({
    start: b,
    end: u,
    loop: h,
    count: r,
    style: f
  })), g;
}
function Dr(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Rr(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function kc(i, t, e, s) {
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
function Pc(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = kc(e, n, o, s);
  if (s === !0)
    return Vn(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return Vn(i, Mc(e, r, l, c), e, t);
}
function Vn(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Nc(i, t, e, s);
}
function Nc(i, t, e, s) {
  const n = i._chart.getContext(), o = Bn(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let d = o, u = t[0].start, h = u;
  function f(g, p, b, _) {
    const v = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= v;
      for (; e[p % l].skip; )
        p += v;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: b,
        style: _
      }), d = _, u = p % l);
    }
  }
  for (const g of t) {
    u = a ? u : g.start;
    let p = e[u % l], b;
    for (h = u + 1; h <= g.end; h++) {
      const _ = e[h % l];
      b = Bn(s.setContext(se(n, {
        type: "segment",
        p0: p,
        p1: _,
        p0DataIndex: (h - 1) % l,
        p1DataIndex: h % l,
        datasetIndex: r
      }))), Vc(b, d) && f(u, h - 1, g.loop, d), p = _, d = b;
    }
    u < h - 1 && f(u, h - 1, g.loop, d);
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
function Vc(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return $s(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
function Si(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Bc(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: Si(e, t, "left"),
    right: Si(e, t, "right"),
    top: Si(s, t, "top"),
    bottom: Si(s, t, "bottom")
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
class Fc {
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
    this._request || (this._running = !0, this._request = br.call(window, () => {
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
var Ht = /* @__PURE__ */ new Fc();
const Fn = "transparent", Hc = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = On(i || Fn), n = s.valid && On(t || Fn);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class Wc {
  constructor(t, e, s, n) {
    const o = e[s];
    n = xi([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = xi([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || Hc[t.type || typeof r], this._easing = Je[t.easing] || Je.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = xi([
        t.to,
        e,
        n,
        t.from
      ]), this._from = xi([
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
class sn {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!Z(t))
      return;
    const e = Object.keys(ft.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!Z(o))
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
    const s = e.options, n = Gc(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && zc(t.options.$animations, s).then(() => {
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
      o[c] = u = new Wc(h, t, c, d), n.push(u);
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
      return Ht.add(this._chart, s), !0;
  }
}
function zc(i, t) {
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
function Hn(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function jc(i, t, e) {
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
function Uc(i) {
  let t, e, s, n;
  return Z(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function kr(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function Wn(i, t, e, s = {}) {
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
    c = i.values[l], mt(c) && (o || t === 0 || Bt(t) === Bt(c)) && (t += c);
  }
  return !d && !s.all ? 0 : t;
}
function Xc(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, d;
  for (l = 0, c = r.length; l < c; ++l)
    d = r[l], a[l] = {
      [n]: d,
      [o]: i[d]
    };
  return a;
}
function cs(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Yc(i, t, e) {
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
function zn(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function Gn(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, d = Yc(o, r, s), u = t.length;
  let h;
  for (let f = 0; f < u; ++f) {
    const g = t[f], { [l]: p, [c]: b } = g, _ = g._stacks || (g._stacks = {});
    h = _[c] = Zc(n, d, p), h[a] = b, h._top = zn(h, r, !0, s.type), h._bottom = zn(h, r, !1, s.type);
    const v = h._visualValues || (h._visualValues = {});
    v[a] = b;
  }
}
function ds(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function Kc(i, t) {
  return se(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function qc(i, t, e) {
  return se(i, {
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
function Fe(i, t) {
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
const us = (i) => i === "reset" || i === "none", jn = (i, t) => t ? i : Object.assign({}, i), Jc = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: kr(e, !0),
  values: null
};
class Le {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = cs(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Fe(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (u, h, f, g) => u === "x" ? h : u === "r" ? g : f, o = e.xAxisID = j(s.xAxisID, ds(t, "x")), r = e.yAxisID = j(s.yAxisID, ds(t, "y")), a = e.rAxisID = j(s.rAxisID, ds(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), d = e.vAxisID = n(l, r, o, a);
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
    this._data && An(this._data, this), t._stacked && Fe(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (Z(e)) {
      const n = this._cachedMeta;
      this._data = Xc(e, n);
    } else if (s !== e) {
      if (s) {
        An(s, this);
        const n = this._cachedMeta;
        Fe(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && kl(e, this), this._syncList = [], this._data = e;
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
    e._stacked = cs(e.vScale, e), e.stack !== s.stack && (n = !0, Fe(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (Gn(this, e._parsed), e._stacked = cs(e.vScale, e));
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
      it(n[t]) ? h = this.parseArrayData(s, n, t, e) : Z(n[t]) ? h = this.parseObjectData(s, n, t, e) : h = this.parsePrimitiveData(s, n, t, e);
      const f = () => u[a] === null || c && u[a] < c[a];
      for (d = 0; d < e; ++d)
        s._parsed[d + t] = u = h[d], l && (f() && (l = !1), c = u);
      s._sorted = l;
    }
    r && Gn(this, h);
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
        x: o.parse(ee(f, a), h),
        y: r.parse(ee(f, l), h)
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
      keys: kr(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Wn(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = Wn(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = Jc(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: u } = $c(a);
    let h, f;
    function g() {
      f = n[h];
      const p = f[a.axis];
      return !mt(f[t.axis]) || d > p || u < p;
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
      r = e[n][t.axis], mt(r) && s.push(r);
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
    this.update(t || "default"), e._clip = Uc(j(this.options.clip, jc(e.xScale, e.yScale, this.getMaxOverflow())));
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
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Rt(s);
    if (a)
      return jn(a, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, t), u = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], h = c.getOptionScopes(this.getDataset(), d), f = Object.keys(ft.elements[t]), g = () => this.getContext(s, n, e), p = c.resolveNamedOptions(h, f, g, u);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(jn(p, l))), p;
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
    const c = new sn(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || us(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    us(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !us(e) && this._resolveAnimations(void 0, e).update(t, s);
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
      s._stacked && Fe(s, n);
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
    i._cache.$bar = mr(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function td(i) {
  const t = i.iScale, e = Qc(t, i.type);
  let s = t._length, n, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (Rt(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (n = 0, o = e.length; n < o; ++n)
    r = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    r = t.getPixelForTick(n), l();
  return s;
}
function ed(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return et(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function id(i, t, e, s) {
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
function sd(i, t, e, s) {
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
  return it(i) ? sd(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function Un(i, t, e, s) {
  const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
  let c, d, u, h;
  for (c = e, d = e + s; c < d; ++c)
    h = t[c], u = {}, u[n.axis] = a || n.parse(r[c], c), l.push(Mr(h, u, o, c));
  return l;
}
function hs(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function nd(i, t, e) {
  return i !== 0 ? Bt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function od(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function rd(i, t, e, s) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: d } = od(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = d : (o[Xn(d, r, a, l)] = !0, n = c)), o[Xn(n, r, a, l)] = !0, i.borderSkipped = o;
}
function Xn(i, t, e, s) {
  return s ? (i = ad(i, t, e), i = Yn(i, e, t)) : i = Yn(i, t, e), i;
}
function ad(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Yn(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function ld(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class cd extends Le {
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
    return Un(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return Un(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, d = r.axis === "x" ? a : l, u = [];
    let h, f, g, p;
    for (h = s, f = s + n; h < f; ++h)
      p = e[h], g = {}, g[o.axis] = o.parse(ee(p, c), h), u.push(Mr(ee(p, d), g, r, h));
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
    const o = n === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), d = this._getRuler(), { sharedOptions: u, includeOptions: h } = this._getSharedOptions(e, n);
    for (let f = e; f < e + s; f++) {
      const g = this.getParsed(f), p = o || et(g[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), b = this._calculateBarIndexPixels(f, d), _ = (g._stacks || {})[a.axis], v = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !_ || hs(g._custom) || r === _._top || r === _._bottom,
        x: c ? p.head : b.center,
        y: c ? b.center : p.head,
        height: c ? b.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : b.size
      };
      h && (v.options = u || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const w = v.options || t[f].options;
      rd(v, w, _, r), ld(v, w, d.ratio), this.updateElement(t[f], f, v, n);
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
      t[j(this.chart.options.indexAxis === "x" ? s.xAxisID : s.yAxisID, e)] = !0;
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
      min: a || td(e),
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
    const { _cachedMeta: { vScale: e, _stacked: s, index: n }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, d = hs(c);
    let u = l[e.axis], h = 0, f = s ? this.applyStack(e, l, s) : u, g, p;
    f !== u && (h = f - u, f = u), d && (u = c.barStart, f = c.barEnd - c.barStart, u !== 0 && Bt(u) !== Bt(c.barEnd) && (h = 0), h += u);
    const b = !et(o) && !d ? o : h;
    let _ = e.getPixelForValue(b);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(h + f) : g = _, p = g - _, Math.abs(p) < r) {
      p = nd(p, e, a) * r, u === a && (_ -= p / 2);
      const v = e.getPixelForDecimal(0), w = e.getPixelForDecimal(1), C = Math.min(v, w), S = Math.max(v, w);
      _ = Math.max(Math.min(_, S), C), g = _ + p, s && !d && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(g) - e.getValueForPixel(_));
    }
    if (_ === e.getPixelForValue(a)) {
      const v = Bt(p) * e.getLineWidthForValue(a) / 2;
      _ += v, p -= v;
    }
    return {
      size: p,
      base: _,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, o = n.skipNull, r = j(n.maxBarThickness, 1 / 0);
    let a, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const d = o ? this._getStackCount(t) : e.stackCount, u = n.barThickness === "flex" ? id(t, e, n, d * c) : ed(t, e, n, d * c), h = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(j(h, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
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
function dd(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < rt) {
    const a = i, l = a + t, c = Math.cos(a), d = Math.sin(a), u = Math.cos(l), h = Math.sin(l), f = (w, C, S) => si(w, a, l, !0) ? 1 : Math.max(C, C * e, S, S * e), g = (w, C, S) => si(w, a, l, !0) ? -1 : Math.min(C, C * e, S, S * e), p = f(0, c, u), b = f(ct, d, h), _ = g($, c, u), v = g($ + ct, d, h);
    s = (p - _) / 2, n = (b - v) / 2, o = -(p + _) / 2, r = -(b + v) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class nn extends Le {
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
      if (Z(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +ee(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return pt(this.options.rotation - 90);
  }
  _getCircumference() {
    return pt(this.options.circumference);
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
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(yl(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: u } = this._getRotationExtents(), { ratioX: h, ratioY: f, offsetX: g, offsetY: p } = dd(u, d, l), b = (s.width - r) / h, _ = (s.height - r) / f, v = Math.max(Math.min(b, _) / 2, 0), w = hr(this.options.radius, v), C = Math.max(w * l, 0), S = (w - C) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * w, this.offsetY = p * w, n.total = this.calculateTotal(), this.outerRadius = w - S * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - S * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / rt);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, d = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, h = o && c.animateScale, f = h ? 0 : this.innerRadius, g = h ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: b } = this._getSharedOptions(e, n);
    let _ = this._getRotation(), v;
    for (v = 0; v < e; ++v)
      _ += this._circumference(v, o);
    for (v = e; v < e + s; ++v) {
      const w = this._circumference(v, o), C = t[v], S = {
        x: d + this.offsetX,
        y: u + this.offsetY,
        startAngle: _,
        endAngle: _ + w,
        circumference: w,
        outerRadius: g,
        innerRadius: f
      };
      b && (S.options = p || this.resolveDataElementOptions(v, C.active ? "active" : n)), _ += w, this.updateElement(C, v, S, n);
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
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Xi(e._parsed[t], s.options.locale);
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
    return Math.max(j(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class ud extends Le {
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
    this._drawStart = a, this._drawCount = l, Vl(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n), h = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, b = he(g) ? g : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || o || n === "none", v = e + s, w = t.length;
    let C = e > 0 && this.getParsed(e - 1);
    for (let S = 0; S < w; ++S) {
      const k = t[S], M = _ ? k : {};
      if (S < e || S >= v) {
        M.skip = !0;
        continue;
      }
      const I = this.getParsed(S), F = et(I[f]), T = M[h] = r.getPixelForValue(I[h], S), m = M[f] = o || F ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, I, l) : I[f], S);
      M.skip = isNaN(T) || isNaN(m) || F, M.stop = S > 0 && Math.abs(I[h] - C[h]) > b, p && (M.parsed = I, M.raw = c.data[S]), u && (M.options = d || this.resolveDataElementOptions(S, k.active ? "active" : n)), _ || this.updateElement(k, S, M, n), C = I;
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
class hd extends Le {
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
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = Xi(e._parsed[t].r, s.options.locale);
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
    const o = n === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, d = c.xCenter, u = c.yCenter, h = c.getIndexAngle(0) - 0.5 * $;
    let f = h, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, n, p);
    for (g = e; g < e + s; g++) {
      const b = t[g];
      let _ = f, v = f + this._computeAngle(g, n, p), w = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = v, o && (l.animateScale && (w = 0), l.animateRotate && (_ = v = h));
      const C = {
        x: d,
        y: u,
        innerRadius: 0,
        outerRadius: w,
        startAngle: _,
        endAngle: v,
        options: this.resolveDataElementOptions(g, b.active ? "active" : n)
      };
      this.updateElement(b, g, C, n);
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
    return this.chart.getDataVisibility(t) ? pt(this.resolveDataElementOptions(t, e).angle || s) : 0;
  }
}
class fd extends nn {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class gd extends Le {
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
function oe() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class on {
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
    Object.assign(on.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return oe();
  }
  parse() {
    return oe();
  }
  format() {
    return oe();
  }
  add() {
    return oe();
  }
  diff() {
    return oe();
  }
  startOf() {
    return oe();
  }
  endOf() {
    return oe();
  }
}
var pd = {
  _date: on
};
function md(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? Dl : le;
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
function $i(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: d } = o[a], { lo: u, hi: h } = md(o[a], t, r, n);
    for (let f = u; f <= h; ++f) {
      const g = d[f];
      g.skip || s(g, c, f);
    }
  }
}
function bd(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function fs(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || $i(i, e, t, function(a, l, c) {
    !n && !Ut(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function yd(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: d } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: u } = Vi(r, {
      x: t.x,
      y: t.y
    });
    si(u, c, d) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return $i(i, e, t, o), n;
}
function _d(i, t, e, s, n, o) {
  let r = [];
  const a = bd(e);
  let l = Number.POSITIVE_INFINITY;
  function c(d, u, h) {
    const f = d.inRange(t.x, t.y, n);
    if (s && !f)
      return;
    const g = d.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(g)) && !f)
      return;
    const b = a(t, g);
    b < l ? (r = [
      {
        element: d,
        datasetIndex: u,
        index: h
      }
    ], l = b) : b === l && r.push({
      element: d,
      datasetIndex: u,
      index: h
    });
  }
  return $i(i, e, t, c), r;
}
function gs(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? yd(i, t, e, n) : _d(i, t, e, s, n, o);
}
function $n(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return $i(i, e, t, (l, c, d) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: d
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var xd = {
  modes: {
    index(i, t, e, s) {
      const n = re(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? fs(i, n, o, s, r) : gs(i, n, o, !1, s, r), l = [];
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
      const n = re(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? fs(i, n, o, s, r) : gs(i, n, o, !1, s, r);
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
      const n = re(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return fs(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = re(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return gs(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = re(t, i);
      return $n(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = re(t, i);
      return $n(i, n, "y", e.intersect, s);
    }
  }
};
const Pr = [
  "left",
  "top",
  "right",
  "bottom"
];
function He(i, t) {
  return i.filter((e) => e.pos === t);
}
function Zn(i, t) {
  return i.filter((e) => Pr.indexOf(e.pos) === -1 && e.box.axis === t);
}
function We(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function vd(i) {
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
function Sd(i) {
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
function Td(i, t) {
  const e = Sd(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], d = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = d ? d * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = d ? d * n : l && t.availableHeight);
  }
  return e;
}
function wd(i) {
  const t = vd(i), e = We(t.filter((c) => c.box.fullSize), !0), s = We(He(t, "left"), !0), n = We(He(t, "right")), o = We(He(t, "top"), !0), r = We(He(t, "bottom")), a = Zn(t, "x"), l = Zn(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: He(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Kn(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Nr(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Ed(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!Z(n)) {
    e.size && (i[n] -= e.size);
    const u = s[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? o.height : o.width), e.size = u.size / u.count, i[n] += e.size;
  }
  o.getPadding && Nr(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Kn(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Kn(r, i, "top", "bottom")), c = a !== i.w, d = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: d
  } : {
    same: d,
    other: c
  };
}
function Ad(i) {
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
function Ye(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, d;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Cd(a.horizontal, t));
    const { same: u, other: h } = Ed(t, e, a, s);
    c |= u && n.length, d = d || h, l.fullSize || n.push(a);
  }
  return c && Ye(n, t, e, s) || d;
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
    }, d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * d, h = c.size || l.height;
      Rt(c.start) && (r = c.start), l.fullSize ? Ti(l, n.left, r, e.outerWidth - n.right - n.left, h) : Ti(l, t.left + c.placed, r, u, h), c.start = r, c.placed += u, r = l.bottom;
    } else {
      const u = t.h * d, h = c.size || l.width;
      Rt(c.start) && (o = c.start), l.fullSize ? Ti(l, o, n.top, h, e.outerHeight - n.bottom - n.top) : Ti(l, o, t.top + c.placed, h, u), c.start = o, c.placed += u, o = l.right;
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
    const n = bt(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = wd(i.boxes), l = a.vertical, c = a.horizontal;
    nt(i.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const d = l.reduce((p, b) => b.box.options && b.box.options.display === !1 ? p : p + 1, 0) || 1, u = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / d,
      hBoxMaxHeight: r / 2
    }), h = Object.assign({}, n);
    Nr(h, bt(s));
    const f = Object.assign({
      maxPadding: h,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), g = Td(l.concat(c), u);
    Ye(a.fullSize, f, u, g), Ye(l, f, u, g), Ye(c, f, u, g) && Ye(l, f, u, g), Ad(f), qn(a.leftAndTop, f, u, g), f.x += f.w, f.y += f.h, qn(a.rightAndBottom, f, u, g), i.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, nt(a.chartArea, (p) => {
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
class Id extends Vr {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Oi = "$chartjs", Od = {
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
function Rd(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Oi] = {
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
const Br = Cc ? {
  passive: !0
} : !1;
function Dd(i, t, e) {
  i && i.addEventListener(t, e, Br);
}
function Ld(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Br);
}
function kd(i, t) {
  const e = Od[i.type] || i.type, { x: s, y: n } = re(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function Hi(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function Md(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Hi(a.addedNodes, s), r = r && !Hi(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function Pd(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Hi(a.removedNodes, s), r = r && !Hi(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const ni = /* @__PURE__ */ new Map();
let Qn = 0;
function Fr() {
  const i = window.devicePixelRatio;
  i !== Qn && (Qn = i, ni.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Nd(i, t) {
  ni.size || window.addEventListener("resize", Fr), ni.set(i, t);
}
function Vd(i) {
  ni.delete(i), ni.size || window.removeEventListener("resize", Fr);
}
function Bd(i, t, e) {
  const s = i.canvas, n = s && en(s);
  if (!n)
    return;
  const o = yr((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || o(c, d);
  });
  return r.observe(n), Nd(i, o), r;
}
function ps(i, t, e) {
  e && e.disconnect(), t === "resize" && Vd(i);
}
function Fd(i, t, e) {
  const s = i.canvas, n = yr((o) => {
    i.ctx !== null && e(kd(o, i));
  }, i);
  return Dd(s, t, n), n;
}
class Hd extends Vr {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Rd(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Oi])
      return !1;
    const s = e[Oi].initial;
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
    }), e.width = e.width, delete e[Oi], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: Md,
      detach: Pd,
      resize: Bd
    }[e] || Fd;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: ps,
      detach: ps,
      resize: ps
    }[e] || Ld)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Ac(t, e, s, n);
  }
  isAttached(t) {
    const e = t && en(t);
    return !!(e && e.isConnected);
  }
}
function Wd(i) {
  return !tn() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Id : Hd;
}
class Et {
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
function zd(i, t) {
  const e = i.options.ticks, s = Gd(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? Ud(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return Xd(t, c, o, r / n), c;
  const d = jd(o, t, n);
  if (r > 0) {
    let u, h;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (wi(t, c, d, et(f) ? 0 : a - f, a), u = 0, h = r - 1; u < h; u++)
      wi(t, c, d, o[u], o[u + 1]);
    return wi(t, c, d, l, et(f) ? t.length : l + f), c;
  }
  return wi(t, c, d), c;
}
function Gd(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function jd(i, t, e) {
  const s = Yd(i), n = t.length / e;
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
function Ud(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function Xd(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function wi(i, t, e, s, n) {
  const o = j(s, 0), r = Math.min(j(n, i.length), i.length);
  let a = 0, l, c, d;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), d = o; d < 0; )
    a++, d = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === d && (t.push(i[c]), a++, d = Math.round(o + a * e));
}
function Yd(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const $d = (i) => i === "left" ? "right" : i === "right" ? "left" : i, to = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, eo = (i, t) => Math.min(t || i, i);
function io(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function Zd(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Kd(i, t) {
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
function ze(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function so(i, t) {
  if (!i.display)
    return 0;
  const e = gt(i.font, t), s = bt(i.padding);
  return (it(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function qd(i, t) {
  return se(i, {
    scale: t,
    type: "scale"
  });
}
function Jd(i, t, e) {
  return se(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Qd(i, t, e) {
  let s = Ys(i);
  return (e && t !== "right" || !e && t === "right") && (s = $d(s)), s;
}
function tu(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: d } = l;
  let u = 0, h, f, g;
  const p = r - n, b = a - o;
  if (i.isHorizontal()) {
    if (f = St(s, o, a), Z(e)) {
      const _ = Object.keys(e)[0], v = e[_];
      g = d[_].getPixelForValue(v) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = to(i, e, t);
    h = a - o;
  } else {
    if (Z(e)) {
      const _ = Object.keys(e)[0], v = e[_];
      f = d[_].getPixelForValue(v) - b + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - b + t : f = to(i, e, t);
    g = St(s, r, n), u = e === "left" ? -ct : ct;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: h,
    rotation: u
  };
}
class ke extends Et {
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
    return t = Pt(t, Number.POSITIVE_INFINITY), e = Pt(e, Number.NEGATIVE_INFINITY), s = Pt(s, Number.POSITIVE_INFINITY), n = Pt(n, Number.NEGATIVE_INFINITY), {
      min: Pt(t, s),
      max: Pt(e, n),
      minDefined: mt(t),
      maxDefined: mt(e)
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
      min: Pt(e, Pt(s, e)),
      max: Pt(s, Pt(e, s))
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
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = nc(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? io(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = zd(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
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
    const t = this.options, e = t.ticks, s = eo(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const d = this._getLabelSizes(), u = d.widest.width, h = d.highest.height, f = wt(this.chart.width - u, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : f / (s - 1), u + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - ze(t.grid) - e.padding - so(t.title, this.chart.options.font), c = Math.sqrt(u * u + h * h), r = Ui(Math.min(Math.asin(wt((d.highest.height + 6) / a, -1, 1)), Math.asin(wt(l / c, -1, 1)) - Math.asin(wt(h / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
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
      const l = so(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = ze(o) + l) : (t.height = this.maxHeight, t.width = ze(o) + l), s.display && this.ticks.length) {
        const { first: c, last: d, widest: u, highest: h } = this._getLabelSizes(), f = s.padding * 2, g = pt(this.labelRotation), p = Math.cos(g), b = Math.sin(g);
        if (a) {
          const _ = s.mirror ? 0 : b * u.width + p * h.height;
          t.height = Math.min(this.maxHeight, t.height + _ + f);
        } else {
          const _ = s.mirror ? 0 : p * u.width + b * h.height;
          t.width = Math.min(this.maxWidth, t.width + _ + f);
        }
        this._calculatePadding(c, d, b, p);
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
      e < s.length && (s = io(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / eo(e, s));
    let c = 0, d = 0, u, h, f, g, p, b, _, v, w, C, S;
    for (u = 0; u < e; u += l) {
      if (g = t[u].label, p = this._resolveTickFontOptions(u), n.font = b = p.string, _ = o[b] = o[b] || {
        data: {},
        gc: []
      }, v = p.lineHeight, w = C = 0, !et(g) && !it(g))
        w = Bi(n, _.data, _.gc, w, g), C = v;
      else if (it(g))
        for (h = 0, f = g.length; h < f; ++h)
          S = g[h], !et(S) && !it(S) && (w = Bi(n, _.data, _.gc, w, S), C += v);
      r.push(w), a.push(C), c = Math.max(w, c), d = Math.max(C, d);
    }
    Kd(o, e);
    const k = r.indexOf(c), M = a.indexOf(d), I = (F) => ({
      width: r[F] || 0,
      height: a[F] || 0
    });
    return {
      first: I(0),
      last: I(e - 1),
      widest: I(k),
      highest: I(M),
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
    return Rl(this._alignToPixels ? ne(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = Jd(this.getContext(), t, s));
    }
    return this.$context || (this.$context = qd(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = pt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), h = ze(o), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, b = p / 2, _ = function(B) {
      return ne(s, B, p);
    };
    let v, w, C, S, k, M, I, F, T, m, O, P;
    if (r === "top")
      v = _(this.bottom), M = this.bottom - h, F = v - b, m = _(t.top) + b, P = t.bottom;
    else if (r === "bottom")
      v = _(this.top), m = t.top, P = _(t.bottom) - b, M = v + b, F = this.top + h;
    else if (r === "left")
      v = _(this.right), k = this.right - h, I = v - b, T = _(t.left) + b, O = t.right;
    else if (r === "right")
      v = _(this.left), T = t.left, O = _(t.right) - b, k = v + b, I = this.left + h;
    else if (e === "x") {
      if (r === "center")
        v = _((t.top + t.bottom) / 2 + 0.5);
      else if (Z(r)) {
        const B = Object.keys(r)[0], X = r[B];
        v = _(this.chart.scales[B].getPixelForValue(X));
      }
      m = t.top, P = t.bottom, M = v + b, F = M + h;
    } else if (e === "y") {
      if (r === "center")
        v = _((t.left + t.right) / 2);
      else if (Z(r)) {
        const B = Object.keys(r)[0], X = r[B];
        v = _(this.chart.scales[B].getPixelForValue(X));
      }
      k = v - b, I = k - h, T = t.left, O = t.right;
    }
    const G = j(n.ticks.maxTicksLimit, u), N = Math.max(1, Math.ceil(u / G));
    for (w = 0; w < u; w += N) {
      const B = this.getContext(w), X = o.setContext(B), y = a.setContext(B), L = X.lineWidth, E = X.color, tt = y.dash || [], xt = y.dashOffset, _t = X.tickWidth, at = X.tickColor, vt = X.tickBorderDash || [], dt = X.tickBorderDashOffset;
      C = Zd(this, w, l), C !== void 0 && (S = ne(s, C, L), c ? k = I = T = O = S : M = F = m = P = S, f.push({
        tx1: k,
        ty1: M,
        tx2: I,
        ty2: F,
        x1: T,
        y1: m,
        x2: O,
        y2: P,
        width: L,
        color: E,
        borderDash: tt,
        borderDashOffset: xt,
        tickWidth: _t,
        tickColor: at,
        tickBorderDash: vt,
        tickBorderDashOffset: dt
      }));
    }
    return this._ticksLength = u, this._borderValue = v, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: d, mirror: u } = o, h = ze(s.grid), f = h + d, g = u ? -d : f, p = -pt(this.labelRotation), b = [];
    let _, v, w, C, S, k, M, I, F, T, m, O, P = "middle";
    if (n === "top")
      k = this.bottom - g, M = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      k = this.top + g, M = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const N = this._getYAxisLabelAlignment(h);
      M = N.textAlign, S = N.x;
    } else if (n === "right") {
      const N = this._getYAxisLabelAlignment(h);
      M = N.textAlign, S = N.x;
    } else if (e === "x") {
      if (n === "center")
        k = (t.top + t.bottom) / 2 + f;
      else if (Z(n)) {
        const N = Object.keys(n)[0], B = n[N];
        k = this.chart.scales[N].getPixelForValue(B) + f;
      }
      M = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        S = (t.left + t.right) / 2 - f;
      else if (Z(n)) {
        const N = Object.keys(n)[0], B = n[N];
        S = this.chart.scales[N].getPixelForValue(B);
      }
      M = this._getYAxisLabelAlignment(h).textAlign;
    }
    e === "y" && (l === "start" ? P = "top" : l === "end" && (P = "bottom"));
    const G = this._getLabelSizes();
    for (_ = 0, v = a.length; _ < v; ++_) {
      w = a[_], C = w.label;
      const N = o.setContext(this.getContext(_));
      I = this.getPixelForTick(_) + o.labelOffset, F = this._resolveTickFontOptions(_), T = F.lineHeight, m = it(C) ? C.length : 1;
      const B = m / 2, X = N.color, y = N.textStrokeColor, L = N.textStrokeWidth;
      let E = M;
      r ? (S = I, M === "inner" && (_ === v - 1 ? E = this.options.reverse ? "left" : "right" : _ === 0 ? E = this.options.reverse ? "right" : "left" : E = "center"), n === "top" ? c === "near" || p !== 0 ? O = -m * T + T / 2 : c === "center" ? O = -G.highest.height / 2 - B * T + T : O = -G.highest.height + T / 2 : c === "near" || p !== 0 ? O = T / 2 : c === "center" ? O = G.highest.height / 2 - B * T : O = G.highest.height - m * T, u && (O *= -1), p !== 0 && !N.showLabelBackdrop && (S += T / 2 * Math.sin(p))) : (k = I, O = (1 - m) * T / 2);
      let tt;
      if (N.showLabelBackdrop) {
        const xt = bt(N.backdropPadding), _t = G.heights[_], at = G.widths[_];
        let vt = O - xt.top, dt = 0 - xt.left;
        switch (P) {
          case "middle":
            vt -= _t / 2;
            break;
          case "bottom":
            vt -= _t;
            break;
        }
        switch (M) {
          case "center":
            dt -= at / 2;
            break;
          case "right":
            dt -= at;
            break;
          case "inner":
            _ === v - 1 ? dt -= at : _ > 0 && (dt -= at / 2);
            break;
        }
        tt = {
          left: dt,
          top: vt,
          width: at + xt.width,
          height: _t + xt.height,
          color: N.backdropColor
        };
      }
      b.push({
        label: C,
        font: F,
        textOffset: O,
        options: {
          rotation: p,
          color: X,
          strokeColor: y,
          strokeWidth: L,
          textAlign: E,
          textBaseline: P,
          translation: [
            S,
            k
          ],
          backdrop: tt
        }
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-pt(this.labelRotation))
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
    this.isHorizontal() ? (c = ne(t, this.left, r) - r / 2, d = ne(t, this.right, a) + a / 2, u = h = l) : (u = ne(t, this.top, r) - r / 2, h = ne(t, this.bottom, a) + a / 2, c = d = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(d, h), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && ai(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, d = r.textOffset;
      ge(s, c, 0, d, l, a);
    }
    n && li(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = gt(s.font), r = bt(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || Z(e) ? (l += r.bottom, it(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: d, maxWidth: u, rotation: h } = tu(this, l, e, a);
    ge(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: u,
      rotation: h,
      textAlign: Qd(a, e, n),
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
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = j(t.grid && t.grid.z, -1), n = j(t.border && t.border.z, 0);
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
    return gt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ei {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    su(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, eu(t, r, s), this.override && ft.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in ft[n] && (delete ft[n][s], this.override && delete fe[s]);
  }
}
function eu(i, t, e) {
  const s = ii(/* @__PURE__ */ Object.create(null), [
    e ? ft.get(e) : {},
    ft.get(t),
    i.defaults
  ]);
  ft.set(t, s), i.defaultRoutes && iu(t, i.defaultRoutes), i.descriptors && ft.describe(t, i.descriptors);
}
function iu(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    ft.route(o, n, l, a);
  });
}
function su(i) {
  return "id" in i && "defaults" in i;
}
class nu {
  constructor() {
    this.controllers = new Ei(Le, "datasets", !0), this.elements = new Ei(Et, "elements"), this.plugins = new Ei(Object, "plugins"), this.scales = new Ei(ke, "scales"), this._typedRegistries = [
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
    const n = js(t);
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
var Vt = /* @__PURE__ */ new nu();
class ou {
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
    const s = t && t.config, n = j(s.options && s.options.plugins, {}), o = ru(s);
    return n === !1 && !e ? [] : lu(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function ru(i) {
  const t = {}, e = [], s = Object.keys(Vt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(Vt.getPlugin(s[o]));
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
function au(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function lu(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = au(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: cu(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function cu(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Is(i, t) {
  const e = ft.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function du(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function uu(i, t) {
  return i === t ? "_index_" : "_value_";
}
function no(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function hu(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Os(i, ...t) {
  if (no(i))
    return i;
  for (const e of t) {
    const s = e.axis || hu(e.position) || i.length > 1 && no(i[0].toLowerCase());
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
function fu(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return oo(i, "x", e[0]) || oo(i, "y", e[0]);
  }
  return {};
}
function gu(i, t) {
  const e = fe[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = Is(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!Z(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Os(r, a, fu(r, i), ft.scales[a.type]), c = uu(l, n), d = e.scales || {};
    o[r] = Ke(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      d[l],
      d[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || Is(a, t), d = (fe[a] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      const h = du(u, l), f = r[h + "AxisID"] || h;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Ke(o[f], [
        {
          axis: h
        },
        s[f],
        d[u]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Ke(a, [
      ft.scales[a.type],
      ft.scale
    ]);
  }), o;
}
function Hr(i) {
  const t = i.options || (i.options = {});
  t.plugins = j(t.plugins, {}), t.scales = gu(i, t);
}
function Wr(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function pu(i) {
  return i = i || {}, i.data = Wr(i.data), Hr(i), i;
}
const ro = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Set();
function Ai(i, t) {
  let e = ro.get(i);
  return e || (e = t(), ro.set(i, e), zr.add(e)), e;
}
const Ge = (i, t, e) => {
  const s = ee(t, e);
  s !== void 0 && i.add(s);
};
class mu {
  constructor(t) {
    this._config = pu(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Wr(t);
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
    return Ai(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Ai(`${t}.transition.${e}`, () => [
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
    return Ai(`${t}-${e}`, () => [
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
    return Ai(`${s}-plugin-${e}`, () => [
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
      t && (l.add(t), d.forEach((u) => Ge(l, t, u))), d.forEach((u) => Ge(l, n, u)), d.forEach((u) => Ge(l, fe[o] || {}, u)), d.forEach((u) => Ge(l, ft, u)), d.forEach((u) => Ge(l, As, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), zr.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      fe[e] || {},
      ft.datasets[e] || {},
      {
        type: e
      },
      ft,
      As
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = ao(this._resolverCache, t, n);
    let l = r;
    if (yu(r, e)) {
      o.$shared = !1, s = Ot(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Oe(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = ao(this._resolverCache, t, s);
    return Z(e) ? Oe(o, e, void 0, n) : o;
  }
}
function ao(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: qs(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const bu = (i) => Z(i) && Object.getOwnPropertyNames(i).some((t) => Ot(i[t]));
function yu(i, t) {
  const { isScriptable: e, isIndexable: s } = vr(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (Ot(a) || bu(a)) || r && it(a))
      return !0;
  }
  return !1;
}
var _u = "4.5.1";
const xu = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function lo(i, t) {
  return i === "top" || i === "bottom" || xu.indexOf(i) === -1 && t === "x";
}
function co(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function uo(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), st(e && e.onComplete, [
    i
  ], t);
}
function vu(i) {
  const t = i.chart, e = t.options.animation;
  st(e && e.onProgress, [
    i
  ], t);
}
function Gr(i) {
  return tn() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Ri = {}, ho = (i) => {
  const t = Gr(i);
  return Object.values(Ri).filter((e) => e.canvas === t).pop();
};
function Su(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Tu(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let ue = class {
  static defaults = ft;
  static instances = Ri;
  static overrides = fe;
  static registry = Vt;
  static version = _u;
  static getChart = ho;
  static register(...t) {
    Vt.add(...t), fo();
  }
  static unregister(...t) {
    Vt.remove(...t), fo();
  }
  constructor(t, e) {
    const s = this.config = new mu(e), n = Gr(t), o = ho(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || Wd(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, d = l && l.width;
    if (this.id = bl(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new ou(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Ml((u) => this.update(u), r.resizeDelay || 0), this._dataChanges = [], Ri[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Ht.listen(this, "complete", uo), Ht.listen(this, "progress", vu), this._initialize(), this.attached && this.update();
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
    return Vt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Mn(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Dn(this.canvas, this.ctx), this;
  }
  stop() {
    return Ht.stop(this), this;
  }
  resize(t, e) {
    Ht.running(this) ? this._resizeBeforeDraw = {
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
      const a = e[r], l = Os(r, a), c = l === "r", d = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : d ? "bottom" : "left",
        dtype: c ? "radialLinear" : d ? "category" : "linear"
      };
    }))), nt(o, (r) => {
      const a = r.options, l = a.id, c = Os(l, a), d = j(a.type, r.dtype);
      (a.position === void 0 || lo(a.position, c) !== lo(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let u = null;
      if (l in s && s[l].type === d)
        u = s[l];
      else {
        const h = Vt.getScale(d);
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Is(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = Vt.getController(a), { datasetElementType: c, dataElementType: d } = ft.datasets[a];
        Object.assign(l, {
          dataElementType: Vt.getElement(d),
          datasetElementType: c && Vt.getElement(c)
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
    }), this._layers.sort(co("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    nt(this.scales, (t) => {
      kt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!Tn(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      Su(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!Tn(n, s(o)))
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
        this._updateDataset(e, Ot(t) ? t({
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
    }) !== !1 && (Ht.has(this) ? this.attached && !Ht.running(this) && Ht.start(this) : (this.draw(), uo({
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
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && ai(e, n), t.controller.draw(), n && li(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return Ut(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = xd.modes[e];
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
    return this.$context || (this.$context = se(null, {
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
    Rt(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
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
    for (this.stop(), Ht.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Dn(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Ri[this.id], this.notifyPlugins("afterDestroy");
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
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = Tl(t), c = Tu(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, st(o.onHover, [
      t,
      a,
      this
    ], this), l && st(o.onClick, [
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
function fo() {
  return nt(ue.instances, (i) => i._plugins.invalidate());
}
function wu(i, t, e) {
  const { startAngle: s, x: n, y: o, outerRadius: r, innerRadius: a, options: l } = t, { borderWidth: c, borderJoinStyle: d } = l, u = Math.min(c / r, Tt(s - e));
  if (i.beginPath(), i.arc(n, o, r - c / 2, s + u / 2, e - u / 2), a > 0) {
    const h = Math.min(c / a, Tt(s - e));
    i.arc(n, o, a + c / 2, e - h / 2, s + h / 2, !0);
  } else {
    const h = Math.min(c / 2, r * Tt(s - e));
    if (d === "round")
      i.arc(n, o, h, e - $ / 2, s + $ / 2, !0);
    else if (d === "bevel") {
      const f = 2 * h * h, g = -f * Math.cos(e + $ / 2) + n, p = -f * Math.sin(e + $ / 2) + o, b = f * Math.cos(s + $ / 2) + n, _ = f * Math.sin(s + $ / 2) + o;
      i.lineTo(g, p), i.lineTo(b, _);
    }
  }
  i.closePath(), i.moveTo(0, 0), i.rect(0, 0, i.canvas.width, i.canvas.height), i.clip("evenodd");
}
function Eu(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + ct, s - ct), i.closePath(), i.clip();
}
function Au(i) {
  return Ks(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Cu(i, t, e, s) {
  const n = Au(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return wt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: wt(n.innerStart, 0, r),
    innerEnd: wt(n.innerEnd, 0, r)
  };
}
function Te(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function Wi(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: d } = t, u = Math.max(t.outerRadius + s + e - c, 0), h = d > 0 ? d + s + e + c : 0;
  let f = 0;
  const g = n - l;
  if (s) {
    const N = d > 0 ? d - s : 0, B = u > 0 ? u - s : 0, X = (N + B) / 2, y = X !== 0 ? g * X / (X + s) : g;
    f = (g - y) / 2;
  }
  const p = Math.max(1e-3, g * u - e / $) / u, b = (g - p) / 2, _ = l + b + f, v = n - b - f, { outerStart: w, outerEnd: C, innerStart: S, innerEnd: k } = Cu(t, h, u, v - _), M = u - w, I = u - C, F = _ + w / M, T = v - C / I, m = h + S, O = h + k, P = _ + S / m, G = v - k / O;
  if (i.beginPath(), o) {
    const N = (F + T) / 2;
    if (i.arc(r, a, u, F, N), i.arc(r, a, u, N, T), C > 0) {
      const L = Te(I, T, r, a);
      i.arc(L.x, L.y, C, T, v + ct);
    }
    const B = Te(O, v, r, a);
    if (i.lineTo(B.x, B.y), k > 0) {
      const L = Te(O, G, r, a);
      i.arc(L.x, L.y, k, v + ct, G + Math.PI);
    }
    const X = (v - k / h + (_ + S / h)) / 2;
    if (i.arc(r, a, h, v - k / h, X, !0), i.arc(r, a, h, X, _ + S / h, !0), S > 0) {
      const L = Te(m, P, r, a);
      i.arc(L.x, L.y, S, P + Math.PI, _ - ct);
    }
    const y = Te(M, _, r, a);
    if (i.lineTo(y.x, y.y), w > 0) {
      const L = Te(M, F, r, a);
      i.arc(L.x, L.y, w, _ - ct, F);
    }
  } else {
    i.moveTo(r, a);
    const N = Math.cos(F) * u + r, B = Math.sin(F) * u + a;
    i.lineTo(N, B);
    const X = Math.cos(T) * u + r, y = Math.sin(T) * u + a;
    i.lineTo(X, y);
  }
  i.closePath();
}
function Iu(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Wi(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % rt || rt));
  }
  return Wi(i, t, e, s, l, n), i.fill(), l;
}
function Ou(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: d, borderDash: u, borderDashOffset: h, borderRadius: f } = l, g = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(u || []), i.lineDashOffset = h, g ? (i.lineWidth = c * 2, i.lineJoin = d || "round") : (i.lineWidth = c, i.lineJoin = d || "bevel");
  let p = t.endAngle;
  if (o) {
    Wi(i, t, e, s, p, n);
    for (let b = 0; b < o; ++b)
      i.stroke();
    isNaN(a) || (p = r + (a % rt || rt));
  }
  g && Eu(i, t, p), l.selfJoin && p - r >= $ && f === 0 && d !== "miter" && wu(i, t, p), o || (Wi(i, t, e, s, p, n), i.stroke());
}
class Ru extends Et {
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
    ], s), { angle: o, distance: r } = Vi(n, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: d, circumference: u } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), h = (this.options.spacing + this.options.borderWidth) / 2, f = j(u, l - a), g = si(o, a, l) && a !== l, p = f >= rt || g, b = jt(r, c + h, d + h);
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
    const l = 1 - Math.sin(Math.min($, s || 0)), c = n * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Iu(t, this, c, o, r), Ou(t, this, c, o, r), t.restore();
  }
}
function jr(i, t, e = t) {
  i.lineCap = j(e.borderCapStyle, t.borderCapStyle), i.setLineDash(j(e.borderDash, t.borderDash)), i.lineDashOffset = j(e.borderDashOffset, t.borderDashOffset), i.lineJoin = j(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = j(e.borderWidth, t.borderWidth), i.strokeStyle = j(e.borderColor, t.borderColor);
}
function Du(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Lu(i) {
  return i.stepped ? Zl : i.tension || i.cubicInterpolationMode === "monotone" ? Kl : Du;
}
function Ur(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), d = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !d ? s + c - l : c - l
  };
}
function ku(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Ur(n, e, s), d = Lu(o);
  let { move: u = !0, reverse: h } = s || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = n[(a + (h ? c - f : f)) % r], !g.skip && (u ? (i.moveTo(g.x, g.y), u = !1) : d(i, p, g, h, o.stepped), p = g);
  return l && (g = n[(a + (h ? c : 0)) % r], d(i, p, g, h, o.stepped)), !!l;
}
function Mu(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = Ur(n, e, s), { move: l = !0, reverse: c } = s || {};
  let d = 0, u = 0, h, f, g, p, b, _;
  const v = (C) => (r + (c ? a - C : C)) % o, w = () => {
    p !== b && (i.lineTo(d, b), i.lineTo(d, p), i.lineTo(d, _));
  };
  for (l && (f = n[v(0)], i.moveTo(f.x, f.y)), h = 0; h <= a; ++h) {
    if (f = n[v(h)], f.skip)
      continue;
    const C = f.x, S = f.y, k = C | 0;
    k === g ? (S < p ? p = S : S > b && (b = S), d = (u * d + C) / ++u) : (w(), i.lineTo(C, S), g = k, u = 0, p = b = S), _ = S;
  }
  w();
}
function Rs(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Mu : ku;
}
function Pu(i) {
  return i.stepped ? Ic : i.tension || i.cubicInterpolationMode === "monotone" ? Oc : ae;
}
function Nu(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), jr(i, t.options), i.stroke(n);
}
function Vu(i, t, e, s) {
  const { segments: n, options: o } = t, r = Rs(t);
  for (const a of n)
    jr(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Bu = typeof Path2D == "function";
function Fu(i, t, e, s) {
  Bu && !t.options.segment ? Nu(i, t, e, s) : Vu(i, t, e, s);
}
class Zi extends Et {
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
    const s = this.options, n = t[e], o = this.points, r = Dr(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = Pu(s);
    let c, d;
    for (c = 0, d = r.length; c < d; ++c) {
      const { start: u, end: h } = r[c], f = o[u], g = o[h];
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
    (this.points || []).length && o.borderWidth && (t.save(), Fu(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function go(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class Hu extends Et {
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
    this.skip || s.radius < 0.1 || !Ut(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Cs(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function Xr(i, t) {
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
function qt(i, t, e, s) {
  return i ? 0 : wt(t, e, s);
}
function Wu(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = xr(s);
  return {
    t: qt(n.top, o.top, 0, e),
    r: qt(n.right, o.right, 0, t),
    b: qt(n.bottom, o.bottom, 0, e),
    l: qt(n.left, o.left, 0, t)
  };
}
function zu(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = Qt(n), r = Math.min(t, e), a = i.borderSkipped, l = s || Z(n);
  return {
    topLeft: qt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: qt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: qt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: qt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Gu(i) {
  const t = Xr(i), e = t.right - t.left, s = t.bottom - t.top, n = Wu(i, e / 2, s / 2), o = zu(i, e / 2, s / 2);
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
function ms(i, t, e, s) {
  const n = t === null, o = e === null, a = i && !(n && o) && Xr(i, s);
  return a && (n || jt(t, a.left, a.right)) && (o || jt(e, a.top, a.bottom));
}
function ju(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Uu(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function bs(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + o,
    h: i.h + r,
    radius: i.radius
  };
}
class Xu extends Et {
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
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = Gu(this), a = ju(r.radius) ? Ie : Uu;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, bs(r, e, o)), t.clip(), a(t, bs(o, -e, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, bs(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return ms(this, t, e, s);
  }
  inXRange(t, e) {
    return ms(this, t, null, e);
  }
  inYRange(t, e) {
    return ms(this, null, t, e);
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
function Yu(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = Ki(l, c, n);
    const d = Ds(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: d,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const u = Dr(t, d);
    for (const h of u) {
      const f = Ds(e, o[h.start], o[h.end], h.loop), g = Rr(a, n, f);
      for (const p of g)
        r.push({
          source: p,
          target: h,
          start: {
            [e]: po(d, f, "start", Math.max)
          },
          end: {
            [e]: po(d, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Ds(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = Tt(n), o = Tt(o)), {
    property: i,
    start: n,
    end: o
  };
}
function $u(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Ki(r, a, n);
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
function Ki(i, t, e) {
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
function Yr(i, t) {
  let e = [], s = !1;
  return it(i) ? (s = !0, e = i) : e = $u(i, t), e.length ? new Zi({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function mo(i) {
  return i && i.fill !== !1;
}
function Zu(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!mt(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function Ku(i, t, e) {
  const s = th(i);
  if (Z(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return mt(n) && Math.floor(n) === n ? qu(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function qu(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function Ju(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : Z(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Qu(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : Z(i) ? s = i.value : s = t.getBaseValue(), s;
}
function th(i) {
  const t = i.options, e = t.fill;
  let s = j(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function eh(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = ih(t, e);
  a.push(Yr({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let d = c.start; d <= c.end; d++)
      sh(n, r[d], a);
  }
  return new Zi({
    points: n,
    options: {}
  });
}
function ih(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function sh(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = nh(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function nh(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const d = o[c], u = r[d.start][e], h = r[d.end][e];
    if (jt(n, u, h)) {
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
class $r {
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
function oh(i) {
  const { chart: t, fill: e, line: s } = i;
  if (mt(e))
    return rh(t, e);
  if (e === "stack")
    return eh(i);
  if (e === "shape")
    return !0;
  const n = ah(i);
  return n instanceof $r ? n : Yr(n, s);
}
function rh(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function ah(i) {
  return (i.scale || {}).getPointPositionForValue ? ch(i) : lh(i);
}
function lh(i) {
  const { scale: t = {}, fill: e } = i, s = Ju(e, t);
  if (mt(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function ch(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = Qu(e, t, o), a = [];
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
function ys(i, t, e) {
  const s = oh(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, d = c.fill, u = c.backgroundColor, { above: h = u, below: f = u } = d || {}, g = n.getDatasetMeta(o), p = Lr(n, g);
  s && r.points.length && (ai(i, e), dh(i, {
    line: r,
    target: s,
    above: h,
    below: f,
    area: e,
    scale: a,
    axis: l,
    clip: p
  }), li(i));
}
function dh(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  i.save();
  let d = o;
  o !== n && (c === "x" ? (bo(i, s, r.top), _s(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), bo(i, s, r.bottom)) : c === "y" && (yo(i, s, r.left), _s(i, {
    line: e,
    target: s,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), yo(i, s, r.right), d = n)), _s(i, {
    line: e,
    target: s,
    color: d,
    scale: a,
    property: c,
    clip: l
  }), i.restore();
}
function bo(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, d = n[l], u = n[Ki(l, c, n)];
    o ? (i.moveTo(d.x, d.y), o = !1) : (i.lineTo(d.x, e), i.lineTo(d.x, d.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(u.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function yo(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, d = n[l], u = n[Ki(l, c, n)];
    o ? (i.moveTo(d.x, d.y), o = !1) : (i.lineTo(e, d.y), i.lineTo(d.x, d.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(e, u.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function _s(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = Yu(e, s, n);
  for (const { source: c, target: d, start: u, end: h } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, g = s !== !0;
    i.save(), i.fillStyle = f, uh(i, r, a, g && Ds(n, u, h)), i.beginPath();
    const p = !!e.pathSegment(i, c);
    let b;
    if (g) {
      p ? i.closePath() : _o(i, s, h, n);
      const _ = !!s.pathSegment(i, d, {
        move: p,
        reverse: !0
      });
      b = p && _, b || _o(i, s, u, n);
    }
    i.closePath(), i.fill(b ? "evenodd" : "nonzero"), i.restore();
  }
}
function uh(i, t, e, s) {
  const n = t.chart.chartArea, { property: o, start: r, end: a } = s || {};
  if (o === "x" || o === "y") {
    let l, c, d, u;
    o === "x" ? (l = r, c = n.top, d = a, u = n.bottom) : (l = n.left, c = r, d = n.right, u = a), i.beginPath(), e && (l = Math.max(l, e.left), d = Math.min(d, e.right), c = Math.max(c, e.top), u = Math.min(u, e.bottom)), i.rect(l, c, d - l, u - c), i.clip();
  }
}
function _o(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var hh = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Zi && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: Ku(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = Zu(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && ys(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      mo(o) && ys(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !mo(s) || e.drawTime !== "beforeDatasetDraw" || ys(i.ctx, s, i.chartArea);
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
}, fh = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class vo extends Et {
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
    const s = t.labels, n = gt(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = xo(s, o);
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
      const b = s + e / 2 + o.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + b + 2 * a > r) && (u += d, c[c.length - (p > 0 ? 0 : 1)] = 0, f += d, h++), l[p] = {
        left: 0,
        top: f,
        row: h,
        width: b,
        height: n
      }, c[c.length - 1] += b + a;
    }), u;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], d = r - t;
    let u = a, h = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((b, _) => {
      const { itemWidth: v, itemHeight: w } = gh(s, e, o, b, n);
      _ > 0 && f + w + 2 * a > d && (u += h + a, c.push({
        width: h,
        height: f
      }), g += h + a, p++, h = f = 0), l[_] = {
        left: g,
        top: f,
        col: p,
        width: v,
        height: w
      }, h = Math.max(h, v), f += w + a;
    }), u += h, c.push({
      width: h,
      height: f
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = Ae(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = St(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = St(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = St(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = St(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ai(t, this), this._draw(), li(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = ft.color, l = Ae(t.rtl, this.left, this.width), c = gt(r.font), { padding: d } = r, u = c.size, h = u / 2;
    let f;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: b } = xo(r, u), _ = function(k, M, I) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      n.save();
      const F = j(I.lineWidth, 1);
      if (n.fillStyle = j(I.fillStyle, a), n.lineCap = j(I.lineCap, "butt"), n.lineDashOffset = j(I.lineDashOffset, 0), n.lineJoin = j(I.lineJoin, "miter"), n.lineWidth = F, n.strokeStyle = j(I.strokeStyle, a), n.setLineDash(j(I.lineDash, [])), r.usePointStyle) {
        const T = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: I.pointStyle,
          rotation: I.rotation,
          borderWidth: F
        }, m = l.xPlus(k, g / 2), O = M + h;
        _r(n, T, m, O, r.pointStyleWidth && g);
      } else {
        const T = M + Math.max((u - p) / 2, 0), m = l.leftForLtr(k, g), O = Qt(I.borderRadius);
        n.beginPath(), Object.values(O).some((P) => P !== 0) ? Ie(n, {
          x: m,
          y: T,
          w: g,
          h: p,
          radius: O
        }) : n.rect(m, T, g, p), n.fill(), F !== 0 && n.stroke();
      }
      n.restore();
    }, v = function(k, M, I) {
      ge(n, I.text, k, M + b / 2, c, {
        strikethrough: I.hidden,
        textAlign: l.textAlign(I.textAlign)
      });
    }, w = this.isHorizontal(), C = this._computeTitleHeight();
    w ? f = {
      x: St(o, this.left + d, this.right - s[0]),
      y: this.top + d + C,
      line: 0
    } : f = {
      x: this.left + d,
      y: St(o, this.top + C + d, this.bottom - e[0].height),
      line: 0
    }, Cr(this.ctx, t.textDirection);
    const S = b + d;
    this.legendItems.forEach((k, M) => {
      n.strokeStyle = k.fontColor, n.fillStyle = k.fontColor;
      const I = n.measureText(k.text).width, F = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)), T = g + h + I;
      let m = f.x, O = f.y;
      l.setWidth(this.width), w ? M > 0 && m + T + d > this.right && (O = f.y += S, f.line++, m = f.x = St(o, this.left + d, this.right - s[f.line])) : M > 0 && O + S > this.bottom && (m = f.x = m + e[f.line].width + d, f.line++, O = f.y = St(o, this.top + C + d, this.bottom - e[f.line].height));
      const P = l.x(m);
      if (_(P, O, k), m = Pl(F, m + g + h, w ? m + T : this.right, t.rtl), v(l.x(m), O, k), w)
        f.x += T + d;
      else if (typeof k.text != "string") {
        const G = c.lineHeight;
        f.y += Zr(k, G) + d;
      } else
        f.y += S;
    }), Ir(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = gt(e.font), n = bt(e.padding);
    if (!e.display)
      return;
    const o = Ae(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let d, u = this.left, h = this.width;
    if (this.isHorizontal())
      h = Math.max(...this.lineWidths), d = this.top + c, u = St(t.align, u, this.right - h);
    else {
      const g = this.columnSizes.reduce((p, b) => Math.max(p, b.height), 0);
      d = c + St(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = St(a, u, u + h);
    r.textAlign = o.textAlign(Ys(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, ge(r, e.text, f, d, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = gt(t.font), s = bt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (jt(t, this.left, this.right) && jt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], jt(t, n.left, n.left + n.width) && jt(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!bh(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = fh(n, s);
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
function gh(i, t, e, s, n) {
  const o = ph(s, i, t, e), r = mh(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function ph(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function mh(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = Zr(t, e)), s;
}
function Zr(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function bh(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var yh = {
  id: "legend",
  _element: vo,
  start(i, t, e) {
    const s = i.legend = new vo({
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
          const c = l.controller.getStyle(e ? 0 : void 0), d = bt(c.borderWidth);
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
class Kr extends Et {
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
    this._padding = bt(s.padding);
    const o = n * gt(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, d, u;
    return this.isHorizontal() ? (d = St(a, s, o), u = e + t, c = o - s) : (r.position === "left" ? (d = s + t, u = St(a, n, e), l = $ * -0.5) : (d = o - t, u = St(a, e, n), l = $ * 0.5), c = n - e), {
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
    const s = gt(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    ge(t, e.text, 0, 0, s, {
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
function _h(i, t) {
  const e = new Kr({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  kt.configure(i, e, t), kt.addBox(i, e), i.titleBlock = e;
}
var xh = {
  id: "title",
  _element: Kr,
  start(i, t, e) {
    _h(i, e);
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
const $e = {
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
function Nt(i, t) {
  return t && (it(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Wt(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function vh(i, t) {
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
function So(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = gt(t.bodyFont), c = gt(t.titleFont), d = gt(t.footerFont), u = o.length, h = n.length, f = s.length, g = bt(t.padding);
  let p = g.height, b = 0, _ = s.reduce((C, S) => C + S.before.length + S.lines.length + S.after.length, 0);
  if (_ += i.beforeBody.length + i.afterBody.length, u && (p += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), _) {
    const C = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * C + (_ - f) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  h && (p += t.footerMarginTop + h * d.lineHeight + (h - 1) * t.footerSpacing);
  let v = 0;
  const w = function(C) {
    b = Math.max(b, e.measureText(C).width + v);
  };
  return e.save(), e.font = c.string, nt(i.title, w), e.font = l.string, nt(i.beforeBody.concat(i.afterBody), w), v = t.displayColors ? r + 2 + t.boxPadding : 0, nt(s, (C) => {
    nt(C.before, w), nt(C.lines, w), nt(C.after, w);
  }), v = 0, e.font = d.string, nt(i.footer, w), e.restore(), b += g.width, {
    width: b,
    height: p
  };
}
function Sh(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Th(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function wh(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Th(c, i, t, e) && (c = "center"), c;
}
function To(i, t, e) {
  const s = e.yAlign || t.yAlign || Sh(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || wh(i, t, e, s),
    yAlign: s
  };
}
function Eh(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Ah(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function wo(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: d, topRight: u, bottomLeft: h, bottomRight: f } = Qt(r);
  let g = Eh(t, a);
  const p = Ah(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(d, h) + n : a === "right" && (g += Math.max(u, f) + n), {
    x: wt(g, 0, s.width - t.width),
    y: wt(p, 0, s.height - t.height)
  };
}
function Ci(i, t, e) {
  const s = bt(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function Eo(i) {
  return Nt([], Wt(i));
}
function Ch(i, t, e) {
  return se(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Ao(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const qr = {
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
  afterLabel: Ft,
  afterBody: Ft,
  beforeFooter: Ft,
  footer: Ft,
  afterFooter: Ft
};
function Ct(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? qr[t].call(e, s) : n;
}
class Co extends Et {
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
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new sn(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Ch(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = Ct(s, "beforeTitle", this, t), o = Ct(s, "title", this, t), r = Ct(s, "afterTitle", this, t);
    let a = [];
    return a = Nt(a, Wt(n)), a = Nt(a, Wt(o)), a = Nt(a, Wt(r)), a;
  }
  getBeforeBody(t, e) {
    return Eo(Ct(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return nt(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Ao(s, o);
      Nt(r.before, Wt(Ct(a, "beforeLabel", this, o))), Nt(r.lines, Ct(a, "label", this, o)), Nt(r.after, Wt(Ct(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return Eo(Ct(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = Ct(s, "beforeFooter", this, t), o = Ct(s, "footer", this, t), r = Ct(s, "afterFooter", this, t);
    let a = [];
    return a = Nt(a, Wt(n)), a = Nt(a, Wt(o)), a = Nt(a, Wt(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(vh(this.chart, e[l]));
    return t.filter && (a = a.filter((d, u, h) => t.filter(d, u, h, s))), t.itemSort && (a = a.sort((d, u) => t.itemSort(d, u, s))), nt(a, (d) => {
      const u = Ao(t.callbacks, d);
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
      const a = $e[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = So(this, s), c = Object.assign({}, a, l), d = To(this.chart, s, c), u = wo(s, c, d, this.chart);
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
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: u } = Qt(a), { x: h, y: f } = t, { width: g, height: p } = e;
    let b, _, v, w, C, S;
    return o === "center" ? (C = f + p / 2, n === "left" ? (b = h, _ = b - r, w = C + r, S = C - r) : (b = h + g, _ = b + r, w = C - r, S = C + r), v = b) : (n === "left" ? _ = h + Math.max(l, d) + r : n === "right" ? _ = h + g - Math.max(c, u) - r : _ = this.caretX, o === "top" ? (w = f, C = w - r, b = _ - r, v = _ + r) : (w = f + p, C = w + r, b = _ + r, v = _ - r), S = w), {
      x1: b,
      x2: _,
      x3: v,
      y1: w,
      y2: C,
      y3: S
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = Ae(s.rtl, this.x, this.width);
      for (t.x = Ci(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = gt(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, d = gt(o.bodyFont), u = Ci(this, "left", o), h = n.x(u), f = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, g = e.y + f;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, b = n.leftForLtr(h, c) + c / 2, _ = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Cs(t, p, b, _), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Cs(t, p, b, _);
    } else {
      t.lineWidth = Z(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const p = n.leftForLtr(h, c), b = n.leftForLtr(n.xPlus(h, 1), c - 2), _ = Qt(r.borderRadius);
      Object.values(_).some((v) => v !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Ie(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Ie(t, {
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
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: d } = s, u = gt(s.bodyFont);
    let h = u.lineHeight, f = 0;
    const g = Ae(s.rtl, this.x, this.width), p = function(I) {
      e.fillText(I, g.x(t.x + f), t.y + h / 2), t.y += h + o;
    }, b = g.textAlign(r);
    let _, v, w, C, S, k, M;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = u.string, t.x = Ci(this, b, s), e.fillStyle = s.bodyColor, nt(this.beforeBody, p), f = a && b !== "right" ? r === "center" ? c / 2 + d : c + 2 + d : 0, C = 0, k = n.length; C < k; ++C) {
      for (_ = n[C], v = this.labelTextColors[C], e.fillStyle = v, nt(_.before, p), w = _.lines, a && w.length && (this._drawColorBox(e, t, C, g, s), h = Math.max(u.lineHeight, l)), S = 0, M = w.length; S < M; ++S)
        p(w[S]), h = u.lineHeight;
      nt(_.after, p);
    }
    f = 0, h = u.lineHeight, nt(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = Ae(s.rtl, this.x, this.width);
      for (t.x = Ci(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = gt(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: d } = s, { topLeft: u, topRight: h, bottomLeft: f, bottomRight: g } = Qt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + u, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - h, l), e.quadraticCurveTo(a + c, l, a + c, l + h), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + d - g), e.quadraticCurveTo(a + c, l + d, a + c - g, l + d), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + d), e.quadraticCurveTo(a, l + d, a, l + d - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + u), e.quadraticCurveTo(a, l, a + u, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = $e[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = So(this, t), l = Object.assign({}, r, this._size), c = To(e, t, l), d = wo(t, l, c, e);
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
    const r = bt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Cr(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Ir(t, e.textDirection), t.restore());
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
    const { caretX: s, caretY: n, options: o } = this, r = $e[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
var Ih = {
  id: "tooltip",
  _element: Co,
  positioners: $e,
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
const Oh = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Rh(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Oh(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const Dh = (i, t) => i === null ? null : wt(Math.round(i), 0, t);
function Io(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Lh extends ke {
  static id = "category";
  static defaults = {
    ticks: {
      callback: Io
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
    return e = isFinite(e) && s[e] === t ? e : Rh(s, t, j(e, t), this._addedLabels), Dh(e, s.length - 1);
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
    return Io.call(this, t);
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
function kh(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: d, maxDigits: u, includeBounds: h } = i, f = o || 1, g = d - 1, { min: p, max: b } = t, _ = !et(r), v = !et(a), w = !et(c), C = (b - p) / (u + 1);
  let S = wn((b - p) / g / f) * f, k, M, I, F;
  if (S < 1e-14 && !_ && !v)
    return [
      {
        value: p
      },
      {
        value: b
      }
    ];
  F = Math.ceil(b / S) - Math.floor(p / S), F > g && (S = wn(F * S / g / f) * f), et(l) || (k = Math.pow(10, l), S = Math.ceil(S * k) / k), n === "ticks" ? (M = Math.floor(p / S) * S, I = Math.ceil(b / S) * S) : (M = p, I = b), _ && v && o && Cl((a - r) / o, S / 1e3) ? (F = Math.round(Math.min((a - r) / S, d)), S = (a - r) / F, M = r, I = a) : w ? (M = _ ? r : M, I = v ? a : I, F = c - 1, S = (I - M) / F) : (F = (I - M) / S, qe(F, Math.round(F), S / 1e3) ? F = Math.round(F) : F = Math.ceil(F));
  const T = Math.max(En(S), En(M));
  k = Math.pow(10, et(l) ? T : l), M = Math.round(M * k) / k, I = Math.round(I * k) / k;
  let m = 0;
  for (_ && (h && M !== r ? (e.push({
    value: r
  }), M < r && m++, qe(Math.round((M + m * S) * k) / k, r, Oo(r, C, i)) && m++) : M < r && m++); m < F; ++m) {
    const O = Math.round((M + m * S) * k) / k;
    if (v && O > a)
      break;
    e.push({
      value: O
    });
  }
  return v && h && I !== a ? e.length && qe(e[e.length - 1].value, a, Oo(a, C, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!v || I === a) && e.push({
    value: I
  }), e;
}
function Oo(i, t, { horizontal: e, minRotation: s }) {
  const n = pt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Ls extends ke {
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
      const l = Bt(n), c = Bt(o);
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
    }, o = this._range || this, r = kh(n, o);
    return t.bounds === "ticks" && Il(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return Xi(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Mh extends Ls {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Zs.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = mt(t) ? t : 0, this.max = mt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = pt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
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
    const e = bt(t.backdropPadding);
    return j(t.font && t.font.size, ft.font.size) + e.height;
  }
  return 0;
}
function Ph(i, t, e) {
  return e = it(e) ? e : [
    e
  ], {
    w: $l(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Ro(i, t, e, s, n) {
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
function Nh(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? $ / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const d = i.getPointPosition(l, i.drawingArea + n[l], a), u = gt(c.font), h = Ph(i.ctx, u, i._pointLabels[l]);
    s[l] = h;
    const f = Tt(i.getIndexAngle(l) + a), g = Math.round(Ui(f)), p = Ro(g, d.x, h.w, 0, 180), b = Ro(g, d.y, h.h, 90, 270);
    Vh(e, t, f, p, b);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Hh(i, s, n);
}
function Vh(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Bh(i, t, e) {
  const s = i.drawingArea, { extra: n, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, s + n + r, o), c = Math.round(Ui(Tt(l.angle + ct))), d = Gh(l.y, a.h, c), u = Wh(c), h = zh(l.x, a.w, u);
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
function Fh(i, t) {
  if (!t)
    return !0;
  const { left: e, top: s, right: n, bottom: o } = i;
  return !(Ut({
    x: e,
    y: s
  }, t) || Ut({
    x: e,
    y: o
  }, t) || Ut({
    x: n,
    y: s
  }, t) || Ut({
    x: n,
    y: o
  }, t));
}
function Hh(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: ks(o) / 2,
    additionalAngle: r ? $ / n : 0
  };
  let c;
  for (let d = 0; d < n; d++) {
    l.padding = e[d], l.size = t[d];
    const u = Bh(i, d, l);
    s.push(u), a === "auto" && (u.visible = Fh(u, c), u.visible && (c = u));
  }
  return s;
}
function Wh(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function zh(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Gh(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function jh(i, t, e) {
  const { left: s, top: n, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!et(a)) {
    const l = Qt(t.borderRadius), c = bt(t.backdropPadding);
    i.fillStyle = a;
    const d = s - c.left, u = n - c.top, h = o - s + c.width, f = r - n + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), Ie(i, {
      x: d,
      y: u,
      w: h,
      h: f,
      radius: l
    }), i.fill()) : i.fillRect(d, u, h, f);
  }
}
function Uh(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = i._pointLabelItems[n];
    if (!o.visible)
      continue;
    const r = s.setContext(i.getPointLabelContext(n));
    jh(e, r, o);
    const a = gt(r.font), { x: l, y: c, textAlign: d } = o;
    ge(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: d,
      textBaseline: "middle"
    });
  }
}
function Jr(i, t, e, s) {
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
function Xh(i, t, e, s, n) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash || []), o.lineDashOffset = n.dashOffset, o.beginPath(), Jr(i, e, r, s), o.closePath(), o.stroke(), o.restore());
}
function Yh(i, t, e) {
  return se(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class $h extends Ls {
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
      callback: Zs.formatters.numeric
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
    const t = this._padding = bt(ks(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = mt(t) && !isNaN(t) ? t : 0, this.max = mt(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / ks(this.options));
  }
  generateTickLabels(t) {
    Ls.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = st(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Nh(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = rt / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return Tt(t * e + pt(s));
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
      return Yh(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - ct + s;
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
    if (e.pointLabels.display && Uh(this, r), n.display && this.ticks.forEach((d, u) => {
      if (u !== 0 || u === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(d.value);
        const h = this.getContext(u), f = n.setContext(h), g = o.setContext(h);
        Xh(this, f, l, r, g);
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
      const c = s.setContext(this.getContext(l)), d = gt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = d.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const u = bt(c.backdropPadding);
        t.fillRect(-r / 2 - u.left, -o - d.size / 2 - u.top, r + u.width, d.size + u.height);
      }
      ge(t, a.label, 0, -o, d, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const qi = {
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
}, It = /* @__PURE__ */ Object.keys(qi);
function Do(i, t) {
  return i - t;
}
function Lo(i, t) {
  if (et(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), mt(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (he(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function ko(i, t, e, s) {
  const n = It.length;
  for (let o = It.indexOf(i); o < n - 1; ++o) {
    const r = qi[It[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return It[o];
  }
  return It[n - 1];
}
function Zh(i, t, e, s, n) {
  for (let o = It.length - 1; o >= It.indexOf(e); o--) {
    const r = It[o];
    if (qi[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return It[e ? It.indexOf(e) : 0];
}
function Kh(i) {
  for (let t = It.indexOf(i) + 1, e = It.length; t < e; ++t)
    if (qi[It[t]].common)
      return It[t];
}
function Mo(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Xs(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function qh(i, t, e, s) {
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
  return o === 0 || !e ? s : qh(i, s, n, e);
}
class No extends ke {
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
    const s = t.time || (t.time = {}), n = this._adapter = new pd._date(t.adapters.date);
    n.init(e), Ke(s.displayFormats, n.formats()), this._parseOpts = {
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = mt(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = mt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
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
    return this._unit = e.unit || (s.autoSkip ? ko(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Zh(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Kh(this._unit), this.initOffsets(n), t.reverse && a.reverse(), Po(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = wt(e, 0, r), s = wt(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || ko(o.minUnit, e, s, this._getLabelCapacity(e)), a = j(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = he(l) || l === !0, d = {};
    let u = e, h, f;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (h = u, f = 0; h < s; h = +t.add(h, a, r), f++)
      Mo(d, h, g);
    return (h === s || n.bounds === "ticks" || f === 1) && Mo(d, h, g), Object.keys(d).sort(Do).map((p) => +p);
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
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = pt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
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
    return mr(t.sort(Do));
  }
}
function Ii(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = le(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = le(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
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
    this._minPos = Ii(e, this.min), this._tableRange = Ii(e, this.max) - this._minPos, super.initOffsets(t);
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
    return (Ii(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ii(this._table, s * this._tableRange + this._minPos, !0);
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
}, Jh = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, Qh = {
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
  ...Jh
}, tf = Ma[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function we(i) {
  return rr(i) ? Ts(i) : i;
}
function ef(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return rr(t) ? new Proxy(i, {}) : i;
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
const of = ji({
  props: Qh,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = Gt(null), o = nr(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: d, options: u, plugins: h, datasetIdKey: f } = i, g = nf(d, f), p = ef(g, d);
      o.value = new ue(n.value, {
        type: c,
        data: p,
        options: {
          ...u
        },
        plugins: h
      });
    }, a = () => {
      const c = Ts(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return Li(r), or(a), ti([
      () => i.options,
      () => i.data
    ], (c, d) => {
      let [u, h] = c, [f, g] = d;
      const p = Ts(o.value);
      if (!p)
        return;
      let b = !1;
      if (u) {
        const _ = we(u), v = we(f);
        _ && _ !== v && (sf(p, _), b = !0);
      }
      if (h) {
        const _ = we(h.labels), v = we(g.labels), w = we(h.datasets), C = we(g.datasets);
        _ !== v && (ta(p.config.data, _), b = !0), w && w !== C && (ea(p.config.data, w, i.datasetIdKey), b = !0);
      }
      b && ka(() => {
        l(p);
      });
    }, {
      deep: !0
    }), () => Ss("canvas", {
      role: "img",
      "aria-label": i.ariaLabel,
      "aria-describedby": i.ariaDescribedby,
      ref: n
    }, [
      Ss("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function Me(i, t) {
  return ue.register(t), ji({
    props: Qr,
    setup(e, s) {
      let { expose: n } = s;
      const o = nr(null), r = (a) => {
        o.value = a?.chart;
      };
      return n({
        chart: o
      }), () => Ss(of, tf({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const xs = /* @__PURE__ */ Me("bar", cd), rf = /* @__PURE__ */ Me("doughnut", nn), af = /* @__PURE__ */ Me("line", ud), lf = /* @__PURE__ */ Me("pie", fd), cf = /* @__PURE__ */ Me("polarArea", hd), df = /* @__PURE__ */ Me("radar", gd);
/*!
* chartjs-plugin-annotation v3.1.0
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2024 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */
const Vo = {
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
function rn(i, t, e) {
  return (Vo.modes[e.mode] || Vo.modes.nearest)(i, t, e);
}
function uf(i, t, e) {
  return e !== "x" && e !== "y" ? i.inRange(t.x, t.y, "x", !0) || i.inRange(t.x, t.y, "y", !0) : i.inRange(t.x, t.y, e, !0);
}
function hf(i, t, e) {
  return e === "x" ? { x: i.x, y: t.y } : e === "y" ? { x: t.x, y: i.y } : t;
}
function Di(i, t, e) {
  return i.filter((s) => e.intersect ? s.inRange(t.x, t.y) : uf(s, t, e.axis));
}
function ff(i, t, e) {
  let s = Number.POSITIVE_INFINITY;
  return Di(i, t, e).reduce((n, o) => {
    const r = o.getCenterPoint(), a = hf(t, r, e.axis), l = Ce(t, a);
    return l < s ? (n = [o], s = l) : l === s && n.push(o), n;
  }, []).sort((n, o) => n._index - o._index).slice(0, 1);
}
function me(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e), o = t.x, r = t.y;
  return {
    x: o + s * (i.x - o) - n * (i.y - r),
    y: r + n * (i.x - o) + s * (i.y - r)
  };
}
const gf = (i, t) => t > i || i.length > t.length && i.slice(0, t.length) === t, ce = 1e-3, Ji = (i, t, e) => Math.min(e, Math.max(t, i)), ia = (i, t) => i.value >= i.start - t && i.value <= i.end + t;
function pf(i, t, e) {
  for (const s of Object.keys(i))
    i[s] = Ji(i[s], t, e);
  return i;
}
function mf(i, t, e, s) {
  return !i || !t || e <= 0 ? !1 : Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2) <= Math.pow(e + s, 2);
}
function sa(i, { x: t, y: e, x2: s, y2: n }, o, { borderWidth: r, hitTolerance: a }) {
  const l = (r + a) / 2, c = i.x >= t - l - ce && i.x <= s + l + ce, d = i.y >= e - l - ce && i.y <= n + l + ce;
  return o === "x" ? c : (o === "y" || c) && d;
}
function na(i, { rect: t, center: e }, s, { rotation: n, borderWidth: o, hitTolerance: r }) {
  const a = me(i, e, pt(-n));
  return sa(a, t, s, { borderWidth: o, hitTolerance: r });
}
function be(i, t) {
  const { centerX: e, centerY: s } = i.getProps(["centerX", "centerY"], t);
  return { x: e, y: s };
}
function bf(i, t, e, s = !0) {
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
const oa = (i) => typeof i == "string" && i.endsWith("%"), ra = (i) => parseFloat(i) / 100, aa = (i) => Ji(ra(i), 0, 1), je = (i, t) => ({ x: i, y: t, x2: i, y2: t, width: 0, height: 0 }), yf = {
  box: (i) => je(i.centerX, i.centerY),
  doughnutLabel: (i) => je(i.centerX, i.centerY),
  ellipse: (i) => ({ centerX: i.centerX, centerY: i.centerX, radius: 0, width: 0, height: 0 }),
  label: (i) => je(i.centerX, i.centerY),
  line: (i) => je(i.x, i.y),
  point: (i) => ({ centerX: i.centerX, centerY: i.centerY, radius: 0, width: 0, height: 0 }),
  polygon: (i) => je(i.centerX, i.centerY)
};
function an(i, t) {
  return t === "start" ? 0 : t === "end" ? i : oa(t) ? aa(t) * i : i / 2;
}
function ie(i, t, e = !0) {
  return typeof t == "number" ? t : oa(t) ? (e ? aa(t) : ra(t)) * i : i;
}
function _f(i, t) {
  const { x: e, width: s } = i, n = t.textAlign;
  return n === "center" ? e + s / 2 : n === "end" || n === "right" ? e + s : e;
}
function la(i, t, { borderWidth: e, position: s, xAdjust: n, yAdjust: o }, r) {
  const a = Z(r), l = t.width + (a ? r.width : 0) + e, c = t.height + (a ? r.height : 0) + e, d = ln(s), u = Bo(i.x, l, n, d.x), h = Bo(i.y, c, o, d.y);
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
function ln(i, t = "center") {
  return Z(i) ? {
    x: j(i.x, t),
    y: j(i.y, t)
  } : (i = j(i, t), {
    x: i,
    y: i
  });
}
const ca = (i, t) => i && i.autoFit && t < 1;
function da(i, t) {
  const e = i.font, s = it(e) ? e : [e];
  return ca(i, t) ? s.map(function(n) {
    const o = gt(n);
    return o.size = Math.floor(n.size * t), o.lineHeight = n.lineHeight, gt(o);
  }) : s.map((n) => gt(n));
}
function ua(i) {
  return i && (Rt(i.xValue) || Rt(i.yValue));
}
function Bo(i, t, e = 0, s) {
  return i - an(t, s) + e;
}
function Pe(i, t, e) {
  const s = e.init;
  if (s) {
    if (s === !0)
      return fa(t, e);
  } else return;
  return xf(i, t, e);
}
function ha(i, t, e) {
  let s = !1;
  return t.forEach((n) => {
    Ot(i[n]) ? (s = !0, e[n] = i[n]) : Rt(e[n]) && delete e[n];
  }), s;
}
function fa(i, t) {
  const e = t.type || "line";
  return yf[e](i);
}
function xf(i, t, e) {
  const s = st(e.init, [{ chart: i, properties: t, options: e }]);
  if (s === !0)
    return fa(t, e);
  if (Z(s))
    return s;
}
const vs = /* @__PURE__ */ new Map(), vf = (i) => isNaN(i) || i <= 0, Sf = (i) => i.reduce(function(t, e) {
  return t += e.string, t;
}, "");
function Qi(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function ts(i, { x: t, y: e }, s) {
  s && (i.translate(t, e), i.rotate(pt(s)), i.translate(-t, -e));
}
function Xt(i, t) {
  if (t && t.borderWidth)
    return i.lineCap = t.borderCapStyle || "butt", i.setLineDash(t.borderDash), i.lineDashOffset = t.borderDashOffset, i.lineJoin = t.borderJoinStyle || "miter", i.lineWidth = t.borderWidth, i.strokeStyle = t.borderColor, !0;
}
function Ne(i, t) {
  i.shadowColor = t.backgroundShadowColor, i.shadowBlur = t.shadowBlur, i.shadowOffsetX = t.shadowOffsetX, i.shadowOffsetY = t.shadowOffsetY;
}
function es(i, t) {
  const e = t.content;
  if (Qi(e))
    return {
      width: ie(e.width, t.width),
      height: ie(e.height, t.height)
    };
  const s = da(t), n = t.textStrokeWidth, o = it(e) ? e : [e], r = o.join() + Sf(s) + n + (i._measureText ? "-spriting" : "");
  return vs.has(r) || vs.set(r, Af(i, o, s, n)), vs.get(r);
}
function ga(i, t, e) {
  const { x: s, y: n, width: o, height: r } = t;
  i.save(), Ne(i, e);
  const a = Xt(i, e);
  i.fillStyle = e.backgroundColor, i.beginPath(), Ie(i, {
    x: s,
    y: n,
    w: o,
    h: r,
    radius: pf(Qt(e.borderRadius), 0, Math.min(o, r) / 2)
  }), i.closePath(), i.fill(), a && (i.shadowColor = e.borderShadowColor, i.stroke()), i.restore();
}
function pa(i, t, e, s) {
  const n = e.content;
  if (Qi(n)) {
    i.save(), i.globalAlpha = Of(e.opacity, n.style.opacity), i.drawImage(n, t.x, t.y, t.width, t.height), i.restore();
    return;
  }
  const o = it(n) ? n : [n], r = da(e, s), a = e.color, l = it(a) ? a : [a], c = _f(t, e), d = t.y + e.textStrokeWidth / 2;
  i.save(), i.textBaseline = "middle", i.textAlign = e.textAlign, Tf(i, e) && Cf(i, { x: c, y: d }, o, r), If(i, { x: c, y: d }, o, { fonts: r, colors: l }), i.restore();
}
function Tf(i, t) {
  if (t.textStrokeWidth > 0)
    return i.lineJoin = "round", i.miterLimit = 2, i.lineWidth = t.textStrokeWidth, i.strokeStyle = t.textStrokeColor, !0;
}
function wf(i, t, e, s) {
  const { radius: n, options: o } = t, r = o.pointStyle, a = o.rotation;
  let l = (a || 0) * Us;
  if (Qi(r)) {
    i.save(), i.translate(e, s), i.rotate(l), i.drawImage(r, -r.width / 2, -r.height / 2, r.width, r.height), i.restore();
    return;
  }
  vf(n) || Ef(i, { x: e, y: s, radius: n, rotation: a, style: r, rad: l });
}
function Ef(i, { x: t, y: e, radius: s, rotation: n, style: o, rad: r }) {
  let a, l, c, d;
  switch (i.beginPath(), o) {
    // Default includes circle
    default:
      i.arc(t, e, s, 0, rt), i.closePath();
      break;
    case "triangle":
      i.moveTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Ni, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), r += Ni, i.lineTo(t + Math.sin(r) * s, e - Math.cos(r) * s), i.closePath();
      break;
    case "rectRounded":
      d = s * 0.516, c = s - d, a = Math.cos(r + Lt) * c, l = Math.sin(r + Lt) * c, i.arc(t - a, e - l, d, r - $, r - ct), i.arc(t + l, e - a, d, r - ct, r), i.arc(t + a, e + l, d, r, r + ct), i.arc(t - l, e + a, d, r + ct, r + $), i.closePath();
      break;
    case "rect":
      if (!n) {
        c = Math.SQRT1_2 * s, i.rect(t - c, e - c, 2 * c, 2 * c);
        break;
      }
      r += Lt;
    /* falls through */
    case "rectRot":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + l, e - a), i.lineTo(t + a, e + l), i.lineTo(t - l, e + a), i.closePath();
      break;
    case "crossRot":
      r += Lt;
    /* falls through */
    case "cross":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
      break;
    case "star":
      a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a), r += Lt, a = Math.cos(r) * s, l = Math.sin(r) * s, i.moveTo(t - a, e - l), i.lineTo(t + a, e + l), i.moveTo(t + l, e - a), i.lineTo(t - l, e + a);
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
function Cf(i, { x: t, y: e }, s, n) {
  i.beginPath();
  let o = 0;
  s.forEach(function(r, a) {
    const l = n[Math.min(a, n.length - 1)], c = l.lineHeight;
    i.font = l.string, i.strokeText(r, t, e + c / 2 + o), o += c;
  }), i.stroke();
}
function If(i, { x: t, y: e }, s, { fonts: n, colors: o }) {
  let r = 0;
  s.forEach(function(a, l) {
    const c = o[Math.min(l, o.length - 1)], d = n[Math.min(l, n.length - 1)], u = d.lineHeight;
    i.beginPath(), i.font = d.string, i.fillStyle = c, i.fillText(a, t, e + u / 2 + r), r += u, i.fill();
  });
}
function Of(i, t) {
  const e = he(i) ? i : t;
  return he(e) ? Ji(e, 0, 1) : 1;
}
const ma = ["left", "bottom", "top", "right"];
function Rf(i, t) {
  const { pointX: e, pointY: s, options: n } = t, o = n.callout, r = o && o.display && Pf(t, o);
  if (!r || Vf(t, o, r))
    return;
  if (i.save(), i.beginPath(), !Xt(i, o))
    return i.restore();
  const { separatorStart: l, separatorEnd: c } = Df(t, r), { sideStart: d, sideEnd: u } = kf(t, r, l);
  (o.margin > 0 || n.borderWidth === 0) && (i.moveTo(l.x, l.y), i.lineTo(c.x, c.y)), i.moveTo(d.x, d.y), i.lineTo(u.x, u.y);
  const h = me({ x: e, y: s }, t.getCenterPoint(), pt(-t.rotation));
  i.lineTo(h.x, h.y), i.stroke(), i.restore();
}
function Df(i, t) {
  const { x: e, y: s, x2: n, y2: o } = i, r = Lf(i, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: s }, l = { x: a.x, y: o }) : (a = { x: e, y: s + r }, l = { x: n, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function Lf(i, t) {
  const { width: e, height: s, options: n } = i, o = n.callout.margin + n.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? s + o : -o;
}
function kf(i, t, e) {
  const { y: s, width: n, height: o, options: r } = i, a = r.callout.start, l = Mf(t, r.callout);
  let c, d;
  return t === "left" || t === "right" ? (c = { x: e.x, y: s + ie(o, a) }, d = { x: c.x + l, y: c.y }) : (c = { x: e.x + ie(n, a), y: e.y }, d = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: d };
}
function Mf(i, t) {
  const e = t.side;
  return i === "left" || i === "top" ? -e : e;
}
function Pf(i, t) {
  const e = t.position;
  return ma.includes(e) ? e : Nf(i, t);
}
function Nf(i, t) {
  const { x: e, y: s, x2: n, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: d, centerY: u, rotation: h } = i, f = { x: d, y: u }, g = t.start, p = ie(r, g), b = ie(a, g), _ = [e, e + p, e + p, n], v = [s + b, o, s, o], w = [];
  for (let C = 0; C < 4; C++) {
    const S = me({ x: _[C], y: v[C] }, f, pt(h));
    w.push({
      position: ma[C],
      distance: Ce(S, { x: l, y: c })
    });
  }
  return w.sort((C, S) => C.distance - S.distance)[0].position;
}
function Vf(i, t, e) {
  const { pointX: s, pointY: n } = i, o = t.margin;
  let r = s, a = n;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), i.inRange(r, a);
}
const Fo = {
  xScaleID: { min: "xMin", max: "xMax", start: "left", end: "right", startProp: "x", endProp: "x2" },
  yScaleID: { min: "yMin", max: "yMax", start: "bottom", end: "top", startProp: "y", endProp: "y2" }
};
function De(i, t, e) {
  return t = typeof t == "number" ? t : i.parse(t), mt(t) ? i.getPixelForValue(t) : e;
}
function pe(i, t, e) {
  const s = t[e];
  if (s || e === "scaleID")
    return s;
  const n = e.charAt(0), o = Object.values(i).filter((r) => r.axis && r.axis === n);
  return o.length ? o[0].id : n;
}
function ba(i, t) {
  if (i) {
    const e = i.options.reverse, s = De(i, t.min, e ? t.end : t.start), n = De(i, t.max, e ? t.start : t.end);
    return {
      start: s,
      end: n
    };
  }
}
function ya(i, t) {
  const { chartArea: e, scales: s } = i, n = s[pe(s, t, "xScaleID")], o = s[pe(s, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return n && (r = De(n, t.xValue, n.left + n.width / 2)), o && (a = De(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function cn(i, t) {
  const e = i.scales, s = e[pe(e, t, "xScaleID")], n = e[pe(e, t, "yScaleID")];
  if (!s && !n)
    return {};
  let { left: o, right: r } = s || i.chartArea, { top: a, bottom: l } = n || i.chartArea;
  const c = Ho(s, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const d = Ho(n, { min: t.yMin, max: t.yMax, start: l, end: a });
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
function _a(i, t) {
  if (!ua(t)) {
    const e = cn(i, t);
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
  return Ff(i, t);
}
function Bf(i, t) {
  const { scales: e, chartArea: s } = i, n = e[t.scaleID], o = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
  return n ? Hf(n, o, t) : Wf(e, o, t), o;
}
function xa(i, t) {
  const e = cn(i, t);
  return e.initProperties = Pe(i, e, t), e.elements = [{
    type: "label",
    optionScope: "label",
    properties: jf(i, e, t),
    initProperties: e.initProperties
  }], e;
}
function Ff(i, t) {
  const e = ya(i, t), s = t.radius * 2;
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
  const e = ba(i, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function Hf(i, t, e) {
  const s = De(i, e.value, NaN), n = De(i, e.endValue, s);
  i.isHorizontal() ? (t.x = s, t.x2 = n) : (t.y = s, t.y2 = n);
}
function Wf(i, t, e) {
  for (const s of Object.keys(Fo)) {
    const n = i[pe(i, e, s)];
    if (n) {
      const { min: o, max: r, start: a, end: l, startProp: c, endProp: d } = Fo[s], u = ba(n, { min: e[o], max: e[r], start: n[a], end: n[l] });
      t[c] = u.start, t[d] = u.end;
    }
  }
}
function zf({ properties: i, options: t }, e, s, n) {
  const { x: o, x2: r, width: a } = i;
  return va({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.x,
    padding: { start: n.left, end: n.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function Gf({ properties: i, options: t }, e, s, n) {
  const { y: o, y2: r, height: a } = i;
  return va({ start: o, end: r, borderWidth: t.borderWidth }, {
    position: s.y,
    padding: { start: n.top, end: n.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function va(i, t) {
  const { start: e, end: s, borderWidth: n } = i, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = s - n - e - r - a - t.size;
  return e + n / 2 + l + an(c, o);
}
function jf(i, t, e) {
  const s = e.label;
  s.backgroundColor = "transparent", s.callout.display = !1;
  const n = ln(s.position), o = bt(s.padding), r = es(i.ctx, s), a = zf({ properties: t, options: e }, r, n, o), l = Gf({ properties: t, options: e }, r, n, o), c = r.width + o.width, d = r.height + o.height;
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
const Ms = ["enter", "leave"], dn = Ms.concat("click");
function Uf(i, t, e) {
  t.listened = ha(e, dn, t.listeners), t.moveListened = !1, Ms.forEach((s) => {
    Ot(e[s]) && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((s) => {
    !t.listened && Ot(s.click) && (t.listened = !0), t.moveListened || Ms.forEach((n) => {
      Ot(s[n]) && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function Xf(i, t, e) {
  if (i.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return Yf(i, t, e);
      case "click":
        return $f(i, t, e);
    }
}
function Yf(i, t, e) {
  if (!i.moveListened)
    return;
  let s;
  t.type === "mousemove" ? s = rn(i.visibleElements, t, e.interaction) : s = [];
  const n = i.hovered;
  i.hovered = s;
  const o = { state: i, event: t };
  let r = Wo(o, "leave", n, s);
  return Wo(o, "enter", s, n) || r;
}
function Wo({ state: i, event: t }, e, s, n) {
  let o;
  for (const r of s)
    n.indexOf(r) < 0 && (o = Sa(r.options[e] || i.listeners[e], r, t) || o);
  return o;
}
function $f(i, t, e) {
  const s = i.listeners, n = rn(i.visibleElements, t, e.interaction);
  let o;
  for (const r of n)
    o = Sa(r.options.click || s.click, r, t) || o;
  return o;
}
function Sa(i, t, e) {
  return st(i, [t.$context, e]) === !0;
}
const zi = ["afterDraw", "beforeDraw"];
function Zf(i, t, e) {
  const s = t.visibleElements;
  t.hooked = ha(e, zi, t.hooks), t.hooked || s.forEach((n) => {
    t.hooked || zi.forEach((o) => {
      Ot(n.options[o]) && (t.hooked = !0);
    });
  });
}
function zo(i, t, e) {
  if (i.hooked) {
    const s = t.options[e] || i.hooks[e];
    return st(s, [t.$context]);
  }
}
function Kf(i, t, e) {
  const s = eg(i.scales, t, e);
  let n = Go(t, s, "min", "suggestedMin");
  n = Go(t, s, "max", "suggestedMax") || n, n && Ot(t.handleTickRangeOptions) && t.handleTickRangeOptions();
}
function qf(i, t) {
  for (const e of i)
    Qf(e, t);
}
function Go(i, t, e, s) {
  if (mt(t[e]) && !Jf(i.options, e, s)) {
    const n = i[e] !== t[e];
    return i[e] = t[e], n;
  }
}
function Jf(i, t, e) {
  return Rt(i[t]) || Rt(i[e]);
}
function Qf(i, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const s = pe(t, i, e);
    s && !t[s] && tg(i, e) && console.warn(`No scale found with id '${s}' for annotation '${i.id}'`);
  }
}
function tg(i, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const s of ["Min", "Max", "Value"])
    if (Rt(i[e + s]))
      return !0;
  return !1;
}
function eg(i, t, e) {
  const s = t.axis, n = t.id, o = s + "ScaleID", r = {
    min: j(t.min, Number.NEGATIVE_INFINITY),
    max: j(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === n ? jo(a, t, ["value", "endValue"], r) : pe(i, a, o) === n && jo(a, t, [s + "Min", s + "Max", s + "Value"], r);
  return r;
}
function jo(i, t, e, s) {
  for (const n of e) {
    const o = i[n];
    if (Rt(o)) {
      const r = t.parse(o);
      s.min = Math.min(s.min, r), s.max = Math.max(s.max, r);
    }
  }
}
class Ve extends Et {
  inRange(t, e, s, n) {
    const { x: o, y: r } = me({ x: t, y: e }, this.getCenterPoint(n), pt(-this.options.rotation));
    return sa({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], n), s, this.options);
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    t.save(), ts(t, this.getCenterPoint(), this.options.rotation), ga(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return xa(t, e);
  }
}
Ve.id = "boxAnnotation";
Ve.defaults = {
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
Ve.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
Ve.descriptors = {
  label: {
    _fallback: !0
  }
};
class is extends Et {
  inRange(t, e, s, n) {
    return na(
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
    !e.display || !e.content || (ag(t, this), t.save(), ts(t, this.getCenterPoint(), this.rotation), pa(t, this, e, this._fitRatio), t.restore());
  }
  resolveElementProperties(t, e) {
    const s = ig(t, e);
    if (!s)
      return {};
    const { controllerMeta: n, point: o, radius: r } = ng(t, e, s);
    let a = es(t.ctx, e);
    const l = og(a, r);
    ca(e, l) && (a = { width: a.width * l, height: a.height * l });
    const { position: c, xAdjust: d, yAdjust: u } = e, h = la(o, a, { borderWidth: 0, position: c, xAdjust: d, yAdjust: u });
    return {
      initProperties: Pe(t, h, e),
      ...h,
      ...n,
      rotation: e.rotation,
      _fitRatio: l
    };
  }
}
is.id = "doughnutLabelAnnotation";
is.defaults = {
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
is.defaultRoutes = {};
function ig(i, t) {
  return i.getSortedVisibleDatasetMetas().reduce(function(e, s) {
    const n = s.controller;
    return n instanceof nn && sg(i, t, s.data) && (!e || n.innerRadius < e.controller.innerRadius) && n.options.circumference >= 90 ? s : e;
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
  const { left: s, top: n, right: o, bottom: r } = i, { innerRadius: a, offsetX: l, offsetY: c } = e.controller, d = (s + o) / 2 + l, u = (n + r) / 2 + c, h = {
    left: Math.max(d - a, s),
    right: Math.min(d + a, o),
    top: Math.max(u - a, n),
    bottom: Math.min(u + a, r)
  }, f = {
    x: (h.left + h.right) / 2,
    y: (h.top + h.bottom) / 2
  }, g = t.spacing + t.borderWidth / 2, p = a - g, b = f.y > u, _ = b ? n + g : r - g, v = rg(_, d, u, p);
  return {
    controllerMeta: {
      _centerX: d,
      _centerY: u,
      _radius: p,
      _counterclockwise: b,
      ...v
    },
    point: f,
    radius: Math.min(a, Math.min(h.right - h.left, h.bottom - h.top) / 2)
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
      _endAngle: rt
    };
  const c = (-r - Math.sqrt(l)) / 2, d = (-r + Math.sqrt(l)) / 2;
  return {
    _startAngle: Vi({ x: t, y: e }, { x: c, y: i }).angle,
    _endAngle: Vi({ x: t, y: e }, { x: d, y: i }).angle
  };
}
function ag(i, t) {
  const { _centerX: e, _centerY: s, _radius: n, _startAngle: o, _endAngle: r, _counterclockwise: a, options: l } = t;
  i.save();
  const c = Xt(i, l);
  i.fillStyle = l.backgroundColor, i.beginPath(), i.arc(e, s, n, o, r, a), i.closePath(), i.fill(), c && i.stroke(), i.restore();
}
class ci extends Et {
  inRange(t, e, s, n) {
    return na(
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
    const e = this.options, s = !Rt(this._visible) || this._visible;
    !e.display || !e.content || !s || (t.save(), ts(t, this.getCenterPoint(), this.rotation), Rf(t, this), ga(t, this, e), pa(t, lg(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let s;
    if (ua(e))
      s = ya(t, e);
    else {
      const { centerX: a, centerY: l } = cn(t, e);
      s = { x: a, y: l };
    }
    const n = bt(e.padding), o = es(t.ctx, e), r = la(s, o, e, n);
    return {
      initProperties: Pe(t, r, e),
      pointX: s.x,
      pointY: s.y,
      ...r,
      rotation: e.rotation
    };
  }
}
ci.id = "labelAnnotation";
ci.defaults = {
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
ci.defaultRoutes = {
  borderColor: "color"
};
function lg({ x: i, y: t, width: e, height: s, options: n }) {
  const o = n.borderWidth / 2, r = bt(n.padding);
  return {
    x: i + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - n.borderWidth,
    height: s - r.top - r.bottom - n.borderWidth
  };
}
const un = (i, t, e) => ({ x: i.x + e * (t.x - i.x), y: i.y + e * (t.y - i.y) }), Ps = (i, t, e) => un(t, e, Math.abs((i - t.y) / (e.y - t.y))).x, Uo = (i, t, e) => un(t, e, Math.abs((i - t.x) / (e.x - t.x))).y, Ze = (i) => i * i, cg = (i, t, { x: e, y: s, x2: n, y2: o }, r) => r === "y" ? { start: Math.min(s, o), end: Math.max(s, o), value: t } : { start: Math.min(e, n), end: Math.max(e, n), value: i }, Xo = (i, t, e, s) => (1 - s) * (1 - s) * i + 2 * (1 - s) * s * t + s * s * e, Ns = (i, t, e, s) => ({ x: Xo(i.x, t.x, e.x, s), y: Xo(i.y, t.y, e.y, s) }), Yo = (i, t, e, s) => 2 * (1 - s) * (t - i) + 2 * s * (e - t), $o = (i, t, e, s) => -Math.atan2(Yo(i.x, t.x, e.x, s), Yo(i.y, t.y, e.y, s)) + 0.5 * $;
class di extends Et {
  inRange(t, e, s, n) {
    const o = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y") {
      const r = { mouseX: t, mouseY: e }, { path: a, ctx: l } = this;
      if (a) {
        Xt(l, this.options), l.lineWidth += this.options.hitTolerance;
        const { chart: d } = this.$context, u = t * d.currentDevicePixelRatio, h = e * d.currentDevicePixelRatio, f = l.isPointInStroke(a, u, h) || Vs(this, r, n);
        return l.restore(), f;
      }
      const c = Ze(o);
      return fg(this, r, c, n) || Vs(this, r, n);
    }
    return dg(this, { mouseX: t, mouseY: e }, s, { hitSize: o, useFinalPosition: n });
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const { x: e, y: s, x2: n, y2: o, cp: r, options: a } = this;
    if (t.save(), !Xt(t, a))
      return t.restore();
    Ne(t, a);
    const l = Math.sqrt(Math.pow(n - e, 2) + Math.pow(o - s, 2));
    if (a.curve && r)
      return vg(t, this, r, l), t.restore();
    const { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = Ta(this), f = Math.atan2(o - s, n - e);
    t.translate(e, s), t.rotate(f), t.beginPath(), t.moveTo(0 + u, 0), t.lineTo(l - h, 0), t.shadowColor = a.borderShadowColor, t.stroke(), Bs(t, 0, u, c), Bs(t, l, -h, d), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const s = Bf(t, e), { x: n, y: o, x2: r, y2: a } = s, l = ug(s, t.chartArea), c = l ? hg({ x: n, y: o }, { x: r, y: a }, t.chartArea) : { x: n, y: o, x2: r, y2: a, width: Math.abs(r - n), height: Math.abs(a - o) };
    if (c.centerX = (r + n) / 2, c.centerY = (a + o) / 2, c.initProperties = Pe(t, c, e), e.curve) {
      const u = { x: c.x, y: c.y }, h = { x: c.x2, y: c.y2 };
      c.cp = xg(c, e, Ce(u, h));
    }
    const d = gg(t, c, e.label);
    return d._visible = l, c.elements = [{
      type: "label",
      optionScope: "label",
      properties: d,
      initProperties: c.initProperties
    }], c;
  }
}
di.id = "lineAnnotation";
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
di.defaults = {
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
    callout: Object.assign({}, ci.defaults.callout),
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
di.descriptors = {
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
di.defaultRoutes = {
  borderColor: "color"
};
function dg(i, { mouseX: t, mouseY: e }, s, { hitSize: n, useFinalPosition: o }) {
  const r = cg(t, e, i.getProps(["x", "y", "x2", "y2"], o), s);
  return ia(r, n) || Vs(i, { mouseX: t, mouseY: e }, o, s);
}
function ug({ x: i, y: t, x2: e, y2: s }, { top: n, right: o, bottom: r, left: a }) {
  return !(i < a && e < a || i > o && e > o || t < n && s < n || t > r && s > r);
}
function Ko({ x: i, y: t }, e, { top: s, right: n, bottom: o, left: r }) {
  return i < r && (t = Uo(r, { x: i, y: t }, e), i = r), i > n && (t = Uo(n, { x: i, y: t }, e), i = n), t < s && (i = Ps(s, { x: i, y: t }, e), t = s), t > o && (i = Ps(o, { x: i, y: t }, e), t = o), { x: i, y: t };
}
function hg(i, t, e) {
  const { x: s, y: n } = Ko(i, t, e), { x: o, y: r } = Ko(t, i, e);
  return { x: s, y: n, x2: o, y2: r, width: Math.abs(o - s), height: Math.abs(r - n) };
}
function fg(i, { mouseX: t, mouseY: e }, s = ce, n) {
  const { x: o, y: r, x2: a, y2: l } = i.getProps(["x", "y", "x2", "y2"], n), c = a - o, d = l - r, u = Ze(c) + Ze(d), h = u === 0 ? -1 : ((t - o) * c + (e - r) * d) / u;
  let f, g;
  return h < 0 ? (f = o, g = r) : h > 1 ? (f = a, g = l) : (f = o + h * c, g = r + h * d), Ze(t - f) + Ze(e - g) <= s;
}
function Vs(i, { mouseX: t, mouseY: e }, s, n) {
  const o = i.label;
  return o.options.display && o.inRange(t, e, n, s);
}
function gg(i, t, e) {
  const s = e.borderWidth, n = bt(e.padding), o = es(i.ctx, e), r = o.width + n.width + s, a = o.height + n.height + s;
  return mg(t, e, { width: r, height: a, padding: n }, i.chartArea);
}
function pg(i) {
  const { x: t, y: e, x2: s, y2: n } = i, o = Math.atan2(n - e, s - t);
  return o > $ / 2 ? o - $ : o < $ / -2 ? o + $ : o;
}
function mg(i, t, e, s) {
  const { width: n, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: i.x, y: i.y }, d = { x: i.x2, y: i.y2 }, u = t.rotation === "auto" ? pg(i) : pt(t.rotation), h = bg(n, o, u), f = yg(i, t, { labelSize: h, padding: r }, s), g = i.cp ? Ns(c, i.cp, d, f) : un(c, d, f), p = { size: h.w, min: s.left, max: s.right, padding: r.left }, b = { size: h.h, min: s.top, max: s.bottom, padding: r.top }, _ = Jo(g.x, p) + a, v = Jo(g.y, b) + l;
  return {
    x: _ - n / 2,
    y: v - o / 2,
    x2: _ + n / 2,
    y2: v + o / 2,
    centerX: _,
    centerY: v,
    pointX: g.x,
    pointY: g.y,
    width: n,
    height: o,
    rotation: Ui(u)
  };
}
function bg(i, t, e) {
  const s = Math.cos(e), n = Math.sin(e);
  return {
    w: Math.abs(i * s) + Math.abs(t * n),
    h: Math.abs(i * n) + Math.abs(t * s)
  };
}
function yg(i, t, e, s) {
  let n;
  const o = _g(i, s);
  return t.position === "start" ? n = qo({ w: i.x2 - i.x, h: i.y2 - i.y }, e, t, o) : t.position === "end" ? n = 1 - qo({ w: i.x - i.x2, h: i.y - i.y2 }, e, t, o) : n = an(1, t.position), n;
}
function qo(i, t, e, s) {
  const { labelSize: n, padding: o } = t, r = i.w * s.dx, a = i.h * s.dy, l = r > 0 && (n.w / 2 + o.left - s.x) / r, c = a > 0 && (n.h / 2 + o.top - s.y) / a;
  return Ji(Math.max(l, c), 0, 0.25);
}
function _g(i, t) {
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
function Ta(i) {
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
  return Math.abs(Ps(0, o, { x: 0, y: n }));
}
function Bs(i, t, e, s) {
  if (!s || !s.display)
    return;
  const { length: n, width: o, fill: r, backgroundColor: a, borderColor: l } = s, c = Math.abs(t - n) + e;
  i.beginPath(), Ne(i, s), Xt(i, s), i.moveTo(c, -o), i.lineTo(t + e, 0), i.lineTo(c, o), r === !0 ? (i.fillStyle = a || l, i.closePath(), i.fill(), i.shadowColor = "transparent") : i.shadowColor = s.borderShadowColor, i.stroke();
}
function xg(i, t, e) {
  const { x: s, y: n, x2: o, y2: r, centerX: a, centerY: l } = i, c = Math.atan2(r - n, o - s), d = ln(t.controlPoint, 0), u = {
    x: a + ie(e, d.x, !1),
    y: l + ie(e, d.y, !1)
  };
  return me(u, { x: a, y: l }, c);
}
function tr(i, { x: t, y: e }, { angle: s, adjust: n }, o) {
  !o || !o.display || (i.save(), i.translate(t, e), i.rotate(s), Bs(i, 0, -n, o), i.restore());
}
function vg(i, t, e, s) {
  const { x: n, y: o, x2: r, y2: a, options: l } = t, { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = Ta(t), f = { x: n, y: o }, g = { x: r, y: a }, p = $o(f, e, g, 0), b = $o(f, e, g, 1) - $, _ = Ns(f, e, g, u / s), v = Ns(f, e, g, 1 - h / s), w = new Path2D();
  i.beginPath(), w.moveTo(_.x, _.y), w.quadraticCurveTo(e.x, e.y, v.x, v.y), i.shadowColor = l.borderShadowColor, i.stroke(w), t.path = w, t.ctx = i, tr(i, _, { angle: p, adjust: u }, c), tr(i, v, { angle: b, adjust: h }, d);
}
class ui extends Et {
  inRange(t, e, s, n) {
    const o = this.options.rotation, r = (this.options.borderWidth + this.options.hitTolerance) / 2;
    if (s !== "x" && s !== "y")
      return Sg({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], n), o, r);
    const { x: a, y: l, x2: c, y2: d } = this.getProps(["x", "y", "x2", "y2"], n), u = s === "y" ? { start: l, end: d } : { start: a, end: c }, h = me({ x: t, y: e }, this.getCenterPoint(n), pt(-o));
    return h[s] >= u.start - r - ce && h[s] <= u.end + r + ce;
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const { width: e, height: s, centerX: n, centerY: o, options: r } = this;
    t.save(), ts(t, this.getCenterPoint(), r.rotation), Ne(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Xt(t, r);
    t.ellipse(n, o, s / 2, e / 2, $ / 2, 0, 2 * $), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return xa(t, e);
  }
}
ui.id = "ellipseAnnotation";
ui.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  hitTolerance: 0,
  init: void 0,
  label: Object.assign({}, Ve.defaults.label),
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
ui.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
ui.descriptors = {
  label: {
    _fallback: !0
  }
};
function Sg(i, t, e, s) {
  const { width: n, height: o, centerX: r, centerY: a } = t, l = n / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const d = pt(e || 0), u = Math.cos(d), h = Math.sin(d), f = Math.pow(u * (i.x - r) + h * (i.y - a), 2), g = Math.pow(h * (i.x - r) - u * (i.y - a), 2);
  return f / Math.pow(l + s, 2) + g / Math.pow(c + s, 2) <= 1.0001;
}
class ss extends Et {
  inRange(t, e, s, n) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], n), d = (this.options.borderWidth + this.options.hitTolerance) / 2;
    return s !== "x" && s !== "y" ? mf({ x: t, y: e }, this.getCenterPoint(n), c / 2, d) : ia(s === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t }, d);
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const e = this.options, s = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, Ne(t, e);
    const n = Xt(t, e);
    wf(t, this, this.centerX, this.centerY), n && !Qi(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = s;
  }
  resolveElementProperties(t, e) {
    const s = _a(t, e);
    return s.initProperties = Pe(t, s, e), s;
  }
}
ss.id = "pointAnnotation";
ss.defaults = {
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
ss.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class ns extends Et {
  inRange(t, e, s, n) {
    if (s !== "x" && s !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && wg(this.elements, t, e, n);
    const o = me({ x: t, y: e }, this.getCenterPoint(n), pt(-this.options.rotation)), r = this.elements.map((c) => s === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[s] >= a && o[s] <= l;
  }
  getCenterPoint(t) {
    return be(this, t);
  }
  draw(t) {
    const { elements: e, options: s } = this;
    t.save(), t.beginPath(), t.fillStyle = s.backgroundColor, Ne(t, s);
    const n = Xt(t, s);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), n && (t.shadowColor = s.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const s = _a(t, e), { sides: n, rotation: o } = e, r = [], a = 2 * $ / n;
    let l = o * Us;
    for (let c = 0; c < n; c++, l += a) {
      const d = Tg(s, e, l);
      d.initProperties = Pe(t, s, e), r.push(d);
    }
    return s.elements = r, s;
  }
}
ns.id = "polygonAnnotation";
ns.defaults = {
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
ns.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
function Tg({ centerX: i, centerY: t }, { radius: e, borderWidth: s, hitTolerance: n }, o) {
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
const te = {
  box: Ve,
  doughnutLabel: is,
  ellipse: ui,
  label: ci,
  line: di,
  point: ss,
  polygon: ns
};
Object.keys(te).forEach((i) => {
  ft.describe(`elements.${te[i].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Eg = {
  update: Object.assign
}, Ag = dn.concat(zi), er = (i, t) => Z(t) ? Hs(i, t) : i, Fs = (i) => i === "color" || i === "font";
function hn(i = "line") {
  return te[i] ? i : (console.warn(`Unknown annotation type: '${i}', defaulting to 'line'`), "line");
}
function Cg(i, t, e, s) {
  const n = Og(i, e.animations, s), o = t.annotations, r = Lg(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = wa(r, a, l.type), d = l.setContext(Dg(i, c, r, l)), u = c.resolveElementProperties(i, d);
    u.skip = Ig(u), "elements" in u && (Rg(c, u.elements, d, n), delete u.elements), Rt(c.x) || Object.assign(c, u), Object.assign(c, u.initProperties), u.options = Ea(d), n.update(c, u);
  }
}
function Ig(i) {
  return isNaN(i.x) || isNaN(i.y);
}
function Og(i, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? Eg : new sn(i, t);
}
function Rg(i, t, e, s) {
  const n = i.elements || (i.elements = []);
  n.length = t.length;
  for (let o = 0; o < t.length; o++) {
    const r = t[o], a = r.properties, l = wa(n, o, r.type, r.initProperties), c = e[r.optionScope].override(r);
    a.options = Ea(c), s.update(l, a);
  }
}
function wa(i, t, e, s) {
  const n = te[hn(e)];
  let o = i[t];
  return (!o || !(o instanceof n)) && (o = i[t] = new n(), Object.assign(o, s)), o;
}
function Ea(i) {
  const t = te[hn(i.type)], e = {};
  e.id = i.id, e.type = i.type, e.drawTime = i.drawTime, Object.assign(
    e,
    Hs(i, t.defaults),
    Hs(i, t.defaultRoutes)
  );
  for (const s of Ag)
    e[s] = i[s];
  return e;
}
function Hs(i, t) {
  const e = {};
  for (const s of Object.keys(t)) {
    const n = t[s], o = i[s];
    Fs(s) && it(o) ? e[s] = o.map((r) => er(r, n)) : e[s] = er(o, n);
  }
  return e;
}
function Dg(i, t, e, s) {
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
var kg = "3.1.0";
const $t = /* @__PURE__ */ new Map(), ir = (i) => i.type !== "doughnutLabel", Mg = dn.concat(zi);
var Pg = {
  id: "annotation",
  version: kg,
  beforeRegister() {
    bf("chart.js", "4.0", ue.version);
  },
  afterRegister() {
    ue.register(te);
  },
  afterUnregister() {
    ue.unregister(te);
  },
  beforeInit(i) {
    $t.set(i, {
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
    const s = $t.get(i), n = s.annotations = [];
    let o = e.annotations;
    Z(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      Z(a) && (a.id = r, n.push(a));
    }) : it(o) && n.push(...o), qf(n.filter(ir), i.scales);
  },
  afterDataLimits(i, t) {
    const e = $t.get(i);
    Kf(i, t.scale, e.annotations.filter(ir).filter((s) => s.display && s.adjustScaleRange));
  },
  afterUpdate(i, t, e) {
    const s = $t.get(i);
    Uf(i, s, e), Cg(i, s, e, t.mode), s.visibleElements = s.elements.filter((n) => !n.skip && n.options.display), Zf(i, s, e);
  },
  beforeDatasetsDraw(i, t, e) {
    Ue(i, "beforeDatasetsDraw", e.clip);
  },
  afterDatasetsDraw(i, t, e) {
    Ue(i, "afterDatasetsDraw", e.clip);
  },
  beforeDatasetDraw(i, t, e) {
    Ue(i, t.index, e.clip);
  },
  beforeDraw(i, t, e) {
    Ue(i, "beforeDraw", e.clip);
  },
  afterDraw(i, t, e) {
    Ue(i, "afterDraw", e.clip);
  },
  beforeEvent(i, t, e) {
    const s = $t.get(i);
    Xf(s, t.event, e) && (t.changed = !0);
  },
  afterDestroy(i) {
    $t.delete(i);
  },
  getAnnotations(i) {
    const t = $t.get(i);
    return t ? t.elements : [];
  },
  // only for testing
  _getAnnotationElementsAtEventForMode(i, t, e) {
    return rn(i, t, e);
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
      _fallback: (i, t) => `elements.${te[hn(t.type)].id}`
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
function Ue(i, t, e) {
  const { ctx: s, chartArea: n } = i, o = $t.get(i);
  e && ai(s, n);
  const r = Ng(o.visibleElements, t).sort((a, l) => a.element.options.z - l.element.options.z);
  for (const a of r)
    Vg(s, n, o, a);
  e && li(s);
}
function Ng(i, t) {
  const e = [];
  for (const s of i)
    if (s.options.drawTime === t && e.push({ element: s, main: !0 }), s.elements && s.elements.length)
      for (const n of s.elements)
        n.options.display && n.options.drawTime === t && e.push({ element: n });
  return e;
}
function Vg(i, t, e, s) {
  const n = s.element;
  s.main ? (zo(e, n, "beforeDraw"), n.draw(i, t), zo(e, n, "afterDraw")) : n.draw(i, t);
}
class D extends lr {
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
        return this._seriesIndex !== new A();
      case D.LABEL:
        return this._label !== void 0;
      case D.CHART_TYPE:
        return this._chartType !== new A();
      case D.X_AXIS_ID:
        return this._xAxisId !== new A();
      case D.Y_AXIS_ID:
        return this._yAxisId !== new A();
      case D.Y_AXIS_TITLE:
        return this._yAxisTitle !== new A();
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
        this._seriesIndex = new A();
        return;
      case D.LABEL:
        this._label = void 0;
        return;
      case D.CHART_TYPE:
        this._chartType = new A();
        return;
      case D.X_AXIS_ID:
        this._xAxisId = new A();
        return;
      case D.Y_AXIS_ID:
        this._yAxisId = new A();
        return;
      case D.Y_AXIS_TITLE:
        this._yAxisTitle = new A();
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
class fn extends za {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new fn()), this._instance;
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
class R extends Ga {
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
    this.setEFactoryInstance(fn.eINSTANCE);
    const t = new mn();
    t.setName("SeriesSettings"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), R.Literals.SERIES_SETTINGS = t;
    const e = new J();
    e.setContainment(!1), e.setName("seriesIndex"), e.setLowerBound(0), e.setUpperBound(1), t.getEStructuralFeatures().push(e), R.Literals.SERIES_SETTINGS__SERIES_INDEX = e;
    const s = new J();
    s.setContainment(!1), s.setName("label"), s.setLowerBound(0), s.setUpperBound(1), t.getEStructuralFeatures().push(s), R.Literals.SERIES_SETTINGS__LABEL = s;
    const n = new J();
    n.setContainment(!1), n.setName("chartType"), n.setLowerBound(0), n.setUpperBound(1), t.getEStructuralFeatures().push(n), R.Literals.SERIES_SETTINGS__CHART_TYPE = n;
    const o = new J();
    o.setContainment(!1), o.setName("xAxisId"), o.setLowerBound(0), o.setUpperBound(1), t.getEStructuralFeatures().push(o), R.Literals.SERIES_SETTINGS__X_AXIS_ID = o;
    const r = new J();
    r.setContainment(!1), r.setName("yAxisId"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), R.Literals.SERIES_SETTINGS__Y_AXIS_ID = r;
    const a = new J();
    a.setContainment(!1), a.setName("yAxisTitle"), a.setLowerBound(0), a.setUpperBound(1), t.getEStructuralFeatures().push(a), R.Literals.SERIES_SETTINGS__Y_AXIS_TITLE = a;
    const l = new J();
    l.setContainment(!1), l.setName("borderColor"), l.setLowerBound(0), l.setUpperBound(1), t.getEStructuralFeatures().push(l), R.Literals.SERIES_SETTINGS__BORDER_COLOR = l;
    const c = new J();
    c.setContainment(!1), c.setName("backgroundColor"), c.setLowerBound(0), c.setUpperBound(1), t.getEStructuralFeatures().push(c), R.Literals.SERIES_SETTINGS__BACKGROUND_COLOR = c;
    const d = new J();
    d.setContainment(!1), d.setName("borderWidth"), d.setLowerBound(0), d.setUpperBound(1), t.getEStructuralFeatures().push(d), R.Literals.SERIES_SETTINGS__BORDER_WIDTH = d;
    const u = new J();
    u.setContainment(!1), u.setName("borderDash"), u.setLowerBound(0), u.setUpperBound(1), t.getEStructuralFeatures().push(u), R.Literals.SERIES_SETTINGS__BORDER_DASH = u;
    const h = new J();
    h.setContainment(!1), h.setName("fill"), h.setLowerBound(0), h.setUpperBound(1), t.getEStructuralFeatures().push(h), R.Literals.SERIES_SETTINGS__FILL = h;
    const f = new J();
    f.setContainment(!1), f.setName("showPoints"), f.setLowerBound(0), f.setUpperBound(1), t.getEStructuralFeatures().push(f), R.Literals.SERIES_SETTINGS__SHOW_POINTS = f;
    const g = new J();
    g.setContainment(!1), g.setName("pointColor"), g.setLowerBound(0), g.setUpperBound(1), t.getEStructuralFeatures().push(g), R.Literals.SERIES_SETTINGS__POINT_COLOR = g;
    const p = new J();
    p.setContainment(!1), p.setName("pointSize"), p.setLowerBound(0), p.setUpperBound(1), t.getEStructuralFeatures().push(p), R.Literals.SERIES_SETTINGS__POINT_SIZE = p;
    const b = new mn();
    b.setName("ChartSettings"), b.setAbstract(!1), b.setInterface(!1), this.getEClassifiers().push(b), b.setEPackage(this), R.Literals.CHART_SETTINGS = b;
    const _ = new J();
    _.setContainment(!0), _.setName("seriesSettings"), _.setLowerBound(0), _.setUpperBound(-1), b.getEStructuralFeatures().push(_), R.Literals.CHART_SETTINGS__SERIES_SETTINGS = _;
    const v = new J();
    v.setContainment(!1), v.setName("chartType"), v.setLowerBound(0), v.setUpperBound(1), b.getEStructuralFeatures().push(v), R.Literals.CHART_SETTINGS__CHART_TYPE = v;
    const w = new J();
    w.setContainment(!1), w.setName("barOrientation"), w.setLowerBound(0), w.setUpperBound(1), b.getEStructuralFeatures().push(w), R.Literals.CHART_SETTINGS__BAR_ORIENTATION = w;
    const C = new J();
    C.setContainment(!1), C.setName("stacked"), C.setLowerBound(0), C.setUpperBound(1), b.getEStructuralFeatures().push(C), R.Literals.CHART_SETTINGS__STACKED = C;
    const S = new J();
    S.setContainment(!1), S.setName("borderColor"), S.setLowerBound(0), S.setUpperBound(1), b.getEStructuralFeatures().push(S), R.Literals.CHART_SETTINGS__BORDER_COLOR = S;
    const k = new J();
    k.setContainment(!1), k.setName("borderWidth"), k.setLowerBound(0), k.setUpperBound(1), b.getEStructuralFeatures().push(k), R.Literals.CHART_SETTINGS__BORDER_WIDTH = k;
    const M = new J();
    M.setContainment(!1), M.setName("borderDash"), M.setLowerBound(0), M.setUpperBound(1), b.getEStructuralFeatures().push(M), R.Literals.CHART_SETTINGS__BORDER_DASH = M;
    const I = new J();
    I.setContainment(!1), I.setName("backgroundColor"), I.setLowerBound(0), I.setUpperBound(1), b.getEStructuralFeatures().push(I), R.Literals.CHART_SETTINGS__BACKGROUND_COLOR = I;
    const F = new J();
    F.setContainment(!1), F.setName("fill"), F.setLowerBound(0), F.setUpperBound(1), b.getEStructuralFeatures().push(F), R.Literals.CHART_SETTINGS__FILL = F;
    const T = new J();
    T.setContainment(!1), T.setName("showPoints"), T.setLowerBound(0), T.setUpperBound(1), b.getEStructuralFeatures().push(T), R.Literals.CHART_SETTINGS__SHOW_POINTS = T;
    const m = new J();
    m.setContainment(!1), m.setName("pointColor"), m.setLowerBound(0), m.setUpperBound(1), b.getEStructuralFeatures().push(m), R.Literals.CHART_SETTINGS__POINT_COLOR = m;
    const O = new J();
    O.setContainment(!1), O.setName("pointSize"), O.setLowerBound(0), O.setUpperBound(1), b.getEStructuralFeatures().push(O), R.Literals.CHART_SETTINGS__POINT_SIZE = O;
    const P = new J();
    P.setContainment(!1), P.setName("showHorizontalGrid"), P.setLowerBound(0), P.setUpperBound(1), b.getEStructuralFeatures().push(P), R.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID = P;
    const G = new J();
    G.setContainment(!1), G.setName("horizontalGridColor"), G.setLowerBound(0), G.setUpperBound(1), b.getEStructuralFeatures().push(G), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR = G;
    const N = new J();
    N.setContainment(!1), N.setName("horizontalGridWidth"), N.setLowerBound(0), N.setUpperBound(1), b.getEStructuralFeatures().push(N), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH = N;
    const B = new J();
    B.setContainment(!1), B.setName("showVerticalGrid"), B.setLowerBound(0), B.setUpperBound(1), b.getEStructuralFeatures().push(B), R.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID = B;
    const X = new J();
    X.setContainment(!1), X.setName("verticalGridColor"), X.setLowerBound(0), X.setUpperBound(1), b.getEStructuralFeatures().push(X), R.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR = X;
    const y = new J();
    y.setContainment(!1), y.setName("verticalGridWidth"), y.setLowerBound(0), y.setUpperBound(1), b.getEStructuralFeatures().push(y), R.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH = y;
    const L = new J();
    L.setContainment(!1), L.setName("xAxisTitle"), L.setLowerBound(0), L.setUpperBound(1), b.getEStructuralFeatures().push(L), R.Literals.CHART_SETTINGS__X_AXIS_TITLE = L;
    const E = new J();
    E.setContainment(!1), E.setName("yAxisTitle"), E.setLowerBound(0), E.setUpperBound(1), b.getEStructuralFeatures().push(E), R.Literals.CHART_SETTINGS__Y_AXIS_TITLE = E;
    const tt = new J();
    tt.setContainment(!1), tt.setName("annotationsEditMode"), tt.setLowerBound(0), tt.setUpperBound(1), b.getEStructuralFeatures().push(tt), R.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE = tt;
    const xt = new gi();
    xt.setName("horizontalLines"), xt.setLowerBound(0), xt.setUpperBound(-1), b.getEStructuralFeatures().push(xt), R.Literals.CHART_SETTINGS__HORIZONTAL_LINES = xt;
    const _t = new gi();
    _t.setName("verticalLines"), _t.setLowerBound(0), _t.setUpperBound(-1), b.getEStructuralFeatures().push(_t), R.Literals.CHART_SETTINGS__VERTICAL_LINES = _t;
    const at = new gi();
    at.setName("horizontalBoxes"), at.setLowerBound(0), at.setUpperBound(-1), b.getEStructuralFeatures().push(at), R.Literals.CHART_SETTINGS__HORIZONTAL_BOXES = at;
    const vt = new gi();
    vt.setName("verticalBoxes"), vt.setLowerBound(0), vt.setUpperBound(-1), b.getEStructuralFeatures().push(vt), R.Literals.CHART_SETTINGS__VERTICAL_BOXES = vt;
    const dt = new J();
    dt.setContainment(!1), dt.setName("dateDisplayFormat"), dt.setLowerBound(0), dt.setUpperBound(1), b.getEStructuralFeatures().push(dt), R.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT = dt, R.Literals.SERIES_SETTINGS__SERIES_INDEX.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__LABEL.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__CHART_TYPE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__X_AXIS_ID.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__Y_AXIS_ID.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__Y_AXIS_TITLE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BORDER_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BACKGROUND_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BORDER_WIDTH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__BORDER_DASH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__FILL.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__SHOW_POINTS.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__POINT_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.SERIES_SETTINGS__POINT_SIZE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SERIES_SETTINGS.setEType(R.Literals.SERIES_SETTINGS), R.Literals.CHART_SETTINGS__CHART_TYPE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BAR_ORIENTATION.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__STACKED.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BORDER_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BORDER_WIDTH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BORDER_DASH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__BACKGROUND_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__FILL.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SHOW_POINTS.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__POINT_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__POINT_SIZE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SHOW_HORIZONTAL_GRID.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__HORIZONTAL_GRID_WIDTH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__SHOW_VERTICAL_GRID.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__VERTICAL_GRID_COLOR.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__VERTICAL_GRID_WIDTH.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__X_AXIS_TITLE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__Y_AXIS_TITLE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__ANNOTATIONS_EDIT_MODE.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), R.Literals.CHART_SETTINGS__DATE_DISPLAY_FORMAT.setEType(Q.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class x extends lr {
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
    return R.Literals.CHART_SETTINGS;
  }
  // Getters and Setters
  get seriesSettings() {
    return this._seriesSettings || (this._seriesSettings = ja(this, this.eClass().getEStructuralFeature("seriesSettings"))), this._seriesSettings;
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
    return this._horizontalLines || (this._horizontalLines = pi(this, this.eClass().getEStructuralFeature("horizontalLines"))), this._horizontalLines;
  }
  get verticalLines() {
    return this._verticalLines || (this._verticalLines = pi(this, this.eClass().getEStructuralFeature("verticalLines"))), this._verticalLines;
  }
  get horizontalBoxes() {
    return this._horizontalBoxes || (this._horizontalBoxes = pi(this, this.eClass().getEStructuralFeature("horizontalBoxes"))), this._horizontalBoxes;
  }
  get verticalBoxes() {
    return this._verticalBoxes || (this._verticalBoxes = pi(this, this.eClass().getEStructuralFeature("verticalBoxes"))), this._verticalBoxes;
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
        return this._chartType !== new A();
      case x.BAR_ORIENTATION:
        return this._barOrientation !== new A();
      case x.STACKED:
        return this._stacked !== new A();
      case x.BORDER_COLOR:
        return this._borderColor !== new A();
      case x.BORDER_WIDTH:
        return this._borderWidth !== new A();
      case x.BORDER_DASH:
        return this._borderDash !== new A();
      case x.BACKGROUND_COLOR:
        return this._backgroundColor !== new A();
      case x.FILL:
        return this._fill !== new A();
      case x.SHOW_POINTS:
        return this._showPoints !== new A();
      case x.POINT_COLOR:
        return this._pointColor !== new A();
      case x.POINT_SIZE:
        return this._pointSize !== new A();
      case x.SHOW_HORIZONTAL_GRID:
        return this._showHorizontalGrid !== new A();
      case x.HORIZONTAL_GRID_COLOR:
        return this._horizontalGridColor !== new A();
      case x.HORIZONTAL_GRID_WIDTH:
        return this._horizontalGridWidth !== new A();
      case x.SHOW_VERTICAL_GRID:
        return this._showVerticalGrid !== new A();
      case x.VERTICAL_GRID_COLOR:
        return this._verticalGridColor !== new A();
      case x.VERTICAL_GRID_WIDTH:
        return this._verticalGridWidth !== new A();
      case x.X_AXIS_TITLE:
        return this._xAxisTitle !== new A();
      case x.Y_AXIS_TITLE:
        return this._yAxisTitle !== new A();
      case x.ANNOTATIONS_EDIT_MODE:
        return this._annotationsEditMode !== new A();
      case x.HORIZONTAL_LINES:
        return this._horizontalLines !== void 0 && !this._horizontalLines.isEmpty();
      case x.VERTICAL_LINES:
        return this._verticalLines !== void 0 && !this._verticalLines.isEmpty();
      case x.HORIZONTAL_BOXES:
        return this._horizontalBoxes !== void 0 && !this._horizontalBoxes.isEmpty();
      case x.VERTICAL_BOXES:
        return this._verticalBoxes !== void 0 && !this._verticalBoxes.isEmpty();
      case x.DATE_DISPLAY_FORMAT:
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
      case x.SERIES_SETTINGS:
        this._seriesSettings && this._seriesSettings.clear();
        return;
      case x.CHART_TYPE:
        this._chartType = new A();
        return;
      case x.BAR_ORIENTATION:
        this._barOrientation = new A();
        return;
      case x.STACKED:
        this._stacked = new A();
        return;
      case x.BORDER_COLOR:
        this._borderColor = new A();
        return;
      case x.BORDER_WIDTH:
        this._borderWidth = new A();
        return;
      case x.BORDER_DASH:
        this._borderDash = new A();
        return;
      case x.BACKGROUND_COLOR:
        this._backgroundColor = new A();
        return;
      case x.FILL:
        this._fill = new A();
        return;
      case x.SHOW_POINTS:
        this._showPoints = new A();
        return;
      case x.POINT_COLOR:
        this._pointColor = new A();
        return;
      case x.POINT_SIZE:
        this._pointSize = new A();
        return;
      case x.SHOW_HORIZONTAL_GRID:
        this._showHorizontalGrid = new A();
        return;
      case x.HORIZONTAL_GRID_COLOR:
        this._horizontalGridColor = new A();
        return;
      case x.HORIZONTAL_GRID_WIDTH:
        this._horizontalGridWidth = new A();
        return;
      case x.SHOW_VERTICAL_GRID:
        this._showVerticalGrid = new A();
        return;
      case x.VERTICAL_GRID_COLOR:
        this._verticalGridColor = new A();
        return;
      case x.VERTICAL_GRID_WIDTH:
        this._verticalGridWidth = new A();
        return;
      case x.X_AXIS_TITLE:
        this._xAxisTitle = new A();
        return;
      case x.Y_AXIS_TITLE:
        this._yAxisTitle = new A();
        return;
      case x.ANNOTATIONS_EDIT_MODE:
        this._annotationsEditMode = new A();
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
        this._dateDisplayFormat = new A();
        return;
      default:
        super.eUnset(t);
    }
  }
}
var Bg = Object.defineProperty, Fg = Object.getOwnPropertyDescriptor, hi = (i, t, e, s) => {
  for (var n = Fg(t, e), o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = r(t, e, n) || n);
  return n && Bg(t, e, n), n;
};
class ye extends Xa {
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
hi([
  oi({ eventType: "chart.refresh" })
], ye.prototype, "refresh");
hi([
  oi({ eventType: "chart.zoomIn" })
], ye.prototype, "zoomIn");
hi([
  oi({ eventType: "chart.zoomOut" })
], ye.prototype, "zoomOut");
hi([
  oi({ eventType: "chart.resetZoom" })
], ye.prototype, "resetZoom");
hi([
  oi({ eventType: "chart.exportAsImage" })
], ye.prototype, "exportAsImage");
const Hg = /* @__PURE__ */ ji({
  __name: "ChartWidget",
  props: /* @__PURE__ */ Pa({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(i, { expose: t }) {
    const { wrapParameters: e } = Fa();
    ue.register(xh, Ih, yh, Xu, Lh, Mh, Zi, Hu, $h, Ru, hh, Pg);
    const s = i, { datasourceId: n, id: o } = Na(s), r = ar(i, "configv"), a = new x(), l = Gt(null), c = ws(Ua.TINY_EMITTER), d = ws(Ca), h = Wa().params.pageid || "", f = Gt({ min: null, max: null }), g = Gt(null);
    class p extends ye {
      refresh() {
        w(n.value, n.value);
      }
      zoomIn() {
        const O = f.value.min ?? 0, P = f.value.max ?? 100, G = P - O, N = (P + O) / 2;
        f.value = { min: N - G * 0.4, max: N + G * 0.4 }, S.value++;
      }
      zoomOut() {
        const O = f.value.min ?? 0, P = f.value.max ?? 100, G = P - O, N = (P + O) / 2;
        f.value = { min: N - G * 0.75, max: N + G * 0.75 }, S.value++;
      }
      resetZoom() {
        f.value = { min: null, max: null }, S.value++;
      }
      exportAsImage(O) {
        if (g.value && g.value.chart) {
          const P = g.value.chart, G = O || "image/png", N = P.toBase64Image(G), B = document.createElement("a");
          B.href = N, B.download = `chart.${G.split("/")[1] || "png"}`, B.click();
        }
      }
    }
    const b = new p();
    t(b), or(() => {
      o?.value && d.unregisterInstance(o.value);
    });
    const _ = () => {
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
    Li(() => {
      if (o?.value && d.registerInstance(o.value, b, "ChartWidget", h), r.value)
        for (const m of Object.keys(a))
          (!(m in r.value) || r.value[m] === void 0) && (r.value[m] = a[m]);
    }), ti(n, (m, O) => {
      w(m, O);
    });
    const { update: w } = Ha(n, "ChartData", l), C = ot(() => {
      if (M().some(
        (G) => G.chartType?.value && G.chartType.value !== r.value?.chartType?.value
      ))
        return xs;
      const O = r.value?.chartType?.value ?? "bar";
      return {
        bar: xs,
        line: af,
        radar: df,
        pie: lf,
        doughnut: rf,
        polarArea: cf
      }[O] || xs;
    }), S = Gt(0);
    ti(() => r.value, (m) => {
      S.value++;
    }, { deep: !0 });
    function k(...m) {
      return m.find((O) => O != null && O !== "");
    }
    function M() {
      const m = r.value?.seriesSettings;
      return m ? typeof m.toArray == "function" ? m.toArray() : Array.isArray(m) ? m : [] : [];
    }
    const I = e({
      chartType: ot(() => r.value?.chartType?.value ?? "bar"),
      borderColor: ot(() => r.value?.borderColor?.value ?? "rgba(75, 192, 192, 1)"),
      backgroundColor: ot(() => r.value?.backgroundColor?.value ?? "rgba(75, 192, 192, 0.2)"),
      borderWidth: ot(() => r.value?.borderWidth?.value ?? 2),
      borderDash: ot(() => r.value?.borderDash?.value ?? []),
      fill: ot(() => r.value?.fill?.value ?? !1),
      showPoints: ot(() => r.value?.showPoints?.value ?? !0),
      pointColor: ot(() => r.value?.pointColor?.value ?? "rgba(75, 192, 192, 1)"),
      pointSize: ot(() => r.value?.pointSize?.value ?? 3),
      barOrientation: ot(() => r.value?.barOrientation?.value ?? "vertical"),
      stacked: ot(() => r.value?.stacked?.value ?? !1),
      showHorizontalGrid: ot(() => r.value?.showHorizontalGrid?.value ?? !0),
      horizontalGridColor: ot(() => r.value?.horizontalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      horizontalGridWidth: ot(() => r.value?.horizontalGridWidth?.value ?? 1),
      showVerticalGrid: ot(() => r.value?.showVerticalGrid?.value ?? !0),
      verticalGridColor: ot(() => r.value?.verticalGridColor?.value ?? "rgba(0, 0, 0, 0.1)"),
      verticalGridWidth: ot(() => r.value?.verticalGridWidth?.value ?? 1),
      dateDisplayFormat: ot(() => r.value?.dateDisplayFormat?.value ?? "dd.MM.yyyy HH:mm"),
      annotationsEditMode: ot(() => r.value?.annotationsEditMode?.value ?? !1)
    });
    console.log(I.backgroundColor.value);
    const F = ot(() => {
      if (!l.value) return null;
      const m = JSON.parse(JSON.stringify(l.value)), O = M(), P = O.length > 0;
      return m.datasets && Array.isArray(m.datasets) && (m.datasets = m.datasets.map((G, N) => {
        const B = O.find((vt) => {
          const dt = vt.seriesIndex?.value;
          return dt != null && dt !== "" && Number(dt) === N;
        }), X = B?.chartType?.value ?? I.chartType?.value ?? "bar", y = B?.xAxisId?.value, L = B?.yAxisId?.value, E = k(
          B?.borderColor?.value,
          r.value?.borderColor?.value,
          G.borderColor
        ), tt = k(
          B?.backgroundColor?.value,
          r.value?.backgroundColor?.value,
          G.backgroundColor
        ), xt = k(
          B?.borderWidth?.value,
          r.value?.borderWidth?.value,
          G.borderWidth
        ), _t = k(
          B?.borderDash?.value,
          r.value?.borderDash?.value,
          G.borderDash
        );
        let at = {
          ...G,
          borderColor: E,
          backgroundColor: tt,
          borderWidth: xt
        };
        if (P && (at.type = X, y && (at.xAxisID = y), L && (at.yAxisID = L), B?.label?.value && (at.label = (B?.label).value)), X === "line") {
          const vt = B?.showPoints?.value ?? r.value?.showPoints?.value ?? !0, dt = B?.fill?.value ?? r.value?.fill?.value ?? !1, V = k(
            B?.pointColor?.value,
            r.value?.pointColor?.value,
            G.pointBackgroundColor
          ), lt = B?.pointSize?.value ?? r.value?.pointSize?.value ?? 3;
          at = {
            ...at,
            borderDash: _t,
            fill: dt ? "origin" : !1,
            // Point settings
            pointRadius: vt ? lt : 0,
            pointBackgroundColor: V,
            pointBorderColor: V,
            pointHoverRadius: vt ? lt + 2 : 0
          };
        } else X === "bar" ? at = {
          ...at,
          borderDash: _t
        } : at = {
          ...at
        };
        return at;
      })), m;
    }), T = ot(() => {
      if (!r.value)
        return {
          responsive: !0
        };
      const m = I.annotationsEditMode.value, O = {};
      r.value.horizontalLines?.forEach((V, lt) => {
        O[`hline_${lt}`] = {
          type: "line",
          yMin: V.value,
          yMax: V.value,
          borderColor: V.color,
          borderWidth: V.width,
          label: V.label ? {
            display: !0,
            content: V.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: m,
          borderDash: m ? [5, 5] : void 0,
          enter({ element: Y }) {
            m && (Y.options.borderWidth = V.width + 1);
          },
          leave({ element: Y }) {
            m && (Y.options.borderWidth = V.width);
          },
          drag({ element: Y }) {
            m && r.value.horizontalLines && (r.value.horizontalLines[lt].value = Y.y);
          }
        };
      }), r.value.verticalLines?.forEach((V, lt) => {
        O[`vline_${lt}`] = {
          type: "line",
          xMin: V.value,
          xMax: V.value,
          borderColor: V.color,
          borderWidth: V.width,
          label: V.label ? {
            display: !0,
            content: V.label,
            position: "end"
          } : void 0,
          // Draggable options
          draggable: m,
          borderDash: m ? [5, 5] : void 0,
          enter({ element: Y }) {
            m && (Y.options.borderWidth = V.width + 1);
          },
          leave({ element: Y }) {
            m && (Y.options.borderWidth = V.width);
          },
          drag({ element: Y }) {
            m && r.value.verticalLines && (r.value.verticalLines[lt].value = Y.x);
          }
        };
      }), r.value.horizontalBoxes?.forEach((V, lt) => {
        O[`hbox_${lt}`] = {
          type: "box",
          yMin: V.yMin,
          yMax: V.yMax,
          backgroundColor: V.color,
          borderWidth: m ? 2 : 0,
          borderColor: m ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: m ? [5, 5] : void 0,
          label: V.label ? {
            display: !0,
            content: V.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: m,
          enter({ element: Y }) {
            m && (Y.options.borderWidth = 3);
          },
          leave({ element: Y }) {
            m && (Y.options.borderWidth = 2);
          },
          drag({ element: Y }) {
            if (m && r.value.horizontalBoxes) {
              const At = V.yMax - V.yMin;
              r.value.horizontalBoxes[lt].yMin = Y.y - At / 2, r.value.horizontalBoxes[lt].yMax = Y.y + At / 2;
            }
          }
        };
      }), r.value.verticalBoxes?.forEach((V, lt) => {
        O[`vbox_${lt}`] = {
          type: "box",
          xMin: V.xMin,
          xMax: V.xMax,
          backgroundColor: V.color,
          borderWidth: m ? 2 : 0,
          borderColor: m ? "rgba(0,0,0,0.5)" : void 0,
          borderDash: m ? [5, 5] : void 0,
          label: V.label ? {
            display: !0,
            content: V.label,
            position: "center"
          } : void 0,
          // Draggable options
          draggable: m,
          enter({ element: Y }) {
            m && (Y.options.borderWidth = 3);
          },
          leave({ element: Y }) {
            m && (Y.options.borderWidth = 2);
          },
          drag({ element: Y }) {
            if (m && r.value.verticalBoxes) {
              const At = V.xMax - V.xMin;
              r.value.verticalBoxes[lt].xMin = Y.x - At / 2, r.value.verticalBoxes[lt].xMax = Y.x + At / 2;
            }
          }
        };
      });
      const P = (V) => {
        if (typeof V != "string") return !1;
        const lt = /^\d{4}-\d{2}-\d{2}(T|\s)/, Y = /^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}/;
        return lt.test(V) || Y.test(V);
      }, G = (V, lt) => {
        if (!V || !P(V)) return V;
        const Y = new Date(V);
        if (isNaN(Y.getTime())) return V;
        const At = (_e) => _e.toString().padStart(2, "0"), fi = {
          yyyy: Y.getFullYear().toString(),
          yy: Y.getFullYear().toString().slice(-2),
          MM: At(Y.getMonth() + 1),
          M: (Y.getMonth() + 1).toString(),
          dd: At(Y.getDate()),
          d: Y.getDate().toString(),
          HH: At(Y.getHours()),
          H: Y.getHours().toString(),
          mm: At(Y.getMinutes()),
          m: Y.getMinutes().toString(),
          ss: At(Y.getSeconds()),
          s: Y.getSeconds().toString()
        };
        let os = lt;
        return Object.keys(fi).sort((_e, Aa) => Aa.length - _e.length).forEach((_e) => {
          os = os.replace(new RegExp(_e, "g"), fi[_e]);
        }), os;
      }, N = I.dateDisplayFormat.value, B = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), y = r.value?.seriesSettings && r.value.seriesSettings.length > 0, L = {};
      y && (B.add("x"), X.add("y"), r.value.seriesSettings?.forEach((V) => {
        V?.xAxisId?.value && B.add(V.xAxisId.value), V.yAxisId?.value && (X.add(V.yAxisId.value), V.yAxisTitle?.value && (L[V.yAxisId.value] = V.yAxisTitle.value));
      }));
      const E = I.stacked.value === !0 || I.stacked.value === "true", tt = r.value.xAxisTitle?.value ?? "", xt = r.value.yAxisTitle?.value ?? "", _t = {
        y: {
          stacked: E,
          title: {
            display: !!xt,
            text: xt
          },
          grid: {
            display: I.showHorizontalGrid.value,
            color: I.horizontalGridColor.value,
            lineWidth: I.horizontalGridWidth.value
          }
        },
        x: {
          stacked: E,
          title: {
            display: !!tt,
            text: tt
          },
          grid: {
            display: I.showVerticalGrid.value,
            color: I.verticalGridColor.value,
            lineWidth: I.verticalGridWidth.value
          },
          ticks: {
            callback: function(V, lt, Y) {
              const At = this.getLabelForValue(V);
              return G(At, N);
            }
          }
        }
      };
      B.size > 1 && B.forEach((V) => {
        V !== "x" && (_t[V] = {
          type: "category",
          // Explicitly set the axis type
          grid: {
            display: I.showVerticalGrid.value,
            color: I.verticalGridColor.value,
            lineWidth: I.verticalGridWidth.value
          },
          ticks: {
            callback: function(lt, Y, At) {
              const fi = this.getLabelForValue(lt);
              return G(fi, N);
            }
          },
          // Position secondary axes at the top
          position: "top"
        });
      }), X.size > 1 && X.forEach((V) => {
        if (V !== "y") {
          const lt = L[V] ?? "";
          _t[V] = {
            type: "linear",
            // Explicitly set the axis type
            title: {
              display: !!lt,
              text: lt
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
      const dt = {
        responsive: !0,
        maintainAspectRatio: !0,
        indexAxis: I.barOrientation.value === "horizontal" ? "y" : "x",
        scales: _t,
        plugins: {
          legend: {
            labels: {
              usePointStyle: !0,
              pointStyle: "circle"
            }
          },
          annotation: {
            annotations: O
          }
        }
      };
      return console.log("Chart options:", dt), dt;
    });
    return (m, O) => (H(), yt("div", {
      class: "w-full h-full",
      onClick: _,
      onContextmenu: Va(v, ["prevent"])
    }, [
      F.value && T.value ? (H(), K(Ba(C.value), {
        key: S.value,
        id: "my-chart-id",
        ref_key: "chartRef",
        ref: g,
        options: T.value,
        data: F.value
      }, null, 8, ["options", "data"])) : U("", !0)
    ], 32));
  }
}), Wg = { class: "settings-container" }, zg = { class: "settings-block" }, Gg = { style: { display: "flex", "justify-content": "space-between", "align-items": "center", "margin-bottom": "12px" } }, jg = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "12px" } }, Ug = { style: { "font-size": "15px" } }, Xg = { key: 11 }, Yg = {
  key: 0,
  style: { padding: "20px", "text-align": "center", color: "var(--va-text-secondary)" }
}, $g = { class: "settings-container" }, Zg = { class: "settings-block" }, Kg = {
  key: 0,
  class: "settings-block"
}, qg = {
  key: 1,
  class: "settings-block"
}, Jg = {
  key: 2,
  class: "settings-block"
}, Qg = { class: "settings-container" }, tp = { class: "settings-block" }, ep = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, ip = { class: "settings-container" }, sp = { class: "settings-block" }, np = { class: "settings-container" }, op = { class: "settings-block" }, rp = { class: "settings-container" }, ap = { class: "settings-block" }, lp = { class: "settings-block" }, cp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, dp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, up = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, hp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, fp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, gp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, pp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, mp = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, bp = {
  class: "settings-block",
  style: { "margin-top": "20px" }
}, yp = { style: { display: "flex", "justify-content": "space-between", "align-items": "center" } }, _p = { style: { display: "flex", "justify-content": "space-between", "margin-bottom": "8px" } }, xp = /* @__PURE__ */ ji({
  __name: "ChartWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const t = Gt({
      seriesSection: !1,
      styleSection: !0,
      gridSection: !1,
      dateFormatSection: !1,
      axisLabelSection: !1,
      annotationsSection: !1
    }), e = ar(i, "modelValue"), s = Gt(e.value?.xAxisTitle?.value ?? ""), n = Gt(e.value?.yAxisTitle?.value ?? "");
    ti(s, (T) => {
      e.value.xAxisTitle ? e.value.xAxisTitle.value = T : e.value.xAxisTitle = new A(T);
    }), ti(n, (T) => {
      e.value.yAxisTitle ? e.value.yAxisTitle.value = T : e.value.yAxisTitle = new A(T);
    }), ws("i18n");
    const o = ot(() => e.value?.chartType?.value ?? "bar"), r = ot(() => o.value === "line"), a = ot(() => o.value === "bar"), l = ot(() => ["pie", "doughnut", "polarArea"].includes(o.value)), c = ot(() => {
      const T = /* @__PURE__ */ new Set(["y"]);
      return e.value?.seriesSettings?.forEach((m) => {
        m.yAxisId?.value && T.add(m.yAxisId.value);
      }), Array.from(T);
    });
    function d(T) {
      return e.value?.seriesSettings?.find(
        (O) => O.yAxisId?.value === T
      )?.yAxisTitle?.value ?? "";
    }
    function u(T, m) {
      const O = e.value?.seriesSettings?.find(
        (P) => P.yAxisId?.value === T
      );
      O && (O.yAxisTitle ? O.yAxisTitle.value = m : O.yAxisTitle = new A(m));
    }
    Li(() => {
      console.log("ChartWidgetSettings mounted, config:", e.value), console.log("borderColor:", e.value?.borderColor);
    });
    const h = [
      { label: "Solid", value: [] },
      { label: "Dashed", value: [5, 5] },
      { label: "Dotted", value: [2, 2] },
      { label: "Dash-Dot", value: [10, 5, 2, 5] }
    ], f = Gt("[]"), g = (T) => {
      try {
        const m = typeof T == "string" ? T : T?.value || T, O = typeof m == "string" ? JSON.parse(m) : m;
        e.value.borderDash.value = O;
      } catch (m) {
        console.error("Error parsing border dash preset:", m, T);
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
    }, b = (T) => {
      e.value.horizontalLines?.splice(T, 1);
    }, _ = () => {
      e.value.verticalLines || (e.value.verticalLines = []), e.value.verticalLines.push({
        value: 0,
        color: "rgba(0, 0, 255, 0.8)",
        width: 2,
        label: "Line"
      });
    }, v = (T) => {
      e.value.verticalLines?.splice(T, 1);
    }, w = () => {
      e.value.horizontalBoxes || (e.value.horizontalBoxes = []), e.value.horizontalBoxes.push({
        yMin: 0,
        yMax: 10,
        color: "rgba(255, 0, 0, 0.1)",
        label: "Range"
      });
    }, C = (T) => {
      e.value.horizontalBoxes?.splice(T, 1);
    }, S = () => {
      e.value.verticalBoxes || (e.value.verticalBoxes = []), e.value.verticalBoxes.push({
        xMin: 0,
        xMax: 10,
        color: "rgba(0, 0, 255, 0.1)",
        label: "Range"
      });
    }, k = (T) => {
      e.value.verticalBoxes?.splice(T, 1);
    }, M = () => {
      e.value.seriesSettings || (e.value.seriesSettings = []);
      const T = new D();
      T.seriesIndex = new A(e.value.seriesSettings.length), T.chartType = new A("bar"), T.xAxisId = new A("x"), T.yAxisId = new A("y"), T.label = new A(""), T.borderColor = new A(""), T.backgroundColor = new A(""), T.borderWidth = new A(2), T.borderDash = new A([]), T.fill = new A(!1), T.showPoints = new A(!0), T.pointColor = new A(""), T.pointSize = new A(3), e.value.seriesSettings.push(T);
    }, I = (T) => {
      e.value.seriesSettings?.splice(T, 1);
    }, F = (T, m) => {
      try {
        const O = typeof m == "string" ? m : m?.value || m, P = typeof O == "string" ? JSON.parse(O) : O;
        T.borderDash ? T.borderDash.value = P : T.borderDash = new A(P);
      } catch (O) {
        console.error("Error parsing border dash preset:", O, m);
      }
    };
    return Li(() => {
      e.value.seriesSettings || (e.value.seriesSettings = []), e.value.seriesSettings.forEach((T) => {
        T.label || (T.label = new A("")), T.borderColor || (T.borderColor = new A("")), T.backgroundColor || (T.backgroundColor = new A("")), T.borderWidth || (T.borderWidth = new A(2)), T.borderDash || (T.borderDash = new A([])), T.fill || (T.fill = new A(!1)), T.showPoints || (T.showPoints = new A(!0)), T.pointColor || (T.pointColor = new A("")), T.pointSize || (T.pointSize = new A(3));
      });
    }), (T, m) => {
      const O = xe("va-button"), P = xe("va-input"), G = xe("va-select"), N = xe("va-color-input"), B = xe("va-checkbox"), X = xe("va-collapse");
      return H(), yt(Yt, null, [
        W(X, {
          modelValue: t.value.seriesSection,
          "onUpdate:modelValue": m[0] || (m[0] = (y) => t.value.seriesSection = y),
          icon: "format_list_numbered",
          header: "Per-Series Settings"
        }, {
          default: q(() => [
            z("div", Wg, [
              z("div", zg, [
                m[39] || (m[39] = z("p", { style: { "margin-bottom": "12px", color: "var(--va-text-secondary)" } }, " Configure individual data series. Each series can have its own chart type, axis assignment, colors, and styling. ", -1)),
                z("div", Gg, [
                  m[33] || (m[33] = z("h3", null, "Series Configuration", -1)),
                  W(O, {
                    size: "small",
                    onClick: M
                  }, {
                    default: q(() => [...m[32] || (m[32] = [
                      Mt("Add Series", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), yt(Yt, null, ve(e.value.seriesSettings, (y, L) => (H(), yt("div", {
                  key: `series_${L}`,
                  style: { border: "1px solid #ddd", padding: "16px", "border-radius": "4px", "margin-bottom": "12px", background: "#fafafa" }
                }, [
                  z("div", jg, [
                    z("strong", Ug, "Series " + Be(y.seriesIndex?.value ?? L), 1),
                    W(O, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => I(L)
                    }, {
                      default: q(() => [...m[34] || (m[34] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  y.seriesIndex ? (H(), K(ut(ht), {
                    key: 0,
                    label: "Series Index (0-based)",
                    modelValue: y.seriesIndex,
                    "onUpdate:modelValue": (E) => y.seriesIndex = E,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      W(P, {
                        label: "Series Index (0-based)",
                        "model-value": E,
                        onInput: tt,
                        type: "number",
                        min: 0
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  y.label !== void 0 ? (H(), K(ut(ht), {
                    key: 1,
                    label: "Series Label/Title (optional)",
                    modelValue: y.label,
                    "onUpdate:modelValue": (E) => y.label = E,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      W(P, {
                        label: "Series Label/Title (optional)",
                        "model-value": E,
                        onInput: tt,
                        placeholder: "e.g., Temperature, Humidity, Pressure..."
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  y.chartType ? (H(), K(G, {
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
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  m[36] || (m[36] = z("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Axis Assignment", -1)),
                  y.xAxisId ? (H(), K(ut(ht), {
                    key: 3,
                    label: "X-Axis ID (e.g., 'x', 'x1', 'x2')",
                    modelValue: y.xAxisId,
                    "onUpdate:modelValue": (E) => y.xAxisId = E,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      W(P, {
                        label: "X-Axis ID",
                        "model-value": E,
                        onInput: tt,
                        placeholder: "x"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  y.yAxisId ? (H(), K(ut(ht), {
                    key: 4,
                    label: "Y-Axis ID (e.g., 'y', 'y1', 'y2')",
                    modelValue: y.yAxisId,
                    "onUpdate:modelValue": (E) => y.yAxisId = E,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      W(P, {
                        label: "Y-Axis ID",
                        "model-value": E,
                        onInput: tt,
                        placeholder: "y"
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  y.yAxisTitle ? (H(), K(P, {
                    key: 5,
                    label: "Y-Axis Title",
                    modelValue: y.yAxisTitle.value,
                    "onUpdate:modelValue": (E) => y.yAxisTitle.value = E,
                    placeholder: "e.g., Temperatur (°C)",
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  m[37] || (m[37] = z("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Colors", -1)),
                  y.borderColor !== void 0 ? (H(), K(ut(ht), {
                    key: 6,
                    label: "Border Color",
                    modelValue: y.borderColor,
                    "onUpdate:modelValue": (E) => y.borderColor = E,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      W(N, {
                        label: "Border Color",
                        "model-value": E,
                        onInput: tt
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  y.backgroundColor !== void 0 ? (H(), K(ut(ht), {
                    key: 7,
                    label: "Background Color",
                    modelValue: y.backgroundColor,
                    "onUpdate:modelValue": (E) => y.backgroundColor = E,
                    style: { "margin-bottom": "12px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      W(N, {
                        label: "Background Color",
                        "model-value": E,
                        onInput: tt
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  m[38] || (m[38] = z("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Border Style", -1)),
                  y.borderWidth !== void 0 ? (H(), K(ut(ht), {
                    key: 8,
                    label: "Border Width (px)",
                    modelValue: y.borderWidth,
                    "onUpdate:modelValue": (E) => y.borderWidth = E,
                    style: { "margin-bottom": "8px" }
                  }, {
                    default: q(({ value: E, change: tt }) => [
                      W(P, {
                        label: "Border Width (px)",
                        "model-value": E,
                        onInput: tt,
                        type: "number",
                        min: 0,
                        max: 20
                      }, null, 8, ["model-value", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  y.borderDash !== void 0 ? (H(), K(G, {
                    key: 9,
                    label: "Border Style",
                    "model-value": JSON.stringify(y.borderDash.value || []),
                    options: h.map((E) => ({ value: JSON.stringify(E.value), text: E.label })),
                    "value-by": "value",
                    "onUpdate:modelValue": (E) => F(y, E),
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["model-value", "options", "onUpdate:modelValue"])) : U("", !0),
                  y.fill !== void 0 ? (H(), K(B, {
                    key: 10,
                    label: "Fill Area",
                    modelValue: y.fill.value,
                    "onUpdate:modelValue": (E) => y.fill.value = E,
                    style: { "margin-bottom": "12px" }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                  y.chartType?.value === "line" || y.chartType === "line" ? (H(), yt("div", Xg, [
                    m[35] || (m[35] = z("h4", { style: { margin: "16px 0 8px 0", "font-size": "13px", color: "var(--va-primary)" } }, "Point Style", -1)),
                    y.showPoints !== void 0 ? (H(), K(B, {
                      key: 0,
                      label: "Show Points",
                      modelValue: y.showPoints.value,
                      "onUpdate:modelValue": (E) => y.showPoints.value = E,
                      style: { "margin-bottom": "8px" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                    y.pointColor !== void 0 && y.showPoints?.value ? (H(), K(ut(ht), {
                      key: 1,
                      label: "Point Color",
                      modelValue: y.pointColor,
                      "onUpdate:modelValue": (E) => y.pointColor = E,
                      style: { "margin-bottom": "8px" }
                    }, {
                      default: q(({ value: E, change: tt }) => [
                        W(N, {
                          label: "Point Color",
                          "model-value": E,
                          onInput: tt
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0),
                    y.pointSize !== void 0 && y.showPoints?.value ? (H(), K(ut(ht), {
                      key: 2,
                      label: "Point Size (px)",
                      modelValue: y.pointSize,
                      "onUpdate:modelValue": (E) => y.pointSize = E
                    }, {
                      default: q(({ value: E, change: tt }) => [
                        W(P, {
                          label: "Point Size (px)",
                          "model-value": E,
                          onInput: tt,
                          type: "number",
                          min: 0,
                          max: 20
                        }, null, 8, ["model-value", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])) : U("", !0)
                  ])) : U("", !0)
                ]))), 128)),
                !e.value.seriesSettings || e.value.seriesSettings.length === 0 ? (H(), yt("div", Yg, ' No series-specific settings configured. Click "Add Series" to configure individual data series. ')) : U("", !0)
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        W(X, {
          modelValue: t.value.styleSection,
          "onUpdate:modelValue": m[17] || (m[17] = (y) => t.value.styleSection = y),
          icon: "palette",
          header: "Default Chart Styling"
        }, {
          default: q(() => [
            z("div", $g, [
              z("div", Zg, [
                m[40] || (m[40] = z("h3", null, "Chart Type", -1)),
                e.value.chartType ? (H(), K(G, {
                  key: 0,
                  label: "Chart Type",
                  modelValue: e.value.chartType.value,
                  "onUpdate:modelValue": m[1] || (m[1] = (y) => e.value.chartType.value = y),
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
              r.value ? (H(), yt("div", Kg, [
                m[41] || (m[41] = z("h3", null, "Line Style", -1)),
                e.value.borderColor ? (H(), K(ut(ht), {
                  key: 0,
                  label: "Line Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": m[2] || (m[2] = (y) => e.value.borderColor = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(N, {
                      label: "Line Color",
                      "model-value": y,
                      onInput: L
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderWidth ? (H(), K(ut(ht), {
                  key: 1,
                  label: "Line Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": m[3] || (m[3] = (y) => e.value.borderWidth = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(P, {
                      label: "Line Width (px)",
                      "model-value": y,
                      onInput: L,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderDash ? (H(), K(G, {
                  key: 2,
                  label: "Line Style",
                  modelValue: f.value,
                  "onUpdate:modelValue": [
                    m[4] || (m[4] = (y) => f.value = y),
                    g
                  ],
                  options: h.map((y) => ({ value: JSON.stringify(y.value), text: y.label })),
                  "value-by": "value"
                }, null, 8, ["modelValue", "options"])) : U("", !0),
                e.value.fill ? (H(), K(B, {
                  key: 3,
                  label: "Fill Area Under Line",
                  modelValue: e.value.fill,
                  "onUpdate:modelValue": m[5] || (m[5] = (y) => e.value.fill = y)
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.backgroundColor && e.value.fill ? (H(), K(ut(ht), {
                  key: 4,
                  label: "Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": m[6] || (m[6] = (y) => e.value.backgroundColor = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(N, {
                      label: "Fill Color",
                      "model-value": y,
                      onInput: L
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                m[42] || (m[42] = z("h3", { style: { "margin-top": "16px" } }, "Point Style", -1)),
                e.value.showPoints ? (H(), K(B, {
                  key: 5,
                  label: "Show Points",
                  modelValue: e.value.showPoints.value,
                  "onUpdate:modelValue": m[7] || (m[7] = (y) => e.value.showPoints.value = y)
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.pointColor && e.value.showPoints ? (H(), K(ut(ht), {
                  key: 6,
                  label: "Point Color",
                  modelValue: e.value.pointColor,
                  "onUpdate:modelValue": m[8] || (m[8] = (y) => e.value.pointColor = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(N, {
                      label: "Point Color",
                      "model-value": y,
                      onInput: L
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.pointSize && e.value.showPoints ? (H(), K(ut(ht), {
                  key: 7,
                  label: "Point Size (px)",
                  modelValue: e.value.pointSize,
                  "onUpdate:modelValue": m[9] || (m[9] = (y) => e.value.pointSize = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(P, {
                      label: "Point Size (px)",
                      "model-value": y,
                      onInput: L,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0)
              ])) : U("", !0),
              a.value ? (H(), yt("div", qg, [
                m[43] || (m[43] = z("h3", null, "Bar Layout", -1)),
                e.value.barOrientation ? (H(), K(G, {
                  key: 0,
                  label: "Bar Orientation",
                  modelValue: e.value.barOrientation,
                  "onUpdate:modelValue": m[10] || (m[10] = (y) => e.value.barOrientation = y),
                  options: [
                    { value: "vertical", text: "Vertical (Standard)" },
                    { value: "horizontal", text: "Horizontal" }
                  ],
                  "value-by": "value"
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.stacked ? (H(), K(B, {
                  key: 1,
                  label: "Stacked Bars",
                  modelValue: e.value.stacked.value,
                  "onUpdate:modelValue": m[11] || (m[11] = (y) => e.value.stacked.value = y)
                }, null, 8, ["modelValue"])) : U("", !0),
                m[44] || (m[44] = z("h3", { style: { "margin-top": "16px" } }, "Bar Style", -1)),
                e.value.backgroundColor ? (H(), K(ut(ht), {
                  key: 2,
                  label: "Bar Fill Color",
                  modelValue: e.value.backgroundColor,
                  "onUpdate:modelValue": m[12] || (m[12] = (y) => e.value.backgroundColor = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(N, {
                      label: "Bar Fill Color",
                      "model-value": y,
                      onInput: L
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderColor ? (H(), K(ut(ht), {
                  key: 3,
                  label: "Bar Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": m[13] || (m[13] = (y) => e.value.borderColor = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(N, {
                      label: "Bar Border Color",
                      "model-value": y,
                      onInput: L
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderWidth ? (H(), K(ut(ht), {
                  key: 4,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": m[14] || (m[14] = (y) => e.value.borderWidth = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(P, {
                      label: "Border Width (px)",
                      "model-value": y,
                      onInput: L,
                      type: "number",
                      min: 0,
                      max: 20
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0)
              ])) : U("", !0),
              l.value ? (H(), yt("div", Jg, [
                m[45] || (m[45] = z("h3", null, "Segment Style", -1)),
                e.value.borderColor ? (H(), K(ut(ht), {
                  key: 0,
                  label: "Segment Border Color",
                  modelValue: e.value.borderColor,
                  "onUpdate:modelValue": m[15] || (m[15] = (y) => e.value.borderColor = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(N, {
                      label: "Segment Border Color",
                      "model-value": y,
                      onInput: L
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.borderWidth ? (H(), K(ut(ht), {
                  key: 1,
                  label: "Border Width (px)",
                  modelValue: e.value.borderWidth,
                  "onUpdate:modelValue": m[16] || (m[16] = (y) => e.value.borderWidth = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(P, {
                      label: "Border Width (px)",
                      "model-value": y,
                      onInput: L,
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
        W(X, {
          modelValue: t.value.gridSection,
          "onUpdate:modelValue": m[24] || (m[24] = (y) => t.value.gridSection = y),
          icon: "grid_on",
          header: "Grid Lines"
        }, {
          default: q(() => [
            z("div", Qg, [
              z("div", tp, [
                m[46] || (m[46] = z("h3", null, "Horizontal Grid (Y-Axis)", -1)),
                e.value.showHorizontalGrid ? (H(), K(B, {
                  key: 0,
                  label: "Show Horizontal Grid",
                  modelValue: e.value.showHorizontalGrid.value,
                  "onUpdate:modelValue": m[18] || (m[18] = (y) => e.value.showHorizontalGrid.value = y)
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.horizontalGridColor ? (H(), K(ut(ht), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.horizontalGridColor,
                  "onUpdate:modelValue": m[19] || (m[19] = (y) => e.value.horizontalGridColor = y),
                  disabled: !e.value.showHorizontalGrid?.value
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(N, {
                      label: "Grid Color",
                      "model-value": y,
                      onInput: L
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "disabled"])) : U("", !0),
                e.value.horizontalGridWidth ? (H(), K(ut(ht), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.horizontalGridWidth,
                  "onUpdate:modelValue": m[20] || (m[20] = (y) => e.value.horizontalGridWidth = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(P, {
                      label: "Grid Width (px)",
                      "model-value": y,
                      onInput: L,
                      type: "number",
                      min: 0,
                      max: 10
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0)
              ]),
              z("div", ep, [
                m[47] || (m[47] = z("h3", null, "Vertical Grid (X-Axis)", -1)),
                e.value.showVerticalGrid ? (H(), K(B, {
                  key: 0,
                  label: "Show Vertical Grid",
                  modelValue: e.value.showVerticalGrid,
                  "onUpdate:modelValue": m[21] || (m[21] = (y) => e.value.showVerticalGrid = y)
                }, null, 8, ["modelValue"])) : U("", !0),
                e.value.verticalGridColor ? (H(), K(ut(ht), {
                  key: 1,
                  label: "Grid Color",
                  modelValue: e.value.verticalGridColor,
                  "onUpdate:modelValue": m[22] || (m[22] = (y) => e.value.verticalGridColor = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(N, {
                      label: "Grid Color",
                      "model-value": y,
                      onInput: L
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0),
                e.value.verticalGridWidth ? (H(), K(ut(ht), {
                  key: 2,
                  label: "Grid Width (px)",
                  modelValue: e.value.verticalGridWidth,
                  "onUpdate:modelValue": m[23] || (m[23] = (y) => e.value.verticalGridWidth = y)
                }, {
                  default: q(({ value: y, change: L }) => [
                    W(P, {
                      label: "Grid Width (px)",
                      "model-value": y,
                      onInput: L,
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
        W(X, {
          modelValue: t.value.axisLabelSection,
          "onUpdate:modelValue": m[27] || (m[27] = (y) => t.value.axisLabelSection = y),
          icon: "text_fields",
          header: "Axis Titles"
        }, {
          default: q(() => [
            z("div", ip, [
              z("div", sp, [
                W(P, {
                  label: "X-Axis Title",
                  modelValue: s.value,
                  "onUpdate:modelValue": m[25] || (m[25] = (y) => s.value = y),
                  placeholder: "e.g., Zeit, Datum",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                W(P, {
                  label: "Y-Axis Title (y)",
                  modelValue: n.value,
                  "onUpdate:modelValue": m[26] || (m[26] = (y) => n.value = y),
                  placeholder: "e.g., Temperatur (°C)",
                  style: { "margin-bottom": "8px" }
                }, null, 8, ["modelValue"]),
                (H(!0), yt(Yt, null, ve(c.value, (y) => (H(), yt(Yt, { key: y }, [
                  y !== "y" ? (H(), K(P, {
                    key: 0,
                    label: `Y-Axis Title (${y})`,
                    "model-value": d(y),
                    "onUpdate:modelValue": (L) => u(y, L),
                    placeholder: "e.g., Niederschlag (mm)",
                    style: { "margin-bottom": "8px" }
                  }, null, 8, ["label", "model-value", "onUpdate:modelValue"])) : U("", !0)
                ], 64))), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        W(X, {
          modelValue: t.value.dateFormatSection,
          "onUpdate:modelValue": m[29] || (m[29] = (y) => t.value.dateFormatSection = y),
          icon: "event",
          header: "Date/Time Formatting"
        }, {
          default: q(() => [
            z("div", np, [
              z("div", op, [
                m[48] || (m[48] = z("h3", null, "X-Axis Date/Time Format", -1)),
                e.value.dateDisplayFormat ? (H(), K(G, {
                  key: 0,
                  label: "Date Format",
                  modelValue: e.value.dateDisplayFormat.value,
                  "onUpdate:modelValue": m[28] || (m[28] = (y) => e.value.dateDisplayFormat.value = y),
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
        W(X, {
          modelValue: t.value.annotationsSection,
          "onUpdate:modelValue": m[31] || (m[31] = (y) => t.value.annotationsSection = y),
          icon: "show_chart",
          header: "Reference Lines & Areas"
        }, {
          default: q(() => [
            z("div", rp, [
              z("div", ap, [
                e.value.annotationsEditMode ? (H(), K(B, {
                  key: 0,
                  label: "Enable Drag & Drop (Move annotations in chart)",
                  modelValue: e.value.annotationsEditMode,
                  "onUpdate:modelValue": m[30] || (m[30] = (y) => e.value.annotationsEditMode = y)
                }, null, 8, ["modelValue"])) : U("", !0)
              ]),
              z("div", lp, [
                z("div", cp, [
                  m[50] || (m[50] = z("h3", null, "Horizontal Lines (Y-Axis)", -1)),
                  W(O, {
                    size: "small",
                    onClick: p
                  }, {
                    default: q(() => [...m[49] || (m[49] = [
                      Mt("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), yt(Yt, null, ve(e.value.horizontalLines, (y, L) => (H(), yt("div", {
                  key: `hline_${L}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  z("div", dp, [
                    z("strong", null, "Line " + Be(L + 1), 1),
                    W(O, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => b(L)
                    }, {
                      default: q(() => [...m[51] || (m[51] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  W(P, {
                    label: "Y-Value",
                    modelValue: y.value,
                    "onUpdate:modelValue": (E) => y.value = E,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(N, {
                    label: "Color",
                    modelValue: y.color,
                    "onUpdate:modelValue": (E) => y.color = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(P, {
                    label: "Line Width (px)",
                    modelValue: y.width,
                    "onUpdate:modelValue": (E) => y.width = E,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(P, {
                    label: "Label (optional)",
                    modelValue: y.label,
                    "onUpdate:modelValue": (E) => y.label = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              z("div", up, [
                z("div", hp, [
                  m[53] || (m[53] = z("h3", null, "Vertical Lines (X-Axis)", -1)),
                  W(O, {
                    size: "small",
                    onClick: _
                  }, {
                    default: q(() => [...m[52] || (m[52] = [
                      Mt("Add Line", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), yt(Yt, null, ve(e.value.verticalLines, (y, L) => (H(), yt("div", {
                  key: `vline_${L}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  z("div", fp, [
                    z("strong", null, "Line " + Be(L + 1), 1),
                    W(O, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => v(L)
                    }, {
                      default: q(() => [...m[54] || (m[54] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  W(P, {
                    label: "X-Value",
                    modelValue: y.value,
                    "onUpdate:modelValue": (E) => y.value = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(N, {
                    label: "Color",
                    modelValue: y.color,
                    "onUpdate:modelValue": (E) => y.color = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(P, {
                    label: "Line Width (px)",
                    modelValue: y.width,
                    "onUpdate:modelValue": (E) => y.width = E,
                    modelModifiers: { number: !0 },
                    type: "number",
                    min: 1,
                    max: 10
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(P, {
                    label: "Label (optional)",
                    modelValue: y.label,
                    "onUpdate:modelValue": (E) => y.label = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              z("div", gp, [
                z("div", pp, [
                  m[56] || (m[56] = z("h3", null, "Horizontal Areas (Y-Axis Ranges)", -1)),
                  W(O, {
                    size: "small",
                    onClick: w
                  }, {
                    default: q(() => [...m[55] || (m[55] = [
                      Mt("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), yt(Yt, null, ve(e.value.horizontalBoxes, (y, L) => (H(), yt("div", {
                  key: `hbox_${L}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  z("div", mp, [
                    z("strong", null, "Area " + Be(L + 1), 1),
                    W(O, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => C(L)
                    }, {
                      default: q(() => [...m[57] || (m[57] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  W(P, {
                    label: "Y-Min",
                    modelValue: y.yMin,
                    "onUpdate:modelValue": (E) => y.yMin = E,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(P, {
                    label: "Y-Max",
                    modelValue: y.yMax,
                    "onUpdate:modelValue": (E) => y.yMax = E,
                    modelModifiers: { number: !0 },
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(N, {
                    label: "Fill Color",
                    modelValue: y.color,
                    "onUpdate:modelValue": (E) => y.color = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(P, {
                    label: "Label (optional)",
                    modelValue: y.label,
                    "onUpdate:modelValue": (E) => y.label = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]))), 128))
              ]),
              z("div", bp, [
                z("div", yp, [
                  m[59] || (m[59] = z("h3", null, "Vertical Areas (X-Axis Ranges)", -1)),
                  W(O, {
                    size: "small",
                    onClick: S
                  }, {
                    default: q(() => [...m[58] || (m[58] = [
                      Mt("Add Area", -1)
                    ])]),
                    _: 1
                  })
                ]),
                (H(!0), yt(Yt, null, ve(e.value.verticalBoxes, (y, L) => (H(), yt("div", {
                  key: `vbox_${L}`,
                  style: { border: "1px solid #ddd", padding: "12px", "border-radius": "4px", "margin-bottom": "8px" }
                }, [
                  z("div", _p, [
                    z("strong", null, "Area " + Be(L + 1), 1),
                    W(O, {
                      size: "small",
                      color: "danger",
                      onClick: (E) => k(L)
                    }, {
                      default: q(() => [...m[60] || (m[60] = [
                        Mt("Remove", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  W(P, {
                    label: "X-Min",
                    modelValue: y.xMin,
                    "onUpdate:modelValue": (E) => y.xMin = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(P, {
                    label: "X-Max",
                    modelValue: y.xMax,
                    "onUpdate:modelValue": (E) => y.xMax = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(N, {
                    label: "Fill Color",
                    modelValue: y.color,
                    "onUpdate:modelValue": (E) => y.color = E
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  W(P, {
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
}), vp = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, Sp = /* @__PURE__ */ vp(xp, [["__scopeId", "data-v-c5346fb1"]]), Tp = `<?xml version="1.0" encoding="UTF-8"?>
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
`, wp = `<?xml version="1.0" encoding="UTF-8"?>
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
`, Ep = [
  {
    name: "Chart Clicked",
    type: "click",
    description: "Triggered when the chart is clicked",
    payloadType: bn
  },
  {
    name: "Chart Right Clicked",
    type: "right_click",
    description: "Triggered when the chart is right-clicked",
    payloadType: bn
  }
];
var Ap = Object.defineProperty, Cp = Object.getOwnPropertyDescriptor, gn = (i, t, e, s) => {
  for (var n = s > 1 ? void 0 : s ? Cp(t, e) : t, o = i.length - 1, r; o >= 0; o--)
    (r = i[o]) && (n = (s ? r(t, e, n) : r(n)) || n);
  return s && n && Ap(t, e, n), n;
}, sr = (i, t) => (e, s) => t(e, s, i);
R.eINSTANCE;
const Ee = "ChartWidget";
let Gi = class {
  constructor(i, t) {
    this.events = i, this.actions = t;
  }
  type = Ee;
  component = Hg;
  settingsComponent = Sp;
  supportedDSTypes = [];
  icon = $a;
  name = "Chart";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Tp,
    uri: "/chart-settings.ui.xmi",
    ePackage: () => R.eINSTANCE,
    create: () => new x(),
    /* Forms for classes that appear inside this one's lists. */
    entryForms: [{ xmi: wp, uri: "/chart-series.ui.xmi" }],
    /*
     * What the model does not describe: the reference lines and areas, four
     * lists the Ecore does not type - there is no class to build a form
     * from. Named so that what is modelled is not offered twice, in two
     * forms that could disagree.
     */
    unmodelledSections: ["Reference Lines & Areas"]
  };
  register() {
    this.events.registerWidget(Ee, Ep), this.actions.registerWidgetType(Ee, ye, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Ee), this.actions.unregisterWidgetType(Ee);
  }
};
gn([
  Ra()
], Gi.prototype, "register", 1);
gn([
  Da()
], Gi.prototype, "unregister", 1);
Gi = gn([
  La({
    service: [Ya],
    properties: { "widget.type": Ee }
  }),
  sr(0, pn(Ia)),
  sr(1, pn(Oa))
], Gi);
export {
  x as ChartSettingsImpl,
  Hg as ChartWidget,
  Gi as ChartWidgetProvider,
  Sp as ChartWidgetSettings,
  R as ChartsettingsPackage,
  Tp as chartSettingsFormXmi,
  wp as seriesSettingsFormXmi
};
