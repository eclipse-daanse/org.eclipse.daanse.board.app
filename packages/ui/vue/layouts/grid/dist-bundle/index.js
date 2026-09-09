(function(){var i="ui.vue.layouts.grid",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".scroll[data-v-cb6cb290]{overflow-y:auto}.view_grid_layout[data-v-cb6cb290]{padding-left:60px}.vgl-layout[data-v-cb6cb290]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-cb6cb290]:before{display:none}[data-v-cb6cb290] .vgl-item--resizing{opacity:90%}[data-v-cb6cb290] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-cb6cb290]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.alayout[data-v-47bbb734]{padding-left:60px}.vgl-layout[data-v-47bbb734]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-47bbb734]:before{position:absolute;width:calc(100% - 5px);height:calc(100% - 5px);margin:5px;content:\"\";background-image:linear-gradient(to right,var(--color-divider) 1px,transparent 1px),linear-gradient(to bottom,var(--color-divider) 1px,transparent 1px);background-repeat:repeat;background-size:calc(calc(100% - 5px) / var(--grid-cols, 12)) calc(var(--grid-row-height, 30px) + 10px)}[data-v-47bbb734] .vgl-item--placeholder{outline:2px dashed var(--color-outline);background-color:#88888826}[data-v-47bbb734] .vgl-item--resizing{opacity:90%}[data-v-47bbb734] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-47bbb734]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.invisible-dropzone[data-v-47bbb734]{position:absolute;inset:0;z-index:1000;pointer-events:auto}.invisible-dropzone[data-v-47bbb734]>*{opacity:0}.widget-item-wrapper[data-v-47bbb734]{width:100%;height:100%}.dropdown-buttons-container[data-v-47bbb734]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.widget-context-menu[data-v-47bbb734],.canvas-context-menu[data-v-47bbb734]{position:fixed;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);padding:4px;box-shadow:var(--shadow-e2);z-index:100000}.menu__item[data-v-47bbb734]{justify-content:flex-start;gap:7px;white-space:nowrap}.scroll[data-v-47bbb734]{overflow-y:auto}\n";})();
import { LAYOUT_REPOSITORY as pf } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { defineComponent as Ta, inject as Ji, shallowRef as i0, reactive as Qi, ref as rt, toRef as o0, onBeforeMount as gf, onMounted as Oa, watchEffect as a0, onBeforeUnmount as wu, computed as it, watch as je, createElementBlock as zn, openBlock as Ft, normalizeStyle as Ki, normalizeClass as pc, renderSlot as gu, createCommentVNode as vu, unref as Gt, getCurrentScope as s0, onScopeDispose as u0, nextTick as kt, provide as gc, toRefs as vc, withDirectives as vf, Fragment as l0, renderList as c0, createBlock as eo, mergeProps as f0, withCtx as ii, createVNode as ti, vShow as mf, createElementVNode as xa, isRef as d0, toDisplayString as mu, withModifiers as mc, createTextVNode as yc } from "vue";
import { useWidgetsStore as yf } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { useLayoutStore as bf } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { WidgetWrapper as xf, defaultConfig as h0 } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as wf } from "vue-router";
import { plainSettings as Sa } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as _f } from "org.eclipse.daanse.board.app.lib.api.page";
import g0 from "vuedraggable";
import { useClipboardStore as v0 } from "org.eclipse.daanse.board.app.ui.vue.layouts.base";
import { DButton as bc, DIcon as xc } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { BasicEObject as Sf, BasicEFactory as m0, BasicEPackage as y0, EPackageRegistry as b0, BasicEClass as wc, BasicEAttribute as Qr, BasicEReference as x0, getEcorePackage as ei } from "@emfts/core";
const { identifiers: p0 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), w0 = typeof window < "u";
var _c;
w0 && ((_c = window?.navigator) != null && _c.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Qt(p) {
  return p == null;
}
function Ef() {
}
const _0 = Object.freeze({
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
Object.freeze(new Set(Object.keys(_0)));
function S0() {
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
    return Ef;
  const l = (...O) => {
    p(...O);
  };
  if (h <= 0)
    return Tf(l);
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
function E0(p, h = 100) {
  if (typeof p != "function")
    return Ef;
  const l = (...C) => {
    p(...C);
  };
  if (h <= 0)
    return Tf(l);
  let y;
  return function(...C) {
    clearTimeout(y), y = setTimeout(() => {
      l(...C);
    }, h);
  };
}
function Tf(p) {
  if (typeof p != "function")
    return p;
  let h = !1, l, y;
  return function(...C) {
    return l = C, h || (h = !0, y = Promise.resolve().then(() => (h = !1, y = void 0, p(...l)))), y;
  };
}
const Vi = /* @__PURE__ */ new Set(), Of = /* @__PURE__ */ new WeakMap();
function T0() {
  Vi.forEach((p) => {
    p(...Of.get(p));
  }), Vi.clear();
}
function Pt(p, ...h) {
  if (typeof p != "function")
    return p;
  Of.set(p, h), !Vi.has(p) && (Vi.add(p), Vi.size === 1 && Promise.resolve().then(T0));
}
const If = Symbol("LAYOUT_KEY"), Rf = Symbol("EMITTER_KEY");
function O0(p) {
  let h = 0, l;
  for (let y = 0, C = p.length; y < C; y++)
    l = p[y].y + p[y].h, l > h && (h = l);
  return h;
}
function yu(p) {
  const h = Array(p.length);
  for (let l = 0, y = p.length; l < y; l++)
    h[l] = I0(p[l]);
  return h;
}
function I0(p) {
  return { ...p };
}
function Mf(p, h) {
  return !(p === h || p.x + p.w <= h.x || p.x >= h.x + h.w || p.y + p.h <= h.y || p.y >= h.y + h.h);
}
function ni(p, h, l) {
  const y = Cf(p), C = Df(p), O = Array(p.length);
  for (let B = 0, L = C.length; B < L; B++) {
    let E = C[B];
    E.static || (E = R0(y, E, h, l), y.push(E)), O[p.findIndex((V) => V.i === E.i)] = E, E.moved = !1;
  }
  return O;
}
function R0(p, h, l, y) {
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
function M0(p, h) {
  const l = Cf(p);
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
    if (Mf(p[l], h)) return p[l];
}
function Af(p, h) {
  return p.filter((l) => Mf(l, h));
}
function Cf(p) {
  return p.filter((h) => h.static);
}
function bu(p, h, l, y, C = !1, O = !1) {
  if (h.static) return p;
  const B = h.x, L = h.y, E = y && h.y > y;
  typeof l == "number" && (h.x = l), typeof y == "number" && (h.y = y), h.moved = !0;
  let V = Df(p);
  E && (V = V.reverse());
  const pe = Af(V, h);
  if (O && pe.length)
    return h.x = B, h.y = L, h.moved = !1, p;
  for (let te = 0, We = pe.length; te < We; te++) {
    const me = pe[te];
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
function A0(p, h, l, y) {
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
function C0(p, h, l, y) {
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
function D0(p, h, l, y) {
  return {
    top: p + "px",
    left: h + "px",
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function z0(p, h, l, y) {
  return {
    top: p + "px",
    right: h + "px",
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function Df(p) {
  return Array.from(p).sort(function(h, l) {
    return h.y === l.y && h.x === l.x ? 0 : h.y > l.y || h.y === l.y && h.x > l.x ? 1 : -1;
  });
}
function P0(p, h) {
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
function L0(p, h = "vgl") {
  const l = () => `${h}-${p}`;
  return {
    b: l,
    be: (y) => `${l()}__${y}`,
    bm: (y) => `${l()}--${y}`,
    bem: (y, C) => `${l()}__${y}--${C}`
  };
}
function Oc(p) {
  return k0(p);
}
function k0(p) {
  var h;
  const l = ((h = p.target) == null ? void 0 : h.offsetParent) || document.body, y = p.offsetParent === document.body ? { left: 0, top: 0 } : l.getBoundingClientRect(), C = p.clientX + l.scrollLeft - y.left, O = p.clientY + l.scrollTop - y.top;
  return { x: C, y: O };
}
function Ic(p, h, l, y) {
  return F0(p) ? {
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
function F0(p) {
  return typeof p == "number" && !Number.isNaN(p);
}
function N0(p, h) {
  const l = Pf(p);
  let y = l[0];
  for (let C = 1, O = l.length; C < O; C++) {
    const B = l[C];
    h > p[B] && (y = B);
  }
  return y;
}
function zf(p, h) {
  if (!h[p])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + p + " is missing!"
    );
  return h[p];
}
function B0(p, h, l, y, C, O, B) {
  if (h[y]) return yu(h[y]);
  let L = p;
  const E = Pf(l), V = E.slice(E.indexOf(y));
  for (let pe = 0, te = V.length; pe < te; pe++) {
    const We = V[pe];
    if (h[We]) {
      L = h[We];
      break;
    }
  }
  return L = yu(L || []), ni(M0(L, { cols: O }), B);
}
function Pf(p) {
  return Object.keys(p).sort((h, l) => p[h] - p[l]);
}
let W0 = "auto";
function U0() {
  return typeof document < "u";
}
function Rc() {
  return U0() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : W0;
}
var or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lf(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var $i = { exports: {} }, H0 = $i.exports, Mc;
function q0() {
  return Mc || (Mc = 1, (function(p, h) {
    (function(l, y) {
      p.exports = y();
    })(H0, (function() {
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
      function pe(r) {
        return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }, pe(r);
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
          var o, a = pe(r);
          if (n) {
            var u = pe(this).constructor;
            o = Reflect.construct(a, arguments, u);
          } else o = a.apply(this, arguments);
          return (function(c, d) {
            if (d && (typeof d == "object" || typeof d == "function")) return d;
            if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return We(c);
          })(this, o);
        };
      }
      function xe() {
        return xe = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(r, n, o) {
          var a = (function(c, d) {
            for (; !Object.prototype.hasOwnProperty.call(c, d) && (c = pe(c)) !== null; ) ;
            return c;
          })(r, n);
          if (a) {
            var u = Object.getOwnPropertyDescriptor(a, n);
            return u.get ? u.get.call(arguments.length < 3 ? r : o) : u.value;
          }
        }, xe.apply(this, arguments);
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
      function we(r) {
        Ue = r;
        var n = r.document.createTextNode("");
        n.ownerDocument !== r.document && typeof r.wrap == "function" && r.wrap(n) === n && (r = r.wrap(r)), ze = r;
      }
      function Oe(r) {
        return Fe(r) ? r : (r.ownerDocument || r).defaultView || ze.window;
      }
      typeof window < "u" && window && we(window);
      var Ce = function(r) {
        return !!r && C(r) === "object";
      }, Ne = function(r) {
        return typeof r == "function";
      }, D = { window: function(r) {
        return r === ze || Fe(r);
      }, docFrag: function(r) {
        return Ce(r) && r.nodeType === 11;
      }, object: Ce, func: Ne, number: function(r) {
        return typeof r == "number";
      }, bool: function(r) {
        return typeof r == "boolean";
      }, string: function(r) {
        return typeof r == "string";
      }, element: function(r) {
        if (!r || C(r) !== "object") return !1;
        var n = Oe(r) || ze;
        return /object|function/.test(typeof Element > "u" ? "undefined" : C(Element)) ? r instanceof Element || r instanceof n.Element : r.nodeType === 1 && typeof r.nodeName == "string";
      }, plainObject: function(r) {
        return Ce(r) && !!r.constructor && /function Object\b/.test(r.constructor.toString());
      }, array: function(r) {
        return Ce(r) && r.length !== void 0 && Ne(r.splice);
      } };
      function Ie(r) {
        var n = r.interaction;
        if (n.prepared.name === "drag") {
          var o = n.prepared.axis;
          o === "x" ? (n.coords.cur.page.y = n.coords.start.page.y, n.coords.cur.client.y = n.coords.start.client.y, n.coords.velocity.client.y = 0, n.coords.velocity.page.y = 0) : o === "y" && (n.coords.cur.page.x = n.coords.start.page.x, n.coords.cur.client.x = n.coords.start.client.x, n.coords.velocity.client.x = 0, n.coords.velocity.page.x = 0);
        }
      }
      function ge(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "drag") {
          var a = o.prepared.axis;
          if (a === "x" || a === "y") {
            var u = a === "x" ? "y" : "x";
            n.page[u] = o.coords.start.page[u], n.client[u] = o.coords.start.client[u], n.delta[u] = 0;
          }
        }
      }
      var et = { id: "actions/drag", install: function(r) {
        var n = r.actions, o = r.Interactable, a = r.defaults;
        o.prototype.draggable = et.draggable, n.map.drag = et, n.methodDict.drag = "draggable", a.actions.drag = et.defaults;
      }, listeners: { "interactions:before-action-move": Ie, "interactions:action-resume": Ie, "interactions:action-move": ge, "auto-start:check": function(r) {
        var n = r.interaction, o = r.interactable, a = r.buttons, u = o.options.drag;
        if (u && u.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || (a & o.options.drag.mouseButtons) != 0)) return r.action = { name: "drag", axis: u.lockAxis === "start" ? u.startAxis : u.lockAxis }, !1;
      } }, draggable: function(r) {
        return D.object(r) ? (this.options.drag.enabled = r.enabled !== !1, this.setPerAction("drag", r), this.setOnEvents("drag", r), /^(xy|x|y|start)$/.test(r.lockAxis) && (this.options.drag.lockAxis = r.lockAxis), /^(xy|x|y)$/.test(r.startAxis) && (this.options.drag.startAxis = r.startAxis), this) : D.bool(r) ? (this.options.drag.enabled = r, this) : this.options.drag;
      }, beforeMove: Ie, move: ge, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(r) {
        return r.search("drag") === 0;
      } }, $ = et, re = { init: function(r) {
        var n = r;
        re.document = n.document, re.DocumentFragment = n.DocumentFragment || ee, re.SVGElement = n.SVGElement || ee, re.SVGSVGElement = n.SVGSVGElement || ee, re.SVGElementInstance = n.SVGElementInstance || ee, re.Element = n.Element || ee, re.HTMLElement = n.HTMLElement || re.Element, re.Event = n.Event, re.Touch = n.Touch || ee, re.PointerEvent = n.PointerEvent || n.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function ee() {
      }
      var _e = re, de = { init: function(r) {
        var n = _e.Element, o = r.navigator || {};
        de.supportsTouch = "ontouchstart" in r || D.func(r.DocumentTouch) && _e.document instanceof r.DocumentTouch, de.supportsPointerEvent = o.pointerEnabled !== !1 && !!_e.PointerEvent, de.isIOS = /iP(hone|od|ad)/.test(o.platform), de.isIOS7 = /iP(hone|od|ad)/.test(o.platform) && /OS 7[^\d]/.test(o.appVersion), de.isIe9 = /MSIE 9/.test(o.userAgent), de.isOperaMobile = o.appName === "Opera" && de.supportsTouch && /Presto/.test(o.userAgent), de.prefixedMatchesSelector = "matches" in n.prototype ? "matches" : "webkitMatchesSelector" in n.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in n.prototype ? "mozMatchesSelector" : "oMatchesSelector" in n.prototype ? "oMatchesSelector" : "msMatchesSelector", de.pEventTypes = de.supportsPointerEvent ? _e.PointerEvent === r.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, de.wheelEvent = _e.document && "onmousewheel" in _e.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, Re = de;
      function se(r, n) {
        if (r.contains) return r.contains(n);
        for (; n; ) {
          if (n === r) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      function Je(r, n) {
        for (; D.element(r); ) {
          if (Ve(r, n)) return r;
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
      function Ve(r, n) {
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
          if (Ve(r, n)) return !0;
          if ((r = Xe(r)) === o) return Ve(r, n);
        }
        return !1;
      }
      function Pn(r) {
        return r.correspondingUseElement || r;
      }
      function lt(r) {
        var n = r instanceof _e.SVGElement ? r.getBoundingClientRect() : r.getClientRects()[0];
        return n && { left: n.left, right: n.right, top: n.top, bottom: n.bottom, width: n.width || n.right - n.left, height: n.height || n.bottom - n.top };
      }
      function Qe(r) {
        var n, o = lt(r);
        if (!Re.isIOS7 && o) {
          var a = { x: (n = (n = Oe(r)) || ze).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
          o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
        }
        return o;
      }
      function pn(r) {
        for (var n = []; r; ) n.push(r), r = Xe(r);
        return n;
      }
      function wt(r) {
        return !!D.string(r) && (_e.document.querySelector(r), !0);
      }
      function J(r, n) {
        for (var o in n) r[o] = n[o];
        return r;
      }
      function Xt(r, n, o) {
        return r === "parent" ? Xe(o) : r === "self" ? n.getRect(o) : Je(o, r);
      }
      function Tt(r, n, o, a) {
        var u = r;
        return D.string(u) ? u = Xt(u, n, o) : D.func(u) && (u = u.apply(void 0, a)), D.element(u) && (u = Qe(u)), u;
      }
      function _t(r) {
        return r && { x: "x" in r ? r.x : r.left, y: "y" in r ? r.y : r.top };
      }
      function en(r) {
        return !r || "x" in r && "y" in r || ((r = J({}, r)).x = r.left || 0, r.y = r.top || 0, r.width = r.width || (r.right || 0) - r.x, r.height = r.height || (r.bottom || 0) - r.y), r;
      }
      function at(r, n, o) {
        r.left && (n.left += o.x), r.right && (n.right += o.x), r.top && (n.top += o.y), r.bottom && (n.bottom += o.y), n.width = n.right - n.left, n.height = n.bottom - n.top;
      }
      function Ot(r, n, o) {
        var a = o && r.options[o];
        return _t(Tt(a && a.origin || r.options.origin, r, n, [r && n])) || { x: 0, y: 0 };
      }
      function $t(r, n) {
        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(b) {
          return !0;
        }, a = arguments.length > 3 ? arguments[3] : void 0;
        if (a = a || {}, D.string(r) && r.search(" ") !== -1 && (r = vt(r)), D.array(r)) return r.forEach((function(b) {
          return $t(b, n, o, a);
        })), a;
        if (D.object(r) && (n = r, r = ""), D.func(n) && o(r)) a[r] = a[r] || [], a[r].push(n);
        else if (D.array(n)) for (var u = 0, c = n; u < c.length; u++) {
          var d = c[u];
          $t(r, d, o, a);
        }
        else if (D.object(n)) for (var v in n)
          $t(vt(v).map((function(b) {
            return "".concat(r).concat(b);
          })), n[v], o, a);
        return a;
      }
      function vt(r) {
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
      function X(r, n) {
        r.page = r.page || {}, r.page.x = n.page.x, r.page.y = n.page.y, r.client = r.client || {}, r.client.x = n.client.x, r.client.y = n.client.y, r.timeStamp = n.timeStamp;
      }
      function Q(r) {
        r.page.x = 0, r.page.y = 0, r.client.x = 0, r.client.y = 0;
      }
      function z(r) {
        return r instanceof _e.Event || r instanceof _e.Touch;
      }
      function Z(r, n, o) {
        return r = r || "page", (o = o || {}).x = n[r + "X"], o.y = n[r + "Y"], o;
      }
      function oe(r, n) {
        return n = n || { x: 0, y: 0 }, Re.isOperaMobile && z(r) ? (Z("screen", r, n), n.x += window.scrollX, n.y += window.scrollY) : Z("page", r, n), n;
      }
      function ye(r) {
        return D.number(r.pointerId) ? r.pointerId : r.identifier;
      }
      function le(r, n, o) {
        var a = n.length > 1 ? ie(n) : n[0];
        oe(a, r.page), (function(u, c) {
          c = c || {}, Re.isOperaMobile && z(u) ? Z("screen", u, c) : Z("client", u, c);
        })(a, r.client), r.timeStamp = o;
      }
      function ae(r) {
        var n = [];
        return D.array(r) ? (n[0] = r[0], n[1] = r[1]) : r.type === "touchend" ? r.touches.length === 1 ? (n[0] = r.touches[0], n[1] = r.changedTouches[0]) : r.touches.length === 0 && (n[0] = r.changedTouches[0], n[1] = r.changedTouches[1]) : (n[0] = r.touches[0], n[1] = r.touches[1]), n;
      }
      function ie(r) {
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
        return Yt(c, d);
      }
      function mt(r, n) {
        var o = n + "X", a = n + "Y", u = ae(r), c = u[1][o] - u[0][o], d = u[1][a] - u[0][a];
        return 180 * Math.atan2(d, c) / Math.PI;
      }
      function tn(r) {
        return D.string(r.pointerType) ? r.pointerType : D.number(r.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][r.pointerType] : /touch/.test(r.type || "") || r instanceof _e.Touch ? "touch" : "mouse";
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
      function ai(r, n) {
        for (var o = 0, a = r.slice(); o < a.length; o++) {
          var u = a[o], c = u.dropzone, d = u.element;
          n.dropzone = c, n.target = d, c.fire(n), n.propagationStopped = n.immediatePropagationStopped = !1;
        }
      }
      function Ar(r, n) {
        for (var o = (function(c, d) {
          for (var v = [], b = 0, S = c.interactables.list; b < S.length; b++) {
            var x = S[b];
            if (x.options.drop.enabled) {
              var I = x.options.drop.accept;
              if (!(D.element(I) && I !== d || D.string(I) && !Ve(d, I) || D.func(I) && !I({ dropzone: x, draggableElement: d }))) for (var P = 0, H = x.getAllElements(); P < H.length; P++) {
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
            var k = q[R], G = q[j];
            if (k && R !== j) if (G) {
              var ve = Me(k), be = Me(G);
              if (ve !== k.ownerDocument) if (be !== k.ownerDocument) if (ve !== be) {
                A = A.length ? A : Nt(G);
                var Ee = void 0;
                if (G instanceof _e.HTMLElement && k instanceof _e.SVGElement && !(k instanceof _e.SVGSVGElement)) {
                  if (k === be) continue;
                  Ee = k.ownerSVGElement;
                } else Ee = k;
                for (var At = Nt(Ee, G.ownerDocument), bn = 0; At[bn] && At[bn] === A[bn]; ) bn++;
                var bt = [At[bn - 1], At[bn], A[bn]];
                if (bt[0]) for (var Rn = bt[0].lastChild; Rn; ) {
                  if (Rn === bt[1]) {
                    j = R, A = At;
                    break;
                  }
                  if (Rn === bt[2]) break;
                  Rn = Rn.previousSibling;
                }
              } else w = G, (parseInt(Oe(Y = k).getComputedStyle(Y).zIndex, 10) || 0) >= (parseInt(Oe(w).getComputedStyle(w).zIndex, 10) || 0) && (j = R);
              else j = R;
            } else j = R;
          }
          return j;
        })(d);
        return a.activeDrops[W] || null;
      }
      function si(r, n, o) {
        var a = r.dropState, u = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return o.type === "dragstart" && (u.activate = new Kn(a, o, "dropactivate"), u.activate.target = null, u.activate.dropzone = null), o.type === "dragend" && (u.deactivate = new Kn(a, o, "dropdeactivate"), u.deactivate.target = null, u.deactivate.dropzone = null), a.rejected || (a.cur.element !== a.prev.element && (a.prev.dropzone && (u.leave = new Kn(a, o, "dragleave"), o.dragLeave = u.leave.target = a.prev.element, o.prevDropzone = u.leave.dropzone = a.prev.dropzone), a.cur.dropzone && (u.enter = new Kn(a, o, "dragenter"), o.dragEnter = a.cur.element, o.dropzone = a.cur.dropzone)), o.type === "dragend" && a.cur.dropzone && (u.drop = new Kn(a, o, "drop"), o.dropzone = a.cur.dropzone, o.relatedTarget = a.cur.element), o.type === "dragmove" && a.cur.dropzone && (u.move = new Kn(a, o, "dropmove"), o.dropzone = a.cur.dropzone)), u;
      }
      function ui(r, n) {
        var o = r.dropState, a = o.activeDrops, u = o.cur, c = o.prev;
        n.leave && c.dropzone.fire(n.leave), n.enter && u.dropzone.fire(n.enter), n.move && u.dropzone.fire(n.move), n.drop && u.dropzone.fire(n.drop), n.deactivate && ai(a, n.deactivate), o.prev.dropzone = u.dropzone, o.prev.element = u.element;
      }
      function ro(r, n) {
        var o = r.interaction, a = r.iEvent, u = r.event;
        if (a.type === "dragmove" || a.type === "dragend") {
          var c = o.dropState;
          n.dynamicDrop && (c.activeDrops = Ar(n, o.element));
          var d = a, v = no(o, d, u);
          c.rejected = c.rejected && !!v && v.dropzone === c.cur.dropzone && v.element === c.cur.element, c.cur.dropzone = v && v.dropzone, c.cur.element = v && v.element, c.events = si(o, 0, d);
        }
      }
      var li = { id: "actions/drop", install: function(r) {
        var n = r.actions, o = r.interactStatic, a = r.Interactable, u = r.defaults;
        r.usePlugin($), a.prototype.dropzone = function(c) {
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
              var R = Ot(W, q, "drag"), k = oe(P);
              k.x += R.x, k.y += R.y;
              var G = k.x > Y.left && k.x < Y.right, ve = k.y > Y.top && k.y < Y.bottom;
              w = G && ve;
            }
            var be = W.getRect(q);
            if (be && A === "center") {
              var Ee = be.left + be.width / 2, At = be.top + be.height / 2;
              w = Ee >= Y.left && Ee <= Y.right && At >= Y.top && At <= Y.bottom;
            }
            return be && D.number(A) && (w = Math.max(0, Math.min(Y.right, be.right) - Math.max(Y.left, be.left)) * Math.max(0, Math.min(Y.bottom, be.bottom) - Math.max(Y.top, be.top)) / (be.width * be.height) >= A), I.options.drop.checker && (w = I.options.drop.checker(P, H, w, I, j, W, q)), w;
          })(this, c, d, v, b, S, x);
        }, o.dynamicDrop = function(c) {
          return D.bool(c) ? (r.dynamicDrop = c, o) : r.dynamicDrop;
        }, J(n.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), n.methodDict.drop = "dropzone", r.dynamicDrop = !1, u.actions.drop = li.defaults;
      }, listeners: { "interactions:before-action-start": function(r) {
        var n = r.interaction;
        n.prepared.name === "drag" && (n.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(r, n) {
        var o = r.interaction, a = (r.event, r.iEvent);
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          u.activeDrops = [], u.events = {}, u.activeDrops = Ar(n, o.element), u.events = si(o, 0, a), u.events.activate && (ai(u.activeDrops, u.events.activate), n.fire("actions/drop:start", { interaction: o, dragEvent: a }));
        }
      }, "interactions:action-move": ro, "interactions:after-action-move": function(r, n) {
        var o = r.interaction, a = r.iEvent;
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          ui(o, u.events), n.fire("actions/drop:move", { interaction: o, dragEvent: a }), u.events = {};
        }
      }, "interactions:action-end": function(r, n) {
        if (r.interaction.prepared.name === "drag") {
          var o = r.interaction, a = r.iEvent;
          ro(r, n), ui(o, o.dropState.events), n.fire("actions/drop:end", { interaction: o, dragEvent: a });
        }
      }, "interactions:stop": function(r) {
        var n = r.interaction;
        if (n.prepared.name === "drag") {
          var o = n.dropState;
          o && (o.activeDrops = null, o.events = null, o.cur.dropzone = null, o.cur.element = null, o.prev.dropzone = null, o.prev.element = null, o.rejected = !1);
        }
      } }, getActiveDrops: Ar, getDrop: no, getDropEvents: si, fireDropEvents: ui, filterEventType: function(r) {
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
      function Cr(r) {
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
        })(r), Cr(r);
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
        })(r), Cr(r);
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
        r.usePlugin(di), r.usePlugin(Ma), r.usePlugin($), r.usePlugin(Ia);
      } }, io = 0, Tn = { request: function(r) {
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
      } }, he = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(r) {
        he.isScrolling = !0, Tn.cancel(he.i), r.autoScroll = he, he.interaction = r, he.prevTime = he.now(), he.i = Tn.request(he.scroll);
      }, stop: function() {
        he.isScrolling = !1, he.interaction && (he.interaction.autoScroll = null), Tn.cancel(he.i);
      }, scroll: function() {
        var r = he.interaction, n = r.interactable, o = r.element, a = r.prepared.name, u = n.options[a].autoScroll, c = hi(u.container, n, o), d = he.now(), v = (d - he.prevTime) / 1e3, b = u.speed * v;
        if (b >= 1) {
          var S = { x: he.x * b, y: he.y * b };
          if (S.x || S.y) {
            var x = oo(c);
            D.window(c) ? c.scrollBy(S.x, S.y) : c && (c.scrollLeft += S.x, c.scrollTop += S.y);
            var I = oo(c), P = { x: I.x - x.x, y: I.y - x.y };
            (P.x || P.y) && n.fire({ type: "autoscroll", target: o, interactable: n, delta: P, interaction: r, container: c });
          }
          he.prevTime = d;
        }
        he.isScrolling && (Tn.cancel(he.i), he.i = Tn.request(he.scroll));
      }, check: function(r, n) {
        var o;
        return (o = r.options[n].autoScroll) == null ? void 0 : o.enabled;
      }, onInteractionMove: function(r) {
        var n = r.interaction, o = r.pointer;
        if (n.interacting() && he.check(n.interactable, n.prepared.name)) if (n.simulation) he.x = he.y = 0;
        else {
          var a, u, c, d, v = n.interactable, b = n.element, S = n.prepared.name, x = v.options[S].autoScroll, I = hi(x.container, v, b);
          if (D.window(I)) d = o.clientX < he.margin, a = o.clientY < he.margin, u = o.clientX > I.innerWidth - he.margin, c = o.clientY > I.innerHeight - he.margin;
          else {
            var P = lt(I);
            d = o.clientX < P.left + he.margin, a = o.clientY < P.top + he.margin, u = o.clientX > P.right - he.margin, c = o.clientY > P.bottom - he.margin;
          }
          he.x = u ? 1 : d ? -1 : 0, he.y = c ? 1 : a ? -1 : 0, he.isScrolling || (he.margin = x.margin, he.speed = x.speed, he.start(n));
        }
      } };
      function hi(r, n, o) {
        return (D.string(r) ? Xt(r, n, o) : r) || Oe(o);
      }
      function oo(r) {
        return D.window(r) && (r = window.document.body), { x: r.scrollLeft, y: r.scrollTop };
      }
      var Ca = { id: "auto-scroll", install: function(r) {
        var n = r.defaults, o = r.actions;
        r.autoScroll = he, he.now = function() {
          return r.now();
        }, o.phaselessTypes.autoscroll = !0, n.perAction.autoScroll = he.defaults;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.autoScroll = null;
      }, "interactions:destroy": function(r) {
        r.interaction.autoScroll = null, he.stop(), he.interaction && (he.interaction = null);
      }, "interactions:stop": he.stop, "interactions:action-move": function(r) {
        return he.onInteractionMove(r);
      } } }, Da = Ca;
      function ur(r, n) {
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
      function Dr(r) {
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
        }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), n.prototype.actionChecker = Dr, n.prototype.styleCursor = za;
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
          v = Xe(v);
        }
        return { action: null, interactable: null, element: null };
      }
      function so(r, n, o) {
        var a = n.action, u = n.interactable, c = n.element;
        a = a || { name: null }, r.interactable = u, r.element = c, pi(r.prepared, a), r.rect = u && a.name ? u.getRect(c) : null, uo(r, o), o.fire("autoStart:prepared", { interaction: r });
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
      function gi(r, n) {
        return D.number(r) ? (n.autoStart.maxInteractions = r, this) : n.autoStart.maxInteractions;
      }
      function zr(r, n, o) {
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
          zr(r.element, c || "", n);
        } else n.autoStart.cursorElement && zr(n.autoStart.cursorElement, "", n);
      }
      var ka = { id: "auto-start/base", before: ["actions"], install: function(r) {
        var n = r.interactStatic, o = r.defaults;
        r.usePlugin(Pa), o.base.actionChecker = null, o.base.styleCursor = !0, J(o.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), n.maxInteractions = function(a) {
          return gi(a, r);
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
        a && a.options.styleCursor && zr(o.element, "", n);
      } }, maxInteractions: gi, withinInteractionLimit: cr, validateAction: lr }, vi = ka, Fa = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(r, n) {
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
                  })(x, W) && vi.validateAction(j, W, I, a, n)) return W;
                }
              }
            }; D.element(I); ) {
              var H = n.interactables.forEachMatch(I, P);
              if (H) {
                o.prepared.name = "drag", o.interactable = H, o.element = I;
                break;
              }
              I = Xe(I);
            }
          }
        }
      } } };
      function Pr(r) {
        var n = r.prepared && r.prepared.name;
        if (!n) return null;
        var o = r.interactable.options;
        return o[n].hold || o[n].delay;
      }
      var lo = { id: "auto-start/hold", install: function(r) {
        var n = r.defaults;
        r.usePlugin(vi), n.perAction.hold = 0, n.perAction.delay = 0;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(r) {
        var n = r.interaction, o = Pr(n);
        o > 0 && (n.autoStartHoldTimer = setTimeout((function() {
          n.start(n.prepared, n.interactable, n.element);
        }), o));
      }, "interactions:move": function(r) {
        var n = r.interaction, o = r.duplicate;
        n.autoStartHoldTimer && n.pointerWasMoved && !o && (clearTimeout(n.autoStartHoldTimer), n.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(r) {
        var n = r.interaction;
        Pr(n) > 0 && (n.prepared.name = null);
      } }, getHoldDuration: Pr }, co = lo, mi = { id: "auto-start", install: function(r) {
        r.usePlugin(vi), r.usePlugin(co), r.usePlugin(Fa);
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
                var v = Oe(c.target).document, b = u.getDocOptions(v);
                if (!b || !b.events || b.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(c.type) || D.element(c.target) && Ve(c.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || c.preventDefault();
            } else c.preventDefault();
          })(this, r, o);
        }, r.interactions.docEvents.push({ type: "dragstart", listener: function(o) {
          for (var a = 0, u = r.interactions.list; a < u.length; a++) {
            var c = u[a];
            if (c.element && (c.element === o.target || se(c.element, o.target))) return void c.interactable.checkAndPreventDefault(o);
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
          D.plainObject(a) ? n[o] = Vn(a) : D.array(a) ? n[o] = En(a) : n[o] = a;
        }
        return n;
      }
      var Lr = (function() {
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
            (x = I.methods) != null && x.set && this.shouldDo(P, a, o) && (n.state = I, W = I.methods.set(n), at(n.edges, n.rect, { x: n.coords.x - H.x, y: n.coords.y - H.y })), b.eventProps.push(W);
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
        n.modification = new Lr(n);
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
      } } }, kr = ho, Fr = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, On = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c, d, v, b, S) {
          var x;
          O(this, o), (x = n.call(this, a)).relatedTarget = null, x.screenX = void 0, x.screenY = void 0, x.button = void 0, x.buttons = void 0, x.ctrlKey = void 0, x.shiftKey = void 0, x.altKey = void 0, x.metaKey = void 0, x.page = void 0, x.client = void 0, x.delta = void 0, x.rect = void 0, x.x0 = void 0, x.y0 = void 0, x.t0 = void 0, x.dt = void 0, x.duration = void 0, x.clientX0 = void 0, x.clientY0 = void 0, x.velocity = void 0, x.speed = void 0, x.swipe = void 0, x.axes = void 0, x.preEnd = void 0, v = v || a.element;
          var I = a.interactable, P = (I && I.options || Fr).deltaSource, H = Ot(I, v, c), W = d === "start", q = d === "end", j = W ? We(x) : a.prevEvent, Y = W ? a.coords.start : q ? { page: j.page, client: j.client, timeStamp: a.coords.cur.timeStamp } : a.coords.cur;
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
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (n.name === "gesture" ? 2 : 1) || !o.options[n.name].enabled) && (pi(this.prepared, n), this.interactable = o, this.element = a, this.rect = o.getRect(a), this.edges = this.prepared.edges ? J({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(n, o, a) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(n, o, a, !1);
          var u, c, d = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (u = this.coords.cur.client.x - this.coords.start.client.x, c = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Yt(u, c) > this.pointerMoveTolerance);
          var v, b, S, x = this.getPointerIndex(n), I = { pointer: n, pointerIndex: x, pointerInfo: this.pointers[x], event: o, type: "move", eventTarget: a, dx: u, dy: c, duplicate: d, interaction: this };
          d || (v = this.coords.velocity, b = this.coords.delta, S = Math.max(b.timeStamp / 1e3, 1e-3), v.page.x = b.page.x / S, v.page.y = b.page.y / S, v.client.x = b.client.x / S, v.client.y = b.client.y / S, v.timeStamp = S), this._scopeFire("interactions:move", I), d || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && X(this.coords.prev, this.coords.cur));
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
          return u = u !== !1 && (u || /(down|start)$/i.test(o.type)), x ? x.pointer = n : (x = new po(b, n, o, null, null), S = this.pointers.length, this.pointers.push(x)), le(this.coords.cur, this.pointers.map((function(I) {
            return I.pointer;
          })), this._now()), c = this.coords.delta, d = this.coords.prev, v = this.coords.cur, c.page.x = v.page.x - d.page.x, c.page.y = v.page.y - d.page.y, c.client.x = v.client.x - d.client.x, c.client.y = v.client.y - d.client.y, c.timeStamp = v.timeStamp - d.timeStamp, u && (this.pointerIsDown = !0, x.downTime = this.coords.cur.timeStamp, x.downTarget = a, It(this.downPointer, n), this.interacting() || (X(this.coords.start, this.coords.cur), X(this.coords.prev, this.coords.cur), this.downEvent = o, this.pointerWasMoved = !1)), this._updateLatestPointer(n, o, a), this._scopeFire("interactions:update-pointer", { pointer: n, event: o, eventTarget: a, down: u, pointerInfo: x, pointerIndex: S, interaction: this }), S;
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
      vo.offsetBy = "";
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
          var o = this.interaction, a = Nr(o);
          if (!a || !a.enabled) return !1;
          var u = o.coords.velocity.client, c = Yt(u.x, u.y), d = this.modification || (this.modification = new Lr(o));
          if (d.copyFrom(o.modification), this.t0 = o._now(), this.allowResume = a.allowResume, this.v0 = c, this.currentOffset = { x: 0, y: 0 }, this.startCoords = o.coords.cur.page, this.modifierArg = d.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - o.coords.cur.timeStamp < 50 && c > a.minSpeed && c > a.endSpeed) this.startInertia();
          else {
            if (d.result = d.setAll(this.modifierArg), !d.result.changed) return !1;
            this.startSmoothEnd();
          }
          return o.modification.result.rect = null, o.offsetBy(this.targetOffset), o._doPhase({ interaction: o, event: n, phase: "inertiastart" }), o.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), o.modification.result.rect = null, this.active = !0, o.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var n = this, o = this.interaction.coords.velocity.client, a = Nr(this.interaction), u = a.resistance, c = -Math.log(a.endSpeed / this.v0) / u;
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
          this.timeout = Tn.request((function() {
            o.active && n();
          }));
        } }, { key: "inertiaTick", value: function() {
          var n, o, a, u, c, d, v, b = this, S = this.interaction, x = Nr(S).resistance, I = (S._now() - this.t0) / 1e3;
          if (I < this.te) {
            var P, H = 1 - (Math.exp(-x * I) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (n = 0, o = 0, a = this.targetOffset.x, u = this.targetOffset.y, c = this.modifiedOffset.x, d = this.modifiedOffset.y, P = { x: bo(v = H, n, a, c), y: bo(v, o, u, d) }) : P = { x: this.targetOffset.x * H, y: this.targetOffset.y * H };
            var W = { x: P.x - this.currentOffset.x, y: P.y - this.currentOffset.y };
            this.currentOffset.x += W.x, this.currentOffset.y += W.y, S.offsetBy(W), S.move(), this.onNextFrame((function() {
              return b.inertiaTick();
            }));
          } else S.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var n = this, o = this.interaction, a = o._now() - this.t0, u = Nr(o).smoothEndDuration;
          if (a < u) {
            var c = { x: Br(a, 0, this.targetOffset.x, u), y: Br(a, 0, this.targetOffset.y, u) }, d = { x: c.x - this.currentOffset.x, y: c.y - this.currentOffset.y };
            this.currentOffset.x += d.x, this.currentOffset.y += d.y, o.offsetBy(d), o.move({ skipModifiers: this.modifierCount }), this.onNextFrame((function() {
              return n.smoothEndTick();
            }));
          } else o.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(n) {
          var o = n.pointer, a = n.event, u = n.eventTarget, c = this.interaction;
          c.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), c.updatePointer(o, a, u, !0), c._doPhase({ interaction: c, event: a, phase: "resume" }), X(c.coords.prev, c.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, Tn.cancel(this.timeout);
        } }]), r;
      })();
      function Nr(r) {
        var n = r.interactable, o = r.prepared;
        return n && n.options && o.name && n.options[o.name].inertia;
      }
      var Ha = { id: "inertia", before: ["modifiers", "actions"], install: function(r) {
        var n = r.defaults;
        r.usePlugin(wi), r.usePlugin(kr), r.actions.phases.inertiastart = !0, r.actions.phases.resume = !0, n.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
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
      }, "interactions:action-resume": pr, "interactions:action-inertiastart": pr, "interactions:after-action-inertiastart": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:after-action-resume": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      } } };
      function bo(r, n, o, a) {
        var u = 1 - r;
        return u * u * n + 2 * u * r * o + r * r * a;
      }
      function Br(r, n, o, a) {
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
          for (n in a) this.types[n] = Sn(this.types[n] || [], a[n]);
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
      function He(r, n) {
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
                  var G = R[k];
                  if (G.func === H && He(G.options, j)) {
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
              return j.func === P && He(j.options, W);
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
                  var G = Y[k];
                  if (G.func === P && He(G.options, R)) {
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
              if (Ve(j, A) && se(R, q) && se(R, j)) {
                var k = w.listeners;
                H.currentTarget = j;
                for (var G = 0; G < k.length; G++) {
                  var ve = k[G];
                  He(ve.options, P) && ve.func(H);
                }
              }
            }
            j = Xe(j);
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
      var Xa = _i, Si = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
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
            if (!Re.supportsPointerEvent && /mouse/.test(o.type)) {
              for (var q = 0; q < a.length && !W; q++) W = a[q].pointerType !== "mouse" && a[q].pointerIsDown;
              W = W || n.now() - n.prevTouchTime < 500 || o.timeStamp === 0;
            }
            if (!W) {
              var j = { pointer: o, pointerId: ye(o), pointerType: u, eventType: o.type, curEventTarget: v, eventTarget: d, scope: n }, Y = Eo(j);
              b.push([j.pointer, j.eventTarget, j.curEventTarget, Y]);
            }
          }
          for (var w = 0; w < b.length; w++) {
            var A = b[w], R = A[0], k = A[1], G = A[2];
            A[3][r](R, o, k, G);
          }
        };
      }
      function Eo(r) {
        var n = r.pointerType, o = r.scope, a = { interaction: Xa.search(r), searchDetails: r };
        return o.fire("interactions:find", a), a.interaction || o.interactions.new({ pointerType: n });
      }
      function Wr(r, n) {
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
          n[a] = So(a, r);
        }
        var u, c = Re.pEventTypes;
        function d() {
          for (var v = 0, b = r.interactions.list; v < b.length; v++) {
            var S = b[v];
            if (S.pointerIsDown && S.pointerType === "touch" && !S._interacting) for (var x = function() {
              var H = P[I];
              r.documents.some((function(W) {
                return se(W.doc, H.downTarget);
              })) || S.removePointer(H.pointer, H.event);
            }, I = 0, P = S.pointers; I < P.length; I++) x();
          }
        }
        (u = _e.PointerEvent ? [{ type: c.down, listener: d }, { type: c.down, listener: n.pointerDown }, { type: c.move, listener: n.pointerMove }, { type: c.up, listener: n.pointerUp }, { type: c.cancel, listener: n.pointerUp }] : [{ type: "mousedown", listener: n.pointerDown }, { type: "mousemove", listener: n.pointerMove }, { type: "mouseup", listener: n.pointerUp }, { type: "touchstart", listener: d }, { type: "touchstart", listener: n.pointerDown }, { type: "touchmove", listener: n.pointerMove }, { type: "touchend", listener: n.pointerUp }, { type: "touchcancel", listener: n.pointerUp }]).push({ type: "blur", listener: function(v) {
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
        return Wr(r, "add");
      }, "scope:remove-document": function(r) {
        return Wr(r, "remove");
      }, "interactable:unset": function(r, n) {
        for (var o = r.interactable, a = n.interactions.list.length - 1; a >= 0; a--) {
          var u = n.interactions.list[a];
          u.interactable === o && (u.stop(), n.fire("interactions:destroy", { interaction: u }), u.destroy(), n.interactions.list.length > 2 && n.interactions.list.splice(a, 1));
        }
      } }, onDocSignal: Wr, doOnInteractions: So, methodNames: Si }, ft = $a, an = (function(r) {
        return r[r.On = 0] = "On", r[r.Off = 1] = "Off", r;
      })(an || {}), kn = (function() {
        function r(n, o, a, u) {
          O(this, r), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new wo(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = o.actions, this.target = n, this._context = o.context || a, this._win = Oe(wt(n) ? this._context : n), this._doc = this._win.document, this._scopeEvents = u, this.set(o);
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
            c === "listeners" && this.updatePerActionListeners(n, d.listeners, v), D.array(v) ? d[c] = En(v) : D.plainObject(v) ? (d[c] = J(d[c] || {}, Vn(v)), D.object(a.perAction[c]) && "enabled" in a.perAction[c] && (d[c].enabled = v.enabled !== !1)) : D.bool(v) && D.object(a.perAction[c]) ? d[c].enabled = v : d[c] = v;
          }
        } }, { key: "getRect", value: function(n) {
          return n = n || (D.element(this.target) ? this.target : null), D.string(this.target) && (n = n || this._context.querySelector(this.target)), Qe(n);
        } }, { key: "rectChecker", value: function(n) {
          var o = this;
          return D.func(n) ? (this.getRect = function(a) {
            var u = J({}, n.apply(o, a));
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
          var d = $t(o, a, c);
          for (var v in d) {
            v === "wheel" && (v = Re.wheelEvent);
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
            if ((D.string(c.target) ? D.element(n) && Ve(n, c.target) : n === c.target) && c.inContext(n) && (d = o(c)), d !== void 0) return d;
          }
        } }]), r;
      })(), Ei = (function() {
        function r() {
          var n = this;
          O(this, r), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = Re, this.defaults = Vn(Fr), this.Eventable = wo, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = (function(a) {
            var u = function c(d, v) {
              var b = a.interactables.getExisting(d, v);
              return b || ((b = a.interactables.new(d, v)).events.global = c.globalEvents), b;
            };
            return u.getPointerAverage = ie, u.getTouchBBox = tt, u.getTouchDistance = ct, u.getTouchAngle = mt, u.getElementRect = Qe, u.getElementClientRect = lt, u.matchesSelector = Ve, u.closest = Je, u.globalEvents = {}, u.version = "1.10.27", u.scope = a, u.use = function(c, d) {
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
          })(this), this.InteractEvent = On, this.Interactable = void 0, this.interactables = new To(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(a) {
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
              return xe(pe(c.prototype), "set", this).call(this, d), o.fire("interactable:set", { options: d, interactable: this }), this;
            } }, { key: "unset", value: function() {
              xe(pe(c.prototype), "unset", this).call(this);
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
            return o.isInitialized = !0, D.window(a) && we(a), _e.init(a), Re.init(a), Tn.init(a), o.window = a, o.document = a.document, o.usePlugin(ft), o.usePlugin(Ye), o;
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
          o = o ? J({}, o) : {}, this.documents.push({ doc: n, options: o }), this.events.documents.push(n), n !== this.document && this.events.add(a, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: n, window: a, scope: this, options: o });
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
      var Ti = new Ei(), pt = Ti.interactStatic, Oo = typeof globalThis < "u" ? globalThis : window;
      Ti.init(Oo);
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
          var H = new Lr(r.interaction);
          H.copyFrom(r.interaction.modification), H.prepareStates(x), n.subModification = H, H.startAll(y({}, r));
        }
      }, set: function(r) {
        var n = r.state, o = r.rect, a = r.coords, u = n.linkedEdges, c = J({}, a), d = n.equalDelta ? Ya : Bt;
        if (J(r.edges, u), d(n, n.xIsPrimaryAxis, a, o), !n.subModification) return null;
        var v = J({}, o);
        at(u, v, { x: a.x - c.x, y: a.y - c.y });
        var b = n.subModification.setAll(y(y({}, r), {}, { rect: v, edges: u, pageCoords: a, prevCoords: a, prevRect: v })), S = b.delta;
        return b.changed && (d(n, Math.abs(S.x) > Math.abs(S.y), b.coords, b.rect), J(a, b.coords)), b.eventProps;
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
      var Ka = on(Mt, "aspectRatio"), Oi = function() {
      };
      Oi._defaults = {};
      var Kt = Oi;
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
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Ze = on(Zn, "restrict"), yn = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Ur = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function Ao(r, n) {
        for (var o = 0, a = ["top", "left", "bottom", "right"]; o < a.length; o++) {
          var u = a[o];
          u in r || (r[u] = n[u]);
        }
        return r;
      }
      var Fn = { noInner: yn, noOuter: Ur, start: function(r) {
        var n, o = r.interaction, a = r.startOffset, u = r.state, c = u.options;
        c && (n = _t(sn(c.offset, o, o.coords.start.page))), n = n || { x: 0, y: 0 }, u.offset = { top: n.y + a.top, left: n.x + a.left, bottom: n.y - a.bottom, right: n.x - a.right };
      }, set: function(r) {
        var n = r.coords, o = r.edges, a = r.interaction, u = r.state, c = u.offset, d = u.options;
        if (o) {
          var v = J({}, n), b = sn(d.inner, a, v) || {}, S = sn(d.outer, a, v) || {};
          Ao(b, yn), Ao(S, Ur), o.top ? n.y = Math.min(Math.max(S.top + c.top, v.y), b.top + c.top) : o.bottom && (n.y = Math.max(Math.min(S.bottom + c.bottom, v.y), b.bottom + c.bottom)), o.left ? n.x = Math.min(Math.max(S.left + c.left, v.x), b.left + c.left) : o.right && (n.x = Math.max(Math.min(S.right + c.right, v.x), b.right + c.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Va = on(Fn, "restrictEdges"), Za = J({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(r) {
      } }, Zn.defaults), ja = on({ start: Zn.start, set: Zn.set, defaults: Za }, "restrictRect"), Co = { width: -1 / 0, height: -1 / 0 }, Hr = { width: 1 / 0, height: 1 / 0 }, jn = on({ start: function(r) {
        return Fn.start(r);
      }, set: function(r) {
        var n = r.interaction, o = r.state, a = r.rect, u = r.edges, c = o.options;
        if (u) {
          var d = en(sn(c.min, n, r.coords)) || Co, v = en(sn(c.max, n, r.coords)) || Hr;
          o.options = { endOnly: c.endOnly, inner: J({}, Fn.noInner), outer: J({}, Fn.noOuter) }, u.top ? (o.options.inner.top = a.bottom - d.height, o.options.outer.top = a.bottom - v.height) : u.bottom && (o.options.inner.bottom = a.top + d.height, o.options.outer.bottom = a.top + v.height), u.left ? (o.options.inner.left = a.right - d.width, o.options.outer.left = a.right - v.width) : u.right && (o.options.inner.right = a.left + d.width, o.options.outer.right = a.left + v.width), Fn.set(r), o.options = c;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), Ii = { start: function(r) {
        var n, o = r.interaction, a = r.interactable, u = r.element, c = r.rect, d = r.state, v = r.startOffset, b = d.options, S = b.offsetWithOrigin ? (function(P) {
          var H = P.interaction.element, W = _t(Tt(P.state.options.origin, null, null, [H])), q = W || Ot(P.interactable, H, P.interaction.prepared.name);
          return q;
        })(r) : { x: 0, y: 0 };
        if (b.offset === "startCoords") n = { x: o.coords.start.page.x, y: o.coords.start.page.y };
        else {
          var x = Tt(b.offset, a, u, [o]);
          (n = _t(x) || { x: 0, y: 0 }).x += S.x, n.y += S.y;
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
          var R = b[A], k = R.range, G = R.x - v.x, ve = R.y - v.y, be = Yt(G, ve), Ee = be <= k;
          k === 1 / 0 && w.inRange && w.range !== 1 / 0 && (Ee = !1), w.target && !(Ee ? w.inRange && k !== 1 / 0 ? be / k < w.distance / w.range : k === 1 / 0 && w.range !== 1 / 0 || be < w.distance : !w.inRange && be < w.distance) || (w.target = R, w.distance = be, w.range = k, w.inRange = Ee, w.delta.x = G, w.delta.y = ve);
        }
        return w.inRange && (o.x = w.target.x, o.y = w.target.y), a.closest = w, w;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, Do = on(Ii, "snap"), vr = { start: function(r) {
        var n = r.state, o = r.edges, a = n.options;
        if (!o) return null;
        r.state = { options: { targets: null, relativePoints: [{ x: o.left ? 0 : 1, y: o.top ? 0 : 1 }], offset: a.offset || "self", origin: { x: 0, y: 0 }, range: a.range } }, n.targetFields = n.targetFields || [["width", "height"], ["x", "y"]], Ii.start(r), n.offsets = r.state.offsets, r.state = n;
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
        var j = Ii.set(r);
        return o.options = u, j;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, Ri = on(vr, "snapSize"), mr = { aspectRatio: Ka, restrictEdges: Va, restrict: Ze, restrictRect: ja, restrictSize: jn, snapEdges: on({ start: function(r) {
        var n = r.edges;
        return n ? (r.state.targetFields = r.state.targetFields || [[n.left ? "left" : "right", n.top ? "top" : "bottom"]], vr.start(r)) : null;
      }, set: vr.set, defaults: J(Vn(vr.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Do, snapSize: Ri, spring: Kt, avoid: Kt, transform: Kt, rubberband: Kt }, zo = { id: "modifiers", install: function(r) {
        var n = r.interactStatic;
        for (var o in r.usePlugin(kr), r.usePlugin(Mo), n.modifiers = mr, mr) {
          var a = mr[o], u = a._defaults, c = a._methods;
          u._methods = c, r.defaults.perAction[o] = u;
        }
      } }, Ja = zo, qr = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c, d, v, b) {
          var S;
          if (O(this, o), It(We(S = n.call(this, v)), c), c !== u && It(We(S), u), S.timeStamp = b, S.originalEvent = c, S.type = a, S.pointerId = ye(u), S.pointerType = tn(u), S.target = d, S.currentTarget = null, a === "tap") {
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
        r.duplicate || o.pointerIsDown && !o.pointerWasMoved || (o.pointerIsDown && yt(r), In({ interaction: o, pointer: a, event: u, eventTarget: c, type: "move" }, n));
      }, "interactions:down": function(r, n) {
        (function(o, a) {
          for (var u = o.interaction, c = o.pointer, d = o.event, v = o.eventTarget, b = o.pointerIndex, S = u.pointers[b].hold, x = pn(v), I = { interaction: u, pointer: c, event: d, eventTarget: v, type: "hold", targets: [], path: x, node: null }, P = 0; P < x.length; P++) {
            var H = x[P];
            I.node = H, a.fire("pointerEvents:collect-targets", I);
          }
          if (I.targets.length) {
            for (var W = 1 / 0, q = 0, j = I.targets; q < j.length; q++) {
              var Y = j[q].eventable.options.holdDuration;
              Y < W && (W = Y);
            }
            S.duration = W, S.timeout = setTimeout((function() {
              In({ interaction: u, eventTarget: v, pointer: c, event: d, type: "hold" }, a);
            }), W);
          }
        })(r, n), In(r, n);
      }, "interactions:up": function(r, n) {
        yt(r), In(r, n), (function(o, a) {
          var u = o.interaction, c = o.pointer, d = o.event, v = o.eventTarget;
          u.pointerWasMoved || In({ interaction: u, eventTarget: v, pointer: c, event: d, type: "tap" }, a);
        })(r, n);
      }, "interactions:cancel": function(r, n) {
        yt(r), In(r, n);
      } }, PointerEvent: qr, fire: In, collectEventTargets: Mi, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function In(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, d = r.type, v = r.targets, b = v === void 0 ? Mi(r, n) : v, S = new qr(d, a, u, c, o, n.now());
        n.fire("pointerEvents:new", { pointerEvent: S });
        for (var x = { interaction: o, pointer: a, event: u, eventTarget: c, targets: b, type: d, pointerEvent: S }, I = 0; I < b.length; I++) {
          var P = b[I];
          for (var H in P.props || {}) S[H] = P.props[H];
          var W = Ot(P.eventable, P.node);
          if (S._subtractOrigin(W), S.eventable = P.eventable, S.currentTarget = P.node, P.eventable.fire(S), S._addOrigin(W), S.immediatePropagationStopped || S.propagationStopped && I + 1 < b.length && b[I + 1].node !== S.currentTarget) break;
        }
        if (n.fire("pointerEvents:fired", x), d === "tap") {
          var q = S.double ? In({ interaction: o, pointer: a, event: u, eventTarget: c, type: "doubletap" }, n) : S;
          o.prevTap = q, o.tapTime = q.timeStamp;
        }
        return S;
      }
      function Mi(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, d = r.type, v = o.getPointerIndex(a), b = o.pointers[v];
        if (d === "tap" && (o.pointerWasMoved || !b || b.downTarget !== c)) return [];
        for (var S = pn(c), x = { interaction: o, pointer: a, event: u, eventTarget: c, type: d, path: S, targets: [], node: null }, I = 0; I < S.length; I++) {
          var P = S[I];
          x.node = P, n.fire("pointerEvents:collect-targets", x);
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
      var Ai = Object.freeze({ __proto__: null, default: Nn });
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
        r.usePlugin(Ai), r.usePlugin(Lo), r.usePlugin(es);
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
                var q = en(P), j = /* @__PURE__ */ (function(Y) {
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
                  var G = Y.interactions.new({ pointerType: "reflow" }), ve = { interaction: G, event: k, pointer: k, eventTarget: A, phase: "reflow" };
                  G.interactable = w, G.element = A, G.prevEvent = k, G.updatePointer(k, k, A, !0), Q(G.coords.delta), pi(G.prepared, R), G._doPhase(ve);
                  var be = Y.window, Ee = be.Promise, At = Ee ? new Ee((function(bn) {
                    G._reflowResolve = bn;
                  })) : void 0;
                  return G._reflowPromise = At, G.start(R, w, A), G._interacting ? (G.move(ve), G.end(k)) : (G.stop(), G._reflowResolve()), G.removePointer(k, k), At;
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
      if (pt.use(fr), pt.use(wi), pt.use(ns), pt.use(qa), pt.use(Ja), pt.use(mi), pt.use(Aa), pt.use(Da), pt.use(Jn), pt.default = pt, C(p) === "object" && p) try {
        p.exports = pt;
      } catch {
      }
      return pt.default = pt, pt;
    }));
  })($i, $i.exports)), $i.exports;
}
var G0 = /* @__PURE__ */ q0();
const Ac = /* @__PURE__ */ Lf(G0), Cc = /* @__PURE__ */ Ta({
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
    const y = p, C = l, O = Ji(If), B = Ji(Rf);
    if (!O)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const L = i0(null), E = Qi({
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
    let V = !1, pe = !1, te = NaN, We = NaN, me = NaN, xe = NaN, Ge = -1, Fe = -1, Ue = -1, ze = -1, we = y.x, Oe = y.y, Ce = y.w, Ne = y.h;
    const D = rt(), Ie = Qi({
      i: o0(y, "i"),
      state: E,
      wrapper: D,
      calcXY: Tt
    });
    function ge(z) {
      $t(z);
    }
    function et() {
      vt();
    }
    function $(z) {
      Qt(y.isDraggable) && (E.draggable = z);
    }
    function re(z) {
      Qt(y.isResizable) && (E.resizable = z);
    }
    function ee(z) {
      Qt(y.isBounded) && (E.bounded = z);
    }
    function _e(z) {
      E.transformScale = z;
    }
    function de(z) {
      E.rowHeight = z;
    }
    function Re(z) {
      E.maxRows = z;
    }
    function se() {
      E.rtl = Rc() === "rtl", vt();
    }
    function Je(z) {
      E.cols = Math.floor(z);
    }
    O.increaseItem(Ie), gf(() => {
      E.rtl = Rc() === "rtl";
    }), Oa(() => {
      O.responsive && O.lastBreakpoint ? E.cols = zf(O.lastBreakpoint, O.cols) : E.cols = O.colNum, E.rowHeight = O.rowHeight, E.containerWidth = O.width !== null ? O.width : 100, E.margin = O.margin !== void 0 ? O.margin.map(Number) : [10, 10], E.maxRows = O.maxRows, Qt(y.isDraggable) ? E.draggable = O.isDraggable : E.draggable = y.isDraggable, Qt(y.isResizable) ? E.resizable = O.isResizable : E.resizable = y.isResizable, Qt(y.isBounded) ? E.bounded = O.isBounded : E.bounded = y.isBounded, E.transformScale = O.transformScale, E.useCssTransforms = O.useCssTransforms, E.useStyleCursor = O.useStyleCursor, a0(() => {
        we = y.x, Oe = y.y, Ne = y.h, Ce = y.w, Pt(Qe);
      }), B.on("updateWidth", ge), B.on("compact", et), B.on("setDraggable", $), B.on("setResizable", re), B.on("setBounded", ee), B.on("setTransformScale", _e), B.on("setRowHeight", de), B.on("setMaxRows", Re), B.on("directionchange", se), B.on("setColNum", Je);
    }), wu(() => {
      B.off("updateWidth", ge), B.off("compact", et), B.off("setDraggable", $), B.off("setResizable", re), B.off("setBounded", ee), B.off("setTransformScale", _e), B.off("setRowHeight", de), B.off("setMaxRows", Re), B.off("directionchange", se), B.off("setColNum", Je), L.value && (L.value.unset(), L.value = null), O.decreaseItem(Ie);
    }), h({ state: E, wrapper: D });
    const Xe = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, Ve = it(() => E.resizable && !y.static), Me = it(() => O.isMirrored ? !E.rtl : E.rtl), Nt = it(() => (E.draggable || E.resizable) && !y.static), ht = L0("item"), Pn = it(() => ({
      [ht.b()]: !0,
      [ht.bm("resizable")]: Ve.value,
      [ht.bm("static")]: y.static,
      [ht.bm("resizing")]: E.isResizing,
      [ht.bm("dragging")]: E.isDragging,
      [ht.bm("transform")]: E.useCssTransforms,
      [ht.bm("rtl")]: Me.value,
      [ht.bm("no-touch")]: Xe && Nt.value
    })), lt = it(() => [ht.be("resizer"), Me.value && ht.bem("resizer", "rtl")].filter(Boolean));
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
        Pt(Qe), Pt(pn);
      }
    ), je([() => E.cols, () => E.containerWidth], () => {
      Pt(Q), Pt(Qe), Pt(pn);
    }), je([() => y.minH, () => y.maxH, () => y.minW, () => y.maxW], () => {
      Pt(Q);
    }), je(Me, () => {
      Pt(Q), Pt(Qe);
    }), je([() => O.margin, () => O.margin[0], () => O.margin[1]], () => {
      const z = O.margin;
      !z || z[0] === E.margin[0] && z[1] === E.margin[1] || (E.margin = z.map(Number), Pt(Qe), Pt(pn));
    });
    function Qe() {
      y.x + y.w > E.cols ? (we = 0, Ce = y.w > E.cols ? E.cols : y.w) : (we = y.x, Ce = y.w);
      const z = Xt(we, Oe, Ce, Ne);
      E.isDragging && (z.top = E.dragging.top, Me.value ? z.right = E.dragging.left : z.left = E.dragging.left), E.isResizing && (z.width = E.resizing.width, z.height = E.resizing.height);
      let Z;
      E.useCssTransforms ? Me.value ? Z = C0(z.top, z.right, z.width, z.height) : Z = A0(z.top, z.left, z.width, z.height) : Me.value ? Z = z0(z.top, z.right, z.width, z.height) : Z = D0(z.top, z.left, z.width, z.height), E.style = Z;
    }
    function pn() {
      const z = {};
      for (const Z of ["width", "height"]) {
        const oe = E.style[Z].match(/^(\d+)px$/);
        if (!oe)
          return;
        z[Z] = oe[1];
      }
      C("container-resized", y.i, y.h, y.w, z.height, z.width);
    }
    function wt(z) {
      if (y.static) return;
      const Z = z.type;
      if (Z === "resizestart" && E.isResizing || Z !== "resizestart" && !E.isResizing)
        return;
      const oe = Oc(z);
      if (Qt(oe)) return;
      const { x: ye, y: le } = oe, ae = { width: 0, height: 0 };
      let ie;
      switch (Z) {
        case "resizestart": {
          Q(), Ge = Ce, Fe = Ne, ie = Xt(we, Oe, Ce, Ne), ae.width = ie.width, ae.height = ie.height, E.resizing = ae, E.isResizing = !0;
          break;
        }
        case "resizemove": {
          !z.edges.right && !z.edges.left && (me = ye), !z.edges.top && !z.edges.bottom && (xe = le);
          const tt = Ic(me, xe, ye, le);
          Me.value ? ae.width = E.resizing.width - tt.deltaX / E.transformScale : ae.width = E.resizing.width + tt.deltaX / E.transformScale, ae.height = E.resizing.height + tt.deltaY / E.transformScale, E.resizing = ae;
          break;
        }
        case "resizeend": {
          ie = Xt(we, Oe, Ce, Ne), ae.width = ie.width, ae.height = ie.height, E.resizing = { width: -1, height: -1 }, E.isResizing = !1;
          break;
        }
      }
      ie = Ot(ae.height, ae.width), ie.w < y.minW && (ie.w = y.minW), ie.w > y.maxW && (ie.w = y.maxW), ie.h < y.minH && (ie.h = y.minH), ie.h > y.maxH && (ie.h = y.maxH), ie.h < 1 && (ie.h = 1), ie.w < 1 && (ie.w = 1), me = ye, xe = le, (Ce !== ie.w || Ne !== ie.h) && C("resize", y.i, ie.h, ie.w, ae.height, ae.width), z.type === "resizeend" && (Ge !== Ce || Fe !== Ne) && C("resized", y.i, ie.h, ie.w, ae.height, ae.width), B.emit("resizeEvent", z.type, y.i, we, Oe, ie.h, ie.w);
    }
    function J(z) {
      if (y.static || E.isResizing) return;
      const Z = z.type;
      if (Z === "dragstart" && E.isDragging || Z !== "dragstart" && !E.isDragging)
        return;
      const oe = Oc(z);
      if (Qt(oe)) return;
      const { x: ye, y: le } = oe, ae = z.target;
      if (!ae.offsetParent) return;
      const ie = { top: 0, left: 0 };
      switch (Z) {
        case "dragstart": {
          Ue = we, ze = Oe;
          const ct = ae.offsetParent.getBoundingClientRect(), mt = ae.getBoundingClientRect(), tn = mt.left / E.transformScale, nn = ct.left / E.transformScale, rn = mt.right / E.transformScale, Sn = ct.right / E.transformScale, En = mt.top / E.transformScale, gn = ct.top / E.transformScale;
          Me.value ? ie.left = (rn - Sn) * -1 : ie.left = tn - nn, ie.top = En - gn, E.dragging = ie, E.isDragging = !0;
          break;
        }
        case "dragmove": {
          const ct = Ic(te, We, ye, le);
          if (Me.value ? ie.left = E.dragging.left - ct.deltaX / E.transformScale : ie.left = E.dragging.left + ct.deltaX / E.transformScale, ie.top = E.dragging.top + ct.deltaY / E.transformScale, E.bounded) {
            const mt = ae.offsetParent.clientHeight - en(y.h, E.rowHeight, E.margin[1]);
            ie.top = at(ie.top, 0, mt);
            const tn = _t(), nn = E.containerWidth - en(y.w, tn, E.margin[0]);
            ie.left = at(ie.left, 0, nn);
          }
          E.dragging = ie;
          break;
        }
        case "dragend": {
          const ct = ae.offsetParent.getBoundingClientRect(), mt = ae.getBoundingClientRect(), tn = mt.left / E.transformScale, nn = ct.left / E.transformScale, rn = mt.right / E.transformScale, Sn = ct.right / E.transformScale, En = mt.top / E.transformScale, gn = ct.top / E.transformScale;
          Me.value ? ie.left = (rn - Sn) * -1 : ie.left = tn - nn, ie.top = En - gn, E.dragging = { top: -1, left: -1 }, E.isDragging = !1;
          break;
        }
      }
      let tt;
      Me.value, tt = Tt(ie.top, ie.left), te = ye, We = le, (we !== tt.x || Oe !== tt.y) && C("move", y.i, tt.x, tt.y), z.type === "dragend" && (Ue !== we || ze !== Oe) && C("moved", y.i, tt.x, tt.y), B.emit("dragEvent", z.type, y.i, tt.x, tt.y, Ne, Ce);
    }
    function Xt(z, Z, oe, ye) {
      const le = _t();
      let ae;
      return Me.value ? ae = {
        right: Math.round(le * z + (z + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * Z + (Z + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: oe === 1 / 0 ? oe : Math.round(le * oe + Math.max(0, oe - 1) * E.margin[0]),
        height: ye === 1 / 0 ? ye : Math.round(E.rowHeight * ye + Math.max(0, ye - 1) * E.margin[1])
      } : ae = {
        left: Math.round(le * z + (z + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * Z + (Z + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: oe === 1 / 0 ? oe : Math.round(le * oe + Math.max(0, oe - 1) * E.margin[0]),
        height: ye === 1 / 0 ? ye : Math.round(E.rowHeight * ye + Math.max(0, ye - 1) * E.margin[1])
      }, ae;
    }
    function Tt(z, Z) {
      const oe = _t();
      let ye = Math.round((Z - E.margin[0]) / (oe + E.margin[0])), le = Math.round((z - E.margin[1]) / (E.rowHeight + E.margin[1]));
      return ye = Math.max(Math.min(ye, E.cols - Ce), 0), le = Math.max(Math.min(le, E.maxRows - Ne), 0), { x: ye, y: le };
    }
    function _t() {
      return (E.containerWidth - E.margin[0] * (E.cols + 1)) / E.cols;
    }
    function en(z, Z, oe) {
      return Number.isFinite(z) ? Math.round(Z * z + Math.max(0, z - 1) * oe) : z;
    }
    function at(z, Z, oe) {
      return Math.max(Math.min(z, oe), Z);
    }
    function Ot(z, Z, oe = !1) {
      const ye = _t();
      let le = Math.round((Z + E.margin[0]) / (ye + E.margin[0])), ae = 0;
      return oe ? ae = Math.ceil((z + E.margin[1]) / (E.rowHeight + E.margin[1])) : ae = Math.round((z + E.margin[1]) / (E.rowHeight + E.margin[1])), le = Math.max(Math.min(le, E.cols - we), 0), ae = Math.max(Math.min(ae, E.maxRows - Oe), 0), { w: le, h: ae };
    }
    function $t(z, Z) {
      E.containerWidth = z;
    }
    function vt() {
      Qe();
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
    const X = Sc(wt);
    function Q() {
      if (Yt(), !!L.value)
        if (E.resizable && !y.static) {
          const z = Xt(0, 0, y.maxW, y.maxH), Z = Xt(0, 0, y.minW, y.minH), oe = {
            edges: {
              left: Me.value ? `.${lt.value[0]}` : !1,
              right: Me.value ? !1 : `.${lt.value[0]}`,
              bottom: `.${lt.value[0]}`,
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
          y.preserveAspectRatio && (oe.modifiers = [Ac.modifiers.aspectRatio({ ratio: "preserve" })]), L.value.resizable(oe), pe || (pe = !0, L.value.on("resizestart resizemove resizeend", (ye) => {
            ye.type === "resizemove" ? X(ye) : wt(ye);
          }));
        } else
          L.value.resizable({ enabled: !1 });
    }
    return (z, Z) => (Ft(), zn("section", {
      ref_key: "wrapper",
      ref: D,
      class: pc(Pn.value),
      style: Ki(E.style)
    }, [
      gu(z.$slots, "default"),
      Ve.value ? (Ft(), zn("span", {
        key: 0,
        class: pc(lt.value)
      }, null, 2)) : vu("", !0)
    ], 6));
  }
}), Mr = typeof window < "u";
var Dc;
Mr && (Dc = window?.navigator) != null && Dc.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function zc(p) {
  return p != null;
}
function Pc() {
}
const X0 = Object.freeze({
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
Object.freeze(new Set(Object.keys(X0)));
const $0 = Mr && ("ontouchstart" in window || K0() > 0), Y0 = $0 ? "pointerdown" : "click";
function K0() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function V0(p, h, l = window.Event) {
  const { type: y, bubbles: C = !1, cancelable: O = !1, ...B } = h;
  if (!zc(y) || y === "") return !1;
  let L;
  return zc(l) ? L = new l(y, { bubbles: C, cancelable: O }) : (L = document.createEvent("HTMLEvents"), L.initEvent(y, C, O)), Object.assign(L, B), p.dispatchEvent(L);
}
const Z0 = "clickoutside", j0 = /* @__PURE__ */ new Set();
Mr && document.addEventListener(
  Y0,
  (p) => {
    const h = p.target, l = p.composedPath && p.composedPath();
    j0.forEach((y) => {
      y !== h && (l ? !l.includes(y) : !y.contains(h)) && (!y.__transferElement || y.__transferElement !== h && !y.__transferElement.contains(h)) && V0(y, { type: Z0 });
    });
  },
  !0
);
const J0 = [
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
if (Mr) {
  for (const p of J0)
    if (p[1] in document) {
      wa = p;
      break;
    }
}
it(() => !1);
const Q0 = /* @__PURE__ */ new Set(), ey = /* @__PURE__ */ new WeakMap();
if (Mr && wa) {
  const p = wa[2], h = wa[4];
  document.addEventListener(
    h,
    () => {
      if (Q0.forEach((l) => {
        l.value = !1;
      }), document[p]) {
        const l = ey.get(document[p]);
        l && (l.value = !0);
      }
    },
    !1
  );
}
const kf = /* @__PURE__ */ new Map();
kf.set("x", 0);
kf.set("y", 0);
var Ir = [], ty = function() {
  return Ir.some(function(p) {
    return p.activeTargets.length > 0;
  });
}, ny = function() {
  return Ir.some(function(p) {
    return p.skippedTargets.length > 0;
  });
}, Lc = "ResizeObserver loop completed with undelivered notifications.", ry = function() {
  var p;
  typeof ErrorEvent == "function" ? p = new ErrorEvent("error", {
    message: Lc
  }) : (p = document.createEvent("Event"), p.initEvent("error", !1, !1), p.message = Lc), window.dispatchEvent(p);
}, to;
(function(p) {
  p.BORDER_BOX = "border-box", p.CONTENT_BOX = "content-box", p.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(to || (to = {}));
var Rr = function(p) {
  return Object.freeze(p);
}, iy = /* @__PURE__ */ (function() {
  function p(h, l) {
    this.inlineSize = h, this.blockSize = l, Rr(this);
  }
  return p;
})(), Ff = (function() {
  function p(h, l, y, C) {
    return this.x = h, this.y = l, this.width = y, this.height = C, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Rr(this);
  }
  return p.prototype.toJSON = function() {
    var h = this, l = h.x, y = h.y, C = h.top, O = h.right, B = h.bottom, L = h.left, E = h.width, V = h.height;
    return { x: l, y, top: C, right: O, bottom: B, left: L, width: E, height: V };
  }, p.fromRect = function(h) {
    return new p(h.x, h.y, h.width, h.height);
  }, p;
})(), _u = function(p) {
  return p instanceof SVGElement && "getBBox" in p;
}, Nf = function(p) {
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
}, oy = function(p) {
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
}, ji = typeof window < "u" ? window : {}, ma = /* @__PURE__ */ new WeakMap(), Fc = /auto|scroll/, ay = /^tb|vertical/, sy = /msie|trident/i.test(ji.navigator && ji.navigator.userAgent), Dn = function(p) {
  return parseFloat(p || "0");
}, oi = function(p, h, l) {
  return p === void 0 && (p = 0), h === void 0 && (h = 0), l === void 0 && (l = !1), new iy((l ? h : p) || 0, (l ? p : h) || 0);
}, Nc = Rr({
  devicePixelContentBoxSize: oi(),
  borderBoxSize: oi(),
  contentBoxSize: oi(),
  contentRect: new Ff(0, 0, 0, 0)
}), Bf = function(p, h) {
  if (h === void 0 && (h = !1), ma.has(p) && !h)
    return ma.get(p);
  if (Nf(p))
    return ma.set(p, Nc), Nc;
  var l = getComputedStyle(p), y = _u(p) && p.ownerSVGElement && p.getBBox(), C = !sy && l.boxSizing === "border-box", O = ay.test(l.writingMode || ""), B = !y && Fc.test(l.overflowY || ""), L = !y && Fc.test(l.overflowX || ""), E = y ? 0 : Dn(l.paddingTop), V = y ? 0 : Dn(l.paddingRight), pe = y ? 0 : Dn(l.paddingBottom), te = y ? 0 : Dn(l.paddingLeft), We = y ? 0 : Dn(l.borderTopWidth), me = y ? 0 : Dn(l.borderRightWidth), xe = y ? 0 : Dn(l.borderBottomWidth), Ge = y ? 0 : Dn(l.borderLeftWidth), Fe = te + V, Ue = E + pe, ze = Ge + me, we = We + xe, Oe = L ? p.offsetHeight - we - p.clientHeight : 0, Ce = B ? p.offsetWidth - ze - p.clientWidth : 0, Ne = C ? Fe + ze : 0, D = C ? Ue + we : 0, Ie = y ? y.width : Dn(l.width) - Ne - Ce, ge = y ? y.height : Dn(l.height) - D - Oe, et = Ie + Fe + Ce + ze, $ = ge + Ue + Oe + we, re = Rr({
    devicePixelContentBoxSize: oi(Math.round(Ie * devicePixelRatio), Math.round(ge * devicePixelRatio), O),
    borderBoxSize: oi(et, $, O),
    contentBoxSize: oi(Ie, ge, O),
    contentRect: new Ff(te, E, Ie, ge)
  });
  return ma.set(p, re), re;
}, Wf = function(p, h, l) {
  var y = Bf(p, l), C = y.borderBoxSize, O = y.contentBoxSize, B = y.devicePixelContentBoxSize;
  switch (h) {
    case to.DEVICE_PIXEL_CONTENT_BOX:
      return B;
    case to.BORDER_BOX:
      return C;
    default:
      return O;
  }
}, uy = /* @__PURE__ */ (function() {
  function p(h) {
    var l = Bf(h);
    this.target = h, this.contentRect = l.contentRect, this.borderBoxSize = Rr([l.borderBoxSize]), this.contentBoxSize = Rr([l.contentBoxSize]), this.devicePixelContentBoxSize = Rr([l.devicePixelContentBoxSize]);
  }
  return p;
})(), Uf = function(p) {
  if (Nf(p))
    return 1 / 0;
  for (var h = 0, l = p.parentNode; l; )
    h += 1, l = l.parentNode;
  return h;
}, ly = function() {
  var p = 1 / 0, h = [];
  Ir.forEach(function(O) {
    if (O.activeTargets.length !== 0) {
      var B = [];
      O.activeTargets.forEach(function(L) {
        var E = new uy(L.target), V = Uf(L.target);
        B.push(E), L.lastReportedSize = Wf(L.target, L.observedBox), V < p && (p = V);
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
  Ir.forEach(function(h) {
    h.activeTargets.splice(0, h.activeTargets.length), h.skippedTargets.splice(0, h.skippedTargets.length), h.observationTargets.forEach(function(l) {
      l.isActive() && (Uf(l.target) > p ? h.activeTargets.push(l) : h.skippedTargets.push(l));
    });
  });
}, cy = function() {
  var p = 0;
  for (Bc(p); ty(); )
    p = ly(), Bc(p);
  return ny() && ry(), p > 0;
}, js, Hf = [], fy = function() {
  return Hf.splice(0).forEach(function(p) {
    return p();
  });
}, dy = function(p) {
  if (!js) {
    var h = 0, l = document.createTextNode(""), y = { characterData: !0 };
    new MutationObserver(function() {
      return fy();
    }).observe(l, y), js = function() {
      l.textContent = "".concat(h ? h-- : h++);
    };
  }
  Hf.push(p), js();
}, hy = function(p) {
  dy(function() {
    requestAnimationFrame(p);
  });
}, _a = 0, py = function() {
  return !!_a;
}, gy = 250, vy = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Wc = [
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
}, Js = !1, my = (function() {
  function p() {
    var h = this;
    this.stopped = !0, this.listener = function() {
      return h.schedule();
    };
  }
  return p.prototype.run = function(h) {
    var l = this;
    if (h === void 0 && (h = gy), !Js) {
      Js = !0;
      var y = Uc(h);
      hy(function() {
        var C = !1;
        try {
          C = cy();
        } finally {
          if (Js = !1, h = y - Uc(), !py())
            return;
          C ? l.run(1e3) : h > 0 ? l.run(h) : l.start();
        }
      });
    }
  }, p.prototype.schedule = function() {
    this.stop(), this.run();
  }, p.prototype.observe = function() {
    var h = this, l = function() {
      return h.observer && h.observer.observe(document.body, vy);
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
})(), xu = new my(), Hc = function(p) {
  !_a && p > 0 && xu.start(), _a += p, !_a && xu.stop();
}, yy = function(p) {
  return !_u(p) && !oy(p) && getComputedStyle(p).display === "inline";
}, by = (function() {
  function p(h, l) {
    this.target = h, this.observedBox = l || to.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return p.prototype.isActive = function() {
    var h = Wf(this.target, this.observedBox, !0);
    return yy(this.target) && (this.lastReportedSize = h), this.lastReportedSize.inlineSize !== h.inlineSize || this.lastReportedSize.blockSize !== h.blockSize;
  }, p;
})(), xy = /* @__PURE__ */ (function() {
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
    var y = new xy(h, l);
    ya.set(h, y);
  }, p.observe = function(h, l, y) {
    var C = ya.get(h), O = C.observationTargets.length === 0;
    qc(C.observationTargets, l) < 0 && (O && Ir.push(C), C.observationTargets.push(new by(l, y && y.box)), Hc(1), xu.schedule());
  }, p.unobserve = function(h, l) {
    var y = ya.get(h), C = qc(y.observationTargets, l), O = y.observationTargets.length === 1;
    C >= 0 && (O && Ir.splice(Ir.indexOf(y), 1), y.observationTargets.splice(C, 1), Hc(-1));
  }, p.disconnect = function(h) {
    var l = this, y = ya.get(h);
    y.observationTargets.slice().forEach(function(C) {
      return l.unobserve(h, C.target);
    }), y.activeTargets.splice(0, y.activeTargets.length);
  }, p;
})(), wy = (function() {
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
function _y(p) {
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
const qf = new (Mr && window.ResizeObserver || wy)(
  _y
);
function Gc(p, h) {
  Ea.set(p, h), qf.observe(p);
}
function Xc(p) {
  Ea.has(p) && (qf.unobserve(p), Ea.delete(p));
}
function Sy(p = {}) {
  let h = Pc;
  const l = je(
    () => Gt(p.target),
    (C) => {
      h(), !(!C || typeof p.onResize != "function") && (Gc(C, p.onResize), h = () => {
        Xc(C), h = Pc;
      });
    },
    { immediate: !0 }
  ), y = () => {
    l(), h();
  };
  return s0() && u0(y), {
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
const Ey = rt(!1);
it(() => Ey.value);
const $c = "__theme_style__", Qs = "__theme_observer__", Yc = Qi(/* @__PURE__ */ new Map()), Kc = /* @__PURE__ */ new Map();
je(Yc, () => {
  if (!Mr) return;
  Kc.clear();
  const p = document.head.querySelector(`#${$c}`);
  p && document.head.removeChild(p);
  const h = document.createElement("style");
  let l = `.${Qs} { width: 1px }`, y = 1;
  for (const [C, [O, B]] of Yc.entries())
    l += ` html.${O} .${Qs}, .${B} .${Qs} { width: ${++y}px }`, Kc.set(y, C);
  h.textContent = l, h.id = $c, document.head.appendChild(h);
});
const Gf = /* @__PURE__ */ Ta({
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
    }), B = /* @__PURE__ */ new Map(), L = rt(y.layout), E = rt(), { observeResize: V, unobserveResize: pe } = Sy(), te = S0();
    te.on("resizeEvent", We), te.on("dragEvent", me), gf(() => {
      C("layout-before-mount", L.value);
    }), Oa(() => {
      C("layout-mounted", L.value), kt(() => {
        P0(L.value), O.originalLayout = L.value, kt(() => {
          ge(), E.value && V(E.value, E0(we, 16)), ni(L.value, y.verticalCompact), C("layout-updated", L.value), ze(), we();
        });
      });
    }), wu(() => {
      te.clearAll(), E.value && pe(E.value);
    });
    function We($, re, ee, _e, de, Re) {
      D($, re, ee, _e, de, Re);
    }
    function me($, re, ee, _e, de, Re) {
      Ne($, re, ee, _e, de, Re);
    }
    je(
      () => O.width,
      ($, re) => {
        kt(() => {
          te.emit("updateWidth", $), re === -1 && kt(() => {
            C("layout-ready", L.value);
          }), ze();
        });
      }
    ), je(
      () => [y.layout, y.layout.length],
      () => {
        L.value = y.layout, Ue();
      }
    ), je(
      () => y.colNum,
      ($) => {
        te.emit("setColNum", $);
      }
    ), je(
      () => y.rowHeight,
      ($) => {
        te.emit("setRowHeight", $);
      }
    ), je(
      () => y.isDraggable,
      ($) => {
        te.emit("setDraggable", $);
      }
    ), je(
      () => y.isResizable,
      ($) => {
        te.emit("setResizable", $);
      }
    ), je(
      () => y.isBounded,
      ($) => {
        te.emit("setBounded", $);
      }
    ), je(
      () => y.transformScale,
      ($) => {
        te.emit("setTransformScale", $);
      }
    ), je(
      () => y.responsive,
      ($) => {
        $ || (C("update:layout", O.originalLayout), te.emit("setColNum", y.colNum)), we();
      }
    ), je(
      () => y.maxRows,
      ($) => {
        te.emit("setMaxRows", $);
      }
    ), je([() => y.margin, () => y.margin[1]], ze), gc(
      If,
      Qi({
        ...vc(y),
        ...vc(O),
        increaseItem: xe,
        decreaseItem: Ge
      })
    ), gc(Rf, te), h({ state: O, getItem: Fe, resizeEvent: D, dragEvent: Ne, layoutUpdate: Ue });
    function xe($) {
      B.set($.i, $);
    }
    function Ge($) {
      B.delete($.i);
    }
    function Fe($) {
      return B.get($);
    }
    function Ue() {
      if (!Qt(L.value) && !Qt(O.originalLayout)) {
        if (L.value.length !== O.originalLayout.length) {
          const $ = et(L.value, O.originalLayout);
          if ($.length > 0)
            if (L.value.length > O.originalLayout.length)
              O.originalLayout = O.originalLayout.concat($);
            else {
              const re = new Set($.map((ee) => ee.i));
              O.originalLayout = O.originalLayout.filter((ee) => !re.has(ee.i));
            }
          O.lastLayoutLength = L.value.length, ge();
        }
        ni(L.value, y.verticalCompact), te.emit("updateWidth", O.width), ze(), C("layout-updated", L.value);
      }
    }
    function ze() {
      O.mergedStyle = {
        height: Oe()
      };
    }
    function we() {
      E.value && (O.width = E.value.offsetWidth), te.emit("resizeEvent");
    }
    function Oe() {
      if (!y.autoSize) return;
      const $ = parseFloat(y.margin[1]);
      return O0(L.value) * (y.rowHeight + $) + $ + "px";
    }
    let Ce;
    function Ne($, re, ee, _e, de, Re) {
      let se = Ec(L.value, re);
      Qt(se) && (se = { h: 0, w: 0, x: 0, y: 0, i: "" }), $ === "dragstart" && !y.verticalCompact && (Ce = L.value.reduce(
        (Je, { i: Xe, x: Ve, y: Me }) => ({
          ...Je,
          [Xe]: { x: Ve, y: Me }
        }),
        {}
      )), $ === "dragmove" || $ === "dragstart" ? (O.placeholder.i = re, O.placeholder.x = se.x, O.placeholder.y = se.y, O.placeholder.w = Re, O.placeholder.h = de, kt(() => {
        O.isDragging = !0;
      }), te.emit("updateWidth", O.width)) : kt(() => {
        O.isDragging = !1;
      }), L.value = bu(L.value, se, ee, _e, !0, y.preventCollision), y.restoreOnDrag ? (se.static = !0, ni(L.value, y.verticalCompact, Ce), se.static = !1) : ni(L.value, y.verticalCompact), te.emit("compact"), ze(), $ === "dragend" && (Ce = void 0, C("layout-updated", L.value));
    }
    function D($, re, ee, _e, de, Re) {
      let se = Ec(L.value, re);
      Qt(se) && (se = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let Je;
      if (y.preventCollision) {
        const Xe = Af(L.value, { ...se, w: Re, h: de }).filter(
          (Ve) => Ve.i !== se.i
        );
        if (Je = Xe.length > 0, Je) {
          let Ve = 1 / 0, Me = 1 / 0;
          Xe.forEach((Nt) => {
            Nt.x > se.x && (Ve = Math.min(Ve, Nt.x)), Nt.y > se.y && (Me = Math.min(Me, Nt.y));
          }), Number.isFinite(Ve) && (se.w = Ve - se.x), Number.isFinite(Me) && (se.h = Me - se.y);
        }
      }
      Je || (se.w = Re, se.h = de), $ === "resizestart" || $ === "resizemove" ? (O.placeholder.i = re, O.placeholder.x = ee, O.placeholder.y = _e, O.placeholder.w = se.w, O.placeholder.h = se.h, kt(() => {
        O.isDragging = !0;
      }), te.emit("updateWidth", O.width)) : $ && kt(() => {
        O.isDragging = !1;
      }), y.responsive && Ie(), ni(L.value, y.verticalCompact), te.emit("compact"), ze(), $ === "resizeend" && C("layout-updated", L.value);
    }
    function Ie() {
      const $ = N0(y.breakpoints, O.width);
      if ($ === O.lastBreakpoint)
        return;
      const re = zf($, y.cols);
      !Qt(O.lastBreakpoint) && !O.layouts[O.lastBreakpoint] && (O.layouts[O.lastBreakpoint] = yu(L.value));
      const ee = B0(
        O.originalLayout,
        O.layouts,
        y.breakpoints,
        $,
        O.lastBreakpoint,
        re,
        y.verticalCompact
      );
      O.layouts[$] = ee, O.lastBreakpoint !== $ && C("breakpoint-changed", $, ee), L.value = ee, C("update:layout", ee), O.lastBreakpoint = $, te.emit("setColNum", re);
    }
    function ge() {
      O.layouts = Object.assign({}, y.responsiveLayouts);
    }
    function et($, re) {
      const ee = new Set(re.map((se) => se.i)), _e = new Set($.map((se) => se.i)), de = $.filter((se) => !ee.has(se.i)), Re = re.filter((se) => !_e.has(se.i));
      return de.concat(Re);
    }
    return ($, re) => (Ft(), zn("div", {
      ref_key: "wrapper",
      ref: E,
      class: "vgl-layout",
      style: Ki(O.mergedStyle)
    }, [
      $.$slots.default ? gu($.$slots, "default", { key: 0 }) : (Ft(!0), zn(l0, { key: 1 }, c0(L.value, (ee) => (Ft(), eo(Cc, f0({
        key: ee.i,
        ref_for: !0
      }, ee), {
        default: ii(() => [
          gu($.$slots, "item", { item: ee })
        ]),
        _: 2
      }, 1040))), 128)),
      vf(ti(Cc, {
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
}, ri = { lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 };
function Xf(p) {
  const h = Sa(p);
  return {
    rowHeight: h.rowHeight ?? Vc.rowHeight,
    cols: { ...Vc.cols, ...Sa(h.cols) }
  };
}
const Ty = { class: "scroll max-h-screen ml-15" }, Oy = {
  key: 1,
  class: "text"
}, Iy = /* @__PURE__ */ Ta({
  __name: "View",
  props: {
    pageId: {},
    layoutSettings: {}
  },
  setup(p) {
    const h = p, l = rt(void 0), y = it(() => Xf(l.value)), C = it(() => y.value.cols), O = it(() => y.value.rowHeight), B = it(() => `${O.value}-${Object.values(C.value).join("-")}`), L = wf(), E = h.pageId ?? L.params.pageid ?? "", V = rt([]), pe = rt([]);
    let te = null, We = null;
    const me = Ji(p0.TINY_EMITTER), xe = Ji(_f) ?? null;
    function Ge() {
      if (xe && E) {
        const D = xe.getPage(E);
        l.value = D?.layoutSettings ? { ...Sa(D.layoutSettings) } : void 0;
      }
    }
    Oa(async () => {
      console.log("Grid View component mounted for page:", E), Ge(), xe && "subscribe" in xe && xe.subscribe((Ie) => {
        Ie === "PAGE_UPDATE" && Ge();
      }), await kt();
      const D = () => {
        try {
          return te = yf(E), We = bf(E), V.value = te.widgets, pe.value = We.layout, console.log("Grid View stores initialized successfully, widgets:", V.value.length), !0;
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
    function we(D, Ie) {
      const ge = Number(D);
      return Number.isFinite(ge) ? ge : Ie;
    }
    function Oe() {
      return { colW: 1200 / C.value.md, rowH: O.value };
    }
    function Ce(D) {
      const { colW: Ie, rowH: ge } = Oe(), et = we(D.x, 0), $ = we(D.y, 0), re = we(D.width, Ie), ee = we(D.height, ge);
      return {
        i: String(D.id ?? D.i ?? ""),
        x: Math.round(et / Ie),
        y: Math.round($ / ge),
        w: Math.max(1, Math.round(re / Ie)),
        h: Math.max(1, Math.round(ee / ge)),
        static: !1
      };
    }
    let Ne = it(() => (pe.value || []).map(Ce));
    return (D, Ie) => (Ft(), zn("div", Ty, [
      xa("div", {
        ref_key: "wrapper",
        ref: ze,
        class: "view_grid_layout"
      }, [
        (Ft(), eo(Gt(Gf), {
          ref_key: "gridLayout",
          ref: Ue,
          key: B.value,
          layout: Gt(Ne),
          "onUpdate:layout": Ie[0] || (Ie[0] = (ge) => d0(Ne) ? Ne.value = ge : Ne = ge),
          "row-height": O.value,
          responsive: !0,
          "vertical-compact": !1,
          breakpoints: Gt(ri),
          cols: C.value,
          "is-draggable": !1,
          "is-resizable": !1
        }, {
          item: ii(({ item: ge }) => [
            V.value?.find((et) => et.uid === ge.i) ? (Ft(), eo(Gt(xf), {
              key: 0,
              widget: V.value.find((et) => et.uid === ge.i),
              ref: `${ge.i}_wrapper`,
              editEnabled: !1
            }, null, 8, ["widget"])) : (Ft(), zn("span", Oy, mu(`${ge.i}${ge.static ? "- Static" : ""}`), 1))
          ]),
          _: 1
        }, 8, ["layout", "row-height", "breakpoints", "cols"]))
      ], 512)
    ]));
  }
}), $f = (p, h) => {
  const l = p.__vccOpts || p;
  for (const [y, C] of h)
    l[y] = C;
  return l;
}, Ry = /* @__PURE__ */ $f(Iy, [["__scopeId", "data-v-cb6cb290"]]);
var Yi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var My = Yi.exports, Zc;
function Ay() {
  return Zc || (Zc = 1, (function(p, h) {
    (function() {
      var l, y = "4.17.21", C = 200, O = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", B = "Expected a function", L = "Invalid `variable` option passed into `_.template`", E = "__lodash_hash_undefined__", V = 500, pe = "__lodash_placeholder__", te = 1, We = 2, me = 4, xe = 1, Ge = 2, Fe = 1, Ue = 2, ze = 4, we = 8, Oe = 16, Ce = 32, Ne = 64, D = 128, Ie = 256, ge = 512, et = 30, $ = "...", re = 800, ee = 16, _e = 1, de = 2, Re = 3, se = 1 / 0, Je = 9007199254740991, Xe = 17976931348623157e292, Ve = NaN, Me = 4294967295, Nt = Me - 1, ht = Me >>> 1, Pn = [
        ["ary", D],
        ["bind", Fe],
        ["bindKey", Ue],
        ["curry", we],
        ["curryRight", Oe],
        ["flip", ge],
        ["partial", Ce],
        ["partialRight", Ne],
        ["rearg", Ie]
      ], lt = "[object Arguments]", Qe = "[object Array]", pn = "[object AsyncFunction]", wt = "[object Boolean]", J = "[object Date]", Xt = "[object DOMException]", Tt = "[object Error]", _t = "[object Function]", en = "[object GeneratorFunction]", at = "[object Map]", Ot = "[object Number]", $t = "[object Null]", vt = "[object Object]", Yt = "[object Promise]", ar = "[object Proxy]", It = "[object RegExp]", X = "[object Set]", Q = "[object String]", z = "[object Symbol]", Z = "[object Undefined]", oe = "[object WeakMap]", ye = "[object WeakSet]", le = "[object ArrayBuffer]", ae = "[object DataView]", ie = "[object Float32Array]", tt = "[object Float64Array]", ct = "[object Int8Array]", mt = "[object Int16Array]", tn = "[object Int32Array]", nn = "[object Uint8Array]", rn = "[object Uint8ClampedArray]", Sn = "[object Uint16Array]", En = "[object Uint32Array]", gn = /\b__p \+= '';/g, sr = /\b(__p \+=) '' \+/g, Kn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ai = /&(?:amp|lt|gt|quot|#39);/g, Ar = /[&<>"']/g, no = RegExp(ai.source), si = RegExp(Ar.source), ui = /<%-([\s\S]+?)%>/g, ro = /<%([\s\S]+?)%>/g, li = /<%=([\s\S]+?)%>/g, Ia = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ci = /^\w*$/, fi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, di = /[\\^$.*+?()[\]{}|]/g, Ra = RegExp(di.source), Cr = /^\s+/, vn = /\s/, Ln = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, mn = /\{\n\/\* \[wrapped with (.+)\] \*/, Ma = /,? & /, Aa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, io = /[()=,{}\[\]\/\s]/, Tn = /\\(\\)?/g, he = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hi = /\w*$/, oo = /^[-+]0x[0-9a-f]+$/i, Ca = /^0b[01]+$/i, Da = /^\[object .+?Constructor\]$/, ur = /^0o[0-7]+$/i, pi = /^(?:0|[1-9]\d*)$/, za = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Dr = /($^)/, Pa = /['\n\r\u2028\u2029\\]/g, lr = "\\ud800-\\udfff", La = "\\u0300-\\u036f", ao = "\\ufe20-\\ufe2f", so = "\\u20d0-\\u20ff", cr = La + ao + so, gi = "\\u2700-\\u27bf", zr = "a-z\\xdf-\\xf6\\xf8-\\xff", uo = "\\xac\\xb1\\xd7\\xf7", ka = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", vi = "\\u2000-\\u206f", Fa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Pr = "A-Z\\xc0-\\xd6\\xd8-\\xde", lo = "\\ufe0e\\ufe0f", co = uo + ka + vi + Fa, mi = "['’]", Na = "[" + lr + "]", fo = "[" + co + "]", fr = "[" + cr + "]", dr = "\\d+", Vn = "[" + gi + "]", Lr = "[" + zr + "]", hr = "[^" + lr + co + dr + gi + zr + Pr + "]", on = "\\ud83c[\\udffb-\\udfff]", pr = "(?:" + fr + "|" + on + ")", ho = "[^" + lr + "]", kr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Fr = "[\\ud800-\\udbff][\\udc00-\\udfff]", On = "[" + Pr + "]", po = "\\u200d", go = "(?:" + Lr + "|" + hr + ")", vo = "(?:" + On + "|" + hr + ")", mo = "(?:" + mi + "(?:d|ll|m|re|s|t|ve))?", yo = "(?:" + mi + "(?:D|LL|M|RE|S|T|VE))?", yi = pr + "?", bi = "[" + lo + "]?", Ba = "(?:" + po + "(?:" + [ho, kr, Fr].join("|") + ")" + bi + yi + ")*", xi = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Wa = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wi = bi + yi + Ba, Ua = "(?:" + [Vn, kr, Fr].join("|") + ")" + wi, Nr = "(?:" + [ho + fr + "?", fr, kr, Fr, Na].join("|") + ")", Ha = RegExp(mi, "g"), bo = RegExp(fr, "g"), Br = RegExp(on + "(?=" + on + ")|" + Nr + wi, "g"), qa = RegExp([
        On + "?" + Lr + "+" + mo + "(?=" + [fo, On, "$"].join("|") + ")",
        vo + "+" + yo + "(?=" + [fo, On + go, "$"].join("|") + ")",
        On + "?" + go + "+" + mo,
        On + "+" + yo,
        Wa,
        xi,
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
      ], gr = -1, He = {};
      He[ie] = He[tt] = He[ct] = He[mt] = He[tn] = He[nn] = He[rn] = He[Sn] = He[En] = !0, He[lt] = He[Qe] = He[le] = He[wt] = He[ae] = He[J] = He[Tt] = He[_t] = He[at] = He[Ot] = He[vt] = He[It] = He[X] = He[Q] = He[oe] = !1;
      var Ye = {};
      Ye[lt] = Ye[Qe] = Ye[le] = Ye[ae] = Ye[wt] = Ye[J] = Ye[ie] = Ye[tt] = Ye[ct] = Ye[mt] = Ye[tn] = Ye[at] = Ye[Ot] = Ye[vt] = Ye[It] = Ye[X] = Ye[Q] = Ye[z] = Ye[nn] = Ye[rn] = Ye[Sn] = Ye[En] = !0, Ye[Tt] = Ye[_t] = Ye[oe] = !1;
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
      }, Si = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, So = parseFloat, Eo = parseInt, Wr = typeof or == "object" && or && or.Object === Object && or, $a = typeof self == "object" && self && self.Object === Object && self, ft = Wr || $a || Function("return this")(), an = h && !h.nodeType && h, kn = an && !0 && p && !p.nodeType && p, To = kn && kn.exports === an, Ei = To && Wr.process, Rt = (function() {
        try {
          var w = kn && kn.require && kn.require("util").types;
          return w || Ei && Ei.binding && Ei.binding("util");
        } catch {
        }
      })(), Ti = Rt && Rt.isArrayBuffer, pt = Rt && Rt.isDate, Oo = Rt && Rt.isMap, Io = Rt && Rt.isRegExp, Ro = Rt && Rt.isSet, Mo = Rt && Rt.isTypedArray;
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
        for (var G = -1, ve = w == null ? 0 : w.length; ++G < ve; ) {
          var be = w[G];
          A(k, be, R(be), w);
        }
        return k;
      }
      function Bt(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length; ++R < k && A(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function Ka(w, A) {
        for (var R = w == null ? 0 : w.length; R-- && A(w[R], R, w) !== !1; )
          ;
        return w;
      }
      function Oi(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length; ++R < k; )
          if (!A(w[R], R, w))
            return !1;
        return !0;
      }
      function Kt(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length, G = 0, ve = []; ++R < k; ) {
          var be = w[R];
          A(be, R, w) && (ve[G++] = be);
        }
        return ve;
      }
      function sn(w, A) {
        var R = w == null ? 0 : w.length;
        return !!R && jn(w, A, 0) > -1;
      }
      function Zn(w, A, R) {
        for (var k = -1, G = w == null ? 0 : w.length; ++k < G; )
          if (R(A, w[k]))
            return !0;
        return !1;
      }
      function Ze(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length, G = Array(k); ++R < k; )
          G[R] = A(w[R], R, w);
        return G;
      }
      function yn(w, A) {
        for (var R = -1, k = A.length, G = w.length; ++R < k; )
          w[G + R] = A[R];
        return w;
      }
      function Ur(w, A, R, k) {
        var G = -1, ve = w == null ? 0 : w.length;
        for (k && ve && (R = w[++G]); ++G < ve; )
          R = A(R, w[G], G, w);
        return R;
      }
      function Ao(w, A, R, k) {
        var G = w == null ? 0 : w.length;
        for (k && G && (R = w[--G]); G--; )
          R = A(R, w[G], G, w);
        return R;
      }
      function Fn(w, A) {
        for (var R = -1, k = w == null ? 0 : w.length; ++R < k; )
          if (A(w[R], R, w))
            return !0;
        return !1;
      }
      var Va = Ri("length");
      function Za(w) {
        return w.split("");
      }
      function ja(w) {
        return w.match(Aa) || [];
      }
      function Co(w, A, R) {
        var k;
        return R(w, function(G, ve, be) {
          if (A(G, ve, be))
            return k = ve, !1;
        }), k;
      }
      function Hr(w, A, R, k) {
        for (var G = w.length, ve = R + (k ? 1 : -1); k ? ve-- : ++ve < G; )
          if (A(w[ve], ve, w))
            return ve;
        return -1;
      }
      function jn(w, A, R) {
        return A === A ? v(w, A, R) : Hr(w, Do, R);
      }
      function Ii(w, A, R, k) {
        for (var G = R - 1, ve = w.length; ++G < ve; )
          if (k(w[G], A))
            return G;
        return -1;
      }
      function Do(w) {
        return w !== w;
      }
      function vr(w, A) {
        var R = w == null ? 0 : w.length;
        return R ? qr(w, A) / R : Ve;
      }
      function Ri(w) {
        return function(A) {
          return A == null ? l : A[w];
        };
      }
      function mr(w) {
        return function(A) {
          return w == null ? l : w[A];
        };
      }
      function zo(w, A, R, k, G) {
        return G(w, function(ve, be, Ee) {
          R = k ? (k = !1, ve) : A(R, ve, be, Ee);
        }), R;
      }
      function Ja(w, A) {
        var R = w.length;
        for (w.sort(A); R--; )
          w[R] = w[R].value;
        return w;
      }
      function qr(w, A) {
        for (var R, k = -1, G = w.length; ++k < G; ) {
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
      function In(w, A) {
        return Ze(A, function(R) {
          return [R, w[R]];
        });
      }
      function Mi(w) {
        return w && w.slice(0, I(w) + 1).replace(Cr, "");
      }
      function yt(w) {
        return function(A) {
          return w(A);
        };
      }
      function Ai(w, A) {
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
      var es = mr(_i), ts = mr(_o);
      function ns(w) {
        return "\\" + Si[w];
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
        return w.forEach(function(k, G) {
          R[++A] = [G, k];
        }), R;
      }
      function a(w, A) {
        return function(R) {
          return w(A(R));
        };
      }
      function u(w, A) {
        for (var R = -1, k = w.length, G = 0, ve = []; ++R < k; ) {
          var be = w[R];
          (be === A || be === pe) && (w[R] = pe, ve[G++] = R);
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
        for (var k = R - 1, G = w.length; ++k < G; )
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
        for (var A = Br.lastIndex = 0; Br.test(w); )
          ++A;
        return A;
      }
      function W(w) {
        return w.match(Br) || [];
      }
      function q(w) {
        return w.match(qa) || [];
      }
      var j = (function w(A) {
        A = A == null ? ft : Y.defaults(ft.Object(), A, Y.pick(ft, Ga));
        var R = A.Array, k = A.Date, G = A.Error, ve = A.Function, be = A.Math, Ee = A.Object, At = A.RegExp, bn = A.String, bt = A.TypeError, Rn = R.prototype, Jf = ve.prototype, Gr = Ee.prototype, ko = A["__core-js_shared__"], Fo = Jf.toString, $e = Gr.hasOwnProperty, Qf = 0, Tu = (function() {
          var e = /[^.]+$/.exec(ko && ko.keys && ko.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), No = Gr.toString, ed = Fo.call(Ee), td = ft._, nd = At(
          "^" + Fo.call($e).replace(di, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Bo = To ? A.Buffer : l, Qn = A.Symbol, Wo = A.Uint8Array, Ou = Bo ? Bo.allocUnsafe : l, Uo = a(Ee.getPrototypeOf, Ee), Iu = Ee.create, Ru = Gr.propertyIsEnumerable, Ho = Rn.splice, Mu = Qn ? Qn.isConcatSpreadable : l, Ci = Qn ? Qn.iterator : l, br = Qn ? Qn.toStringTag : l, qo = (function() {
          try {
            var e = Er(Ee, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), rd = A.clearTimeout !== ft.clearTimeout && A.clearTimeout, id = k && k.now !== ft.Date.now && k.now, od = A.setTimeout !== ft.setTimeout && A.setTimeout, Go = be.ceil, Xo = be.floor, is = Ee.getOwnPropertySymbols, ad = Bo ? Bo.isBuffer : l, Au = A.isFinite, sd = Rn.join, ud = a(Ee.keys, Ee), dt = be.max, St = be.min, ld = k.now, cd = A.parseInt, Cu = be.random, fd = Rn.reverse, os = Er(A, "DataView"), Di = Er(A, "Map"), as = Er(A, "Promise"), Xr = Er(A, "Set"), zi = Er(A, "WeakMap"), Pi = Er(Ee, "create"), $o = zi && new zi(), $r = {}, dd = Tr(os), hd = Tr(Di), pd = Tr(as), gd = Tr(Xr), vd = Tr(zi), Yo = Qn ? Qn.prototype : l, Li = Yo ? Yo.valueOf : l, Du = Yo ? Yo.toString : l;
        function g(e) {
          if (ot(e) && !Se(e) && !(e instanceof Le)) {
            if (e instanceof un)
              return e;
            if ($e.call(e, "__wrapped__"))
              return zl(e);
          }
          return new un(e);
        }
        var Yr = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!nt(t))
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
          escape: ui,
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
        }, g.prototype = Ko.prototype, g.prototype.constructor = g, un.prototype = Yr(Ko.prototype), un.prototype.constructor = un;
        function Le(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Me, this.__views__ = [];
        }
        function md() {
          var e = new Le(this.__wrapped__);
          return e.__actions__ = Wt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Wt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Wt(this.__views__), e;
        }
        function yd() {
          if (this.__filtered__) {
            var e = new Le(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function bd() {
          var e = this.__wrapped__.value(), t = this.__dir__, i = Se(e), s = t < 0, f = i ? e.length : 0, m = Ch(0, f, this.__views__), _ = m.start, T = m.end, M = T - _, F = s ? T : _ - 1, N = this.__iteratees__, U = N.length, K = 0, ne = St(M, this.__takeCount__);
          if (!i || !s && f == M && ne == M)
            return nl(e, this.__actions__);
          var ce = [];
          e:
            for (; M-- && K < ne; ) {
              F += t;
              for (var Ae = -1, fe = e[F]; ++Ae < U; ) {
                var Pe = N[Ae], ke = Pe.iteratee, jt = Pe.type, zt = ke(fe);
                if (jt == de)
                  fe = zt;
                else if (!zt) {
                  if (jt == _e)
                    continue e;
                  break e;
                }
              }
              ce[K++] = fe;
            }
          return ce;
        }
        Le.prototype = Yr(Ko.prototype), Le.prototype.constructor = Le;
        function xr(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function xd() {
          this.__data__ = Pi ? Pi(null) : {}, this.size = 0;
        }
        function wd(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function _d(e) {
          var t = this.__data__;
          if (Pi) {
            var i = t[e];
            return i === E ? l : i;
          }
          return $e.call(t, e) ? t[e] : l;
        }
        function Sd(e) {
          var t = this.__data__;
          return Pi ? t[e] !== l : $e.call(t, e);
        }
        function Ed(e, t) {
          var i = this.__data__;
          return this.size += this.has(e) ? 0 : 1, i[e] = Pi && t === l ? E : t, this;
        }
        xr.prototype.clear = xd, xr.prototype.delete = wd, xr.prototype.get = _d, xr.prototype.has = Sd, xr.prototype.set = Ed;
        function Bn(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function Td() {
          this.__data__ = [], this.size = 0;
        }
        function Od(e) {
          var t = this.__data__, i = Vo(t, e);
          if (i < 0)
            return !1;
          var s = t.length - 1;
          return i == s ? t.pop() : Ho.call(t, i, 1), --this.size, !0;
        }
        function Id(e) {
          var t = this.__data__, i = Vo(t, e);
          return i < 0 ? l : t[i][1];
        }
        function Rd(e) {
          return Vo(this.__data__, e) > -1;
        }
        function Md(e, t) {
          var i = this.__data__, s = Vo(i, e);
          return s < 0 ? (++this.size, i.push([e, t])) : i[s][1] = t, this;
        }
        Bn.prototype.clear = Td, Bn.prototype.delete = Od, Bn.prototype.get = Id, Bn.prototype.has = Rd, Bn.prototype.set = Md;
        function Wn(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function Ad() {
          this.size = 0, this.__data__ = {
            hash: new xr(),
            map: new (Di || Bn)(),
            string: new xr()
          };
        }
        function Cd(e) {
          var t = sa(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function Dd(e) {
          return sa(this, e).get(e);
        }
        function zd(e) {
          return sa(this, e).has(e);
        }
        function Pd(e, t) {
          var i = sa(this, e), s = i.size;
          return i.set(e, t), this.size += i.size == s ? 0 : 1, this;
        }
        Wn.prototype.clear = Ad, Wn.prototype.delete = Cd, Wn.prototype.get = Dd, Wn.prototype.has = zd, Wn.prototype.set = Pd;
        function wr(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.__data__ = new Wn(); ++t < i; )
            this.add(e[t]);
        }
        function Ld(e) {
          return this.__data__.set(e, E), this;
        }
        function kd(e) {
          return this.__data__.has(e);
        }
        wr.prototype.add = wr.prototype.push = Ld, wr.prototype.has = kd;
        function xn(e) {
          var t = this.__data__ = new Bn(e);
          this.size = t.size;
        }
        function Fd() {
          this.__data__ = new Bn(), this.size = 0;
        }
        function Nd(e) {
          var t = this.__data__, i = t.delete(e);
          return this.size = t.size, i;
        }
        function Bd(e) {
          return this.__data__.get(e);
        }
        function Wd(e) {
          return this.__data__.has(e);
        }
        function Ud(e, t) {
          var i = this.__data__;
          if (i instanceof Bn) {
            var s = i.__data__;
            if (!Di || s.length < C - 1)
              return s.push([e, t]), this.size = ++i.size, this;
            i = this.__data__ = new Wn(s);
          }
          return i.set(e, t), this.size = i.size, this;
        }
        xn.prototype.clear = Fd, xn.prototype.delete = Nd, xn.prototype.get = Bd, xn.prototype.has = Wd, xn.prototype.set = Ud;
        function zu(e, t) {
          var i = Se(e), s = !i && Or(e), f = !i && !s && ir(e), m = !i && !s && !f && jr(e), _ = i || s || f || m, T = _ ? Nn(e.length, bn) : [], M = T.length;
          for (var F in e)
            (t || $e.call(e, F)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
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
        function Hd(e, t) {
          return ua(Wt(e), _r(t, 0, e.length));
        }
        function qd(e) {
          return ua(Wt(e));
        }
        function ss(e, t, i) {
          (i !== l && !wn(e[t], i) || i === l && !(t in e)) && Un(e, t, i);
        }
        function ki(e, t, i) {
          var s = e[t];
          (!($e.call(e, t) && wn(s, i)) || i === l && !(t in e)) && Un(e, t, i);
        }
        function Vo(e, t) {
          for (var i = e.length; i--; )
            if (wn(e[i][0], t))
              return i;
          return -1;
        }
        function Gd(e, t, i, s) {
          return er(e, function(f, m, _) {
            t(s, f, i(f), _);
          }), s;
        }
        function Lu(e, t) {
          return e && An(t, gt(t), e);
        }
        function Xd(e, t) {
          return e && An(t, Ht(t), e);
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
          var _, T = t & te, M = t & We, F = t & me;
          if (i && (_ = f ? i(e, s, f, m) : i(e)), _ !== l)
            return _;
          if (!nt(e))
            return e;
          var N = Se(e);
          if (N) {
            if (_ = zh(e), !T)
              return Wt(e, _);
          } else {
            var U = Et(e), K = U == _t || U == en;
            if (ir(e))
              return ol(e, T);
            if (U == vt || U == lt || K && !f) {
              if (_ = M || K ? {} : El(e), !T)
                return M ? _h(e, Xd(_, e)) : wh(e, Lu(_, e));
            } else {
              if (!Ye[U])
                return f ? e : {};
              _ = Ph(e, U, T);
            }
          }
          m || (m = new xn());
          var ne = m.get(e);
          if (ne)
            return ne;
          m.set(e, _), Ql(e) ? e.forEach(function(fe) {
            _.add(ln(fe, t, i, fe, e, m));
          }) : jl(e) && e.forEach(function(fe, Pe) {
            _.set(Pe, ln(fe, t, i, Pe, e, m));
          });
          var ce = F ? M ? Rs : Is : M ? Ht : gt, Ae = N ? l : ce(e);
          return Bt(Ae || e, function(fe, Pe) {
            Ae && (Pe = fe, fe = e[Pe]), ki(_, Pe, ln(fe, t, i, Pe, e, m));
          }), _;
        }
        function $d(e) {
          var t = gt(e);
          return function(i) {
            return ku(i, e, t);
          };
        }
        function ku(e, t, i) {
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
        function Fu(e, t, i) {
          if (typeof e != "function")
            throw new bt(B);
          return qi(function() {
            e.apply(l, i);
          }, t);
        }
        function Fi(e, t, i, s) {
          var f = -1, m = sn, _ = !0, T = e.length, M = [], F = t.length;
          if (!T)
            return M;
          i && (t = Ze(t, yt(i))), s ? (m = Zn, _ = !1) : t.length >= C && (m = yr, _ = !1, t = new wr(t));
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
        var er = cl(Mn), Nu = cl(cs, !0);
        function Yd(e, t) {
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
        function Kd(e, t, i, s) {
          var f = e.length;
          for (i = Te(i), i < 0 && (i = -i > f ? 0 : f + i), s = s === l || s > f ? f : Te(s), s < 0 && (s += f), s = i > s ? 0 : tc(s); i < s; )
            e[i++] = t;
          return e;
        }
        function Bu(e, t) {
          var i = [];
          return er(e, function(s, f, m) {
            t(s, f, m) && i.push(s);
          }), i;
        }
        function xt(e, t, i, s, f) {
          var m = -1, _ = e.length;
          for (i || (i = kh), f || (f = []); ++m < _; ) {
            var T = e[m];
            t > 0 && i(T) ? t > 1 ? xt(T, t - 1, i, s, f) : yn(f, T) : s || (f[f.length] = T);
          }
          return f;
        }
        var ls = fl(), Wu = fl(!0);
        function Mn(e, t) {
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
            e = e[Cn(t[i++])];
          return i && i == s ? e : l;
        }
        function Uu(e, t, i) {
          var s = t(e);
          return Se(e) ? s : yn(s, i(e));
        }
        function Ct(e) {
          return e == null ? e === l ? Z : $t : br && br in Ee(e) ? Ah(e) : qh(e);
        }
        function fs(e, t) {
          return e > t;
        }
        function Vd(e, t) {
          return e != null && $e.call(e, t);
        }
        function Zd(e, t) {
          return e != null && t in Ee(e);
        }
        function jd(e, t, i) {
          return e >= St(t, i) && e < dt(t, i);
        }
        function ds(e, t, i) {
          for (var s = i ? Zn : sn, f = e[0].length, m = e.length, _ = m, T = R(m), M = 1 / 0, F = []; _--; ) {
            var N = e[_];
            _ && t && (N = Ze(N, yt(t))), M = St(N.length, M), T[_] = !i && (t || f >= 120 && N.length >= 120) ? new wr(_ && N) : l;
          }
          N = e[0];
          var U = -1, K = T[0];
          e:
            for (; ++U < f && F.length < M; ) {
              var ne = N[U], ce = t ? t(ne) : ne;
              if (ne = i || ne !== 0 ? ne : 0, !(K ? yr(K, ce) : s(F, ce, i))) {
                for (_ = m; --_; ) {
                  var Ae = T[_];
                  if (!(Ae ? yr(Ae, ce) : s(e[_], ce, i)))
                    continue e;
                }
                K && K.push(ce), F.push(ne);
              }
            }
          return F;
        }
        function Jd(e, t, i, s) {
          return Mn(e, function(f, m, _) {
            t(s, i(f), m, _);
          }), s;
        }
        function Ni(e, t, i) {
          t = nr(t, e), e = Rl(e, t);
          var s = e == null ? e : e[Cn(fn(t))];
          return s == null ? l : Mt(s, e, i);
        }
        function Hu(e) {
          return ot(e) && Ct(e) == lt;
        }
        function Qd(e) {
          return ot(e) && Ct(e) == le;
        }
        function eh(e) {
          return ot(e) && Ct(e) == J;
        }
        function Bi(e, t, i, s, f) {
          return e === t ? !0 : e == null || t == null || !ot(e) && !ot(t) ? e !== e && t !== t : th(e, t, i, s, Bi, f);
        }
        function th(e, t, i, s, f, m) {
          var _ = Se(e), T = Se(t), M = _ ? Qe : Et(e), F = T ? Qe : Et(t);
          M = M == lt ? vt : M, F = F == lt ? vt : F;
          var N = M == vt, U = F == vt, K = M == F;
          if (K && ir(e)) {
            if (!ir(t))
              return !1;
            _ = !0, N = !1;
          }
          if (K && !N)
            return m || (m = new xn()), _ || jr(e) ? wl(e, t, i, s, f, m) : Rh(e, t, M, i, s, f, m);
          if (!(i & xe)) {
            var ne = N && $e.call(e, "__wrapped__"), ce = U && $e.call(t, "__wrapped__");
            if (ne || ce) {
              var Ae = ne ? e.value() : e, fe = ce ? t.value() : t;
              return m || (m = new xn()), f(Ae, fe, i, s, m);
            }
          }
          return K ? (m || (m = new xn()), Mh(e, t, i, s, f, m)) : !1;
        }
        function nh(e) {
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
              var U = new xn();
              if (s)
                var K = s(F, N, M, e, t, U);
              if (!(K === l ? Bi(N, F, xe | Ge, s, U) : K))
                return !1;
            }
          }
          return !0;
        }
        function qu(e) {
          if (!nt(e) || Nh(e))
            return !1;
          var t = Xn(e) ? nd : Da;
          return t.test(Tr(e));
        }
        function rh(e) {
          return ot(e) && Ct(e) == It;
        }
        function ih(e) {
          return ot(e) && Et(e) == X;
        }
        function oh(e) {
          return ot(e) && pa(e.length) && !!He[Ct(e)];
        }
        function Gu(e) {
          return typeof e == "function" ? e : e == null ? qt : typeof e == "object" ? Se(e) ? Yu(e[0], e[1]) : $u(e) : dc(e);
        }
        function ps(e) {
          if (!Hi(e))
            return ud(e);
          var t = [];
          for (var i in Ee(e))
            $e.call(e, i) && i != "constructor" && t.push(i);
          return t;
        }
        function ah(e) {
          if (!nt(e))
            return Hh(e);
          var t = Hi(e), i = [];
          for (var s in e)
            s == "constructor" && (t || !$e.call(e, s)) || i.push(s);
          return i;
        }
        function gs(e, t) {
          return e < t;
        }
        function Xu(e, t) {
          var i = -1, s = Ut(e) ? R(e.length) : [];
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
          return Ds(e) && Tl(t) ? Ol(Cn(e), t) : function(i) {
            var s = Hs(i, e);
            return s === l && s === t ? qs(i, e) : Bi(t, s, xe | Ge);
          };
        }
        function Jo(e, t, i, s, f) {
          e !== t && ls(t, function(m, _) {
            if (f || (f = new xn()), nt(m))
              sh(e, t, _, i, Jo, s, f);
            else {
              var T = s ? s(Ps(e, _), m, _ + "", e, t, f) : l;
              T === l && (T = m), ss(e, _, T);
            }
          }, Ht);
        }
        function sh(e, t, i, s, f, m, _) {
          var T = Ps(e, i), M = Ps(t, i), F = _.get(M);
          if (F) {
            ss(e, i, F);
            return;
          }
          var N = m ? m(T, M, i + "", e, t, _) : l, U = N === l;
          if (U) {
            var K = Se(M), ne = !K && ir(M), ce = !K && !ne && jr(M);
            N = M, K || ne || ce ? Se(T) ? N = T : st(T) ? N = Wt(T) : ne ? (U = !1, N = ol(M, !0)) : ce ? (U = !1, N = al(M, !0)) : N = [] : Gi(M) || Or(M) ? (N = T, Or(T) ? N = nc(T) : (!nt(T) || Xn(T)) && (N = El(M))) : U = !1;
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
            return Se(m) ? function(_) {
              return Sr(_, m.length === 1 ? m[0] : m);
            } : m;
          }) : t = [qt];
          var s = -1;
          t = Ze(t, yt(ue()));
          var f = Xu(e, function(m, _, T) {
            var M = Ze(t, function(F) {
              return F(m);
            });
            return { criteria: M, index: ++s, value: m };
          });
          return Ja(f, function(m, _) {
            return xh(m, _, i);
          });
        }
        function uh(e, t) {
          return Zu(e, t, function(i, s) {
            return qs(e, s);
          });
        }
        function Zu(e, t, i) {
          for (var s = -1, f = t.length, m = {}; ++s < f; ) {
            var _ = t[s], T = Sr(e, _);
            i(T, _) && Wi(m, nr(_, e), T);
          }
          return m;
        }
        function lh(e) {
          return function(t) {
            return Sr(t, e);
          };
        }
        function vs(e, t, i, s) {
          var f = s ? Ii : jn, m = -1, _ = t.length, T = e;
          for (e === t && (t = Wt(t)), i && (T = Ze(e, yt(i))); ++m < _; )
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
        function ch(e, t, i, s) {
          for (var f = -1, m = dt(Go((t - e) / (i || 1)), 0), _ = R(m); m--; )
            _[s ? m : ++f] = e, e += i;
          return _;
        }
        function ys(e, t) {
          var i = "";
          if (!e || t < 1 || t > Je)
            return i;
          do
            t % 2 && (i += e), t = Xo(t / 2), t && (e += e);
          while (t);
          return i;
        }
        function De(e, t) {
          return Ls(Il(e, t, qt), e + "");
        }
        function fh(e) {
          return Pu(Jr(e));
        }
        function dh(e, t) {
          var i = Jr(e);
          return ua(i, _r(t, 0, i.length));
        }
        function Wi(e, t, i, s) {
          if (!nt(e))
            return e;
          t = nr(t, e);
          for (var f = -1, m = t.length, _ = m - 1, T = e; T != null && ++f < m; ) {
            var M = Cn(t[f]), F = i;
            if (M === "__proto__" || M === "constructor" || M === "prototype")
              return e;
            if (f != _) {
              var N = T[M];
              F = s ? s(N, M, T) : l, F === l && (F = nt(N) ? N : Gn(t[f + 1]) ? [] : {});
            }
            ki(T, M, F), T = T[M];
          }
          return e;
        }
        var Ju = $o ? function(e, t) {
          return $o.set(e, t), e;
        } : qt, hh = qo ? function(e, t) {
          return qo(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Xs(t),
            writable: !0
          });
        } : qt;
        function ph(e) {
          return ua(Jr(e));
        }
        function cn(e, t, i) {
          var s = -1, f = e.length;
          t < 0 && (t = -t > f ? 0 : f + t), i = i > f ? f : i, i < 0 && (i += f), f = t > i ? 0 : i - t >>> 0, t >>>= 0;
          for (var m = R(f); ++s < f; )
            m[s] = e[s + t];
          return m;
        }
        function gh(e, t) {
          var i;
          return er(e, function(s, f, m) {
            return i = t(s, f, m), !i;
          }), !!i;
        }
        function Qo(e, t, i) {
          var s = 0, f = e == null ? s : e.length;
          if (typeof t == "number" && t === t && f <= ht) {
            for (; s < f; ) {
              var m = s + f >>> 1, _ = e[m];
              _ !== null && !Zt(_) && (i ? _ <= t : _ < t) ? s = m + 1 : f = m;
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
          for (var _ = t !== t, T = t === null, M = Zt(t), F = t === l; f < m; ) {
            var N = Xo((f + m) / 2), U = i(e[N]), K = U !== l, ne = U === null, ce = U === U, Ae = Zt(U);
            if (_)
              var fe = s || ce;
            else F ? fe = ce && (s || K) : T ? fe = ce && K && (s || !ne) : M ? fe = ce && K && !ne && (s || !Ae) : ne || Ae ? fe = !1 : fe = s ? U <= t : U < t;
            fe ? f = N + 1 : m = N;
          }
          return St(m, Nt);
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
          return typeof e == "number" ? e : Zt(e) ? Ve : +e;
        }
        function Vt(e) {
          if (typeof e == "string")
            return e;
          if (Se(e))
            return Ze(e, Vt) + "";
          if (Zt(e))
            return Du ? Du.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -se ? "-0" : t;
        }
        function tr(e, t, i) {
          var s = -1, f = sn, m = e.length, _ = !0, T = [], M = T;
          if (i)
            _ = !1, f = Zn;
          else if (m >= C) {
            var F = t ? null : Oh(e);
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
          return t = nr(t, e), e = Rl(e, t), e == null || delete e[Cn(fn(t))];
        }
        function tl(e, t, i, s) {
          return Wi(e, t, i(Sr(e, t)), s);
        }
        function ea(e, t, i, s) {
          for (var f = e.length, m = s ? f : -1; (s ? m-- : ++m < f) && t(e[m], m, e); )
            ;
          return i ? cn(e, s ? 0 : m, s ? m + 1 : f) : cn(e, s ? m + 1 : 0, s ? f : m);
        }
        function nl(e, t) {
          var i = e;
          return i instanceof Le && (i = i.value()), Ur(t, function(s, f) {
            return f.func.apply(f.thisArg, yn([s], f.args));
          }, i);
        }
        function ws(e, t, i) {
          var s = e.length;
          if (s < 2)
            return s ? tr(e[0]) : [];
          for (var f = -1, m = R(s); ++f < s; )
            for (var _ = e[f], T = -1; ++T < s; )
              T != f && (m[f] = Fi(m[f] || _, e[T], t, i));
          return tr(xt(m, 1), t, i);
        }
        function rl(e, t, i) {
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
        function nr(e, t) {
          return Se(e) ? e : Ds(e, t) ? [e] : Dl(qe(e));
        }
        var vh = De;
        function rr(e, t, i) {
          var s = e.length;
          return i = i === l ? s : i, !t && i >= s ? e : cn(e, t, i);
        }
        var il = rd || function(e) {
          return ft.clearTimeout(e);
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
        function mh(e, t) {
          var i = t ? Es(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.byteLength);
        }
        function yh(e) {
          var t = new e.constructor(e.source, hi.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function bh(e) {
          return Li ? Ee(Li.call(e)) : {};
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
        function xh(e, t, i) {
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
          for (var f = -1, m = e.length, _ = i.length, T = -1, M = t.length, F = dt(m - _, 0), N = R(M + F), U = !s; ++T < M; )
            N[T] = t[T];
          for (; ++f < _; )
            (U || f < m) && (N[i[f]] = e[f]);
          for (; F--; )
            N[T++] = e[f++];
          return N;
        }
        function ll(e, t, i, s) {
          for (var f = -1, m = e.length, _ = -1, T = i.length, M = -1, F = t.length, N = dt(m - T, 0), U = R(N + F), K = !s; ++f < N; )
            U[f] = e[f];
          for (var ne = f; ++M < F; )
            U[ne + M] = t[M];
          for (; ++_ < T; )
            (K || f < m) && (U[ne + i[_]] = e[f++]);
          return U;
        }
        function Wt(e, t) {
          var i = -1, s = e.length;
          for (t || (t = R(s)); ++i < s; )
            t[i] = e[i];
          return t;
        }
        function An(e, t, i, s) {
          var f = !i;
          i || (i = {});
          for (var m = -1, _ = t.length; ++m < _; ) {
            var T = t[m], M = s ? s(i[T], e[T], T, i, e) : l;
            M === l && (M = e[T]), f ? Un(i, T, M) : ki(i, T, M);
          }
          return i;
        }
        function wh(e, t) {
          return An(e, Cs(e), t);
        }
        function _h(e, t) {
          return An(e, _l(e), t);
        }
        function ta(e, t) {
          return function(i, s) {
            var f = Se(i) ? Ya : Gd, m = t ? t() : {};
            return f(i, e, ue(s, 2), m);
          };
        }
        function Kr(e) {
          return De(function(t, i) {
            var s = -1, f = i.length, m = f > 1 ? i[f - 1] : l, _ = f > 2 ? i[2] : l;
            for (m = e.length > 3 && typeof m == "function" ? (f--, m) : l, _ && Dt(i[0], i[1], _) && (m = f < 3 ? l : m, f = 1), t = Ee(t); ++s < f; ) {
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
            if (!Ut(i))
              return e(i, s);
            for (var f = i.length, m = t ? f : -1, _ = Ee(i); (t ? m-- : ++m < f) && s(_[m], m, _) !== !1; )
              ;
            return i;
          };
        }
        function fl(e) {
          return function(t, i, s) {
            for (var f = -1, m = Ee(t), _ = s(t), T = _.length; T--; ) {
              var M = _[e ? T : ++f];
              if (i(m[M], M, m) === !1)
                break;
            }
            return t;
          };
        }
        function Sh(e, t, i) {
          var s = t & Fe, f = Ui(e);
          function m() {
            var _ = this && this !== ft && this instanceof m ? f : e;
            return _.apply(s ? i : this, arguments);
          }
          return m;
        }
        function dl(e) {
          return function(t) {
            t = qe(t);
            var i = Jn(t) ? x(t) : l, s = i ? i[0] : t.charAt(0), f = i ? rr(i, 1).join("") : t.slice(1);
            return s[e]() + f;
          };
        }
        function Vr(e) {
          return function(t) {
            return Ur(cc(lc(t).replace(Ha, "")), e, "");
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
            var i = Yr(e.prototype), s = e.apply(i, t);
            return nt(s) ? s : i;
          };
        }
        function Eh(e, t, i) {
          var s = Ui(e);
          function f() {
            for (var m = arguments.length, _ = R(m), T = m, M = Zr(f); T--; )
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
            var N = this && this !== ft && this instanceof f ? s : e;
            return Mt(N, this, _);
          }
          return f;
        }
        function hl(e) {
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
        function pl(e) {
          return qn(function(t) {
            var i = t.length, s = i, f = un.prototype.thru;
            for (e && t.reverse(); s--; ) {
              var m = t[s];
              if (typeof m != "function")
                throw new bt(B);
              if (f && !_ && aa(m) == "wrapper")
                var _ = new un([], !0);
            }
            for (s = _ ? s : i; ++s < i; ) {
              m = t[s];
              var T = aa(m), M = T == "wrapper" ? Ms(m) : l;
              M && zs(M[0]) && M[1] == (D | we | Ce | Ie) && !M[4].length && M[9] == 1 ? _ = _[aa(M[0])].apply(_, M[3]) : _ = m.length == 1 && zs(m) ? _[T]() : _.thru(m);
            }
            return function() {
              var F = arguments, N = F[0];
              if (_ && F.length == 1 && Se(N))
                return _.plant(N).value();
              for (var U = 0, K = i ? t[U].apply(this, F) : N; ++U < i; )
                K = t[U].call(this, K);
              return K;
            };
          });
        }
        function na(e, t, i, s, f, m, _, T, M, F) {
          var N = t & D, U = t & Fe, K = t & Ue, ne = t & (we | Oe), ce = t & ge, Ae = K ? l : Ui(e);
          function fe() {
            for (var Pe = arguments.length, ke = R(Pe), jt = Pe; jt--; )
              ke[jt] = arguments[jt];
            if (ne)
              var zt = Zr(fe), Jt = Qa(ke, zt);
            if (s && (ke = ul(ke, s, f, ne)), m && (ke = ll(ke, m, _, ne)), Pe -= Jt, ne && Pe < F) {
              var ut = u(ke, zt);
              return ml(
                e,
                t,
                na,
                fe.placeholder,
                i,
                ke,
                ut,
                T,
                M,
                F - Pe
              );
            }
            var _n = U ? i : this, Yn = K ? _n[e] : e;
            return Pe = ke.length, T ? ke = Gh(ke, T) : ce && Pe > 1 && ke.reverse(), N && M < Pe && (ke.length = M), this && this !== ft && this instanceof fe && (Yn = Ae || Ui(Yn)), Yn.apply(_n, ke);
          }
          return fe;
        }
        function gl(e, t) {
          return function(i, s) {
            return Jd(i, e, t(s), {});
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
            return t = Ze(t, yt(ue())), De(function(i) {
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
        function Th(e, t, i, s) {
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
        function vl(e) {
          return function(t, i, s) {
            return s && typeof s != "number" && Dt(t, i, s) && (i = s = l), t = $n(t), i === l ? (i = t, t = 0) : i = $n(i), s = s === l ? t < i ? 1 : -1 : $n(s), ch(t, i, s, e);
          };
        }
        function oa(e) {
          return function(t, i) {
            return typeof t == "string" && typeof i == "string" || (t = dn(t), i = dn(i)), e(t, i);
          };
        }
        function ml(e, t, i, s, f, m, _, T, M, F) {
          var N = t & we, U = N ? _ : l, K = N ? l : _, ne = N ? m : l, ce = N ? l : m;
          t |= N ? Ce : Ne, t &= ~(N ? Ne : Ce), t & ze || (t &= -4);
          var Ae = [
            e,
            t,
            f,
            ne,
            U,
            ce,
            K,
            T,
            M,
            F
          ], fe = i.apply(l, Ae);
          return zs(e) && Ml(fe, Ae), fe.placeholder = s, Al(fe, e, t);
        }
        function Os(e) {
          var t = be[e];
          return function(i, s) {
            if (i = dn(i), s = s == null ? 0 : St(Te(s), 292), s && Au(i)) {
              var f = (qe(i) + "e").split("e"), m = t(f[0] + "e" + (+f[1] + s));
              return f = (qe(m) + "e").split("e"), +(f[0] + "e" + (+f[1] - s));
            }
            return t(i);
          };
        }
        var Oh = Xr && 1 / c(new Xr([, -0]))[1] == se ? function(e) {
          return new Xr(e);
        } : Ks;
        function yl(e) {
          return function(t) {
            var i = Et(t);
            return i == at ? o(t) : i == X ? d(t) : In(t, e(t));
          };
        }
        function Hn(e, t, i, s, f, m, _, T) {
          var M = t & Ue;
          if (!M && typeof e != "function")
            throw new bt(B);
          var F = s ? s.length : 0;
          if (F || (t &= -97, s = f = l), _ = _ === l ? _ : dt(Te(_), 0), T = T === l ? T : Te(T), F -= f ? f.length : 0, t & Ne) {
            var N = s, U = f;
            s = f = l;
          }
          var K = M ? l : Ms(e), ne = [
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
          if (K && Uh(ne, K), e = ne[0], t = ne[1], i = ne[2], s = ne[3], f = ne[4], T = ne[9] = ne[9] === l ? M ? 0 : e.length : dt(ne[9] - F, 0), !T && t & (we | Oe) && (t &= -25), !t || t == Fe)
            var ce = Sh(e, t, i);
          else t == we || t == Oe ? ce = Eh(e, t, T) : (t == Ce || t == (Fe | Ce)) && !f.length ? ce = Th(e, t, i, s) : ce = na.apply(l, ne);
          var Ae = K ? Ju : Ml;
          return Al(Ae(ce, ne), e, t);
        }
        function bl(e, t, i, s) {
          return e === l || wn(e, Gr[i]) && !$e.call(s, i) ? t : e;
        }
        function xl(e, t, i, s, f, m) {
          return nt(e) && nt(t) && (m.set(t, e), Jo(e, t, l, xl, m), m.delete(t)), e;
        }
        function Ih(e) {
          return Gi(e) ? l : e;
        }
        function wl(e, t, i, s, f, m) {
          var _ = i & xe, T = e.length, M = t.length;
          if (T != M && !(_ && M > T))
            return !1;
          var F = m.get(e), N = m.get(t);
          if (F && N)
            return F == t && N == e;
          var U = -1, K = !0, ne = i & Ge ? new wr() : l;
          for (m.set(e, t), m.set(t, e); ++U < T; ) {
            var ce = e[U], Ae = t[U];
            if (s)
              var fe = _ ? s(Ae, ce, U, t, e, m) : s(ce, Ae, U, e, t, m);
            if (fe !== l) {
              if (fe)
                continue;
              K = !1;
              break;
            }
            if (ne) {
              if (!Fn(t, function(Pe, ke) {
                if (!yr(ne, ke) && (ce === Pe || f(ce, Pe, i, s, m)))
                  return ne.push(ke);
              })) {
                K = !1;
                break;
              }
            } else if (!(ce === Ae || f(ce, Ae, i, s, m))) {
              K = !1;
              break;
            }
          }
          return m.delete(e), m.delete(t), K;
        }
        function Rh(e, t, i, s, f, m, _) {
          switch (i) {
            case ae:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case le:
              return !(e.byteLength != t.byteLength || !m(new Wo(e), new Wo(t)));
            case wt:
            case J:
            case Ot:
              return wn(+e, +t);
            case Tt:
              return e.name == t.name && e.message == t.message;
            case It:
            case Q:
              return e == t + "";
            case at:
              var T = o;
            case X:
              var M = s & xe;
              if (T || (T = c), e.size != t.size && !M)
                return !1;
              var F = _.get(e);
              if (F)
                return F == t;
              s |= Ge, _.set(e, t);
              var N = wl(T(e), T(t), s, f, m, _);
              return _.delete(e), N;
            case z:
              if (Li)
                return Li.call(e) == Li.call(t);
          }
          return !1;
        }
        function Mh(e, t, i, s, f, m) {
          var _ = i & xe, T = Is(e), M = T.length, F = Is(t), N = F.length;
          if (M != N && !_)
            return !1;
          for (var U = M; U--; ) {
            var K = T[U];
            if (!(_ ? K in t : $e.call(t, K)))
              return !1;
          }
          var ne = m.get(e), ce = m.get(t);
          if (ne && ce)
            return ne == t && ce == e;
          var Ae = !0;
          m.set(e, t), m.set(t, e);
          for (var fe = _; ++U < M; ) {
            K = T[U];
            var Pe = e[K], ke = t[K];
            if (s)
              var jt = _ ? s(ke, Pe, K, t, e, m) : s(Pe, ke, K, e, t, m);
            if (!(jt === l ? Pe === ke || f(Pe, ke, i, s, m) : jt)) {
              Ae = !1;
              break;
            }
            fe || (fe = K == "constructor");
          }
          if (Ae && !fe) {
            var zt = e.constructor, Jt = t.constructor;
            zt != Jt && "constructor" in e && "constructor" in t && !(typeof zt == "function" && zt instanceof zt && typeof Jt == "function" && Jt instanceof Jt) && (Ae = !1);
          }
          return m.delete(e), m.delete(t), Ae;
        }
        function qn(e) {
          return Ls(Il(e, l, kl), e + "");
        }
        function Is(e) {
          return Uu(e, gt, Cs);
        }
        function Rs(e) {
          return Uu(e, Ht, _l);
        }
        var Ms = $o ? function(e) {
          return $o.get(e);
        } : Ks;
        function aa(e) {
          for (var t = e.name + "", i = $r[t], s = $e.call($r, t) ? i.length : 0; s--; ) {
            var f = i[s], m = f.func;
            if (m == null || m == e)
              return f.name;
          }
          return t;
        }
        function Zr(e) {
          var t = $e.call(g, "placeholder") ? g : e;
          return t.placeholder;
        }
        function ue() {
          var e = g.iteratee || $s;
          return e = e === $s ? Gu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function sa(e, t) {
          var i = e.__data__;
          return Fh(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
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
        function Ah(e) {
          var t = $e.call(e, br), i = e[br];
          try {
            e[br] = l;
            var s = !0;
          } catch {
          }
          var f = No.call(e);
          return s && (t ? e[br] = i : delete e[br]), f;
        }
        var Cs = is ? function(e) {
          return e == null ? [] : (e = Ee(e), Kt(is(e), function(t) {
            return Ru.call(e, t);
          }));
        } : Vs, _l = is ? function(e) {
          for (var t = []; e; )
            yn(t, Cs(e)), e = Uo(e);
          return t;
        } : Vs, Et = Ct;
        (os && Et(new os(new ArrayBuffer(1))) != ae || Di && Et(new Di()) != at || as && Et(as.resolve()) != Yt || Xr && Et(new Xr()) != X || zi && Et(new zi()) != oe) && (Et = function(e) {
          var t = Ct(e), i = t == vt ? e.constructor : l, s = i ? Tr(i) : "";
          if (s)
            switch (s) {
              case dd:
                return ae;
              case hd:
                return at;
              case pd:
                return Yt;
              case gd:
                return X;
              case vd:
                return oe;
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
        function Dh(e) {
          var t = e.match(mn);
          return t ? t[1].split(Ma) : [];
        }
        function Sl(e, t, i) {
          t = nr(t, e);
          for (var s = -1, f = t.length, m = !1; ++s < f; ) {
            var _ = Cn(t[s]);
            if (!(m = e != null && i(e, _)))
              break;
            e = e[_];
          }
          return m || ++s != f ? m : (f = e == null ? 0 : e.length, !!f && pa(f) && Gn(_, f) && (Se(e) || Or(e)));
        }
        function zh(e) {
          var t = e.length, i = new e.constructor(t);
          return t && typeof e[0] == "string" && $e.call(e, "index") && (i.index = e.index, i.input = e.input), i;
        }
        function El(e) {
          return typeof e.constructor == "function" && !Hi(e) ? Yr(Uo(e)) : {};
        }
        function Ph(e, t, i) {
          var s = e.constructor;
          switch (t) {
            case le:
              return Es(e);
            case wt:
            case J:
              return new s(+e);
            case ae:
              return mh(e, i);
            case ie:
            case tt:
            case ct:
            case mt:
            case tn:
            case nn:
            case rn:
            case Sn:
            case En:
              return al(e, i);
            case at:
              return new s();
            case Ot:
            case Q:
              return new s(e);
            case It:
              return yh(e);
            case X:
              return new s();
            case z:
              return bh(e);
          }
        }
        function Lh(e, t) {
          var i = t.length;
          if (!i)
            return e;
          var s = i - 1;
          return t[s] = (i > 1 ? "& " : "") + t[s], t = t.join(i > 2 ? ", " : " "), e.replace(Ln, `{
/* [wrapped with ` + t + `] */
`);
        }
        function kh(e) {
          return Se(e) || Or(e) || !!(Mu && e && e[Mu]);
        }
        function Gn(e, t) {
          var i = typeof e;
          return t = t ?? Je, !!t && (i == "number" || i != "symbol" && pi.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function Dt(e, t, i) {
          if (!nt(i))
            return !1;
          var s = typeof t;
          return (s == "number" ? Ut(i) && Gn(t, i.length) : s == "string" && t in i) ? wn(i[t], e) : !1;
        }
        function Ds(e, t) {
          if (Se(e))
            return !1;
          var i = typeof e;
          return i == "number" || i == "symbol" || i == "boolean" || e == null || Zt(e) ? !0 : ci.test(e) || !Ia.test(e) || t != null && e in Ee(t);
        }
        function Fh(e) {
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
        function Nh(e) {
          return !!Tu && Tu in e;
        }
        var Bh = ko ? Xn : Zs;
        function Hi(e) {
          var t = e && e.constructor, i = typeof t == "function" && t.prototype || Gr;
          return e === i;
        }
        function Tl(e) {
          return e === e && !nt(e);
        }
        function Ol(e, t) {
          return function(i) {
            return i == null ? !1 : i[e] === t && (t !== l || e in Ee(i));
          };
        }
        function Wh(e) {
          var t = da(e, function(s) {
            return i.size === V && i.clear(), s;
          }), i = t.cache;
          return t;
        }
        function Uh(e, t) {
          var i = e[1], s = t[1], f = i | s, m = f < (Fe | Ue | D), _ = s == D && i == we || s == D && i == Ie && e[7].length <= t[8] || s == (D | Ie) && t[7].length <= t[8] && i == we;
          if (!(m || _))
            return e;
          s & Fe && (e[2] = t[2], f |= i & Fe ? 0 : ze);
          var T = t[3];
          if (T) {
            var M = e[3];
            e[3] = M ? ul(M, T, t[4]) : T, e[4] = M ? u(e[3], pe) : t[4];
          }
          return T = t[5], T && (M = e[5], e[5] = M ? ll(M, T, t[6]) : T, e[6] = M ? u(e[5], pe) : t[6]), T = t[7], T && (e[7] = T), s & D && (e[8] = e[8] == null ? t[8] : St(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = f, e;
        }
        function Hh(e) {
          var t = [];
          if (e != null)
            for (var i in Ee(e))
              t.push(i);
          return t;
        }
        function qh(e) {
          return No.call(e);
        }
        function Il(e, t, i) {
          return t = dt(t === l ? e.length - 1 : t, 0), function() {
            for (var s = arguments, f = -1, m = dt(s.length - t, 0), _ = R(m); ++f < m; )
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
        function Gh(e, t) {
          for (var i = e.length, s = St(t.length, i), f = Wt(e); s--; ) {
            var m = t[s];
            e[s] = Gn(m, i) ? f[m] : l;
          }
          return e;
        }
        function Ps(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var Ml = Cl(Ju), qi = od || function(e, t) {
          return ft.setTimeout(e, t);
        }, Ls = Cl(hh);
        function Al(e, t, i) {
          var s = t + "";
          return Ls(e, Lh(s, Xh(Dh(s), i)));
        }
        function Cl(e) {
          var t = 0, i = 0;
          return function() {
            var s = ld(), f = ee - (s - i);
            if (i = s, f > 0) {
              if (++t >= re)
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
        var Dl = Wh(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(fi, function(i, s, f, m) {
            t.push(f ? m.replace(Tn, "$1") : s || i);
          }), t;
        });
        function Cn(e) {
          if (typeof e == "string" || Zt(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -se ? "-0" : t;
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
        function Xh(e, t) {
          return Bt(Pn, function(i) {
            var s = "_." + i[0];
            t & i[1] && !sn(e, s) && e.push(s);
          }), e.sort();
        }
        function zl(e) {
          if (e instanceof Le)
            return e.clone();
          var t = new un(e.__wrapped__, e.__chain__);
          return t.__actions__ = Wt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function $h(e, t, i) {
          (i ? Dt(e, t, i) : t === l) ? t = 1 : t = dt(Te(t), 0);
          var s = e == null ? 0 : e.length;
          if (!s || t < 1)
            return [];
          for (var f = 0, m = 0, _ = R(Go(s / t)); f < s; )
            _[m++] = cn(e, f, f += t);
          return _;
        }
        function Yh(e) {
          for (var t = -1, i = e == null ? 0 : e.length, s = 0, f = []; ++t < i; ) {
            var m = e[t];
            m && (f[s++] = m);
          }
          return f;
        }
        function Kh() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = R(e - 1), i = arguments[0], s = e; s--; )
            t[s - 1] = arguments[s];
          return yn(Se(i) ? Wt(i) : [i], xt(t, 1));
        }
        var Vh = De(function(e, t) {
          return st(e) ? Fi(e, xt(t, 1, st, !0)) : [];
        }), Zh = De(function(e, t) {
          var i = fn(t);
          return st(i) && (i = l), st(e) ? Fi(e, xt(t, 1, st, !0), ue(i, 2)) : [];
        }), jh = De(function(e, t) {
          var i = fn(t);
          return st(i) && (i = l), st(e) ? Fi(e, xt(t, 1, st, !0), l, i) : [];
        });
        function Jh(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), cn(e, t < 0 ? 0 : t, s)) : [];
        }
        function Qh(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), t = s - t, cn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function ep(e, t) {
          return e && e.length ? ea(e, ue(t, 3), !0, !0) : [];
        }
        function tp(e, t) {
          return e && e.length ? ea(e, ue(t, 3), !0) : [];
        }
        function np(e, t, i, s) {
          var f = e == null ? 0 : e.length;
          return f ? (i && typeof i != "number" && Dt(e, t, i) && (i = 0, s = f), Kd(e, t, i, s)) : [];
        }
        function Pl(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Te(i);
          return f < 0 && (f = dt(s + f, 0)), Hr(e, ue(t, 3), f);
        }
        function Ll(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s - 1;
          return i !== l && (f = Te(i), f = i < 0 ? dt(s + f, 0) : St(f, s - 1)), Hr(e, ue(t, 3), f, !0);
        }
        function kl(e) {
          var t = e == null ? 0 : e.length;
          return t ? xt(e, 1) : [];
        }
        function rp(e) {
          var t = e == null ? 0 : e.length;
          return t ? xt(e, se) : [];
        }
        function ip(e, t) {
          var i = e == null ? 0 : e.length;
          return i ? (t = t === l ? 1 : Te(t), xt(e, t)) : [];
        }
        function op(e) {
          for (var t = -1, i = e == null ? 0 : e.length, s = {}; ++t < i; ) {
            var f = e[t];
            s[f[0]] = f[1];
          }
          return s;
        }
        function Fl(e) {
          return e && e.length ? e[0] : l;
        }
        function ap(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Te(i);
          return f < 0 && (f = dt(s + f, 0)), jn(e, t, f);
        }
        function sp(e) {
          var t = e == null ? 0 : e.length;
          return t ? cn(e, 0, -1) : [];
        }
        var up = De(function(e) {
          var t = Ze(e, _s);
          return t.length && t[0] === e[0] ? ds(t) : [];
        }), lp = De(function(e) {
          var t = fn(e), i = Ze(e, _s);
          return t === fn(i) ? t = l : i.pop(), i.length && i[0] === e[0] ? ds(i, ue(t, 2)) : [];
        }), cp = De(function(e) {
          var t = fn(e), i = Ze(e, _s);
          return t = typeof t == "function" ? t : l, t && i.pop(), i.length && i[0] === e[0] ? ds(i, l, t) : [];
        });
        function fp(e, t) {
          return e == null ? "" : sd.call(e, t);
        }
        function fn(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : l;
        }
        function dp(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s;
          return i !== l && (f = Te(i), f = f < 0 ? dt(s + f, 0) : St(f, s - 1)), t === t ? b(e, t, f) : Hr(e, Do, f, !0);
        }
        function hp(e, t) {
          return e && e.length ? Ku(e, Te(t)) : l;
        }
        var pp = De(Nl);
        function Nl(e, t) {
          return e && e.length && t && t.length ? vs(e, t) : e;
        }
        function gp(e, t, i) {
          return e && e.length && t && t.length ? vs(e, t, ue(i, 2)) : e;
        }
        function vp(e, t, i) {
          return e && e.length && t && t.length ? vs(e, t, l, i) : e;
        }
        var mp = qn(function(e, t) {
          var i = e == null ? 0 : e.length, s = us(e, t);
          return ju(e, Ze(t, function(f) {
            return Gn(f, i) ? +f : f;
          }).sort(sl)), s;
        });
        function yp(e, t) {
          var i = [];
          if (!(e && e.length))
            return i;
          var s = -1, f = [], m = e.length;
          for (t = ue(t, 3); ++s < m; ) {
            var _ = e[s];
            t(_, s, e) && (i.push(_), f.push(s));
          }
          return ju(e, f), i;
        }
        function ks(e) {
          return e == null ? e : fd.call(e);
        }
        function bp(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (i && typeof i != "number" && Dt(e, t, i) ? (t = 0, i = s) : (t = t == null ? 0 : Te(t), i = i === l ? s : Te(i)), cn(e, t, i)) : [];
        }
        function xp(e, t) {
          return Qo(e, t);
        }
        function wp(e, t, i) {
          return bs(e, t, ue(i, 2));
        }
        function _p(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = Qo(e, t);
            if (s < i && wn(e[s], t))
              return s;
          }
          return -1;
        }
        function Sp(e, t) {
          return Qo(e, t, !0);
        }
        function Ep(e, t, i) {
          return bs(e, t, ue(i, 2), !0);
        }
        function Tp(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = Qo(e, t, !0) - 1;
            if (wn(e[s], t))
              return s;
          }
          return -1;
        }
        function Op(e) {
          return e && e.length ? Qu(e) : [];
        }
        function Ip(e, t) {
          return e && e.length ? Qu(e, ue(t, 2)) : [];
        }
        function Rp(e) {
          var t = e == null ? 0 : e.length;
          return t ? cn(e, 1, t) : [];
        }
        function Mp(e, t, i) {
          return e && e.length ? (t = i || t === l ? 1 : Te(t), cn(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Ap(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), t = s - t, cn(e, t < 0 ? 0 : t, s)) : [];
        }
        function Cp(e, t) {
          return e && e.length ? ea(e, ue(t, 3), !1, !0) : [];
        }
        function Dp(e, t) {
          return e && e.length ? ea(e, ue(t, 3)) : [];
        }
        var zp = De(function(e) {
          return tr(xt(e, 1, st, !0));
        }), Pp = De(function(e) {
          var t = fn(e);
          return st(t) && (t = l), tr(xt(e, 1, st, !0), ue(t, 2));
        }), Lp = De(function(e) {
          var t = fn(e);
          return t = typeof t == "function" ? t : l, tr(xt(e, 1, st, !0), l, t);
        });
        function kp(e) {
          return e && e.length ? tr(e) : [];
        }
        function Fp(e, t) {
          return e && e.length ? tr(e, ue(t, 2)) : [];
        }
        function Np(e, t) {
          return t = typeof t == "function" ? t : l, e && e.length ? tr(e, l, t) : [];
        }
        function Fs(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = Kt(e, function(i) {
            if (st(i))
              return t = dt(i.length, t), !0;
          }), Nn(t, function(i) {
            return Ze(e, Ri(i));
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
        var Bp = De(function(e, t) {
          return st(e) ? Fi(e, t) : [];
        }), Wp = De(function(e) {
          return ws(Kt(e, st));
        }), Up = De(function(e) {
          var t = fn(e);
          return st(t) && (t = l), ws(Kt(e, st), ue(t, 2));
        }), Hp = De(function(e) {
          var t = fn(e);
          return t = typeof t == "function" ? t : l, ws(Kt(e, st), l, t);
        }), qp = De(Fs);
        function Gp(e, t) {
          return rl(e || [], t || [], ki);
        }
        function Xp(e, t) {
          return rl(e || [], t || [], Wi);
        }
        var $p = De(function(e) {
          var t = e.length, i = t > 1 ? e[t - 1] : l;
          return i = typeof i == "function" ? (e.pop(), i) : l, Bl(e, i);
        });
        function Wl(e) {
          var t = g(e);
          return t.__chain__ = !0, t;
        }
        function Yp(e, t) {
          return t(e), e;
        }
        function la(e, t) {
          return t(e);
        }
        var Kp = qn(function(e) {
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
        function Vp() {
          return Wl(this);
        }
        function Zp() {
          return new un(this.value(), this.__chain__);
        }
        function jp() {
          this.__values__ === l && (this.__values__ = ec(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? l : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function Jp() {
          return this;
        }
        function Qp(e) {
          for (var t, i = this; i instanceof Ko; ) {
            var s = zl(i);
            s.__index__ = 0, s.__values__ = l, t ? f.__wrapped__ = s : t = s;
            var f = s;
            i = i.__wrapped__;
          }
          return f.__wrapped__ = e, t;
        }
        function eg() {
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
        function tg() {
          return nl(this.__wrapped__, this.__actions__);
        }
        var ng = ta(function(e, t, i) {
          $e.call(e, i) ? ++e[i] : Un(e, i, 1);
        });
        function rg(e, t, i) {
          var s = Se(e) ? Oi : Yd;
          return i && Dt(e, t, i) && (t = l), s(e, ue(t, 3));
        }
        function ig(e, t) {
          var i = Se(e) ? Kt : Bu;
          return i(e, ue(t, 3));
        }
        var og = hl(Pl), ag = hl(Ll);
        function sg(e, t) {
          return xt(ca(e, t), 1);
        }
        function ug(e, t) {
          return xt(ca(e, t), se);
        }
        function lg(e, t, i) {
          return i = i === l ? 1 : Te(i), xt(ca(e, t), i);
        }
        function Ul(e, t) {
          var i = Se(e) ? Bt : er;
          return i(e, ue(t, 3));
        }
        function Hl(e, t) {
          var i = Se(e) ? Ka : Nu;
          return i(e, ue(t, 3));
        }
        var cg = ta(function(e, t, i) {
          $e.call(e, i) ? e[i].push(t) : Un(e, i, [t]);
        });
        function fg(e, t, i, s) {
          e = Ut(e) ? e : Jr(e), i = i && !s ? Te(i) : 0;
          var f = e.length;
          return i < 0 && (i = dt(f + i, 0)), ga(e) ? i <= f && e.indexOf(t, i) > -1 : !!f && jn(e, t, i) > -1;
        }
        var dg = De(function(e, t, i) {
          var s = -1, f = typeof t == "function", m = Ut(e) ? R(e.length) : [];
          return er(e, function(_) {
            m[++s] = f ? Mt(t, _, i) : Ni(_, t, i);
          }), m;
        }), hg = ta(function(e, t, i) {
          Un(e, i, t);
        });
        function ca(e, t) {
          var i = Se(e) ? Ze : Xu;
          return i(e, ue(t, 3));
        }
        function pg(e, t, i, s) {
          return e == null ? [] : (Se(t) || (t = t == null ? [] : [t]), i = s ? l : i, Se(i) || (i = i == null ? [] : [i]), Vu(e, t, i));
        }
        var gg = ta(function(e, t, i) {
          e[i ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function vg(e, t, i) {
          var s = Se(e) ? Ur : zo, f = arguments.length < 3;
          return s(e, ue(t, 4), i, f, er);
        }
        function mg(e, t, i) {
          var s = Se(e) ? Ao : zo, f = arguments.length < 3;
          return s(e, ue(t, 4), i, f, Nu);
        }
        function yg(e, t) {
          var i = Se(e) ? Kt : Bu;
          return i(e, ha(ue(t, 3)));
        }
        function bg(e) {
          var t = Se(e) ? Pu : fh;
          return t(e);
        }
        function xg(e, t, i) {
          (i ? Dt(e, t, i) : t === l) ? t = 1 : t = Te(t);
          var s = Se(e) ? Hd : dh;
          return s(e, t);
        }
        function wg(e) {
          var t = Se(e) ? qd : ph;
          return t(e);
        }
        function _g(e) {
          if (e == null)
            return 0;
          if (Ut(e))
            return ga(e) ? S(e) : e.length;
          var t = Et(e);
          return t == at || t == X ? e.size : ps(e).length;
        }
        function Sg(e, t, i) {
          var s = Se(e) ? Fn : gh;
          return i && Dt(e, t, i) && (t = l), s(e, ue(t, 3));
        }
        var Eg = De(function(e, t) {
          if (e == null)
            return [];
          var i = t.length;
          return i > 1 && Dt(e, t[0], t[1]) ? t = [] : i > 2 && Dt(t[0], t[1], t[2]) && (t = [t[0]]), Vu(e, xt(t, 1), []);
        }), fa = id || function() {
          return ft.Date.now();
        };
        function Tg(e, t) {
          if (typeof t != "function")
            throw new bt(B);
          return e = Te(e), function() {
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
            throw new bt(B);
          return e = Te(e), function() {
            return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = l), i;
          };
        }
        var Ns = De(function(e, t, i) {
          var s = Fe;
          if (i.length) {
            var f = u(i, Zr(Ns));
            s |= Ce;
          }
          return Hn(e, s, t, i, f);
        }), Xl = De(function(e, t, i) {
          var s = Fe | Ue;
          if (i.length) {
            var f = u(i, Zr(Xl));
            s |= Ce;
          }
          return Hn(t, s, e, i, f);
        });
        function $l(e, t, i) {
          t = i ? l : t;
          var s = Hn(e, we, l, l, l, l, l, t);
          return s.placeholder = $l.placeholder, s;
        }
        function Yl(e, t, i) {
          t = i ? l : t;
          var s = Hn(e, Oe, l, l, l, l, l, t);
          return s.placeholder = Yl.placeholder, s;
        }
        function Kl(e, t, i) {
          var s, f, m, _, T, M, F = 0, N = !1, U = !1, K = !0;
          if (typeof e != "function")
            throw new bt(B);
          t = dn(t) || 0, nt(i) && (N = !!i.leading, U = "maxWait" in i, m = U ? dt(dn(i.maxWait) || 0, t) : m, K = "trailing" in i ? !!i.trailing : K);
          function ne(ut) {
            var _n = s, Yn = f;
            return s = f = l, F = ut, _ = e.apply(Yn, _n), _;
          }
          function ce(ut) {
            return F = ut, T = qi(Pe, t), N ? ne(ut) : _;
          }
          function Ae(ut) {
            var _n = ut - M, Yn = ut - F, hc = t - _n;
            return U ? St(hc, m - Yn) : hc;
          }
          function fe(ut) {
            var _n = ut - M, Yn = ut - F;
            return M === l || _n >= t || _n < 0 || U && Yn >= m;
          }
          function Pe() {
            var ut = fa();
            if (fe(ut))
              return ke(ut);
            T = qi(Pe, Ae(ut));
          }
          function ke(ut) {
            return T = l, K && s ? ne(ut) : (s = f = l, _);
          }
          function jt() {
            T !== l && il(T), F = 0, s = M = f = T = l;
          }
          function zt() {
            return T === l ? _ : ke(fa());
          }
          function Jt() {
            var ut = fa(), _n = fe(ut);
            if (s = arguments, f = this, M = ut, _n) {
              if (T === l)
                return ce(M);
              if (U)
                return il(T), T = qi(Pe, t), ne(M);
            }
            return T === l && (T = qi(Pe, t)), _;
          }
          return Jt.cancel = jt, Jt.flush = zt, Jt;
        }
        var Og = De(function(e, t) {
          return Fu(e, 1, t);
        }), Ig = De(function(e, t, i) {
          return Fu(e, dn(t) || 0, i);
        });
        function Rg(e) {
          return Hn(e, ge);
        }
        function da(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new bt(B);
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
        function Mg(e) {
          return Gl(2, e);
        }
        var Ag = vh(function(e, t) {
          t = t.length == 1 && Se(t[0]) ? Ze(t[0], yt(ue())) : Ze(xt(t, 1), yt(ue()));
          var i = t.length;
          return De(function(s) {
            for (var f = -1, m = St(s.length, i); ++f < m; )
              s[f] = t[f].call(this, s[f]);
            return Mt(e, this, s);
          });
        }), Bs = De(function(e, t) {
          var i = u(t, Zr(Bs));
          return Hn(e, Ce, l, t, i);
        }), Vl = De(function(e, t) {
          var i = u(t, Zr(Vl));
          return Hn(e, Ne, l, t, i);
        }), Cg = qn(function(e, t) {
          return Hn(e, Ie, l, l, l, t);
        });
        function Dg(e, t) {
          if (typeof e != "function")
            throw new bt(B);
          return t = t === l ? t : Te(t), De(e, t);
        }
        function zg(e, t) {
          if (typeof e != "function")
            throw new bt(B);
          return t = t == null ? 0 : dt(Te(t), 0), De(function(i) {
            var s = i[t], f = rr(i, 0, t);
            return s && yn(f, s), Mt(e, this, f);
          });
        }
        function Pg(e, t, i) {
          var s = !0, f = !0;
          if (typeof e != "function")
            throw new bt(B);
          return nt(i) && (s = "leading" in i ? !!i.leading : s, f = "trailing" in i ? !!i.trailing : f), Kl(e, t, {
            leading: s,
            maxWait: t,
            trailing: f
          });
        }
        function Lg(e) {
          return ql(e, 1);
        }
        function kg(e, t) {
          return Bs(Ss(t), e);
        }
        function Fg() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return Se(e) ? e : [e];
        }
        function Ng(e) {
          return ln(e, me);
        }
        function Bg(e, t) {
          return t = typeof t == "function" ? t : l, ln(e, me, t);
        }
        function Wg(e) {
          return ln(e, te | me);
        }
        function Ug(e, t) {
          return t = typeof t == "function" ? t : l, ln(e, te | me, t);
        }
        function Hg(e, t) {
          return t == null || ku(e, t, gt(t));
        }
        function wn(e, t) {
          return e === t || e !== e && t !== t;
        }
        var qg = oa(fs), Gg = oa(function(e, t) {
          return e >= t;
        }), Or = Hu(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Hu : function(e) {
          return ot(e) && $e.call(e, "callee") && !Ru.call(e, "callee");
        }, Se = R.isArray, Xg = Ti ? yt(Ti) : Qd;
        function Ut(e) {
          return e != null && pa(e.length) && !Xn(e);
        }
        function st(e) {
          return ot(e) && Ut(e);
        }
        function $g(e) {
          return e === !0 || e === !1 || ot(e) && Ct(e) == wt;
        }
        var ir = ad || Zs, Yg = pt ? yt(pt) : eh;
        function Kg(e) {
          return ot(e) && e.nodeType === 1 && !Gi(e);
        }
        function Vg(e) {
          if (e == null)
            return !0;
          if (Ut(e) && (Se(e) || typeof e == "string" || typeof e.splice == "function" || ir(e) || jr(e) || Or(e)))
            return !e.length;
          var t = Et(e);
          if (t == at || t == X)
            return !e.size;
          if (Hi(e))
            return !ps(e).length;
          for (var i in e)
            if ($e.call(e, i))
              return !1;
          return !0;
        }
        function Zg(e, t) {
          return Bi(e, t);
        }
        function jg(e, t, i) {
          i = typeof i == "function" ? i : l;
          var s = i ? i(e, t) : l;
          return s === l ? Bi(e, t, l, i) : !!s;
        }
        function Ws(e) {
          if (!ot(e))
            return !1;
          var t = Ct(e);
          return t == Tt || t == Xt || typeof e.message == "string" && typeof e.name == "string" && !Gi(e);
        }
        function Jg(e) {
          return typeof e == "number" && Au(e);
        }
        function Xn(e) {
          if (!nt(e))
            return !1;
          var t = Ct(e);
          return t == _t || t == en || t == pn || t == ar;
        }
        function Zl(e) {
          return typeof e == "number" && e == Te(e);
        }
        function pa(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Je;
        }
        function nt(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function ot(e) {
          return e != null && typeof e == "object";
        }
        var jl = Oo ? yt(Oo) : nh;
        function Qg(e, t) {
          return e === t || hs(e, t, As(t));
        }
        function ev(e, t, i) {
          return i = typeof i == "function" ? i : l, hs(e, t, As(t), i);
        }
        function tv(e) {
          return Jl(e) && e != +e;
        }
        function nv(e) {
          if (Bh(e))
            throw new G(O);
          return qu(e);
        }
        function rv(e) {
          return e === null;
        }
        function iv(e) {
          return e == null;
        }
        function Jl(e) {
          return typeof e == "number" || ot(e) && Ct(e) == Ot;
        }
        function Gi(e) {
          if (!ot(e) || Ct(e) != vt)
            return !1;
          var t = Uo(e);
          if (t === null)
            return !0;
          var i = $e.call(t, "constructor") && t.constructor;
          return typeof i == "function" && i instanceof i && Fo.call(i) == ed;
        }
        var Us = Io ? yt(Io) : rh;
        function ov(e) {
          return Zl(e) && e >= -Je && e <= Je;
        }
        var Ql = Ro ? yt(Ro) : ih;
        function ga(e) {
          return typeof e == "string" || !Se(e) && ot(e) && Ct(e) == Q;
        }
        function Zt(e) {
          return typeof e == "symbol" || ot(e) && Ct(e) == z;
        }
        var jr = Mo ? yt(Mo) : oh;
        function av(e) {
          return e === l;
        }
        function sv(e) {
          return ot(e) && Et(e) == oe;
        }
        function uv(e) {
          return ot(e) && Ct(e) == ye;
        }
        var lv = oa(gs), cv = oa(function(e, t) {
          return e <= t;
        });
        function ec(e) {
          if (!e)
            return [];
          if (Ut(e))
            return ga(e) ? x(e) : Wt(e);
          if (Ci && e[Ci])
            return n(e[Ci]());
          var t = Et(e), i = t == at ? o : t == X ? c : Jr;
          return i(e);
        }
        function $n(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = dn(e), e === se || e === -se) {
            var t = e < 0 ? -1 : 1;
            return t * Xe;
          }
          return e === e ? e : 0;
        }
        function Te(e) {
          var t = $n(e), i = t % 1;
          return t === t ? i ? t - i : t : 0;
        }
        function tc(e) {
          return e ? _r(Te(e), 0, Me) : 0;
        }
        function dn(e) {
          if (typeof e == "number")
            return e;
          if (Zt(e))
            return Ve;
          if (nt(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = nt(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Mi(e);
          var i = Ca.test(e);
          return i || ur.test(e) ? Eo(e.slice(2), i ? 2 : 8) : oo.test(e) ? Ve : +e;
        }
        function nc(e) {
          return An(e, Ht(e));
        }
        function fv(e) {
          return e ? _r(Te(e), -Je, Je) : e === 0 ? e : 0;
        }
        function qe(e) {
          return e == null ? "" : Vt(e);
        }
        var dv = Kr(function(e, t) {
          if (Hi(t) || Ut(t)) {
            An(t, gt(t), e);
            return;
          }
          for (var i in t)
            $e.call(t, i) && ki(e, i, t[i]);
        }), rc = Kr(function(e, t) {
          An(t, Ht(t), e);
        }), va = Kr(function(e, t, i, s) {
          An(t, Ht(t), e, s);
        }), hv = Kr(function(e, t, i, s) {
          An(t, gt(t), e, s);
        }), pv = qn(us);
        function gv(e, t) {
          var i = Yr(e);
          return t == null ? i : Lu(i, t);
        }
        var vv = De(function(e, t) {
          e = Ee(e);
          var i = -1, s = t.length, f = s > 2 ? t[2] : l;
          for (f && Dt(t[0], t[1], f) && (s = 1); ++i < s; )
            for (var m = t[i], _ = Ht(m), T = -1, M = _.length; ++T < M; ) {
              var F = _[T], N = e[F];
              (N === l || wn(N, Gr[F]) && !$e.call(e, F)) && (e[F] = m[F]);
            }
          return e;
        }), mv = De(function(e) {
          return e.push(l, xl), Mt(ic, l, e);
        });
        function yv(e, t) {
          return Co(e, ue(t, 3), Mn);
        }
        function bv(e, t) {
          return Co(e, ue(t, 3), cs);
        }
        function xv(e, t) {
          return e == null ? e : ls(e, ue(t, 3), Ht);
        }
        function wv(e, t) {
          return e == null ? e : Wu(e, ue(t, 3), Ht);
        }
        function _v(e, t) {
          return e && Mn(e, ue(t, 3));
        }
        function Sv(e, t) {
          return e && cs(e, ue(t, 3));
        }
        function Ev(e) {
          return e == null ? [] : jo(e, gt(e));
        }
        function Tv(e) {
          return e == null ? [] : jo(e, Ht(e));
        }
        function Hs(e, t, i) {
          var s = e == null ? l : Sr(e, t);
          return s === l ? i : s;
        }
        function Ov(e, t) {
          return e != null && Sl(e, t, Vd);
        }
        function qs(e, t) {
          return e != null && Sl(e, t, Zd);
        }
        var Iv = gl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = No.call(t)), e[t] = i;
        }, Xs(qt)), Rv = gl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = No.call(t)), $e.call(e, t) ? e[t].push(i) : e[t] = [i];
        }, ue), Mv = De(Ni);
        function gt(e) {
          return Ut(e) ? zu(e) : ps(e);
        }
        function Ht(e) {
          return Ut(e) ? zu(e, !0) : ah(e);
        }
        function Av(e, t) {
          var i = {};
          return t = ue(t, 3), Mn(e, function(s, f, m) {
            Un(i, t(s, f, m), s);
          }), i;
        }
        function Cv(e, t) {
          var i = {};
          return t = ue(t, 3), Mn(e, function(s, f, m) {
            Un(i, f, t(s, f, m));
          }), i;
        }
        var Dv = Kr(function(e, t, i) {
          Jo(e, t, i);
        }), ic = Kr(function(e, t, i, s) {
          Jo(e, t, i, s);
        }), zv = qn(function(e, t) {
          var i = {};
          if (e == null)
            return i;
          var s = !1;
          t = Ze(t, function(m) {
            return m = nr(m, e), s || (s = m.length > 1), m;
          }), An(e, Rs(e), i), s && (i = ln(i, te | We | me, Ih));
          for (var f = t.length; f--; )
            xs(i, t[f]);
          return i;
        });
        function Pv(e, t) {
          return oc(e, ha(ue(t)));
        }
        var Lv = qn(function(e, t) {
          return e == null ? {} : uh(e, t);
        });
        function oc(e, t) {
          if (e == null)
            return {};
          var i = Ze(Rs(e), function(s) {
            return [s];
          });
          return t = ue(t), Zu(e, i, function(s, f) {
            return t(s, f[0]);
          });
        }
        function kv(e, t, i) {
          t = nr(t, e);
          var s = -1, f = t.length;
          for (f || (f = 1, e = l); ++s < f; ) {
            var m = e == null ? l : e[Cn(t[s])];
            m === l && (s = f, m = i), e = Xn(m) ? m.call(e) : m;
          }
          return e;
        }
        function Fv(e, t, i) {
          return e == null ? e : Wi(e, t, i);
        }
        function Nv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : Wi(e, t, i, s);
        }
        var ac = yl(gt), sc = yl(Ht);
        function Bv(e, t, i) {
          var s = Se(e), f = s || ir(e) || jr(e);
          if (t = ue(t, 4), i == null) {
            var m = e && e.constructor;
            f ? i = s ? new m() : [] : nt(e) ? i = Xn(m) ? Yr(Uo(e)) : {} : i = {};
          }
          return (f ? Bt : Mn)(e, function(_, T, M) {
            return t(i, _, T, M);
          }), i;
        }
        function Wv(e, t) {
          return e == null ? !0 : xs(e, t);
        }
        function Uv(e, t, i) {
          return e == null ? e : tl(e, t, Ss(i));
        }
        function Hv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : tl(e, t, Ss(i), s);
        }
        function Jr(e) {
          return e == null ? [] : Ai(e, gt(e));
        }
        function qv(e) {
          return e == null ? [] : Ai(e, Ht(e));
        }
        function Gv(e, t, i) {
          return i === l && (i = t, t = l), i !== l && (i = dn(i), i = i === i ? i : 0), t !== l && (t = dn(t), t = t === t ? t : 0), _r(dn(e), t, i);
        }
        function Xv(e, t, i) {
          return t = $n(t), i === l ? (i = t, t = 0) : i = $n(i), e = dn(e), jd(e, t, i);
        }
        function $v(e, t, i) {
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
        var Yv = Vr(function(e, t, i) {
          return t = t.toLowerCase(), e + (i ? uc(t) : t);
        });
        function uc(e) {
          return Gs(qe(e).toLowerCase());
        }
        function lc(e) {
          return e = qe(e), e && e.replace(za, es).replace(bo, "");
        }
        function Kv(e, t, i) {
          e = qe(e), t = Vt(t);
          var s = e.length;
          i = i === l ? s : _r(Te(i), 0, s);
          var f = i;
          return i -= t.length, i >= 0 && e.slice(i, f) == t;
        }
        function Vv(e) {
          return e = qe(e), e && si.test(e) ? e.replace(Ar, ts) : e;
        }
        function Zv(e) {
          return e = qe(e), e && Ra.test(e) ? e.replace(di, "\\$&") : e;
        }
        var jv = Vr(function(e, t, i) {
          return e + (i ? "-" : "") + t.toLowerCase();
        }), Jv = Vr(function(e, t, i) {
          return e + (i ? " " : "") + t.toLowerCase();
        }), Qv = dl("toLowerCase");
        function em(e, t, i) {
          e = qe(e), t = Te(t);
          var s = t ? S(e) : 0;
          if (!t || s >= t)
            return e;
          var f = (t - s) / 2;
          return ia(Xo(f), i) + e + ia(Go(f), i);
        }
        function tm(e, t, i) {
          e = qe(e), t = Te(t);
          var s = t ? S(e) : 0;
          return t && s < t ? e + ia(t - s, i) : e;
        }
        function nm(e, t, i) {
          e = qe(e), t = Te(t);
          var s = t ? S(e) : 0;
          return t && s < t ? ia(t - s, i) + e : e;
        }
        function rm(e, t, i) {
          return i || t == null ? t = 0 : t && (t = +t), cd(qe(e).replace(Cr, ""), t || 0);
        }
        function im(e, t, i) {
          return (i ? Dt(e, t, i) : t === l) ? t = 1 : t = Te(t), ys(qe(e), t);
        }
        function om() {
          var e = arguments, t = qe(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var am = Vr(function(e, t, i) {
          return e + (i ? "_" : "") + t.toLowerCase();
        });
        function sm(e, t, i) {
          return i && typeof i != "number" && Dt(e, t, i) && (t = i = l), i = i === l ? Me : i >>> 0, i ? (e = qe(e), e && (typeof t == "string" || t != null && !Us(t)) && (t = Vt(t), !t && Jn(e)) ? rr(x(e), 0, i) : e.split(t, i)) : [];
        }
        var um = Vr(function(e, t, i) {
          return e + (i ? " " : "") + Gs(t);
        });
        function lm(e, t, i) {
          return e = qe(e), i = i == null ? 0 : _r(Te(i), 0, e.length), t = Vt(t), e.slice(i, i + t.length) == t;
        }
        function cm(e, t, i) {
          var s = g.templateSettings;
          i && Dt(e, t, i) && (t = l), e = qe(e), t = va({}, t, s, bl);
          var f = va({}, t.imports, s.imports, bl), m = gt(f), _ = Ai(f, m), T, M, F = 0, N = t.interpolate || Dr, U = "__p += '", K = At(
            (t.escape || Dr).source + "|" + N.source + "|" + (N === li ? he : Dr).source + "|" + (t.evaluate || Dr).source + "|$",
            "g"
          ), ne = "//# sourceURL=" + ($e.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++gr + "]") + `
`;
          e.replace(K, function(fe, Pe, ke, jt, zt, Jt) {
            return ke || (ke = jt), U += e.slice(F, Jt).replace(Pa, ns), Pe && (T = !0, U += `' +
__e(` + Pe + `) +
'`), zt && (M = !0, U += `';
` + zt + `;
__p += '`), ke && (U += `' +
((__t = (` + ke + `)) == null ? '' : __t) +
'`), F = Jt + fe.length, fe;
          }), U += `';
`;
          var ce = $e.call(t, "variable") && t.variable;
          if (!ce)
            U = `with (obj) {
` + U + `
}
`;
          else if (io.test(ce))
            throw new G(L);
          U = (M ? U.replace(gn, "") : U).replace(sr, "$1").replace(Kn, "$1;"), U = "function(" + (ce || "obj") + `) {
` + (ce ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
          var Ae = fc(function() {
            return ve(m, ne + "return " + U).apply(l, _);
          });
          if (Ae.source = U, Ws(Ae))
            throw Ae;
          return Ae;
        }
        function fm(e) {
          return qe(e).toLowerCase();
        }
        function dm(e) {
          return qe(e).toUpperCase();
        }
        function hm(e, t, i) {
          if (e = qe(e), e && (i || t === l))
            return Mi(e);
          if (!e || !(t = Vt(t)))
            return e;
          var s = x(e), f = x(t), m = Po(s, f), _ = Lo(s, f) + 1;
          return rr(s, m, _).join("");
        }
        function pm(e, t, i) {
          if (e = qe(e), e && (i || t === l))
            return e.slice(0, I(e) + 1);
          if (!e || !(t = Vt(t)))
            return e;
          var s = x(e), f = Lo(s, x(t)) + 1;
          return rr(s, 0, f).join("");
        }
        function gm(e, t, i) {
          if (e = qe(e), e && (i || t === l))
            return e.replace(Cr, "");
          if (!e || !(t = Vt(t)))
            return e;
          var s = x(e), f = Po(s, x(t));
          return rr(s, f).join("");
        }
        function vm(e, t) {
          var i = et, s = $;
          if (nt(t)) {
            var f = "separator" in t ? t.separator : f;
            i = "length" in t ? Te(t.length) : i, s = "omission" in t ? Vt(t.omission) : s;
          }
          e = qe(e);
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
              for (f.global || (f = At(f.source, qe(hi.exec(f)) + "g")), f.lastIndex = 0; F = f.exec(N); )
                var U = F.index;
              M = M.slice(0, U === l ? T : U);
            }
          } else if (e.indexOf(Vt(f), T) != T) {
            var K = M.lastIndexOf(f);
            K > -1 && (M = M.slice(0, K));
          }
          return M + s;
        }
        function mm(e) {
          return e = qe(e), e && no.test(e) ? e.replace(ai, P) : e;
        }
        var ym = Vr(function(e, t, i) {
          return e + (i ? " " : "") + t.toUpperCase();
        }), Gs = dl("toUpperCase");
        function cc(e, t, i) {
          return e = qe(e), t = i ? l : t, t === l ? r(e) ? q(e) : ja(e) : e.match(t) || [];
        }
        var fc = De(function(e, t) {
          try {
            return Mt(e, l, t);
          } catch (i) {
            return Ws(i) ? i : new G(i);
          }
        }), bm = qn(function(e, t) {
          return Bt(t, function(i) {
            i = Cn(i), Un(e, i, Ns(e[i], e));
          }), e;
        });
        function xm(e) {
          var t = e == null ? 0 : e.length, i = ue();
          return e = t ? Ze(e, function(s) {
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
        function wm(e) {
          return $d(ln(e, te));
        }
        function Xs(e) {
          return function() {
            return e;
          };
        }
        function _m(e, t) {
          return e == null || e !== e ? t : e;
        }
        var Sm = pl(), Em = pl(!0);
        function qt(e) {
          return e;
        }
        function $s(e) {
          return Gu(typeof e == "function" ? e : ln(e, te));
        }
        function Tm(e) {
          return $u(ln(e, te));
        }
        function Om(e, t) {
          return Yu(e, ln(t, te));
        }
        var Im = De(function(e, t) {
          return function(i) {
            return Ni(i, e, t);
          };
        }), Rm = De(function(e, t) {
          return function(i) {
            return Ni(e, i, t);
          };
        });
        function Ys(e, t, i) {
          var s = gt(t), f = jo(t, s);
          i == null && !(nt(t) && (f.length || !s.length)) && (i = t, t = e, e = this, f = jo(t, gt(t)));
          var m = !(nt(i) && "chain" in i) || !!i.chain, _ = Xn(e);
          return Bt(f, function(T) {
            var M = t[T];
            e[T] = M, _ && (e.prototype[T] = function() {
              var F = this.__chain__;
              if (m || F) {
                var N = e(this.__wrapped__), U = N.__actions__ = Wt(this.__actions__);
                return U.push({ func: M, args: arguments, thisArg: e }), N.__chain__ = F, N;
              }
              return M.apply(e, yn([this.value()], arguments));
            });
          }), e;
        }
        function Mm() {
          return ft._ === this && (ft._ = td), this;
        }
        function Ks() {
        }
        function Am(e) {
          return e = Te(e), De(function(t) {
            return Ku(t, e);
          });
        }
        var Cm = Ts(Ze), Dm = Ts(Oi), zm = Ts(Fn);
        function dc(e) {
          return Ds(e) ? Ri(Cn(e)) : lh(e);
        }
        function Pm(e) {
          return function(t) {
            return e == null ? l : Sr(e, t);
          };
        }
        var Lm = vl(), km = vl(!0);
        function Vs() {
          return [];
        }
        function Zs() {
          return !1;
        }
        function Fm() {
          return {};
        }
        function Nm() {
          return "";
        }
        function Bm() {
          return !0;
        }
        function Wm(e, t) {
          if (e = Te(e), e < 1 || e > Je)
            return [];
          var i = Me, s = St(e, Me);
          t = ue(t), e -= Me;
          for (var f = Nn(s, t); ++i < e; )
            t(i);
          return f;
        }
        function Um(e) {
          return Se(e) ? Ze(e, Cn) : Zt(e) ? [e] : Wt(Dl(qe(e)));
        }
        function Hm(e) {
          var t = ++Qf;
          return qe(e) + t;
        }
        var qm = ra(function(e, t) {
          return e + t;
        }, 0), Gm = Os("ceil"), Xm = ra(function(e, t) {
          return e / t;
        }, 1), $m = Os("floor");
        function Ym(e) {
          return e && e.length ? Zo(e, qt, fs) : l;
        }
        function Km(e, t) {
          return e && e.length ? Zo(e, ue(t, 2), fs) : l;
        }
        function Vm(e) {
          return vr(e, qt);
        }
        function Zm(e, t) {
          return vr(e, ue(t, 2));
        }
        function jm(e) {
          return e && e.length ? Zo(e, qt, gs) : l;
        }
        function Jm(e, t) {
          return e && e.length ? Zo(e, ue(t, 2), gs) : l;
        }
        var Qm = ra(function(e, t) {
          return e * t;
        }, 1), e0 = Os("round"), t0 = ra(function(e, t) {
          return e - t;
        }, 0);
        function n0(e) {
          return e && e.length ? qr(e, qt) : 0;
        }
        function r0(e, t) {
          return e && e.length ? qr(e, ue(t, 2)) : 0;
        }
        return g.after = Tg, g.ary = ql, g.assign = dv, g.assignIn = rc, g.assignInWith = va, g.assignWith = hv, g.at = pv, g.before = Gl, g.bind = Ns, g.bindAll = bm, g.bindKey = Xl, g.castArray = Fg, g.chain = Wl, g.chunk = $h, g.compact = Yh, g.concat = Kh, g.cond = xm, g.conforms = wm, g.constant = Xs, g.countBy = ng, g.create = gv, g.curry = $l, g.curryRight = Yl, g.debounce = Kl, g.defaults = vv, g.defaultsDeep = mv, g.defer = Og, g.delay = Ig, g.difference = Vh, g.differenceBy = Zh, g.differenceWith = jh, g.drop = Jh, g.dropRight = Qh, g.dropRightWhile = ep, g.dropWhile = tp, g.fill = np, g.filter = ig, g.flatMap = sg, g.flatMapDeep = ug, g.flatMapDepth = lg, g.flatten = kl, g.flattenDeep = rp, g.flattenDepth = ip, g.flip = Rg, g.flow = Sm, g.flowRight = Em, g.fromPairs = op, g.functions = Ev, g.functionsIn = Tv, g.groupBy = cg, g.initial = sp, g.intersection = up, g.intersectionBy = lp, g.intersectionWith = cp, g.invert = Iv, g.invertBy = Rv, g.invokeMap = dg, g.iteratee = $s, g.keyBy = hg, g.keys = gt, g.keysIn = Ht, g.map = ca, g.mapKeys = Av, g.mapValues = Cv, g.matches = Tm, g.matchesProperty = Om, g.memoize = da, g.merge = Dv, g.mergeWith = ic, g.method = Im, g.methodOf = Rm, g.mixin = Ys, g.negate = ha, g.nthArg = Am, g.omit = zv, g.omitBy = Pv, g.once = Mg, g.orderBy = pg, g.over = Cm, g.overArgs = Ag, g.overEvery = Dm, g.overSome = zm, g.partial = Bs, g.partialRight = Vl, g.partition = gg, g.pick = Lv, g.pickBy = oc, g.property = dc, g.propertyOf = Pm, g.pull = pp, g.pullAll = Nl, g.pullAllBy = gp, g.pullAllWith = vp, g.pullAt = mp, g.range = Lm, g.rangeRight = km, g.rearg = Cg, g.reject = yg, g.remove = yp, g.rest = Dg, g.reverse = ks, g.sampleSize = xg, g.set = Fv, g.setWith = Nv, g.shuffle = wg, g.slice = bp, g.sortBy = Eg, g.sortedUniq = Op, g.sortedUniqBy = Ip, g.split = sm, g.spread = zg, g.tail = Rp, g.take = Mp, g.takeRight = Ap, g.takeRightWhile = Cp, g.takeWhile = Dp, g.tap = Yp, g.throttle = Pg, g.thru = la, g.toArray = ec, g.toPairs = ac, g.toPairsIn = sc, g.toPath = Um, g.toPlainObject = nc, g.transform = Bv, g.unary = Lg, g.union = zp, g.unionBy = Pp, g.unionWith = Lp, g.uniq = kp, g.uniqBy = Fp, g.uniqWith = Np, g.unset = Wv, g.unzip = Fs, g.unzipWith = Bl, g.update = Uv, g.updateWith = Hv, g.values = Jr, g.valuesIn = qv, g.without = Bp, g.words = cc, g.wrap = kg, g.xor = Wp, g.xorBy = Up, g.xorWith = Hp, g.zip = qp, g.zipObject = Gp, g.zipObjectDeep = Xp, g.zipWith = $p, g.entries = ac, g.entriesIn = sc, g.extend = rc, g.extendWith = va, Ys(g, g), g.add = qm, g.attempt = fc, g.camelCase = Yv, g.capitalize = uc, g.ceil = Gm, g.clamp = Gv, g.clone = Ng, g.cloneDeep = Wg, g.cloneDeepWith = Ug, g.cloneWith = Bg, g.conformsTo = Hg, g.deburr = lc, g.defaultTo = _m, g.divide = Xm, g.endsWith = Kv, g.eq = wn, g.escape = Vv, g.escapeRegExp = Zv, g.every = rg, g.find = og, g.findIndex = Pl, g.findKey = yv, g.findLast = ag, g.findLastIndex = Ll, g.findLastKey = bv, g.floor = $m, g.forEach = Ul, g.forEachRight = Hl, g.forIn = xv, g.forInRight = wv, g.forOwn = _v, g.forOwnRight = Sv, g.get = Hs, g.gt = qg, g.gte = Gg, g.has = Ov, g.hasIn = qs, g.head = Fl, g.identity = qt, g.includes = fg, g.indexOf = ap, g.inRange = Xv, g.invoke = Mv, g.isArguments = Or, g.isArray = Se, g.isArrayBuffer = Xg, g.isArrayLike = Ut, g.isArrayLikeObject = st, g.isBoolean = $g, g.isBuffer = ir, g.isDate = Yg, g.isElement = Kg, g.isEmpty = Vg, g.isEqual = Zg, g.isEqualWith = jg, g.isError = Ws, g.isFinite = Jg, g.isFunction = Xn, g.isInteger = Zl, g.isLength = pa, g.isMap = jl, g.isMatch = Qg, g.isMatchWith = ev, g.isNaN = tv, g.isNative = nv, g.isNil = iv, g.isNull = rv, g.isNumber = Jl, g.isObject = nt, g.isObjectLike = ot, g.isPlainObject = Gi, g.isRegExp = Us, g.isSafeInteger = ov, g.isSet = Ql, g.isString = ga, g.isSymbol = Zt, g.isTypedArray = jr, g.isUndefined = av, g.isWeakMap = sv, g.isWeakSet = uv, g.join = fp, g.kebabCase = jv, g.last = fn, g.lastIndexOf = dp, g.lowerCase = Jv, g.lowerFirst = Qv, g.lt = lv, g.lte = cv, g.max = Ym, g.maxBy = Km, g.mean = Vm, g.meanBy = Zm, g.min = jm, g.minBy = Jm, g.stubArray = Vs, g.stubFalse = Zs, g.stubObject = Fm, g.stubString = Nm, g.stubTrue = Bm, g.multiply = Qm, g.nth = hp, g.noConflict = Mm, g.noop = Ks, g.now = fa, g.pad = em, g.padEnd = tm, g.padStart = nm, g.parseInt = rm, g.random = $v, g.reduce = vg, g.reduceRight = mg, g.repeat = im, g.replace = om, g.result = kv, g.round = e0, g.runInContext = w, g.sample = bg, g.size = _g, g.snakeCase = am, g.some = Sg, g.sortedIndex = xp, g.sortedIndexBy = wp, g.sortedIndexOf = _p, g.sortedLastIndex = Sp, g.sortedLastIndexBy = Ep, g.sortedLastIndexOf = Tp, g.startCase = um, g.startsWith = lm, g.subtract = t0, g.sum = n0, g.sumBy = r0, g.template = cm, g.times = Wm, g.toFinite = $n, g.toInteger = Te, g.toLength = tc, g.toLower = fm, g.toNumber = dn, g.toSafeInteger = fv, g.toString = qe, g.toUpper = dm, g.trim = hm, g.trimEnd = pm, g.trimStart = gm, g.truncate = vm, g.unescape = mm, g.uniqueId = Hm, g.upperCase = ym, g.upperFirst = Gs, g.each = Ul, g.eachRight = Hl, g.first = Fl, Ys(g, (function() {
          var e = {};
          return Mn(g, function(t, i) {
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
          var i = t + 1, s = i == _e || i == Re;
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
          return this.filter(ha(ue(e)));
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
            var _ = this.__wrapped__, T = s ? [1] : arguments, M = _ instanceof Le, F = T[0], N = M || Se(_), U = function(Pe) {
              var ke = f.apply(g, yn([Pe], T));
              return s && K ? ke[0] : ke;
            };
            N && i && typeof F == "function" && F.length != 1 && (M = N = !1);
            var K = this.__chain__, ne = !!this.__actions__.length, ce = m && !K, Ae = M && !ne;
            if (!m && N) {
              _ = Ae ? _ : new Le(this);
              var fe = e.apply(_, T);
              return fe.__actions__.push({ func: la, args: [U], thisArg: l }), new un(fe, K);
            }
            return ce && Ae ? e.apply(this, T) : (fe = this.thru(U), ce ? s ? fe.value()[0] : fe.value() : fe);
          });
        }), Bt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Rn[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
          g.prototype[e] = function() {
            var f = arguments;
            if (s && !this.__chain__) {
              var m = this.value();
              return t.apply(Se(m) ? m : [], f);
            }
            return this[i](function(_) {
              return t.apply(Se(_) ? _ : [], f);
            });
          };
        }), Mn(Le.prototype, function(e, t) {
          var i = g[t];
          if (i) {
            var s = i.name + "";
            $e.call($r, s) || ($r[s] = []), $r[s].push({ name: t, func: i });
          }
        }), $r[na(l, Ue).name] = [{
          name: "wrapper",
          func: l
        }], Le.prototype.clone = md, Le.prototype.reverse = yd, Le.prototype.value = bd, g.prototype.at = Kp, g.prototype.chain = Vp, g.prototype.commit = Zp, g.prototype.next = jp, g.prototype.plant = Qp, g.prototype.reverse = eg, g.prototype.toJSON = g.prototype.valueOf = g.prototype.value = tg, g.prototype.first = g.prototype.head, Ci && (g.prototype[Ci] = Jp), g;
      }), Y = j();
      kn ? ((kn.exports = Y)._ = Y, an._ = Y) : ft._ = Y;
    }).call(My);
  })(Yi, Yi.exports)), Yi.exports;
}
var Xi = Ay(), eu, jc;
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
function Cy() {
  if (Jc) return tu;
  Jc = 1;
  var p = typeof or == "object" && or && or.Object === Object && or;
  return tu = p, tu;
}
var nu, Qc;
function Yf() {
  if (Qc) return nu;
  Qc = 1;
  var p = Cy(), h = typeof self == "object" && self && self.Object === Object && self, l = p || h || Function("return this")();
  return nu = l, nu;
}
var ru, ef;
function Dy() {
  if (ef) return ru;
  ef = 1;
  var p = Yf(), h = function() {
    return p.Date.now();
  };
  return ru = h, ru;
}
var iu, tf;
function zy() {
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
function Py() {
  if (nf) return ou;
  nf = 1;
  var p = zy(), h = /^\s+/;
  function l(y) {
    return y && y.slice(0, p(y) + 1).replace(h, "");
  }
  return ou = l, ou;
}
var au, rf;
function Kf() {
  if (rf) return au;
  rf = 1;
  var p = Yf(), h = p.Symbol;
  return au = h, au;
}
var su, of;
function Ly() {
  if (of) return su;
  of = 1;
  var p = Kf(), h = Object.prototype, l = h.hasOwnProperty, y = h.toString, C = p ? p.toStringTag : void 0;
  function O(B) {
    var L = l.call(B, C), E = B[C];
    try {
      B[C] = void 0;
      var V = !0;
    } catch {
    }
    var pe = y.call(B);
    return V && (L ? B[C] = E : delete B[C]), pe;
  }
  return su = O, su;
}
var uu, af;
function ky() {
  if (af) return uu;
  af = 1;
  var p = Object.prototype, h = p.toString;
  function l(y) {
    return h.call(y);
  }
  return uu = l, uu;
}
var lu, sf;
function Fy() {
  if (sf) return lu;
  sf = 1;
  var p = Kf(), h = Ly(), l = ky(), y = "[object Null]", C = "[object Undefined]", O = p ? p.toStringTag : void 0;
  function B(L) {
    return L == null ? L === void 0 ? C : y : O && O in Object(L) ? h(L) : l(L);
  }
  return lu = B, lu;
}
var cu, uf;
function Ny() {
  if (uf) return cu;
  uf = 1;
  function p(h) {
    return h != null && typeof h == "object";
  }
  return cu = p, cu;
}
var fu, lf;
function By() {
  if (lf) return fu;
  lf = 1;
  var p = Fy(), h = Ny(), l = "[object Symbol]";
  function y(C) {
    return typeof C == "symbol" || h(C) && p(C) == l;
  }
  return fu = y, fu;
}
var du, cf;
function Wy() {
  if (cf) return du;
  cf = 1;
  var p = Py(), h = Su(), l = By(), y = NaN, C = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, B = /^0o[0-7]+$/i, L = parseInt;
  function E(V) {
    if (typeof V == "number")
      return V;
    if (l(V))
      return y;
    if (h(V)) {
      var pe = typeof V.valueOf == "function" ? V.valueOf() : V;
      V = h(pe) ? pe + "" : pe;
    }
    if (typeof V != "string")
      return V === 0 ? V : +V;
    V = p(V);
    var te = O.test(V);
    return te || B.test(V) ? L(V.slice(2), te ? 2 : 8) : C.test(V) ? y : +V;
  }
  return du = E, du;
}
var hu, ff;
function Uy() {
  if (ff) return hu;
  ff = 1;
  var p = Su(), h = Dy(), l = Wy(), y = "Expected a function", C = Math.max, O = Math.min;
  function B(L, E, V) {
    var pe, te, We, me, xe, Ge, Fe = 0, Ue = !1, ze = !1, we = !0;
    if (typeof L != "function")
      throw new TypeError(y);
    E = l(E) || 0, p(V) && (Ue = !!V.leading, ze = "maxWait" in V, We = ze ? C(l(V.maxWait) || 0, E) : We, we = "trailing" in V ? !!V.trailing : we);
    function Oe(ee) {
      var _e = pe, de = te;
      return pe = te = void 0, Fe = ee, me = L.apply(de, _e), me;
    }
    function Ce(ee) {
      return Fe = ee, xe = setTimeout(Ie, E), Ue ? Oe(ee) : me;
    }
    function Ne(ee) {
      var _e = ee - Ge, de = ee - Fe, Re = E - _e;
      return ze ? O(Re, We - de) : Re;
    }
    function D(ee) {
      var _e = ee - Ge, de = ee - Fe;
      return Ge === void 0 || _e >= E || _e < 0 || ze && de >= We;
    }
    function Ie() {
      var ee = h();
      if (D(ee))
        return ge(ee);
      xe = setTimeout(Ie, Ne(ee));
    }
    function ge(ee) {
      return xe = void 0, we && pe ? Oe(ee) : (pe = te = void 0, me);
    }
    function et() {
      xe !== void 0 && clearTimeout(xe), Fe = 0, pe = Ge = te = xe = void 0;
    }
    function $() {
      return xe === void 0 ? me : ge(h());
    }
    function re() {
      var ee = h(), _e = D(ee);
      if (pe = arguments, te = this, Ge = ee, _e) {
        if (xe === void 0)
          return Ce(Ge);
        if (ze)
          return clearTimeout(xe), xe = setTimeout(Ie, E), Oe(Ge);
      }
      return xe === void 0 && (xe = setTimeout(Ie, E)), me;
    }
    return re.cancel = et, re.flush = $, re;
  }
  return hu = B, hu;
}
var pu, df;
function Hy() {
  if (df) return pu;
  df = 1;
  var p = Uy(), h = Su(), l = "Expected a function";
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
var qy = Hy();
const Gy = /* @__PURE__ */ Lf(qy), Xy = { class: "scroll max-h-screen ml-15" }, $y = ["onContextmenu"], Yy = {
  key: 1,
  class: "text"
}, hn = "__drop__", Ky = /* @__PURE__ */ Ta({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(p, { emit: h }) {
    const l = rt(void 0), y = it(() => Xf(l.value)), C = it(() => y.value.cols), O = it(() => y.value.rowHeight), B = it(() => `${O.value}-${Object.values(C.value).join("-")}`), L = rt(typeof window < "u" ? window.innerWidth : 1200), E = it(() => Ve(L.value)), V = wf(), pe = it(() => V.params.pageid || ""), te = it(() => yf(pe.value)), We = it(() => bf(pe.value)), me = it(() => te.value.widgets), xe = it(() => We.value.layout), Ge = v0(), Fe = rt({ x: 0, y: 0 }), Ue = rt({
      visible: !1,
      x: 0,
      y: 0,
      widgetId: ""
    }), ze = rt({
      visible: !1,
      x: 0,
      y: 0
    }), we = (X, Q) => {
      Ue.value = {
        visible: !0,
        x: X.clientX,
        y: X.clientY,
        widgetId: Q
      }, ze.value.visible = !1;
    }, Oe = () => {
      Ue.value.visible = !1, ze.value.visible = !1;
    }, Ce = () => {
      D(Ue.value.widgetId), Oe();
    }, Ne = () => {
      Ie(), Oe();
    }, D = (X) => {
      const Q = me.value.find((Z) => Z.uid === X), z = xe.value.find((Z) => Z.id === X);
      Q && z && Ge.copy(Q, z);
    }, Ie = () => {
      const X = Ge.paste();
      if (!X) return;
      const Q = "li_" + Math.random().toString(36).substring(7), z = Xi.cloneDeep(X.widget);
      z.uid = Q, z.config?.settings && (z.config.settings.name = "widget_" + Q);
      const { colW: Z, rowH: oe } = Me(), ye = Math.round(Fe.value.x / Z), le = Math.round(Fe.value.y / oe), ae = {
        i: Q,
        x: ye,
        y: le,
        w: Math.max(1, Math.round((X.layout.width || 200) / Z)),
        h: Math.max(1, Math.round((X.layout.height || 100) / oe)),
        static: !1
      };
      te.value.updateWidgets([...me.value, z]), de.value = [...de.value, ae], wt(de.value);
    }, ge = rt(), et = rt(), $ = rt(!1), re = rt({ x: -1, y: -1 }), ee = rt(!1), _e = rt([]), de = rt([]), Re = rt([]), se = it(() => [
      ...de.value,
      ...Re.value
    ]), Je = rt(!1);
    function Xe(X, Q = 0) {
      if (typeof X == "number") return X;
      const z = Number(X);
      return Number.isFinite(z) ? z : Q;
    }
    function Ve(X) {
      const Q = C.value;
      return X >= ri.lg ? Q.lg : X >= ri.md ? Q.md : X >= ri.sm ? Q.sm : X >= ri.xs ? Q.xs : Q.xxs;
    }
    function Me() {
      return { colW: 1200 / C.value.md, rowH: O.value };
    }
    function Nt(X) {
      const { colW: Q, rowH: z } = Me(), Z = Xe(X.x, 0), oe = Xe(X.y, 0), ye = Xe(X.width, Q), le = Xe(X.height, z);
      return {
        i: String(X.id ?? X.i ?? ""),
        x: Math.round(Z / Q),
        y: Math.round(oe / z),
        w: Math.max(1, Math.round(ye / Q)),
        h: Math.max(1, Math.round(le / z)),
        static: !1
      };
    }
    function ht(X) {
      const { colW: Q, rowH: z } = Me();
      return {
        id: String(X.i),
        x: Xe(X.x, 0) * Q,
        y: Xe(X.y, 0) * z,
        width: Xe(X.w, 1) * Q,
        height: Xe(X.h, 1) * z,
        z: 3e3
      };
    }
    je(xe, (X) => {
      Je.value = !0;
      try {
        const Q = Array.isArray(X) ? X.map(Nt) : [];
        Xi.isEqual(de.value, Q) || (de.value = Q);
      } finally {
        kt(() => Je.value = !1);
      }
    }, { immediate: !0, deep: !0 });
    const Pn = Gy(() => {
      L.value = window.innerWidth;
      const X = xe.value || [], Q = Array.isArray(X) ? X.map(Nt) : [];
      Xi.isEqual(de.value, Q) || (de.value = Q);
    }, 120);
    let lt = null;
    const Qe = Ji(_f) ?? null;
    function pn() {
      if (Qe && pe.value) {
        const X = Qe.getPage(pe.value);
        l.value = X?.layoutSettings ? { ...Sa(X.layoutSettings) } : void 0;
      }
    }
    Oa(() => {
      window.addEventListener("resize", Pn, { passive: !0 }), pn(), Qe && "subscribe" in Qe && (lt = Qe.subscribe((X) => {
        X === "PAGE_UPDATE" && pn();
      }));
    }), wu(() => {
      window.removeEventListener("resize", Pn), Qe && "unsubscribe" in Qe && lt && Qe.unsubscribe(lt);
    });
    function wt(X) {
      if (Je.value) return;
      const z = (X ?? se.value).filter((le) => le.i !== hn).map(ht), Z = xe.value || [], oe = z.map((le) => ({
        ...le,
        x: Math.round(le.x * 100) / 100,
        y: Math.round(le.y * 100) / 100,
        width: Math.round(le.width * 100) / 100,
        height: Math.round(le.height * 100) / 100
      })), ye = Z.map((le) => ({
        ...le,
        x: Math.round(le.x * 100) / 100,
        y: Math.round(le.y * 100) / 100,
        width: Math.round(le.width * 100) / 100,
        height: Math.round(le.height * 100) / 100
      }));
      Xi.isEqual(ye, oe) || We.value.updateLayout(z);
    }
    async function J() {
      return Re.value.find((X) => X.i === hn) || (Re.value = [...Re.value, { x: 0, y: 0, w: 2, h: 2, i: hn, static: !1 }], await kt()), await kt(), ge.value?.getItem?.(hn);
    }
    function Xt() {
      Re.value = Re.value.filter((X) => X.i !== hn);
    }
    async function Tt() {
      $.value = !0, ee.value = !1, await J();
    }
    async function _t(X) {
      const Q = X;
      if (!Q || !ge.value) return;
      const z = document.querySelector(".alayout");
      if (!z) return;
      const Z = z.getBoundingClientRect();
      Re.value.find((tt) => tt.i === hn) || (Re.value = [...Re.value, { x: 0, y: 0, w: 2, h: 2, i: hn, static: !1 }], await kt()), await kt();
      const oe = ge.value?.getItem?.(hn);
      if (!oe) return;
      const ye = Q.clientX - Z.left, le = Q.clientY - Z.top;
      let ae = oe.calcXY(le, ye);
      const ie = ge.value?.cols ?? 12;
      (ae.x < 0 || ae.y < 0 || ae.x >= ie) && (ae = oe.calcXY(ye, le)), re.value = { x: Xe(ae.x, 0), y: Xe(ae.y, 0) }, ee.value ? ge.value.dragEvent("drag", hn, re.value.x, re.value.y, 2, 2) : (ge.value.dragEvent("dragstart", hn, re.value.x, re.value.y, 2, 2), ee.value = !0);
    }
    function en() {
      ee.value && ge.value && ge.value.dragEvent("dragend", hn, re.value.x, re.value.y, 2, 2), Xt(), ee.value = !1, $.value = !1;
    }
    function at(X) {
      const Q = X?.item?._underlying_vm_ || X?.added?.element || X?.item, z = Q?.type ?? "UnknownWidget", Z = Q?.datasourceId ?? "default";
      ee.value && ge.value && ge.value.dragEvent("dragend", hn, re.value.x, re.value.y, 2, 2), Xt(), ee.value = !1, $.value = !1;
      const oe = `widget_${Math.random().toString(36).slice(2, 9)}`, { x: ye, y: le } = re.value;
      de.value = [...de.value, { i: oe, x: ye, y: le, w: 2, h: 2, static: !1 }], wt(de.value), vt(oe, z, Z), re.value = { x: -1, y: -1 };
    }
    function Ot() {
      $.value = !0;
    }
    function $t() {
      en();
    }
    function vt(X, Q, z) {
      const oe = { uid: X, type: Q, config: { datasourceId: z, settings: {} }, wrapperConfig: Xi.cloneDeep(h0) };
      te.value.updateWidgets([...me.value, oe]);
    }
    function Yt(X) {
      te.value.updateWidgets(me.value.filter((Q) => Q.uid !== X)), de.value = de.value.filter((Q) => Q.i !== X), wt(de.value);
    }
    const ar = h, It = (X) => {
      ar("openSettings", X);
    };
    return (X, Q) => (Ft(), zn("div", Xy, [
      xa("div", {
        ref_key: "wrapper",
        ref: et,
        onDragenter: Ot,
        onDrop: mc($t, ["prevent"]),
        onDrag: _t,
        class: "alayout",
        onClick: Oe,
        style: Ki({ "--grid-row-height": O.value + "px", "--grid-cols": E.value })
      }, [
        (Ft(), eo(Gt(Gf), {
          ref_key: "gridLayout",
          ref: ge,
          key: B.value,
          layout: se.value,
          "row-height": O.value,
          responsive: !0,
          "vertical-compact": !1,
          breakpoints: Gt(ri),
          cols: C.value,
          onLayoutUpdated: wt
        }, {
          item: ii(({ item: z }) => [
            xa("div", {
              class: "widget-item-wrapper",
              onContextmenu: mc((Z) => we(Z, String(z.i)), ["stop", "prevent"])
            }, [
              me.value?.find((Z) => Z.uid === z.i) ? (Ft(), eo(Gt(xf), {
                key: 0,
                widget: me.value.find((Z) => Z.uid === z.i),
                ref: `${z.i}_wrapper`,
                onOpenSettings: It,
                editEnabled: "",
                onRemoveWidget: () => Yt(z.i.toString())
              }, null, 8, ["widget", "onRemoveWidget"])) : (Ft(), zn("span", Yy, mu(`${z.i}${z.static ? "- Static" : ""}`), 1))
            ], 40, $y)
          ]),
          _: 1
        }, 8, ["layout", "row-height", "breakpoints", "cols"])),
        Ue.value.visible ? (Ft(), zn("div", {
          key: 0,
          class: "widget-context-menu",
          style: Ki({ left: Ue.value.x + "px", top: Ue.value.y + "px" })
        }, [
          ti(Gt(bc), {
            intent: "quiet",
            size: "sm",
            class: "menu__item",
            onClick: Ce
          }, {
            default: ii(() => [
              ti(Gt(xc), {
                name: "content_copy",
                size: "sm"
              }),
              Q[0] || (Q[0] = yc(" Kopieren ", -1))
            ]),
            _: 1
          })
        ], 4)) : vu("", !0),
        vf(ti(Gt(g0), {
          list: _e.value,
          group: { name: "widgets" },
          class: "invisible-dropzone",
          itemKey: "type",
          sort: !1,
          onStart: Tt,
          onEnd: en,
          onAdd: at
        }, {
          item: ii(({ element: z }) => [
            xa("div", null, mu(z.type), 1)
          ]),
          _: 1
        }, 8, ["list"]), [
          [mf, $.value]
        ]),
        ze.value.visible && Gt(Ge).hasClipboard ? (Ft(), zn("div", {
          key: 1,
          class: "canvas-context-menu",
          style: Ki({ left: ze.value.x + "px", top: ze.value.y + "px" })
        }, [
          ti(Gt(bc), {
            intent: "quiet",
            size: "sm",
            class: "menu__item",
            onClick: Ne
          }, {
            default: ii(() => [
              ti(Gt(xc), {
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
}), Vy = /* @__PURE__ */ $f(Ky, [["__scopeId", "data-v-47bbb734"]]);
class Be extends Sf {
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
class Eu extends m0 {
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
class Ke extends y0 {
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
    b0.INSTANCE.set(Ke.eNS_URI, this), this.setEFactoryInstance(Eu.eINSTANCE);
    const h = new wc();
    h.setName("GridColumns"), h.setAbstract(!1), h.setInterface(!1), this.getEClassifiers().push(h), h.setEPackage(this), Ke.Literals.GRID_COLUMNS = h;
    const l = new Qr();
    l.setName("lg"), l.setLowerBound(0), l.setUpperBound(1), h.getEStructuralFeatures().push(l), Ke.Literals.GRID_COLUMNS__LG = l;
    const y = new Qr();
    y.setName("md"), y.setLowerBound(0), y.setUpperBound(1), h.getEStructuralFeatures().push(y), Ke.Literals.GRID_COLUMNS__MD = y;
    const C = new Qr();
    C.setName("sm"), C.setLowerBound(0), C.setUpperBound(1), h.getEStructuralFeatures().push(C), Ke.Literals.GRID_COLUMNS__SM = C;
    const O = new Qr();
    O.setName("xs"), O.setLowerBound(0), O.setUpperBound(1), h.getEStructuralFeatures().push(O), Ke.Literals.GRID_COLUMNS__XS = O;
    const B = new Qr();
    B.setName("xxs"), B.setLowerBound(0), B.setUpperBound(1), h.getEStructuralFeatures().push(B), Ke.Literals.GRID_COLUMNS__XXS = B;
    const L = new wc();
    L.setName("GridSettings"), L.setAbstract(!1), L.setInterface(!1), this.getEClassifiers().push(L), L.setEPackage(this), Ke.Literals.GRID_SETTINGS = L;
    const E = new Qr();
    E.setName("rowHeight"), E.setLowerBound(0), E.setUpperBound(1), L.getEStructuralFeatures().push(E), Ke.Literals.GRID_SETTINGS__ROW_HEIGHT = E;
    const V = new x0();
    V.setContainment(!0), V.setName("cols"), V.setLowerBound(0), V.setUpperBound(1), L.getEStructuralFeatures().push(V), Ke.Literals.GRID_SETTINGS__COLS = V, Ke.Literals.GRID_COLUMNS__LG.setEType(ei().getEClassifier("EInt")), Ke.Literals.GRID_COLUMNS__MD.setEType(ei().getEClassifier("EInt")), Ke.Literals.GRID_COLUMNS__SM.setEType(ei().getEClassifier("EInt")), Ke.Literals.GRID_COLUMNS__XS.setEType(ei().getEClassifier("EInt")), Ke.Literals.GRID_COLUMNS__XXS.setEType(ei().getEClassifier("EInt")), Ke.Literals.GRID_SETTINGS__ROW_HEIGHT.setEType(ei().getEClassifier("EInt")), Ke.Literals.GRID_SETTINGS__COLS.setEType(Ke.Literals.GRID_COLUMNS);
  }
}
class Lt extends Sf {
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
const Zy = `<?xml version="1.0" encoding="UTF-8"?>
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
`, jy = `<?xml version="1.0" encoding="UTF-8"?>
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
const Vf = "org.eclipse.daanse.board.app.ui.vue.layouts.grid";
function Zf({ services: p }) {
  p.getRequired(pf).addLayout({
    id: Vf,
    name: "GridLayout",
    description: "responsive grid-based layout",
    component: Ry,
    editor: Vy,
    /*
     * No hand-written panel: a row height and five column counts are
     * fields, so there is nothing to keep beside the model and no second
     * place for the two to disagree.
     */
    settingsForm: {
      xmi: Zy,
      uri: "/grid-settings.ui.xmi",
      ePackage: () => Ke.eINSTANCE,
      create: () => new Lt(),
      entryForms: [{ xmi: jy, uri: "/grid-columns.ui.xmi" }]
    }
  });
}
function jf({ services: p }) {
  p.getRequired(pf).removeLayout(Vf);
}
const Jy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: Zf,
  deactivate: jf
}, Symbol.toStringTag, { value: "Module" })), hf = "org.eclipse.daanse.board.app.ui.vue.layouts.grid", Qy = "0.0.1-next.1";
async function db(p) {
  const h = globalThis.__tsm__;
  if (!h)
    throw new Error(`${hf}: tsm runtime is not initialized`);
  h.register(hf, Jy, Qy, "ui.vue.layouts.grid"), await Zf?.(p);
}
async function hb(p) {
  await jf?.(p);
}
export {
  db as activate,
  hb as deactivate
};
