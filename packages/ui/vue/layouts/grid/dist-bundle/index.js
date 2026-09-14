(function(){var i="ui.vue.layouts.grid",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".scroll[data-v-a0615a07]{overflow-y:auto}.view_grid_layout[data-v-a0615a07]{padding-left:60px}.vgl-layout[data-v-a0615a07]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-a0615a07]:before{display:none}[data-v-a0615a07] .vgl-item--resizing{opacity:90%}[data-v-a0615a07] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-a0615a07]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.alayout[data-v-1d1efb1b]{padding-left:60px}.vgl-layout[data-v-1d1efb1b]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-1d1efb1b]:before{position:absolute;width:calc(100% - 5px);height:calc(100% - 5px);margin:5px;content:\"\";background-image:linear-gradient(to right,var(--color-divider) 1px,transparent 1px),linear-gradient(to bottom,var(--color-divider) 1px,transparent 1px);background-repeat:repeat;background-size:calc(calc(100% - 5px) / var(--grid-cols, 12)) calc(var(--grid-row-height, 30px) + 10px)}[data-v-1d1efb1b] .vgl-item--placeholder{outline:2px dashed var(--color-outline);background-color:#88888826}[data-v-1d1efb1b] .vgl-item--resizing{opacity:90%}[data-v-1d1efb1b] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-1d1efb1b]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.invisible-dropzone[data-v-1d1efb1b]{position:absolute;inset:0;z-index:1000;pointer-events:auto}.invisible-dropzone[data-v-1d1efb1b]>*{opacity:0}.widget-item-wrapper[data-v-1d1efb1b]{width:100%;height:100%}.dropdown-buttons-container[data-v-1d1efb1b]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.widget-context-menu[data-v-1d1efb1b],.canvas-context-menu[data-v-1d1efb1b]{position:fixed;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);padding:4px;box-shadow:var(--shadow-e2);z-index:100000}.menu__item[data-v-1d1efb1b]{justify-content:flex-start;gap:7px;white-space:nowrap}.scroll[data-v-1d1efb1b]{overflow-y:auto}\n";})();
import { LAYOUT_REPOSITORY as pf } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { defineComponent as Ta, inject as Ji, shallowRef as r0, reactive as Qi, ref as at, toRef as i0, onBeforeMount as gf, onMounted as Oa, watchEffect as o0, onBeforeUnmount as wu, computed as dt, watch as je, createElementBlock as Pn, openBlock as kt, normalizeStyle as Ki, normalizeClass as pc, renderSlot as gu, createCommentVNode as vu, unref as vt, getCurrentScope as a0, onScopeDispose as s0, nextTick as Ht, provide as gc, toRefs as vc, withDirectives as vf, Fragment as u0, renderList as l0, createBlock as eo, mergeProps as c0, withCtx as oi, createVNode as ni, vShow as mf, createElementVNode as xa, isRef as f0, toDisplayString as mu, withModifiers as mc, createTextVNode as yc } from "vue";
import { plainSettings as Sa, useBoard as yf } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetWrapper as bf, defaultConfig as d0 } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as xf } from "vue-router";
import { identifier as wf } from "org.eclipse.daanse.board.app.lib.api.page";
import p0 from "vuedraggable";
import { useClipboardStore as g0 } from "org.eclipse.daanse.board.app.ui.vue.layouts.base";
import { DButton as bc, DIcon as xc } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { BasicEObject as _f, BasicEFactory as v0, BasicEPackage as m0, EPackageRegistry as y0, BasicEClass as wc, BasicEAttribute as ei, BasicEReference as b0, getEcorePackage as ti } from "@emfts/core";
const { identifiers: h0 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), x0 = typeof window < "u";
var _c;
x0 && ((_c = window?.navigator) != null && _c.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Qt(p) {
  return p == null;
}
function Sf() {
}
const w0 = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(w0)));
function _0() {
  const p = /* @__PURE__ */ new Map();
  return {
    on(h, l) {
      const y = p.get(h);
      y?.add(l) || p.set(h, /* @__PURE__ */ new Set([l]));
    },
    off(h, l) {
      const y = p.get(h);
      y && y.delete(l);
    },
    clear(h) {
      const l = p.get(h);
      l && l.clear();
    },
    clearAll() {
      p.clear();
    },
    emit(h, ...l) {
      const y = p.get(h);
      y && y.forEach((C) => {
        C(...l);
      });
    }
  };
}
function Sc(p, h = 16) {
  if (typeof p != "function")
    return Sf;
  const l = (...O) => {
    p(...O);
  };
  if (h <= 0)
    return Ef(l);
  let y = 0, C;
  return function(...O) {
    const B = Date.now(), L = B - y;
    clearTimeout(C), L >= h ? (y = B, l(...O)) : C = setTimeout(
      () => {
        y = Date.now(), l(...O);
      },
      Math.max(0, h - L)
    );
  };
}
function S0(p, h = 100) {
  if (typeof p != "function")
    return Sf;
  const l = (...C) => {
    p(...C);
  };
  if (h <= 0)
    return Ef(l);
  let y;
  return function(...C) {
    clearTimeout(y), y = setTimeout(() => {
      l(...C);
    }, h);
  };
}
function Ef(p) {
  if (typeof p != "function")
    return p;
  let h = !1, l, y;
  return function(...C) {
    return l = C, h || (h = !0, y = Promise.resolve().then(() => (h = !1, y = void 0, p(...l)))), y;
  };
}
const Vi = /* @__PURE__ */ new Set(), Tf = /* @__PURE__ */ new WeakMap();
function E0() {
  Vi.forEach((p) => {
    p(...Tf.get(p));
  }), Vi.clear();
}
function Pt(p, ...h) {
  if (typeof p != "function")
    return p;
  Tf.set(p, h), !Vi.has(p) && (Vi.add(p), Vi.size === 1 && Promise.resolve().then(E0));
}
const Of = Symbol("LAYOUT_KEY"), If = Symbol("EMITTER_KEY");
function T0(p) {
  let h = 0, l;
  for (let y = 0, C = p.length; y < C; y++)
    l = p[y].y + p[y].h, l > h && (h = l);
  return h;
}
function yu(p) {
  const h = Array(p.length);
  for (let l = 0, y = p.length; l < y; l++)
    h[l] = O0(p[l]);
  return h;
}
function O0(p) {
  return { ...p };
}
function Rf(p, h) {
  return !(p === h || p.x + p.w <= h.x || p.x >= h.x + h.w || p.y + p.h <= h.y || p.y >= h.y + h.h);
}
function ri(p, h, l) {
  const y = Af(p), C = Cf(p), O = Array(p.length);
  for (let B = 0, L = C.length; B < L; B++) {
    let E = C[B];
    E.static || (E = I0(y, E, h, l), y.push(E)), O[p.findIndex((V) => V.i === E.i)] = E, E.moved = !1;
  }
  return O;
}
function I0(p, h, l, y) {
  if (l)
    for (; h.y > 0 && !Zi(p, h); )
      h.y--;
  else if (y) {
    const O = y[h.i].y;
    for (; h.y > O && !Zi(p, h); )
      h.y--;
  }
  let C;
  for (; C = Zi(p, h); )
    h.y = C.y + C.h;
  return h;
}
function R0(p, h) {
  const l = Af(p);
  for (let y = 0, C = p.length; y < C; y++) {
    const O = p[y];
    if (O.x + O.w > h.cols && (O.x = h.cols - O.w), O.x < 0 && (O.x = 0, O.w = h.cols), !O.static) l.push(O);
    else
      for (; Zi(l, O); )
        O.y++;
  }
  return p;
}
function Ec(p, h) {
  for (let l = 0, y = p.length; l < y; l++)
    if (p[l].i === h) return p[l];
}
function Zi(p, h) {
  for (let l = 0, y = p.length; l < y; l++)
    if (Rf(p[l], h)) return p[l];
}
function Mf(p, h) {
  return p.filter((l) => Rf(l, h));
}
function Af(p) {
  return p.filter((h) => h.static);
}
function bu(p, h, l, y, C = !1, O = !1) {
  if (h.static) return p;
  const B = h.x, L = h.y, E = y && h.y > y;
  typeof l == "number" && (h.x = l), typeof y == "number" && (h.y = y), h.moved = !0;
  let V = Cf(p);
  E && (V = V.reverse());
  const ge = Mf(V, h);
  if (O && ge.length)
    return h.x = B, h.y = L, h.moved = !1, p;
  for (let ee = 0, Be = ge.length; ee < Be; ee++) {
    const me = ge[ee];
    me.moved || h.y > me.y && h.y - me.y > me.h / 4 || (me.static ? p = Tc(p, me, h, C) : p = Tc(p, h, me, C));
  }
  return p;
}
function Tc(p, h, l, y) {
  if (y) {
    const C = {
      x: l.x,
      y: l.y,
      w: l.w,
      h: l.h
    };
    if (C.y = Math.max(h.y - l.h, 0), !Zi(p, C))
      return bu(p, l, void 0, C.y, !1);
  }
  return bu(p, l, void 0, l.y + 1, !1);
}
function M0(p, h, l, y) {
  const C = "translate3d(" + h + "px," + p + "px, 0)";
  return {
    transform: C,
    WebkitTransform: C,
    MozTransform: C,
    msTransform: C,
    OTransform: C,
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function A0(p, h, l, y) {
  const C = "translate3d(" + h * -1 + "px," + p + "px, 0)";
  return {
    transform: C,
    WebkitTransform: C,
    MozTransform: C,
    msTransform: C,
    OTransform: C,
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function C0(p, h, l, y) {
  return {
    top: p + "px",
    left: h + "px",
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function D0(p, h, l, y) {
  return {
    top: p + "px",
    right: h + "px",
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function Cf(p) {
  return Array.from(p).sort(function(h, l) {
    return h.y === l.y && h.x === l.x ? 0 : h.y > l.y || h.y === l.y && h.x > l.x ? 1 : -1;
  });
}
function z0(p, h) {
  h = h || "Layout";
  const l = ["x", "y", "w", "h"], y = [];
  if (!Array.isArray(p)) throw new Error(h + " must be an array!");
  for (let C = 0, O = p.length; C < O; C++) {
    const B = p[C];
    for (let L = 0; L < l.length; L++)
      if (typeof B[l[L]] != "number")
        throw new Error(
          "VueGridLayout: " + h + "[" + C + "]." + l[L] + " must be a number!"
        );
    if (B.i === void 0 || B.i === null)
      throw new Error("VueGridLayout: " + h + "[" + C + "].i cannot be null!");
    if (typeof B.i != "number" && typeof B.i != "string")
      throw new Error("VueGridLayout: " + h + "[" + C + "].i must be a string or number!");
    if (y.indexOf(B.i) >= 0)
      throw new Error("VueGridLayout: " + h + "[" + C + "].i must be unique!");
    if (y.push(B.i), B.static !== void 0 && typeof B.static != "boolean")
      throw new Error("VueGridLayout: " + h + "[" + C + "].static must be a boolean!");
  }
}
function P0(p, h = "vgl") {
  const l = () => `${h}-${p}`;
  return {
    b: l,
    be: (y) => `${l()}__${y}`,
    bm: (y) => `${l()}--${y}`,
    bem: (y, C) => `${l()}__${y}--${C}`
  };
}
function Oc(p) {
  return L0(p);
}
function L0(p) {
  var h;
  const l = ((h = p.target) == null ? void 0 : h.offsetParent) || document.body, y = p.offsetParent === document.body ? { left: 0, top: 0 } : l.getBoundingClientRect(), C = p.clientX + l.scrollLeft - y.left, O = p.clientY + l.scrollTop - y.top;
  return { x: C, y: O };
}
function Ic(p, h, l, y) {
  return k0(p) ? {
    deltaX: l - p,
    deltaY: y - h,
    lastX: p,
    lastY: h,
    x: l,
    y
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: l,
    lastY: y,
    x: l,
    y
  };
}
function k0(p) {
  return typeof p == "number" && !Number.isNaN(p);
}
function F0(p, h) {
  const l = zf(p);
  let y = l[0];
  for (let C = 1, O = l.length; C < O; C++) {
    const B = l[C];
    h > p[B] && (y = B);
  }
  return y;
}
function Df(p, h) {
  if (!h[p])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + p + " is missing!"
    );
  return h[p];
}
function N0(p, h, l, y, C, O, B) {
  if (h[y]) return yu(h[y]);
  let L = p;
  const E = zf(l), V = E.slice(E.indexOf(y));
  for (let ge = 0, ee = V.length; ge < ee; ge++) {
    const Be = V[ge];
    if (h[Be]) {
      L = h[Be];
      break;
    }
  }
  return L = yu(L || []), ri(R0(L, { cols: O }), B);
}
function zf(p) {
  return Object.keys(p).sort((h, l) => p[h] - p[l]);
}
let B0 = "auto";
function W0() {
  return typeof document < "u";
}
function Rc() {
  return W0() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : B0;
}
var or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pf(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var $i = { exports: {} }, U0 = $i.exports, Mc;
function H0() {
  return Mc || (Mc = 1, (function(p, h) {
    (function(l, y) {
      p.exports = y();
    })(U0, (function() {
      function l(r, n) {
        var o = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(r);
          n && (a = a.filter((function(u) {
            return Object.getOwnPropertyDescriptor(r, u).enumerable;
          }))), o.push.apply(o, a);
        }
        return o;
      }
      function y(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n] != null ? arguments[n] : {};
          n % 2 ? l(Object(o), !0).forEach((function(a) {
            E(r, a, o[a]);
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach((function(a) {
            Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(o, a));
          }));
        }
        return r;
      }
      function C(r) {
        return C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
          return typeof n;
        } : function(n) {
          return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, C(r);
      }
      function O(r, n) {
        if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function B(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, Ve(a.key), a);
        }
      }
      function L(r, n, o) {
        return n && B(r.prototype, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
      }
      function E(r, n, o) {
        return (n = Ve(n)) in r ? Object.defineProperty(r, n, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = o, r;
      }
      function V(r, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(n && n.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), n && ee(r, n);
      }
      function ge(r) {
        return ge = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }, ge(r);
      }
      function ee(r, n) {
        return ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, a) {
          return o.__proto__ = a, o;
        }, ee(r, n);
      }
      function Be(r) {
        if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function me(r) {
        var n = (function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
            }))), !0;
          } catch {
            return !1;
          }
        })();
        return function() {
          var o, a = ge(r);
          if (n) {
            var u = ge(this).constructor;
            o = Reflect.construct(a, arguments, u);
          } else o = a.apply(this, arguments);
          return (function(c, d) {
            if (d && (typeof d == "object" || typeof d == "function")) return d;
            if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return Be(c);
          })(this, o);
        };
      }
      function Re() {
        return Re = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(r, n, o) {
          var a = (function(c, d) {
            for (; !Object.prototype.hasOwnProperty.call(c, d) && (c = ge(c)) !== null; ) ;
            return c;
          })(r, n);
          if (a) {
            var u = Object.getOwnPropertyDescriptor(a, n);
            return u.get ? u.get.call(arguments.length < 3 ? r : o) : u.value;
          }
        }, Re.apply(this, arguments);
      }
      function Ve(r) {
        var n = (function(o, a) {
          if (typeof o != "object" || o === null) return o;
          var u = o[Symbol.toPrimitive];
          if (u !== void 0) {
            var c = u.call(o, a);
            if (typeof c != "object") return c;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(o);
        })(r, "string");
        return typeof n == "symbol" ? n : n + "";
      }
      var De = function(r) {
        return !(!r || !r.Window) && r instanceof r.Window;
      }, qe = void 0, ze = void 0;
      function Se(r) {
        qe = r;
        var n = r.document.createTextNode("");
        n.ownerDocument !== r.document && typeof r.wrap == "function" && r.wrap(n) === n && (r = r.wrap(r)), ze = r;
      }
      function Ce(r) {
        return De(r) ? r : (r.ownerDocument || r).defaultView || ze.window;
      }
      typeof window < "u" && window && Se(window);
      var Ee = function(r) {
        return !!r && C(r) === "object";
      }, we = function(r) {
        return typeof r == "function";
      }, D = { window: function(r) {
        return r === ze || De(r);
      }, docFrag: function(r) {
        return Ee(r) && r.nodeType === 11;
      }, object: Ee, func: we, number: function(r) {
        return typeof r == "number";
      }, bool: function(r) {
        return typeof r == "boolean";
      }, string: function(r) {
        return typeof r == "string";
      }, element: function(r) {
        if (!r || C(r) !== "object") return !1;
        var n = Ce(r) || ze;
        return /object|function/.test(typeof Element > "u" ? "undefined" : C(Element)) ? r instanceof Element || r instanceof n.Element : r.nodeType === 1 && typeof r.nodeName == "string";
      }, plainObject: function(r) {
        return Ee(r) && !!r.constructor && /function Object\b/.test(r.constructor.toString());
      }, array: function(r) {
        return Ee(r) && r.length !== void 0 && we(r.splice);
      } };
      function ue(r) {
        var n = r.interaction;
        if (n.prepared.name === "drag") {
          var o = n.prepared.axis;
          o === "x" ? (n.coords.cur.page.y = n.coords.start.page.y, n.coords.cur.client.y = n.coords.start.client.y, n.coords.velocity.client.y = 0, n.coords.velocity.page.y = 0) : o === "y" && (n.coords.cur.page.x = n.coords.start.page.x, n.coords.cur.client.x = n.coords.start.client.x, n.coords.velocity.client.x = 0, n.coords.velocity.page.x = 0);
        }
      }
      function $e(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "drag") {
          var a = o.prepared.axis;
          if (a === "x" || a === "y") {
            var u = a === "x" ? "y" : "x";
            n.page[u] = o.coords.start.page[u], n.client[u] = o.coords.start.client[u], n.delta[u] = 0;
          }
        }
      }
      var Qe = { id: "actions/drag", install: function(r) {
        var n = r.actions, o = r.Interactable, a = r.defaults;
        o.prototype.draggable = Qe.draggable, n.map.drag = Qe, n.methodDict.drag = "draggable", a.actions.drag = Qe.defaults;
      }, listeners: { "interactions:before-action-move": ue, "interactions:action-resume": ue, "interactions:action-move": $e, "auto-start:check": function(r) {
        var n = r.interaction, o = r.interactable, a = r.buttons, u = o.options.drag;
        if (u && u.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || (a & o.options.drag.mouseButtons) != 0)) return r.action = { name: "drag", axis: u.lockAxis === "start" ? u.startAxis : u.lockAxis }, !1;
      } }, draggable: function(r) {
        return D.object(r) ? (this.options.drag.enabled = r.enabled !== !1, this.setPerAction("drag", r), this.setOnEvents("drag", r), /^(xy|x|y|start)$/.test(r.lockAxis) && (this.options.drag.lockAxis = r.lockAxis), /^(xy|x|y)$/.test(r.startAxis) && (this.options.drag.startAxis = r.startAxis), this) : D.bool(r) ? (this.options.drag.enabled = r, this) : this.options.drag;
      }, beforeMove: ue, move: $e, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(r) {
        return r.search("drag") === 0;
      } }, X = Qe, ie = { init: function(r) {
        var n = r;
        ie.document = n.document, ie.DocumentFragment = n.DocumentFragment || ne, ie.SVGElement = n.SVGElement || ne, ie.SVGSVGElement = n.SVGSVGElement || ne, ie.SVGElementInstance = n.SVGElementInstance || ne, ie.Element = n.Element || ne, ie.HTMLElement = n.HTMLElement || ie.Element, ie.Event = n.Event, ie.Touch = n.Touch || ne, ie.PointerEvent = n.PointerEvent || n.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function ne() {
      }
      var re = ie, be = { init: function(r) {
        var n = re.Element, o = r.navigator || {};
        be.supportsTouch = "ontouchstart" in r || D.func(r.DocumentTouch) && re.document instanceof r.DocumentTouch, be.supportsPointerEvent = o.pointerEnabled !== !1 && !!re.PointerEvent, be.isIOS = /iP(hone|od|ad)/.test(o.platform), be.isIOS7 = /iP(hone|od|ad)/.test(o.platform) && /OS 7[^\d]/.test(o.appVersion), be.isIe9 = /MSIE 9/.test(o.userAgent), be.isOperaMobile = o.appName === "Opera" && be.supportsTouch && /Presto/.test(o.userAgent), be.prefixedMatchesSelector = "matches" in n.prototype ? "matches" : "webkitMatchesSelector" in n.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in n.prototype ? "mozMatchesSelector" : "oMatchesSelector" in n.prototype ? "oMatchesSelector" : "msMatchesSelector", be.pEventTypes = be.supportsPointerEvent ? re.PointerEvent === r.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, be.wheelEvent = re.document && "onmousewheel" in re.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, Fe = be;
      function ae(r, n) {
        if (r.contains) return r.contains(n);
        for (; n; ) {
          if (n === r) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      function We(r, n) {
        for (; D.element(r); ) {
          if (Ge(r, n)) return r;
          r = st(r);
        }
        return null;
      }
      function st(r) {
        var n = r.parentNode;
        if (D.docFrag(n)) {
          for (; (n = n.host) && D.docFrag(n); ) ;
          return n;
        }
        return n;
      }
      function Ge(r, n) {
        return ze !== qe && (n = n.replace(/\/deep\//g, " ")), r[Fe.prefixedMatchesSelector](n);
      }
      var Me = function(r) {
        return r.parentNode || r.host;
      };
      function qt(r, n) {
        for (var o, a = [], u = r; (o = Me(u)) && u !== n && o !== u.ownerDocument; ) a.unshift(u), u = o;
        return a;
      }
      function ut(r, n, o) {
        for (; D.element(r); ) {
          if (Ge(r, n)) return !0;
          if ((r = st(r)) === o) return Ge(r, n);
        }
        return !1;
      }
      function Sn(r) {
        return r.correspondingUseElement || r;
      }
      function Je(r) {
        var n = r instanceof re.SVGElement ? r.getBoundingClientRect() : r.getClientRects()[0];
        return n && { left: n.left, right: n.right, top: n.top, bottom: n.bottom, width: n.width || n.right - n.left, height: n.height || n.bottom - n.top };
      }
      function ht(r) {
        var n, o = Je(r);
        if (!Fe.isIOS7 && o) {
          var a = { x: (n = (n = Ce(r)) || ze).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
          o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
        }
        return o;
      }
      function Gt(r) {
        for (var n = []; r; ) n.push(r), r = st(r);
        return n;
      }
      function Xt(r) {
        return !!D.string(r) && (re.document.querySelector(r), !0);
      }
      function J(r, n) {
        for (var o in n) r[o] = n[o];
        return r;
      }
      function en(r, n, o) {
        return r === "parent" ? st(o) : r === "self" ? n.getRect(o) : We(o, r);
      }
      function Tt(r, n, o, a) {
        var u = r;
        return D.string(u) ? u = en(u, n, o) : D.func(u) && (u = u.apply(void 0, a)), D.element(u) && (u = ht(u)), u;
      }
      function mt(r) {
        return r && { x: "x" in r ? r.x : r.left, y: "y" in r ? r.y : r.top };
      }
      function pn(r) {
        return !r || "x" in r && "y" in r || ((r = J({}, r)).x = r.left || 0, r.y = r.top || 0, r.width = r.width || (r.right || 0) - r.x, r.height = r.height || (r.bottom || 0) - r.y), r;
      }
      function rt(r, n, o) {
        r.left && (n.left += o.x), r.right && (n.right += o.x), r.top && (n.top += o.y), r.bottom && (n.bottom += o.y), n.width = n.right - n.left, n.height = n.bottom - n.top;
      }
      function Ot(r, n, o) {
        var a = o && r.options[o];
        return mt(Tt(a && a.origin || r.options.origin, r, n, [r && n])) || { x: 0, y: 0 };
      }
      function $t(r, n) {
        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(b) {
          return !0;
        }, a = arguments.length > 3 ? arguments[3] : void 0;
        if (a = a || {}, D.string(r) && r.search(" ") !== -1 && (r = yt(r)), D.array(r)) return r.forEach((function(b) {
          return $t(b, n, o, a);
        })), a;
        if (D.object(r) && (n = r, r = ""), D.func(n) && o(r)) a[r] = a[r] || [], a[r].push(n);
        else if (D.array(n)) for (var u = 0, c = n; u < c.length; u++) {
          var d = c[u];
          $t(r, d, o, a);
        }
        else if (D.object(n)) for (var v in n)
          $t(yt(v).map((function(b) {
            return "".concat(r).concat(b);
          })), n[v], o, a);
        return a;
      }
      function yt(r) {
        return r.trim().split(/ +/);
      }
      var Yt = function(r, n) {
        return Math.sqrt(r * r + n * n);
      }, ar = ["webkit", "moz"];
      function It(r, n) {
        r.__set || (r.__set = {});
        var o = function(u) {
          if (ar.some((function(c) {
            return u.indexOf(c) === 0;
          }))) return 1;
          typeof r[u] != "function" && u !== "__set" && Object.defineProperty(r, u, { get: function() {
            return u in r.__set ? r.__set[u] : r.__set[u] = n[u];
          }, set: function(c) {
            r.__set[u] = c;
          }, configurable: !0 });
        };
        for (var a in n) o(a);
        return r;
      }
      function G(r, n) {
        r.page = r.page || {}, r.page.x = n.page.x, r.page.y = n.page.y, r.client = r.client || {}, r.client.x = n.client.x, r.client.y = n.client.y, r.timeStamp = n.timeStamp;
      }
      function Q(r) {
        r.page.x = 0, r.page.y = 0, r.client.x = 0, r.client.y = 0;
      }
      function z(r) {
        return r instanceof re.Event || r instanceof re.Touch;
      }
      function Z(r, n, o) {
        return r = r || "page", (o = o || {}).x = n[r + "X"], o.y = n[r + "Y"], o;
      }
      function le(r, n) {
        return n = n || { x: 0, y: 0 }, Fe.isOperaMobile && z(r) ? (Z("screen", r, n), n.x += window.scrollX, n.y += window.scrollY) : Z("page", r, n), n;
      }
      function ye(r) {
        return D.number(r.pointerId) ? r.pointerId : r.identifier;
      }
      function ce(r, n, o) {
        var a = n.length > 1 ? oe(n) : n[0];
        le(a, r.page), (function(u, c) {
          c = c || {}, Fe.isOperaMobile && z(u) ? Z("screen", u, c) : Z("client", u, c);
        })(a, r.client), r.timeStamp = o;
      }
      function se(r) {
        var n = [];
        return D.array(r) ? (n[0] = r[0], n[1] = r[1]) : r.type === "touchend" ? r.touches.length === 1 ? (n[0] = r.touches[0], n[1] = r.changedTouches[0]) : r.touches.length === 0 && (n[0] = r.changedTouches[0], n[1] = r.changedTouches[1]) : (n[0] = r.touches[0], n[1] = r.touches[1]), n;
      }
      function oe(r) {
        for (var n = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, o = 0; o < r.length; o++) {
          var a = r[o];
          for (var u in n) n[u] += a[u];
        }
        for (var c in n) n[c] /= r.length;
        return n;
      }
      function et(r) {
        if (!r.length) return null;
        var n = se(r), o = Math.min(n[0].pageX, n[1].pageX), a = Math.min(n[0].pageY, n[1].pageY), u = Math.max(n[0].pageX, n[1].pageX), c = Math.max(n[0].pageY, n[1].pageY);
        return { x: o, y: a, left: o, top: a, right: u, bottom: c, width: u - o, height: c - a };
      }
      function lt(r, n) {
        var o = n + "X", a = n + "Y", u = se(r), c = u[0][o] - u[1][o], d = u[0][a] - u[1][a];
        return Yt(c, d);
      }
      function bt(r, n) {
        var o = n + "X", a = n + "Y", u = se(r), c = u[1][o] - u[0][o], d = u[1][a] - u[0][a];
        return 180 * Math.atan2(d, c) / Math.PI;
      }
      function tn(r) {
        return D.string(r.pointerType) ? r.pointerType : D.number(r.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][r.pointerType] : /touch/.test(r.type || "") || r instanceof re.Touch ? "touch" : "mouse";
      }
      function nn(r) {
        var n = D.func(r.composedPath) ? r.composedPath() : r.path;
        return [Sn(n ? n[0] : r.target), Sn(r.currentTarget)];
      }
      var rn = (function() {
        function r(n) {
          O(this, r), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = n;
        }
        return L(r, [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), r;
      })();
      Object.defineProperty(rn.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var En = function(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          r.push(a);
        }
        return r;
      }, Tn = function(r) {
        return En([], r);
      }, gn = function(r, n) {
        for (var o = 0; o < r.length; o++) if (n(r[o], o, r)) return o;
        return -1;
      }, sr = function(r, n) {
        return r[gn(r, n)];
      }, Kn = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c) {
          var d;
          O(this, o), (d = n.call(this, u._interaction)).dropzone = void 0, d.dragEvent = void 0, d.relatedTarget = void 0, d.draggable = void 0, d.propagationStopped = !1, d.immediatePropagationStopped = !1;
          var v = c === "dragleave" ? a.prev : a.cur, b = v.element, S = v.dropzone;
          return d.type = c, d.target = b, d.currentTarget = b, d.dropzone = S, d.dragEvent = u, d.relatedTarget = u.target, d.draggable = u.interactable, d.timeStamp = u.timeStamp, d;
        }
        return L(o, [{ key: "reject", value: function() {
          var a = this, u = this._interaction.dropState;
          if (this.type === "dropactivate" || this.dropzone && u.cur.dropzone === this.dropzone && u.cur.element === this.target) if (u.prev.dropzone = this.dropzone, u.prev.element = this.target, u.rejected = !0, u.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var c = u.activeDrops, d = gn(c, (function(b) {
              var S = b.dropzone, x = b.element;
              return S === a.dropzone && x === a.target;
            }));
            u.activeDrops.splice(d, 1);
            var v = new o(u, this.dragEvent, "dropdeactivate");
            v.dropzone = this.dropzone, v.target = this.target, this.dropzone.fire(v);
          } else this.dropzone.fire(new o(u, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), o;
      })(rn);
      function si(r, n) {
        for (var o = 0, a = r.slice(); o < a.length; o++) {
          var u = a[o], c = u.dropzone, d = u.element;
          n.dropzone = c, n.target = d, c.fire(n), n.propagationStopped = n.immediatePropagationStopped = !1;
        }
      }
      function Cr(r, n) {
        for (var o = (function(c, d) {
          for (var v = [], b = 0, S = c.interactables.list; b < S.length; b++) {
            var x = S[b];
            if (x.options.drop.enabled) {
              var I = x.options.drop.accept;
              if (!(D.element(I) && I !== d || D.string(I) && !Ge(d, I) || D.func(I) && !I({ dropzone: x, draggableElement: d }))) for (var P = 0, H = x.getAllElements(); P < H.length; P++) {
                var W = H[P];
                W !== d && v.push({ dropzone: x, element: W, rect: x.getRect(W) });
              }
            }
          }
          return v;
        })(r, n), a = 0; a < o.length; a++) {
          var u = o[a];
          u.rect = u.dropzone.getRect(u.element);
        }
        return o;
      }
      function no(r, n, o) {
        for (var a = r.dropState, u = r.interactable, c = r.element, d = [], v = 0, b = a.activeDrops; v < b.length; v++) {
          var S = b[v], x = S.dropzone, I = S.element, P = S.rect, H = x.dropCheck(n, o, u, c, I, P);
          d.push(H ? I : null);
        }
        var W = (function(q) {
          for (var j, Y, w, A = [], R = 0; R < q.length; R++) {
            var k = q[R], $ = q[j];
            if (k && R !== j) if ($) {
              var ve = Me(k), xe = Me($);
              if (ve !== k.ownerDocument) if (xe !== k.ownerDocument) if (ve !== xe) {
                A = A.length ? A : qt($);
                var Te = void 0;
                if ($ instanceof re.HTMLElement && k instanceof re.SVGElement && !(k instanceof re.SVGSVGElement)) {
                  if (k === xe) continue;
                  Te = k.ownerSVGElement;
                } else Te = k;
                for (var At = qt(Te, $.ownerDocument), bn = 0; At[bn] && At[bn] === A[bn]; ) bn++;
                var wt = [At[bn - 1], At[bn], A[bn]];
                if (wt[0]) for (var Mn = wt[0].lastChild; Mn; ) {
                  if (Mn === wt[1]) {
                    j = R, A = At;
                    break;
                  }
                  if (Mn === wt[2]) break;
                  Mn = Mn.previousSibling;
                }
              } else w = $, (parseInt(Ce(Y = k).getComputedStyle(Y).zIndex, 10) || 0) >= (parseInt(Ce(w).getComputedStyle(w).zIndex, 10) || 0) && (j = R);
              else j = R;
            } else j = R;
          }
          return j;
        })(d);
        return a.activeDrops[W] || null;
      }
      function ui(r, n, o) {
        var a = r.dropState, u = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return o.type === "dragstart" && (u.activate = new Kn(a, o, "dropactivate"), u.activate.target = null, u.activate.dropzone = null), o.type === "dragend" && (u.deactivate = new Kn(a, o, "dropdeactivate"), u.deactivate.target = null, u.deactivate.dropzone = null), a.rejected || (a.cur.element !== a.prev.element && (a.prev.dropzone && (u.leave = new Kn(a, o, "dragleave"), o.dragLeave = u.leave.target = a.prev.element, o.prevDropzone = u.leave.dropzone = a.prev.dropzone), a.cur.dropzone && (u.enter = new Kn(a, o, "dragenter"), o.dragEnter = a.cur.element, o.dropzone = a.cur.dropzone)), o.type === "dragend" && a.cur.dropzone && (u.drop = new Kn(a, o, "drop"), o.dropzone = a.cur.dropzone, o.relatedTarget = a.cur.element), o.type === "dragmove" && a.cur.dropzone && (u.move = new Kn(a, o, "dropmove"), o.dropzone = a.cur.dropzone)), u;
      }
      function li(r, n) {
        var o = r.dropState, a = o.activeDrops, u = o.cur, c = o.prev;
        n.leave && c.dropzone.fire(n.leave), n.enter && u.dropzone.fire(n.enter), n.move && u.dropzone.fire(n.move), n.drop && u.dropzone.fire(n.drop), n.deactivate && si(a, n.deactivate), o.prev.dropzone = u.dropzone, o.prev.element = u.element;
      }
      function ro(r, n) {
        var o = r.interaction, a = r.iEvent, u = r.event;
        if (a.type === "dragmove" || a.type === "dragend") {
          var c = o.dropState;
          n.dynamicDrop && (c.activeDrops = Cr(n, o.element));
          var d = a, v = no(o, d, u);
          c.rejected = c.rejected && !!v && v.dropzone === c.cur.dropzone && v.element === c.cur.element, c.cur.dropzone = v && v.dropzone, c.cur.element = v && v.element, c.events = ui(o, 0, d);
        }
      }
      var ci = { id: "actions/drop", install: function(r) {
        var n = r.actions, o = r.interactStatic, a = r.Interactable, u = r.defaults;
        r.usePlugin(X), a.prototype.dropzone = function(c) {
          return (function(d, v) {
            if (D.object(v)) {
              if (d.options.drop.enabled = v.enabled !== !1, v.listeners) {
                var b = $t(v.listeners), S = Object.keys(b).reduce((function(I, P) {
                  return I[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = b[P], I;
                }), {}), x = d.options.drop.listeners;
                x && d.off(x), d.on(S), d.options.drop.listeners = S;
              }
              return D.func(v.ondrop) && d.on("drop", v.ondrop), D.func(v.ondropactivate) && d.on("dropactivate", v.ondropactivate), D.func(v.ondropdeactivate) && d.on("dropdeactivate", v.ondropdeactivate), D.func(v.ondragenter) && d.on("dragenter", v.ondragenter), D.func(v.ondragleave) && d.on("dragleave", v.ondragleave), D.func(v.ondropmove) && d.on("dropmove", v.ondropmove), /^(pointer|center)$/.test(v.overlap) ? d.options.drop.overlap = v.overlap : D.number(v.overlap) && (d.options.drop.overlap = Math.max(Math.min(1, v.overlap), 0)), "accept" in v && (d.options.drop.accept = v.accept), "checker" in v && (d.options.drop.checker = v.checker), d;
            }
            return D.bool(v) ? (d.options.drop.enabled = v, d) : d.options.drop;
          })(this, c);
        }, a.prototype.dropCheck = function(c, d, v, b, S, x) {
          return (function(I, P, H, W, q, j, Y) {
            var w = !1;
            if (!(Y = Y || I.getRect(j))) return !!I.options.drop.checker && I.options.drop.checker(P, H, w, I, j, W, q);
            var A = I.options.drop.overlap;
            if (A === "pointer") {
              var R = Ot(W, q, "drag"), k = le(P);
              k.x += R.x, k.y += R.y;
              var $ = k.x > Y.left && k.x < Y.right, ve = k.y > Y.top && k.y < Y.bottom;
              w = $ && ve;
            }
            var xe = W.getRect(q);
            if (xe && A === "center") {
              var Te = xe.left + xe.width / 2, At = xe.top + xe.height / 2;
              w = Te >= Y.left && Te <= Y.right && At >= Y.top && At <= Y.bottom;
            }
            return xe && D.number(A) && (w = Math.max(0, Math.min(Y.right, xe.right) - Math.max(Y.left, xe.left)) * Math.max(0, Math.min(Y.bottom, xe.bottom) - Math.max(Y.top, xe.top)) / (xe.width * xe.height) >= A), I.options.drop.checker && (w = I.options.drop.checker(P, H, w, I, j, W, q)), w;
          })(this, c, d, v, b, S, x);
        }, o.dynamicDrop = function(c) {
          return D.bool(c) ? (r.dynamicDrop = c, o) : r.dynamicDrop;
        }, J(n.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), n.methodDict.drop = "dropzone", r.dynamicDrop = !1, u.actions.drop = ci.defaults;
      }, listeners: { "interactions:before-action-start": function(r) {
        var n = r.interaction;
        n.prepared.name === "drag" && (n.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(r, n) {
        var o = r.interaction, a = (r.event, r.iEvent);
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          u.activeDrops = [], u.events = {}, u.activeDrops = Cr(n, o.element), u.events = ui(o, 0, a), u.events.activate && (si(u.activeDrops, u.events.activate), n.fire("actions/drop:start", { interaction: o, dragEvent: a }));
        }
      }, "interactions:action-move": ro, "interactions:after-action-move": function(r, n) {
        var o = r.interaction, a = r.iEvent;
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          li(o, u.events), n.fire("actions/drop:move", { interaction: o, dragEvent: a }), u.events = {};
        }
      }, "interactions:action-end": function(r, n) {
        if (r.interaction.prepared.name === "drag") {
          var o = r.interaction, a = r.iEvent;
          ro(r, n), li(o, o.dropState.events), n.fire("actions/drop:end", { interaction: o, dragEvent: a });
        }
      }, "interactions:stop": function(r) {
        var n = r.interaction;
        if (n.prepared.name === "drag") {
          var o = n.dropState;
          o && (o.activeDrops = null, o.events = null, o.cur.dropzone = null, o.cur.element = null, o.prev.dropzone = null, o.prev.element = null, o.rejected = !1);
        }
      } }, getActiveDrops: Cr, getDrop: no, getDropEvents: ui, fireDropEvents: li, filterEventType: function(r) {
        return r.search("drag") === 0 || r.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, Ia = ci;
      function fi(r) {
        var n = r.interaction, o = r.iEvent, a = r.phase;
        if (n.prepared.name === "gesture") {
          var u = n.pointers.map((function(S) {
            return S.pointer;
          })), c = a === "start", d = a === "end", v = n.interactable.options.deltaSource;
          if (o.touches = [u[0], u[1]], c) o.distance = lt(u, v), o.box = et(u), o.scale = 1, o.ds = 0, o.angle = bt(u, v), o.da = 0, n.gesture.startDistance = o.distance, n.gesture.startAngle = o.angle;
          else if (d || n.pointers.length < 2) {
            var b = n.prevEvent;
            o.distance = b.distance, o.box = b.box, o.scale = b.scale, o.ds = 0, o.angle = b.angle, o.da = 0;
          } else o.distance = lt(u, v), o.box = et(u), o.scale = o.distance / n.gesture.startDistance, o.angle = bt(u, v), o.ds = o.scale - n.gesture.scale, o.da = o.angle - n.gesture.angle;
          n.gesture.distance = o.distance, n.gesture.angle = o.angle, D.number(o.scale) && o.scale !== 1 / 0 && !isNaN(o.scale) && (n.gesture.scale = o.scale);
        }
      }
      var di = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(r) {
        var n = r.actions, o = r.Interactable, a = r.defaults;
        o.prototype.gesturable = function(u) {
          return D.object(u) ? (this.options.gesture.enabled = u.enabled !== !1, this.setPerAction("gesture", u), this.setOnEvents("gesture", u), this) : D.bool(u) ? (this.options.gesture.enabled = u, this) : this.options.gesture;
        }, n.map.gesture = di, n.methodDict.gesture = "gesturable", a.actions.gesture = di.defaults;
      }, listeners: { "interactions:action-start": fi, "interactions:action-move": fi, "interactions:action-end": fi, "interactions:new": function(r) {
        r.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
      }, "auto-start:check": function(r) {
        if (!(r.interaction.pointers.length < 2)) {
          var n = r.interactable.options.gesture;
          if (n && n.enabled) return r.action = { name: "gesture" }, !1;
        }
      } }, defaults: {}, getCursor: function() {
        return "";
      }, filterEventType: function(r) {
        return r.search("gesture") === 0;
      } }, hi = di;
      function Ra(r, n, o, a, u, c, d) {
        if (!n) return !1;
        if (n === !0) {
          var v = D.number(c.width) ? c.width : c.right - c.left, b = D.number(c.height) ? c.height : c.bottom - c.top;
          if (d = Math.min(d, Math.abs((r === "left" || r === "right" ? v : b) / 2)), v < 0 && (r === "left" ? r = "right" : r === "right" && (r = "left")), b < 0 && (r === "top" ? r = "bottom" : r === "bottom" && (r = "top")), r === "left") {
            var S = v >= 0 ? c.left : c.right;
            return o.x < S + d;
          }
          if (r === "top") {
            var x = b >= 0 ? c.top : c.bottom;
            return o.y < x + d;
          }
          if (r === "right") return o.x > (v >= 0 ? c.right : c.left) - d;
          if (r === "bottom") return o.y > (b >= 0 ? c.bottom : c.top) - d;
        }
        return !!D.element(a) && (D.element(n) ? n === a : ut(a, n, u));
      }
      function Dr(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "resize" && o.resizeAxes) {
          var a = n;
          o.interactable.options.resize.square ? (o.resizeAxes === "y" ? a.delta.x = a.delta.y : a.delta.y = a.delta.x, a.axes = "xy") : (a.axes = o.resizeAxes, o.resizeAxes === "x" ? a.delta.y = 0 : o.resizeAxes === "y" && (a.delta.x = 0));
        }
      }
      var vn, Ln, mn = { id: "actions/resize", before: ["actions/drag"], install: function(r) {
        var n = r.actions, o = r.browser, a = r.Interactable, u = r.defaults;
        mn.cursors = (function(c) {
          return c.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        })(o), mn.defaultMargin = o.supportsTouch || o.supportsPointerEvent ? 20 : 10, a.prototype.resizable = function(c) {
          return (function(d, v, b) {
            return D.object(v) ? (d.options.resize.enabled = v.enabled !== !1, d.setPerAction("resize", v), d.setOnEvents("resize", v), D.string(v.axis) && /^x$|^y$|^xy$/.test(v.axis) ? d.options.resize.axis = v.axis : v.axis === null && (d.options.resize.axis = b.defaults.actions.resize.axis), D.bool(v.preserveAspectRatio) ? d.options.resize.preserveAspectRatio = v.preserveAspectRatio : D.bool(v.square) && (d.options.resize.square = v.square), d) : D.bool(v) ? (d.options.resize.enabled = v, d) : d.options.resize;
          })(this, c, r);
        }, n.map.resize = mn, n.methodDict.resize = "resizable", u.actions.resize = mn.defaults;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(r) {
        (function(n) {
          var o = n.iEvent, a = n.interaction;
          if (a.prepared.name === "resize" && a.prepared.edges) {
            var u = o, c = a.rect;
            a._rects = { start: J({}, c), corrected: J({}, c), previous: J({}, c), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, u.edges = a.prepared.edges, u.rect = a._rects.corrected, u.deltaRect = a._rects.delta;
          }
        })(r), Dr(r);
      }, "interactions:action-move": function(r) {
        (function(n) {
          var o = n.iEvent, a = n.interaction;
          if (a.prepared.name === "resize" && a.prepared.edges) {
            var u = o, c = a.interactable.options.resize.invert, d = c === "reposition" || c === "negate", v = a.rect, b = a._rects, S = b.start, x = b.corrected, I = b.delta, P = b.previous;
            if (J(P, x), d) {
              if (J(x, v), c === "reposition") {
                if (x.top > x.bottom) {
                  var H = x.top;
                  x.top = x.bottom, x.bottom = H;
                }
                if (x.left > x.right) {
                  var W = x.left;
                  x.left = x.right, x.right = W;
                }
              }
            } else x.top = Math.min(v.top, S.bottom), x.bottom = Math.max(v.bottom, S.top), x.left = Math.min(v.left, S.right), x.right = Math.max(v.right, S.left);
            for (var q in x.width = x.right - x.left, x.height = x.bottom - x.top, x) I[q] = x[q] - P[q];
            u.edges = a.prepared.edges, u.rect = x, u.deltaRect = I;
          }
        })(r), Dr(r);
      }, "interactions:action-end": function(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "resize" && o.prepared.edges) {
          var a = n;
          a.edges = o.prepared.edges, a.rect = o._rects.corrected, a.deltaRect = o._rects.delta;
        }
      }, "auto-start:check": function(r) {
        var n = r.interaction, o = r.interactable, a = r.element, u = r.rect, c = r.buttons;
        if (u) {
          var d = J({}, n.coords.cur.page), v = o.options.resize;
          if (v && v.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || (c & v.mouseButtons) != 0)) {
            if (D.object(v.edges)) {
              var b = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var S in b) b[S] = Ra(S, v.edges[S], d, n._latestPointer.eventTarget, a, u, v.margin || mn.defaultMargin);
              b.left = b.left && !b.right, b.top = b.top && !b.bottom, (b.left || b.right || b.top || b.bottom) && (r.action = { name: "resize", edges: b });
            } else {
              var x = v.axis !== "y" && d.x > u.right - mn.defaultMargin, I = v.axis !== "x" && d.y > u.bottom - mn.defaultMargin;
              (x || I) && (r.action = { name: "resize", axes: (x ? "x" : "") + (I ? "y" : "") });
            }
            return !r.action && void 0;
          }
        }
      } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(r) {
        var n = r.edges, o = r.axis, a = r.name, u = mn.cursors, c = null;
        if (o) c = u[a + o];
        else if (n) {
          for (var d = "", v = 0, b = ["top", "bottom", "left", "right"]; v < b.length; v++) {
            var S = b[v];
            n[S] && (d += S);
          }
          c = u[d];
        }
        return c;
      }, filterEventType: function(r) {
        return r.search("resize") === 0;
      }, defaultMargin: null }, Ma = mn, Aa = { id: "actions", install: function(r) {
        r.usePlugin(hi), r.usePlugin(Ma), r.usePlugin(X), r.usePlugin(Ia);
      } }, io = 0, On = { request: function(r) {
        return vn(r);
      }, cancel: function(r) {
        return Ln(r);
      }, init: function(r) {
        if (vn = r.requestAnimationFrame, Ln = r.cancelAnimationFrame, !vn) for (var n = ["ms", "moz", "webkit", "o"], o = 0; o < n.length; o++) {
          var a = n[o];
          vn = r["".concat(a, "RequestAnimationFrame")], Ln = r["".concat(a, "CancelAnimationFrame")] || r["".concat(a, "CancelRequestAnimationFrame")];
        }
        vn = vn && vn.bind(r), Ln = Ln && Ln.bind(r), vn || (vn = function(u) {
          var c = Date.now(), d = Math.max(0, 16 - (c - io)), v = r.setTimeout((function() {
            u(c + d);
          }), d);
          return io = c + d, v;
        }, Ln = function(u) {
          return clearTimeout(u);
        });
      } }, pe = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(r) {
        pe.isScrolling = !0, On.cancel(pe.i), r.autoScroll = pe, pe.interaction = r, pe.prevTime = pe.now(), pe.i = On.request(pe.scroll);
      }, stop: function() {
        pe.isScrolling = !1, pe.interaction && (pe.interaction.autoScroll = null), On.cancel(pe.i);
      }, scroll: function() {
        var r = pe.interaction, n = r.interactable, o = r.element, a = r.prepared.name, u = n.options[a].autoScroll, c = pi(u.container, n, o), d = pe.now(), v = (d - pe.prevTime) / 1e3, b = u.speed * v;
        if (b >= 1) {
          var S = { x: pe.x * b, y: pe.y * b };
          if (S.x || S.y) {
            var x = oo(c);
            D.window(c) ? c.scrollBy(S.x, S.y) : c && (c.scrollLeft += S.x, c.scrollTop += S.y);
            var I = oo(c), P = { x: I.x - x.x, y: I.y - x.y };
            (P.x || P.y) && n.fire({ type: "autoscroll", target: o, interactable: n, delta: P, interaction: r, container: c });
          }
          pe.prevTime = d;
        }
        pe.isScrolling && (On.cancel(pe.i), pe.i = On.request(pe.scroll));
      }, check: function(r, n) {
        var o;
        return (o = r.options[n].autoScroll) == null ? void 0 : o.enabled;
      }, onInteractionMove: function(r) {
        var n = r.interaction, o = r.pointer;
        if (n.interacting() && pe.check(n.interactable, n.prepared.name)) if (n.simulation) pe.x = pe.y = 0;
        else {
          var a, u, c, d, v = n.interactable, b = n.element, S = n.prepared.name, x = v.options[S].autoScroll, I = pi(x.container, v, b);
          if (D.window(I)) d = o.clientX < pe.margin, a = o.clientY < pe.margin, u = o.clientX > I.innerWidth - pe.margin, c = o.clientY > I.innerHeight - pe.margin;
          else {
            var P = Je(I);
            d = o.clientX < P.left + pe.margin, a = o.clientY < P.top + pe.margin, u = o.clientX > P.right - pe.margin, c = o.clientY > P.bottom - pe.margin;
          }
          pe.x = u ? 1 : d ? -1 : 0, pe.y = c ? 1 : a ? -1 : 0, pe.isScrolling || (pe.margin = x.margin, pe.speed = x.speed, pe.start(n));
        }
      } };
      function pi(r, n, o) {
        return (D.string(r) ? en(r, n, o) : r) || Ce(o);
      }
      function oo(r) {
        return D.window(r) && (r = window.document.body), { x: r.scrollLeft, y: r.scrollTop };
      }
      var Ca = { id: "auto-scroll", install: function(r) {
        var n = r.defaults, o = r.actions;
        r.autoScroll = pe, pe.now = function() {
          return r.now();
        }, o.phaselessTypes.autoscroll = !0, n.perAction.autoScroll = pe.defaults;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.autoScroll = null;
      }, "interactions:destroy": function(r) {
        r.interaction.autoScroll = null, pe.stop(), pe.interaction && (pe.interaction = null);
      }, "interactions:stop": pe.stop, "interactions:action-move": function(r) {
        return pe.onInteractionMove(r);
      } } }, Da = Ca;
      function ur(r, n) {
        var o = !1;
        return function() {
          return o || (ze.console.warn(n), o = !0), r.apply(this, arguments);
        };
      }
      function gi(r, n) {
        return r.name = n.name, r.axis = n.axis, r.edges = n.edges, r;
      }
      function za(r) {
        return D.bool(r) ? (this.options.styleCursor = r, this) : r === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function zr(r) {
        return D.func(r) ? (this.options.actionChecker = r, this) : r === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var Pa = { id: "auto-start/interactableMethods", install: function(r) {
        var n = r.Interactable;
        n.prototype.getAction = function(o, a, u, c) {
          var d = (function(v, b, S, x, I) {
            var P = v.getRect(x), H = b.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[b.button], W = { action: null, interactable: v, interaction: S, element: x, rect: P, buttons: H };
            return I.fire("auto-start:check", W), W.action;
          })(this, a, u, c, r);
          return this.options.actionChecker ? this.options.actionChecker(o, a, d, this, c, u) : d;
        }, n.prototype.ignoreFrom = ur((function(o) {
          return this._backCompatOption("ignoreFrom", o);
        }), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), n.prototype.allowFrom = ur((function(o) {
          return this._backCompatOption("allowFrom", o);
        }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), n.prototype.actionChecker = zr, n.prototype.styleCursor = za;
      } };
      function lr(r, n, o, a, u) {
        return n.testIgnoreAllow(n.options[r.name], o, a) && n.options[r.name].enabled && cr(n, o, r, u) ? r : null;
      }
      function La(r, n, o, a, u, c, d) {
        for (var v = 0, b = a.length; v < b; v++) {
          var S = a[v], x = u[v], I = S.getAction(n, o, r, x);
          if (I) {
            var P = lr(I, S, x, c, d);
            if (P) return { action: P, interactable: S, element: x };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function ao(r, n, o, a, u) {
        var c = [], d = [], v = a;
        function b(x) {
          c.push(x), d.push(v);
        }
        for (; D.element(v); ) {
          c = [], d = [], u.interactables.forEachMatch(v, b);
          var S = La(r, n, o, c, d, a, u);
          if (S.action && !S.interactable.options[S.action.name].manualStart) return S;
          v = st(v);
        }
        return { action: null, interactable: null, element: null };
      }
      function so(r, n, o) {
        var a = n.action, u = n.interactable, c = n.element;
        a = a || { name: null }, r.interactable = u, r.element = c, gi(r.prepared, a), r.rect = u && a.name ? u.getRect(c) : null, uo(r, o), o.fire("autoStart:prepared", { interaction: r });
      }
      function cr(r, n, o, a) {
        var u = r.options, c = u[o.name].max, d = u[o.name].maxPerElement, v = a.autoStart.maxInteractions, b = 0, S = 0, x = 0;
        if (!(c && d && v)) return !1;
        for (var I = 0, P = a.interactions.list; I < P.length; I++) {
          var H = P[I], W = H.prepared.name;
          if (H.interacting() && (++b >= v || H.interactable === r && ((S += W === o.name ? 1 : 0) >= c || H.element === n && (x++, W === o.name && x >= d))))
            return !1;
        }
        return v > 0;
      }
      function vi(r, n) {
        return D.number(r) ? (n.autoStart.maxInteractions = r, this) : n.autoStart.maxInteractions;
      }
      function Pr(r, n, o) {
        var a = o.autoStart.cursorElement;
        a && a !== r && (a.style.cursor = ""), r.ownerDocument.documentElement.style.cursor = n, r.style.cursor = n, o.autoStart.cursorElement = n ? r : null;
      }
      function uo(r, n) {
        var o = r.interactable, a = r.element, u = r.prepared;
        if (r.pointerType === "mouse" && o && o.options.styleCursor) {
          var c = "";
          if (u.name) {
            var d = o.options[u.name].cursorChecker;
            c = D.func(d) ? d(u, o, a, r._interacting) : n.actions.map[u.name].getCursor(u);
          }
          Pr(r.element, c || "", n);
        } else n.autoStart.cursorElement && Pr(n.autoStart.cursorElement, "", n);
      }
      var ka = { id: "auto-start/base", before: ["actions"], install: function(r) {
        var n = r.interactStatic, o = r.defaults;
        r.usePlugin(Pa), o.base.actionChecker = null, o.base.styleCursor = !0, J(o.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), n.maxInteractions = function(a) {
          return vi(a, r);
        }, r.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: cr, cursorElement: null };
      }, listeners: { "interactions:down": function(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget;
        o.interacting() || so(o, ao(o, a, u, c, n), n);
      }, "interactions:move": function(r, n) {
        (function(o, a) {
          var u = o.interaction, c = o.pointer, d = o.event, v = o.eventTarget;
          u.pointerType !== "mouse" || u.pointerIsDown || u.interacting() || so(u, ao(u, c, d, v, a), a);
        })(r, n), (function(o, a) {
          var u = o.interaction;
          if (u.pointerIsDown && !u.interacting() && u.pointerWasMoved && u.prepared.name) {
            a.fire("autoStart:before-start", o);
            var c = u.interactable, d = u.prepared.name;
            d && c && (c.options[d].manualStart || !cr(c, u.element, u.prepared, a) ? u.stop() : (u.start(u.prepared, c, u.element), uo(u, a)));
          }
        })(r, n);
      }, "interactions:stop": function(r, n) {
        var o = r.interaction, a = o.interactable;
        a && a.options.styleCursor && Pr(o.element, "", n);
      } }, maxInteractions: vi, withinInteractionLimit: cr, validateAction: lr }, mi = ka, Fa = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(r, n) {
        var o = r.interaction, a = r.eventTarget, u = r.dx, c = r.dy;
        if (o.prepared.name === "drag") {
          var d = Math.abs(u), v = Math.abs(c), b = o.interactable.options.drag, S = b.startAxis, x = d > v ? "x" : d < v ? "y" : "xy";
          if (o.prepared.axis = b.lockAxis === "start" ? x[0] : b.lockAxis, x !== "xy" && S !== "xy" && S !== x) {
            o.prepared.name = null;
            for (var I = a, P = function(W) {
              if (W !== o.interactable) {
                var q = o.interactable.options.drag;
                if (!q.manualStart && W.testIgnoreAllow(q, I, a)) {
                  var j = W.getAction(o.downPointer, o.downEvent, o, I);
                  if (j && j.name === "drag" && (function(Y, w) {
                    if (!w) return !1;
                    var A = w.options.drag.startAxis;
                    return Y === "xy" || A === "xy" || A === Y;
                  })(x, W) && mi.validateAction(j, W, I, a, n)) return W;
                }
              }
            }; D.element(I); ) {
              var H = n.interactables.forEachMatch(I, P);
              if (H) {
                o.prepared.name = "drag", o.interactable = H, o.element = I;
                break;
              }
              I = st(I);
            }
          }
        }
      } } };
      function Lr(r) {
        var n = r.prepared && r.prepared.name;
        if (!n) return null;
        var o = r.interactable.options;
        return o[n].hold || o[n].delay;
      }
      var lo = { id: "auto-start/hold", install: function(r) {
        var n = r.defaults;
        r.usePlugin(mi), n.perAction.hold = 0, n.perAction.delay = 0;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(r) {
        var n = r.interaction, o = Lr(n);
        o > 0 && (n.autoStartHoldTimer = setTimeout((function() {
          n.start(n.prepared, n.interactable, n.element);
        }), o));
      }, "interactions:move": function(r) {
        var n = r.interaction, o = r.duplicate;
        n.autoStartHoldTimer && n.pointerWasMoved && !o && (clearTimeout(n.autoStartHoldTimer), n.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(r) {
        var n = r.interaction;
        Lr(n) > 0 && (n.prepared.name = null);
      } }, getHoldDuration: Lr }, co = lo, yi = { id: "auto-start", install: function(r) {
        r.usePlugin(mi), r.usePlugin(co), r.usePlugin(Fa);
      } }, Na = function(r) {
        return /^(always|never|auto)$/.test(r) ? (this.options.preventDefault = r, this) : D.bool(r) ? (this.options.preventDefault = r ? "always" : "never", this) : this.options.preventDefault;
      };
      function fo(r) {
        var n = r.interaction, o = r.event;
        n.interactable && n.interactable.checkAndPreventDefault(o);
      }
      var fr = { id: "core/interactablePreventDefault", install: function(r) {
        var n = r.Interactable;
        n.prototype.preventDefault = Na, n.prototype.checkAndPreventDefault = function(o) {
          return (function(a, u, c) {
            var d = a.options.preventDefault;
            if (d !== "never") if (d !== "always") {
              if (u.events.supportsPassive && /^touch(start|move)$/.test(c.type)) {
                var v = Ce(c.target).document, b = u.getDocOptions(v);
                if (!b || !b.events || b.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(c.type) || D.element(c.target) && Ge(c.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || c.preventDefault();
            } else c.preventDefault();
          })(this, r, o);
        }, r.interactions.docEvents.push({ type: "dragstart", listener: function(o) {
          for (var a = 0, u = r.interactions.list; a < u.length; a++) {
            var c = u[a];
            if (c.element && (c.element === o.target || ae(c.element, o.target))) return void c.interactable.checkAndPreventDefault(o);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce((function(r, n) {
        return r["interactions:".concat(n)] = fo, r;
      }), {}) };
      function dr(r, n) {
        if (n.phaselessTypes[r]) return !0;
        for (var o in n.map) if (r.indexOf(o) === 0 && r.substr(o.length) in n.phases) return !0;
        return !1;
      }
      function Vn(r) {
        var n = {};
        for (var o in r) {
          var a = r[o];
          D.plainObject(a) ? n[o] = Vn(a) : D.array(a) ? n[o] = Tn(a) : n[o] = a;
        }
        return n;
      }
      var kr = (function() {
        function r(n) {
          O(this, r), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = n, this.result = hr(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return L(r, [{ key: "start", value: function(n, o) {
          var a, u, c = n.phase, d = this.interaction, v = (function(S) {
            var x = S.interactable.options[S.prepared.name], I = x.modifiers;
            return I && I.length ? I : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function(P) {
              var H = x[P];
              return H && H.enabled && { options: H, methods: H._methods };
            })).filter((function(P) {
              return !!P;
            }));
          })(d);
          this.prepareStates(v), this.startEdges = J({}, d.edges), this.edges = J({}, this.startEdges), this.startOffset = (a = d.rect, u = o, a ? { left: u.x - a.left, top: u.y - a.top, right: a.right - u.x, bottom: a.bottom - u.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var b = this.fillArg({ phase: c, pageCoords: o, preEnd: !1 });
          return this.result = hr(), this.startAll(b), this.result = this.setAll(b);
        } }, { key: "fillArg", value: function(n) {
          var o = this.interaction;
          return n.interaction = o, n.interactable = o.interactable, n.element = o.element, n.rect || (n.rect = o.rect), n.edges || (n.edges = this.startEdges), n.startOffset = this.startOffset, n;
        } }, { key: "startAll", value: function(n) {
          for (var o = 0, a = this.states; o < a.length; o++) {
            var u = a[o];
            u.methods.start && (n.state = u, u.methods.start(n));
          }
        } }, { key: "setAll", value: function(n) {
          var o = n.phase, a = n.preEnd, u = n.skipModifiers, c = n.rect, d = n.edges;
          n.coords = J({}, n.pageCoords), n.rect = J({}, c), n.edges = J({}, d);
          for (var v = u ? this.states.slice(u) : this.states, b = hr(n.coords, n.rect), S = 0; S < v.length; S++) {
            var x, I = v[S], P = I.options, H = J({}, n.coords), W = null;
            (x = I.methods) != null && x.set && this.shouldDo(P, a, o) && (n.state = I, W = I.methods.set(n), rt(n.edges, n.rect, { x: n.coords.x - H.x, y: n.coords.y - H.y })), b.eventProps.push(W);
          }
          J(this.edges, n.edges), b.delta.x = n.coords.x - n.pageCoords.x, b.delta.y = n.coords.y - n.pageCoords.y, b.rectDelta.left = n.rect.left - c.left, b.rectDelta.right = n.rect.right - c.right, b.rectDelta.top = n.rect.top - c.top, b.rectDelta.bottom = n.rect.bottom - c.bottom;
          var q = this.result.coords, j = this.result.rect;
          if (q && j) {
            var Y = b.rect.left !== j.left || b.rect.right !== j.right || b.rect.top !== j.top || b.rect.bottom !== j.bottom;
            b.changed = Y || q.x !== b.coords.x || q.y !== b.coords.y;
          }
          return b;
        } }, { key: "applyToInteraction", value: function(n) {
          var o = this.interaction, a = n.phase, u = o.coords.cur, c = o.coords.start, d = this.result, v = this.startDelta, b = d.delta;
          a === "start" && J(this.startDelta, d.delta);
          for (var S = 0, x = [[c, v], [u, b]]; S < x.length; S++) {
            var I = x[S], P = I[0], H = I[1];
            P.page.x += H.x, P.page.y += H.y, P.client.x += H.x, P.client.y += H.y;
          }
          var W = this.result.rectDelta, q = n.rect || o.rect;
          q.left += W.left, q.right += W.right, q.top += W.top, q.bottom += W.bottom, q.width = q.right - q.left, q.height = q.bottom - q.top;
        } }, { key: "setAndApply", value: function(n) {
          var o = this.interaction, a = n.phase, u = n.preEnd, c = n.skipModifiers, d = this.setAll(this.fillArg({ preEnd: u, phase: a, pageCoords: n.modifiedCoords || o.coords.cur.page }));
          if (this.result = d, !d.changed && (!c || c < this.states.length) && o.interacting()) return !1;
          if (n.modifiedCoords) {
            var v = o.coords.cur.page, b = { x: n.modifiedCoords.x - v.x, y: n.modifiedCoords.y - v.y };
            d.coords.x += b.x, d.coords.y += b.y, d.delta.x += b.x, d.delta.y += b.y;
          }
          this.applyToInteraction(n);
        } }, { key: "beforeEnd", value: function(n) {
          var o = n.interaction, a = n.event, u = this.states;
          if (u && u.length) {
            for (var c = !1, d = 0; d < u.length; d++) {
              var v = u[d];
              n.state = v;
              var b = v.options, S = v.methods, x = S.beforeEnd && S.beforeEnd(n);
              if (x) return this.endResult = x, !1;
              c = c || !c && this.shouldDo(b, !0, n.phase, !0);
            }
            c && o.move({ event: a, preEnd: !0 });
          }
        } }, { key: "stop", value: function(n) {
          var o = n.interaction;
          if (this.states && this.states.length) {
            var a = J({ states: this.states, interactable: o.interactable, element: o.element, rect: null }, n);
            this.fillArg(a);
            for (var u = 0, c = this.states; u < c.length; u++) {
              var d = c[u];
              a.state = d, d.methods.stop && d.methods.stop(a);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(n) {
          this.states = [];
          for (var o = 0; o < n.length; o++) {
            var a = n[o], u = a.options, c = a.methods, d = a.name;
            this.states.push({ options: u, methods: c, index: o, name: d });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(n) {
          var o = n.interaction, a = o.coords, u = o.rect, c = o.modification;
          if (c.result) {
            for (var d = c.startDelta, v = c.result, b = v.delta, S = v.rectDelta, x = 0, I = [[a.start, d], [a.cur, b]]; x < I.length; x++) {
              var P = I[x], H = P[0], W = P[1];
              H.page.x -= W.x, H.page.y -= W.y, H.client.x -= W.x, H.client.y -= W.y;
            }
            u.left -= S.left, u.right -= S.right, u.top -= S.top, u.bottom -= S.bottom;
          }
        } }, { key: "shouldDo", value: function(n, o, a, u) {
          return !(!n || n.enabled === !1 || u && !n.endOnly || n.endOnly && !o || a === "start" && !n.setStart);
        } }, { key: "copyFrom", value: function(n) {
          this.startOffset = n.startOffset, this.startDelta = n.startDelta, this.startEdges = n.startEdges, this.edges = n.edges, this.states = n.states.map((function(o) {
            return Vn(o);
          })), this.result = hr(J({}, n.result.coords), J({}, n.result.rect));
        } }, { key: "destroy", value: function() {
          for (var n in this) this[n] = null;
        } }]), r;
      })();
      function hr(r, n) {
        return { rect: n, coords: r, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
      }
      function on(r, n) {
        var o = r.defaults, a = { start: r.start, set: r.set, beforeEnd: r.beforeEnd, stop: r.stop }, u = function(c) {
          var d = c || {};
          for (var v in d.enabled = d.enabled !== !1, o) v in d || (d[v] = o[v]);
          var b = { options: d, methods: a, name: n, enable: function() {
            return d.enabled = !0, b;
          }, disable: function() {
            return d.enabled = !1, b;
          } };
          return b;
        };
        return n && typeof n == "string" && (u._defaults = o, u._methods = a), u;
      }
      function pr(r) {
        var n = r.iEvent, o = r.interaction.modification.result;
        o && (n.modifiers = o.eventProps);
      }
      var ho = { id: "modifiers/base", before: ["actions"], install: function(r) {
        r.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(r) {
        var n = r.interaction;
        n.modification = new kr(n);
      }, "interactions:before-action-start": function(r) {
        var n = r.interaction, o = r.interaction.modification;
        o.start(r, n.coords.start.page), n.edges = o.edges, o.applyToInteraction(r);
      }, "interactions:before-action-move": function(r) {
        var n = r.interaction, o = n.modification, a = o.setAndApply(r);
        return n.edges = o.edges, a;
      }, "interactions:before-action-end": function(r) {
        var n = r.interaction, o = n.modification, a = o.beforeEnd(r);
        return n.edges = o.startEdges, a;
      }, "interactions:action-start": pr, "interactions:action-move": pr, "interactions:action-end": pr, "interactions:after-action-start": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:after-action-move": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:stop": function(r) {
        return r.interaction.modification.stop(r);
      } } }, Fr = ho, Nr = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, In = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c, d, v, b, S) {
          var x;
          O(this, o), (x = n.call(this, a)).relatedTarget = null, x.screenX = void 0, x.screenY = void 0, x.button = void 0, x.buttons = void 0, x.ctrlKey = void 0, x.shiftKey = void 0, x.altKey = void 0, x.metaKey = void 0, x.page = void 0, x.client = void 0, x.delta = void 0, x.rect = void 0, x.x0 = void 0, x.y0 = void 0, x.t0 = void 0, x.dt = void 0, x.duration = void 0, x.clientX0 = void 0, x.clientY0 = void 0, x.velocity = void 0, x.speed = void 0, x.swipe = void 0, x.axes = void 0, x.preEnd = void 0, v = v || a.element;
          var I = a.interactable, P = (I && I.options || Nr).deltaSource, H = Ot(I, v, c), W = d === "start", q = d === "end", j = W ? Be(x) : a.prevEvent, Y = W ? a.coords.start : q ? { page: j.page, client: j.client, timeStamp: a.coords.cur.timeStamp } : a.coords.cur;
          return x.page = J({}, Y.page), x.client = J({}, Y.client), x.rect = J({}, a.rect), x.timeStamp = Y.timeStamp, q || (x.page.x -= H.x, x.page.y -= H.y, x.client.x -= H.x, x.client.y -= H.y), x.ctrlKey = u.ctrlKey, x.altKey = u.altKey, x.shiftKey = u.shiftKey, x.metaKey = u.metaKey, x.button = u.button, x.buttons = u.buttons, x.target = v, x.currentTarget = v, x.preEnd = b, x.type = S || c + (d || ""), x.interactable = I, x.t0 = W ? a.pointers[a.pointers.length - 1].downTime : j.t0, x.x0 = a.coords.start.page.x - H.x, x.y0 = a.coords.start.page.y - H.y, x.clientX0 = a.coords.start.client.x - H.x, x.clientY0 = a.coords.start.client.y - H.y, x.delta = W || q ? { x: 0, y: 0 } : { x: x[P].x - j[P].x, y: x[P].y - j[P].y }, x.dt = a.coords.delta.timeStamp, x.duration = x.timeStamp - x.t0, x.velocity = J({}, a.coords.velocity[P]), x.speed = Yt(x.velocity.x, x.velocity.y), x.swipe = q || d === "inertiastart" ? x.getSwipe() : null, x;
        }
        return L(o, [{ key: "getSwipe", value: function() {
          var a = this._interaction;
          if (a.prevEvent.speed < 600 || this.timeStamp - a.prevEvent.timeStamp > 150) return null;
          var u = 180 * Math.atan2(a.prevEvent.velocityY, a.prevEvent.velocityX) / Math.PI;
          u < 0 && (u += 360);
          var c = 112.5 <= u && u < 247.5, d = 202.5 <= u && u < 337.5;
          return { up: d, down: !d && 22.5 <= u && u < 157.5, left: c, right: !c && (292.5 <= u || u < 67.5), angle: u, speed: a.prevEvent.speed, velocity: { x: a.prevEvent.velocityX, y: a.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }]), o;
      })(rn);
      Object.defineProperties(In.prototype, { pageX: { get: function() {
        return this.page.x;
      }, set: function(r) {
        this.page.x = r;
      } }, pageY: { get: function() {
        return this.page.y;
      }, set: function(r) {
        this.page.y = r;
      } }, clientX: { get: function() {
        return this.client.x;
      }, set: function(r) {
        this.client.x = r;
      } }, clientY: { get: function() {
        return this.client.y;
      }, set: function(r) {
        this.client.y = r;
      } }, dx: { get: function() {
        return this.delta.x;
      }, set: function(r) {
        this.delta.x = r;
      } }, dy: { get: function() {
        return this.delta.y;
      }, set: function(r) {
        this.delta.y = r;
      } }, velocityX: { get: function() {
        return this.velocity.x;
      }, set: function(r) {
        this.velocity.x = r;
      } }, velocityY: { get: function() {
        return this.velocity.y;
      }, set: function(r) {
        this.velocity.y = r;
      } } });
      var po = L((function r(n, o, a, u, c) {
        O(this, r), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = n, this.pointer = o, this.event = a, this.downTime = u, this.downTarget = c;
      })), go = (function(r) {
        return r.interactable = "", r.element = "", r.prepared = "", r.pointerIsDown = "", r.pointerWasMoved = "", r._proxy = "", r;
      })({}), vo = (function(r) {
        return r.start = "", r.move = "", r.end = "", r.stop = "", r.interacting = "", r;
      })({}), mo = 0, yo = (function() {
        function r(n) {
          var o = this, a = n.pointerType, u = n.scopeFire;
          O(this, r), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = ur((function(x) {
            this.move(x);
          }), "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = mo++, this._scopeFire = u, this.pointerType = a;
          var c = this;
          this._proxy = {};
          var d = function(x) {
            Object.defineProperty(o._proxy, x, { get: function() {
              return c[x];
            } });
          };
          for (var v in go) d(v);
          var b = function(x) {
            Object.defineProperty(o._proxy, x, { value: function() {
              return c[x].apply(c, arguments);
            } });
          };
          for (var S in vo) b(S);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return L(r, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(n, o, a) {
          var u = this.updatePointer(n, o, a, !0), c = this.pointers[u];
          this._scopeFire("interactions:down", { pointer: n, event: o, eventTarget: a, pointerIndex: u, pointerInfo: c, type: "down", interaction: this });
        } }, { key: "start", value: function(n, o, a) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (n.name === "gesture" ? 2 : 1) || !o.options[n.name].enabled) && (gi(this.prepared, n), this.interactable = o, this.element = a, this.rect = o.getRect(a), this.edges = this.prepared.edges ? J({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(n, o, a) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(n, o, a, !1);
          var u, c, d = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (u = this.coords.cur.client.x - this.coords.start.client.x, c = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Yt(u, c) > this.pointerMoveTolerance);
          var v, b, S, x = this.getPointerIndex(n), I = { pointer: n, pointerIndex: x, pointerInfo: this.pointers[x], event: o, type: "move", eventTarget: a, dx: u, dy: c, duplicate: d, interaction: this };
          d || (v = this.coords.velocity, b = this.coords.delta, S = Math.max(b.timeStamp / 1e3, 1e-3), v.page.x = b.page.x / S, v.page.y = b.page.y / S, v.client.x = b.client.x / S, v.client.y = b.client.y / S, v.timeStamp = S), this._scopeFire("interactions:move", I), d || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && G(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(n) {
          n && n.event || Q(this.coords.delta), (n = J({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, n || {})).phase = "move", this._doPhase(n);
        } }, { key: "pointerUp", value: function(n, o, a, u) {
          var c = this.getPointerIndex(n);
          c === -1 && (c = this.updatePointer(n, o, a, !1));
          var d = /cancel$/i.test(o.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(d), { pointer: n, pointerIndex: c, pointerInfo: this.pointers[c], event: o, eventTarget: a, type: d, curEventTarget: u, interaction: this }), this.simulation || this.end(o), this.removePointer(n, o);
        } }, { key: "documentBlur", value: function(n) {
          this.end(n), this._scopeFire("interactions:blur", { event: n, type: "blur", interaction: this });
        } }, { key: "end", value: function(n) {
          var o;
          this._ending = !0, n = n || this._latestPointer.event, this.interacting() && (o = this._doPhase({ event: n, interaction: this, phase: "end" })), this._ending = !1, o === !0 && this.stop();
        } }, { key: "currentAction", value: function() {
          return this._interacting ? this.prepared.name : null;
        } }, { key: "interacting", value: function() {
          return this._interacting;
        } }, { key: "stop", value: function() {
          this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
        } }, { key: "getPointerIndex", value: function(n) {
          var o = ye(n);
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : gn(this.pointers, (function(a) {
            return a.id === o;
          }));
        } }, { key: "getPointerInfo", value: function(n) {
          return this.pointers[this.getPointerIndex(n)];
        } }, { key: "updatePointer", value: function(n, o, a, u) {
          var c, d, v, b = ye(n), S = this.getPointerIndex(n), x = this.pointers[S];
          return u = u !== !1 && (u || /(down|start)$/i.test(o.type)), x ? x.pointer = n : (x = new po(b, n, o, null, null), S = this.pointers.length, this.pointers.push(x)), ce(this.coords.cur, this.pointers.map((function(I) {
            return I.pointer;
          })), this._now()), c = this.coords.delta, d = this.coords.prev, v = this.coords.cur, c.page.x = v.page.x - d.page.x, c.page.y = v.page.y - d.page.y, c.client.x = v.client.x - d.client.x, c.client.y = v.client.y - d.client.y, c.timeStamp = v.timeStamp - d.timeStamp, u && (this.pointerIsDown = !0, x.downTime = this.coords.cur.timeStamp, x.downTarget = a, It(this.downPointer, n), this.interacting() || (G(this.coords.start, this.coords.cur), G(this.coords.prev, this.coords.cur), this.downEvent = o, this.pointerWasMoved = !1)), this._updateLatestPointer(n, o, a), this._scopeFire("interactions:update-pointer", { pointer: n, event: o, eventTarget: a, down: u, pointerInfo: x, pointerIndex: S, interaction: this }), S;
        } }, { key: "removePointer", value: function(n, o) {
          var a = this.getPointerIndex(n);
          if (a !== -1) {
            var u = this.pointers[a];
            this._scopeFire("interactions:remove-pointer", { pointer: n, event: o, eventTarget: null, pointerIndex: a, pointerInfo: u, interaction: this }), this.pointers.splice(a, 1), this.pointerIsDown = !1;
          }
        } }, { key: "_updateLatestPointer", value: function(n, o, a) {
          this._latestPointer.pointer = n, this._latestPointer.event = o, this._latestPointer.eventTarget = a;
        } }, { key: "destroy", value: function() {
          this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
        } }, { key: "_createPreparedEvent", value: function(n, o, a, u) {
          return new In(this, n, this.prepared.name, o, this.element, a, u);
        } }, { key: "_fireEvent", value: function(n) {
          var o;
          (o = this.interactable) == null || o.fire(n), (!this.prevEvent || n.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = n);
        } }, { key: "_doPhase", value: function(n) {
          var o = n.event, a = n.phase, u = n.preEnd, c = n.type, d = this.rect;
          if (d && a === "move" && (rt(this.edges, d, this.coords.delta[this.interactable.options.deltaSource]), d.width = d.right - d.left, d.height = d.bottom - d.top), this._scopeFire("interactions:before-action-".concat(a), n) === !1) return !1;
          var v = n.iEvent = this._createPreparedEvent(o, a, u, c);
          return this._scopeFire("interactions:action-".concat(a), n), a === "start" && (this.prevEvent = v), this._fireEvent(v), this._scopeFire("interactions:after-action-".concat(a), n), !0;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), r;
      })();
      function bi(r) {
        xi(r.interaction);
      }
      function xi(r) {
        if (!(function(o) {
          return !(!o.offset.pending.x && !o.offset.pending.y);
        })(r)) return !1;
        var n = r.offset.pending;
        return wi(r.coords.cur, n), wi(r.coords.delta, n), rt(r.edges, r.rect, n), n.x = 0, n.y = 0, !0;
      }
      function Ba(r) {
        var n = r.x, o = r.y;
        this.offset.pending.x += n, this.offset.pending.y += o, this.offset.total.x += n, this.offset.total.y += o;
      }
      function wi(r, n) {
        var o = r.page, a = r.client, u = n.x, c = n.y;
        o.x += u, o.y += c, a.x += u, a.y += c;
      }
      vo.offsetBy = "";
      var Wa = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(r) {
        r.Interaction.prototype.offsetBy = Ba;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(r) {
        return (function(n) {
          n.pointerIsDown && (wi(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
        })(r.interaction);
      }, "interactions:before-action-start": bi, "interactions:before-action-move": bi, "interactions:before-action-end": function(r) {
        var n = r.interaction;
        if (xi(n)) return n.move({ offset: !0 }), n.end(), !1;
      }, "interactions:stop": function(r) {
        var n = r.interaction;
        n.offset.total.x = 0, n.offset.total.y = 0, n.offset.pending.x = 0, n.offset.pending.y = 0;
      } } }, _i = Wa, Ua = (function() {
        function r(n) {
          O(this, r), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = n;
        }
        return L(r, [{ key: "start", value: function(n) {
          var o = this.interaction, a = Br(o);
          if (!a || !a.enabled) return !1;
          var u = o.coords.velocity.client, c = Yt(u.x, u.y), d = this.modification || (this.modification = new kr(o));
          if (d.copyFrom(o.modification), this.t0 = o._now(), this.allowResume = a.allowResume, this.v0 = c, this.currentOffset = { x: 0, y: 0 }, this.startCoords = o.coords.cur.page, this.modifierArg = d.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - o.coords.cur.timeStamp < 50 && c > a.minSpeed && c > a.endSpeed) this.startInertia();
          else {
            if (d.result = d.setAll(this.modifierArg), !d.result.changed) return !1;
            this.startSmoothEnd();
          }
          return o.modification.result.rect = null, o.offsetBy(this.targetOffset), o._doPhase({ interaction: o, event: n, phase: "inertiastart" }), o.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), o.modification.result.rect = null, this.active = !0, o.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var n = this, o = this.interaction.coords.velocity.client, a = Br(this.interaction), u = a.resistance, c = -Math.log(a.endSpeed / this.v0) / u;
          this.targetOffset = { x: (o.x - c) / u, y: (o.y - c) / u }, this.te = c, this.lambda_v0 = u / this.v0, this.one_ve_v0 = 1 - a.endSpeed / this.v0;
          var d = this.modification, v = this.modifierArg;
          v.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, d.result = d.setAll(v), d.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + d.result.delta.x, y: this.targetOffset.y + d.result.delta.y }), this.onNextFrame((function() {
            return n.inertiaTick();
          }));
        } }, { key: "startSmoothEnd", value: function() {
          var n = this;
          this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame((function() {
            return n.smoothEndTick();
          }));
        } }, { key: "onNextFrame", value: function(n) {
          var o = this;
          this.timeout = On.request((function() {
            o.active && n();
          }));
        } }, { key: "inertiaTick", value: function() {
          var n, o, a, u, c, d, v, b = this, S = this.interaction, x = Br(S).resistance, I = (S._now() - this.t0) / 1e3;
          if (I < this.te) {
            var P, H = 1 - (Math.exp(-x * I) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (n = 0, o = 0, a = this.targetOffset.x, u = this.targetOffset.y, c = this.modifiedOffset.x, d = this.modifiedOffset.y, P = { x: bo(v = H, n, a, c), y: bo(v, o, u, d) }) : P = { x: this.targetOffset.x * H, y: this.targetOffset.y * H };
            var W = { x: P.x - this.currentOffset.x, y: P.y - this.currentOffset.y };
            this.currentOffset.x += W.x, this.currentOffset.y += W.y, S.offsetBy(W), S.move(), this.onNextFrame((function() {
              return b.inertiaTick();
            }));
          } else S.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var n = this, o = this.interaction, a = o._now() - this.t0, u = Br(o).smoothEndDuration;
          if (a < u) {
            var c = { x: Wr(a, 0, this.targetOffset.x, u), y: Wr(a, 0, this.targetOffset.y, u) }, d = { x: c.x - this.currentOffset.x, y: c.y - this.currentOffset.y };
            this.currentOffset.x += d.x, this.currentOffset.y += d.y, o.offsetBy(d), o.move({ skipModifiers: this.modifierCount }), this.onNextFrame((function() {
              return n.smoothEndTick();
            }));
          } else o.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(n) {
          var o = n.pointer, a = n.event, u = n.eventTarget, c = this.interaction;
          c.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), c.updatePointer(o, a, u, !0), c._doPhase({ interaction: c, event: a, phase: "resume" }), G(c.coords.prev, c.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, On.cancel(this.timeout);
        } }]), r;
      })();
      function Br(r) {
        var n = r.interactable, o = r.prepared;
        return n && n.options && o.name && n.options[o.name].inertia;
      }
      var Ha = { id: "inertia", before: ["modifiers", "actions"], install: function(r) {
        var n = r.defaults;
        r.usePlugin(_i), r.usePlugin(Fr), r.actions.phases.inertiastart = !0, r.actions.phases.resume = !0, n.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(r) {
        var n = r.interaction;
        n.inertia = new Ua(n);
      }, "interactions:before-action-end": function(r) {
        var n = r.interaction, o = r.event;
        return (!n._interacting || n.simulation || !n.inertia.start(o)) && null;
      }, "interactions:down": function(r) {
        var n = r.interaction, o = r.eventTarget, a = n.inertia;
        if (a.active) for (var u = o; D.element(u); ) {
          if (u === n.element) {
            a.resume(r);
            break;
          }
          u = st(u);
        }
      }, "interactions:stop": function(r) {
        var n = r.interaction.inertia;
        n.active && n.stop();
      }, "interactions:before-action-resume": function(r) {
        var n = r.interaction.modification;
        n.stop(r), n.start(r, r.interaction.coords.cur.page), n.applyToInteraction(r);
      }, "interactions:before-action-inertiastart": function(r) {
        return r.interaction.modification.setAndApply(r);
      }, "interactions:action-resume": pr, "interactions:action-inertiastart": pr, "interactions:after-action-inertiastart": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:after-action-resume": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      } } };
      function bo(r, n, o, a) {
        var u = 1 - r;
        return u * u * n + 2 * u * r * o + r * r * a;
      }
      function Wr(r, n, o, a) {
        return -o * (r /= a) * (r - 2) + n;
      }
      var qa = Ha;
      function xo(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          if (r.immediatePropagationStopped) break;
          a(r);
        }
      }
      var wo = (function() {
        function r(n) {
          O(this, r), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = J({}, n || {});
        }
        return L(r, [{ key: "fire", value: function(n) {
          var o, a = this.global;
          (o = this.types[n.type]) && xo(n, o), !n.propagationStopped && a && (o = a[n.type]) && xo(n, o);
        } }, { key: "on", value: function(n, o) {
          var a = $t(n, o);
          for (n in a) this.types[n] = En(this.types[n] || [], a[n]);
        } }, { key: "off", value: function(n, o) {
          var a = $t(n, o);
          for (n in a) {
            var u = this.types[n];
            if (u && u.length) for (var c = 0, d = a[n]; c < d.length; c++) {
              var v = d[c], b = u.indexOf(v);
              b !== -1 && u.splice(b, 1);
            }
          }
        } }, { key: "getRect", value: function(n) {
          return null;
        } }]), r;
      })(), Ga = (function() {
        function r(n) {
          O(this, r), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = n, It(this, n);
        }
        return L(r, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), r;
      })();
      function gr(r) {
        return D.object(r) ? { capture: !!r.capture, passive: !!r.passive } : { capture: !!r, passive: !1 };
      }
      function Ue(r, n) {
        return r === n || (typeof r == "boolean" ? !!n.capture === r && !n.passive : !!r.capture == !!n.capture && !!r.passive == !!n.passive);
      }
      var Ye = { id: "events", install: function(r) {
        var n, o = [], a = {}, u = [], c = { add: d, remove: v, addDelegate: function(x, I, P, H, W) {
          var q = gr(W);
          if (!a[P]) {
            a[P] = [];
            for (var j = 0; j < u.length; j++) {
              var Y = u[j];
              d(Y, P, b), d(Y, P, S, !0);
            }
          }
          var w = a[P], A = sr(w, (function(R) {
            return R.selector === x && R.context === I;
          }));
          A || (A = { selector: x, context: I, listeners: [] }, w.push(A)), A.listeners.push({ func: H, options: q });
        }, removeDelegate: function(x, I, P, H, W) {
          var q, j = gr(W), Y = a[P], w = !1;
          if (Y)
            for (q = Y.length - 1; q >= 0; q--) {
              var A = Y[q];
              if (A.selector === x && A.context === I) {
                for (var R = A.listeners, k = R.length - 1; k >= 0; k--) {
                  var $ = R[k];
                  if ($.func === H && Ue($.options, j)) {
                    R.splice(k, 1), R.length || (Y.splice(q, 1), v(I, P, b), v(I, P, S, !0)), w = !0;
                    break;
                  }
                }
                if (w) break;
              }
            }
        }, delegateListener: b, delegateUseCapture: S, delegatedEvents: a, documents: u, targets: o, supportsOptions: !1, supportsPassive: !1 };
        function d(x, I, P, H) {
          if (x.addEventListener) {
            var W = gr(H), q = sr(o, (function(j) {
              return j.eventTarget === x;
            }));
            q || (q = { eventTarget: x, events: {} }, o.push(q)), q.events[I] || (q.events[I] = []), sr(q.events[I], (function(j) {
              return j.func === P && Ue(j.options, W);
            })) || (x.addEventListener(I, P, c.supportsOptions ? W : W.capture), q.events[I].push({ func: P, options: W }));
          }
        }
        function v(x, I, P, H) {
          if (x.addEventListener && x.removeEventListener) {
            var W = gn(o, (function(ve) {
              return ve.eventTarget === x;
            })), q = o[W];
            if (q && q.events) if (I !== "all") {
              var j = !1, Y = q.events[I];
              if (Y) {
                if (P === "all") {
                  for (var w = Y.length - 1; w >= 0; w--) {
                    var A = Y[w];
                    v(x, I, A.func, A.options);
                  }
                  return;
                }
                for (var R = gr(H), k = 0; k < Y.length; k++) {
                  var $ = Y[k];
                  if ($.func === P && Ue($.options, R)) {
                    x.removeEventListener(I, P, c.supportsOptions ? R : R.capture), Y.splice(k, 1), Y.length === 0 && (delete q.events[I], j = !0);
                    break;
                  }
                }
              }
              j && !Object.keys(q.events).length && o.splice(W, 1);
            } else for (I in q.events) q.events.hasOwnProperty(I) && v(x, I, "all");
          }
        }
        function b(x, I) {
          for (var P = gr(I), H = new Ga(x), W = a[x.type], q = nn(x)[0], j = q; D.element(j); ) {
            for (var Y = 0; Y < W.length; Y++) {
              var w = W[Y], A = w.selector, R = w.context;
              if (Ge(j, A) && ae(R, q) && ae(R, j)) {
                var k = w.listeners;
                H.currentTarget = j;
                for (var $ = 0; $ < k.length; $++) {
                  var ve = k[$];
                  Ue(ve.options, P) && ve.func(H);
                }
              }
            }
            j = st(j);
          }
        }
        function S(x) {
          return b(x, !0);
        }
        return (n = r.document) == null || n.createElement("div").addEventListener("test", null, { get capture() {
          return c.supportsOptions = !0;
        }, get passive() {
          return c.supportsPassive = !0;
        } }), r.events = c, c;
      } }, Si = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(r) {
        for (var n = 0, o = Si.methodOrder; n < o.length; n++) {
          var a = o[n], u = Si[a](r);
          if (u) return u;
        }
        return null;
      }, simulationResume: function(r) {
        var n = r.pointerType, o = r.eventType, a = r.eventTarget, u = r.scope;
        if (!/down|start/i.test(o)) return null;
        for (var c = 0, d = u.interactions.list; c < d.length; c++) {
          var v = d[c], b = a;
          if (v.simulation && v.simulation.allowResume && v.pointerType === n) for (; b; ) {
            if (b === v.element) return v;
            b = st(b);
          }
        }
        return null;
      }, mouseOrPen: function(r) {
        var n, o = r.pointerId, a = r.pointerType, u = r.eventType, c = r.scope;
        if (a !== "mouse" && a !== "pen") return null;
        for (var d = 0, v = c.interactions.list; d < v.length; d++) {
          var b = v[d];
          if (b.pointerType === a) {
            if (b.simulation && !_o(b, o)) continue;
            if (b.interacting()) return b;
            n || (n = b);
          }
        }
        if (n) return n;
        for (var S = 0, x = c.interactions.list; S < x.length; S++) {
          var I = x[S];
          if (!(I.pointerType !== a || /down/i.test(u) && I.simulation)) return I;
        }
        return null;
      }, hasPointer: function(r) {
        for (var n = r.pointerId, o = 0, a = r.scope.interactions.list; o < a.length; o++) {
          var u = a[o];
          if (_o(u, n)) return u;
        }
        return null;
      }, idle: function(r) {
        for (var n = r.pointerType, o = 0, a = r.scope.interactions.list; o < a.length; o++) {
          var u = a[o];
          if (u.pointers.length === 1) {
            var c = u.interactable;
            if (c && (!c.options.gesture || !c.options.gesture.enabled)) continue;
          } else if (u.pointers.length >= 2) continue;
          if (!u.interacting() && n === u.pointerType) return u;
        }
        return null;
      } };
      function _o(r, n) {
        return r.pointers.some((function(o) {
          return o.id === n;
        }));
      }
      var Xa = Si, Ei = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function So(r, n) {
        return function(o) {
          var a = n.interactions.list, u = tn(o), c = nn(o), d = c[0], v = c[1], b = [];
          if (/^touch/.test(o.type)) {
            n.prevTouchTime = n.now();
            for (var S = 0, x = o.changedTouches; S < x.length; S++) {
              var I = x[S], P = { pointer: I, pointerId: ye(I), pointerType: u, eventType: o.type, eventTarget: d, curEventTarget: v, scope: n }, H = Eo(P);
              b.push([P.pointer, P.eventTarget, P.curEventTarget, H]);
            }
          } else {
            var W = !1;
            if (!Fe.supportsPointerEvent && /mouse/.test(o.type)) {
              for (var q = 0; q < a.length && !W; q++) W = a[q].pointerType !== "mouse" && a[q].pointerIsDown;
              W = W || n.now() - n.prevTouchTime < 500 || o.timeStamp === 0;
            }
            if (!W) {
              var j = { pointer: o, pointerId: ye(o), pointerType: u, eventType: o.type, curEventTarget: v, eventTarget: d, scope: n }, Y = Eo(j);
              b.push([j.pointer, j.eventTarget, j.curEventTarget, Y]);
            }
          }
          for (var w = 0; w < b.length; w++) {
            var A = b[w], R = A[0], k = A[1], $ = A[2];
            A[3][r](R, o, k, $);
          }
        };
      }
      function Eo(r) {
        var n = r.pointerType, o = r.scope, a = { interaction: Xa.search(r), searchDetails: r };
        return o.fire("interactions:find", a), a.interaction || o.interactions.new({ pointerType: n });
      }
      function Ur(r, n) {
        var o = r.doc, a = r.scope, u = r.options, c = a.interactions.docEvents, d = a.events, v = d[n];
        for (var b in a.browser.isIOS && !u.events && (u.events = { passive: !1 }), d.delegatedEvents) v(o, b, d.delegateListener), v(o, b, d.delegateUseCapture, !0);
        for (var S = u && u.events, x = 0; x < c.length; x++) {
          var I = c[x];
          v(o, I.type, I.listener, S);
        }
      }
      var $a = { id: "core/interactions", install: function(r) {
        for (var n = {}, o = 0; o < Ei.length; o++) {
          var a = Ei[o];
          n[a] = So(a, r);
        }
        var u, c = Fe.pEventTypes;
        function d() {
          for (var v = 0, b = r.interactions.list; v < b.length; v++) {
            var S = b[v];
            if (S.pointerIsDown && S.pointerType === "touch" && !S._interacting) for (var x = function() {
              var H = P[I];
              r.documents.some((function(W) {
                return ae(W.doc, H.downTarget);
              })) || S.removePointer(H.pointer, H.event);
            }, I = 0, P = S.pointers; I < P.length; I++) x();
          }
        }
        (u = re.PointerEvent ? [{ type: c.down, listener: d }, { type: c.down, listener: n.pointerDown }, { type: c.move, listener: n.pointerMove }, { type: c.up, listener: n.pointerUp }, { type: c.cancel, listener: n.pointerUp }] : [{ type: "mousedown", listener: n.pointerDown }, { type: "mousemove", listener: n.pointerMove }, { type: "mouseup", listener: n.pointerUp }, { type: "touchstart", listener: d }, { type: "touchstart", listener: n.pointerDown }, { type: "touchmove", listener: n.pointerMove }, { type: "touchend", listener: n.pointerUp }, { type: "touchcancel", listener: n.pointerUp }]).push({ type: "blur", listener: function(v) {
          for (var b = 0, S = r.interactions.list; b < S.length; b++)
            S[b].documentBlur(v);
        } }), r.prevTouchTime = 0, r.Interaction = (function(v) {
          V(S, v);
          var b = me(S);
          function S() {
            return O(this, S), b.apply(this, arguments);
          }
          return L(S, [{ key: "pointerMoveTolerance", get: function() {
            return r.interactions.pointerMoveTolerance;
          }, set: function(x) {
            r.interactions.pointerMoveTolerance = x;
          } }, { key: "_now", value: function() {
            return r.now();
          } }]), S;
        })(yo), r.interactions = { list: [], new: function(v) {
          v.scopeFire = function(S, x) {
            return r.fire(S, x);
          };
          var b = new r.Interaction(v);
          return r.interactions.list.push(b), b;
        }, listeners: n, docEvents: u, pointerMoveTolerance: 1 }, r.usePlugin(fr);
      }, listeners: { "scope:add-document": function(r) {
        return Ur(r, "add");
      }, "scope:remove-document": function(r) {
        return Ur(r, "remove");
      }, "interactable:unset": function(r, n) {
        for (var o = r.interactable, a = n.interactions.list.length - 1; a >= 0; a--) {
          var u = n.interactions.list[a];
          u.interactable === o && (u.stop(), n.fire("interactions:destroy", { interaction: u }), u.destroy(), n.interactions.list.length > 2 && n.interactions.list.splice(a, 1));
        }
      } }, onDocSignal: Ur, doOnInteractions: So, methodNames: Ei }, ct = $a, an = (function(r) {
        return r[r.On = 0] = "On", r[r.Off = 1] = "Off", r;
      })(an || {}), kn = (function() {
        function r(n, o, a, u) {
          O(this, r), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new wo(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = o.actions, this.target = n, this._context = o.context || a, this._win = Ce(Xt(n) ? this._context : n), this._doc = this._win.document, this._scopeEvents = u, this.set(o);
        }
        return L(r, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(n, o) {
          return D.func(o.onstart) && this.on("".concat(n, "start"), o.onstart), D.func(o.onmove) && this.on("".concat(n, "move"), o.onmove), D.func(o.onend) && this.on("".concat(n, "end"), o.onend), D.func(o.oninertiastart) && this.on("".concat(n, "inertiastart"), o.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(n, o, a) {
          var u, c = this, d = (u = this._actions.map[n]) == null ? void 0 : u.filterEventType, v = function(b) {
            return (d == null || d(b)) && dr(b, c._actions);
          };
          (D.array(o) || D.object(o)) && this._onOff(an.Off, n, o, void 0, v), (D.array(a) || D.object(a)) && this._onOff(an.On, n, a, void 0, v);
        } }, { key: "setPerAction", value: function(n, o) {
          var a = this._defaults;
          for (var u in o) {
            var c = u, d = this.options[n], v = o[c];
            c === "listeners" && this.updatePerActionListeners(n, d.listeners, v), D.array(v) ? d[c] = Tn(v) : D.plainObject(v) ? (d[c] = J(d[c] || {}, Vn(v)), D.object(a.perAction[c]) && "enabled" in a.perAction[c] && (d[c].enabled = v.enabled !== !1)) : D.bool(v) && D.object(a.perAction[c]) ? d[c].enabled = v : d[c] = v;
          }
        } }, { key: "getRect", value: function(n) {
          return n = n || (D.element(this.target) ? this.target : null), D.string(this.target) && (n = n || this._context.querySelector(this.target)), ht(n);
        } }, { key: "rectChecker", value: function(n) {
          var o = this;
          return D.func(n) ? (this.getRect = function(a) {
            var u = J({}, n.apply(o, a));
            return "width" in u || (u.width = u.right - u.left, u.height = u.bottom - u.top), u;
          }, this) : n === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(n, o) {
          if (Xt(o) || D.object(o)) {
            for (var a in this.options[n] = o, this._actions.map) this.options[a][n] = o;
            return this;
          }
          return this.options[n];
        } }, { key: "origin", value: function(n) {
          return this._backCompatOption("origin", n);
        } }, { key: "deltaSource", value: function(n) {
          return n === "page" || n === "client" ? (this.options.deltaSource = n, this) : this.options.deltaSource;
        } }, { key: "getAllElements", value: function() {
          var n = this.target;
          return D.string(n) ? Array.from(this._context.querySelectorAll(n)) : D.func(n) && n.getAllElements ? n.getAllElements() : D.element(n) ? [n] : [];
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(n) {
          return this._context === n.ownerDocument || ae(this._context, n);
        } }, { key: "testIgnoreAllow", value: function(n, o, a) {
          return !this.testIgnore(n.ignoreFrom, o, a) && this.testAllow(n.allowFrom, o, a);
        } }, { key: "testAllow", value: function(n, o, a) {
          return !n || !!D.element(a) && (D.string(n) ? ut(a, n, o) : !!D.element(n) && ae(n, a));
        } }, { key: "testIgnore", value: function(n, o, a) {
          return !(!n || !D.element(a)) && (D.string(n) ? ut(a, n, o) : !!D.element(n) && ae(n, a));
        } }, { key: "fire", value: function(n) {
          return this.events.fire(n), this;
        } }, { key: "_onOff", value: function(n, o, a, u, c) {
          D.object(o) && !D.array(o) && (u = a, a = null);
          var d = $t(o, a, c);
          for (var v in d) {
            v === "wheel" && (v = Fe.wheelEvent);
            for (var b = 0, S = d[v]; b < S.length; b++) {
              var x = S[b];
              dr(v, this._actions) ? this.events[n === an.On ? "on" : "off"](v, x) : D.string(this.target) ? this._scopeEvents[n === an.On ? "addDelegate" : "removeDelegate"](this.target, this._context, v, x, u) : this._scopeEvents[n === an.On ? "add" : "remove"](this.target, v, x, u);
            }
          }
          return this;
        } }, { key: "on", value: function(n, o, a) {
          return this._onOff(an.On, n, o, a);
        } }, { key: "off", value: function(n, o, a) {
          return this._onOff(an.Off, n, o, a);
        } }, { key: "set", value: function(n) {
          var o = this._defaults;
          for (var a in D.object(n) || (n = {}), this.options = Vn(o.base), this._actions.methodDict) {
            var u = a, c = this._actions.methodDict[u];
            this.options[u] = {}, this.setPerAction(u, J(J({}, o.perAction), o.actions[u])), this[c](n[u]);
          }
          for (var d in n) d !== "getRect" ? D.func(this[d]) && this[d](n[d]) : this.rectChecker(n.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (D.string(this.target)) for (var n in this._scopeEvents.delegatedEvents) for (var o = this._scopeEvents.delegatedEvents[n], a = o.length - 1; a >= 0; a--) {
            var u = o[a], c = u.selector, d = u.context, v = u.listeners;
            c === this.target && d === this._context && o.splice(a, 1);
            for (var b = v.length - 1; b >= 0; b--) this._scopeEvents.removeDelegate(this.target, this._context, n, v[b][0], v[b][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), r;
      })(), To = (function() {
        function r(n) {
          var o = this;
          O(this, r), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = n, n.addListeners({ "interactable:unset": function(a) {
            var u = a.interactable, c = u.target, d = D.string(c) ? o.selectorMap[c] : c[o.scope.id], v = gn(d, (function(b) {
              return b === u;
            }));
            d.splice(v, 1);
          } });
        }
        return L(r, [{ key: "new", value: function(n, o) {
          o = J(o || {}, { actions: this.scope.actions });
          var a = new this.scope.Interactable(n, o, this.scope.document, this.scope.events);
          return this.scope.addDocument(a._doc), this.list.push(a), D.string(n) ? (this.selectorMap[n] || (this.selectorMap[n] = []), this.selectorMap[n].push(a)) : (a.target[this.scope.id] || Object.defineProperty(n, this.scope.id, { value: [], configurable: !0 }), n[this.scope.id].push(a)), this.scope.fire("interactable:new", { target: n, options: o, interactable: a, win: this.scope._win }), a;
        } }, { key: "getExisting", value: function(n, o) {
          var a = o && o.context || this.scope.document, u = D.string(n), c = u ? this.selectorMap[n] : n[this.scope.id];
          if (c) return sr(c, (function(d) {
            return d._context === a && (u || d.inContext(n));
          }));
        } }, { key: "forEachMatch", value: function(n, o) {
          for (var a = 0, u = this.list; a < u.length; a++) {
            var c = u[a], d = void 0;
            if ((D.string(c.target) ? D.element(n) && Ge(n, c.target) : n === c.target) && c.inContext(n) && (d = o(c)), d !== void 0) return d;
          }
        } }]), r;
      })(), Ti = (function() {
        function r() {
          var n = this;
          O(this, r), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = Fe, this.defaults = Vn(Nr), this.Eventable = wo, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = (function(a) {
            var u = function c(d, v) {
              var b = a.interactables.getExisting(d, v);
              return b || ((b = a.interactables.new(d, v)).events.global = c.globalEvents), b;
            };
            return u.getPointerAverage = oe, u.getTouchBBox = et, u.getTouchDistance = lt, u.getTouchAngle = bt, u.getElementRect = ht, u.getElementClientRect = Je, u.matchesSelector = Ge, u.closest = We, u.globalEvents = {}, u.version = "1.10.27", u.scope = a, u.use = function(c, d) {
              return this.scope.usePlugin(c, d), this;
            }, u.isSet = function(c, d) {
              return !!this.scope.interactables.get(c, d && d.context);
            }, u.on = ur((function(c, d, v) {
              if (D.string(c) && c.search(" ") !== -1 && (c = c.trim().split(/ +/)), D.array(c)) {
                for (var b = 0, S = c; b < S.length; b++) {
                  var x = S[b];
                  this.on(x, d, v);
                }
                return this;
              }
              if (D.object(c)) {
                for (var I in c) this.on(I, c[I], d);
                return this;
              }
              return dr(c, this.scope.actions) ? this.globalEvents[c] ? this.globalEvents[c].push(d) : this.globalEvents[c] = [d] : this.scope.events.add(this.scope.document, c, d, { options: v }), this;
            }), "The interact.on() method is being deprecated"), u.off = ur((function(c, d, v) {
              if (D.string(c) && c.search(" ") !== -1 && (c = c.trim().split(/ +/)), D.array(c)) {
                for (var b = 0, S = c; b < S.length; b++) {
                  var x = S[b];
                  this.off(x, d, v);
                }
                return this;
              }
              if (D.object(c)) {
                for (var I in c) this.off(I, c[I], d);
                return this;
              }
              var P;
              return dr(c, this.scope.actions) ? c in this.globalEvents && (P = this.globalEvents[c].indexOf(d)) !== -1 && this.globalEvents[c].splice(P, 1) : this.scope.events.remove(this.scope.document, c, d, v), this;
            }), "The interact.off() method is being deprecated"), u.debug = function() {
              return this.scope;
            }, u.supportsTouch = function() {
              return Fe.supportsTouch;
            }, u.supportsPointerEvent = function() {
              return Fe.supportsPointerEvent;
            }, u.stop = function() {
              for (var c = 0, d = this.scope.interactions.list; c < d.length; c++) d[c].stop();
              return this;
            }, u.pointerMoveTolerance = function(c) {
              return D.number(c) ? (this.scope.interactions.pointerMoveTolerance = c, this) : this.scope.interactions.pointerMoveTolerance;
            }, u.addDocument = function(c, d) {
              this.scope.addDocument(c, d);
            }, u.removeDocument = function(c) {
              this.scope.removeDocument(c);
            }, u;
          })(this), this.InteractEvent = In, this.Interactable = void 0, this.interactables = new To(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(a) {
            return n.removeDocument(a.target);
          };
          var o = this;
          this.Interactable = (function(a) {
            V(c, a);
            var u = me(c);
            function c() {
              return O(this, c), u.apply(this, arguments);
            }
            return L(c, [{ key: "_defaults", get: function() {
              return o.defaults;
            } }, { key: "set", value: function(d) {
              return Re(ge(c.prototype), "set", this).call(this, d), o.fire("interactable:set", { options: d, interactable: this }), this;
            } }, { key: "unset", value: function() {
              Re(ge(c.prototype), "unset", this).call(this);
              var d = o.interactables.list.indexOf(this);
              d < 0 || (o.interactables.list.splice(d, 1), o.fire("interactable:unset", { interactable: this }));
            } }]), c;
          })(kn);
        }
        return L(r, [{ key: "addListeners", value: function(n, o) {
          this.listenerMaps.push({ id: o, map: n });
        } }, { key: "fire", value: function(n, o) {
          for (var a = 0, u = this.listenerMaps; a < u.length; a++) {
            var c = u[a].map[n];
            if (c && c(o, this, n) === !1) return !1;
          }
        } }, { key: "init", value: function(n) {
          return this.isInitialized ? this : (function(o, a) {
            return o.isInitialized = !0, D.window(a) && Se(a), re.init(a), Fe.init(a), On.init(a), o.window = a, o.document = a.document, o.usePlugin(ct), o.usePlugin(Ye), o;
          })(this, n);
        } }, { key: "pluginIsInstalled", value: function(n) {
          var o = n.id;
          return o ? !!this._plugins.map[o] : this._plugins.list.indexOf(n) !== -1;
        } }, { key: "usePlugin", value: function(n, o) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(n)) return this;
          if (n.id && (this._plugins.map[n.id] = n), this._plugins.list.push(n), n.install && n.install(this, o), n.listeners && n.before) {
            for (var a = 0, u = this.listenerMaps.length, c = n.before.reduce((function(v, b) {
              return v[b] = !0, v[Rt(b)] = !0, v;
            }), {}); a < u; a++) {
              var d = this.listenerMaps[a].id;
              if (d && (c[d] || c[Rt(d)])) break;
            }
            this.listenerMaps.splice(a, 0, { id: n.id, map: n.listeners });
          } else n.listeners && this.listenerMaps.push({ id: n.id, map: n.listeners });
          return this;
        } }, { key: "addDocument", value: function(n, o) {
          if (this.getDocIndex(n) !== -1) return !1;
          var a = Ce(n);
          o = o ? J({}, o) : {}, this.documents.push({ doc: n, options: o }), this.events.documents.push(n), n !== this.document && this.events.add(a, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: n, window: a, scope: this, options: o });
        } }, { key: "removeDocument", value: function(n) {
          var o = this.getDocIndex(n), a = Ce(n), u = this.documents[o].options;
          this.events.remove(a, "unload", this.onWindowUnload), this.documents.splice(o, 1), this.events.documents.splice(o, 1), this.fire("scope:remove-document", { doc: n, window: a, scope: this, options: u });
        } }, { key: "getDocIndex", value: function(n) {
          for (var o = 0; o < this.documents.length; o++) if (this.documents[o].doc === n) return o;
          return -1;
        } }, { key: "getDocOptions", value: function(n) {
          var o = this.getDocIndex(n);
          return o === -1 ? null : this.documents[o].options;
        } }, { key: "now", value: function() {
          return (this.window.Date || Date).now();
        } }]), r;
      })();
      function Rt(r) {
        return r && r.replace(/\/.*$/, "");
      }
      var Oi = new Ti(), pt = Oi.interactStatic, Oo = typeof globalThis < "u" ? globalThis : window;
      Oi.init(Oo);
      var Io = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(r) {
        var n = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function(a) {
          var u = a[0], c = a[1];
          return u in r || c in r;
        })), o = function(a, u) {
          for (var c = r.range, d = r.limits, v = d === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : d, b = r.offset, S = b === void 0 ? { x: 0, y: 0 } : b, x = { range: c, grid: r, x: null, y: null }, I = 0; I < n.length; I++) {
            var P = n[I], H = P[0], W = P[1], q = Math.round((a - S.x) / r[H]), j = Math.round((u - S.y) / r[W]);
            x[H] = Math.max(v.left, Math.min(v.right, q * r[H] + S.x)), x[W] = Math.max(v.top, Math.min(v.bottom, j * r[W] + S.y));
          }
          return x;
        };
        return o.grid = r, o.coordFields = n, o;
      } }), Ro = { id: "snappers", install: function(r) {
        var n = r.interactStatic;
        n.snappers = J(n.snappers || {}, Io), n.createSnapGrid = n.snappers.grid;
      } }, Mo = Ro, Mt = { start: function(r) {
        var n = r.state, o = r.rect, a = r.edges, u = r.pageCoords, c = n.options, d = c.ratio, v = c.enabled, b = n.options, S = b.equalDelta, x = b.modifiers;
        d === "preserve" && (d = o.width / o.height), n.startCoords = J({}, u), n.startRect = J({}, o), n.ratio = d, n.equalDelta = S;
        var I = n.linkedEdges = { top: a.top || a.left && !a.bottom, left: a.left || a.top && !a.right, bottom: a.bottom || a.right && !a.top, right: a.right || a.bottom && !a.left };
        if (n.xIsPrimaryAxis = !(!a.left && !a.right), n.equalDelta) {
          var P = (I.left ? 1 : -1) * (I.top ? 1 : -1);
          n.edgeSign = { x: P, y: P };
        } else n.edgeSign = { x: I.left ? -1 : 1, y: I.top ? -1 : 1 };
        if (v !== !1 && J(a, I), x != null && x.length) {
          var H = new kr(r.interaction);
          H.copyFrom(r.interaction.modification), H.prepareStates(x), n.subModification = H, H.startAll(y({}, r));
        }
      }, set: function(r) {
        var n = r.state, o = r.rect, a = r.coords, u = n.linkedEdges, c = J({}, a), d = n.equalDelta ? Ya : Ft;
        if (J(r.edges, u), d(n, n.xIsPrimaryAxis, a, o), !n.subModification) return null;
        var v = J({}, o);
        rt(u, v, { x: a.x - c.x, y: a.y - c.y });
        var b = n.subModification.setAll(y(y({}, r), {}, { rect: v, edges: u, pageCoords: a, prevCoords: a, prevRect: v })), S = b.delta;
        return b.changed && (d(n, Math.abs(S.x) > Math.abs(S.y), b.coords, b.rect), J(a, b.coords)), b.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function Ya(r, n, o) {
        var a = r.startCoords, u = r.edgeSign;
        n ? o.y = a.y + (o.x - a.x) * u.y : o.x = a.x + (o.y - a.y) * u.x;
      }
      function Ft(r, n, o, a) {
        var u = r.startRect, c = r.startCoords, d = r.ratio, v = r.edgeSign;
        if (n) {
          var b = a.width / d;
          o.y = c.y + (b - u.height) * v.y;
        } else {
          var S = a.height * d;
          o.x = c.x + (S - u.width) * v.x;
        }
      }
      var Ka = on(Mt, "aspectRatio"), Ii = function() {
      };
      Ii._defaults = {};
      var Kt = Ii;
      function sn(r, n, o) {
        return D.func(r) ? Tt(r, n.interactable, n.element, [o.x, o.y, n]) : Tt(r, n.interactable, n.element);
      }
      var Zn = { start: function(r) {
        var n = r.rect, o = r.startOffset, a = r.state, u = r.interaction, c = r.pageCoords, d = a.options, v = d.elementRect, b = J({ left: 0, top: 0, right: 0, bottom: 0 }, d.offset || {});
        if (n && v) {
          var S = sn(d.restriction, u, c);
          if (S) {
            var x = S.right - S.left - n.width, I = S.bottom - S.top - n.height;
            x < 0 && (b.left += x, b.right += x), I < 0 && (b.top += I, b.bottom += I);
          }
          b.left += o.left - n.width * v.left, b.top += o.top - n.height * v.top, b.right += o.right - n.width * (1 - v.right), b.bottom += o.bottom - n.height * (1 - v.bottom);
        }
        a.offset = b;
      }, set: function(r) {
        var n = r.coords, o = r.interaction, a = r.state, u = a.options, c = a.offset, d = sn(u.restriction, o, n);
        if (d) {
          var v = (function(b) {
            return !b || "left" in b && "top" in b || ((b = J({}, b)).left = b.x || 0, b.top = b.y || 0, b.right = b.right || b.left + b.width, b.bottom = b.bottom || b.top + b.height), b;
          })(d);
          n.x = Math.max(Math.min(v.right - c.right, n.x), v.left + c.left), n.y = Math.max(Math.min(v.bottom - c.bottom, n.y), v.top + c.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Ze = on(Zn, "restrict"), yn = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Hr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function Ao(r, n) {
        for (var o = 0, a = ["top", "left", "bottom", "right"]; o < a.length; o++) {
          var u = a[o];
          u in r || (r[u] = n[u]);
        }
        return r;
      }
      var Fn = { noInner: yn, noOuter: Hr, start: function(r) {
        var n, o = r.interaction, a = r.startOffset, u = r.state, c = u.options;
        c && (n = mt(sn(c.offset, o, o.coords.start.page))), n = n || { x: 0, y: 0 }, u.offset = { top: n.y + a.top, left: n.x + a.left, bottom: n.y - a.bottom, right: n.x - a.right };
      }, set: function(r) {
        var n = r.coords, o = r.edges, a = r.interaction, u = r.state, c = u.offset, d = u.options;
        if (o) {
          var v = J({}, n), b = sn(d.inner, a, v) || {}, S = sn(d.outer, a, v) || {};
          Ao(b, yn), Ao(S, Hr), o.top ? n.y = Math.min(Math.max(S.top + c.top, v.y), b.top + c.top) : o.bottom && (n.y = Math.max(Math.min(S.bottom + c.bottom, v.y), b.bottom + c.bottom)), o.left ? n.x = Math.min(Math.max(S.left + c.left, v.x), b.left + c.left) : o.right && (n.x = Math.max(Math.min(S.right + c.right, v.x), b.right + c.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Va = on(Fn, "restrictEdges"), Za = J({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(r) {
      } }, Zn.defaults), ja = on({ start: Zn.start, set: Zn.set, defaults: Za }, "restrictRect"), Co = { width: -1 / 0, height: -1 / 0 }, qr = { width: 1 / 0, height: 1 / 0 }, jn = on({ start: function(r) {
        return Fn.start(r);
      }, set: function(r) {
        var n = r.interaction, o = r.state, a = r.rect, u = r.edges, c = o.options;
        if (u) {
          var d = pn(sn(c.min, n, r.coords)) || Co, v = pn(sn(c.max, n, r.coords)) || qr;
          o.options = { endOnly: c.endOnly, inner: J({}, Fn.noInner), outer: J({}, Fn.noOuter) }, u.top ? (o.options.inner.top = a.bottom - d.height, o.options.outer.top = a.bottom - v.height) : u.bottom && (o.options.inner.bottom = a.top + d.height, o.options.outer.bottom = a.top + v.height), u.left ? (o.options.inner.left = a.right - d.width, o.options.outer.left = a.right - v.width) : u.right && (o.options.inner.right = a.left + d.width, o.options.outer.right = a.left + v.width), Fn.set(r), o.options = c;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), Ri = { start: function(r) {
        var n, o = r.interaction, a = r.interactable, u = r.element, c = r.rect, d = r.state, v = r.startOffset, b = d.options, S = b.offsetWithOrigin ? (function(P) {
          var H = P.interaction.element, W = mt(Tt(P.state.options.origin, null, null, [H])), q = W || Ot(P.interactable, H, P.interaction.prepared.name);
          return q;
        })(r) : { x: 0, y: 0 };
        if (b.offset === "startCoords") n = { x: o.coords.start.page.x, y: o.coords.start.page.y };
        else {
          var x = Tt(b.offset, a, u, [o]);
          (n = mt(x) || { x: 0, y: 0 }).x += S.x, n.y += S.y;
        }
        var I = b.relativePoints;
        d.offsets = c && I && I.length ? I.map((function(P, H) {
          return { index: H, relativePoint: P, x: v.left - c.width * P.x + n.x, y: v.top - c.height * P.y + n.y };
        })) : [{ index: 0, relativePoint: null, x: n.x, y: n.y }];
      }, set: function(r) {
        var n = r.interaction, o = r.coords, a = r.state, u = a.options, c = a.offsets, d = Ot(n.interactable, n.element, n.prepared.name), v = J({}, o), b = [];
        u.offsetWithOrigin || (v.x -= d.x, v.y -= d.y);
        for (var S = 0, x = c; S < x.length; S++) for (var I = x[S], P = v.x - I.x, H = v.y - I.y, W = 0, q = u.targets.length; W < q; W++) {
          var j = u.targets[W], Y = void 0;
          (Y = D.func(j) ? j(P, H, n._proxy, I, W) : j) && b.push({ x: (D.number(Y.x) ? Y.x : P) + I.x, y: (D.number(Y.y) ? Y.y : H) + I.y, range: D.number(Y.range) ? Y.range : u.range, source: j, index: W, offset: I });
        }
        for (var w = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, A = 0; A < b.length; A++) {
          var R = b[A], k = R.range, $ = R.x - v.x, ve = R.y - v.y, xe = Yt($, ve), Te = xe <= k;
          k === 1 / 0 && w.inRange && w.range !== 1 / 0 && (Te = !1), w.target && !(Te ? w.inRange && k !== 1 / 0 ? xe / k < w.distance / w.range : k === 1 / 0 && w.range !== 1 / 0 || xe < w.distance : !w.inRange && xe < w.distance) || (w.target = R, w.distance = xe, w.range = k, w.inRange = Te, w.delta.x = $, w.delta.y = ve);
        }
        return w.inRange && (o.x = w.target.x, o.y = w.target.y), a.closest = w, w;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, Do = on(Ri, "snap"), vr = { start: function(r) {
        var n = r.state, o = r.edges, a = n.options;
        if (!o) return null;
        r.state = { options: { targets: null, relativePoints: [{ x: o.left ? 0 : 1, y: o.top ? 0 : 1 }], offset: a.offset || "self", origin: { x: 0, y: 0 }, range: a.range } }, n.targetFields = n.targetFields || [["width", "height"], ["x", "y"]], Ri.start(r), n.offsets = r.state.offsets, r.state = n;
      }, set: function(r) {
        var n = r.interaction, o = r.state, a = r.coords, u = o.options, c = o.offsets, d = { x: a.x - c[0].x, y: a.y - c[0].y };
        o.options = J({}, u), o.options.targets = [];
        for (var v = 0, b = u.targets || []; v < b.length; v++) {
          var S = b[v], x = void 0;
          if (x = D.func(S) ? S(d.x, d.y, n) : S) {
            for (var I = 0, P = o.targetFields; I < P.length; I++) {
              var H = P[I], W = H[0], q = H[1];
              if (W in x || q in x) {
                x.x = x[W], x.y = x[q];
                break;
              }
            }
            o.options.targets.push(x);
          }
        }
        var j = Ri.set(r);
        return o.options = u, j;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, Mi = on(vr, "snapSize"), mr = { aspectRatio: Ka, restrictEdges: Va, restrict: Ze, restrictRect: ja, restrictSize: jn, snapEdges: on({ start: function(r) {
        var n = r.edges;
        return n ? (r.state.targetFields = r.state.targetFields || [[n.left ? "left" : "right", n.top ? "top" : "bottom"]], vr.start(r)) : null;
      }, set: vr.set, defaults: J(Vn(vr.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Do, snapSize: Mi, spring: Kt, avoid: Kt, transform: Kt, rubberband: Kt }, zo = { id: "modifiers", install: function(r) {
        var n = r.interactStatic;
        for (var o in r.usePlugin(Fr), r.usePlugin(Mo), n.modifiers = mr, mr) {
          var a = mr[o], u = a._defaults, c = a._methods;
          u._methods = c, r.defaults.perAction[o] = u;
        }
      } }, Ja = zo, Gr = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c, d, v, b) {
          var S;
          if (O(this, o), It(Be(S = n.call(this, v)), c), c !== u && It(Be(S), u), S.timeStamp = b, S.originalEvent = c, S.type = a, S.pointerId = ye(u), S.pointerType = tn(u), S.target = d, S.currentTarget = null, a === "tap") {
            var x = v.getPointerIndex(u);
            S.dt = S.timeStamp - v.pointers[x].downTime;
            var I = S.timeStamp - v.tapTime;
            S.double = !!v.prevTap && v.prevTap.type !== "doubletap" && v.prevTap.target === S.target && I < 500;
          } else a === "doubletap" && (S.dt = u.timeStamp - v.tapTime, S.double = !0);
          return S;
        }
        return L(o, [{ key: "_subtractOrigin", value: function(a) {
          var u = a.x, c = a.y;
          return this.pageX -= u, this.pageY -= c, this.clientX -= u, this.clientY -= c, this;
        } }, { key: "_addOrigin", value: function(a) {
          var u = a.x, c = a.y;
          return this.pageX += u, this.pageY += c, this.clientX += u, this.clientY += c, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), o;
      })(rn), Nn = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(r) {
        r.pointerEvents = Nn, r.defaults.actions.pointerEvents = Nn.defaults, J(r.actions.phaselessTypes, Nn.types);
      }, listeners: { "interactions:new": function(r) {
        var n = r.interaction;
        n.prevTap = null, n.tapTime = 0;
      }, "interactions:update-pointer": function(r) {
        var n = r.down, o = r.pointerInfo;
        !n && o.hold || (o.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget;
        r.duplicate || o.pointerIsDown && !o.pointerWasMoved || (o.pointerIsDown && xt(r), Rn({ interaction: o, pointer: a, event: u, eventTarget: c, type: "move" }, n));
      }, "interactions:down": function(r, n) {
        (function(o, a) {
          for (var u = o.interaction, c = o.pointer, d = o.event, v = o.eventTarget, b = o.pointerIndex, S = u.pointers[b].hold, x = Gt(v), I = { interaction: u, pointer: c, event: d, eventTarget: v, type: "hold", targets: [], path: x, node: null }, P = 0; P < x.length; P++) {
            var H = x[P];
            I.node = H, a.fire("pointerEvents:collect-targets", I);
          }
          if (I.targets.length) {
            for (var W = 1 / 0, q = 0, j = I.targets; q < j.length; q++) {
              var Y = j[q].eventable.options.holdDuration;
              Y < W && (W = Y);
            }
            S.duration = W, S.timeout = setTimeout((function() {
              Rn({ interaction: u, eventTarget: v, pointer: c, event: d, type: "hold" }, a);
            }), W);
          }
        })(r, n), Rn(r, n);
      }, "interactions:up": function(r, n) {
        xt(r), Rn(r, n), (function(o, a) {
          var u = o.interaction, c = o.pointer, d = o.event, v = o.eventTarget;
          u.pointerWasMoved || Rn({ interaction: u, eventTarget: v, pointer: c, event: d, type: "tap" }, a);
        })(r, n);
      }, "interactions:cancel": function(r, n) {
        xt(r), Rn(r, n);
      } }, PointerEvent: Gr, fire: Rn, collectEventTargets: Ai, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function Rn(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, d = r.type, v = r.targets, b = v === void 0 ? Ai(r, n) : v, S = new Gr(d, a, u, c, o, n.now());
        n.fire("pointerEvents:new", { pointerEvent: S });
        for (var x = { interaction: o, pointer: a, event: u, eventTarget: c, targets: b, type: d, pointerEvent: S }, I = 0; I < b.length; I++) {
          var P = b[I];
          for (var H in P.props || {}) S[H] = P.props[H];
          var W = Ot(P.eventable, P.node);
          if (S._subtractOrigin(W), S.eventable = P.eventable, S.currentTarget = P.node, P.eventable.fire(S), S._addOrigin(W), S.immediatePropagationStopped || S.propagationStopped && I + 1 < b.length && b[I + 1].node !== S.currentTarget) break;
        }
        if (n.fire("pointerEvents:fired", x), d === "tap") {
          var q = S.double ? Rn({ interaction: o, pointer: a, event: u, eventTarget: c, type: "doubletap" }, n) : S;
          o.prevTap = q, o.tapTime = q.timeStamp;
        }
        return S;
      }
      function Ai(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, d = r.type, v = o.getPointerIndex(a), b = o.pointers[v];
        if (d === "tap" && (o.pointerWasMoved || !b || b.downTarget !== c)) return [];
        for (var S = Gt(c), x = { interaction: o, pointer: a, event: u, eventTarget: c, type: d, path: S, targets: [], node: null }, I = 0; I < S.length; I++) {
          var P = S[I];
          x.node = P, n.fire("pointerEvents:collect-targets", x);
        }
        return d === "hold" && (x.targets = x.targets.filter((function(H) {
          var W, q;
          return H.eventable.options.holdDuration === ((W = o.pointers[v]) == null || (q = W.hold) == null ? void 0 : q.duration);
        }))), x.targets;
      }
      function xt(r) {
        var n = r.interaction, o = r.pointerIndex, a = n.pointers[o].hold;
        a && a.timeout && (clearTimeout(a.timeout), a.timeout = null);
      }
      var Ci = Object.freeze({ __proto__: null, default: Nn });
      function yr(r) {
        var n = r.interaction;
        n.holdIntervalHandle && (clearInterval(n.holdIntervalHandle), n.holdIntervalHandle = null);
      }
      var Po = { id: "pointer-events/holdRepeat", install: function(r) {
        r.usePlugin(Nn);
        var n = r.pointerEvents;
        n.defaults.holdRepeatInterval = 0, n.types.holdrepeat = r.actions.phaselessTypes.holdrepeat = !0;
      }, listeners: ["move", "up", "cancel", "endall"].reduce((function(r, n) {
        return r["pointerEvents:".concat(n)] = yr, r;
      }), { "pointerEvents:new": function(r) {
        var n = r.pointerEvent;
        n.type === "hold" && (n.count = (n.count || 0) + 1);
      }, "pointerEvents:fired": function(r, n) {
        var o = r.interaction, a = r.pointerEvent, u = r.eventTarget, c = r.targets;
        if (a.type === "hold" && c.length) {
          var d = c[0].eventable.options.holdRepeatInterval;
          d <= 0 || (o.holdIntervalHandle = setTimeout((function() {
            n.pointerEvents.fire({ interaction: o, eventTarget: u, type: "hold", pointer: a, event: a }, n);
          }), d));
        }
      } }) }, Lo = Po, Qa = { id: "pointer-events/interactableTargets", install: function(r) {
        var n = r.Interactable;
        n.prototype.pointerEvents = function(a) {
          return J(this.events.options, a), this;
        };
        var o = n.prototype._backCompatOption;
        n.prototype._backCompatOption = function(a, u) {
          var c = o.call(this, a, u);
          return c === this && (this.events.options[a] = u), c;
        };
      }, listeners: { "pointerEvents:collect-targets": function(r, n) {
        var o = r.targets, a = r.node, u = r.type, c = r.eventTarget;
        n.interactables.forEachMatch(a, (function(d) {
          var v = d.events, b = v.options;
          v.types[u] && v.types[u].length && d.testIgnoreAllow(b, a, c) && o.push({ node: a, eventable: v, props: { interactable: d } });
        }));
      }, "interactable:new": function(r) {
        var n = r.interactable;
        n.events.getRect = function(o) {
          return n.getRect(o);
        };
      }, "interactable:set": function(r, n) {
        var o = r.interactable, a = r.options;
        J(o.events.options, n.pointerEvents.defaults), J(o.events.options, a.pointerEvents || {});
      } } }, es = Qa, ts = { id: "pointer-events", install: function(r) {
        r.usePlugin(Ci), r.usePlugin(Lo), r.usePlugin(es);
      } }, ns = ts, rs = { id: "reflow", install: function(r) {
        var n = r.Interactable;
        r.actions.phases.reflow = !0, n.prototype.reflow = function(o) {
          return (function(a, u, c) {
            for (var d = a.getAllElements(), v = c.window.Promise, b = v ? [] : null, S = function() {
              var I = d[x], P = a.getRect(I);
              if (!P) return 1;
              var H, W = sr(c.interactions.list, (function(Y) {
                return Y.interacting() && Y.interactable === a && Y.element === I && Y.prepared.name === u.name;
              }));
              if (W) W.move(), b && (H = W._reflowPromise || new v((function(Y) {
                W._reflowResolve = Y;
              })));
              else {
                var q = pn(P), j = /* @__PURE__ */ (function(Y) {
                  return { coords: Y, get page() {
                    return this.coords.page;
                  }, get client() {
                    return this.coords.client;
                  }, get timeStamp() {
                    return this.coords.timeStamp;
                  }, get pageX() {
                    return this.coords.page.x;
                  }, get pageY() {
                    return this.coords.page.y;
                  }, get clientX() {
                    return this.coords.client.x;
                  }, get clientY() {
                    return this.coords.client.y;
                  }, get pointerId() {
                    return this.coords.pointerId;
                  }, get target() {
                    return this.coords.target;
                  }, get type() {
                    return this.coords.type;
                  }, get pointerType() {
                    return this.coords.pointerType;
                  }, get buttons() {
                    return this.coords.buttons;
                  }, preventDefault: function() {
                  } };
                })({ page: { x: q.x, y: q.y }, client: { x: q.x, y: q.y }, timeStamp: c.now() });
                H = (function(Y, w, A, R, k) {
                  var $ = Y.interactions.new({ pointerType: "reflow" }), ve = { interaction: $, event: k, pointer: k, eventTarget: A, phase: "reflow" };
                  $.interactable = w, $.element = A, $.prevEvent = k, $.updatePointer(k, k, A, !0), Q($.coords.delta), gi($.prepared, R), $._doPhase(ve);
                  var xe = Y.window, Te = xe.Promise, At = Te ? new Te((function(bn) {
                    $._reflowResolve = bn;
                  })) : void 0;
                  return $._reflowPromise = At, $.start(R, w, A), $._interacting ? ($.move(ve), $.end(k)) : ($.stop(), $._reflowResolve()), $.removePointer(k, k), At;
                })(c, a, I, u, j);
              }
              b && b.push(H);
            }, x = 0; x < d.length && !S(); x++) ;
            return b && v.all(b).then((function() {
              return a;
            }));
          })(this, o, r);
        };
      }, listeners: { "interactions:stop": function(r, n) {
        var o = r.interaction;
        o.pointerType === "reflow" && (o._reflowResolve && o._reflowResolve(), (function(a, u) {
          a.splice(a.indexOf(u), 1);
        })(n.interactions.list, o));
      } } }, Jn = rs;
      if (pt.use(fr), pt.use(_i), pt.use(ns), pt.use(qa), pt.use(Ja), pt.use(yi), pt.use(Aa), pt.use(Da), pt.use(Jn), pt.default = pt, C(p) === "object" && p) try {
        p.exports = pt;
      } catch {
      }
      return pt.default = pt, pt;
    }));
  })($i, $i.exports)), $i.exports;
}
var q0 = /* @__PURE__ */ H0();
const Ac = /* @__PURE__ */ Pf(q0), Cc = /* @__PURE__ */ Ta({
  __name: "grid-item",
  props: {
    isDraggable: { type: Boolean, default: void 0 },
    isResizable: { type: Boolean, default: void 0 },
    isBounded: { type: Boolean, default: void 0 },
    static: { type: Boolean, default: !1 },
    minH: { default: 1 },
    minW: { default: 1 },
    maxH: { default: 1 / 0 },
    maxW: { default: 1 / 0 },
    x: {},
    y: {},
    w: {},
    h: {},
    i: {},
    dragIgnoreFrom: { default: "a, button" },
    dragAllowFrom: { default: void 0 },
    resizeIgnoreFrom: { default: "a, button" },
    preserveAspectRatio: { type: Boolean, default: !1 },
    dragOption: { default: () => ({}) },
    resizeOption: { default: () => ({}) }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(p, { expose: h, emit: l }) {
    const y = p, C = l, O = Ji(Of), B = Ji(If);
    if (!O)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const L = r0(null), E = Qi({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: void 0,
      resizable: void 0,
      bounded: void 0,
      transformScale: 1,
      useCssTransforms: !0,
      useStyleCursor: !0,
      isDragging: !1,
      dragging: {
        top: -1,
        left: -1
      },
      isResizing: !1,
      resizing: {
        width: -1,
        height: -1
      },
      style: {},
      rtl: !1
    });
    let V = !1, ge = !1, ee = NaN, Be = NaN, me = NaN, Re = NaN, Ve = -1, De = -1, qe = -1, ze = -1, Se = y.x, Ce = y.y, Ee = y.w, we = y.h;
    const D = at(), ue = Qi({
      i: i0(y, "i"),
      state: E,
      wrapper: D,
      calcXY: Tt
    });
    function $e(z) {
      $t(z);
    }
    function Qe() {
      yt();
    }
    function X(z) {
      Qt(y.isDraggable) && (E.draggable = z);
    }
    function ie(z) {
      Qt(y.isResizable) && (E.resizable = z);
    }
    function ne(z) {
      Qt(y.isBounded) && (E.bounded = z);
    }
    function re(z) {
      E.transformScale = z;
    }
    function be(z) {
      E.rowHeight = z;
    }
    function Fe(z) {
      E.maxRows = z;
    }
    function ae() {
      E.rtl = Rc() === "rtl", yt();
    }
    function We(z) {
      E.cols = Math.floor(z);
    }
    O.increaseItem(ue), gf(() => {
      E.rtl = Rc() === "rtl";
    }), Oa(() => {
      O.responsive && O.lastBreakpoint ? E.cols = Df(O.lastBreakpoint, O.cols) : E.cols = O.colNum, E.rowHeight = O.rowHeight, E.containerWidth = O.width !== null ? O.width : 100, E.margin = O.margin !== void 0 ? O.margin.map(Number) : [10, 10], E.maxRows = O.maxRows, Qt(y.isDraggable) ? E.draggable = O.isDraggable : E.draggable = y.isDraggable, Qt(y.isResizable) ? E.resizable = O.isResizable : E.resizable = y.isResizable, Qt(y.isBounded) ? E.bounded = O.isBounded : E.bounded = y.isBounded, E.transformScale = O.transformScale, E.useCssTransforms = O.useCssTransforms, E.useStyleCursor = O.useStyleCursor, o0(() => {
        Se = y.x, Ce = y.y, we = y.h, Ee = y.w, Pt(ht);
      }), B.on("updateWidth", $e), B.on("compact", Qe), B.on("setDraggable", X), B.on("setResizable", ie), B.on("setBounded", ne), B.on("setTransformScale", re), B.on("setRowHeight", be), B.on("setMaxRows", Fe), B.on("directionchange", ae), B.on("setColNum", We);
    }), wu(() => {
      B.off("updateWidth", $e), B.off("compact", Qe), B.off("setDraggable", X), B.off("setResizable", ie), B.off("setBounded", ne), B.off("setTransformScale", re), B.off("setRowHeight", be), B.off("setMaxRows", Fe), B.off("directionchange", ae), B.off("setColNum", We), L.value && (L.value.unset(), L.value = null), O.decreaseItem(ue);
    }), h({ state: E, wrapper: D });
    const st = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, Ge = dt(() => E.resizable && !y.static), Me = dt(() => O.isMirrored ? !E.rtl : E.rtl), qt = dt(() => (E.draggable || E.resizable) && !y.static), ut = P0("item"), Sn = dt(() => ({
      [ut.b()]: !0,
      [ut.bm("resizable")]: Ge.value,
      [ut.bm("static")]: y.static,
      [ut.bm("resizing")]: E.isResizing,
      [ut.bm("dragging")]: E.isDragging,
      [ut.bm("transform")]: E.useCssTransforms,
      [ut.bm("rtl")]: Me.value,
      [ut.bm("no-touch")]: st && qt.value
    })), Je = dt(() => [ut.be("resizer"), Me.value && ut.bem("resizer", "rtl")].filter(Boolean));
    je(
      () => y.isDraggable,
      (z) => {
        E.draggable = z;
      }
    ), je(
      () => y.static,
      () => {
        Pt(It), Pt(Q);
      }
    ), je(
      () => E.draggable,
      () => {
        Pt(It);
      }
    ), je(
      () => y.isResizable,
      (z) => {
        E.resizable = z;
      }
    ), je(
      () => y.isBounded,
      (z) => {
        E.bounded = z;
      }
    ), je(
      () => E.resizable,
      () => {
        Pt(Q);
      }
    ), je(
      () => E.rowHeight,
      () => {
        Pt(ht), Pt(Gt);
      }
    ), je([() => E.cols, () => E.containerWidth], () => {
      Pt(Q), Pt(ht), Pt(Gt);
    }), je([() => y.minH, () => y.maxH, () => y.minW, () => y.maxW], () => {
      Pt(Q);
    }), je(Me, () => {
      Pt(Q), Pt(ht);
    }), je([() => O.margin, () => O.margin[0], () => O.margin[1]], () => {
      const z = O.margin;
      !z || z[0] === E.margin[0] && z[1] === E.margin[1] || (E.margin = z.map(Number), Pt(ht), Pt(Gt));
    });
    function ht() {
      y.x + y.w > E.cols ? (Se = 0, Ee = y.w > E.cols ? E.cols : y.w) : (Se = y.x, Ee = y.w);
      const z = en(Se, Ce, Ee, we);
      E.isDragging && (z.top = E.dragging.top, Me.value ? z.right = E.dragging.left : z.left = E.dragging.left), E.isResizing && (z.width = E.resizing.width, z.height = E.resizing.height);
      let Z;
      E.useCssTransforms ? Me.value ? Z = A0(z.top, z.right, z.width, z.height) : Z = M0(z.top, z.left, z.width, z.height) : Me.value ? Z = D0(z.top, z.right, z.width, z.height) : Z = C0(z.top, z.left, z.width, z.height), E.style = Z;
    }
    function Gt() {
      const z = {};
      for (const Z of ["width", "height"]) {
        const le = E.style[Z].match(/^(\d+)px$/);
        if (!le)
          return;
        z[Z] = le[1];
      }
      C("container-resized", y.i, y.h, y.w, z.height, z.width);
    }
    function Xt(z) {
      if (y.static) return;
      const Z = z.type;
      if (Z === "resizestart" && E.isResizing || Z !== "resizestart" && !E.isResizing)
        return;
      const le = Oc(z);
      if (Qt(le)) return;
      const { x: ye, y: ce } = le, se = { width: 0, height: 0 };
      let oe;
      switch (Z) {
        case "resizestart": {
          Q(), Ve = Ee, De = we, oe = en(Se, Ce, Ee, we), se.width = oe.width, se.height = oe.height, E.resizing = se, E.isResizing = !0;
          break;
        }
        case "resizemove": {
          !z.edges.right && !z.edges.left && (me = ye), !z.edges.top && !z.edges.bottom && (Re = ce);
          const et = Ic(me, Re, ye, ce);
          Me.value ? se.width = E.resizing.width - et.deltaX / E.transformScale : se.width = E.resizing.width + et.deltaX / E.transformScale, se.height = E.resizing.height + et.deltaY / E.transformScale, E.resizing = se;
          break;
        }
        case "resizeend": {
          oe = en(Se, Ce, Ee, we), se.width = oe.width, se.height = oe.height, E.resizing = { width: -1, height: -1 }, E.isResizing = !1;
          break;
        }
      }
      oe = Ot(se.height, se.width), oe.w < y.minW && (oe.w = y.minW), oe.w > y.maxW && (oe.w = y.maxW), oe.h < y.minH && (oe.h = y.minH), oe.h > y.maxH && (oe.h = y.maxH), oe.h < 1 && (oe.h = 1), oe.w < 1 && (oe.w = 1), me = ye, Re = ce, (Ee !== oe.w || we !== oe.h) && C("resize", y.i, oe.h, oe.w, se.height, se.width), z.type === "resizeend" && (Ve !== Ee || De !== we) && C("resized", y.i, oe.h, oe.w, se.height, se.width), B.emit("resizeEvent", z.type, y.i, Se, Ce, oe.h, oe.w);
    }
    function J(z) {
      if (y.static || E.isResizing) return;
      const Z = z.type;
      if (Z === "dragstart" && E.isDragging || Z !== "dragstart" && !E.isDragging)
        return;
      const le = Oc(z);
      if (Qt(le)) return;
      const { x: ye, y: ce } = le, se = z.target;
      if (!se.offsetParent) return;
      const oe = { top: 0, left: 0 };
      switch (Z) {
        case "dragstart": {
          qe = Se, ze = Ce;
          const lt = se.offsetParent.getBoundingClientRect(), bt = se.getBoundingClientRect(), tn = bt.left / E.transformScale, nn = lt.left / E.transformScale, rn = bt.right / E.transformScale, En = lt.right / E.transformScale, Tn = bt.top / E.transformScale, gn = lt.top / E.transformScale;
          Me.value ? oe.left = (rn - En) * -1 : oe.left = tn - nn, oe.top = Tn - gn, E.dragging = oe, E.isDragging = !0;
          break;
        }
        case "dragmove": {
          const lt = Ic(ee, Be, ye, ce);
          if (Me.value ? oe.left = E.dragging.left - lt.deltaX / E.transformScale : oe.left = E.dragging.left + lt.deltaX / E.transformScale, oe.top = E.dragging.top + lt.deltaY / E.transformScale, E.bounded) {
            const bt = se.offsetParent.clientHeight - pn(y.h, E.rowHeight, E.margin[1]);
            oe.top = rt(oe.top, 0, bt);
            const tn = mt(), nn = E.containerWidth - pn(y.w, tn, E.margin[0]);
            oe.left = rt(oe.left, 0, nn);
          }
          E.dragging = oe;
          break;
        }
        case "dragend": {
          const lt = se.offsetParent.getBoundingClientRect(), bt = se.getBoundingClientRect(), tn = bt.left / E.transformScale, nn = lt.left / E.transformScale, rn = bt.right / E.transformScale, En = lt.right / E.transformScale, Tn = bt.top / E.transformScale, gn = lt.top / E.transformScale;
          Me.value ? oe.left = (rn - En) * -1 : oe.left = tn - nn, oe.top = Tn - gn, E.dragging = { top: -1, left: -1 }, E.isDragging = !1;
          break;
        }
      }
      let et;
      Me.value, et = Tt(oe.top, oe.left), ee = ye, Be = ce, (Se !== et.x || Ce !== et.y) && C("move", y.i, et.x, et.y), z.type === "dragend" && (qe !== Se || ze !== Ce) && C("moved", y.i, et.x, et.y), B.emit("dragEvent", z.type, y.i, et.x, et.y, we, Ee);
    }
    function en(z, Z, le, ye) {
      const ce = mt();
      let se;
      return Me.value ? se = {
        right: Math.round(ce * z + (z + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * Z + (Z + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: le === 1 / 0 ? le : Math.round(ce * le + Math.max(0, le - 1) * E.margin[0]),
        height: ye === 1 / 0 ? ye : Math.round(E.rowHeight * ye + Math.max(0, ye - 1) * E.margin[1])
      } : se = {
        left: Math.round(ce * z + (z + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * Z + (Z + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: le === 1 / 0 ? le : Math.round(ce * le + Math.max(0, le - 1) * E.margin[0]),
        height: ye === 1 / 0 ? ye : Math.round(E.rowHeight * ye + Math.max(0, ye - 1) * E.margin[1])
      }, se;
    }
    function Tt(z, Z) {
      const le = mt();
      let ye = Math.round((Z - E.margin[0]) / (le + E.margin[0])), ce = Math.round((z - E.margin[1]) / (E.rowHeight + E.margin[1]));
      return ye = Math.max(Math.min(ye, E.cols - Ee), 0), ce = Math.max(Math.min(ce, E.maxRows - we), 0), { x: ye, y: ce };
    }
    function mt() {
      return (E.containerWidth - E.margin[0] * (E.cols + 1)) / E.cols;
    }
    function pn(z, Z, le) {
      return Number.isFinite(z) ? Math.round(Z * z + Math.max(0, z - 1) * le) : z;
    }
    function rt(z, Z, le) {
      return Math.max(Math.min(z, le), Z);
    }
    function Ot(z, Z, le = !1) {
      const ye = mt();
      let ce = Math.round((Z + E.margin[0]) / (ye + E.margin[0])), se = 0;
      return le ? se = Math.ceil((z + E.margin[1]) / (E.rowHeight + E.margin[1])) : se = Math.round((z + E.margin[1]) / (E.rowHeight + E.margin[1])), ce = Math.max(Math.min(ce, E.cols - Se), 0), se = Math.max(Math.min(se, E.maxRows - Ce), 0), { w: ce, h: se };
    }
    function $t(z, Z) {
      E.containerWidth = z;
    }
    function yt() {
      ht();
    }
    function Yt() {
      !L.value && D.value && (L.value = Ac(D.value), E.useStyleCursor || L.value.styleCursor(!1));
    }
    const ar = Sc(J);
    function It() {
      if (Yt(), !!L.value)
        if (E.draggable && !y.static) {
          const z = {
            ignoreFrom: y.dragIgnoreFrom,
            allowFrom: y.dragAllowFrom,
            ...y.dragOption
          };
          L.value.draggable(z), V || (V = !0, L.value.on("dragstart dragmove dragend", (Z) => {
            Z.type === "dragmove" ? ar(Z) : J(Z);
          }));
        } else
          L.value.draggable({ enabled: !1 });
    }
    const G = Sc(Xt);
    function Q() {
      if (Yt(), !!L.value)
        if (E.resizable && !y.static) {
          const z = en(0, 0, y.maxW, y.maxH), Z = en(0, 0, y.minW, y.minH), le = {
            edges: {
              left: Me.value ? `.${Je.value[0]}` : !1,
              right: Me.value ? !1 : `.${Je.value[0]}`,
              bottom: `.${Je.value[0]}`,
              top: !1
            },
            ignoreFrom: y.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: Z.height * E.transformScale,
                width: Z.width * E.transformScale
              },
              max: {
                height: z.height * E.transformScale,
                width: z.width * E.transformScale
              }
            },
            ...y.resizeOption
          };
          y.preserveAspectRatio && (le.modifiers = [Ac.modifiers.aspectRatio({ ratio: "preserve" })]), L.value.resizable(le), ge || (ge = !0, L.value.on("resizestart resizemove resizeend", (ye) => {
            ye.type === "resizemove" ? G(ye) : Xt(ye);
          }));
        } else
          L.value.resizable({ enabled: !1 });
    }
    return (z, Z) => (kt(), Pn("section", {
      ref_key: "wrapper",
      ref: D,
      class: pc(Sn.value),
      style: Ki(E.style)
    }, [
      gu(z.$slots, "default"),
      Ge.value ? (kt(), Pn("span", {
        key: 0,
        class: pc(Je.value)
      }, null, 2)) : vu("", !0)
    ], 6));
  }
}), Ar = typeof window < "u";
var Dc;
Ar && (Dc = window?.navigator) != null && Dc.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function zc(p) {
  return p != null;
}
function Pc() {
}
const G0 = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(G0)));
const X0 = Ar && ("ontouchstart" in window || Y0() > 0), $0 = X0 ? "pointerdown" : "click";
function Y0() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function K0(p, h, l = window.Event) {
  const { type: y, bubbles: C = !1, cancelable: O = !1, ...B } = h;
  if (!zc(y) || y === "") return !1;
  let L;
  return zc(l) ? L = new l(y, { bubbles: C, cancelable: O }) : (L = document.createEvent("HTMLEvents"), L.initEvent(y, C, O)), Object.assign(L, B), p.dispatchEvent(L);
}
const V0 = "clickoutside", Z0 = /* @__PURE__ */ new Set();
Ar && document.addEventListener(
  $0,
  (p) => {
    const h = p.target, l = p.composedPath && p.composedPath();
    Z0.forEach((y) => {
      y !== h && (l ? !l.includes(y) : !y.contains(h)) && (!y.__transferElement || y.__transferElement !== h && !y.__transferElement.contains(h)) && K0(y, { type: V0 });
    });
  },
  !0
);
const j0 = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
let wa;
if (Ar) {
  for (const p of j0)
    if (p[1] in document) {
      wa = p;
      break;
    }
}
dt(() => !1);
const J0 = /* @__PURE__ */ new Set(), Q0 = /* @__PURE__ */ new WeakMap();
if (Ar && wa) {
  const p = wa[2], h = wa[4];
  document.addEventListener(
    h,
    () => {
      if (J0.forEach((l) => {
        l.value = !1;
      }), document[p]) {
        const l = Q0.get(document[p]);
        l && (l.value = !0);
      }
    },
    !1
  );
}
const Lf = /* @__PURE__ */ new Map();
Lf.set("x", 0);
Lf.set("y", 0);
var Rr = [], ey = function() {
  return Rr.some(function(p) {
    return p.activeTargets.length > 0;
  });
}, ty = function() {
  return Rr.some(function(p) {
    return p.skippedTargets.length > 0;
  });
}, Lc = "ResizeObserver loop completed with undelivered notifications.", ny = function() {
  var p;
  typeof ErrorEvent == "function" ? p = new ErrorEvent("error", {
    message: Lc
  }) : (p = document.createEvent("Event"), p.initEvent("error", !1, !1), p.message = Lc), window.dispatchEvent(p);
}, to;
(function(p) {
  p.BORDER_BOX = "border-box", p.CONTENT_BOX = "content-box", p.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(to || (to = {}));
var Mr = function(p) {
  return Object.freeze(p);
}, ry = /* @__PURE__ */ (function() {
  function p(h, l) {
    this.inlineSize = h, this.blockSize = l, Mr(this);
  }
  return p;
})(), kf = (function() {
  function p(h, l, y, C) {
    return this.x = h, this.y = l, this.width = y, this.height = C, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Mr(this);
  }
  return p.prototype.toJSON = function() {
    var h = this, l = h.x, y = h.y, C = h.top, O = h.right, B = h.bottom, L = h.left, E = h.width, V = h.height;
    return { x: l, y, top: C, right: O, bottom: B, left: L, width: E, height: V };
  }, p.fromRect = function(h) {
    return new p(h.x, h.y, h.width, h.height);
  }, p;
})(), _u = function(p) {
  return p instanceof SVGElement && "getBBox" in p;
}, Ff = function(p) {
  if (_u(p)) {
    var h = p.getBBox(), l = h.width, y = h.height;
    return !l && !y;
  }
  var C = p, O = C.offsetWidth, B = C.offsetHeight;
  return !(O || B || p.getClientRects().length);
}, kc = function(p) {
  var h;
  if (p instanceof Element)
    return !0;
  var l = (h = p?.ownerDocument) === null || h === void 0 ? void 0 : h.defaultView;
  return !!(l && p instanceof l.Element);
}, iy = function(p) {
  switch (p.tagName) {
    case "INPUT":
      if (p.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, ji = typeof window < "u" ? window : {}, ma = /* @__PURE__ */ new WeakMap(), Fc = /auto|scroll/, oy = /^tb|vertical/, ay = /msie|trident/i.test(ji.navigator && ji.navigator.userAgent), zn = function(p) {
  return parseFloat(p || "0");
}, ai = function(p, h, l) {
  return p === void 0 && (p = 0), h === void 0 && (h = 0), l === void 0 && (l = !1), new ry((l ? h : p) || 0, (l ? p : h) || 0);
}, Nc = Mr({
  devicePixelContentBoxSize: ai(),
  borderBoxSize: ai(),
  contentBoxSize: ai(),
  contentRect: new kf(0, 0, 0, 0)
}), Nf = function(p, h) {
  if (h === void 0 && (h = !1), ma.has(p) && !h)
    return ma.get(p);
  if (Ff(p))
    return ma.set(p, Nc), Nc;
  var l = getComputedStyle(p), y = _u(p) && p.ownerSVGElement && p.getBBox(), C = !ay && l.boxSizing === "border-box", O = oy.test(l.writingMode || ""), B = !y && Fc.test(l.overflowY || ""), L = !y && Fc.test(l.overflowX || ""), E = y ? 0 : zn(l.paddingTop), V = y ? 0 : zn(l.paddingRight), ge = y ? 0 : zn(l.paddingBottom), ee = y ? 0 : zn(l.paddingLeft), Be = y ? 0 : zn(l.borderTopWidth), me = y ? 0 : zn(l.borderRightWidth), Re = y ? 0 : zn(l.borderBottomWidth), Ve = y ? 0 : zn(l.borderLeftWidth), De = ee + V, qe = E + ge, ze = Ve + me, Se = Be + Re, Ce = L ? p.offsetHeight - Se - p.clientHeight : 0, Ee = B ? p.offsetWidth - ze - p.clientWidth : 0, we = C ? De + ze : 0, D = C ? qe + Se : 0, ue = y ? y.width : zn(l.width) - we - Ee, $e = y ? y.height : zn(l.height) - D - Ce, Qe = ue + De + Ee + ze, X = $e + qe + Ce + Se, ie = Mr({
    devicePixelContentBoxSize: ai(Math.round(ue * devicePixelRatio), Math.round($e * devicePixelRatio), O),
    borderBoxSize: ai(Qe, X, O),
    contentBoxSize: ai(ue, $e, O),
    contentRect: new kf(ee, E, ue, $e)
  });
  return ma.set(p, ie), ie;
}, Bf = function(p, h, l) {
  var y = Nf(p, l), C = y.borderBoxSize, O = y.contentBoxSize, B = y.devicePixelContentBoxSize;
  switch (h) {
    case to.DEVICE_PIXEL_CONTENT_BOX:
      return B;
    case to.BORDER_BOX:
      return C;
    default:
      return O;
  }
}, sy = /* @__PURE__ */ (function() {
  function p(h) {
    var l = Nf(h);
    this.target = h, this.contentRect = l.contentRect, this.borderBoxSize = Mr([l.borderBoxSize]), this.contentBoxSize = Mr([l.contentBoxSize]), this.devicePixelContentBoxSize = Mr([l.devicePixelContentBoxSize]);
  }
  return p;
})(), Wf = function(p) {
  if (Ff(p))
    return 1 / 0;
  for (var h = 0, l = p.parentNode; l; )
    h += 1, l = l.parentNode;
  return h;
}, uy = function() {
  var p = 1 / 0, h = [];
  Rr.forEach(function(O) {
    if (O.activeTargets.length !== 0) {
      var B = [];
      O.activeTargets.forEach(function(L) {
        var E = new sy(L.target), V = Wf(L.target);
        B.push(E), L.lastReportedSize = Bf(L.target, L.observedBox), V < p && (p = V);
      }), h.push(function() {
        O.callback.call(O.observer, B, O.observer);
      }), O.activeTargets.splice(0, O.activeTargets.length);
    }
  });
  for (var l = 0, y = h; l < y.length; l++) {
    var C = y[l];
    C();
  }
  return p;
}, Bc = function(p) {
  Rr.forEach(function(h) {
    h.activeTargets.splice(0, h.activeTargets.length), h.skippedTargets.splice(0, h.skippedTargets.length), h.observationTargets.forEach(function(l) {
      l.isActive() && (Wf(l.target) > p ? h.activeTargets.push(l) : h.skippedTargets.push(l));
    });
  });
}, ly = function() {
  var p = 0;
  for (Bc(p); ey(); )
    p = uy(), Bc(p);
  return ty() && ny(), p > 0;
}, js, Uf = [], cy = function() {
  return Uf.splice(0).forEach(function(p) {
    return p();
  });
}, fy = function(p) {
  if (!js) {
    var h = 0, l = document.createTextNode(""), y = { characterData: !0 };
    new MutationObserver(function() {
      return cy();
    }).observe(l, y), js = function() {
      l.textContent = "".concat(h ? h-- : h++);
    };
  }
  Uf.push(p), js();
}, dy = function(p) {
  fy(function() {
    requestAnimationFrame(p);
  });
}, _a = 0, hy = function() {
  return !!_a;
}, py = 250, gy = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Wc = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Uc = function(p) {
  return p === void 0 && (p = 0), Date.now() + p;
}, Js = !1, vy = (function() {
  function p() {
    var h = this;
    this.stopped = !0, this.listener = function() {
      return h.schedule();
    };
  }
  return p.prototype.run = function(h) {
    var l = this;
    if (h === void 0 && (h = py), !Js) {
      Js = !0;
      var y = Uc(h);
      dy(function() {
        var C = !1;
        try {
          C = ly();
        } finally {
          if (Js = !1, h = y - Uc(), !hy())
            return;
          C ? l.run(1e3) : h > 0 ? l.run(h) : l.start();
        }
      });
    }
  }, p.prototype.schedule = function() {
    this.stop(), this.run();
  }, p.prototype.observe = function() {
    var h = this, l = function() {
      return h.observer && h.observer.observe(document.body, gy);
    };
    document.body ? l() : ji.addEventListener("DOMContentLoaded", l);
  }, p.prototype.start = function() {
    var h = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Wc.forEach(function(l) {
      return ji.addEventListener(l, h.listener, !0);
    }));
  }, p.prototype.stop = function() {
    var h = this;
    this.stopped || (this.observer && this.observer.disconnect(), Wc.forEach(function(l) {
      return ji.removeEventListener(l, h.listener, !0);
    }), this.stopped = !0);
  }, p;
})(), xu = new vy(), Hc = function(p) {
  !_a && p > 0 && xu.start(), _a += p, !_a && xu.stop();
}, my = function(p) {
  return !_u(p) && !iy(p) && getComputedStyle(p).display === "inline";
}, yy = (function() {
  function p(h, l) {
    this.target = h, this.observedBox = l || to.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return p.prototype.isActive = function() {
    var h = Bf(this.target, this.observedBox, !0);
    return my(this.target) && (this.lastReportedSize = h), this.lastReportedSize.inlineSize !== h.inlineSize || this.lastReportedSize.blockSize !== h.blockSize;
  }, p;
})(), by = /* @__PURE__ */ (function() {
  function p(h, l) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = h, this.callback = l;
  }
  return p;
})(), ya = /* @__PURE__ */ new WeakMap(), qc = function(p, h) {
  for (var l = 0; l < p.length; l += 1)
    if (p[l].target === h)
      return l;
  return -1;
}, ba = (function() {
  function p() {
  }
  return p.connect = function(h, l) {
    var y = new by(h, l);
    ya.set(h, y);
  }, p.observe = function(h, l, y) {
    var C = ya.get(h), O = C.observationTargets.length === 0;
    qc(C.observationTargets, l) < 0 && (O && Rr.push(C), C.observationTargets.push(new yy(l, y && y.box)), Hc(1), xu.schedule());
  }, p.unobserve = function(h, l) {
    var y = ya.get(h), C = qc(y.observationTargets, l), O = y.observationTargets.length === 1;
    C >= 0 && (O && Rr.splice(Rr.indexOf(y), 1), y.observationTargets.splice(C, 1), Hc(-1));
  }, p.disconnect = function(h) {
    var l = this, y = ya.get(h);
    y.observationTargets.slice().forEach(function(C) {
      return l.unobserve(h, C.target);
    }), y.activeTargets.splice(0, y.activeTargets.length);
  }, p;
})(), xy = (function() {
  function p(h) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof h != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ba.connect(this, h);
  }
  return p.prototype.observe = function(h, l) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!kc(h))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ba.observe(this, h, l);
  }, p.prototype.unobserve = function(h) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!kc(h))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ba.unobserve(this, h);
  }, p.prototype.disconnect = function() {
    ba.disconnect(this);
  }, p.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, p;
})();
const Ea = /* @__PURE__ */ new WeakMap();
function wy(p) {
  var h;
  for (let l = 0, y = p.length; l < y; ++l) {
    const C = p[l], O = Ea.get(C.target);
    if (typeof O == "function") {
      const { inlineSize: B, blockSize: L } = ((h = C.borderBoxSize) == null ? void 0 : h[0]) ?? {}, { offsetWidth: E, offsetHeight: V } = C.target;
      O(
        Object.assign(C, {
          offsetWidth: E,
          offsetHeight: V,
          width: B ?? E,
          height: L ?? V
        })
      );
    }
  }
}
const Hf = new (Ar && window.ResizeObserver || xy)(
  wy
);
function Gc(p, h) {
  Ea.set(p, h), Hf.observe(p);
}
function Xc(p) {
  Ea.has(p) && (Hf.unobserve(p), Ea.delete(p));
}
function _y(p = {}) {
  let h = Pc;
  const l = je(
    () => vt(p.target),
    (C) => {
      h(), !(!C || typeof p.onResize != "function") && (Gc(C, p.onResize), h = () => {
        Xc(C), h = Pc;
      });
    },
    { immediate: !0 }
  ), y = () => {
    l(), h();
  };
  return a0() && s0(y), {
    /**
     * @deprecated Will be removed in next major version, please directly use `observeResize` from imports.
     */
    observeResize: Gc,
    /**
     * @deprecated Will be removed in next major version, please directly use `unobserveResize` from imports.
     */
    unobserveResize: Xc,
    unobserve: y
  };
}
const Sy = at(!1);
dt(() => Sy.value);
const $c = "__theme_style__", Qs = "__theme_observer__", Yc = Qi(/* @__PURE__ */ new Map()), Kc = /* @__PURE__ */ new Map();
je(Yc, () => {
  if (!Ar) return;
  Kc.clear();
  const p = document.head.querySelector(`#${$c}`);
  p && document.head.removeChild(p);
  const h = document.createElement("style");
  let l = `.${Qs} { width: 1px }`, y = 1;
  for (const [C, [O, B]] of Yc.entries())
    l += ` html.${O} .${Qs}, .${B} .${Qs} { width: ${++y}px }`, Kc.set(y, C);
  h.textContent = l, h.id = $c, document.head.appendChild(h);
});
const qf = /* @__PURE__ */ Ta({
  __name: "grid-layout",
  props: {
    autoSize: { type: Boolean, default: !0 },
    colNum: { default: 12 },
    rowHeight: { default: 150 },
    maxRows: { default: 1 / 0 },
    margin: { default: () => [10, 10] },
    isDraggable: { type: Boolean, default: !0 },
    isResizable: { type: Boolean, default: !0 },
    isMirrored: { type: Boolean, default: !1 },
    isBounded: { type: Boolean, default: !1 },
    useCssTransforms: { type: Boolean, default: !0 },
    verticalCompact: { type: Boolean, default: !0 },
    restoreOnDrag: { type: Boolean, default: !1 },
    layout: {},
    responsive: { type: Boolean, default: !1 },
    responsiveLayouts: { default: () => ({}) },
    transformScale: { default: 1 },
    breakpoints: { default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }) },
    cols: { default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }) },
    preventCollision: { type: Boolean, default: !1 },
    useStyleCursor: { type: Boolean, default: !0 }
  },
  emits: [
    "layout-before-mount",
    "layout-mounted",
    "layout-updated",
    "breakpoint-changed",
    "update:layout",
    "layout-ready"
  ],
  setup(p, { expose: h, emit: l }) {
    const y = p, C = l, O = Qi({
      width: -1,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: !1,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: ""
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null
      // store original Layout
    }), B = /* @__PURE__ */ new Map(), L = at(y.layout), E = at(), { observeResize: V, unobserveResize: ge } = _y(), ee = _0();
    ee.on("resizeEvent", Be), ee.on("dragEvent", me), gf(() => {
      C("layout-before-mount", L.value);
    }), Oa(() => {
      C("layout-mounted", L.value), Ht(() => {
        z0(L.value), O.originalLayout = L.value, Ht(() => {
          $e(), E.value && V(E.value, S0(Se, 16)), ri(L.value, y.verticalCompact), C("layout-updated", L.value), ze(), Se();
        });
      });
    }), wu(() => {
      ee.clearAll(), E.value && ge(E.value);
    });
    function Be(X, ie, ne, re, be, Fe) {
      D(X, ie, ne, re, be, Fe);
    }
    function me(X, ie, ne, re, be, Fe) {
      we(X, ie, ne, re, be, Fe);
    }
    je(
      () => O.width,
      (X, ie) => {
        Ht(() => {
          ee.emit("updateWidth", X), ie === -1 && Ht(() => {
            C("layout-ready", L.value);
          }), ze();
        });
      }
    ), je(
      () => [y.layout, y.layout.length],
      () => {
        L.value = y.layout, qe();
      }
    ), je(
      () => y.colNum,
      (X) => {
        ee.emit("setColNum", X);
      }
    ), je(
      () => y.rowHeight,
      (X) => {
        ee.emit("setRowHeight", X);
      }
    ), je(
      () => y.isDraggable,
      (X) => {
        ee.emit("setDraggable", X);
      }
    ), je(
      () => y.isResizable,
      (X) => {
        ee.emit("setResizable", X);
      }
    ), je(
      () => y.isBounded,
      (X) => {
        ee.emit("setBounded", X);
      }
    ), je(
      () => y.transformScale,
      (X) => {
        ee.emit("setTransformScale", X);
      }
    ), je(
      () => y.responsive,
      (X) => {
        X || (C("update:layout", O.originalLayout), ee.emit("setColNum", y.colNum)), Se();
      }
    ), je(
      () => y.maxRows,
      (X) => {
        ee.emit("setMaxRows", X);
      }
    ), je([() => y.margin, () => y.margin[1]], ze), gc(
      Of,
      Qi({
        ...vc(y),
        ...vc(O),
        increaseItem: Re,
        decreaseItem: Ve
      })
    ), gc(If, ee), h({ state: O, getItem: De, resizeEvent: D, dragEvent: we, layoutUpdate: qe });
    function Re(X) {
      B.set(X.i, X);
    }
    function Ve(X) {
      B.delete(X.i);
    }
    function De(X) {
      return B.get(X);
    }
    function qe() {
      if (!Qt(L.value) && !Qt(O.originalLayout)) {
        if (L.value.length !== O.originalLayout.length) {
          const X = Qe(L.value, O.originalLayout);
          if (X.length > 0)
            if (L.value.length > O.originalLayout.length)
              O.originalLayout = O.originalLayout.concat(X);
            else {
              const ie = new Set(X.map((ne) => ne.i));
              O.originalLayout = O.originalLayout.filter((ne) => !ie.has(ne.i));
            }
          O.lastLayoutLength = L.value.length, $e();
        }
        ri(L.value, y.verticalCompact), ee.emit("updateWidth", O.width), ze(), C("layout-updated", L.value);
      }
    }
    function ze() {
      O.mergedStyle = {
        height: Ce()
      };
    }
    function Se() {
      E.value && (O.width = E.value.offsetWidth), ee.emit("resizeEvent");
    }
    function Ce() {
      if (!y.autoSize) return;
      const X = parseFloat(y.margin[1]);
      return T0(L.value) * (y.rowHeight + X) + X + "px";
    }
    let Ee;
    function we(X, ie, ne, re, be, Fe) {
      let ae = Ec(L.value, ie);
      Qt(ae) && (ae = { h: 0, w: 0, x: 0, y: 0, i: "" }), X === "dragstart" && !y.verticalCompact && (Ee = L.value.reduce(
        (We, { i: st, x: Ge, y: Me }) => ({
          ...We,
          [st]: { x: Ge, y: Me }
        }),
        {}
      )), X === "dragmove" || X === "dragstart" ? (O.placeholder.i = ie, O.placeholder.x = ae.x, O.placeholder.y = ae.y, O.placeholder.w = Fe, O.placeholder.h = be, Ht(() => {
        O.isDragging = !0;
      }), ee.emit("updateWidth", O.width)) : Ht(() => {
        O.isDragging = !1;
      }), L.value = bu(L.value, ae, ne, re, !0, y.preventCollision), y.restoreOnDrag ? (ae.static = !0, ri(L.value, y.verticalCompact, Ee), ae.static = !1) : ri(L.value, y.verticalCompact), ee.emit("compact"), ze(), X === "dragend" && (Ee = void 0, C("layout-updated", L.value));
    }
    function D(X, ie, ne, re, be, Fe) {
      let ae = Ec(L.value, ie);
      Qt(ae) && (ae = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let We;
      if (y.preventCollision) {
        const st = Mf(L.value, { ...ae, w: Fe, h: be }).filter(
          (Ge) => Ge.i !== ae.i
        );
        if (We = st.length > 0, We) {
          let Ge = 1 / 0, Me = 1 / 0;
          st.forEach((qt) => {
            qt.x > ae.x && (Ge = Math.min(Ge, qt.x)), qt.y > ae.y && (Me = Math.min(Me, qt.y));
          }), Number.isFinite(Ge) && (ae.w = Ge - ae.x), Number.isFinite(Me) && (ae.h = Me - ae.y);
        }
      }
      We || (ae.w = Fe, ae.h = be), X === "resizestart" || X === "resizemove" ? (O.placeholder.i = ie, O.placeholder.x = ne, O.placeholder.y = re, O.placeholder.w = ae.w, O.placeholder.h = ae.h, Ht(() => {
        O.isDragging = !0;
      }), ee.emit("updateWidth", O.width)) : X && Ht(() => {
        O.isDragging = !1;
      }), y.responsive && ue(), ri(L.value, y.verticalCompact), ee.emit("compact"), ze(), X === "resizeend" && C("layout-updated", L.value);
    }
    function ue() {
      const X = F0(y.breakpoints, O.width);
      if (X === O.lastBreakpoint)
        return;
      const ie = Df(X, y.cols);
      !Qt(O.lastBreakpoint) && !O.layouts[O.lastBreakpoint] && (O.layouts[O.lastBreakpoint] = yu(L.value));
      const ne = N0(
        O.originalLayout,
        O.layouts,
        y.breakpoints,
        X,
        O.lastBreakpoint,
        ie,
        y.verticalCompact
      );
      O.layouts[X] = ne, O.lastBreakpoint !== X && C("breakpoint-changed", X, ne), L.value = ne, C("update:layout", ne), O.lastBreakpoint = X, ee.emit("setColNum", ie);
    }
    function $e() {
      O.layouts = Object.assign({}, y.responsiveLayouts);
    }
    function Qe(X, ie) {
      const ne = new Set(ie.map((ae) => ae.i)), re = new Set(X.map((ae) => ae.i)), be = X.filter((ae) => !ne.has(ae.i)), Fe = ie.filter((ae) => !re.has(ae.i));
      return be.concat(Fe);
    }
    return (X, ie) => (kt(), Pn("div", {
      ref_key: "wrapper",
      ref: E,
      class: "vgl-layout",
      style: Ki(O.mergedStyle)
    }, [
      X.$slots.default ? gu(X.$slots, "default", { key: 0 }) : (kt(!0), Pn(u0, { key: 1 }, l0(L.value, (ne) => (kt(), eo(Cc, c0({
        key: ne.i,
        ref_for: !0
      }, ne), {
        default: oi(() => [
          gu(X.$slots, "item", { item: ne })
        ]),
        _: 2
      }, 1040))), 128)),
      vf(ni(Cc, {
        class: "vgl-item--placeholder",
        x: O.placeholder.x,
        y: O.placeholder.y,
        w: O.placeholder.w,
        h: O.placeholder.h,
        i: O.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [mf, O.isDragging]
      ])
    ], 4));
  }
});
(function() {
  try {
    if (typeof document < "u") {
      var p = document.createElement("style");
      p.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}')), document.head.appendChild(p);
    }
  } catch (h) {
    console.error("vite-plugin-css-injected-by-js", h);
  }
})();
const Vc = {
  rowHeight: 30,
  cols: { lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }
}, ii = { lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 };
function Gf(p) {
  const h = Sa(p);
  return {
    rowHeight: h.rowHeight ?? Vc.rowHeight,
    cols: { ...Vc.cols, ...Sa(h.cols) }
  };
}
const Ey = { class: "scroll max-h-screen ml-15" }, Ty = {
  key: 1,
  class: "text"
}, Oy = /* @__PURE__ */ Ta({
  __name: "View",
  props: {
    pageId: {},
    layoutSettings: {}
  },
  setup(p) {
    const h = p, l = at(void 0), y = dt(() => Gf(l.value)), C = dt(() => y.value.cols), O = dt(() => y.value.rowHeight), B = dt(() => `${O.value}-${Object.values(C.value).join("-")}`), L = xf(), E = h.pageId ?? L.params.pageid ?? "", V = yf(E), ge = V.widgets, ee = V.layout, Be = Ji(h0.TINY_EMITTER), me = Ji(wf) ?? null;
    function Re() {
      if (me && E) {
        const we = me.getPage(E);
        l.value = we?.layoutSettings ? { ...Sa(we.layoutSettings) } : void 0;
      }
    }
    Oa(async () => {
      console.log("Grid View component mounted for page:", E), Re(), me && "subscribe" in me && me.subscribe((we) => {
        we === "PAGE_UPDATE" && Re();
      }), await Ht(), Ve();
    });
    const Ve = () => {
      Be.emit("system:pageLoaded", { pageId: E });
    }, De = at(), qe = at();
    function ze(we, D) {
      const ue = Number(we);
      return Number.isFinite(ue) ? ue : D;
    }
    function Se() {
      return { colW: 1200 / C.value.md, rowH: O.value };
    }
    function Ce(we) {
      const { colW: D, rowH: ue } = Se(), $e = ze(we.x, 0), Qe = ze(we.y, 0), X = ze(we.width, D), ie = ze(we.height, ue);
      return {
        i: String(we.id ?? we.i ?? ""),
        x: Math.round($e / D),
        y: Math.round(Qe / ue),
        w: Math.max(1, Math.round(X / D)),
        h: Math.max(1, Math.round(ie / ue)),
        static: !1
      };
    }
    let Ee = dt(() => (ee.value || []).map(Ce));
    return (we, D) => (kt(), Pn("div", Ey, [
      xa("div", {
        ref_key: "wrapper",
        ref: qe,
        class: "view_grid_layout"
      }, [
        (kt(), eo(vt(qf), {
          ref_key: "gridLayout",
          ref: De,
          key: B.value,
          layout: vt(Ee),
          "onUpdate:layout": D[0] || (D[0] = (ue) => f0(Ee) ? Ee.value = ue : Ee = ue),
          "row-height": O.value,
          responsive: !0,
          "vertical-compact": !1,
          breakpoints: vt(ii),
          cols: C.value,
          "is-draggable": !1,
          "is-resizable": !1
        }, {
          item: oi(({ item: ue }) => [
            vt(ge)?.find(($e) => $e.uid === ue.i) ? (kt(), eo(vt(bf), {
              key: 0,
              widget: vt(ge).find(($e) => $e.uid === ue.i),
              ref: `${ue.i}_wrapper`,
              editEnabled: !1
            }, null, 8, ["widget"])) : (kt(), Pn("span", Ty, mu(`${ue.i}${ue.static ? "- Static" : ""}`), 1))
          ]),
          _: 1
        }, 8, ["layout", "row-height", "breakpoints", "cols"]))
      ], 512)
    ]));
  }
}), Xf = (p, h) => {
  const l = p.__vccOpts || p;
  for (const [y, C] of h)
    l[y] = C;
  return l;
}, Iy = /* @__PURE__ */ Xf(Oy, [["__scopeId", "data-v-a0615a07"]]);
var Yi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Ry = Yi.exports, Zc;
function My() {
  return Zc || (Zc = 1, (function(p, h) {
    (function() {
      var l, y = "4.17.21", C = 200, O = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", B = "Expected a function", L = "Invalid `variable` option passed into `_.template`", E = "__lodash_hash_undefined__", V = 500, ge = "__lodash_placeholder__", ee = 1, Be = 2, me = 4, Re = 1, Ve = 2, De = 1, qe = 2, ze = 4, Se = 8, Ce = 16, Ee = 32, we = 64, D = 128, ue = 256, $e = 512, Qe = 30, X = "...", ie = 800, ne = 16, re = 1, be = 2, Fe = 3, ae = 1 / 0, We = 9007199254740991, st = 17976931348623157e292, Ge = NaN, Me = 4294967295, qt = Me - 1, ut = Me >>> 1, Sn = [
        ["ary", D],
        ["bind", De],
        ["bindKey", qe],
        ["curry", Se],
        ["curryRight", Ce],
        ["flip", $e],
        ["partial", Ee],
        ["partialRight", we],
        ["rearg", ue]
      ], Je = "[object Arguments]", ht = "[object Array]", Gt = "[object AsyncFunction]", Xt = "[object Boolean]", J = "[object Date]", en = "[object DOMException]", Tt = "[object Error]", mt = "[object Function]", pn = "[object GeneratorFunction]", rt = "[object Map]", Ot = "[object Number]", $t = "[object Null]", yt = "[object Object]", Yt = "[object Promise]", ar = "[object Proxy]", It = "[object RegExp]", G = "[object Set]", Q = "[object String]", z = "[object Symbol]", Z = "[object Undefined]", le = "[object WeakMap]", ye = "[object WeakSet]", ce = "[object ArrayBuffer]", se = "[object DataView]", oe = "[object Float32Array]", et = "[object Float64Array]", lt = "[object Int8Array]", bt = "[object Int16Array]", tn = "[object Int32Array]", nn = "[object Uint8Array]", rn = "[object Uint8ClampedArray]", En = "[object Uint16Array]", Tn = "[object Uint32Array]", gn = /\b__p \+= '';/g, sr = /\b(__p \+=) '' \+/g, Kn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, si = /&(?:amp|lt|gt|quot|#39);/g, Cr = /[&<>"']/g, no = RegExp(si.source), ui = RegExp(Cr.source), li = /<%-([\s\S]+?)%>/g, ro = /<%([\s\S]+?)%>/g, ci = /<%=([\s\S]+?)%>/g, Ia = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fi = /^\w*$/, di = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hi = /[\\^$.*+?()[\]{}|]/g, Ra = RegExp(hi.source), Dr = /^\s+/, vn = /\s/, Ln = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, mn = /\{\n\/\* \[wrapped with (.+)\] \*/, Ma = /,? & /, Aa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, io = /[()=,{}\[\]\/\s]/, On = /\\(\\)?/g, pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, pi = /\w*$/, oo = /^[-+]0x[0-9a-f]+$/i, Ca = /^0b[01]+$/i, Da = /^\[object .+?Constructor\]$/, ur = /^0o[0-7]+$/i, gi = /^(?:0|[1-9]\d*)$/, za = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, zr = /($^)/, Pa = /['\n\r\u2028\u2029\\]/g, lr = "\\ud800-\\udfff", La = "\\u0300-\\u036f", ao = "\\ufe20-\\ufe2f", so = "\\u20d0-\\u20ff", cr = La + ao + so, vi = "\\u2700-\\u27bf", Pr = "a-z\\xdf-\\xf6\\xf8-\\xff", uo = "\\xac\\xb1\\xd7\\xf7", ka = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mi = "\\u2000-\\u206f", Fa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Lr = "A-Z\\xc0-\\xd6\\xd8-\\xde", lo = "\\ufe0e\\ufe0f", co = uo + ka + mi + Fa, yi = "['’]", Na = "[" + lr + "]", fo = "[" + co + "]", fr = "[" + cr + "]", dr = "\\d+", Vn = "[" + vi + "]", kr = "[" + Pr + "]", hr = "[^" + lr + co + dr + vi + Pr + Lr + "]", on = "\\ud83c[\\udffb-\\udfff]", pr = "(?:" + fr + "|" + on + ")", ho = "[^" + lr + "]", Fr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Nr = "[\\ud800-\\udbff][\\udc00-\\udfff]", In = "[" + Lr + "]", po = "\\u200d", go = "(?:" + kr + "|" + hr + ")", vo = "(?:" + In + "|" + hr + ")", mo = "(?:" + yi + "(?:d|ll|m|re|s|t|ve))?", yo = "(?:" + yi + "(?:D|LL|M|RE|S|T|VE))?", bi = pr + "?", xi = "[" + lo + "]?", Ba = "(?:" + po + "(?:" + [ho, Fr, Nr].join("|") + ")" + xi + bi + ")*", wi = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Wa = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", _i = xi + bi + Ba, Ua = "(?:" + [Vn, Fr, Nr].join("|") + ")" + _i, Br = "(?:" + [ho + fr + "?", fr, Fr, Nr, Na].join("|") + ")", Ha = RegExp(yi, "g"), bo = RegExp(fr, "g"), Wr = RegExp(on + "(?=" + on + ")|" + Br + _i, "g"), qa = RegExp([
        In + "?" + kr + "+" + mo + "(?=" + [fo, In, "$"].join("|") + ")",
        vo + "+" + yo + "(?=" + [fo, In + go, "$"].join("|") + ")",
        In + "?" + go + "+" + mo,
        In + "+" + yo,
        Wa,
        wi,
        dr,
        Ua
      ].join("|"), "g"), xo = RegExp("[" + po + lr + cr + lo + "]"), wo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ga = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], gr = -1, Ue = {};
      Ue[oe] = Ue[et] = Ue[lt] = Ue[bt] = Ue[tn] = Ue[nn] = Ue[rn] = Ue[En] = Ue[Tn] = !0, Ue[Je] = Ue[ht] = Ue[ce] = Ue[Xt] = Ue[se] = Ue[J] = Ue[Tt] = Ue[mt] = Ue[rt] = Ue[Ot] = Ue[yt] = Ue[It] = Ue[G] = Ue[Q] = Ue[le] = !1;
      var Ye = {};
      Ye[Je] = Ye[ht] = Ye[ce] = Ye[se] = Ye[Xt] = Ye[J] = Ye[oe] = Ye[et] = Ye[lt] = Ye[bt] = Ye[tn] = Ye[rt] = Ye[Ot] = Ye[yt] = Ye[It] = Ye[G] = Ye[Q] = Ye[z] = Ye[nn] = Ye[rn] = Ye[En] = Ye[Tn] = !0, Ye[Tt] = Ye[mt] = Ye[le] = !1;
      var Si = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, _o = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Xa = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Ei = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, So = parseFloat, Eo = parseInt, Ur = typeof or == "object" && or && or.Object === Object && or, $a = typeof self == "object" && self && self.Object === Object && self, ct = Ur || $a || Function("return this")(), an = h && !h.nodeType && h, kn = an && !0 && p && !p.nodeType && p, To = kn && kn.exports === an, Ti = To && Ur.process, Rt = (function() {
        try {
          var w = kn && kn.require && kn.require("util").types;
          return w || Ti && Ti.binding && Ti.binding("util");
        } catch {
        }
      })(), Oi = Rt && Rt.isArrayBuffer, pt = Rt && Rt.isDate, Oo = Rt && Rt.isMap, Io = Rt && Rt.isRegExp, Ro = Rt && Rt.isSet, Mo = Rt && Rt.isTypedArray;
      function Mt(w, A, R) {
        switch (R.length) {
          case 0:
            return w.call(A);
          case 1:
            return w.call(A, R[0]);
          case 2:
            return w.call(A, R[0], R[1]);
          case 3:
            return w.call(A, R[0], R[1], R[2]);
        }
        return w.apply(A, R);
      }
      function Ya(w, A, R, k) {
        for (var $ = -1, ve = w == null ? 0 : w.length; ++$ < ve; ) {
          var xe = w[$];
          A(k, xe, R(xe), w);
        }
        return k;
      }
      function Ft(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length; ++R < k && A(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function Ka(w, A) {
        for (var R = w == null ? 0 : w.length; R-- && A(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function Ii(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length; ++R < k; )
          if (!A(w[R], R, w))
            return !1;
        return !0;
      }
      function Kt(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length, $ = 0, ve = []; ++R < k; ) {
          var xe = w[R];
          A(xe, R, w) && (ve[$++] = xe);
        }
        return ve;
      }
      function sn(w, A) {
        var R = w == null ? 0 : w.length;
        return !!R && jn(w, A, 0) > -1;
      }
      function Zn(w, A, R) {
        for (var k = -1, $ = w == null ? 0 : w.length; ++k < $; )
          if (R(A, w[k]))
            return !0;
        return !1;
      }
      function Ze(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length, $ = Array(k); ++R < k; )
          $[R] = A(w[R], R, w);
        return $;
      }
      function yn(w, A) {
        for (var R = -1, k = A.length, $ = w.length; ++R < k; )
          w[$ + R] = A[R];
        return w;
      }
      function Hr(w, A, R, k) {
        var $ = -1, ve = w == null ? 0 : w.length;
        for (k && ve && (R = w[++$]); ++$ < ve; )
          R = A(R, w[$], $, w);
        return R;
      }
      function Ao(w, A, R, k) {
        var $ = w == null ? 0 : w.length;
        for (k && $ && (R = w[--$]); $--; )
          R = A(R, w[$], $, w);
        return R;
      }
      function Fn(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length; ++R < k; )
          if (A(w[R], R, w))
            return !0;
        return !1;
      }
      var Va = Mi("length");
      function Za(w) {
        return w.split("");
      }
      function ja(w) {
        return w.match(Aa) || [];
      }
      function Co(w, A, R) {
        var k;
        return R(w, function($, ve, xe) {
          if (A($, ve, xe))
            return k = ve, !1;
        }), k;
      }
      function qr(w, A, R, k) {
        for (var $ = w.length, ve = R + (k ? 1 : -1); k ? ve-- : ++ve < $; )
          if (A(w[ve], ve, w))
            return ve;
        return -1;
      }
      function jn(w, A, R) {
        return A === A ? v(w, A, R) : qr(w, Do, R);
      }
      function Ri(w, A, R, k) {
        for (var $ = R - 1, ve = w.length; ++$ < ve; )
          if (k(w[$], A))
            return $;
        return -1;
      }
      function Do(w) {
        return w !== w;
      }
      function vr(w, A) {
        var R = w == null ? 0 : w.length;
        return R ? Gr(w, A) / R : Ge;
      }
      function Mi(w) {
        return function(A) {
          return A == null ? l : A[w];
        };
      }
      function mr(w) {
        return function(A) {
          return w == null ? l : w[A];
        };
      }
      function zo(w, A, R, k, $) {
        return $(w, function(ve, xe, Te) {
          R = k ? (k = !1, ve) : A(R, ve, xe, Te);
        }), R;
      }
      function Ja(w, A) {
        var R = w.length;
        for (w.sort(A); R--; )
          w[R] = w[R].value;
        return w;
      }
      function Gr(w, A) {
        for (var R, k = -1, $ = w.length; ++k < $; ) {
          var ve = A(w[k]);
          ve !== l && (R = R === l ? ve : R + ve);
        }
        return R;
      }
      function Nn(w, A) {
        for (var R = -1, k = Array(w); ++R < w; )
          k[R] = A(R);
        return k;
      }
      function Rn(w, A) {
        return Ze(A, function(R) {
          return [R, w[R]];
        });
      }
      function Ai(w) {
        return w && w.slice(0, I(w) + 1).replace(Dr, "");
      }
      function xt(w) {
        return function(A) {
          return w(A);
        };
      }
      function Ci(w, A) {
        return Ze(A, function(R) {
          return w[R];
        });
      }
      function yr(w, A) {
        return w.has(A);
      }
      function Po(w, A) {
        for (var R = -1, k = w.length; ++R < k && jn(A, w[R], 0) > -1; )
          ;
        return R;
      }
      function Lo(w, A) {
        for (var R = w.length; R-- && jn(A, w[R], 0) > -1; )
          ;
        return R;
      }
      function Qa(w, A) {
        for (var R = w.length, k = 0; R--; )
          w[R] === A && ++k;
        return k;
      }
      var es = mr(Si), ts = mr(_o);
      function ns(w) {
        return "\\" + Ei[w];
      }
      function rs(w, A) {
        return w == null ? l : w[A];
      }
      function Jn(w) {
        return xo.test(w);
      }
      function r(w) {
        return wo.test(w);
      }
      function n(w) {
        for (var A, R = []; !(A = w.next()).done; )
          R.push(A.value);
        return R;
      }
      function o(w) {
        var A = -1, R = Array(w.size);
        return w.forEach(function(k, $) {
          R[++A] = [$, k];
        }), R;
      }
      function a(w, A) {
        return function(R) {
          return w(A(R));
        };
      }
      function u(w, A) {
        for (var R = -1, k = w.length, $ = 0, ve = []; ++R < k; ) {
          var xe = w[R];
          (xe === A || xe === ge) && (w[R] = ge, ve[$++] = R);
        }
        return ve;
      }
      function c(w) {
        var A = -1, R = Array(w.size);
        return w.forEach(function(k) {
          R[++A] = k;
        }), R;
      }
      function d(w) {
        var A = -1, R = Array(w.size);
        return w.forEach(function(k) {
          R[++A] = [k, k];
        }), R;
      }
      function v(w, A, R) {
        for (var k = R - 1, $ = w.length; ++k < $; )
          if (w[k] === A)
            return k;
        return -1;
      }
      function b(w, A, R) {
        for (var k = R + 1; k--; )
          if (w[k] === A)
            return k;
        return k;
      }
      function S(w) {
        return Jn(w) ? H(w) : Va(w);
      }
      function x(w) {
        return Jn(w) ? W(w) : Za(w);
      }
      function I(w) {
        for (var A = w.length; A-- && vn.test(w.charAt(A)); )
          ;
        return A;
      }
      var P = mr(Xa);
      function H(w) {
        for (var A = Wr.lastIndex = 0; Wr.test(w); )
          ++A;
        return A;
      }
      function W(w) {
        return w.match(Wr) || [];
      }
      function q(w) {
        return w.match(qa) || [];
      }
      var j = (function w(A) {
        A = A == null ? ct : Y.defaults(ct.Object(), A, Y.pick(ct, Ga));
        var R = A.Array, k = A.Date, $ = A.Error, ve = A.Function, xe = A.Math, Te = A.Object, At = A.RegExp, bn = A.String, wt = A.TypeError, Mn = R.prototype, jf = ve.prototype, Xr = Te.prototype, ko = A["__core-js_shared__"], Fo = jf.toString, Xe = Xr.hasOwnProperty, Jf = 0, Tu = (function() {
          var e = /[^.]+$/.exec(ko && ko.keys && ko.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), No = Xr.toString, Qf = Fo.call(Te), ed = ct._, td = At(
          "^" + Fo.call(Xe).replace(hi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Bo = To ? A.Buffer : l, Qn = A.Symbol, Wo = A.Uint8Array, Ou = Bo ? Bo.allocUnsafe : l, Uo = a(Te.getPrototypeOf, Te), Iu = Te.create, Ru = Xr.propertyIsEnumerable, Ho = Mn.splice, Mu = Qn ? Qn.isConcatSpreadable : l, Di = Qn ? Qn.iterator : l, br = Qn ? Qn.toStringTag : l, qo = (function() {
          try {
            var e = Er(Te, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), nd = A.clearTimeout !== ct.clearTimeout && A.clearTimeout, rd = k && k.now !== ct.Date.now && k.now, id = A.setTimeout !== ct.setTimeout && A.setTimeout, Go = xe.ceil, Xo = xe.floor, is = Te.getOwnPropertySymbols, od = Bo ? Bo.isBuffer : l, Au = A.isFinite, ad = Mn.join, sd = a(Te.keys, Te), ft = xe.max, St = xe.min, ud = k.now, ld = A.parseInt, Cu = xe.random, cd = Mn.reverse, os = Er(A, "DataView"), zi = Er(A, "Map"), as = Er(A, "Promise"), $r = Er(A, "Set"), Pi = Er(A, "WeakMap"), Li = Er(Te, "create"), $o = Pi && new Pi(), Yr = {}, fd = Tr(os), dd = Tr(zi), hd = Tr(as), pd = Tr($r), gd = Tr(Pi), Yo = Qn ? Qn.prototype : l, ki = Yo ? Yo.valueOf : l, Du = Yo ? Yo.toString : l;
        function g(e) {
          if (nt(e) && !_e(e) && !(e instanceof Le)) {
            if (e instanceof un)
              return e;
            if (Xe.call(e, "__wrapped__"))
              return zl(e);
          }
          return new un(e);
        }
        var Kr = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!tt(t))
              return {};
            if (Iu)
              return Iu(t);
            e.prototype = t;
            var i = new e();
            return e.prototype = l, i;
          };
        })();
        function Ko() {
        }
        function un(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = l;
        }
        g.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: li,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: ro,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: ci,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: g
          }
        }, g.prototype = Ko.prototype, g.prototype.constructor = g, un.prototype = Kr(Ko.prototype), un.prototype.constructor = un;
        function Le(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Me, this.__views__ = [];
        }
        function vd() {
          var e = new Le(this.__wrapped__);
          return e.__actions__ = Nt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Nt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Nt(this.__views__), e;
        }
        function md() {
          if (this.__filtered__) {
            var e = new Le(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function yd() {
          var e = this.__wrapped__.value(), t = this.__dir__, i = _e(e), s = t < 0, f = i ? e.length : 0, m = Ah(0, f, this.__views__), _ = m.start, T = m.end, M = T - _, F = s ? T : _ - 1, N = this.__iteratees__, U = N.length, K = 0, te = St(M, this.__takeCount__);
          if (!i || !s && f == M && te == M)
            return nl(e, this.__actions__);
          var de = [];
          e:
            for (; M-- && K < te; ) {
              F += t;
              for (var Ie = -1, he = e[F]; ++Ie < U; ) {
                var Pe = N[Ie], ke = Pe.iteratee, jt = Pe.type, zt = ke(he);
                if (jt == be)
                  he = zt;
                else if (!zt) {
                  if (jt == re)
                    continue e;
                  break e;
                }
              }
              de[K++] = he;
            }
          return de;
        }
        Le.prototype = Kr(Ko.prototype), Le.prototype.constructor = Le;
        function xr(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function bd() {
          this.__data__ = Li ? Li(null) : {}, this.size = 0;
        }
        function xd(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function wd(e) {
          var t = this.__data__;
          if (Li) {
            var i = t[e];
            return i === E ? l : i;
          }
          return Xe.call(t, e) ? t[e] : l;
        }
        function _d(e) {
          var t = this.__data__;
          return Li ? t[e] !== l : Xe.call(t, e);
        }
        function Sd(e, t) {
          var i = this.__data__;
          return this.size += this.has(e) ? 0 : 1, i[e] = Li && t === l ? E : t, this;
        }
        xr.prototype.clear = bd, xr.prototype.delete = xd, xr.prototype.get = wd, xr.prototype.has = _d, xr.prototype.set = Sd;
        function Bn(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function Ed() {
          this.__data__ = [], this.size = 0;
        }
        function Td(e) {
          var t = this.__data__, i = Vo(t, e);
          if (i < 0)
            return !1;
          var s = t.length - 1;
          return i == s ? t.pop() : Ho.call(t, i, 1), --this.size, !0;
        }
        function Od(e) {
          var t = this.__data__, i = Vo(t, e);
          return i < 0 ? l : t[i][1];
        }
        function Id(e) {
          return Vo(this.__data__, e) > -1;
        }
        function Rd(e, t) {
          var i = this.__data__, s = Vo(i, e);
          return s < 0 ? (++this.size, i.push([e, t])) : i[s][1] = t, this;
        }
        Bn.prototype.clear = Ed, Bn.prototype.delete = Td, Bn.prototype.get = Od, Bn.prototype.has = Id, Bn.prototype.set = Rd;
        function Wn(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function Md() {
          this.size = 0, this.__data__ = {
            hash: new xr(),
            map: new (zi || Bn)(),
            string: new xr()
          };
        }
        function Ad(e) {
          var t = sa(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function Cd(e) {
          return sa(this, e).get(e);
        }
        function Dd(e) {
          return sa(this, e).has(e);
        }
        function zd(e, t) {
          var i = sa(this, e), s = i.size;
          return i.set(e, t), this.size += i.size == s ? 0 : 1, this;
        }
        Wn.prototype.clear = Md, Wn.prototype.delete = Ad, Wn.prototype.get = Cd, Wn.prototype.has = Dd, Wn.prototype.set = zd;
        function wr(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.__data__ = new Wn(); ++t < i; )
            this.add(e[t]);
        }
        function Pd(e) {
          return this.__data__.set(e, E), this;
        }
        function Ld(e) {
          return this.__data__.has(e);
        }
        wr.prototype.add = wr.prototype.push = Pd, wr.prototype.has = Ld;
        function xn(e) {
          var t = this.__data__ = new Bn(e);
          this.size = t.size;
        }
        function kd() {
          this.__data__ = new Bn(), this.size = 0;
        }
        function Fd(e) {
          var t = this.__data__, i = t.delete(e);
          return this.size = t.size, i;
        }
        function Nd(e) {
          return this.__data__.get(e);
        }
        function Bd(e) {
          return this.__data__.has(e);
        }
        function Wd(e, t) {
          var i = this.__data__;
          if (i instanceof Bn) {
            var s = i.__data__;
            if (!zi || s.length < C - 1)
              return s.push([e, t]), this.size = ++i.size, this;
            i = this.__data__ = new Wn(s);
          }
          return i.set(e, t), this.size = i.size, this;
        }
        xn.prototype.clear = kd, xn.prototype.delete = Fd, xn.prototype.get = Nd, xn.prototype.has = Bd, xn.prototype.set = Wd;
        function zu(e, t) {
          var i = _e(e), s = !i && Or(e), f = !i && !s && ir(e), m = !i && !s && !f && Jr(e), _ = i || s || f || m, T = _ ? Nn(e.length, bn) : [], M = T.length;
          for (var F in e)
            (t || Xe.call(e, F)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (F == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            f && (F == "offset" || F == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            m && (F == "buffer" || F == "byteLength" || F == "byteOffset") || // Skip index properties.
            Gn(F, M))) && T.push(F);
          return T;
        }
        function Pu(e) {
          var t = e.length;
          return t ? e[ms(0, t - 1)] : l;
        }
        function Ud(e, t) {
          return ua(Nt(e), _r(t, 0, e.length));
        }
        function Hd(e) {
          return ua(Nt(e));
        }
        function ss(e, t, i) {
          (i !== l && !wn(e[t], i) || i === l && !(t in e)) && Un(e, t, i);
        }
        function Fi(e, t, i) {
          var s = e[t];
          (!(Xe.call(e, t) && wn(s, i)) || i === l && !(t in e)) && Un(e, t, i);
        }
        function Vo(e, t) {
          for (var i = e.length; i--; )
            if (wn(e[i][0], t))
              return i;
          return -1;
        }
        function qd(e, t, i, s) {
          return er(e, function(f, m, _) {
            t(s, f, i(f), _);
          }), s;
        }
        function Lu(e, t) {
          return e && Cn(t, gt(t), e);
        }
        function Gd(e, t) {
          return e && Cn(t, Wt(t), e);
        }
        function Un(e, t, i) {
          t == "__proto__" && qo ? qo(e, t, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : e[t] = i;
        }
        function us(e, t) {
          for (var i = -1, s = t.length, f = R(s), m = e == null; ++i < s; )
            f[i] = m ? l : Hs(e, t[i]);
          return f;
        }
        function _r(e, t, i) {
          return e === e && (i !== l && (e = e <= i ? e : i), t !== l && (e = e >= t ? e : t)), e;
        }
        function ln(e, t, i, s, f, m) {
          var _, T = t & ee, M = t & Be, F = t & me;
          if (i && (_ = f ? i(e, s, f, m) : i(e)), _ !== l)
            return _;
          if (!tt(e))
            return e;
          var N = _e(e);
          if (N) {
            if (_ = Dh(e), !T)
              return Nt(e, _);
          } else {
            var U = Et(e), K = U == mt || U == pn;
            if (ir(e))
              return ol(e, T);
            if (U == yt || U == Je || K && !f) {
              if (_ = M || K ? {} : El(e), !T)
                return M ? wh(e, Gd(_, e)) : xh(e, Lu(_, e));
            } else {
              if (!Ye[U])
                return f ? e : {};
              _ = zh(e, U, T);
            }
          }
          m || (m = new xn());
          var te = m.get(e);
          if (te)
            return te;
          m.set(e, _), Ql(e) ? e.forEach(function(he) {
            _.add(ln(he, t, i, he, e, m));
          }) : jl(e) && e.forEach(function(he, Pe) {
            _.set(Pe, ln(he, t, i, Pe, e, m));
          });
          var de = F ? M ? Rs : Is : M ? Wt : gt, Ie = N ? l : de(e);
          return Ft(Ie || e, function(he, Pe) {
            Ie && (Pe = he, he = e[Pe]), Fi(_, Pe, ln(he, t, i, Pe, e, m));
          }), _;
        }
        function Xd(e) {
          var t = gt(e);
          return function(i) {
            return ku(i, e, t);
          };
        }
        function ku(e, t, i) {
          var s = i.length;
          if (e == null)
            return !s;
          for (e = Te(e); s--; ) {
            var f = i[s], m = t[f], _ = e[f];
            if (_ === l && !(f in e) || !m(_))
              return !1;
          }
          return !0;
        }
        function Fu(e, t, i) {
          if (typeof e != "function")
            throw new wt(B);
          return Gi(function() {
            e.apply(l, i);
          }, t);
        }
        function Ni(e, t, i, s) {
          var f = -1, m = sn, _ = !0, T = e.length, M = [], F = t.length;
          if (!T)
            return M;
          i && (t = Ze(t, xt(i))), s ? (m = Zn, _ = !1) : t.length >= C && (m = yr, _ = !1, t = new wr(t));
          e:
            for (; ++f < T; ) {
              var N = e[f], U = i == null ? N : i(N);
              if (N = s || N !== 0 ? N : 0, _ && U === U) {
                for (var K = F; K--; )
                  if (t[K] === U)
                    continue e;
                M.push(N);
              } else m(t, U, s) || M.push(N);
            }
          return M;
        }
        var er = cl(An), Nu = cl(cs, !0);
        function $d(e, t) {
          var i = !0;
          return er(e, function(s, f, m) {
            return i = !!t(s, f, m), i;
          }), i;
        }
        function Zo(e, t, i) {
          for (var s = -1, f = e.length; ++s < f; ) {
            var m = e[s], _ = t(m);
            if (_ != null && (T === l ? _ === _ && !Zt(_) : i(_, T)))
              var T = _, M = m;
          }
          return M;
        }
        function Yd(e, t, i, s) {
          var f = e.length;
          for (i = Oe(i), i < 0 && (i = -i > f ? 0 : f + i), s = s === l || s > f ? f : Oe(s), s < 0 && (s += f), s = i > s ? 0 : tc(s); i < s; )
            e[i++] = t;
          return e;
        }
        function Bu(e, t) {
          var i = [];
          return er(e, function(s, f, m) {
            t(s, f, m) && i.push(s);
          }), i;
        }
        function _t(e, t, i, s, f) {
          var m = -1, _ = e.length;
          for (i || (i = Lh), f || (f = []); ++m < _; ) {
            var T = e[m];
            t > 0 && i(T) ? t > 1 ? _t(T, t - 1, i, s, f) : yn(f, T) : s || (f[f.length] = T);
          }
          return f;
        }
        var ls = fl(), Wu = fl(!0);
        function An(e, t) {
          return e && ls(e, t, gt);
        }
        function cs(e, t) {
          return e && Wu(e, t, gt);
        }
        function jo(e, t) {
          return Kt(t, function(i) {
            return Xn(e[i]);
          });
        }
        function Sr(e, t) {
          t = nr(t, e);
          for (var i = 0, s = t.length; e != null && i < s; )
            e = e[Dn(t[i++])];
          return i && i == s ? e : l;
        }
        function Uu(e, t, i) {
          var s = t(e);
          return _e(e) ? s : yn(s, i(e));
        }
        function Ct(e) {
          return e == null ? e === l ? Z : $t : br && br in Te(e) ? Mh(e) : Hh(e);
        }
        function fs(e, t) {
          return e > t;
        }
        function Kd(e, t) {
          return e != null && Xe.call(e, t);
        }
        function Vd(e, t) {
          return e != null && t in Te(e);
        }
        function Zd(e, t, i) {
          return e >= St(t, i) && e < ft(t, i);
        }
        function ds(e, t, i) {
          for (var s = i ? Zn : sn, f = e[0].length, m = e.length, _ = m, T = R(m), M = 1 / 0, F = []; _--; ) {
            var N = e[_];
            _ && t && (N = Ze(N, xt(t))), M = St(N.length, M), T[_] = !i && (t || f >= 120 && N.length >= 120) ? new wr(_ && N) : l;
          }
          N = e[0];
          var U = -1, K = T[0];
          e:
            for (; ++U < f && F.length < M; ) {
              var te = N[U], de = t ? t(te) : te;
              if (te = i || te !== 0 ? te : 0, !(K ? yr(K, de) : s(F, de, i))) {
                for (_ = m; --_; ) {
                  var Ie = T[_];
                  if (!(Ie ? yr(Ie, de) : s(e[_], de, i)))
                    continue e;
                }
                K && K.push(de), F.push(te);
              }
            }
          return F;
        }
        function jd(e, t, i, s) {
          return An(e, function(f, m, _) {
            t(s, i(f), m, _);
          }), s;
        }
        function Bi(e, t, i) {
          t = nr(t, e), e = Rl(e, t);
          var s = e == null ? e : e[Dn(fn(t))];
          return s == null ? l : Mt(s, e, i);
        }
        function Hu(e) {
          return nt(e) && Ct(e) == Je;
        }
        function Jd(e) {
          return nt(e) && Ct(e) == ce;
        }
        function Qd(e) {
          return nt(e) && Ct(e) == J;
        }
        function Wi(e, t, i, s, f) {
          return e === t ? !0 : e == null || t == null || !nt(e) && !nt(t) ? e !== e && t !== t : eh(e, t, i, s, Wi, f);
        }
        function eh(e, t, i, s, f, m) {
          var _ = _e(e), T = _e(t), M = _ ? ht : Et(e), F = T ? ht : Et(t);
          M = M == Je ? yt : M, F = F == Je ? yt : F;
          var N = M == yt, U = F == yt, K = M == F;
          if (K && ir(e)) {
            if (!ir(t))
              return !1;
            _ = !0, N = !1;
          }
          if (K && !N)
            return m || (m = new xn()), _ || Jr(e) ? wl(e, t, i, s, f, m) : Ih(e, t, M, i, s, f, m);
          if (!(i & Re)) {
            var te = N && Xe.call(e, "__wrapped__"), de = U && Xe.call(t, "__wrapped__");
            if (te || de) {
              var Ie = te ? e.value() : e, he = de ? t.value() : t;
              return m || (m = new xn()), f(Ie, he, i, s, m);
            }
          }
          return K ? (m || (m = new xn()), Rh(e, t, i, s, f, m)) : !1;
        }
        function th(e) {
          return nt(e) && Et(e) == rt;
        }
        function hs(e, t, i, s) {
          var f = i.length, m = f, _ = !s;
          if (e == null)
            return !m;
          for (e = Te(e); f--; ) {
            var T = i[f];
            if (_ && T[2] ? T[1] !== e[T[0]] : !(T[0] in e))
              return !1;
          }
          for (; ++f < m; ) {
            T = i[f];
            var M = T[0], F = e[M], N = T[1];
            if (_ && T[2]) {
              if (F === l && !(M in e))
                return !1;
            } else {
              var U = new xn();
              if (s)
                var K = s(F, N, M, e, t, U);
              if (!(K === l ? Wi(N, F, Re | Ve, s, U) : K))
                return !1;
            }
          }
          return !0;
        }
        function qu(e) {
          if (!tt(e) || Fh(e))
            return !1;
          var t = Xn(e) ? td : Da;
          return t.test(Tr(e));
        }
        function nh(e) {
          return nt(e) && Ct(e) == It;
        }
        function rh(e) {
          return nt(e) && Et(e) == G;
        }
        function ih(e) {
          return nt(e) && pa(e.length) && !!Ue[Ct(e)];
        }
        function Gu(e) {
          return typeof e == "function" ? e : e == null ? Ut : typeof e == "object" ? _e(e) ? Yu(e[0], e[1]) : $u(e) : dc(e);
        }
        function ps(e) {
          if (!qi(e))
            return sd(e);
          var t = [];
          for (var i in Te(e))
            Xe.call(e, i) && i != "constructor" && t.push(i);
          return t;
        }
        function oh(e) {
          if (!tt(e))
            return Uh(e);
          var t = qi(e), i = [];
          for (var s in e)
            s == "constructor" && (t || !Xe.call(e, s)) || i.push(s);
          return i;
        }
        function gs(e, t) {
          return e < t;
        }
        function Xu(e, t) {
          var i = -1, s = Bt(e) ? R(e.length) : [];
          return er(e, function(f, m, _) {
            s[++i] = t(f, m, _);
          }), s;
        }
        function $u(e) {
          var t = As(e);
          return t.length == 1 && t[0][2] ? Ol(t[0][0], t[0][1]) : function(i) {
            return i === e || hs(i, e, t);
          };
        }
        function Yu(e, t) {
          return Ds(e) && Tl(t) ? Ol(Dn(e), t) : function(i) {
            var s = Hs(i, e);
            return s === l && s === t ? qs(i, e) : Wi(t, s, Re | Ve);
          };
        }
        function Jo(e, t, i, s, f) {
          e !== t && ls(t, function(m, _) {
            if (f || (f = new xn()), tt(m))
              ah(e, t, _, i, Jo, s, f);
            else {
              var T = s ? s(Ps(e, _), m, _ + "", e, t, f) : l;
              T === l && (T = m), ss(e, _, T);
            }
          }, Wt);
        }
        function ah(e, t, i, s, f, m, _) {
          var T = Ps(e, i), M = Ps(t, i), F = _.get(M);
          if (F) {
            ss(e, i, F);
            return;
          }
          var N = m ? m(T, M, i + "", e, t, _) : l, U = N === l;
          if (U) {
            var K = _e(M), te = !K && ir(M), de = !K && !te && Jr(M);
            N = M, K || te || de ? _e(T) ? N = T : it(T) ? N = Nt(T) : te ? (U = !1, N = ol(M, !0)) : de ? (U = !1, N = al(M, !0)) : N = [] : Xi(M) || Or(M) ? (N = T, Or(T) ? N = nc(T) : (!tt(T) || Xn(T)) && (N = El(M))) : U = !1;
          }
          U && (_.set(M, N), f(N, M, s, m, _), _.delete(M)), ss(e, i, N);
        }
        function Ku(e, t) {
          var i = e.length;
          if (i)
            return t += t < 0 ? i : 0, Gn(t, i) ? e[t] : l;
        }
        function Vu(e, t, i) {
          t.length ? t = Ze(t, function(m) {
            return _e(m) ? function(_) {
              return Sr(_, m.length === 1 ? m[0] : m);
            } : m;
          }) : t = [Ut];
          var s = -1;
          t = Ze(t, xt(fe()));
          var f = Xu(e, function(m, _, T) {
            var M = Ze(t, function(F) {
              return F(m);
            });
            return { criteria: M, index: ++s, value: m };
          });
          return Ja(f, function(m, _) {
            return bh(m, _, i);
          });
        }
        function sh(e, t) {
          return Zu(e, t, function(i, s) {
            return qs(e, s);
          });
        }
        function Zu(e, t, i) {
          for (var s = -1, f = t.length, m = {}; ++s < f; ) {
            var _ = t[s], T = Sr(e, _);
            i(T, _) && Ui(m, nr(_, e), T);
          }
          return m;
        }
        function uh(e) {
          return function(t) {
            return Sr(t, e);
          };
        }
        function vs(e, t, i, s) {
          var f = s ? Ri : jn, m = -1, _ = t.length, T = e;
          for (e === t && (t = Nt(t)), i && (T = Ze(e, xt(i))); ++m < _; )
            for (var M = 0, F = t[m], N = i ? i(F) : F; (M = f(T, N, M, s)) > -1; )
              T !== e && Ho.call(T, M, 1), Ho.call(e, M, 1);
          return e;
        }
        function ju(e, t) {
          for (var i = e ? t.length : 0, s = i - 1; i--; ) {
            var f = t[i];
            if (i == s || f !== m) {
              var m = f;
              Gn(f) ? Ho.call(e, f, 1) : xs(e, f);
            }
          }
          return e;
        }
        function ms(e, t) {
          return e + Xo(Cu() * (t - e + 1));
        }
        function lh(e, t, i, s) {
          for (var f = -1, m = ft(Go((t - e) / (i || 1)), 0), _ = R(m); m--; )
            _[s ? m : ++f] = e, e += i;
          return _;
        }
        function ys(e, t) {
          var i = "";
          if (!e || t < 1 || t > We)
            return i;
          do
            t % 2 && (i += e), t = Xo(t / 2), t && (e += e);
          while (t);
          return i;
        }
        function Ae(e, t) {
          return Ls(Il(e, t, Ut), e + "");
        }
        function ch(e) {
          return Pu(Qr(e));
        }
        function fh(e, t) {
          var i = Qr(e);
          return ua(i, _r(t, 0, i.length));
        }
        function Ui(e, t, i, s) {
          if (!tt(e))
            return e;
          t = nr(t, e);
          for (var f = -1, m = t.length, _ = m - 1, T = e; T != null && ++f < m; ) {
            var M = Dn(t[f]), F = i;
            if (M === "__proto__" || M === "constructor" || M === "prototype")
              return e;
            if (f != _) {
              var N = T[M];
              F = s ? s(N, M, T) : l, F === l && (F = tt(N) ? N : Gn(t[f + 1]) ? [] : {});
            }
            Fi(T, M, F), T = T[M];
          }
          return e;
        }
        var Ju = $o ? function(e, t) {
          return $o.set(e, t), e;
        } : Ut, dh = qo ? function(e, t) {
          return qo(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Xs(t),
            writable: !0
          });
        } : Ut;
        function hh(e) {
          return ua(Qr(e));
        }
        function cn(e, t, i) {
          var s = -1, f = e.length;
          t < 0 && (t = -t > f ? 0 : f + t), i = i > f ? f : i, i < 0 && (i += f), f = t > i ? 0 : i - t >>> 0, t >>>= 0;
          for (var m = R(f); ++s < f; )
            m[s] = e[s + t];
          return m;
        }
        function ph(e, t) {
          var i;
          return er(e, function(s, f, m) {
            return i = t(s, f, m), !i;
          }), !!i;
        }
        function Qo(e, t, i) {
          var s = 0, f = e == null ? s : e.length;
          if (typeof t == "number" && t === t && f <= ut) {
            for (; s < f; ) {
              var m = s + f >>> 1, _ = e[m];
              _ !== null && !Zt(_) && (i ? _ <= t : _ < t) ? s = m + 1 : f = m;
            }
            return f;
          }
          return bs(e, t, Ut, i);
        }
        function bs(e, t, i, s) {
          var f = 0, m = e == null ? 0 : e.length;
          if (m === 0)
            return 0;
          t = i(t);
          for (var _ = t !== t, T = t === null, M = Zt(t), F = t === l; f < m; ) {
            var N = Xo((f + m) / 2), U = i(e[N]), K = U !== l, te = U === null, de = U === U, Ie = Zt(U);
            if (_)
              var he = s || de;
            else F ? he = de && (s || K) : T ? he = de && K && (s || !te) : M ? he = de && K && !te && (s || !Ie) : te || Ie ? he = !1 : he = s ? U <= t : U < t;
            he ? f = N + 1 : m = N;
          }
          return St(m, qt);
        }
        function Qu(e, t) {
          for (var i = -1, s = e.length, f = 0, m = []; ++i < s; ) {
            var _ = e[i], T = t ? t(_) : _;
            if (!i || !wn(T, M)) {
              var M = T;
              m[f++] = _ === 0 ? 0 : _;
            }
          }
          return m;
        }
        function el(e) {
          return typeof e == "number" ? e : Zt(e) ? Ge : +e;
        }
        function Vt(e) {
          if (typeof e == "string")
            return e;
          if (_e(e))
            return Ze(e, Vt) + "";
          if (Zt(e))
            return Du ? Du.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -ae ? "-0" : t;
        }
        function tr(e, t, i) {
          var s = -1, f = sn, m = e.length, _ = !0, T = [], M = T;
          if (i)
            _ = !1, f = Zn;
          else if (m >= C) {
            var F = t ? null : Th(e);
            if (F)
              return c(F);
            _ = !1, f = yr, M = new wr();
          } else
            M = t ? [] : T;
          e:
            for (; ++s < m; ) {
              var N = e[s], U = t ? t(N) : N;
              if (N = i || N !== 0 ? N : 0, _ && U === U) {
                for (var K = M.length; K--; )
                  if (M[K] === U)
                    continue e;
                t && M.push(U), T.push(N);
              } else f(M, U, i) || (M !== T && M.push(U), T.push(N));
            }
          return T;
        }
        function xs(e, t) {
          return t = nr(t, e), e = Rl(e, t), e == null || delete e[Dn(fn(t))];
        }
        function tl(e, t, i, s) {
          return Ui(e, t, i(Sr(e, t)), s);
        }
        function ea(e, t, i, s) {
          for (var f = e.length, m = s ? f : -1; (s ? m-- : ++m < f) && t(e[m], m, e); )
            ;
          return i ? cn(e, s ? 0 : m, s ? m + 1 : f) : cn(e, s ? m + 1 : 0, s ? f : m);
        }
        function nl(e, t) {
          var i = e;
          return i instanceof Le && (i = i.value()), Hr(t, function(s, f) {
            return f.func.apply(f.thisArg, yn([s], f.args));
          }, i);
        }
        function ws(e, t, i) {
          var s = e.length;
          if (s < 2)
            return s ? tr(e[0]) : [];
          for (var f = -1, m = R(s); ++f < s; )
            for (var _ = e[f], T = -1; ++T < s; )
              T != f && (m[f] = Ni(m[f] || _, e[T], t, i));
          return tr(_t(m, 1), t, i);
        }
        function rl(e, t, i) {
          for (var s = -1, f = e.length, m = t.length, _ = {}; ++s < f; ) {
            var T = s < m ? t[s] : l;
            i(_, e[s], T);
          }
          return _;
        }
        function _s(e) {
          return it(e) ? e : [];
        }
        function Ss(e) {
          return typeof e == "function" ? e : Ut;
        }
        function nr(e, t) {
          return _e(e) ? e : Ds(e, t) ? [e] : Dl(He(e));
        }
        var gh = Ae;
        function rr(e, t, i) {
          var s = e.length;
          return i = i === l ? s : i, !t && i >= s ? e : cn(e, t, i);
        }
        var il = nd || function(e) {
          return ct.clearTimeout(e);
        };
        function ol(e, t) {
          if (t)
            return e.slice();
          var i = e.length, s = Ou ? Ou(i) : new e.constructor(i);
          return e.copy(s), s;
        }
        function Es(e) {
          var t = new e.constructor(e.byteLength);
          return new Wo(t).set(new Wo(e)), t;
        }
        function vh(e, t) {
          var i = t ? Es(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.byteLength);
        }
        function mh(e) {
          var t = new e.constructor(e.source, pi.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function yh(e) {
          return ki ? Te(ki.call(e)) : {};
        }
        function al(e, t) {
          var i = t ? Es(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.length);
        }
        function sl(e, t) {
          if (e !== t) {
            var i = e !== l, s = e === null, f = e === e, m = Zt(e), _ = t !== l, T = t === null, M = t === t, F = Zt(t);
            if (!T && !F && !m && e > t || m && _ && M && !T && !F || s && _ && M || !i && M || !f)
              return 1;
            if (!s && !m && !F && e < t || F && i && f && !s && !m || T && i && f || !_ && f || !M)
              return -1;
          }
          return 0;
        }
        function bh(e, t, i) {
          for (var s = -1, f = e.criteria, m = t.criteria, _ = f.length, T = i.length; ++s < _; ) {
            var M = sl(f[s], m[s]);
            if (M) {
              if (s >= T)
                return M;
              var F = i[s];
              return M * (F == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function ul(e, t, i, s) {
          for (var f = -1, m = e.length, _ = i.length, T = -1, M = t.length, F = ft(m - _, 0), N = R(M + F), U = !s; ++T < M; )
            N[T] = t[T];
          for (; ++f < _; )
            (U || f < m) && (N[i[f]] = e[f]);
          for (; F--; )
            N[T++] = e[f++];
          return N;
        }
        function ll(e, t, i, s) {
          for (var f = -1, m = e.length, _ = -1, T = i.length, M = -1, F = t.length, N = ft(m - T, 0), U = R(N + F), K = !s; ++f < N; )
            U[f] = e[f];
          for (var te = f; ++M < F; )
            U[te + M] = t[M];
          for (; ++_ < T; )
            (K || f < m) && (U[te + i[_]] = e[f++]);
          return U;
        }
        function Nt(e, t) {
          var i = -1, s = e.length;
          for (t || (t = R(s)); ++i < s; )
            t[i] = e[i];
          return t;
        }
        function Cn(e, t, i, s) {
          var f = !i;
          i || (i = {});
          for (var m = -1, _ = t.length; ++m < _; ) {
            var T = t[m], M = s ? s(i[T], e[T], T, i, e) : l;
            M === l && (M = e[T]), f ? Un(i, T, M) : Fi(i, T, M);
          }
          return i;
        }
        function xh(e, t) {
          return Cn(e, Cs(e), t);
        }
        function wh(e, t) {
          return Cn(e, _l(e), t);
        }
        function ta(e, t) {
          return function(i, s) {
            var f = _e(i) ? Ya : qd, m = t ? t() : {};
            return f(i, e, fe(s, 2), m);
          };
        }
        function Vr(e) {
          return Ae(function(t, i) {
            var s = -1, f = i.length, m = f > 1 ? i[f - 1] : l, _ = f > 2 ? i[2] : l;
            for (m = e.length > 3 && typeof m == "function" ? (f--, m) : l, _ && Dt(i[0], i[1], _) && (m = f < 3 ? l : m, f = 1), t = Te(t); ++s < f; ) {
              var T = i[s];
              T && e(t, T, s, m);
            }
            return t;
          });
        }
        function cl(e, t) {
          return function(i, s) {
            if (i == null)
              return i;
            if (!Bt(i))
              return e(i, s);
            for (var f = i.length, m = t ? f : -1, _ = Te(i); (t ? m-- : ++m < f) && s(_[m], m, _) !== !1; )
              ;
            return i;
          };
        }
        function fl(e) {
          return function(t, i, s) {
            for (var f = -1, m = Te(t), _ = s(t), T = _.length; T--; ) {
              var M = _[e ? T : ++f];
              if (i(m[M], M, m) === !1)
                break;
            }
            return t;
          };
        }
        function _h(e, t, i) {
          var s = t & De, f = Hi(e);
          function m() {
            var _ = this && this !== ct && this instanceof m ? f : e;
            return _.apply(s ? i : this, arguments);
          }
          return m;
        }
        function dl(e) {
          return function(t) {
            t = He(t);
            var i = Jn(t) ? x(t) : l, s = i ? i[0] : t.charAt(0), f = i ? rr(i, 1).join("") : t.slice(1);
            return s[e]() + f;
          };
        }
        function Zr(e) {
          return function(t) {
            return Hr(cc(lc(t).replace(Ha, "")), e, "");
          };
        }
        function Hi(e) {
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return new e();
              case 1:
                return new e(t[0]);
              case 2:
                return new e(t[0], t[1]);
              case 3:
                return new e(t[0], t[1], t[2]);
              case 4:
                return new e(t[0], t[1], t[2], t[3]);
              case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);
              case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
              case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
            }
            var i = Kr(e.prototype), s = e.apply(i, t);
            return tt(s) ? s : i;
          };
        }
        function Sh(e, t, i) {
          var s = Hi(e);
          function f() {
            for (var m = arguments.length, _ = R(m), T = m, M = jr(f); T--; )
              _[T] = arguments[T];
            var F = m < 3 && _[0] !== M && _[m - 1] !== M ? [] : u(_, M);
            if (m -= F.length, m < i)
              return ml(
                e,
                t,
                na,
                f.placeholder,
                l,
                _,
                F,
                l,
                l,
                i - m
              );
            var N = this && this !== ct && this instanceof f ? s : e;
            return Mt(N, this, _);
          }
          return f;
        }
        function hl(e) {
          return function(t, i, s) {
            var f = Te(t);
            if (!Bt(t)) {
              var m = fe(i, 3);
              t = gt(t), i = function(T) {
                return m(f[T], T, f);
              };
            }
            var _ = e(t, i, s);
            return _ > -1 ? f[m ? t[_] : _] : l;
          };
        }
        function pl(e) {
          return qn(function(t) {
            var i = t.length, s = i, f = un.prototype.thru;
            for (e && t.reverse(); s--; ) {
              var m = t[s];
              if (typeof m != "function")
                throw new wt(B);
              if (f && !_ && aa(m) == "wrapper")
                var _ = new un([], !0);
            }
            for (s = _ ? s : i; ++s < i; ) {
              m = t[s];
              var T = aa(m), M = T == "wrapper" ? Ms(m) : l;
              M && zs(M[0]) && M[1] == (D | Se | Ee | ue) && !M[4].length && M[9] == 1 ? _ = _[aa(M[0])].apply(_, M[3]) : _ = m.length == 1 && zs(m) ? _[T]() : _.thru(m);
            }
            return function() {
              var F = arguments, N = F[0];
              if (_ && F.length == 1 && _e(N))
                return _.plant(N).value();
              for (var U = 0, K = i ? t[U].apply(this, F) : N; ++U < i; )
                K = t[U].call(this, K);
              return K;
            };
          });
        }
        function na(e, t, i, s, f, m, _, T, M, F) {
          var N = t & D, U = t & De, K = t & qe, te = t & (Se | Ce), de = t & $e, Ie = K ? l : Hi(e);
          function he() {
            for (var Pe = arguments.length, ke = R(Pe), jt = Pe; jt--; )
              ke[jt] = arguments[jt];
            if (te)
              var zt = jr(he), Jt = Qa(ke, zt);
            if (s && (ke = ul(ke, s, f, te)), m && (ke = ll(ke, m, _, te)), Pe -= Jt, te && Pe < F) {
              var ot = u(ke, zt);
              return ml(
                e,
                t,
                na,
                he.placeholder,
                i,
                ke,
                ot,
                T,
                M,
                F - Pe
              );
            }
            var _n = U ? i : this, Yn = K ? _n[e] : e;
            return Pe = ke.length, T ? ke = qh(ke, T) : de && Pe > 1 && ke.reverse(), N && M < Pe && (ke.length = M), this && this !== ct && this instanceof he && (Yn = Ie || Hi(Yn)), Yn.apply(_n, ke);
          }
          return he;
        }
        function gl(e, t) {
          return function(i, s) {
            return jd(i, e, t(s), {});
          };
        }
        function ra(e, t) {
          return function(i, s) {
            var f;
            if (i === l && s === l)
              return t;
            if (i !== l && (f = i), s !== l) {
              if (f === l)
                return s;
              typeof i == "string" || typeof s == "string" ? (i = Vt(i), s = Vt(s)) : (i = el(i), s = el(s)), f = e(i, s);
            }
            return f;
          };
        }
        function Ts(e) {
          return qn(function(t) {
            return t = Ze(t, xt(fe())), Ae(function(i) {
              var s = this;
              return e(t, function(f) {
                return Mt(f, s, i);
              });
            });
          });
        }
        function ia(e, t) {
          t = t === l ? " " : Vt(t);
          var i = t.length;
          if (i < 2)
            return i ? ys(t, e) : t;
          var s = ys(t, Go(e / S(t)));
          return Jn(t) ? rr(x(s), 0, e).join("") : s.slice(0, e);
        }
        function Eh(e, t, i, s) {
          var f = t & De, m = Hi(e);
          function _() {
            for (var T = -1, M = arguments.length, F = -1, N = s.length, U = R(N + M), K = this && this !== ct && this instanceof _ ? m : e; ++F < N; )
              U[F] = s[F];
            for (; M--; )
              U[F++] = arguments[++T];
            return Mt(K, f ? i : this, U);
          }
          return _;
        }
        function vl(e) {
          return function(t, i, s) {
            return s && typeof s != "number" && Dt(t, i, s) && (i = s = l), t = $n(t), i === l ? (i = t, t = 0) : i = $n(i), s = s === l ? t < i ? 1 : -1 : $n(s), lh(t, i, s, e);
          };
        }
        function oa(e) {
          return function(t, i) {
            return typeof t == "string" && typeof i == "string" || (t = dn(t), i = dn(i)), e(t, i);
          };
        }
        function ml(e, t, i, s, f, m, _, T, M, F) {
          var N = t & Se, U = N ? _ : l, K = N ? l : _, te = N ? m : l, de = N ? l : m;
          t |= N ? Ee : we, t &= ~(N ? we : Ee), t & ze || (t &= -4);
          var Ie = [
            e,
            t,
            f,
            te,
            U,
            de,
            K,
            T,
            M,
            F
          ], he = i.apply(l, Ie);
          return zs(e) && Ml(he, Ie), he.placeholder = s, Al(he, e, t);
        }
        function Os(e) {
          var t = xe[e];
          return function(i, s) {
            if (i = dn(i), s = s == null ? 0 : St(Oe(s), 292), s && Au(i)) {
              var f = (He(i) + "e").split("e"), m = t(f[0] + "e" + (+f[1] + s));
              return f = (He(m) + "e").split("e"), +(f[0] + "e" + (+f[1] - s));
            }
            return t(i);
          };
        }
        var Th = $r && 1 / c(new $r([, -0]))[1] == ae ? function(e) {
          return new $r(e);
        } : Ks;
        function yl(e) {
          return function(t) {
            var i = Et(t);
            return i == rt ? o(t) : i == G ? d(t) : Rn(t, e(t));
          };
        }
        function Hn(e, t, i, s, f, m, _, T) {
          var M = t & qe;
          if (!M && typeof e != "function")
            throw new wt(B);
          var F = s ? s.length : 0;
          if (F || (t &= -97, s = f = l), _ = _ === l ? _ : ft(Oe(_), 0), T = T === l ? T : Oe(T), F -= f ? f.length : 0, t & we) {
            var N = s, U = f;
            s = f = l;
          }
          var K = M ? l : Ms(e), te = [
            e,
            t,
            i,
            s,
            f,
            N,
            U,
            m,
            _,
            T
          ];
          if (K && Wh(te, K), e = te[0], t = te[1], i = te[2], s = te[3], f = te[4], T = te[9] = te[9] === l ? M ? 0 : e.length : ft(te[9] - F, 0), !T && t & (Se | Ce) && (t &= -25), !t || t == De)
            var de = _h(e, t, i);
          else t == Se || t == Ce ? de = Sh(e, t, T) : (t == Ee || t == (De | Ee)) && !f.length ? de = Eh(e, t, i, s) : de = na.apply(l, te);
          var Ie = K ? Ju : Ml;
          return Al(Ie(de, te), e, t);
        }
        function bl(e, t, i, s) {
          return e === l || wn(e, Xr[i]) && !Xe.call(s, i) ? t : e;
        }
        function xl(e, t, i, s, f, m) {
          return tt(e) && tt(t) && (m.set(t, e), Jo(e, t, l, xl, m), m.delete(t)), e;
        }
        function Oh(e) {
          return Xi(e) ? l : e;
        }
        function wl(e, t, i, s, f, m) {
          var _ = i & Re, T = e.length, M = t.length;
          if (T != M && !(_ && M > T))
            return !1;
          var F = m.get(e), N = m.get(t);
          if (F && N)
            return F == t && N == e;
          var U = -1, K = !0, te = i & Ve ? new wr() : l;
          for (m.set(e, t), m.set(t, e); ++U < T; ) {
            var de = e[U], Ie = t[U];
            if (s)
              var he = _ ? s(Ie, de, U, t, e, m) : s(de, Ie, U, e, t, m);
            if (he !== l) {
              if (he)
                continue;
              K = !1;
              break;
            }
            if (te) {
              if (!Fn(t, function(Pe, ke) {
                if (!yr(te, ke) && (de === Pe || f(de, Pe, i, s, m)))
                  return te.push(ke);
              })) {
                K = !1;
                break;
              }
            } else if (!(de === Ie || f(de, Ie, i, s, m))) {
              K = !1;
              break;
            }
          }
          return m.delete(e), m.delete(t), K;
        }
        function Ih(e, t, i, s, f, m, _) {
          switch (i) {
            case se:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case ce:
              return !(e.byteLength != t.byteLength || !m(new Wo(e), new Wo(t)));
            case Xt:
            case J:
            case Ot:
              return wn(+e, +t);
            case Tt:
              return e.name == t.name && e.message == t.message;
            case It:
            case Q:
              return e == t + "";
            case rt:
              var T = o;
            case G:
              var M = s & Re;
              if (T || (T = c), e.size != t.size && !M)
                return !1;
              var F = _.get(e);
              if (F)
                return F == t;
              s |= Ve, _.set(e, t);
              var N = wl(T(e), T(t), s, f, m, _);
              return _.delete(e), N;
            case z:
              if (ki)
                return ki.call(e) == ki.call(t);
          }
          return !1;
        }
        function Rh(e, t, i, s, f, m) {
          var _ = i & Re, T = Is(e), M = T.length, F = Is(t), N = F.length;
          if (M != N && !_)
            return !1;
          for (var U = M; U--; ) {
            var K = T[U];
            if (!(_ ? K in t : Xe.call(t, K)))
              return !1;
          }
          var te = m.get(e), de = m.get(t);
          if (te && de)
            return te == t && de == e;
          var Ie = !0;
          m.set(e, t), m.set(t, e);
          for (var he = _; ++U < M; ) {
            K = T[U];
            var Pe = e[K], ke = t[K];
            if (s)
              var jt = _ ? s(ke, Pe, K, t, e, m) : s(Pe, ke, K, e, t, m);
            if (!(jt === l ? Pe === ke || f(Pe, ke, i, s, m) : jt)) {
              Ie = !1;
              break;
            }
            he || (he = K == "constructor");
          }
          if (Ie && !he) {
            var zt = e.constructor, Jt = t.constructor;
            zt != Jt && "constructor" in e && "constructor" in t && !(typeof zt == "function" && zt instanceof zt && typeof Jt == "function" && Jt instanceof Jt) && (Ie = !1);
          }
          return m.delete(e), m.delete(t), Ie;
        }
        function qn(e) {
          return Ls(Il(e, l, kl), e + "");
        }
        function Is(e) {
          return Uu(e, gt, Cs);
        }
        function Rs(e) {
          return Uu(e, Wt, _l);
        }
        var Ms = $o ? function(e) {
          return $o.get(e);
        } : Ks;
        function aa(e) {
          for (var t = e.name + "", i = Yr[t], s = Xe.call(Yr, t) ? i.length : 0; s--; ) {
            var f = i[s], m = f.func;
            if (m == null || m == e)
              return f.name;
          }
          return t;
        }
        function jr(e) {
          var t = Xe.call(g, "placeholder") ? g : e;
          return t.placeholder;
        }
        function fe() {
          var e = g.iteratee || $s;
          return e = e === $s ? Gu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function sa(e, t) {
          var i = e.__data__;
          return kh(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
        }
        function As(e) {
          for (var t = gt(e), i = t.length; i--; ) {
            var s = t[i], f = e[s];
            t[i] = [s, f, Tl(f)];
          }
          return t;
        }
        function Er(e, t) {
          var i = rs(e, t);
          return qu(i) ? i : l;
        }
        function Mh(e) {
          var t = Xe.call(e, br), i = e[br];
          try {
            e[br] = l;
            var s = !0;
          } catch {
          }
          var f = No.call(e);
          return s && (t ? e[br] = i : delete e[br]), f;
        }
        var Cs = is ? function(e) {
          return e == null ? [] : (e = Te(e), Kt(is(e), function(t) {
            return Ru.call(e, t);
          }));
        } : Vs, _l = is ? function(e) {
          for (var t = []; e; )
            yn(t, Cs(e)), e = Uo(e);
          return t;
        } : Vs, Et = Ct;
        (os && Et(new os(new ArrayBuffer(1))) != se || zi && Et(new zi()) != rt || as && Et(as.resolve()) != Yt || $r && Et(new $r()) != G || Pi && Et(new Pi()) != le) && (Et = function(e) {
          var t = Ct(e), i = t == yt ? e.constructor : l, s = i ? Tr(i) : "";
          if (s)
            switch (s) {
              case fd:
                return se;
              case dd:
                return rt;
              case hd:
                return Yt;
              case pd:
                return G;
              case gd:
                return le;
            }
          return t;
        });
        function Ah(e, t, i) {
          for (var s = -1, f = i.length; ++s < f; ) {
            var m = i[s], _ = m.size;
            switch (m.type) {
              case "drop":
                e += _;
                break;
              case "dropRight":
                t -= _;
                break;
              case "take":
                t = St(t, e + _);
                break;
              case "takeRight":
                e = ft(e, t - _);
                break;
            }
          }
          return { start: e, end: t };
        }
        function Ch(e) {
          var t = e.match(mn);
          return t ? t[1].split(Ma) : [];
        }
        function Sl(e, t, i) {
          t = nr(t, e);
          for (var s = -1, f = t.length, m = !1; ++s < f; ) {
            var _ = Dn(t[s]);
            if (!(m = e != null && i(e, _)))
              break;
            e = e[_];
          }
          return m || ++s != f ? m : (f = e == null ? 0 : e.length, !!f && pa(f) && Gn(_, f) && (_e(e) || Or(e)));
        }
        function Dh(e) {
          var t = e.length, i = new e.constructor(t);
          return t && typeof e[0] == "string" && Xe.call(e, "index") && (i.index = e.index, i.input = e.input), i;
        }
        function El(e) {
          return typeof e.constructor == "function" && !qi(e) ? Kr(Uo(e)) : {};
        }
        function zh(e, t, i) {
          var s = e.constructor;
          switch (t) {
            case ce:
              return Es(e);
            case Xt:
            case J:
              return new s(+e);
            case se:
              return vh(e, i);
            case oe:
            case et:
            case lt:
            case bt:
            case tn:
            case nn:
            case rn:
            case En:
            case Tn:
              return al(e, i);
            case rt:
              return new s();
            case Ot:
            case Q:
              return new s(e);
            case It:
              return mh(e);
            case G:
              return new s();
            case z:
              return yh(e);
          }
        }
        function Ph(e, t) {
          var i = t.length;
          if (!i)
            return e;
          var s = i - 1;
          return t[s] = (i > 1 ? "& " : "") + t[s], t = t.join(i > 2 ? ", " : " "), e.replace(Ln, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Lh(e) {
          return _e(e) || Or(e) || !!(Mu && e && e[Mu]);
        }
        function Gn(e, t) {
          var i = typeof e;
          return t = t ?? We, !!t && (i == "number" || i != "symbol" && gi.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function Dt(e, t, i) {
          if (!tt(i))
            return !1;
          var s = typeof t;
          return (s == "number" ? Bt(i) && Gn(t, i.length) : s == "string" && t in i) ? wn(i[t], e) : !1;
        }
        function Ds(e, t) {
          if (_e(e))
            return !1;
          var i = typeof e;
          return i == "number" || i == "symbol" || i == "boolean" || e == null || Zt(e) ? !0 : fi.test(e) || !Ia.test(e) || t != null && e in Te(t);
        }
        function kh(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function zs(e) {
          var t = aa(e), i = g[t];
          if (typeof i != "function" || !(t in Le.prototype))
            return !1;
          if (e === i)
            return !0;
          var s = Ms(i);
          return !!s && e === s[0];
        }
        function Fh(e) {
          return !!Tu && Tu in e;
        }
        var Nh = ko ? Xn : Zs;
        function qi(e) {
          var t = e && e.constructor, i = typeof t == "function" && t.prototype || Xr;
          return e === i;
        }
        function Tl(e) {
          return e === e && !tt(e);
        }
        function Ol(e, t) {
          return function(i) {
            return i == null ? !1 : i[e] === t && (t !== l || e in Te(i));
          };
        }
        function Bh(e) {
          var t = da(e, function(s) {
            return i.size === V && i.clear(), s;
          }), i = t.cache;
          return t;
        }
        function Wh(e, t) {
          var i = e[1], s = t[1], f = i | s, m = f < (De | qe | D), _ = s == D && i == Se || s == D && i == ue && e[7].length <= t[8] || s == (D | ue) && t[7].length <= t[8] && i == Se;
          if (!(m || _))
            return e;
          s & De && (e[2] = t[2], f |= i & De ? 0 : ze);
          var T = t[3];
          if (T) {
            var M = e[3];
            e[3] = M ? ul(M, T, t[4]) : T, e[4] = M ? u(e[3], ge) : t[4];
          }
          return T = t[5], T && (M = e[5], e[5] = M ? ll(M, T, t[6]) : T, e[6] = M ? u(e[5], ge) : t[6]), T = t[7], T && (e[7] = T), s & D && (e[8] = e[8] == null ? t[8] : St(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = f, e;
        }
        function Uh(e) {
          var t = [];
          if (e != null)
            for (var i in Te(e))
              t.push(i);
          return t;
        }
        function Hh(e) {
          return No.call(e);
        }
        function Il(e, t, i) {
          return t = ft(t === l ? e.length - 1 : t, 0), function() {
            for (var s = arguments, f = -1, m = ft(s.length - t, 0), _ = R(m); ++f < m; )
              _[f] = s[t + f];
            f = -1;
            for (var T = R(t + 1); ++f < t; )
              T[f] = s[f];
            return T[t] = i(_), Mt(e, this, T);
          };
        }
        function Rl(e, t) {
          return t.length < 2 ? e : Sr(e, cn(t, 0, -1));
        }
        function qh(e, t) {
          for (var i = e.length, s = St(t.length, i), f = Nt(e); s--; ) {
            var m = t[s];
            e[s] = Gn(m, i) ? f[m] : l;
          }
          return e;
        }
        function Ps(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var Ml = Cl(Ju), Gi = id || function(e, t) {
          return ct.setTimeout(e, t);
        }, Ls = Cl(dh);
        function Al(e, t, i) {
          var s = t + "";
          return Ls(e, Ph(s, Gh(Ch(s), i)));
        }
        function Cl(e) {
          var t = 0, i = 0;
          return function() {
            var s = ud(), f = ne - (s - i);
            if (i = s, f > 0) {
              if (++t >= ie)
                return arguments[0];
            } else
              t = 0;
            return e.apply(l, arguments);
          };
        }
        function ua(e, t) {
          var i = -1, s = e.length, f = s - 1;
          for (t = t === l ? s : t; ++i < t; ) {
            var m = ms(i, f), _ = e[m];
            e[m] = e[i], e[i] = _;
          }
          return e.length = t, e;
        }
        var Dl = Bh(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(di, function(i, s, f, m) {
            t.push(f ? m.replace(On, "$1") : s || i);
          }), t;
        });
        function Dn(e) {
          if (typeof e == "string" || Zt(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -ae ? "-0" : t;
        }
        function Tr(e) {
          if (e != null) {
            try {
              return Fo.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function Gh(e, t) {
          return Ft(Sn, function(i) {
            var s = "_." + i[0];
            t & i[1] && !sn(e, s) && e.push(s);
          }), e.sort();
        }
        function zl(e) {
          if (e instanceof Le)
            return e.clone();
          var t = new un(e.__wrapped__, e.__chain__);
          return t.__actions__ = Nt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function Xh(e, t, i) {
          (i ? Dt(e, t, i) : t === l) ? t = 1 : t = ft(Oe(t), 0);
          var s = e == null ? 0 : e.length;
          if (!s || t < 1)
            return [];
          for (var f = 0, m = 0, _ = R(Go(s / t)); f < s; )
            _[m++] = cn(e, f, f += t);
          return _;
        }
        function $h(e) {
          for (var t = -1, i = e == null ? 0 : e.length, s = 0, f = []; ++t < i; ) {
            var m = e[t];
            m && (f[s++] = m);
          }
          return f;
        }
        function Yh() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = R(e - 1), i = arguments[0], s = e; s--; )
            t[s - 1] = arguments[s];
          return yn(_e(i) ? Nt(i) : [i], _t(t, 1));
        }
        var Kh = Ae(function(e, t) {
          return it(e) ? Ni(e, _t(t, 1, it, !0)) : [];
        }), Vh = Ae(function(e, t) {
          var i = fn(t);
          return it(i) && (i = l), it(e) ? Ni(e, _t(t, 1, it, !0), fe(i, 2)) : [];
        }), Zh = Ae(function(e, t) {
          var i = fn(t);
          return it(i) && (i = l), it(e) ? Ni(e, _t(t, 1, it, !0), l, i) : [];
        });
        function jh(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Oe(t), cn(e, t < 0 ? 0 : t, s)) : [];
        }
        function Jh(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Oe(t), t = s - t, cn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Qh(e, t) {
          return e && e.length ? ea(e, fe(t, 3), !0, !0) : [];
        }
        function ep(e, t) {
          return e && e.length ? ea(e, fe(t, 3), !0) : [];
        }
        function tp(e, t, i, s) {
          var f = e == null ? 0 : e.length;
          return f ? (i && typeof i != "number" && Dt(e, t, i) && (i = 0, s = f), Yd(e, t, i, s)) : [];
        }
        function Pl(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Oe(i);
          return f < 0 && (f = ft(s + f, 0)), qr(e, fe(t, 3), f);
        }
        function Ll(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s - 1;
          return i !== l && (f = Oe(i), f = i < 0 ? ft(s + f, 0) : St(f, s - 1)), qr(e, fe(t, 3), f, !0);
        }
        function kl(e) {
          var t = e == null ? 0 : e.length;
          return t ? _t(e, 1) : [];
        }
        function np(e) {
          var t = e == null ? 0 : e.length;
          return t ? _t(e, ae) : [];
        }
        function rp(e, t) {
          var i = e == null ? 0 : e.length;
          return i ? (t = t === l ? 1 : Oe(t), _t(e, t)) : [];
        }
        function ip(e) {
          for (var t = -1, i = e == null ? 0 : e.length, s = {}; ++t < i; ) {
            var f = e[t];
            s[f[0]] = f[1];
          }
          return s;
        }
        function Fl(e) {
          return e && e.length ? e[0] : l;
        }
        function op(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Oe(i);
          return f < 0 && (f = ft(s + f, 0)), jn(e, t, f);
        }
        function ap(e) {
          var t = e == null ? 0 : e.length;
          return t ? cn(e, 0, -1) : [];
        }
        var sp = Ae(function(e) {
          var t = Ze(e, _s);
          return t.length && t[0] === e[0] ? ds(t) : [];
        }), up = Ae(function(e) {
          var t = fn(e), i = Ze(e, _s);
          return t === fn(i) ? t = l : i.pop(), i.length && i[0] === e[0] ? ds(i, fe(t, 2)) : [];
        }), lp = Ae(function(e) {
          var t = fn(e), i = Ze(e, _s);
          return t = typeof t == "function" ? t : l, t && i.pop(), i.length && i[0] === e[0] ? ds(i, l, t) : [];
        });
        function cp(e, t) {
          return e == null ? "" : ad.call(e, t);
        }
        function fn(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : l;
        }
        function fp(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s;
          return i !== l && (f = Oe(i), f = f < 0 ? ft(s + f, 0) : St(f, s - 1)), t === t ? b(e, t, f) : qr(e, Do, f, !0);
        }
        function dp(e, t) {
          return e && e.length ? Ku(e, Oe(t)) : l;
        }
        var hp = Ae(Nl);
        function Nl(e, t) {
          return e && e.length && t && t.length ? vs(e, t) : e;
        }
        function pp(e, t, i) {
          return e && e.length && t && t.length ? vs(e, t, fe(i, 2)) : e;
        }
        function gp(e, t, i) {
          return e && e.length && t && t.length ? vs(e, t, l, i) : e;
        }
        var vp = qn(function(e, t) {
          var i = e == null ? 0 : e.length, s = us(e, t);
          return ju(e, Ze(t, function(f) {
            return Gn(f, i) ? +f : f;
          }).sort(sl)), s;
        });
        function mp(e, t) {
          var i = [];
          if (!(e && e.length))
            return i;
          var s = -1, f = [], m = e.length;
          for (t = fe(t, 3); ++s < m; ) {
            var _ = e[s];
            t(_, s, e) && (i.push(_), f.push(s));
          }
          return ju(e, f), i;
        }
        function ks(e) {
          return e == null ? e : cd.call(e);
        }
        function yp(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (i && typeof i != "number" && Dt(e, t, i) ? (t = 0, i = s) : (t = t == null ? 0 : Oe(t), i = i === l ? s : Oe(i)), cn(e, t, i)) : [];
        }
        function bp(e, t) {
          return Qo(e, t);
        }
        function xp(e, t, i) {
          return bs(e, t, fe(i, 2));
        }
        function wp(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = Qo(e, t);
            if (s < i && wn(e[s], t))
              return s;
          }
          return -1;
        }
        function _p(e, t) {
          return Qo(e, t, !0);
        }
        function Sp(e, t, i) {
          return bs(e, t, fe(i, 2), !0);
        }
        function Ep(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = Qo(e, t, !0) - 1;
            if (wn(e[s], t))
              return s;
          }
          return -1;
        }
        function Tp(e) {
          return e && e.length ? Qu(e) : [];
        }
        function Op(e, t) {
          return e && e.length ? Qu(e, fe(t, 2)) : [];
        }
        function Ip(e) {
          var t = e == null ? 0 : e.length;
          return t ? cn(e, 1, t) : [];
        }
        function Rp(e, t, i) {
          return e && e.length ? (t = i || t === l ? 1 : Oe(t), cn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Mp(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Oe(t), t = s - t, cn(e, t < 0 ? 0 : t, s)) : [];
        }
        function Ap(e, t) {
          return e && e.length ? ea(e, fe(t, 3), !1, !0) : [];
        }
        function Cp(e, t) {
          return e && e.length ? ea(e, fe(t, 3)) : [];
        }
        var Dp = Ae(function(e) {
          return tr(_t(e, 1, it, !0));
        }), zp = Ae(function(e) {
          var t = fn(e);
          return it(t) && (t = l), tr(_t(e, 1, it, !0), fe(t, 2));
        }), Pp = Ae(function(e) {
          var t = fn(e);
          return t = typeof t == "function" ? t : l, tr(_t(e, 1, it, !0), l, t);
        });
        function Lp(e) {
          return e && e.length ? tr(e) : [];
        }
        function kp(e, t) {
          return e && e.length ? tr(e, fe(t, 2)) : [];
        }
        function Fp(e, t) {
          return t = typeof t == "function" ? t : l, e && e.length ? tr(e, l, t) : [];
        }
        function Fs(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = Kt(e, function(i) {
            if (it(i))
              return t = ft(i.length, t), !0;
          }), Nn(t, function(i) {
            return Ze(e, Mi(i));
          });
        }
        function Bl(e, t) {
          if (!(e && e.length))
            return [];
          var i = Fs(e);
          return t == null ? i : Ze(i, function(s) {
            return Mt(t, l, s);
          });
        }
        var Np = Ae(function(e, t) {
          return it(e) ? Ni(e, t) : [];
        }), Bp = Ae(function(e) {
          return ws(Kt(e, it));
        }), Wp = Ae(function(e) {
          var t = fn(e);
          return it(t) && (t = l), ws(Kt(e, it), fe(t, 2));
        }), Up = Ae(function(e) {
          var t = fn(e);
          return t = typeof t == "function" ? t : l, ws(Kt(e, it), l, t);
        }), Hp = Ae(Fs);
        function qp(e, t) {
          return rl(e || [], t || [], Fi);
        }
        function Gp(e, t) {
          return rl(e || [], t || [], Ui);
        }
        var Xp = Ae(function(e) {
          var t = e.length, i = t > 1 ? e[t - 1] : l;
          return i = typeof i == "function" ? (e.pop(), i) : l, Bl(e, i);
        });
        function Wl(e) {
          var t = g(e);
          return t.__chain__ = !0, t;
        }
        function $p(e, t) {
          return t(e), e;
        }
        function la(e, t) {
          return t(e);
        }
        var Yp = qn(function(e) {
          var t = e.length, i = t ? e[0] : 0, s = this.__wrapped__, f = function(m) {
            return us(m, e);
          };
          return t > 1 || this.__actions__.length || !(s instanceof Le) || !Gn(i) ? this.thru(f) : (s = s.slice(i, +i + (t ? 1 : 0)), s.__actions__.push({
            func: la,
            args: [f],
            thisArg: l
          }), new un(s, this.__chain__).thru(function(m) {
            return t && !m.length && m.push(l), m;
          }));
        });
        function Kp() {
          return Wl(this);
        }
        function Vp() {
          return new un(this.value(), this.__chain__);
        }
        function Zp() {
          this.__values__ === l && (this.__values__ = ec(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? l : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function jp() {
          return this;
        }
        function Jp(e) {
          for (var t, i = this; i instanceof Ko; ) {
            var s = zl(i);
            s.__index__ = 0, s.__values__ = l, t ? f.__wrapped__ = s : t = s;
            var f = s;
            i = i.__wrapped__;
          }
          return f.__wrapped__ = e, t;
        }
        function Qp() {
          var e = this.__wrapped__;
          if (e instanceof Le) {
            var t = e;
            return this.__actions__.length && (t = new Le(this)), t = t.reverse(), t.__actions__.push({
              func: la,
              args: [ks],
              thisArg: l
            }), new un(t, this.__chain__);
          }
          return this.thru(ks);
        }
        function eg() {
          return nl(this.__wrapped__, this.__actions__);
        }
        var tg = ta(function(e, t, i) {
          Xe.call(e, i) ? ++e[i] : Un(e, i, 1);
        });
        function ng(e, t, i) {
          var s = _e(e) ? Ii : $d;
          return i && Dt(e, t, i) && (t = l), s(e, fe(t, 3));
        }
        function rg(e, t) {
          var i = _e(e) ? Kt : Bu;
          return i(e, fe(t, 3));
        }
        var ig = hl(Pl), og = hl(Ll);
        function ag(e, t) {
          return _t(ca(e, t), 1);
        }
        function sg(e, t) {
          return _t(ca(e, t), ae);
        }
        function ug(e, t, i) {
          return i = i === l ? 1 : Oe(i), _t(ca(e, t), i);
        }
        function Ul(e, t) {
          var i = _e(e) ? Ft : er;
          return i(e, fe(t, 3));
        }
        function Hl(e, t) {
          var i = _e(e) ? Ka : Nu;
          return i(e, fe(t, 3));
        }
        var lg = ta(function(e, t, i) {
          Xe.call(e, i) ? e[i].push(t) : Un(e, i, [t]);
        });
        function cg(e, t, i, s) {
          e = Bt(e) ? e : Qr(e), i = i && !s ? Oe(i) : 0;
          var f = e.length;
          return i < 0 && (i = ft(f + i, 0)), ga(e) ? i <= f && e.indexOf(t, i) > -1 : !!f && jn(e, t, i) > -1;
        }
        var fg = Ae(function(e, t, i) {
          var s = -1, f = typeof t == "function", m = Bt(e) ? R(e.length) : [];
          return er(e, function(_) {
            m[++s] = f ? Mt(t, _, i) : Bi(_, t, i);
          }), m;
        }), dg = ta(function(e, t, i) {
          Un(e, i, t);
        });
        function ca(e, t) {
          var i = _e(e) ? Ze : Xu;
          return i(e, fe(t, 3));
        }
        function hg(e, t, i, s) {
          return e == null ? [] : (_e(t) || (t = t == null ? [] : [t]), i = s ? l : i, _e(i) || (i = i == null ? [] : [i]), Vu(e, t, i));
        }
        var pg = ta(function(e, t, i) {
          e[i ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function gg(e, t, i) {
          var s = _e(e) ? Hr : zo, f = arguments.length < 3;
          return s(e, fe(t, 4), i, f, er);
        }
        function vg(e, t, i) {
          var s = _e(e) ? Ao : zo, f = arguments.length < 3;
          return s(e, fe(t, 4), i, f, Nu);
        }
        function mg(e, t) {
          var i = _e(e) ? Kt : Bu;
          return i(e, ha(fe(t, 3)));
        }
        function yg(e) {
          var t = _e(e) ? Pu : ch;
          return t(e);
        }
        function bg(e, t, i) {
          (i ? Dt(e, t, i) : t === l) ? t = 1 : t = Oe(t);
          var s = _e(e) ? Ud : fh;
          return s(e, t);
        }
        function xg(e) {
          var t = _e(e) ? Hd : hh;
          return t(e);
        }
        function wg(e) {
          if (e == null)
            return 0;
          if (Bt(e))
            return ga(e) ? S(e) : e.length;
          var t = Et(e);
          return t == rt || t == G ? e.size : ps(e).length;
        }
        function _g(e, t, i) {
          var s = _e(e) ? Fn : ph;
          return i && Dt(e, t, i) && (t = l), s(e, fe(t, 3));
        }
        var Sg = Ae(function(e, t) {
          if (e == null)
            return [];
          var i = t.length;
          return i > 1 && Dt(e, t[0], t[1]) ? t = [] : i > 2 && Dt(t[0], t[1], t[2]) && (t = [t[0]]), Vu(e, _t(t, 1), []);
        }), fa = rd || function() {
          return ct.Date.now();
        };
        function Eg(e, t) {
          if (typeof t != "function")
            throw new wt(B);
          return e = Oe(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function ql(e, t, i) {
          return t = i ? l : t, t = e && t == null ? e.length : t, Hn(e, D, l, l, l, l, t);
        }
        function Gl(e, t) {
          var i;
          if (typeof t != "function")
            throw new wt(B);
          return e = Oe(e), function() {
            return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = l), i;
          };
        }
        var Ns = Ae(function(e, t, i) {
          var s = De;
          if (i.length) {
            var f = u(i, jr(Ns));
            s |= Ee;
          }
          return Hn(e, s, t, i, f);
        }), Xl = Ae(function(e, t, i) {
          var s = De | qe;
          if (i.length) {
            var f = u(i, jr(Xl));
            s |= Ee;
          }
          return Hn(t, s, e, i, f);
        });
        function $l(e, t, i) {
          t = i ? l : t;
          var s = Hn(e, Se, l, l, l, l, l, t);
          return s.placeholder = $l.placeholder, s;
        }
        function Yl(e, t, i) {
          t = i ? l : t;
          var s = Hn(e, Ce, l, l, l, l, l, t);
          return s.placeholder = Yl.placeholder, s;
        }
        function Kl(e, t, i) {
          var s, f, m, _, T, M, F = 0, N = !1, U = !1, K = !0;
          if (typeof e != "function")
            throw new wt(B);
          t = dn(t) || 0, tt(i) && (N = !!i.leading, U = "maxWait" in i, m = U ? ft(dn(i.maxWait) || 0, t) : m, K = "trailing" in i ? !!i.trailing : K);
          function te(ot) {
            var _n = s, Yn = f;
            return s = f = l, F = ot, _ = e.apply(Yn, _n), _;
          }
          function de(ot) {
            return F = ot, T = Gi(Pe, t), N ? te(ot) : _;
          }
          function Ie(ot) {
            var _n = ot - M, Yn = ot - F, hc = t - _n;
            return U ? St(hc, m - Yn) : hc;
          }
          function he(ot) {
            var _n = ot - M, Yn = ot - F;
            return M === l || _n >= t || _n < 0 || U && Yn >= m;
          }
          function Pe() {
            var ot = fa();
            if (he(ot))
              return ke(ot);
            T = Gi(Pe, Ie(ot));
          }
          function ke(ot) {
            return T = l, K && s ? te(ot) : (s = f = l, _);
          }
          function jt() {
            T !== l && il(T), F = 0, s = M = f = T = l;
          }
          function zt() {
            return T === l ? _ : ke(fa());
          }
          function Jt() {
            var ot = fa(), _n = he(ot);
            if (s = arguments, f = this, M = ot, _n) {
              if (T === l)
                return de(M);
              if (U)
                return il(T), T = Gi(Pe, t), te(M);
            }
            return T === l && (T = Gi(Pe, t)), _;
          }
          return Jt.cancel = jt, Jt.flush = zt, Jt;
        }
        var Tg = Ae(function(e, t) {
          return Fu(e, 1, t);
        }), Og = Ae(function(e, t, i) {
          return Fu(e, dn(t) || 0, i);
        });
        function Ig(e) {
          return Hn(e, $e);
        }
        function da(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new wt(B);
          var i = function() {
            var s = arguments, f = t ? t.apply(this, s) : s[0], m = i.cache;
            if (m.has(f))
              return m.get(f);
            var _ = e.apply(this, s);
            return i.cache = m.set(f, _) || m, _;
          };
          return i.cache = new (da.Cache || Wn)(), i;
        }
        da.Cache = Wn;
        function ha(e) {
          if (typeof e != "function")
            throw new wt(B);
          return function() {
            var t = arguments;
            switch (t.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, t[0]);
              case 2:
                return !e.call(this, t[0], t[1]);
              case 3:
                return !e.call(this, t[0], t[1], t[2]);
            }
            return !e.apply(this, t);
          };
        }
        function Rg(e) {
          return Gl(2, e);
        }
        var Mg = gh(function(e, t) {
          t = t.length == 1 && _e(t[0]) ? Ze(t[0], xt(fe())) : Ze(_t(t, 1), xt(fe()));
          var i = t.length;
          return Ae(function(s) {
            for (var f = -1, m = St(s.length, i); ++f < m; )
              s[f] = t[f].call(this, s[f]);
            return Mt(e, this, s);
          });
        }), Bs = Ae(function(e, t) {
          var i = u(t, jr(Bs));
          return Hn(e, Ee, l, t, i);
        }), Vl = Ae(function(e, t) {
          var i = u(t, jr(Vl));
          return Hn(e, we, l, t, i);
        }), Ag = qn(function(e, t) {
          return Hn(e, ue, l, l, l, t);
        });
        function Cg(e, t) {
          if (typeof e != "function")
            throw new wt(B);
          return t = t === l ? t : Oe(t), Ae(e, t);
        }
        function Dg(e, t) {
          if (typeof e != "function")
            throw new wt(B);
          return t = t == null ? 0 : ft(Oe(t), 0), Ae(function(i) {
            var s = i[t], f = rr(i, 0, t);
            return s && yn(f, s), Mt(e, this, f);
          });
        }
        function zg(e, t, i) {
          var s = !0, f = !0;
          if (typeof e != "function")
            throw new wt(B);
          return tt(i) && (s = "leading" in i ? !!i.leading : s, f = "trailing" in i ? !!i.trailing : f), Kl(e, t, {
            leading: s,
            maxWait: t,
            trailing: f
          });
        }
        function Pg(e) {
          return ql(e, 1);
        }
        function Lg(e, t) {
          return Bs(Ss(t), e);
        }
        function kg() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return _e(e) ? e : [e];
        }
        function Fg(e) {
          return ln(e, me);
        }
        function Ng(e, t) {
          return t = typeof t == "function" ? t : l, ln(e, me, t);
        }
        function Bg(e) {
          return ln(e, ee | me);
        }
        function Wg(e, t) {
          return t = typeof t == "function" ? t : l, ln(e, ee | me, t);
        }
        function Ug(e, t) {
          return t == null || ku(e, t, gt(t));
        }
        function wn(e, t) {
          return e === t || e !== e && t !== t;
        }
        var Hg = oa(fs), qg = oa(function(e, t) {
          return e >= t;
        }), Or = Hu(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Hu : function(e) {
          return nt(e) && Xe.call(e, "callee") && !Ru.call(e, "callee");
        }, _e = R.isArray, Gg = Oi ? xt(Oi) : Jd;
        function Bt(e) {
          return e != null && pa(e.length) && !Xn(e);
        }
        function it(e) {
          return nt(e) && Bt(e);
        }
        function Xg(e) {
          return e === !0 || e === !1 || nt(e) && Ct(e) == Xt;
        }
        var ir = od || Zs, $g = pt ? xt(pt) : Qd;
        function Yg(e) {
          return nt(e) && e.nodeType === 1 && !Xi(e);
        }
        function Kg(e) {
          if (e == null)
            return !0;
          if (Bt(e) && (_e(e) || typeof e == "string" || typeof e.splice == "function" || ir(e) || Jr(e) || Or(e)))
            return !e.length;
          var t = Et(e);
          if (t == rt || t == G)
            return !e.size;
          if (qi(e))
            return !ps(e).length;
          for (var i in e)
            if (Xe.call(e, i))
              return !1;
          return !0;
        }
        function Vg(e, t) {
          return Wi(e, t);
        }
        function Zg(e, t, i) {
          i = typeof i == "function" ? i : l;
          var s = i ? i(e, t) : l;
          return s === l ? Wi(e, t, l, i) : !!s;
        }
        function Ws(e) {
          if (!nt(e))
            return !1;
          var t = Ct(e);
          return t == Tt || t == en || typeof e.message == "string" && typeof e.name == "string" && !Xi(e);
        }
        function jg(e) {
          return typeof e == "number" && Au(e);
        }
        function Xn(e) {
          if (!tt(e))
            return !1;
          var t = Ct(e);
          return t == mt || t == pn || t == Gt || t == ar;
        }
        function Zl(e) {
          return typeof e == "number" && e == Oe(e);
        }
        function pa(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= We;
        }
        function tt(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function nt(e) {
          return e != null && typeof e == "object";
        }
        var jl = Oo ? xt(Oo) : th;
        function Jg(e, t) {
          return e === t || hs(e, t, As(t));
        }
        function Qg(e, t, i) {
          return i = typeof i == "function" ? i : l, hs(e, t, As(t), i);
        }
        function ev(e) {
          return Jl(e) && e != +e;
        }
        function tv(e) {
          if (Nh(e))
            throw new $(O);
          return qu(e);
        }
        function nv(e) {
          return e === null;
        }
        function rv(e) {
          return e == null;
        }
        function Jl(e) {
          return typeof e == "number" || nt(e) && Ct(e) == Ot;
        }
        function Xi(e) {
          if (!nt(e) || Ct(e) != yt)
            return !1;
          var t = Uo(e);
          if (t === null)
            return !0;
          var i = Xe.call(t, "constructor") && t.constructor;
          return typeof i == "function" && i instanceof i && Fo.call(i) == Qf;
        }
        var Us = Io ? xt(Io) : nh;
        function iv(e) {
          return Zl(e) && e >= -We && e <= We;
        }
        var Ql = Ro ? xt(Ro) : rh;
        function ga(e) {
          return typeof e == "string" || !_e(e) && nt(e) && Ct(e) == Q;
        }
        function Zt(e) {
          return typeof e == "symbol" || nt(e) && Ct(e) == z;
        }
        var Jr = Mo ? xt(Mo) : ih;
        function ov(e) {
          return e === l;
        }
        function av(e) {
          return nt(e) && Et(e) == le;
        }
        function sv(e) {
          return nt(e) && Ct(e) == ye;
        }
        var uv = oa(gs), lv = oa(function(e, t) {
          return e <= t;
        });
        function ec(e) {
          if (!e)
            return [];
          if (Bt(e))
            return ga(e) ? x(e) : Nt(e);
          if (Di && e[Di])
            return n(e[Di]());
          var t = Et(e), i = t == rt ? o : t == G ? c : Qr;
          return i(e);
        }
        function $n(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = dn(e), e === ae || e === -ae) {
            var t = e < 0 ? -1 : 1;
            return t * st;
          }
          return e === e ? e : 0;
        }
        function Oe(e) {
          var t = $n(e), i = t % 1;
          return t === t ? i ? t - i : t : 0;
        }
        function tc(e) {
          return e ? _r(Oe(e), 0, Me) : 0;
        }
        function dn(e) {
          if (typeof e == "number")
            return e;
          if (Zt(e))
            return Ge;
          if (tt(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = tt(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Ai(e);
          var i = Ca.test(e);
          return i || ur.test(e) ? Eo(e.slice(2), i ? 2 : 8) : oo.test(e) ? Ge : +e;
        }
        function nc(e) {
          return Cn(e, Wt(e));
        }
        function cv(e) {
          return e ? _r(Oe(e), -We, We) : e === 0 ? e : 0;
        }
        function He(e) {
          return e == null ? "" : Vt(e);
        }
        var fv = Vr(function(e, t) {
          if (qi(t) || Bt(t)) {
            Cn(t, gt(t), e);
            return;
          }
          for (var i in t)
            Xe.call(t, i) && Fi(e, i, t[i]);
        }), rc = Vr(function(e, t) {
          Cn(t, Wt(t), e);
        }), va = Vr(function(e, t, i, s) {
          Cn(t, Wt(t), e, s);
        }), dv = Vr(function(e, t, i, s) {
          Cn(t, gt(t), e, s);
        }), hv = qn(us);
        function pv(e, t) {
          var i = Kr(e);
          return t == null ? i : Lu(i, t);
        }
        var gv = Ae(function(e, t) {
          e = Te(e);
          var i = -1, s = t.length, f = s > 2 ? t[2] : l;
          for (f && Dt(t[0], t[1], f) && (s = 1); ++i < s; )
            for (var m = t[i], _ = Wt(m), T = -1, M = _.length; ++T < M; ) {
              var F = _[T], N = e[F];
              (N === l || wn(N, Xr[F]) && !Xe.call(e, F)) && (e[F] = m[F]);
            }
          return e;
        }), vv = Ae(function(e) {
          return e.push(l, xl), Mt(ic, l, e);
        });
        function mv(e, t) {
          return Co(e, fe(t, 3), An);
        }
        function yv(e, t) {
          return Co(e, fe(t, 3), cs);
        }
        function bv(e, t) {
          return e == null ? e : ls(e, fe(t, 3), Wt);
        }
        function xv(e, t) {
          return e == null ? e : Wu(e, fe(t, 3), Wt);
        }
        function wv(e, t) {
          return e && An(e, fe(t, 3));
        }
        function _v(e, t) {
          return e && cs(e, fe(t, 3));
        }
        function Sv(e) {
          return e == null ? [] : jo(e, gt(e));
        }
        function Ev(e) {
          return e == null ? [] : jo(e, Wt(e));
        }
        function Hs(e, t, i) {
          var s = e == null ? l : Sr(e, t);
          return s === l ? i : s;
        }
        function Tv(e, t) {
          return e != null && Sl(e, t, Kd);
        }
        function qs(e, t) {
          return e != null && Sl(e, t, Vd);
        }
        var Ov = gl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = No.call(t)), e[t] = i;
        }, Xs(Ut)), Iv = gl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = No.call(t)), Xe.call(e, t) ? e[t].push(i) : e[t] = [i];
        }, fe), Rv = Ae(Bi);
        function gt(e) {
          return Bt(e) ? zu(e) : ps(e);
        }
        function Wt(e) {
          return Bt(e) ? zu(e, !0) : oh(e);
        }
        function Mv(e, t) {
          var i = {};
          return t = fe(t, 3), An(e, function(s, f, m) {
            Un(i, t(s, f, m), s);
          }), i;
        }
        function Av(e, t) {
          var i = {};
          return t = fe(t, 3), An(e, function(s, f, m) {
            Un(i, f, t(s, f, m));
          }), i;
        }
        var Cv = Vr(function(e, t, i) {
          Jo(e, t, i);
        }), ic = Vr(function(e, t, i, s) {
          Jo(e, t, i, s);
        }), Dv = qn(function(e, t) {
          var i = {};
          if (e == null)
            return i;
          var s = !1;
          t = Ze(t, function(m) {
            return m = nr(m, e), s || (s = m.length > 1), m;
          }), Cn(e, Rs(e), i), s && (i = ln(i, ee | Be | me, Oh));
          for (var f = t.length; f--; )
            xs(i, t[f]);
          return i;
        });
        function zv(e, t) {
          return oc(e, ha(fe(t)));
        }
        var Pv = qn(function(e, t) {
          return e == null ? {} : sh(e, t);
        });
        function oc(e, t) {
          if (e == null)
            return {};
          var i = Ze(Rs(e), function(s) {
            return [s];
          });
          return t = fe(t), Zu(e, i, function(s, f) {
            return t(s, f[0]);
          });
        }
        function Lv(e, t, i) {
          t = nr(t, e);
          var s = -1, f = t.length;
          for (f || (f = 1, e = l); ++s < f; ) {
            var m = e == null ? l : e[Dn(t[s])];
            m === l && (s = f, m = i), e = Xn(m) ? m.call(e) : m;
          }
          return e;
        }
        function kv(e, t, i) {
          return e == null ? e : Ui(e, t, i);
        }
        function Fv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : Ui(e, t, i, s);
        }
        var ac = yl(gt), sc = yl(Wt);
        function Nv(e, t, i) {
          var s = _e(e), f = s || ir(e) || Jr(e);
          if (t = fe(t, 4), i == null) {
            var m = e && e.constructor;
            f ? i = s ? new m() : [] : tt(e) ? i = Xn(m) ? Kr(Uo(e)) : {} : i = {};
          }
          return (f ? Ft : An)(e, function(_, T, M) {
            return t(i, _, T, M);
          }), i;
        }
        function Bv(e, t) {
          return e == null ? !0 : xs(e, t);
        }
        function Wv(e, t, i) {
          return e == null ? e : tl(e, t, Ss(i));
        }
        function Uv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : tl(e, t, Ss(i), s);
        }
        function Qr(e) {
          return e == null ? [] : Ci(e, gt(e));
        }
        function Hv(e) {
          return e == null ? [] : Ci(e, Wt(e));
        }
        function qv(e, t, i) {
          return i === l && (i = t, t = l), i !== l && (i = dn(i), i = i === i ? i : 0), t !== l && (t = dn(t), t = t === t ? t : 0), _r(dn(e), t, i);
        }
        function Gv(e, t, i) {
          return t = $n(t), i === l ? (i = t, t = 0) : i = $n(i), e = dn(e), Zd(e, t, i);
        }
        function Xv(e, t, i) {
          if (i && typeof i != "boolean" && Dt(e, t, i) && (t = i = l), i === l && (typeof t == "boolean" ? (i = t, t = l) : typeof e == "boolean" && (i = e, e = l)), e === l && t === l ? (e = 0, t = 1) : (e = $n(e), t === l ? (t = e, e = 0) : t = $n(t)), e > t) {
            var s = e;
            e = t, t = s;
          }
          if (i || e % 1 || t % 1) {
            var f = Cu();
            return St(e + f * (t - e + So("1e-" + ((f + "").length - 1))), t);
          }
          return ms(e, t);
        }
        var $v = Zr(function(e, t, i) {
          return t = t.toLowerCase(), e + (i ? uc(t) : t);
        });
        function uc(e) {
          return Gs(He(e).toLowerCase());
        }
        function lc(e) {
          return e = He(e), e && e.replace(za, es).replace(bo, "");
        }
        function Yv(e, t, i) {
          e = He(e), t = Vt(t);
          var s = e.length;
          i = i === l ? s : _r(Oe(i), 0, s);
          var f = i;
          return i -= t.length, i >= 0 && e.slice(i, f) == t;
        }
        function Kv(e) {
          return e = He(e), e && ui.test(e) ? e.replace(Cr, ts) : e;
        }
        function Vv(e) {
          return e = He(e), e && Ra.test(e) ? e.replace(hi, "\\$&") : e;
        }
        var Zv = Zr(function(e, t, i) {
          return e + (i ? "-" : "") + t.toLowerCase();
        }), jv = Zr(function(e, t, i) {
          return e + (i ? " " : "") + t.toLowerCase();
        }), Jv = dl("toLowerCase");
        function Qv(e, t, i) {
          e = He(e), t = Oe(t);
          var s = t ? S(e) : 0;
          if (!t || s >= t)
            return e;
          var f = (t - s) / 2;
          return ia(Xo(f), i) + e + ia(Go(f), i);
        }
        function em(e, t, i) {
          e = He(e), t = Oe(t);
          var s = t ? S(e) : 0;
          return t && s < t ? e + ia(t - s, i) : e;
        }
        function tm(e, t, i) {
          e = He(e), t = Oe(t);
          var s = t ? S(e) : 0;
          return t && s < t ? ia(t - s, i) + e : e;
        }
        function nm(e, t, i) {
          return i || t == null ? t = 0 : t && (t = +t), ld(He(e).replace(Dr, ""), t || 0);
        }
        function rm(e, t, i) {
          return (i ? Dt(e, t, i) : t === l) ? t = 1 : t = Oe(t), ys(He(e), t);
        }
        function im() {
          var e = arguments, t = He(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var om = Zr(function(e, t, i) {
          return e + (i ? "_" : "") + t.toLowerCase();
        });
        function am(e, t, i) {
          return i && typeof i != "number" && Dt(e, t, i) && (t = i = l), i = i === l ? Me : i >>> 0, i ? (e = He(e), e && (typeof t == "string" || t != null && !Us(t)) && (t = Vt(t), !t && Jn(e)) ? rr(x(e), 0, i) : e.split(t, i)) : [];
        }
        var sm = Zr(function(e, t, i) {
          return e + (i ? " " : "") + Gs(t);
        });
        function um(e, t, i) {
          return e = He(e), i = i == null ? 0 : _r(Oe(i), 0, e.length), t = Vt(t), e.slice(i, i + t.length) == t;
        }
        function lm(e, t, i) {
          var s = g.templateSettings;
          i && Dt(e, t, i) && (t = l), e = He(e), t = va({}, t, s, bl);
          var f = va({}, t.imports, s.imports, bl), m = gt(f), _ = Ci(f, m), T, M, F = 0, N = t.interpolate || zr, U = "__p += '", K = At(
            (t.escape || zr).source + "|" + N.source + "|" + (N === ci ? pe : zr).source + "|" + (t.evaluate || zr).source + "|$",
            "g"
          ), te = "//# sourceURL=" + (Xe.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++gr + "]") + `
`;
          e.replace(K, function(he, Pe, ke, jt, zt, Jt) {
            return ke || (ke = jt), U += e.slice(F, Jt).replace(Pa, ns), Pe && (T = !0, U += `' +
__e(` + Pe + `) +
'`), zt && (M = !0, U += `';
` + zt + `;
__p += '`), ke && (U += `' +
((__t = (` + ke + `)) == null ? '' : __t) +
'`), F = Jt + he.length, he;
          }), U += `';
`;
          var de = Xe.call(t, "variable") && t.variable;
          if (!de)
            U = `with (obj) {
` + U + `
}
`;
          else if (io.test(de))
            throw new $(L);
          U = (M ? U.replace(gn, "") : U).replace(sr, "$1").replace(Kn, "$1;"), U = "function(" + (de || "obj") + `) {
` + (de ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
          var Ie = fc(function() {
            return ve(m, te + "return " + U).apply(l, _);
          });
          if (Ie.source = U, Ws(Ie))
            throw Ie;
          return Ie;
        }
        function cm(e) {
          return He(e).toLowerCase();
        }
        function fm(e) {
          return He(e).toUpperCase();
        }
        function dm(e, t, i) {
          if (e = He(e), e && (i || t === l))
            return Ai(e);
          if (!e || !(t = Vt(t)))
            return e;
          var s = x(e), f = x(t), m = Po(s, f), _ = Lo(s, f) + 1;
          return rr(s, m, _).join("");
        }
        function hm(e, t, i) {
          if (e = He(e), e && (i || t === l))
            return e.slice(0, I(e) + 1);
          if (!e || !(t = Vt(t)))
            return e;
          var s = x(e), f = Lo(s, x(t)) + 1;
          return rr(s, 0, f).join("");
        }
        function pm(e, t, i) {
          if (e = He(e), e && (i || t === l))
            return e.replace(Dr, "");
          if (!e || !(t = Vt(t)))
            return e;
          var s = x(e), f = Po(s, x(t));
          return rr(s, f).join("");
        }
        function gm(e, t) {
          var i = Qe, s = X;
          if (tt(t)) {
            var f = "separator" in t ? t.separator : f;
            i = "length" in t ? Oe(t.length) : i, s = "omission" in t ? Vt(t.omission) : s;
          }
          e = He(e);
          var m = e.length;
          if (Jn(e)) {
            var _ = x(e);
            m = _.length;
          }
          if (i >= m)
            return e;
          var T = i - S(s);
          if (T < 1)
            return s;
          var M = _ ? rr(_, 0, T).join("") : e.slice(0, T);
          if (f === l)
            return M + s;
          if (_ && (T += M.length - T), Us(f)) {
            if (e.slice(T).search(f)) {
              var F, N = M;
              for (f.global || (f = At(f.source, He(pi.exec(f)) + "g")), f.lastIndex = 0; F = f.exec(N); )
                var U = F.index;
              M = M.slice(0, U === l ? T : U);
            }
          } else if (e.indexOf(Vt(f), T) != T) {
            var K = M.lastIndexOf(f);
            K > -1 && (M = M.slice(0, K));
          }
          return M + s;
        }
        function vm(e) {
          return e = He(e), e && no.test(e) ? e.replace(si, P) : e;
        }
        var mm = Zr(function(e, t, i) {
          return e + (i ? " " : "") + t.toUpperCase();
        }), Gs = dl("toUpperCase");
        function cc(e, t, i) {
          return e = He(e), t = i ? l : t, t === l ? r(e) ? q(e) : ja(e) : e.match(t) || [];
        }
        var fc = Ae(function(e, t) {
          try {
            return Mt(e, l, t);
          } catch (i) {
            return Ws(i) ? i : new $(i);
          }
        }), ym = qn(function(e, t) {
          return Ft(t, function(i) {
            i = Dn(i), Un(e, i, Ns(e[i], e));
          }), e;
        });
        function bm(e) {
          var t = e == null ? 0 : e.length, i = fe();
          return e = t ? Ze(e, function(s) {
            if (typeof s[1] != "function")
              throw new wt(B);
            return [i(s[0]), s[1]];
          }) : [], Ae(function(s) {
            for (var f = -1; ++f < t; ) {
              var m = e[f];
              if (Mt(m[0], this, s))
                return Mt(m[1], this, s);
            }
          });
        }
        function xm(e) {
          return Xd(ln(e, ee));
        }
        function Xs(e) {
          return function() {
            return e;
          };
        }
        function wm(e, t) {
          return e == null || e !== e ? t : e;
        }
        var _m = pl(), Sm = pl(!0);
        function Ut(e) {
          return e;
        }
        function $s(e) {
          return Gu(typeof e == "function" ? e : ln(e, ee));
        }
        function Em(e) {
          return $u(ln(e, ee));
        }
        function Tm(e, t) {
          return Yu(e, ln(t, ee));
        }
        var Om = Ae(function(e, t) {
          return function(i) {
            return Bi(i, e, t);
          };
        }), Im = Ae(function(e, t) {
          return function(i) {
            return Bi(e, i, t);
          };
        });
        function Ys(e, t, i) {
          var s = gt(t), f = jo(t, s);
          i == null && !(tt(t) && (f.length || !s.length)) && (i = t, t = e, e = this, f = jo(t, gt(t)));
          var m = !(tt(i) && "chain" in i) || !!i.chain, _ = Xn(e);
          return Ft(f, function(T) {
            var M = t[T];
            e[T] = M, _ && (e.prototype[T] = function() {
              var F = this.__chain__;
              if (m || F) {
                var N = e(this.__wrapped__), U = N.__actions__ = Nt(this.__actions__);
                return U.push({ func: M, args: arguments, thisArg: e }), N.__chain__ = F, N;
              }
              return M.apply(e, yn([this.value()], arguments));
            });
          }), e;
        }
        function Rm() {
          return ct._ === this && (ct._ = ed), this;
        }
        function Ks() {
        }
        function Mm(e) {
          return e = Oe(e), Ae(function(t) {
            return Ku(t, e);
          });
        }
        var Am = Ts(Ze), Cm = Ts(Ii), Dm = Ts(Fn);
        function dc(e) {
          return Ds(e) ? Mi(Dn(e)) : uh(e);
        }
        function zm(e) {
          return function(t) {
            return e == null ? l : Sr(e, t);
          };
        }
        var Pm = vl(), Lm = vl(!0);
        function Vs() {
          return [];
        }
        function Zs() {
          return !1;
        }
        function km() {
          return {};
        }
        function Fm() {
          return "";
        }
        function Nm() {
          return !0;
        }
        function Bm(e, t) {
          if (e = Oe(e), e < 1 || e > We)
            return [];
          var i = Me, s = St(e, Me);
          t = fe(t), e -= Me;
          for (var f = Nn(s, t); ++i < e; )
            t(i);
          return f;
        }
        function Wm(e) {
          return _e(e) ? Ze(e, Dn) : Zt(e) ? [e] : Nt(Dl(He(e)));
        }
        function Um(e) {
          var t = ++Jf;
          return He(e) + t;
        }
        var Hm = ra(function(e, t) {
          return e + t;
        }, 0), qm = Os("ceil"), Gm = ra(function(e, t) {
          return e / t;
        }, 1), Xm = Os("floor");
        function $m(e) {
          return e && e.length ? Zo(e, Ut, fs) : l;
        }
        function Ym(e, t) {
          return e && e.length ? Zo(e, fe(t, 2), fs) : l;
        }
        function Km(e) {
          return vr(e, Ut);
        }
        function Vm(e, t) {
          return vr(e, fe(t, 2));
        }
        function Zm(e) {
          return e && e.length ? Zo(e, Ut, gs) : l;
        }
        function jm(e, t) {
          return e && e.length ? Zo(e, fe(t, 2), gs) : l;
        }
        var Jm = ra(function(e, t) {
          return e * t;
        }, 1), Qm = Os("round"), e0 = ra(function(e, t) {
          return e - t;
        }, 0);
        function t0(e) {
          return e && e.length ? Gr(e, Ut) : 0;
        }
        function n0(e, t) {
          return e && e.length ? Gr(e, fe(t, 2)) : 0;
        }
        return g.after = Eg, g.ary = ql, g.assign = fv, g.assignIn = rc, g.assignInWith = va, g.assignWith = dv, g.at = hv, g.before = Gl, g.bind = Ns, g.bindAll = ym, g.bindKey = Xl, g.castArray = kg, g.chain = Wl, g.chunk = Xh, g.compact = $h, g.concat = Yh, g.cond = bm, g.conforms = xm, g.constant = Xs, g.countBy = tg, g.create = pv, g.curry = $l, g.curryRight = Yl, g.debounce = Kl, g.defaults = gv, g.defaultsDeep = vv, g.defer = Tg, g.delay = Og, g.difference = Kh, g.differenceBy = Vh, g.differenceWith = Zh, g.drop = jh, g.dropRight = Jh, g.dropRightWhile = Qh, g.dropWhile = ep, g.fill = tp, g.filter = rg, g.flatMap = ag, g.flatMapDeep = sg, g.flatMapDepth = ug, g.flatten = kl, g.flattenDeep = np, g.flattenDepth = rp, g.flip = Ig, g.flow = _m, g.flowRight = Sm, g.fromPairs = ip, g.functions = Sv, g.functionsIn = Ev, g.groupBy = lg, g.initial = ap, g.intersection = sp, g.intersectionBy = up, g.intersectionWith = lp, g.invert = Ov, g.invertBy = Iv, g.invokeMap = fg, g.iteratee = $s, g.keyBy = dg, g.keys = gt, g.keysIn = Wt, g.map = ca, g.mapKeys = Mv, g.mapValues = Av, g.matches = Em, g.matchesProperty = Tm, g.memoize = da, g.merge = Cv, g.mergeWith = ic, g.method = Om, g.methodOf = Im, g.mixin = Ys, g.negate = ha, g.nthArg = Mm, g.omit = Dv, g.omitBy = zv, g.once = Rg, g.orderBy = hg, g.over = Am, g.overArgs = Mg, g.overEvery = Cm, g.overSome = Dm, g.partial = Bs, g.partialRight = Vl, g.partition = pg, g.pick = Pv, g.pickBy = oc, g.property = dc, g.propertyOf = zm, g.pull = hp, g.pullAll = Nl, g.pullAllBy = pp, g.pullAllWith = gp, g.pullAt = vp, g.range = Pm, g.rangeRight = Lm, g.rearg = Ag, g.reject = mg, g.remove = mp, g.rest = Cg, g.reverse = ks, g.sampleSize = bg, g.set = kv, g.setWith = Fv, g.shuffle = xg, g.slice = yp, g.sortBy = Sg, g.sortedUniq = Tp, g.sortedUniqBy = Op, g.split = am, g.spread = Dg, g.tail = Ip, g.take = Rp, g.takeRight = Mp, g.takeRightWhile = Ap, g.takeWhile = Cp, g.tap = $p, g.throttle = zg, g.thru = la, g.toArray = ec, g.toPairs = ac, g.toPairsIn = sc, g.toPath = Wm, g.toPlainObject = nc, g.transform = Nv, g.unary = Pg, g.union = Dp, g.unionBy = zp, g.unionWith = Pp, g.uniq = Lp, g.uniqBy = kp, g.uniqWith = Fp, g.unset = Bv, g.unzip = Fs, g.unzipWith = Bl, g.update = Wv, g.updateWith = Uv, g.values = Qr, g.valuesIn = Hv, g.without = Np, g.words = cc, g.wrap = Lg, g.xor = Bp, g.xorBy = Wp, g.xorWith = Up, g.zip = Hp, g.zipObject = qp, g.zipObjectDeep = Gp, g.zipWith = Xp, g.entries = ac, g.entriesIn = sc, g.extend = rc, g.extendWith = va, Ys(g, g), g.add = Hm, g.attempt = fc, g.camelCase = $v, g.capitalize = uc, g.ceil = qm, g.clamp = qv, g.clone = Fg, g.cloneDeep = Bg, g.cloneDeepWith = Wg, g.cloneWith = Ng, g.conformsTo = Ug, g.deburr = lc, g.defaultTo = wm, g.divide = Gm, g.endsWith = Yv, g.eq = wn, g.escape = Kv, g.escapeRegExp = Vv, g.every = ng, g.find = ig, g.findIndex = Pl, g.findKey = mv, g.findLast = og, g.findLastIndex = Ll, g.findLastKey = yv, g.floor = Xm, g.forEach = Ul, g.forEachRight = Hl, g.forIn = bv, g.forInRight = xv, g.forOwn = wv, g.forOwnRight = _v, g.get = Hs, g.gt = Hg, g.gte = qg, g.has = Tv, g.hasIn = qs, g.head = Fl, g.identity = Ut, g.includes = cg, g.indexOf = op, g.inRange = Gv, g.invoke = Rv, g.isArguments = Or, g.isArray = _e, g.isArrayBuffer = Gg, g.isArrayLike = Bt, g.isArrayLikeObject = it, g.isBoolean = Xg, g.isBuffer = ir, g.isDate = $g, g.isElement = Yg, g.isEmpty = Kg, g.isEqual = Vg, g.isEqualWith = Zg, g.isError = Ws, g.isFinite = jg, g.isFunction = Xn, g.isInteger = Zl, g.isLength = pa, g.isMap = jl, g.isMatch = Jg, g.isMatchWith = Qg, g.isNaN = ev, g.isNative = tv, g.isNil = rv, g.isNull = nv, g.isNumber = Jl, g.isObject = tt, g.isObjectLike = nt, g.isPlainObject = Xi, g.isRegExp = Us, g.isSafeInteger = iv, g.isSet = Ql, g.isString = ga, g.isSymbol = Zt, g.isTypedArray = Jr, g.isUndefined = ov, g.isWeakMap = av, g.isWeakSet = sv, g.join = cp, g.kebabCase = Zv, g.last = fn, g.lastIndexOf = fp, g.lowerCase = jv, g.lowerFirst = Jv, g.lt = uv, g.lte = lv, g.max = $m, g.maxBy = Ym, g.mean = Km, g.meanBy = Vm, g.min = Zm, g.minBy = jm, g.stubArray = Vs, g.stubFalse = Zs, g.stubObject = km, g.stubString = Fm, g.stubTrue = Nm, g.multiply = Jm, g.nth = dp, g.noConflict = Rm, g.noop = Ks, g.now = fa, g.pad = Qv, g.padEnd = em, g.padStart = tm, g.parseInt = nm, g.random = Xv, g.reduce = gg, g.reduceRight = vg, g.repeat = rm, g.replace = im, g.result = Lv, g.round = Qm, g.runInContext = w, g.sample = yg, g.size = wg, g.snakeCase = om, g.some = _g, g.sortedIndex = bp, g.sortedIndexBy = xp, g.sortedIndexOf = wp, g.sortedLastIndex = _p, g.sortedLastIndexBy = Sp, g.sortedLastIndexOf = Ep, g.startCase = sm, g.startsWith = um, g.subtract = e0, g.sum = t0, g.sumBy = n0, g.template = lm, g.times = Bm, g.toFinite = $n, g.toInteger = Oe, g.toLength = tc, g.toLower = cm, g.toNumber = dn, g.toSafeInteger = cv, g.toString = He, g.toUpper = fm, g.trim = dm, g.trimEnd = hm, g.trimStart = pm, g.truncate = gm, g.unescape = vm, g.uniqueId = Um, g.upperCase = mm, g.upperFirst = Gs, g.each = Ul, g.eachRight = Hl, g.first = Fl, Ys(g, (function() {
          var e = {};
          return An(g, function(t, i) {
            Xe.call(g.prototype, i) || (e[i] = t);
          }), e;
        })(), { chain: !1 }), g.VERSION = y, Ft(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          g[e].placeholder = g;
        }), Ft(["drop", "take"], function(e, t) {
          Le.prototype[e] = function(i) {
            i = i === l ? 1 : ft(Oe(i), 0);
            var s = this.__filtered__ && !t ? new Le(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = St(i, s.__takeCount__) : s.__views__.push({
              size: St(i, Me),
              type: e + (s.__dir__ < 0 ? "Right" : "")
            }), s;
          }, Le.prototype[e + "Right"] = function(i) {
            return this.reverse()[e](i).reverse();
          };
        }), Ft(["filter", "map", "takeWhile"], function(e, t) {
          var i = t + 1, s = i == re || i == Fe;
          Le.prototype[e] = function(f) {
            var m = this.clone();
            return m.__iteratees__.push({
              iteratee: fe(f, 3),
              type: i
            }), m.__filtered__ = m.__filtered__ || s, m;
          };
        }), Ft(["head", "last"], function(e, t) {
          var i = "take" + (t ? "Right" : "");
          Le.prototype[e] = function() {
            return this[i](1).value()[0];
          };
        }), Ft(["initial", "tail"], function(e, t) {
          var i = "drop" + (t ? "" : "Right");
          Le.prototype[e] = function() {
            return this.__filtered__ ? new Le(this) : this[i](1);
          };
        }), Le.prototype.compact = function() {
          return this.filter(Ut);
        }, Le.prototype.find = function(e) {
          return this.filter(e).head();
        }, Le.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, Le.prototype.invokeMap = Ae(function(e, t) {
          return typeof e == "function" ? new Le(this) : this.map(function(i) {
            return Bi(i, e, t);
          });
        }), Le.prototype.reject = function(e) {
          return this.filter(ha(fe(e)));
        }, Le.prototype.slice = function(e, t) {
          e = Oe(e);
          var i = this;
          return i.__filtered__ && (e > 0 || t < 0) ? new Le(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== l && (t = Oe(t), i = t < 0 ? i.dropRight(-t) : i.take(t - e)), i);
        }, Le.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, Le.prototype.toArray = function() {
          return this.take(Me);
        }, An(Le.prototype, function(e, t) {
          var i = /^(?:filter|find|map|reject)|While$/.test(t), s = /^(?:head|last)$/.test(t), f = g[s ? "take" + (t == "last" ? "Right" : "") : t], m = s || /^find/.test(t);
          f && (g.prototype[t] = function() {
            var _ = this.__wrapped__, T = s ? [1] : arguments, M = _ instanceof Le, F = T[0], N = M || _e(_), U = function(Pe) {
              var ke = f.apply(g, yn([Pe], T));
              return s && K ? ke[0] : ke;
            };
            N && i && typeof F == "function" && F.length != 1 && (M = N = !1);
            var K = this.__chain__, te = !!this.__actions__.length, de = m && !K, Ie = M && !te;
            if (!m && N) {
              _ = Ie ? _ : new Le(this);
              var he = e.apply(_, T);
              return he.__actions__.push({ func: la, args: [U], thisArg: l }), new un(he, K);
            }
            return de && Ie ? e.apply(this, T) : (he = this.thru(U), de ? s ? he.value()[0] : he.value() : he);
          });
        }), Ft(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Mn[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
          g.prototype[e] = function() {
            var f = arguments;
            if (s && !this.__chain__) {
              var m = this.value();
              return t.apply(_e(m) ? m : [], f);
            }
            return this[i](function(_) {
              return t.apply(_e(_) ? _ : [], f);
            });
          };
        }), An(Le.prototype, function(e, t) {
          var i = g[t];
          if (i) {
            var s = i.name + "";
            Xe.call(Yr, s) || (Yr[s] = []), Yr[s].push({ name: t, func: i });
          }
        }), Yr[na(l, qe).name] = [{
          name: "wrapper",
          func: l
        }], Le.prototype.clone = vd, Le.prototype.reverse = md, Le.prototype.value = yd, g.prototype.at = Yp, g.prototype.chain = Kp, g.prototype.commit = Vp, g.prototype.next = Zp, g.prototype.plant = Jp, g.prototype.reverse = Qp, g.prototype.toJSON = g.prototype.valueOf = g.prototype.value = eg, g.prototype.first = g.prototype.head, Di && (g.prototype[Di] = jp), g;
      }), Y = j();
      kn ? ((kn.exports = Y)._ = Y, an._ = Y) : ct._ = Y;
    }).call(Ry);
  })(Yi, Yi.exports)), Yi.exports;
}
var Ir = My(), eu, jc;
function Su() {
  if (jc) return eu;
  jc = 1;
  function p(h) {
    var l = typeof h;
    return h != null && (l == "object" || l == "function");
  }
  return eu = p, eu;
}
var tu, Jc;
function Ay() {
  if (Jc) return tu;
  Jc = 1;
  var p = typeof or == "object" && or && or.Object === Object && or;
  return tu = p, tu;
}
var nu, Qc;
function $f() {
  if (Qc) return nu;
  Qc = 1;
  var p = Ay(), h = typeof self == "object" && self && self.Object === Object && self, l = p || h || Function("return this")();
  return nu = l, nu;
}
var ru, ef;
function Cy() {
  if (ef) return ru;
  ef = 1;
  var p = $f(), h = function() {
    return p.Date.now();
  };
  return ru = h, ru;
}
var iu, tf;
function Dy() {
  if (tf) return iu;
  tf = 1;
  var p = /\s/;
  function h(l) {
    for (var y = l.length; y-- && p.test(l.charAt(y)); )
      ;
    return y;
  }
  return iu = h, iu;
}
var ou, nf;
function zy() {
  if (nf) return ou;
  nf = 1;
  var p = Dy(), h = /^\s+/;
  function l(y) {
    return y && y.slice(0, p(y) + 1).replace(h, "");
  }
  return ou = l, ou;
}
var au, rf;
function Yf() {
  if (rf) return au;
  rf = 1;
  var p = $f(), h = p.Symbol;
  return au = h, au;
}
var su, of;
function Py() {
  if (of) return su;
  of = 1;
  var p = Yf(), h = Object.prototype, l = h.hasOwnProperty, y = h.toString, C = p ? p.toStringTag : void 0;
  function O(B) {
    var L = l.call(B, C), E = B[C];
    try {
      B[C] = void 0;
      var V = !0;
    } catch {
    }
    var ge = y.call(B);
    return V && (L ? B[C] = E : delete B[C]), ge;
  }
  return su = O, su;
}
var uu, af;
function Ly() {
  if (af) return uu;
  af = 1;
  var p = Object.prototype, h = p.toString;
  function l(y) {
    return h.call(y);
  }
  return uu = l, uu;
}
var lu, sf;
function ky() {
  if (sf) return lu;
  sf = 1;
  var p = Yf(), h = Py(), l = Ly(), y = "[object Null]", C = "[object Undefined]", O = p ? p.toStringTag : void 0;
  function B(L) {
    return L == null ? L === void 0 ? C : y : O && O in Object(L) ? h(L) : l(L);
  }
  return lu = B, lu;
}
var cu, uf;
function Fy() {
  if (uf) return cu;
  uf = 1;
  function p(h) {
    return h != null && typeof h == "object";
  }
  return cu = p, cu;
}
var fu, lf;
function Ny() {
  if (lf) return fu;
  lf = 1;
  var p = ky(), h = Fy(), l = "[object Symbol]";
  function y(C) {
    return typeof C == "symbol" || h(C) && p(C) == l;
  }
  return fu = y, fu;
}
var du, cf;
function By() {
  if (cf) return du;
  cf = 1;
  var p = zy(), h = Su(), l = Ny(), y = NaN, C = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, B = /^0o[0-7]+$/i, L = parseInt;
  function E(V) {
    if (typeof V == "number")
      return V;
    if (l(V))
      return y;
    if (h(V)) {
      var ge = typeof V.valueOf == "function" ? V.valueOf() : V;
      V = h(ge) ? ge + "" : ge;
    }
    if (typeof V != "string")
      return V === 0 ? V : +V;
    V = p(V);
    var ee = O.test(V);
    return ee || B.test(V) ? L(V.slice(2), ee ? 2 : 8) : C.test(V) ? y : +V;
  }
  return du = E, du;
}
var hu, ff;
function Wy() {
  if (ff) return hu;
  ff = 1;
  var p = Su(), h = Cy(), l = By(), y = "Expected a function", C = Math.max, O = Math.min;
  function B(L, E, V) {
    var ge, ee, Be, me, Re, Ve, De = 0, qe = !1, ze = !1, Se = !0;
    if (typeof L != "function")
      throw new TypeError(y);
    E = l(E) || 0, p(V) && (qe = !!V.leading, ze = "maxWait" in V, Be = ze ? C(l(V.maxWait) || 0, E) : Be, Se = "trailing" in V ? !!V.trailing : Se);
    function Ce(ne) {
      var re = ge, be = ee;
      return ge = ee = void 0, De = ne, me = L.apply(be, re), me;
    }
    function Ee(ne) {
      return De = ne, Re = setTimeout(ue, E), qe ? Ce(ne) : me;
    }
    function we(ne) {
      var re = ne - Ve, be = ne - De, Fe = E - re;
      return ze ? O(Fe, Be - be) : Fe;
    }
    function D(ne) {
      var re = ne - Ve, be = ne - De;
      return Ve === void 0 || re >= E || re < 0 || ze && be >= Be;
    }
    function ue() {
      var ne = h();
      if (D(ne))
        return $e(ne);
      Re = setTimeout(ue, we(ne));
    }
    function $e(ne) {
      return Re = void 0, Se && ge ? Ce(ne) : (ge = ee = void 0, me);
    }
    function Qe() {
      Re !== void 0 && clearTimeout(Re), De = 0, ge = Ve = ee = Re = void 0;
    }
    function X() {
      return Re === void 0 ? me : $e(h());
    }
    function ie() {
      var ne = h(), re = D(ne);
      if (ge = arguments, ee = this, Ve = ne, re) {
        if (Re === void 0)
          return Ee(Ve);
        if (ze)
          return clearTimeout(Re), Re = setTimeout(ue, E), Ce(Ve);
      }
      return Re === void 0 && (Re = setTimeout(ue, E)), me;
    }
    return ie.cancel = Qe, ie.flush = X, ie;
  }
  return hu = B, hu;
}
var pu, df;
function Uy() {
  if (df) return pu;
  df = 1;
  var p = Wy(), h = Su(), l = "Expected a function";
  function y(C, O, B) {
    var L = !0, E = !0;
    if (typeof C != "function")
      throw new TypeError(l);
    return h(B) && (L = "leading" in B ? !!B.leading : L, E = "trailing" in B ? !!B.trailing : E), p(C, O, {
      leading: L,
      maxWait: O,
      trailing: E
    });
  }
  return pu = y, pu;
}
var Hy = Uy();
const qy = /* @__PURE__ */ Pf(Hy), Gy = { class: "scroll max-h-screen ml-15" }, Xy = ["onContextmenu"], $y = {
  key: 1,
  class: "text"
}, hn = "__drop__", Yy = /* @__PURE__ */ Ta({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(p, { emit: h }) {
    const l = at(void 0), y = dt(() => Gf(l.value)), C = dt(() => y.value.cols), O = dt(() => y.value.rowHeight), B = dt(() => `${O.value}-${Object.values(C.value).join("-")}`), L = at(typeof window < "u" ? window.innerWidth : 1200), E = dt(() => st(L.value)), V = xf(), ge = dt(() => V.params.pageid || ""), ee = yf(ge), Be = ee.widgets, me = ee.layout, Re = g0(), Ve = at({ x: 0, y: 0 }), De = at({
      visible: !1,
      x: 0,
      y: 0,
      widgetId: ""
    }), qe = at({
      visible: !1,
      x: 0,
      y: 0
    }), ze = (G, Q) => {
      De.value = {
        visible: !0,
        x: G.clientX,
        y: G.clientY,
        widgetId: Q
      }, qe.value.visible = !1;
    }, Se = () => {
      De.value.visible = !1, qe.value.visible = !1;
    }, Ce = () => {
      we(De.value.widgetId), Se();
    }, Ee = () => {
      D(), Se();
    }, we = (G) => {
      const Q = Be.value.find((Z) => Z.uid === G), z = me.value.find((Z) => Z.id === G);
      Q && z && Re.copy(
        {
          type: Q.type,
          config: Ir.cloneDeep(Q.config ?? {}),
          wrapperConfig: Ir.cloneDeep(Q.wrapperConfig ?? {})
        },
        {
          x: z.x,
          y: z.y,
          z: z.z,
          width: z.width,
          height: z.height,
          group: z.group
        }
      );
    }, D = () => {
      const G = Re.paste();
      if (!G) return;
      const Q = "li_" + Math.random().toString(36).substring(7), z = Ir.cloneDeep(G.widget);
      z.uid = Q, z.config?.settings && (z.config.settings.name = "widget_" + Q);
      const { colW: Z, rowH: le } = Ge(), ye = Math.round(Ve.value.x / Z), ce = Math.round(Ve.value.y / le), se = {
        i: Q,
        x: ye,
        y: ce,
        w: Math.max(1, Math.round((G.layout.width || 200) / Z)),
        h: Math.max(1, Math.round((G.layout.height || 100) / le)),
        static: !1
      };
      ee.addWidget(z, {
        id: z.uid,
        x: ye * Z,
        y: ce * le,
        z: 0,
        width: G.layout.width ?? 200,
        height: G.layout.height ?? 100
      }), re.value = [...re.value, se], Gt(re.value);
    }, ue = at(), $e = at(), Qe = at(!1), X = at({ x: -1, y: -1 }), ie = at(!1), ne = at([]), re = at([]), be = at([]), Fe = dt(() => [
      ...re.value,
      ...be.value
    ]), ae = at(!1);
    function We(G, Q = 0) {
      if (typeof G == "number") return G;
      const z = Number(G);
      return Number.isFinite(z) ? z : Q;
    }
    function st(G) {
      const Q = C.value;
      return G >= ii.lg ? Q.lg : G >= ii.md ? Q.md : G >= ii.sm ? Q.sm : G >= ii.xs ? Q.xs : Q.xxs;
    }
    function Ge() {
      return { colW: 1200 / C.value.md, rowH: O.value };
    }
    function Me(G) {
      const { colW: Q, rowH: z } = Ge(), Z = We(G.x, 0), le = We(G.y, 0), ye = We(G.width, Q), ce = We(G.height, z);
      return {
        i: String(G.id ?? G.i ?? ""),
        x: Math.round(Z / Q),
        y: Math.round(le / z),
        w: Math.max(1, Math.round(ye / Q)),
        h: Math.max(1, Math.round(ce / z)),
        static: !1
      };
    }
    function qt(G) {
      const { colW: Q, rowH: z } = Ge();
      return {
        id: String(G.i),
        x: We(G.x, 0) * Q,
        y: We(G.y, 0) * z,
        width: We(G.w, 1) * Q,
        height: We(G.h, 1) * z,
        z: 3e3
      };
    }
    je(me, (G) => {
      ae.value = !0;
      try {
        const Q = Array.isArray(G) ? G.map(Me) : [];
        Ir.isEqual(re.value, Q) || (re.value = Q);
      } finally {
        Ht(() => ae.value = !1);
      }
    }, { immediate: !0, deep: !0 });
    const ut = qy(() => {
      L.value = window.innerWidth;
      const G = me.value || [], Q = Array.isArray(G) ? G.map(Me) : [];
      Ir.isEqual(re.value, Q) || (re.value = Q);
    }, 120);
    let Sn = null;
    const Je = Ji(wf) ?? null;
    function ht() {
      if (Je && ge.value) {
        const G = Je.getPage(ge.value);
        l.value = G?.layoutSettings ? { ...Sa(G.layoutSettings) } : void 0;
      }
    }
    Oa(() => {
      window.addEventListener("resize", ut, { passive: !0 }), ht(), Je && "subscribe" in Je && (Sn = Je.subscribe((G) => {
        G === "PAGE_UPDATE" && ht();
      }));
    }), wu(() => {
      window.removeEventListener("resize", ut), Je && "unsubscribe" in Je && Sn && Je.unsubscribe(Sn);
    });
    function Gt(G) {
      if (ae.value) return;
      const z = (G ?? Fe.value).filter((ce) => ce.i !== hn).map(qt), Z = me.value || [], le = z.map((ce) => ({
        ...ce,
        x: Math.round(ce.x * 100) / 100,
        y: Math.round(ce.y * 100) / 100,
        width: Math.round(ce.width * 100) / 100,
        height: Math.round(ce.height * 100) / 100
      })), ye = Z.map((ce) => ({
        ...ce,
        x: Math.round(ce.x * 100) / 100,
        y: Math.round(ce.y * 100) / 100,
        width: Math.round(ce.width * 100) / 100,
        height: Math.round(ce.height * 100) / 100
      }));
      Ir.isEqual(ye, le) || ee.setBoard(Yt(), z);
    }
    async function Xt() {
      return be.value.find((G) => G.i === hn) || (be.value = [...be.value, { x: 0, y: 0, w: 2, h: 2, i: hn, static: !1 }], await Ht()), await Ht(), ue.value?.getItem?.(hn);
    }
    function J() {
      be.value = be.value.filter((G) => G.i !== hn);
    }
    async function en() {
      Qe.value = !0, ie.value = !1, await Xt();
    }
    async function Tt(G) {
      const Q = G;
      if (!Q || !ue.value) return;
      const z = document.querySelector(".alayout");
      if (!z) return;
      const Z = z.getBoundingClientRect();
      be.value.find((et) => et.i === hn) || (be.value = [...be.value, { x: 0, y: 0, w: 2, h: 2, i: hn, static: !1 }], await Ht()), await Ht();
      const le = ue.value?.getItem?.(hn);
      if (!le) return;
      const ye = Q.clientX - Z.left, ce = Q.clientY - Z.top;
      let se = le.calcXY(ce, ye);
      const oe = ue.value?.cols ?? 12;
      (se.x < 0 || se.y < 0 || se.x >= oe) && (se = le.calcXY(ye, ce)), X.value = { x: We(se.x, 0), y: We(se.y, 0) }, ie.value ? ue.value.dragEvent("drag", hn, X.value.x, X.value.y, 2, 2) : (ue.value.dragEvent("dragstart", hn, X.value.x, X.value.y, 2, 2), ie.value = !0);
    }
    function mt() {
      ie.value && ue.value && ue.value.dragEvent("dragend", hn, X.value.x, X.value.y, 2, 2), J(), ie.value = !1, Qe.value = !1;
    }
    function pn(G) {
      const Q = G?.item?._underlying_vm_ || G?.added?.element || G?.item, z = Q?.type ?? "UnknownWidget", Z = Q?.datasourceId ?? "default";
      ie.value && ue.value && ue.value.dragEvent("dragend", hn, X.value.x, X.value.y, 2, 2), J(), ie.value = !1, Qe.value = !1;
      const le = `widget_${Math.random().toString(36).slice(2, 9)}`, { x: ye, y: ce } = X.value;
      re.value = [...re.value, { i: le, x: ye, y: ce, w: 2, h: 2, static: !1 }], Gt(re.value), $t(le, z, Z), X.value = { x: -1, y: -1 };
    }
    function rt() {
      Qe.value = !0;
    }
    function Ot() {
      mt();
    }
    function $t(G, Q, z) {
      const Z = {
        uid: G,
        type: Q,
        config: { datasourceId: z, settings: {} },
        wrapperConfig: Ir.cloneDeep(d0)
      };
      ee.addWidget(Z, { id: G, x: 0, y: 0, z: 0, width: 300, height: 150 });
    }
    function yt(G) {
      ee.removeWidget(G), re.value = re.value.filter((Q) => Q.i !== G), Gt(re.value);
    }
    function Yt() {
      return Be.value.map((G) => ({
        uid: G.uid,
        type: G.type,
        config: G.config,
        wrapperConfig: G.wrapperConfig
      }));
    }
    const ar = h, It = (G) => {
      ar("openSettings", G);
    };
    return (G, Q) => (kt(), Pn("div", Gy, [
      xa("div", {
        ref_key: "wrapper",
        ref: $e,
        onDragenter: rt,
        onDrop: mc(Ot, ["prevent"]),
        onDrag: Tt,
        class: "alayout",
        onClick: Se,
        style: Ki({ "--grid-row-height": O.value + "px", "--grid-cols": E.value })
      }, [
        (kt(), eo(vt(qf), {
          ref_key: "gridLayout",
          ref: ue,
          key: B.value,
          layout: Fe.value,
          "row-height": O.value,
          responsive: !0,
          "vertical-compact": !1,
          breakpoints: vt(ii),
          cols: C.value,
          onLayoutUpdated: Gt
        }, {
          item: oi(({ item: z }) => [
            xa("div", {
              class: "widget-item-wrapper",
              onContextmenu: mc((Z) => ze(Z, String(z.i)), ["stop", "prevent"])
            }, [
              vt(Be)?.find((Z) => Z.uid === z.i) ? (kt(), eo(vt(bf), {
                key: 0,
                widget: vt(Be).find((Z) => Z.uid === z.i),
                ref: `${z.i}_wrapper`,
                onOpenSettings: It,
                editEnabled: "",
                onRemoveWidget: () => yt(z.i.toString())
              }, null, 8, ["widget", "onRemoveWidget"])) : (kt(), Pn("span", $y, mu(`${z.i}${z.static ? "- Static" : ""}`), 1))
            ], 40, Xy)
          ]),
          _: 1
        }, 8, ["layout", "row-height", "breakpoints", "cols"])),
        De.value.visible ? (kt(), Pn("div", {
          key: 0,
          class: "widget-context-menu",
          style: Ki({ left: De.value.x + "px", top: De.value.y + "px" })
        }, [
          ni(vt(bc), {
            intent: "quiet",
            size: "sm",
            class: "menu__item",
            onClick: Ce
          }, {
            default: oi(() => [
              ni(vt(xc), {
                name: "content_copy",
                size: "sm"
              }),
              Q[0] || (Q[0] = yc(" Kopieren ", -1))
            ]),
            _: 1
          })
        ], 4)) : vu("", !0),
        vf(ni(vt(p0), {
          list: ne.value,
          group: { name: "widgets" },
          class: "invisible-dropzone",
          itemKey: "type",
          sort: !1,
          onStart: en,
          onEnd: mt,
          onAdd: pn
        }, {
          item: oi(({ element: z }) => [
            xa("div", null, mu(z.type), 1)
          ]),
          _: 1
        }, 8, ["list"]), [
          [mf, Qe.value]
        ]),
        qe.value.visible && vt(Re).hasClipboard ? (kt(), Pn("div", {
          key: 1,
          class: "canvas-context-menu",
          style: Ki({ left: qe.value.x + "px", top: qe.value.y + "px" })
        }, [
          ni(vt(bc), {
            intent: "quiet",
            size: "sm",
            class: "menu__item",
            onClick: Ee
          }, {
            default: oi(() => [
              ni(vt(xc), {
                name: "content_paste",
                size: "sm"
              }),
              Q[1] || (Q[1] = yc(" Einfügen ", -1))
            ]),
            _: 1
          })
        ], 4)) : vu("", !0)
      ], 36)
    ]));
  }
}), Ky = /* @__PURE__ */ Xf(Yy, [["__scopeId", "data-v-1d1efb1b"]]);
class Ne extends _f {
  constructor() {
    super(...arguments), this._lg = 18, this._md = 12, this._sm = 6, this._xs = 4, this._xxs = 2;
  }
  static {
    this.LG = 0;
  }
  static {
    this.MD = 1;
  }
  static {
    this.SM = 2;
  }
  static {
    this.XS = 3;
  }
  static {
    this.XXS = 4;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return Ke.Literals.GRID_COLUMNS;
  }
  // Getters and Setters
  get lg() {
    return this._lg;
  }
  set lg(h) {
    const l = this._lg;
    this._lg = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ne.LG),
      getOldValue: () => l,
      getNewValue: () => h,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.LG,
      merge: () => !1
    });
  }
  get md() {
    return this._md;
  }
  set md(h) {
    const l = this._md;
    this._md = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ne.MD),
      getOldValue: () => l,
      getNewValue: () => h,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.MD,
      merge: () => !1
    });
  }
  get sm() {
    return this._sm;
  }
  set sm(h) {
    const l = this._sm;
    this._sm = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ne.SM),
      getOldValue: () => l,
      getNewValue: () => h,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.SM,
      merge: () => !1
    });
  }
  get xs() {
    return this._xs;
  }
  set xs(h) {
    const l = this._xs;
    this._xs = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ne.XS),
      getOldValue: () => l,
      getNewValue: () => h,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.XS,
      merge: () => !1
    });
  }
  get xxs() {
    return this._xxs;
  }
  set xxs(h) {
    const l = this._xxs;
    this._xxs = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ne.XXS),
      getOldValue: () => l,
      getNewValue: () => h,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.XXS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(h) {
    switch (this.eClass().getFeatureID(h)) {
      case Ne.LG:
        return this.lg;
      case Ne.MD:
        return this.md;
      case Ne.SM:
        return this.sm;
      case Ne.XS:
        return this.xs;
      case Ne.XXS:
        return this.xxs;
      default:
        return super.eGet(h);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(h, l) {
    switch (this.eClass().getFeatureID(h)) {
      case Ne.LG:
        this.lg = l, super.eSet(h, l);
        break;
      case Ne.MD:
        this.md = l, super.eSet(h, l);
        break;
      case Ne.SM:
        this.sm = l, super.eSet(h, l);
        break;
      case Ne.XS:
        this.xs = l, super.eSet(h, l);
        break;
      case Ne.XXS:
        this.xxs = l, super.eSet(h, l);
        break;
      default:
        super.eSet(h, l);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(h) {
    switch (this.eClass().getFeatureID(h)) {
      case Ne.LG:
        return this._lg !== 18;
      case Ne.MD:
        return this._md !== 12;
      case Ne.SM:
        return this._sm !== 6;
      case Ne.XS:
        return this._xs !== 4;
      case Ne.XXS:
        return this._xxs !== 2;
      default:
        return super.eIsSet(h);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(h) {
    switch (this.eClass().getFeatureID(h)) {
      case Ne.LG:
        this._lg = 18;
        return;
      case Ne.MD:
        this._md = 12;
        return;
      case Ne.SM:
        this._sm = 6;
        return;
      case Ne.XS:
        this._xs = 4;
        return;
      case Ne.XXS:
        this._xxs = 2;
        return;
      default:
        super.eUnset(h);
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
      lg: this.lg,
      md: this.md,
      sm: this.sm,
      xs: this.xs,
      xxs: this.xxs
    };
  }
}
class Eu extends v0 {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Eu()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(Ke.eINSTANCE);
  }
  /**
   * Create a new GridColumns instance
   */
  createGridColumns() {
    return new Ne();
  }
  /**
   * Create a new GridSettings instance
   */
  createGridSettings() {
    return new Lt();
  }
  /**
   * Create an instance of the given class
   */
  create(h) {
    switch (h.getName()) {
      case "GridColumns":
        return this.createGridColumns();
      case "GridSettings":
        return this.createGridSettings();
      default:
        throw new Error(`Unknown class: ${h.getName()}`);
    }
  }
}
class Ke extends m0 {
  static {
    this.eNAME = "gridsettings";
  }
  static {
    this.eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.layouts.grid";
  }
  static {
    this.eNS_PREFIX = "gridsettings";
  }
  static get eINSTANCE() {
    return this._instance || (this._instance = new Ke(), this._instance.init()), this._instance;
  }
  static {
    this.Literals = {
      GRID_COLUMNS: null,
      GRID_COLUMNS__LG: null,
      GRID_COLUMNS__MD: null,
      GRID_COLUMNS__SM: null,
      GRID_COLUMNS__XS: null,
      GRID_COLUMNS__XXS: null,
      GRID_SETTINGS: null,
      GRID_SETTINGS__ROW_HEIGHT: null,
      GRID_SETTINGS__COLS: null
    };
  }
  constructor() {
    super(), this.setName(Ke.eNAME), this.setNsURI(Ke.eNS_URI), this.setNsPrefix(Ke.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    y0.INSTANCE.set(Ke.eNS_URI, this), this.setEFactoryInstance(Eu.eINSTANCE);
    const h = new wc();
    h.setName("GridColumns"), h.setAbstract(!1), h.setInterface(!1), this.getEClassifiers().push(h), h.setEPackage(this), Ke.Literals.GRID_COLUMNS = h;
    const l = new ei();
    l.setName("lg"), l.setLowerBound(0), l.setUpperBound(1), h.getEStructuralFeatures().push(l), Ke.Literals.GRID_COLUMNS__LG = l;
    const y = new ei();
    y.setName("md"), y.setLowerBound(0), y.setUpperBound(1), h.getEStructuralFeatures().push(y), Ke.Literals.GRID_COLUMNS__MD = y;
    const C = new ei();
    C.setName("sm"), C.setLowerBound(0), C.setUpperBound(1), h.getEStructuralFeatures().push(C), Ke.Literals.GRID_COLUMNS__SM = C;
    const O = new ei();
    O.setName("xs"), O.setLowerBound(0), O.setUpperBound(1), h.getEStructuralFeatures().push(O), Ke.Literals.GRID_COLUMNS__XS = O;
    const B = new ei();
    B.setName("xxs"), B.setLowerBound(0), B.setUpperBound(1), h.getEStructuralFeatures().push(B), Ke.Literals.GRID_COLUMNS__XXS = B;
    const L = new wc();
    L.setName("GridSettings"), L.setAbstract(!1), L.setInterface(!1), this.getEClassifiers().push(L), L.setEPackage(this), Ke.Literals.GRID_SETTINGS = L;
    const E = new ei();
    E.setName("rowHeight"), E.setLowerBound(0), E.setUpperBound(1), L.getEStructuralFeatures().push(E), Ke.Literals.GRID_SETTINGS__ROW_HEIGHT = E;
    const V = new b0();
    V.setContainment(!0), V.setName("cols"), V.setLowerBound(0), V.setUpperBound(1), L.getEStructuralFeatures().push(V), Ke.Literals.GRID_SETTINGS__COLS = V, Ke.Literals.GRID_COLUMNS__LG.setEType(ti().getEClassifier("EInt")), Ke.Literals.GRID_COLUMNS__MD.setEType(ti().getEClassifier("EInt")), Ke.Literals.GRID_COLUMNS__SM.setEType(ti().getEClassifier("EInt")), Ke.Literals.GRID_COLUMNS__XS.setEType(ti().getEClassifier("EInt")), Ke.Literals.GRID_COLUMNS__XXS.setEType(ti().getEClassifier("EInt")), Ke.Literals.GRID_SETTINGS__ROW_HEIGHT.setEType(ti().getEClassifier("EInt")), Ke.Literals.GRID_SETTINGS__COLS.setEType(Ke.Literals.GRID_COLUMNS);
  }
}
class Lt extends _f {
  constructor() {
    super(...arguments), this._rowHeight = 30;
  }
  static {
    this.ROW_HEIGHT = 0;
  }
  static {
    this.COLS = 1;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return Ke.Literals.GRID_SETTINGS;
  }
  // Getters and Setters
  get rowHeight() {
    return this._rowHeight;
  }
  set rowHeight(h) {
    const l = this._rowHeight;
    this._rowHeight = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Lt.ROW_HEIGHT),
      getOldValue: () => l,
      getNewValue: () => h,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Lt.ROW_HEIGHT,
      merge: () => !1
    });
  }
  get cols() {
    return this._cols;
  }
  set cols(h) {
    const l = this._cols;
    this._cols = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Lt.COLS),
      getOldValue: () => l,
      getNewValue: () => h,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Lt.COLS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(h) {
    switch (this.eClass().getFeatureID(h)) {
      case Lt.ROW_HEIGHT:
        return this.rowHeight;
      case Lt.COLS:
        return this.cols;
      default:
        return super.eGet(h);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(h, l) {
    switch (this.eClass().getFeatureID(h)) {
      case Lt.ROW_HEIGHT:
        this.rowHeight = l, super.eSet(h, l);
        break;
      case Lt.COLS:
        this.cols = l, super.eSet(h, l);
        break;
      default:
        super.eSet(h, l);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(h) {
    switch (this.eClass().getFeatureID(h)) {
      case Lt.ROW_HEIGHT:
        return this._rowHeight !== 30;
      case Lt.COLS:
        return this._cols !== void 0;
      default:
        return super.eIsSet(h);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(h) {
    switch (this.eClass().getFeatureID(h)) {
      case Lt.ROW_HEIGHT:
        this._rowHeight = 30;
        return;
      case Lt.COLS:
        this._cols = void 0;
        return;
      default:
        super.eUnset(h);
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
      rowHeight: this.rowHeight,
      cols: this.cols
    };
  }
}
const Vy = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for the grid layout.

The row height first, because it is the one number that applies at every
width; the columns follow, one per width the layout switches at.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="GridSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridSettings"/>

  <components xsi:type="uimodel:FormView" name="GridSettingsFormView">
    <fields xsi:type="uimodel:NumberWidget" name="rowHeight"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridSettings/rowHeight" label="Zeilenhöhe (px)"
        min="10" max="200" step="1"/>
    <fields xsi:type="uimodel:InputWidget" name="cols"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridSettings/cols" label="Spalten je Breite"/>
  </components>
</uimodel:UIModel>
`, Zy = `<?xml version="1.0" encoding="UTF-8"?>
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

How many columns at each width.

The labels carry the width the layout switches at, because the two-letter
names say nothing on their own: lg is not "large" to someone setting up a
board, it is "from 1800 px".
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="GridColumnsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns"/>

  <components xsi:type="uimodel:FormView" name="GridColumnsFormView">
    <fields xsi:type="uimodel:NumberWidget" name="lg"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/lg" label="ab 1800 px" min="1" max="48" step="1"/>
    <fields xsi:type="uimodel:NumberWidget" name="md"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/md" label="ab 1200 px" min="1" max="48" step="1"/>
    <fields xsi:type="uimodel:NumberWidget" name="sm"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/sm" label="ab 768 px" min="1" max="48" step="1"/>
    <fields xsi:type="uimodel:NumberWidget" name="xs"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/xs" label="ab 480 px" min="1" max="48" step="1"/>
    <fields xsi:type="uimodel:NumberWidget" name="xxs"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/xxs" label="darunter" min="1" max="48" step="1"/>
  </components>
</uimodel:UIModel>
`;
Ke.eINSTANCE;
const Kf = "org.eclipse.daanse.board.app.ui.vue.layouts.grid";
function Vf({ services: p }) {
  p.getRequired(pf).addLayout({
    id: Kf,
    name: "GridLayout",
    description: "responsive grid-based layout",
    component: Iy,
    editor: Ky,
    /*
     * No hand-written panel: a row height and five column counts are
     * fields, so there is nothing to keep beside the model and no second
     * place for the two to disagree.
     */
    settingsForm: {
      xmi: Vy,
      uri: "/grid-settings.ui.xmi",
      ePackage: () => Ke.eINSTANCE,
      create: () => new Lt(),
      entryForms: [{ xmi: Zy, uri: "/grid-columns.ui.xmi" }]
    }
  });
}
function Zf({ services: p }) {
  p.getRequired(pf).removeLayout(Kf);
}
const jy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: Vf,
  deactivate: Zf
}, Symbol.toStringTag, { value: "Module" })), hf = "org.eclipse.daanse.board.app.ui.vue.layouts.grid", Jy = "0.0.1-next.1";
async function lb(p) {
  const h = globalThis.__tsm__;
  if (!h)
    throw new Error(`${hf}: tsm runtime is not initialized`);
  h.register(hf, jy, Jy, "ui.vue.layouts.grid"), await Vf?.(p);
}
async function cb(p) {
  await Zf?.(p);
}
export {
  lb as activate,
  cb as deactivate
};
