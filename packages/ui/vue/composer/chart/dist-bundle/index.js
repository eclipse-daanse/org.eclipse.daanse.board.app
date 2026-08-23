(function(){var i="ui.vue.composer.chart",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".h50[data-v-3662bbd8]{height:50%}\n";})();
import { DATASOURCE_REPOSITORY as Os } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as Oe, shallowRef as Qe, h as $e, ref as Pt, onMounted as Ds, onUnmounted as vn, watch as _e, toRaw as Ye, nextTick as kn, version as wn, isProxy as Cs, resolveComponent as Ts, createElementBlock as As, createCommentVNode as ui, openBlock as Ue, createElementVNode as gi, createVNode as Nt, createBlock as Sn, unref as Mn, inject as Pn, computed as On, Fragment as Dn } from "vue";
import { useTemporaryStore as Cn } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { ChartComposer as pi } from "org.eclipse.daanse.board.app.lib.composer.chart";
import { identifier as Tn } from "org.eclipse.daanse.board.app.lib.repository.datasource";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function te(i) {
  return i + 0.5 | 0;
}
const ot = (i, t, e) => Math.max(Math.min(i, e), t);
function jt(i) {
  return ot(te(i * 2.55), 0, 255);
}
function lt(i) {
  return ot(te(i * 255), 0, 255);
}
function nt(i) {
  return ot(te(i / 2.55) / 100, 0, 1);
}
function mi(i) {
  return ot(te(i * 100), 0, 100);
}
const Y = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Ke = [..."0123456789ABCDEF"], An = (i) => Ke[i & 15], Ln = (i) => Ke[(i & 240) >> 4] + Ke[i & 15], ne = (i) => (i & 240) >> 4 === (i & 15), Fn = (i) => ne(i.r) && ne(i.g) && ne(i.b) && ne(i.a);
function In(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Y[i[1]] * 17,
    g: 255 & Y[i[2]] * 17,
    b: 255 & Y[i[3]] * 17,
    a: t === 5 ? Y[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Y[i[1]] << 4 | Y[i[2]],
    g: Y[i[3]] << 4 | Y[i[4]],
    b: Y[i[5]] << 4 | Y[i[6]],
    a: t === 9 ? Y[i[7]] << 4 | Y[i[8]] : 255
  })), e;
}
const Rn = (i, t) => i < 255 ? t(i) : "";
function En(i) {
  var t = Fn(i) ? An : Ln;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Rn(i.a, t) : void 0;
}
const zn = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ls(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, a = (o + i / 30) % 12) => e - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [n(0), n(8), n(4)];
}
function Bn(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function Hn(i, t, e) {
  const s = Ls(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function Vn(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Je(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), a = Math.min(e, s, n), r = (o + a) / 2;
  let l, c, h;
  return o !== a && (h = o - a, c = r > 0.5 ? h / (2 - o - a) : h / (o + a), l = Vn(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, r];
}
function ti(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(lt);
}
function ei(i, t, e) {
  return ti(Ls, i, t, e);
}
function Wn(i, t, e) {
  return ti(Hn, i, t, e);
}
function Nn(i, t, e) {
  return ti(Bn, i, t, e);
}
function Fs(i) {
  return (i % 360 + 360) % 360;
}
function jn(i) {
  const t = zn.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? jt(+t[5]) : lt(+t[5]));
  const n = Fs(+t[2]), o = +t[3] / 100, a = +t[4] / 100;
  return t[1] === "hwb" ? s = Wn(n, o, a) : t[1] === "hsv" ? s = Nn(n, o, a) : s = ei(n, o, a), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function $n(i, t) {
  var e = Je(i);
  e[0] = Fs(e[0] + t), e = ei(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function Yn(i) {
  if (!i)
    return;
  const t = Je(i), e = t[0], s = mi(t[1]), n = mi(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${nt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const bi = {
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
}, xi = {
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
function Un() {
  const i = {}, t = Object.keys(xi), e = Object.keys(bi);
  let s, n, o, a, r;
  for (s = 0; s < t.length; s++) {
    for (a = r = t[s], n = 0; n < e.length; n++)
      o = e[n], r = r.replace(o, bi[o]);
    o = parseInt(xi[a], 16), i[r] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let oe;
function Kn(i) {
  oe || (oe = Un(), oe.transparent = [0, 0, 0, 0]);
  const t = oe[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Xn = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function qn(i) {
  const t = Xn.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const a = +t[7];
      e = t[8] ? jt(a) : ot(a * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? jt(s) : ot(s, 0, 255)), n = 255 & (t[4] ? jt(n) : ot(n, 0, 255)), o = 255 & (t[6] ? jt(o) : ot(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function Gn(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${nt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const Le = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, St = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function Zn(i, t, e) {
  const s = St(nt(i.r)), n = St(nt(i.g)), o = St(nt(i.b));
  return {
    r: lt(Le(s + e * (St(nt(t.r)) - s))),
    g: lt(Le(n + e * (St(nt(t.g)) - n))),
    b: lt(Le(o + e * (St(nt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function ae(i, t, e) {
  if (i) {
    let s = Je(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = ei(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function Is(i, t) {
  return i && Object.assign(t || {}, i);
}
function _i(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = lt(i[3]))) : (t = Is(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = lt(t.a)), t;
}
function Qn(i) {
  return i.charAt(0) === "r" ? qn(i) : jn(i);
}
class qt {
  constructor(t) {
    if (t instanceof qt)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = _i(t) : e === "string" && (s = In(t) || Kn(t) || Qn(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Is(this._rgb);
    return t && (t.a = nt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = _i(t);
  }
  rgbString() {
    return this._valid ? Gn(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? En(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Yn(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb, n = t.rgb;
      let o;
      const a = e === o ? 0.5 : e, r = 2 * a - 1, l = s.a - n.a, c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = a * s.a + (1 - a) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = Zn(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new qt(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = lt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = te(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return ae(this._rgb, 2, t), this;
  }
  darken(t) {
    return ae(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ae(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ae(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return $n(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function et() {
}
const Jn = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function L(i) {
  return i == null;
}
function E(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function O(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function K(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Q(i, t) {
  return K(i) ? i : t;
}
function D(i, t) {
  return typeof i > "u" ? t : i;
}
const to = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function F(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function T(i, t, e, s) {
  let n, o, a;
  if (E(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (O(i))
    for (a = Object.keys(i), o = a.length, n = 0; n < o; n++)
      t.call(e, i[a[n]], a[n]);
}
function ye(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function ve(i) {
  if (E(i))
    return i.map(ve);
  if (O(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = ve(i[e[n]]);
    return t;
  }
  return i;
}
function Rs(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function eo(i, t, e, s) {
  if (!Rs(i))
    return;
  const n = t[i], o = e[i];
  O(n) && O(o) ? Gt(n, o, s) : t[i] = ve(o);
}
function Gt(i, t, e) {
  const s = E(t) ? t : [
    t
  ], n = s.length;
  if (!O(i))
    return i;
  e = e || {};
  const o = e.merger || eo;
  let a;
  for (let r = 0; r < n; ++r) {
    if (a = s[r], !O(a))
      continue;
    const l = Object.keys(a);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, a, e);
  }
  return i;
}
function Ut(i, t) {
  return Gt(i, t, {
    merger: io
  });
}
function io(i, t, e) {
  if (!Rs(i))
    return;
  const s = t[i], n = e[i];
  O(s) && O(n) ? Ut(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = ve(n));
}
const yi = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function so(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function no(i) {
  const t = so(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function Tt(i, t) {
  return (yi[t] || (yi[t] = no(t)))(i);
}
function ii(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Zt = (i) => typeof i < "u", dt = (i) => typeof i == "function", vi = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function oo(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const V = Math.PI, ct = 2 * V, ke = Number.POSITIVE_INFINITY, ao = V / 180, q = V / 2, gt = V / 4, ki = V * 2 / 3, Es = Math.log10, ht = Math.sign;
function me(i, t, e) {
  return Math.abs(i - t) < e;
}
function wi(i) {
  const t = Math.round(i);
  i = me(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(Es(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function ro(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function lo(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function we(i) {
  return !lo(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function co(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function ho(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function _t(i) {
  return i * (V / 180);
}
function fo(i) {
  return i * (180 / V);
}
function Si(i) {
  if (!K(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function uo(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * V && (o += ct), {
    angle: o,
    distance: n
  };
}
function go(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function pt(i) {
  return (i % ct + ct) % ct;
}
function po(i, t, e, s) {
  const n = pt(i), o = pt(t), a = pt(e), r = pt(o - n), l = pt(a - n), c = pt(n - o), h = pt(n - a);
  return n === o || n === a || s || r > l && c < h;
}
function G(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function mo(i) {
  return G(i, -32768, 32767);
}
function Ot(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function si(i, t, e) {
  e = e || ((a) => i[a] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const Xe = (i, t, e, s) => si(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), bo = (i, t, e) => si(i, e, (s) => i[s][t] >= e);
function xo(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const zs = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function _o(i, t) {
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
  }), zs.forEach((e) => {
    const s = "_onData" + ii(e), n = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const a = n.apply(this, o);
        return i._chartjs.listeners.forEach((r) => {
          typeof r[s] == "function" && r[s](...o);
        }), a;
      }
    });
  });
}
function Mi(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (zs.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function Bs(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const Hs = (function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
})();
function Vs(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, Hs.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function yo(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const ni = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", B = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, vo = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t, re = (i) => i === 0 || i === 1, Pi = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * ct / e)), Oi = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * ct / e) + 1, Kt = {
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
  easeInSine: (i) => -Math.cos(i * q) + 1,
  easeOutSine: (i) => Math.sin(i * q),
  easeInOutSine: (i) => -0.5 * (Math.cos(V * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => re(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => re(i) ? i : Pi(i, 0.075, 0.3),
  easeOutElastic: (i) => re(i) ? i : Oi(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return re(i) ? i : i < 0.5 ? 0.5 * Pi(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * Oi(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - Kt.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Kt.easeInBounce(i * 2) * 0.5 : Kt.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function Ws(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Di(i) {
  return Ws(i) ? i : new qt(i);
}
function Fe(i) {
  return Ws(i) ? i : new qt(i).saturate(0.5).darken(0.1).hexString();
}
const ko = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], wo = [
  "color",
  "borderColor",
  "backgroundColor"
];
function So(i) {
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
      properties: wo
    },
    numbers: {
      type: "number",
      properties: ko
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
function Mo(i) {
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
const Ci = /* @__PURE__ */ new Map();
function Po(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = Ci.get(e);
  return s || (s = new Intl.NumberFormat(i, t), Ci.set(e, s)), s;
}
function Ns(i, t, e) {
  return Po(t, e).format(i);
}
const Oo = {
  values(i) {
    return E(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = Do(i, e);
    }
    const a = Es(Math.abs(o)), r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = {
      notation: n,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(l, this.options.ticks.format), Ns(i, s, l);
  }
};
function Do(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var js = {
  formatters: Oo
};
function Co(i) {
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
      callback: js.formatters.values,
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
const vt = /* @__PURE__ */ Object.create(null), qe = /* @__PURE__ */ Object.create(null);
function Xt(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function Ie(i, t, e) {
  return typeof t == "string" ? Gt(Xt(i, t), e) : Gt(Xt(i, ""), t);
}
class To {
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => Fe(n.backgroundColor), this.hoverBorderColor = (s, n) => Fe(n.borderColor), this.hoverColor = (s, n) => Fe(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return Ie(this, t, e);
  }
  get(t) {
    return Xt(this, t);
  }
  describe(t, e) {
    return Ie(qe, t, e);
  }
  override(t, e) {
    return Ie(vt, t, e);
  }
  route(t, e, s, n) {
    const o = Xt(this, t), a = Xt(this, s), r = "_" + e;
    Object.defineProperties(o, {
      [r]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[r], c = a[n];
          return O(l) ? Object.assign({}, c, l) : D(l, c);
        },
        set(l) {
          this[r] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var R = /* @__PURE__ */ new To({
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
  So,
  Mo,
  Co
]);
function Ao(i) {
  return !i || L(i.size) || L(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Ti(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function mt(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function Ai(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function Li(i, t, e, s) {
  $s(i, t, e, s, null);
}
function $s(i, t, e, s, n) {
  let o, a, r, l, c, h, d, f;
  const u = t.pointStyle, m = t.rotation, g = t.radius;
  let p = (m || 0) * ao;
  if (u && typeof u == "object" && (o = u.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(p), i.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), i.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (i.beginPath(), u) {
      // Default includes circle
      default:
        n ? i.ellipse(e, s, n / 2, g, 0, 0, ct) : i.arc(e, s, g, 0, ct), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : g, i.moveTo(e + Math.sin(p) * h, s - Math.cos(p) * g), p += ki, i.lineTo(e + Math.sin(p) * h, s - Math.cos(p) * g), p += ki, i.lineTo(e + Math.sin(p) * h, s - Math.cos(p) * g), i.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, a = Math.cos(p + gt) * l, d = Math.cos(p + gt) * (n ? n / 2 - c : l), r = Math.sin(p + gt) * l, f = Math.sin(p + gt) * (n ? n / 2 - c : l), i.arc(e - d, s - r, c, p - V, p - q), i.arc(e + f, s - a, c, p - q, p), i.arc(e + d, s + r, c, p, p + q), i.arc(e - f, s + a, c, p + q, p + V), i.closePath();
        break;
      case "rect":
        if (!m) {
          l = Math.SQRT1_2 * g, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        p += gt;
      /* falls through */
      case "rectRot":
        d = Math.cos(p) * (n ? n / 2 : g), a = Math.cos(p) * g, r = Math.sin(p) * g, f = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - d, s - r), i.lineTo(e + f, s - a), i.lineTo(e + d, s + r), i.lineTo(e - f, s + a), i.closePath();
        break;
      case "crossRot":
        p += gt;
      /* falls through */
      case "cross":
        d = Math.cos(p) * (n ? n / 2 : g), a = Math.cos(p) * g, r = Math.sin(p) * g, f = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - d, s - r), i.lineTo(e + d, s + r), i.moveTo(e + f, s - a), i.lineTo(e - f, s + a);
        break;
      case "star":
        d = Math.cos(p) * (n ? n / 2 : g), a = Math.cos(p) * g, r = Math.sin(p) * g, f = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - d, s - r), i.lineTo(e + d, s + r), i.moveTo(e + f, s - a), i.lineTo(e - f, s + a), p += gt, d = Math.cos(p) * (n ? n / 2 : g), a = Math.cos(p) * g, r = Math.sin(p) * g, f = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - d, s - r), i.lineTo(e + d, s + r), i.moveTo(e + f, s - a), i.lineTo(e - f, s + a);
        break;
      case "line":
        a = n ? n / 2 : Math.cos(p) * g, r = Math.sin(p) * g, i.moveTo(e - a, s - r), i.lineTo(e + a, s + r);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(p) * (n ? n / 2 : g), s + Math.sin(p) * g);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function Ys(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function oi(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function ai(i) {
  i.restore();
}
function Lo(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), L(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Fo(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), a = t - o.actualBoundingBoxLeft, r = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(a, h), i.lineTo(r, h), i.stroke();
  }
}
function Io(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function Qt(i, t, e, s, n, o = {}) {
  const a = E(t) ? t : [
    t
  ], r = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, Lo(i, o), l = 0; l < a.length; ++l)
    c = a[l], o.backdrop && Io(i, o.backdrop), r && (o.strokeColor && (i.strokeStyle = o.strokeColor), L(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), Fo(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Se(i, t) {
  const { x: e, y: s, w: n, h: o, radius: a } = t;
  i.arc(e + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * V, V, !0), i.lineTo(e, s + o - a.bottomLeft), i.arc(e + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, V, q, !0), i.lineTo(e + n - a.bottomRight, s + o), i.arc(e + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, q, 0, !0), i.lineTo(e + n, s + a.topRight), i.arc(e + n - a.topRight, s + a.topRight, a.topRight, 0, -q, !0), i.lineTo(e + a.topLeft, s);
}
const Ro = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Eo = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function zo(i, t) {
  const e = ("" + i).match(Ro);
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
const Bo = (i) => +i || 0;
function Us(i, t) {
  const e = {}, s = O(t), n = s ? Object.keys(t) : t, o = O(i) ? s ? (a) => D(i[a], i[t[a]]) : (a) => i[a] : () => i;
  for (const a of n)
    e[a] = Bo(o(a));
  return e;
}
function Ks(i) {
  return Us(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Dt(i) {
  return Us(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function X(i) {
  const t = Ks(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function H(i, t) {
  i = i || {}, t = t || R.font;
  let e = D(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = D(i.style, t.style);
  s && !("" + s).match(Eo) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: D(i.family, t.family),
    lineHeight: zo(D(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: D(i.weight, t.weight),
    string: ""
  };
  return n.string = Ao(n), n;
}
function le(i, t, e, s) {
  let n, o, a;
  for (n = 0, o = i.length; n < o; ++n)
    if (a = i[n], a !== void 0 && a !== void 0)
      return a;
}
function Ho(i, t, e) {
  const { min: s, max: n } = i, o = to(t, (n - s) / 2), a = (r, l) => e && r === 0 ? 0 : r + l;
  return {
    min: a(s, -Math.abs(o)),
    max: a(n, o)
  };
}
function Lt(i, t) {
  return Object.assign(Object.create(i), t);
}
function ri(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = Zs("_fallback", i));
  const a = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (r) => ri([
      r,
      ...i
    ], t, o, s)
  };
  return new Proxy(a, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(r, l) {
      return delete r[l], delete r._keys, delete i[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(r, l) {
      return qs(r, l, () => Ko(l, t, i, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(r, l) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], l);
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
    has(r, l) {
      return Ii(r).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(r) {
      return Ii(r);
    },
    /**
    * A trap for setting property values.
    */
    set(r, l, c) {
      const h = r._storage || (r._storage = n());
      return r[l] = h[l] = c, delete r._keys, !0;
    }
  });
}
function At(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Xs(i, s),
    setContext: (o) => At(i, o, e, s),
    override: (o) => At(i.override(o), t, e, s)
  };
  return new Proxy(n, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, a) {
      return delete o[a], delete i[a], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, a, r) {
      return qs(o, a, () => Wo(o, a, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, a) {
      return o._descriptors.allKeys ? Reflect.has(i, a) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, a);
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
    has(o, a) {
      return Reflect.has(i, a);
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
    set(o, a, r) {
      return i[a] = r, delete o[a], !0;
    }
  });
}
function Xs(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: dt(e) ? e : () => e,
    isIndexable: dt(s) ? s : () => s
  };
}
const Vo = (i, t) => i ? i + ii(t) : t, li = (i, t) => O(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function qs(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function Wo(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: a } = i;
  let r = s[t];
  return dt(r) && a.isScriptable(t) && (r = No(t, r, i, e)), E(r) && r.length && (r = jo(t, r, i, a.isIndexable)), li(t, r) && (r = At(r, n, o && o[t], a)), r;
}
function No(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: a, _stack: r } = e;
  if (r.has(i))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + i);
  r.add(i);
  let l = t(o, a || s);
  return r.delete(i), li(i, l) && (l = ci(n._scopes, n, i, l)), l;
}
function jo(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: a, _descriptors: r } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (O(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = ci(c, n, i, h);
      t.push(At(d, o, a && a[i], r));
    }
  }
  return t;
}
function Gs(i, t, e) {
  return dt(i) ? i(t, e) : i;
}
const $o = (i, t) => i === !0 ? t : typeof i == "string" ? Tt(t, i) : void 0;
function Yo(i, t, e, s, n) {
  for (const o of t) {
    const a = $o(e, o);
    if (a) {
      i.add(a);
      const r = Gs(a._fallback, e, n);
      if (typeof r < "u" && r !== e && r !== s)
        return r;
    } else if (a === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function ci(i, t, e, s) {
  const n = t._rootScopes, o = Gs(t._fallback, e, s), a = [
    ...i,
    ...n
  ], r = /* @__PURE__ */ new Set();
  r.add(s);
  let l = Fi(r, a, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Fi(r, a, o, l, s), l === null) ? !1 : ri(Array.from(r), [
    ""
  ], n, o, () => Uo(t, e, s));
}
function Fi(i, t, e, s, n) {
  for (; e; )
    e = Yo(i, t, e, s, n);
  return e;
}
function Uo(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return E(n) && O(e) ? e : n || {};
}
function Ko(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Zs(Vo(o, i), e), typeof n < "u")
      return li(i, n) ? ci(e, s, i, n) : n;
}
function Zs(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function Ii(i) {
  let t = i._keys;
  return t || (t = i._keys = Xo(i._scopes)), t;
}
function Xo(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function hi() {
  return typeof window < "u" && typeof document < "u";
}
function di(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Me(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const De = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function qo(i, t) {
  return De(i).getPropertyValue(t);
}
const Go = [
  "top",
  "right",
  "bottom",
  "left"
];
function yt(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = Go[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Zo = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Qo(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let a = !1, r, l;
  if (Zo(n, o, i.target))
    r = n, l = o;
  else {
    const c = t.getBoundingClientRect();
    r = s.clientX - c.left, l = s.clientY - c.top, a = !0;
  }
  return {
    x: r,
    y: l,
    box: a
  };
}
function xt(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = De(e), o = n.boxSizing === "border-box", a = yt(n, "padding"), r = yt(n, "border", "width"), { x: l, y: c, box: h } = Qo(i, e), d = a.left + (h && r.left), f = a.top + (h && r.top);
  let { width: u, height: m } = t;
  return o && (u -= a.width + r.width, m -= a.height + r.height), {
    x: Math.round((l - d) / u * e.width / s),
    y: Math.round((c - f) / m * e.height / s)
  };
}
function Jo(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && di(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const a = o.getBoundingClientRect(), r = De(o), l = yt(r, "border", "width"), c = yt(r, "padding");
      t = a.width - c.width - l.width, e = a.height - c.height - l.height, s = Me(r.maxWidth, o, "clientWidth"), n = Me(r.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || ke,
    maxHeight: n || ke
  };
}
const at = (i) => Math.round(i * 10) / 10;
function ta(i, t, e, s) {
  const n = De(i), o = yt(n, "margin"), a = Me(n.maxWidth, i, "clientWidth") || ke, r = Me(n.maxHeight, i, "clientHeight") || ke, l = Jo(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const f = yt(n, "border", "width"), u = yt(n, "padding");
    c -= u.width + f.width, h -= u.height + f.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = at(Math.min(c, a, l.maxWidth)), h = at(Math.min(h, r, l.maxHeight)), c && !h && (h = at(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = at(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function Ri(i, t, e) {
  const s = t || 1, n = at(i.height * s), o = at(i.width * s);
  i.height = at(i.height), i.width = at(i.width);
  const a = i.canvas;
  return a.style && (e || !a.style.height && !a.style.width) && (a.style.height = `${i.height}px`, a.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || a.height !== n || a.width !== o ? (i.currentDevicePixelRatio = s, a.height = n, a.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const ea = (function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    hi() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
})();
function Ei(i, t) {
  const e = qo(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
const ia = function(i, t) {
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
}, sa = function() {
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
function Ct(i, t, e) {
  return i ? ia(t, e) : sa();
}
function Qs(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Js(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function ce(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function na(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: ce(e, t, "left"),
    right: ce(e, t, "right"),
    top: ce(s, t, "top"),
    bottom: ce(s, t, "bottom")
  } : t;
}
function oa(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const s = na(t, i.chartArea);
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
class aa {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, s, n) {
    const o = e.listeners[n], a = e.duration;
    o.forEach((r) => r({
      chart: t,
      initial: e.initial,
      numSteps: a,
      currentStep: Math.min(s - e.start, a)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = Hs.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let a = o.length - 1, r = !1, l;
      for (; a >= 0; --a)
        l = o[a], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), r = !0) : (o[a] = o[o.length - 1], o.pop());
      r && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
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
var it = /* @__PURE__ */ new aa();
const zi = "transparent", ra = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = Di(i || zi), n = s.valid && Di(t || zi);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class la {
  constructor(t, e, s, n) {
    const o = e[s];
    n = le([
      t.to,
      n,
      o,
      t.from
    ]);
    const a = le([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || ra[t.type || typeof a], this._easing = Kt[t.easing] || Kt.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = a, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, a = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = le([
        t.to,
        e,
        n,
        t.from
      ]), this._from = le([
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
    const e = t - this._start, s = this._duration, n = this._prop, o = this._from, a = this._loop, r = this._to;
    let l;
    if (this._active = o !== r && (a || e < s), !this._active) {
      this._target[n] = r, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    l = e / s % 2, l = a && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, r, l);
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
    if (!O(t))
      return;
    const e = Object.keys(R.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!O(o))
        return;
      const a = {};
      for (const r of e)
        a[r] = o[r];
      (E(o.properties) && o.properties || [
        n
      ]).forEach((r) => {
        (r === n || !s.has(r)) && s.set(r, a);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = ha(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && ca(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), a = Object.keys(e), r = Date.now();
    let l;
    for (l = a.length - 1; l >= 0; --l) {
      const c = a[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let d = o[c];
      const f = s.get(c);
      if (d)
        if (f && d.active()) {
          d.update(f, h, r);
          continue;
        } else
          d.cancel();
      if (!f || !f.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new la(f, t, c, h), n.push(d);
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
      return it.add(this._chart, s), !0;
  }
}
function ca(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function ha(i, t) {
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
function Bi(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function da(i, t, e) {
  if (e === !1)
    return !1;
  const s = Bi(i, e), n = Bi(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function fa(i) {
  let t, e, s, n;
  return O(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function en(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function Hi(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let a, r, l, c;
  if (t === null)
    return;
  let h = !1;
  for (a = 0, r = n.length; a < r; ++a) {
    if (l = +n[a], l === e) {
      if (h = !0, s.all)
        continue;
      break;
    }
    c = i.values[l], K(c) && (o || t === 0 || ht(t) === ht(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function ua(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", a = Object.keys(i), r = new Array(a.length);
  let l, c, h;
  for (l = 0, c = a.length; l < c; ++l)
    h = a[l], r[l] = {
      [n]: h,
      [o]: i[h]
    };
  return r;
}
function Re(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function ga(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function pa(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function ma(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Vi(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function Wi(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: a, index: r } = s, l = o.axis, c = a.axis, h = ga(o, a, s), d = t.length;
  let f;
  for (let u = 0; u < d; ++u) {
    const m = t[u], { [l]: g, [c]: p } = m, b = m._stacks || (m._stacks = {});
    f = b[c] = ma(n, h, g), f[r] = p, f._top = Vi(f, a, !0, s.type), f._bottom = Vi(f, a, !1, s.type);
    const x = f._visualValues || (f._visualValues = {});
    x[r] = p;
  }
}
function Ee(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function ba(i, t) {
  return Lt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function xa(i, t, e) {
  return Lt(i, {
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
function zt(i, t) {
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
const ze = (i) => i === "reset" || i === "none", Ni = (i, t) => t ? i : Object.assign({}, i), _a = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: en(e, !0),
  values: null
};
class sn {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Re(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && zt(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, f, u, m) => d === "x" ? f : d === "r" ? m : u, o = e.xAxisID = D(s.xAxisID, Ee(t, "x")), a = e.yAxisID = D(s.yAxisID, Ee(t, "y")), r = e.rAxisID = D(s.rAxisID, Ee(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, a, r), h = e.vAxisID = n(l, a, o, r);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
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
    this._data && Mi(this._data, this), t._stacked && zt(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (O(e)) {
      const n = this._cachedMeta;
      this._data = ua(e, n);
    } else if (s !== e) {
      if (s) {
        Mi(s, this);
        const n = this._cachedMeta;
        zt(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && _o(e, this), this._syncList = [], this._data = e;
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
    e._stacked = Re(e.vScale, e), e.stack !== s.stack && (n = !0, zt(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (Wi(this, e._parsed), e._stacked = Re(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: a } = s, r = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, f;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, f = n;
    else {
      E(n[t]) ? f = this.parseArrayData(s, n, t, e) : O(n[t]) ? f = this.parseObjectData(s, n, t, e) : f = this.parsePrimitiveData(s, n, t, e);
      const u = () => d[r] === null || c && d[r] < c[r];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = d = f[h], l && (u() && (l = !1), c = d);
      s._sorted = l;
    }
    a && Wi(this, f);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: a } = t, r = o.axis, l = a.axis, c = o.getLabels(), h = o === a, d = new Array(n);
    let f, u, m;
    for (f = 0, u = n; f < u; ++f)
      m = f + s, d[f] = {
        [r]: h || o.parse(c[m], m),
        [l]: a.parse(e[m], m)
      };
    return d;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: a } = t, r = new Array(n);
    let l, c, h, d;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, d = e[h], r[l] = {
        x: o.parse(d[0], h),
        y: a.parse(d[1], h)
      };
    return r;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let h, d, f, u;
    for (h = 0, d = n; h < d; ++h)
      f = h + s, u = e[f], c[h] = {
        x: o.parse(Tt(u, r), f),
        y: a.parse(Tt(u, l), f)
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
    const n = this.chart, o = this._cachedMeta, a = e[t.axis], r = {
      keys: en(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Hi(r, a, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let a = o === null ? NaN : o;
    const r = n && s._stacks[e.axis];
    n && r && (n.values = r, a = Hi(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, a = n.length, r = this._getOtherScale(t), l = _a(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = pa(r);
    let f, u;
    function m() {
      u = n[f];
      const g = u[r.axis];
      return !K(u[t.axis]) || h > g || d < g;
    }
    for (f = 0; f < a && !(!m() && (this.updateRangeFromParsed(c, t, u, l), o)); ++f)
      ;
    if (o) {
      for (f = a - 1; f >= 0; --f)
        if (!m()) {
          this.updateRangeFromParsed(c, t, u, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, s = [];
    let n, o, a;
    for (n = 0, o = e.length; n < o; ++n)
      a = e[n][t.axis], K(a) && s.push(a);
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
    this.update(t || "default"), e._clip = fa(D(this.options.clip, da(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, a = [], r = this._drawStart || 0, l = this._drawCount || n.length - r, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, r, l), h = r; h < r + l; ++h) {
      const d = n[h];
      d.hidden || (d.active && c ? a.push(d) : d.draw(t, o));
    }
    for (h = 0; h < a.length; ++h)
      a[h].draw(t, o);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t];
      o = a.$context || (a.$context = xa(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = ba(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, a = t + "-" + e, r = o[a], l = this.enableOptionSharing && Zt(s);
    if (r)
      return Ni(r, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], f = c.getOptionScopes(this.getDataset(), h), u = Object.keys(R.elements[t]), m = () => this.getContext(s, n, e), g = c.resolveNamedOptions(f, u, m, d);
    return g.$shared && (g.$shared = l, o[a] = Object.freeze(Ni(g, l))), g;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, a = `animation-${e}`, r = o[a];
    if (r)
      return r;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), f = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(f, this.getContext(t, s, e));
    }
    const c = new tn(n, l && l.animations);
    return l && l._cacheable && (o[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || ze(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), a = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: a
    };
  }
  updateElement(t, e, s, n) {
    ze(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !ze(e) && this._resolveAnimations(void 0, e).update(t, s);
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
    for (const [r, l, c] of this._syncList)
      this[r](l, c);
    this._syncList = [];
    const n = s.length, o = e.length, a = Math.min(o, n);
    a && this.parse(0, a), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta, o = n.data, a = t + e;
    let r;
    const l = (c) => {
      for (c.length += e, r = c.length - 1; r >= a; r--)
        c[r] = c[r - e];
    };
    for (l(o), r = t; r < a; ++r)
      o[r] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && zt(s, n);
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
function ya(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = Bs(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function va(i) {
  const t = i.iScale, e = ya(t, i.type);
  let s = t._length, n, o, a, r;
  const l = () => {
    a === 32767 || a === -32768 || (Zt(r) && (s = Math.min(s, Math.abs(a - r) || s)), r = a);
  };
  for (n = 0, o = e.length; n < o; ++n)
    a = t.getPixelForValue(e[n]), l();
  for (r = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    a = t.getPixelForTick(n), l();
  return s;
}
function ka(i, t, e, s) {
  const n = e.barThickness;
  let o, a;
  return L(n) ? (o = t.min * e.categoryPercentage, a = e.barPercentage) : (o = n * s, a = 1), {
    chunk: o / s,
    ratio: a,
    start: t.pixels[i] - o / 2
  };
}
function wa(i, t, e, s) {
  const n = t.pixels, o = n[i];
  let a = i > 0 ? n[i - 1] : null, r = i < n.length - 1 ? n[i + 1] : null;
  const l = e.categoryPercentage;
  a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a);
  const c = o - (o - Math.min(a, r)) / 2 * l;
  return {
    chunk: Math.abs(r - a) / 2 * l / s,
    ratio: e.barPercentage,
    start: c
  };
}
function Sa(i, t, e, s) {
  const n = e.parse(i[0], s), o = e.parse(i[1], s), a = Math.min(n, o), r = Math.max(n, o);
  let l = a, c = r;
  Math.abs(a) > Math.abs(r) && (l = r, c = a), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: n,
    end: o,
    min: a,
    max: r
  };
}
function nn(i, t, e, s) {
  return E(i) ? Sa(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function ji(i, t, e, s) {
  const n = i.iScale, o = i.vScale, a = n.getLabels(), r = n === o, l = [];
  let c, h, d, f;
  for (c = e, h = e + s; c < h; ++c)
    f = t[c], d = {}, d[n.axis] = r || n.parse(a[c], c), l.push(nn(f, d, o, c));
  return l;
}
function Be(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function Ma(i, t, e) {
  return i !== 0 ? ht(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Pa(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function Oa(i, t, e, s) {
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
  const { start: a, end: r, reverse: l, top: c, bottom: h } = Pa(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[$i(h, a, r, l)] = !0, n = c)), o[$i(n, a, r, l)] = !0, i.borderSkipped = o;
}
function $i(i, t, e, s) {
  return s ? (i = Da(i, t, e), i = Yi(i, e, t)) : i = Yi(i, t, e), i;
}
function Da(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function Yi(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function Ca(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Ta extends sn {
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
    return ji(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return ji(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? r : l, h = a.axis === "x" ? r : l, d = [];
    let f, u, m, g;
    for (f = s, u = s + n; f < u; ++f)
      g = e[f], m = {}, m[o.axis] = o.parse(Tt(g, c), f), d.push(nn(Tt(g, h), m, a, f));
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
    const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), a = o._custom, r = Be(a) ? "[" + a.start + ", " + a.end + "]" : "" + n.getLabelForValue(o[n.axis]);
    return {
      label: "" + s.getLabelForValue(o[s.axis]),
      value: r
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
    const o = n === "reset", { index: a, _cachedMeta: { vScale: r } } = this, l = r.getBasePixel(), c = r.isHorizontal(), h = this._getRuler(), { sharedOptions: d, includeOptions: f } = this._getSharedOptions(e, n);
    for (let u = e; u < e + s; u++) {
      const m = this.getParsed(u), g = o || L(m[r.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(u), p = this._calculateBarIndexPixels(u, h), b = (m._stacks || {})[r.axis], x = {
        horizontal: c,
        base: g.base,
        enableBorderRadius: !b || Be(m._custom) || a === b._top || a === b._bottom,
        x: c ? g.head : p.center,
        y: c ? p.center : g.head,
        height: c ? p.size : Math.abs(g.size),
        width: c ? Math.abs(g.size) : p.size
      };
      f && (x.options = d || this.resolveDataElementOptions(u, t[u].active ? "active" : n));
      const _ = x.options || t[u].options;
      Oa(x, _, b, a), Ca(x, _, h.ratio), this.updateElement(t[u], u, x, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((h) => h.controller.options.grouped), o = s.options.stacked, a = [], r = this._cachedMeta.controller.getParsed(e), l = r && r[s.axis], c = (h) => {
      const d = h._parsed.find((u) => u[s.axis] === l), f = d && d[h.vScale.axis];
      if (L(f) || isNaN(f))
        return !0;
    };
    for (const h of n)
      if (!(e !== void 0 && c(h)) && ((o === !1 || a.indexOf(h.stack) === -1 || o === void 0 && h.stack === void 0) && a.push(h.stack), h.index === t))
        break;
    return a.length || a.push(void 0), a;
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
      t[D(this.chart.options.indexAxis === "x" ? s.xAxisID : s.yAxisID, e)] = !0;
    return Object.keys(t);
  }
  _getStackIndex(t, e, s) {
    const n = this._getStacks(t, s), o = e !== void 0 ? n.indexOf(e) : -1;
    return o === -1 ? n.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, s = e.iScale, n = [];
    let o, a;
    for (o = 0, a = e.data.length; o < a; ++o)
      n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
    const r = t.barThickness;
    return {
      min: r || va(e),
      pixels: n,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: r ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: s, index: n }, options: { base: o, minBarLength: a } } = this, r = o || 0, l = this.getParsed(t), c = l._custom, h = Be(c);
    let d = l[e.axis], f = 0, u = s ? this.applyStack(e, l, s) : d, m, g;
    u !== d && (f = u - d, u = d), h && (d = c.barStart, u = c.barEnd - c.barStart, d !== 0 && ht(d) !== ht(c.barEnd) && (f = 0), f += d);
    const p = !L(o) && !h ? o : f;
    let b = e.getPixelForValue(p);
    if (this.chart.getDataVisibility(t) ? m = e.getPixelForValue(f + u) : m = b, g = m - b, Math.abs(g) < a) {
      g = Ma(g, e, r) * a, d === r && (b -= g / 2);
      const x = e.getPixelForDecimal(0), _ = e.getPixelForDecimal(1), v = Math.min(x, _), y = Math.max(x, _);
      b = Math.max(Math.min(b, y), v), m = b + g, s && !h && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(m) - e.getValueForPixel(b));
    }
    if (b === e.getPixelForValue(r)) {
      const x = ht(g) * e.getLineWidthForValue(r) / 2;
      b += x, g -= x;
    }
    return {
      size: g,
      base: b,
      head: m,
      center: m + g / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, o = n.skipNull, a = D(n.maxBarThickness, 1 / 0);
    let r, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const h = o ? this._getStackCount(t) : e.stackCount, d = n.barThickness === "flex" ? wa(t, e, n, h * c) : ka(t, e, n, h * c), f = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, u = this._getAxis().indexOf(D(f, this.getFirstScaleIdForIndexAxis())), m = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + u;
      r = d.start + d.chunk * m + d.chunk / 2, l = Math.min(a, d.chunk * d.ratio);
    } else
      r = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(a, e.min * e.ratio);
    return {
      base: r - l / 2,
      head: r + l / 2,
      center: r,
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
function bt() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class fi {
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
    Object.assign(fi.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return bt();
  }
  parse() {
    return bt();
  }
  format() {
    return bt();
  }
  add() {
    return bt();
  }
  diff() {
    return bt();
  }
  startOf() {
    return bt();
  }
  endOf() {
    return bt();
  }
}
var Aa = {
  _date: fi
};
function La(i, t, e, s) {
  const { controller: n, data: o, _sorted: a } = i, r = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (r && t === r.axis && t !== "r" && a && o.length) {
    const c = r._reversePixels ? bo : Xe;
    if (s) {
      if (n._sharedOptions) {
        const h = o[0], d = typeof h.getRange == "function" && h.getRange(t);
        if (d) {
          const f = c(o, t, e - d), u = c(o, t, e + d);
          return {
            lo: f.lo,
            hi: u.hi
          };
        }
      }
    } else {
      const h = c(o, t, e);
      if (l) {
        const { vScale: d } = n._cachedMeta, { _parsed: f } = i, u = f.slice(0, h.lo + 1).reverse().findIndex((g) => !L(g[d.axis]));
        h.lo -= Math.max(0, u);
        const m = f.slice(h.hi).findIndex((g) => !L(g[d.axis]));
        h.hi += Math.max(0, m);
      }
      return h;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Ce(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), a = e[t];
  for (let r = 0, l = o.length; r < l; ++r) {
    const { index: c, data: h } = o[r], { lo: d, hi: f } = La(o[r], t, a, n);
    for (let u = d; u <= f; ++u) {
      const m = h[u];
      m.skip || s(m, c, u);
    }
  }
}
function Fa(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, a = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
  };
}
function He(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Ce(i, e, t, function(r, l, c) {
    !n && !Ys(r, i.chartArea, 0) || r.inRange(t.x, t.y, s) && o.push({
      element: r,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Ia(i, t, e, s) {
  let n = [];
  function o(a, r, l) {
    const { startAngle: c, endAngle: h } = a.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = uo(a, {
      x: t.x,
      y: t.y
    });
    po(d, c, h) && n.push({
      element: a,
      datasetIndex: r,
      index: l
    });
  }
  return Ce(i, e, t, o), n;
}
function Ra(i, t, e, s, n, o) {
  let a = [];
  const r = Fa(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, f) {
    const u = h.inRange(t.x, t.y, n);
    if (s && !u)
      return;
    const m = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(m)) && !u)
      return;
    const p = r(t, m);
    p < l ? (a = [
      {
        element: h,
        datasetIndex: d,
        index: f
      }
    ], l = p) : p === l && a.push({
      element: h,
      datasetIndex: d,
      index: f
    });
  }
  return Ce(i, e, t, c), a;
}
function Ve(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Ia(i, t, e, n) : Ra(i, t, e, s, n, o);
}
function Ui(i, t, e, s, n) {
  const o = [], a = e === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return Ce(i, e, t, (l, c, h) => {
    l[a] && l[a](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), r = r || l.inRange(t.x, t.y, n));
  }), s && !r ? [] : o;
}
var Ea = {
  modes: {
    index(i, t, e, s) {
      const n = xt(t, i), o = e.axis || "x", a = e.includeInvisible || !1, r = e.intersect ? He(i, n, o, s, a) : Ve(i, n, o, !1, s, a), l = [];
      return r.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = r[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = xt(t, i), o = e.axis || "xy", a = e.includeInvisible || !1;
      let r = e.intersect ? He(i, n, o, s, a) : Ve(i, n, o, !1, s, a);
      if (r.length > 0) {
        const l = r[0].datasetIndex, c = i.getDatasetMeta(l).data;
        r = [];
        for (let h = 0; h < c.length; ++h)
          r.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return r;
    },
    point(i, t, e, s) {
      const n = xt(t, i), o = e.axis || "xy", a = e.includeInvisible || !1;
      return He(i, n, o, s, a);
    },
    nearest(i, t, e, s) {
      const n = xt(t, i), o = e.axis || "xy", a = e.includeInvisible || !1;
      return Ve(i, n, o, e.intersect, s, a);
    },
    x(i, t, e, s) {
      const n = xt(t, i);
      return Ui(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = xt(t, i);
      return Ui(i, n, "y", e.intersect, s);
    }
  }
};
const on = [
  "left",
  "top",
  "right",
  "bottom"
];
function Bt(i, t) {
  return i.filter((e) => e.pos === t);
}
function Ki(i, t) {
  return i.filter((e) => on.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Ht(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function za(i) {
  const t = [];
  let e, s, n, o, a, r;
  for (e = 0, s = (i || []).length; e < s; ++e)
    n = i[e], { position: o, options: { stack: a, stackWeight: r = 1 } } = n, t.push({
      index: e,
      box: n,
      pos: o,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: a && o + a,
      stackWeight: r
    });
  return t;
}
function Ba(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !on.includes(n))
      continue;
    const a = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    a.count++, a.weight += o;
  }
  return t;
}
function Ha(i, t) {
  const e = Ba(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, a, r;
  for (o = 0, a = i.length; o < a; ++o) {
    r = i[o];
    const { fullSize: l } = r.box, c = e[r.stack], h = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = h ? h * s : l && t.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function Va(i) {
  const t = za(i), e = Ht(t.filter((c) => c.box.fullSize), !0), s = Ht(Bt(t, "left"), !0), n = Ht(Bt(t, "right")), o = Ht(Bt(t, "top"), !0), a = Ht(Bt(t, "bottom")), r = Ki(t, "x"), l = Ki(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(a).concat(r),
    chartArea: Bt(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(a).concat(r)
  };
}
function Xi(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function an(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Wa(i, t, e, s) {
  const { pos: n, box: o } = e, a = i.maxPadding;
  if (!O(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && an(a, o.getPadding());
  const r = Math.max(0, t.outerWidth - Xi(a, i, "left", "right")), l = Math.max(0, t.outerHeight - Xi(a, i, "top", "bottom")), c = r !== i.w, h = l !== i.h;
  return i.w = r, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Na(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function ja(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((a) => {
      o[a] = Math.max(t[a], e[a]);
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
function $t(i, t, e, s) {
  const n = [];
  let o, a, r, l, c, h;
  for (o = 0, a = i.length, c = 0; o < a; ++o) {
    r = i[o], l = r.box, l.update(r.width || t.w, r.height || t.h, ja(r.horizontal, t));
    const { same: d, other: f } = Wa(t, e, r, s);
    c |= d && n.length, h = h || f, l.fullSize || n.push(r);
  }
  return c && $t(n, t, e, s) || h;
}
function he(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function qi(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: a } = t;
  for (const r of i) {
    const l = r.box, c = s[r.stack] || {
      placed: 0,
      weight: 1
    }, h = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const d = t.w * h, f = c.size || l.height;
      Zt(c.start) && (a = c.start), l.fullSize ? he(l, n.left, a, e.outerWidth - n.right - n.left, f) : he(l, t.left + c.placed, a, d, f), c.start = a, c.placed += d, a = l.bottom;
    } else {
      const d = t.h * h, f = c.size || l.width;
      Zt(c.start) && (o = c.start), l.fullSize ? he(l, o, n.top, f, e.outerHeight - n.bottom - n.top) : he(l, o, t.top + c.placed, f, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = a;
}
var U = {
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
    const n = X(i.options.layout.padding), o = Math.max(t - n.width, 0), a = Math.max(e - n.height, 0), r = Va(i.boxes), l = r.vertical, c = r.horizontal;
    T(i.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const h = l.reduce((g, p) => p.box.options && p.box.options.display === !1 ? g : g + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: a,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: a / 2
    }), f = Object.assign({}, n);
    an(f, X(s));
    const u = Object.assign({
      maxPadding: f,
      w: o,
      h: a,
      x: n.left,
      y: n.top
    }, n), m = Ha(l.concat(c), d);
    $t(r.fullSize, u, d, m), $t(l, u, d, m), $t(c, u, d, m) && $t(l, u, d, m), Na(u), qi(r.leftAndTop, u, d, m), u.x += u.w, u.y += u.h, qi(r.rightAndBottom, u, d, m), i.chartArea = {
      left: u.left,
      top: u.top,
      right: u.left + u.w,
      bottom: u.top + u.h,
      height: u.h,
      width: u.w
    }, T(r.chartArea, (g) => {
      const p = g.box;
      Object.assign(p, i.chartArea), p.update(u.w, u.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class rn {
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
class $a extends rn {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const be = "$chartjs", Ya = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Gi = (i) => i === null || i === "";
function Ua(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[be] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Gi(n)) {
    const o = Ei(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Gi(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = Ei(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const ln = ea ? {
  passive: !0
} : !1;
function Ka(i, t, e) {
  i && i.addEventListener(t, e, ln);
}
function Xa(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, ln);
}
function qa(i, t) {
  const e = Ya[i.type] || i.type, { x: s, y: n } = xt(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function Pe(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function Ga(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || Pe(r.addedNodes, s), a = a && !Pe(r.removedNodes, s);
    a && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function Za(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || Pe(r.removedNodes, s), a = a && !Pe(r.addedNodes, s);
    a && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const Jt = /* @__PURE__ */ new Map();
let Zi = 0;
function cn() {
  const i = window.devicePixelRatio;
  i !== Zi && (Zi = i, Jt.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Qa(i, t) {
  Jt.size || window.addEventListener("resize", cn), Jt.set(i, t);
}
function Ja(i) {
  Jt.delete(i), Jt.size || window.removeEventListener("resize", cn);
}
function tr(i, t, e) {
  const s = i.canvas, n = s && di(s);
  if (!n)
    return;
  const o = Vs((r, l) => {
    const c = n.clientWidth;
    e(r, l), c < n.clientWidth && e();
  }, window), a = new ResizeObserver((r) => {
    const l = r[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return a.observe(n), Qa(i, o), a;
}
function We(i, t, e) {
  e && e.disconnect(), t === "resize" && Ja(i);
}
function er(i, t, e) {
  const s = i.canvas, n = Vs((o) => {
    i.ctx !== null && e(qa(o, i));
  }, i);
  return Ka(s, t, n), n;
}
class ir extends rn {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (Ua(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[be])
      return !1;
    const s = e[be].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const a = s[o];
      L(a) ? e.removeAttribute(o) : e.setAttribute(o, a);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[be], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), a = {
      attach: Ga,
      detach: Za,
      resize: tr
    }[e] || er;
    n[e] = a(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: We,
      detach: We,
      resize: We
    }[e] || Xa)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return ta(t, e, s, n);
  }
  isAttached(t) {
    const e = t && di(t);
    return !!(e && e.isConnected);
  }
}
function sr(i) {
  return !hi() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? $a : ir;
}
class Ft {
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
    return we(this.x) && we(this.y);
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
function nr(i, t) {
  const e = i.options.ticks, s = or(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? rr(t) : [], a = o.length, r = o[0], l = o[a - 1], c = [];
  if (a > n)
    return lr(t, c, o, a / n), c;
  const h = ar(o, t, n);
  if (a > 0) {
    let d, f;
    const u = a > 1 ? Math.round((l - r) / (a - 1)) : null;
    for (de(t, c, h, L(u) ? 0 : r - u, r), d = 0, f = a - 1; d < f; d++)
      de(t, c, h, o[d], o[d + 1]);
    return de(t, c, h, l, L(u) ? t.length : l + u), c;
  }
  return de(t, c, h), c;
}
function or(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function ar(i, t, e) {
  const s = cr(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = ro(s);
  for (let a = 0, r = o.length - 1; a < r; a++) {
    const l = o[a];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function rr(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function lr(i, t, e, s) {
  let n = 0, o = e[0], a;
  for (s = Math.ceil(s), a = 0; a < i.length; a++)
    a === o && (t.push(i[a]), n++, o = e[n * s]);
}
function de(i, t, e, s, n) {
  const o = D(s, 0), a = Math.min(D(n, i.length), i.length);
  let r = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    r++, h = Math.round(o + r * e);
  for (c = Math.max(o, 0); c < a; c++)
    c === h && (t.push(i[c]), r++, h = Math.round(o + r * e));
}
function cr(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const hr = (i) => i === "left" ? "right" : i === "right" ? "left" : i, Qi = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, Ji = (i, t) => Math.min(t || i, i);
function ts(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function dr(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, a = i._endPixel, r = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, a - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - r || l > a + r)))
    return l;
}
function fr(i, t) {
  T(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function Vt(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function es(i, t) {
  if (!i.display)
    return 0;
  const e = H(i.font, t), s = X(i.padding);
  return (E(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function ur(i, t) {
  return Lt(i, {
    scale: t,
    type: "scale"
  });
}
function gr(i, t, e) {
  return Lt(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function pr(i, t, e) {
  let s = ni(i);
  return (e && t !== "right" || !e && t === "right") && (s = hr(s)), s;
}
function mr(i, t, e, s) {
  const { top: n, left: o, bottom: a, right: r, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, f, u, m;
  const g = a - n, p = r - o;
  if (i.isHorizontal()) {
    if (u = B(s, o, r), O(e)) {
      const b = Object.keys(e)[0], x = e[b];
      m = h[b].getPixelForValue(x) + g - t;
    } else e === "center" ? m = (c.bottom + c.top) / 2 + g - t : m = Qi(i, e, t);
    f = r - o;
  } else {
    if (O(e)) {
      const b = Object.keys(e)[0], x = e[b];
      u = h[b].getPixelForValue(x) - p + t;
    } else e === "center" ? u = (c.left + c.right) / 2 - p + t : u = Qi(i, e, t);
    m = B(s, a, n), d = e === "left" ? -q : q;
  }
  return {
    titleX: u,
    titleY: m,
    maxWidth: f,
    rotation: d
  };
}
class It extends Ft {
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
    return t = Q(t, Number.POSITIVE_INFINITY), e = Q(e, Number.NEGATIVE_INFINITY), s = Q(s, Number.POSITIVE_INFINITY), n = Q(n, Number.NEGATIVE_INFINITY), {
      min: Q(t, s),
      max: Q(e, n),
      minDefined: K(t),
      maxDefined: K(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), a;
    if (n && o)
      return {
        min: e,
        max: s
      };
    const r = this.getMatchingVisibleMetas();
    for (let l = 0, c = r.length; l < c; ++l)
      a = r[l].controller.getMinMax(this, t), n || (e = Math.min(e, a.min)), o || (s = Math.max(s, a.max));
    return e = o && e > s ? s : e, s = n && e > s ? e : s, {
      min: Q(e, Q(s, e)),
      max: Q(s, Q(e, s))
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
    F(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, s) {
    const { beginAtZero: n, grace: o, ticks: a } = this.options, r = a.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Ho(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? ts(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = nr(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    F(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    F(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    F(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), F(this.options[t], [
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
    F(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = F(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    F(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    F(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = Ji(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let a = n, r, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, f = h.highest.height, u = G(this.chart.width - d, 0, this.maxWidth);
    r = t.offset ? this.maxWidth / s : u / (s - 1), d + 6 > r && (r = u / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Vt(t.grid) - e.padding - es(t.title, this.chart.options.font), c = Math.sqrt(d * d + f * f), a = fo(Math.min(Math.asin(G((h.highest.height + 6) / r, -1, 1)), Math.asin(G(l / c, -1, 1)) - Math.asin(G(f / c, -1, 1)))), a = Math.max(n, Math.min(o, a))), this.labelRotation = a;
  }
  afterCalculateLabelRotation() {
    F(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    F(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, a = this._isVisible(), r = this.isHorizontal();
    if (a) {
      const l = es(n, e.options.font);
      if (r ? (t.width = this.maxWidth, t.height = Vt(o) + l) : (t.height = this.maxHeight, t.width = Vt(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: f } = this._getLabelSizes(), u = s.padding * 2, m = _t(this.labelRotation), g = Math.cos(m), p = Math.sin(m);
        if (r) {
          const b = s.mirror ? 0 : p * d.width + g * f.height;
          t.height = Math.min(this.maxHeight, t.height + b + u);
        } else {
          const b = s.mirror ? 0 : g * d.width + p * f.height;
          t.width = Math.min(this.maxWidth, t.width + b + u);
        }
        this._calculatePadding(c, h, p, g);
      }
    }
    this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: a }, position: r } = this.options, l = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0, u = 0;
      l ? c ? (f = n * t.width, u = s * e.height) : (f = s * t.height, u = n * e.width) : o === "start" ? u = e.width : o === "end" ? f = t.width : o !== "inner" && (f = t.width / 2, u = e.width / 2), this.paddingLeft = Math.max((f - h + a) * this.width / (this.width - h), 0), this.paddingRight = Math.max((u - d + a) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + a, this.paddingBottom = d + a;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    F(this.options.afterFit, [
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
      L(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = ts(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, a = [], r = [], l = Math.floor(e / Ji(e, s));
    let c = 0, h = 0, d, f, u, m, g, p, b, x, _, v, y;
    for (d = 0; d < e; d += l) {
      if (m = t[d].label, g = this._resolveTickFontOptions(d), n.font = p = g.string, b = o[p] = o[p] || {
        data: {},
        gc: []
      }, x = g.lineHeight, _ = v = 0, !L(m) && !E(m))
        _ = Ti(n, b.data, b.gc, _, m), v = x;
      else if (E(m))
        for (f = 0, u = m.length; f < u; ++f)
          y = m[f], !L(y) && !E(y) && (_ = Ti(n, b.data, b.gc, _, y), v += x);
      a.push(_), r.push(v), c = Math.max(_, c), h = Math.max(v, h);
    }
    fr(o, e);
    const k = a.indexOf(c), S = r.indexOf(h), w = (M) => ({
      width: a[M] || 0,
      height: r[M] || 0
    });
    return {
      first: w(0),
      last: w(e - 1),
      widest: w(k),
      highest: w(S),
      widths: a,
      heights: r
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
    return mo(this._alignToPixels ? mt(this.chart, e, 0) : e);
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
      return s.$context || (s.$context = gr(this.getContext(), t, s));
    }
    return this.$context || (this.$context = ur(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = _t(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), a = t.autoSkipPadding || 0, r = o ? o.widest.width + a : 0, l = o ? o.highest.height + a : 0;
    return this.isHorizontal() ? l * s > r * n ? r / s : l / n : l * n < r * s ? l / s : r / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: a, border: r } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), f = Vt(o), u = [], m = r.setContext(this.getContext()), g = m.display ? m.width : 0, p = g / 2, b = function(z) {
      return mt(s, z, g);
    };
    let x, _, v, y, k, S, w, M, A, P, C, W;
    if (a === "top")
      x = b(this.bottom), S = this.bottom - f, M = x - p, P = b(t.top) + p, W = t.bottom;
    else if (a === "bottom")
      x = b(this.top), P = t.top, W = b(t.bottom) - p, S = x + p, M = this.top + f;
    else if (a === "left")
      x = b(this.right), k = this.right - f, w = x - p, A = b(t.left) + p, C = t.right;
    else if (a === "right")
      x = b(this.left), A = t.left, C = b(t.right) - p, k = x + p, w = this.left + f;
    else if (e === "x") {
      if (a === "center")
        x = b((t.top + t.bottom) / 2 + 0.5);
      else if (O(a)) {
        const z = Object.keys(a)[0], $ = a[z];
        x = b(this.chart.scales[z].getPixelForValue($));
      }
      P = t.top, W = t.bottom, S = x + p, M = S + f;
    } else if (e === "y") {
      if (a === "center")
        x = b((t.left + t.right) / 2);
      else if (O(a)) {
        const z = Object.keys(a)[0], $ = a[z];
        x = b(this.chart.scales[z].getPixelForValue($));
      }
      k = x - p, w = k - f, A = t.left, C = t.right;
    }
    const Z = D(n.ticks.maxTicksLimit, d), I = Math.max(1, Math.ceil(d / Z));
    for (_ = 0; _ < d; _ += I) {
      const z = this.getContext(_), $ = o.setContext(z), ee = r.setContext(z), ie = $.lineWidth, kt = $.color, se = ee.dash || [], wt = ee.dashOffset, Rt = $.tickWidth, ft = $.tickColor, Et = $.tickBorderDash || [], ut = $.tickBorderDashOffset;
      v = dr(this, _, l), v !== void 0 && (y = mt(s, v, ie), c ? k = w = A = C = y : S = M = P = W = y, u.push({
        tx1: k,
        ty1: S,
        tx2: w,
        ty2: M,
        x1: A,
        y1: P,
        x2: C,
        y2: W,
        width: ie,
        color: kt,
        borderDash: se,
        borderDashOffset: wt,
        tickWidth: Rt,
        tickColor: ft,
        tickBorderDash: Et,
        tickBorderDashOffset: ut
      }));
    }
    return this._ticksLength = d, this._borderValue = x, u;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, a = this.isHorizontal(), r = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, f = Vt(s.grid), u = f + h, m = d ? -h : u, g = -_t(this.labelRotation), p = [];
    let b, x, _, v, y, k, S, w, M, A, P, C, W = "middle";
    if (n === "top")
      k = this.bottom - m, S = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      k = this.top + m, S = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const I = this._getYAxisLabelAlignment(f);
      S = I.textAlign, y = I.x;
    } else if (n === "right") {
      const I = this._getYAxisLabelAlignment(f);
      S = I.textAlign, y = I.x;
    } else if (e === "x") {
      if (n === "center")
        k = (t.top + t.bottom) / 2 + u;
      else if (O(n)) {
        const I = Object.keys(n)[0], z = n[I];
        k = this.chart.scales[I].getPixelForValue(z) + u;
      }
      S = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        y = (t.left + t.right) / 2 - u;
      else if (O(n)) {
        const I = Object.keys(n)[0], z = n[I];
        y = this.chart.scales[I].getPixelForValue(z);
      }
      S = this._getYAxisLabelAlignment(f).textAlign;
    }
    e === "y" && (l === "start" ? W = "top" : l === "end" && (W = "bottom"));
    const Z = this._getLabelSizes();
    for (b = 0, x = r.length; b < x; ++b) {
      _ = r[b], v = _.label;
      const I = o.setContext(this.getContext(b));
      w = this.getPixelForTick(b) + o.labelOffset, M = this._resolveTickFontOptions(b), A = M.lineHeight, P = E(v) ? v.length : 1;
      const z = P / 2, $ = I.color, ee = I.textStrokeColor, ie = I.textStrokeWidth;
      let kt = S;
      a ? (y = w, S === "inner" && (b === x - 1 ? kt = this.options.reverse ? "left" : "right" : b === 0 ? kt = this.options.reverse ? "right" : "left" : kt = "center"), n === "top" ? c === "near" || g !== 0 ? C = -P * A + A / 2 : c === "center" ? C = -Z.highest.height / 2 - z * A + A : C = -Z.highest.height + A / 2 : c === "near" || g !== 0 ? C = A / 2 : c === "center" ? C = Z.highest.height / 2 - z * A : C = Z.highest.height - P * A, d && (C *= -1), g !== 0 && !I.showLabelBackdrop && (y += A / 2 * Math.sin(g))) : (k = w, C = (1 - P) * A / 2);
      let se;
      if (I.showLabelBackdrop) {
        const wt = X(I.backdropPadding), Rt = Z.heights[b], ft = Z.widths[b];
        let Et = C - wt.top, ut = 0 - wt.left;
        switch (W) {
          case "middle":
            Et -= Rt / 2;
            break;
          case "bottom":
            Et -= Rt;
            break;
        }
        switch (S) {
          case "center":
            ut -= ft / 2;
            break;
          case "right":
            ut -= ft;
            break;
          case "inner":
            b === x - 1 ? ut -= ft : b > 0 && (ut -= ft / 2);
            break;
        }
        se = {
          left: ut,
          top: Et,
          width: ft + wt.width,
          height: Rt + wt.height,
          color: I.backdropColor
        };
      }
      p.push({
        label: v,
        font: M,
        textOffset: C,
        options: {
          rotation: g,
          color: $,
          strokeColor: ee,
          strokeWidth: ie,
          textAlign: kt,
          textBaseline: W,
          translation: [
            y,
            k
          ],
          backdrop: se
        }
      });
    }
    return p;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-_t(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, a = this._getLabelSizes(), r = t + o, l = a.widest.width;
    let c, h;
    return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - r, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
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
    const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: a } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, a), t.restore());
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
    let o, a;
    const r = (l, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display)
      for (o = 0, a = n.length; o < a; ++o) {
        const l = n[o];
        e.drawOnChartArea && r({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && r({
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
    const { chart: t, ctx: e, options: { border: s, grid: n } } = this, o = s.setContext(this.getContext()), a = s.display ? o.width : 0;
    if (!a)
      return;
    const r = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, d, f;
    this.isHorizontal() ? (c = mt(t, this.left, a) - a / 2, h = mt(t, this.right, r) + r / 2, d = f = l) : (d = mt(t, this.top, a) - a / 2, f = mt(t, this.bottom, r) + r / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, f), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && oi(s, n);
    const o = this.getLabelItems(t);
    for (const a of o) {
      const r = a.options, l = a.font, c = a.label, h = a.textOffset;
      Qt(s, c, 0, h, l, r);
    }
    n && ai(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = H(s.font), a = X(s.padding), r = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || O(e) ? (l += a.bottom, E(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += a.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: f } = mr(this, l, e, r);
    Qt(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: f,
      textAlign: pr(r, e, n),
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
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = D(t.grid && t.grid.z, -1), n = D(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== It.prototype.draw ? [
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
    let o, a;
    for (o = 0, a = e.length; o < a; ++o) {
      const r = e[o];
      r[s] === this.id && (!t || r.type === t) && n.push(r);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return H(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class fe {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    _r(e) && (s = this.register(e));
    const n = this.items, o = t.id, a = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, br(t, a, s), this.override && R.override(t.id, t.overrides)), a;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in R[n] && (delete R[n][s], this.override && delete vt[s]);
  }
}
function br(i, t, e) {
  const s = Gt(/* @__PURE__ */ Object.create(null), [
    e ? R.get(e) : {},
    R.get(t),
    i.defaults
  ]);
  R.set(t, s), i.defaultRoutes && xr(t, i.defaultRoutes), i.descriptors && R.describe(t, i.descriptors);
}
function xr(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), a = t[e].split("."), r = a.pop(), l = a.join(".");
    R.route(o, n, l, r);
  });
}
function _r(i) {
  return "id" in i && "defaults" in i;
}
class yr {
  constructor() {
    this.controllers = new fe(sn, "datasets", !0), this.elements = new fe(Ft, "elements"), this.plugins = new fe(Object, "plugins"), this.scales = new fe(It, "scales"), this._typedRegistries = [
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
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : T(n, (a) => {
        const r = s || this._getRegistryForType(a);
        this._exec(t, r, a);
      });
    });
  }
  _exec(t, e, s) {
    const n = ii(t);
    F(s["before" + n], [], s), e[t](s), F(s["after" + n], [], s);
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
var tt = /* @__PURE__ */ new yr();
class vr {
  constructor() {
    this._init = void 0;
  }
  notify(t, e, s, n) {
    if (e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")), this._init === void 0)
      return;
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), a = this._notify(o, t, e, s);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall"), this._init = void 0), a;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const o of t) {
      const a = o.plugin, r = a[s], l = [
        e,
        n,
        o.options
      ];
      if (F(r, l, a) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    L(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = D(s.options && s.options.plugins, {}), o = kr(s);
    return n === !1 && !e ? [] : Sr(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, a) => o.filter((r) => !a.some((l) => r.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function kr(i) {
  const t = {}, e = [], s = Object.keys(tt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(tt.getPlugin(s[o]));
  const n = i.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    e.indexOf(a) === -1 && (e.push(a), t[a.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function wr(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Sr(i, { plugins: t, localIds: e }, s, n) {
  const o = [], a = i.getContext();
  for (const r of t) {
    const l = r.id, c = wr(s[l], n);
    c !== null && o.push({
      plugin: r,
      options: Mr(i.config, {
        plugin: r,
        local: e[l]
      }, c, a)
    });
  }
  return o;
}
function Mr(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), a = i.getOptionScopes(s, o);
  return e && t.defaults && a.push(t.defaults), i.createResolver(a, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Ge(i, t) {
  const e = R.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Pr(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function Or(i, t) {
  return i === t ? "_index_" : "_value_";
}
function is(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function Dr(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Ze(i, ...t) {
  if (is(i))
    return i;
  for (const e of t) {
    const s = e.axis || Dr(e.position) || i.length > 1 && is(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function ss(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function Cr(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return ss(i, "x", e[0]) || ss(i, "y", e[0]);
  }
  return {};
}
function Tr(i, t) {
  const e = vt[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = Ge(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((a) => {
    const r = s[a];
    if (!O(r))
      return console.error(`Invalid scale configuration for scale: ${a}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
    const l = Ze(a, r, Cr(a, i), R.scales[r.type]), c = Or(l, n), h = e.scales || {};
    o[a] = Ut(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      r,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((a) => {
    const r = a.type || i.type, l = a.indexAxis || Ge(r, t), h = (vt[r] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const f = Pr(d, l), u = a[f + "AxisID"] || f;
      o[u] = o[u] || /* @__PURE__ */ Object.create(null), Ut(o[u], [
        {
          axis: f
        },
        s[u],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((a) => {
    const r = o[a];
    Ut(r, [
      R.scales[r.type],
      R.scale
    ]);
  }), o;
}
function hn(i) {
  const t = i.options || (i.options = {});
  t.plugins = D(t.plugins, {}), t.scales = Tr(i, t);
}
function dn(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function Ar(i) {
  return i = i || {}, i.data = dn(i.data), hn(i), i;
}
const ns = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Set();
function ue(i, t) {
  let e = ns.get(i);
  return e || (e = t(), ns.set(i, e), fn.add(e)), e;
}
const Wt = (i, t, e) => {
  const s = Tt(t, e);
  s !== void 0 && i.add(s);
};
class Lr {
  constructor(t) {
    this._config = Ar(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = dn(t);
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
    this.clearCache(), hn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return ue(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return ue(`${t}.transition.${e}`, () => [
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
    return ue(`${t}-${e}`, () => [
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
    return ue(`${s}-plugin-${e}`, () => [
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
    const { options: n, type: o } = this, a = this._cachedScopes(t, s), r = a.get(e);
    if (r)
      return r;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => Wt(l, t, d))), h.forEach((d) => Wt(l, n, d)), h.forEach((d) => Wt(l, vt[o] || {}, d)), h.forEach((d) => Wt(l, R, d)), h.forEach((d) => Wt(l, qe, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), fn.has(e) && a.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      vt[e] || {},
      R.datasets[e] || {},
      {
        type: e
      },
      R,
      qe
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: a, subPrefixes: r } = os(this._resolverCache, t, n);
    let l = a;
    if (Ir(a, e)) {
      o.$shared = !1, s = dt(s) ? s() : s;
      const c = this.createResolver(t, s, r);
      l = At(a, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = os(this._resolverCache, t, s);
    return O(e) ? At(o, e, void 0, n) : o;
  }
}
function os(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: ri(t, e),
    subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const Fr = (i) => O(i) && Object.getOwnPropertyNames(i).some((t) => dt(i[t]));
function Ir(i, t) {
  const { isScriptable: e, isIndexable: s } = Xs(i);
  for (const n of t) {
    const o = e(n), a = s(n), r = (a || o) && i[n];
    if (o && (dt(r) || Fr(r)) || a && E(r))
      return !0;
  }
  return !1;
}
var Rr = "4.5.1";
const Er = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function as(i, t) {
  return i === "top" || i === "bottom" || Er.indexOf(i) === -1 && t === "x";
}
function rs(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function ls(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), F(e && e.onComplete, [
    i
  ], t);
}
function zr(i) {
  const t = i.chart, e = t.options.animation;
  F(e && e.onProgress, [
    i
  ], t);
}
function un(i) {
  return hi() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const xe = {}, cs = (i) => {
  const t = un(i);
  return Object.values(xe).filter((e) => e.canvas === t).pop();
};
function Br(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const a = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = a);
    }
  }
}
function Hr(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
let Te = class {
  static defaults = R;
  static instances = xe;
  static overrides = vt;
  static registry = tt;
  static version = Rr;
  static getChart = cs;
  static register(...t) {
    tt.add(...t), hs();
  }
  static unregister(...t) {
    tt.remove(...t), hs();
  }
  constructor(t, e) {
    const s = this.config = new Lr(e), n = un(t), o = cs(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const a = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || sr(n))(), this.platform.updateConfig(s);
    const r = this.platform.acquireContext(n, a.aspectRatio), l = r && r.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Jn(), this.ctx = r, this.canvas = l, this.width = h, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new vr(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = yo((d) => this.update(d), a.resizeDelay || 0), this._dataChanges = [], xe[this.id] = this, !r || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    it.listen(this, "complete", ls), it.listen(this, "progress", zr), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return L(t) ? e && o ? o : n ? s / n : null : t;
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
    return tt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ri(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Ai(this.canvas, this.ctx), this;
  }
  stop() {
    return it.stop(this), this;
  }
  resize(t, e) {
    it.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, a = this.platform.getMaximumSize(n, t, e, o), r = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, Ri(this, r, !0) && (this.notifyPlugins("resize", {
      size: a
    }), F(s.onResize, [
      this,
      a
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    T(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((a, r) => (a[r] = !1, a), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((a) => {
      const r = e[a], l = Ze(a, r), c = l === "r", h = l === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), T(o, (a) => {
      const r = a.options, l = r.id, c = Ze(l, r), h = D(r.type, a.dtype);
      (r.position === void 0 || as(r.position, c) !== as(a.dposition)) && (r.position = a.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const f = tt.getScale(h);
        d = new f({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(r, t);
    }), T(n, (a, r) => {
      a || delete s[r];
    }), T(s, (a) => {
      U.configure(this, a, a.options), U.addBox(this, a);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(rs("order", "index"));
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
      let a = this.getDatasetMeta(s);
      const r = o.type || this.config.type;
      if (a.type && a.type !== r && (this._destroyDatasetMeta(s), a = this.getDatasetMeta(s)), a.type = r, a.indexAxis = o.indexAxis || Ge(r, this.options), a.order = o.order || 0, a.index = s, a.label = "" + o.label, a.visible = this.isDatasetVisible(s), a.controller)
        a.controller.updateIndex(s), a.controller.linkScales();
      else {
        const l = tt.getController(r), { datasetElementType: c, dataElementType: h } = R.datasets[r];
        Object.assign(l, {
          dataElementType: tt.getElement(h),
          datasetElementType: c && tt.getElement(c)
        }), a.controller = new l(this, s), t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    T(this.data.datasets, (t, e) => {
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
    let a = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), f = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(f), a = Math.max(+d.getMaxOverflow(), a);
    }
    a = this._minPadding = s.layout.autoPadding ? a : 0, this._updateLayout(a), n || T(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(rs("z", "_idx"));
    const { _active: r, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
  }
  _updateScales() {
    T(this.scales, (t) => {
      U.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!vi(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const a = s === "_removeElements" ? -o : o;
      Br(t, n, a);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((a) => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!vi(n, s(o)))
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
    U.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], T(this.boxes, (n) => {
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
        this._updateDataset(e, dt(t) ? t({
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
    }) !== !1 && (it.has(this) ? this.attached && !it.running(this) && it.start(this) : (this.draw(), ls({
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
      const a = e[n];
      (!t || a.visible) && s.push(a);
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
    }, n = oa(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && oi(e, n), t.controller.draw(), n && ai(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return Ys(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Ea.modes[e];
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
    return this.$context || (this.$context = Lt(null, {
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
    const n = s ? "show" : "hide", o = this.getDatasetMeta(t), a = o.controller._resolveAnimations(void 0, n);
    Zt(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), a.update(o, {
      visible: s
    }), this.update((r) => r.datasetIndex === t ? n : void 0));
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
    for (this.stop(), it.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Ai(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete xe[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, s = (o, a) => {
      e.addEventListener(this, o, a), t[o] = a;
    }, n = (o, a, r) => {
      o.offsetX = a, o.offsetY = r, this._eventHandler(o);
    };
    T(this.options.events, (o) => s(o, n));
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
    let a;
    const r = () => {
      n("attach", r), this.attached = !0, this.resize(), s("resize", o), s("detach", a);
    };
    a = () => {
      this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", r);
    }, e.isAttached(this.canvas) ? r() : a();
  }
  unbindEvents() {
    T(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, T(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let o, a, r, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), r = 0, l = t.length; r < l; ++r) {
      a = t[r];
      const c = a && this.getDatasetMeta(a.datasetIndex).controller;
      c && c[n + "HoverStyle"](a.element, a.datasetIndex, a.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], s = t.map(({ datasetIndex: o, index: a }) => {
      const r = this.getDatasetMeta(o);
      if (!r)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: r.data[a],
        index: a
      };
    });
    !ye(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), a = o(e, t), r = s ? t : o(t, e);
    a.length && this.updateHoverStyle(a, n.mode, !1), r.length && n.mode && this.updateHoverStyle(r, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, n = (a) => (a.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1)
      return;
    const o = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    const { _active: n = [], options: o } = this, a = e, r = this._getActiveElements(t, n, s, a), l = oo(t), c = Hr(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, F(o.onHover, [
      t,
      r,
      this
    ], this), l && F(o.onClick, [
      t,
      r,
      this
    ], this));
    const h = !ye(r, n);
    return (h || e) && (this._active = r, this._updateHoverStyles(r, n, e)), this._lastEvent = c, h;
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
function hs() {
  return T(Te.instances, (i) => i._plugins.invalidate());
}
function gn(i, t) {
  const { x: e, y: s, base: n, width: o, height: a } = i.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let r, l, c, h, d;
  return i.horizontal ? (d = a / 2, r = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, r = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), {
    left: r,
    top: c,
    right: l,
    bottom: h
  };
}
function rt(i, t, e, s) {
  return i ? 0 : G(t, e, s);
}
function Vr(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = Ks(s);
  return {
    t: rt(n.top, o.top, 0, e),
    r: rt(n.right, o.right, 0, t),
    b: rt(n.bottom, o.bottom, 0, e),
    l: rt(n.left, o.left, 0, t)
  };
}
function Wr(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = Dt(n), a = Math.min(t, e), r = i.borderSkipped, l = s || O(n);
  return {
    topLeft: rt(!l || r.top || r.left, o.topLeft, 0, a),
    topRight: rt(!l || r.top || r.right, o.topRight, 0, a),
    bottomLeft: rt(!l || r.bottom || r.left, o.bottomLeft, 0, a),
    bottomRight: rt(!l || r.bottom || r.right, o.bottomRight, 0, a)
  };
}
function Nr(i) {
  const t = gn(i), e = t.right - t.left, s = t.bottom - t.top, n = Vr(i, e / 2, s / 2), o = Wr(i, e / 2, s / 2);
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
function Ne(i, t, e, s) {
  const n = t === null, o = e === null, r = i && !(n && o) && gn(i, s);
  return r && (n || Ot(t, r.left, r.right)) && (o || Ot(e, r.top, r.bottom));
}
function jr(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function $r(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function je(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, a = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + o,
    h: i.h + a,
    radius: i.radius
  };
}
class Yr extends Ft {
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
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: a } = Nr(this), r = jr(a.radius) ? Se : $r;
    t.save(), (a.w !== o.w || a.h !== o.h) && (t.beginPath(), r(t, je(a, e, o)), t.clip(), r(t, je(o, -e, a)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), r(t, je(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return Ne(this, t, e, s);
  }
  inXRange(t, e) {
    return Ne(this, t, null, e);
  }
  inYRange(t, e) {
    return Ne(this, null, t, e);
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
const ds = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, Ur = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class fs extends Ft {
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
    let e = F(t.generateLabels, [
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
    const s = t.labels, n = H(s.font), o = n.size, a = this._computeTitleHeight(), { boxWidth: r, itemHeight: l } = ds(s, o);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(a, o, r, l) + 10) : (h = this.maxHeight, c = this._fitCols(a, n, r, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = n + r;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let f = -1, u = -h;
    return this.legendItems.forEach((m, g) => {
      const p = s + e / 2 + o.measureText(m.text).width;
      (g === 0 || c[c.length - 1] + p + 2 * r > a) && (d += h, c[c.length - (g > 0 ? 0 : 1)] = 0, u += h, f++), l[g] = {
        left: 0,
        top: u,
        row: f,
        width: p,
        height: n
      }, c[c.length - 1] += p + r;
    }), d;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = a - t;
    let d = r, f = 0, u = 0, m = 0, g = 0;
    return this.legendItems.forEach((p, b) => {
      const { itemWidth: x, itemHeight: _ } = Kr(s, e, o, p, n);
      b > 0 && u + _ + 2 * r > h && (d += f + r, c.push({
        width: f,
        height: u
      }), m += f + r, g++, f = u = 0), l[b] = {
        left: m,
        top: u,
        col: g,
        width: x,
        height: _
      }, f = Math.max(f, x), u += _ + r;
    }), d += f, c.push({
      width: f,
      height: u
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, a = Ct(o, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0, l = B(s, this.left + n, this.right - this.lineWidths[r]);
      for (const c of e)
        r !== c.row && (r = c.row, l = B(s, this.left + n, this.right - this.lineWidths[r])), c.top += this.top + t + n, c.left = a.leftForLtr(a.x(l), c.width), l += c.width + n;
    } else {
      let r = 0, l = B(s, this.top + t + n, this.bottom - this.columnSizes[r].height);
      for (const c of e)
        c.col !== r && (r = c.col, l = B(s, this.top + t + n, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + n, c.left = a.leftForLtr(a.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      oi(t, this), this._draw(), ai(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: a } = t, r = R.color, l = Ct(t.rtl, this.left, this.width), c = H(a.font), { padding: h } = a, d = c.size, f = d / 2;
    let u;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: m, boxHeight: g, itemHeight: p } = ds(a, d), b = function(k, S, w) {
      if (isNaN(m) || m <= 0 || isNaN(g) || g < 0)
        return;
      n.save();
      const M = D(w.lineWidth, 1);
      if (n.fillStyle = D(w.fillStyle, r), n.lineCap = D(w.lineCap, "butt"), n.lineDashOffset = D(w.lineDashOffset, 0), n.lineJoin = D(w.lineJoin, "miter"), n.lineWidth = M, n.strokeStyle = D(w.strokeStyle, r), n.setLineDash(D(w.lineDash, [])), a.usePointStyle) {
        const A = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: w.pointStyle,
          rotation: w.rotation,
          borderWidth: M
        }, P = l.xPlus(k, m / 2), C = S + f;
        $s(n, A, P, C, a.pointStyleWidth && m);
      } else {
        const A = S + Math.max((d - g) / 2, 0), P = l.leftForLtr(k, m), C = Dt(w.borderRadius);
        n.beginPath(), Object.values(C).some((W) => W !== 0) ? Se(n, {
          x: P,
          y: A,
          w: m,
          h: g,
          radius: C
        }) : n.rect(P, A, m, g), n.fill(), M !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(k, S, w) {
      Qt(n, w.text, k, S + p / 2, c, {
        strikethrough: w.hidden,
        textAlign: l.textAlign(w.textAlign)
      });
    }, _ = this.isHorizontal(), v = this._computeTitleHeight();
    _ ? u = {
      x: B(o, this.left + h, this.right - s[0]),
      y: this.top + h + v,
      line: 0
    } : u = {
      x: this.left + h,
      y: B(o, this.top + v + h, this.bottom - e[0].height),
      line: 0
    }, Qs(this.ctx, t.textDirection);
    const y = p + h;
    this.legendItems.forEach((k, S) => {
      n.strokeStyle = k.fontColor, n.fillStyle = k.fontColor;
      const w = n.measureText(k.text).width, M = l.textAlign(k.textAlign || (k.textAlign = a.textAlign)), A = m + f + w;
      let P = u.x, C = u.y;
      l.setWidth(this.width), _ ? S > 0 && P + A + h > this.right && (C = u.y += y, u.line++, P = u.x = B(o, this.left + h, this.right - s[u.line])) : S > 0 && C + y > this.bottom && (P = u.x = P + e[u.line].width + h, u.line++, C = u.y = B(o, this.top + v + h, this.bottom - e[u.line].height));
      const W = l.x(P);
      if (b(W, C, k), P = vo(M, P + m + f, _ ? P + A : this.right, t.rtl), x(l.x(P), C, k), _)
        u.x += A + h;
      else if (typeof k.text != "string") {
        const Z = c.lineHeight;
        u.y += pn(k, Z) + h;
      } else
        u.y += y;
    }), Js(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = H(e.font), n = X(e.padding);
    if (!e.display)
      return;
    const o = Ct(t.rtl, this.left, this.width), a = this.ctx, r = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), h = this.top + c, d = B(t.align, d, this.right - f);
    else {
      const m = this.columnSizes.reduce((g, p) => Math.max(g, p.height), 0);
      h = c + B(t.align, this.top, this.bottom - m - t.labels.padding - this._computeTitleHeight());
    }
    const u = B(r, d, d + f);
    a.textAlign = o.textAlign(ni(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = s.string, Qt(a, e.text, u, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = H(t.font), s = X(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Ot(t, this.left, this.right) && Ot(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Ot(t, n.left, n.left + n.width) && Ot(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!Gr(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = Ur(n, s);
      n && !o && F(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && F(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && F(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function Kr(i, t, e, s, n) {
  const o = Xr(s, i, t, e), a = qr(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: a
  };
}
function Xr(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, a) => o.length > a.length ? o : a)), t + e.size / 2 + s.measureText(n).width;
}
function qr(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = pn(t, e)), s;
}
function pn(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function Gr(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var Zr = {
  id: "legend",
  _element: fs,
  start(i, t, e) {
    const s = i.legend = new fs({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    U.configure(i, s, e), U.addBox(i, s);
  },
  stop(i) {
    U.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    U.configure(i, s, e), s.options = e;
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
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o, useBorderRadius: a, borderRadius: r } } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = X(c.borderWidth);
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
            borderRadius: a && (r || c.borderRadius),
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
class mn extends Ft {
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
    const n = E(s.text) ? s.text.length : 1;
    this._padding = X(s.padding);
    const o = n * H(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: a } = this, r = a.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = B(r, s, o), d = e + t, c = o - s) : (a.position === "left" ? (h = s + t, d = B(r, n, e), l = V * -0.5) : (h = o - t, d = B(r, e, n), l = V * 0.5), c = n - e), {
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
    const s = H(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: a, titleY: r, maxWidth: l, rotation: c } = this._drawArgs(o);
    Qt(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: ni(e.align),
      textBaseline: "middle",
      translation: [
        a,
        r
      ]
    });
  }
}
function Qr(i, t) {
  const e = new mn({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  U.configure(i, e, t), U.addBox(i, e), i.titleBlock = e;
}
var Jr = {
  id: "title",
  _element: mn,
  start(i, t, e) {
    Qr(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    U.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    U.configure(i, s, e), s.options = e;
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
const Yt = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = /* @__PURE__ */ new Set(), n = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const r = i[t].element;
      if (r && r.hasValue()) {
        const l = r.tooltipPosition();
        s.add(l.x), n += l.y, ++o;
      }
    }
    return o === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((r, l) => r + l) / s.size,
      y: n / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, a, r;
    for (o = 0, a = i.length; o < a; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = go(t, c);
        h < n && (n = h, r = l);
      }
    }
    if (r) {
      const l = r.tooltipPosition();
      e = l.x, s = l.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function J(i, t) {
  return t && (E(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function st(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function tl(i, t) {
  const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: a, value: r } = o.getLabelAndValue(n);
  return {
    chart: i,
    label: a,
    parsed: o.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function us(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: a, boxHeight: r } = t, l = H(t.bodyFont), c = H(t.titleFont), h = H(t.footerFont), d = o.length, f = n.length, u = s.length, m = X(t.padding);
  let g = m.height, p = 0, b = s.reduce((v, y) => v + y.before.length + y.lines.length + y.after.length, 0);
  if (b += i.beforeBody.length + i.afterBody.length, d && (g += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const v = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    g += u * v + (b - u) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  f && (g += t.footerMarginTop + f * h.lineHeight + (f - 1) * t.footerSpacing);
  let x = 0;
  const _ = function(v) {
    p = Math.max(p, e.measureText(v).width + x);
  };
  return e.save(), e.font = c.string, T(i.title, _), e.font = l.string, T(i.beforeBody.concat(i.afterBody), _), x = t.displayColors ? a + 2 + t.boxPadding : 0, T(s, (v) => {
    T(v.before, _), T(v.lines, _), T(v.after, _);
  }), x = 0, e.font = h.string, T(i.footer, _), e.restore(), p += m.width, {
    width: p,
    height: g
  };
}
function el(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function il(i, t, e, s) {
  const { x: n, width: o } = s, a = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + a > t.width || i === "right" && n - o - a < 0)
    return !0;
}
function sl(i, t, e, s) {
  const { x: n, width: o } = e, { width: a, chartArea: { left: r, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= a - o / 2 && (c = "right"), il(c, i, t, e) && (c = "center"), c;
}
function gs(i, t, e) {
  const s = e.yAlign || t.yAlign || el(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || sl(i, t, e, s),
    yAlign: s
  };
}
function nl(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function ol(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function ps(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: a } = i, { xAlign: r, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: u } = Dt(a);
  let m = nl(t, r);
  const g = ol(t, l, c);
  return l === "center" ? r === "left" ? m += c : r === "right" && (m -= c) : r === "left" ? m -= Math.max(h, f) + n : r === "right" && (m += Math.max(d, u) + n), {
    x: G(m, 0, s.width - t.width),
    y: G(g, 0, s.height - t.height)
  };
}
function ge(i, t, e) {
  const s = X(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function ms(i) {
  return J([], st(i));
}
function al(i, t, e) {
  return Lt(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function bs(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const bn = {
  beforeTitle: et,
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
  afterTitle: et,
  beforeBody: et,
  beforeLabel: et,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return L(e) || (t += e), t;
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
  afterLabel: et,
  afterBody: et,
  beforeFooter: et,
  footer: et,
  afterFooter: et
};
function N(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? bn[t].call(e, s) : n;
}
class xs extends Ft {
  static positioners = Yt;
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
    return this.$context || (this.$context = al(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = N(s, "beforeTitle", this, t), o = N(s, "title", this, t), a = N(s, "afterTitle", this, t);
    let r = [];
    return r = J(r, st(n)), r = J(r, st(o)), r = J(r, st(a)), r;
  }
  getBeforeBody(t, e) {
    return ms(N(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return T(t, (o) => {
      const a = {
        before: [],
        lines: [],
        after: []
      }, r = bs(s, o);
      J(a.before, st(N(r, "beforeLabel", this, o))), J(a.lines, N(r, "label", this, o)), J(a.after, st(N(r, "afterLabel", this, o))), n.push(a);
    }), n;
  }
  getAfterBody(t, e) {
    return ms(N(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = N(s, "beforeFooter", this, t), o = N(s, "footer", this, t), a = N(s, "afterFooter", this, t);
    let r = [];
    return r = J(r, st(n)), r = J(r, st(o)), r = J(r, st(a)), r;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], a = [];
    let r = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      r.push(tl(this.chart, e[l]));
    return t.filter && (r = r.filter((h, d, f) => t.filter(h, d, f, s))), t.itemSort && (r = r.sort((h, d) => t.itemSort(h, d, s))), T(r, (h) => {
      const d = bs(t.callbacks, h);
      n.push(N(d, "labelColor", this, h)), o.push(N(d, "labelPointStyle", this, h)), a.push(N(d, "labelTextColor", this, h));
    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r;
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()), n = this._active;
    let o, a = [];
    if (!n.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const r = Yt[s.position].call(this, n, this._eventPosition);
      a = this._createItems(s), this.title = this.getTitle(a, s), this.beforeBody = this.getBeforeBody(a, s), this.body = this.getBody(a, s), this.afterBody = this.getAfterBody(a, s), this.footer = this.getFooter(a, s);
      const l = this._size = us(this, s), c = Object.assign({}, r, l), h = gs(this.chart, s, c), d = ps(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: r.x,
        caretY: r.y
      };
    }
    this._tooltipItems = a, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
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
    const { xAlign: n, yAlign: o } = this, { caretSize: a, cornerRadius: r } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Dt(r), { x: f, y: u } = t, { width: m, height: g } = e;
    let p, b, x, _, v, y;
    return o === "center" ? (v = u + g / 2, n === "left" ? (p = f, b = p - a, _ = v + a, y = v - a) : (p = f + m, b = p + a, _ = v - a, y = v + a), x = p) : (n === "left" ? b = f + Math.max(l, h) + a : n === "right" ? b = f + m - Math.max(c, d) - a : b = this.caretX, o === "top" ? (_ = u, v = _ - a, p = b - a, x = b + a) : (_ = u + g, v = _ + a, p = b + a, x = b - a), y = _), {
      x1: p,
      x2: b,
      x3: x,
      y1: _,
      y2: v,
      y3: y
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let a, r, l;
    if (o) {
      const c = Ct(s.rtl, this.x, this.width);
      for (t.x = ge(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", a = H(s.titleFont), r = s.titleSpacing, e.fillStyle = s.titleColor, e.font = a.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === o && (t.y += s.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const a = this.labelColors[s], r = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, h = H(o.bodyFont), d = ge(this, "left", o), f = n.x(d), u = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, m = e.y + u;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, p = n.leftForLtr(f, c) + c / 2, b = m + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Li(t, g, p, b), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Li(t, g, p, b);
    } else {
      t.lineWidth = O(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
      const g = n.leftForLtr(f, c), p = n.leftForLtr(n.xPlus(f, 1), c - 2), b = Dt(a.borderRadius);
      Object.values(b).some((x) => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Se(t, {
        x: g,
        y: m,
        w: c,
        h: l,
        radius: b
      }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), Se(t, {
        x: p,
        y: m + 1,
        w: c - 2,
        h: l - 2,
        radius: b
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, m, c, l), t.strokeRect(g, m, c, l), t.fillStyle = a.backgroundColor, t.fillRect(p, m + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = H(s.bodyFont);
    let f = d.lineHeight, u = 0;
    const m = Ct(s.rtl, this.x, this.width), g = function(w) {
      e.fillText(w, m.x(t.x + u), t.y + f / 2), t.y += f + o;
    }, p = m.textAlign(a);
    let b, x, _, v, y, k, S;
    for (e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = ge(this, p, s), e.fillStyle = s.bodyColor, T(this.beforeBody, g), u = r && p !== "right" ? a === "center" ? c / 2 + h : c + 2 + h : 0, v = 0, k = n.length; v < k; ++v) {
      for (b = n[v], x = this.labelTextColors[v], e.fillStyle = x, T(b.before, g), _ = b.lines, r && _.length && (this._drawColorBox(e, t, v, m, s), f = Math.max(d.lineHeight, l)), y = 0, S = _.length; y < S; ++y)
        g(_[y]), f = d.lineHeight;
      T(b.after, g);
    }
    u = 0, f = d.lineHeight, T(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let a, r;
    if (o) {
      const l = Ct(s.rtl, this.x, this.width);
      for (t.x = ge(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", a = H(s.footerFont), e.fillStyle = s.footerColor, e.font = a.string, r = 0; r < o; ++r)
        e.fillText(n[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: a } = this, { x: r, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: f, bottomLeft: u, bottomRight: m } = Dt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(r + d, l), a === "top" && this.drawCaret(t, e, s, n), e.lineTo(r + c - f, l), e.quadraticCurveTo(r + c, l, r + c, l + f), a === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(r + c, l + h - m), e.quadraticCurveTo(r + c, l + h, r + c - m, l + h), a === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(r + u, l + h), e.quadraticCurveTo(r, l + h, r, l + h - u), a === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(r, l + d), e.quadraticCurveTo(r, l, r + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const a = Yt[t.position].call(this, this._active, this._eventPosition);
      if (!a)
        return;
      const r = this._size = us(this, t), l = Object.assign({}, a, this._size), c = gs(e, t, l), h = ps(t, l, c, e);
      (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, h));
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
    const a = X(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && r && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Qs(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Js(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active, n = t.map(({ datasetIndex: r, index: l }) => {
      const c = this.chart.getDatasetMeta(r);
      if (!c)
        throw new Error("Cannot find a dataset at index " + r);
      return {
        datasetIndex: r,
        element: c.data[l],
        index: l
      };
    }), o = !ye(s, n), a = this._positionChanged(n, e);
    (o || a) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], a = this._getActiveElements(t, o, e, s), r = this._positionChanged(a, t), l = e || !ye(a, o) || r;
    return l && (this._active = a, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, s, n) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e.filter((r) => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
    const a = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && a.reverse(), a;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: n, options: o } = this, a = Yt[o.position].call(this, t, e);
    return a !== !1 && (s !== a.x || n !== a.y);
  }
}
var rl = {
  id: "tooltip",
  _element: xs,
  positioners: Yt,
  afterInit(i, t, e) {
    e && (i.tooltip = new xs({
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
    callbacks: bn
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
const ll = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function cl(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return ll(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const hl = (i, t) => i === null ? null : G(Math.round(i), 0, t);
function _s(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class dl extends It {
  static id = "category";
  static defaults = {
    ticks: {
      callback: _s
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
    if (L(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : cl(s, t, D(e, t), this._addedLabels), hl(e, s.length - 1);
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
    for (let a = t; a <= e; a++)
      n.push({
        value: a
      });
    return n;
  }
  getLabelForValue(t) {
    return _s.call(this, t);
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
function fl(i, t) {
  const e = [], { bounds: n, step: o, min: a, max: r, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: f } = i, u = o || 1, m = h - 1, { min: g, max: p } = t, b = !L(a), x = !L(r), _ = !L(c), v = (p - g) / (d + 1);
  let y = wi((p - g) / m / u) * u, k, S, w, M;
  if (y < 1e-14 && !b && !x)
    return [
      {
        value: g
      },
      {
        value: p
      }
    ];
  M = Math.ceil(p / y) - Math.floor(g / y), M > m && (y = wi(M * y / m / u) * u), L(l) || (k = Math.pow(10, l), y = Math.ceil(y * k) / k), n === "ticks" ? (S = Math.floor(g / y) * y, w = Math.ceil(p / y) * y) : (S = g, w = p), b && x && o && co((r - a) / o, y / 1e3) ? (M = Math.round(Math.min((r - a) / y, h)), y = (r - a) / M, S = a, w = r) : _ ? (S = b ? a : S, w = x ? r : w, M = c - 1, y = (w - S) / M) : (M = (w - S) / y, me(M, Math.round(M), y / 1e3) ? M = Math.round(M) : M = Math.ceil(M));
  const A = Math.max(Si(y), Si(S));
  k = Math.pow(10, L(l) ? A : l), S = Math.round(S * k) / k, w = Math.round(w * k) / k;
  let P = 0;
  for (b && (f && S !== a ? (e.push({
    value: a
  }), S < a && P++, me(Math.round((S + P * y) * k) / k, a, ys(a, v, i)) && P++) : S < a && P++); P < M; ++P) {
    const C = Math.round((S + P * y) * k) / k;
    if (x && C > r)
      break;
    e.push({
      value: C
    });
  }
  return x && f && w !== r ? e.length && me(e[e.length - 1].value, r, ys(r, v, i)) ? e[e.length - 1].value = r : e.push({
    value: r
  }) : (!x || w === r) && e.push({
    value: w
  }), e;
}
function ys(i, t, { horizontal: e, minRotation: s }) {
  const n = _t(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, a = 0.75 * t * ("" + i).length;
  return Math.min(t / o, a);
}
class ul extends It {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return L(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const a = (l) => n = e ? n : l, r = (l) => o = s ? o : l;
    if (t) {
      const l = ht(n), c = ht(o);
      l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && a(0);
    }
    if (n === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      r(o + l), t || a(n - l);
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
    }, o = this._range || this, a = fl(n, o);
    return t.bounds === "ticks" && ho(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a;
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
    return Ns(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class gl extends ul {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: js.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = K(t) ? t : 0, this.max = K(e) ? e : 1, this.handleTickRangeOptions();
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
const Ae = {
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
}, j = /* @__PURE__ */ Object.keys(Ae);
function vs(i, t) {
  return i - t;
}
function ks(i, t) {
  if (L(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let a = t;
  return typeof s == "function" && (a = s(a)), K(a) || (a = typeof s == "string" ? e.parse(a, s) : e.parse(a)), a === null ? null : (n && (a = n === "week" && (we(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, n)), +a);
}
function ws(i, t, e, s) {
  const n = j.length;
  for (let o = j.indexOf(i); o < n - 1; ++o) {
    const a = Ae[j[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (r * a.size)) <= s)
      return j[o];
  }
  return j[n - 1];
}
function pl(i, t, e, s, n) {
  for (let o = j.length - 1; o >= j.indexOf(e); o--) {
    const a = j[o];
    if (Ae[a].common && i._adapter.diff(n, s, a) >= t - 1)
      return a;
  }
  return j[e ? j.indexOf(e) : 0];
}
function ml(i) {
  for (let t = j.indexOf(i) + 1, e = j.length; t < e; ++t)
    if (Ae[j[t]].common)
      return j[t];
}
function Ss(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = si(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function bl(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), a = t[t.length - 1].value;
  let r, l;
  for (r = o; r <= a; r = +n.add(r, 1, s))
    l = e[r], l >= 0 && (t[l].major = !0);
  return t;
}
function Ms(i, t, e) {
  const s = [], n = {}, o = t.length;
  let a, r;
  for (a = 0; a < o; ++a)
    r = t[a], n[r] = a, s.push({
      value: r,
      major: !1
    });
  return o === 0 || !e ? s : bl(i, s, n, e);
}
class Ps extends It {
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
    const s = t.time || (t.time = {}), n = this._adapter = new Aa._date(t.adapters.date);
    n.init(e), Ut(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : ks(this, t);
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
    let { min: n, max: o, minDefined: a, maxDefined: r } = this.getUserBounds();
    function l(c) {
      !a && !isNaN(c.min) && (n = Math.min(n, c.min)), !r && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!a || !r) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = K(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = K(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
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
    const o = this.min, a = this.max, r = xo(n, o, a);
    return this._unit = e.unit || (s.autoSkip ? ws(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : pl(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : ml(this._unit), this.initOffsets(n), t.reverse && r.reverse(), Ms(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const a = t.length < 3 ? 0.5 : 0.25;
    e = G(e, 0, a), s = G(s, 0, a), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, a = o.unit || ws(o.minUnit, e, s, this._getLabelCapacity(e)), r = D(n.ticks.stepSize, 1), l = a === "week" ? o.isoWeekday : !1, c = we(l) || l === !0, h = {};
    let d = e, f, u;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : a), t.diff(s, e, a) > 1e5 * r)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + r + " " + a);
    const m = n.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, u = 0; f < s; f = +t.add(f, r, a), u++)
      Ss(h, f, m);
    return (f === s || n.bounds === "ticks" || u === 1) && Ss(h, f, m), Object.keys(h).sort(vs).map((g) => +g);
  }
  getLabelForValue(t) {
    const e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  format(t, e) {
    const n = this.options.time.displayFormats, o = this._unit, a = e || n[o];
    return this._adapter.format(t, a);
  }
  _tickFormatFunction(t, e, s, n) {
    const o = this.options, a = o.ticks.callback;
    if (a)
      return F(a, [
        t,
        e,
        s
      ], this);
    const r = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && r[l], d = c && r[c], f = s[e], u = c && d && f && f.major;
    return this._adapter.format(t, n || (u ? d : h));
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
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = _t(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), a = Math.sin(n), r = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + r * a,
      h: s * a + r * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, Ms(this, [
      t
    ], this._majorUnit), n), a = this._getLabelSize(o), r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
    return r > 0 ? r : 1;
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
      t.push(ks(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Bs(t.sort(vs));
  }
}
function pe(i, t, e) {
  let s = 0, n = i.length - 1, o, a, r, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = Xe(i, "pos", t)), { pos: o, time: r } = i[s], { pos: a, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = Xe(i, "time", t)), { time: o, pos: r } = i[s], { time: a, pos: l } = i[n]);
  const c = a - o;
  return c ? r + (l - r) * (t - o) / c : r;
}
class jl extends Ps {
  static id = "timeseries";
  static defaults = Ps.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = pe(e, this.min), this._tableRange = pe(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this, n = [], o = [];
    let a, r, l, c, h;
    for (a = 0, r = t.length; a < r; ++a)
      c = t[a], c >= e && c <= s && n.push(c);
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
    for (a = 0, r = n.length; a < r; ++a)
      h = n[a + 1], l = n[a - 1], c = n[a], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: a / (r - 1)
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
    return (pe(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return pe(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const xn = {
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
}, xl = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, _l = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...xn,
  ...xl
}, yl = wn[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function Mt(i) {
  return Cs(i) ? Ye(i) : i;
}
function vl(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return Cs(t) ? new Proxy(i, {}) : i;
}
function kl(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function _n(i, t) {
  i.labels = t;
}
function yn(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((a) => a[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function wl(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return _n(e, i.labels), yn(e, i.datasets, t), e;
}
const Sl = Oe({
  props: _l,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = Pt(null), o = Qe(null);
    e({
      chart: o
    });
    const a = () => {
      if (!n.value) return;
      const { type: c, data: h, options: d, plugins: f, datasetIdKey: u } = i, m = wl(h, u), g = vl(m, h);
      o.value = new Te(n.value, {
        type: c,
        data: g,
        options: {
          ...d
        },
        plugins: f
      });
    }, r = () => {
      const c = Ye(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return Ds(a), vn(r), _e([
      () => i.options,
      () => i.data
    ], (c, h) => {
      let [d, f] = c, [u, m] = h;
      const g = Ye(o.value);
      if (!g)
        return;
      let p = !1;
      if (d) {
        const b = Mt(d), x = Mt(u);
        b && b !== x && (kl(g, b), p = !0);
      }
      if (f) {
        const b = Mt(f.labels), x = Mt(m.labels), _ = Mt(f.datasets), v = Mt(m.datasets);
        b !== x && (_n(g.config.data, b), p = !0), _ && _ !== v && (yn(g.config.data, _, i.datasetIdKey), p = !0);
      }
      p && kn(() => {
        l(g);
      });
    }, {
      deep: !0
    }), () => $e("canvas", {
      role: "img",
      "aria-label": i.ariaLabel,
      "aria-describedby": i.ariaDescribedby,
      ref: n
    }, [
      $e("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function Ml(i, t) {
  return Te.register(t), Oe({
    props: xn,
    setup(e, s) {
      let { expose: n } = s;
      const o = Qe(null), a = (r) => {
        o.value = r?.chart;
      };
      return n({
        chart: o
      }), () => $e(Sl, yl({
        ref: a
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const Pl = /* @__PURE__ */ Ml("bar", Ta), Ol = {
  key: 0,
  class: "flex flex-col h-full w-full gap-4"
}, Dl = { class: "h50 overflow-hidden" }, Cl = { class: "h50" }, Tl = /* @__PURE__ */ Oe({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(i) {
    const t = i, e = Pt(null), s = Pt(null), n = Pt({
      responsive: !0
    });
    Te.register(Jr, rl, Zr, Yr, dl, gl), _e(t.dataSource, () => {
      r();
    }, { deep: !0 });
    const o = Qe(null), a = Pt(t.dataSource), { update: r } = Cn(t.dataSource.type, a, o);
    return _e(o, async () => {
      e.value = await o.value.getData("DataTable"), s.value = await o.value.getData("ChartData");
    }, { deep: !0 }), (l, c) => {
      const h = Ts("VaDataTable");
      return o.value && e.value ? (Ue(), As("div", Ol, [
        gi("div", Dl, [
          Nt(h, {
            items: e.value.items,
            stickyHeader: !0,
            style: { height: "100%" }
          }, null, 8, ["items"])
        ]),
        gi("div", Cl, [
          s.value && n.value ? (Ue(), Sn(Mn(Pl), {
            key: 0,
            id: "my-chart-id",
            options: n.value,
            data: s.value
          }, null, 8, ["options", "data"])) : ui("", !0)
        ])
      ])) : ui("", !0);
    };
  }
}), Al = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, Ll = /* @__PURE__ */ Al(Tl, [["__scopeId", "data-v-3662bbd8"]]), Fl = /* @__PURE__ */ Oe({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(i) {
    const t = Pn(Tn), e = On(() => i.dataSources.filter((n) => n.type === "csv" || n.type === "xmla" || n.type === "rest")), s = Pt([]);
    return Ds(async () => {
      s.value = await pi.getHeaders(
        i.config.connectedDatasources || [],
        t
      );
    }), _e(() => i.config.connectedDatasources, async (n) => {
      s.value = await pi.getHeaders(
        n || [],
        t
      );
    }), (n, o) => {
      const a = Ts("VaSelect");
      return Ue(), As(Dn, null, [
        Nt(a, {
          modelValue: i.config.connectedDatasources,
          "onUpdate:modelValue": o[0] || (o[0] = (r) => i.config.connectedDatasources = r),
          label: "Sources",
          options: e.value,
          multiple: "",
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        Nt(a, {
          modelValue: i.config.composeBy,
          "onUpdate:modelValue": o[1] || (o[1] = (r) => i.config.composeBy = r),
          label: "Compose By",
          options: s.value
        }, null, 8, ["modelValue", "options"]),
        Nt(a, {
          modelValue: i.config.usedSets,
          "onUpdate:modelValue": o[2] || (o[2] = (r) => i.config.usedSets = r),
          label: "Series",
          options: s.value,
          multiple: ""
        }, null, 8, ["modelValue", "options"]),
        Nt(a, {
          modelValue: i.config.labelColumn,
          "onUpdate:modelValue": o[3] || (o[3] = (r) => i.config.labelColumn = r),
          label: "Label Column",
          options: s.value
        }, null, 8, ["modelValue", "options"])
      ], 64);
    };
  }
}), Il = Symbol.for("ChartComposer"), Rl = Symbol.for("ChartPreview"), El = Symbol.for("ChartSettings");
function $l({ services: i }) {
  i.register("ChartPreview", Ll), i.register("ChartSettings", Fl), i.getRequired(Os).registerDatasourceType("chart", {
    Store: Il,
    Preview: Rl,
    Settings: El
  });
}
function Yl({ services: i }) {
  i.getRequired(Os).unregisterDatasourceType("chart"), i.unregister("ChartPreview"), i.unregister("ChartSettings");
}
export {
  $l as activate,
  Yl as deactivate
};
