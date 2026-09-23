(function(){var i="ui.vue.layouts.grid",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".scroll[data-v-a0615a07]{overflow-y:auto}.view_grid_layout[data-v-a0615a07]{padding-left:60px}.vgl-layout[data-v-a0615a07]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-a0615a07]:before{display:none}[data-v-a0615a07] .vgl-item--resizing{opacity:90%}[data-v-a0615a07] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-a0615a07]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.alayout[data-v-df592d77]{padding-left:60px}.vgl-layout[data-v-df592d77]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-df592d77]:before{position:absolute;width:calc(100% - 5px);height:calc(100% - 5px);margin:5px;content:\"\";background-image:linear-gradient(to right,var(--color-divider) 1px,transparent 1px),linear-gradient(to bottom,var(--color-divider) 1px,transparent 1px);background-repeat:repeat;background-size:calc(calc(100% - 5px) / var(--grid-cols, 12)) calc(var(--grid-row-height, 30px) + 10px)}[data-v-df592d77] .vgl-item--placeholder{outline:2px dashed var(--color-outline);background-color:#88888826}[data-v-df592d77] .vgl-item--resizing{opacity:90%}[data-v-df592d77] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-df592d77]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.invisible-dropzone[data-v-df592d77]{position:absolute;inset:0;z-index:1000;pointer-events:auto}.invisible-dropzone[data-v-df592d77]>*{opacity:0}.widget-item-wrapper[data-v-df592d77]{width:100%;height:100%}.dropdown-buttons-container[data-v-df592d77]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.widget-context-menu[data-v-df592d77],.canvas-context-menu[data-v-df592d77]{position:fixed;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);padding:4px;box-shadow:var(--shadow-e2);z-index:100000}.menu__item[data-v-df592d77]{justify-content:flex-start;gap:7px;white-space:nowrap}.scroll[data-v-df592d77]{overflow-y:auto}\n";})();
import { LAYOUT_REPOSITORY as mf } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { defineComponent as Ia, inject as Qi, shallowRef as c0, reactive as eo, ref as at, toRef as f0, onBeforeMount as yf, onMounted as Ra, watchEffect as d0, onBeforeUnmount as _u, computed as ht, watch as je, createElementBlock as zn, openBlock as Ft, normalizeStyle as Vi, normalizeClass as mc, renderSlot as mu, createCommentVNode as yu, unref as ut, getCurrentScope as h0, onScopeDispose as p0, nextTick as qt, provide as yc, toRefs as bc, withDirectives as bf, Fragment as g0, renderList as v0, createBlock as to, mergeProps as m0, withCtx as oi, createVNode as ni, vShow as xf, createElementVNode as wa, isRef as y0, toDisplayString as $i, withModifiers as xc, createTextVNode as wc } from "vue";
import { plainSettings as Ea, useBoard as wf, useTranslation as b0 } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetWrapper as _f, defaultConfig as x0 } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as Sf } from "vue-router";
import { identifier as Ef } from "org.eclipse.daanse.board.app.lib.api.page";
import _0 from "vuedraggable";
import { useClipboardStore as S0 } from "org.eclipse.daanse.board.app.ui.vue.layouts.base";
import { DButton as _c, DIcon as Sc } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { BasicEObject as Tf, BasicEFactory as E0, BasicEPackage as T0, EPackageRegistry as O0, BasicEClass as Ec, BasicEAttribute as ei, BasicEReference as I0, getEcorePackage as ti } from "@emfts/core";
import { component as R0 } from "@eclipse-daanse/tsm";
const { identifiers: w0 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), M0 = typeof window < "u";
var Tc;
M0 && ((Tc = window?.navigator) != null && Tc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Qt(h) {
  return h == null;
}
function Of() {
}
const C0 = Object.freeze({
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
Object.freeze(new Set(Object.keys(C0)));
function A0() {
  const h = /* @__PURE__ */ new Map();
  return {
    on(d, l) {
      const y = h.get(d);
      y?.add(l) || h.set(d, /* @__PURE__ */ new Set([l]));
    },
    off(d, l) {
      const y = h.get(d);
      y && y.delete(l);
    },
    clear(d) {
      const l = h.get(d);
      l && l.clear();
    },
    clearAll() {
      h.clear();
    },
    emit(d, ...l) {
      const y = h.get(d);
      y && y.forEach((M) => {
        M(...l);
      });
    }
  };
}
function Oc(h, d = 16) {
  if (typeof h != "function")
    return Of;
  const l = (...O) => {
    h(...O);
  };
  if (d <= 0)
    return If(l);
  let y = 0, M;
  return function(...O) {
    const k = Date.now(), L = k - y;
    clearTimeout(M), L >= d ? (y = k, l(...O)) : M = setTimeout(
      () => {
        y = Date.now(), l(...O);
      },
      Math.max(0, d - L)
    );
  };
}
function D0(h, d = 100) {
  if (typeof h != "function")
    return Of;
  const l = (...M) => {
    h(...M);
  };
  if (d <= 0)
    return If(l);
  let y;
  return function(...M) {
    clearTimeout(y), y = setTimeout(() => {
      l(...M);
    }, d);
  };
}
function If(h) {
  if (typeof h != "function")
    return h;
  let d = !1, l, y;
  return function(...M) {
    return l = M, d || (d = !0, y = Promise.resolve().then(() => (d = !1, y = void 0, h(...l)))), y;
  };
}
const ji = /* @__PURE__ */ new Set(), Rf = /* @__PURE__ */ new WeakMap();
function z0() {
  ji.forEach((h) => {
    h(...Rf.get(h));
  }), ji.clear();
}
function Lt(h, ...d) {
  if (typeof h != "function")
    return h;
  Rf.set(h, d), !ji.has(h) && (ji.add(h), ji.size === 1 && Promise.resolve().then(z0));
}
const Mf = Symbol("LAYOUT_KEY"), Cf = Symbol("EMITTER_KEY");
function P0(h) {
  let d = 0, l;
  for (let y = 0, M = h.length; y < M; y++)
    l = h[y].y + h[y].h, l > d && (d = l);
  return d;
}
function bu(h) {
  const d = Array(h.length);
  for (let l = 0, y = h.length; l < y; l++)
    d[l] = L0(h[l]);
  return d;
}
function L0(h) {
  return { ...h };
}
function Af(h, d) {
  return !(h === d || h.x + h.w <= d.x || h.x >= d.x + d.w || h.y + h.h <= d.y || h.y >= d.y + d.h);
}
function ri(h, d, l) {
  const y = zf(h), M = Pf(h), O = Array(h.length);
  for (let k = 0, L = M.length; k < L; k++) {
    let E = M[k];
    E.static || (E = k0(y, E, d, l), y.push(E)), O[h.findIndex((K) => K.i === E.i)] = E, E.moved = !1;
  }
  return O;
}
function k0(h, d, l, y) {
  if (l)
    for (; d.y > 0 && !Zi(h, d); )
      d.y--;
  else if (y) {
    const O = y[d.i].y;
    for (; d.y > O && !Zi(h, d); )
      d.y--;
  }
  let M;
  for (; M = Zi(h, d); )
    d.y = M.y + M.h;
  return d;
}
function F0(h, d) {
  const l = zf(h);
  for (let y = 0, M = h.length; y < M; y++) {
    const O = h[y];
    if (O.x + O.w > d.cols && (O.x = d.cols - O.w), O.x < 0 && (O.x = 0, O.w = d.cols), !O.static) l.push(O);
    else
      for (; Zi(l, O); )
        O.y++;
  }
  return h;
}
function Ic(h, d) {
  for (let l = 0, y = h.length; l < y; l++)
    if (h[l].i === d) return h[l];
}
function Zi(h, d) {
  for (let l = 0, y = h.length; l < y; l++)
    if (Af(h[l], d)) return h[l];
}
function Df(h, d) {
  return h.filter((l) => Af(l, d));
}
function zf(h) {
  return h.filter((d) => d.static);
}
function xu(h, d, l, y, M = !1, O = !1) {
  if (d.static) return h;
  const k = d.x, L = d.y, E = y && d.y > y;
  typeof l == "number" && (d.x = l), typeof y == "number" && (d.y = y), d.moved = !0;
  let K = Pf(h);
  E && (K = K.reverse());
  const he = Df(K, d);
  if (O && he.length)
    return d.x = k, d.y = L, d.moved = !1, h;
  for (let ee = 0, ke = he.length; ee < ke; ee++) {
    const ue = he[ee];
    ue.moved || d.y > ue.y && d.y - ue.y > ue.h / 4 || (ue.static ? h = Rc(h, ue, d, M) : h = Rc(h, d, ue, M));
  }
  return h;
}
function Rc(h, d, l, y) {
  if (y) {
    const M = {
      x: l.x,
      y: l.y,
      w: l.w,
      h: l.h
    };
    if (M.y = Math.max(d.y - l.h, 0), !Zi(h, M))
      return xu(h, l, void 0, M.y, !1);
  }
  return xu(h, l, void 0, l.y + 1, !1);
}
function N0(h, d, l, y) {
  const M = "translate3d(" + d + "px," + h + "px, 0)";
  return {
    transform: M,
    WebkitTransform: M,
    MozTransform: M,
    msTransform: M,
    OTransform: M,
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function B0(h, d, l, y) {
  const M = "translate3d(" + d * -1 + "px," + h + "px, 0)";
  return {
    transform: M,
    WebkitTransform: M,
    MozTransform: M,
    msTransform: M,
    OTransform: M,
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function W0(h, d, l, y) {
  return {
    top: h + "px",
    left: d + "px",
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function U0(h, d, l, y) {
  return {
    top: h + "px",
    right: d + "px",
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function Pf(h) {
  return Array.from(h).sort(function(d, l) {
    return d.y === l.y && d.x === l.x ? 0 : d.y > l.y || d.y === l.y && d.x > l.x ? 1 : -1;
  });
}
function H0(h, d) {
  d = d || "Layout";
  const l = ["x", "y", "w", "h"], y = [];
  if (!Array.isArray(h)) throw new Error(d + " must be an array!");
  for (let M = 0, O = h.length; M < O; M++) {
    const k = h[M];
    for (let L = 0; L < l.length; L++)
      if (typeof k[l[L]] != "number")
        throw new Error(
          "VueGridLayout: " + d + "[" + M + "]." + l[L] + " must be a number!"
        );
    if (k.i === void 0 || k.i === null)
      throw new Error("VueGridLayout: " + d + "[" + M + "].i cannot be null!");
    if (typeof k.i != "number" && typeof k.i != "string")
      throw new Error("VueGridLayout: " + d + "[" + M + "].i must be a string or number!");
    if (y.indexOf(k.i) >= 0)
      throw new Error("VueGridLayout: " + d + "[" + M + "].i must be unique!");
    if (y.push(k.i), k.static !== void 0 && typeof k.static != "boolean")
      throw new Error("VueGridLayout: " + d + "[" + M + "].static must be a boolean!");
  }
}
function G0(h, d = "vgl") {
  const l = () => `${d}-${h}`;
  return {
    b: l,
    be: (y) => `${l()}__${y}`,
    bm: (y) => `${l()}--${y}`,
    bem: (y, M) => `${l()}__${y}--${M}`
  };
}
function Mc(h) {
  return q0(h);
}
function q0(h) {
  var d;
  const l = ((d = h.target) == null ? void 0 : d.offsetParent) || document.body, y = h.offsetParent === document.body ? { left: 0, top: 0 } : l.getBoundingClientRect(), M = h.clientX + l.scrollLeft - y.left, O = h.clientY + l.scrollTop - y.top;
  return { x: M, y: O };
}
function Cc(h, d, l, y) {
  return X0(h) ? {
    deltaX: l - h,
    deltaY: y - d,
    lastX: h,
    lastY: d,
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
function X0(h) {
  return typeof h == "number" && !Number.isNaN(h);
}
function $0(h, d) {
  const l = kf(h);
  let y = l[0];
  for (let M = 1, O = l.length; M < O; M++) {
    const k = l[M];
    d > h[k] && (y = k);
  }
  return y;
}
function Lf(h, d) {
  if (!d[h])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + h + " is missing!"
    );
  return d[h];
}
function Y0(h, d, l, y, M, O, k) {
  if (d[y]) return bu(d[y]);
  let L = h;
  const E = kf(l), K = E.slice(E.indexOf(y));
  for (let he = 0, ee = K.length; he < ee; he++) {
    const ke = K[he];
    if (d[ke]) {
      L = d[ke];
      break;
    }
  }
  return L = bu(L || []), ri(F0(L, { cols: O }), k);
}
function kf(h) {
  return Object.keys(h).sort((d, l) => h[d] - h[l]);
}
let K0 = "auto";
function V0() {
  return typeof document < "u";
}
function Ac() {
  return V0() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : K0;
}
var or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ff(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var Yi = { exports: {} }, j0 = Yi.exports, Dc;
function Z0() {
  return Dc || (Dc = 1, (function(h, d) {
    (function(l, y) {
      h.exports = y();
    })(j0, (function() {
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
      function M(r) {
        return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
          return typeof n;
        } : function(n) {
          return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, M(r);
      }
      function O(r, n) {
        if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function k(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, Xe(a.key), a);
        }
      }
      function L(r, n, o) {
        return n && k(r.prototype, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
      }
      function E(r, n, o) {
        return (n = Xe(n)) in r ? Object.defineProperty(r, n, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = o, r;
      }
      function K(r, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(n && n.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), n && ee(r, n);
      }
      function he(r) {
        return he = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }, he(r);
      }
      function ee(r, n) {
        return ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, a) {
          return o.__proto__ = a, o;
        }, ee(r, n);
      }
      function ke(r) {
        if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function ue(r) {
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
          var o, a = he(r);
          if (n) {
            var u = he(this).constructor;
            o = Reflect.construct(a, arguments, u);
          } else o = a.apply(this, arguments);
          return (function(c, p) {
            if (p && (typeof p == "object" || typeof p == "function")) return p;
            if (p !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return ke(c);
          })(this, o);
        };
      }
      function ve() {
        return ve = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(r, n, o) {
          var a = (function(c, p) {
            for (; !Object.prototype.hasOwnProperty.call(c, p) && (c = he(c)) !== null; ) ;
            return c;
          })(r, n);
          if (a) {
            var u = Object.getOwnPropertyDescriptor(a, n);
            return u.get ? u.get.call(arguments.length < 3 ? r : o) : u.value;
          }
        }, ve.apply(this, arguments);
      }
      function Xe(r) {
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
      var Ne = function(r) {
        return !(!r || !r.Window) && r instanceof r.Window;
      }, We = void 0, Se = void 0;
      function Oe(r) {
        We = r;
        var n = r.document.createTextNode("");
        n.ownerDocument !== r.document && typeof r.wrap == "function" && r.wrap(n) === n && (r = r.wrap(r)), Se = r;
      }
      function Ie(r) {
        return Ne(r) ? r : (r.ownerDocument || r).defaultView || Se.window;
      }
      typeof window < "u" && window && Oe(window);
      var we = function(r) {
        return !!r && M(r) === "object";
      }, ye = function(r) {
        return typeof r == "function";
      }, D = { window: function(r) {
        return r === Se || Ne(r);
      }, docFrag: function(r) {
        return we(r) && r.nodeType === 11;
      }, object: we, func: ye, number: function(r) {
        return typeof r == "number";
      }, bool: function(r) {
        return typeof r == "boolean";
      }, string: function(r) {
        return typeof r == "string";
      }, element: function(r) {
        if (!r || M(r) !== "object") return !1;
        var n = Ie(r) || Se;
        return /object|function/.test(typeof Element > "u" ? "undefined" : M(Element)) ? r instanceof Element || r instanceof n.Element : r.nodeType === 1 && typeof r.nodeName == "string";
      }, plainObject: function(r) {
        return we(r) && !!r.constructor && /function Object\b/.test(r.constructor.toString());
      }, array: function(r) {
        return we(r) && r.length !== void 0 && ye(r.splice);
      } };
      function _e(r) {
        var n = r.interaction;
        if (n.prepared.name === "drag") {
          var o = n.prepared.axis;
          o === "x" ? (n.coords.cur.page.y = n.coords.start.page.y, n.coords.cur.client.y = n.coords.start.client.y, n.coords.velocity.client.y = 0, n.coords.velocity.page.y = 0) : o === "y" && (n.coords.cur.page.x = n.coords.start.page.x, n.coords.cur.client.x = n.coords.start.client.x, n.coords.velocity.client.x = 0, n.coords.velocity.page.x = 0);
        }
      }
      function ze(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "drag") {
          var a = o.prepared.axis;
          if (a === "x" || a === "y") {
            var u = a === "x" ? "y" : "x";
            n.page[u] = o.coords.start.page[u], n.client[u] = o.coords.start.client[u], n.delta[u] = 0;
          }
        }
      }
      var lt = { id: "actions/drag", install: function(r) {
        var n = r.actions, o = r.Interactable, a = r.defaults;
        o.prototype.draggable = lt.draggable, n.map.drag = lt, n.methodDict.drag = "draggable", a.actions.drag = lt.defaults;
      }, listeners: { "interactions:before-action-move": _e, "interactions:action-resume": _e, "interactions:action-move": ze, "auto-start:check": function(r) {
        var n = r.interaction, o = r.interactable, a = r.buttons, u = o.options.drag;
        if (u && u.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || (a & o.options.drag.mouseButtons) != 0)) return r.action = { name: "drag", axis: u.lockAxis === "start" ? u.startAxis : u.lockAxis }, !1;
      } }, draggable: function(r) {
        return D.object(r) ? (this.options.drag.enabled = r.enabled !== !1, this.setPerAction("drag", r), this.setOnEvents("drag", r), /^(xy|x|y|start)$/.test(r.lockAxis) && (this.options.drag.lockAxis = r.lockAxis), /^(xy|x|y)$/.test(r.startAxis) && (this.options.drag.startAxis = r.startAxis), this) : D.bool(r) ? (this.options.drag.enabled = r, this) : this.options.drag;
      }, beforeMove: _e, move: ze, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(r) {
        return r.search("drag") === 0;
      } }, Y = lt, oe = { init: function(r) {
        var n = r;
        oe.document = n.document, oe.DocumentFragment = n.DocumentFragment || ne, oe.SVGElement = n.SVGElement || ne, oe.SVGSVGElement = n.SVGSVGElement || ne, oe.SVGElementInstance = n.SVGElementInstance || ne, oe.Element = n.Element || ne, oe.HTMLElement = n.HTMLElement || oe.Element, oe.Event = n.Event, oe.Touch = n.Touch || ne, oe.PointerEvent = n.PointerEvent || n.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function ne() {
      }
      var be = oe, fe = { init: function(r) {
        var n = be.Element, o = r.navigator || {};
        fe.supportsTouch = "ontouchstart" in r || D.func(r.DocumentTouch) && be.document instanceof r.DocumentTouch, fe.supportsPointerEvent = o.pointerEnabled !== !1 && !!be.PointerEvent, fe.isIOS = /iP(hone|od|ad)/.test(o.platform), fe.isIOS7 = /iP(hone|od|ad)/.test(o.platform) && /OS 7[^\d]/.test(o.appVersion), fe.isIe9 = /MSIE 9/.test(o.userAgent), fe.isOperaMobile = o.appName === "Opera" && fe.supportsTouch && /Presto/.test(o.userAgent), fe.prefixedMatchesSelector = "matches" in n.prototype ? "matches" : "webkitMatchesSelector" in n.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in n.prototype ? "mozMatchesSelector" : "oMatchesSelector" in n.prototype ? "oMatchesSelector" : "msMatchesSelector", fe.pEventTypes = fe.supportsPointerEvent ? be.PointerEvent === r.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, fe.wheelEvent = be.document && "onmousewheel" in be.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, Re = fe;
      function ae(r, n) {
        if (r.contains) return r.contains(n);
        for (; n; ) {
          if (n === r) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      function Ze(r, n) {
        for (; D.element(r); ) {
          if (Ke(r, n)) return r;
          r = Ge(r);
        }
        return null;
      }
      function Ge(r) {
        var n = r.parentNode;
        if (D.docFrag(n)) {
          for (; (n = n.host) && D.docFrag(n); ) ;
          return n;
        }
        return n;
      }
      function Ke(r, n) {
        return Se !== We && (n = n.replace(/\/deep\//g, " ")), r[Re.prefixedMatchesSelector](n);
      }
      var Me = function(r) {
        return r.parentNode || r.host;
      };
      function Nt(r, n) {
        for (var o, a = [], u = r; (o = Me(u)) && u !== n && o !== u.ownerDocument; ) a.unshift(u), u = o;
        return a;
      }
      function pt(r, n, o) {
        for (; D.element(r); ) {
          if (Ke(r, n)) return !0;
          if ((r = Ge(r)) === o) return Ke(r, n);
        }
        return !1;
      }
      function Pn(r) {
        return r.correspondingUseElement || r;
      }
      function ct(r) {
        var n = r instanceof be.SVGElement ? r.getBoundingClientRect() : r.getClientRects()[0];
        return n && { left: n.left, right: n.right, top: n.top, bottom: n.bottom, width: n.width || n.right - n.left, height: n.height || n.bottom - n.top };
      }
      function Je(r) {
        var n, o = ct(r);
        if (!Re.isIOS7 && o) {
          var a = { x: (n = (n = Ie(r)) || Se).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
          o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
        }
        return o;
      }
      function pn(r) {
        for (var n = []; r; ) n.push(r), r = Ge(r);
        return n;
      }
      function _t(r) {
        return !!D.string(r) && (be.document.querySelector(r), !0);
      }
      function Q(r, n) {
        for (var o in n) r[o] = n[o];
        return r;
      }
      function Xt(r, n, o) {
        return r === "parent" ? Ge(o) : r === "self" ? n.getRect(o) : Ze(o, r);
      }
      function Ot(r, n, o, a) {
        var u = r;
        return D.string(u) ? u = Xt(u, n, o) : D.func(u) && (u = u.apply(void 0, a)), D.element(u) && (u = Je(u)), u;
      }
      function St(r) {
        return r && { x: "x" in r ? r.x : r.left, y: "y" in r ? r.y : r.top };
      }
      function en(r) {
        return !r || "x" in r && "y" in r || ((r = Q({}, r)).x = r.left || 0, r.y = r.top || 0, r.width = r.width || (r.right || 0) - r.x, r.height = r.height || (r.bottom || 0) - r.y), r;
      }
      function nt(r, n, o) {
        r.left && (n.left += o.x), r.right && (n.right += o.x), r.top && (n.top += o.y), r.bottom && (n.bottom += o.y), n.width = n.right - n.left, n.height = n.bottom - n.top;
      }
      function It(r, n, o) {
        var a = o && r.options[o];
        return St(Ot(a && a.origin || r.options.origin, r, n, [r && n])) || { x: 0, y: 0 };
      }
      function $t(r, n) {
        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(b) {
          return !0;
        }, a = arguments.length > 3 ? arguments[3] : void 0;
        if (a = a || {}, D.string(r) && r.search(" ") !== -1 && (r = mt(r)), D.array(r)) return r.forEach((function(b) {
          return $t(b, n, o, a);
        })), a;
        if (D.object(r) && (n = r, r = ""), D.func(n) && o(r)) a[r] = a[r] || [], a[r].push(n);
        else if (D.array(n)) for (var u = 0, c = n; u < c.length; u++) {
          var p = c[u];
          $t(r, p, o, a);
        }
        else if (D.object(n)) for (var v in n)
          $t(mt(v).map((function(b) {
            return "".concat(r).concat(b);
          })), n[v], o, a);
        return a;
      }
      function mt(r) {
        return r.trim().split(/ +/);
      }
      var Yt = function(r, n) {
        return Math.sqrt(r * r + n * n);
      }, ar = ["webkit", "moz"];
      function Rt(r, n) {
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
      function st(r, n) {
        r.page = r.page || {}, r.page.x = n.page.x, r.page.y = n.page.y, r.client = r.client || {}, r.client.x = n.client.x, r.client.y = n.client.y, r.timeStamp = n.timeStamp;
      }
      function X(r) {
        r.page.x = 0, r.page.y = 0, r.client.x = 0, r.client.y = 0;
      }
      function z(r) {
        return r instanceof be.Event || r instanceof be.Touch;
      }
      function q(r, n, o) {
        return r = r || "page", (o = o || {}).x = n[r + "X"], o.y = n[r + "Y"], o;
      }
      function te(r, n) {
        return n = n || { x: 0, y: 0 }, Re.isOperaMobile && z(r) ? (q("screen", r, n), n.x += window.scrollX, n.y += window.scrollY) : q("page", r, n), n;
      }
      function pe(r) {
        return D.number(r.pointerId) ? r.pointerId : r.identifier;
      }
      function Ae(r, n, o) {
        var a = n.length > 1 ? re(n) : n[0];
        te(a, r.page), (function(u, c) {
          c = c || {}, Re.isOperaMobile && z(u) ? q("screen", u, c) : q("client", u, c);
        })(a, r.client), r.timeStamp = o;
      }
      function J(r) {
        var n = [];
        return D.array(r) ? (n[0] = r[0], n[1] = r[1]) : r.type === "touchend" ? r.touches.length === 1 ? (n[0] = r.touches[0], n[1] = r.changedTouches[0]) : r.touches.length === 0 && (n[0] = r.changedTouches[0], n[1] = r.changedTouches[1]) : (n[0] = r.touches[0], n[1] = r.touches[1]), n;
      }
      function re(r) {
        for (var n = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, o = 0; o < r.length; o++) {
          var a = r[o];
          for (var u in n) n[u] += a[u];
        }
        for (var c in n) n[c] /= r.length;
        return n;
      }
      function Qe(r) {
        if (!r.length) return null;
        var n = J(r), o = Math.min(n[0].pageX, n[1].pageX), a = Math.min(n[0].pageY, n[1].pageY), u = Math.max(n[0].pageX, n[1].pageX), c = Math.max(n[0].pageY, n[1].pageY);
        return { x: o, y: a, left: o, top: a, right: u, bottom: c, width: u - o, height: c - a };
      }
      function rt(r, n) {
        var o = n + "X", a = n + "Y", u = J(r), c = u[0][o] - u[1][o], p = u[0][a] - u[1][a];
        return Yt(c, p);
      }
      function yt(r, n) {
        var o = n + "X", a = n + "Y", u = J(r), c = u[1][o] - u[0][o], p = u[1][a] - u[0][a];
        return 180 * Math.atan2(p, c) / Math.PI;
      }
      function tn(r) {
        return D.string(r.pointerType) ? r.pointerType : D.number(r.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][r.pointerType] : /touch/.test(r.type || "") || r instanceof be.Touch ? "touch" : "mouse";
      }
      function nn(r) {
        var n = D.func(r.composedPath) ? r.composedPath() : r.path;
        return [Pn(n ? n[0] : r.target), Pn(r.currentTarget)];
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
      var Sn = function(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          r.push(a);
        }
        return r;
      }, En = function(r) {
        return Sn([], r);
      }, gn = function(r, n) {
        for (var o = 0; o < r.length; o++) if (n(r[o], o, r)) return o;
        return -1;
      }, sr = function(r, n) {
        return r[gn(r, n)];
      }, Kn = (function(r) {
        K(o, r);
        var n = ue(o);
        function o(a, u, c) {
          var p;
          O(this, o), (p = n.call(this, u._interaction)).dropzone = void 0, p.dragEvent = void 0, p.relatedTarget = void 0, p.draggable = void 0, p.propagationStopped = !1, p.immediatePropagationStopped = !1;
          var v = c === "dragleave" ? a.prev : a.cur, b = v.element, S = v.dropzone;
          return p.type = c, p.target = b, p.currentTarget = b, p.dropzone = S, p.dragEvent = u, p.relatedTarget = u.target, p.draggable = u.interactable, p.timeStamp = u.timeStamp, p;
        }
        return L(o, [{ key: "reject", value: function() {
          var a = this, u = this._interaction.dropState;
          if (this.type === "dropactivate" || this.dropzone && u.cur.dropzone === this.dropzone && u.cur.element === this.target) if (u.prev.dropzone = this.dropzone, u.prev.element = this.target, u.rejected = !0, u.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var c = u.activeDrops, p = gn(c, (function(b) {
              var S = b.dropzone, x = b.element;
              return S === a.dropzone && x === a.target;
            }));
            u.activeDrops.splice(p, 1);
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
          var u = a[o], c = u.dropzone, p = u.element;
          n.dropzone = c, n.target = p, c.fire(n), n.propagationStopped = n.immediatePropagationStopped = !1;
        }
      }
      function Ar(r, n) {
        for (var o = (function(c, p) {
          for (var v = [], b = 0, S = c.interactables.list; b < S.length; b++) {
            var x = S[b];
            if (x.options.drop.enabled) {
              var I = x.options.drop.accept;
              if (!(D.element(I) && I !== p || D.string(I) && !Ke(p, I) || D.func(I) && !I({ dropzone: x, draggableElement: p }))) for (var P = 0, H = x.getAllElements(); P < H.length; P++) {
                var W = H[P];
                W !== p && v.push({ dropzone: x, element: W, rect: x.getRect(W) });
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
      function ro(r, n, o) {
        for (var a = r.dropState, u = r.interactable, c = r.element, p = [], v = 0, b = a.activeDrops; v < b.length; v++) {
          var S = b[v], x = S.dropzone, I = S.element, P = S.rect, H = x.dropCheck(n, o, u, c, I, P);
          p.push(H ? I : null);
        }
        var W = (function(G) {
          for (var Z, V, w, A = [], R = 0; R < G.length; R++) {
            var F = G[R], $ = G[Z];
            if (F && R !== Z) if ($) {
              var ge = Me(F), me = Me($);
              if (ge !== F.ownerDocument) if (me !== F.ownerDocument) if (ge !== me) {
                A = A.length ? A : Nt($);
                var Ee = void 0;
                if ($ instanceof be.HTMLElement && F instanceof be.SVGElement && !(F instanceof be.SVGSVGElement)) {
                  if (F === me) continue;
                  Ee = F.ownerSVGElement;
                } else Ee = F;
                for (var At = Nt(Ee, $.ownerDocument), bn = 0; At[bn] && At[bn] === A[bn]; ) bn++;
                var xt = [At[bn - 1], At[bn], A[bn]];
                if (xt[0]) for (var Rn = xt[0].lastChild; Rn; ) {
                  if (Rn === xt[1]) {
                    Z = R, A = At;
                    break;
                  }
                  if (Rn === xt[2]) break;
                  Rn = Rn.previousSibling;
                }
              } else w = $, (parseInt(Ie(V = F).getComputedStyle(V).zIndex, 10) || 0) >= (parseInt(Ie(w).getComputedStyle(w).zIndex, 10) || 0) && (Z = R);
              else Z = R;
            } else Z = R;
          }
          return Z;
        })(p);
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
      function io(r, n) {
        var o = r.interaction, a = r.iEvent, u = r.event;
        if (a.type === "dragmove" || a.type === "dragend") {
          var c = o.dropState;
          n.dynamicDrop && (c.activeDrops = Ar(n, o.element));
          var p = a, v = ro(o, p, u);
          c.rejected = c.rejected && !!v && v.dropzone === c.cur.dropzone && v.element === c.cur.element, c.cur.dropzone = v && v.dropzone, c.cur.element = v && v.element, c.events = ui(o, 0, p);
        }
      }
      var ci = { id: "actions/drop", install: function(r) {
        var n = r.actions, o = r.interactStatic, a = r.Interactable, u = r.defaults;
        r.usePlugin(Y), a.prototype.dropzone = function(c) {
          return (function(p, v) {
            if (D.object(v)) {
              if (p.options.drop.enabled = v.enabled !== !1, v.listeners) {
                var b = $t(v.listeners), S = Object.keys(b).reduce((function(I, P) {
                  return I[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = b[P], I;
                }), {}), x = p.options.drop.listeners;
                x && p.off(x), p.on(S), p.options.drop.listeners = S;
              }
              return D.func(v.ondrop) && p.on("drop", v.ondrop), D.func(v.ondropactivate) && p.on("dropactivate", v.ondropactivate), D.func(v.ondropdeactivate) && p.on("dropdeactivate", v.ondropdeactivate), D.func(v.ondragenter) && p.on("dragenter", v.ondragenter), D.func(v.ondragleave) && p.on("dragleave", v.ondragleave), D.func(v.ondropmove) && p.on("dropmove", v.ondropmove), /^(pointer|center)$/.test(v.overlap) ? p.options.drop.overlap = v.overlap : D.number(v.overlap) && (p.options.drop.overlap = Math.max(Math.min(1, v.overlap), 0)), "accept" in v && (p.options.drop.accept = v.accept), "checker" in v && (p.options.drop.checker = v.checker), p;
            }
            return D.bool(v) ? (p.options.drop.enabled = v, p) : p.options.drop;
          })(this, c);
        }, a.prototype.dropCheck = function(c, p, v, b, S, x) {
          return (function(I, P, H, W, G, Z, V) {
            var w = !1;
            if (!(V = V || I.getRect(Z))) return !!I.options.drop.checker && I.options.drop.checker(P, H, w, I, Z, W, G);
            var A = I.options.drop.overlap;
            if (A === "pointer") {
              var R = It(W, G, "drag"), F = te(P);
              F.x += R.x, F.y += R.y;
              var $ = F.x > V.left && F.x < V.right, ge = F.y > V.top && F.y < V.bottom;
              w = $ && ge;
            }
            var me = W.getRect(G);
            if (me && A === "center") {
              var Ee = me.left + me.width / 2, At = me.top + me.height / 2;
              w = Ee >= V.left && Ee <= V.right && At >= V.top && At <= V.bottom;
            }
            return me && D.number(A) && (w = Math.max(0, Math.min(V.right, me.right) - Math.max(V.left, me.left)) * Math.max(0, Math.min(V.bottom, me.bottom) - Math.max(V.top, me.top)) / (me.width * me.height) >= A), I.options.drop.checker && (w = I.options.drop.checker(P, H, w, I, Z, W, G)), w;
          })(this, c, p, v, b, S, x);
        }, o.dynamicDrop = function(c) {
          return D.bool(c) ? (r.dynamicDrop = c, o) : r.dynamicDrop;
        }, Q(n.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), n.methodDict.drop = "dropzone", r.dynamicDrop = !1, u.actions.drop = ci.defaults;
      }, listeners: { "interactions:before-action-start": function(r) {
        var n = r.interaction;
        n.prepared.name === "drag" && (n.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(r, n) {
        var o = r.interaction, a = (r.event, r.iEvent);
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          u.activeDrops = [], u.events = {}, u.activeDrops = Ar(n, o.element), u.events = ui(o, 0, a), u.events.activate && (si(u.activeDrops, u.events.activate), n.fire("actions/drop:start", { interaction: o, dragEvent: a }));
        }
      }, "interactions:action-move": io, "interactions:after-action-move": function(r, n) {
        var o = r.interaction, a = r.iEvent;
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          li(o, u.events), n.fire("actions/drop:move", { interaction: o, dragEvent: a }), u.events = {};
        }
      }, "interactions:action-end": function(r, n) {
        if (r.interaction.prepared.name === "drag") {
          var o = r.interaction, a = r.iEvent;
          io(r, n), li(o, o.dropState.events), n.fire("actions/drop:end", { interaction: o, dragEvent: a });
        }
      }, "interactions:stop": function(r) {
        var n = r.interaction;
        if (n.prepared.name === "drag") {
          var o = n.dropState;
          o && (o.activeDrops = null, o.events = null, o.cur.dropzone = null, o.cur.element = null, o.prev.dropzone = null, o.prev.element = null, o.rejected = !1);
        }
      } }, getActiveDrops: Ar, getDrop: ro, getDropEvents: ui, fireDropEvents: li, filterEventType: function(r) {
        return r.search("drag") === 0 || r.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, Ma = ci;
      function fi(r) {
        var n = r.interaction, o = r.iEvent, a = r.phase;
        if (n.prepared.name === "gesture") {
          var u = n.pointers.map((function(S) {
            return S.pointer;
          })), c = a === "start", p = a === "end", v = n.interactable.options.deltaSource;
          if (o.touches = [u[0], u[1]], c) o.distance = rt(u, v), o.box = Qe(u), o.scale = 1, o.ds = 0, o.angle = yt(u, v), o.da = 0, n.gesture.startDistance = o.distance, n.gesture.startAngle = o.angle;
          else if (p || n.pointers.length < 2) {
            var b = n.prevEvent;
            o.distance = b.distance, o.box = b.box, o.scale = b.scale, o.ds = 0, o.angle = b.angle, o.da = 0;
          } else o.distance = rt(u, v), o.box = Qe(u), o.scale = o.distance / n.gesture.startDistance, o.angle = yt(u, v), o.ds = o.scale - n.gesture.scale, o.da = o.angle - n.gesture.angle;
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
      function Ca(r, n, o, a, u, c, p) {
        if (!n) return !1;
        if (n === !0) {
          var v = D.number(c.width) ? c.width : c.right - c.left, b = D.number(c.height) ? c.height : c.bottom - c.top;
          if (p = Math.min(p, Math.abs((r === "left" || r === "right" ? v : b) / 2)), v < 0 && (r === "left" ? r = "right" : r === "right" && (r = "left")), b < 0 && (r === "top" ? r = "bottom" : r === "bottom" && (r = "top")), r === "left") {
            var S = v >= 0 ? c.left : c.right;
            return o.x < S + p;
          }
          if (r === "top") {
            var x = b >= 0 ? c.top : c.bottom;
            return o.y < x + p;
          }
          if (r === "right") return o.x > (v >= 0 ? c.right : c.left) - p;
          if (r === "bottom") return o.y > (b >= 0 ? c.bottom : c.top) - p;
        }
        return !!D.element(a) && (D.element(n) ? n === a : pt(a, n, u));
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
          return (function(p, v, b) {
            return D.object(v) ? (p.options.resize.enabled = v.enabled !== !1, p.setPerAction("resize", v), p.setOnEvents("resize", v), D.string(v.axis) && /^x$|^y$|^xy$/.test(v.axis) ? p.options.resize.axis = v.axis : v.axis === null && (p.options.resize.axis = b.defaults.actions.resize.axis), D.bool(v.preserveAspectRatio) ? p.options.resize.preserveAspectRatio = v.preserveAspectRatio : D.bool(v.square) && (p.options.resize.square = v.square), p) : D.bool(v) ? (p.options.resize.enabled = v, p) : p.options.resize;
          })(this, c, r);
        }, n.map.resize = mn, n.methodDict.resize = "resizable", u.actions.resize = mn.defaults;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(r) {
        (function(n) {
          var o = n.iEvent, a = n.interaction;
          if (a.prepared.name === "resize" && a.prepared.edges) {
            var u = o, c = a.rect;
            a._rects = { start: Q({}, c), corrected: Q({}, c), previous: Q({}, c), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, u.edges = a.prepared.edges, u.rect = a._rects.corrected, u.deltaRect = a._rects.delta;
          }
        })(r), Dr(r);
      }, "interactions:action-move": function(r) {
        (function(n) {
          var o = n.iEvent, a = n.interaction;
          if (a.prepared.name === "resize" && a.prepared.edges) {
            var u = o, c = a.interactable.options.resize.invert, p = c === "reposition" || c === "negate", v = a.rect, b = a._rects, S = b.start, x = b.corrected, I = b.delta, P = b.previous;
            if (Q(P, x), p) {
              if (Q(x, v), c === "reposition") {
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
            for (var G in x.width = x.right - x.left, x.height = x.bottom - x.top, x) I[G] = x[G] - P[G];
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
          var p = Q({}, n.coords.cur.page), v = o.options.resize;
          if (v && v.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || (c & v.mouseButtons) != 0)) {
            if (D.object(v.edges)) {
              var b = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var S in b) b[S] = Ca(S, v.edges[S], p, n._latestPointer.eventTarget, a, u, v.margin || mn.defaultMargin);
              b.left = b.left && !b.right, b.top = b.top && !b.bottom, (b.left || b.right || b.top || b.bottom) && (r.action = { name: "resize", edges: b });
            } else {
              var x = v.axis !== "y" && p.x > u.right - mn.defaultMargin, I = v.axis !== "x" && p.y > u.bottom - mn.defaultMargin;
              (x || I) && (r.action = { name: "resize", axes: (x ? "x" : "") + (I ? "y" : "") });
            }
            return !r.action && void 0;
          }
        }
      } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(r) {
        var n = r.edges, o = r.axis, a = r.name, u = mn.cursors, c = null;
        if (o) c = u[a + o];
        else if (n) {
          for (var p = "", v = 0, b = ["top", "bottom", "left", "right"]; v < b.length; v++) {
            var S = b[v];
            n[S] && (p += S);
          }
          c = u[p];
        }
        return c;
      }, filterEventType: function(r) {
        return r.search("resize") === 0;
      }, defaultMargin: null }, Aa = mn, Da = { id: "actions", install: function(r) {
        r.usePlugin(hi), r.usePlugin(Aa), r.usePlugin(Y), r.usePlugin(Ma);
      } }, oo = 0, Tn = { request: function(r) {
        return vn(r);
      }, cancel: function(r) {
        return Ln(r);
      }, init: function(r) {
        if (vn = r.requestAnimationFrame, Ln = r.cancelAnimationFrame, !vn) for (var n = ["ms", "moz", "webkit", "o"], o = 0; o < n.length; o++) {
          var a = n[o];
          vn = r["".concat(a, "RequestAnimationFrame")], Ln = r["".concat(a, "CancelAnimationFrame")] || r["".concat(a, "CancelRequestAnimationFrame")];
        }
        vn = vn && vn.bind(r), Ln = Ln && Ln.bind(r), vn || (vn = function(u) {
          var c = Date.now(), p = Math.max(0, 16 - (c - oo)), v = r.setTimeout((function() {
            u(c + p);
          }), p);
          return oo = c + p, v;
        }, Ln = function(u) {
          return clearTimeout(u);
        });
      } }, de = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(r) {
        de.isScrolling = !0, Tn.cancel(de.i), r.autoScroll = de, de.interaction = r, de.prevTime = de.now(), de.i = Tn.request(de.scroll);
      }, stop: function() {
        de.isScrolling = !1, de.interaction && (de.interaction.autoScroll = null), Tn.cancel(de.i);
      }, scroll: function() {
        var r = de.interaction, n = r.interactable, o = r.element, a = r.prepared.name, u = n.options[a].autoScroll, c = pi(u.container, n, o), p = de.now(), v = (p - de.prevTime) / 1e3, b = u.speed * v;
        if (b >= 1) {
          var S = { x: de.x * b, y: de.y * b };
          if (S.x || S.y) {
            var x = ao(c);
            D.window(c) ? c.scrollBy(S.x, S.y) : c && (c.scrollLeft += S.x, c.scrollTop += S.y);
            var I = ao(c), P = { x: I.x - x.x, y: I.y - x.y };
            (P.x || P.y) && n.fire({ type: "autoscroll", target: o, interactable: n, delta: P, interaction: r, container: c });
          }
          de.prevTime = p;
        }
        de.isScrolling && (Tn.cancel(de.i), de.i = Tn.request(de.scroll));
      }, check: function(r, n) {
        var o;
        return (o = r.options[n].autoScroll) == null ? void 0 : o.enabled;
      }, onInteractionMove: function(r) {
        var n = r.interaction, o = r.pointer;
        if (n.interacting() && de.check(n.interactable, n.prepared.name)) if (n.simulation) de.x = de.y = 0;
        else {
          var a, u, c, p, v = n.interactable, b = n.element, S = n.prepared.name, x = v.options[S].autoScroll, I = pi(x.container, v, b);
          if (D.window(I)) p = o.clientX < de.margin, a = o.clientY < de.margin, u = o.clientX > I.innerWidth - de.margin, c = o.clientY > I.innerHeight - de.margin;
          else {
            var P = ct(I);
            p = o.clientX < P.left + de.margin, a = o.clientY < P.top + de.margin, u = o.clientX > P.right - de.margin, c = o.clientY > P.bottom - de.margin;
          }
          de.x = u ? 1 : p ? -1 : 0, de.y = c ? 1 : a ? -1 : 0, de.isScrolling || (de.margin = x.margin, de.speed = x.speed, de.start(n));
        }
      } };
      function pi(r, n, o) {
        return (D.string(r) ? Xt(r, n, o) : r) || Ie(o);
      }
      function ao(r) {
        return D.window(r) && (r = window.document.body), { x: r.scrollLeft, y: r.scrollTop };
      }
      var za = { id: "auto-scroll", install: function(r) {
        var n = r.defaults, o = r.actions;
        r.autoScroll = de, de.now = function() {
          return r.now();
        }, o.phaselessTypes.autoscroll = !0, n.perAction.autoScroll = de.defaults;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.autoScroll = null;
      }, "interactions:destroy": function(r) {
        r.interaction.autoScroll = null, de.stop(), de.interaction && (de.interaction = null);
      }, "interactions:stop": de.stop, "interactions:action-move": function(r) {
        return de.onInteractionMove(r);
      } } }, Pa = za;
      function ur(r, n) {
        var o = !1;
        return function() {
          return o || (Se.console.warn(n), o = !0), r.apply(this, arguments);
        };
      }
      function gi(r, n) {
        return r.name = n.name, r.axis = n.axis, r.edges = n.edges, r;
      }
      function La(r) {
        return D.bool(r) ? (this.options.styleCursor = r, this) : r === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function zr(r) {
        return D.func(r) ? (this.options.actionChecker = r, this) : r === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var ka = { id: "auto-start/interactableMethods", install: function(r) {
        var n = r.Interactable;
        n.prototype.getAction = function(o, a, u, c) {
          var p = (function(v, b, S, x, I) {
            var P = v.getRect(x), H = b.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[b.button], W = { action: null, interactable: v, interaction: S, element: x, rect: P, buttons: H };
            return I.fire("auto-start:check", W), W.action;
          })(this, a, u, c, r);
          return this.options.actionChecker ? this.options.actionChecker(o, a, p, this, c, u) : p;
        }, n.prototype.ignoreFrom = ur((function(o) {
          return this._backCompatOption("ignoreFrom", o);
        }), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), n.prototype.allowFrom = ur((function(o) {
          return this._backCompatOption("allowFrom", o);
        }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), n.prototype.actionChecker = zr, n.prototype.styleCursor = La;
      } };
      function lr(r, n, o, a, u) {
        return n.testIgnoreAllow(n.options[r.name], o, a) && n.options[r.name].enabled && cr(n, o, r, u) ? r : null;
      }
      function Fa(r, n, o, a, u, c, p) {
        for (var v = 0, b = a.length; v < b; v++) {
          var S = a[v], x = u[v], I = S.getAction(n, o, r, x);
          if (I) {
            var P = lr(I, S, x, c, p);
            if (P) return { action: P, interactable: S, element: x };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function so(r, n, o, a, u) {
        var c = [], p = [], v = a;
        function b(x) {
          c.push(x), p.push(v);
        }
        for (; D.element(v); ) {
          c = [], p = [], u.interactables.forEachMatch(v, b);
          var S = Fa(r, n, o, c, p, a, u);
          if (S.action && !S.interactable.options[S.action.name].manualStart) return S;
          v = Ge(v);
        }
        return { action: null, interactable: null, element: null };
      }
      function uo(r, n, o) {
        var a = n.action, u = n.interactable, c = n.element;
        a = a || { name: null }, r.interactable = u, r.element = c, gi(r.prepared, a), r.rect = u && a.name ? u.getRect(c) : null, lo(r, o), o.fire("autoStart:prepared", { interaction: r });
      }
      function cr(r, n, o, a) {
        var u = r.options, c = u[o.name].max, p = u[o.name].maxPerElement, v = a.autoStart.maxInteractions, b = 0, S = 0, x = 0;
        if (!(c && p && v)) return !1;
        for (var I = 0, P = a.interactions.list; I < P.length; I++) {
          var H = P[I], W = H.prepared.name;
          if (H.interacting() && (++b >= v || H.interactable === r && ((S += W === o.name ? 1 : 0) >= c || H.element === n && (x++, W === o.name && x >= p))))
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
      function lo(r, n) {
        var o = r.interactable, a = r.element, u = r.prepared;
        if (r.pointerType === "mouse" && o && o.options.styleCursor) {
          var c = "";
          if (u.name) {
            var p = o.options[u.name].cursorChecker;
            c = D.func(p) ? p(u, o, a, r._interacting) : n.actions.map[u.name].getCursor(u);
          }
          Pr(r.element, c || "", n);
        } else n.autoStart.cursorElement && Pr(n.autoStart.cursorElement, "", n);
      }
      var Na = { id: "auto-start/base", before: ["actions"], install: function(r) {
        var n = r.interactStatic, o = r.defaults;
        r.usePlugin(ka), o.base.actionChecker = null, o.base.styleCursor = !0, Q(o.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), n.maxInteractions = function(a) {
          return vi(a, r);
        }, r.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: cr, cursorElement: null };
      }, listeners: { "interactions:down": function(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget;
        o.interacting() || uo(o, so(o, a, u, c, n), n);
      }, "interactions:move": function(r, n) {
        (function(o, a) {
          var u = o.interaction, c = o.pointer, p = o.event, v = o.eventTarget;
          u.pointerType !== "mouse" || u.pointerIsDown || u.interacting() || uo(u, so(u, c, p, v, a), a);
        })(r, n), (function(o, a) {
          var u = o.interaction;
          if (u.pointerIsDown && !u.interacting() && u.pointerWasMoved && u.prepared.name) {
            a.fire("autoStart:before-start", o);
            var c = u.interactable, p = u.prepared.name;
            p && c && (c.options[p].manualStart || !cr(c, u.element, u.prepared, a) ? u.stop() : (u.start(u.prepared, c, u.element), lo(u, a)));
          }
        })(r, n);
      }, "interactions:stop": function(r, n) {
        var o = r.interaction, a = o.interactable;
        a && a.options.styleCursor && Pr(o.element, "", n);
      } }, maxInteractions: vi, withinInteractionLimit: cr, validateAction: lr }, mi = Na, Ba = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(r, n) {
        var o = r.interaction, a = r.eventTarget, u = r.dx, c = r.dy;
        if (o.prepared.name === "drag") {
          var p = Math.abs(u), v = Math.abs(c), b = o.interactable.options.drag, S = b.startAxis, x = p > v ? "x" : p < v ? "y" : "xy";
          if (o.prepared.axis = b.lockAxis === "start" ? x[0] : b.lockAxis, x !== "xy" && S !== "xy" && S !== x) {
            o.prepared.name = null;
            for (var I = a, P = function(W) {
              if (W !== o.interactable) {
                var G = o.interactable.options.drag;
                if (!G.manualStart && W.testIgnoreAllow(G, I, a)) {
                  var Z = W.getAction(o.downPointer, o.downEvent, o, I);
                  if (Z && Z.name === "drag" && (function(V, w) {
                    if (!w) return !1;
                    var A = w.options.drag.startAxis;
                    return V === "xy" || A === "xy" || A === V;
                  })(x, W) && mi.validateAction(Z, W, I, a, n)) return W;
                }
              }
            }; D.element(I); ) {
              var H = n.interactables.forEachMatch(I, P);
              if (H) {
                o.prepared.name = "drag", o.interactable = H, o.element = I;
                break;
              }
              I = Ge(I);
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
      var co = { id: "auto-start/hold", install: function(r) {
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
      } }, getHoldDuration: Lr }, fo = co, yi = { id: "auto-start", install: function(r) {
        r.usePlugin(mi), r.usePlugin(fo), r.usePlugin(Ba);
      } }, Wa = function(r) {
        return /^(always|never|auto)$/.test(r) ? (this.options.preventDefault = r, this) : D.bool(r) ? (this.options.preventDefault = r ? "always" : "never", this) : this.options.preventDefault;
      };
      function ho(r) {
        var n = r.interaction, o = r.event;
        n.interactable && n.interactable.checkAndPreventDefault(o);
      }
      var fr = { id: "core/interactablePreventDefault", install: function(r) {
        var n = r.Interactable;
        n.prototype.preventDefault = Wa, n.prototype.checkAndPreventDefault = function(o) {
          return (function(a, u, c) {
            var p = a.options.preventDefault;
            if (p !== "never") if (p !== "always") {
              if (u.events.supportsPassive && /^touch(start|move)$/.test(c.type)) {
                var v = Ie(c.target).document, b = u.getDocOptions(v);
                if (!b || !b.events || b.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(c.type) || D.element(c.target) && Ke(c.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || c.preventDefault();
            } else c.preventDefault();
          })(this, r, o);
        }, r.interactions.docEvents.push({ type: "dragstart", listener: function(o) {
          for (var a = 0, u = r.interactions.list; a < u.length; a++) {
            var c = u[a];
            if (c.element && (c.element === o.target || ae(c.element, o.target))) return void c.interactable.checkAndPreventDefault(o);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce((function(r, n) {
        return r["interactions:".concat(n)] = ho, r;
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
          D.plainObject(a) ? n[o] = Vn(a) : D.array(a) ? n[o] = En(a) : n[o] = a;
        }
        return n;
      }
      var kr = (function() {
        function r(n) {
          O(this, r), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = n, this.result = hr(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return L(r, [{ key: "start", value: function(n, o) {
          var a, u, c = n.phase, p = this.interaction, v = (function(S) {
            var x = S.interactable.options[S.prepared.name], I = x.modifiers;
            return I && I.length ? I : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function(P) {
              var H = x[P];
              return H && H.enabled && { options: H, methods: H._methods };
            })).filter((function(P) {
              return !!P;
            }));
          })(p);
          this.prepareStates(v), this.startEdges = Q({}, p.edges), this.edges = Q({}, this.startEdges), this.startOffset = (a = p.rect, u = o, a ? { left: u.x - a.left, top: u.y - a.top, right: a.right - u.x, bottom: a.bottom - u.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
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
          var o = n.phase, a = n.preEnd, u = n.skipModifiers, c = n.rect, p = n.edges;
          n.coords = Q({}, n.pageCoords), n.rect = Q({}, c), n.edges = Q({}, p);
          for (var v = u ? this.states.slice(u) : this.states, b = hr(n.coords, n.rect), S = 0; S < v.length; S++) {
            var x, I = v[S], P = I.options, H = Q({}, n.coords), W = null;
            (x = I.methods) != null && x.set && this.shouldDo(P, a, o) && (n.state = I, W = I.methods.set(n), nt(n.edges, n.rect, { x: n.coords.x - H.x, y: n.coords.y - H.y })), b.eventProps.push(W);
          }
          Q(this.edges, n.edges), b.delta.x = n.coords.x - n.pageCoords.x, b.delta.y = n.coords.y - n.pageCoords.y, b.rectDelta.left = n.rect.left - c.left, b.rectDelta.right = n.rect.right - c.right, b.rectDelta.top = n.rect.top - c.top, b.rectDelta.bottom = n.rect.bottom - c.bottom;
          var G = this.result.coords, Z = this.result.rect;
          if (G && Z) {
            var V = b.rect.left !== Z.left || b.rect.right !== Z.right || b.rect.top !== Z.top || b.rect.bottom !== Z.bottom;
            b.changed = V || G.x !== b.coords.x || G.y !== b.coords.y;
          }
          return b;
        } }, { key: "applyToInteraction", value: function(n) {
          var o = this.interaction, a = n.phase, u = o.coords.cur, c = o.coords.start, p = this.result, v = this.startDelta, b = p.delta;
          a === "start" && Q(this.startDelta, p.delta);
          for (var S = 0, x = [[c, v], [u, b]]; S < x.length; S++) {
            var I = x[S], P = I[0], H = I[1];
            P.page.x += H.x, P.page.y += H.y, P.client.x += H.x, P.client.y += H.y;
          }
          var W = this.result.rectDelta, G = n.rect || o.rect;
          G.left += W.left, G.right += W.right, G.top += W.top, G.bottom += W.bottom, G.width = G.right - G.left, G.height = G.bottom - G.top;
        } }, { key: "setAndApply", value: function(n) {
          var o = this.interaction, a = n.phase, u = n.preEnd, c = n.skipModifiers, p = this.setAll(this.fillArg({ preEnd: u, phase: a, pageCoords: n.modifiedCoords || o.coords.cur.page }));
          if (this.result = p, !p.changed && (!c || c < this.states.length) && o.interacting()) return !1;
          if (n.modifiedCoords) {
            var v = o.coords.cur.page, b = { x: n.modifiedCoords.x - v.x, y: n.modifiedCoords.y - v.y };
            p.coords.x += b.x, p.coords.y += b.y, p.delta.x += b.x, p.delta.y += b.y;
          }
          this.applyToInteraction(n);
        } }, { key: "beforeEnd", value: function(n) {
          var o = n.interaction, a = n.event, u = this.states;
          if (u && u.length) {
            for (var c = !1, p = 0; p < u.length; p++) {
              var v = u[p];
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
            var a = Q({ states: this.states, interactable: o.interactable, element: o.element, rect: null }, n);
            this.fillArg(a);
            for (var u = 0, c = this.states; u < c.length; u++) {
              var p = c[u];
              a.state = p, p.methods.stop && p.methods.stop(a);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(n) {
          this.states = [];
          for (var o = 0; o < n.length; o++) {
            var a = n[o], u = a.options, c = a.methods, p = a.name;
            this.states.push({ options: u, methods: c, index: o, name: p });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(n) {
          var o = n.interaction, a = o.coords, u = o.rect, c = o.modification;
          if (c.result) {
            for (var p = c.startDelta, v = c.result, b = v.delta, S = v.rectDelta, x = 0, I = [[a.start, p], [a.cur, b]]; x < I.length; x++) {
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
          })), this.result = hr(Q({}, n.result.coords), Q({}, n.result.rect));
        } }, { key: "destroy", value: function() {
          for (var n in this) this[n] = null;
        } }]), r;
      })();
      function hr(r, n) {
        return { rect: n, coords: r, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
      }
      function on(r, n) {
        var o = r.defaults, a = { start: r.start, set: r.set, beforeEnd: r.beforeEnd, stop: r.stop }, u = function(c) {
          var p = c || {};
          for (var v in p.enabled = p.enabled !== !1, o) v in p || (p[v] = o[v]);
          var b = { options: p, methods: a, name: n, enable: function() {
            return p.enabled = !0, b;
          }, disable: function() {
            return p.enabled = !1, b;
          } };
          return b;
        };
        return n && typeof n == "string" && (u._defaults = o, u._methods = a), u;
      }
      function pr(r) {
        var n = r.iEvent, o = r.interaction.modification.result;
        o && (n.modifiers = o.eventProps);
      }
      var po = { id: "modifiers/base", before: ["actions"], install: function(r) {
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
      } } }, Fr = po, Nr = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, On = (function(r) {
        K(o, r);
        var n = ue(o);
        function o(a, u, c, p, v, b, S) {
          var x;
          O(this, o), (x = n.call(this, a)).relatedTarget = null, x.screenX = void 0, x.screenY = void 0, x.button = void 0, x.buttons = void 0, x.ctrlKey = void 0, x.shiftKey = void 0, x.altKey = void 0, x.metaKey = void 0, x.page = void 0, x.client = void 0, x.delta = void 0, x.rect = void 0, x.x0 = void 0, x.y0 = void 0, x.t0 = void 0, x.dt = void 0, x.duration = void 0, x.clientX0 = void 0, x.clientY0 = void 0, x.velocity = void 0, x.speed = void 0, x.swipe = void 0, x.axes = void 0, x.preEnd = void 0, v = v || a.element;
          var I = a.interactable, P = (I && I.options || Nr).deltaSource, H = It(I, v, c), W = p === "start", G = p === "end", Z = W ? ke(x) : a.prevEvent, V = W ? a.coords.start : G ? { page: Z.page, client: Z.client, timeStamp: a.coords.cur.timeStamp } : a.coords.cur;
          return x.page = Q({}, V.page), x.client = Q({}, V.client), x.rect = Q({}, a.rect), x.timeStamp = V.timeStamp, G || (x.page.x -= H.x, x.page.y -= H.y, x.client.x -= H.x, x.client.y -= H.y), x.ctrlKey = u.ctrlKey, x.altKey = u.altKey, x.shiftKey = u.shiftKey, x.metaKey = u.metaKey, x.button = u.button, x.buttons = u.buttons, x.target = v, x.currentTarget = v, x.preEnd = b, x.type = S || c + (p || ""), x.interactable = I, x.t0 = W ? a.pointers[a.pointers.length - 1].downTime : Z.t0, x.x0 = a.coords.start.page.x - H.x, x.y0 = a.coords.start.page.y - H.y, x.clientX0 = a.coords.start.client.x - H.x, x.clientY0 = a.coords.start.client.y - H.y, x.delta = W || G ? { x: 0, y: 0 } : { x: x[P].x - Z[P].x, y: x[P].y - Z[P].y }, x.dt = a.coords.delta.timeStamp, x.duration = x.timeStamp - x.t0, x.velocity = Q({}, a.coords.velocity[P]), x.speed = Yt(x.velocity.x, x.velocity.y), x.swipe = G || p === "inertiastart" ? x.getSwipe() : null, x;
        }
        return L(o, [{ key: "getSwipe", value: function() {
          var a = this._interaction;
          if (a.prevEvent.speed < 600 || this.timeStamp - a.prevEvent.timeStamp > 150) return null;
          var u = 180 * Math.atan2(a.prevEvent.velocityY, a.prevEvent.velocityX) / Math.PI;
          u < 0 && (u += 360);
          var c = 112.5 <= u && u < 247.5, p = 202.5 <= u && u < 337.5;
          return { up: p, down: !p && 22.5 <= u && u < 157.5, left: c, right: !c && (292.5 <= u || u < 67.5), angle: u, speed: a.prevEvent.speed, velocity: { x: a.prevEvent.velocityX, y: a.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }]), o;
      })(rn);
      Object.defineProperties(On.prototype, { pageX: { get: function() {
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
      var go = L((function r(n, o, a, u, c) {
        O(this, r), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = n, this.pointer = o, this.event = a, this.downTime = u, this.downTarget = c;
      })), vo = (function(r) {
        return r.interactable = "", r.element = "", r.prepared = "", r.pointerIsDown = "", r.pointerWasMoved = "", r._proxy = "", r;
      })({}), mo = (function(r) {
        return r.start = "", r.move = "", r.end = "", r.stop = "", r.interacting = "", r;
      })({}), yo = 0, bo = (function() {
        function r(n) {
          var o = this, a = n.pointerType, u = n.scopeFire;
          O(this, r), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = ur((function(x) {
            this.move(x);
          }), "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = yo++, this._scopeFire = u, this.pointerType = a;
          var c = this;
          this._proxy = {};
          var p = function(x) {
            Object.defineProperty(o._proxy, x, { get: function() {
              return c[x];
            } });
          };
          for (var v in vo) p(v);
          var b = function(x) {
            Object.defineProperty(o._proxy, x, { value: function() {
              return c[x].apply(c, arguments);
            } });
          };
          for (var S in mo) b(S);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return L(r, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(n, o, a) {
          var u = this.updatePointer(n, o, a, !0), c = this.pointers[u];
          this._scopeFire("interactions:down", { pointer: n, event: o, eventTarget: a, pointerIndex: u, pointerInfo: c, type: "down", interaction: this });
        } }, { key: "start", value: function(n, o, a) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (n.name === "gesture" ? 2 : 1) || !o.options[n.name].enabled) && (gi(this.prepared, n), this.interactable = o, this.element = a, this.rect = o.getRect(a), this.edges = this.prepared.edges ? Q({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(n, o, a) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(n, o, a, !1);
          var u, c, p = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (u = this.coords.cur.client.x - this.coords.start.client.x, c = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Yt(u, c) > this.pointerMoveTolerance);
          var v, b, S, x = this.getPointerIndex(n), I = { pointer: n, pointerIndex: x, pointerInfo: this.pointers[x], event: o, type: "move", eventTarget: a, dx: u, dy: c, duplicate: p, interaction: this };
          p || (v = this.coords.velocity, b = this.coords.delta, S = Math.max(b.timeStamp / 1e3, 1e-3), v.page.x = b.page.x / S, v.page.y = b.page.y / S, v.client.x = b.client.x / S, v.client.y = b.client.y / S, v.timeStamp = S), this._scopeFire("interactions:move", I), p || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && st(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(n) {
          n && n.event || X(this.coords.delta), (n = Q({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, n || {})).phase = "move", this._doPhase(n);
        } }, { key: "pointerUp", value: function(n, o, a, u) {
          var c = this.getPointerIndex(n);
          c === -1 && (c = this.updatePointer(n, o, a, !1));
          var p = /cancel$/i.test(o.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(p), { pointer: n, pointerIndex: c, pointerInfo: this.pointers[c], event: o, eventTarget: a, type: p, curEventTarget: u, interaction: this }), this.simulation || this.end(o), this.removePointer(n, o);
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
          var o = pe(n);
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : gn(this.pointers, (function(a) {
            return a.id === o;
          }));
        } }, { key: "getPointerInfo", value: function(n) {
          return this.pointers[this.getPointerIndex(n)];
        } }, { key: "updatePointer", value: function(n, o, a, u) {
          var c, p, v, b = pe(n), S = this.getPointerIndex(n), x = this.pointers[S];
          return u = u !== !1 && (u || /(down|start)$/i.test(o.type)), x ? x.pointer = n : (x = new go(b, n, o, null, null), S = this.pointers.length, this.pointers.push(x)), Ae(this.coords.cur, this.pointers.map((function(I) {
            return I.pointer;
          })), this._now()), c = this.coords.delta, p = this.coords.prev, v = this.coords.cur, c.page.x = v.page.x - p.page.x, c.page.y = v.page.y - p.page.y, c.client.x = v.client.x - p.client.x, c.client.y = v.client.y - p.client.y, c.timeStamp = v.timeStamp - p.timeStamp, u && (this.pointerIsDown = !0, x.downTime = this.coords.cur.timeStamp, x.downTarget = a, Rt(this.downPointer, n), this.interacting() || (st(this.coords.start, this.coords.cur), st(this.coords.prev, this.coords.cur), this.downEvent = o, this.pointerWasMoved = !1)), this._updateLatestPointer(n, o, a), this._scopeFire("interactions:update-pointer", { pointer: n, event: o, eventTarget: a, down: u, pointerInfo: x, pointerIndex: S, interaction: this }), S;
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
          return new On(this, n, this.prepared.name, o, this.element, a, u);
        } }, { key: "_fireEvent", value: function(n) {
          var o;
          (o = this.interactable) == null || o.fire(n), (!this.prevEvent || n.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = n);
        } }, { key: "_doPhase", value: function(n) {
          var o = n.event, a = n.phase, u = n.preEnd, c = n.type, p = this.rect;
          if (p && a === "move" && (nt(this.edges, p, this.coords.delta[this.interactable.options.deltaSource]), p.width = p.right - p.left, p.height = p.bottom - p.top), this._scopeFire("interactions:before-action-".concat(a), n) === !1) return !1;
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
        return wi(r.coords.cur, n), wi(r.coords.delta, n), nt(r.edges, r.rect, n), n.x = 0, n.y = 0, !0;
      }
      function Ua(r) {
        var n = r.x, o = r.y;
        this.offset.pending.x += n, this.offset.pending.y += o, this.offset.total.x += n, this.offset.total.y += o;
      }
      function wi(r, n) {
        var o = r.page, a = r.client, u = n.x, c = n.y;
        o.x += u, o.y += c, a.x += u, a.y += c;
      }
      mo.offsetBy = "";
      var Ha = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(r) {
        r.Interaction.prototype.offsetBy = Ua;
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
      } } }, _i = Ha, Ga = (function() {
        function r(n) {
          O(this, r), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = n;
        }
        return L(r, [{ key: "start", value: function(n) {
          var o = this.interaction, a = Br(o);
          if (!a || !a.enabled) return !1;
          var u = o.coords.velocity.client, c = Yt(u.x, u.y), p = this.modification || (this.modification = new kr(o));
          if (p.copyFrom(o.modification), this.t0 = o._now(), this.allowResume = a.allowResume, this.v0 = c, this.currentOffset = { x: 0, y: 0 }, this.startCoords = o.coords.cur.page, this.modifierArg = p.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - o.coords.cur.timeStamp < 50 && c > a.minSpeed && c > a.endSpeed) this.startInertia();
          else {
            if (p.result = p.setAll(this.modifierArg), !p.result.changed) return !1;
            this.startSmoothEnd();
          }
          return o.modification.result.rect = null, o.offsetBy(this.targetOffset), o._doPhase({ interaction: o, event: n, phase: "inertiastart" }), o.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), o.modification.result.rect = null, this.active = !0, o.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var n = this, o = this.interaction.coords.velocity.client, a = Br(this.interaction), u = a.resistance, c = -Math.log(a.endSpeed / this.v0) / u;
          this.targetOffset = { x: (o.x - c) / u, y: (o.y - c) / u }, this.te = c, this.lambda_v0 = u / this.v0, this.one_ve_v0 = 1 - a.endSpeed / this.v0;
          var p = this.modification, v = this.modifierArg;
          v.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, p.result = p.setAll(v), p.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + p.result.delta.x, y: this.targetOffset.y + p.result.delta.y }), this.onNextFrame((function() {
            return n.inertiaTick();
          }));
        } }, { key: "startSmoothEnd", value: function() {
          var n = this;
          this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame((function() {
            return n.smoothEndTick();
          }));
        } }, { key: "onNextFrame", value: function(n) {
          var o = this;
          this.timeout = Tn.request((function() {
            o.active && n();
          }));
        } }, { key: "inertiaTick", value: function() {
          var n, o, a, u, c, p, v, b = this, S = this.interaction, x = Br(S).resistance, I = (S._now() - this.t0) / 1e3;
          if (I < this.te) {
            var P, H = 1 - (Math.exp(-x * I) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (n = 0, o = 0, a = this.targetOffset.x, u = this.targetOffset.y, c = this.modifiedOffset.x, p = this.modifiedOffset.y, P = { x: xo(v = H, n, a, c), y: xo(v, o, u, p) }) : P = { x: this.targetOffset.x * H, y: this.targetOffset.y * H };
            var W = { x: P.x - this.currentOffset.x, y: P.y - this.currentOffset.y };
            this.currentOffset.x += W.x, this.currentOffset.y += W.y, S.offsetBy(W), S.move(), this.onNextFrame((function() {
              return b.inertiaTick();
            }));
          } else S.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var n = this, o = this.interaction, a = o._now() - this.t0, u = Br(o).smoothEndDuration;
          if (a < u) {
            var c = { x: Wr(a, 0, this.targetOffset.x, u), y: Wr(a, 0, this.targetOffset.y, u) }, p = { x: c.x - this.currentOffset.x, y: c.y - this.currentOffset.y };
            this.currentOffset.x += p.x, this.currentOffset.y += p.y, o.offsetBy(p), o.move({ skipModifiers: this.modifierCount }), this.onNextFrame((function() {
              return n.smoothEndTick();
            }));
          } else o.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(n) {
          var o = n.pointer, a = n.event, u = n.eventTarget, c = this.interaction;
          c.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), c.updatePointer(o, a, u, !0), c._doPhase({ interaction: c, event: a, phase: "resume" }), st(c.coords.prev, c.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, Tn.cancel(this.timeout);
        } }]), r;
      })();
      function Br(r) {
        var n = r.interactable, o = r.prepared;
        return n && n.options && o.name && n.options[o.name].inertia;
      }
      var qa = { id: "inertia", before: ["modifiers", "actions"], install: function(r) {
        var n = r.defaults;
        r.usePlugin(_i), r.usePlugin(Fr), r.actions.phases.inertiastart = !0, r.actions.phases.resume = !0, n.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(r) {
        var n = r.interaction;
        n.inertia = new Ga(n);
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
          u = Ge(u);
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
      function xo(r, n, o, a) {
        var u = 1 - r;
        return u * u * n + 2 * u * r * o + r * r * a;
      }
      function Wr(r, n, o, a) {
        return -o * (r /= a) * (r - 2) + n;
      }
      var Xa = qa;
      function wo(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          if (r.immediatePropagationStopped) break;
          a(r);
        }
      }
      var _o = (function() {
        function r(n) {
          O(this, r), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = Q({}, n || {});
        }
        return L(r, [{ key: "fire", value: function(n) {
          var o, a = this.global;
          (o = this.types[n.type]) && wo(n, o), !n.propagationStopped && a && (o = a[n.type]) && wo(n, o);
        } }, { key: "on", value: function(n, o) {
          var a = $t(n, o);
          for (n in a) this.types[n] = Sn(this.types[n] || [], a[n]);
        } }, { key: "off", value: function(n, o) {
          var a = $t(n, o);
          for (n in a) {
            var u = this.types[n];
            if (u && u.length) for (var c = 0, p = a[n]; c < p.length; c++) {
              var v = p[c], b = u.indexOf(v);
              b !== -1 && u.splice(b, 1);
            }
          }
        } }, { key: "getRect", value: function(n) {
          return null;
        } }]), r;
      })(), $a = (function() {
        function r(n) {
          O(this, r), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = n, Rt(this, n);
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
      var $e = { id: "events", install: function(r) {
        var n, o = [], a = {}, u = [], c = { add: p, remove: v, addDelegate: function(x, I, P, H, W) {
          var G = gr(W);
          if (!a[P]) {
            a[P] = [];
            for (var Z = 0; Z < u.length; Z++) {
              var V = u[Z];
              p(V, P, b), p(V, P, S, !0);
            }
          }
          var w = a[P], A = sr(w, (function(R) {
            return R.selector === x && R.context === I;
          }));
          A || (A = { selector: x, context: I, listeners: [] }, w.push(A)), A.listeners.push({ func: H, options: G });
        }, removeDelegate: function(x, I, P, H, W) {
          var G, Z = gr(W), V = a[P], w = !1;
          if (V)
            for (G = V.length - 1; G >= 0; G--) {
              var A = V[G];
              if (A.selector === x && A.context === I) {
                for (var R = A.listeners, F = R.length - 1; F >= 0; F--) {
                  var $ = R[F];
                  if ($.func === H && Ue($.options, Z)) {
                    R.splice(F, 1), R.length || (V.splice(G, 1), v(I, P, b), v(I, P, S, !0)), w = !0;
                    break;
                  }
                }
                if (w) break;
              }
            }
        }, delegateListener: b, delegateUseCapture: S, delegatedEvents: a, documents: u, targets: o, supportsOptions: !1, supportsPassive: !1 };
        function p(x, I, P, H) {
          if (x.addEventListener) {
            var W = gr(H), G = sr(o, (function(Z) {
              return Z.eventTarget === x;
            }));
            G || (G = { eventTarget: x, events: {} }, o.push(G)), G.events[I] || (G.events[I] = []), sr(G.events[I], (function(Z) {
              return Z.func === P && Ue(Z.options, W);
            })) || (x.addEventListener(I, P, c.supportsOptions ? W : W.capture), G.events[I].push({ func: P, options: W }));
          }
        }
        function v(x, I, P, H) {
          if (x.addEventListener && x.removeEventListener) {
            var W = gn(o, (function(ge) {
              return ge.eventTarget === x;
            })), G = o[W];
            if (G && G.events) if (I !== "all") {
              var Z = !1, V = G.events[I];
              if (V) {
                if (P === "all") {
                  for (var w = V.length - 1; w >= 0; w--) {
                    var A = V[w];
                    v(x, I, A.func, A.options);
                  }
                  return;
                }
                for (var R = gr(H), F = 0; F < V.length; F++) {
                  var $ = V[F];
                  if ($.func === P && Ue($.options, R)) {
                    x.removeEventListener(I, P, c.supportsOptions ? R : R.capture), V.splice(F, 1), V.length === 0 && (delete G.events[I], Z = !0);
                    break;
                  }
                }
              }
              Z && !Object.keys(G.events).length && o.splice(W, 1);
            } else for (I in G.events) G.events.hasOwnProperty(I) && v(x, I, "all");
          }
        }
        function b(x, I) {
          for (var P = gr(I), H = new $a(x), W = a[x.type], G = nn(x)[0], Z = G; D.element(Z); ) {
            for (var V = 0; V < W.length; V++) {
              var w = W[V], A = w.selector, R = w.context;
              if (Ke(Z, A) && ae(R, G) && ae(R, Z)) {
                var F = w.listeners;
                H.currentTarget = Z;
                for (var $ = 0; $ < F.length; $++) {
                  var ge = F[$];
                  Ue(ge.options, P) && ge.func(H);
                }
              }
            }
            Z = Ge(Z);
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
        for (var c = 0, p = u.interactions.list; c < p.length; c++) {
          var v = p[c], b = a;
          if (v.simulation && v.simulation.allowResume && v.pointerType === n) for (; b; ) {
            if (b === v.element) return v;
            b = Ge(b);
          }
        }
        return null;
      }, mouseOrPen: function(r) {
        var n, o = r.pointerId, a = r.pointerType, u = r.eventType, c = r.scope;
        if (a !== "mouse" && a !== "pen") return null;
        for (var p = 0, v = c.interactions.list; p < v.length; p++) {
          var b = v[p];
          if (b.pointerType === a) {
            if (b.simulation && !So(b, o)) continue;
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
          if (So(u, n)) return u;
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
      function So(r, n) {
        return r.pointers.some((function(o) {
          return o.id === n;
        }));
      }
      var Ya = Si, Ei = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function Eo(r, n) {
        return function(o) {
          var a = n.interactions.list, u = tn(o), c = nn(o), p = c[0], v = c[1], b = [];
          if (/^touch/.test(o.type)) {
            n.prevTouchTime = n.now();
            for (var S = 0, x = o.changedTouches; S < x.length; S++) {
              var I = x[S], P = { pointer: I, pointerId: pe(I), pointerType: u, eventType: o.type, eventTarget: p, curEventTarget: v, scope: n }, H = To(P);
              b.push([P.pointer, P.eventTarget, P.curEventTarget, H]);
            }
          } else {
            var W = !1;
            if (!Re.supportsPointerEvent && /mouse/.test(o.type)) {
              for (var G = 0; G < a.length && !W; G++) W = a[G].pointerType !== "mouse" && a[G].pointerIsDown;
              W = W || n.now() - n.prevTouchTime < 500 || o.timeStamp === 0;
            }
            if (!W) {
              var Z = { pointer: o, pointerId: pe(o), pointerType: u, eventType: o.type, curEventTarget: v, eventTarget: p, scope: n }, V = To(Z);
              b.push([Z.pointer, Z.eventTarget, Z.curEventTarget, V]);
            }
          }
          for (var w = 0; w < b.length; w++) {
            var A = b[w], R = A[0], F = A[1], $ = A[2];
            A[3][r](R, o, F, $);
          }
        };
      }
      function To(r) {
        var n = r.pointerType, o = r.scope, a = { interaction: Ya.search(r), searchDetails: r };
        return o.fire("interactions:find", a), a.interaction || o.interactions.new({ pointerType: n });
      }
      function Ur(r, n) {
        var o = r.doc, a = r.scope, u = r.options, c = a.interactions.docEvents, p = a.events, v = p[n];
        for (var b in a.browser.isIOS && !u.events && (u.events = { passive: !1 }), p.delegatedEvents) v(o, b, p.delegateListener), v(o, b, p.delegateUseCapture, !0);
        for (var S = u && u.events, x = 0; x < c.length; x++) {
          var I = c[x];
          v(o, I.type, I.listener, S);
        }
      }
      var Ka = { id: "core/interactions", install: function(r) {
        for (var n = {}, o = 0; o < Ei.length; o++) {
          var a = Ei[o];
          n[a] = Eo(a, r);
        }
        var u, c = Re.pEventTypes;
        function p() {
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
        (u = be.PointerEvent ? [{ type: c.down, listener: p }, { type: c.down, listener: n.pointerDown }, { type: c.move, listener: n.pointerMove }, { type: c.up, listener: n.pointerUp }, { type: c.cancel, listener: n.pointerUp }] : [{ type: "mousedown", listener: n.pointerDown }, { type: "mousemove", listener: n.pointerMove }, { type: "mouseup", listener: n.pointerUp }, { type: "touchstart", listener: p }, { type: "touchstart", listener: n.pointerDown }, { type: "touchmove", listener: n.pointerMove }, { type: "touchend", listener: n.pointerUp }, { type: "touchcancel", listener: n.pointerUp }]).push({ type: "blur", listener: function(v) {
          for (var b = 0, S = r.interactions.list; b < S.length; b++)
            S[b].documentBlur(v);
        } }), r.prevTouchTime = 0, r.Interaction = (function(v) {
          K(S, v);
          var b = ue(S);
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
        })(bo), r.interactions = { list: [], new: function(v) {
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
      } }, onDocSignal: Ur, doOnInteractions: Eo, methodNames: Ei }, ft = Ka, an = (function(r) {
        return r[r.On = 0] = "On", r[r.Off = 1] = "Off", r;
      })(an || {}), kn = (function() {
        function r(n, o, a, u) {
          O(this, r), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new _o(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = o.actions, this.target = n, this._context = o.context || a, this._win = Ie(_t(n) ? this._context : n), this._doc = this._win.document, this._scopeEvents = u, this.set(o);
        }
        return L(r, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(n, o) {
          return D.func(o.onstart) && this.on("".concat(n, "start"), o.onstart), D.func(o.onmove) && this.on("".concat(n, "move"), o.onmove), D.func(o.onend) && this.on("".concat(n, "end"), o.onend), D.func(o.oninertiastart) && this.on("".concat(n, "inertiastart"), o.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(n, o, a) {
          var u, c = this, p = (u = this._actions.map[n]) == null ? void 0 : u.filterEventType, v = function(b) {
            return (p == null || p(b)) && dr(b, c._actions);
          };
          (D.array(o) || D.object(o)) && this._onOff(an.Off, n, o, void 0, v), (D.array(a) || D.object(a)) && this._onOff(an.On, n, a, void 0, v);
        } }, { key: "setPerAction", value: function(n, o) {
          var a = this._defaults;
          for (var u in o) {
            var c = u, p = this.options[n], v = o[c];
            c === "listeners" && this.updatePerActionListeners(n, p.listeners, v), D.array(v) ? p[c] = En(v) : D.plainObject(v) ? (p[c] = Q(p[c] || {}, Vn(v)), D.object(a.perAction[c]) && "enabled" in a.perAction[c] && (p[c].enabled = v.enabled !== !1)) : D.bool(v) && D.object(a.perAction[c]) ? p[c].enabled = v : p[c] = v;
          }
        } }, { key: "getRect", value: function(n) {
          return n = n || (D.element(this.target) ? this.target : null), D.string(this.target) && (n = n || this._context.querySelector(this.target)), Je(n);
        } }, { key: "rectChecker", value: function(n) {
          var o = this;
          return D.func(n) ? (this.getRect = function(a) {
            var u = Q({}, n.apply(o, a));
            return "width" in u || (u.width = u.right - u.left, u.height = u.bottom - u.top), u;
          }, this) : n === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(n, o) {
          if (_t(o) || D.object(o)) {
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
          return !n || !!D.element(a) && (D.string(n) ? pt(a, n, o) : !!D.element(n) && ae(n, a));
        } }, { key: "testIgnore", value: function(n, o, a) {
          return !(!n || !D.element(a)) && (D.string(n) ? pt(a, n, o) : !!D.element(n) && ae(n, a));
        } }, { key: "fire", value: function(n) {
          return this.events.fire(n), this;
        } }, { key: "_onOff", value: function(n, o, a, u, c) {
          D.object(o) && !D.array(o) && (u = a, a = null);
          var p = $t(o, a, c);
          for (var v in p) {
            v === "wheel" && (v = Re.wheelEvent);
            for (var b = 0, S = p[v]; b < S.length; b++) {
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
            this.options[u] = {}, this.setPerAction(u, Q(Q({}, o.perAction), o.actions[u])), this[c](n[u]);
          }
          for (var p in n) p !== "getRect" ? D.func(this[p]) && this[p](n[p]) : this.rectChecker(n.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (D.string(this.target)) for (var n in this._scopeEvents.delegatedEvents) for (var o = this._scopeEvents.delegatedEvents[n], a = o.length - 1; a >= 0; a--) {
            var u = o[a], c = u.selector, p = u.context, v = u.listeners;
            c === this.target && p === this._context && o.splice(a, 1);
            for (var b = v.length - 1; b >= 0; b--) this._scopeEvents.removeDelegate(this.target, this._context, n, v[b][0], v[b][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), r;
      })(), Oo = (function() {
        function r(n) {
          var o = this;
          O(this, r), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = n, n.addListeners({ "interactable:unset": function(a) {
            var u = a.interactable, c = u.target, p = D.string(c) ? o.selectorMap[c] : c[o.scope.id], v = gn(p, (function(b) {
              return b === u;
            }));
            p.splice(v, 1);
          } });
        }
        return L(r, [{ key: "new", value: function(n, o) {
          o = Q(o || {}, { actions: this.scope.actions });
          var a = new this.scope.Interactable(n, o, this.scope.document, this.scope.events);
          return this.scope.addDocument(a._doc), this.list.push(a), D.string(n) ? (this.selectorMap[n] || (this.selectorMap[n] = []), this.selectorMap[n].push(a)) : (a.target[this.scope.id] || Object.defineProperty(n, this.scope.id, { value: [], configurable: !0 }), n[this.scope.id].push(a)), this.scope.fire("interactable:new", { target: n, options: o, interactable: a, win: this.scope._win }), a;
        } }, { key: "getExisting", value: function(n, o) {
          var a = o && o.context || this.scope.document, u = D.string(n), c = u ? this.selectorMap[n] : n[this.scope.id];
          if (c) return sr(c, (function(p) {
            return p._context === a && (u || p.inContext(n));
          }));
        } }, { key: "forEachMatch", value: function(n, o) {
          for (var a = 0, u = this.list; a < u.length; a++) {
            var c = u[a], p = void 0;
            if ((D.string(c.target) ? D.element(n) && Ke(n, c.target) : n === c.target) && c.inContext(n) && (p = o(c)), p !== void 0) return p;
          }
        } }]), r;
      })(), Ti = (function() {
        function r() {
          var n = this;
          O(this, r), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = Re, this.defaults = Vn(Nr), this.Eventable = _o, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = (function(a) {
            var u = function c(p, v) {
              var b = a.interactables.getExisting(p, v);
              return b || ((b = a.interactables.new(p, v)).events.global = c.globalEvents), b;
            };
            return u.getPointerAverage = re, u.getTouchBBox = Qe, u.getTouchDistance = rt, u.getTouchAngle = yt, u.getElementRect = Je, u.getElementClientRect = ct, u.matchesSelector = Ke, u.closest = Ze, u.globalEvents = {}, u.version = "1.10.27", u.scope = a, u.use = function(c, p) {
              return this.scope.usePlugin(c, p), this;
            }, u.isSet = function(c, p) {
              return !!this.scope.interactables.get(c, p && p.context);
            }, u.on = ur((function(c, p, v) {
              if (D.string(c) && c.search(" ") !== -1 && (c = c.trim().split(/ +/)), D.array(c)) {
                for (var b = 0, S = c; b < S.length; b++) {
                  var x = S[b];
                  this.on(x, p, v);
                }
                return this;
              }
              if (D.object(c)) {
                for (var I in c) this.on(I, c[I], p);
                return this;
              }
              return dr(c, this.scope.actions) ? this.globalEvents[c] ? this.globalEvents[c].push(p) : this.globalEvents[c] = [p] : this.scope.events.add(this.scope.document, c, p, { options: v }), this;
            }), "The interact.on() method is being deprecated"), u.off = ur((function(c, p, v) {
              if (D.string(c) && c.search(" ") !== -1 && (c = c.trim().split(/ +/)), D.array(c)) {
                for (var b = 0, S = c; b < S.length; b++) {
                  var x = S[b];
                  this.off(x, p, v);
                }
                return this;
              }
              if (D.object(c)) {
                for (var I in c) this.off(I, c[I], p);
                return this;
              }
              var P;
              return dr(c, this.scope.actions) ? c in this.globalEvents && (P = this.globalEvents[c].indexOf(p)) !== -1 && this.globalEvents[c].splice(P, 1) : this.scope.events.remove(this.scope.document, c, p, v), this;
            }), "The interact.off() method is being deprecated"), u.debug = function() {
              return this.scope;
            }, u.supportsTouch = function() {
              return Re.supportsTouch;
            }, u.supportsPointerEvent = function() {
              return Re.supportsPointerEvent;
            }, u.stop = function() {
              for (var c = 0, p = this.scope.interactions.list; c < p.length; c++) p[c].stop();
              return this;
            }, u.pointerMoveTolerance = function(c) {
              return D.number(c) ? (this.scope.interactions.pointerMoveTolerance = c, this) : this.scope.interactions.pointerMoveTolerance;
            }, u.addDocument = function(c, p) {
              this.scope.addDocument(c, p);
            }, u.removeDocument = function(c) {
              this.scope.removeDocument(c);
            }, u;
          })(this), this.InteractEvent = On, this.Interactable = void 0, this.interactables = new Oo(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(a) {
            return n.removeDocument(a.target);
          };
          var o = this;
          this.Interactable = (function(a) {
            K(c, a);
            var u = ue(c);
            function c() {
              return O(this, c), u.apply(this, arguments);
            }
            return L(c, [{ key: "_defaults", get: function() {
              return o.defaults;
            } }, { key: "set", value: function(p) {
              return ve(he(c.prototype), "set", this).call(this, p), o.fire("interactable:set", { options: p, interactable: this }), this;
            } }, { key: "unset", value: function() {
              ve(he(c.prototype), "unset", this).call(this);
              var p = o.interactables.list.indexOf(this);
              p < 0 || (o.interactables.list.splice(p, 1), o.fire("interactable:unset", { interactable: this }));
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
            return o.isInitialized = !0, D.window(a) && Oe(a), be.init(a), Re.init(a), Tn.init(a), o.window = a, o.document = a.document, o.usePlugin(ft), o.usePlugin($e), o;
          })(this, n);
        } }, { key: "pluginIsInstalled", value: function(n) {
          var o = n.id;
          return o ? !!this._plugins.map[o] : this._plugins.list.indexOf(n) !== -1;
        } }, { key: "usePlugin", value: function(n, o) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(n)) return this;
          if (n.id && (this._plugins.map[n.id] = n), this._plugins.list.push(n), n.install && n.install(this, o), n.listeners && n.before) {
            for (var a = 0, u = this.listenerMaps.length, c = n.before.reduce((function(v, b) {
              return v[b] = !0, v[Mt(b)] = !0, v;
            }), {}); a < u; a++) {
              var p = this.listenerMaps[a].id;
              if (p && (c[p] || c[Mt(p)])) break;
            }
            this.listenerMaps.splice(a, 0, { id: n.id, map: n.listeners });
          } else n.listeners && this.listenerMaps.push({ id: n.id, map: n.listeners });
          return this;
        } }, { key: "addDocument", value: function(n, o) {
          if (this.getDocIndex(n) !== -1) return !1;
          var a = Ie(n);
          o = o ? Q({}, o) : {}, this.documents.push({ doc: n, options: o }), this.events.documents.push(n), n !== this.document && this.events.add(a, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: n, window: a, scope: this, options: o });
        } }, { key: "removeDocument", value: function(n) {
          var o = this.getDocIndex(n), a = Ie(n), u = this.documents[o].options;
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
      function Mt(r) {
        return r && r.replace(/\/.*$/, "");
      }
      var Oi = new Ti(), gt = Oi.interactStatic, Io = typeof globalThis < "u" ? globalThis : window;
      Oi.init(Io);
      var Ro = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(r) {
        var n = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function(a) {
          var u = a[0], c = a[1];
          return u in r || c in r;
        })), o = function(a, u) {
          for (var c = r.range, p = r.limits, v = p === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : p, b = r.offset, S = b === void 0 ? { x: 0, y: 0 } : b, x = { range: c, grid: r, x: null, y: null }, I = 0; I < n.length; I++) {
            var P = n[I], H = P[0], W = P[1], G = Math.round((a - S.x) / r[H]), Z = Math.round((u - S.y) / r[W]);
            x[H] = Math.max(v.left, Math.min(v.right, G * r[H] + S.x)), x[W] = Math.max(v.top, Math.min(v.bottom, Z * r[W] + S.y));
          }
          return x;
        };
        return o.grid = r, o.coordFields = n, o;
      } }), Mo = { id: "snappers", install: function(r) {
        var n = r.interactStatic;
        n.snappers = Q(n.snappers || {}, Ro), n.createSnapGrid = n.snappers.grid;
      } }, Co = Mo, Ct = { start: function(r) {
        var n = r.state, o = r.rect, a = r.edges, u = r.pageCoords, c = n.options, p = c.ratio, v = c.enabled, b = n.options, S = b.equalDelta, x = b.modifiers;
        p === "preserve" && (p = o.width / o.height), n.startCoords = Q({}, u), n.startRect = Q({}, o), n.ratio = p, n.equalDelta = S;
        var I = n.linkedEdges = { top: a.top || a.left && !a.bottom, left: a.left || a.top && !a.right, bottom: a.bottom || a.right && !a.top, right: a.right || a.bottom && !a.left };
        if (n.xIsPrimaryAxis = !(!a.left && !a.right), n.equalDelta) {
          var P = (I.left ? 1 : -1) * (I.top ? 1 : -1);
          n.edgeSign = { x: P, y: P };
        } else n.edgeSign = { x: I.left ? -1 : 1, y: I.top ? -1 : 1 };
        if (v !== !1 && Q(a, I), x != null && x.length) {
          var H = new kr(r.interaction);
          H.copyFrom(r.interaction.modification), H.prepareStates(x), n.subModification = H, H.startAll(y({}, r));
        }
      }, set: function(r) {
        var n = r.state, o = r.rect, a = r.coords, u = n.linkedEdges, c = Q({}, a), p = n.equalDelta ? Va : Bt;
        if (Q(r.edges, u), p(n, n.xIsPrimaryAxis, a, o), !n.subModification) return null;
        var v = Q({}, o);
        nt(u, v, { x: a.x - c.x, y: a.y - c.y });
        var b = n.subModification.setAll(y(y({}, r), {}, { rect: v, edges: u, pageCoords: a, prevCoords: a, prevRect: v })), S = b.delta;
        return b.changed && (p(n, Math.abs(S.x) > Math.abs(S.y), b.coords, b.rect), Q(a, b.coords)), b.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function Va(r, n, o) {
        var a = r.startCoords, u = r.edgeSign;
        n ? o.y = a.y + (o.x - a.x) * u.y : o.x = a.x + (o.y - a.y) * u.x;
      }
      function Bt(r, n, o, a) {
        var u = r.startRect, c = r.startCoords, p = r.ratio, v = r.edgeSign;
        if (n) {
          var b = a.width / p;
          o.y = c.y + (b - u.height) * v.y;
        } else {
          var S = a.height * p;
          o.x = c.x + (S - u.width) * v.x;
        }
      }
      var ja = on(Ct, "aspectRatio"), Ii = function() {
      };
      Ii._defaults = {};
      var Kt = Ii;
      function sn(r, n, o) {
        return D.func(r) ? Ot(r, n.interactable, n.element, [o.x, o.y, n]) : Ot(r, n.interactable, n.element);
      }
      var jn = { start: function(r) {
        var n = r.rect, o = r.startOffset, a = r.state, u = r.interaction, c = r.pageCoords, p = a.options, v = p.elementRect, b = Q({ left: 0, top: 0, right: 0, bottom: 0 }, p.offset || {});
        if (n && v) {
          var S = sn(p.restriction, u, c);
          if (S) {
            var x = S.right - S.left - n.width, I = S.bottom - S.top - n.height;
            x < 0 && (b.left += x, b.right += x), I < 0 && (b.top += I, b.bottom += I);
          }
          b.left += o.left - n.width * v.left, b.top += o.top - n.height * v.top, b.right += o.right - n.width * (1 - v.right), b.bottom += o.bottom - n.height * (1 - v.bottom);
        }
        a.offset = b;
      }, set: function(r) {
        var n = r.coords, o = r.interaction, a = r.state, u = a.options, c = a.offset, p = sn(u.restriction, o, n);
        if (p) {
          var v = (function(b) {
            return !b || "left" in b && "top" in b || ((b = Q({}, b)).left = b.x || 0, b.top = b.y || 0, b.right = b.right || b.left + b.width, b.bottom = b.bottom || b.top + b.height), b;
          })(p);
          n.x = Math.max(Math.min(v.right - c.right, n.x), v.left + c.left), n.y = Math.max(Math.min(v.bottom - c.bottom, n.y), v.top + c.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Ve = on(jn, "restrict"), yn = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Hr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function Ao(r, n) {
        for (var o = 0, a = ["top", "left", "bottom", "right"]; o < a.length; o++) {
          var u = a[o];
          u in r || (r[u] = n[u]);
        }
        return r;
      }
      var Fn = { noInner: yn, noOuter: Hr, start: function(r) {
        var n, o = r.interaction, a = r.startOffset, u = r.state, c = u.options;
        c && (n = St(sn(c.offset, o, o.coords.start.page))), n = n || { x: 0, y: 0 }, u.offset = { top: n.y + a.top, left: n.x + a.left, bottom: n.y - a.bottom, right: n.x - a.right };
      }, set: function(r) {
        var n = r.coords, o = r.edges, a = r.interaction, u = r.state, c = u.offset, p = u.options;
        if (o) {
          var v = Q({}, n), b = sn(p.inner, a, v) || {}, S = sn(p.outer, a, v) || {};
          Ao(b, yn), Ao(S, Hr), o.top ? n.y = Math.min(Math.max(S.top + c.top, v.y), b.top + c.top) : o.bottom && (n.y = Math.max(Math.min(S.bottom + c.bottom, v.y), b.bottom + c.bottom)), o.left ? n.x = Math.min(Math.max(S.left + c.left, v.x), b.left + c.left) : o.right && (n.x = Math.max(Math.min(S.right + c.right, v.x), b.right + c.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Za = on(Fn, "restrictEdges"), Ja = Q({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(r) {
      } }, jn.defaults), Qa = on({ start: jn.start, set: jn.set, defaults: Ja }, "restrictRect"), Do = { width: -1 / 0, height: -1 / 0 }, Gr = { width: 1 / 0, height: 1 / 0 }, Zn = on({ start: function(r) {
        return Fn.start(r);
      }, set: function(r) {
        var n = r.interaction, o = r.state, a = r.rect, u = r.edges, c = o.options;
        if (u) {
          var p = en(sn(c.min, n, r.coords)) || Do, v = en(sn(c.max, n, r.coords)) || Gr;
          o.options = { endOnly: c.endOnly, inner: Q({}, Fn.noInner), outer: Q({}, Fn.noOuter) }, u.top ? (o.options.inner.top = a.bottom - p.height, o.options.outer.top = a.bottom - v.height) : u.bottom && (o.options.inner.bottom = a.top + p.height, o.options.outer.bottom = a.top + v.height), u.left ? (o.options.inner.left = a.right - p.width, o.options.outer.left = a.right - v.width) : u.right && (o.options.inner.right = a.left + p.width, o.options.outer.right = a.left + v.width), Fn.set(r), o.options = c;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), Ri = { start: function(r) {
        var n, o = r.interaction, a = r.interactable, u = r.element, c = r.rect, p = r.state, v = r.startOffset, b = p.options, S = b.offsetWithOrigin ? (function(P) {
          var H = P.interaction.element, W = St(Ot(P.state.options.origin, null, null, [H])), G = W || It(P.interactable, H, P.interaction.prepared.name);
          return G;
        })(r) : { x: 0, y: 0 };
        if (b.offset === "startCoords") n = { x: o.coords.start.page.x, y: o.coords.start.page.y };
        else {
          var x = Ot(b.offset, a, u, [o]);
          (n = St(x) || { x: 0, y: 0 }).x += S.x, n.y += S.y;
        }
        var I = b.relativePoints;
        p.offsets = c && I && I.length ? I.map((function(P, H) {
          return { index: H, relativePoint: P, x: v.left - c.width * P.x + n.x, y: v.top - c.height * P.y + n.y };
        })) : [{ index: 0, relativePoint: null, x: n.x, y: n.y }];
      }, set: function(r) {
        var n = r.interaction, o = r.coords, a = r.state, u = a.options, c = a.offsets, p = It(n.interactable, n.element, n.prepared.name), v = Q({}, o), b = [];
        u.offsetWithOrigin || (v.x -= p.x, v.y -= p.y);
        for (var S = 0, x = c; S < x.length; S++) for (var I = x[S], P = v.x - I.x, H = v.y - I.y, W = 0, G = u.targets.length; W < G; W++) {
          var Z = u.targets[W], V = void 0;
          (V = D.func(Z) ? Z(P, H, n._proxy, I, W) : Z) && b.push({ x: (D.number(V.x) ? V.x : P) + I.x, y: (D.number(V.y) ? V.y : H) + I.y, range: D.number(V.range) ? V.range : u.range, source: Z, index: W, offset: I });
        }
        for (var w = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, A = 0; A < b.length; A++) {
          var R = b[A], F = R.range, $ = R.x - v.x, ge = R.y - v.y, me = Yt($, ge), Ee = me <= F;
          F === 1 / 0 && w.inRange && w.range !== 1 / 0 && (Ee = !1), w.target && !(Ee ? w.inRange && F !== 1 / 0 ? me / F < w.distance / w.range : F === 1 / 0 && w.range !== 1 / 0 || me < w.distance : !w.inRange && me < w.distance) || (w.target = R, w.distance = me, w.range = F, w.inRange = Ee, w.delta.x = $, w.delta.y = ge);
        }
        return w.inRange && (o.x = w.target.x, o.y = w.target.y), a.closest = w, w;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, zo = on(Ri, "snap"), vr = { start: function(r) {
        var n = r.state, o = r.edges, a = n.options;
        if (!o) return null;
        r.state = { options: { targets: null, relativePoints: [{ x: o.left ? 0 : 1, y: o.top ? 0 : 1 }], offset: a.offset || "self", origin: { x: 0, y: 0 }, range: a.range } }, n.targetFields = n.targetFields || [["width", "height"], ["x", "y"]], Ri.start(r), n.offsets = r.state.offsets, r.state = n;
      }, set: function(r) {
        var n = r.interaction, o = r.state, a = r.coords, u = o.options, c = o.offsets, p = { x: a.x - c[0].x, y: a.y - c[0].y };
        o.options = Q({}, u), o.options.targets = [];
        for (var v = 0, b = u.targets || []; v < b.length; v++) {
          var S = b[v], x = void 0;
          if (x = D.func(S) ? S(p.x, p.y, n) : S) {
            for (var I = 0, P = o.targetFields; I < P.length; I++) {
              var H = P[I], W = H[0], G = H[1];
              if (W in x || G in x) {
                x.x = x[W], x.y = x[G];
                break;
              }
            }
            o.options.targets.push(x);
          }
        }
        var Z = Ri.set(r);
        return o.options = u, Z;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, Mi = on(vr, "snapSize"), mr = { aspectRatio: ja, restrictEdges: Za, restrict: Ve, restrictRect: Qa, restrictSize: Zn, snapEdges: on({ start: function(r) {
        var n = r.edges;
        return n ? (r.state.targetFields = r.state.targetFields || [[n.left ? "left" : "right", n.top ? "top" : "bottom"]], vr.start(r)) : null;
      }, set: vr.set, defaults: Q(Vn(vr.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: zo, snapSize: Mi, spring: Kt, avoid: Kt, transform: Kt, rubberband: Kt }, Po = { id: "modifiers", install: function(r) {
        var n = r.interactStatic;
        for (var o in r.usePlugin(Fr), r.usePlugin(Co), n.modifiers = mr, mr) {
          var a = mr[o], u = a._defaults, c = a._methods;
          u._methods = c, r.defaults.perAction[o] = u;
        }
      } }, es = Po, qr = (function(r) {
        K(o, r);
        var n = ue(o);
        function o(a, u, c, p, v, b) {
          var S;
          if (O(this, o), Rt(ke(S = n.call(this, v)), c), c !== u && Rt(ke(S), u), S.timeStamp = b, S.originalEvent = c, S.type = a, S.pointerId = pe(u), S.pointerType = tn(u), S.target = p, S.currentTarget = null, a === "tap") {
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
        r.pointerEvents = Nn, r.defaults.actions.pointerEvents = Nn.defaults, Q(r.actions.phaselessTypes, Nn.types);
      }, listeners: { "interactions:new": function(r) {
        var n = r.interaction;
        n.prevTap = null, n.tapTime = 0;
      }, "interactions:update-pointer": function(r) {
        var n = r.down, o = r.pointerInfo;
        !n && o.hold || (o.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget;
        r.duplicate || o.pointerIsDown && !o.pointerWasMoved || (o.pointerIsDown && bt(r), In({ interaction: o, pointer: a, event: u, eventTarget: c, type: "move" }, n));
      }, "interactions:down": function(r, n) {
        (function(o, a) {
          for (var u = o.interaction, c = o.pointer, p = o.event, v = o.eventTarget, b = o.pointerIndex, S = u.pointers[b].hold, x = pn(v), I = { interaction: u, pointer: c, event: p, eventTarget: v, type: "hold", targets: [], path: x, node: null }, P = 0; P < x.length; P++) {
            var H = x[P];
            I.node = H, a.fire("pointerEvents:collect-targets", I);
          }
          if (I.targets.length) {
            for (var W = 1 / 0, G = 0, Z = I.targets; G < Z.length; G++) {
              var V = Z[G].eventable.options.holdDuration;
              V < W && (W = V);
            }
            S.duration = W, S.timeout = setTimeout((function() {
              In({ interaction: u, eventTarget: v, pointer: c, event: p, type: "hold" }, a);
            }), W);
          }
        })(r, n), In(r, n);
      }, "interactions:up": function(r, n) {
        bt(r), In(r, n), (function(o, a) {
          var u = o.interaction, c = o.pointer, p = o.event, v = o.eventTarget;
          u.pointerWasMoved || In({ interaction: u, eventTarget: v, pointer: c, event: p, type: "tap" }, a);
        })(r, n);
      }, "interactions:cancel": function(r, n) {
        bt(r), In(r, n);
      } }, PointerEvent: qr, fire: In, collectEventTargets: Ci, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function In(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, p = r.type, v = r.targets, b = v === void 0 ? Ci(r, n) : v, S = new qr(p, a, u, c, o, n.now());
        n.fire("pointerEvents:new", { pointerEvent: S });
        for (var x = { interaction: o, pointer: a, event: u, eventTarget: c, targets: b, type: p, pointerEvent: S }, I = 0; I < b.length; I++) {
          var P = b[I];
          for (var H in P.props || {}) S[H] = P.props[H];
          var W = It(P.eventable, P.node);
          if (S._subtractOrigin(W), S.eventable = P.eventable, S.currentTarget = P.node, P.eventable.fire(S), S._addOrigin(W), S.immediatePropagationStopped || S.propagationStopped && I + 1 < b.length && b[I + 1].node !== S.currentTarget) break;
        }
        if (n.fire("pointerEvents:fired", x), p === "tap") {
          var G = S.double ? In({ interaction: o, pointer: a, event: u, eventTarget: c, type: "doubletap" }, n) : S;
          o.prevTap = G, o.tapTime = G.timeStamp;
        }
        return S;
      }
      function Ci(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, p = r.type, v = o.getPointerIndex(a), b = o.pointers[v];
        if (p === "tap" && (o.pointerWasMoved || !b || b.downTarget !== c)) return [];
        for (var S = pn(c), x = { interaction: o, pointer: a, event: u, eventTarget: c, type: p, path: S, targets: [], node: null }, I = 0; I < S.length; I++) {
          var P = S[I];
          x.node = P, n.fire("pointerEvents:collect-targets", x);
        }
        return p === "hold" && (x.targets = x.targets.filter((function(H) {
          var W, G;
          return H.eventable.options.holdDuration === ((W = o.pointers[v]) == null || (G = W.hold) == null ? void 0 : G.duration);
        }))), x.targets;
      }
      function bt(r) {
        var n = r.interaction, o = r.pointerIndex, a = n.pointers[o].hold;
        a && a.timeout && (clearTimeout(a.timeout), a.timeout = null);
      }
      var Ai = Object.freeze({ __proto__: null, default: Nn });
      function yr(r) {
        var n = r.interaction;
        n.holdIntervalHandle && (clearInterval(n.holdIntervalHandle), n.holdIntervalHandle = null);
      }
      var Lo = { id: "pointer-events/holdRepeat", install: function(r) {
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
          var p = c[0].eventable.options.holdRepeatInterval;
          p <= 0 || (o.holdIntervalHandle = setTimeout((function() {
            n.pointerEvents.fire({ interaction: o, eventTarget: u, type: "hold", pointer: a, event: a }, n);
          }), p));
        }
      } }) }, ko = Lo, ts = { id: "pointer-events/interactableTargets", install: function(r) {
        var n = r.Interactable;
        n.prototype.pointerEvents = function(a) {
          return Q(this.events.options, a), this;
        };
        var o = n.prototype._backCompatOption;
        n.prototype._backCompatOption = function(a, u) {
          var c = o.call(this, a, u);
          return c === this && (this.events.options[a] = u), c;
        };
      }, listeners: { "pointerEvents:collect-targets": function(r, n) {
        var o = r.targets, a = r.node, u = r.type, c = r.eventTarget;
        n.interactables.forEachMatch(a, (function(p) {
          var v = p.events, b = v.options;
          v.types[u] && v.types[u].length && p.testIgnoreAllow(b, a, c) && o.push({ node: a, eventable: v, props: { interactable: p } });
        }));
      }, "interactable:new": function(r) {
        var n = r.interactable;
        n.events.getRect = function(o) {
          return n.getRect(o);
        };
      }, "interactable:set": function(r, n) {
        var o = r.interactable, a = r.options;
        Q(o.events.options, n.pointerEvents.defaults), Q(o.events.options, a.pointerEvents || {});
      } } }, ns = ts, rs = { id: "pointer-events", install: function(r) {
        r.usePlugin(Ai), r.usePlugin(ko), r.usePlugin(ns);
      } }, is = rs, os = { id: "reflow", install: function(r) {
        var n = r.Interactable;
        r.actions.phases.reflow = !0, n.prototype.reflow = function(o) {
          return (function(a, u, c) {
            for (var p = a.getAllElements(), v = c.window.Promise, b = v ? [] : null, S = function() {
              var I = p[x], P = a.getRect(I);
              if (!P) return 1;
              var H, W = sr(c.interactions.list, (function(V) {
                return V.interacting() && V.interactable === a && V.element === I && V.prepared.name === u.name;
              }));
              if (W) W.move(), b && (H = W._reflowPromise || new v((function(V) {
                W._reflowResolve = V;
              })));
              else {
                var G = en(P), Z = /* @__PURE__ */ (function(V) {
                  return { coords: V, get page() {
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
                })({ page: { x: G.x, y: G.y }, client: { x: G.x, y: G.y }, timeStamp: c.now() });
                H = (function(V, w, A, R, F) {
                  var $ = V.interactions.new({ pointerType: "reflow" }), ge = { interaction: $, event: F, pointer: F, eventTarget: A, phase: "reflow" };
                  $.interactable = w, $.element = A, $.prevEvent = F, $.updatePointer(F, F, A, !0), X($.coords.delta), gi($.prepared, R), $._doPhase(ge);
                  var me = V.window, Ee = me.Promise, At = Ee ? new Ee((function(bn) {
                    $._reflowResolve = bn;
                  })) : void 0;
                  return $._reflowPromise = At, $.start(R, w, A), $._interacting ? ($.move(ge), $.end(F)) : ($.stop(), $._reflowResolve()), $.removePointer(F, F), At;
                })(c, a, I, u, Z);
              }
              b && b.push(H);
            }, x = 0; x < p.length && !S(); x++) ;
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
      } } }, Jn = os;
      if (gt.use(fr), gt.use(_i), gt.use(is), gt.use(Xa), gt.use(es), gt.use(yi), gt.use(Da), gt.use(Pa), gt.use(Jn), gt.default = gt, M(h) === "object" && h) try {
        h.exports = gt;
      } catch {
      }
      return gt.default = gt, gt;
    }));
  })(Yi, Yi.exports)), Yi.exports;
}
var J0 = /* @__PURE__ */ Z0();
const zc = /* @__PURE__ */ Ff(J0), Pc = /* @__PURE__ */ Ia({
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
  setup(h, { expose: d, emit: l }) {
    const y = h, M = l, O = Qi(Mf), k = Qi(Cf);
    if (!O)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const L = c0(null), E = eo({
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
    let K = !1, he = !1, ee = NaN, ke = NaN, ue = NaN, ve = NaN, Xe = -1, Ne = -1, We = -1, Se = -1, Oe = y.x, Ie = y.y, we = y.w, ye = y.h;
    const D = at(), _e = eo({
      i: f0(y, "i"),
      state: E,
      wrapper: D,
      calcXY: Ot
    });
    function ze(z) {
      $t(z);
    }
    function lt() {
      mt();
    }
    function Y(z) {
      Qt(y.isDraggable) && (E.draggable = z);
    }
    function oe(z) {
      Qt(y.isResizable) && (E.resizable = z);
    }
    function ne(z) {
      Qt(y.isBounded) && (E.bounded = z);
    }
    function be(z) {
      E.transformScale = z;
    }
    function fe(z) {
      E.rowHeight = z;
    }
    function Re(z) {
      E.maxRows = z;
    }
    function ae() {
      E.rtl = Ac() === "rtl", mt();
    }
    function Ze(z) {
      E.cols = Math.floor(z);
    }
    O.increaseItem(_e), yf(() => {
      E.rtl = Ac() === "rtl";
    }), Ra(() => {
      O.responsive && O.lastBreakpoint ? E.cols = Lf(O.lastBreakpoint, O.cols) : E.cols = O.colNum, E.rowHeight = O.rowHeight, E.containerWidth = O.width !== null ? O.width : 100, E.margin = O.margin !== void 0 ? O.margin.map(Number) : [10, 10], E.maxRows = O.maxRows, Qt(y.isDraggable) ? E.draggable = O.isDraggable : E.draggable = y.isDraggable, Qt(y.isResizable) ? E.resizable = O.isResizable : E.resizable = y.isResizable, Qt(y.isBounded) ? E.bounded = O.isBounded : E.bounded = y.isBounded, E.transformScale = O.transformScale, E.useCssTransforms = O.useCssTransforms, E.useStyleCursor = O.useStyleCursor, d0(() => {
        Oe = y.x, Ie = y.y, ye = y.h, we = y.w, Lt(Je);
      }), k.on("updateWidth", ze), k.on("compact", lt), k.on("setDraggable", Y), k.on("setResizable", oe), k.on("setBounded", ne), k.on("setTransformScale", be), k.on("setRowHeight", fe), k.on("setMaxRows", Re), k.on("directionchange", ae), k.on("setColNum", Ze);
    }), _u(() => {
      k.off("updateWidth", ze), k.off("compact", lt), k.off("setDraggable", Y), k.off("setResizable", oe), k.off("setBounded", ne), k.off("setTransformScale", be), k.off("setRowHeight", fe), k.off("setMaxRows", Re), k.off("directionchange", ae), k.off("setColNum", Ze), L.value && (L.value.unset(), L.value = null), O.decreaseItem(_e);
    }), d({ state: E, wrapper: D });
    const Ge = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, Ke = ht(() => E.resizable && !y.static), Me = ht(() => O.isMirrored ? !E.rtl : E.rtl), Nt = ht(() => (E.draggable || E.resizable) && !y.static), pt = G0("item"), Pn = ht(() => ({
      [pt.b()]: !0,
      [pt.bm("resizable")]: Ke.value,
      [pt.bm("static")]: y.static,
      [pt.bm("resizing")]: E.isResizing,
      [pt.bm("dragging")]: E.isDragging,
      [pt.bm("transform")]: E.useCssTransforms,
      [pt.bm("rtl")]: Me.value,
      [pt.bm("no-touch")]: Ge && Nt.value
    })), ct = ht(() => [pt.be("resizer"), Me.value && pt.bem("resizer", "rtl")].filter(Boolean));
    je(
      () => y.isDraggable,
      (z) => {
        E.draggable = z;
      }
    ), je(
      () => y.static,
      () => {
        Lt(Rt), Lt(X);
      }
    ), je(
      () => E.draggable,
      () => {
        Lt(Rt);
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
        Lt(X);
      }
    ), je(
      () => E.rowHeight,
      () => {
        Lt(Je), Lt(pn);
      }
    ), je([() => E.cols, () => E.containerWidth], () => {
      Lt(X), Lt(Je), Lt(pn);
    }), je([() => y.minH, () => y.maxH, () => y.minW, () => y.maxW], () => {
      Lt(X);
    }), je(Me, () => {
      Lt(X), Lt(Je);
    }), je([() => O.margin, () => O.margin[0], () => O.margin[1]], () => {
      const z = O.margin;
      !z || z[0] === E.margin[0] && z[1] === E.margin[1] || (E.margin = z.map(Number), Lt(Je), Lt(pn));
    });
    function Je() {
      y.x + y.w > E.cols ? (Oe = 0, we = y.w > E.cols ? E.cols : y.w) : (Oe = y.x, we = y.w);
      const z = Xt(Oe, Ie, we, ye);
      E.isDragging && (z.top = E.dragging.top, Me.value ? z.right = E.dragging.left : z.left = E.dragging.left), E.isResizing && (z.width = E.resizing.width, z.height = E.resizing.height);
      let q;
      E.useCssTransforms ? Me.value ? q = B0(z.top, z.right, z.width, z.height) : q = N0(z.top, z.left, z.width, z.height) : Me.value ? q = U0(z.top, z.right, z.width, z.height) : q = W0(z.top, z.left, z.width, z.height), E.style = q;
    }
    function pn() {
      const z = {};
      for (const q of ["width", "height"]) {
        const te = E.style[q].match(/^(\d+)px$/);
        if (!te)
          return;
        z[q] = te[1];
      }
      M("container-resized", y.i, y.h, y.w, z.height, z.width);
    }
    function _t(z) {
      if (y.static) return;
      const q = z.type;
      if (q === "resizestart" && E.isResizing || q !== "resizestart" && !E.isResizing)
        return;
      const te = Mc(z);
      if (Qt(te)) return;
      const { x: pe, y: Ae } = te, J = { width: 0, height: 0 };
      let re;
      switch (q) {
        case "resizestart": {
          X(), Xe = we, Ne = ye, re = Xt(Oe, Ie, we, ye), J.width = re.width, J.height = re.height, E.resizing = J, E.isResizing = !0;
          break;
        }
        case "resizemove": {
          !z.edges.right && !z.edges.left && (ue = pe), !z.edges.top && !z.edges.bottom && (ve = Ae);
          const Qe = Cc(ue, ve, pe, Ae);
          Me.value ? J.width = E.resizing.width - Qe.deltaX / E.transformScale : J.width = E.resizing.width + Qe.deltaX / E.transformScale, J.height = E.resizing.height + Qe.deltaY / E.transformScale, E.resizing = J;
          break;
        }
        case "resizeend": {
          re = Xt(Oe, Ie, we, ye), J.width = re.width, J.height = re.height, E.resizing = { width: -1, height: -1 }, E.isResizing = !1;
          break;
        }
      }
      re = It(J.height, J.width), re.w < y.minW && (re.w = y.minW), re.w > y.maxW && (re.w = y.maxW), re.h < y.minH && (re.h = y.minH), re.h > y.maxH && (re.h = y.maxH), re.h < 1 && (re.h = 1), re.w < 1 && (re.w = 1), ue = pe, ve = Ae, (we !== re.w || ye !== re.h) && M("resize", y.i, re.h, re.w, J.height, J.width), z.type === "resizeend" && (Xe !== we || Ne !== ye) && M("resized", y.i, re.h, re.w, J.height, J.width), k.emit("resizeEvent", z.type, y.i, Oe, Ie, re.h, re.w);
    }
    function Q(z) {
      if (y.static || E.isResizing) return;
      const q = z.type;
      if (q === "dragstart" && E.isDragging || q !== "dragstart" && !E.isDragging)
        return;
      const te = Mc(z);
      if (Qt(te)) return;
      const { x: pe, y: Ae } = te, J = z.target;
      if (!J.offsetParent) return;
      const re = { top: 0, left: 0 };
      switch (q) {
        case "dragstart": {
          We = Oe, Se = Ie;
          const rt = J.offsetParent.getBoundingClientRect(), yt = J.getBoundingClientRect(), tn = yt.left / E.transformScale, nn = rt.left / E.transformScale, rn = yt.right / E.transformScale, Sn = rt.right / E.transformScale, En = yt.top / E.transformScale, gn = rt.top / E.transformScale;
          Me.value ? re.left = (rn - Sn) * -1 : re.left = tn - nn, re.top = En - gn, E.dragging = re, E.isDragging = !0;
          break;
        }
        case "dragmove": {
          const rt = Cc(ee, ke, pe, Ae);
          if (Me.value ? re.left = E.dragging.left - rt.deltaX / E.transformScale : re.left = E.dragging.left + rt.deltaX / E.transformScale, re.top = E.dragging.top + rt.deltaY / E.transformScale, E.bounded) {
            const yt = J.offsetParent.clientHeight - en(y.h, E.rowHeight, E.margin[1]);
            re.top = nt(re.top, 0, yt);
            const tn = St(), nn = E.containerWidth - en(y.w, tn, E.margin[0]);
            re.left = nt(re.left, 0, nn);
          }
          E.dragging = re;
          break;
        }
        case "dragend": {
          const rt = J.offsetParent.getBoundingClientRect(), yt = J.getBoundingClientRect(), tn = yt.left / E.transformScale, nn = rt.left / E.transformScale, rn = yt.right / E.transformScale, Sn = rt.right / E.transformScale, En = yt.top / E.transformScale, gn = rt.top / E.transformScale;
          Me.value ? re.left = (rn - Sn) * -1 : re.left = tn - nn, re.top = En - gn, E.dragging = { top: -1, left: -1 }, E.isDragging = !1;
          break;
        }
      }
      let Qe;
      Me.value, Qe = Ot(re.top, re.left), ee = pe, ke = Ae, (Oe !== Qe.x || Ie !== Qe.y) && M("move", y.i, Qe.x, Qe.y), z.type === "dragend" && (We !== Oe || Se !== Ie) && M("moved", y.i, Qe.x, Qe.y), k.emit("dragEvent", z.type, y.i, Qe.x, Qe.y, ye, we);
    }
    function Xt(z, q, te, pe) {
      const Ae = St();
      let J;
      return Me.value ? J = {
        right: Math.round(Ae * z + (z + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * q + (q + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: te === 1 / 0 ? te : Math.round(Ae * te + Math.max(0, te - 1) * E.margin[0]),
        height: pe === 1 / 0 ? pe : Math.round(E.rowHeight * pe + Math.max(0, pe - 1) * E.margin[1])
      } : J = {
        left: Math.round(Ae * z + (z + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * q + (q + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: te === 1 / 0 ? te : Math.round(Ae * te + Math.max(0, te - 1) * E.margin[0]),
        height: pe === 1 / 0 ? pe : Math.round(E.rowHeight * pe + Math.max(0, pe - 1) * E.margin[1])
      }, J;
    }
    function Ot(z, q) {
      const te = St();
      let pe = Math.round((q - E.margin[0]) / (te + E.margin[0])), Ae = Math.round((z - E.margin[1]) / (E.rowHeight + E.margin[1]));
      return pe = Math.max(Math.min(pe, E.cols - we), 0), Ae = Math.max(Math.min(Ae, E.maxRows - ye), 0), { x: pe, y: Ae };
    }
    function St() {
      return (E.containerWidth - E.margin[0] * (E.cols + 1)) / E.cols;
    }
    function en(z, q, te) {
      return Number.isFinite(z) ? Math.round(q * z + Math.max(0, z - 1) * te) : z;
    }
    function nt(z, q, te) {
      return Math.max(Math.min(z, te), q);
    }
    function It(z, q, te = !1) {
      const pe = St();
      let Ae = Math.round((q + E.margin[0]) / (pe + E.margin[0])), J = 0;
      return te ? J = Math.ceil((z + E.margin[1]) / (E.rowHeight + E.margin[1])) : J = Math.round((z + E.margin[1]) / (E.rowHeight + E.margin[1])), Ae = Math.max(Math.min(Ae, E.cols - Oe), 0), J = Math.max(Math.min(J, E.maxRows - Ie), 0), { w: Ae, h: J };
    }
    function $t(z, q) {
      E.containerWidth = z;
    }
    function mt() {
      Je();
    }
    function Yt() {
      !L.value && D.value && (L.value = zc(D.value), E.useStyleCursor || L.value.styleCursor(!1));
    }
    const ar = Oc(Q);
    function Rt() {
      if (Yt(), !!L.value)
        if (E.draggable && !y.static) {
          const z = {
            ignoreFrom: y.dragIgnoreFrom,
            allowFrom: y.dragAllowFrom,
            ...y.dragOption
          };
          L.value.draggable(z), K || (K = !0, L.value.on("dragstart dragmove dragend", (q) => {
            q.type === "dragmove" ? ar(q) : Q(q);
          }));
        } else
          L.value.draggable({ enabled: !1 });
    }
    const st = Oc(_t);
    function X() {
      if (Yt(), !!L.value)
        if (E.resizable && !y.static) {
          const z = Xt(0, 0, y.maxW, y.maxH), q = Xt(0, 0, y.minW, y.minH), te = {
            edges: {
              left: Me.value ? `.${ct.value[0]}` : !1,
              right: Me.value ? !1 : `.${ct.value[0]}`,
              bottom: `.${ct.value[0]}`,
              top: !1
            },
            ignoreFrom: y.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: q.height * E.transformScale,
                width: q.width * E.transformScale
              },
              max: {
                height: z.height * E.transformScale,
                width: z.width * E.transformScale
              }
            },
            ...y.resizeOption
          };
          y.preserveAspectRatio && (te.modifiers = [zc.modifiers.aspectRatio({ ratio: "preserve" })]), L.value.resizable(te), he || (he = !0, L.value.on("resizestart resizemove resizeend", (pe) => {
            pe.type === "resizemove" ? st(pe) : _t(pe);
          }));
        } else
          L.value.resizable({ enabled: !1 });
    }
    return (z, q) => (Ft(), zn("section", {
      ref_key: "wrapper",
      ref: D,
      class: mc(Pn.value),
      style: Vi(E.style)
    }, [
      mu(z.$slots, "default"),
      Ke.value ? (Ft(), zn("span", {
        key: 0,
        class: mc(ct.value)
      }, null, 2)) : yu("", !0)
    ], 6));
  }
}), Cr = typeof window < "u";
var Lc;
Cr && (Lc = window?.navigator) != null && Lc.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function kc(h) {
  return h != null;
}
function Fc() {
}
const Q0 = Object.freeze({
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
Object.freeze(new Set(Object.keys(Q0)));
const ey = Cr && ("ontouchstart" in window || ny() > 0), ty = ey ? "pointerdown" : "click";
function ny() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function ry(h, d, l = window.Event) {
  const { type: y, bubbles: M = !1, cancelable: O = !1, ...k } = d;
  if (!kc(y) || y === "") return !1;
  let L;
  return kc(l) ? L = new l(y, { bubbles: M, cancelable: O }) : (L = document.createEvent("HTMLEvents"), L.initEvent(y, M, O)), Object.assign(L, k), h.dispatchEvent(L);
}
const iy = "clickoutside", oy = /* @__PURE__ */ new Set();
Cr && document.addEventListener(
  ty,
  (h) => {
    const d = h.target, l = h.composedPath && h.composedPath();
    oy.forEach((y) => {
      y !== d && (l ? !l.includes(y) : !y.contains(d)) && (!y.__transferElement || y.__transferElement !== d && !y.__transferElement.contains(d)) && ry(y, { type: iy });
    });
  },
  !0
);
const ay = [
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
let _a;
if (Cr) {
  for (const h of ay)
    if (h[1] in document) {
      _a = h;
      break;
    }
}
ht(() => !1);
const sy = /* @__PURE__ */ new Set(), uy = /* @__PURE__ */ new WeakMap();
if (Cr && _a) {
  const h = _a[2], d = _a[4];
  document.addEventListener(
    d,
    () => {
      if (sy.forEach((l) => {
        l.value = !1;
      }), document[h]) {
        const l = uy.get(document[h]);
        l && (l.value = !0);
      }
    },
    !1
  );
}
const Nf = /* @__PURE__ */ new Map();
Nf.set("x", 0);
Nf.set("y", 0);
var Rr = [], ly = function() {
  return Rr.some(function(h) {
    return h.activeTargets.length > 0;
  });
}, cy = function() {
  return Rr.some(function(h) {
    return h.skippedTargets.length > 0;
  });
}, Nc = "ResizeObserver loop completed with undelivered notifications.", fy = function() {
  var h;
  typeof ErrorEvent == "function" ? h = new ErrorEvent("error", {
    message: Nc
  }) : (h = document.createEvent("Event"), h.initEvent("error", !1, !1), h.message = Nc), window.dispatchEvent(h);
}, no;
(function(h) {
  h.BORDER_BOX = "border-box", h.CONTENT_BOX = "content-box", h.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(no || (no = {}));
var Mr = function(h) {
  return Object.freeze(h);
}, dy = /* @__PURE__ */ (function() {
  function h(d, l) {
    this.inlineSize = d, this.blockSize = l, Mr(this);
  }
  return h;
})(), Bf = (function() {
  function h(d, l, y, M) {
    return this.x = d, this.y = l, this.width = y, this.height = M, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Mr(this);
  }
  return h.prototype.toJSON = function() {
    var d = this, l = d.x, y = d.y, M = d.top, O = d.right, k = d.bottom, L = d.left, E = d.width, K = d.height;
    return { x: l, y, top: M, right: O, bottom: k, left: L, width: E, height: K };
  }, h.fromRect = function(d) {
    return new h(d.x, d.y, d.width, d.height);
  }, h;
})(), Su = function(h) {
  return h instanceof SVGElement && "getBBox" in h;
}, Wf = function(h) {
  if (Su(h)) {
    var d = h.getBBox(), l = d.width, y = d.height;
    return !l && !y;
  }
  var M = h, O = M.offsetWidth, k = M.offsetHeight;
  return !(O || k || h.getClientRects().length);
}, Bc = function(h) {
  var d;
  if (h instanceof Element)
    return !0;
  var l = (d = h?.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView;
  return !!(l && h instanceof l.Element);
}, hy = function(h) {
  switch (h.tagName) {
    case "INPUT":
      if (h.type !== "image")
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
}, Ji = typeof window < "u" ? window : {}, ya = /* @__PURE__ */ new WeakMap(), Wc = /auto|scroll/, py = /^tb|vertical/, gy = /msie|trident/i.test(Ji.navigator && Ji.navigator.userAgent), Dn = function(h) {
  return parseFloat(h || "0");
}, ai = function(h, d, l) {
  return h === void 0 && (h = 0), d === void 0 && (d = 0), l === void 0 && (l = !1), new dy((l ? d : h) || 0, (l ? h : d) || 0);
}, Uc = Mr({
  devicePixelContentBoxSize: ai(),
  borderBoxSize: ai(),
  contentBoxSize: ai(),
  contentRect: new Bf(0, 0, 0, 0)
}), Uf = function(h, d) {
  if (d === void 0 && (d = !1), ya.has(h) && !d)
    return ya.get(h);
  if (Wf(h))
    return ya.set(h, Uc), Uc;
  var l = getComputedStyle(h), y = Su(h) && h.ownerSVGElement && h.getBBox(), M = !gy && l.boxSizing === "border-box", O = py.test(l.writingMode || ""), k = !y && Wc.test(l.overflowY || ""), L = !y && Wc.test(l.overflowX || ""), E = y ? 0 : Dn(l.paddingTop), K = y ? 0 : Dn(l.paddingRight), he = y ? 0 : Dn(l.paddingBottom), ee = y ? 0 : Dn(l.paddingLeft), ke = y ? 0 : Dn(l.borderTopWidth), ue = y ? 0 : Dn(l.borderRightWidth), ve = y ? 0 : Dn(l.borderBottomWidth), Xe = y ? 0 : Dn(l.borderLeftWidth), Ne = ee + K, We = E + he, Se = Xe + ue, Oe = ke + ve, Ie = L ? h.offsetHeight - Oe - h.clientHeight : 0, we = k ? h.offsetWidth - Se - h.clientWidth : 0, ye = M ? Ne + Se : 0, D = M ? We + Oe : 0, _e = y ? y.width : Dn(l.width) - ye - we, ze = y ? y.height : Dn(l.height) - D - Ie, lt = _e + Ne + we + Se, Y = ze + We + Ie + Oe, oe = Mr({
    devicePixelContentBoxSize: ai(Math.round(_e * devicePixelRatio), Math.round(ze * devicePixelRatio), O),
    borderBoxSize: ai(lt, Y, O),
    contentBoxSize: ai(_e, ze, O),
    contentRect: new Bf(ee, E, _e, ze)
  });
  return ya.set(h, oe), oe;
}, Hf = function(h, d, l) {
  var y = Uf(h, l), M = y.borderBoxSize, O = y.contentBoxSize, k = y.devicePixelContentBoxSize;
  switch (d) {
    case no.DEVICE_PIXEL_CONTENT_BOX:
      return k;
    case no.BORDER_BOX:
      return M;
    default:
      return O;
  }
}, vy = /* @__PURE__ */ (function() {
  function h(d) {
    var l = Uf(d);
    this.target = d, this.contentRect = l.contentRect, this.borderBoxSize = Mr([l.borderBoxSize]), this.contentBoxSize = Mr([l.contentBoxSize]), this.devicePixelContentBoxSize = Mr([l.devicePixelContentBoxSize]);
  }
  return h;
})(), Gf = function(h) {
  if (Wf(h))
    return 1 / 0;
  for (var d = 0, l = h.parentNode; l; )
    d += 1, l = l.parentNode;
  return d;
}, my = function() {
  var h = 1 / 0, d = [];
  Rr.forEach(function(O) {
    if (O.activeTargets.length !== 0) {
      var k = [];
      O.activeTargets.forEach(function(L) {
        var E = new vy(L.target), K = Gf(L.target);
        k.push(E), L.lastReportedSize = Hf(L.target, L.observedBox), K < h && (h = K);
      }), d.push(function() {
        O.callback.call(O.observer, k, O.observer);
      }), O.activeTargets.splice(0, O.activeTargets.length);
    }
  });
  for (var l = 0, y = d; l < y.length; l++) {
    var M = y[l];
    M();
  }
  return h;
}, Hc = function(h) {
  Rr.forEach(function(d) {
    d.activeTargets.splice(0, d.activeTargets.length), d.skippedTargets.splice(0, d.skippedTargets.length), d.observationTargets.forEach(function(l) {
      l.isActive() && (Gf(l.target) > h ? d.activeTargets.push(l) : d.skippedTargets.push(l));
    });
  });
}, yy = function() {
  var h = 0;
  for (Hc(h); ly(); )
    h = my(), Hc(h);
  return cy() && fy(), h > 0;
}, Qs, qf = [], by = function() {
  return qf.splice(0).forEach(function(h) {
    return h();
  });
}, xy = function(h) {
  if (!Qs) {
    var d = 0, l = document.createTextNode(""), y = { characterData: !0 };
    new MutationObserver(function() {
      return by();
    }).observe(l, y), Qs = function() {
      l.textContent = "".concat(d ? d-- : d++);
    };
  }
  qf.push(h), Qs();
}, wy = function(h) {
  xy(function() {
    requestAnimationFrame(h);
  });
}, Sa = 0, _y = function() {
  return !!Sa;
}, Sy = 250, Ey = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Gc = [
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
], qc = function(h) {
  return h === void 0 && (h = 0), Date.now() + h;
}, eu = !1, Ty = (function() {
  function h() {
    var d = this;
    this.stopped = !0, this.listener = function() {
      return d.schedule();
    };
  }
  return h.prototype.run = function(d) {
    var l = this;
    if (d === void 0 && (d = Sy), !eu) {
      eu = !0;
      var y = qc(d);
      wy(function() {
        var M = !1;
        try {
          M = yy();
        } finally {
          if (eu = !1, d = y - qc(), !_y())
            return;
          M ? l.run(1e3) : d > 0 ? l.run(d) : l.start();
        }
      });
    }
  }, h.prototype.schedule = function() {
    this.stop(), this.run();
  }, h.prototype.observe = function() {
    var d = this, l = function() {
      return d.observer && d.observer.observe(document.body, Ey);
    };
    document.body ? l() : Ji.addEventListener("DOMContentLoaded", l);
  }, h.prototype.start = function() {
    var d = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Gc.forEach(function(l) {
      return Ji.addEventListener(l, d.listener, !0);
    }));
  }, h.prototype.stop = function() {
    var d = this;
    this.stopped || (this.observer && this.observer.disconnect(), Gc.forEach(function(l) {
      return Ji.removeEventListener(l, d.listener, !0);
    }), this.stopped = !0);
  }, h;
})(), wu = new Ty(), Xc = function(h) {
  !Sa && h > 0 && wu.start(), Sa += h, !Sa && wu.stop();
}, Oy = function(h) {
  return !Su(h) && !hy(h) && getComputedStyle(h).display === "inline";
}, Iy = (function() {
  function h(d, l) {
    this.target = d, this.observedBox = l || no.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return h.prototype.isActive = function() {
    var d = Hf(this.target, this.observedBox, !0);
    return Oy(this.target) && (this.lastReportedSize = d), this.lastReportedSize.inlineSize !== d.inlineSize || this.lastReportedSize.blockSize !== d.blockSize;
  }, h;
})(), Ry = /* @__PURE__ */ (function() {
  function h(d, l) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = d, this.callback = l;
  }
  return h;
})(), ba = /* @__PURE__ */ new WeakMap(), $c = function(h, d) {
  for (var l = 0; l < h.length; l += 1)
    if (h[l].target === d)
      return l;
  return -1;
}, xa = (function() {
  function h() {
  }
  return h.connect = function(d, l) {
    var y = new Ry(d, l);
    ba.set(d, y);
  }, h.observe = function(d, l, y) {
    var M = ba.get(d), O = M.observationTargets.length === 0;
    $c(M.observationTargets, l) < 0 && (O && Rr.push(M), M.observationTargets.push(new Iy(l, y && y.box)), Xc(1), wu.schedule());
  }, h.unobserve = function(d, l) {
    var y = ba.get(d), M = $c(y.observationTargets, l), O = y.observationTargets.length === 1;
    M >= 0 && (O && Rr.splice(Rr.indexOf(y), 1), y.observationTargets.splice(M, 1), Xc(-1));
  }, h.disconnect = function(d) {
    var l = this, y = ba.get(d);
    y.observationTargets.slice().forEach(function(M) {
      return l.unobserve(d, M.target);
    }), y.activeTargets.splice(0, y.activeTargets.length);
  }, h;
})(), My = (function() {
  function h(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof d != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    xa.connect(this, d);
  }
  return h.prototype.observe = function(d, l) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Bc(d))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    xa.observe(this, d, l);
  }, h.prototype.unobserve = function(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Bc(d))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    xa.unobserve(this, d);
  }, h.prototype.disconnect = function() {
    xa.disconnect(this);
  }, h.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, h;
})();
const Ta = /* @__PURE__ */ new WeakMap();
function Cy(h) {
  var d;
  for (let l = 0, y = h.length; l < y; ++l) {
    const M = h[l], O = Ta.get(M.target);
    if (typeof O == "function") {
      const { inlineSize: k, blockSize: L } = ((d = M.borderBoxSize) == null ? void 0 : d[0]) ?? {}, { offsetWidth: E, offsetHeight: K } = M.target;
      O(
        Object.assign(M, {
          offsetWidth: E,
          offsetHeight: K,
          width: k ?? E,
          height: L ?? K
        })
      );
    }
  }
}
const Xf = new (Cr && window.ResizeObserver || My)(
  Cy
);
function Yc(h, d) {
  Ta.set(h, d), Xf.observe(h);
}
function Kc(h) {
  Ta.has(h) && (Xf.unobserve(h), Ta.delete(h));
}
function Ay(h = {}) {
  let d = Fc;
  const l = je(
    () => ut(h.target),
    (M) => {
      d(), !(!M || typeof h.onResize != "function") && (Yc(M, h.onResize), d = () => {
        Kc(M), d = Fc;
      });
    },
    { immediate: !0 }
  ), y = () => {
    l(), d();
  };
  return h0() && p0(y), {
    /**
     * @deprecated Will be removed in next major version, please directly use `observeResize` from imports.
     */
    observeResize: Yc,
    /**
     * @deprecated Will be removed in next major version, please directly use `unobserveResize` from imports.
     */
    unobserveResize: Kc,
    unobserve: y
  };
}
const Dy = at(!1);
ht(() => Dy.value);
const Vc = "__theme_style__", tu = "__theme_observer__", jc = eo(/* @__PURE__ */ new Map()), Zc = /* @__PURE__ */ new Map();
je(jc, () => {
  if (!Cr) return;
  Zc.clear();
  const h = document.head.querySelector(`#${Vc}`);
  h && document.head.removeChild(h);
  const d = document.createElement("style");
  let l = `.${tu} { width: 1px }`, y = 1;
  for (const [M, [O, k]] of jc.entries())
    l += ` html.${O} .${tu}, .${k} .${tu} { width: ${++y}px }`, Zc.set(y, M);
  d.textContent = l, d.id = Vc, document.head.appendChild(d);
});
const $f = /* @__PURE__ */ Ia({
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
  setup(h, { expose: d, emit: l }) {
    const y = h, M = l, O = eo({
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
    }), k = /* @__PURE__ */ new Map(), L = at(y.layout), E = at(), { observeResize: K, unobserveResize: he } = Ay(), ee = A0();
    ee.on("resizeEvent", ke), ee.on("dragEvent", ue), yf(() => {
      M("layout-before-mount", L.value);
    }), Ra(() => {
      M("layout-mounted", L.value), qt(() => {
        H0(L.value), O.originalLayout = L.value, qt(() => {
          ze(), E.value && K(E.value, D0(Oe, 16)), ri(L.value, y.verticalCompact), M("layout-updated", L.value), Se(), Oe();
        });
      });
    }), _u(() => {
      ee.clearAll(), E.value && he(E.value);
    });
    function ke(Y, oe, ne, be, fe, Re) {
      D(Y, oe, ne, be, fe, Re);
    }
    function ue(Y, oe, ne, be, fe, Re) {
      ye(Y, oe, ne, be, fe, Re);
    }
    je(
      () => O.width,
      (Y, oe) => {
        qt(() => {
          ee.emit("updateWidth", Y), oe === -1 && qt(() => {
            M("layout-ready", L.value);
          }), Se();
        });
      }
    ), je(
      () => [y.layout, y.layout.length],
      () => {
        L.value = y.layout, We();
      }
    ), je(
      () => y.colNum,
      (Y) => {
        ee.emit("setColNum", Y);
      }
    ), je(
      () => y.rowHeight,
      (Y) => {
        ee.emit("setRowHeight", Y);
      }
    ), je(
      () => y.isDraggable,
      (Y) => {
        ee.emit("setDraggable", Y);
      }
    ), je(
      () => y.isResizable,
      (Y) => {
        ee.emit("setResizable", Y);
      }
    ), je(
      () => y.isBounded,
      (Y) => {
        ee.emit("setBounded", Y);
      }
    ), je(
      () => y.transformScale,
      (Y) => {
        ee.emit("setTransformScale", Y);
      }
    ), je(
      () => y.responsive,
      (Y) => {
        Y || (M("update:layout", O.originalLayout), ee.emit("setColNum", y.colNum)), Oe();
      }
    ), je(
      () => y.maxRows,
      (Y) => {
        ee.emit("setMaxRows", Y);
      }
    ), je([() => y.margin, () => y.margin[1]], Se), yc(
      Mf,
      eo({
        ...bc(y),
        ...bc(O),
        increaseItem: ve,
        decreaseItem: Xe
      })
    ), yc(Cf, ee), d({ state: O, getItem: Ne, resizeEvent: D, dragEvent: ye, layoutUpdate: We });
    function ve(Y) {
      k.set(Y.i, Y);
    }
    function Xe(Y) {
      k.delete(Y.i);
    }
    function Ne(Y) {
      return k.get(Y);
    }
    function We() {
      if (!Qt(L.value) && !Qt(O.originalLayout)) {
        if (L.value.length !== O.originalLayout.length) {
          const Y = lt(L.value, O.originalLayout);
          if (Y.length > 0)
            if (L.value.length > O.originalLayout.length)
              O.originalLayout = O.originalLayout.concat(Y);
            else {
              const oe = new Set(Y.map((ne) => ne.i));
              O.originalLayout = O.originalLayout.filter((ne) => !oe.has(ne.i));
            }
          O.lastLayoutLength = L.value.length, ze();
        }
        ri(L.value, y.verticalCompact), ee.emit("updateWidth", O.width), Se(), M("layout-updated", L.value);
      }
    }
    function Se() {
      O.mergedStyle = {
        height: Ie()
      };
    }
    function Oe() {
      E.value && (O.width = E.value.offsetWidth), ee.emit("resizeEvent");
    }
    function Ie() {
      if (!y.autoSize) return;
      const Y = parseFloat(y.margin[1]);
      return P0(L.value) * (y.rowHeight + Y) + Y + "px";
    }
    let we;
    function ye(Y, oe, ne, be, fe, Re) {
      let ae = Ic(L.value, oe);
      Qt(ae) && (ae = { h: 0, w: 0, x: 0, y: 0, i: "" }), Y === "dragstart" && !y.verticalCompact && (we = L.value.reduce(
        (Ze, { i: Ge, x: Ke, y: Me }) => ({
          ...Ze,
          [Ge]: { x: Ke, y: Me }
        }),
        {}
      )), Y === "dragmove" || Y === "dragstart" ? (O.placeholder.i = oe, O.placeholder.x = ae.x, O.placeholder.y = ae.y, O.placeholder.w = Re, O.placeholder.h = fe, qt(() => {
        O.isDragging = !0;
      }), ee.emit("updateWidth", O.width)) : qt(() => {
        O.isDragging = !1;
      }), L.value = xu(L.value, ae, ne, be, !0, y.preventCollision), y.restoreOnDrag ? (ae.static = !0, ri(L.value, y.verticalCompact, we), ae.static = !1) : ri(L.value, y.verticalCompact), ee.emit("compact"), Se(), Y === "dragend" && (we = void 0, M("layout-updated", L.value));
    }
    function D(Y, oe, ne, be, fe, Re) {
      let ae = Ic(L.value, oe);
      Qt(ae) && (ae = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let Ze;
      if (y.preventCollision) {
        const Ge = Df(L.value, { ...ae, w: Re, h: fe }).filter(
          (Ke) => Ke.i !== ae.i
        );
        if (Ze = Ge.length > 0, Ze) {
          let Ke = 1 / 0, Me = 1 / 0;
          Ge.forEach((Nt) => {
            Nt.x > ae.x && (Ke = Math.min(Ke, Nt.x)), Nt.y > ae.y && (Me = Math.min(Me, Nt.y));
          }), Number.isFinite(Ke) && (ae.w = Ke - ae.x), Number.isFinite(Me) && (ae.h = Me - ae.y);
        }
      }
      Ze || (ae.w = Re, ae.h = fe), Y === "resizestart" || Y === "resizemove" ? (O.placeholder.i = oe, O.placeholder.x = ne, O.placeholder.y = be, O.placeholder.w = ae.w, O.placeholder.h = ae.h, qt(() => {
        O.isDragging = !0;
      }), ee.emit("updateWidth", O.width)) : Y && qt(() => {
        O.isDragging = !1;
      }), y.responsive && _e(), ri(L.value, y.verticalCompact), ee.emit("compact"), Se(), Y === "resizeend" && M("layout-updated", L.value);
    }
    function _e() {
      const Y = $0(y.breakpoints, O.width);
      if (Y === O.lastBreakpoint)
        return;
      const oe = Lf(Y, y.cols);
      !Qt(O.lastBreakpoint) && !O.layouts[O.lastBreakpoint] && (O.layouts[O.lastBreakpoint] = bu(L.value));
      const ne = Y0(
        O.originalLayout,
        O.layouts,
        y.breakpoints,
        Y,
        O.lastBreakpoint,
        oe,
        y.verticalCompact
      );
      O.layouts[Y] = ne, O.lastBreakpoint !== Y && M("breakpoint-changed", Y, ne), L.value = ne, M("update:layout", ne), O.lastBreakpoint = Y, ee.emit("setColNum", oe);
    }
    function ze() {
      O.layouts = Object.assign({}, y.responsiveLayouts);
    }
    function lt(Y, oe) {
      const ne = new Set(oe.map((ae) => ae.i)), be = new Set(Y.map((ae) => ae.i)), fe = Y.filter((ae) => !ne.has(ae.i)), Re = oe.filter((ae) => !be.has(ae.i));
      return fe.concat(Re);
    }
    return (Y, oe) => (Ft(), zn("div", {
      ref_key: "wrapper",
      ref: E,
      class: "vgl-layout",
      style: Vi(O.mergedStyle)
    }, [
      Y.$slots.default ? mu(Y.$slots, "default", { key: 0 }) : (Ft(!0), zn(g0, { key: 1 }, v0(L.value, (ne) => (Ft(), to(Pc, m0({
        key: ne.i,
        ref_for: !0
      }, ne), {
        default: oi(() => [
          mu(Y.$slots, "item", { item: ne })
        ]),
        _: 2
      }, 1040))), 128)),
      bf(ni(Pc, {
        class: "vgl-item--placeholder",
        x: O.placeholder.x,
        y: O.placeholder.y,
        w: O.placeholder.w,
        h: O.placeholder.h,
        i: O.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [xf, O.isDragging]
      ])
    ], 4));
  }
});
(function() {
  try {
    if (typeof document < "u") {
      var h = document.createElement("style");
      h.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}')), document.head.appendChild(h);
    }
  } catch (d) {
    console.error("vite-plugin-css-injected-by-js", d);
  }
})();
const Jc = {
  rowHeight: 30,
  cols: { lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }
}, ii = { lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 };
function Yf(h) {
  const d = Ea(h);
  return {
    rowHeight: d.rowHeight ?? Jc.rowHeight,
    cols: { ...Jc.cols, ...Ea(d.cols) }
  };
}
const zy = { class: "scroll max-h-screen ml-15" }, Py = {
  key: 1,
  class: "text"
}, Ly = /* @__PURE__ */ Ia({
  __name: "View",
  props: {
    pageId: {},
    layoutSettings: {}
  },
  setup(h) {
    const d = h, l = at(void 0), y = ht(() => Yf(l.value)), M = ht(() => y.value.cols), O = ht(() => y.value.rowHeight), k = ht(() => `${O.value}-${Object.values(M.value).join("-")}`), L = Sf(), E = d.pageId ?? L.params.pageid ?? "", K = wf(E), he = K.widgets, ee = K.layout, ke = Qi(w0.TINY_EMITTER), ue = Qi(Ef) ?? null;
    function ve() {
      if (ue && E) {
        const ye = ue.getPage(E);
        l.value = ye?.layoutSettings ? { ...Ea(ye.layoutSettings) } : void 0;
      }
    }
    Ra(async () => {
      console.log("Grid View component mounted for page:", E), ve(), ue && "subscribe" in ue && ue.subscribe((ye) => {
        ye === "PAGE_UPDATE" && ve();
      }), await qt(), Xe();
    });
    const Xe = () => {
      ke.emit("system:pageLoaded", { pageId: E });
    }, Ne = at(), We = at();
    function Se(ye, D) {
      const _e = Number(ye);
      return Number.isFinite(_e) ? _e : D;
    }
    function Oe() {
      return { colW: 1200 / M.value.md, rowH: O.value };
    }
    function Ie(ye) {
      const { colW: D, rowH: _e } = Oe(), ze = Se(ye.x, 0), lt = Se(ye.y, 0), Y = Se(ye.width, D), oe = Se(ye.height, _e);
      return {
        i: String(ye.id ?? ye.i ?? ""),
        x: Math.round(ze / D),
        y: Math.round(lt / _e),
        w: Math.max(1, Math.round(Y / D)),
        h: Math.max(1, Math.round(oe / _e)),
        static: !1
      };
    }
    let we = ht(() => (ee.value || []).map(Ie));
    return (ye, D) => (Ft(), zn("div", zy, [
      wa("div", {
        ref_key: "wrapper",
        ref: We,
        class: "view_grid_layout"
      }, [
        (Ft(), to(ut($f), {
          ref_key: "gridLayout",
          ref: Ne,
          key: k.value,
          layout: ut(we),
          "onUpdate:layout": D[0] || (D[0] = (_e) => y0(we) ? we.value = _e : we = _e),
          "row-height": O.value,
          responsive: !0,
          "vertical-compact": !1,
          breakpoints: ut(ii),
          cols: M.value,
          "is-draggable": !1,
          "is-resizable": !1
        }, {
          item: oi(({ item: _e }) => [
            ut(he)?.find((ze) => ze.uid === _e.i) ? (Ft(), to(ut(_f), {
              key: 0,
              widget: ut(he).find((ze) => ze.uid === _e.i),
              ref: `${_e.i}_wrapper`,
              editEnabled: !1
            }, null, 8, ["widget"])) : (Ft(), zn("span", Py, $i(`${_e.i}${_e.static ? "- Static" : ""}`), 1))
          ]),
          _: 1
        }, 8, ["layout", "row-height", "breakpoints", "cols"]))
      ], 512)
    ]));
  }
}), Kf = (h, d) => {
  const l = h.__vccOpts || h;
  for (const [y, M] of d)
    l[y] = M;
  return l;
}, ky = /* @__PURE__ */ Kf(Ly, [["__scopeId", "data-v-a0615a07"]]);
var Ki = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Fy = Ki.exports, Qc;
function Ny() {
  return Qc || (Qc = 1, (function(h, d) {
    (function() {
      var l, y = "4.17.21", M = 200, O = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", k = "Expected a function", L = "Invalid `variable` option passed into `_.template`", E = "__lodash_hash_undefined__", K = 500, he = "__lodash_placeholder__", ee = 1, ke = 2, ue = 4, ve = 1, Xe = 2, Ne = 1, We = 2, Se = 4, Oe = 8, Ie = 16, we = 32, ye = 64, D = 128, _e = 256, ze = 512, lt = 30, Y = "...", oe = 800, ne = 16, be = 1, fe = 2, Re = 3, ae = 1 / 0, Ze = 9007199254740991, Ge = 17976931348623157e292, Ke = NaN, Me = 4294967295, Nt = Me - 1, pt = Me >>> 1, Pn = [
        ["ary", D],
        ["bind", Ne],
        ["bindKey", We],
        ["curry", Oe],
        ["curryRight", Ie],
        ["flip", ze],
        ["partial", we],
        ["partialRight", ye],
        ["rearg", _e]
      ], ct = "[object Arguments]", Je = "[object Array]", pn = "[object AsyncFunction]", _t = "[object Boolean]", Q = "[object Date]", Xt = "[object DOMException]", Ot = "[object Error]", St = "[object Function]", en = "[object GeneratorFunction]", nt = "[object Map]", It = "[object Number]", $t = "[object Null]", mt = "[object Object]", Yt = "[object Promise]", ar = "[object Proxy]", Rt = "[object RegExp]", st = "[object Set]", X = "[object String]", z = "[object Symbol]", q = "[object Undefined]", te = "[object WeakMap]", pe = "[object WeakSet]", Ae = "[object ArrayBuffer]", J = "[object DataView]", re = "[object Float32Array]", Qe = "[object Float64Array]", rt = "[object Int8Array]", yt = "[object Int16Array]", tn = "[object Int32Array]", nn = "[object Uint8Array]", rn = "[object Uint8ClampedArray]", Sn = "[object Uint16Array]", En = "[object Uint32Array]", gn = /\b__p \+= '';/g, sr = /\b(__p \+=) '' \+/g, Kn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, si = /&(?:amp|lt|gt|quot|#39);/g, Ar = /[&<>"']/g, ro = RegExp(si.source), ui = RegExp(Ar.source), li = /<%-([\s\S]+?)%>/g, io = /<%([\s\S]+?)%>/g, ci = /<%=([\s\S]+?)%>/g, Ma = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fi = /^\w*$/, di = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hi = /[\\^$.*+?()[\]{}|]/g, Ca = RegExp(hi.source), Dr = /^\s+/, vn = /\s/, Ln = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, mn = /\{\n\/\* \[wrapped with (.+)\] \*/, Aa = /,? & /, Da = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, oo = /[()=,{}\[\]\/\s]/, Tn = /\\(\\)?/g, de = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, pi = /\w*$/, ao = /^[-+]0x[0-9a-f]+$/i, za = /^0b[01]+$/i, Pa = /^\[object .+?Constructor\]$/, ur = /^0o[0-7]+$/i, gi = /^(?:0|[1-9]\d*)$/, La = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, zr = /($^)/, ka = /['\n\r\u2028\u2029\\]/g, lr = "\\ud800-\\udfff", Fa = "\\u0300-\\u036f", so = "\\ufe20-\\ufe2f", uo = "\\u20d0-\\u20ff", cr = Fa + so + uo, vi = "\\u2700-\\u27bf", Pr = "a-z\\xdf-\\xf6\\xf8-\\xff", lo = "\\xac\\xb1\\xd7\\xf7", Na = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mi = "\\u2000-\\u206f", Ba = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Lr = "A-Z\\xc0-\\xd6\\xd8-\\xde", co = "\\ufe0e\\ufe0f", fo = lo + Na + mi + Ba, yi = "['’]", Wa = "[" + lr + "]", ho = "[" + fo + "]", fr = "[" + cr + "]", dr = "\\d+", Vn = "[" + vi + "]", kr = "[" + Pr + "]", hr = "[^" + lr + fo + dr + vi + Pr + Lr + "]", on = "\\ud83c[\\udffb-\\udfff]", pr = "(?:" + fr + "|" + on + ")", po = "[^" + lr + "]", Fr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Nr = "[\\ud800-\\udbff][\\udc00-\\udfff]", On = "[" + Lr + "]", go = "\\u200d", vo = "(?:" + kr + "|" + hr + ")", mo = "(?:" + On + "|" + hr + ")", yo = "(?:" + yi + "(?:d|ll|m|re|s|t|ve))?", bo = "(?:" + yi + "(?:D|LL|M|RE|S|T|VE))?", bi = pr + "?", xi = "[" + co + "]?", Ua = "(?:" + go + "(?:" + [po, Fr, Nr].join("|") + ")" + xi + bi + ")*", wi = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ha = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", _i = xi + bi + Ua, Ga = "(?:" + [Vn, Fr, Nr].join("|") + ")" + _i, Br = "(?:" + [po + fr + "?", fr, Fr, Nr, Wa].join("|") + ")", qa = RegExp(yi, "g"), xo = RegExp(fr, "g"), Wr = RegExp(on + "(?=" + on + ")|" + Br + _i, "g"), Xa = RegExp([
        On + "?" + kr + "+" + yo + "(?=" + [ho, On, "$"].join("|") + ")",
        mo + "+" + bo + "(?=" + [ho, On + vo, "$"].join("|") + ")",
        On + "?" + vo + "+" + yo,
        On + "+" + bo,
        Ha,
        wi,
        dr,
        Ga
      ].join("|"), "g"), wo = RegExp("[" + go + lr + cr + co + "]"), _o = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, $a = [
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
      Ue[re] = Ue[Qe] = Ue[rt] = Ue[yt] = Ue[tn] = Ue[nn] = Ue[rn] = Ue[Sn] = Ue[En] = !0, Ue[ct] = Ue[Je] = Ue[Ae] = Ue[_t] = Ue[J] = Ue[Q] = Ue[Ot] = Ue[St] = Ue[nt] = Ue[It] = Ue[mt] = Ue[Rt] = Ue[st] = Ue[X] = Ue[te] = !1;
      var $e = {};
      $e[ct] = $e[Je] = $e[Ae] = $e[J] = $e[_t] = $e[Q] = $e[re] = $e[Qe] = $e[rt] = $e[yt] = $e[tn] = $e[nt] = $e[It] = $e[mt] = $e[Rt] = $e[st] = $e[X] = $e[z] = $e[nn] = $e[rn] = $e[Sn] = $e[En] = !0, $e[Ot] = $e[St] = $e[te] = !1;
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
      }, So = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Ya = {
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
      }, Eo = parseFloat, To = parseInt, Ur = typeof or == "object" && or && or.Object === Object && or, Ka = typeof self == "object" && self && self.Object === Object && self, ft = Ur || Ka || Function("return this")(), an = d && !d.nodeType && d, kn = an && !0 && h && !h.nodeType && h, Oo = kn && kn.exports === an, Ti = Oo && Ur.process, Mt = (function() {
        try {
          var w = kn && kn.require && kn.require("util").types;
          return w || Ti && Ti.binding && Ti.binding("util");
        } catch {
        }
      })(), Oi = Mt && Mt.isArrayBuffer, gt = Mt && Mt.isDate, Io = Mt && Mt.isMap, Ro = Mt && Mt.isRegExp, Mo = Mt && Mt.isSet, Co = Mt && Mt.isTypedArray;
      function Ct(w, A, R) {
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
      function Va(w, A, R, F) {
        for (var $ = -1, ge = w == null ? 0 : w.length; ++$ < ge; ) {
          var me = w[$];
          A(F, me, R(me), w);
        }
        return F;
      }
      function Bt(w, A) {
        for (var R = -1, F = w == null ? 0 : w.length; ++R < F && A(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function ja(w, A) {
        for (var R = w == null ? 0 : w.length; R-- && A(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function Ii(w, A) {
        for (var R = -1, F = w == null ? 0 : w.length; ++R < F; )
          if (!A(w[R], R, w))
            return !1;
        return !0;
      }
      function Kt(w, A) {
        for (var R = -1, F = w == null ? 0 : w.length, $ = 0, ge = []; ++R < F; ) {
          var me = w[R];
          A(me, R, w) && (ge[$++] = me);
        }
        return ge;
      }
      function sn(w, A) {
        var R = w == null ? 0 : w.length;
        return !!R && Zn(w, A, 0) > -1;
      }
      function jn(w, A, R) {
        for (var F = -1, $ = w == null ? 0 : w.length; ++F < $; )
          if (R(A, w[F]))
            return !0;
        return !1;
      }
      function Ve(w, A) {
        for (var R = -1, F = w == null ? 0 : w.length, $ = Array(F); ++R < F; )
          $[R] = A(w[R], R, w);
        return $;
      }
      function yn(w, A) {
        for (var R = -1, F = A.length, $ = w.length; ++R < F; )
          w[$ + R] = A[R];
        return w;
      }
      function Hr(w, A, R, F) {
        var $ = -1, ge = w == null ? 0 : w.length;
        for (F && ge && (R = w[++$]); ++$ < ge; )
          R = A(R, w[$], $, w);
        return R;
      }
      function Ao(w, A, R, F) {
        var $ = w == null ? 0 : w.length;
        for (F && $ && (R = w[--$]); $--; )
          R = A(R, w[$], $, w);
        return R;
      }
      function Fn(w, A) {
        for (var R = -1, F = w == null ? 0 : w.length; ++R < F; )
          if (A(w[R], R, w))
            return !0;
        return !1;
      }
      var Za = Mi("length");
      function Ja(w) {
        return w.split("");
      }
      function Qa(w) {
        return w.match(Da) || [];
      }
      function Do(w, A, R) {
        var F;
        return R(w, function($, ge, me) {
          if (A($, ge, me))
            return F = ge, !1;
        }), F;
      }
      function Gr(w, A, R, F) {
        for (var $ = w.length, ge = R + (F ? 1 : -1); F ? ge-- : ++ge < $; )
          if (A(w[ge], ge, w))
            return ge;
        return -1;
      }
      function Zn(w, A, R) {
        return A === A ? v(w, A, R) : Gr(w, zo, R);
      }
      function Ri(w, A, R, F) {
        for (var $ = R - 1, ge = w.length; ++$ < ge; )
          if (F(w[$], A))
            return $;
        return -1;
      }
      function zo(w) {
        return w !== w;
      }
      function vr(w, A) {
        var R = w == null ? 0 : w.length;
        return R ? qr(w, A) / R : Ke;
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
      function Po(w, A, R, F, $) {
        return $(w, function(ge, me, Ee) {
          R = F ? (F = !1, ge) : A(R, ge, me, Ee);
        }), R;
      }
      function es(w, A) {
        var R = w.length;
        for (w.sort(A); R--; )
          w[R] = w[R].value;
        return w;
      }
      function qr(w, A) {
        for (var R, F = -1, $ = w.length; ++F < $; ) {
          var ge = A(w[F]);
          ge !== l && (R = R === l ? ge : R + ge);
        }
        return R;
      }
      function Nn(w, A) {
        for (var R = -1, F = Array(w); ++R < w; )
          F[R] = A(R);
        return F;
      }
      function In(w, A) {
        return Ve(A, function(R) {
          return [R, w[R]];
        });
      }
      function Ci(w) {
        return w && w.slice(0, I(w) + 1).replace(Dr, "");
      }
      function bt(w) {
        return function(A) {
          return w(A);
        };
      }
      function Ai(w, A) {
        return Ve(A, function(R) {
          return w[R];
        });
      }
      function yr(w, A) {
        return w.has(A);
      }
      function Lo(w, A) {
        for (var R = -1, F = w.length; ++R < F && Zn(A, w[R], 0) > -1; )
          ;
        return R;
      }
      function ko(w, A) {
        for (var R = w.length; R-- && Zn(A, w[R], 0) > -1; )
          ;
        return R;
      }
      function ts(w, A) {
        for (var R = w.length, F = 0; R--; )
          w[R] === A && ++F;
        return F;
      }
      var ns = mr(Si), rs = mr(So);
      function is(w) {
        return "\\" + Ei[w];
      }
      function os(w, A) {
        return w == null ? l : w[A];
      }
      function Jn(w) {
        return wo.test(w);
      }
      function r(w) {
        return _o.test(w);
      }
      function n(w) {
        for (var A, R = []; !(A = w.next()).done; )
          R.push(A.value);
        return R;
      }
      function o(w) {
        var A = -1, R = Array(w.size);
        return w.forEach(function(F, $) {
          R[++A] = [$, F];
        }), R;
      }
      function a(w, A) {
        return function(R) {
          return w(A(R));
        };
      }
      function u(w, A) {
        for (var R = -1, F = w.length, $ = 0, ge = []; ++R < F; ) {
          var me = w[R];
          (me === A || me === he) && (w[R] = he, ge[$++] = R);
        }
        return ge;
      }
      function c(w) {
        var A = -1, R = Array(w.size);
        return w.forEach(function(F) {
          R[++A] = F;
        }), R;
      }
      function p(w) {
        var A = -1, R = Array(w.size);
        return w.forEach(function(F) {
          R[++A] = [F, F];
        }), R;
      }
      function v(w, A, R) {
        for (var F = R - 1, $ = w.length; ++F < $; )
          if (w[F] === A)
            return F;
        return -1;
      }
      function b(w, A, R) {
        for (var F = R + 1; F--; )
          if (w[F] === A)
            return F;
        return F;
      }
      function S(w) {
        return Jn(w) ? H(w) : Za(w);
      }
      function x(w) {
        return Jn(w) ? W(w) : Ja(w);
      }
      function I(w) {
        for (var A = w.length; A-- && vn.test(w.charAt(A)); )
          ;
        return A;
      }
      var P = mr(Ya);
      function H(w) {
        for (var A = Wr.lastIndex = 0; Wr.test(w); )
          ++A;
        return A;
      }
      function W(w) {
        return w.match(Wr) || [];
      }
      function G(w) {
        return w.match(Xa) || [];
      }
      var Z = (function w(A) {
        A = A == null ? ft : V.defaults(ft.Object(), A, V.pick(ft, $a));
        var R = A.Array, F = A.Date, $ = A.Error, ge = A.Function, me = A.Math, Ee = A.Object, At = A.RegExp, bn = A.String, xt = A.TypeError, Rn = R.prototype, id = ge.prototype, Xr = Ee.prototype, Fo = A["__core-js_shared__"], No = id.toString, qe = Xr.hasOwnProperty, od = 0, Ru = (function() {
          var e = /[^.]+$/.exec(Fo && Fo.keys && Fo.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Bo = Xr.toString, ad = No.call(Ee), sd = ft._, ud = At(
          "^" + No.call(qe).replace(hi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Wo = Oo ? A.Buffer : l, Qn = A.Symbol, Uo = A.Uint8Array, Mu = Wo ? Wo.allocUnsafe : l, Ho = a(Ee.getPrototypeOf, Ee), Cu = Ee.create, Au = Xr.propertyIsEnumerable, Go = Rn.splice, Du = Qn ? Qn.isConcatSpreadable : l, Di = Qn ? Qn.iterator : l, br = Qn ? Qn.toStringTag : l, qo = (function() {
          try {
            var e = Er(Ee, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), ld = A.clearTimeout !== ft.clearTimeout && A.clearTimeout, cd = F && F.now !== ft.Date.now && F.now, fd = A.setTimeout !== ft.setTimeout && A.setTimeout, Xo = me.ceil, $o = me.floor, as = Ee.getOwnPropertySymbols, dd = Wo ? Wo.isBuffer : l, zu = A.isFinite, hd = Rn.join, pd = a(Ee.keys, Ee), dt = me.max, Et = me.min, gd = F.now, vd = A.parseInt, Pu = me.random, md = Rn.reverse, ss = Er(A, "DataView"), zi = Er(A, "Map"), us = Er(A, "Promise"), $r = Er(A, "Set"), Pi = Er(A, "WeakMap"), Li = Er(Ee, "create"), Yo = Pi && new Pi(), Yr = {}, yd = Tr(ss), bd = Tr(zi), xd = Tr(us), wd = Tr($r), _d = Tr(Pi), Ko = Qn ? Qn.prototype : l, ki = Ko ? Ko.valueOf : l, Lu = Ko ? Ko.toString : l;
        function g(e) {
          if (tt(e) && !xe(e) && !(e instanceof Le)) {
            if (e instanceof un)
              return e;
            if (qe.call(e, "__wrapped__"))
              return kl(e);
          }
          return new un(e);
        }
        var Kr = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!et(t))
              return {};
            if (Cu)
              return Cu(t);
            e.prototype = t;
            var i = new e();
            return e.prototype = l, i;
          };
        })();
        function Vo() {
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
          evaluate: io,
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
        }, g.prototype = Vo.prototype, g.prototype.constructor = g, un.prototype = Kr(Vo.prototype), un.prototype.constructor = un;
        function Le(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Me, this.__views__ = [];
        }
        function Sd() {
          var e = new Le(this.__wrapped__);
          return e.__actions__ = Wt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Wt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Wt(this.__views__), e;
        }
        function Ed() {
          if (this.__filtered__) {
            var e = new Le(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function Td() {
          var e = this.__wrapped__.value(), t = this.__dir__, i = xe(e), s = t < 0, f = i ? e.length : 0, m = Fh(0, f, this.__views__), _ = m.start, T = m.end, C = T - _, N = s ? T : _ - 1, B = this.__iteratees__, U = B.length, j = 0, ie = Et(C, this.__takeCount__);
          if (!i || !s && f == C && ie == C)
            return ol(e, this.__actions__);
          var le = [];
          e:
            for (; C-- && j < ie; ) {
              N += t;
              for (var Ce = -1, ce = e[N]; ++Ce < U; ) {
                var Pe = B[Ce], Fe = Pe.iteratee, Zt = Pe.type, Pt = Fe(ce);
                if (Zt == fe)
                  ce = Pt;
                else if (!Pt) {
                  if (Zt == be)
                    continue e;
                  break e;
                }
              }
              le[j++] = ce;
            }
          return le;
        }
        Le.prototype = Kr(Vo.prototype), Le.prototype.constructor = Le;
        function xr(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function Od() {
          this.__data__ = Li ? Li(null) : {}, this.size = 0;
        }
        function Id(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function Rd(e) {
          var t = this.__data__;
          if (Li) {
            var i = t[e];
            return i === E ? l : i;
          }
          return qe.call(t, e) ? t[e] : l;
        }
        function Md(e) {
          var t = this.__data__;
          return Li ? t[e] !== l : qe.call(t, e);
        }
        function Cd(e, t) {
          var i = this.__data__;
          return this.size += this.has(e) ? 0 : 1, i[e] = Li && t === l ? E : t, this;
        }
        xr.prototype.clear = Od, xr.prototype.delete = Id, xr.prototype.get = Rd, xr.prototype.has = Md, xr.prototype.set = Cd;
        function Bn(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function Ad() {
          this.__data__ = [], this.size = 0;
        }
        function Dd(e) {
          var t = this.__data__, i = jo(t, e);
          if (i < 0)
            return !1;
          var s = t.length - 1;
          return i == s ? t.pop() : Go.call(t, i, 1), --this.size, !0;
        }
        function zd(e) {
          var t = this.__data__, i = jo(t, e);
          return i < 0 ? l : t[i][1];
        }
        function Pd(e) {
          return jo(this.__data__, e) > -1;
        }
        function Ld(e, t) {
          var i = this.__data__, s = jo(i, e);
          return s < 0 ? (++this.size, i.push([e, t])) : i[s][1] = t, this;
        }
        Bn.prototype.clear = Ad, Bn.prototype.delete = Dd, Bn.prototype.get = zd, Bn.prototype.has = Pd, Bn.prototype.set = Ld;
        function Wn(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function kd() {
          this.size = 0, this.__data__ = {
            hash: new xr(),
            map: new (zi || Bn)(),
            string: new xr()
          };
        }
        function Fd(e) {
          var t = ua(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function Nd(e) {
          return ua(this, e).get(e);
        }
        function Bd(e) {
          return ua(this, e).has(e);
        }
        function Wd(e, t) {
          var i = ua(this, e), s = i.size;
          return i.set(e, t), this.size += i.size == s ? 0 : 1, this;
        }
        Wn.prototype.clear = kd, Wn.prototype.delete = Fd, Wn.prototype.get = Nd, Wn.prototype.has = Bd, Wn.prototype.set = Wd;
        function wr(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.__data__ = new Wn(); ++t < i; )
            this.add(e[t]);
        }
        function Ud(e) {
          return this.__data__.set(e, E), this;
        }
        function Hd(e) {
          return this.__data__.has(e);
        }
        wr.prototype.add = wr.prototype.push = Ud, wr.prototype.has = Hd;
        function xn(e) {
          var t = this.__data__ = new Bn(e);
          this.size = t.size;
        }
        function Gd() {
          this.__data__ = new Bn(), this.size = 0;
        }
        function qd(e) {
          var t = this.__data__, i = t.delete(e);
          return this.size = t.size, i;
        }
        function Xd(e) {
          return this.__data__.get(e);
        }
        function $d(e) {
          return this.__data__.has(e);
        }
        function Yd(e, t) {
          var i = this.__data__;
          if (i instanceof Bn) {
            var s = i.__data__;
            if (!zi || s.length < M - 1)
              return s.push([e, t]), this.size = ++i.size, this;
            i = this.__data__ = new Wn(s);
          }
          return i.set(e, t), this.size = i.size, this;
        }
        xn.prototype.clear = Gd, xn.prototype.delete = qd, xn.prototype.get = Xd, xn.prototype.has = $d, xn.prototype.set = Yd;
        function ku(e, t) {
          var i = xe(e), s = !i && Or(e), f = !i && !s && ir(e), m = !i && !s && !f && Jr(e), _ = i || s || f || m, T = _ ? Nn(e.length, bn) : [], C = T.length;
          for (var N in e)
            (t || qe.call(e, N)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (N == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            f && (N == "offset" || N == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            m && (N == "buffer" || N == "byteLength" || N == "byteOffset") || // Skip index properties.
            qn(N, C))) && T.push(N);
          return T;
        }
        function Fu(e) {
          var t = e.length;
          return t ? e[bs(0, t - 1)] : l;
        }
        function Kd(e, t) {
          return la(Wt(e), _r(t, 0, e.length));
        }
        function Vd(e) {
          return la(Wt(e));
        }
        function ls(e, t, i) {
          (i !== l && !wn(e[t], i) || i === l && !(t in e)) && Un(e, t, i);
        }
        function Fi(e, t, i) {
          var s = e[t];
          (!(qe.call(e, t) && wn(s, i)) || i === l && !(t in e)) && Un(e, t, i);
        }
        function jo(e, t) {
          for (var i = e.length; i--; )
            if (wn(e[i][0], t))
              return i;
          return -1;
        }
        function jd(e, t, i, s) {
          return er(e, function(f, m, _) {
            t(s, f, i(f), _);
          }), s;
        }
        function Nu(e, t) {
          return e && Cn(t, vt(t), e);
        }
        function Zd(e, t) {
          return e && Cn(t, Ht(t), e);
        }
        function Un(e, t, i) {
          t == "__proto__" && qo ? qo(e, t, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : e[t] = i;
        }
        function cs(e, t) {
          for (var i = -1, s = t.length, f = R(s), m = e == null; ++i < s; )
            f[i] = m ? l : qs(e, t[i]);
          return f;
        }
        function _r(e, t, i) {
          return e === e && (i !== l && (e = e <= i ? e : i), t !== l && (e = e >= t ? e : t)), e;
        }
        function ln(e, t, i, s, f, m) {
          var _, T = t & ee, C = t & ke, N = t & ue;
          if (i && (_ = f ? i(e, s, f, m) : i(e)), _ !== l)
            return _;
          if (!et(e))
            return e;
          var B = xe(e);
          if (B) {
            if (_ = Bh(e), !T)
              return Wt(e, _);
          } else {
            var U = Tt(e), j = U == St || U == en;
            if (ir(e))
              return ul(e, T);
            if (U == mt || U == ct || j && !f) {
              if (_ = C || j ? {} : Il(e), !T)
                return C ? Rh(e, Zd(_, e)) : Ih(e, Nu(_, e));
            } else {
              if (!$e[U])
                return f ? e : {};
              _ = Wh(e, U, T);
            }
          }
          m || (m = new xn());
          var ie = m.get(e);
          if (ie)
            return ie;
          m.set(e, _), nc(e) ? e.forEach(function(ce) {
            _.add(ln(ce, t, i, ce, e, m));
          }) : ec(e) && e.forEach(function(ce, Pe) {
            _.set(Pe, ln(ce, t, i, Pe, e, m));
          });
          var le = N ? C ? Cs : Ms : C ? Ht : vt, Ce = B ? l : le(e);
          return Bt(Ce || e, function(ce, Pe) {
            Ce && (Pe = ce, ce = e[Pe]), Fi(_, Pe, ln(ce, t, i, Pe, e, m));
          }), _;
        }
        function Jd(e) {
          var t = vt(e);
          return function(i) {
            return Bu(i, e, t);
          };
        }
        function Bu(e, t, i) {
          var s = i.length;
          if (e == null)
            return !s;
          for (e = Ee(e); s--; ) {
            var f = i[s], m = t[f], _ = e[f];
            if (_ === l && !(f in e) || !m(_))
              return !1;
          }
          return !0;
        }
        function Wu(e, t, i) {
          if (typeof e != "function")
            throw new xt(k);
          return qi(function() {
            e.apply(l, i);
          }, t);
        }
        function Ni(e, t, i, s) {
          var f = -1, m = sn, _ = !0, T = e.length, C = [], N = t.length;
          if (!T)
            return C;
          i && (t = Ve(t, bt(i))), s ? (m = jn, _ = !1) : t.length >= M && (m = yr, _ = !1, t = new wr(t));
          e:
            for (; ++f < T; ) {
              var B = e[f], U = i == null ? B : i(B);
              if (B = s || B !== 0 ? B : 0, _ && U === U) {
                for (var j = N; j--; )
                  if (t[j] === U)
                    continue e;
                C.push(B);
              } else m(t, U, s) || C.push(B);
            }
          return C;
        }
        var er = hl(Mn), Uu = hl(ds, !0);
        function Qd(e, t) {
          var i = !0;
          return er(e, function(s, f, m) {
            return i = !!t(s, f, m), i;
          }), i;
        }
        function Zo(e, t, i) {
          for (var s = -1, f = e.length; ++s < f; ) {
            var m = e[s], _ = t(m);
            if (_ != null && (T === l ? _ === _ && !jt(_) : i(_, T)))
              var T = _, C = m;
          }
          return C;
        }
        function eh(e, t, i, s) {
          var f = e.length;
          for (i = Te(i), i < 0 && (i = -i > f ? 0 : f + i), s = s === l || s > f ? f : Te(s), s < 0 && (s += f), s = i > s ? 0 : ic(s); i < s; )
            e[i++] = t;
          return e;
        }
        function Hu(e, t) {
          var i = [];
          return er(e, function(s, f, m) {
            t(s, f, m) && i.push(s);
          }), i;
        }
        function wt(e, t, i, s, f) {
          var m = -1, _ = e.length;
          for (i || (i = Hh), f || (f = []); ++m < _; ) {
            var T = e[m];
            t > 0 && i(T) ? t > 1 ? wt(T, t - 1, i, s, f) : yn(f, T) : s || (f[f.length] = T);
          }
          return f;
        }
        var fs = pl(), Gu = pl(!0);
        function Mn(e, t) {
          return e && fs(e, t, vt);
        }
        function ds(e, t) {
          return e && Gu(e, t, vt);
        }
        function Jo(e, t) {
          return Kt(t, function(i) {
            return Xn(e[i]);
          });
        }
        function Sr(e, t) {
          t = nr(t, e);
          for (var i = 0, s = t.length; e != null && i < s; )
            e = e[An(t[i++])];
          return i && i == s ? e : l;
        }
        function qu(e, t, i) {
          var s = t(e);
          return xe(e) ? s : yn(s, i(e));
        }
        function Dt(e) {
          return e == null ? e === l ? q : $t : br && br in Ee(e) ? kh(e) : Vh(e);
        }
        function hs(e, t) {
          return e > t;
        }
        function th(e, t) {
          return e != null && qe.call(e, t);
        }
        function nh(e, t) {
          return e != null && t in Ee(e);
        }
        function rh(e, t, i) {
          return e >= Et(t, i) && e < dt(t, i);
        }
        function ps(e, t, i) {
          for (var s = i ? jn : sn, f = e[0].length, m = e.length, _ = m, T = R(m), C = 1 / 0, N = []; _--; ) {
            var B = e[_];
            _ && t && (B = Ve(B, bt(t))), C = Et(B.length, C), T[_] = !i && (t || f >= 120 && B.length >= 120) ? new wr(_ && B) : l;
          }
          B = e[0];
          var U = -1, j = T[0];
          e:
            for (; ++U < f && N.length < C; ) {
              var ie = B[U], le = t ? t(ie) : ie;
              if (ie = i || ie !== 0 ? ie : 0, !(j ? yr(j, le) : s(N, le, i))) {
                for (_ = m; --_; ) {
                  var Ce = T[_];
                  if (!(Ce ? yr(Ce, le) : s(e[_], le, i)))
                    continue e;
                }
                j && j.push(le), N.push(ie);
              }
            }
          return N;
        }
        function ih(e, t, i, s) {
          return Mn(e, function(f, m, _) {
            t(s, i(f), m, _);
          }), s;
        }
        function Bi(e, t, i) {
          t = nr(t, e), e = Al(e, t);
          var s = e == null ? e : e[An(fn(t))];
          return s == null ? l : Ct(s, e, i);
        }
        function Xu(e) {
          return tt(e) && Dt(e) == ct;
        }
        function oh(e) {
          return tt(e) && Dt(e) == Ae;
        }
        function ah(e) {
          return tt(e) && Dt(e) == Q;
        }
        function Wi(e, t, i, s, f) {
          return e === t ? !0 : e == null || t == null || !tt(e) && !tt(t) ? e !== e && t !== t : sh(e, t, i, s, Wi, f);
        }
        function sh(e, t, i, s, f, m) {
          var _ = xe(e), T = xe(t), C = _ ? Je : Tt(e), N = T ? Je : Tt(t);
          C = C == ct ? mt : C, N = N == ct ? mt : N;
          var B = C == mt, U = N == mt, j = C == N;
          if (j && ir(e)) {
            if (!ir(t))
              return !1;
            _ = !0, B = !1;
          }
          if (j && !B)
            return m || (m = new xn()), _ || Jr(e) ? El(e, t, i, s, f, m) : Ph(e, t, C, i, s, f, m);
          if (!(i & ve)) {
            var ie = B && qe.call(e, "__wrapped__"), le = U && qe.call(t, "__wrapped__");
            if (ie || le) {
              var Ce = ie ? e.value() : e, ce = le ? t.value() : t;
              return m || (m = new xn()), f(Ce, ce, i, s, m);
            }
          }
          return j ? (m || (m = new xn()), Lh(e, t, i, s, f, m)) : !1;
        }
        function uh(e) {
          return tt(e) && Tt(e) == nt;
        }
        function gs(e, t, i, s) {
          var f = i.length, m = f, _ = !s;
          if (e == null)
            return !m;
          for (e = Ee(e); f--; ) {
            var T = i[f];
            if (_ && T[2] ? T[1] !== e[T[0]] : !(T[0] in e))
              return !1;
          }
          for (; ++f < m; ) {
            T = i[f];
            var C = T[0], N = e[C], B = T[1];
            if (_ && T[2]) {
              if (N === l && !(C in e))
                return !1;
            } else {
              var U = new xn();
              if (s)
                var j = s(N, B, C, e, t, U);
              if (!(j === l ? Wi(B, N, ve | Xe, s, U) : j))
                return !1;
            }
          }
          return !0;
        }
        function $u(e) {
          if (!et(e) || qh(e))
            return !1;
          var t = Xn(e) ? ud : Pa;
          return t.test(Tr(e));
        }
        function lh(e) {
          return tt(e) && Dt(e) == Rt;
        }
        function ch(e) {
          return tt(e) && Tt(e) == st;
        }
        function fh(e) {
          return tt(e) && ga(e.length) && !!Ue[Dt(e)];
        }
        function Yu(e) {
          return typeof e == "function" ? e : e == null ? Gt : typeof e == "object" ? xe(e) ? ju(e[0], e[1]) : Vu(e) : gc(e);
        }
        function vs(e) {
          if (!Gi(e))
            return pd(e);
          var t = [];
          for (var i in Ee(e))
            qe.call(e, i) && i != "constructor" && t.push(i);
          return t;
        }
        function dh(e) {
          if (!et(e))
            return Kh(e);
          var t = Gi(e), i = [];
          for (var s in e)
            s == "constructor" && (t || !qe.call(e, s)) || i.push(s);
          return i;
        }
        function ms(e, t) {
          return e < t;
        }
        function Ku(e, t) {
          var i = -1, s = Ut(e) ? R(e.length) : [];
          return er(e, function(f, m, _) {
            s[++i] = t(f, m, _);
          }), s;
        }
        function Vu(e) {
          var t = Ds(e);
          return t.length == 1 && t[0][2] ? Ml(t[0][0], t[0][1]) : function(i) {
            return i === e || gs(i, e, t);
          };
        }
        function ju(e, t) {
          return Ps(e) && Rl(t) ? Ml(An(e), t) : function(i) {
            var s = qs(i, e);
            return s === l && s === t ? Xs(i, e) : Wi(t, s, ve | Xe);
          };
        }
        function Qo(e, t, i, s, f) {
          e !== t && fs(t, function(m, _) {
            if (f || (f = new xn()), et(m))
              hh(e, t, _, i, Qo, s, f);
            else {
              var T = s ? s(ks(e, _), m, _ + "", e, t, f) : l;
              T === l && (T = m), ls(e, _, T);
            }
          }, Ht);
        }
        function hh(e, t, i, s, f, m, _) {
          var T = ks(e, i), C = ks(t, i), N = _.get(C);
          if (N) {
            ls(e, i, N);
            return;
          }
          var B = m ? m(T, C, i + "", e, t, _) : l, U = B === l;
          if (U) {
            var j = xe(C), ie = !j && ir(C), le = !j && !ie && Jr(C);
            B = C, j || ie || le ? xe(T) ? B = T : it(T) ? B = Wt(T) : ie ? (U = !1, B = ul(C, !0)) : le ? (U = !1, B = ll(C, !0)) : B = [] : Xi(C) || Or(C) ? (B = T, Or(T) ? B = oc(T) : (!et(T) || Xn(T)) && (B = Il(C))) : U = !1;
          }
          U && (_.set(C, B), f(B, C, s, m, _), _.delete(C)), ls(e, i, B);
        }
        function Zu(e, t) {
          var i = e.length;
          if (i)
            return t += t < 0 ? i : 0, qn(t, i) ? e[t] : l;
        }
        function Ju(e, t, i) {
          t.length ? t = Ve(t, function(m) {
            return xe(m) ? function(_) {
              return Sr(_, m.length === 1 ? m[0] : m);
            } : m;
          }) : t = [Gt];
          var s = -1;
          t = Ve(t, bt(se()));
          var f = Ku(e, function(m, _, T) {
            var C = Ve(t, function(N) {
              return N(m);
            });
            return { criteria: C, index: ++s, value: m };
          });
          return es(f, function(m, _) {
            return Oh(m, _, i);
          });
        }
        function ph(e, t) {
          return Qu(e, t, function(i, s) {
            return Xs(e, s);
          });
        }
        function Qu(e, t, i) {
          for (var s = -1, f = t.length, m = {}; ++s < f; ) {
            var _ = t[s], T = Sr(e, _);
            i(T, _) && Ui(m, nr(_, e), T);
          }
          return m;
        }
        function gh(e) {
          return function(t) {
            return Sr(t, e);
          };
        }
        function ys(e, t, i, s) {
          var f = s ? Ri : Zn, m = -1, _ = t.length, T = e;
          for (e === t && (t = Wt(t)), i && (T = Ve(e, bt(i))); ++m < _; )
            for (var C = 0, N = t[m], B = i ? i(N) : N; (C = f(T, B, C, s)) > -1; )
              T !== e && Go.call(T, C, 1), Go.call(e, C, 1);
          return e;
        }
        function el(e, t) {
          for (var i = e ? t.length : 0, s = i - 1; i--; ) {
            var f = t[i];
            if (i == s || f !== m) {
              var m = f;
              qn(f) ? Go.call(e, f, 1) : _s(e, f);
            }
          }
          return e;
        }
        function bs(e, t) {
          return e + $o(Pu() * (t - e + 1));
        }
        function vh(e, t, i, s) {
          for (var f = -1, m = dt(Xo((t - e) / (i || 1)), 0), _ = R(m); m--; )
            _[s ? m : ++f] = e, e += i;
          return _;
        }
        function xs(e, t) {
          var i = "";
          if (!e || t < 1 || t > Ze)
            return i;
          do
            t % 2 && (i += e), t = $o(t / 2), t && (e += e);
          while (t);
          return i;
        }
        function De(e, t) {
          return Fs(Cl(e, t, Gt), e + "");
        }
        function mh(e) {
          return Fu(Qr(e));
        }
        function yh(e, t) {
          var i = Qr(e);
          return la(i, _r(t, 0, i.length));
        }
        function Ui(e, t, i, s) {
          if (!et(e))
            return e;
          t = nr(t, e);
          for (var f = -1, m = t.length, _ = m - 1, T = e; T != null && ++f < m; ) {
            var C = An(t[f]), N = i;
            if (C === "__proto__" || C === "constructor" || C === "prototype")
              return e;
            if (f != _) {
              var B = T[C];
              N = s ? s(B, C, T) : l, N === l && (N = et(B) ? B : qn(t[f + 1]) ? [] : {});
            }
            Fi(T, C, N), T = T[C];
          }
          return e;
        }
        var tl = Yo ? function(e, t) {
          return Yo.set(e, t), e;
        } : Gt, bh = qo ? function(e, t) {
          return qo(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ys(t),
            writable: !0
          });
        } : Gt;
        function xh(e) {
          return la(Qr(e));
        }
        function cn(e, t, i) {
          var s = -1, f = e.length;
          t < 0 && (t = -t > f ? 0 : f + t), i = i > f ? f : i, i < 0 && (i += f), f = t > i ? 0 : i - t >>> 0, t >>>= 0;
          for (var m = R(f); ++s < f; )
            m[s] = e[s + t];
          return m;
        }
        function wh(e, t) {
          var i;
          return er(e, function(s, f, m) {
            return i = t(s, f, m), !i;
          }), !!i;
        }
        function ea(e, t, i) {
          var s = 0, f = e == null ? s : e.length;
          if (typeof t == "number" && t === t && f <= pt) {
            for (; s < f; ) {
              var m = s + f >>> 1, _ = e[m];
              _ !== null && !jt(_) && (i ? _ <= t : _ < t) ? s = m + 1 : f = m;
            }
            return f;
          }
          return ws(e, t, Gt, i);
        }
        function ws(e, t, i, s) {
          var f = 0, m = e == null ? 0 : e.length;
          if (m === 0)
            return 0;
          t = i(t);
          for (var _ = t !== t, T = t === null, C = jt(t), N = t === l; f < m; ) {
            var B = $o((f + m) / 2), U = i(e[B]), j = U !== l, ie = U === null, le = U === U, Ce = jt(U);
            if (_)
              var ce = s || le;
            else N ? ce = le && (s || j) : T ? ce = le && j && (s || !ie) : C ? ce = le && j && !ie && (s || !Ce) : ie || Ce ? ce = !1 : ce = s ? U <= t : U < t;
            ce ? f = B + 1 : m = B;
          }
          return Et(m, Nt);
        }
        function nl(e, t) {
          for (var i = -1, s = e.length, f = 0, m = []; ++i < s; ) {
            var _ = e[i], T = t ? t(_) : _;
            if (!i || !wn(T, C)) {
              var C = T;
              m[f++] = _ === 0 ? 0 : _;
            }
          }
          return m;
        }
        function rl(e) {
          return typeof e == "number" ? e : jt(e) ? Ke : +e;
        }
        function Vt(e) {
          if (typeof e == "string")
            return e;
          if (xe(e))
            return Ve(e, Vt) + "";
          if (jt(e))
            return Lu ? Lu.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -ae ? "-0" : t;
        }
        function tr(e, t, i) {
          var s = -1, f = sn, m = e.length, _ = !0, T = [], C = T;
          if (i)
            _ = !1, f = jn;
          else if (m >= M) {
            var N = t ? null : Dh(e);
            if (N)
              return c(N);
            _ = !1, f = yr, C = new wr();
          } else
            C = t ? [] : T;
          e:
            for (; ++s < m; ) {
              var B = e[s], U = t ? t(B) : B;
              if (B = i || B !== 0 ? B : 0, _ && U === U) {
                for (var j = C.length; j--; )
                  if (C[j] === U)
                    continue e;
                t && C.push(U), T.push(B);
              } else f(C, U, i) || (C !== T && C.push(U), T.push(B));
            }
          return T;
        }
        function _s(e, t) {
          return t = nr(t, e), e = Al(e, t), e == null || delete e[An(fn(t))];
        }
        function il(e, t, i, s) {
          return Ui(e, t, i(Sr(e, t)), s);
        }
        function ta(e, t, i, s) {
          for (var f = e.length, m = s ? f : -1; (s ? m-- : ++m < f) && t(e[m], m, e); )
            ;
          return i ? cn(e, s ? 0 : m, s ? m + 1 : f) : cn(e, s ? m + 1 : 0, s ? f : m);
        }
        function ol(e, t) {
          var i = e;
          return i instanceof Le && (i = i.value()), Hr(t, function(s, f) {
            return f.func.apply(f.thisArg, yn([s], f.args));
          }, i);
        }
        function Ss(e, t, i) {
          var s = e.length;
          if (s < 2)
            return s ? tr(e[0]) : [];
          for (var f = -1, m = R(s); ++f < s; )
            for (var _ = e[f], T = -1; ++T < s; )
              T != f && (m[f] = Ni(m[f] || _, e[T], t, i));
          return tr(wt(m, 1), t, i);
        }
        function al(e, t, i) {
          for (var s = -1, f = e.length, m = t.length, _ = {}; ++s < f; ) {
            var T = s < m ? t[s] : l;
            i(_, e[s], T);
          }
          return _;
        }
        function Es(e) {
          return it(e) ? e : [];
        }
        function Ts(e) {
          return typeof e == "function" ? e : Gt;
        }
        function nr(e, t) {
          return xe(e) ? e : Ps(e, t) ? [e] : Ll(He(e));
        }
        var _h = De;
        function rr(e, t, i) {
          var s = e.length;
          return i = i === l ? s : i, !t && i >= s ? e : cn(e, t, i);
        }
        var sl = ld || function(e) {
          return ft.clearTimeout(e);
        };
        function ul(e, t) {
          if (t)
            return e.slice();
          var i = e.length, s = Mu ? Mu(i) : new e.constructor(i);
          return e.copy(s), s;
        }
        function Os(e) {
          var t = new e.constructor(e.byteLength);
          return new Uo(t).set(new Uo(e)), t;
        }
        function Sh(e, t) {
          var i = t ? Os(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.byteLength);
        }
        function Eh(e) {
          var t = new e.constructor(e.source, pi.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function Th(e) {
          return ki ? Ee(ki.call(e)) : {};
        }
        function ll(e, t) {
          var i = t ? Os(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.length);
        }
        function cl(e, t) {
          if (e !== t) {
            var i = e !== l, s = e === null, f = e === e, m = jt(e), _ = t !== l, T = t === null, C = t === t, N = jt(t);
            if (!T && !N && !m && e > t || m && _ && C && !T && !N || s && _ && C || !i && C || !f)
              return 1;
            if (!s && !m && !N && e < t || N && i && f && !s && !m || T && i && f || !_ && f || !C)
              return -1;
          }
          return 0;
        }
        function Oh(e, t, i) {
          for (var s = -1, f = e.criteria, m = t.criteria, _ = f.length, T = i.length; ++s < _; ) {
            var C = cl(f[s], m[s]);
            if (C) {
              if (s >= T)
                return C;
              var N = i[s];
              return C * (N == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function fl(e, t, i, s) {
          for (var f = -1, m = e.length, _ = i.length, T = -1, C = t.length, N = dt(m - _, 0), B = R(C + N), U = !s; ++T < C; )
            B[T] = t[T];
          for (; ++f < _; )
            (U || f < m) && (B[i[f]] = e[f]);
          for (; N--; )
            B[T++] = e[f++];
          return B;
        }
        function dl(e, t, i, s) {
          for (var f = -1, m = e.length, _ = -1, T = i.length, C = -1, N = t.length, B = dt(m - T, 0), U = R(B + N), j = !s; ++f < B; )
            U[f] = e[f];
          for (var ie = f; ++C < N; )
            U[ie + C] = t[C];
          for (; ++_ < T; )
            (j || f < m) && (U[ie + i[_]] = e[f++]);
          return U;
        }
        function Wt(e, t) {
          var i = -1, s = e.length;
          for (t || (t = R(s)); ++i < s; )
            t[i] = e[i];
          return t;
        }
        function Cn(e, t, i, s) {
          var f = !i;
          i || (i = {});
          for (var m = -1, _ = t.length; ++m < _; ) {
            var T = t[m], C = s ? s(i[T], e[T], T, i, e) : l;
            C === l && (C = e[T]), f ? Un(i, T, C) : Fi(i, T, C);
          }
          return i;
        }
        function Ih(e, t) {
          return Cn(e, zs(e), t);
        }
        function Rh(e, t) {
          return Cn(e, Tl(e), t);
        }
        function na(e, t) {
          return function(i, s) {
            var f = xe(i) ? Va : jd, m = t ? t() : {};
            return f(i, e, se(s, 2), m);
          };
        }
        function Vr(e) {
          return De(function(t, i) {
            var s = -1, f = i.length, m = f > 1 ? i[f - 1] : l, _ = f > 2 ? i[2] : l;
            for (m = e.length > 3 && typeof m == "function" ? (f--, m) : l, _ && zt(i[0], i[1], _) && (m = f < 3 ? l : m, f = 1), t = Ee(t); ++s < f; ) {
              var T = i[s];
              T && e(t, T, s, m);
            }
            return t;
          });
        }
        function hl(e, t) {
          return function(i, s) {
            if (i == null)
              return i;
            if (!Ut(i))
              return e(i, s);
            for (var f = i.length, m = t ? f : -1, _ = Ee(i); (t ? m-- : ++m < f) && s(_[m], m, _) !== !1; )
              ;
            return i;
          };
        }
        function pl(e) {
          return function(t, i, s) {
            for (var f = -1, m = Ee(t), _ = s(t), T = _.length; T--; ) {
              var C = _[e ? T : ++f];
              if (i(m[C], C, m) === !1)
                break;
            }
            return t;
          };
        }
        function Mh(e, t, i) {
          var s = t & Ne, f = Hi(e);
          function m() {
            var _ = this && this !== ft && this instanceof m ? f : e;
            return _.apply(s ? i : this, arguments);
          }
          return m;
        }
        function gl(e) {
          return function(t) {
            t = He(t);
            var i = Jn(t) ? x(t) : l, s = i ? i[0] : t.charAt(0), f = i ? rr(i, 1).join("") : t.slice(1);
            return s[e]() + f;
          };
        }
        function jr(e) {
          return function(t) {
            return Hr(hc(dc(t).replace(qa, "")), e, "");
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
            return et(s) ? s : i;
          };
        }
        function Ch(e, t, i) {
          var s = Hi(e);
          function f() {
            for (var m = arguments.length, _ = R(m), T = m, C = Zr(f); T--; )
              _[T] = arguments[T];
            var N = m < 3 && _[0] !== C && _[m - 1] !== C ? [] : u(_, C);
            if (m -= N.length, m < i)
              return xl(
                e,
                t,
                ra,
                f.placeholder,
                l,
                _,
                N,
                l,
                l,
                i - m
              );
            var B = this && this !== ft && this instanceof f ? s : e;
            return Ct(B, this, _);
          }
          return f;
        }
        function vl(e) {
          return function(t, i, s) {
            var f = Ee(t);
            if (!Ut(t)) {
              var m = se(i, 3);
              t = vt(t), i = function(T) {
                return m(f[T], T, f);
              };
            }
            var _ = e(t, i, s);
            return _ > -1 ? f[m ? t[_] : _] : l;
          };
        }
        function ml(e) {
          return Gn(function(t) {
            var i = t.length, s = i, f = un.prototype.thru;
            for (e && t.reverse(); s--; ) {
              var m = t[s];
              if (typeof m != "function")
                throw new xt(k);
              if (f && !_ && sa(m) == "wrapper")
                var _ = new un([], !0);
            }
            for (s = _ ? s : i; ++s < i; ) {
              m = t[s];
              var T = sa(m), C = T == "wrapper" ? As(m) : l;
              C && Ls(C[0]) && C[1] == (D | Oe | we | _e) && !C[4].length && C[9] == 1 ? _ = _[sa(C[0])].apply(_, C[3]) : _ = m.length == 1 && Ls(m) ? _[T]() : _.thru(m);
            }
            return function() {
              var N = arguments, B = N[0];
              if (_ && N.length == 1 && xe(B))
                return _.plant(B).value();
              for (var U = 0, j = i ? t[U].apply(this, N) : B; ++U < i; )
                j = t[U].call(this, j);
              return j;
            };
          });
        }
        function ra(e, t, i, s, f, m, _, T, C, N) {
          var B = t & D, U = t & Ne, j = t & We, ie = t & (Oe | Ie), le = t & ze, Ce = j ? l : Hi(e);
          function ce() {
            for (var Pe = arguments.length, Fe = R(Pe), Zt = Pe; Zt--; )
              Fe[Zt] = arguments[Zt];
            if (ie)
              var Pt = Zr(ce), Jt = ts(Fe, Pt);
            if (s && (Fe = fl(Fe, s, f, ie)), m && (Fe = dl(Fe, m, _, ie)), Pe -= Jt, ie && Pe < N) {
              var ot = u(Fe, Pt);
              return xl(
                e,
                t,
                ra,
                ce.placeholder,
                i,
                Fe,
                ot,
                T,
                C,
                N - Pe
              );
            }
            var _n = U ? i : this, Yn = j ? _n[e] : e;
            return Pe = Fe.length, T ? Fe = jh(Fe, T) : le && Pe > 1 && Fe.reverse(), B && C < Pe && (Fe.length = C), this && this !== ft && this instanceof ce && (Yn = Ce || Hi(Yn)), Yn.apply(_n, Fe);
          }
          return ce;
        }
        function yl(e, t) {
          return function(i, s) {
            return ih(i, e, t(s), {});
          };
        }
        function ia(e, t) {
          return function(i, s) {
            var f;
            if (i === l && s === l)
              return t;
            if (i !== l && (f = i), s !== l) {
              if (f === l)
                return s;
              typeof i == "string" || typeof s == "string" ? (i = Vt(i), s = Vt(s)) : (i = rl(i), s = rl(s)), f = e(i, s);
            }
            return f;
          };
        }
        function Is(e) {
          return Gn(function(t) {
            return t = Ve(t, bt(se())), De(function(i) {
              var s = this;
              return e(t, function(f) {
                return Ct(f, s, i);
              });
            });
          });
        }
        function oa(e, t) {
          t = t === l ? " " : Vt(t);
          var i = t.length;
          if (i < 2)
            return i ? xs(t, e) : t;
          var s = xs(t, Xo(e / S(t)));
          return Jn(t) ? rr(x(s), 0, e).join("") : s.slice(0, e);
        }
        function Ah(e, t, i, s) {
          var f = t & Ne, m = Hi(e);
          function _() {
            for (var T = -1, C = arguments.length, N = -1, B = s.length, U = R(B + C), j = this && this !== ft && this instanceof _ ? m : e; ++N < B; )
              U[N] = s[N];
            for (; C--; )
              U[N++] = arguments[++T];
            return Ct(j, f ? i : this, U);
          }
          return _;
        }
        function bl(e) {
          return function(t, i, s) {
            return s && typeof s != "number" && zt(t, i, s) && (i = s = l), t = $n(t), i === l ? (i = t, t = 0) : i = $n(i), s = s === l ? t < i ? 1 : -1 : $n(s), vh(t, i, s, e);
          };
        }
        function aa(e) {
          return function(t, i) {
            return typeof t == "string" && typeof i == "string" || (t = dn(t), i = dn(i)), e(t, i);
          };
        }
        function xl(e, t, i, s, f, m, _, T, C, N) {
          var B = t & Oe, U = B ? _ : l, j = B ? l : _, ie = B ? m : l, le = B ? l : m;
          t |= B ? we : ye, t &= ~(B ? ye : we), t & Se || (t &= -4);
          var Ce = [
            e,
            t,
            f,
            ie,
            U,
            le,
            j,
            T,
            C,
            N
          ], ce = i.apply(l, Ce);
          return Ls(e) && Dl(ce, Ce), ce.placeholder = s, zl(ce, e, t);
        }
        function Rs(e) {
          var t = me[e];
          return function(i, s) {
            if (i = dn(i), s = s == null ? 0 : Et(Te(s), 292), s && zu(i)) {
              var f = (He(i) + "e").split("e"), m = t(f[0] + "e" + (+f[1] + s));
              return f = (He(m) + "e").split("e"), +(f[0] + "e" + (+f[1] - s));
            }
            return t(i);
          };
        }
        var Dh = $r && 1 / c(new $r([, -0]))[1] == ae ? function(e) {
          return new $r(e);
        } : js;
        function wl(e) {
          return function(t) {
            var i = Tt(t);
            return i == nt ? o(t) : i == st ? p(t) : In(t, e(t));
          };
        }
        function Hn(e, t, i, s, f, m, _, T) {
          var C = t & We;
          if (!C && typeof e != "function")
            throw new xt(k);
          var N = s ? s.length : 0;
          if (N || (t &= -97, s = f = l), _ = _ === l ? _ : dt(Te(_), 0), T = T === l ? T : Te(T), N -= f ? f.length : 0, t & ye) {
            var B = s, U = f;
            s = f = l;
          }
          var j = C ? l : As(e), ie = [
            e,
            t,
            i,
            s,
            f,
            B,
            U,
            m,
            _,
            T
          ];
          if (j && Yh(ie, j), e = ie[0], t = ie[1], i = ie[2], s = ie[3], f = ie[4], T = ie[9] = ie[9] === l ? C ? 0 : e.length : dt(ie[9] - N, 0), !T && t & (Oe | Ie) && (t &= -25), !t || t == Ne)
            var le = Mh(e, t, i);
          else t == Oe || t == Ie ? le = Ch(e, t, T) : (t == we || t == (Ne | we)) && !f.length ? le = Ah(e, t, i, s) : le = ra.apply(l, ie);
          var Ce = j ? tl : Dl;
          return zl(Ce(le, ie), e, t);
        }
        function _l(e, t, i, s) {
          return e === l || wn(e, Xr[i]) && !qe.call(s, i) ? t : e;
        }
        function Sl(e, t, i, s, f, m) {
          return et(e) && et(t) && (m.set(t, e), Qo(e, t, l, Sl, m), m.delete(t)), e;
        }
        function zh(e) {
          return Xi(e) ? l : e;
        }
        function El(e, t, i, s, f, m) {
          var _ = i & ve, T = e.length, C = t.length;
          if (T != C && !(_ && C > T))
            return !1;
          var N = m.get(e), B = m.get(t);
          if (N && B)
            return N == t && B == e;
          var U = -1, j = !0, ie = i & Xe ? new wr() : l;
          for (m.set(e, t), m.set(t, e); ++U < T; ) {
            var le = e[U], Ce = t[U];
            if (s)
              var ce = _ ? s(Ce, le, U, t, e, m) : s(le, Ce, U, e, t, m);
            if (ce !== l) {
              if (ce)
                continue;
              j = !1;
              break;
            }
            if (ie) {
              if (!Fn(t, function(Pe, Fe) {
                if (!yr(ie, Fe) && (le === Pe || f(le, Pe, i, s, m)))
                  return ie.push(Fe);
              })) {
                j = !1;
                break;
              }
            } else if (!(le === Ce || f(le, Ce, i, s, m))) {
              j = !1;
              break;
            }
          }
          return m.delete(e), m.delete(t), j;
        }
        function Ph(e, t, i, s, f, m, _) {
          switch (i) {
            case J:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case Ae:
              return !(e.byteLength != t.byteLength || !m(new Uo(e), new Uo(t)));
            case _t:
            case Q:
            case It:
              return wn(+e, +t);
            case Ot:
              return e.name == t.name && e.message == t.message;
            case Rt:
            case X:
              return e == t + "";
            case nt:
              var T = o;
            case st:
              var C = s & ve;
              if (T || (T = c), e.size != t.size && !C)
                return !1;
              var N = _.get(e);
              if (N)
                return N == t;
              s |= Xe, _.set(e, t);
              var B = El(T(e), T(t), s, f, m, _);
              return _.delete(e), B;
            case z:
              if (ki)
                return ki.call(e) == ki.call(t);
          }
          return !1;
        }
        function Lh(e, t, i, s, f, m) {
          var _ = i & ve, T = Ms(e), C = T.length, N = Ms(t), B = N.length;
          if (C != B && !_)
            return !1;
          for (var U = C; U--; ) {
            var j = T[U];
            if (!(_ ? j in t : qe.call(t, j)))
              return !1;
          }
          var ie = m.get(e), le = m.get(t);
          if (ie && le)
            return ie == t && le == e;
          var Ce = !0;
          m.set(e, t), m.set(t, e);
          for (var ce = _; ++U < C; ) {
            j = T[U];
            var Pe = e[j], Fe = t[j];
            if (s)
              var Zt = _ ? s(Fe, Pe, j, t, e, m) : s(Pe, Fe, j, e, t, m);
            if (!(Zt === l ? Pe === Fe || f(Pe, Fe, i, s, m) : Zt)) {
              Ce = !1;
              break;
            }
            ce || (ce = j == "constructor");
          }
          if (Ce && !ce) {
            var Pt = e.constructor, Jt = t.constructor;
            Pt != Jt && "constructor" in e && "constructor" in t && !(typeof Pt == "function" && Pt instanceof Pt && typeof Jt == "function" && Jt instanceof Jt) && (Ce = !1);
          }
          return m.delete(e), m.delete(t), Ce;
        }
        function Gn(e) {
          return Fs(Cl(e, l, Bl), e + "");
        }
        function Ms(e) {
          return qu(e, vt, zs);
        }
        function Cs(e) {
          return qu(e, Ht, Tl);
        }
        var As = Yo ? function(e) {
          return Yo.get(e);
        } : js;
        function sa(e) {
          for (var t = e.name + "", i = Yr[t], s = qe.call(Yr, t) ? i.length : 0; s--; ) {
            var f = i[s], m = f.func;
            if (m == null || m == e)
              return f.name;
          }
          return t;
        }
        function Zr(e) {
          var t = qe.call(g, "placeholder") ? g : e;
          return t.placeholder;
        }
        function se() {
          var e = g.iteratee || Ks;
          return e = e === Ks ? Yu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function ua(e, t) {
          var i = e.__data__;
          return Gh(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
        }
        function Ds(e) {
          for (var t = vt(e), i = t.length; i--; ) {
            var s = t[i], f = e[s];
            t[i] = [s, f, Rl(f)];
          }
          return t;
        }
        function Er(e, t) {
          var i = os(e, t);
          return $u(i) ? i : l;
        }
        function kh(e) {
          var t = qe.call(e, br), i = e[br];
          try {
            e[br] = l;
            var s = !0;
          } catch {
          }
          var f = Bo.call(e);
          return s && (t ? e[br] = i : delete e[br]), f;
        }
        var zs = as ? function(e) {
          return e == null ? [] : (e = Ee(e), Kt(as(e), function(t) {
            return Au.call(e, t);
          }));
        } : Zs, Tl = as ? function(e) {
          for (var t = []; e; )
            yn(t, zs(e)), e = Ho(e);
          return t;
        } : Zs, Tt = Dt;
        (ss && Tt(new ss(new ArrayBuffer(1))) != J || zi && Tt(new zi()) != nt || us && Tt(us.resolve()) != Yt || $r && Tt(new $r()) != st || Pi && Tt(new Pi()) != te) && (Tt = function(e) {
          var t = Dt(e), i = t == mt ? e.constructor : l, s = i ? Tr(i) : "";
          if (s)
            switch (s) {
              case yd:
                return J;
              case bd:
                return nt;
              case xd:
                return Yt;
              case wd:
                return st;
              case _d:
                return te;
            }
          return t;
        });
        function Fh(e, t, i) {
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
                t = Et(t, e + _);
                break;
              case "takeRight":
                e = dt(e, t - _);
                break;
            }
          }
          return { start: e, end: t };
        }
        function Nh(e) {
          var t = e.match(mn);
          return t ? t[1].split(Aa) : [];
        }
        function Ol(e, t, i) {
          t = nr(t, e);
          for (var s = -1, f = t.length, m = !1; ++s < f; ) {
            var _ = An(t[s]);
            if (!(m = e != null && i(e, _)))
              break;
            e = e[_];
          }
          return m || ++s != f ? m : (f = e == null ? 0 : e.length, !!f && ga(f) && qn(_, f) && (xe(e) || Or(e)));
        }
        function Bh(e) {
          var t = e.length, i = new e.constructor(t);
          return t && typeof e[0] == "string" && qe.call(e, "index") && (i.index = e.index, i.input = e.input), i;
        }
        function Il(e) {
          return typeof e.constructor == "function" && !Gi(e) ? Kr(Ho(e)) : {};
        }
        function Wh(e, t, i) {
          var s = e.constructor;
          switch (t) {
            case Ae:
              return Os(e);
            case _t:
            case Q:
              return new s(+e);
            case J:
              return Sh(e, i);
            case re:
            case Qe:
            case rt:
            case yt:
            case tn:
            case nn:
            case rn:
            case Sn:
            case En:
              return ll(e, i);
            case nt:
              return new s();
            case It:
            case X:
              return new s(e);
            case Rt:
              return Eh(e);
            case st:
              return new s();
            case z:
              return Th(e);
          }
        }
        function Uh(e, t) {
          var i = t.length;
          if (!i)
            return e;
          var s = i - 1;
          return t[s] = (i > 1 ? "& " : "") + t[s], t = t.join(i > 2 ? ", " : " "), e.replace(Ln, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Hh(e) {
          return xe(e) || Or(e) || !!(Du && e && e[Du]);
        }
        function qn(e, t) {
          var i = typeof e;
          return t = t ?? Ze, !!t && (i == "number" || i != "symbol" && gi.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function zt(e, t, i) {
          if (!et(i))
            return !1;
          var s = typeof t;
          return (s == "number" ? Ut(i) && qn(t, i.length) : s == "string" && t in i) ? wn(i[t], e) : !1;
        }
        function Ps(e, t) {
          if (xe(e))
            return !1;
          var i = typeof e;
          return i == "number" || i == "symbol" || i == "boolean" || e == null || jt(e) ? !0 : fi.test(e) || !Ma.test(e) || t != null && e in Ee(t);
        }
        function Gh(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function Ls(e) {
          var t = sa(e), i = g[t];
          if (typeof i != "function" || !(t in Le.prototype))
            return !1;
          if (e === i)
            return !0;
          var s = As(i);
          return !!s && e === s[0];
        }
        function qh(e) {
          return !!Ru && Ru in e;
        }
        var Xh = Fo ? Xn : Js;
        function Gi(e) {
          var t = e && e.constructor, i = typeof t == "function" && t.prototype || Xr;
          return e === i;
        }
        function Rl(e) {
          return e === e && !et(e);
        }
        function Ml(e, t) {
          return function(i) {
            return i == null ? !1 : i[e] === t && (t !== l || e in Ee(i));
          };
        }
        function $h(e) {
          var t = ha(e, function(s) {
            return i.size === K && i.clear(), s;
          }), i = t.cache;
          return t;
        }
        function Yh(e, t) {
          var i = e[1], s = t[1], f = i | s, m = f < (Ne | We | D), _ = s == D && i == Oe || s == D && i == _e && e[7].length <= t[8] || s == (D | _e) && t[7].length <= t[8] && i == Oe;
          if (!(m || _))
            return e;
          s & Ne && (e[2] = t[2], f |= i & Ne ? 0 : Se);
          var T = t[3];
          if (T) {
            var C = e[3];
            e[3] = C ? fl(C, T, t[4]) : T, e[4] = C ? u(e[3], he) : t[4];
          }
          return T = t[5], T && (C = e[5], e[5] = C ? dl(C, T, t[6]) : T, e[6] = C ? u(e[5], he) : t[6]), T = t[7], T && (e[7] = T), s & D && (e[8] = e[8] == null ? t[8] : Et(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = f, e;
        }
        function Kh(e) {
          var t = [];
          if (e != null)
            for (var i in Ee(e))
              t.push(i);
          return t;
        }
        function Vh(e) {
          return Bo.call(e);
        }
        function Cl(e, t, i) {
          return t = dt(t === l ? e.length - 1 : t, 0), function() {
            for (var s = arguments, f = -1, m = dt(s.length - t, 0), _ = R(m); ++f < m; )
              _[f] = s[t + f];
            f = -1;
            for (var T = R(t + 1); ++f < t; )
              T[f] = s[f];
            return T[t] = i(_), Ct(e, this, T);
          };
        }
        function Al(e, t) {
          return t.length < 2 ? e : Sr(e, cn(t, 0, -1));
        }
        function jh(e, t) {
          for (var i = e.length, s = Et(t.length, i), f = Wt(e); s--; ) {
            var m = t[s];
            e[s] = qn(m, i) ? f[m] : l;
          }
          return e;
        }
        function ks(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var Dl = Pl(tl), qi = fd || function(e, t) {
          return ft.setTimeout(e, t);
        }, Fs = Pl(bh);
        function zl(e, t, i) {
          var s = t + "";
          return Fs(e, Uh(s, Zh(Nh(s), i)));
        }
        function Pl(e) {
          var t = 0, i = 0;
          return function() {
            var s = gd(), f = ne - (s - i);
            if (i = s, f > 0) {
              if (++t >= oe)
                return arguments[0];
            } else
              t = 0;
            return e.apply(l, arguments);
          };
        }
        function la(e, t) {
          var i = -1, s = e.length, f = s - 1;
          for (t = t === l ? s : t; ++i < t; ) {
            var m = bs(i, f), _ = e[m];
            e[m] = e[i], e[i] = _;
          }
          return e.length = t, e;
        }
        var Ll = $h(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(di, function(i, s, f, m) {
            t.push(f ? m.replace(Tn, "$1") : s || i);
          }), t;
        });
        function An(e) {
          if (typeof e == "string" || jt(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -ae ? "-0" : t;
        }
        function Tr(e) {
          if (e != null) {
            try {
              return No.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function Zh(e, t) {
          return Bt(Pn, function(i) {
            var s = "_." + i[0];
            t & i[1] && !sn(e, s) && e.push(s);
          }), e.sort();
        }
        function kl(e) {
          if (e instanceof Le)
            return e.clone();
          var t = new un(e.__wrapped__, e.__chain__);
          return t.__actions__ = Wt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function Jh(e, t, i) {
          (i ? zt(e, t, i) : t === l) ? t = 1 : t = dt(Te(t), 0);
          var s = e == null ? 0 : e.length;
          if (!s || t < 1)
            return [];
          for (var f = 0, m = 0, _ = R(Xo(s / t)); f < s; )
            _[m++] = cn(e, f, f += t);
          return _;
        }
        function Qh(e) {
          for (var t = -1, i = e == null ? 0 : e.length, s = 0, f = []; ++t < i; ) {
            var m = e[t];
            m && (f[s++] = m);
          }
          return f;
        }
        function ep() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = R(e - 1), i = arguments[0], s = e; s--; )
            t[s - 1] = arguments[s];
          return yn(xe(i) ? Wt(i) : [i], wt(t, 1));
        }
        var tp = De(function(e, t) {
          return it(e) ? Ni(e, wt(t, 1, it, !0)) : [];
        }), np = De(function(e, t) {
          var i = fn(t);
          return it(i) && (i = l), it(e) ? Ni(e, wt(t, 1, it, !0), se(i, 2)) : [];
        }), rp = De(function(e, t) {
          var i = fn(t);
          return it(i) && (i = l), it(e) ? Ni(e, wt(t, 1, it, !0), l, i) : [];
        });
        function ip(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), cn(e, t < 0 ? 0 : t, s)) : [];
        }
        function op(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), t = s - t, cn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function ap(e, t) {
          return e && e.length ? ta(e, se(t, 3), !0, !0) : [];
        }
        function sp(e, t) {
          return e && e.length ? ta(e, se(t, 3), !0) : [];
        }
        function up(e, t, i, s) {
          var f = e == null ? 0 : e.length;
          return f ? (i && typeof i != "number" && zt(e, t, i) && (i = 0, s = f), eh(e, t, i, s)) : [];
        }
        function Fl(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Te(i);
          return f < 0 && (f = dt(s + f, 0)), Gr(e, se(t, 3), f);
        }
        function Nl(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s - 1;
          return i !== l && (f = Te(i), f = i < 0 ? dt(s + f, 0) : Et(f, s - 1)), Gr(e, se(t, 3), f, !0);
        }
        function Bl(e) {
          var t = e == null ? 0 : e.length;
          return t ? wt(e, 1) : [];
        }
        function lp(e) {
          var t = e == null ? 0 : e.length;
          return t ? wt(e, ae) : [];
        }
        function cp(e, t) {
          var i = e == null ? 0 : e.length;
          return i ? (t = t === l ? 1 : Te(t), wt(e, t)) : [];
        }
        function fp(e) {
          for (var t = -1, i = e == null ? 0 : e.length, s = {}; ++t < i; ) {
            var f = e[t];
            s[f[0]] = f[1];
          }
          return s;
        }
        function Wl(e) {
          return e && e.length ? e[0] : l;
        }
        function dp(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Te(i);
          return f < 0 && (f = dt(s + f, 0)), Zn(e, t, f);
        }
        function hp(e) {
          var t = e == null ? 0 : e.length;
          return t ? cn(e, 0, -1) : [];
        }
        var pp = De(function(e) {
          var t = Ve(e, Es);
          return t.length && t[0] === e[0] ? ps(t) : [];
        }), gp = De(function(e) {
          var t = fn(e), i = Ve(e, Es);
          return t === fn(i) ? t = l : i.pop(), i.length && i[0] === e[0] ? ps(i, se(t, 2)) : [];
        }), vp = De(function(e) {
          var t = fn(e), i = Ve(e, Es);
          return t = typeof t == "function" ? t : l, t && i.pop(), i.length && i[0] === e[0] ? ps(i, l, t) : [];
        });
        function mp(e, t) {
          return e == null ? "" : hd.call(e, t);
        }
        function fn(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : l;
        }
        function yp(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s;
          return i !== l && (f = Te(i), f = f < 0 ? dt(s + f, 0) : Et(f, s - 1)), t === t ? b(e, t, f) : Gr(e, zo, f, !0);
        }
        function bp(e, t) {
          return e && e.length ? Zu(e, Te(t)) : l;
        }
        var xp = De(Ul);
        function Ul(e, t) {
          return e && e.length && t && t.length ? ys(e, t) : e;
        }
        function wp(e, t, i) {
          return e && e.length && t && t.length ? ys(e, t, se(i, 2)) : e;
        }
        function _p(e, t, i) {
          return e && e.length && t && t.length ? ys(e, t, l, i) : e;
        }
        var Sp = Gn(function(e, t) {
          var i = e == null ? 0 : e.length, s = cs(e, t);
          return el(e, Ve(t, function(f) {
            return qn(f, i) ? +f : f;
          }).sort(cl)), s;
        });
        function Ep(e, t) {
          var i = [];
          if (!(e && e.length))
            return i;
          var s = -1, f = [], m = e.length;
          for (t = se(t, 3); ++s < m; ) {
            var _ = e[s];
            t(_, s, e) && (i.push(_), f.push(s));
          }
          return el(e, f), i;
        }
        function Ns(e) {
          return e == null ? e : md.call(e);
        }
        function Tp(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (i && typeof i != "number" && zt(e, t, i) ? (t = 0, i = s) : (t = t == null ? 0 : Te(t), i = i === l ? s : Te(i)), cn(e, t, i)) : [];
        }
        function Op(e, t) {
          return ea(e, t);
        }
        function Ip(e, t, i) {
          return ws(e, t, se(i, 2));
        }
        function Rp(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = ea(e, t);
            if (s < i && wn(e[s], t))
              return s;
          }
          return -1;
        }
        function Mp(e, t) {
          return ea(e, t, !0);
        }
        function Cp(e, t, i) {
          return ws(e, t, se(i, 2), !0);
        }
        function Ap(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = ea(e, t, !0) - 1;
            if (wn(e[s], t))
              return s;
          }
          return -1;
        }
        function Dp(e) {
          return e && e.length ? nl(e) : [];
        }
        function zp(e, t) {
          return e && e.length ? nl(e, se(t, 2)) : [];
        }
        function Pp(e) {
          var t = e == null ? 0 : e.length;
          return t ? cn(e, 1, t) : [];
        }
        function Lp(e, t, i) {
          return e && e.length ? (t = i || t === l ? 1 : Te(t), cn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function kp(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), t = s - t, cn(e, t < 0 ? 0 : t, s)) : [];
        }
        function Fp(e, t) {
          return e && e.length ? ta(e, se(t, 3), !1, !0) : [];
        }
        function Np(e, t) {
          return e && e.length ? ta(e, se(t, 3)) : [];
        }
        var Bp = De(function(e) {
          return tr(wt(e, 1, it, !0));
        }), Wp = De(function(e) {
          var t = fn(e);
          return it(t) && (t = l), tr(wt(e, 1, it, !0), se(t, 2));
        }), Up = De(function(e) {
          var t = fn(e);
          return t = typeof t == "function" ? t : l, tr(wt(e, 1, it, !0), l, t);
        });
        function Hp(e) {
          return e && e.length ? tr(e) : [];
        }
        function Gp(e, t) {
          return e && e.length ? tr(e, se(t, 2)) : [];
        }
        function qp(e, t) {
          return t = typeof t == "function" ? t : l, e && e.length ? tr(e, l, t) : [];
        }
        function Bs(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = Kt(e, function(i) {
            if (it(i))
              return t = dt(i.length, t), !0;
          }), Nn(t, function(i) {
            return Ve(e, Mi(i));
          });
        }
        function Hl(e, t) {
          if (!(e && e.length))
            return [];
          var i = Bs(e);
          return t == null ? i : Ve(i, function(s) {
            return Ct(t, l, s);
          });
        }
        var Xp = De(function(e, t) {
          return it(e) ? Ni(e, t) : [];
        }), $p = De(function(e) {
          return Ss(Kt(e, it));
        }), Yp = De(function(e) {
          var t = fn(e);
          return it(t) && (t = l), Ss(Kt(e, it), se(t, 2));
        }), Kp = De(function(e) {
          var t = fn(e);
          return t = typeof t == "function" ? t : l, Ss(Kt(e, it), l, t);
        }), Vp = De(Bs);
        function jp(e, t) {
          return al(e || [], t || [], Fi);
        }
        function Zp(e, t) {
          return al(e || [], t || [], Ui);
        }
        var Jp = De(function(e) {
          var t = e.length, i = t > 1 ? e[t - 1] : l;
          return i = typeof i == "function" ? (e.pop(), i) : l, Hl(e, i);
        });
        function Gl(e) {
          var t = g(e);
          return t.__chain__ = !0, t;
        }
        function Qp(e, t) {
          return t(e), e;
        }
        function ca(e, t) {
          return t(e);
        }
        var eg = Gn(function(e) {
          var t = e.length, i = t ? e[0] : 0, s = this.__wrapped__, f = function(m) {
            return cs(m, e);
          };
          return t > 1 || this.__actions__.length || !(s instanceof Le) || !qn(i) ? this.thru(f) : (s = s.slice(i, +i + (t ? 1 : 0)), s.__actions__.push({
            func: ca,
            args: [f],
            thisArg: l
          }), new un(s, this.__chain__).thru(function(m) {
            return t && !m.length && m.push(l), m;
          }));
        });
        function tg() {
          return Gl(this);
        }
        function ng() {
          return new un(this.value(), this.__chain__);
        }
        function rg() {
          this.__values__ === l && (this.__values__ = rc(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? l : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function ig() {
          return this;
        }
        function og(e) {
          for (var t, i = this; i instanceof Vo; ) {
            var s = kl(i);
            s.__index__ = 0, s.__values__ = l, t ? f.__wrapped__ = s : t = s;
            var f = s;
            i = i.__wrapped__;
          }
          return f.__wrapped__ = e, t;
        }
        function ag() {
          var e = this.__wrapped__;
          if (e instanceof Le) {
            var t = e;
            return this.__actions__.length && (t = new Le(this)), t = t.reverse(), t.__actions__.push({
              func: ca,
              args: [Ns],
              thisArg: l
            }), new un(t, this.__chain__);
          }
          return this.thru(Ns);
        }
        function sg() {
          return ol(this.__wrapped__, this.__actions__);
        }
        var ug = na(function(e, t, i) {
          qe.call(e, i) ? ++e[i] : Un(e, i, 1);
        });
        function lg(e, t, i) {
          var s = xe(e) ? Ii : Qd;
          return i && zt(e, t, i) && (t = l), s(e, se(t, 3));
        }
        function cg(e, t) {
          var i = xe(e) ? Kt : Hu;
          return i(e, se(t, 3));
        }
        var fg = vl(Fl), dg = vl(Nl);
        function hg(e, t) {
          return wt(fa(e, t), 1);
        }
        function pg(e, t) {
          return wt(fa(e, t), ae);
        }
        function gg(e, t, i) {
          return i = i === l ? 1 : Te(i), wt(fa(e, t), i);
        }
        function ql(e, t) {
          var i = xe(e) ? Bt : er;
          return i(e, se(t, 3));
        }
        function Xl(e, t) {
          var i = xe(e) ? ja : Uu;
          return i(e, se(t, 3));
        }
        var vg = na(function(e, t, i) {
          qe.call(e, i) ? e[i].push(t) : Un(e, i, [t]);
        });
        function mg(e, t, i, s) {
          e = Ut(e) ? e : Qr(e), i = i && !s ? Te(i) : 0;
          var f = e.length;
          return i < 0 && (i = dt(f + i, 0)), va(e) ? i <= f && e.indexOf(t, i) > -1 : !!f && Zn(e, t, i) > -1;
        }
        var yg = De(function(e, t, i) {
          var s = -1, f = typeof t == "function", m = Ut(e) ? R(e.length) : [];
          return er(e, function(_) {
            m[++s] = f ? Ct(t, _, i) : Bi(_, t, i);
          }), m;
        }), bg = na(function(e, t, i) {
          Un(e, i, t);
        });
        function fa(e, t) {
          var i = xe(e) ? Ve : Ku;
          return i(e, se(t, 3));
        }
        function xg(e, t, i, s) {
          return e == null ? [] : (xe(t) || (t = t == null ? [] : [t]), i = s ? l : i, xe(i) || (i = i == null ? [] : [i]), Ju(e, t, i));
        }
        var wg = na(function(e, t, i) {
          e[i ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function _g(e, t, i) {
          var s = xe(e) ? Hr : Po, f = arguments.length < 3;
          return s(e, se(t, 4), i, f, er);
        }
        function Sg(e, t, i) {
          var s = xe(e) ? Ao : Po, f = arguments.length < 3;
          return s(e, se(t, 4), i, f, Uu);
        }
        function Eg(e, t) {
          var i = xe(e) ? Kt : Hu;
          return i(e, pa(se(t, 3)));
        }
        function Tg(e) {
          var t = xe(e) ? Fu : mh;
          return t(e);
        }
        function Og(e, t, i) {
          (i ? zt(e, t, i) : t === l) ? t = 1 : t = Te(t);
          var s = xe(e) ? Kd : yh;
          return s(e, t);
        }
        function Ig(e) {
          var t = xe(e) ? Vd : xh;
          return t(e);
        }
        function Rg(e) {
          if (e == null)
            return 0;
          if (Ut(e))
            return va(e) ? S(e) : e.length;
          var t = Tt(e);
          return t == nt || t == st ? e.size : vs(e).length;
        }
        function Mg(e, t, i) {
          var s = xe(e) ? Fn : wh;
          return i && zt(e, t, i) && (t = l), s(e, se(t, 3));
        }
        var Cg = De(function(e, t) {
          if (e == null)
            return [];
          var i = t.length;
          return i > 1 && zt(e, t[0], t[1]) ? t = [] : i > 2 && zt(t[0], t[1], t[2]) && (t = [t[0]]), Ju(e, wt(t, 1), []);
        }), da = cd || function() {
          return ft.Date.now();
        };
        function Ag(e, t) {
          if (typeof t != "function")
            throw new xt(k);
          return e = Te(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function $l(e, t, i) {
          return t = i ? l : t, t = e && t == null ? e.length : t, Hn(e, D, l, l, l, l, t);
        }
        function Yl(e, t) {
          var i;
          if (typeof t != "function")
            throw new xt(k);
          return e = Te(e), function() {
            return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = l), i;
          };
        }
        var Ws = De(function(e, t, i) {
          var s = Ne;
          if (i.length) {
            var f = u(i, Zr(Ws));
            s |= we;
          }
          return Hn(e, s, t, i, f);
        }), Kl = De(function(e, t, i) {
          var s = Ne | We;
          if (i.length) {
            var f = u(i, Zr(Kl));
            s |= we;
          }
          return Hn(t, s, e, i, f);
        });
        function Vl(e, t, i) {
          t = i ? l : t;
          var s = Hn(e, Oe, l, l, l, l, l, t);
          return s.placeholder = Vl.placeholder, s;
        }
        function jl(e, t, i) {
          t = i ? l : t;
          var s = Hn(e, Ie, l, l, l, l, l, t);
          return s.placeholder = jl.placeholder, s;
        }
        function Zl(e, t, i) {
          var s, f, m, _, T, C, N = 0, B = !1, U = !1, j = !0;
          if (typeof e != "function")
            throw new xt(k);
          t = dn(t) || 0, et(i) && (B = !!i.leading, U = "maxWait" in i, m = U ? dt(dn(i.maxWait) || 0, t) : m, j = "trailing" in i ? !!i.trailing : j);
          function ie(ot) {
            var _n = s, Yn = f;
            return s = f = l, N = ot, _ = e.apply(Yn, _n), _;
          }
          function le(ot) {
            return N = ot, T = qi(Pe, t), B ? ie(ot) : _;
          }
          function Ce(ot) {
            var _n = ot - C, Yn = ot - N, vc = t - _n;
            return U ? Et(vc, m - Yn) : vc;
          }
          function ce(ot) {
            var _n = ot - C, Yn = ot - N;
            return C === l || _n >= t || _n < 0 || U && Yn >= m;
          }
          function Pe() {
            var ot = da();
            if (ce(ot))
              return Fe(ot);
            T = qi(Pe, Ce(ot));
          }
          function Fe(ot) {
            return T = l, j && s ? ie(ot) : (s = f = l, _);
          }
          function Zt() {
            T !== l && sl(T), N = 0, s = C = f = T = l;
          }
          function Pt() {
            return T === l ? _ : Fe(da());
          }
          function Jt() {
            var ot = da(), _n = ce(ot);
            if (s = arguments, f = this, C = ot, _n) {
              if (T === l)
                return le(C);
              if (U)
                return sl(T), T = qi(Pe, t), ie(C);
            }
            return T === l && (T = qi(Pe, t)), _;
          }
          return Jt.cancel = Zt, Jt.flush = Pt, Jt;
        }
        var Dg = De(function(e, t) {
          return Wu(e, 1, t);
        }), zg = De(function(e, t, i) {
          return Wu(e, dn(t) || 0, i);
        });
        function Pg(e) {
          return Hn(e, ze);
        }
        function ha(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new xt(k);
          var i = function() {
            var s = arguments, f = t ? t.apply(this, s) : s[0], m = i.cache;
            if (m.has(f))
              return m.get(f);
            var _ = e.apply(this, s);
            return i.cache = m.set(f, _) || m, _;
          };
          return i.cache = new (ha.Cache || Wn)(), i;
        }
        ha.Cache = Wn;
        function pa(e) {
          if (typeof e != "function")
            throw new xt(k);
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
        function Lg(e) {
          return Yl(2, e);
        }
        var kg = _h(function(e, t) {
          t = t.length == 1 && xe(t[0]) ? Ve(t[0], bt(se())) : Ve(wt(t, 1), bt(se()));
          var i = t.length;
          return De(function(s) {
            for (var f = -1, m = Et(s.length, i); ++f < m; )
              s[f] = t[f].call(this, s[f]);
            return Ct(e, this, s);
          });
        }), Us = De(function(e, t) {
          var i = u(t, Zr(Us));
          return Hn(e, we, l, t, i);
        }), Jl = De(function(e, t) {
          var i = u(t, Zr(Jl));
          return Hn(e, ye, l, t, i);
        }), Fg = Gn(function(e, t) {
          return Hn(e, _e, l, l, l, t);
        });
        function Ng(e, t) {
          if (typeof e != "function")
            throw new xt(k);
          return t = t === l ? t : Te(t), De(e, t);
        }
        function Bg(e, t) {
          if (typeof e != "function")
            throw new xt(k);
          return t = t == null ? 0 : dt(Te(t), 0), De(function(i) {
            var s = i[t], f = rr(i, 0, t);
            return s && yn(f, s), Ct(e, this, f);
          });
        }
        function Wg(e, t, i) {
          var s = !0, f = !0;
          if (typeof e != "function")
            throw new xt(k);
          return et(i) && (s = "leading" in i ? !!i.leading : s, f = "trailing" in i ? !!i.trailing : f), Zl(e, t, {
            leading: s,
            maxWait: t,
            trailing: f
          });
        }
        function Ug(e) {
          return $l(e, 1);
        }
        function Hg(e, t) {
          return Us(Ts(t), e);
        }
        function Gg() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return xe(e) ? e : [e];
        }
        function qg(e) {
          return ln(e, ue);
        }
        function Xg(e, t) {
          return t = typeof t == "function" ? t : l, ln(e, ue, t);
        }
        function $g(e) {
          return ln(e, ee | ue);
        }
        function Yg(e, t) {
          return t = typeof t == "function" ? t : l, ln(e, ee | ue, t);
        }
        function Kg(e, t) {
          return t == null || Bu(e, t, vt(t));
        }
        function wn(e, t) {
          return e === t || e !== e && t !== t;
        }
        var Vg = aa(hs), jg = aa(function(e, t) {
          return e >= t;
        }), Or = Xu(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Xu : function(e) {
          return tt(e) && qe.call(e, "callee") && !Au.call(e, "callee");
        }, xe = R.isArray, Zg = Oi ? bt(Oi) : oh;
        function Ut(e) {
          return e != null && ga(e.length) && !Xn(e);
        }
        function it(e) {
          return tt(e) && Ut(e);
        }
        function Jg(e) {
          return e === !0 || e === !1 || tt(e) && Dt(e) == _t;
        }
        var ir = dd || Js, Qg = gt ? bt(gt) : ah;
        function ev(e) {
          return tt(e) && e.nodeType === 1 && !Xi(e);
        }
        function tv(e) {
          if (e == null)
            return !0;
          if (Ut(e) && (xe(e) || typeof e == "string" || typeof e.splice == "function" || ir(e) || Jr(e) || Or(e)))
            return !e.length;
          var t = Tt(e);
          if (t == nt || t == st)
            return !e.size;
          if (Gi(e))
            return !vs(e).length;
          for (var i in e)
            if (qe.call(e, i))
              return !1;
          return !0;
        }
        function nv(e, t) {
          return Wi(e, t);
        }
        function rv(e, t, i) {
          i = typeof i == "function" ? i : l;
          var s = i ? i(e, t) : l;
          return s === l ? Wi(e, t, l, i) : !!s;
        }
        function Hs(e) {
          if (!tt(e))
            return !1;
          var t = Dt(e);
          return t == Ot || t == Xt || typeof e.message == "string" && typeof e.name == "string" && !Xi(e);
        }
        function iv(e) {
          return typeof e == "number" && zu(e);
        }
        function Xn(e) {
          if (!et(e))
            return !1;
          var t = Dt(e);
          return t == St || t == en || t == pn || t == ar;
        }
        function Ql(e) {
          return typeof e == "number" && e == Te(e);
        }
        function ga(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ze;
        }
        function et(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function tt(e) {
          return e != null && typeof e == "object";
        }
        var ec = Io ? bt(Io) : uh;
        function ov(e, t) {
          return e === t || gs(e, t, Ds(t));
        }
        function av(e, t, i) {
          return i = typeof i == "function" ? i : l, gs(e, t, Ds(t), i);
        }
        function sv(e) {
          return tc(e) && e != +e;
        }
        function uv(e) {
          if (Xh(e))
            throw new $(O);
          return $u(e);
        }
        function lv(e) {
          return e === null;
        }
        function cv(e) {
          return e == null;
        }
        function tc(e) {
          return typeof e == "number" || tt(e) && Dt(e) == It;
        }
        function Xi(e) {
          if (!tt(e) || Dt(e) != mt)
            return !1;
          var t = Ho(e);
          if (t === null)
            return !0;
          var i = qe.call(t, "constructor") && t.constructor;
          return typeof i == "function" && i instanceof i && No.call(i) == ad;
        }
        var Gs = Ro ? bt(Ro) : lh;
        function fv(e) {
          return Ql(e) && e >= -Ze && e <= Ze;
        }
        var nc = Mo ? bt(Mo) : ch;
        function va(e) {
          return typeof e == "string" || !xe(e) && tt(e) && Dt(e) == X;
        }
        function jt(e) {
          return typeof e == "symbol" || tt(e) && Dt(e) == z;
        }
        var Jr = Co ? bt(Co) : fh;
        function dv(e) {
          return e === l;
        }
        function hv(e) {
          return tt(e) && Tt(e) == te;
        }
        function pv(e) {
          return tt(e) && Dt(e) == pe;
        }
        var gv = aa(ms), vv = aa(function(e, t) {
          return e <= t;
        });
        function rc(e) {
          if (!e)
            return [];
          if (Ut(e))
            return va(e) ? x(e) : Wt(e);
          if (Di && e[Di])
            return n(e[Di]());
          var t = Tt(e), i = t == nt ? o : t == st ? c : Qr;
          return i(e);
        }
        function $n(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = dn(e), e === ae || e === -ae) {
            var t = e < 0 ? -1 : 1;
            return t * Ge;
          }
          return e === e ? e : 0;
        }
        function Te(e) {
          var t = $n(e), i = t % 1;
          return t === t ? i ? t - i : t : 0;
        }
        function ic(e) {
          return e ? _r(Te(e), 0, Me) : 0;
        }
        function dn(e) {
          if (typeof e == "number")
            return e;
          if (jt(e))
            return Ke;
          if (et(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = et(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Ci(e);
          var i = za.test(e);
          return i || ur.test(e) ? To(e.slice(2), i ? 2 : 8) : ao.test(e) ? Ke : +e;
        }
        function oc(e) {
          return Cn(e, Ht(e));
        }
        function mv(e) {
          return e ? _r(Te(e), -Ze, Ze) : e === 0 ? e : 0;
        }
        function He(e) {
          return e == null ? "" : Vt(e);
        }
        var yv = Vr(function(e, t) {
          if (Gi(t) || Ut(t)) {
            Cn(t, vt(t), e);
            return;
          }
          for (var i in t)
            qe.call(t, i) && Fi(e, i, t[i]);
        }), ac = Vr(function(e, t) {
          Cn(t, Ht(t), e);
        }), ma = Vr(function(e, t, i, s) {
          Cn(t, Ht(t), e, s);
        }), bv = Vr(function(e, t, i, s) {
          Cn(t, vt(t), e, s);
        }), xv = Gn(cs);
        function wv(e, t) {
          var i = Kr(e);
          return t == null ? i : Nu(i, t);
        }
        var _v = De(function(e, t) {
          e = Ee(e);
          var i = -1, s = t.length, f = s > 2 ? t[2] : l;
          for (f && zt(t[0], t[1], f) && (s = 1); ++i < s; )
            for (var m = t[i], _ = Ht(m), T = -1, C = _.length; ++T < C; ) {
              var N = _[T], B = e[N];
              (B === l || wn(B, Xr[N]) && !qe.call(e, N)) && (e[N] = m[N]);
            }
          return e;
        }), Sv = De(function(e) {
          return e.push(l, Sl), Ct(sc, l, e);
        });
        function Ev(e, t) {
          return Do(e, se(t, 3), Mn);
        }
        function Tv(e, t) {
          return Do(e, se(t, 3), ds);
        }
        function Ov(e, t) {
          return e == null ? e : fs(e, se(t, 3), Ht);
        }
        function Iv(e, t) {
          return e == null ? e : Gu(e, se(t, 3), Ht);
        }
        function Rv(e, t) {
          return e && Mn(e, se(t, 3));
        }
        function Mv(e, t) {
          return e && ds(e, se(t, 3));
        }
        function Cv(e) {
          return e == null ? [] : Jo(e, vt(e));
        }
        function Av(e) {
          return e == null ? [] : Jo(e, Ht(e));
        }
        function qs(e, t, i) {
          var s = e == null ? l : Sr(e, t);
          return s === l ? i : s;
        }
        function Dv(e, t) {
          return e != null && Ol(e, t, th);
        }
        function Xs(e, t) {
          return e != null && Ol(e, t, nh);
        }
        var zv = yl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = Bo.call(t)), e[t] = i;
        }, Ys(Gt)), Pv = yl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = Bo.call(t)), qe.call(e, t) ? e[t].push(i) : e[t] = [i];
        }, se), Lv = De(Bi);
        function vt(e) {
          return Ut(e) ? ku(e) : vs(e);
        }
        function Ht(e) {
          return Ut(e) ? ku(e, !0) : dh(e);
        }
        function kv(e, t) {
          var i = {};
          return t = se(t, 3), Mn(e, function(s, f, m) {
            Un(i, t(s, f, m), s);
          }), i;
        }
        function Fv(e, t) {
          var i = {};
          return t = se(t, 3), Mn(e, function(s, f, m) {
            Un(i, f, t(s, f, m));
          }), i;
        }
        var Nv = Vr(function(e, t, i) {
          Qo(e, t, i);
        }), sc = Vr(function(e, t, i, s) {
          Qo(e, t, i, s);
        }), Bv = Gn(function(e, t) {
          var i = {};
          if (e == null)
            return i;
          var s = !1;
          t = Ve(t, function(m) {
            return m = nr(m, e), s || (s = m.length > 1), m;
          }), Cn(e, Cs(e), i), s && (i = ln(i, ee | ke | ue, zh));
          for (var f = t.length; f--; )
            _s(i, t[f]);
          return i;
        });
        function Wv(e, t) {
          return uc(e, pa(se(t)));
        }
        var Uv = Gn(function(e, t) {
          return e == null ? {} : ph(e, t);
        });
        function uc(e, t) {
          if (e == null)
            return {};
          var i = Ve(Cs(e), function(s) {
            return [s];
          });
          return t = se(t), Qu(e, i, function(s, f) {
            return t(s, f[0]);
          });
        }
        function Hv(e, t, i) {
          t = nr(t, e);
          var s = -1, f = t.length;
          for (f || (f = 1, e = l); ++s < f; ) {
            var m = e == null ? l : e[An(t[s])];
            m === l && (s = f, m = i), e = Xn(m) ? m.call(e) : m;
          }
          return e;
        }
        function Gv(e, t, i) {
          return e == null ? e : Ui(e, t, i);
        }
        function qv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : Ui(e, t, i, s);
        }
        var lc = wl(vt), cc = wl(Ht);
        function Xv(e, t, i) {
          var s = xe(e), f = s || ir(e) || Jr(e);
          if (t = se(t, 4), i == null) {
            var m = e && e.constructor;
            f ? i = s ? new m() : [] : et(e) ? i = Xn(m) ? Kr(Ho(e)) : {} : i = {};
          }
          return (f ? Bt : Mn)(e, function(_, T, C) {
            return t(i, _, T, C);
          }), i;
        }
        function $v(e, t) {
          return e == null ? !0 : _s(e, t);
        }
        function Yv(e, t, i) {
          return e == null ? e : il(e, t, Ts(i));
        }
        function Kv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : il(e, t, Ts(i), s);
        }
        function Qr(e) {
          return e == null ? [] : Ai(e, vt(e));
        }
        function Vv(e) {
          return e == null ? [] : Ai(e, Ht(e));
        }
        function jv(e, t, i) {
          return i === l && (i = t, t = l), i !== l && (i = dn(i), i = i === i ? i : 0), t !== l && (t = dn(t), t = t === t ? t : 0), _r(dn(e), t, i);
        }
        function Zv(e, t, i) {
          return t = $n(t), i === l ? (i = t, t = 0) : i = $n(i), e = dn(e), rh(e, t, i);
        }
        function Jv(e, t, i) {
          if (i && typeof i != "boolean" && zt(e, t, i) && (t = i = l), i === l && (typeof t == "boolean" ? (i = t, t = l) : typeof e == "boolean" && (i = e, e = l)), e === l && t === l ? (e = 0, t = 1) : (e = $n(e), t === l ? (t = e, e = 0) : t = $n(t)), e > t) {
            var s = e;
            e = t, t = s;
          }
          if (i || e % 1 || t % 1) {
            var f = Pu();
            return Et(e + f * (t - e + Eo("1e-" + ((f + "").length - 1))), t);
          }
          return bs(e, t);
        }
        var Qv = jr(function(e, t, i) {
          return t = t.toLowerCase(), e + (i ? fc(t) : t);
        });
        function fc(e) {
          return $s(He(e).toLowerCase());
        }
        function dc(e) {
          return e = He(e), e && e.replace(La, ns).replace(xo, "");
        }
        function em(e, t, i) {
          e = He(e), t = Vt(t);
          var s = e.length;
          i = i === l ? s : _r(Te(i), 0, s);
          var f = i;
          return i -= t.length, i >= 0 && e.slice(i, f) == t;
        }
        function tm(e) {
          return e = He(e), e && ui.test(e) ? e.replace(Ar, rs) : e;
        }
        function nm(e) {
          return e = He(e), e && Ca.test(e) ? e.replace(hi, "\\$&") : e;
        }
        var rm = jr(function(e, t, i) {
          return e + (i ? "-" : "") + t.toLowerCase();
        }), im = jr(function(e, t, i) {
          return e + (i ? " " : "") + t.toLowerCase();
        }), om = gl("toLowerCase");
        function am(e, t, i) {
          e = He(e), t = Te(t);
          var s = t ? S(e) : 0;
          if (!t || s >= t)
            return e;
          var f = (t - s) / 2;
          return oa($o(f), i) + e + oa(Xo(f), i);
        }
        function sm(e, t, i) {
          e = He(e), t = Te(t);
          var s = t ? S(e) : 0;
          return t && s < t ? e + oa(t - s, i) : e;
        }
        function um(e, t, i) {
          e = He(e), t = Te(t);
          var s = t ? S(e) : 0;
          return t && s < t ? oa(t - s, i) + e : e;
        }
        function lm(e, t, i) {
          return i || t == null ? t = 0 : t && (t = +t), vd(He(e).replace(Dr, ""), t || 0);
        }
        function cm(e, t, i) {
          return (i ? zt(e, t, i) : t === l) ? t = 1 : t = Te(t), xs(He(e), t);
        }
        function fm() {
          var e = arguments, t = He(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var dm = jr(function(e, t, i) {
          return e + (i ? "_" : "") + t.toLowerCase();
        });
        function hm(e, t, i) {
          return i && typeof i != "number" && zt(e, t, i) && (t = i = l), i = i === l ? Me : i >>> 0, i ? (e = He(e), e && (typeof t == "string" || t != null && !Gs(t)) && (t = Vt(t), !t && Jn(e)) ? rr(x(e), 0, i) : e.split(t, i)) : [];
        }
        var pm = jr(function(e, t, i) {
          return e + (i ? " " : "") + $s(t);
        });
        function gm(e, t, i) {
          return e = He(e), i = i == null ? 0 : _r(Te(i), 0, e.length), t = Vt(t), e.slice(i, i + t.length) == t;
        }
        function vm(e, t, i) {
          var s = g.templateSettings;
          i && zt(e, t, i) && (t = l), e = He(e), t = ma({}, t, s, _l);
          var f = ma({}, t.imports, s.imports, _l), m = vt(f), _ = Ai(f, m), T, C, N = 0, B = t.interpolate || zr, U = "__p += '", j = At(
            (t.escape || zr).source + "|" + B.source + "|" + (B === ci ? de : zr).source + "|" + (t.evaluate || zr).source + "|$",
            "g"
          ), ie = "//# sourceURL=" + (qe.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++gr + "]") + `
`;
          e.replace(j, function(ce, Pe, Fe, Zt, Pt, Jt) {
            return Fe || (Fe = Zt), U += e.slice(N, Jt).replace(ka, is), Pe && (T = !0, U += `' +
__e(` + Pe + `) +
'`), Pt && (C = !0, U += `';
` + Pt + `;
__p += '`), Fe && (U += `' +
((__t = (` + Fe + `)) == null ? '' : __t) +
'`), N = Jt + ce.length, ce;
          }), U += `';
`;
          var le = qe.call(t, "variable") && t.variable;
          if (!le)
            U = `with (obj) {
` + U + `
}
`;
          else if (oo.test(le))
            throw new $(L);
          U = (C ? U.replace(gn, "") : U).replace(sr, "$1").replace(Kn, "$1;"), U = "function(" + (le || "obj") + `) {
` + (le ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (C ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
          var Ce = pc(function() {
            return ge(m, ie + "return " + U).apply(l, _);
          });
          if (Ce.source = U, Hs(Ce))
            throw Ce;
          return Ce;
        }
        function mm(e) {
          return He(e).toLowerCase();
        }
        function ym(e) {
          return He(e).toUpperCase();
        }
        function bm(e, t, i) {
          if (e = He(e), e && (i || t === l))
            return Ci(e);
          if (!e || !(t = Vt(t)))
            return e;
          var s = x(e), f = x(t), m = Lo(s, f), _ = ko(s, f) + 1;
          return rr(s, m, _).join("");
        }
        function xm(e, t, i) {
          if (e = He(e), e && (i || t === l))
            return e.slice(0, I(e) + 1);
          if (!e || !(t = Vt(t)))
            return e;
          var s = x(e), f = ko(s, x(t)) + 1;
          return rr(s, 0, f).join("");
        }
        function wm(e, t, i) {
          if (e = He(e), e && (i || t === l))
            return e.replace(Dr, "");
          if (!e || !(t = Vt(t)))
            return e;
          var s = x(e), f = Lo(s, x(t));
          return rr(s, f).join("");
        }
        function _m(e, t) {
          var i = lt, s = Y;
          if (et(t)) {
            var f = "separator" in t ? t.separator : f;
            i = "length" in t ? Te(t.length) : i, s = "omission" in t ? Vt(t.omission) : s;
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
          var C = _ ? rr(_, 0, T).join("") : e.slice(0, T);
          if (f === l)
            return C + s;
          if (_ && (T += C.length - T), Gs(f)) {
            if (e.slice(T).search(f)) {
              var N, B = C;
              for (f.global || (f = At(f.source, He(pi.exec(f)) + "g")), f.lastIndex = 0; N = f.exec(B); )
                var U = N.index;
              C = C.slice(0, U === l ? T : U);
            }
          } else if (e.indexOf(Vt(f), T) != T) {
            var j = C.lastIndexOf(f);
            j > -1 && (C = C.slice(0, j));
          }
          return C + s;
        }
        function Sm(e) {
          return e = He(e), e && ro.test(e) ? e.replace(si, P) : e;
        }
        var Em = jr(function(e, t, i) {
          return e + (i ? " " : "") + t.toUpperCase();
        }), $s = gl("toUpperCase");
        function hc(e, t, i) {
          return e = He(e), t = i ? l : t, t === l ? r(e) ? G(e) : Qa(e) : e.match(t) || [];
        }
        var pc = De(function(e, t) {
          try {
            return Ct(e, l, t);
          } catch (i) {
            return Hs(i) ? i : new $(i);
          }
        }), Tm = Gn(function(e, t) {
          return Bt(t, function(i) {
            i = An(i), Un(e, i, Ws(e[i], e));
          }), e;
        });
        function Om(e) {
          var t = e == null ? 0 : e.length, i = se();
          return e = t ? Ve(e, function(s) {
            if (typeof s[1] != "function")
              throw new xt(k);
            return [i(s[0]), s[1]];
          }) : [], De(function(s) {
            for (var f = -1; ++f < t; ) {
              var m = e[f];
              if (Ct(m[0], this, s))
                return Ct(m[1], this, s);
            }
          });
        }
        function Im(e) {
          return Jd(ln(e, ee));
        }
        function Ys(e) {
          return function() {
            return e;
          };
        }
        function Rm(e, t) {
          return e == null || e !== e ? t : e;
        }
        var Mm = ml(), Cm = ml(!0);
        function Gt(e) {
          return e;
        }
        function Ks(e) {
          return Yu(typeof e == "function" ? e : ln(e, ee));
        }
        function Am(e) {
          return Vu(ln(e, ee));
        }
        function Dm(e, t) {
          return ju(e, ln(t, ee));
        }
        var zm = De(function(e, t) {
          return function(i) {
            return Bi(i, e, t);
          };
        }), Pm = De(function(e, t) {
          return function(i) {
            return Bi(e, i, t);
          };
        });
        function Vs(e, t, i) {
          var s = vt(t), f = Jo(t, s);
          i == null && !(et(t) && (f.length || !s.length)) && (i = t, t = e, e = this, f = Jo(t, vt(t)));
          var m = !(et(i) && "chain" in i) || !!i.chain, _ = Xn(e);
          return Bt(f, function(T) {
            var C = t[T];
            e[T] = C, _ && (e.prototype[T] = function() {
              var N = this.__chain__;
              if (m || N) {
                var B = e(this.__wrapped__), U = B.__actions__ = Wt(this.__actions__);
                return U.push({ func: C, args: arguments, thisArg: e }), B.__chain__ = N, B;
              }
              return C.apply(e, yn([this.value()], arguments));
            });
          }), e;
        }
        function Lm() {
          return ft._ === this && (ft._ = sd), this;
        }
        function js() {
        }
        function km(e) {
          return e = Te(e), De(function(t) {
            return Zu(t, e);
          });
        }
        var Fm = Is(Ve), Nm = Is(Ii), Bm = Is(Fn);
        function gc(e) {
          return Ps(e) ? Mi(An(e)) : gh(e);
        }
        function Wm(e) {
          return function(t) {
            return e == null ? l : Sr(e, t);
          };
        }
        var Um = bl(), Hm = bl(!0);
        function Zs() {
          return [];
        }
        function Js() {
          return !1;
        }
        function Gm() {
          return {};
        }
        function qm() {
          return "";
        }
        function Xm() {
          return !0;
        }
        function $m(e, t) {
          if (e = Te(e), e < 1 || e > Ze)
            return [];
          var i = Me, s = Et(e, Me);
          t = se(t), e -= Me;
          for (var f = Nn(s, t); ++i < e; )
            t(i);
          return f;
        }
        function Ym(e) {
          return xe(e) ? Ve(e, An) : jt(e) ? [e] : Wt(Ll(He(e)));
        }
        function Km(e) {
          var t = ++od;
          return He(e) + t;
        }
        var Vm = ia(function(e, t) {
          return e + t;
        }, 0), jm = Rs("ceil"), Zm = ia(function(e, t) {
          return e / t;
        }, 1), Jm = Rs("floor");
        function Qm(e) {
          return e && e.length ? Zo(e, Gt, hs) : l;
        }
        function e0(e, t) {
          return e && e.length ? Zo(e, se(t, 2), hs) : l;
        }
        function t0(e) {
          return vr(e, Gt);
        }
        function n0(e, t) {
          return vr(e, se(t, 2));
        }
        function r0(e) {
          return e && e.length ? Zo(e, Gt, ms) : l;
        }
        function i0(e, t) {
          return e && e.length ? Zo(e, se(t, 2), ms) : l;
        }
        var o0 = ia(function(e, t) {
          return e * t;
        }, 1), a0 = Rs("round"), s0 = ia(function(e, t) {
          return e - t;
        }, 0);
        function u0(e) {
          return e && e.length ? qr(e, Gt) : 0;
        }
        function l0(e, t) {
          return e && e.length ? qr(e, se(t, 2)) : 0;
        }
        return g.after = Ag, g.ary = $l, g.assign = yv, g.assignIn = ac, g.assignInWith = ma, g.assignWith = bv, g.at = xv, g.before = Yl, g.bind = Ws, g.bindAll = Tm, g.bindKey = Kl, g.castArray = Gg, g.chain = Gl, g.chunk = Jh, g.compact = Qh, g.concat = ep, g.cond = Om, g.conforms = Im, g.constant = Ys, g.countBy = ug, g.create = wv, g.curry = Vl, g.curryRight = jl, g.debounce = Zl, g.defaults = _v, g.defaultsDeep = Sv, g.defer = Dg, g.delay = zg, g.difference = tp, g.differenceBy = np, g.differenceWith = rp, g.drop = ip, g.dropRight = op, g.dropRightWhile = ap, g.dropWhile = sp, g.fill = up, g.filter = cg, g.flatMap = hg, g.flatMapDeep = pg, g.flatMapDepth = gg, g.flatten = Bl, g.flattenDeep = lp, g.flattenDepth = cp, g.flip = Pg, g.flow = Mm, g.flowRight = Cm, g.fromPairs = fp, g.functions = Cv, g.functionsIn = Av, g.groupBy = vg, g.initial = hp, g.intersection = pp, g.intersectionBy = gp, g.intersectionWith = vp, g.invert = zv, g.invertBy = Pv, g.invokeMap = yg, g.iteratee = Ks, g.keyBy = bg, g.keys = vt, g.keysIn = Ht, g.map = fa, g.mapKeys = kv, g.mapValues = Fv, g.matches = Am, g.matchesProperty = Dm, g.memoize = ha, g.merge = Nv, g.mergeWith = sc, g.method = zm, g.methodOf = Pm, g.mixin = Vs, g.negate = pa, g.nthArg = km, g.omit = Bv, g.omitBy = Wv, g.once = Lg, g.orderBy = xg, g.over = Fm, g.overArgs = kg, g.overEvery = Nm, g.overSome = Bm, g.partial = Us, g.partialRight = Jl, g.partition = wg, g.pick = Uv, g.pickBy = uc, g.property = gc, g.propertyOf = Wm, g.pull = xp, g.pullAll = Ul, g.pullAllBy = wp, g.pullAllWith = _p, g.pullAt = Sp, g.range = Um, g.rangeRight = Hm, g.rearg = Fg, g.reject = Eg, g.remove = Ep, g.rest = Ng, g.reverse = Ns, g.sampleSize = Og, g.set = Gv, g.setWith = qv, g.shuffle = Ig, g.slice = Tp, g.sortBy = Cg, g.sortedUniq = Dp, g.sortedUniqBy = zp, g.split = hm, g.spread = Bg, g.tail = Pp, g.take = Lp, g.takeRight = kp, g.takeRightWhile = Fp, g.takeWhile = Np, g.tap = Qp, g.throttle = Wg, g.thru = ca, g.toArray = rc, g.toPairs = lc, g.toPairsIn = cc, g.toPath = Ym, g.toPlainObject = oc, g.transform = Xv, g.unary = Ug, g.union = Bp, g.unionBy = Wp, g.unionWith = Up, g.uniq = Hp, g.uniqBy = Gp, g.uniqWith = qp, g.unset = $v, g.unzip = Bs, g.unzipWith = Hl, g.update = Yv, g.updateWith = Kv, g.values = Qr, g.valuesIn = Vv, g.without = Xp, g.words = hc, g.wrap = Hg, g.xor = $p, g.xorBy = Yp, g.xorWith = Kp, g.zip = Vp, g.zipObject = jp, g.zipObjectDeep = Zp, g.zipWith = Jp, g.entries = lc, g.entriesIn = cc, g.extend = ac, g.extendWith = ma, Vs(g, g), g.add = Vm, g.attempt = pc, g.camelCase = Qv, g.capitalize = fc, g.ceil = jm, g.clamp = jv, g.clone = qg, g.cloneDeep = $g, g.cloneDeepWith = Yg, g.cloneWith = Xg, g.conformsTo = Kg, g.deburr = dc, g.defaultTo = Rm, g.divide = Zm, g.endsWith = em, g.eq = wn, g.escape = tm, g.escapeRegExp = nm, g.every = lg, g.find = fg, g.findIndex = Fl, g.findKey = Ev, g.findLast = dg, g.findLastIndex = Nl, g.findLastKey = Tv, g.floor = Jm, g.forEach = ql, g.forEachRight = Xl, g.forIn = Ov, g.forInRight = Iv, g.forOwn = Rv, g.forOwnRight = Mv, g.get = qs, g.gt = Vg, g.gte = jg, g.has = Dv, g.hasIn = Xs, g.head = Wl, g.identity = Gt, g.includes = mg, g.indexOf = dp, g.inRange = Zv, g.invoke = Lv, g.isArguments = Or, g.isArray = xe, g.isArrayBuffer = Zg, g.isArrayLike = Ut, g.isArrayLikeObject = it, g.isBoolean = Jg, g.isBuffer = ir, g.isDate = Qg, g.isElement = ev, g.isEmpty = tv, g.isEqual = nv, g.isEqualWith = rv, g.isError = Hs, g.isFinite = iv, g.isFunction = Xn, g.isInteger = Ql, g.isLength = ga, g.isMap = ec, g.isMatch = ov, g.isMatchWith = av, g.isNaN = sv, g.isNative = uv, g.isNil = cv, g.isNull = lv, g.isNumber = tc, g.isObject = et, g.isObjectLike = tt, g.isPlainObject = Xi, g.isRegExp = Gs, g.isSafeInteger = fv, g.isSet = nc, g.isString = va, g.isSymbol = jt, g.isTypedArray = Jr, g.isUndefined = dv, g.isWeakMap = hv, g.isWeakSet = pv, g.join = mp, g.kebabCase = rm, g.last = fn, g.lastIndexOf = yp, g.lowerCase = im, g.lowerFirst = om, g.lt = gv, g.lte = vv, g.max = Qm, g.maxBy = e0, g.mean = t0, g.meanBy = n0, g.min = r0, g.minBy = i0, g.stubArray = Zs, g.stubFalse = Js, g.stubObject = Gm, g.stubString = qm, g.stubTrue = Xm, g.multiply = o0, g.nth = bp, g.noConflict = Lm, g.noop = js, g.now = da, g.pad = am, g.padEnd = sm, g.padStart = um, g.parseInt = lm, g.random = Jv, g.reduce = _g, g.reduceRight = Sg, g.repeat = cm, g.replace = fm, g.result = Hv, g.round = a0, g.runInContext = w, g.sample = Tg, g.size = Rg, g.snakeCase = dm, g.some = Mg, g.sortedIndex = Op, g.sortedIndexBy = Ip, g.sortedIndexOf = Rp, g.sortedLastIndex = Mp, g.sortedLastIndexBy = Cp, g.sortedLastIndexOf = Ap, g.startCase = pm, g.startsWith = gm, g.subtract = s0, g.sum = u0, g.sumBy = l0, g.template = vm, g.times = $m, g.toFinite = $n, g.toInteger = Te, g.toLength = ic, g.toLower = mm, g.toNumber = dn, g.toSafeInteger = mv, g.toString = He, g.toUpper = ym, g.trim = bm, g.trimEnd = xm, g.trimStart = wm, g.truncate = _m, g.unescape = Sm, g.uniqueId = Km, g.upperCase = Em, g.upperFirst = $s, g.each = ql, g.eachRight = Xl, g.first = Wl, Vs(g, (function() {
          var e = {};
          return Mn(g, function(t, i) {
            qe.call(g.prototype, i) || (e[i] = t);
          }), e;
        })(), { chain: !1 }), g.VERSION = y, Bt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          g[e].placeholder = g;
        }), Bt(["drop", "take"], function(e, t) {
          Le.prototype[e] = function(i) {
            i = i === l ? 1 : dt(Te(i), 0);
            var s = this.__filtered__ && !t ? new Le(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = Et(i, s.__takeCount__) : s.__views__.push({
              size: Et(i, Me),
              type: e + (s.__dir__ < 0 ? "Right" : "")
            }), s;
          }, Le.prototype[e + "Right"] = function(i) {
            return this.reverse()[e](i).reverse();
          };
        }), Bt(["filter", "map", "takeWhile"], function(e, t) {
          var i = t + 1, s = i == be || i == Re;
          Le.prototype[e] = function(f) {
            var m = this.clone();
            return m.__iteratees__.push({
              iteratee: se(f, 3),
              type: i
            }), m.__filtered__ = m.__filtered__ || s, m;
          };
        }), Bt(["head", "last"], function(e, t) {
          var i = "take" + (t ? "Right" : "");
          Le.prototype[e] = function() {
            return this[i](1).value()[0];
          };
        }), Bt(["initial", "tail"], function(e, t) {
          var i = "drop" + (t ? "" : "Right");
          Le.prototype[e] = function() {
            return this.__filtered__ ? new Le(this) : this[i](1);
          };
        }), Le.prototype.compact = function() {
          return this.filter(Gt);
        }, Le.prototype.find = function(e) {
          return this.filter(e).head();
        }, Le.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, Le.prototype.invokeMap = De(function(e, t) {
          return typeof e == "function" ? new Le(this) : this.map(function(i) {
            return Bi(i, e, t);
          });
        }), Le.prototype.reject = function(e) {
          return this.filter(pa(se(e)));
        }, Le.prototype.slice = function(e, t) {
          e = Te(e);
          var i = this;
          return i.__filtered__ && (e > 0 || t < 0) ? new Le(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== l && (t = Te(t), i = t < 0 ? i.dropRight(-t) : i.take(t - e)), i);
        }, Le.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, Le.prototype.toArray = function() {
          return this.take(Me);
        }, Mn(Le.prototype, function(e, t) {
          var i = /^(?:filter|find|map|reject)|While$/.test(t), s = /^(?:head|last)$/.test(t), f = g[s ? "take" + (t == "last" ? "Right" : "") : t], m = s || /^find/.test(t);
          f && (g.prototype[t] = function() {
            var _ = this.__wrapped__, T = s ? [1] : arguments, C = _ instanceof Le, N = T[0], B = C || xe(_), U = function(Pe) {
              var Fe = f.apply(g, yn([Pe], T));
              return s && j ? Fe[0] : Fe;
            };
            B && i && typeof N == "function" && N.length != 1 && (C = B = !1);
            var j = this.__chain__, ie = !!this.__actions__.length, le = m && !j, Ce = C && !ie;
            if (!m && B) {
              _ = Ce ? _ : new Le(this);
              var ce = e.apply(_, T);
              return ce.__actions__.push({ func: ca, args: [U], thisArg: l }), new un(ce, j);
            }
            return le && Ce ? e.apply(this, T) : (ce = this.thru(U), le ? s ? ce.value()[0] : ce.value() : ce);
          });
        }), Bt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Rn[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
          g.prototype[e] = function() {
            var f = arguments;
            if (s && !this.__chain__) {
              var m = this.value();
              return t.apply(xe(m) ? m : [], f);
            }
            return this[i](function(_) {
              return t.apply(xe(_) ? _ : [], f);
            });
          };
        }), Mn(Le.prototype, function(e, t) {
          var i = g[t];
          if (i) {
            var s = i.name + "";
            qe.call(Yr, s) || (Yr[s] = []), Yr[s].push({ name: t, func: i });
          }
        }), Yr[ra(l, We).name] = [{
          name: "wrapper",
          func: l
        }], Le.prototype.clone = Sd, Le.prototype.reverse = Ed, Le.prototype.value = Td, g.prototype.at = eg, g.prototype.chain = tg, g.prototype.commit = ng, g.prototype.next = rg, g.prototype.plant = og, g.prototype.reverse = ag, g.prototype.toJSON = g.prototype.valueOf = g.prototype.value = sg, g.prototype.first = g.prototype.head, Di && (g.prototype[Di] = ig), g;
      }), V = Z();
      kn ? ((kn.exports = V)._ = V, an._ = V) : ft._ = V;
    }).call(Fy);
  })(Ki, Ki.exports)), Ki.exports;
}
var Ir = Ny(), nu, ef;
function Eu() {
  if (ef) return nu;
  ef = 1;
  function h(d) {
    var l = typeof d;
    return d != null && (l == "object" || l == "function");
  }
  return nu = h, nu;
}
var ru, tf;
function By() {
  if (tf) return ru;
  tf = 1;
  var h = typeof or == "object" && or && or.Object === Object && or;
  return ru = h, ru;
}
var iu, nf;
function Vf() {
  if (nf) return iu;
  nf = 1;
  var h = By(), d = typeof self == "object" && self && self.Object === Object && self, l = h || d || Function("return this")();
  return iu = l, iu;
}
var ou, rf;
function Wy() {
  if (rf) return ou;
  rf = 1;
  var h = Vf(), d = function() {
    return h.Date.now();
  };
  return ou = d, ou;
}
var au, of;
function Uy() {
  if (of) return au;
  of = 1;
  var h = /\s/;
  function d(l) {
    for (var y = l.length; y-- && h.test(l.charAt(y)); )
      ;
    return y;
  }
  return au = d, au;
}
var su, af;
function Hy() {
  if (af) return su;
  af = 1;
  var h = Uy(), d = /^\s+/;
  function l(y) {
    return y && y.slice(0, h(y) + 1).replace(d, "");
  }
  return su = l, su;
}
var uu, sf;
function jf() {
  if (sf) return uu;
  sf = 1;
  var h = Vf(), d = h.Symbol;
  return uu = d, uu;
}
var lu, uf;
function Gy() {
  if (uf) return lu;
  uf = 1;
  var h = jf(), d = Object.prototype, l = d.hasOwnProperty, y = d.toString, M = h ? h.toStringTag : void 0;
  function O(k) {
    var L = l.call(k, M), E = k[M];
    try {
      k[M] = void 0;
      var K = !0;
    } catch {
    }
    var he = y.call(k);
    return K && (L ? k[M] = E : delete k[M]), he;
  }
  return lu = O, lu;
}
var cu, lf;
function qy() {
  if (lf) return cu;
  lf = 1;
  var h = Object.prototype, d = h.toString;
  function l(y) {
    return d.call(y);
  }
  return cu = l, cu;
}
var fu, cf;
function Xy() {
  if (cf) return fu;
  cf = 1;
  var h = jf(), d = Gy(), l = qy(), y = "[object Null]", M = "[object Undefined]", O = h ? h.toStringTag : void 0;
  function k(L) {
    return L == null ? L === void 0 ? M : y : O && O in Object(L) ? d(L) : l(L);
  }
  return fu = k, fu;
}
var du, ff;
function $y() {
  if (ff) return du;
  ff = 1;
  function h(d) {
    return d != null && typeof d == "object";
  }
  return du = h, du;
}
var hu, df;
function Yy() {
  if (df) return hu;
  df = 1;
  var h = Xy(), d = $y(), l = "[object Symbol]";
  function y(M) {
    return typeof M == "symbol" || d(M) && h(M) == l;
  }
  return hu = y, hu;
}
var pu, hf;
function Ky() {
  if (hf) return pu;
  hf = 1;
  var h = Hy(), d = Eu(), l = Yy(), y = NaN, M = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, k = /^0o[0-7]+$/i, L = parseInt;
  function E(K) {
    if (typeof K == "number")
      return K;
    if (l(K))
      return y;
    if (d(K)) {
      var he = typeof K.valueOf == "function" ? K.valueOf() : K;
      K = d(he) ? he + "" : he;
    }
    if (typeof K != "string")
      return K === 0 ? K : +K;
    K = h(K);
    var ee = O.test(K);
    return ee || k.test(K) ? L(K.slice(2), ee ? 2 : 8) : M.test(K) ? y : +K;
  }
  return pu = E, pu;
}
var gu, pf;
function Vy() {
  if (pf) return gu;
  pf = 1;
  var h = Eu(), d = Wy(), l = Ky(), y = "Expected a function", M = Math.max, O = Math.min;
  function k(L, E, K) {
    var he, ee, ke, ue, ve, Xe, Ne = 0, We = !1, Se = !1, Oe = !0;
    if (typeof L != "function")
      throw new TypeError(y);
    E = l(E) || 0, h(K) && (We = !!K.leading, Se = "maxWait" in K, ke = Se ? M(l(K.maxWait) || 0, E) : ke, Oe = "trailing" in K ? !!K.trailing : Oe);
    function Ie(ne) {
      var be = he, fe = ee;
      return he = ee = void 0, Ne = ne, ue = L.apply(fe, be), ue;
    }
    function we(ne) {
      return Ne = ne, ve = setTimeout(_e, E), We ? Ie(ne) : ue;
    }
    function ye(ne) {
      var be = ne - Xe, fe = ne - Ne, Re = E - be;
      return Se ? O(Re, ke - fe) : Re;
    }
    function D(ne) {
      var be = ne - Xe, fe = ne - Ne;
      return Xe === void 0 || be >= E || be < 0 || Se && fe >= ke;
    }
    function _e() {
      var ne = d();
      if (D(ne))
        return ze(ne);
      ve = setTimeout(_e, ye(ne));
    }
    function ze(ne) {
      return ve = void 0, Oe && he ? Ie(ne) : (he = ee = void 0, ue);
    }
    function lt() {
      ve !== void 0 && clearTimeout(ve), Ne = 0, he = Xe = ee = ve = void 0;
    }
    function Y() {
      return ve === void 0 ? ue : ze(d());
    }
    function oe() {
      var ne = d(), be = D(ne);
      if (he = arguments, ee = this, Xe = ne, be) {
        if (ve === void 0)
          return we(Xe);
        if (Se)
          return clearTimeout(ve), ve = setTimeout(_e, E), Ie(Xe);
      }
      return ve === void 0 && (ve = setTimeout(_e, E)), ue;
    }
    return oe.cancel = lt, oe.flush = Y, oe;
  }
  return gu = k, gu;
}
var vu, gf;
function jy() {
  if (gf) return vu;
  gf = 1;
  var h = Vy(), d = Eu(), l = "Expected a function";
  function y(M, O, k) {
    var L = !0, E = !0;
    if (typeof M != "function")
      throw new TypeError(l);
    return d(k) && (L = "leading" in k ? !!k.leading : L, E = "trailing" in k ? !!k.trailing : E), h(M, O, {
      leading: L,
      maxWait: O,
      trailing: E
    });
  }
  return vu = y, vu;
}
var Zy = jy();
const Jy = /* @__PURE__ */ Ff(Zy), Qy = { class: "scroll max-h-screen ml-15" }, eb = ["onContextmenu"], tb = {
  key: 1,
  class: "text"
}, hn = "__drop__", nb = /* @__PURE__ */ Ia({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(h, { emit: d }) {
    const { t: l } = b0("layoutsGrid"), y = at(void 0), M = ht(() => Yf(y.value)), O = ht(() => M.value.cols), k = ht(() => M.value.rowHeight), L = ht(() => `${k.value}-${Object.values(O.value).join("-")}`), E = at(typeof window < "u" ? window.innerWidth : 1200), K = ht(() => Ke(E.value)), he = Sf(), ee = ht(() => he.params.pageid || ""), ke = wf(ee), ue = ke.widgets, ve = ke.layout, Xe = S0(), Ne = at({ x: 0, y: 0 }), We = at({
      visible: !1,
      x: 0,
      y: 0,
      widgetId: ""
    }), Se = at({
      visible: !1,
      x: 0,
      y: 0
    }), Oe = (X, z) => {
      We.value = {
        visible: !0,
        x: X.clientX,
        y: X.clientY,
        widgetId: z
      }, Se.value.visible = !1;
    }, Ie = () => {
      We.value.visible = !1, Se.value.visible = !1;
    }, we = () => {
      D(We.value.widgetId), Ie();
    }, ye = () => {
      _e(), Ie();
    }, D = (X) => {
      const z = ue.value.find((te) => te.uid === X), q = ve.value.find((te) => te.id === X);
      z && q && Xe.copy(
        {
          type: z.type,
          config: Ir.cloneDeep(z.config ?? {}),
          wrapperConfig: Ir.cloneDeep(z.wrapperConfig ?? {})
        },
        {
          x: q.x,
          y: q.y,
          z: q.z,
          width: q.width,
          height: q.height,
          group: q.group
        }
      );
    }, _e = () => {
      const X = Xe.paste();
      if (!X) return;
      const z = "li_" + Math.random().toString(36).substring(7), q = Ir.cloneDeep(X.widget);
      q.uid = z, q.config?.settings && (q.config.settings.name = "widget_" + z);
      const { colW: te, rowH: pe } = Me(), Ae = Math.round(Ne.value.x / te), J = Math.round(Ne.value.y / pe), re = {
        i: z,
        x: Ae,
        y: J,
        w: Math.max(1, Math.round((X.layout.width || 200) / te)),
        h: Math.max(1, Math.round((X.layout.height || 100) / pe)),
        static: !1
      };
      ke.addWidget(q, {
        id: q.uid,
        x: Ae * te,
        y: J * pe,
        z: 0,
        width: X.layout.width ?? 200,
        height: X.layout.height ?? 100
      }), fe.value = [...fe.value, re], _t(fe.value);
    }, ze = at(), lt = at(), Y = at(!1), oe = at({ x: -1, y: -1 }), ne = at(!1), be = at([]), fe = at([]), Re = at([]), ae = ht(() => [
      ...fe.value,
      ...Re.value
    ]), Ze = at(!1);
    function Ge(X, z = 0) {
      if (typeof X == "number") return X;
      const q = Number(X);
      return Number.isFinite(q) ? q : z;
    }
    function Ke(X) {
      const z = O.value;
      return X >= ii.lg ? z.lg : X >= ii.md ? z.md : X >= ii.sm ? z.sm : X >= ii.xs ? z.xs : z.xxs;
    }
    function Me() {
      return { colW: 1200 / O.value.md, rowH: k.value };
    }
    function Nt(X) {
      const { colW: z, rowH: q } = Me(), te = Ge(X.x, 0), pe = Ge(X.y, 0), Ae = Ge(X.width, z), J = Ge(X.height, q);
      return {
        i: String(X.id ?? X.i ?? ""),
        x: Math.round(te / z),
        y: Math.round(pe / q),
        w: Math.max(1, Math.round(Ae / z)),
        h: Math.max(1, Math.round(J / q)),
        static: !1
      };
    }
    function pt(X) {
      const { colW: z, rowH: q } = Me();
      return {
        id: String(X.i),
        x: Ge(X.x, 0) * z,
        y: Ge(X.y, 0) * q,
        width: Ge(X.w, 1) * z,
        height: Ge(X.h, 1) * q,
        z: 3e3
      };
    }
    je(ve, (X) => {
      Ze.value = !0;
      try {
        const z = Array.isArray(X) ? X.map(Nt) : [];
        Ir.isEqual(fe.value, z) || (fe.value = z);
      } finally {
        qt(() => Ze.value = !1);
      }
    }, { immediate: !0, deep: !0 });
    const Pn = Jy(() => {
      E.value = window.innerWidth;
      const X = ve.value || [], z = Array.isArray(X) ? X.map(Nt) : [];
      Ir.isEqual(fe.value, z) || (fe.value = z);
    }, 120);
    let ct = null;
    const Je = Qi(Ef) ?? null;
    function pn() {
      if (Je && ee.value) {
        const X = Je.getPage(ee.value);
        y.value = X?.layoutSettings ? { ...Ea(X.layoutSettings) } : void 0;
      }
    }
    Ra(() => {
      window.addEventListener("resize", Pn, { passive: !0 }), pn(), Je && "subscribe" in Je && (ct = Je.subscribe((X) => {
        X === "PAGE_UPDATE" && pn();
      }));
    }), _u(() => {
      window.removeEventListener("resize", Pn), Je && "unsubscribe" in Je && ct && Je.unsubscribe(ct);
    });
    function _t(X) {
      if (Ze.value) return;
      const q = (X ?? ae.value).filter((J) => J.i !== hn).map(pt), te = ve.value || [], pe = q.map((J) => ({
        ...J,
        x: Math.round(J.x * 100) / 100,
        y: Math.round(J.y * 100) / 100,
        width: Math.round(J.width * 100) / 100,
        height: Math.round(J.height * 100) / 100
      })), Ae = te.map((J) => ({
        ...J,
        x: Math.round(J.x * 100) / 100,
        y: Math.round(J.y * 100) / 100,
        width: Math.round(J.width * 100) / 100,
        height: Math.round(J.height * 100) / 100
      }));
      Ir.isEqual(Ae, pe) || ke.setBoard(ar(), q);
    }
    async function Q() {
      return Re.value.find((X) => X.i === hn) || (Re.value = [...Re.value, { x: 0, y: 0, w: 2, h: 2, i: hn, static: !1 }], await qt()), await qt(), ze.value?.getItem?.(hn);
    }
    function Xt() {
      Re.value = Re.value.filter((X) => X.i !== hn);
    }
    async function Ot() {
      Y.value = !0, ne.value = !1, await Q();
    }
    async function St(X) {
      const z = X;
      if (!z || !ze.value) return;
      const q = document.querySelector(".alayout");
      if (!q) return;
      const te = q.getBoundingClientRect();
      Re.value.find((rt) => rt.i === hn) || (Re.value = [...Re.value, { x: 0, y: 0, w: 2, h: 2, i: hn, static: !1 }], await qt()), await qt();
      const pe = ze.value?.getItem?.(hn);
      if (!pe) return;
      const Ae = z.clientX - te.left, J = z.clientY - te.top;
      let re = pe.calcXY(J, Ae);
      const Qe = ze.value?.cols ?? 12;
      (re.x < 0 || re.y < 0 || re.x >= Qe) && (re = pe.calcXY(Ae, J)), oe.value = { x: Ge(re.x, 0), y: Ge(re.y, 0) }, ne.value ? ze.value.dragEvent("drag", hn, oe.value.x, oe.value.y, 2, 2) : (ze.value.dragEvent("dragstart", hn, oe.value.x, oe.value.y, 2, 2), ne.value = !0);
    }
    function en() {
      ne.value && ze.value && ze.value.dragEvent("dragend", hn, oe.value.x, oe.value.y, 2, 2), Xt(), ne.value = !1, Y.value = !1;
    }
    function nt(X) {
      const z = X?.item?._underlying_vm_ || X?.added?.element || X?.item, q = z?.type ?? "UnknownWidget", te = z?.datasourceId ?? "default";
      ne.value && ze.value && ze.value.dragEvent("dragend", hn, oe.value.x, oe.value.y, 2, 2), Xt(), ne.value = !1, Y.value = !1;
      const pe = `widget_${Math.random().toString(36).slice(2, 9)}`, { x: Ae, y: J } = oe.value;
      fe.value = [...fe.value, { i: pe, x: Ae, y: J, w: 2, h: 2, static: !1 }], _t(fe.value), mt(pe, q, te), oe.value = { x: -1, y: -1 };
    }
    function It() {
      Y.value = !0;
    }
    function $t() {
      en();
    }
    function mt(X, z, q) {
      const te = {
        uid: X,
        type: z,
        config: { datasourceId: q, settings: {} },
        wrapperConfig: Ir.cloneDeep(x0)
      };
      ke.addWidget(te, { id: X, x: 0, y: 0, z: 0, width: 300, height: 150 });
    }
    function Yt(X) {
      ke.removeWidget(X), fe.value = fe.value.filter((z) => z.i !== X), _t(fe.value);
    }
    function ar() {
      return ue.value.map((X) => ({
        uid: X.uid,
        type: X.type,
        config: X.config,
        wrapperConfig: X.wrapperConfig
      }));
    }
    const Rt = d, st = (X) => {
      Rt("openSettings", X);
    };
    return (X, z) => (Ft(), zn("div", Qy, [
      wa("div", {
        ref_key: "wrapper",
        ref: lt,
        onDragenter: It,
        onDrop: xc($t, ["prevent"]),
        onDrag: St,
        class: "alayout",
        onClick: Ie,
        style: Vi({ "--grid-row-height": k.value + "px", "--grid-cols": K.value })
      }, [
        (Ft(), to(ut($f), {
          ref_key: "gridLayout",
          ref: ze,
          key: L.value,
          layout: ae.value,
          "row-height": k.value,
          responsive: !0,
          "vertical-compact": !1,
          breakpoints: ut(ii),
          cols: O.value,
          onLayoutUpdated: _t
        }, {
          item: oi(({ item: q }) => [
            wa("div", {
              class: "widget-item-wrapper",
              onContextmenu: xc((te) => Oe(te, String(q.i)), ["stop", "prevent"])
            }, [
              ut(ue)?.find((te) => te.uid === q.i) ? (Ft(), to(ut(_f), {
                key: 0,
                widget: ut(ue).find((te) => te.uid === q.i),
                ref: `${q.i}_wrapper`,
                onOpenSettings: st,
                editEnabled: "",
                onRemoveWidget: () => Yt(q.i.toString())
              }, null, 8, ["widget", "onRemoveWidget"])) : (Ft(), zn("span", tb, $i(`${q.i}${q.static ? "- Static" : ""}`), 1))
            ], 40, eb)
          ]),
          _: 1
        }, 8, ["layout", "row-height", "breakpoints", "cols"])),
        We.value.visible ? (Ft(), zn("div", {
          key: 0,
          class: "widget-context-menu",
          style: Vi({ left: We.value.x + "px", top: We.value.y + "px" })
        }, [
          ni(ut(_c), {
            intent: "quiet",
            size: "sm",
            class: "menu__item",
            onClick: we
          }, {
            default: oi(() => [
              ni(ut(Sc), {
                name: "content_copy",
                size: "sm"
              }),
              wc(" " + $i(ut(l)("Menu.copy")), 1)
            ]),
            _: 1
          })
        ], 4)) : yu("", !0),
        bf(ni(ut(_0), {
          list: be.value,
          group: { name: "widgets" },
          class: "invisible-dropzone",
          itemKey: "type",
          sort: !1,
          onStart: Ot,
          onEnd: en,
          onAdd: nt
        }, {
          item: oi(({ element: q }) => [
            wa("div", null, $i(q.type), 1)
          ]),
          _: 1
        }, 8, ["list"]), [
          [xf, Y.value]
        ]),
        Se.value.visible && ut(Xe).hasClipboard ? (Ft(), zn("div", {
          key: 1,
          class: "canvas-context-menu",
          style: Vi({ left: Se.value.x + "px", top: Se.value.y + "px" })
        }, [
          ni(ut(_c), {
            intent: "quiet",
            size: "sm",
            class: "menu__item",
            onClick: ye
          }, {
            default: oi(() => [
              ni(ut(Sc), {
                name: "content_paste",
                size: "sm"
              }),
              wc(" " + $i(ut(l)("Menu.paste")), 1)
            ]),
            _: 1
          })
        ], 4)) : yu("", !0)
      ], 36)
    ]));
  }
}), rb = /* @__PURE__ */ Kf(nb, [["__scopeId", "data-v-df592d77"]]);
class Be extends Tf {
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
    return Ye.Literals.GRID_COLUMNS;
  }
  // Getters and Setters
  get lg() {
    return this._lg;
  }
  set lg(d) {
    const l = this._lg;
    this._lg = d, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Be.LG),
      getOldValue: () => l,
      getNewValue: () => d,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Be.LG,
      merge: () => !1
    });
  }
  get md() {
    return this._md;
  }
  set md(d) {
    const l = this._md;
    this._md = d, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Be.MD),
      getOldValue: () => l,
      getNewValue: () => d,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Be.MD,
      merge: () => !1
    });
  }
  get sm() {
    return this._sm;
  }
  set sm(d) {
    const l = this._sm;
    this._sm = d, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Be.SM),
      getOldValue: () => l,
      getNewValue: () => d,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Be.SM,
      merge: () => !1
    });
  }
  get xs() {
    return this._xs;
  }
  set xs(d) {
    const l = this._xs;
    this._xs = d, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Be.XS),
      getOldValue: () => l,
      getNewValue: () => d,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Be.XS,
      merge: () => !1
    });
  }
  get xxs() {
    return this._xxs;
  }
  set xxs(d) {
    const l = this._xxs;
    this._xxs = d, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Be.XXS),
      getOldValue: () => l,
      getNewValue: () => d,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Be.XXS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(d) {
    switch (this.eClass().getFeatureID(d)) {
      case Be.LG:
        return this.lg;
      case Be.MD:
        return this.md;
      case Be.SM:
        return this.sm;
      case Be.XS:
        return this.xs;
      case Be.XXS:
        return this.xxs;
      default:
        return super.eGet(d);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(d, l) {
    switch (this.eClass().getFeatureID(d)) {
      case Be.LG:
        this.lg = l, super.eSet(d, l);
        break;
      case Be.MD:
        this.md = l, super.eSet(d, l);
        break;
      case Be.SM:
        this.sm = l, super.eSet(d, l);
        break;
      case Be.XS:
        this.xs = l, super.eSet(d, l);
        break;
      case Be.XXS:
        this.xxs = l, super.eSet(d, l);
        break;
      default:
        super.eSet(d, l);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(d) {
    switch (this.eClass().getFeatureID(d)) {
      case Be.LG:
        return this._lg !== 18;
      case Be.MD:
        return this._md !== 12;
      case Be.SM:
        return this._sm !== 6;
      case Be.XS:
        return this._xs !== 4;
      case Be.XXS:
        return this._xxs !== 2;
      default:
        return super.eIsSet(d);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(d) {
    switch (this.eClass().getFeatureID(d)) {
      case Be.LG:
        this._lg = 18;
        return;
      case Be.MD:
        this._md = 12;
        return;
      case Be.SM:
        this._sm = 6;
        return;
      case Be.XS:
        this._xs = 4;
        return;
      case Be.XXS:
        this._xxs = 2;
        return;
      default:
        super.eUnset(d);
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
class Tu extends E0 {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Tu()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(Ye.eINSTANCE);
  }
  /**
   * Create a new GridColumns instance
   */
  createGridColumns() {
    return new Be();
  }
  /**
   * Create a new GridSettings instance
   */
  createGridSettings() {
    return new kt();
  }
  /**
   * Create an instance of the given class
   */
  create(d) {
    switch (d.getName()) {
      case "GridColumns":
        return this.createGridColumns();
      case "GridSettings":
        return this.createGridSettings();
      default:
        throw new Error(`Unknown class: ${d.getName()}`);
    }
  }
}
class Ye extends T0 {
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
    return this._instance || (this._instance = new Ye(), this._instance.init()), this._instance;
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
    super(), this.setName(Ye.eNAME), this.setNsURI(Ye.eNS_URI), this.setNsPrefix(Ye.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    O0.INSTANCE.set(Ye.eNS_URI, this), this.setEFactoryInstance(Tu.eINSTANCE);
    const d = new Ec();
    d.setName("GridColumns"), d.setAbstract(!1), d.setInterface(!1), this.getEClassifiers().push(d), d.setEPackage(this), Ye.Literals.GRID_COLUMNS = d;
    const l = new ei();
    l.setName("lg"), l.setLowerBound(0), l.setUpperBound(1), d.getEStructuralFeatures().push(l), Ye.Literals.GRID_COLUMNS__LG = l;
    const y = new ei();
    y.setName("md"), y.setLowerBound(0), y.setUpperBound(1), d.getEStructuralFeatures().push(y), Ye.Literals.GRID_COLUMNS__MD = y;
    const M = new ei();
    M.setName("sm"), M.setLowerBound(0), M.setUpperBound(1), d.getEStructuralFeatures().push(M), Ye.Literals.GRID_COLUMNS__SM = M;
    const O = new ei();
    O.setName("xs"), O.setLowerBound(0), O.setUpperBound(1), d.getEStructuralFeatures().push(O), Ye.Literals.GRID_COLUMNS__XS = O;
    const k = new ei();
    k.setName("xxs"), k.setLowerBound(0), k.setUpperBound(1), d.getEStructuralFeatures().push(k), Ye.Literals.GRID_COLUMNS__XXS = k;
    const L = new Ec();
    L.setName("GridSettings"), L.setAbstract(!1), L.setInterface(!1), this.getEClassifiers().push(L), L.setEPackage(this), Ye.Literals.GRID_SETTINGS = L;
    const E = new ei();
    E.setName("rowHeight"), E.setLowerBound(0), E.setUpperBound(1), L.getEStructuralFeatures().push(E), Ye.Literals.GRID_SETTINGS__ROW_HEIGHT = E;
    const K = new I0();
    K.setContainment(!0), K.setName("cols"), K.setLowerBound(0), K.setUpperBound(1), L.getEStructuralFeatures().push(K), Ye.Literals.GRID_SETTINGS__COLS = K, Ye.Literals.GRID_COLUMNS__LG.setEType(ti().getEClassifier("EInt")), Ye.Literals.GRID_COLUMNS__MD.setEType(ti().getEClassifier("EInt")), Ye.Literals.GRID_COLUMNS__SM.setEType(ti().getEClassifier("EInt")), Ye.Literals.GRID_COLUMNS__XS.setEType(ti().getEClassifier("EInt")), Ye.Literals.GRID_COLUMNS__XXS.setEType(ti().getEClassifier("EInt")), Ye.Literals.GRID_SETTINGS__ROW_HEIGHT.setEType(ti().getEClassifier("EInt")), Ye.Literals.GRID_SETTINGS__COLS.setEType(Ye.Literals.GRID_COLUMNS);
  }
}
class kt extends Tf {
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
    return Ye.Literals.GRID_SETTINGS;
  }
  // Getters and Setters
  get rowHeight() {
    return this._rowHeight;
  }
  set rowHeight(d) {
    const l = this._rowHeight;
    this._rowHeight = d, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(kt.ROW_HEIGHT),
      getOldValue: () => l,
      getNewValue: () => d,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => kt.ROW_HEIGHT,
      merge: () => !1
    });
  }
  get cols() {
    return this._cols;
  }
  set cols(d) {
    const l = this._cols;
    this._cols = d, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(kt.COLS),
      getOldValue: () => l,
      getNewValue: () => d,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => kt.COLS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(d) {
    switch (this.eClass().getFeatureID(d)) {
      case kt.ROW_HEIGHT:
        return this.rowHeight;
      case kt.COLS:
        return this.cols;
      default:
        return super.eGet(d);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(d, l) {
    switch (this.eClass().getFeatureID(d)) {
      case kt.ROW_HEIGHT:
        this.rowHeight = l, super.eSet(d, l);
        break;
      case kt.COLS:
        this.cols = l, super.eSet(d, l);
        break;
      default:
        super.eSet(d, l);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(d) {
    switch (this.eClass().getFeatureID(d)) {
      case kt.ROW_HEIGHT:
        return this._rowHeight !== 30;
      case kt.COLS:
        return this._cols !== void 0;
      default:
        return super.eIsSet(d);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(d) {
    switch (this.eClass().getFeatureID(d)) {
      case kt.ROW_HEIGHT:
        this._rowHeight = 30;
        return;
      case kt.COLS:
        this._cols = void 0;
        return;
      default:
        super.eUnset(d);
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
const ib = `<?xml version="1.0" encoding="UTF-8"?>
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
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridSettings/rowHeight" label="layoutsGrid:Form.rowHeight"
        min="10" max="200" step="1"/>
    <fields xsi:type="uimodel:InputWidget" name="cols"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridSettings/cols" label="layoutsGrid:Form.cols"/>
  </components>
</uimodel:UIModel>
`, ob = `<?xml version="1.0" encoding="UTF-8"?>
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
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/lg" label="layoutsGrid:FormColumns.lg" min="1" max="48" step="1"/>
    <fields xsi:type="uimodel:NumberWidget" name="md"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/md" label="layoutsGrid:FormColumns.md" min="1" max="48" step="1"/>
    <fields xsi:type="uimodel:NumberWidget" name="sm"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/sm" label="layoutsGrid:FormColumns.sm" min="1" max="48" step="1"/>
    <fields xsi:type="uimodel:NumberWidget" name="xs"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/xs" label="layoutsGrid:FormColumns.xs" min="1" max="48" step="1"/>
    <fields xsi:type="uimodel:NumberWidget" name="xxs"
        feature="http://org.eclipse.daanse.board.app.ui.vue.layouts.grid#//GridColumns/xxs" label="layoutsGrid:FormColumns.xxs" min="1" max="48" step="1"/>
  </components>
</uimodel:UIModel>
`, ab = { copy: "Kopieren", paste: "Einfügen" }, sb = { lg: "ab 1800 px", md: "ab 1200 px", sm: "ab 768 px", xs: "ab 480 px", xxs: "darunter" }, ub = { rowHeight: "Zeilenhöhe (px)", cols: "Spalten je Breite" }, lb = { name: "Raster-Layout" }, cb = {
  Menu: ab,
  FormColumns: sb,
  Form: ub,
  Grid: lb
}, fb = { copy: "Copy", paste: "Paste" }, db = { lg: "from 1800 px", md: "from 1200 px", sm: "from 768 px", xs: "from 480 px", xxs: "below" }, hb = { rowHeight: "Row height (px)", cols: "Columns per width" }, pb = { name: "Grid layout" }, gb = {
  Menu: fb,
  FormColumns: db,
  Form: hb,
  Grid: pb
};
var vb = Object.create, Ou = Object.defineProperty, mb = Object.getOwnPropertyDescriptor, yb = (h, d) => (d = Symbol[h]) ? d : Symbol.for("Symbol." + h), Zf = (h) => {
  throw TypeError(h);
}, bb = (h, d, l) => d in h ? Ou(h, d, { enumerable: !0, configurable: !0, writable: !0, value: l }) : h[d] = l, xb = (h, d) => Ou(h, "name", { value: d, configurable: !0 }), wb = (h) => [, , , vb(null)], _b = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Jf = (h) => h !== void 0 && typeof h != "function" ? Zf("Function expected") : h, Sb = (h, d, l, y, M) => ({ kind: _b[h], name: d, metadata: y, addInitializer: (O) => l._ ? Zf("Already initialized") : M.push(Jf(O || null)) }), Eb = (h, d) => bb(d, yb("metadata"), h[3]), Tb = (h, d, l, y) => {
  for (var M = 0, O = h[d >> 1], k = O && O.length; M < k; M++) O[M].call(l);
  return y;
}, Ob = (h, d, l, y, M, O) => {
  var k, L, E, K = d & 7, he = !1, ee = 0, ke = h[ee] || (h[ee] = []), ue = K && (M = M.prototype, K < 5 && (K > 3 || !he) && mb(M, l));
  xb(M, l);
  for (var ve = y.length - 1; ve >= 0; ve--)
    E = Sb(K, l, L = {}, h[3], ke), k = (0, y[ve])(M, E), L._ = 1, Jf(k) && (M = k);
  return Eb(h, M), ue && Ou(M, l, ue), he ? K ^ 4 ? O : ue : M;
}, Qf, Iu;
const ed = "layoutsGrid";
Qf = [R0({
  service: ["Translations"],
  properties: { "i18n.namespace": ed }
})];
class Oa {
  constructor() {
    this.namespace = ed, this.resources = {
      de: cb,
      en: gb
    };
  }
}
Iu = wb();
Oa = Ob(Iu, 0, "LayoutsGridTranslations", Qf, Oa);
Tb(Iu, 1, Oa);
Ye.eINSTANCE;
const td = "org.eclipse.daanse.board.app.ui.vue.layouts.grid";
function nd({ services: h }) {
  h.getRequired(mf).addLayout({
    id: td,
    name: "GridLayout",
    nameKey: "layoutsGrid:Grid.name",
    description: "responsive grid-based layout",
    component: ky,
    editor: rb,
    /*
     * No hand-written panel: a row height and five column counts are
     * fields, so there is nothing to keep beside the model and no second
     * place for the two to disagree.
     */
    settingsForm: {
      xmi: ib,
      uri: "/grid-settings.ui.xmi",
      ePackage: () => Ye.eINSTANCE,
      create: () => new kt(),
      entryForms: [{ xmi: ob, uri: "/grid-columns.ui.xmi" }]
    }
  });
}
function rd({ services: h }) {
  h.getRequired(mf).removeLayout(td);
}
const Ib = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get LayoutsGridTranslations() {
    return Oa;
  },
  activate: nd,
  deactivate: rd
}, Symbol.toStringTag, { value: "Module" })), vf = "org.eclipse.daanse.board.app.ui.vue.layouts.grid", Rb = "0.0.1-next.1";
async function Wb(h) {
  const d = globalThis.__tsm__;
  if (!d)
    throw new Error(`${vf}: tsm runtime is not initialized`);
  d.register(vf, Ib, Rb, "ui.vue.layouts.grid"), await nd?.(h);
}
async function Ub(h) {
  await rd?.(h);
}
export {
  Oa as LayoutsGridTranslations,
  Wb as activate,
  Ub as deactivate
};
