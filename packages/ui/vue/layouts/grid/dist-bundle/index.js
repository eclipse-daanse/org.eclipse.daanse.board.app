(function(){var i="ui.vue.layouts.grid",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".view_grid_layout[data-v-49a3f0ec]{padding-left:60px}.vgl-layout[data-v-49a3f0ec]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-49a3f0ec]:before{display:none}[data-v-49a3f0ec] .vgl-item--resizing{opacity:90%}[data-v-49a3f0ec] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-49a3f0ec]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.alayout[data-v-645df0a5]{padding-left:60px}.vgl-layout[data-v-645df0a5]{--vgl-placeholder-bg: var(--color-outline);min-height:100vh}.vgl-layout[data-v-645df0a5]:before{position:absolute;width:calc(100% - 5px);height:calc(100% - 5px);margin:5px;content:\"\";background-image:linear-gradient(to right,var(--color-divider) 1px,transparent 1px),linear-gradient(to bottom,var(--color-divider) 1px,transparent 1px);background-repeat:repeat;background-size:calc(calc(100% - 5px) / var(--grid-cols, 12)) calc(var(--grid-row-height, 30px) + 10px)}[data-v-645df0a5] .vgl-item--placeholder{outline:2px dashed var(--color-outline);background-color:#88888826}[data-v-645df0a5] .vgl-item--resizing{opacity:90%}[data-v-645df0a5] .vgl-item--static{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent)}.text[data-v-645df0a5]{position:absolute;inset:0;width:100%;height:100%;margin:auto;font-size:24px;text-align:center}.invisible-dropzone[data-v-645df0a5]{position:absolute;inset:0;z-index:1000;pointer-events:auto}.invisible-dropzone[data-v-645df0a5]>*{opacity:0}.widget-item-wrapper[data-v-645df0a5]{width:100%;height:100%}.dropdown-buttons-container[data-v-645df0a5]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.widget-context-menu[data-v-645df0a5],.canvas-context-menu[data-v-645df0a5]{position:fixed;background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-sm);padding:4px;box-shadow:var(--shadow-e2);z-index:100000}.grid-settings[data-v-2078e072]{display:flex;flex-direction:column;gap:12px}.grid-settings-title[data-v-2078e072]{font-size:14px;font-weight:600;margin:0}.grid-settings-subtitle[data-v-2078e072]{font-size:13px;font-weight:500;margin:8px 0 0}.cols-grid[data-v-2078e072]{display:flex;flex-direction:column;gap:8px}.col-input[data-v-2078e072]{width:100%}\n";})();
import { LAYOUT_REPOSITORY as af } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { defineComponent as Ji, inject as Vi, shallowRef as Zm, reactive as Zi, ref as nt, toRef as jm, onBeforeMount as sf, onMounted as _a, watchEffect as Jm, onBeforeUnmount as mu, computed as Qe, watch as Ze, createElementBlock as Mn, openBlock as bt, normalizeStyle as Gi, normalizeClass as cc, renderSlot as fu, createCommentVNode as du, unref as bn, getCurrentScope as Qm, onScopeDispose as e0, nextTick as kt, provide as fc, toRefs as dc, withDirectives as uf, Fragment as lf, renderList as cf, createBlock as Or, mergeProps as t0, withCtx as nr, createVNode as ti, vShow as ff, resolveComponent as ba, createElementVNode as Rr, isRef as n0, toDisplayString as pu, withModifiers as pc, createTextVNode as hc, useModel as r0 } from "vue";
import { useWidgetsStore as df } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { useLayoutStore as pf } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { WidgetWrapper as hf, defaultConfig as i0 } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as gf } from "vue-router";
import { identifier as vf } from "org.eclipse.daanse.board.app.lib.api.page";
import a0 from "vuedraggable";
import { useClipboardStore as s0 } from "org.eclipse.daanse.board.app.ui.vue.layouts.base";
const { identifiers: o0 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), u0 = typeof window < "u";
var gc;
u0 && ((gc = window?.navigator) != null && gc.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Vt(p) {
  return p == null;
}
function mf() {
}
const l0 = Object.freeze({
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
Object.freeze(new Set(Object.keys(l0)));
function c0() {
  const p = /* @__PURE__ */ new Map();
  return {
    on(m, l) {
      const y = p.get(m);
      y?.add(l) || p.set(m, /* @__PURE__ */ new Set([l]));
    },
    off(m, l) {
      const y = p.get(m);
      y && y.delete(l);
    },
    clear(m) {
      const l = p.get(m);
      l && l.clear();
    },
    clearAll() {
      p.clear();
    },
    emit(m, ...l) {
      const y = p.get(m);
      y && y.forEach((z) => {
        z(...l);
      });
    }
  };
}
function vc(p, m = 16) {
  if (typeof p != "function")
    return mf;
  const l = (...O) => {
    p(...O);
  };
  if (m <= 0)
    return yf(l);
  let y = 0, z;
  return function(...O) {
    const F = Date.now(), D = F - y;
    clearTimeout(z), D >= m ? (y = F, l(...O)) : z = setTimeout(
      () => {
        y = Date.now(), l(...O);
      },
      Math.max(0, m - D)
    );
  };
}
function f0(p, m = 100) {
  if (typeof p != "function")
    return mf;
  const l = (...z) => {
    p(...z);
  };
  if (m <= 0)
    return yf(l);
  let y;
  return function(...z) {
    clearTimeout(y), y = setTimeout(() => {
      l(...z);
    }, m);
  };
}
function yf(p) {
  if (typeof p != "function")
    return p;
  let m = !1, l, y;
  return function(...z) {
    return l = z, m || (m = !0, y = Promise.resolve().then(() => (m = !1, y = void 0, p(...l)))), y;
  };
}
const Yi = /* @__PURE__ */ new Set(), bf = /* @__PURE__ */ new WeakMap();
function d0() {
  Yi.forEach((p) => {
    p(...bf.get(p));
  }), Yi.clear();
}
function Ct(p, ...m) {
  if (typeof p != "function")
    return p;
  bf.set(p, m), !Yi.has(p) && (Yi.add(p), Yi.size === 1 && Promise.resolve().then(d0));
}
const xf = Symbol("LAYOUT_KEY"), wf = Symbol("EMITTER_KEY");
function p0(p) {
  let m = 0, l;
  for (let y = 0, z = p.length; y < z; y++)
    l = p[y].y + p[y].h, l > m && (m = l);
  return m;
}
function hu(p) {
  const m = Array(p.length);
  for (let l = 0, y = p.length; l < y; l++)
    m[l] = h0(p[l]);
  return m;
}
function h0(p) {
  return { ...p };
}
function _f(p, m) {
  return !(p === m || p.x + p.w <= m.x || p.x >= m.x + m.w || p.y + p.h <= m.y || p.y >= m.y + m.h);
}
function ei(p, m, l) {
  const y = Ef(p), z = Tf(p), O = Array(p.length);
  for (let F = 0, D = z.length; F < D; F++) {
    let E = z[F];
    E.static || (E = g0(y, E, m, l), y.push(E)), O[p.findIndex((V) => V.i === E.i)] = E, E.moved = !1;
  }
  return O;
}
function g0(p, m, l, y) {
  if (l)
    for (; m.y > 0 && !Xi(p, m); )
      m.y--;
  else if (y) {
    const O = y[m.i].y;
    for (; m.y > O && !Xi(p, m); )
      m.y--;
  }
  let z;
  for (; z = Xi(p, m); )
    m.y = z.y + z.h;
  return m;
}
function v0(p, m) {
  const l = Ef(p);
  for (let y = 0, z = p.length; y < z; y++) {
    const O = p[y];
    if (O.x + O.w > m.cols && (O.x = m.cols - O.w), O.x < 0 && (O.x = 0, O.w = m.cols), !O.static) l.push(O);
    else
      for (; Xi(l, O); )
        O.y++;
  }
  return p;
}
function mc(p, m) {
  for (let l = 0, y = p.length; l < y; l++)
    if (p[l].i === m) return p[l];
}
function Xi(p, m) {
  for (let l = 0, y = p.length; l < y; l++)
    if (_f(p[l], m)) return p[l];
}
function Sf(p, m) {
  return p.filter((l) => _f(l, m));
}
function Ef(p) {
  return p.filter((m) => m.static);
}
function gu(p, m, l, y, z = !1, O = !1) {
  if (m.static) return p;
  const F = m.x, D = m.y, E = y && m.y > y;
  typeof l == "number" && (m.x = l), typeof y == "number" && (m.y = y), m.moved = !0;
  let V = Tf(p);
  E && (V = V.reverse());
  const oe = Sf(V, m);
  if (O && oe.length)
    return m.x = F, m.y = D, m.moved = !1, p;
  for (let j = 0, Fe = oe.length; j < Fe; j++) {
    const me = oe[j];
    me.moved || m.y > me.y && m.y - me.y > me.h / 4 || (me.static ? p = yc(p, me, m, z) : p = yc(p, m, me, z));
  }
  return p;
}
function yc(p, m, l, y) {
  if (y) {
    const z = {
      x: l.x,
      y: l.y,
      w: l.w,
      h: l.h
    };
    if (z.y = Math.max(m.y - l.h, 0), !Xi(p, z))
      return gu(p, l, void 0, z.y, !1);
  }
  return gu(p, l, void 0, l.y + 1, !1);
}
function m0(p, m, l, y) {
  const z = "translate3d(" + m + "px," + p + "px, 0)";
  return {
    transform: z,
    WebkitTransform: z,
    MozTransform: z,
    msTransform: z,
    OTransform: z,
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function y0(p, m, l, y) {
  const z = "translate3d(" + m * -1 + "px," + p + "px, 0)";
  return {
    transform: z,
    WebkitTransform: z,
    MozTransform: z,
    msTransform: z,
    OTransform: z,
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function b0(p, m, l, y) {
  return {
    top: p + "px",
    left: m + "px",
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function x0(p, m, l, y) {
  return {
    top: p + "px",
    right: m + "px",
    width: l + "px",
    height: y + "px",
    position: "absolute"
  };
}
function Tf(p) {
  return Array.from(p).sort(function(m, l) {
    return m.y === l.y && m.x === l.x ? 0 : m.y > l.y || m.y === l.y && m.x > l.x ? 1 : -1;
  });
}
function w0(p, m) {
  m = m || "Layout";
  const l = ["x", "y", "w", "h"], y = [];
  if (!Array.isArray(p)) throw new Error(m + " must be an array!");
  for (let z = 0, O = p.length; z < O; z++) {
    const F = p[z];
    for (let D = 0; D < l.length; D++)
      if (typeof F[l[D]] != "number")
        throw new Error(
          "VueGridLayout: " + m + "[" + z + "]." + l[D] + " must be a number!"
        );
    if (F.i === void 0 || F.i === null)
      throw new Error("VueGridLayout: " + m + "[" + z + "].i cannot be null!");
    if (typeof F.i != "number" && typeof F.i != "string")
      throw new Error("VueGridLayout: " + m + "[" + z + "].i must be a string or number!");
    if (y.indexOf(F.i) >= 0)
      throw new Error("VueGridLayout: " + m + "[" + z + "].i must be unique!");
    if (y.push(F.i), F.static !== void 0 && typeof F.static != "boolean")
      throw new Error("VueGridLayout: " + m + "[" + z + "].static must be a boolean!");
  }
}
function _0(p, m = "vgl") {
  const l = () => `${m}-${p}`;
  return {
    b: l,
    be: (y) => `${l()}__${y}`,
    bm: (y) => `${l()}--${y}`,
    bem: (y, z) => `${l()}__${y}--${z}`
  };
}
function bc(p) {
  return S0(p);
}
function S0(p) {
  var m;
  const l = ((m = p.target) == null ? void 0 : m.offsetParent) || document.body, y = p.offsetParent === document.body ? { left: 0, top: 0 } : l.getBoundingClientRect(), z = p.clientX + l.scrollLeft - y.left, O = p.clientY + l.scrollTop - y.top;
  return { x: z, y: O };
}
function xc(p, m, l, y) {
  return E0(p) ? {
    deltaX: l - p,
    deltaY: y - m,
    lastX: p,
    lastY: m,
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
function E0(p) {
  return typeof p == "number" && !Number.isNaN(p);
}
function T0(p, m) {
  const l = Rf(p);
  let y = l[0];
  for (let z = 1, O = l.length; z < O; z++) {
    const F = l[z];
    m > p[F] && (y = F);
  }
  return y;
}
function Of(p, m) {
  if (!m[p])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + p + " is missing!"
    );
  return m[p];
}
function O0(p, m, l, y, z, O, F) {
  if (m[y]) return hu(m[y]);
  let D = p;
  const E = Rf(l), V = E.slice(E.indexOf(y));
  for (let oe = 0, j = V.length; oe < j; oe++) {
    const Fe = V[oe];
    if (m[Fe]) {
      D = m[Fe];
      break;
    }
  }
  return D = hu(D || []), ei(v0(D, { cols: O }), F);
}
function Rf(p) {
  return Object.keys(p).sort((m, l) => p[m] - p[l]);
}
let R0 = "auto";
function I0() {
  return typeof document < "u";
}
function wc() {
  return I0() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : R0;
}
var rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function If(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var Hi = { exports: {} }, A0 = Hi.exports, _c;
function M0() {
  return _c || (_c = 1, (function(p, m) {
    (function(l, y) {
      p.exports = y();
    })(A0, (function() {
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
      function z(r) {
        return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
          return typeof n;
        } : function(n) {
          return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, z(r);
      }
      function O(r, n) {
        if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function F(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, He(a.key), a);
        }
      }
      function D(r, n, o) {
        return n && F(r.prototype, n), Object.defineProperty(r, "prototype", { writable: !1 }), r;
      }
      function E(r, n, o) {
        return (n = He(n)) in r ? Object.defineProperty(r, n, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[n] = o, r;
      }
      function V(r, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(n && n.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), n && j(r, n);
      }
      function oe(r) {
        return oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }, oe(r);
      }
      function j(r, n) {
        return j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, a) {
          return o.__proto__ = a, o;
        }, j(r, n);
      }
      function Fe(r) {
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
          var o, a = oe(r);
          if (n) {
            var u = oe(this).constructor;
            o = Reflect.construct(a, arguments, u);
          } else o = a.apply(this, arguments);
          return (function(c, d) {
            if (d && (typeof d == "object" || typeof d == "function")) return d;
            if (d !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return Fe(c);
          })(this, o);
        };
      }
      function be() {
        return be = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(r, n, o) {
          var a = (function(c, d) {
            for (; !Object.prototype.hasOwnProperty.call(c, d) && (c = oe(c)) !== null; ) ;
            return c;
          })(r, n);
          if (a) {
            var u = Object.getOwnPropertyDescriptor(a, n);
            return u.get ? u.get.call(arguments.length < 3 ? r : o) : u.value;
          }
        }, be.apply(this, arguments);
      }
      function He(r) {
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
      var Be = function(r) {
        return !(!r || !r.Window) && r instanceof r.Window;
      }, Ne = void 0, Ce = void 0;
      function xe(r) {
        Ne = r;
        var n = r.document.createTextNode("");
        n.ownerDocument !== r.document && typeof r.wrap == "function" && r.wrap(n) === n && (r = r.wrap(r)), Ce = r;
      }
      function Oe(r) {
        return Be(r) ? r : (r.ownerDocument || r).defaultView || Ce.window;
      }
      typeof window < "u" && window && xe(window);
      var ze = function(r) {
        return !!r && z(r) === "object";
      }, We = function(r) {
        return typeof r == "function";
      }, P = { window: function(r) {
        return r === Ce || Be(r);
      }, docFrag: function(r) {
        return ze(r) && r.nodeType === 11;
      }, object: ze, func: We, number: function(r) {
        return typeof r == "number";
      }, bool: function(r) {
        return typeof r == "boolean";
      }, string: function(r) {
        return typeof r == "string";
      }, element: function(r) {
        if (!r || z(r) !== "object") return !1;
        var n = Oe(r) || Ce;
        return /object|function/.test(typeof Element > "u" ? "undefined" : z(Element)) ? r instanceof Element || r instanceof n.Element : r.nodeType === 1 && typeof r.nodeName == "string";
      }, plainObject: function(r) {
        return ze(r) && !!r.constructor && /function Object\b/.test(r.constructor.toString());
      }, array: function(r) {
        return ze(r) && r.length !== void 0 && We(r.splice);
      } };
      function Re(r) {
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
      }, listeners: { "interactions:before-action-move": Re, "interactions:action-resume": Re, "interactions:action-move": Se, "auto-start:check": function(r) {
        var n = r.interaction, o = r.interactable, a = r.buttons, u = o.options.drag;
        if (u && u.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || (a & o.options.drag.mouseButtons) != 0)) return r.action = { name: "drag", axis: u.lockAxis === "start" ? u.startAxis : u.lockAxis }, !1;
      } }, draggable: function(r) {
        return P.object(r) ? (this.options.drag.enabled = r.enabled !== !1, this.setPerAction("drag", r), this.setOnEvents("drag", r), /^(xy|x|y|start)$/.test(r.lockAxis) && (this.options.drag.lockAxis = r.lockAxis), /^(xy|x|y)$/.test(r.startAxis) && (this.options.drag.startAxis = r.startAxis), this) : P.bool(r) ? (this.options.drag.enabled = r, this) : this.options.drag;
      }, beforeMove: Re, move: Se, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(r) {
        return r.search("drag") === 0;
      } }, G = Ye, ie = { init: function(r) {
        var n = r;
        ie.document = n.document, ie.DocumentFragment = n.DocumentFragment || te, ie.SVGElement = n.SVGElement || te, ie.SVGSVGElement = n.SVGSVGElement || te, ie.SVGElementInstance = n.SVGElementInstance || te, ie.Element = n.Element || te, ie.HTMLElement = n.HTMLElement || ie.Element, ie.Event = n.Event, ie.Touch = n.Touch || te, ie.PointerEvent = n.PointerEvent || n.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function te() {
      }
      var we = ie, he = { init: function(r) {
        var n = we.Element, o = r.navigator || {};
        he.supportsTouch = "ontouchstart" in r || P.func(r.DocumentTouch) && we.document instanceof r.DocumentTouch, he.supportsPointerEvent = o.pointerEnabled !== !1 && !!we.PointerEvent, he.isIOS = /iP(hone|od|ad)/.test(o.platform), he.isIOS7 = /iP(hone|od|ad)/.test(o.platform) && /OS 7[^\d]/.test(o.appVersion), he.isIe9 = /MSIE 9/.test(o.userAgent), he.isOperaMobile = o.appName === "Opera" && he.supportsTouch && /Presto/.test(o.userAgent), he.prefixedMatchesSelector = "matches" in n.prototype ? "matches" : "webkitMatchesSelector" in n.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in n.prototype ? "mozMatchesSelector" : "oMatchesSelector" in n.prototype ? "oMatchesSelector" : "msMatchesSelector", he.pEventTypes = he.supportsPointerEvent ? we.PointerEvent === r.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, he.wheelEvent = we.document && "onmousewheel" in we.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, Ie = he;
      function ue(r, n) {
        if (r.contains) return r.contains(n);
        for (; n; ) {
          if (n === r) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      function je(r, n) {
        for (; P.element(r); ) {
          if (Ke(r, n)) return r;
          r = $e(r);
        }
        return null;
      }
      function $e(r) {
        var n = r.parentNode;
        if (P.docFrag(n)) {
          for (; (n = n.host) && P.docFrag(n); ) ;
          return n;
        }
        return n;
      }
      function Ke(r, n) {
        return Ce !== Ne && (n = n.replace(/\/deep\//g, " ")), r[Ie.prefixedMatchesSelector](n);
      }
      var Ae = function(r) {
        return r.parentNode || r.host;
      };
      function Dt(r, n) {
        for (var o, a = [], u = r; (o = Ae(u)) && u !== n && o !== u.ownerDocument; ) a.unshift(u), u = o;
        return a;
      }
      function ft(r, n, o) {
        for (; P.element(r); ) {
          if (Ke(r, n)) return !0;
          if ((r = $e(r)) === o) return Ke(r, n);
        }
        return !1;
      }
      function zn(r) {
        return r.correspondingUseElement || r;
      }
      function st(r) {
        var n = r instanceof we.SVGElement ? r.getBoundingClientRect() : r.getClientRects()[0];
        return n && { left: n.left, right: n.right, top: n.top, bottom: n.bottom, width: n.width || n.right - n.left, height: n.height || n.bottom - n.top };
      }
      function Je(r) {
        var n, o = st(r);
        if (!Ie.isIOS7 && o) {
          var a = { x: (n = (n = Oe(r)) || Ce).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
          o.left += a.x, o.right += a.x, o.top += a.y, o.bottom += a.y;
        }
        return o;
      }
      function cn(r) {
        for (var n = []; r; ) n.push(r), r = $e(r);
        return n;
      }
      function xt(r) {
        return !!P.string(r) && (we.document.querySelector(r), !0);
      }
      function J(r, n) {
        for (var o in n) r[o] = n[o];
        return r;
      }
      function qt(r, n, o) {
        return r === "parent" ? $e(o) : r === "self" ? n.getRect(o) : je(o, r);
      }
      function Et(r, n, o, a) {
        var u = r;
        return P.string(u) ? u = qt(u, n, o) : P.func(u) && (u = u.apply(void 0, a)), P.element(u) && (u = Je(u)), u;
      }
      function wt(r) {
        return r && { x: "x" in r ? r.x : r.left, y: "y" in r ? r.y : r.top };
      }
      function Zt(r) {
        return !r || "x" in r && "y" in r || ((r = J({}, r)).x = r.left || 0, r.y = r.top || 0, r.width = r.width || (r.right || 0) - r.x, r.height = r.height || (r.bottom || 0) - r.y), r;
      }
      function it(r, n, o) {
        r.left && (n.left += o.x), r.right && (n.right += o.x), r.top && (n.top += o.y), r.bottom && (n.bottom += o.y), n.width = n.right - n.left, n.height = n.bottom - n.top;
      }
      function Tt(r, n, o) {
        var a = o && r.options[o];
        return wt(Et(a && a.origin || r.options.origin, r, n, [r && n])) || { x: 0, y: 0 };
      }
      function Ut(r, n) {
        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(b) {
          return !0;
        }, a = arguments.length > 3 ? arguments[3] : void 0;
        if (a = a || {}, P.string(r) && r.search(" ") !== -1 && (r = ht(r)), P.array(r)) return r.forEach((function(b) {
          return Ut(b, n, o, a);
        })), a;
        if (P.object(r) && (n = r, r = ""), P.func(n) && o(r)) a[r] = a[r] || [], a[r].push(n);
        else if (P.array(n)) for (var u = 0, c = n; u < c.length; u++) {
          var d = c[u];
          Ut(r, d, o, a);
        }
        else if (P.object(n)) for (var g in n)
          Ut(ht(g).map((function(b) {
            return "".concat(r).concat(b);
          })), n[g], o, a);
        return a;
      }
      function ht(r) {
        return r.trim().split(/ +/);
      }
      var Ht = function(r, n) {
        return Math.sqrt(r * r + n * n);
      }, ir = ["webkit", "moz"];
      function Ot(r, n) {
        r.__set || (r.__set = {});
        var o = function(u) {
          if (ir.some((function(c) {
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
      function Y(r, n) {
        r.page = r.page || {}, r.page.x = n.page.x, r.page.y = n.page.y, r.client = r.client || {}, r.client.x = n.client.x, r.client.y = n.client.y, r.timeStamp = n.timeStamp;
      }
      function Q(r) {
        r.page.x = 0, r.page.y = 0, r.client.x = 0, r.client.y = 0;
      }
      function k(r) {
        return r instanceof we.Event || r instanceof we.Touch;
      }
      function ee(r, n, o) {
        return r = r || "page", (o = o || {}).x = n[r + "X"], o.y = n[r + "Y"], o;
      }
      function ne(r, n) {
        return n = n || { x: 0, y: 0 }, Ie.isOperaMobile && k(r) ? (ee("screen", r, n), n.x += window.scrollX, n.y += window.scrollY) : ee("page", r, n), n;
      }
      function ce(r) {
        return P.number(r.pointerId) ? r.pointerId : r.identifier;
      }
      function fe(r, n, o) {
        var a = n.length > 1 ? ae(n) : n[0];
        ne(a, r.page), (function(u, c) {
          c = c || {}, Ie.isOperaMobile && k(u) ? ee("screen", u, c) : ee("client", u, c);
        })(a, r.client), r.timeStamp = o;
      }
      function se(r) {
        var n = [];
        return P.array(r) ? (n[0] = r[0], n[1] = r[1]) : r.type === "touchend" ? r.touches.length === 1 ? (n[0] = r.touches[0], n[1] = r.changedTouches[0]) : r.touches.length === 0 && (n[0] = r.changedTouches[0], n[1] = r.changedTouches[1]) : (n[0] = r.touches[0], n[1] = r.touches[1]), n;
      }
      function ae(r) {
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
      function ut(r, n) {
        var o = n + "X", a = n + "Y", u = se(r), c = u[0][o] - u[1][o], d = u[0][a] - u[1][a];
        return Ht(c, d);
      }
      function gt(r, n) {
        var o = n + "X", a = n + "Y", u = se(r), c = u[1][o] - u[0][o], d = u[1][a] - u[0][a];
        return 180 * Math.atan2(d, c) / Math.PI;
      }
      function jt(r) {
        return P.string(r.pointerType) ? r.pointerType : P.number(r.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][r.pointerType] : /touch/.test(r.type || "") || r instanceof we.Touch ? "touch" : "mouse";
      }
      function Jt(r) {
        var n = P.func(r.composedPath) ? r.composedPath() : r.path;
        return [zn(n ? n[0] : r.target), zn(r.currentTarget)];
      }
      var Qt = (function() {
        function r(n) {
          O(this, r), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = n;
        }
        return D(r, [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), r;
      })();
      Object.defineProperty(Qt.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var xn = function(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          r.push(a);
        }
        return r;
      }, wn = function(r) {
        return xn([], r);
      }, fn = function(r, n) {
        for (var o = 0; o < r.length; o++) if (n(r[o], o, r)) return o;
        return -1;
      }, or = function(r, n) {
        return r[fn(r, n)];
      }, Gn = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c) {
          var d;
          O(this, o), (d = n.call(this, u._interaction)).dropzone = void 0, d.dragEvent = void 0, d.relatedTarget = void 0, d.draggable = void 0, d.propagationStopped = !1, d.immediatePropagationStopped = !1;
          var g = c === "dragleave" ? a.prev : a.cur, b = g.element, S = g.dropzone;
          return d.type = c, d.target = b, d.currentTarget = b, d.dropzone = S, d.dragEvent = u, d.relatedTarget = u.target, d.draggable = u.interactable, d.timeStamp = u.timeStamp, d;
        }
        return D(o, [{ key: "reject", value: function() {
          var a = this, u = this._interaction.dropState;
          if (this.type === "dropactivate" || this.dropzone && u.cur.dropzone === this.dropzone && u.cur.element === this.target) if (u.prev.dropzone = this.dropzone, u.prev.element = this.target, u.rejected = !0, u.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var c = u.activeDrops, d = fn(c, (function(b) {
              var S = b.dropzone, x = b.element;
              return S === a.dropzone && x === a.target;
            }));
            u.activeDrops.splice(d, 1);
            var g = new o(u, this.dragEvent, "dropdeactivate");
            g.dropzone = this.dropzone, g.target = this.target, this.dropzone.fire(g);
          } else this.dropzone.fire(new o(u, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), o;
      })(Qt);
      function ri(r, n) {
        for (var o = 0, a = r.slice(); o < a.length; o++) {
          var u = a[o], c = u.dropzone, d = u.element;
          n.dropzone = c, n.target = d, c.fire(n), n.propagationStopped = n.immediatePropagationStopped = !1;
        }
      }
      function zr(r, n) {
        for (var o = (function(c, d) {
          for (var g = [], b = 0, S = c.interactables.list; b < S.length; b++) {
            var x = S[b];
            if (x.options.drop.enabled) {
              var R = x.options.drop.accept;
              if (!(P.element(R) && R !== d || P.string(R) && !Ke(d, R) || P.func(R) && !R({ dropzone: x, draggableElement: d }))) for (var C = 0, U = x.getAllElements(); C < U.length; C++) {
                var N = U[C];
                N !== d && g.push({ dropzone: x, element: N, rect: x.getRect(N) });
              }
            }
          }
          return g;
        })(r, n), a = 0; a < o.length; a++) {
          var u = o[a];
          u.rect = u.dropzone.getRect(u.element);
        }
        return o;
      }
      function Qi(r, n, o) {
        for (var a = r.dropState, u = r.interactable, c = r.element, d = [], g = 0, b = a.activeDrops; g < b.length; g++) {
          var S = b[g], x = S.dropzone, R = S.element, C = S.rect, U = x.dropCheck(n, o, u, c, R, C);
          d.push(U ? R : null);
        }
        var N = (function(H) {
          for (var Z, X, w, M = [], I = 0; I < H.length; I++) {
            var L = H[I], $ = H[Z];
            if (L && I !== Z) if ($) {
              var ve = Ae(L), ye = Ae($);
              if (ve !== L.ownerDocument) if (ye !== L.ownerDocument) if (ve !== ye) {
                M = M.length ? M : Dt($);
                var Ee = void 0;
                if ($ instanceof we.HTMLElement && L instanceof we.SVGElement && !(L instanceof we.SVGSVGElement)) {
                  if (L === ye) continue;
                  Ee = L.ownerSVGElement;
                } else Ee = L;
                for (var At = Dt(Ee, $.ownerDocument), gn = 0; At[gn] && At[gn] === M[gn]; ) gn++;
                var mt = [At[gn - 1], At[gn], M[gn]];
                if (mt[0]) for (var Tn = mt[0].lastChild; Tn; ) {
                  if (Tn === mt[1]) {
                    Z = I, M = At;
                    break;
                  }
                  if (Tn === mt[2]) break;
                  Tn = Tn.previousSibling;
                }
              } else w = $, (parseInt(Oe(X = L).getComputedStyle(X).zIndex, 10) || 0) >= (parseInt(Oe(w).getComputedStyle(w).zIndex, 10) || 0) && (Z = I);
              else Z = I;
            } else Z = I;
          }
          return Z;
        })(d);
        return a.activeDrops[N] || null;
      }
      function ii(r, n, o) {
        var a = r.dropState, u = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return o.type === "dragstart" && (u.activate = new Gn(a, o, "dropactivate"), u.activate.target = null, u.activate.dropzone = null), o.type === "dragend" && (u.deactivate = new Gn(a, o, "dropdeactivate"), u.deactivate.target = null, u.deactivate.dropzone = null), a.rejected || (a.cur.element !== a.prev.element && (a.prev.dropzone && (u.leave = new Gn(a, o, "dragleave"), o.dragLeave = u.leave.target = a.prev.element, o.prevDropzone = u.leave.dropzone = a.prev.dropzone), a.cur.dropzone && (u.enter = new Gn(a, o, "dragenter"), o.dragEnter = a.cur.element, o.dropzone = a.cur.dropzone)), o.type === "dragend" && a.cur.dropzone && (u.drop = new Gn(a, o, "drop"), o.dropzone = a.cur.dropzone, o.relatedTarget = a.cur.element), o.type === "dragmove" && a.cur.dropzone && (u.move = new Gn(a, o, "dropmove"), o.dropzone = a.cur.dropzone)), u;
      }
      function oi(r, n) {
        var o = r.dropState, a = o.activeDrops, u = o.cur, c = o.prev;
        n.leave && c.dropzone.fire(n.leave), n.enter && u.dropzone.fire(n.enter), n.move && u.dropzone.fire(n.move), n.drop && u.dropzone.fire(n.drop), n.deactivate && ri(a, n.deactivate), o.prev.dropzone = u.dropzone, o.prev.element = u.element;
      }
      function eo(r, n) {
        var o = r.interaction, a = r.iEvent, u = r.event;
        if (a.type === "dragmove" || a.type === "dragend") {
          var c = o.dropState;
          n.dynamicDrop && (c.activeDrops = zr(n, o.element));
          var d = a, g = Qi(o, d, u);
          c.rejected = c.rejected && !!g && g.dropzone === c.cur.dropzone && g.element === c.cur.element, c.cur.dropzone = g && g.dropzone, c.cur.element = g && g.element, c.events = ii(o, 0, d);
        }
      }
      var ai = { id: "actions/drop", install: function(r) {
        var n = r.actions, o = r.interactStatic, a = r.Interactable, u = r.defaults;
        r.usePlugin(G), a.prototype.dropzone = function(c) {
          return (function(d, g) {
            if (P.object(g)) {
              if (d.options.drop.enabled = g.enabled !== !1, g.listeners) {
                var b = Ut(g.listeners), S = Object.keys(b).reduce((function(R, C) {
                  return R[/^(enter|leave)/.test(C) ? "drag".concat(C) : /^(activate|deactivate|move)/.test(C) ? "drop".concat(C) : C] = b[C], R;
                }), {}), x = d.options.drop.listeners;
                x && d.off(x), d.on(S), d.options.drop.listeners = S;
              }
              return P.func(g.ondrop) && d.on("drop", g.ondrop), P.func(g.ondropactivate) && d.on("dropactivate", g.ondropactivate), P.func(g.ondropdeactivate) && d.on("dropdeactivate", g.ondropdeactivate), P.func(g.ondragenter) && d.on("dragenter", g.ondragenter), P.func(g.ondragleave) && d.on("dragleave", g.ondragleave), P.func(g.ondropmove) && d.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? d.options.drop.overlap = g.overlap : P.number(g.overlap) && (d.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (d.options.drop.accept = g.accept), "checker" in g && (d.options.drop.checker = g.checker), d;
            }
            return P.bool(g) ? (d.options.drop.enabled = g, d) : d.options.drop;
          })(this, c);
        }, a.prototype.dropCheck = function(c, d, g, b, S, x) {
          return (function(R, C, U, N, H, Z, X) {
            var w = !1;
            if (!(X = X || R.getRect(Z))) return !!R.options.drop.checker && R.options.drop.checker(C, U, w, R, Z, N, H);
            var M = R.options.drop.overlap;
            if (M === "pointer") {
              var I = Tt(N, H, "drag"), L = ne(C);
              L.x += I.x, L.y += I.y;
              var $ = L.x > X.left && L.x < X.right, ve = L.y > X.top && L.y < X.bottom;
              w = $ && ve;
            }
            var ye = N.getRect(H);
            if (ye && M === "center") {
              var Ee = ye.left + ye.width / 2, At = ye.top + ye.height / 2;
              w = Ee >= X.left && Ee <= X.right && At >= X.top && At <= X.bottom;
            }
            return ye && P.number(M) && (w = Math.max(0, Math.min(X.right, ye.right) - Math.max(X.left, ye.left)) * Math.max(0, Math.min(X.bottom, ye.bottom) - Math.max(X.top, ye.top)) / (ye.width * ye.height) >= M), R.options.drop.checker && (w = R.options.drop.checker(C, U, w, R, Z, N, H)), w;
          })(this, c, d, g, b, S, x);
        }, o.dynamicDrop = function(c) {
          return P.bool(c) ? (r.dynamicDrop = c, o) : r.dynamicDrop;
        }, J(n.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), n.methodDict.drop = "dropzone", r.dynamicDrop = !1, u.actions.drop = ai.defaults;
      }, listeners: { "interactions:before-action-start": function(r) {
        var n = r.interaction;
        n.prepared.name === "drag" && (n.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(r, n) {
        var o = r.interaction, a = (r.event, r.iEvent);
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          u.activeDrops = [], u.events = {}, u.activeDrops = zr(n, o.element), u.events = ii(o, 0, a), u.events.activate && (ri(u.activeDrops, u.events.activate), n.fire("actions/drop:start", { interaction: o, dragEvent: a }));
        }
      }, "interactions:action-move": eo, "interactions:after-action-move": function(r, n) {
        var o = r.interaction, a = r.iEvent;
        if (o.prepared.name === "drag") {
          var u = o.dropState;
          oi(o, u.events), n.fire("actions/drop:move", { interaction: o, dragEvent: a }), u.events = {};
        }
      }, "interactions:action-end": function(r, n) {
        if (r.interaction.prepared.name === "drag") {
          var o = r.interaction, a = r.iEvent;
          eo(r, n), oi(o, o.dropState.events), n.fire("actions/drop:end", { interaction: o, dragEvent: a });
        }
      }, "interactions:stop": function(r) {
        var n = r.interaction;
        if (n.prepared.name === "drag") {
          var o = n.dropState;
          o && (o.activeDrops = null, o.events = null, o.cur.dropzone = null, o.cur.element = null, o.prev.dropzone = null, o.prev.element = null, o.rejected = !1);
        }
      } }, getActiveDrops: zr, getDrop: Qi, getDropEvents: ii, fireDropEvents: oi, filterEventType: function(r) {
        return r.search("drag") === 0 || r.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, Sa = ai;
      function si(r) {
        var n = r.interaction, o = r.iEvent, a = r.phase;
        if (n.prepared.name === "gesture") {
          var u = n.pointers.map((function(S) {
            return S.pointer;
          })), c = a === "start", d = a === "end", g = n.interactable.options.deltaSource;
          if (o.touches = [u[0], u[1]], c) o.distance = ut(u, g), o.box = et(u), o.scale = 1, o.ds = 0, o.angle = gt(u, g), o.da = 0, n.gesture.startDistance = o.distance, n.gesture.startAngle = o.angle;
          else if (d || n.pointers.length < 2) {
            var b = n.prevEvent;
            o.distance = b.distance, o.box = b.box, o.scale = b.scale, o.ds = 0, o.angle = b.angle, o.da = 0;
          } else o.distance = ut(u, g), o.box = et(u), o.scale = o.distance / n.gesture.startDistance, o.angle = gt(u, g), o.ds = o.scale - n.gesture.scale, o.da = o.angle - n.gesture.angle;
          n.gesture.distance = o.distance, n.gesture.angle = o.angle, P.number(o.scale) && o.scale !== 1 / 0 && !isNaN(o.scale) && (n.gesture.scale = o.scale);
        }
      }
      var ui = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(r) {
        var n = r.actions, o = r.Interactable, a = r.defaults;
        o.prototype.gesturable = function(u) {
          return P.object(u) ? (this.options.gesture.enabled = u.enabled !== !1, this.setPerAction("gesture", u), this.setOnEvents("gesture", u), this) : P.bool(u) ? (this.options.gesture.enabled = u, this) : this.options.gesture;
        }, n.map.gesture = ui, n.methodDict.gesture = "gesturable", a.actions.gesture = ui.defaults;
      }, listeners: { "interactions:action-start": si, "interactions:action-move": si, "interactions:action-end": si, "interactions:new": function(r) {
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
      } }, li = ui;
      function Ea(r, n, o, a, u, c, d) {
        if (!n) return !1;
        if (n === !0) {
          var g = P.number(c.width) ? c.width : c.right - c.left, b = P.number(c.height) ? c.height : c.bottom - c.top;
          if (d = Math.min(d, Math.abs((r === "left" || r === "right" ? g : b) / 2)), g < 0 && (r === "left" ? r = "right" : r === "right" && (r = "left")), b < 0 && (r === "top" ? r = "bottom" : r === "bottom" && (r = "top")), r === "left") {
            var S = g >= 0 ? c.left : c.right;
            return o.x < S + d;
          }
          if (r === "top") {
            var x = b >= 0 ? c.top : c.bottom;
            return o.y < x + d;
          }
          if (r === "right") return o.x > (g >= 0 ? c.right : c.left) - d;
          if (r === "bottom") return o.y > (b >= 0 ? c.bottom : c.top) - d;
        }
        return !!P.element(a) && (P.element(n) ? n === a : ft(a, n, u));
      }
      function Pr(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "resize" && o.resizeAxes) {
          var a = n;
          o.interactable.options.resize.square ? (o.resizeAxes === "y" ? a.delta.x = a.delta.y : a.delta.y = a.delta.x, a.axes = "xy") : (a.axes = o.resizeAxes, o.resizeAxes === "x" ? a.delta.y = 0 : o.resizeAxes === "y" && (a.delta.x = 0));
        }
      }
      var dn, Pn, pn = { id: "actions/resize", before: ["actions/drag"], install: function(r) {
        var n = r.actions, o = r.browser, a = r.Interactable, u = r.defaults;
        pn.cursors = (function(c) {
          return c.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        })(o), pn.defaultMargin = o.supportsTouch || o.supportsPointerEvent ? 20 : 10, a.prototype.resizable = function(c) {
          return (function(d, g, b) {
            return P.object(g) ? (d.options.resize.enabled = g.enabled !== !1, d.setPerAction("resize", g), d.setOnEvents("resize", g), P.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? d.options.resize.axis = g.axis : g.axis === null && (d.options.resize.axis = b.defaults.actions.resize.axis), P.bool(g.preserveAspectRatio) ? d.options.resize.preserveAspectRatio = g.preserveAspectRatio : P.bool(g.square) && (d.options.resize.square = g.square), d) : P.bool(g) ? (d.options.resize.enabled = g, d) : d.options.resize;
          })(this, c, r);
        }, n.map.resize = pn, n.methodDict.resize = "resizable", u.actions.resize = pn.defaults;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(r) {
        (function(n) {
          var o = n.iEvent, a = n.interaction;
          if (a.prepared.name === "resize" && a.prepared.edges) {
            var u = o, c = a.rect;
            a._rects = { start: J({}, c), corrected: J({}, c), previous: J({}, c), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, u.edges = a.prepared.edges, u.rect = a._rects.corrected, u.deltaRect = a._rects.delta;
          }
        })(r), Pr(r);
      }, "interactions:action-move": function(r) {
        (function(n) {
          var o = n.iEvent, a = n.interaction;
          if (a.prepared.name === "resize" && a.prepared.edges) {
            var u = o, c = a.interactable.options.resize.invert, d = c === "reposition" || c === "negate", g = a.rect, b = a._rects, S = b.start, x = b.corrected, R = b.delta, C = b.previous;
            if (J(C, x), d) {
              if (J(x, g), c === "reposition") {
                if (x.top > x.bottom) {
                  var U = x.top;
                  x.top = x.bottom, x.bottom = U;
                }
                if (x.left > x.right) {
                  var N = x.left;
                  x.left = x.right, x.right = N;
                }
              }
            } else x.top = Math.min(g.top, S.bottom), x.bottom = Math.max(g.bottom, S.top), x.left = Math.min(g.left, S.right), x.right = Math.max(g.right, S.left);
            for (var H in x.width = x.right - x.left, x.height = x.bottom - x.top, x) R[H] = x[H] - C[H];
            u.edges = a.prepared.edges, u.rect = x, u.deltaRect = R;
          }
        })(r), Pr(r);
      }, "interactions:action-end": function(r) {
        var n = r.iEvent, o = r.interaction;
        if (o.prepared.name === "resize" && o.prepared.edges) {
          var a = n;
          a.edges = o.prepared.edges, a.rect = o._rects.corrected, a.deltaRect = o._rects.delta;
        }
      }, "auto-start:check": function(r) {
        var n = r.interaction, o = r.interactable, a = r.element, u = r.rect, c = r.buttons;
        if (u) {
          var d = J({}, n.coords.cur.page), g = o.options.resize;
          if (g && g.enabled && (!n.pointerIsDown || !/mouse|pointer/.test(n.pointerType) || (c & g.mouseButtons) != 0)) {
            if (P.object(g.edges)) {
              var b = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var S in b) b[S] = Ea(S, g.edges[S], d, n._latestPointer.eventTarget, a, u, g.margin || pn.defaultMargin);
              b.left = b.left && !b.right, b.top = b.top && !b.bottom, (b.left || b.right || b.top || b.bottom) && (r.action = { name: "resize", edges: b });
            } else {
              var x = g.axis !== "y" && d.x > u.right - pn.defaultMargin, R = g.axis !== "x" && d.y > u.bottom - pn.defaultMargin;
              (x || R) && (r.action = { name: "resize", axes: (x ? "x" : "") + (R ? "y" : "") });
            }
            return !r.action && void 0;
          }
        }
      } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(r) {
        var n = r.edges, o = r.axis, a = r.name, u = pn.cursors, c = null;
        if (o) c = u[a + o];
        else if (n) {
          for (var d = "", g = 0, b = ["top", "bottom", "left", "right"]; g < b.length; g++) {
            var S = b[g];
            n[S] && (d += S);
          }
          c = u[d];
        }
        return c;
      }, filterEventType: function(r) {
        return r.search("resize") === 0;
      }, defaultMargin: null }, Ta = pn, Oa = { id: "actions", install: function(r) {
        r.usePlugin(li), r.usePlugin(Ta), r.usePlugin(G), r.usePlugin(Sa);
      } }, to = 0, _n = { request: function(r) {
        return dn(r);
      }, cancel: function(r) {
        return Pn(r);
      }, init: function(r) {
        if (dn = r.requestAnimationFrame, Pn = r.cancelAnimationFrame, !dn) for (var n = ["ms", "moz", "webkit", "o"], o = 0; o < n.length; o++) {
          var a = n[o];
          dn = r["".concat(a, "RequestAnimationFrame")], Pn = r["".concat(a, "CancelAnimationFrame")] || r["".concat(a, "CancelRequestAnimationFrame")];
        }
        dn = dn && dn.bind(r), Pn = Pn && Pn.bind(r), dn || (dn = function(u) {
          var c = Date.now(), d = Math.max(0, 16 - (c - to)), g = r.setTimeout((function() {
            u(c + d);
          }), d);
          return to = c + d, g;
        }, Pn = function(u) {
          return clearTimeout(u);
        });
      } }, ge = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(r) {
        ge.isScrolling = !0, _n.cancel(ge.i), r.autoScroll = ge, ge.interaction = r, ge.prevTime = ge.now(), ge.i = _n.request(ge.scroll);
      }, stop: function() {
        ge.isScrolling = !1, ge.interaction && (ge.interaction.autoScroll = null), _n.cancel(ge.i);
      }, scroll: function() {
        var r = ge.interaction, n = r.interactable, o = r.element, a = r.prepared.name, u = n.options[a].autoScroll, c = ci(u.container, n, o), d = ge.now(), g = (d - ge.prevTime) / 1e3, b = u.speed * g;
        if (b >= 1) {
          var S = { x: ge.x * b, y: ge.y * b };
          if (S.x || S.y) {
            var x = no(c);
            P.window(c) ? c.scrollBy(S.x, S.y) : c && (c.scrollLeft += S.x, c.scrollTop += S.y);
            var R = no(c), C = { x: R.x - x.x, y: R.y - x.y };
            (C.x || C.y) && n.fire({ type: "autoscroll", target: o, interactable: n, delta: C, interaction: r, container: c });
          }
          ge.prevTime = d;
        }
        ge.isScrolling && (_n.cancel(ge.i), ge.i = _n.request(ge.scroll));
      }, check: function(r, n) {
        var o;
        return (o = r.options[n].autoScroll) == null ? void 0 : o.enabled;
      }, onInteractionMove: function(r) {
        var n = r.interaction, o = r.pointer;
        if (n.interacting() && ge.check(n.interactable, n.prepared.name)) if (n.simulation) ge.x = ge.y = 0;
        else {
          var a, u, c, d, g = n.interactable, b = n.element, S = n.prepared.name, x = g.options[S].autoScroll, R = ci(x.container, g, b);
          if (P.window(R)) d = o.clientX < ge.margin, a = o.clientY < ge.margin, u = o.clientX > R.innerWidth - ge.margin, c = o.clientY > R.innerHeight - ge.margin;
          else {
            var C = st(R);
            d = o.clientX < C.left + ge.margin, a = o.clientY < C.top + ge.margin, u = o.clientX > C.right - ge.margin, c = o.clientY > C.bottom - ge.margin;
          }
          ge.x = u ? 1 : d ? -1 : 0, ge.y = c ? 1 : a ? -1 : 0, ge.isScrolling || (ge.margin = x.margin, ge.speed = x.speed, ge.start(n));
        }
      } };
      function ci(r, n, o) {
        return (P.string(r) ? qt(r, n, o) : r) || Oe(o);
      }
      function no(r) {
        return P.window(r) && (r = window.document.body), { x: r.scrollLeft, y: r.scrollTop };
      }
      var Ra = { id: "auto-scroll", install: function(r) {
        var n = r.defaults, o = r.actions;
        r.autoScroll = ge, ge.now = function() {
          return r.now();
        }, o.phaselessTypes.autoscroll = !0, n.perAction.autoScroll = ge.defaults;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.autoScroll = null;
      }, "interactions:destroy": function(r) {
        r.interaction.autoScroll = null, ge.stop(), ge.interaction && (ge.interaction = null);
      }, "interactions:stop": ge.stop, "interactions:action-move": function(r) {
        return ge.onInteractionMove(r);
      } } }, Ia = Ra;
      function ar(r, n) {
        var o = !1;
        return function() {
          return o || (Ce.console.warn(n), o = !0), r.apply(this, arguments);
        };
      }
      function fi(r, n) {
        return r.name = n.name, r.axis = n.axis, r.edges = n.edges, r;
      }
      function Aa(r) {
        return P.bool(r) ? (this.options.styleCursor = r, this) : r === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function Cr(r) {
        return P.func(r) ? (this.options.actionChecker = r, this) : r === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var Ma = { id: "auto-start/interactableMethods", install: function(r) {
        var n = r.Interactable;
        n.prototype.getAction = function(o, a, u, c) {
          var d = (function(g, b, S, x, R) {
            var C = g.getRect(x), U = b.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[b.button], N = { action: null, interactable: g, interaction: S, element: x, rect: C, buttons: U };
            return R.fire("auto-start:check", N), N.action;
          })(this, a, u, c, r);
          return this.options.actionChecker ? this.options.actionChecker(o, a, d, this, c, u) : d;
        }, n.prototype.ignoreFrom = ar((function(o) {
          return this._backCompatOption("ignoreFrom", o);
        }), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), n.prototype.allowFrom = ar((function(o) {
          return this._backCompatOption("allowFrom", o);
        }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), n.prototype.actionChecker = Cr, n.prototype.styleCursor = Aa;
      } };
      function sr(r, n, o, a, u) {
        return n.testIgnoreAllow(n.options[r.name], o, a) && n.options[r.name].enabled && ur(n, o, r, u) ? r : null;
      }
      function za(r, n, o, a, u, c, d) {
        for (var g = 0, b = a.length; g < b; g++) {
          var S = a[g], x = u[g], R = S.getAction(n, o, r, x);
          if (R) {
            var C = sr(R, S, x, c, d);
            if (C) return { action: C, interactable: S, element: x };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function ro(r, n, o, a, u) {
        var c = [], d = [], g = a;
        function b(x) {
          c.push(x), d.push(g);
        }
        for (; P.element(g); ) {
          c = [], d = [], u.interactables.forEachMatch(g, b);
          var S = za(r, n, o, c, d, a, u);
          if (S.action && !S.interactable.options[S.action.name].manualStart) return S;
          g = $e(g);
        }
        return { action: null, interactable: null, element: null };
      }
      function io(r, n, o) {
        var a = n.action, u = n.interactable, c = n.element;
        a = a || { name: null }, r.interactable = u, r.element = c, fi(r.prepared, a), r.rect = u && a.name ? u.getRect(c) : null, oo(r, o), o.fire("autoStart:prepared", { interaction: r });
      }
      function ur(r, n, o, a) {
        var u = r.options, c = u[o.name].max, d = u[o.name].maxPerElement, g = a.autoStart.maxInteractions, b = 0, S = 0, x = 0;
        if (!(c && d && g)) return !1;
        for (var R = 0, C = a.interactions.list; R < C.length; R++) {
          var U = C[R], N = U.prepared.name;
          if (U.interacting() && (++b >= g || U.interactable === r && ((S += N === o.name ? 1 : 0) >= c || U.element === n && (x++, N === o.name && x >= d))))
            return !1;
        }
        return g > 0;
      }
      function di(r, n) {
        return P.number(r) ? (n.autoStart.maxInteractions = r, this) : n.autoStart.maxInteractions;
      }
      function kr(r, n, o) {
        var a = o.autoStart.cursorElement;
        a && a !== r && (a.style.cursor = ""), r.ownerDocument.documentElement.style.cursor = n, r.style.cursor = n, o.autoStart.cursorElement = n ? r : null;
      }
      function oo(r, n) {
        var o = r.interactable, a = r.element, u = r.prepared;
        if (r.pointerType === "mouse" && o && o.options.styleCursor) {
          var c = "";
          if (u.name) {
            var d = o.options[u.name].cursorChecker;
            c = P.func(d) ? d(u, o, a, r._interacting) : n.actions.map[u.name].getCursor(u);
          }
          kr(r.element, c || "", n);
        } else n.autoStart.cursorElement && kr(n.autoStart.cursorElement, "", n);
      }
      var Pa = { id: "auto-start/base", before: ["actions"], install: function(r) {
        var n = r.interactStatic, o = r.defaults;
        r.usePlugin(Ma), o.base.actionChecker = null, o.base.styleCursor = !0, J(o.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), n.maxInteractions = function(a) {
          return di(a, r);
        }, r.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: ur, cursorElement: null };
      }, listeners: { "interactions:down": function(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget;
        o.interacting() || io(o, ro(o, a, u, c, n), n);
      }, "interactions:move": function(r, n) {
        (function(o, a) {
          var u = o.interaction, c = o.pointer, d = o.event, g = o.eventTarget;
          u.pointerType !== "mouse" || u.pointerIsDown || u.interacting() || io(u, ro(u, c, d, g, a), a);
        })(r, n), (function(o, a) {
          var u = o.interaction;
          if (u.pointerIsDown && !u.interacting() && u.pointerWasMoved && u.prepared.name) {
            a.fire("autoStart:before-start", o);
            var c = u.interactable, d = u.prepared.name;
            d && c && (c.options[d].manualStart || !ur(c, u.element, u.prepared, a) ? u.stop() : (u.start(u.prepared, c, u.element), oo(u, a)));
          }
        })(r, n);
      }, "interactions:stop": function(r, n) {
        var o = r.interaction, a = o.interactable;
        a && a.options.styleCursor && kr(o.element, "", n);
      } }, maxInteractions: di, withinInteractionLimit: ur, validateAction: sr }, pi = Pa, Ca = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(r, n) {
        var o = r.interaction, a = r.eventTarget, u = r.dx, c = r.dy;
        if (o.prepared.name === "drag") {
          var d = Math.abs(u), g = Math.abs(c), b = o.interactable.options.drag, S = b.startAxis, x = d > g ? "x" : d < g ? "y" : "xy";
          if (o.prepared.axis = b.lockAxis === "start" ? x[0] : b.lockAxis, x !== "xy" && S !== "xy" && S !== x) {
            o.prepared.name = null;
            for (var R = a, C = function(N) {
              if (N !== o.interactable) {
                var H = o.interactable.options.drag;
                if (!H.manualStart && N.testIgnoreAllow(H, R, a)) {
                  var Z = N.getAction(o.downPointer, o.downEvent, o, R);
                  if (Z && Z.name === "drag" && (function(X, w) {
                    if (!w) return !1;
                    var M = w.options.drag.startAxis;
                    return X === "xy" || M === "xy" || M === X;
                  })(x, N) && pi.validateAction(Z, N, R, a, n)) return N;
                }
              }
            }; P.element(R); ) {
              var U = n.interactables.forEachMatch(R, C);
              if (U) {
                o.prepared.name = "drag", o.interactable = U, o.element = R;
                break;
              }
              R = $e(R);
            }
          }
        }
      } } };
      function Dr(r) {
        var n = r.prepared && r.prepared.name;
        if (!n) return null;
        var o = r.interactable.options;
        return o[n].hold || o[n].delay;
      }
      var ao = { id: "auto-start/hold", install: function(r) {
        var n = r.defaults;
        r.usePlugin(pi), n.perAction.hold = 0, n.perAction.delay = 0;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(r) {
        var n = r.interaction, o = Dr(n);
        o > 0 && (n.autoStartHoldTimer = setTimeout((function() {
          n.start(n.prepared, n.interactable, n.element);
        }), o));
      }, "interactions:move": function(r) {
        var n = r.interaction, o = r.duplicate;
        n.autoStartHoldTimer && n.pointerWasMoved && !o && (clearTimeout(n.autoStartHoldTimer), n.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(r) {
        var n = r.interaction;
        Dr(n) > 0 && (n.prepared.name = null);
      } }, getHoldDuration: Dr }, so = ao, hi = { id: "auto-start", install: function(r) {
        r.usePlugin(pi), r.usePlugin(so), r.usePlugin(Ca);
      } }, ka = function(r) {
        return /^(always|never|auto)$/.test(r) ? (this.options.preventDefault = r, this) : P.bool(r) ? (this.options.preventDefault = r ? "always" : "never", this) : this.options.preventDefault;
      };
      function uo(r) {
        var n = r.interaction, o = r.event;
        n.interactable && n.interactable.checkAndPreventDefault(o);
      }
      var lr = { id: "core/interactablePreventDefault", install: function(r) {
        var n = r.Interactable;
        n.prototype.preventDefault = ka, n.prototype.checkAndPreventDefault = function(o) {
          return (function(a, u, c) {
            var d = a.options.preventDefault;
            if (d !== "never") if (d !== "always") {
              if (u.events.supportsPassive && /^touch(start|move)$/.test(c.type)) {
                var g = Oe(c.target).document, b = u.getDocOptions(g);
                if (!b || !b.events || b.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(c.type) || P.element(c.target) && Ke(c.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || c.preventDefault();
            } else c.preventDefault();
          })(this, r, o);
        }, r.interactions.docEvents.push({ type: "dragstart", listener: function(o) {
          for (var a = 0, u = r.interactions.list; a < u.length; a++) {
            var c = u[a];
            if (c.element && (c.element === o.target || ue(c.element, o.target))) return void c.interactable.checkAndPreventDefault(o);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce((function(r, n) {
        return r["interactions:".concat(n)] = uo, r;
      }), {}) };
      function cr(r, n) {
        if (n.phaselessTypes[r]) return !0;
        for (var o in n.map) if (r.indexOf(o) === 0 && r.substr(o.length) in n.phases) return !0;
        return !1;
      }
      function Yn(r) {
        var n = {};
        for (var o in r) {
          var a = r[o];
          P.plainObject(a) ? n[o] = Yn(a) : P.array(a) ? n[o] = wn(a) : n[o] = a;
        }
        return n;
      }
      var Lr = (function() {
        function r(n) {
          O(this, r), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = n, this.result = fr(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return D(r, [{ key: "start", value: function(n, o) {
          var a, u, c = n.phase, d = this.interaction, g = (function(S) {
            var x = S.interactable.options[S.prepared.name], R = x.modifiers;
            return R && R.length ? R : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function(C) {
              var U = x[C];
              return U && U.enabled && { options: U, methods: U._methods };
            })).filter((function(C) {
              return !!C;
            }));
          })(d);
          this.prepareStates(g), this.startEdges = J({}, d.edges), this.edges = J({}, this.startEdges), this.startOffset = (a = d.rect, u = o, a ? { left: u.x - a.left, top: u.y - a.top, right: a.right - u.x, bottom: a.bottom - u.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var b = this.fillArg({ phase: c, pageCoords: o, preEnd: !1 });
          return this.result = fr(), this.startAll(b), this.result = this.setAll(b);
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
          for (var g = u ? this.states.slice(u) : this.states, b = fr(n.coords, n.rect), S = 0; S < g.length; S++) {
            var x, R = g[S], C = R.options, U = J({}, n.coords), N = null;
            (x = R.methods) != null && x.set && this.shouldDo(C, a, o) && (n.state = R, N = R.methods.set(n), it(n.edges, n.rect, { x: n.coords.x - U.x, y: n.coords.y - U.y })), b.eventProps.push(N);
          }
          J(this.edges, n.edges), b.delta.x = n.coords.x - n.pageCoords.x, b.delta.y = n.coords.y - n.pageCoords.y, b.rectDelta.left = n.rect.left - c.left, b.rectDelta.right = n.rect.right - c.right, b.rectDelta.top = n.rect.top - c.top, b.rectDelta.bottom = n.rect.bottom - c.bottom;
          var H = this.result.coords, Z = this.result.rect;
          if (H && Z) {
            var X = b.rect.left !== Z.left || b.rect.right !== Z.right || b.rect.top !== Z.top || b.rect.bottom !== Z.bottom;
            b.changed = X || H.x !== b.coords.x || H.y !== b.coords.y;
          }
          return b;
        } }, { key: "applyToInteraction", value: function(n) {
          var o = this.interaction, a = n.phase, u = o.coords.cur, c = o.coords.start, d = this.result, g = this.startDelta, b = d.delta;
          a === "start" && J(this.startDelta, d.delta);
          for (var S = 0, x = [[c, g], [u, b]]; S < x.length; S++) {
            var R = x[S], C = R[0], U = R[1];
            C.page.x += U.x, C.page.y += U.y, C.client.x += U.x, C.client.y += U.y;
          }
          var N = this.result.rectDelta, H = n.rect || o.rect;
          H.left += N.left, H.right += N.right, H.top += N.top, H.bottom += N.bottom, H.width = H.right - H.left, H.height = H.bottom - H.top;
        } }, { key: "setAndApply", value: function(n) {
          var o = this.interaction, a = n.phase, u = n.preEnd, c = n.skipModifiers, d = this.setAll(this.fillArg({ preEnd: u, phase: a, pageCoords: n.modifiedCoords || o.coords.cur.page }));
          if (this.result = d, !d.changed && (!c || c < this.states.length) && o.interacting()) return !1;
          if (n.modifiedCoords) {
            var g = o.coords.cur.page, b = { x: n.modifiedCoords.x - g.x, y: n.modifiedCoords.y - g.y };
            d.coords.x += b.x, d.coords.y += b.y, d.delta.x += b.x, d.delta.y += b.y;
          }
          this.applyToInteraction(n);
        } }, { key: "beforeEnd", value: function(n) {
          var o = n.interaction, a = n.event, u = this.states;
          if (u && u.length) {
            for (var c = !1, d = 0; d < u.length; d++) {
              var g = u[d];
              n.state = g;
              var b = g.options, S = g.methods, x = S.beforeEnd && S.beforeEnd(n);
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
            for (var d = c.startDelta, g = c.result, b = g.delta, S = g.rectDelta, x = 0, R = [[a.start, d], [a.cur, b]]; x < R.length; x++) {
              var C = R[x], U = C[0], N = C[1];
              U.page.x -= N.x, U.page.y -= N.y, U.client.x -= N.x, U.client.y -= N.y;
            }
            u.left -= S.left, u.right -= S.right, u.top -= S.top, u.bottom -= S.bottom;
          }
        } }, { key: "shouldDo", value: function(n, o, a, u) {
          return !(!n || n.enabled === !1 || u && !n.endOnly || n.endOnly && !o || a === "start" && !n.setStart);
        } }, { key: "copyFrom", value: function(n) {
          this.startOffset = n.startOffset, this.startDelta = n.startDelta, this.startEdges = n.startEdges, this.edges = n.edges, this.states = n.states.map((function(o) {
            return Yn(o);
          })), this.result = fr(J({}, n.result.coords), J({}, n.result.rect));
        } }, { key: "destroy", value: function() {
          for (var n in this) this[n] = null;
        } }]), r;
      })();
      function fr(r, n) {
        return { rect: n, coords: r, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
      }
      function en(r, n) {
        var o = r.defaults, a = { start: r.start, set: r.set, beforeEnd: r.beforeEnd, stop: r.stop }, u = function(c) {
          var d = c || {};
          for (var g in d.enabled = d.enabled !== !1, o) g in d || (d[g] = o[g]);
          var b = { options: d, methods: a, name: n, enable: function() {
            return d.enabled = !0, b;
          }, disable: function() {
            return d.enabled = !1, b;
          } };
          return b;
        };
        return n && typeof n == "string" && (u._defaults = o, u._methods = a), u;
      }
      function dr(r) {
        var n = r.iEvent, o = r.interaction.modification.result;
        o && (n.modifiers = o.eventProps);
      }
      var lo = { id: "modifiers/base", before: ["actions"], install: function(r) {
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
      }, "interactions:action-start": dr, "interactions:action-move": dr, "interactions:action-end": dr, "interactions:after-action-start": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:after-action-move": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:stop": function(r) {
        return r.interaction.modification.stop(r);
      } } }, Br = lo, Wr = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, Sn = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c, d, g, b, S) {
          var x;
          O(this, o), (x = n.call(this, a)).relatedTarget = null, x.screenX = void 0, x.screenY = void 0, x.button = void 0, x.buttons = void 0, x.ctrlKey = void 0, x.shiftKey = void 0, x.altKey = void 0, x.metaKey = void 0, x.page = void 0, x.client = void 0, x.delta = void 0, x.rect = void 0, x.x0 = void 0, x.y0 = void 0, x.t0 = void 0, x.dt = void 0, x.duration = void 0, x.clientX0 = void 0, x.clientY0 = void 0, x.velocity = void 0, x.speed = void 0, x.swipe = void 0, x.axes = void 0, x.preEnd = void 0, g = g || a.element;
          var R = a.interactable, C = (R && R.options || Wr).deltaSource, U = Tt(R, g, c), N = d === "start", H = d === "end", Z = N ? Fe(x) : a.prevEvent, X = N ? a.coords.start : H ? { page: Z.page, client: Z.client, timeStamp: a.coords.cur.timeStamp } : a.coords.cur;
          return x.page = J({}, X.page), x.client = J({}, X.client), x.rect = J({}, a.rect), x.timeStamp = X.timeStamp, H || (x.page.x -= U.x, x.page.y -= U.y, x.client.x -= U.x, x.client.y -= U.y), x.ctrlKey = u.ctrlKey, x.altKey = u.altKey, x.shiftKey = u.shiftKey, x.metaKey = u.metaKey, x.button = u.button, x.buttons = u.buttons, x.target = g, x.currentTarget = g, x.preEnd = b, x.type = S || c + (d || ""), x.interactable = R, x.t0 = N ? a.pointers[a.pointers.length - 1].downTime : Z.t0, x.x0 = a.coords.start.page.x - U.x, x.y0 = a.coords.start.page.y - U.y, x.clientX0 = a.coords.start.client.x - U.x, x.clientY0 = a.coords.start.client.y - U.y, x.delta = N || H ? { x: 0, y: 0 } : { x: x[C].x - Z[C].x, y: x[C].y - Z[C].y }, x.dt = a.coords.delta.timeStamp, x.duration = x.timeStamp - x.t0, x.velocity = J({}, a.coords.velocity[C]), x.speed = Ht(x.velocity.x, x.velocity.y), x.swipe = H || d === "inertiastart" ? x.getSwipe() : null, x;
        }
        return D(o, [{ key: "getSwipe", value: function() {
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
      })(Qt);
      Object.defineProperties(Sn.prototype, { pageX: { get: function() {
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
      var co = D((function r(n, o, a, u, c) {
        O(this, r), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = n, this.pointer = o, this.event = a, this.downTime = u, this.downTarget = c;
      })), fo = (function(r) {
        return r.interactable = "", r.element = "", r.prepared = "", r.pointerIsDown = "", r.pointerWasMoved = "", r._proxy = "", r;
      })({}), po = (function(r) {
        return r.start = "", r.move = "", r.end = "", r.stop = "", r.interacting = "", r;
      })({}), ho = 0, go = (function() {
        function r(n) {
          var o = this, a = n.pointerType, u = n.scopeFire;
          O(this, r), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = ar((function(x) {
            this.move(x);
          }), "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = ho++, this._scopeFire = u, this.pointerType = a;
          var c = this;
          this._proxy = {};
          var d = function(x) {
            Object.defineProperty(o._proxy, x, { get: function() {
              return c[x];
            } });
          };
          for (var g in fo) d(g);
          var b = function(x) {
            Object.defineProperty(o._proxy, x, { value: function() {
              return c[x].apply(c, arguments);
            } });
          };
          for (var S in po) b(S);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return D(r, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(n, o, a) {
          var u = this.updatePointer(n, o, a, !0), c = this.pointers[u];
          this._scopeFire("interactions:down", { pointer: n, event: o, eventTarget: a, pointerIndex: u, pointerInfo: c, type: "down", interaction: this });
        } }, { key: "start", value: function(n, o, a) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (n.name === "gesture" ? 2 : 1) || !o.options[n.name].enabled) && (fi(this.prepared, n), this.interactable = o, this.element = a, this.rect = o.getRect(a), this.edges = this.prepared.edges ? J({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(n, o, a) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(n, o, a, !1);
          var u, c, d = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (u = this.coords.cur.client.x - this.coords.start.client.x, c = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Ht(u, c) > this.pointerMoveTolerance);
          var g, b, S, x = this.getPointerIndex(n), R = { pointer: n, pointerIndex: x, pointerInfo: this.pointers[x], event: o, type: "move", eventTarget: a, dx: u, dy: c, duplicate: d, interaction: this };
          d || (g = this.coords.velocity, b = this.coords.delta, S = Math.max(b.timeStamp / 1e3, 1e-3), g.page.x = b.page.x / S, g.page.y = b.page.y / S, g.client.x = b.client.x / S, g.client.y = b.client.y / S, g.timeStamp = S), this._scopeFire("interactions:move", R), d || this.simulation || (this.interacting() && (R.type = null, this.move(R)), this.pointerWasMoved && Y(this.coords.prev, this.coords.cur));
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
          var o = ce(n);
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : fn(this.pointers, (function(a) {
            return a.id === o;
          }));
        } }, { key: "getPointerInfo", value: function(n) {
          return this.pointers[this.getPointerIndex(n)];
        } }, { key: "updatePointer", value: function(n, o, a, u) {
          var c, d, g, b = ce(n), S = this.getPointerIndex(n), x = this.pointers[S];
          return u = u !== !1 && (u || /(down|start)$/i.test(o.type)), x ? x.pointer = n : (x = new co(b, n, o, null, null), S = this.pointers.length, this.pointers.push(x)), fe(this.coords.cur, this.pointers.map((function(R) {
            return R.pointer;
          })), this._now()), c = this.coords.delta, d = this.coords.prev, g = this.coords.cur, c.page.x = g.page.x - d.page.x, c.page.y = g.page.y - d.page.y, c.client.x = g.client.x - d.client.x, c.client.y = g.client.y - d.client.y, c.timeStamp = g.timeStamp - d.timeStamp, u && (this.pointerIsDown = !0, x.downTime = this.coords.cur.timeStamp, x.downTarget = a, Ot(this.downPointer, n), this.interacting() || (Y(this.coords.start, this.coords.cur), Y(this.coords.prev, this.coords.cur), this.downEvent = o, this.pointerWasMoved = !1)), this._updateLatestPointer(n, o, a), this._scopeFire("interactions:update-pointer", { pointer: n, event: o, eventTarget: a, down: u, pointerInfo: x, pointerIndex: S, interaction: this }), S;
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
          return new Sn(this, n, this.prepared.name, o, this.element, a, u);
        } }, { key: "_fireEvent", value: function(n) {
          var o;
          (o = this.interactable) == null || o.fire(n), (!this.prevEvent || n.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = n);
        } }, { key: "_doPhase", value: function(n) {
          var o = n.event, a = n.phase, u = n.preEnd, c = n.type, d = this.rect;
          if (d && a === "move" && (it(this.edges, d, this.coords.delta[this.interactable.options.deltaSource]), d.width = d.right - d.left, d.height = d.bottom - d.top), this._scopeFire("interactions:before-action-".concat(a), n) === !1) return !1;
          var g = n.iEvent = this._createPreparedEvent(o, a, u, c);
          return this._scopeFire("interactions:action-".concat(a), n), a === "start" && (this.prevEvent = g), this._fireEvent(g), this._scopeFire("interactions:after-action-".concat(a), n), !0;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), r;
      })();
      function gi(r) {
        vi(r.interaction);
      }
      function vi(r) {
        if (!(function(o) {
          return !(!o.offset.pending.x && !o.offset.pending.y);
        })(r)) return !1;
        var n = r.offset.pending;
        return mi(r.coords.cur, n), mi(r.coords.delta, n), it(r.edges, r.rect, n), n.x = 0, n.y = 0, !0;
      }
      function Da(r) {
        var n = r.x, o = r.y;
        this.offset.pending.x += n, this.offset.pending.y += o, this.offset.total.x += n, this.offset.total.y += o;
      }
      function mi(r, n) {
        var o = r.page, a = r.client, u = n.x, c = n.y;
        o.x += u, o.y += c, a.x += u, a.y += c;
      }
      po.offsetBy = "";
      var La = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(r) {
        r.Interaction.prototype.offsetBy = Da;
      }, listeners: { "interactions:new": function(r) {
        r.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(r) {
        return (function(n) {
          n.pointerIsDown && (mi(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
        })(r.interaction);
      }, "interactions:before-action-start": gi, "interactions:before-action-move": gi, "interactions:before-action-end": function(r) {
        var n = r.interaction;
        if (vi(n)) return n.move({ offset: !0 }), n.end(), !1;
      }, "interactions:stop": function(r) {
        var n = r.interaction;
        n.offset.total.x = 0, n.offset.total.y = 0, n.offset.pending.x = 0, n.offset.pending.y = 0;
      } } }, yi = La, Ba = (function() {
        function r(n) {
          O(this, r), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = n;
        }
        return D(r, [{ key: "start", value: function(n) {
          var o = this.interaction, a = Fr(o);
          if (!a || !a.enabled) return !1;
          var u = o.coords.velocity.client, c = Ht(u.x, u.y), d = this.modification || (this.modification = new Lr(o));
          if (d.copyFrom(o.modification), this.t0 = o._now(), this.allowResume = a.allowResume, this.v0 = c, this.currentOffset = { x: 0, y: 0 }, this.startCoords = o.coords.cur.page, this.modifierArg = d.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - o.coords.cur.timeStamp < 50 && c > a.minSpeed && c > a.endSpeed) this.startInertia();
          else {
            if (d.result = d.setAll(this.modifierArg), !d.result.changed) return !1;
            this.startSmoothEnd();
          }
          return o.modification.result.rect = null, o.offsetBy(this.targetOffset), o._doPhase({ interaction: o, event: n, phase: "inertiastart" }), o.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), o.modification.result.rect = null, this.active = !0, o.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var n = this, o = this.interaction.coords.velocity.client, a = Fr(this.interaction), u = a.resistance, c = -Math.log(a.endSpeed / this.v0) / u;
          this.targetOffset = { x: (o.x - c) / u, y: (o.y - c) / u }, this.te = c, this.lambda_v0 = u / this.v0, this.one_ve_v0 = 1 - a.endSpeed / this.v0;
          var d = this.modification, g = this.modifierArg;
          g.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, d.result = d.setAll(g), d.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + d.result.delta.x, y: this.targetOffset.y + d.result.delta.y }), this.onNextFrame((function() {
            return n.inertiaTick();
          }));
        } }, { key: "startSmoothEnd", value: function() {
          var n = this;
          this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame((function() {
            return n.smoothEndTick();
          }));
        } }, { key: "onNextFrame", value: function(n) {
          var o = this;
          this.timeout = _n.request((function() {
            o.active && n();
          }));
        } }, { key: "inertiaTick", value: function() {
          var n, o, a, u, c, d, g, b = this, S = this.interaction, x = Fr(S).resistance, R = (S._now() - this.t0) / 1e3;
          if (R < this.te) {
            var C, U = 1 - (Math.exp(-x * R) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (n = 0, o = 0, a = this.targetOffset.x, u = this.targetOffset.y, c = this.modifiedOffset.x, d = this.modifiedOffset.y, C = { x: vo(g = U, n, a, c), y: vo(g, o, u, d) }) : C = { x: this.targetOffset.x * U, y: this.targetOffset.y * U };
            var N = { x: C.x - this.currentOffset.x, y: C.y - this.currentOffset.y };
            this.currentOffset.x += N.x, this.currentOffset.y += N.y, S.offsetBy(N), S.move(), this.onNextFrame((function() {
              return b.inertiaTick();
            }));
          } else S.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var n = this, o = this.interaction, a = o._now() - this.t0, u = Fr(o).smoothEndDuration;
          if (a < u) {
            var c = { x: Nr(a, 0, this.targetOffset.x, u), y: Nr(a, 0, this.targetOffset.y, u) }, d = { x: c.x - this.currentOffset.x, y: c.y - this.currentOffset.y };
            this.currentOffset.x += d.x, this.currentOffset.y += d.y, o.offsetBy(d), o.move({ skipModifiers: this.modifierCount }), this.onNextFrame((function() {
              return n.smoothEndTick();
            }));
          } else o.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(n) {
          var o = n.pointer, a = n.event, u = n.eventTarget, c = this.interaction;
          c.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), c.updatePointer(o, a, u, !0), c._doPhase({ interaction: c, event: a, phase: "resume" }), Y(c.coords.prev, c.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, _n.cancel(this.timeout);
        } }]), r;
      })();
      function Fr(r) {
        var n = r.interactable, o = r.prepared;
        return n && n.options && o.name && n.options[o.name].inertia;
      }
      var Wa = { id: "inertia", before: ["modifiers", "actions"], install: function(r) {
        var n = r.defaults;
        r.usePlugin(yi), r.usePlugin(Br), r.actions.phases.inertiastart = !0, r.actions.phases.resume = !0, n.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(r) {
        var n = r.interaction;
        n.inertia = new Ba(n);
      }, "interactions:before-action-end": function(r) {
        var n = r.interaction, o = r.event;
        return (!n._interacting || n.simulation || !n.inertia.start(o)) && null;
      }, "interactions:down": function(r) {
        var n = r.interaction, o = r.eventTarget, a = n.inertia;
        if (a.active) for (var u = o; P.element(u); ) {
          if (u === n.element) {
            a.resume(r);
            break;
          }
          u = $e(u);
        }
      }, "interactions:stop": function(r) {
        var n = r.interaction.inertia;
        n.active && n.stop();
      }, "interactions:before-action-resume": function(r) {
        var n = r.interaction.modification;
        n.stop(r), n.start(r, r.interaction.coords.cur.page), n.applyToInteraction(r);
      }, "interactions:before-action-inertiastart": function(r) {
        return r.interaction.modification.setAndApply(r);
      }, "interactions:action-resume": dr, "interactions:action-inertiastart": dr, "interactions:after-action-inertiastart": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      }, "interactions:after-action-resume": function(r) {
        return r.interaction.modification.restoreInteractionCoords(r);
      } } };
      function vo(r, n, o, a) {
        var u = 1 - r;
        return u * u * n + 2 * u * r * o + r * r * a;
      }
      function Nr(r, n, o, a) {
        return -o * (r /= a) * (r - 2) + n;
      }
      var Fa = Wa;
      function mo(r, n) {
        for (var o = 0; o < n.length; o++) {
          var a = n[o];
          if (r.immediatePropagationStopped) break;
          a(r);
        }
      }
      var yo = (function() {
        function r(n) {
          O(this, r), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = J({}, n || {});
        }
        return D(r, [{ key: "fire", value: function(n) {
          var o, a = this.global;
          (o = this.types[n.type]) && mo(n, o), !n.propagationStopped && a && (o = a[n.type]) && mo(n, o);
        } }, { key: "on", value: function(n, o) {
          var a = Ut(n, o);
          for (n in a) this.types[n] = xn(this.types[n] || [], a[n]);
        } }, { key: "off", value: function(n, o) {
          var a = Ut(n, o);
          for (n in a) {
            var u = this.types[n];
            if (u && u.length) for (var c = 0, d = a[n]; c < d.length; c++) {
              var g = d[c], b = u.indexOf(g);
              b !== -1 && u.splice(b, 1);
            }
          }
        } }, { key: "getRect", value: function(n) {
          return null;
        } }]), r;
      })(), Na = (function() {
        function r(n) {
          O(this, r), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = n, Ot(this, n);
        }
        return D(r, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), r;
      })();
      function pr(r) {
        return P.object(r) ? { capture: !!r.capture, passive: !!r.passive } : { capture: !!r, passive: !1 };
      }
      function qe(r, n) {
        return r === n || (typeof r == "boolean" ? !!n.capture === r && !n.passive : !!r.capture == !!n.capture && !!r.passive == !!n.passive);
      }
      var Xe = { id: "events", install: function(r) {
        var n, o = [], a = {}, u = [], c = { add: d, remove: g, addDelegate: function(x, R, C, U, N) {
          var H = pr(N);
          if (!a[C]) {
            a[C] = [];
            for (var Z = 0; Z < u.length; Z++) {
              var X = u[Z];
              d(X, C, b), d(X, C, S, !0);
            }
          }
          var w = a[C], M = or(w, (function(I) {
            return I.selector === x && I.context === R;
          }));
          M || (M = { selector: x, context: R, listeners: [] }, w.push(M)), M.listeners.push({ func: U, options: H });
        }, removeDelegate: function(x, R, C, U, N) {
          var H, Z = pr(N), X = a[C], w = !1;
          if (X)
            for (H = X.length - 1; H >= 0; H--) {
              var M = X[H];
              if (M.selector === x && M.context === R) {
                for (var I = M.listeners, L = I.length - 1; L >= 0; L--) {
                  var $ = I[L];
                  if ($.func === U && qe($.options, Z)) {
                    I.splice(L, 1), I.length || (X.splice(H, 1), g(R, C, b), g(R, C, S, !0)), w = !0;
                    break;
                  }
                }
                if (w) break;
              }
            }
        }, delegateListener: b, delegateUseCapture: S, delegatedEvents: a, documents: u, targets: o, supportsOptions: !1, supportsPassive: !1 };
        function d(x, R, C, U) {
          if (x.addEventListener) {
            var N = pr(U), H = or(o, (function(Z) {
              return Z.eventTarget === x;
            }));
            H || (H = { eventTarget: x, events: {} }, o.push(H)), H.events[R] || (H.events[R] = []), or(H.events[R], (function(Z) {
              return Z.func === C && qe(Z.options, N);
            })) || (x.addEventListener(R, C, c.supportsOptions ? N : N.capture), H.events[R].push({ func: C, options: N }));
          }
        }
        function g(x, R, C, U) {
          if (x.addEventListener && x.removeEventListener) {
            var N = fn(o, (function(ve) {
              return ve.eventTarget === x;
            })), H = o[N];
            if (H && H.events) if (R !== "all") {
              var Z = !1, X = H.events[R];
              if (X) {
                if (C === "all") {
                  for (var w = X.length - 1; w >= 0; w--) {
                    var M = X[w];
                    g(x, R, M.func, M.options);
                  }
                  return;
                }
                for (var I = pr(U), L = 0; L < X.length; L++) {
                  var $ = X[L];
                  if ($.func === C && qe($.options, I)) {
                    x.removeEventListener(R, C, c.supportsOptions ? I : I.capture), X.splice(L, 1), X.length === 0 && (delete H.events[R], Z = !0);
                    break;
                  }
                }
              }
              Z && !Object.keys(H.events).length && o.splice(N, 1);
            } else for (R in H.events) H.events.hasOwnProperty(R) && g(x, R, "all");
          }
        }
        function b(x, R) {
          for (var C = pr(R), U = new Na(x), N = a[x.type], H = Jt(x)[0], Z = H; P.element(Z); ) {
            for (var X = 0; X < N.length; X++) {
              var w = N[X], M = w.selector, I = w.context;
              if (Ke(Z, M) && ue(I, H) && ue(I, Z)) {
                var L = w.listeners;
                U.currentTarget = Z;
                for (var $ = 0; $ < L.length; $++) {
                  var ve = L[$];
                  qe(ve.options, C) && ve.func(U);
                }
              }
            }
            Z = $e(Z);
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
      } }, bi = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(r) {
        for (var n = 0, o = bi.methodOrder; n < o.length; n++) {
          var a = o[n], u = bi[a](r);
          if (u) return u;
        }
        return null;
      }, simulationResume: function(r) {
        var n = r.pointerType, o = r.eventType, a = r.eventTarget, u = r.scope;
        if (!/down|start/i.test(o)) return null;
        for (var c = 0, d = u.interactions.list; c < d.length; c++) {
          var g = d[c], b = a;
          if (g.simulation && g.simulation.allowResume && g.pointerType === n) for (; b; ) {
            if (b === g.element) return g;
            b = $e(b);
          }
        }
        return null;
      }, mouseOrPen: function(r) {
        var n, o = r.pointerId, a = r.pointerType, u = r.eventType, c = r.scope;
        if (a !== "mouse" && a !== "pen") return null;
        for (var d = 0, g = c.interactions.list; d < g.length; d++) {
          var b = g[d];
          if (b.pointerType === a) {
            if (b.simulation && !bo(b, o)) continue;
            if (b.interacting()) return b;
            n || (n = b);
          }
        }
        if (n) return n;
        for (var S = 0, x = c.interactions.list; S < x.length; S++) {
          var R = x[S];
          if (!(R.pointerType !== a || /down/i.test(u) && R.simulation)) return R;
        }
        return null;
      }, hasPointer: function(r) {
        for (var n = r.pointerId, o = 0, a = r.scope.interactions.list; o < a.length; o++) {
          var u = a[o];
          if (bo(u, n)) return u;
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
      function bo(r, n) {
        return r.pointers.some((function(o) {
          return o.id === n;
        }));
      }
      var qa = bi, xi = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function xo(r, n) {
        return function(o) {
          var a = n.interactions.list, u = jt(o), c = Jt(o), d = c[0], g = c[1], b = [];
          if (/^touch/.test(o.type)) {
            n.prevTouchTime = n.now();
            for (var S = 0, x = o.changedTouches; S < x.length; S++) {
              var R = x[S], C = { pointer: R, pointerId: ce(R), pointerType: u, eventType: o.type, eventTarget: d, curEventTarget: g, scope: n }, U = wo(C);
              b.push([C.pointer, C.eventTarget, C.curEventTarget, U]);
            }
          } else {
            var N = !1;
            if (!Ie.supportsPointerEvent && /mouse/.test(o.type)) {
              for (var H = 0; H < a.length && !N; H++) N = a[H].pointerType !== "mouse" && a[H].pointerIsDown;
              N = N || n.now() - n.prevTouchTime < 500 || o.timeStamp === 0;
            }
            if (!N) {
              var Z = { pointer: o, pointerId: ce(o), pointerType: u, eventType: o.type, curEventTarget: g, eventTarget: d, scope: n }, X = wo(Z);
              b.push([Z.pointer, Z.eventTarget, Z.curEventTarget, X]);
            }
          }
          for (var w = 0; w < b.length; w++) {
            var M = b[w], I = M[0], L = M[1], $ = M[2];
            M[3][r](I, o, L, $);
          }
        };
      }
      function wo(r) {
        var n = r.pointerType, o = r.scope, a = { interaction: qa.search(r), searchDetails: r };
        return o.fire("interactions:find", a), a.interaction || o.interactions.new({ pointerType: n });
      }
      function qr(r, n) {
        var o = r.doc, a = r.scope, u = r.options, c = a.interactions.docEvents, d = a.events, g = d[n];
        for (var b in a.browser.isIOS && !u.events && (u.events = { passive: !1 }), d.delegatedEvents) g(o, b, d.delegateListener), g(o, b, d.delegateUseCapture, !0);
        for (var S = u && u.events, x = 0; x < c.length; x++) {
          var R = c[x];
          g(o, R.type, R.listener, S);
        }
      }
      var Ua = { id: "core/interactions", install: function(r) {
        for (var n = {}, o = 0; o < xi.length; o++) {
          var a = xi[o];
          n[a] = xo(a, r);
        }
        var u, c = Ie.pEventTypes;
        function d() {
          for (var g = 0, b = r.interactions.list; g < b.length; g++) {
            var S = b[g];
            if (S.pointerIsDown && S.pointerType === "touch" && !S._interacting) for (var x = function() {
              var U = C[R];
              r.documents.some((function(N) {
                return ue(N.doc, U.downTarget);
              })) || S.removePointer(U.pointer, U.event);
            }, R = 0, C = S.pointers; R < C.length; R++) x();
          }
        }
        (u = we.PointerEvent ? [{ type: c.down, listener: d }, { type: c.down, listener: n.pointerDown }, { type: c.move, listener: n.pointerMove }, { type: c.up, listener: n.pointerUp }, { type: c.cancel, listener: n.pointerUp }] : [{ type: "mousedown", listener: n.pointerDown }, { type: "mousemove", listener: n.pointerMove }, { type: "mouseup", listener: n.pointerUp }, { type: "touchstart", listener: d }, { type: "touchstart", listener: n.pointerDown }, { type: "touchmove", listener: n.pointerMove }, { type: "touchend", listener: n.pointerUp }, { type: "touchcancel", listener: n.pointerUp }]).push({ type: "blur", listener: function(g) {
          for (var b = 0, S = r.interactions.list; b < S.length; b++)
            S[b].documentBlur(g);
        } }), r.prevTouchTime = 0, r.Interaction = (function(g) {
          V(S, g);
          var b = me(S);
          function S() {
            return O(this, S), b.apply(this, arguments);
          }
          return D(S, [{ key: "pointerMoveTolerance", get: function() {
            return r.interactions.pointerMoveTolerance;
          }, set: function(x) {
            r.interactions.pointerMoveTolerance = x;
          } }, { key: "_now", value: function() {
            return r.now();
          } }]), S;
        })(go), r.interactions = { list: [], new: function(g) {
          g.scopeFire = function(S, x) {
            return r.fire(S, x);
          };
          var b = new r.Interaction(g);
          return r.interactions.list.push(b), b;
        }, listeners: n, docEvents: u, pointerMoveTolerance: 1 }, r.usePlugin(lr);
      }, listeners: { "scope:add-document": function(r) {
        return qr(r, "add");
      }, "scope:remove-document": function(r) {
        return qr(r, "remove");
      }, "interactable:unset": function(r, n) {
        for (var o = r.interactable, a = n.interactions.list.length - 1; a >= 0; a--) {
          var u = n.interactions.list[a];
          u.interactable === o && (u.stop(), n.fire("interactions:destroy", { interaction: u }), u.destroy(), n.interactions.list.length > 2 && n.interactions.list.splice(a, 1));
        }
      } }, onDocSignal: qr, doOnInteractions: xo, methodNames: xi }, lt = Ua, tn = (function(r) {
        return r[r.On = 0] = "On", r[r.Off = 1] = "Off", r;
      })(tn || {}), Cn = (function() {
        function r(n, o, a, u) {
          O(this, r), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new yo(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = o.actions, this.target = n, this._context = o.context || a, this._win = Oe(xt(n) ? this._context : n), this._doc = this._win.document, this._scopeEvents = u, this.set(o);
        }
        return D(r, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(n, o) {
          return P.func(o.onstart) && this.on("".concat(n, "start"), o.onstart), P.func(o.onmove) && this.on("".concat(n, "move"), o.onmove), P.func(o.onend) && this.on("".concat(n, "end"), o.onend), P.func(o.oninertiastart) && this.on("".concat(n, "inertiastart"), o.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(n, o, a) {
          var u, c = this, d = (u = this._actions.map[n]) == null ? void 0 : u.filterEventType, g = function(b) {
            return (d == null || d(b)) && cr(b, c._actions);
          };
          (P.array(o) || P.object(o)) && this._onOff(tn.Off, n, o, void 0, g), (P.array(a) || P.object(a)) && this._onOff(tn.On, n, a, void 0, g);
        } }, { key: "setPerAction", value: function(n, o) {
          var a = this._defaults;
          for (var u in o) {
            var c = u, d = this.options[n], g = o[c];
            c === "listeners" && this.updatePerActionListeners(n, d.listeners, g), P.array(g) ? d[c] = wn(g) : P.plainObject(g) ? (d[c] = J(d[c] || {}, Yn(g)), P.object(a.perAction[c]) && "enabled" in a.perAction[c] && (d[c].enabled = g.enabled !== !1)) : P.bool(g) && P.object(a.perAction[c]) ? d[c].enabled = g : d[c] = g;
          }
        } }, { key: "getRect", value: function(n) {
          return n = n || (P.element(this.target) ? this.target : null), P.string(this.target) && (n = n || this._context.querySelector(this.target)), Je(n);
        } }, { key: "rectChecker", value: function(n) {
          var o = this;
          return P.func(n) ? (this.getRect = function(a) {
            var u = J({}, n.apply(o, a));
            return "width" in u || (u.width = u.right - u.left, u.height = u.bottom - u.top), u;
          }, this) : n === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(n, o) {
          if (xt(o) || P.object(o)) {
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
          return P.string(n) ? Array.from(this._context.querySelectorAll(n)) : P.func(n) && n.getAllElements ? n.getAllElements() : P.element(n) ? [n] : [];
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(n) {
          return this._context === n.ownerDocument || ue(this._context, n);
        } }, { key: "testIgnoreAllow", value: function(n, o, a) {
          return !this.testIgnore(n.ignoreFrom, o, a) && this.testAllow(n.allowFrom, o, a);
        } }, { key: "testAllow", value: function(n, o, a) {
          return !n || !!P.element(a) && (P.string(n) ? ft(a, n, o) : !!P.element(n) && ue(n, a));
        } }, { key: "testIgnore", value: function(n, o, a) {
          return !(!n || !P.element(a)) && (P.string(n) ? ft(a, n, o) : !!P.element(n) && ue(n, a));
        } }, { key: "fire", value: function(n) {
          return this.events.fire(n), this;
        } }, { key: "_onOff", value: function(n, o, a, u, c) {
          P.object(o) && !P.array(o) && (u = a, a = null);
          var d = Ut(o, a, c);
          for (var g in d) {
            g === "wheel" && (g = Ie.wheelEvent);
            for (var b = 0, S = d[g]; b < S.length; b++) {
              var x = S[b];
              cr(g, this._actions) ? this.events[n === tn.On ? "on" : "off"](g, x) : P.string(this.target) ? this._scopeEvents[n === tn.On ? "addDelegate" : "removeDelegate"](this.target, this._context, g, x, u) : this._scopeEvents[n === tn.On ? "add" : "remove"](this.target, g, x, u);
            }
          }
          return this;
        } }, { key: "on", value: function(n, o, a) {
          return this._onOff(tn.On, n, o, a);
        } }, { key: "off", value: function(n, o, a) {
          return this._onOff(tn.Off, n, o, a);
        } }, { key: "set", value: function(n) {
          var o = this._defaults;
          for (var a in P.object(n) || (n = {}), this.options = Yn(o.base), this._actions.methodDict) {
            var u = a, c = this._actions.methodDict[u];
            this.options[u] = {}, this.setPerAction(u, J(J({}, o.perAction), o.actions[u])), this[c](n[u]);
          }
          for (var d in n) d !== "getRect" ? P.func(this[d]) && this[d](n[d]) : this.rectChecker(n.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (P.string(this.target)) for (var n in this._scopeEvents.delegatedEvents) for (var o = this._scopeEvents.delegatedEvents[n], a = o.length - 1; a >= 0; a--) {
            var u = o[a], c = u.selector, d = u.context, g = u.listeners;
            c === this.target && d === this._context && o.splice(a, 1);
            for (var b = g.length - 1; b >= 0; b--) this._scopeEvents.removeDelegate(this.target, this._context, n, g[b][0], g[b][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), r;
      })(), _o = (function() {
        function r(n) {
          var o = this;
          O(this, r), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = n, n.addListeners({ "interactable:unset": function(a) {
            var u = a.interactable, c = u.target, d = P.string(c) ? o.selectorMap[c] : c[o.scope.id], g = fn(d, (function(b) {
              return b === u;
            }));
            d.splice(g, 1);
          } });
        }
        return D(r, [{ key: "new", value: function(n, o) {
          o = J(o || {}, { actions: this.scope.actions });
          var a = new this.scope.Interactable(n, o, this.scope.document, this.scope.events);
          return this.scope.addDocument(a._doc), this.list.push(a), P.string(n) ? (this.selectorMap[n] || (this.selectorMap[n] = []), this.selectorMap[n].push(a)) : (a.target[this.scope.id] || Object.defineProperty(n, this.scope.id, { value: [], configurable: !0 }), n[this.scope.id].push(a)), this.scope.fire("interactable:new", { target: n, options: o, interactable: a, win: this.scope._win }), a;
        } }, { key: "getExisting", value: function(n, o) {
          var a = o && o.context || this.scope.document, u = P.string(n), c = u ? this.selectorMap[n] : n[this.scope.id];
          if (c) return or(c, (function(d) {
            return d._context === a && (u || d.inContext(n));
          }));
        } }, { key: "forEachMatch", value: function(n, o) {
          for (var a = 0, u = this.list; a < u.length; a++) {
            var c = u[a], d = void 0;
            if ((P.string(c.target) ? P.element(n) && Ke(n, c.target) : n === c.target) && c.inContext(n) && (d = o(c)), d !== void 0) return d;
          }
        } }]), r;
      })(), wi = (function() {
        function r() {
          var n = this;
          O(this, r), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = Ie, this.defaults = Yn(Wr), this.Eventable = yo, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = (function(a) {
            var u = function c(d, g) {
              var b = a.interactables.getExisting(d, g);
              return b || ((b = a.interactables.new(d, g)).events.global = c.globalEvents), b;
            };
            return u.getPointerAverage = ae, u.getTouchBBox = et, u.getTouchDistance = ut, u.getTouchAngle = gt, u.getElementRect = Je, u.getElementClientRect = st, u.matchesSelector = Ke, u.closest = je, u.globalEvents = {}, u.version = "1.10.27", u.scope = a, u.use = function(c, d) {
              return this.scope.usePlugin(c, d), this;
            }, u.isSet = function(c, d) {
              return !!this.scope.interactables.get(c, d && d.context);
            }, u.on = ar((function(c, d, g) {
              if (P.string(c) && c.search(" ") !== -1 && (c = c.trim().split(/ +/)), P.array(c)) {
                for (var b = 0, S = c; b < S.length; b++) {
                  var x = S[b];
                  this.on(x, d, g);
                }
                return this;
              }
              if (P.object(c)) {
                for (var R in c) this.on(R, c[R], d);
                return this;
              }
              return cr(c, this.scope.actions) ? this.globalEvents[c] ? this.globalEvents[c].push(d) : this.globalEvents[c] = [d] : this.scope.events.add(this.scope.document, c, d, { options: g }), this;
            }), "The interact.on() method is being deprecated"), u.off = ar((function(c, d, g) {
              if (P.string(c) && c.search(" ") !== -1 && (c = c.trim().split(/ +/)), P.array(c)) {
                for (var b = 0, S = c; b < S.length; b++) {
                  var x = S[b];
                  this.off(x, d, g);
                }
                return this;
              }
              if (P.object(c)) {
                for (var R in c) this.off(R, c[R], d);
                return this;
              }
              var C;
              return cr(c, this.scope.actions) ? c in this.globalEvents && (C = this.globalEvents[c].indexOf(d)) !== -1 && this.globalEvents[c].splice(C, 1) : this.scope.events.remove(this.scope.document, c, d, g), this;
            }), "The interact.off() method is being deprecated"), u.debug = function() {
              return this.scope;
            }, u.supportsTouch = function() {
              return Ie.supportsTouch;
            }, u.supportsPointerEvent = function() {
              return Ie.supportsPointerEvent;
            }, u.stop = function() {
              for (var c = 0, d = this.scope.interactions.list; c < d.length; c++) d[c].stop();
              return this;
            }, u.pointerMoveTolerance = function(c) {
              return P.number(c) ? (this.scope.interactions.pointerMoveTolerance = c, this) : this.scope.interactions.pointerMoveTolerance;
            }, u.addDocument = function(c, d) {
              this.scope.addDocument(c, d);
            }, u.removeDocument = function(c) {
              this.scope.removeDocument(c);
            }, u;
          })(this), this.InteractEvent = Sn, this.Interactable = void 0, this.interactables = new _o(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(a) {
            return n.removeDocument(a.target);
          };
          var o = this;
          this.Interactable = (function(a) {
            V(c, a);
            var u = me(c);
            function c() {
              return O(this, c), u.apply(this, arguments);
            }
            return D(c, [{ key: "_defaults", get: function() {
              return o.defaults;
            } }, { key: "set", value: function(d) {
              return be(oe(c.prototype), "set", this).call(this, d), o.fire("interactable:set", { options: d, interactable: this }), this;
            } }, { key: "unset", value: function() {
              be(oe(c.prototype), "unset", this).call(this);
              var d = o.interactables.list.indexOf(this);
              d < 0 || (o.interactables.list.splice(d, 1), o.fire("interactable:unset", { interactable: this }));
            } }]), c;
          })(Cn);
        }
        return D(r, [{ key: "addListeners", value: function(n, o) {
          this.listenerMaps.push({ id: o, map: n });
        } }, { key: "fire", value: function(n, o) {
          for (var a = 0, u = this.listenerMaps; a < u.length; a++) {
            var c = u[a].map[n];
            if (c && c(o, this, n) === !1) return !1;
          }
        } }, { key: "init", value: function(n) {
          return this.isInitialized ? this : (function(o, a) {
            return o.isInitialized = !0, P.window(a) && xe(a), we.init(a), Ie.init(a), _n.init(a), o.window = a, o.document = a.document, o.usePlugin(lt), o.usePlugin(Xe), o;
          })(this, n);
        } }, { key: "pluginIsInstalled", value: function(n) {
          var o = n.id;
          return o ? !!this._plugins.map[o] : this._plugins.list.indexOf(n) !== -1;
        } }, { key: "usePlugin", value: function(n, o) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(n)) return this;
          if (n.id && (this._plugins.map[n.id] = n), this._plugins.list.push(n), n.install && n.install(this, o), n.listeners && n.before) {
            for (var a = 0, u = this.listenerMaps.length, c = n.before.reduce((function(g, b) {
              return g[b] = !0, g[Rt(b)] = !0, g;
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
      var _i = new wi(), dt = _i.interactStatic, So = typeof globalThis < "u" ? globalThis : window;
      _i.init(So);
      var Eo = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(r) {
        var n = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function(a) {
          var u = a[0], c = a[1];
          return u in r || c in r;
        })), o = function(a, u) {
          for (var c = r.range, d = r.limits, g = d === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : d, b = r.offset, S = b === void 0 ? { x: 0, y: 0 } : b, x = { range: c, grid: r, x: null, y: null }, R = 0; R < n.length; R++) {
            var C = n[R], U = C[0], N = C[1], H = Math.round((a - S.x) / r[U]), Z = Math.round((u - S.y) / r[N]);
            x[U] = Math.max(g.left, Math.min(g.right, H * r[U] + S.x)), x[N] = Math.max(g.top, Math.min(g.bottom, Z * r[N] + S.y));
          }
          return x;
        };
        return o.grid = r, o.coordFields = n, o;
      } }), To = { id: "snappers", install: function(r) {
        var n = r.interactStatic;
        n.snappers = J(n.snappers || {}, Eo), n.createSnapGrid = n.snappers.grid;
      } }, Oo = To, It = { start: function(r) {
        var n = r.state, o = r.rect, a = r.edges, u = r.pageCoords, c = n.options, d = c.ratio, g = c.enabled, b = n.options, S = b.equalDelta, x = b.modifiers;
        d === "preserve" && (d = o.width / o.height), n.startCoords = J({}, u), n.startRect = J({}, o), n.ratio = d, n.equalDelta = S;
        var R = n.linkedEdges = { top: a.top || a.left && !a.bottom, left: a.left || a.top && !a.right, bottom: a.bottom || a.right && !a.top, right: a.right || a.bottom && !a.left };
        if (n.xIsPrimaryAxis = !(!a.left && !a.right), n.equalDelta) {
          var C = (R.left ? 1 : -1) * (R.top ? 1 : -1);
          n.edgeSign = { x: C, y: C };
        } else n.edgeSign = { x: R.left ? -1 : 1, y: R.top ? -1 : 1 };
        if (g !== !1 && J(a, R), x != null && x.length) {
          var U = new Lr(r.interaction);
          U.copyFrom(r.interaction.modification), U.prepareStates(x), n.subModification = U, U.startAll(y({}, r));
        }
      }, set: function(r) {
        var n = r.state, o = r.rect, a = r.coords, u = n.linkedEdges, c = J({}, a), d = n.equalDelta ? Ha : Lt;
        if (J(r.edges, u), d(n, n.xIsPrimaryAxis, a, o), !n.subModification) return null;
        var g = J({}, o);
        it(u, g, { x: a.x - c.x, y: a.y - c.y });
        var b = n.subModification.setAll(y(y({}, r), {}, { rect: g, edges: u, pageCoords: a, prevCoords: a, prevRect: g })), S = b.delta;
        return b.changed && (d(n, Math.abs(S.x) > Math.abs(S.y), b.coords, b.rect), J(a, b.coords)), b.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function Ha(r, n, o) {
        var a = r.startCoords, u = r.edgeSign;
        n ? o.y = a.y + (o.x - a.x) * u.y : o.x = a.x + (o.y - a.y) * u.x;
      }
      function Lt(r, n, o, a) {
        var u = r.startRect, c = r.startCoords, d = r.ratio, g = r.edgeSign;
        if (n) {
          var b = a.width / d;
          o.y = c.y + (b - u.height) * g.y;
        } else {
          var S = a.height * d;
          o.x = c.x + (S - u.width) * g.x;
        }
      }
      var $a = en(It, "aspectRatio"), Si = function() {
      };
      Si._defaults = {};
      var $t = Si;
      function nn(r, n, o) {
        return P.func(r) ? Et(r, n.interactable, n.element, [o.x, o.y, n]) : Et(r, n.interactable, n.element);
      }
      var Xn = { start: function(r) {
        var n = r.rect, o = r.startOffset, a = r.state, u = r.interaction, c = r.pageCoords, d = a.options, g = d.elementRect, b = J({ left: 0, top: 0, right: 0, bottom: 0 }, d.offset || {});
        if (n && g) {
          var S = nn(d.restriction, u, c);
          if (S) {
            var x = S.right - S.left - n.width, R = S.bottom - S.top - n.height;
            x < 0 && (b.left += x, b.right += x), R < 0 && (b.top += R, b.bottom += R);
          }
          b.left += o.left - n.width * g.left, b.top += o.top - n.height * g.top, b.right += o.right - n.width * (1 - g.right), b.bottom += o.bottom - n.height * (1 - g.bottom);
        }
        a.offset = b;
      }, set: function(r) {
        var n = r.coords, o = r.interaction, a = r.state, u = a.options, c = a.offset, d = nn(u.restriction, o, n);
        if (d) {
          var g = (function(b) {
            return !b || "left" in b && "top" in b || ((b = J({}, b)).left = b.x || 0, b.top = b.y || 0, b.right = b.right || b.left + b.width, b.bottom = b.bottom || b.top + b.height), b;
          })(d);
          n.x = Math.max(Math.min(g.right - c.right, n.x), g.left + c.left), n.y = Math.max(Math.min(g.bottom - c.bottom, n.y), g.top + c.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Ve = en(Xn, "restrict"), hn = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Ur = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function Ro(r, n) {
        for (var o = 0, a = ["top", "left", "bottom", "right"]; o < a.length; o++) {
          var u = a[o];
          u in r || (r[u] = n[u]);
        }
        return r;
      }
      var kn = { noInner: hn, noOuter: Ur, start: function(r) {
        var n, o = r.interaction, a = r.startOffset, u = r.state, c = u.options;
        c && (n = wt(nn(c.offset, o, o.coords.start.page))), n = n || { x: 0, y: 0 }, u.offset = { top: n.y + a.top, left: n.x + a.left, bottom: n.y - a.bottom, right: n.x - a.right };
      }, set: function(r) {
        var n = r.coords, o = r.edges, a = r.interaction, u = r.state, c = u.offset, d = u.options;
        if (o) {
          var g = J({}, n), b = nn(d.inner, a, g) || {}, S = nn(d.outer, a, g) || {};
          Ro(b, hn), Ro(S, Ur), o.top ? n.y = Math.min(Math.max(S.top + c.top, g.y), b.top + c.top) : o.bottom && (n.y = Math.max(Math.min(S.bottom + c.bottom, g.y), b.bottom + c.bottom)), o.left ? n.x = Math.min(Math.max(S.left + c.left, g.x), b.left + c.left) : o.right && (n.x = Math.max(Math.min(S.right + c.right, g.x), b.right + c.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Ga = en(kn, "restrictEdges"), Ya = J({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(r) {
      } }, Xn.defaults), Xa = en({ start: Xn.start, set: Xn.set, defaults: Ya }, "restrictRect"), Io = { width: -1 / 0, height: -1 / 0 }, Hr = { width: 1 / 0, height: 1 / 0 }, Kn = en({ start: function(r) {
        return kn.start(r);
      }, set: function(r) {
        var n = r.interaction, o = r.state, a = r.rect, u = r.edges, c = o.options;
        if (u) {
          var d = Zt(nn(c.min, n, r.coords)) || Io, g = Zt(nn(c.max, n, r.coords)) || Hr;
          o.options = { endOnly: c.endOnly, inner: J({}, kn.noInner), outer: J({}, kn.noOuter) }, u.top ? (o.options.inner.top = a.bottom - d.height, o.options.outer.top = a.bottom - g.height) : u.bottom && (o.options.inner.bottom = a.top + d.height, o.options.outer.bottom = a.top + g.height), u.left ? (o.options.inner.left = a.right - d.width, o.options.outer.left = a.right - g.width) : u.right && (o.options.inner.right = a.left + d.width, o.options.outer.right = a.left + g.width), kn.set(r), o.options = c;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), Ei = { start: function(r) {
        var n, o = r.interaction, a = r.interactable, u = r.element, c = r.rect, d = r.state, g = r.startOffset, b = d.options, S = b.offsetWithOrigin ? (function(C) {
          var U = C.interaction.element, N = wt(Et(C.state.options.origin, null, null, [U])), H = N || Tt(C.interactable, U, C.interaction.prepared.name);
          return H;
        })(r) : { x: 0, y: 0 };
        if (b.offset === "startCoords") n = { x: o.coords.start.page.x, y: o.coords.start.page.y };
        else {
          var x = Et(b.offset, a, u, [o]);
          (n = wt(x) || { x: 0, y: 0 }).x += S.x, n.y += S.y;
        }
        var R = b.relativePoints;
        d.offsets = c && R && R.length ? R.map((function(C, U) {
          return { index: U, relativePoint: C, x: g.left - c.width * C.x + n.x, y: g.top - c.height * C.y + n.y };
        })) : [{ index: 0, relativePoint: null, x: n.x, y: n.y }];
      }, set: function(r) {
        var n = r.interaction, o = r.coords, a = r.state, u = a.options, c = a.offsets, d = Tt(n.interactable, n.element, n.prepared.name), g = J({}, o), b = [];
        u.offsetWithOrigin || (g.x -= d.x, g.y -= d.y);
        for (var S = 0, x = c; S < x.length; S++) for (var R = x[S], C = g.x - R.x, U = g.y - R.y, N = 0, H = u.targets.length; N < H; N++) {
          var Z = u.targets[N], X = void 0;
          (X = P.func(Z) ? Z(C, U, n._proxy, R, N) : Z) && b.push({ x: (P.number(X.x) ? X.x : C) + R.x, y: (P.number(X.y) ? X.y : U) + R.y, range: P.number(X.range) ? X.range : u.range, source: Z, index: N, offset: R });
        }
        for (var w = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, M = 0; M < b.length; M++) {
          var I = b[M], L = I.range, $ = I.x - g.x, ve = I.y - g.y, ye = Ht($, ve), Ee = ye <= L;
          L === 1 / 0 && w.inRange && w.range !== 1 / 0 && (Ee = !1), w.target && !(Ee ? w.inRange && L !== 1 / 0 ? ye / L < w.distance / w.range : L === 1 / 0 && w.range !== 1 / 0 || ye < w.distance : !w.inRange && ye < w.distance) || (w.target = I, w.distance = ye, w.range = L, w.inRange = Ee, w.delta.x = $, w.delta.y = ve);
        }
        return w.inRange && (o.x = w.target.x, o.y = w.target.y), a.closest = w, w;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, Ao = en(Ei, "snap"), hr = { start: function(r) {
        var n = r.state, o = r.edges, a = n.options;
        if (!o) return null;
        r.state = { options: { targets: null, relativePoints: [{ x: o.left ? 0 : 1, y: o.top ? 0 : 1 }], offset: a.offset || "self", origin: { x: 0, y: 0 }, range: a.range } }, n.targetFields = n.targetFields || [["width", "height"], ["x", "y"]], Ei.start(r), n.offsets = r.state.offsets, r.state = n;
      }, set: function(r) {
        var n = r.interaction, o = r.state, a = r.coords, u = o.options, c = o.offsets, d = { x: a.x - c[0].x, y: a.y - c[0].y };
        o.options = J({}, u), o.options.targets = [];
        for (var g = 0, b = u.targets || []; g < b.length; g++) {
          var S = b[g], x = void 0;
          if (x = P.func(S) ? S(d.x, d.y, n) : S) {
            for (var R = 0, C = o.targetFields; R < C.length; R++) {
              var U = C[R], N = U[0], H = U[1];
              if (N in x || H in x) {
                x.x = x[N], x.y = x[H];
                break;
              }
            }
            o.options.targets.push(x);
          }
        }
        var Z = Ei.set(r);
        return o.options = u, Z;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, Ti = en(hr, "snapSize"), gr = { aspectRatio: $a, restrictEdges: Ga, restrict: Ve, restrictRect: Xa, restrictSize: Kn, snapEdges: en({ start: function(r) {
        var n = r.edges;
        return n ? (r.state.targetFields = r.state.targetFields || [[n.left ? "left" : "right", n.top ? "top" : "bottom"]], hr.start(r)) : null;
      }, set: hr.set, defaults: J(Yn(hr.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Ao, snapSize: Ti, spring: $t, avoid: $t, transform: $t, rubberband: $t }, Mo = { id: "modifiers", install: function(r) {
        var n = r.interactStatic;
        for (var o in r.usePlugin(Br), r.usePlugin(Oo), n.modifiers = gr, gr) {
          var a = gr[o], u = a._defaults, c = a._methods;
          u._methods = c, r.defaults.perAction[o] = u;
        }
      } }, Ka = Mo, $r = (function(r) {
        V(o, r);
        var n = me(o);
        function o(a, u, c, d, g, b) {
          var S;
          if (O(this, o), Ot(Fe(S = n.call(this, g)), c), c !== u && Ot(Fe(S), u), S.timeStamp = b, S.originalEvent = c, S.type = a, S.pointerId = ce(u), S.pointerType = jt(u), S.target = d, S.currentTarget = null, a === "tap") {
            var x = g.getPointerIndex(u);
            S.dt = S.timeStamp - g.pointers[x].downTime;
            var R = S.timeStamp - g.tapTime;
            S.double = !!g.prevTap && g.prevTap.type !== "doubletap" && g.prevTap.target === S.target && R < 500;
          } else a === "doubletap" && (S.dt = u.timeStamp - g.tapTime, S.double = !0);
          return S;
        }
        return D(o, [{ key: "_subtractOrigin", value: function(a) {
          var u = a.x, c = a.y;
          return this.pageX -= u, this.pageY -= c, this.clientX -= u, this.clientY -= c, this;
        } }, { key: "_addOrigin", value: function(a) {
          var u = a.x, c = a.y;
          return this.pageX += u, this.pageY += c, this.clientX += u, this.clientY += c, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), o;
      })(Qt), Dn = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(r) {
        r.pointerEvents = Dn, r.defaults.actions.pointerEvents = Dn.defaults, J(r.actions.phaselessTypes, Dn.types);
      }, listeners: { "interactions:new": function(r) {
        var n = r.interaction;
        n.prevTap = null, n.tapTime = 0;
      }, "interactions:update-pointer": function(r) {
        var n = r.down, o = r.pointerInfo;
        !n && o.hold || (o.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget;
        r.duplicate || o.pointerIsDown && !o.pointerWasMoved || (o.pointerIsDown && vt(r), En({ interaction: o, pointer: a, event: u, eventTarget: c, type: "move" }, n));
      }, "interactions:down": function(r, n) {
        (function(o, a) {
          for (var u = o.interaction, c = o.pointer, d = o.event, g = o.eventTarget, b = o.pointerIndex, S = u.pointers[b].hold, x = cn(g), R = { interaction: u, pointer: c, event: d, eventTarget: g, type: "hold", targets: [], path: x, node: null }, C = 0; C < x.length; C++) {
            var U = x[C];
            R.node = U, a.fire("pointerEvents:collect-targets", R);
          }
          if (R.targets.length) {
            for (var N = 1 / 0, H = 0, Z = R.targets; H < Z.length; H++) {
              var X = Z[H].eventable.options.holdDuration;
              X < N && (N = X);
            }
            S.duration = N, S.timeout = setTimeout((function() {
              En({ interaction: u, eventTarget: g, pointer: c, event: d, type: "hold" }, a);
            }), N);
          }
        })(r, n), En(r, n);
      }, "interactions:up": function(r, n) {
        vt(r), En(r, n), (function(o, a) {
          var u = o.interaction, c = o.pointer, d = o.event, g = o.eventTarget;
          u.pointerWasMoved || En({ interaction: u, eventTarget: g, pointer: c, event: d, type: "tap" }, a);
        })(r, n);
      }, "interactions:cancel": function(r, n) {
        vt(r), En(r, n);
      } }, PointerEvent: $r, fire: En, collectEventTargets: Oi, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function En(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, d = r.type, g = r.targets, b = g === void 0 ? Oi(r, n) : g, S = new $r(d, a, u, c, o, n.now());
        n.fire("pointerEvents:new", { pointerEvent: S });
        for (var x = { interaction: o, pointer: a, event: u, eventTarget: c, targets: b, type: d, pointerEvent: S }, R = 0; R < b.length; R++) {
          var C = b[R];
          for (var U in C.props || {}) S[U] = C.props[U];
          var N = Tt(C.eventable, C.node);
          if (S._subtractOrigin(N), S.eventable = C.eventable, S.currentTarget = C.node, C.eventable.fire(S), S._addOrigin(N), S.immediatePropagationStopped || S.propagationStopped && R + 1 < b.length && b[R + 1].node !== S.currentTarget) break;
        }
        if (n.fire("pointerEvents:fired", x), d === "tap") {
          var H = S.double ? En({ interaction: o, pointer: a, event: u, eventTarget: c, type: "doubletap" }, n) : S;
          o.prevTap = H, o.tapTime = H.timeStamp;
        }
        return S;
      }
      function Oi(r, n) {
        var o = r.interaction, a = r.pointer, u = r.event, c = r.eventTarget, d = r.type, g = o.getPointerIndex(a), b = o.pointers[g];
        if (d === "tap" && (o.pointerWasMoved || !b || b.downTarget !== c)) return [];
        for (var S = cn(c), x = { interaction: o, pointer: a, event: u, eventTarget: c, type: d, path: S, targets: [], node: null }, R = 0; R < S.length; R++) {
          var C = S[R];
          x.node = C, n.fire("pointerEvents:collect-targets", x);
        }
        return d === "hold" && (x.targets = x.targets.filter((function(U) {
          var N, H;
          return U.eventable.options.holdDuration === ((N = o.pointers[g]) == null || (H = N.hold) == null ? void 0 : H.duration);
        }))), x.targets;
      }
      function vt(r) {
        var n = r.interaction, o = r.pointerIndex, a = n.pointers[o].hold;
        a && a.timeout && (clearTimeout(a.timeout), a.timeout = null);
      }
      var Ri = Object.freeze({ __proto__: null, default: Dn });
      function vr(r) {
        var n = r.interaction;
        n.holdIntervalHandle && (clearInterval(n.holdIntervalHandle), n.holdIntervalHandle = null);
      }
      var zo = { id: "pointer-events/holdRepeat", install: function(r) {
        r.usePlugin(Dn);
        var n = r.pointerEvents;
        n.defaults.holdRepeatInterval = 0, n.types.holdrepeat = r.actions.phaselessTypes.holdrepeat = !0;
      }, listeners: ["move", "up", "cancel", "endall"].reduce((function(r, n) {
        return r["pointerEvents:".concat(n)] = vr, r;
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
      } }) }, Po = zo, Va = { id: "pointer-events/interactableTargets", install: function(r) {
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
          var g = d.events, b = g.options;
          g.types[u] && g.types[u].length && d.testIgnoreAllow(b, a, c) && o.push({ node: a, eventable: g, props: { interactable: d } });
        }));
      }, "interactable:new": function(r) {
        var n = r.interactable;
        n.events.getRect = function(o) {
          return n.getRect(o);
        };
      }, "interactable:set": function(r, n) {
        var o = r.interactable, a = r.options;
        J(o.events.options, n.pointerEvents.defaults), J(o.events.options, a.pointerEvents || {});
      } } }, Za = Va, ja = { id: "pointer-events", install: function(r) {
        r.usePlugin(Ri), r.usePlugin(Po), r.usePlugin(Za);
      } }, Ja = ja, Qa = { id: "reflow", install: function(r) {
        var n = r.Interactable;
        r.actions.phases.reflow = !0, n.prototype.reflow = function(o) {
          return (function(a, u, c) {
            for (var d = a.getAllElements(), g = c.window.Promise, b = g ? [] : null, S = function() {
              var R = d[x], C = a.getRect(R);
              if (!C) return 1;
              var U, N = or(c.interactions.list, (function(X) {
                return X.interacting() && X.interactable === a && X.element === R && X.prepared.name === u.name;
              }));
              if (N) N.move(), b && (U = N._reflowPromise || new g((function(X) {
                N._reflowResolve = X;
              })));
              else {
                var H = Zt(C), Z = /* @__PURE__ */ (function(X) {
                  return { coords: X, get page() {
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
                })({ page: { x: H.x, y: H.y }, client: { x: H.x, y: H.y }, timeStamp: c.now() });
                U = (function(X, w, M, I, L) {
                  var $ = X.interactions.new({ pointerType: "reflow" }), ve = { interaction: $, event: L, pointer: L, eventTarget: M, phase: "reflow" };
                  $.interactable = w, $.element = M, $.prevEvent = L, $.updatePointer(L, L, M, !0), Q($.coords.delta), fi($.prepared, I), $._doPhase(ve);
                  var ye = X.window, Ee = ye.Promise, At = Ee ? new Ee((function(gn) {
                    $._reflowResolve = gn;
                  })) : void 0;
                  return $._reflowPromise = At, $.start(I, w, M), $._interacting ? ($.move(ve), $.end(L)) : ($.stop(), $._reflowResolve()), $.removePointer(L, L), At;
                })(c, a, R, u, Z);
              }
              b && b.push(U);
            }, x = 0; x < d.length && !S(); x++) ;
            return b && g.all(b).then((function() {
              return a;
            }));
          })(this, o, r);
        };
      }, listeners: { "interactions:stop": function(r, n) {
        var o = r.interaction;
        o.pointerType === "reflow" && (o._reflowResolve && o._reflowResolve(), (function(a, u) {
          a.splice(a.indexOf(u), 1);
        })(n.interactions.list, o));
      } } }, Vn = Qa;
      if (dt.use(lr), dt.use(yi), dt.use(Ja), dt.use(Fa), dt.use(Ka), dt.use(hi), dt.use(Oa), dt.use(Ia), dt.use(Vn), dt.default = dt, z(p) === "object" && p) try {
        p.exports = dt;
      } catch {
      }
      return dt.default = dt, dt;
    }));
  })(Hi, Hi.exports)), Hi.exports;
}
var z0 = /* @__PURE__ */ M0();
const Sc = /* @__PURE__ */ If(z0), Ec = /* @__PURE__ */ Ji({
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
  setup(p, { expose: m, emit: l }) {
    const y = p, z = l, O = Vi(xf), F = Vi(wf);
    if (!O)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const D = Zm(null), E = Zi({
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
    let V = !1, oe = !1, j = NaN, Fe = NaN, me = NaN, be = NaN, He = -1, Be = -1, Ne = -1, Ce = -1, xe = y.x, Oe = y.y, ze = y.w, We = y.h;
    const P = nt(), Re = Zi({
      i: jm(y, "i"),
      state: E,
      wrapper: P,
      calcXY: Et
    });
    function Se(k) {
      Ut(k);
    }
    function Ye() {
      ht();
    }
    function G(k) {
      Vt(y.isDraggable) && (E.draggable = k);
    }
    function ie(k) {
      Vt(y.isResizable) && (E.resizable = k);
    }
    function te(k) {
      Vt(y.isBounded) && (E.bounded = k);
    }
    function we(k) {
      E.transformScale = k;
    }
    function he(k) {
      E.rowHeight = k;
    }
    function Ie(k) {
      E.maxRows = k;
    }
    function ue() {
      E.rtl = wc() === "rtl", ht();
    }
    function je(k) {
      E.cols = Math.floor(k);
    }
    O.increaseItem(Re), sf(() => {
      E.rtl = wc() === "rtl";
    }), _a(() => {
      O.responsive && O.lastBreakpoint ? E.cols = Of(O.lastBreakpoint, O.cols) : E.cols = O.colNum, E.rowHeight = O.rowHeight, E.containerWidth = O.width !== null ? O.width : 100, E.margin = O.margin !== void 0 ? O.margin.map(Number) : [10, 10], E.maxRows = O.maxRows, Vt(y.isDraggable) ? E.draggable = O.isDraggable : E.draggable = y.isDraggable, Vt(y.isResizable) ? E.resizable = O.isResizable : E.resizable = y.isResizable, Vt(y.isBounded) ? E.bounded = O.isBounded : E.bounded = y.isBounded, E.transformScale = O.transformScale, E.useCssTransforms = O.useCssTransforms, E.useStyleCursor = O.useStyleCursor, Jm(() => {
        xe = y.x, Oe = y.y, We = y.h, ze = y.w, Ct(Je);
      }), F.on("updateWidth", Se), F.on("compact", Ye), F.on("setDraggable", G), F.on("setResizable", ie), F.on("setBounded", te), F.on("setTransformScale", we), F.on("setRowHeight", he), F.on("setMaxRows", Ie), F.on("directionchange", ue), F.on("setColNum", je);
    }), mu(() => {
      F.off("updateWidth", Se), F.off("compact", Ye), F.off("setDraggable", G), F.off("setResizable", ie), F.off("setBounded", te), F.off("setTransformScale", we), F.off("setRowHeight", he), F.off("setMaxRows", Ie), F.off("directionchange", ue), F.off("setColNum", je), D.value && (D.value.unset(), D.value = null), O.decreaseItem(Re);
    }), m({ state: E, wrapper: P });
    const $e = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, Ke = Qe(() => E.resizable && !y.static), Ae = Qe(() => O.isMirrored ? !E.rtl : E.rtl), Dt = Qe(() => (E.draggable || E.resizable) && !y.static), ft = _0("item"), zn = Qe(() => ({
      [ft.b()]: !0,
      [ft.bm("resizable")]: Ke.value,
      [ft.bm("static")]: y.static,
      [ft.bm("resizing")]: E.isResizing,
      [ft.bm("dragging")]: E.isDragging,
      [ft.bm("transform")]: E.useCssTransforms,
      [ft.bm("rtl")]: Ae.value,
      [ft.bm("no-touch")]: $e && Dt.value
    })), st = Qe(() => [ft.be("resizer"), Ae.value && ft.bem("resizer", "rtl")].filter(Boolean));
    Ze(
      () => y.isDraggable,
      (k) => {
        E.draggable = k;
      }
    ), Ze(
      () => y.static,
      () => {
        Ct(Ot), Ct(Q);
      }
    ), Ze(
      () => E.draggable,
      () => {
        Ct(Ot);
      }
    ), Ze(
      () => y.isResizable,
      (k) => {
        E.resizable = k;
      }
    ), Ze(
      () => y.isBounded,
      (k) => {
        E.bounded = k;
      }
    ), Ze(
      () => E.resizable,
      () => {
        Ct(Q);
      }
    ), Ze(
      () => E.rowHeight,
      () => {
        Ct(Je), Ct(cn);
      }
    ), Ze([() => E.cols, () => E.containerWidth], () => {
      Ct(Q), Ct(Je), Ct(cn);
    }), Ze([() => y.minH, () => y.maxH, () => y.minW, () => y.maxW], () => {
      Ct(Q);
    }), Ze(Ae, () => {
      Ct(Q), Ct(Je);
    }), Ze([() => O.margin, () => O.margin[0], () => O.margin[1]], () => {
      const k = O.margin;
      !k || k[0] === E.margin[0] && k[1] === E.margin[1] || (E.margin = k.map(Number), Ct(Je), Ct(cn));
    });
    function Je() {
      y.x + y.w > E.cols ? (xe = 0, ze = y.w > E.cols ? E.cols : y.w) : (xe = y.x, ze = y.w);
      const k = qt(xe, Oe, ze, We);
      E.isDragging && (k.top = E.dragging.top, Ae.value ? k.right = E.dragging.left : k.left = E.dragging.left), E.isResizing && (k.width = E.resizing.width, k.height = E.resizing.height);
      let ee;
      E.useCssTransforms ? Ae.value ? ee = y0(k.top, k.right, k.width, k.height) : ee = m0(k.top, k.left, k.width, k.height) : Ae.value ? ee = x0(k.top, k.right, k.width, k.height) : ee = b0(k.top, k.left, k.width, k.height), E.style = ee;
    }
    function cn() {
      const k = {};
      for (const ee of ["width", "height"]) {
        const ne = E.style[ee].match(/^(\d+)px$/);
        if (!ne)
          return;
        k[ee] = ne[1];
      }
      z("container-resized", y.i, y.h, y.w, k.height, k.width);
    }
    function xt(k) {
      if (y.static) return;
      const ee = k.type;
      if (ee === "resizestart" && E.isResizing || ee !== "resizestart" && !E.isResizing)
        return;
      const ne = bc(k);
      if (Vt(ne)) return;
      const { x: ce, y: fe } = ne, se = { width: 0, height: 0 };
      let ae;
      switch (ee) {
        case "resizestart": {
          Q(), He = ze, Be = We, ae = qt(xe, Oe, ze, We), se.width = ae.width, se.height = ae.height, E.resizing = se, E.isResizing = !0;
          break;
        }
        case "resizemove": {
          !k.edges.right && !k.edges.left && (me = ce), !k.edges.top && !k.edges.bottom && (be = fe);
          const et = xc(me, be, ce, fe);
          Ae.value ? se.width = E.resizing.width - et.deltaX / E.transformScale : se.width = E.resizing.width + et.deltaX / E.transformScale, se.height = E.resizing.height + et.deltaY / E.transformScale, E.resizing = se;
          break;
        }
        case "resizeend": {
          ae = qt(xe, Oe, ze, We), se.width = ae.width, se.height = ae.height, E.resizing = { width: -1, height: -1 }, E.isResizing = !1;
          break;
        }
      }
      ae = Tt(se.height, se.width), ae.w < y.minW && (ae.w = y.minW), ae.w > y.maxW && (ae.w = y.maxW), ae.h < y.minH && (ae.h = y.minH), ae.h > y.maxH && (ae.h = y.maxH), ae.h < 1 && (ae.h = 1), ae.w < 1 && (ae.w = 1), me = ce, be = fe, (ze !== ae.w || We !== ae.h) && z("resize", y.i, ae.h, ae.w, se.height, se.width), k.type === "resizeend" && (He !== ze || Be !== We) && z("resized", y.i, ae.h, ae.w, se.height, se.width), F.emit("resizeEvent", k.type, y.i, xe, Oe, ae.h, ae.w);
    }
    function J(k) {
      if (y.static || E.isResizing) return;
      const ee = k.type;
      if (ee === "dragstart" && E.isDragging || ee !== "dragstart" && !E.isDragging)
        return;
      const ne = bc(k);
      if (Vt(ne)) return;
      const { x: ce, y: fe } = ne, se = k.target;
      if (!se.offsetParent) return;
      const ae = { top: 0, left: 0 };
      switch (ee) {
        case "dragstart": {
          Ne = xe, Ce = Oe;
          const ut = se.offsetParent.getBoundingClientRect(), gt = se.getBoundingClientRect(), jt = gt.left / E.transformScale, Jt = ut.left / E.transformScale, Qt = gt.right / E.transformScale, xn = ut.right / E.transformScale, wn = gt.top / E.transformScale, fn = ut.top / E.transformScale;
          Ae.value ? ae.left = (Qt - xn) * -1 : ae.left = jt - Jt, ae.top = wn - fn, E.dragging = ae, E.isDragging = !0;
          break;
        }
        case "dragmove": {
          const ut = xc(j, Fe, ce, fe);
          if (Ae.value ? ae.left = E.dragging.left - ut.deltaX / E.transformScale : ae.left = E.dragging.left + ut.deltaX / E.transformScale, ae.top = E.dragging.top + ut.deltaY / E.transformScale, E.bounded) {
            const gt = se.offsetParent.clientHeight - Zt(y.h, E.rowHeight, E.margin[1]);
            ae.top = it(ae.top, 0, gt);
            const jt = wt(), Jt = E.containerWidth - Zt(y.w, jt, E.margin[0]);
            ae.left = it(ae.left, 0, Jt);
          }
          E.dragging = ae;
          break;
        }
        case "dragend": {
          const ut = se.offsetParent.getBoundingClientRect(), gt = se.getBoundingClientRect(), jt = gt.left / E.transformScale, Jt = ut.left / E.transformScale, Qt = gt.right / E.transformScale, xn = ut.right / E.transformScale, wn = gt.top / E.transformScale, fn = ut.top / E.transformScale;
          Ae.value ? ae.left = (Qt - xn) * -1 : ae.left = jt - Jt, ae.top = wn - fn, E.dragging = { top: -1, left: -1 }, E.isDragging = !1;
          break;
        }
      }
      let et;
      Ae.value, et = Et(ae.top, ae.left), j = ce, Fe = fe, (xe !== et.x || Oe !== et.y) && z("move", y.i, et.x, et.y), k.type === "dragend" && (Ne !== xe || Ce !== Oe) && z("moved", y.i, et.x, et.y), F.emit("dragEvent", k.type, y.i, et.x, et.y, We, ze);
    }
    function qt(k, ee, ne, ce) {
      const fe = wt();
      let se;
      return Ae.value ? se = {
        right: Math.round(fe * k + (k + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * ee + (ee + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ne === 1 / 0 ? ne : Math.round(fe * ne + Math.max(0, ne - 1) * E.margin[0]),
        height: ce === 1 / 0 ? ce : Math.round(E.rowHeight * ce + Math.max(0, ce - 1) * E.margin[1])
      } : se = {
        left: Math.round(fe * k + (k + 1) * E.margin[0]),
        top: Math.round(E.rowHeight * ee + (ee + 1) * E.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: ne === 1 / 0 ? ne : Math.round(fe * ne + Math.max(0, ne - 1) * E.margin[0]),
        height: ce === 1 / 0 ? ce : Math.round(E.rowHeight * ce + Math.max(0, ce - 1) * E.margin[1])
      }, se;
    }
    function Et(k, ee) {
      const ne = wt();
      let ce = Math.round((ee - E.margin[0]) / (ne + E.margin[0])), fe = Math.round((k - E.margin[1]) / (E.rowHeight + E.margin[1]));
      return ce = Math.max(Math.min(ce, E.cols - ze), 0), fe = Math.max(Math.min(fe, E.maxRows - We), 0), { x: ce, y: fe };
    }
    function wt() {
      return (E.containerWidth - E.margin[0] * (E.cols + 1)) / E.cols;
    }
    function Zt(k, ee, ne) {
      return Number.isFinite(k) ? Math.round(ee * k + Math.max(0, k - 1) * ne) : k;
    }
    function it(k, ee, ne) {
      return Math.max(Math.min(k, ne), ee);
    }
    function Tt(k, ee, ne = !1) {
      const ce = wt();
      let fe = Math.round((ee + E.margin[0]) / (ce + E.margin[0])), se = 0;
      return ne ? se = Math.ceil((k + E.margin[1]) / (E.rowHeight + E.margin[1])) : se = Math.round((k + E.margin[1]) / (E.rowHeight + E.margin[1])), fe = Math.max(Math.min(fe, E.cols - xe), 0), se = Math.max(Math.min(se, E.maxRows - Oe), 0), { w: fe, h: se };
    }
    function Ut(k, ee) {
      E.containerWidth = k;
    }
    function ht() {
      Je();
    }
    function Ht() {
      !D.value && P.value && (D.value = Sc(P.value), E.useStyleCursor || D.value.styleCursor(!1));
    }
    const ir = vc(J);
    function Ot() {
      if (Ht(), !!D.value)
        if (E.draggable && !y.static) {
          const k = {
            ignoreFrom: y.dragIgnoreFrom,
            allowFrom: y.dragAllowFrom,
            ...y.dragOption
          };
          D.value.draggable(k), V || (V = !0, D.value.on("dragstart dragmove dragend", (ee) => {
            ee.type === "dragmove" ? ir(ee) : J(ee);
          }));
        } else
          D.value.draggable({ enabled: !1 });
    }
    const Y = vc(xt);
    function Q() {
      if (Ht(), !!D.value)
        if (E.resizable && !y.static) {
          const k = qt(0, 0, y.maxW, y.maxH), ee = qt(0, 0, y.minW, y.minH), ne = {
            edges: {
              left: Ae.value ? `.${st.value[0]}` : !1,
              right: Ae.value ? !1 : `.${st.value[0]}`,
              bottom: `.${st.value[0]}`,
              top: !1
            },
            ignoreFrom: y.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: ee.height * E.transformScale,
                width: ee.width * E.transformScale
              },
              max: {
                height: k.height * E.transformScale,
                width: k.width * E.transformScale
              }
            },
            ...y.resizeOption
          };
          y.preserveAspectRatio && (ne.modifiers = [Sc.modifiers.aspectRatio({ ratio: "preserve" })]), D.value.resizable(ne), oe || (oe = !0, D.value.on("resizestart resizemove resizeend", (ce) => {
            ce.type === "resizemove" ? Y(ce) : xt(ce);
          }));
        } else
          D.value.resizable({ enabled: !1 });
    }
    return (k, ee) => (bt(), Mn("section", {
      ref_key: "wrapper",
      ref: P,
      class: cc(zn.value),
      style: Gi(E.style)
    }, [
      fu(k.$slots, "default"),
      Ke.value ? (bt(), Mn("span", {
        key: 0,
        class: cc(st.value)
      }, null, 2)) : du("", !0)
    ], 6));
  }
}), Mr = typeof window < "u";
var Tc;
Mr && (Tc = window?.navigator) != null && Tc.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Oc(p) {
  return p != null;
}
function Rc() {
}
const P0 = Object.freeze({
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
Object.freeze(new Set(Object.keys(P0)));
const C0 = Mr && ("ontouchstart" in window || D0() > 0), k0 = C0 ? "pointerdown" : "click";
function D0() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function L0(p, m, l = window.Event) {
  const { type: y, bubbles: z = !1, cancelable: O = !1, ...F } = m;
  if (!Oc(y) || y === "") return !1;
  let D;
  return Oc(l) ? D = new l(y, { bubbles: z, cancelable: O }) : (D = document.createEvent("HTMLEvents"), D.initEvent(y, z, O)), Object.assign(D, F), p.dispatchEvent(D);
}
const B0 = "clickoutside", W0 = /* @__PURE__ */ new Set();
Mr && document.addEventListener(
  k0,
  (p) => {
    const m = p.target, l = p.composedPath && p.composedPath();
    W0.forEach((y) => {
      y !== m && (l ? !l.includes(y) : !y.contains(m)) && (!y.__transferElement || y.__transferElement !== m && !y.__transferElement.contains(m)) && L0(y, { type: B0 });
    });
  },
  !0
);
const F0 = [
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
let ma;
if (Mr) {
  for (const p of F0)
    if (p[1] in document) {
      ma = p;
      break;
    }
}
Qe(() => !1);
const N0 = /* @__PURE__ */ new Set(), q0 = /* @__PURE__ */ new WeakMap();
if (Mr && ma) {
  const p = ma[2], m = ma[4];
  document.addEventListener(
    m,
    () => {
      if (N0.forEach((l) => {
        l.value = !1;
      }), document[p]) {
        const l = q0.get(document[p]);
        l && (l.value = !0);
      }
    },
    !1
  );
}
const Af = /* @__PURE__ */ new Map();
Af.set("x", 0);
Af.set("y", 0);
var Ir = [], U0 = function() {
  return Ir.some(function(p) {
    return p.activeTargets.length > 0;
  });
}, H0 = function() {
  return Ir.some(function(p) {
    return p.skippedTargets.length > 0;
  });
}, Ic = "ResizeObserver loop completed with undelivered notifications.", $0 = function() {
  var p;
  typeof ErrorEvent == "function" ? p = new ErrorEvent("error", {
    message: Ic
  }) : (p = document.createEvent("Event"), p.initEvent("error", !1, !1), p.message = Ic), window.dispatchEvent(p);
}, ji;
(function(p) {
  p.BORDER_BOX = "border-box", p.CONTENT_BOX = "content-box", p.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ji || (ji = {}));
var Ar = function(p) {
  return Object.freeze(p);
}, G0 = /* @__PURE__ */ (function() {
  function p(m, l) {
    this.inlineSize = m, this.blockSize = l, Ar(this);
  }
  return p;
})(), Mf = (function() {
  function p(m, l, y, z) {
    return this.x = m, this.y = l, this.width = y, this.height = z, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ar(this);
  }
  return p.prototype.toJSON = function() {
    var m = this, l = m.x, y = m.y, z = m.top, O = m.right, F = m.bottom, D = m.left, E = m.width, V = m.height;
    return { x: l, y, top: z, right: O, bottom: F, left: D, width: E, height: V };
  }, p.fromRect = function(m) {
    return new p(m.x, m.y, m.width, m.height);
  }, p;
})(), yu = function(p) {
  return p instanceof SVGElement && "getBBox" in p;
}, zf = function(p) {
  if (yu(p)) {
    var m = p.getBBox(), l = m.width, y = m.height;
    return !l && !y;
  }
  var z = p, O = z.offsetWidth, F = z.offsetHeight;
  return !(O || F || p.getClientRects().length);
}, Ac = function(p) {
  var m;
  if (p instanceof Element)
    return !0;
  var l = (m = p?.ownerDocument) === null || m === void 0 ? void 0 : m.defaultView;
  return !!(l && p instanceof l.Element);
}, Y0 = function(p) {
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
}, Ki = typeof window < "u" ? window : {}, ha = /* @__PURE__ */ new WeakMap(), Mc = /auto|scroll/, X0 = /^tb|vertical/, K0 = /msie|trident/i.test(Ki.navigator && Ki.navigator.userAgent), An = function(p) {
  return parseFloat(p || "0");
}, ni = function(p, m, l) {
  return p === void 0 && (p = 0), m === void 0 && (m = 0), l === void 0 && (l = !1), new G0((l ? m : p) || 0, (l ? p : m) || 0);
}, zc = Ar({
  devicePixelContentBoxSize: ni(),
  borderBoxSize: ni(),
  contentBoxSize: ni(),
  contentRect: new Mf(0, 0, 0, 0)
}), Pf = function(p, m) {
  if (m === void 0 && (m = !1), ha.has(p) && !m)
    return ha.get(p);
  if (zf(p))
    return ha.set(p, zc), zc;
  var l = getComputedStyle(p), y = yu(p) && p.ownerSVGElement && p.getBBox(), z = !K0 && l.boxSizing === "border-box", O = X0.test(l.writingMode || ""), F = !y && Mc.test(l.overflowY || ""), D = !y && Mc.test(l.overflowX || ""), E = y ? 0 : An(l.paddingTop), V = y ? 0 : An(l.paddingRight), oe = y ? 0 : An(l.paddingBottom), j = y ? 0 : An(l.paddingLeft), Fe = y ? 0 : An(l.borderTopWidth), me = y ? 0 : An(l.borderRightWidth), be = y ? 0 : An(l.borderBottomWidth), He = y ? 0 : An(l.borderLeftWidth), Be = j + V, Ne = E + oe, Ce = He + me, xe = Fe + be, Oe = D ? p.offsetHeight - xe - p.clientHeight : 0, ze = F ? p.offsetWidth - Ce - p.clientWidth : 0, We = z ? Be + Ce : 0, P = z ? Ne + xe : 0, Re = y ? y.width : An(l.width) - We - ze, Se = y ? y.height : An(l.height) - P - Oe, Ye = Re + Be + ze + Ce, G = Se + Ne + Oe + xe, ie = Ar({
    devicePixelContentBoxSize: ni(Math.round(Re * devicePixelRatio), Math.round(Se * devicePixelRatio), O),
    borderBoxSize: ni(Ye, G, O),
    contentBoxSize: ni(Re, Se, O),
    contentRect: new Mf(j, E, Re, Se)
  });
  return ha.set(p, ie), ie;
}, Cf = function(p, m, l) {
  var y = Pf(p, l), z = y.borderBoxSize, O = y.contentBoxSize, F = y.devicePixelContentBoxSize;
  switch (m) {
    case ji.DEVICE_PIXEL_CONTENT_BOX:
      return F;
    case ji.BORDER_BOX:
      return z;
    default:
      return O;
  }
}, V0 = /* @__PURE__ */ (function() {
  function p(m) {
    var l = Pf(m);
    this.target = m, this.contentRect = l.contentRect, this.borderBoxSize = Ar([l.borderBoxSize]), this.contentBoxSize = Ar([l.contentBoxSize]), this.devicePixelContentBoxSize = Ar([l.devicePixelContentBoxSize]);
  }
  return p;
})(), kf = function(p) {
  if (zf(p))
    return 1 / 0;
  for (var m = 0, l = p.parentNode; l; )
    m += 1, l = l.parentNode;
  return m;
}, Z0 = function() {
  var p = 1 / 0, m = [];
  Ir.forEach(function(O) {
    if (O.activeTargets.length !== 0) {
      var F = [];
      O.activeTargets.forEach(function(D) {
        var E = new V0(D.target), V = kf(D.target);
        F.push(E), D.lastReportedSize = Cf(D.target, D.observedBox), V < p && (p = V);
      }), m.push(function() {
        O.callback.call(O.observer, F, O.observer);
      }), O.activeTargets.splice(0, O.activeTargets.length);
    }
  });
  for (var l = 0, y = m; l < y.length; l++) {
    var z = y[l];
    z();
  }
  return p;
}, Pc = function(p) {
  Ir.forEach(function(m) {
    m.activeTargets.splice(0, m.activeTargets.length), m.skippedTargets.splice(0, m.skippedTargets.length), m.observationTargets.forEach(function(l) {
      l.isActive() && (kf(l.target) > p ? m.activeTargets.push(l) : m.skippedTargets.push(l));
    });
  });
}, j0 = function() {
  var p = 0;
  for (Pc(p); U0(); )
    p = Z0(), Pc(p);
  return H0() && $0(), p > 0;
}, Xs, Df = [], J0 = function() {
  return Df.splice(0).forEach(function(p) {
    return p();
  });
}, Q0 = function(p) {
  if (!Xs) {
    var m = 0, l = document.createTextNode(""), y = { characterData: !0 };
    new MutationObserver(function() {
      return J0();
    }).observe(l, y), Xs = function() {
      l.textContent = "".concat(m ? m-- : m++);
    };
  }
  Df.push(p), Xs();
}, ey = function(p) {
  Q0(function() {
    requestAnimationFrame(p);
  });
}, ya = 0, ty = function() {
  return !!ya;
}, ny = 250, ry = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Cc = [
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
], kc = function(p) {
  return p === void 0 && (p = 0), Date.now() + p;
}, Ks = !1, iy = (function() {
  function p() {
    var m = this;
    this.stopped = !0, this.listener = function() {
      return m.schedule();
    };
  }
  return p.prototype.run = function(m) {
    var l = this;
    if (m === void 0 && (m = ny), !Ks) {
      Ks = !0;
      var y = kc(m);
      ey(function() {
        var z = !1;
        try {
          z = j0();
        } finally {
          if (Ks = !1, m = y - kc(), !ty())
            return;
          z ? l.run(1e3) : m > 0 ? l.run(m) : l.start();
        }
      });
    }
  }, p.prototype.schedule = function() {
    this.stop(), this.run();
  }, p.prototype.observe = function() {
    var m = this, l = function() {
      return m.observer && m.observer.observe(document.body, ry);
    };
    document.body ? l() : Ki.addEventListener("DOMContentLoaded", l);
  }, p.prototype.start = function() {
    var m = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Cc.forEach(function(l) {
      return Ki.addEventListener(l, m.listener, !0);
    }));
  }, p.prototype.stop = function() {
    var m = this;
    this.stopped || (this.observer && this.observer.disconnect(), Cc.forEach(function(l) {
      return Ki.removeEventListener(l, m.listener, !0);
    }), this.stopped = !0);
  }, p;
})(), vu = new iy(), Dc = function(p) {
  !ya && p > 0 && vu.start(), ya += p, !ya && vu.stop();
}, oy = function(p) {
  return !yu(p) && !Y0(p) && getComputedStyle(p).display === "inline";
}, ay = (function() {
  function p(m, l) {
    this.target = m, this.observedBox = l || ji.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return p.prototype.isActive = function() {
    var m = Cf(this.target, this.observedBox, !0);
    return oy(this.target) && (this.lastReportedSize = m), this.lastReportedSize.inlineSize !== m.inlineSize || this.lastReportedSize.blockSize !== m.blockSize;
  }, p;
})(), sy = /* @__PURE__ */ (function() {
  function p(m, l) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = m, this.callback = l;
  }
  return p;
})(), ga = /* @__PURE__ */ new WeakMap(), Lc = function(p, m) {
  for (var l = 0; l < p.length; l += 1)
    if (p[l].target === m)
      return l;
  return -1;
}, va = (function() {
  function p() {
  }
  return p.connect = function(m, l) {
    var y = new sy(m, l);
    ga.set(m, y);
  }, p.observe = function(m, l, y) {
    var z = ga.get(m), O = z.observationTargets.length === 0;
    Lc(z.observationTargets, l) < 0 && (O && Ir.push(z), z.observationTargets.push(new ay(l, y && y.box)), Dc(1), vu.schedule());
  }, p.unobserve = function(m, l) {
    var y = ga.get(m), z = Lc(y.observationTargets, l), O = y.observationTargets.length === 1;
    z >= 0 && (O && Ir.splice(Ir.indexOf(y), 1), y.observationTargets.splice(z, 1), Dc(-1));
  }, p.disconnect = function(m) {
    var l = this, y = ga.get(m);
    y.observationTargets.slice().forEach(function(z) {
      return l.unobserve(m, z.target);
    }), y.activeTargets.splice(0, y.activeTargets.length);
  }, p;
})(), uy = (function() {
  function p(m) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof m != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    va.connect(this, m);
  }
  return p.prototype.observe = function(m, l) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ac(m))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    va.observe(this, m, l);
  }, p.prototype.unobserve = function(m) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ac(m))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    va.unobserve(this, m);
  }, p.prototype.disconnect = function() {
    va.disconnect(this);
  }, p.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, p;
})();
const xa = /* @__PURE__ */ new WeakMap();
function ly(p) {
  var m;
  for (let l = 0, y = p.length; l < y; ++l) {
    const z = p[l], O = xa.get(z.target);
    if (typeof O == "function") {
      const { inlineSize: F, blockSize: D } = ((m = z.borderBoxSize) == null ? void 0 : m[0]) ?? {}, { offsetWidth: E, offsetHeight: V } = z.target;
      O(
        Object.assign(z, {
          offsetWidth: E,
          offsetHeight: V,
          width: F ?? E,
          height: D ?? V
        })
      );
    }
  }
}
const Lf = new (Mr && window.ResizeObserver || uy)(
  ly
);
function Bc(p, m) {
  xa.set(p, m), Lf.observe(p);
}
function Wc(p) {
  xa.has(p) && (Lf.unobserve(p), xa.delete(p));
}
function cy(p = {}) {
  let m = Rc;
  const l = Ze(
    () => bn(p.target),
    (z) => {
      m(), !(!z || typeof p.onResize != "function") && (Bc(z, p.onResize), m = () => {
        Wc(z), m = Rc;
      });
    },
    { immediate: !0 }
  ), y = () => {
    l(), m();
  };
  return Qm() && e0(y), {
    /**
     * @deprecated Will be removed in next major version, please directly use `observeResize` from imports.
     */
    observeResize: Bc,
    /**
     * @deprecated Will be removed in next major version, please directly use `unobserveResize` from imports.
     */
    unobserveResize: Wc,
    unobserve: y
  };
}
const fy = nt(!1);
Qe(() => fy.value);
const Fc = "__theme_style__", Vs = "__theme_observer__", Nc = Zi(/* @__PURE__ */ new Map()), qc = /* @__PURE__ */ new Map();
Ze(Nc, () => {
  if (!Mr) return;
  qc.clear();
  const p = document.head.querySelector(`#${Fc}`);
  p && document.head.removeChild(p);
  const m = document.createElement("style");
  let l = `.${Vs} { width: 1px }`, y = 1;
  for (const [z, [O, F]] of Nc.entries())
    l += ` html.${O} .${Vs}, .${F} .${Vs} { width: ${++y}px }`, qc.set(y, z);
  m.textContent = l, m.id = Fc, document.head.appendChild(m);
});
const Bf = /* @__PURE__ */ Ji({
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
  setup(p, { expose: m, emit: l }) {
    const y = p, z = l, O = Zi({
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
    }), F = /* @__PURE__ */ new Map(), D = nt(y.layout), E = nt(), { observeResize: V, unobserveResize: oe } = cy(), j = c0();
    j.on("resizeEvent", Fe), j.on("dragEvent", me), sf(() => {
      z("layout-before-mount", D.value);
    }), _a(() => {
      z("layout-mounted", D.value), kt(() => {
        w0(D.value), O.originalLayout = D.value, kt(() => {
          Se(), E.value && V(E.value, f0(xe, 16)), ei(D.value, y.verticalCompact), z("layout-updated", D.value), Ce(), xe();
        });
      });
    }), mu(() => {
      j.clearAll(), E.value && oe(E.value);
    });
    function Fe(G, ie, te, we, he, Ie) {
      P(G, ie, te, we, he, Ie);
    }
    function me(G, ie, te, we, he, Ie) {
      We(G, ie, te, we, he, Ie);
    }
    Ze(
      () => O.width,
      (G, ie) => {
        kt(() => {
          j.emit("updateWidth", G), ie === -1 && kt(() => {
            z("layout-ready", D.value);
          }), Ce();
        });
      }
    ), Ze(
      () => [y.layout, y.layout.length],
      () => {
        D.value = y.layout, Ne();
      }
    ), Ze(
      () => y.colNum,
      (G) => {
        j.emit("setColNum", G);
      }
    ), Ze(
      () => y.rowHeight,
      (G) => {
        j.emit("setRowHeight", G);
      }
    ), Ze(
      () => y.isDraggable,
      (G) => {
        j.emit("setDraggable", G);
      }
    ), Ze(
      () => y.isResizable,
      (G) => {
        j.emit("setResizable", G);
      }
    ), Ze(
      () => y.isBounded,
      (G) => {
        j.emit("setBounded", G);
      }
    ), Ze(
      () => y.transformScale,
      (G) => {
        j.emit("setTransformScale", G);
      }
    ), Ze(
      () => y.responsive,
      (G) => {
        G || (z("update:layout", O.originalLayout), j.emit("setColNum", y.colNum)), xe();
      }
    ), Ze(
      () => y.maxRows,
      (G) => {
        j.emit("setMaxRows", G);
      }
    ), Ze([() => y.margin, () => y.margin[1]], Ce), fc(
      xf,
      Zi({
        ...dc(y),
        ...dc(O),
        increaseItem: be,
        decreaseItem: He
      })
    ), fc(wf, j), m({ state: O, getItem: Be, resizeEvent: P, dragEvent: We, layoutUpdate: Ne });
    function be(G) {
      F.set(G.i, G);
    }
    function He(G) {
      F.delete(G.i);
    }
    function Be(G) {
      return F.get(G);
    }
    function Ne() {
      if (!Vt(D.value) && !Vt(O.originalLayout)) {
        if (D.value.length !== O.originalLayout.length) {
          const G = Ye(D.value, O.originalLayout);
          if (G.length > 0)
            if (D.value.length > O.originalLayout.length)
              O.originalLayout = O.originalLayout.concat(G);
            else {
              const ie = new Set(G.map((te) => te.i));
              O.originalLayout = O.originalLayout.filter((te) => !ie.has(te.i));
            }
          O.lastLayoutLength = D.value.length, Se();
        }
        ei(D.value, y.verticalCompact), j.emit("updateWidth", O.width), Ce(), z("layout-updated", D.value);
      }
    }
    function Ce() {
      O.mergedStyle = {
        height: Oe()
      };
    }
    function xe() {
      E.value && (O.width = E.value.offsetWidth), j.emit("resizeEvent");
    }
    function Oe() {
      if (!y.autoSize) return;
      const G = parseFloat(y.margin[1]);
      return p0(D.value) * (y.rowHeight + G) + G + "px";
    }
    let ze;
    function We(G, ie, te, we, he, Ie) {
      let ue = mc(D.value, ie);
      Vt(ue) && (ue = { h: 0, w: 0, x: 0, y: 0, i: "" }), G === "dragstart" && !y.verticalCompact && (ze = D.value.reduce(
        (je, { i: $e, x: Ke, y: Ae }) => ({
          ...je,
          [$e]: { x: Ke, y: Ae }
        }),
        {}
      )), G === "dragmove" || G === "dragstart" ? (O.placeholder.i = ie, O.placeholder.x = ue.x, O.placeholder.y = ue.y, O.placeholder.w = Ie, O.placeholder.h = he, kt(() => {
        O.isDragging = !0;
      }), j.emit("updateWidth", O.width)) : kt(() => {
        O.isDragging = !1;
      }), D.value = gu(D.value, ue, te, we, !0, y.preventCollision), y.restoreOnDrag ? (ue.static = !0, ei(D.value, y.verticalCompact, ze), ue.static = !1) : ei(D.value, y.verticalCompact), j.emit("compact"), Ce(), G === "dragend" && (ze = void 0, z("layout-updated", D.value));
    }
    function P(G, ie, te, we, he, Ie) {
      let ue = mc(D.value, ie);
      Vt(ue) && (ue = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let je;
      if (y.preventCollision) {
        const $e = Sf(D.value, { ...ue, w: Ie, h: he }).filter(
          (Ke) => Ke.i !== ue.i
        );
        if (je = $e.length > 0, je) {
          let Ke = 1 / 0, Ae = 1 / 0;
          $e.forEach((Dt) => {
            Dt.x > ue.x && (Ke = Math.min(Ke, Dt.x)), Dt.y > ue.y && (Ae = Math.min(Ae, Dt.y));
          }), Number.isFinite(Ke) && (ue.w = Ke - ue.x), Number.isFinite(Ae) && (ue.h = Ae - ue.y);
        }
      }
      je || (ue.w = Ie, ue.h = he), G === "resizestart" || G === "resizemove" ? (O.placeholder.i = ie, O.placeholder.x = te, O.placeholder.y = we, O.placeholder.w = ue.w, O.placeholder.h = ue.h, kt(() => {
        O.isDragging = !0;
      }), j.emit("updateWidth", O.width)) : G && kt(() => {
        O.isDragging = !1;
      }), y.responsive && Re(), ei(D.value, y.verticalCompact), j.emit("compact"), Ce(), G === "resizeend" && z("layout-updated", D.value);
    }
    function Re() {
      const G = T0(y.breakpoints, O.width);
      if (G === O.lastBreakpoint)
        return;
      const ie = Of(G, y.cols);
      !Vt(O.lastBreakpoint) && !O.layouts[O.lastBreakpoint] && (O.layouts[O.lastBreakpoint] = hu(D.value));
      const te = O0(
        O.originalLayout,
        O.layouts,
        y.breakpoints,
        G,
        O.lastBreakpoint,
        ie,
        y.verticalCompact
      );
      O.layouts[G] = te, O.lastBreakpoint !== G && z("breakpoint-changed", G, te), D.value = te, z("update:layout", te), O.lastBreakpoint = G, j.emit("setColNum", ie);
    }
    function Se() {
      O.layouts = Object.assign({}, y.responsiveLayouts);
    }
    function Ye(G, ie) {
      const te = new Set(ie.map((ue) => ue.i)), we = new Set(G.map((ue) => ue.i)), he = G.filter((ue) => !te.has(ue.i)), Ie = ie.filter((ue) => !we.has(ue.i));
      return he.concat(Ie);
    }
    return (G, ie) => (bt(), Mn("div", {
      ref_key: "wrapper",
      ref: E,
      class: "vgl-layout",
      style: Gi(O.mergedStyle)
    }, [
      G.$slots.default ? fu(G.$slots, "default", { key: 0 }) : (bt(!0), Mn(lf, { key: 1 }, cf(D.value, (te) => (bt(), Or(Ec, t0({
        key: te.i,
        ref_for: !0
      }, te), {
        default: nr(() => [
          fu(G.$slots, "item", { item: te })
        ]),
        _: 2
      }, 1040))), 128)),
      uf(ti(Ec, {
        class: "vgl-item--placeholder",
        x: O.placeholder.x,
        y: O.placeholder.y,
        w: O.placeholder.w,
        h: O.placeholder.h,
        i: O.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [ff, O.isDragging]
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
  } catch (m) {
    console.error("vite-plugin-css-injected-by-js", m);
  }
})();
const wa = {
  rowHeight: 30,
  cols: { lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }
}, Tr = { lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 };
function Wf(p) {
  const m = p ?? {};
  return {
    rowHeight: m.rowHeight ?? wa.rowHeight,
    cols: { ...wa.cols, ...m.cols }
  };
}
const dy = {
  key: 1,
  class: "text"
}, py = /* @__PURE__ */ Ji({
  __name: "View",
  props: {
    pageId: {},
    layoutSettings: {}
  },
  setup(p) {
    const m = p, l = nt(void 0), y = Qe(() => Wf(l.value)), z = Qe(() => y.value.cols), O = Qe(() => y.value.rowHeight), F = Qe(() => `${O.value}-${Object.values(z.value).join("-")}`), D = gf(), E = m.pageId ?? D.params.pageid ?? "", V = nt([]), oe = nt([]);
    let j = null, Fe = null;
    const me = Vi(o0.TINY_EMITTER), be = Vi(vf) ?? null;
    function He() {
      if (be && E) {
        const P = be.getPage(E);
        l.value = P?.layoutSettings ? { ...P.layoutSettings } : void 0;
      }
    }
    _a(async () => {
      console.log("Grid View component mounted for page:", E), He(), be && "subscribe" in be && be.subscribe((Re) => {
        Re === "PAGE_UPDATE" && He();
      }), await kt();
      const P = () => {
        try {
          return j = df(E), Fe = pf(E), V.value = j.widgets, oe.value = Fe.layout, console.log("Grid View stores initialized successfully, widgets:", V.value.length), !0;
        } catch (Re) {
          return console.error("Error initializing Grid View stores:", Re), !1;
        }
      };
      P() ? (await kt(), Be()) : setTimeout(() => {
        P() ? Be() : console.error("Failed to initialize Grid View stores after retry");
      }, 100);
    });
    const Be = () => {
      console.log("📄 Emitting system:pageLoaded for page:", E), me.emit("system:pageLoaded", { pageId: E });
    }, Ne = nt(), Ce = nt();
    function xe(P, Re) {
      const Se = Number(P);
      return Number.isFinite(Se) ? Se : Re;
    }
    function Oe() {
      return { colW: 1200 / z.value.md, rowH: O.value };
    }
    function ze(P) {
      const { colW: Re, rowH: Se } = Oe(), Ye = xe(P.x, 0), G = xe(P.y, 0), ie = xe(P.width, Re), te = xe(P.height, Se);
      return {
        i: String(P.id ?? P.i ?? ""),
        x: Math.round(Ye / Re),
        y: Math.round(G / Se),
        w: Math.max(1, Math.round(ie / Re)),
        h: Math.max(1, Math.round(te / Se)),
        static: !1
      };
    }
    let We = Qe(() => (oe.value || []).map(ze));
    return (P, Re) => {
      const Se = ba("VaScrollContainer");
      return bt(), Or(Se, {
        class: "max-h-screen ml-15",
        vertical: ""
      }, {
        default: nr(() => [
          Rr("div", {
            ref_key: "wrapper",
            ref: Ce,
            class: "view_grid_layout"
          }, [
            (bt(), Or(bn(Bf), {
              ref_key: "gridLayout",
              ref: Ne,
              key: F.value,
              layout: bn(We),
              "onUpdate:layout": Re[0] || (Re[0] = (Ye) => n0(We) ? We.value = Ye : We = Ye),
              "row-height": O.value,
              responsive: !0,
              "vertical-compact": !1,
              breakpoints: bn(Tr),
              cols: z.value,
              "is-draggable": !1,
              "is-resizable": !1
            }, {
              item: nr(({ item: Ye }) => [
                V.value?.find((G) => G.uid === Ye.i) ? (bt(), Or(bn(hf), {
                  key: 0,
                  widget: V.value.find((G) => G.uid === Ye.i),
                  ref: `${Ye.i}_wrapper`,
                  editEnabled: !1
                }, null, 8, ["widget"])) : (bt(), Mn("span", dy, pu(`${Ye.i}${Ye.static ? "- Static" : ""}`), 1))
              ]),
              _: 1
            }, 8, ["layout", "row-height", "breakpoints", "cols"]))
          ], 512)
        ]),
        _: 1
      });
    };
  }
}), bu = (p, m) => {
  const l = p.__vccOpts || p;
  for (const [y, z] of m)
    l[y] = z;
  return l;
}, hy = /* @__PURE__ */ bu(py, [["__scopeId", "data-v-49a3f0ec"]]);
var $i = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var gy = $i.exports, Uc;
function vy() {
  return Uc || (Uc = 1, (function(p, m) {
    (function() {
      var l, y = "4.17.21", z = 200, O = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", F = "Expected a function", D = "Invalid `variable` option passed into `_.template`", E = "__lodash_hash_undefined__", V = 500, oe = "__lodash_placeholder__", j = 1, Fe = 2, me = 4, be = 1, He = 2, Be = 1, Ne = 2, Ce = 4, xe = 8, Oe = 16, ze = 32, We = 64, P = 128, Re = 256, Se = 512, Ye = 30, G = "...", ie = 800, te = 16, we = 1, he = 2, Ie = 3, ue = 1 / 0, je = 9007199254740991, $e = 17976931348623157e292, Ke = NaN, Ae = 4294967295, Dt = Ae - 1, ft = Ae >>> 1, zn = [
        ["ary", P],
        ["bind", Be],
        ["bindKey", Ne],
        ["curry", xe],
        ["curryRight", Oe],
        ["flip", Se],
        ["partial", ze],
        ["partialRight", We],
        ["rearg", Re]
      ], st = "[object Arguments]", Je = "[object Array]", cn = "[object AsyncFunction]", xt = "[object Boolean]", J = "[object Date]", qt = "[object DOMException]", Et = "[object Error]", wt = "[object Function]", Zt = "[object GeneratorFunction]", it = "[object Map]", Tt = "[object Number]", Ut = "[object Null]", ht = "[object Object]", Ht = "[object Promise]", ir = "[object Proxy]", Ot = "[object RegExp]", Y = "[object Set]", Q = "[object String]", k = "[object Symbol]", ee = "[object Undefined]", ne = "[object WeakMap]", ce = "[object WeakSet]", fe = "[object ArrayBuffer]", se = "[object DataView]", ae = "[object Float32Array]", et = "[object Float64Array]", ut = "[object Int8Array]", gt = "[object Int16Array]", jt = "[object Int32Array]", Jt = "[object Uint8Array]", Qt = "[object Uint8ClampedArray]", xn = "[object Uint16Array]", wn = "[object Uint32Array]", fn = /\b__p \+= '';/g, or = /\b(__p \+=) '' \+/g, Gn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ri = /&(?:amp|lt|gt|quot|#39);/g, zr = /[&<>"']/g, Qi = RegExp(ri.source), ii = RegExp(zr.source), oi = /<%-([\s\S]+?)%>/g, eo = /<%([\s\S]+?)%>/g, ai = /<%=([\s\S]+?)%>/g, Sa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, si = /^\w*$/, ui = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, li = /[\\^$.*+?()[\]{}|]/g, Ea = RegExp(li.source), Pr = /^\s+/, dn = /\s/, Pn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, pn = /\{\n\/\* \[wrapped with (.+)\] \*/, Ta = /,? & /, Oa = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, to = /[()=,{}\[\]\/\s]/, _n = /\\(\\)?/g, ge = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ci = /\w*$/, no = /^[-+]0x[0-9a-f]+$/i, Ra = /^0b[01]+$/i, Ia = /^\[object .+?Constructor\]$/, ar = /^0o[0-7]+$/i, fi = /^(?:0|[1-9]\d*)$/, Aa = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Cr = /($^)/, Ma = /['\n\r\u2028\u2029\\]/g, sr = "\\ud800-\\udfff", za = "\\u0300-\\u036f", ro = "\\ufe20-\\ufe2f", io = "\\u20d0-\\u20ff", ur = za + ro + io, di = "\\u2700-\\u27bf", kr = "a-z\\xdf-\\xf6\\xf8-\\xff", oo = "\\xac\\xb1\\xd7\\xf7", Pa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", pi = "\\u2000-\\u206f", Ca = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Dr = "A-Z\\xc0-\\xd6\\xd8-\\xde", ao = "\\ufe0e\\ufe0f", so = oo + Pa + pi + Ca, hi = "['’]", ka = "[" + sr + "]", uo = "[" + so + "]", lr = "[" + ur + "]", cr = "\\d+", Yn = "[" + di + "]", Lr = "[" + kr + "]", fr = "[^" + sr + so + cr + di + kr + Dr + "]", en = "\\ud83c[\\udffb-\\udfff]", dr = "(?:" + lr + "|" + en + ")", lo = "[^" + sr + "]", Br = "(?:\\ud83c[\\udde6-\\uddff]){2}", Wr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Sn = "[" + Dr + "]", co = "\\u200d", fo = "(?:" + Lr + "|" + fr + ")", po = "(?:" + Sn + "|" + fr + ")", ho = "(?:" + hi + "(?:d|ll|m|re|s|t|ve))?", go = "(?:" + hi + "(?:D|LL|M|RE|S|T|VE))?", gi = dr + "?", vi = "[" + ao + "]?", Da = "(?:" + co + "(?:" + [lo, Br, Wr].join("|") + ")" + vi + gi + ")*", mi = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", La = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", yi = vi + gi + Da, Ba = "(?:" + [Yn, Br, Wr].join("|") + ")" + yi, Fr = "(?:" + [lo + lr + "?", lr, Br, Wr, ka].join("|") + ")", Wa = RegExp(hi, "g"), vo = RegExp(lr, "g"), Nr = RegExp(en + "(?=" + en + ")|" + Fr + yi, "g"), Fa = RegExp([
        Sn + "?" + Lr + "+" + ho + "(?=" + [uo, Sn, "$"].join("|") + ")",
        po + "+" + go + "(?=" + [uo, Sn + fo, "$"].join("|") + ")",
        Sn + "?" + fo + "+" + ho,
        Sn + "+" + go,
        La,
        mi,
        cr,
        Ba
      ].join("|"), "g"), mo = RegExp("[" + co + sr + ur + ao + "]"), yo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Na = [
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
      ], pr = -1, qe = {};
      qe[ae] = qe[et] = qe[ut] = qe[gt] = qe[jt] = qe[Jt] = qe[Qt] = qe[xn] = qe[wn] = !0, qe[st] = qe[Je] = qe[fe] = qe[xt] = qe[se] = qe[J] = qe[Et] = qe[wt] = qe[it] = qe[Tt] = qe[ht] = qe[Ot] = qe[Y] = qe[Q] = qe[ne] = !1;
      var Xe = {};
      Xe[st] = Xe[Je] = Xe[fe] = Xe[se] = Xe[xt] = Xe[J] = Xe[ae] = Xe[et] = Xe[ut] = Xe[gt] = Xe[jt] = Xe[it] = Xe[Tt] = Xe[ht] = Xe[Ot] = Xe[Y] = Xe[Q] = Xe[k] = Xe[Jt] = Xe[Qt] = Xe[xn] = Xe[wn] = !0, Xe[Et] = Xe[wt] = Xe[ne] = !1;
      var bi = {
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
      }, bo = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, qa = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, xi = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, xo = parseFloat, wo = parseInt, qr = typeof rr == "object" && rr && rr.Object === Object && rr, Ua = typeof self == "object" && self && self.Object === Object && self, lt = qr || Ua || Function("return this")(), tn = m && !m.nodeType && m, Cn = tn && !0 && p && !p.nodeType && p, _o = Cn && Cn.exports === tn, wi = _o && qr.process, Rt = (function() {
        try {
          var w = Cn && Cn.require && Cn.require("util").types;
          return w || wi && wi.binding && wi.binding("util");
        } catch {
        }
      })(), _i = Rt && Rt.isArrayBuffer, dt = Rt && Rt.isDate, So = Rt && Rt.isMap, Eo = Rt && Rt.isRegExp, To = Rt && Rt.isSet, Oo = Rt && Rt.isTypedArray;
      function It(w, M, I) {
        switch (I.length) {
          case 0:
            return w.call(M);
          case 1:
            return w.call(M, I[0]);
          case 2:
            return w.call(M, I[0], I[1]);
          case 3:
            return w.call(M, I[0], I[1], I[2]);
        }
        return w.apply(M, I);
      }
      function Ha(w, M, I, L) {
        for (var $ = -1, ve = w == null ? 0 : w.length; ++$ < ve; ) {
          var ye = w[$];
          M(L, ye, I(ye), w);
        }
        return L;
      }
      function Lt(w, M) {
        for (var I = -1, L = w == null ? 0 : w.length; ++I < L && M(w[I], I, w) !== !1; )
          ;
        return w;
      }
      function $a(w, M) {
        for (var I = w == null ? 0 : w.length; I-- && M(w[I], I, w) !== !1; )
          ;
        return w;
      }
      function Si(w, M) {
        for (var I = -1, L = w == null ? 0 : w.length; ++I < L; )
          if (!M(w[I], I, w))
            return !1;
        return !0;
      }
      function $t(w, M) {
        for (var I = -1, L = w == null ? 0 : w.length, $ = 0, ve = []; ++I < L; ) {
          var ye = w[I];
          M(ye, I, w) && (ve[$++] = ye);
        }
        return ve;
      }
      function nn(w, M) {
        var I = w == null ? 0 : w.length;
        return !!I && Kn(w, M, 0) > -1;
      }
      function Xn(w, M, I) {
        for (var L = -1, $ = w == null ? 0 : w.length; ++L < $; )
          if (I(M, w[L]))
            return !0;
        return !1;
      }
      function Ve(w, M) {
        for (var I = -1, L = w == null ? 0 : w.length, $ = Array(L); ++I < L; )
          $[I] = M(w[I], I, w);
        return $;
      }
      function hn(w, M) {
        for (var I = -1, L = M.length, $ = w.length; ++I < L; )
          w[$ + I] = M[I];
        return w;
      }
      function Ur(w, M, I, L) {
        var $ = -1, ve = w == null ? 0 : w.length;
        for (L && ve && (I = w[++$]); ++$ < ve; )
          I = M(I, w[$], $, w);
        return I;
      }
      function Ro(w, M, I, L) {
        var $ = w == null ? 0 : w.length;
        for (L && $ && (I = w[--$]); $--; )
          I = M(I, w[$], $, w);
        return I;
      }
      function kn(w, M) {
        for (var I = -1, L = w == null ? 0 : w.length; ++I < L; )
          if (M(w[I], I, w))
            return !0;
        return !1;
      }
      var Ga = Ti("length");
      function Ya(w) {
        return w.split("");
      }
      function Xa(w) {
        return w.match(Oa) || [];
      }
      function Io(w, M, I) {
        var L;
        return I(w, function($, ve, ye) {
          if (M($, ve, ye))
            return L = ve, !1;
        }), L;
      }
      function Hr(w, M, I, L) {
        for (var $ = w.length, ve = I + (L ? 1 : -1); L ? ve-- : ++ve < $; )
          if (M(w[ve], ve, w))
            return ve;
        return -1;
      }
      function Kn(w, M, I) {
        return M === M ? g(w, M, I) : Hr(w, Ao, I);
      }
      function Ei(w, M, I, L) {
        for (var $ = I - 1, ve = w.length; ++$ < ve; )
          if (L(w[$], M))
            return $;
        return -1;
      }
      function Ao(w) {
        return w !== w;
      }
      function hr(w, M) {
        var I = w == null ? 0 : w.length;
        return I ? $r(w, M) / I : Ke;
      }
      function Ti(w) {
        return function(M) {
          return M == null ? l : M[w];
        };
      }
      function gr(w) {
        return function(M) {
          return w == null ? l : w[M];
        };
      }
      function Mo(w, M, I, L, $) {
        return $(w, function(ve, ye, Ee) {
          I = L ? (L = !1, ve) : M(I, ve, ye, Ee);
        }), I;
      }
      function Ka(w, M) {
        var I = w.length;
        for (w.sort(M); I--; )
          w[I] = w[I].value;
        return w;
      }
      function $r(w, M) {
        for (var I, L = -1, $ = w.length; ++L < $; ) {
          var ve = M(w[L]);
          ve !== l && (I = I === l ? ve : I + ve);
        }
        return I;
      }
      function Dn(w, M) {
        for (var I = -1, L = Array(w); ++I < w; )
          L[I] = M(I);
        return L;
      }
      function En(w, M) {
        return Ve(M, function(I) {
          return [I, w[I]];
        });
      }
      function Oi(w) {
        return w && w.slice(0, R(w) + 1).replace(Pr, "");
      }
      function vt(w) {
        return function(M) {
          return w(M);
        };
      }
      function Ri(w, M) {
        return Ve(M, function(I) {
          return w[I];
        });
      }
      function vr(w, M) {
        return w.has(M);
      }
      function zo(w, M) {
        for (var I = -1, L = w.length; ++I < L && Kn(M, w[I], 0) > -1; )
          ;
        return I;
      }
      function Po(w, M) {
        for (var I = w.length; I-- && Kn(M, w[I], 0) > -1; )
          ;
        return I;
      }
      function Va(w, M) {
        for (var I = w.length, L = 0; I--; )
          w[I] === M && ++L;
        return L;
      }
      var Za = gr(bi), ja = gr(bo);
      function Ja(w) {
        return "\\" + xi[w];
      }
      function Qa(w, M) {
        return w == null ? l : w[M];
      }
      function Vn(w) {
        return mo.test(w);
      }
      function r(w) {
        return yo.test(w);
      }
      function n(w) {
        for (var M, I = []; !(M = w.next()).done; )
          I.push(M.value);
        return I;
      }
      function o(w) {
        var M = -1, I = Array(w.size);
        return w.forEach(function(L, $) {
          I[++M] = [$, L];
        }), I;
      }
      function a(w, M) {
        return function(I) {
          return w(M(I));
        };
      }
      function u(w, M) {
        for (var I = -1, L = w.length, $ = 0, ve = []; ++I < L; ) {
          var ye = w[I];
          (ye === M || ye === oe) && (w[I] = oe, ve[$++] = I);
        }
        return ve;
      }
      function c(w) {
        var M = -1, I = Array(w.size);
        return w.forEach(function(L) {
          I[++M] = L;
        }), I;
      }
      function d(w) {
        var M = -1, I = Array(w.size);
        return w.forEach(function(L) {
          I[++M] = [L, L];
        }), I;
      }
      function g(w, M, I) {
        for (var L = I - 1, $ = w.length; ++L < $; )
          if (w[L] === M)
            return L;
        return -1;
      }
      function b(w, M, I) {
        for (var L = I + 1; L--; )
          if (w[L] === M)
            return L;
        return L;
      }
      function S(w) {
        return Vn(w) ? U(w) : Ga(w);
      }
      function x(w) {
        return Vn(w) ? N(w) : Ya(w);
      }
      function R(w) {
        for (var M = w.length; M-- && dn.test(w.charAt(M)); )
          ;
        return M;
      }
      var C = gr(qa);
      function U(w) {
        for (var M = Nr.lastIndex = 0; Nr.test(w); )
          ++M;
        return M;
      }
      function N(w) {
        return w.match(Nr) || [];
      }
      function H(w) {
        return w.match(Fa) || [];
      }
      var Z = (function w(M) {
        M = M == null ? lt : X.defaults(lt.Object(), M, X.pick(lt, Na));
        var I = M.Array, L = M.Date, $ = M.Error, ve = M.Function, ye = M.Math, Ee = M.Object, At = M.RegExp, gn = M.String, mt = M.TypeError, Tn = I.prototype, $f = ve.prototype, Gr = Ee.prototype, Co = M["__core-js_shared__"], ko = $f.toString, Ge = Gr.hasOwnProperty, Gf = 0, wu = (function() {
          var e = /[^.]+$/.exec(Co && Co.keys && Co.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        })(), Do = Gr.toString, Yf = ko.call(Ee), Xf = lt._, Kf = At(
          "^" + ko.call(Ge).replace(li, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Lo = _o ? M.Buffer : l, Zn = M.Symbol, Bo = M.Uint8Array, _u = Lo ? Lo.allocUnsafe : l, Wo = a(Ee.getPrototypeOf, Ee), Su = Ee.create, Eu = Gr.propertyIsEnumerable, Fo = Tn.splice, Tu = Zn ? Zn.isConcatSpreadable : l, Ii = Zn ? Zn.iterator : l, mr = Zn ? Zn.toStringTag : l, No = (function() {
          try {
            var e = _r(Ee, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        })(), Vf = M.clearTimeout !== lt.clearTimeout && M.clearTimeout, Zf = L && L.now !== lt.Date.now && L.now, jf = M.setTimeout !== lt.setTimeout && M.setTimeout, qo = ye.ceil, Uo = ye.floor, es = Ee.getOwnPropertySymbols, Jf = Lo ? Lo.isBuffer : l, Ou = M.isFinite, Qf = Tn.join, ed = a(Ee.keys, Ee), ct = ye.max, _t = ye.min, td = L.now, nd = M.parseInt, Ru = ye.random, rd = Tn.reverse, ts = _r(M, "DataView"), Ai = _r(M, "Map"), ns = _r(M, "Promise"), Yr = _r(M, "Set"), Mi = _r(M, "WeakMap"), zi = _r(Ee, "create"), Ho = Mi && new Mi(), Xr = {}, id = Sr(ts), od = Sr(Ai), ad = Sr(ns), sd = Sr(Yr), ud = Sr(Mi), $o = Zn ? Zn.prototype : l, Pi = $o ? $o.valueOf : l, Iu = $o ? $o.toString : l;
        function h(e) {
          if (rt(e) && !_e(e) && !(e instanceof De)) {
            if (e instanceof rn)
              return e;
            if (Ge.call(e, "__wrapped__"))
              return Al(e);
          }
          return new rn(e);
        }
        var Kr = /* @__PURE__ */ (function() {
          function e() {
          }
          return function(t) {
            if (!tt(t))
              return {};
            if (Su)
              return Su(t);
            e.prototype = t;
            var i = new e();
            return e.prototype = l, i;
          };
        })();
        function Go() {
        }
        function rn(e, t) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = l;
        }
        h.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: oi,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: eo,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: ai,
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
            _: h
          }
        }, h.prototype = Go.prototype, h.prototype.constructor = h, rn.prototype = Kr(Go.prototype), rn.prototype.constructor = rn;
        function De(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ae, this.__views__ = [];
        }
        function ld() {
          var e = new De(this.__wrapped__);
          return e.__actions__ = Bt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Bt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Bt(this.__views__), e;
        }
        function cd() {
          if (this.__filtered__) {
            var e = new De(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function fd() {
          var e = this.__wrapped__.value(), t = this.__dir__, i = _e(e), s = t < 0, f = i ? e.length : 0, v = Sp(0, f, this.__views__), _ = v.start, T = v.end, A = T - _, B = s ? T : _ - 1, W = this.__iteratees__, q = W.length, K = 0, re = _t(A, this.__takeCount__);
          if (!i || !s && f == A && re == A)
            return Ju(e, this.__actions__);
          var de = [];
          e:
            for (; A-- && K < re; ) {
              B += t;
              for (var Me = -1, pe = e[B]; ++Me < q; ) {
                var ke = W[Me], Le = ke.iteratee, Xt = ke.type, Pt = Le(pe);
                if (Xt == he)
                  pe = Pt;
                else if (!Pt) {
                  if (Xt == we)
                    continue e;
                  break e;
                }
              }
              de[K++] = pe;
            }
          return de;
        }
        De.prototype = Kr(Go.prototype), De.prototype.constructor = De;
        function yr(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function dd() {
          this.__data__ = zi ? zi(null) : {}, this.size = 0;
        }
        function pd(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0, t;
        }
        function hd(e) {
          var t = this.__data__;
          if (zi) {
            var i = t[e];
            return i === E ? l : i;
          }
          return Ge.call(t, e) ? t[e] : l;
        }
        function gd(e) {
          var t = this.__data__;
          return zi ? t[e] !== l : Ge.call(t, e);
        }
        function vd(e, t) {
          var i = this.__data__;
          return this.size += this.has(e) ? 0 : 1, i[e] = zi && t === l ? E : t, this;
        }
        yr.prototype.clear = dd, yr.prototype.delete = pd, yr.prototype.get = hd, yr.prototype.has = gd, yr.prototype.set = vd;
        function Ln(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function md() {
          this.__data__ = [], this.size = 0;
        }
        function yd(e) {
          var t = this.__data__, i = Yo(t, e);
          if (i < 0)
            return !1;
          var s = t.length - 1;
          return i == s ? t.pop() : Fo.call(t, i, 1), --this.size, !0;
        }
        function bd(e) {
          var t = this.__data__, i = Yo(t, e);
          return i < 0 ? l : t[i][1];
        }
        function xd(e) {
          return Yo(this.__data__, e) > -1;
        }
        function wd(e, t) {
          var i = this.__data__, s = Yo(i, e);
          return s < 0 ? (++this.size, i.push([e, t])) : i[s][1] = t, this;
        }
        Ln.prototype.clear = md, Ln.prototype.delete = yd, Ln.prototype.get = bd, Ln.prototype.has = xd, Ln.prototype.set = wd;
        function Bn(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var s = e[t];
            this.set(s[0], s[1]);
          }
        }
        function _d() {
          this.size = 0, this.__data__ = {
            hash: new yr(),
            map: new (Ai || Ln)(),
            string: new yr()
          };
        }
        function Sd(e) {
          var t = ia(this, e).delete(e);
          return this.size -= t ? 1 : 0, t;
        }
        function Ed(e) {
          return ia(this, e).get(e);
        }
        function Td(e) {
          return ia(this, e).has(e);
        }
        function Od(e, t) {
          var i = ia(this, e), s = i.size;
          return i.set(e, t), this.size += i.size == s ? 0 : 1, this;
        }
        Bn.prototype.clear = _d, Bn.prototype.delete = Sd, Bn.prototype.get = Ed, Bn.prototype.has = Td, Bn.prototype.set = Od;
        function br(e) {
          var t = -1, i = e == null ? 0 : e.length;
          for (this.__data__ = new Bn(); ++t < i; )
            this.add(e[t]);
        }
        function Rd(e) {
          return this.__data__.set(e, E), this;
        }
        function Id(e) {
          return this.__data__.has(e);
        }
        br.prototype.add = br.prototype.push = Rd, br.prototype.has = Id;
        function vn(e) {
          var t = this.__data__ = new Ln(e);
          this.size = t.size;
        }
        function Ad() {
          this.__data__ = new Ln(), this.size = 0;
        }
        function Md(e) {
          var t = this.__data__, i = t.delete(e);
          return this.size = t.size, i;
        }
        function zd(e) {
          return this.__data__.get(e);
        }
        function Pd(e) {
          return this.__data__.has(e);
        }
        function Cd(e, t) {
          var i = this.__data__;
          if (i instanceof Ln) {
            var s = i.__data__;
            if (!Ai || s.length < z - 1)
              return s.push([e, t]), this.size = ++i.size, this;
            i = this.__data__ = new Bn(s);
          }
          return i.set(e, t), this.size = i.size, this;
        }
        vn.prototype.clear = Ad, vn.prototype.delete = Md, vn.prototype.get = zd, vn.prototype.has = Pd, vn.prototype.set = Cd;
        function Au(e, t) {
          var i = _e(e), s = !i && Er(e), f = !i && !s && tr(e), v = !i && !s && !f && Jr(e), _ = i || s || f || v, T = _ ? Dn(e.length, gn) : [], A = T.length;
          for (var B in e)
            (t || Ge.call(e, B)) && !(_ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (B == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            f && (B == "offset" || B == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            v && (B == "buffer" || B == "byteLength" || B == "byteOffset") || // Skip index properties.
            qn(B, A))) && T.push(B);
          return T;
        }
        function Mu(e) {
          var t = e.length;
          return t ? e[ps(0, t - 1)] : l;
        }
        function kd(e, t) {
          return oa(Bt(e), xr(t, 0, e.length));
        }
        function Dd(e) {
          return oa(Bt(e));
        }
        function rs(e, t, i) {
          (i !== l && !mn(e[t], i) || i === l && !(t in e)) && Wn(e, t, i);
        }
        function Ci(e, t, i) {
          var s = e[t];
          (!(Ge.call(e, t) && mn(s, i)) || i === l && !(t in e)) && Wn(e, t, i);
        }
        function Yo(e, t) {
          for (var i = e.length; i--; )
            if (mn(e[i][0], t))
              return i;
          return -1;
        }
        function Ld(e, t, i, s) {
          return jn(e, function(f, v, _) {
            t(s, f, i(f), _);
          }), s;
        }
        function zu(e, t) {
          return e && Rn(t, pt(t), e);
        }
        function Bd(e, t) {
          return e && Rn(t, Ft(t), e);
        }
        function Wn(e, t, i) {
          t == "__proto__" && No ? No(e, t, {
            configurable: !0,
            enumerable: !0,
            value: i,
            writable: !0
          }) : e[t] = i;
        }
        function is(e, t) {
          for (var i = -1, s = t.length, f = I(s), v = e == null; ++i < s; )
            f[i] = v ? l : Ws(e, t[i]);
          return f;
        }
        function xr(e, t, i) {
          return e === e && (i !== l && (e = e <= i ? e : i), t !== l && (e = e >= t ? e : t)), e;
        }
        function on(e, t, i, s, f, v) {
          var _, T = t & j, A = t & Fe, B = t & me;
          if (i && (_ = f ? i(e, s, f, v) : i(e)), _ !== l)
            return _;
          if (!tt(e))
            return e;
          var W = _e(e);
          if (W) {
            if (_ = Tp(e), !T)
              return Bt(e, _);
          } else {
            var q = St(e), K = q == wt || q == Zt;
            if (tr(e))
              return tl(e, T);
            if (q == ht || q == st || K && !f) {
              if (_ = A || K ? {} : xl(e), !T)
                return A ? hp(e, Bd(_, e)) : pp(e, zu(_, e));
            } else {
              if (!Xe[q])
                return f ? e : {};
              _ = Op(e, q, T);
            }
          }
          v || (v = new vn());
          var re = v.get(e);
          if (re)
            return re;
          v.set(e, _), Vl(e) ? e.forEach(function(pe) {
            _.add(on(pe, t, i, pe, e, v));
          }) : Xl(e) && e.forEach(function(pe, ke) {
            _.set(ke, on(pe, t, i, ke, e, v));
          });
          var de = B ? A ? Es : Ss : A ? Ft : pt, Me = W ? l : de(e);
          return Lt(Me || e, function(pe, ke) {
            Me && (ke = pe, pe = e[ke]), Ci(_, ke, on(pe, t, i, ke, e, v));
          }), _;
        }
        function Wd(e) {
          var t = pt(e);
          return function(i) {
            return Pu(i, e, t);
          };
        }
        function Pu(e, t, i) {
          var s = i.length;
          if (e == null)
            return !s;
          for (e = Ee(e); s--; ) {
            var f = i[s], v = t[f], _ = e[f];
            if (_ === l && !(f in e) || !v(_))
              return !1;
          }
          return !0;
        }
        function Cu(e, t, i) {
          if (typeof e != "function")
            throw new mt(F);
          return Ni(function() {
            e.apply(l, i);
          }, t);
        }
        function ki(e, t, i, s) {
          var f = -1, v = nn, _ = !0, T = e.length, A = [], B = t.length;
          if (!T)
            return A;
          i && (t = Ve(t, vt(i))), s ? (v = Xn, _ = !1) : t.length >= z && (v = vr, _ = !1, t = new br(t));
          e:
            for (; ++f < T; ) {
              var W = e[f], q = i == null ? W : i(W);
              if (W = s || W !== 0 ? W : 0, _ && q === q) {
                for (var K = B; K--; )
                  if (t[K] === q)
                    continue e;
                A.push(W);
              } else v(t, q, s) || A.push(W);
            }
          return A;
        }
        var jn = al(On), ku = al(as, !0);
        function Fd(e, t) {
          var i = !0;
          return jn(e, function(s, f, v) {
            return i = !!t(s, f, v), i;
          }), i;
        }
        function Xo(e, t, i) {
          for (var s = -1, f = e.length; ++s < f; ) {
            var v = e[s], _ = t(v);
            if (_ != null && (T === l ? _ === _ && !Yt(_) : i(_, T)))
              var T = _, A = v;
          }
          return A;
        }
        function Nd(e, t, i, s) {
          var f = e.length;
          for (i = Te(i), i < 0 && (i = -i > f ? 0 : f + i), s = s === l || s > f ? f : Te(s), s < 0 && (s += f), s = i > s ? 0 : jl(s); i < s; )
            e[i++] = t;
          return e;
        }
        function Du(e, t) {
          var i = [];
          return jn(e, function(s, f, v) {
            t(s, f, v) && i.push(s);
          }), i;
        }
        function yt(e, t, i, s, f) {
          var v = -1, _ = e.length;
          for (i || (i = Ip), f || (f = []); ++v < _; ) {
            var T = e[v];
            t > 0 && i(T) ? t > 1 ? yt(T, t - 1, i, s, f) : hn(f, T) : s || (f[f.length] = T);
          }
          return f;
        }
        var os = sl(), Lu = sl(!0);
        function On(e, t) {
          return e && os(e, t, pt);
        }
        function as(e, t) {
          return e && Lu(e, t, pt);
        }
        function Ko(e, t) {
          return $t(t, function(i) {
            return Un(e[i]);
          });
        }
        function wr(e, t) {
          t = Qn(t, e);
          for (var i = 0, s = t.length; e != null && i < s; )
            e = e[In(t[i++])];
          return i && i == s ? e : l;
        }
        function Bu(e, t, i) {
          var s = t(e);
          return _e(e) ? s : hn(s, i(e));
        }
        function Mt(e) {
          return e == null ? e === l ? ee : Ut : mr && mr in Ee(e) ? _p(e) : Dp(e);
        }
        function ss(e, t) {
          return e > t;
        }
        function qd(e, t) {
          return e != null && Ge.call(e, t);
        }
        function Ud(e, t) {
          return e != null && t in Ee(e);
        }
        function Hd(e, t, i) {
          return e >= _t(t, i) && e < ct(t, i);
        }
        function us(e, t, i) {
          for (var s = i ? Xn : nn, f = e[0].length, v = e.length, _ = v, T = I(v), A = 1 / 0, B = []; _--; ) {
            var W = e[_];
            _ && t && (W = Ve(W, vt(t))), A = _t(W.length, A), T[_] = !i && (t || f >= 120 && W.length >= 120) ? new br(_ && W) : l;
          }
          W = e[0];
          var q = -1, K = T[0];
          e:
            for (; ++q < f && B.length < A; ) {
              var re = W[q], de = t ? t(re) : re;
              if (re = i || re !== 0 ? re : 0, !(K ? vr(K, de) : s(B, de, i))) {
                for (_ = v; --_; ) {
                  var Me = T[_];
                  if (!(Me ? vr(Me, de) : s(e[_], de, i)))
                    continue e;
                }
                K && K.push(de), B.push(re);
              }
            }
          return B;
        }
        function $d(e, t, i, s) {
          return On(e, function(f, v, _) {
            t(s, i(f), v, _);
          }), s;
        }
        function Di(e, t, i) {
          t = Qn(t, e), e = El(e, t);
          var s = e == null ? e : e[In(sn(t))];
          return s == null ? l : It(s, e, i);
        }
        function Wu(e) {
          return rt(e) && Mt(e) == st;
        }
        function Gd(e) {
          return rt(e) && Mt(e) == fe;
        }
        function Yd(e) {
          return rt(e) && Mt(e) == J;
        }
        function Li(e, t, i, s, f) {
          return e === t ? !0 : e == null || t == null || !rt(e) && !rt(t) ? e !== e && t !== t : Xd(e, t, i, s, Li, f);
        }
        function Xd(e, t, i, s, f, v) {
          var _ = _e(e), T = _e(t), A = _ ? Je : St(e), B = T ? Je : St(t);
          A = A == st ? ht : A, B = B == st ? ht : B;
          var W = A == ht, q = B == ht, K = A == B;
          if (K && tr(e)) {
            if (!tr(t))
              return !1;
            _ = !0, W = !1;
          }
          if (K && !W)
            return v || (v = new vn()), _ || Jr(e) ? ml(e, t, i, s, f, v) : xp(e, t, A, i, s, f, v);
          if (!(i & be)) {
            var re = W && Ge.call(e, "__wrapped__"), de = q && Ge.call(t, "__wrapped__");
            if (re || de) {
              var Me = re ? e.value() : e, pe = de ? t.value() : t;
              return v || (v = new vn()), f(Me, pe, i, s, v);
            }
          }
          return K ? (v || (v = new vn()), wp(e, t, i, s, f, v)) : !1;
        }
        function Kd(e) {
          return rt(e) && St(e) == it;
        }
        function ls(e, t, i, s) {
          var f = i.length, v = f, _ = !s;
          if (e == null)
            return !v;
          for (e = Ee(e); f--; ) {
            var T = i[f];
            if (_ && T[2] ? T[1] !== e[T[0]] : !(T[0] in e))
              return !1;
          }
          for (; ++f < v; ) {
            T = i[f];
            var A = T[0], B = e[A], W = T[1];
            if (_ && T[2]) {
              if (B === l && !(A in e))
                return !1;
            } else {
              var q = new vn();
              if (s)
                var K = s(B, W, A, e, t, q);
              if (!(K === l ? Li(W, B, be | He, s, q) : K))
                return !1;
            }
          }
          return !0;
        }
        function Fu(e) {
          if (!tt(e) || Mp(e))
            return !1;
          var t = Un(e) ? Kf : Ia;
          return t.test(Sr(e));
        }
        function Vd(e) {
          return rt(e) && Mt(e) == Ot;
        }
        function Zd(e) {
          return rt(e) && St(e) == Y;
        }
        function jd(e) {
          return rt(e) && fa(e.length) && !!qe[Mt(e)];
        }
        function Nu(e) {
          return typeof e == "function" ? e : e == null ? Nt : typeof e == "object" ? _e(e) ? Hu(e[0], e[1]) : Uu(e) : uc(e);
        }
        function cs(e) {
          if (!Fi(e))
            return ed(e);
          var t = [];
          for (var i in Ee(e))
            Ge.call(e, i) && i != "constructor" && t.push(i);
          return t;
        }
        function Jd(e) {
          if (!tt(e))
            return kp(e);
          var t = Fi(e), i = [];
          for (var s in e)
            s == "constructor" && (t || !Ge.call(e, s)) || i.push(s);
          return i;
        }
        function fs(e, t) {
          return e < t;
        }
        function qu(e, t) {
          var i = -1, s = Wt(e) ? I(e.length) : [];
          return jn(e, function(f, v, _) {
            s[++i] = t(f, v, _);
          }), s;
        }
        function Uu(e) {
          var t = Os(e);
          return t.length == 1 && t[0][2] ? _l(t[0][0], t[0][1]) : function(i) {
            return i === e || ls(i, e, t);
          };
        }
        function Hu(e, t) {
          return Is(e) && wl(t) ? _l(In(e), t) : function(i) {
            var s = Ws(i, e);
            return s === l && s === t ? Fs(i, e) : Li(t, s, be | He);
          };
        }
        function Vo(e, t, i, s, f) {
          e !== t && os(t, function(v, _) {
            if (f || (f = new vn()), tt(v))
              Qd(e, t, _, i, Vo, s, f);
            else {
              var T = s ? s(Ms(e, _), v, _ + "", e, t, f) : l;
              T === l && (T = v), rs(e, _, T);
            }
          }, Ft);
        }
        function Qd(e, t, i, s, f, v, _) {
          var T = Ms(e, i), A = Ms(t, i), B = _.get(A);
          if (B) {
            rs(e, i, B);
            return;
          }
          var W = v ? v(T, A, i + "", e, t, _) : l, q = W === l;
          if (q) {
            var K = _e(A), re = !K && tr(A), de = !K && !re && Jr(A);
            W = A, K || re || de ? _e(T) ? W = T : ot(T) ? W = Bt(T) : re ? (q = !1, W = tl(A, !0)) : de ? (q = !1, W = nl(A, !0)) : W = [] : qi(A) || Er(A) ? (W = T, Er(T) ? W = Jl(T) : (!tt(T) || Un(T)) && (W = xl(A))) : q = !1;
          }
          q && (_.set(A, W), f(W, A, s, v, _), _.delete(A)), rs(e, i, W);
        }
        function $u(e, t) {
          var i = e.length;
          if (i)
            return t += t < 0 ? i : 0, qn(t, i) ? e[t] : l;
        }
        function Gu(e, t, i) {
          t.length ? t = Ve(t, function(v) {
            return _e(v) ? function(_) {
              return wr(_, v.length === 1 ? v[0] : v);
            } : v;
          }) : t = [Nt];
          var s = -1;
          t = Ve(t, vt(le()));
          var f = qu(e, function(v, _, T) {
            var A = Ve(t, function(B) {
              return B(v);
            });
            return { criteria: A, index: ++s, value: v };
          });
          return Ka(f, function(v, _) {
            return dp(v, _, i);
          });
        }
        function ep(e, t) {
          return Yu(e, t, function(i, s) {
            return Fs(e, s);
          });
        }
        function Yu(e, t, i) {
          for (var s = -1, f = t.length, v = {}; ++s < f; ) {
            var _ = t[s], T = wr(e, _);
            i(T, _) && Bi(v, Qn(_, e), T);
          }
          return v;
        }
        function tp(e) {
          return function(t) {
            return wr(t, e);
          };
        }
        function ds(e, t, i, s) {
          var f = s ? Ei : Kn, v = -1, _ = t.length, T = e;
          for (e === t && (t = Bt(t)), i && (T = Ve(e, vt(i))); ++v < _; )
            for (var A = 0, B = t[v], W = i ? i(B) : B; (A = f(T, W, A, s)) > -1; )
              T !== e && Fo.call(T, A, 1), Fo.call(e, A, 1);
          return e;
        }
        function Xu(e, t) {
          for (var i = e ? t.length : 0, s = i - 1; i--; ) {
            var f = t[i];
            if (i == s || f !== v) {
              var v = f;
              qn(f) ? Fo.call(e, f, 1) : vs(e, f);
            }
          }
          return e;
        }
        function ps(e, t) {
          return e + Uo(Ru() * (t - e + 1));
        }
        function np(e, t, i, s) {
          for (var f = -1, v = ct(qo((t - e) / (i || 1)), 0), _ = I(v); v--; )
            _[s ? v : ++f] = e, e += i;
          return _;
        }
        function hs(e, t) {
          var i = "";
          if (!e || t < 1 || t > je)
            return i;
          do
            t % 2 && (i += e), t = Uo(t / 2), t && (e += e);
          while (t);
          return i;
        }
        function Pe(e, t) {
          return zs(Sl(e, t, Nt), e + "");
        }
        function rp(e) {
          return Mu(Qr(e));
        }
        function ip(e, t) {
          var i = Qr(e);
          return oa(i, xr(t, 0, i.length));
        }
        function Bi(e, t, i, s) {
          if (!tt(e))
            return e;
          t = Qn(t, e);
          for (var f = -1, v = t.length, _ = v - 1, T = e; T != null && ++f < v; ) {
            var A = In(t[f]), B = i;
            if (A === "__proto__" || A === "constructor" || A === "prototype")
              return e;
            if (f != _) {
              var W = T[A];
              B = s ? s(W, A, T) : l, B === l && (B = tt(W) ? W : qn(t[f + 1]) ? [] : {});
            }
            Ci(T, A, B), T = T[A];
          }
          return e;
        }
        var Ku = Ho ? function(e, t) {
          return Ho.set(e, t), e;
        } : Nt, op = No ? function(e, t) {
          return No(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: qs(t),
            writable: !0
          });
        } : Nt;
        function ap(e) {
          return oa(Qr(e));
        }
        function an(e, t, i) {
          var s = -1, f = e.length;
          t < 0 && (t = -t > f ? 0 : f + t), i = i > f ? f : i, i < 0 && (i += f), f = t > i ? 0 : i - t >>> 0, t >>>= 0;
          for (var v = I(f); ++s < f; )
            v[s] = e[s + t];
          return v;
        }
        function sp(e, t) {
          var i;
          return jn(e, function(s, f, v) {
            return i = t(s, f, v), !i;
          }), !!i;
        }
        function Zo(e, t, i) {
          var s = 0, f = e == null ? s : e.length;
          if (typeof t == "number" && t === t && f <= ft) {
            for (; s < f; ) {
              var v = s + f >>> 1, _ = e[v];
              _ !== null && !Yt(_) && (i ? _ <= t : _ < t) ? s = v + 1 : f = v;
            }
            return f;
          }
          return gs(e, t, Nt, i);
        }
        function gs(e, t, i, s) {
          var f = 0, v = e == null ? 0 : e.length;
          if (v === 0)
            return 0;
          t = i(t);
          for (var _ = t !== t, T = t === null, A = Yt(t), B = t === l; f < v; ) {
            var W = Uo((f + v) / 2), q = i(e[W]), K = q !== l, re = q === null, de = q === q, Me = Yt(q);
            if (_)
              var pe = s || de;
            else B ? pe = de && (s || K) : T ? pe = de && K && (s || !re) : A ? pe = de && K && !re && (s || !Me) : re || Me ? pe = !1 : pe = s ? q <= t : q < t;
            pe ? f = W + 1 : v = W;
          }
          return _t(v, Dt);
        }
        function Vu(e, t) {
          for (var i = -1, s = e.length, f = 0, v = []; ++i < s; ) {
            var _ = e[i], T = t ? t(_) : _;
            if (!i || !mn(T, A)) {
              var A = T;
              v[f++] = _ === 0 ? 0 : _;
            }
          }
          return v;
        }
        function Zu(e) {
          return typeof e == "number" ? e : Yt(e) ? Ke : +e;
        }
        function Gt(e) {
          if (typeof e == "string")
            return e;
          if (_e(e))
            return Ve(e, Gt) + "";
          if (Yt(e))
            return Iu ? Iu.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -ue ? "-0" : t;
        }
        function Jn(e, t, i) {
          var s = -1, f = nn, v = e.length, _ = !0, T = [], A = T;
          if (i)
            _ = !1, f = Xn;
          else if (v >= z) {
            var B = t ? null : yp(e);
            if (B)
              return c(B);
            _ = !1, f = vr, A = new br();
          } else
            A = t ? [] : T;
          e:
            for (; ++s < v; ) {
              var W = e[s], q = t ? t(W) : W;
              if (W = i || W !== 0 ? W : 0, _ && q === q) {
                for (var K = A.length; K--; )
                  if (A[K] === q)
                    continue e;
                t && A.push(q), T.push(W);
              } else f(A, q, i) || (A !== T && A.push(q), T.push(W));
            }
          return T;
        }
        function vs(e, t) {
          return t = Qn(t, e), e = El(e, t), e == null || delete e[In(sn(t))];
        }
        function ju(e, t, i, s) {
          return Bi(e, t, i(wr(e, t)), s);
        }
        function jo(e, t, i, s) {
          for (var f = e.length, v = s ? f : -1; (s ? v-- : ++v < f) && t(e[v], v, e); )
            ;
          return i ? an(e, s ? 0 : v, s ? v + 1 : f) : an(e, s ? v + 1 : 0, s ? f : v);
        }
        function Ju(e, t) {
          var i = e;
          return i instanceof De && (i = i.value()), Ur(t, function(s, f) {
            return f.func.apply(f.thisArg, hn([s], f.args));
          }, i);
        }
        function ms(e, t, i) {
          var s = e.length;
          if (s < 2)
            return s ? Jn(e[0]) : [];
          for (var f = -1, v = I(s); ++f < s; )
            for (var _ = e[f], T = -1; ++T < s; )
              T != f && (v[f] = ki(v[f] || _, e[T], t, i));
          return Jn(yt(v, 1), t, i);
        }
        function Qu(e, t, i) {
          for (var s = -1, f = e.length, v = t.length, _ = {}; ++s < f; ) {
            var T = s < v ? t[s] : l;
            i(_, e[s], T);
          }
          return _;
        }
        function ys(e) {
          return ot(e) ? e : [];
        }
        function bs(e) {
          return typeof e == "function" ? e : Nt;
        }
        function Qn(e, t) {
          return _e(e) ? e : Is(e, t) ? [e] : Il(Ue(e));
        }
        var up = Pe;
        function er(e, t, i) {
          var s = e.length;
          return i = i === l ? s : i, !t && i >= s ? e : an(e, t, i);
        }
        var el = Vf || function(e) {
          return lt.clearTimeout(e);
        };
        function tl(e, t) {
          if (t)
            return e.slice();
          var i = e.length, s = _u ? _u(i) : new e.constructor(i);
          return e.copy(s), s;
        }
        function xs(e) {
          var t = new e.constructor(e.byteLength);
          return new Bo(t).set(new Bo(e)), t;
        }
        function lp(e, t) {
          var i = t ? xs(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.byteLength);
        }
        function cp(e) {
          var t = new e.constructor(e.source, ci.exec(e));
          return t.lastIndex = e.lastIndex, t;
        }
        function fp(e) {
          return Pi ? Ee(Pi.call(e)) : {};
        }
        function nl(e, t) {
          var i = t ? xs(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.length);
        }
        function rl(e, t) {
          if (e !== t) {
            var i = e !== l, s = e === null, f = e === e, v = Yt(e), _ = t !== l, T = t === null, A = t === t, B = Yt(t);
            if (!T && !B && !v && e > t || v && _ && A && !T && !B || s && _ && A || !i && A || !f)
              return 1;
            if (!s && !v && !B && e < t || B && i && f && !s && !v || T && i && f || !_ && f || !A)
              return -1;
          }
          return 0;
        }
        function dp(e, t, i) {
          for (var s = -1, f = e.criteria, v = t.criteria, _ = f.length, T = i.length; ++s < _; ) {
            var A = rl(f[s], v[s]);
            if (A) {
              if (s >= T)
                return A;
              var B = i[s];
              return A * (B == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        function il(e, t, i, s) {
          for (var f = -1, v = e.length, _ = i.length, T = -1, A = t.length, B = ct(v - _, 0), W = I(A + B), q = !s; ++T < A; )
            W[T] = t[T];
          for (; ++f < _; )
            (q || f < v) && (W[i[f]] = e[f]);
          for (; B--; )
            W[T++] = e[f++];
          return W;
        }
        function ol(e, t, i, s) {
          for (var f = -1, v = e.length, _ = -1, T = i.length, A = -1, B = t.length, W = ct(v - T, 0), q = I(W + B), K = !s; ++f < W; )
            q[f] = e[f];
          for (var re = f; ++A < B; )
            q[re + A] = t[A];
          for (; ++_ < T; )
            (K || f < v) && (q[re + i[_]] = e[f++]);
          return q;
        }
        function Bt(e, t) {
          var i = -1, s = e.length;
          for (t || (t = I(s)); ++i < s; )
            t[i] = e[i];
          return t;
        }
        function Rn(e, t, i, s) {
          var f = !i;
          i || (i = {});
          for (var v = -1, _ = t.length; ++v < _; ) {
            var T = t[v], A = s ? s(i[T], e[T], T, i, e) : l;
            A === l && (A = e[T]), f ? Wn(i, T, A) : Ci(i, T, A);
          }
          return i;
        }
        function pp(e, t) {
          return Rn(e, Rs(e), t);
        }
        function hp(e, t) {
          return Rn(e, yl(e), t);
        }
        function Jo(e, t) {
          return function(i, s) {
            var f = _e(i) ? Ha : Ld, v = t ? t() : {};
            return f(i, e, le(s, 2), v);
          };
        }
        function Vr(e) {
          return Pe(function(t, i) {
            var s = -1, f = i.length, v = f > 1 ? i[f - 1] : l, _ = f > 2 ? i[2] : l;
            for (v = e.length > 3 && typeof v == "function" ? (f--, v) : l, _ && zt(i[0], i[1], _) && (v = f < 3 ? l : v, f = 1), t = Ee(t); ++s < f; ) {
              var T = i[s];
              T && e(t, T, s, v);
            }
            return t;
          });
        }
        function al(e, t) {
          return function(i, s) {
            if (i == null)
              return i;
            if (!Wt(i))
              return e(i, s);
            for (var f = i.length, v = t ? f : -1, _ = Ee(i); (t ? v-- : ++v < f) && s(_[v], v, _) !== !1; )
              ;
            return i;
          };
        }
        function sl(e) {
          return function(t, i, s) {
            for (var f = -1, v = Ee(t), _ = s(t), T = _.length; T--; ) {
              var A = _[e ? T : ++f];
              if (i(v[A], A, v) === !1)
                break;
            }
            return t;
          };
        }
        function gp(e, t, i) {
          var s = t & Be, f = Wi(e);
          function v() {
            var _ = this && this !== lt && this instanceof v ? f : e;
            return _.apply(s ? i : this, arguments);
          }
          return v;
        }
        function ul(e) {
          return function(t) {
            t = Ue(t);
            var i = Vn(t) ? x(t) : l, s = i ? i[0] : t.charAt(0), f = i ? er(i, 1).join("") : t.slice(1);
            return s[e]() + f;
          };
        }
        function Zr(e) {
          return function(t) {
            return Ur(ac(oc(t).replace(Wa, "")), e, "");
          };
        }
        function Wi(e) {
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
        function vp(e, t, i) {
          var s = Wi(e);
          function f() {
            for (var v = arguments.length, _ = I(v), T = v, A = jr(f); T--; )
              _[T] = arguments[T];
            var B = v < 3 && _[0] !== A && _[v - 1] !== A ? [] : u(_, A);
            if (v -= B.length, v < i)
              return pl(
                e,
                t,
                Qo,
                f.placeholder,
                l,
                _,
                B,
                l,
                l,
                i - v
              );
            var W = this && this !== lt && this instanceof f ? s : e;
            return It(W, this, _);
          }
          return f;
        }
        function ll(e) {
          return function(t, i, s) {
            var f = Ee(t);
            if (!Wt(t)) {
              var v = le(i, 3);
              t = pt(t), i = function(T) {
                return v(f[T], T, f);
              };
            }
            var _ = e(t, i, s);
            return _ > -1 ? f[v ? t[_] : _] : l;
          };
        }
        function cl(e) {
          return Nn(function(t) {
            var i = t.length, s = i, f = rn.prototype.thru;
            for (e && t.reverse(); s--; ) {
              var v = t[s];
              if (typeof v != "function")
                throw new mt(F);
              if (f && !_ && ra(v) == "wrapper")
                var _ = new rn([], !0);
            }
            for (s = _ ? s : i; ++s < i; ) {
              v = t[s];
              var T = ra(v), A = T == "wrapper" ? Ts(v) : l;
              A && As(A[0]) && A[1] == (P | xe | ze | Re) && !A[4].length && A[9] == 1 ? _ = _[ra(A[0])].apply(_, A[3]) : _ = v.length == 1 && As(v) ? _[T]() : _.thru(v);
            }
            return function() {
              var B = arguments, W = B[0];
              if (_ && B.length == 1 && _e(W))
                return _.plant(W).value();
              for (var q = 0, K = i ? t[q].apply(this, B) : W; ++q < i; )
                K = t[q].call(this, K);
              return K;
            };
          });
        }
        function Qo(e, t, i, s, f, v, _, T, A, B) {
          var W = t & P, q = t & Be, K = t & Ne, re = t & (xe | Oe), de = t & Se, Me = K ? l : Wi(e);
          function pe() {
            for (var ke = arguments.length, Le = I(ke), Xt = ke; Xt--; )
              Le[Xt] = arguments[Xt];
            if (re)
              var Pt = jr(pe), Kt = Va(Le, Pt);
            if (s && (Le = il(Le, s, f, re)), v && (Le = ol(Le, v, _, re)), ke -= Kt, re && ke < B) {
              var at = u(Le, Pt);
              return pl(
                e,
                t,
                Qo,
                pe.placeholder,
                i,
                Le,
                at,
                T,
                A,
                B - ke
              );
            }
            var yn = q ? i : this, $n = K ? yn[e] : e;
            return ke = Le.length, T ? Le = Lp(Le, T) : de && ke > 1 && Le.reverse(), W && A < ke && (Le.length = A), this && this !== lt && this instanceof pe && ($n = Me || Wi($n)), $n.apply(yn, Le);
          }
          return pe;
        }
        function fl(e, t) {
          return function(i, s) {
            return $d(i, e, t(s), {});
          };
        }
        function ea(e, t) {
          return function(i, s) {
            var f;
            if (i === l && s === l)
              return t;
            if (i !== l && (f = i), s !== l) {
              if (f === l)
                return s;
              typeof i == "string" || typeof s == "string" ? (i = Gt(i), s = Gt(s)) : (i = Zu(i), s = Zu(s)), f = e(i, s);
            }
            return f;
          };
        }
        function ws(e) {
          return Nn(function(t) {
            return t = Ve(t, vt(le())), Pe(function(i) {
              var s = this;
              return e(t, function(f) {
                return It(f, s, i);
              });
            });
          });
        }
        function ta(e, t) {
          t = t === l ? " " : Gt(t);
          var i = t.length;
          if (i < 2)
            return i ? hs(t, e) : t;
          var s = hs(t, qo(e / S(t)));
          return Vn(t) ? er(x(s), 0, e).join("") : s.slice(0, e);
        }
        function mp(e, t, i, s) {
          var f = t & Be, v = Wi(e);
          function _() {
            for (var T = -1, A = arguments.length, B = -1, W = s.length, q = I(W + A), K = this && this !== lt && this instanceof _ ? v : e; ++B < W; )
              q[B] = s[B];
            for (; A--; )
              q[B++] = arguments[++T];
            return It(K, f ? i : this, q);
          }
          return _;
        }
        function dl(e) {
          return function(t, i, s) {
            return s && typeof s != "number" && zt(t, i, s) && (i = s = l), t = Hn(t), i === l ? (i = t, t = 0) : i = Hn(i), s = s === l ? t < i ? 1 : -1 : Hn(s), np(t, i, s, e);
          };
        }
        function na(e) {
          return function(t, i) {
            return typeof t == "string" && typeof i == "string" || (t = un(t), i = un(i)), e(t, i);
          };
        }
        function pl(e, t, i, s, f, v, _, T, A, B) {
          var W = t & xe, q = W ? _ : l, K = W ? l : _, re = W ? v : l, de = W ? l : v;
          t |= W ? ze : We, t &= ~(W ? We : ze), t & Ce || (t &= -4);
          var Me = [
            e,
            t,
            f,
            re,
            q,
            de,
            K,
            T,
            A,
            B
          ], pe = i.apply(l, Me);
          return As(e) && Tl(pe, Me), pe.placeholder = s, Ol(pe, e, t);
        }
        function _s(e) {
          var t = ye[e];
          return function(i, s) {
            if (i = un(i), s = s == null ? 0 : _t(Te(s), 292), s && Ou(i)) {
              var f = (Ue(i) + "e").split("e"), v = t(f[0] + "e" + (+f[1] + s));
              return f = (Ue(v) + "e").split("e"), +(f[0] + "e" + (+f[1] - s));
            }
            return t(i);
          };
        }
        var yp = Yr && 1 / c(new Yr([, -0]))[1] == ue ? function(e) {
          return new Yr(e);
        } : $s;
        function hl(e) {
          return function(t) {
            var i = St(t);
            return i == it ? o(t) : i == Y ? d(t) : En(t, e(t));
          };
        }
        function Fn(e, t, i, s, f, v, _, T) {
          var A = t & Ne;
          if (!A && typeof e != "function")
            throw new mt(F);
          var B = s ? s.length : 0;
          if (B || (t &= -97, s = f = l), _ = _ === l ? _ : ct(Te(_), 0), T = T === l ? T : Te(T), B -= f ? f.length : 0, t & We) {
            var W = s, q = f;
            s = f = l;
          }
          var K = A ? l : Ts(e), re = [
            e,
            t,
            i,
            s,
            f,
            W,
            q,
            v,
            _,
            T
          ];
          if (K && Cp(re, K), e = re[0], t = re[1], i = re[2], s = re[3], f = re[4], T = re[9] = re[9] === l ? A ? 0 : e.length : ct(re[9] - B, 0), !T && t & (xe | Oe) && (t &= -25), !t || t == Be)
            var de = gp(e, t, i);
          else t == xe || t == Oe ? de = vp(e, t, T) : (t == ze || t == (Be | ze)) && !f.length ? de = mp(e, t, i, s) : de = Qo.apply(l, re);
          var Me = K ? Ku : Tl;
          return Ol(Me(de, re), e, t);
        }
        function gl(e, t, i, s) {
          return e === l || mn(e, Gr[i]) && !Ge.call(s, i) ? t : e;
        }
        function vl(e, t, i, s, f, v) {
          return tt(e) && tt(t) && (v.set(t, e), Vo(e, t, l, vl, v), v.delete(t)), e;
        }
        function bp(e) {
          return qi(e) ? l : e;
        }
        function ml(e, t, i, s, f, v) {
          var _ = i & be, T = e.length, A = t.length;
          if (T != A && !(_ && A > T))
            return !1;
          var B = v.get(e), W = v.get(t);
          if (B && W)
            return B == t && W == e;
          var q = -1, K = !0, re = i & He ? new br() : l;
          for (v.set(e, t), v.set(t, e); ++q < T; ) {
            var de = e[q], Me = t[q];
            if (s)
              var pe = _ ? s(Me, de, q, t, e, v) : s(de, Me, q, e, t, v);
            if (pe !== l) {
              if (pe)
                continue;
              K = !1;
              break;
            }
            if (re) {
              if (!kn(t, function(ke, Le) {
                if (!vr(re, Le) && (de === ke || f(de, ke, i, s, v)))
                  return re.push(Le);
              })) {
                K = !1;
                break;
              }
            } else if (!(de === Me || f(de, Me, i, s, v))) {
              K = !1;
              break;
            }
          }
          return v.delete(e), v.delete(t), K;
        }
        function xp(e, t, i, s, f, v, _) {
          switch (i) {
            case se:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              e = e.buffer, t = t.buffer;
            case fe:
              return !(e.byteLength != t.byteLength || !v(new Bo(e), new Bo(t)));
            case xt:
            case J:
            case Tt:
              return mn(+e, +t);
            case Et:
              return e.name == t.name && e.message == t.message;
            case Ot:
            case Q:
              return e == t + "";
            case it:
              var T = o;
            case Y:
              var A = s & be;
              if (T || (T = c), e.size != t.size && !A)
                return !1;
              var B = _.get(e);
              if (B)
                return B == t;
              s |= He, _.set(e, t);
              var W = ml(T(e), T(t), s, f, v, _);
              return _.delete(e), W;
            case k:
              if (Pi)
                return Pi.call(e) == Pi.call(t);
          }
          return !1;
        }
        function wp(e, t, i, s, f, v) {
          var _ = i & be, T = Ss(e), A = T.length, B = Ss(t), W = B.length;
          if (A != W && !_)
            return !1;
          for (var q = A; q--; ) {
            var K = T[q];
            if (!(_ ? K in t : Ge.call(t, K)))
              return !1;
          }
          var re = v.get(e), de = v.get(t);
          if (re && de)
            return re == t && de == e;
          var Me = !0;
          v.set(e, t), v.set(t, e);
          for (var pe = _; ++q < A; ) {
            K = T[q];
            var ke = e[K], Le = t[K];
            if (s)
              var Xt = _ ? s(Le, ke, K, t, e, v) : s(ke, Le, K, e, t, v);
            if (!(Xt === l ? ke === Le || f(ke, Le, i, s, v) : Xt)) {
              Me = !1;
              break;
            }
            pe || (pe = K == "constructor");
          }
          if (Me && !pe) {
            var Pt = e.constructor, Kt = t.constructor;
            Pt != Kt && "constructor" in e && "constructor" in t && !(typeof Pt == "function" && Pt instanceof Pt && typeof Kt == "function" && Kt instanceof Kt) && (Me = !1);
          }
          return v.delete(e), v.delete(t), Me;
        }
        function Nn(e) {
          return zs(Sl(e, l, Pl), e + "");
        }
        function Ss(e) {
          return Bu(e, pt, Rs);
        }
        function Es(e) {
          return Bu(e, Ft, yl);
        }
        var Ts = Ho ? function(e) {
          return Ho.get(e);
        } : $s;
        function ra(e) {
          for (var t = e.name + "", i = Xr[t], s = Ge.call(Xr, t) ? i.length : 0; s--; ) {
            var f = i[s], v = f.func;
            if (v == null || v == e)
              return f.name;
          }
          return t;
        }
        function jr(e) {
          var t = Ge.call(h, "placeholder") ? h : e;
          return t.placeholder;
        }
        function le() {
          var e = h.iteratee || Us;
          return e = e === Us ? Nu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function ia(e, t) {
          var i = e.__data__;
          return Ap(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
        }
        function Os(e) {
          for (var t = pt(e), i = t.length; i--; ) {
            var s = t[i], f = e[s];
            t[i] = [s, f, wl(f)];
          }
          return t;
        }
        function _r(e, t) {
          var i = Qa(e, t);
          return Fu(i) ? i : l;
        }
        function _p(e) {
          var t = Ge.call(e, mr), i = e[mr];
          try {
            e[mr] = l;
            var s = !0;
          } catch {
          }
          var f = Do.call(e);
          return s && (t ? e[mr] = i : delete e[mr]), f;
        }
        var Rs = es ? function(e) {
          return e == null ? [] : (e = Ee(e), $t(es(e), function(t) {
            return Eu.call(e, t);
          }));
        } : Gs, yl = es ? function(e) {
          for (var t = []; e; )
            hn(t, Rs(e)), e = Wo(e);
          return t;
        } : Gs, St = Mt;
        (ts && St(new ts(new ArrayBuffer(1))) != se || Ai && St(new Ai()) != it || ns && St(ns.resolve()) != Ht || Yr && St(new Yr()) != Y || Mi && St(new Mi()) != ne) && (St = function(e) {
          var t = Mt(e), i = t == ht ? e.constructor : l, s = i ? Sr(i) : "";
          if (s)
            switch (s) {
              case id:
                return se;
              case od:
                return it;
              case ad:
                return Ht;
              case sd:
                return Y;
              case ud:
                return ne;
            }
          return t;
        });
        function Sp(e, t, i) {
          for (var s = -1, f = i.length; ++s < f; ) {
            var v = i[s], _ = v.size;
            switch (v.type) {
              case "drop":
                e += _;
                break;
              case "dropRight":
                t -= _;
                break;
              case "take":
                t = _t(t, e + _);
                break;
              case "takeRight":
                e = ct(e, t - _);
                break;
            }
          }
          return { start: e, end: t };
        }
        function Ep(e) {
          var t = e.match(pn);
          return t ? t[1].split(Ta) : [];
        }
        function bl(e, t, i) {
          t = Qn(t, e);
          for (var s = -1, f = t.length, v = !1; ++s < f; ) {
            var _ = In(t[s]);
            if (!(v = e != null && i(e, _)))
              break;
            e = e[_];
          }
          return v || ++s != f ? v : (f = e == null ? 0 : e.length, !!f && fa(f) && qn(_, f) && (_e(e) || Er(e)));
        }
        function Tp(e) {
          var t = e.length, i = new e.constructor(t);
          return t && typeof e[0] == "string" && Ge.call(e, "index") && (i.index = e.index, i.input = e.input), i;
        }
        function xl(e) {
          return typeof e.constructor == "function" && !Fi(e) ? Kr(Wo(e)) : {};
        }
        function Op(e, t, i) {
          var s = e.constructor;
          switch (t) {
            case fe:
              return xs(e);
            case xt:
            case J:
              return new s(+e);
            case se:
              return lp(e, i);
            case ae:
            case et:
            case ut:
            case gt:
            case jt:
            case Jt:
            case Qt:
            case xn:
            case wn:
              return nl(e, i);
            case it:
              return new s();
            case Tt:
            case Q:
              return new s(e);
            case Ot:
              return cp(e);
            case Y:
              return new s();
            case k:
              return fp(e);
          }
        }
        function Rp(e, t) {
          var i = t.length;
          if (!i)
            return e;
          var s = i - 1;
          return t[s] = (i > 1 ? "& " : "") + t[s], t = t.join(i > 2 ? ", " : " "), e.replace(Pn, `{
/* [wrapped with ` + t + `] */
`);
        }
        function Ip(e) {
          return _e(e) || Er(e) || !!(Tu && e && e[Tu]);
        }
        function qn(e, t) {
          var i = typeof e;
          return t = t ?? je, !!t && (i == "number" || i != "symbol" && fi.test(e)) && e > -1 && e % 1 == 0 && e < t;
        }
        function zt(e, t, i) {
          if (!tt(i))
            return !1;
          var s = typeof t;
          return (s == "number" ? Wt(i) && qn(t, i.length) : s == "string" && t in i) ? mn(i[t], e) : !1;
        }
        function Is(e, t) {
          if (_e(e))
            return !1;
          var i = typeof e;
          return i == "number" || i == "symbol" || i == "boolean" || e == null || Yt(e) ? !0 : si.test(e) || !Sa.test(e) || t != null && e in Ee(t);
        }
        function Ap(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
        }
        function As(e) {
          var t = ra(e), i = h[t];
          if (typeof i != "function" || !(t in De.prototype))
            return !1;
          if (e === i)
            return !0;
          var s = Ts(i);
          return !!s && e === s[0];
        }
        function Mp(e) {
          return !!wu && wu in e;
        }
        var zp = Co ? Un : Ys;
        function Fi(e) {
          var t = e && e.constructor, i = typeof t == "function" && t.prototype || Gr;
          return e === i;
        }
        function wl(e) {
          return e === e && !tt(e);
        }
        function _l(e, t) {
          return function(i) {
            return i == null ? !1 : i[e] === t && (t !== l || e in Ee(i));
          };
        }
        function Pp(e) {
          var t = la(e, function(s) {
            return i.size === V && i.clear(), s;
          }), i = t.cache;
          return t;
        }
        function Cp(e, t) {
          var i = e[1], s = t[1], f = i | s, v = f < (Be | Ne | P), _ = s == P && i == xe || s == P && i == Re && e[7].length <= t[8] || s == (P | Re) && t[7].length <= t[8] && i == xe;
          if (!(v || _))
            return e;
          s & Be && (e[2] = t[2], f |= i & Be ? 0 : Ce);
          var T = t[3];
          if (T) {
            var A = e[3];
            e[3] = A ? il(A, T, t[4]) : T, e[4] = A ? u(e[3], oe) : t[4];
          }
          return T = t[5], T && (A = e[5], e[5] = A ? ol(A, T, t[6]) : T, e[6] = A ? u(e[5], oe) : t[6]), T = t[7], T && (e[7] = T), s & P && (e[8] = e[8] == null ? t[8] : _t(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = f, e;
        }
        function kp(e) {
          var t = [];
          if (e != null)
            for (var i in Ee(e))
              t.push(i);
          return t;
        }
        function Dp(e) {
          return Do.call(e);
        }
        function Sl(e, t, i) {
          return t = ct(t === l ? e.length - 1 : t, 0), function() {
            for (var s = arguments, f = -1, v = ct(s.length - t, 0), _ = I(v); ++f < v; )
              _[f] = s[t + f];
            f = -1;
            for (var T = I(t + 1); ++f < t; )
              T[f] = s[f];
            return T[t] = i(_), It(e, this, T);
          };
        }
        function El(e, t) {
          return t.length < 2 ? e : wr(e, an(t, 0, -1));
        }
        function Lp(e, t) {
          for (var i = e.length, s = _t(t.length, i), f = Bt(e); s--; ) {
            var v = t[s];
            e[s] = qn(v, i) ? f[v] : l;
          }
          return e;
        }
        function Ms(e, t) {
          if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
            return e[t];
        }
        var Tl = Rl(Ku), Ni = jf || function(e, t) {
          return lt.setTimeout(e, t);
        }, zs = Rl(op);
        function Ol(e, t, i) {
          var s = t + "";
          return zs(e, Rp(s, Bp(Ep(s), i)));
        }
        function Rl(e) {
          var t = 0, i = 0;
          return function() {
            var s = td(), f = te - (s - i);
            if (i = s, f > 0) {
              if (++t >= ie)
                return arguments[0];
            } else
              t = 0;
            return e.apply(l, arguments);
          };
        }
        function oa(e, t) {
          var i = -1, s = e.length, f = s - 1;
          for (t = t === l ? s : t; ++i < t; ) {
            var v = ps(i, f), _ = e[v];
            e[v] = e[i], e[i] = _;
          }
          return e.length = t, e;
        }
        var Il = Pp(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""), e.replace(ui, function(i, s, f, v) {
            t.push(f ? v.replace(_n, "$1") : s || i);
          }), t;
        });
        function In(e) {
          if (typeof e == "string" || Yt(e))
            return e;
          var t = e + "";
          return t == "0" && 1 / e == -ue ? "-0" : t;
        }
        function Sr(e) {
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
        function Bp(e, t) {
          return Lt(zn, function(i) {
            var s = "_." + i[0];
            t & i[1] && !nn(e, s) && e.push(s);
          }), e.sort();
        }
        function Al(e) {
          if (e instanceof De)
            return e.clone();
          var t = new rn(e.__wrapped__, e.__chain__);
          return t.__actions__ = Bt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
        }
        function Wp(e, t, i) {
          (i ? zt(e, t, i) : t === l) ? t = 1 : t = ct(Te(t), 0);
          var s = e == null ? 0 : e.length;
          if (!s || t < 1)
            return [];
          for (var f = 0, v = 0, _ = I(qo(s / t)); f < s; )
            _[v++] = an(e, f, f += t);
          return _;
        }
        function Fp(e) {
          for (var t = -1, i = e == null ? 0 : e.length, s = 0, f = []; ++t < i; ) {
            var v = e[t];
            v && (f[s++] = v);
          }
          return f;
        }
        function Np() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var t = I(e - 1), i = arguments[0], s = e; s--; )
            t[s - 1] = arguments[s];
          return hn(_e(i) ? Bt(i) : [i], yt(t, 1));
        }
        var qp = Pe(function(e, t) {
          return ot(e) ? ki(e, yt(t, 1, ot, !0)) : [];
        }), Up = Pe(function(e, t) {
          var i = sn(t);
          return ot(i) && (i = l), ot(e) ? ki(e, yt(t, 1, ot, !0), le(i, 2)) : [];
        }), Hp = Pe(function(e, t) {
          var i = sn(t);
          return ot(i) && (i = l), ot(e) ? ki(e, yt(t, 1, ot, !0), l, i) : [];
        });
        function $p(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), an(e, t < 0 ? 0 : t, s)) : [];
        }
        function Gp(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), t = s - t, an(e, 0, t < 0 ? 0 : t)) : [];
        }
        function Yp(e, t) {
          return e && e.length ? jo(e, le(t, 3), !0, !0) : [];
        }
        function Xp(e, t) {
          return e && e.length ? jo(e, le(t, 3), !0) : [];
        }
        function Kp(e, t, i, s) {
          var f = e == null ? 0 : e.length;
          return f ? (i && typeof i != "number" && zt(e, t, i) && (i = 0, s = f), Nd(e, t, i, s)) : [];
        }
        function Ml(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Te(i);
          return f < 0 && (f = ct(s + f, 0)), Hr(e, le(t, 3), f);
        }
        function zl(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s - 1;
          return i !== l && (f = Te(i), f = i < 0 ? ct(s + f, 0) : _t(f, s - 1)), Hr(e, le(t, 3), f, !0);
        }
        function Pl(e) {
          var t = e == null ? 0 : e.length;
          return t ? yt(e, 1) : [];
        }
        function Vp(e) {
          var t = e == null ? 0 : e.length;
          return t ? yt(e, ue) : [];
        }
        function Zp(e, t) {
          var i = e == null ? 0 : e.length;
          return i ? (t = t === l ? 1 : Te(t), yt(e, t)) : [];
        }
        function jp(e) {
          for (var t = -1, i = e == null ? 0 : e.length, s = {}; ++t < i; ) {
            var f = e[t];
            s[f[0]] = f[1];
          }
          return s;
        }
        function Cl(e) {
          return e && e.length ? e[0] : l;
        }
        function Jp(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = i == null ? 0 : Te(i);
          return f < 0 && (f = ct(s + f, 0)), Kn(e, t, f);
        }
        function Qp(e) {
          var t = e == null ? 0 : e.length;
          return t ? an(e, 0, -1) : [];
        }
        var eh = Pe(function(e) {
          var t = Ve(e, ys);
          return t.length && t[0] === e[0] ? us(t) : [];
        }), th = Pe(function(e) {
          var t = sn(e), i = Ve(e, ys);
          return t === sn(i) ? t = l : i.pop(), i.length && i[0] === e[0] ? us(i, le(t, 2)) : [];
        }), nh = Pe(function(e) {
          var t = sn(e), i = Ve(e, ys);
          return t = typeof t == "function" ? t : l, t && i.pop(), i.length && i[0] === e[0] ? us(i, l, t) : [];
        });
        function rh(e, t) {
          return e == null ? "" : Qf.call(e, t);
        }
        function sn(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : l;
        }
        function ih(e, t, i) {
          var s = e == null ? 0 : e.length;
          if (!s)
            return -1;
          var f = s;
          return i !== l && (f = Te(i), f = f < 0 ? ct(s + f, 0) : _t(f, s - 1)), t === t ? b(e, t, f) : Hr(e, Ao, f, !0);
        }
        function oh(e, t) {
          return e && e.length ? $u(e, Te(t)) : l;
        }
        var ah = Pe(kl);
        function kl(e, t) {
          return e && e.length && t && t.length ? ds(e, t) : e;
        }
        function sh(e, t, i) {
          return e && e.length && t && t.length ? ds(e, t, le(i, 2)) : e;
        }
        function uh(e, t, i) {
          return e && e.length && t && t.length ? ds(e, t, l, i) : e;
        }
        var lh = Nn(function(e, t) {
          var i = e == null ? 0 : e.length, s = is(e, t);
          return Xu(e, Ve(t, function(f) {
            return qn(f, i) ? +f : f;
          }).sort(rl)), s;
        });
        function ch(e, t) {
          var i = [];
          if (!(e && e.length))
            return i;
          var s = -1, f = [], v = e.length;
          for (t = le(t, 3); ++s < v; ) {
            var _ = e[s];
            t(_, s, e) && (i.push(_), f.push(s));
          }
          return Xu(e, f), i;
        }
        function Ps(e) {
          return e == null ? e : rd.call(e);
        }
        function fh(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (i && typeof i != "number" && zt(e, t, i) ? (t = 0, i = s) : (t = t == null ? 0 : Te(t), i = i === l ? s : Te(i)), an(e, t, i)) : [];
        }
        function dh(e, t) {
          return Zo(e, t);
        }
        function ph(e, t, i) {
          return gs(e, t, le(i, 2));
        }
        function hh(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = Zo(e, t);
            if (s < i && mn(e[s], t))
              return s;
          }
          return -1;
        }
        function gh(e, t) {
          return Zo(e, t, !0);
        }
        function vh(e, t, i) {
          return gs(e, t, le(i, 2), !0);
        }
        function mh(e, t) {
          var i = e == null ? 0 : e.length;
          if (i) {
            var s = Zo(e, t, !0) - 1;
            if (mn(e[s], t))
              return s;
          }
          return -1;
        }
        function yh(e) {
          return e && e.length ? Vu(e) : [];
        }
        function bh(e, t) {
          return e && e.length ? Vu(e, le(t, 2)) : [];
        }
        function xh(e) {
          var t = e == null ? 0 : e.length;
          return t ? an(e, 1, t) : [];
        }
        function wh(e, t, i) {
          return e && e.length ? (t = i || t === l ? 1 : Te(t), an(e, 0, t < 0 ? 0 : t)) : [];
        }
        function _h(e, t, i) {
          var s = e == null ? 0 : e.length;
          return s ? (t = i || t === l ? 1 : Te(t), t = s - t, an(e, t < 0 ? 0 : t, s)) : [];
        }
        function Sh(e, t) {
          return e && e.length ? jo(e, le(t, 3), !1, !0) : [];
        }
        function Eh(e, t) {
          return e && e.length ? jo(e, le(t, 3)) : [];
        }
        var Th = Pe(function(e) {
          return Jn(yt(e, 1, ot, !0));
        }), Oh = Pe(function(e) {
          var t = sn(e);
          return ot(t) && (t = l), Jn(yt(e, 1, ot, !0), le(t, 2));
        }), Rh = Pe(function(e) {
          var t = sn(e);
          return t = typeof t == "function" ? t : l, Jn(yt(e, 1, ot, !0), l, t);
        });
        function Ih(e) {
          return e && e.length ? Jn(e) : [];
        }
        function Ah(e, t) {
          return e && e.length ? Jn(e, le(t, 2)) : [];
        }
        function Mh(e, t) {
          return t = typeof t == "function" ? t : l, e && e.length ? Jn(e, l, t) : [];
        }
        function Cs(e) {
          if (!(e && e.length))
            return [];
          var t = 0;
          return e = $t(e, function(i) {
            if (ot(i))
              return t = ct(i.length, t), !0;
          }), Dn(t, function(i) {
            return Ve(e, Ti(i));
          });
        }
        function Dl(e, t) {
          if (!(e && e.length))
            return [];
          var i = Cs(e);
          return t == null ? i : Ve(i, function(s) {
            return It(t, l, s);
          });
        }
        var zh = Pe(function(e, t) {
          return ot(e) ? ki(e, t) : [];
        }), Ph = Pe(function(e) {
          return ms($t(e, ot));
        }), Ch = Pe(function(e) {
          var t = sn(e);
          return ot(t) && (t = l), ms($t(e, ot), le(t, 2));
        }), kh = Pe(function(e) {
          var t = sn(e);
          return t = typeof t == "function" ? t : l, ms($t(e, ot), l, t);
        }), Dh = Pe(Cs);
        function Lh(e, t) {
          return Qu(e || [], t || [], Ci);
        }
        function Bh(e, t) {
          return Qu(e || [], t || [], Bi);
        }
        var Wh = Pe(function(e) {
          var t = e.length, i = t > 1 ? e[t - 1] : l;
          return i = typeof i == "function" ? (e.pop(), i) : l, Dl(e, i);
        });
        function Ll(e) {
          var t = h(e);
          return t.__chain__ = !0, t;
        }
        function Fh(e, t) {
          return t(e), e;
        }
        function aa(e, t) {
          return t(e);
        }
        var Nh = Nn(function(e) {
          var t = e.length, i = t ? e[0] : 0, s = this.__wrapped__, f = function(v) {
            return is(v, e);
          };
          return t > 1 || this.__actions__.length || !(s instanceof De) || !qn(i) ? this.thru(f) : (s = s.slice(i, +i + (t ? 1 : 0)), s.__actions__.push({
            func: aa,
            args: [f],
            thisArg: l
          }), new rn(s, this.__chain__).thru(function(v) {
            return t && !v.length && v.push(l), v;
          }));
        });
        function qh() {
          return Ll(this);
        }
        function Uh() {
          return new rn(this.value(), this.__chain__);
        }
        function Hh() {
          this.__values__ === l && (this.__values__ = Zl(this.value()));
          var e = this.__index__ >= this.__values__.length, t = e ? l : this.__values__[this.__index__++];
          return { done: e, value: t };
        }
        function $h() {
          return this;
        }
        function Gh(e) {
          for (var t, i = this; i instanceof Go; ) {
            var s = Al(i);
            s.__index__ = 0, s.__values__ = l, t ? f.__wrapped__ = s : t = s;
            var f = s;
            i = i.__wrapped__;
          }
          return f.__wrapped__ = e, t;
        }
        function Yh() {
          var e = this.__wrapped__;
          if (e instanceof De) {
            var t = e;
            return this.__actions__.length && (t = new De(this)), t = t.reverse(), t.__actions__.push({
              func: aa,
              args: [Ps],
              thisArg: l
            }), new rn(t, this.__chain__);
          }
          return this.thru(Ps);
        }
        function Xh() {
          return Ju(this.__wrapped__, this.__actions__);
        }
        var Kh = Jo(function(e, t, i) {
          Ge.call(e, i) ? ++e[i] : Wn(e, i, 1);
        });
        function Vh(e, t, i) {
          var s = _e(e) ? Si : Fd;
          return i && zt(e, t, i) && (t = l), s(e, le(t, 3));
        }
        function Zh(e, t) {
          var i = _e(e) ? $t : Du;
          return i(e, le(t, 3));
        }
        var jh = ll(Ml), Jh = ll(zl);
        function Qh(e, t) {
          return yt(sa(e, t), 1);
        }
        function eg(e, t) {
          return yt(sa(e, t), ue);
        }
        function tg(e, t, i) {
          return i = i === l ? 1 : Te(i), yt(sa(e, t), i);
        }
        function Bl(e, t) {
          var i = _e(e) ? Lt : jn;
          return i(e, le(t, 3));
        }
        function Wl(e, t) {
          var i = _e(e) ? $a : ku;
          return i(e, le(t, 3));
        }
        var ng = Jo(function(e, t, i) {
          Ge.call(e, i) ? e[i].push(t) : Wn(e, i, [t]);
        });
        function rg(e, t, i, s) {
          e = Wt(e) ? e : Qr(e), i = i && !s ? Te(i) : 0;
          var f = e.length;
          return i < 0 && (i = ct(f + i, 0)), da(e) ? i <= f && e.indexOf(t, i) > -1 : !!f && Kn(e, t, i) > -1;
        }
        var ig = Pe(function(e, t, i) {
          var s = -1, f = typeof t == "function", v = Wt(e) ? I(e.length) : [];
          return jn(e, function(_) {
            v[++s] = f ? It(t, _, i) : Di(_, t, i);
          }), v;
        }), og = Jo(function(e, t, i) {
          Wn(e, i, t);
        });
        function sa(e, t) {
          var i = _e(e) ? Ve : qu;
          return i(e, le(t, 3));
        }
        function ag(e, t, i, s) {
          return e == null ? [] : (_e(t) || (t = t == null ? [] : [t]), i = s ? l : i, _e(i) || (i = i == null ? [] : [i]), Gu(e, t, i));
        }
        var sg = Jo(function(e, t, i) {
          e[i ? 0 : 1].push(t);
        }, function() {
          return [[], []];
        });
        function ug(e, t, i) {
          var s = _e(e) ? Ur : Mo, f = arguments.length < 3;
          return s(e, le(t, 4), i, f, jn);
        }
        function lg(e, t, i) {
          var s = _e(e) ? Ro : Mo, f = arguments.length < 3;
          return s(e, le(t, 4), i, f, ku);
        }
        function cg(e, t) {
          var i = _e(e) ? $t : Du;
          return i(e, ca(le(t, 3)));
        }
        function fg(e) {
          var t = _e(e) ? Mu : rp;
          return t(e);
        }
        function dg(e, t, i) {
          (i ? zt(e, t, i) : t === l) ? t = 1 : t = Te(t);
          var s = _e(e) ? kd : ip;
          return s(e, t);
        }
        function pg(e) {
          var t = _e(e) ? Dd : ap;
          return t(e);
        }
        function hg(e) {
          if (e == null)
            return 0;
          if (Wt(e))
            return da(e) ? S(e) : e.length;
          var t = St(e);
          return t == it || t == Y ? e.size : cs(e).length;
        }
        function gg(e, t, i) {
          var s = _e(e) ? kn : sp;
          return i && zt(e, t, i) && (t = l), s(e, le(t, 3));
        }
        var vg = Pe(function(e, t) {
          if (e == null)
            return [];
          var i = t.length;
          return i > 1 && zt(e, t[0], t[1]) ? t = [] : i > 2 && zt(t[0], t[1], t[2]) && (t = [t[0]]), Gu(e, yt(t, 1), []);
        }), ua = Zf || function() {
          return lt.Date.now();
        };
        function mg(e, t) {
          if (typeof t != "function")
            throw new mt(F);
          return e = Te(e), function() {
            if (--e < 1)
              return t.apply(this, arguments);
          };
        }
        function Fl(e, t, i) {
          return t = i ? l : t, t = e && t == null ? e.length : t, Fn(e, P, l, l, l, l, t);
        }
        function Nl(e, t) {
          var i;
          if (typeof t != "function")
            throw new mt(F);
          return e = Te(e), function() {
            return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = l), i;
          };
        }
        var ks = Pe(function(e, t, i) {
          var s = Be;
          if (i.length) {
            var f = u(i, jr(ks));
            s |= ze;
          }
          return Fn(e, s, t, i, f);
        }), ql = Pe(function(e, t, i) {
          var s = Be | Ne;
          if (i.length) {
            var f = u(i, jr(ql));
            s |= ze;
          }
          return Fn(t, s, e, i, f);
        });
        function Ul(e, t, i) {
          t = i ? l : t;
          var s = Fn(e, xe, l, l, l, l, l, t);
          return s.placeholder = Ul.placeholder, s;
        }
        function Hl(e, t, i) {
          t = i ? l : t;
          var s = Fn(e, Oe, l, l, l, l, l, t);
          return s.placeholder = Hl.placeholder, s;
        }
        function $l(e, t, i) {
          var s, f, v, _, T, A, B = 0, W = !1, q = !1, K = !0;
          if (typeof e != "function")
            throw new mt(F);
          t = un(t) || 0, tt(i) && (W = !!i.leading, q = "maxWait" in i, v = q ? ct(un(i.maxWait) || 0, t) : v, K = "trailing" in i ? !!i.trailing : K);
          function re(at) {
            var yn = s, $n = f;
            return s = f = l, B = at, _ = e.apply($n, yn), _;
          }
          function de(at) {
            return B = at, T = Ni(ke, t), W ? re(at) : _;
          }
          function Me(at) {
            var yn = at - A, $n = at - B, lc = t - yn;
            return q ? _t(lc, v - $n) : lc;
          }
          function pe(at) {
            var yn = at - A, $n = at - B;
            return A === l || yn >= t || yn < 0 || q && $n >= v;
          }
          function ke() {
            var at = ua();
            if (pe(at))
              return Le(at);
            T = Ni(ke, Me(at));
          }
          function Le(at) {
            return T = l, K && s ? re(at) : (s = f = l, _);
          }
          function Xt() {
            T !== l && el(T), B = 0, s = A = f = T = l;
          }
          function Pt() {
            return T === l ? _ : Le(ua());
          }
          function Kt() {
            var at = ua(), yn = pe(at);
            if (s = arguments, f = this, A = at, yn) {
              if (T === l)
                return de(A);
              if (q)
                return el(T), T = Ni(ke, t), re(A);
            }
            return T === l && (T = Ni(ke, t)), _;
          }
          return Kt.cancel = Xt, Kt.flush = Pt, Kt;
        }
        var yg = Pe(function(e, t) {
          return Cu(e, 1, t);
        }), bg = Pe(function(e, t, i) {
          return Cu(e, un(t) || 0, i);
        });
        function xg(e) {
          return Fn(e, Se);
        }
        function la(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
            throw new mt(F);
          var i = function() {
            var s = arguments, f = t ? t.apply(this, s) : s[0], v = i.cache;
            if (v.has(f))
              return v.get(f);
            var _ = e.apply(this, s);
            return i.cache = v.set(f, _) || v, _;
          };
          return i.cache = new (la.Cache || Bn)(), i;
        }
        la.Cache = Bn;
        function ca(e) {
          if (typeof e != "function")
            throw new mt(F);
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
        function wg(e) {
          return Nl(2, e);
        }
        var _g = up(function(e, t) {
          t = t.length == 1 && _e(t[0]) ? Ve(t[0], vt(le())) : Ve(yt(t, 1), vt(le()));
          var i = t.length;
          return Pe(function(s) {
            for (var f = -1, v = _t(s.length, i); ++f < v; )
              s[f] = t[f].call(this, s[f]);
            return It(e, this, s);
          });
        }), Ds = Pe(function(e, t) {
          var i = u(t, jr(Ds));
          return Fn(e, ze, l, t, i);
        }), Gl = Pe(function(e, t) {
          var i = u(t, jr(Gl));
          return Fn(e, We, l, t, i);
        }), Sg = Nn(function(e, t) {
          return Fn(e, Re, l, l, l, t);
        });
        function Eg(e, t) {
          if (typeof e != "function")
            throw new mt(F);
          return t = t === l ? t : Te(t), Pe(e, t);
        }
        function Tg(e, t) {
          if (typeof e != "function")
            throw new mt(F);
          return t = t == null ? 0 : ct(Te(t), 0), Pe(function(i) {
            var s = i[t], f = er(i, 0, t);
            return s && hn(f, s), It(e, this, f);
          });
        }
        function Og(e, t, i) {
          var s = !0, f = !0;
          if (typeof e != "function")
            throw new mt(F);
          return tt(i) && (s = "leading" in i ? !!i.leading : s, f = "trailing" in i ? !!i.trailing : f), $l(e, t, {
            leading: s,
            maxWait: t,
            trailing: f
          });
        }
        function Rg(e) {
          return Fl(e, 1);
        }
        function Ig(e, t) {
          return Ds(bs(t), e);
        }
        function Ag() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return _e(e) ? e : [e];
        }
        function Mg(e) {
          return on(e, me);
        }
        function zg(e, t) {
          return t = typeof t == "function" ? t : l, on(e, me, t);
        }
        function Pg(e) {
          return on(e, j | me);
        }
        function Cg(e, t) {
          return t = typeof t == "function" ? t : l, on(e, j | me, t);
        }
        function kg(e, t) {
          return t == null || Pu(e, t, pt(t));
        }
        function mn(e, t) {
          return e === t || e !== e && t !== t;
        }
        var Dg = na(ss), Lg = na(function(e, t) {
          return e >= t;
        }), Er = Wu(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Wu : function(e) {
          return rt(e) && Ge.call(e, "callee") && !Eu.call(e, "callee");
        }, _e = I.isArray, Bg = _i ? vt(_i) : Gd;
        function Wt(e) {
          return e != null && fa(e.length) && !Un(e);
        }
        function ot(e) {
          return rt(e) && Wt(e);
        }
        function Wg(e) {
          return e === !0 || e === !1 || rt(e) && Mt(e) == xt;
        }
        var tr = Jf || Ys, Fg = dt ? vt(dt) : Yd;
        function Ng(e) {
          return rt(e) && e.nodeType === 1 && !qi(e);
        }
        function qg(e) {
          if (e == null)
            return !0;
          if (Wt(e) && (_e(e) || typeof e == "string" || typeof e.splice == "function" || tr(e) || Jr(e) || Er(e)))
            return !e.length;
          var t = St(e);
          if (t == it || t == Y)
            return !e.size;
          if (Fi(e))
            return !cs(e).length;
          for (var i in e)
            if (Ge.call(e, i))
              return !1;
          return !0;
        }
        function Ug(e, t) {
          return Li(e, t);
        }
        function Hg(e, t, i) {
          i = typeof i == "function" ? i : l;
          var s = i ? i(e, t) : l;
          return s === l ? Li(e, t, l, i) : !!s;
        }
        function Ls(e) {
          if (!rt(e))
            return !1;
          var t = Mt(e);
          return t == Et || t == qt || typeof e.message == "string" && typeof e.name == "string" && !qi(e);
        }
        function $g(e) {
          return typeof e == "number" && Ou(e);
        }
        function Un(e) {
          if (!tt(e))
            return !1;
          var t = Mt(e);
          return t == wt || t == Zt || t == cn || t == ir;
        }
        function Yl(e) {
          return typeof e == "number" && e == Te(e);
        }
        function fa(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= je;
        }
        function tt(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function");
        }
        function rt(e) {
          return e != null && typeof e == "object";
        }
        var Xl = So ? vt(So) : Kd;
        function Gg(e, t) {
          return e === t || ls(e, t, Os(t));
        }
        function Yg(e, t, i) {
          return i = typeof i == "function" ? i : l, ls(e, t, Os(t), i);
        }
        function Xg(e) {
          return Kl(e) && e != +e;
        }
        function Kg(e) {
          if (zp(e))
            throw new $(O);
          return Fu(e);
        }
        function Vg(e) {
          return e === null;
        }
        function Zg(e) {
          return e == null;
        }
        function Kl(e) {
          return typeof e == "number" || rt(e) && Mt(e) == Tt;
        }
        function qi(e) {
          if (!rt(e) || Mt(e) != ht)
            return !1;
          var t = Wo(e);
          if (t === null)
            return !0;
          var i = Ge.call(t, "constructor") && t.constructor;
          return typeof i == "function" && i instanceof i && ko.call(i) == Yf;
        }
        var Bs = Eo ? vt(Eo) : Vd;
        function jg(e) {
          return Yl(e) && e >= -je && e <= je;
        }
        var Vl = To ? vt(To) : Zd;
        function da(e) {
          return typeof e == "string" || !_e(e) && rt(e) && Mt(e) == Q;
        }
        function Yt(e) {
          return typeof e == "symbol" || rt(e) && Mt(e) == k;
        }
        var Jr = Oo ? vt(Oo) : jd;
        function Jg(e) {
          return e === l;
        }
        function Qg(e) {
          return rt(e) && St(e) == ne;
        }
        function ev(e) {
          return rt(e) && Mt(e) == ce;
        }
        var tv = na(fs), nv = na(function(e, t) {
          return e <= t;
        });
        function Zl(e) {
          if (!e)
            return [];
          if (Wt(e))
            return da(e) ? x(e) : Bt(e);
          if (Ii && e[Ii])
            return n(e[Ii]());
          var t = St(e), i = t == it ? o : t == Y ? c : Qr;
          return i(e);
        }
        function Hn(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = un(e), e === ue || e === -ue) {
            var t = e < 0 ? -1 : 1;
            return t * $e;
          }
          return e === e ? e : 0;
        }
        function Te(e) {
          var t = Hn(e), i = t % 1;
          return t === t ? i ? t - i : t : 0;
        }
        function jl(e) {
          return e ? xr(Te(e), 0, Ae) : 0;
        }
        function un(e) {
          if (typeof e == "number")
            return e;
          if (Yt(e))
            return Ke;
          if (tt(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = tt(t) ? t + "" : t;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Oi(e);
          var i = Ra.test(e);
          return i || ar.test(e) ? wo(e.slice(2), i ? 2 : 8) : no.test(e) ? Ke : +e;
        }
        function Jl(e) {
          return Rn(e, Ft(e));
        }
        function rv(e) {
          return e ? xr(Te(e), -je, je) : e === 0 ? e : 0;
        }
        function Ue(e) {
          return e == null ? "" : Gt(e);
        }
        var iv = Vr(function(e, t) {
          if (Fi(t) || Wt(t)) {
            Rn(t, pt(t), e);
            return;
          }
          for (var i in t)
            Ge.call(t, i) && Ci(e, i, t[i]);
        }), Ql = Vr(function(e, t) {
          Rn(t, Ft(t), e);
        }), pa = Vr(function(e, t, i, s) {
          Rn(t, Ft(t), e, s);
        }), ov = Vr(function(e, t, i, s) {
          Rn(t, pt(t), e, s);
        }), av = Nn(is);
        function sv(e, t) {
          var i = Kr(e);
          return t == null ? i : zu(i, t);
        }
        var uv = Pe(function(e, t) {
          e = Ee(e);
          var i = -1, s = t.length, f = s > 2 ? t[2] : l;
          for (f && zt(t[0], t[1], f) && (s = 1); ++i < s; )
            for (var v = t[i], _ = Ft(v), T = -1, A = _.length; ++T < A; ) {
              var B = _[T], W = e[B];
              (W === l || mn(W, Gr[B]) && !Ge.call(e, B)) && (e[B] = v[B]);
            }
          return e;
        }), lv = Pe(function(e) {
          return e.push(l, vl), It(ec, l, e);
        });
        function cv(e, t) {
          return Io(e, le(t, 3), On);
        }
        function fv(e, t) {
          return Io(e, le(t, 3), as);
        }
        function dv(e, t) {
          return e == null ? e : os(e, le(t, 3), Ft);
        }
        function pv(e, t) {
          return e == null ? e : Lu(e, le(t, 3), Ft);
        }
        function hv(e, t) {
          return e && On(e, le(t, 3));
        }
        function gv(e, t) {
          return e && as(e, le(t, 3));
        }
        function vv(e) {
          return e == null ? [] : Ko(e, pt(e));
        }
        function mv(e) {
          return e == null ? [] : Ko(e, Ft(e));
        }
        function Ws(e, t, i) {
          var s = e == null ? l : wr(e, t);
          return s === l ? i : s;
        }
        function yv(e, t) {
          return e != null && bl(e, t, qd);
        }
        function Fs(e, t) {
          return e != null && bl(e, t, Ud);
        }
        var bv = fl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = Do.call(t)), e[t] = i;
        }, qs(Nt)), xv = fl(function(e, t, i) {
          t != null && typeof t.toString != "function" && (t = Do.call(t)), Ge.call(e, t) ? e[t].push(i) : e[t] = [i];
        }, le), wv = Pe(Di);
        function pt(e) {
          return Wt(e) ? Au(e) : cs(e);
        }
        function Ft(e) {
          return Wt(e) ? Au(e, !0) : Jd(e);
        }
        function _v(e, t) {
          var i = {};
          return t = le(t, 3), On(e, function(s, f, v) {
            Wn(i, t(s, f, v), s);
          }), i;
        }
        function Sv(e, t) {
          var i = {};
          return t = le(t, 3), On(e, function(s, f, v) {
            Wn(i, f, t(s, f, v));
          }), i;
        }
        var Ev = Vr(function(e, t, i) {
          Vo(e, t, i);
        }), ec = Vr(function(e, t, i, s) {
          Vo(e, t, i, s);
        }), Tv = Nn(function(e, t) {
          var i = {};
          if (e == null)
            return i;
          var s = !1;
          t = Ve(t, function(v) {
            return v = Qn(v, e), s || (s = v.length > 1), v;
          }), Rn(e, Es(e), i), s && (i = on(i, j | Fe | me, bp));
          for (var f = t.length; f--; )
            vs(i, t[f]);
          return i;
        });
        function Ov(e, t) {
          return tc(e, ca(le(t)));
        }
        var Rv = Nn(function(e, t) {
          return e == null ? {} : ep(e, t);
        });
        function tc(e, t) {
          if (e == null)
            return {};
          var i = Ve(Es(e), function(s) {
            return [s];
          });
          return t = le(t), Yu(e, i, function(s, f) {
            return t(s, f[0]);
          });
        }
        function Iv(e, t, i) {
          t = Qn(t, e);
          var s = -1, f = t.length;
          for (f || (f = 1, e = l); ++s < f; ) {
            var v = e == null ? l : e[In(t[s])];
            v === l && (s = f, v = i), e = Un(v) ? v.call(e) : v;
          }
          return e;
        }
        function Av(e, t, i) {
          return e == null ? e : Bi(e, t, i);
        }
        function Mv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : Bi(e, t, i, s);
        }
        var nc = hl(pt), rc = hl(Ft);
        function zv(e, t, i) {
          var s = _e(e), f = s || tr(e) || Jr(e);
          if (t = le(t, 4), i == null) {
            var v = e && e.constructor;
            f ? i = s ? new v() : [] : tt(e) ? i = Un(v) ? Kr(Wo(e)) : {} : i = {};
          }
          return (f ? Lt : On)(e, function(_, T, A) {
            return t(i, _, T, A);
          }), i;
        }
        function Pv(e, t) {
          return e == null ? !0 : vs(e, t);
        }
        function Cv(e, t, i) {
          return e == null ? e : ju(e, t, bs(i));
        }
        function kv(e, t, i, s) {
          return s = typeof s == "function" ? s : l, e == null ? e : ju(e, t, bs(i), s);
        }
        function Qr(e) {
          return e == null ? [] : Ri(e, pt(e));
        }
        function Dv(e) {
          return e == null ? [] : Ri(e, Ft(e));
        }
        function Lv(e, t, i) {
          return i === l && (i = t, t = l), i !== l && (i = un(i), i = i === i ? i : 0), t !== l && (t = un(t), t = t === t ? t : 0), xr(un(e), t, i);
        }
        function Bv(e, t, i) {
          return t = Hn(t), i === l ? (i = t, t = 0) : i = Hn(i), e = un(e), Hd(e, t, i);
        }
        function Wv(e, t, i) {
          if (i && typeof i != "boolean" && zt(e, t, i) && (t = i = l), i === l && (typeof t == "boolean" ? (i = t, t = l) : typeof e == "boolean" && (i = e, e = l)), e === l && t === l ? (e = 0, t = 1) : (e = Hn(e), t === l ? (t = e, e = 0) : t = Hn(t)), e > t) {
            var s = e;
            e = t, t = s;
          }
          if (i || e % 1 || t % 1) {
            var f = Ru();
            return _t(e + f * (t - e + xo("1e-" + ((f + "").length - 1))), t);
          }
          return ps(e, t);
        }
        var Fv = Zr(function(e, t, i) {
          return t = t.toLowerCase(), e + (i ? ic(t) : t);
        });
        function ic(e) {
          return Ns(Ue(e).toLowerCase());
        }
        function oc(e) {
          return e = Ue(e), e && e.replace(Aa, Za).replace(vo, "");
        }
        function Nv(e, t, i) {
          e = Ue(e), t = Gt(t);
          var s = e.length;
          i = i === l ? s : xr(Te(i), 0, s);
          var f = i;
          return i -= t.length, i >= 0 && e.slice(i, f) == t;
        }
        function qv(e) {
          return e = Ue(e), e && ii.test(e) ? e.replace(zr, ja) : e;
        }
        function Uv(e) {
          return e = Ue(e), e && Ea.test(e) ? e.replace(li, "\\$&") : e;
        }
        var Hv = Zr(function(e, t, i) {
          return e + (i ? "-" : "") + t.toLowerCase();
        }), $v = Zr(function(e, t, i) {
          return e + (i ? " " : "") + t.toLowerCase();
        }), Gv = ul("toLowerCase");
        function Yv(e, t, i) {
          e = Ue(e), t = Te(t);
          var s = t ? S(e) : 0;
          if (!t || s >= t)
            return e;
          var f = (t - s) / 2;
          return ta(Uo(f), i) + e + ta(qo(f), i);
        }
        function Xv(e, t, i) {
          e = Ue(e), t = Te(t);
          var s = t ? S(e) : 0;
          return t && s < t ? e + ta(t - s, i) : e;
        }
        function Kv(e, t, i) {
          e = Ue(e), t = Te(t);
          var s = t ? S(e) : 0;
          return t && s < t ? ta(t - s, i) + e : e;
        }
        function Vv(e, t, i) {
          return i || t == null ? t = 0 : t && (t = +t), nd(Ue(e).replace(Pr, ""), t || 0);
        }
        function Zv(e, t, i) {
          return (i ? zt(e, t, i) : t === l) ? t = 1 : t = Te(t), hs(Ue(e), t);
        }
        function jv() {
          var e = arguments, t = Ue(e[0]);
          return e.length < 3 ? t : t.replace(e[1], e[2]);
        }
        var Jv = Zr(function(e, t, i) {
          return e + (i ? "_" : "") + t.toLowerCase();
        });
        function Qv(e, t, i) {
          return i && typeof i != "number" && zt(e, t, i) && (t = i = l), i = i === l ? Ae : i >>> 0, i ? (e = Ue(e), e && (typeof t == "string" || t != null && !Bs(t)) && (t = Gt(t), !t && Vn(e)) ? er(x(e), 0, i) : e.split(t, i)) : [];
        }
        var em = Zr(function(e, t, i) {
          return e + (i ? " " : "") + Ns(t);
        });
        function tm(e, t, i) {
          return e = Ue(e), i = i == null ? 0 : xr(Te(i), 0, e.length), t = Gt(t), e.slice(i, i + t.length) == t;
        }
        function nm(e, t, i) {
          var s = h.templateSettings;
          i && zt(e, t, i) && (t = l), e = Ue(e), t = pa({}, t, s, gl);
          var f = pa({}, t.imports, s.imports, gl), v = pt(f), _ = Ri(f, v), T, A, B = 0, W = t.interpolate || Cr, q = "__p += '", K = At(
            (t.escape || Cr).source + "|" + W.source + "|" + (W === ai ? ge : Cr).source + "|" + (t.evaluate || Cr).source + "|$",
            "g"
          ), re = "//# sourceURL=" + (Ge.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++pr + "]") + `
`;
          e.replace(K, function(pe, ke, Le, Xt, Pt, Kt) {
            return Le || (Le = Xt), q += e.slice(B, Kt).replace(Ma, Ja), ke && (T = !0, q += `' +
__e(` + ke + `) +
'`), Pt && (A = !0, q += `';
` + Pt + `;
__p += '`), Le && (q += `' +
((__t = (` + Le + `)) == null ? '' : __t) +
'`), B = Kt + pe.length, pe;
          }), q += `';
`;
          var de = Ge.call(t, "variable") && t.variable;
          if (!de)
            q = `with (obj) {
` + q + `
}
`;
          else if (to.test(de))
            throw new $(D);
          q = (A ? q.replace(fn, "") : q).replace(or, "$1").replace(Gn, "$1;"), q = "function(" + (de || "obj") + `) {
` + (de ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (A ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + q + `return __p
}`;
          var Me = sc(function() {
            return ve(v, re + "return " + q).apply(l, _);
          });
          if (Me.source = q, Ls(Me))
            throw Me;
          return Me;
        }
        function rm(e) {
          return Ue(e).toLowerCase();
        }
        function im(e) {
          return Ue(e).toUpperCase();
        }
        function om(e, t, i) {
          if (e = Ue(e), e && (i || t === l))
            return Oi(e);
          if (!e || !(t = Gt(t)))
            return e;
          var s = x(e), f = x(t), v = zo(s, f), _ = Po(s, f) + 1;
          return er(s, v, _).join("");
        }
        function am(e, t, i) {
          if (e = Ue(e), e && (i || t === l))
            return e.slice(0, R(e) + 1);
          if (!e || !(t = Gt(t)))
            return e;
          var s = x(e), f = Po(s, x(t)) + 1;
          return er(s, 0, f).join("");
        }
        function sm(e, t, i) {
          if (e = Ue(e), e && (i || t === l))
            return e.replace(Pr, "");
          if (!e || !(t = Gt(t)))
            return e;
          var s = x(e), f = zo(s, x(t));
          return er(s, f).join("");
        }
        function um(e, t) {
          var i = Ye, s = G;
          if (tt(t)) {
            var f = "separator" in t ? t.separator : f;
            i = "length" in t ? Te(t.length) : i, s = "omission" in t ? Gt(t.omission) : s;
          }
          e = Ue(e);
          var v = e.length;
          if (Vn(e)) {
            var _ = x(e);
            v = _.length;
          }
          if (i >= v)
            return e;
          var T = i - S(s);
          if (T < 1)
            return s;
          var A = _ ? er(_, 0, T).join("") : e.slice(0, T);
          if (f === l)
            return A + s;
          if (_ && (T += A.length - T), Bs(f)) {
            if (e.slice(T).search(f)) {
              var B, W = A;
              for (f.global || (f = At(f.source, Ue(ci.exec(f)) + "g")), f.lastIndex = 0; B = f.exec(W); )
                var q = B.index;
              A = A.slice(0, q === l ? T : q);
            }
          } else if (e.indexOf(Gt(f), T) != T) {
            var K = A.lastIndexOf(f);
            K > -1 && (A = A.slice(0, K));
          }
          return A + s;
        }
        function lm(e) {
          return e = Ue(e), e && Qi.test(e) ? e.replace(ri, C) : e;
        }
        var cm = Zr(function(e, t, i) {
          return e + (i ? " " : "") + t.toUpperCase();
        }), Ns = ul("toUpperCase");
        function ac(e, t, i) {
          return e = Ue(e), t = i ? l : t, t === l ? r(e) ? H(e) : Xa(e) : e.match(t) || [];
        }
        var sc = Pe(function(e, t) {
          try {
            return It(e, l, t);
          } catch (i) {
            return Ls(i) ? i : new $(i);
          }
        }), fm = Nn(function(e, t) {
          return Lt(t, function(i) {
            i = In(i), Wn(e, i, ks(e[i], e));
          }), e;
        });
        function dm(e) {
          var t = e == null ? 0 : e.length, i = le();
          return e = t ? Ve(e, function(s) {
            if (typeof s[1] != "function")
              throw new mt(F);
            return [i(s[0]), s[1]];
          }) : [], Pe(function(s) {
            for (var f = -1; ++f < t; ) {
              var v = e[f];
              if (It(v[0], this, s))
                return It(v[1], this, s);
            }
          });
        }
        function pm(e) {
          return Wd(on(e, j));
        }
        function qs(e) {
          return function() {
            return e;
          };
        }
        function hm(e, t) {
          return e == null || e !== e ? t : e;
        }
        var gm = cl(), vm = cl(!0);
        function Nt(e) {
          return e;
        }
        function Us(e) {
          return Nu(typeof e == "function" ? e : on(e, j));
        }
        function mm(e) {
          return Uu(on(e, j));
        }
        function ym(e, t) {
          return Hu(e, on(t, j));
        }
        var bm = Pe(function(e, t) {
          return function(i) {
            return Di(i, e, t);
          };
        }), xm = Pe(function(e, t) {
          return function(i) {
            return Di(e, i, t);
          };
        });
        function Hs(e, t, i) {
          var s = pt(t), f = Ko(t, s);
          i == null && !(tt(t) && (f.length || !s.length)) && (i = t, t = e, e = this, f = Ko(t, pt(t)));
          var v = !(tt(i) && "chain" in i) || !!i.chain, _ = Un(e);
          return Lt(f, function(T) {
            var A = t[T];
            e[T] = A, _ && (e.prototype[T] = function() {
              var B = this.__chain__;
              if (v || B) {
                var W = e(this.__wrapped__), q = W.__actions__ = Bt(this.__actions__);
                return q.push({ func: A, args: arguments, thisArg: e }), W.__chain__ = B, W;
              }
              return A.apply(e, hn([this.value()], arguments));
            });
          }), e;
        }
        function wm() {
          return lt._ === this && (lt._ = Xf), this;
        }
        function $s() {
        }
        function _m(e) {
          return e = Te(e), Pe(function(t) {
            return $u(t, e);
          });
        }
        var Sm = ws(Ve), Em = ws(Si), Tm = ws(kn);
        function uc(e) {
          return Is(e) ? Ti(In(e)) : tp(e);
        }
        function Om(e) {
          return function(t) {
            return e == null ? l : wr(e, t);
          };
        }
        var Rm = dl(), Im = dl(!0);
        function Gs() {
          return [];
        }
        function Ys() {
          return !1;
        }
        function Am() {
          return {};
        }
        function Mm() {
          return "";
        }
        function zm() {
          return !0;
        }
        function Pm(e, t) {
          if (e = Te(e), e < 1 || e > je)
            return [];
          var i = Ae, s = _t(e, Ae);
          t = le(t), e -= Ae;
          for (var f = Dn(s, t); ++i < e; )
            t(i);
          return f;
        }
        function Cm(e) {
          return _e(e) ? Ve(e, In) : Yt(e) ? [e] : Bt(Il(Ue(e)));
        }
        function km(e) {
          var t = ++Gf;
          return Ue(e) + t;
        }
        var Dm = ea(function(e, t) {
          return e + t;
        }, 0), Lm = _s("ceil"), Bm = ea(function(e, t) {
          return e / t;
        }, 1), Wm = _s("floor");
        function Fm(e) {
          return e && e.length ? Xo(e, Nt, ss) : l;
        }
        function Nm(e, t) {
          return e && e.length ? Xo(e, le(t, 2), ss) : l;
        }
        function qm(e) {
          return hr(e, Nt);
        }
        function Um(e, t) {
          return hr(e, le(t, 2));
        }
        function Hm(e) {
          return e && e.length ? Xo(e, Nt, fs) : l;
        }
        function $m(e, t) {
          return e && e.length ? Xo(e, le(t, 2), fs) : l;
        }
        var Gm = ea(function(e, t) {
          return e * t;
        }, 1), Ym = _s("round"), Xm = ea(function(e, t) {
          return e - t;
        }, 0);
        function Km(e) {
          return e && e.length ? $r(e, Nt) : 0;
        }
        function Vm(e, t) {
          return e && e.length ? $r(e, le(t, 2)) : 0;
        }
        return h.after = mg, h.ary = Fl, h.assign = iv, h.assignIn = Ql, h.assignInWith = pa, h.assignWith = ov, h.at = av, h.before = Nl, h.bind = ks, h.bindAll = fm, h.bindKey = ql, h.castArray = Ag, h.chain = Ll, h.chunk = Wp, h.compact = Fp, h.concat = Np, h.cond = dm, h.conforms = pm, h.constant = qs, h.countBy = Kh, h.create = sv, h.curry = Ul, h.curryRight = Hl, h.debounce = $l, h.defaults = uv, h.defaultsDeep = lv, h.defer = yg, h.delay = bg, h.difference = qp, h.differenceBy = Up, h.differenceWith = Hp, h.drop = $p, h.dropRight = Gp, h.dropRightWhile = Yp, h.dropWhile = Xp, h.fill = Kp, h.filter = Zh, h.flatMap = Qh, h.flatMapDeep = eg, h.flatMapDepth = tg, h.flatten = Pl, h.flattenDeep = Vp, h.flattenDepth = Zp, h.flip = xg, h.flow = gm, h.flowRight = vm, h.fromPairs = jp, h.functions = vv, h.functionsIn = mv, h.groupBy = ng, h.initial = Qp, h.intersection = eh, h.intersectionBy = th, h.intersectionWith = nh, h.invert = bv, h.invertBy = xv, h.invokeMap = ig, h.iteratee = Us, h.keyBy = og, h.keys = pt, h.keysIn = Ft, h.map = sa, h.mapKeys = _v, h.mapValues = Sv, h.matches = mm, h.matchesProperty = ym, h.memoize = la, h.merge = Ev, h.mergeWith = ec, h.method = bm, h.methodOf = xm, h.mixin = Hs, h.negate = ca, h.nthArg = _m, h.omit = Tv, h.omitBy = Ov, h.once = wg, h.orderBy = ag, h.over = Sm, h.overArgs = _g, h.overEvery = Em, h.overSome = Tm, h.partial = Ds, h.partialRight = Gl, h.partition = sg, h.pick = Rv, h.pickBy = tc, h.property = uc, h.propertyOf = Om, h.pull = ah, h.pullAll = kl, h.pullAllBy = sh, h.pullAllWith = uh, h.pullAt = lh, h.range = Rm, h.rangeRight = Im, h.rearg = Sg, h.reject = cg, h.remove = ch, h.rest = Eg, h.reverse = Ps, h.sampleSize = dg, h.set = Av, h.setWith = Mv, h.shuffle = pg, h.slice = fh, h.sortBy = vg, h.sortedUniq = yh, h.sortedUniqBy = bh, h.split = Qv, h.spread = Tg, h.tail = xh, h.take = wh, h.takeRight = _h, h.takeRightWhile = Sh, h.takeWhile = Eh, h.tap = Fh, h.throttle = Og, h.thru = aa, h.toArray = Zl, h.toPairs = nc, h.toPairsIn = rc, h.toPath = Cm, h.toPlainObject = Jl, h.transform = zv, h.unary = Rg, h.union = Th, h.unionBy = Oh, h.unionWith = Rh, h.uniq = Ih, h.uniqBy = Ah, h.uniqWith = Mh, h.unset = Pv, h.unzip = Cs, h.unzipWith = Dl, h.update = Cv, h.updateWith = kv, h.values = Qr, h.valuesIn = Dv, h.without = zh, h.words = ac, h.wrap = Ig, h.xor = Ph, h.xorBy = Ch, h.xorWith = kh, h.zip = Dh, h.zipObject = Lh, h.zipObjectDeep = Bh, h.zipWith = Wh, h.entries = nc, h.entriesIn = rc, h.extend = Ql, h.extendWith = pa, Hs(h, h), h.add = Dm, h.attempt = sc, h.camelCase = Fv, h.capitalize = ic, h.ceil = Lm, h.clamp = Lv, h.clone = Mg, h.cloneDeep = Pg, h.cloneDeepWith = Cg, h.cloneWith = zg, h.conformsTo = kg, h.deburr = oc, h.defaultTo = hm, h.divide = Bm, h.endsWith = Nv, h.eq = mn, h.escape = qv, h.escapeRegExp = Uv, h.every = Vh, h.find = jh, h.findIndex = Ml, h.findKey = cv, h.findLast = Jh, h.findLastIndex = zl, h.findLastKey = fv, h.floor = Wm, h.forEach = Bl, h.forEachRight = Wl, h.forIn = dv, h.forInRight = pv, h.forOwn = hv, h.forOwnRight = gv, h.get = Ws, h.gt = Dg, h.gte = Lg, h.has = yv, h.hasIn = Fs, h.head = Cl, h.identity = Nt, h.includes = rg, h.indexOf = Jp, h.inRange = Bv, h.invoke = wv, h.isArguments = Er, h.isArray = _e, h.isArrayBuffer = Bg, h.isArrayLike = Wt, h.isArrayLikeObject = ot, h.isBoolean = Wg, h.isBuffer = tr, h.isDate = Fg, h.isElement = Ng, h.isEmpty = qg, h.isEqual = Ug, h.isEqualWith = Hg, h.isError = Ls, h.isFinite = $g, h.isFunction = Un, h.isInteger = Yl, h.isLength = fa, h.isMap = Xl, h.isMatch = Gg, h.isMatchWith = Yg, h.isNaN = Xg, h.isNative = Kg, h.isNil = Zg, h.isNull = Vg, h.isNumber = Kl, h.isObject = tt, h.isObjectLike = rt, h.isPlainObject = qi, h.isRegExp = Bs, h.isSafeInteger = jg, h.isSet = Vl, h.isString = da, h.isSymbol = Yt, h.isTypedArray = Jr, h.isUndefined = Jg, h.isWeakMap = Qg, h.isWeakSet = ev, h.join = rh, h.kebabCase = Hv, h.last = sn, h.lastIndexOf = ih, h.lowerCase = $v, h.lowerFirst = Gv, h.lt = tv, h.lte = nv, h.max = Fm, h.maxBy = Nm, h.mean = qm, h.meanBy = Um, h.min = Hm, h.minBy = $m, h.stubArray = Gs, h.stubFalse = Ys, h.stubObject = Am, h.stubString = Mm, h.stubTrue = zm, h.multiply = Gm, h.nth = oh, h.noConflict = wm, h.noop = $s, h.now = ua, h.pad = Yv, h.padEnd = Xv, h.padStart = Kv, h.parseInt = Vv, h.random = Wv, h.reduce = ug, h.reduceRight = lg, h.repeat = Zv, h.replace = jv, h.result = Iv, h.round = Ym, h.runInContext = w, h.sample = fg, h.size = hg, h.snakeCase = Jv, h.some = gg, h.sortedIndex = dh, h.sortedIndexBy = ph, h.sortedIndexOf = hh, h.sortedLastIndex = gh, h.sortedLastIndexBy = vh, h.sortedLastIndexOf = mh, h.startCase = em, h.startsWith = tm, h.subtract = Xm, h.sum = Km, h.sumBy = Vm, h.template = nm, h.times = Pm, h.toFinite = Hn, h.toInteger = Te, h.toLength = jl, h.toLower = rm, h.toNumber = un, h.toSafeInteger = rv, h.toString = Ue, h.toUpper = im, h.trim = om, h.trimEnd = am, h.trimStart = sm, h.truncate = um, h.unescape = lm, h.uniqueId = km, h.upperCase = cm, h.upperFirst = Ns, h.each = Bl, h.eachRight = Wl, h.first = Cl, Hs(h, (function() {
          var e = {};
          return On(h, function(t, i) {
            Ge.call(h.prototype, i) || (e[i] = t);
          }), e;
        })(), { chain: !1 }), h.VERSION = y, Lt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          h[e].placeholder = h;
        }), Lt(["drop", "take"], function(e, t) {
          De.prototype[e] = function(i) {
            i = i === l ? 1 : ct(Te(i), 0);
            var s = this.__filtered__ && !t ? new De(this) : this.clone();
            return s.__filtered__ ? s.__takeCount__ = _t(i, s.__takeCount__) : s.__views__.push({
              size: _t(i, Ae),
              type: e + (s.__dir__ < 0 ? "Right" : "")
            }), s;
          }, De.prototype[e + "Right"] = function(i) {
            return this.reverse()[e](i).reverse();
          };
        }), Lt(["filter", "map", "takeWhile"], function(e, t) {
          var i = t + 1, s = i == we || i == Ie;
          De.prototype[e] = function(f) {
            var v = this.clone();
            return v.__iteratees__.push({
              iteratee: le(f, 3),
              type: i
            }), v.__filtered__ = v.__filtered__ || s, v;
          };
        }), Lt(["head", "last"], function(e, t) {
          var i = "take" + (t ? "Right" : "");
          De.prototype[e] = function() {
            return this[i](1).value()[0];
          };
        }), Lt(["initial", "tail"], function(e, t) {
          var i = "drop" + (t ? "" : "Right");
          De.prototype[e] = function() {
            return this.__filtered__ ? new De(this) : this[i](1);
          };
        }), De.prototype.compact = function() {
          return this.filter(Nt);
        }, De.prototype.find = function(e) {
          return this.filter(e).head();
        }, De.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, De.prototype.invokeMap = Pe(function(e, t) {
          return typeof e == "function" ? new De(this) : this.map(function(i) {
            return Di(i, e, t);
          });
        }), De.prototype.reject = function(e) {
          return this.filter(ca(le(e)));
        }, De.prototype.slice = function(e, t) {
          e = Te(e);
          var i = this;
          return i.__filtered__ && (e > 0 || t < 0) ? new De(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== l && (t = Te(t), i = t < 0 ? i.dropRight(-t) : i.take(t - e)), i);
        }, De.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, De.prototype.toArray = function() {
          return this.take(Ae);
        }, On(De.prototype, function(e, t) {
          var i = /^(?:filter|find|map|reject)|While$/.test(t), s = /^(?:head|last)$/.test(t), f = h[s ? "take" + (t == "last" ? "Right" : "") : t], v = s || /^find/.test(t);
          f && (h.prototype[t] = function() {
            var _ = this.__wrapped__, T = s ? [1] : arguments, A = _ instanceof De, B = T[0], W = A || _e(_), q = function(ke) {
              var Le = f.apply(h, hn([ke], T));
              return s && K ? Le[0] : Le;
            };
            W && i && typeof B == "function" && B.length != 1 && (A = W = !1);
            var K = this.__chain__, re = !!this.__actions__.length, de = v && !K, Me = A && !re;
            if (!v && W) {
              _ = Me ? _ : new De(this);
              var pe = e.apply(_, T);
              return pe.__actions__.push({ func: aa, args: [q], thisArg: l }), new rn(pe, K);
            }
            return de && Me ? e.apply(this, T) : (pe = this.thru(q), de ? s ? pe.value()[0] : pe.value() : pe);
          });
        }), Lt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var t = Tn[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
          h.prototype[e] = function() {
            var f = arguments;
            if (s && !this.__chain__) {
              var v = this.value();
              return t.apply(_e(v) ? v : [], f);
            }
            return this[i](function(_) {
              return t.apply(_e(_) ? _ : [], f);
            });
          };
        }), On(De.prototype, function(e, t) {
          var i = h[t];
          if (i) {
            var s = i.name + "";
            Ge.call(Xr, s) || (Xr[s] = []), Xr[s].push({ name: t, func: i });
          }
        }), Xr[Qo(l, Ne).name] = [{
          name: "wrapper",
          func: l
        }], De.prototype.clone = ld, De.prototype.reverse = cd, De.prototype.value = fd, h.prototype.at = Nh, h.prototype.chain = qh, h.prototype.commit = Uh, h.prototype.next = Hh, h.prototype.plant = Gh, h.prototype.reverse = Yh, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Xh, h.prototype.first = h.prototype.head, Ii && (h.prototype[Ii] = $h), h;
      }), X = Z();
      Cn ? ((Cn.exports = X)._ = X, tn._ = X) : lt._ = X;
    }).call(gy);
  })($i, $i.exports)), $i.exports;
}
var Ui = vy(), Zs, Hc;
function xu() {
  if (Hc) return Zs;
  Hc = 1;
  function p(m) {
    var l = typeof m;
    return m != null && (l == "object" || l == "function");
  }
  return Zs = p, Zs;
}
var js, $c;
function my() {
  if ($c) return js;
  $c = 1;
  var p = typeof rr == "object" && rr && rr.Object === Object && rr;
  return js = p, js;
}
var Js, Gc;
function Ff() {
  if (Gc) return Js;
  Gc = 1;
  var p = my(), m = typeof self == "object" && self && self.Object === Object && self, l = p || m || Function("return this")();
  return Js = l, Js;
}
var Qs, Yc;
function yy() {
  if (Yc) return Qs;
  Yc = 1;
  var p = Ff(), m = function() {
    return p.Date.now();
  };
  return Qs = m, Qs;
}
var eu, Xc;
function by() {
  if (Xc) return eu;
  Xc = 1;
  var p = /\s/;
  function m(l) {
    for (var y = l.length; y-- && p.test(l.charAt(y)); )
      ;
    return y;
  }
  return eu = m, eu;
}
var tu, Kc;
function xy() {
  if (Kc) return tu;
  Kc = 1;
  var p = by(), m = /^\s+/;
  function l(y) {
    return y && y.slice(0, p(y) + 1).replace(m, "");
  }
  return tu = l, tu;
}
var nu, Vc;
function Nf() {
  if (Vc) return nu;
  Vc = 1;
  var p = Ff(), m = p.Symbol;
  return nu = m, nu;
}
var ru, Zc;
function wy() {
  if (Zc) return ru;
  Zc = 1;
  var p = Nf(), m = Object.prototype, l = m.hasOwnProperty, y = m.toString, z = p ? p.toStringTag : void 0;
  function O(F) {
    var D = l.call(F, z), E = F[z];
    try {
      F[z] = void 0;
      var V = !0;
    } catch {
    }
    var oe = y.call(F);
    return V && (D ? F[z] = E : delete F[z]), oe;
  }
  return ru = O, ru;
}
var iu, jc;
function _y() {
  if (jc) return iu;
  jc = 1;
  var p = Object.prototype, m = p.toString;
  function l(y) {
    return m.call(y);
  }
  return iu = l, iu;
}
var ou, Jc;
function Sy() {
  if (Jc) return ou;
  Jc = 1;
  var p = Nf(), m = wy(), l = _y(), y = "[object Null]", z = "[object Undefined]", O = p ? p.toStringTag : void 0;
  function F(D) {
    return D == null ? D === void 0 ? z : y : O && O in Object(D) ? m(D) : l(D);
  }
  return ou = F, ou;
}
var au, Qc;
function Ey() {
  if (Qc) return au;
  Qc = 1;
  function p(m) {
    return m != null && typeof m == "object";
  }
  return au = p, au;
}
var su, ef;
function Ty() {
  if (ef) return su;
  ef = 1;
  var p = Sy(), m = Ey(), l = "[object Symbol]";
  function y(z) {
    return typeof z == "symbol" || m(z) && p(z) == l;
  }
  return su = y, su;
}
var uu, tf;
function Oy() {
  if (tf) return uu;
  tf = 1;
  var p = xy(), m = xu(), l = Ty(), y = NaN, z = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, F = /^0o[0-7]+$/i, D = parseInt;
  function E(V) {
    if (typeof V == "number")
      return V;
    if (l(V))
      return y;
    if (m(V)) {
      var oe = typeof V.valueOf == "function" ? V.valueOf() : V;
      V = m(oe) ? oe + "" : oe;
    }
    if (typeof V != "string")
      return V === 0 ? V : +V;
    V = p(V);
    var j = O.test(V);
    return j || F.test(V) ? D(V.slice(2), j ? 2 : 8) : z.test(V) ? y : +V;
  }
  return uu = E, uu;
}
var lu, nf;
function Ry() {
  if (nf) return lu;
  nf = 1;
  var p = xu(), m = yy(), l = Oy(), y = "Expected a function", z = Math.max, O = Math.min;
  function F(D, E, V) {
    var oe, j, Fe, me, be, He, Be = 0, Ne = !1, Ce = !1, xe = !0;
    if (typeof D != "function")
      throw new TypeError(y);
    E = l(E) || 0, p(V) && (Ne = !!V.leading, Ce = "maxWait" in V, Fe = Ce ? z(l(V.maxWait) || 0, E) : Fe, xe = "trailing" in V ? !!V.trailing : xe);
    function Oe(te) {
      var we = oe, he = j;
      return oe = j = void 0, Be = te, me = D.apply(he, we), me;
    }
    function ze(te) {
      return Be = te, be = setTimeout(Re, E), Ne ? Oe(te) : me;
    }
    function We(te) {
      var we = te - He, he = te - Be, Ie = E - we;
      return Ce ? O(Ie, Fe - he) : Ie;
    }
    function P(te) {
      var we = te - He, he = te - Be;
      return He === void 0 || we >= E || we < 0 || Ce && he >= Fe;
    }
    function Re() {
      var te = m();
      if (P(te))
        return Se(te);
      be = setTimeout(Re, We(te));
    }
    function Se(te) {
      return be = void 0, xe && oe ? Oe(te) : (oe = j = void 0, me);
    }
    function Ye() {
      be !== void 0 && clearTimeout(be), Be = 0, oe = He = j = be = void 0;
    }
    function G() {
      return be === void 0 ? me : Se(m());
    }
    function ie() {
      var te = m(), we = P(te);
      if (oe = arguments, j = this, He = te, we) {
        if (be === void 0)
          return ze(He);
        if (Ce)
          return clearTimeout(be), be = setTimeout(Re, E), Oe(He);
      }
      return be === void 0 && (be = setTimeout(Re, E)), me;
    }
    return ie.cancel = Ye, ie.flush = G, ie;
  }
  return lu = F, lu;
}
var cu, rf;
function Iy() {
  if (rf) return cu;
  rf = 1;
  var p = Ry(), m = xu(), l = "Expected a function";
  function y(z, O, F) {
    var D = !0, E = !0;
    if (typeof z != "function")
      throw new TypeError(l);
    return m(F) && (D = "leading" in F ? !!F.leading : D, E = "trailing" in F ? !!F.trailing : E), p(z, O, {
      leading: D,
      maxWait: O,
      trailing: E
    });
  }
  return cu = y, cu;
}
var Ay = Iy();
const My = /* @__PURE__ */ If(Ay), zy = ["onContextmenu"], Py = {
  key: 1,
  class: "text"
}, ln = "__drop__", Cy = /* @__PURE__ */ Ji({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(p, { emit: m }) {
    const l = nt(void 0), y = Qe(() => Wf(l.value)), z = Qe(() => y.value.cols), O = Qe(() => y.value.rowHeight), F = Qe(() => `${O.value}-${Object.values(z.value).join("-")}`), D = nt(typeof window < "u" ? window.innerWidth : 1200), E = Qe(() => Ke(D.value)), V = gf(), oe = Qe(() => V.params.pageid || ""), j = Qe(() => df(oe.value)), Fe = Qe(() => pf(oe.value)), me = Qe(() => j.value.widgets), be = Qe(() => Fe.value.layout), He = s0(), Be = nt({ x: 0, y: 0 }), Ne = nt({
      visible: !1,
      x: 0,
      y: 0,
      widgetId: ""
    }), Ce = nt({
      visible: !1,
      x: 0,
      y: 0
    }), xe = (Y, Q) => {
      Ne.value = {
        visible: !0,
        x: Y.clientX,
        y: Y.clientY,
        widgetId: Q
      }, Ce.value.visible = !1;
    }, Oe = () => {
      Ne.value.visible = !1, Ce.value.visible = !1;
    }, ze = () => {
      P(Ne.value.widgetId), Oe();
    }, We = () => {
      Re(), Oe();
    }, P = (Y) => {
      const Q = me.value.find((ee) => ee.uid === Y), k = be.value.find((ee) => ee.id === Y);
      Q && k && He.copy(Q, k);
    }, Re = () => {
      const Y = He.paste();
      if (!Y) return;
      const Q = "li_" + Math.random().toString(36).substring(7), k = Ui.cloneDeep(Y.widget);
      k.uid = Q, k.config?.settings && (k.config.settings.name = "widget_" + Q);
      const { colW: ee, rowH: ne } = Ae(), ce = Math.round(Be.value.x / ee), fe = Math.round(Be.value.y / ne), se = {
        i: Q,
        x: ce,
        y: fe,
        w: Math.max(1, Math.round((Y.layout.width || 200) / ee)),
        h: Math.max(1, Math.round((Y.layout.height || 100) / ne)),
        static: !1
      };
      j.value.updateWidgets([...me.value, k]), he.value = [...he.value, se], xt(he.value);
    }, Se = nt(), Ye = nt(), G = nt(!1), ie = nt({ x: -1, y: -1 }), te = nt(!1), we = nt([]), he = nt([]), Ie = nt([]), ue = Qe(() => [
      ...he.value,
      ...Ie.value
    ]), je = nt(!1);
    function $e(Y, Q = 0) {
      if (typeof Y == "number") return Y;
      const k = Number(Y);
      return Number.isFinite(k) ? k : Q;
    }
    function Ke(Y) {
      const Q = z.value;
      return Y >= Tr.lg ? Q.lg : Y >= Tr.md ? Q.md : Y >= Tr.sm ? Q.sm : Y >= Tr.xs ? Q.xs : Q.xxs;
    }
    function Ae() {
      return { colW: 1200 / z.value.md, rowH: O.value };
    }
    function Dt(Y) {
      const { colW: Q, rowH: k } = Ae(), ee = $e(Y.x, 0), ne = $e(Y.y, 0), ce = $e(Y.width, Q), fe = $e(Y.height, k);
      return {
        i: String(Y.id ?? Y.i ?? ""),
        x: Math.round(ee / Q),
        y: Math.round(ne / k),
        w: Math.max(1, Math.round(ce / Q)),
        h: Math.max(1, Math.round(fe / k)),
        static: !1
      };
    }
    function ft(Y) {
      const { colW: Q, rowH: k } = Ae();
      return {
        id: String(Y.i),
        x: $e(Y.x, 0) * Q,
        y: $e(Y.y, 0) * k,
        width: $e(Y.w, 1) * Q,
        height: $e(Y.h, 1) * k,
        z: 3e3
      };
    }
    Ze(be, (Y) => {
      je.value = !0;
      try {
        const Q = Array.isArray(Y) ? Y.map(Dt) : [];
        Ui.isEqual(he.value, Q) || (he.value = Q);
      } finally {
        kt(() => je.value = !1);
      }
    }, { immediate: !0, deep: !0 });
    const zn = My(() => {
      D.value = window.innerWidth;
      const Y = be.value || [], Q = Array.isArray(Y) ? Y.map(Dt) : [];
      Ui.isEqual(he.value, Q) || (he.value = Q);
    }, 120);
    let st = null;
    const Je = Vi(vf) ?? null;
    function cn() {
      if (Je && oe.value) {
        const Y = Je.getPage(oe.value);
        l.value = Y?.layoutSettings ? { ...Y.layoutSettings } : void 0;
      }
    }
    _a(() => {
      window.addEventListener("resize", zn, { passive: !0 }), cn(), Je && "subscribe" in Je && (st = Je.subscribe((Y) => {
        Y === "PAGE_UPDATE" && cn();
      }));
    }), mu(() => {
      window.removeEventListener("resize", zn), Je && "unsubscribe" in Je && st && Je.unsubscribe(st);
    });
    function xt(Y) {
      if (je.value) return;
      const k = (Y ?? ue.value).filter((fe) => fe.i !== ln).map(ft), ee = be.value || [], ne = k.map((fe) => ({
        ...fe,
        x: Math.round(fe.x * 100) / 100,
        y: Math.round(fe.y * 100) / 100,
        width: Math.round(fe.width * 100) / 100,
        height: Math.round(fe.height * 100) / 100
      })), ce = ee.map((fe) => ({
        ...fe,
        x: Math.round(fe.x * 100) / 100,
        y: Math.round(fe.y * 100) / 100,
        width: Math.round(fe.width * 100) / 100,
        height: Math.round(fe.height * 100) / 100
      }));
      Ui.isEqual(ce, ne) || Fe.value.updateLayout(k);
    }
    async function J() {
      return Ie.value.find((Y) => Y.i === ln) || (Ie.value = [...Ie.value, { x: 0, y: 0, w: 2, h: 2, i: ln, static: !1 }], await kt()), await kt(), Se.value?.getItem?.(ln);
    }
    function qt() {
      Ie.value = Ie.value.filter((Y) => Y.i !== ln);
    }
    async function Et() {
      G.value = !0, te.value = !1, await J();
    }
    async function wt(Y) {
      const Q = Y;
      if (!Q || !Se.value) return;
      const k = document.querySelector(".alayout");
      if (!k) return;
      const ee = k.getBoundingClientRect();
      Ie.value.find((et) => et.i === ln) || (Ie.value = [...Ie.value, { x: 0, y: 0, w: 2, h: 2, i: ln, static: !1 }], await kt()), await kt();
      const ne = Se.value?.getItem?.(ln);
      if (!ne) return;
      const ce = Q.clientX - ee.left, fe = Q.clientY - ee.top;
      let se = ne.calcXY(fe, ce);
      const ae = Se.value?.cols ?? 12;
      (se.x < 0 || se.y < 0 || se.x >= ae) && (se = ne.calcXY(ce, fe)), ie.value = { x: $e(se.x, 0), y: $e(se.y, 0) }, te.value ? Se.value.dragEvent("drag", ln, ie.value.x, ie.value.y, 2, 2) : (Se.value.dragEvent("dragstart", ln, ie.value.x, ie.value.y, 2, 2), te.value = !0);
    }
    function Zt() {
      te.value && Se.value && Se.value.dragEvent("dragend", ln, ie.value.x, ie.value.y, 2, 2), qt(), te.value = !1, G.value = !1;
    }
    function it(Y) {
      const Q = Y?.item?._underlying_vm_ || Y?.added?.element || Y?.item, k = Q?.type ?? "UnknownWidget", ee = Q?.datasourceId ?? "default";
      te.value && Se.value && Se.value.dragEvent("dragend", ln, ie.value.x, ie.value.y, 2, 2), qt(), te.value = !1, G.value = !1;
      const ne = `widget_${Math.random().toString(36).slice(2, 9)}`, { x: ce, y: fe } = ie.value;
      he.value = [...he.value, { i: ne, x: ce, y: fe, w: 2, h: 2, static: !1 }], xt(he.value), ht(ne, k, ee), ie.value = { x: -1, y: -1 };
    }
    function Tt() {
      G.value = !0;
    }
    function Ut() {
      Zt();
    }
    function ht(Y, Q, k) {
      const ne = { uid: Y, type: Q, config: { datasourceId: k, settings: {} }, wrapperConfig: Ui.cloneDeep(i0) };
      j.value.updateWidgets([...me.value, ne]);
    }
    function Ht(Y) {
      j.value.updateWidgets(me.value.filter((Q) => Q.uid !== Y)), he.value = he.value.filter((Q) => Q.i !== Y), xt(he.value);
    }
    const ir = m, Ot = (Y) => {
      ir("openSettings", Y);
    };
    return (Y, Q) => {
      const k = ba("va-button"), ee = ba("VaScrollContainer");
      return bt(), Or(ee, {
        class: "max-h-screen ml-15",
        vertical: ""
      }, {
        default: nr(() => [
          Rr("div", {
            ref_key: "wrapper",
            ref: Ye,
            onDragenter: Tt,
            onDrop: pc(Ut, ["prevent"]),
            onDrag: wt,
            class: "alayout",
            onClick: Oe,
            style: Gi({ "--grid-row-height": O.value + "px", "--grid-cols": E.value })
          }, [
            (bt(), Or(bn(Bf), {
              ref_key: "gridLayout",
              ref: Se,
              key: F.value,
              layout: ue.value,
              "row-height": O.value,
              responsive: !0,
              "vertical-compact": !1,
              breakpoints: bn(Tr),
              cols: z.value,
              onLayoutUpdated: xt
            }, {
              item: nr(({ item: ne }) => [
                Rr("div", {
                  class: "widget-item-wrapper",
                  onContextmenu: pc((ce) => xe(ce, String(ne.i)), ["stop", "prevent"])
                }, [
                  me.value?.find((ce) => ce.uid === ne.i) ? (bt(), Or(bn(hf), {
                    key: 0,
                    widget: me.value.find((ce) => ce.uid === ne.i),
                    ref: `${ne.i}_wrapper`,
                    onOpenSettings: Ot,
                    editEnabled: "",
                    onRemoveWidget: () => Ht(ne.i.toString())
                  }, null, 8, ["widget", "onRemoveWidget"])) : (bt(), Mn("span", Py, pu(`${ne.i}${ne.static ? "- Static" : ""}`), 1))
                ], 40, zy)
              ]),
              _: 1
            }, 8, ["layout", "row-height", "breakpoints", "cols"])),
            Ne.value.visible ? (bt(), Mn("div", {
              key: 0,
              class: "widget-context-menu",
              style: Gi({ left: Ne.value.x + "px", top: Ne.value.y + "px" })
            }, [
              ti(k, {
                onClick: ze,
                size: "small"
              }, {
                default: nr(() => [...Q[0] || (Q[0] = [
                  hc(" Copy ", -1)
                ])]),
                _: 1
              })
            ], 4)) : du("", !0),
            uf(ti(bn(a0), {
              list: we.value,
              group: { name: "widgets" },
              class: "invisible-dropzone",
              itemKey: "type",
              sort: !1,
              onStart: Et,
              onEnd: Zt,
              onAdd: it
            }, {
              item: nr(({ element: ne }) => [
                Rr("div", null, pu(ne.type), 1)
              ]),
              _: 1
            }, 8, ["list"]), [
              [ff, G.value]
            ]),
            Ce.value.visible && bn(He).hasClipboard ? (bt(), Mn("div", {
              key: 1,
              class: "canvas-context-menu",
              style: Gi({ left: Ce.value.x + "px", top: Ce.value.y + "px" })
            }, [
              ti(k, {
                onClick: We,
                size: "small"
              }, {
                default: nr(() => [...Q[1] || (Q[1] = [
                  hc(" Paste ", -1)
                ])]),
                _: 1
              })
            ], 4)) : du("", !0)
          ], 36)
        ]),
        _: 1
      });
    };
  }
}), ky = /* @__PURE__ */ bu(Cy, [["__scopeId", "data-v-645df0a5"]]), Dy = { class: "grid-settings" }, Ly = { class: "cols-grid" }, By = /* @__PURE__ */ Ji({
  __name: "GridSettingsPanel",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(p) {
    const m = r0(p, "modelValue"), l = ["lg", "md", "sm", "xs", "xxs"], y = Tr, z = Qe(() => {
      const D = m.value ?? {};
      return {
        rowHeight: D.rowHeight ?? wa.rowHeight,
        cols: { ...wa.cols, ...D.cols }
      };
    });
    function O(D, E) {
      m.value = { ...m.value, [D]: E };
    }
    function F(D, E) {
      const V = { ...z.value.cols, [D]: E };
      m.value = { ...m.value, cols: V };
    }
    return (D, E) => {
      const V = ba("va-input");
      return bt(), Mn("div", Dy, [
        E[1] || (E[1] = Rr("h4", { class: "grid-settings-title" }, "Grid Settings", -1)),
        ti(V, {
          class: "field",
          label: "Row Height (px)",
          "model-value": z.value.rowHeight,
          "onUpdate:modelValue": E[0] || (E[0] = (oe) => O("rowHeight", Number(oe))),
          type: "number",
          min: 10,
          max: 200
        }, null, 8, ["model-value"]),
        E[2] || (E[2] = Rr("h4", { class: "grid-settings-subtitle" }, "Columns per Breakpoint", -1)),
        Rr("div", Ly, [
          (bt(), Mn(lf, null, cf(l, (oe) => ti(V, {
            key: oe,
            label: `${oe} (≥${bn(y)[oe]}px)`,
            "model-value": z.value.cols[oe],
            "onUpdate:modelValue": (j) => F(oe, Number(j)),
            type: "number",
            min: 1,
            max: 48,
            class: "col-input"
          }, null, 8, ["label", "model-value", "onUpdate:modelValue"])), 64))
        ])
      ]);
    };
  }
}), Wy = /* @__PURE__ */ bu(By, [["__scopeId", "data-v-2078e072"]]), qf = "org.eclipse.daanse.board.app.ui.vue.layouts.grid";
function Uf({ services: p }) {
  p.getRequired(af).addLayout({
    id: qf,
    name: "GridLayout",
    description: "responsive grid-based layout",
    component: hy,
    editor: ky,
    settings: Wy
  });
}
function Hf({ services: p }) {
  p.getRequired(af).removeLayout(qf);
}
const Fy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: Uf,
  deactivate: Hf
}, Symbol.toStringTag, { value: "Module" })), of = "org.eclipse.daanse.board.app.ui.vue.layouts.grid", Ny = "0.0.1-next.1";
async function Zy(p) {
  const m = globalThis.__tsm__;
  if (!m)
    throw new Error(`${of}: tsm runtime is not initialized`);
  m.register(of, Fy, Ny, "ui.vue.layouts.grid"), await Uf?.(p);
}
async function jy(p) {
  await Hf?.(p);
}
export {
  Zy as activate,
  jy as deactivate
};
