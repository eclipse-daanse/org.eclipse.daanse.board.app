(function(){var i="ui.vue.layouts.grid",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".view_grid_layout[data-v-77091a3b]{padding-left:60px}.vgl-layout[data-v-77091a3b]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-77091a3b]:before{display:none}[data-v-77091a3b] .vgl-item--resizing{opacity:90%}[data-v-77091a3b] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-77091a3b]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.alayout[data-v-1fdbd896]{padding-left:60px}.vgl-layout[data-v-1fdbd896]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-1fdbd896]:before{position:absolute;width:calc(100% - 5px);height:calc(100% - 5px);margin:5px;content:\"\";background-image:linear-gradient(to right,var(--color-divider) 1px,transparent 1px),linear-gradient(to bottom,var(--color-divider) 1px,transparent 1px);background-repeat:repeat;background-size:calc(calc(100% - 5px) / var(--grid-cols, 12)) calc(var(--grid-row-height, 30px) + 10px)}[data-v-1fdbd896] .vgl-item--placeholder{outline:2px dashed var(--color-outline);background-color:#88888826}[data-v-1fdbd896] .vgl-item--resizing{opacity:90%}[data-v-1fdbd896] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-1fdbd896]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.invisible-dropzone[data-v-1fdbd896]{position:absolute;inset:0;z-index:1000;pointer-events:auto}.invisible-dropzone[data-v-1fdbd896]>*{opacity:0}.widget-item-wrapper[data-v-1fdbd896]{width:100%;height:100%}.dropdown-buttons-container[data-v-1fdbd896]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.widget-context-menu[data-v-1fdbd896],.canvas-context-menu[data-v-1fdbd896]{position:fixed;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);padding:4px;box-shadow:var(--shadow-e2);z-index:100000}\n";})();
import { LAYOUT_REPOSITORY as hf } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { defineComponent as Ta, inject as Ji, shallowRef as r0, reactive as Qi, ref as rt, toRef as i0, onBeforeMount as pf, onMounted as Oa, watchEffect as o0, onBeforeUnmount as _u, computed as it, watch as Je, createElementBlock as ar, openBlock as Ft, normalizeStyle as Ki, normalizeClass as gc, renderSlot as gu, createCommentVNode as vu, unref as Dn, getCurrentScope as a0, onScopeDispose as s0, nextTick as kt, provide as vc, toRefs as mc, withDirectives as gf, Fragment as u0, renderList as l0, createBlock as Rr, mergeProps as c0, withCtx as ir, createVNode as ba, vShow as vf, resolveComponent as mu, createElementVNode as xa, isRef as f0, toDisplayString as yu, withModifiers as yc, createTextVNode as bc } from "vue";
import { useWidgetsStore as mf } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { useLayoutStore as yf } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { WidgetWrapper as bf, defaultConfig as d0 } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as xf } from "vue-router";
import { plainSettings as Sa } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as wf } from "org.eclipse.daanse.board.app.lib.api.page";
import p0 from "vuedraggable";
import { useClipboardStore as g0 } from "org.eclipse.daanse.board.app.ui.vue.layouts.base";
import { BasicEObject as _f, BasicEFactory as v0, BasicEPackage as m0, EPackageRegistry as y0, BasicEClass as xc, BasicEAttribute as ti, BasicEReference as b0, getEcorePackage as ni } from "@emfts/core";
const { identifiers: h0 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), x0 = typeof window < "u";
var wc;
x0 && ((wc = window?.navigator) != null && wc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Jt(p) {
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
      y && y.forEach((A) => {
        A(...l);
      });
    }
  };
}
function _c(p, h = 16) {
  if (typeof p != "function")
    return Sf;
  const l = (...O) => {
    p(...O);
  };
  if (h <= 0)
    return Ef(l);
  let y = 0, A;
  return function(...O) {
    const B = Date.now(), L = B - y;
    clearTimeout(A), L >= h ? (y = B, l(...O)) : A = setTimeout(
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
  const l = (...A) => {
    p(...A);
  };
  if (h <= 0)
    return Ef(l);
  let y;
  return function(...A) {
    clearTimeout(y), y = setTimeout(() => {
      l(...A);
    }, h);
  };
}
function Ef(p) {
  if (typeof p != "function")
    return p;
  let h = !1, l, y;
  return function(...A) {
    return l = A, h || (h = !0, y = Promise.resolve().then(() => (h = !1, y = void 0, p(...l)))), y;
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
  for (let y = 0, A = p.length; y < A; y++)
    l = p[y].y + p[y].h, l > h && (h = l);
  return h;
}
function bu(p) {
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
  const y = Cf(p), A = Af(p), O = Array(p.length);
  for (let B = 0, L = A.length; B < L; B++) {
    let E = A[B];
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
  let A;
  for (; A = Zi(p, h); )
    h.y = A.y + A.h;
  return h;
}
function R0(p, h) {
  const l = Cf(p);
  for (let y = 0, A = p.length; y < A; y++) {
    const O = p[y];
    if (O.x + O.w > h.cols && (O.x = h.cols - O.w), O.x < 0 && (O.x = 0, O.w = h.cols), !O.static) l.push(O);
    else
      for (; Zi(l, O); )
        O.y++;
  }
  return p;
}
function Sc(p, h) {
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
function Cf(p) {
  return p.filter((h) => h.static);
}
function xu(p, h, l, y, A = !1, O = !1) {
  if (h.static) return p;
  const B = h.x, L = h.y, E = y && h.y > y;
  typeof l == "number" && (h.x = l), typeof y == "number" && (h.y = y), h.moved = !0;
  let V = Af(p);
  E && (V = V.reverse());
  const ge = Mf(V, h);
  if (O && ge.length)
    return h.x = B, h.y = L, h.moved = !1, p;
  for (let te = 0, We = ge.length; te < We; te++) {
    const me = ge[te];
    me.moved || h.y > me.y && h.y - me.y > me.h / 4 || (me.static ? p = Ec(p, me, h, A) : p = Ec(p, h, me, A));
  }
  return p;
}
function Ec(p, h, l, y) {
  if (y) {
    const A = {
      x: l.x,
      y: l.y,
      w: l.w,
      h: l.h
    };
    if (A.y = Math.max(h.y - l.h, 0), !Zi(p, A))
      return xu(p, l, void 0, A.y, !1);
  }
  return xu(p, l, void 0, l.y + 1, !1);
}
function M0(p, h, l, y) {
  const A = "translate3d(" + h + "px," + p + "px, 0)";
  return {
    transform: A,
    WebkitTransform: A,
    MozTransform: A,
    msTransform: A,
    OTransform: A,
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function C0(p, h, l, y) {
  const A = "translate3d(" + h * -1 + "px," + p + "px, 0)";
  return {
    transform: A,
    WebkitTransform: A,
    MozTransform: A,
    msTransform: A,
    OTransform: A,
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function A0(p, h, l, y) {
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
function Af(p) {
  return Array.from(p).sort(function(h, l) {
    return h.y === l.y && h.x === l.x ? 0 : h.y > l.y || h.y === l.y && h.x > l.x ? 1 : -1;
  });
}
function z0(p, h) {
  h = h || "Layout";
  const l = ["x", "y", "w", "h"], y = [];
  if (!Array.isArray(p)) throw new Error(h + " must be an array!");
  for (let A = 0, O = p.length; A < O; A++) {
    const B = p[A];
    for (let L = 0; L < l.length; L++)
      if (typeof B[l[L]] != "number")
        throw new Error(
          "VueGridLayout: " + h + "[" + A + "]." + l[L] + " must be a number!"
        );
    if (B.i === void 0 || B.i === null)
      throw new Error("VueGridLayout: " + h + "[" + A + "].i cannot be null!");
    if (typeof B.i != "number" && typeof B.i != "string")
      throw new Error("VueGridLayout: " + h + "[" + A + "].i must be a string or number!");
    if (y.indexOf(B.i) >= 0)
      throw new Error("VueGridLayout: " + h + "[" + A + "].i must be unique!");
    if (y.push(B.i), B.static !== void 0 && typeof B.static != "boolean")
      throw new Error("VueGridLayout: " + h + "[" + A + "].static must be a boolean!");
  }
}
function P0(p, h = "vgl") {
  const l = () => `${h}-${p}`;
  return {
    b: l,
    be: (y) => `${l()}__${y}`,
    bm: (y) => `${l()}--${y}`,
    bem: (y, A) => `${l()}__${y}--${A}`
  };
}
function Tc(p) {
  return L0(p);
}
function L0(p) {
  var h;
  const l = ((h = p.target) == null ? void 0 : h.offsetParent) || document.body, y = p.offsetParent === document.body ? { left: 0, top: 0 } : l.getBoundingClientRect(), A = p.clientX + l.scrollLeft - y.left, O = p.clientY + l.scrollTop - y.top;
  return { x: A, y: O };
}
function Oc(p, h, l, y) {
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
  for (let A = 1, O = l.length; A < O; A++) {
    const B = l[A];
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
function N0(p, h, l, y, A, O, B) {
  if (h[y]) return bu(h[y]);
  let L = p;
  const E = zf(l), V = E.slice(E.indexOf(y));
  for (let ge = 0, te = V.length; ge < te; ge++) {
    const We = V[ge];
    if (h[We]) {
      L = h[We];
      break;
    }
  }
  return L = bu(L || []), ri(R0(L, { cols: O }), B);
}
function zf(p) {
  return Object.keys(p).sort((h, l) => p[h] - p[l]);
}
let B0 = "auto";
function W0() {
  return typeof document < "u";
}
function Ic() {
  return W0() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : B0;
}
var or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pf(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var $i = { exports: {} }, U0 = $i.exports, Rc;
function H0() {
  return Rc || (Rc = 1, (function(p, h) {
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
      function A(r) {
        return A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
          return typeof n;
        } : function(n) {
          return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, A(r);
      }
      function O(r, n) {
        if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function B(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, Ge(a.key), a);
        }
      }
      function L(r, n, o) {
        return n && B(r.prototype, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
      }
      function E(r, n, o) {
        return (n = Ge(n)) in r ? Object.defineProperty(r, n, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = o, r;
      }
      function V(r, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(n && n.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), n && te(r, n);
      }
      function ge(r) {
        return ge = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }, ge(r);
      }
      function te(r, n) {
        return te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, a) {
          return o.__proto__ = a, o;
        }, te(r, n);
      }
      function We(r) {
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
            return We(c);
          })(this, o);
        };
      }
      function be() {
        return be = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(r, n, o) {
          var a = (function(c, d) {
            for (; !Object.prototype.hasOwnProperty.call(c, d) && (c = ge(c)) !== null; ) ;
            return c;
          })(r, n);
          if (a) {
            var u = Object.getOwnPropertyDescriptor(a, n);
            return u.get ? u.get.call(arguments.length < 3 ? r : o) : u.value;
          }
        }, be.apply(this, arguments);
      }
      function Ge(r) {
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
      var Fe = function(r) {
        return !(!r || !r.Window) && r instanceof r.Window;
      }, Ue = void 0, ze = void 0;
      function xe(r) {
        Ue = r;
        var n = r.document.createTextNode("");
        n.ownerDocument !== r.document && typeof r.wrap == "function" && r.wrap(n) === n && (r = r.wrap(r)), ze = r;
      }
      function Oe(r) {
        return Fe(r) ? r : (r.ownerDocument || r).defaultView || ze.window;
      }
      typeof window < "u" && window && xe(window);
      var Ae = function(r) {
        return !!r && A(r) === "object";
      }, Ne = function(r) {
        return typeof r == "function";
      }, D = { window: function(r) {
        return r === ze || Fe(r);
      }, docFrag: function(r) {
        return Ae(r) && r.nodeType === 11;
      }, object: Ae, func: Ne, number: function(r) {
        return typeof r == "number";
      }, bool: function(r) {
        return typeof r == "boolean";
      }, string: function(r) {
        return typeof r == "string";
      }, element: function(r) {
        if (!r || A(r) !== "object") return !1;
        var n = Oe(r) || ze;
        return /object|function/.test(typeof Element > "u" ? "undefined" : A(Element)) ? r instanceof Element || r instanceof n.Element : r.nodeType === 1 && typeof r.nodeName == "string";
      }, plainObject: function(r) {
        return Ae(r) && !!r.constructor && /function Object\b/.test(r.constructor.toString());
      }, array: function(r) {
        return Ae(r) && r.length !== void 0 && Ne(r.splice);
      } };
      function Ie(r) {
        var n = r.interaction;
        if (n.prepared.name === "drag") {
          var o = n.prepared.axis;
          o === "x" ? (n.coords.cur.page.y = n.coords.start.page.y, n.coords.cur.client.y = n.coords.start.client.y, n.coords.velocity.client.y = 0, n.coords.velocity.page.y = 0) : o === "y" && (n.coords.cur.page.x = n.coords.start.page.x, n.coords.cur.client.x = n.coords.start.client.x, n.coords.velocity.client.x = 0, n.coords.velocity.page.x = 0);
        }
      }
      function Se(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "drag") {
          var a = o.prepared.axis;
          if (a === "x" || a === "y") {
            var u = a === "x" ? "y" : "x";
            n.page[u] = o.coords.start.page[u], n.client[u] = o.coords.start.client[u], n.delta[u] = 0;
          }
        }
      }
      var Ye = { id: "actions/drag", install: function(r) {
        var n = r.actions, o = r.Interactable, a = r.defaults;
        o.prototype.draggable = Ye.draggable, n.map.drag = Ye, n.methodDict.drag = "draggable", a.actions.drag = Ye.defaults;
      }, listeners: { "interactions:before-action-move": Ie, "interactions:action-resume": Ie, "interactions:action-move": Se, "auto-start:check": function(r) {
        var n = r.interaction, o = r.interactable, a = r.buttons, u = o.options.drag;
        if (u && u.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || (a & o.options.drag.mouseButtons) != 0)) return r.action = { name: "drag", axis: u.lockAxis === "start" ? u.startAxis : u.lockAxis }, !1;
      } }, draggable: function(r) {
        return D.object(r) ? (this.options.drag.enabled = r.enabled !== !1, this.setPerAction("drag", r), this.setOnEvents("drag", r), /^(xy|x|y|start)$/.test(r.lockAxis) && (this.options.drag.lockAxis = r.lockAxis), /^(xy|x|y)$/.test(r.startAxis) && (this.options.drag.startAxis = r.startAxis), this) : D.bool(r) ? (this.options.drag.enabled = r, this) : this.options.drag;
      }, beforeMove: Ie, move: Se, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(r) {
        return r.search("drag") === 0;
      } }, X = Ye, ie = { init: function(r) {
        var n = r;
        ie.document = n.document, ie.DocumentFragment = n.DocumentFragment || ee, ie.SVGElement = n.SVGElement || ee, ie.SVGSVGElement = n.SVGSVGElement || ee, ie.SVGElementInstance = n.SVGElementInstance || ee, ie.Element = n.Element || ee, ie.HTMLElement = n.HTMLElement || ie.Element, ie.Event = n.Event, ie.Touch = n.Touch || ee, ie.PointerEvent = n.PointerEvent || n.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function ee() {
      }
      var we = ie, he = { init: function(r) {
        var n = we.Element, o = r.navigator || {};
        he.supportsTouch = "ontouchstart" in r || D.func(r.DocumentTouch) && we.document instanceof r.DocumentTouch, he.supportsPointerEvent = o.pointerEnabled !== !1 && !!we.PointerEvent, he.isIOS = /iP(hone|od|ad)/.test(o.platform), he.isIOS7 = /iP(hone|od|ad)/.test(o.platform) && /OS 7[^\d]/.test(o.appVersion), he.isIe9 = /MSIE 9/.test(o.userAgent), he.isOperaMobile = o.appName === "Opera" && he.supportsTouch && /Presto/.test(o.userAgent), he.prefixedMatchesSelector = "matches" in n.prototype ? "matches" : "webkitMatchesSelector" in n.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in n.prototype ? "mozMatchesSelector" : "oMatchesSelector" in n.prototype ? "oMatchesSelector" : "msMatchesSelector", he.pEventTypes = he.supportsPointerEvent ? we.PointerEvent === r.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, he.wheelEvent = we.document && "onmousewheel" in we.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, Re = he;
      function se(r, n) {
        if (r.contains) return r.contains(n);
        for (; n; ) {
          if (n === r) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      function Qe(r, n) {
        for (; D.element(r); ) {
          if (Ze(r, n)) return r;
          r = Xe(r);
        }
        return null;
      }
      function Xe(r) {
        var n = r.parentNode;
        if (D.docFrag(n)) {
          for (; (n = n.host) && D.docFrag(n); ) ;
          return n;
        }
        return n;
      }
      function Ze(r, n) {
        return ze !== Ue && (n = n.replace(/\/deep\//g, " ")), r[Re.prefixedMatchesSelector](n);
      }
      var Me = function(r) {
        return r.parentNode || r.host;
      };
      function Nt(r, n) {
        for (var o, a = [], u = r; (o = Me(u)) && u !== n && o !== u.ownerDocument; ) a.unshift(u), u = o;
        return a;
      }
      function ht(r, n, o) {
        for (; D.element(r); ) {
          if (Ze(r, n)) return !0;
          if ((r = Xe(r)) === o) return Ze(r, n);
        }
        return !1;
      }
      function zn(r) {
        return r.correspondingUseElement || r;
      }
      function lt(r) {
        var n = r instanceof we.SVGElement ? r.getBoundingClientRect() : r.getClientRects()[0];
        return n && { left: n.left, right: n.right, top: n.top, bottom: n.bottom, width: n.width || n.right - n.left, height: n.height || n.bottom - n.top };
      }
      function et(r) {
        var n, o = lt(r);
        if (!Re.isIOS7 && o) {
          var a = { x: (n = (n = Oe(r)) || ze).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
          o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
        }
        return o;
      }
      function hn(r) {
        for (var n = []; r; ) n.push(r), r = Xe(r);
        return n;
      }
      function wt(r) {
        return !!D.string(r) && (we.document.querySelector(r), !0);
      }
      function j(r, n) {
        for (var o in n) r[o] = n[o];
        return r;
      }
      function Gt(r, n, o) {
        return r === "parent" ? Xe(o) : r === "self" ? n.getRect(o) : Qe(o, r);
      }
      function Tt(r, n, o, a) {
        var u = r;
        return D.string(u) ? u = Gt(u, n, o) : D.func(u) && (u = u.apply(void 0, a)), D.element(u) && (u = et(u)), u;
      }
      function _t(r) {
        return r && { x: "x" in r ? r.x : r.left, y: "y" in r ? r.y : r.top };
      }
      function Qt(r) {
        return !r || "x" in r && "y" in r || ((r = j({}, r)).x = r.left || 0, r.y = r.top || 0, r.width = r.width || (r.right || 0) - r.x, r.height = r.height || (r.bottom || 0) - r.y), r;
      }
      function at(r, n, o) {
        r.left && (n.left += o.x), r.right && (n.right += o.x), r.top && (n.top += o.y), r.bottom && (n.bottom += o.y), n.width = n.right - n.left, n.height = n.bottom - n.top;
      }
      function Ot(r, n, o) {
        var a = o && r.options[o];
        return _t(Tt(a && a.origin || r.options.origin, r, n, [r && n])) || { x: 0, y: 0 };
      }
      function Xt(r, n) {
        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(b) {
          return !0;
        }, a = arguments.length > 3 ? arguments[3] : void 0;
        if (a = a || {}, D.string(r) && r.search(" ") !== -1 && (r = vt(r)), D.array(r)) return r.forEach((function(b) {
          return Xt(b, n, o, a);
        })), a;
        if (D.object(r) && (n = r, r = ""), D.func(n) && o(r)) a[r] = a[r] || [], a[r].push(n);
        else if (D.array(n)) for (var u = 0, c = n; u < c.length; u++) {
          var d = c[u];
          Xt(r, d, o, a);
        }
        else if (D.object(n)) for (var v in n)
          Xt(vt(v).map((function(b) {
            return "".concat(r).concat(b);
          })), n[v], o, a);
        return a;
      }
      function vt(r) {
        return r.trim().split(/ +/);
      }
      var $t = function(r, n) {
        return Math.sqrt(r * r + n * n);
      }, sr = ["webkit", "moz"];
      function It(r, n) {
        r.__set || (r.__set = {});
        var o = function(u) {
          if (sr.some((function(c) {
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
      function $(r, n) {
        r.page = r.page || {}, r.page.x = n.page.x, r.page.y = n.page.y, r.client = r.client || {}, r.client.x = n.client.x, r.client.y = n.client.y, r.timeStamp = n.timeStamp;
      }
      function J(r) {
        r.page.x = 0, r.page.y = 0, r.client.x = 0, r.client.y = 0;
      }
      function P(r) {
        return r instanceof we.Event || r instanceof we.Touch;
      }
      function Q(r, n, o) {
        return r = r || "page", (o = o || {}).x = n[r + "X"], o.y = n[r + "Y"], o;
      }
      function ne(r, n) {
        return n = n || { x: 0, y: 0 }, Re.isOperaMobile && P(r) ? (Q("screen", r, n), n.x += window.scrollX, n.y += window.scrollY) : Q("page", r, n), n;
      }
      function le(r) {
        return D.number(r.pointerId) ? r.pointerId : r.identifier;
      }
      function ce(r, n, o) {
        var a = n.length > 1 ? oe(n) : n[0];
        ne(a, r.page), (function(u, c) {
          c = c || {}, Re.isOperaMobile && P(u) ? Q("screen", u, c) : Q("client", u, c);
        })(a, r.client), r.timeStamp = o;
      }
      function ae(r) {
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
      function tt(r) {
        if (!r.length) return null;
        var n = ae(r), o = Math.min(n[0].pageX, n[1].pageX), a = Math.min(n[0].pageY, n[1].pageY), u = Math.max(n[0].pageX, n[1].pageX), c = Math.max(n[0].pageY, n[1].pageY);
        return { x: o, y: a, left: o, top: a, right: u, bottom: c, width: u - o, height: c - a };
      }
      function ct(r, n) {
        var o = n + "X", a = n + "Y", u = ae(r), c = u[0][o] - u[1][o], d = u[0][a] - u[1][a];
        return $t(c, d);
      }
      function mt(r, n) {
        var o = n + "X", a = n + "Y", u = ae(r), c = u[1][o] - u[0][o], d = u[1][a] - u[0][a];
        return 180 * Math.atan2(d, c) / Math.PI;
      }
      function en(r) {
        return D.string(r.pointerType) ? r.pointerType : D.number(r.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][r.pointerType] : /touch/.test(r.type || "") || r instanceof we.Touch ? "touch" : "mouse";
      }
      function tn(r) {
        var n = D.func(r.composedPath) ? r.composedPath() : r.path;
        return [zn(n ? n[0] : r.target), zn(r.currentTarget)];
      }
      var nn = (function() {
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
      Object.defineProperty(nn.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var _n = function(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          r.push(a);
        }
        return r;
      }, Sn = function(r) {
        return _n([], r);
      }, pn = function(r, n) {
        for (var o = 0; o < r.length; o++) if (n(r[o], o, r)) return o;
        return -1;
      }, ur = function(r, n) {
        return r[pn(r, n)];
      }, Yn = (function(r) {
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
            var c = u.activeDrops, d = pn(c, (function(b) {
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
      })(nn);
      function ai(r, n) {
        for (var o = 0, a = r.slice(); o < a.length; o++) {
          var u = a[o], c = u.dropzone, d = u.element;
          n.dropzone = c, n.target = d, c.fire(n), n.propagationStopped = n.immediatePropagationStopped = !1;
        }
      }
      function Dr(r, n) {
        for (var o = (function(c, d) {
          for (var v = [], b = 0, S = c.interactables.list; b < S.length; b++) {
            var x = S[b];
            if (x.options.drop.enabled) {
              var I = x.options.drop.accept;
              if (!(D.element(I) && I !== d || D.string(I) && !Ze(d, I) || D.func(I) && !I({ dropzone: x, draggableElement: d }))) for (var z = 0, H = x.getAllElements(); z < H.length; z++) {
                var W = H[z];
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
      function to(r, n, o) {
        for (var a = r.dropState, u = r.interactable, c = r.element, d = [], v = 0, b = a.activeDrops; v < b.length; v++) {
          var S = b[v], x = S.dropzone, I = S.element, z = S.rect, H = x.dropCheck(n, o, u, c, I, z);
          d.push(H ? I : null);
        }
        var W = (function(q) {
          for (var Z, Y, w, C = [], R = 0; R < q.length; R++) {
            var k = q[R], G = q[Z];
            if (k && R !== Z) if (G) {
              var ve = Me(k), ye = Me(G);
              if (ve !== k.ownerDocument) if (ye !== k.ownerDocument) if (ve !== ye) {
                C = C.length ? C : Nt(G);
                var Ee = void 0;
                if (G instanceof we.HTMLElement && k instanceof we.SVGElement && !(k instanceof we.SVGSVGElement)) {
                  if (k === ye) continue;
                  Ee = k.ownerSVGElement;
                } else Ee = k;
                for (var Ct = Nt(Ee, G.ownerDocument), yn = 0; Ct[yn] && Ct[yn] === C[yn]; ) yn++;
                var bt = [Ct[yn - 1], Ct[yn], C[yn]];
                if (bt[0]) for (var In = bt[0].lastChild; In; ) {
                  if (In === bt[1]) {
                    Z = R, C = Ct;
                    break;
                  }
                  if (In === bt[2]) break;
                  In = In.previousSibling;
                }
              } else w = G, (parseInt(Oe(Y = k).getComputedStyle(Y).zIndex, 10) || 0) >= (parseInt(Oe(w).getComputedStyle(w).zIndex, 10) || 0) && (Z = R);
              else Z = R;
            } else Z = R;
          }
          return Z;
        })(d);
        return a.activeDrops[W] || null;
      }
      function si(r, n, o) {
        var a = r.dropState, u = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return o.type === "dragstart" && (u.activate = new Yn(a, o, "dropactivate"), u.activate.target = null, u.activate.dropzone = null), o.type === "dragend" && (u.deactivate = new Yn(a, o, "dropdeactivate"), u.deactivate.target = null, u.deactivate.dropzone = null), a.rejected || (a.cur.element !== a.prev.element && (a.prev.dropzone && (u.leave = new Yn(a, o, "dragleave"), o.dragLeave = u.leave.target = a.prev.element, o.prevDropzone = u.leave.dropzone = a.prev.dropzone), a.cur.dropzone && (u.enter = new Yn(a, o, "dragenter"), o.dragEnter = a.cur.element, o.dropzone = a.cur.dropzone)), o.type === "dragend" && a.cur.dropzone && (u.drop = new Yn(a, o, "drop"), o.dropzone = a.cur.dropzone, o.relatedTarget = a.cur.element), o.type === "dragmove" && a.cur.dropzone && (u.move = new Yn(a, o, "dropmove"), o.dropzone = a.cur.dropzone)), u;
      }
      function ui(r, n) {
        var o = r.dropState, a = o.activeDrops, u = o.cur, c = o.prev;
        n.leave && c.dropzone.fire(n.leave), n.enter && u.dropzone.fire(n.enter), n.move && u.dropzone.fire(n.move), n.drop && u.dropzone.fire(n.drop), n.deactivate && ai(a, n.deactivate), o.prev.dropzone = u.dropzone, o.prev.element = u.element;
      }
      function no(r, n) {
        var o = r.interaction, a = r.iEvent, u = r.event;
        if (a.type === "dragmove" || a.type === "dragend") {
          var c = o.dropState;
          n.dynamicDrop && (c.activeDrops = Dr(n, o.element));
          var d = a, v = to(o, d, u);
          c.rejected = c.rejected && !!v && v.dropzone === c.cur.dropzone && v.element === c.cur.element, c.cur.dropzone = v && v.dropzone, c.cur.element = v && v.element, c.events = si(o, 0, d);
        }
      }
      var li = { id: "actions/drop", install: function(r) {
        var n = r.actions, o = r.interactStatic, a = r.Interactable, u = r.defaults;
        r.usePlugin(X), a.prototype.dropzone = function(c) {
          return (function(d, v) {
            if (D.object(v)) {
              if (d.options.drop.enabled = v.enabled !== !1, v.listeners) {
                var b = Xt(v.listeners), S = Object.keys(b).reduce((function(I, z) {
                  return I[/^(enter|leave)/.test(z) ? "drag".concat(z) : /^(activate|deactivate|move)/.test(z) ? "drop".concat(z) : z] = b[z], I;
                }), {}), x = d.options.drop.listeners;
                x && d.off(x), d.on(S), d.options.drop.listeners = S;
              }
              return D.func(v.ondrop) && d.on("drop", v.ondrop), D.func(v.ondropactivate) && d.on("dropactivate", v.ondropactivate), D.func(v.ondropdeactivate) && d.on("dropdeactivate", v.ondropdeactivate), D.func(v.ondragenter) && d.on("dragenter", v.ondragenter), D.func(v.ondragleave) && d.on("dragleave", v.ondragleave), D.func(v.ondropmove) && d.on("dropmove", v.ondropmove), /^(pointer|center)$/.test(v.overlap) ? d.options.drop.overlap = v.overlap : D.number(v.overlap) && (d.options.drop.overlap = Math.max(Math.min(1, v.overlap), 0)), "accept" in v && (d.options.drop.accept = v.accept), "checker" in v && (d.options.drop.checker = v.checker), d;
            }
            return D.bool(v) ? (d.options.drop.enabled = v, d) : d.options.drop;
          })(this, c);
        }, a.prototype.dropCheck = function(c, d, v, b, S, x) {
          return (function(I, z, H, W, q, Z, Y) {
            var w = !1;
            if (!(Y = Y || I.getRect(Z))) return !!I.options.drop.checker && I.options.drop.checker(z, H, w, I, Z, W, q);
            var C = I.options.drop.overlap;
            if (C === "pointer") {
              var R = Ot(W, q, "drag"), k = ne(z);
              k.x += R.x, k.y += R.y;
              var G = k.x > Y.left && k.x < Y.right, ve = k.y > Y.top && k.y < Y.bottom;
              w = G && ve;
            }
            var ye = W.getRect(q);
            if (ye && C === "center") {
              var Ee = ye.left + ye.width / 2, Ct = ye.top + ye.height / 2;
              w = Ee >= Y.left && Ee <= Y.right && Ct >= Y.top && Ct <= Y.bottom;
            }
            return ye && D.number(C) && (w = Math.max(0, Math.min(Y.right, ye.right) - Math.max(Y.left, ye.left)) * Math.max(0, Math.min(Y.bottom, ye.bottom) - Math.max(Y.top, ye.top)) / (ye.width * ye.height) >= C), I.options.drop.checker && (w = I.options.drop.checker(z, H, w, I, Z, W, q)), w;
          })(this, c, d, v, b, S, x);
        }, o.dynamicDrop = function(c) {
          return D.bool(c) ? (r.dynamicDrop = c, o) : r.dynamicDrop;
        }, j(n.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), n.methodDict.drop = "dropzone", r.dynamicDrop = !1, u.actions.drop = li.defaults;
      }, listeners: { "interactions:before-action-start": function(r) {
        var n = r.interaction;
        n.prepared.name === "drag" && (n.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(r, n) {
        var o = r.interaction, a = (r.event, r.iEvent);
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          u.activeDrops = [], u.events = {}, u.activeDrops = Dr(n, o.element), u.events = si(o, 0, a), u.events.activate && (ai(u.activeDrops, u.events.activate), n.fire("actions/drop:start", { interaction: o, dragEvent: a }));
        }
      }, "interactions:action-move": no, "interactions:after-action-move": function(r, n) {
        var o = r.interaction, a = r.iEvent;
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          ui(o, u.events), n.fire("actions/drop:move", { interaction: o, dragEvent: a }), u.events = {};
        }
      }, "interactions:action-end": function(r, n) {
        if (r.interaction.prepared.name === "drag") {
          var o = r.interaction, a = r.iEvent;
          no(r, n), ui(o, o.dropState.events), n.fire("actions/drop:end", { interaction: o, dragEvent: a });
        }
      }, "interactions:stop": function(r) {
        var n = r.interaction;
        if (n.prepared.name === "drag") {
          var o = n.dropState;
          o && (o.activeDrops = null, o.events = null, o.cur.dropzone = null, o.cur.element = null, o.prev.dropzone = null, o.prev.element = null, o.rejected = !1);
        }
      } }, getActiveDrops: Dr, getDrop: to, getDropEvents: si, fireDropEvents: ui, filterEventType: function(r) {
        return r.search("drag") === 0 || r.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, Ia = li;
      function ci(r) {
        var n = r.interaction, o = r.iEvent, a = r.phase;
        if (n.prepared.name === "gesture") {
          var u = n.pointers.map((function(S) {
            return S.pointer;
          })), c = a === "start", d = a === "end", v = n.interactable.options.deltaSource;
          if (o.touches = [u[0], u[1]], c) o.distance = ct(u, v), o.box = tt(u), o.scale = 1, o.ds = 0, o.angle = mt(u, v), o.da = 0, n.gesture.startDistance = o.distance, n.gesture.startAngle = o.angle;
          else if (d || n.pointers.length < 2) {
            var b = n.prevEvent;
            o.distance = b.distance, o.box = b.box, o.scale = b.scale, o.ds = 0, o.angle = b.angle, o.da = 0;
          } else o.distance = ct(u, v), o.box = tt(u), o.scale = o.distance / n.gesture.startDistance, o.angle = mt(u, v), o.ds = o.scale - n.gesture.scale, o.da = o.angle - n.gesture.angle;
          n.gesture.distance = o.distance, n.gesture.angle = o.angle, D.number(o.scale) && o.scale !== 1 / 0 && !isNaN(o.scale) && (n.gesture.scale = o.scale);
        }
      }
      var fi = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(r) {
        var n = r.actions, o = r.Interactable, a = r.defaults;
        o.prototype.gesturable = function(u) {
          return D.object(u) ? (this.options.gesture.enabled = u.enabled !== !1, this.setPerAction("gesture", u), this.setOnEvents("gesture", u), this) : D.bool(u) ? (this.options.gesture.enabled = u, this) : this.options.gesture;
        }, n.map.gesture = fi, n.methodDict.gesture = "gesturable", a.actions.gesture = fi.defaults;
      }, listeners: { "interactions:action-start": ci, "interactions:action-move": ci, "interactions:action-end": ci, "interactions:new": function(r) {
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
      } }, di = fi;
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
        return !!D.element(a) && (D.element(n) ? n === a : ht(a, n, u));
      }
      function zr(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "resize" && o.resizeAxes) {
          var a = n;
          o.interactable.options.resize.square ? (o.resizeAxes === "y" ? a.delta.x = a.delta.y : a.delta.y = a.delta.x, a.axes = "xy") : (a.axes = o.resizeAxes, o.resizeAxes === "x" ? a.delta.y = 0 : o.resizeAxes === "y" && (a.delta.x = 0));
        }
      }
      var gn, Pn, vn = { id: "actions/resize", before: ["actions/drag"], install: function(r) {
        var n = r.actions, o = r.browser, a = r.Interactable, u = r.defaults;
        vn.cursors = (function(c) {
          return c.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        })(o), vn.defaultMargin = o.supportsTouch || o.supportsPointerEvent ? 20 : 10, a.prototype.resizable = function(c) {
          return (function(d, v, b) {
            return D.object(v) ? (d.options.resize.enabled = v.enabled !== !1, d.setPerAction("resize", v), d.setOnEvents("resize", v), D.string(v.axis) && /^x$|^y$|^xy$/.test(v.axis) ? d.options.resize.axis = v.axis : v.axis === null && (d.options.resize.axis = b.defaults.actions.resize.axis), D.bool(v.preserveAspectRatio) ? d.options.resize.preserveAspectRatio = v.preserveAspectRatio : D.bool(v.square) && (d.options.resize.square = v.square), d) : D.bool(v) ? (d.options.resize.enabled = v, d) : d.options.resize;
          })(this, c, r);
        }, n.map.resize = vn, n.methodDict.resize = "resizable", u.actions.resize = vn.defaults;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(r) {
        (function(n) {
          var o = n.iEvent, a = n.interaction;
          if (a.prepared.name === "resize" && a.prepared.edges) {
            var u = o, c = a.rect;
            a._rects = { start: j({}, c), corrected: j({}, c), previous: j({}, c), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, u.edges = a.prepared.edges, u.rect = a._rects.corrected, u.deltaRect = a._rects.delta;
          }
        })(r), zr(r);
      }, "interactions:action-move": function(r) {
        (function(n) {
          var o = n.iEvent, a = n.interaction;
          if (a.prepared.name === "resize" && a.prepared.edges) {
            var u = o, c = a.interactable.options.resize.invert, d = c === "reposition" || c === "negate", v = a.rect, b = a._rects, S = b.start, x = b.corrected, I = b.delta, z = b.previous;
            if (j(z, x), d) {
              if (j(x, v), c === "reposition") {
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
            for (var q in x.width = x.right - x.left, x.height = x.bottom - x.top, x) I[q] = x[q] - z[q];
            u.edges = a.prepared.edges, u.rect = x, u.deltaRect = I;
          }
        })(r), zr(r);
      }, "interactions:action-end": function(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "resize" && o.prepared.edges) {
          var a = n;
          a.edges = o.prepared.edges, a.rect = o._rects.corrected, a.deltaRect = o._rects.delta;
        }
      }, "auto-start:check": function(r) {
        var n = r.interaction, o = r.interactable, a = r.element, u = r.rect, c = r.buttons;
        if (u) {
          var d = j({}, n.coords.cur.page), v = o.options.resize;
          if (v && v.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || (c & v.mouseButtons) != 0)) {
            if (D.object(v.edges)) {
              var b = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var S in b) b[S] = Ra(S, v.edges[S], d, n._latestPointer.eventTarget, a, u, v.margin || vn.defaultMargin);
              b.left = b.left && !b.right, b.top = b.top && !b.bottom, (b.left || b.right || b.top || b.bottom) && (r.action = { name: "resize", edges: b });
            } else {
              var x = v.axis !== "y" && d.x > u.right - vn.defaultMargin, I = v.axis !== "x" && d.y > u.bottom - vn.defaultMargin;
              (x || I) && (r.action = { name: "resize", axes: (x ? "x" : "") + (I ? "y" : "") });
            }
            return !r.action && void 0;
          }
        }
      } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(r) {
        var n = r.edges, o = r.axis, a = r.name, u = vn.cursors, c = null;
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
      }, defaultMargin: null }, Ma = vn, Ca = { id: "actions", install: function(r) {
        r.usePlugin(di), r.usePlugin(Ma), r.usePlugin(X), r.usePlugin(Ia);
      } }, ro = 0, En = { request: function(r) {
        return gn(r);
      }, cancel: function(r) {
        return Pn(r);
      }, init: function(r) {
        if (gn = r.requestAnimationFrame, Pn = r.cancelAnimationFrame, !gn) for (var n = ["ms", "moz", "webkit", "o"], o = 0; o < n.length; o++) {
          var a = n[o];
          gn = r["".concat(a, "RequestAnimationFrame")], Pn = r["".concat(a, "CancelAnimationFrame")] || r["".concat(a, "CancelRequestAnimationFrame")];
        }
        gn = gn && gn.bind(r), Pn = Pn && Pn.bind(r), gn || (gn = function(u) {
          var c = Date.now(), d = Math.max(0, 16 - (c - ro)), v = r.setTimeout((function() {
            u(c + d);
          }), d);
          return ro = c + d, v;
        }, Pn = function(u) {
          return clearTimeout(u);
        });
      } }, pe = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(r) {
        pe.isScrolling = !0, En.cancel(pe.i), r.autoScroll = pe, pe.interaction = r, pe.prevTime = pe.now(), pe.i = En.request(pe.scroll);
      }, stop: function() {
        pe.isScrolling = !1, pe.interaction && (pe.interaction.autoScroll = null), En.cancel(pe.i);
      }, scroll: function() {
        var r = pe.interaction, n = r.interactable, o = r.element, a = r.prepared.name, u = n.options[a].autoScroll, c = hi(u.container, n, o), d = pe.now(), v = (d - pe.prevTime) / 1e3, b = u.speed * v;
        if (b >= 1) {
          var S = { x: pe.x * b, y: pe.y * b };
          if (S.x || S.y) {
            var x = io(c);
            D.window(c) ? c.scrollBy(S.x, S.y) : c && (c.scrollLeft += S.x, c.scrollTop += S.y);
            var I = io(c), z = { x: I.x - x.x, y: I.y - x.y };
            (z.x || z.y) && n.fire({ type: "autoscroll", target: o, interactable: n, delta: z, interaction: r, container: c });
          }
          pe.prevTime = d;
        }
        pe.isScrolling && (En.cancel(pe.i), pe.i = En.request(pe.scroll));
      }, check: function(r, n) {
        var o;
        return (o = r.options[n].autoScroll) == null ? void 0 : o.enabled;
      }, onInteractionMove: function(r) {
        var n = r.interaction, o = r.pointer;
        if (n.interacting() && pe.check(n.interactable, n.prepared.name)) if (n.simulation) pe.x = pe.y = 0;
        else {
          var a, u, c, d, v = n.interactable, b = n.element, S = n.prepared.name, x = v.options[S].autoScroll, I = hi(x.container, v, b);
          if (D.window(I)) d = o.clientX < pe.margin, a = o.clientY < pe.margin, u = o.clientX > I.innerWidth - pe.margin, c = o.clientY > I.innerHeight - pe.margin;
          else {
            var z = lt(I);
            d = o.clientX < z.left + pe.margin, a = o.clientY < z.top + pe.margin, u = o.clientX > z.right - pe.margin, c = o.clientY > z.bottom - pe.margin;
          }
          pe.x = u ? 1 : d ? -1 : 0, pe.y = c ? 1 : a ? -1 : 0, pe.isScrolling || (pe.margin = x.margin, pe.speed = x.speed, pe.start(n));
        }
      } };
      function hi(r, n, o) {
        return (D.string(r) ? Gt(r, n, o) : r) || Oe(o);
      }
      function io(r) {
        return D.window(r) && (r = window.document.body), { x: r.scrollLeft, y: r.scrollTop };
      }
      var Aa = { id: "auto-scroll", install: function(r) {
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
      } } }, Da = Aa;
      function lr(r, n) {
        var o = !1;
        return function() {
          return o || (ze.console.warn(n), o = !0), r.apply(this, arguments);
        };
      }
      function pi(r, n) {
        return r.name = n.name, r.axis = n.axis, r.edges = n.edges, r;
      }
      function za(r) {
        return D.bool(r) ? (this.options.styleCursor = r, this) : r === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function Pr(r) {
        return D.func(r) ? (this.options.actionChecker = r, this) : r === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var Pa = { id: "auto-start/interactableMethods", install: function(r) {
        var n = r.Interactable;
        n.prototype.getAction = function(o, a, u, c) {
          var d = (function(v, b, S, x, I) {
            var z = v.getRect(x), H = b.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[b.button], W = { action: null, interactable: v, interaction: S, element: x, rect: z, buttons: H };
            return I.fire("auto-start:check", W), W.action;
          })(this, a, u, c, r);
          return this.options.actionChecker ? this.options.actionChecker(o, a, d, this, c, u) : d;
        }, n.prototype.ignoreFrom = lr((function(o) {
          return this._backCompatOption("ignoreFrom", o);
        }), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), n.prototype.allowFrom = lr((function(o) {
          return this._backCompatOption("allowFrom", o);
        }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), n.prototype.actionChecker = Pr, n.prototype.styleCursor = za;
      } };
      function cr(r, n, o, a, u) {
        return n.testIgnoreAllow(n.options[r.name], o, a) && n.options[r.name].enabled && fr(n, o, r, u) ? r : null;
      }
      function La(r, n, o, a, u, c, d) {
        for (var v = 0, b = a.length; v < b; v++) {
          var S = a[v], x = u[v], I = S.getAction(n, o, r, x);
          if (I) {
            var z = cr(I, S, x, c, d);
            if (z) return { action: z, interactable: S, element: x };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function oo(r, n, o, a, u) {
        var c = [], d = [], v = a;
        function b(x) {
          c.push(x), d.push(v);
        }
        for (; D.element(v); ) {
          c = [], d = [], u.interactables.forEachMatch(v, b);
          var S = La(r, n, o, c, d, a, u);
          if (S.action && !S.interactable.options[S.action.name].manualStart) return S;
          v = Xe(v);
        }
        return { action: null, interactable: null, element: null };
      }
      function ao(r, n, o) {
        var a = n.action, u = n.interactable, c = n.element;
        a = a || { name: null }, r.interactable = u, r.element = c, pi(r.prepared, a), r.rect = u && a.name ? u.getRect(c) : null, so(r, o), o.fire("autoStart:prepared", { interaction: r });
      }
      function fr(r, n, o, a) {
        var u = r.options, c = u[o.name].max, d = u[o.name].maxPerElement, v = a.autoStart.maxInteractions, b = 0, S = 0, x = 0;
        if (!(c && d && v)) return !1;
        for (var I = 0, z = a.interactions.list; I < z.length; I++) {
          var H = z[I], W = H.prepared.name;
          if (H.interacting() && (++b >= v || H.interactable === r && ((S += W === o.name ? 1 : 0) >= c || H.element === n && (x++, W === o.name && x >= d))))
            return !1;
        }
        return v > 0;
      }
      function gi(r, n) {
        return D.number(r) ? (n.autoStart.maxInteractions = r, this) : n.autoStart.maxInteractions;
      }
      function Lr(r, n, o) {
        var a = o.autoStart.cursorElement;
        a && a !== r && (a.style.cursor = ""), r.ownerDocument.documentElement.style.cursor = n, r.style.cursor = n, o.autoStart.cursorElement = n ? r : null;
      }
      function so(r, n) {
        var o = r.interactable, a = r.element, u = r.prepared;
        if (r.pointerType === "mouse" && o && o.options.styleCursor) {
          var c = "";
          if (u.name) {
            var d = o.options[u.name].cursorChecker;
            c = D.func(d) ? d(u, o, a, r._interacting) : n.actions.map[u.name].getCursor(u);
          }
          Lr(r.element, c || "", n);
        } else n.autoStart.cursorElement && Lr(n.autoStart.cursorElement, "", n);
      }
      var ka = { id: "auto-start/base", before: ["actions"], install: function(r) {
        var n = r.interactStatic, o = r.defaults;
        r.usePlugin(Pa), o.base.actionChecker = null, o.base.styleCursor = !0, j(o.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), n.maxInteractions = function(a) {
          return gi(a, r);
        }, r.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: fr, cursorElement: null };
      }, listeners: { "interactions:down": function(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget;
        o.interacting() || ao(o, oo(o, a, u, c, n), n);
      }, "interactions:move": function(r, n) {
        (function(o, a) {
          var u = o.interaction, c = o.pointer, d = o.event, v = o.eventTarget;
          u.pointerType !== "mouse" || u.pointerIsDown || u.interacting() || ao(u, oo(u, c, d, v, a), a);
        })(r, n), (function(o, a) {
          var u = o.interaction;
          if (u.pointerIsDown && !u.interacting() && u.pointerWasMoved && u.prepared.name) {
            a.fire("autoStart:before-start", o);
            var c = u.interactable, d = u.prepared.name;
            d && c && (c.options[d].manualStart || !fr(c, u.element, u.prepared, a) ? u.stop() : (u.start(u.prepared, c, u.element), so(u, a)));
          }
        })(r, n);
      }, "interactions:stop": function(r, n) {
        var o = r.interaction, a = o.interactable;
        a && a.options.styleCursor && Lr(o.element, "", n);
      } }, maxInteractions: gi, withinInteractionLimit: fr, validateAction: cr }, vi = ka, Fa = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(r, n) {
        var o = r.interaction, a = r.eventTarget, u = r.dx, c = r.dy;
        if (o.prepared.name === "drag") {
          var d = Math.abs(u), v = Math.abs(c), b = o.interactable.options.drag, S = b.startAxis, x = d > v ? "x" : d < v ? "y" : "xy";
          if (o.prepared.axis = b.lockAxis === "start" ? x[0] : b.lockAxis, x !== "xy" && S !== "xy" && S !== x) {
            o.prepared.name = null;
            for (var I = a, z = function(W) {
              if (W !== o.interactable) {
                var q = o.interactable.options.drag;
                if (!q.manualStart && W.testIgnoreAllow(q, I, a)) {
                  var Z = W.getAction(o.downPointer, o.downEvent, o, I);
                  if (Z && Z.name === "drag" && (function(Y, w) {
                    if (!w) return !1;
                    var C = w.options.drag.startAxis;
                    return Y === "xy" || C === "xy" || C === Y;
                  })(x, W) && vi.validateAction(Z, W, I, a, n)) return W;
                }
              }
            }; D.element(I); ) {
              var H = n.interactables.forEachMatch(I, z);
              if (H) {
                o.prepared.name = "drag", o.interactable = H, o.element = I;
                break;
              }
              I = Xe(I);
            }
          }
        }
      } } };
      function kr(r) {
        var n = r.prepared && r.prepared.name;
        if (!n) return null;
        var o = r.interactable.options;
        return o[n].hold || o[n].delay;
      }
      var uo = { id: "auto-start/hold", install: function(r) {
        var n = r.defaults;
        r.usePlugin(vi), n.perAction.hold = 0, n.perAction.delay = 0;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(r) {
        var n = r.interaction, o = kr(n);
        o > 0 && (n.autoStartHoldTimer = setTimeout((function() {
          n.start(n.prepared, n.interactable, n.element);
        }), o));
      }, "interactions:move": function(r) {
        var n = r.interaction, o = r.duplicate;
        n.autoStartHoldTimer && n.pointerWasMoved && !o && (clearTimeout(n.autoStartHoldTimer), n.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(r) {
        var n = r.interaction;
        kr(n) > 0 && (n.prepared.name = null);
      } }, getHoldDuration: kr }, lo = uo, mi = { id: "auto-start", install: function(r) {
        r.usePlugin(vi), r.usePlugin(lo), r.usePlugin(Fa);
      } }, Na = function(r) {
        return /^(always|never|auto)$/.test(r) ? (this.options.preventDefault = r, this) : D.bool(r) ? (this.options.preventDefault = r ? "always" : "never", this) : this.options.preventDefault;
      };
      function co(r) {
        var n = r.interaction, o = r.event;
        n.interactable && n.interactable.checkAndPreventDefault(o);
      }
      var dr = { id: "core/interactablePreventDefault", install: function(r) {
        var n = r.Interactable;
        n.prototype.preventDefault = Na, n.prototype.checkAndPreventDefault = function(o) {
          return (function(a, u, c) {
            var d = a.options.preventDefault;
            if (d !== "never") if (d !== "always") {
              if (u.events.supportsPassive && /^touch(start|move)$/.test(c.type)) {
                var v = Oe(c.target).document, b = u.getDocOptions(v);
                if (!b || !b.events || b.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(c.type) || D.element(c.target) && Ze(c.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || c.preventDefault();
            } else c.preventDefault();
          })(this, r, o);
        }, r.interactions.docEvents.push({ type: "dragstart", listener: function(o) {
          for (var a = 0, u = r.interactions.list; a < u.length; a++) {
            var c = u[a];
            if (c.element && (c.element === o.target || se(c.element, o.target))) return void c.interactable.checkAndPreventDefault(o);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce((function(r, n) {
        return r["interactions:".concat(n)] = co, r;
      }), {}) };
      function hr(r, n) {
        if (n.phaselessTypes[r]) return !0;
        for (var o in n.map) if (r.indexOf(o) === 0 && r.substr(o.length) in n.phases) return !0;
        return !1;
      }
      function Kn(r) {
        var n = {};
        for (var o in r) {
          var a = r[o];
          D.plainObject(a) ? n[o] = Kn(a) : D.array(a) ? n[o] = Sn(a) : n[o] = a;
        }
        return n;
      }
      var Fr = (function() {
        function r(n) {
          O(this, r), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = n, this.result = pr(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return L(r, [{ key: "start", value: function(n, o) {
          var a, u, c = n.phase, d = this.interaction, v = (function(S) {
            var x = S.interactable.options[S.prepared.name], I = x.modifiers;
            return I && I.length ? I : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function(z) {
              var H = x[z];
              return H && H.enabled && { options: H, methods: H._methods };
            })).filter((function(z) {
              return !!z;
            }));
          })(d);
          this.prepareStates(v), this.startEdges = j({}, d.edges), this.edges = j({}, this.startEdges), this.startOffset = (a = d.rect, u = o, a ? { left: u.x - a.left, top: u.y - a.top, right: a.right - u.x, bottom: a.bottom - u.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var b = this.fillArg({ phase: c, pageCoords: o, preEnd: !1 });
          return this.result = pr(), this.startAll(b), this.result = this.setAll(b);
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
          n.coords = j({}, n.pageCoords), n.rect = j({}, c), n.edges = j({}, d);
          for (var v = u ? this.states.slice(u) : this.states, b = pr(n.coords, n.rect), S = 0; S < v.length; S++) {
            var x, I = v[S], z = I.options, H = j({}, n.coords), W = null;
            (x = I.methods) != null && x.set && this.shouldDo(z, a, o) && (n.state = I, W = I.methods.set(n), at(n.edges, n.rect, { x: n.coords.x - H.x, y: n.coords.y - H.y })), b.eventProps.push(W);
          }
          j(this.edges, n.edges), b.delta.x = n.coords.x - n.pageCoords.x, b.delta.y = n.coords.y - n.pageCoords.y, b.rectDelta.left = n.rect.left - c.left, b.rectDelta.right = n.rect.right - c.right, b.rectDelta.top = n.rect.top - c.top, b.rectDelta.bottom = n.rect.bottom - c.bottom;
          var q = this.result.coords, Z = this.result.rect;
          if (q && Z) {
            var Y = b.rect.left !== Z.left || b.rect.right !== Z.right || b.rect.top !== Z.top || b.rect.bottom !== Z.bottom;
            b.changed = Y || q.x !== b.coords.x || q.y !== b.coords.y;
          }
          return b;
        } }, { key: "applyToInteraction", value: function(n) {
          var o = this.interaction, a = n.phase, u = o.coords.cur, c = o.coords.start, d = this.result, v = this.startDelta, b = d.delta;
          a === "start" && j(this.startDelta, d.delta);
          for (var S = 0, x = [[c, v], [u, b]]; S < x.length; S++) {
            var I = x[S], z = I[0], H = I[1];
            z.page.x += H.x, z.page.y += H.y, z.client.x += H.x, z.client.y += H.y;
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
            var a = j({ states: this.states, interactable: o.interactable, element: o.element, rect: null }, n);
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
              var z = I[x], H = z[0], W = z[1];
              H.page.x -= W.x, H.page.y -= W.y, H.client.x -= W.x, H.client.y -= W.y;
            }
            u.left -= S.left, u.right -= S.right, u.top -= S.top, u.bottom -= S.bottom;
          }
        } }, { key: "shouldDo", value: function(n, o, a, u) {
          return !(!n || n.enabled === !1 || u && !n.endOnly || n.endOnly && !o || a === "start" && !n.setStart);
        } }, { key: "copyFrom", value: function(n) {
          this.startOffset = n.startOffset, this.startDelta = n.startDelta, this.startEdges = n.startEdges, this.edges = n.edges, this.states = n.states.map((function(o) {
            return Kn(o);
          })), this.result = pr(j({}, n.result.coords), j({}, n.result.rect));
        } }, { key: "destroy", value: function() {
          for (var n in this) this[n] = null;
        } }]), r;
      })();
      function pr(r, n) {
        return { rect: n, coords: r, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
      }
      function rn(r, n) {
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
      function gr(r) {
        var n = r.iEvent, o = r.interaction.modification.result;
        o && (n.modifiers = o.eventProps);
      }
      var fo = { id: "modifiers/base", before: ["actions"], install: function(r) {
        r.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(r) {
        var n = r.interaction;
        n.modification = new Fr(n);
      }, "interactions:before-action-start": function(r) {
        var n = r.interaction, o = r.interaction.modification;
        o.start(r, n.coords.start.page), n.edges = o.edges, o.applyToInteraction(r);
      }, "interactions:before-action-move": function(r) {
        var n = r.interaction, o = n.modification, a = o.setAndApply(r);
        return n.edges = o.edges, a;
      }, "interactions:before-action-end": function(r) {
        var n = r.interaction, o = n.modification, a = o.beforeEnd(r);
        return n.edges = o.startEdges, a;
      }, "interactions:action-start": gr, "interactions:action-move": gr, "interactions:action-end": gr, "interactions:after-action-start": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:after-action-move": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:stop": function(r) {
        return r.interaction.modification.stop(r);
      } } }, Nr = fo, Br = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, Tn = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c, d, v, b, S) {
          var x;
          O(this, o), (x = n.call(this, a)).relatedTarget = null, x.screenX = void 0, x.screenY = void 0, x.button = void 0, x.buttons = void 0, x.ctrlKey = void 0, x.shiftKey = void 0, x.altKey = void 0, x.metaKey = void 0, x.page = void 0, x.client = void 0, x.delta = void 0, x.rect = void 0, x.x0 = void 0, x.y0 = void 0, x.t0 = void 0, x.dt = void 0, x.duration = void 0, x.clientX0 = void 0, x.clientY0 = void 0, x.velocity = void 0, x.speed = void 0, x.swipe = void 0, x.axes = void 0, x.preEnd = void 0, v = v || a.element;
          var I = a.interactable, z = (I && I.options || Br).deltaSource, H = Ot(I, v, c), W = d === "start", q = d === "end", Z = W ? We(x) : a.prevEvent, Y = W ? a.coords.start : q ? { page: Z.page, client: Z.client, timeStamp: a.coords.cur.timeStamp } : a.coords.cur;
          return x.page = j({}, Y.page), x.client = j({}, Y.client), x.rect = j({}, a.rect), x.timeStamp = Y.timeStamp, q || (x.page.x -= H.x, x.page.y -= H.y, x.client.x -= H.x, x.client.y -= H.y), x.ctrlKey = u.ctrlKey, x.altKey = u.altKey, x.shiftKey = u.shiftKey, x.metaKey = u.metaKey, x.button = u.button, x.buttons = u.buttons, x.target = v, x.currentTarget = v, x.preEnd = b, x.type = S || c + (d || ""), x.interactable = I, x.t0 = W ? a.pointers[a.pointers.length - 1].downTime : Z.t0, x.x0 = a.coords.start.page.x - H.x, x.y0 = a.coords.start.page.y - H.y, x.clientX0 = a.coords.start.client.x - H.x, x.clientY0 = a.coords.start.client.y - H.y, x.delta = W || q ? { x: 0, y: 0 } : { x: x[z].x - Z[z].x, y: x[z].y - Z[z].y }, x.dt = a.coords.delta.timeStamp, x.duration = x.timeStamp - x.t0, x.velocity = j({}, a.coords.velocity[z]), x.speed = $t(x.velocity.x, x.velocity.y), x.swipe = q || d === "inertiastart" ? x.getSwipe() : null, x;
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
      })(nn);
      Object.defineProperties(Tn.prototype, { pageX: { get: function() {
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
      var ho = L((function r(n, o, a, u, c) {
        O(this, r), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = n, this.pointer = o, this.event = a, this.downTime = u, this.downTarget = c;
      })), po = (function(r) {
        return r.interactable = "", r.element = "", r.prepared = "", r.pointerIsDown = "", r.pointerWasMoved = "", r._proxy = "", r;
      })({}), go = (function(r) {
        return r.start = "", r.move = "", r.end = "", r.stop = "", r.interacting = "", r;
      })({}), vo = 0, mo = (function() {
        function r(n) {
          var o = this, a = n.pointerType, u = n.scopeFire;
          O(this, r), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = lr((function(x) {
            this.move(x);
          }), "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = vo++, this._scopeFire = u, this.pointerType = a;
          var c = this;
          this._proxy = {};
          var d = function(x) {
            Object.defineProperty(o._proxy, x, { get: function() {
              return c[x];
            } });
          };
          for (var v in po) d(v);
          var b = function(x) {
            Object.defineProperty(o._proxy, x, { value: function() {
              return c[x].apply(c, arguments);
            } });
          };
          for (var S in go) b(S);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return L(r, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(n, o, a) {
          var u = this.updatePointer(n, o, a, !0), c = this.pointers[u];
          this._scopeFire("interactions:down", { pointer: n, event: o, eventTarget: a, pointerIndex: u, pointerInfo: c, type: "down", interaction: this });
        } }, { key: "start", value: function(n, o, a) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (n.name === "gesture" ? 2 : 1) || !o.options[n.name].enabled) && (pi(this.prepared, n), this.interactable = o, this.element = a, this.rect = o.getRect(a), this.edges = this.prepared.edges ? j({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(n, o, a) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(n, o, a, !1);
          var u, c, d = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (u = this.coords.cur.client.x - this.coords.start.client.x, c = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = $t(u, c) > this.pointerMoveTolerance);
          var v, b, S, x = this.getPointerIndex(n), I = { pointer: n, pointerIndex: x, pointerInfo: this.pointers[x], event: o, type: "move", eventTarget: a, dx: u, dy: c, duplicate: d, interaction: this };
          d || (v = this.coords.velocity, b = this.coords.delta, S = Math.max(b.timeStamp / 1e3, 1e-3), v.page.x = b.page.x / S, v.page.y = b.page.y / S, v.client.x = b.client.x / S, v.client.y = b.client.y / S, v.timeStamp = S), this._scopeFire("interactions:move", I), d || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && $(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(n) {
          n && n.event || J(this.coords.delta), (n = j({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, n || {})).phase = "move", this._doPhase(n);
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
          var o = le(n);
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : pn(this.pointers, (function(a) {
            return a.id === o;
          }));
        } }, { key: "getPointerInfo", value: function(n) {
          return this.pointers[this.getPointerIndex(n)];
        } }, { key: "updatePointer", value: function(n, o, a, u) {
          var c, d, v, b = le(n), S = this.getPointerIndex(n), x = this.pointers[S];
          return u = u !== !1 && (u || /(down|start)$/i.test(o.type)), x ? x.pointer = n : (x = new ho(b, n, o, null, null), S = this.pointers.length, this.pointers.push(x)), ce(this.coords.cur, this.pointers.map((function(I) {
            return I.pointer;
          })), this._now()), c = this.coords.delta, d = this.coords.prev, v = this.coords.cur, c.page.x = v.page.x - d.page.x, c.page.y = v.page.y - d.page.y, c.client.x = v.client.x - d.client.x, c.client.y = v.client.y - d.client.y, c.timeStamp = v.timeStamp - d.timeStamp, u && (this.pointerIsDown = !0, x.downTime = this.coords.cur.timeStamp, x.downTarget = a, It(this.downPointer, n), this.interacting() || ($(this.coords.start, this.coords.cur), $(this.coords.prev, this.coords.cur), this.downEvent = o, this.pointerWasMoved = !1)), this._updateLatestPointer(n, o, a), this._scopeFire("interactions:update-pointer", { pointer: n, event: o, eventTarget: a, down: u, pointerInfo: x, pointerIndex: S, interaction: this }), S;
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
          return new Tn(this, n, this.prepared.name, o, this.element, a, u);
        } }, { key: "_fireEvent", value: function(n) {
          var o;
          (o = this.interactable) == null || o.fire(n), (!this.prevEvent || n.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = n);
        } }, { key: "_doPhase", value: function(n) {
          var o = n.event, a = n.phase, u = n.preEnd, c = n.type, d = this.rect;
          if (d && a === "move" && (at(this.edges, d, this.coords.delta[this.interactable.options.deltaSource]), d.width = d.right - d.left, d.height = d.bottom - d.top), this._scopeFire("interactions:before-action-".concat(a), n) === !1) return !1;
          var v = n.iEvent = this._createPreparedEvent(o, a, u, c);
          return this._scopeFire("interactions:action-".concat(a), n), a === "start" && (this.prevEvent = v), this._fireEvent(v), this._scopeFire("interactions:after-action-".concat(a), n), !0;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), r;
      })();
      function yi(r) {
        bi(r.interaction);
      }
      function bi(r) {
        if (!(function(o) {
          return !(!o.offset.pending.x && !o.offset.pending.y);
        })(r)) return !1;
        var n = r.offset.pending;
        return xi(r.coords.cur, n), xi(r.coords.delta, n), at(r.edges, r.rect, n), n.x = 0, n.y = 0, !0;
      }
      function Ba(r) {
        var n = r.x, o = r.y;
        this.offset.pending.x += n, this.offset.pending.y += o, this.offset.total.x += n, this.offset.total.y += o;
      }
      function xi(r, n) {
        var o = r.page, a = r.client, u = n.x, c = n.y;
        o.x += u, o.y += c, a.x += u, a.y += c;
      }
      go.offsetBy = "";
      var Wa = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(r) {
        r.Interaction.prototype.offsetBy = Ba;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(r) {
        return (function(n) {
          n.pointerIsDown && (xi(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
        })(r.interaction);
      }, "interactions:before-action-start": yi, "interactions:before-action-move": yi, "interactions:before-action-end": function(r) {
        var n = r.interaction;
        if (bi(n)) return n.move({ offset: !0 }), n.end(), !1;
      }, "interactions:stop": function(r) {
        var n = r.interaction;
        n.offset.total.x = 0, n.offset.total.y = 0, n.offset.pending.x = 0, n.offset.pending.y = 0;
      } } }, wi = Wa, Ua = (function() {
        function r(n) {
          O(this, r), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = n;
        }
        return L(r, [{ key: "start", value: function(n) {
          var o = this.interaction, a = Wr(o);
          if (!a || !a.enabled) return !1;
          var u = o.coords.velocity.client, c = $t(u.x, u.y), d = this.modification || (this.modification = new Fr(o));
          if (d.copyFrom(o.modification), this.t0 = o._now(), this.allowResume = a.allowResume, this.v0 = c, this.currentOffset = { x: 0, y: 0 }, this.startCoords = o.coords.cur.page, this.modifierArg = d.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - o.coords.cur.timeStamp < 50 && c > a.minSpeed && c > a.endSpeed) this.startInertia();
          else {
            if (d.result = d.setAll(this.modifierArg), !d.result.changed) return !1;
            this.startSmoothEnd();
          }
          return o.modification.result.rect = null, o.offsetBy(this.targetOffset), o._doPhase({ interaction: o, event: n, phase: "inertiastart" }), o.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), o.modification.result.rect = null, this.active = !0, o.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var n = this, o = this.interaction.coords.velocity.client, a = Wr(this.interaction), u = a.resistance, c = -Math.log(a.endSpeed / this.v0) / u;
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
          this.timeout = En.request((function() {
            o.active && n();
          }));
        } }, { key: "inertiaTick", value: function() {
          var n, o, a, u, c, d, v, b = this, S = this.interaction, x = Wr(S).resistance, I = (S._now() - this.t0) / 1e3;
          if (I < this.te) {
            var z, H = 1 - (Math.exp(-x * I) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (n = 0, o = 0, a = this.targetOffset.x, u = this.targetOffset.y, c = this.modifiedOffset.x, d = this.modifiedOffset.y, z = { x: yo(v = H, n, a, c), y: yo(v, o, u, d) }) : z = { x: this.targetOffset.x * H, y: this.targetOffset.y * H };
            var W = { x: z.x - this.currentOffset.x, y: z.y - this.currentOffset.y };
            this.currentOffset.x += W.x, this.currentOffset.y += W.y, S.offsetBy(W), S.move(), this.onNextFrame((function() {
              return b.inertiaTick();
            }));
          } else S.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var n = this, o = this.interaction, a = o._now() - this.t0, u = Wr(o).smoothEndDuration;
          if (a < u) {
            var c = { x: Ur(a, 0, this.targetOffset.x, u), y: Ur(a, 0, this.targetOffset.y, u) }, d = { x: c.x - this.currentOffset.x, y: c.y - this.currentOffset.y };
            this.currentOffset.x += d.x, this.currentOffset.y += d.y, o.offsetBy(d), o.move({ skipModifiers: this.modifierCount }), this.onNextFrame((function() {
              return n.smoothEndTick();
            }));
          } else o.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(n) {
          var o = n.pointer, a = n.event, u = n.eventTarget, c = this.interaction;
          c.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), c.updatePointer(o, a, u, !0), c._doPhase({ interaction: c, event: a, phase: "resume" }), $(c.coords.prev, c.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, En.cancel(this.timeout);
        } }]), r;
      })();
      function Wr(r) {
        var n = r.interactable, o = r.prepared;
        return n && n.options && o.name && n.options[o.name].inertia;
      }
      var Ha = { id: "inertia", before: ["modifiers", "actions"], install: function(r) {
        var n = r.defaults;
        r.usePlugin(wi), r.usePlugin(Nr), r.actions.phases.inertiastart = !0, r.actions.phases.resume = !0, n.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
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
          u = Xe(u);
        }
      }, "interactions:stop": function(r) {
        var n = r.interaction.inertia;
        n.active && n.stop();
      }, "interactions:before-action-resume": function(r) {
        var n = r.interaction.modification;
        n.stop(r), n.start(r, r.interaction.coords.cur.page), n.applyToInteraction(r);
      }, "interactions:before-action-inertiastart": function(r) {
        return r.interaction.modification.setAndApply(r);
      }, "interactions:action-resume": gr, "interactions:action-inertiastart": gr, "interactions:after-action-inertiastart": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:after-action-resume": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      } } };
      function yo(r, n, o, a) {
        var u = 1 - r;
        return u * u * n + 2 * u * r * o + r * r * a;
      }
      function Ur(r, n, o, a) {
        return -o * (r /= a) * (r - 2) + n;
      }
      var qa = Ha;
      function bo(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          if (r.immediatePropagationStopped) break;
          a(r);
        }
      }
      var xo = (function() {
        function r(n) {
          O(this, r), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = j({}, n || {});
        }
        return L(r, [{ key: "fire", value: function(n) {
          var o, a = this.global;
          (o = this.types[n.type]) && bo(n, o), !n.propagationStopped && a && (o = a[n.type]) && bo(n, o);
        } }, { key: "on", value: function(n, o) {
          var a = Xt(n, o);
          for (n in a) this.types[n] = _n(this.types[n] || [], a[n]);
        } }, { key: "off", value: function(n, o) {
          var a = Xt(n, o);
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
      function vr(r) {
        return D.object(r) ? { capture: !!r.capture, passive: !!r.passive } : { capture: !!r, passive: !1 };
      }
      function He(r, n) {
        return r === n || (typeof r == "boolean" ? !!n.capture === r && !n.passive : !!r.capture == !!n.capture && !!r.passive == !!n.passive);
      }
      var Ke = { id: "events", install: function(r) {
        var n, o = [], a = {}, u = [], c = { add: d, remove: v, addDelegate: function(x, I, z, H, W) {
          var q = vr(W);
          if (!a[z]) {
            a[z] = [];
            for (var Z = 0; Z < u.length; Z++) {
              var Y = u[Z];
              d(Y, z, b), d(Y, z, S, !0);
            }
          }
          var w = a[z], C = ur(w, (function(R) {
            return R.selector === x && R.context === I;
          }));
          C || (C = { selector: x, context: I, listeners: [] }, w.push(C)), C.listeners.push({ func: H, options: q });
        }, removeDelegate: function(x, I, z, H, W) {
          var q, Z = vr(W), Y = a[z], w = !1;
          if (Y)
            for (q = Y.length - 1; q >= 0; q--) {
              var C = Y[q];
              if (C.selector === x && C.context === I) {
                for (var R = C.listeners, k = R.length - 1; k >= 0; k--) {
                  var G = R[k];
                  if (G.func === H && He(G.options, Z)) {
                    R.splice(k, 1), R.length || (Y.splice(q, 1), v(I, z, b), v(I, z, S, !0)), w = !0;
                    break;
                  }
                }
                if (w) break;
              }
            }
        }, delegateListener: b, delegateUseCapture: S, delegatedEvents: a, documents: u, targets: o, supportsOptions: !1, supportsPassive: !1 };
        function d(x, I, z, H) {
          if (x.addEventListener) {
            var W = vr(H), q = ur(o, (function(Z) {
              return Z.eventTarget === x;
            }));
            q || (q = { eventTarget: x, events: {} }, o.push(q)), q.events[I] || (q.events[I] = []), ur(q.events[I], (function(Z) {
              return Z.func === z && He(Z.options, W);
            })) || (x.addEventListener(I, z, c.supportsOptions ? W : W.capture), q.events[I].push({ func: z, options: W }));
          }
        }
        function v(x, I, z, H) {
          if (x.addEventListener && x.removeEventListener) {
            var W = pn(o, (function(ve) {
              return ve.eventTarget === x;
            })), q = o[W];
            if (q && q.events) if (I !== "all") {
              var Z = !1, Y = q.events[I];
              if (Y) {
                if (z === "all") {
                  for (var w = Y.length - 1; w >= 0; w--) {
                    var C = Y[w];
                    v(x, I, C.func, C.options);
                  }
                  return;
                }
                for (var R = vr(H), k = 0; k < Y.length; k++) {
                  var G = Y[k];
                  if (G.func === z && He(G.options, R)) {
                    x.removeEventListener(I, z, c.supportsOptions ? R : R.capture), Y.splice(k, 1), Y.length === 0 && (delete q.events[I], Z = !0);
                    break;
                  }
                }
              }
              Z && !Object.keys(q.events).length && o.splice(W, 1);
            } else for (I in q.events) q.events.hasOwnProperty(I) && v(x, I, "all");
          }
        }
        function b(x, I) {
          for (var z = vr(I), H = new Ga(x), W = a[x.type], q = tn(x)[0], Z = q; D.element(Z); ) {
            for (var Y = 0; Y < W.length; Y++) {
              var w = W[Y], C = w.selector, R = w.context;
              if (Ze(Z, C) && se(R, q) && se(R, Z)) {
                var k = w.listeners;
                H.currentTarget = Z;
                for (var G = 0; G < k.length; G++) {
                  var ve = k[G];
                  He(ve.options, z) && ve.func(H);
                }
              }
            }
            Z = Xe(Z);
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
      } }, _i = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(r) {
        for (var n = 0, o = _i.methodOrder; n < o.length; n++) {
          var a = o[n], u = _i[a](r);
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
            b = Xe(b);
          }
        }
        return null;
      }, mouseOrPen: function(r) {
        var n, o = r.pointerId, a = r.pointerType, u = r.eventType, c = r.scope;
        if (a !== "mouse" && a !== "pen") return null;
        for (var d = 0, v = c.interactions.list; d < v.length; d++) {
          var b = v[d];
          if (b.pointerType === a) {
            if (b.simulation && !wo(b, o)) continue;
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
          if (wo(u, n)) return u;
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
      function wo(r, n) {
        return r.pointers.some((function(o) {
          return o.id === n;
        }));
      }
      var Xa = _i, Si = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function _o(r, n) {
        return function(o) {
          var a = n.interactions.list, u = en(o), c = tn(o), d = c[0], v = c[1], b = [];
          if (/^touch/.test(o.type)) {
            n.prevTouchTime = n.now();
            for (var S = 0, x = o.changedTouches; S < x.length; S++) {
              var I = x[S], z = { pointer: I, pointerId: le(I), pointerType: u, eventType: o.type, eventTarget: d, curEventTarget: v, scope: n }, H = So(z);
              b.push([z.pointer, z.eventTarget, z.curEventTarget, H]);
            }
          } else {
            var W = !1;
            if (!Re.supportsPointerEvent && /mouse/.test(o.type)) {
              for (var q = 0; q < a.length && !W; q++) W = a[q].pointerType !== "mouse" && a[q].pointerIsDown;
              W = W || n.now() - n.prevTouchTime < 500 || o.timeStamp === 0;
            }
            if (!W) {
              var Z = { pointer: o, pointerId: le(o), pointerType: u, eventType: o.type, curEventTarget: v, eventTarget: d, scope: n }, Y = So(Z);
              b.push([Z.pointer, Z.eventTarget, Z.curEventTarget, Y]);
            }
          }
          for (var w = 0; w < b.length; w++) {
            var C = b[w], R = C[0], k = C[1], G = C[2];
            C[3][r](R, o, k, G);
          }
        };
      }
      function So(r) {
        var n = r.pointerType, o = r.scope, a = { interaction: Xa.search(r), searchDetails: r };
        return o.fire("interactions:find", a), a.interaction || o.interactions.new({ pointerType: n });
      }
      function Hr(r, n) {
        var o = r.doc, a = r.scope, u = r.options, c = a.interactions.docEvents, d = a.events, v = d[n];
        for (var b in a.browser.isIOS && !u.events && (u.events = { passive: !1 }), d.delegatedEvents) v(o, b, d.delegateListener), v(o, b, d.delegateUseCapture, !0);
        for (var S = u && u.events, x = 0; x < c.length; x++) {
          var I = c[x];
          v(o, I.type, I.listener, S);
        }
      }
      var $a = { id: "core/interactions", install: function(r) {
        for (var n = {}, o = 0; o < Si.length; o++) {
          var a = Si[o];
          n[a] = _o(a, r);
        }
        var u, c = Re.pEventTypes;
        function d() {
          for (var v = 0, b = r.interactions.list; v < b.length; v++) {
            var S = b[v];
            if (S.pointerIsDown && S.pointerType === "touch" && !S._interacting) for (var x = function() {
              var H = z[I];
              r.documents.some((function(W) {
                return se(W.doc, H.downTarget);
              })) || S.removePointer(H.pointer, H.event);
            }, I = 0, z = S.pointers; I < z.length; I++) x();
          }
        }
        (u = we.PointerEvent ? [{ type: c.down, listener: d }, { type: c.down, listener: n.pointerDown }, { type: c.move, listener: n.pointerMove }, { type: c.up, listener: n.pointerUp }, { type: c.cancel, listener: n.pointerUp }] : [{ type: "mousedown", listener: n.pointerDown }, { type: "mousemove", listener: n.pointerMove }, { type: "mouseup", listener: n.pointerUp }, { type: "touchstart", listener: d }, { type: "touchstart", listener: n.pointerDown }, { type: "touchmove", listener: n.pointerMove }, { type: "touchend", listener: n.pointerUp }, { type: "touchcancel", listener: n.pointerUp }]).push({ type: "blur", listener: function(v) {
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
        })(mo), r.interactions = { list: [], new: function(v) {
          v.scopeFire = function(S, x) {
            return r.fire(S, x);
          };
          var b = new r.Interaction(v);
          return r.interactions.list.push(b), b;
        }, listeners: n, docEvents: u, pointerMoveTolerance: 1 }, r.usePlugin(dr);
      }, listeners: { "scope:add-document": function(r) {
        return Hr(r, "add");
      }, "scope:remove-document": function(r) {
        return Hr(r, "remove");
      }, "interactable:unset": function(r, n) {
        for (var o = r.interactable, a = n.interactions.list.length - 1; a >= 0; a--) {
          var u = n.interactions.list[a];
          u.interactable === o && (u.stop(), n.fire("interactions:destroy", { interaction: u }), u.destroy(), n.interactions.list.length > 2 && n.interactions.list.splice(a, 1));
        }
      } }, onDocSignal: Hr, doOnInteractions: _o, methodNames: Si }, ft = $a, on = (function(r) {
        return r[r.On = 0] = "On", r[r.Off = 1] = "Off", r;
      })(on || {}), Ln = (function() {
        function r(n, o, a, u) {
          O(this, r), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new xo(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = o.actions, this.target = n, this._context = o.context || a, this._win = Oe(wt(n) ? this._context : n), this._doc = this._win.document, this._scopeEvents = u, this.set(o);
        }
        return L(r, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(n, o) {
          return D.func(o.onstart) && this.on("".concat(n, "start"), o.onstart), D.func(o.onmove) && this.on("".concat(n, "move"), o.onmove), D.func(o.onend) && this.on("".concat(n, "end"), o.onend), D.func(o.oninertiastart) && this.on("".concat(n, "inertiastart"), o.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(n, o, a) {
          var u, c = this, d = (u = this._actions.map[n]) == null ? void 0 : u.filterEventType, v = function(b) {
            return (d == null || d(b)) && hr(b, c._actions);
          };
          (D.array(o) || D.object(o)) && this._onOff(on.Off, n, o, void 0, v), (D.array(a) || D.object(a)) && this._onOff(on.On, n, a, void 0, v);
        } }, { key: "setPerAction", value: function(n, o) {
          var a = this._defaults;
          for (var u in o) {
            var c = u, d = this.options[n], v = o[c];
            c === "listeners" && this.updatePerActionListeners(n, d.listeners, v), D.array(v) ? d[c] = Sn(v) : D.plainObject(v) ? (d[c] = j(d[c] || {}, Kn(v)), D.object(a.perAction[c]) && "enabled" in a.perAction[c] && (d[c].enabled = v.enabled !== !1)) : D.bool(v) && D.object(a.perAction[c]) ? d[c].enabled = v : d[c] = v;
          }
        } }, { key: "getRect", value: function(n) {
          return n = n || (D.element(this.target) ? this.target : null), D.string(this.target) && (n = n || this._context.querySelector(this.target)), et(n);
        } }, { key: "rectChecker", value: function(n) {
          var o = this;
          return D.func(n) ? (this.getRect = function(a) {
            var u = j({}, n.apply(o, a));
            return "width" in u || (u.width = u.right - u.left, u.height = u.bottom - u.top), u;
          }, this) : n === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(n, o) {
          if (wt(o) || D.object(o)) {
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
          return this._context === n.ownerDocument || se(this._context, n);
        } }, { key: "testIgnoreAllow", value: function(n, o, a) {
          return !this.testIgnore(n.ignoreFrom, o, a) && this.testAllow(n.allowFrom, o, a);
        } }, { key: "testAllow", value: function(n, o, a) {
          return !n || !!D.element(a) && (D.string(n) ? ht(a, n, o) : !!D.element(n) && se(n, a));
        } }, { key: "testIgnore", value: function(n, o, a) {
          return !(!n || !D.element(a)) && (D.string(n) ? ht(a, n, o) : !!D.element(n) && se(n, a));
        } }, { key: "fire", value: function(n) {
          return this.events.fire(n), this;
        } }, { key: "_onOff", value: function(n, o, a, u, c) {
          D.object(o) && !D.array(o) && (u = a, a = null);
          var d = Xt(o, a, c);
          for (var v in d) {
            v === "wheel" && (v = Re.wheelEvent);
            for (var b = 0, S = d[v]; b < S.length; b++) {
              var x = S[b];
              hr(v, this._actions) ? this.events[n === on.On ? "on" : "off"](v, x) : D.string(this.target) ? this._scopeEvents[n === on.On ? "addDelegate" : "removeDelegate"](this.target, this._context, v, x, u) : this._scopeEvents[n === on.On ? "add" : "remove"](this.target, v, x, u);
            }
          }
          return this;
        } }, { key: "on", value: function(n, o, a) {
          return this._onOff(on.On, n, o, a);
        } }, { key: "off", value: function(n, o, a) {
          return this._onOff(on.Off, n, o, a);
        } }, { key: "set", value: function(n) {
          var o = this._defaults;
          for (var a in D.object(n) || (n = {}), this.options = Kn(o.base), this._actions.methodDict) {
            var u = a, c = this._actions.methodDict[u];
            this.options[u] = {}, this.setPerAction(u, j(j({}, o.perAction), o.actions[u])), this[c](n[u]);
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
      })(), Eo = (function() {
        function r(n) {
          var o = this;
          O(this, r), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = n, n.addListeners({ "interactable:unset": function(a) {
            var u = a.interactable, c = u.target, d = D.string(c) ? o.selectorMap[c] : c[o.scope.id], v = pn(d, (function(b) {
              return b === u;
            }));
            d.splice(v, 1);
          } });
        }
        return L(r, [{ key: "new", value: function(n, o) {
          o = j(o || {}, { actions: this.scope.actions });
          var a = new this.scope.Interactable(n, o, this.scope.document, this.scope.events);
          return this.scope.addDocument(a._doc), this.list.push(a), D.string(n) ? (this.selectorMap[n] || (this.selectorMap[n] = []), this.selectorMap[n].push(a)) : (a.target[this.scope.id] || Object.defineProperty(n, this.scope.id, { value: [], configurable: !0 }), n[this.scope.id].push(a)), this.scope.fire("interactable:new", { target: n, options: o, interactable: a, win: this.scope._win }), a;
        } }, { key: "getExisting", value: function(n, o) {
          var a = o && o.context || this.scope.document, u = D.string(n), c = u ? this.selectorMap[n] : n[this.scope.id];
          if (c) return ur(c, (function(d) {
            return d._context === a && (u || d.inContext(n));
          }));
        } }, { key: "forEachMatch", value: function(n, o) {
          for (var a = 0, u = this.list; a < u.length; a++) {
            var c = u[a], d = void 0;
            if ((D.string(c.target) ? D.element(n) && Ze(n, c.target) : n === c.target) && c.inContext(n) && (d = o(c)), d !== void 0) return d;
          }
        } }]), r;
      })(), Ei = (function() {
        function r() {
          var n = this;
          O(this, r), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = Re, this.defaults = Kn(Br), this.Eventable = xo, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = (function(a) {
            var u = function c(d, v) {
              var b = a.interactables.getExisting(d, v);
              return b || ((b = a.interactables.new(d, v)).events.global = c.globalEvents), b;
            };
            return u.getPointerAverage = oe, u.getTouchBBox = tt, u.getTouchDistance = ct, u.getTouchAngle = mt, u.getElementRect = et, u.getElementClientRect = lt, u.matchesSelector = Ze, u.closest = Qe, u.globalEvents = {}, u.version = "1.10.27", u.scope = a, u.use = function(c, d) {
              return this.scope.usePlugin(c, d), this;
            }, u.isSet = function(c, d) {
              return !!this.scope.interactables.get(c, d && d.context);
            }, u.on = lr((function(c, d, v) {
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
              return hr(c, this.scope.actions) ? this.globalEvents[c] ? this.globalEvents[c].push(d) : this.globalEvents[c] = [d] : this.scope.events.add(this.scope.document, c, d, { options: v }), this;
            }), "The interact.on() method is being deprecated"), u.off = lr((function(c, d, v) {
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
              var z;
              return hr(c, this.scope.actions) ? c in this.globalEvents && (z = this.globalEvents[c].indexOf(d)) !== -1 && this.globalEvents[c].splice(z, 1) : this.scope.events.remove(this.scope.document, c, d, v), this;
            }), "The interact.off() method is being deprecated"), u.debug = function() {
              return this.scope;
            }, u.supportsTouch = function() {
              return Re.supportsTouch;
            }, u.supportsPointerEvent = function() {
              return Re.supportsPointerEvent;
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
          })(this), this.InteractEvent = Tn, this.Interactable = void 0, this.interactables = new Eo(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(a) {
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
              return be(ge(c.prototype), "set", this).call(this, d), o.fire("interactable:set", { options: d, interactable: this }), this;
            } }, { key: "unset", value: function() {
              be(ge(c.prototype), "unset", this).call(this);
              var d = o.interactables.list.indexOf(this);
              d < 0 || (o.interactables.list.splice(d, 1), o.fire("interactable:unset", { interactable: this }));
            } }]), c;
          })(Ln);
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
            return o.isInitialized = !0, D.window(a) && xe(a), we.init(a), Re.init(a), En.init(a), o.window = a, o.document = a.document, o.usePlugin(ft), o.usePlugin(Ke), o;
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
          var a = Oe(n);
          o = o ? j({}, o) : {}, this.documents.push({ doc: n, options: o }), this.events.documents.push(n), n !== this.document && this.events.add(a, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: n, window: a, scope: this, options: o });
        } }, { key: "removeDocument", value: function(n) {
          var o = this.getDocIndex(n), a = Oe(n), u = this.documents[o].options;
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
      var Ti = new Ei(), pt = Ti.interactStatic, To = typeof globalThis < "u" ? globalThis : window;
      Ti.init(To);
      var Oo = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(r) {
        var n = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function(a) {
          var u = a[0], c = a[1];
          return u in r || c in r;
        })), o = function(a, u) {
          for (var c = r.range, d = r.limits, v = d === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : d, b = r.offset, S = b === void 0 ? { x: 0, y: 0 } : b, x = { range: c, grid: r, x: null, y: null }, I = 0; I < n.length; I++) {
            var z = n[I], H = z[0], W = z[1], q = Math.round((a - S.x) / r[H]), Z = Math.round((u - S.y) / r[W]);
            x[H] = Math.max(v.left, Math.min(v.right, q * r[H] + S.x)), x[W] = Math.max(v.top, Math.min(v.bottom, Z * r[W] + S.y));
          }
          return x;
        };
        return o.grid = r, o.coordFields = n, o;
      } }), Io = { id: "snappers", install: function(r) {
        var n = r.interactStatic;
        n.snappers = j(n.snappers || {}, Oo), n.createSnapGrid = n.snappers.grid;
      } }, Ro = Io, Mt = { start: function(r) {
        var n = r.state, o = r.rect, a = r.edges, u = r.pageCoords, c = n.options, d = c.ratio, v = c.enabled, b = n.options, S = b.equalDelta, x = b.modifiers;
        d === "preserve" && (d = o.width / o.height), n.startCoords = j({}, u), n.startRect = j({}, o), n.ratio = d, n.equalDelta = S;
        var I = n.linkedEdges = { top: a.top || a.left && !a.bottom, left: a.left || a.top && !a.right, bottom: a.bottom || a.right && !a.top, right: a.right || a.bottom && !a.left };
        if (n.xIsPrimaryAxis = !(!a.left && !a.right), n.equalDelta) {
          var z = (I.left ? 1 : -1) * (I.top ? 1 : -1);
          n.edgeSign = { x: z, y: z };
        } else n.edgeSign = { x: I.left ? -1 : 1, y: I.top ? -1 : 1 };
        if (v !== !1 && j(a, I), x != null && x.length) {
          var H = new Fr(r.interaction);
          H.copyFrom(r.interaction.modification), H.prepareStates(x), n.subModification = H, H.startAll(y({}, r));
        }
      }, set: function(r) {
        var n = r.state, o = r.rect, a = r.coords, u = n.linkedEdges, c = j({}, a), d = n.equalDelta ? Ya : Bt;
        if (j(r.edges, u), d(n, n.xIsPrimaryAxis, a, o), !n.subModification) return null;
        var v = j({}, o);
        at(u, v, { x: a.x - c.x, y: a.y - c.y });
        var b = n.subModification.setAll(y(y({}, r), {}, { rect: v, edges: u, pageCoords: a, prevCoords: a, prevRect: v })), S = b.delta;
        return b.changed && (d(n, Math.abs(S.x) > Math.abs(S.y), b.coords, b.rect), j(a, b.coords)), b.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function Ya(r, n, o) {
        var a = r.startCoords, u = r.edgeSign;
        n ? o.y = a.y + (o.x - a.x) * u.y : o.x = a.x + (o.y - a.y) * u.x;
      }
      function Bt(r, n, o, a) {
        var u = r.startRect, c = r.startCoords, d = r.ratio, v = r.edgeSign;
        if (n) {
          var b = a.width / d;
          o.y = c.y + (b - u.height) * v.y;
        } else {
          var S = a.height * d;
          o.x = c.x + (S - u.width) * v.x;
        }
      }
      var Ka = rn(Mt, "aspectRatio"), Oi = function() {
      };
      Oi._defaults = {};
      var Yt = Oi;
      function an(r, n, o) {
        return D.func(r) ? Tt(r, n.interactable, n.element, [o.x, o.y, n]) : Tt(r, n.interactable, n.element);
      }
      var Vn = { start: function(r) {
        var n = r.rect, o = r.startOffset, a = r.state, u = r.interaction, c = r.pageCoords, d = a.options, v = d.elementRect, b = j({ left: 0, top: 0, right: 0, bottom: 0 }, d.offset || {});
        if (n && v) {
          var S = an(d.restriction, u, c);
          if (S) {
            var x = S.right - S.left - n.width, I = S.bottom - S.top - n.height;
            x < 0 && (b.left += x, b.right += x), I < 0 && (b.top += I, b.bottom += I);
          }
          b.left += o.left - n.width * v.left, b.top += o.top - n.height * v.top, b.right += o.right - n.width * (1 - v.right), b.bottom += o.bottom - n.height * (1 - v.bottom);
        }
        a.offset = b;
      }, set: function(r) {
        var n = r.coords, o = r.interaction, a = r.state, u = a.options, c = a.offset, d = an(u.restriction, o, n);
        if (d) {
          var v = (function(b) {
            return !b || "left" in b && "top" in b || ((b = j({}, b)).left = b.x || 0, b.top = b.y || 0, b.right = b.right || b.left + b.width, b.bottom = b.bottom || b.top + b.height), b;
          })(d);
          n.x = Math.max(Math.min(v.right - c.right, n.x), v.left + c.left), n.y = Math.max(Math.min(v.bottom - c.bottom, n.y), v.top + c.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, je = rn(Vn, "restrict"), mn = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, qr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function Mo(r, n) {
        for (var o = 0, a = ["top", "left", "bottom", "right"]; o < a.length; o++) {
          var u = a[o];
          u in r || (r[u] = n[u]);
        }
        return r;
      }
      var kn = { noInner: mn, noOuter: qr, start: function(r) {
        var n, o = r.interaction, a = r.startOffset, u = r.state, c = u.options;
        c && (n = _t(an(c.offset, o, o.coords.start.page))), n = n || { x: 0, y: 0 }, u.offset = { top: n.y + a.top, left: n.x + a.left, bottom: n.y - a.bottom, right: n.x - a.right };
      }, set: function(r) {
        var n = r.coords, o = r.edges, a = r.interaction, u = r.state, c = u.offset, d = u.options;
        if (o) {
          var v = j({}, n), b = an(d.inner, a, v) || {}, S = an(d.outer, a, v) || {};
          Mo(b, mn), Mo(S, qr), o.top ? n.y = Math.min(Math.max(S.top + c.top, v.y), b.top + c.top) : o.bottom && (n.y = Math.max(Math.min(S.bottom + c.bottom, v.y), b.bottom + c.bottom)), o.left ? n.x = Math.min(Math.max(S.left + c.left, v.x), b.left + c.left) : o.right && (n.x = Math.max(Math.min(S.right + c.right, v.x), b.right + c.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Va = rn(kn, "restrictEdges"), Za = j({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(r) {
      } }, Vn.defaults), ja = rn({ start: Vn.start, set: Vn.set, defaults: Za }, "restrictRect"), Co = { width: -1 / 0, height: -1 / 0 }, Gr = { width: 1 / 0, height: 1 / 0 }, Zn = rn({ start: function(r) {
        return kn.start(r);
      }, set: function(r) {
        var n = r.interaction, o = r.state, a = r.rect, u = r.edges, c = o.options;
        if (u) {
          var d = Qt(an(c.min, n, r.coords)) || Co, v = Qt(an(c.max, n, r.coords)) || Gr;
          o.options = { endOnly: c.endOnly, inner: j({}, kn.noInner), outer: j({}, kn.noOuter) }, u.top ? (o.options.inner.top = a.bottom - d.height, o.options.outer.top = a.bottom - v.height) : u.bottom && (o.options.inner.bottom = a.top + d.height, o.options.outer.bottom = a.top + v.height), u.left ? (o.options.inner.left = a.right - d.width, o.options.outer.left = a.right - v.width) : u.right && (o.options.inner.right = a.left + d.width, o.options.outer.right = a.left + v.width), kn.set(r), o.options = c;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), Ii = { start: function(r) {
        var n, o = r.interaction, a = r.interactable, u = r.element, c = r.rect, d = r.state, v = r.startOffset, b = d.options, S = b.offsetWithOrigin ? (function(z) {
          var H = z.interaction.element, W = _t(Tt(z.state.options.origin, null, null, [H])), q = W || Ot(z.interactable, H, z.interaction.prepared.name);
          return q;
        })(r) : { x: 0, y: 0 };
        if (b.offset === "startCoords") n = { x: o.coords.start.page.x, y: o.coords.start.page.y };
        else {
          var x = Tt(b.offset, a, u, [o]);
          (n = _t(x) || { x: 0, y: 0 }).x += S.x, n.y += S.y;
        }
        var I = b.relativePoints;
        d.offsets = c && I && I.length ? I.map((function(z, H) {
          return { index: H, relativePoint: z, x: v.left - c.width * z.x + n.x, y: v.top - c.height * z.y + n.y };
        })) : [{ index: 0, relativePoint: null, x: n.x, y: n.y }];
      }, set: function(r) {
        var n = r.interaction, o = r.coords, a = r.state, u = a.options, c = a.offsets, d = Ot(n.interactable, n.element, n.prepared.name), v = j({}, o), b = [];
        u.offsetWithOrigin || (v.x -= d.x, v.y -= d.y);
        for (var S = 0, x = c; S < x.length; S++) for (var I = x[S], z = v.x - I.x, H = v.y - I.y, W = 0, q = u.targets.length; W < q; W++) {
          var Z = u.targets[W], Y = void 0;
          (Y = D.func(Z) ? Z(z, H, n._proxy, I, W) : Z) && b.push({ x: (D.number(Y.x) ? Y.x : z) + I.x, y: (D.number(Y.y) ? Y.y : H) + I.y, range: D.number(Y.range) ? Y.range : u.range, source: Z, index: W, offset: I });
        }
        for (var w = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, C = 0; C < b.length; C++) {
          var R = b[C], k = R.range, G = R.x - v.x, ve = R.y - v.y, ye = $t(G, ve), Ee = ye <= k;
          k === 1 / 0 && w.inRange && w.range !== 1 / 0 && (Ee = !1), w.target && !(Ee ? w.inRange && k !== 1 / 0 ? ye / k < w.distance / w.range : k === 1 / 0 && w.range !== 1 / 0 || ye < w.distance : !w.inRange && ye < w.distance) || (w.target = R, w.distance = ye, w.range = k, w.inRange = Ee, w.delta.x = G, w.delta.y = ve);
        }
        return w.inRange && (o.x = w.target.x, o.y = w.target.y), a.closest = w, w;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, Ao = rn(Ii, "snap"), mr = { start: function(r) {
        var n = r.state, o = r.edges, a = n.options;
        if (!o) return null;
        r.state = { options: { targets: null, relativePoints: [{ x: o.left ? 0 : 1, y: o.top ? 0 : 1 }], offset: a.offset || "self", origin: { x: 0, y: 0 }, range: a.range } }, n.targetFields = n.targetFields || [["width", "height"], ["x", "y"]], Ii.start(r), n.offsets = r.state.offsets, r.state = n;
      }, set: function(r) {
        var n = r.interaction, o = r.state, a = r.coords, u = o.options, c = o.offsets, d = { x: a.x - c[0].x, y: a.y - c[0].y };
        o.options = j({}, u), o.options.targets = [];
        for (var v = 0, b = u.targets || []; v < b.length; v++) {
          var S = b[v], x = void 0;
          if (x = D.func(S) ? S(d.x, d.y, n) : S) {
            for (var I = 0, z = o.targetFields; I < z.length; I++) {
              var H = z[I], W = H[0], q = H[1];
              if (W in x || q in x) {
                x.x = x[W], x.y = x[q];
                break;
              }
            }
            o.options.targets.push(x);
          }
        }
        var Z = Ii.set(r);
        return o.options = u, Z;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, Ri = rn(mr, "snapSize"), yr = { aspectRatio: Ka, restrictEdges: Va, restrict: je, restrictRect: ja, restrictSize: Zn, snapEdges: rn({ start: function(r) {
        var n = r.edges;
        return n ? (r.state.targetFields = r.state.targetFields || [[n.left ? "left" : "right", n.top ? "top" : "bottom"]], mr.start(r)) : null;
      }, set: mr.set, defaults: j(Kn(mr.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Ao, snapSize: Ri, spring: Yt, avoid: Yt, transform: Yt, rubberband: Yt }, Do = { id: "modifiers", install: function(r) {
        var n = r.interactStatic;
        for (var o in r.usePlugin(Nr), r.usePlugin(Ro), n.modifiers = yr, yr) {
          var a = yr[o], u = a._defaults, c = a._methods;
          u._methods = c, r.defaults.perAction[o] = u;
        }
      } }, Ja = Do, Xr = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c, d, v, b) {
          var S;
          if (O(this, o), It(We(S = n.call(this, v)), c), c !== u && It(We(S), u), S.timeStamp = b, S.originalEvent = c, S.type = a, S.pointerId = le(u), S.pointerType = en(u), S.target = d, S.currentTarget = null, a === "tap") {
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
      })(nn), Fn = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(r) {
        r.pointerEvents = Fn, r.defaults.actions.pointerEvents = Fn.defaults, j(r.actions.phaselessTypes, Fn.types);
      }, listeners: { "interactions:new": function(r) {
        var n = r.interaction;
        n.prevTap = null, n.tapTime = 0;
      }, "interactions:update-pointer": function(r) {
        var n = r.down, o = r.pointerInfo;
        !n && o.hold || (o.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget;
        r.duplicate || o.pointerIsDown && !o.pointerWasMoved || (o.pointerIsDown && yt(r), On({ interaction: o, pointer: a, event: u, eventTarget: c, type: "move" }, n));
      }, "interactions:down": function(r, n) {
        (function(o, a) {
          for (var u = o.interaction, c = o.pointer, d = o.event, v = o.eventTarget, b = o.pointerIndex, S = u.pointers[b].hold, x = hn(v), I = { interaction: u, pointer: c, event: d, eventTarget: v, type: "hold", targets: [], path: x, node: null }, z = 0; z < x.length; z++) {
            var H = x[z];
            I.node = H, a.fire("pointerEvents:collect-targets", I);
          }
          if (I.targets.length) {
            for (var W = 1 / 0, q = 0, Z = I.targets; q < Z.length; q++) {
              var Y = Z[q].eventable.options.holdDuration;
              Y < W && (W = Y);
            }
            S.duration = W, S.timeout = setTimeout((function() {
              On({ interaction: u, eventTarget: v, pointer: c, event: d, type: "hold" }, a);
            }), W);
          }
        })(r, n), On(r, n);
      }, "interactions:up": function(r, n) {
        yt(r), On(r, n), (function(o, a) {
          var u = o.interaction, c = o.pointer, d = o.event, v = o.eventTarget;
          u.pointerWasMoved || On({ interaction: u, eventTarget: v, pointer: c, event: d, type: "tap" }, a);
        })(r, n);
      }, "interactions:cancel": function(r, n) {
        yt(r), On(r, n);
      } }, PointerEvent: Xr, fire: On, collectEventTargets: Mi, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function On(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, d = r.type, v = r.targets, b = v === void 0 ? Mi(r, n) : v, S = new Xr(d, a, u, c, o, n.now());
        n.fire("pointerEvents:new", { pointerEvent: S });
        for (var x = { interaction: o, pointer: a, event: u, eventTarget: c, targets: b, type: d, pointerEvent: S }, I = 0; I < b.length; I++) {
          var z = b[I];
          for (var H in z.props || {}) S[H] = z.props[H];
          var W = Ot(z.eventable, z.node);
          if (S._subtractOrigin(W), S.eventable = z.eventable, S.currentTarget = z.node, z.eventable.fire(S), S._addOrigin(W), S.immediatePropagationStopped || S.propagationStopped && I + 1 < b.length && b[I + 1].node !== S.currentTarget) break;
        }
        if (n.fire("pointerEvents:fired", x), d === "tap") {
          var q = S.double ? On({ interaction: o, pointer: a, event: u, eventTarget: c, type: "doubletap" }, n) : S;
          o.prevTap = q, o.tapTime = q.timeStamp;
        }
        return S;
      }
      function Mi(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, d = r.type, v = o.getPointerIndex(a), b = o.pointers[v];
        if (d === "tap" && (o.pointerWasMoved || !b || b.downTarget !== c)) return [];
        for (var S = hn(c), x = { interaction: o, pointer: a, event: u, eventTarget: c, type: d, path: S, targets: [], node: null }, I = 0; I < S.length; I++) {
          var z = S[I];
          x.node = z, n.fire("pointerEvents:collect-targets", x);
        }
        return d === "hold" && (x.targets = x.targets.filter((function(H) {
          var W, q;
          return H.eventable.options.holdDuration === ((W = o.pointers[v]) == null || (q = W.hold) == null ? void 0 : q.duration);
        }))), x.targets;
      }
      function yt(r) {
        var n = r.interaction, o = r.pointerIndex, a = n.pointers[o].hold;
        a && a.timeout && (clearTimeout(a.timeout), a.timeout = null);
      }
      var Ci = Object.freeze({ __proto__: null, default: Fn });
      function br(r) {
        var n = r.interaction;
        n.holdIntervalHandle && (clearInterval(n.holdIntervalHandle), n.holdIntervalHandle = null);
      }
      var zo = { id: "pointer-events/holdRepeat", install: function(r) {
        r.usePlugin(Fn);
        var n = r.pointerEvents;
        n.defaults.holdRepeatInterval = 0, n.types.holdrepeat = r.actions.phaselessTypes.holdrepeat = !0;
      }, listeners: ["move", "up", "cancel", "endall"].reduce((function(r, n) {
        return r["pointerEvents:".concat(n)] = br, r;
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
      } }) }, Po = zo, Qa = { id: "pointer-events/interactableTargets", install: function(r) {
        var n = r.Interactable;
        n.prototype.pointerEvents = function(a) {
          return j(this.events.options, a), this;
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
        j(o.events.options, n.pointerEvents.defaults), j(o.events.options, a.pointerEvents || {});
      } } }, es = Qa, ts = { id: "pointer-events", install: function(r) {
        r.usePlugin(Ci), r.usePlugin(Po), r.usePlugin(es);
      } }, ns = ts, rs = { id: "reflow", install: function(r) {
        var n = r.Interactable;
        r.actions.phases.reflow = !0, n.prototype.reflow = function(o) {
          return (function(a, u, c) {
            for (var d = a.getAllElements(), v = c.window.Promise, b = v ? [] : null, S = function() {
              var I = d[x], z = a.getRect(I);
              if (!z) return 1;
              var H, W = ur(c.interactions.list, (function(Y) {
                return Y.interacting() && Y.interactable === a && Y.element === I && Y.prepared.name === u.name;
              }));
              if (W) W.move(), b && (H = W._reflowPromise || new v((function(Y) {
                W._reflowResolve = Y;
              })));
              else {
                var q = Qt(z), Z = /* @__PURE__ */ (function(Y) {
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
                H = (function(Y, w, C, R, k) {
                  var G = Y.interactions.new({ pointerType: "reflow" }), ve = { interaction: G, event: k, pointer: k, eventTarget: C, phase: "reflow" };
                  G.interactable = w, G.element = C, G.prevEvent = k, G.updatePointer(k, k, C, !0), J(G.coords.delta), pi(G.prepared, R), G._doPhase(ve);
                  var ye = Y.window, Ee = ye.Promise, Ct = Ee ? new Ee((function(yn) {
                    G._reflowResolve = yn;
                  })) : void 0;
                  return G._reflowPromise = Ct, G.start(R, w, C), G._interacting ? (G.move(ve), G.end(k)) : (G.stop(), G._reflowResolve()), G.removePointer(k, k), Ct;
                })(c, a, I, u, Z);
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
      } } }, jn = rs;
      if (pt.use(dr), pt.use(wi), pt.use(ns), pt.use(qa), pt.use(Ja), pt.use(mi), pt.use(Ca), pt.use(Da), pt.use(jn), pt.default = pt, A(p) === "object" && p) try {
        p.exports = pt;
      } catch {
      }
      return pt.default = pt, pt;
    }));
  })($i, $i.exports)), $i.exports;
}
var q0 = /* @__PURE__ */ H0();
const Mc = /* @__PURE__ */ Pf(q0), Cc = /* @__PURE__ */ Ta({
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
    const y = p, A = l, O = Ji(Of), B = Ji(If);
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
    let V = !1, ge = !1, te = NaN, We = NaN, me = NaN, be = NaN, Ge = -1, Fe = -1, Ue = -1, ze = -1, xe = y.x, Oe = y.y, Ae = y.w, Ne = y.h;
    const D = rt(), Ie = Qi({
      i: i0(y, "i"),
      state: E,
      wrapper: D,
      calcXY: Tt
    });
    function Se(P) {
      Xt(P);
    }
    function Ye() {
      vt();
    }
    function X(P) {
      Jt(y.isDraggable) && (E.draggable = P);
    }
    function ie(P) {
      Jt(y.isResizable) && (E.resizable = P);
    }
    function ee(P) {
      Jt(y.isBounded) && (E.bounded = P);
    }
    function we(P) {
      E.transformScale = P;
    }
    function he(P) {
      E.rowHeight = P;
    }
    function Re(P) {
      E.maxRows = P;
    }
    function se() {
      E.rtl = Ic() === "rtl", vt();
    }
    function Qe(P) {
      E.cols = Math.floor(P);
    }
    O.increaseItem(Ie), pf(() => {
      E.rtl = Ic() === "rtl";
    }), Oa(() => {
      O.responsive && O.lastBreakpoint ? E.cols = Df(O.lastBreakpoint, O.cols) : E.cols = O.colNum, E.rowHeight = O.rowHeight, E.containerWidth = O.width !== null ? O.width : 100, E.margin = O.margin !== void 0 ? O.margin.map(Number) : [10, 10], E.maxRows = O.maxRows, Jt(y.isDraggable) ? E.draggable = O.isDraggable : E.draggable = y.isDraggable, Jt(y.isResizable) ? E.resizable = O.isResizable : E.resizable = y.isResizable, Jt(y.isBounded) ? E.bounded = O.isBounded : E.bounded = y.isBounded, E.transformScale = O.transformScale, E.useCssTransforms = O.useCssTransforms, E.useStyleCursor = O.useStyleCursor, o0(() => {
        xe = y.x, Oe = y.y, Ne = y.h, Ae = y.w, Pt(et);
      }), B.on("updateWidth", Se), B.on("compact", Ye), B.on("setDraggable", X), B.on("setResizable", ie), B.on("setBounded", ee), B.on("setTransformScale", we), B.on("setRowHeight", he), B.on("setMaxRows", Re), B.on("directionchange", se), B.on("setColNum", Qe);
    }), _u(() => {
      B.off("updateWidth", Se), B.off("compact", Ye), B.off("setDraggable", X), B.off("setResizable", ie), B.off("setBounded", ee), B.off("setTransformScale", we), B.off("setRowHeight", he), B.off("setMaxRows", Re), B.off("directionchange", se), B.off("setColNum", Qe), L.value && (L.value.unset(), L.value = null), O.decreaseItem(Ie);
    }), h({ state: E, wrapper: D });
    const Xe = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, Ze = it(() => E.resizable && !y.static), Me = it(() => O.isMirrored ? !E.rtl : E.rtl), Nt = it(() => (E.draggable || E.resizable) && !y.static), ht = P0("item"), zn = it(() => ({
      [ht.b()]: !0,
      [ht.bm("resizable")]: Ze.value,
      [ht.bm("static")]: y.static,
      [ht.bm("resizing")]: E.isResizing,
      [ht.bm("dragging")]: E.isDragging,
      [ht.bm("transform")]: E.useCssTransforms,
      [ht.bm("rtl")]: Me.value,
      [ht.bm("no-touch")]: Xe && Nt.value
    })), lt = it(() => [ht.be("resizer"), Me.value && ht.bem("resizer", "rtl")].filter(Boolean));
    Je(
      () => y.isDraggable,
      (P) => {
        E.draggable = P;
      }
    ), Je(
      () => y.static,
      () => {
        Pt(It), Pt(J);
      }
    ), Je(
      () => E.draggable,
      () => {
        Pt(It);
      }
    ), Je(
      () => y.isResizable,
      (P) => {
        E.resizable = P;
      }
    ), Je(
      () => y.isBounded,
      (P) => {
        E.bounded = P;
      }
    ), Je(
      () => E.resizable,
      () => {
        Pt(J);
      }
    ), Je(
      () => E.rowHeight,
      () => {
        Pt(et), Pt(hn);
      }
    ), Je([() => E.cols, () => E.containerWidth], () => {
      Pt(J), Pt(et), Pt(hn);
    }), Je([() => y.minH, () => y.maxH, () => y.minW, () => y.maxW], () => {
      Pt(J);
    }), Je(Me, () => {
      Pt(J), Pt(et);
    }), Je([() => O.margin, () => O.margin[0], () => O.margin[1]], () => {
      const P = O.margin;
      !P || P[0] === E.margin[0] && P[1] === E.margin[1] || (E.margin = P.map(Number), Pt(et), Pt(hn));
    });
    function et() {
      y.x + y.w > E.cols ? (xe = 0, Ae = y.w > E.cols ? E.cols : y.w) : (xe = y.x, Ae = y.w);
      const P = Gt(xe, Oe, Ae, Ne);
      E.isDragging && (P.top = E.dragging.top, Me.value ? P.right = E.dragging.left : P.left = E.dragging.left), E.isResizing && (P.width = E.resizing.width, P.height = E.resizing.height);
      let Q;
      E.useCssTransforms ? Me.value ? Q = C0(P.top, P.right, P.width, P.height) : Q = M0(P.top, P.left, P.width, P.height) : Me.value ? Q = D0(P.top, P.right, P.width, P.height) : Q = A0(P.top, P.left, P.width, P.height), E.style = Q;
    }
    function hn() {
      const P = {};
      for (const Q of ["width", "height"]) {
        const ne = E.style[Q].match(/^(\d+)px$/);
        if (!ne)
          return;
        P[Q] = ne[1];
      }
      A("container-resized", y.i, y.h, y.w, P.height, P.width);
    }
    function wt(P) {
      if (y.static) return;
      const Q = P.type;
      if (Q === "resizestart" && E.isResizing || Q !== "resizestart" && !E.isResizing)
        return;
      const ne = Tc(P);
      if (Jt(ne)) return;
      const { x: le, y: ce } = ne, ae = { width: 0, height: 0 };
      let oe;
      switch (Q) {
        case "resizestart": {
          J(), Ge = Ae, Fe = Ne, oe = Gt(xe, Oe, Ae, Ne), ae.width = oe.width, ae.height = oe.height, E.resizing = ae, E.isResizing = !0;
          break;
        }
        case "resizemove": {
          !P.edges.right && !P.edges.left && (me = le), !P.edges.top && !P.edges.bottom && (be = ce);
          const tt = Oc(me, be, le, ce);
          Me.value ? ae.width = E.resizing.width - tt.deltaX / E.transformScale : ae.width = E.resizing.width + tt.deltaX / E.transformScale, ae.height = E.resizing.height + tt.deltaY / E.transformScale, E.resizing = ae;
          break;
        }
        case "resizeend": {
          oe = Gt(xe, Oe, Ae, Ne), ae.width = oe.width, ae.height = oe.height, E.resizing = { width: -1, height: -1 }, E.isResizing = !1;
          break;
        }
      }
      oe = Ot(ae.height, ae.width), oe.w < y.minW && (oe.w = y.minW), oe.w > y.maxW && (oe.w = y.maxW), oe.h < y.minH && (oe.h = y.minH), oe.h > y.maxH && (oe.h = y.maxH), oe.h < 1 && (oe.h = 1), oe.w < 1 && (oe.w = 1), me = le, be = ce, (Ae !== oe.w || Ne !== oe.h) && A("resize", y.i, oe.h, oe.w, ae.height, ae.width), P.type === "resizeend" && (Ge !== Ae || Fe !== Ne) && A("resized", y.i, oe.h, oe.w, ae.height, ae.width), B.emit("resizeEvent", P.type, y.i, xe, Oe, oe.h, oe.w);
    }
    function j(P) {
      if (y.static || E.isResizing) return;
      const Q = P.type;
      if (Q === "dragstart" && E.isDragging || Q !== "dragstart" && !E.isDragging)
        return;
      const ne = Tc(P);
      if (Jt(ne)) return;
      const { x: le, y: ce } = ne, ae = P.target;
      if (!ae.offsetParent) return;
      const oe = { top: 0, left: 0 };
      switch (Q) {
        case "dragstart": {
          Ue = xe, ze = Oe;
          const ct = ae.offsetParent.getBoundingClientRect(), mt = ae.getBoundingClientRect(), en = mt.left / E.transformScale, tn = ct.left / E.transformScale, nn = mt.right / E.transformScale, _n = ct.right / E.transformScale, Sn = mt.top / E.transformScale, pn = ct.top / E.transformScale;
          Me.value ? oe.left = (nn - _n) * -1 : oe.left = en - tn, oe.top = Sn - pn, E.dragging = oe, E.isDragging = !0;
          break;
        }
        case "dragmove": {
          const ct = Oc(te, We, le, ce);
          if (Me.value ? oe.left = E.dragging.left - ct.deltaX / E.transformScale : oe.left = E.dragging.left + ct.deltaX / E.transformScale, oe.top = E.dragging.top + ct.deltaY / E.transformScale, E.bounded) {
            const mt = ae.offsetParent.clientHeight - Qt(y.h, E.rowHeight, E.margin[1]);
            oe.top = at(oe.top, 0, mt);
            const en = _t(), tn = E.containerWidth - Qt(y.w, en, E.margin[0]);
            oe.left = at(oe.left, 0, tn);
          }
          E.dragging = oe;
          break;
        }
        case "dragend": {
          const ct = ae.offsetParent.getBoundingClientRect(), mt = ae.getBoundingClientRect(), en = mt.left / E.transformScale, tn = ct.left / E.transformScale, nn = mt.right / E.transformScale, _n = ct.right / E.transformScale, Sn = mt.top / E.transformScale, pn = ct.top / E.transformScale;
          Me.value ? oe.left = (nn - _n) * -1 : oe.left = en - tn, oe.top = Sn - pn, E.dragging = { top: -1, left: -1 }, E.isDragging = !1;
          break;
        }
      }
      let tt;
      Me.value, tt = Tt(oe.top, oe.left), te = le, We = ce, (xe !== tt.x || Oe !== tt.y) && A("move", y.i, tt.x, tt.y), P.type === "dragend" && (Ue !== xe || ze !== Oe) && A("moved", y.i, tt.x, tt.y), B.emit("dragEvent", P.type, y.i, tt.x, tt.y, Ne, Ae);
    }
    function Gt(P, Q, ne, le) {
      const ce = _t();
      let ae;
      return Me.value ? ae = {
        right: Math.round(ce * P + (P + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * Q + (Q + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ne === 1 / 0 ? ne : Math.round(ce * ne + Math.max(0, ne - 1) * E.margin[0]),
        height: le === 1 / 0 ? le : Math.round(E.rowHeight * le + Math.max(0, le - 1) * E.margin[1])
      } : ae = {
        left: Math.round(ce * P + (P + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * Q + (Q + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ne === 1 / 0 ? ne : Math.round(ce * ne + Math.max(0, ne - 1) * E.margin[0]),
        height: le === 1 / 0 ? le : Math.round(E.rowHeight * le + Math.max(0, le - 1) * E.margin[1])
      }, ae;
    }
    function Tt(P, Q) {
      const ne = _t();
      let le = Math.round((Q - E.margin[0]) / (ne + E.margin[0])), ce = Math.round((P - E.margin[1]) / (E.rowHeight + E.margin[1]));
      return le = Math.max(Math.min(le, E.cols - Ae), 0), ce = Math.max(Math.min(ce, E.maxRows - Ne), 0), { x: le, y: ce };
    }
    function _t() {
      return (E.containerWidth - E.margin[0] * (E.cols + 1)) / E.cols;
    }
    function Qt(P, Q, ne) {
      return Number.isFinite(P) ? Math.round(Q * P + Math.max(0, P - 1) * ne) : P;
    }
    function at(P, Q, ne) {
      return Math.max(Math.min(P, ne), Q);
    }
    function Ot(P, Q, ne = !1) {
      const le = _t();
      let ce = Math.round((Q + E.margin[0]) / (le + E.margin[0])), ae = 0;
      return ne ? ae = Math.ceil((P + E.margin[1]) / (E.rowHeight + E.margin[1])) : ae = Math.round((P + E.margin[1]) / (E.rowHeight + E.margin[1])), ce = Math.max(Math.min(ce, E.cols - xe), 0), ae = Math.max(Math.min(ae, E.maxRows - Oe), 0), { w: ce, h: ae };
    }
    function Xt(P, Q) {
      E.containerWidth = P;
    }
    function vt() {
      et();
    }
    function $t() {
      !L.value && D.value && (L.value = Mc(D.value), E.useStyleCursor || L.value.styleCursor(!1));
    }
    const sr = _c(j);
    function It() {
      if ($t(), !!L.value)
        if (E.draggable && !y.static) {
          const P = {
            ignoreFrom: y.dragIgnoreFrom,
            allowFrom: y.dragAllowFrom,
            ...y.dragOption
          };
          L.value.draggable(P), V || (V = !0, L.value.on("dragstart dragmove dragend", (Q) => {
            Q.type === "dragmove" ? sr(Q) : j(Q);
          }));
        } else
          L.value.draggable({ enabled: !1 });
    }
    const $ = _c(wt);
    function J() {
      if ($t(), !!L.value)
        if (E.resizable && !y.static) {
          const P = Gt(0, 0, y.maxW, y.maxH), Q = Gt(0, 0, y.minW, y.minH), ne = {
            edges: {
              left: Me.value ? `.${lt.value[0]}` : !1,
              right: Me.value ? !1 : `.${lt.value[0]}`,
              bottom: `.${lt.value[0]}`,
              top: !1
            },
            ignoreFrom: y.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: Q.height * E.transformScale,
                width: Q.width * E.transformScale
              },
              max: {
                height: P.height * E.transformScale,
                width: P.width * E.transformScale
              }
            },
            ...y.resizeOption
          };
          y.preserveAspectRatio && (ne.modifiers = [Mc.modifiers.aspectRatio({ ratio: "preserve" })]), L.value.resizable(ne), ge || (ge = !0, L.value.on("resizestart resizemove resizeend", (le) => {
            le.type === "resizemove" ? $(le) : wt(le);
          }));
        } else
          L.value.resizable({ enabled: !1 });
    }
    return (P, Q) => (Ft(), ar("section", {
      ref_key: "wrapper",
      ref: D,
      class: gc(zn.value),
      style: Ki(E.style)
    }, [
      gu(P.$slots, "default"),
      Ze.value ? (Ft(), ar("span", {
        key: 0,
        class: gc(lt.value)
      }, null, 2)) : vu("", !0)
    ], 6));
  }
}), Ar = typeof window < "u";
var Ac;
Ar && (Ac = window?.navigator) != null && Ac.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Dc(p) {
  return p != null;
}
function zc() {
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
  const { type: y, bubbles: A = !1, cancelable: O = !1, ...B } = h;
  if (!Dc(y) || y === "") return !1;
  let L;
  return Dc(l) ? L = new l(y, { bubbles: A, cancelable: O }) : (L = document.createEvent("HTMLEvents"), L.initEvent(y, A, O)), Object.assign(L, B), p.dispatchEvent(L);
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
it(() => !1);
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
var Mr = [], ey = function() {
  return Mr.some(function(p) {
    return p.activeTargets.length > 0;
  });
}, ty = function() {
  return Mr.some(function(p) {
    return p.skippedTargets.length > 0;
  });
}, Pc = "ResizeObserver loop completed with undelivered notifications.", ny = function() {
  var p;
  typeof ErrorEvent == "function" ? p = new ErrorEvent("error", {
    message: Pc
  }) : (p = document.createEvent("Event"), p.initEvent("error", !1, !1), p.message = Pc), window.dispatchEvent(p);
}, eo;
(function(p) {
  p.BORDER_BOX = "border-box", p.CONTENT_BOX = "content-box", p.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(eo || (eo = {}));
var Cr = function(p) {
  return Object.freeze(p);
}, ry = /* @__PURE__ */ (function() {
  function p(h, l) {
    this.inlineSize = h, this.blockSize = l, Cr(this);
  }
  return p;
})(), kf = (function() {
  function p(h, l, y, A) {
    return this.x = h, this.y = l, this.width = y, this.height = A, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Cr(this);
  }
  return p.prototype.toJSON = function() {
    var h = this, l = h.x, y = h.y, A = h.top, O = h.right, B = h.bottom, L = h.left, E = h.width, V = h.height;
    return { x: l, y, top: A, right: O, bottom: B, left: L, width: E, height: V };
  }, p.fromRect = function(h) {
    return new p(h.x, h.y, h.width, h.height);
  }, p;
})(), Su = function(p) {
  return p instanceof SVGElement && "getBBox" in p;
}, Ff = function(p) {
  if (Su(p)) {
    var h = p.getBBox(), l = h.width, y = h.height;
    return !l && !y;
  }
  var A = p, O = A.offsetWidth, B = A.offsetHeight;
  return !(O || B || p.getClientRects().length);
}, Lc = function(p) {
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
}, ji = typeof window < "u" ? window : {}, va = /* @__PURE__ */ new WeakMap(), kc = /auto|scroll/, oy = /^tb|vertical/, ay = /msie|trident/i.test(ji.navigator && ji.navigator.userAgent), An = function(p) {
  return parseFloat(p || "0");
}, oi = function(p, h, l) {
  return p === void 0 && (p = 0), h === void 0 && (h = 0), l === void 0 && (l = !1), new ry((l ? h : p) || 0, (l ? p : h) || 0);
}, Fc = Cr({
  devicePixelContentBoxSize: oi(),
  borderBoxSize: oi(),
  contentBoxSize: oi(),
  contentRect: new kf(0, 0, 0, 0)
}), Nf = function(p, h) {
  if (h === void 0 && (h = !1), va.has(p) && !h)
    return va.get(p);
  if (Ff(p))
    return va.set(p, Fc), Fc;
  var l = getComputedStyle(p), y = Su(p) && p.ownerSVGElement && p.getBBox(), A = !ay && l.boxSizing === "border-box", O = oy.test(l.writingMode || ""), B = !y && kc.test(l.overflowY || ""), L = !y && kc.test(l.overflowX || ""), E = y ? 0 : An(l.paddingTop), V = y ? 0 : An(l.paddingRight), ge = y ? 0 : An(l.paddingBottom), te = y ? 0 : An(l.paddingLeft), We = y ? 0 : An(l.borderTopWidth), me = y ? 0 : An(l.borderRightWidth), be = y ? 0 : An(l.borderBottomWidth), Ge = y ? 0 : An(l.borderLeftWidth), Fe = te + V, Ue = E + ge, ze = Ge + me, xe = We + be, Oe = L ? p.offsetHeight - xe - p.clientHeight : 0, Ae = B ? p.offsetWidth - ze - p.clientWidth : 0, Ne = A ? Fe + ze : 0, D = A ? Ue + xe : 0, Ie = y ? y.width : An(l.width) - Ne - Ae, Se = y ? y.height : An(l.height) - D - Oe, Ye = Ie + Fe + Ae + ze, X = Se + Ue + Oe + xe, ie = Cr({
    devicePixelContentBoxSize: oi(Math.round(Ie * devicePixelRatio), Math.round(Se * devicePixelRatio), O),
    borderBoxSize: oi(Ye, X, O),
    contentBoxSize: oi(Ie, Se, O),
    contentRect: new kf(te, E, Ie, Se)
  });
  return va.set(p, ie), ie;
}, Bf = function(p, h, l) {
  var y = Nf(p, l), A = y.borderBoxSize, O = y.contentBoxSize, B = y.devicePixelContentBoxSize;
  switch (h) {
    case eo.DEVICE_PIXEL_CONTENT_BOX:
      return B;
    case eo.BORDER_BOX:
      return A;
    default:
      return O;
  }
}, sy = /* @__PURE__ */ (function() {
  function p(h) {
    var l = Nf(h);
    this.target = h, this.contentRect = l.contentRect, this.borderBoxSize = Cr([l.borderBoxSize]), this.contentBoxSize = Cr([l.contentBoxSize]), this.devicePixelContentBoxSize = Cr([l.devicePixelContentBoxSize]);
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
  Mr.forEach(function(O) {
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
    var A = y[l];
    A();
  }
  return p;
}, Nc = function(p) {
  Mr.forEach(function(h) {
    h.activeTargets.splice(0, h.activeTargets.length), h.skippedTargets.splice(0, h.skippedTargets.length), h.observationTargets.forEach(function(l) {
      l.isActive() && (Wf(l.target) > p ? h.activeTargets.push(l) : h.skippedTargets.push(l));
    });
  });
}, ly = function() {
  var p = 0;
  for (Nc(p); ey(); )
    p = uy(), Nc(p);
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
}, py = 250, gy = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Bc = [
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
], Wc = function(p) {
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
      var y = Wc(h);
      dy(function() {
        var A = !1;
        try {
          A = ly();
        } finally {
          if (Js = !1, h = y - Wc(), !hy())
            return;
          A ? l.run(1e3) : h > 0 ? l.run(h) : l.start();
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
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Bc.forEach(function(l) {
      return ji.addEventListener(l, h.listener, !0);
    }));
  }, p.prototype.stop = function() {
    var h = this;
    this.stopped || (this.observer && this.observer.disconnect(), Bc.forEach(function(l) {
      return ji.removeEventListener(l, h.listener, !0);
    }), this.stopped = !0);
  }, p;
})(), wu = new vy(), Uc = function(p) {
  !_a && p > 0 && wu.start(), _a += p, !_a && wu.stop();
}, my = function(p) {
  return !Su(p) && !iy(p) && getComputedStyle(p).display === "inline";
}, yy = (function() {
  function p(h, l) {
    this.target = h, this.observedBox = l || eo.CONTENT_BOX, this.lastReportedSize = {
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
})(), ma = /* @__PURE__ */ new WeakMap(), Hc = function(p, h) {
  for (var l = 0; l < p.length; l += 1)
    if (p[l].target === h)
      return l;
  return -1;
}, ya = (function() {
  function p() {
  }
  return p.connect = function(h, l) {
    var y = new by(h, l);
    ma.set(h, y);
  }, p.observe = function(h, l, y) {
    var A = ma.get(h), O = A.observationTargets.length === 0;
    Hc(A.observationTargets, l) < 0 && (O && Mr.push(A), A.observationTargets.push(new yy(l, y && y.box)), Uc(1), wu.schedule());
  }, p.unobserve = function(h, l) {
    var y = ma.get(h), A = Hc(y.observationTargets, l), O = y.observationTargets.length === 1;
    A >= 0 && (O && Mr.splice(Mr.indexOf(y), 1), y.observationTargets.splice(A, 1), Uc(-1));
  }, p.disconnect = function(h) {
    var l = this, y = ma.get(h);
    y.observationTargets.slice().forEach(function(A) {
      return l.unobserve(h, A.target);
    }), y.activeTargets.splice(0, y.activeTargets.length);
  }, p;
})(), xy = (function() {
  function p(h) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof h != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ya.connect(this, h);
  }
  return p.prototype.observe = function(h, l) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lc(h))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ya.observe(this, h, l);
  }, p.prototype.unobserve = function(h) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Lc(h))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ya.unobserve(this, h);
  }, p.prototype.disconnect = function() {
    ya.disconnect(this);
  }, p.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, p;
})();
const Ea = /* @__PURE__ */ new WeakMap();
function wy(p) {
  var h;
  for (let l = 0, y = p.length; l < y; ++l) {
    const A = p[l], O = Ea.get(A.target);
    if (typeof O == "function") {
      const { inlineSize: B, blockSize: L } = ((h = A.borderBoxSize) == null ? void 0 : h[0]) ?? {}, { offsetWidth: E, offsetHeight: V } = A.target;
      O(
        Object.assign(A, {
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
function qc(p, h) {
  Ea.set(p, h), Hf.observe(p);
}
function Gc(p) {
  Ea.has(p) && (Hf.unobserve(p), Ea.delete(p));
}
function _y(p = {}) {
  let h = zc;
  const l = Je(
    () => Dn(p.target),
    (A) => {
      h(), !(!A || typeof p.onResize != "function") && (qc(A, p.onResize), h = () => {
        Gc(A), h = zc;
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
    observeResize: qc,
    /**
     * @deprecated Will be removed in next major version, please directly use `unobserveResize` from imports.
     */
    unobserveResize: Gc,
    unobserve: y
  };
}
const Sy = rt(!1);
it(() => Sy.value);
const Xc = "__theme_style__", Qs = "__theme_observer__", $c = Qi(/* @__PURE__ */ new Map()), Yc = /* @__PURE__ */ new Map();
Je($c, () => {
  if (!Ar) return;
  Yc.clear();
  const p = document.head.querySelector(`#${Xc}`);
  p && document.head.removeChild(p);
  const h = document.createElement("style");
  let l = `.${Qs} { width: 1px }`, y = 1;
  for (const [A, [O, B]] of $c.entries())
    l += ` html.${O} .${Qs}, .${B} .${Qs} { width: ${++y}px }`, Yc.set(y, A);
  h.textContent = l, h.id = Xc, document.head.appendChild(h);
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
    const y = p, A = l, O = Qi({
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
    }), B = /* @__PURE__ */ new Map(), L = rt(y.layout), E = rt(), { observeResize: V, unobserveResize: ge } = _y(), te = _0();
    te.on("resizeEvent", We), te.on("dragEvent", me), pf(() => {
      A("layout-before-mount", L.value);
    }), Oa(() => {
      A("layout-mounted", L.value), kt(() => {
        z0(L.value), O.originalLayout = L.value, kt(() => {
          Se(), E.value && V(E.value, S0(xe, 16)), ri(L.value, y.verticalCompact), A("layout-updated", L.value), ze(), xe();
        });
      });
    }), _u(() => {
      te.clearAll(), E.value && ge(E.value);
    });
    function We(X, ie, ee, we, he, Re) {
      D(X, ie, ee, we, he, Re);
    }
    function me(X, ie, ee, we, he, Re) {
      Ne(X, ie, ee, we, he, Re);
    }
    Je(
      () => O.width,
      (X, ie) => {
        kt(() => {
          te.emit("updateWidth", X), ie === -1 && kt(() => {
            A("layout-ready", L.value);
          }), ze();
        });
      }
    ), Je(
      () => [y.layout, y.layout.length],
      () => {
        L.value = y.layout, Ue();
      }
    ), Je(
      () => y.colNum,
      (X) => {
        te.emit("setColNum", X);
      }
    ), Je(
      () => y.rowHeight,
      (X) => {
        te.emit("setRowHeight", X);
      }
    ), Je(
      () => y.isDraggable,
      (X) => {
        te.emit("setDraggable", X);
      }
    ), Je(
      () => y.isResizable,
      (X) => {
        te.emit("setResizable", X);
      }
    ), Je(
      () => y.isBounded,
      (X) => {
        te.emit("setBounded", X);
      }
    ), Je(
      () => y.transformScale,
      (X) => {
        te.emit("setTransformScale", X);
      }
    ), Je(
      () => y.responsive,
      (X) => {
        X || (A("update:layout", O.originalLayout), te.emit("setColNum", y.colNum)), xe();
      }
    ), Je(
      () => y.maxRows,
      (X) => {
        te.emit("setMaxRows", X);
      }
    ), Je([() => y.margin, () => y.margin[1]], ze), vc(
      Of,
      Qi({
        ...mc(y),
        ...mc(O),
        increaseItem: be,
        decreaseItem: Ge
      })
    ), vc(If, te), h({ state: O, getItem: Fe, resizeEvent: D, dragEvent: Ne, layoutUpdate: Ue });
    function be(X) {
      B.set(X.i, X);
    }
    function Ge(X) {
      B.delete(X.i);
    }
    function Fe(X) {
      return B.get(X);
    }
    function Ue() {
      if (!Jt(L.value) && !Jt(O.originalLayout)) {
        if (L.value.length !== O.originalLayout.length) {
          const X = Ye(L.value, O.originalLayout);
          if (X.length > 0)
            if (L.value.length > O.originalLayout.length)
              O.originalLayout = O.originalLayout.concat(X);
            else {
              const ie = new Set(X.map((ee) => ee.i));
              O.originalLayout = O.originalLayout.filter((ee) => !ie.has(ee.i));
            }
          O.lastLayoutLength = L.value.length, Se();
        }
        ri(L.value, y.verticalCompact), te.emit("updateWidth", O.width), ze(), A("layout-updated", L.value);
      }
    }
    function ze() {
      O.mergedStyle = {
        height: Oe()
      };
    }
    function xe() {
      E.value && (O.width = E.value.offsetWidth), te.emit("resizeEvent");
    }
    function Oe() {
      if (!y.autoSize) return;
      const X = parseFloat(y.margin[1]);
      return T0(L.value) * (y.rowHeight + X) + X + "px";
    }
    let Ae;
    function Ne(X, ie, ee, we, he, Re) {
      let se = Sc(L.value, ie);
      Jt(se) && (se = { h: 0, w: 0, x: 0, y: 0, i: "" }), X === "dragstart" && !y.verticalCompact && (Ae = L.value.reduce(
        (Qe, { i: Xe, x: Ze, y: Me }) => ({
          ...Qe,
          [Xe]: { x: Ze, y: Me }
        }),
        {}
      )), X === "dragmove" || X === "dragstart" ? (O.placeholder.i = ie, O.placeholder.x = se.x, O.placeholder.y = se.y, O.placeholder.w = Re, O.placeholder.h = he, kt(() => {
        O.isDragging = !0;
      }), te.emit("updateWidth", O.width)) : kt(() => {
        O.isDragging = !1;
      }), L.value = xu(L.value, se, ee, we, !0, y.preventCollision), y.restoreOnDrag ? (se.static = !0, ri(L.value, y.verticalCompact, Ae), se.static = !1) : ri(L.value, y.verticalCompact), te.emit("compact"), ze(), X === "dragend" && (Ae = void 0, A("layout-updated", L.value));
    }
    function D(X, ie, ee, we, he, Re) {
      let se = Sc(L.value, ie);
      Jt(se) && (se = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let Qe;
      if (y.preventCollision) {
        const Xe = Mf(L.value, { ...se, w: Re, h: he }).filter(
          (Ze) => Ze.i !== se.i
        );
        if (Qe = Xe.length > 0, Qe) {
          let Ze = 1 / 0, Me = 1 / 0;
          Xe.forEach((Nt) => {
            Nt.x > se.x && (Ze = Math.min(Ze, Nt.x)), Nt.y > se.y && (Me = Math.min(Me, Nt.y));
          }), Number.isFinite(Ze) && (se.w = Ze - se.x), Number.isFinite(Me) && (se.h = Me - se.y);
        }
      }
      Qe || (se.w = Re, se.h = he), X === "resizestart" || X === "resizemove" ? (O.placeholder.i = ie, O.placeholder.x = ee, O.placeholder.y = we, O.placeholder.w = se.w, O.placeholder.h = se.h, kt(() => {
        O.isDragging = !0;
      }), te.emit("updateWidth", O.width)) : X && kt(() => {
        O.isDragging = !1;
      }), y.responsive && Ie(), ri(L.value, y.verticalCompact), te.emit("compact"), ze(), X === "resizeend" && A("layout-updated", L.value);
    }
    function Ie() {
      const X = F0(y.breakpoints, O.width);
      if (X === O.lastBreakpoint)
        return;
      const ie = Df(X, y.cols);
      !Jt(O.lastBreakpoint) && !O.layouts[O.lastBreakpoint] && (O.layouts[O.lastBreakpoint] = bu(L.value));
      const ee = N0(
        O.originalLayout,
        O.layouts,
        y.breakpoints,
        X,
        O.lastBreakpoint,
        ie,
        y.verticalCompact
      );
      O.layouts[X] = ee, O.lastBreakpoint !== X && A("breakpoint-changed", X, ee), L.value = ee, A("update:layout", ee), O.lastBreakpoint = X, te.emit("setColNum", ie);
    }
    function Se() {
      O.layouts = Object.assign({}, y.responsiveLayouts);
    }
    function Ye(X, ie) {
      const ee = new Set(ie.map((se) => se.i)), we = new Set(X.map((se) => se.i)), he = X.filter((se) => !ee.has(se.i)), Re = ie.filter((se) => !we.has(se.i));
      return he.concat(Re);
    }
    return (X, ie) => (Ft(), ar("div", {
      ref_key: "wrapper",
      ref: E,
      class: "vgl-layout",
      style: Ki(O.mergedStyle)
    }, [
      X.$slots.default ? gu(X.$slots, "default", { key: 0 }) : (Ft(!0), ar(u0, { key: 1 }, l0(L.value, (ee) => (Ft(), Rr(Cc, c0({
        key: ee.i,
        ref_for: !0
      }, ee), {
        default: ir(() => [
          gu(X.$slots, "item", { item: ee })
        ]),
        _: 2
      }, 1040))), 128)),
      gf(ba(Cc, {
        class: "vgl-item--placeholder",
        x: O.placeholder.x,
        y: O.placeholder.y,
        w: O.placeholder.w,
        h: O.placeholder.h,
        i: O.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [vf, O.isDragging]
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
const Kc = {
  rowHeight: 30,
  cols: { lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }
}, ii = { lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 };
function Gf(p) {
  const h = Sa(p);
  return {
    rowHeight: h.rowHeight ?? Kc.rowHeight,
    cols: { ...Kc.cols, ...Sa(h.cols) }
  };
}
const Ey = {
  key: 1,
  class: "text"
}, Ty = /* @__PURE__ */ Ta({
  __name: "View",
  props: {
    pageId: {},
    layoutSettings: {}
  },
  setup(p) {
    const h = p, l = rt(void 0), y = it(() => Gf(l.value)), A = it(() => y.value.cols), O = it(() => y.value.rowHeight), B = it(() => `${O.value}-${Object.values(A.value).join("-")}`), L = xf(), E = h.pageId ?? L.params.pageid ?? "", V = rt([]), ge = rt([]);
    let te = null, We = null;
    const me = Ji(h0.TINY_EMITTER), be = Ji(wf) ?? null;
    function Ge() {
      if (be && E) {
        const D = be.getPage(E);
        l.value = D?.layoutSettings ? { ...Sa(D.layoutSettings) } : void 0;
      }
    }
    Oa(async () => {
      console.log("Grid View component mounted for page:", E), Ge(), be && "subscribe" in be && be.subscribe((Ie) => {
        Ie === "PAGE_UPDATE" && Ge();
      }), await kt();
      const D = () => {
        try {
          return te = mf(E), We = yf(E), V.value = te.widgets, ge.value = We.layout, console.log("Grid View stores initialized successfully, widgets:", V.value.length), !0;
        } catch (Ie) {
          return console.error("Error initializing Grid View stores:", Ie), !1;
        }
      };
      D() ? (await kt(), Fe()) : setTimeout(() => {
        D() ? Fe() : console.error("Failed to initialize Grid View stores after retry");
      }, 100);
    });
    const Fe = () => {
      console.log("📄 Emitting system:pageLoaded for page:", E), me.emit("system:pageLoaded", { pageId: E });
    }, Ue = rt(), ze = rt();
    function xe(D, Ie) {
      const Se = Number(D);
      return Number.isFinite(Se) ? Se : Ie;
    }
    function Oe() {
      return { colW: 1200 / A.value.md, rowH: O.value };
    }
    function Ae(D) {
      const { colW: Ie, rowH: Se } = Oe(), Ye = xe(D.x, 0), X = xe(D.y, 0), ie = xe(D.width, Ie), ee = xe(D.height, Se);
      return {
        i: String(D.id ?? D.i ?? ""),
        x: Math.round(Ye / Ie),
        y: Math.round(X / Se),
        w: Math.max(1, Math.round(ie / Ie)),
        h: Math.max(1, Math.round(ee / Se)),
        static: !1
      };
    }
    let Ne = it(() => (ge.value || []).map(Ae));
    return (D, Ie) => {
      const Se = mu("VaScrollContainer");
      return Ft(), Rr(Se, {
        class: "max-h-screen ml-15",
        vertical: ""
      }, {
        default: ir(() => [
          xa("div", {
            ref_key: "wrapper",
            ref: ze,
            class: "view_grid_layout"
          }, [
            (Ft(), Rr(Dn(qf), {
              ref_key: "gridLayout",
              ref: Ue,
              key: B.value,
              layout: Dn(Ne),
              "onUpdate:layout": Ie[0] || (Ie[0] = (Ye) => f0(Ne) ? Ne.value = Ye : Ne = Ye),
              "row-height": O.value,
              responsive: !0,
              "vertical-compact": !1,
              breakpoints: Dn(ii),
              cols: A.value,
              "is-draggable": !1,
              "is-resizable": !1
            }, {
              item: ir(({ item: Ye }) => [
                V.value?.find((X) => X.uid === Ye.i) ? (Ft(), Rr(Dn(bf), {
                  key: 0,
                  widget: V.value.find((X) => X.uid === Ye.i),
                  ref: `${Ye.i}_wrapper`,
                  editEnabled: !1
                }, null, 8, ["widget"])) : (Ft(), ar("span", Ey, yu(`${Ye.i}${Ye.static ? "- Static" : ""}`), 1))
              ]),
              _: 1
            }, 8, ["layout", "row-height", "breakpoints", "cols"]))
          ], 512)
        ]),
        _: 1
      });
    };
  }
}), Xf = (p, h) => {
  const l = p.__vccOpts || p;
  for (const [y, A] of h)
    l[y] = A;
  return l;
}, Oy = /* @__PURE__ */ Xf(Ty, [["__scopeId", "data-v-77091a3b"]]);
var Yi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Iy = Yi.exports, Vc;
function Ry() {
  return Vc || (Vc = 1, (function(p, h) {
    (function() {
      var l, y = "4.17.21", A = 200, O = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", B = "Expected a function", L = "Invalid `variable` option passed into `_.template`", E = "__lodash_hash_undefined__", V = 500, ge = "__lodash_placeholder__", te = 1, We = 2, me = 4, be = 1, Ge = 2, Fe = 1, Ue = 2, ze = 4, xe = 8, Oe = 16, Ae = 32, Ne = 64, D = 128, Ie = 256, Se = 512, Ye = 30, X = "...", ie = 800, ee = 16, we = 1, he = 2, Re = 3, se = 1 / 0, Qe = 9007199254740991, Xe = 17976931348623157e292, Ze = NaN, Me = 4294967295, Nt = Me - 1, ht = Me >>> 1, zn = [
        ["ary", D],
        ["bind", Fe],
        ["bindKey", Ue],
        ["curry", xe],
        ["curryRight", Oe],
        ["flip", Se],
        ["partial", Ae],
        ["partialRight", Ne],
        ["rearg", Ie]
      ], lt = "[object Arguments]", et = "[object Array]", hn = "[object AsyncFunction]", wt = "[object Boolean]", j = "[object Date]", Gt = "[object DOMException]", Tt = "[object Error]", _t = "[object Function]", Qt = "[object GeneratorFunction]", at = "[object Map]", Ot = "[object Number]", Xt = "[object Null]", vt = "[object Object]", $t = "[object Promise]", sr = "[object Proxy]", It = "[object RegExp]", $ = "[object Set]", J = "[object String]", P = "[object Symbol]", Q = "[object Undefined]", ne = "[object WeakMap]", le = "[object WeakSet]", ce = "[object ArrayBuffer]", ae = "[object DataView]", oe = "[object Float32Array]", tt = "[object Float64Array]", ct = "[object Int8Array]", mt = "[object Int16Array]", en = "[object Int32Array]", tn = "[object Uint8Array]", nn = "[object Uint8ClampedArray]", _n = "[object Uint16Array]", Sn = "[object Uint32Array]", pn = /\b__p \+= '';/g, ur = /\b(__p \+=) '' \+/g, Yn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ai = /&(?:amp|lt|gt|quot|#39);/g, Dr = /[&<>"']/g, to = RegExp(ai.source), si = RegExp(Dr.source), ui = /<%-([\s\S]+?)%>/g, no = /<%([\s\S]+?)%>/g, li = /<%=([\s\S]+?)%>/g, Ia = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ci = /^\w*$/, fi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, di = /[\\^$.*+?()[\]{}|]/g, Ra = RegExp(di.source), zr = /^\s+/, gn = /\s/, Pn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, vn = /\{\n\/\* \[wrapped with (.+)\] \*/, Ma = /,? & /, Ca = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ro = /[()=,{}\[\]\/\s]/, En = /\\(\\)?/g, pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hi = /\w*$/, io = /^[-+]0x[0-9a-f]+$/i, Aa = /^0b[01]+$/i, Da = /^\[object .+?Constructor\]$/, lr = /^0o[0-7]+$/i, pi = /^(?:0|[1-9]\d*)$/, za = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Pr = /($^)/, Pa = /['\n\r\u2028\u2029\\]/g, cr = "\\ud800-\\udfff", La = "\\u0300-\\u036f", oo = "\\ufe20-\\ufe2f", ao = "\\u20d0-\\u20ff", fr = La + oo + ao, gi = "\\u2700-\\u27bf", Lr = "a-z\\xdf-\\xf6\\xf8-\\xff", so = "\\xac\\xb1\\xd7\\xf7", ka = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", vi = "\\u2000-\\u206f", Fa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", kr = "A-Z\\xc0-\\xd6\\xd8-\\xde", uo = "\\ufe0e\\ufe0f", lo = so + ka + vi + Fa, mi = "['’]", Na = "[" + cr + "]", co = "[" + lo + "]", dr = "[" + fr + "]", hr = "\\d+", Kn = "[" + gi + "]", Fr = "[" + Lr + "]", pr = "[^" + cr + lo + hr + gi + Lr + kr + "]", rn = "\\ud83c[\\udffb-\\udfff]", gr = "(?:" + dr + "|" + rn + ")", fo = "[^" + cr + "]", Nr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Br = "[\\ud800-\\udbff][\\udc00-\\udfff]", Tn = "[" + kr + "]", ho = "\\u200d", po = "(?:" + Fr + "|" + pr + ")", go = "(?:" + Tn + "|" + pr + ")", vo = "(?:" + mi + "(?:d|ll|m|re|s|t|ve))?", mo = "(?:" + mi + "(?:D|LL|M|RE|S|T|VE))?", yi = gr + "?", bi = "[" + uo + "]?", Ba = "(?:" + ho + "(?:" + [fo, Nr, Br].join("|") + ")" + bi + yi + ")*", xi = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Wa = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wi = bi + yi + Ba, Ua = "(?:" + [Kn, Nr, Br].join("|") + ")" + wi, Wr = "(?:" + [fo + dr + "?", dr, Nr, Br, Na].join("|") + ")", Ha = RegExp(mi, "g"), yo = RegExp(dr, "g"), Ur = RegExp(rn + "(?=" + rn + ")|" + Wr + wi, "g"), qa = RegExp([
        Tn + "?" + Fr + "+" + vo + "(?=" + [co, Tn, "$"].join("|") + ")",
        go + "+" + mo + "(?=" + [co, Tn + po, "$"].join("|") + ")",
        Tn + "?" + po + "+" + vo,
        Tn + "+" + mo,
        Wa,
        xi,
        hr,
        Ua
      ].join("|"), "g"), bo = RegExp("[" + ho + cr + fr + uo + "]"), xo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ga = [
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
      ], vr = -1, He = {};
      He[oe] = He[tt] = He[ct] = He[mt] = He[en] = He[tn] = He[nn] = He[_n] = He[Sn] = !0, He[lt] = He[et] = He[ce] = He[wt] = He[ae] = He[j] = He[Tt] = He[_t] = He[at] = He[Ot] = He[vt] = He[It] = He[$] = He[J] = He[ne] = !1;
      var Ke = {};
      Ke[lt] = Ke[et] = Ke[ce] = Ke[ae] = Ke[wt] = Ke[j] = Ke[oe] = Ke[tt] = Ke[ct] = Ke[mt] = Ke[en] = Ke[at] = Ke[Ot] = Ke[vt] = Ke[It] = Ke[$] = Ke[J] = Ke[P] = Ke[tn] = Ke[nn] = Ke[_n] = Ke[Sn] = !0, Ke[Tt] = Ke[_t] = Ke[ne] = !1;
      var _i = {
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
      }, wo = {
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
      }, Si = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, _o = parseFloat, So = parseInt, Hr = typeof or == "object" && or && or.Object === Object && or, $a = typeof self == "object" && self && self.Object === Object && self, ft = Hr || $a || Function("return this")(), on = h && !h.nodeType && h, Ln = on && !0 && p && !p.nodeType && p, Eo = Ln && Ln.exports === on, Ei = Eo && Hr.process, Rt = (function() {
        try {
          var w = Ln && Ln.require && Ln.require("util").types;
          return w || Ei && Ei.binding && Ei.binding("util");
        } catch {
        }
      })(), Ti = Rt && Rt.isArrayBuffer, pt = Rt && Rt.isDate, To = Rt && Rt.isMap, Oo = Rt && Rt.isRegExp, Io = Rt && Rt.isSet, Ro = Rt && Rt.isTypedArray;
      function Mt(w, C, R) {
        switch (R.length) {
          case 0:
            return w.call(C);
          case 1:
            return w.call(C, R[0]);
          case 2:
            return w.call(C, R[0], R[1]);
          case 3:
            return w.call(C, R[0], R[1], R[2]);
        }
        return w.apply(C, R);
      }
      function Ya(w, C, R, k) {
        for (var G = -1, ve = w == null ? 0 : w.length; ++G < ve; ) {
          var ye = w[G];
          C(k, ye, R(ye), w);
        }
        return k;
      }
      function Bt(w, C) {
        for (var R = -1, k = w == null ? 0 : w.length; ++R < k && C(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function Ka(w, C) {
        for (var R = w == null ? 0 : w.length; R-- && C(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function Oi(w, C) {
        for (var R = -1, k = w == null ? 0 : w.length; ++R < k; )
          if (!C(w[R], R, w))
            return !1;
        return !0;
      }
      function Yt(w, C) {
        for (var R = -1, k = w == null ? 0 : w.length, G = 0, ve = []; ++R < k; ) {
          var ye = w[R];
          C(ye, R, w) && (ve[G++] = ye);
        }
        return ve;
      }
      function an(w, C) {
        var R = w == null ? 0 : w.length;
        return !!R && Zn(w, C, 0) > -1;
      }
      function Vn(w, C, R) {
        for (var k = -1, G = w == null ? 0 : w.length; ++k < G; )
          if (R(C, w[k]))
            return !0;
        return !1;
      }
      function je(w, C) {
        for (var R = -1, k = w == null ? 0 : w.length, G = Array(k); ++R < k; )
          G[R] = C(w[R], R, w);
        return G;
      }
      function mn(w, C) {
        for (var R = -1, k = C.length, G = w.length; ++R < k; )
          w[G + R] = C[R];
        return w;
      }
      function qr(w, C, R, k) {
        var G = -1, ve = w == null ? 0 : w.length;
        for (k && ve && (R = w[++G]); ++G < ve; )
          R = C(R, w[G], G, w);
        return R;
      }
      function Mo(w, C, R, k) {
        var G = w == null ? 0 : w.length;
        for (k && G && (R = w[--G]); G--; )
          R = C(R, w[G], G, w);
        return R;
      }
      function kn(w, C) {
        for (var R = -1, k = w == null ? 0 : w.length; ++R < k; )
          if (C(w[R], R, w))
            return !0;
        return !1;
      }
      var Va = Ri("length");
      function Za(w) {
        return w.split("");
      }
      function ja(w) {
        return w.match(Ca) || [];
      }
      function Co(w, C, R) {
        var k;
        return R(w, function(G, ve, ye) {
          if (C(G, ve, ye))
            return k = ve, !1;
        }), k;
      }
      function Gr(w, C, R, k) {
        for (var G = w.length, ve = R + (k ? 1 : -1); k ? ve-- : ++ve < G; )
          if (C(w[ve], ve, w))
            return ve;
        return -1;
      }
      function Zn(w, C, R) {
        return C === C ? v(w, C, R) : Gr(w, Ao, R);
      }
      function Ii(w, C, R, k) {
        for (var G = R - 1, ve = w.length; ++G < ve; )
          if (k(w[G], C))
            return G;
        return -1;
      }
      function Ao(w) {
        return w !== w;
      }
      function mr(w, C) {
        var R = w == null ? 0 : w.length;
        return R ? Xr(w, C) / R : Ze;
      }
      function Ri(w) {
        return function(C) {
          return C == null ? l : C[w];
        };
      }
      function yr(w) {
        return function(C) {
          return w == null ? l : w[C];
        };
      }
      function Do(w, C, R, k, G) {
        return G(w, function(ve, ye, Ee) {
          R = k ? (k = !1, ve) : C(R, ve, ye, Ee);
        }), R;
      }
      function Ja(w, C) {
        var R = w.length;
        for (w.sort(C); R--; )
          w[R] = w[R].value;
        return w;
      }
      function Xr(w, C) {
        for (var R, k = -1, G = w.length; ++k < G; ) {
          var ve = C(w[k]);
          ve !== l && (R = R === l ? ve : R + ve);
        }
        return R;
      }
      function Fn(w, C) {
        for (var R = -1, k = Array(w); ++R < w; )
          k[R] = C(R);
        return k;
      }
      function On(w, C) {
        return je(C, function(R) {
          return [R, w[R]];
        });
      }
      function Mi(w) {
        return w && w.slice(0, I(w) + 1).replace(zr, "");
      }
      function yt(w) {
        return function(C) {
          return w(C);
        };
      }
      function Ci(w, C) {
        return je(C, function(R) {
          return w[R];
        });
      }
      function br(w, C) {
        return w.has(C);
      }
      function zo(w, C) {
        for (var R = -1, k = w.length; ++R < k && Zn(C, w[R], 0) > -1; )
          ;
        return R;
      }
      function Po(w, C) {
        for (var R = w.length; R-- && Zn(C, w[R], 0) > -1; )
          ;
        return R;
      }
      function Qa(w, C) {
        for (var R = w.length, k = 0; R--; )
          w[R] === C && ++k;
        return k;
      }
      var es = yr(_i), ts = yr(wo);
      function ns(w) {
        return "\\" + Si[w];
      }
      function rs(w, C) {
        return w == null ? l : w[C];
      }
      function jn(w) {
        return bo.test(w);
      }
      function r(w) {
        return xo.test(w);
      }
      function n(w) {
        for (var C, R = []; !(C = w.next()).done; )
          R.push(C.value);
        return R;
      }
      function o(w) {
        var C = -1, R = Array(w.size);
        return w.forEach(function(k, G) {
          R[++C] = [G, k];
        }), R;
      }
      function a(w, C) {
        return function(R) {
          return w(C(R));
        };
      }
      function u(w, C) {
        for (var R = -1, k = w.length, G = 0, ve = []; ++R < k; ) {
          var ye = w[R];
          (ye === C || ye === ge) && (w[R] = ge, ve[G++] = R);
        }
        return ve;
      }
      function c(w) {
        var C = -1, R = Array(w.size);
        return w.forEach(function(k) {
          R[++C] = k;
        }), R;
      }
      function d(w) {
        var C = -1, R = Array(w.size);
        return w.forEach(function(k) {
          R[++C] = [k, k];
        }), R;
      }
      function v(w, C, R) {
        for (var k = R - 1, G = w.length; ++k < G; )
          if (w[k] === C)
            return k;
        return -1;
      }
      function b(w, C, R) {
        for (var k = R + 1; k--; )
          if (w[k] === C)
            return k;
        return k;
      }
      function S(w) {
        return jn(w) ? H(w) : Va(w);
      }
      function x(w) {
        return jn(w) ? W(w) : Za(w);
      }
      function I(w) {
        for (var C = w.length; C-- && gn.test(w.charAt(C)); )
          ;
        return C;
      }
      var z = yr(Xa);
      function H(w) {
        for (var C = Ur.lastIndex = 0; Ur.test(w); )
          ++C;
        return C;
      }
      function W(w) {
        return w.match(Ur) || [];
      }
      function q(w) {
        return w.match(qa) || [];
      }
      var Z = (function w(C) {
        C = C == null ? ft : Y.defaults(ft.Object(), C, Y.pick(ft, Ga));
        var R = C.Array, k = C.Date, G = C.Error, ve = C.Function, ye = C.Math, Ee = C.Object, Ct = C.RegExp, yn = C.String, bt = C.TypeError, In = R.prototype, jf = ve.prototype, $r = Ee.prototype, Lo = C["__core-js_shared__"], ko = jf.toString, $e = $r.hasOwnProperty, Jf = 0, Ou = (function() {
          var e = /[^.]+$/.exec(Lo && Lo.keys && Lo.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Fo = $r.toString, Qf = ko.call(Ee), ed = ft._, td = Ct(
          "^" + ko.call($e).replace(di, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), No = Eo ? C.Buffer : l, Jn = C.Symbol, Bo = C.Uint8Array, Iu = No ? No.allocUnsafe : l, Wo = a(Ee.getPrototypeOf, Ee), Ru = Ee.create, Mu = $r.propertyIsEnumerable, Uo = In.splice, Cu = Jn ? Jn.isConcatSpreadable : l, Ai = Jn ? Jn.iterator : l, xr = Jn ? Jn.toStringTag : l, Ho = (function() {
          try {
            var e = Tr(Ee, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), nd = C.clearTimeout !== ft.clearTimeout && C.clearTimeout, rd = k && k.now !== ft.Date.now && k.now, id = C.setTimeout !== ft.setTimeout && C.setTimeout, qo = ye.ceil, Go = ye.floor, is = Ee.getOwnPropertySymbols, od = No ? No.isBuffer : l, Au = C.isFinite, ad = In.join, sd = a(Ee.keys, Ee), dt = ye.max, St = ye.min, ud = k.now, ld = C.parseInt, Du = ye.random, cd = In.reverse, os = Tr(C, "DataView"), Di = Tr(C, "Map"), as = Tr(C, "Promise"), Yr = Tr(C, "Set"), zi = Tr(C, "WeakMap"), Pi = Tr(Ee, "create"), Xo = zi && new zi(), Kr = {}, fd = Or(os), dd = Or(Di), hd = Or(as), pd = Or(Yr), gd = Or(zi), $o = Jn ? Jn.prototype : l, Li = $o ? $o.valueOf : l, zu = $o ? $o.toString : l;
        function g(e) {
          if (ot(e) && !_e(e) && !(e instanceof Le)) {
            if (e instanceof sn)
              return e;
            if ($e.call(e, "__wrapped__"))
              return Pl(e);
          }
          return new sn(e);
        }
        var Vr = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!nt(t))
              return {};
            if (Ru)
              return Ru(t);
            e.prototype = t;
            var i = new e();
            return e.prototype = l, i;
          };
        })();
        function Yo() {
        }
        function sn(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = l;
        }
        g.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: ui,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: no,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: li,
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
        }, g.prototype = Yo.prototype, g.prototype.constructor = g, sn.prototype = Vr(Yo.prototype), sn.prototype.constructor = sn;
        function Le(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Me, this.__views__ = [];
        }
        function vd() {
          var e = new Le(this.__wrapped__);
          return e.__actions__ = Wt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Wt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Wt(this.__views__), e;
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
          var e = this.__wrapped__.value(), t = this.__dir__, i = _e(e), s = t < 0, f = i ? e.length : 0, m = Ch(0, f, this.__views__), _ = m.start, T = m.end, M = T - _, F = s ? T : _ - 1, N = this.__iteratees__, U = N.length, K = 0, re = St(M, this.__takeCount__);
          if (!i || !s && f == M && re == M)
            return rl(e, this.__actions__);
          var fe = [];
          e:
            for (; M-- && K < re; ) {
              F += t;
              for (var Ce = -1, de = e[F]; ++Ce < U; ) {
                var Pe = N[Ce], ke = Pe.iteratee, Zt = Pe.type, zt = ke(de);
                if (Zt == he)
                  de = zt;
                else if (!zt) {
                  if (Zt == we)
                    continue e;
                  break e;
                }
              }
              fe[K++] = de;
            }
          return fe;
        }
        Le.prototype = Vr(Yo.prototype), Le.prototype.constructor = Le;
        function wr(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function bd() {
          this.__data__ = Pi ? Pi(null) : {}, this.size = 0;
        }
        function xd(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function wd(e) {
          var t = this.__data__;
          if (Pi) {
            var i = t[e];
            return i === E ? l : i;
          }
          return $e.call(t, e) ? t[e] : l;
        }
        function _d(e) {
          var t = this.__data__;
          return Pi ? t[e] !== l : $e.call(t, e);
        }
        function Sd(e, t) {
          var i = this.__data__;
          return this.size += this.has(e) ? 0 : 1, i[e] = Pi && t === l ? E : t, this;
        }
        wr.prototype.clear = bd, wr.prototype.delete = xd, wr.prototype.get = wd, wr.prototype.has = _d, wr.prototype.set = Sd;
        function Nn(e) {
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
          var t = this.__data__, i = Ko(t, e);
          if (i < 0)
            return !1;
          var s = t.length - 1;
          return i == s ? t.pop() : Uo.call(t, i, 1), --this.size, !0;
        }
        function Od(e) {
          var t = this.__data__, i = Ko(t, e);
          return i < 0 ? l : t[i][1];
        }
        function Id(e) {
          return Ko(this.__data__, e) > -1;
        }
        function Rd(e, t) {
          var i = this.__data__, s = Ko(i, e);
          return s < 0 ? (++this.size, i.push([e, t])) : i[s][1] = t, this;
        }
        Nn.prototype.clear = Ed, Nn.prototype.delete = Td, Nn.prototype.get = Od, Nn.prototype.has = Id, Nn.prototype.set = Rd;
        function Bn(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function Md() {
          this.size = 0, this.__data__ = {
            hash: new wr(),
            map: new (Di || Nn)(),
            string: new wr()
          };
        }
        function Cd(e) {
          var t = aa(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function Ad(e) {
          return aa(this, e).get(e);
        }
        function Dd(e) {
          return aa(this, e).has(e);
        }
        function zd(e, t) {
          var i = aa(this, e), s = i.size;
          return i.set(e, t), this.size += i.size == s ? 0 : 1, this;
        }
        Bn.prototype.clear = Md, Bn.prototype.delete = Cd, Bn.prototype.get = Ad, Bn.prototype.has = Dd, Bn.prototype.set = zd;
        function _r(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.__data__ = new Bn(); ++t < i; )
            this.add(e[t]);
        }
        function Pd(e) {
          return this.__data__.set(e, E), this;
        }
        function Ld(e) {
          return this.__data__.has(e);
        }
        _r.prototype.add = _r.prototype.push = Pd, _r.prototype.has = Ld;
        function bn(e) {
          var t = this.__data__ = new Nn(e);
          this.size = t.size;
        }
        function kd() {
          this.__data__ = new Nn(), this.size = 0;
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
          if (i instanceof Nn) {
            var s = i.__data__;
            if (!Di || s.length < A - 1)
              return s.push([e, t]), this.size = ++i.size, this;
            i = this.__data__ = new Bn(s);
          }
          return i.set(e, t), this.size = i.size, this;
        }
        bn.prototype.clear = kd, bn.prototype.delete = Fd, bn.prototype.get = Nd, bn.prototype.has = Bd, bn.prototype.set = Wd;
        function Pu(e, t) {
          var i = _e(e), s = !i && Ir(e), f = !i && !s && rr(e), m = !i && !s && !f && Qr(e), _ = i || s || f || m, T = _ ? Fn(e.length, yn) : [], M = T.length;
          for (var F in e)
            (t || $e.call(e, F)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (F == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            f && (F == "offset" || F == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            m && (F == "buffer" || F == "byteLength" || F == "byteOffset") || // Skip index properties.
            qn(F, M))) && T.push(F);
          return T;
        }
        function Lu(e) {
          var t = e.length;
          return t ? e[ms(0, t - 1)] : l;
        }
        function Ud(e, t) {
          return sa(Wt(e), Sr(t, 0, e.length));
        }
        function Hd(e) {
          return sa(Wt(e));
        }
        function ss(e, t, i) {
          (i !== l && !xn(e[t], i) || i === l && !(t in e)) && Wn(e, t, i);
        }
        function ki(e, t, i) {
          var s = e[t];
          (!($e.call(e, t) && xn(s, i)) || i === l && !(t in e)) && Wn(e, t, i);
        }
        function Ko(e, t) {
          for (var i = e.length; i--; )
            if (xn(e[i][0], t))
              return i;
          return -1;
        }
        function qd(e, t, i, s) {
          return Qn(e, function(f, m, _) {
            t(s, f, i(f), _);
          }), s;
        }
        function ku(e, t) {
          return e && Mn(t, gt(t), e);
        }
        function Gd(e, t) {
          return e && Mn(t, Ht(t), e);
        }
        function Wn(e, t, i) {
          t == "__proto__" && Ho ? Ho(e, t, {
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
        function Sr(e, t, i) {
          return e === e && (i !== l && (e = e <= i ? e : i), t !== l && (e = e >= t ? e : t)), e;
        }
        function un(e, t, i, s, f, m) {
          var _, T = t & te, M = t & We, F = t & me;
          if (i && (_ = f ? i(e, s, f, m) : i(e)), _ !== l)
            return _;
          if (!nt(e))
            return e;
          var N = _e(e);
          if (N) {
            if (_ = Dh(e), !T)
              return Wt(e, _);
          } else {
            var U = Et(e), K = U == _t || U == Qt;
            if (rr(e))
              return al(e, T);
            if (U == vt || U == lt || K && !f) {
              if (_ = M || K ? {} : Tl(e), !T)
                return M ? wh(e, Gd(_, e)) : xh(e, ku(_, e));
            } else {
              if (!Ke[U])
                return f ? e : {};
              _ = zh(e, U, T);
            }
          }
          m || (m = new bn());
          var re = m.get(e);
          if (re)
            return re;
          m.set(e, _), ec(e) ? e.forEach(function(de) {
            _.add(un(de, t, i, de, e, m));
          }) : Jl(e) && e.forEach(function(de, Pe) {
            _.set(Pe, un(de, t, i, Pe, e, m));
          });
          var fe = F ? M ? Rs : Is : M ? Ht : gt, Ce = N ? l : fe(e);
          return Bt(Ce || e, function(de, Pe) {
            Ce && (Pe = de, de = e[Pe]), ki(_, Pe, un(de, t, i, Pe, e, m));
          }), _;
        }
        function Xd(e) {
          var t = gt(e);
          return function(i) {
            return Fu(i, e, t);
          };
        }
        function Fu(e, t, i) {
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
        function Nu(e, t, i) {
          if (typeof e != "function")
            throw new bt(B);
          return qi(function() {
            e.apply(l, i);
          }, t);
        }
        function Fi(e, t, i, s) {
          var f = -1, m = an, _ = !0, T = e.length, M = [], F = t.length;
          if (!T)
            return M;
          i && (t = je(t, yt(i))), s ? (m = Vn, _ = !1) : t.length >= A && (m = br, _ = !1, t = new _r(t));
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
        var Qn = fl(Rn), Bu = fl(cs, !0);
        function $d(e, t) {
          var i = !0;
          return Qn(e, function(s, f, m) {
            return i = !!t(s, f, m), i;
          }), i;
        }
        function Vo(e, t, i) {
          for (var s = -1, f = e.length; ++s < f; ) {
            var m = e[s], _ = t(m);
            if (_ != null && (T === l ? _ === _ && !Vt(_) : i(_, T)))
              var T = _, M = m;
          }
          return M;
        }
        function Yd(e, t, i, s) {
          var f = e.length;
          for (i = Te(i), i < 0 && (i = -i > f ? 0 : f + i), s = s === l || s > f ? f : Te(s), s < 0 && (s += f), s = i > s ? 0 : nc(s); i < s; )
            e[i++] = t;
          return e;
        }
        function Wu(e, t) {
          var i = [];
          return Qn(e, function(s, f, m) {
            t(s, f, m) && i.push(s);
          }), i;
        }
        function xt(e, t, i, s, f) {
          var m = -1, _ = e.length;
          for (i || (i = Lh), f || (f = []); ++m < _; ) {
            var T = e[m];
            t > 0 && i(T) ? t > 1 ? xt(T, t - 1, i, s, f) : mn(f, T) : s || (f[f.length] = T);
          }
          return f;
        }
        var ls = dl(), Uu = dl(!0);
        function Rn(e, t) {
          return e && ls(e, t, gt);
        }
        function cs(e, t) {
          return e && Uu(e, t, gt);
        }
        function Zo(e, t) {
          return Yt(t, function(i) {
            return Gn(e[i]);
          });
        }
        function Er(e, t) {
          t = tr(t, e);
          for (var i = 0, s = t.length; e != null && i < s; )
            e = e[Cn(t[i++])];
          return i && i == s ? e : l;
        }
        function Hu(e, t, i) {
          var s = t(e);
          return _e(e) ? s : mn(s, i(e));
        }
        function At(e) {
          return e == null ? e === l ? Q : Xt : xr && xr in Ee(e) ? Mh(e) : Hh(e);
        }
        function fs(e, t) {
          return e > t;
        }
        function Kd(e, t) {
          return e != null && $e.call(e, t);
        }
        function Vd(e, t) {
          return e != null && t in Ee(e);
        }
        function Zd(e, t, i) {
          return e >= St(t, i) && e < dt(t, i);
        }
        function ds(e, t, i) {
          for (var s = i ? Vn : an, f = e[0].length, m = e.length, _ = m, T = R(m), M = 1 / 0, F = []; _--; ) {
            var N = e[_];
            _ && t && (N = je(N, yt(t))), M = St(N.length, M), T[_] = !i && (t || f >= 120 && N.length >= 120) ? new _r(_ && N) : l;
          }
          N = e[0];
          var U = -1, K = T[0];
          e:
            for (; ++U < f && F.length < M; ) {
              var re = N[U], fe = t ? t(re) : re;
              if (re = i || re !== 0 ? re : 0, !(K ? br(K, fe) : s(F, fe, i))) {
                for (_ = m; --_; ) {
                  var Ce = T[_];
                  if (!(Ce ? br(Ce, fe) : s(e[_], fe, i)))
                    continue e;
                }
                K && K.push(fe), F.push(re);
              }
            }
          return F;
        }
        function jd(e, t, i, s) {
          return Rn(e, function(f, m, _) {
            t(s, i(f), m, _);
          }), s;
        }
        function Ni(e, t, i) {
          t = tr(t, e), e = Ml(e, t);
          var s = e == null ? e : e[Cn(cn(t))];
          return s == null ? l : Mt(s, e, i);
        }
        function qu(e) {
          return ot(e) && At(e) == lt;
        }
        function Jd(e) {
          return ot(e) && At(e) == ce;
        }
        function Qd(e) {
          return ot(e) && At(e) == j;
        }
        function Bi(e, t, i, s, f) {
          return e === t ? !0 : e == null || t == null || !ot(e) && !ot(t) ? e !== e && t !== t : eh(e, t, i, s, Bi, f);
        }
        function eh(e, t, i, s, f, m) {
          var _ = _e(e), T = _e(t), M = _ ? et : Et(e), F = T ? et : Et(t);
          M = M == lt ? vt : M, F = F == lt ? vt : F;
          var N = M == vt, U = F == vt, K = M == F;
          if (K && rr(e)) {
            if (!rr(t))
              return !1;
            _ = !0, N = !1;
          }
          if (K && !N)
            return m || (m = new bn()), _ || Qr(e) ? _l(e, t, i, s, f, m) : Ih(e, t, M, i, s, f, m);
          if (!(i & be)) {
            var re = N && $e.call(e, "__wrapped__"), fe = U && $e.call(t, "__wrapped__");
            if (re || fe) {
              var Ce = re ? e.value() : e, de = fe ? t.value() : t;
              return m || (m = new bn()), f(Ce, de, i, s, m);
            }
          }
          return K ? (m || (m = new bn()), Rh(e, t, i, s, f, m)) : !1;
        }
        function th(e) {
          return ot(e) && Et(e) == at;
        }
        function hs(e, t, i, s) {
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
            var M = T[0], F = e[M], N = T[1];
            if (_ && T[2]) {
              if (F === l && !(M in e))
                return !1;
            } else {
              var U = new bn();
              if (s)
                var K = s(F, N, M, e, t, U);
              if (!(K === l ? Bi(N, F, be | Ge, s, U) : K))
                return !1;
            }
          }
          return !0;
        }
        function Gu(e) {
          if (!nt(e) || Fh(e))
            return !1;
          var t = Gn(e) ? td : Da;
          return t.test(Or(e));
        }
        function nh(e) {
          return ot(e) && At(e) == It;
        }
        function rh(e) {
          return ot(e) && Et(e) == $;
        }
        function ih(e) {
          return ot(e) && ha(e.length) && !!He[At(e)];
        }
        function Xu(e) {
          return typeof e == "function" ? e : e == null ? qt : typeof e == "object" ? _e(e) ? Ku(e[0], e[1]) : Yu(e) : hc(e);
        }
        function ps(e) {
          if (!Hi(e))
            return sd(e);
          var t = [];
          for (var i in Ee(e))
            $e.call(e, i) && i != "constructor" && t.push(i);
          return t;
        }
        function oh(e) {
          if (!nt(e))
            return Uh(e);
          var t = Hi(e), i = [];
          for (var s in e)
            s == "constructor" && (t || !$e.call(e, s)) || i.push(s);
          return i;
        }
        function gs(e, t) {
          return e < t;
        }
        function $u(e, t) {
          var i = -1, s = Ut(e) ? R(e.length) : [];
          return Qn(e, function(f, m, _) {
            s[++i] = t(f, m, _);
          }), s;
        }
        function Yu(e) {
          var t = Cs(e);
          return t.length == 1 && t[0][2] ? Il(t[0][0], t[0][1]) : function(i) {
            return i === e || hs(i, e, t);
          };
        }
        function Ku(e, t) {
          return Ds(e) && Ol(t) ? Il(Cn(e), t) : function(i) {
            var s = Hs(i, e);
            return s === l && s === t ? qs(i, e) : Bi(t, s, be | Ge);
          };
        }
        function jo(e, t, i, s, f) {
          e !== t && ls(t, function(m, _) {
            if (f || (f = new bn()), nt(m))
              ah(e, t, _, i, jo, s, f);
            else {
              var T = s ? s(Ps(e, _), m, _ + "", e, t, f) : l;
              T === l && (T = m), ss(e, _, T);
            }
          }, Ht);
        }
        function ah(e, t, i, s, f, m, _) {
          var T = Ps(e, i), M = Ps(t, i), F = _.get(M);
          if (F) {
            ss(e, i, F);
            return;
          }
          var N = m ? m(T, M, i + "", e, t, _) : l, U = N === l;
          if (U) {
            var K = _e(M), re = !K && rr(M), fe = !K && !re && Qr(M);
            N = M, K || re || fe ? _e(T) ? N = T : st(T) ? N = Wt(T) : re ? (U = !1, N = al(M, !0)) : fe ? (U = !1, N = sl(M, !0)) : N = [] : Gi(M) || Ir(M) ? (N = T, Ir(T) ? N = rc(T) : (!nt(T) || Gn(T)) && (N = Tl(M))) : U = !1;
          }
          U && (_.set(M, N), f(N, M, s, m, _), _.delete(M)), ss(e, i, N);
        }
        function Vu(e, t) {
          var i = e.length;
          if (i)
            return t += t < 0 ? i : 0, qn(t, i) ? e[t] : l;
        }
        function Zu(e, t, i) {
          t.length ? t = je(t, function(m) {
            return _e(m) ? function(_) {
              return Er(_, m.length === 1 ? m[0] : m);
            } : m;
          }) : t = [qt];
          var s = -1;
          t = je(t, yt(ue()));
          var f = $u(e, function(m, _, T) {
            var M = je(t, function(F) {
              return F(m);
            });
            return { criteria: M, index: ++s, value: m };
          });
          return Ja(f, function(m, _) {
            return bh(m, _, i);
          });
        }
        function sh(e, t) {
          return ju(e, t, function(i, s) {
            return qs(e, s);
          });
        }
        function ju(e, t, i) {
          for (var s = -1, f = t.length, m = {}; ++s < f; ) {
            var _ = t[s], T = Er(e, _);
            i(T, _) && Wi(m, tr(_, e), T);
          }
          return m;
        }
        function uh(e) {
          return function(t) {
            return Er(t, e);
          };
        }
        function vs(e, t, i, s) {
          var f = s ? Ii : Zn, m = -1, _ = t.length, T = e;
          for (e === t && (t = Wt(t)), i && (T = je(e, yt(i))); ++m < _; )
            for (var M = 0, F = t[m], N = i ? i(F) : F; (M = f(T, N, M, s)) > -1; )
              T !== e && Uo.call(T, M, 1), Uo.call(e, M, 1);
          return e;
        }
        function Ju(e, t) {
          for (var i = e ? t.length : 0, s = i - 1; i--; ) {
            var f = t[i];
            if (i == s || f !== m) {
              var m = f;
              qn(f) ? Uo.call(e, f, 1) : xs(e, f);
            }
          }
          return e;
        }
        function ms(e, t) {
          return e + Go(Du() * (t - e + 1));
        }
        function lh(e, t, i, s) {
          for (var f = -1, m = dt(qo((t - e) / (i || 1)), 0), _ = R(m); m--; )
            _[s ? m : ++f] = e, e += i;
          return _;
        }
        function ys(e, t) {
          var i = "";
          if (!e || t < 1 || t > Qe)
            return i;
          do
            t % 2 && (i += e), t = Go(t / 2), t && (e += e);
          while (t);
          return i;
        }
        function De(e, t) {
          return Ls(Rl(e, t, qt), e + "");
        }
        function ch(e) {
          return Lu(ei(e));
        }
        function fh(e, t) {
          var i = ei(e);
          return sa(i, Sr(t, 0, i.length));
        }
        function Wi(e, t, i, s) {
          if (!nt(e))
            return e;
          t = tr(t, e);
          for (var f = -1, m = t.length, _ = m - 1, T = e; T != null && ++f < m; ) {
            var M = Cn(t[f]), F = i;
            if (M === "__proto__" || M === "constructor" || M === "prototype")
              return e;
            if (f != _) {
              var N = T[M];
              F = s ? s(N, M, T) : l, F === l && (F = nt(N) ? N : qn(t[f + 1]) ? [] : {});
            }
            ki(T, M, F), T = T[M];
          }
          return e;
        }
        var Qu = Xo ? function(e, t) {
          return Xo.set(e, t), e;
        } : qt, dh = Ho ? function(e, t) {
          return Ho(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Xs(t),
            writable: !0
          });
        } : qt;
        function hh(e) {
          return sa(ei(e));
        }
        function ln(e, t, i) {
          var s = -1, f = e.length;
          t < 0 && (t = -t > f ? 0 : f + t), i = i > f ? f : i, i < 0 && (i += f), f = t > i ? 0 : i - t >>> 0, t >>>= 0;
          for (var m = R(f); ++s < f; )
            m[s] = e[s + t];
          return m;
        }
        function ph(e, t) {
          var i;
          return Qn(e, function(s, f, m) {
            return i = t(s, f, m), !i;
          }), !!i;
        }
        function Jo(e, t, i) {
          var s = 0, f = e == null ? s : e.length;
          if (typeof t == "number" && t === t && f <= ht) {
            for (; s < f; ) {
              var m = s + f >>> 1, _ = e[m];
              _ !== null && !Vt(_) && (i ? _ <= t : _ < t) ? s = m + 1 : f = m;
            }
            return f;
          }
          return bs(e, t, qt, i);
        }
        function bs(e, t, i, s) {
          var f = 0, m = e == null ? 0 : e.length;
          if (m === 0)
            return 0;
          t = i(t);
          for (var _ = t !== t, T = t === null, M = Vt(t), F = t === l; f < m; ) {
            var N = Go((f + m) / 2), U = i(e[N]), K = U !== l, re = U === null, fe = U === U, Ce = Vt(U);
            if (_)
              var de = s || fe;
            else F ? de = fe && (s || K) : T ? de = fe && K && (s || !re) : M ? de = fe && K && !re && (s || !Ce) : re || Ce ? de = !1 : de = s ? U <= t : U < t;
            de ? f = N + 1 : m = N;
          }
          return St(m, Nt);
        }
        function el(e, t) {
          for (var i = -1, s = e.length, f = 0, m = []; ++i < s; ) {
            var _ = e[i], T = t ? t(_) : _;
            if (!i || !xn(T, M)) {
              var M = T;
              m[f++] = _ === 0 ? 0 : _;
            }
          }
          return m;
        }
        function tl(e) {
          return typeof e == "number" ? e : Vt(e) ? Ze : +e;
        }
        function Kt(e) {
          if (typeof e == "string")
            return e;
          if (_e(e))
            return je(e, Kt) + "";
          if (Vt(e))
            return zu ? zu.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -se ? "-0" : t;
        }
        function er(e, t, i) {
          var s = -1, f = an, m = e.length, _ = !0, T = [], M = T;
          if (i)
            _ = !1, f = Vn;
          else if (m >= A) {
            var F = t ? null : Th(e);
            if (F)
              return c(F);
            _ = !1, f = br, M = new _r();
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
          return t = tr(t, e), e = Ml(e, t), e == null || delete e[Cn(cn(t))];
        }
        function nl(e, t, i, s) {
          return Wi(e, t, i(Er(e, t)), s);
        }
        function Qo(e, t, i, s) {
          for (var f = e.length, m = s ? f : -1; (s ? m-- : ++m < f) && t(e[m], m, e); )
            ;
          return i ? ln(e, s ? 0 : m, s ? m + 1 : f) : ln(e, s ? m + 1 : 0, s ? f : m);
        }
        function rl(e, t) {
          var i = e;
          return i instanceof Le && (i = i.value()), qr(t, function(s, f) {
            return f.func.apply(f.thisArg, mn([s], f.args));
          }, i);
        }
        function ws(e, t, i) {
          var s = e.length;
          if (s < 2)
            return s ? er(e[0]) : [];
          for (var f = -1, m = R(s); ++f < s; )
            for (var _ = e[f], T = -1; ++T < s; )
              T != f && (m[f] = Fi(m[f] || _, e[T], t, i));
          return er(xt(m, 1), t, i);
        }
        function il(e, t, i) {
          for (var s = -1, f = e.length, m = t.length, _ = {}; ++s < f; ) {
            var T = s < m ? t[s] : l;
            i(_, e[s], T);
          }
          return _;
        }
        function _s(e) {
          return st(e) ? e : [];
        }
        function Ss(e) {
          return typeof e == "function" ? e : qt;
        }
        function tr(e, t) {
          return _e(e) ? e : Ds(e, t) ? [e] : zl(qe(e));
        }
        var gh = De;
        function nr(e, t, i) {
          var s = e.length;
          return i = i === l ? s : i, !t && i >= s ? e : ln(e, t, i);
        }
        var ol = nd || function(e) {
          return ft.clearTimeout(e);
        };
        function al(e, t) {
          if (t)
            return e.slice();
          var i = e.length, s = Iu ? Iu(i) : new e.constructor(i);
          return e.copy(s), s;
        }
        function Es(e) {
          var t = new e.constructor(e.byteLength);
          return new Bo(t).set(new Bo(e)), t;
        }
        function vh(e, t) {
          var i = t ? Es(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.byteLength);
        }
        function mh(e) {
          var t = new e.constructor(e.source, hi.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function yh(e) {
          return Li ? Ee(Li.call(e)) : {};
        }
        function sl(e, t) {
          var i = t ? Es(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.length);
        }
        function ul(e, t) {
          if (e !== t) {
            var i = e !== l, s = e === null, f = e === e, m = Vt(e), _ = t !== l, T = t === null, M = t === t, F = Vt(t);
            if (!T && !F && !m && e > t || m && _ && M && !T && !F || s && _ && M || !i && M || !f)
              return 1;
            if (!s && !m && !F && e < t || F && i && f && !s && !m || T && i && f || !_ && f || !M)
              return -1;
          }
          return 0;
        }
        function bh(e, t, i) {
          for (var s = -1, f = e.criteria, m = t.criteria, _ = f.length, T = i.length; ++s < _; ) {
            var M = ul(f[s], m[s]);
            if (M) {
              if (s >= T)
                return M;
              var F = i[s];
              return M * (F == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function ll(e, t, i, s) {
          for (var f = -1, m = e.length, _ = i.length, T = -1, M = t.length, F = dt(m - _, 0), N = R(M + F), U = !s; ++T < M; )
            N[T] = t[T];
          for (; ++f < _; )
            (U || f < m) && (N[i[f]] = e[f]);
          for (; F--; )
            N[T++] = e[f++];
          return N;
        }
        function cl(e, t, i, s) {
          for (var f = -1, m = e.length, _ = -1, T = i.length, M = -1, F = t.length, N = dt(m - T, 0), U = R(N + F), K = !s; ++f < N; )
            U[f] = e[f];
          for (var re = f; ++M < F; )
            U[re + M] = t[M];
          for (; ++_ < T; )
            (K || f < m) && (U[re + i[_]] = e[f++]);
          return U;
        }
        function Wt(e, t) {
          var i = -1, s = e.length;
          for (t || (t = R(s)); ++i < s; )
            t[i] = e[i];
          return t;
        }
        function Mn(e, t, i, s) {
          var f = !i;
          i || (i = {});
          for (var m = -1, _ = t.length; ++m < _; ) {
            var T = t[m], M = s ? s(i[T], e[T], T, i, e) : l;
            M === l && (M = e[T]), f ? Wn(i, T, M) : ki(i, T, M);
          }
          return i;
        }
        function xh(e, t) {
          return Mn(e, As(e), t);
        }
        function wh(e, t) {
          return Mn(e, Sl(e), t);
        }
        function ea(e, t) {
          return function(i, s) {
            var f = _e(i) ? Ya : qd, m = t ? t() : {};
            return f(i, e, ue(s, 2), m);
          };
        }
        function Zr(e) {
          return De(function(t, i) {
            var s = -1, f = i.length, m = f > 1 ? i[f - 1] : l, _ = f > 2 ? i[2] : l;
            for (m = e.length > 3 && typeof m == "function" ? (f--, m) : l, _ && Dt(i[0], i[1], _) && (m = f < 3 ? l : m, f = 1), t = Ee(t); ++s < f; ) {
              var T = i[s];
              T && e(t, T, s, m);
            }
            return t;
          });
        }
        function fl(e, t) {
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
        function dl(e) {
          return function(t, i, s) {
            for (var f = -1, m = Ee(t), _ = s(t), T = _.length; T--; ) {
              var M = _[e ? T : ++f];
              if (i(m[M], M, m) === !1)
                break;
            }
            return t;
          };
        }
        function _h(e, t, i) {
          var s = t & Fe, f = Ui(e);
          function m() {
            var _ = this && this !== ft && this instanceof m ? f : e;
            return _.apply(s ? i : this, arguments);
          }
          return m;
        }
        function hl(e) {
          return function(t) {
            t = qe(t);
            var i = jn(t) ? x(t) : l, s = i ? i[0] : t.charAt(0), f = i ? nr(i, 1).join("") : t.slice(1);
            return s[e]() + f;
          };
        }
        function jr(e) {
          return function(t) {
            return qr(fc(cc(t).replace(Ha, "")), e, "");
          };
        }
        function Ui(e) {
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
            var i = Vr(e.prototype), s = e.apply(i, t);
            return nt(s) ? s : i;
          };
        }
        function Sh(e, t, i) {
          var s = Ui(e);
          function f() {
            for (var m = arguments.length, _ = R(m), T = m, M = Jr(f); T--; )
              _[T] = arguments[T];
            var F = m < 3 && _[0] !== M && _[m - 1] !== M ? [] : u(_, M);
            if (m -= F.length, m < i)
              return yl(
                e,
                t,
                ta,
                f.placeholder,
                l,
                _,
                F,
                l,
                l,
                i - m
              );
            var N = this && this !== ft && this instanceof f ? s : e;
            return Mt(N, this, _);
          }
          return f;
        }
        function pl(e) {
          return function(t, i, s) {
            var f = Ee(t);
            if (!Ut(t)) {
              var m = ue(i, 3);
              t = gt(t), i = function(T) {
                return m(f[T], T, f);
              };
            }
            var _ = e(t, i, s);
            return _ > -1 ? f[m ? t[_] : _] : l;
          };
        }
        function gl(e) {
          return Hn(function(t) {
            var i = t.length, s = i, f = sn.prototype.thru;
            for (e && t.reverse(); s--; ) {
              var m = t[s];
              if (typeof m != "function")
                throw new bt(B);
              if (f && !_ && oa(m) == "wrapper")
                var _ = new sn([], !0);
            }
            for (s = _ ? s : i; ++s < i; ) {
              m = t[s];
              var T = oa(m), M = T == "wrapper" ? Ms(m) : l;
              M && zs(M[0]) && M[1] == (D | xe | Ae | Ie) && !M[4].length && M[9] == 1 ? _ = _[oa(M[0])].apply(_, M[3]) : _ = m.length == 1 && zs(m) ? _[T]() : _.thru(m);
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
        function ta(e, t, i, s, f, m, _, T, M, F) {
          var N = t & D, U = t & Fe, K = t & Ue, re = t & (xe | Oe), fe = t & Se, Ce = K ? l : Ui(e);
          function de() {
            for (var Pe = arguments.length, ke = R(Pe), Zt = Pe; Zt--; )
              ke[Zt] = arguments[Zt];
            if (re)
              var zt = Jr(de), jt = Qa(ke, zt);
            if (s && (ke = ll(ke, s, f, re)), m && (ke = cl(ke, m, _, re)), Pe -= jt, re && Pe < F) {
              var ut = u(ke, zt);
              return yl(
                e,
                t,
                ta,
                de.placeholder,
                i,
                ke,
                ut,
                T,
                M,
                F - Pe
              );
            }
            var wn = U ? i : this, $n = K ? wn[e] : e;
            return Pe = ke.length, T ? ke = qh(ke, T) : fe && Pe > 1 && ke.reverse(), N && M < Pe && (ke.length = M), this && this !== ft && this instanceof de && ($n = Ce || Ui($n)), $n.apply(wn, ke);
          }
          return de;
        }
        function vl(e, t) {
          return function(i, s) {
            return jd(i, e, t(s), {});
          };
        }
        function na(e, t) {
          return function(i, s) {
            var f;
            if (i === l && s === l)
              return t;
            if (i !== l && (f = i), s !== l) {
              if (f === l)
                return s;
              typeof i == "string" || typeof s == "string" ? (i = Kt(i), s = Kt(s)) : (i = tl(i), s = tl(s)), f = e(i, s);
            }
            return f;
          };
        }
        function Ts(e) {
          return Hn(function(t) {
            return t = je(t, yt(ue())), De(function(i) {
              var s = this;
              return e(t, function(f) {
                return Mt(f, s, i);
              });
            });
          });
        }
        function ra(e, t) {
          t = t === l ? " " : Kt(t);
          var i = t.length;
          if (i < 2)
            return i ? ys(t, e) : t;
          var s = ys(t, qo(e / S(t)));
          return jn(t) ? nr(x(s), 0, e).join("") : s.slice(0, e);
        }
        function Eh(e, t, i, s) {
          var f = t & Fe, m = Ui(e);
          function _() {
            for (var T = -1, M = arguments.length, F = -1, N = s.length, U = R(N + M), K = this && this !== ft && this instanceof _ ? m : e; ++F < N; )
              U[F] = s[F];
            for (; M--; )
              U[F++] = arguments[++T];
            return Mt(K, f ? i : this, U);
          }
          return _;
        }
        function ml(e) {
          return function(t, i, s) {
            return s && typeof s != "number" && Dt(t, i, s) && (i = s = l), t = Xn(t), i === l ? (i = t, t = 0) : i = Xn(i), s = s === l ? t < i ? 1 : -1 : Xn(s), lh(t, i, s, e);
          };
        }
        function ia(e) {
          return function(t, i) {
            return typeof t == "string" && typeof i == "string" || (t = fn(t), i = fn(i)), e(t, i);
          };
        }
        function yl(e, t, i, s, f, m, _, T, M, F) {
          var N = t & xe, U = N ? _ : l, K = N ? l : _, re = N ? m : l, fe = N ? l : m;
          t |= N ? Ae : Ne, t &= ~(N ? Ne : Ae), t & ze || (t &= -4);
          var Ce = [
            e,
            t,
            f,
            re,
            U,
            fe,
            K,
            T,
            M,
            F
          ], de = i.apply(l, Ce);
          return zs(e) && Cl(de, Ce), de.placeholder = s, Al(de, e, t);
        }
        function Os(e) {
          var t = ye[e];
          return function(i, s) {
            if (i = fn(i), s = s == null ? 0 : St(Te(s), 292), s && Au(i)) {
              var f = (qe(i) + "e").split("e"), m = t(f[0] + "e" + (+f[1] + s));
              return f = (qe(m) + "e").split("e"), +(f[0] + "e" + (+f[1] - s));
            }
            return t(i);
          };
        }
        var Th = Yr && 1 / c(new Yr([, -0]))[1] == se ? function(e) {
          return new Yr(e);
        } : Ks;
        function bl(e) {
          return function(t) {
            var i = Et(t);
            return i == at ? o(t) : i == $ ? d(t) : On(t, e(t));
          };
        }
        function Un(e, t, i, s, f, m, _, T) {
          var M = t & Ue;
          if (!M && typeof e != "function")
            throw new bt(B);
          var F = s ? s.length : 0;
          if (F || (t &= -97, s = f = l), _ = _ === l ? _ : dt(Te(_), 0), T = T === l ? T : Te(T), F -= f ? f.length : 0, t & Ne) {
            var N = s, U = f;
            s = f = l;
          }
          var K = M ? l : Ms(e), re = [
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
          if (K && Wh(re, K), e = re[0], t = re[1], i = re[2], s = re[3], f = re[4], T = re[9] = re[9] === l ? M ? 0 : e.length : dt(re[9] - F, 0), !T && t & (xe | Oe) && (t &= -25), !t || t == Fe)
            var fe = _h(e, t, i);
          else t == xe || t == Oe ? fe = Sh(e, t, T) : (t == Ae || t == (Fe | Ae)) && !f.length ? fe = Eh(e, t, i, s) : fe = ta.apply(l, re);
          var Ce = K ? Qu : Cl;
          return Al(Ce(fe, re), e, t);
        }
        function xl(e, t, i, s) {
          return e === l || xn(e, $r[i]) && !$e.call(s, i) ? t : e;
        }
        function wl(e, t, i, s, f, m) {
          return nt(e) && nt(t) && (m.set(t, e), jo(e, t, l, wl, m), m.delete(t)), e;
        }
        function Oh(e) {
          return Gi(e) ? l : e;
        }
        function _l(e, t, i, s, f, m) {
          var _ = i & be, T = e.length, M = t.length;
          if (T != M && !(_ && M > T))
            return !1;
          var F = m.get(e), N = m.get(t);
          if (F && N)
            return F == t && N == e;
          var U = -1, K = !0, re = i & Ge ? new _r() : l;
          for (m.set(e, t), m.set(t, e); ++U < T; ) {
            var fe = e[U], Ce = t[U];
            if (s)
              var de = _ ? s(Ce, fe, U, t, e, m) : s(fe, Ce, U, e, t, m);
            if (de !== l) {
              if (de)
                continue;
              K = !1;
              break;
            }
            if (re) {
              if (!kn(t, function(Pe, ke) {
                if (!br(re, ke) && (fe === Pe || f(fe, Pe, i, s, m)))
                  return re.push(ke);
              })) {
                K = !1;
                break;
              }
            } else if (!(fe === Ce || f(fe, Ce, i, s, m))) {
              K = !1;
              break;
            }
          }
          return m.delete(e), m.delete(t), K;
        }
        function Ih(e, t, i, s, f, m, _) {
          switch (i) {
            case ae:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case ce:
              return !(e.byteLength != t.byteLength || !m(new Bo(e), new Bo(t)));
            case wt:
            case j:
            case Ot:
              return xn(+e, +t);
            case Tt:
              return e.name == t.name && e.message == t.message;
            case It:
            case J:
              return e == t + "";
            case at:
              var T = o;
            case $:
              var M = s & be;
              if (T || (T = c), e.size != t.size && !M)
                return !1;
              var F = _.get(e);
              if (F)
                return F == t;
              s |= Ge, _.set(e, t);
              var N = _l(T(e), T(t), s, f, m, _);
              return _.delete(e), N;
            case P:
              if (Li)
                return Li.call(e) == Li.call(t);
          }
          return !1;
        }
        function Rh(e, t, i, s, f, m) {
          var _ = i & be, T = Is(e), M = T.length, F = Is(t), N = F.length;
          if (M != N && !_)
            return !1;
          for (var U = M; U--; ) {
            var K = T[U];
            if (!(_ ? K in t : $e.call(t, K)))
              return !1;
          }
          var re = m.get(e), fe = m.get(t);
          if (re && fe)
            return re == t && fe == e;
          var Ce = !0;
          m.set(e, t), m.set(t, e);
          for (var de = _; ++U < M; ) {
            K = T[U];
            var Pe = e[K], ke = t[K];
            if (s)
              var Zt = _ ? s(ke, Pe, K, t, e, m) : s(Pe, ke, K, e, t, m);
            if (!(Zt === l ? Pe === ke || f(Pe, ke, i, s, m) : Zt)) {
              Ce = !1;
              break;
            }
            de || (de = K == "constructor");
          }
          if (Ce && !de) {
            var zt = e.constructor, jt = t.constructor;
            zt != jt && "constructor" in e && "constructor" in t && !(typeof zt == "function" && zt instanceof zt && typeof jt == "function" && jt instanceof jt) && (Ce = !1);
          }
          return m.delete(e), m.delete(t), Ce;
        }
        function Hn(e) {
          return Ls(Rl(e, l, Fl), e + "");
        }
        function Is(e) {
          return Hu(e, gt, As);
        }
        function Rs(e) {
          return Hu(e, Ht, Sl);
        }
        var Ms = Xo ? function(e) {
          return Xo.get(e);
        } : Ks;
        function oa(e) {
          for (var t = e.name + "", i = Kr[t], s = $e.call(Kr, t) ? i.length : 0; s--; ) {
            var f = i[s], m = f.func;
            if (m == null || m == e)
              return f.name;
          }
          return t;
        }
        function Jr(e) {
          var t = $e.call(g, "placeholder") ? g : e;
          return t.placeholder;
        }
        function ue() {
          var e = g.iteratee || $s;
          return e = e === $s ? Xu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function aa(e, t) {
          var i = e.__data__;
          return kh(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
        }
        function Cs(e) {
          for (var t = gt(e), i = t.length; i--; ) {
            var s = t[i], f = e[s];
            t[i] = [s, f, Ol(f)];
          }
          return t;
        }
        function Tr(e, t) {
          var i = rs(e, t);
          return Gu(i) ? i : l;
        }
        function Mh(e) {
          var t = $e.call(e, xr), i = e[xr];
          try {
            e[xr] = l;
            var s = !0;
          } catch {
          }
          var f = Fo.call(e);
          return s && (t ? e[xr] = i : delete e[xr]), f;
        }
        var As = is ? function(e) {
          return e == null ? [] : (e = Ee(e), Yt(is(e), function(t) {
            return Mu.call(e, t);
          }));
        } : Vs, Sl = is ? function(e) {
          for (var t = []; e; )
            mn(t, As(e)), e = Wo(e);
          return t;
        } : Vs, Et = At;
        (os && Et(new os(new ArrayBuffer(1))) != ae || Di && Et(new Di()) != at || as && Et(as.resolve()) != $t || Yr && Et(new Yr()) != $ || zi && Et(new zi()) != ne) && (Et = function(e) {
          var t = At(e), i = t == vt ? e.constructor : l, s = i ? Or(i) : "";
          if (s)
            switch (s) {
              case fd:
                return ae;
              case dd:
                return at;
              case hd:
                return $t;
              case pd:
                return $;
              case gd:
                return ne;
            }
          return t;
        });
        function Ch(e, t, i) {
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
                e = dt(e, t - _);
                break;
            }
          }
          return { start: e, end: t };
        }
        function Ah(e) {
          var t = e.match(vn);
          return t ? t[1].split(Ma) : [];
        }
        function El(e, t, i) {
          t = tr(t, e);
          for (var s = -1, f = t.length, m = !1; ++s < f; ) {
            var _ = Cn(t[s]);
            if (!(m = e != null && i(e, _)))
              break;
            e = e[_];
          }
          return m || ++s != f ? m : (f = e == null ? 0 : e.length, !!f && ha(f) && qn(_, f) && (_e(e) || Ir(e)));
        }
        function Dh(e) {
          var t = e.length, i = new e.constructor(t);
          return t && typeof e[0] == "string" && $e.call(e, "index") && (i.index = e.index, i.input = e.input), i;
        }
        function Tl(e) {
          return typeof e.constructor == "function" && !Hi(e) ? Vr(Wo(e)) : {};
        }
        function zh(e, t, i) {
          var s = e.constructor;
          switch (t) {
            case ce:
              return Es(e);
            case wt:
            case j:
              return new s(+e);
            case ae:
              return vh(e, i);
            case oe:
            case tt:
            case ct:
            case mt:
            case en:
            case tn:
            case nn:
            case _n:
            case Sn:
              return sl(e, i);
            case at:
              return new s();
            case Ot:
            case J:
              return new s(e);
            case It:
              return mh(e);
            case $:
              return new s();
            case P:
              return yh(e);
          }
        }
        function Ph(e, t) {
          var i = t.length;
          if (!i)
            return e;
          var s = i - 1;
          return t[s] = (i > 1 ? "& " : "") + t[s], t = t.join(i > 2 ? ", " : " "), e.replace(Pn, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Lh(e) {
          return _e(e) || Ir(e) || !!(Cu && e && e[Cu]);
        }
        function qn(e, t) {
          var i = typeof e;
          return t = t ?? Qe, !!t && (i == "number" || i != "symbol" && pi.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function Dt(e, t, i) {
          if (!nt(i))
            return !1;
          var s = typeof t;
          return (s == "number" ? Ut(i) && qn(t, i.length) : s == "string" && t in i) ? xn(i[t], e) : !1;
        }
        function Ds(e, t) {
          if (_e(e))
            return !1;
          var i = typeof e;
          return i == "number" || i == "symbol" || i == "boolean" || e == null || Vt(e) ? !0 : ci.test(e) || !Ia.test(e) || t != null && e in Ee(t);
        }
        function kh(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function zs(e) {
          var t = oa(e), i = g[t];
          if (typeof i != "function" || !(t in Le.prototype))
            return !1;
          if (e === i)
            return !0;
          var s = Ms(i);
          return !!s && e === s[0];
        }
        function Fh(e) {
          return !!Ou && Ou in e;
        }
        var Nh = Lo ? Gn : Zs;
        function Hi(e) {
          var t = e && e.constructor, i = typeof t == "function" && t.prototype || $r;
          return e === i;
        }
        function Ol(e) {
          return e === e && !nt(e);
        }
        function Il(e, t) {
          return function(i) {
            return i == null ? !1 : i[e] === t && (t !== l || e in Ee(i));
          };
        }
        function Bh(e) {
          var t = fa(e, function(s) {
            return i.size === V && i.clear(), s;
          }), i = t.cache;
          return t;
        }
        function Wh(e, t) {
          var i = e[1], s = t[1], f = i | s, m = f < (Fe | Ue | D), _ = s == D && i == xe || s == D && i == Ie && e[7].length <= t[8] || s == (D | Ie) && t[7].length <= t[8] && i == xe;
          if (!(m || _))
            return e;
          s & Fe && (e[2] = t[2], f |= i & Fe ? 0 : ze);
          var T = t[3];
          if (T) {
            var M = e[3];
            e[3] = M ? ll(M, T, t[4]) : T, e[4] = M ? u(e[3], ge) : t[4];
          }
          return T = t[5], T && (M = e[5], e[5] = M ? cl(M, T, t[6]) : T, e[6] = M ? u(e[5], ge) : t[6]), T = t[7], T && (e[7] = T), s & D && (e[8] = e[8] == null ? t[8] : St(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = f, e;
        }
        function Uh(e) {
          var t = [];
          if (e != null)
            for (var i in Ee(e))
              t.push(i);
          return t;
        }
        function Hh(e) {
          return Fo.call(e);
        }
        function Rl(e, t, i) {
          return t = dt(t === l ? e.length - 1 : t, 0), function() {
            for (var s = arguments, f = -1, m = dt(s.length - t, 0), _ = R(m); ++f < m; )
              _[f] = s[t + f];
            f = -1;
            for (var T = R(t + 1); ++f < t; )
              T[f] = s[f];
            return T[t] = i(_), Mt(e, this, T);
          };
        }
        function Ml(e, t) {
          return t.length < 2 ? e : Er(e, ln(t, 0, -1));
        }
        function qh(e, t) {
          for (var i = e.length, s = St(t.length, i), f = Wt(e); s--; ) {
            var m = t[s];
            e[s] = qn(m, i) ? f[m] : l;
          }
          return e;
        }
        function Ps(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var Cl = Dl(Qu), qi = id || function(e, t) {
          return ft.setTimeout(e, t);
        }, Ls = Dl(dh);
        function Al(e, t, i) {
          var s = t + "";
          return Ls(e, Ph(s, Gh(Ah(s), i)));
        }
        function Dl(e) {
          var t = 0, i = 0;
          return function() {
            var s = ud(), f = ee - (s - i);
            if (i = s, f > 0) {
              if (++t >= ie)
                return arguments[0];
            } else
              t = 0;
            return e.apply(l, arguments);
          };
        }
        function sa(e, t) {
          var i = -1, s = e.length, f = s - 1;
          for (t = t === l ? s : t; ++i < t; ) {
            var m = ms(i, f), _ = e[m];
            e[m] = e[i], e[i] = _;
          }
          return e.length = t, e;
        }
        var zl = Bh(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(fi, function(i, s, f, m) {
            t.push(f ? m.replace(En, "$1") : s || i);
          }), t;
        });
        function Cn(e) {
          if (typeof e == "string" || Vt(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -se ? "-0" : t;
        }
        function Or(e) {
          if (e != null) {
            try {
              return ko.call(e);
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
          return Bt(zn, function(i) {
            var s = "_." + i[0];
            t & i[1] && !an(e, s) && e.push(s);
          }), e.sort();
        }
        function Pl(e) {
          if (e instanceof Le)
            return e.clone();
          var t = new sn(e.__wrapped__, e.__chain__);
          return t.__actions__ = Wt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function Xh(e, t, i) {
          (i ? Dt(e, t, i) : t === l) ? t = 1 : t = dt(Te(t), 0);
          var s = e == null ? 0 : e.length;
          if (!s || t < 1)
            return [];
          for (var f = 0, m = 0, _ = R(qo(s / t)); f < s; )
            _[m++] = ln(e, f, f += t);
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
          return mn(_e(i) ? Wt(i) : [i], xt(t, 1));
        }
        var Kh = De(function(e, t) {
          return st(e) ? Fi(e, xt(t, 1, st, !0)) : [];
        }), Vh = De(function(e, t) {
          var i = cn(t);
          return st(i) && (i = l), st(e) ? Fi(e, xt(t, 1, st, !0), ue(i, 2)) : [];
        }), Zh = De(function(e, t) {
          var i = cn(t);
          return st(i) && (i = l), st(e) ? Fi(e, xt(t, 1, st, !0), l, i) : [];
        });
        function jh(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), ln(e, t < 0 ? 0 : t, s)) : [];
        }
        function Jh(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), t = s - t, ln(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Qh(e, t) {
          return e && e.length ? Qo(e, ue(t, 3), !0, !0) : [];
        }
        function ep(e, t) {
          return e && e.length ? Qo(e, ue(t, 3), !0) : [];
        }
        function tp(e, t, i, s) {
          var f = e == null ? 0 : e.length;
          return f ? (i && typeof i != "number" && Dt(e, t, i) && (i = 0, s = f), Yd(e, t, i, s)) : [];
        }
        function Ll(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Te(i);
          return f < 0 && (f = dt(s + f, 0)), Gr(e, ue(t, 3), f);
        }
        function kl(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s - 1;
          return i !== l && (f = Te(i), f = i < 0 ? dt(s + f, 0) : St(f, s - 1)), Gr(e, ue(t, 3), f, !0);
        }
        function Fl(e) {
          var t = e == null ? 0 : e.length;
          return t ? xt(e, 1) : [];
        }
        function np(e) {
          var t = e == null ? 0 : e.length;
          return t ? xt(e, se) : [];
        }
        function rp(e, t) {
          var i = e == null ? 0 : e.length;
          return i ? (t = t === l ? 1 : Te(t), xt(e, t)) : [];
        }
        function ip(e) {
          for (var t = -1, i = e == null ? 0 : e.length, s = {}; ++t < i; ) {
            var f = e[t];
            s[f[0]] = f[1];
          }
          return s;
        }
        function Nl(e) {
          return e && e.length ? e[0] : l;
        }
        function op(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Te(i);
          return f < 0 && (f = dt(s + f, 0)), Zn(e, t, f);
        }
        function ap(e) {
          var t = e == null ? 0 : e.length;
          return t ? ln(e, 0, -1) : [];
        }
        var sp = De(function(e) {
          var t = je(e, _s);
          return t.length && t[0] === e[0] ? ds(t) : [];
        }), up = De(function(e) {
          var t = cn(e), i = je(e, _s);
          return t === cn(i) ? t = l : i.pop(), i.length && i[0] === e[0] ? ds(i, ue(t, 2)) : [];
        }), lp = De(function(e) {
          var t = cn(e), i = je(e, _s);
          return t = typeof t == "function" ? t : l, t && i.pop(), i.length && i[0] === e[0] ? ds(i, l, t) : [];
        });
        function cp(e, t) {
          return e == null ? "" : ad.call(e, t);
        }
        function cn(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : l;
        }
        function fp(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s;
          return i !== l && (f = Te(i), f = f < 0 ? dt(s + f, 0) : St(f, s - 1)), t === t ? b(e, t, f) : Gr(e, Ao, f, !0);
        }
        function dp(e, t) {
          return e && e.length ? Vu(e, Te(t)) : l;
        }
        var hp = De(Bl);
        function Bl(e, t) {
          return e && e.length && t && t.length ? vs(e, t) : e;
        }
        function pp(e, t, i) {
          return e && e.length && t && t.length ? vs(e, t, ue(i, 2)) : e;
        }
        function gp(e, t, i) {
          return e && e.length && t && t.length ? vs(e, t, l, i) : e;
        }
        var vp = Hn(function(e, t) {
          var i = e == null ? 0 : e.length, s = us(e, t);
          return Ju(e, je(t, function(f) {
            return qn(f, i) ? +f : f;
          }).sort(ul)), s;
        });
        function mp(e, t) {
          var i = [];
          if (!(e && e.length))
            return i;
          var s = -1, f = [], m = e.length;
          for (t = ue(t, 3); ++s < m; ) {
            var _ = e[s];
            t(_, s, e) && (i.push(_), f.push(s));
          }
          return Ju(e, f), i;
        }
        function ks(e) {
          return e == null ? e : cd.call(e);
        }
        function yp(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (i && typeof i != "number" && Dt(e, t, i) ? (t = 0, i = s) : (t = t == null ? 0 : Te(t), i = i === l ? s : Te(i)), ln(e, t, i)) : [];
        }
        function bp(e, t) {
          return Jo(e, t);
        }
        function xp(e, t, i) {
          return bs(e, t, ue(i, 2));
        }
        function wp(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = Jo(e, t);
            if (s < i && xn(e[s], t))
              return s;
          }
          return -1;
        }
        function _p(e, t) {
          return Jo(e, t, !0);
        }
        function Sp(e, t, i) {
          return bs(e, t, ue(i, 2), !0);
        }
        function Ep(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = Jo(e, t, !0) - 1;
            if (xn(e[s], t))
              return s;
          }
          return -1;
        }
        function Tp(e) {
          return e && e.length ? el(e) : [];
        }
        function Op(e, t) {
          return e && e.length ? el(e, ue(t, 2)) : [];
        }
        function Ip(e) {
          var t = e == null ? 0 : e.length;
          return t ? ln(e, 1, t) : [];
        }
        function Rp(e, t, i) {
          return e && e.length ? (t = i || t === l ? 1 : Te(t), ln(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Mp(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), t = s - t, ln(e, t < 0 ? 0 : t, s)) : [];
        }
        function Cp(e, t) {
          return e && e.length ? Qo(e, ue(t, 3), !1, !0) : [];
        }
        function Ap(e, t) {
          return e && e.length ? Qo(e, ue(t, 3)) : [];
        }
        var Dp = De(function(e) {
          return er(xt(e, 1, st, !0));
        }), zp = De(function(e) {
          var t = cn(e);
          return st(t) && (t = l), er(xt(e, 1, st, !0), ue(t, 2));
        }), Pp = De(function(e) {
          var t = cn(e);
          return t = typeof t == "function" ? t : l, er(xt(e, 1, st, !0), l, t);
        });
        function Lp(e) {
          return e && e.length ? er(e) : [];
        }
        function kp(e, t) {
          return e && e.length ? er(e, ue(t, 2)) : [];
        }
        function Fp(e, t) {
          return t = typeof t == "function" ? t : l, e && e.length ? er(e, l, t) : [];
        }
        function Fs(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = Yt(e, function(i) {
            if (st(i))
              return t = dt(i.length, t), !0;
          }), Fn(t, function(i) {
            return je(e, Ri(i));
          });
        }
        function Wl(e, t) {
          if (!(e && e.length))
            return [];
          var i = Fs(e);
          return t == null ? i : je(i, function(s) {
            return Mt(t, l, s);
          });
        }
        var Np = De(function(e, t) {
          return st(e) ? Fi(e, t) : [];
        }), Bp = De(function(e) {
          return ws(Yt(e, st));
        }), Wp = De(function(e) {
          var t = cn(e);
          return st(t) && (t = l), ws(Yt(e, st), ue(t, 2));
        }), Up = De(function(e) {
          var t = cn(e);
          return t = typeof t == "function" ? t : l, ws(Yt(e, st), l, t);
        }), Hp = De(Fs);
        function qp(e, t) {
          return il(e || [], t || [], ki);
        }
        function Gp(e, t) {
          return il(e || [], t || [], Wi);
        }
        var Xp = De(function(e) {
          var t = e.length, i = t > 1 ? e[t - 1] : l;
          return i = typeof i == "function" ? (e.pop(), i) : l, Wl(e, i);
        });
        function Ul(e) {
          var t = g(e);
          return t.__chain__ = !0, t;
        }
        function $p(e, t) {
          return t(e), e;
        }
        function ua(e, t) {
          return t(e);
        }
        var Yp = Hn(function(e) {
          var t = e.length, i = t ? e[0] : 0, s = this.__wrapped__, f = function(m) {
            return us(m, e);
          };
          return t > 1 || this.__actions__.length || !(s instanceof Le) || !qn(i) ? this.thru(f) : (s = s.slice(i, +i + (t ? 1 : 0)), s.__actions__.push({
            func: ua,
            args: [f],
            thisArg: l
          }), new sn(s, this.__chain__).thru(function(m) {
            return t && !m.length && m.push(l), m;
          }));
        });
        function Kp() {
          return Ul(this);
        }
        function Vp() {
          return new sn(this.value(), this.__chain__);
        }
        function Zp() {
          this.__values__ === l && (this.__values__ = tc(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? l : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function jp() {
          return this;
        }
        function Jp(e) {
          for (var t, i = this; i instanceof Yo; ) {
            var s = Pl(i);
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
              func: ua,
              args: [ks],
              thisArg: l
            }), new sn(t, this.__chain__);
          }
          return this.thru(ks);
        }
        function eg() {
          return rl(this.__wrapped__, this.__actions__);
        }
        var tg = ea(function(e, t, i) {
          $e.call(e, i) ? ++e[i] : Wn(e, i, 1);
        });
        function ng(e, t, i) {
          var s = _e(e) ? Oi : $d;
          return i && Dt(e, t, i) && (t = l), s(e, ue(t, 3));
        }
        function rg(e, t) {
          var i = _e(e) ? Yt : Wu;
          return i(e, ue(t, 3));
        }
        var ig = pl(Ll), og = pl(kl);
        function ag(e, t) {
          return xt(la(e, t), 1);
        }
        function sg(e, t) {
          return xt(la(e, t), se);
        }
        function ug(e, t, i) {
          return i = i === l ? 1 : Te(i), xt(la(e, t), i);
        }
        function Hl(e, t) {
          var i = _e(e) ? Bt : Qn;
          return i(e, ue(t, 3));
        }
        function ql(e, t) {
          var i = _e(e) ? Ka : Bu;
          return i(e, ue(t, 3));
        }
        var lg = ea(function(e, t, i) {
          $e.call(e, i) ? e[i].push(t) : Wn(e, i, [t]);
        });
        function cg(e, t, i, s) {
          e = Ut(e) ? e : ei(e), i = i && !s ? Te(i) : 0;
          var f = e.length;
          return i < 0 && (i = dt(f + i, 0)), pa(e) ? i <= f && e.indexOf(t, i) > -1 : !!f && Zn(e, t, i) > -1;
        }
        var fg = De(function(e, t, i) {
          var s = -1, f = typeof t == "function", m = Ut(e) ? R(e.length) : [];
          return Qn(e, function(_) {
            m[++s] = f ? Mt(t, _, i) : Ni(_, t, i);
          }), m;
        }), dg = ea(function(e, t, i) {
          Wn(e, i, t);
        });
        function la(e, t) {
          var i = _e(e) ? je : $u;
          return i(e, ue(t, 3));
        }
        function hg(e, t, i, s) {
          return e == null ? [] : (_e(t) || (t = t == null ? [] : [t]), i = s ? l : i, _e(i) || (i = i == null ? [] : [i]), Zu(e, t, i));
        }
        var pg = ea(function(e, t, i) {
          e[i ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function gg(e, t, i) {
          var s = _e(e) ? qr : Do, f = arguments.length < 3;
          return s(e, ue(t, 4), i, f, Qn);
        }
        function vg(e, t, i) {
          var s = _e(e) ? Mo : Do, f = arguments.length < 3;
          return s(e, ue(t, 4), i, f, Bu);
        }
        function mg(e, t) {
          var i = _e(e) ? Yt : Wu;
          return i(e, da(ue(t, 3)));
        }
        function yg(e) {
          var t = _e(e) ? Lu : ch;
          return t(e);
        }
        function bg(e, t, i) {
          (i ? Dt(e, t, i) : t === l) ? t = 1 : t = Te(t);
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
          if (Ut(e))
            return pa(e) ? S(e) : e.length;
          var t = Et(e);
          return t == at || t == $ ? e.size : ps(e).length;
        }
        function _g(e, t, i) {
          var s = _e(e) ? kn : ph;
          return i && Dt(e, t, i) && (t = l), s(e, ue(t, 3));
        }
        var Sg = De(function(e, t) {
          if (e == null)
            return [];
          var i = t.length;
          return i > 1 && Dt(e, t[0], t[1]) ? t = [] : i > 2 && Dt(t[0], t[1], t[2]) && (t = [t[0]]), Zu(e, xt(t, 1), []);
        }), ca = rd || function() {
          return ft.Date.now();
        };
        function Eg(e, t) {
          if (typeof t != "function")
            throw new bt(B);
          return e = Te(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function Gl(e, t, i) {
          return t = i ? l : t, t = e && t == null ? e.length : t, Un(e, D, l, l, l, l, t);
        }
        function Xl(e, t) {
          var i;
          if (typeof t != "function")
            throw new bt(B);
          return e = Te(e), function() {
            return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = l), i;
          };
        }
        var Ns = De(function(e, t, i) {
          var s = Fe;
          if (i.length) {
            var f = u(i, Jr(Ns));
            s |= Ae;
          }
          return Un(e, s, t, i, f);
        }), $l = De(function(e, t, i) {
          var s = Fe | Ue;
          if (i.length) {
            var f = u(i, Jr($l));
            s |= Ae;
          }
          return Un(t, s, e, i, f);
        });
        function Yl(e, t, i) {
          t = i ? l : t;
          var s = Un(e, xe, l, l, l, l, l, t);
          return s.placeholder = Yl.placeholder, s;
        }
        function Kl(e, t, i) {
          t = i ? l : t;
          var s = Un(e, Oe, l, l, l, l, l, t);
          return s.placeholder = Kl.placeholder, s;
        }
        function Vl(e, t, i) {
          var s, f, m, _, T, M, F = 0, N = !1, U = !1, K = !0;
          if (typeof e != "function")
            throw new bt(B);
          t = fn(t) || 0, nt(i) && (N = !!i.leading, U = "maxWait" in i, m = U ? dt(fn(i.maxWait) || 0, t) : m, K = "trailing" in i ? !!i.trailing : K);
          function re(ut) {
            var wn = s, $n = f;
            return s = f = l, F = ut, _ = e.apply($n, wn), _;
          }
          function fe(ut) {
            return F = ut, T = qi(Pe, t), N ? re(ut) : _;
          }
          function Ce(ut) {
            var wn = ut - M, $n = ut - F, pc = t - wn;
            return U ? St(pc, m - $n) : pc;
          }
          function de(ut) {
            var wn = ut - M, $n = ut - F;
            return M === l || wn >= t || wn < 0 || U && $n >= m;
          }
          function Pe() {
            var ut = ca();
            if (de(ut))
              return ke(ut);
            T = qi(Pe, Ce(ut));
          }
          function ke(ut) {
            return T = l, K && s ? re(ut) : (s = f = l, _);
          }
          function Zt() {
            T !== l && ol(T), F = 0, s = M = f = T = l;
          }
          function zt() {
            return T === l ? _ : ke(ca());
          }
          function jt() {
            var ut = ca(), wn = de(ut);
            if (s = arguments, f = this, M = ut, wn) {
              if (T === l)
                return fe(M);
              if (U)
                return ol(T), T = qi(Pe, t), re(M);
            }
            return T === l && (T = qi(Pe, t)), _;
          }
          return jt.cancel = Zt, jt.flush = zt, jt;
        }
        var Tg = De(function(e, t) {
          return Nu(e, 1, t);
        }), Og = De(function(e, t, i) {
          return Nu(e, fn(t) || 0, i);
        });
        function Ig(e) {
          return Un(e, Se);
        }
        function fa(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new bt(B);
          var i = function() {
            var s = arguments, f = t ? t.apply(this, s) : s[0], m = i.cache;
            if (m.has(f))
              return m.get(f);
            var _ = e.apply(this, s);
            return i.cache = m.set(f, _) || m, _;
          };
          return i.cache = new (fa.Cache || Bn)(), i;
        }
        fa.Cache = Bn;
        function da(e) {
          if (typeof e != "function")
            throw new bt(B);
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
          return Xl(2, e);
        }
        var Mg = gh(function(e, t) {
          t = t.length == 1 && _e(t[0]) ? je(t[0], yt(ue())) : je(xt(t, 1), yt(ue()));
          var i = t.length;
          return De(function(s) {
            for (var f = -1, m = St(s.length, i); ++f < m; )
              s[f] = t[f].call(this, s[f]);
            return Mt(e, this, s);
          });
        }), Bs = De(function(e, t) {
          var i = u(t, Jr(Bs));
          return Un(e, Ae, l, t, i);
        }), Zl = De(function(e, t) {
          var i = u(t, Jr(Zl));
          return Un(e, Ne, l, t, i);
        }), Cg = Hn(function(e, t) {
          return Un(e, Ie, l, l, l, t);
        });
        function Ag(e, t) {
          if (typeof e != "function")
            throw new bt(B);
          return t = t === l ? t : Te(t), De(e, t);
        }
        function Dg(e, t) {
          if (typeof e != "function")
            throw new bt(B);
          return t = t == null ? 0 : dt(Te(t), 0), De(function(i) {
            var s = i[t], f = nr(i, 0, t);
            return s && mn(f, s), Mt(e, this, f);
          });
        }
        function zg(e, t, i) {
          var s = !0, f = !0;
          if (typeof e != "function")
            throw new bt(B);
          return nt(i) && (s = "leading" in i ? !!i.leading : s, f = "trailing" in i ? !!i.trailing : f), Vl(e, t, {
            leading: s,
            maxWait: t,
            trailing: f
          });
        }
        function Pg(e) {
          return Gl(e, 1);
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
          return un(e, me);
        }
        function Ng(e, t) {
          return t = typeof t == "function" ? t : l, un(e, me, t);
        }
        function Bg(e) {
          return un(e, te | me);
        }
        function Wg(e, t) {
          return t = typeof t == "function" ? t : l, un(e, te | me, t);
        }
        function Ug(e, t) {
          return t == null || Fu(e, t, gt(t));
        }
        function xn(e, t) {
          return e === t || e !== e && t !== t;
        }
        var Hg = ia(fs), qg = ia(function(e, t) {
          return e >= t;
        }), Ir = qu(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? qu : function(e) {
          return ot(e) && $e.call(e, "callee") && !Mu.call(e, "callee");
        }, _e = R.isArray, Gg = Ti ? yt(Ti) : Jd;
        function Ut(e) {
          return e != null && ha(e.length) && !Gn(e);
        }
        function st(e) {
          return ot(e) && Ut(e);
        }
        function Xg(e) {
          return e === !0 || e === !1 || ot(e) && At(e) == wt;
        }
        var rr = od || Zs, $g = pt ? yt(pt) : Qd;
        function Yg(e) {
          return ot(e) && e.nodeType === 1 && !Gi(e);
        }
        function Kg(e) {
          if (e == null)
            return !0;
          if (Ut(e) && (_e(e) || typeof e == "string" || typeof e.splice == "function" || rr(e) || Qr(e) || Ir(e)))
            return !e.length;
          var t = Et(e);
          if (t == at || t == $)
            return !e.size;
          if (Hi(e))
            return !ps(e).length;
          for (var i in e)
            if ($e.call(e, i))
              return !1;
          return !0;
        }
        function Vg(e, t) {
          return Bi(e, t);
        }
        function Zg(e, t, i) {
          i = typeof i == "function" ? i : l;
          var s = i ? i(e, t) : l;
          return s === l ? Bi(e, t, l, i) : !!s;
        }
        function Ws(e) {
          if (!ot(e))
            return !1;
          var t = At(e);
          return t == Tt || t == Gt || typeof e.message == "string" && typeof e.name == "string" && !Gi(e);
        }
        function jg(e) {
          return typeof e == "number" && Au(e);
        }
        function Gn(e) {
          if (!nt(e))
            return !1;
          var t = At(e);
          return t == _t || t == Qt || t == hn || t == sr;
        }
        function jl(e) {
          return typeof e == "number" && e == Te(e);
        }
        function ha(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qe;
        }
        function nt(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function ot(e) {
          return e != null && typeof e == "object";
        }
        var Jl = To ? yt(To) : th;
        function Jg(e, t) {
          return e === t || hs(e, t, Cs(t));
        }
        function Qg(e, t, i) {
          return i = typeof i == "function" ? i : l, hs(e, t, Cs(t), i);
        }
        function ev(e) {
          return Ql(e) && e != +e;
        }
        function tv(e) {
          if (Nh(e))
            throw new G(O);
          return Gu(e);
        }
        function nv(e) {
          return e === null;
        }
        function rv(e) {
          return e == null;
        }
        function Ql(e) {
          return typeof e == "number" || ot(e) && At(e) == Ot;
        }
        function Gi(e) {
          if (!ot(e) || At(e) != vt)
            return !1;
          var t = Wo(e);
          if (t === null)
            return !0;
          var i = $e.call(t, "constructor") && t.constructor;
          return typeof i == "function" && i instanceof i && ko.call(i) == Qf;
        }
        var Us = Oo ? yt(Oo) : nh;
        function iv(e) {
          return jl(e) && e >= -Qe && e <= Qe;
        }
        var ec = Io ? yt(Io) : rh;
        function pa(e) {
          return typeof e == "string" || !_e(e) && ot(e) && At(e) == J;
        }
        function Vt(e) {
          return typeof e == "symbol" || ot(e) && At(e) == P;
        }
        var Qr = Ro ? yt(Ro) : ih;
        function ov(e) {
          return e === l;
        }
        function av(e) {
          return ot(e) && Et(e) == ne;
        }
        function sv(e) {
          return ot(e) && At(e) == le;
        }
        var uv = ia(gs), lv = ia(function(e, t) {
          return e <= t;
        });
        function tc(e) {
          if (!e)
            return [];
          if (Ut(e))
            return pa(e) ? x(e) : Wt(e);
          if (Ai && e[Ai])
            return n(e[Ai]());
          var t = Et(e), i = t == at ? o : t == $ ? c : ei;
          return i(e);
        }
        function Xn(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = fn(e), e === se || e === -se) {
            var t = e < 0 ? -1 : 1;
            return t * Xe;
          }
          return e === e ? e : 0;
        }
        function Te(e) {
          var t = Xn(e), i = t % 1;
          return t === t ? i ? t - i : t : 0;
        }
        function nc(e) {
          return e ? Sr(Te(e), 0, Me) : 0;
        }
        function fn(e) {
          if (typeof e == "number")
            return e;
          if (Vt(e))
            return Ze;
          if (nt(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = nt(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Mi(e);
          var i = Aa.test(e);
          return i || lr.test(e) ? So(e.slice(2), i ? 2 : 8) : io.test(e) ? Ze : +e;
        }
        function rc(e) {
          return Mn(e, Ht(e));
        }
        function cv(e) {
          return e ? Sr(Te(e), -Qe, Qe) : e === 0 ? e : 0;
        }
        function qe(e) {
          return e == null ? "" : Kt(e);
        }
        var fv = Zr(function(e, t) {
          if (Hi(t) || Ut(t)) {
            Mn(t, gt(t), e);
            return;
          }
          for (var i in t)
            $e.call(t, i) && ki(e, i, t[i]);
        }), ic = Zr(function(e, t) {
          Mn(t, Ht(t), e);
        }), ga = Zr(function(e, t, i, s) {
          Mn(t, Ht(t), e, s);
        }), dv = Zr(function(e, t, i, s) {
          Mn(t, gt(t), e, s);
        }), hv = Hn(us);
        function pv(e, t) {
          var i = Vr(e);
          return t == null ? i : ku(i, t);
        }
        var gv = De(function(e, t) {
          e = Ee(e);
          var i = -1, s = t.length, f = s > 2 ? t[2] : l;
          for (f && Dt(t[0], t[1], f) && (s = 1); ++i < s; )
            for (var m = t[i], _ = Ht(m), T = -1, M = _.length; ++T < M; ) {
              var F = _[T], N = e[F];
              (N === l || xn(N, $r[F]) && !$e.call(e, F)) && (e[F] = m[F]);
            }
          return e;
        }), vv = De(function(e) {
          return e.push(l, wl), Mt(oc, l, e);
        });
        function mv(e, t) {
          return Co(e, ue(t, 3), Rn);
        }
        function yv(e, t) {
          return Co(e, ue(t, 3), cs);
        }
        function bv(e, t) {
          return e == null ? e : ls(e, ue(t, 3), Ht);
        }
        function xv(e, t) {
          return e == null ? e : Uu(e, ue(t, 3), Ht);
        }
        function wv(e, t) {
          return e && Rn(e, ue(t, 3));
        }
        function _v(e, t) {
          return e && cs(e, ue(t, 3));
        }
        function Sv(e) {
          return e == null ? [] : Zo(e, gt(e));
        }
        function Ev(e) {
          return e == null ? [] : Zo(e, Ht(e));
        }
        function Hs(e, t, i) {
          var s = e == null ? l : Er(e, t);
          return s === l ? i : s;
        }
        function Tv(e, t) {
          return e != null && El(e, t, Kd);
        }
        function qs(e, t) {
          return e != null && El(e, t, Vd);
        }
        var Ov = vl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = Fo.call(t)), e[t] = i;
        }, Xs(qt)), Iv = vl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = Fo.call(t)), $e.call(e, t) ? e[t].push(i) : e[t] = [i];
        }, ue), Rv = De(Ni);
        function gt(e) {
          return Ut(e) ? Pu(e) : ps(e);
        }
        function Ht(e) {
          return Ut(e) ? Pu(e, !0) : oh(e);
        }
        function Mv(e, t) {
          var i = {};
          return t = ue(t, 3), Rn(e, function(s, f, m) {
            Wn(i, t(s, f, m), s);
          }), i;
        }
        function Cv(e, t) {
          var i = {};
          return t = ue(t, 3), Rn(e, function(s, f, m) {
            Wn(i, f, t(s, f, m));
          }), i;
        }
        var Av = Zr(function(e, t, i) {
          jo(e, t, i);
        }), oc = Zr(function(e, t, i, s) {
          jo(e, t, i, s);
        }), Dv = Hn(function(e, t) {
          var i = {};
          if (e == null)
            return i;
          var s = !1;
          t = je(t, function(m) {
            return m = tr(m, e), s || (s = m.length > 1), m;
          }), Mn(e, Rs(e), i), s && (i = un(i, te | We | me, Oh));
          for (var f = t.length; f--; )
            xs(i, t[f]);
          return i;
        });
        function zv(e, t) {
          return ac(e, da(ue(t)));
        }
        var Pv = Hn(function(e, t) {
          return e == null ? {} : sh(e, t);
        });
        function ac(e, t) {
          if (e == null)
            return {};
          var i = je(Rs(e), function(s) {
            return [s];
          });
          return t = ue(t), ju(e, i, function(s, f) {
            return t(s, f[0]);
          });
        }
        function Lv(e, t, i) {
          t = tr(t, e);
          var s = -1, f = t.length;
          for (f || (f = 1, e = l); ++s < f; ) {
            var m = e == null ? l : e[Cn(t[s])];
            m === l && (s = f, m = i), e = Gn(m) ? m.call(e) : m;
          }
          return e;
        }
        function kv(e, t, i) {
          return e == null ? e : Wi(e, t, i);
        }
        function Fv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : Wi(e, t, i, s);
        }
        var sc = bl(gt), uc = bl(Ht);
        function Nv(e, t, i) {
          var s = _e(e), f = s || rr(e) || Qr(e);
          if (t = ue(t, 4), i == null) {
            var m = e && e.constructor;
            f ? i = s ? new m() : [] : nt(e) ? i = Gn(m) ? Vr(Wo(e)) : {} : i = {};
          }
          return (f ? Bt : Rn)(e, function(_, T, M) {
            return t(i, _, T, M);
          }), i;
        }
        function Bv(e, t) {
          return e == null ? !0 : xs(e, t);
        }
        function Wv(e, t, i) {
          return e == null ? e : nl(e, t, Ss(i));
        }
        function Uv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : nl(e, t, Ss(i), s);
        }
        function ei(e) {
          return e == null ? [] : Ci(e, gt(e));
        }
        function Hv(e) {
          return e == null ? [] : Ci(e, Ht(e));
        }
        function qv(e, t, i) {
          return i === l && (i = t, t = l), i !== l && (i = fn(i), i = i === i ? i : 0), t !== l && (t = fn(t), t = t === t ? t : 0), Sr(fn(e), t, i);
        }
        function Gv(e, t, i) {
          return t = Xn(t), i === l ? (i = t, t = 0) : i = Xn(i), e = fn(e), Zd(e, t, i);
        }
        function Xv(e, t, i) {
          if (i && typeof i != "boolean" && Dt(e, t, i) && (t = i = l), i === l && (typeof t == "boolean" ? (i = t, t = l) : typeof e == "boolean" && (i = e, e = l)), e === l && t === l ? (e = 0, t = 1) : (e = Xn(e), t === l ? (t = e, e = 0) : t = Xn(t)), e > t) {
            var s = e;
            e = t, t = s;
          }
          if (i || e % 1 || t % 1) {
            var f = Du();
            return St(e + f * (t - e + _o("1e-" + ((f + "").length - 1))), t);
          }
          return ms(e, t);
        }
        var $v = jr(function(e, t, i) {
          return t = t.toLowerCase(), e + (i ? lc(t) : t);
        });
        function lc(e) {
          return Gs(qe(e).toLowerCase());
        }
        function cc(e) {
          return e = qe(e), e && e.replace(za, es).replace(yo, "");
        }
        function Yv(e, t, i) {
          e = qe(e), t = Kt(t);
          var s = e.length;
          i = i === l ? s : Sr(Te(i), 0, s);
          var f = i;
          return i -= t.length, i >= 0 && e.slice(i, f) == t;
        }
        function Kv(e) {
          return e = qe(e), e && si.test(e) ? e.replace(Dr, ts) : e;
        }
        function Vv(e) {
          return e = qe(e), e && Ra.test(e) ? e.replace(di, "\\$&") : e;
        }
        var Zv = jr(function(e, t, i) {
          return e + (i ? "-" : "") + t.toLowerCase();
        }), jv = jr(function(e, t, i) {
          return e + (i ? " " : "") + t.toLowerCase();
        }), Jv = hl("toLowerCase");
        function Qv(e, t, i) {
          e = qe(e), t = Te(t);
          var s = t ? S(e) : 0;
          if (!t || s >= t)
            return e;
          var f = (t - s) / 2;
          return ra(Go(f), i) + e + ra(qo(f), i);
        }
        function em(e, t, i) {
          e = qe(e), t = Te(t);
          var s = t ? S(e) : 0;
          return t && s < t ? e + ra(t - s, i) : e;
        }
        function tm(e, t, i) {
          e = qe(e), t = Te(t);
          var s = t ? S(e) : 0;
          return t && s < t ? ra(t - s, i) + e : e;
        }
        function nm(e, t, i) {
          return i || t == null ? t = 0 : t && (t = +t), ld(qe(e).replace(zr, ""), t || 0);
        }
        function rm(e, t, i) {
          return (i ? Dt(e, t, i) : t === l) ? t = 1 : t = Te(t), ys(qe(e), t);
        }
        function im() {
          var e = arguments, t = qe(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var om = jr(function(e, t, i) {
          return e + (i ? "_" : "") + t.toLowerCase();
        });
        function am(e, t, i) {
          return i && typeof i != "number" && Dt(e, t, i) && (t = i = l), i = i === l ? Me : i >>> 0, i ? (e = qe(e), e && (typeof t == "string" || t != null && !Us(t)) && (t = Kt(t), !t && jn(e)) ? nr(x(e), 0, i) : e.split(t, i)) : [];
        }
        var sm = jr(function(e, t, i) {
          return e + (i ? " " : "") + Gs(t);
        });
        function um(e, t, i) {
          return e = qe(e), i = i == null ? 0 : Sr(Te(i), 0, e.length), t = Kt(t), e.slice(i, i + t.length) == t;
        }
        function lm(e, t, i) {
          var s = g.templateSettings;
          i && Dt(e, t, i) && (t = l), e = qe(e), t = ga({}, t, s, xl);
          var f = ga({}, t.imports, s.imports, xl), m = gt(f), _ = Ci(f, m), T, M, F = 0, N = t.interpolate || Pr, U = "__p += '", K = Ct(
            (t.escape || Pr).source + "|" + N.source + "|" + (N === li ? pe : Pr).source + "|" + (t.evaluate || Pr).source + "|$",
            "g"
          ), re = "//# sourceURL=" + ($e.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++vr + "]") + `
`;
          e.replace(K, function(de, Pe, ke, Zt, zt, jt) {
            return ke || (ke = Zt), U += e.slice(F, jt).replace(Pa, ns), Pe && (T = !0, U += `' +
__e(` + Pe + `) +
'`), zt && (M = !0, U += `';
` + zt + `;
__p += '`), ke && (U += `' +
((__t = (` + ke + `)) == null ? '' : __t) +
'`), F = jt + de.length, de;
          }), U += `';
`;
          var fe = $e.call(t, "variable") && t.variable;
          if (!fe)
            U = `with (obj) {
` + U + `
}
`;
          else if (ro.test(fe))
            throw new G(L);
          U = (M ? U.replace(pn, "") : U).replace(ur, "$1").replace(Yn, "$1;"), U = "function(" + (fe || "obj") + `) {
` + (fe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
          var Ce = dc(function() {
            return ve(m, re + "return " + U).apply(l, _);
          });
          if (Ce.source = U, Ws(Ce))
            throw Ce;
          return Ce;
        }
        function cm(e) {
          return qe(e).toLowerCase();
        }
        function fm(e) {
          return qe(e).toUpperCase();
        }
        function dm(e, t, i) {
          if (e = qe(e), e && (i || t === l))
            return Mi(e);
          if (!e || !(t = Kt(t)))
            return e;
          var s = x(e), f = x(t), m = zo(s, f), _ = Po(s, f) + 1;
          return nr(s, m, _).join("");
        }
        function hm(e, t, i) {
          if (e = qe(e), e && (i || t === l))
            return e.slice(0, I(e) + 1);
          if (!e || !(t = Kt(t)))
            return e;
          var s = x(e), f = Po(s, x(t)) + 1;
          return nr(s, 0, f).join("");
        }
        function pm(e, t, i) {
          if (e = qe(e), e && (i || t === l))
            return e.replace(zr, "");
          if (!e || !(t = Kt(t)))
            return e;
          var s = x(e), f = zo(s, x(t));
          return nr(s, f).join("");
        }
        function gm(e, t) {
          var i = Ye, s = X;
          if (nt(t)) {
            var f = "separator" in t ? t.separator : f;
            i = "length" in t ? Te(t.length) : i, s = "omission" in t ? Kt(t.omission) : s;
          }
          e = qe(e);
          var m = e.length;
          if (jn(e)) {
            var _ = x(e);
            m = _.length;
          }
          if (i >= m)
            return e;
          var T = i - S(s);
          if (T < 1)
            return s;
          var M = _ ? nr(_, 0, T).join("") : e.slice(0, T);
          if (f === l)
            return M + s;
          if (_ && (T += M.length - T), Us(f)) {
            if (e.slice(T).search(f)) {
              var F, N = M;
              for (f.global || (f = Ct(f.source, qe(hi.exec(f)) + "g")), f.lastIndex = 0; F = f.exec(N); )
                var U = F.index;
              M = M.slice(0, U === l ? T : U);
            }
          } else if (e.indexOf(Kt(f), T) != T) {
            var K = M.lastIndexOf(f);
            K > -1 && (M = M.slice(0, K));
          }
          return M + s;
        }
        function vm(e) {
          return e = qe(e), e && to.test(e) ? e.replace(ai, z) : e;
        }
        var mm = jr(function(e, t, i) {
          return e + (i ? " " : "") + t.toUpperCase();
        }), Gs = hl("toUpperCase");
        function fc(e, t, i) {
          return e = qe(e), t = i ? l : t, t === l ? r(e) ? q(e) : ja(e) : e.match(t) || [];
        }
        var dc = De(function(e, t) {
          try {
            return Mt(e, l, t);
          } catch (i) {
            return Ws(i) ? i : new G(i);
          }
        }), ym = Hn(function(e, t) {
          return Bt(t, function(i) {
            i = Cn(i), Wn(e, i, Ns(e[i], e));
          }), e;
        });
        function bm(e) {
          var t = e == null ? 0 : e.length, i = ue();
          return e = t ? je(e, function(s) {
            if (typeof s[1] != "function")
              throw new bt(B);
            return [i(s[0]), s[1]];
          }) : [], De(function(s) {
            for (var f = -1; ++f < t; ) {
              var m = e[f];
              if (Mt(m[0], this, s))
                return Mt(m[1], this, s);
            }
          });
        }
        function xm(e) {
          return Xd(un(e, te));
        }
        function Xs(e) {
          return function() {
            return e;
          };
        }
        function wm(e, t) {
          return e == null || e !== e ? t : e;
        }
        var _m = gl(), Sm = gl(!0);
        function qt(e) {
          return e;
        }
        function $s(e) {
          return Xu(typeof e == "function" ? e : un(e, te));
        }
        function Em(e) {
          return Yu(un(e, te));
        }
        function Tm(e, t) {
          return Ku(e, un(t, te));
        }
        var Om = De(function(e, t) {
          return function(i) {
            return Ni(i, e, t);
          };
        }), Im = De(function(e, t) {
          return function(i) {
            return Ni(e, i, t);
          };
        });
        function Ys(e, t, i) {
          var s = gt(t), f = Zo(t, s);
          i == null && !(nt(t) && (f.length || !s.length)) && (i = t, t = e, e = this, f = Zo(t, gt(t)));
          var m = !(nt(i) && "chain" in i) || !!i.chain, _ = Gn(e);
          return Bt(f, function(T) {
            var M = t[T];
            e[T] = M, _ && (e.prototype[T] = function() {
              var F = this.__chain__;
              if (m || F) {
                var N = e(this.__wrapped__), U = N.__actions__ = Wt(this.__actions__);
                return U.push({ func: M, args: arguments, thisArg: e }), N.__chain__ = F, N;
              }
              return M.apply(e, mn([this.value()], arguments));
            });
          }), e;
        }
        function Rm() {
          return ft._ === this && (ft._ = ed), this;
        }
        function Ks() {
        }
        function Mm(e) {
          return e = Te(e), De(function(t) {
            return Vu(t, e);
          });
        }
        var Cm = Ts(je), Am = Ts(Oi), Dm = Ts(kn);
        function hc(e) {
          return Ds(e) ? Ri(Cn(e)) : uh(e);
        }
        function zm(e) {
          return function(t) {
            return e == null ? l : Er(e, t);
          };
        }
        var Pm = ml(), Lm = ml(!0);
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
          if (e = Te(e), e < 1 || e > Qe)
            return [];
          var i = Me, s = St(e, Me);
          t = ue(t), e -= Me;
          for (var f = Fn(s, t); ++i < e; )
            t(i);
          return f;
        }
        function Wm(e) {
          return _e(e) ? je(e, Cn) : Vt(e) ? [e] : Wt(zl(qe(e)));
        }
        function Um(e) {
          var t = ++Jf;
          return qe(e) + t;
        }
        var Hm = na(function(e, t) {
          return e + t;
        }, 0), qm = Os("ceil"), Gm = na(function(e, t) {
          return e / t;
        }, 1), Xm = Os("floor");
        function $m(e) {
          return e && e.length ? Vo(e, qt, fs) : l;
        }
        function Ym(e, t) {
          return e && e.length ? Vo(e, ue(t, 2), fs) : l;
        }
        function Km(e) {
          return mr(e, qt);
        }
        function Vm(e, t) {
          return mr(e, ue(t, 2));
        }
        function Zm(e) {
          return e && e.length ? Vo(e, qt, gs) : l;
        }
        function jm(e, t) {
          return e && e.length ? Vo(e, ue(t, 2), gs) : l;
        }
        var Jm = na(function(e, t) {
          return e * t;
        }, 1), Qm = Os("round"), e0 = na(function(e, t) {
          return e - t;
        }, 0);
        function t0(e) {
          return e && e.length ? Xr(e, qt) : 0;
        }
        function n0(e, t) {
          return e && e.length ? Xr(e, ue(t, 2)) : 0;
        }
        return g.after = Eg, g.ary = Gl, g.assign = fv, g.assignIn = ic, g.assignInWith = ga, g.assignWith = dv, g.at = hv, g.before = Xl, g.bind = Ns, g.bindAll = ym, g.bindKey = $l, g.castArray = kg, g.chain = Ul, g.chunk = Xh, g.compact = $h, g.concat = Yh, g.cond = bm, g.conforms = xm, g.constant = Xs, g.countBy = tg, g.create = pv, g.curry = Yl, g.curryRight = Kl, g.debounce = Vl, g.defaults = gv, g.defaultsDeep = vv, g.defer = Tg, g.delay = Og, g.difference = Kh, g.differenceBy = Vh, g.differenceWith = Zh, g.drop = jh, g.dropRight = Jh, g.dropRightWhile = Qh, g.dropWhile = ep, g.fill = tp, g.filter = rg, g.flatMap = ag, g.flatMapDeep = sg, g.flatMapDepth = ug, g.flatten = Fl, g.flattenDeep = np, g.flattenDepth = rp, g.flip = Ig, g.flow = _m, g.flowRight = Sm, g.fromPairs = ip, g.functions = Sv, g.functionsIn = Ev, g.groupBy = lg, g.initial = ap, g.intersection = sp, g.intersectionBy = up, g.intersectionWith = lp, g.invert = Ov, g.invertBy = Iv, g.invokeMap = fg, g.iteratee = $s, g.keyBy = dg, g.keys = gt, g.keysIn = Ht, g.map = la, g.mapKeys = Mv, g.mapValues = Cv, g.matches = Em, g.matchesProperty = Tm, g.memoize = fa, g.merge = Av, g.mergeWith = oc, g.method = Om, g.methodOf = Im, g.mixin = Ys, g.negate = da, g.nthArg = Mm, g.omit = Dv, g.omitBy = zv, g.once = Rg, g.orderBy = hg, g.over = Cm, g.overArgs = Mg, g.overEvery = Am, g.overSome = Dm, g.partial = Bs, g.partialRight = Zl, g.partition = pg, g.pick = Pv, g.pickBy = ac, g.property = hc, g.propertyOf = zm, g.pull = hp, g.pullAll = Bl, g.pullAllBy = pp, g.pullAllWith = gp, g.pullAt = vp, g.range = Pm, g.rangeRight = Lm, g.rearg = Cg, g.reject = mg, g.remove = mp, g.rest = Ag, g.reverse = ks, g.sampleSize = bg, g.set = kv, g.setWith = Fv, g.shuffle = xg, g.slice = yp, g.sortBy = Sg, g.sortedUniq = Tp, g.sortedUniqBy = Op, g.split = am, g.spread = Dg, g.tail = Ip, g.take = Rp, g.takeRight = Mp, g.takeRightWhile = Cp, g.takeWhile = Ap, g.tap = $p, g.throttle = zg, g.thru = ua, g.toArray = tc, g.toPairs = sc, g.toPairsIn = uc, g.toPath = Wm, g.toPlainObject = rc, g.transform = Nv, g.unary = Pg, g.union = Dp, g.unionBy = zp, g.unionWith = Pp, g.uniq = Lp, g.uniqBy = kp, g.uniqWith = Fp, g.unset = Bv, g.unzip = Fs, g.unzipWith = Wl, g.update = Wv, g.updateWith = Uv, g.values = ei, g.valuesIn = Hv, g.without = Np, g.words = fc, g.wrap = Lg, g.xor = Bp, g.xorBy = Wp, g.xorWith = Up, g.zip = Hp, g.zipObject = qp, g.zipObjectDeep = Gp, g.zipWith = Xp, g.entries = sc, g.entriesIn = uc, g.extend = ic, g.extendWith = ga, Ys(g, g), g.add = Hm, g.attempt = dc, g.camelCase = $v, g.capitalize = lc, g.ceil = qm, g.clamp = qv, g.clone = Fg, g.cloneDeep = Bg, g.cloneDeepWith = Wg, g.cloneWith = Ng, g.conformsTo = Ug, g.deburr = cc, g.defaultTo = wm, g.divide = Gm, g.endsWith = Yv, g.eq = xn, g.escape = Kv, g.escapeRegExp = Vv, g.every = ng, g.find = ig, g.findIndex = Ll, g.findKey = mv, g.findLast = og, g.findLastIndex = kl, g.findLastKey = yv, g.floor = Xm, g.forEach = Hl, g.forEachRight = ql, g.forIn = bv, g.forInRight = xv, g.forOwn = wv, g.forOwnRight = _v, g.get = Hs, g.gt = Hg, g.gte = qg, g.has = Tv, g.hasIn = qs, g.head = Nl, g.identity = qt, g.includes = cg, g.indexOf = op, g.inRange = Gv, g.invoke = Rv, g.isArguments = Ir, g.isArray = _e, g.isArrayBuffer = Gg, g.isArrayLike = Ut, g.isArrayLikeObject = st, g.isBoolean = Xg, g.isBuffer = rr, g.isDate = $g, g.isElement = Yg, g.isEmpty = Kg, g.isEqual = Vg, g.isEqualWith = Zg, g.isError = Ws, g.isFinite = jg, g.isFunction = Gn, g.isInteger = jl, g.isLength = ha, g.isMap = Jl, g.isMatch = Jg, g.isMatchWith = Qg, g.isNaN = ev, g.isNative = tv, g.isNil = rv, g.isNull = nv, g.isNumber = Ql, g.isObject = nt, g.isObjectLike = ot, g.isPlainObject = Gi, g.isRegExp = Us, g.isSafeInteger = iv, g.isSet = ec, g.isString = pa, g.isSymbol = Vt, g.isTypedArray = Qr, g.isUndefined = ov, g.isWeakMap = av, g.isWeakSet = sv, g.join = cp, g.kebabCase = Zv, g.last = cn, g.lastIndexOf = fp, g.lowerCase = jv, g.lowerFirst = Jv, g.lt = uv, g.lte = lv, g.max = $m, g.maxBy = Ym, g.mean = Km, g.meanBy = Vm, g.min = Zm, g.minBy = jm, g.stubArray = Vs, g.stubFalse = Zs, g.stubObject = km, g.stubString = Fm, g.stubTrue = Nm, g.multiply = Jm, g.nth = dp, g.noConflict = Rm, g.noop = Ks, g.now = ca, g.pad = Qv, g.padEnd = em, g.padStart = tm, g.parseInt = nm, g.random = Xv, g.reduce = gg, g.reduceRight = vg, g.repeat = rm, g.replace = im, g.result = Lv, g.round = Qm, g.runInContext = w, g.sample = yg, g.size = wg, g.snakeCase = om, g.some = _g, g.sortedIndex = bp, g.sortedIndexBy = xp, g.sortedIndexOf = wp, g.sortedLastIndex = _p, g.sortedLastIndexBy = Sp, g.sortedLastIndexOf = Ep, g.startCase = sm, g.startsWith = um, g.subtract = e0, g.sum = t0, g.sumBy = n0, g.template = lm, g.times = Bm, g.toFinite = Xn, g.toInteger = Te, g.toLength = nc, g.toLower = cm, g.toNumber = fn, g.toSafeInteger = cv, g.toString = qe, g.toUpper = fm, g.trim = dm, g.trimEnd = hm, g.trimStart = pm, g.truncate = gm, g.unescape = vm, g.uniqueId = Um, g.upperCase = mm, g.upperFirst = Gs, g.each = Hl, g.eachRight = ql, g.first = Nl, Ys(g, (function() {
          var e = {};
          return Rn(g, function(t, i) {
            $e.call(g.prototype, i) || (e[i] = t);
          }), e;
        })(), { chain: !1 }), g.VERSION = y, Bt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          g[e].placeholder = g;
        }), Bt(["drop", "take"], function(e, t) {
          Le.prototype[e] = function(i) {
            i = i === l ? 1 : dt(Te(i), 0);
            var s = this.__filtered__ && !t ? new Le(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = St(i, s.__takeCount__) : s.__views__.push({
              size: St(i, Me),
              type: e + (s.__dir__ < 0 ? "Right" : "")
            }), s;
          }, Le.prototype[e + "Right"] = function(i) {
            return this.reverse()[e](i).reverse();
          };
        }), Bt(["filter", "map", "takeWhile"], function(e, t) {
          var i = t + 1, s = i == we || i == Re;
          Le.prototype[e] = function(f) {
            var m = this.clone();
            return m.__iteratees__.push({
              iteratee: ue(f, 3),
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
          return this.filter(qt);
        }, Le.prototype.find = function(e) {
          return this.filter(e).head();
        }, Le.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, Le.prototype.invokeMap = De(function(e, t) {
          return typeof e == "function" ? new Le(this) : this.map(function(i) {
            return Ni(i, e, t);
          });
        }), Le.prototype.reject = function(e) {
          return this.filter(da(ue(e)));
        }, Le.prototype.slice = function(e, t) {
          e = Te(e);
          var i = this;
          return i.__filtered__ && (e > 0 || t < 0) ? new Le(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== l && (t = Te(t), i = t < 0 ? i.dropRight(-t) : i.take(t - e)), i);
        }, Le.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, Le.prototype.toArray = function() {
          return this.take(Me);
        }, Rn(Le.prototype, function(e, t) {
          var i = /^(?:filter|find|map|reject)|While$/.test(t), s = /^(?:head|last)$/.test(t), f = g[s ? "take" + (t == "last" ? "Right" : "") : t], m = s || /^find/.test(t);
          f && (g.prototype[t] = function() {
            var _ = this.__wrapped__, T = s ? [1] : arguments, M = _ instanceof Le, F = T[0], N = M || _e(_), U = function(Pe) {
              var ke = f.apply(g, mn([Pe], T));
              return s && K ? ke[0] : ke;
            };
            N && i && typeof F == "function" && F.length != 1 && (M = N = !1);
            var K = this.__chain__, re = !!this.__actions__.length, fe = m && !K, Ce = M && !re;
            if (!m && N) {
              _ = Ce ? _ : new Le(this);
              var de = e.apply(_, T);
              return de.__actions__.push({ func: ua, args: [U], thisArg: l }), new sn(de, K);
            }
            return fe && Ce ? e.apply(this, T) : (de = this.thru(U), fe ? s ? de.value()[0] : de.value() : de);
          });
        }), Bt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = In[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
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
        }), Rn(Le.prototype, function(e, t) {
          var i = g[t];
          if (i) {
            var s = i.name + "";
            $e.call(Kr, s) || (Kr[s] = []), Kr[s].push({ name: t, func: i });
          }
        }), Kr[ta(l, Ue).name] = [{
          name: "wrapper",
          func: l
        }], Le.prototype.clone = vd, Le.prototype.reverse = md, Le.prototype.value = yd, g.prototype.at = Yp, g.prototype.chain = Kp, g.prototype.commit = Vp, g.prototype.next = Zp, g.prototype.plant = Jp, g.prototype.reverse = Qp, g.prototype.toJSON = g.prototype.valueOf = g.prototype.value = eg, g.prototype.first = g.prototype.head, Ai && (g.prototype[Ai] = jp), g;
      }), Y = Z();
      Ln ? ((Ln.exports = Y)._ = Y, on._ = Y) : ft._ = Y;
    }).call(Iy);
  })(Yi, Yi.exports)), Yi.exports;
}
var Xi = Ry(), eu, Zc;
function Eu() {
  if (Zc) return eu;
  Zc = 1;
  function p(h) {
    var l = typeof h;
    return h != null && (l == "object" || l == "function");
  }
  return eu = p, eu;
}
var tu, jc;
function My() {
  if (jc) return tu;
  jc = 1;
  var p = typeof or == "object" && or && or.Object === Object && or;
  return tu = p, tu;
}
var nu, Jc;
function $f() {
  if (Jc) return nu;
  Jc = 1;
  var p = My(), h = typeof self == "object" && self && self.Object === Object && self, l = p || h || Function("return this")();
  return nu = l, nu;
}
var ru, Qc;
function Cy() {
  if (Qc) return ru;
  Qc = 1;
  var p = $f(), h = function() {
    return p.Date.now();
  };
  return ru = h, ru;
}
var iu, ef;
function Ay() {
  if (ef) return iu;
  ef = 1;
  var p = /\s/;
  function h(l) {
    for (var y = l.length; y-- && p.test(l.charAt(y)); )
      ;
    return y;
  }
  return iu = h, iu;
}
var ou, tf;
function Dy() {
  if (tf) return ou;
  tf = 1;
  var p = Ay(), h = /^\s+/;
  function l(y) {
    return y && y.slice(0, p(y) + 1).replace(h, "");
  }
  return ou = l, ou;
}
var au, nf;
function Yf() {
  if (nf) return au;
  nf = 1;
  var p = $f(), h = p.Symbol;
  return au = h, au;
}
var su, rf;
function zy() {
  if (rf) return su;
  rf = 1;
  var p = Yf(), h = Object.prototype, l = h.hasOwnProperty, y = h.toString, A = p ? p.toStringTag : void 0;
  function O(B) {
    var L = l.call(B, A), E = B[A];
    try {
      B[A] = void 0;
      var V = !0;
    } catch {
    }
    var ge = y.call(B);
    return V && (L ? B[A] = E : delete B[A]), ge;
  }
  return su = O, su;
}
var uu, of;
function Py() {
  if (of) return uu;
  of = 1;
  var p = Object.prototype, h = p.toString;
  function l(y) {
    return h.call(y);
  }
  return uu = l, uu;
}
var lu, af;
function Ly() {
  if (af) return lu;
  af = 1;
  var p = Yf(), h = zy(), l = Py(), y = "[object Null]", A = "[object Undefined]", O = p ? p.toStringTag : void 0;
  function B(L) {
    return L == null ? L === void 0 ? A : y : O && O in Object(L) ? h(L) : l(L);
  }
  return lu = B, lu;
}
var cu, sf;
function ky() {
  if (sf) return cu;
  sf = 1;
  function p(h) {
    return h != null && typeof h == "object";
  }
  return cu = p, cu;
}
var fu, uf;
function Fy() {
  if (uf) return fu;
  uf = 1;
  var p = Ly(), h = ky(), l = "[object Symbol]";
  function y(A) {
    return typeof A == "symbol" || h(A) && p(A) == l;
  }
  return fu = y, fu;
}
var du, lf;
function Ny() {
  if (lf) return du;
  lf = 1;
  var p = Dy(), h = Eu(), l = Fy(), y = NaN, A = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, B = /^0o[0-7]+$/i, L = parseInt;
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
    var te = O.test(V);
    return te || B.test(V) ? L(V.slice(2), te ? 2 : 8) : A.test(V) ? y : +V;
  }
  return du = E, du;
}
var hu, cf;
function By() {
  if (cf) return hu;
  cf = 1;
  var p = Eu(), h = Cy(), l = Ny(), y = "Expected a function", A = Math.max, O = Math.min;
  function B(L, E, V) {
    var ge, te, We, me, be, Ge, Fe = 0, Ue = !1, ze = !1, xe = !0;
    if (typeof L != "function")
      throw new TypeError(y);
    E = l(E) || 0, p(V) && (Ue = !!V.leading, ze = "maxWait" in V, We = ze ? A(l(V.maxWait) || 0, E) : We, xe = "trailing" in V ? !!V.trailing : xe);
    function Oe(ee) {
      var we = ge, he = te;
      return ge = te = void 0, Fe = ee, me = L.apply(he, we), me;
    }
    function Ae(ee) {
      return Fe = ee, be = setTimeout(Ie, E), Ue ? Oe(ee) : me;
    }
    function Ne(ee) {
      var we = ee - Ge, he = ee - Fe, Re = E - we;
      return ze ? O(Re, We - he) : Re;
    }
    function D(ee) {
      var we = ee - Ge, he = ee - Fe;
      return Ge === void 0 || we >= E || we < 0 || ze && he >= We;
    }
    function Ie() {
      var ee = h();
      if (D(ee))
        return Se(ee);
      be = setTimeout(Ie, Ne(ee));
    }
    function Se(ee) {
      return be = void 0, xe && ge ? Oe(ee) : (ge = te = void 0, me);
    }
    function Ye() {
      be !== void 0 && clearTimeout(be), Fe = 0, ge = Ge = te = be = void 0;
    }
    function X() {
      return be === void 0 ? me : Se(h());
    }
    function ie() {
      var ee = h(), we = D(ee);
      if (ge = arguments, te = this, Ge = ee, we) {
        if (be === void 0)
          return Ae(Ge);
        if (ze)
          return clearTimeout(be), be = setTimeout(Ie, E), Oe(Ge);
      }
      return be === void 0 && (be = setTimeout(Ie, E)), me;
    }
    return ie.cancel = Ye, ie.flush = X, ie;
  }
  return hu = B, hu;
}
var pu, ff;
function Wy() {
  if (ff) return pu;
  ff = 1;
  var p = By(), h = Eu(), l = "Expected a function";
  function y(A, O, B) {
    var L = !0, E = !0;
    if (typeof A != "function")
      throw new TypeError(l);
    return h(B) && (L = "leading" in B ? !!B.leading : L, E = "trailing" in B ? !!B.trailing : E), p(A, O, {
      leading: L,
      maxWait: O,
      trailing: E
    });
  }
  return pu = y, pu;
}
var Uy = Wy();
const Hy = /* @__PURE__ */ Pf(Uy), qy = ["onContextmenu"], Gy = {
  key: 1,
  class: "text"
}, dn = "__drop__", Xy = /* @__PURE__ */ Ta({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(p, { emit: h }) {
    const l = rt(void 0), y = it(() => Gf(l.value)), A = it(() => y.value.cols), O = it(() => y.value.rowHeight), B = it(() => `${O.value}-${Object.values(A.value).join("-")}`), L = rt(typeof window < "u" ? window.innerWidth : 1200), E = it(() => Ze(L.value)), V = xf(), ge = it(() => V.params.pageid || ""), te = it(() => mf(ge.value)), We = it(() => yf(ge.value)), me = it(() => te.value.widgets), be = it(() => We.value.layout), Ge = g0(), Fe = rt({ x: 0, y: 0 }), Ue = rt({
      visible: !1,
      x: 0,
      y: 0,
      widgetId: ""
    }), ze = rt({
      visible: !1,
      x: 0,
      y: 0
    }), xe = ($, J) => {
      Ue.value = {
        visible: !0,
        x: $.clientX,
        y: $.clientY,
        widgetId: J
      }, ze.value.visible = !1;
    }, Oe = () => {
      Ue.value.visible = !1, ze.value.visible = !1;
    }, Ae = () => {
      D(Ue.value.widgetId), Oe();
    }, Ne = () => {
      Ie(), Oe();
    }, D = ($) => {
      const J = me.value.find((Q) => Q.uid === $), P = be.value.find((Q) => Q.id === $);
      J && P && Ge.copy(J, P);
    }, Ie = () => {
      const $ = Ge.paste();
      if (!$) return;
      const J = "li_" + Math.random().toString(36).substring(7), P = Xi.cloneDeep($.widget);
      P.uid = J, P.config?.settings && (P.config.settings.name = "widget_" + J);
      const { colW: Q, rowH: ne } = Me(), le = Math.round(Fe.value.x / Q), ce = Math.round(Fe.value.y / ne), ae = {
        i: J,
        x: le,
        y: ce,
        w: Math.max(1, Math.round(($.layout.width || 200) / Q)),
        h: Math.max(1, Math.round(($.layout.height || 100) / ne)),
        static: !1
      };
      te.value.updateWidgets([...me.value, P]), he.value = [...he.value, ae], wt(he.value);
    }, Se = rt(), Ye = rt(), X = rt(!1), ie = rt({ x: -1, y: -1 }), ee = rt(!1), we = rt([]), he = rt([]), Re = rt([]), se = it(() => [
      ...he.value,
      ...Re.value
    ]), Qe = rt(!1);
    function Xe($, J = 0) {
      if (typeof $ == "number") return $;
      const P = Number($);
      return Number.isFinite(P) ? P : J;
    }
    function Ze($) {
      const J = A.value;
      return $ >= ii.lg ? J.lg : $ >= ii.md ? J.md : $ >= ii.sm ? J.sm : $ >= ii.xs ? J.xs : J.xxs;
    }
    function Me() {
      return { colW: 1200 / A.value.md, rowH: O.value };
    }
    function Nt($) {
      const { colW: J, rowH: P } = Me(), Q = Xe($.x, 0), ne = Xe($.y, 0), le = Xe($.width, J), ce = Xe($.height, P);
      return {
        i: String($.id ?? $.i ?? ""),
        x: Math.round(Q / J),
        y: Math.round(ne / P),
        w: Math.max(1, Math.round(le / J)),
        h: Math.max(1, Math.round(ce / P)),
        static: !1
      };
    }
    function ht($) {
      const { colW: J, rowH: P } = Me();
      return {
        id: String($.i),
        x: Xe($.x, 0) * J,
        y: Xe($.y, 0) * P,
        width: Xe($.w, 1) * J,
        height: Xe($.h, 1) * P,
        z: 3e3
      };
    }
    Je(be, ($) => {
      Qe.value = !0;
      try {
        const J = Array.isArray($) ? $.map(Nt) : [];
        Xi.isEqual(he.value, J) || (he.value = J);
      } finally {
        kt(() => Qe.value = !1);
      }
    }, { immediate: !0, deep: !0 });
    const zn = Hy(() => {
      L.value = window.innerWidth;
      const $ = be.value || [], J = Array.isArray($) ? $.map(Nt) : [];
      Xi.isEqual(he.value, J) || (he.value = J);
    }, 120);
    let lt = null;
    const et = Ji(wf) ?? null;
    function hn() {
      if (et && ge.value) {
        const $ = et.getPage(ge.value);
        l.value = $?.layoutSettings ? { ...Sa($.layoutSettings) } : void 0;
      }
    }
    Oa(() => {
      window.addEventListener("resize", zn, { passive: !0 }), hn(), et && "subscribe" in et && (lt = et.subscribe(($) => {
        $ === "PAGE_UPDATE" && hn();
      }));
    }), _u(() => {
      window.removeEventListener("resize", zn), et && "unsubscribe" in et && lt && et.unsubscribe(lt);
    });
    function wt($) {
      if (Qe.value) return;
      const P = ($ ?? se.value).filter((ce) => ce.i !== dn).map(ht), Q = be.value || [], ne = P.map((ce) => ({
        ...ce,
        x: Math.round(ce.x * 100) / 100,
        y: Math.round(ce.y * 100) / 100,
        width: Math.round(ce.width * 100) / 100,
        height: Math.round(ce.height * 100) / 100
      })), le = Q.map((ce) => ({
        ...ce,
        x: Math.round(ce.x * 100) / 100,
        y: Math.round(ce.y * 100) / 100,
        width: Math.round(ce.width * 100) / 100,
        height: Math.round(ce.height * 100) / 100
      }));
      Xi.isEqual(le, ne) || We.value.updateLayout(P);
    }
    async function j() {
      return Re.value.find(($) => $.i === dn) || (Re.value = [...Re.value, { x: 0, y: 0, w: 2, h: 2, i: dn, static: !1 }], await kt()), await kt(), Se.value?.getItem?.(dn);
    }
    function Gt() {
      Re.value = Re.value.filter(($) => $.i !== dn);
    }
    async function Tt() {
      X.value = !0, ee.value = !1, await j();
    }
    async function _t($) {
      const J = $;
      if (!J || !Se.value) return;
      const P = document.querySelector(".alayout");
      if (!P) return;
      const Q = P.getBoundingClientRect();
      Re.value.find((tt) => tt.i === dn) || (Re.value = [...Re.value, { x: 0, y: 0, w: 2, h: 2, i: dn, static: !1 }], await kt()), await kt();
      const ne = Se.value?.getItem?.(dn);
      if (!ne) return;
      const le = J.clientX - Q.left, ce = J.clientY - Q.top;
      let ae = ne.calcXY(ce, le);
      const oe = Se.value?.cols ?? 12;
      (ae.x < 0 || ae.y < 0 || ae.x >= oe) && (ae = ne.calcXY(le, ce)), ie.value = { x: Xe(ae.x, 0), y: Xe(ae.y, 0) }, ee.value ? Se.value.dragEvent("drag", dn, ie.value.x, ie.value.y, 2, 2) : (Se.value.dragEvent("dragstart", dn, ie.value.x, ie.value.y, 2, 2), ee.value = !0);
    }
    function Qt() {
      ee.value && Se.value && Se.value.dragEvent("dragend", dn, ie.value.x, ie.value.y, 2, 2), Gt(), ee.value = !1, X.value = !1;
    }
    function at($) {
      const J = $?.item?._underlying_vm_ || $?.added?.element || $?.item, P = J?.type ?? "UnknownWidget", Q = J?.datasourceId ?? "default";
      ee.value && Se.value && Se.value.dragEvent("dragend", dn, ie.value.x, ie.value.y, 2, 2), Gt(), ee.value = !1, X.value = !1;
      const ne = `widget_${Math.random().toString(36).slice(2, 9)}`, { x: le, y: ce } = ie.value;
      he.value = [...he.value, { i: ne, x: le, y: ce, w: 2, h: 2, static: !1 }], wt(he.value), vt(ne, P, Q), ie.value = { x: -1, y: -1 };
    }
    function Ot() {
      X.value = !0;
    }
    function Xt() {
      Qt();
    }
    function vt($, J, P) {
      const ne = { uid: $, type: J, config: { datasourceId: P, settings: {} }, wrapperConfig: Xi.cloneDeep(d0) };
      te.value.updateWidgets([...me.value, ne]);
    }
    function $t($) {
      te.value.updateWidgets(me.value.filter((J) => J.uid !== $)), he.value = he.value.filter((J) => J.i !== $), wt(he.value);
    }
    const sr = h, It = ($) => {
      sr("openSettings", $);
    };
    return ($, J) => {
      const P = mu("va-button"), Q = mu("VaScrollContainer");
      return Ft(), Rr(Q, {
        class: "max-h-screen ml-15",
        vertical: ""
      }, {
        default: ir(() => [
          xa("div", {
            ref_key: "wrapper",
            ref: Ye,
            onDragenter: Ot,
            onDrop: yc(Xt, ["prevent"]),
            onDrag: _t,
            class: "alayout",
            onClick: Oe,
            style: Ki({ "--grid-row-height": O.value + "px", "--grid-cols": E.value })
          }, [
            (Ft(), Rr(Dn(qf), {
              ref_key: "gridLayout",
              ref: Se,
              key: B.value,
              layout: se.value,
              "row-height": O.value,
              responsive: !0,
              "vertical-compact": !1,
              breakpoints: Dn(ii),
              cols: A.value,
              onLayoutUpdated: wt
            }, {
              item: ir(({ item: ne }) => [
                xa("div", {
                  class: "widget-item-wrapper",
                  onContextmenu: yc((le) => xe(le, String(ne.i)), ["stop", "prevent"])
                }, [
                  me.value?.find((le) => le.uid === ne.i) ? (Ft(), Rr(Dn(bf), {
                    key: 0,
                    widget: me.value.find((le) => le.uid === ne.i),
                    ref: `${ne.i}_wrapper`,
                    onOpenSettings: It,
                    editEnabled: "",
                    onRemoveWidget: () => $t(ne.i.toString())
                  }, null, 8, ["widget", "onRemoveWidget"])) : (Ft(), ar("span", Gy, yu(`${ne.i}${ne.static ? "- Static" : ""}`), 1))
                ], 40, qy)
              ]),
              _: 1
            }, 8, ["layout", "row-height", "breakpoints", "cols"])),
            Ue.value.visible ? (Ft(), ar("div", {
              key: 0,
              class: "widget-context-menu",
              style: Ki({ left: Ue.value.x + "px", top: Ue.value.y + "px" })
            }, [
              ba(P, {
                onClick: Ae,
                size: "small"
              }, {
                default: ir(() => [...J[0] || (J[0] = [
                  bc(" Copy ", -1)
                ])]),
                _: 1
              })
            ], 4)) : vu("", !0),
            gf(ba(Dn(p0), {
              list: we.value,
              group: { name: "widgets" },
              class: "invisible-dropzone",
              itemKey: "type",
              sort: !1,
              onStart: Tt,
              onEnd: Qt,
              onAdd: at
            }, {
              item: ir(({ element: ne }) => [
                xa("div", null, yu(ne.type), 1)
              ]),
              _: 1
            }, 8, ["list"]), [
              [vf, X.value]
            ]),
            ze.value.visible && Dn(Ge).hasClipboard ? (Ft(), ar("div", {
              key: 1,
              class: "canvas-context-menu",
              style: Ki({ left: ze.value.x + "px", top: ze.value.y + "px" })
            }, [
              ba(P, {
                onClick: Ne,
                size: "small"
              }, {
                default: ir(() => [...J[1] || (J[1] = [
                  bc(" Paste ", -1)
                ])]),
                _: 1
              })
            ], 4)) : vu("", !0)
          ], 36)
        ]),
        _: 1
      });
    };
  }
}), $y = /* @__PURE__ */ Xf(Xy, [["__scopeId", "data-v-1fdbd896"]]);
class Be extends _f {
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
    return Ve.Literals.GRID_COLUMNS;
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
      getFeature: () => this.eClass().getEStructuralFeature(Be.LG),
      getOldValue: () => l,
      getNewValue: () => h,
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
  set md(h) {
    const l = this._md;
    this._md = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Be.MD),
      getOldValue: () => l,
      getNewValue: () => h,
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
  set sm(h) {
    const l = this._sm;
    this._sm = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Be.SM),
      getOldValue: () => l,
      getNewValue: () => h,
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
  set xs(h) {
    const l = this._xs;
    this._xs = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Be.XS),
      getOldValue: () => l,
      getNewValue: () => h,
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
  set xxs(h) {
    const l = this._xxs;
    this._xxs = h, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Be.XXS),
      getOldValue: () => l,
      getNewValue: () => h,
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
  eGet(h) {
    switch (this.eClass().getFeatureID(h)) {
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
        return super.eGet(h);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(h, l) {
    switch (this.eClass().getFeatureID(h)) {
      case Be.LG:
        this.lg = l, super.eSet(h, l);
        break;
      case Be.MD:
        this.md = l, super.eSet(h, l);
        break;
      case Be.SM:
        this.sm = l, super.eSet(h, l);
        break;
      case Be.XS:
        this.xs = l, super.eSet(h, l);
        break;
      case Be.XXS:
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
        return super.eIsSet(h);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(h) {
    switch (this.eClass().getFeatureID(h)) {
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
class Tu extends v0 {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Tu()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(Ve.eINSTANCE);
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
class Ve extends m0 {
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
    return this._instance || (this._instance = new Ve(), this._instance.init()), this._instance;
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
    super(), this.setName(Ve.eNAME), this.setNsURI(Ve.eNS_URI), this.setNsPrefix(Ve.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    y0.INSTANCE.set(Ve.eNS_URI, this), this.setEFactoryInstance(Tu.eINSTANCE);
    const h = new xc();
    h.setName("GridColumns"), h.setAbstract(!1), h.setInterface(!1), this.getEClassifiers().push(h), h.setEPackage(this), Ve.Literals.GRID_COLUMNS = h;
    const l = new ti();
    l.setName("lg"), l.setLowerBound(0), l.setUpperBound(1), h.getEStructuralFeatures().push(l), Ve.Literals.GRID_COLUMNS__LG = l;
    const y = new ti();
    y.setName("md"), y.setLowerBound(0), y.setUpperBound(1), h.getEStructuralFeatures().push(y), Ve.Literals.GRID_COLUMNS__MD = y;
    const A = new ti();
    A.setName("sm"), A.setLowerBound(0), A.setUpperBound(1), h.getEStructuralFeatures().push(A), Ve.Literals.GRID_COLUMNS__SM = A;
    const O = new ti();
    O.setName("xs"), O.setLowerBound(0), O.setUpperBound(1), h.getEStructuralFeatures().push(O), Ve.Literals.GRID_COLUMNS__XS = O;
    const B = new ti();
    B.setName("xxs"), B.setLowerBound(0), B.setUpperBound(1), h.getEStructuralFeatures().push(B), Ve.Literals.GRID_COLUMNS__XXS = B;
    const L = new xc();
    L.setName("GridSettings"), L.setAbstract(!1), L.setInterface(!1), this.getEClassifiers().push(L), L.setEPackage(this), Ve.Literals.GRID_SETTINGS = L;
    const E = new ti();
    E.setName("rowHeight"), E.setLowerBound(0), E.setUpperBound(1), L.getEStructuralFeatures().push(E), Ve.Literals.GRID_SETTINGS__ROW_HEIGHT = E;
    const V = new b0();
    V.setContainment(!0), V.setName("cols"), V.setLowerBound(0), V.setUpperBound(1), L.getEStructuralFeatures().push(V), Ve.Literals.GRID_SETTINGS__COLS = V, Ve.Literals.GRID_COLUMNS__LG.setEType(ni().getEClassifier("EInt")), Ve.Literals.GRID_COLUMNS__MD.setEType(ni().getEClassifier("EInt")), Ve.Literals.GRID_COLUMNS__SM.setEType(ni().getEClassifier("EInt")), Ve.Literals.GRID_COLUMNS__XS.setEType(ni().getEClassifier("EInt")), Ve.Literals.GRID_COLUMNS__XXS.setEType(ni().getEClassifier("EInt")), Ve.Literals.GRID_SETTINGS__ROW_HEIGHT.setEType(ni().getEClassifier("EInt")), Ve.Literals.GRID_SETTINGS__COLS.setEType(Ve.Literals.GRID_COLUMNS);
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
    return Ve.Literals.GRID_SETTINGS;
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
const Yy = `<?xml version="1.0" encoding="UTF-8"?>
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
`, Ky = `<?xml version="1.0" encoding="UTF-8"?>
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
Ve.eINSTANCE;
const Kf = "org.eclipse.daanse.board.app.ui.vue.layouts.grid";
function Vf({ services: p }) {
  p.getRequired(hf).addLayout({
    id: Kf,
    name: "GridLayout",
    description: "responsive grid-based layout",
    component: Oy,
    editor: $y,
    /*
     * No hand-written panel: a row height and five column counts are
     * fields, so there is nothing to keep beside the model and no second
     * place for the two to disagree.
     */
    settingsForm: {
      xmi: Yy,
      uri: "/grid-settings.ui.xmi",
      ePackage: () => Ve.eINSTANCE,
      create: () => new Lt(),
      entryForms: [{ xmi: Ky, uri: "/grid-columns.ui.xmi" }]
    }
  });
}
function Zf({ services: p }) {
  p.getRequired(hf).removeLayout(Kf);
}
const Vy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: Vf,
  deactivate: Zf
}, Symbol.toStringTag, { value: "Module" })), df = "org.eclipse.daanse.board.app.ui.vue.layouts.grid", Zy = "0.0.1-next.1";
async function ub(p) {
  const h = globalThis.__tsm__;
  if (!h)
    throw new Error(`${df}: tsm runtime is not initialized`);
  h.register(df, Vy, Zy, "ui.vue.layouts.grid"), await Vf?.(p);
}
async function lb(p) {
  await Zf?.(p);
}
export {
  ub as activate,
  lb as deactivate
};
